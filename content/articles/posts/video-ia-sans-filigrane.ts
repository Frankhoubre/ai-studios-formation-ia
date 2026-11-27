import type { Article } from "@/lib/types/article";

export const videoIaSansFiligrane: Article = {
  title: "Vidéo IA sans filigrane : options honnêtes",
  slug: "video-ia-sans-filigrane",
  description:
    "Retirer le logo d'une vidéo IA, c'est un abonnement ou un réglage. Le filigrane invisible, lui, reste dans le fichier. Les options honnêtes, outil par outil.",
  excerpt:
    "Le logo dans le coin d'une vidéo IA s'enlève, souvent pour une douzaine de dollars par mois, parfois avec un simple interrupteur. Le marquage caché dans le fichier, lui, voyage avec ta vidéo quoi que tu paies.",
  category: "ia-video",
  tags: ["vidéo ia", "filigrane", "watermark", "synthid", "outils gratuits"],
  date: "2026-10-12",
  updatedAt: "2026-10-12",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/video-ia-sans-filigrane.webp",
  imageAlt:
    "Dans un vieux moulin à papier au petit matin, un papetier barbu en tablier de toile lève une feuille de papier encore humide contre une haute fenêtre, et la lumière fait apparaître un filigrane pâle dans la pâte, avec une cuve et une forme en bois qui ruisselle au premier plan",
  keywords: [
    "vidéo ia sans filigrane",
    "watermark vidéo ia",
    "enlever filigrane vidéo ia",
    "générateur vidéo ia sans filigrane",
    "synthid filigrane invisible",
  ],
  relatedSlugs: [
    "creer-video-ia-gratuit",
    "meilleurs-sites-video-ia-gratuits",
    "detecter-image-generee-ia",
  ],
  faq: [
    {
      question: "Existe-t-il un générateur de vidéo IA gratuit et sans filigrane ?",
      answer:
        "Oui, mais avec une contrepartie. Chez Google, le réglage « Filigrane multimédia » des applications Gemini coupe le logo visible sans surcoût dans la plupart des pays. Pika n'appose pas de filigrane, même sur son offre gratuite, mais cette offre ne donne aucun crédit mensuel : il faut acheter des packs. Le gratuit sans logo et sans rien payer n'existe donc pas : il y a toujours un abonnement ou un achat quelque part.",
    },
    {
      question: "Combien coûte le retrait du filigrane sur Runway ?",
      answer:
        "Sur la page tarifs de Runway relevée le 12 octobre 2026, la mention « No watermarks » apparaît à partir de l'offre Standard, à 15 dollars par mois ou 12 dollars par mois en paiement annuel, avec 625 crédits mensuels. L'offre gratuite donne 125 crédits une seule fois et ne mentionne pas le retrait du filigrane.",
    },
    {
      question: "Payer un abonnement enlève-t-il tout le marquage IA ?",
      answer:
        "Non. L'abonnement retire le logo visible. Les marquages invisibles, comme SynthID chez Google ou les Content Credentials au standard C2PA, sont posés dans le fichier par l'outil et restent présents. L'aide Gemini le précise noir sur blanc : le réglage du filigrane visible n'a aucune incidence sur SynthID ni sur les Content Credentials.",
    },
    {
      question: "Est-ce légal d'utiliser un effaceur de filigrane sur une vidéo IA ?",
      answer:
        "Le retrait du logo par un outil tiers va en général à l'encontre des conditions d'utilisation de l'outil qui a généré la vidéo, puisque le logo est justement ce qui distingue l'offre gratuite de l'offre payante. Tu t'exposes à une fermeture de compte, et le filigrane invisible survit souvent à l'opération. Si tu publies un hypertrucage réaliste en Europe, l'article 50 du règlement sur l'IA t'oblige en plus à l'indiquer.",
    },
    {
      question: "Le recadrage suffit-il à enlever le filigrane invisible ?",
      answer:
        "Pas pour SynthID. Google DeepMind présente son marquage comme conçu pour résister au recadrage, aux filtres, aux changements de cadence d'images et à la compression avec perte. Recadrer fait disparaître le logo du coin, au prix d'une image amputée, mais la vidéo reste identifiable comme générée par l'IA de Google.",
    },
    {
      question: "Une vidéo sans filigrane peut-elle être utilisée commercialement ?",
      answer:
        "Pas forcément, ce sont deux choses séparées. Chez Pika, par exemple, aucune offre n'appose de filigrane, mais la licence commerciale ne commence qu'à l'offre à 35 dollars par mois : les offres Free et à 10 dollars produisent des vidéos propres que tu n'as pas le droit d'exploiter commercialement. Vérifie toujours la ligne « usage commercial » avant de livrer un client.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as généré le plan parfait, tu l'exportes, et un logo grisâtre s'est installé dans le coin en bas à droite. Ton réflexe : chercher « vidéo IA sans filigrane » et tomber sur des sites qui promettent de l'effacer en un clic. Avant de cliquer, il faut savoir qu'il y a deux filigranes dans ta vidéo, et que tu n'en vois qu'un.",
    },
    {
      type: "p",
      text: "Je te montre ici ce que coûte vraiment le retrait du logo chez Runway, Kling, Pika et Google, relevé sur leurs pages officielles le 12 octobre 2026, ce qui reste dans le fichier quoi que tu paies, et les pièges qui font perdre un client ou un compte. Un tableau pour choisir, cinq étapes pour ne payer qu'une fois.",
    },
    {
      type: "p",
      text: "Mon conseil : **paie le logo visible ou coupe-le là où l'outil le permet, et laisse le marquage invisible tranquille.** C'est l'option la moins chère sur la durée, et la seule qui ne te met pas en porte-à-faux avec une plateforme ou avec la loi.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Deux filigranes dans une même vidéo IA",
    },
    {
      type: "p",
      text: "Le premier, tout le monde le connaît : un logo ou une petite étoile incrustée dans l'image. Il sert surtout de vitrine pour l'offre payante. Le second ne se voit pas à l'œil. Il est inscrit dans les pixels ou dans les métadonnées du fichier, et des logiciels savent le lire.",
    },
    {
      type: "h3",
      id: "filigrane-visible",
      text: "Le logo visible, une affaire d'abonnement",
    },
    {
      type: "p",
      text: "Kling l'écrit sans détour sur sa [page consacrée à l'offre gratuite](https://kling.ai/explore/is_kling_ai_free) : les générations gratuites portent un filigrane, l'adhésion le retire, en même temps qu'elle débloque la 4K et des vidéos plus longues. C'est le même schéma chez Runway, où « No watermarks » apparaît dans la liste de l'offre Standard et nulle part dans celle de l'offre gratuite.",
    },
    {
      type: "p",
      text: "Google a pris un autre chemin à la mi-août 2026. Les applications Gemini proposent un réglage « Filigrane multimédia » qui coupe le logo visible sur les images, les vidéos et la musique générées. Il est disponible partout sauf en Corée du Sud, en Inde et au Viêt Nam, où il faut un abonnement AI Ultra pour le voir apparaître.",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-sans-filigrane-gemini.webp",
      alt: "Page d'aide Google en français intitulée Gérer les paramètres de filigrane dans les applications Gemini : le réglage contrôle les filigranes visibles sur les images, vidéos et musique, il n'apparaît qu'avec AI Ultra en Corée du Sud, en Inde et au Viêt Nam, et une remarque précise qu'il n'a aucune incidence sur SynthID ni sur les Content Credentials",
      caption:
        "La page d'aide « Gérer les paramètres de filigrane dans les applications Gemini » (support.google.com), en français, capturée le 12 octobre 2026.",
    },
    {
      type: "h3",
      id: "filigrane-invisible",
      text: "Le marquage invisible reste, quoi que tu paies",
    },
    {
      type: "p",
      text: "Relis la remarque en bas de la capture : le réglage ne contrôle que le filigrane visible. Il n'a aucune incidence sur SynthID ni sur les Content Credentials. SynthID est le marquage de Google, inscrit dans les pixels de chaque vidéo Veo ou Omni. La [page de Google DeepMind](https://deepmind.google/models/synthid/) le décrit comme conçu pour résister au recadrage, aux filtres, aux changements de cadence et à la compression avec perte. La documentation de l'API Gemini confirme que toutes les vidéos générées avec Veo le portent.",
    },
    {
      type: "p",
      text: "Les Content Credentials, au standard C2PA, sont un carnet de provenance glissé dans le fichier. TikTok, LinkedIn et les applications Meta savent lire ces indicateurs et poser une étiquette IA d'office, je l'ai détaillé dans l'article sur le [métier de community manager avec l'IA](/blog/ia-community-manager). Payer enlève donc le logo. Ta vidéo reste reconnaissable comme générée par une IA pour les machines qui savent regarder.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Obtenir une vidéo IA sans filigrane, outil par outil",
    },
    {
      type: "p",
      text: "Le tableau ci-dessous part des pages officielles relevées le 12 octobre 2026. Les prix bougent souvent, revérifie avant de t'abonner. Quand une page ne dit rien sur un point, je l'indique plutôt que de deviner.",
    },
    {
      type: "table",
      caption:
        "Retrait du filigrane visible et droits d'usage chez quatre générateurs de vidéo IA, d'après leurs pages officielles au 12 octobre 2026.",
      headers: ["Outil", "Offre gratuite", "Ce qui retire le logo", "Usage commercial"],
      rows: [
        [
          "Runway",
          "125 crédits, une seule fois",
          "Offre Standard : 15 $/mois, 12 $/mois à l'année (625 crédits)",
          "Non précisé sur la page tarifs",
        ],
        [
          "Kling",
          "Crédits quotidiens, vidéos filigranées",
          "N'importe quelle adhésion payante",
          "Non précisé sur la page de l'offre gratuite",
        ],
        [
          "Pika",
          "Pas de filigrane, mais 0 crédit mensuel (achat de packs)",
          "Aucun filigrane sur aucune offre",
          "À partir de l'offre à 35 $/mois",
        ],
        [
          "Google Gemini et Flow",
          "Selon ton forfait Google AI",
          "Réglage Filigrane multimédia (AI Ultra requis en Corée du Sud, Inde, Viêt Nam)",
          "Voir les conditions de ton forfait",
        ],
      ],
    },
    {
      type: "p",
      text: "Chez Pika, c'est l'inverse. Sur sa page tarifs, « No watermark » est coché dans les quatre colonnes, offre gratuite comprise. Sauf que cette offre gratuite donne zéro crédit par mois : tu génères avec des packs achetés à part, 60 crédits par dollar. Et la licence commerciale reste barrée sur les offres Free et à 10 dollars. Une vidéo propre, donc, que tu ne peux pas vendre.",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-sans-filigrane-pika.webp",
      alt: "Page tarifs de Pika avec quatre colonnes, Free, 10 dollars, 35 dollars et 95 dollars par mois : No watermark coché partout, Commercial license barré sur Free et sur l'offre à 10 dollars, coché à partir de 35 dollars",
      caption:
        "Les quatre offres individuelles de la page tarifs de Pika (pika.art/pricing), capturée le 12 octobre 2026.",
    },
    {
      type: "p",
      text: "Avant de sortir la carte bancaire, je procède dans cet ordre :",
    },
    {
      type: "ol",
      items: [
        "Écris noir sur blanc l'usage final : brouillon pour toi, post sur tes réseaux, vidéo pour un client, publicité payante. Le logo dérange surtout dans les deux derniers cas, et ce sont aussi ceux qui exigent une licence commerciale.",
        "Fais tous tes essais en gratuit, logo compris. Un plan raté avec filigrane coûte zéro ; un plan raté sur un abonnement coûte des crédits que tu ne récupères pas.",
        "Si tu travailles déjà dans l'écosystème Google, coupe le réglage Filigrane multimédia avant de générer tes plans définitifs. Il s'applique aux nouveaux contenus, pas à ceux que tu as déjà téléchargés.",
        "Sinon, prends un mois du premier palier qui retire le logo, au moment où ton montage est prêt, et regénère seulement les plans retenus. Un mois de Runway Standard donne 625 crédits, soit 52 secondes de Gen-4.5 d'après la page tarifs : assez pour refaire une séquence courte, pas un film.",
        "Lis la ligne usage commercial et garde une capture de la page tarifs datée du jour où tu as généré. Si un client te pose la question dans six mois, tu as ta preuve.",
      ],
    },
    {
      type: "image",
      src: "/images/articles/video-ia-sans-filigrane-runway.webp",
      alt: "Page tarifs de Runway en paiement annuel : offre gratuite à 0 dollar avec 125 crédits une seule fois, offre Standard à 12 dollars par mois au lieu de 15 avec 625 crédits et la mention No watermarks, puis offres Pro à 28 dollars et Max à 76 dollars",
      caption:
        "Les offres individuelles de Runway en paiement annuel (runway.com/pricing), capturée le 12 octobre 2026.",
    },
    {
      type: "p",
      text: "> Pro Tip : n'achète pas l'abonnement au début du projet. Monte d'abord ta vidéo avec les versions filigranées, valide le rythme, puis abonne-toi un mois pour regénérer uniquement les plans gardés. Tu paies une fois, pour des plans dont tu es sûr.",
    },
    {
      type: "p",
      text: "Si tu cherches surtout à apprendre sans budget, les filigranes ne sont pas un problème. Mes articles sur la [création de vidéos IA gratuites](/blog/creer-video-ia-gratuit) et sur les [meilleurs sites de vidéo IA gratuits](/blog/meilleurs-sites-video-ia-gratuits) partent de là : on pratique en gratuit, on paie quand ça part chez quelqu'un.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Ce qui coûte plus cher qu'un abonnement",
    },
    {
      type: "h3",
      id: "piege-effaceur",
      text: "L'effaceur de filigrane en ligne",
    },
    {
      type: "p",
      text: "Symptôme : un site gratuit floute ou reconstruit le coin de l'image, et tu livres le résultat. Le logo était la contrepartie de l'offre gratuite, donc tu contournes les conditions de l'outil, avec un risque de fermeture de compte. La zone retouchée peut baver dès que la caméra bouge, et SynthID, lui, reste là. Fix concret : un mois d'abonnement au bon moment, ou le réglage officiel quand il existe.",
    },
    {
      type: "h3",
      id: "piege-recadrage",
      text: "Le recadrage qui mange ton cadre",
    },
    {
      type: "p",
      text: "Symptôme : tu zoomes de 10 % pour sortir le logo du champ, et ton personnage se retrouve collé au bord, la tête coupée. Tu as abîmé une composition pour cacher un détail qu'un abonnement d'un mois aurait réglé. Fix concret : si tu sais que tu vas recadrer, pour un format vertical par exemple, génère dès le départ avec de la marge autour du sujet et assume le logo pendant la phase d'essai.",
    },
    {
      type: "h3",
      id: "piege-licence",
      text: "Confondre « sans logo » et « vendable »",
    },
    {
      type: "p",
      text: "Symptôme : tu livres à un client une vidéo propre générée sur une offre qui n'inclut pas la licence commerciale. Le cas Pika le montre bien, l'absence de filigrane ne dit rien de tes droits. Fix concret : la ligne usage commercial passe avant la ligne filigrane dans ta checklist de livraison, et tu gardes la capture datée de la page tarifs.",
    },
    {
      type: "h3",
      id: "piege-etiquette",
      text: "Croire que la vidéo passera pour réelle",
    },
    {
      type: "p",
      text: "Symptôme : tu publies un plan photoréaliste sans le déclarer, et la plateforme pose elle-même l'étiquette IA en lisant les métadonnées. Pour un hypertrucage, c'est-à-dire une scène réaliste qui pourrait passer pour authentique, l'article 50 du règlement européen sur l'IA, applicable depuis le 2 août 2026, oblige celui qui publie à l'indiquer, sauf œuvre manifestement artistique ou de fiction. Fix concret : déclare toi-même à la publication. Pour comprendre ce que les outils de détection lisent, mon article sur la [détection des images générées par IA](/blog/detecter-image-generee-ia) détaille les méthodes.",
    },
    {
      type: "p",
      text: "Le logo dans le coin est la partie la moins chère du problème : un réglage chez Google, une douzaine de dollars pour un mois chez Runway. Ce qui mérite ton attention, c'est la licence et l'étiquette, parce que ce sont elles qui te suivent une fois la vidéo publiée.",
    },
    {
      type: "p",
      text: "Pour ton prochain projet, ouvre la page tarifs de ton outil avant la première génération et note deux lignes : à partir de quelle offre le logo disparaît, et à partir de quelle offre tu peux vendre. Si ce ne sont pas les mêmes, c'est la seconde qui fixe ton budget.",
    },
    {
      type: "p",
      text: "Note de fondateur : choisir l'outil selon l'usage final plutôt que selon la démo du moment, c'est une bonne partie du métier. On le travaille avec de vrais cas de livraison dans la formation IA gratuite d'AI Studios, des essais en gratuit jusqu'au fichier remis au client.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Existe-t-il un générateur de vidéo IA gratuit et sans filigrane ?",
    },
    {
      type: "p",
      text: "Oui, mais avec une contrepartie. Chez Google, le réglage « Filigrane multimédia » des applications Gemini coupe le logo visible sans surcoût dans la plupart des pays. Pika n'appose pas de filigrane, même sur son offre gratuite, mais cette offre ne donne aucun crédit mensuel : il faut acheter des packs. Le gratuit sans logo et sans rien payer n'existe donc pas : il y a toujours un abonnement ou un achat quelque part.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien coûte le retrait du filigrane sur Runway ?",
    },
    {
      type: "p",
      text: "Sur la page tarifs de Runway relevée le 12 octobre 2026, la mention « No watermarks » apparaît à partir de l'offre Standard, à 15 dollars par mois ou 12 dollars par mois en paiement annuel, avec 625 crédits mensuels. L'offre gratuite donne 125 crédits une seule fois et ne mentionne pas le retrait du filigrane.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Payer un abonnement enlève-t-il tout le marquage IA ?",
    },
    {
      type: "p",
      text: "Non. L'abonnement retire le logo visible. Les marquages invisibles, comme SynthID chez Google ou les Content Credentials au standard C2PA, sont posés dans le fichier par l'outil et restent présents. L'aide Gemini le précise noir sur blanc : le réglage du filigrane visible n'a aucune incidence sur SynthID ni sur les Content Credentials.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Est-ce légal d'utiliser un effaceur de filigrane sur une vidéo IA ?",
    },
    {
      type: "p",
      text: "Le retrait du logo par un outil tiers va en général à l'encontre des conditions d'utilisation de l'outil qui a généré la vidéo, puisque le logo est justement ce qui distingue l'offre gratuite de l'offre payante. Tu t'exposes à une fermeture de compte, et le filigrane invisible survit souvent à l'opération. Si tu publies un hypertrucage réaliste en Europe, l'article 50 du règlement sur l'IA t'oblige en plus à l'indiquer.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Le recadrage suffit-il à enlever le filigrane invisible ?",
    },
    {
      type: "p",
      text: "Pas pour SynthID. Google DeepMind présente son marquage comme conçu pour résister au recadrage, aux filtres, aux changements de cadence d'images et à la compression avec perte. Recadrer fait disparaître le logo du coin, au prix d'une image amputée, mais la vidéo reste identifiable comme générée par l'IA de Google.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Une vidéo sans filigrane peut-elle être utilisée commercialement ?",
    },
    {
      type: "p",
      text: "Pas forcément, ce sont deux choses séparées. Chez Pika, par exemple, aucune offre n'appose de filigrane, mais la licence commerciale ne commence qu'à l'offre à 35 dollars par mois : les offres Free et à 10 dollars produisent des vidéos propres que tu n'as pas le droit d'exploiter commercialement. Vérifie toujours la ligne « usage commercial » avant de livrer un client.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-12 -->
