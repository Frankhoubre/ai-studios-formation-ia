import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-10";
const IMG = "/images/articles/apprendre-ecrire-scenario";
const BBC = "https://www.bbc.co.uk/writers/scripts";
const LAVANDIER = "https://livres-cinema.info/en/livre/21799/dramaturgie";
const CHION = "https://www.laprocure.com/product/615734/chion-michel-ecrire-un-scenario";
const CINEUROPA = "https://cineuropa.org/fr/onlinescreenplay/";

const FAQ = [
  {
    question: "Par où commencer pour apprendre à écrire un scénario ?",
    answer:
      "Par la lecture. Lis trois ou quatre scénarios de courts métrages avant d'écrire la moindre ligne, pour voir à quoi ressemble une page qui se tourne vite. Ensuite, enchaîne quatre exercices dans l'ordre : une logline, une scène, un séquencier, une réécriture. Un livre et un cours aident, mais ils servent mieux quand tu as déjà une page ratée sous les yeux.",
  },
  {
    question: "Quel livre pour apprendre à écrire un scénario ?",
    answer:
      "Si tu n'en achètes qu'un, prends La Dramaturgie d'Yves Lavandier (Les Impressions nouvelles, édition de 2024, 672 pages). C'est long mais clair, avec des exemples pris au cinéma, au théâtre et à la bande dessinée. Écrire un scénario de Michel Chion (Cahiers du cinéma) est plus court et plus tourné vers le métier. Story de Robert McKee existe en français chez Dixit.",
  },
  {
    question: "Peut-on apprendre à écrire un scénario seul ?",
    answer:
      "Oui, à condition de te faire lire. Les livres et les scénarios en accès libre suffisent pour la technique. Ce qui manque quand on apprend seul, c'est un retour honnête. Trouve deux personnes qui liront tes pages sans te ménager, ou rejoins un atelier, même en ligne.",
  },
  {
    question: "Combien de temps faut-il pour écrire un premier court métrage ?",
    answer:
      "Le parcours de cet article tient en quatre semaines à raison de quelques heures par semaine, pour un court de trois à cinq minutes. Prends-le comme un rythme de départ : il t'évite de passer six mois sur une première version. La réécriture prend souvent plus de temps que l'écriture.",
  },
  {
    question: "Où lire des scénarios gratuitement ?",
    answer:
      "La Script Library de la BBC propose plus de 1 000 scénarios de télévision, de radio et de cinéma, avec une catégorie de scénarios de courts métrages. Ils sont en anglais. Pour un créateur vidéo, les courts sont les plus utiles : même durée, mêmes contraintes que tes projets.",
  },
  {
    question: "Est-ce que l'IA peut écrire le scénario à ma place ?",
    answer:
      "Elle peut proposer des idées, reformuler une scène ou repérer un trou dans ton intrigue. Mais si tu ne sais pas reconnaître une scène qui ne marche pas, tu ne sauras pas trier ce qu'elle te propose. Apprends d'abord à écrire à la main les quatre exercices, puis sers-toi de l'IA comme d'un relecteur.",
  },
];

export const apprendreEcrireScenario: Article = {
  title: "Apprendre à écrire un scénario : le parcours en 4 exercices",
  slug: "apprendre-ecrire-scenario",
  description:
    "Apprendre à écrire un scénario quand on fait de la vidéo IA : 4 exercices sur 4 semaines, les livres vérifiés (Lavandier, Chion) et où lire des scénarios.",
  excerpt:
    "Tes vidéos IA sont belles mais personne ne les regarde jusqu'au bout ? Le problème est souvent dans l'histoire. Quatre exercices sur quatre semaines, les livres qui valent l'achat et les scénarios à lire gratuitement.",
  category: "storytelling",
  tags: ["scénario", "écriture", "court métrage", "formation", "storytelling"],
  date: "2026-11-10",
  updatedAt: "2026-11-10",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/apprendre-ecrire-scenario.webp",
  imageAlt:
    "Une femme en tenue d'infirmière et gilet gris dispose des fiches manuscrites en rangées sur une table de cuisine à l'aube, à côté d'un scénario annoté au stylo rouge et d'un bol de café",
  keywords: [
    "apprendre à écrire un scénario",
    "livre pour apprendre à écrire un scénario",
    "cours écriture scénario",
    "écrire un court métrage",
    "séquencier",
  ],
  relatedSlugs: ["ecrire-scenario-ia-methode-outils", "structure-3-actes-video-ia", "apprendre-ia-creative-parcours"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu sais générer un plan magnifique en dix minutes. Tu en enchaînes douze, tu montes, tu exportes. Et la vidéo tombe à plat au bout de vingt secondes, parce qu'il ne s'y passe rien. Personne ne veut rien, personne ne perd rien. Le modèle vidéo n'y est pour rien.",
    },
    {
      type: "p",
      text: "Cet article te donne un parcours de quatre semaines pour apprendre à écrire un scénario de court métrage : quatre exercices dans un ordre précis, ce que tu dois avoir produit à la fin de chacun, les livres que j'ai vérifiés le 10 novembre 2026 et l'endroit où lire plus de mille scénarios sans payer.",
    },
    {
      type: "p",
      text: "Mon parti pris : on apprend l'écriture en écrivant des pages courtes, puis en les réécrivant. Le livre vient après la première page ratée. Le cours aussi.",
    },

    { type: "h2", id: "core-concepts", text: "Ce que le scénario change dans une vidéo IA" },
    { type: "h3", id: "decider-avant-generer", text: "Écrire, c'est décider avant de générer" },
    {
      type: "p",
      text: "En vidéo IA, chaque plan coûte des crédits. Un scénario te force à décider ce que chaque plan raconte avant de lancer la moindre génération. Tu sais pourquoi ce gros plan existe, ce que le personnage cherche dans cette scène, et à quel moment le spectateur doit comprendre qu'il a échoué. Sans ça, tu génères au hasard et tu tries ensuite, ce qui revient bien plus cher.",
    },
    {
      type: "p",
      text: "Pour un créateur vidéo, il y a une bonne nouvelle : tu n'as pas besoin d'écrire un long métrage. Un court de trois à cinq minutes, c'est trois à cinq pages. Tu peux en écrire un, le réécrire, le produire et voir ce qui casse, dans le même mois. Un scénariste de cinéma attend parfois des années avant de voir ses pages tournées.",
    },
    { type: "h3", id: "lire-avant-ecrire", text: "Lire des scénarios avant d'en écrire" },
    {
      type: "p",
      text: "La plupart des gens qui veulent écrire n'ont jamais lu un scénario. Ils ont vu des films, ce qui n'a rien à voir. Sur la page, il n'y a ni musique ni jeu d'acteur : seulement ce qu'on voit, ce qu'on entend et ce que disent les personnages. Lire cinq scénarios t'apprend plus sur le format que n'importe quel chapitre de livre.",
    },
    {
      type: "p",
      text: `La source la plus simple est la [Script Library de la BBC](${BBC}) : plus de 1 000 scénarios de télévision, de radio et de cinéma, rangés par genre, avec une catégorie de scénarios de courts métrages. C'est en anglais, mais le format se lit sans difficulté. Commence par les courts, qui ont la durée de tes projets.`,
    },
    {
      type: "screenshot",
      src: `${IMG}-bbc-scripts.webp`,
      alt: "Page Script Library du site BBC Writers, avec le sous-titre Read BBC TV, Radio and Film scripts et les catégories Children's, Films, Radio Comedy, Radio Drama, TV Comedy, TV Drama et Whoniverse",
      caption:
        "La Script Library de BBC Writers capturée le 10 novembre 2026. La page annonce plus de 1 000 scénarios classés par genre, dont une série de courts métrages.",
      source: BBC,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },

    { type: "h2", id: "practical-workflow", text: "Le parcours en quatre semaines, exercice par exercice" },
    {
      type: "p",
      text: "Chaque semaine a un seul livrable. Tu ne passes pas à la suivante tant que le livrable n'existe pas sur le papier, même s'il est mauvais. Le fil rouge de mon exemple : une infirmière de nuit qui découvre qu'un patient âgé attend une visite qui ne viendra jamais.",
    },
    {
      type: "table",
      caption: "Le parcours pour apprendre à écrire un scénario de court métrage",
      headers: ["Semaine", "Exercice", "Livrable", "Temps indicatif"],
      rows: [
        ["1", "Logline", "Une phrase : un personnage, ce qu'il veut, ce qui l'en empêche", "2 h, dont 1 h de lecture"],
        ["2", "Une scène", "Une page, une seule scène, sans voix off", "3 h"],
        ["3", "Séquencier", "8 à 12 lignes, une par scène, dans l'ordre du film", "3 h"],
        ["4", "Réécriture", "Une version 2 complète après deux lectures extérieures", "4 h"],
      ],
    },
    {
      type: "ol",
      items: [
        "**Semaine 1, la logline.** Écris vingt versions d'une même phrase, puis garde la meilleure. Exemple : « Une infirmière de nuit fait croire à un vieil homme que son fils va venir, et doit tenir le mensonge jusqu'au matin. » Si ta phrase n'a ni désir ni obstacle, ton film n'en aura pas non plus.",
        "**Semaine 2, une scène.** Une page, un lieu, deux personnages, et un changement entre le début et la fin. Interdiction d'expliquer les sentiments : l'infirmière ne dit pas qu'elle a de la peine, elle remet trois fois en place la couverture du patient. C'est l'exercice qui t'apprend à écrire ce qu'une caméra peut filmer.",
        "**Semaine 3, le séquencier.** Une ligne par scène, au présent, dans l'ordre du film. Huit à douze lignes suffisent pour un court. C'est là que tu vois si ton histoire avance ou si deux scènes disent la même chose. La [structure en trois actes](/blog/structure-3-actes-video-ia) t'aide à placer le moment où tout bascule.",
        "**Semaine 4, la réécriture.** Rédige le scénario complet à partir du séquencier, fais-le lire à deux personnes, puis réécris. Pose-leur une seule question : « À quel moment as-tu décroché ? » Leur réponse t'apprendra plus que dix « j'ai bien aimé ».",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : imprime ton séquencier sur des fiches, une scène par fiche, et étale-les sur une table. Retire une fiche au hasard et relis. Si l'histoire tient sans elle, la scène ne sert à rien. C'est brutal et très efficace.",
    },
    {
      type: "p",
      text: `Une fois les quatre semaines passées, l'IA devient un vrai outil d'écriture, parce que tu sais juger ce qu'elle te propose. J'explique comment l'utiliser sans lui laisser le volant dans [ma méthode pour écrire un scénario avec l'IA](/blog/ecrire-scenario-ia-methode-outils). Et si tu cherches où placer l'écriture dans un apprentissage plus large de l'image et de la vidéo, le [parcours pour apprendre l'IA créative](/blog/apprendre-ia-creative-parcours) remet chaque étape dans l'ordre.`,
    },

    { type: "h2", id: "livres", text: "Les livres pour apprendre à écrire un scénario" },
    {
      type: "p",
      text: "Trois livres en français suffisent largement. J'ai vérifié les éditions disponibles le 10 novembre 2026 ; les prix bougent, regarde chez ton libraire avant d'acheter.",
    },
    {
      type: "p",
      text: `Si tu n'en achètes qu'un, prends La Dramaturgie d'Yves Lavandier. L'édition actuelle s'appelle La Dramaturgie : l'art du récit, parue en 2024 aux Impressions nouvelles (672 pages, 36 euros selon [la fiche de livres-cinema.info](${LAVANDIER})). Lavandier explique les mécanismes du récit avec des exemples tirés du cinéma, du théâtre et de la bande dessinée. C'est épais, mais chaque chapitre se lit séparément : lis celui sur le conflit avant ta semaine 2.`,
    },
    {
      type: "screenshot",
      src: `${IMG}-lavandier.webp`,
      alt: "Fiche du livre La Dramaturgie, l'art du récit, d'Yves Lavandier sur livres-cinema.info : parution 2024 aux Impressions nouvelles, collection Traverses, broché de 672 pages à 36 euros",
      caption:
        "La fiche de La Dramaturgie sur livres-cinema.info, capturée le 10 novembre 2026. Le site de l'éditeur bloquait la capture automatique ce jour-là.",
      source: LAVANDIER,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: `Écrire un scénario, de Michel Chion, est plus court et plus orienté métier, avec une vraie réflexion sur ce qui s'écrit et ce qui se filme. L'édition définitive est publiée par les Cahiers du cinéma (février 2015, 24,95 euros sur [la page de La Procure](${CHION}) le jour de ma vérification, expédition annoncée sous plus de quinze jours). Bon complément de Lavandier si tu préfères les exemples de films à la théorie.`,
    },
    {
      type: "screenshot",
      src: `${IMG}-chion.webp`,
      alt: "Page produit du livre Écrire un scénario de Michel Chion sur le site de La Procure, édition définitive des Cahiers du cinéma de février 2015, au prix de 24,95 euros",
      caption:
        "Écrire un scénario de Michel Chion sur La Procure, capturé le 10 novembre 2026 : Cahiers du cinéma, février 2015, 24,95 euros.",
      source: CHION,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Reste Story, de Robert McKee, tiré des ateliers d'écriture qu'il anime aux États-Unis et traduit chez Dixit sous le titre Story : contenu, structure, genre. Très dense, très orienté long métrage. Je le garde pour plus tard : il sert surtout quand tu as déjà écrit et que tu veux comprendre pourquoi une structure tient.",
    },
    {
      type: "p",
      text: "Mon conseil d'ordre : Lavandier pendant le parcours, Chion après ton premier court produit, McKee le jour où tu attaques un format plus long. Et garde un crayon à côté : un chapitre sur le conflit se comprend vraiment le jour où ta propre scène manque de conflit.",
    },

    { type: "h2", id: "cours", text: "Cours d'écriture de scénario : en ligne, en atelier, gratuit" },
    {
      type: "p",
      text: "Un cours apporte une chose que les livres n'apportent pas : quelqu'un qui lit tes pages. C'est le critère qui compte. Un cours en vidéo sans retour sur tes textes, c'est un livre filmé.",
    },
    {
      type: "p",
      text: `Côté francophone, Cineuropa propose depuis des années une [formation à l'écriture de scénario en ligne](${CINEUROPA}) avec un programme, des exercices, un calendrier et un formateur identifié. Les conditions et le tarif sont détaillés sur la page : lis-les sur place, je n'ai pas pu les relire en entier le jour de ma capture.`,
    },
    {
      type: "screenshot",
      src: `${IMG}-cineuropa.webp`,
      alt: "Page Formation en scénario en ligne de Cineuropa, avec le visuel Écrivez votre scénario et un menu listant méthode, particularités, programme, exercices, calendrier des cours, tarif, comment s'inscrire et formateur",
      caption:
        "La page de la formation à l'écriture de scénario en ligne de Cineuropa, capturée le 10 novembre 2026.",
      source: CINEUROPA,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Les universités et écoles de cinéma ont aussi des ateliers, souvent réservés à leurs étudiants inscrits. Avant de payer quoi que ce soit, pose trois questions : combien de pages seront lues par un formateur, en combien de temps tu reçois un retour, et si tu termines avec un scénario complet. Si la réponse à la première est « aucune », passe ton chemin.",
    },
    {
      type: "p",
      text: "Une fois ton séquencier écrit, il te restera à passer des pages au découpage, ce que les cours d'écriture classiques couvrent peu.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "academy",
      title: "Des cours vidéo gratuits pour passer du scénario à l'image",
      text: "L'Academy de ScreenWeaver regroupe des leçons vidéo gratuites, dont un cours en français, sur le passage des pages au découpage.",
    },

    { type: "h2", id: "trench-warfare", text: "Les quatre erreurs qui bloquent les débutants" },
    { type: "h3", id: "erreur-methodes", text: "Collectionner les méthodes" },
    {
      type: "p",
      text: "Symptôme : tu as lu trois livres, regardé deux heures de vidéos sur le voyage du héros, et tu n'as aucune page. Chaque nouvelle méthode repousse le moment d'écrire. Fix concret : interdis-toi tout nouveau livre tant que ta logline de la semaine 1 n'est pas écrite.",
    },
    { type: "h3", id: "erreur-voix-off", text: "Tout expliquer en voix off" },
    {
      type: "p",
      text: "Symptôme : ton personnage raconte ce qu'il ressent pendant que les images illustrent. C'est fréquent en vidéo IA, où la voix off rattrape des plans qui ne racontent rien. Fix concret : réécris la scène sans un mot de voix off, en ne gardant que des actions visibles. Ajoute la voix ensuite seulement si quelque chose manque vraiment.",
    },
    { type: "h3", id: "erreur-trop-long", text: "Commencer par un long métrage" },
    {
      type: "p",
      text: "Symptôme : ton premier projet fait 90 pages et tu bloques à la page 30. Fix concret : écris un court de trois à cinq pages, produis-le, regarde-le avec des gens. Tu apprendras plus en finissant trois courts qu'en abandonnant un long au milieu.",
    },
    { type: "h3", id: "erreur-pas-de-lecteur", text: "Ne faire lire personne" },
    {
      type: "p",
      text: "Symptôme : tu réécris seul, en boucle, et chaque version te semble pire. Fix concret : trouve deux lecteurs qui ne te doivent rien et pose-leur une seule question, celle du moment où ils ont décroché. Corrige ce moment-là, et rien d'autre, avant la lecture suivante.",
    },

    {
      type: "cta",
      variant: "formation",
      title: "Passe de tes pages à tes premières images",
      text: "Dans ma formation IA gratuite, je montre comment transformer un séquencier en plans, puis en vidéo, sans brûler tes crédits sur des scènes qui ne servent pas l'histoire.",
    },
    {
      type: "p",
      text: `Si tu hésites encore sur la manière d'apprendre la vidéo elle-même, j'ai rassemblé les options dans [mon guide de formation IA vidéo](/blog/formation-ia-video). Mais commence par ta logline ce soir. Vingt versions, une seule gardée.`,
    },

    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-10 -->
