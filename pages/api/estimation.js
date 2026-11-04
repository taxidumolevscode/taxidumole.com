import { estimateFare } from '../../lib/taxiFare.mjs';

export const config = { api: { bodyParser: { sizeLimit: '4kb' } } };

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Méthode non autorisée.' }); }
  const input = req.body;
  if (!input || ['depart', 'destination', 'date', 'heure', 'passagers'].some(key => typeof input[key] !== 'string' || !input[key].trim() || input[key].length > 300)) return res.status(400).json({ error: 'Renseignez les adresses, la date, l’heure et les passagers.' });
  try { estimateFare({ ...input, meters: 1 }); } catch (error) { return res.status(400).json({ error: error.message }); }
  const key = process.env.GOOGLE_MAPS_SERVER_KEY;
  if (!key) return res.status(503).json({ error: 'L’estimation automatique n’est pas encore activée. Vous pouvez continuer votre demande pour recevoir un devis.' });
  try {
    const response = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'routes.distanceMeters,routes.duration',
      },
      body: JSON.stringify({
        origin: { address: input.depart.trim() },
        destination: { address: input.destination.trim() },
        travelMode: 'DRIVE', routingPreference: 'TRAFFIC_UNAWARE',
        computeAlternativeRoutes: false, languageCode: 'fr-FR', units: 'METRIC',
      }),
      signal: AbortSignal.timeout(9000),
    });
    const data = await response.json();
    const route = data.routes?.[0];
    if (!response.ok || !/^\d+(\.\d+)?s$/.test(route?.duration || '')) throw new Error('route');
    const seconds = Number(route.duration.slice(0, -1));
    if (!Number.isFinite(seconds) || seconds <= 0) throw new Error('duration');
    const fare = estimateFare({ ...input, meters: route.distanceMeters });
    return res.status(200).json({ ...fare, meters: route.distanceMeters, seconds });
  } catch {
    return res.status(502).json({ error: 'Impossible de calculer un itinéraire fiable. Vérifiez les adresses ou demandez un devis.' });
  }
}
