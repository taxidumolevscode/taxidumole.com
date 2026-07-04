import Head from "next/head";
import { useRouter } from "next/router";
import { siteMeta } from "../siteData";

export default function SeoHead({ title, description, noindex = false, image, structuredData = [] }) {
  const router = useRouter();
  const fullTitle = title
    ? `${title} | ${siteMeta.brand}`
    : `Taxi Bonneville Haute-Savoie | ${siteMeta.brand}`;
  const canonicalPath = router.asPath === "/" ? "" : router.asPath.split("?")[0];
  const canonicalUrl = `${siteMeta.siteUrl}${canonicalPath}`;
  const metaImage = image || siteMeta.heroImage;
  const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteMeta.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      {schemas.filter(Boolean).map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
