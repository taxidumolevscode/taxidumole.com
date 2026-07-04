import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { officialContacts, siteMeta } from "../components/siteData";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Contacter Taxi du Môle pour réserver un trajet, un transfert aéroport, une gare ou une course en Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Contact"
          title="Réserver un trajet, demander un devis ou échanger rapidement."
          intro="Le contact direct reste la façon la plus simple de confirmer un trajet, un horaire et une destination."
          image={siteMeta.heroImage}
        />

        <section className="contact-surface bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <article className="contact-card rounded-[2rem] bg-neutral-100 p-8 md:p-10 h-full">
                <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                  Appel Direct
                </p>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                  {siteMeta.phoneDisplay}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                  Réponse rapide, devis gratuit et premier échange clair sur les trajets, la zone et l&apos;organisation.
                </p>
                <a
                  href={siteMeta.phoneHref}
                  className="inline-flex px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.22em]"
                >
                  Appeler Maintenant
                </a>
              </article>
            </FadeIn>

            <FadeIn delay={0.08}>
              <article className="contact-card contact-card-dark rounded-[2rem] bg-black text-white p-8 md:p-10 h-full">
                <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                  Zones Desservies
                </p>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                  Vallée De L&apos;Arve
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Bonneville, Cluses, La Roche-sur-Foron, Genève et les secteurs voisins selon l&apos;organisation.
                </p>
                <a
                  href={siteMeta.emailHref}
                  className="inline-flex px-8 py-4 border border-white text-white text-sm font-bold uppercase tracking-[0.22em]"
                >
                  Obtenir Un Devis
                </a>
              </article>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-10 rounded-[2rem] bg-neutral-100 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                Informations Utiles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officialContacts.map((item) => (
                  <div key={item.title} className="border-t border-neutral-200 pt-5">
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-3">{item.text}</p>
                    <a href={item.href} className="text-neutral-900 font-medium">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <style jsx>{`
            .contact-surface {
              background:
                radial-gradient(circle at top left, rgba(59, 130, 246, 0.08), rgba(255, 255, 255, 0) 28%),
                linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            }

            .contact-card {
              box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
            }

            .contact-card-dark {
              box-shadow: 0 28px 80px rgba(15, 23, 42, 0.22);
            }
          `}</style>
        </section>
      </SiteLayout>
    </>
  );
}
