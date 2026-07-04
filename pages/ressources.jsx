import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { deepPages, officialSources, resourcesPageContent, siteMeta } from "../components/siteData";

export default function RessourcesPage() {
  return (
    <>
      <SeoHead
        title="Ressources"
        description="Ressources Taxi du Môle: services, zones desservies, transferts aéroports, contact, sitemap et SEO local."
      />
      <SiteLayout>
        <PageHero
          eyebrow={resourcesPageContent.eyebrow}
          title={resourcesPageContent.title}
          intro={resourcesPageContent.intro}
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="hidden grid-cols-1 md:grid-cols-3 gap-6 mb-14" aria-hidden="true">
            {officialSources.map((source, index) => (
              <FadeIn key={source.title} delay={index * 0.08}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[17rem] flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                      {source.title}
                    </h2>
                    <p className="text-neutral-700 leading-relaxed">{source.detail}</p>
                  </div>
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-8 text-sm uppercase tracking-[0.22em] border-b border-black pb-1"
                  >
                    {source.cta}
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deepPages.map((item, index) => (
              <FadeIn key={item.href} delay={0.1 + index * 0.05}>
                <article className="border-t border-black p-6 md:p-8 bg-neutral-50 min-h-[16rem] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">{item.text}</p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex mt-8 text-sm uppercase tracking-[0.22em] border-b border-black pb-1"
                  >
                    Voir La Sous-Page
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
