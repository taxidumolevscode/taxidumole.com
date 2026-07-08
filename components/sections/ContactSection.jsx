import FadeIn from '../animations/FadeIn';
import { siteMeta } from '../siteData';

const footerLinks = {
  socials: [
    { label: 'Appel Direct', href: siteMeta.phoneHref },
    { label: 'Devis Rapide', href: siteMeta.emailHref },
    { label: 'Contact Prioritaire', href: '/contact' },
  ],
  contact: [siteMeta.email, siteMeta.phoneDisplay],
  locations: ['Bonneville', 'Cluses', 'Genève']
};

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col justify-between pt-24 pb-10 px-4 md:px-10 relative">
      <div className="max-w-3xl relative z-10">
        <FadeIn>
          <div className="mb-8 inline-flex rounded-[1.5rem] bg-white p-3 shadow-2xl shadow-black/30">
            <img
              src={siteMeta.pageLogoImage}
              alt="Logo Taxi du Môle"
              className="h-24 w-56 object-contain md:h-28 md:w-72"
            />
          </div>
        </FadeIn>
        <span className="block text-xs font-bold tracking-widest text-gray-500 mb-6">
          ( 06 ) PRENDRE CONTACT
        </span>
        <FadeIn>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            Votre Trajet <br/> Commence Ici.
          </h2>
          <p className="text-xl text-gray-400 max-w-md mb-10">
            Appel direct, demande de devis et organisation claire pour vos trajets en Haute-Savoie.
          </p>
          <a 
            href={siteMeta.phoneHref}
            className="inline-block bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Appeler Maintenant
          </a>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-900 pt-10 relative z-10">
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Accès Rapide</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.socials.map((social, index) => (
              <li key={index}>
                <a href={social.href} className="hover:text-gray-400 transition-colors">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.contact.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Locations</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-end">
          <button onClick={scrollToTop} className="group flex items-center gap-2">
            <span className="text-xs uppercase font-bold">Retour En Haut</span>
            <div className="p-2 border border-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              <div className="w-3 h-3 border-t-2 border-l-2 border-current transform rotate-45 translate-y-0.5"></div>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-20 md:mt-0">
        <h1 className="text-[13vw] font-black uppercase leading-none tracking-tighter text-center opacity-20 select-none">
          Taxi du Môle
        </h1>
      </div>
    </section>
  );
}
