import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MapPin, Navigation, CalendarDays, Users, Check, Send } from 'lucide-react';
import { siteMeta } from '../siteData';
import FareEstimate from './FareEstimate';

const suggestions = ['Bonneville', 'Aéroport de Genève', 'Gare de Genève Cornavin', 'Gare de Cluses', 'Gare d’Annemasse', 'Annecy', 'Chamonix', 'Flaine', 'Megève', 'Samoëns', 'La Clusaz'];

export default function BookingForm({ compact = false }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const sendingRef = useRef(false);
  const [values, setValues] = useState({ depart: '', destination: '', date: '', heure: '', passagers: '1', nom: '', telephone: '', email: '', message: '' });
  const update = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };
  const field = (name, label, Icon, props = {}) => <label className="app-field" key={name}><span>{label}</span><div>{Icon && <Icon size={18}/>}<input name={name} value={values[name]} onChange={update} required {...props}/></div></label>;
  const submit = async (event) => {
    event.preventDefault();
    if (sendingRef.current || sent) return;
    const current = { ...values, ...Object.fromEntries(new FormData(event.currentTarget)) };
    setValues(current);
    if (compact) {
      router.push({ pathname: '/reserver-en-ligne', query: Object.fromEntries(['depart', 'destination', 'date', 'heure', 'passagers'].map((name) => [name, current[name]])) });
    } else if (step < 2) {
      setStep(step + 1);
    } else {
      sendingRef.current = true;
      setSending(true);
      setError('');
      try {
        const response = await fetch('/api/reservations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(current),
        });
        const result = await response.json();
        if (!response.ok || result.transmitted !== true) {
          throw new Error(result.error || 'La demande n’a pas pu être transmise. Contactez-nous par téléphone.');
        }
        setSent(true);
      } catch (failure) {
        setError(failure instanceof TypeError || failure instanceof SyntaxError
          ? 'La transmission n’a pas pu être vérifiée. Appelez-nous avant de renvoyer la demande pour éviter un doublon.'
          : failure.message);
      } finally {
        sendingRef.current = false;
        setSending(false);
      }
    }
  };
  // Restore only known trip fields from the homepage, after the router is ready.
  const restored = useRef(false);
  useEffect(() => {
    if (compact || !router.isReady || restored.current) return;
    restored.current = true;
    setValues((previous) => ({ ...previous, ...Object.fromEntries(
      ['depart', 'destination', 'date', 'heure', 'passagers']
        .filter((key) => typeof router.query[key] === 'string')
        .map((key) => [key, router.query[key]])
    ) }));
  }, [compact, router.isReady, router.query]);
  return <form className="app-booking" onSubmit={submit} aria-busy={sending}>
    {!compact && <ol className="app-steps" aria-label="Progression de la demande">{['Votre trajet', 'Coordonnées', 'Récapitulatif'].map((label, index) => <li key={label} aria-current={step === index ? 'step' : undefined} className={step >= index ? 'is-current' : ''}><span>{step > index ? <Check size={14}/> : index + 1}</span>{label}</li>)}</ol>}
    <div key={step} className="app-step-content">
      {step === 0 && <>
        <div className="app-address-fields">
          {field('depart', 'Adresse de départ', MapPin, { placeholder: 'D’où partez-vous ?', list: 'trip-places', autoComplete: 'street-address' })}
          {field('destination', 'Destination', Navigation, { placeholder: 'Où souhaitez-vous aller ?', list: 'trip-places' })}
        </div>
        <datalist id="trip-places">{suggestions.map((place) => <option key={place} value={place}/>)}</datalist>
        <div className="app-field-grid">{field('date', 'Date', CalendarDays, { type: 'date', min: new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date()) })}{field('heure', 'Heure', null, { type: 'time' })}</div>
        <label className="app-field"><span>Passagers</span><div><Users size={18}/><select name="passagers" value={values.passagers} onChange={update}>{[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'passager' : 'passagers'}</option>)}</select></div></label>
        <p className="app-field-note">Véhicule et capacité confirmés selon votre demande.</p>
        <FareEstimate values={values}/>
      </>}
      {step === 1 && <>
        <h2>Comment vous joindre ?</h2><p className="app-muted">Nous vous recontactons pour confirmer le trajet et son prix.</p>
        {field('nom', 'Nom et prénom', null, { autoComplete: 'name' })}
        {field('telephone', 'Téléphone', null, { type: 'tel', autoComplete: 'tel', minLength: 6, maxLength: 30 })}
        {field('email', 'Email', null, { type: 'email', autoComplete: 'email' })}
        <label className="app-field"><span>Bagages, skis ou autre précision (facultatif)</span><textarea name="message" value={values.message} onChange={update} rows={3}/></label>
        <p className="app-field-note">Vos coordonnées servent à traiter votre demande. <a href="/politique-confidentialite">Confidentialité</a></p>
      </>}
      {step === 2 && <>
        <h2>Votre trajet, en un coup d’œil.</h2><dl className="app-summary">{[['Départ',values.depart],['Destination',values.destination],['Quand',`${values.date.split('-').reverse().join('/')} à ${values.heure}`],['Passagers',values.passagers],['Contact',`${values.nom} · ${values.telephone}`],['Email',values.email],['Précisions',values.message]].filter(([,v])=>v).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        {!sent && <p className="app-notice"><Send size={20}/>Envoyez votre demande directement depuis le site. Nous vous recontactons pour confirmer le prix et la prise en charge.</p>}
      </>}
    </div>
    <div className="app-form-actions">{step > 0 && !sent && <button className="app-back" type="button" disabled={sending} onClick={() => { setStep(step - 1); setError(''); }} aria-label="Étape précédente"><ArrowLeft size={20}/></button>}<button className="app-primary" type="submit" disabled={sending || sent}>{sent ? 'Demande transmise' : sending ? 'Envoi en cours…' : step === 2 ? 'Envoyer ma demande' : 'Continuer'}{sent ? <Check size={18}/> : <ArrowRight size={18}/>}</button></div>
    {sent && <p className="app-notice app-booking-success" role="status">Votre demande a été transmise au service de réservation. Nous vous recontactons pour confirmer votre trajet. Pour un départ imminent, appelez le <a href={siteMeta.phoneHref}>{siteMeta.phoneDisplay}</a>.</p>}
    {error && <p className="app-notice app-booking-error" role="alert">{error} <a href={siteMeta.phoneHref}>{siteMeta.phoneDisplay}</a></p>}
    {compact && <p className="app-field-note app-center">Sans compte · Prix confirmé avant le départ</p>}
  </form>;
}
