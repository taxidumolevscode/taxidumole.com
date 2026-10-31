import SeoHead from '../components/layout/SeoHead';
import AppShell, { PageIntro } from '../components/mobility/AppShell';
import BookingForm from '../components/mobility/BookingForm';
import JourneyPanel from '../components/mobility/JourneyPanel';
import { Phone } from 'lucide-react';
import { siteMeta } from '../components/siteData';

export default function ReserverEnLignePage() {
  return <><SeoHead title="Réserver en ligne" description="Préparez votre trajet avec Taxi du Môle : départ, destination, horaires et coordonnées, puis demande par email."/><AppShell>
    <PageIntro eyebrow="VOTRE PROCHAIN TRAJET" title="On vous emmène où ?">Quelques détails pour préparer votre prise en charge. Le trajet et le prix sont confirmés personnellement.</PageIntro>
    <div className="app-reservation-grid"><section className="app-form-card"><BookingForm/></section><div><JourneyPanel/><a className="app-help" href={siteMeta.phoneHref}><Phone size={20}/><span>Un départ imminent ?<strong>{siteMeta.phoneDisplay}</strong></span></a></div></div>
  </AppShell></>;
}
