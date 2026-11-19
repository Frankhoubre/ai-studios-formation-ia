import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-19";
const IMG = "/images/articles/veille-ia-creative-methode";
const AA_VIDEO = "https://artificialanalysis.ai/video/leaderboard/text-to-video";
const RUNWAY_CHANGELOG = "https://runwayml.com/changelog";
const GOOGLE_ALERTES = "https://support.google.com/websearch/answer/4815696?hl=fr";
const INOREADER_PRIX = "https://www.inoreader.com/pricing";
const RUNDOWN = "https://www.therundown.ai/";
const ACTUS = "https://blog.ai-studios.fr/categories/actualites-ia";

const FAQ = [
  {
    question: "C'est quoi, faire sa veille IA ?",
    answer:
      "C'est suivre ce qui change dans les outils d'IA, à intervalle régulier, pour décider quoi tester et quoi laisser passer. Un créateur n'a que peu de choses à suivre : les mises à jour des outils qu'il utilise, les annonces des éditeurs de modèles, un classement indépendant et un média qui explique ce que ça change pour son travail.",
  },
  {
    question: "Combien de temps consacrer à sa veille IA chaque semaine ?",
    answer:
      "Trente minutes, le même jour, suffisent pour trois à cinq outils suivis. Dix minutes pour lire les journaux de mises à jour et le lecteur RSS, dix pour trier avec les trois questions, dix pour remplir le carnet. Le test du mois se cale à part, sur un autre créneau d'une heure.",
  },
  {
    question: "Quelles sources suivre pour l'actualité de l'IA créative ?",
    answer:
      "Dans l'ordre : le journal des mises à jour de chacun de tes outils, le blog officiel des éditeurs de modèles par flux RSS, un classement indépendant comme celui d'Artificial Analysis pour la vidéo, une alerte Google par outil réglée sur une fois par semaine, et un seul média qui trie pour ton métier.",
  },
  {
    question: "Faut-il payer un outil pour faire sa veille IA ?",
    answer:
      "Non. Google Alertes est gratuit, les journaux de mises à jour et les flux RSS aussi. Côté lecteur, Inoreader annonce une offre gratuite qui suit jusqu'à 150 flux (grille relevée le 19 novembre 2026), très au-dessus de ce qu'il faut pour cinq sources. L'offre Pro, à 6,67 € par mois en paiement annuel, sert surtout à suivre des sites sans flux et des newsletters.",
  },
  {
    question: "Comment savoir si un nouveau modèle vaut la peine d'être testé ?",
    answer:
      "Pose trois questions. Est-il disponible aujourd'hui, dans ton offre ? Touche-t-il un type de plan que tu fabriques ce mois-ci ? Peux-tu le vérifier en moins de vingt minutes sur ton plan de référence ? Trois oui : tu le testes. Un seul non : tu le notes dans le carnet et tu passes à la suite.",
  },
  {
    question: "Peut-on confier sa veille IA à ChatGPT ou à un autre assistant ?",
    answer:
      "Pour résumer, oui. Tu colles les entrées de la semaine ou leurs liens, et tu demandes un résumé en une ligne par entrée avec l'offre concernée. Pour décider, non : vérifie toujours la date et la page d'origine avant de retenir une information, parce qu'un assistant peut mélanger une annonce ancienne et une nouveauté.",
  },
];

export const veilleIaCreativeMethode: Article = {
  title: "Veille IA créative : la méthode en 30 minutes",
  slug: "veille-ia-creative-methode",
  description:
    "Veille IA sans y passer tes soirées : cinq sources à suivre, trois questions pour trier une annonce et un seul test par mois, en 30 minutes par semaine.",
  excerpt:
    "Huit modèles vidéo ajoutés en trente jours à un seul classement, dix mises à jour en un mois chez un seul éditeur : personne ne suit tout. Une méthode de veille IA qui tient en 30 minutes par semaine, avec cinq sources, trois questions de tri et un carnet d'une ligne par nouveauté.",
  category: "workflow-creatif",
  tags: ["veille IA", "actualité IA", "flux RSS", "Google Alertes", "méthode"],
  date: "2026-11-19",
  updatedAt: "2026-11-19",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/veille-ia-creative-methode.webp",
  imageAlt:
    "Sur le toit d'un parking de Toulouse à la tombée du jour, une réalisatrice assise sur un flight case relit une courte liste dans un carnet pendant qu'un batteur et une guitariste installent leur matériel pour un clip",
  keywords: [
    "veille ia",
    "suivre actualité ia",
    "veille ia créative",
    "sources actualité ia",
    "flux rss ia",
  ],
  relatedSlugs: ["apprendre-ia-creative-parcours", "glossaire-ia-creative-termes", "meilleurs-outils-ia-video"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu as vingt onglets ouverts sur des annonces que tu liras « plus tard », trois newsletters non lues, et la vague impression que tout le monde a déjà testé le modèle sorti mardi. Pendant ce temps, ton projet n'avance pas.",
    },
    {
      type: "p",
      text: "Je te donne ici une méthode de veille IA qui tient en 30 minutes par semaine : cinq sources, trois questions pour trier une annonce, un carnet d'une ligne par nouveauté et un seul test par mois. On la déroule sur un exemple, celui d'Inès, qui fabrique des clips pour des groupes de musique avec Runway.",
    },
    {
      type: "p",
      text: "Mon avis : la seule actualité qui compte pour toi, c'est celle qui touche les outils que tu utilises ce mois-ci. Ça représente très peu de lignes par semaine, et le reste peut attendre le jour où tu en auras besoin.",
    },
    { type: "h2", id: "core-concepts", text: "Pourquoi la veille IA te déborde" },
    {
      type: "p",
      text: "Si tu débutes, la veille peut attendre. Commence par [le parcours pour apprendre l'IA créative](/blog/apprendre-ia-creative-parcours) : tu trieras bien mieux les annonces quand tu auras fabriqué quelque chose de tes mains.",
    },
    { type: "h3", id: "huit-modeles-trente-jours", text: "Huit modèles vidéo ajoutés en trente jours" },
    {
      type: "p",
      text: "Le 19 novembre 2026, le [classement texte vers vidéo d'Artificial Analysis](" + AA_VIDEO + ") affichait cette mention en haut de page : huit modèles ajoutés au cours des trente derniers jours. Ce classement repose sur des votes humains entre deux vidéos montrées côte à côte, et il ne couvre que la vidéo. Ajoute l'image, la voix et la musique, et tu vois pourquoi personne ne suit tout.",
    },
    {
      type: "screenshot",
      src: `${IMG}-classement.webp`,
      alt: "Classement texte vers vidéo d'Artificial Analysis : mention « 8 models added in the last 30 days » en haut à droite, puis dix modèles classés par score Elo avec leur intervalle de rang, leur date de sortie et leur prix à la minute",
      caption: "Le classement texte vers vidéo d'Artificial Analysis : huit modèles ajoutés en trente jours, et des intervalles de rang qui se chevauchent.",
      source: AA_VIDEO,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Les éditeurs avancent au même rythme. Sur le [journal des mises à jour de Runway](" + RUNWAY_CHANGELOG + "), j'ai compté dix entrées datées d'octobre 2026 : une régie qui fabrique et publie des variantes de publicités, un outil pour construire ses propres applications, puis des modèles de son, de voix et d'image ajoutés les uns après les autres. Un seul outil, un seul mois.",
    },
    { type: "h3", id: "annonce-disponible-utilisable", text: "Annoncé, disponible, utilisable : trois dates différentes" },
    {
      type: "p",
      text: "Entre l'annonce d'une nouveauté et le jour où tu peux t'en servir, il y a souvent un écart. Dans le même classement, la colonne des prix indiquait « No API available » pour Utopai X et « Coming soon » pour Hyperflow H3. Les deux modèles figuraient dans les cinq premiers, et aucun n'affichait de prix ce jour-là.",
    },
    {
      type: "p",
      text: "Runway, lui, étiquette chaque entrée avec l'offre concernée : « All Plans », « Paid Plans », « Max+ Plans » ou « Enterprise ». La conversion d'images par seconde du 17 septembre porte l'étiquette Max+, par exemple. **Avant de lire ce que fait une nouveauté, lis à qui elle s'adresse** : la moitié du tri est déjà faite.",
    },
    {
      type: "screenshot",
      src: `${IMG}-runway-changelog.webp`,
      alt: "Journal des mises à jour de Runway : trois entrées datées des 27, 26 et 15 octobre 2026 (Runway Ads, App Studio, Mirelo SFX 2.0), chacune surmontée de l'offre concernée, All Plans ou Paid Plans",
      caption: "Le journal des mises à jour de Runway : chaque entrée est datée et porte l'offre à laquelle elle s'applique.",
      source: RUNWAY_CHANGELOG,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "practical-workflow", text: "La méthode de veille IA en 30 minutes par semaine" },
    {
      type: "p",
      text: "Cinq sources suffisent. Chacune répond à une question différente, et aucune n'a besoin d'être lue tous les jours.",
    },
    {
      type: "table",
      caption: "Les cinq sources d'une veille IA créative, et le piège de chacune",
      headers: ["Source", "La question à laquelle elle répond", "Rythme", "Le piège"],
      rows: [
        ["Journal des mises à jour de tes outils", "Qu'est-ce qui a changé dans ce que je paie déjà ?", "Chaque semaine", "Lire les entrées réservées à une offre que tu n'as pas"],
        ["Blog officiel des éditeurs, par flux RSS", "Quel modèle vient de sortir, à la source ?", "Chaque semaine", "Prendre un texte de lancement pour un test"],
        ["Classement indépendant", "Où se situe ce nouveau modèle face aux autres ?", "Une fois par mois", "Changer d'outil pour un écart dans la marge d'erreur"],
        ["Alerte Google par outil", "Qu'est-ce que j'aurais raté ailleurs ?", "Un e-mail par semaine", "Les doublons et les articles sans date"],
        ["Un média qui trie pour ton métier", "Qu'est-ce que ça change pour mon travail ?", "Chaque semaine", "En suivre cinq au lieu d'un"],
      ],
    },
    {
      type: "ol",
      items: [
        "Écris la liste des outils que tu utilises vraiment ce mois-ci. Trois à cinq noms, pas plus.",
        "Mets en favori le journal des mises à jour de chacun.",
        "Ajoute deux ou trois blogs officiels dans un lecteur RSS, rangés dans un seul dossier.",
        "Crée une alerte Google par outil, réglée sur une fois par semaine.",
        "Garde un seul média ou une seule newsletter, et désabonne-toi des autres.",
        "Bloque 30 minutes dans ton agenda, toujours le même jour.",
        "Pendant ce créneau, passe chaque nouveauté aux trois questions de tri et note celles qui restent, une ligne chacune.",
        "Une fois par mois, teste une seule de ces lignes sur ton plan de référence.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde un plan de référence, toujours le même (un prompt, une image de départ, dix secondes). Chaque nouveauté que tu testes, tu la testes sur ce plan-là. Au bout de six mois, tu as une série comparable et tu vois tout de suite si un modèle fait mieux que celui que tu paies.",
    },
    { type: "h3", id: "liste-outils", text: "Commence par la liste de tes outils" },
    {
      type: "p",
      text: "Inès travaille avec trois outils : Runway pour la vidéo, un générateur d'images pour ses images de départ, un logiciel de montage. Sa veille commence là, avec trois journaux de mises à jour à suivre.",
    },
    {
      type: "p",
      text: "Presque tous les éditeurs tiennent une page de ce genre, ce qu'on appelle un changelog ou des « release notes ». Elle est datée, écrite par ceux qui fabriquent l'outil, et elle liste ce qui a été livré. Si tu hésites encore sur ton outil principal, mon [comparatif des outils IA vidéo](/blog/meilleurs-outils-ia-video) t'aide à en choisir un avant de le suivre.",
    },
    { type: "h3", id: "lecteur-rss", text: "Un lecteur RSS pour les blogs officiels" },
    {
      type: "p",
      text: "Un [flux RSS](https://fr.wikipedia.org/wiki/RSS), si tu veux, c'est un abonnement sans e-mail : un site publie, ton lecteur récupère le titre et le lien, et tu lis quand tu l'as décidé. Le blog de Google en publie un (blog.google/rss), OpenAI aussi pour ses actualités (openai.com/news/rss.xml), et ce blog également (blog.ai-studios.fr/feed.xml).",
    },
    {
      type: "p",
      text: "Pour les lire, il te faut un lecteur. [Inoreader](" + INOREADER_PRIX + ") annonce une offre gratuite, « Free forever », qui suit jusqu'à 150 flux d'après sa grille relevée le 19 novembre 2026. L'offre Pro est affichée à 6,67 € par mois en paiement annuel, ou 8,99 € au mois, hors TVA. Pour cinq flux, le gratuit suffit très largement.",
    },
    {
      type: "screenshot",
      src: `${IMG}-inoreader.webp`,
      alt: "Page des tarifs d'Inoreader : offre Free « Free forever » sans carte bancaire, offre Pro à 6,67 € par mois en paiement annuel ou 8,99 € au mois, et offre Custom sur devis",
      caption: "Les tarifs d'Inoreader : l'offre gratuite couvre très largement une veille de cinq flux.",
      source: INOREADER_PRIX,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Coupe les notifications du lecteur et ne l'ouvre que pendant ton créneau. Si tu le consultes dix fois par jour, tu as juste ajouté un réseau social à ta journée.",
    },
    { type: "h3", id: "alertes-google", text: "Une alerte Google par outil, une fois par semaine" },
    {
      type: "p",
      text: "Google Alertes t'envoie un e-mail quand de nouveaux résultats apparaissent dans la recherche sur un sujet donné. La [page d'aide](" + GOOGLE_ALERTES + ") décrit la manipulation : tu ouvres Google Alertes, tu saisis ton sujet, tu cliques sur « Afficher les options », puis sur « Créer l'alerte ». Les options couvrent la fréquence, le type de sites, la langue, la région et le nombre de résultats.",
    },
    {
      type: "screenshot",
      src: `${IMG}-google-alertes.webp`,
      alt: "Page de l'Aide Recherche Google « Créer une alerte » : les quatre étapes de création et la liste des paramètres modifiables, fréquence des notifications, types de sites, langue, région, nombre de résultats, comptes destinataires",
      caption: "L'aide de Google sur les alertes : la fréquence des notifications se règle dans les options, avant de créer l'alerte.",
      source: GOOGLE_ALERTES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Dans la fréquence, choisis « Une fois par semaine maximum » : tu reçois un seul e-mail au lieu d'un goutte-à-goutte. Et précise ta requête. « Runway » tout seul, c'est aussi une piste d'aéroport et un podium de défilé en anglais, donc Inès a saisi le nom de l'outil suivi de « AI ». Soit dit en passant, Google Alertes laisse passer des choses et remonte des doublons. Prends-le comme un filet de sécurité derrière tes journaux de mises à jour.",
    },
    { type: "h3", id: "trois-questions", text: "Trois questions pour trier une annonce" },
    {
      type: "p",
      text: "Inès pose les mêmes questions à chaque nouveauté, dans cet ordre. **Est-ce disponible aujourd'hui, dans mon offre ?** Puis : **est-ce que ça touche un type de plan que je fabrique ce mois-ci ?** Et enfin : **est-ce que je peux le vérifier en moins de vingt minutes ?**",
    },
    {
      type: "p",
      text: "Trois oui, la nouveauté devient candidate au test du mois. Un non à la première question, tu la notes avec sa date et tu y reviendras. Un non à la deuxième, tu l'ignores sans regret. Dans le carnet d'Inès, rempli avec de vraies entrées relevées le 19 novembre, ça donne quatre lignes.",
    },
    {
      type: "table",
      caption: "Le carnet de veille d'Inès : une ligne par nouveauté, une décision par ligne",
      headers: ["Nouveauté (source, date)", "Offre concernée", "Décision", "Pourquoi"],
      rows: [
        ["Mode brouillon de Seedance 2.5 dans l'agent (journal Runway, 2 octobre)", "All Plans", "À tester", "Des brouillons en 480p pour itérer plus vite et moins cher avant le rendu final de ses clips"],
        ["Conversion d'images par seconde jusqu'à 4K (journal Runway, 17 septembre)", "Max+ Plans", "Notée", "Utile pour ses ralentis, mais réservée à une offre qu'elle n'a pas"],
        ["Runway Ads (journal Runway, 27 octobre)", "All Plans", "Ignorée", "Elle ne gère aucune campagne publicitaire"],
        ["Gemini Omni Flash 1.2, septième du classement vidéo (Artificial Analysis, novembre)", "Hors de son outil", "Notée", "À regarder le jour où son modèle actuel ne suffit plus"],
      ],
      source: [
        { label: "Journal des mises à jour de Runway", href: RUNWAY_CHANGELOG },
        { label: "Artificial Analysis, classement texte vers vidéo", href: AA_VIDEO },
      ],
      verifieLe: CAPTURE,
    },
    {
      type: "p",
      text: "Une seule est à tester. Le carnet tient dans une note de téléphone ou un tableur, peu importe. Et avant de lancer le test, regarde ce qu'il va te coûter en crédits avec [ma méthode pour chiffrer un rendu IA](/blog/budget-rendu-temps-cout-ia), sinon tu jettes tes crédits par les fenêtres pour une simple curiosité.",
    },
    { type: "h3", id: "un-seul-media", text: "Un seul média qui trie pour ton métier" },
    {
      type: "p",
      text: "Les newsletters généralistes sur l'IA sont bien faites, et elles ne s'adressent pas à toi. [The Rundown AI](" + RUNDOWN + "), par exemple, promet cinq minutes de lecture par jour. Sur une semaine, ça fait 35 minutes, plus que tout ton créneau. Et le jour où j'ai relevé sa page d'accueil, les éditions récentes parlaient d'un procès intenté à OpenAI et du Cybercab de Tesla. Rien qui change le clip d'Inès.",
    },
    {
      type: "p",
      text: "Choisis un média qui écrit pour ton métier et garde celui-là seul. C'est le rôle de [la rubrique Actualités IA de ce blog](/categories/actualites-ia) : une annonce vidéo ou image à la fois, ce qu'elle change pour un créateur et comment la tester, avec les sources. Elle comptait 15 articles le 19 novembre 2026. Et quand un mot d'annonce t'échappe, [le glossaire de l'IA créative](/blog/glossaire-ia-creative-termes) le traduit en français courant.",
    },
    {
      type: "screenshot",
      src: `${IMG}-actualites.webp`,
      alt: "Rubrique Actualités IA du blog AI Studios : titre, mention 15 actualités, texte de présentation sur les annonces IA vidéo et image vérifiées et expliquées pour les créateurs, filtres par catégorie et premiers articles",
      caption: "La rubrique Actualités IA du blog : une annonce à la fois, expliquée pour ceux qui fabriquent des images et des vidéos.",
      source: ACTUS,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui transforment la veille en deuxième métier" },
    { type: "h3", id: "erreur-reseaux", text: "Faire sa veille dans le fil des réseaux sociaux" },
    {
      type: "p",
      text: "Symptôme : tu connais le nom de tous les modèles sortis ce mois-ci et tu n'en as ouvert aucun. Le fil te montre ce qui fait réagir, sans date lisible ni mention de l'offre concernée, et il te le remontre trois jours plus tard sous un autre compte. Fix concret : la veille se fait sur des pages datées, pendant ton créneau. Les réseaux servent à voir le travail des autres, à un autre moment.",
    },
    { type: "h3", id: "erreur-classement", text: "Changer d'outil à chaque nouveau numéro un" },
    {
      type: "p",
      text: "Symptôme : tu résilies un abonnement parce qu'un modèle vient de prendre la tête. Regarde la colonne « Range » du classement d'Artificial Analysis : le 19 novembre, les modèles classés cinquième, sixième et septième partageaient le même intervalle, de la troisième à la neuvième place. À ce niveau, l'ordre exact ne veut plus dire grand-chose. Fix concret : un classement te donne des candidats, et tu décides sur ton plan de référence, refait avec les deux modèles.",
    },
    { type: "h3", id: "erreur-tout-tester", text: "Tester tout ce qui sort" },
    {
      type: "p",
      text: "Symptôme : quatre essais gratuits ouverts, des crédits entamés partout, et le clip du client toujours au même point. Chaque test te coûte une soirée et te laisse une interface de plus à retenir. Fix concret : un test par mois, choisi dans le carnet, sur le même plan. Les autres lignes attendent, et la plupart ne seront jamais testées, ce qui est très bien.",
    },
    { type: "h3", id: "erreur-annonce", text: "Prendre une annonce pour une sortie" },
    {
      type: "p",
      text: "Symptôme : tu réorganises ta semaine autour d'un modèle que tu ne peux pas encore utiliser. Fix concret : cherche trois choses avant d'aller plus loin, la date de l'entrée, l'offre concernée et un prix. S'il en manque une, la ligne va dans le carnet avec la mention « à revoir », et ton planning ne bouge pas.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprendre les bases avant de courir après les nouveautés",
      text: "Dans ma formation IA gratuite, je montre comment fabriquer des images et des vidéos propres avec les outils du moment, étape par étape, même si tu débutes.",
    },
    {
      type: "p",
      text: "Ce soir, écris la liste de tes outils, ouvre le journal des mises à jour du premier et note les deux dernières entrées qui concernent ton offre. Ensuite, bloque 30 minutes dans ton agenda de la semaine prochaine. Tout le reste de la méthode peut attendre ce créneau.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relevé le 19 novembre 2026 le classement texte vers vidéo d'Artificial Analysis, le journal des mises à jour de Runway, la page d'aide de Google sur les alertes, la grille tarifaire d'Inoreader, la page d'accueil de The Rundown AI et la rubrique Actualités IA de ce blog. Cinq de ces pages ont été capturées le même jour.",
        "Inès est un cas d'illustration construit pour l'article. Les lignes de son carnet reprennent de vraies entrées du journal de Runway et du classement, les décisions sont les miennes.",
      ],
      teste: [
        "Le comptage des entrées d'octobre 2026 dans le journal des mises à jour de Runway",
        "La lecture des options de fréquence sur la page Google Alertes",
        "La présence des flux RSS de blog.google, d'openai.com/news et de ce blog",
      ],
      nonTeste: [
        "Les nouveautés citées dans le carnet (mode brouillon de Seedance 2.5, conversion d'images par seconde, Runway Ads, Gemini Omni Flash 1.2)",
        "L'offre Pro d'Inoreader",
      ],
      sources: [
        { label: "Artificial Analysis, classement texte vers vidéo", href: AA_VIDEO },
        { label: "Runway, journal des mises à jour", href: RUNWAY_CHANGELOG },
        { label: "Aide Recherche Google, créer une alerte", href: GOOGLE_ALERTES },
        { label: "Inoreader, tarifs", href: INOREADER_PRIX },
        { label: "The Rundown AI", href: RUNDOWN },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-19 -->
