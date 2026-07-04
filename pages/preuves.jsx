import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { preuvesContent, siteMeta } from "../components/siteData";

export default function PreuvesPage() {
  return (
    <>
      <SeoHead
        title="Preuves"
        description="Repères de confiance Taxi du Môle: sitemap, robots.txt, données structurées, zones locales et signaux SEO."
      />
      <SiteLayout>
        <PageHero
          eyebrow={preuvesContent.eyebrow}
          title={preuvesContent.title}
          intro={preuvesContent.intro}
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {preuvesContent.stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.08}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[14rem] flex flex-col justify-between">
                  <span className="text-5xl md:text-6xl font-black text-blue-600">
                    {stat.value}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                    {stat.label}
                  </h2>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-[2rem] bg-black text-white p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                Sources Utiles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {preuvesContent.sources.map((source) => (
                  <div key={source} className="border-t border-white/10 pt-5">
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {source}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="mt-10 rounded-[2rem] bg-neutral-100 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                Repères Vérifiés
              </p>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                {preuvesContent.notes.map((note) => (
                  <p key={note} className="border-t border-neutral-200 pt-4">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      </SiteLayout>
    </>
  );
}
