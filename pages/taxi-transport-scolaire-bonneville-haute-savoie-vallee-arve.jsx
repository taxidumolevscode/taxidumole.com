import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const details = [
  {
    title: "Trajets Scolaires Organisés",
    text: "Transport sur réservation pour les élèves, étudiants ou familles ayant besoin d'un trajet fiable autour de Bonneville et de la vallée de l'Arve.",
  },
  {
    title: "Haute-Savoie Et Vallée De L'Arve",
    text: "Prise en charge possible selon disponibilité à Bonneville, Cluses, La Roche-sur-Foron, Marignier, Saint-Pierre-en-Faucigny et communes voisines.",
  },
  {
    title: "Demande Claire Avant Départ",
    text: "Indiquez l'adresse de départ, l'établissement, les horaires, les jours concernés et les besoins particuliers afin de préparer le trajet.",
  },
  {
    title: "Contact Direct",
    text: "Pour une demande régulière ou ponctuelle, le plus simple reste d'appeler ou d'envoyer les informations par email.",
  },
];

export default function TaxiTransportScolairePage() {
  return (
    <>
      <SeoHead
        title="Taxi Transport Scolaire Bonneville Haute-Savoie"
        description="Taxi du Môle organise les trajets scolaires, privés et réguliers à Bonneville, en Haute-Savoie et dans la vallée de l'Arve sur réservation."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Transport Scolaire"
          title="Taxi pour transport scolaire à Bonneville et en Haute-Savoie."
          intro="Un service sur réservation pour organiser les trajets scolaires, réguliers ou privés dans la vallée de l'Arve."
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
                  Transport scolaire et trajets réguliers.
                </h1>
                <p className="text-lg leading-relaxed text-gray-300">
                  Une solution simple pour préparer un déplacement scolaire, un trajet régulier ou un besoin organisé à l'avance en Haute-Savoie.
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
                    Réserver En Ligne
                  </Link>
                </div>
              </article>
            </FadeIn>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {details.map((item, index) => (
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
