import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import AppShell, { PageIntro } from "../components/mobility/AppShell";
import { siteMeta } from "../components/siteData";

const tariffGroups = [
  {
    from: "Depuis Genève Aéroport",
    note: "Simulations au barème français, et non tarifs réglementaires suisses. Un devis personnalisé est communiqué avant réservation, selon les règles applicables.",
    rows: [
      ["Bonneville", 40],
      ["Cluses", 50],
      ["Annecy", 49],
      ["Le Grand-Bornand", 56],
      ["La Clusaz", 59],
      ["Les Carroz", 65],
      ["Samoëns", 67],
      ["Les Gets", 69],
      ["Saint-Gervais", 77],
      ["Morzine", 77],
      ["Megève", 79],
      ["Flaine", 80],
      ["Avoriaz", 89],
      ["Chamonix", 91],
    ],
  },
  {
    from: "Depuis Bonneville",
    note: "Distances approximatives entre centres. L'accès à votre hébergement, notamment en altitude, peut ajouter plusieurs kilomètres.",
    rows: [
      ["Le Grand-Bornand", 22],
      ["La Clusaz", 25],
      ["Morillon", 25],
      ["Les Carroz", 27],
      ["Les Gets", 29],
      ["Samoëns", 35],
      ["Morzine", 40],
      ["Megève", 41],
      ["Saint-Gervais", 42],
      ["Flaine", 42],
      ["Chamonix", 60],
    ],
  },
];

const tariffReference = [
  ["A · Jour, retour en charge", "1,25 €/km"],
  ["B · Nuit, retour en charge", "1,86 €/km"],
  ["C · Jour, retour à vide", "2,50 €/km"],
  ["D · Nuit, retour à vide", "3,72 €/km"],
  ["Prise en charge", "3,55 €"],
  ["Attente ou marche lente", "28,50 €/h"],
];

function estimatedPrice(distance, rate) {
  return Math.round(3.55 + distance * rate).toLocaleString("fr-FR");
}

export default function TarifsPage() {
  return (
    <>
      <SeoHead
        title="Tarifs Taxi"
        description="Tarifs indicatifs Taxi du Môle pour Genève aéroport, gares, Bonneville, Cluses, Chamonix, Flaine, Megève et stations de Haute-Savoie."
      />
      <AppShell>
        <PageIntro
          eyebrow="Tarifs"
          title="Prix annoncés avant départ, trajet préparé sans surprise."
        >Consultez nos estimations de jour et de nuit pour préparer votre trajet. Les distances sont approximatives et un devis personnalisé précise les conditions de votre réservation.</PageIntro>

        <section className="app-content-section">
          <div className="mb-10 rounded-2xl bg-white text-black p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-600 mb-4">Information tarifaire</p>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-600">
              Estimations indicatives, non garanties, d'une course simple avec retour à vide : tarif C (jour) ou D (nuit), prise en charge de 3,55 € incluse, montants arrondis à l'euro.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Les distances et montants varient selon l'itinéraire, la circulation et la prise en charge. Attente, péages et suppléments autorisés exclus. Signalez vos besoins spécifiques pour le devis.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Nuit : 19 h–8 h. Tarif majoré également les dimanches et jours fériés, et sur les portions enneigées ou verglacées nécessitant un équipement spécial ou des pneus hiver.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tariffGroups.map((group, index) => (
              <FadeIn key={group.from} delay={index * 0.08} className="h-full">
                <article className="tariff-card rounded-2xl bg-white border border-neutral-200">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                    {group.from}
                  </h2>
                  <p className="tariff-note text-neutral-600 leading-relaxed mb-6">{group.note}</p>
                  <table className="tariff-table">
                    <caption className="sr-only">{group.from} : distances approximatives et estimations en euros, jour au tarif C et nuit au tarif D, retour à vide.</caption>
                    <colgroup>
                      <col className="destination-column" />
                      <col className="distance-column" />
                      <col className="price-column" />
                      <col className="price-column" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">Destination</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Jour <span>(C)</span></th>
                        <th scope="col">Nuit <span>(D)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map(([destination, distance]) => (
                        <tr key={destination}>
                          <th scope="row">{destination}</th>
                          <td>~{distance} km</td>
                          <td className="price">≈{estimatedPrice(distance, 2.5)} €</td>
                          <td className="price">≈{estimatedPrice(distance, 3.72)} €</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-600 mb-4">Référence réglementaire</p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">Barème maximal Haute-Savoie 2026</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Maximums fixés par l'arrêté préfectoral du 28 janvier 2026, n° DDPP/PSC-2026-348, pour les courses relevant de la réglementation de Haute-Savoie. Le tarif dépend de l'horaire et des conditions de retour.
            </p>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {tariffReference.map(([label, value]) => (
                <div key={label} className="flex flex-wrap items-baseline justify-between gap-2 border-t border-neutral-200 pt-3">
                  <dt className="text-sm text-neutral-600">{label}</dt>
                  <dd className="text-base font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Sources : <a className="app-text-link" href="https://politique.pappers.fr/commune/document/f9d83a507e77fb7824e12b86067eef9e">Arrêté préfectoral 2026</a>, <a className="app-text-link" href="https://www.ge.ch/pratiquer-transport-personnes-taxi-vtc/vehicules-prix-courses">réglementation genevoise</a> et <a className="app-text-link" href="https://www.tourisme-faucigny-glieres.fr/infos-pratiques/comment-venir/">repères de distances depuis Bonneville</a>.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-white border border-neutral-200 p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">
              Réservation simplifiée
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-600">
              <p><strong>01. Envoyez les détails.</strong> Départ, destination, date, heure, passagers, bagages et matériel de ski si besoin.</p>
              <p><strong>02. Recevez la confirmation.</strong> Le trajet, le prix et le mode de paiement sont confirmés avant la prise en charge.</p>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link href="/reserver-en-ligne" className="inline-flex justify-center app-primary">
                Réserver En Ligne
              </Link>
              <a href={siteMeta.phoneHref} className="inline-flex justify-center app-secondary">
                {siteMeta.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </AppShell>
      <style jsx>{`
        .app-content-section article.tariff-card {
          height: 100%;
          min-width: 0;
          padding: 32px;
        }
        .tariff-table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          font-size: 14px;
          line-height: 1.5;
        }
        .destination-column { width: 40%; }
        .distance-column, .price-column { width: 20%; }
        .tariff-table th, .tariff-table td {
          padding: 14px 4px;
          text-align: right;
          border-top: 1px solid #e5e5e5;
          vertical-align: middle;
        }
        .tariff-table th:first-child {
          text-align: left;
          padding-left: 0;
          overflow-wrap: anywhere;
          hyphens: auto;
        }
        .tariff-table th:last-child, .tariff-table td:last-child { padding-right: 0; }
        .tariff-table thead th {
          border-top: 0;
          border-bottom: 2px solid #eab308;
          font-size: 12px;
          font-weight: 600;
          color: #525252;
        }
        .tariff-table thead span { display: block; }
        .tariff-table tbody th { font-weight: 600; }
        .tariff-table td { color: #525252; white-space: nowrap; }
        .tariff-table td.price { color: #171717; font-weight: 600; font-variant-numeric: tabular-nums; }
        @media (max-width: 767px) {
          .app-content-section article.tariff-card { padding: 24px; }
        }
        @media (max-width: 479px) {
          .app-content-section article.tariff-card { padding: 20px 14px; }
          .tariff-table { font-size: 12px; }
          .tariff-table thead th { font-size: 11px; }
          .tariff-table th, .tariff-table td { padding-top: 12px; padding-bottom: 12px; }
        }
      `}</style>
    </>
  );
}
