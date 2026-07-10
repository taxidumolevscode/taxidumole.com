import { navigationItems, siteMeta } from "../siteData";

const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  return `${siteMeta.siteUrl}${path === "/" ? "" : path}`;
};

const serviceAreas = [
  "Bonneville",
  "Cluses",
  "Scionzier",
  "Marnaz",
  "Marignier",
  "Ayse",
  "Vougy",
  "Contamine-sur-Arve",
  "La Roche-sur-Foron",
  "Saint-Pierre-en-Faucigny",
  "Sallanches",
  "Passy",
  "Chamonix",
  "Megève",
  "La Clusaz",
  "Morzine",
  "Avoriaz",
  "Les Gets",
  "Annecy",
  "Annemasse",
  "Genève",
  "Haute-Savoie",
  "Vallée de l'Arve",
];

const knowledgeTopics = [
  "Taxi conventionné CPAM",
  "Transport médical assis",
  "Prescription médicale de transport",
  "Remboursement CPAM",
  "Affection longue durée ALD",
  "Transport dialyse",
  "Transport radiothérapie",
  "Transport chimiothérapie",
  "Transport hospitalisation",
  "Transport rééducation",
  "Transport scolaire handicap",
  "Transport aéroport Genève",
  "Transfert stations de ski Haute-Savoie",
  "Taxi longue distance",
  "Taxi Bonneville",
  "Taxi Haute-Savoie",
];

const hospitalTargets = [
  "CHAL - Centre Hospitalier Alpes Léman",
  "Hôpital Privé Pays de Savoie",
  "Centre Hospitalier Annecy Genevois",
  "Hôpital Lyon Sud",
  "Hôpital Édouard Herriot",
  "Hôpital Louis Pradel",
  "Hôpital Pierre Wertheimer",
  "Hôpital de la Croix-Rousse",
  "CHU Grenoble Alpes",
  "Centre Léon Bérard",
  "Centre Orthopédique Santy",
];

const plannedContentHubs = [
  { name: "Taxi Conventionné CPAM", path: "/taxi-conventionne-cpam" },
  { name: "Transport Médical", path: "/transport-medical" },
  { name: "Transport Aéroport", path: "/transport-aeroport" },
  { name: "Longues Distances", path: "/longues-distances" },
  {
    name: "Transport Scolaire Handicap",
    path: "/taxi-transport-scolaire-bonneville-haute-savoie-vallee-arve",
  },
  { name: "Hôpitaux", path: "/hopitaux" },
  { name: "Villes Desservies", path: "/villes" },
  { name: "Guides Transport Médical", path: "/guides" },
  { name: "Questions Réponses", path: "/questions-reponses" },
  { name: "Avis Clients", path: "/avis-clients" },
];

const offerCatalog = [
  {
    name: "Transport médical et accompagnement patient",
    itemListElement: [
      "Transport médical assis",
      "Rendez-vous hospitalier",
      "Dialyse",
      "Radiothérapie",
      "Chimiothérapie",
      "Consultation spécialisée",
      "Rééducation",
      "IRM et scanner",
    ],
  },
  {
    name: "Transport aéroport et gares",
    itemListElement: [
      "Aéroport de Genève",
      "Aéroport de Lyon",
      "Aéroport d'Annecy",
      "Gare de Genève Cornavin",
      "Gare d'Annemasse",
      "Gare de Cluses",
      "Gare de Bonneville",
    ],
  },
  {
    name: "Trajets montagne et longues distances",
    itemListElement: [
      "La Clusaz",
      "Morzine",
      "Avoriaz",
      "Les Gets",
      "Chamonix",
      "Megève",
      "Flaine",
      "Annecy",
      "Lyon",
      "Grenoble",
      "Genève",
    ],
  },
  {
    name: "Transport organisé",
    itemListElement: [
      "Transport scolaire handicap",
      "Trajets entreprise",
      "Transport privé",
      "Transport VIP",
      "Colis urgents",
      "Trajets réguliers",
    ],
  },
];

const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: navigationItems.map((item) => item.label),
  url: navigationItems.map((item) => absoluteUrl(item.href)),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteMeta.siteUrl}/#website`,
  name: siteMeta.siteName,
  url: siteMeta.siteUrl,
  inLanguage: "fr-FR",
  publisher: {
    "@id": `${siteMeta.siteUrl}/#business`,
  },
  about: knowledgeTopics.map((name) => ({
    "@type": "Thing",
    name,
  })),
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": `${siteMeta.siteUrl}/#business`,
  name: siteMeta.brand,
  url: siteMeta.siteUrl,
  image: absoluteUrl(siteMeta.logoImage),
  logo: absoluteUrl(siteMeta.logoImage),
  telephone: siteMeta.phoneDisplay,
  email: siteMeta.email,
  priceRange: "Sur devis",
  areaServed: serviceAreas.map((name) => ({
    "@type": "Place",
    name,
  })),
  knowsAbout: knowledgeTopics,
  availableLanguage: ["fr"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catalogue de services Taxi du Môle",
    itemListElement: offerCatalog.map((catalog) => ({
      "@type": "OfferCatalog",
      name: catalog.name,
      itemListElement: catalog.itemListElement.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Haute-Savoie",
          provider: {
            "@id": `${siteMeta.siteUrl}/#business`,
          },
        },
      })),
    })),
  },
};

const knowledgeArchitectureSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteMeta.siteUrl}/#knowledge-architecture`,
  name: "Architecture éditoriale Taxi du Môle",
  description:
    "Structure technique prévue pour organiser les contenus taxi, transport médical, CPAM, hôpitaux, villes, guides et questions fréquentes en Haute-Savoie.",
  itemListElement: plannedContentHubs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
  })),
};

const hospitalCoverageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteMeta.siteUrl}/#hospital-coverage`,
  name: "Établissements de santé ciblés pour les contenus transport médical",
  itemListElement: hospitalTargets.map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "MedicalOrganization",
      name,
    },
  })),
};

export const baseStructuredData = [
  websiteSchema,
  businessSchema,
  navigationSchema,
  knowledgeArchitectureSchema,
  hospitalCoverageSchema,
];

export const buildPageSchema = ({ title, description, path = "/", type = "WebPage" }) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  name: title,
  description,
  url: absoluteUrl(path),
  isPartOf: {
    "@id": `${siteMeta.siteUrl}/#website`,
  },
  provider: {
    "@id": `${siteMeta.siteUrl}/#business`,
  },
});

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.href),
  })),
});
