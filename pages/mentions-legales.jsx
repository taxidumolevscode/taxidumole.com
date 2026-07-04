import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";

export default function MentionsLegalesPage() {
  return (
    <>
      <SeoHead
        title="Mentions Légales"
        description="Mentions légales du site Taxi du Môle."
      />
      <SiteLayout>
        <section className="px-4 md:px-10 pt-36 pb-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-6">
            Mentions Légales
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Informations Du Site
          </h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>Éditeur du site : Taxi du Môle.</p>
            <p>Téléphone : 06 80 42 30 31.</p>
            <p>Email : contact@taxidumole.com.</p>
            <p>Zone d&apos;activité : Haute-Savoie, Vallée de l&apos;Arve et secteurs voisins.</p>
            <p>Les informations publiées ont pour objectif de présenter l&apos;activité taxi, les zones desservies et les moyens de contact.</p>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
