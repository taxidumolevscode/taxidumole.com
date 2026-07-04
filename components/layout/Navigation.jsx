import Link from "next/link";
import { siteMeta } from "../siteData";

export default function Navigation({ onMenuOpen }) {
  return (
    <nav className="site-nav fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
      <Link
        href="/"
        className="brand-lockup flex min-w-0 items-center gap-3"
        aria-label={`${siteMeta.brand} accueil`}
      >
        <img
          src={siteMeta.logoImage}
          alt=""
          className="brand-logo h-12 w-24 object-contain md:h-16 md:w-32"
        />
        <span className="brand-name hidden text-sm font-black uppercase tracking-[0.18em] text-white md:block">
          {siteMeta.brand}
        </span>
      </Link>
      
      <div className="flex items-center gap-8">
        <a 
          href={siteMeta.phoneHref}
          className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-transparent hover:border-white transition-all"
        >
          Appeler Maintenant
        </a>
        <button 
          onClick={onMenuOpen} 
          className="group flex flex-col items-end gap-1.5 cursor-pointer"
          aria-label="Ouvrir le menu"
        >
          <span className="block w-8 h-[2px] bg-white group-hover:w-6 transition-all duration-300"></span>
          <span className="block w-5 h-[2px] bg-white group-hover:w-8 transition-all duration-300"></span>
        </button>
      </div>

      <style jsx>{`
        .site-nav {
          backdrop-filter: saturate(120%);
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.82));
        }

        .brand-name {
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .site-nav {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }

          .brand-lockup {
            max-width: 58vw;
          }
        }
      `}</style>
    </nav>
  );
}
