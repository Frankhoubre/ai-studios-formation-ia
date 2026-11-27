import type { Article } from "@/lib/types/article";

export const iaCommunityManager: Article = {
  title: "IA community manager : la boîte à outils 2026",
  slug: "ia-community-manager",
  description:
    "Les outils IA d'un community manager en 2026, tâche par tâche, avec ce que chacun écrit dans ton fichier et ce que tu dois déclarer avant de publier.",
  excerpt:
    "Les listes d'outils IA pour community manager oublient toutes la même colonne : ce que l'outil grave dans le fichier au moment de l'export. Depuis le 2 août 2026, cette colonne décide de ce que la plateforme affiche sous ton post et de ce que la loi te demande d'annoncer.",
  category: "business-creatif",
  tags: [
    "Community manager",
    "Réseaux sociaux",
    "Content Credentials",
    "AI Act",
    "Workflow",
  ],
  date: "2026-09-27",
  updatedAt: "2026-09-27",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/ia-community-manager.webp",
  imageAlt:
    "Une femme en pull vert sombre pose une pastille rouge sur l'un des posts imprimés épinglés en grille sur un grand panneau de liège, téléphone dans l'autre main, lumière de fin de journée rayée par les stores d'un bureau aux murs bleu canard",
  keywords: [
    "ia community manager",
    "outils ia community manager",
    "community manager 2026",
    "déclarer contenu ia",
    "content credentials",
    "réseaux sociaux ia",
  ],
  relatedSlugs: [
    "visuels-reseaux-sociaux-ia-mois",
    "tiktok-formats-video-ia-viraux",
    "portraits-ia-photo-profil-linkedin",
  ],
  faq: [
    {
      question: "Quels outils IA pour un community manager en 2026 ?",
      answer:
        "Range-les par tâche plutôt que par marque. Pour la veille et les idées, un assistant conversationnel suffit. Pour les visuels, un générateur d'images (Gemini, Firefly, Midjourney, Flux). Pour la vidéo courte, Veo, Runway ou Kling. Pour la planification et le reporting, Metricool, Buffer ou les suites natives des plateformes. Le critère qui compte au moment de choisir dans chaque famille : ce que l'outil écrit dans le fichier qu'il te rend, parce que c'est ce que les plateformes lisent.",
    },
    {
      question: "L'IA peut-elle remplacer un community manager ?",
      answer:
        "La production, elle l'a déjà largement avalée. Générer trente visuels, proposer cent accroches, reformuler une réponse, tout ça se délègue. Choisir l'angle du mois, sentir qu'un sujet va mal tourner, répondre à un client en colère à 19 h, arbitrer entre la ligne de la marque et ce qui marche sur la plateforme, non. En 2026 s'ajoute une compétence que personne n'avait il y a deux ans : savoir ce que tes fichiers déclarent d'eux-mêmes et ce que tu dois annoncer.",
    },
    {
      question: "Dois-je déclarer un visuel IA sur LinkedIn ou Instagram ?",
      answer:
        "Dans la plupart des cas, tu n'as rien à faire : les deux plateformes lisent les métadonnées du fichier et posent l'étiquette seules. LinkedIn affiche une icône C2PA sur les images et vidéos signées. Meta affiche la mention « Informations IA » depuis mai 2024, quand il détecte les indicateurs standards ou quand la personne le déclare elle-même. La déclaration manuelle sert surtout quand ton fichier ne porte aucune signature alors que l'image est bien générée.",
    },
    {
      question:
        "Le règlement européen sur l'IA s'applique-t-il à une petite marque ?",
      answer:
        "L'article 50 est applicable depuis le 2 août 2026 et ne dépend pas de ta taille. Il distingue le fournisseur du modèle, qui doit marquer ses sorties dans un format lisible par machine, et le déployeur, celui qui publie. En postant pour une marque, tu es déployeur. Tes obligations se limitent à trois cas : reconnaissance d'émotions ou catégorisation biométrique, deepfakes, et textes publiés sur des sujets d'intérêt public sans relecture humaine. Les amendes prévues (jusqu'à 15 millions d'euros ou 3 % du chiffre d'affaires mondial, le montant le plus élevé des deux, avec des seuils réduits pour les PME) visent d'abord les gros acteurs.",
    },
    {
      question: "Est-ce qu'un post étiqueté IA fait moins de vues ?",
      answer:
        "Aucune plateforme n'a publié de chiffre là-dessus, donc méfie-toi de ceux qui en avancent un. Le seul malus officiellement annoncé concerne autre chose : le 31 août 2026, Instagram a renommé son étiquette « profil généré par IA » et prévenu que les comptes qui présentent une personne créée par IA sans la signaler verront leur portée réduite. Le message est clair dans l'autre sens aussi : étiqueter correctement n'entraîne pas de pénalité.",
    },
    {
      question: "Comment savoir ce qu'un fichier raconte sur lui-même ?",
      answer:
        "Dépose-le dans Verify, l'inspecteur public de Content Credentials, qui accepte les formats courants d'image, de son et de vidéo. Tu vois l'outil qui a créé le fichier, l'entité qui a signé et l'historique des modifications. Côté Google, tu peux aussi téléverser un fichier dans l'app Gemini et demander s'il a été créé ou modifié par une IA de Google, puisque SynthID y est lisible. Fais-le une fois sur chaque outil de ta chaîne, note le résultat, tu ne repasseras jamais le test.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Un visuel généré le matin, programmé à midi, et le soir le post porte une mention « Informations IA » que personne dans l'équipe n'a cochée. Le client appelle pour demander ce que c'est. Dans l'équipe, personne ne sait d'où sort l'étiquette.",
    },
    {
      type: "p",
      text: "Le tableau plus bas range les outils par tâche et ajoute, pour chacun, ce qu'il laisse dans le fichier et ce que tu dois annoncer au moment de publier. Ensuite une routine hebdomadaire qui case la vérification en quelques minutes, et les quatre erreurs qui coûtent le plus cher. Sources relevées le 27 septembre 2026, liens compris.",
    },
    {
      type: "p",
      text: "Des listes d'outils pour CM, il en sort une par semaine, avec les mêmes quinze noms à chaque fois. Aucune ne parle de provenance. C'est pourtant le sujet sur lequel un client va te juger le jour où une étiquette apparaît sous son post sans que personne ne l'ait demandée.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce qui a changé pour toi le 2 août 2026",
    },
    {
      type: "p",
      text: "L'article 50 du règlement européen sur l'IA est applicable depuis cette date. Il répartit les obligations entre deux rôles. Le **fournisseur** du modèle (OpenAI, Google, Adobe et les autres) doit marquer ses sorties dans un format lisible par machine. Le **déployeur**, celui qui publie le contenu, doit informer les personnes exposées. Quand tu postes pour une marque, tu es déployeur.",
    },
    {
      type: "p",
      text: "La Commission européenne résume les obligations du déployeur en trois cas : les outils de reconnaissance d'émotions et de catégorisation biométrique, les deepfakes, et les textes publiés sur des sujets d'intérêt public sans relecture ni contrôle éditorial humain. Le reste de ta production hebdomadaire n'entre pas dans cette liste, ce qui enlève beaucoup de bruit au sujet.",
    },
    {
      type: "image",
      src: "/images/articles/ia-community-manager-ai-act.webp",
      alt: "Page de la Commission européenne sur les obligations de transparence, avec la phrase indiquant que l'article 50 de l'AI Act s'applique depuis le 2 août 2026 et la liste des obligations des fournisseurs",
      caption:
        "La page « Guidelines on transparency obligations » de la Commission européenne, capturée le 27 septembre 2026.",
    },
    {
      type: "p",
      text: "Le texte prévoit une exception pour les œuvres manifestement artistiques, satiriques ou de fiction : l'obligation se limite alors à une mention qui ne gâche pas l'expérience du spectateur. Côté sanctions, l'article 99 monte à 15 millions d'euros ou 3 % du chiffre d'affaires mondial, le montant le plus élevé des deux, avec des seuils abaissés pour les PME. Ces chiffres visent les acteurs qui industrialisent le manquement, pas l'agence de trois personnes qui oublie une case.",
    },
    {
      type: "h3",
      text: "Tes outils signent les fichiers qu'ils te rendent",
    },
    {
      type: "p",
      text: "OpenAI ajoute des Content Credentials C2PA à ses images et renseigne en plus le champ IPTC Digital Source Type avec la valeur `trainedAlgorithmicMedia`, ce qui fait deux signaux indépendants dans un seul fichier. Google pose [SynthID](https://deepmind.google/science/synthid/), un filigrane invisible, sur ce qui sort de l'app Gemini, de Veo, de Lyria et de NotebookLM. Adobe attache automatiquement des Content Credentials dès qu'une fonction Firefly a servi. Personne ne vérifie jamais ce point avant de livrer, et c'est là que se logent les surprises.",
    },
    {
      type: "p",
      text: "Le cas concret qui fait grincer : tu prends une photo, la tienne, faite au boîtier. Tu effaces une tache au sol avec le remplissage génératif de Photoshop. Tu exportes. Le fichier sort avec une mention d'usage de l'IA, et LinkedIn la relaie. Photo réelle, badge IA. La plateforme n'a rien inventé, c'est ton export qui l'a écrit.",
    },
    {
      type: "h3",
      text: "Les plateformes lisent ces signatures avant tes abonnés",
    },
    {
      type: "p",
      text: "LinkedIn affiche une icône C2PA sur les images et vidéos signées, et un clic donne le détail : usage ou non de l'IA, appareil ou application d'origine, auteur, entité qui a émis le certificat, date de création. LinkedIn précise aussi la limite du dispositif, à savoir qu'il n'est pas encore possible d'identifier et d'étiqueter tous les contenus générés ou modifiés par IA.",
    },
    {
      type: "p",
      text: "Meta affiche la mention « Informations IA » depuis mai 2024, déclenchée par la détection des indicateurs standards ou par la déclaration de l'utilisateur. TikTok lit les Content Credentials, en ajoute aux contenus créés sur TikTok, teste un filigrane invisible que la plateforme seule peut relire, et annonçait le 19 novembre 2025 plus de 1,3 milliard de vidéos étiquetées.",
    },
    {
      type: "p",
      text: "YouTube fonctionne autrement : la déclaration se fait à la main, dans l'onglet des attributs au moment de la mise en ligne, et elle est demandée dans trois situations précises.",
    },
    {
      type: "image",
      src: "/images/articles/ia-community-manager-youtube-declaration.webp",
      alt: "Page d'aide YouTube « Signaler l'utilisation de contenus d'IA générative » listant les trois cas où la déclaration est demandée",
      caption:
        "Les trois cas de déclaration listés par l'aide YouTube, capturée le 27 septembre 2026.",
    },
    {
      type: "p",
      text: "Faire dire ou faire quelque chose à une personne réelle qui ne l'a ni dit ni fait, modifier les images d'un événement ou d'un lieu réel, générer une scène d'apparence réaliste qui n'a jamais eu lieu. En dehors de ces trois cas, YouTube ne demande rien pour l'IA d'aide à la production : scripts, idées, sous-titres automatiques restent hors déclaration. C'est l'essentiel de ce qu'un CM fait tourner dans une semaine.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "La boîte à outils, tâche par tâche",
    },
    {
      type: "p",
      text: "Voilà la table que je garde ouverte quand j'arbitre un choix d'outil pour un compte client.",
    },
    {
      type: "table",
      caption:
        "Les tâches d'un CM, les outils qui les couvrent, et ce que chacun laisse derrière lui",
      headers: [
        "Tâche",
        "Outils",
        "Ce qui part dans le fichier",
        "Ce que tu déclares",
      ],
      rows: [
        [
          "Veille, idées, angles",
          "ChatGPT, Gemini, Perplexity",
          "Rien, le texte ne porte pas de signature",
          "Rien",
        ],
        [
          "Écriture des légendes et réponses",
          "Mêmes outils, relus et coupés par toi",
          "Rien",
          "Rien, sauf sujet d'intérêt public publié sans relecture",
        ],
        [
          "Visuel généré de zéro",
          "Gemini, Firefly, Midjourney, Flux",
          "SynthID ou manifeste C2PA selon l'outil",
          "Étiquette posée seule par LinkedIn, Meta et TikTok",
        ],
        [
          "Retouche d'une vraie photo",
          "Photoshop, Firefly, outils d'édition IA",
          "Mention d'usage de l'IA, même sur une photo authentique",
          "Idem, et c'est le piège le plus fréquent",
        ],
        [
          "Vidéo courte générée",
          "Veo, Runway, Kling",
          "SynthID côté Google, variable ailleurs",
          "Attribut « IA générative » sur YouTube si le rendu est réaliste",
        ],
        [
          "Voix off et présentateur virtuel",
          "Outils de clonage vocal et d'avatar",
          "Variable, à tester fichier par fichier",
          "Déclaration dès qu'une personne réelle semble parler ou agir",
        ],
        [
          "Programmation et reporting",
          "Metricool, Buffer, suites natives",
          "Rien",
          "Rien",
        ],
      ],
    },
    {
      type: "p",
      text: "La ligne de la retouche est celle qui déclenche le plus d'appels de clients, puisqu'elle transforme une photo authentique en contenu étiqueté. Celle de la voix est la seule où je n'ai pas de réponse générale à te donner : les pratiques diffèrent trop d'un éditeur à l'autre, il faut tester toi-même. La méthode de production en série décrite dans [le plan d'un mois de visuels réseaux sociaux](/blog/visuels-reseaux-sociaux-ia-mois) reste valable telle quelle, il suffit d'y insérer l'étape de vérification.",
    },
    {
      type: "h3",
      text: "La semaine type, vérification comprise",
    },
    {
      type: "ol",
      items: [
        "Lundi matin, sors tes angles de la semaine avec un assistant conversationnel, à partir de tes propres notes de terrain plutôt que d'un prompt générique. Tu gardes trois angles, tu jettes le reste.",
        "Écris les légendes dans la foulée, puis coupe au moins un tiers à la main. C'est cette coupe qui fait la différence entre un post de marque et un post de robot.",
        "Génère les visuels en lot, avec une direction artistique fixée d'avance. Une séance de génération, pas six.",
        "Avant d'exporter quoi que ce soit, passe un fichier de chaque outil dans Verify. Tu notes dans un fichier texte qui signe, qui ne signe pas, et ce que ça affiche. Ce relevé se fait une fois par outil, pas une fois par post.",
        "Programme depuis ton outil de planification. Pour YouTube et les Shorts, renseigne l'attribut d'IA générative dans la foulée de la mise en ligne, tant que tu as la vidéo en tête.",
        "Publie, puis regarde ce que la plateforme a posé comme étiquette sur les deux ou trois premiers posts du lot. Si une étiquette apparaît là où tu ne l'attendais pas, tu sais déjà quel outil l'a écrite.",
        "Vendredi, relève tes chiffres et compare les posts étiquetés aux autres sur ton propre compte. Trente jours de données valent mieux que n'importe quelle affirmation lue sur LinkedIn, la mienne comprise.",
      ],
    },
    {
      type: "image",
      src: "/images/articles/ia-community-manager-verify.webp",
      alt: "Outil Verify de Content Credentials, avec la zone de dépôt de fichier et la liste des formats acceptés",
      caption:
        "Verify accepte les formats courants d'image, d'audio et de vidéo. Capture du 27 septembre 2026.",
    },
    {
      type: "p",
      text: "> Pro Tip : fais ton relevé de l'étape 4 sur un vrai visuel de client, pas sur une image de test. Les exports d'un projet réel passent souvent par deux ou trois logiciels, et c'est la chaîne complète qui décide de ce qui reste dans le fichier, pas le générateur d'origine.",
    },
    {
      type: "p",
      text: "Pour le détail des formats courts, le découpage plateforme par plateforme est traité dans [le guide des vidéos verticales TikTok, Reels et Shorts](/blog/video-courte-ia-tiktok-reels-shorts), et les formats qui fonctionnent vraiment sur TikTok sont listés dans [l'analyse des vidéos IA virales](/blog/tiktok-formats-video-ia-viraux). Sur la partie photo de profil et image de marque personnelle, [le guide des portraits IA pour LinkedIn](/blog/portraits-ia-photo-profil-linkedin) couvre le sujet de bout en bout.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quatre erreurs que je vois passer",
    },
    {
      type: "h3",
      text: "Nettoyer les métadonnées pour éviter l'étiquette",
    },
    {
      type: "p",
      text: "Un utilitaire qui vide les métadonnées, et le badge disparaît. Le raccourci est tentant. Sauf que Meta annonce trois voies de détection, dont des classificateurs qui travaillent sur l'image elle-même, et que TikTok teste un filigrane que seule la plateforme relit. Tu peux gagner un round, tu ne gagnes pas la série. Et du côté du règlement, effacer le marquage pour masquer l'origine d'un deepfake, c'est exactement ce que le texte veut empêcher.",
    },
    {
      type: "p",
      text: "Fix concret : garde les métadonnées et travaille l'autre bout du problème. Une marque qui assume « visuel généré, direction artistique maison » dans sa légende ne perd rien. Une marque prise à masquer perd la confiance de son audience, et ça ne se rachète pas au budget média.",
    },
    {
      type: "h3",
      text: "Déclarer tout, tout le temps, par précaution",
    },
    {
      type: "p",
      text: "L'excès inverse coûte aussi. Cocher l'attribut d'IA générative sur une vidéo entièrement tournée parce qu'un sous-titre automatique est passé par là, ça part d'une bonne intention et ça rate la cible. L'aide à la production, scripts, idées, sous-titres, n'entre pas dans le champ de la déclaration, YouTube l'écrit noir sur blanc.",
    },
    {
      type: "p",
      text: "Fix concret : relis la règle des trois cas, imprime-la si besoin, et applique-la à la lettre. Une déclaration qui ne correspond à rien brouille le signal pour ceux qui en ont vraiment besoin, et elle habitue ton audience à ignorer la mention.",
    },
    {
      type: "h3",
      text: "Laisser l'IA publier sur un sujet sensible sans relecture",
    },
    {
      type: "p",
      text: "Un agenda de publication automatisé, un assistant qui rédige, personne qui relit, et un jour le compte sort un post sur la santé publique ou sur une décision de justice. C'est précisément le cas visé par l'obligation d'étiquetage des textes d'intérêt public publiés sans contrôle éditorial humain, et c'est aussi le meilleur moyen de faire une sortie de route en public.",
    },
    {
      type: "p",
      text: "Fix concret : un humain valide chaque post touchant à la politique, la santé, la justice, la sécurité, l'environnement ou la protection des consommateurs. Cette validation te sort du cas prévu par le texte et elle évite le vrai risque, qui reste réputationnel.",
    },
    {
      type: "h3",
      text: "Confondre le compte et le personnage",
    },
    {
      type: "p",
      text: "Faire porter une marque par un visage généré se défend très bien. Le problème commence quand le compte laisse croire que ce visage appartient à quelqu'un. Le 31 août 2026, Instagram a renommé son étiquette en « profil généré par IA » et prévenu que les comptes présentant une personne créée par IA sans le signaler verraient leur portée réduite. Le même texte précise que l'étiquette ne concerne pas tous les usages de l'IA.",
    },
    {
      type: "p",
      text: "Fix concret : si ton compte met en scène un visage qui n'existe pas, pose l'étiquette de profil et arrête d'en faire un secret. Le sujet est creusé plus en détail dans [le guide des influenceurs virtuels](/blog/influenceur-virtuel-ia), y compris côté obligations pour les marques.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quels outils IA pour un community manager en 2026 ?",
    },
    {
      type: "p",
      text: "Range-les par tâche plutôt que par marque. Pour la veille et les idées, un assistant conversationnel suffit. Pour les visuels, un générateur d'images (Gemini, Firefly, Midjourney, Flux). Pour la vidéo courte, Veo, Runway ou Kling. Pour la planification et le reporting, Metricool, Buffer ou les suites natives des plateformes. Le critère qui compte au moment de choisir dans chaque famille : ce que l'outil écrit dans le fichier qu'il te rend, parce que c'est ce que les plateformes lisent.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "L'IA peut-elle remplacer un community manager ?",
    },
    {
      type: "p",
      text: "La production, elle l'a déjà largement avalée. Générer trente visuels, proposer cent accroches, reformuler une réponse, tout ça se délègue. Choisir l'angle du mois, sentir qu'un sujet va mal tourner, répondre à un client en colère à 19 h, arbitrer entre la ligne de la marque et ce qui marche sur la plateforme, non. En 2026 s'ajoute une compétence que personne n'avait il y a deux ans : savoir ce que tes fichiers déclarent d'eux-mêmes et ce que tu dois annoncer.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Dois-je déclarer un visuel IA sur LinkedIn ou Instagram ?",
    },
    {
      type: "p",
      text: "Dans la plupart des cas, tu n'as rien à faire : les deux plateformes lisent les métadonnées du fichier et posent l'étiquette seules. LinkedIn affiche une icône C2PA sur les images et vidéos signées. Meta affiche la mention « Informations IA » depuis mai 2024, quand il détecte les indicateurs standards ou quand la personne le déclare elle-même. La déclaration manuelle sert surtout quand ton fichier ne porte aucune signature alors que l'image est bien générée.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le règlement européen sur l'IA s'applique-t-il à une petite marque ?",
    },
    {
      type: "p",
      text: "L'article 50 est applicable depuis le 2 août 2026 et ne dépend pas de ta taille. Il distingue le fournisseur du modèle, qui doit marquer ses sorties dans un format lisible par machine, et le déployeur, celui qui publie. En postant pour une marque, tu es déployeur. Tes obligations se limitent à trois cas : reconnaissance d'émotions ou catégorisation biométrique, deepfakes, et textes publiés sur des sujets d'intérêt public sans relecture humaine. Les amendes prévues (jusqu'à 15 millions d'euros ou 3 % du chiffre d'affaires mondial, le montant le plus élevé des deux, avec des seuils réduits pour les PME) visent d'abord les gros acteurs.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Est-ce qu'un post étiqueté IA fait moins de vues ?",
    },
    {
      type: "p",
      text: "Aucune plateforme n'a publié de chiffre là-dessus, donc méfie-toi de ceux qui en avancent un. Le seul malus officiellement annoncé concerne autre chose : le 31 août 2026, Instagram a renommé son étiquette « profil généré par IA » et prévenu que les comptes qui présentent une personne créée par IA sans la signaler verront leur portée réduite. Le message est clair dans l'autre sens aussi : étiqueter correctement n'entraîne pas de pénalité.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment savoir ce qu'un fichier raconte sur lui-même ?",
    },
    {
      type: "p",
      text: "Dépose-le dans [Verify](https://contentcredentials.org/verify), l'inspecteur public de Content Credentials, qui accepte les formats courants d'image, de son et de vidéo. Tu vois l'outil qui a créé le fichier, l'entité qui a signé et l'historique des modifications. Côté Google, tu peux aussi téléverser un fichier dans l'app Gemini et demander s'il a été créé ou modifié par une IA de Google, puisque SynthID y est lisible. Fais-le une fois sur chaque outil de ta chaîne, note le résultat, tu ne repasseras jamais le test.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Le test qui prend deux minutes",
    },
    {
      type: "p",
      text: "Prends le dernier visuel que tu as publié pour un client et dépose-le dans Verify. En deux minutes, tu sauras si ta chaîne de production signe ou non ses fichiers, et tu arrêteras de deviner. Fais le même test sur un export de ton monteur, c'est souvent là que les surprises se cachent.",
    },
    {
      type: "p",
      text: "Ensuite, ajoute une ligne à ta fiche de process : qui vérifie, quand, et où le relevé est noté. Une ligne. C'est la différence entre un CM qui explique calmement une étiquette à son client et un CM qui la découvre dans un message à 22 h.",
    },
    {
      type: "p",
      text: "Note de fondateur : si tu gères des comptes pour des clients, la formation IA gratuite d'AI Studios te servira surtout sur l'amont, le cadrage du message et la direction artistique. Les étiquettes et les métadonnées, tu les auras comprises en une après-midi avec ce que tu viens de lire. L'amont, lui, demande plus de temps.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-27 -->
