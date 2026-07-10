export const siteMeta = {
  brand: "Taxi du Môle",
  siteName: "Taxi du Môle - Taxi Bonneville Haute-Savoie",
  siteUrl: "https://www.taxidumole.com",
  phoneDisplay: "06 80 42 30 31",
  phoneHref: "tel:+33680423031",
  email: "contact@taxidumole.com",
  emailHref: "mailto:contact@taxidumole.com",
  heroImage: "/images/audi-break-taxi-side.jpeg",
  mascotImage: "/images/audi-break-taxi-side.jpeg",
  logoImage: "/images/taxi-du-mole-logo-transparent-cropped.png",
  pageLogoImage:
    "https://res.cloudinary.com/do6qoswp/image/upload/f_auto,q_auto/F21F62F5-5504-4667-A837-006DE003934B_fgjqfd",
};

export const navigationItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Type De Trajet",
    href: "/type-de-trajet",
    children: [
      { label: "Aéroport Genève & Gares", href: "/type-de-trajet#aeroport-geneve-gares" },
      { label: "Hôtel & Loisirs", href: "/type-de-trajet#hotel-loisirs" },
      { label: "Long Trajet", href: "/type-de-trajet#long-trajet" },
      { label: "Stations De Ski", href: "/type-de-trajet#stations-de-ski" },
      { label: "Privé / Entreprises / Scolaire", href: "/type-de-trajet#prive-entreprises-scolaire" },
    ],
  },
  { label: "Ski Transfert", href: "/ski-transfert" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Réserver En Ligne", href: "/reserver-en-ligne" },
];

export const navigationMenu = {
  label: "Navigation",
  items: navigationItems,
};

export const homeContent = {
  hero: {
    eyebrow: "Taxi Privé En Haute-Savoie",
    brandTitle: "Services de transport de personnes en Haute‑Savoie",
    brandTitleHref: "https://www.pagesjaunes.fr/annuaire/departement/haute-savoie-74/transport-personnes",
    intro:
      "Taxi à Bonneville pour trajets locaux, transferts aéroports, gares, stations de ski et transport sur réservation en Haute-Savoie.",
    bullets: ["Bonneville", "Aéroport Genève", "Réservation 24h/24"],
    primaryCta: "Réserver Un Trajet",
    secondaryCta: "Appeler Maintenant",
  },
  intro: {
    title: "Un taxi local clair, ponctuel et simple à réserver.",
    left:
      "Taxi du Môle accompagne les particuliers, voyageurs, professionnels et familles pour leurs déplacements autour de Bonneville, de la vallée de l'Arve et de la Haute-Savoie.",
    right:
      "À 20 min de Genève par l'autoroute. Transferts vers La Clusaz, Morzine, Avoriaz, Les Gets, Chamonix, Megève et l'aéroport de Genève. Véhicules premium, 7j/7. Réservez en ligne.",
  },
  services: [
    {
      slug: "trajets-locaux",
      image: "/images/carte-vallee-de-l-arve.png",
      title: "Trajets Locaux",
      subtitle: "Bonneville Et Vallée De L'Arve",
      delay: 0,
      offset: false,
    },
    {
      slug: "aeroports-gares",
      image: "/images/geneve-aeroport-gare.png",
      title: "Aéroports Et Gares",
      subtitle: "Genève, Lyon, Annecy, Cluses",
      delay: 0.1,
      offset: true,
    },
    {
      slug: "vallee-arve-haute-savoie",
      image: "/images/stations-de-ski.png",
      title: "Stations De Ski",
      subtitle: "Chamonix, Le Grand-Bornand, Flaine",
      delay: 0.2,
      offset: false,
    },
    {
      slug: "reservation-prioritaire",
      image: "/images/reservation-rapide.png",
      title: "Réservation Rapide",
      subtitle: "Appel Direct Ou Email",
      delay: 0,
      offset: false,
      hideOnLarge: true,
    },
  ],
  process: [
    {
      title: "Demande Claire",
      description:
        "Indiquez le départ, la destination, la date, l'heure, le nombre de passagers et les bagages éventuels.",
    },
    {
      title: "Confirmation Rapide",
      description:
        "La course est confirmée par téléphone ou email avec les informations utiles avant le départ.",
    },
    {
      title: "Trajet Ponctuel",
      description:
        "Prise en charge à l'heure, conduite soignée et adaptation au type de trajet: aéroport, gare, rendez-vous, station ou transport régulier.",
    },
  ],
  solutions: [
    {
      name: "Taxi Local",
      price: "Bonneville",
      description:
        "Pour les trajets courts, rendez-vous, courses locales, départs depuis la maison ou arrivées en gare.",
      features: ["Prise En Charge Locale", "Trajets Sur Réservation", "Contact Direct"],
      featured: false,
      delay: 0,
      href: "/services",
    },
    {
      name: "Transfert Aéroport",
      price: "Prioritaire",
      description:
        "Pour rejoindre Genève, Lyon, Annecy ou une gare avec un horaire préparé et une organisation simple.",
      features: ["Aéroport De Genève", "Gares Haute-Savoie", "Bagages Et Horaires"],
      featured: true,
      delay: 0.1,
      href: "/transferts-aeroports-gares",
    },
    {
      name: "Stations Et Longues Distances",
      price: "Sur Devis",
      description:
        "Pour Chamonix, les stations de ski, les trajets touristiques et les déplacements longue distance.",
      features: ["Haute-Savoie", "Stations De Ski", "Devis Rapide"],
      featured: false,
      delay: 0.2,
      href: "/zones-desservies-haute-savoie",
    },
  ],
  proof: {
    quote:
      "Un taxi local doit être simple à joindre, clair dans ses informations et fiable au moment du départ.",
    author: "Taxi du Môle",
    meta: "Taxi À Bonneville - Haute-Savoie",
  },
};

export const officialHighlights = [
  {
    title: "Taxi Local",
    text: "Une présence autour de Bonneville pour les trajets du quotidien, les rendez-vous, les départs en gare et les retours à domicile.",
  },
  {
    title: "Transferts Aéroports",
    text: "Organisation des trajets vers Genève, Lyon, Annecy et les principales gares avec horaires et informations de voyage.",
  },
  {
    title: "Zones De Montagne",
    text: "Accès aux stations, séjours touristiques, départs tôt le matin et retours tardifs selon réservation.",
  },
  {
    title: "Contact Direct",
    text: "Un téléphone visible, un email clair et une demande de trajet simple pour convertir rapidement les visiteurs.",
  },
];

export const officialSources = [
  {
    title: "Google Search Console",
    detail: "Sitemap, robots.txt, inspection des URLs et suivi des performances de recherche.",
    link: "https://search.google.com/search-console",
    cta: "Ouvrir",
  },
  {
    title: "Vercel",
    detail: "Hébergement rapide du site Next.js, déploiement automatique depuis GitHub et domaine personnalisé.",
    link: "https://vercel.com",
    cta: "Voir Vercel",
  },
  {
    title: "OVH Domaine",
    detail: "Gestion du nom de domaine, zone DNS, entrée A, CNAME www et vérification Google.",
    link: "https://www.ovhcloud.com/fr/domains/",
    cta: "Voir OVH",
  },
];

export const officialContacts = [
  {
    title: "Réservation Téléphone",
    text: "Pour une demande urgente ou une confirmation rapide.",
    value: siteMeta.phoneDisplay,
    href: siteMeta.phoneHref,
  },
  {
    title: "Demande Par Email",
    text: "Pour envoyer les détails d'un trajet, un transfert aéroport ou une demande de devis.",
    value: siteMeta.email,
    href: siteMeta.emailHref,
  },
  {
    title: "Zone Principale",
    text: "Bonneville, vallée de l'Arve, Genève, Annecy, Chamonix et Haute-Savoie.",
    value: "Haute-Savoie",
    href: "/zones-desservies-haute-savoie",
  },
];

export const resourcesPageContent = {
  eyebrow: "Ressources",
  title: "Les pages utiles pour réserver, comprendre les zones et préparer un trajet.",
  intro:
    "Cette page regroupe les services, les zones desservies, les transferts et les informations pratiques du site Taxi du Môle.",
};

export const deepPages = [
  {
    href: "/type-de-trajet",
    title: "Type De Trajet",
    text: "Aéroport Genève, gares, hôtels, loisirs, longues distances, stations et trajets professionnels.",
  },
  {
    href: "/ski-transfert",
    title: "Ski Transfert",
    text: "Transferts directs vers les stations de Haute-Savoie avec bagages, skis et horaires suivis.",
  },
  {
    href: "/tarifs",
    title: "Tarifs",
    text: "Prix indicatifs, destinations fréquentes et devis confirmé avant prise en charge.",
  },
  {
    href: "/reserver-en-ligne",
    title: "Réserver En Ligne",
    text: "Formulaire rapide pour envoyer départ, destination, horaires, passagers et bagages.",
  },
  {
    href: "/contact",
    title: "Contact",
    text: "Appel direct, email et demande de trajet avec les informations utiles.",
  },
  {
    href: "/mentions-legales",
    title: "Mentions Légales",
    text: "Informations légales à compléter avant mise en ligne définitive.",
  },
];

export const pointsFortsContent = {
  eyebrow: "Points Forts",
  title: "Un taxi local pensé pour rassurer avant même l'appel.",
  intro:
    "Taxi du Môle met en avant les informations qui comptent: disponibilité, zones, réservation, ponctualité et lisibilité.",
  items: [
    {
      number: "01",
      title: "Réservation Simple",
      text: "Un appel ou un email suffit pour préparer le départ, la destination, l'horaire et les besoins particuliers.",
    },
    {
      number: "02",
      title: "Zone Locale Claire",
      text: "Bonneville, vallée de l'Arve, Genève, Annecy, Chamonix et stations de Haute-Savoie.",
    },
    {
      number: "03",
      title: "Transferts Fiables",
      text: "Aéroports, gares et stations avec horaires anticipés pour limiter le stress du voyage.",
    },
    {
      number: "04",
      title: "Visibilité Locale Claire",
      text: "Pages dédiées, sitemap, robots.txt, données structurées et contenu local pour Google.",
    },
  ],
};

export const demarchesContent = {
  eyebrow: "Réservation",
  title: "Les étapes simples pour organiser votre trajet.",
  intro:
    "Une demande bien préparée permet de confirmer rapidement la course et d'éviter les oublis.",
  steps: [
    {
      title: "Indiquer Le Départ",
      text: "Adresse précise, ville, gare, aéroport, hôtel, station ou point de rendez-vous.",
    },
    {
      title: "Préciser La Destination",
      text: "Ville d'arrivée, terminal, gare, station ou adresse complète pour estimer l'organisation.",
    },
    {
      title: "Donner L'Horaire",
      text: "Date, heure souhaitée, numéro de vol ou de train si nécessaire.",
    },
    {
      title: "Confirmer Les Détails",
      text: "Nombre de passagers, bagages, siège enfant si besoin et moyen de contact.",
    },
  ],
};

export const demarchesDocuments = [
  "Nom et téléphone du passager",
  "Adresse de départ et destination",
  "Date, heure et contraintes de correspondance",
  "Nombre de passagers et bagages",
  "Numéro de vol ou de train si disponible",
];

export const solutionsPageContent = {
  eyebrow: "Services",
  title: "Des services taxi pour les trajets locaux, les voyageurs et les stations.",
  intro:
    "Chaque page du site aide le client à comprendre rapidement le bon service et à passer à l'appel.",
  cards: [
    {
      title: "Taxi Bonneville",
      text: "Trajets locaux autour de Bonneville, rendez-vous, courses personnelles et retours à domicile.",
    },
    {
      title: "Aéroport Genève",
      text: "Transfert organisé vers Genève avec horaires, bagages et prise en charge anticipée.",
    },
    {
      title: "Gares Haute-Savoie",
      text: "Bonneville, Cluses, Annemasse, Annecy et correspondances régionales.",
    },
    {
      title: "Stations De Ski",
      text: "Chamonix, Flaine, Le Grand-Bornand, La Clusaz et destinations montagne selon réservation.",
    },
    {
      title: "Longues Distances",
      text: "Trajets régionaux ou interurbains avec demande de devis clair avant le départ.",
    },
    {
      title: "Transport Régulier",
      text: "Organisation de trajets récurrents selon les besoins et la disponibilité.",
    },
  ],
};

export const preuvesContent = {
  eyebrow: "Confiance",
  title: "Des signaux concrets pour transformer une visite en réservation.",
  intro:
    "Le site est structuré pour inspirer confiance: informations visibles, pages locales, contact direct et parcours clair.",
  stats: [
    { value: "24/7", label: "Demandes Sur Réservation" },
    { value: "74", label: "Haute-Savoie" },
    { value: "3", label: "Aéroports Cibles" },
    { value: "8", label: "Pages Locales" },
  ],
  sources: ["Sitemap XML", "Robots.txt", "JSON-LD TaxiService"],
  notes: [
    "Le sitemap référence les pages importantes du site.",
    "Le robots.txt autorise l'exploration et pointe vers le sitemap.",
    "Les titres et descriptions sont adaptés aux recherches locales taxi Haute-Savoie.",
  ],
};

export const faqContent = [
  {
    question: "Comment réserver un taxi ?",
    answer:
      "Appelez directement ou envoyez un email avec le départ, la destination, la date, l'heure, le nombre de passagers et les bagages.",
  },
  {
    question: "Taxi du Môle assure-t-il les transferts vers l'aéroport de Genève ?",
    answer:
      "Oui, le site présente les transferts vers Genève, Lyon, Annecy et les principales gares de Haute-Savoie.",
  },
  {
    question: "Peut-on réserver à l'avance ?",
    answer:
      "Oui, c'est conseillé pour les départs matinaux, les vols, les trains, les stations et les périodes de forte demande.",
  },
  {
    question: "Quelles zones sont desservies ?",
    answer:
      "Bonneville, Cluses, La Roche-sur-Foron, Marignier, Saint-Jeoire, Genève, Annecy, Chamonix et la Haute-Savoie selon réservation.",
  },
  {
    question: "Le taxi peut-il aller en station de ski ?",
    answer:
      "Oui, les trajets vers les stations de Haute-Savoie peuvent être organisés sur réservation avec les informations de bagages.",
  },
  {
    question: "Le site est-il prêt pour Google Search Console ?",
    answer:
      "Oui, il contient un sitemap, un robots.txt, des pages locales et des données structurées TaxiService.",
  },
  {
    question: "Quel est le meilleur moyen pour une demande urgente ?",
    answer:
      "Le téléphone reste le plus rapide pour une course urgente ou une confirmation immédiate.",
  },
  {
    question: "Quelles informations donner pour un transfert aéroport ?",
    answer:
      "Indiquez le numéro de vol, l'heure, le terminal si connu, l'adresse de départ ou d'arrivée et le nombre de bagages.",
  },
];
