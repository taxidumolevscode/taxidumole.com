import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const transferItems = [
  ["Aéroport De Genève", "Transfert préparé avec horaire, terminal, bagages et adresse de prise en charge."],
  ["Aéroport De Lyon", "Trajet longue distance sur réservation avec confirmation avant départ."],
  ["Aéroport D'Annecy", "Solution pratique pour les vols régionaux et les correspondances."],
  ["Gare De Bonneville", "Départs et arrivées locales avec prise en charge simple."],
  ["Gare De Cluses", "Correspondances vallée de l'Arve, stations et trajets professionnels."],
  ["Gare D'Annemasse", "Accès Léman Express, Genève et destinations frontalières."],
];

export default function TransfersPage() {
  return (
    <>
      <SeoHead
        title="Transferts Aéroports Et Gares"
        description="Taxi du Môle organise vos transferts vers Genève, Lyon, Annecy, Bonneville, Cluses, Annemasse et les gares de Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Aéroports & Gares"
          title="Transferts taxi vers Genève, Lyon, Annecy et les gares."
          intro="Planifiez un départ, un retour ou une correspondance avec une prise en charge claire et les informations utiles avant le trajet."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transferItems.map(([title, text], index) => (
              <FadeIn key={title} delay={index * 0.08}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[15rem] flex flex-col justify-between">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                    {title}
                  </h2>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-14 rounded-[2rem] bg-black text-white p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-4">
                  Demande Rapide
                </p>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  Envoyez les détails du trajet.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex justify-center px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.24em] hover:bg-gray-200 transition-colors"
              >
                Demander Un Transfert
              </Link>
            </div>
          </FadeIn>
        </section>
      </SiteLayout>
    </>
  );
}
