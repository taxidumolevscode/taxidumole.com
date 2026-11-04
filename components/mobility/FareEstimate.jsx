import { useEffect, useState } from 'react';

const euros = cents => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(cents / 100);

export default function FareEstimate({ values }) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const signature = JSON.stringify([values.depart, values.destination, values.date, values.heure, values.passagers]);
  useEffect(() => {
    setResult(null); setError(''); setBusy(false);
    const [depart, destination, date, heure, passagers] = JSON.parse(signature);
    if (!depart.trim() || !destination.trim() || !date || !heure) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
    setBusy(true);
    try {
      const response = await fetch('/api/estimation', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ depart, destination, date, heure, passagers }),
        signal: controller.signal,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (!controller.signal.aborted) setResult(data);
    } catch (failure) {
      if (!controller.signal.aborted) setError(failure.message || 'Estimation indisponible.');
    } finally { if (!controller.signal.aborted) setBusy(false); }
    }, 800);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [signature]);
  return <div className="app-fare-estimate" aria-busy={busy}>
    <div aria-live="polite">
      {busy && <p className="app-field-note">Calcul du prix en cours…</p>}
      {!values.date || !values.heure ? <p className="app-field-note">Choisissez la date et l’heure pour afficher automatiquement le prix estimé.</p> : null}
      {result && <div className="app-notice" style={{ display: 'block' }}>
        <strong>Estimation : {euros(result.totalCents)} TTC</strong>
        <p>{(result.meters / 1000).toLocaleString('fr-FR', { maximumFractionDigits: 1 })} km · environ {Math.ceil(result.seconds / 60)} min · tarif {result.category} ({euros(result.perKmCents)}/km)</p>
        <p className="app-field-note">Grille 2026 · prise en charge {euros(result.baseCents)} · supplément passagers {euros(result.passengerCents)}. Hypothèse : retour à vide. Hors approche, attente, péages et bagages particuliers. Estimation indicative, non contractuelle : le taximètre et les conditions réelles peuvent modifier le montant, notamment lors d’un changement de période tarifaire. Le tarif neige n’est pas appliqué automatiquement.</p>
      </div>}
    </div>
    {error && <p className="app-notice app-booking-error" role="alert">{error}</p>}
  </div>;
}
