import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const tripTypes = [
  {
    id: "aeroport-geneve-gares",
    title: "Aéroport Genève & Gares",
    text: "Transfert depuis Bonneville, la vallée de l'Arve ou les stations vers Genève aéroport, Genève Cornavin, Annemasse, Cluses, Annecy et Bellegarde.",
    geo: "Bonneville, Genève, Annemasse, Cluses, Annecy",
    seo: "taxi aéroport Genève Haute-Savoie, taxi gare Cluses, transfert Genève Bonneville",
    answer: "Taxi du Môle organise les départs et arrivées avec heure de prise en charge, numéro de vol ou de train et bagages confirmés avant le trajet.",
  },
  {
    id: "hotel-loisirs",
    title: "Hôtel & Loisirs",
    text: "Prise en charge devant hôtel, restaurant, événement, lieu touristique ou hébergement de vacances pour un trajet fluide sans recherche de stationnement.",
    geo: "Bonneville, La Roche-sur-Foron, Annecy, Genève, Chamonix",
    seo: "taxi hôtel Haute-Savoie, chauffeur loisirs Genève, taxi restaurant Bonneville",
    answer: "Le service convient aux séjours, sorties, retours tardifs, visites et déplacements touristiques autour du Môle et de la Haute-Savoie.",
  },
  {
    id: "long-trajet",
    title: "Long Trajet",
    text: "Trajets régionaux et longue distance sur réservation avec estimation avant départ, confort et pause possible selon le parcours.",
    geo: "Haute-Savoie, Savoie, Genève, Lyon, Grenoble",
    seo: "taxi longue distance Haute-Savoie, taxi Lyon Bonneville, taxi Genève Chamonix",
    answer: "Pour un trajet non listé, envoyez départ, arrivée, date, heure et nombre de passagers afin de recevoir une proposition claire.",
  },
  {
    id: "stations-de-ski",
    title: "Stations De Ski",
    text: "Transferts hiver vers stations, chalets, résidences et départs de remontées avec bagages, skis et horaires anticipés.",
    geo: "Chamonix, Flaine, Samoëns, Megève, La Clusaz, Le Grand-Bornand",
    seo: "taxi station ski Haute-Savoie, transfert ski Genève Chamonix, taxi Flaine Bonneville",
    answer: "Les skis, snowboards et bagages sont à signaler lors de la réservation pour choisir l'organisation adaptée.",
  },
  {
    id: "prive-entreprises-scolaire",
    title: "Privé / Entreprises / Scolaire",
    text: "Courses ponctuelles ou régulières pour particuliers, professionnels, collaborateurs, rendez-vous et besoins organisés à l'avance.",
    geo: "Bonneville, vallée de l'Arve, Haute-Savoie",
    seo: "taxi entreprise Haute-Savoie, transport privé Bonneville, taxi scolaire ponctuel",
    answer: "Les trajets récurrents peuvent être planifiés avec horaires fixes, points de prise en charge et contact référent.",
  },
];

export default function TypeDeTrajetPage() {
  return (
    <>
      <SeoHead
        title="Type De Trajet"
        description="Types de trajet Taxi du Môle: aéroport Genève, gares, hôtels, loisirs, longues distances, stations de ski, privé, entreprises et scolaire en Haute-Savoie."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Type De Trajet"
          title="Choisissez le trajet, nous préparons le bon parcours."
          intro="Chaque demande est organisée autour de trois informations simples: où vous êtes, où vous allez, et quand vous devez arriver."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-6">
            {tripTypes.map((trip, index) => (
              <FadeIn key={trip.title} delay={index * 0.06}>
                <article
                  id={trip.id}
                  className="scroll-mt-28 grid grid-cols-1 gap-8 rounded-[2rem] bg-neutral-100 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-neutral-500 mb-4">
                      0{index + 1}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                      {trip.title}
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <p className="text-lg text-neutral-700 leading-relaxed">{trip.text}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-white p-5 rounded-[1rem]">
                        <h3 className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">Geo</h3>
                        <p className="text-sm font-semibold">{trip.geo}</p>
                      </div>
                      <div className="bg-white p-5 rounded-[1rem]">
                        <h3 className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">SEO</h3>
                        <p className="text-sm font-semibold">{trip.seo}</p>
                      </div>
                      <div className="bg-white p-5 rounded-[1rem]">
                        <h3 className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">SAIO</h3>
                        <p className="text-sm font-semibold">{trip.answer}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <Link href="/reserver-en-ligne" className="inline-flex justify-center bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              Réserver En Ligne
            </Link>
            <a href={siteMeta.phoneHref} className="inline-flex justify-center border border-black px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              {siteMeta.phoneDisplay}
            </a>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
