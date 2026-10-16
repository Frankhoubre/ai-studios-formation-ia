import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-16";
const IMG = "/images/articles";

export const freepikMagnificSpacesAvis: Article = {
  title: "Freepik devient Magnific : avis et prise en main de Spaces",
  slug: "freepik-magnific-spaces-avis",
  description:
    "Freepik s'appelle Magnific depuis le 28 avril 2026. Ce qui change, les prix du jour, et Spaces, le canvas à nodes, pris en main pas à pas avec ses limites.",
  excerpt:
    "Même compte, même abonnement, nouveau nom. Ce que vaut Magnific (ex Freepik) en octobre 2026, ton premier workflow Spaces pas à pas, et les deux pièges de la page tarifs.",
  category: "ia-image",
  tags: ["freepik", "magnific", "spaces", "canvas à nodes", "avis", "image ia"],
  date: "2026-10-16",
  updatedAt: "2026-10-16",
  readingTime: 14,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/freepik-magnific-spaces-avis.webp",
  imageAlt:
    "Dans une ancienne imprimerie aux grandes fenêtres cintrées, en fin d'après-midi, une directrice artistique en chemise couleur rouille tend des fils de couleur entre des tirages photo épinglés au mur (baskets, casque audio, carafe en cristal, modèle assise sur un conteneur vert), avec des casses de caractères en plomb et un ordinateur portable sur l'établi",
  keywords: [
    "freepik ia",
    "magnific spaces",
    "freepik devient magnific",
    "freepik ai avis",
    "magnific prix",
    "freepik gratuit",
  ],
  relatedSlugs: [
    "magnific-upscalers-ia-agrandir-image",
    "comfyui-workflow-nodal-debutant",
    "meilleurs-generateurs-images-ia-2026",
  ],
  howTo: {
    name: "Créer son premier workflow dans Magnific Spaces",
    description:
      "Un node Texte, un générateur d'images et un upscaler reliés dans Spaces, puis lancés en un clic, d'après la documentation officielle de Magnific.",
    steps: [
      { name: "Ouvrir un tableau vide", text: "Dans la Suite créative, onglet Tous les outils, ouvre Spaces puis New Space et Blank Space.", anchor: "etape-1" },
      { name: "Poser un node Texte", text: "Appuie sur la barre d'espace pour ouvrir Spotlight, tape Text, valide et écris ton prompt.", anchor: "etape-2" },
      { name: "Ajouter le générateur d'images", text: "Ajoute un node Image Generator et relie la sortie du node Texte à son entrée prompt.", anchor: "etape-3" },
      { name: "Brancher l'upscaler", text: "Ajoute un node Upscaler et relie la sortie image du générateur à son entrée.", anchor: "etape-4" },
      { name: "Lancer le workflow", text: "Sur le node Upscaler, clique sur Run puis Run Workflow, après avoir lu le coût en crédits affiché sur le bouton.", anchor: "etape-5" },
    ],
  },
  faq: [
    {
      question: "Pourquoi Freepik est-il devenu Magnific ?",
      answer:
        "Parce que le nom ne correspondait plus à l'activité. Freepik est né en 2010 comme moteur de recherche de ressources graphiques, puis est devenu une plateforme d'IA pour l'image, la vidéo et l'audio. L'entreprise a pris le nom de Magnific, son upscaler racheté en 2024, le 28 avril 2026.",
    },
    {
      question: "Quel nouveau nom porte Freepik ?",
      answer:
        "Magnific. Le site est magnific.com, et freepik.com y redirige automatiquement. L'entreprise reste Freepik Company, basée à Málaga.",
    },
    {
      question: "Faut-il recréer un compte après le changement de nom ?",
      answer:
        "Non. Ton compte Freepik marche sur magnific.com avec le même e-mail, le même mot de passe ou la même connexion via un réseau social. Ton abonnement, tes téléchargements, tes projets et tes licences sont conservés.",
    },
    {
      question: "Freepik IA est-il encore gratuit ?",
      answer:
        "En partie. Le compte gratuit n'a pas de crédits mais des quotas quotidiens : 20 images par jour en Classic Fast ou Flux Fast, 40 en croquis vers image, quelques retouches. Dans Spaces, tu peux créer jusqu'à 3 tableaux. Les modèles récents comme Seedance ou Nano Banana Pro ne figurent pas dans ces quotas : il faut une offre payante, à partir de 12 € HT par mois en annuel.",
    },
    {
      question: "Spaces est-il inclus dans toutes les offres ?",
      answer:
        "Oui, Spaces figure dans les offres Premium, Premium+ et Pro Starter, et le compte gratuit peut créer 3 tableaux. D'une offre à l'autre, le nombre de crédits change, tout comme l'accès au mode illimité (réservé à Premium+ et au-dessus) et à l'upscaler Topaz.",
    },
    {
      question: "Magnific est-il fiable ?",
      answer:
        "C'est une entreprise installée depuis 2010, qui annonce plus d'un million d'abonnés payants. Sur Trustpilot, elle affiche 4 sur 5 pour 3 219 avis au 16 octobre 2026, avec des critiques récurrentes sur la facturation. Lis la FAQ des crédits avant de t'abonner, surtout si tu choisis le mensuel.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu tapes Freepik IA et tu atterris sur un site qui s'appelle Magnific ? C'est normal. Depuis le 28 avril 2026, Freepik porte le nom de Magnific : ton compte et ton abonnement restent les mêmes, et freepik.com redirige vers magnific.com. Pour enchaîner les outils d'IA, la plateforme propose **Spaces**, un canvas à nodes inclus dans les offres payantes et ouvert à trois tableaux sur le compte gratuit.",
    },
    {
      type: "p",
      text: "Mon verdict, avant le détail : Magnific vaut le coup si tu as besoin à la fois de photos de stock, de génération et de travail en équipe. Tu débutes seul et tu veux apprendre les workflows IA sans payer l'année d'avance ? Regarde aussi ailleurs.",
    },
    {
      type: "p",
      text: "Plus bas : le changement de nom sans le jargon de l'annonce, ton premier workflow Spaces monté d'après la documentation officielle, et les offres avec les prix relevés le 16 octobre 2026, y compris deux pièges de la page tarifs qui peuvent te coûter des crédits.",
    },
    { type: "h2", id: "verdict", text: "Mon avis sur Magnific en deux minutes" },
    {
      type: "verdict",
      title: "Mon verdict sur Magnific (ex Freepik)",
      pourQui:
        "Les graphistes, community managers et petites équipes marketing qui veulent du stock, de la génération d'images et de vidéos et un espace partagé au même endroit.",
      forts: [
        "**Spaces** inclus dès l'offre d'entrée, avec le coût en crédits affiché sur le bouton avant chaque lancement",
        "Plus de 250 millions de ressources de stock dans le même abonnement",
        "Collaboration en temps réel, commentaires et Flows réutilisables par toute l'équipe",
        "Upscalers Magnific image et vidéo dans toutes les offres payantes",
      ],
      faibles: [
        "Les prix se comptent en crédits annuels, difficiles à traduire en nombre de vidéos sans le tableau",
        "L'illimité ralentit une fois la part prioritaire épuisée, et plusieurs modèles en sont sortis sur Premium+",
        "Les noms d'offres sont en plein test (Premium ou Creator selon la visite)",
        "Documentation de Spaces en anglais",
      ],
      verdict:
        "Un bon outil pour produire en équipe avec du stock sous la main. Pour apprendre les nodes seul avec un petit budget au mois, une offre annuelle de crédits n'est pas le format le plus souple.",
      lien: { label: "Voir les offres Magnific", href: "https://www.magnific.com/fr/pricing" },
    },

    { type: "h2", id: "pourquoi-magnific", text: "Pourquoi Freepik s'appelle maintenant Magnific" },
    {
      type: "p",
      text: "Freepik a commencé en 2010 comme moteur de recherche de ressources graphiques, à Málaga. Avec les années, l'IA a pris le dessus : génération d'images, de vidéos, d'audio, upscale. Le nom ne collait plus. L'entreprise l'a remplacé par celui de Magnific, l'upscaler qu'elle avait [racheté en 2024](https://en.wikipedia.org/wiki/Magnific), dans un [billet publié le 28 avril 2026](https://www.magnific.com/blog/freepik-is-now-magnific).",
    },
    {
      type: "p",
      text: "Dans ce billet, Magnific annonce 1 million d'abonnés payants, 100 millions de visites par mois et 230 millions de dollars de revenus récurrents annuels. Ces chiffres viennent de l'entreprise elle-même, je n'ai trouvé aucune source indépendante qui les confirme.",
    },
    {
      type: "p",
      text: "Pour toi, concrètement, la [page officielle du changement de nom](https://www.magnific.com/fr/freepik) promet quatre choses :",
    },
    {
      type: "ul",
      items: [
        "tu te connectes sur magnific.com avec le même e-mail, le même mot de passe ou la même connexion via un réseau social ;",
        "ton abonnement, ton cycle de facturation et ton moyen de paiement continuent sans rien faire ;",
        "tes projets, téléchargements, collections et ton historique sont conservés, et les licences de tes anciens téléchargements Freepik restent valables ;",
        "l'API répond sur api.freepik.com comme sur api.magnific.com, avec la même clé.",
      ],
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-annonce-2026-10-16.webp`,
      alt: "Page Freepik est maintenant Magnific sur magnific.com, avec le titre de l'annonce et le texte sur la migration par vagues des espaces de travail",
      caption: "La page officielle du changement de nom : la migration se fait par vagues, avec un e-mail le jour où ton espace bascule.",
      source: "https://www.magnific.com/fr/freepik",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },
    {
      type: "p",
      text: "Un piège de vocabulaire : « Magnific » désigne maintenant deux choses. La plateforme entière (l'ex Freepik), et la gamme d'upscalers historique. L'ancien site magnific.ai existe encore comme « service hérité », lié depuis la page d'annonce. Si tu lis un vieux tuto sur Magnific, vérifie de quel Magnific il parle. Pour l'upscale seul, j'ai un [guide dédié aux upscalers IA](/blog/magnific-upscalers-ia-agrandir-image).",
    },
    {
      type: "p",
      text: "En cherchant « freepik ia » sur Google, j'ai aussi croisé deux erreurs qui circulent : un blog date le changement de nom de 2024 (c'est l'année du rachat de l'upscaler, pas du renommage), un autre annonce une offre à 9 € par mois qui n'apparaît pas sur la page tarifs du 16 octobre.",
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-accueil-2026-10-16.webp`,
      alt: "Accueil de magnific.com avec le bandeau Freepik est maintenant Magnific et le titre La plateforme créative pour réaliser vos meilleurs projets",
      caption: "L'accueil de magnific.com : le bandeau rappelle le changement de nom, et la promesse tient en une ligne (tous les modèles d'IA pour la vidéo, l'image et l'audio).",
      source: "https://www.magnific.com/fr",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },

    { type: "h2", id: "contenu-magnific", text: "Ce que contient Magnific aujourd'hui" },
    { type: "p", text: "Sur la page tarifs, chaque offre payante liste la même base :" },
    {
      type: "ul",
      items: [
        "Spaces, le canvas partagé pour les workflows ;",
        "les modèles d'image, de vidéo et d'audio (Nano Banana 2 et Pro, Flux.2, Seedance 2.5, Kling 3.0, Veo 3.1, Lyria 3, ElevenLabs Music, entre autres) ;",
        "les upscalers Magnific pour l'image et la vidéo ;",
        "la licence commerciale pour les contenus générés ;",
        "plus de 250 millions de photos, vidéos, vecteurs et PSD ;",
        "l'accès API au crédit, Magnific MCP (pour piloter la plateforme depuis Claude ou ChatGPT) et une intégration ComfyUI.",
      ],
    },
    {
      type: "p",
      text: "Chaque offre affiche aussi « Aucune donnée utilisée pour entraîner des modèles ». Engagement de l'éditeur, impossible à vérifier de l'extérieur.",
    },

    { type: "h2", id: "spaces-canvas", text: "Spaces, le canvas à nodes : comment il fonctionne" },
    {
      type: "p",
      text: "Imagine un tableau infini où chaque étape de ton travail devient un bloc, ce qu'on appelle un node (ou nœud). Un node fait une seule chose : écrire un prompt, générer une image, ajouter une voix off, agrandir une vidéo. Tu relies les nodes par des câbles, et le résultat de l'un devient l'entrée du suivant.",
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-spaces-2026-10-16.webp`,
      alt: "Page de présentation de Magnific Spaces avec des photos de baskets en entrée, des nodes de prompt et des images générées reliées par des câbles colorés",
      caption: "La page de présentation de Spaces montre l'idée : une photo de baskets en entrée, un prompt, puis des images générées reliées par des câbles.",
      source: "https://www.magnific.com/fr/spaces",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },
    {
      type: "p",
      text: "La [documentation officielle](https://www.magnific.com/ai/docs/spaces-overview) pose six notions. Une fois que tu les as, tout le reste se lit tout seul :",
    },
    {
      type: "table",
      caption: "Les six notions de base de Spaces",
      headers: ["Notion", "Ce que c'est"],
      rows: [
        ["Canvas", "L'espace de travail infini, sans limite de page"],
        ["Node", "Un bloc qui fait une tâche (générer, écrire, agrandir...)"],
        ["Connexion", "Le câble qui transporte une image, un texte, une vidéo ou un son d'un node à l'autre"],
        ["Port", "Le petit rond sur le bord d'un node où se branche le câble (entrées à gauche, sorties à droite)"],
        ["Workflow", "La chaîne de nodes qui s'exécute d'un bout à l'autre"],
        ["Spotlight", "La recherche de nodes, ouverte avec la barre d'espace ou la touche /"],
      ],
      source: { label: "Magnific Docs, Spaces overview", href: "https://www.magnific.com/ai/docs/spaces-overview" },
      verifieLe: CAPTURE,
    },
    {
      type: "p",
      text: "Les ports ont des couleurs : bleu pour le texte, violet pour l'image, vert pour la vidéo, orange pour l'audio. Spaces refuse de brancher deux ports incompatibles : le câble disparaît quand tu le lâches. Rassurant quand tu débutes, tu ne risques pas d'envoyer un son dans un générateur d'images.",
    },
    {
      type: "p",
      text: "Les nodes sont rangés en sept familles : Média (import, bibliothèque, stock), Texte, Image, Vidéo, Audio, Utilitaires (listes, post-it, groupes) et Designer, un éditeur graphique complet intégré au canvas.",
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-docs-concepts-2026-10-16.webp`,
      alt: "Documentation Magnific Spaces overview, tableau Core concepts avec les lignes Canvas, Node, Connection, Port, Workflow et Spotlight",
      caption: "Le tableau des notions de base dans la documentation de Spaces, en anglais comme le reste de l'aide.",
      source: "https://www.magnific.com/ai/docs/spaces-overview",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },
    {
      type: "p",
      text: "Si tu as déjà touché à [ComfyUI et ses workflows nodaux](/blog/comfyui-workflow-nodal-debutant), tu retrouveras la logique, en beaucoup moins technique : pas d'installation, pas de modèle à télécharger, et les modèles payants sont déjà branchés.",
    },

    { type: "h2", id: "premier-workflow", text: "Prise en main de Spaces : ton premier workflow pas à pas" },
    {
      type: "p",
      text: "Le premier exercice de la documentation est le bon : un prompt, une image, un agrandissement. Trois nodes, un seul clic pour tout lancer.",
    },
    { type: "h3", id: "etape-1", text: "Étape 1 : ouvrir un tableau vide" },
    {
      type: "p",
      text: "Dans la Suite créative, onglet « Tous les outils », clique sur Spaces (ou va sur magnific.com/pikaso/spaces). Sur le tableau de bord, choisis « New Space » puis « Blank Space ». Tu peux aussi partir d'un modèle, on y revient plus bas.",
    },
    { type: "h3", id: "etape-2", text: "Étape 2 : poser un node Texte" },
    {
      type: "p",
      text: "Appuie sur la barre d'espace : Spotlight s'ouvre. Tape « Text », valide avec Entrée. Écris ton prompt dans la carte, par exemple une ville futuriste à l'heure dorée avec des nuages volumétriques.",
    },
    { type: "h3", id: "etape-3", text: "Étape 3 : ajouter le générateur d'images" },
    {
      type: "p",
      text: "Rouvre Spotlight et tape « Image Generator ». Tu verras deux types de lignes : le node de base, où tu choisis le modèle ensuite, et des variantes déjà réglées sur un modèle précis. Survole une ligne : l'infobulle donne le coût en crédits par lancement. Relie ensuite la sortie bleue du node Texte à l'entrée prompt du générateur.",
    },
    {
      type: "p",
      text: "Astuce de la doc : tire un câble depuis une sortie vers une zone vide du canvas. Spotlight s'ouvre filtré sur les seuls nodes compatibles, et le node choisi arrive déjà branché.",
    },
    { type: "h3", id: "etape-4", text: "Étape 4 : brancher l'upscaler" },
    {
      type: "p",
      text: "Troisième Spotlight, « Upscaler », Entrée. Relie la sortie image (violette) du générateur à l'entrée de l'upscaler.",
    },
    { type: "h3", id: "etape-5", text: "Étape 5 : tout lancer" },
    {
      type: "p",
      text: "Clique sur « Run » sur le node Upscaler et choisis « Run Workflow ». Le prompt part vers le générateur, l'image générée part vers l'upscaler. **Le coût total en crédits est affiché sur le bouton avant que tu valides**, et il bouge en direct quand tu changes de modèle, de résolution ou de durée.",
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-docs-spaces-2026-10-16.webp`,
      alt: "Documentation Getting started with Spaces de Magnific, section Your first workflow Text to Image to Upscaler avec les premières étapes numérotées",
      caption: "Le pas à pas « Text to Image to Upscaler » de la documentation officielle, que les étapes ci-dessus reprennent.",
      source: "https://www.magnific.com/ai/docs/getting-started-with-spaces",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },
    { type: "p", text: "Les trois modes de lancement méritent trente secondes d'attention :" },
    {
      type: "ul",
      items: [
        "« Run Node » lance seulement le node sélectionné ;",
        "« Run Workflow » lance toute la chaîne ;",
        "« Run Downstream » lance le node sélectionné et tout ce qui suit.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : tu as retouché le prompt du milieu de la chaîne ? Utilise Run Downstream. La [doc sur les nodes et les connexions](https://www.magnific.com/ai/docs/nodes-and-connections) le présente comme le moyen de relancer à partir de ce point sans repayer les étapes d'avant. Sur un workflow vidéo, ce réflexe décide si tes crédits partent ou restent.",
    },
    {
      type: "p",
      text: "Deux réglages à connaître dès le début. Chaque node garde l'historique de ses générations, tu passes de l'une à l'autre avec les flèches de la carte, rien n'est perdu quand tu relances. Et la plupart des générateurs ont un réglage « Number of generations », de 2 à 10 résultats en un lancement. Pour aller plus loin, le node Liste envoie dix variantes d'un prompt dans le même générateur, une par une.",
    },

    { type: "h2", id: "modeles-equipe", text: "Modèles prêts à l'emploi, travail à plusieurs et Flows" },
    {
      type: "p",
      text: "Si la page blanche te bloque, la page Spaces propose des modèles de workflows : adapter et animer une pub, décliner un produit dans plusieurs décors, générer une vue produit à 360°, localiser une vidéo UGC, passer d'un storyboard à l'animation, restaurer une photo ancienne. Tu ouvres le modèle, tu remplaces les médias et les prompts, et tu regardes comment il est câblé. Pour comprendre les nodes, je ne connais pas plus rapide.",
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-spaces-modeles-2026-10-16.webp`,
      alt: "Rangée de modèles Spaces prêts à l'emploi sur magnific.com : adapter et animer des publicités, variations de produits, publication réseaux sociaux, vue produit à 360°, scènes de produits",
      caption: "Les modèles prêts à l'emploi de la page Spaces : on voit tout de suite que la cible est la pub et le e-commerce.",
      source: "https://www.magnific.com/fr/spaces",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },
    {
      type: "p",
      text: "Petite limite relevée le 16 octobre : en ouvrant le lien d'un modèle sans être connecté, j'ai obtenu « Ce tableau n'existe plus ». Il faut un compte, même gratuit, pour les parcourir.",
    },
    {
      type: "p",
      text: "Côté équipe, Spaces se partage par lien ou par e-mail, avec trois niveaux d'accès d'après la [doc sur la collaboration](https://www.magnific.com/ai/docs/collaboration-and-sharing) : modifier, voir seulement, propriétaire. Les curseurs des autres s'affichent en couleur et les commentaires s'accrochent à un endroit précis du canvas.",
    },
    {
      type: "p",
      text: "Les [Flows](https://www.magnific.com/ai/docs/flows) vont un cran plus loin. Tu publies un workflow sous forme de formulaire : tes collègues remplissent deux ou trois champs (la photo produit, la langue) et récupèrent le résultat sans voir un seul node. Un Flow se lance depuis sa galerie, comme node dans un autre Space, par l'API ou depuis un assistant comme Claude ou ChatGPT via MCP. Une agence qui décline cinquante visuels produit par semaine trouvera là la fonction la plus utile de Spaces.",
    },

    { type: "h2", id: "prix", text: "Combien coûte Magnific et ce que permet chaque offre" },
    {
      type: "p",
      text: "Prix relevés sur la [page tarifs officielle](https://www.magnific.com/fr/pricing) le 16 octobre 2026, hors TVA, offres individuelles.",
    },
    {
      type: "comparison",
      caption: "Les offres individuelles de Magnific (ex Freepik) en octobre 2026, prix hors taxes",
      headers: ["Offre", "Mensuel", "Annuel (par mois)", "Crédits par an", "Illimité", "Upscalers"],
      rows: [
        ["Gratuit", "0 €", "0 €", "Aucun, quotas quotidiens", "Non", "Non précisé"],
        ["Premium", "16 €", "12 €", "240 000", "Non", "Magnific"],
        ["Premium+", "36 €", "27 €", "600 000", "Oui, Nano Banana 2 (1K) et plus de 30 modèles", "Magnific et Topaz"],
        ["Pro Starter", "88 €", "66 €", "1,5 million (ou 4 millions avec Nano Banana Pro)", "Oui, dont Nano Banana 2 (2K)", "Magnific et Topaz"],
      ],
      source: [
        { label: "Magnific, page tarifs", href: "https://www.magnific.com/fr/pricing" },
        { label: "Magnific Docs, outils IA en gratuit", href: "https://www.magnific.com/ai/docs/how-can-i-use-the-ai-tools-as-a-free-user" },
      ],
      verifieLe: CAPTURE,
      note: "Licence commerciale IA sur toutes les offres payantes, droits musicaux à partir de Premium+.",
    },
    {
      type: "p",
      text: "Le compte gratuit n'a pas de crédits. Il a des quotas par jour : 20 images en Classic Fast ou Flux Fast et 20 en Classic, 40 avec le croquis vers image, 3 retouches, 3 extensions, 3 Reimagine, 1 détourage. Et dans Spaces, jusqu'à 3 tableaux. De quoi comprendre l'outil, trop peu pour produire chaque semaine.",
    },
    {
      type: "gallery",
      caption: "Les deux réponses officielles sur le gratuit, capturées le même jour.",
      items: [
        {
          src: `${IMG}/magnific-spaces-faq-2026-10-16.webp`,
          alt: "FAQ dépliée de la page Spaces de Magnific : jusqu'à 3 tableaux Spaces en abonnement gratuit, et la liste des types de nœuds disponibles",
          caption: "La FAQ de la page Spaces : 3 tableaux en gratuit, et la liste des types de nodes.",
          source: "https://www.magnific.com/fr/spaces",
          capturedAt: CAPTURE,
          width: 1600,
          height: 1000,
        },
        {
          src: `${IMG}/magnific-docs-gratuit-2026-10-16.webp`,
          alt: "Aide Magnific How can I use the AI tools as a free user, tableau des limites quotidiennes : 20 images par jour, 40 croquis vers image, 3 retouches",
          caption: "Les quotas quotidiens du compte gratuit dans l'aide officielle.",
          source: "https://www.magnific.com/ai/docs/how-can-i-use-the-ai-tools-as-a-free-user",
          capturedAt: CAPTURE,
          width: 1600,
          height: 1000,
        },
      ],
    },
    {
      type: "p",
      text: "Pour traduire les crédits en résultats, le tableau de la page tarifs donne le coût de chaque modèle. Deux exemples parlants :",
    },
    {
      type: "ul",
      items: [
        "une image Nano Banana 2 en 2K coûte 75 crédits : l'offre Premium en donne 3 200 sur l'année ;",
        "un clip Seedance 2.5 de 4 secondes en 720p coûte 1 760 crédits : Premium en donne 136, soit environ **9 minutes de vidéo sur douze mois**.",
      ],
    },
    {
      type: "p",
      text: "Neuf minutes de vidéo sur un an, pour 144 € HT réglés d'avance. Si tu prévois surtout des clips Seedance, Premium sera vite à sec. Kling 2.5 en 720p (140 crédits les 5 secondes) passe en illimité à partir de Premium+ : regarde de ce côté si tu veux du volume.",
    },
    {
      type: "screenshot",
      src: `${IMG}/magnific-tarifs-credits-2026-10-16.webp`,
      alt: "Tableau de comparaison des abonnements Magnific pour la vidéo IA : coût en crédits de Kling 2.5, Seedance 2.5, Wan 3.0, Kling 3.0 Pro, Veo 3.1 et nombre de vidéos par offre",
      caption: "Le tableau des coûts par modèle : à gauche le prix en crédits, à droite le nombre de générations par offre.",
      source: "https://www.magnific.com/fr/pricing",
      capturedAt: CAPTURE,
      width: 1600,
      height: 1000,
    },
    { type: "h3", id: "pieges-tarifs", text: "Les deux pièges de la page tarifs" },
    {
      type: "p",
      text: "Premier piège, les crédits mensuels. Chaque carte d'offre affiche « Crédits valables pendant un an, sans réinitialisations mensuelles ». Mais la FAQ de la même page précise qu'avec un abonnement mensuel, **les crédits sont réinitialisés chaque mois et ne sont pas reportés**. En annuel, tu reçois tout d'avance et le compteur repart chaque année. Lis la FAQ avant de choisir le mensuel.",
    },
    {
      type: "p",
      text: "Second piège, l'illimité. D'après la FAQ, le mode illimité est inclus dans Premium+, Business et Pro, pas dans Premium. Il donne une part prioritaire à chaque cycle, puis « les générations s'exécutent une par une » avec une vitesse qui dépend de la demande. Sur Premium+, Nano Banana Pro, Nano Banana 2 en 2K, Flux.2 Max et les GPT Image sont passés aux crédits au renouvellement. Illimité ne veut donc pas dire instantané, ni tous les modèles.",
    },
    { type: "h3", id: "renommage-offres", text: "Premium ou Creator ? Un renommage en test" },
    {
      type: "p",
      text: "Le 16 octobre, en chargeant la page tarifs plusieurs fois, j'ai vu deux versions. En arrivant directement sur la page : Premium, Premium+ et Pro Starter. En passant d'abord par l'accueil : Creator, Plus et Pro, aux mêmes prix et avec les mêmes crédits. Le navigateur reçoit alors un cookie nommé PRICING_PLAN_RENAMING.",
    },
    {
      type: "p",
      text: "Rien n'est annoncé officiellement. Si l'offre que tu vises change de nom entre deux visites, compare le prix et les crédits, pas l'étiquette. Et si tu t'abonnes à l'année, relis la page tarifs le jour même : entre le renommage d'avril, les modèles sortis de l'illimité et ce test, l'offre bouge vite.",
    },
    {
      type: "gallery",
      caption: "La même grille tarifaire sous ses deux noms, capturée le même jour.",
      items: [
        {
          src: `${IMG}/magnific-tarifs-2026-10-16.webp`,
          alt: "Page tarifs Magnific en facturation annuelle avec les offres Premium à 12 €, Premium+ à 27 € et Pro Starter à 66 € par mois",
          caption: "En arrivant directement sur la page : Premium, Premium+ et Pro Starter.",
          source: "https://www.magnific.com/fr/pricing",
          capturedAt: CAPTURE,
          width: 1600,
          height: 1000,
        },
        {
          src: `${IMG}/magnific-tarifs-noms-2026-10-16.webp`,
          alt: "Page tarifs Magnific avec les mêmes prix sous les noms Creator à 12 €, Plus à 27 € et Pro à 66 € par mois",
          caption: "Après un passage par l'accueil : Creator, Plus et Pro, mêmes prix et mêmes crédits.",
          source: "https://www.magnific.com/fr/pricing",
          capturedAt: CAPTURE,
          width: 1600,
          height: 1000,
        },
      ],
    },
    {
      type: "p",
      text: "La page tarifs annonce enfin une garantie de remboursement de 30 jours et une annulation sans frais. Pour acheter des crédits en plus, la FAQ renvoie vers le support, sans prix affiché.",
    },

    { type: "h2", id: "limites", text: "Ce qui coince avec Magnific" },
    { type: "p", text: "Les défauts maintenant, parce qu'ils touchent directement ton portefeuille." },
    {
      type: "p",
      text: "**La lecture des prix demande un effort.** Raisonner en crédits par an plutôt qu'en euros par vidéo, avec des coûts qui vont de 15 à 5 600 crédits selon le modèle, oblige à sortir la calculatrice. La FAQ précise aussi que l'éditeur se réserve le droit de modifier le coût des crédits à tout moment, sans préavis.",
    },
    {
      type: "p",
      text: "**L'aide de Spaces est en anglais.** Les pages que j'ai consultées (overview, premiers pas, nodes, collaboration, Flows) sont en anglais, même à l'adresse en /fr. La page de présentation, elle, est traduite.",
    },
    {
      type: "p",
      text: "**Les retours publics sont partagés sur l'abonnement.** Sur [Trustpilot](https://www.trustpilot.com/review/www.magnific.com), Magnific affiche 4 sur 5 pour 3 219 avis au 16 octobre 2026. Le résumé automatique de la plateforme classe l'abonnement parmi les sujets ambigus, avec des plaintes sur des erreurs de facturation. Les anciennes pages d'avis de magnific.ai renvoient désormais vers ce même profil.",
    },

    { type: "h2", id: "pour-qui", text: "Pour qui c'est un bon choix, et quand prendre autre chose" },
    {
      type: "p",
      text: "**Prends Magnific si** tu travailles en agence ou en équipe marketing, que tu as besoin de photos de stock autant que d'images générées, et que tu veux partager des workflows avec des collègues qui ne toucheront jamais un node. Premium+ en annuel est l'offre qui a le plus de sens si tu fais de l'image en volume grâce à l'illimité.",
    },
    {
      type: "p",
      text: "**Reste sur le gratuit** si tu veux juste comprendre Spaces : trois tableaux et les quotas du jour suffisent pour monter le workflow de l'étape 5.",
    },
    {
      type: "p",
      text: "**Regarde ailleurs si** tu apprends seul, que tu veux tester des workflows sans payer l'année d'avance, ou que tu fais surtout de la vidéo avec Seedance ou Veo, où les crédits annuels fondent vite. Deux pistes :",
    },
    {
      type: "ul",
      items: [
        "[ComfyUI](/blog/comfyui-workflow-nodal-debutant), gratuit et local, si tu as une bonne carte graphique et l'envie de mettre les mains dans la technique ;",
        "Imaginode, si tu veux un canvas à nodes en ligne, payé au mois.",
      ],
    },
    {
      type: "p",
      text: "Je dois être transparent : j'ai créé Imaginode. Il ne fait pas tout ce que fait Magnific. Pas de banque de 250 millions d'images, pas de collaboration en temps réel. Ce qu'il fait : un canvas à nodes avec plus de 100 modèles d'image, de vidéo, de voix et de texte, une offre Starter à 13 € HT par mois avec 900 crédits, sans engagement, le coût de chaque génération affiché avant de cliquer, et les crédits rendus quand une génération échoue. Le canvas marche aussi sur téléphone. Pour un apprenant qui veut comparer les modèles sur le même prompt sans s'engager à l'année, je trouve ce format plus adapté.",
    },
    { type: "cta", variant: "imaginode", destination: "models" },

    { type: "h2", id: "alternatives", text: "Les alternatives à connaître" },
    {
      type: "p",
      text: "Si tu cherches surtout un générateur d'images, mon [classement des meilleurs générateurs d'images IA](/blog/meilleurs-generateurs-images-ia-2026) compare Midjourney, Nano Banana, Flux et les autres. Pour les bases, le [guide complet de l'image IA](/blog/image-ia-guide-complet) reprend tout depuis le premier prompt. Et pour voir à quoi ressemble un plan vidéo construit sur un canvas, j'ai détaillé la méthode dans [créer un plan vidéo IA avec Imaginode](/blog/creer-plan-video-ia-imaginode).",
    },

    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 16 octobre 2026 les pages publiques de magnific.com (annonce du changement de nom, accueil, Spaces, tarifs avec leurs FAQ) et six pages de la documentation officielle, sans me connecter. J'ai fait les captures dans un navigateur vierge, cookies refusés.",
      ],
      teste: [
        "Les redirections de freepik.com vers magnific.com",
        "La page tarifs chargée 14 fois, avec deux jeux de noms d'offres selon le parcours",
        "L'ouverture d'un modèle Spaces sans compte",
      ],
      nonTeste: [
        "Aucune génération ni aucun workflow lancé dans Spaces",
        "La vitesse réelle du mode illimité",
        "Les offres Équipes et Entreprise",
      ],
      sources: [
        { label: "Annonce Freepik is now Magnific", href: "https://www.magnific.com/blog/freepik-is-now-magnific" },
        { label: "Page Freepik est maintenant Magnific", href: "https://www.magnific.com/fr/freepik" },
        { label: "Page tarifs Magnific", href: "https://www.magnific.com/fr/pricing" },
        { label: "Magnific Docs, Getting started with Spaces", href: "https://www.magnific.com/ai/docs/getting-started-with-spaces" },
        { label: "Trustpilot, Magnific", href: "https://www.trustpilot.com/review/www.magnific.com" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Pourquoi Freepik est-il devenu Magnific ?" },
    {
      type: "p",
      text: "Parce que le nom ne correspondait plus à l'activité. Freepik est né en 2010 comme moteur de recherche de ressources graphiques, puis est devenu une plateforme d'IA pour l'image, la vidéo et l'audio. L'entreprise a pris le nom de Magnific, son upscaler racheté en 2024, le 28 avril 2026.",
    },
    { type: "h3", id: "faq-2", text: "Quel nouveau nom porte Freepik ?" },
    {
      type: "p",
      text: "Magnific. Le site est magnific.com, et freepik.com y redirige automatiquement. L'entreprise reste Freepik Company, basée à Málaga.",
    },
    { type: "h3", id: "faq-3", text: "Faut-il recréer un compte après le changement de nom ?" },
    {
      type: "p",
      text: "Non. Ton compte Freepik marche sur magnific.com avec le même e-mail, le même mot de passe ou la même connexion via un réseau social. Ton abonnement, tes téléchargements, tes projets et tes licences sont conservés.",
    },
    { type: "h3", id: "faq-4", text: "Freepik IA est-il encore gratuit ?" },
    {
      type: "p",
      text: "En partie. Le compte gratuit n'a pas de crédits mais des quotas quotidiens : 20 images par jour en Classic Fast ou Flux Fast, 40 en croquis vers image, quelques retouches. Dans Spaces, tu peux créer jusqu'à 3 tableaux. Les modèles récents comme Seedance ou Nano Banana Pro ne figurent pas dans ces quotas : il faut une offre payante, à partir de 12 € HT par mois en annuel.",
    },
    { type: "h3", id: "faq-5", text: "Spaces est-il inclus dans toutes les offres ?" },
    {
      type: "p",
      text: "Oui, Spaces figure dans les offres Premium, Premium+ et Pro Starter, et le compte gratuit peut créer 3 tableaux. D'une offre à l'autre, le nombre de crédits change, tout comme l'accès au mode illimité (réservé à Premium+ et au-dessus) et à l'upscaler Topaz.",
    },
    { type: "h3", id: "faq-6", text: "Magnific est-il fiable ?" },
    {
      type: "p",
      text: "C'est une entreprise installée depuis 2010, qui annonce plus d'un million d'abonnés payants. Sur Trustpilot, elle affiche 4 sur 5 pour 3 219 avis au 16 octobre 2026, avec des critiques récurrentes sur la facturation. Lis la FAQ des crédits avant de t'abonner, surtout si tu choisis le mensuel.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-16 -->
