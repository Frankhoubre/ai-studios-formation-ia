import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-29";
const IMG = "/images/articles/pika-avis";
const PRICING = "https://pika.art/pricing";
const FAQ = "https://pika.art/faq";

export const pikaAvis: Article = {
  title: "Avis Pika 2026 : prix, crédits et vraies limites",
  slug: "pika-avis",
  description:
    "Avis Pika au 29 octobre 2026 : licence commerciale dès 10 $, plus de filigrane, 0 crédit en gratuit, 7 clips Seedance par mois en Starter et fin d'old.pika.art.",
  excerpt:
    "Pika est devenu une plateforme multi-modèles simple à prendre en main, avec la licence commerciale dès l'offre à 10 $. Mais le plan gratuit ne donne aucun crédit, et 900 crédits partent vite en vidéo.",
  category: "ia-video",
  tags: ["pika", "avis", "pika prix", "pika gratuit", "pika 2.5", "vidéo ia"],
  date: "2026-10-29",
  updatedAt: "2026-10-29",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/pika-avis.webp",
  imageAlt:
    "Dans un petit atelier de modiste, une femme aux cheveux argentés tient un chapeau en feutre bordeaux devant un téléphone sur mini trépied, sa petite-fille lui montre le cadrage à l'écran",
  keywords: ["avis pika", "pika prix", "pika gratuit", "pika 2.5", "pika licence commerciale"],
  relatedSlugs: ["pika-luma-alternatives-video-ia", "meilleurs-sites-video-ia-gratuits", "dreamina-vs-capcut"],
  faq: [
    {
      question: "Pika est-il gratuit ?",
      answer:
        "L'inscription est gratuite, la génération ne l'est pas. Le plan Free affiche 0 crédit par mois : il sert à acheter des packs, à partir de 25 $ pour 1 500 crédits. Le seul bonus visible le 29 octobre 2026 est celui de Pika pour ChatGPT : 250 crédits après une première génération faite depuis ChatGPT, selon le catalogue des apps.",
    },
    {
      question: "Combien coûte Pika par mois ?",
      answer:
        "Starter 10 $ par mois (8 $ en annuel) pour 900 crédits, Creator 35 $ (28 $ en annuel) pour 3 150 crédits, Fancy de 95 à 880 $ (76 à 704 $ en annuel) à partir de 8 550 crédits, Enterprise sur devis. Prix relevés sur pika.art/pricing le 29 octobre 2026, en dollars.",
    },
    {
      question: "Peut-on utiliser les vidéos Pika commercialement ?",
      answer:
        "Oui sur tous les plans payants, Starter compris : la page tarifs et la FAQ le disent toutes les deux le 29 octobre 2026. Le plan Free n'a pas d'usage commercial, même si tu achètes des packs de crédits. Tu dois aussi avoir les droits sur ce que tu importes, et les conditions du modèle choisi s'appliquent.",
    },
    {
      question: "Pika met-il un filigrane sur les vidéos ?",
      answer:
        "Non sur les plans actuels, y compris le plan gratuit, d'après la FAQ officielle. Les anciens fichiers qui avaient déjà un filigrane le gardent, même si tu changes d'offre.",
    },
    {
      question: "Combien de vidéos peut-on faire avec 900 crédits ?",
      answer:
        "La page tarifs donne 7 clips Seedance 2.5 en 720p de 5 secondes (122 crédits chacun) ou 27 clips Wan 3.0 en 720p de 5 secondes (33 crédits). Le coût de Pika 2.5 n'est pas publié sur la page tarifs : l'app l'affiche avant chaque génération.",
    },
    {
      question: "Que va devenir old.pika.art ?",
      answer:
        "La FAQ annonce sa fermeture, sans date. Les fichiers des comptes payants seront migrés vers le nouveau Pika. Les comptes gratuits ne le seront pas, sauf passage à une offre payante. Si tu as des vidéos sur l'ancienne version, télécharge celles que tu veux garder.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Pika est, en octobre 2026, un bon premier outil vidéo pour qui veut des clips courts, des visuels produit et du son au même endroit, avec la **licence commerciale dès l'offre à 10 $**. Il n'y a plus de filigrane sur aucun plan. En revanche le plan gratuit ne donne aucun crédit, et 900 crédits ne font que 7 clips Seedance 2.5 de 5 secondes. Pour un court métrage avec des personnages suivis sur trente plans, ou pour zéro budget, prends autre chose.",
    },
    {
      type: "p",
      text: "Cet avis repose sur les pages publiques de Pika (tarifs, FAQ, catalogue des apps, page MCP) relues le 29 octobre 2026, avec neuf captures prises le même jour. Je n'ai lancé aucune génération dans Pika pour cet article. La grille a bougé depuis notre relevé du 16 octobre : la licence commerciale était alors réservée à Creator, elle commence maintenant à Starter. Beaucoup d'avis en français parlent encore de plans « Standard » et « Pro » qui n'existent plus.",
    },
    { type: "h2", id: "verdict", text: "Mon avis sur Pika en deux minutes" },
    {
      type: "verdict",
      title: "Mon verdict sur Pika (octobre 2026)",
      pourQui:
        "Les débutants qui veulent sortir des clips sociaux, des photos produit ou une petite pub sans jongler entre cinq sites, et les créateurs qui ont besoin du droit commercial pour moins de 10 $ par mois.",
      forts: [
        "Licence commerciale incluse dès Starter (10 $, ou 8 $ en annuel)",
        "Aucun filigrane, même sur le plan gratuit",
        "Des apps par tâche (Product Shot, Color Grade, Extend Video, Pika Soundtrack) qui évitent d'écrire des prompts compliqués",
        "Des modèles tiers récents à côté de Pika 2.5 : Seedance 2.5, MiniMax H3, Wan 3.0",
        "Un serveur MCP pour piloter Pika depuis ChatGPT ou Claude, avec les mêmes crédits",
      ],
      faibles: [
        "0 crédit par mois en gratuit : il faut acheter un pack de 25 $ au minimum",
        "900 crédits = 7 clips Seedance 2.5 de 5 s en 720p",
        "Aucun remboursement, ni sur l'abonnement ni sur les packs",
        "Fermeture annoncée d'old.pika.art, migration réservée aux comptes payants",
        "Note Trustpilot faible, avec des plaintes sur des générations ratées et le support",
      ],
      verdict:
        "Pour apprendre la vidéo IA par petites touches, Starter vaut ses 10 $, surtout si tu fais tes essais sur Wan 3.0 et gardes Seedance 2.5 pour les plans finaux. Si tu prévois plus d'une minute de vidéo finie par mois, regarde Creator ou un autre outil avant de t'abonner.",
      lien: { label: "Voir la grille officielle de Pika", href: PRICING },
    },
    { type: "h2", id: "a-quoi-sert-pika", text: "Ce que Pika fait vraiment en octobre 2026" },
    {
      type: "p",
      text: "Pika s'est fait connaître avec ses clips à effets, les Pikaffects. Sa page d'accueil le présente maintenant comme une plateforme créative découpée en apps. Tu choisis la tâche (faire une vidéo, retoucher une image, étalonner un clip, ajouter une musique), puis l'app choisit le modèle ou te laisse le choisir. Le modèle maison, Pika 2.5, côtoie des modèles d'autres éditeurs comme Seedance 2.5 de ByteDance ou Wan 3.0 d'Alibaba.",
    },
    {
      type: "screenshot",
      src: `${IMG}-apps.webp`,
      alt: "Catalogue des apps Pika avec Video Studio, Image Studio, Speech Studio, Music Studio, une mise en avant de Seedance 2.5 et un encart Pika pour ChatGPT promettant 250 crédits bonus",
      caption:
        "Le catalogue des apps, visible sans compte. L'encart du bas est le seul moyen gratuit d'obtenir des crédits que j'ai trouvé sur les pages publiques.",
      source: "https://create.pika.art/apps",
      capturedAt: CAPTURE,
      width: 1440,
      height: 760,
    },
    {
      type: "p",
      text: "Pour un débutant, quatre apps comptent. **Video Studio** génère un clip court ou une vidéo de plusieurs plans jusqu'à 30 secondes avec les modèles qui le permettent. **Pikaframes** anime le passage entre deux à cinq images fixes que tu fournis, ce qui donne beaucoup plus de contrôle qu'un simple prompt. **Character Studio** fabrique une fiche de personnage réutilisable. **Product Shot** sort des photos produit sans studio photo. Le catalogue liste aussi Swap Anything, Motion Transfer, Camera Director, Relight Media et Dynamic Captions.",
    },
    {
      type: "p",
      text: "Côté modèles, la page tarifs liste en vidéo Seedance 2.5, MiniMax H3, Wan 3.0, Gemini Omni 1.1 Flash, Pika 2.5 et Pikaframes. Le catalogue des apps met aussi en avant Kling 4.0 et Veo 3.1, absents de la liste de la page tarifs. Je te conseille de vérifier dans l'app le modèle dont tu as besoin avant de payer. Si tu découvres Seedance, mon [guide Seedance](/blog/seedance-guide) explique comment l'écrire.",
    },
    {
      type: "p",
      text: "Depuis une page dédiée, le Pika MCP te permet de brancher Pika sur ChatGPT, Claude, Claude Code, Codex, OpenClaw ou Hermes, puis de demander une vidéo ou une image depuis la conversation. La page annonce 59 apps et modèles accessibles par cette connexion. La FAQ précise que les crédits Pika fonctionnent avec le MCP, alors que l'API pour développeurs a sa propre facturation.",
    },
    {
      type: "screenshot",
      src: `${IMG}-mcp.webp`,
      alt: "Page Pika MCP for ChatGPT avec les onglets ChatGPT, Claude et OpenClaw, le bouton Install ChatGPT Plugin et l'adresse du serveur mcp.pika.art/mcp",
      caption: "La page MCP de Pika. Le serveur est le même pour tous les assistants, seule la procédure d'installation change.",
      source: "https://pika.art/mcp",
      capturedAt: CAPTURE,
      width: 1440,
      height: 660,
    },
    { type: "h2", id: "prix", text: "Combien coûte Pika, et ce que valent 900 crédits" },
    {
      type: "p",
      text: "Pika vend des crédits. Chaque génération en consomme un nombre qui dépend du modèle, de la durée et de la résolution. Les quatre offres, telles que la page tarifs les affiche, en dollars :",
    },
    {
      type: "comparison",
      caption: "Les offres Pika au 29 octobre 2026",
      headers: ["Offre", "Mensuel", "Annuel (par mois)", "Crédits / mois", "Vidéos en parallèle", "Licence commerciale"],
      rows: [
        ["Free", "0 $", "0 $", "0 (packs seulement)", "2", "Non"],
        ["Starter", "10 $", "8 $", "900", "2", "**Oui**"],
        ["Creator", "35 $", "28 $", "3 150", "8", "Oui"],
        ["Fancy", "95 à 880 $", "76 à 704 $", "8 550 et plus", "Illimité", "Oui, file prioritaire"],
        ["Enterprise", "Sur devis", "Sur devis", "Sur mesure", "Illimité", "Oui"],
      ],
      source: { label: "Pika, Pricing", href: PRICING },
      verifieLe: CAPTURE,
      note: "Toutes les offres affichent « All models » et « No watermark ». L'accès anticipé aux nouveaux modèles commence à Fancy 440 $ par mois.",
    },
    {
      type: "screenshot",
      src: `${IMG}-tarifs.webp`,
      alt: "Cartes des offres Pika Free, Starter, Creator et Fancy en facturation mensuelle, avec 0, 900, 3 150 et 8 550 crédits et la licence commerciale cochée dès Starter",
      caption:
        "Les quatre cartes de la page tarifs. La coche « Commercial license » sur Starter est nouvelle : le 16 octobre, elle commençait à Creator.",
      source: PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pika ne publie le coût par génération que pour quatre modèles, et c'est lui qui décide si l'offre te suffit. Un clip **Seedance 2.5** de 5 secondes en 720p coûte **122 crédits**, un clip Wan 3.0 de même format 33 crédits, une image Nano Banana 2 en 1K 8 crédits, une image GPT Image 2.5 en 1K 2 crédits. Pika 2.5, le modèle maison, n'a pas de prix sur cette page : la FAQ dit que chaque app affiche le coût estimé avant de lancer.",
    },
    {
      type: "screenshot",
      src: `${IMG}-credits.webp`,
      alt: "Tableau What your monthly credits make de Pika : Seedance 2.5 à 122 crédits, Wan 3.0 à 33, Nano Banana 2 à 8, GPT Image 2.5 à 2, avec le nombre de générations par offre",
      caption:
        "Le tableau à lire avant de t'abonner : en Starter, 7 clips Seedance 2.5 ou 27 clips Wan 3.0 si tu dépenses tout sur un seul modèle.",
      source: PRICING,
      capturedAt: CAPTURE,
      width: 1280,
      height: 512,
    },
    {
      type: "p",
      text: "En Starter, 7 clips de 5 secondes représentent **35 secondes de Seedance 2.5 par mois**, sans aucune reprise. Avec Creator, 25 clips, soit un peu plus de deux minutes. Quand on débute, on refait presque chaque plan : compte deux ou trois essais par plan réussi. Personne ne fait un mois entier sur un seul modèle, alors voici un mélange réaliste pour les 900 crédits de Starter, calculé avec les coûts officiels :",
    },
    {
      type: "table",
      caption: "Exemple de mois en Starter (900 crédits)",
      headers: ["Usage", "Quantité", "Crédits"],
      rows: [
        ["Essais de mouvement sur Wan 3.0, 720p, 5 s", "10", "330"],
        ["Plans finaux sur Seedance 2.5, 720p, 5 s", "4", "488"],
        ["Images de départ Nano Banana 2, 1K", "10", "80"],
        ["**Total**", "", "**898**"],
      ],
      source: { label: "Pika, Pricing", href: PRICING },
      verifieLe: CAPTURE,
    },
    {
      type: "p",
      text: "Quatre plans finaux de 5 secondes, donc 20 secondes montables par mois. C'est assez pour apprendre à cadrer et à écrire un mouvement de caméra, pas pour sortir une vidéo par semaine sur les réseaux.",
    },
    {
      type: "p",
      text: "Si tu manques de crédits, les packs se prennent sur n'importe quelle offre, Free comprise. Le tarif est fixe : 60 crédits par dollar, de 1 500 crédits pour 25 $ à 66 000 crédits pour 1 000 $. Ils restent valables 365 jours, mais seulement sur pika.art et le MCP : ni l'API, ni l'app iOS, ni old.pika.art. Fais le calcul : en Starter, le crédit te revient à environ 1,1 centime ; en pack, à 1,7 centime. L'abonnement est donc à peu près une fois et demie moins cher au crédit.",
    },
    {
      type: "screenshot",
      src: `${IMG}-packs.webp`,
      alt: "Section Credit Packs de Pika avec des packs de 1 500 à 30 000 crédits vendus de 25 à 500 dollars et la mention que ces crédits ne servent pas sur l'API, l'app iOS ni old.pika.art",
      caption: "Les packs de crédits. La petite ligne grise sous le titre limite leur usage au site et au MCP.",
      source: PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 690,
    },
    { type: "h2", id: "gratuit", text: "Pika est-il gratuit ?" },
    {
      type: "p",
      text: "Non, sauf pour regarder. Le plan Free est gratuit à l'inscription, mais il affiche **0 crédit par mois**. La FAQ le dit clairement : il permet d'acheter des packs sans abonnement, rien de plus. Plusieurs pages en français promettent encore « 80 crédits par mois » ou « 30 vidéos gratuites » : c'était l'ancienne grille, elle a disparu.",
    },
    {
      type: "p",
      text: "Le seul bonus que j'ai trouvé est l'encart **Pika pour ChatGPT** du catalogue des apps : 250 crédits offerts après ta première génération faite depuis ChatGPT. Aux coûts officiels, tu peux en tirer deux clips Seedance 2.5 de 5 secondes, ou sept clips Wan 3.0, ou une trentaine d'images Nano Banana 2. De quoi juger l'interface avant de payer. Attention, même avec des packs achetés, le plan Free **n'a pas d'usage commercial**.",
    },
    {
      type: "p",
      text: "Si tu cherches de vrais crédits quotidiens sans carte bancaire, ma liste des [sites de vidéo IA gratuits](/blog/meilleurs-sites-video-ia-gratuits) recense les offres qui en donnent encore.",
    },
    { type: "h2", id: "licence-filigrane", text: "Licence commerciale et filigrane : ce qui a changé" },
    {
      type: "p",
      text: "Deux idées reçues circulent, et la FAQ officielle les contredit toutes les deux. La première : « il faut l'offre Pro à 28 $ pour vendre ses vidéos ». Faux le 29 octobre 2026, Starter, Creator et Fancy incluent l'usage commercial. La seconde : « les vidéos gratuites ont un filigrane ». Faux aussi, les téléchargements des offres actuelles sont sans filigrane, gratuit compris.",
    },
    {
      type: "screenshot",
      src: `${IMG}-comparatif.webp`,
      alt: "Tableau Compare plans de Pika : prix mensuels et annuels, crédits, générations en parallèle, No watermark à Yes partout et Commercial license à No en Free puis Yes dès Starter",
      caption: "Le tableau comparatif officiel. Les lignes « No watermark » et « Commercial license » suffisent à corriger la plupart des avis en français.",
      source: PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 850,
    },
    {
      type: "screenshot",
      src: `${IMG}-faq-commercial.webp`,
      alt: "FAQ Pika : usage commercial autorisé sur les plans payants Starter, Creator ou Fancy, et téléchargements sans filigrane sur les plans actuels y compris le plan gratuit",
      caption:
        "La FAQ dit la même chose en toutes lettres. Note la dernière phrase : pas d'usage commercial en Free, même avec des packs.",
      source: FAQ,
      capturedAt: CAPTURE,
      width: 750,
      height: 439,
    },
    {
      type: "p",
      text: "Deux réserves restent. Si tu as gardé un ancien plan Pika, ce sont ses conditions qui comptent. Et les fichiers déjà filigranés ne seront jamais nettoyés. J'en parle plus en détail dans mon article sur la [vidéo IA sans filigrane](/blog/video-ia-sans-filigrane), qui compare les règles des principaux outils.",
    },
    { type: "h2", id: "avant-de-payer", text: "Trois choses à savoir avant de payer" },
    {
      type: "p",
      text: "D'abord, Pika ne rembourse rien, ni l'abonnement ni les packs. Si tu résilies, ton offre reste active jusqu'à la fin de la période payée, puis tu repasses en Free. Les crédits du mois ne sont pas reportés, même en annuel. Commence en mensuel : 2 $ de plus par mois, mais tu peux partir au bout de trente jours.",
    },
    {
      type: "p",
      text: "Ensuite, la FAQ annonce la fermeture d'old.pika.art, sans donner de date. Les fichiers des comptes payants seront migrés vers le nouveau Pika ; ceux des comptes gratuits, non, sauf passage à une offre payante. Si tu as fait des vidéos sur l'ancienne version, télécharge celles que tu tiens à garder dès maintenant.",
    },
    {
      type: "screenshot",
      src: `${IMG}-faq-old-pika.webp`,
      alt: "FAQ Pika sur l'ancienne version : même compte et même abonnement, projet OG Pika pour les créations migrées, et migration des fichiers à la fermeture d'old.pika.art réservée aux utilisateurs payants",
      caption: "La réponse sur old.pika.art. « On a free plan? Upgrade now » : les comptes gratuits ne seront pas migrés.",
      source: FAQ,
      capturedAt: CAPTURE,
      width: 750,
      height: 517,
    },
    {
      type: "p",
      text: "Enfin, la FAQ écrit que Pika peut utiliser tes imports et tes créations pour faire tourner et améliorer ses services, modèles compris. Avec un modèle tiers, les règles de ce fournisseur s'ajoutent. Évite d'y envoyer des visages ou des images de clients sans leur accord.",
    },
    {
      type: "screenshot",
      src: `${IMG}-faq-confidentialite.webp`,
      alt: "FAQ Pika Are my creations private : Pika peut utiliser les imports et créations pour exploiter et améliorer ses services, y compris ses modèles",
      caption: "La réponse sur la confidentialité, à lire avant d'importer des photos de personnes réelles.",
      source: FAQ,
      capturedAt: CAPTURE,
      width: 750,
      height: 200,
    },
    {
      type: "p",
      text: "Un dernier détail qui fait perdre des abonnements : la FAQ prévient qu'une connexion Google et une connexion Apple peuvent créer deux comptes séparés, même avec la même adresse. Reconnecte-toi toujours de la même façon.",
    },
    { type: "h2", id: "debuter", text: "Débuter avec Pika sans gaspiller tes crédits" },
    {
      type: "p",
      text: "Avec 900 crédits, l'ordre dans lequel tu dépenses compte plus que le modèle choisi. Pour un premier mois, je ferais ainsi :",
    },
    {
      type: "ol",
      items: [
        "Récupère les 250 crédits de Pika pour ChatGPT avant de t'abonner, et fais deux ou trois clips pour voir si l'interface te convient.",
        "Prends Starter en mensuel, pas en annuel, le temps de savoir si tu restes.",
        "Prépare tes images de départ à 8 crédits (Nano Banana 2) ou 2 crédits (GPT Image 2.5) : une bonne image de départ évite trois vidéos ratées.",
        "Teste le mouvement sur Wan 3.0 à 33 crédits, en changeant une seule chose à la fois dans le prompt, comme le conseille la FAQ.",
        "Garde Seedance 2.5 pour le plan que tu vas vraiment monter, et regarde le coût affiché par l'app avant chaque lancement.",
        "Pour un enchaînement précis, passe par Pikaframes avec deux à cinq images fixes plutôt que par un long prompt.",
      ],
    },
    {
      type: "p",
      text: "La FAQ donne un exemple utile pour écrire un mouvement : décrire « une lente avancée vers un raton laveur assis à un minuscule bureau » plutôt que « raton laveur cinématique ». Le principe vaut pour tous les modèles : sujet, action, décor, lumière, puis le mouvement de caméra.",
    },
    { type: "h2", id: "limites", text: "Les limites que tu vas rencontrer" },
    {
      type: "p",
      text: "La cohérence d'un personnage sur plusieurs plans reste fragile. Character Studio crée une fiche avec différents angles, et la FAQ conseille de réutiliser les mêmes références à chaque plan, tout en reconnaissant que le résultat peut varier selon le modèle et la génération. Pour une histoire de dix plans avec le même visage, tu passeras du temps à trier.",
    },
    {
      type: "p",
      text: "Les retours publics sont mitigés. Le 29 octobre 2026, la [page Trustpilot de Pika](https://www.trustpilot.com/review/pika.art) affiche 2,2 sur 5 pour 77 avis, dont 79 % d'avis à une étoile (Trustpilot bloque les captures automatiques, je n'ai donc pas pu en joindre une). Les plaintes de septembre parlent de générations qui échouent pendant près de 48 heures, de crédits qui ne se renouvellent pas et d'un support qui ne répond pas. Le 16 octobre, la note était de 1,7 sur 73 avis ; entre-temps, le profil a été revendiqué par l'entreprise en octobre et cinq avis à cinq étoiles sont arrivés entre le 22 et le 25 octobre. Lis surtout les avis négatifs détaillés, ils décrivent des cas précis.",
    },
    {
      type: "p",
      text: "Sur une génération ratée, la FAQ ne promet pas de remboursement automatique des crédits : elle demande de contacter le support avec les détails. Garde une trace de ce que tu lances (heure, app, modèle) si tu enchaînes beaucoup de vidéos.",
    },
    { type: "h2", id: "alternatives", text: "Quand choisir autre chose que Pika" },
    {
      type: "table",
      headers: ["Ton besoin", "Mon conseil"],
      rows: [
        ["Des clips sociaux et des visuels produit, budget de 10 $", "Pika Starter, essais sur Wan 3.0, plans finaux sur Seedance 2.5"],
        ["Zéro budget", "Un outil avec crédits gratuits réguliers, voir [ma sélection gratuite](/blog/meilleurs-sites-video-ia-gratuits)"],
        ["Seedance au meilleur prix, plus le montage", "Dreamina ou CapCut, selon mon [comparatif Dreamina ou CapCut](/blog/dreamina-vs-capcut)"],
        ["Comparer Seedance et Veo sur la même scène", "Mon [comparatif Seedance vs Veo](/blog/seedance-vs-veo)"],
        ["Un court métrage avec scénario, découpage et personnages suivis", "Un outil de préproduction relié à la génération"],
      ],
    },
    {
      type: "p",
      text: "Pour une vue plus large, mon article sur [Pika, Luma et les autres alternatives vidéo](/blog/pika-luma-alternatives-video-ia) range les outils par usage, et celui sur les [alternatives à Sora](/blog/alternatives-sora) classe les générateurs pour un débutant depuis la fermeture de Sora.",
    },
    {
      type: "p",
      text: "Pour la dernière ligne du tableau, je suis juge et partie, puisque j'ai cofondé ScreenWeaver. L'outil sert à préparer un film entier : tu écris le scénario, tu le découpes en plans, tu prépares le storyboard, puis tu génères la vidéo, avec Seedance 2.5 par défaut, le tout relié au script. L'offre Screenwriter est gratuite pour écrire ; la génération demande l'offre Auteur, à 39,99 $ par mois pour 6 000 crédits (prix relevé le 29 octobre 2026). Pour trois clips par semaine, Pika est plus simple et moins cher. Pour une histoire de vingt plans, c'est une autre affaire.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "seedance",
      title: "Passe du clip isolé à une scène découpée",
      text: "Écris ta scène, découpe-la en plans et génère chaque plan avec Seedance 2.5 sans perdre le fil de ton script.",
    },
    {
      type: "p",
      text: "Mon avis final : avec la licence commerciale dès 10 $ et la fin du filigrane, Pika a rendu sa grille plus simple à lire. Pour apprendre, c'est un bon terrain, à condition de compter tes crédits en secondes de Seedance. Récupère le bonus ChatGPT, prends Starter en mensuel, et décide au bout d'un mois si tu montes sur Creator ou si tu pars ailleurs.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 29 octobre 2026 les pages publiques de Pika : tarifs, FAQ (toutes les réponses dépliées), catalogue des apps, page MCP et page d'accueil. Les neuf captures viennent de ces pages, prises le même jour, sans connexion et sans accepter de cookies. J'ai comparé avec notre fiche du 16 octobre 2026 pour repérer ce qui avait changé.",
        "Les volumes de clips par offre viennent du tableau officiel de Pika ; le mois type et le coût au crédit sont mes calculs à partir de ces chiffres. La note Trustpilot a été lue le 29 octobre (le site bloque les captures automatiques). Je suis co-fondateur de ScreenWeaver, cité en fin d'article ; pour ScreenWeaver, je ne cite que des fonctions et des prix en ligne le jour de la rédaction.",
      ],
      teste: ["La lecture des pages officielles de Pika, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée dans Pika pour cet article",
        "Le coût réel de Pika 2.5 en crédits, absent de la page tarifs",
        "Le bonus de 250 crédits de Pika pour ChatGPT",
        "La qualité comparée de Pika 2.5 et des modèles tiers",
        "L'app iOS et l'API",
      ],
      sources: [
        { label: "Pika, Pricing", href: PRICING },
        { label: "Pika, Help Center (FAQ)", href: FAQ },
        { label: "Pika, catalogue des apps", href: "https://create.pika.art/apps" },
        { label: "Pika MCP", href: "https://pika.art/mcp" },
        { label: "Trustpilot, Pika", href: "https://www.trustpilot.com/review/pika.art" },
        { label: "ScreenWeaver, offres", href: "https://www.screenweaver.ai/#pricing" },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-29 -->
