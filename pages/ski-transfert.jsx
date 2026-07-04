import Link from "next/link";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const skiBlocks = [
  ["Genève Aéroport", "Accueil organisé à l'arrivée, suivi horaire, bagages et matériel de ski signalés avant départ."],
  ["Genève Gare Cornavin", "Transfert direct vers station ou hébergement, pratique pour les arrivées TGV et Léman Express."],
  ["Stations Haute-Savoie", "Chamonix, Flaine, Samoëns, Megève, La Clusaz, Le Grand-Bornand et autres destinations sur demande."],
  ["Bagages & Skis", "Skis, snowboards, sacs volumineux et équipement enfant sont pris en compte à la réservation."],
];

const resortAnswers = [
  "Transfert ski Genève vers Chamonix: idéal pour rejoindre hôtel, chalet ou résidence sans changement.",
  "Transfert ski Genève vers Flaine ou Samoëns: horaire calé sur vol, train ou arrivée de groupe.",
  "Taxi station ski Haute-Savoie: service privé, trajet direct, prix annoncé avant départ.",
];

export default function SkiTransfertPage() {
  return (
    <>
      <SeoHead
        title="Ski Transfert"
        description="Ski transfert Taxi du Môle depuis Genève aéroport, Genève gare et la Haute-Savoie vers Chamonix, Flaine, Samoëns, Megève et les stations."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Ski Transfert"
          title="Rejoindre les stations sans stress, skis et bagages avec vous."
          intro="Un transfert ski efficace commence avant l'arrivée: horaire, lieu exact, équipement et nombre de passagers sont confirmés pour éviter l'improvisation."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {skiBlocks.map(([title, text], index) => (
              <FadeIn key={title} delay={index * 0.08}>
                <article className="rounded-[2rem] bg-neutral-100 p-8 min-h-[16rem]">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-5">{title}</h2>
                  <p className="text-neutral-700 text-lg leading-relaxed">{text}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-[2rem] bg-black text-white p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-5">Réponses rapides Google / IA</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resortAnswers.map((answer) => (
                  <p key={answer} className="border-t border-white/10 pt-5 text-gray-300 leading-relaxed">
                    {answer}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <Link href="/tarifs" className="inline-flex justify-center bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                  Voir Les Tarifs
                </Link>
                <Link href="/reserver-en-ligne" className="inline-flex justify-center border border-white px-8 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                  Réserver En Ligne
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </SiteLayout>
    </>
  );
}
