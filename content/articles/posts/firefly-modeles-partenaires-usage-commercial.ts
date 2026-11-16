import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-16";
const IMG = "/images/articles/firefly-modeles-partenaires-usage-commercial";
const ADOBE = "https://news.adobe.com/news/2026/11/adobe-firefly-expands";
const CB = "https://www.creativebloq.com/news/i-trusted-adobe-firefly-because-it-was-the-safe-ai-option-now-im-not-so-sure";
const BERI = "https://www.beri.net/article/best-ai-image-generator-indemnity-firefly-vertex-imagen-openai-getty-shutterstock";
const APPROACH = "https://www.adobe.com/fireflyapproach";

export const fireflyModelesPartenairesUsageCommercial: Article = {
  title: "Firefly et modèles partenaires : ton image est-elle sûre ?",
  slug: "firefly-modeles-partenaires-usage-commercial",
  description:
    "Firefly propose Seedance, Kling ou GPT Image à côté de ses modèles. La promesse « commercialement sûr » ne les couvre pas tous. Ce qu'il faut vérifier.",
  excerpt:
    "Firefly accueille maintenant Seedance, Kling, GPT Image et Nano Banana. Problème : la promesse « commercialement sûr » d'Adobe vise ses propres modèles. Ce qui change pour une image livrée à un client, et le réflexe à prendre.",
  category: "actualites-ia",
  tags: ["Actualités IA", "adobe firefly", "droits", "usage commercial", "client", "modèles ia"],
  date: "2026-11-16",
  updatedAt: "2026-11-16",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/firefly-modeles-partenaires-usage-commercial.webp",
  imageAlt:
    "Une graphiste d'une trentaine d'années dans un atelier lumineux compare sur un grand écran deux visuels de produit générés, un menu déroulant ouvert entre les deux, un contrat client surligné posé à côté du clavier",
  keywords: ["firefly modèles partenaires", "firefly usage commercial", "adobe firefly droits", "image ia client droits", "firefly commercialement sûr"],
  relatedSlugs: ["workflow-client-brief-livraison-ia", "deepfake-createur-droit", "photoshop-relight-eclairage-ia-photo"],
  faq: [
    {
      question: "Qu'est-ce qu'un modèle partenaire dans Adobe Firefly ?",
      answer:
        "Un modèle d'une autre entreprise proposé dans l'interface de Firefly. Adobe cite ByteDance, Google, Kling, OpenAI et ElevenLabs, avec par exemple Seedance 2.5, Kling 4.0, GPT Image 2.6 et Nano Banana 2.1.",
    },
    {
      question: "Les images faites avec un modèle partenaire sont-elles « commercialement sûres » ?",
      answer:
        "Pas automatiquement. La promesse d'Adobe porte sur ses propres modèles Firefly, entraînés sur du contenu sous licence selon Adobe. Les modèles partenaires ont leurs propres conditions, et Adobe les exclut de son indemnisation Firefly, d'après ses conditions publiées.",
    },
    {
      question: "Est-ce que je peux quand même utiliser un modèle partenaire pour un client ?",
      answer:
        "Oui, mais en connaissance de cause. Note le modèle utilisé, lis ses conditions, et préviens le client si l'image ne vient pas d'un modèle Firefly. Pour une campagne sensible, reste sur les modèles Firefly.",
    },
    {
      question: "Le mode Auto-Select de Firefly choisit-il toujours un modèle Firefly ?",
      answer:
        "Non. Adobe explique que l'agent peut choisir le modèle selon le résultat voulu. Si tu as besoin d'un modèle précis pour des raisons de droits, choisis-le toi-même au lieu de laisser l'agent décider.",
    },
    {
      question: "L'indemnisation d'Adobe me couvre-t-elle avec un abonnement individuel ?",
      answer:
        "D'après Adobe, l'indemnisation pour certaines images Firefly vise les clients entreprise éligibles. Un abonnement individuel donne le droit d'usage commercial des images Firefly, ce qui n'est pas la même chose qu'une défense juridique.",
    },
    {
      question: "Comment savoir avec quel modèle une image a été faite ?",
      answer:
        "Le plus simple est de le noter toi-même au moment de la génération, dans le nom du fichier ou dans un tableau de suivi du projet. Ne compte pas sur ta mémoire trois mois plus tard.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Pendant des années, Adobe a vendu Firefly avec un argument simple : ses modèles sont entraînés sur du contenu sous licence, donc tu peux livrer à un client sans te poser de questions. Depuis Adobe MAX, Firefly propose aussi **Seedance, Kling, GPT Image ou Nano Banana**. Et là, la question revient.",
    },
    {
      type: "p",
      text: "Le 15 novembre 2026, Ian Dean, rédacteur chez [Creative Bloq](" + CB + "), a écrit tout haut ce que beaucoup pensaient : un badge Firefly n'est pas forcément une garantie Firefly. Voici ce qu'Adobe a annoncé, ce que couvre vraiment la promesse, et le réflexe à prendre pour tes livraisons.",
    },
    { type: "h2", id: "annonce", text: "Ce qu'Adobe a annoncé" },
    {
      type: "screenshot",
      src: `${IMG}-adobe-annonce.webp`,
      alt: "Communiqué d'Adobe du mardi 10 novembre 2026 : Adobe Firefly Expands as the AI Creative Studio, Bringing Adobe's Trusted Creative Tools to Every Creator",
      caption: "Le communiqué d'Adobe du 10 novembre.",
      source: ADOBE,
      capturedAt: CAPTURE,
      width: 690,
      height: 265,
    },
    {
      type: "p",
      text: "D'après [le communiqué d'Adobe du 10 novembre](" + ADOBE + "), Firefly devient un « studio créatif IA » qui réunit les outils d'Adobe, ses propres modèles et ceux de partenaires : ByteDance, Google, Kling, OpenAI, ElevenLabs. Deux points comptent pour toi :",
    },
    {
      type: "ul",
      items: [
        "**De nouveaux modèles partenaires** : Adobe cite Dreamina Seedance 2.5, Kling 4.0, GPT Image 2.6 Sunburst et Flare, Nano Banana 2.1.",
        "**Un sélecteur de modèle** : tu choisis un modèle pour la session, ou tu laisses l'agent créatif d'Adobe choisir en mode Auto-Select, selon le résultat voulu.",
      ],
    },
    {
      type: "screenshot",
      src: `${IMG}-adobe.webp`,
      alt: "Extrait du communiqué d'Adobe : choix de modèles élargi, avec parmi les ajouts récents Dreamina Seedance 2.5, Kling 4.0, GPT Image 2.6 Sunburst, GPT Image 2.6 Flare et Nano Banana 2.1",
      caption: "Les modèles partenaires ajoutés, d'après Adobe.",
      source: ADOBE,
      capturedAt: CAPTURE,
      width: 940,
      height: 118,
    },
    { type: "h2", id: "promesse", text: "Ce que couvre vraiment « commercialement sûr »" },
    {
      type: "p",
      text: "On croit souvent que tout ce qui sort de l'interface Firefly hérite de la promesse d'Adobe. Ce n'est pas le cas. La promesse vise les **modèles Firefly**, ceux qu'Adobe entraîne lui-même sur du contenu sous licence et du domaine public, comme il l'explique sur [sa page d'approche de l'IA générative](" + APPROACH + ").",
    },
    {
      type: "p",
      text: "Les modèles partenaires arrivent avec **leurs propres conditions et leur propre historique d'entraînement**. Adobe le précise dans ses conditions pour les modèles partenaires : ils sont exclus de l'indemnisation Firefly. Selon [une analyse de The D*AI*LY Brief](" + BERI + "), une couverture complémentaire existe depuis mai 2026 pour certains modèles Google et OpenAI, mais seulement pour certains contrats entreprise, et sans couvrir les marques ni le droit à l'image.",
    },
    {
      type: "screenshot",
      src: `${IMG}-creativebloq.webp`,
      alt: "Article de Creative Bloq signé Ian Dean : I trusted Adobe Firefly because it was the safe AI option, now I'm not so sure, Firefly est le générateur d'images le plus sûr mais avec OpenAI, ByteDance et Kling dans la boucle, je me demande ce que cette promesse couvre",
      caption: "La tribune de Creative Bloq du 15 novembre.",
      source: CB,
      capturedAt: CAPTURE,
      width: 640,
      height: 280,
    },
    {
      type: "p",
      text: "Ian Dean demande à Adobe des choses très concrètes : écrire à côté de chaque modèle sur quoi il a été entraîné, dire ce que couvre le label « sûr » (style compris), et permettre aux studios de **verrouiller leur espace sur les seuls modèles Firefly**. C'est son avis, mais le constat de départ est vérifiable : le même écran peut produire une image couverte et une autre qui ne l'est pas.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois blocs : les modèles Firefly, entraînés sur du contenu sous licence selon Adobe, portent la promesse commercialement sûr ; les modèles partenaires comme Seedance, Kling, GPT Image ou Nano Banana ont leurs propres conditions et sont exclus de l'indemnisation Firefly ; ton réflexe, noter le modèle de chaque image livrée",
      caption: "La garantie suit le modèle, pas l'appli. Schéma AI Studios.",
      source: ADOBE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 615,
    },
    { type: "h2", id: "reflexe", text: "Le réflexe pour tes livraisons client" },
    {
      type: "ul",
      items: [
        "**Choisis le modèle toi-même** pour tout ce qui part chez un client. Le mode Auto-Select est pratique pour explorer, pas pour une image dont tu dois pouvoir dire d'où elle vient.",
        "**Note le modèle de chaque image livrée**, dans le nom du fichier ou dans ton tableau de projet. Si tu n'as pas encore de méthode de suivi, mon [workflow client, du brief à la livraison](/blog/workflow-client-brief-livraison-ia) te donne une base.",
        "**Lis les conditions du modèle partenaire** avant une campagne. Ce sont les siennes qui comptent, pas celles d'Adobe.",
        "**Dis-le au client** quand une image vient d'un modèle partenaire. Ça prend une ligne dans ton devis ou ton bon de livraison, et ça évite une discussion gênante plus tard.",
        "**Garde un œil sur les visages et les marques**, quel que soit le modèle. Les couvertures citées plus haut excluent les marques et le droit à l'image. Pour les visages, relis mon article sur [les deepfakes et le droit des créateurs](/blog/deepfake-createur-droit).",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Si Adobe va afficher l'origine de chaque modèle** dans l'interface, comme le demande Creative Bloq. Rien n'est annoncé.",
        "**Si un verrou « Firefly seulement »** sera proposé à tous les abonnés, et pas seulement aux entreprises.",
        "**Le détail des conditions de chaque partenaire** : elles changent d'un modèle à l'autre, et je ne les ai pas toutes relues pour cet article.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Avoir Seedance, Kling et GPT Image au même endroit que Photoshop, c'est pratique, et je comprends Adobe. Mais si tu vends des images, la question « avec quoi c'est fait ? » finit toujours par arriver. Prends l'habitude de noter le modèle dès maintenant. C'est trente secondes par image, et c'est ce qui te permet de répondre tranquillement le jour où un client te la pose.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à livrer des images IA à tes clients",
      text: "Ma formation IA gratuite te montre comment construire un workflow propre, du brief à la livraison, avec les bons outils au bon moment.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 16 novembre 2026 à partir du communiqué d'Adobe du 10 novembre (Adobe MAX), de la tribune de Creative Bloq du 15 novembre, de la page d'Adobe sur son approche de l'IA générative et d'une analyse de The D*AI*LY Brief sur les garanties des générateurs d'images, lus le 16 novembre.",
        "La page des conditions d'Adobe pour les modèles partenaires bloque la lecture automatisée : ce que j'en dis vient de l'analyse de The D*AI*LY Brief qui la cite. Je ne suis pas juriste, cet article n'est pas un conseil juridique.",
      ],
      teste: ["La lecture du communiqué d'Adobe et de la tribune de Creative Bloq"],
      nonTeste: ["Le sélecteur de modèle de Firefly", "Les conditions de chaque modèle partenaire", "L'indemnisation d'Adobe sur un contrat entreprise"],
      sources: [
        { label: "Adobe, Adobe Firefly Expands as the AI Creative Studio, 10/11/2026", href: ADOBE },
        { label: "Creative Bloq, I trusted Adobe Firefly because it was the safe AI option, 15/11/2026", href: CB },
        { label: "Adobe, notre approche de l'IA générative avec Firefly", href: APPROACH },
        { label: "The D*AI*LY Brief, Adobe, Google and Getty Offer Different AI Image Indemnities", href: BERI },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-16 -->
