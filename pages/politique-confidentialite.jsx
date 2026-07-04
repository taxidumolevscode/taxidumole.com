import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SeoHead
        title="Politique De Confidentialité"
        description="Politique de confidentialité du site Taxi du Môle."
      />
      <SiteLayout>
        <section className="px-4 md:px-10 pt-36 pb-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-6">
            Politique De Confidentialité
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Données Et Contact
          </h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>Les données transmises via appel, email ou message sont utilisées uniquement pour répondre aux demandes de transport ou de renseignement.</p>
            <p>Aucune donnée sensible n&apos;est vendue ni cédée à des tiers hors obligation légale ou besoin strict de traitement.</p>
            <p>Vous pouvez demander la suppression ou la rectification de vos informations en écrivant à contact@taxidumole.com.</p>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
