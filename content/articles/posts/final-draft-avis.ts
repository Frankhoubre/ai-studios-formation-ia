import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-12";
const IMG = "/images/articles/final-draft-avis";
const FD_PRODUIT = "https://www.finaldraft.com/products/final-draft/";
const FD_TARIFS = "https://www.finaldraft.com/pricing/";
const FD_UPGRADE = "https://www.finaldraft.com/products/final-draft-upgrade";
const FD_ESSAI = "https://www.finaldraft.com/trial";
const FD_LANGUES = "https://www.finaldraft.com/company/international";
const FD_EDU = "https://www.finaldraft.com/products/final-draft-edu";
const WIKI_FD = "https://en.wikipedia.org/wiki/Final_Draft_(software)";
const RESOLVE = "https://www.blackmagicdesign.com/products/davinciresolve/whatsnew";
const SW_ALTERNATIVE = "https://www.screenweaver.ai/fr/final-draft-alternative";

const FAQ = [
  {
    question: "Combien coûte Final Draft en 2026 ?",
    answer:
      "Le 12 novembre 2026, la licence Final Draft 13 est affichée à 199,99 dollars au lieu de 249,99, en paiement unique. La Suite (Final Draft 13 plus Final Draft Cloud) coûte 69,99 dollars par an en promotion Black Friday au lieu de 99,99, ou 16,99 dollars par mois. La version étudiant est à 99,99 dollars avec vérification. Les prix sont en dollars et la date de fin de la promotion n'est pas indiquée.",
  },
  {
    question: "Final Draft existe-t-il en français ?",
    answer:
      "Final Draft 13 est livré avec des polices qui couvrent le français, donc tu peux écrire ton scénario en français sans souci d'accents. En revanche, les pages officielles que j'ai relues ne promettent nulle part une interface traduite en français. Compte sur des menus en anglais.",
  },
  {
    question: "Y a-t-il un essai gratuit de Final Draft ?",
    answer:
      "Oui, mais il porte sur la Suite, pas sur la licence seule. L'essai dure 5 jours, sur un seul ordinateur à la fois. La page indique qu'aucun montant n'est prélevé le jour même et que l'abonnement démarre après l'essai si tu n'annules pas. Les fichiers créés pendant l'essai restent accessibles si tu achètes ensuite.",
  },
  {
    question: "Final Draft fonctionne-t-il sur Chromebook ou iPad ?",
    answer:
      "Final Draft 13 tourne sur macOS 12 (Monterey) ou plus récent et sur Windows 11 ou plus récent. Il n'est pas disponible sur Chromebook. Pour l'iPad et l'iPhone, il existe une application séparée, Final Draft Go, vendue sur l'App Store et non incluse dans la licence de bureau.",
  },
  {
    question: "Faut-il prendre la licence ou l'abonnement Suite ?",
    answer:
      "Fais le calcul sur ta durée d'usage. Au tarif mensuel, la Suite dépasse le prix de la licence (199,99 dollars) dès le douzième mois. Au tarif annuel promotionnel de 69,99 dollars, il faut environ trois ans pour l'atteindre. La Suite ajoute le Cloud (stockage et partage en ligne) ; si tu écris seul sur ton ordinateur, la licence suffit.",
  },
  {
    question: "Final Draft a-t-il des fonctions d'intelligence artificielle ?",
    answer:
      "Les pages produit, tarifs et mise à jour relues le 12 novembre 2026 n'en mentionnent aucune. Final Draft reste un logiciel d'écriture et de mise en page de scénario, avec des outils de structure (Beat Board, Outline Editor, Structure Lines). Pour passer du scénario aux plans et à la vidéo IA, il faut un autre outil qui lit le fichier FDX.",
  },
];

export const finalDraftAvis: Article = {
  title: "Final Draft avis : prix, essai et limites en 2026",
  slug: "final-draft-avis",
  description:
    "Final Draft avis : licence 13 à 199,99 $, Suite à 69,99 $/an, essai de 5 jours, français et limites. Ce qu'un créateur vidéo IA doit vérifier avant de payer.",
  excerpt:
    "Final Draft reste la référence du scénario mis en page. Mais entre licence, abonnement Suite, essai de 5 jours et prix en dollars, on paie vite pour rien. Les tarifs relevés le 12 novembre 2026 et ce que le logiciel apporte vraiment à un créateur vidéo IA.",
  category: "storytelling",
  tags: ["Final Draft", "scénario", "logiciel d'écriture", "avis", "vidéo IA"],
  date: "2026-11-12",
  updatedAt: "2026-11-12",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/final-draft-avis.webp",
  imageAlt:
    "Lecture à la table dans une salle de répétition baignée de soleil d'automne : quatre comédiens autour d'une longue table en bois lisent des scénarios reliés par des attaches en laiton, une metteuse en scène debout annote une page au crayon rouge",
  keywords: ["final draft avis", "final draft prix", "final draft en français", "final draft test", "final draft 13"],
  relatedSlugs: ["ecrire-scenario-ia-methode-outils", "screenweaver-scenario-storyboard-ia", "meilleurs-outils-storyboard-ia"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu as un court métrage IA en tête, un premier jet dans un document texte, et tout le monde te répète qu'un vrai scénario s'écrit sur Final Draft. Avant de sortir 200 dollars, pose-toi une question simple : qu'est-ce que ce logiciel fera pour ta vidéo, une fois le scénario fini ?",
    },
    {
      type: "p",
      text: "J'ai relu le 12 novembre 2026 toutes les pages officielles qui comptent pour un achat : produit, tarifs, mise à jour, essai, configuration et langues. Tu as ici les prix exacts, ce que couvre l'essai de 5 jours, ce qu'il ne fait pas en français, et ma façon de le tester sans te faire prélever.",
    },
    {
      type: "p",
      text: "Je préfère être clair d'entrée : je développe ScreenWeaver, un outil qui importe les fichiers Final Draft pour en tirer un storyboard. Il sert justement à reprendre des scénarios écrits ailleurs, Final Draft compris, donc tu dois connaître ce lien pour lire la suite. Les faits viennent des pages de Final Draft, les opinions sont signalées comme telles.",
    },
    { type: "h2", id: "verdict", text: "Mon avis sur Final Draft en deux minutes" },
    {
      type: "verdict",
      title: "Mon verdict sur Final Draft 13",
      pourQui:
        "Les scénaristes qui envoient leurs textes à des producteurs, des concours ou des équipes de tournage, et qui veulent le format que tout le monde ouvre sans conversion.",
      forts: [
        "Licence en **paiement unique** (199,99 $ en promotion), sans abonnement obligatoire",
        "Le fichier **FDX** s'ouvre dans de nombreux outils de production et de storyboard",
        "Outils de structure intégrés : Beat Board, Outline Editor, Structure Lines",
        "Une licence s'active sur **deux ordinateurs**, avec 30 jours pour se faire rembourser",
      ],
      faibles: [
        "Prix affichés **en dollars** uniquement, sans grille en euros sur les pages relues",
        "Aucune interface en français promise : seules les polices couvrent le français",
        "L'essai gratuit concerne uniquement la Suite par abonnement",
        "Pas de Chromebook, et l'app iPad (Final Draft Go) se paie à part",
      ],
      verdict:
        "Si tu écris pour d'autres professionnels, la licence se rentabilise. Si tu écris seul pour générer tes propres vidéos IA, tu paies surtout un format que des outils gratuits savent déjà produire.",
    },
    { type: "h2", id: "core-concepts", text: "Ce que tu achètes vraiment avec Final Draft 13" },
    {
      type: "p",
      text: "Final Draft 13 est un logiciel de bureau qui met ton texte en page au format standard du cinéma et de la télévision : intitulés de scène, action, personnages, dialogues, transitions. Tu tapes, il place chaque élément au bon retrait. C'est son métier depuis des décennies, et la [page Wikipédia du logiciel](" + WIKI_FD + ") retrace cet historique.",
    },
    {
      type: "screenshot",
      src: `${IMG}-home.webp`,
      alt: "Page produit Final Draft 13 avec le prix barré de 249,99 dollars, le prix promotionnel de 199,99 dollars et les deux formules d'abonnement à la Suite",
      caption: "La page produit affiche la licence et, juste en dessous, les deux abonnements Suite qui incluent aussi le Cloud.",
      source: FD_PRODUIT,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "licence-ou-suite", text: "Licence ou Suite : deux produits sous le même nom" },
    {
      type: "p",
      text: "La **licence Final Draft 13** est un achat unique : le logiciel t'appartient dans sa version 13. La **Final Draft Suite** est un abonnement qui comprend Final Draft 13 et Final Draft Cloud, une interface d'écriture en ligne avec stockage et partage. La page tarifs précise noir sur blanc que la licence seule « n'inclut pas Final Draft Cloud ».",
    },
    {
      type: "p",
      text: "Côté fonctions, la page de mise à jour liste ce qu'apporte la version 13 : modes Midnight et Typewriter, objectifs d'écriture et statistiques, Structure Lines, un Navigator amélioré, le Beat Board et l'Outline Editor. Rien de tout ça ne touche à l'image : c'est de l'écriture et de la structure.",
    },
    { type: "h3", id: "format-fdx", text: "Le vrai produit, c'est le fichier FDX" },
    {
      type: "p",
      text: "Pour un créateur vidéo IA, l'intérêt de Final Draft tient moins à l'éditeur qu'à son format de fichier, le **.fdx**. C'est ce fichier que tu enverras à un producteur, que tu importeras dans un outil de découpage ou de storyboard, et que certains logiciels de montage savent lire. Au fond, tu paies surtout une compatibilité.",
    },
    { type: "h2", id: "prix", text: "Final Draft prix : ce que tu paies selon la formule" },
    {
      type: "comparison",
      caption: "Les formules Final Draft affichées sur le site officiel le 12 novembre 2026",
      headers: ["Formule", "Prix affiché", "Prix barré", "Type de paiement", "Ce qui est inclus"],
      rows: [
        ["Final Draft 13", "199,99 $", "249,99 $", "Unique", "Logiciel de bureau, sans Cloud"],
        ["Suite annuelle", "69,99 $ / an", "99,99 $", "Abonnement", "Final Draft 13 + Cloud, essai de 5 jours"],
        ["Suite mensuelle", "16,99 $ / mois", "Aucun", "Abonnement", "Final Draft 13 + Cloud, essai de 5 jours"],
        ["Mise à jour 13", "99,99 $ (page produit) ou 79,99 $ (page tarifs)", "129,99 $", "Unique", "Pour un client d'une version précédente"],
        ["Étudiant", "99,99 $", "129,99 $", "Unique", "Final Draft 13, vérification du statut"],
      ],
      source: [
        { label: "Final Draft, Products & Pricing", href: FD_TARIFS },
        { label: "Final Draft 13, page produit", href: FD_PRODUIT },
        { label: "Final Draft 13 Upgrade", href: FD_UPGRADE },
        { label: "Final Draft EDU", href: FD_EDU },
      ],
      verifieLe: CAPTURE,
      note: "Prix en dollars américains, promotion Black Friday sans date de fin affichée.",
    },
    {
      type: "p",
      text: "Le jour de mon relevé, la mise à jour affichait 99,99 $ sur sa page produit et 79,99 $ sur la page tarifs. Fie-toi au montant du panier. Autre détail qui pique : tout est en dollars. Ta banque appliquera son taux de change et, selon ta carte, des frais sur paiement en devise.",
    },
    {
      type: "screenshot",
      src: `${IMG}-tarifs.webp`,
      alt: "Page Products & Pricing de Final Draft comparant la Suite à partir de 5,83 dollars par mois facturés à l'année et Final Draft 13 à 199,99 dollars en paiement unique",
      caption: "La page tarifs met côte à côte la Suite et la licence, avec la mention « Does not include Final Draft Cloud » pour la seconde.",
      source: FD_TARIFS,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "calcul-licence-abonnement", text: "Le calcul qui tranche entre licence et abonnement" },
    {
      type: "p",
      text: "Au tarif mensuel, la Suite coûte 16,99 $ fois 12, soit **203,88 $ la première année**. Tu as dépassé le prix de la licence avant le premier anniversaire. Au tarif annuel promotionnel de 69,99 $, il faut trois ans (209,97 $) pour arriver au même montant, à condition que le prix promo soit reconduit, ce que rien ne garantit.",
    },
    {
      type: "p",
      text: "Mon avis : si tu écris seul et que le Cloud ne te sert pas, prends la licence. L'abonnement mensuel a du sens pour un projet court, par exemple un mois d'écriture intense avant un concours, puis résiliation.",
    },
    {
      type: "screenshot",
      src: `${IMG}-upgrade.webp`,
      alt: "Page Final Draft 13 Upgrade à 99,99 dollars au lieu de 129,99 avec les mentions activation sur deux ordinateurs et garantie de remboursement de 30 jours",
      caption: "La page de mise à jour rappelle les deux garanties utiles : deux ordinateurs par licence et 30 jours pour être remboursé.",
      source: FD_UPGRADE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "configuration-langues", text: "Final Draft en français, sur Mac, PC et mobile" },
    {
      type: "p",
      text: "La configuration minimale est courte : **macOS 12 (Monterey)** ou plus récent, **Windows 11** ou plus récent avec un processeur Intel ou AMD. La page produit l'écrit en toutes lettres : pas de Chromebook. Une licence s'active sur deux ordinateurs ; la FAQ précise que tu peux l'installer partout, mais rester connecté sur deux machines à la fois au maximum.",
    },
    {
      type: "screenshot",
      src: `${IMG}-config.webp`,
      alt: "Bas de la page produit Final Draft 13 indiquant macOS 12 Monterey ou plus récent, Windows 11 ou plus récent et l'absence de version Chromebook",
      caption: "La configuration minimale et les mentions de licence, sous les formules d'abonnement de la page produit.",
      source: FD_PRODUIT,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Pour l'iPad et l'iPhone, la FAQ renvoie vers une application distincte, Final Draft Go, vendue sur l'App Store. Elle n'est pas comprise dans la licence de bureau.",
    },
    {
      type: "p",
      text: "Reste le point qui fait chercher « final draft en français ». La page International explique que Final Draft 13 est livré avec des **polices** qui couvrent une longue liste de langues, dont le français, et que tu peux ajouter tes propres polices. Ça concerne les accents et les cédilles de ton texte ; sur les menus, la page ne dit rien. Je n'ai trouvé aucune page officielle qui annonce une interface en français : pars du principe que tout sera en anglais.",
    },
    {
      type: "screenshot",
      src: `${IMG}-langues.webp`,
      alt: "Page International de Final Draft expliquant que la version 13 est livrée avec des polices pour les langues listées, suivie de la liste des langues prises en charge",
      caption: "La liste concerne les polices livrées avec le logiciel ; la langue des menus n'y figure pas.",
      source: FD_LANGUES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "practical-workflow", text: "Final Draft test : l'essai de 5 jours sans mauvaise surprise" },
    {
      type: "p",
      text: "L'essai gratuit est celui de la Suite. Ses deux limites sont écrites sur la page : 5 jours, et un seul ordinateur à la fois. Aucun montant n'est prélevé le premier jour, puis l'abonnement choisi (mensuel ou annuel) démarre si tu n'as pas annulé. Les fichiers créés pendant l'essai restent accessibles après un achat.",
    },
    {
      type: "screenshot",
      src: `${IMG}-essai.webp`,
      alt: "Page d'essai Final Draft avec le bouton Start Your Free Trial, la mention No charge today et un aperçu de l'espace de projets Final Draft Cloud",
      caption: "La page d'essai rappelle que les fichiers de l'essai sont conservés et qu'on peut annuler pendant la période gratuite.",
      source: FD_ESSAI,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "table",
      caption: "Ce que je vérifierais pendant les 5 jours d'essai, du point de vue d'un créateur vidéo IA",
      headers: ["Jour", "Ce que tu fais", "Ce que tu vérifies"],
      rows: [
        ["1", "Tu colles ton premier jet et tu le remets en forme", "Le temps passé à corriger la mise en page"],
        ["2", "Tu écris deux scènes neuves directement dans le logiciel", "Les raccourcis entre action, personnage et dialogue"],
        ["3", "Tu poses ta structure dans le Beat Board", "Si la vue par cartes t'aide vraiment ou si tu reviens au texte"],
        ["4", "Tu exportes en FDX et en PDF", "Que le FDX s'ouvre dans l'outil où tu prépares tes plans"],
        ["5", "Tu décides, puis tu annules ou tu achètes la licence", "Que l'abonnement ne démarre pas si tu pars"],
      ],
    },
    {
      type: "ol",
      items: [
        "Avant de lancer l'essai, note la date et l'heure dans ton agenda, avec un rappel au matin du quatrième jour.",
        "Choisis l'abonnement mensuel au moment de l'essai : en cas d'oubli, tu perds 16,99 $ au lieu d'une année entière.",
        "Travaille sur un vrai projet : le court métrage que tu veux tourner en IA ce mois-ci.",
        "Le quatrième jour, exporte ton FDX et importe-le dans ton outil de storyboard ou de découpage. C'est le test qui compte.",
        "Si tu gardes Final Draft, résilie l'essai et achète la licence à part : tes fichiers restent lisibles.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : avant de payer, fais le test inverse. Écris tes deux scènes dans un outil gratuit qui exporte en FDX, ouvre ce fichier dans l'essai Final Draft et regarde si la mise en page tient. Si oui, tu sais que ton outil de production n'a pas besoin de Final Draft pour lire ton texte.",
    },
    {
      type: "p",
      text: "Pour la méthode d'écriture elle-même, logline, séquencier et réécriture, j'ai détaillé un parcours dans [apprendre à écrire un scénario en 4 semaines](/blog/apprendre-ecrire-scenario). Et si tu veux faire travailler l'IA sur ton texte sans la laisser écrire à ta place, lis [ma méthode pour écrire un scénario avec l'IA](/blog/ecrire-scenario-ia-methode-outils).",
    },
    { type: "h2", id: "workflow-video-ia", text: "Final Draft dans un workflow de vidéo IA" },
    {
      type: "p",
      text: "Final Draft s'arrête au texte. Les pages relues ne mentionnent aucune fonction d'intelligence artificielle, aucun découpage en plans, aucune image. Pour un film IA, le scénario n'est que la première étape : il faut ensuite un découpage technique, un storyboard, des prompts, puis la génération.",
    },
    {
      type: "p",
      text: "Le fichier FDX sert de passerelle. Côté montage, Blackmagic Design présente dans ses [nouveautés de DaVinci Resolve](" + RESOLVE + ") une fonction IntelliScript qui compare le scénario à l'audio transcrit et accepte les fichiers Final Draft. J'en parle dans [mon article sur le montage automatique](/blog/montage-automatique-ia). Côté préparation, plusieurs outils de storyboard importent ce format, et j'en compare quelques-uns dans mon [comparatif des outils de storyboard IA](/blog/meilleurs-outils-storyboard-ia).",
    },
    {
      type: "p",
      text: "Je reviens à mon outil, puisque tu connais le conflit d'intérêts. ScreenWeaver importe gratuitement un fichier Final Draft et exporte aussi en FDX, avec un plan Scénariste gratuit qui contient l'éditeur de scénario. J'ai rassemblé les différences sur une page dédiée, [ScreenWeaver comme alternative à Final Draft](" + SW_ALTERNATIVE + "). Si tu écris déjà sur Final Draft, garde-le : l'import suffit pour enchaîner sur le storyboard, comme je le montre dans [mon pas-à-pas scénario et storyboard](/blog/screenweaver-scenario-storyboard-ia).",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui coûtent cher avec Final Draft" },
    { type: "h3", id: "erreur-abonnement-mensuel", text: "Laisser tourner l'abonnement mensuel" },
    {
      type: "p",
      text: "Symptôme : tu as pris la Suite au mois pour un projet, tu as fini en six semaines, et un an plus tard tu as payé plus que la licence. Fix concret : dès que le projet est livré, résilie, ou bascule sur la licence si tu sais que tu réécriras l'an prochain.",
    },
    { type: "h3", id: "erreur-essai", text: "Oublier que l'essai devient un abonnement" },
    {
      type: "p",
      text: "Symptôme : un prélèvement annuel tombe le sixième jour alors que tu avais juste « regardé ». Fix concret : choisis la formule mensuelle au moment de l'essai et annule le quatrième jour si tu n'es pas convaincu. La page dit qu'on peut annuler à tout moment pendant l'essai.",
    },
    { type: "h3", id: "erreur-francais", text: "Acheter en comptant sur une interface en français" },
    {
      type: "p",
      text: "Symptôme : tu découvres des menus entièrement en anglais et tu passes ta première soirée à chercher où se cache le Beat Board. Fix concret : ouvre l'essai et parcours les menus avant d'acheter. Si l'anglais te bloque, un outil traduit te fera gagner plus de temps que le prestige du format.",
    },
    { type: "h3", id: "erreur-appareil", text: "Payer pour un appareil qui ne le fait pas tourner" },
    {
      type: "p",
      text: "Symptôme : tu écris sur un Chromebook ou un iPad et la licence ne s'installe pas. Fix concret : vérifie la configuration minimale (macOS 12, Windows 11) avant le paiement. Pour l'iPad, c'est Final Draft Go, une autre application achetée sur l'App Store.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "script",
      title: "Importe ton fichier Final Draft et passe au storyboard",
      text: "ScreenWeaver importe ton fichier Final Draft gratuitement, puis t'aide à découper tes scènes en plans. Le plan Scénariste ne coûte rien.",
    },
    {
      type: "p",
      text: "Si tu veux apprendre à tirer une vraie vidéo de ton scénario, du découpage à la génération, ma formation IA est gratuite. Je t'y montre le chemin complet sur des exemples concrets, avec les outils que j'utilise vraiment.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 12 novembre 2026 les pages officielles de Final Draft (produit, tarifs, mise à jour, éducation, essai, International) et capturé chacune d'elles le même jour. Les prix cités sont ceux affichés ce jour-là, en pleine promotion Black Friday.",
        "Je n'ai pas lancé l'essai de 5 jours pour cet article, et je n'ai pas acheté de licence : les conseils sur l'essai reposent sur la description de la page. Conflit d'intérêts : je développe ScreenWeaver, qui importe et exporte le format FDX.",
      ],
      teste: [
        "La lecture des prix, des formules et de leurs inclusions sur le site officiel le 12 novembre 2026",
        "La vérification de la configuration minimale, des conditions d'essai et de la liste des langues",
        "Le calcul du point d'équilibre entre licence et abonnement Suite",
      ],
      nonTeste: [
        "Une session d'écriture dans Final Draft 13 pendant l'essai",
        "Le prix de Final Draft Go sur l'App Store",
        "Le montant final en euros dans le panier, qui dépend de ta banque",
      ],
      sources: [
        { label: "Final Draft 13, page produit", href: FD_PRODUIT },
        { label: "Final Draft, Products & Pricing", href: FD_TARIFS },
        { label: "Final Draft 13 Upgrade", href: FD_UPGRADE },
        { label: "Final Draft EDU", href: FD_EDU },
        { label: "Final Draft, essai gratuit", href: FD_ESSAI },
        { label: "Final Draft, International", href: FD_LANGUES },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-12 -->
