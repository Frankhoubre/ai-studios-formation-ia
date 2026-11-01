import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-01";
const IMG = "/images/articles/robots-txt-entrainement-ia-createurs";
const DRAFT = "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/";
const DRAFT_HTML = "https://datatracker.ietf.org/doc/html/draft-kelley-aipref-training-preference-signal-00";
const GOOGLE = "https://developers.google.com/search/blog/2026/10/ai-training-control";
const BING = "https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/";
const OPENAI = "https://openai.com/index/helping-websites-express-ai-training-preferences/";
const TNW = "https://thenextweb.com/news/ai-training-opt-out-robots-txt-google-openai-microsoft-anthropic";
const GOOGLE_EXTENDED = "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers";

export const robotsTxtEntrainementIaCreateurs: Article = {
  title: "Robots.txt anti-entraînement IA : Google, OpenAI, Microsoft",
  slug: "robots-txt-entrainement-ia-createurs",
  description:
    "Le 30 octobre 2026, Google, Microsoft, OpenAI et Anthropic ont soutenu un robots.txt commun contre l'entraînement IA. Ce que ça change pour ton site.",
  excerpt:
    "Une seule ligne dans ton robots.txt pour dire non à l'entraînement des IA de Google, Microsoft, OpenAI et Anthropic. Elle ne sera lue qu'en 2027 et ne rattrape rien de ce qui a déjà été aspiré, mais tu peux la poser dès aujourd'hui.",
  category: "business-creatif",
  tags: ["Actualités IA", "robots.txt", "entraînement ia", "droits d'auteur", "portfolio", "google-extended"],
  date: "2026-11-01",
  updatedAt: "2026-11-01",
  readingTime: 7,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/robots-txt-entrainement-ia-createurs.webp",
  imageAlt:
    "Dans une salle d'archives photo, un photographe âgé à barbe blanche range des négatifs dans un grand tiroir métallique pendant qu'une jeune assistante dispose trois tirages sur une table près de la porte ouverte",
  keywords: [
    "robots.txt entraînement ia",
    "bloquer entraînement ia",
    "__usage_ai-training",
    "google-extended",
    "protéger ses images de l'ia",
  ],
  relatedSlugs: ["portfolio-creations-ia-qui-convertit", "musique-ia-droits-videos", "ia-community-manager"],
  faq: [
    {
      question: "Qu'est-ce que le signal __usage_ai-training ?",
      answer:
        "Un nom spécial que tu places dans ton fichier robots.txt, à la place d'un nom de robot, pour dire quelles parties de ton site tu refuses de voir servir à l'entraînement d'une IA. Il vient d'un brouillon IETF publié le 30 octobre 2026 par Kevin Kelley, d'Anthropic. Google, Microsoft et OpenAI ont annoncé le même jour qu'ils le respecteraient.",
    },
    {
      question: "À partir de quand ce signal sera-t-il respecté ?",
      answer:
        "Pas tout de suite. Microsoft l'appliquera à partir du 1er février 2027. Google vise 2027 (début 2027 dans sa documentation des robots). OpenAI parle des prochains mois et Anthropic dit avoir commencé le travail. Tu peux l'ajouter dès maintenant : les lecteurs de robots.txt actuels le comprennent déjà, puisque le brouillon n'invente aucune nouvelle règle.",
    },
    {
      question: "Est-ce que ça retire mes images des modèles déjà entraînés ?",
      answer:
        "Non. Le signal exprime une préférence pour les collectes à venir. Rien dans les annonces du 30 octobre ne parle de retirer des contenus déjà utilisés pour entraîner un modèle.",
    },
    {
      question: "Mon « User-agent: * » avec Disallow suffit-il ?",
      answer:
        "Non. Le brouillon précise qu'un groupe en joker (*) ne doit pas être lu comme une préférence d'entraînement. Si ton robots.txt ne contient aucun groupe __usage_ai-training, tu n'as exprimé aucune préférence, même si tu bloques déjà tous les robots par ailleurs.",
    },
    {
      question: "Bloquer l'entraînement va-t-il faire baisser mon référencement Google ou Bing ?",
      answer:
        "Microsoft écrit que ces préférences ne changent pas l'éligibilité aux résultats classiques de Bing. Google rappelle que Google-Extended n'est ni un critère d'inclusion ni un signal de classement dans la recherche. En revanche, Microsoft prévient que bloquer le « grounding » réduit fortement ta visibilité dans les réponses générées, et Google indique que ce sont les sites qui autorisent Google-Extended qui peuvent apparaître dans les réponses de Gemini.",
    },
    {
      question: "Mes images publiées sur Instagram ou Behance sont-elles protégées ?",
      answer:
        "Non, ton robots.txt ne vaut que pour ton propre domaine. Ce que tu publies sur une plateforme dépend du robots.txt de cette plateforme et de ses conditions d'utilisation. Le signal protège donc surtout ce que tu héberges chez toi : portfolio, galerie, boutique.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le vendredi 30 octobre 2026, Google, Microsoft et OpenAI ont annoncé qu'ils respecteraient **une seule ligne de robots.txt pour refuser l'entraînement de leurs IA**. La règle vient d'un [brouillon IETF](" + DRAFT + ") publié le même jour par Kevin Kelley, ingénieur chez Anthropic, qui dit avoir commencé à l'intégrer. Si tu montres tes images, tes vidéos ou tes illustrations sur ton propre site, tu peux enfin dire non aux quatre en même temps, au lieu de courir après le nom de chaque robot.",
    },
    {
      type: "p",
      text: "Avant de te réjouir : aucun de ces robots ne lira la ligne avant 2027, personne n'est obligé de la respecter, et les images déjà aspirées restent dans les modèles. Ça vaut quand même le coup de la poser cette semaine sur ton portfolio, voici pourquoi et comment.",
    },
    { type: "h2", id: "ce-qui-a-ete-annonce", text: "Ce qui a été annoncé le 30 octobre" },
    {
      type: "p",
      text: "Le brouillon s'appelle « Machine-Readable Training Preference Signal ». Dans ton robots.txt, tu crées un groupe au nom un peu spécial, « __usage_ai-training ». Il ne désigne aucun robot : c'est un **jeton de préférence**. Les chemins que tu y bloques sont ceux que tu refuses de voir servir à l'entraînement. Aucune nouvelle commande, aucune nouvelle syntaxe : n'importe quel lecteur de robots.txt actuel sait déjà le lire.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ietf.webp`,
      alt: "Page du brouillon IETF draft-kelley-aipref-training-preference-signal-00, publié le 30 octobre 2026 par K. Kelley d'Anthropic, avec l'encadré qui précise que le document n'est pas validé par l'IETF",
      caption: "Le brouillon de Kevin Kelley (Anthropic), daté du 30 octobre 2026. L'encadré jaune rappelle qu'il n'a encore aucun statut officiel à l'IETF.",
      source: DRAFT_HTML,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Côté Google, c'est John Mueller qui a signé [l'annonce sur le blog Search Central](" + GOOGLE + "). Google vise un support « en 2027 ». Si tu utilises le jeton pour refuser l'entraînement sans rien écrire sur Google-Extended, Google le lira comme un blocage de Google-Extended, son réglage maison depuis 2023.",
    },
    {
      type: "screenshot",
      src: `${IMG}-google.webp`,
      alt: "Billet du Google Search Central Blog du vendredi 30 octobre 2026 intitulé Supporting a shared AI training control for websites, avec le paragraphe sur Google-Extended",
      caption: "L'annonce de Google du 30 octobre 2026 : le jeton commun vaudra blocage de Google-Extended si tu ne précises rien d'autre.",
      source: GOOGLE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 742,
    },
    {
      type: "p",
      text: "Microsoft va plus loin dans [son billet du Bing Blog](" + BING + ") : il respectera le jeton à partir du 1er février 2027, avec en plus un réglage page par page. Il sépare surtout deux usages, l'entraînement des modèles et le « grounding », c'est-à-dire le fait de lire ta page pour fabriquer une réponse dans Copilot ou Bing. OpenAI promet un support « dans les prochains mois » selon [The Next Web](" + TNW + "), et ses réglages GPTBot continuent de s'appliquer.",
    },
    {
      type: "table",
      caption: "Qui respectera le signal, et quand",
      headers: ["Acteur", "Engagement annoncé", "Date de mise en œuvre"],
      rows: [
        ["Anthropic", "Auteur du brouillon, intégration commencée", "Non datée, « ça prendra du temps »"],
        ["Google", "Jeton lu comme un blocage de Google-Extended", "2027 (début 2027 dans sa doc)"],
        ["Microsoft", "Jeton + réglages par page, entraînement et grounding séparés", "1er février 2027"],
        ["OpenAI", "Support annoncé, GPTBot reste valable", "« Dans les prochains mois »"],
        ["Meta", "Soutien de principe exprimé sur X", "Aucun engagement"],
      ],
      source: [
        { label: "IETF, brouillon", href: DRAFT },
        { label: "Google Search Central", href: GOOGLE },
        { label: "Bing Blog", href: BING },
        { label: "The Next Web", href: TNW },
      ],
      verifieLe: CAPTURE,
    },
    { type: "h2", id: "ce-que-ca-change-pour-toi", text: "Ce que ça change pour un créateur" },
    {
      type: "p",
      text: "Jusqu'ici, protéger un portfolio voulait dire empiler des règles : une pour GPTBot, une pour Google-Extended, une pour ClaudeBot, et ainsi de suite à chaque nouveau robot. Le jeton commun remplace cette liste par une seule déclaration, que chaque fournisseur s'engage à lire. Pour un illustrateur ou un vidéaste qui n'a pas envie de suivre l'actualité des robots chaque mois, ça fait une corvée de moins.",
    },
    {
      type: "p",
      text: "Le brouillon permet aussi le tri fin. Son exemple bloque tout le site sauf un dossier presse : tu refuses l'entraînement sur ta galerie mais tu le permets sur les visuels que tu veux voir circuler. Pour un créateur, la logique colle bien à la réalité : **tes originaux d'un côté, ton kit presse de l'autre**.",
    },
    {
      type: "p",
      text: "Attention au piège du joker. Si ton robots.txt contient déjà un « User-agent: * » avec des blocages, ça ne compte pas. Le brouillon l'écrit noir sur blanc : sans groupe « __usage_ai-training », tu n'as exprimé aucune préférence d'entraînement.",
    },
    {
      type: "screenshot",
      src: `${IMG}-bing.webp`,
      alt: "Billet du Bing Blog du 30 octobre 2026, Your content, your choice: clearer preferences for training and grounding, signé Krishna Madhavan",
      caption: "Le billet de Microsoft du 30 octobre 2026 : l'éligibilité aux résultats Bing ne change pas, l'entraînement et le grounding deviennent deux réglages distincts.",
      source: BING,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "mode-emploi", text: "Ajouter le signal à ton site, étape par étape" },
    {
      type: "p",
      text: "Voilà ce que je mettrais sur un site de créateur qui veut garder sa galerie hors des jeux d'entraînement tout en laissant passer son dossier presse. Adapte les chemins à ton site.",
    },
    {
      type: "table",
      caption: "Les trois lignes à ajouter dans ton robots.txt, dans cet ordre",
      headers: ["Ligne à copier", "Ce qu'elle dit"],
      rows: [
        ["User-Agent: __usage_ai-training", "Ouvre le groupe de préférence d'entraînement (ce n'est pas un nom de robot)"],
        ["Disallow: /", "Tu refuses l'entraînement sur tout le site"],
        ["Allow: /presse/", "Sauf ce dossier, que tu acceptes de voir circuler"],
      ],
      source: { label: "IETF, exemple de la figure 1 du brouillon", href: DRAFT_HTML },
      verifieLe: CAPTURE,
    },
    {
      type: "ol",
      items: [
        "Ouvre « ton-domaine.fr/robots.txt » dans ton navigateur pour voir ce qui existe déjà. Sur WordPress, des extensions SEO comme Yoast ou Rank Math proposent un éditeur ; sur un site codé à la main, c'est un fichier à la racine.",
        "Ajoute le groupe « __usage_ai-training » sans toucher à tes règles actuelles. Les réglages par robot (GPTBot, Google-Extended, ClaudeBot) gardent tout leur sens : Google écrit noir sur blanc qu'ils continuent de fonctionner à côté du jeton commun.",
        "Décide ce que tu laisses ouvert. Un dossier « /presse/ » ou « /kit/ » avec trois visuels choisis, c'est souvent plus utile que tout fermer.",
        "Si tu tiens à apparaître dans les réponses de Gemini, réfléchis avant d'appliquer le blocage à Google. D'après Google, ce sont les sites qui autorisent explicitement Google-Extended qui peuvent y figurer et recevoir des clics. Une règle Google-Extended explicite prime sur le jeton commun.",
        "Note la date dans ton agenda : 1er février 2027 pour Microsoft, puis vérifie au printemps où en sont Google et OpenAI.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : profite de ce passage dans ton robots.txt pour relire ta page portfolio. Si tes meilleurs visuels sont uniquement sur Instagram, ce réglage ne les couvre pas. C'est un argument de plus pour avoir [un portfolio qui t'appartient vraiment](/blog/portfolio-creations-ia-qui-convertit), sur ton domaine.",
    },
    { type: "h2", id: "limites", text: "Les limites à garder en tête" },
    {
      type: "p",
      text: "Le jeton exprime **une simple préférence**. Aucun mécanisme de sanction n'existe, et l'IETF n'a validé le texte d'aucune façon : c'est une contribution individuelle, qui expire le 3 mai 2027 si elle n'avance pas. Selon The Next Web, un accord privé entre un site et une entreprise d'IA passe devant.",
    },
    {
      type: "p",
      text: "Le passé n'est pas couvert. Une image collectée en 2024 ne sort pas d'un modèle parce que tu ajoutes une ligne en 2026. Et les acteurs absents des annonces du 30 octobre ne sont tenus à rien : dans ce qui a été publié, aucun générateur d'images spécialisé ne figure parmi les soutiens.",
    },
    {
      type: "p",
      text: "Microsoft précise aussi que ces réglages ne créent aucun accord de licence ni de rémunération. Dire non à l'entraînement ne te fera pas payer. Pour la partie droits et usages commerciaux de ce que tu produis, j'ai détaillé les règles dans [mon article sur la musique IA et les droits](/blog/musique-ia-droits-videos), et la question de l'étiquetage des contenus est traitée dans [le guide du community manager IA](/blog/ia-community-manager).",
    },
    { type: "h2", id: "mon-avis", text: "Mon avis" },
    {
      type: "p",
      text: "Ajoute-le. Deux minutes de travail, aucun coût en référencement classique d'après Google comme Microsoft, et ta position est posée par écrit, ce qui comptera si les règles se durcissent. Google rappelle d'ailleurs que cette approche colle au code de bonnes pratiques européen pour les modèles d'IA à usage général, qui reconnaît le robots.txt comme moyen de se faire entendre.",
    },
    {
      type: "p",
      text: "Mais ne compte pas dessus pour protéger ce que tu as déjà publié. Le seul vrai levier reste de choisir ce que tu montres en entier, ce que tu montres en basse définition, et ce que tu gardes pour tes clients.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à créer avec l'IA sans te faire déborder",
      text: "Ma formation IA gratuite t'apprend à produire tes images et tes vidéos avec une méthode, étape par étape.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 1er novembre 2026 le brouillon IETF publié le 30 octobre, le billet de Google Search Central et celui du Bing Blog, tous deux datés du 30 octobre. Les trois captures viennent de ces pages, prises le même jour, sans connexion.",
        "La page d'OpenAI renvoyait une erreur d'accès lors de ma lecture : son engagement et la position de Meta sont donc repris de The Next Web (31 octobre 2026), qui cite les deux. La remarque sur Gemini vient du texte de Google ; l'effet exact d'un blocage sur AI Overviews n'est décrit nulle part, je ne l'affirme pas.",
      ],
      teste: ["La lecture des annonces officielles et du brouillon, captures du même jour"],
      nonTeste: [
        "Le comportement réel des robots, aucun ne lisant encore le jeton",
        "L'édition du robots.txt sur chaque hébergeur ou constructeur de site",
      ],
      sources: [
        { label: "IETF, draft-kelley-aipref-training-preference-signal-00", href: DRAFT },
        { label: "Google Search Central Blog, 30/10/2026", href: GOOGLE },
        { label: "Bing Blog, 30/10/2026", href: BING },
        { label: "OpenAI, annonce du 30/10/2026", href: OPENAI },
        { label: "The Next Web, 31/10/2026", href: TNW },
        { label: "Google, robots d'exploration courants (Google-Extended)", href: GOOGLE_EXTENDED },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-01 -->
