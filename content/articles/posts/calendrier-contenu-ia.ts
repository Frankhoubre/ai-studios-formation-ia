import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-15";
const IMG = "/images/articles/calendrier-contenu-ia";
const OPENAI_TACHES = "https://help.openai.com/fr-fr/articles/10291617-scheduled-tasks-in-chatgpt";
const META_PLANIFICATEUR = "https://www.facebook.com/business/help/1678733516458988";
const META_PUBLICATIONS = "https://www.facebook.com/business/help/942827662903020";
const WIKI_LIGNE_EDITORIALE = "https://fr.wikipedia.org/wiki/Ligne_%C3%A9ditoriale";

const FAQ = [
  {
    question: "Est-ce que ChatGPT peut faire mon calendrier de contenu tout seul ?",
    answer:
      "Il peut remplir un tableau de trente lignes en dix secondes, mais ces lignes seront génériques s'il ne sait rien de ton mois. Donne-lui ta matière réelle (nouveautés, coulisses, questions de clients, dates) et tes piliers, puis demande-lui des angles. Le choix final, la cadence et la relecture restent à toi.",
  },
  {
    question: "Quelles colonnes mettre dans un calendrier éditorial ?",
    answer:
      "Le minimum utile : date et heure, réseau, pilier, angle en une phrase, format, matière source, statut et une colonne de bilan. La colonne matière source est celle qui manque dans la plupart des modèles, et c'est elle qui empêche l'IA d'inventer des sujets hors sol.",
  },
  {
    question: "Combien de publications prévoir par semaine ?",
    answer:
      "Celles que tu peux produire chaque semaine sans sacrifier la qualité, pas plus. Compte le temps réel d'une publication (photo ou vidéo, texte, relecture), multiplie par ta cadence et compare avec les heures que tu as vraiment. Un rythme de trois posts tenu pendant trois mois apprend plus qu'un rythme de sept abandonné au bout de deux semaines.",
  },
  {
    question: "Peut-on programmer ses publications Facebook et Instagram gratuitement ?",
    answer:
      "Oui, avec Meta Business Suite. L'aide Meta explique qu'on choisit la date et l'heure dans les options de programmation, et que le Planificateur affiche publications, stories, reels et publicités en vue semaine ou mois. Il faut disposer des autorisations de contenu sur la Page ou le compte Instagram.",
  },
  {
    question: "Comment me rappeler de mettre à jour mon calendrier chaque semaine ?",
    answer:
      "Une tâche planifiée dans ChatGPT peut t'envoyer un rappel récurrent, par exemple chaque lundi matin. Selon l'aide OpenAI, l'offre Free autorise 3 tâches actives au maximum, avec une exécution au plus une fois par jour et des créneaux flexibles (matin, après-midi, nuit). L'heure précise demande une offre payante.",
  },
  {
    question: "Faut-il publier les textes que l'IA propose dans le calendrier ?",
    answer:
      "Non, pas tels quels. Utilise le calendrier pour décider quoi dire et quand, puis écris ou réécris chaque texte avec ta voix. Les textes générés en série se ressemblent tous et se repèrent vite. L'IA est bien plus utile pour trouver dix angles sur une même matière que pour écrire le post final.",
  },
];

export const calendrierContenuIa: Article = {
  title: "Calendrier de contenu IA : planifier un mois en une heure",
  slug: "calendrier-contenu-ia",
  description:
    "Calendrier de contenu IA : les colonnes qui comptent, le prompt qui part de ta vraie matière, une cadence tenable et la programmation gratuite chez Meta.",
  excerpt:
    "Tu demandes un calendrier éditorial à ChatGPT et tu récupères trente idées que n'importe quel compte pourrait publier. Le problème vient de ce que tu lui donnes. La méthode pour planifier un mois de contenu à partir de ta vraie matière, avec un tableau, un prompt et une cadence que tu tiendras.",
  category: "business-creatif",
  tags: ["calendrier éditorial", "réseaux sociaux", "ChatGPT", "Meta Business Suite", "planification"],
  date: "2026-11-15",
  updatedAt: "2026-11-15",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/calendrier-contenu-ia.webp",
  imageAlt:
    "Torréfaction artisanale un matin brumeux : un homme barbu en tablier dessine à la craie une grille de petits pictogrammes sur un grand tableau noir, pendant qu'une jeune femme en pull moutarde pèse du café à côté d'une tablette",
  keywords: [
    "calendrier contenu ia",
    "calendrier éditorial ia",
    "planifier contenu réseaux sociaux ia",
    "chatgpt calendrier éditorial",
    "planning publication réseaux sociaux",
  ],
  relatedSlugs: ["visuels-reseaux-sociaux-ia-mois", "ia-community-manager", "carrousel-instagram-ia"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu tapes « fais-moi un calendrier éditorial pour Instagram » dans ChatGPT, et trente secondes plus tard tu as un mois entier. Lundi motivation, mercredi astuce, vendredi coulisses. Le tableau est propre, et tu n'en publieras pas la moitié, parce qu'aucune ligne ne parle vraiment de toi.",
    },
    {
      type: "p",
      text: "Je te montre ici comment construire un calendrier de contenu avec l'IA qui part de ce que tu as réellement à raconter ce mois-ci : les colonnes à prévoir, le prompt, le calcul d'une cadence tenable, puis la programmation gratuite dans Meta Business Suite et un rappel hebdomadaire dans ChatGPT. On suit un exemple du début à la fin, une petite torréfaction qui publie sur Instagram.",
    },
    {
      type: "p",
      text: "Ma position : l'IA est très forte pour décliner une matière en angles, et mauvaise pour inventer la matière. Si tu inverses les rôles, tu obtiens un calendrier vide de sens, même bien rangé.",
    },
    { type: "h2", id: "core-concepts", text: "Ce qu'un calendrier de contenu IA doit planifier" },
    {
      type: "p",
      text: "Un calendrier de contenu répond à trois questions : de quoi tu parles, sous quel angle, et quand. La production des visuels vient après. Si c'est elle qui te bloque, j'ai détaillé [comment produire un mois de visuels pour les réseaux sociaux](/blog/visuels-reseaux-sociaux-ia-mois) en une session. Ici, on reste en amont, sur la décision.",
    },
    { type: "h3", id: "editorial-vs-planificateur", text: "Calendrier éditorial et planificateur de publication" },
    {
      type: "p",
      text: "On confond souvent deux outils. Le calendrier éditorial est ton tableau de décision : sujets, angles, formats, liens avec ta [ligne éditoriale](" + WIKI_LIGNE_EDITORIALE + "). Le planificateur est l'outil qui publie à l'heure dite, comme le Planificateur de Meta Business Suite ou la programmation native de chaque réseau.",
    },
    {
      type: "p",
      text: "Le premier se remplit dans un tableur ou un document, le second exécute ce que tu as décidé. Sans le premier, le planificateur publie à l'heure des posts choisis au hasard.",
    },
    { type: "h3", id: "matiere-reelle", text: "L'IA ne connaît pas ton mois" },
    {
      type: "p",
      text: "ChatGPT ne sait pas que ta torréfaction reçoit un nouveau café d'Éthiopie le 20, que tu changes de machine à espresso, ou qu'un client t'a demandé trois fois cette semaine comment conserver ses grains. C'est pourtant cette matière qui fait de bons posts.",
    },
    {
      type: "p",
      text: "**La qualité de ton calendrier se joue dans la liste que tu donnes à l'IA avant de lui demander quoi que ce soit.** Compare un calendrier nourri et un calendrier demandé à vide : l'écart saute aux yeux dès la première ligne.",
    },
    { type: "h2", id: "practical-workflow", text: "Construire ton calendrier de contenu avec l'IA en une heure" },
    {
      type: "p",
      text: "Voici les colonnes que je mets dans le tableau. La plupart des modèles téléchargeables oublient la colonne matière source, alors que c'est elle qui relie chaque publication à un fait réel.",
    },
    {
      type: "table",
      caption: "Les colonnes du calendrier, avec l'exemple de la torréfaction",
      headers: ["Colonne", "À quoi elle sert", "Exemple"],
      rows: [
        ["Date et heure", "Caler la publication et la programmer", "Mardi 24, 8 h 30"],
        ["Réseau", "Adapter le format et la longueur", "Instagram"],
        ["Pilier", "Garder l'équilibre sur le mois", "Coulisses"],
        ["Matière source", "Le fait réel dont part le post", "Arrivée du café d'Éthiopie le 20"],
        ["Angle", "Ce que le post dit, en une phrase", "Ce qui se passe dans les 48 h après réception d'un sac de café vert"],
        ["Format", "Photo, carrousel, reel, story", "Reel de 20 s"],
        ["Statut", "Idée, à produire, prêt, programmé, publié", "À produire"],
        ["Bilan", "Ce que tu retiens après publication", "Rempli une semaine plus tard"],
      ],
    },
    {
      type: "ol",
      items: [
        "Fais l'inventaire du mois pendant vingt minutes, sans IA : nouveautés, dates fixes, coulisses à montrer, questions reçues de clients, chiffres que tu peux partager, erreurs que tu as corrigées. Pour la torréfaction, on obtient par exemple le café d'Éthiopie, la nouvelle machine, la question sur la conservation, un atelier dégustation le 29.",
        "Choisis trois piliers au maximum. Pour notre exemple : coulisses de torréfaction, conseils pour bien préparer son café, vie de la boutique. Au-delà de trois, tu disperses ton audience et ton temps.",
        "Calcule ta cadence (méthode juste en dessous) avant de demander le moindre angle.",
        "Donne la matière, les piliers et la cadence à ton assistant IA avec le prompt plus bas, et demande dix angles par matière, pas un calendrier tout fait.",
        "Choisis toi-même les angles, place-les dans le tableau et équilibre les piliers sur les semaines.",
        "Programme les publications prêtes, une semaine à l'avance au plus si ton activité bouge vite.",
        "Chaque lundi, remplis la colonne bilan de la semaine passée et ajuste la suivante.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde une ligne vide par semaine dans le calendrier. Le jour où un client te pose une question brillante ou qu'une livraison arrive en retard, tu as une place pour en parler sans tout décaler.",
    },
    { type: "h3", id: "cadence-tenable", text: "Calculer une cadence que tu tiendras" },
    {
      type: "p",
      text: "Chronomètre une publication complète une fois : prise de vue ou génération d'image, montage, texte, relecture, programmation. Disons 50 minutes pour un reel simple et 25 minutes pour une photo avec légende dans notre exemple (ce sont des valeurs d'illustration, mesure les tiennes). Si tu as deux heures par semaine pour les réseaux, ça fait un reel et deux photos, pas un post par jour.",
    },
    {
      type: "p",
      text: "Cette règle bête t'évite l'abandon de la troisième semaine. Tu pourras toujours augmenter quand ta production ira plus vite, et l'IA t'aidera justement à gagner sur les visuels et les premiers jets.",
    },
    { type: "h3", id: "prompt-angles", text: "Le prompt qui transforme ta matière en angles" },
    {
      type: "p",
      text: "Remplace les crochets par ton propre inventaire. Le prompt interdit les sujets génériques et demande des angles rattachés à une matière, ce qui change complètement le résultat.",
    },
    {
      type: "quote",
      text: "Je gère [une petite torréfaction à Nantes] et je publie sur [Instagram], [3 fois par semaine], avec [2 heures par semaine] pour produire. Mes piliers : [coulisses de torréfaction], [conseils de préparation], [vie de la boutique]. Voici la matière réelle de ce mois : [liste]. Pour chaque élément de la liste, propose 10 angles de publication différents, une phrase chacun, avec le format le plus adapté (photo, carrousel, reel, story). N'invente aucun fait, aucun chiffre, aucun événement qui ne figure pas dans la liste. Pas de sujet générique du type motivation ou citation inspirante. Signale les angles qui demandent une prise de vue que je n'ai peut-être pas encore.",
    },
    {
      type: "p",
      text: "Sur cette base, tu récupères quarante angles pour quatre matières. Tu en gardes douze, tu jettes le reste sans remords. Si un angle appelle un format en plusieurs images, [la méthode du carrousel Instagram avec l'IA](/blog/carrousel-instagram-ia) t'aide à le découper slide par slide.",
    },
    { type: "h3", id: "programmer-meta", text: "Programmer sans payer d'outil : le Planificateur de Meta" },
    {
      type: "p",
      text: "Pour Facebook et Instagram, Meta Business Suite suffit au départ. La [page d'aide sur la création de publications](" + META_PUBLICATIONS + ") indique qu'on choisit la date et l'heure dans les options de programmation, avec un raccourci « Moments où votre audience est la plus active » calculé sur les sept derniers jours.",
    },
    {
      type: "screenshot",
      src: `${IMG}-planificateur-meta.webp`,
      alt: "Page d'aide Meta « Utiliser le planificateur dans Meta Business Suite sur ordinateur » expliquant que le planificateur affiche en calendrier les publications, stories, reels et publicités d'une Page Facebook et d'un profil Instagram",
      caption: "La page d'aide du Planificateur de Meta Business Suite, capturée le 15 novembre 2026 (cookies optionnels refusés).",
      source: META_PLANIFICATEUR,
      capturedAt: CAPTURE,
      width: 800,
      height: 500,
    },
    {
      type: "p",
      text: "Le [Planificateur](" + META_PLANIFICATEUR + ") affiche le contenu publié et programmé en vue semaine ou mois, filtrable par type (publication, story, reel, publicité) et par plateforme. Ouvre-le le lundi à côté de ton tableau : un trou ou un doublon se voit tout de suite. Il faut avoir les autorisations de contenu sur la Page ou le compte Instagram, sinon l'onglet n'apparaît pas.",
    },
    { type: "h3", id: "rappel-chatgpt", text: "Le rappel du lundi avec une tâche planifiée" },
    {
      type: "p",
      text: "La plupart des calendriers s'arrêtent le jour où on oublie de les rouvrir. ChatGPT propose des tâches planifiées, ponctuelles ou récurrentes, qui peuvent t'envoyer une notification push ou un e-mail.",
    },
    {
      type: "screenshot",
      src: `${IMG}-taches-chatgpt.webp`,
      alt: "Page d'aide OpenAI « Tâches planifiées dans ChatGPT » en français, avec la présentation des tâches ponctuelles ou récurrentes et le sommaire des sections",
      caption: "La page d'aide « Tâches planifiées dans ChatGPT », capturée sur help.openai.com le 15 novembre 2026.",
      source: OPENAI_TACHES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Selon l'[aide d'OpenAI sur les tâches planifiées](" + OPENAI_TACHES + "), le nombre de tâches actives dépend de l'offre : 3 pour Free et Go, 5 pour Plus, 10 pour Business et Edu, 15 pour Pro et Enterprise. En Free, une tâche s'exécute au plus une fois par jour, sur des créneaux flexibles (matin, après-midi, nuit) ; l'heure précise demande une offre payante. Une seule tâche suffit ici, par exemple : « Chaque lundi matin, demande-moi ce que j'ai retenu de la semaine dernière et quelle matière nouvelle j'ai pour la semaine. »",
    },
    {
      type: "p",
      text: "Attention à un détail de la même page : une tâche créée dans un projet ne peut pas lire les fichiers importés dans ce projet. Ne compte pas sur elle pour ouvrir ton tableur. Elle te pose la question, et c'est toi qui mets le tableau à jour.",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui tuent un calendrier éditorial fait avec l'IA" },
    { type: "h3", id: "erreur-trente-idees", text: "Demander trente idées sans rien donner" },
    {
      type: "p",
      text: "Symptôme : ton mois ressemble à celui de tous les comptes de ton secteur, et tu sautes une publication sur deux parce qu'elle ne te ressemble pas. Fix concret : vingt minutes d'inventaire avant le prompt, et la consigne explicite de n'inventer aucun fait.",
    },
    { type: "h3", id: "erreur-cadence", text: "Planifier la cadence de quelqu'un d'autre" },
    {
      type: "p",
      text: "Symptôme : sept publications prévues par semaine, trois réalisées, et un sentiment d'échec dès le 10 du mois. Fix concret : chronomètre une publication, divise ton temps disponible, et prends le chiffre obtenu, même s'il paraît modeste.",
    },
    { type: "h3", id: "erreur-tout-programmer", text: "Programmer le mois entier et ne plus regarder" },
    {
      type: "p",
      text: "Symptôme : un post enjoué sur ta promo sort le jour où ta boutique est fermée pour une panne, ou en plein milieu d'une actualité qui le rend déplacé. Fix concret : ne programme que la semaine qui vient, et relis le Planificateur chaque lundi avant de valider la suite.",
    },
    { type: "h3", id: "erreur-texte-tel-quel", text: "Publier les légendes générées sans les réécrire" },
    {
      type: "p",
      text: "Symptôme : toutes tes légendes commencent pareil, alignent trois emojis et finissent par une question à ta communauté. Les gens le voient. Fix concret : garde l'IA pour les angles et les plans de post, écris la légende toi-même ou réécris-la à voix haute. Si tu gères plusieurs comptes, [la boîte à outils IA du community manager](/blog/ia-community-manager) montre aussi quand et comment signaler un contenu généré.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Produire les images de ton calendrier",
      text: "Dans ma formation IA gratuite, je montre comment produire les images et les vidéos de ton calendrier sans y passer tes soirées, avec des outils que tu peux prendre en main tout de suite.",
    },
    {
      type: "p",
      text: "Ce soir, ouvre un tableur, crée les huit colonnes et écris ta liste de matière du mois. Le prompt viendra après. Si la liste fait moins de quatre lignes, sors ton téléphone cette semaine et filme ce qui se passe chez toi : ce sera la matière du mois prochain.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 15 novembre 2026 la page d'aide OpenAI sur les tâches planifiées et deux pages d'aide Meta Business Suite (création de publications, Planificateur), et capturé deux d'entre elles le même jour.",
        "L'exemple de la torréfaction est un cas d'illustration construit pour l'article. Les durées de production citées sont des valeurs d'exemple, pas des mesures.",
      ],
      teste: [
        "La lecture des limites des tâches planifiées par offre ChatGPT",
        "La lecture des étapes de programmation et des fonctions du Planificateur de Meta Business Suite",
      ],
      nonTeste: [
        "La création d'une tâche planifiée sur un compte réel",
        "La programmation d'une publication dans Meta Business Suite",
        "L'effet d'une cadence précise sur la portée d'un compte",
      ],
      sources: [
        { label: "Aide OpenAI, tâches planifiées dans ChatGPT", href: OPENAI_TACHES },
        { label: "Aide Meta, créer et gérer des publications dans Meta Business Suite", href: META_PUBLICATIONS },
        { label: "Aide Meta, utiliser le planificateur dans Meta Business Suite", href: META_PLANIFICATEUR },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-15 -->
