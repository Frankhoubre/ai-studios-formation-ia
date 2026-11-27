import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-07";
const IMG = "/images/articles/physicl-10-millions-monde-3d-robots";
const PHYSICL = "https://www.physicl.ai/insights/physicl-seed-studio";
const PHYSICL_HOME = "https://physicl.ai/";
const TC = "https://techcrunch.com/2026/11/06/physicl-raises-10m-to-make-the-digital-world-real-enough-for-robots/";

export const physicl10MillionsMonde3dRobots: Article = {
  title: "Physicl lève 10 M$ : la 3D produit sert aux robots",
  slug: "physicl-10-millions-monde-3d-robots",
  description:
    "Physicl, la start-up franco-américaine d'Alex de Vigan (ex-nfinite), lève 10 M$ et lance Studio : des scènes 3D pour entraîner robots et modèles de monde.",
  excerpt:
    "L'équipe qui fabriquait des rendus 3D de produits pour les e-commerçants recycle son savoir-faire pour entraîner des robots. Ce qu'annonce Physicl, ce que fait Studio, et pourquoi ça concerne aussi les créateurs 3D et vidéo IA.",
  category: "actualites-ia",
  tags: ["Actualités IA", "physicl", "3d", "données synthétiques", "robotique", "modèles de monde"],
  date: "2026-11-07",
  updatedAt: "2026-11-07",
  news: true,
  publishedTime: "10:05",
  readingTime: 6,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/physicl-10-millions-monde-3d-robots.webp",
  imageAlt:
    "Dans un loft parisien lumineux, une artiste 3D aux cheveux noirs courts et lunettes rondes regarde une scène de cuisine 3D sans textures sur son écran, pendant qu'un petit bras robotique blanc posé sur le bureau tient une tasse en céramique",
  keywords: ["physicl", "physicl studio", "données synthétiques robots", "alex de vigan", "monde 3d ia", "nfinite"],
  relatedSlugs: ["generer-modeles-3d-ia", "photos-produit-ia-shooting", "mockups-produit-ia"],
  faq: [
    {
      question: "Qu'est-ce que Physicl ?",
      answer:
        "Physicl est une start-up fondée par Alex de Vigan, installée à Paris et dans la baie de San Francisco. Elle fabrique des scènes 3D physiquement réalistes pour entraîner les robots, les modèles de vision et les modèles de monde. Le 6 novembre 2026, elle a annoncé une levée de 10 millions de dollars et le lancement de sa première application, Studio.",
    },
    {
      question: "Qui a financé Physicl ?",
      answer:
        "Le tour d'amorçage de 10 millions de dollars est mené par Inovia Capital, avec US Venture Partners, d'après l'annonce publiée par Physicl le 6 novembre 2026. TechCrunch, qui a couvert la levée le même jour, cite aussi Inovia Capital comme investisseur principal.",
    },
    {
      question: "Quel rapport entre Physicl et nfinite ?",
      answer:
        "Alex de Vigan a dirigé nfinite pendant une dizaine d'années. nfinite permettait aux marques et aux distributeurs de créer des modèles 3D de leurs produits pour les afficher en ligne. Selon TechCrunch, l'IA générative a bousculé ce marché, et l'équipe a réutilisé sa chaîne de fabrication 3D pour produire des données d'entraînement destinées aux robots.",
    },
    {
      question: "Que fait Physicl Studio ?",
      answer:
        "Studio permet de recréer une situation qu'un modèle rate, par exemple une tasse à moitié cachée sur un plan de travail encombré, puis d'en générer des milliers de variantes : lumière, désordre, caméra, objets. Chaque image sort avec sa profondeur, ses normales, sa segmentation et la position de la caméra. Studio part de plus de 10 000 environnements et 100 000 objets.",
    },
    {
      question: "Physicl Studio est-il gratuit ?",
      answer:
        "Physicl indique que Studio est gratuit pendant la bêta, ouverte par vagues aux équipes de recherche : laboratoires, universités et entreprises qui construisent des modèles de vision, de monde ou de robotique. Il faut demander un accès sur le site. Aucun tarif n'est publié pour la suite.",
    },
    {
      question: "Est-ce que ça concerne les créateurs vidéo et 3D ?",
      answer:
        "Pas directement : Studio vise les équipes qui entraînent des modèles, pas les créateurs. Mais les modèles de monde qui génèrent des espaces 3D à partir d'une image, comme ceux de SpAItial, client de Physicl, s'entraînent sur ce genre de données. Leur qualité dépendra de scènes 3D propres, et le métier de l'artiste 3D y trouve une nouvelle utilité.",
    },
  ],
  content: [
    {
      type: "p",
      text: "La start-up **Physicl** a annoncé le 6 novembre 2026 une levée de **10 millions de dollars** menée par Inovia Capital, avec US Venture Partners, et le lancement de sa première application, **Studio**. Son fondateur, le Français **Alex de Vigan**, a passé dix ans à fabriquer des rendus 3D de produits pour l'e-commerce avec nfinite. Il recycle aujourd'hui ce savoir-faire pour une autre clientèle : les robots.",
    },
    {
      type: "p",
      text: "Pour toi qui fais de l'image ou de la vidéo IA, l'histoire vaut le détour pour une raison simple. Le métier qui consistait à modéliser un canapé et sa lumière pour un catalogue en ligne sert maintenant à apprendre à une machine ce qu'est une cuisine. Et les modèles qui génèrent des mondes 3D dépendent de ce travail.",
    },
    {
      type: "screenshot",
      src: `${IMG}-annonce.webp`,
      alt: "En-tête du billet de Physicl daté du 6 novembre 2026, signé Alex de Vigan, titré Physical AI fails in the long tail. We're building every edge case, avec le chapô sur la levée de 10 millions de dollars menée par Inovia Capital",
      caption: "Le billet d'annonce publié sur le site de Physicl le 6 novembre 2026. Capture du 7 novembre 2026.",
      source: PHYSICL,
      capturedAt: CAPTURE,
      width: 1280,
      height: 320,
    },
    { type: "h2", id: "annonce", text: "Ce que Physicl a annoncé" },
    {
      type: "p",
      text: "Tout vient du [billet de Physicl](" + PHYSICL + "), signé Alex de Vigan, et de l'article de [TechCrunch](" + TC + ") écrit par Tim Fernholz le même jour. Les points clés :",
    },
    {
      type: "ul",
      items: [
        "**La levée** : 10 millions de dollars d'amorçage, menés par Inovia Capital, avec US Venture Partners. L'argent finance l'équipe à Paris et dans la baie de San Francisco.",
        "**Le produit** : Studio, une application qui part de plus de **10 000 environnements** et **100 000 objets** en 3D pour générer des images d'entraînement.",
        "**Le problème visé** : les cas rares. Un robot qui réussit neuf fois sur dix fait une belle démo, écrit de Vigan, mais personne ne le déploie s'il échoue la dixième.",
        "**L'accès** : bêta gratuite, ouverte par vagues aux équipes de recherche, sur demande.",
        "**Les conseillers** : Thomas Wolf (Hugging Face), Christoph Lassner (World Labs), Matthias Niessner (TUM), Yaser Sheikh et Sébastien Deguy.",
      ],
    },
    { type: "h2", id: "studio", text: "Studio : une scène, des milliers de versions" },
    {
      type: "p",
      text: "L'exemple que donne TechCrunch parle à n'importe quel graphiste : un robot n'arrive pas à repérer une tasse sur un plan de travail encombré, ou quand elle est dans l'ombre. Avec Studio, on recrée cette scène, puis on en change **une seule chose à la fois** : la lumière, le désordre, l'angle de caméra, les objets. On obtient des milliers de variantes comparables entre elles.",
    },
    {
      type: "screenshot",
      src: `${IMG}-studio.webp`,
      alt: "Section Introducing Physicl Studio, The end of the fixed dataset, du site de Physicl, avec les chiffres 10k+ scènes de départ et 100k+ objets à placer",
      caption: "La présentation de Studio sur la page d'accueil de Physicl. Capture du 7 novembre 2026.",
      source: PHYSICL_HOME,
      capturedAt: CAPTURE,
      width: 580,
      height: 520,
    },
    {
      type: "p",
      text: "La différence avec une image générée par IA, c'est l'exactitude. Comme la scène existe en 3D avant l'image, chaque pixel sort avec sa vraie **profondeur**, ses **normales**, sa **segmentation** et la **position de la caméra**. Rien n'est deviné après coup. Sur [son site](" + PHYSICL_HOME + "), Physicl montre un entrepôt rejoué 480 fois, avec les palettes déplacées et la lumière qui passe du midi à la nuit.",
    },
    {
      type: "p",
      text: "Le premier client cité est **SpAItial**, qui fabrique des modèles de monde capables de transformer de vraies pièces en espaces 3D explorables. Son dernier modèle, Echo-3, est sorti la semaine dernière selon TechCrunch. Physicl affirme que SpAItial a divisé par plus de deux son erreur de reconstruction sur de vraies pièces après avoir entraîné son modèle avec ses données. C'est un chiffre de Physicl, mesuré par l'équipe de Matthias Niessner, qui est à la fois PDG de SpAItial et conseiller de Physicl.",
    },
    {
      type: "screenshot",
      src: `${IMG}-techcrunch.webp`,
      alt: "Titre de l'article de TechCrunch du 6 novembre 2026, Physicl raises $10M to make the digital world real enough for robots, à côté d'une cuisine 3D montrée en rendu final, en profondeur et en normales",
      caption: "L'article de Tim Fernholz pour TechCrunch, publié le 6 novembre 2026. Capture du 7 novembre 2026.",
      source: TC,
      capturedAt: CAPTURE,
      width: 1280,
      height: 536,
    },
    { type: "h2", id: "createurs", text: "Pourquoi ça concerne les créateurs" },
    {
      type: "p",
      text: "Studio ne s'adresse pas à toi. C'est un outil pour les équipes qui entraînent des modèles. Mais il raconte trois choses utiles si tu travailles l'image et la vidéo IA.",
    },
    {
      type: "p",
      text: "D'abord, **la 3D produit a changé de valeur**. De Vigan le dit lui-même à TechCrunch : ce que nfinite faisait de mieux en 3D, l'IA allait le remplacer. Les [photos produit générées par IA](/blog/photos-produit-ia-shooting) ont pris le marché des packshots. Mais la scène 3D bien construite, avec ses vraies matières et sa vraie physique, trouve un nouveau débouché.",
    },
    {
      type: "p",
      text: "Ensuite, **les mondes 3D générés vont progresser**. Les modèles qui fabriquent un espace 3D à partir d'une image, comme ceux de SpAItial, ont besoin de données exactes pour apprendre. Plus ces données sont propres, plus les décors que tu généreras demain tiendront debout quand la caméra tourne. Si tu fais déjà de la [génération de modèles 3D par IA](/blog/generer-modeles-3d-ia), c'est la brique qui manque encore pour des scènes entières.",
    },
    {
      type: "p",
      text: "Enfin, **la méthode est bonne à voler**. Changer une seule variable à la fois, lumière, cadrage ou disposition, puis comparer, c'est exactement comme ça que je conseille de tester un prompt d'image. Physicl l'industrialise pour les robots. Toi, tu peux l'appliquer à tes [mockups produit](/blog/mockups-produit-ia) dès cette semaine.",
    },
    {
      type: "table",
      caption: "Physicl au 7 novembre 2026 : ce qui est annoncé, ce qui reste flou",
      headers: ["Point", "Ce que dit Physicl", "Encore flou"],
      rows: [
        ["Levée", "10 M$, menée par Inovia Capital, avec US Venture Partners", "Valorisation"],
        ["Studio", "10 000+ environnements, 100 000+ objets", "Formats d'export pour les outils créatifs"],
        ["Accès", "Bêta gratuite, par vagues, pour la recherche", "Prix après la bêta"],
        ["Résultats", "Erreur de reconstruction divisée par plus de deux chez SpAItial", "Test indépendant"],
        ["Équipe", "Paris et baie de San Francisco", "Effectif"],
      ],
      source: [
        { label: "Physicl, 06/11/2026", href: PHYSICL },
        { label: "TechCrunch, 06/11/2026", href: TC },
      ],
      verifieLe: CAPTURE,
    },
    { type: "h2", id: "avis", text: "Mon avis, avec ses limites" },
    {
      type: "p",
      text: "J'aime cette histoire parce qu'elle contredit l'idée que l'IA générative efface les métiers de l'image. Ici, une équipe de 3D dont le marché a fondu retrouve une place, justement parce que l'IA a besoin de ce qu'elle sait faire : des scènes justes. C'est une piste à garder en tête si tu viens de la 3D.",
    },
    {
      type: "p",
      text: "Mais je reste prudent. Je n'ai pas eu accès à Studio, et le seul résultat chiffré vient d'un client dont le PDG conseille la start-up. De Vigan reconnaît lui-même, dans TechCrunch, que le secteur est « très jeune et parfois très flou ». On saura ce que vaut Studio quand des équipes indépendantes publieront leurs propres résultats.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à construire des images IA cohérentes",
      text: "Ma formation IA gratuite te montre comment tester une variable à la fois, garder une scène cohérente d'un plan à l'autre et choisir le bon outil.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 7 novembre 2026 le billet de Physicl daté du 6 novembre, signé Alex de Vigan, la page d'accueil de physicl.ai et l'article de TechCrunch du 6 novembre signé Tim Fernholz. Les trois captures viennent de ces pages, prises le 7 novembre.",
        "Je n'ai pas eu accès à Physicl Studio. Le résultat obtenu avec SpAItial est celui que publie Physicl.",
      ],
      teste: ["La lecture de l'annonce officielle, du site de Physicl et d'un article de presse, captures du même jour"],
      nonTeste: [
        "L'utilisation de Physicl Studio",
        "La qualité des données générées",
        "Le résultat annoncé avec SpAItial",
      ],
      sources: [
        { label: "Physicl, Physical AI fails in the long tail, 06/11/2026", href: PHYSICL },
        { label: "Physicl, page d'accueil, consultée le 07/11/2026", href: PHYSICL_HOME },
        { label: "TechCrunch, Physicl raises $10M, 06/11/2026", href: TC },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-07 -->
