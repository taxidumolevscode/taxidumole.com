import { siteMeta } from "../components/siteData";

const pages = [
  "/",
  "/type-de-trajet",
  "/ski-transfert",
  "/tarifs",
  "/reserver-en-ligne",
  "/services",
  "/transferts-aeroports-gares",
  "/taxi-transport-scolaire-bonneville-haute-savoie-vallee-arve",
  "/zones-desservies-haute-savoie",
  "/points-forts",
  "/demarches",
  "/solutions",
  "/preuves",
  "/faq",
  "/ressources",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
];

function Sitemap() {}

export async function getServerSideProps({ res }) {
  const now = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteMeta.siteUrl}${page === "/" ? "" : page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default Sitemap;
