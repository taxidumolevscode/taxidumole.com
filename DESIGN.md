---
version: alpha
name: Taxi du Môle
description: Interface de réservation de taxi en Haute-Savoie, sobre et lisible, avec accents jaunes.
colors:
  primary: "#171717"
  accent: "#ffb600"
  background: "#f7f7f7"
  surface: "#ffffff"
  muted: "#666666"
  border: "#e5e5e5"
typography:
  sans:
    fontFamily: "Arial, Helvetica, sans-serif"
rounded:
  DEFAULT: "16px"
  control: "12px"
spacing:
  page-max: "1352px"
  desktop-gutter: "28px"
  mobile-gutter: "20px"
---

# Identité et conventions

Ce document décrit l'interface existante, sans changer son identité.
Les sources de vérité à l'exécution restent `styles/globals.css` et
`tailwind.config.js`. Ce fichier ne génère pas de styles.

## Public et parcours

Le site s'adresse aux voyageurs francophones et aux personnes préparant un
transfert en Haute-Savoie, depuis Genève ou vers les Alpes du Nord.
Les pages de présentation accompagnent le choix du trajet ; l'annuaire des
destinations et la réservation privilégient la lisibilité et l'action.
Un prix ou une prise en charge sont confirmés selon les conditions de réservation.
Ne pas suggérer un calcul routier automatique lorsqu'aucun service ne le fournit.

## Références du projet

- `components/mobility/AppShell.jsx` : en-tête, navigation, contenu et pied de page.
- `PageIntro` : titre principal et introduction.
- `pages/ski-transfert.jsx` : présentation des transferts et images.
- `pages/tarifs.jsx` : informations structurées et tableaux.
- `components/mobility/BookingForm.jsx` : champs, étapes et réservation.

## Valeurs visuelles

La classe `.mobility-app` définit les variables `--app-gold`, `--app-ink` et
`--app-muted`. Le jaune souligne les liens et quelques détails ; les boutons
principaux restent sombres avec du texte blanc. Les surfaces sont blanches sur
fond gris clair, séparées par des bordures fines. Éviter les effets décoratifs
qui concurrencent les destinations, les prix ou les formulaires.

La police de l'interface est Arial avec les replis Helvetica et sans-serif.
Les titres sont plus grands et plus denses que les descriptions. Conserver les
niveaux de titres sémantiques ; ne pas appliquer la capitalisation des titres
aux longues listes de lieux.

## Composants et adaptation

Réutiliser `.app-primary`, `.app-secondary`, `.app-text-link`, `.app-field` et
les éléments de l'AppShell. Les champs conservent un texte de 16 px. Le contenu
partagé est limité à 1352 px avec des marges intérieures de 28 px sur ordinateur
et 20 px sur mobile. La navigation mobile reste en bas, avec une zone de sécurité.
Les listes et contrôles doivent tenir sur 320 px sans déborder horizontalement.

Les icônes proviennent de Lucide React. Donner un libellé aux actions et une
indication visible du focus. Employer les éléments natifs appropriés pour les
boutons, liens, listes, sélecteurs et tableaux.

## Mouvement, données et états

Les animations accompagnent une transition utile. Respecter
`prefers-reduced-motion` et éviter une animation répétée sur chaque ligne d'un
annuaire. Réserver l'espace des images et demander des dimensions adaptées.

La recherche de destinations ignore les accents et couvre les quartiers.
Présenter un résultat vide explicite et une action de réinitialisation.
Les villages et quartiers sont distincts des domaines skiables ; une destination
canonique n'apparaît qu'une fois dans les données. La même source JSON alimente
l'annuaire et son téléchargement.
