import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-27";
const IMG = "/images/articles";

export const dreaminaVsCapcut: Article = {
  title: "Dreamina vs CapCut : laquelle choisir et pourquoi",
  slug: "dreamina-vs-capcut",
  description:
    "Dreamina génère, CapCut monte. Les deux viennent de ByteDance et vendent Seedance 2.5, avec deux abonnements distincts. Prix et usages au 27 octobre 2026.",
  excerpt:
    "Même maison mère, même modèle Seedance 2.5, deux usages et deux factures. Dreamina sert à fabriquer des plans, CapCut à les assembler. Voici comment choisir, et quand garder les deux.",
  category: "ia-video",
  tags: ["dreamina", "capcut", "seedance", "bytedance", "montage vidéo", "vidéo ia"],
  date: "2026-10-27",
  updatedAt: "2026-10-27",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/dreamina-vs-capcut.webp",
  imageAlt:
    "Sur un marché de village un matin d'automne, une fromagère aux cheveux gris en gilet moutarde filme une meule de comté avec son téléphone sur une poignée, pendant que son fils en sweat vert, assis sur une caisse, monte la vidéo sur son propre téléphone",
  keywords: ["dreamina vs capcut", "dreamina ou capcut", "dreamina capcut différence", "seedance capcut", "dreamina prix"],
  relatedSlugs: ["capcut-ia-fonctions", "seedance-guide", "monter-video-ia-capcut-davinci"],
  faq: [
    {
      question: "Dreamina et CapCut, c'est la même chose ?",
      answer:
        "Non. Les deux appartiennent à ByteDance et CapCut liste Dreamina dans son propre menu Produits, mais ce sont deux services séparés : Dreamina est une plateforme web de génération d'images et de vidéos, CapCut est un éditeur vidéo (mobile, web, ordinateur, tablette) qui intègre aussi de la génération.",
    },
    {
      question: "Où trouver Seedance 2.5 : dans Dreamina ou dans CapCut ?",
      answer:
        "Dans les deux. Dreamina le propose comme un modèle à choisir, avec jusqu'à 30 secondes par génération, un mode vidéo longue en bêta jusqu'à 180 secondes et jusqu'à 50 références. CapCut l'utilise dans son créateur vidéo IA, qui part d'un script, d'un style et d'une voix off, puis te laisse retoucher le résultat dans la timeline.",
    },
    {
      question: "Un abonnement CapCut Pro donne-t-il accès à Dreamina ?",
      answer:
        "Rien ne le dit. Au 27 octobre 2026, les deux services ont chacun leur page de tarifs, leurs offres et leur nombre de crédits, et aucune des deux pages ne dit qu'un abonnement ouvre l'autre. Vérifie dans ton compte avant de payer deux fois.",
    },
    {
      question: "Combien coûtent Dreamina et CapCut ?",
      answer:
        "Relevé du 27 octobre 2026 en France. Dreamina : Basic 13,99 € par mois (0,27 € le premier mois par carte ou PayPal) pour 1 361 crédits, Standard 31 €, Advanced 138 €, Ultra 450 €. CapCut : Pro 23,99 € par mois avec 1 400 crédits IA, Ultra 68 € avec 7 483 crédits, Équipes dès 14,99 € par poste. CapCut précise que ses prix sont indicatifs.",
    },
    {
      question: "Les vidéos ont-elles un filigrane ?",
      answer:
        "Chez Dreamina, la suppression du filigrane au téléchargement figure dans les avantages des offres payantes. Chez CapCut, la note de lancement de Seedance 2.0 annonce un filigrane visible, des Content Credentials C2PA et un filigrane invisible sur les contenus générés par IA.",
    },
    {
      question: "Pour débuter en vidéo IA, je prends lequel ?",
      answer:
        "Si tu veux apprendre à générer des plans et comparer des modèles, Dreamina. Si tu veux publier vite des vidéos courtes avec sous-titres, musique et voix, CapCut. Le duo le plus logique reste de générer dans Dreamina et de monter dans CapCut, en commençant par le gratuit des deux.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Dreamina sert à **générer** des images et des plans vidéo. CapCut sert à monter : couper, sous-titrer, ajouter la voix et la musique, exporter pour TikTok ou Reels. Les deux appartiennent à ByteDance et les deux vendent Seedance 2.5, ce qui entretient la confusion. Mais au 27 octobre 2026, ce sont deux abonnements séparés, avec deux grilles de prix et deux réserves de crédits. Tu veux fabriquer des plans ? Dreamina. Tu veux sortir une vidéo finie ce soir ? CapCut. Et si tu fais les deux, garde les deux, en commençant par le gratuit.",
    },

    { type: "h2", id: "verdict", text: "Le verdict en deux minutes" },
    {
      type: "verdict",
      title: "Dreamina ou CapCut, pour qui ?",
      pourQui:
        "Dreamina pour qui veut apprendre à générer des plans et tester plusieurs modèles. CapCut pour qui publie des vidéos courtes et veut un montage complet, sur téléphone comme sur ordinateur.",
      forts: [
        "Dreamina : Seedance 2.5 jusqu'à **30 s** par génération, 180 s en bêta, 50 références",
        "Dreamina : Veo 3.1, Sora 2, Nano Banana et Seedream sous le même compte",
        "CapCut : un vrai éditeur multipiste, avec sous-titres auto, voix et musique",
        "CapCut : génération Seedance guidée à partir d'un script, puis retouche dans la timeline",
      ],
      faibles: [
        "Dreamina : aucun montage, il faut un éditeur à côté",
        "CapCut : la génération passe par des parcours tout faits, moins de contrôle plan par plan",
        "Deux abonnements, deux crédits : rien n'indique qu'ils se partagent",
        "Prix d'appel du premier mois très bas chez Dreamina, renouvellement plein tarif ensuite",
      ],
      verdict:
        "Pour générer, Dreamina. Pour finir et publier, CapCut. La plupart des créateurs vidéo IA finiront avec les deux, et le gratuit des deux suffit pour démarrer.",
    },
    {
      type: "comparison",
      caption: "Dreamina et CapCut côte à côte",
      headers: ["Critère", "Dreamina", "CapCut"],
      rows: [
        ["Rôle", "Génération image, vidéo, avatar", "Montage vidéo, plus génération intégrée"],
        ["Supports", "Navigateur", "Mobile, web, ordinateur, tablette"],
        ["Seedance 2.5", "Modèle à choisir, 30 s, 180 s en bêta", "Créateur vidéo IA à partir d'un script"],
        ["Autres modèles", "Veo 3.1, Sora 2, Nano Banana, Seedream", "Nano Banana Pro, Gemini Omni, Seedream 5.0 (menus)"],
        ["Offre d'entrée", "Basic 13,99 €/mois, 1 361 crédits", "Pro 23,99 €/mois, 1 400 crédits"],
        ["Gros volume", "Ultra 450 €/mois, 51 067 crédits", "Ultra 68 €/mois, 7 483 crédits"],
        ["Gratuit", "Oui, crédits limités", "Oui, outils d'édition de base"],
      ],
      source: [
        { label: "Dreamina Pricing", href: "https://dreamina.capcut.com/pricing/dreamina-price" },
        { label: "CapCut, Choisis ton forfait", href: "https://www.capcut.com/fr-fr/pricing" },
      ],
      verifieLe: "2026-10-27",
      note: "Prix mensuels en euros affichés depuis la France, hors remise du premier mois. CapCut indique que le prix final, les taxes et les offres dépendent du compte connecté.",
    },

    { type: "h2", id: "meme-maison", text: "Dreamina et CapCut, c'est la même entreprise ?" },
    {
      type: "p",
      text: "Oui. Dreamina est édité par l'équipe CapCut, dans le groupe ByteDance (celui de TikTok). CapCut ne le cache pas : ouvre le menu Produits de son site et tu trouves, à côté de CapCut pour ordinateur, en ligne, Pad et mobile, une carte « Dreamina IA, outil de création d'images et de vidéos ». Même famille, donc. Mais ce sont deux services distincts, avec deux adresses (capcut.com et dreamina.capcut.com) et deux pages de tarifs.",
    },
    {
      type: "screenshot",
      src: `${IMG}/capcut-menu-produits-${CAPTURE}.webp`,
      alt: "Menu Produits du site CapCut ouvert : cartes CapCut pour ordinateur, CapCut en ligne, CapCut Pad, CapCut sur mobile, Plugin CapCut x Codex, Dreamina IA et Pippit AI",
      caption: "Dreamina apparaît comme un produit de la gamme CapCut, au même niveau que les versions mobile et ordinateur de l'éditeur.",
      source: "https://www.capcut.com/fr-fr/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 340,
    },
    {
      type: "p",
      text: "La confusion a une cause précise : Seedance. Le modèle vidéo de ByteDance porte le nom « Dreamina Seedance », il est vendu dans Dreamina, et il est aussi branché dans CapCut. Quand tu lis « Dreamina Seedance 2.5 » dans le menu de CapCut, tu lis le nom du modèle. La plateforme Dreamina, elle, se paie à part. J'ai détaillé le modèle lui-même dans mon [guide Seedance](/blog/seedance-guide).",
    },

    { type: "h2", id: "dreamina", text: "Dreamina : une plateforme pour fabriquer des plans" },
    {
      type: "p",
      text: "Dreamina se présente comme une plateforme « tout-en-un » de création d'images et de vidéos, avec plusieurs modèles. Concrètement, tu choisis un outil (vidéo IA, image IA, avatar, Marketing studio), un modèle, tu écris ton prompt ou tu ajoutes tes références, et tu génères. Pas de timeline, pas de piste audio à caler, pas d'export vertical avec sous-titres. Tu récupères des fichiers.",
    },
    {
      type: "screenshot",
      src: `${IMG}/dreamina-seedance-2-5-${CAPTURE}.webp`,
      alt: "Page Seedance 2.5 de Dreamina : titre Seedance 2.5 AI Video Generator with Audio, champ de prompt avec le modèle Dreamina Seedance 2.5 sélectionné, boutons Try Seedream 4.0, Try Veo 3.1, Try Nano Banana et Try Sora 2 Pro",
      caption: "Sous le champ de prompt, Dreamina propose d'autres modèles que Seedance : Veo 3.1, Nano Banana, Sora 2 Pro. La page est assombrie par la fenêtre de connexion, masquée pour la capture.",
      source: "https://dreamina.capcut.com/seedance/seedance-2-5",
      capturedAt: CAPTURE,
      width: 1440,
      height: 850,
    },
    {
      type: "p",
      text: "C'est là que Dreamina devient intéressant pour apprendre. Tu peux lancer le même prompt avec Seedance, puis Veo 3.1, et voir comment chaque modèle comprend un mouvement de caméra ou un jeu d'acteur. Mon [comparatif Seedance vs Veo](/blog/seedance-vs-veo) montre justement ce qui change d'un modèle à l'autre sur une même scène. Côté image, la page tarifs cite Seedream, Nano Banana Pro et GPT Image 2.5.",
    },

    { type: "h2", id: "capcut", text: "CapCut : un éditeur qui génère aussi" },
    {
      type: "p",
      text: "CapCut part de l'autre bout. C'est d'abord un éditeur vidéo, disponible sur téléphone, dans le navigateur, sur ordinateur et sur tablette. Tu importes tes rushes, tu coupes, tu ajoutes des sous-titres automatiques, une voix de synthèse, une musique, et tu exportes au bon format. Je t'ai listé [les fonctions IA de CapCut qui font gagner du temps](/blog/capcut-ia-fonctions) dans un article à part.",
    },
    {
      type: "p",
      text: "La génération est arrivée par-dessus. La page « Générateur vidéo Seedance 2,5 IA » décrit le parcours : dans CapCut en ligne, tu ouvres « Créateur vidéo IA », puis « Vidéo IA instantanée », tu choisis un style (film réaliste, dessin animé 3D, cinématique), tu colles ton script ou tu en fais écrire un, tu règles le format, la voix off et la durée. CapCut assemble, et tu retouches ensuite les visuels, le rythme, la musique et les sous-titres avant l'export.",
    },
    {
      type: "gallery",
      caption: "Deux portes d'entrée vers la génération dans CapCut, relevées le même jour.",
      items: [
        {
          src: `${IMG}/capcut-generateur-seedance-${CAPTURE}.webp`,
          alt: "Page CapCut Générateur vidéo Seedance 2,5 IA : phrase Seedance 2,5 est déjà disponible dans le monde entier, champ de prompt pour une vidéo de promotion de produit, boutons Télécharger l'image, Vidéo et Générer une vidéo IA",
          caption: "Le générateur Seedance 2.5 de CapCut, pensé pour la pub produit et les vidéos à partager.",
          source: "https://www.capcut.com/fr-fr/tools/ai-video-generator",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
        {
          src: `${IMG}/capcut-script-video-${CAPTURE}.webp`,
          alt: "Page AI Script to Video Maker de CapCut avec une illustration montrant un module Generate script, un astronaute dans un paysage et une piste audio sur une timeline",
          caption: "Le script vers vidéo de CapCut écrit un texte en mode Narration ou Commercial, puis l'illustre avec des plans de banque d'images.",
          source: "https://www.capcut.com/tools/script-to-video-maker",
          capturedAt: CAPTURE,
          width: 1440,
          height: 620,
        },
      ],
    },
    {
      type: "p",
      text: "Attention à ne pas confondre ces deux outils. Le script vers vidéo classique de CapCut assemble surtout des **plans de banque d'images** (la page le dit : « relevant stock footage »). Le créateur vidéo IA, lui, génère avec Seedance 2.5. Le premier va bien pour une vidéo explicative rapide, le second pour des images qui n'existent nulle part ailleurs.",
    },

    { type: "h2", id: "seedance", text: "Où se trouve Seedance dans chacun ?" },
    {
      type: "p",
      text: "Dans Dreamina, Seedance 2.5 est un modèle que tu pilotes directement. La page officielle annonce jusqu'à **30 secondes** en mode standard, jusqu'à **180 secondes** avec le mode vidéo longue en bêta, jusqu'à 50 références (texte, script, photos, vidéos, musique, guide de style), des références « white model » ou fond vert, et la retouche d'une zone de la vidéo sans tout régénérer.",
    },
    {
      type: "screenshot",
      src: `${IMG}/dreamina-30-secondes-${CAPTURE}.webp`,
      alt: "Bloc Generate longer 30-second videos with stable continuity sur la page Seedance 2.5 de Dreamina, avec une grille de photos de personnages vus de face, de profil et de dos",
      caption: "Dreamina annonce 30 secondes en mode standard et 180 secondes en mode vidéo longue, encore en bêta.",
      source: "https://dreamina.capcut.com/seedance/seedance-2-5",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Dans CapCut, Seedance travaille en coulisses d'un parcours guidé : script, style, voix, durée, puis montage. Tu gagnes du temps, tu perds la main sur chaque plan. Pour une vidéo de 30 secondes qui présente ta boutique, c'est parfait. Pour un court métrage où le même personnage doit garder son visage sur douze plans, je préfère générer chaque plan à part, dans Dreamina ou ailleurs, puis monter.",
    },
    {
      type: "p",
      text: "Les deux affichent un prix à la seconde pour Seedance 2.5, mais pas dans la même devise. CapCut annonce « à partir de 0,12 $/s » en Pro et « à partir de 0,18 $/s » en Ultra, au premier mois. Dreamina affiche, sur l'onglet mensuel, « from €0.14/sec » en Standard, « from €0.09/sec » en Advanced et « from €0.07/sec » en Ultra, avec des remises en crédits à 720p. Ces prix « à partir de » dépendent de promotions datées : compare-les le jour où tu paies, pas sur un article.",
    },

    { type: "h2", id: "prix", text: "Prix : deux abonnements, deux réserves de crédits" },
    {
      type: "comparison",
      caption: "Les offres mensuelles de Dreamina et de CapCut",
      headers: ["Offre", "Prix du 1er mois", "Ensuite / mois", "Crédits / mois"],
      rows: [
        ["Dreamina Basic", "0,27 €", "13,99 €", "1 361"],
        ["Dreamina Standard", "18,60 €", "31 €", "3 336"],
        ["Dreamina Advanced", "69 €", "138 €", "15 234"],
        ["Dreamina Ultra", "225 €", "450 €", "51 067"],
        ["CapCut Pro", "23,99 €", "23,99 €", "1 400"],
        ["CapCut Ultra", "68 €", "68 €", "7 483"],
        ["CapCut Équipes", "14,99 € / poste", "14,99 € / poste", "1 400 / poste"],
      ],
      source: [
        { label: "Dreamina Pricing", href: "https://dreamina.capcut.com/pricing/dreamina-price" },
        { label: "CapCut, Choisis ton forfait", href: "https://www.capcut.com/fr-fr/pricing" },
      ],
      verifieLe: "2026-10-27",
      note: "Dreamina : 0,27 € seulement par carte, débit ou PayPal (13,99 € par les autres moyens), offre affichée jusqu'au 30 octobre ; Advanced au palier 15.2K par défaut (curseur de 7.5K à 30.7K). CapCut : prix de référence, mensuel, 2 postes pour Équipes.",
    },
    {
      type: "screenshot",
      src: `${IMG}/dreamina-tarifs-${CAPTURE}.webp`,
      alt: "Onglet mensuel de la page tarifs Dreamina : Basic 0,27 € puis 13,99 € et 1361 crédits, Standard 18,60 € puis 31 € et 3336 crédits, Advanced 69 € puis 138 € et 15234 crédits, Ultra 225 € puis 450 € et 51067 crédits",
      caption: "Le prix d'appel du premier mois cache le vrai tarif : lis toujours la ligne « then EUR » sous le gros chiffre.",
      source: "https://dreamina.capcut.com/pricing/dreamina-price",
      capturedAt: CAPTURE,
      width: 1440,
      height: 720,
    },
    {
      type: "p",
      text: "**Les prix d'appel de Dreamina trompent** si tu ne lis pas la ligne du dessous : Basic à 0,27 €, c'est le premier mois, et seulement par carte ou PayPal. Le mois suivant, c'est 13,99 €. Mets un rappel dans ton agenda le jour où tu t'abonnes.",
    },
    {
      type: "p",
      text: "Autre détail : CapCut Ultra donne 7 483 crédits, exactement le palier « 7.5K » de l'offre Advanced chez Dreamina (relevé du 16 octobre dans ma fiche Dreamina). Même groupe, même unité de compte apparente. Pourtant, aucune des deux pages ne dit qu'un abonnement ouvre l'autre service, ni que les crédits passent d'une app à l'autre. Je n'ai rien trouvé de tel dans l'aide de CapCut non plus. Considère-les comme séparés tant que ton compte ne te prouve pas le contraire.",
    },
    {
      type: "screenshot",
      src: `${IMG}/capcut-tarifs-${CAPTURE}.webp`,
      alt: "Page Choisis ton forfait de CapCut : Gratuit 0 euro, Pro 23,99 euros par mois, Ultra 68 euros par mois, Forfait Équipes 14,99 euros par mois par poste, avec Seedance 2.5 à partir de 0,12 dollar par seconde",
      caption: "Chez CapCut, l'abonnement paie d'abord l'éditeur : Seedance 2.5 et les crédits IA viennent en plus des fonctions Pro.",
      source: "https://www.capcut.com/fr-fr/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "À crédits presque égaux, Dreamina Basic (1 361 crédits, 13,99 €) coûte 10 € de moins que CapCut Pro (1 400 crédits, 23,99 €). Sauf que CapCut Pro paie aussi l'éditeur, ses effets et ses modèles premium. Si tu montes déjà dans un autre logiciel, comme DaVinci Resolve, Dreamina est le choix le plus économique pour générer. J'explique comment [monter une vidéo IA dans CapCut ou DaVinci](/blog/monter-video-ia-capcut-davinci) si tu hésites sur l'éditeur.",
    },

    { type: "h2", id: "filigrane", text: "Filigrane et usage commercial : ce que disent les deux" },
    {
      type: "p",
      text: "Côté Dreamina, chaque offre payante liste « Remove the Dreamina watermark in downloads ». Le gratuit garde donc le filigrane au téléchargement. Pour l'usage commercial, la FAQ des tarifs reste vague : l'éligibilité dépend des conditions d'utilisation, du contenu créé, des modèles et des éléments utilisés. Les conditions servies sur dreamina.capcut.com sont celles de CapCut (mise à jour du 15 avril 2026), qui précisent que l'usage commercial du contenu fourni « peut varier selon le produit CapCut ».",
    },
    {
      type: "screenshot",
      src: `${IMG}/capcut-filigrane-c2pa-${CAPTURE}.webp`,
      alt: "Note de CapCut sur le lancement de Dreamina Seedance 2.0 : filigrane invisible, étiquetage des contenus IA par filigrane visible et Content Credentials C2PA, modération et propriété intellectuelle",
      caption: "La note de lancement de Seedance 2.0 dans CapCut annonce un filigrane visible, des Content Credentials C2PA et un filigrane invisible sur les contenus générés.",
      source: "https://www.capcut.com/newsroom/dreamina-seedance-2",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Côté CapCut, deux règles à connaître si tu fais de la pub. La note de lancement de Seedance 2.0 annonce un filigrane visible, des Content Credentials C2PA et un filigrane invisible sur les contenus générés par IA. Et l'accord de licence des éléments de CapCut (mis à jour le 22 janvier 2026) ne permet un usage commercial limité qu'avec les éléments marqués « Dual Use ». Un projet qui mélange un élément commercial et un élément non commercial devient entièrement non commercial. Ce texte ne parle pas des contenus générés par IA : pour un client, relis les conditions le jour de la livraison.",
    },

    { type: "h2", id: "workflow", text: "Le duo qui marche : générer dans Dreamina, monter dans CapCut" },
    {
      type: "p",
      text: "Prends un cas simple : une vidéo verticale de 45 secondes pour présenter un fromager sur son marché du dimanche. Je m'y prendrais dans cet ordre.",
    },
    {
      type: "ol",
      items: [
        "**Écris le découpage avant d'ouvrir une app.** Six plans de 5 à 8 secondes : l'étal au lever du jour, la coupe d'une meule, les mains qui emballent, le client qui goûte, l'ardoise des prix, le stand vu de loin. Le texte de la voix off tient en 90 mots.",
        "**Filme ce que tu peux filmer.** La coupe de la meule et les mains au vrai téléphone. L'IA ne fait pas mieux qu'un vrai fromage.",
        "**Génère dans Dreamina ce qui manque.** Le lever du jour sur la place, le plan large du marché. Seedance 2.5 si tu as besoin de références (photo du vrai stand), un plan à la fois, en 720p pour valider avant de dépenser en 1080p.",
        "**Monte dans CapCut.** Importe les rushes et les plans générés, cale la voix off, ajoute les sous-titres automatiques, la musique, exporte en 9:16.",
        "**Vérifie le filigrane avant de publier.** Si tu es en gratuit chez Dreamina, il sera dans le fichier. Paye un mois de Basic pour les exports finaux, puis résilie si tu n'en as plus besoin.",
      ],
    },
    {
      type: "p",
      text: "Le piège classique, c'est de tout demander à un seul outil. Dreamina ne sait pas monter, et le créateur vidéo IA de CapCut découpe les scènes à ta place. En séparant les deux étapes, tu gardes le contrôle sur les images et sur le rythme. Pour les sous-titres, mon guide des [sous-titres automatiques](/blog/sous-titres-automatiques-ia-video) compare CapCut aux autres options.",
    },

    { type: "h2", id: "choisir", text: "Choisis Dreamina si… choisis CapCut si…" },
    { type: "h3", id: "choisir-dreamina", text: "Dreamina si" },
    {
      type: "ul",
      items: [
        "Tu veux apprendre la génération vidéo et image, prompt par prompt.",
        "Tu veux comparer Seedance, Veo 3.1 et Sora 2 sans changer de compte.",
        "Tu as besoin de plans de plus de 15 secondes ou de beaucoup de références.",
        "Tu montes déjà dans un autre logiciel (DaVinci Resolve, Premiere, Final Cut).",
      ],
    },
    { type: "h3", id: "choisir-capcut", text: "CapCut si" },
    {
      type: "ul",
      items: [
        "Tu publies surtout des vidéos courtes pour TikTok, Reels ou Shorts.",
        "Tu travailles beaucoup sur téléphone.",
        "Tu veux une vidéo finie à partir d'un script, sans gérer chaque plan.",
        "Tu as besoin des sous-titres automatiques, de voix de synthèse et de modèles prêts à l'emploi.",
      ],
    },
    {
      type: "p",
      text: "Et si tu cherches à comparer des modèles qui ne viennent pas tous de ByteDance, avec un prix affiché avant chaque génération, il existe une troisième voie. Je la cite avec un conflit d'intérêts à déclarer : j'ai créé Imaginode. C'est un canvas à nodes où tu relies texte, image, vidéo et voix, avec plus de 100 modèles (Seedance 2.5 et 2.0, mais aussi Kling V3, Veo 3.1 Fast, MiniMax H3, Wan 3.0), et une génération ratée y est remboursée en crédits. Il ne remplace pas un éditeur comme CapCut : pour le montage final, il te faudra quand même une timeline.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Compare Seedance aux autres modèles sur le même prompt",
      text: "Branche un même prompt sur plusieurs modèles vidéo, vois le prix en crédits avant de lancer, garde le meilleur plan.",
    },

    {
      type: "methodology",
      date: "2026-10-27",
      text: [
        "J'ai lu le 27 octobre 2026, depuis la France et sans me connecter, les pages publiques de Dreamina (tarifs onglet mensuel, page Seedance 2.5, FAQ tarifs) et de CapCut (tarifs en français, menu Produits, générateur vidéo Seedance 2.5, script vers vidéo, note de lancement de Seedance 2.0), puis l'accord de licence des éléments de CapCut et les conditions servies par dreamina.capcut.com. Les huit captures viennent de ces pages, le même jour ; la fenêtre de connexion de Dreamina a été masquée, jamais validée, et le bandeau de cookies n'a pas été accepté.",
        "Le palier Advanced 7.5K de Dreamina (7 483 crédits) vient de ma fiche du 16 octobre ; le jour de la capture, la page affichait le palier 15.2K par défaut. J'ai créé Imaginode, citée en fin d'article ; pour elle, je ne cite que des fonctions en production.",
      ],
      teste: ["La lecture des pages officielles et des grilles de prix, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée dans Dreamina ni dans CapCut",
        "Le partage éventuel des crédits ou de l'abonnement entre les deux services, non documenté",
        "Le nombre exact de crédits gratuits par jour, visible seulement après connexion",
      ],
      sources: [
        { label: "Dreamina Pricing", href: "https://dreamina.capcut.com/pricing/dreamina-price" },
        { label: "Dreamina, Seedance 2.5", href: "https://dreamina.capcut.com/seedance/seedance-2-5" },
        { label: "CapCut, Choisis ton forfait", href: "https://www.capcut.com/fr-fr/pricing" },
        { label: "CapCut, Générateur vidéo Seedance 2,5 IA", href: "https://www.capcut.com/fr-fr/tools/ai-video-generator" },
        { label: "CapCut Newsroom, Dreamina Seedance 2.0", href: "https://www.capcut.com/newsroom/dreamina-seedance-2" },
        { label: "CapCut Materials License Agreement", href: "https://www.capcut.com/clause/material-license-agreement" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Dreamina et CapCut, c'est la même chose ?" },
    {
      type: "p",
      text: "Non. Les deux appartiennent à ByteDance et CapCut liste Dreamina dans son propre menu Produits, mais ce sont deux services séparés : Dreamina est une plateforme web de génération d'images et de vidéos, CapCut est un éditeur vidéo (mobile, web, ordinateur, tablette) qui intègre aussi de la génération.",
    },
    { type: "h3", id: "faq-2", text: "Où trouver Seedance 2.5 : dans Dreamina ou dans CapCut ?" },
    {
      type: "p",
      text: "Dans les deux. Dreamina le propose comme un modèle à choisir, avec jusqu'à 30 secondes par génération, un mode vidéo longue en bêta jusqu'à 180 secondes et jusqu'à 50 références. CapCut l'utilise dans son créateur vidéo IA, qui part d'un script, d'un style et d'une voix off, puis te laisse retoucher le résultat dans la timeline.",
    },
    { type: "h3", id: "faq-3", text: "Un abonnement CapCut Pro donne-t-il accès à Dreamina ?" },
    {
      type: "p",
      text: "Rien ne le dit. Au 27 octobre 2026, les deux services ont chacun leur page de tarifs, leurs offres et leur nombre de crédits, et aucune des deux pages ne dit qu'un abonnement ouvre l'autre. Vérifie dans ton compte avant de payer deux fois.",
    },
    { type: "h3", id: "faq-4", text: "Combien coûtent Dreamina et CapCut ?" },
    {
      type: "p",
      text: "Relevé du 27 octobre 2026 en France. Dreamina : Basic 13,99 € par mois (0,27 € le premier mois par carte ou PayPal) pour 1 361 crédits, Standard 31 €, Advanced 138 €, Ultra 450 €. CapCut : Pro 23,99 € par mois avec 1 400 crédits IA, Ultra 68 € avec 7 483 crédits, Équipes dès 14,99 € par poste. CapCut précise que ses prix sont indicatifs.",
    },
    { type: "h3", id: "faq-5", text: "Les vidéos ont-elles un filigrane ?" },
    {
      type: "p",
      text: "Chez Dreamina, la suppression du filigrane au téléchargement figure dans les avantages des offres payantes. Chez CapCut, la note de lancement de Seedance 2.0 annonce un filigrane visible, des Content Credentials C2PA et un filigrane invisible sur les contenus générés par IA.",
    },
    { type: "h3", id: "faq-6", text: "Pour débuter en vidéo IA, je prends lequel ?" },
    {
      type: "p",
      text: "Si tu veux apprendre à générer des plans et comparer des modèles, Dreamina. Si tu veux publier vite des vidéos courtes avec sous-titres, musique et voix, CapCut. Le duo le plus logique reste de générer dans Dreamina et de monter dans CapCut, en commençant par le gratuit des deux.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-27 -->
