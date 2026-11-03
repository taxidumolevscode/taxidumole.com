// Same Apps Script deployment and field names as the owner's working form.
const bookingEndpoint = 'https://script.google.com/macros/s/AKfycbwSWOIRmJgaKRV2wYBfXxqht_A-OQiS9ob0J3SxyFNtbHleMF0v1BlQZWsWhL2IXBth/exec';

export const config = { api: { bodyParser: { sizeLimit: '16kb' } } };

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }
  const input = req.body;
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return res.status(400).json({ error: 'Demande invalide.' });
  }
  const keys = ['nom', 'telephone', 'email', 'date', 'heure', 'depart', 'destination', 'passagers', 'message'];
  const data = {};
  for (const key of keys) {
    if (input[key] !== undefined && typeof input[key] !== 'string') {
      return res.status(400).json({ error: 'Un champ est invalide.' });
    }
    data[key] = (input[key] || '').trim();
    if (data[key].length > (key === 'message' ? 3000 : 300)) {
      return res.status(400).json({ error: 'Un champ est trop long.' });
    }
  }
  if (['nom', 'telephone', 'email', 'date', 'heure', 'depart', 'destination', 'passagers'].some((key) => !data[key]) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    !/^\+?[\d\s().-]{6,30}$/.test(data.telephone) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
    !/^([01]\d|2[0-3]):[0-5]\d$/.test(data.heure) ||
    !/^[1-8]$/.test(data.passagers)) {
    return res.status(400).json({ error: 'Vérifiez vos coordonnées, la date, l’heure et le nombre de passagers.' });
  }
  const parsedDate = new Date(`${data.date}T12:00:00Z`);
  const today = new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date());
  if (Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== data.date || data.date < today) {
    return res.status(400).json({ error: 'Choisissez une date de départ valide, aujourd’hui ou plus tard.' });
  }
  const payload = new URLSearchParams({
    name: data.nom,
    phone: data.telephone,
    email: data.email,
    date: data.date,
    time: data.heure,
    pickup: data.depart,
    destination: data.destination,
    infos: [`Passagers : ${data.passagers}`, data.message].filter(Boolean).join('\n'),
  });
  try {
    const upstream = await fetch(bookingEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: payload.toString(),
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
    });
    const body = await upstream.text();
    if (!upstream.ok || !body.trim() ||
      /accounts\.google\.com/.test(upstream.url) ||
      /Script function not found|ScriptError|Exception:|Authorization is required|You need access|Unable to open|Page Not Found/i.test(body)) {
      return res.status(502).json({ error: 'Le service de réservation n’a pas confirmé la transmission. Contactez-nous par téléphone.' });
    }
    // Some Apps Script deployments return JSON; others return an HTML receipt.
    // A successful HTTP response confirms transmission, not mailbox delivery.
    if (upstream.headers.get('content-type')?.includes('application/json')) {
      let result;
      try { result = JSON.parse(body); } catch {
        return res.status(502).json({ error: 'Réponse du service de réservation illisible. Contactez-nous par téléphone.' });
      }
      if (result?.success === false || result?.ok === false || result?.error || /^(error|failed|failure)$/i.test(result?.status || result?.result || '')) {
        return res.status(502).json({ error: 'Le service a refusé la demande. Contactez-nous par téléphone.' });
      }
    }
    return res.status(200).json({ transmitted: true });
  } catch {
    // Do not retry automatically: the upstream may have sent the email already.
    return res.status(502).json({ error: 'La transmission n’a pas pu être vérifiée. Pour éviter un doublon, appelez-nous avant de renvoyer la demande.' });
  }
}
