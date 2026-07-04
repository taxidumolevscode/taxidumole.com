import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta, solutionsPageContent } from "../components/siteData";

export default function SolutionsPage() {
  return (
    <>
      <SeoHead
        title="Solutions"
        description="Solutions Taxi du Môle: taxi local, aéroport Genève, gares Haute-Savoie, stations de ski, longues distances et transport régulier."
      />
      <SiteLayout>
        <PageHero
          eyebrow={solutionsPageContent.eyebrow}
          title={solutionsPageContent.title}
          intro={solutionsPageContent.intro}
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

          <FadeIn delay={0.18}>
            <div className="mt-16 rounded-[2rem] bg-black text-white p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                Lecture Simple
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3">
                    Trajets Locaux
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Courses autour de Bonneville, rendez-vous, départs en gare, retours à domicile et trajets du quotidien.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3">
                    Aéroports Et Gares
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Organisation des horaires, bagages, terminaux et correspondances pour réduire le stress du départ.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3">
                    Taxi du Môle
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Le site met en avant un transport calme, ponctuel et compréhensible pour les clients qui veulent une solution claire.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </SiteLayout>
    </>
  );
}
