import { ArrowUpRight, MapPin, Plane, Mountain, Clock } from 'lucide-react';
import Link from 'next/link';

export default function JourneyPanel() {
  return <aside className="app-journey-panel">
    <div className="app-journey-top"><span className="app-pill"><span/>Bonneville & Haute-Savoie</span><span className="app-map-label">VOTRE PROCHAIN DÉPART</span></div>
    <div className="app-journey-copy"><p>La route est plus belle<br/>quand on se laisse conduire.</p><span>Les trajets du quotidien. Les départs qui comptent.</span></div>
    <div className="app-route-art" aria-label="Illustration des destinations desservies, sans itinéraire calculé">
      <svg viewBox="0 0 600 320" role="img" aria-label="Schéma des liaisons entre Genève, Bonneville et les stations">
        <g fill="none" stroke="#d9d9d9" strokeWidth="1.5"><path d="M-30 230Q180 0 640 120M-20 100Q240 360 650 210M100-20Q180 130 40 350M340-20Q200 180 490 350M540-20Q370 110 650 290"/><path d="M-20 255Q180 25 640 145M-20 75Q240 335 650 185M365-20Q225 180 515 350"/></g>
        <path d="M110 90 C200 70 195 235 295 220 S390 80 490 100" fill="none" stroke="#ffb600" strokeWidth="5" strokeLinecap="round" strokeDasharray="7 9"/>
        <g fill="#fff" stroke="#ffb600" strokeWidth="5"><circle cx="110" cy="90" r="9"/><circle cx="295" cy="220" r="9"/><circle cx="490" cy="100" r="9"/></g>
        <g fill="#333" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600"><text x="65" y="62">Genève</text><text x="252" y="255">Bonneville</text><text x="448" y="72">Les stations</text></g>
      </svg>
      <span className="app-map-caption">Nos destinations · Schéma illustratif</span>
    </div>
    <img className="app-car-photo" src="/images/audi-break-taxi-side.jpeg" alt="Véhicule Taxi du Môle"/>
    <div className="app-journey-bottom"><div><span className="app-icon-box"><MapPin size={18}/></span><span>Un service local<strong>Un contact direct, du départ à l’arrivée.</strong></span></div><Link href="/type-de-trajet" aria-label="Découvrir les trajets"><ArrowUpRight size={23}/></Link></div>
  </aside>;
}

export function ServiceShortcuts() {
  return <section className="app-shortcuts" aria-label="Nos services">{[[Plane,'Aéroports & gares','Votre correspondance, sereinement.','/type-de-trajet#aeroport-geneve-gares'],[Mountain,'Cap sur les stations','Un transfert jusqu’au pied des pistes.','/ski-transfert'],[Clock,'Trajets du quotidien','À Bonneville et dans toute la vallée.','/type-de-trajet#prive-entreprises-scolaire']].map(([Icon,title,text,href])=><Link className="app-shortcut" href={href} key={title}><span className="app-icon-box"><Icon size={21}/></span><div><h2>{title}</h2><p>{text}</p></div><ArrowUpRight size={19}/></Link>)}</section>;
}
