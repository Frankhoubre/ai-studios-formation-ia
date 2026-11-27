import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-31";
const IMG = "/images/articles/midjourney-vs-nano-banana";
const DOC = "https://docs.midjourney.com/hc/en-us/articles/";
const MJ_PLANS = `${DOC}27870484040333-Comparing-Midjourney-Plans`;
const MJ_VERSION = `${DOC}32199405667853-Version`;
const MJ_PROMPT = `${DOC}32023408776205-Prompt-Basics`;
const MJ_TRIAL = `${DOC}27870399340173-Free-Trials`;
const MJ_GPU = `${DOC}32016412137741-GPU-Speed-Fast-Relax-Turbo`;
const MJ_SREF = `${DOC}32180011136653-Style-Reference`;
const MJ_DESCRIBE = `${DOC}32497889043981-Describe`;
const GEMINI_HELP = "https://support.google.com/gemini/answer/14286560?hl=fr";
const GEMINI_LIMITS = "https://support.google.com/gemini/answer/16275805?hl=fr";
const GEMINI_API = "https://ai.google.dev/gemini-api/docs/image-generation?hl=fr";
const GEMINI_PRICING = "https://ai.google.dev/gemini-api/docs/pricing?hl=fr";
const GEMINI_CHANGELOG = "https://ai.google.dev/gemini-api/docs/changelog";
const GOOGLE_TIPS = "https://blog.google/products-and-platforms/products/gemini/prompting-tips-nano-banana-pro/";

export const midjourneyVsNanoBanana: Article = {
  title: "Midjourney vs Nano Banana : lequel apprendre en premier ?",
  slug: "midjourney-vs-nano-banana",
  description:
    "Midjourney V8.2 ou Nano Banana 2 et 2.1 : prix, accès gratuit et deux façons opposées d'écrire un prompt, avec le même brief écrit pour chacun (31/10/2026).",
  excerpt:
    "Midjourney veut des prompts courts, Google veut une scène décrite comme par un chef opérateur. Deux méthodes qui forment des réflexes différents, donc l'ordre compte.",
  category: "ia-image",
  tags: ["midjourney", "nano banana", "gemini", "comparatif", "prompt image", "débuter image ia"],
  date: "2026-10-31",
  updatedAt: "2026-10-31",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/midjourney-vs-nano-banana.webp",
  imageAlt:
    "Dans un garage aménagé en studio photo, un photographe barbu place un bol d'oranges sous une boîte à lumière pendant qu'une jeune femme compare une note courte et une page de consignes très annotée",
  keywords: [
    "midjourney vs nano banana",
    "nano banana vs midjourney",
    "nano banana ou midjourney",
    "nano banana 2.1",
    "midjourney v8.2",
  ],
  relatedSlugs: ["midjourney-avis-2026", "google-imagen-nano-banana-photorealisme", "alternatives-gratuites-midjourney"],
  faq: [
    {
      question: "Midjourney ou Nano Banana : lequel est le meilleur ?",
      answer:
        "Aucun des deux sur tout. Midjourney (V8.2 par défaut depuis le 24 juillet 2026) donne un rendu très travaillé à partir d'un prompt court. Nano Banana suit une consigne détaillée, retouche par la conversation, garde un personnage et écrit du texte lisible dans l'image. Pour apprendre, la question utile est lequel prendre en premier, et ça dépend de ce que tu veux produire.",
    },
    {
      question: "Nano Banana est-il gratuit ?",
      answer:
        "Dans l'application Gemini, oui : la génération d'images avec Nano Banana 2 est cochée sans forfait Google AI, avec un téléchargement en 1K (2K avec forfait) et un quota quotidien que Google ne chiffre pas. Nano Banana Pro demande un forfait. Dans l'API, il n'y a pas de palier gratuit pour les modèles d'image : Nano Banana 2.1 coûte 0,0336 $ par image en 1K.",
    },
    {
      question: "Midjourney a-t-il un essai gratuit ?",
      answer:
        "Pas sur midjourney.com ni sur Discord, d'après la documentation officielle. Le seul essai mentionné est limité et se trouve dans l'application niji, sur iOS et Android. Les abonnements vont de 10 à 120 $ par mois.",
    },
    {
      question: "C'est quoi Nano Banana 2.1 ?",
      answer:
        "La mise à jour de Nano Banana 2, disponible dans l'API Gemini depuis le 6 octobre 2026 sous l'identifiant gemini-nano-banana-2.1. Google la présente comme meilleure en qualité visuelle, en texte et en cohérence sur plusieurs retouches, et la facture moins cher que Nano Banana 2, désormais déprécié dans l'API. La page d'aide de l'application Gemini parle encore de Nano Banana 2 au 31 octobre.",
    },
    {
      question: "Faut-il écrire ses prompts en anglais ?",
      answer:
        "Pour Midjourney, je le conseille : la documentation et tous ses exemples sont en anglais, et un prompt court laisse peu de place à l'approximation. Pour Nano Banana dans Gemini, tu peux écrire en français, c'est une conversation, et le texte à afficher dans l'image peut être en français.",
    },
    {
      question: "Peut-on utiliser les deux ensemble ?",
      answer:
        "Oui, et c'est souvent le plus efficace : Midjourney pour trouver une direction visuelle, Nano Banana pour reprendre une image, la corriger par petites consignes, y ajouter du texte ou garder le même personnage sur une série. Pense juste aux droits : chez Midjourney, l'usage commercial suppose d'avoir été abonné.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Si tu débutes et que tu veux sortir des images utiles vite (une miniature, un visuel avec du texte, une photo retouchée), **commence par Nano Banana** dans Gemini : c'est gratuit, ça se pilote en français et ça t'apprend à décrire une scène. Si ton but est de développer un œil, un style, des planches d'ambiance, **Midjourney** t'apprendra plus, mais il faut payer dès le premier jour. Les deux outils ne demandent pas la même façon d'écrire, et c'est ce qui décide de l'ordre.",
    },
    {
      type: "p",
      text: "J'ai relu le 31 octobre 2026 la documentation de Midjourney, l'aide de Gemini, la doc et les tarifs de l'API Gemini, et le guide de prompt publié par Google, avec neuf captures prises le même jour. Je n'ai lancé aucune génération pour cet article. Je compare ce que chaque éditeur écrit, et je te montre le même brief rédigé selon chacun des deux guides officiels.",
    },
    { type: "h2", id: "verdict", text: "Mon verdict en deux minutes" },
    {
      type: "verdict",
      title: "Midjourney ou Nano Banana pour débuter (octobre 2026)",
      pourQui:
        "Les débutants en image IA qui hésitent entre s'abonner à Midjourney et apprendre sur Gemini, et qui veulent savoir quoi travailler en premier.",
      forts: [
        "Midjourney : un rendu très travaillé à partir d'un prompt de dix mots, idéal pour apprendre le vocabulaire du style",
        "Midjourney : Style Reference et Describe, deux outils qui forment l'œil",
        "Nano Banana : gratuit dans Gemini, en français, retouche par la conversation",
        "Nano Banana : texte lisible dans l'image et personnage gardé d'une image à l'autre",
      ],
      faibles: [
        "Midjourney : aucun essai sur le site, 10 $ par mois minimum, images publiques sans Stealth (Pro ou Mega)",
        "Midjourney : la doc déconseille les longues consignes, donc peu de contrôle fin par le texte",
        "Nano Banana gratuit : téléchargement en 1K et quota quotidien non chiffré",
        "Nano Banana : sans indication de style, le résultat penche vers une photo propre et neutre",
      ],
      verdict:
        "Deux semaines sur Nano Banana pour apprendre à décrire une scène et à corriger une image par étapes, puis un mois de Midjourney Basic pour travailler ton œil. Dans l'autre sens, tu risques de prendre l'habitude des prompts-mots-clés, qui marchent mal chez Google.",
      lien: { label: "Voir les offres officielles de Midjourney", href: MJ_PLANS },
    },
    { type: "h2", id: "versions", text: "Ce que tu compares vraiment au 31 octobre 2026" },
    {
      type: "p",
      text: "Plusieurs comparatifs bien placés sur cette requête opposent encore Midjourney V7 au tout premier Nano Banana. Les deux ont bougé. Chez Midjourney, la page Version indique que **V8.2 est la version par défaut depuis le 24 juillet 2026**, avec l'Edit Model qui remplace Omni Reference, Character Reference et Retexture.",
    },
    {
      type: "screenshot",
      src: `${IMG}-midjourney-v8-2.webp`,
      alt: "Page Version de la documentation Midjourney : la version par défaut est V8.2, sortie comme version par défaut le 24 juillet 2026 avec le nouvel Edit Model",
      caption:
        "La doc Midjourney donne la version par défaut et la date. Si un comparatif te parle de V7, il a plus de quatre mois de retard.",
      source: MJ_VERSION,
      capturedAt: CAPTURE,
      width: 770,
      height: 670,
    },
    {
      type: "p",
      text: "« Nano Banana », c'est un nom de famille. Dans l'application Gemini, l'aide de Google décrit trois modèles : Nano Banana 2 Lite quand tu es sur Flash-Lite, **Nano Banana 2** quand tu es sur Flash ou Pro, et Nano Banana Pro, réservé aux forfaits Google AI, pour recréer une image avec plus de détails.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini-modeles.webp`,
      alt: "Aide Gemini en français décrivant Nano Banana 2 Lite, Nano Banana 2 et Nano Banana Pro et le modèle Gemini qui déclenche chacun",
      caption:
        "Le modèle d'image dépend du modèle Gemini choisi. En gratuit, tu travailles avec Nano Banana 2.",
      source: GEMINI_HELP,
      capturedAt: CAPTURE,
      width: 730,
      height: 325,
    },
    {
      type: "p",
      text: "Côté développeurs, il y a du neuf que je n'ai vu dans aucun comparatif en français. Le journal des modifications de l'API annonce **Nano Banana 2.1** (identifiant `gemini-nano-banana-2.1`) disponible depuis le 6 octobre 2026, et Nano Banana 2 déprécié, sans date d'arrêt. La doc conseille la 2.1 pour tout nouveau projet. Les annonces d'un arrêt de Nano Banana 2 au 29 octobre qui circulent sur des sites tiers ne figurent pas dans ce journal.",
    },
    {
      type: "screenshot",
      src: `${IMG}-api-nano-banana-2-1.webp`,
      alt: "Documentation de l'API Gemini listant Nano Banana 2.1, Nano Banana 2 Lite, Nano Banana 2, Nano Banana Pro et Nano Banana 2.5 Flash Image avec leurs identifiants",
      caption:
        "La liste des modèles d'image de l'API Gemini. Nano Banana 2 y est présenté comme la génération précédente.",
      source: GEMINI_API,
      capturedAt: CAPTURE,
      width: 690,
      height: 535,
    },
    {
      type: "comparison",
      caption: "Midjourney et Nano Banana côte à côte",
      headers: ["Critère", "Midjourney", "Nano Banana"],
      rows: [
        ["Version", "V8.2 par défaut depuis le 24 juillet", "Nano Banana 2 dans Gemini, 2.1 dans l'API depuis le 6 octobre, Pro avec forfait"],
        ["Accès gratuit", "Non (essai limité dans l'appli niji seulement)", "Oui dans Gemini, quota quotidien non chiffré"],
        ["Prix d'entrée", "10 $ / mois (Basic, 200 min de GPU rapide)", "0 € dans Gemini ; API 2.1 à 0,0336 $ l'image 1K"],
        ["Style de prompt conseillé", "Court et simple, pas de longues listes", "Scène détaillée : sujet, cadrage, action, lieu, style, caméra, lumière"],
        ["Retouche", "Edit Model : consigne écrite, 4 références, zone ou recadrage", "Par la conversation, modifications locales"],
        ["Texte dans l'image", "Page Text Generation dans la doc, non comparé ici", "Mis en avant par Google, petits textes encore imparfaits"],
        ["Images privées", "Stealth seulement en Pro (60 $) et Mega", "Pas de galerie publique documentée"],
        ["Définition", "SD, HD 2048 px en V8.1 et V8.2", "1K sans forfait, 2K avec forfait ; jusqu'à 4K dans l'API"],
      ],
      source: [
        { label: "Midjourney, Version", href: MJ_VERSION },
        { label: "Midjourney, Comparing Plans", href: MJ_PLANS },
        { label: "Aide Gemini, Nano Banana", href: GEMINI_HELP },
        { label: "API Gemini, tarifs", href: GEMINI_PRICING },
      ],
      verifieLe: CAPTURE,
      releveLabel: "Fonctionnalités et prix relevés le",
    },
    { type: "h2", id: "deux-logiques", text: "Deux docs officielles, deux consignes opposées" },
    {
      type: "p",
      text: "La page Prompt Basics de Midjourney écrit noir sur blanc que les prompts **courts et simples** donnent généralement les meilleures images, et qu'il vaut mieux éviter les longues listes et les instructions détaillées, qui peuvent embrouiller le modèle.",
    },
    {
      type: "screenshot",
      src: `${IMG}-midjourney-prompt-court.webp`,
      alt: "Section Prompting Tips and Tricks de la documentation Midjourney conseillant des prompts courts, avec un mauvais exemple de phrase longue et un bon exemple court sur des pavots de Californie",
      caption:
        "L'exemple officiel : la phrase polie et longue est marquée comme mauvaise, la version de huit mots comme bonne.",
      source: MJ_PROMPT,
      capturedAt: CAPTURE,
      width: 770,
      height: 250,
    },
    {
      type: "p",
      text: "La même page donne sept axes à préciser si un détail compte pour toi : sujet, médium, environnement, lumière, couleur, ambiance, composition. Ce sont des **mots**, pas des phrases. Moins tu en mets, plus Midjourney comble les trous avec son propre style, et la doc le dit : moins de détails, plus de variété, moins de contrôle.",
    },
    {
      type: "screenshot",
      src: `${IMG}-midjourney-details.webp`,
      alt: "Liste de la documentation Midjourney : Subject, Medium, Environment, Lighting, Color, Mood et Composition avec des exemples de mots pour chacun",
      caption:
        "Les sept axes de Midjourney. Chaque exemple est un mot ou deux, jamais une consigne.",
      source: MJ_PROMPT,
      capturedAt: CAPTURE,
      width: 770,
      height: 225,
    },
    {
      type: "p",
      text: "Google prend le chemin inverse. Dans son guide « 7 tips to get the most out of Nano Banana Pro », publié le 20 novembre 2025, l'équipe demande de préciser le sujet, la composition, l'action, le lieu, le style et, pour une retouche, une consigne directe. Puis elle ajoute que les prompts simples marchent encore, mais qu'un résultat professionnel demande des instructions plus précises.",
    },
    {
      type: "screenshot",
      src: `${IMG}-google-conseils-prompt.webp`,
      alt: "Guide de prompt de Google pour Nano Banana Pro : les éléments Subject, Composition, Action, Location, Style et Editing Instructions avec des exemples",
      caption:
        "Le guide de Google : chaque élément est une question à laquelle ton prompt doit répondre, avec des exemples en phrases.",
      source: GOOGLE_TIPS,
      capturedAt: CAPTURE,
      width: 670,
      height: 449,
    },
    {
      type: "p",
      text: "La deuxième partie du guide pousse encore plus loin : format de l'image, angle et ouverture de l'objectif (« f/1.8 »), contre-jour à l'heure dorée, étalonnage, texte exact à afficher avec sa police, et rôle de chaque image importée (« l'image A pour la pose, l'image B pour le style »). C'est un vocabulaire de chef opérateur. Le guide vise Nano Banana Pro, mais l'aide de Gemini décrit Nano Banana 2 avec les mêmes forces (consignes complexes, texte, cohérence), donc la méthode vaut pour les deux.",
    },
    {
      type: "screenshot",
      src: `${IMG}-google-camera-lumiere.webp`,
      alt: "Section Refining the details du guide Google : format et ratio, caméra et lumière, texte intégré, contraintes factuelles et rôle des images de référence",
      caption:
        "Les consignes avancées de Google ressemblent à une feuille de service de tournage, pas à une liste de mots-clés.",
      source: GOOGLE_TIPS,
      capturedAt: CAPTURE,
      width: 670,
      height: 450,
    },
    {
      type: "p",
      text: "Mon analyse : avec Midjourney, tu apprends à **choisir** (le bon mot, puis la bonne image parmi les propositions). Avec Nano Banana, tu apprends à **diriger** (décrire, puis corriger). Ces deux réflexes ne s'additionnent pas comme deux niveaux, et le premier que tu prends a tendance à rester.",
    },
    { type: "h2", id: "meme-brief", text: "Le même brief écrit pour chacun" },
    {
      type: "p",
      text: "Prenons une image simple : un bol d'oranges sur une nappe en lin, dans un garage transformé en studio, lumière du jour grise. Voici comment je l'écrirais en suivant à la lettre chaque guide officiel. Ce sont des prompts rédigés pour l'exemple, pas des résultats de test : je n'ai rien généré.",
    },
    {
      type: "p",
      text: "**Pour Midjourney**, en anglais, en mots, avec le format en paramètre :",
    },
    {
      type: "quote",
      text: "still life photo of a bowl of oranges on wrinkled linen, overcast daylight, muted warm tones --ar 3:2",
    },
    {
      type: "p",
      text: "Quatorze mots et un paramètre. Le lieu (le garage) a disparu, parce que ce n'est pas un détail qui compte pour l'image et que la doc conseille de garder ce qui compte seulement. Si le résultat ne te plaît pas, tu ne rallonges pas la phrase : tu changes un mot (« overcast » par « window light »), tu ajoutes une Style Reference ou tu lances des variations.",
    },
    {
      type: "p",
      text: "**Pour Nano Banana**, en français, dans Gemini, avec les éléments du guide de Google :",
    },
    {
      type: "quote",
      text: "Photo de nature morte au format 3:2. Un bol en céramique blanche rempli d'oranges, posé sur une nappe en lin froissé, dans un garage aménagé en studio photo. La lumière du jour, grise, entre par une porte de garage à moitié ouverte sur la gauche et dessine des ombres douces. Cadrage à hauteur de table, objectif 50 mm, faible profondeur de champ, caisses en bois floues à l'arrière-plan. Couleurs chaudes et sourdes, ombres légèrement froides.",
    },
    {
      type: "p",
      text: "Puis, dans la même conversation, une retouche directe comme Google le conseille :",
    },
    {
      type: "quote",
      text: "Garde tout identique et ajoute devant le bol une étiquette en papier kraft avec écrit à la main « Oranges, 3 € le kilo ».",
    },
    {
      type: "p",
      text: "Le prompt Midjourney tient dans un tweet et laisse le modèle décider de la composition. Le prompt Nano Banana place la caméra, la source de lumière et l'arrière-plan, puis corrige par étapes, texte compris. Si tu envoies le premier à Gemini, tu obtiendras une image correcte mais générique. Si tu colles le second dans Midjourney, tu vas à l'encontre de ce que sa doc recommande.",
    },
    {
      type: "p",
      text: "> Pro Tip : écris d'abord ton brief long, façon Nano Banana, puis entoure les quatre ou cinq mots qui portent vraiment l'image. Ce sont eux, traduits en anglais, qui font ton prompt Midjourney. Tu travailles les deux réflexes sur la même idée.",
    },
    { type: "h2", id: "ce-que-tu-apprends", text: "Ce que chacun t'apprend vraiment" },
    { type: "h3", id: "apprendre-midjourney", text: "Midjourney forme ton œil" },
    {
      type: "p",
      text: "Midjourney est fait pour explorer. Un prompt court sort plusieurs propositions, tu compares, tu gardes, tu relances. Deux outils de la doc sont de vrais outils d'apprentissage. [Style Reference](" + MJ_SREF + ") reprend l'ambiance d'une image (couleurs, médium, textures, lumière) sans copier ses objets ni ses personnes. [Describe](" + MJ_DESCRIBE + ") analyse une image que tu importes et te propose quatre prompts. La doc indique qu'il donne des prompts plus longs et détaillés depuis V8.1 et V8.2, et le présente comme une façon de découvrir de nouveaux mots de style.",
    },
    {
      type: "p",
      text: "Si tu veux aller plus loin avec les paramètres, j'ai détaillé `--ar`, `--stylize` ou `--sref` dans mon guide des [paramètres Midjourney](/blog/prompt-midjourney-parametres), et le rapport qualité prix des offres dans mon [avis Midjourney 2026](/blog/midjourney-avis-2026).",
    },
    { type: "h3", id: "apprendre-nano-banana", text: "Nano Banana t'apprend à diriger et à corriger" },
    {
      type: "p",
      text: "Avec Nano Banana, la compétence clé, c'est la retouche par la conversation. L'aide de Gemini liste les modifications locales, la cohérence d'un personnage d'une image à l'autre, la fusion de plusieurs images importées et un rendu de texte amélioré dans toutes les langues prises en charge. Ce sont exactement les tâches d'un vrai projet : une affiche avec un titre, une série de visuels avec le même personnage, une photo produit à corriger.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini-fonctions.webp`,
      alt: "Aide Gemini listant les fonctionnalités de Nano Banana 2 : connaissances du monde, cohérence des personnages, modifications locales, rendu de texte, compréhension des instructions et téléchargement en 1K sans forfait",
      caption:
        "Les fonctions de Nano Banana 2 dans Gemini. Note la dernière ligne : 1K sans forfait, 2K avec.",
      source: GEMINI_HELP,
      capturedAt: CAPTURE,
      width: 730,
      height: 375,
    },
    {
      type: "p",
      text: "Google reste honnête sur les limites dans son propre guide : les petits textes, les détails fins et l'orthographe peuvent rater, les infographies doivent être vérifiées, et la cohérence d'un personnage peut varier d'une retouche à l'autre. Pour le photoréalisme et ce que la famille Imagen et Nano Banana sait faire en photo, j'en parle dans mon article sur [le réalisme de Nano Banana](/blog/google-imagen-nano-banana-photorealisme).",
    },
    { type: "h2", id: "prix-acces", text: "Prix et accès : gratuit contre abonnement" },
    {
      type: "p",
      text: "Midjourney ne propose que des abonnements : Basic à 10 $ par mois, Standard à 30 $, Pro à 60 $, Mega à 120 $, avec 20 % de remise en annuel. La page [Free Trials](" + MJ_TRIAL + ") précise qu'aucun essai n'existe sur le site ni sur Discord, seulement un essai limité dans l'application niji.",
    },
    {
      type: "screenshot",
      src: `${IMG}-midjourney-offres.webp`,
      alt: "Tableau des offres Midjourney Basic, Standard, Pro et Mega de 10 à 120 dollars par mois avec temps GPU rapide, mode Relax, mode Stealth et droits d'usage commerciaux",
      caption:
        "Les quatre offres Midjourney. Le mode Stealth, qui garde tes images privées, n'apparaît qu'à partir de Pro.",
      source: MJ_PLANS,
      capturedAt: CAPTURE,
      width: 770,
      height: 1190,
    },
    {
      type: "p",
      text: "Pour traduire 10 $ en images : la page [GPU Speed](" + MJ_GPU + ") donne 0,8 minute de GPU en moyenne pour un prompt en SD. Les 200 minutes de Basic font donc environ 250 prompts, chacun avec sa grille de propositions. C'est un calcul sur les moyennes officielles, pas une mesure.",
    },
    {
      type: "p",
      text: "Côté Google, le tableau des limites de Gemini coche « Génération d'images avec Nano Banana 2 » dès la colonne sans forfait, et réserve « Recréation d'images avec Nano Banana Pro » aux forfaits. Le quota quotidien gratuit existe mais n'est pas chiffré par Google. Dans l'[API Gemini](" + GEMINI_PRICING + "), aucun modèle d'image n'a de palier gratuit : Nano Banana 2.1 coûte 0,0336 $ par image en 1K, 0,0504 $ en 2K et 0,113 $ en 4K, contre 0,067 $ en 1K pour Nano Banana 2 et 0,134 $ pour Nano Banana Pro. Avec 10 $, ça fait près de 300 images 1K en 2.1.",
    },
    {
      type: "p",
      text: "Midjourney rattache l'usage commercial au fait d'avoir été abonné, et impose Pro ou Mega aux entreprises de plus d'un million de dollars de chiffre d'affaires annuel. L'aide de Gemini renvoie aux Conditions d'utilisation de Google et à son règlement sur les utilisations interdites, sans tableau de droits par forfait. Côté API, Google indique que toutes les images générées portent un filigrane invisible SynthID. Si tu cherches d'autres options sans payer, j'ai comparé [les alternatives gratuites à Midjourney](/blog/alternatives-gratuites-midjourney) une par une.",
    },
    { type: "h2", id: "lequel-en-premier", text: "Lequel apprendre en premier selon ton profil" },
    {
      type: "ol",
      items: [
        "Tu crées pour les réseaux, un commerce ou des miniatures ? Prends Nano Banana d'abord : le texte dans l'image, la retouche d'une vraie photo et le français comptent plus que le style.",
        "Pour devenir illustrateur ou directeur artistique, ou pour des planches d'ambiance, commence par Midjourney : un mois de Basic, avec de vraies heures sur Style Reference et Describe.",
        "Un film ou une série avec des personnages récurrents demande les deux : Nano Banana pour la cohérence d'un personnage et les retouches, Midjourney en appui pour la direction visuelle.",
        "Zéro budget ? Nano Banana dans Gemini, sans hésiter, puisque Midjourney n'a rien de gratuit sur le site.",
        "Déjà abonné à Midjourney : garde ton abonnement pour l'exploration et ajoute Nano Banana pour finir les images, les corriger et y mettre du texte.",
      ],
    },
    {
      type: "p",
      text: "Si tu veux mettre d'autres modèles face au même prompt, Flux et DALL-E sont passés au crible dans mon [comparatif Midjourney, Flux et DALL-E](/blog/midjourney-vs-flux-vs-dalle).",
    },
    { type: "h2", id: "pieges", text: "Les erreurs que je vois chez ceux qui passent de l'un à l'autre" },
    { type: "h3", id: "piege-mots-cles", text: "Donner une liste de mots-clés à Nano Banana" },
    {
      type: "p",
      text: "Symptôme : l'image est propre, mais plate, sans intention de cadrage. Fix concret : réécris en phrases qui répondent aux questions du guide de Google (qui, où, quoi, quel cadrage, quelle lumière), et ajoute la caméra et le format.",
    },
    { type: "h3", id: "piege-roman", text: "Écrire un roman à Midjourney" },
    {
      type: "p",
      text: "Symptôme : le modèle ignore la moitié de tes consignes ou mélange les éléments. Fix concret : garde le sujet, le médium et deux ou trois mots d'ambiance, et passe le reste en paramètres (`--ar`) ou en image de référence.",
    },
    { type: "h3", id: "piege-version", text: "Suivre un tuto qui parle d'une ancienne version" },
    {
      type: "p",
      text: "Symptôme : un paramètre comme `--cref` ne marche pas, ou le tuto dit que Nano Banana ne gère pas le texte. Fix concret : vérifie la date. Character Reference est remplacé par l'Edit Model en V8.2, et le texte fait partie des fonctions mises en avant pour Nano Banana 2.",
    },
    { type: "h3", id: "piege-1k", text: "Prévoir une impression avec le 1K gratuit" },
    {
      type: "p",
      text: "Symptôme : l'image est floue une fois agrandie. Fix concret : le téléchargement gratuit dans Gemini est en 1K. Pour une affiche, il te faut au moins le 2K d'un forfait, la 4K de l'API ou un agrandissement.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Essaie Nano Banana 2, 2.1 et Pro sur le même prompt",
      text: "Imaginode est l'outil que je développe, donc je ne suis pas neutre. On y trouve Nano Banana 2, Nano Banana 2.1 et Nano Banana Pro dans la même liste que GPT Image, Flux ou Seedream, ce qui permet de comparer leurs réponses à un même brief. Midjourney n'y figure pas.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 31 octobre 2026 les pages officielles de Midjourney (Version, Prompt Basics, Style Reference, Describe, Comparing Plans, Free Trials, GPU Speed), l'aide de Gemini sur Nano Banana et ses limites, la documentation, le journal des modifications et les tarifs de l'API Gemini, et le guide de prompt publié par Google. Les neuf captures ont été prises le même jour, sans compte connecté.",
        "Les deux prompts du brief sont rédigés selon les guides officiels pour illustrer leur logique. Le calcul de 250 prompts pour 10 $ part des moyennes de GPU publiées par Midjourney.",
      ],
      nonTeste: [
        "Aucune génération sur Midjourney ni sur Nano Banana pour cet article",
        "Le quota quotidien gratuit de Gemini, que Google ne chiffre pas",
        "La qualité comparée du texte dans l'image entre les deux outils",
      ],
      sources: [
        { label: "Midjourney, Version", href: MJ_VERSION },
        { label: "Midjourney, Prompt Basics", href: MJ_PROMPT },
        { label: "Aide Gemini, Nano Banana", href: GEMINI_HELP },
        { label: "Aide Gemini, limites", href: GEMINI_LIMITS },
        { label: "API Gemini, journal des modifications", href: GEMINI_CHANGELOG },
        { label: "Google, 7 tips Nano Banana Pro", href: GOOGLE_TIPS },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Midjourney ou Nano Banana : lequel est le meilleur ?" },
    {
      type: "p",
      text: "Aucun des deux sur tout. Midjourney (V8.2 par défaut depuis le 24 juillet 2026) donne un rendu très travaillé à partir d'un prompt court. Nano Banana suit une consigne détaillée, retouche par la conversation, garde un personnage et écrit du texte lisible dans l'image. Pour apprendre, la question utile est lequel prendre en premier, et ça dépend de ce que tu veux produire.",
    },
    { type: "h3", id: "faq-2", text: "Nano Banana est-il gratuit ?" },
    {
      type: "p",
      text: "Dans l'application Gemini, oui : la génération d'images avec Nano Banana 2 est cochée sans forfait Google AI, avec un téléchargement en 1K (2K avec forfait) et un quota quotidien que Google ne chiffre pas. Nano Banana Pro demande un forfait. Dans l'API, il n'y a pas de palier gratuit pour les modèles d'image : Nano Banana 2.1 coûte 0,0336 $ par image en 1K.",
    },
    { type: "h3", id: "faq-3", text: "Midjourney a-t-il un essai gratuit ?" },
    {
      type: "p",
      text: "Pas sur midjourney.com ni sur Discord, d'après la documentation officielle. Le seul essai mentionné est limité et se trouve dans l'application niji, sur iOS et Android. Les abonnements vont de 10 à 120 $ par mois.",
    },
    { type: "h3", id: "faq-4", text: "C'est quoi Nano Banana 2.1 ?" },
    {
      type: "p",
      text: "La mise à jour de Nano Banana 2, disponible dans l'API Gemini depuis le 6 octobre 2026 sous l'identifiant gemini-nano-banana-2.1. Google la présente comme meilleure en qualité visuelle, en texte et en cohérence sur plusieurs retouches, et la facture moins cher que Nano Banana 2, désormais déprécié dans l'API. La page d'aide de l'application Gemini parle encore de Nano Banana 2 au 31 octobre.",
    },
    { type: "h3", id: "faq-5", text: "Faut-il écrire ses prompts en anglais ?" },
    {
      type: "p",
      text: "Pour Midjourney, je le conseille : la documentation et tous ses exemples sont en anglais, et un prompt court laisse peu de place à l'approximation. Pour Nano Banana dans Gemini, tu peux écrire en français, c'est une conversation, et le texte à afficher dans l'image peut être en français.",
    },
    { type: "h3", id: "faq-6", text: "Peut-on utiliser les deux ensemble ?" },
    {
      type: "p",
      text: "Oui, et c'est souvent le plus efficace : Midjourney pour trouver une direction visuelle, Nano Banana pour reprendre une image, la corriger par petites consignes, y ajouter du texte ou garder le même personnage sur une série. Pense juste aux droits : chez Midjourney, l'usage commercial suppose d'avoir été abonné.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-31 -->
