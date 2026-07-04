import Link from "next/link";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";

export default function Custom404() {
  return (
    <>
      <SeoHead
        title="Page Introuvable"
        description="La page demandée est introuvable."
      />
      <SiteLayout>
        <section className="px-4 md:px-10 pt-40 pb-28 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-gray-500 mb-6">
            Erreur 404
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Cette Page N&apos;Existe Pas.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Revenez vers l&apos;accueil ou utilisez le menu pour poursuivre votre navigation sur le site Taxi du Môle.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-[0.22em]"
          >
            Retour Accueil
          </Link>
        </section>
      </SiteLayout>
    </>
  );
}
