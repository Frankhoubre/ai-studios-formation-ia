import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-24";
const IMG = "/images/articles/grok-imagine-plainte-deepfakes-oregon-virginie";
const VA =
  "https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform";
const OR =
  "https://www.doj.state.or.us/media-home/news-media-releases/ag-rayfield-takes-legal-action-against-grok-for-failing-to-block-child-exploitation/";
const VERGE = "https://www.theverge.com/ai-artificial-intelligence/1040255/x-grok-ai-deepfakes-oregon-virginia-lawsuit";

export const grokImaginePlainteDeepfakesOregonVirginie: Article = {
  title: "Grok Imagine attaqué en justice pour ses deepfakes",
  slug: "grok-imagine-plainte-deepfakes-oregon-virginie",
  description:
    "L'Oregon et la Virginie poursuivent X et xAI pour les images sexualisées faites avec Grok Imagine sans accord. Les plaintes et ce qu'elles changent pour toi.",
  excerpt:
    "Deux procureurs américains accusent X et xAI d'avoir laissé Grok Imagine fabriquer des images sexualisées de vraies personnes, enfants compris, tout en vantant sa sécurité. Ce que disent les plaintes, la réponse de X, et les règles à garder si tu génères des visages.",
  category: "actualites-ia",
  tags: ["Actualités IA", "grok", "deepfake", "consentement", "droit à l'image", "génération d'images"],
  date: "2026-11-24",
  updatedAt: "2026-11-24",
  news: true,
  publishedTime: "11:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/grok-imagine-plainte-deepfakes-oregon-virginie.webp",
  imageAlt:
    "Une graphiste en pull beige relit une autorisation de droit à l'image, stylo en main, à son bureau près d'une fenêtre, un ordinateur portable affichant des portraits et une pochette de consentements signés devant elle",
  keywords: ["grok imagine plainte", "grok deepfake", "xai poursuite oregon virginie", "deepfake consentement", "spicy mode grok"],
  relatedSlugs: ["deepfake-createur-droit", "phota-labs-photos-ia-ressemblance", "lora-entrainer-style-visage"],
  faq: [
    {
      question: "Qui poursuit Grok et pourquoi ?",
      answer:
        "Le procureur général de Virginie, Jay Jones, et celui de l'Oregon, Dan Rayfield, ont déposé le 23 novembre 2026 deux plaintes séparées contre SpaceX, maison mère de X et de xAI. Ils accusent l'entreprise d'avoir laissé Grok générer des images sexualisées de personnes sans leur consentement, enfants compris, tout en affirmant que la plateforme était sûre.",
    },
    {
      question: "Qu'est-ce que le spicy mode de Grok Imagine ?",
      answer:
        "C'est un mode lancé en août 2025 pour Grok Imagine, l'outil d'images et de vidéos de Grok. D'après The Verge, il produisait des contenus sexualisés, dont des deepfakes dénudés de célébrités. Les procureurs disent que ce mode a servi d'argument promotionnel.",
    },
    {
      question: "Que demandent les procureurs ?",
      answer:
        "Les deux plaintes réclament des dommages financiers, selon The Verge. Le procureur de Virginie parle aussi de nouvelles protections pour les consommateurs. Rien n'a encore été jugé.",
    },
    {
      question: "Que répond X ?",
      answer:
        "L'équipe sécurité de X dit que les personnes qui ont produit ces contenus ont violé délibérément ses conditions d'utilisation et contourné ses protections, que celles-ci ont été renforcées, et que des classificateurs vérifient chaque prompt et chaque image produite.",
    },
    {
      question: "Ces plaintes concernent-elles la France ?",
      answer:
        "Non, ce sont des actions de deux États américains. Mais en France, créer et diffuser un deepfake à caractère sexuel d'une personne sans son accord est déjà un délit, et le droit à l'image s'applique à toute vraie personne que tu représentes.",
    },
    {
      question: "Comment utiliser un générateur d'images sans risque avec de vraies personnes ?",
      answer:
        "Ne génère jamais une vraie personne sans son accord écrit, garde ces autorisations, choisis des outils qui bloquent les visages réels ou les contenus intimes, et signale l'usage de l'IA quand tu publies.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Lundi 23 novembre 2026, deux procureurs américains ont attaqué **SpaceX**, maison mère de X et de xAI, pour ce que **Grok Imagine** a permis de faire : fabriquer des images sexualisées de vraies personnes, enfants compris, sans leur accord. Le cœur de l'accusation est simple. L'entreprise aurait vendu un outil « sûr » en sachant qu'il ne l'était pas.",
    },
    {
      type: "p",
      text: "Si tu génères des images de personnes, même pour un clip ou une pub, cette affaire te concerne : elle dessine ce qu'on attend désormais d'un outil, et de celui qui s'en sert.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [le communiqué du procureur général de Virginie](" + VA + "), sur [celui de l'Oregon](" + OR + ") et sur [l'article de Jess Weatherbed pour The Verge](" + VERGE + "), publiés le 23 novembre et lus le 24 novembre 2026. Je n'ai pas lu les plaintes complètes. Ce sont des accusations : rien n'a été jugé.",
    },
    { type: "h2", id: "plaintes", text: "Ce que disent les deux plaintes" },
    {
      type: "screenshot",
      src: `${IMG}-virginie.webp`,
      alt: "Communiqué du procureur général de Virginie : les procureurs Jones et Rayfield poursuivent SpaceX, maison mère de X, xAI et Grok, pour la création et la promotion d'images d'exploitation d'enfants et d'images non consenties sur la plateforme",
      caption: "Le communiqué du procureur général de Virginie, capturé le 24 novembre 2026.",
      source: VA,
      capturedAt: CAPTURE,
      width: 1100,
      height: 220,
    },
    {
      type: "p",
      text: "**Jay Jones**, procureur général de Virginie, a déposé sa plainte devant le tribunal de Richmond. **Dan Rayfield**, son homologue de l'Oregon, a lancé une action séparée mais très proche devant le tribunal du comté de Multnomah. Les deux s'appuient sur les lois de protection des consommateurs : on reproche à l'entreprise d'avoir **trompé le public** sur la sécurité de son produit.",
    },
    {
      type: "screenshot",
      src: `${IMG}-plainte.webp`,
      alt: "Extrait du communiqué de Virginie : à partir d'une seule photo existante, Grok pouvait fabriquer, et a fabriqué, une image ou une vidéo réaliste d'une personne nue ou en situation sexuelle, sans qu'elle le sache ni y consente",
      caption: "Le passage clé du communiqué de Virginie, capturé le 24 novembre 2026.",
      source: VA,
      capturedAt: CAPTURE,
      width: 1130,
      height: 175,
    },
    {
      type: "p",
      text: "La phrase qui résume tout : « À partir d'une seule photo existante, Grok pouvait fabriquer, et a fabriqué, une image ou une vidéo réaliste d'une personne nue, partiellement nue ou en situation sexuelle, sans qu'elle le sache ni y consente. » Le communiqué cite une étude du **Center for Countering Digital Hate** : environ **3 millions d'images sexualisées** publiées sur X par Grok entre le 29 décembre 2025 et le 8 janvier 2026, dont environ **23 000** semblaient représenter des enfants.",
    },
    {
      type: "p",
      text: "Les procureurs visent aussi le marketing. Grok était présenté comme un compagnon IA avec un « côté rebelle », et le **« spicy mode »** de Grok Imagine permettait explicitement des images dénudées. Pour Dan Rayfield, l'absence de garde-fous « était considérée comme une fonctionnalité, pas un bug ». Jay Jones résume : « Les entreprises qui déploient des outils puissants n'ont pas le droit d'ignorer la sécurité des consommateurs et d'appeler ça de l'innovation. »",
    },
    { type: "h2", id: "contexte", text: "Comment on en est arrivé là" },
    {
      type: "screenshot",
      src: `${IMG}-the-verge.webp`,
      alt: "Article de The Verge du 23 novembre 2026 signé Jess Weatherbed : dans des plaintes séparées mais similaires, les procureurs de l'Oregon et de Virginie accusent SpaceX d'avoir ignoré les protections standard et vanté à tort la sécurité de X et de Grok",
      caption: "L'article de The Verge, capturé le 24 novembre 2026.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 720,
      height: 370,
    },
    {
      type: "p",
      text: "The Verge rappelle la chronologie. En **août 2025**, xAI lance le spicy mode de Grok Imagine, qui sort des deepfakes dénudés de célébrités. En **janvier 2026**, une nouvelle fonction permet à n'importe quel utilisateur de X de modifier instantanément une image publiée par quelqu'un d'autre, sans son accord. X se remplit alors de deepfakes sexualisés d'adultes et de mineurs.",
    },
    {
      type: "p",
      text: "xAI a ensuite restreint l'édition d'images : une partie derrière un abonnement payant, certaines demandes bloquées (poses sexuelles, maillots de bain, scènes explicites). Les tests de The Verge après ces changements ont montré qu'ils empêchaient mal la création de deepfakes sexualisés.",
    },
    {
      type: "p",
      text: "Côté X, l'équipe sécurité répond que les auteurs de ces contenus ont **violé délibérément ses conditions** et travaillé à contourner ses protections, que celles-ci ont été renforcées rapidement, et que des classificateurs filtrent **chaque prompt avant génération et chaque image après**.",
    },
    { type: "h2", id: "pour-toi", text: "Ce que ça change pour toi" },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : le reproche, des images sexualisées de vraies personnes créées sans consentement à partir d'une seule photo ; l'argument, une sécurité promise qui n'existait pas et un spicy mode utilisé comme argument marketing ; pour toi, pas de vraie personne sans accord écrit, des générateurs qui bloquent les visages réels et une trace des autorisations",
      caption: "Les plaintes en trois points, d'après le communiqué de Virginie et The Verge. Schéma AI Studios.",
      source: VA,
      capturedAt: CAPTURE,
      width: 1600,
      height: 654,
    },
    {
      type: "p",
      text: "Tu ne fabriques pas de deepfakes sexuels, évidemment. Mais l'affaire pose une question que tes clients vont te poser de plus en plus : **avec quel outil as-tu fait ça, et qui a donné son accord ?** Voici ce que je retiens pour ton travail.",
    },
    {
      type: "ul",
      items: [
        "**Pas de vraie personne sans accord écrit.** Un visage réel dans une image générée, c'est une autorisation de droit à l'image, comme pour une photo. J'ai fait le point sur ce que la loi française permet dans [mon guide sur le deepfake légal pour les créateurs](/blog/deepfake-createur-droit).",
        "**Teste les garde-fous avant de choisir un outil.** Un générateur qui accepte n'importe quelle photo de n'importe qui sans rien demander est un risque pour toi, pas seulement pour ses éditeurs. Pour un portrait réaliste, pars de tes propres photos ou de celles d'une personne qui a signé, comme le font les applis de retouche par ressemblance ([j'ai présenté Phota Labs](/blog/phota-labs-photos-ia-ressemblance)).",
        "**Garde une trace.** Autorisation signée, photos sources, prompts, outil utilisé : rangés dans le dossier du projet, ils te protègent si on te demande d'où vient une image.",
        "**Ne crois pas le marketing sur parole.** « Sûr » dans une page produit ne prouve rien : c'est justement ce que les procureurs reprochent à X et xAI.",
        "**Si tu entraînes un modèle sur un visage**, la règle est la même : la personne doit être d'accord. Je l'explique dans [mon guide pour entraîner une LoRA de style ou de visage](/blog/lora-entrainer-style-visage).",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Le montant réclamé.** Les deux États demandent des dommages financiers, sans chiffre précis dans les sources que j'ai lues.",
        "**L'issue.** Ce sont des plaintes déposées, pas des décisions. X conteste et rejette la faute sur les utilisateurs.",
        "**Les suites ailleurs.** D'autres procédures visent déjà Grok aux États-Unis, d'après The Verge. On ne sait pas si d'autres États ou l'Europe suivront.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Ce dossier est grave, et il dépasse Grok. Pendant deux ans, on a jugé les générateurs d'images sur la qualité du rendu. Ces plaintes ajoutent un autre critère : **ce que l'outil refuse de faire**. Pour toi, c'est une bonne nouvelle. Les outils qui demandent un consentement ou bloquent les visages réels paraissaient plus contraignants. Ils deviennent ceux avec lesquels tu peux travailler sans crainte pour un client.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Génère des visages sans te mettre en danger",
      text: "Ma formation IA gratuite te montre comment créer des personnages et des portraits avec l'IA, proprement, pour tes projets et tes clients.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 24 novembre 2026 à partir du communiqué du procureur général de Virginie, du communiqué du procureur général de l'Oregon et de l'article de Jess Weatherbed publié par The Verge, tous datés du 23 novembre 2026 et lus le 24 novembre.",
        "Les plaintes complètes n'ont pas été lues. Les chiffres sur le nombre d'images viennent de l'étude du CCDH citée par le communiqué de Virginie. Grok Imagine n'a pas été testé pour cet article.",
      ],
      teste: ["La lecture des communiqués et de l'article de The Verge"],
      nonTeste: ["Grok Imagine", "Les plaintes complètes déposées devant les tribunaux"],
      sources: [
        { label: "Procureur général de Virginie, communiqué du 23/11/2026", href: VA },
        { label: "Procureur général de l'Oregon, communiqué du 23/11/2026", href: OR },
        { label: "The Verge, Oregon and Virginia sue SpaceX over Grok's porn deepfakes (Jess Weatherbed), 23/11/2026", href: VERGE },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-24 -->
