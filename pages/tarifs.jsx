import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const tariffGroups = [
  {
    from: "Depuis Genève Aéroport / Genève Gare",
    rows: [
      ["Bonneville / Pays Rochois", "110-130"],
      ["Cluses / Vallée de l'Arve", "140-160"],
      ["Annecy", "140-170"],
      ["Flaine", "200-230"],
      ["Megève / Saint-Gervais", "220-250"],
      ["Chamonix", "240-280"],
    ],
  },
  {
    from: "Depuis Gare d'Annemasse",
    rows: [
      ["Bonneville", "70-90"],
      ["Cluses", "110-130"],
      ["Samoëns", "140-170"],
      ["Flaine", "170-200"],
      ["Megève", "180-220"],
      ["Chamonix", "190-230"],
    ],
  },
  {
    from: "Depuis Gare de Cluses",
    rows: [
      ["Bonneville", "45-65"],
      ["Samoëns", "100-130"],
      ["Flaine", "130-160"],
      ["Megève", "150-190"],
      ["Chamonix", "160-210"],
      ["Genève Aéroport", "140-170"],
    ],
  },
];

export default function TarifsPage() {
  return (
    <>
      <SeoHead
        title="Tarifs Taxi"
        description="Tarifs indicatifs Taxi du Môle pour Genève aéroport, gares, Bonneville, Cluses, Chamonix, Flaine, Megève et stations de Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Tarifs"
          title="Prix annoncés avant départ, trajet préparé sans surprise."
          intro="Les montants ci-dessous sont des repères de réservation. Le prix final est confirmé selon date, horaire, passagers, bagages, attente et destination exacte."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="mb-10 rounded-[2rem] bg-black text-white p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-4">Information tarifaire</p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              Tarifs indicatifs en euros, à confirmer avant réservation. Bagages standards inclus. Skis, sièges enfant, horaires très matinaux ou demandes spécifiques sont à signaler pour recevoir un devis juste.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tariffGroups.map((group, index) => (
              <FadeIn key={group.from} delay={index * 0.08}>
                <article className="rounded-[2rem] bg-neutral-100 p-6 md:p-8 h-full">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
                    {group.from}
                  </h2>
                  <div className="space-y-3">
                    {group.rows.map(([destination, price]) => (
                      <div key={destination} className="flex items-center justify-between gap-4 border-t border-neutral-300 pt-3">
                        <span className="text-sm font-semibold">{destination}</span>
                        <span className="text-lg font-black">{price} EUR</span>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-neutral-100 p-8 md:p-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-5">
              Réservation simplifiée
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-700">
              <p><strong>01. Envoyez les détails.</strong> Départ, destination, date, heure, passagers, bagages et matériel de ski si besoin.</p>
              <p><strong>02. Recevez la confirmation.</strong> Le trajet, le prix et le mode de paiement sont confirmés avant la prise en charge.</p>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link href="/reserver-en-ligne" className="inline-flex justify-center bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                Réserver En Ligne
              </Link>
              <a href={siteMeta.phoneHref} className="inline-flex justify-center border border-black px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                {siteMeta.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
