import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-17";
const IMG = "/images/articles/traduire-chaine-youtube-ia";
const YT_DOUBLAGE = "https://support.google.com/youtube/answer/15569972?hl=fr";
const YT_MULTILINGUE = "https://support.google.com/youtube/answer/13338784?hl=fr";
const YT_TITRES = "https://support.google.com/youtube/answer/6289575?hl=fr";
const YT_ACCES = "https://support.google.com/youtube/answer/9890437?hl=fr";

const FAQ = [
  {
    question: "Le doublage automatique de YouTube est-il gratuit ?",
    answer:
      "L'Aide YouTube ne mentionne aucun tarif : la fonction est activée par défaut pour les créateurs éligibles, et les versions doublées sont générées à l'import d'une nouvelle vidéo. Ce que tu paies éventuellement, c'est l'outil externe qui fabrique tes propres pistes dans les langues que YouTube ne double pas depuis le français.",
  },
  {
    question: "Dans quelles langues YouTube double-t-il une vidéo en français ?",
    answer:
      "D'après le tableau de l'Aide YouTube relevé le 17 novembre 2026, une vidéo dont la langue source est le français n'est doublée automatiquement que vers l'anglais, avec la voix expressive quand elle est disponible. Une vidéo en anglais, elle, peut partir vers vingt langues, dont le français. La liste s'allonge progressivement, vérifie l'onglet Langues de ta vidéo.",
  },
  {
    question: "Faut-il créer une deuxième chaîne pour chaque langue ?",
    answer:
      "Non, sauf projet éditorial vraiment différent. L'audio multilingue sert justement à garder une seule vidéo avec plusieurs pistes : les vues, les commentaires et les statistiques restent au même endroit, et YouTube Analytics détaille les vues et la durée de visionnage par langue audio.",
  },
  {
    question: "Comment ajouter ma propre piste audio dans une autre langue ?",
    answer:
      "Dans YouTube Studio sur ordinateur, ouvre Langues, clique sur la vidéo, puis Ajouter une langue. À côté de Version doublée, clique sur Ajouter, sélectionne ton fichier audio (à peu près de la même durée que la vidéo) et publie. Il faut avoir accès aux fonctionnalités avancées, et supprimer d'abord le doublage automatique s'il existe déjà dans cette langue.",
  },
  {
    question: "Peut-on corriger une erreur dans un doublage automatique ?",
    answer:
      "Pas directement. L'Aide YouTube précise qu'on ne peut pas modifier une version doublée automatiquement. Tu peux annuler sa publication, la supprimer, ou la remplacer par ta propre piste. Si toute la traduction est fausse, vérifie la langue d'origine déclarée pour la vidéo : la corriger relance la génération.",
  },
  {
    question: "Les spectateurs voient-ils qu'une vidéo est doublée par IA ?",
    answer:
      "Oui. La mention « Doublée automatiquement » apparaît dans la description des vidéos concernées, et chaque spectateur peut revenir à la piste d'origine depuis les paramètres du lecteur. La piste lancée par défaut dépend de sa langue préférée, que YouTube déduit de son historique de visionnage.",
  },
];

export const traduireChaineYoutubeIa: Article = {
  title: "Traduire sa chaîne YouTube avec l'IA : la méthode",
  slug: "traduire-chaine-youtube-ia",
  description:
    "Traduire une vidéo YouTube avec l'IA : ce que le doublage automatique fait depuis le français, quand importer ta propre piste, titres, miniatures et suivi.",
  excerpt:
    "Depuis une chaîne en français, YouTube ne double tout seul que vers l'anglais. Pour le reste, il faut importer tes propres pistes. La méthode complète pour ouvrir ta chaîne à d'autres langues sans en créer une deuxième : réglages, titres traduits, miniatures localisées et suivi par langue.",
  category: "ia-video",
  tags: ["YouTube", "doublage automatique", "audio multilingue", "traduction vidéo", "YouTube Studio"],
  date: "2026-11-17",
  updatedAt: "2026-11-17",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/traduire-chaine-youtube-ia.webp",
  imageAlt:
    "Séance de doublage maison dans un grenier breton : une femme aux cheveux gris courts enregistre au micro, à moitié dans une armoire pleine de manteaux, pendant qu'un homme barbu surveille l'enregistreur assis au bord du lit",
  keywords: [
    "traduire vidéo youtube ia",
    "chaîne youtube multilingue",
    "doublage automatique youtube",
    "audio multilingue youtube",
    "traduire chaîne youtube",
  ],
  relatedSlugs: ["doublage-traduction-video-ia", "sous-titres-automatiques-ia-video", "elevenlabs-guide-complet"],
  howTo: {
    name: "Traduire une chaîne YouTube en français vers d'autres langues",
    totalTime: "PT2H",
    steps: [
      {
        name: "Régler le doublage automatique",
        text: "Vérifie la langue d'origine de tes vidéos et coche la vérification manuelle des versions doublées dans les paramètres avancés de la chaîne.",
        anchor: "reglages-doublage",
      },
      {
        name: "Traduire le titre et la description",
        text: "Dans YouTube Studio, ajoute une langue sur la vidéo puis saisis le titre et la description traduits.",
        anchor: "titres-descriptions",
      },
      {
        name: "Importer ta propre piste pour une deuxième langue",
        text: "Fabrique une piste doublée de la même durée que la vidéo et importe-la depuis l'onglet Langues.",
        anchor: "piste-maison",
      },
      {
        name: "Suivre les résultats par langue audio",
        text: "Compare les vues et la durée de visionnage par langue audio dans YouTube Analytics avant d'ouvrir une langue de plus.",
        anchor: "suivi-langue",
      },
    ],
  },
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu as coché le doublage automatique en pensant que ta chaîne allait parler dix langues. Trois semaines plus tard, tes vidéos ont une piste anglaise, et rien d'autre. Normal : depuis le français, YouTube ne double tout seul que vers l'anglais.",
    },
    {
      type: "p",
      text: "Je te montre ici comment traduire une chaîne YouTube avec l'IA en partant de ce que la plateforme fait vraiment aujourd'hui : les réglages du doublage automatique, l'import de tes propres pistes pour les autres langues, les titres et miniatures traduits, puis le suivi par langue. On suit un exemple du début à la fin, une chaîne de restauration de meubles anciens qui veut s'ouvrir à l'anglais et à l'espagnol.",
    },
    {
      type: "p",
      text: "Mon avis : commence par une seule langue et par tes vidéos qui marchent déjà. Une chaîne traduite à moitié dans cinq langues rapporte moins qu'une chaîne bien doublée dans une.",
    },
    { type: "h2", id: "core-concepts", text: "Ce que YouTube traduit tout seul, et ce qui reste à ta charge" },
    {
      type: "p",
      text: "YouTube propose deux fonctions qui se ressemblent de loin et ne font pas le même travail. Si tu cherches plutôt à comprendre comment un doublage IA se fabrique (transcription, traduction, voix, synchro), lis d'abord [le guide du doublage et de la traduction vidéo par IA](/blog/doublage-traduction-video-ia). Ici, on parle de la chaîne : où vont les pistes, qui les entend, comment on les pilote.",
    },
    { type: "h3", id: "doublage-auto-vs-multilingue", text: "Doublage automatique et audio multilingue : deux fonctions" },
    {
      type: "p",
      text: "Le [doublage automatique](" + YT_DOUBLAGE + ") génère lui-même des pistes audio traduites quand tu importes une nouvelle vidéo. Il est activé par défaut pour les créateurs éligibles, et la mention « Doublée automatiquement » s'affiche dans la description. Tu n'as rien à fournir, mais tu ne peux pas retoucher le résultat.",
    },
    {
      type: "p",
      text: "L'[audio multilingue](" + YT_MULTILINGUE + ") est un simple emplacement : tu y déposes tes propres pistes doublées, sur une vidéo longue ou un Short, nouveaux ou déjà publiés. YouTube ne génère rien : tu enregistres la piste avant de l'importer, et tu supprimes d'abord le doublage automatique s'il existe déjà dans la même langue.",
    },
    {
      type: "screenshot",
      src: `${IMG}-doublage-automatique.webp`,
      alt: "Page de l'Aide YouTube « Utiliser le doublage automatique » : définition de la fonction, mention Doublée automatiquement dans la description, génération à l'import d'une nouvelle vidéo et début de la section Éligibilité",
      caption: "La page de l'Aide YouTube sur le doublage automatique : activé par défaut pour les créateurs éligibles, généré à l'import.",
      source: YT_DOUBLAGE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "langues-depuis-francais", text: "Depuis le français, une seule langue automatique" },
    {
      type: "p",
      text: "Dans le tableau des langues de la même page, la ligne « français » ne contient qu'une langue de destination : l'anglais. Il y porte un astérisque, ce qui signifie qu'il est compatible avec la voix expressive, celle qui reprend le ton et l'intonation de la voix d'origine (YouTube précise qu'elle n'est pas toujours utilisée).",
    },
    {
      type: "p",
      text: "Dans l'autre sens, une vidéo en anglais peut être doublée vers vingt langues, dont le français, l'espagnol, l'allemand, le portugais, l'hindi ou le japonais. **Une chaîne francophone qui vise l'espagnol ou l'allemand doit donc fabriquer ses pistes elle-même**, puis les importer par l'audio multilingue. YouTube ajoute des langues au fil du temps, et certaines chaînes les reçoivent avant d'autres : la liste qui fait foi pour une vidéo est celle de son onglet Langues dans YouTube Studio.",
    },
    { type: "h2", id: "practical-workflow", text: "Traduire ta chaîne YouTube avec l'IA, étape par étape" },
    {
      type: "p",
      text: "Avant de toucher aux réglages, regarde ce que chaque langue te demande. Pour notre chaîne de restauration de meubles, voilà le partage du travail.",
    },
    {
      type: "table",
      caption: "Ce qui est automatique et ce que tu fournis, pour une chaîne en français",
      headers: ["Élément", "Qui le produit", "Ce que tu fournis"],
      rows: [
        ["Piste audio anglaise", "YouTube (doublage automatique) ou toi", "Rien, ou ton propre fichier audio"],
        ["Piste audio espagnole, allemande, etc.", "Toi, avec un outil de doublage IA ou une voix humaine", "Un fichier audio à peu près de la durée de la vidéo"],
        ["Titre et description traduits", "Toi", "Le texte, saisi dans YouTube Studio"],
        ["Miniature localisée (vidéos longues)", "Toi", "Une image par langue"],
        ["Sous-titres automatiques", "YouTube, dans la langue de la piste d'origine", "Tes propres sous-titres si tu veux d'autres langues"],
      ],
      source: [
        { label: "Aide YouTube, doublage automatique", href: YT_DOUBLAGE },
        { label: "Aide YouTube, fonctionnalités multilingues", href: YT_MULTILINGUE },
      ],
      verifieLe: CAPTURE,
    },
    {
      type: "ol",
      items: [
        "Choisis ta première langue avec des indices réels. YouTube décrit le bon candidat comme une chaîne qui a déjà une audience dans plusieurs pays ou qui reçoit souvent des commentaires dans d'autres langues. Pour une chaîne en français, l'anglais est le choix le moins coûteux puisque la plateforme le génère.",
        "Vérifie la langue d'origine déclarée sur tes vidéos et sur la chaîne. Si elle est fausse, la traduction part de travers.",
        "Coche la vérification manuelle des versions doublées, pour écouter avant que tes abonnés n'entendent.",
        "Écoute la piste anglaise d'une vidéo avec la liste de tes mots de métier sous les yeux, puis publie-la, ou supprime-la.",
        "Traduis le titre et la description de chaque vidéo doublée.",
        "Pour une deuxième langue, fabrique ta piste hors de YouTube et importe-la.",
        "Ajoute une miniature localisée si ta miniature contient du texte.",
        "Au bout de quelques semaines, compare les résultats par langue audio avant d'en ouvrir une autre.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : tiens un petit glossaire de dix à vingt mots de ton sujet avec leur traduction validée. Sur notre chaîne de meubles, « tenon », « mortaise » ou « gomme-laque » sont exactement le genre de jargon que YouTube annonce avoir du mal à traduire. Ce glossaire te sert à contrôler le doublage automatique et à briefer l'outil qui fabrique tes autres pistes.",
    },
    { type: "h3", id: "reglages-doublage", text: "Régler le doublage automatique avant la prochaine vidéo" },
    {
      type: "p",
      text: "Dans YouTube Studio, va dans Paramètres, Chaîne, Paramètres avancés. La case « Autoriser le doublage automatique » doit être cochée. Juste en dessous, coche « Vérifier manuellement les versions doublées avant de publier ». Sans elle, les versions doublées suivent tes paramètres de publication et peuvent sortir sans que tu les aies écoutées.",
    },
    {
      type: "p",
      text: "Pour écouter une version, ouvre Contenus, la vidéo, puis Langues, clique sur la langue et choisis-la dans le menu Aperçu sous le lecteur. La gestion des versions doublées (vérifier, publier, supprimer) se fait uniquement sur ordinateur. Certaines vidéos ne seront pas doublées du tout : plus de 120 minutes, presque pas de paroles, débit trop rapide, langue source non détectée, ou réclamation pour atteinte aux droits d'auteur.",
    },
    { type: "h3", id: "titres-descriptions", text: "Traduire le titre et la description" },
    {
      type: "p",
      text: "Une piste anglaise sous un titre français ne sera trouvée par personne. YouTube indique que ses systèmes de recherche lisent les titres et descriptions traduits pour répondre dans la langue du spectateur. La [page d'aide dédiée](" + YT_TITRES + ") décrit le chemin : YouTube Studio, la vidéo, Ajouter une langue, puis Ajouter sous « Titre et description ». Elle parle encore du menu Sous-titres, les pages plus récentes l'appellent Langues.",
    },
    {
      type: "screenshot",
      src: `${IMG}-titres-descriptions.webp`,
      alt: "Page de l'Aide YouTube « Traduire les titres et les descriptions de vos vidéos » avec le début des étapes dans YouTube Studio : menu de gauche, sélection de la vidéo, bouton Ajouter une langue",
      caption: "Les étapes officielles pour ajouter un titre et une description traduits, sans lesquels ta piste doublée reste invisible dans la recherche.",
      source: YT_TITRES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Ne colle pas une traduction mot à mot. « Restaurer une commode Louis-Philippe » ne dit rien à un spectateur américain. Demande à ton assistant IA trois titres dans la langue cible, écrits pour quelqu'un qui n'a jamais entendu parler du style, puis choisis. Pour les sous-titres dans d'autres langues, la méthode est dans [mon guide des sous-titres automatiques par IA](/blog/sous-titres-automatiques-ia-video).",
    },
    { type: "h3", id: "piste-maison", text: "Importer ta propre piste pour une deuxième langue" },
    {
      type: "p",
      text: "L'audio multilingue est réservé aux chaînes qui ont accès aux fonctionnalités avancées. D'après [la page sur l'accès aux fonctionnalités](" + YT_ACCES + "), tu les obtiens soit par l'historique de ta chaîne, soit en validant ton identité avec une pièce d'identité ou une vidéo. Le statut se lit dans Paramètres, Chaîne, Accès aux fonctionnalités.",
    },
    {
      type: "screenshot",
      src: `${IMG}-audio-multilingue.webp`,
      alt: "Page de l'Aide YouTube « Ajouter des fonctionnalités multilingues à vos vidéos » expliquant l'audio multilingue : pistes choisies selon la langue préférée du spectateur, recherche sur les titres traduits, absence de doublage automatique",
      caption: "L'audio multilingue selon YouTube : tu importes tes pistes, la plateforme choisit laquelle lancer selon la langue préférée du spectateur.",
      source: YT_MULTILINGUE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La piste, tu la fabriques ailleurs. Un outil de doublage IA part de ta vidéo et te rend une voix dans la langue cible (j'en présente un dans [le guide complet d'ElevenLabs](/blog/elevenlabs-guide-complet)), ou tu fais lire la traduction par quelqu'un qui parle la langue. Dans les deux cas, exporte un fichier audio seul, à peu près de la même durée que la vidéo : c'est la condition posée par YouTube.",
    },
    {
      type: "p",
      text: "Ensuite, dans YouTube Studio sur ordinateur : Langues, la vidéo, Ajouter une langue, puis Ajouter à côté de « Version doublée », Sélectionner un fichier, Publier. Garde la même musique et les mêmes extraits que dans la piste d'origine. YouTube prévient qu'un fichier peut être supprimé si le contenu protégé détecté dans la piste secondaire diffère de l'audio d'origine.",
    },
    {
      type: "p",
      text: "Dernier détail pour les vidéos longues : la miniature localisée. Dans Langues, clique sur le nom de la langue, puis Ajouter à côté de « Miniature ». Si ta miniature affiche « AVANT / APRÈS » en gros, la version espagnole mérite son « ANTES / DESPUÉS ». Les règles de lisibilité restent celles de [ma méthode de test des miniatures](/blog/miniature-youtube-strategie-ctr).",
    },
    { type: "h3", id: "suivi-langue", text: "Suivre les résultats par langue audio" },
    {
      type: "p",
      text: "YouTube Analytics affiche les vues et la durée de visionnage par langue audio, et c'est là que tu sauras si la langue valait le travail. YouTube avance que les créateurs qui ont ajouté des pistes multilingues ont vu plus de 25 % de leur durée de visionnage venir d'une autre langue que celle de la vidéo. C'est un chiffre de la plateforme, sans détail sur l'échantillon, donc prends-le comme un ordre de grandeur possible et regarde tes propres courbes.",
    },
    {
      type: "p",
      text: "La même page recommande de te concentrer sur une ou deux langues et d'y doubler, si tu peux, au moins la moitié de tes vidéos existantes. Je suis d'accord avec les deux. Un spectateur espagnol qui tombe sur une vidéo doublée et trouve le reste de la chaîne en français ne s'abonnera pas.",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui ruinent une chaîne YouTube multilingue" },
    { type: "h3", id: "erreur-publier-sans-ecouter", text: "Laisser publier le doublage automatique sans l'écouter" },
    {
      type: "p",
      text: "Symptôme : un commentaire en anglais te signale que ta « gomme-laque » est devenue un chewing-gum, six mois après la mise en ligne. YouTube reconnaît des erreurs possibles sur les noms propres, les expressions idiomatiques, le jargon, les accents et la synchronisation. Fix concret : vérification manuelle cochée, écoute des deux premières minutes et de tous les passages techniques, glossaire à la main. Une piste ratée se supprime, elle ne se corrige pas.",
    },
    { type: "h3", id: "erreur-langue-origine", text: "Une langue d'origine mal déclarée" },
    {
      type: "p",
      text: "Symptôme : toute la piste anglaise est absurde, du début à la fin. C'est souvent une vidéo déclarée en anglais alors que tu parles français. Fix concret : corrige la langue d'origine de la vidéo. D'après l'Aide YouTube, les versions doublées sont alors regénérées automatiquement.",
    },
    { type: "h3", id: "erreur-cinq-langues", text: "Ouvrir cinq langues le même mois" },
    {
      type: "p",
      text: "Symptôme : douze vidéos en espagnol, quatre en allemand, deux en portugais, et aucune langue où un nouveau spectateur peut enchaîner trois vidéos. Fix concret : une langue à la fois, en commençant par tes dix vidéos les plus regardées, et la suivante seulement quand l'Analytics par langue audio montre que la première prend.",
    },
    { type: "h3", id: "erreur-titre-francais", text: "Doubler l'audio et garder le titre en français" },
    {
      type: "p",
      text: "Symptôme : la piste existe, personne ne l'écoute. Le spectateur étranger cherche dans sa langue, lit des titres dans sa langue, clique sur une miniature qu'il comprend. Fix concret : chaque piste publiée part avec son titre, sa description et, si la miniature contient du texte, sa miniature localisée. Publie les trois ensemble.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Produire des vidéos qui méritent d'être traduites",
      text: "Dans ma formation IA gratuite, je montre comment fabriquer des images et des vidéos propres avec les outils du moment, étape par étape, même si tu débutes.",
    },
    {
      type: "p",
      text: "Ce soir, ouvre les paramètres avancés de ta chaîne, coche la vérification manuelle, puis va écouter la piste anglaise de ta vidéo la plus vue. Si elle tient la route, traduis son titre et publie. Si elle te fait grimacer, tu sais maintenant comment la remplacer par la tienne.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 17 novembre 2026 quatre pages de l'Aide YouTube en français (doublage automatique, fonctionnalités multilingues, traduction des titres et descriptions, accès aux fonctionnalités) et j'en ai capturé trois le même jour.",
        "La chaîne de restauration de meubles est un cas d'illustration construit pour l'article, tout comme l'exemple de la gomme-laque mal traduite.",
      ],
      teste: [
        "La lecture du tableau des langues du doublage automatique, langue source par langue source",
        "La lecture des étapes d'import d'une piste audio, d'un titre traduit et d'une miniature localisée",
      ],
      nonTeste: [
        "L'import d'une piste audio sur une chaîne réelle pour cet article",
        "La qualité du doublage automatique du français vers l'anglais sur un contenu technique",
        "La synchronisation labiale expérimentale, réservée à certaines chaînes",
      ],
      sources: [
        { label: "Aide YouTube, utiliser le doublage automatique", href: YT_DOUBLAGE },
        { label: "Aide YouTube, ajouter des fonctionnalités multilingues à vos vidéos", href: YT_MULTILINGUE },
        { label: "Aide YouTube, traduire les titres et les descriptions de vos vidéos", href: YT_TITRES },
        { label: "Aide YouTube, l'accès aux fonctionnalités pour les créateurs", href: YT_ACCES },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-17 -->
