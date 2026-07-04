import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

export default function ReserverEnLignePage() {
  const mailto = `${siteMeta.emailHref}?subject=Réservation%20Taxi%20du%20Môle&body=Bonjour,%0D%0A%0D%0AJe%20souhaite%20réserver%20un%20trajet.%0D%0A%0D%0ANom:%0D%0ATéléphone:%0D%0AEmail:%0D%0ADate:%0D%0AHeure:%0D%0ADépart:%0D%0ADestination:%0D%0ANombre%20de%20passagers:%0D%0ABagages%20/%20skis:%0D%0ANuméro%20de%20vol%20ou%20train:%0D%0AMessage:%0D%0A`;

  return (
    <>
      <SeoHead
        title="Réserver En Ligne"
        description="Réserver Taxi du Môle en ligne: envoyez départ, destination, horaire, passagers, bagages et demande de devis pour Haute-Savoie et Genève."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Réserver En Ligne"
          title="Une demande claire, une confirmation rapide."
          intro="Le formulaire ouvre un email pré-rempli afin de conserver une réservation simple, fiable et facile à confirmer."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
            <article className="rounded-[2rem] bg-black text-white p-8 md:p-10">
              <img src={siteMeta.logoImage} alt="Logo Taxi du Môle" className="mb-8 h-28 w-64 rounded-[1rem] bg-white object-contain p-3" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                Besoin urgent ?
              </h2>
              <a href={siteMeta.phoneHref} className="text-3xl font-black text-white">
                {siteMeta.phoneDisplay}
              </a>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Pour un départ proche, l'appel reste le moyen le plus rapide. Pour un transfert aéroport, une station ou un trajet planifié, envoyez les détails par email.
              </p>
            </article>

            <form action={mailto} method="post" encType="text/plain" className="rounded-[2rem] bg-neutral-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Nom / Prénom", "nom"],
                ["Téléphone", "telephone"],
                ["Email", "email"],
                ["Date et heure", "date_heure"],
                ["Départ", "depart"],
                ["Destination", "destination"],
                ["Passagers", "passagers"],
                ["Bagages / skis", "bagages"],
              ].map(([label, name]) => (
                <label key={name} className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em]">
                  {label}
                  <input name={name} className="rounded-xl border border-neutral-300 bg-white px-4 py-3 normal-case tracking-normal outline-none focus:border-black" />
                </label>
              ))}
              <label className="md:col-span-2 grid gap-2 text-sm font-bold uppercase tracking-[0.12em]">
                Message
                <textarea name="message" rows="6" className="rounded-xl border border-neutral-300 bg-white px-4 py-3 normal-case tracking-normal outline-none focus:border-black" />
              </label>
              <button type="submit" className="md:col-span-2 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                Envoyer La Demande
              </button>
            </form>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
