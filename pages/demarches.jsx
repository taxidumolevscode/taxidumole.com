import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import {
  demarchesContent,
  demarchesDocuments,
  officialContacts,
  siteMeta,
} from "../components/siteData";

export default function DemarchesPage() {
  return (
    <>
      <SeoHead
        title="Démarches"
        description="Les étapes pour réserver un taxi: départ, destination, horaire, passagers, bagages et confirmation du trajet."
      />
      <SiteLayout>
        <PageHero
          eyebrow={demarchesContent.eyebrow}
          title={demarchesContent.title}
          intro={demarchesContent.intro}
          image={siteMeta.mascotImage}
        />

        <section className="px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto space-y-6">
            {demarchesContent.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-white/10 py-8">
                  <div className="md:col-span-2 text-gray-500 text-sm md:text-base font-mono">
                    0{index + 1}
                  </div>
                  <div className="md:col-span-10">
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                      {step.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                      {step.text}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <article className="rounded-[2rem] bg-white text-black p-8 md:p-10 h-full">
                <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                  Informations Souvent Utiles
                </p>
                <ul className="space-y-4 text-lg leading-relaxed text-neutral-700">
                  {demarchesDocuments.map((doc) => (
                    <li key={doc} className="border-t border-neutral-200 pt-4">
                      {doc}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>

            <FadeIn delay={0.08}>
              <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 h-full">
                <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">
                  Contacts Et Zones
                </p>
                <div className="space-y-6">
                  {officialContacts.map((item) => (
                    <div key={item.title} className="border-t border-white/10 pt-5">
                      <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed mb-3">{item.text}</p>
                      <a href={item.href} className="text-white text-lg">
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
