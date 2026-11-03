import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import AppShell, { PageIntro } from "../components/mobility/AppShell";
import { siteMeta } from "../components/siteData";

const tripTypes = [
  {
    id: "aeroport-geneve-gares",
    image: "https://res.cloudinary.com/do6qoswp/image/upload/v1787416301/ChatGPT_Image_22_ao%C3%BBt_2026_%C3%A0_18_31_13_oskkow.png",
    title: "Aéroport Genève & Gares",
    text: "Transfert depuis Bonneville, la vallée de l'Arve ou les stations vers Genève aéroport, Genève Cornavin, Annemasse, Cluses, Annecy et Bellegarde.",
  },
  {
    id: "hotel-loisirs",
    image: "https://res.cloudinary.com/do6qoswp/image/upload/v1783513304/cld-sample-2.jpg",
    title: "Hôtel & Loisirs",
    text: "Prise en charge devant hôtel, restaurant, événement, lieu touristique ou hébergement de vacances pour un trajet fluide sans recherche de stationnement.",
  },
  {
    id: "long-trajet",
    image: "https://res.cloudinary.com/do6qoswp/image/upload/v1789315659/ChatGPT_Image_13_sept._2026_%C3%A0_18_07_09_twvu43.png",
    title: "Long Trajet",
    text: "Trajets régionaux et longue distance sur réservation avec estimation avant départ, confort et pause possible selon le parcours.",
  },
  {
    id: "stations-de-ski",
    image: "https://res.cloudinary.com/do6qoswp/image/upload/v1788711307/ChatGPT_Image_6_sept._2026_%C3%A0_18_14_45_pzk497.png",
    title: "Stations De Ski",
    text: "Transferts hiver vers stations, chalets, résidences et départs de remontées avec bagages, skis et horaires anticipés.",
  },
  {
    id: "prive-entreprises-scolaire",
    image: "https://res.cloudinary.com/do6qoswp/image/upload/v1789315823/ChatGPT_Image_13_sept._2026_%C3%A0_18_09_50_jrwi3y.png",
    title: "Privé / Entreprises / Scolaire",
    text: "Courses ponctuelles ou régulières pour particuliers, professionnels, collaborateurs, rendez-vous et besoins organisés à l'avance.",
  },
];

function tripImageUrl(url, width) {
  return url.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}

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
                  className="trip-card scroll-mt-28 rounded-2xl bg-white border border-neutral-200"
                >
                  <div className="trip-card-image">
                    <img
                      src={tripImageUrl(trip.image, 768)}
                      srcSet={[480, 768, 1024].map((width) => `${tripImageUrl(trip.image, width)} ${width}w`).join(", ")}
                      sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1200px) 30vw, 380px"
                      alt=""
                      width={1024}
                      height={768}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="trip-card-body">
                    <p className="text-xs uppercase tracking-[0.32em] text-neutral-600 mb-4">
                      0{index + 1}
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {trip.title}
                    </h2>
                    <div className="space-y-5 mt-5">
                      <p className="text-base text-neutral-600 leading-relaxed">{trip.text}</p>
                      <Link className="app-text-link" href={{ pathname: "/reserver-en-ligne", query: { destination: trip.id === "stations-de-ski" ? "" : trip.id === "aeroport-geneve-gares" ? "Aéroport de Genève" : "" } }}>Préparer ce trajet →</Link>
                    </div>
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
      <style jsx>{`
        .app-content-section article.trip-card {
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(0, 7fr);
          padding: 0;
          overflow: hidden;
        }
        .trip-card-image {
          position: relative;
          min-height: 260px;
          overflow: hidden;
          background: #f0f0f0;
        }
        .trip-card-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .trip-card-body {
          min-width: 0;
          padding: 32px 40px;
          align-self: center;
        }
        @media (max-width: 767px) {
          .app-content-section article.trip-card {
            grid-template-columns: minmax(0, 1fr);
          }
          .trip-card-image {
            min-height: 0;
            aspect-ratio: 16 / 9;
          }
          .trip-card-body {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
