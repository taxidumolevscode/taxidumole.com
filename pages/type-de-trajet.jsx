import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import AppShell, { PageIntro } from "../components/mobility/AppShell";
import { siteMeta } from "../components/siteData";

const tripTypes = [
  {
    id: "aeroport-geneve-gares",
    title: "Aéroport Genève & Gares",
    text: "Transfert depuis Bonneville, la vallée de l'Arve ou les stations vers Genève aéroport, Genève Cornavin, Annemasse, Cluses, Annecy et Bellegarde.",
  },
  {
    id: "hotel-loisirs",
    title: "Hôtel & Loisirs",
    text: "Prise en charge devant hôtel, restaurant, événement, lieu touristique ou hébergement de vacances pour un trajet fluide sans recherche de stationnement.",
  },
  {
    id: "long-trajet",
    title: "Long Trajet",
    text: "Trajets régionaux et longue distance sur réservation avec estimation avant départ, confort et pause possible selon le parcours.",
  },
  {
    id: "stations-de-ski",
    title: "Stations De Ski",
    text: "Transferts hiver vers stations, chalets, résidences et départs de remontées avec bagages, skis et horaires anticipés.",
  },
  {
    id: "prive-entreprises-scolaire",
    title: "Privé / Entreprises / Scolaire",
    text: "Courses ponctuelles ou régulières pour particuliers, professionnels, collaborateurs, rendez-vous et besoins organisés à l'avance.",
  },
];

export default function TypeDeTrajetPage() {
  return (
    <>
      <SeoHead
        title="Type De Trajet"
        description="Types de trajet Taxi du Môle: aéroport Genève, gares, hôtels, loisirs, longues distances, stations de ski, privé, entreprises et scolaire en Haute-Savoie."
      />
      <AppShell>
        <PageIntro
          eyebrow="Type De Trajet"
          title="Choisissez le trajet, nous préparons le bon parcours."
        >Chaque demande est organisée autour de trois informations simples: où vous êtes, où vous allez, et quand vous devez arriver.</PageIntro>

        <section className="app-content-section">
          <div className="grid grid-cols-1 gap-6">
            {tripTypes.map((trip, index) => (
              <FadeIn key={trip.title} delay={index * 0.06}>
                <article
                  id={trip.id}
                  className="scroll-mt-28 grid grid-cols-1 gap-8 rounded-2xl bg-white border border-neutral-200 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-neutral-600 mb-4">
                      0{index + 1}
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {trip.title}
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <p className="text-base text-neutral-600 leading-relaxed">{trip.text}</p><Link className="app-text-link" href={{ pathname: "/reserver-en-ligne", query: { destination: trip.id === "stations-de-ski" ? "" : trip.id === "aeroport-geneve-gares" ? "Aéroport de Genève" : "" } }}>Préparer ce trajet →</Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <Link href="/reserver-en-ligne" className="inline-flex justify-center app-primary">
              Réserver En Ligne
            </Link>
            <a href={siteMeta.phoneHref} className="inline-flex justify-center app-secondary">
              {siteMeta.phoneDisplay}
            </a>
          </div>
        </section>
      </AppShell>
    </>
  );
}
