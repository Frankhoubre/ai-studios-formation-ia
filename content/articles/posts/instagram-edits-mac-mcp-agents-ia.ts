import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-06";
const IMG = "/images/articles/instagram-edits-mac-mcp-agents-ia";
const EDITS = "https://edits.instagram.com/blog/edits-desktop-video-editor/";
const VERGE = "https://www.theverge.com/tech/1027444/instagram-edits-desktop-ai-agents-muse-mcp";
const APPLEINSIDER = "https://appleinsider.com/articles/26/11/05/instagrams-edits-moves-beyond-the-iphone-with-mac-app";

export const instagramEditsMacMcpAgentsIa: Article = {
  title: "Edits sur Mac : le montage Instagram s'ouvre aux agents IA",
  slug: "instagram-edits-mac-mcp-agents-ia",
  description:
    "Instagram sort Edits sur Mac le 5 novembre 2026 : timeline multipiste, export 4K sans filigrane et un MCP pour brancher un agent IA. Ce que ça change pour toi.",
  excerpt:
    "Edits, l'appli de montage d'Instagram, arrive sur Mac avec une vraie timeline, de l'étalonnage et une porte ouverte aux agents IA via MCP. Ce qui est confirmé, ce qui manque encore, et comment la tester sans casser ton workflow.",
  category: "actualites-ia",
  tags: ["Actualités IA", "instagram", "edits", "montage vidéo", "mcp", "agents ia", "mac"],
  date: "2026-11-06",
  updatedAt: "2026-11-06",
  news: true,
  publishedTime: "09:45",
  readingTime: 6,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/instagram-edits-mac-mcp-agents-ia.webp",
  imageAlt:
    "Dans une chambre mansardée le soir, un créateur au crâne rasé en pull moutarde monte une vidéo sur un ordinateur portable, une timeline colorée à l'écran, un téléphone sur trépied et un carnet de notes de montage posés sur le bureau",
  keywords: ["edits mac", "instagram edits desktop", "edits mcp", "montage vidéo instagram ia", "edits instagram ordinateur"],
  relatedSlugs: ["monter-video-ia-capcut-davinci", "capcut-ia-fonctions", "montage-automatique-ia"],
  faq: [
    {
      question: "Edits est-il disponible sur Mac ?",
      answer:
        "Oui, depuis le 5 novembre 2026. Instagram a publié la première version de son éditeur de bureau pour macOS, téléchargeable sur edits.com/desktop. Il n'existe pas de version Windows ni Linux pour l'instant.",
    },
    {
      question: "Edits sur Mac est-il gratuit ?",
      answer:
        "Instagram présente l'éditeur de bureau comme gratuit, et AppleInsider le décrit aussi comme un éditeur vidéo gratuit. L'export en 4K se fait sans filigrane, d'après l'annonce officielle.",
    },
    {
      question: "À quoi sert le MCP dans Edits ?",
      answer:
        "Le MCP (Model Context Protocol) permet à un agent IA d'utiliser les outils d'Edits Desktop. Matthew Simari, responsable produit d'Edits, explique à The Verge qu'un agent peut par exemple monter un premier bout-à-bout à partir des vidéos de ton dossier Téléchargements, que tu reprends ensuite à la main dans Edits. D'après AppleInsider, l'option s'active dans les réglages.",
    },
    {
      question: "Quel agent IA peut-on brancher sur Edits ?",
      answer:
        "Selon Matthew Simari, n'importe quel agent compatible, y compris Muse, l'agent de Meta. Instagram n'a pas publié de liste d'agents testés ni la documentation détaillée des outils exposés dans l'annonce du 5 novembre.",
    },
    {
      question: "Peut-on commencer un montage sur le téléphone et le finir sur Mac ?",
      answer:
        "Pas encore. Les styles audio et texte enregistrés sur mobile se retrouvent sur le bureau, mais un même projet ne se modifie pas encore sur les deux. Instagram dit travailler dessus, sans date.",
    },
    {
      question: "Edits sur Mac remplace-t-il CapCut ou DaVinci Resolve ?",
      answer:
        "Pour des Reels et des vidéos publiées sur Instagram, il peut suffire : timeline multipiste, images clés, roues chromatiques, LUT et publication directe. Pour un montage long ou un étalonnage poussé, je garderais un logiciel de montage complet tant que je n'ai pas testé Edits sur un vrai projet.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Instagram a sorti le 5 novembre 2026 **Edits pour Mac**, la version bureau de son application de montage vidéo. D'après [l'annonce officielle](" + EDITS + ") signée Brett Westervelt, qui dirige Edits, cette première version apporte une timeline multipiste, de l'étalonnage, l'export 4K sans filigrane et la publication directe sur Instagram. Et un détail que peu d'éditeurs grand public proposent : tu peux **brancher un agent IA sur l'éditeur via MCP**.",
    },
    {
      type: "p",
      text: "Pour un créateur qui monte ses Reels sur téléphone, c'est surtout la fin du pouce qui cache la moitié de la timeline. Pour celui qui travaille déjà avec un agent IA, c'est la première fois qu'un outil de montage lié à un réseau social se laisse piloter de l'extérieur.",
    },
    {
      type: "screenshot",
      src: `${IMG}-edits.webp`,
      alt: "En-tête du billet officiel Edits on desktop is here, daté du 5 novembre 2026, avec le bouton Get Edits on Mac et le début du texte de Brett Westervelt",
      caption: "Le billet d'annonce publié sur le blog d'Edits le 5 novembre 2026. Capture du 6 novembre 2026.",
      source: EDITS,
      capturedAt: CAPTURE,
      width: 1280,
      height: 520,
    },
    { type: "h2", id: "annonce", text: "Ce qu'Instagram a annoncé" },
    {
      type: "p",
      text: "Edits a été lancé sur mobile au printemps 2025. Instagram dit qu'en un peu plus d'un an, **50 millions de personnes** s'en sont servies. La version Mac reprend ce qui fait l'appli (la bibliothèque musicale d'Instagram, les effets, les sous-titres automatiques) et ajoute ce qu'un téléphone fait mal.",
    },
    {
      type: "ul",
      items: [
        "**Montage** : timeline multipiste, images clés pour les transitions, formes d'onde audio pour couper sur le temps, découpe et rognage plus précis à la souris.",
        "**Couleur** : roues chromatiques, conversion des fichiers log, courbes, et import de tes propres LUT et polices.",
        "**Son et texte** : musiques sous licence et libres de droits d'Instagram, des centaines d'effets sonores et vidéo, sous-titres automatiques illimités en plusieurs langues.",
        "**Clavier** : raccourcis personnalisables, y compris ceux d'un autre logiciel que tu connais déjà.",
        "**Sortie** : formats horizontal et vertical, export 4K sans filigrane, ou publication directe sur Instagram avec identification, lieu et Reels d'essai.",
        "**Rythme** : une mise à jour par semaine, comme sur mobile.",
      ],
    },
    {
      type: "p",
      text: "Ce qui manque est dit noir sur blanc : pas de version Windows ni Linux, et pas encore de projet partagé entre téléphone et ordinateur. Seuls tes styles audio et texte enregistrés sur mobile te suivent. Instagram dit travailler sur le montage entre appareils, sans donner de date.",
    },
    { type: "h2", id: "mcp", text: "Le MCP, la vraie nouveauté pour les agents IA" },
    {
      type: "p",
      text: "L'annonce officielle tient en une phrase : si tu utilises des agents IA, tu peux les connecter à l'éditeur de bureau via MCP pour qu'ils t'aident sur tes projets. [The Verge](" + VERGE + ") donne plus de détails grâce à un entretien avec **Matthew Simari**, responsable produit d'Edits : Instagram publie un MCP pour **tous les outils** d'Edits Desktop, et tu peux y brancher l'agent de ton choix, Muse (celui de Meta) ou un autre.",
    },
    {
      type: "screenshot",
      src: `${IMG}-verge.webp`,
      alt: "Article de The Verge intitulé You can edit your videos with AI on Instagram's new desktop Edits app, avec une capture de l'éditeur et le chapô sur la timeline multipiste et la connexion d'agents IA",
      caption: "L'article de Stevie Bonifield pour The Verge, publié le 5 novembre 2026 à 15 h UTC. Capture du 6 novembre 2026.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 1160,
      height: 300,
    },
    {
      type: "p",
      text: "L'exemple qu'il donne parle à n'importe quel monteur : tu demandes à l'agent de faire un premier bout-à-bout avec les vidéos de ton dossier Téléchargements, il appelle les outils d'Edits, puis tu ouvres le fichier de projet pour continuer à la main. On passe de l'agent au manuel et inversement, dit-il. D'après [AppleInsider](" + APPLEINSIDER + "), l'option MCP s'active dans les réglages de l'appli.",
    },
    {
      type: "p",
      text: "Ce que personne n'a encore publié : la liste précise des outils exposés, ce qu'un agent peut faire sans ton accord (publier ? effacer ?) et la qualité réelle d'un bout-à-bout automatique. Je n'ai rien testé moi-même, donc prends l'exemple de Simari pour ce qu'il est : une démonstration d'intention, pas une mesure.",
    },
    { type: "h2", id: "pour-qui", text: "Ce que ça change pour ton workflow" },
    {
      type: "p",
      text: "Si tu montes déjà tes Reels dans CapCut sur Mac, la comparaison devient directe. CapCut a sa version macOS depuis 2021, rappelle AppleInsider, et il reste plus complet sur les fonctions IA que je détaille dans [mon tour de CapCut IA](/blog/capcut-ia-fonctions). L'argument d'Edits, c'est la publication sans détour : plus besoin d'exporter sur l'ordinateur, d'envoyer le fichier sur le téléphone puis de poster.",
    },
    {
      type: "p",
      text: "Si tu fais des projets plus longs, Edits ne remplace pas encore un logiciel de montage complet. Les roues chromatiques et les LUT sont une bonne base, mais pour une pub ou un court métrage, la méthode de [montage IA avec CapCut et DaVinci Resolve](/blog/monter-video-ia-capcut-davinci) reste mon point de départ.",
    },
    {
      type: "p",
      text: "Et si tu cherches à automatiser le dérushage, le MCP ouvre une piste intéressante. Les outils de [montage automatique par IA](/blog/montage-automatique-ia) font déjà des bout-à-bout, mais dans leur propre interface. Ici, l'agent travaille dans l'éditeur où tu finis le montage, ce qui évite d'exporter et de réimporter à chaque étape.",
    },
    { type: "h2", id: "essayer", text: "Comment le tester sans perdre ta soirée" },
    {
      type: "p",
      text: "Voici le test que je ferais, sur un vrai Reel plutôt que sur une démo :",
    },
    {
      type: "ol",
      items: [
        "Télécharge Edits pour Mac sur edits.com/desktop et connecte ton compte Instagram. Vérifie que tes styles de texte enregistrés sur mobile sont bien là.",
        "Reprends un Reel que tu as déjà publié et remonte-le à l'identique sur Mac. Note le temps passé, comparé à ton outil habituel.",
        "Configure tes raccourcis clavier sur ceux de ton logiciel actuel avant de commencer, sinon tu vas tout comparer à tort.",
        "Si tu utilises un agent IA, active le MCP dans les réglages et donne-lui une seule tâche simple : un bout-à-bout de cinq clips dans un dossier précis. Regarde ce qu'il fait avant de lui confier plus.",
        "Exporte en 4K et en vertical, puis publie en Reel d'essai pour voir le rendu réel avant de l'adopter sur ton compte principal.",
      ],
    },
    {
      type: "table",
      caption: "Ce qui est confirmé et ce qui reste flou au 6 novembre 2026",
      headers: ["Point", "Confirmé par l'annonce", "Encore flou"],
      rows: [
        ["Plateformes", "macOS uniquement", "Date d'une version Windows"],
        ["Prix", "Éditeur présenté comme gratuit", "Fonctions payantes éventuelles plus tard"],
        ["Agents IA", "MCP pour connecter un agent", "Liste des outils exposés, garde-fous"],
        ["Mobile et bureau", "Styles audio et texte partagés", "Projet commun, annoncé sans date"],
        ["Export", "4K sans filigrane, horizontal et vertical", "Codecs et réglages fins"],
      ],
      source: [
        { label: "Blog Edits, 05/11/2026", href: EDITS },
        { label: "The Verge, 05/11/2026", href: VERGE },
      ],
      verifieLe: CAPTURE,
    },
    { type: "h2", id: "limites", text: "Mon avis, avec ses limites" },
    {
      type: "p",
      text: "Edits sur Mac est une réponse logique d'Instagram : les vidéos horizontales et plus longues arrivent sur la plateforme, et elles se montent mal sur un téléphone. Le vrai pari, c'est le MCP. Si un agent sait vraiment préparer un dérushage propre dans l'éditeur où tu finis ton film, c'est des heures gagnées chaque semaine. Si l'agent se contente de coller des clips bout à bout, ce sera une curiosité.",
    },
    {
      type: "p",
      text: "Je n'ai pas encore monté de projet avec. Tout ce que je décris vient de l'annonce d'Instagram et de la presse du 5 novembre. Je reviendrai sur l'article quand j'aurai testé le MCP sur un vrai dérushage. D'ici là, pour les formats courts, garde sous la main [la méthode pour des vidéos TikTok, Reels et Shorts](/blog/video-courte-ia-tiktok-reels-shorts).",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à monter tes vidéos IA avec une méthode",
      text: "Ma formation IA gratuite te montre comment générer tes plans, les assembler et choisir le bon outil avant de dépenser quoi que ce soit.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 6 novembre 2026 le billet officiel du blog d'Edits daté du 5 novembre, l'article de The Verge du 5 novembre (entretien avec Matthew Simari) et celui d'AppleInsider du même jour. Les deux captures viennent de ces pages, prises le 6 novembre.",
        "Je n'ai pas installé Edits pour Mac. Le chiffre de 50 millions d'utilisateurs est celui d'Instagram.",
      ],
      teste: ["La lecture de l'annonce officielle et de deux articles de presse, captures du même jour"],
      nonTeste: [
        "L'installation et le montage dans Edits pour Mac",
        "La connexion d'un agent IA via le MCP",
        "La qualité de l'export 4K",
      ],
      sources: [
        { label: "Blog Edits, Edits on desktop is here, 05/11/2026", href: EDITS },
        { label: "The Verge, 05/11/2026", href: VERGE },
        { label: "AppleInsider, 05/11/2026", href: APPLEINSIDER },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-06 -->
