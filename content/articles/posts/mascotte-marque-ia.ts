import type { Article } from "@/lib/types/article";

export const mascotteMarqueIa: Article = {
  title: "Mascotte de marque IA : la créer et la protéger",
  slug: "mascotte-marque-ia",
  description:
    "Créer une mascotte de marque avec l'IA : bible de personnage, cohérence sur vingt visuels, export vectoriel, et ce que dit le droit sur sa protection.",
  excerpt:
    "Une mascotte, c'est un personnage qui travaille pour une marque pendant des années. L'IA sait en dessiner une en dix secondes ; ce qu'elle ne sait pas faire, c'est la garder identique sur vingt visuels ni la protéger devant un tribunal. Voici la méthode pour les deux.",
  category: "business-creatif",
  tags: [
    "mascotte ia",
    "mascotte de marque",
    "personnage de marque",
    "branding ia",
    "identité visuelle",
    "propriété intellectuelle",
  ],
  date: "2026-09-21",
  updatedAt: "2026-09-21",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/mascotte-marque-ia.webp",
  imageAlt:
    "Atelier de sérigraphie au crépuscule, un homme barbu en tablier taché d'encre soulève le cadre de sa presse au-dessus d'un sac de café en kraft où vient d'être imprimé un renard mascotte en tablier vert, pile de sacs identiques et mug avec le même renard sur l'établi, planche de poses du renard de face, de profil et de dos suspendue à un fil devant la fenêtre",
  keywords: [
    "mascotte ia",
    "mascotte de marque",
    "créer une mascotte",
    "personnage de marque ia",
    "mascotte entreprise",
    "protéger une mascotte",
  ],
  relatedSlugs: [
    "personnage-coherent-ia",
    "univers-visuel-marque-ia",
    "creer-logo-ia-methode-outils",
  ],
  faq: [
    {
      question: "Peut-on créer une mascotte de marque avec l'IA ?",
      answer:
        "Oui, et c'est même l'un des usages où l'IA fait gagner le plus de temps : les premières explorations de silhouettes se font en une soirée au lieu d'une semaine. Le travail réel commence après, quand il faut tenir le même personnage sur des dizaines de visuels, dans plusieurs poses et plusieurs formats. C'est là qu'une bible de mascotte, des outils de référence d'image et un export vectoriel deviennent obligatoires.",
    },
    {
      question: "Quel outil IA utiliser pour garder une mascotte cohérente ?",
      answer:
        "Chez Midjourney, l'Edit Model (versions 8.1 et 8.2) accepte jusqu'à quatre images de référence, remplace les anciens Omni Reference et Character Reference, et répond à des instructions comme « let's see this image from the front » pour produire des vues du personnage. Nano Banana côté Google fait le même travail d'édition guidée à partir d'une image. Recraft, avec ses modèles Vector, sort directement des fichiers SVG, ce qui compte dès que la mascotte doit être imprimée ou animée.",
    },
    {
      question: "Une mascotte générée par IA est-elle protégée par le droit d'auteur ?",
      answer:
        "Pas automatiquement. Le rapport du Copyright Office américain du 29 janvier 2025 conclut que les productions d'une IA générative ne sont protégeables que lorsqu'un auteur humain a déterminé des éléments expressifs suffisants, et que la seule fourniture de prompts ne suffit pas. Une mascotte retravaillée par un humain (redessinée, réagencée, modifiée) peut retrouver une protection sur ces apports. En France, la question reste discutée ; le réflexe sûr consiste à documenter le travail humain et à ne pas s'appuyer uniquement sur le droit d'auteur.",
    },
    {
      question: "Comment protéger une mascotte de marque en France ?",
      answer:
        "Par le dépôt de marque à l'INPI, qui ne dépend pas de la façon dont le dessin a été produit. Une marque peut être figurative (un dessin, un logo) ou combiner dessin et nom. Le dépôt électronique coûte 190 € pour une classe de produits ou services et 40 € par classe supplémentaire, d'après la page officielle de l'INPI lue le 21 septembre 2026, pour une protection de dix ans renouvelable. Choisis les classes qui correspondent à ce que tu vends réellement.",
    },
    {
      question: "Que doit contenir une bible de mascotte ?",
      answer:
        "Le minimum tient sur deux pages : une fiche d'identité (espèce ou nature, palette avec codes couleur, trois traits fixes, un accessoire signature), une planche de poses (face, trois quarts, profil, dos), une planche d'expressions (au moins quatre), une liste de ce qui ne change jamais et une liste de ce qu'on a le droit de faire varier. Duolingo a fixé dès 2013 que la couleur et l'espèce de Duo ne bougeraient jamais : c'est exactement ce genre de règle qu'il faut écrire.",
    },
    {
      question: "Combien de temps faut-il pour créer une mascotte avec l'IA ?",
      answer:
        "Compte une journée pour l'exploration et le choix de la silhouette, une journée pour la bible (poses, expressions, palette) et une demi-journée pour l'export vectoriel et les premières déclinaisons. Le poste qui déborde, dans mon expérience, c'est toujours la cohérence entre les vues, quand une oreille change de forme d'une image à l'autre. Garde une demi-journée de plus pour refaire.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as généré un renard mignon pour ta torréfaction, tout le monde l'adore, tu le mets sur le sac de café. Deux semaines plus tard, tu veux le même renard qui salue sur une story, puis assis sur une tasse pour le mug, puis en version noir et blanc pour le tampon. Et à chaque génération, ce n'est plus tout à fait lui : les oreilles changent, le museau s'allonge, la queue disparaît. **Tu n'as pas une mascotte, tu as une collection de cousins.**",
    },
    {
      type: "p",
      text: "À la fin de cette page, tu auras une bible de personnage qui fixe ce qui ne bouge jamais, la façon d'utiliser les outils de référence d'image pour tenir ton personnage d'une vue à l'autre, un export vectoriel pour l'impression, et un point clair sur ce que le droit protège ou non. Les faits viennent des pages officielles de l'INPI, du Copyright Office américain et de Midjourney, lues le 21 septembre 2026.",
    },
    {
      type: "p",
      text: "Vu d'atelier, une mascotte est un employé dessiné. On la recrute pour vingt ans, pas pour un post. Générer l'image prend dix secondes ; écrire ses règles et la protéger prend des jours, et c'est là que tu gagnes ou perds.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce qui fait tenir une mascotte de marque pendant vingt ans",
    },
    {
      type: "h3",
      text: "Ce que Bibendum et Duo ont en commun",
    },
    {
      type: "p",
      text: "Le bonhomme Michelin existe depuis 1898. D'après [sa page Wikipédia](https://fr.wikipedia.org/wiki/Bibendum), il a été dessiné par O'Galop sur une idée des frères Michelin, il a arrêté le cigare et perdu du poids dans les années 1960, il a été aminci en 1997 et il est passé en 3D en 2003. En 2000, un panel de professionnels interrogé par le Financial Times l'a élu meilleur logo du siècle. Plus d'un siècle de service, au moins trois refontes, et tout le monde le reconnaît encore de dos.",
    },
    {
      type: "p",
      text: "Duo, le hibou de Duolingo, raconte la même histoire en accéléré. Quand l'équipe a redessiné l'application en 2013, elle a posé deux règles avant de toucher au personnage : [sa couleur et son espèce ne changeraient pas](https://blog.duolingo.com/reshaping-duo/). Tout le reste, la silhouette d'abord, a été itéré pendant des mois. Sept ans plus tard, quand Duolingo a ajouté toute une troupe de personnages, l'équipe a passé dix-huit mois dessus et a résumé son langage de formes en quatre composantes : une géométrie simple, de très grands yeux, une silhouette reconnaissable et des pieds détachés du corps.",
    },
    {
      type: "p",
      text: "Un siècle sépare les deux histoires et elles disent la même chose : **une mascotte tient par ses règles**, couleur, espèce, silhouette, yeux. Autour de ce noyau, la pose, le décor, l'expression et la technique de rendu peuvent bouger autant qu'on veut. Tant que tu n'as pas écrit ces règles, tu n'as rien à faire tenir par un outil.",
    },
    {
      type: "h3",
      text: "Ce que l'IA change, et ce qui reste à ta charge",
    },
    {
      type: "p",
      text: "Vingt silhouettes de renard en une heure, dans cinq styles, avec trois accessoires différents : ce travail d'exploration prenait une semaine à un illustrateur et tu le fais en soirée. Le coût des déclinaisons baisse aussi une fois le personnage fixé, à condition d'utiliser des outils qui savent lire une image de référence plutôt qu'un simple texte.",
    },
    {
      type: "p",
      text: "Le choix, et la constance une fois le choix fait, restent ton travail. Un modèle ne se souvient pas de ton renard entre deux prompts ; [la méthode du personnage cohérent](/blog/personnage-coherent-ia) explique pourquoi et comment fabriquer cette mémoire. Et personne, ni modèle ni outil, ne décidera pour toi que le renard a une tache blanche sur l'oreille gauche et jamais sur la droite. Ce détail, c'est toi qui le tiens, sur chaque visuel, pendant des années.",
    },
    {
      type: "image",
      src: "/images/articles/mascotte-marque-ia-midjourney-edit-model.webp",
      alt: "Page de documentation Edit Model de Midjourney, bandeau vert This feature is supported in V8.2, illustration montrant une image de référence transformée en deux nouvelles compositions, sommaire à gauche avec les entrées Edit Model et Omni Reference",
      caption:
        "L'Edit Model de Midjourney, qui remplace Omni Reference et Character Reference avec jusqu'à quatre images de référence. Source : docs.midjourney.com, capture du 21/09/2026.",
    },
    {
      type: "p",
      text: "Sur ce point, la doc de Midjourney a changé récemment. La page Omni Reference indique désormais que la fonction n'est pas supportée en V8.2 et renvoie vers l'[Edit Model](https://docs.midjourney.com/hc/en-us/articles/48495453462797-Edit-Model), compatible avec les versions 8.1 et 8.2, qui accepte jusqu'à quatre images de référence et remplace à la fois Omni Reference et Character Reference. Il accepte des instructions en langage naturel, et la doc donne deux exemples utiles pour une mascotte : « let's see this image from the front » et « let's see this image from behind ». Si tu suis un tutoriel qui parle encore de --cref ou de --oref, il date.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Créer ta mascotte avec l'IA en six étapes",
    },
    {
      type: "p",
      text: "La pièce centrale de la méthode, c'est la bible de mascotte. Deux pages, pas plus, que tu remplis au fur et à mesure et que tu joins à chaque prompt, à chaque brief, à chaque prestataire. Voici ce qu'elle contient, avec l'exemple du renard de torréfaction.",
    },
    {
      type: "table",
      caption:
        "La bible de mascotte minimum : ce qu'on fixe, ce qu'on laisse varier (exemple d'un renard pour une torréfaction)",
      headers: ["Élément", "Ce que tu fixes", "Exemple", "Ce que tu laisses libre"],
      rows: [
        [
          "Identité",
          "Espèce ou nature, âge apparent, rôle dans la marque",
          "Renard adulte, un peu rond, torréfacteur qui goûte tout",
          "Le décor, la saison, l'activité du jour",
        ],
        [
          "Palette",
          "Trois couleurs maximum avec codes hexadécimaux",
          "Roux brûlé, crème, brun café",
          "Les couleurs du fond et des accessoires secondaires",
        ],
        [
          "Traits fixes",
          "Trois détails que l'œil vérifie en premier",
          "Oreilles rondes, tache crème sur l'oreille gauche, queue en virgule",
          "L'expression, la position des pattes",
        ],
        [
          "Accessoire signature",
          "Un seul, toujours présent ou toujours absent",
          "Tablier vert bouteille, sans logo",
          "Ce qu'il tient dans les pattes",
        ],
        [
          "Formes",
          "Le langage de formes (rond, anguleux, proportions tête / corps)",
          "Tout en cercles, tête = corps, pas d'angle vif",
          "Le style de rendu selon le support (aplat, texture, 3D)",
        ],
        [
          "Interdits",
          "Ce que la mascotte ne fait jamais",
          "Jamais de regard fermé, jamais de tasse brisée, jamais de texte sur le tablier",
          "Tout le reste",
        ],
      ],
    },
    {
      type: "p",
      text: "Cette bible est le contrat. Elle sert de haut de prompt, comme la fiche casting dans [la méthode du personnage cohérent](/blog/personnage-coherent-ia), et elle sert aussi de grille de contrôle quand tu reçois une image : chaque ligne se vérifie d'un coup d'œil. Les étapes qui suivent la construisent dans l'ordre.",
    },
    {
      type: "ol",
      items: [
        "Écris le job avant le dessin. Une mascotte a une fonction : accueillir, expliquer, rassurer, faire rire. Le renard goûte le café et fait des grimaces quand c'est raté : cette phrase te donne déjà la liste des expressions dont tu auras besoin. Sans job, tu choisiras la silhouette la plus jolie, qui n'est presque jamais la plus utile.",
        "Explore large, en silhouettes noires. Génère vingt à trente propositions en aplats noirs sur fond blanc, sans couleur ni détail. Une mascotte se reconnaît d'abord à sa silhouette (c'est le premier poste de la refonte de Duo en 2013). Garde les trois qui restent lisibles à la taille d'un favicon.",
        "Fixe l'identité sur une seule image de référence. À partir de la silhouette gagnante, génère le personnage de face, en pose neutre, sur fond uni, avec la palette et l'accessoire de la bible. Itère jusqu'à ce que les trois traits fixes soient exactement ceux que tu veux. Cette image devient la référence numéro un : tout le reste en dérive.",
        "Produis la planche de vues et d'expressions avec un outil de référence d'image. Dans Midjourney, attache la référence à l'Edit Model et demande la vue de face, de trois quarts, de profil, de dos, puis quatre expressions. Nano Banana côté Google fait ce travail d'édition à partir d'une image, [le guide du blog sur Imagen et Nano Banana](/blog/google-imagen-nano-banana-photorealisme) détaille son fonctionnement. Vérifie chaque sortie contre la bible et jette sans état d'âme.",
        "Passe en vectoriel. Une mascotte s'imprime sur un sac, un camion et une carte de visite, donc elle doit exister en SVG. Recraft, avec ses modèles Vector, génère directement des fichiers SVG éditables ; [le guide Recraft du blog](/blog/recraft-design-vectoriel-icones) montre comment obtenir des tracés propres. Tu peux aussi vectoriser ta référence à la main dans Illustrator ou Inkscape, ce qui a un avantage juridique qu'on verra plus bas.",
        "Décline sur les supports réels et corrige la bible. Sac, story, mug, signature d'email, favicon. Chaque support révèle un défaut (le tablier illisible en 32 pixels, la queue coupée au format carré) et chaque défaut devient une ligne de la bible. Ton [univers visuel de marque](/blog/univers-visuel-marque-ia) se construit autour de cette version stabilisée, pas de la première.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : fais le test du dos. Génère ta mascotte de dos, sans visage, et montre-la à quelqu'un qui connaît la marque. Si la personne la reconnaît, la silhouette et la palette font leur travail. Si elle hésite, tu tiens ton personnage par le visage uniquement, et le visage est la chose la plus fragile d'une génération à l'autre. Bibendum passe ce test depuis 1898.",
    },
    {
      type: "h2",
      id: "protection",
      text: "Protéger ta mascotte : la marque oui, le droit d'auteur peut-être pas",
    },
    {
      type: "p",
      text: "Une mascotte finit sur des produits, dans des campagnes, parfois dans le prix de rachat d'une boîte. Le droit d'auteur et le dépôt de marque la protègent chacun à leur manière, et l'IA a changé les règles du premier sans toucher au second.",
    },
    {
      type: "image",
      src: "/images/articles/mascotte-marque-ia-copyright-office.webp",
      alt: "Page NewsNet du site copyright.gov annonçant la publication de la partie 2 du rapport sur l'intelligence artificielle, datée du 29 janvier 2025, avec le paragraphe indiquant que les productions d'IA générative ne sont protégeables que lorsqu'un auteur humain a déterminé des éléments expressifs suffisants, et non par la simple fourniture de prompts",
      caption:
        "Le Copyright Office américain sur la protection des images générées : le prompt seul ne suffit pas. Source : copyright.gov, capture du 21/09/2026.",
    },
    {
      type: "p",
      text: "Côté droit d'auteur, la référence la plus claire à ce jour vient des États-Unis. Le [rapport du Copyright Office du 29 janvier 2025](https://www.copyright.gov/newsnet/2025/1060.html) conclut que les productions d'une IA générative ne sont protégeables que lorsqu'un auteur humain a déterminé des éléments expressifs suffisants. Cela couvre les cas où une œuvre humaine est perceptible dans la sortie, ou quand un humain arrange ou modifie cette sortie de façon créative. La simple fourniture de prompts, non. Le rapport ajoute que l'utilisation de l'IA comme assistant, ou l'inclusion d'éléments générés dans une œuvre humaine plus large, n'empêche pas la protection de l'ensemble.",
    },
    {
      type: "p",
      text: "Traduit pour ta mascotte : le renard sorti tel quel d'un prompt n'a probablement pas de droit d'auteur aux États-Unis, et n'importe qui pourrait en théorie le reprendre. Le renard que tu as redessiné, vectorisé à la main, dont tu as réagencé la palette et corrigé les proportions, porte ta contribution, et cette contribution est protégeable. C'est l'avantage juridique de l'étape 5 : les tracés vectoriels faits à la main sont un apport humain, daté et prouvable. En France, le débat n'est pas tranché de la même façon ; en attendant, garde les fichiers de travail, les versions intermédiaires et les dates. Ce dossier est ta preuve d'apport humain.",
    },
    {
      type: "image",
      src: "/images/articles/mascotte-marque-ia-inpi-cout.webp",
      alt: "Extrait de la page INPI Le déposant et le coût d'une marque : dépôt électronique 190 € pour une classe de produits et/ou services, classe supplémentaire 40 € par classe additionnelle, exemple de tarification pour six classes avec un total de 390 €, paiement au moment du dépôt par carte bancaire",
      caption:
        "Le coût d'un dépôt de marque en France : 190 € pour une classe, 40 € par classe en plus. Source : inpi.fr, capture du 21/09/2026.",
    },
    {
      type: "p",
      text: "La marque, elle, ne demande pas qui a tenu le crayon. L'INPI accepte les [marques figuratives](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/differents-types-de-marque), c'est-à-dire un dessin ou un logo, seul ou combiné à un nom. D'après [la page officielle sur le coût d'une marque](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposant-et-cout-dune-marque), le dépôt électronique coûte 190 € pour une classe de produits ou services et 40 € par classe supplémentaire, payables au moment du dépôt, pour une protection de dix ans renouvelable. Pour une torréfaction, la classe 30 (café) et la classe 43 (services de restauration) forment un début raisonnable ; vérifie la classification de Nice avant de payer.",
    },
    {
      type: "p",
      text: "Deux réflexes avant le dépôt. D'abord, une recherche d'antériorité dans la base DATA INPI : si un renard roux en tablier existe déjà dans ta classe, tu perds ton argent et ton personnage. Ensuite, dépose la version stabilisée, celle qui sort de l'étape 6, pas le premier jet. Une marque figurative protège le dessin tel qu'il est déposé ; si tu le refonds trois mois plus tard, tu repasses à la caisse et tu refais la recherche d'antériorité. Attendre quelques semaines coûte moins cher.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Où les mascottes IA se cassent la figure",
    },
    {
      type: "h3",
      text: "Le personnage trop détaillé",
    },
    {
      type: "p",
      text: "Symptôme : ta mascotte a une écharpe rayée, des lunettes, un badge, un motif sur le tablier, et à chaque génération l'un des quatre disparaît ou change. Les détails sont exactement ce que les modèles reproduisent le moins bien, la doc de Midjourney le dit elle-même à propos des taches de rousseur et des logos sur les vêtements. Fix concret : un accessoire signature, trois traits fixes, une palette de trois couleurs. Le reste se gagne en silhouette. Si un détail doit exister, il doit être assez gros pour survivre à un favicon.",
    },
    {
      type: "h3",
      text: "Le style photoréaliste pour une mascotte",
    },
    {
      type: "p",
      text: "Symptôme : ton renard est magnifique, avec des poils qu'on voudrait toucher, et il est impossible à imprimer sur un tampon, à animer dans une story ou à poser à côté de ton logo à plat. Fix concret : une mascotte vit en aplats et en formes simples, comme Duo et ses quatre composantes. Génère la référence en style illustration vectorielle dès le départ, et garde la version texturée pour une campagne ponctuelle, produite à partir de la référence, jamais l'inverse.",
    },
    {
      type: "h3",
      text: "Confondre mascotte et logo",
    },
    {
      type: "p",
      text: "Symptôme : la mascotte remplace le logo partout, y compris là où il faut du texte lisible et une marque déposable en un coup d'œil. Fix concret : garde les deux, avec des règles de placement écrites dans la bible (la mascotte ne touche jamais le logo, elle n'apparaît pas sous 24 pixels, le logo reste seul sur les documents officiels). [Le guide du logo IA](/blog/creer-logo-ia-methode-outils) traite la partie logo, qui doit rester lisible sans le renard.",
    },
    {
      type: "h3",
      text: "Déposer le premier jet, ou ne rien déposer",
    },
    {
      type: "p",
      text: "Symptôme : la mascotte est sur les sacs depuis six mois, un concurrent sort un personnage très proche, et tu n'as ni dépôt de marque ni dossier de création. Fix concret : dossier de travail daté dès le premier jour (prompts, versions, retouches manuelles, fichiers vectoriels), recherche d'antériorité, puis dépôt de la version stabilisée dans les classes où tu vends. 190 € pour dix ans, c'est le poste le moins cher de tout le projet.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Peut-on créer une mascotte de marque avec l'IA ?",
    },
    {
      type: "p",
      text: "Oui, et c'est même l'un des usages où l'IA fait gagner le plus de temps : les premières explorations de silhouettes se font en une soirée au lieu d'une semaine. Le travail réel commence après, quand il faut tenir le même personnage sur des dizaines de visuels, dans plusieurs poses et plusieurs formats. C'est là qu'une bible de mascotte, des outils de référence d'image et un export vectoriel deviennent obligatoires.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quel outil IA utiliser pour garder une mascotte cohérente ?",
    },
    {
      type: "p",
      text: "Chez Midjourney, l'Edit Model (versions 8.1 et 8.2) accepte jusqu'à quatre images de référence, remplace les anciens Omni Reference et Character Reference, et répond à des instructions comme « let's see this image from the front » pour produire des vues du personnage. Nano Banana côté Google fait le même travail d'édition guidée à partir d'une image. Recraft, avec ses modèles Vector, sort directement des fichiers SVG, ce qui compte dès que la mascotte doit être imprimée ou animée.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Une mascotte générée par IA est-elle protégée par le droit d'auteur ?",
    },
    {
      type: "p",
      text: "Pas automatiquement. Le rapport du Copyright Office américain du 29 janvier 2025 conclut que les productions d'une IA générative ne sont protégeables que lorsqu'un auteur humain a déterminé des éléments expressifs suffisants, et que la seule fourniture de prompts ne suffit pas. Une mascotte retravaillée par un humain (redessinée, réagencée, modifiée) peut retrouver une protection sur ces apports. En France, la question reste discutée ; le réflexe sûr consiste à documenter le travail humain et à ne pas s'appuyer uniquement sur le droit d'auteur.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Comment protéger une mascotte de marque en France ?",
    },
    {
      type: "p",
      text: "Par le dépôt de marque à l'INPI, qui ne dépend pas de la façon dont le dessin a été produit. Une marque peut être figurative (un dessin, un logo) ou combiner dessin et nom. Le dépôt électronique coûte 190 € pour une classe de produits ou services et 40 € par classe supplémentaire, d'après la page officielle de l'INPI lue le 21 septembre 2026, pour une protection de dix ans renouvelable. Choisis les classes qui correspondent à ce que tu vends réellement.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Que doit contenir une bible de mascotte ?",
    },
    {
      type: "p",
      text: "Le minimum tient sur deux pages : une fiche d'identité (espèce ou nature, palette avec codes couleur, trois traits fixes, un accessoire signature), une planche de poses (face, trois quarts, profil, dos), une planche d'expressions (au moins quatre), une liste de ce qui ne change jamais et une liste de ce qu'on a le droit de faire varier. Duolingo a fixé dès 2013 que la couleur et l'espèce de Duo ne bougeraient jamais : c'est exactement ce genre de règle qu'il faut écrire.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Combien de temps faut-il pour créer une mascotte avec l'IA ?",
    },
    {
      type: "p",
      text: "Compte une journée pour l'exploration et le choix de la silhouette, une journée pour la bible (poses, expressions, palette) et une demi-journée pour l'export vectoriel et les premières déclinaisons. Le poste qui déborde, dans mon expérience, c'est toujours la cohérence entre les vues, quand une oreille change de forme d'une image à l'autre. Garde une demi-journée de plus pour refaire.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Recrute ton personnage",
    },
    {
      type: "p",
      text: "Une mascotte réussie, c'est deux pages de règles, une image de référence qu'on ne touche plus, une planche de vues qui passe le test du dos, un fichier SVG et un récépissé de l'INPI. L'IA fournit la matière à chaque étape ; le choix et la preuve d'apport humain restent de ton côté. Les sources de cet article : [Bibendum sur Wikipédia](https://fr.wikipedia.org/wiki/Bibendum), [Reshaping Duo](https://blog.duolingo.com/reshaping-duo/) et [Building character](https://blog.duolingo.com/building-character/) sur le blog de Duolingo, [l'Edit Model de Midjourney](https://docs.midjourney.com/hc/en-us/articles/48495453462797-Edit-Model), [le rapport du Copyright Office](https://www.copyright.gov/newsnet/2025/1060.html) et [les pages de l'INPI](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposant-et-cout-dune-marque).",
    },
    {
      type: "p",
      text: "Note de fondateur : dans la formation IA gratuite d'AI Studios, on travaille le personnage cohérent sur des films, des pubs et des univers de marque, avec la même logique de fiche d'identité que tu viens de lire. Si tu dois créer une mascotte cette semaine, commence par le job et la silhouette noire. Le renard viendra après, et il restera le même.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-21 -->
