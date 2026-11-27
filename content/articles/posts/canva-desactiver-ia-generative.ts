import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-20";
const IMG = "/images/articles/canva-desactiver-ia-generative";
const VERGE = "https://www.theverge.com/ai-artificial-intelligence/1037126/canva-ai-features-off-button";

export const canvaDesactiverIaGenerative: Article = {
  title: "Canva ajoute un bouton pour couper son IA générative",
  slug: "canva-desactiver-ia-generative",
  description:
    "Canva permet désormais de désactiver ses outils d'IA générative et de voir moins de contenus IA. Ce que le réglage coupe, ce qu'il garde, et à quoi il sert.",
  excerpt:
    "Canva ajoute un interrupteur qui coupe Magic Write, Magic Expand, Dream Lab et la génération d'images, mais garde le détourage et Magic Grab. Un second réglage met les créations humaines en premier. Ce que ça change pour toi.",
  category: "actualites-ia",
  tags: ["Actualités IA", "canva", "ia générative", "design", "réglages", "clients"],
  date: "2026-11-20",
  updatedAt: "2026-11-20",
  news: true,
  publishedTime: "10:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/canva-desactiver-ia-generative.webp",
  imageAlt:
    "Un graphiste en pull gris, sourcils froncés, devant son ordinateur portable dans un atelier lumineux, un carnet de croquis et un nuancier sur le bureau, des affiches typographiques au mur",
  keywords: ["désactiver ia canva", "canva ia générative", "canva bouton off ia", "canva magic studio", "contenus ia canva"],
  relatedSlugs: ["carrousel-instagram-ia", "adobe-createurs-ia-resultat-presque", "firefly-modeles-partenaires-usage-commercial"],
  faq: [
    {
      question: "Comment désactiver l'IA générative dans Canva ?",
      answer:
        "Selon The Verge, il faut aller dans Profile > Settings > Permission, puis désactiver l'option Enable generative AI features. Les noms des menus peuvent être traduits dans l'interface en français.",
    },
    {
      question: "Quels outils sont coupés par ce réglage ?",
      answer:
        "Magic Expand, la génération d'images dans le chatbot de Canva, Magic Write, Magic Design, Magic Layers, Magic Edit, Dream Lab, Canva Code, AI Shapes et d'autres, d'après The Verge.",
    },
    {
      question: "Quels outils IA restent actifs ?",
      answer:
        "Le détourage d'arrière-plan et Magic Grab, qui permet de sélectionner un objet dans une image pour le déplacer. Canva dit qu'ils restent actifs parce qu'ils accélèrent les tâches courantes sans rien générer de nouveau.",
    },
    {
      question: "Peut-on voir moins de contenus IA dans la bibliothèque Canva ?",
      answer:
        "Oui. Dans Profile > Your account > AI personalization, une option affiche en priorité les contenus créés par des humains. Canva dit qu'une petite partie de sa bibliothèque est générée par IA et que ces éléments sont étiquetés dans les métadonnées des designs.",
    },
    {
      question: "Le réglage est-il réservé aux comptes payants ?",
      answer:
        "Non. The Verge indique que les deux interrupteurs sont disponibles pour les utilisateurs gratuits comme payants.",
    },
    {
      question: "Mes anciens designs faits avec l'IA disparaissent-ils ?",
      answer:
        "Non. L'écran de réglage montré par Canva précise que les créations déjà faites avec les fonctions Magic et IA générative ne sont pas supprimées si tu changes ce paramètre.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Pendant trois ans, Canva a ajouté de l'IA partout. Cette semaine, il fait l'inverse : un **interrupteur** permet de couper ses outils d'IA générative, et un second réglage fait passer les **créations humaines en premier** dans sa bibliothèque.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [l'article d'Emma Roth pour The Verge](" + VERGE + "), publié le 19 novembre 2026 et lu le 20 novembre. La page d'aide de Canva n'était pas accessible depuis mon outil de lecture, et je n'ai pas encore vu le réglage sur un compte : les noms de menus viennent de The Verge, en anglais.",
    },
    { type: "h2", id: "annonce", text: "Ce que Canva a changé" },
    {
      type: "screenshot",
      src: `${IMG}-the-verge.webp`,
      alt: "Article de The Verge du 19 novembre 2026 signé Emma Roth : Canva adds an AI off button, You can also select an option to see less AI-generated content in Canva's library",
      caption: "L'article de The Verge, le 20 novembre 2026.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 1120,
      height: 530,
    },
    {
      type: "p",
      text: "Le réglage s'appelle **Enable generative AI features**. Une fois désactivé, il coupe une longue liste d'outils : **Magic Expand** (l'extension de photo), la génération d'images dans le chatbot de Canva, **Magic Write**, **Magic Design**, **Magic Layers**, **Magic Edit**, **Dream Lab**, **Canva Code**, **AI Shapes**, et d'autres.",
    },
    {
      type: "p",
      text: "Deux outils restent actifs : le **détourage d'arrière-plan** et **Magic Grab**, qui sélectionne un objet pour le déplacer. Canva justifie ce choix ainsi, cité par The Verge : ils « rendent les tâches courantes plus rapides sans rien générer de nouveau ».",
    },
    {
      type: "screenshot",
      src: `${IMG}-reglage.webp`,
      alt: "Écran Permissions de Canva, rubrique Magic and Generative AI : les créations passées ne sont pas supprimées si les réglages changent, et un interrupteur Enable Generative AI features qui affiche ou masque Canva AI, Magic Write et Magic Edit",
      caption: "L'écran de réglage publié par Canva, reproduit par The Verge, le 20 novembre 2026.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 620,
      height: 370,
    },
    {
      type: "p",
      text: "Le second réglage touche la bibliothèque de modèles, graphismes et éléments. Activé, il montre d'abord les contenus créés par des humains. Canva affirme qu'une « petite partie » de sa bibliothèque est générée par IA, et que tout design qui utilise un de ces éléments porte une **étiquette IA dans ses métadonnées**. Les deux interrupteurs sont ouverts aux comptes **gratuits comme payants**.",
    },
    { type: "h2", id: "pourquoi", text: "Pourquoi Canva recule (un peu)" },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : coupé, les outils qui génèrent comme Magic Expand, Magic Write et Dream Lab ; gardé, les outils qui retouchent, détourage et Magic Grab ; en plus, un réglage pour voir moins de contenus IA dans la bibliothèque",
      caption: "Ce que le bouton coupe et ce qu'il garde, d'après The Verge. Schéma AI Studios.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 678,
    },
    {
      type: "p",
      text: "The Verge rappelle que depuis le grand virage IA de Canva en 2023, une partie des utilisateurs se plaint de l'avalanche de fonctions et réclame un moyen de les couper. Canva n'a pas ralenti pour autant : édition par prompt en avril, puis **Canva Craft**, son premier modèle d'image maison, le mois dernier. Le bouton ne change pas sa stratégie. Il laisse simplement le choix à ceux qui n'en veulent pas.",
    },
    {
      type: "p",
      text: "La ligne de partage est intéressante : Canva sépare ce qui **retouche** ce que tu as fourni de ce qui **génère** du neuf. C'est la même distinction qui compte quand un client te demande si un visuel est « fait avec l'IA ». Adobe a d'ailleurs chiffré le malaise des créateurs face aux résultats générés qui ratent leur idée, je l'expliquais dans [l'étude Adobe sur le résultat « presque bon »](/blog/adobe-createurs-ia-resultat-presque).",
    },
    { type: "h2", id: "pour-toi", text: "Quand t'en servir" },
    {
      type: "ul",
      items: [
        "**Un client qui refuse l'IA.** Certaines marques, maisons d'édition ou institutions l'écrivent dans leur cahier des charges. Couper le réglage sur le compte dédié évite qu'un collaborateur clique sur Magic Write par réflexe.",
        "**Une équipe à cadrer.** Si tu gères un compte partagé, c'est un garde-fou simple. Vérifie quand même qui peut changer le réglage.",
        "**Une bibliothèque plus propre.** Le filtre « moins de contenus IA » t'aide si tu cherches des illustrations avec un vrai style d'auteur, pas des images génériques.",
        "**Tes posts du quotidien.** Pour un [carrousel Instagram fait avec l'IA](/blog/carrousel-instagram-ia), garde les outils actifs : le gain de temps est réel, et tu restes maître du texte.",
      ],
    },
    {
      type: "p",
      text: "Et si tu utilises l'IA générative pour un usage commercial, le vrai sujet reste la provenance des images et les droits. Je l'ai détaillé pour Adobe dans [les modèles partenaires de Firefly et l'usage commercial](/blog/firefly-modeles-partenaires-usage-commercial).",
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Les équipes.** On ne sait pas si un administrateur Canva Teams peut imposer le réglage à tous les membres.",
        "**La liste complète.** The Verge écrit « et plus encore » : la liste exacte des outils coupés n'est pas publiée dans l'article.",
        "**L'étiquetage.** L'étiquette IA est dans les métadonnées, pas visible sur le design : on ne sait pas si elle survit à un export en PNG ou en PDF.",
        "**Les noms en français.** Les menus cités sont ceux de l'interface anglaise.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "C'est une bonne décision, et elle aurait dû arriver plus tôt. Un outil de design qui laisse ses utilisateurs choisir quand l'IA intervient gagne en confiance, pas l'inverse. Pour toi, la leçon tient en une phrase : **décide où l'IA entre dans ton travail**, au lieu de la subir partout où elle est proposée.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Choisis où l'IA t'aide vraiment",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à ton workflow créatif sans perdre ta patte.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 20 novembre 2026 à partir de l'article d'Emma Roth publié par The Verge le 19 novembre 2026, lu le 20 novembre. L'écran de réglage reproduit vient de Canva, via The Verge.",
        "La page d'aide de Canva n'a pas pu être lue. Le réglage n'a pas été testé sur un compte.",
      ],
      teste: ["La lecture de l'article de The Verge"],
      nonTeste: ["Le réglage sur un compte Canva", "Le filtre de la bibliothèque"],
      sources: [{ label: "The Verge, Canva adds an AI 'off' button (Emma Roth), 19/11/2026", href: VERGE }],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-20 -->
