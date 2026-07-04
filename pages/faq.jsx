import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { faqContent, siteMeta } from "../components/siteData";
import { buildBreadcrumbSchema, buildPageSchema } from "../components/seo/knowledgeGraph";

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SeoHead
        title="FAQ"
        description="Questions fréquentes sur les réservations Taxi du Môle, les transferts aéroports, les gares et les zones desservies."
        structuredData={[
          buildPageSchema({
            title: "FAQ Taxi du Môle",
            description:
              "Questions fréquentes sur les réservations Taxi du Môle, les transferts aéroports, les gares et les zones desservies.",
            path: "/faq",
            type: "FAQPage",
          }),
          buildBreadcrumbSchema([
            { name: "Accueil", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]),
          faqSchema,
        ]}
      />
      <SiteLayout>
        <PageHero
          eyebrow="FAQ"
          title="Les réponses utiles avant de réserver un taxi."
          intro="Une FAQ courte, directe et claire pour préparer un trajet local, un transfert aéroport ou une course en Haute-Savoie."
          image={siteMeta.mascotImage}
        />

        <section className="px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            {faqContent.map((item, index) => (
              <FadeIn key={item.question} delay={index * 0.05}>
                <article className="border-t border-white/10 py-8">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                    {item.question}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                    {item.answer}
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
