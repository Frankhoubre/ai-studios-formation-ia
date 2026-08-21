import type { Article } from "@/lib/types/article";

export const heygenGuideAvatars: Article = {
  title: "HeyGen : le guide complet des avatars vidéo IA",
  slug: "heygen-guide-avatars",
  description:
    "HeyGen en clair : les trois types d'avatars, le coût réel en crédits, la méthode pour un avatar crédible et les cas où il vaut mieux filmer.",
  excerpt:
    "Un avatar HeyGen convaincant se joue à l'écriture et au cadrage, pas au bouton générer. Voici la méthode, les prix réels et les quatre pièges classiques.",
  category: "ia-video",
  tags: ["HeyGen", "avatar IA", "vidéo IA", "présentateur virtuel", "guide outil"],
  date: "2026-08-21",
  updatedAt: "2026-08-21",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/heygen-guide-avatars.webp",
  imageAlt:
    "Coin de bureau transformé en poste d'enregistrement, smartphone sur trépied face à une chaise, panneau lumineux et fond neutre agrafé, lumière de fin d'après-midi",
  keywords: [
    "heygen",
    "heygen français",
    "heygen avis",
    "avatar heygen",
    "heygen prix",
    "avatar vidéo ia",
  ],
  relatedSlugs: [
    "avatars-ia-ugc-presentateur-virtuel",
    "lip-sync-ia-faire-parler-personnage",
    "video-ia-pour-entreprise",
  ],
  faq: [
    {
      question: "HeyGen est-il gratuit ?",
      answer:
        "Il existe une offre à 0 dollar, mais elle sert à tester, pas à produire. Elle plafonne à trois vidéos par mois, une minute maximum par vidéo, et le filigrane reste affiché. C'est suffisant pour voir la tête de ton avatar et vérifier si la voix te convient. Dès que tu veux publier quelque chose sur un site client ou une chaîne, il faut passer à une offre payante, ne serait-ce que pour retirer le filigrane.",
    },
    {
      question: "Combien coûte vraiment HeyGen par mois ?",
      answer:
        "Le prix affiché ne dit pas grand-chose tant que tu n'as pas compté les crédits. Au tarif mensuel affiché en août 2026, Creator est à 29 dollars avec 600 crédits, Pro à 49 dollars avec 1 000 crédits, Business à 149 dollars plus 20 dollars par siège avec 1 500 crédits. Comme une minute d'Avatar IV en look photo consomme 16 crédits, les 600 crédits de Creator représentent une petite quarantaine de minutes par mois. C'est ce calcul-là qui décide de ton offre, pas le prix de la ligne.",
    },
    {
      question: "Quelle différence entre Avatar III, IV et V ?",
      answer:
        "Ce sont les moteurs de rendu, et ils ne coûtent pas la même chose. Avatar III reste le plus économique, autour de 4 à 7 crédits la minute selon le type de look. Avatar IV est le moteur par défaut aujourd'hui : il analyse le ton, le rythme et l'émotion de l'audio pour produire les micro-expressions, et il sait animer une image quelconque, y compris un visage non humain. Avatar V est le plus gourmand, à 48 crédits la minute. Commence en III ou IV, et ne monte que si le rendu ne te suffit pas.",
    },
    {
      question: "Faut-il des photos ou une vidéo pour créer son avatar ?",
      answer:
        "Les deux existent et ne donnent pas le même résultat. Le jumeau numérique hyperréaliste se crée à partir d'une courte vidéo de toi, ce qui capture tes vraies expressions et donne le rendu le plus ressemblant. L'avatar photo se fabrique à partir d'une dizaine à une quinzaine d'images de bonne qualité, sans tournage. Il y a aussi les avatars générés depuis une simple description écrite, pratiques pour un personnage de marque fictif que personne n'a besoin de reconnaître.",
    },
    {
      question: "HeyGen fonctionne-t-il bien en français ?",
      answer:
        "Oui pour l'essentiel, avec une réserve constante. La synthèse française est propre sur des phrases courtes et un vocabulaire courant. Ce qui coince, ce sont les noms propres, les acronymes maison et les noms de produits, que la voix écorche sans prévenir. Le réflexe qui règle le gros du problème : écris ces mots phonétiquement dans le script, écoute une première fois, corrige, puis seulement génère la version longue.",
    },
    {
      question: "Faut-il prévenir que la vidéo utilise un avatar IA ?",
      answer:
        "Dans l'Union européenne, oui, dès que le contenu donne l'impression de montrer une personne réelle. Le règlement européen sur l'IA impose des obligations de transparence sur ce type de contenu depuis le 2 août 2026. En pratique, une mention lisible dans la vidéo ou dans sa description règle la question. Et si tu clones le visage ou la voix de quelqu'un d'autre, il te faut en plus un accord écrit et daté, avec une durée et un périmètre précis.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as testé HeyGen un quart d'heure, tu as vu ton visage parler tout seul et tu as trouvé ça bluffant. Puis tu as montré la vidéo à quelqu'un, et la première phrase que tu as entendue, c'est : il a un truc bizarre, ton clone.",
    },
    {
      type: "p",
      text: "Cet article te donne de quoi trancher : quel type d'avatar choisir selon ton cas, combien HeyGen coûte réellement une fois les crédits comptés, comment fabriquer un avatar qui passe à l'écran, et à quel moment il vaut mieux sortir une caméra.",
    },
    {
      type: "p",
      text: "HeyGen n'a pas un problème de technologie. Le moteur est mûr, les visages tiennent la route. Ce qui rate presque toujours, c'est le texte qu'on lui donne à dire et la façon dont on monte la vidéo autour. On blâme l'outil pour un problème d'écriture.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce que HeyGen fabrique vraiment, et ce qu'il ne fabrique pas",
    },
    {
      type: "h3",
      id: "trois-types-avatars",
      text: "Trois façons d'obtenir un avatar, trois niveaux d'engagement",
    },
    {
      type: "p",
      text: "Le premier choix se fait avant même de payer, et il compte plus que tous les réglages qui suivent. HeyGen propose trois routes pour obtenir un présentateur.",
    },
    {
      type: "p",
      text: "Le jumeau numérique hyperréaliste, d'abord : tu enregistres ou tu téléverses une courte vidéo de toi, et l'outil capture tes expressions faciales réelles. C'est le rendu le plus ressemblant, celui qui tient sur une prise de parole de dirigeant ou un message client. C'est aussi celui qui t'engage le plus, puisque c'est ton visage.",
    },
    {
      type: "p",
      text: "L'avatar photo ensuite : une dizaine à une quinzaine d'images de bonne qualité suffisent, sans tournage. Le rendu est un peu moins nuancé sur les expressions fortes, mais la mise en route prend une soirée au lieu d'une demi-journée. Enfin, l'avatar généré depuis une simple description écrite, qui fabrique un personnage qui n'existe pas. Idéal pour une mascotte ou un porte-parole de marque fictif, à condition d'assumer qu'on ne se cache pas derrière.",
    },
    {
      type: "p",
      text: "Ce choix n'est pas cosmétique, il détermine ce que tu devras faire signer et à qui. Notre article sur [les avatars IA et le présentateur virtuel](/blog/avatars-ia-ugc-presentateur-virtuel) détaille les cas où un personnage générique évite tout le débat juridique.",
    },
    {
      type: "h3",
      id: "moteurs-de-rendu",
      text: "Le moteur de rendu compte autant que l'avatar",
    },
    {
      type: "p",
      text: "HeyGen empile plusieurs générations de moteurs, appelées Avatar III, IV et V. Ce n'est pas une histoire de version qui remplace la précédente : les trois cohabitent, et ils ne coûtent pas du tout la même chose à la minute.",
    },
    {
      type: "p",
      text: "Avatar IV est le moteur par défaut aujourd'hui. Il analyse le ton, le rythme et l'émotion de la piste audio pour générer les micro-expressions, les clignements et les inclinaisons de tête au bon moment. Il sait aussi animer une image quelconque, y compris un visage qui n'a rien d'humain : dessin animé, mascotte, personnage illustré. Un paramètre de mouvement en langage naturel permet de décrire le geste attendu, du type marcher lentement vers la caméra, et un niveau d'expressivité règle l'amplitude générale.",
    },
    {
      type: "p",
      text: "Avatar V est la génération la plus récente, et la plus chère : 48 crédits la minute quel que soit le type de look. Mon conseil : reste en Avatar IV tant que personne ne t'a fait la remarque. Sur un module de formation ou une réponse support, la différence de rendu passe inaperçue et la facture, elle, triple. Pour la synchronisation labiale pure, hors avatar prêt à l'emploi, on a détaillé la méthode dans notre guide sur [faire parler un personnage avec l'IA](/blog/lip-sync-ia-faire-parler-personnage).",
    },
    {
      type: "h3",
      id: "offres-et-plafonds",
      text: "Les offres, et le plafond que personne ne regarde",
    },
    {
      type: "p",
      text: "Dans le tableau ci-dessous, les deux dernières colonnes comptent autant que le prix. Sur l'offre gratuite, la limite d'une minute par vidéo condamne à peu près tous les usages réels, et le filigrane reste affiché de toute façon.",
    },
    {
      type: "table",
      caption: "Les offres HeyGen, au tarif mensuel affiché en août 2026 (en dollars)",
      headers: ["Offre", "Prix par mois", "Crédits inclus", "Durée max par vidéo", "Filigrane"],
      rows: [
        ["Free", "0", "Aucun", "1 min, 3 vidéos par mois", "Oui"],
        ["Creator", "29", "600", "30 min", "Non"],
        ["Pro", "49", "1 000", "30 min", "Non"],
        ["Business", "149 plus 20 par siège", "1 500", "60 min", "Non"],
        ["Enterprise", "Sur devis", "Flexible", "Sans limite annoncée", "Non"],
      ],
    },
    {
      type: "p",
      text: "Les tarifs et les plafonds bougent régulièrement, vérifie la [page officielle des offres HeyGen](https://www.heygen.com/pricing) avant de sortir la carte bleue. Pour arbitrer entre deux offres, le chiffre utile n'est pas le prix affiché mais le nombre de minutes que tes crédits paient réellement.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Fabriquer un avatar HeyGen qui ne fait pas fuir, étape par étape",
    },
    {
      type: "p",
      text: "Avant la méthode, le calcul que tout le monde saute. Les crédits se consomment à la minute générée, et le tarif dépend du moteur et du type de look. Voici ce que ça donne rapporté aux 600 crédits d'une offre Creator.",
    },
    {
      type: "table",
      caption: "Coût en crédits par minute générée, d'après le centre d'aide HeyGen (août 2026)",
      headers: ["Action", "Crédits par minute", "Ce que couvrent 600 crédits"],
      rows: [
        ["Avatar III, look vidéo", "4", "Environ 150 minutes"],
        ["Avatar III, look photo", "7", "Environ 85 minutes"],
        ["Avatar IV, look photo", "16", "Environ 37 minutes"],
        ["Avatar IV, look vidéo", "31", "Environ 19 minutes"],
        ["Avatar V", "48", "Environ 12 minutes"],
        ["Mouvement expressif personnalisé (Avatar IV)", "40", "Environ 15 minutes"],
        ["Traduction vidéo sans synchro labiale", "4", "Environ 150 minutes"],
        [
          "Traduction vidéo avec synchro labiale",
          "6 en mode rapide, 10 en mode précision",
          "60 à 100 minutes",
        ],
      ],
    },
    {
      type: "p",
      text: "Le détail complet, moteur par moteur, est publié dans le [centre d'aide officiel de HeyGen sur les crédits](https://help.heygen.com/en/articles/15126059-how-to-use-credits-on-heygen). Retiens surtout la marche d'escalier : passer d'Avatar IV en look photo à Avatar V multiplie la facture par trois pour un gain que ton spectateur ne verra probablement pas. À côté, l'entraînement d'un modèle d'avatar coûte 60 crédits, une seule fois. Ce n'est pas là que ton budget part.",
    },
    {
      type: "p",
      text: "La méthode tient en sept étapes, et les trois premières se passent entièrement hors de HeyGen. C'est d'ailleurs là que se joue la moitié du résultat.",
    },
    {
      type: "ol",
      items: [
        "Écris le script avant d'ouvrir l'outil, et lis-le à voix haute. Si tu manques d'air au milieu d'une phrase, ton avatar aussi. Coupe.",
        "Choisis le type d'avatar en fonction de ce que tu es prêt à faire signer : jumeau vidéo pour une prise de parole assumée, avatar photo pour du volume, avatar généré pour un porte-parole fictif.",
        "Soigne la matière source. Lumière frontale douce, fond neutre, regard caméra, cadrage à hauteur d'yeux, ton de voix naturel. Une source moyenne donne un avatar moyen, et aucun réglage ne rattrape ça ensuite.",
        "Verrouille la voix avant de produire quoi que ce soit. Génère quinze secondes de test, écoute au casque, corrige la prononciation des noms propres en les écrivant phonétiquement, puis ne change plus rien.",
        "Génère un test court en Avatar IV look photo avant la version longue. C'est le réglage qui donne le meilleur rapport rendu sur crédits pour l'immense majorité des vidéos.",
        "Monte la vidéo autour de l'avatar au lieu de la laisser reposer dessus. Une coupe toutes les huit à douze secondes, des captures d'écran, un plan de coupe, un titre à l'écran.",
        "Ajoute les sous-titres et la mention d'usage de l'IA avant publication, pas après le premier commentaire désagréable.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : note dans un simple tableau le nom exact du look, de la voix et du moteur utilisés pour chaque vidéo publiée. Le jour où il faut refaire l'épisode 4 d'une série sortie six mois plus tôt, retrouver ces trois réglages vaut plus cher que la vidéo elle-même.",
    },
    {
      type: "p",
      text: "Sur le multilingue, HeyGen facture la traduction séparément et propose deux niveaux, avec ou sans synchronisation labiale. Le mode sans synchro suffit pour un module de formation interne. Pour du contenu public, la version synchronisée fait une vraie différence, et notre méthode de [doublage et traduction vidéo par IA](/blog/doublage-traduction-video-ia) s'applique telle quelle. Dans les deux cas, fais relire par quelqu'un qui parle la langue avant diffusion.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Là où les avatars HeyGen se cassent la figure",
    },
    {
      type: "h3",
      id: "erreur-script-ecrit",
      text: "Erreur 1 : faire lire un texte écrit pour être lu",
    },
    {
      type: "p",
      text: "Symptôme : le débit est monocorde, les phrases s'enchaînent sans respiration, et le spectateur décroche au bout de vingt secondes sans savoir pourquoi. Le plus souvent, le script vient d'un article de blog ou d'une fiche produit collée telle quelle.",
    },
    {
      type: "p",
      text: "Fix concret : réécris pour la bouche. Phrases de quinze mots maximum, une idée par phrase, des questions directes au spectateur, et des points là où tu respirerais vraiment. Relis à voix haute, chronomètre en main. Si tu bafouilles, l'avatar sonnera faux exactement au même endroit.",
    },
    {
      type: "h3",
      id: "erreur-plan-fixe",
      text: "Erreur 2 : trois minutes de plan fixe sur un visage",
    },
    {
      type: "p",
      text: "Symptôme : la vidéo est techniquement propre, mais la courbe de rétention plonge dès la première minute. Rien ne bouge à l'écran à part une tête qui parle, et le regard du spectateur n'a nulle part où aller.",
    },
    {
      type: "p",
      text: "Fix concret : traite l'avatar comme une voix off qui a un visage, pas comme le sujet du plan. Il apparaît en ouverture, il revient ponctuer, et le reste du temps on regarde ce dont il parle. Ajoute systématiquement des [sous-titres générés automatiquement](/blog/sous-titres-automatiques-ia-video), parce qu'une grande partie de ces vidéos se regarde sans le son.",
    },
    {
      type: "h3",
      id: "erreur-consentement",
      text: "Erreur 3 : cloner un visage sans cadre écrit",
    },
    {
      type: "p",
      text: "Symptôme : la voix et le visage du dirigeant portent quinze vidéos, il quitte l'entreprise ou change d'avis, et plus personne ne sait si ces contenus restent diffusables. Variante plus fréquente : aucune mention n'indique que la vidéo est générée.",
    },
    {
      type: "p",
      text: "Fix concret : un accord écrit et daté par personne clonée, avec une durée et un périmètre d'usage explicites, plus une mention IA affichée par défaut. Depuis le 2 août 2026, le règlement européen impose des obligations de transparence sur les contenus générés qui donnent l'impression de montrer des personnes réelles, un point qu'on avait détaillé dans notre article sur [la vidéo IA en entreprise](/blog/video-ia-pour-entreprise).",
    },
    {
      type: "h3",
      id: "erreur-credits-brules",
      text: "Erreur 4 : brûler ses crédits en tests sur le moteur le plus cher",
    },
    {
      type: "p",
      text: "Symptôme : le 12 du mois, il ne reste plus de crédits, et la vidéo qui devait sortir attend le renouvellement. En regardant l'historique, on trouve douze versions de trois minutes générées en Avatar V pour ajuster une phrase d'intro.",
    },
    {
      type: "p",
      text: "Fix concret : tous les tests se font sur quinze secondes et sur le moteur le moins cher qui te donne l'information cherchée. On ne teste pas un script en générant la vidéo entière. Et quand une combinaison look plus voix plus moteur fonctionne, tu la figes pour toute la série au lieu de rejouer l'arbitrage à chaque épisode.",
    },
    {
      type: "p",
      text: "Reste la partie qu'aucun avatar ne prendra en charge : savoir quoi dire, à qui, et dans quel ordre. C'est exactement ce qu'on travaille étape par étape dans la [formation IA vidéo gratuite d'AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video), avec la même logique de production en série que celle décrite ici.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "HeyGen est-il gratuit ?",
    },
    {
      type: "p",
      text: "Il existe une offre à 0 dollar, mais elle sert à tester, pas à produire. Elle plafonne à trois vidéos par mois, une minute maximum par vidéo, et le filigrane reste affiché. C'est suffisant pour voir la tête de ton avatar et vérifier si la voix te convient. Dès que tu veux publier quelque chose sur un site client ou une chaîne, il faut passer à une offre payante, ne serait-ce que pour retirer le filigrane.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien coûte vraiment HeyGen par mois ?",
    },
    {
      type: "p",
      text: "Le prix affiché ne dit pas grand-chose tant que tu n'as pas compté les crédits. Au tarif mensuel affiché en août 2026, Creator est à 29 dollars avec 600 crédits, Pro à 49 dollars avec 1 000 crédits, Business à 149 dollars plus 20 dollars par siège avec 1 500 crédits. Comme une minute d'Avatar IV en look photo consomme 16 crédits, les 600 crédits de Creator représentent une petite quarantaine de minutes par mois. C'est ce calcul-là qui décide de ton offre, pas le prix de la ligne.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Quelle différence entre Avatar III, IV et V ?",
    },
    {
      type: "p",
      text: "Ce sont les moteurs de rendu, et ils ne coûtent pas la même chose. Avatar III reste le plus économique, autour de 4 à 7 crédits la minute selon le type de look. Avatar IV est le moteur par défaut aujourd'hui : il analyse le ton, le rythme et l'émotion de l'audio pour produire les micro-expressions, et il sait animer une image quelconque, y compris un visage non humain. Avatar V est le plus gourmand, à 48 crédits la minute. Commence en III ou IV, et ne monte que si le rendu ne te suffit pas.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Faut-il des photos ou une vidéo pour créer son avatar ?",
    },
    {
      type: "p",
      text: "Les deux existent et ne donnent pas le même résultat. Le jumeau numérique hyperréaliste se crée à partir d'une courte vidéo de toi, ce qui capture tes vraies expressions et donne le rendu le plus ressemblant. L'avatar photo se fabrique à partir d'une dizaine à une quinzaine d'images de bonne qualité, sans tournage. Il y a aussi les avatars générés depuis une simple description écrite, pratiques pour un personnage de marque fictif que personne n'a besoin de reconnaître.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "HeyGen fonctionne-t-il bien en français ?",
    },
    {
      type: "p",
      text: "Oui pour l'essentiel, avec une réserve constante. La synthèse française est propre sur des phrases courtes et un vocabulaire courant. Ce qui coince, ce sont les noms propres, les acronymes maison et les noms de produits, que la voix écorche sans prévenir. Le réflexe qui règle le gros du problème : écris ces mots phonétiquement dans le script, écoute une première fois, corrige, puis seulement génère la version longue.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Faut-il prévenir que la vidéo utilise un avatar IA ?",
    },
    {
      type: "p",
      text: "Dans l'Union européenne, oui, dès que le contenu donne l'impression de montrer une personne réelle. Le règlement européen sur l'IA impose des obligations de transparence sur ce type de contenu depuis le 2 août 2026. En pratique, une mention lisible dans la vidéo ou dans sa description règle la question. Et si tu clones le visage ou la voix de quelqu'un d'autre, il te faut en plus un accord écrit et daté, avec une durée et un périmètre précis.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-21 -->
