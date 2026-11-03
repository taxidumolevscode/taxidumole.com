import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import AppShell, { PageIntro } from "../components/mobility/AppShell";
import { siteMeta } from "../components/siteData";

const skiBlocks = [
  ["Genève Aéroport", "Accueil organisé à l'arrivée, suivi horaire, bagages et matériel de ski signalés avant départ.", "https://res.cloudinary.com/do6qoswp/image/upload/v1787416825/ChatGPT_Image_22_ao%C3%BBt_2026_%C3%A0_18_39_34_yz93cy.png"],
  ["Genève Gare Cornavin", "Transfert direct vers station ou hébergement, pratique pour les arrivées TGV et Léman Express.", "https://res.cloudinary.com/do6qoswp/image/upload/v1789301905/ChatGPT_Image_13_sept._2026_%C3%A0_14_17_53_hu0qo3.png"],
  ["Stations Haute-Savoie", "Chamonix, Flaine, Samoëns, Megève, La Clusaz, Le Grand-Bornand et autres destinations sur demande.", "https://res.cloudinary.com/do6qoswp/image/upload/v1788711307/ChatGPT_Image_6_sept._2026_%C3%A0_18_14_45_pzk497.png"],
  ["Bagages & Skis", "Skis, snowboards, sacs volumineux et équipement enfant sont pris en compte à la réservation.", "https://res.cloudinary.com/do6qoswp/image/upload/v1789316299/ChatGPT_Image_13_sept._2026_%C3%A0_18_17_32_kdmmaa.png"],
];

const resortAnswers = [
  "Transfert ski Genève vers Chamonix: idéal pour rejoindre hôtel, chalet ou résidence sans changement.",
  "Transfert ski Genève vers Flaine ou Samoëns: horaire calé sur vol, train ou arrivée de groupe.",
  "Taxi station ski Haute-Savoie: service privé, trajet direct, prix annoncé avant départ.",
];

function skiImageUrl(url, width) {
  return url.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${width}/`);
}

export default function SkiTransfertPage() {
  return (
    <>
      <SeoHead
        title="Ski Transfert"
        description="Ski transfert Taxi du Môle depuis Genève aéroport, Genève gare et la Haute-Savoie vers Chamonix, Flaine, Samoëns, Megève et les stations."
      />
      <AppShell>
        <PageIntro
          eyebrow="Ski Transfert"
          title="Rejoindre les stations sans stress, skis et bagages avec vous."
        >Un transfert ski efficace commence avant l'arrivée: horaire, lieu exact, équipement et nombre de passagers sont confirmés pour éviter l'improvisation.</PageIntro>

        <section className="app-content-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {skiBlocks.map(([title, text, image], index) => (
              <FadeIn key={title} delay={index * 0.08} className="h-full">
                <article className="ski-card rounded-2xl bg-white border border-neutral-200">
                  <div className="ski-card-image">
                    <img
                      src={skiImageUrl(image, 768)}
                      srcSet={[480, 768, 1280].map((width) => `${skiImageUrl(image, width)} ${width}w`).join(", ")}
                      sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1352px) calc((100vw - 80px) / 2), 636px"
                      alt=""
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="ski-card-body">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-5">{title}</h2>
                    <p className="text-neutral-600 text-lg leading-relaxed">{text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl bg-white text-black p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-neutral-600 mb-5">Pour préparer votre séjour</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resortAnswers.map((answer) => (
                  <p key={answer} className="border-t border-black/10 pt-5 text-neutral-600 leading-relaxed">
                    {answer}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <Link href="/options-json" className="inline-flex justify-center app-primary">
                  Voir toutes les destinations
                </Link>
                <Link href="/tarifs" className="inline-flex justify-center app-secondary">
                  Voir Les Tarifs
                </Link>
                <Link href="/reserver-en-ligne" className="inline-flex justify-center app-secondary">
                  Réserver En Ligne
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </AppShell>
      <style jsx>{`
        .app-content-section article.ski-card {
          height: 100%;
          padding: 0;
          overflow: hidden;
        }
        .ski-card-image {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f0f0f0;
        }
        .ski-card-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ski-card-body {
          padding: 32px;
        }
        @media (max-width: 767px) {
          .ski-card-body {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
