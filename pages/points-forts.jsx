import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { pointsFortsContent, siteMeta } from "../components/siteData";

export default function PointsFortsPage() {
  return (
    <>
      <SeoHead
        title="Points Forts"
        description="Les points forts Taxi du Môle: réservation simple, ponctualité, zones desservies et transferts en Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow={pointsFortsContent.eyebrow}
          title={pointsFortsContent.title}
          intro={pointsFortsContent.intro}
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pointsFortsContent.items.map((item, index) => (
              <FadeIn key={item.number} delay={index * 0.08}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 md:p-10 min-h-[18rem] flex flex-col justify-between">
                  <span className="text-5xl md:text-6xl font-black text-blue-600">
                    {item.number}
                  </span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                      {item.title}
                    </h2>
                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
