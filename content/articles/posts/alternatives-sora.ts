import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-18";
const IMG = "/images/articles/alternatives-sora";

export const alternativesSora: Article = {
  title: "Alternative à Sora : par quoi le remplacer en 2026",
  slug: "alternatives-sora",
  description:
    "Sora est fermé depuis le 24 septembre 2026. Flow, Dreamina, Kling, Runway ou Pika : lequel choisir pour apprendre la vidéo IA, prix relevés le 18/10.",
  excerpt:
    "L'app Sora a fermé en avril, l'API en septembre. Pour apprendre la vidéo IA sans Sora, commence par Google Flow, puis choisis selon ton budget et ton projet.",
  category: "ia-video",
  tags: ["sora", "alternative", "google flow", "dreamina", "kling", "runway", "pika"],
  date: "2026-10-18",
  updatedAt: "2026-10-18",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/alternatives-sora.webp",
  imageAlt:
    "Un matin de déménagement dans une ancienne halle de marché en fer et en verre, un petit collectif de vidéastes installe son nouveau studio : une jeune femme teste une caméra sur stabilisateur pendant que deux collègues portent des pieds de projecteur et des cartons",
  keywords: [
    "alternative sora",
    "sora fermé",
    "remplacer sora",
    "sora arrêt",
    "google flow gratuit",
    "générateur vidéo ia débutant",
  ],
  relatedSlugs: ["veo-3-vs-sora-comparatif", "creer-video-ia-gratuit", "seedance-guide"],
  faq: [
    {
      question: "Sora est-il définitivement fermé ?",
      answer:
        "Oui. D'après la page d'aide d'OpenAI, l'app et le site Sora ont fermé le 26 avril 2026, et l'API le 24 septembre 2026. La fiche développeur de Sora 2 précise qu'il n'existe pas d'API de remplacement équivalente.",
    },
    {
      question: "Quelle est la meilleure alternative gratuite à Sora ?",
      answer:
        "Pour apprendre, Google Flow. Sans abonnement, tu reçois 50 crédits par jour, de quoi lancer 5 clips Veo 3.1 Lite ou 2 clips Veo 3.1 Fast. La génération vidéo peut être bloquée aux heures de pointe, entre 14 h et 17 h UTC environ.",
    },
    {
      question: "Comment récupérer mes vidéos Sora ?",
      answer:
        "OpenAI indique de passer par sora.chatgpt.com/sunset et de cliquer sur Export, un email arrive quand l'archive est prête. Après la dernière fenêtre d'export, les données liées à Sora sont supprimées définitivement.",
    },
    {
      question: "Mes crédits Sora sont-ils perdus ?",
      answer:
        "Pas forcément. La page d'aide d'OpenAI précise que les crédits ChatGPT ou Sora achetés restent utilisables dans Codex. Pour un remboursement d'abonnement, elle renvoie vers la procédure de remboursement ChatGPT.",
    },
    {
      question: "Pourquoi OpenAI a-t-il arrêté Sora ?",
      answer:
        "OpenAI n'a pas publié de raison détaillée. La presse a rapporté un coût de calcul très élevé, une audience en baisse après le lancement et un recentrage sur les clients professionnels. OpenAI ne les a pas confirmées.",
    },
    {
      question: "Quel outil choisir pour un court métrage IA après Sora ?",
      answer:
        "Pour un clip isolé, Flow ou Kling suffisent. Pour un film avec un scénario et des personnages qui reviennent, il te faut un outil qui relie le script aux plans. C'est ce que fait ScreenWeaver, dont je suis co-fondateur, avec Seedance, Veo 3.1 et Kling intégrés.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Sora est fermé : l'app et le site depuis le 26 avril 2026, l'API depuis le 24 septembre 2026. Si tu veux apprendre la vidéo IA aujourd'hui, la meilleure alternative pour démarrer est **Google Flow**, avec Veo 3.1 et 50 crédits gratuits par jour. Tu veux plus de modèles pour un petit budget ? **Dreamina** (Seedance) ou **Kling**. Tu travailles pour des clients ? **Runway**.",
    },
    {
      type: "p",
      text: "Cinq outils suffisent. Tu trouveras ici les dates exactes de la fermeture, la marche à suivre pour récupérer tes vidéos, et cinq remplaçants avec leurs prix relevés le 18 octobre 2026 sur les pages officielles, captures à l'appui.",
    },
    {
      type: "p",
      text: "Je suis co-fondateur de ScreenWeaver, que je cite plus bas pour un usage précis : le court métrage. Les cinq outils comparés ne m'appartiennent pas.",
    },

    { type: "h2", id: "verdict", text: "Mon choix selon ton profil" },
    {
      type: "verdict",
      title: "Mon verdict après la fermeture de Sora",
      pourQui:
        "Les personnes qui apprenaient la vidéo IA avec Sora et cherchent un outil pour continuer, sans exploser leur budget.",
      forts: [
        "Google Flow donne 50 crédits par jour sans abonnement, avec Veo 3.1 en Lite, Fast et Quality",
        "Dreamina ouvre Seedance 2.0 et 2.5 avec un premier mois Basic à 1,39 € (carte ou PayPal)",
        "Runway réunit Gen-4.5, Kling 3.0 et Nano Banana Pro dans un abonnement à 12 $ par mois en annuel",
      ],
      faibles: [
        "Aucun outil ne reprend le fil social de l'app Sora",
        "Flow peut bloquer la vidéo gratuite aux heures de pointe",
        "La grille tarifaire de Kling n'était pas lisible sans compte le 18 octobre",
      ],
      verdict:
        "Commence par Flow tant que les crédits gratuits te suffisent. Quand tu veux comparer plusieurs modèles, passe sur Dreamina ou Runway. Pika garde un intérêt si tu veux des vidéos sans filigrane pour 10 $, mais la licence commerciale commence à 35 $.",
    },

    { type: "h2", id: "sora-ferme", text: "Sora est-il vraiment fermé ? Les deux dates à retenir" },
    {
      type: "p",
      text: "Oui, et en deux temps. La [page d'aide d'OpenAI sur l'arrêt de Sora](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation) donne le 26 avril 2026 pour l'app et le site, puis le 24 septembre 2026 pour l'API. Beaucoup d'articles donnent le 24 mars, qui est en réalité la date de l'annonce sur X.",
    },
    {
      type: "screenshot",
      src: `${IMG}-openai-arret.webp`,
      alt: "Page d'aide OpenAI « What to know about the Sora discontinuation » avec les dates du 26 avril 2026 pour l'app et du 24 septembre 2026 pour l'API",
      caption: "Les deux dates officielles, et la recommandation d'exporter ses contenus au plus vite.",
      source: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Côté développeurs, la fiche du modèle Sora 2 affiche le badge « Deprecated » et un bandeau clair : les modèles Sora 2 et la Videos API sont arrêtés depuis le 24 septembre, et il n'existe **aucune API de remplacement équivalente**. OpenAI n'a annoncé aucun nouveau modèle vidéo sur ses pages officielles.",
    },
    {
      type: "screenshot",
      src: `${IMG}-openai-api.webp`,
      alt: "Fiche développeur OpenAI du modèle Sora 2 avec le badge Deprecated, le bandeau d'arrêt du 24 septembre 2026 et le dernier prix de 0,10 dollar par seconde",
      caption: "La fiche Sora 2 garde son dernier prix (0,10 $ la seconde) mais le modèle ne répond plus.",
      source: "https://developers.openai.com/api/docs/models/sora-2",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pourquoi cet arrêt ? OpenAI n'a pas donné d'explication détaillée. [TechCrunch](https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/), d'après une enquête du Wall Street Journal, parle d'un pic autour d'un million d'utilisateurs retombé sous les 500 000 et d'un coût d'environ un million de dollars par jour. Ce sont des chiffres de presse. Retiens surtout qu'un service gratuit très gourmand en calcul peut disparaître en quelques mois. Ne bâtis pas ton apprentissage sur un seul outil.",
    },
    {
      type: "p",
      text: "Méfie-toi aussi des menus qui n'ont pas suivi. Le 18 octobre, la page d'accueil de Dreamina listait encore une entrée « Sora 2 » parmi ses générateurs vidéo. Je n'ai pas vérifié ce qu'elle produit, mais l'API d'OpenAI ne répond plus : si un site te vend du Sora aujourd'hui, demande-toi ce qui tourne vraiment derrière.",
    },

    { type: "h2", id: "recuperer-videos", text: "Récupérer tes vidéos et tes crédits Sora" },
    {
      type: "p",
      text: "Si tu as des vidéos dans Sora, c'est la priorité avant de choisir un nouvel outil. OpenAI indique la marche à suivre : va sur **sora.chatgpt.com/sunset**, clique sur Export, puis attends l'email qui annonce que l'archive est prête. Si une dernière fenêtre d'export est proposée, OpenAI prévient par email avant son ouverture. Ensuite, les données liées à Sora sont supprimées définitivement.",
    },
    {
      type: "p",
      text: "Pour l'argent, deux cas. Un abonnement ChatGPT se rembourse selon la procédure habituelle de ChatGPT. Les crédits ChatGPT ou Sora achetés, eux, restent utilisables dans Codex, l'outil de code d'OpenAI. Utile si tu codes, beaucoup moins si tu faisais seulement de la vidéo.",
    },

    { type: "h2", id: "ce-qui-reste", text: "Ce que tu as appris avec Sora te sert encore" },
    {
      type: "p",
      text: "Tes réflexes restent valables. Décrire un plan (sujet, action, lieu, lumière, mouvement de caméra), découper une idée en clips de quelques secondes, refaire une génération en changeant un seul paramètre : tout ça fonctionne pareil dans Veo, Seedance ou Kling. J'avais comparé les deux grands modèles dans [mon duel Veo 3 contre Sora](/blog/veo-3-vs-sora-comparatif), et la logique de prompt de Veo est très proche.",
    },
    {
      type: "p",
      text: "La forme change, en revanche. Sora était une app sociale avec un fil de vidéos à remixer. Les remplaçants sont des outils de production : tu génères, tu télécharges, tu montes ailleurs. Pour un débutant, c'est plutôt une bonne chose, on apprend plus en montant ses propres plans qu'en scrollant ceux des autres.",
    },

    { type: "h2", id: "comparatif", text: "Les cinq alternatives à Sora côte à côte" },
    {
      type: "comparison",
      caption: "Les remplaçants de Sora pour apprendre la vidéo IA, au 18 octobre 2026",
      headers: ["Outil", "Accès gratuit", "Premier prix payant", "Modèles vidéo", "Limite à connaître"],
      rows: [
        ["Google Flow", "50 crédits par jour", "Offres Google AI (200 crédits/mois en Plus)", "Veo 3.1, Gemini Omni Flash", "Vidéo gratuite parfois bloquée 14 h à 17 h UTC"],
        ["Dreamina", "Crédits quotidiens (montant non affiché)", "Basic : 1,39 € le 1er mois, puis 13,99 €", "Seedance 2.0, 2.5, Veo 3.1", "Filigrane Dreamina retiré seulement en payant"],
        ["Kling", "Non vérifié (grille illisible sans compte)", "Non vérifié", "Kling 4.0, Video 3.0", "Prix à lire une fois connecté"],
        ["Runway", "125 crédits, une seule fois", "Standard : 12 $/mois en annuel, 15 $ en mensuel", "Gen-4.5, Kling 3.0 et autres", "Gratuit non renouvelé"],
        ["Pika", "0 crédit par mois (packs seulement)", "Starter : 10 $/mois", "Pika 2.5 et modèles tiers", "Licence commerciale dès 35 $"],
      ],
      source: [
        { label: "Aide Google Flow", href: "https://support.google.com/flow/answer/16526234?hl=fr" },
        { label: "Tarifs Dreamina", href: "https://dreamina.capcut.com/pricing/dreamina-price" },
        { label: "Tarifs Runway", href: "https://runway.com/pricing" },
        { label: "Tarifs Pika", href: "https://pika.art/pricing" },
      ],
      verifieLe: "2026-10-18",
      note: "Prix hors taxes pour Runway et Pika (dollars), TTC affichés en euros pour Dreamina. Les promotions de premier mois changent souvent.",
    },

    { type: "h2", id: "google-flow", text: "Google Flow : le meilleur point de départ gratuit" },
    {
      type: "p",
      text: "Flow, c'est le studio vidéo de Google, avec Veo 3.1 dedans. Sans abonnement, tu reçois **50 crédits par jour**. Sur le barème officiel, un clip Veo 3.1 Lite coûte 10 crédits, un clip Fast 20 crédits, un clip Quality 100 crédits. Traduction : 5 essais Lite ou 2 essais Fast par jour, et pas de Quality avec le gratuit seul.",
    },
    {
      type: "screenshot",
      src: `${IMG}-flow-credits.webp`,
      alt: "Page d'aide Google Flow en français « Gérer vos crédits Google Flow » avec les 50 crédits quotidiens sans abonnement et les crédits mensuels des offres Plus, Pro et Ultra",
      caption: "Les crédits gratuits ne se reportent pas : 50 par jour, à utiliser dans la journée.",
      source: "https://support.google.com/flow/answer/16526234?hl=fr",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Cinq essais par jour, ça paraît peu. Pour apprendre, c'est très bien : tu es obligé de réfléchir à ton prompt avant de cliquer. Mon conseil, c'est de travailler en Lite pour régler le cadre et le mouvement, puis de garder un clip Fast pour la version propre. Mes [exemples de prompts Veo 3](/blog/prompt-veo-3-exemples) se collent tels quels dans Flow.",
    },
    {
      type: "p",
      text: "Deux limites à connaître. D'abord les heures de pointe : sans abonnement, la vidéo peut être indisponible entre 14 h et 17 h UTC environ, soit 16 h à 19 h à Paris jusqu'au changement d'heure du 25 octobre, puis 15 h à 18 h. Ensuite, Flow ne propose que des modèles Google. Pour comparer avec Seedance ou Kling, il faudra un autre outil.",
    },

    { type: "h2", id: "dreamina", text: "Dreamina : Seedance pour un petit budget" },
    {
      type: "p",
      text: "Dreamina, c'est la plateforme créative de ByteDance (la maison de CapCut). Elle donne accès à **Seedance 2.0 et 2.5**, les modèles vidéo maison, plus Veo 3.1. Un guide officiel publié le 9 septembre 2026 confirme l'existence de crédits gratuits quotidiens, sans donner de montant fixe sur la page des prix.",
    },
    {
      type: "screenshot",
      src: `${IMG}-dreamina-tarifs.webp`,
      alt: "Grille tarifaire mensuelle de Dreamina en euros avec les offres Basic à 1,39 euro puis 13,99 euros, Standard à 19 puis 31 euros, Advanced et Ultra",
      caption: "La remise de 90 % ne vaut que pour le premier mois, et seulement par carte ou PayPal.",
      source: "https://dreamina.capcut.com/pricing/dreamina-price",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Le prix d'appel est agressif : Basic à 1,39 € le premier mois, puis 13,99 € par mois, avec 1 361 crédits. La page estime que ça fait 19 vidéos de 10 secondes par mois. Lis bien le renouvellement automatique avant de payer, c'est là que la facture change. Autre point : le retrait du filigrane Dreamina fait partie des avantages payants.",
    },
    {
      type: "p",
      text: "Pour aller plus loin sur le modèle lui-même, j'ai détaillé les différences entre versions dans [mon guide Seedance](/blog/seedance-guide). Seedance gère très bien les références de personnage, c'est ce qui en fait un bon terrain d'entraînement pour la cohérence d'un plan à l'autre.",
    },

    { type: "h2", id: "kling", text: "Kling : la puissance, avec des prix moins lisibles" },
    {
      type: "p",
      text: "Kling, édité par le chinois Kuaishou, met en avant Kling 4.0 sur sa page d'accueil. Les comparatifs anglophones sur l'après-Sora le placent souvent en tête, comme celui d'Atlas Cloud (qui vend d'ailleurs l'accès à ces modèles par API).",
    },
    {
      type: "screenshot",
      src: `${IMG}-kling-accueil.webp`,
      alt: "Page d'accueil de Kling AI avec la bannière All-New Kling 4.0 et un champ de prompt Create Now au-dessus d'une vidéo d'un pianiste sur un navire dans la tempête",
      caption: "Kling 4.0 en vitrine. Le prompt s'écrit directement depuis l'accueil.",
      source: "https://kling.ai/",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pour un débutant, le prix pose problème. Le 18 octobre, la page d'abonnement de Kling n'affichait aucun tarif sans compte. Les guides tiers citent des montants qui se contredisent, donc je ne les reprends pas. Si tu veux juste goûter Kling sans t'inscrire chez lui, l'offre Standard de Runway l'inclut (Kling 3.0). Mon article sur [les vidéos cinématiques avec Kling](/blog/kling-ai-videos-cinematiques) t'aidera à écrire tes premiers prompts.",
    },

    { type: "h2", id: "runway", text: "Runway : l'outil des projets clients" },
    {
      type: "p",
      text: "Runway joue dans une autre catégorie : c'est une suite de production. Tu y trouves son modèle Gen-4.5, mais aussi Kling 3.0 et Nano Banana Pro dans l'offre Standard. L'offre gratuite donne **125 crédits une seule fois**, sans renouvellement. Ensuite, Standard coûte 12 $ par mois en annuel (15 $ en mensuel) pour 625 crédits, sans filigrane.",
    },
    {
      type: "screenshot",
      src: `${IMG}-runway-tarifs.webp`,
      alt: "Page des tarifs Runway en facturation annuelle avec les offres Free à 125 crédits, Standard à 12 dollars, Pro à 28 dollars et Max à 76 dollars par mois",
      caption: "Les 125 crédits gratuits ne reviennent jamais : une fois dépensés, il faut payer.",
      source: "https://runway.com/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pour apprendre seul, Runway coûte plus cher que Flow ou Dreamina. Il devient intéressant quand tu livres des vidéos à un client et que tu veux plusieurs modèles, le montage et l'upscale 4K au même endroit. Mon [guide Runway](/blog/runway-guide-video-ia) détaille l'interface pas à pas.",
    },

    { type: "h2", id: "pika", text: "Pika : simple, mais lis la licence" },
    {
      type: "p",
      text: "Pika est le plus simple à prendre en main des cinq. Sa grille a une particularité : l'offre Free donne **0 crédit par mois**, il faut acheter des packs pour générer. Starter coûte 10 $ par mois pour 900 crédits. Toutes les offres affichent « No watermark », ce qui est rare.",
    },
    {
      type: "screenshot",
      src: `${IMG}-pika-tarifs.webp`,
      alt: "Page des tarifs Pika en facturation mensuelle avec les offres Free à 0 crédit, Starter à 10 dollars, Creator à 35 dollars et Fancy à 95 dollars, et la ligne Commercial license",
      caption: "La ligne Commercial license n'est cochée qu'à partir de Creator, à 35 $ par mois.",
      source: "https://pika.art/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "La licence commerciale n'arrive qu'avec Creator, à 35 $ par mois. Pour t'entraîner, Starter suffit. Pour une vidéo payée par un client, il te faut Creator. J'avais abordé ce point dans [mon comparatif vidéo IA sans filigrane](/blog/video-ia-sans-filigrane).",
    },

    { type: "h2", id: "quel-outil", text: "Par lequel commencer, concrètement ?" },
    {
      type: "p",
      text: "Si tu débutes sans budget, prends Flow en Lite pendant deux ou trois semaines. Un clip par jour avec un objectif précis : un travelling, puis un plan de dialogue, puis un raccord entre deux plans. Mon guide pour [créer une vidéo IA gratuitement](/blog/creer-video-ia-gratuit) complète ce programme.",
    },
    {
      type: "p",
      text: "Tu publies sur les réseaux et tu veux varier les modèles ? Dreamina te donne Seedance pour 13,99 € par mois une fois la promo passée, et tu y gagnes un deuxième regard sur tes prompts : le même texte donne un plan très différent sur Seedance et sur Veo.",
    },
    {
      type: "p",
      text: "Pour un court métrage, le générateur compte moins que l'organisation. Avec un scénario de dix scènes, tu gères vite plus de cinquante plans, des personnages qui doivent rester les mêmes et des versions à suivre. C'est le problème que ScreenWeaver règle : tu écris le scénario, il le découpe en plans, tu prépares le storyboard, puis tu génères la vidéo avec Seedance, Veo 3.1 ou Kling, tout relié au script. L'éditeur de scénario est gratuit, la production démarre avec l'offre Auteur à 39,99 $ par mois. On a fait la série Lost Garden dedans, de l'écriture à la production.",
    },
    { type: "cta", variant: "screenweaver", destination: "fr" },

    { type: "h2", id: "erreurs", text: "Les erreurs à éviter quand tu quittes Sora" },
    { type: "h3", id: "erreur-abonnement", text: "Payer un abonnement annuel le premier jour" },
    {
      type: "p",
      text: "Les promos de premier mois sont partout (1,39 € chez Dreamina, -20 % en annuel chez Runway et Pika). Teste un mois, ou reste en gratuit, avant de t'engager sur un an. Sora vient de prouver qu'un outil peut fermer en quelques mois.",
    },
    { type: "h3", id: "erreur-prompts", text: "Recopier tes prompts Sora sans les adapter" },
    {
      type: "p",
      text: "Un prompt qui marchait sur Sora ne donne pas le même plan sur Kling ou Seedance. Garde la structure (sujet, action, décor, lumière, caméra) et refais un essai court avant de lancer une série. Change un seul paramètre à la fois, sinon tu ne sauras jamais ce qui a amélioré le plan.",
    },
    { type: "h3", id: "erreur-export", text: "Attendre pour exporter tes vidéos" },
    {
      type: "p",
      text: "La page d'OpenAI recommande d'exporter « dès que possible ». Si tu as des rushs Sora que tu veux remonter un jour, fais l'export maintenant et range-les avec tes autres sources. Une fois la fenêtre fermée, ils seront supprimés.",
    },
    { type: "h3", id: "erreur-licence", text: "Oublier la licence commerciale" },
    {
      type: "p",
      text: "Chaque outil a ses règles. Chez Pika, pas de licence commerciale avant Creator. Chez Runway, la [page d'aide sur les droits d'usage](https://help.runwayml.com/hc/en-us/articles/18927776141715-Usage-rights) indique que le contenu généré t'appartient, usage commercial compris. Avant de livrer un client, relis toi-même la page de l'offre que tu paies, le jour où tu paies.",
    },

    {
      type: "methodology",
      date: "2026-10-18",
      text: [
        "J'ai relu le 18 octobre 2026 la page d'aide d'OpenAI sur l'arrêt de Sora et la fiche développeur de Sora 2, puis les pages officielles de prix ou d'aide de Google Flow, Dreamina, Kling, Runway et Pika. Chaque capture a été prise ce jour-là, bandeaux de cookies refusés.",
        "Les chiffres sur l'audience et le coût de Sora viennent de la presse (TechCrunch citant le Wall Street Journal) et OpenAI ne les a pas confirmés. Je n'ai lancé aucune génération dans ces outils pour cet article : je compare les offres et la documentation, la qualité d'image n'a pas été testée.",
      ],
      nonTeste: [
        "La qualité comparée des vidéos générées par chaque outil",
        "Les prix de Kling, illisibles sans compte",
        "Le montant exact des crédits gratuits quotidiens de Dreamina",
        "Ce que produit l'entrée « Sora 2 » encore visible dans le menu de Dreamina",
      ],
      sources: [
        { label: "OpenAI : arrêt de Sora", href: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
        { label: "OpenAI : fiche Sora 2", href: "https://developers.openai.com/api/docs/models/sora-2" },
        { label: "Aide Google Flow : crédits", href: "https://support.google.com/flow/answer/16526234?hl=fr" },
        { label: "Dreamina : tarifs", href: "https://dreamina.capcut.com/pricing/dreamina-price" },
        { label: "Runway : tarifs", href: "https://runway.com/pricing" },
        { label: "Pika : tarifs", href: "https://pika.art/pricing" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Sora est-il définitivement fermé ?" },
    {
      type: "p",
      text: "Oui. D'après la page d'aide d'OpenAI, l'app et le site Sora ont fermé le 26 avril 2026, et l'API le 24 septembre 2026. La fiche développeur de Sora 2 précise qu'il n'existe pas d'API de remplacement équivalente.",
    },
    { type: "h3", id: "faq-2", text: "Quelle est la meilleure alternative gratuite à Sora ?" },
    {
      type: "p",
      text: "Pour apprendre, Google Flow. Sans abonnement, tu reçois 50 crédits par jour, de quoi lancer 5 clips Veo 3.1 Lite ou 2 clips Veo 3.1 Fast. La génération vidéo peut être bloquée aux heures de pointe, entre 14 h et 17 h UTC environ.",
    },
    { type: "h3", id: "faq-3", text: "Comment récupérer mes vidéos Sora ?" },
    {
      type: "p",
      text: "OpenAI indique de passer par sora.chatgpt.com/sunset et de cliquer sur Export, un email arrive quand l'archive est prête. Après la dernière fenêtre d'export, les données liées à Sora sont supprimées définitivement.",
    },
    { type: "h3", id: "faq-4", text: "Mes crédits Sora sont-ils perdus ?" },
    {
      type: "p",
      text: "Pas forcément. La page d'aide d'OpenAI précise que les crédits ChatGPT ou Sora achetés restent utilisables dans Codex. Pour un remboursement d'abonnement, elle renvoie vers la procédure de remboursement ChatGPT.",
    },
    { type: "h3", id: "faq-5", text: "Pourquoi OpenAI a-t-il arrêté Sora ?" },
    {
      type: "p",
      text: "OpenAI n'a pas publié de raison détaillée. La presse a rapporté un coût de calcul très élevé, une audience en baisse après le lancement et un recentrage sur les clients professionnels. OpenAI ne les a pas confirmées.",
    },
    { type: "h3", id: "faq-6", text: "Quel outil choisir pour un court métrage IA après Sora ?" },
    {
      type: "p",
      text: "Pour un clip isolé, Flow ou Kling suffisent. Pour un film avec un scénario et des personnages qui reviennent, il te faut un outil qui relie le script aux plans. C'est ce que fait ScreenWeaver, dont je suis co-fondateur, avec Seedance, Veo 3.1 et Kling intégrés.",
    },
    {
      type: "p",
      text: "Si tu veux apprendre la vidéo IA avec une méthode plutôt qu'avec un outil, on travaille ça dans la formation IA gratuite : les plans, les prompts et le montage, avec le générateur que tu auras sous la main demain.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-18 -->
