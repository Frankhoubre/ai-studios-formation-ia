import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-21";
const IMG = "/images/articles/gemini-mac-agent-applications-creatifs";
const GOOGLE = "https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/";

export const geminiMacAgentApplicationsCreatifs: Article = {
  title: "Gemini sur Mac pilote tes applis créatives à ta place",
  slug: "gemini-mac-agent-applications-creatifs",
  description:
    "Gemini sur Mac peut cliquer et taper dans tes applis, Blender ou retouche photo compris. Ce qu'il fait, comment garder la main, et pourquoi la France attend.",
  excerpt:
    "Google ouvre l'usage de l'ordinateur dans l'appli Gemini pour Mac : l'agent clique, tape et remplit des formulaires dans tes fichiers, tes applis et le web, dans une fenêtre isolée. Réservé pour l'instant aux États-Unis, en anglais. Ce que ça change pour un créatif.",
  category: "actualites-ia",
  tags: ["Actualités IA", "gemini", "agent ia", "mac", "workflow", "blender"],
  date: "2026-11-21",
  updatedAt: "2026-11-21",
  news: true,
  publishedTime: "10:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/gemini-mac-agent-applications-creatifs.webp",
  imageAlt:
    "Une illustratrice dessine dans un carnet à une grande table en bois, dans un appartement lumineux plein de livres et de plantes, pendant que son ordinateur portable affiche une tâche en cours à côté d'une tasse fumante",
  keywords: ["gemini mac", "gemini computer use", "agent ia mac", "gemini pilote applications", "automatiser tâches créatives ia"],
  relatedSlugs: ["instagram-edits-mac-mcp-agents-ia", "automatiser-production-contenu-ia", "workflow-ia-creatif"],
  faq: [
    {
      question: "Qu'est-ce que l'usage de l'ordinateur dans Gemini pour Mac ?",
      answer:
        "Une fonction de l'appli Gemini pour Mac, annoncée par Google le 19 novembre 2026, qui laisse Gemini cliquer, taper, ouvrir des menus et remplir des formulaires dans tes fichiers locaux, tes applis de bureau et le web pour finir une tâche en plusieurs étapes.",
    },
    {
      question: "Gemini prend-il le contrôle de mon écran ?",
      answer:
        "Non. Selon Google, il travaille dans une fenêtre isolée en arrière-plan, avec un aperçu en direct dans la conversation. Ton écran et ton curseur restent libres pendant qu'il travaille.",
    },
    {
      question: "Comment garder le contrôle sur ce que fait Gemini ?",
      answer:
        "Google indique que tu choisis les applis auxquelles Gemini a accès, que tu vois chaque étape en direct, que tu peux mettre en pause à tout moment et que tu valides les actions clés avant qu'elles aient lieu.",
    },
    {
      question: "Est-ce disponible en France ?",
      answer:
        "Pas encore. Au 21 novembre 2026, Google déploie la fonction en anglais aux États-Unis uniquement, sans date annoncée pour d'autres pays ou d'autres langues.",
    },
    {
      question: "Quelle configuration faut-il ?",
      answer:
        "Un Mac Apple Silicon sous macOS Sequoia 15.0 ou plus récent, un compte Google personnel d'une personne de 18 ans et plus, et un abonnement Google AI Plus, Pro ou Ultra.",
    },
    {
      question: "Quelles tâches créatives Google met-il en avant ?",
      answer:
        "Étalonner un lot de photos dans ton logiciel de retouche et monter des scènes 3D complexes. La démo de Google montre Gemini qui modélise et rigge un papillon dans Blender à partir d'un dessin d'enfant.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu décris la tâche, et Gemini fait les clics. Depuis le 19 novembre, l'appli **Gemini pour Mac** sait utiliser ton ordinateur : elle ouvre tes applis, clique dans les menus, tape et remplit des formulaires pour finir un travail en plusieurs étapes. Mauvaise nouvelle pour nous : c'est réservé aux États-Unis, en anglais.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [le billet de Michael Friedman sur le blog de Google](" + GOOGLE + "), responsable produit de l'appli Gemini, publié le 19 novembre 2026 et lu le 21 novembre. Je n'ai pas pu tester la fonction depuis la France.",
    },
    { type: "h2", id: "annonce", text: "Ce que Google a lancé" },
    {
      type: "screenshot",
      src: `${IMG}-google.webp`,
      alt: "Billet du blog Google du 19 novembre 2026 signé Michael Friedman : Let Gemini tackle repetitive chores on your Mac, Gemini can now navigate Mac apps and websites in the background to finish complex tasks",
      caption: "Le billet de Google, capturé le 21 novembre 2026.",
      source: GOOGLE,
      capturedAt: CAPTURE,
      width: 800,
      height: 435,
    },
    {
      type: "p",
      text: "Google appelle ça **computer use**, l'usage de l'ordinateur. Dans la démo, on ajoute **@Computer use** à la fin du prompt, et Gemini part travailler sur tes **fichiers locaux, tes applis de bureau et le web**. Le but affiché : t'éviter les tâches répétitives qui demandent « des dizaines de clics ».",
    },
    {
      type: "p",
      text: "Le point le plus malin est ailleurs. Gemini ne prend pas ton écran : il travaille dans **une fenêtre isolée en arrière-plan**, avec un aperçu en direct dans la conversation. Ton curseur reste libre, tu peux continuer à monter, dessiner ou passer un appel pendant qu'il avance.",
    },
    {
      type: "screenshot",
      src: `${IMG}-blender.webp`,
      alt: "Démo de Google : le prompt Could you take my kid's butterfly sketch, model it and rig it for me in Blender? @Computer use, puis les étapes de Gemini et une fenêtre Blender avec un papillon en cours de modélisation",
      caption: "La démo de Google : un dessin d'enfant transformé en papillon 3D dans Blender, capturée le 21 novembre 2026.",
      source: GOOGLE,
      capturedAt: CAPTURE,
      width: 900,
      height: 652,
    },
    { type: "h2", id: "creatifs", text: "Ce que ça change pour un créatif" },
    {
      type: "p",
      text: "Google cite deux usages créatifs en premier : **étalonner un lot de photos** dans ton logiciel de retouche, et **monter des scènes 3D complexes**. La démo va plus loin : un dessin de papillon fait par un enfant, que Gemini modélise, texture et rigge dans Blender.",
    },
    {
      type: "screenshot",
      src: `${IMG}-usages.webp`,
      alt: "Liste des usages dans le billet de Google : accélérer les workflows créatifs, éviter la saisie de formulaires, transformer des données en présentations, mettre en vente des articles, puis la mention d'un déploiement en anglais aux États-Unis",
      caption: "Les usages cités par Google et la zone de déploiement, capturés le 21 novembre 2026.",
      source: GOOGLE,
      capturedAt: CAPTURE,
      width: 600,
      height: 380,
    },
    {
      type: "p",
      text: "Ce qui m'intéresse, ce n'est pas que l'IA fasse ton travail créatif. C'est qu'elle prenne la partie qui n'en est pas : renommer 200 fichiers, appliquer le même préréglage à une série, exporter dans cinq formats, remplir la fiche de livraison d'un client. Ce sont les tâches qu'on repousse et qui mangent une fin de journée.",
    },
    {
      type: "p",
      text: "C'est la même tendance que l'éditeur vidéo d'Instagram qui s'ouvre aux agents, dont je parlais dans [l'article sur Edits pour Mac](/blog/instagram-edits-mac-mcp-agents-ia). La différence : Edits se laisse piloter par une porte prévue pour ça, alors que Gemini passe par l'interface, comme toi. Il peut donc toucher à n'importe quelle appli, même celles qui n'ont rien prévu pour les agents.",
    },
    { type: "h2", id: "controle", text: "Comment tu gardes la main" },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : Gemini clique et tape à ta place dans tes fichiers, applis et le web ; tu choisis les applis, suis chaque étape, mets en pause et valides les actions clés ; accès limité aux États-Unis en anglais, Mac Apple Silicon sous Sequoia 15, compte 18 ans et plus, abonnement AI Plus, Pro ou Ultra",
      caption: "Ce que fait Gemini sur Mac et qui peut s'en servir, d'après Google. Schéma AI Studios.",
      source: GOOGLE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 676,
    },
    {
      type: "p",
      text: "Google liste quatre garde-fous : tu **choisis les applis** auxquelles Gemini a accès, tu **vois chaque étape** en direct, tu peux **mettre en pause** à tout moment, et tu **valides les actions clés** avant qu'elles aient lieu. Le reste dépend de toi.",
    },
    {
      type: "ul",
      items: [
        "**Travaille sur une copie.** Un lot de photos étalonné de travers, ça se rattrape. Des originaux écrasés, non.",
        "**Limite les applis.** Donne accès au logiciel dont la tâche a besoin, pas à ta messagerie ni à ton compte bancaire.",
        "**Découpe la tâche.** « Applique ce préréglage aux 40 photos du dossier Mariage » marche mieux que « prépare la livraison du client ». C'est la même logique que pour [automatiser ta production de contenu](/blog/automatiser-production-contenu-ia).",
        "**Regarde le premier passage.** Le direct sert à ça : vérifier sur deux ou trois fichiers avant de laisser tourner le reste.",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**La date pour la France.** Google parle d'un déploiement en anglais aux États-Unis, sans calendrier pour les autres pays.",
        "**La fiabilité sur des logiciels pro.** La démo Blender est un exemple choisi par Google. Rien ne dit comment l'agent s'en sort dans un projet Premiere ou DaVinci chargé.",
        "**Les limites d'usage.** Le billet ne dit pas combien de tâches un abonnement AI Plus permet par jour.",
        "**Windows.** Rien n'est annoncé en dehors du Mac.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "C'est la bonne direction, et le choix de la fenêtre isolée est malin : un agent qui te vole ton curseur, personne n'en veut. En attendant que ça arrive chez nous, fais l'exercice dès maintenant : liste les cinq tâches répétitives de ta semaine. Le jour où l'outil sera ouvert en France, tu sauras exactement quoi lui confier, et tu garderas pour toi ce qui fait ta patte.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Fais travailler l'IA sur les bonnes tâches",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à ton workflow créatif sans perdre ta patte.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 21 novembre 2026 à partir du billet de Michael Friedman publié sur le blog de Google le 19 novembre 2026, lu le 21 novembre, note de bas de page comprise (configuration requise et abonnements).",
        "La fonction n'est pas disponible en France : elle n'a pas été testée.",
      ],
      teste: ["La lecture du billet de Google"],
      nonTeste: ["L'usage de l'ordinateur dans l'appli Gemini pour Mac", "La démo Blender"],
      sources: [{ label: "Google, Let Gemini tackle repetitive chores on your Mac (Michael Friedman), 19/11/2026", href: GOOGLE }],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-21 -->
