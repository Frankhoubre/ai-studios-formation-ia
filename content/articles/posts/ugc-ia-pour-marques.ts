import type { Article } from "@/lib/types/article";

export const ugcIaPourMarques: Article = {
  title: "UGC IA : monter une offre que les marques signent",
  slug: "ugc-ia-pour-marques",
  description:
    "Vendre du UGC généré par IA aux marques : ce qui part vite, les mentions légales à afficher en France, et une méthode pour fixer un prix qui tient.",
  excerpt:
    "En France, un contenu d'influence avec un visage généré doit porter la mention « Images virtuelles ». La plupart des prestataires ne le savent pas, et ce détail décide du prix auquel tu vends.",
  category: "business-creatif",
  tags: ["ugc", "monétisation", "vidéo ia", "publicité"],
  date: "2026-09-07",
  updatedAt: "2026-09-07",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/ugc-ia-pour-marques.webp",
  imageAlt:
    "Vue du dessus d'une table de travail en bois clair avec quatre rangées de fiches numérotées manuscrites, un flacon blanc, un trépied de téléphone plié et un mug, pendant qu'une main retire une fiche de sa rangée",
  keywords: [
    "ugc ia",
    "créateur ugc ia",
    "vidéo ugc marque",
    "vendre du ugc ia",
    "images virtuelles mention",
  ],
  relatedSlugs: [
    "avatars-ia-ugc-presentateur-virtuel",
    "vendre-videos-ia",
    "fixer-prix-creation-ia-grille",
  ],
  faq: [
    {
      question: "Faut-il afficher une mention sur une vidéo UGC générée par IA ?",
      answer:
        "En France, oui dès que le contenu relève de l'influence commerciale et qu'une image produite par IA représente un visage ou une silhouette. L'article 5 de la loi du 9 juin 2023 impose alors la mention « Images virtuelles ». Depuis la version en vigueur au 8 novembre 2024, cette mention doit être claire, lisible et compréhensible sur tout support utilisé, et elle peut être remplacée par une mention équivalente adaptée au format. Au niveau européen, l'article 50 du règlement sur l'IA impose en plus d'indiquer qu'un contenu de type hypertrucage a été généré ou manipulé par une IA.",
    },
    {
      question: "Que risque-t-on si la mention manque ?",
      answer:
        "Le III de l'article 5 prévoit un an d'emprisonnement et 4 500 euros d'amende. Beaucoup d'articles en ligne annoncent deux ans et 300 000 euros : ces chiffres ne correspondent pas au texte de l'article 5, va vérifier directement sur Légifrance avant de reprendre un montant lu ailleurs. L'autre risque est contractuel : l'article 8 de la même loi rend l'annonceur, son mandataire et la personne qui exerce l'activité d'influence solidairement responsables des dommages causés aux tiers.",
    },
    {
      question: "Une marque qui publie sur son propre compte est-elle concernée ?",
      answer:
        "L'article 1er de la loi vise les personnes qui, à titre onéreux, mobilisent leur notoriété auprès de leur audience pour promouvoir des biens ou des services. Une marque qui poste sur son propre compte ne rentre pas d'office dans cette définition, et c'est mon interprétation du texte, pas une position tranchée par un juge. En revanche, le règlement européen sur l'IA et le droit de la consommation s'appliquent quoi qu'il arrive. En pratique je conseille d'afficher la mention dans les deux cas : elle coûte trois secondes de montage.",
    },
    {
      question: "Combien facturer une prestation de UGC IA ?",
      answer:
        "Aucun barème public sérieux n'existe sur ce marché, et méfie-toi de ceux qui en publient. La méthode qui tient : additionne ton coût de génération réel pour le lot complet, ajoute ton temps de brief, de tri et de conformité, puis compare le total au budget que le client consacrait à la même campagne avant toi. Ce que tu factures, c'est un nombre de variantes testables livrées dans un délai. Ça se compare à une journée de tournage, pas à un abonnement logiciel.",
    },
    {
      question: "Peut-on cloner le visage d'une vraie personne pour du UGC ?",
      answer:
        "Techniquement oui, juridiquement seulement avec son accord écrit et pour un usage précisément délimité. Le droit à l'image est un droit de la personne : il te faut une cession écrite qui nomme les supports, la durée, le territoire et les retouches autorisées. Sans ce document, tu ne livres pas. Et la mention « Images virtuelles » reste due par-dessus, parce que l'image reste produite par un procédé d'intelligence artificielle.",
    },
    {
      question: "Les plateformes acceptent-elles les publicités UGC générées par IA ?",
      answer:
        "Les grandes plateformes demandent aujourd'hui de déclarer les contenus réalistes générés par IA, via un réglage au moment de la publication, et elles appliquent leur propre étiquette par-dessus. Ces règles bougent souvent et diffèrent d'une plateforme à l'autre, donc vérifie la page d'aide en vigueur au moment de la livraison plutôt qu'un article daté. Prévois dans ton devis que le client active le réglage sur son compte, puisque c'est lui qui publie.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu vois passer les annonces : quarante vidéos UGC générées par IA pour quelques centaines d'euros, livrées en 48 heures. Et tu te demandes si c'est un marché où te positionner ou une course au moins-disant que tu perdras.",
    },
    {
      type: "p",
      text: "À la fin, tu sauras trier tes livrables selon le risque juridique que chacun porte, écrire la mention qui va avec, et défendre un prix devant un annonceur qui a déjà reçu trois devis moins chers que le tien.",
    },
    {
      type: "p",
      text: "La qualité a cessé d'être le sujet il y a un moment. Un plan produit avec voix off IA passe déjà très bien dans un feed. Ce qui distingue un prestataire d'un autre, aujourd'hui, c'est sa capacité à livrer un contenu que le service juridique du client laisse partir.",
    },
    {
      type: "h2",
      id: "ce-qui-se-vend",
      text: "La question qui trie tout : est-ce qu'un visage apparaît",
    },
    {
      type: "p",
      text: "La présence d'un visage à l'image décide de ce que la loi t'impose, de ce que le service juridique du client accepte de signer et du temps que tu passes en production. Trie tes livrables sur cet axe avant de penser aux formats et aux durées.",
    },
    {
      type: "table",
      caption:
        "Ce que chaque type de livrable déclenche comme obligation et comme travail",
      headers: [
        "Livrable",
        "Ce que le texte français vise",
        "Ce que ça ajoute à ton devis",
      ],
      rows: [
        [
          "Plan produit, décor ou packaging générés, aucune personne à l'image",
          "Hors du champ de l'article 5, qui vise le visage et la silhouette",
          "Rien de spécifique, mais reste vigilant sur l'embellissement du produit",
        ],
        [
          "Voix off IA sur des images réelles",
          "L'article 5 vise les images, pas la voix seule",
          "Une ligne sur l'origine de la voix, surtout si elle imite quelqu'un",
        ],
        [
          "Avatar entièrement généré qui parle face caméra",
          "Mention « Images virtuelles » dès que le contenu relève de l'influence commerciale",
          "Intégration de la mention au montage, plus une validation par le client",
        ],
        [
          "Visage d'une personne réelle, cloné ou animé",
          "Mention « Images virtuelles » et droit à l'image de la personne",
          "Cession de droits écrite, sans laquelle tu ne livres pas le fichier",
        ],
        [
          "Silhouette affinée ou visage modifié sur une vraie prise de vue",
          "Mention « Images retouchées », prévue au même article",
          "Une mention différente de la précédente, ne les confonds pas",
        ],
      ],
    },
    {
      type: "p",
      text: "La première ligne est celle qui paie le mieux au ratio effort sur risque, et c'est aussi celle dont personne ne parle. Une marque de cosmétique a besoin de trente plans de son flacon dans trente contextes, pas d'une fausse fille qui témoigne. Ces plans se produisent vite, ne posent aucun problème de droit à l'image et se testent en publicité le jour même.",
    },
    {
      type: "h3",
      id: "zone-grise",
      text: "La zone grise commence au plan de dos",
    },
    {
      type: "p",
      text: "Le texte vise un visage ou une silhouette. Une paire de mains qui ouvre un colis n'est ni l'un ni l'autre, et personne ne discutera là-dessus. Un plan large de dos, lui, montre bien une silhouette.",
    },
    {
      type: "p",
      text: "Cette zone n'a pas encore été tranchée à ma connaissance, donc je traite le plan de dos comme s'il était visé. Ça coûte une ligne de texte à l'écran et ça t'évite d'être le cas qui fera jurisprudence.",
    },
    {
      type: "h2",
      id: "cadre-legal",
      text: "Ce que la loi t'oblige à afficher en France",
    },
    {
      type: "p",
      text: "L'article 5 de la loi du 9 juin 2023 sur l'influence commerciale est court et il se lit en deux minutes. Le voici dans sa version en vigueur, celle qui date de l'ordonnance du 6 novembre 2024.",
    },
    {
      type: "image",
      src: "/images/articles/ugc-ia-pour-marques-loi-influenceurs.webp",
      alt: "Article 5 de la loi du 9 juin 2023 sur Légifrance, imposant la mention Images retouchées pour une silhouette ou un visage modifiés et la mention Images virtuelles pour une image produite par un procédé d'intelligence artificielle, avec une peine d'un an d'emprisonnement et 4 500 euros d'amende",
      caption:
        "L'article 5 dans sa version en vigueur depuis le 8 novembre 2024. Source : legifrance.gouv.fr, capture du 07/09/2026.",
    },
    {
      type: "p",
      text: "La formulation actuelle compte autant que le principe. Les mentions doivent être « claires, lisibles et compréhensibles, sur tout support utilisé », et elles peuvent être remplacées par une mention équivalente adaptée au format. La version de 2023 exigeait qu'elles soient identifiables sur l'image ou la vidéo, sous tous les formats, pendant l'intégralité du visionnage. Beaucoup d'articles en ligne citent encore cette ancienne rédaction.",
    },
    {
      type: "p",
      text: "Ensuite la sanction. Le III prévoit un an d'emprisonnement et 4 500 euros d'amende. J'ai lu plusieurs pages qui annoncent deux ans et 300 000 euros sur ce point précis : ces montants ne sont pas ceux de l'article 5. Quand un chiffre juridique circule, ouvre [le texte sur Légifrance](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000050468897) avant de le répéter à un client.",
    },
    {
      type: "p",
      text: "Qui est tenu ? L'article 1er définit l'activité d'influence commerciale comme le fait, à titre onéreux, de mobiliser sa notoriété auprès de son audience pour promouvoir des biens ou des services. Une marque qui publie sur son propre compte n'entre pas d'office dans cette définition. C'est ma lecture du texte, pas une position tranchée, et elle ne remplace pas l'avis d'un avocat sur ton cas.",
    },
    {
      type: "h3",
      id: "ai-act",
      text: "Le règlement européen ajoute sa propre obligation",
    },
    {
      type: "p",
      text: "[Le règlement européen sur l'IA](https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=OJ:L_202401689) a son propre régime, dont les obligations de transparence s'appliquent depuis le 2 août 2026. Son article 50 vise le déployeur, c'est-à-dire celui qui se sert du système, et pas seulement l'influenceur.",
    },
    {
      type: "image",
      src: "/images/articles/ugc-ia-pour-marques-ai-act.webp",
      alt: "Paragraphe 4 de l'article 50 du règlement européen sur l'intelligence artificielle, imposant aux déployeurs d'un système générant un hypertrucage d'indiquer que les contenus ont été générés ou manipulés par une IA",
      caption:
        "L'article 50, paragraphe 4 du règlement (UE) 2024/1689. Source : eur-lex.europa.eu, version française, capture du 07/09/2026.",
    },
    {
      type: "p",
      text: "Le mot à retenir est « hypertrucage » : un contenu qui ressemble assez à des personnes, des lieux ou des événements réels pour être pris pour authentique. Un avatar UGC qui témoigne face caméra sur un produit qui existe coche la case. Le texte prévoit un régime allégé quand le contenu est manifestement artistique ou de fiction, ce qui ne sauvera pas une publicité.",
    },
    {
      type: "p",
      text: "Concrètement, tu as donc deux obligations qui se superposent sans se confondre : une mention française attachée au contenu d'influence, et une indication européenne attachée au caractère truqué du contenu. Une seule ligne à l'écran peut satisfaire les deux si elle est bien formulée.",
    },
    {
      type: "h2",
      id: "offre",
      text: "Construire une offre qu'un annonceur peut signer",
    },
    {
      type: "p",
      text: "L'erreur classique consiste à vendre des vidéos à l'unité. Une campagne UGC teste des accroches, en jette la grande majorité et scale les deux qui sortent du lot. Ce que le client achète, c'est un nombre de variantes testables livrées à une date.",
    },
    {
      type: "ol",
      items: [
        "Fais valider le brief produit avant tout : ce que le produit fait, ce qu'on n'a pas le droit de lui faire dire, les allégations interdites dans son secteur. C'est là que se cachent les vrais refus.",
        "Écris les accroches d'abord, une par fiche, numérotées. Vingt accroches sur une table valent mieux que cinq vidéos finies, et le tri se fait avec le client avant de dépenser du crédit de génération.",
        "Produis un lot de test court avant le lot complet. Trois variantes, trois angles opposés, livrées vite, pour caler le ton avant de lancer les trente autres.",
        "Ajoute la mention légale dès le montage du lot de test, pas à la fin. Une mention posée après coup sur trente fichiers, c'est trente réexports.",
        "Livre avec un tableau de correspondance : numéro de variante, accroche, durée, format, mention affichée. C'est ce document qui te fait rappeler, plus que la qualité des plans.",
        "Prévois une ligne « déclaration plateforme » dans le devis, à la charge du client puisque c'est lui qui publie, et écris noir sur blanc que tu l'as informé.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : mets la mention dans le gabarit de montage, pas dans chaque projet. Un calque de texte verrouillé en haut de ta timeline modèle, et elle est présente par construction sur tout ce qui sort de chez toi. C'est le genre de détail qui transforme une prestation en process.",
    },
    {
      type: "p",
      text: "Le côté technique de la fabrication est un autre sujet, et il est traité à part dans [le guide des avatars et du UGC généré](/blog/avatars-ia-ugc-presentateur-virtuel), qui détaille le lip-sync, la voix et les limites de crédibilité. Ici on parle de ce qu'il y a autour : l'offre, le contrat, la livraison.",
    },
    {
      type: "h2",
      id: "prix",
      text: "Fixer un prix sans inventer un barème",
    },
    {
      type: "p",
      text: "Je ne publierai pas de grille de tarifs pour ce marché, parce qu'aucune source sérieuse n'en donne et que les chiffres qui circulent sortent des pages de vente de ceux qui les publient. En revanche le calcul, lui, se fait proprement.",
    },
    {
      type: "p",
      text: "Additionne, pour un lot complet : le coût réel de génération sur l'ensemble des essais et pas seulement des plans retenus, ton temps de brief et de tri, et le temps de conformité, qui comprend la mention, le tableau de correspondance et les allers-retours de validation. Ce total est ton plancher, et il est presque toujours plus haut que ce que les gens estiment, parce qu'on oublie les essais jetés.",
    },
    {
      type: "p",
      text: "Ensuite, change de référentiel. Ne compare pas ton prix à celui d'un abonnement à un générateur, compare-le à ce que la marque dépensait avant pour obtenir le même nombre d'accroches testables. Un tournage d'une journée avec un créateur, ça se chiffre, et la marque connaît ce chiffre. C'est le seul ancrage qui te sort de la course au moins-disant.",
    },
    {
      type: "p",
      text: "La logique complète de tarification est dépliée dans [la grille de prix pour la création IA](/blog/fixer-prix-creation-ia-grille), et le côté prospection dans [vendre des vidéos IA](/blog/vendre-videos-ia). Si tu n'as pas encore de premier client, commence plutôt par [la méthode pour décrocher les premiers](/blog/trouver-premiers-clients-creation-ia).",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Quatre erreurs qui coûtent un client",
    },
    {
      type: "h3",
      id: "erreur-mention",
      text: "Traiter la mention comme un détail de fin de chaîne",
    },
    {
      type: "p",
      text: "Le lot est validé, tout le monde est content, et la question de la mention arrive la veille de la mise en ligne. Résultat : trente réexports en urgence, un habillage refait à l'arrache et un client qui découvre une contrainte dont tu ne lui avais jamais parlé.",
    },
    {
      type: "p",
      text: "Fix concret : la mention figure dans la première proposition commerciale, avec sa formulation exacte et l'endroit où elle apparaît à l'écran. Ça rassure plus que ça n'effraie.",
    },
    {
      type: "h3",
      id: "erreur-visage",
      text: "Générer un visage qui ressemble à quelqu'un",
    },
    {
      type: "p",
      text: "Tu demandes une femme d'une trentaine d'années, cheveux bruns, et le modèle te sort quelque chose de troublant pour une personne réelle. Sur un compte à faible audience personne ne le remarque, sur une campagne payante quelqu'un finit par le voir.",
    },
    {
      type: "p",
      text: "Fix concret : varie volontairement les traits d'une variante à l'autre et écarte tout rendu qui te fait penser à une personne identifiable. Si un visage revient sur toute une campagne, traite-le comme un personnage récurrent et documente sa création dans un fichier daté.",
    },
    {
      type: "h3",
      id: "erreur-allegations",
      text: "Laisser l'IA écrire les allégations produit",
    },
    {
      type: "p",
      text: "Le script généré fait dire à ton avatar que la crème « répare la barrière cutanée en sept jours ». Personne n'a validé cette phrase, et selon le secteur elle peut être purement interdite. C'est le genre de ligne qui remonte au service juridique du client et qui tue la relation.",
    },
    {
      type: "p",
      text: "Fix concret : impose une liste d'allégations autorisées, fournie et signée par le client, avant d'écrire la première accroche. Ton modèle de langage ne connaît pas la réglementation sectorielle de ton client, et toi non plus.",
    },
    {
      type: "h3",
      id: "erreur-volume",
      text: "Vendre du volume sans vendre de tri",
    },
    {
      type: "p",
      text: "Quarante vidéos livrées d'un coup, sans hiérarchie ni recommandation, ça ressemble à une décharge. Le client ne sait pas par où commencer, ne teste rien correctement, et conclut que le UGC IA ne marche pas.",
    },
    {
      type: "p",
      text: "Fix concret : livre un ordre de passage. Les cinq à tester en premier, pourquoi, et ce que tu observerais avant de lancer les suivantes. Ce paragraphe de recommandation vaut plus cher que les dix dernières vidéos du lot.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Faut-il afficher une mention sur une vidéo UGC générée par IA ?",
    },
    {
      type: "p",
      text: "En France, oui dès que le contenu relève de l'influence commerciale et qu'une image produite par IA représente un visage ou une silhouette. L'article 5 de la loi du 9 juin 2023 impose alors la mention « Images virtuelles ». Depuis la version en vigueur au 8 novembre 2024, cette mention doit être claire, lisible et compréhensible sur tout support utilisé, et elle peut être remplacée par une mention équivalente adaptée au format. Au niveau européen, l'article 50 du règlement sur l'IA impose en plus d'indiquer qu'un contenu de type hypertrucage a été généré ou manipulé par une IA.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Que risque-t-on si la mention manque ?",
    },
    {
      type: "p",
      text: "Le III de l'article 5 prévoit un an d'emprisonnement et 4 500 euros d'amende. Beaucoup d'articles en ligne annoncent deux ans et 300 000 euros : ces chiffres ne correspondent pas au texte de l'article 5, va vérifier directement sur Légifrance avant de reprendre un montant lu ailleurs. L'autre risque est contractuel : l'article 8 de la même loi rend l'annonceur, son mandataire et la personne qui exerce l'activité d'influence solidairement responsables des dommages causés aux tiers.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Une marque qui publie sur son propre compte est-elle concernée ?",
    },
    {
      type: "p",
      text: "L'article 1er de la loi vise les personnes qui, à titre onéreux, mobilisent leur notoriété auprès de leur audience pour promouvoir des biens ou des services. Une marque qui poste sur son propre compte ne rentre pas d'office dans cette définition, et c'est mon interprétation du texte, pas une position tranchée par un juge. En revanche, le règlement européen sur l'IA et le droit de la consommation s'appliquent quoi qu'il arrive. En pratique je conseille d'afficher la mention dans les deux cas : elle coûte trois secondes de montage.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Combien facturer une prestation de UGC IA ?",
    },
    {
      type: "p",
      text: "Aucun barème public sérieux n'existe sur ce marché, et méfie-toi de ceux qui en publient. La méthode qui tient : additionne ton coût de génération réel pour le lot complet, ajoute ton temps de brief, de tri et de conformité, puis compare le total au budget que le client consacrait à la même campagne avant toi. Ce que tu factures, c'est un nombre de variantes testables livrées dans un délai. Ça se compare à une journée de tournage, pas à un abonnement logiciel.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Peut-on cloner le visage d'une vraie personne pour du UGC ?",
    },
    {
      type: "p",
      text: "Techniquement oui, juridiquement seulement avec son accord écrit et pour un usage précisément délimité. Le droit à l'image est un droit de la personne : il te faut une cession écrite qui nomme les supports, la durée, le territoire et les retouches autorisées. Sans ce document, tu ne livres pas. Et la mention « Images virtuelles » reste due par-dessus, parce que l'image reste produite par un procédé d'intelligence artificielle.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Les plateformes acceptent-elles les publicités UGC générées par IA ?",
    },
    {
      type: "p",
      text: "Les grandes plateformes demandent aujourd'hui de déclarer les contenus réalistes générés par IA, via un réglage au moment de la publication, et elles appliquent leur propre étiquette par-dessus. Ces règles bougent souvent et diffèrent d'une plateforme à l'autre, donc vérifie la page d'aide en vigueur au moment de la livraison plutôt qu'un article daté. Prévois dans ton devis que le client active le réglage sur son compte, puisque c'est lui qui publie.",
    },
    {
      type: "h2",
      id: "chantier",
      text: "Vingt fiches et une heure devant toi",
    },
    {
      type: "p",
      text: "Prends un produit que tu connais, n'importe lequel, et écris vingt accroches à la main, une par fiche. Zéro crédit de génération dépensé. Trie-les ensuite en trois piles : celles qui n'ont besoin d'aucun visage, celles qui demandent un avatar, celles qui demandent une vraie personne.",
    },
    {
      type: "p",
      text: "Produis ensuite les trois meilleures de la première pile, celles sans visage. Tu obtiendras une démonstration livrable, sans mention obligatoire, sans droit à l'image et sans validation juridique. C'est exactement le format qui te sert de porte d'entrée chez un annonceur qui n'a jamais acheté d'IA.",
    },
    {
      type: "p",
      text: "Garde les deux autres piles pour la deuxième conversation, quand la confiance est là et que tu peux expliquer la mention sans que ça ressemble à un problème.",
    },
    {
      type: "p",
      text: "Note de fondateur : je trouve ce marché mal raconté. On y vend de la vitesse et du volume, alors que les prestataires qui durent sont ceux qui prennent en charge la partie ennuyeuse, le brief, les allégations, les mentions, le tableau de livraison. C'est moins vendeur qu'un lot de quarante vidéos à 48 heures, et c'est ce qui fait revenir un client. La formation IA gratuite d'AI Studios passe du temps sur cette partie-là, parce qu'elle décide du prix bien plus que l'outil de génération.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-07 -->
