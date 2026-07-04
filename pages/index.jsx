import SeoHead from '../components/layout/SeoHead';
import SiteLayout from '../components/layout/SiteLayout';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ApproachSection from '../components/sections/ApproachSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ContactSection from '../components/sections/ContactSection';
import OfficialSection from '../components/sections/OfficialSection';
import DeepLinksSection from '../components/sections/DeepLinksSection';
import { faqContent } from '../components/siteData';
import {
  baseStructuredData,
  buildBreadcrumbSchema,
  buildPageSchema,
} from '../components/seo/knowledgeGraph';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.slice(0, 5).map((item) => ({
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
        title="Taxi Bonneville Haute-Savoie"
        description="Taxi du Môle à Bonneville: trajets locaux, transferts aéroport Genève, gares, stations et transport sur réservation en Haute-Savoie."
        structuredData={[
          ...baseStructuredData,
          buildPageSchema({
            title: "Taxi Bonneville Haute-Savoie",
            description:
              "Taxi du Môle à Bonneville: trajets locaux, transferts aéroport Genève, gares, stations et transport sur réservation en Haute-Savoie.",
            path: "/",
          }),
          buildBreadcrumbSchema([{ name: "Accueil", href: "/" }]),
          faqSchema,
        ]}
      />
      <SiteLayout>
        <HeroSection />
        <IntroSection />
        <PortfolioSection />
        <ApproachSection />
        <PricingSection />
        <TestimonialSection />
        <OfficialSection />
        <DeepLinksSection />
        <ContactSection />
      </SiteLayout>
    </>
  );
}
