import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-11";
const IMG = "/images/articles/openai-upwork-freelances-ia-video";
const OPENAI = "https://openai.com/index/ai-effect-on-freelance-work";
const UPWORK = "https://www.upwork.com/research/research-future-workforce-index-2026";

export const openaiUpworkFreelancesIaVideo: Article = {
  title: "Freelance et IA : les clients veulent tout en un seul brief",
  slug: "openai-upwork-freelances-ia-video",
  description:
    "Selon OpenAI et Upwork, les clients mélangent vidéo IA, montage et motion design dans un même brief, avec de plus gros budgets. Ce que ça change pour toi.",
  excerpt:
    "Nouvelle étude d'OpenAI et Upwork : les projets IA mélangent plus de tâches, durent plus longtemps et ont de plus gros budgets au forfait. Pour un créateur freelance, le message est clair : on n'achète plus une compétence, on achète une vidéo finie.",
  category: "actualites-ia",
  tags: ["Actualités IA", "freelance", "upwork", "openai", "vidéo ia", "business créatif"],
  date: "2026-11-11",
  updatedAt: "2026-11-11",
  news: true,
  publishedTime: "10:00",
  readingTime: 6,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/openai-upwork-freelances-ia-video.webp",
  imageAlt:
    "Le bureau d'un monteur freelance dans un appartement parisien la nuit, deux écrans avec une timeline de montage et des courbes d'animation, un carnet ouvert avec un brief client écrit à la main, un casque et un petit appareil photo sur trépied",
  keywords: ["freelance ia", "étude openai upwork", "freelance vidéo ia", "brief client vidéo ia", "tarif freelance ia", "upwork ia 2026"],
  relatedSlugs: ["devenir-freelance-creation-ia", "fixer-prix-creation-ia-grille", "workflow-client-brief-livraison-ia"],
  faq: [
    {
      question: "Que dit l'étude d'OpenAI et Upwork sur les freelances ?",
      answer:
        "Publiée le 10 novembre 2026 dans la série Work at the Frontier, elle compare l'usage de ChatGPT et les annonces publiées sur Upwork. Elle montre que la demande se déplace, que les projets liés à l'IA mélangent plus de tâches différentes et qu'ils ont des budgets au forfait plus élevés, avec plus d'heures de travail.",
    },
    {
      question: "Les freelances IA gagnent-ils plus ?",
      answer:
        "Pas forcément à l'heure. D'après OpenAI, le taux horaire affiché est comparable entre les projets liés à l'IA et les autres. Ce sont les budgets au forfait et le nombre d'heures qui sont plus élevés, ce qui suggère surtout des projets plus larges.",
    },
    {
      question: "Quelles compétences les clients combinent-ils ?",
      answer:
        "L'étude donne l'exemple d'annonces qui demandent à la fois de la vidéo générée par IA, du montage et du motion design. Le freelance doit réunir les trois pour livrer une vidéo finie. Entre début 2023 et fin 2025, la diversité des tâches dans les annonces liées à l'IA a augmenté de 45 %.",
    },
    {
      question: "L'IA remplace-t-elle les freelances ?",
      answer:
        "L'étude ne raconte pas une simple substitution. Sur 63 catégories de travail, 43 suivent le même schéma : les tâches très courantes dans ChatGPT perdent des parts sur Upwork. Mais les 20 autres font l'inverse, et la vidéo et l'animation pèsent plus lourd dans les demandes faites aux freelances que dans l'usage de ChatGPT.",
    },
    {
      question: "Ces chiffres valent-ils pour la France ?",
      answer:
        "Pas directement. Les données viennent de la plateforme Upwork et de l'usage de ChatGPT, et les chiffres de contexte cités par OpenAI, comme les 38 % de travailleurs qualifiés en freelance, concernent les États-Unis. La tendance des briefs qui mélangent plusieurs compétences se voit aussi en France, mais l'étude ne la mesure pas.",
    },
    {
      question: "Comment adapter mon offre de freelance créatif ?",
      answer:
        "Vends un résultat plutôt qu'une compétence : une vidéo de 30 secondes finie, avec génération, montage, animation du texte et son. Construis une offre au forfait avec un périmètre clair, et chiffre le temps de reprise, puisque les projets IA demandent plus d'heures que prévu.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Si tu vends tes services de créateur IA, il y a de bonnes chances que ton prochain client ne te demande pas « une image » ou « un montage ». Il te demandera **une vidéo finie**, et il s'attendra à ce que tu fasses tout. C'est ce que montre une étude publiée le **10 novembre 2026** par [OpenAI](" + OPENAI + ") avec la plateforme de freelances Upwork.",
    },
    {
      type: "p",
      text: "Le résultat le plus parlant tient en une phrase : certains clients demandent dans une seule annonce de la **vidéo générée par IA, du montage et du motion design**. Le freelance réunit les trois pour livrer. Voici ce que dit l'étude, ses limites, et comment je reconstruirais une offre avec ça.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois blocs : un brief type qui demande vidéo générée par IA, montage et motion design dans une seule annonce ; une diversité des tâches en hausse de 45 % dans les projets IA de début 2023 à fin 2025 ; et des budgets au forfait plus élevés avec un taux horaire affiché comparable",
      caption: "Les trois enseignements de l'étude OpenAI et Upwork pour les freelances créatifs. Schéma AI Studios.",
      source: OPENAI,
      capturedAt: CAPTURE,
      width: 1600,
      height: 560,
    },
    { type: "h2", id: "etude", text: "Ce que l'étude a mesuré" },
    {
      type: "p",
      text: "L'équipe de recherche économique d'OpenAI a comparé deux choses : ce que les gens font avec ChatGPT, et ce que les clients demandent aux freelances dans les annonces publiées sur Upwork. L'idée : les missions freelance changent vite, une annonce à la fois, donc elles montrent l'effet de l'IA avant les statistiques de l'emploi.",
    },
    {
      type: "ul",
      items: [
        "**La vidéo et l'animation** pèsent plus lourd dans les demandes faites aux freelances que dans l'usage de ChatGPT, où l'écriture domine.",
        "Sur **63 catégories de travail**, **43** suivent le même schéma : ce qui est très courant dans ChatGPT perd des parts sur Upwork. Les **20** autres font l'inverse.",
        "Entre début 2023 et fin 2025, la diversité des tâches dans les annonces liées à l'IA a augmenté de **45 %**, l'équivalent d'environ 15 tâches courantes passées à environ 21.",
        "Les projets liés à l'IA ont un **taux horaire affiché comparable**, mais des **budgets au forfait plus élevés** et **plus d'heures** de travail.",
      ],
    },
    {
      type: "p",
      text: "OpenAI rappelle aussi le poids du freelance aux États-Unis, d'après le [Future Workforce Index 2026 d'Upwork](" + UPWORK + ") : **38 %** des travailleurs qualifiés du savoir y sont freelances.",
    },
    { type: "h2", id: "brief", text: "Le brief qui mélange tout" },
    {
      type: "p",
      text: "C'est la partie la plus utile pour toi. D'après l'étude, les annonces liées à l'IA listent à peu près autant de tâches que les autres, mais elles **combinent plus souvent des tâches qui n'allaient pas ensemble avant**. L'exemple choisi par OpenAI est un brief vidéo : génération IA, montage, motion design.",
    },
    {
      type: "p",
      text: "Concrètement, le client ne veut plus coordonner trois prestataires. Il veut une personne qui sort les plans avec un générateur, les monte, anime le texte et livre un fichier prêt à publier. Si tu ne sais faire qu'une des trois étapes, tu réponds à moins d'annonces.",
    },
    { type: "h2", id: "budget", text: "Plus de budget, pas plus par heure" },
    {
      type: "p",
      text: "Attention à la lecture rapide. L'étude ne dit pas que les freelances IA sont mieux payés à l'heure : le taux affiché est comparable. Elle dit que les **projets** sont plus gros, avec plus d'heures. OpenAI en conclut lui-même que les budgets plus élevés reflètent sans doute un périmètre plus large.",
    },
    {
      type: "p",
      text: "Traduction : si tu factures à l'heure, tu ne gagneras pas plus. Si tu vends un résultat au forfait, avec un périmètre clair, tu captes ce budget plus large. C'est exactement la logique de ma [grille pour fixer ses prix en création IA](/blog/fixer-prix-creation-ia-grille).",
    },
    { type: "h2", id: "limites", text: "Les limites de l'étude" },
    {
      type: "ul",
      items: [
        "**Une seule plateforme.** Les annonces viennent d'Upwork. Elles ne représentent pas tout le marché, encore moins le marché français.",
        "**Des annonces, pas des contrats.** Un budget affiché n'est pas un budget payé.",
        "**Pas de substitution simple.** OpenAI insiste : l'usage de ChatGPT n'explique pas à lui seul l'évolution de la demande.",
        "**Un auteur intéressé.** OpenAI vend l'IA dont il mesure l'effet. Les chiffres restent utiles, mais lis-les avec ça en tête.",
      ],
    },
    { type: "h2", id: "offre", text: "Comment je reconstruirais une offre cette semaine" },
    {
      type: "ul",
      items: [
        "**Vends un livrable, pas une compétence.** « Une vidéo produit de 30 secondes, prête pour Instagram et TikTok » plutôt que « génération de vidéo IA ».",
        "**Couvre toute la chaîne.** Génération, montage, texte animé, son. Si une étape te manque, c'est elle qu'il faut apprendre en premier.",
        "**Passe au forfait.** Un prix par livrable, avec deux tours de retouches inclus. Le temps de reprise est ce qui fait exploser les heures.",
        "**Cadre le brief dès le départ.** Mon [workflow du brief à la livraison](/blog/workflow-client-brief-livraison-ia) t'évite de découvrir le vrai périmètre au troisième aller-retour.",
        "**Montre une vidéo finie dans ton portfolio**, pas une galerie d'images. Le client achète ce qu'il voit.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Cette étude confirme ce que je vois avec les créateurs que j'accompagne : **le marché paie pour l'assemblage**. Générer une belle image ne suffit plus, tout le monde sait le faire. Ce qui a de la valeur, c'est de transformer une idée en une vidéo qui tient du premier au dernier plan. Si tu débutes, mon guide pour [devenir freelance en création IA](/blog/devenir-freelance-creation-ia) part de là.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à livrer une vidéo IA finie",
      text: "Ma formation IA gratuite te montre la chaîne complète, de la génération des plans au montage, pour répondre aux briefs qui demandent tout.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 11 novembre 2026 à partir de la publication d'OpenAI du 10 novembre 2026, « Work at the Frontier: AI's effect on freelance work », réalisée avec Upwork. Le chiffre de 38 % vient du Future Workforce Index 2026 d'Upwork, cité par OpenAI.",
        "Je n'ai pas lu le rapport complet, seulement la page de synthèse d'OpenAI. La page d'OpenAI a bloqué les captures automatiques le 11 novembre : le schéma reprend ses chiffres. Les budgets ne sont pas chiffrés dans la synthèse.",
      ],
      teste: ["La lecture de la synthèse publiée par OpenAI le 10 novembre 2026"],
      nonTeste: ["Le rapport complet", "Les données brutes d'Upwork"],
      sources: [
        { label: "OpenAI, Work at the Frontier: AI's effect on freelance work, 10/11/2026", href: OPENAI },
        { label: "Upwork, The Future Workforce Index 2026", href: UPWORK },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-11 -->
