import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-25";
const IMG = "/images/articles/gemini-historique-sans-entrainement-ia";
const NINE = "https://9to5google.com/2026/11/24/gemini-history-ai-training/";
const AIDE = "https://support.google.com/gemini/answer/13594961?hl=en";
const ACTIVITE = "https://myactivity.google.com/product/gemini";

export const geminiHistoriqueSansEntrainementIa: Article = {
  title: "Gemini : garder ton historique sans entraîner l'IA",
  slug: "gemini-historique-sans-entrainement-ia",
  description:
    "Gemini sépare enfin l'historique des chats et l'entraînement de ses modèles. Où trouver le réglage, ce qu'il coupe et ce qu'il ne coupe pas.",
  excerpt:
    "Google déploie un nouveau menu Gemini History : tu peux garder tes conversations tout en refusant qu'elles servent à entraîner l'IA. La case est cochée par défaut. Où la trouver, ce qu'elle change pour tes fichiers clients, et ses limites.",
  category: "actualites-ia",
  tags: ["Actualités IA", "gemini", "google", "confidentialité", "données", "clients"],
  date: "2026-11-25",
  updatedAt: "2026-11-25",
  news: true,
  publishedTime: "11:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/gemini-historique-sans-entrainement-ia.webp",
  imageAlt:
    "Une illustratrice en pull beige, la main sous le menton, réfléchit devant son ordinateur portable dans un petit atelier lumineux, une tablette graphique avec un croquis, des planches de tendances et des nuanciers au mur",
  keywords: ["gemini entraînement ia désactiver", "gemini historique", "gemini history réglage", "gemini confidentialité", "données gemini entraînement"],
  relatedSlugs: ["gemini-images-personnalisees-donnees-google", "gemini-mac-agent-applications-creatifs", "etsy-ia-entrainement-creations-vendeurs"],
  faq: [
    {
      question: "Comment empêcher Gemini d'entraîner l'IA avec mes conversations ?",
      answer:
        "Sur gemini.google.com, ouvre les paramètres (la roue dentée), puis Gemini History tout en bas. Sous « Help train generative AI models with », décoche « Chat content including text & attachments ». Ton historique reste conservé si le réglage History est activé.",
    },
    {
      question: "Le réglage est-il activé par défaut ?",
      answer:
        "Oui. D'après 9to5Google, la case qui autorise l'entraînement sur le contenu des chats est cochée par défaut. Si ton ancien réglage Keep Activity était désactivé, les deux nouveaux réglages le sont aussi.",
    },
    {
      question: "Mes fichiers joints servent-ils à entraîner Gemini ?",
      answer:
        "Si la case est cochée, oui : la page d'aide de Google cite ce que tu partages avec Gemini, comme les photos, fichiers, pièces jointes audio ou vidéo et les écrans que tu lui montres.",
    },
    {
      question: "Si je décoche la case, Google ne lit plus mes chats ?",
      answer:
        "Non. Google indique que tes futurs chats ne serviront plus à entraîner ses modèles, sauf si tu envoies un avis, mais qu'ils peuvent encore être relus pour améliorer d'autres services et protéger les utilisateurs. Les chats relus sont gardés jusqu'à 3 ans.",
    },
    {
      question: "Et l'audio ou les sessions Gemini Live ?",
      answer:
        "C'est une case séparée, « Audio and Gemini Live videos & screenshares », qui reste à activer volontairement d'après 9to5Google.",
    },
    {
      question: "Le réglage est-il disponible en France ?",
      answer:
        "9to5Google parle d'un déploiement large depuis le 24 novembre 2026, sans liste de pays. Vérifie directement dans ton compte : le menu Gemini History apparaît en bas des paramètres quand il est actif.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Jusqu'ici, avec Gemini, il fallait choisir : garder l'historique de tes conversations et accepter qu'elles servent à entraîner l'IA de Google, ou tout couper. Depuis cette semaine, les deux sont **séparés**. Tu peux garder ton historique et refuser l'entraînement. Mais la case est **cochée par défaut**.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [l'article d'Abner Li pour 9to5Google](" + NINE + "), mis à jour le 24 novembre 2026, et sur [la page d'aide de Google consacrée à la confidentialité de Gemini](" + AIDE + "), lus le 25 novembre. Je n'ai pas pu vérifier si le menu est déjà visible sur tous les comptes français.",
    },
    { type: "h2", id: "nouveaute", text: "Ce qui change" },
    {
      type: "screenshot",
      src: `${IMG}-9to5google.webp`,
      alt: "Article de 9to5Google du 24 novembre 2026 signé Abner Li : un nouveau réglage de Gemini permet de garder l'historique des chats tout en coupant l'entraînement de l'IA",
      caption: "L'article de 9to5Google, capturé le 25 novembre 2026.",
      source: NINE,
      capturedAt: CAPTURE,
      width: 715,
      height: 565,
    },
    {
      type: "p",
      text: "Avant, un seul réglage, **Keep Activity**, décidait à la fois combien de temps tes chats étaient gardés et s'ils servaient à entraîner les modèles. Google le coupe en deux. Le réglage **History** gère la conservation de tes conversations. Une case à part décide si leur contenu, **texte et fichiers joints**, sert à entraîner l'IA générative.",
    },
    {
      type: "p",
      text: "Selon 9to5Google, le déploiement est large depuis le 24 novembre. Sur gemini.google.com, ouvre les paramètres (la roue dentée) : un nouvel élément **Gemini History** apparaît tout en bas. Il ouvre [la page d'activité de Gemini](" + ACTIVITE + ").",
    },
    {
      type: "screenshot",
      src: `${IMG}-reglage.webp`,
      alt: "Capture publiée par 9to5Google du menu Gemini History : le réglage History activé, l'option de suppression automatique, et sous Help train generative AI models with, la case Chat content including text & attachments cochée et la case Audio and Gemini Live videos & screenshares décochée",
      caption: "Le menu Gemini History, dans l'article de 9to5Google, capturé le 25 novembre 2026.",
      source: NINE,
      capturedAt: CAPTURE,
      width: 705,
      height: 697,
    },
    {
      type: "p",
      text: "Sous « Help train generative AI models with », tu trouves deux cases. La première, **Chat content including text & attachments**, est cochée par défaut. La seconde, pour l'audio et les sessions Gemini Live, reste à activer volontairement. Si ton ancien réglage Keep Activity était coupé, les deux nouveaux le sont aussi.",
    },
    { type: "h2", id: "pour-toi", text: "Pourquoi ça compte pour un créatif" },
    {
      type: "p",
      text: "Pense à ce que tu donnes à Gemini dans une semaine normale : un brief client, un script en cours, des croquis à décrire, une photo de produit à retravailler. La page d'aide de Google est claire : si la case est cochée, l'entraînement porte sur **ce que tu dis et ce que tu partages**, y compris les photos, fichiers et pièces jointes.",
    },
    {
      type: "screenshot",
      src: `${IMG}-aide-google.webp`,
      alt: "Page d'aide Gemini de Google : si le réglage est activé, Google utilise le contenu de tes futurs chats pour entraîner ses modèles, dont tes prompts, les photos, fichiers et pièces jointes, les réponses et ta localisation ; s'il est désactivé, tes futurs chats ne servent plus à l'entraînement sauf avis envoyé, mais peuvent être relus et gardés jusqu'à 3 ans",
      caption: "La page d'aide de Google sur la confidentialité de Gemini, capturée le 25 novembre 2026.",
      source: AIDE,
      capturedAt: CAPTURE,
      width: 720,
      height: 820,
    },
    {
      type: "p",
      text: "Pour un projet sous accord de confidentialité, c'est le minimum à décocher. Et c'est une bonne nouvelle : avant, refuser l'entraînement voulait dire perdre l'historique, donc tes anciennes conversations de travail. Ce n'est plus le cas.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : historique, tu gardes tes conversations, supprimées par défaut après 18 mois ; entraînement, une case séparée décide si le texte et les fichiers joints servent à entraîner les modèles, cochée par défaut ; à savoir, même décochée, Google peut faire relire tes chats et les garder jusqu'à 3 ans",
      caption: "Les deux réglages de Gemini History, d'après l'aide Google et 9to5Google. Schéma AI Studios.",
      source: AIDE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 654,
    },
    { type: "h2", id: "limites", text: "Ce que la case ne coupe pas" },
    {
      type: "ul",
      items: [
        "**La relecture humaine.** Même décochée, Google indique que tes chats peuvent être relus pour améliorer ses services et protéger les utilisateurs. Les chats relus sont gardés **jusqu'à 3 ans**, même si tu les supprimes.",
        "**Les avis.** Si tu envoies un avis (pouce levé ou baissé), la conversation concernée peut servir à l'entraînement.",
        "**Les autres services Google.** Le réglage ne touche que l'historique Gemini, pas les données d'autres produits.",
        "**Le passé.** La page d'aide parle de tes « futurs » chats. Ce qui a déjà été relu reste conservé selon les règles de Google.",
      ],
    },
    {
      type: "p",
      text: "J'avais déjà soulevé la question des données personnelles avec [les images personnalisées de Gemini](/blog/gemini-images-personnalisees-donnees-google), et elle devient plus sensible avec [l'agent Gemini qui pilote ton Mac](/blog/gemini-mac-agent-applications-creatifs). Le débat dépasse Google : Etsy l'a montré avec [ses nouvelles conditions sur l'entraînement](/blog/etsy-ia-entrainement-creations-vendeurs).",
    },
    { type: "h2", id: "a-faire", text: "Ce que je ferais maintenant" },
    {
      type: "ul",
      items: [
        "**Ouvre Gemini History** dans les paramètres et regarde l'état de la case « Chat content including text & attachments ».",
        "**Décoche-la sur ton compte pro**, ou sur tout compte qui touche à des projets clients.",
        "**Garde l'historique** si tu reprends souvent d'anciennes conversations, maintenant que c'est possible sans entraînement.",
        "**Ne partage pas l'inutile.** Même avec la case décochée, évite d'envoyer un contrat complet ou des fichiers sous accord si un extrait suffit.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "C'est un vrai progrès, et il était attendu : séparer la mémoire de l'entraînement, c'est ce que tout outil pro devrait proposer. Mais une case cochée par défaut, c'est un choix fait à ta place. Prends deux minutes pour le refaire toi-même.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Utilise l'IA sans lâcher tes données",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à ton travail créatif, en gardant la main sur ce que tu partages.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 25 novembre 2026 à partir de l'article d'Abner Li pour 9to5Google (publié le 16 novembre, mis à jour le 24 novembre 2026) et de la page d'aide de Google sur la confidentialité de Gemini, lus le 25 novembre.",
        "Le menu n'a pas été testé sur un compte français. Les noms des réglages sont ceux de l'interface anglaise.",
      ],
      teste: ["La lecture de l'article de 9to5Google et de la page d'aide de Google"],
      nonTeste: ["Le menu Gemini History sur un compte en France", "La version française des intitulés"],
      sources: [
        { label: "9to5Google, New Gemini setting lets you keep chat history, but turn off AI training (Abner Li), 24/11/2026", href: NINE },
        { label: "Google, aide Gemini : confidentialité des applications Gemini", href: AIDE },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-25 -->
