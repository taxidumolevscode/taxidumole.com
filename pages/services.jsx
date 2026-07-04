import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta, solutionsPageContent } from "../components/siteData";

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services Taxi"
        description="Services Taxi du Môle: taxi à Bonneville, trajets locaux, transferts aéroports, gares, stations et longues distances en Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Services Taxi"
          title="Taxi local, transferts et trajets sur réservation."
          intro="Une page claire pour présenter les prestations principales: trajet local, aéroport, gare, station, longue distance et transport régulier."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionsPageContent.cards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.08}>
                <article className="border-t border-black p-6 md:p-8 bg-neutral-50 min-h-[16rem]">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                    {card.title}
                  </h2>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {card.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
