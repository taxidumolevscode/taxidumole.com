import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Route, Mountain, Wallet, CalendarDays, Phone, ArrowUpRight } from 'lucide-react';
import { siteMeta } from '../siteData';

const tabs = [
  ['/', 'Accueil', Home],
  ['/type-de-trajet', 'Trajets', Route],
  ['/ski-transfert', 'Ski transfert', Mountain],
  ['/tarifs', 'Tarifs', Wallet],
  ['/reserver-en-ligne', 'Réserver', CalendarDays],
];

export default function AppShell({ children }) {
  const { pathname } = useRouter();
  return <div className="mobility-app">
    <header className="app-header">
      <Link href="/" className="app-brand" aria-label="Taxi du Môle — accueil">
        <img src={siteMeta.logoImage} alt="" />
        <span>Taxi du Môle<small>VOTRE CHAUFFEUR EN HAUTE-SAVOIE</small></span>
      </Link>
      <nav className="app-desktop-nav" aria-label="Navigation principale">
        {tabs.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <a className="app-call" href={siteMeta.phoneHref} aria-label={`Appeler le ${siteMeta.phoneDisplay}`}><Phone size={17} /><span>{siteMeta.phoneDisplay}</span></a>
    </header>
    <main className="app-main">{children}</main>
    <footer className="app-footer">
      <span>Taxi du Môle <span className="app-muted">· Bonneville, Haute-Savoie</span></span>
      <div><Link href="/contact">Contact <ArrowUpRight size={13}/></Link><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link></div>
    </footer>
    <nav className="app-bottom-nav" aria-label="Navigation mobile">
      {tabs.map(([href, label, Icon]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}><Icon size={21}/><span>{label}</span></Link>)}
    </nav>
  </div>;
}

export function PageIntro({ eyebrow, title, children }) {
  return <div className="app-page-intro"><p className="app-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="app-muted">{children}</p></div>;
}
