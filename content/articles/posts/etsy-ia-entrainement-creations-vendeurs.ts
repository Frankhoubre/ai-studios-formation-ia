import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-22";
const IMG = "/images/articles/etsy-ia-entrainement-creations-vendeurs";
const VERGE = "https://www.theverge.com/ai-artificial-intelligence/1039304/etsy-says-it-will-revise-its-new-ai-policy-after-backlash-from-sellers";
const VAR = "https://www.valueaddedresource.net/etsy-expands-ai-training-rights/";
const PCG = "https://www.pcgamer.com/software/ai/etsy-sellers-are-closing-their-stores-in-response-to-the-platforms-new-ai-training-policy/";

export const etsyIaEntrainementCreationsVendeurs: Article = {
  title: "Etsy recule sur l'IA entraînée sur le travail des vendeurs",
  slug: "etsy-ia-entrainement-creations-vendeurs",
  description:
    "Etsy voulait entraîner l'IA sur les photos et textes de ses vendeurs. Des boutiques ferment, Etsy promet un nouveau texte. Ce qui est écrit, et quoi faire.",
  excerpt:
    "Les nouvelles conditions d'Etsy, en vigueur le 16 décembre, autorisent la plateforme et ses partenaires à entraîner l'IA sur le contenu des vendeurs. Après des fermetures de boutiques, Etsy annonce une révision. Ce que dit le contrat, ce que promet Etsy, et comment protéger ton travail.",
  category: "actualites-ia",
  tags: ["Actualités IA", "etsy", "droits d'auteur", "entraînement ia", "vendre ses créations", "illustration"],
  date: "2026-11-22",
  updatedAt: "2026-11-22",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/etsy-ia-entrainement-creations-vendeurs.webp",
  imageAlt:
    "Une illustratrice dans son petit atelier d'impression baigné de soleil tient une de ses planches botaniques et regarde, songeuse, l'écran de son ordinateur portable, entourée d'enveloppes kraft et d'affiches roulées",
  keywords: ["etsy ia", "etsy entraînement ia", "etsy conditions d'utilisation ia", "protéger ses créations ia", "vendre illustrations etsy"],
  relatedSlugs: ["vendre-prompts-templates-ia", "stock-footage-ia-vendre", "deepfake-createur-droit"],
  faq: [
    {
      question: "Qu'est-ce qui change dans les conditions d'Etsy ?",
      answer:
        "Les conditions publiées le 26 octobre 2026, en vigueur le 16 décembre, ajoutent le droit pour Etsy et ses partenaires et prestataires d'utiliser le contenu des membres pour développer, entraîner, tester et améliorer des technologies d'IA. Photos d'annonces, descriptions, vidéos et avis sont concernés.",
    },
    {
      question: "Etsy va-t-il utiliser mes créations pour copier mon travail ?",
      answer:
        "Etsy affirme que non. Le 16 novembre, son vice-président James Ossman a écrit qu'Etsy n'entraîne pas de modèles d'IA conçus pour copier les créations originales ou remplacer la créativité des vendeurs. Mais cette promesse ne figure pas dans le texte des conditions.",
    },
    {
      question: "Etsy va-t-il modifier ces conditions ?",
      answer:
        "Oui, selon The Verge : Etsy a dit au New York Times le 20 novembre qu'il partagerait bientôt des conditions révisées avec les vendeurs. Au 22 novembre 2026, la nouvelle version n'était pas publiée.",
    },
    {
      question: "Peut-on refuser que son contenu serve à entraîner l'IA ?",
      answer:
        "Les conditions renvoient à des droits de refus décrits dans la politique de confidentialité, mais Value Added Resource n'y a trouvé aucun mécanisme général pour les vendeurs américains. Les vendeurs de l'Union européenne et du Royaume-Uni peuvent avoir des droits supplémentaires sur leurs données personnelles, ce qui ne couvre pas forcément tout le contenu créatif.",
    },
    {
      question: "Fermer sa boutique suffit-il à retirer son contenu ?",
      answer:
        "Pas forcément. La licence accordée à Etsy est perpétuelle et irrévocable, et Etsy n'a pas précisé ce qu'il fait du contenu déjà mis en ligne ou supprimé dans ses jeux d'entraînement.",
    },
    {
      question: "Que peut faire un créateur dès maintenant ?",
      answer:
        "Lire la section 5 des conditions avant le 16 décembre, mettre en ligne des visuels en basse définition avec un filigrane discret, garder ses fichiers sources hors plateforme et ne pas dépendre d'un seul canal de vente.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu vends tes illustrations, tes presets ou tes impressions sur Etsy ? Depuis un mois, une ligne de ses conditions d'utilisation inquiète beaucoup de créateurs : elle autorise Etsy et ses partenaires à **entraîner l'IA avec le contenu des vendeurs**. Des boutiques ont fermé. Et le 20 novembre, Etsy a annoncé qu'il allait revoir le texte.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [la brève de Stevie Bonifield pour The Verge](" + VERGE + ") du 20 novembre, sur [l'analyse de Value Added Resource](" + VAR + "), qui cite les conditions et la réponse d'Etsy du 16 novembre, et sur [l'article d'Andy Chalk pour PC Gamer](" + PCG + "). Tout a été lu le 22 novembre. La page des conditions d'Etsy ne s'ouvrait pas depuis mon outil de lecture : les citations du contrat viennent de ces deux médias.",
    },
    { type: "h2", id: "contrat", text: "Ce que dit le contrat" },
    {
      type: "p",
      text: "Les nouvelles conditions ont été publiées le 26 octobre et s'appliquent le **16 décembre 2026**. Tu restes propriétaire de ce que tu mets en ligne : photos, descriptions, vidéos, avis. Mais tu accordes à Etsy une licence mondiale, gratuite, **perpétuelle et irrévocable**. La nouveauté tient en une phrase de la section 5, que je traduis :",
    },
    {
      type: "screenshot",
      src: `${IMG}-conditions.webp`,
      alt: "Extrait de l'article de Value Added Resource citant les conditions d'Etsy : le droit pour Etsy et ses partenaires et prestataires d'utiliser le contenu des membres pour développer, entraîner, tester et améliorer des technologies d'intelligence artificielle et d'apprentissage automatique",
      caption: "La clause citée par Value Added Resource, capturée le 22 novembre 2026.",
      source: VAR,
      capturedAt: CAPTURE,
      width: 700,
      height: 240,
    },
    {
      type: "p",
      text: "« Cela inclut le droit pour nous et nos partenaires et prestataires tiers d'utiliser votre contenu pour développer, entraîner, tester et améliorer des technologies d'intelligence artificielle et d'apprentissage automatique », sous réserve des droits de refus prévus par la politique de confidentialité. Problème relevé par Value Added Resource : cette politique **ne décrit aucun moyen général de refuser** pour les vendeurs américains.",
    },
    { type: "h2", id: "reponse", text: "La réponse d'Etsy, et pourquoi elle n'a pas suffi" },
    {
      type: "p",
      text: "Le 16 novembre, James Ossman, vice-président des opérations clients, a publié une mise au point : « Nous n'utilisons pas votre contenu pour entraîner des modèles d'IA conçus pour copier votre travail original ou remplacer votre créativité. » Il liste trois usages : détecter les fraudes, aider les acheteurs à trouver les objets, et construire des outils pour les vendeurs, comme l'optimisation des annonces.",
    },
    {
      type: "p",
      text: "Sauf que cette promesse **n'est pas dans le contrat**, comme le note PC Gamer. Le texte autorise l'entraînement sans préciser à quoi il sert. Et la réponse ne dit pas si les partenaires autorisés peuvent utiliser ce contenu pour des modèles sans rapport avec Etsy. D'après PC Gamer, qui cite Cartoon Brew, plusieurs vendeurs ont fermé leur boutique et encouragent les autres à faire pareil.",
    },
    {
      type: "screenshot",
      src: `${IMG}-the-verge.webp`,
      alt: "Brève de The Verge du 20 novembre 2026 : Etsy says it will revise its new AI policy after backlash from sellers, avec la citation de James Ossman et le lien vers l'article du New York Times sur les vendeurs qui ferment leur boutique",
      caption: "La brève de The Verge du 20 novembre, capturée le 22 novembre 2026.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 690,
      height: 235,
    },
    {
      type: "p",
      text: "Le 20 novembre, Etsy a fini par dire au New York Times qu'il allait **« partager bientôt les conditions révisées »** avec les vendeurs. Au moment où j'écris, aucune nouvelle version n'est publiée. Le paradoxe est notable : quelques semaines plus tôt, Etsy était salué pour avoir interdit les patrons et recettes générés par IA, au nom de la confiance entre vendeurs et acheteurs.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : le contrat autorise Etsy et ses partenaires à entraîner l'IA sur photos, descriptions et avis avec une licence perpétuelle ; la promesse du 16 novembre de ne pas copier le travail des vendeurs n'est pas dans le contrat ; Etsy annonce le 20 novembre des conditions révisées non publiées au 22 novembre",
      caption: "Où en est Etsy au 22 novembre 2026. Schéma AI Studios.",
      source: VAR,
      capturedAt: CAPTURE,
      width: 1600,
      height: 717,
    },
    { type: "h2", id: "pour-toi", text: "Ce que tu peux faire avant le 16 décembre" },
    {
      type: "p",
      text: "Si tu vends sur Etsy, rien ne t'oblige à fermer ta boutique demain. Mais c'est le bon moment pour faire le point sur ce que tu mets en ligne, sur Etsy comme ailleurs.",
    },
    {
      type: "ul",
      items: [
        "**Lis la section 5 quand la version révisée sortira.** Compare-la à l'actuelle : ce qui compte, c'est ce qui est écrit, pas ce qui est promis dans un message de forum.",
        "**Mets en ligne ce qui vend, pas plus.** Une photo d'annonce en définition moyenne, avec un filigrane discret, suffit à vendre une impression. Garde tes fichiers haute définition hors de la plateforme.",
        "**Ne dépends pas d'un seul canal.** Une boutique sur ton propre site, une liste de diffusion, un second marché. C'est la même logique que pour [vendre des prompts et des templates IA](/blog/vendre-prompts-templates-ia) : la plateforme peut changer ses règles, ton audience doit rester à toi.",
        "**Regarde les conditions des autres plateformes.** Les banques d'images posent aussi des règles sur l'IA, et elles diffèrent beaucoup, comme je l'expliquais pour [le stock footage IA](/blog/stock-footage-ia-vendre).",
        "**Si tu es en France, renseigne-toi sur tes droits.** Le RGPD donne des droits sur les données personnelles. Value Added Resource note qu'ils ne couvrent pas forcément tout le contenu créatif : en cas de doute, écris au support d'Etsy et garde la réponse.",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Le nouveau texte.** Etsy n'a pas dit ce qu'il allait changer, ni quand.",
        "**Une option de refus.** Rien n'indique pour l'instant qu'un moyen de refuser l'entraînement sera ajouté.",
        "**Le contenu déjà en ligne.** Etsy n'a pas précisé comment il traite les contenus supprimés ou mis en ligne avant le 16 décembre.",
        "**Le nombre de boutiques fermées.** Aucun chiffre fiable n'a été publié dans les sources lues.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Etsy a raison de reculer. Une plateforme qui vit du travail fait main ne peut pas glisser une licence d'entraînement dans ses conditions et compter sur un message de forum pour rassurer. La leçon vaut pour toi aussi, que tu utilises l'IA ou non : **lis ce que tu signes**, et garde toujours un canal de vente qui t'appartient.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Crée avec l'IA sans perdre la main sur ton travail",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à ton workflow créatif en gardant le contrôle de tes créations.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 22 novembre 2026 à partir de la brève de The Verge du 20 novembre, de l'analyse de Value Added Resource (conditions du 26 octobre et réponse d'Etsy du 16 novembre) et de l'article de PC Gamer, lus le 22 novembre.",
        "La page des conditions d'Etsy et l'article du New York Times n'ont pas pu être lus directement : les citations viennent des médias cités.",
      ],
      teste: ["La lecture des articles de The Verge, Value Added Resource et PC Gamer"],
      nonTeste: ["La page des conditions d'Etsy", "L'article du New York Times"],
      sources: [
        { label: "The Verge, Etsy says it will revise its new AI policy (Stevie Bonifield), 20/11/2026", href: VERGE },
        { label: "Value Added Resource, Etsy expands AI training rights over seller content", href: VAR },
        { label: "PC Gamer, Etsy sellers are closing their stores (Andy Chalk)", href: PCG },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-22 -->
