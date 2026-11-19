import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-19";
const IMG = "/images/articles/studio-jadu-the-sentinels-serie-animee-ia";
const JADU_3M =
  "https://studiojadu.com/blog/2026-11-18-3-million-subscribers-and-counting-a-new-milestone-for-studio-jadu";
const JADU_SENT =
  "https://studiojadu.com/blog/2026-10-29-studio-jadu-debuts-the-sentinels-bringing-an-artist-led-original-series-to-youtube";
const JADU_AIDA = "https://studiojadu.com/blog/what-weve-been-building-at-studio-jadu";

export const studioJaduTheSentinelsSerieAnimeeIa: Article = {
  title: "The Sentinels : une série animée IA faite par 9 artistes",
  slug: "studio-jadu-the-sentinels-serie-animee-ia",
  description:
    "Studio Jadu passe 3 millions d'abonnés YouTube grâce à The Sentinels, une série animée faite par neuf artistes avec son outil IA. Ce que sa méthode t'apprend.",
  excerpt:
    "Studio Jadu dépasse 3 millions d'abonnés sur YouTube après The Sentinels, un thriller animé façon anime fait par neuf artistes avec AIDA, un assistant IA qui exige de la pré-production. Ce qu'on sait, et ce que tu peux en tirer pour ta propre série.",
  category: "actualites-ia",
  tags: ["Actualités IA", "studio jadu", "animation ia", "série animée", "youtube", "pré-production"],
  date: "2026-11-19",
  updatedAt: "2026-11-19",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/studio-jadu-the-sentinels-serie-animee-ia.webp",
  imageAlt:
    "Deux artistes penchés le soir sur un écran qui montre une aquarelle de bateau dans la tempête près d'une île tropicale, avec des storyboards papier, une tablette graphique et des tasses de café sur le bureau",
  keywords: ["série animée ia", "studio jadu", "the sentinels", "animation ia youtube", "aida studio jadu"],
  relatedSlugs: ["animatique-ia-methode", "monetisation-youtube-contenu-ia", "chaine-youtube-automatisee-ia"],
  faq: [
    {
      question: "Qu'est-ce que Studio Jadu ?",
      answer:
        "Un studio d'animation fondé par Masoud Loghmani, passé par YouTube et TikTok. Il se présente comme le studio d'animation des artistes indépendants : il fournit son outil IA, de la distribution et un partage des revenus, et les créateurs gardent le contrôle artistique.",
    },
    {
      question: "Qu'est-ce que The Sentinels ?",
      answer:
        "Une série animée d'inspiration anime, un thriller surnaturel créé par l'auteur d'horreur Ajinkya Bhasme. Elle est sortie le 30 octobre 2026 sur YouTube, sous forme d'une spéciale Halloween de trois épisodes intitulée Greed, Betrayal, and Death on North Sentinel Island.",
    },
    {
      question: "La série a-t-elle été faite entièrement par l'IA ?",
      answer:
        "Non, selon Studio Jadu. Neuf artistes ont dirigé l'esthétique peinte, le rythme, le jeu et l'ambiance. L'outil AIDA les a aidés sur les tâches de production les plus lourdes, mais le studio dit que les décisions créatives sont restées humaines.",
    },
    {
      question: "Qu'est-ce qu'AIDA ?",
      answer:
        "L'AI Director's Assistant, l'outil maison de Studio Jadu. Selon son fondateur, il demande de la pré-production avant de générer, travaille plan par plan et pousse à faire des croquis et des vignettes plutôt qu'à relancer des générations au hasard. Il n'est pas en vente libre.",
    },
    {
      question: "Combien d'abonnés a Studio Jadu ?",
      answer:
        "Plus de 3 millions sur YouTube, selon le billet du studio du 18 novembre 2026, qui attribue l'accélération à la sortie de The Sentinels. Le studio ne publie pas le nombre de vues de la série.",
    },
    {
      question: "Peut-on proposer son projet à Studio Jadu ?",
      answer:
        "Oui, le studio dit accepter des projets via son Pioneer Program, ouvert aux animateurs, auteurs et petits studios indépendants, avec une préférence pour les projets d'inspiration anime. Les conditions financières ne sont pas détaillées publiquement.",
    },
  ],
  content: [
    {
      type: "p",
      text: "On répète que l'IA va remplir YouTube de dessins animés sans âme. **Studio Jadu** prend le contre-pied, et ça marche : le studio annonce avoir dépassé **3 millions d'abonnés** sur YouTube, porté par ***The Sentinels***, une série d'inspiration anime faite par **neuf artistes** avec un outil IA maison.",
    },
    {
      type: "p",
      text: "Je me suis appuyé sur [le billet du studio du 18 novembre 2026](" + JADU_3M + "), sur [celui de la première, le 30 octobre](" + JADU_SENT + ") et sur [le texte du fondateur sur son outil](" + JADU_AIDA + "), lus le 19 novembre. Tous viennent du studio lui-même : les chiffres d'abonnés ne sont pas vérifiés ailleurs, et je n'ai pas testé leur outil, qui n'est pas en vente.",
    },
    { type: "h2", id: "annonce", text: "Ce que Studio Jadu annonce" },
    {
      type: "screenshot",
      src: `${IMG}-3-millions.webp`,
      alt: "Billet de Studio Jadu du 18 novembre 2026 : 3 million subscribers and counting, A new milestone for Studio Jadu, illustré par trois jeunes personnages de style anime qui regardent un écran sur un canapé avec du pop-corn",
      caption: "Le billet de Studio Jadu du 18 novembre 2026.",
      source: JADU_3M,
      capturedAt: CAPTURE,
      width: 1200,
      height: 630,
    },
    {
      type: "p",
      text: "Le studio a été fondé par **Masoud Loghmani**, passé par YouTube et TikTok. Son modèle : un studio pour les artistes indépendants, qui leur donne son outil IA, de la distribution et une part des revenus, pendant qu'ils gardent le contrôle artistique de leur travail.",
    },
    {
      type: "p",
      text: "Le billet du 18 novembre relie la croissance de la chaîne à la sortie de *The Sentinels*. Le studio en profite pour ouvrir son **Pioneer Program** aux animateurs, auteurs et petits studios indépendants, avec une préférence affichée pour les projets d'inspiration anime.",
    },
    { type: "h2", id: "sentinels", text: "The Sentinels, la série" },
    {
      type: "screenshot",
      src: `${IMG}-premiere.webp`,
      alt: "Billet de Studio Jadu du 30 octobre 2026 : Studio Jadu Debuts The Sentinels, Bringing an Artist-Led Original Series to YouTube, avec le titre Sentinels en lettres rouges peintes qui coulent sur fond noir",
      caption: "Le billet de la première, publié par Studio Jadu le 30 octobre 2026.",
      source: JADU_SENT,
      capturedAt: CAPTURE,
      width: 1200,
      height: 770,
    },
    {
      type: "p",
      text: "La série est créée par **Ajinkya Bhasme**, auteur de romans d'horreur à succès, réalisée par Nitin Burli et Sree Lakshmi, sous la supervision de Ruchir Joshi. C'est un thriller surnaturel, sorti le 30 octobre comme une spéciale Halloween de trois épisodes : *Greed, Betrayal, and Death on North Sentinel Island*.",
    },
    {
      type: "p",
      text: "L'histoire se passe à Noël 2004, en mer d'Andaman : une expédition illégale vers l'île de North Sentinel, avec deux règles, ne jamais allumer de feu et ne toucher à rien sur l'île. Le ferry est détruit, et le personnage principal, Shuki, est photographe. C'est une fiction qui part d'un vrai mystère : l'île existe et ses habitants vivent isolés du reste du monde. Côté image, le studio décrit des décors à l'aquarelle, un feu peint à l'huile et des personnages au trait net.",
    },
    { type: "h2", id: "aida", text: "AIDA, un outil IA qui refuse la loterie" },
    {
      type: "p",
      text: "C'est la partie qui m'intéresse le plus. L'outil s'appelle **AIDA**, pour AI Director's Assistant. Dans son texte d'août, Masoud Loghmani explique qu'il exige de la **pré-production**, travaille **plan par plan**, pousse à faire des croquis et des vignettes avant de générer, et « décourage la loterie des générations ». Sa formule : « l'IA peut générer, mais seuls les artistes créent ».",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : avant, AIDA demande un découpage, des croquis et des vignettes ; pendant, il aide plan par plan sur les tâches lourdes ; qui décide, neuf artistes pour l'esthétique, le rythme, le jeu et l'ambiance",
      caption: "La méthode AIDA telle que la décrit Studio Jadu. Schéma AI Studios.",
      source: JADU_AIDA,
      capturedAt: CAPTURE,
      width: 1600,
      height: 622,
    },
    {
      type: "p",
      text: "Pour *The Sentinels*, le studio dit que les neuf artistes ont dirigé « l'esthétique peinte, le rythme, le jeu et l'ambiance », et qu'AIDA a servi sur les tâches de production les plus lourdes, **en laissant les décisions créatives aux humains**. C'est un discours de studio, mais la méthode qu'il décrit, elle, tu peux la reprendre dès aujourd'hui avec tes propres outils.",
    },
    { type: "h2", id: "pour-toi", text: "Ce que tu peux en tirer pour ta série" },
    {
      type: "ul",
      items: [
        "**Découpe avant de générer.** Le succès de Jadu ne vient pas d'un meilleur modèle, il vient d'un découpage fait avant. Si tu n'as jamais monté [une animatique pour chronométrer ton film](/blog/animatique-ia-methode), commence par là.",
        "**Fixe ton style sur papier.** Aquarelle pour les décors, huile pour le feu, trait net pour les personnages : trois règles simples qui rendent une série reconnaissable d'un plan à l'autre.",
        "**Pense format.** Trois épisodes pour Halloween, c'est un événement daté, pas une saison de vingt épisodes. Pour une petite équipe, c'est le bon format pour tester un univers.",
        "**Vérifie les règles de la plateforme.** Une série faite avec l'IA peut être monétisée, à condition de respecter ce que YouTube attend : je les détaille dans [les règles de monétisation du contenu IA](/blog/monetisation-youtube-contenu-ia).",
      ],
    },
    {
      type: "p",
      text: "Et garde la leçon inverse en tête : une chaîne qui empile des vidéos générées à la chaîne, sans auteur ni découpage, n'a rien à voir avec ce modèle. J'en parlais dans [la vérité sur les chaînes YouTube automatisées](/blog/chaine-youtube-automatisee-ia).",
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Les audiences de la série.** Le studio donne ses abonnés, pas le nombre de vues de *The Sentinels*.",
        "**La part exacte de l'IA.** On ne sait pas quels plans ont été générés, dessinés ou retouchés, ni quels modèles tournent derrière AIDA.",
        "**Les conditions du partage de revenus.** Le Pioneer Program est ouvert, mais les pourcentages ne sont pas publiés.",
        "**Le calendrier.** Aucune suite de la série n'est datée dans les billets lus.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "C'est une des meilleures nouvelles du mois pour ceux qui font de l'animation avec l'IA. Pas parce que 3 millions d'abonnés prouvent quoi que ce soit sur la qualité, mais parce qu'un studio qui grandit vite le fait en vantant la **pré-production** et les artistes, pas la génération en masse. C'est la méthode que je défends depuis le début : l'outil accélère, l'auteur décide.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Monte ta série animée avec l'IA",
      text: "Ma formation IA gratuite te montre comment découper, fixer un style et produire plan par plan sans perdre ton univers.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 19 novembre 2026 à partir de trois billets de Studio Jadu : l'annonce des 3 millions d'abonnés (18 novembre), la première de The Sentinels (30 octobre) et le texte de Masoud Loghmani sur AIDA (20 août), lus le 19 novembre.",
        "Toutes les informations viennent du studio lui-même. Le nombre d'abonnés et la répartition du travail entre artistes et IA n'ont pas été vérifiés de façon indépendante.",
      ],
      teste: ["La lecture des trois billets de Studio Jadu"],
      nonTeste: ["L'outil AIDA", "Le Pioneer Program"],
      sources: [
        { label: "Studio Jadu, 3 million subscribers and counting, 18/11/2026", href: JADU_3M },
        { label: "Studio Jadu, Studio Jadu Debuts The Sentinels, 30/10/2026", href: JADU_SENT },
        { label: "Studio Jadu, What we've been building at Studio Jadu (Masoud Loghmani), 20/08/2026", href: JADU_AIDA },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-19 -->
