import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-25";
const IMG = "/images/articles/seedance-vs-veo";

export const seedanceVsVeo: Article = {
  title: "Seedance vs Veo : comparatif sur les mêmes consignes",
  slug: "seedance-vs-veo",
  description:
    "Seedance 2.5 ou Veo 3.1 ? Durée, 4K, langues, prix et la même scène écrite pour chacun, d'après les guides officiels relus le 25 octobre 2026.",
  excerpt:
    "Seedance 2.5 tient 30 secondes d'une traite, Veo 3.1 monte en 4K mais s'arrête à 8. Et depuis le 22 octobre, on n'accède plus à Veo de la même façon.",
  category: "ia-video",
  tags: ["seedance", "veo", "comparatif", "seedance 2.5", "veo 3.1", "google flow"],
  date: "2026-10-25",
  updatedAt: "2026-10-25",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/seedance-vs-veo.webp",
  imageAlt:
    "Tournage à la tombée du soir dans une ruelle pavée et mouillée du vieux Lyon : une scripte en manteau bordeaux compare deux pages de scénario annotées, tandis qu'une libraire en ciré vert baisse le rideau de fer de sa boutique éclairée",
  keywords: ["seedance vs veo", "veo 3.1 vs seedance 2.5", "seedance ou veo", "seedance 2.5", "veo 3.1 flow"],
  relatedSlugs: ["seedance-guide", "prompt-veo-3-exemples", "video-ia-longue-duree"],
  faq: [
    {
      question: "Seedance ou Veo : lequel choisir pour débuter ?",
      answer:
        "Pour apprendre sans payer, Veo 3.1 dans Google Flow : 50 crédits gratuits par jour, et un plan Lite de 8 secondes en coûte 10. Pour raconter une scène de 20 à 30 secondes d'une seule traite, Seedance 2.5, mais il faut un abonnement Dreamina ou un accès API.",
    },
    {
      question: "Veo 3.1 est-il encore disponible ?",
      answer:
        "Oui dans Google Flow (Lite, Fast et Quality). Dans l'app Gemini, Google écrit que Gemini Omni 1.1 Flash remplace désormais Veo 3.1. Et dans l'API Gemini, les trois modèles Veo 3.1 en preview ont une date d'arrêt au 22 octobre 2026, avec Omni 1.1 Flash comme remplaçant.",
    },
    {
      question: "Seedance 2.5 sort-il en 4K ?",
      answer:
        "Pas sur l'API officielle de BytePlus : la grille du 25 octobre 2026 indique 480p, 720p et 1080p, et « Not supported » pour la 4K. Dreamina affiche des vidéos 4K sur sa page Seedance 2.5, sans préciser les conditions. Chez ByteDance, la 4K ne figure que dans la grille de Seedance 2.0.",
    },
    {
      question: "Quelle durée maximale pour chaque modèle ?",
      answer:
        "Seedance 2.5 génère de 4 à 30 secondes en une fois, avec une extension possible. Veo 3.1 génère 4, 6 ou 8 secondes ; dans Flow, un plan de 8 secondes peut être prolongé avec Veo 3.1 Lite.",
    },
    {
      question: "Peut-on écrire ses prompts en français ?",
      answer:
        "Le français ne figure pas dans les 11 langues que BytePlus annonce pour Seedance 2.5. Google indique que l'anglais est pleinement pris en charge par Veo et que les autres langues peuvent varier. Écris la description en anglais et garde une réplique française courte si ta scène en a besoin.",
    },
    {
      question: "Combien coûte une scène de 24 secondes ?",
      answer:
        "Avec Seedance 2.5 sur l'API BytePlus, environ 5,54 $ en 720p et 13,66 $ en 1080p par essai. Avec Veo 3.1 dans Flow, trois plans de 8 secondes coûtent 30 crédits en Lite, 60 en Fast et 300 en Quality, hors reprises.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Seedance 2.5 ou Veo 3.1 ? Si tu veux une scène de 20 ou 30 secondes d'un seul tenant, avec plusieurs plans décrits dans le même prompt, prends **Seedance 2.5**. Si tu veux apprendre sans payer et livrer des plans courts très définis, prends **Veo 3.1 dans Google Flow**. Le vrai écart tient à la façon d'écrire la consigne, et je te montre la même scène rédigée pour chacun, d'après leurs guides officiels. Attention aussi : depuis le 22 octobre 2026, Veo ne s'utilise plus partout comme avant. Faits relus le 25 octobre 2026.",
    },

    { type: "h2", id: "verdict", text: "Seedance ou Veo : mon verdict" },
    {
      type: "verdict",
      title: "Seedance 2.5 face à Veo 3.1",
      pourQui:
        "Le créateur qui hésite entre les deux pour un premier court métrage, un clip ou des plans de pub, et qui veut savoir lequel apprendre en premier.",
      forts: [
        "Seedance 2.5 : jusqu'à **30 secondes** en une génération, découpage en plans dans un seul prompt, jusqu'à 50 références",
        "Veo 3.1 : **50 crédits gratuits par jour** dans Flow, 1080p et 4K sur les plans de 8 secondes, guide de prompt clair et court",
      ],
      faibles: [
        "Seedance 2.5 : pas de 4K sur l'API officielle, français absent des langues annoncées, pas de gratuit chiffré",
        "Veo 3.1 : **8 secondes** maximum par plan, retiré de l'app Gemini et de l'API Gemini preview en octobre 2026",
      ],
      verdict:
        "Pour apprendre le langage du plan, commence par Veo 3.1 Lite dans Flow : c'est gratuit et chaque essai coûte peu. Dès que tu racontes une scène entière avec un enchaînement de plans, passe à Seedance 2.5.",
    },
    {
      type: "comparison",
      caption: "Seedance 2.5 et Veo 3.1 au 25 octobre 2026",
      headers: ["Critère", "Seedance 2.5", "Veo 3.1"],
      rows: [
        ["Éditeur", "ByteDance (équipe Seed)", "Google DeepMind"],
        ["Durée par génération", "4 à 30 s", "4, 6 ou 8 s"],
        ["Résolution (API officielle)", "480p, 720p, 1080p", "720p ; 1080p et 4K en 8 s"],
        ["Audio généré", "Oui, avec l'image", "Oui, toujours actif"],
        ["Références en entrée", "Jusqu'à 50 (30 images, 10 vidéos, 10 audios)", "Jusqu'à 3 images"],
        ["Langues annoncées", "11, sans le français", "Anglais pleinement pris en charge"],
        ["Accès grand public", "Dreamina, CapCut", "Google Flow"],
        ["Gratuit", "Non chiffré", "50 crédits Flow par jour"],
        ["Prix d'un plan de 8 s", "1,85 $ en 720p (API)", "10 crédits en Lite (Flow)"],
      ],
      source: [
        { label: "BytePlus, tutoriel Seedance 2.5", href: "https://docs.byteplus.com/en/docs/ModelArk/2607688" },
        { label: "BytePlus, grille de prix", href: "https://docs.byteplus.com/en/docs/ModelArk/1544106" },
        { label: "Gemini API, Veo", href: "https://ai.google.dev/gemini-api/docs/veo" },
        { label: "Aide Google Flow, crédits", href: "https://support.google.com/flow/answer/16526234?hl=en" },
      ],
      verifieLe: "2026-10-25",
      releveLabel: "Données relevées le",
      note: "Prix Seedance calculé avec l'exemple officiel en 720p sans vidéo en entrée (0,231 $ la seconde).",
    },

    { type: "h2", id: "veo-octobre", text: "Ce qui a changé pour Veo en octobre 2026" },
    {
      type: "p",
      text: "Avant de comparer, il faut savoir où trouver Veo, parce que Google a déplacé les choses. Dans l'API Gemini, les trois modèles Veo 3.1 en preview (standard, Fast et Lite) ont une date d'arrêt fixée au **22 octobre 2026**, et la page des abandons recommande **Gemini Omni 1.1 Flash** à la place. Google précise que ces dates sont les plus précoces possibles.",
    },
    {
      type: "screenshot",
      src: `${IMG}-api-veo-arret-22-octobre.webp`,
      alt: "Tableau des abandons de l'API Gemini : veo-3.1-lite-generate-preview, veo-3.1-generate-preview et veo-3.1-fast-generate-preview arrêtés le 22 octobre 2026, remplacés par gemini-omni-1.1-flash",
      caption: "La page des abandons de l'API Gemini : les trois Veo 3.1 en preview s'arrêtent le 22 octobre 2026 et Google renvoie vers Omni 1.1 Flash.",
      source: "https://ai.google.dev/gemini-api/docs/deprecations",
      capturedAt: CAPTURE,
      width: 720,
      height: 645,
    },
    {
      type: "p",
      text: "Côté grand public, même mouvement. La page vidéo de l'app Gemini présente Omni 1.1 Flash comme le modèle « qui remplace désormais le précédent modèle Google Gemini Veo 3.1 ». Si tu tapes une demande de vidéo dans Gemini aujourd'hui, ce n'est donc plus Veo qui répond.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini-omni-remplace-veo.webp`,
      alt: "Page Gemini en français : carte Gemini Omni 1.1 Flash, modèle qui remplace désormais Veo 3.1, vidéos de 10 secondes, audio natif, jusqu'à 5 photos, abonnement Google AI requis",
      caption: "Dans l'app Gemini, Omni 1.1 Flash a pris la place de Veo 3.1 : vidéos de 10 secondes, abonnement Google AI requis.",
      source: "https://gemini.google/overview/video-generation/",
      capturedAt: CAPTURE,
      width: 1440,
      height: 880,
    },
    {
      type: "p",
      text: "Reste **Google Flow**, l'outil de réalisation de Google, où Veo 3.1 existe toujours en trois versions : Lite, Fast et Quality. C'est là que je compare. Pour un développeur, la doc renvoie vers Omni ou vers les modèles Veo de la plateforme entreprise Google Cloud, dont je n'ai pas pu lire les tarifs. Si tu suivais notre [guide pour générer des vidéos avec Veo](/blog/veo-3-generer-videos-ia), le fond reste valable dans Flow.",
    },

    { type: "h2", id: "duree", text: "Durée : 30 secondes d'un coup contre 8" },
    {
      type: "p",
      text: "Seedance 2.5 génère **de 4 à 30 secondes** en une requête, contre 15 secondes pour la série 2.0, et sa page officielle parle de deux extensions possibles pour aller plus loin. Le modèle peut aussi choisir la durée lui-même si tu lui passes la valeur -1.",
    },
    {
      type: "screenshot",
      src: `${IMG}-seedance-exemple-public.webp`,
      alt: "Page officielle Seedance 2.5 de ByteDance Seed : titre Longer Narratives. Better Control., texte sur les 30 secondes en une génération, extrait vidéo texte vers vidéo d'un barbier âgé dans un salon aux murs couverts de photos",
      caption: "La page officielle de Seedance 2.5 : 30 secondes par génération, extension possible deux fois. L'exemple montré (un salon de barbier) est un texte vers vidéo publié par ByteDance.",
      source: "https://seed.bytedance.com/en/seedance2_5",
      capturedAt: CAPTURE,
      width: 1440,
      height: 760,
    },
    {
      type: "p",
      text: "Veo 3.1 sort des plans de **4, 6 ou 8 secondes**. Dans Flow, les « ingrédients » (tes images de référence) ne marchent qu'en 8 secondes avec Lite et Fast, et pas du tout avec Quality. Pour aller au-delà de 8 secondes, Flow propose l'extension, mais seulement avec Veo 3.1 Lite.",
    },
    {
      type: "screenshot",
      src: `${IMG}-flow-fonctions-veo.webp`,
      alt: "Aide Google Flow : fonctions de Veo 3.1 Lite, première image, première et dernière image en 4, 6 ou 8 secondes, ingrédients en 8 secondes seulement, extension en 8 secondes avec l'astuce de passer par Lite",
      caption: "L'aide de Flow liste les fonctions par version de Veo 3.1 : ingrédients en 8 s seulement, et l'extension passe par Lite.",
      source: "https://support.google.com/flow/answer/16352836?hl=en",
      capturedAt: CAPTURE,
      width: 832,
      height: 836,
    },
    {
      type: "p",
      text: "En pratique, une scène de 24 secondes, c'est **une génération** chez Seedance et **trois plans à raccorder** chez Veo. Le raccord, c'est ton travail : même lumière, même costume, même place des personnages d'un plan à l'autre. Si tu pars sur Veo, garde sous la main notre méthode pour [prolonger un plan au-delà de 5 secondes](/blog/prolonger-plan-ia-au-dela-5-secondes) et celle pour [tenir une vidéo longue](/blog/video-ia-longue-duree).",
    },

    { type: "h2", id: "resolution", text: "Résolution : la 4K n'est pas là où on croit" },
    {
      type: "p",
      text: "Les comparatifs anglais se contredisent sur ce point. [Krea](https://www.krea.ai/blog/seedance-2-5-vs-veo-3-1-which-is-better-full-comparison-2026) écrit que Seedance plafonne à 720p, d'autres revendeurs lui prêtent la 4K. La grille de prix officielle de BytePlus tranche : Seedance 2.5 est vendu en **480p, 720p et 1080p**, et la colonne 4K affiche « Not supported ». La 4K existe chez ByteDance, mais sur **Seedance 2.0**.",
    },
    {
      type: "screenshot",
      src: `${IMG}-byteplus-grille-seedance.webp`,
      alt: "Grille de prix BytePlus ModelArk sans vidéo en entrée : dreamina-seedance-2-5 à 10,70 dollars en 480p et 720p, 11,7 en 1080p, 4K non prise en charge ; Seedance 2.0 à 7,0, 7,7 et 4,0 en 4K",
      caption: "Sur la grille officielle de BytePlus, la 4K n'existe que pour Seedance 2.0. La 2.5 s'arrête à la 1080p (prix en dollars par million de tokens).",
      source: "https://docs.byteplus.com/en/docs/ModelArk/1544106",
      capturedAt: CAPTURE,
      width: 855,
      height: 600,
    },
    {
      type: "p",
      text: "Dreamina, l'app de ByteDance, affiche pourtant « cinematic 4K videos » sur sa page Seedance 2.5, sans dire à quelle offre ni par quel traitement. Je ne peux pas le vérifier sans compte, donc je m'en tiens à la grille de l'API. Chez Veo 3.1, la doc de l'API Gemini donnait 720p par défaut, 1080p et 4K en 8 secondes. Dans Flow, la 1080p passe par un agrandissement gratuit pour les abonnés, la 4K coûte 50 crédits et reste réservée à l'offre Ultra.",
    },

    { type: "h2", id: "memes-consignes", text: "La même consigne écrite pour Seedance et pour Veo" },
    {
      type: "p",
      text: "Voici la scène qui sert de base : une libraire ferme sa boutique un soir de pluie, trouve une enveloppe glissée sous la porte, la lit, puis relève la tête vers la rue. Vingt-quatre secondes, trois plans, une réplique. Je n'ai lancé aucune génération pour cet article : je te montre comment chaque guide officiel demande d'écrire cette même scène, et ce que ça implique.",
    },
    { type: "h3", id: "guide-seedance", text: "Ce que demande le guide de Seedance 2.5" },
    {
      type: "p",
      text: "Le guide de BytePlus propose trois blocs. D'abord une phrase de résumé qui donne le sujet, lieu, événement, le genre ou le style et le mouvement de caméra. Ensuite le déroulé, découpé en « Shot 1, Shot 2 » ou en minutage, avec pour chaque segment l'image, la caméra, l'action, le dialogue et le son. Enfin des notes sur ce qui ne doit pas bouger de toute la vidéo : angle, lumière, décor, ambiance sonore.",
    },
    {
      type: "screenshot",
      src: `${IMG}-seedance-guide-prompt.webp`,
      alt: "Guide officiel de prompt Seedance 2.5 sur BytePlus : One-Sentence Summary sujet, lieu, événement, style, caméra ; Detailed Plot Description en Shot N ou minutage ; Additional Notes ; consignes négatives seulement pour les sous-titres et la musique",
      caption: "La structure recommandée par le guide officiel de Seedance 2.5 : résumé, déroulé plan par plan, notes de cohérence.",
      source: "https://docs.byteplus.com/en/docs/modelark/seedance-2-5-prompt-guide",
      capturedAt: CAPTURE,
      width: 855,
      height: 435,
    },
    {
      type: "quote",
      text: "Realistic cinematic drama, a bookseller in her fifties locks up her small bookshop on a rainy evening in Lyon, slow handheld camera. Shot 1 (0-8 s): wide shot from across the wet street, she pulls down the metal shutter halfway, warm light from the shop window, rain hiss and distant tram. Shot 2 (8-16 s): close-up, she notices a cream envelope under the door, picks it up, opens it, reads; the camera pushes in slowly. Shot 3 (16-24 s): medium shot, she looks up toward the street and says quietly: \"Il est revenu.\" Additional notes: same green raincoat and grey bun in every shot, same wet cobblestones, low ambient sound, no BGM, no subtitles.",
      cite: "Version Seedance 2.5 : un seul prompt, trois plans minutés, des notes de cohérence. « No BGM » et « no subtitles » font partie des seules consignes négatives que le guide recommande.",
    },
    {
      type: "p",
      text: "Deux remarques tirées du guide. Il déconseille le minutage pour les gestes très rapides (« secouer la tête trois fois par seconde ») : garde-le pour faire avancer l'histoire. Et il préfère les formulations positives, sauf pour les sous-titres et la musique. La réplique en français, elle, reste un pari : le français ne fait pas partie des 11 langues annoncées.",
    },
    { type: "h3", id: "guide-veo", text: "Ce que demande le guide de Veo 3.1" },
    {
      type: "p",
      text: "Le guide de Google est plus court. Il liste les éléments d'un bon prompt : **sujet, action, style**, puis en option la position et le mouvement de caméra, la composition, la mise au point et l'objectif, l'ambiance. Pour le son, une réplique se met entre guillemets, les effets sonores se décrivent explicitement. Le texte est limité à 1 024 tokens.",
    },
    {
      type: "screenshot",
      src: `${IMG}-veo-guide-prompt.webp`,
      alt: "Documentation Veo de l'API Gemini, section Prompt writing basics : Subject, Action, Style, Camera positioning and motion, Composition, Focus and lens effects, Ambiance, puis conseils de langage descriptif",
      caption: "Les éléments d'un prompt Veo selon Google. Caméra, composition, focale et ambiance sont notés optionnels.",
      source: "https://ai.google.dev/gemini-api/docs/veo?hl=en",
      capturedAt: CAPTURE,
      width: 730,
      height: 725,
    },
    {
      type: "quote",
      text: "Plan 1 : Wide shot from across a wet street at night, a bookseller in her fifties with a grey bun and a green raincoat pulls down the metal shutter of her small bookshop, warm light from the window, slow handheld camera, cinematic realism, sound of rain and a distant tram. Plan 2 : Close-up of the same woman finding a cream envelope under the door, she opens it and reads, slow push-in, shallow focus, rain on the glass. Plan 3 : Medium shot, the same woman looks up toward the street and says quietly: \"Il est revenu.\" Warm shop light on her face, soft rain ambience.",
      cite: "Version Veo 3.1 : trois prompts de 8 secondes, la description du personnage répétée à chaque fois.",
    },
    {
      type: "p",
      text: "Chez Seedance, tu écris **un mini-découpage technique** et le modèle enchaîne les plans. Chez Veo, tu écris **trois plans indépendants**, et la cohérence du personnage passe par la description répétée mot pour mot, ou par une image de référence (en 8 secondes seulement dans Flow). Pour aller plus loin sur l'écriture côté Google, j'ai rassemblé des [exemples de prompts Veo](/blog/prompt-veo-3-exemples) ; côté ByteDance, tout est dans notre [guide Seedance](/blog/seedance-guide).",
    },
    {
      type: "p",
      text: "> Pro Tip : écris d'abord ta scène en version Seedance (résumé, plans, notes). Pour Veo, découpe-la en trois et recopie dans chaque plan la ligne qui décrit le personnage. Tu gardes un seul document de travail pour les deux modèles.",
    },

    { type: "h2", id: "prix", text: "Combien coûte la même scène de 24 secondes" },
    {
      type: "p",
      text: "Les deux modèles ne se paient pas de la même manière, donc je ramène tout à notre scène. Chez Seedance 2.5, la grille BytePlus donne des exemples officiels pour 5 secondes en 16:9, sans vidéo en entrée : **0,103 $ la seconde en 480p, 0,231 $ en 720p, 0,569 $ en 1080p**. Seules les générations réussies sont facturées.",
    },
    {
      type: "screenshot",
      src: `${IMG}-byteplus-prix-seedance-2-5.webp`,
      alt: "Exemples de facturation BytePlus pour Dreamina Seedance 2.5 sans vidéo en entrée, 16:9, 5 secondes : 0,514 dollar en 480p, 1,156 en 720p, 2,843 en 1080p, soit 0,103, 0,231 et 0,569 dollar la seconde",
      caption: "Les exemples de prix officiels de Seedance 2.5 : c'est la base de mes calculs pour 24 secondes.",
      source: "https://docs.byteplus.com/en/docs/ModelArk/1544106",
      capturedAt: CAPTURE,
      width: 855,
      height: 480,
    },
    {
      type: "p",
      text: "Chez Veo, dans Flow, tu paies en crédits par génération : **10 crédits** pour un plan en Lite, **20** en Fast, **100** en Quality (5 et 10 seulement pour les abonnés Ultra en Lite et Fast). Tout le monde reçoit **50 crédits par jour**, abonné ou non, et ils ne se reportent pas.",
    },
    {
      type: "screenshot",
      src: `${IMG}-flow-credits-veo.webp`,
      alt: "Aide Google Flow, tableau des crédits par génération : Veo 3.1 Lite 10 crédits, Fast 20, Quality 100 pour des vidéos de 8 secondes, Gemini Omni Flash 720p de 7 à 15 crédits selon la durée",
      caption: "Le coût en crédits de chaque version de Veo 3.1 dans Flow. Un plan Lite coûte un cinquième des crédits offerts chaque jour.",
      source: "https://support.google.com/flow/answer/16526234?hl=en",
      capturedAt: CAPTURE,
      width: 832,
      height: 840,
    },
    {
      type: "table",
      caption: "Notre scène de 24 secondes, un seul essai, sans reprise",
      headers: ["Modèle et réglage", "Calcul", "Coût d'un essai"],
      rows: [
        ["Seedance 2.5, 480p (API)", "24 s x 0,103 $", "2,47 $"],
        ["Seedance 2.5, 720p (API)", "24 s x 0,231 $", "5,54 $"],
        ["Seedance 2.5, 1080p (API)", "24 s x 0,569 $", "13,66 $"],
        ["Veo 3.1 Lite (Flow)", "3 plans x 10 crédits", "30 crédits, dans le gratuit du jour"],
        ["Veo 3.1 Fast (Flow)", "3 plans x 20 crédits", "60 crédits, plus que le gratuit du jour"],
        ["Veo 3.1 Quality (Flow)", "3 plans x 100 crédits", "300 crédits"],
      ],
      source: [
        { label: "BytePlus, exemples de prix", href: "https://docs.byteplus.com/en/docs/ModelArk/1544106" },
        { label: "Aide Google Flow, crédits", href: "https://support.google.com/flow/answer/16526234?hl=en" },
      ],
      verifieLe: "2026-10-25",
    },
    {
      type: "p",
      text: "Ce tableau compte un seul essai. Dans la vraie vie, tu refais un plan raté deux ou trois fois, donc multiplie. Chez Seedance, une reprise relance les 24 secondes entières, sauf si tu passes par l'édition. BytePlus prévoit aussi un **mode Draft** en 480p, facturé comme du 480p : tu valides le mouvement avant de payer la 1080p. Chez Veo, tu ne refais que le plan raté. Pour les abonnements, Google AI Pro coûte **21,99 € par mois** en France pour 1 000 crédits Flow, soit seize scènes en Fast, ou trois en Quality, toujours sans reprise.",
    },
    {
      type: "p",
      text: "Et Seedance sans passer par l'API ? Dreamina l'inclut dans ses offres. Le jour de ma capture, l'offre Basic coûtait 0,27 € le premier mois puis **13,99 € par mois**, pour 1 361 crédits. Les bandeaux « Seedance 2.5 from €0.01/sec » sont liés à cette promo de premier mois : je ne les prendrais pas comme prix de référence.",
    },
    {
      type: "screenshot",
      src: `${IMG}-dreamina-offres.webp`,
      alt: "Page Seedance 2.5 de Dreamina, section tarifs : offre Basic à 0,27 euro le premier mois puis 13,99 euros, Standard 18,60 puis 31 euros, Advanced 82,80 puis 138 euros, Ultra 270 puis 450 euros, bandeaux Seedance 2.5 from 0,01 et 0,04 euro la seconde",
      caption: "Les offres Dreamina affichées sur la page Seedance 2.5 : le prix à la seconde mis en avant dépend de la promo du premier mois.",
      source: "https://dreamina.capcut.com/seedance/seedance-2-5",
      capturedAt: CAPTURE,
      width: 1440,
      height: 650,
    },

    { type: "h2", id: "references-langues", text: "Références, audio et langue : les détails qui décident" },
    {
      type: "p",
      text: "Seedance 2.5 accepte jusqu'à 50 éléments par requête : 30 images, 10 vidéos et 10 audios. Il sait reprendre le mouvement de caméra d'une vidéo, la voix d'un extrait audio, un storyboard dessiné au trait ou un modèle 3D en pâte grise. Veo 3.1 prend jusqu'à 3 images de référence, pour garder l'apparence d'un personnage ou d'un objet. Si ton projet repose sur des planches de storyboard ou une vidéo de référence, Seedance a une longueur d'avance.",
    },
    {
      type: "p",
      text: "Pour le son, les deux génèrent l'audio avec l'image. Le guide de Seedance permet en plus des consignes négatives sur le son (pas de musique, pas de dialogue) et l'édition de l'audio d'une vidéo existante. Chez Veo, l'audio est toujours actif et se dirige dans le prompt : réplique entre guillemets, bruitages décrits, ambiance nommée.",
    },
    {
      type: "p",
      text: "La langue piège souvent les francophones. BytePlus annonce 11 langues pour Seedance 2.5 (chinois, anglais, espagnol, indonésien, malais, thaï, arabe, portugais, vietnamien, japonais, coréen) : le français n'y est pas. Google écrit que l'anglais est pleinement pris en charge par Veo et que les autres langues « peuvent varier ». Dans les deux cas, écris ta description en anglais et teste tes répliques françaises sur un plan court avant de lancer la scène entière.",
    },
    {
      type: "p",
      text: "Dernier point, les visages. En Europe, au Royaume-Uni et en Suisse, l'API de Veo n'autorisait que la génération d'adultes (« allow_adult »). Côté Seedance, TechCrunch rapportait en mars 2026 que CapCut bloquait les visages réels en entrée. Si ta scène repose sur une vraie personne filmée, vérifie la règle de l'app que tu utilises avant de payer.",
    },

    { type: "h2", id: "choisir", text: "Choisis Seedance si, choisis Veo si" },
    {
      type: "p",
      text: "Choisis Seedance 2.5 si tu écris des scènes et non des plans isolés, si tu travailles à partir d'un storyboard, d'une vidéo de référence ou d'un décor 3D, et si 1080p te suffit. C'est le modèle qui se rapproche le plus d'un découpage de tournage. Je l'ai utilisé, dans sa version 2, pour fabriquer Lost Garden, avec d'autres outils.",
    },
    {
      type: "p",
      text: "Prends plutôt Veo 3.1 si tu débutes et veux apprendre sans sortir la carte bancaire, si tu livres des plans courts (pub, réseaux, inserts), ou si tu as besoin de la 4K. Avec 50 crédits par jour, tu peux lancer cinq plans Lite quotidiens : c'est la meilleure école gratuite que je connaisse pour comprendre l'effet d'un mot de caméra sur l'image.",
    },
    {
      type: "p",
      text: "Et si ton but est un film de plusieurs minutes sans méthode, aucun des deux ne suffira. Avec 30 secondes ou avec 8, tes personnages doivent rester les mêmes sur cinquante plans. Ce problème-là se règle en amont, dans l'écriture et la préparation. Pour voir comment ces modèles se placent face aux autres, notre classement des [meilleurs outils vidéo IA](/blog/meilleurs-outils-ia-video) reste le point de départ.",
    },
    {
      type: "screenshot",
      src: `${IMG}-veo-page-modele.webp`,
      alt: "Page modèle Veo de Google DeepMind : plan nocturne d'une voiture rouge devant un diner éclairé au néon dans la brume, titre Veo, sous-titre Our leading video generation model, boutons Try in Gemini, Try in Google Flow et Build with Veo",
      caption: "La page modèle de Veo chez Google DeepMind, avec ses trois portes d'entrée. Le bouton Gemini mène aujourd'hui à Omni : pour Veo 3.1, passe par Flow.",
      source: "https://deepmind.google/models/veo/",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },

    {
      type: "p",
      text: "Si ta scène de 24 secondes doit devenir un court métrage, le choix du modèle passe après l'organisation : le scénario, le découpage, les fiches de personnages. C'est ce que fait ScreenWeaver, dont je suis co-fondateur : tu écris, il découpe en plans, puis tu génères chaque plan avec Seedance 2.5 ou Veo 3.1 sans quitter le projet. L'éditeur de scénario est gratuit, la production démarre avec l'offre Auteur à 39,99 $ par mois.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "seedance",
      title: "Seedance et Veo dans le même projet",
      text: "Écris ta scène, découpe-la en plans, puis choisis le modèle plan par plan.",
    },

    {
      type: "methodology",
      date: "2026-10-25",
      text: [
        "J'ai relu le 25 octobre 2026, depuis la France et sans me connecter, les pages officielles des deux modèles : pour Seedance, la page de ByteDance Seed, le tutoriel, le guide de prompt et la grille de prix de BytePlus ModelArk, et la page Seedance 2.5 de Dreamina ; pour Veo, la page DeepMind, la documentation Veo et la page des abandons de l'API Gemini, la page vidéo de l'app Gemini, les abonnements Google AI et l'aide Google Flow (crédits et fonctions). Les captures viennent de ces pages, prises le même jour, bandeaux de cookies refusés ou masqués.",
        "Les prompts de la scène de la libraire sont écrits en suivant chaque guide officiel. Ils n'ont pas été lancés. Je suis co-fondateur de ScreenWeaver, cité en fin d'article ; Seedance et Veo n'ont aucun lien commercial avec moi et aucun lien de cet article n'est affilié.",
      ],
      teste: ["La lecture des guides, grilles de prix et pages d'aide officielles, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée avec Seedance 2.5 ni avec Veo 3.1 pour cet article",
        "La 4K annoncée par Dreamina pour Seedance 2.5",
        "Les tarifs Veo de la plateforme entreprise Google Cloud",
        "Le rendu d'une réplique en français dans chaque modèle",
      ],
      sources: [
        { label: "ByteDance Seed, Seedance 2.5", href: "https://seed.bytedance.com/en/seedance2_5" },
        { label: "BytePlus, guide de prompt Seedance 2.5", href: "https://docs.byteplus.com/en/docs/modelark/seedance-2-5-prompt-guide" },
        { label: "Gemini API, abandons", href: "https://ai.google.dev/gemini-api/docs/deprecations" },
        { label: "Gemini, génération vidéo", href: "https://gemini.google/overview/video-generation/" },
        { label: "Aide Google Flow, fonctions par modèle", href: "https://support.google.com/flow/answer/16352836?hl=en" },
        { label: "Abonnements Google AI (France)", href: "https://gemini.google/subscriptions/" },
        { label: "TechCrunch, Seedance 2.0 dans CapCut", href: "https://techcrunch.com/2026/03/26/bytedances-new-ai-video-generation-model-dreamina-seedance-2-0-comes-to-capcut/" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Seedance ou Veo : lequel choisir pour débuter ?" },
    {
      type: "p",
      text: "Pour apprendre sans payer, Veo 3.1 dans Google Flow : 50 crédits gratuits par jour, et un plan Lite de 8 secondes en coûte 10. Pour raconter une scène de 20 à 30 secondes d'une seule traite, Seedance 2.5, mais il faut un abonnement Dreamina ou un accès API.",
    },
    { type: "h3", id: "faq-2", text: "Veo 3.1 est-il encore disponible ?" },
    {
      type: "p",
      text: "Oui dans Google Flow (Lite, Fast et Quality). Dans l'app Gemini, Google écrit que Gemini Omni 1.1 Flash remplace désormais Veo 3.1. Et dans l'API Gemini, les trois modèles Veo 3.1 en preview ont une date d'arrêt au 22 octobre 2026, avec Omni 1.1 Flash comme remplaçant.",
    },
    { type: "h3", id: "faq-3", text: "Seedance 2.5 sort-il en 4K ?" },
    {
      type: "p",
      text: "Pas sur l'API officielle de BytePlus : la grille du 25 octobre 2026 indique 480p, 720p et 1080p, et « Not supported » pour la 4K. Dreamina affiche des vidéos 4K sur sa page Seedance 2.5, sans préciser les conditions. Chez ByteDance, la 4K ne figure que dans la grille de Seedance 2.0.",
    },
    { type: "h3", id: "faq-4", text: "Quelle durée maximale pour chaque modèle ?" },
    {
      type: "p",
      text: "Seedance 2.5 génère de 4 à 30 secondes en une fois, avec une extension possible. Veo 3.1 génère 4, 6 ou 8 secondes ; dans Flow, un plan de 8 secondes peut être prolongé avec Veo 3.1 Lite.",
    },
    { type: "h3", id: "faq-5", text: "Peut-on écrire ses prompts en français ?" },
    {
      type: "p",
      text: "Le français ne figure pas dans les 11 langues que BytePlus annonce pour Seedance 2.5. Google indique que l'anglais est pleinement pris en charge par Veo et que les autres langues peuvent varier. Écris la description en anglais et garde une réplique française courte si ta scène en a besoin.",
    },
    { type: "h3", id: "faq-6", text: "Combien coûte une scène de 24 secondes ?" },
    {
      type: "p",
      text: "Avec Seedance 2.5 sur l'API BytePlus, environ 5,54 $ en 720p et 13,66 $ en 1080p par essai. Avec Veo 3.1 dans Flow, trois plans de 8 secondes coûtent 30 crédits en Lite, 60 en Fast et 300 en Quality, hors reprises.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-25 -->
