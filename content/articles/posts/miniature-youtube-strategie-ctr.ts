import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-13";
const IMG = "/images/articles/miniature-youtube-strategie-ctr";
const YT_CTR_FAQ = "https://support.google.com/youtube/answer/7628154?hl=fr";
const YT_IMPRESSIONS = "https://support.google.com/youtube/answer/7577430?hl=fr";
const YT_AB = "https://support.google.com/youtube/answer/16391400?hl=fr";
const YT_MINIATURES = "https://support.google.com/youtube/answer/72431?hl=fr";
const WIKI_AB = "https://fr.wikipedia.org/wiki/Test_A/B";

const FAQ = [
  {
    question: "C'est quoi un bon CTR pour une miniature YouTube ?",
    answer:
      "YouTube indique que pour la moitié des chaînes et des vidéos, le taux de clics par impression se situe entre 2 % et 10 %. Il n'existe pas de bon chiffre universel : le CTR dépend de la source de trafic, de l'âge de la vidéo et du nombre d'impressions. Compare toujours une vidéo à tes propres vidéos du même type, jamais à la chaîne d'un autre.",
  },
  {
    question: "Pourquoi mon CTR baisse alors que mes vues augmentent ?",
    answer:
      "Parce que YouTube montre ta miniature à des gens qui te connaissent moins. Au début, ce sont surtout tes abonnés et ton audience fidèle qui la voient, et ils cliquent plus. Quand la vidéo part sur l'accueil ou dans les suggestions, les impressions explosent et le taux baisse mécaniquement. L'aide YouTube le présente comme un phénomène naturel.",
  },
  {
    question: "Comment faire un test A/B de miniature sur YouTube ?",
    answer:
      "Dans YouTube Studio sur ordinateur, ouvre la vidéo et utilise la fonction de test A/B des titres et miniatures. Tu peux importer jusqu'à trois variantes. Il faut avoir activé les fonctionnalités avancées de la chaîne, et la fonction ne marche ni sur les Shorts, ni sur les vidéos privées, ni sur celles conçues pour les enfants ou réservées à un public averti.",
  },
  {
    question: "Le test A/B de YouTube choisit-il la miniature qui a le meilleur CTR ?",
    answer:
      "Non. YouTube optimise ses tests sur la durée de visionnage globale, pas sur le taux de clics. La variante gagnante est celle qui récolte la plus grande part de durée de visionnage. Une miniature qui fait cliquer beaucoup mais déçoit à l'ouverture peut donc perdre le test.",
  },
  {
    question: "Combien de temps dure un test de miniature YouTube ?",
    answer:
      "L'aide YouTube indique qu'un test devrait se terminer dans un délai de deux semaines, entre quelques jours et deux semaines selon le trafic. Si tu modifies le titre ou la miniature pendant le test, il s'arrête automatiquement. Le résultat peut être une variante gagnante, des performances similaires ou un test non concluant.",
  },
  {
    question: "Quelle taille pour une miniature YouTube créée avec l'IA ?",
    answer:
      "L'aide YouTube recommande de préférence 3840 x 2160 pixels en 16:9 pour une vidéo, avec une largeur minimale de 640 pixels, en JPG ou PNG, jusqu'à 50 Mo depuis un ordinateur. Pour un test A/B, importe au moins du 1280 x 720 : en dessous, toutes les miniatures du test sont redimensionnées en 854 x 480.",
  },
];

export const miniatureYoutubeStrategieCtr: Article = {
  title: "Miniature YouTube IA : tester tes variantes pour le CTR",
  slug: "miniature-youtube-strategie-ctr",
  description:
    "Miniature YouTube IA : lire ton CTR sans te tromper, produire 3 variantes et les tester dans YouTube Studio, qui juge à la durée de visionnage.",
  excerpt:
    "Tu changes ta miniature tous les deux jours en regardant le CTR monter et descendre ? YouTube a son propre outil de test, et il ne juge pas sur le CTR. La méthode pour produire trois variantes avec l'IA et lire le résultat correctement.",
  category: "ia-image",
  tags: ["miniature YouTube", "CTR", "test A/B", "YouTube Studio", "image IA"],
  date: "2026-11-13",
  updatedAt: "2026-11-13",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/miniature-youtube-strategie-ctr.webp",
  imageAlt:
    "Atelier de réparation de vélos dans une cour pavée : un mécanicien barbu en tablier accroche trois petites photos de la même roue à un panneau d'outils, une femme aux cheveux gris courts les compare de loin avec son téléphone",
  keywords: ["miniature youtube ia", "ctr miniature", "test a/b miniature youtube", "taux de clics youtube", "miniature youtube"],
  relatedSlugs: ["creer-video-youtube-ia", "chaine-youtube-automatisee-ia", "personnage-coherent-ia"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Ta vidéo est sortie mardi, le CTR affiche 3,1 % jeudi, et tu as déjà refait la miniature deux fois. Le chiffre bouge, tu ne sais pas pourquoi, et chaque nouvelle version te coûte une heure.",
    },
    {
      type: "p",
      text: "J'ai relu le 13 novembre 2026 les pages d'aide de YouTube sur les impressions, le taux de clics et le test A/B des titres et miniatures. Tu trouveras ici comment lire ton CTR sans paniquer, comment produire trois variantes avec un générateur d'images sans y passer la soirée, et comment laisser YouTube trancher.",
    },
    {
      type: "p",
      text: "Mon conseil : arrête de courir après le CTR. L'outil de test de YouTube désigne le gagnant à la durée de visionnage, et ça change la manière de concevoir une miniature.",
    },
    { type: "h2", id: "core-concepts", text: "Ce que ton CTR de miniature mesure vraiment" },
    {
      type: "p",
      text: "Le CTR, c'est le nombre de clics divisé par le nombre d'impressions. Toute la difficulté est dans le mot « impression ». Selon la [page d'aide YouTube sur les impressions](" + YT_IMPRESSIONS + "), une impression compte quand ta miniature reste affichée plus d'une seconde avec au moins 50 % de sa surface visible à l'écran.",
    },
    {
      type: "p",
      text: "Elle est comptée sur l'accueil, dans la recherche, les flux, les suggestions « À suivre » et les playlists. Elle ne l'est pas sur les sites externes, les écrans de fin, les fiches, les e-mails et les notifications. Une partie de tes vues ne passe donc jamais par le CTR.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ctr.webp`,
      alt: "Page d'aide YouTube « Questions fréquentes sur les impressions et le taux de clics » avec la liste des questions sur le CTR, les impressions et la monétisation",
      caption: "La FAQ officielle sur le CTR, capturée sur l'Aide YouTube le 13 novembre 2026.",
      source: YT_CTR_FAQ,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "fourchette-ctr", text: "La fourchette de 2 à 10 %, et pourquoi elle ne t'aide pas beaucoup" },
    {
      type: "p",
      text: "La [FAQ de YouTube sur le taux de clics](" + YT_CTR_FAQ + ") donne un seul repère chiffré : pour la moitié des chaînes et des vidéos, le CTR par impression se situe **entre 2 % et 10 %**. Elle précise que l'écart peut être encore plus grand pour une vidéo de moins d'une semaine ou une vidéo de moins de 100 vues.",
    },
    {
      type: "p",
      text: "Ton 3,1 % du jeudi ne veut donc rien dire tout seul. La seule comparaison qui tient, c'est ta vidéo contre tes autres vidéos du même format, à nombre d'impressions comparable.",
    },
    { type: "h3", id: "ctr-qui-baisse", text: "Quand les impressions montent, le CTR descend" },
    {
      type: "p",
      text: "Les premières heures, YouTube montre surtout ta miniature à des gens qui te suivent déjà. Ils cliquent beaucoup. Puis la vidéo part sur l'accueil ou dans les suggestions, devant des inconnus, et le taux chute. L'aide YouTube présente ça comme normal : une vidéo vue par une audience plus restreinte et plus fidèle affiche un CTR plus haut.",
    },
    {
      type: "p",
      text: "Beaucoup de créateurs voient le CTR baisser au moment précis où la vidéo décolle, et changent la miniature dans la foulée. **Une baisse de CTR avec des impressions qui grimpent est souvent une bonne nouvelle.**",
    },
    { type: "h2", id: "practical-workflow", text: "Tester tes miniatures avec l'outil A/B de YouTube Studio" },
    {
      type: "p",
      text: "YouTube propose depuis YouTube Studio un test A/B des titres et des miniatures. Tu importes jusqu'à trois variantes, YouTube les montre à des parts de ton audience, puis affiche celle qui gagne à tout le monde. Le principe est celui d'un [test A/B](" + WIKI_AB + ") classique.",
    },
    {
      type: "screenshot",
      src: `${IMG}-test-ab.webp`,
      alt: "Page d'aide YouTube « Effectuer des tests A/B pour les titres et les miniatures » indiquant qu'on peut tester jusqu'à trois titres et miniatures, avec le début des critères d'éligibilité",
      caption: "La page qui décrit le test A/B, capturée sur l'Aide YouTube le 13 novembre 2026 : jusqu'à trois variantes, gagnant à la durée de visionnage.",
      source: YT_AB,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La [page sur les tests A/B](" + YT_AB + ") le dit clairement : les tests sont optimisés **sur la durée de visionnage globale plutôt que sur le taux de clics**. La variante gagnante est celle qui récolte la plus grande part de durée de visionnage. Une miniature qui fait cliquer puis fuir au bout de dix secondes peut perdre contre une miniature plus sage.",
    },
    {
      type: "comparison",
      caption: "Les règles du test A/B de miniatures relevées sur l'Aide YouTube le 13 novembre 2026",
      headers: ["Point", "Ce que dit YouTube"],
      rows: [
        ["Nombre de variantes", "Jusqu'à trois titres et miniatures (titre seul, miniature seule, ou les deux)"],
        ["Critère du gagnant", "Part de durée de visionnage, pas le CTR"],
        ["Où", "YouTube Studio sur ordinateur uniquement"],
        ["Condition", "Fonctionnalités avancées activées sur la chaîne"],
        ["Exclus", "Shorts, diffusions en direct programmées, Premières en cours, vidéos privées, conçues pour les enfants ou réservées à un public averti"],
        ["Durée", "Fin attendue sous deux semaines"],
        ["Résultats possibles", "Gagnante, performances similaires (tu choisis), non concluant (la première variante importée reste)"],
        ["Piège", "Modifier le titre ou la miniature pendant le test l'arrête"],
      ],
      source: [{ label: "Aide YouTube, tests A/B des titres et miniatures", href: YT_AB }],
      verifieLe: CAPTURE,
      note: "Un petit groupe témoin voit uniquement la miniature par défaut et n'entre pas dans les résultats.",
    },
    { type: "h3", id: "journal-de-test", text: "Le journal de test : une ligne par hypothèse" },
    {
      type: "p",
      text: "Un test sans hypothèse t'apprend juste qu'une image a gagné. Avec une hypothèse écrite, tu apprends quelque chose que tu réutilises sur la vidéo suivante. Voici le tableau que je tiens, une ligne par test, avec des exemples d'hypothèses (ce sont des pistes à tester sur ta chaîne, pas des règles prouvées).",
    },
    {
      type: "table",
      caption: "Exemple de journal de test de miniatures, une seule variable changée par test",
      headers: ["Variable testée", "Hypothèse écrite avant le test", "Variante A", "Variante B", "Variante C"],
      rows: [
        ["Échelle du sujet", "Mon audience clique plus sur le résultat que sur la personne", "Visage en gros plan", "Objet fini en gros plan", "Visage et objet à mi-distance"],
        ["Texte", "Le titre suffit, le texte sur l'image est redondant", "Sans texte", "Trois mots", "Un chiffre seul"],
        ["Avant / après", "Montrer l'écart fait comprendre la promesse en une seconde", "Après seul", "Avant et après côte à côte", "Avant seul, flouté à droite"],
        ["Fond", "Un fond simple rend le sujet lisible en petit", "Décor réel", "Fond uni contrasté", "Décor flouté"],
      ],
    },
    {
      type: "ol",
      items: [
        "Choisis une vidéo qui a déjà du trafic. YouTube conseille de commencer par des vidéos plus anciennes, pour limiter l'effet d'un test sur les vues de la chaîne. Une vidéo à quelques dizaines d'impressions par jour ne donnera jamais de résultat.",
        "Écris ton hypothèse en une phrase dans le journal, avant de générer la moindre image.",
        "Produis une base unique avec ton générateur d'images, puis dérive les trois variantes de cette base en ne changeant que la variable testée. Si tout change à la fois, tu ne sauras pas ce qui a gagné.",
        "Ajoute le texte à la main dans un logiciel de retouche plutôt que de le demander au modèle, sauf si tu maîtrises un outil fort en typographie.",
        "Exporte au moins en 1280 x 720. En dessous, YouTube redimensionne toutes les miniatures du test en 854 x 480.",
        "Lance le test et ne touche plus à rien pendant deux semaines au maximum : ni titre, ni miniature.",
        "Note le résultat dans le journal, y compris quand c'est « performances similaires » ou « non concluant ». Trois tests non concluants sur la même variable, c'est aussi une réponse : elle ne compte pas pour ton audience.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : avant d'importer tes trois variantes, réduis-les à la taille d'un timbre sur l'écran de ton téléphone et pose-le sur la table. Si tu ne comprends plus ce que montre une variante à un mètre, elle perdra, quelle que soit sa beauté en plein écran.",
    },
    {
      type: "p",
      text: "Pour le reste de la chaîne de production (script, voix, montage), tout est dans [mon pas-à-pas pour créer une vidéo YouTube avec l'IA](/blog/creer-video-youtube-ia). Et si tu débutes complètement sur la miniature, commence par [les bases de la miniature YouTube avec l'IA](/blog/creer-miniature-youtube-ia-debutant) avant de lancer des tests.",
    },
    { type: "h2", id: "variantes-ia", text: "Produire trois variantes avec l'IA sans perdre ton visage" },
    {
      type: "p",
      text: "Le générateur d'images fait très bien ce travail tant que le sujet reste identique d'une variante à l'autre. Si ton visage, ton produit ou ton personnage change entre A et B, le test mesure surtout la ressemblance.",
    },
    {
      type: "p",
      text: "Ma méthode : je pars d'une vraie photo extraite de la vidéo ou d'une image de référence, je génère une base, puis je demande uniquement des modifications à partir de cette base. Par exemple : « garde exactement la même personne et le même éclairage, recadre en gros plan sur la roue terminée » ; puis « même image, remplace le décor par un fond uni bleu nuit ». Les modèles d'édition d'image acceptent ce genre de consigne, mais vérifie à chaque fois les mains, les yeux et les objets à côté du sujet. J'ai détaillé les techniques pour garder un sujet stable dans [mon guide du personnage cohérent](/blog/personnage-coherent-ia).",
    },
    {
      type: "screenshot",
      src: `${IMG}-specs.webp`,
      alt: "Page d'aide YouTube « Ajouter des miniatures personnalisées sur YouTube » expliquant qu'il faut un compte validé pour importer sa propre miniature",
      caption: "La page sur les miniatures personnalisées, capturée sur l'Aide YouTube le 13 novembre 2026 : compte validé requis, puis formats et tailles plus bas.",
      source: YT_MINIATURES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Côté format, la [page des miniatures personnalisées](" + YT_MINIATURES + ") recommande de préférence **3840 x 2160 pixels en 16:9**, avec une largeur minimale de 640 pixels, en JPG ou PNG. Depuis un ordinateur, le fichier peut peser jusqu'à 50 Mo, contre 2 Mo depuis un téléphone. Il faut un compte validé pour importer ta propre image, et elle doit respecter le Règlement de la communauté, sous peine d'avertissement.",
    },
    {
      type: "p",
      text: "Pour le texte, je reste prudent avec les modèles d'image : un mot mal orthographié sur une miniature se voit tout de suite. Si tu veux quand même du texte généré, certains modèles sont meilleurs que d'autres en typographie, j'en parle à propos des [affiches de cinéma avec Ideogram](/blog/ideogram-typographie-affiche-cinema).",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui faussent tes tests de miniature" },
    { type: "h3", id: "erreur-changer-a-la-main", text: "Changer la miniature à la main tous les deux jours" },
    {
      type: "p",
      text: "Symptôme : tu compares le CTR de lundi (ancienne miniature) à celui de mercredi (nouvelle), et tu crois tenir un gagnant. Sauf que l'audience de mercredi n'est pas celle de lundi. La FAQ de YouTube déconseille d'ailleurs de tester plusieurs miniatures de cette façon, parce qu'on ne peut pas garantir que la même audience voit chaque version. Fix concret : passe par l'outil de test, qui répartit les variantes en même temps.",
    },
    { type: "h3", id: "erreur-juger-trop-tot", text: "Juger sur 48 heures et 80 vues" },
    {
      type: "p",
      text: "Symptôme : tu tires des conclusions d'une vidéo de deux jours, alors que YouTube prévient que le CTR varie fortement avant une semaine et sous 100 vues. Fix concret : attends un nombre important d'impressions, et ne réagis qu'à un changement net, pas à une oscillation d'un dixième de point.",
    },
    { type: "h3", id: "erreur-promesse-trompeuse", text: "Gonfler la promesse pour faire cliquer" },
    {
      type: "p",
      text: "Symptôme : CTR en hausse, durée moyenne de visionnage en chute, et la vidéo cesse d'être recommandée. YouTube l'écrit dans sa FAQ : les miniatures trompeuses donnent des vidéos regardées peu de temps, donc moins suggérées. Et comme le test A/B juge à la durée de visionnage, la miniature trompeuse perd aussi le test. Fix concret : montre dans la miniature une image qui apparaît vraiment dans la vidéo, idéalement dans la première minute.",
    },
    { type: "h3", id: "erreur-variantes-jumelles", text: "Tester trois variantes presque identiques" },
    {
      type: "p",
      text: "Symptôme : trois fois la même image avec une teinte de fond un peu différente, et un résultat « performances similaires ». YouTube conseille justement des variantes suffisamment différentes. Fix concret : change une seule variable et pousse l'écart (gros plan contre plan large, texte contre aucun texte), assez pour qu'on le voie sur une vignette de téléphone.",
    },
    {
      type: "p",
      text: "Si tu veux aller plus loin sur la fabrication d'une chaîne entière avec l'IA, du choix de niche à la cadence, j'en parle dans [mon article sur la chaîne YouTube automatisée](/blog/chaine-youtube-automatisee-ia). La miniature y est une étape parmi d'autres, mais c'est celle qu'on peut tester le plus vite.",
    },
    {
      type: "p",
      text: "Si tu veux apprendre à fabriquer tes images et tes vidéos avec l'IA, ma formation IA est gratuite.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 13 novembre 2026 les pages de l'Aide YouTube sur les impressions, le taux de clics, le test A/B des titres et miniatures et les miniatures personnalisées, et capturé trois d'entre elles le même jour.",
        "Je n'ai pas lancé de test A/B pour cet article. Les hypothèses du journal de test sont des exemples à vérifier sur ta propre chaîne, pas des résultats mesurés.",
      ],
      teste: [
        "La lecture des règles officielles du test A/B (variantes, critère, éligibilité, durée, résultats)",
        "La lecture de la définition d'une impression et de la fourchette de CTR donnée par YouTube",
        "La vérification des formats et tailles recommandés pour une miniature personnalisée",
      ],
      nonTeste: [
        "Un test A/B réel sur une chaîne",
        "L'effet d'une variable précise (texte, visage, fond) sur le CTR ou la durée de visionnage",
      ],
      sources: [
        { label: "Aide YouTube, impressions et durée de visionnage", href: YT_IMPRESSIONS },
        { label: "Aide YouTube, FAQ impressions et taux de clics", href: YT_CTR_FAQ },
        { label: "Aide YouTube, tests A/B des titres et miniatures", href: YT_AB },
        { label: "Aide YouTube, miniatures personnalisées", href: YT_MINIATURES },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-13 -->
