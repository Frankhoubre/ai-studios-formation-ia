import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-12";
const IMG = "/images/articles/elevenlabs-scribe-v3-sous-titres-video";
const EL = "https://elevenlabs.io/blog/scribe-v3";

export const elevenlabsScribeV3SousTitresVideo: Article = {
  title: "ElevenLabs Scribe v3 : des sous-titres qui savent qui parle",
  slug: "elevenlabs-scribe-v3-sous-titres-video",
  description:
    "ElevenLabs sort Scribe v3 : 27 % d'erreurs en moins, qui parle quand, et 1 000 mots-clés à surveiller. Ce que ça change pour sous-titrer tes vidéos.",
  excerpt:
    "ElevenLabs lance Scribe v3 et Scribe v3 Live, ses nouveaux modèles de transcription. Moins d'erreurs, de meilleures étiquettes de locuteurs et une liste de termes à respecter : pour un créateur vidéo, c'est surtout moins de temps passé à corriger ses sous-titres.",
  category: "actualites-ia",
  tags: ["Actualités IA", "elevenlabs", "sous-titres", "transcription", "audio ia", "montage vidéo"],
  date: "2026-11-12",
  updatedAt: "2026-11-12",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/elevenlabs-scribe-v3-sous-titres-video.webp",
  imageAlt:
    "Une jeune créatrice vidéo, un casque autour du cou, sourit devant son écran où une interview à deux personnes est en pause, dans un petit studio d'appartement parisien éclairé par une lampe, un micro de podcast sur un bras articulé",
  keywords: ["scribe v3", "elevenlabs scribe v3", "transcription ia", "sous-titres ia", "speech to text elevenlabs", "diarisation"],
  relatedSlugs: ["sous-titres-automatiques-ia-video", "elevenlabs-guide-complet", "doublage-traduction-video-ia"],
  faq: [
    {
      question: "Qu'est-ce que Scribe v3 d'ElevenLabs ?",
      answer:
        "C'est le nouveau modèle de transcription d'ElevenLabs, lancé le 10 novembre 2026 pour l'audio enregistré. D'après ElevenLabs, il fait 27 % d'erreurs de mots en moins que Scribe v2 sur 102 langues et identifie mieux qui parle. Une version temps réel, Scribe v3 Live, sort en même temps.",
    },
    {
      question: "Quelle différence entre Scribe v3 et Scribe v3 Live ?",
      answer:
        "Scribe v3 traite un fichier déjà enregistré. Scribe v3 Live transcrit en direct avec peu de latence : 43 % d'erreurs en moins que Scribe v2 Realtime selon ElevenLabs, et pour la première fois l'identification des locuteurs en temps réel.",
    },
    {
      question: "Scribe v3 reconnaît-il qui parle dans une interview ?",
      answer:
        "Oui, c'est ce qu'on appelle la diarisation. ElevenLabs annonce 12 % d'erreurs de diarisation en moins que Scribe v2 au global, et 17 % de moins sur les enregistrements à trois personnes ou plus, ceux où les modèles se trompent le plus.",
    },
    {
      question: "Peut-on lui imposer l'orthographe des noms propres ?",
      answer:
        "Oui. Le keyterm prompting accepte jusqu'à 1 000 termes que tu sais présents dans l'enregistrement : noms de marque, prénoms, jargon. Tu peux aussi choisir si les nombres sortent en chiffres ou en lettres, et écrire des règles de mise en forme en langage courant.",
    },
    {
      question: "Où utiliser Scribe v3 ?",
      answer:
        "Les deux modèles sont disponibles dans l'API d'ElevenLabs, où passer de Scribe v2 à v3 revient à changer l'identifiant du modèle. Scribe v3 Live est aussi disponible dans ElevenAgents. L'annonce ne détaille pas l'arrivée dans l'interface de création d'ElevenLabs.",
    },
    {
      question: "Les chiffres d'ElevenLabs sont-ils vérifiés ?",
      answer:
        "Pas de façon indépendante. ElevenLabs a comparé ses modèles à d'autres sur ses propres tests, dont un jeu de données maison de vraies réunions et d'appels qu'il promet de publier. Fais ton propre essai sur une de tes vidéos avant de changer d'outil.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le plus long dans des sous-titres, ce n'est pas de les générer. C'est de les **corriger** : le prénom mal écrit, la marque transformée en mot banal, la réplique attribuée à la mauvaise personne. ElevenLabs vient de sortir **Scribe v3**, un modèle de transcription qui s'attaque justement à ces trois points.",
    },
    {
      type: "p",
      text: "L'annonce date du **10 novembre 2026**. Voici ce qui change, ce qui reste à prouver, et comment je l'intégrerais dans un montage d'interview ou de podcast vidéo.",
    },
    {
      type: "screenshot",
      src: `${IMG}-annonce.webp`,
      alt: "Annonce d'ElevenLabs du 10 novembre 2026 : Introducing Scribe v3 and v3 Live, our most accurate speech to text models, écrite par Min Kim",
      caption: "L'annonce d'ElevenLabs, publiée le 10 novembre 2026.",
      source: EL,
      capturedAt: CAPTURE,
      width: 840,
      height: 370,
    },
    { type: "h2", id: "annonce", text: "Ce qu'ElevenLabs a lancé" },
    {
      type: "p",
      text: "D'après [l'annonce d'ElevenLabs](" + EL + "), deux modèles sortent en même temps :",
    },
    {
      type: "ul",
      items: [
        "**Scribe v3**, pour l'audio enregistré : **27 % d'erreurs de mots en moins** que Scribe v2 sur **102 langues**, et selon ElevenLabs les meilleures étiquettes de locuteurs de tous les modèles testés.",
        "**Scribe v3 Live**, pour le temps réel : **43 % d'erreurs en moins** que Scribe v2 Realtime, et pour la première fois l'identification de qui parle en direct.",
        "Les deux sont dans l'API d'ElevenLabs. Pour qui utilise déjà Scribe v2, il suffit de changer l'identifiant du modèle.",
      ],
    },
    {
      type: "screenshot",
      src: `${IMG}-chiffres.webp`,
      alt: "Extrait de l'annonce d'ElevenLabs : Scribe v3 fait 27 % d'erreurs de mots en moins que Scribe v2 sur 102 langues, Scribe v3 Live fait 43 % d'erreurs en moins que Scribe v2 Realtime avec la diarisation, et les deux modèles sont disponibles dans ElevenAPI",
      caption: "Les chiffres annoncés par ElevenLabs.",
      source: EL,
      capturedAt: CAPTURE,
      width: 900,
      height: 250,
    },
    { type: "h2", id: "qui-parle", text: "Le vrai progrès : savoir qui parle" },
    {
      type: "p",
      text: "Dans une interview à deux, une erreur de mot se voit tout de suite. Une erreur de locuteur, non : la phrase est juste, mais elle est attribuée à la mauvaise personne, et tu ne t'en rends compte qu'au moment de placer les sous-titres sous le bon visage.",
    },
    {
      type: "p",
      text: "ElevenLabs annonce **17 % d'erreurs de diarisation en moins** sur les enregistrements à trois personnes ou plus, ceux qui posent le plus de problèmes. Pour une table ronde, un podcast à trois micros ou un tournage de mariage, c'est là que tu gagnes du temps.",
    },
    { type: "h2", id: "mots-cles", text: "1 000 mots que l'IA doit respecter" },
    {
      type: "p",
      text: "La nouveauté la plus utile au quotidien est sans doute le **keyterm prompting** : tu donnes jusqu'à **1 000 termes** que tu sais présents (le nom du client, sa marque, un terme technique, le prénom de l'invité) et le modèle les écrit correctement. Tu peux aussi choisir chiffres ou lettres pour les nombres, et écrire des règles simples du genre « écris toutes les dates au format JJ/MM/AAAA ».",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois étapes pour sous-titrer une interview avec Scribe v3 : transcrire un fichier enregistré avec qui parle quand ; donner jusqu'à 1 000 termes à surveiller comme les noms de marque et les prénoms ; relire les noms propres et les passages où deux personnes parlent en même temps avant d'exporter",
      caption: "Ma méthode pour une interview. Schéma AI Studios.",
      source: EL,
      capturedAt: CAPTURE,
      width: 1600,
      height: 610,
    },
    { type: "h2", id: "limites", text: "Ce qu'il faut garder en tête" },
    {
      type: "ul",
      items: [
        "**Des chiffres maison.** ElevenLabs compare ses modèles sur ses propres tests. Il annonce publier son jeu de données de vraies réunions, ce n'est pas encore fait.",
        "**Le français n'est pas détaillé.** Le « 27 % » est une moyenne sur 102 langues. Rien ne dit que le gain est le même en français.",
        "**Pas de prix dans l'annonce.** La page ne donne pas le coût par heure de Scribe v3.",
        "**Une annonce pensée pour les développeurs.** Elle parle de l'API et d'ElevenAgents, pas de l'éditeur de sous-titres grand public.",
      ],
    },
    { type: "h2", id: "workflow", text: "Comment je l'utiliserais sur une interview" },
    {
      type: "ul",
      items: [
        "**Prépare ta liste de mots avant d'envoyer le fichier.** Prénoms des invités, nom de la marque, deux ou trois termes du métier. C'est cinq minutes qui t'en font gagner trente.",
        "**Teste sur ton pire fichier**, pas sur le plus propre : trois personnes, un peu de bruit, des gens qui se coupent la parole.",
        "**Relis les noms propres et les chevauchements** avant d'exporter. Ce sont les deux endroits où une erreur se voit à l'écran.",
        "**Garde ton outil actuel en parallèle** sur une ou deux vidéos, et compare le temps de correction. C'est le seul chiffre qui compte pour toi.",
      ],
    },
    {
      type: "p",
      text: "Si tu pars de zéro, mon guide sur [les sous-titres automatiques par IA](/blog/sous-titres-automatiques-ia-video) explique toute la chaîne, du fichier audio au format pour les réseaux. Et pour aller plus loin avec la même plateforme, voici [mon guide complet d'ElevenLabs](/blog/elevenlabs-guide-complet).",
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Pour un créateur, la qualité brute de la transcription était déjà correcte depuis un moment. Ce qui manquait, c'était le **contrôle** : imposer l'orthographe d'un nom, savoir à coup sûr qui parle. Scribe v3 va dans ce sens. Si tes chiffres maison confirment ceux d'ElevenLabs, c'est un vrai gain de temps sur chaque interview.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Monte tes vidéos IA de bout en bout",
      text: "Ma formation IA gratuite te montre la chaîne complète, de la génération des plans au montage et aux sous-titres.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 12 novembre 2026 à partir de l'annonce d'ElevenLabs du 10 novembre 2026, « Introducing Scribe v3 and v3 Live », lue le 12 novembre. Les captures viennent de cette page.",
        "Je n'ai pas encore testé Scribe v3 sur mes propres vidéos. Les pourcentages sont ceux d'ElevenLabs, mesurés sur ses propres tests.",
      ],
      teste: ["La lecture de l'annonce d'ElevenLabs du 10 novembre 2026"],
      nonTeste: ["Scribe v3 sur une vraie interview en français", "Le prix par heure de transcription"],
      sources: [{ label: "ElevenLabs, Introducing Scribe v3 and v3 Live, 10/11/2026", href: EL }],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-12 -->
