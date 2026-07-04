import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

export default function ZonesDesserviesPage() {
  return (
    <>
      <SeoHead
        title="Zones Desservies"
        description="Bonneville, Cluses, La Roche-sur-Foron, Genève et Vallée de l'Arve : zones desservies par Taxi du Môle."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Zones Desservies"
          title="Bonneville, Cluses, La Roche-sur-Foron, Genève et Vallée de l'Arve."
          intro="Une page locale pour renforcer la visibilité géographique de Taxi du Môle autour des trajets, gares, aéroports et stations en Haute-Savoie."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Bonneville", "Point d'ancrage fort du service et commune cohérente pour le référencement local."],
              ["Cluses", "Zone utile pour les trajets vallée de l'Arve, gares et correspondances."],
              ["La Roche-sur-Foron", "Commune stratégique pour les rendez-vous, gares et trajets professionnels."],
              ["Genève", "Référence forte pour les transferts aéroport et les liaisons frontalières."],
              ["Vallée De L'Arve", "Cadre géographique central de nombreux trajets locaux et régionaux."],
              ["Haute-Savoie", "Zone principale pour les gares, stations, aéroports et longues distances."],
            ].map(([title, text], index) => (
              <FadeIn key={title} delay={index * 0.06}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[15rem]">
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-4">{title}</h2>
                  <p className="text-neutral-700 leading-relaxed">{text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
