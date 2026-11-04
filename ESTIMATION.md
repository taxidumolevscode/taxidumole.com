# Estimation des courses

Le formulaire appelle POST /api/estimation. Le prix de reference est calcule
cote serveur a partir de la distance routiere Google Routes API (computeRoutes).

Configurer GOOGLE_MAPS_SERVER_KEY dans .env.local puis dans Vercel, et relancer
ou redeployer. Utiliser une cle serveur dediee, restreinte aux API necessaires,
avec facturation, quotas et alertes. Ne pas reutiliser sans verification une
cle navigateur restreinte aux referents HTTP. Aucune cle ne doit etre commitee.
Verifier que Routes API est activee et autorisee pour cette cle serveur.
La duree est indicative, sans prise en compte du trafic en temps reel.
Avant ouverture publique, proteger /api/estimation par une limitation de debit
durable ou le pare-feu Vercel afin de limiter les couts et les abus.

Source : arrete DDPP/PSC-2026-348 du 28 janvier 2026, publie le 11 fevrier.
https://politique.pappers.fr/commune/document/f9d83a507e77fb7824e12b86067eef9e

Grille centralisee dans lib/taxiFare.mjs, montants en centimes : prise en charge
355, minimum 800, A 125/km, B 186/km, C 250/km, D 372/km, attente 2850/heure.
Le simulateur utilise explicitement l'hypothese C/D (retour a vide), comme
l'ancien calculateur. Ne pas la presenter comme applicable a toutes les courses.
Le supplement passagers est de 400 centimes par personne a partir de la cinquieme.
La duree routiere n'est pas additionnee comme de l'attente.

Limites : pas de calcul d'approche, de neige, de bagages, de peages ni de
segmentation d'un trajet traversant plusieurs periodes tarifaires. Estimation
indicative seulement, pas un devis ferme ni une reproduction du taximetre.
Le calculateur refuse les dates 2027 tant que la nouvelle grille n'est pas
verifiee ; ne pas inventer de tarifs 2027 ou reconduire silencieusement 2026.

Validation : tests unitaires de calcul executes ; build Next.js reussi.
Un test reel Google et une verification visuelle restent necessaires apres
configuration de la cle. Aucun appel facture n'a ete fait pendant l'integration.
