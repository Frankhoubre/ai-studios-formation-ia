import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-13";
const IMG = "/images/articles/nectar-creator-agent-marques-createurs";
const TC = "https://techcrunch.com/2026/11/12/nectar-launches-an-ai-agent-to-automate-creator-discovery-and-outreach-for-brands/";
const NS = "https://www.nectarsocial.com/creator/";

export const nectarCreatorAgentMarquesCreateurs: Article = {
  title: "Nectar Creator Agent : quand une IA choisit les créateurs",
  slug: "nectar-creator-agent-marques-createurs",
  description:
    "Nectar lance un agent IA qui trouve, contacte et suit les créateurs pour les marques, parmi 300 millions de profils. Ce que ça change pour tes partenariats.",
  excerpt:
    "Nectar, une start-up fondée par deux anciennes de Meta, lance Creator Agent : une IA qui cherche des créateurs pour les marques, analyse leurs vidéos et leur écrit. Si tu vis de tes contenus, c'est peut-être une IA qui lira ton profil la prochaine fois.",
  category: "actualites-ia",
  tags: ["Actualités IA", "partenariats", "créateurs", "marques", "agent ia", "instagram", "tiktok"],
  date: "2026-11-13",
  updatedAt: "2026-11-13",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/nectar-creator-agent-marques-createurs.webp",
  imageAlt:
    "Une jeune créatrice de contenu aux cheveux bouclés, assise sur son lit dans une chambre transformée en petit studio avec un anneau lumineux et un téléphone sur trépied, découvre un message sur son ordinateur portable d'un air ravi, un colis avec un échantillon de produit posé à côté d'elle",
  keywords: ["nectar creator agent", "agent ia marques créateurs", "partenariat marque créateur", "influence ia", "trouver des partenariats"],
  relatedSlugs: ["portfolio-creations-ia-qui-convertit", "gagner-argent-ia-creative-modeles", "fixer-prix-creation-ia-grille"],
  faq: [
    {
      question: "Qu'est-ce que le Creator Agent de Nectar ?",
      answer:
        "C'est un agent IA lancé le 12 novembre 2026 par Nectar, une plateforme de marketing. Il cherche des créateurs pour les marques, analyse leurs vidéos et leurs partenariats passés, leur écrit des messages personnalisés, gère les envois de produits et suit les résultats des campagnes, d'après TechCrunch.",
    },
    {
      question: "Sur quels réseaux fonctionne-t-il ?",
      answer:
        "Instagram et TikTok, d'après TechCrunch. L'agent est disponible dans le monde entier dès son lancement, pour les clients de Nectar.",
    },
    {
      question: "Combien de créateurs l'agent analyse-t-il ?",
      answer:
        "Nectar annonce plus de 300 millions de profils de créateurs, y compris des petits comptes qui gagnent en audience. C'est un chiffre de l'entreprise, pas une mesure indépendante.",
    },
    {
      question: "Est-ce que l'agent remplace le contact humain avec la marque ?",
      answer:
        "Il rédige et envoie les premiers messages dans le ton de la marque, et garde la mémoire des échanges. La négociation et la décision finale restent du côté de l'équipe marketing, mais le premier contact peut venir d'une IA.",
    },
    {
      question: "Comment être repéré par ce type d'agent ?",
      answer:
        "L'agent lit le contenu de tes vidéos et vérifie tes partenariats passés. Une ligne éditoriale claire, des collaborations cohérentes et des mentions sponsorisées bien indiquées t'aident plus qu'un gros nombre d'abonnés.",
    },
    {
      question: "Nectar est-il disponible en France ?",
      answer:
        "TechCrunch indique que l'agent est disponible dans le monde entier. Nectar ne publie pas de prix sur sa page, et l'outil s'adresse aux marques, pas aux créateurs.",
    },
  ],
  content: [
    {
      type: "p",
      text: "La prochaine marque qui t'écrit pour un partenariat ne t'aura peut-être pas trouvé elle-même. **Nectar**, une start-up de marketing, vient de lancer **Creator Agent** : une IA qui cherche des créateurs, regarde leurs vidéos, leur envoie un message et suit la campagne.",
    },
    {
      type: "p",
      text: "Le lancement date du **12 novembre 2026**. Voici ce que fait cet agent, et surtout ce que ça change pour toi si tu vis en partie de tes contenus.",
    },
    {
      type: "screenshot",
      src: `${IMG}-nectar.webp`,
      alt: "Page Creator Agent de Nectar : Build your brand's biggest distribution channel, un agent qui trouve, vérifie et active les créateurs, avec une conversation où l'agent liste 28 personnes qui ont publié sur un produit sans taguer la marque",
      caption: "La page Creator Agent de Nectar.",
      source: NS,
      capturedAt: CAPTURE,
      width: 900,
      height: 745,
    },
    { type: "h2", id: "annonce", text: "Ce que Nectar a lancé" },
    {
      type: "p",
      text: "D'après [l'article de TechCrunch](" + TC + ") (Lauren Forristal), Nectar a été fondée par deux sœurs passées par Meta, Misbah et Farah Uraizee. Son nouvel agent fait le travail qu'une équipe marketing fait encore souvent à la main, dans un tableur :",
    },
    {
      type: "ul",
      items: [
        "**Chercher des créateurs** parmi plus de **300 millions de profils**, y compris des petits comptes qui commencent à percer.",
        "**Analyser les vidéos** pour comprendre de quoi parle le créateur, s'il colle à la marque et si ses partenariats passés posent problème.",
        "**Écrire et envoyer les messages** dans le ton de la marque, puis gérer contrats, envois de produits et livraison.",
        "**Repérer des moments de vie** (un mariage, un bébé, un marathon) pour proposer un message ou un cadeau personnalisé.",
        "**Suivre les résultats** des campagnes.",
      ],
    },
    {
      type: "p",
      text: "L'agent couvre **Instagram et TikTok** et il est disponible dans le monde entier. Nectar prévoit aussi de l'ouvrir par MCP, pour qu'une équipe puisse l'utiliser depuis Claude, ChatGPT, Gemini ou Copilot.",
    },
    {
      type: "screenshot",
      src: `${IMG}-techcrunch.webp`,
      alt: "Titre de TechCrunch du 12 novembre 2026 : Nectar launches an AI agent to automate creator discovery and outreach for brands, signé Lauren Forristal",
      caption: "L'article de TechCrunch, publié le 12 novembre 2026.",
      source: TC,
      capturedAt: CAPTURE,
      width: 660,
      height: 670,
    },
    { type: "h2", id: "pourquoi", text: "Pourquoi les marques automatisent ça" },
    {
      type: "p",
      text: "Parce que le marché a grossi. TechCrunch cite l'Interactive Advertising Bureau : les dépenses publicitaires auprès des créateurs devraient atteindre **44 milliards de dollars aux États-Unis en 2026**. Quand une marque travaille avec des centaines de créateurs, suivre chaque relation dans un fichier devient ingérable.",
    },
    {
      type: "screenshot",
      src: `${IMG}-createurs.webp`,
      alt: "Section de la page de Nectar : Creators are the new go-to-market, avec trois cartes, 44 milliards de dollars dépensés par les marques américaines auprès des créateurs souvent gérés dans un tableur, 300 millions de profils suivis en temps réel, et environ 90 % des conversations sur une marque sans tag",
      caption: "Les chiffres mis en avant par Nectar.",
      source: NS,
      capturedAt: CAPTURE,
      width: 900,
      height: 485,
    },
    {
      type: "p",
      text: "Nectar n'est pas seule. TechCrunch cite **Aspire** et **GRIN**, qui lancent aussi des agents pour automatiser la prospection de créateurs.",
    },
    { type: "h2", id: "pour-toi", text: "Ce que ça change pour toi, créateur" },
    {
      type: "p",
      text: "On croit souvent qu'une marque choisit un créateur à son nombre d'abonnés. Un agent comme celui-ci regarde autre chose : **ce que tu dis dans tes vidéos**, avec qui tu as déjà travaillé, et si ton compte progresse. Un petit compte cohérent peut sortir avant un gros compte qui parle de tout.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois points de ce que l'agent d'une marque regarde avant d'écrire à un créateur : ses vidéos, analysées sur le fond et pas seulement par mots-clés ; ses partenariats passés et leur compatibilité avec la marque ; sa progression, avec les petits comptes qui montent ajoutés à la liste",
      caption: "Ce que l'agent analyse, d'après TechCrunch. Schéma AI Studios.",
      source: TC,
      capturedAt: CAPTURE,
      width: 1600,
      height: 630,
    },
    {
      type: "ul",
      items: [
        "**Ta ligne éditoriale compte plus que jamais.** Si une IA résume ton compte en une phrase, que dirait cette phrase ? Si la réponse est floue, ton profil l'est aussi.",
        "**Tes anciens partenariats te suivent.** Un placement mal choisi il y a un an peut te sortir d'une liste aujourd'hui.",
        "**Le premier message peut venir d'une IA.** Il sera personnalisé et dans le ton de la marque. Réponds comme à une personne, mais négocie avec une personne.",
        "**Indique clairement tes contenus sponsorisés.** C'est une obligation, et c'est aussi ce qui permet à un agent de comprendre avec qui tu as travaillé.",
      ],
    },
    {
      type: "p",
      text: "Si tu cherches à décrocher tes premiers contrats, mon guide pour monter [un portfolio de créations IA qui convertit](/blog/portfolio-creations-ia-qui-convertit) reste la base. Et avant de répondre à une marque, jette un œil à [ma grille pour fixer tes prix](/blog/fixer-prix-creation-ia-grille).",
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Le prix.** Nectar ne l'affiche pas, la page propose une démo.",
        "**La qualité du tri.** Les 300 millions de profils et l'analyse des vidéos sont décrits par Nectar, sans test indépendant.",
        "**La place des créateurs français.** L'agent est mondial selon TechCrunch, mais les exemples et les chiffres sont américains.",
        "**Ce que voit le créateur.** Rien n'indique que tu puisses savoir si une marque t'a trouvé par un agent.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Pour un créateur, cette annonce est plutôt une bonne nouvelle, à une condition : avoir un compte lisible. Un agent ne s'arrête pas au chiffre d'abonnés, il lit le fond. Si tu as une spécialité claire et des partenariats cohérents, tu as plus de chances d'être trouvé qu'avant. Si ton compte part dans tous les sens, l'IA passera à côté, comme un humain pressé.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Construis un compte qui attire les marques",
      text: "Ma formation IA gratuite te montre comment créer des contenus réguliers et cohérents, de l'idée à la vidéo finie.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 13 novembre 2026 à partir de l'article de TechCrunch du 12 novembre 2026 (Lauren Forristal) et de la page Creator Agent de Nectar, lus le 13 novembre. Les captures viennent de ces deux pages.",
        "Je n'ai pas testé Creator Agent, qui s'adresse aux marques. Les chiffres de profils et d'analyse sont ceux de Nectar.",
      ],
      teste: ["La lecture de l'article de TechCrunch et de la page de Nectar"],
      nonTeste: ["Creator Agent lui-même", "Son prix et sa couverture des créateurs français"],
      sources: [
        { label: "TechCrunch, Nectar launches an AI agent to automate creator discovery and outreach for brands, 12/11/2026", href: TC },
        { label: "Nectar, page Creator Agent", href: NS },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-13 -->
