import { useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, ArrowLeft, MapPin, Navigation, CalendarDays, Users, Check, Mail } from 'lucide-react';
import { siteMeta } from '../siteData';

const suggestions = ['Bonneville', 'Aéroport de Genève', 'Gare de Genève Cornavin', 'Gare de Cluses', 'Gare d’Annemasse', 'Annecy', 'Chamonix', 'Flaine', 'Megève', 'Samoëns', 'La Clusaz'];

export default function BookingForm({ compact = false }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [draftOpened, setDraftOpened] = useState(false);
  const [values, setValues] = useState({ depart: '', destination: '', date: '', heure: '', passagers: '1', nom: '', telephone: '', email: '', message: '' });
  const update = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };
  const field = (name, label, Icon, props = {}) => <label className="app-field" key={name}><span>{label}</span><div>{Icon && <Icon size={18}/>}<input name={name} value={values[name]} onChange={update} required {...props}/></div></label>;
  const submit = (event) => {
    event.preventDefault();
    const current = { ...values, ...Object.fromEntries(new FormData(event.currentTarget)) };
    setValues(current);
    if (compact) {
      router.push({ pathname: '/reserver-en-ligne', query: Object.fromEntries(['depart', 'destination', 'date', 'heure', 'passagers'].map((name) => [name, current[name]])) });
    } else if (step < 2) {
      setStep(step + 1);
    } else {
      const body = ['Bonjour, je souhaite demander un trajet.', ...Object.entries(current).map(([name, value]) => `${name} : ${value}`)].join('\n');
      window.location.href = `mailto:${siteMeta.email}?subject=${encodeURIComponent('Demande de trajet — Taxi du Môle')}&body=${encodeURIComponent(body)}`;
      setDraftOpened(true);
    }
  };
  // Restore only known trip fields from the homepage, after the router is ready.
  const [restored, setRestored] = useState(false);
  if (!compact && router.isReady && !restored) {
    setRestored(true);
    setValues((previous) => Object.fromEntries(Object.entries(previous).map(([key, value]) => [key, typeof router.query[key] === 'string' ? router.query[key] : value])));
  }
  return <form className="app-booking" onSubmit={submit}>
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
      </>}
      {step === 1 && <>
        <h2>Comment vous joindre ?</h2><p className="app-muted">Nous vous recontactons pour confirmer le trajet et son prix.</p>
        {field('nom', 'Nom et prénom', null, { autoComplete: 'name' })}
        {field('telephone', 'Téléphone', null, { type: 'tel', autoComplete: 'tel' })}
        {field('email', 'Email', null, { type: 'email', autoComplete: 'email', required: false })}
        <label className="app-field"><span>Bagages, skis ou autre précision (facultatif)</span><textarea name="message" value={values.message} onChange={update} rows={3}/></label>
        <p className="app-field-note">Vos coordonnées servent à traiter votre demande. <a href="/politique-confidentialite">Confidentialité</a></p>
      </>}
      {step === 2 && <>
        <h2>Votre trajet, en un coup d’œil.</h2><dl className="app-summary">{[['Départ',values.depart],['Destination',values.destination],['Quand',`${values.date.split('-').reverse().join('/')} à ${values.heure}`],['Passagers',values.passagers],['Contact',`${values.nom} · ${values.telephone}`],['Email',values.email],['Précisions',values.message]].filter(([,v])=>v).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p className="app-notice"><Mail size={20}/>Cette demande ouvre votre messagerie avec un email prérempli. Envoyez-le pour nous contacter. La réservation sera confirmée après notre réponse.</p>
      </>}
    </div>
    <div className="app-form-actions">{step > 0 && <button className="app-back" type="button" onClick={() => { setStep(step - 1); setDraftOpened(false); }} aria-label="Étape précédente"><ArrowLeft size={20}/></button>}<button className="app-primary" type="submit">{step === 2 ? 'Préparer ma demande par email' : 'Continuer'}<ArrowRight size={18}/></button></div>
    {draftOpened && <p className="app-notice" role="status">Votre messagerie a été sollicitée. Envoyez l’email pour transmettre la demande. Si elle ne s’ouvre pas, appelez le {siteMeta.phoneDisplay}.</p>}
    {compact && <p className="app-field-note app-center">Sans compte · Prix confirmé avant le départ</p>}
  </form>;
}
