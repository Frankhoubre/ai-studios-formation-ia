import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-26";
const IMG = "/images/articles/chatgpt-chat-work-limites-partagees";
const TC = "https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/";
const AIDE = "https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits";
const FORUM = "https://community.openai.com/t/feedback-please-reconsider-merging-the-chat-and-work-tabs-or-add-a-toggle/1417767";
const TIBO = "https://x.com/thsottiaux/status/2125284868414394550";

export const chatgptChatWorkLimitesPartagees: Article = {
  title: "ChatGPT : Chat et Work partagent un seul quota",
  slug: "chatgpt-chat-work-limites-partagees",
  description:
    "Dès décembre, Chat, Work et Codex piochent dans la même réserve d'usage sur ChatGPT Plus, Pro et Business. Ce qui change et comment ne pas tomber à sec.",
  excerpt:
    "OpenAI fusionne Chat et Work dans ChatGPT et met tout sur un seul compteur, mesuré en tokens, à partir de décembre. Seul Instant reste illimité. Qui risque d'atteindre la limite plus vite, et comment organiser ton travail créatif.",
  category: "workflow-creatif",
  tags: ["Actualités IA", "chatgpt", "openai", "abonnement", "limites", "workflow"],
  date: "2026-11-26",
  updatedAt: "2026-11-26",
  news: true,
  publishedTime: "11:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/chatgpt-chat-work-limites-partagees.webp",
  imageAlt:
    "Une motion designer aux cheveux courts, le menton dans la main, regarde sur son ordinateur portable une jauge presque pleine, un second écran avec une timeline de montage, un storyboard et des post-it au mur de son petit studio",
  keywords: ["chatgpt limite usage", "chatgpt chat work fusion", "chatgpt quota partagé", "chatgpt codex limite décembre", "chatgpt plus limite"],
  relatedSlugs: ["script-video-chatgpt", "chatgpt-images-2-6-gif", "chatgpt-photo-prompts"],
  faq: [
    {
      question: "Qu'est-ce qui change dans les limites de ChatGPT ?",
      answer:
        "À partir de décembre, sur les offres Plus, Pro et Business, ChatGPT et Codex partagent une seule réserve d'usage, d'après la page d'aide d'OpenAI. Chat et Work utilisent le même compteur.",
    },
    {
      question: "Le modèle Instant compte-t-il dans la limite ?",
      answer:
        "Non. OpenAI indique que les conversations avec Instant ne puisent pas dans la réserve, et TechCrunch précise qu'on peut continuer à l'utiliser une fois la limite atteinte.",
    },
    {
      question: "Comment l'usage est-il mesuré ?",
      answer:
        "En tokens, les unités de texte que le modèle lit et produit. Les modèles plus avancés et les tâches complexes en consomment davantage, selon la page d'aide d'OpenAI.",
    },
    {
      question: "Où voir ce qu'il me reste ?",
      answer:
        "Dans Réglages, puis Usage : ChatGPT y affiche l'usage restant combiné et l'heure de remise à zéro, d'après OpenAI.",
    },
    {
      question: "Que faire si j'atteins la limite ?",
      answer:
        "Attendre la remise à zéro, passer à une offre supérieure ou acheter des crédits pour les fonctions éligibles, selon OpenAI. Instant reste disponible en attendant.",
    },
    {
      question: "Les utilisateurs gratuits sont-ils concernés ?",
      answer:
        "La page d'aide parle uniquement des offres Plus, Pro et Business. Rien n'est annoncé pour les comptes gratuits.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Si tu paies ChatGPT pour écrire tes scripts, tes prompts d'images ou tes briefs, un détail change en décembre : il n'y aura plus qu'**un seul compteur**. Chat, Work et Codex vont piocher dans la même réserve. OpenAI dit que la plupart des abonnés ne verront pas la différence, mais que **les plus gros utilisateurs** risquent d'atteindre la limite plus vite.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [l'article de Jagmeet Singh pour TechCrunch](" + TC + "), publié le 25 novembre 2026, et sur [la page d'aide d'OpenAI sur les limites de ChatGPT et Codex](" + AIDE + "), lus le 26 novembre. Je n'ai pas encore la nouvelle interface sur mon compte, donc je ne l'ai pas testée.",
    },
    { type: "h2", id: "nouveaute", text: "Ce qui change" },
    {
      type: "screenshot",
      src: `${IMG}-techcrunch.webp`,
      alt: "Article de TechCrunch du 25 novembre 2026 signé Jagmeet Singh : OpenAI prévient que les plus gros utilisateurs de ChatGPT pourraient atteindre les limites plus tôt avec la fusion de Chat et Work",
      caption: "L'article de TechCrunch, capturé le 26 novembre 2026.",
      source: TC,
      capturedAt: CAPTURE,
      width: 730,
      height: 582,
    },
    {
      type: "p",
      text: "OpenAI rapproche les deux espaces de ChatGPT : **Chat**, pour la conversation, et **Work**, pour les tâches plus longues d'agent. Le déploiement a commencé pour un petit groupe d'abonnés Pro, a annoncé le responsable produit Thibault Sottiaux [dans une publication sur X](" + TIBO + "), selon TechCrunch.",
    },
    {
      type: "p",
      text: "Côté limites, la page d'aide est claire : sur les offres **Plus, Pro et Business**, ChatGPT et Codex partageront **une seule réserve d'usage** à partir de décembre. Elle sera mesurée en **tokens**, et les modèles avancés comme les tâches complexes en consommeront plus. Une exception : **Instant** ne compte pas.",
    },
    {
      type: "screenshot",
      src: `${IMG}-compteur.webp`,
      alt: "Extrait de TechCrunch : avec le nouveau système, Chat et Work partagent un seul compteur d'usage dans ChatGPT, d'après un porte-parole d'OpenAI ; les conversations avec le modèle Instant restent illimitées et ne comptent pas ; OpenAI prévoit d'étendre les limites partagées en décembre",
      caption: "Le fonctionnement du compteur, expliqué à TechCrunch par OpenAI, capturé le 26 novembre 2026.",
      source: TC,
      capturedAt: CAPTURE,
      width: 670,
      height: 260,
    },
    { type: "h2", id: "pour-toi", text: "Pourquoi ça compte pour un créatif" },
    {
      type: "p",
      text: "Prends une journée normale : tu écris un [script vidéo avec ChatGPT](/blog/script-video-chatgpt), tu fais quelques [images ou GIF](/blog/chatgpt-images-2-6-gif), puis tu lances une tâche longue dans Work pour préparer un dossier client. Aujourd'hui, ces usages vivent sur des quotas séparés. Demain, **ils se partagent la même réserve**. Une grosse tâche d'agent le matin peut te laisser moins de marge pour réécrire ton script l'après-midi.",
    },
    {
      type: "p",
      text: "Les abonnés qui ont réagi sur le forum d'OpenAI ne s'y trompent pas. L'un d'eux explique qu'avoir deux espaces séparés lui permettait de ranger les discussions rapides d'un côté et les projets longs de l'autre, et que le compteur commun rend la gestion de ses ressources plus difficile.",
    },
    {
      type: "screenshot",
      src: `${IMG}-forum.webp`,
      alt: "Message sur le forum des développeurs d'OpenAI du 18 novembre 2026 : un abonné demande de revenir sur la fusion des onglets Chat et Work ou d'ajouter un réglage, car garder les deux séparés l'aidait à organiser son travail, et fusionner les limites rend plus difficile la gestion de ses ressources",
      caption: "Une demande d'abonné sur le forum d'OpenAI, capturée le 26 novembre 2026.",
      source: FORUM,
      capturedAt: CAPTURE,
      width: 770,
      height: 570,
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : partagé, Chat, Work et Codex sur une seule réserve mesurée en tokens ; hors compteur, le modèle Instant qui reste illimité ; à la limite, attendre la remise à zéro, changer d'offre ou acheter des crédits, solde visible dans Réglages, Usage",
      caption: "Le nouveau compteur de ChatGPT, d'après l'aide OpenAI et TechCrunch. Schéma AI Studios.",
      source: AIDE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 654,
    },
    { type: "h2", id: "a-faire", text: "Ce que je ferais maintenant" },
    {
      type: "ul",
      items: [
        "**Regarde ton solde** dans Réglages, puis Usage, dès que l'écran apparaît. Tu sauras vite si tu fais partie des gros consommateurs.",
        "**Passe les petites tâches sur Instant** : reformuler une légende, trouver dix titres, corriger une phrase. Elles ne toucheront pas ta réserve.",
        "**Garde les modèles avancés pour ce qui le mérite** : la structure d'un script, une analyse de brief, une tâche d'agent bien préparée.",
        "**Prépare tes tâches longues avant de les lancer.** Un brief clair évite de relancer trois fois une tâche Work qui consomme beaucoup.",
        "**Ne mets pas tout ton flux sur un seul outil.** Pour l'image ou la vidéo, des outils dédiés peuvent soulager ton quota ChatGPT.",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**La taille de la réserve.** OpenAI ne donne aucun chiffre par offre.",
        "**La date exacte.** La page d'aide dit seulement « à partir de décembre », avec quelques comptes servis plus tôt.",
        "**Le prix des crédits** pour continuer une fois la limite atteinte.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Sur le fond, un seul espace de travail est plus simple. Mais un compteur unique, sans chiffre public, c'est surtout plus difficile à prévoir. Si ChatGPT est au centre de ton travail créatif, prends l'habitude dès décembre de regarder ton usage comme tu regardes ton budget de rendu : avant d'en manquer.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Un workflow IA qui ne dépend pas d'un seul outil",
      text: "Ma formation IA gratuite te montre comment répartir ton travail créatif entre les bons outils, sans tout miser sur un abonnement.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 26 novembre 2026 à partir de l'article de Jagmeet Singh pour TechCrunch (25 novembre 2026) et de la page d'aide d'OpenAI sur les limites de ChatGPT et Codex, lus le 26 novembre.",
        "La nouvelle interface et le compteur partagé n'ont pas été testés : ils n'étaient pas encore disponibles sur notre compte.",
      ],
      teste: ["La lecture de l'article de TechCrunch, de la page d'aide d'OpenAI et du fil du forum d'OpenAI"],
      nonTeste: ["L'interface fusionnée Chat et Work", "L'écran Réglages, Usage"],
      sources: [
        { label: "TechCrunch, OpenAI says heavy ChatGPT users may hit limits sooner as it merges Chat and Work (Jagmeet Singh), 25/11/2026", href: TC },
        { label: "OpenAI, aide : Understanding ChatGPT and Codex usage limits", href: AIDE },
        { label: "Forum des développeurs OpenAI, demande sur la fusion des onglets Chat et Work", href: FORUM },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-26 -->
