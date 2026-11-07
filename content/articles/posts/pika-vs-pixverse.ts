import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-07";
const IMG = "/images/articles/pika-vs-pixverse";
const PI_PRICING = "https://pika.art/pricing";
const PI_STUDIO = "https://create.pika.art/apps/create-video";
const PI_APPS = "https://create.pika.art/apps";
const PI_FAQ = "https://pika.art/faq";
const PV_APP = "https://app.pixverse.ai/";
const PV_PRICING = "https://app.pixverse.ai/subscribe";
const PV_TERMS = "https://pixverse.ai/en/terms-of-service";
const PV_V6 = "https://pixverse.ai/en/model/pixverse-v6";
const PV_BLOG = "https://pixverse.ai/en/blog/pika-pricing-vs-pixverse";

export const pikaVsPixverse: Article = {
  title: "Pika vs PixVerse : lequel choisir pour débuter en 2026 ?",
  slug: "pika-vs-pixverse",
  description:
    "Pika ou PixVerse pour débuter : PixVerse pour essayer sans payer, Pika à 10 $ pour Seedance et Kling. Crédits, droits et pièges relevés le 7/11/2026.",
  excerpt:
    "PixVerse donne des crédits gratuits chaque jour, Pika aucun. Mais à 10 $, c'est Pika qui ouvre le plus de modèles. Le comparatif clip par clip, sans duel d'images.",
  category: "ia-video",
  tags: ["pika", "pixverse", "comparatif", "vidéo ia", "débuter vidéo ia", "droits commerciaux"],
  date: "2026-11-07",
  updatedAt: "2026-11-07",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/pika-vs-pixverse.webp",
  imageAlt:
    "Dans une petite miellerie en bois en fin d'après-midi, une apicultrice en combinaison blanche lève un pot de miel vers la lumière, pendant que son fils note dans un carnet les différences entre deux clips qui tournent sur deux téléphones posés sur une étagère",
  keywords: ["pika vs pixverse", "pixverse vs pika", "pika ou pixverse", "pixverse gratuit", "générateur vidéo ia débutant"],
  relatedSlugs: ["pika-avis", "meilleurs-sites-video-ia-gratuits", "pika-luma-alternatives-video-ia"],
  faq: [
    {
      question: "Pika ou PixVerse : lequel choisir pour débuter ?",
      answer:
        "Commence sur PixVerse si tu ne veux rien payer : il donne 60 crédits à l'inscription puis 30 par jour, alors que Pika n'en donne aucun chaque mois. Si tu es prêt à mettre 10 $ par mois, je prendrais Pika Starter, qui ouvre tous les modèles, Seedance 2.5 et Kling 4.0 compris. PixVerse Standard reste limité à ses propres modèles en 720p.",
    },
    {
      question: "Lequel est gratuit ?",
      answer:
        "PixVerse, avec une sortie limitée à 540p et un filigrane. Le plan Free de Pika affiche 0 crédit par mois et sert à acheter des packs, à partir de 25 $. Le seul bonus que j'ai vu chez Pika le 7 novembre 2026 : 250 crédits après une première génération faite depuis ChatGPT.",
    },
    {
      question: "Combien de vidéos peut-on faire pour 10 $ par mois ?",
      answer:
        "Chez Pika Starter, 600 crédits donnent 60 clips Pika H3 Flex ou 30 clips Pika 2.5, ou encore 4 clips Seedance 2.5 en 720p, tous de 5 secondes. Chez PixVerse Standard, 1 200 crédits donnent 24 clips V6 de 5 secondes en 720p avec le son, plus un clip par jour avec les 60 crédits quotidiens si tu reviens chaque jour.",
    },
    {
      question: "Peut-on vendre les vidéos de Pika et de PixVerse ?",
      answer:
        "Oui à partir d'une offre payante, sous conditions. Pika inclut la licence dès Starter, les conditions du modèle choisi restant applicables. PixVerse limite l'usage commercial aux contenus générés par ses propres modèles, renvoie les modèles tiers aux règles de leur éditeur et interdit l'usage commercial de ses éléments prêts à l'emploi, comme les templates, sauf accord exprès.",
    },
    {
      question: "Les crédits Pika et PixVerse se comparent-ils ?",
      answer:
        "Non. Un clip Seedance 2.5 de 5 secondes en 720p affiche 122 crédits chez Pika et 375 chez PixVerse, sans que ça veuille dire qu'il coûte trois fois plus cher. Ramène toujours au prix en dollars du clip : environ 2,03 $ sur Pika Starter, 1,64 $ sur Pika Creator et 1,88 $ sur PixVerse Pro.",
    },
    {
      question: "Quel rendu est le meilleur, Pika 2.5 ou PixVerse V6 ?",
      answer:
        "Je ne peux pas le dire sérieusement : je n'ai lancé aucune génération pour cet article et les modèles changent vite. Plusieurs comparatifs donnent des notes sur 10, à partir des essais d'un seul auteur. Fais ton propre essai sur une même consigne, avec les crédits gratuits de PixVerse et le bonus de Pika.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Pour essayer la vidéo IA sans sortir ta carte, prends **PixVerse**, avec 60 crédits à l'inscription puis 30 par jour, alors que le plan gratuit de Pika n'en donne aucun. Si tu acceptes de payer 10 $ par mois, je prendrais plutôt **Pika Starter** : tous les modèles sont ouverts, Seedance 2.5 et Kling 4.0 compris, avec la licence commerciale. PixVerse Standard, au même prix, s'arrête à ses propres modèles et au 720p.",
    },
    {
      type: "p",
      text: "J'ai relevé tout ça le 7 novembre 2026 sur les pages officielles et dans les deux interfaces, visibles sans compte, sans lancer de génération. Tu ne trouveras donc ici aucun duel d'images. Méfie-toi aussi des comparateurs qui sortent sur cette recherche : j'y ai lu « Pika gratuit, 80 crédits par mois avec filigrane » et une offre « Pro à 2 300 crédits », deux grilles qui n'existent plus. Même [le comparatif publié par PixVerse](https://pixverse.ai/en/blog/pika-pricing-vs-pixverse) parle encore d'un gratuit Pika pour tester, alors qu'il ne contient plus de crédits.",
    },
    { type: "h2", id: "verdict", text: "Pika ou PixVerse : mon choix en deux minutes" },
    {
      type: "verdict",
      title: "Mon verdict pour un débutant (novembre 2026)",
      pourQui:
        "PixVerse si ton budget est de zéro ou si tu veux pratiquer un peu chaque jour sur un seul modèle. Pika si tu paies dès le départ et que tu veux goûter à plusieurs modèles au même endroit.",
      forts: [
        "PixVerse : 30 crédits par jour en gratuit, soit un clip de 5 secondes en 540p sans le son",
        "PixVerse : 60 crédits quotidiens en plus de l'abonnement sur toutes les offres individuelles",
        "PixVerse : interface disponible en français",
        "Pika : Seedance 2.5, Kling 4.0, Wan 3.0 et les autres ouverts dès 10 $",
        "Pika : aucun filigrane, même en gratuit avec un pack",
        "Pika : 60 clips Pika H3 Flex de 5 secondes par mois en Starter",
      ],
      faibles: [
        "PixVerse : filigrane et 540p en gratuit",
        "PixVerse : 720p maximum et aucun modèle vidéo tiers avant Pro à 30 $",
        "PixVerse : usage commercial limité aux modèles maison, templates exclus",
        "Pika : 0 crédit par mois en gratuit, premier pack à 25 $",
        "Pika : Starter passé de 900 à 600 crédits en quelques jours, aucun remboursement",
        "Les deux : notes Trustpilot basses, autour de 2,3 sur 5",
      ],
      verdict:
        "Je ferais les deux dans l'ordre : deux semaines sur le gratuit de PixVerse pour apprendre à écrire un mouvement, puis un mois de Pika Starter si tu veux comparer les modèles et publier sous licence commerciale. Reste sur PixVerse et monte à Pro seulement si V6 en 1080p te convient vraiment.",
    },
    {
      type: "comparison",
      caption: "Pika et PixVerse pour un débutant, au 7 novembre 2026",
      headers: ["Critère", "Pika", "PixVerse"],
      rows: [
        ["Gratuit", "0 crédit par mois, packs dès 25 $", "60 crédits au départ + 30 par jour"],
        ["Filigrane en gratuit", "Non", "Oui"],
        ["Offre à 10 $", "Starter, 600 crédits (8 $ en annuel)", "Standard, 1 200 crédits + 60 par jour (8 $ en annuel)"],
        ["Offre suivante", "Creator, 35 $, 2 600 crédits", "Pro, 30 $, 6 000 crédits + 60 par jour"],
        ["Modèles vidéo à 10 $", "Tous", "Modèles PixVerse seulement"],
        ["Résolution à 10 $", "Selon le modèle, 1080p sur Seedance 2.5", "720p maximum"],
        ["Usage commercial", "Dès Starter", "Offres payantes, modèles PixVerse seulement"],
        ["Crédits non utilisés", "Perdus à chaque période", "Quotidiens perdus le soir, abonnement perdus à 30 jours"],
        ["Remboursement", "Aucun", "Abonnement en cours non utilisé seulement"],
        ["Langue de l'interface", "Vue en anglais", "Français disponible"],
      ],
      source: [
        { label: "Pika, Pricing", href: PI_PRICING },
        { label: "PixVerse, Subscription Plans", href: PV_PRICING },
        { label: "PixVerse, Terms of Service", href: PV_TERMS },
      ],
      verifieLe: CAPTURE,
      note: "Prix en dollars. Crédits Pika et crédits PixVerse ne sont pas la même unité : ne compare pas 600 à 1 200.",
    },

    { type: "h2", id: "prise-en-main", text: "Lequel est le plus simple à prendre en main ?" },
    {
      type: "p",
      text: "Les deux écrans de création se visitent sans compte, et tous deux affichent le coût sur le bouton de lancement avant que tu cliques. Regarde-le à chaque fois, sinon tu vas jeter tes crédits par les fenêtres : aucun des deux écrans n'ouvre sur le réglage le moins cher.",
    },
    {
      type: "gallery",
      caption: "Les deux écrans de création, vus sans compte le même jour.",
      items: [
        {
          src: `${IMG}-interface-pika.webp`,
          alt: "Video Studio de Pika : panneau à gauche avec références, prompt, durée 5 secondes, 720p, audio activé, modèle Seedance 2.5 recommandé et bouton Start Generating à environ 122 crédits",
          caption: "Pika part sur Seedance 2.5, donc 122 crédits d'emblée. Change de modèle avant tes premiers essais.",
          source: PI_STUDIO,
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
        {
          src: `${IMG}-interface-pixverse.webp`,
          alt: "Accueil de l'application PixVerse : galerie de templates et d'exemples, barre de création en bas avec Image & Text, Template, Modify, réglages 540P, 5 secondes, Audio et Multi-Shot activés, modèle PixVerse V6 et bouton Create à 38 crédits",
          caption: "PixVerse ouvre sur sa galerie et V6 en 540p, avec le son activé : 38 crédits, plus que tes 30 crédits du jour.",
          source: PV_APP,
          capturedAt: CAPTURE,
          width: 1418,
          height: 900,
        },
      ],
    },
    {
      type: "p",
      text: "Pika range ses outils par tâche : Video Studio pour générer, puis des apps pour étalonner, prolonger une vidéo ou changer une image. Une fois dans le studio, tu as un seul panneau, avec les réglages l'un sous l'autre. C'est l'écran que je trouve le plus calme pour un débutant. Il y a quand même un menu de modèles à apprivoiser : Seedance, Pika H3 Flex, MiniMax, Wan, Grok et d'autres.",
    },
    {
      type: "p",
      text: "PixVerse met en avant ses templates (« Recreate Viral Templates in One Click ») et sa barre de création en bas de page. C'est plus chargé, mais tu as le menu en français et un seul modèle à comprendre tant que tu n'as pas pris Pro. Tu règles la résolution, le format et la durée, à la seconde près de 1 à 15 secondes. Pour démarrer, coupe le son : à 540p, le clip descend de 38 à 30 crédits. Couper Multi-Shot n'a rien changé au prix dans mes relevés à 540p.",
    },

    { type: "h2", id: "gratuit", text: "Pour apprendre gratuitement, PixVerse gagne sans discussion" },
    {
      type: "p",
      text: "La grille de PixVerse donne au plan Basic **60 crédits à l'inscription, puis 30 par jour**. Un clip V6 de 5 secondes en 540p sans le son coûte 30 crédits. Ça fait trois clips le premier jour, puis un par jour, à condition de te connecter, car les crédits quotidiens disparaissent à 0 h UTC, soit 1 h du matin en France en hiver. La sortie reste limitée à 540p et porte un filigrane.",
    },
    {
      type: "screenshot",
      src: `${IMG}-plans-pixverse.webp`,
      alt: "Tableau Plans Details de PixVerse : plan Basic avec 60 crédits initiaux, 30 crédits quotidiens, sans suppression du filigrane et 540P maximum ; Standard avec 60 crédits quotidiens, 1 200 crédits d'abonnement et 720P ; Pro et au-dessus jusqu'à 4K",
      caption: "La colonne Basic résume le gratuit. La ligne Video Resolution montre aussi le plafond de Standard, à 720p.",
      source: PV_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 1000,
    },
    {
      type: "p",
      text: "Deux détails à vérifier une fois inscrit. La fenêtre qui s'ouvre sur l'accueil annonce « 60 Refresh Daily », alors que le tableau officiel écrit 30 pour le plan Basic : je m'en tiens au tableau, sans l'avoir confirmé avec un compte. Le menu de résolution indique aussi « 3 Free Trial Left » pour le 720p et le 1080p. Et un encart propose 300 crédits contre un questionnaire, qui peuvent t'offrir une dizaine de clips de plus.",
    },
    {
      type: "p",
      text: "Côté Pika, la promesse « Try Pika Free » veut dire que l'inscription est gratuite. Le plan Free affiche **0 crédit par mois**, et le premier pack coûte 25 $ pour 1 500 crédits. Le seul cadeau que j'ai trouvé figure dans [le catalogue des apps](https://create.pika.art/apps) : 250 crédits après une première génération lancée depuis ChatGPT, soit 25 clips Pika H3 Flex ou 2 clips Seedance 2.5 aux tarifs affichés. Pour plus d'options sans carte, regarde [ma liste des sites de vidéo IA gratuits](/blog/meilleurs-sites-video-ia-gratuits).",
    },

    { type: "h2", id: "prix", text: "À 10 $ par mois, qu'est-ce que tu obtiens vraiment ?" },
    {
      type: "p",
      text: "Avec 1 200 crédits contre 600, PixVerse a l'air deux fois plus généreux. Ces crédits ne valent pourtant pas la même chose d'une plateforme à l'autre. Le seul calcul qui tienne se fait en clips, sur une durée identique.",
    },
    {
      type: "gallery",
      caption: "Les deux grilles en paiement mensuel.",
      items: [
        {
          src: `${IMG}-tarifs-pika.webp`,
          alt: "Grille mensuelle de Pika : Free sans crédit, Starter 10 dollars et 600 crédits, Creator 35 dollars et 2 600 crédits, Fancy 95 dollars et 8 550 crédits, avec licence commerciale cochée dès Starter",
          caption: "« All models » figure sur toutes les colonnes de Pika, Starter compris.",
          source: PI_PRICING,
          capturedAt: CAPTURE,
          width: 1250,
          height: 775,
        },
        {
          src: `${IMG}-tarifs-pixverse.webp`,
          alt: "Grille mensuelle de PixVerse : Standard 10 dollars et 1 200 crédits en 720P, Pro 30 dollars et 6 000 crédits en 4K, Premium 60 dollars et 15 000 crédits, le bloc Access to More Video Models n'apparaissant qu'à partir de Pro",
          caption: "Chez PixVerse, le bloc « Access to More Video Models » commence à Pro. Standard ne l'a pas.",
          source: PV_PRICING,
          capturedAt: CAPTURE,
          width: 1600,
          height: 889,
        },
      ],
    },
    {
      type: "table",
      caption: "Clips de 5 secondes par mois, si tout le budget part sur un seul réglage",
      headers: ["Offre", "Modèle et réglage", "Crédits par clip", "Clips"],
      rows: [
        ["Pika Starter, 10 $", "Pika H3 Flex, 768p", "10", "60"],
        ["Pika Starter, 10 $", "Pika 2.5, 720p", "20", "30"],
        ["Pika Starter, 10 $", "Wan 3.0, 720p", "33", "18"],
        ["Pika Starter, 10 $", "Kling 4.0, 1080p", "118", "5"],
        ["Pika Starter, 10 $", "Seedance 2.5, 720p", "122", "4"],
        ["PixVerse Standard, 10 $", "V6, 720p, sans le son", "40", "30"],
        ["PixVerse Standard, 10 $", "V6, 720p, avec le son", "50", "24"],
        ["PixVerse Pro, 30 $", "V6, 1080p, avec le son", "100", "60"],
        ["PixVerse Pro, 30 $", "Seedance 2.5, 720p", "375", "16"],
        ["Pika Creator, 35 $", "Seedance 2.5, 720p", "122", "21"],
      ],
      source: [
        { label: "Pika, Pricing", href: PI_PRICING },
        { label: "Application PixVerse", href: PV_APP },
      ],
      verifieLe: CAPTURE,
    },
    {
      type: "p",
      text: "Sur PixVerse, ajoute les crédits quotidiens : 60 par jour sur Standard paient un clip V6 de plus en 720p, jusqu'à une trentaine par mois si tu viens tous les jours. Tu arrives ainsi vers 54 clips avec le son. C'est du même ordre que les 60 clips Pika H3 Flex, mais en demandant de la régularité. Si tu travailles par à-coups, oublie ces clips quotidiens.",
    },
    {
      type: "screenshot",
      src: `${IMG}-reglages-pixverse.webp`,
      alt: "Panneau de réglages de PixVerse ouvert sur 720P, format 16:9 et 5 secondes, avec les options Audio et Multi-Shot activées et le bouton Create à 50 crédits",
      caption: "Le prix change dès que tu touches un réglage : 720p avec le son, 50 crédits. Sans le son, 40.",
      source: PV_APP,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pika reprend l'avantage sur l'accès aux modèles. Pour 10 $, tu peux comparer Seedance 2.5 et Kling 4.0 sur quelques plans, même si 4 ou 5 clips ne font pas un film. Chez PixVerse, il faut Pro à 30 $ pour les ouvrir. Sur Seedance 2.5 en 720p, le clip de 5 secondes te revient à environ 2,03 $ sur Pika Starter, à 1,88 $ sur PixVerse Pro et à 1,64 $ sur Pika Creator. Je n'ai pas pu vérifier si le son est compté à l'identique sur les deux.",
    },
    {
      type: "screenshot",
      src: `${IMG}-credits-pika.webp`,
      alt: "Tableau What your monthly credits make de Pika : Pika H3 Flex à 10 crédits, Pika 2.5 à 20, Seedance 2.5 à 54 en 480p, 122 en 720p et 299 en 1080p, Seedance 2.0 à 80, Seedance 2.0 Mini à 40, avec le nombre de générations par offre",
      caption: "Le tableau à lire avant de t'abonner chez Pika. Seedance 2.5 en 480p, à 54 crédits, est une option oubliée pour tester un mouvement.",
      source: PI_PRICING,
      capturedAt: CAPTURE,
      width: 1250,
      height: 850,
    },
    {
      type: "p",
      text: "Le 29 octobre, quand j'ai écrit [mon avis sur Pika](/blog/pika-avis), Starter donnait 900 crédits et Creator 3 150. Le 7 novembre, la même page affiche 600 et 2 600, aux mêmes prix. Conséquence directe : à 10 $ par mois, Starter revient à 60 crédits par dollar, exactement le tarif des packs. L'abonnement ne fait donc plus économiser de crédits, sauf en annuel à 8 $. Avec Starter, tu paies surtout la licence commerciale. Et les packs restent valables 365 jours.",
    },
    {
      type: "p",
      text: "Les packs de PixVerse se paient 5 $ les 500 crédits, sans date de fin. Ajoute un bonus de 10 % sur Standard, de 30 % sur Pro. Si ta pratique est irrégulière, c'est le moyen le moins risqué de rester sur PixVerse : les crédits d'abonnement non utilisés disparaissent à chaque cycle de 30 jours, tout comme ceux de Pika à chaque période.",
    },

    { type: "h2", id: "droits", text: "Peux-tu vendre ce que tu génères ?" },
    {
      type: "p",
      text: "Chez Pika, c'est simple à lire : **licence commerciale dès Starter**, rien sur Free, même si tu as acheté des packs. [La FAQ officielle](https://pika.art/faq) ajoute que tu dois avoir les droits sur ce que tu importes, et que les conditions du modèle choisi s'appliquent toujours.",
    },
    {
      type: "screenshot",
      src: `${IMG}-licence-pika.webp`,
      alt: "Tableau Compare Plans de Pika : prix, crédits mensuels, générations en parallèle, No watermark à Yes partout, Commercial license à No en Free puis Yes dès Starter",
      caption: "Les lignes « No watermark » et « Commercial license » de Pika. Le 600 de Starter y figure aussi.",
      source: PI_PRICING,
      capturedAt: CAPTURE,
      width: 1250,
      height: 810,
    },
    {
      type: "p",
      text: "PixVerse pose davantage de conditions. Ses conditions du 29 octobre 2026 réservent l'usage commercial aux services payants, abonnements et packs de crédits compris. Puis la phrase suivante le limite aux contenus produits par les modèles développés par PixVerse. Pour un clip Seedance ou Kling, ce sont les règles de l'autre plateforme qui jouent, et il te reviendra d'aller les lire.",
    },
    {
      type: "screenshot",
      src: `${IMG}-droits-pixverse.webp`,
      alt: "Section 4.1 Services Content des conditions de PixVerse : usage commercial réservé aux services payants et aux modèles développés par PixVerse, modèles tiers soumis aux règles du tiers, et licence accordée pour améliorer le service, entraînement compris",
      caption: "Section 4.1. Regarde aussi le paragraphe suivant : tes contenus peuvent servir à l'entraînement, sous forme agrégée et anonymisée.",
      source: PV_TERMS,
      capturedAt: CAPTURE,
      width: 780,
      height: 700,
    },
    {
      type: "p",
      text: "Le piège se trouve à la section 4.2, et aucun des comparatifs que j'ai lus n'en parle. Les images, personnages, templates et éléments visuels fournis par PixVerse sont réservés à un usage non commercial sur la plateforme, « alone or as part of Outputs », sauf accord exprès. Autrement dit, un clip payé et généré avec V6 à partir d'un template viral peut rester interdit de pub. C'est ma lecture du texte, et je ne suis pas juriste. En pratique, pour un client, je partirais d'un prompt et de tes propres images, sans template.",
    },
    {
      type: "screenshot",
      src: `${IMG}-modeles-prets-pixverse.webp`,
      alt: "Section 4.2 des conditions de PixVerse : les Platform Creative Materials sont réservés à un usage non commercial sur la plateforme et interdits d'usage commercial, seuls ou intégrés à des sorties, puis début de la section External Sharing",
      caption: "La ligne à retenir avant de livrer un client : ces éléments restent non commerciaux, même dans une vidéo générée.",
      source: PV_TERMS,
      capturedAt: CAPTURE,
      width: 780,
      height: 560,
    },
    {
      type: "p",
      text: "Dans les deux cas, évite d'importer des visages ou des images de clients sans accord. Pika écrit que tes imports et créations peuvent servir à améliorer ses services et ses modèles. Avant de partir d'un clip pour une marque, relis aussi mon article sur [la vidéo IA sans filigrane](/blog/video-ia-sans-filigrane) : enlever un logo ne règle jamais la question des droits.",
    },

    { type: "h2", id: "rendu", text: "Et le rendu sur une consigne simple ?" },
    {
      type: "p",
      text: "Je n'ai rien généré pour cet article, donc je n'ai aucun avis personnel sur le rendu. Les chiffres qui circulent viennent d'un seul testeur (une note de 8 sur 10 contre 6,8 sur la tenue des personnages, [chez fahimai](https://www.fahimai.com/es/PIKA-VS-PIXVERSE/)), à une date où les modèles n'étaient pas forcément ceux d'aujourd'hui. Sur le papier, [PixVerse annonce pour V6](https://pixverse.ai/en/model/pixverse-v6) des clips de 15 secondes en 1080p, le son natif et plusieurs plans dans une même génération. Pika annonce son Video Studio jusqu'à 30 secondes selon le modèle, et Pika H3 Flex comme un modèle pensé pour itérer vite, ce que je détaille dans [mon article sur Pika H3 Flex](/blog/pika-h3-flex-disponible-pika-art).",
    },
    {
      type: "p",
      text: "Le plus sûr reste ton propre essai, et il te coûtera peu. Tu dépenseras surtout une soirée.",
    },
    { type: "h3", id: "essai", text: "Un essai sur la même consigne, sans abonnement" },
    {
      type: "ol",
      items: [
        "Inscris-toi sur PixVerse et récupère tes 60 crédits de départ. Note aussi ton solde : il te dira si le tableau ou la fenêtre d'accueil disait vrai sur les crédits quotidiens.",
        "Écris une consigne courte avec un seul mouvement. Par exemple : « Un bol de café fume sur une table en bois près d'une fenêtre, le matin. La caméra avance lentement vers le bol. Un rayon de soleil traverse la vapeur. »",
        "Lance-la sur V6 en 540p, sans le son. Refais-la une fois sans changer un mot, pour voir ce que le hasard modifie.",
        "Côté Pika, récupère les 250 crédits de Pika pour ChatGPT. Passe ensuite le même texte dans Pika H3 Flex (10 crédits annoncés) et Pika 2.5 (20 crédits).",
        "Note trois choses pour chaque clip : le mouvement demandé est-il là, le bol change-t-il de forme, combien d'essais pour un plan que tu garderais ?",
        "Divise les crédits dépensés par les plans gardés, puis convertis en dollars avec le tableau ci-dessus. Ce chiffre-là décide, bien entendu.",
      ],
    },
    {
      type: "p",
      text: "Pour écrire ce mouvement correctement, mon [guide Seedance](/blog/seedance-guide) explique la logique sujet, action, décor, lumière et caméra, qui vaut aussi pour les autres modèles.",
    },

    { type: "h2", id: "retours", text: "Les risques à connaître avant de payer" },
    {
      type: "p",
      text: "Les deux plateformes sont mal notées. Le 7 novembre, [Pika](https://www.trustpilot.com/review/pika.art) affiche 2,4 sur 5 pour 81 avis, et [PixVerse](https://www.trustpilot.com/review/pixverse.ai) 2,2 pour 130 avis. Le résumé automatique de Trustpilot sur PixVerse parle d'abonnements jugés chers, de crédits qui disparaissent au renouvellement, de résiliations difficiles et de crédits consommés par des générations ratées. Du côté de Pika, les avis de cette année citent des générations qui bloquent et un support lent. Ces avis ne forment pas un échantillon représentatif : lis-les comme une liste de points à surveiller.",
    },
    {
      type: "p",
      text: "Pour partir, les règles sont sèches. Pika annonce des paiements non remboursables : tu gardes l'offre jusqu'à la fin de la période. PixVerse rembourse seulement un abonnement en cours qui n'a pas servi, sans remboursement partiel, et jamais les packs. Son texte prévient aussi qu'il refuse toute demande fondée sur l'insatisfaction du résultat. Prends donc un mois pour commencer, malgré les 2 $ d'écart avec l'annuel. Note la date de renouvellement dès le premier jour.",
    },
    {
      type: "table",
      headers: ["Ton profil", "Mon conseil"],
      rows: [
        ["Budget zéro, tu veux apprendre à écrire un mouvement", "PixVerse Basic, un clip par jour"],
        ["10 $ par mois, tu veux voir plusieurs modèles", "Pika Starter, essais sur H3 Flex, plans finaux sur Seedance 2.5"],
        ["10 $ par mois, tu fais tout sur un modèle et tu viens chaque jour", "PixVerse Standard, si le 720p te suffit"],
        ["Du 1080p sur beaucoup de clips", "PixVerse Pro, 60 clips V6 de 5 secondes avec le son"],
        ["Tu livres des clients", "Pika Starter ou Creator, ou PixVerse sans template et sur modèle maison"],
        ["Tu cherches d'autres pistes", "[Pika, Luma et les alternatives](/blog/pika-luma-alternatives-video-ia) ou [les remplaçants de Sora](/blog/alternatives-sora)"],
      ],
    },

    { type: "h2", id: "histoire", text: "Et si tu veux raconter une histoire de vingt plans ?" },
    {
      type: "p",
      text: "Pika comme PixVerse sont faits pour produire des clips, et c'est très bien pour apprendre. Dès que tu dois tenir un personnage et un découpage sur vingt plans, le problème change. Je suis juge et partie sur ce point : je suis co-fondateur de ScreenWeaver, un outil où tu écris le scénario, tu le découpes en plans, tu prépares le storyboard, puis tu génères la vidéo, le tout relié au script. L'offre Screenwriter est gratuite pour écrire, mais la génération demande l'offre Auteur, à 39,99 $ par mois pour 6 000 crédits. Pour trois clips par semaine, il serait trop cher et trop lourd : reste sur Pika ou PixVerse. Sache aussi que PixVerse pousse dans cette direction avec son modèle C1 et son Canvas, que je n'ai pas évalués ici.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "seedance",
      title: "Passe du clip isolé à une scène découpée",
      text: "Écris ta scène, découpe-la en plans et génère chaque plan sans perdre le fil de ton script.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 7 novembre 2026, sans me connecter à un compte, la page tarifs et la FAQ de Pika, son catalogue d'apps et son Video Studio, puis la page d'abonnement de PixVerse, son application, sa page V6 et ses conditions d'utilisation datées du 29 octobre 2026. Les coûts de PixVerse sont ceux qu'affiche le bouton Create quand je change les réglages, sans lancer de génération. Les dix captures viennent de ces pages, prises le même jour dans Chrome, sans accepter de cookies.",
        "Le nombre de clips, le coût en dollars et le cumul des crédits quotidiens sont mes calculs à partir de ces chiffres. Je ne touche aucune commission sur Pika ni sur PixVerse. Je suis co-fondateur de ScreenWeaver, cité en fin d'article, et PixVerse est un concurrent direct de ScreenWeaver et d'Imaginode : garde ça en tête en me lisant.",
      ],
      teste: ["La lecture des pages officielles et des interfaces publiques, avec relevé des coûts affichés avant génération"],
      nonTeste: [
        "Aucune génération lancée, ni sur Pika ni sur PixVerse : je ne compare pas la qualité des clips",
        "Le nombre réel de crédits quotidiens d'un compte gratuit PixVerse, annoncé à 30 ou à 60 selon l'écran",
        "Le bonus de 250 crédits de Pika pour ChatGPT",
        "L'application mobile, l'API, le Canvas et le modèle C1 de PixVerse",
        "La liste des langues de Pika : une icône existe, je n'ai pas réussi à l'ouvrir et j'ai tout vu en anglais",
      ],
      sources: [
        { label: "Pika, Pricing", href: PI_PRICING },
        { label: "Pika, Help Center (FAQ)", href: PI_FAQ },
        { label: "Pika, Video Studio", href: PI_STUDIO },
        { label: "Pika, catalogue des apps", href: PI_APPS },
        { label: "PixVerse, Subscription Plans", href: PV_PRICING },
        { label: "PixVerse, application", href: PV_APP },
        { label: "PixVerse V6", href: PV_V6 },
        { label: "PixVerse, Terms of Service", href: PV_TERMS },
        { label: "PixVerse, Pika Pricing vs PixVerse", href: PV_BLOG },
        { label: "Trustpilot, Pika", href: "https://www.trustpilot.com/review/pika.art" },
        { label: "Trustpilot, PixVerse", href: "https://www.trustpilot.com/review/pixverse.ai" },
        { label: "ScreenWeaver, offres", href: "https://www.screenweaver.ai/#pricing" },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-07 -->
