import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-20";
const IMG = "/images/articles/storyboard-ia-gratuit-tutoriel";

export const storyboardIaGratuitTutoriel: Article = {
  title: "Storyboard IA gratuit : le tutoriel étape par étape",
  slug: "storyboard-ia-gratuit-tutoriel",
  description:
    "Faire un storyboard avec l'IA sans payer : découpage, fiche personnage, cases générées dans Gemini, planche montée dans Boords Free ou Krita. Limites réelles.",
  excerpt:
    "Une scène de six plans, trois outils gratuits et les vraies limites de chacun : 8 crédits d'essai chez Boords, un quota Gemini qui se recharge toutes les cinq heures, un filigrane sur le PDF. Le tutoriel complet, prompts compris.",
  category: "workflow-creatif",
  tags: ["storyboard", "storyboard ia", "gratuit", "gemini", "boords", "krita", "tutoriel"],
  date: "2026-10-20",
  updatedAt: "2026-10-20",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/storyboard-ia-gratuit-tutoriel.webp",
  imageAlt:
    "La nuit dans une laverie automatique, une jeune étudiante en bonnet vert et veste en velours côtelé tient une planche de storyboard imprimée de cases numérotées, une deuxième planche scotchée sur la table à côté d'un gobelet de café, les hublots des machines allumés et la rue mouillée derrière la vitrine",
  keywords: [
    "storyboard ia gratuit",
    "faire un storyboard avec l'ia",
    "générateur de storyboard gratuit",
    "storyboard gemini",
    "boords gratuit",
  ],
  relatedSlugs: ["creer-storyboard-ia", "meilleurs-outils-storyboard-ia", "personnage-coherent-ia"],
  howTo: {
    name: "Faire un storyboard avec l'IA gratuitement",
    description: "Découper une scène, créer une fiche personnage, générer les cases dans Gemini et monter la planche dans Boords Free ou Krita.",
    totalTime: "PT2H",
    steps: [
      { name: "Découper la scène en plans", text: "Écris la scène, puis une ligne par plan : valeur de plan, ce qu'on voit, ce qui bouge.", anchor: "etape-1" },
      { name: "Créer la fiche personnage", text: "Génère une image de référence du personnage, de face, en pied, sur fond neutre.", anchor: "etape-2" },
      { name: "Générer les cases", text: "Dans Gemini, joins la fiche personnage et demande chaque plan avec un prompt court.", anchor: "etape-3" },
      { name: "Monter la planche", text: "Importe les images dans Boords Free ou dans le panneau Storyboard de Krita, dans l'ordre du découpage.", anchor: "etape-4" },
      { name: "Relire et exporter", text: "Vérifie la continuité case par case, régénère ce qui cloche, puis exporte en PDF.", anchor: "etape-5" },
    ],
  },
  faq: [
    {
      question: "Peut-on faire un storyboard avec l'IA entièrement gratuitement ?",
      answer:
        "Oui, pour une scène courte. Tu génères les images dans l'appli Gemini sans abonnement, puis tu montes la planche dans Boords Free ou dans Krita. Il faut accepter des limites : un quota Gemini non chiffré, un filigrane Boords sur les PDF du plan gratuit, et une résolution réduite si tu génères dans Boords.",
    },
    {
      question: "Combien d'images gratuites donne Boords ?",
      answer:
        "Le plan Free donne 8 crédits d'image IA, une seule fois, sans carte bancaire. Une image, une variante, un restylage ou un recadrage coûtent chacun un crédit. Les cadres où tu importes tes propres images sont illimités, dans la limite de 5 storyboards actifs.",
    },
    {
      question: "Combien d'images peut-on générer avec Gemini gratuitement ?",
      answer:
        "Google ne donne pas de chiffre. Son aide parle de limites standards sans forfait, recalculées toutes les cinq heures jusqu'à une limite hebdomadaire. Le compteur est visible dans les paramètres de gemini.google.com, rubrique des limites d'utilisation.",
    },
    {
      question: "Comment garder le même personnage d'une case à l'autre ?",
      answer:
        "Joins une image de référence à chaque génération. Boords l'écrit dans sa documentation : l'IA ne se souvient pas des cases précédentes, et écrire « le même personnage » sans référence ne suffit pas. Le principe vaut pour Gemini : recolle ta fiche personnage à chaque plan.",
    },
    {
      question: "ScreenWeaver est-il gratuit pour faire un storyboard ?",
      answer:
        "Non. L'offre gratuite Screenwriter couvre l'écriture : éditeur de scénario, séquencier, moodboards, import et export. La génération du découpage technique et du storyboard démarre avec l'offre Auteur, à 39,99 $ par mois. Je suis co-fondateur de ScreenWeaver.",
    },
    {
      question: "Peut-on montrer un storyboard IA gratuit à un client ?",
      answer:
        "Pour une première intention, oui. Mais le PDF du plan gratuit de Boords porte un filigrane, et chaque outil a ses propres conditions d'utilisation des images générées : lis-les avant de facturer quoi que ce soit.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Oui, tu peux faire un storyboard avec l'IA sans sortir ta carte bancaire, à condition de découper le travail entre plusieurs outils. **Gemini** génère les cases, **Boords Free** ou **Krita** sert à monter la planche, et tu écris le découpage toi-même, à la main ou dans l'éditeur gratuit de ton choix. Aucun outil gratuit ne fait tout seul les trois étapes. Ce tutoriel suit une vraie scène de six plans, avec les prompts et les limites relevées le 20 octobre 2026.",
    },
    {
      type: "p",
      text: "Si tu cherches la méthode de fond (pourquoi un storyboard, comment penser les cadrages), elle est dans [mon guide pour créer un storyboard avec l'IA](/blog/creer-storyboard-ia). Ici, on fabrique.",
    },

    { type: "h2", id: "verdict", text: "Ce que le gratuit permet vraiment" },
    {
      type: "verdict",
      title: "Mon avis sur le storyboard IA gratuit",
      pourQui: "Les étudiants, les autodidactes et tous ceux qui veulent voir leur scène en images avant de payer un abonnement.",
      forts: [
        "Gemini génère des cases sans abonnement, avec une image de référence jointe",
        "Boords Free accepte un nombre illimité de cadres où tu importes tes propres images",
        "Krita est gratuit, open source, et exporte un storyboard en PDF",
      ],
      faibles: [
        "Google ne chiffre pas le quota gratuit de Gemini",
        "Boords Free ne donne que **8 crédits** d'image, une seule fois, en résolution 0,5K",
        "Les PDF du plan gratuit de Boords portent un filigrane",
        "Tu passes d'un outil à l'autre à la main, rien n'est relié au scénario",
      ],
      verdict:
        "Pour une scène de 6 à 12 plans, le gratuit suffit. Au-delà d'un court métrage entier, ou dès qu'un client attend un PDF propre, tu sentiras chaque limite.",
    },
    {
      type: "comparison",
      caption: "Les offres gratuites utilisées dans ce tutoriel",
      headers: ["Outil", "Rôle ici", "Ce que donne le gratuit", "La limite qui pique"],
      rows: [
        ["Gemini", "Générer les cases", "Génération d'images avec Nano Banana 2, « limites standards »", "Aucun chiffre publié, quota recalculé toutes les 5 h jusqu'à un plafond hebdomadaire"],
        ["Boords Free", "Monter la planche", "5 storyboards actifs, 3 scripts, cadres manuels illimités, 8 crédits d'image uniques", "Modèle GPT Image 2.5 Flare seul, en 0,5K ; filigrane sur les exports"],
        ["Krita", "Monter ou dessiner", "Logiciel complet, libre et open source", "Pas d'IA, champs dialogue et action à créer toi-même"],
        ["ScreenWeaver Screenwriter", "Écrire la scène", "Éditeur de scénario, séquencier, moodboards, import et export", "Storyboard généré seulement dans l'offre Auteur (39,99 $/mois)"],
      ],
      source: [
        { label: "Aide Gemini, limites", href: "https://support.google.com/gemini/answer/16275805?hl=fr" },
        { label: "Boords Pricing", href: "https://boords.com/pricing" },
        { label: "Boords Docs, images", href: "https://boords.com/docs/ai-image-generator" },
        { label: "Krita", href: "https://krita.org/fr/" },
        { label: "ScreenWeaver, tarifs", href: "https://www.screenweaver.ai/fr#pricing" },
      ],
      verifieLe: "2026-10-20",
      releveLabel: "Offres relevées le",
      note: "Je suis co-fondateur de ScreenWeaver. Il figure ici pour l'écriture gratuite, pas pour le storyboard.",
    },

    { type: "h2", id: "etape-1", text: "Étape 1 : écrire la scène et la découper en plans" },
    {
      type: "p",
      text: "La tentation, c'est d'ouvrir un générateur et de taper « storyboard d'une livreuse sous la pluie ». Tu obtiens une jolie image, puis une deuxième qui ne raccorde pas avec la première, et ton quota fond. Le découpage passe avant la première génération, parce que c'est lui qui fixe le nombre d'images dont tu as besoin.",
    },
    {
      type: "p",
      text: "Prends une scène courte, avec un seul personnage et un seul décor. Celle qui sert d'exemple dans tout l'article tient en trois lignes : *Nuit, pluie. Inès, livreuse à vélo, arrive devant un immeuble. Sur l'étiquette du colis, elle lit son propre nom. Elle lève les yeux vers une fenêtre allumée, hésite, puis repart sans sonner.*",
    },
    {
      type: "p",
      text: "Ensuite, une ligne par plan. Trois colonnes suffisent : la valeur de plan, ce qu'on voit, ce qui bouge. Un tableur, un carnet ou n'importe quel éditeur de texte font l'affaire.",
    },
    {
      type: "table",
      caption: "Le découpage de la scène d'exemple, six plans",
      headers: ["Plan", "Valeur", "Ce qu'on voit", "Ce qui bouge"],
      rows: [
        ["1", "Plan large", "Rue mouillée, Inès arrive à vélo devant un immeuble", "Le vélo freine, éclaboussures"],
        ["2", "Plan moyen", "Elle descend et sort le colis du sac isotherme", "Ses mains, la pluie"],
        ["3", "Insert", "L'étiquette du colis, son prénom écrit au feutre", "Une goutte qui coule sur l'encre"],
        ["4", "Gros plan", "Son visage sous la capuche, éclairé par un lampadaire", "Le regard qui monte"],
        ["5", "Contre-plongée", "La façade, une seule fenêtre allumée au troisième", "Un rideau qui bouge"],
        ["6", "Plan large", "Inès repart, colis sous le bras, la rue vide", "Le vélo s'éloigne"],
      ],
    },
    {
      type: "p",
      text: "Six plans, donc six images au minimum, plus une fiche personnage, plus les ratés. Compte une douzaine de générations. C'est ce chiffre qui décide de l'outil : 8 crédits Boords ne suffisent pas. Gemini devrait passer en une ou deux sessions, sans garantie, puisque Google ne publie pas son quota.",
    },
    {
      type: "p",
      text: "Si tu veux écrire la scène au format scénario, l'offre gratuite **Screenwriter** de ScreenWeaver te donne un éditeur et un séquencier sans payer. Je le précise parce que j'en suis co-fondateur : la génération du storyboard, elle, est réservée à l'offre Auteur à 39,99 $ par mois. Pour ce tutoriel gratuit, l'éditeur te sert seulement à écrire.",
    },
    {
      type: "screenshot",
      src: `${IMG}-screenweaver-tarifs.webp`,
      alt: "Section tarifs de screenweaver.ai en français : offre Screenwriter à 0 $ gratuite pour toujours avec éditeur de scénario et séquencier, offre Auteur à 39,99 $ par mois, offre Studio à 149,99 $ par mois",
      caption: "Chez ScreenWeaver, l'écriture est gratuite. Le storyboard généré commence à l'offre Auteur.",
      source: "https://www.screenweaver.ai/fr#pricing",
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },

    { type: "h2", id: "etape-2", text: "Étape 2 : fabriquer la fiche personnage" },
    {
      type: "p",
      text: "Avant la case 1, tu génères Inès seule. De face, en pied, sur un fond gris uni, avec sa tenue complète. Cette image devient ta référence pour tout le reste. Le principe est expliqué en détail dans [mon guide sur le personnage cohérent](/blog/personnage-coherent-ia).",
    },
    {
      type: "p",
      text: "La documentation de Boords explique pourquoi : l'IA ne se souvient pas des cases précédentes, et écrire « le même personnage » sans image de référence ne l'identifie pas. C'est vrai pour Boords, et le même principe s'applique quand tu travailles dans Gemini : à chaque nouveau plan, tu recolles la fiche.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-references.webp`,
      alt: "Documentation Boords, section Get consistent images : texte expliquant que l'IA ne se souvient pas des cadres précédents, et menu de mentions avec une bibliothèque de personnages Alex, Leo, Priya et Sam",
      caption: "La règle de base de la cohérence, écrite par Boords : sans image de référence, pas de même personnage.",
      source: "https://boords.com/docs/ai-image-generator",
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Le prompt de la fiche, à adapter :",
    },
    {
      type: "quote",
      text: "Fiche personnage pour un storyboard. Une livreuse à vélo d'environ 25 ans, cheveux noirs attachés, veste de pluie orange délavée à capuche, pantalon noir, baskets grises, sac isotherme carré sur le dos. Vue de face, en pied, fond gris uni, lumière neutre. Style croquis de storyboard au crayon, traits nets, sans texte.",
    },
    {
      type: "p",
      text: "Choisis un style et ne le change plus. Le **croquis au crayon** a un avantage sur le photoréaliste : personne ne s'attend à ce qu'un croquis soit parfait, donc les petits écarts de visage d'une case à l'autre gênent moins la lecture.",
    },

    { type: "h2", id: "etape-3", text: "Étape 3 : générer les cases dans Gemini" },
    {
      type: "p",
      text: "Ouvre une conversation dans l'appli Gemini, joins l'image de la fiche, et demande un plan à la fois. L'aide de Google indique que la génération d'images passe par Nano Banana 2 et que les comptes sans forfait ont des « limites standards ». Aucun nombre d'images n'est donné.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini-limites.webp`,
      alt: "Page d'aide Applications Gemini en français, tableau Limites d'utilisation : Sans forfait Google AI limites standards, AI Plus deux fois plus, AI Pro quatre fois plus, AI Ultra cinq ou vingt fois plus que AI Pro",
      caption: "Google décrit le quota gratuit par rapport aux forfaits payants, jamais en nombre d'images.",
      source: "https://support.google.com/gemini/answer/16275805?hl=fr",
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La même page précise que les limites sont recalculées toutes les cinq heures, jusqu'à ce qu'un plafond hebdomadaire soit atteint, et qu'elles peuvent changer sans préavis. Si Gemini te bloque au plan 4, tu reprends plus tard. Ton compteur est visible dans les paramètres de gemini.google.com.",
    },
    {
      type: "p",
      text: "Pour chaque case, un prompt court qui reprend la ligne du découpage, toujours avec la fiche jointe :",
    },
    {
      type: "ol",
      items: [
        "« Case 1 du storyboard, même personnage que l'image jointe. Plan large, nuit, rue pavée mouillée, elle arrive à vélo et freine devant un immeuble, éclaboussures. Même style croquis au crayon, format 16:9, sans texte. »",
        "« Case 2, même personnage. Plan moyen, elle descend du vélo et sort un colis du sac isotherme, pluie fine. Même style, 16:9, sans texte. »",
        "« Case 3. Insert sur un colis en carton mouillé, étiquette écrite au feutre, une goutte coule sur l'encre. Même style, 16:9. »",
        "« Case 4, même personnage. Gros plan sur son visage sous la capuche, éclairé par un lampadaire, elle lève les yeux. Même style, 16:9, sans texte. »",
        "« Case 5. Contre-plongée sur une façade d'immeuble la nuit, une seule fenêtre allumée au troisième étage, un rideau bouge. Même style, 16:9, sans texte. »",
        "« Case 6, même personnage. Plan large, elle s'éloigne à vélo, colis sous le bras, rue vide sous la pluie. Même style, 16:9, sans texte. »",
      ],
    },
    {
      type: "p",
      text: "Le plan 3 demande du texte sur l'étiquette : les générateurs d'images déforment encore souvent les lettres, alors laisse l'étiquette floue et écris le prénom toi-même sur la planche, ou dans la légende de la case. Et le plan 5 n'a pas besoin de la fiche, puisque Inès n'y apparaît pas.",
    },
    {
      type: "p",
      text: "Télécharge chaque image retenue et renomme-la tout de suite : `01-plan-large.png`, `02-plan-moyen.png`. Sur six cases, le renommage paraît superflu. Sur quarante, tu ne retrouverais plus rien.",
    },

    { type: "h2", id: "etape-4", text: "Étape 4 : monter la planche dans Boords Free ou Krita" },
    {
      type: "p",
      text: "Il te reste six PNG dans un dossier. Pour en faire une planche, il faut les mettre dans l'ordre, écrire une légende sous chaque case et sortir un document qu'on peut partager.",
    },
    { type: "h3", id: "boords-free", text: "Option 1 : Boords Free, si tu veux une planche propre en dix minutes" },
    {
      type: "p",
      text: "Le plan gratuit de Boords ne demande pas de carte bancaire et donne 5 storyboards actifs, 3 scripts actifs et 8 crédits d'image d'essai, d'après [sa page tarifs](https://boords.com/pricing). Ce qui nous intéresse, ce sont les cadres manuels illimités : tu importes tes PNG, chaque image crée un cadre, et tu tapes l'action et le dialogue dessous.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-free.webp`,
      alt: "Page tarifs de Boords : offres Solo à 39 dollars, Pro à 75, Team à 125, Agency à 250 par mois, et en dessous la ligne Free plan sans carte bancaire avec 5 storyboards actifs, 3 scripts actifs et 8 crédits d'image IA d'essai",
      caption: "Le plan gratuit de Boords tient sur une ligne, sous les offres payantes.",
      source: "https://boords.com/pricing",
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La [documentation sur l'import d'images](https://boords.com/docs/adding-your-own-images) accepte le JPG et le PNG, en glisser-déposer ou depuis Google Drive et Dropbox. Garde le même format d'image que ton storyboard (16:9 ici), sinon Boords recadre.",
    },
    {
      type: "p",
      text: "Et les 8 crédits ? Garde-les pour les retouches. Boords sait recadrer un plan ou changer l'angle de caméra d'une case existante, et chaque opération coûte un crédit. Sur le plan gratuit, sa documentation précise que seul le modèle GPT Image 2.5 Flare est inclus, en résolution 0,5K. Nano Banana 2 et GPT Image 2.5 Sunburst demandent un abonnement.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-modele-gratuit.webp`,
      alt: "Documentation Boords, section Choosing an image model : tableau indiquant Nano Banana 2 et GPT Image 2.5 Sunburst en Upgrade required sur les offres gratuites et d'essai, GPT Image 2.5 Flare inclus",
      caption: "Sur l'offre gratuite de Boords, un seul modèle d'image sur trois est accessible.",
      source: "https://boords.com/docs/ai-image-generator",
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Attention à l'export. D'après la [page du générateur de Boords](https://boords.com/ai-storyboard-generator), les exports du plan gratuit, PDF et images de diapositives compris, portent un filigrane Boords. Les images générées dans les cadres, elles, n'en ont pas. Sans importance pour un exercice de cours, gênant devant un client.",
    },
    { type: "h3", id: "krita", text: "Option 2 : Krita, si tu veux zéro filigrane et retoucher au crayon" },
    {
      type: "p",
      text: "Krita est un logiciel de peinture libre et open source, sur Windows, macOS et Linux. Son panneau Storyboard range les scènes dans l'ordre, règle une durée par scène et exporte en PDF ou en SVG, comme le montre [sa documentation](https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html). Pas d'IA, pas de compte, pas de filigrane.",
    },
    {
      type: "screenshot",
      src: `${IMG}-krita.webp`,
      alt: "Page d'accueil de krita.org en français : Krita présenté comme un programme professionnel de peinture libre et open source, bouton Télécharger et logos Windows, Linux et macOS",
      caption: "Krita se télécharge gratuitement, sans compte, sur les trois systèmes.",
      source: "https://krita.org/fr/",
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Krita garde un atout que les générateurs n'ont pas : le crayon. Si le visage d'Inès dérape sur la case 4, tu peux le corriger à la main en deux minutes au lieu de brûler trois générations. En contrepartie, il faut apprendre le logiciel et créer toi-même les champs dialogue et action. Si tu viens de Storyboarder, j'ai détaillé cette migration dans [mon article sur les alternatives à Storyboarder](/blog/alternatives-storyboarder).",
    },

    { type: "h2", id: "etape-5", text: "Étape 5 : relire la planche et exporter" },
    {
      type: "p",
      text: "Mets les six cases côte à côte et relis-les comme un spectateur qui ne connaît pas l'histoire. Cette checklist attrape la plupart des problèmes :",
    },
    {
      type: "ul",
      items: [
        "La veste orange a-t-elle la même teinte dans les six cases ? Commence par elle, c'est le détail le plus visible.",
        "Si Inès lève les yeux vers la droite en case 4, la fenêtre doit se trouver à droite en case 5.",
        "Nuit et pluie partout : une case qui vire au crépuscule se voit tout de suite.",
        "Le vélo garde la même taille par rapport à elle d'un plan à l'autre.",
        "Et surtout, sans lire les légendes, est-ce qu'on comprend qu'elle repart sans livrer ?",
      ],
    },
    {
      type: "p",
      text: "Régénère seulement les cases fautives, avec la fiche jointe et une consigne précise (« même plan, mais veste orange comme sur l'image jointe »). Puis exporte en PDF. Si tu veux aller plus loin et chronométrer ta planche avec une voix et une musique, c'est l'étape de l'[animatique](/blog/animatique-ia-methode).",
    },

    { type: "h2", id: "erreurs", text: "Les erreurs qui vident ton quota gratuit" },
    {
      type: "ul",
      items: [
        "Générer avant d'avoir découpé : chaque image « pour voir » coûte une génération qui te manquera au plan 6.",
        "Demander les six cases dans un seul prompt. Tu récupères une grille de vignettes minuscules, et tu ne peux plus en corriger une seule sans tout relancer.",
        "Oublier de recoller la fiche personnage au plan 3 ou 4 : sans elle, rien ne garantit qu'Inès garde le même visage.",
        "Changer de style en route. Un plan photoréaliste au milieu des croquis, et toute la planche devient bizarre à lire.",
        "Dépenser les crédits Boords en premiers jets alors qu'ils couvrent huit retouches en tout.",
      ],
    },

    { type: "h2", id: "limites", text: "Quand le gratuit ne suffit plus" },
    {
      type: "p",
      text: "Le bricolage à trois outils marche bien pour une scène. Sur un court métrage de 40 plans, tu passes plus de temps à renommer des fichiers et à recoller la fiche personnage qu'à réfléchir à tes cadrages. Et rien ne relie la planche au scénario : si tu réécris une scène, tu refais le découpage à la main.",
    },
    {
      type: "p",
      text: "C'est le moment de regarder un outil payant. J'ai classé les principaux par profil, avec leurs prix, dans [mon comparatif des outils de storyboard IA](/blog/meilleurs-outils-storyboard-ia). Si ton projet part d'un scénario et doit finir en vidéo, ScreenWeaver relie le script, le storyboard et la production dans le même outil, à partir de l'offre Auteur.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "script",
      title: "Écris ta scène dans un vrai éditeur de scénario",
      text: "L'offre Screenwriter de ScreenWeaver est gratuite : éditeur de scénario, séquencier, moodboards. Le storyboard généré arrive avec l'offre Auteur, quand tu en as besoin.",
    },

    {
      type: "methodology",
      date: "2026-10-20",
      text: [
        "J'ai relu le 20 octobre 2026 les pages officielles de chaque outil cité : l'aide Gemini sur les limites d'utilisation, la page tarifs et la documentation de Boords (modèles, références, import d'images, export), le site de Krita et la section tarifs de ScreenWeaver. Les captures viennent de ces pages publiques, prises le même jour, bannières de cookies masquées et jamais acceptées.",
        "La scène d'Inès et les prompts sont des modèles à adapter. Je n'ai pas lancé de génération pour cet article : je ne te promets donc ni un nombre précis d'images Gemini par jour, ni un rendu particulier.",
      ],
      nonTeste: [
        "Le nombre réel de générations Gemini disponibles sans forfait",
        "Le rendu des prompts de l'exemple dans Gemini et dans Boords",
        "Les conditions d'utilisation commerciale des images de chaque outil",
      ],
      sources: [
        { label: "Aide Gemini, limites d'utilisation", href: "https://support.google.com/gemini/answer/16275805?hl=fr" },
        { label: "Boords Pricing", href: "https://boords.com/pricing" },
        { label: "Boords Docs, Generating images", href: "https://boords.com/docs/ai-image-generator" },
        { label: "Boords Docs, Adding your own images", href: "https://boords.com/docs/adding-your-own-images" },
        { label: "Documentation Krita, Storyboard Docker", href: "https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html" },
      ],
    },
  ],
};
