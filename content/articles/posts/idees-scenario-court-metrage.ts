import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-14";
const IMG = "/images/articles/idees-scenario-court-metrage";
const LOGLINE = "https://www.screenweaver.ai/fr/tools/logline-workshop";
const NIKON = "https://www.festivalnikon.fr/";
const PHOTOTREND = "https://phototrend.fr/2026/11/nikon-film-festival-2027-orelsan-president-jury/";

const FAQ = [
  {
    question: "Comment trouver une idée de scénario de court métrage ?",
    answer:
      "Pars d'une contrainte plutôt que d'une page blanche : un seul lieu, deux personnages, aucun dialogue ou 60 secondes. Puis cherche une situation où quelqu'un veut quelque chose de précis et n'a pas le temps de l'obtenir. Écris dix loglines en une soirée et garde celle qui te fait sourire ou te met mal à l'aise.",
  },
  {
    question: "Quelle idée de court métrage choisir quand on fait de la vidéo IA ?",
    answer:
      "Une idée qui tient avec peu de personnages, peu de décors et peu de texte à l'écran. Les visages qui changent d'un plan à l'autre, les mains, les panneaux écrits et la synchronisation labiale restent les points où une génération dérape le plus souvent. Une histoire sans dialogue dans un seul lieu te laisse beaucoup plus de marge.",
  },
  {
    question: "Est-ce qu'une idée de scénario de court métrage comique marche en IA ?",
    answer:
      "Oui, à condition que le gag repose sur une situation et non sur le jeu d'un acteur. Un fantôme stagiaire qui n'arrive à effrayer personne fonctionne en images. Une réplique qui tombe juste grâce à une intonation, beaucoup moins : la voix et le timing te demanderont des dizaines d'essais.",
  },
  {
    question: "Combien de temps doit durer un court métrage fait avec l'IA ?",
    answer:
      "Pour un premier projet, entre une et trois minutes. Au-delà, chaque plan supplémentaire multiplie les risques d'incohérence et le coût en crédits. Le Nikon Film Festival impose par exemple 2 min 20 par film pour sa 17e édition, une durée qui oblige à garder une seule idée forte.",
  },
  {
    question: "Qu'est-ce qu'une logline et pourquoi l'écrire avant de générer ?",
    answer:
      "C'est le résumé de ton histoire en une phrase : un personnage, ce qui déclenche l'histoire, ce qu'il veut et ce qu'il risque. L'atelier de logline de ScreenWeaver propose le modèle « Quand [protagoniste] [déclencheur], il doit [objectif] avant [enjeu] » et alerte au-delà de 35 mots. Si tu ne sais pas remplir les quatre cases, aucun prompt ne sauvera la vidéo.",
  },
  {
    question: "Peut-on demander à ChatGPT des idées de court métrage ?",
    answer:
      "Tu peux, mais tu obtiendras surtout les idées que tout le monde reçoit : le robot qui découvre les émotions, la boucle temporelle, le dernier humain sur Terre. Donne-lui plutôt une de tes contraintes de production et un souvenir précis à toi, puis demande vingt variantes et jette les dix-huit premières.",
  },
];

export const ideesScenarioCourtMetrage: Article = {
  title: "Idées de scénario de court métrage : 15 pistes IA",
  slug: "idees-scenario-court-metrage",
  description:
    "15 idées de scénario de court métrage classées par contrainte (un lieu, deux personnages, sans dialogue, 60 s), chacune avec sa logline et son piège en IA.",
  excerpt:
    "Quinze idées de court métrage pensées pour la vidéo IA, rangées par contrainte de production. Pour chacune, une logline et le piège qui t'attend au moment de générer.",
  category: "storytelling",
  tags: ["scénario", "court métrage", "idées", "logline", "vidéo IA"],
  date: "2026-11-14",
  updatedAt: "2026-11-14",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/idees-scenario-court-metrage.webp",
  imageAlt:
    "Dans la cafétéria d'une aire d'autoroute un soir de pluie, une femme aux cheveux gris colle des fiches manuscrites sur la vitre pendant qu'un jeune homme en ciré jaune en lit une en riant, un minuteur de cuisine posé sur la table",
  keywords: [
    "idée scénario court métrage",
    "idée scénario court métrage comique",
    "idée de scénario de film",
    "logline court métrage",
    "court métrage IA",
  ],
  relatedSlugs: ["structure-3-actes-video-ia", "film-ia-gratuit-court-metrage", "apprendre-ecrire-scenario"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu ouvres ton générateur vidéo, tu as des crédits, tu as du temps, et tu n'as aucune histoire. Alors tu tapes « un astronaute marche sur une planète rouge » et tu obtiens un joli plan qui ne raconte rien. On est tous passés par là.",
    },
    {
      type: "p",
      text: "Voici quinze idées de scénario de court métrage pensées pour la vidéo IA. Elles sont rangées par contrainte de production : un seul lieu, deux personnages, aucun dialogue, soixante secondes, et une série comique. Chaque idée a sa logline et le piège qui t'attend au moment de générer.",
    },
    {
      type: "p",
      text: "Mon parti pris : je choisis une idée de court métrage IA d'après ce que les modèles savent tourner, avant de penser à ce qui me plaît. Celle qui demande vingt figurants qui parlent en même temps, je la garde pour le jour où j'aurai une équipe.",
    },

    { type: "h2", id: "core-concepts", text: "Partir de la contrainte, pas de l'inspiration" },
    { type: "h3", id: "ce-que-ia-tient", text: "Ce que les modèles vidéo tiennent mal" },
    {
      type: "p",
      text: "Dès que tu as généré quelques dizaines de plans, tu connais les zones de casse : un visage qui change légèrement d'un plan à l'autre, des mains qui se déforment dès qu'elles manipulent un objet, du texte à l'écran qui devient du charabia, des lèvres qui ne suivent pas la voix. Plus il y a de personnages, plus ces problèmes se multiplient.",
    },
    {
      type: "p",
      text: "Une contrainte d'écriture réduit le nombre de ces zones avant même d'écrire la première ligne. Avec un seul lieu, tu n'as qu'un décor à stabiliser. Sans dialogue, la synchronisation labiale disparaît du problème. Et un film de soixante secondes tient en huit à douze plans au lieu de quarante. Si tu veux voir comment ranger ces plans dans une vraie progression, j'ai détaillé [la structure en trois actes pour une vidéo courte](/blog/structure-3-actes-video-ia).",
    },
    { type: "h3", id: "logline-test", text: "La logline, ton filtre avant de dépenser un crédit" },
    {
      type: "p",
      text: "Une idée qui ne tient pas en une phrase claire ne tiendra pas en douze plans. Le format le plus simple : un personnage, un déclencheur, un objectif, un enjeu. L'atelier gratuit de ScreenWeaver le découpe en quatre champs et assemble la phrase selon le modèle « Quand [protagoniste] [déclencheur], il doit [objectif] avant [enjeu] ».",
    },
    {
      type: "screenshot",
      src: `${IMG}-logline.webp`,
      alt: "Page Atelier et testeur de logline de ScreenWeaver en français, avec quatre champs à remplir : protagoniste, élément déclencheur, objectif et antagoniste ou enjeu",
      caption:
        "L'atelier de logline de ScreenWeaver : quatre champs, une phrase assemblée, une alerte au-delà de 35 mots. La page précise que tout tourne dans le navigateur.",
      source: LOGLINE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "J'ai écrit les quinze loglines ci-dessous avec cette logique. Tu peux les recopier dans l'outil pour les tordre, changer le personnage ou l'enjeu, et voir laquelle te parle.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "tools",
      title: "Teste ta logline avant de générer le moindre plan",
      text: "Les outils gratuits de ScreenWeaver, dont l'atelier de logline, qui assemble ta phrase directement dans ton navigateur.",
    },

    { type: "h2", id: "practical-workflow", text: "15 idées de scénario de court métrage, rangées par contrainte" },
    {
      type: "table",
      caption: "Ce que chaque contrainte t'épargne et ce qu'elle te coûte en vidéo IA",
      headers: ["Contrainte", "Ce qu'elle t'épargne", "Ce qu'elle te demande"],
      rows: [
        ["Un seul lieu", "Un décor à rendre cohérent au lieu de cinq", "Varier les cadrages pour ne pas lasser"],
        ["Deux personnages", "Deux visages à stabiliser, pas une foule", "Une fiche personnage solide pour chacun"],
        ["Sans dialogue", "Aucune synchronisation labiale", "Raconter par les gestes, le son et le montage"],
        ["60 secondes", "Huit à douze plans au total", "Une seule idée, coupée au plus court"],
        ["Comique", "Le spectateur pardonne une image imparfaite", "Un gag de situation, pas de jeu d'acteur"],
      ],
    },

    { type: "h3", id: "un-seul-lieu", text: "Un seul lieu" },
    {
      type: "p",
      text: "**1. L'ascenseur du neuvième.** Quand une livreuse reste bloquée dans un ascenseur avec le colis qu'elle devait livrer, elle doit comprendre pourquoi le carton bouge avant que les pompiers n'arrivent. Le piège : le panneau des étages. Les modèles réinventent les chiffres et les boutons à chaque plan. Montre-le une seule fois, de loin, ou insère un vrai panneau photographié au montage.",
    },
    {
      type: "p",
      text: "**2. La caisse de nuit.** Quand un caissier de station-service voit revenir à 3 heures la cliente qui paie toujours avec des pièces de 1987, il doit lui demander d'où elle vient avant la fin de son dernier service. Ce qui dérape ici, c'est la lumière : néons, pompes, phares qui passent. Fixe une palette dans ton premier plan validé et réutilise cette image comme référence pour tous les suivants.",
    },
    {
      type: "p",
      text: "**3. La salle d'attente.** Quand un garçon de dix ans attend seul chez le vétérinaire avec une boîte en carton percée sur les genoux, il doit décider s'il ouvre la boîte avant qu'on appelle son nom. Ne montre jamais l'animal. Le son et le regard de l'enfant suffisent, et tu évites un chat à cinq pattes.",
    },

    { type: "h3", id: "deux-personnages", text: "Deux personnages" },
    {
      type: "p",
      text: "Ici, le risque numéro un est de voir un visage changer entre le plan 2 et le plan 7. Prépare pour chaque personnage une fiche avec plusieurs angles avant de générer, comme je l'explique dans [mon guide du personnage cohérent](/blog/personnage-coherent-ia).",
    },
    {
      type: "table",
      caption: "Trois idées à deux personnages et leur piège en génération",
      headers: ["Idée", "Logline", "Le piège"],
      rows: [
        [
          "4. Les mots sous la porte",
          "Quand deux voisins qui ne se sont jamais vus trouvent un mot écrit d'une troisième main, ils doivent se rencontrer avant la nuit.",
          "L'écriture manuscrite : écris les mots toi-même, photographie-les et insère-les au montage.",
        ],
        [
          "5. La maison vendue",
          "Quand une fille aide son père à vider la maison familiale, elle doit retrouver la cassette de son enfance avant l'arrivée des acheteurs.",
          "Les cartons et les objets manipulés : garde les mains hors champ dès que possible.",
        ],
        [
          "6. L'élève de 70 ans",
          "Quand une retraitée prend sa dixième leçon de conduite, elle doit convaincre son moniteur qu'elle est prête avant l'examen du lendemain.",
          "L'intérieur de voiture : volant, rétroviseur et ceintures dérivent vite. Choisis deux cadrages et tiens-les.",
        ],
      ],
    },

    { type: "h3", id: "sans-dialogue", text: "Sans dialogue" },
    {
      type: "ul",
      items: [
        "**7. La dernière séance.** Quand la projectionniste d'un cinéma de quartier lance son ultime bobine, elle doit trouver un spectateur pour la salle vide avant la fin du générique. Piège : l'écran dans l'écran. Laisse l'image projetée floue ou hors champ.",
        "**8. Le rond-point.** Quand une femme plante des tulipes chaque automne sur le rond-point de son village, elle doit les protéger des travaux avant le printemps. Piège : les saisons. Garde exactement le même cadrage et ne change que la lumière et la végétation, plan après plan.",
        "**9. La peluche du TER.** Quand un ours en peluche est oublié sur un siège de train, il doit faire le trajet retour avant que l'enfant ne s'endorme sans lui. Piège : l'objet qui change de forme. Génère d'abord une image de référence de la peluche et donne-la à chaque plan.",
      ],
    },

    { type: "h3", id: "soixante-secondes", text: "60 secondes chrono" },
    {
      type: "p",
      text: "**10. Le vocal jamais envoyé.** Quand un homme enregistre un message vocal à son frère après dix ans de silence, il doit appuyer sur envoyer avant la fin de la minute. Le film dure le temps du message. Évite le visage qui parle : filme-le de dos, ou ses mains sur le téléphone, et laisse la voix porter tout.",
    },
    {
      type: "p",
      text: "**11. Le micro-ondes.** Quand une étudiante comprend que la pizza qui tourne est la dernière nourriture de l'appartement, elle doit trouver une excuse pour sa colocataire avant le bip. Le compteur numérique du four sortira souvent faux : comme pour l'ascenseur, ajoute les chiffres en postproduction.",
    },
    {
      type: "p",
      text: "**12. La photo de classe.** Quand une femme retrouve sa photo de CM2, elle doit se souvenir du nom de l'enfant flou au dernier rang avant que sa mère ne range l'album. Le piège : trente visages d'enfants. Garde un seul visage net, le sien, et laisse le reste dans le flou d'un vieux tirage.",
    },

    { type: "h3", id: "comique", text: "Idées de scénario de court métrage comique" },
    {
      type: "ul",
      items: [
        "**13. Le fantôme stagiaire.** Quand un fantôme en stage dans un manoir hanté n'arrive à effrayer personne, il doit réussir une apparition avant son évaluation de fin de mois. La transparence est le piège : un même niveau d'opacité d'un plan à l'autre, sinon le gag disparaît.",
        "**14. L'enceinte et le chien.** Quand le chien de la maison apprend à commander des croquettes par l'enceinte connectée, son maître doit annuler les livraisons avant que le facteur ne démissionne. Ici, c'est la gueule du chien qui pose problème : une seule réplique en voix de synthèse, jamais de lèvres animées.",
        "**15. Le GPS vexé.** Quand un conducteur ignore trois fois de suite son GPS, l'appareil décide de se venger avant l'arrivée au mariage. Tout repose sur la voix du GPS, pas sur l'image. Écris les répliques avant de générer un seul plan de route.",
      ],
    },
    {
      type: "p",
      text: "Le comique pardonne beaucoup à l'image. Une voiture un peu trop lisse passe si la chute est bonne. En revanche, un gag qui dépend d'un regard ou d'une hésitation d'acteur te coûtera des dizaines d'essais.",
    },

    { type: "h2", id: "choisir-idee", text: "Choisir ton idée et la tester en une soirée" },
    {
      type: "ol",
      items: [
        "Choisis une seule contrainte, celle qui correspond à ce que tu sais déjà générer proprement.",
        "Écris dix loglines dans cette famille. Le plus simple est de prendre une des quinze ci-dessus et de changer le personnage, puis le lieu, puis l'enjeu.",
        "Garde celle qui te fait sourire ou te met mal à l'aise. Si aucune ne te fait rien, recommence le lendemain.",
        "Découpe-la en huit plans maximum, une ligne par plan : ce qu'on voit, ce qu'on entend.",
        "Génère d'abord une image fixe par plan. Elle coûte bien moins cher qu'un clip et te montre tout de suite si un visage ou un décor dérive.",
        "Montre ces huit images à quelqu'un sans rien expliquer. S'il comprend l'histoire, tu peux animer.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : note sous chaque logline le plan qui te fait le plus peur à générer. Si ce plan est indispensable à l'histoire, change d'idée ou trouve un moyen de le montrer hors champ. C'est presque toujours ce plan-là qui fait exploser le budget.",
    },
    {
      type: "p",
      text: `Pour t'entraîner avec une vraie échéance, le [Nikon Film Festival](${NIKON}) impose chaque année un thème et une durée de 2 min 20. Pour la 17e édition, le thème est « Surprise » : les inscriptions sont gratuites, ouvertes depuis le 15 septembre 2026, et se clôturent le 15 janvier 2027 à 15 h, d'après [l'article de Phototrend du 6 novembre](${PHOTOTREND}). Lis le règlement sur le site du festival avant de te lancer, notamment ce qu'il dit des images générées par IA : je ne l'ai pas trouvé en ligne le jour où j'écris.`,
    },
    {
      type: "screenshot",
      src: `${IMG}-nikon.webp`,
      alt: "Article de Phototrend sur le Nikon Film Festival 2027, section intitulée Surprise, un thème ouvert pour la 17e édition, avec le paragraphe qui présente le thème et le record de films de l'édition 2026",
      caption:
        "Le thème « Surprise » de la 17e édition du Nikon Film Festival, présenté par Phototrend. Un mot imposé et 2 min 20 : le bon terrain pour tester une des idées de cette liste.",
      source: PHOTOTREND,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "L'idée 1 de l'ascenseur ou l'idée 9 de la peluche se plient facilement à ce thème. Une fois ton film monté, compare-le à ce que demandent les sélections dans [mon article sur le court métrage IA de niveau festival](/blog/court-metrage-ia-niveau-festival).",
    },

    { type: "h2", id: "trench-warfare", text: "Les erreurs qui tuent une bonne idée de court" },
    { type: "h3", id: "erreur-cliche", text: "Prendre l'idée que l'IA te propose" },
    {
      type: "p",
      text: "Symptôme : ton film parle d'un robot qui découvre les émotions ou d'une boucle temporelle. Ce sont les premières idées qu'un chatbot sort quand on lui demande un court métrage, et il les sort à tout le monde. Fix concret : pars d'un détail de ta vie (un lieu, un objet, une phrase entendue) et donne-le à l'IA comme point de départ, jamais l'inverse.",
    },
    { type: "h3", id: "erreur-trop-grand", text: "Écrire pour un budget de long métrage" },
    {
      type: "p",
      text: "Symptôme : ton court de deux minutes contient une bataille, une ville entière et six personnages. Fix concret : coupe jusqu'à ce que l'histoire tienne dans un lieu et deux personnes. Si elle ne survit pas à cette coupe, l'idée n'était pas assez forte.",
    },
    { type: "h3", id: "erreur-pas-de-fin", text: "Avoir une situation sans chute" },
    {
      type: "p",
      text: "Symptôme : ton fantôme stagiaire est drôle pendant trente secondes, puis le film s'arrête sans rien. Fix concret : écris la dernière image avant la première. Si tu ne sais pas comment ça finit, tu n'as pas encore d'histoire.",
    },
    { type: "h3", id: "erreur-generer-trop-tot", text: "Générer avant d'avoir écrit" },
    {
      type: "p",
      text: "Symptôme : tu as vingt plans magnifiques et aucun montage possible, parce qu'ils ne racontent pas la même chose. Fix concret : logline, découpage, images fixes, puis vidéo. Dans cet ordre. Si tu travailles sans budget, [mon guide du film IA gratuit](/blog/film-ia-gratuit-court-metrage) montre comment tenir ce rythme avec les plans gratuits.",
    },

    {
      type: "cta",
      variant: "formation",
      title: "De la logline au premier plan tourné",
      text: "Dans ma formation IA gratuite, je montre comment passer d'une idée en une phrase à des plans cohérents, sans jeter tes crédits sur des scènes qui ne servent pas l'histoire.",
    },
    {
      type: "p",
      text: `Et si tu veux muscler l'écriture elle-même, j'ai monté [un parcours en quatre exercices pour apprendre à écrire un scénario](/blog/apprendre-ecrire-scenario). Mais ce soir, prends une idée de la liste, écris-en dix versions et garde la meilleure.`,
    },

    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-14 -->
