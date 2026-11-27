import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-27";
const IMG = "/images/articles/made-by-humans-label-fait-par-humains";
const PG = "https://pressgazette.co.uk/news/press-gazette-is-worlds-first-verified-human-made-news-outlet/";
const MBH = "https://madebyhumans.press/";
const CERT = "https://madebyhumans.press/verify/2ab9aae9f082c27f6f76df6d5db1b15e668a0c4560c275d8b71eed94e6518e0f";

export const madeByHumansLabelFaitParHumains: Article = {
  title: "Made By Humans : un label « fait par des humains »",
  slug: "made-by-humans-label-fait-par-humains",
  description:
    "Press Gazette affiche un badge « fait par des humains » sur chaque article, vérifié par Made By Humans. Comment marche ce label et ce qu'il dit aux créatifs IA.",
  excerpt:
    "Le média britannique Press Gazette passe tous ses textes et photos au détecteur d'IA avant publication et les signe d'un certificat « human made ». Ce que fait l'outil, ses limites, et pourquoi la transparence devient un argument pour ceux qui créent avec l'IA.",
  category: "business-creatif",
  tags: ["Actualités IA", "made by humans", "transparence", "détection ia", "label", "presse"],
  date: "2026-11-27",
  updatedAt: "2026-11-27",
  news: true,
  publishedTime: "11:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/made-by-humans-label-fait-par-humains.webp",
  imageAlt:
    "Une jeune illustratrice aux cheveux bouclés regarde sur son ordinateur portable une page d'article floue avec un petit badge vert de validation, une tablette graphique, des croquis imprimés et une tasse de thé sur le bureau de son petit atelier",
  keywords: ["made by humans", "label fait par des humains", "détection contenu ia", "press gazette ia", "certificat contenu humain"],
  relatedSlugs: ["detecter-image-generee-ia", "video-ia-sans-filigrane", "deepfake-createur-droit"],
  faq: [
    {
      question: "Qu'est-ce que Made By Humans ?",
      answer:
        "Un outil de vérification éditoriale créé par Press Gazette et Flip-Pay. Il analyse textes, images, audio et vidéo avant publication pour repérer des signes d'IA, et délivre un certificat public aux contenus validés.",
    },
    {
      question: "Qui l'utilise ?",
      answer:
        "Press Gazette l'a déployé dans son système de publication et dit être le premier média vérifié « fait par des humains ». Plusieurs rédactions le testent, sans être nommées.",
    },
    {
      question: "Le détecteur peut-il se tromper ?",
      answer:
        "Oui. Le site de Made By Humans écrit lui-même qu'aucun système de détection n'est infaillible. L'outil signale un risque, la rédaction décide.",
    },
    {
      question: "L'IA est-elle interdite chez Press Gazette ?",
      answer:
        "Non. Son rédacteur en chef, Dominic Ponsford, dit que l'IA peut servir à accélérer la production, aider la recherche ou créer des infographies. Ce qu'il veut, c'est de la transparence pour le lecteur.",
    },
    {
      question: "Un créateur indépendant peut-il l'utiliser ?",
      answer:
        "Le service propose un compte gratuit, une extension WordPress, une API et un tableau de bord, d'après Press Gazette et le site de Made By Humans. Les tarifs détaillés sont sur le site.",
    },
    {
      question: "Je crée avec l'IA, je dois m'inquiéter ?",
      answer:
        "Pas si tu es clair sur ta méthode. Ce type de label vise le contenu trompeur. Dire ce qui est fait avec l'IA et ce qui est fait à la main devient un vrai argument auprès des clients.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le média britannique **Press Gazette** a trouvé une réponse simple aux contenus IA déguisés : il passe chaque texte et chaque photo au détecteur avant publication, et appose sur ses articles un badge **« human made »** lié à un certificat public. Il se dit le premier média au monde vérifié de façon indépendante comme **fait par des humains**.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [l'article de Dominic Ponsford pour Press Gazette](" + PG + "), publié le 24 novembre 2026, et sur [le site de Made By Humans](" + MBH + "), lus le 27 novembre. Je n'ai pas testé l'outil sur mes propres textes.",
    },
    { type: "h2", id: "nouveaute", text: "Ce que fait Made By Humans" },
    {
      type: "p",
      text: "L'outil s'installe dans le système de publication de la rédaction. Il analyse **textes, images, audio et vidéo** avec plusieurs technologies de détection d'IA. Si un contenu présente des signes de manipulation, il faut une **dérogation éditoriale** pour le publier. Chaque vérification laisse une trace consultable après coup.",
    },
    {
      type: "screenshot",
      src: `${IMG}-site.webp`,
      alt: "Page d'accueil de Made By Humans : détecter et empêcher les contenus IA trompeurs avant publication, premier système d'accréditation indépendant pour le journalisme fait par des humains, un projet de Press Gazette et Flip-Pay qui signale les signes d'IA dans le texte, l'image, la vidéo et l'audio sans remplacer le jugement éditorial",
      caption: "Le site officiel de Made By Humans, capturé le 27 novembre 2026.",
      source: MBH,
      capturedAt: CAPTURE,
      width: 1280,
      height: 650,
    },
    {
      type: "p",
      text: "Le projet est une coentreprise à parts égales entre Press Gazette et **Flip-Pay**, la société qui gère son paywall. Selon Press Gazette, plusieurs rédactions dans le monde le testent déjà. On peut l'intégrer par API, par une extension WordPress ou passer par un tableau de bord, et d'autres intégrations sont prévues début 2027.",
    },
    {
      type: "screenshot",
      src: `${IMG}-certificat.webp`,
      alt: "Certificat de vérification de texte délivré par Made By Humans pour l'article de Press Gazette, verdict passé à l'analyse de texte IA, vérifié le 25 novembre 2026, enregistré le 24 novembre 2026, avec la précision que le certificat couvre uniquement les mots de l'article, les images étant vérifiées séparément",
      caption: "Le certificat public de l'article de Press Gazette, capturé le 27 novembre 2026.",
      source: CERT,
      capturedAt: CAPTURE,
      width: 640,
      height: 696,
    },
    { type: "h2", id: "pourquoi", text: "Pourquoi un média en arrive là" },
    {
      type: "p",
      text: "Press Gazette dit avoir repéré **plus de 1 000 articles** publiés par des médias grand public qui citaient des « experts » eux-mêmes générés par IA. Pour son rédacteur en chef, deux internets sont en train de se former : un internet créé par l'IA, rempli de contenus faits pour tromper, et un internet authentique, écrit par des humains.",
    },
    {
      type: "p",
      text: "Il ne rejette pas l'IA pour autant. Selon lui, elle peut accélérer la production, aider la recherche et même servir à créer des infographies. Ce qu'il réclame, c'est que **le lecteur sache** ce qu'il lit. Et il note qu'il suffit d'un pigiste peu scrupuleux pour qu'un média publie un faux sans le savoir.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : avant publication, un contrôle dans le CMS des textes, photos, audio et vidéo avec dérogation éditoriale si un contenu est suspect ; après, un badge human made et un certificat public daté ; la limite, aucun détecteur n'est infaillible et l'outil aide la décision sans remplacer la rédaction",
      caption: "Le fonctionnement de Made By Humans, d'après Press Gazette et le site de l'outil. Schéma AI Studios.",
      source: PG,
      capturedAt: CAPTURE,
      width: 1600,
      height: 622,
    },
    { type: "h2", id: "pour-toi", text: "Ce que ça dit aux créatifs qui utilisent l'IA" },
    {
      type: "p",
      text: "Si tu crées des visuels, des vidéos ou des textes avec l'IA, ce label n'est pas contre toi. Il vise le contenu **trompeur** : la fausse photo, le faux expert, le texte généré présenté comme un témoignage. Le vrai sujet, c'est la transparence. Et c'est là que tu peux te distinguer.",
    },
    {
      type: "p",
      text: "Côté détection, garde la tête froide. Le site de Made By Humans l'écrit lui-même : aucun détecteur n'est infaillible. Les indices que j'explique dans [mon guide pour détecter une image générée](/blog/detecter-image-generee-ia) restent utiles, mais ni un œil exercé ni un logiciel ne donnent une certitude. Et pour tes vidéos, je te rappelle pourquoi [retirer un filigrane IA](/blog/video-ia-sans-filigrane) n'est jamais une bonne idée.",
    },
    { type: "h2", id: "a-faire", text: "Ce que je ferais maintenant" },
    {
      type: "ul",
      items: [
        "**Écris ta méthode noir sur blanc.** Une ligne en bas de ton portfolio ou de ton devis : ce que fait l'IA, ce que tu fais toi. C'est déjà un label.",
        "**Garde tes fichiers de travail.** Croquis, versions, prompts, montages : c'est ta preuve si on te demande comment une image a été faite.",
        "**Ne livre jamais une image IA comme une photo réelle** à un média ou à une marque. C'est exactement ce que ces outils vont repérer, et ta réputation avec.",
        "**Pose la question à tes clients presse.** De plus en plus de rédactions ont des règles sur l'IA. Mieux vaut les connaître avant la livraison.",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Le taux d'erreur réel** du détecteur sur des textes ou des images retouchés, aucun chiffre n'est publié dans l'article.",
        "**Quelles rédactions** testent l'outil : elles ne sont pas nommées.",
        "**Le prix pour une rédaction**, au-delà de l'offre gratuite affichée sur le site.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Je préfère un badge qui dit « voici comment on a vérifié » à un discours qui dit « l'IA, c'est mal ». Le premier traite le lecteur en adulte. Pour nous qui créons avec l'IA, la leçon est la même : ce n'est pas l'outil qui pose problème, c'est le mensonge sur l'outil. Sois clair sur ta méthode, et ça deviendra un argument plutôt qu'un risque.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Créer avec l'IA, sans rien cacher",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à ton travail créatif et en parler clairement à tes clients.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 27 novembre 2026 à partir de l'article de Dominic Ponsford pour Press Gazette (24 novembre 2026, mis à jour le 25) et du site de Made By Humans, lus le 27 novembre.",
        "L'outil n'a pas été testé sur nos contenus. Le site de Press Gazette affichait une fenêtre de cookies qui a empêché sa capture : les captures viennent du site de Made By Humans.",
      ],
      teste: ["La lecture de l'article de Press Gazette, du site de Made By Humans et du certificat public de l'article"],
      nonTeste: ["La détection sur nos propres textes et images", "L'extension WordPress et l'API"],
      sources: [
        { label: "Press Gazette, Press Gazette is 'world's first' verified human-made news outlet (Dominic Ponsford), 24/11/2026", href: PG },
        { label: "Made By Humans, site officiel", href: MBH },
        { label: "Made By Humans, certificat de vérification de l'article de Press Gazette", href: CERT },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-27 -->
