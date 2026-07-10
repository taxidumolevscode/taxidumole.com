import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const schoolTransportSlug =
  "🚸-taxi-scolaire-2025-2026-transport-scolaire-mdph-a-bonneville-74130";

const schoolTransportDetails = [
  {
    title: "Année Scolaire 2025-2026",
    text: "Organisation de trajets scolaires sur réservation pour l'année 2025-2026 autour de Bonneville et de la vallée de l'Arve.",
  },
  {
    title: "Transport MDPH",
    text: "Pour les demandes liées à un dossier MDPH, transmettez les informations utiles afin de vérifier les possibilités d'organisation du trajet.",
  },
  {
    title: "Bonneville 74130",
    text: "Prise en charge possible selon disponibilité à Bonneville, dans les communes voisines et vers les établissements concernés.",
  },
  {
    title: "Réservation Claire",
    text: "Indiquez les horaires, les jours, les adresses, le nom de l'établissement et le contact de la famille ou du responsable.",
  },
];

export default function TaxiScolaireMdphPage() {
  return (
    <>
      <SeoHead
        title="Taxi Scolaire 2025-2026 MDPH Bonneville 74130"
        description="Taxi du Môle propose l'organisation de transport scolaire 2025-2026, trajets MDPH et déplacements réguliers à Bonneville 74130 sur réservation."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Taxi Scolaire 2025-2026"
          title="Transport scolaire MDPH à Bonneville 74130."
          intro="Taxi du Môle accompagne les familles pour organiser un trajet scolaire régulier, ponctuel ou lié à un dossier MDPH en Haute-Savoie."
          image={siteMeta.heroImage}
        />

        <section className="bg-white px-4 py-20 text-black md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <FadeIn>
              <article className="rounded-[2rem] bg-black p-8 text-white md:p-10">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#f4bd35]">
                  Taxi du Môle
                </p>
                <h1 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
                  Taxi scolaire à Bonneville.
                </h1>
                <p className="text-lg leading-relaxed text-gray-300">
                  Pour préparer une demande de transport scolaire, le plus rapide est de transmettre les horaires, les adresses et les contraintes du trajet.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={siteMeta.phoneHref}
                    className="inline-flex justify-center bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black"
                  >
                    Appeler Maintenant
                  </a>
                  <Link
                    href="/reserver-en-ligne"
                    className="inline-flex justify-center border border-white px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-white"
                  >
                    Envoyer Une Demande
                  </Link>
                </div>
              </article>
            </FadeIn>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {schoolTransportDetails.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-[2rem] bg-neutral-100 p-7 md:p-8">
                    <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-neutral-500">
                      0{index + 1}
                    </p>
                    <h2 className="mb-4 text-2xl font-black uppercase leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-base leading-relaxed text-neutral-700">
                      {item.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: schoolTransportSlug } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
