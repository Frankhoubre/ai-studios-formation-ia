import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-17";
const IMG = "/images/articles/phota-labs-photos-ia-ressemblance";
const TC = "https://techcrunch.com/2026/11/12/phota-labs-uses-ai-to-turn-everyday-photos-into-professional-looking-shots/";
const PHOTA = "https://www.photalabs.com/";

export const photaLabsPhotosIaRessemblance: Article = {
  title: "Phota Labs : des photos IA qui gardent ton vrai visage",
  slug: "phota-labs-photos-ia-ressemblance",
  description:
    "Phota Labs, fondé par deux anciens d'Adobe, retouche tes photos par IA sans changer ton visage. Ce que fait l'appli, ce qu'elle promet, et ses limites.",
  excerpt:
    "Phota Labs lance une appli iOS qui transforme tes photos du quotidien en images de pro, en gardant ta ressemblance. Derrière, une « couche de ressemblance » posée sur Nano Banana ou GPT Image. Ce que ça change pour garder un visage cohérent.",
  category: "actualites-ia",
  tags: ["Actualités IA", "phota labs", "ressemblance", "photo ia", "personnage cohérent", "retouche photo"],
  date: "2026-11-17",
  updatedAt: "2026-11-17",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/phota-labs-photos-ia-ressemblance.webp",
  imageAlt:
    "Une jeune femme souriante sur une terrasse de café ensoleillée tient son téléphone vers l'objectif, l'écran montre deux versions d'une même photo d'elle avec une amie, l'une floue et large, l'autre plus nette et mieux cadrée",
  keywords: ["phota labs", "photo ia ressemblance", "garder son visage ia", "retouche photo ia iphone", "identité image ia"],
  relatedSlugs: ["personnage-coherent-ia", "lora-entrainer-style-visage", "portraits-ia-photo-profil-linkedin"],
  faq: [
    {
      question: "Qu'est-ce que Phota Labs ?",
      answer:
        "Une startup californienne fondée par Cecilia Zhang et Zach Xia, deux anciens d'Adobe qui travaillaient sur la photo computationnelle (Lightroom, Photoshop, Project Indigo). Elle a lancé une appli iOS de retouche photo par IA, présentée par TechCrunch le 12 novembre 2026.",
    },
    {
      question: "Que fait l'appli Phota ?",
      answer:
        "Elle parcourt ta pellicule et propose des versions plus réussies de tes photos : un portrait plus serré à partir d'une photo de groupe, un selfie transformé en photo classique, des styles plus ou moins marqués. Le tout en gardant ton visage, selon l'entreprise.",
    },
    {
      question: "Phota est-elle gratuite ?",
      answer:
        "D'après TechCrunch, l'appli est lancée gratuitement, et un modèle freemium sera étudié plus tard. Les offres entreprise sont sur devis selon le site de Phota Labs.",
    },
    {
      question: "Phota est-elle disponible sur Android ?",
      answer:
        "Pas encore. L'appli est sur iOS, et une version Android est prévue, sans date annoncée.",
    },
    {
      question: "Les images modifiées sont-elles signalées comme IA ?",
      answer:
        "Oui, selon TechCrunch : les images retouchées portent un filigrane invisible qui les identifie comme modifiées par IA quand tu les partages sur les réseaux.",
    },
    {
      question: "Quelle différence avec un LoRA entraîné sur mon visage ?",
      answer:
        "Selon Phota, un LoRA demande 20 à 30 images choisies et reste lié à un seul modèle. Sa « couche de ressemblance » s'entraîne avec 5 photos ou plus en 1 à 3 minutes et se réutilise sur plusieurs modèles. Ce sont les chiffres de l'entreprise, pas un test indépendant.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as déjà demandé à une IA d'améliorer une photo de toi, et elle t'a rendu quelqu'un qui te ressemble… presque. Le nez un peu différent, les yeux plus grands, un sourire qui n'est pas le tien. C'est exactement le problème que **Phota Labs** veut régler.",
    },
    {
      type: "p",
      text: "La startup a lancé une appli iOS qui transforme tes photos du quotidien en images de pro **sans toucher à ton visage**. [TechCrunch](" + TC + ") l'a présentée le 12 novembre 2026 (Aisha Malik). J'ai lu l'article et [le site de Phota Labs](" + PHOTA + ") le 17 novembre. Je n'ai pas testé l'appli.",
    },
    { type: "h2", id: "annonce", text: "Ce que fait l'appli" },
    {
      type: "screenshot",
      src: `${IMG}-techcrunch.webp`,
      alt: "Article de TechCrunch du 12 novembre 2026 par Aisha Malik : Phota Labs uses AI to turn everyday photos into professional-looking shots, avec une photo de couple devant des illuminations, avant et après",
      caption: "L'article de TechCrunch du 12 novembre.",
      source: TC,
      capturedAt: CAPTURE,
      width: 1280,
      height: 388,
    },
    {
      type: "p",
      text: "D'après TechCrunch, Phota se présente comme un **assistant photo personnel** : il parcourt ta pellicule et te propose des versions plus réussies de ce que tu as déjà pris. Quelques exemples donnés dans l'article :",
    },
    {
      type: "ul",
      items: [
        "**Une photo de groupe en grand angle** recadrée en portrait plus serré.",
        "**Un selfie** transformé en photo classique, comme si quelqu'un d'autre l'avait prise.",
        "**Des styles au choix**, du plus discret (même objectif, même cadrage) au plus marqué (fish-eye, autre angle, autre perspective).",
      ],
    },
    {
      type: "p",
      text: "Les fondateurs, **Cecilia Zhang** et **Zach Xia**, se sont rencontrés chez Adobe, où ils travaillaient sur la photo computationnelle (Lightroom, Photoshop, Project Indigo). Ils ont levé 5,6 millions de dollars en amorçage, menés par a16z. L'appli est **gratuite au lancement**, sur iOS seulement, et les images retouchées portent un **filigrane invisible** qui les signale comme modifiées par IA.",
    },
    {
      type: "screenshot",
      src: `${IMG}-photalabs.webp`,
      alt: "Page d'accueil de Phota Labs : AI that keeps you looking like you, Phota for iOS disponible, trois produits Phota app, Phota Studio et Phota API, avec des photos de personnes en randonnée, devant un feu d'artifice et avec un chat",
      caption: "La page d'accueil de Phota Labs.",
      source: PHOTA,
      capturedAt: CAPTURE,
      width: 1280,
      height: 880,
    },
    { type: "h2", id: "ressemblance", text: "La vraie nouveauté : une couche de ressemblance" },
    {
      type: "p",
      text: "L'appli grand public n'est que la partie visible. Sur son site, Phota Labs propose aussi **Phota Studio** (génération et retouche dans le navigateur) et une **API**. L'idée commune : une « couche de ressemblance » posée **par-dessus des modèles existants**. Le site cite OpenAI, Nano Banana, Qwen, Ideogram et FLUX.",
    },
    {
      type: "p",
      text: "Phota publie un tableau qui compare son approche aux deux méthodes que tu connais sûrement : joindre une photo de référence à chaque demande, ou entraîner un [LoRA sur ton visage](/blog/lora-entrainer-style-visage). Ses arguments : **5 photos ou plus** suffisent, l'entraînement prend **1 à 3 minutes**, et l'identité reste stable d'un modèle à l'autre. Ce sont les chiffres de l'entreprise, pas un test indépendant.",
    },
    {
      type: "screenshot",
      src: `${IMG}-comparaison.webp`,
      alt: "Tableau comparatif de Phota Labs : plusieurs sujets dans une même image, coût total avec un entraînement de 1 à 3 minutes par identité, persistance d'un modèle par sujet stable entre scènes et modèles, flexibilité avec 5 photos ou plus contre 20 à 30 images pour un LoRA",
      caption: "Le comparatif publié par Phota Labs, à lire comme un argument commercial.",
      source: PHOTA,
      capturedAt: CAPTURE,
      width: 1240,
      height: 530,
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois approches pour garder un visage dans une image IA : une photo de référence à chaque demande, un LoRA entraîné sur 20 à 30 images et lié à un modèle, ou la couche de ressemblance de Phota avec 5 photos et 1 à 3 minutes d'entraînement",
      caption: "Trois façons de garder un visage, d'après les chiffres de Phota. Schéma AI Studios.",
      source: PHOTA,
      capturedAt: CAPTURE,
      width: 1600,
      height: 622,
    },
    { type: "h2", id: "pour-toi", text: "Ce que ça change pour toi" },
    {
      type: "p",
      text: "Si tu fais des portraits, des visuels de marque ou des séries avec un même personnage, la ressemblance est ton premier problème. Ce que Phota montre, c'est que le marché se déplace : on ne cherche plus seulement **le meilleur modèle**, mais **la meilleure façon de garder une identité** à travers tous les modèles.",
    },
    {
      type: "ul",
      items: [
        "**Pour tes photos perso**, l'appli peut valoir le test : elle est gratuite et part de tes propres images.",
        "**Pour un client**, reste prudent. Le visage d'une personne réelle demande son accord, quelle que soit la qualité du rendu. Le filigrane IA est un bon point, mais ne remplace pas ce consentement.",
        "**Pour un personnage récurrent**, compare avec ta méthode actuelle. Si tu travailles déjà avec des références, relis mon guide sur [le personnage cohérent en IA](/blog/personnage-coherent-ia) : le même test (dix images, mêmes critères) te dira si une couche comme celle de Phota t'apporte quelque chose.",
        "**Pour un portrait pro**, mes conseils sur [les photos de profil LinkedIn en IA](/blog/portraits-ia-photo-profil-linkedin) restent valables : une image qui ne te ressemble pas te dessert plus qu'une photo moyenne.",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Le prix à terme.** L'appli est gratuite au lancement, un freemium est « envisagé » plus tard.",
        "**Le prix de Phota Studio et de l'API.** Le site parle d'offres entreprise sur devis, sans grille publique.",
        "**La disponibilité en France.** TechCrunch ne précise pas les pays, et je n'ai pas vérifié l'App Store français.",
        "**La qualité réelle.** Les exemples viennent de Phota. Le chiffre « préféré 9 fois sur 10 » face à Nano Banana 2 ou GPT Image 2 est un test de l'entreprise.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "J'aime l'angle : pas un générateur de plus, mais un outil qui s'occupe de la partie que tous les générateurs ratent, ton visage. Reste à voir si la promesse tient sur des photos ratées, floues, mal éclairées, c'est-à-dire la vraie vie. Si tu as un iPhone, fais le test avec une photo de groupe que tu n'as jamais osé poster, et regarde surtout les yeux et le sourire.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à garder un personnage cohérent",
      text: "Ma formation IA gratuite te montre comment construire des images et des vidéos où ton personnage reste le même, d'une scène à l'autre.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 17 novembre 2026 à partir de l'article de TechCrunch du 12 novembre (Aisha Malik) et de la page d'accueil de Phota Labs, lus le 17 novembre.",
        "Les chiffres de performance (5 photos, 1 à 3 minutes, préférence 9 fois sur 10) viennent du site de l'entreprise et n'ont pas été vérifiés.",
      ],
      teste: ["La lecture de l'article de TechCrunch et du site de Phota Labs"],
      nonTeste: ["L'appli Phota sur iPhone", "Phota Studio et l'API", "Le filigrane invisible"],
      sources: [
        { label: "TechCrunch, Phota Labs uses AI to turn everyday photos into professional-looking shots, 12/11/2026", href: TC },
        { label: "Phota Labs, site officiel", href: PHOTA },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-17 -->
