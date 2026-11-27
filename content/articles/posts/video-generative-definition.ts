import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-25";
const IMG = "/images/articles/video-generative-definition";
const OQLF = "https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26561649/intelligence-artificielle-generative";
const VIDEO_LDM = "https://research.nvidia.com/labs/toronto-ai/VideoLDM/";
const GEMINI = "https://support.google.com/gemini/answer/16126339?hl=fr";
const YOUTUBE = "https://support.google.com/youtube/answer/14328491?hl=fr";
const PHYSIQUE = "https://arxiv.org/abs/2505.00337";
const LONGUE = "https://arxiv.org/abs/2507.07202";
const AI_ACT = "https://artificialintelligenceact.eu/fr/article/50/";

const FAQ = [
  {
    question: "C'est quoi, la vidéo générative ?",
    answer:
      "Une vidéo dont les images sont fabriquées par un modèle d'intelligence artificielle, à partir d'une consigne écrite, d'une image ou d'une autre vidéo. Le modèle calcule ces images à partir de ce qu'il a appris pendant son entraînement, et te rend un plan de quelques secondes.",
  },
  {
    question: "Comment fonctionne une IA qui génère de la vidéo ?",
    answer:
      "La plupart des modèles actuels utilisent la diffusion : ils partent d'un bruit aléatoire et le nettoient par étapes en suivant ta consigne. Ils travaillent sur une version compressée de la vidéo, puis la reconvertissent en pixels. Des couches dédiées au temps relient les images entre elles, pour que le plan se tienne du début à la fin.",
  },
  {
    question: "Combien de temps dure une vidéo générée par IA ?",
    answer:
      "Quelques secondes par génération. Dans l'application Gemini, Google annonce des vidéos de 3 à 10 secondes, jusqu'à 15 secondes avec l'abonnement AI Ultra (aide relue le 25 novembre 2026). Seedance 2.5 monte à 30 secondes. Pour une vidéo plus longue, on génère plusieurs plans et on les monte.",
  },
  {
    question: "Quelle différence entre vidéo générative et montage assisté par IA ?",
    answer:
      "La vidéo générative crée des images qui n'existaient pas. Le montage assisté par IA travaille sur tes rushes : il coupe les silences, ajoute des sous-titres, recadre en vertical ou nettoie le son. Beaucoup de logiciels font les deux, donc regarde ce que fabrique le bouton que tu utilises.",
  },
  {
    question: "Une vidéo générative est-elle un deepfake ?",
    answer:
      "Seulement dans certains cas. Un deepfake (hypertrucage en français) imite une personne, un lieu ou un événement réel au point de passer pour vrai. Une barque imaginaire qui rentre dans un port imaginaire n'imite personne. Le visage d'une personne existante placé dans une scène qu'elle n'a pas vécue, si.",
  },
  {
    question: "Faut-il signaler une vidéo faite avec l'IA ?",
    answer:
      "Ça dépend du contenu et de la plateforme. YouTube demande de signaler les contenus générés ou modifiés par IA qui semblent réalistes, au moment de la mise en ligne. En Europe, l'article 50 de l'AI Act impose aussi d'indiquer qu'un hypertrucage a été généré ou manipulé par une IA.",
  },
];

export const videoGenerativeDefinition: Article = {
  title: "Vidéo générative : définition simple et exemples",
  slug: "video-generative-definition",
  description:
    "Vidéo générative : la définition en trois phrases, comment l'IA passe du bruit au plan, cinq formes avec un exemple chacune et les limites à connaître.",
  excerpt:
    "Tout le monde dit « vidéo IA », et le mot désigne aussi bien un film entier qu'un sous-titre automatique. La définition de la vidéo générative en trois phrases, le trajet du bruit au plan, cinq formes illustrées par la même scène, et ce que ces outils ratent encore.",
  category: "ia-video",
  tags: ["vidéo générative", "définition", "IA générative", "texte vers vidéo", "débutant"],
  date: "2026-11-25",
  updatedAt: "2026-11-25",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/video-generative-definition.webp",
  imageAlt:
    "Dans la salle de lecture d'une médiathèque, un bibliothécaire fait tourner un zootrope devant une adolescente, des bandes de papier dessinées étalées sur la table",
  keywords: [
    "vidéo générative",
    "ia générative vidéo",
    "vidéo générative définition",
    "texte vers vidéo",
    "comment fonctionne la vidéo ia",
  ],
  relatedSlugs: ["video-ia-guide-complet", "glossaire-ia-creative-termes", "image-to-video-ia-methode"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "**La vidéo générative désigne une vidéo dont les images sont fabriquées par un modèle d'intelligence artificielle, à partir d'un texte, d'une image ou d'une autre vidéo.** Le modèle calcule chaque image à partir de ce qu'il a appris pendant son entraînement. Tu obtiens un plan de quelques secondes, que tu montes ensuite avec d'autres.",
    },
    {
      type: "p",
      text: "Avec ça, tu peux répondre à un client qui te pose la question. Mais dès que tu ouvres un outil, tu butes sur le reste : pourquoi dix secondes et pas trois minutes, et est-ce qu'un sous-titre automatique compte aussi ?",
    },
    {
      type: "p",
      text: "Je garde une seule scène du début à la fin de l'article : une barque de pêche qui rentre au port au lever du jour. Elle passe par les cinq formes de vidéo générative, et tu verras ce que chacune te demande.",
    },
    { type: "h2", id: "core-concepts", text: "Vidéo générative : ce que le mot recouvre" },
    { type: "h3", id: "definition-officielle", text: "Une branche de l'IA générative" },
    {
      type: "p",
      text: "L'Office québécois de la langue française définit [l'intelligence artificielle générative](" + OQLF + ") comme un système utilisé pour produire du contenu, généralement du texte, du son, de la vidéo ou de l'image. La vidéo générative en est la branche vidéo. La même fiche, mise à jour en 2025, recommande d'ailleurs « intelligence artificielle génératrice de vidéos » pour nommer l'outil lui-même.",
    },
    {
      type: "screenshot",
      src: `${IMG}-oqlf.webp`,
      alt: "Fiche « intelligence artificielle générative » du Grand dictionnaire terminologique de l'OQLF : définition d'un système qui produit du contenu sous forme de texte, de son, de vidéo ou d'image, dernière mise à jour 2025",
      caption: "La fiche de l'OQLF : la vidéo y figure parmi les contenus produits par l'IA générative.",
      source: OQLF,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Tu croiseras aussi « vidéo IA », « génération vidéo » ou « text to video ». Ces mots se recoupent, sauf un : « vidéo IA » sert à tout, y compris à une vidéo filmée au téléphone dont une IA a nettoyé le son. Pour le reste du vocabulaire, garde [le glossaire de l'IA créative](/blog/glossaire-ia-creative-termes) ouvert dans un onglet.",
    },
    { type: "h3", id: "ce-qui-nen-est-pas", text: "Le test de la barque" },
    {
      type: "p",
      text: "Pour savoir si un outil fait de la vidéo générative, pose-toi une question : **ces images de barque existaient-elles avant que je clique ?** Si elles sortent telles quelles d'une caméra ou d'une banque de vidéos, l'outil les assemble ou les retouche. Si elles apparaissent après ta consigne, elles sont générées.",
    },
    {
      type: "p",
      text: "Les sous-titres automatiques, la coupe des silences ou le recadrage vertical tombent du premier côté. Un service qui colle des clips d'une banque d'images sur ta voix off aussi, même si sa page d'accueil affiche « vidéo IA » en grand. Une fonction qui prolonge ton plan de deux secondes tombe du second : ces deux secondes, personne ne les a tournées.",
    },
    { type: "h2", id: "du-bruit-au-plan", text: "Comment l'IA passe du bruit à un plan" },
    { type: "h3", id: "diffusion", text: "Partir d'un écran de neige" },
    {
      type: "p",
      text: "La plupart des modèles actuels reposent sur ce qu'on appelle la diffusion. Pendant l'entraînement, on prend de vraies vidéos, on les noie peu à peu sous du bruit, comme la neige d'une vieille télé sans antenne, et le modèle apprend à retirer ce bruit. À force, il sait le faire même quand il n'y a rien dessous.",
    },
    {
      type: "p",
      text: "Quand tu écris « une barque rentre au port », il part d'un bruit tiré au hasard et le nettoie par étapes, guidé par ta phrase. Les grandes masses sortent d'abord, les détails à la fin. Le bruit de départ change à chaque essai, ce qui explique pourquoi le même prompt te donne deux barques différentes.",
    },
    {
      type: "image",
      src: `${IMG}-bruit.webp`,
      alt: "Quatre étapes d'une même image : bruit coloré pur, grandes masses claires et bleues, silhouette d'un chevalier à tête de lanterne encore granuleuse, puis image nette dans une forêt de champignons lumineux",
      caption: "Simulation pédagogique du 25 novembre 2026 : j'ai ajouté du bruit à une vraie image de Lost Garden (épisode 1, 3 min 38) pour montrer le trajet. Les étapes internes d'un modèle ne ressemblent pas exactement à ça.",
      width: 1280,
      height: 862,
    },
    { type: "h3", id: "latent", text: "Travailler sur un résumé de la vidéo" },
    {
      type: "p",
      text: "Dix secondes à 24 images par seconde, ça fait 240 images à garder cohérentes. Calculer tous leurs pixels d'un bloc demanderait une quantité de calcul énorme. Alors le modèle travaille dans un espace compressé, l'espace latent : un résumé de la vidéo, si tu veux, qu'il reconvertit en pixels à la fin.",
    },
    { type: "h3", id: "temps", text: "Apprendre le temps à une IA qui ne savait faire que des images" },
    {
      type: "p",
      text: "Une image générée n'a ni avant ni après. En 2023, une équipe de NVIDIA et de plusieurs universités a publié [une méthode pour franchir ce cap](" + VIDEO_LDM + ") : prendre un générateur d'images déjà entraîné, lui ajouter des couches qui regardent le temps, puis l'ajuster sur des suites d'images, donc des vidéos. Avant cet ajustement, écrivent les auteurs, les images produites sont indépendantes les unes des autres.",
    },
    {
      type: "p",
      text: "Sans ces couches, tu verrais une coque qui change de couleur à chaque image. Elles sont là pour que la barque de la 240e image soit encore celle de la première. Les modèles récents ne suivent pas tous cette recette à la lettre, mais ils ont le même problème à résoudre.",
    },
    {
      type: "screenshot",
      src: `${IMG}-videoldm.webp`,
      alt: "Page du projet de recherche NVIDIA « Align your Latents: High-Resolution Video Synthesis with Latent Diffusion Models », avec la liste des auteurs et la mention CVPR 2023, sur fond d'une vidéo générée d'un chien portant un casque",
      caption: "La page du projet Video LDM de NVIDIA : un générateur d'images transformé en générateur de vidéos.",
      source: VIDEO_LDM,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "practical-workflow", text: "Cinq formes de vidéo générative, une seule barque" },
    {
      type: "p",
      text: "Plus ta matière de départ est précise, moins le modèle invente. Regarde la dernière colonne avant de choisir ta forme.",
    },
    {
      type: "table",
      caption: "Les cinq formes de vidéo générative appliquées à la même scène",
      headers: ["Forme", "Ce que tu donnes", "Avec la barque", "Ce que tu ne contrôles pas"],
      rows: [
        ["Texte vers vidéo", "Une phrase", "« Une barque de pêche bleue rentre au port au lever du jour, plan large fixe »", "Le visage du pêcheur, la forme du port, la place exacte de la barque"],
        ["Image vers vidéo", "Une image et une phrase", "Ta photo de la barque, plus « elle avance lentement vers le quai »", "Ce que la photo ne montre pas, par exemple l'autre côté de la coque"],
        ["Vidéo vers vidéo", "Un plan et une phrase", "Ton plan filmé à midi, plus « même plan, au lever du jour »", "Les petits détails, qui bougent un peu d'une version à l'autre"],
        ["Prolongation", "Un plan déjà fait", "Dix secondes de plus, jusqu'à l'amarrage", "La suite de l'action, si tu ne la décris pas"],
        ["Avatar parlant", "Un visage et un texte ou une voix", "Le pêcheur présente sa criée face caméra", "Les gestes et les regards hors du texte"],
      ],
    },
    {
      type: "p",
      text: "Pour un premier essai, prends l'image vers vidéo. Tu valides ta barque en image, ça coûte bien moins qu'une vidéo, et tu ne paies le mouvement qu'une fois le cadre bon. La marche à suivre est dans [ma méthode pour passer d'une image à un plan animé](/blog/image-to-video-ia-methode). Pour les présentateurs, j'ai détaillé [les avatars IA et l'UGC](/blog/avatars-ia-ugc-presentateur-virtuel) à part.",
    },
    { type: "h3", id: "exemple-gemini", text: "Un outil grand public : l'application Gemini" },
    {
      type: "p",
      text: "L'[aide de Google](" + GEMINI + ") décrit presque tout ce tableau dans un même produit. Au 25 novembre 2026, l'application génère ses vidéos avec Gemini Omni 1.2 Flash, en combinant texte, images et vidéos. Il faut un forfait Google AI sur un compte personnel et avoir 18 ans. Les vidéos durent de 3 à 10 secondes, jusqu'à 15 avec AI Ultra, et un plan généré se prolonge de 10 secondes au maximum.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini.webp`,
      alt: "Page d'aide Google « Générer des vidéos avec les applications Gemini » : modèle Gemini Omni 1.2 Flash, forfait Google AI requis, fonction réservée aux plus de 18 ans",
      caption: "L'aide de Google sur la vidéo dans Gemini : modèle utilisé, forfait requis et âge minimum.",
      source: GEMINI,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Si tu vis en France, lis l'astérisque : importer une vidéo à modifier ou créer un avatar n'est pas proposé dans l'Espace économique européen. Il te reste le texte vers vidéo, l'image vers vidéo et la retouche des plans que l'appli a elle-même générés. Vérifie toujours ta région avant de payer un abonnement pour une démo vue sur X.",
    },
    { type: "h3", id: "exemples-series", text: "Deux séries faites de cette façon" },
    {
      type: "p",
      text: "Ma série animée dark fantasy, Lost Garden, est faite avec l'IA. L'épisode 1, sorti le 29 mai 2026, dure 17 minutes. Fais le calcul avec des plans de 10 secondes : il en faudrait au moins 102, sans un seul raté. En vrai les plans sont souvent plus courts, donc il y en a plus, et chacun demande sa consigne et son raccord.",
    },
    {
      type: "p",
      text: "Côté studio, tu as [The Sentinels, une série d'inspiration anime faite par neuf artistes](/blog/studio-jadu-the-sentinels-serie-animee-ia) avec un outil maison. Dans les deux cas, le générateur fournit des plans. L'histoire, le découpage et le montage restent à faire, et le gros du temps part là.",
    },
    { type: "h3", id: "premier-essai", text: "Ton premier plan, pas à pas" },
    {
      type: "ol",
      items: [
        "Choisis une scène avec un seul sujet et une seule action. Une barque qui avance suffit.",
        "Génère ou prends en photo l'image de départ, au format de ta vidéo finale.",
        "Écris la consigne en trois morceaux : ce qui bouge, comment ça bouge, ce que fait la caméra.",
        "Lance deux générations de cinq secondes avec la même consigne, pour voir la part de hasard.",
        "Compare-les : la barque garde-t-elle sa forme, l'eau réagit-elle à la coque, le cadre reste-t-il stable ?",
        "Corrige un seul morceau de la consigne et relance.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : pour la barque, la consigne tient en une ligne. « La barque avance lentement vers le quai, l'eau s'ouvre devant la coque, caméra fixe. » Laisse de côté la couleur, la lumière et le décor, ton image les montre déjà.",
    },
    { type: "h2", id: "trench-warfare", text: "Ce que la vidéo générative rate encore" },
    { type: "h3", id: "limite-physique", text: "La physique" },
    {
      type: "p",
      text: "Symptôme : la barque touche le quai et passe à travers, ou le sillage part dans le mauvais sens. [Une évaluation publiée en 2025](" + PHYSIQUE + ") a testé des modèles ouverts et commerciaux sur douze lois physiques, avec des juges humains. Tous restent sous 0,60 de moyenne pour chaque loi, et détailler la physique dans le prompt n'a pas réglé le problème. Les modèles ont avancé depuis, mais les contacts restent l'endroit où je regarde en premier. Fix concret : coupe juste avant le choc et montre la suite dans un autre plan.",
    },
    { type: "h3", id: "limite-duree", text: "La durée" },
    {
      type: "p",
      text: "Symptôme : le pêcheur du début ne ressemble plus tout à fait à celui de la fin. [Une synthèse de 2025 sur 32 travaux](" + LONGUE + ") relève qu'au-delà de 16 secondes, les vidéos peinent à garder l'apparence des personnages et la disposition des décors. Des modèles montent plus haut aujourd'hui, comme [Seedance 2.5 avec ses 30 secondes](/blog/seedance-2-5-video-ia-30-secondes). Fix concret : vise des plans de cinq à huit secondes, avec la même image de référence à chaque fois.",
    },
    { type: "h3", id: "limite-texte", text: "Le texte à l'image" },
    {
      type: "p",
      text: "Symptôme : le nom peint sur la coque change de lettres d'une image à l'autre. Le modèle invente un mot comme il invente une vague, sauf que sur un mot tout le monde voit l'erreur. Fix concret : génère la coque sans nom et ajoute-le au montage, ou pars d'une image où il est déjà écrit et garde la caméra fixe.",
    },
    { type: "h3", id: "limite-attente", text: "Attendre un film d'un seul clic" },
    {
      type: "p",
      text: "Symptôme : tu colles ton scénario entier dans la case et tu récupères huit secondes d'une scène qui n'est dans aucune page. Fix concret : découpe d'abord ton histoire plan par plan, puis génère un plan à la fois. Tout ce parcours, du choix de l'outil au montage, est dans [le guide complet de la vidéo IA](/blog/video-ia-guide-complet).",
    },
    { type: "h2", id: "declarer", text: "Publier une vidéo générative sans te mettre en tort" },
    {
      type: "p",
      text: "YouTube demande de [signaler les contenus générés ou modifiés par IA qui semblent réalistes](" + YOUTUBE + ") : une personne réelle à qui tu fais dire ou faire quelque chose, un événement ou un lieu réel modifié, une scène d'apparence réaliste qui n'a jamais eu lieu. Tu n'as pas à signaler les changements mineurs ou non réalistes. Le réglage « Utilisation de l'IA » se trouve dans les attributs de la vidéo, dans YouTube Studio. Notre barque, si elle est photoréaliste, entre dans le troisième cas : tu coches « Oui ».",
    },
    {
      type: "screenshot",
      src: `${IMG}-youtube.webp`,
      alt: "Page de l'Aide YouTube « Signaler l'utilisation de contenus d'IA générative » avec la liste des cas à signaler : personne réelle, événement ou lieu réel modifié, scène réaliste générée, musique générée",
      caption: "L'aide de YouTube : les cas où le signalement est obligatoire.",
      source: YOUTUBE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "En Europe, [l'article 50 de l'AI Act](" + AI_ACT + ") ajoute une obligation pour les hypertrucages : indiquer que le contenu a été généré ou manipulé par une IA. La règle s'allège pour une œuvre clairement artistique ou de fiction, sans disparaître. Si ta scène montre quelqu'un qui existe, lis d'abord [ce que la loi te permet avec un deepfake](/blog/deepfake-createur-droit).",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Passer de la définition au premier plan",
      text: "Dans ma formation IA gratuite, je pars de la série Lost Garden : la vision, le storyboard, puis le montage, en trois jours et trois vidéos.",
    },
    {
      type: "p",
      text: "Ce soir, prends une photo d'une tasse dans ta cuisine, donne-la à un générateur et demande que la vapeur monte, caméra fixe, cinq secondes. Relance une fois sans rien changer et pose les deux plans côte à côte. La différence entre les deux, c'est le bruit de départ.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 25 novembre 2026 la fiche de l'OQLF, la page du projet Video LDM de NVIDIA, l'aide de Google sur la vidéo dans Gemini, l'aide de YouTube sur le signalement, l'article 50 de l'AI Act et les résumés des deux articles de recherche cités. Les quatre captures ont été prises le même jour.",
        "La barque est un exemple construit pour l'article. Les consignes données n'ont pas été générées pour l'occasion, et les durées annoncées sont celles des éditeurs.",
      ],
      teste: ["Le calcul du nombre de plans pour 17 minutes", "La simulation de bruit, faite sur une vraie image de Lost Garden"],
      nonTeste: ["La génération vidéo dans l'application Gemini", "Les évaluations citées, reprises de leurs auteurs"],
      sources: [
        { label: "OQLF, intelligence artificielle générative", href: OQLF },
        { label: "NVIDIA, Video LDM (CVPR 2023)", href: VIDEO_LDM },
        { label: "Aide Gemini, générer des vidéos", href: GEMINI },
        { label: "T2VPhysBench (arXiv, 2025)", href: PHYSIQUE },
        { label: "Synthèse sur la vidéo longue (arXiv, 2025)", href: LONGUE },
        { label: "Aide YouTube, contenus d'IA générative", href: YOUTUBE },
        { label: "AI Act, article 50", href: AI_ACT },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-25 -->
