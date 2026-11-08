import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-08";
const IMG = "/images/articles/alternatives-heygen-gratuit";
const HG_PRICING = "https://www.heygen.com/pricing";
const SY_PRICING = "https://www.synthesia.io/pricing";
const VZ_PRICING = "https://www.vidnoz.com/pricing.html";
const DID_PRICING = "https://www.d-id.com/pricing/studio/";
const CAP_PRICING = "https://www.captions.ai/pricing";
const IT_GITHUB = "https://github.com/MeiGen-AI/InfiniteTalk";
const IT_HF = "https://huggingface.co/MeiGen-AI/InfiniteTalk";
const HG_TRUSTPILOT = "https://www.trustpilot.com/review/heygen.com";

export const alternativesHeygenGratuit: Article = {
  title: "Alternative gratuite à HeyGen : que valent les plans à 0 € ?",
  slug: "alternatives-heygen-gratuit",
  description:
    "Alternative gratuite à HeyGen : Synthesia, Vidnoz, D-ID, Captions et InfiniteTalk. Minutes, filigrane et droits des plans à 0 € relevés le 8/11/2026.",
  excerpt:
    "Le gratuit de HeyGen, c'est trois vidéos d'une minute par mois avec filigrane. J'ai relu les plans à 0 € de cinq alternatives : celle qui donne le plus de minutes ne laisse pas télécharger, celle qui laisse vendre garde son logo.",
  category: "ia-video",
  tags: ["heygen", "avatar ia", "avatar ia gratuit", "synthesia", "vidnoz", "d-id", "alternatives"],
  date: "2026-11-08",
  updatedAt: "2026-11-08",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/alternatives-heygen-gratuit.webp",
  imageAlt:
    "Dans un appartement vide à louer, à la tombée du jour, une agente immobilière en blazer marine relit son texte imprimé avant de se filmer avec un téléphone posé sur un mini trépied, pendant qu'un collègue accroupi tient un réflecteur",
  keywords: [
    "alternative heygen gratuit",
    "heygen gratuit",
    "avatar ia gratuit",
    "alternative heygen",
    "avatar parlant gratuit",
  ],
  relatedSlugs: ["heygen-guide-avatars", "synthesia-vs-heygen", "avatars-ia-ugc-presentateur-virtuel"],
  faq: [
    {
      question: "Quelle est la meilleure alternative gratuite à HeyGen ?",
      answer:
        "Ça dépend de ce que tu dois faire de la vidéo. Pour la télécharger et la poster, Vidnoz donne 60 secondes par jour, jusqu'à 3 minutes par vidéo, en 720p avec filigrane. Pour la partager par lien à une équipe, Synthesia Basic donne 10 minutes par mois, sans téléchargement. Pour zéro filigrane, il faut passer par un modèle open source comme InfiniteTalk, sur ta propre carte graphique.",
    },
    {
      question: "HeyGen est-il vraiment gratuit ?",
      answer:
        "Oui, avec des limites serrées. Le plan Free affichait le 8 novembre 2026 trois vidéos par mois, une minute maximum chacune, avec filigrane, un avatar vidéo personnalisé et plus de 500 avatars prêts à l'emploi. Le retrait du filigrane commence avec Creator, à 29 $ par mois en mensuel.",
    },
    {
      question: "Existe-t-il un avatar IA gratuit sans filigrane ?",
      answer:
        "Pas chez les éditeurs que j'ai relus : HeyGen, Synthesia, Vidnoz et D-ID marquent tous les vidéos du plan à 0 €. La seule voie sans filigrane que j'ai trouvée, ce sont les modèles open source comme InfiniteTalk (licence Apache 2.0), qui tournent sur ton propre matériel et demandent une carte graphique NVIDIA sérieuse.",
    },
    {
      question: "Peut-on utiliser une vidéo d'avatar gratuite pour un usage commercial ?",
      answer:
        "Vidnoz l'écrit noir sur blanc : la licence commerciale complète s'applique au plan gratuit, avec le filigrane Vidnoz. L'essai D-ID est limité à un usage personnel. HeyGen et Synthesia ne le précisent pas sur leur page tarifs : lis leurs conditions d'utilisation avant de publier une vidéo de marque.",
    },
    {
      question: "Combien de minutes donne chaque plan gratuit ?",
      answer:
        "Relevé du 8 novembre 2026 : HeyGen, trois vidéos d'une minute par mois ; Synthesia Basic, 10 minutes de vidéo par mois ; Vidnoz, 60 secondes par jour et 3 minutes maximum par vidéo ; D-ID, 3 minutes au total sur un essai de 14 jours. Captions n'a aucun crédit IA dans son plan gratuit.",
    },
    {
      question: "Captions permet-il de créer un avatar gratuitement ?",
      answer:
        "Non. Le tableau de Captions donne zéro crédit IA au plan gratuit, et la création d'un jumeau numérique ou d'un acteur IA figure dans l'offre Max, affichée à 24,99 $ par mois (prix iOS). Le gratuit sert au montage et aux sous-titres.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu cherches une **alternative gratuite à HeyGen** parce que trois vidéos d'une minute par mois, avec filigrane, ne suffisent pas ? Ma réponse courte, après avoir relu les grilles le 8 novembre 2026 : **Vidnoz** si tu dois télécharger et poster la vidéo, **Synthesia Basic** si un lien de partage suffit, et un modèle open source comme **InfiniteTalk** si tu refuses tout filigrane et que tu as la machine pour. Aucun éditeur n'offre un avatar parlant gratuit sans logo. Le reste de l'article détaille ce que chaque plan à 0 € autorise vraiment, minute par minute.",
    },
    {
      type: "p",
      text: "Précision de méthode : je n'ai lancé aucune génération pour cet article. Tout vient des pages tarifs officielles, capturées le même jour, et de la documentation des outils. Si tu veux d'abord comprendre comment fonctionne HeyGen lui-même, mon [guide complet des avatars HeyGen](/blog/heygen-guide-avatars) reprend ses fonctions une par une.",
    },
    { type: "h2", id: "verdict", text: "Mon verdict en deux minutes" },
    {
      type: "verdict",
      title: "Quelle alternative gratuite à HeyGen choisir",
      pourQui:
        "Les créateurs, formateurs et petites entreprises qui veulent un avatar parlant sans payer, ou au moins essayer sérieusement avant de payer.",
      forts: [
        "Vidnoz recharge 60 secondes chaque jour, accepte 3 minutes par vidéo et autorise l'usage commercial même en gratuit",
        "Synthesia Basic offre 10 minutes de vidéo par mois, le plus gros volume mensuel de la liste",
        "InfiniteTalk tourne chez toi, sous licence Apache 2.0, sans aucun filigrane",
      ],
      faibles: [
        "Tous les plans gratuits des éditeurs ajoutent un filigrane",
        "Synthesia Basic ne permet pas de télécharger la vidéo, seulement de la partager par lien",
        "L'essai D-ID ne dure que 14 jours et reste en usage personnel",
        "Captions n'a aucun crédit IA en gratuit : pas d'avatar sans payer",
      ],
      verdict:
        "Pour poster une vidéo courte sur un réseau, Vidnoz est le plan à 0 € le plus utilisable. Pour présenter un module à une équipe, Synthesia Basic. Dès que le filigrane devient un problème, le vrai choix se fait entre un abonnement d'entrée de gamme et une installation open source.",
    },
    { type: "h2", id: "pourquoi", text: "Pourquoi le gratuit de HeyGen bloque si vite" },
    {
      type: "p",
      text: "Sur la page tarifs de HeyGen, le plan Free tient en cinq lignes : **trois vidéos par mois avec filigrane**, une minute maximum par vidéo, accès à Avatar IV et au Video Agent, un avatar vidéo personnalisé plus 500 présentateurs prêts à l'emploi, et plus de 30 langues. Côté fonctions, rien à redire. Le problème arrive dès la deuxième vidéo du mois.",
    },
    {
      type: "screenshot",
      src: `${IMG}-heygen-free.webp`,
      alt: "Page tarifs HeyGen avec les cartes Free à 0 $, Creator à 29 $ et Pro à 49 $ par mois, le plan Free listant 3 vidéos par mois avec filigrane et 1 minute maximum par vidéo",
      caption:
        "Le plan Free de HeyGen : trois vidéos d'une minute par mois, filigranées. Le retrait du logo HeyGen n'apparaît qu'à partir de Creator.",
      source: HG_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Une minute, c'est un pitch de 130 à 150 mots à un débit normal (ordre de grandeur, pas un chiffre de HeyGen). Assez pour une présentation produit ou un message d'accueil. Trop court pour un module de formation, une FAQ vidéo ou un tutoriel. Et avec trois essais par mois, une faute de prononciation sur un nom propre te coûte un tiers de ton quota.",
    },
    {
      type: "p",
      text: "Le tableau comparatif de la même page ajoute deux détails qu'on lit rarement. La ligne « Watermark removal » est cochée seulement pour Creator et Pro. Et la ligne de résolution d'export affiche une croix pour Free, sans chiffre, quand Creator monte à 1080p et Pro à la 4K.",
    },
    {
      type: "screenshot",
      src: `${IMG}-heygen-tableau.webp`,
      alt: "Tableau comparatif HeyGen Free, Creator et Pro : résolution d'export, imports PowerPoint et PDF, entrée audio et retrait du filigrane, puis 500 avatars stock en Free contre 700 en payant",
      caption:
        "Le comparatif HeyGen : pas de retrait du filigrane en Free, 500 avatars stock au lieu de 700, et Avatar IV limité à une minute par vidéo.",
      source: HG_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Les retours publics éclairent l'étape suivante, celle où tu passes au payant. Parmi les avis une étoile affichés sur [la page Trustpilot de HeyGen](" + HG_TRUSTPILOT + ") le 8 novembre 2026 (5 199 avis au total), deux clients racontent avoir découvert le coût en crédits d'une vidéo seulement après sa génération, et un autre reproche de perdre ses crédits restants à la résiliation. Trustpilot précise qu'il ne vérifie pas le contenu des avis. Raison de plus pour tout tester en gratuit avant de payer.",
    },
    { type: "h2", id: "tableau", text: "Les plans gratuits côte à côte" },
    {
      type: "comparison",
      caption: "Ce que donnent les plans à 0 € des alternatives à HeyGen",
      headers: ["Outil", "Ce que tu as gratuitement", "Durée max", "Filigrane", "Téléchargement et droits"],
      rows: [
        ["HeyGen Free", "3 vidéos par mois, 1 avatar perso, 500+ avatars", "1 min par vidéo", "Oui", "Droits non précisés sur la page tarifs"],
        ["Synthesia Basic", "10 min de vidéo par mois, 9 avatars, 500 crédits", "Non précisée", "Oui (logo Synthesia)", "Partage par lien, téléchargement à partir de Starter"],
        ["Vidnoz Free", "30 crédits par jour (60 s), 1 600+ avatars", "3 min par vidéo", "Oui", "720p, licence commerciale avec filigrane"],
        ["D-ID Trial", "3 min au total, 100+ avatars, 1 avatar perso", "14 jours d'essai", "Plein écran", "Licence d'usage personnel"],
        ["Captions Free", "Aucun crédit IA", "Pas d'avatar", "Sans objet", "Montage et sous-titres seulement"],
        ["InfiniteTalk", "Modèle open source complet", "Longueur illimitée annoncée", "Aucun", "Apache 2.0, ta propre carte graphique"],
      ],
      source: [
        { label: "HeyGen Pricing", href: HG_PRICING },
        { label: "Synthesia Pricing", href: SY_PRICING },
        { label: "Vidnoz Pricing", href: VZ_PRICING },
        { label: "D-ID Pricing", href: DID_PRICING },
        { label: "Captions Pricing", href: CAP_PRICING },
        { label: "InfiniteTalk sur GitHub", href: IT_GITHUB },
      ],
      verifieLe: CAPTURE,
      releveLabel: "Offres relevées le",
      note: "Pages consultées sans compte. Les quotas changent souvent : revérifie avant de t'abonner.",
    },
    {
      type: "p",
      text: "Lis ce tableau colonne par colonne, et la dernière avant les autres. C'est elle qui décide si la vidéo sert à quelque chose une fois générée. Une vidéo que tu ne peux pas télécharger ne finira pas sur Instagram. Une vidéo sous licence personnelle ne finira pas sur la page d'accueil de ton client.",
    },
    { type: "h2", id: "synthesia", text: "Synthesia Basic : le plus de minutes, mais pas de téléchargement" },
    {
      type: "p",
      text: "Synthesia est l'alternative la plus citée à HeyGen, et son plan Basic à 0 € donne effectivement le plus gros volume : **10 minutes de vidéo par mois**, 500 crédits mensuels, 9 avatars IA, plus de 140 langues et voix. Il donne aussi accès à Syren, leur agent vidéo, pour une vidéo.",
    },
    {
      type: "screenshot",
      src: `${IMG}-synthesia-basic.webp`,
      alt: "Page tarifs Synthesia : carte Basic à 0 € par mois avec 500 crédits, partage par lien et filigrane Synthesia, à côté de Starter à 12 € et Pro à 49 € par mois en annuel",
      caption:
        "La carte Basic de Synthesia se limite au partage par lien et prévient que les vidéos portent le filigrane. « Download your content » n'apparaît que dans Starter.",
      source: SY_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Regarde maintenant la colonne d'à côté. La carte Basic parle de **partager ton contenu par lien**. La ligne « Download your content » apparaît seulement dans Starter, avec « Remove Synthesia logo ». En gratuit, ta vidéo reste donc sur un lien Synthesia, avec le logo. Une équipe interne qui suit un module de formation s'en accommode très bien. Un Reel ou une pub, beaucoup moins.",
    },
    {
      type: "screenshot",
      src: `${IMG}-synthesia-tableau.webp`,
      alt: "Tableau comparatif Synthesia, section Syren : accès sur tous les plans, une vidéo en Basic, filigrane Synthesia logo en Basic et No watermark sur Starter, Pro et Enterprise",
      caption:
        "Dans le comparatif détaillé, la ligne Watermark de Syren confirme le logo Synthesia sur Basic et l'absence de filigrane dès Starter.",
      source: SY_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Côté prix, la grille a bougé depuis mi-octobre. Le 8 novembre 2026, Starter s'affiche à 12 € par mois en annuel (144 € par an, 19 € barré), et Pro à 49 € par mois en annuel. Les crédits non utilisés ne se reportent pas d'un mois sur l'autre, selon la FAQ de la même page. Si tu hésites entre les deux plateformes en payant, mon [comparatif Synthesia vs HeyGen](/blog/synthesia-vs-heygen) entre dans le détail des usages pro.",
    },
    { type: "h2", id: "vidnoz", text: "Vidnoz Free : 60 secondes par jour qui se rechargent" },
    {
      type: "p",
      text: "Vidnoz fonctionne autrement : pas de quota mensuel, mais **30 crédits par jour, soit 60 secondes de vidéo**. Une vidéo peut durer jusqu'à 3 minutes, à condition de cumuler. La bibliothèque compte plus de 1 600 avatars, 890 voix, et 5 avatars photo par jour. L'export plafonne en 720p.",
    },
    {
      type: "screenshot",
      src: `${IMG}-vidnoz-free.webp`,
      alt: "Tableau Compare Plans de Vidnoz : Free à 0 $ par mois avec 30 crédits par jour équivalant à 60 secondes et 3 minutes maximum par vidéo, Starter à 19,99 $ et Business à 56,99 $ par mois en annuel",
      caption:
        "Le quota de Vidnoz se compte à la journée : 30 crédits, soit une minute de vidéo, et 3 minutes maximum par vidéo en gratuit.",
      source: VZ_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Une ligne du tableau d'export le met à part : **« Full Commercial License : With Vidnoz watermark »** dans la colonne Free. Autrement dit, tu peux utiliser commercialement une vidéo du plan gratuit, à condition de garder le filigrane. C'est le seul éditeur de la liste qui l'écrit aussi clairement sur sa page tarifs.",
    },
    {
      type: "screenshot",
      src: `${IMG}-vidnoz-licence.webp`,
      alt: "Section Sharing et Export du comparatif Vidnoz : résolution de téléchargement 720P en Free et 1080P en payant, licence commerciale complète avec filigrane Vidnoz sur le plan gratuit",
      caption:
        "La ligne qui change tout pour un usage pro : licence commerciale complète en gratuit, avec le filigrane Vidnoz, et export en 720p.",
      source: VZ_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Les limites sont nettes aussi. Les avatars « Expressive », les plus vivants, se résument en gratuit à **un seul usage de 30 secondes en SD**. Le texte est plafonné à 2 000 caractères par scène. Et la vidéo garde le logo. À mon avis, il reste le plan gratuit le plus utilisable pour publier une vidéo courte sur un réseau, à condition d'accepter ce logo et de ne pas viser la qualité des avatars haut de gamme.",
    },
    { type: "h2", id: "d-id", text: "D-ID : un essai de 14 jours avec filigrane plein écran" },
    {
      type: "p",
      text: "D-ID est souvent rangé dans les « HeyGen gratuits ». Sa page Studio parle pourtant d'un **essai de 14 jours**, avec 3 minutes au total pour les vidéos, les agents, la traduction et l'API. Plus de 100 avatars stock, un avatar personnel, un filigrane plein écran et une licence d'usage personnel.",
    },
    {
      type: "screenshot",
      src: `${IMG}-did-trial.webp`,
      alt: "Page tarifs D-ID Studio : colonne Trial à 0 $ pour un essai de 14 jours avec 3 minutes de vidéo, filigrane plein écran, à côté des plans Lite à 4,7 $, Pro à 16 $ et Advanced à 108 $ par mois en annuel",
      caption:
        "L'offre D-ID à 0 $ est un essai de 14 jours : 3 minutes au total, filigrane plein écran. Le plan Lite garde un filigrane D-ID.",
      source: DID_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Autre surprise : le plan payant le moins cher, **Lite à 4,7 $ par mois en annuel** (56 $ par an), affiche encore « D-ID watermark ». Payer ne suffit donc pas toujours à retirer le logo, il faut regarder plan par plan. D-ID reste intéressant pour tester une photo qui parle en quelques minutes, pas pour produire chaque semaine.",
    },
    { type: "h2", id: "captions", text: "Captions : le gratuit ne fait pas d'avatar" },
    {
      type: "p",
      text: "Captions apparaît dans beaucoup de listes d'alternatives grâce à son AI Twin. Son tableau comparatif règle la question : la ligne « AI usage credits » affiche **None** pour le plan Free. Créer un jumeau numérique ou un acteur IA figure dans l'offre Max, à 24,99 $ par mois avec 500 crédits, prix indiqués pour iOS.",
    },
    {
      type: "screenshot",
      src: `${IMG}-captions-gratuit.webp`,
      alt: "Tableau comparatif Captions : quantité de crédits d'usage IA None pour Free, Medium pour Max et High pour Frontier, puis les outils de montage classiques cochés en gratuit",
      caption:
        "Chez Captions, le plan gratuit n'a aucun crédit IA : il couvre le montage et les sous-titres, pas la génération d'avatar.",
      source: CAP_PRICING,
      capturedAt: CAPTURE,
      width: 1440,
      height: 590,
    },
    {
      type: "p",
      text: "Le gratuit sert quand même à couper, zoomer et sous-titrer une vidéo tournée face caméra. Si tu acceptes de te filmer toi-même, c'est d'ailleurs souvent la vraie alternative la moins chère à un avatar.",
    },
    { type: "h2", id: "open-source", text: "InfiniteTalk : zéro filigrane, si tu as la machine" },
    {
      type: "p",
      text: "Dernière option, d'une autre nature : les modèles open source. [InfiniteTalk](" + IT_GITHUB + "), publié par MeiGen-AI sous **licence Apache 2.0**, génère une vidéo de personnage qui parle à partir d'une image et d'une piste audio, ou redouble une vidéo existante en synchronisant lèvres, tête et posture. Le dépôt annonce une longueur de vidéo illimitée, en 480p ou 720p.",
    },
    {
      type: "screenshot",
      src: `${IMG}-infinitetalk.webp`,
      alt: "Dépôt GitHub MeiGen-AI InfiniteTalk : description de génération de vidéo parlante de longueur illimitée en image vers vidéo et vidéo vers vidéo, licence Apache-2.0, 8,3k étoiles",
      caption:
        "Le dépôt InfiniteTalk : licence Apache 2.0, génération audio vers vidéo, aucune plateforme ni filigrane entre toi et le fichier.",
      source: IT_GITHUB,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Ici, tu paies en matériel et en temps. InfiniteTalk s'appuie sur Wan2.1, un modèle image vers vidéo de 14 milliards de paramètres, et le README donne une commande pour les configurations à « très faible VRAM » sans chiffrer le minimum. Il cite aussi Wan2GP, une interface optimisée pour les petites cartes graphiques. Les poids sont aussi listés [sur Hugging Face](" + IT_HF + "). Sans carte NVIDIA récente et un peu d'aisance avec Python, oublie : tu passeras plus de temps à installer qu'à produire.",
    },
    {
      type: "p",
      text: "Autre différence : pas d'avatars stock ni de voix intégrées. Tu fournis le visage et l'audio. Pour la voix, il te faut donc un outil de synthèse vocale à côté. Pour aller plus loin sur la synchronisation labiale, j'ai détaillé les méthodes dans mon article sur [le lip-sync IA pour faire parler un personnage](/blog/lip-sync-ia-faire-parler-personnage).",
    },
    { type: "h2", id: "methode", text: "Ta première vidéo d'avatar sans payer, en 5 étapes" },
    {
      type: "p",
      text: "Voici l'ordre dans lequel je m'y prendrais pour ne pas griller un quota gratuit sur une erreur évitable. Je ne l'ai pas chronométré sur chaque outil, prends-le comme une méthode.",
    },
    {
      type: "ol",
      items: [
        "**Choisis l'outil par la destination de la vidéo.** Réseau social : Vidnoz. Lien interne pour une équipe : Synthesia Basic. Démo à un client sans logo : aucun gratuit ne convient, prends un mois d'abonnement.",
        "**Écris un script de 100 à 130 mots** pour tenir sous la minute. Lis-le à voix haute avec un chronomètre avant de le coller.",
        "**Écris les noms propres comme ils se prononcent.** Une marque, un prénom, un sigle : c'est là que les voix de synthèse trébuchent, et chaque nouvelle génération te coûte du quota.",
        "**Découpe en deux ou trois scènes courtes.** Si une phrase sort mal, tu ne régénères qu'une scène.",
        "**Vérifie la vidéo en entier avant de la publier**, filigrane compris. Regarde la bouche sur les mots longs et les fins de phrase.",
      ],
    },
    {
      type: "p",
      text: "Si ton projet est une formation complète plutôt qu'une vidéo isolée, lis aussi mon guide pour [créer des vidéos de formation en ligne avec l'IA](/blog/videos-formation-en-ligne-ia) : la logique de production en série change le calcul des plans gratuits.",
    },
    { type: "h2", id: "choisir", text: "Laquelle prendre selon ton cas" },
    {
      type: "ul",
      items: [
        "Pour poster une vidéo courte sur Instagram ou LinkedIn, prends Vidnoz Free, en acceptant le logo et le 720p.",
        "Pour un module destiné à une équipe, Synthesia Basic et son lien de partage font l'affaire, avec 10 minutes par mois.",
        "Si tu veux juste voir une photo parler une fois, l'essai D-ID ou le gratuit de HeyGen suffisent largement.",
        "Zéro filigrane et un PC de jeu récent sous la main ? InfiniteTalk, avec une voix générée à côté.",
        "Pour livrer un client, oublie les plans gratuits et compare les entrées de gamme : HeyGen Creator à 29 $ par mois en mensuel, Synthesia Starter à 12 € par mois en annuel, Vidnoz Starter à 19,99 $ par mois en annuel.",
      ],
    },
    {
      type: "p",
      text: "Si tu te demandes encore si un avatar est la bonne solution, mon article sur [les avatars IA en UGC et en présentateur virtuel](/blog/avatars-ia-ugc-presentateur-virtuel) aide à trancher entre avatar, voix off et tournage face caméra.",
    },
    { type: "cta", variant: "formation" },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 8 novembre 2026, sans me connecter à aucun compte, les pages tarifs de HeyGen, Synthesia, Vidnoz, D-ID Studio et Captions, ainsi que le dépôt GitHub et la fiche Hugging Face d'InfiniteTalk. Les neuf captures viennent de ces pages, prises le même jour dans Chrome, sans accepter de cookies. Hedra a été écarté : sa page tarifs ne présentait plus de plan gratuit lisible ce jour-là.",
        "Les durées traduites en nombre de mots sont des ordres de grandeur de ma part. Je ne touche aucune commission sur les outils cités, et je suis co-fondateur de ScreenWeaver, qui ne fait pas d'avatars parlants.",
      ],
      teste: ["La lecture des grilles tarifaires et des tableaux comparatifs publics, capturés le même jour"],
      nonTeste: [
        "Aucune vidéo générée, sur aucun des outils : je ne compare pas la qualité des avatars",
        "L'installation locale d'InfiniteTalk",
        "Les conditions d'utilisation complètes de HeyGen et de Synthesia sur l'usage commercial du gratuit",
      ],
      sources: [
        { label: "HeyGen Pricing", href: HG_PRICING },
        { label: "Synthesia Pricing", href: SY_PRICING },
        { label: "Vidnoz Pricing", href: VZ_PRICING },
        { label: "D-ID Studio Pricing", href: DID_PRICING },
        { label: "Captions Pricing", href: CAP_PRICING },
        { label: "InfiniteTalk (GitHub)", href: IT_GITHUB },
      ],
    },
  ],
};
