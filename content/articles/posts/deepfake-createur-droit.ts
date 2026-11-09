import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-09";
const IMG = "/images/articles/deepfake-createur-droit";
const LF_2268 = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049571542";
const LF_22681 = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049567458";
const CNIL = "https://www.cnil.fr/fr/hypertrucage-deepfake";
const AI_ACT_50 = "https://artificialintelligenceact.eu/article/50/";
const PHAROS = "https://www.internet-signalement.gouv.fr";

const FAQ = [
  {
    question: "Un deepfake est-il légal en France ?",
    answer:
      "L'article 226-8 du code pénal punit la diffusion d'un deepfake : publier le visage ou la voix générés d'une personne sans son accord, quand rien n'indique clairement qu'il s'agit d'un contenu généré. Avec l'accord de la personne, ou avec une mention explicite et un trucage évident, tu sors de ce délit. Le droit à l'image, la diffamation et l'AI Act continuent de s'appliquer à côté.",
  },
  {
    question: "Quelle est la sanction pour un deepfake publié sans consentement ?",
    answer:
      "Un an de prison et 15 000 euros d'amende selon l'article 226-8, portés à deux ans et 45 000 euros quand la diffusion passe par un service en ligne, donc un réseau social ou un site. Pour un contenu à caractère sexuel, l'article 226-8-1 prévoit deux ans et 60 000 euros, et trois ans et 75 000 euros en ligne. Ces peines sont des maximums fixés par la loi.",
  },
  {
    question: "Est-ce que mettre « vidéo IA » dans la légende suffit ?",
    answer:
      "Pour le code pénal, une mention expresse suffit à sortir du délit de l'article 226-8, sauf pour les contenus sexuels où seul le consentement compte. Encore faut-il qu'elle soit visible là où la vidéo circule : une légende disparaît dès qu'on repartage le fichier. Mets la mention dans l'image elle-même, et garde le consentement écrit dès qu'une personne réelle est reconnaissable.",
  },
  {
    question: "Ai-je le droit de faire une parodie d'une personnalité avec l'IA ?",
    answer:
      "La parodie a une place dans le droit français, et l'AI Act prévoit un régime allégé pour les œuvres manifestement satiriques. Mais le trucage doit sauter aux yeux, la mention reste obligatoire au sens de l'AI Act, et tu ne dois ni faire dire à la personne des propos crédibles qui ruinent sa réputation, ni utiliser son visage pour vendre quelque chose. Une parodie qu'on peut prendre pour vraie a peu de chances d'être jugée comme une parodie.",
  },
  {
    question: "Puis-je cloner ma propre voix ou mon propre visage ?",
    answer:
      "Oui. Le consentement de la personne représentée est la condition centrale de l'article 226-8, et cette personne, c'est toi. Lis quand même les conditions de l'outil sur la réutilisation de tes données, et ajoute la mention exigée par l'AI Act si ta vidéo peut faire croire à une vraie prise de vue.",
  },
  {
    question: "Que faire si quelqu'un publie un deepfake de moi ?",
    answer:
      "Garde des preuves (captures d'écran, liens, dates), signale le contenu sur la plateforme, puis porte plainte au commissariat ou à la gendarmerie. Pour un contenu illicite grave, le portail PHAROS existe. La CNIL accepte aussi les plaintes quand ton visage ou ta voix sont utilisés sans accord, mais elle précise qu'elle ne remplace pas une plainte pénale et ne peut pas t'obtenir de dommages et intérêts.",
  },
];

export const deepfakeCreateurDroit: Article = {
  title: "Deepfake légal : ce qu'un créateur a le droit de faire",
  slug: "deepfake-createur-droit",
  description:
    "Deepfake légal ou pas ? Code pénal 226-8, contenus sexuels, AI Act depuis le 2 août 2026 : ce qu'un créateur peut publier, avec quel accord et quelle mention.",
  excerpt:
    "Ton visage cloné, un ami doublé par l'IA, la parodie d'un ministre : en France, tout se joue sur deux choses, l'accord de la personne et une mention qu'on ne peut pas rater. Les textes relus le 9 novembre 2026, et six cas concrets.",
  category: "business-creatif",
  tags: ["deepfake", "droit", "AI Act", "consentement", "éthique"],
  date: "2026-11-09",
  updatedAt: "2026-11-09",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/deepfake-createur-droit.webp",
  imageAlt:
    "Une comédienne aux cheveux blancs signe une autorisation d'utilisation de son image sur une table pliante, devant le demi-cercle d'appareils photo d'un studio de capture de visage où un technicien règle une caméra",
  keywords: [
    "deepfake légal",
    "deepfake droit france",
    "article 226-8 code pénal",
    "hypertrucage loi",
    "ai act deepfake",
  ],
  relatedSlugs: ["detecter-image-generee-ia", "acteurs-ia-casting-virtuel", "ia-community-manager"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu veux faire jouer ton associé dans une pub sans le filmer, doubler ta grand-mère avec sa propre voix pour un anniversaire, ou caricaturer un patron du CAC 40 dans un sketch. Techniquement, tout ça prend dix minutes. Juridiquement, une partie est permise, une partie te met dans le code pénal, et la frontière ne passe pas là où on l'imagine.",
    },
    {
      type: "p",
      text: "J'ai relu le 9 novembre 2026 les textes en vigueur : l'article 226-8 du code pénal réécrit par la loi SREN de 2024, son cousin 226-8-1 pour les contenus sexuels, et l'article 50 de l'AI Act européen, applicable depuis le 2 août 2026. Puis je les applique à six projets que des créateurs me décrivent régulièrement, avec une checklist à garder sous le coude avant de publier.",
    },
    {
      type: "p",
      text: "Deux mots résument presque tout : **consentement** et **mention**. Je ne suis pas avocat, et pour un projet commercial avec une personnalité, un vrai conseil juridique coûte moins cher qu'un procès. Mais tu dois connaître ces deux mots avant d'ouvrir ton outil de lip-sync.",
    },
    { type: "h2", id: "core-concepts", text: "Ce que dit le code pénal depuis mai 2024" },
    {
      type: "p",
      text: "Le texte de base, c'est l'**article 226-8 du code pénal**, modifié par la loi du 21 mai 2024 et en vigueur depuis le 23 mai 2024. Il visait déjà les photomontages. La loi SREN y a ajouté une phrase qui parle directement de nous : le contenu visuel ou sonore « généré par un traitement algorithmique » qui représente l'image ou les paroles d'une personne.",
    },
    {
      type: "screenshot",
      src: `${IMG}-legifrance-226-8.webp`,
      alt: "Page Légifrance de l'article 226-8 du code pénal, en vigueur depuis le 23 mai 2024, modifié par la loi n° 2024-449, avec les peines d'un an et 15 000 euros puis deux ans et 45 000 euros en ligne",
      caption:
        "L'article 226-8 tel qu'affiché sur Légifrance le 9 novembre 2026. La deuxième phrase du premier alinéa vise les contenus générés par un traitement algorithmique.",
      source: LF_2268,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    { type: "h3", id: "deux-conditions", text: "Les deux portes de sortie du délit" },
    {
      type: "p",
      text: "Le délit, c'est de **porter à la connaissance du public ou d'un tiers** ce contenu généré, sans le consentement de la personne, « s'il n'apparaît pas à l'évidence qu'il s'agit d'un contenu généré algorithmiquement ou s'il n'en est pas expressément fait mention ». Il te faut donc l'accord de la personne, ou bien un contenu dont le trucage saute aux yeux, ou bien une mention explicite.",
    },
    {
      type: "p",
      text: "Deux détails comptent. D'abord, envoyer la vidéo à **un seul tiers** suffit : un deepfake balancé dans un groupe WhatsApp de quatre personnes est concerné. Ensuite, la peine monte à **deux ans et 45 000 euros** quand la diffusion passe par un service de communication au public en ligne, donc à peu près toujours pour un créateur. Le texte vise la diffusion : tant que le fichier dort sur ton disque dur, il ne s'applique pas.",
    },
    { type: "h3", id: "contenu-sexuel", text: "Les contenus sexuels : aucune mention ne te couvre" },
    {
      type: "p",
      text: "L'article 226-8-1, créé par la même loi, traite à part les montages et contenus générés **à caractère sexuel**. Et là, la mention disparaît du texte. Seul compte le consentement de la personne. Deux ans et 60 000 euros, trois ans et 75 000 euros en ligne. Écrire « fake » en gros sur l'image ne change rien.",
    },
    {
      type: "screenshot",
      src: `${IMG}-legifrance-226-8-1.webp`,
      alt: "Page Légifrance de l'article 226-8-1 du code pénal sur les montages et contenus générés à caractère sexuel, avec les peines de deux ans et 60 000 euros, portées à trois ans et 75 000 euros en ligne",
      caption:
        "L'article 226-8-1 sur Légifrance, capturé le 9 novembre 2026 : contrairement au 226-8, il ne prévoit aucune sortie par la mention.",
      source: LF_22681,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Le code pénal n'est qu'une couche. Le droit à l'image et à la voix, protégé par l'article 9 du code civil, permet à une personne de te poursuivre au civil même si tu as mis une mention. La diffamation reste la diffamation, IA ou pas. Et si tu te fais passer pour quelqu'un afin de nuire à sa réputation, l'usurpation d'identité de l'article 226-4-1 du code pénal entre en jeu.",
    },
    { type: "h2", id: "ai-act", text: "L'AI Act ajoute une étiquette depuis le 2 août 2026" },
    {
      type: "p",
      text: "Côté européen, l'**article 50 du règlement sur l'IA** vise les « déployeurs », c'est-à-dire toi dès que tu utilises un outil pour publier une image, un son ou une vidéo qui constitue un deep fake. Tu dois indiquer que le contenu a été généré ou manipulé artificiellement. La page de référence de l'AI Act Explorer affiche une entrée en application au 2 août 2026.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ai-act-article-50.webp`,
      alt: "Paragraphe 4 de l'article 50 de l'AI Act sur le site AI Act Explorer : les déployeurs d'un système qui génère un deep fake doivent le signaler, avec un régime allégé pour les œuvres manifestement artistiques, créatives, satiriques ou fictionnelles",
      caption:
        "Le paragraphe 4 de l'article 50, version anglaise sur l'AI Act Explorer, consulté le 9 novembre 2026.",
      source: AI_ACT_50,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Quand le contenu fait partie d'une œuvre « manifestement artistique, créative, satirique, fictionnelle ou analogue », l'obligation se limite à signaler l'existence du contenu généré **d'une manière appropriée qui ne gâche pas l'œuvre**. Un carton au générique de ton court métrage, une mention en description d'un clip : l'Europe ne te demande pas d'écrire « IA » en rouge sur chaque plan d'une fiction.",
    },
    {
      type: "p",
      text: "J'ai détaillé la répartition fournisseur et déployeur, et les étiquettes des plateformes, dans mon guide sur [la boîte à outils du community manager IA](/blog/ia-community-manager). La mention que tu poses pour l'AI Act est aussi celle qui t'aide face à l'article 226-8.",
    },
    { type: "h2", id: "practical-workflow", text: "Six projets de créateur passés au crible" },
    {
      type: "p",
      text: "Voici comment je lis les textes sur des cas réels, avec mon regard de praticien. Dès qu'il y a de l'argent ou une personnalité en jeu, fais valider par un avocat.",
    },
    {
      type: "table",
      caption: "Six usages courants du deepfake, lus à travers le code pénal et l'AI Act (lecture au 9 novembre 2026)",
      headers: ["Projet", "Accord nécessaire", "Mention", "Mon avis"],
      rows: [
        ["Ton propre visage ou ta voix clonés pour tes vidéos", "Le tien, donc acquis", "Oui si on peut croire à une vraie prise de vue", "Feu vert"],
        ["Un ami ou un comédien doublé par l'IA dans un court métrage", "Écrit, avec le périmètre", "Au générique suffit pour une fiction", "Feu vert avec contrat"],
        ["Parodie d'un homme politique dans un sketch", "Non, si le trucage est évident", "Oui, même allégée", "Possible, prudence sur les propos"],
        ["Pub avec le visage ou la voix d'une célébrité", "Indispensable", "Oui", "Feu rouge sans contrat signé"],
        ["Faire parler la photo d'un proche disparu", "Celui de la famille, au minimum", "Oui si partagé publiquement", "Possible, je le déconseille"],
        ["Tout contenu sexuel avec une personne réelle", "Seul le consentement compte", "Ne te protège pas", "Interdit, point"],
      ],
    },
    {
      type: "p",
      text: "La parodie te protège quand tu fais rire de quelqu'un. Elle ne te protège plus quand tu utilises sa notoriété pour vendre un produit : là, c'est son image qui travaille pour toi, et sans contrat c'est perdu d'avance. Même logique pour un sosie IA « librement inspiré » : si le public reconnaît la personne, le visage est le sien.",
    },
    {
      type: "p",
      text: "Pour le proche disparu, j'ai déjà expliqué dans mon tutoriel pour [animer une photo avec l'IA](/blog/animer-photo-ia) pourquoi je refuse de lui faire dire des mots qu'il n'a jamais prononcés. Et même avec l'accord d'un enfant du défunt, un frère ou une sœur peut très mal le vivre.",
    },
    { type: "h3", id: "checklist", text: "Ma checklist avant de publier un visage ou une voix générés" },
    {
      type: "ol",
      items: [
        "**Identifie chaque personne reconnaissable** dans ta vidéo, figurants compris. Un visage flou en arrière-plan peut suffire à reconnaître quelqu'un.",
        "**Obtiens un accord écrit** qui dit quoi : quel contenu, quels réseaux, quelle durée, usage commercial ou non, et comment la personne peut retirer son accord. Un message vocal « vas-y, fais-toi plaisir » sera très difficile à faire valoir le jour où vous ne serez plus d'accord.",
        "**Pose la mention dans le fichier lui-même.** Un texte incrusté au début ou un carton de fin survit aux repartages, la description non.",
        "**Coche l'étiquette IA de la plateforme** quand elle existe. YouTube, TikTok et Instagram ont chacun leur case.",
        "**Garde tes fichiers de travail** : prompts, sources, versions, date de génération. Si on te conteste, tu montres comment la vidéo a été faite.",
        "**Relis la vidéo en te mettant à la place de la personne représentée.** Si elle peut perdre un client, un emploi ou sa tranquillité à cause de ta vidéo, ne publie pas.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : rédige un modèle d'autorisation une fois pour toutes, avec une case par usage (réseaux sociaux, publicité payante, festival, formation). Tu le fais signer avant la séance de capture, pas après la livraison. Ça t'évite le coup de fil gêné trois mois plus tard. Si tu montes un vrai casting, mon article sur [les acteurs IA et le casting virtuel](/blog/acteurs-ia-casting-virtuel) détaille le reste de la chaîne.",
    },
    {
      type: "p",
      text: "Si ton projet passe par un avatar parlant ou un doublage, mon guide pour [faire parler un personnage avec le lip-sync](/blog/lip-sync-ia-faire-parler-personnage) montre l'aspect technique. Le droit, lui, se règle avant de lancer le premier rendu.",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui coûtent cher" },
    { type: "h3", id: "erreur-hashtag", text: "Le #ia minuscule perdu dans les hashtags" },
    {
      type: "p",
      text: "Symptôme : la mention existe, coincée entre #viral et #fyp, invisible sur mobile et absente dès que quelqu'un télécharge la vidéo. Le texte exige une mention expresse, et un hashtag noyé ressemble assez peu à quelque chose d'exprès. Fix concret : un texte lisible à l'écran pendant au moins les premières secondes, et la même phrase en tête de description.",
    },
    { type: "h3", id: "erreur-parodie", text: "Croire que « c'est une parodie » couvre tout" },
    {
      type: "p",
      text: "Symptôme : tu fais dire à un élu une phrase plausible, sur un ton sérieux, et la vidéo circule sans contexte. Les gens y croient, la personne porte plainte. Une parodie que le public prend pour vraie risque fort de perdre sa protection. Fix concret : pousse l'absurde assez loin pour qu'aucun spectateur ne puisse s'y tromper, et ajoute la mention quand même.",
    },
    { type: "h3", id: "erreur-accord-oral", text: "L'accord oral du copain" },
    {
      type: "p",
      text: "Symptôme : ton ami était d'accord pour une vidéo drôle entre vous, la vidéo marche, une marque la reprend, et il découvre son visage dans une campagne. L'accord ne couvrait pas ça, et tu n'as rien pour prouver ce qu'il couvrait. Fix concret : même entre amis, trois lignes signées avec le périmètre. Ça prend deux minutes et ça protège aussi l'amitié.",
    },
    { type: "h3", id: "erreur-metadonnees", text: "Effacer les métadonnées pour éviter le badge" },
    {
      type: "p",
      text: "Symptôme : tu passes la vidéo dans un outil qui vide les métadonnées, le badge « contenu IA » de la plateforme ne s'affiche plus, et tu crois t'en tirer. Tu viens surtout de supprimer la preuve que tu ne cherchais pas à tromper. Fix concret : laisse les métadonnées en place et ajoute ta propre mention par-dessus. Pour comprendre comment ces marquages sont lus, mon article sur [la détection des images générées par IA](/blog/detecter-image-generee-ia) fait le tour des indices.",
    },
    { type: "h2", id: "victime", text: "Si c'est toi qui te retrouves dans un deepfake" },
    {
      type: "p",
      text: "Si tu montres ton visage en ligne, tu peux aussi te retrouver de l'autre côté. La CNIL a publié le 3 février 2026 une page qui détaille les réflexes. Dans l'ordre : signaler sur la plateforme, garder les preuves, porter plainte au commissariat ou à la gendarmerie, et pour un contenu illicite grave, passer par [le portail PHAROS](" + PHAROS + ").",
    },
    {
      type: "screenshot",
      src: `${IMG}-cnil.webp`,
      alt: "Page de la CNIL intitulée Hypertrucage (deepfake) : comment se protéger et signaler les contenus illicites, datée du 3 février 2026",
      caption:
        "La page de la CNIL sur l'hypertrucage, datée du 3 février 2026, capturée le 9 novembre 2026.",
      source: CNIL,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Tu peux aussi saisir [la CNIL](" + CNIL + ") quand ton visage, ta voix ou ton nom sont utilisés sans ton accord. La CNIL prévient elle-même que cette plainte ne remplace pas une plainte pénale, et qu'elle ne peut ni t'obtenir des dommages et intérêts ni sanctionner l'auteur d'un délit. Fais les deux.",
    },
    {
      type: "p",
      text: "Mon avis pour finir : le deepfake fait peur parce qu'on en parle surtout à travers ses pires usages. Pour un créateur honnête, il suffit d'un accord signé et d'une mention à l'écran. Avec ça, tu peux cloner ta voix, faire jouer un comédien qui n'est pas venu au tournage ou caricaturer qui tu veux, sans regarder par-dessus ton épaule.",
    },
    { type: "cta", variant: "formation" },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 9 novembre 2026 les articles 226-8 et 226-8-1 du code pénal sur Légifrance (version en vigueur à cette date), la page de la CNIL sur l'hypertrucage et l'article 50 de l'AI Act sur l'AI Act Explorer. Les quatre captures viennent de ces pages, prises le même jour dans Chrome, sans accepter de cookies.",
        "Le tableau des six cas est ma lecture de ces textes, pas un avis juridique. Je ne suis pas avocat. Je n'ai pas cité de jurisprudence, faute de l'avoir lue dans sa source.",
      ],
      teste: ["La lecture des textes en vigueur au 9 novembre 2026, cités sans reformulation des peines"],
      nonTeste: [
        "La jurisprudence récente sur l'article 226-8",
        "Le texte de l'article 226-4-1 sur l'usurpation d'identité, que je n'ai pas pu relire le jour même",
        "Les lignes directrices de la Commission européenne sur l'article 50",
      ],
      sources: [
        { label: "Code pénal, article 226-8 (Légifrance)", href: LF_2268 },
        { label: "Code pénal, article 226-8-1 (Légifrance)", href: LF_22681 },
        { label: "CNIL, Hypertrucage (deepfake)", href: CNIL },
        { label: "AI Act, article 50 (AI Act Explorer)", href: AI_ACT_50 },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-09 -->
