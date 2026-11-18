import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-18";
const IMG = "/images/articles/tone-voix-ia-persuasion-jordan-belfort";
const TC =
  "https://techcrunch.com/2026/11/16/jordan-belforts-new-ai-voice-startup-tone-wants-to-sell-like-the-wolf-of-wall-street/";
const TONE = "https://hellotone.com/";

export const toneVoixIaPersuasionJordanBelfort: Article = {
  title: "Tone : la voix IA de Jordan Belfort veut persuader",
  slug: "tone-voix-ia-persuasion-jordan-belfort",
  description:
    "Jordan Belfort, le « loup de Wall Street », lance Tone, une voix IA qui règle le ton mot par mot pour convaincre. Ce que ça vaut pour ta voix off et tes pubs.",
  excerpt:
    "Tone, la startup de voix IA de Jordan Belfort, vend une voix qui module son intonation pour persuader : agents qui appellent, narration, clones. Ce qu'on sait, ce que ça change pour une voix off de pub, et pourquoi rester prudent.",
  category: "actualites-ia",
  tags: ["Actualités IA", "tone", "voix ia", "voix off", "clonage de voix", "publicité"],
  date: "2026-11-18",
  updatedAt: "2026-11-18",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/tone-voix-ia-persuasion-jordan-belfort.webp",
  imageAlt:
    "Une narratrice aux cheveux gris en gilet moutarde parle devant un micro avec filtre anti-pop dans une petite cabine en mousse acoustique, un script annoté devant elle et deux formes d'onde sur l'écran d'un ordinateur portable",
  keywords: ["tone voix ia", "jordan belfort ia", "voix ia persuasive", "voix off ia publicité", "clonage de voix consentement"],
  relatedSlugs: ["voix-off-ia-guide", "elevenlabs-voiceover-pub", "meta-muse-voix-avatars-temps-reel"],
  faq: [
    {
      question: "Qu'est-ce que Tone ?",
      answer:
        "Une startup de voix IA cofondée par Jordan Belfort, présentée par TechCrunch le 16 novembre 2026. Elle vend des voix de synthèse qui ajustent l'intonation, le volume, la vitesse et le rythme de chaque mot, des agents vocaux pour la vente et le service client, et une plateforme de narration pour créateurs et auteurs.",
    },
    {
      question: "Qui est derrière Tone ?",
      answer:
        "Jordan Belfort, l'ancien courtier dont l'histoire a inspiré le film Le Loup de Wall Street, et l'investisseur Shervin Pishevar, cofondateur. Belfort a plaidé coupable de fraude boursière en 1999. Selon TechCrunch, Tone a levé environ 10 millions de dollars.",
    },
    {
      question: "Tone parle-t-il français ?",
      answer:
        "Pas pour l'instant d'après le site : le sélecteur de langue de la démo propose l'anglais et l'espagnol. Les voix présentées ont des accents américains (Midwest, Sud, Californie, Nord-Est).",
    },
    {
      question: "Peut-on cloner sa voix avec Tone ?",
      answer:
        "Oui, selon TechCrunch, mais le clonage exige une empreinte vocale enregistrée en direct et un consentement signé. Le site propose un petit jeu pour comparer des clones à la voix réelle.",
    },
    {
      question: "Combien coûte Tone ?",
      answer:
        "Aucun prix n'est publié. Le site propose de demander un accès anticipé ou de parler à l'équipe commerciale. TechCrunch ne donne pas non plus de tarif pour la narration.",
    },
    {
      question: "Une voix IA persuasive pour une pub, c'est légal ?",
      answer:
        "Une voix de synthèse n'est pas interdite en soi dans une pub. Ce qui compte, c'est que le message reste honnête et que tu aies les droits sur la voix utilisée. Pour les appels, c'est plus encadré : aux États-Unis, la FCC a jugé en 2024 que les voix IA tombent sous la loi sur le démarchage téléphonique.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as déjà entendu une voix off IA qui lit tout sur le même ton, comme un GPS qui annonce une promo. C'est le problème que **Tone** dit régler. Et la personne qui le vend ne passe pas inaperçue : **Jordan Belfort**, l'ancien courtier dont l'histoire a donné le film *Le Loup de Wall Street*.",
    },
    {
      type: "p",
      text: "[TechCrunch](" + TC + ") a présenté la startup le 16 novembre 2026, sous la plume de Connie Loizos. J'ai lu l'article et [le site de Tone](" + TONE + ") le 18 novembre. Je n'ai pas testé l'outil, qui n'est ouvert qu'en accès anticipé.",
    },
    { type: "h2", id: "annonce", text: "Ce que vend Tone" },
    {
      type: "screenshot",
      src: `${IMG}-techcrunch.webp`,
      alt: "Article de TechCrunch du 16 novembre 2026 par Connie Loizos : Jordan Belfort's new AI voice startup, Tone, wants to sell like the Wolf of Wall Street, avec un portrait de Jordan Belfort assis à un bureau",
      caption: "L'article de TechCrunch du 16 novembre.",
      source: TC,
      capturedAt: CAPTURE,
      width: 1280,
      height: 660,
    },
    {
      type: "p",
      text: "L'idée de départ vient du métier de Belfort : en vente, **le ton compte autant que les mots**. Tone travaille donc ce qu'il appelle la « tonalité », une quinzaine de manières de dire une phrase selon TechCrunch. Trois produits en sortent :",
    },
    {
      type: "ul",
      items: [
        "**Des agents vocaux** qui appellent ou répondent pour une entreprise, avec environ 600 millisecondes de latence. TechCrunch cite des clients dans le juridique, l'assurance santé, les sondages et l'automobile.",
        "**Une plateforme de narration** en libre-service pour créateurs et auteurs.",
        "**Des clones de voix**, avec une empreinte vocale enregistrée en direct et un consentement signé.",
      ],
    },
    {
      type: "p",
      text: "Côté chiffres, Tone a levé environ **10 millions de dollars**, et Belfort estime le chiffre d'affaires à « probablement un million, 700 000 peut-être ». L'investisseur Shervin Pishevar est cofondateur.",
    },
    {
      type: "screenshot",
      src: `${IMG}-tone.webp`,
      alt: "Page d'accueil de Tone : titre Pushing the frontier of AI voice, sous-titre Bringing elite communication to business owners, content creators, and anyone with something worth saying, boutons Get early access et Talk to Tone, et des formes d'onde colorées en carrousel",
      caption: "La page d'accueil de Tone, le 18 novembre 2026.",
      source: TONE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 860,
    },
    { type: "h2", id: "brevet", text: "Une voix réglée pour atteindre un objectif" },
    {
      type: "p",
      text: "Le site le dit sans détour. La technologie, protégée par un brevet américain, est la « modulation continue de la tonalité, du volume, de la vitesse et du rythme » pour garder l'auditeur accroché tout en menant la conversation **vers des objectifs fixés à l'avance**. La démo d'appel de vente affiche même ces objectifs : prendre le contrôle de la vente, créer du lien, recueillir des informations.",
    },
    {
      type: "screenshot",
      src: `${IMG}-brevet.webp`,
      alt: "Section The technology behind Tone : Harnessing the power of goal-oriented communication, brevet U.S. Patent No. 12,437,153 B1, puis trois scénarios de démo dont Opening an outbound sales call avec les objectifs Control the sale, Build rapport et Gather intelligence",
      caption: "La section technologie du site de Tone.",
      source: TONE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 440,
    },
    {
      type: "p",
      text: "C'est franc, et c'est justement ce qui doit te faire lever un sourcil. TechCrunch rappelle que Belfort a plaidé coupable de fraude boursière en 1999, et que l'autorité américaine des télécoms, la FCC, a jugé en 2024 que les voix IA tombent sous la loi américaine sur le démarchage téléphonique. Belfort répond que Tone n'appelle que des gens qui ont donné leur accord. Il admet aussi que sa voix IA n'est « pas encore aussi bonne qu'un très bon vendeur ».",
    },
    { type: "h2", id: "pour-toi", text: "Ce que ça change pour ta voix off" },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : ce que vend Tone, le ton réglé mot par mot pour atteindre des objectifs ; où ça peut servir, voix off, narration et pub ; où ça dérape, les appels de vente et les clones de voix réelles",
      caption: "Une voix IA qui persuade, en trois cases. Schéma AI Studios.",
      source: TONE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 654,
    },
    {
      type: "p",
      text: "Laisse de côté les appels automatiques, ce n'est pas ton métier. La partie qui t'intéresse, c'est la narration. Une voix qui monte sur l'argument, ralentit sur le prix et respire avant l'appel à l'action, c'est ce qui sépare une pub qui sonne faux d'une pub qu'on écoute. Aujourd'hui, tu obtiens ça en dirigeant ta voix à la main, comme je l'explique dans mon [guide de la voix off IA](/blog/voix-off-ia-guide).",
    },
    {
      type: "ul",
      items: [
        "**Pour une pub courte**, l'approche de Tone va dans le bon sens. Mais tant qu'elle n'existe pas en français, tu restes sur les outils que tu connais : ma méthode pour [une voix off de pub avec ElevenLabs](/blog/elevenlabs-voiceover-pub) te donne déjà les réglages pour un rendu naturel.",
        "**Pour une narration longue** (livre audio, documentaire), le ton varié compte encore plus : vingt minutes sur une seule intonation, personne ne tient.",
        "**Pour un clone de voix**, la règle de Tone est la bonne et vaut partout : enregistrement de la personne elle-même et accord écrit. Ne clone jamais la voix d'un client ou d'un comédien sans ce papier.",
      ],
    },
    {
      type: "p",
      text: "Et garde une limite en tête. Une voix construite pour **convaincre**, mise sur un texte qui exagère, ça donne une pub plus efficace pour tromper. Le ton sert ton message, il ne le rend pas honnête. Si tu montes des [publicités avec l'IA](/blog/creer-publicite-ia), c'est toi qui gardes cette responsabilité.",
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Le prix.** Aucun tarif public, ni pour la narration ni pour les agents.",
        "**Le français.** La démo propose l'anglais et l'espagnol, et rien n'annonce d'autres langues.",
        "**La qualité réelle.** TechCrunch souligne que le marché des voix IA est saturé et que la technologie ne peut pas être vérifiée de façon indépendante.",
        "**L'ouverture.** Le site parle d'accès anticipé, sans date d'ouverture à tous.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "L'idée de fond est juste : une voix IA, ce n'est pas un timbre, c'est une façon de dire. Tous les outils vont devoir y venir. Mais je ne vais pas te pousser vers une voix vendue comme une machine à atteindre des « objectifs » par celui qui en a fait un film. Retiens la leçon, pas forcément l'outil : écris ton texte, puis dirige ton ton phrase par phrase, quel que soit le logiciel.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à diriger une voix off IA",
      text: "Ma formation IA gratuite te montre comment écrire, diriger et mixer une voix off qui sonne juste pour tes pubs et tes vidéos.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 18 novembre 2026 à partir de l'article de TechCrunch du 16 novembre (Connie Loizos) et du site de Tone, lus le 18 novembre.",
        "Les chiffres (levée, chiffre d'affaires, latence, nombre de tonalités) viennent de TechCrunch et n'ont pas été vérifiés ailleurs. Les langues proposées sont celles du sélecteur de la démo sur le site.",
      ],
      teste: ["La lecture de l'article de TechCrunch et du site de Tone"],
      nonTeste: ["Les voix de Tone", "Les agents vocaux", "Le clonage de voix"],
      sources: [
        { label: "TechCrunch, Jordan Belfort's new AI voice startup, Tone, wants to sell like the 'Wolf of Wall Street', 16/11/2026", href: TC },
        { label: "Tone, site officiel", href: TONE },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-18 -->
