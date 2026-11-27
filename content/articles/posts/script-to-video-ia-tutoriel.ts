import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-21";
const IMG = "/images/articles/script-to-video-ia-tutoriel";

export const scriptToVideoIaTutoriel: Article = {
  title: "Script to video IA : de la page au court métrage",
  slug: "script-to-video-ia-tutoriel",
  description:
    "Transformer un script en vidéo IA : une page de scénario découpée en 12 plans, les prompts, le budget en crédits Google Flow et le montage, étape par étape.",
  excerpt:
    "Une page de scénario, douze plans, une minute de film. Le tutoriel complet pour passer du script à la vidéo IA, avec le vrai budget en crédits et les outils qui relient l'écriture à la production.",
  category: "ia-video",
  tags: ["script to video", "vidéo ia", "court métrage", "google flow", "découpage", "tutoriel"],
  date: "2026-10-21",
  updatedAt: "2026-10-21",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/script-to-video-ia-tutoriel.webp",
  imageAlt:
    "Dans l'arrière-boutique d'une boulangerie de village avant l'aube, une réalisatrice aux cheveux roux bouclés, assise sur des sacs de farine, relit une page de scénario aux numéros de plans entourés au crayon rouge, pendant qu'un jeune apprenti enfourne des pains devant le four allumé",
  keywords: [
    "script to video ia",
    "transformer un script en vidéo ia",
    "scénario en vidéo ia",
    "court métrage ia tutoriel",
    "découpage technique ia",
  ],
  relatedSlugs: ["storyboard-ia-gratuit-tutoriel", "creer-film-ia", "raccord-continuite-plans-ia"],
  howTo: {
    name: "Transformer un script d'une page en court métrage IA",
    description: "Écrire une page qui se filme, la découper en plans, fixer les références, générer plan par plan puis monter.",
    totalTime: "PT6H",
    steps: [
      { name: "Écrire une page qui se filme", text: "Une seule scène, des actions visibles, deux répliques au maximum.", anchor: "etape-1" },
      { name: "Découper en plans", text: "Une ligne par plan : valeur, action, durée à l'écran, son.", anchor: "etape-2" },
      { name: "Fixer personnages et décor", text: "Une image de référence par personnage et par lieu, réutilisée à chaque plan.", anchor: "etape-3" },
      { name: "Générer plan par plan", text: "Les plans clés d'abord, un prompt court par plan, l'image de départ jointe.", anchor: "etape-4" },
      { name: "Monter et poser le son", text: "Assembler dans l'ordre, rogner, puis voix, ambiance et musique dans un logiciel de montage.", anchor: "etape-5" },
    ],
  },
  faq: [
    {
      question: "Existe-t-il une IA qui transforme un script en film en un clic ?",
      answer:
        "Pour une vidéo avec présentateur, oui : HeyGen ou Synthesia prennent un texte et rendent une vidéo d'avatar. Pour une fiction, aucun outil ne livre un court métrage regardable sans que tu valides les plans un par un. Même les outils qui génèrent le découpage depuis le script, comme LTX Studio ou ScreenWeaver, te laissent choisir et relancer chaque plan.",
    },
    {
      question: "Combien de plans pour une page de scénario ?",
      answer:
        "Une page correspond à peu près à une minute à l'écran, d'après la règle d'usage du format scénario. Avec des plans de 4 à 8 secondes, une page donne entre 10 et 15 plans. L'exemple de ce tutoriel en compte 12 pour 60 secondes.",
    },
    {
      question: "Peut-on transformer un script en vidéo IA gratuitement ?",
      answer:
        "Oui, lentement. Sans abonnement, Google Flow donne 50 crédits par jour, non reportés, et une vidéo Veo 3.1 Lite coûte 10 crédits par génération hors abonnement Ultra. Ça fait 5 générations par jour : compte cinq jours pour 12 plans avec une reprise chacun.",
    },
    {
      question: "Comment garder le même personnage dans tous les plans ?",
      answer:
        "Crée d'abord une image de référence du personnage, puis lance chaque plan en image vers vidéo avec cette image ou une image tirée du plan précédent. Flow permet d'enregistrer une image d'une vidéo pour la réutiliser comme image de départ. Écrire « le même personnage » dans le prompt ne suffit pas.",
    },
    {
      question: "Faut-il générer les dialogues avec l'IA ?",
      answer:
        "Pour un premier court, je te conseille d'enregistrer les répliques à part, avec ta voix, un comédien ou une voix de synthèse, puis de les caler au montage. Tu gardes la main sur le jeu et sur la prononciation du français, que je n'ai pas vérifiée sur chaque modèle.",
    },
    {
      question: "ScreenWeaver transforme-t-il un script en vidéo ?",
      answer:
        "Oui, dans l'offre Auteur à 39,99 $ par mois : le découpage et le storyboard sont générés depuis le scénario, puis la production vidéo se fait dans le même projet, plan par plan. L'offre gratuite Screenwriter couvre seulement l'écriture. Je suis co-fondateur de ScreenWeaver.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Un script devient une vidéo IA plan par plan, jamais d'un bloc. Pour une fiction, la méthode qui marche tient en cinq étapes : tu écris une page qui se filme, tu la découpes en une douzaine de plans de 4 à 8 secondes, tu fixes une image de référence par personnage, tu génères chaque plan à partir de cette image, puis tu montes et tu poses le son. Une page donne environ une minute de film. Ce tutoriel suit un exemple complet, avec les prompts et le budget en crédits relevé le 21 octobre 2026.",
    },
    {
      type: "p",
      text: "Si tu tapes « script to video » dans un moteur de recherche, tu tombes surtout sur des générateurs d'avatars et des outils de montage automatique. Ils font très bien leur travail, mais ce travail n'a rien à voir avec un court métrage. On commence donc par trier.",
    },
    { type: "h2", id: "trois-familles", text: "Quel outil « script to video » pour quel script ?" },
    {
      type: "p",
      text: "Avant de payer quoi que ce soit, regarde ce que ton script raconte. Un texte lu face caméra et une scène entre deux personnages n'appellent pas du tout le même outil.",
    },
    {
      type: "comparison",
      caption: "Les trois familles d'outils « script to video » et ce qu'elles fabriquent",
      headers: ["Famille", "Exemples", "Ce que tu colles", "Ce que tu obtiens", "Bon pour"],
      rows: [
        ["Avatar", "HeyGen, Synthesia", "Un texte à dire", "Un présentateur virtuel qui lit ton texte", "Formation, tuto, message d'entreprise"],
        ["Montage auto", "FlexClip, Filmora", "Un texte découpé en scènes", "Des scènes en images de banque, voix off, sous-titres", "Vidéo explicative, réseaux sociaux"],
        ["Plan par plan", "Google Flow, LTX Studio, ScreenWeaver", "Un scénario, puis un prompt ou une image par plan", "Des plans générés que tu montes", "Fiction, clip, court métrage"],
      ],
      source: [
        { label: "HeyGen, Script en vidéo", href: "https://www.heygen.com/fr-fr/tool/script-to-video-ai" },
        { label: "FlexClip, Script vers vidéo", href: "https://www.flexclip.com/fr/tools/script-to-video/" },
        { label: "LTX Studio", href: "https://ltx.io/studio" },
      ],
      verifieLe: CAPTURE,
      releveLabel: "Fonctionnalités relevées le",
    },
    {
      type: "gallery",
      caption: "Deux pages « script to video » relevées le même jour : un avatar d'un côté, des scènes de banque d'images de l'autre.",
      items: [
        {
          src: `${IMG}-heygen.webp`,
          alt: "Page Script en vidéo de HeyGen en français : titre Générateur de vidéos en ligne à partir de scripts et fenêtre Generate script with AI",
          caption: "HeyGen : tu colles ton script, tu choisis un présentateur, tu télécharges la vidéo.",
          source: "https://www.heygen.com/fr-fr/tool/script-to-video-ai",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
        {
          src: `${IMG}-flexclip.webp`,
          alt: "Page Générateur Scripts vers Vidéo IA de FlexClip : liste de scènes numérotées, onglets AI Script et Existing Script",
          caption: "FlexClip : le texte est réparti en scènes, chacune illustrée et narrée.",
          source: "https://www.flexclip.com/fr/tools/script-to-video/",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
      ],
    },
    {
      type: "verdict",
      title: "Mon avis avant de commencer",
      pourQui: "Celles et ceux qui ont une histoire à raconter, même d'une minute, et veulent qu'elle ressemble à un film plutôt qu'à un diaporama.",
      forts: [
        "Tu décides de chaque cadre, donc le film te ressemble",
        "Faisable sans abonnement avec Google Flow, si tu étales la génération sur cinq jours",
      ],
      faibles: [
        "Aucun outil ne livre une fiction regardable en un clic",
        "La cohérence des personnages demande des images de référence à chaque plan",
        "Le son et les dialogues restent du travail de montage",
      ],
      verdict: "Pour une vidéo d'entreprise lue face caméra, prends un outil d'avatar et passe ton chemin. Pour une histoire, apprends le plan par plan : c'est plus long la première fois, et à mon avis c'est la seule méthode qui donne un vrai film.",
    },
    { type: "h2", id: "etape-1", text: "Étape 1 : écrire une page qui se filme" },
    {
      type: "p",
      text: "Le format scénario est calibré pour qu'une page fasse **à peu près une minute** à l'écran, comme le rappelle [l'article Screenplay de Wikipedia](https://en.wikipedia.org/wiki/Screenplay). C'est une estimation, mais elle suffit pour dimensionner ton projet. Pour un premier essai, vise une page, une scène, deux personnages au plus.",
    },
    {
      type: "p",
      text: "**N'écris que ce qu'une caméra peut voir ou entendre.** « Lina est triste » ne se génère pas. « Lina se fige, la plaque brûlante entre les mains » se génère. La page ci-dessous sert d'exemple à tout le tutoriel.",
    },
    {
      type: "quote",
      text: "INT. FOURNIL D'UNE BOULANGERIE DE VILLAGE. NUIT, 4 H 30. Lina, 19 ans, tablier trop grand, enfourne seule. Au mur, un calendrier, une date entourée en rouge. Le four sonne. Elle sort la première fournée : les miches sont noires sur le dessus. Lina se fige et regarde la porte. Marcel, 70 ans, entre en manteau. Il voit les pains, en tapote un du doigt. MARCEL : « Trop chaud de dix degrés. Comme moi à ton âge. » Il accroche son manteau, noue le vieux tablier resté au crochet. MARCEL : « On recommence. Une dernière. » Ils pétrissent côte à côte. EXT. PLACE DU VILLAGE. AUBE. La vitrine s'allume. Une première cliente attend déjà devant la porte.",
      cite: "La dernière fournée, page d'exemple écrite pour ce tutoriel",
    },
    {
      type: "p",
      text: "Deux répliques, un seul décor intérieur, un plan extérieur pour respirer. Tu n'as pas besoin de plus pour apprendre. Si tu veux muscler l'écriture avant de passer à l'image, mon guide pour [écrire un scénario avec l'IA](/blog/ecrire-scenario-ia-methode-outils) détaille la structure et les prompts de réécriture.",
    },
    { type: "h2", id: "etape-2", text: "Étape 2 : découper la page en 12 plans" },
    {
      type: "p",
      text: "Le découpage transforme ta page en liste de tournage. Une ligne par plan, avec la valeur de cadre, ce qu'on voit, la durée à l'écran et le son. C'est ce tableau que tu suivras pendant la génération, et c'est lui qui t'évite de produire 40 clips au hasard.",
    },
    {
      type: "table",
      caption: "Le découpage de La dernière fournée : 12 plans, 60 secondes",
      headers: ["Plan", "Valeur", "Ce qu'on voit", "Durée", "Son"],
      rows: [
        ["1", "Plan large", "Fournil de nuit, Lina enfourne seule", "6 s", "Ronronnement du four"],
        ["2", "Insert", "Calendrier, une date entourée en rouge", "4 s", "Tic-tac d'horloge"],
        ["3", "Plan moyen", "Lina sort la plaque, pains noircis", "5 s", "Sonnerie du four"],
        ["4", "Gros plan", "Son visage se fige", "3 s", "Silence"],
        ["5", "Plan d'ensemble", "La porte s'ouvre, Marcel en manteau", "6 s", "Porte, vent"],
        ["6", "Insert", "Le doigt de Marcel tapote une croûte brûlée", "4 s", "Toc sourd"],
        ["7", "Plan rapproché", "Marcel, première réplique", "5 s", "Dialogue"],
        ["8", "Insert", "Manteau au crochet, mains qui nouent le tablier", "4 s", "Tissu"],
        ["9", "Plan rapproché", "Marcel, deuxième réplique", "4 s", "Dialogue"],
        ["10", "Plan large", "Les deux pétrissent côte à côte", "6 s", "Pâte, souffle"],
        ["11", "Plan large ext.", "Place à l'aube, la vitrine s'allume", "5 s", "Oiseaux, ville qui s'éveille"],
        ["12", "Plan moyen ext.", "Une cliente attend devant la porte", "8 s", "Musique de fin"],
      ],
    },
    {
      type: "p",
      text: "La colonne durée compte plus que tu ne crois. Dans Google Flow, les modèles Veo 3.1 génèrent des clips de **4, 6 ou 8 secondes**, d'après la page d'aide de Google. Tu génères donc à la longueur juste au-dessus de ta durée cible, et tu rognes au montage. Un plan de 5 secondes se génère en 6.",
    },
    {
      type: "screenshot",
      src: `${IMG}-flow-durees.webp`,
      alt: "Aide Google Flow en français : fonctionnalités prises en charge dans Veo 3.1 Lite, texte vers vidéo et images vers vidéo, durées de 4 s, 6 s et 8 s",
      caption: "Les durées possibles par modèle sont listées dans l'aide de Flow. Gemini Omni Flash monte à 10 secondes.",
      source: "https://support.google.com/flow/answer/16352836?hl=fr",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Si tu préfères dessiner tes plans avant de générer de la vidéo, fais d'abord une planche : mon [tutoriel de storyboard IA gratuit](/blog/storyboard-ia-gratuit-tutoriel) part exactement de ce genre de tableau.",
    },
    { type: "h2", id: "etape-3", text: "Étape 3 : fixer personnages et décor avant de générer" },
    {
      type: "p",
      text: "Un modèle vidéo ne se souvient pas du plan précédent. Si tu lances douze prompts texte, tu obtiens douze Lina différentes. La parade consiste à créer **une image de référence par personnage et par lieu**, puis à démarrer chaque plan à partir d'une image plutôt que d'un texte seul.",
    },
    {
      type: "p",
      text: "Pour l'exemple, il en faut quatre. Lina de face, en pied, tablier trop grand, cheveux attachés, sous une lumière neutre : tu la valides une fois et tu ne la regénères plus. Marcel en manteau de laine, puis Marcel en tablier pour la fin de la scène. Et le fournil vide, four allumé, plan de travail fariné, qui sert de fond aux plans 1, 3, 5 et 10.",
    },
    {
      type: "p",
      text: "Flow ajoute un outil précieux pour les raccords : tu peux mettre une vidéo en pause, **enregistrer l'image** et la réutiliser comme image de départ ou de fin d'une génération suivante. La fin du plan 5 (Marcel dans l'encadrement de la porte) devient ainsi le départ du plan 7. Pour aller plus loin sur ce sujet, j'ai écrit un guide complet sur [le raccord entre plans IA](/blog/raccord-continuite-plans-ia).",
    },
    {
      type: "screenshot",
      src: `${IMG}-flow-scenebuilder.webp`,
      alt: "Aide Google Flow en français : enregistrer une image d'une vidéo comme composant ou image de départ, puis section Construire votre scène avec Scenebuilder",
      caption: "Enregistrer une image d'un clip pour lancer le suivant, puis assembler les clips dans Scenebuilder : les deux fonctions dont tu as besoin, sur la même page d'aide.",
      source: "https://support.google.com/flow/answer/16935718?hl=fr",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    { type: "h2", id: "etape-4", text: "Étape 4 : générer plan par plan, sans vider tes crédits" },
    {
      type: "p",
      text: "Commence par les plans qui portent la scène : le 4 (le visage de Lina), le 7 (Marcel parle) et le 12 (la fin). Si ceux-là ne fonctionnent pas, inutile de dépenser des crédits sur les inserts. Un prompt par plan, court, qui décrit le cadre, l'action et la lumière, avec l'image de référence jointe.",
    },
    {
      type: "ol",
      items: [
        "Plan 1 : « Plan large, fournil de boulangerie de village la nuit, une jeune femme en tablier trop grand glisse des pâtons dans un four à soles allumé, lumière orange du four, caméra fixe, ambiance silencieuse. »",
        "Plan 4 : « Gros plan sur le visage de la jeune femme de l'image jointe, elle se fige, le regard vers une porte hors champ, lumière chaude du four sur la joue, très légère poussée de caméra. »",
        "Plan 7 : « Plan rapproché, homme de 70 ans en manteau de laine dans un fournil, il regarde un pain brûlé puis lève les yeux avec un demi-sourire, lumière chaude, arrière-plan flou. »",
        "Plan 12 : « Plan moyen extérieur à l'aube, place de village, une femme en manteau attend devant la porte d'une boulangerie dont la vitrine vient de s'allumer, lumière bleue du petit matin, caméra fixe. »",
      ],
    },
    {
      type: "p",
      text: "Remarque que le plan 7 ne contient pas la réplique. Je génère le jeu (le regard, le sourire) et j'ajoute la voix au montage. Tu gardes ainsi la main sur le texte exact et sur la prononciation française, que je n'ai pas vérifiée modèle par modèle.",
    },
    { type: "h3", id: "budget", text: "Le budget réel en crédits Google Flow" },
    {
      type: "p",
      text: "Sans abonnement, l'aide de Flow annonce **50 crédits par jour**, non reportés au lendemain. Une génération Veo 3.1 Lite coûte **10 crédits** pour qui n'est pas abonné à Ultra, Veo 3.1 Fast 20, Veo 3.1 Qualité 100. Attention à une phrase de la même page : une seule requête peut produire deux vidéos, et chaque vidéo est facturée. Regarde le nombre de sorties avant de cliquer.",
    },
    {
      type: "table",
      caption: "Ce que coûtent les 12 plans de l'exemple dans Google Flow (calcul à partir du barème officiel)",
      headers: ["Scénario", "Générations", "Crédits", "Sans abonnement (50 / jour)"],
      rows: [
        ["12 plans du premier coup, Veo 3.1 Lite", "12", "120", "3 jours"],
        ["12 plans + 1 reprise chacun, Veo 3.1 Lite", "24", "240", "5 jours"],
        ["12 plans + 1 reprise chacun, Veo 3.1 Fast", "24", "480", "10 jours"],
      ],
      source: { label: "Aide Google Flow, crédits", href: "https://support.google.com/flow/answer/16526234?hl=fr" },
      verifieLe: CAPTURE,
    },
    {
      type: "screenshot",
      src: `${IMG}-flow-credits.webp`,
      alt: "Aide Google Flow : tableau des coûts en crédits par génération, Veo 3.1 Lite à 10 crédits pour les non-abonnés à Ultra, Veo 3.1 Fast à 20",
      caption: "Le barème est par génération, pas par requête. Google précise que ces limites peuvent changer à tout moment.",
      source: "https://support.google.com/flow/answer/16526234?hl=fr",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "> Pro Tip : garde un fichier texte avec, pour chaque plan, le prompt exact et l'image de départ utilisée. Le jour où un plan doit être refait, tu relances la même recette au lieu de réinventer un prompt qui ne raccordera plus.",
    },
    { type: "h2", id: "etape-5", text: "Étape 5 : monter, puis poser le son" },
    {
      type: "p",
      text: "Dans Flow, Scenebuilder suffit pour un premier assemblage : tu ajoutes les clips à une scène, tu les réordonnes, tu rognes début et fin avec des poignées, tu regardes la séquence entière et tu la télécharges. Regarde-la sans le son. Si l'histoire se comprend, ton découpage tient.",
    },
    {
      type: "p",
      text: "Le son, en revanche, se travaille dans un vrai logiciel de montage. Ordre conseillé : les deux répliques de Marcel calées sur les plans 7 et 9, l'ambiance du fournil sous toute la scène, les bruits précis (sonnerie du four, porte, toc sur la croûte), puis la musique sur le plan 12 seulement. Mon comparatif pour [monter une vidéo IA dans CapCut ou DaVinci Resolve](/blog/monter-video-ia-capcut-davinci) t'aide à choisir l'outil, et le guide de la [voix off IA](/blog/voix-off-ia-guide) couvre l'enregistrement des répliques.",
    },
    { type: "h2", id: "outils-relies", text: "Quand passer à un outil qui relie le script à la vidéo" },
    {
      type: "p",
      text: "La méthode à la main a une limite : rien ne relie ton tableau de découpage au scénario. Si tu réécris la réplique de Marcel, tu mets à jour la page, le tableau, le prompt et le fichier de recettes. Pour une page, on s'en sort. Pour un court de dix pages, tu passes tes soirées à recopier au lieu de réaliser. Deux outils partent du script lui-même.",
    },
    { type: "h3", id: "ltx-studio", text: "LTX Studio : le script découpé en scènes et storyboard" },
    {
      type: "p",
      text: "LTX Studio propose de partir d'un script qu'il découpe en scènes et en storyboard. Le plan Free donne 800 crédits une seule fois, une licence d'usage personnel et des storyboards vierges. Les **storyboards IA**, les éléments persistants pour la cohérence des personnages et la licence commerciale arrivent avec Standard, à 35 € par mois ou 28 € par mois en annuel (336 € l'année). Veo 3.1 n'est proposé qu'en Pro.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ltx-script.webp`,
      alt: "Page LTX Studio, section Choose your starting point : option From Script, Upload your script to instantly generate scenes and storyboards",
      caption: "Le point de départ « From Script » de LTX Studio : le script est importé puis découpé en scènes et storyboard.",
      source: "https://ltx.io/studio",
      capturedAt: CAPTURE,
      width: 1440,
      height: 390,
    },
    {
      type: "screenshot",
      src: `${IMG}-ltx-tarifs.webp`,
      alt: "Page tarifs de LTX Studio en euros, facturation annuelle : Free 0 €, Lite 12 €, Standard 28 € avec AI Storyboards et licence commerciale, Pro 100 € avec Veo 3.1",
      caption: "Les storyboards IA et la licence commerciale ne commencent qu'au plan Standard.",
      source: "https://ltx.io/studio/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    { type: "h3", id: "screenweaver", text: "ScreenWeaver : écriture, découpage et production dans le même projet" },
    {
      type: "p",
      text: "Je dois être transparent : je suis co-fondateur de ScreenWeaver, donc lis ce paragraphe en le sachant. L'outil a trois onglets par projet, Script, Storyboard et Production. Tu écris ou importes ton scénario (Final Draft, Fountain, WriterDuet), le découpage technique est généré à partir du texte, tu contrôles chaque plan (cadre, angle, mouvement, durée), puis la production se fait sur un canvas de nodes déjà câblés depuis le scénario. On y trouve plusieurs modèles vidéo, dont Seedance 2.5 par défaut, Veo 3.1 et Kling 3.0, et depuis le 20 octobre on peut extraire la première ou la dernière image d'un clip pour lancer le plan suivant.",
    },
    {
      type: "screenshot",
      src: `${IMG}-screenweaver.webp`,
      alt: "Page d'accueil française de ScreenWeaver : titre Du scénario au storyboard, du storyboard au film, et mention Le pipeline de production IA disponible",
      caption: "La promesse de ScreenWeaver tient dans son titre : le scénario, le storyboard et le film dans le même outil.",
      source: "https://www.screenweaver.ai/fr",
      capturedAt: CAPTURE,
      width: 1440,
      height: 780,
    },
    {
      type: "p",
      text: "Côté prix, l'offre Screenwriter est gratuite mais couvre seulement l'écriture. Le découpage, le storyboard généré et la production vidéo demandent l'offre Auteur, à **39,99 $ par mois pour 6 000 crédits**. Le coût en crédits de chaque génération n'est pas publié sur le site : je ne peux donc pas te dire combien de plans tiennent dans un mois. C'est avec cet outil qu'ont été faits tous les épisodes de Lost Garden, du scénario à la production.",
    },
    {
      type: "screenshot",
      src: `${IMG}-screenweaver-tarifs.webp`,
      alt: "Section tarifs de ScreenWeaver en français : Screenwriter 0 $, Auteur 39,99 $ par mois pour 6 000 crédits, Studio 149,99 $ par mois pour 25 000 crédits",
      caption: "Trois offres : l'écriture gratuite, le pipeline complet en Auteur, la collaboration en Studio.",
      source: "https://www.screenweaver.ai/fr",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    { type: "h2", id: "erreurs", text: "Les quatre erreurs qui ruinent un premier script to video" },
    { type: "h3", id: "erreur-scenario-long", text: "Commencer par un scénario de dix pages" },
    {
      type: "p",
      text: "Symptôme : au bout d'une semaine tu as 80 clips, aucun montage et plus de crédits. Fix concret : une page, une scène. Tu finis le film, tu le regardes, et seulement ensuite tu écris la deuxième page.",
    },
    { type: "h3", id: "erreur-prompt-geant", text: "Mettre toute la scène dans un seul prompt" },
    {
      type: "p",
      text: "Symptôme : un clip de 8 secondes où tout arrive en même temps, la porte, les pains, la réplique. Fix concret : une action par plan. Si ton prompt contient deux verbes d'action importants, il y a probablement deux plans.",
    },
    { type: "h3", id: "erreur-sans-reference", text: "Générer sans image de référence" },
    {
      type: "p",
      text: "Symptôme : Marcel change de nez entre le plan 5 et le plan 7. Fix concret : démarre chaque plan d'un personnage depuis son image validée ou depuis une image extraite du plan précédent. Le guide sur [le personnage cohérent en IA](/blog/personnage-coherent-ia) détaille la fiche à préparer.",
    },
    { type: "h3", id: "erreur-son", text: "Garder le son généré par défaut" },
    {
      type: "p",
      text: "Symptôme : chaque plan a sa propre ambiance, et la coupe s'entend à chaque raccord. Fix concret : coupe le son des clips au montage, puis pose une seule ambiance continue sous toute la scène et ajoute les bruits précis par-dessus.",
    },
    { type: "h2", id: "et-ensuite", text: "Et après la première minute ?" },
    {
      type: "p",
      text: "Quand ta page tient debout, tu sais faire le plus dur : passer d'un texte à des plans qui racontent quelque chose. La suite, c'est de l'écriture, du rythme et de la patience. Mon article sur [la méthode pour créer un film avec l'IA](/blog/creer-film-ia) prend le relais pour les projets plus longs, de la structure au montage.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "script",
      title: "Écris ta page dans un vrai éditeur de scénario",
      text: "L'offre Screenwriter de ScreenWeaver est gratuite pour écrire. Le jour où tu veux générer le découpage et produire les plans au même endroit, l'offre Auteur prend le relais.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 21 octobre 2026 les pages officielles citées : l'aide Google Flow sur les modèles et durées, sur les crédits et sur Scenebuilder, la page d'accueil et la page tarifs de LTX Studio, les pages « script en vidéo » de HeyGen et de FlexClip, la page d'accueil et la section tarifs de ScreenWeaver. Les captures viennent de ces pages publiques, prises le même jour, bannières de cookies refusées ou masquées, jamais acceptées.",
        "Le scénario La dernière fournée, le découpage et les prompts sont des modèles écrits pour cet article. Je n'ai lancé aucune génération pour l'écrire : les durées et coûts viennent des barèmes officiels, les jours de crédits sont des calculs.",
      ],
      nonTeste: [
        "Le rendu des prompts de l'exemple dans Veo 3.1 Lite ou dans un autre modèle",
        "La qualité des dialogues générés en français par chaque modèle",
        "Le nombre de plans qu'un mois de crédits ScreenWeaver ou LTX Studio permet de produire",
      ],
      sources: [
        { label: "Aide Google Flow, modèles et fonctionnalités", href: "https://support.google.com/flow/answer/16352836?hl=fr" },
        { label: "Aide Google Flow, crédits", href: "https://support.google.com/flow/answer/16526234?hl=fr" },
        { label: "Aide Google Flow, modifier des vidéos et créer des scènes", href: "https://support.google.com/flow/answer/16935718?hl=fr" },
        { label: "LTX Studio, tarifs", href: "https://ltx.io/studio/pricing" },
        { label: "ScreenWeaver, tarifs", href: "https://www.screenweaver.ai/fr" },
        { label: "Wikipedia, Screenplay", href: "https://en.wikipedia.org/wiki/Screenplay" },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-21 -->
