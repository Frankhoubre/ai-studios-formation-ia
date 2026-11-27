import type { Article } from "@/lib/types/article";

export const higgsfieldGuide: Article = {
  title: "Higgsfield : le vrai prix de ses crédits",
  slug: "higgsfield-guide",
  description:
    "Higgsfield facture tout en crédits. Ce que coûte chaque plan en 2026, le prix réel d'une génération, et ce que l'illimité recouvre vraiment.",
  excerpt:
    "Trois plans, des badges de réduction, une promesse d'illimité, et toujours aucune idée de ce que te coûtera ta prochaine séquence. On convertit les euros en crédits, et les crédits en travail.",
  category: "ia-video",
  tags: ["higgsfield", "outils", "budget", "workflow"],
  date: "2026-10-04",
  updatedAt: "2026-10-04",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/higgsfield-guide.webp",
  imageAlt:
    "Une créatrice fait ses comptes au crayon dans un carnet, le matin, à côté de storyboards imprimés et d'une calculatrice",
  keywords: [
    "higgsfield",
    "higgsfield prix",
    "higgsfield crédits",
    "higgsfield avis",
    "higgsfield ai",
  ],
  relatedSlugs: [
    "higgsfield-creative-os-juin-2026",
    "meilleurs-outils-ia-video",
    "combien-coute-ia-creative-mois",
  ],
  faq: [
    {
      question: "Combien coûte Higgsfield par mois ?",
      answer:
        "Trois plans individuels sur higgsfield.ai au 4 octobre 2026, en facturation annuelle et hors taxes : Starter à 19 € pour 270 crédits par mois, Plus à 47 € pour 1 200 crédits, Ultra à 99 € pour 3 000 crédits. En mensuel, Plus passe à 59 € et Ultra à 129 €. Le Starter, lui, affiche le même tarif dans les deux cas, la mention « No difference compared to monthly » figure sur sa carte. Un palier gratuit existe, en usage limité et sans droit d'exploitation commerciale.",
    },
    {
      question: "Comment marchent les crédits Higgsfield ?",
      answer:
        "Chaque génération consomme un nombre de crédits qui dépend du modèle, de la durée et de la définition demandée. Une image Nano Banana Pro vaut 2 crédits, un plan Kling 3.0 de 8 secondes en 720p environ 14, un plan Seedance 2.0 de 5 secondes environ 22 en 720p et environ 45 en 1080p. Pour connaître ton prix réel, divise le tarif mensuel par les crédits inclus, puis multiplie par le coût de la génération.",
    },
    {
      question: "Les crédits Higgsfield sont-ils perdus à la fin du mois ?",
      answer:
        "Oui. La page de tarifs indique que les crédits d'abonnement ne sont pas reportés et expirent à la fin de chaque cycle. Les plans mensuels se rechargent à la date anniversaire de l'achat, les plans annuels tous les 30 jours à partir du début de l'abonnement. Les crédits achetés en pack s'ajoutent instantanément et s'utilisent sur tous les modèles pris en charge.",
    },
    {
      question: "Que veut dire « illimité » chez Higgsfield ?",
      answer:
        "L'illimité porte sur une courte liste de modèles et sur une fenêtre de 7 jours, telle qu'affichée sur les cartes de prix. La vitesse et le nombre de générations simultanées peuvent être réduits aux heures de forte charge, avec un « Credit Mode » qui te rend la priorité en repassant à la consommation de crédits. Et il ne fonctionne que sur higgsfield.ai : le bas de page exclut explicitement MCP/CLI, Canvas et Supercomputer.",
    },
    {
      question: "Le plan Starter suffit-il ?",
      answer:
        "Pour de l'image, il tient la route : 270 crédits achètent 135 générations Nano Banana Pro par mois. Pour la vidéo, il se referme vite. La grille comparative montre que Sora 2, Veo 3 et 3.1, le 1080p et le 4K de Kling 3.0 et les modèles Seedance 2.0 et 2.5 n'y sont pas inclus, et sa carte annonce l'accès aux seuls Seedance 2.0 Fast et 2.0 Mini. Il donne aussi le crédit le plus cher des trois plans, environ 0,070 € contre 0,039 € sur Plus.",
    },
    {
      question: "Mieux vaut-il passer par Higgsfield ou s'abonner directement aux modèles ?",
      answer:
        "Ça dépend du nombre de moteurs que tu utilises vraiment. Si ton travail tourne autour d'un seul modèle, l'abonnement direct chez son éditeur évite une marge intermédiaire. Si tu changes de modèle selon les plans, passer par un catalogue t'évite trois abonnements en parallèle et te donne un seul compteur à surveiller. Fais le calcul sur ton mois précédent, moteur par moteur, plutôt que sur une intention.",
    },
  ],
  content: [
    {
      type: "p",
      text: "La page de tarifs de Higgsfield affiche trois prix, des badges de réduction et une promesse d'illimité. Tu la lis en entier, et tu repars sans savoir ce que te coûtera ta prochaine séquence de quarante plans. Le prix est en euros, le travail se compte en crédits, et la conversion, personne ne la fait à ta place.",
    },
    {
      type: "p",
      text: "On la fait ici. Tous les chiffres viennent de la grille officielle de higgsfield.ai relevée le 4 octobre 2026, plus quelques multiplications que tu peux refaire sur un coin de table.",
    },
    {
      type: "p",
      text: "Mon avis après avoir démonté cette grille : l'écart entre les plans pèse beaucoup plus lourd que le prix affiché. Le premier palier coûte 19 € et te donne presque deux fois moins de travail par euro que celui du dessus. C'est la seule ligne qui mérite dix minutes de ton attention avant de payer.",
    },

    {
      type: "h2",
      id: "ce-que-tu-achetes",
      text: "Ce que tu achètes vraiment",
    },
    {
      type: "h3",
      id: "un-catalogue",
      text: "Un catalogue, plus quelques modèles maison",
    },
    {
      type: "p",
      text: "Higgsfield héberge surtout les moteurs des autres. Kling 3.0, Sora 2, Veo 3.1, Wan 3.0, Seedance 2.5, Hailuo 2.3, Nano Banana Pro, Grok Video, FLUX.2 : la grille comparative en aligne plusieurs dizaines, chacun avec son propre coût en crédits. Tu paies un accès groupé à des moteurs que tu pourrais aussi aller chercher un par un chez leurs éditeurs.",
    },
    {
      type: "p",
      text: "À côté, une poignée de modèles lui appartiennent. Soul 2.0 et Soul pour l'image, DoP en trois vitesses pour la vidéo, Speak 2.0 pour le lip-sync, et des utilitaires comme Popcorn, Face Swap ou Character Swap. Les cartes de prix mettent aussi en avant trois briques estampillées **Higgsfield Exclusive**, AI Influencer, Ads Studio et Genjutsu, livrées avec un quota de générations offertes qui change selon le plan.",
    },
    {
      type: "p",
      text: "Cette double nature explique pourquoi l'outil est difficile à comparer à un générateur classique. Pour situer les moteurs eux-mêmes face au reste du marché, [notre panorama des outils IA vidéo](/blog/meilleurs-outils-ia-video) reste un meilleur point de départ que la page de vente d'un revendeur.",
    },
    {
      type: "h3",
      id: "un-compteur",
      text: "Et un compteur qui ne se reporte pas",
    },
    {
      type: "p",
      text: "Les crédits sont l'unité de compte de toute la plateforme. Leur coût par génération varie selon le modèle appelé, la durée demandée et la définition de sortie, la page le dit noir sur blanc. Trois variables, donc trois façons de se tromper dans son budget.",
    },
    {
      type: "p",
      text: "Les crédits d'abonnement **ne sont pas reportés et expirent à la fin de chaque cycle**. Sur un plan mensuel, le rechargement tombe à la date anniversaire de l'achat. Sur un plan annuel, il tombe tous les 30 jours à partir du début de l'abonnement, ce qui décale lentement ta date de recharge par rapport au calendrier.",
    },
    {
      type: "p",
      text: "Autre chose, moins visible : le palier gratuit ne donne pas de droit d'exploitation commerciale. La mention « Commercial use » apparaît sur Starter, Plus et Ultra, et reste barrée sur Free. Tester une idée, oui. Livrer un client avec, non.",
    },

    {
      type: "h2",
      id: "plans",
      text: "Les trois plans, ramenés au prix du crédit",
    },
    {
      type: "p",
      text: "Les tarifs ci-dessous sont ceux de la facturation annuelle, hors taxes, affichés par défaut sur la page. La colonne qui compte est la quatrième : elle divise simplement le prix mensuel par les crédits inclus.",
    },
    {
      type: "table",
      caption:
        "Les plans individuels Higgsfield au 4 octobre 2026, et ce que coûte un crédit sur chacun",
      headers: [
        "Plan",
        "Prix annualisé",
        "Crédits par mois",
        "Prix du crédit",
        "Ce que ça achète",
      ],
      rows: [
        [
          "Starter",
          "19 € / mois (même tarif en mensuel)",
          "270",
          "0,070 €",
          "135 images Nano Banana Pro",
        ],
        [
          "Plus",
          "47 € / mois (59 € en mensuel)",
          "1 200",
          "0,039 €",
          "600 images, ou environ 85 plans Kling 3.0 de 8 s",
        ],
        [
          "Ultra",
          "99 € / mois (129 € en mensuel)",
          "3 000",
          "0,033 €",
          "1 500 images, ou environ 214 plans Kling 3.0 de 8 s",
        ],
      ],
    },
    {
      type: "p",
      text: "Un euro dépensé sur Plus achète 25,5 crédits. Le même euro sur Starter en achète 14,2. Pour le même budget, tu produis donc près de **80 % de travail en plus** en montant d'un cran. L'écart entre Plus et Ultra existe aussi, mais il descend à 19 %, ce qui est une autre histoire.",
    },
    {
      type: "image",
      src: "/images/articles/higgsfield-guide-pricing.webp",
      alt: "Les trois cartes de prix Higgsfield, Starter à 19 euros pour 270 crédits, Plus à 47 euros pour 1200 crédits et Ultra à 99 euros pour 3000 crédits, avec les mentions 7-day unlimited sur Nano Banana 2 et Kling 3.0",
      caption:
        "Les trois plans individuels sur higgsfield.ai, capturés le 4 octobre 2026 en facturation annuelle.",
    },
    {
      type: "p",
      text: "Regarde la ligne sous le bouton du Starter : « No difference compared to monthly ». T'engager à l'année sur ce plan ne te fait rien économiser, là où Plus annonce 144 € de moins sur l'année et Ultra 360 €. Le premier palier est un palier d'essai, et il est tarifé comme tel.",
    },
    {
      type: "p",
      text: "Le Starter se referme aussi côté catalogue. Sa carte annonce l'accès aux seuls Seedance 2.0 Fast et 2.0 Mini, et la grille comparative confirme l'absence de Sora 2, de Veo 3 et 3.1, du 1080p et du 4K sur Kling 3.0, du Motion Control en 3.0, du 4K sur Nano Banana Pro, de Speak et du UGC builder. Le contrôle des images de début et de fin de plan n'y est pas non plus, ce qui pèse lourd dès que tu enchaînes des plans. La méthode de raccord, elle, est détaillée dans [notre guide des outils vidéo](/blog/meilleurs-outils-ia-video).",
    },
    {
      type: "ul",
      items: [
        "Si tu fais surtout de l'image, le Starter tient la route. 135 générations Nano Banana Pro par mois, ça couvre déjà pas mal de travail.",
        "Si tu touches à la vidéo, même un peu, passe directement à Plus. Le Starter te coupe l'accès aux modèles que tu voudras tester de toute façon.",
        "Et si tu produis en volume pour des clients, compare le prix du crédit sur Ultra à ce que te coûteraient les abonnements directs des deux ou trois moteurs qui te servent vraiment.",
      ],
    },

    {
      type: "h2",
      id: "cout-generation",
      text: "Combien coûte une génération, pour de vrai",
    },
    {
      type: "p",
      text: "Multiplie le prix du crédit de ton plan par le coût en crédits de la génération. Les coûts en crédits ci-dessous sont ceux affichés par Higgsfield, soit sur le sélecteur de plan, soit sous le nom du modèle dans la grille comparative.",
    },
    {
      type: "table",
      caption:
        "Coût d'une génération selon le plan, à partir des crédits annoncés par Higgsfield",
      headers: [
        "Génération",
        "Coût en crédits",
        "Sur Starter",
        "Sur Plus",
        "Sur Ultra",
      ],
      rows: [
        ["Image Nano Banana Pro", "2", "0,14 €", "0,08 €", "0,07 €"],
        [
          "Plan Kling 3.0, 8 s, 720p",
          "environ 14",
          "0,99 €",
          "0,55 €",
          "0,46 €",
        ],
        [
          "Plan Seedance 2.0, 5 s, 720p",
          "environ 22",
          "non inclus",
          "0,86 €",
          "0,73 €",
        ],
        [
          "Plan Seedance 2.0, 5 s, 1080p",
          "environ 45",
          "non inclus",
          "1,76 €",
          "1,49 €",
        ],
        ["Plan Seedance 2.5", "15", "non inclus", "0,59 €", "0,50 €"],
      ],
    },
    {
      type: "p",
      text: "Regarde les deux lignes Seedance 2.0. Passer de 720p à 1080p sur exactement le même plan de 5 secondes fait grimper la note de 22 à 45 crédits. Le double. Une phase de recherche menée en définition maximale coûte donc deux fois le prix d'une phase de recherche menée correctement, pour des fichiers que tu jettes de toute façon.",
    },
    {
      type: "image",
      src: "/images/articles/higgsfield-guide-compare.webp",
      alt: "Grille comparative de Higgsfield montrant les colonnes Free, Starter, Plus et Ultra, le nombre de générations simultanées par plan, et les coûts de Seedance 2.0 à environ 22 crédits pour 5 secondes en 720p et 45 crédits en 1080p",
      caption:
        "Le haut de la grille comparative de higgsfield.ai, capturé le 4 octobre 2026. Les coûts en crédits sont écrits sous le nom de chaque modèle.",
    },
    {
      type: "p",
      text: "En face de Seedance 2.0 en 720p, la colonne Plus annonce 640 vidéos. Avec 1 200 crédits par mois et 22 crédits la vidéo, tu en fais 54. Le compte ne tombe juste qu'en multipliant par douze : **cette grille raisonne en année**. Même vérification sur Nano Banana Pro, où la colonne Starter affiche 1 620 images quand 270 crédits en achètent 135 par mois, et 135 fois 12 font bien 1 620.",
    },
    {
      type: "p",
      text: "> Pro Tip : avant de choisir un plan, additionne les secondes de ton dernier projet livré, pas le nombre de plans. Quarante plans ne veulent rien dire, trois cents secondes en 720p si. C'est la seule donnée qui transforme une grille tarifaire en budget. Le raisonnement complet, tous outils confondus, est dans notre article sur [le vrai budget mensuel de l'IA créative](/blog/combien-coute-ia-creative-mois).",
    },

    {
      type: "h2",
      id: "illimite",
      text: "L'illimité, et ce qu'il ne couvre pas",
    },
    {
      type: "p",
      text: "C'est l'argument le plus visible des cartes Plus et Ultra, et celui qui demande le plus de lecture.",
    },
    {
      type: "p",
      text: "Commence par la carte elle-même. Les badges indiquent **« 7-day unlimited »**, pas « unlimited ». Plus ouvre Nano Banana 2 en 2K et Kling 3.0, Ultra y ajoute Nano Banana Pro en 2K. Le Starter, lui, n'a aucun modèle en illimité, ses trois lignes sont barrées.",
    },
    {
      type: "p",
      text: "Continue dans la FAQ. L'illimité génère sans consommer de crédits, mais la vitesse et le nombre de générations simultanées « peuvent varier temporairement » aux heures de forte charge. Higgsfield propose alors de basculer en « Credit Mode » pour retrouver la file rapide, ce qui revient à payer en crédits la priorité que l'illimité ne garantit pas. L'usage est par ailleurs réservé à une utilisation personnelle et humaine, l'automatisation, le partage de compte et la revente d'accès étant interdits.",
    },
    {
      type: "p",
      text: "Et finis par le bas de page, en petits caractères gris. C'est là que se trouve la mention la plus utile de toute la grille.",
    },
    {
      type: "image",
      src: "/images/articles/higgsfield-guide-unlimited.webp",
      alt: "Mentions légales en bas de la page de tarifs Higgsfield précisant que les modèles illimités et les générations offertes sont accessibles uniquement via higgsfield.ai et pas sur MCP/CLI, Canvas ou Supercomputer",
      caption:
        "Le bas de la page de tarifs de higgsfield.ai, capturé le 4 octobre 2026.",
    },
    {
      type: "p",
      text: "Les modèles illimités et les générations offertes ne fonctionnent que sur higgsfield.ai. Canvas, Supercomputer et l'accès MCP/CLI en sont exclus. Autrement dit, les surfaces qui portaient toute la promesse du virage annoncé au printemps, [le passage en Creative OS](/blog/higgsfield-creative-os-juin-2026), sont précisément celles où ton illimité ne s'applique pas. Le Supercomputer consomme d'ailleurs des crédits y compris sur les requêtes de texte, selon la complexité du prompt et le modèle de langage choisi.",
    },
    {
      type: "p",
      text: "Ça ne disqualifie rien, et j'aime bien l'idée d'afficher le coût avant d'exécuter. Mais si tu prends un plan pour l'illimité en pensant piloter la plateforme depuis ton terminal, tu paieras les deux. La grille complète est publiée sur la [page de tarifs de Higgsfield](https://higgsfield.ai/pricing), et elle bouge souvent.",
    },

    {
      type: "h2",
      id: "pieges",
      text: "Quatre façons de faire gonfler la note",
    },
    {
      type: "h3",
      id: "piege-starter",
      text: "Tu restes sur le Starter par prudence",
    },
    {
      type: "p",
      text: "Le symptôme est facile à repérer : tu rachètes des packs de crédits tous les quinze jours sur un plan à 19 €. À 0,070 € le crédit, tu paies ta production au tarif le plus élevé de la grille, et tu n'as même pas accès aux modèles que tu voulais essayer. Dès le deuxième rachat dans le mois, compare le total réellement dépensé aux 47 € du plan Plus. En général, tu as déjà dépassé.",
    },
    {
      type: "h3",
      id: "piege-annee",
      text: "Tu lis la grille comparative comme un volume mensuel",
    },
    {
      type: "p",
      text: "Les nombres affichés par modèle couvrent douze mois d'abonnement. Lus comme des quotas mensuels, ils donnent une capacité douze fois supérieure à la réalité, et un plan sous-dimensionné dès la deuxième semaine.",
    },
    {
      type: "p",
      text: "Divise systématiquement par douze, ou ignore cette colonne et recalcule à partir du coût en crédits écrit sous le nom du modèle. La deuxième méthode est plus rapide et ne se trompe jamais.",
    },
    {
      type: "h3",
      id: "piege-definition",
      text: "Tu cherches tes cadrages en définition maximale",
    },
    {
      type: "p",
      text: "Un aller-retour de recherche en 1080p coûte deux fois le prix du même aller-retour en 720p sur Seedance 2.0. Sur une semaine de tests, l'écart se chiffre en dizaines d'euros pour des fichiers qui finissent à la corbeille.",
    },
    {
      type: "p",
      text: "Fais toute ta phase d'exploration dans la définition la plus basse disponible. Un mouvement raté ou un rythme mou se voient aussi bien en 720p. La définition finale ne sert qu'aux plans dont tu sais déjà qu'ils partent au montage.",
    },
    {
      type: "h3",
      id: "piege-fin-de-cycle",
      text: "Tu laisses expirer la moitié de tes crédits",
    },
    {
      type: "p",
      text: "Comme rien ne se reporte, un mois calme efface ce que tu n'as pas consommé. Sur un plan annuel, le cycle tombe tous les 30 jours à partir de la date de souscription, donc ta date de recharge glisse de un à trois jours par mois par rapport au calendrier et finit par te surprendre.",
    },
    {
      type: "p",
      text: "Note ta date de recharge réelle dans ton agenda plutôt que de te fier au premier du mois. Et garde sous le coude une liste de générations non urgentes à passer en fin de cycle : tester un modèle que tu n'as jamais ouvert, refaire une miniature qui te chiffonne, sortir trois variantes d'une image qui marche. Ça vaut mieux que de regarder le compteur se vider tout seul.",
    },

    { type: "h2", id: "faq", text: "Questions fréquentes" },
    {
      type: "h3",
      id: "faq-1",
      text: "Combien coûte Higgsfield par mois ?",
    },
    {
      type: "p",
      text: "Trois plans individuels sur higgsfield.ai au 4 octobre 2026, en facturation annuelle et hors taxes : Starter à 19 € pour 270 crédits par mois, Plus à 47 € pour 1 200 crédits, Ultra à 99 € pour 3 000 crédits. En mensuel, Plus passe à 59 € et Ultra à 129 €. Le Starter, lui, affiche le même tarif dans les deux cas, la mention « No difference compared to monthly » figure sur sa carte. Un palier gratuit existe, en usage limité et sans droit d'exploitation commerciale.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Comment marchent les crédits Higgsfield ?",
    },
    {
      type: "p",
      text: "Chaque génération consomme un nombre de crédits qui dépend du modèle, de la durée et de la définition demandée. Une image Nano Banana Pro vaut 2 crédits, un plan Kling 3.0 de 8 secondes en 720p environ 14, un plan Seedance 2.0 de 5 secondes environ 22 en 720p et environ 45 en 1080p. Pour connaître ton prix réel, divise le tarif mensuel par les crédits inclus, puis multiplie par le coût de la génération.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Les crédits Higgsfield sont-ils perdus à la fin du mois ?",
    },
    {
      type: "p",
      text: "Oui. La page de tarifs indique que les crédits d'abonnement ne sont pas reportés et expirent à la fin de chaque cycle. Les plans mensuels se rechargent à la date anniversaire de l'achat, les plans annuels tous les 30 jours à partir du début de l'abonnement. Les crédits achetés en pack s'ajoutent instantanément et s'utilisent sur tous les modèles pris en charge.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Que veut dire « illimité » chez Higgsfield ?",
    },
    {
      type: "p",
      text: "L'illimité porte sur une courte liste de modèles et sur une fenêtre de 7 jours, telle qu'affichée sur les cartes de prix. La vitesse et le nombre de générations simultanées peuvent être réduits aux heures de forte charge, avec un « Credit Mode » qui te rend la priorité en repassant à la consommation de crédits. Et il ne fonctionne que sur higgsfield.ai : le bas de page exclut explicitement MCP/CLI, Canvas et Supercomputer.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Le plan Starter suffit-il ?",
    },
    {
      type: "p",
      text: "Pour de l'image, il tient la route : 270 crédits achètent 135 générations Nano Banana Pro par mois. Pour la vidéo, il se referme vite. La grille comparative montre que Sora 2, Veo 3 et 3.1, le 1080p et le 4K de Kling 3.0 et les modèles Seedance 2.0 et 2.5 n'y sont pas inclus, et sa carte annonce l'accès aux seuls Seedance 2.0 Fast et 2.0 Mini. Il donne aussi le crédit le plus cher des trois plans, environ 0,070 € contre 0,039 € sur Plus.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Mieux vaut-il passer par Higgsfield ou s'abonner directement aux modèles ?",
    },
    {
      type: "p",
      text: "Ça dépend du nombre de moteurs que tu utilises vraiment. Si ton travail tourne autour d'un seul modèle, l'abonnement direct chez son éditeur évite une marge intermédiaire. Si tu changes de modèle selon les plans, passer par un catalogue t'évite trois abonnements en parallèle et te donne un seul compteur à surveiller. Fais le calcul sur ton mois précédent, moteur par moteur, plutôt que sur une intention.",
    },

    {
      type: "p",
      text: "Avant de regarder quoi que ce soit d'autre sur cette page, divise le prix du plan par ses crédits. 0,070 € sur Starter, 0,039 € sur Plus, 0,033 € sur Ultra. Ce seul nombre, multiplié par le coût en crédits du modèle que tu utilises le plus, te donne ton prix au plan. Le reste de la page est de la mise en scène autour de ces trois chiffres.",
    },
    {
      type: "p",
      text: "Note de fondateur : lire une grille tarifaire, ça s'apprend en une heure. Savoir combien de secondes ton projet demande réellement, ça vient du découpage, et c'est un travail de réalisation avant d'être un travail d'outil. C'est cette partie-là qu'on creuse dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-04 -->
