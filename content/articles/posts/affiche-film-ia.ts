import type { Article } from "@/lib/types/article";

export const afficheFilmIa: Article = {
  title: "Affiche de film IA : du prompt au fichier imprimable",
  slug: "affiche-film-ia",
  description:
    "Les formats réels des salles, le ratio à générer pour chacun, la règle de taille du bloc de crédits et le PDF que l'imprimeur accepte du premier coup.",
  excerpt:
    "Une affiche de cinéma se fabrique à l'envers de ce que fait tout le monde : on choisit le format de sortie avant de générer la moindre image, parce que c'est lui qui fixe le ratio, le nombre de pixels et la place du titre.",
  category: "ia-image",
  tags: [
    "Affiche de film",
    "Impression",
    "Typographie",
    "Grand format",
    "Direction artistique",
  ],
  date: "2026-10-02",
  updatedAt: "2026-10-02",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/affiche-film-ia.webp",
  imageAlt:
    "Dans un atelier d'impression grand format en fin de journée, une femme en tablier gris taché d'encre se penche sur une épreuve d'affiche posée à plat sur une large table en bois et approche un compte-fils de la bande de pastilles de contrôle couleur imprimée au bord de la feuille, traceur à rouleau en marche derrière elle",
  keywords: [
    "affiche film ia",
    "poster ia",
    "créer affiche cinéma ia",
    "format affiche cinéma",
    "bloc de crédits affiche",
  ],
  relatedSlugs: [
    "ideogram-typographie-affiche-cinema",
    "images-cinema-ia-scene-film",
    "composition-cadrage-image-ia",
  ],
  faq: [
    {
      question: "Quel format choisir pour une affiche de film en France ?",
      answer:
        "Le 120 x 160 cm est le format de base des salles françaises, celui qu'on voit dans les halls et sur les façades. Il se double très souvent d'un petit format 40 x 60 cm pour les vitrines et les couloirs. Viennent ensuite le format pantalon 60 x 160 cm pour les portes de salle et les colonnes Morris, et le géant 400 x 300 cm composé de huit panneaux pour les façades et le métro. Les 240 x 320 cm et 240 x 160 cm existent encore chez les collectionneurs mais ne sont plus utilisés.",
    },
    {
      question: "Quelle définition faut-il pour imprimer une affiche 120 x 160 ?",
      answer:
        "Autour de 4 724 x 6 299 pixels, ce qui correspond à 100 dpi à l'échelle 1:1. Le réflexe des 300 dpi vient de l'imprimé qu'on tient en main et ne s'applique pas au grand format, qui se regarde à plusieurs mètres. Le guide de préparation de fichiers de LuxVisual donne 100 dpi comme résolution optimale en grand format, avec un plancher de 72 dpi au-delà de 1 m² et de 36 dpi au-delà de 10 m². Un 120 x 160 fait 1,92 m².",
    },
    {
      question: "Faut-il laisser l'IA écrire le titre de l'affiche ?",
      answer:
        "Non, et pas seulement à cause des fautes. Même quand un modèle écrit proprement, tu obtiens des lettres pixellisées dans une image aplatie, impossibles à recaler, à recolorer ou à vectoriser. Le titre, la tagline, le bloc de crédits et les logos se composent après coup dans un outil vectoriel, par dessus l'image générée. C'est aussi ce qui te permet de sortir dix déclinaisons de la même affiche en changeant une ligne de texte.",
    },
    {
      question: "Quelle taille doit faire le bloc de crédits ?",
      answer:
        "Wikipedia donne la convention du métier : le corps du bloc de crédits vaut 25 ou 35 % de la hauteur moyenne des lettres du titre. Ce pourcentage sort des contrats signés avec les équipes et les interprètes, bien avant que quelqu'un ouvre un logiciel de mise en page. La typographie ultra condensée, dont la hauteur des caractères fait plusieurs fois leur largeur, sert justement à tenir cette hauteur imposée tout en logeant tous les noms sur la largeur disponible.",
    },
    {
      question: "En quel ratio générer l'image d'une affiche avec l'IA ?",
      answer:
        "En 3:4 pour un 120 x 160 cm, qui tombe pile. En 2:3 pour un petit format 40 x 60 cm, qui tombe pile aussi. Pour un one sheet américain de 27 x 40 pouces, génère en 2:3 et rogne un demi-pouce en hauteur. Le format pantalon 60 x 160 cm vaut 3:8 et n'existe dans aucun générateur, il se construit en extension depuis une image plus carrée. Les modèles d'image de Gemini acceptent 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9 et 21:9.",
    },
    {
      question: "Quel fichier envoyer à l'imprimeur ?",
      answer:
        "Un PDF à l'échelle 1:1, en CMJN avec un profil Fogra 39, avec 10 mm de fond perdu sur les quatre côtés, sans traits de coupe ni repères, et avec les textes et logos en vectoriel plutôt qu'en pixels. Les exigences varient d'un imprimeur à l'autre, certains demandent 2 ou 3 mm de fond perdu et un fichier aux dimensions finales plus la marge. Lis la fiche technique du tien avant d'exporter, c'est trois minutes qui évitent un renvoi.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le rendu est superbe sur ton écran. Tu l'envoies à l'imprimeur et le fichier revient avec une liste : la définition ne suit pas, le titre est noyé dans les pixels de l'image, et il manque dix millimètres de fond perdu tout autour. Personne ne t'a dit qu'une affiche de cinéma est d'abord un objet physique avec des contraintes écrites.",
    },
    {
      type: "p",
      text: "Plus bas : les formats qui existent vraiment en salle avec leurs dimensions, le ratio exact à demander au générateur pour chacun, le nombre de pixels à produire, la règle de taille du bloc de crédits, et le fichier qui passe du premier coup. Les chiffres d'impression ont été relevés le 2 octobre 2026.",
    },
    {
      type: "p",
      text: "L'erreur de départ est presque toujours la même. On génère une belle image, puis on cherche un format où la caser. L'ordre correct est l'inverse : le format de sortie fixe le ratio, le nombre de pixels et la place du titre, et tout le reste en découle.",
    },

    {
      type: "h2",
      id: "core-concepts",
      text: "Le format décide de tout avant la première image",
    },
    {
      type: "h3",
      id: "formats-reels",
      text: "Les formats qui existent vraiment en salle",
    },
    {
      type: "p",
      text: "En France, le format de base est le **120 x 160 cm**. C'est celui des halls, des façades et des vitrines de cinéma, et le seul que les collectionneurs appellent le grand format. Le site de vente d'affiches originales Mauvais Genres, qui tient un guide des formats par pays, raconte qu'il est hérité de la toute première affiche de cinéma, celle du Cinématographe Lumière pour *L'Arroseur arrosé*, créée en 1896.",
    },
    {
      type: "image",
      src: "/images/articles/affiche-film-ia-formats.webp",
      alt: "Page du guide des formats d'affiches de cinéma de Mauvais Genres listant les formats français avec leurs dimensions en centimètres et en pouces",
      caption:
        "Le guide des formats d'affiches de Mauvais Genres, capturé le 2 octobre 2026.",
    },
    {
      type: "p",
      text: "Autour de lui gravitent le **petit format 40 x 60 cm**, qui accompagne presque toujours le grand dans les couloirs, le **format pantalon 60 x 160 cm** destiné aux portes de salle et aux colonnes Morris, et le **géant 400 x 300 cm** composé de huit panneaux pour les façades et le métro. Les 240 x 320 cm et 240 x 160 cm, faits de plusieurs feuilles de 120 x 160, sont abandonnés. Le guide prévient d'ailleurs que ces tailles sont approximatives et varient de quelques centimètres d'un film à l'autre.",
    },
    {
      type: "p",
      text: "Si ton projet vise l'international, retiens surtout le **one sheet américain**, 27 x 40 pouces soit 686 x 1016 mm. [Wikipedia](https://en.wikipedia.org/wiki/Film_poster) précise qu'il mesurait 27 x 41 pouces avant le milieu des années 1980, quand les studios ont repris la production de leurs affiches au National Screen Service. Un pouce de moins, et toutes les affiches d'avant sont au mauvais format pour les cadres d'aujourd'hui.",
    },
    {
      type: "h3",
      id: "bloc-credits",
      text: "La taille du bloc de crédits est écrite dans un contrat",
    },
    {
      type: "p",
      text: "La bande de texte minuscule en bas d'affiche porte un nom, le **bloc de crédits**, et sa hauteur se négocie avant d'être dessinée. Le corps du texte vaut 25 ou 35 % de la hauteur moyenne des lettres du titre. Ce pourcentage figure noir sur blanc dans les contrats signés avec les équipes et les interprètes, au même titre qu'un cachet.",
    },
    {
      type: "image",
      src: "/images/articles/affiche-film-ia-billing-block.webp",
      alt: "Section Billing block de l'article Film poster de Wikipedia, qui donne la convention des 25 ou 35 pour cent de la hauteur des lettres du titre",
      caption:
        "La section « Billing block » de l'article Film poster de Wikipedia, capturée le 2 octobre 2026.",
    },
    {
      type: "p",
      text: "D'où la typographie ultra condensée, celle dont la hauteur des caractères fait plusieurs fois leur largeur. Elle permet de tenir la hauteur imposée par le contrat tout en logeant quarante noms sur la largeur de l'affiche. C'est la raison d'être de cette typo bizarre que tu vois partout, et c'est aussi pour ça qu'un bloc de crédits composé dans une Helvetica normale se repère en une seconde.",
    },
    {
      type: "p",
      text: "Si tu fabriques une affiche pour un film qui existe, cette contrainte s'applique à toi. Si tu fabriques un faux poster pour un portfolio, elle reste le détail qui fait la différence entre un exercice de style et une image qui passe pour vraie. Tu peux la travailler en même temps que le reste de la typo dans notre article sur le [texte lisible dans les images IA](/blog/ideogram-texte-lisible-images-ia).",
    },

    {
      type: "h2",
      id: "practical-workflow",
      text: "Du ratio au PDF, les cinq étapes",
    },
    {
      type: "p",
      text: "Commence par ce tableau. Chaque définition sort du même calcul, la dimension en pouces multipliée par la résolution visée, et les résolutions visées sortent des usages du grand format.",
    },
    {
      type: "table",
      caption:
        "Ce qu'il faut générer pour chaque format d'affiche, et à quelle définition",
      headers: [
        "Format",
        "Où il s'affiche",
        "Ratio à générer",
        "Résolution visée",
        "Pixels à produire",
      ],
      rows: [
        [
          "120 x 160 cm (grand format FR)",
          "Hall et façade de salle",
          "3:4, pile",
          "100 dpi",
          "4 724 x 6 299 px (29,8 Mpx)",
        ],
        [
          "40 x 60 cm (petit format FR)",
          "Vitrine, couloir, à portée de main",
          "2:3, pile",
          "300 dpi",
          "4 724 x 7 087 px (33,5 Mpx)",
        ],
        [
          "27 x 40 in (one sheet US)",
          "Caisson lumineux de lobby",
          "2:3 puis rogner 0,5 in",
          "300 dpi",
          "8 100 x 12 000 px (97,2 Mpx)",
        ],
        [
          "60 x 160 cm (pantalon)",
          "Portes de salle, colonne Morris",
          "3:8, aucun natif",
          "100 dpi",
          "2 362 x 6 299 px (14,9 Mpx)",
        ],
        [
          "400 x 300 cm (géant, 8 panneaux)",
          "Façade, quai de métro",
          "4:3",
          "36 dpi",
          "5 669 x 4 252 px (24,1 Mpx)",
        ],
      ],
    },
    {
      type: "p",
      text: "Regarde la colonne de droite dans l'ordre. Le petit format 40 x 60 cm réclame **plus de pixels que le 120 x 160**, et le géant de 12 m² en demande quatre fois moins que le one sheet. La distance de lecture commande tout : une affiche qu'on frôle dans un couloir se juge au nez, une façade se regarde depuis le trottoir d'en face.",
    },
    {
      type: "p",
      text: "Ces résolutions viennent des pratiques du grand format. Le guide de préparation de fichiers de [LuxVisual](https://www.luxvisual.lu/guide-pao-grand-format/) donne 100 dpi comme résolution optimale, avec un plancher de 72 dpi au delà de 1 m² et de 36 dpi au delà de 10 m². Il précise que ces chiffres sont une base théorique, pas une loi.",
    },
    {
      type: "image",
      src: "/images/articles/affiche-film-ia-dpi.webp",
      alt: "Résumé du guide PAO grand format de LuxVisual listant PDF échelle 1:1, CMJN, fond perdu 10 mm, profil Fogra 39 et résolution 100 dpi",
      caption:
        "Le résumé du guide de préparation de fichiers grand format de LuxVisual, capturé le 2 octobre 2026.",
    },
    {
      type: "ol",
      items: [
        "**Choisis le format de sortie et note tes deux chiffres.** Le ratio et la définition cible, pris dans le tableau. Tout ce qui suit en dépend, y compris la composition.",
        "**Génère l'image seule, sans une seule lettre dedans.** Demande le ratio exact et la plus haute résolution disponible. Les modèles d'image de Gemini acceptent 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9 et 21:9, et montent jusqu'à la [sortie 4K](https://ai.google.dev/gemini-api/docs/image-generation) sur Gemini 3 Pro Image. Un 3:4 en 4K couvre déjà une bonne partie du chemin vers les 29,8 Mpx d'un 120 x 160.",
        "**Monte en définition jusqu'à la cible.** Un agrandissement par deux suffit presque toujours en grand format. Pour le one sheet et ses 97 Mpx, prévois deux passes et une vraie vérification à 100 % sur les visages, c'est là que l'agrandissement invente des détails.",
        "**Compose la typographie par dessus, dans un outil vectoriel.** Titre, tagline, bloc de crédits à 25 ou 35 % de la hauteur des lettres du titre, logos des financeurs, mentions légales, date de sortie. Tout en vectoriel, rien en pixels.",
        "**Exporte le PDF d'impression.** Échelle 1:1, CMJN en Fogra 39, 10 mm de fond perdu sur les quatre côtés, pas de traits de coupe ni de repères, textes et logos vectorisés. Vérifie la fiche technique de ton imprimeur, certains demandent 2 ou 3 mm plutôt que 10.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : décide où ira le titre **avant** de générer, et demande-le dans le prompt. Un ciel vide dans le tiers haut, une zone sombre et peu détaillée en bas pour poser les crédits, et ton image sort déjà compatible avec la typo. Sinon tu passeras une heure à assombrir une zone au pinceau pour que le titre devienne lisible. Les règles de ce découpage sont les mêmes que dans notre guide de [composition et cadrage](/blog/composition-cadrage-image-ia).",
    },
    {
      type: "p",
      text: "Pour l'image elle-même, le vocabulaire qui marche sur une affiche est celui du plan de cinéma : une focale, une source de lumière, une heure, une matière. Nos repères sur les [images cinéma et plans de film](/blog/images-cinema-ia-scene-film) s'appliquent tels quels, avec une nuance de cadrage. Une affiche se lit en une seconde depuis un trottoir, donc un sujet, un contraste fort, et rien d'autre.",
    },

    {
      type: "h2",
      id: "trench-warfare",
      text: "Quatre erreurs qui se voient à l'impression",
    },
    {
      type: "h3",
      id: "erreur-titre-genere",
      text: "Erreur 1, laisser le générateur écrire le titre",
    },
    {
      type: "p",
      text: "Les modèles récents écrivent correctement, donc la tentation est forte. Le problème arrive après : tes lettres sont des pixels noyés dans l'image, impossibles à recaler d'un millimètre, à recolorer, à traduire ou à décliner. Le jour où le distributeur demande la version anglaise, tu regénères tout.",
    },
    {
      type: "p",
      text: "Fix concret : l'image générée ne contient jamais de texte. La typo arrive au dessus, en vectoriel, dans un fichier séparé. Tu gagnes les déclinaisons gratuitement et tu peux vectoriser proprement pour l'impression. Notre article sur [l'affiche cinéma avec Ideogram](/blog/ideogram-typographie-affiche-cinema) traite le cas où tu veux quand même du texte généré.",
    },
    {
      type: "h3",
      id: "erreur-ratio",
      text: "Erreur 2, générer en 16:9 puis recadrer en portrait",
    },
    {
      type: "p",
      text: "C'est le réflexe de ceux qui viennent de la vidéo. Un 16:9 recadré en 3:4 perd 56 % de sa largeur, donc la composition que tu avais validée n'existe plus, et la définition restante tombe sous la cible. Le sujet se retrouve coupé ou centré par défaut, ce qui donne cette affiche plate qu'on voit partout.",
    },
    {
      type: "p",
      text: "Fix concret : génère dans le ratio final dès le premier essai. Pour le format pantalon 60 x 160 cm, qui vaut 3:8 et n'existe dans aucun générateur, pars d'un 9:16 et étends la hauteur par extension d'image plutôt que de recadrer brutalement un format plus large.",
    },
    {
      type: "h3",
      id: "erreur-300-dpi",
      text: "Erreur 3, viser 300 dpi partout",
    },
    {
      type: "p",
      text: "Le réflexe des 300 dpi vient de l'imprimé qu'on tient en main, et il coûte cher appliqué au grand format. Un 120 x 160 cm à 300 dpi demande 14 173 x 18 898 pixels, soit 268 Mpx, pour un objet qu'on regarde à trois mètres. Tu passerais une demi-journée d'agrandissement à fabriquer du détail que personne ne verra.",
    },
    {
      type: "p",
      text: "Fix concret : fais le calcul dans l'autre sens, à partir de la distance de lecture. Les 100 dpi du grand format suffisent pour un 120 x 160, et les 36 dpi du géant suffisent pour une façade. Garde les 300 dpi pour ce qui se tient dans la main, le petit format 40 x 60 et le one sheet dans son caisson lumineux.",
    },
    {
      type: "h3",
      id: "erreur-fichier",
      text: "Erreur 4, envoyer un JPEG RVB sans fond perdu",
    },
    {
      type: "p",
      text: "Le symptôme est toujours le même : un liseré blanc d'un millimètre sur un bord après découpe, et des noirs qui virent au marron parce que la conversion CMJN a été faite par la machine de l'imprimeur, pas par toi. Les rouges saturés que l'écran affichait si bien n'existent pas en quadrichromie.",
    },
    {
      type: "p",
      text: "Fix concret : exporte un PDF à l'échelle 1:1, converti en CMJN avec le profil que ton imprimeur indique, avec le fond perdu demandé et une marge de sécurité de 5 mm à l'intérieur du format fini pour tout ce qui doit rester lisible. Et regarde une épreuve papier avant de lancer le tirage complet, même petite, même sur une imprimante de bureau.",
    },

    { type: "h2", id: "faq", text: "Questions fréquentes" },
    {
      type: "h3",
      id: "faq-1",
      text: "Quel format choisir pour une affiche de film en France ?",
    },
    {
      type: "p",
      text: "Le 120 x 160 cm est le format de base des salles françaises, celui qu'on voit dans les halls et sur les façades. Il se double très souvent d'un petit format 40 x 60 cm pour les vitrines et les couloirs. Viennent ensuite le format pantalon 60 x 160 cm pour les portes de salle et les colonnes Morris, et le géant 400 x 300 cm composé de huit panneaux pour les façades et le métro. Les 240 x 320 cm et 240 x 160 cm existent encore chez les collectionneurs mais ne sont plus utilisés.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle définition faut-il pour imprimer une affiche 120 x 160 ?",
    },
    {
      type: "p",
      text: "Autour de 4 724 x 6 299 pixels, ce qui correspond à 100 dpi à l'échelle 1:1. Le réflexe des 300 dpi vient de l'imprimé qu'on tient en main et ne s'applique pas au grand format, qui se regarde à plusieurs mètres. Le guide de préparation de fichiers de LuxVisual donne 100 dpi comme résolution optimale en grand format, avec un plancher de 72 dpi au-delà de 1 m² et de 36 dpi au-delà de 10 m². Un 120 x 160 fait 1,92 m².",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Faut-il laisser l'IA écrire le titre de l'affiche ?",
    },
    {
      type: "p",
      text: "Non, et pas seulement à cause des fautes. Même quand un modèle écrit proprement, tu obtiens des lettres pixellisées dans une image aplatie, impossibles à recaler, à recolorer ou à vectoriser. Le titre, la tagline, le bloc de crédits et les logos se composent après coup dans un outil vectoriel, par dessus l'image générée. C'est aussi ce qui te permet de sortir dix déclinaisons de la même affiche en changeant une ligne de texte.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Quelle taille doit faire le bloc de crédits ?",
    },
    {
      type: "p",
      text: "Wikipedia donne la convention du métier : le corps du bloc de crédits vaut 25 ou 35 % de la hauteur moyenne des lettres du titre. Ce pourcentage sort des contrats signés avec les équipes et les interprètes, bien avant que quelqu'un ouvre un logiciel de mise en page. La typographie ultra condensée, dont la hauteur des caractères fait plusieurs fois leur largeur, sert justement à tenir cette hauteur imposée tout en logeant tous les noms sur la largeur disponible.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "En quel ratio générer l'image d'une affiche avec l'IA ?",
    },
    {
      type: "p",
      text: "En 3:4 pour un 120 x 160 cm, qui tombe pile. En 2:3 pour un petit format 40 x 60 cm, qui tombe pile aussi. Pour un one sheet américain de 27 x 40 pouces, génère en 2:3 et rogne un demi-pouce en hauteur. Le format pantalon 60 x 160 cm vaut 3:8 et n'existe dans aucun générateur, il se construit en extension depuis une image plus carrée. Les modèles d'image de Gemini acceptent 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9 et 21:9.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Quel fichier envoyer à l'imprimeur ?",
    },
    {
      type: "p",
      text: "Un PDF à l'échelle 1:1, en CMJN avec un profil Fogra 39, avec 10 mm de fond perdu sur les quatre côtés, sans traits de coupe ni repères, et avec les textes et logos en vectoriel plutôt qu'en pixels. Les exigences varient d'un imprimeur à l'autre, certains demandent 2 ou 3 mm de fond perdu et un fichier aux dimensions finales plus la marge. Lis la fiche technique du tien avant d'exporter, c'est trois minutes qui évitent un renvoi.",
    },

    {
      type: "p",
      text: "Si tu ne devais retenir qu'une chose : ouvre un document aux dimensions finales avant de lancer la moindre génération. Le ratio, la définition et l'emplacement du titre sortent de ce document, et l'image vient se glisser dedans. Fait dans cet ordre, une affiche se fabrique en une journée. Fait à l'envers, elle se refait trois fois.",
    },
    {
      type: "p",
      text: "Note de fondateur : un export réussi s'apprend en un fichier. Savoir ce que l'affiche doit raconter en une seconde, depuis un trottoir, à quelqu'un qui n'a jamais entendu parler du film, ça demande bien plus de métier. C'est ce travail de direction artistique qu'on creuse dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-02 -->
