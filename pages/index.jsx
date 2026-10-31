import SeoHead from '../components/layout/SeoHead';
import AppShell from '../components/mobility/AppShell';
import BookingForm from '../components/mobility/BookingForm';
import JourneyPanel, { ServiceShortcuts } from '../components/mobility/JourneyPanel';
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
      <AppShell>
        <div className="app-home-grid">
          <section className="app-home-booking">
            <p className="app-eyebrow"><span className="app-gold-dot"/> VOTRE TAXI, TOUT SIMPLEMENT</p>
            <h1>Où souhaitez-vous <span>aller ?</span></h1>
            <p className="app-muted app-home-subtitle">Un départ, une destination. Nous nous occupons du trajet.</p>
            <BookingForm compact />
          </section>
          <JourneyPanel />
        </div>
        <div className="app-section-heading"><div><p className="app-eyebrow">À CHAQUE ENVIE, SON TRAJET</p><h2>Vous allez aimer prendre la route.</h2></div><span className="app-muted">Bonneville · Genève · Les Alpes</span></div>
        <ServiceShortcuts />
      </AppShell>
    </>
  );
}
