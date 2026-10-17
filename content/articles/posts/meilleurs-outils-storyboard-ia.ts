import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-17";
const IMG = "/images/articles/meilleurs-outils-storyboard-ia";

export const meilleursOutilsStoryboardIa: Article = {
  title: "Meilleur outil de storyboard IA en 2026 : mon classement",
  slug: "meilleurs-outils-storyboard-ia",
  description:
    "Sept outils de storyboard IA classés par profil (étudiant, agence, réalisateur) : prix relevés le 17/10/2026, captures, limites et conflit d'intérêts déclaré.",
  excerpt:
    "Boords pour l'agence, LTX Studio ou ScreenWeaver pour le réalisateur, Storyboarder pour l'étudiant fauché. Sept outils, une méthode écrite noir sur blanc, et un conflit d'intérêts que je ne cache pas.",
  category: "workflow-creatif",
  tags: ["storyboard ia", "classement", "boords", "ltx studio", "higgsfield", "préproduction"],
  date: "2026-10-17",
  updatedAt: "2026-10-17",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/meilleurs-outils-storyboard-ia.webp",
  imageAlt:
    "Au petit matin sur un tournage en pleine campagne givrée, une première assistante réalisatrice en doudoune bleu marine feuillette un storyboard imprimé à spirale posé sur le capot d'un utilitaire blanc, un jeune assistant caméra en ciré jaune pointe une case, l'équipe décharge un camion dans la brume",
  keywords: [
    "meilleur outil storyboard ia",
    "logiciel storyboard ia",
    "générateur de storyboard ia",
    "storyboard ia gratuit",
    "boords avis",
    "ltx studio storyboard",
  ],
  relatedSlugs: ["creer-storyboard-ia", "animatique-ia-methode", "screenweaver-scenario-storyboard-ia"],
  faq: [
    {
      question: "Quel est le meilleur outil de storyboard IA en 2026 ?",
      answer:
        "Ça dépend de ce que tu fais du storyboard. Pour le faire valider par un client, Boords. Pour partir d'un scénario et aller jusqu'à la vidéo, LTX Studio ou ScreenWeaver (dont je suis co-fondateur). Pour dessiner gratuitement, Storyboarder. Aucun outil ne gagne sur les trois usages à la fois.",
    },
    {
      question: "Existe-t-il un outil de storyboard IA vraiment gratuit ?",
      answer:
        "Pas avec de la génération d'images illimitée. Boords offre 5 storyboards actifs et 8 crédits d'images uniques, LTX Studio 800 crédits une seule fois en usage personnel. Storyboarder est entièrement gratuit, mais il n'a pas d'IA générative : tu dessines toi-même.",
    },
    {
      question: "Un storyboard IA reste-t-il synchronisé avec le scénario ?",
      answer:
        "Pas toujours. La documentation de Boords précise que le storyboard ne suit pas les modifications du script : chaque conversion crée un nouveau storyboard. ScreenWeaver, lui, garde le découpage relié au scénario. Pose la question avant de choisir si ton script bouge encore.",
    },
    {
      question: "Peut-on utiliser un storyboard IA pour un projet commercial ?",
      answer:
        "Oui, mais lis la licence de l'offre. Chez LTX Studio, les offres Free et Lite sont réservées à l'usage personnel et la licence commerciale commence à l'offre Standard. StoryboardHero affiche l'usage commercial sur toutes ses offres.",
    },
    {
      question: "Storyboarder de Wonder Unit est-il encore maintenu ?",
      answer:
        "Le logiciel se télécharge toujours, mais la dernière version stable date de septembre 2020 et la version 3.0.0 est en pré-version depuis février 2021. Il reste utile pour dessiner vite, sans attendre de nouvelles fonctions.",
    },
    {
      question: "Higgsfield Popcorn suffit-il pour faire un storyboard ?",
      answer:
        "Pour une séquence courte, oui : il génère jusqu'à 8 images cohérentes à partir d'un prompt et de 4 références. Pour un film entier, il faut enchaîner les séquences à la main, car Popcorn part d'un prompt et pas d'un scénario.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le meilleur outil de storyboard IA dépend de ce que tu fais de ton storyboard. Tu le montres à un client qui doit valider ? **Boords**. Tu pars d'un scénario et tu veux aller jusqu'à la vidéo ? **LTX Studio** ou **ScreenWeaver**. Tu es étudiant et tu ne veux rien payer ? **Storyboarder**, gratuit, où tu dessines toi-même.",
    },
    {
      type: "p",
      text: "Un point avant d'aller plus loin : je suis co-fondateur de ScreenWeaver, qui figure dans ce classement. Je l'ai rangé à la place que lui donne ma méthode, écrite plus bas pour que tu puisses la vérifier. Tous les prix ont été relevés le 17 octobre 2026 sur les pages officielles, captures à l'appui.",
    },
    {
      type: "p",
      text: "La plupart des classements que tu trouves sur cette requête sont publiés par un éditeur qui se met lui-même premier. Celui-ci te dit aussi quand un outil ne vaut pas le coup, y compris le mien.",
    },

    { type: "h2", id: "verdict", text: "Le classement en un coup d'œil" },
    {
      type: "verdict",
      title: "Mon verdict, par profil",
      pourQui:
        "Les étudiants en cinéma ou en animation, les agences vidéo qui font valider des storyboards, et les réalisateurs qui veulent passer du scénario à la vidéo IA.",
      forts: [
        "En agence, Boords, pour la validation client tracée et l'animatique",
        "Pour un réalisateur, LTX Studio ou ScreenWeaver : scénario, storyboard et vidéo dans le même outil",
        "Étudiant sans budget ? Storyboarder pour dessiner, puis le gratuit de Boords pour goûter à l'IA",
        "Higgsfield Popcorn quand il te faut une séquence courte de 8 images cohérentes",
      ],
      faibles: [
        "Aucun outil gratuit ne génère des images IA sans limite",
        "Le storyboard de Boords ne suit pas les modifications du script",
        "Katalist s'est recentré sur la publicité à la performance, je ne le conseille plus pour un film",
      ],
      verdict:
        "Choisis d'abord l'usage (valider, produire ou apprendre), puis l'outil. Un storyboard qui doit passer devant un client et un storyboard qui doit devenir une vidéo ne demandent pas le même logiciel.",
    },
    {
      type: "comparison",
      caption: "Les sept outils de storyboard IA comparés",
      headers: ["Outil", "Ce qu'il fait de mieux", "Prix d'entrée", "Offre gratuite", "Jusqu'à la vidéo"],
      rows: [
        ["Boords", "Validation client, animatique", "39 $/mois, 26 $ en annuel", "5 storyboards, 8 images IA", "Non (animatique en images fixes)"],
        ["LTX Studio", "Script, storyboard et montage", "35 €/mois, 28 € en annuel (offre Standard)", "800 crédits une fois, usage perso", "Oui"],
        ["ScreenWeaver", "Scénario relié au storyboard", "39,99 $/mois (Auteur)", "Écriture seule (Screenwriter)", "Oui"],
        ["Higgsfield Popcorn", "8 images cohérentes d'un coup", "19 €/mois (Starter)", "Limitée", "Oui, via les modèles vidéo du site"],
        ["StoryboardHero", "Brief vers storyboard, dessinateurs humains", "19 $/mois", "Non", "Export MP4 du storyboard"],
        ["Storyboarder", "Dessin rapide, animatique", "Gratuit", "Tout est gratuit, sans IA", "Non"],
        ["Katalist", "Pub produit, déclinaisons", "19 $ affichés (Essential)", "Essai de 7 jours", "Oui"],
      ],
      source: [
        { label: "Boords Pricing", href: "https://boords.com/pricing" },
        { label: "LTX Studio Pricing", href: "https://ltx.io/studio/pricing" },
        { label: "ScreenWeaver Tarifs", href: "https://www.screenweaver.ai/fr#pricing" },
        { label: "Higgsfield Pricing", href: "https://higgsfield.ai/pricing" },
        { label: "StoryboardHero Pricing", href: "https://storyboardhero.ai/pricing" },
        { label: "Katalist Pricing", href: "https://www.katalist.ai/katalist-pricing" },
      ],
      verifieLe: "2026-10-17",
      note: "Prix affichés pour un visiteur en France : LTX Studio et Higgsfield en euros, les autres en dollars. Le storyboard IA de LTX Studio commence à l'offre Standard.",
    },

    { type: "h2", id: "methode", text: "Comment j'ai construit ce classement" },
    {
      type: "p",
      text: "J'ai noté chaque outil sur quatre questions, celles qu'un lecteur pose vraiment avant de payer. Est-ce que le storyboard part de mon scénario ? Est-ce que les personnages restent les mêmes d'une case à l'autre ? Est-ce que je peux le montrer à quelqu'un et récupérer ses commentaires ? Combien ça coûte pour un mois de travail réel ?",
    },
    {
      type: "p",
      text: "Je n'ai pas lancé de génération dans ces outils pour cet article : tout ce que j'écris vient de leurs pages officielles, de leur documentation et de leurs pages tarifs, lues et capturées le 17 octobre 2026. Quand un point vient d'un avis d'utilisateur, je le dis. Pour ScreenWeaver, je m'en tiens à ce que le site public affiche, et je précise ce qu'il ne fait pas.",
    },
    {
      type: "p",
      text: "Si tu débutes et que tu ne sais pas encore à quoi ressemble un bon storyboard, commence par [la méthode pour créer un storyboard avec l'IA](/blog/creer-storyboard-ia) : cases, beats, cadrages. Ce classement suppose que tu sais déjà ce que tu veux mettre dans tes cases.",
    },

    { type: "h2", id: "boords", text: "1. Boords : le meilleur choix pour une agence" },
    {
      type: "p",
      text: "Boords existe depuis 2015 et ça se sent dans la partie que les autres négligent : le client. Tu partages un lien, ton client commente directement sur l'image sans créer de compte, valide, et l'historique garde qui a validé quoi. Si ton storyboard passe par trois versions avant le tournage, c'est la première fonction que je regarderais.",
    },
    {
      type: "p",
      text: "La couche IA s'est étoffée : génération d'images avec jusqu'à 4 références, bibliothèque de personnages et de lieux appelés par @mention pour garder la cohérence, et conversion d'un script en storyboard d'un clic. Sur ce dernier point, lis bien la [documentation officielle](https://boords.com/docs/script-to-storyboard) : une fois converti, le storyboard ne suit plus les modifications du script.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-script.webp`,
      alt: "Documentation Boords, section One-way, one-shot : le storyboard ne reste pas synchronisé avec le script et chaque conversion crée un nouveau storyboard",
      caption:
        "Le passage à lire avant de choisir Boords : la conversion du script est un instantané. Si ton script change, tu reconvertis et tu repars d'un nouveau storyboard.",
      source: "https://boords.com/docs/script-to-storyboard",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Côté prix, l'offre Solo coûte 39 $ par mois, ou 26 $ par mois en annuel, avec 250 images IA par mois. L'offre Pro passe à 75 $ pour 5 utilisateurs et 1 000 images. Le plan gratuit, sans carte bancaire, donne 5 storyboards actifs, 3 scripts actifs et 8 crédits d'images uniques : assez pour voir si l'interface te plaît, pas pour travailler.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-tarifs.webp`,
      alt: "Page tarifs de Boords en mensuel : Solo 39 dollars, Pro 75 dollars, Team 125 dollars, Agency 250 dollars, avec le nombre d'utilisateurs et d'images IA par mois",
      caption:
        "La grille Boords en mensuel. Le prix annuel apparaît sous chaque offre (26 $ pour Solo), soit un tiers de moins.",
      source: "https://boords.com/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "La limite qui compte : Boords s'arrête à l'animatique, un montage d'images fixes avec du son. Il ne génère pas de vidéo. Si ton storyboard doit devenir un film IA, tu iras générer ailleurs. Pour comprendre ce que l'animatique t'apporte entre les deux, j'ai écrit un [guide de l'animatique IA](/blog/animatique-ia-methode).",
    },

    { type: "h2", id: "ltx-studio", text: "2. LTX Studio : le tout-en-un le plus complet" },
    {
      type: "p",
      text: "LTX Studio, édité par Lightricks (les créateurs de Facetune), résume sa promesse en trois verbes sur sa page : écrire, storyboarder, monter. Tu pars d'un script, d'un concept, d'une image ou d'une vidéo, l'outil découpe en scènes, et tu enchaînes sur la génération et la timeline dans le même espace.",
    },
    {
      type: "p",
      text: "Ce qui le distingue : des modèles vidéo maison (LTX-2.5 et LTX-2.3, disponibles dès l'offre gratuite), des « Elements » pour garder personnages, objets et lieux d'un plan à l'autre, et un catalogue de modèles partenaires qui grossit avec l'offre. Nano Banana 2, Kling 3.0 Pro et Seedance 2.0 arrivent avec l'offre Standard, Veo 3.1 seulement en Pro.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ltx-tarifs.webp`,
      alt: "Page tarifs LTX Studio en annuel : Free 0 euro avec 800 crédits une fois, Lite 12 euros, Standard 28 euros, Pro 100 euros par mois",
      caption:
        "La grille LTX Studio en facturation annuelle, vue depuis la France. Le mensuel est barré à côté : 15, 35 et 125 €.",
      source: "https://ltx.io/studio/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Le piège est dans le tableau comparatif de la page tarifs. L'offre gratuite et l'offre Lite n'ont que des storyboards vierges (« Blank Storyboards ») : les **storyboards générés par IA** et les Elements commencent à l'offre Standard, 35 € par mois ou 28 € en annuel. C'est aussi là que démarre la licence commerciale. En dessous, tu n'as pas le droit d'utiliser ce que tu produis pour un client.",
    },
    {
      type: "p",
      text: "Côté retours publics, la [note Trustpilot de LTX Studio](https://www.trustpilot.com/review/ltx.studio) est basse, et les avis reviennent sur les crédits consommés par des générations ratées et sur la politique de remboursement, limitée aux comptes qui ont consommé moins de 1 200 crédits selon la FAQ officielle. Teste en gratuit avant de prendre l'annuel.",
    },

    { type: "h2", id: "screenweaver", text: "3. ScreenWeaver : pour le réalisateur qui part du scénario" },
    {
      type: "p",
      text: "Conflit d'intérêts, encore une fois : je suis co-fondateur de ScreenWeaver. Voici ce qu'il fait, d'après sa page publique. Tu écris ton scénario dans un éditeur au format standard, l'outil génère le découpage technique et le storyboard à partir du texte, puis tu produis les plans vidéo dans le même projet, avec des modèles comme Seedance 2.5, Veo 3.1 ou Kling v3.0. Le storyboard reste relié au scénario.",
    },
    {
      type: "screenshot",
      src: `${IMG}-screenweaver-tarifs.webp`,
      alt: "Section tarifs de ScreenWeaver en français : Screenwriter gratuit, Auteur 39,99 dollars par mois avec 6 000 crédits, Studio 149,99 dollars par mois avec 25 000 crédits",
      caption:
        "Les trois offres de ScreenWeaver. L'offre gratuite couvre l'écriture ; la génération du storyboard commence à Auteur.",
      source: "https://www.screenweaver.ai/fr#pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Ce qu'il faut savoir avant de t'y mettre. L'offre gratuite, Screenwriter, sert à écrire : éditeur, séquencier, moodboards, export PDF et Final Draft. La génération du storyboard et de la vidéo demande l'offre Auteur, à 39,99 $ par mois avec 6 000 crédits, sans période d'essai. La collaboration en temps réel est réservée à Studio, à 149,99 $. Et il n'y a pas de facturation annuelle.",
    },
    {
      type: "p",
      text: "Face à Boords, ScreenWeaver est moins outillé pour la validation client : son site ne documente ni revue sans compte ni historique des validations, et Boords a onze ans de rodage auprès des agences. Face à LTX Studio, il a moins de fonctions de post-production (doublage, sous-titres, kit de marque). Son terrain, c'est l'écriture : si ton film naît dans le scénario et que tu le réécris pendant que tu storyboardes, c'est là qu'il se défend le mieux. Les épisodes de Lost Garden ont été faits dedans, du scénario à la production des plans. Pour le détail du flux, lis [mon guide ScreenWeaver du scénario au storyboard](/blog/screenweaver-scenario-storyboard-ia).",
    },

    { type: "h2", id: "higgsfield-popcorn", text: "4. Higgsfield Popcorn : la séquence cohérente en un clic" },
    {
      type: "p",
      text: "Popcorn est le générateur de storyboard de Higgsfield. Son idée est simple : au lieu de générer chaque image séparément, il produit une séquence de jusqu'à 8 images où le visage, la lumière et l'ambiance restent les mêmes. Trois modes : Manual (tu diriges chaque image), Auto (un prompt, Popcorn développe la séquence) et Instadump (tes photos restylées).",
    },
    {
      type: "screenshot",
      src: `${IMG}-higgsfield-popcorn.webp`,
      alt: "Centre d'aide Higgsfield, article How do I use Popcorn daté du 2 août 2026 : séquences de jusqu'à 8 images cohérentes, modes Manual, Auto et Instadump",
      caption:
        "L'aide officielle de Popcorn : 8 images par séquence, et jusqu'à 4 références (portrait, objet, lieu) appelées par leur numéro dans le prompt.",
      source: "https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pour une pub de 20 secondes ou une scène isolée, c'est exactement l'usage pour lequel il est conçu. Pour un court métrage, la limite se voit vite : Popcorn part d'un prompt, pas d'un scénario, et au-delà de 8 images il faut chaîner les séquences à la main en réutilisant la dernière image comme référence. Les images servent ensuite de point de départ aux modèles vidéo de la plateforme (l'aide cite Kling et Veo).",
    },
    {
      type: "p",
      text: "L'offre Starter coûte 19 € par mois pour 270 crédits, affichée depuis la France, et le coût exact s'affiche sur le bouton avant chaque génération. Higgsfield traîne aussi des [plaintes publiques sur Trustpilot](https://www.trustpilot.com/review/higgsfield.ai) au sujet de la facturation et des résiliations : lis la politique de remboursement avant de t'abonner. J'en parle en détail dans [mon guide Higgsfield](/blog/higgsfield-guide).",
    },

    { type: "h2", id: "storyboardhero", text: "5. StoryboardHero : petit prix et dessinateurs humains" },
    {
      type: "p",
      text: "Les fondateurs de StoryboardHero dirigent une agence vidéo à Singapour, et l'outil suit la logique d'une agence : tu donnes un brief court, l'outil écrit un script (scènes, voix off, angles), puis l'illustre. Sa particularité : si l'IA ne s'en sort pas sur une image compliquée, tu peux demander un dessin fait main par l'équipe d'illustrateurs, payé à part.",
    },
    {
      type: "screenshot",
      src: `${IMG}-storyboardhero-tarifs.webp`,
      alt: "Page tarifs StoryboardHero : Solo 19 dollars par mois pour 1 siège, Starter 59 dollars pour 5 sièges, Advanced 199 dollars pour 10 sièges, Enterprise sur devis",
      caption:
        "La grille StoryboardHero : images IA standard illimitées sur toutes les offres, et un quota d'images « premium » qui grimpe avec le prix.",
      source: "https://storyboardhero.ai/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "À 19 $ par mois, c'est l'entrée la moins chère du classement pour un storyboard IA utilisable avec un client : export PDF, commentaires des invités, protection par mot de passe, export MP4. Deux réserves. Aucun modèle IA n'est nommé sur le site, donc tu ne sais pas ce qui génère tes images. Et la dernière nouveauté datée que j'ai trouvée sur le site remonte à la v2, en mai 2024. La page tarifs n'affiche ni offre gratuite ni essai, seulement une garantie de remboursement de 7 jours sur l'offre Solo.",
    },

    { type: "h2", id: "storyboarder", text: "6. Storyboarder : le gratuit pour apprendre à dessiner ses plans" },
    {
      type: "p",
      text: "Storyboarder, de Wonder Unit, n'a pas d'IA générative. Il a sa place ici quand même, parce que c'est l'outil que je conseille à un étudiant qui n'a pas de budget. Tu dessines des bonhommes vite, tu notes dialogue, action et durée sous chaque case, et tu exportes vers Premiere, Final Cut ou en PDF. Gratuit, sur Mac, Windows et Linux.",
    },
    {
      type: "gallery",
      caption: "Storyboarder reste téléchargeable, mais son développement est à l'arrêt.",
      items: [
        {
          src: `${IMG}-storyboarder.webp`,
          alt: "Page produit de Storyboarder par Wonder Unit, bouton Download for Free et mention Version 1.0.0 pour Mac OS X, Windows et Linux",
          caption: "La page produit affiche toujours « Version 1.0.0 ».",
          source: "https://wonderunit.com/storyboarder/",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
        {
          src: `${IMG}-storyboarder-github.webp`,
          alt: "Page Releases du dépôt GitHub wonderunit/storyboarder, version v3.0.0 marquée Pre-release et publiée le 17 février 2021",
          caption: "Sur GitHub, la v3.0.0 est en pré-version depuis le 17 février 2021.",
          source: "https://github.com/wonderunit/storyboarder/releases",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
      ],
    },
    {
      type: "p",
      text: "Sache dans quoi tu t'engages : la dernière version stable, la 2.1.0, date de septembre 2020, et des utilisateurs demandent en 2026 sur GitHub si le projet est encore maintenu, sans réponse. Pour apprendre le découpage, peu importe : dessiner tes plans toi-même t'apprend plus sur le cadrage que n'importe quel générateur. Le jour où tu veux de l'IA, ton storyboard dessiné peut servir de référence dans les autres outils.",
    },

    { type: "h2", id: "katalist", text: "7. Katalist : je ne le conseille plus pour un film" },
    {
      type: "p",
      text: "Katalist s'est fait connaître comme outil de storyboard IA : un script, des personnages cohérents, puis la vidéo. En octobre 2026, sa page d'accueil parle d'autre chose : remplacer un produit dans une pub qui marche, décliner une vidéo par référence produit, viser les équipes de marketing à la performance. Le découpage d'un script en storyboard existe toujours, relégué en bas de page, dans la FAQ.",
    },
    {
      type: "screenshot",
      src: `${IMG}-katalist-home.webp`,
      alt: "Page d'accueil de Katalist en octobre 2026 : titre Give your winning creatives new life, avec la promesse de remplacer un produit dans les pubs performantes",
      caption:
        "La nouvelle page d'accueil de Katalist parle de publicité et de déclinaisons produit, plus de storyboard de film.",
      source: "https://www.katalist.ai",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Autre détail qui me retient : la page tarifs affiche l'offre Essential à 19 $ sans préciser la période, et sa liste de modèles cite un « Google Veo 3.2 » que je n'ai trouvé chez aucun autre outil, Google documentant Veo 3.1. Si tu fais de la pub produit, regarde-le. Pour un court métrage, prends un des cinq premiers.",
    },

    { type: "h2", id: "par-profil", text: "Quel outil choisir selon ton profil" },
    { type: "h3", id: "etudiant", text: "Tu es étudiant, en cinéma ou en animation" },
    {
      type: "p",
      text: "Commence par Storyboarder pour dessiner ton premier découpage, c'est gratuit et ça t'oblige à réfléchir à chaque cadre. Ensuite, ouvre un compte gratuit Boords pour voir ce que donnent tes cases avec 8 images IA. Si tu as besoin d'aller jusqu'à la vidéo pour un projet de fin d'année, l'offre gratuite de LTX Studio (800 crédits une fois) suffit pour tester, en sachant que tu n'as pas la licence commerciale.",
    },
    { type: "h3", id: "agence", text: "Tu es en agence ou en production publicitaire" },
    {
      type: "p",
      text: "Boords, sans hésiter, dès que le client doit valider. La revue sans compte et l'historique des validations valent plus que n'importe quel modèle d'image. Si ton budget est serré et que tu veux des sièges pour l'équipe, StoryboardHero à 59 $ pour 5 sièges est l'alternative, avec le filet des dessinateurs humains.",
    },
    { type: "h3", id: "realisateur", text: "Tu es réalisateur et tu veux produire en IA" },
    {
      type: "p",
      text: "Deux options. LTX Studio si tu veux le plus de modèles et des outils de montage dans le même espace, à partir de l'offre Standard pour avoir les storyboards IA et la licence commerciale. ScreenWeaver si ton projet vit dans le scénario et que tu veux que storyboard et plans suivent tes réécritures. Dans les deux cas, la cohérence de tes personnages se joue avant l'outil : prépare tes fiches personnages comme dans [ma méthode pour garder un personnage cohérent](/blog/personnage-coherent-ia).",
    },

    { type: "h2", id: "tester", text: "Comment tester un outil de storyboard IA en une heure" },
    {
      type: "p",
      text: "Ne choisis pas sur une démo. Prends une vraie scène de ton projet, d'une à deux pages, et fais passer chaque outil candidat par le même parcours :",
    },
    {
      type: "ol",
      items: [
        "Importe ou colle la scène et regarde le découpage proposé : combien de plans, et est-ce qu'ils suivent l'action ?",
        "Génère les cases avec le même personnage principal et compte combien de cases gardent son visage.",
        "Modifie une réplique dans le script, puis regarde ce que devient le storyboard.",
        "Exporte en PDF et envoie le lien à quelqu'un : est-ce qu'il peut commenter sans créer de compte ?",
        "Note les crédits consommés et rapporte-les au quota mensuel de l'offre que tu vises.",
      ],
    },
    {
      type: "p",
      text: "À mon avis, la troisième étape est celle qui départage le plus. Un script bouge toujours pendant la préparation, et un storyboard qui ne suit pas t'oblige à refaire le travail à chaque version.",
    },
    { type: "cta", variant: "screenweaver", destination: "fr", title: "Écris ton scénario gratuitement, storyboarde quand tu es prêt" },

    {
      type: "methodology",
      date: "2026-10-17",
      text: [
        "J'ai lu et capturé le 17 octobre 2026 les pages tarifs et la documentation officielles de chaque outil, depuis la France, sans connexion à un compte. Les prix sont ceux affichés ce jour-là, dans la devise affichée.",
        "Je suis co-fondateur de ScreenWeaver. Pour cet outil, je ne cite que ce que le site public affiche et ce que l'offre gratuite ne permet pas.",
      ],
      teste: [
        "La lecture des pages tarifs de Boords, LTX Studio, ScreenWeaver, Higgsfield, StoryboardHero et Katalist",
        "La documentation de conversion script vers storyboard de Boords et l'aide Popcorn de Higgsfield",
        "La page produit et le dépôt GitHub de Storyboarder",
      ],
      nonTeste: [
        "Aucune génération d'images ni de vidéo lancée dans ces outils pour cet article",
        "Les offres Enterprise et les tarifs sur devis",
        "La qualité comparée des images sur un même scénario",
      ],
      sources: [
        { label: "Boords, Turning a script into a storyboard", href: "https://boords.com/docs/script-to-storyboard" },
        { label: "LTX Studio Pricing", href: "https://ltx.io/studio/pricing" },
        { label: "Higgsfield, How do I use Popcorn?", href: "https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn" },
        { label: "Storyboarder sur GitHub", href: "https://github.com/wonderunit/storyboarder/releases" },
        { label: "StoryboardHero Pricing", href: "https://storyboardhero.ai/pricing" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Quel est le meilleur outil de storyboard IA en 2026 ?" },
    {
      type: "p",
      text: "Ça dépend de ce que tu fais du storyboard. Pour le faire valider par un client, Boords. Pour partir d'un scénario et aller jusqu'à la vidéo, LTX Studio ou ScreenWeaver (dont je suis co-fondateur). Pour dessiner gratuitement, Storyboarder. Aucun outil ne gagne sur les trois usages à la fois.",
    },
    { type: "h3", id: "faq-2", text: "Existe-t-il un outil de storyboard IA vraiment gratuit ?" },
    {
      type: "p",
      text: "Pas avec de la génération d'images illimitée. Boords offre 5 storyboards actifs et 8 crédits d'images uniques, LTX Studio 800 crédits une seule fois en usage personnel. Storyboarder est entièrement gratuit, mais il n'a pas d'IA générative : tu dessines toi-même.",
    },
    { type: "h3", id: "faq-3", text: "Un storyboard IA reste-t-il synchronisé avec le scénario ?" },
    {
      type: "p",
      text: "Pas toujours. La documentation de Boords précise que le storyboard ne suit pas les modifications du script : chaque conversion crée un nouveau storyboard. ScreenWeaver, lui, garde le découpage relié au scénario. Pose la question avant de choisir si ton script bouge encore.",
    },
    { type: "h3", id: "faq-4", text: "Peut-on utiliser un storyboard IA pour un projet commercial ?" },
    {
      type: "p",
      text: "Oui, mais lis la licence de l'offre. Chez LTX Studio, les offres Free et Lite sont réservées à l'usage personnel et la licence commerciale commence à l'offre Standard. StoryboardHero affiche l'usage commercial sur toutes ses offres.",
    },
    { type: "h3", id: "faq-5", text: "Storyboarder de Wonder Unit est-il encore maintenu ?" },
    {
      type: "p",
      text: "Le logiciel se télécharge toujours, mais la dernière version stable date de septembre 2020 et la version 3.0.0 est en pré-version depuis février 2021. Il reste utile pour dessiner vite, sans attendre de nouvelles fonctions.",
    },
    { type: "h3", id: "faq-6", text: "Higgsfield Popcorn suffit-il pour faire un storyboard ?" },
    {
      type: "p",
      text: "Pour une séquence courte, oui : il génère jusqu'à 8 images cohérentes à partir d'un prompt et de 4 références. Pour un film entier, il faut enchaîner les séquences à la main, car Popcorn part d'un prompt et pas d'un scénario.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-17 -->
