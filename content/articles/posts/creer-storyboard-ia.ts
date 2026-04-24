import type { Article } from "@/lib/types/article";

export const creerStoryboardIa: Article = {
  title:
    "Créer un storyboard avec l’IA : la méthode simple pour ne plus générer au hasard",
  slug: "creer-storyboard-ia",
  description:
    "Transformez une idée en séquence visuelle avant la vidéo : beats, cadrages, poses, cohérence, et critères de validation. Une méthode terrain pour l’IA créative.",
  excerpt:
    "Si vous générez directement la vidéo, vous payez cher le hasard. Voici une méthode de storyboard IA qui force des décisions avant le mouvement.",
  category: "workflow-creatif",
  tags: ["storyboard IA", "workflow", "préproduction", "vidéo IA"],
  date: "2026-04-08",
  updatedAt: "2026-04-18",
  readingTime: 17,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/creer-storyboard-ia.png",
  imageAlt:
    "Illustration abstraite storyboard IA, formes cinématiques et glow violet",
  keywords: [
    "storyboard IA",
    "préproduction IA",
    "workflow créatif",
    "découpage vidéo",
  ],
  relatedSlugs: [
    "workflow-ia-creatif",
    "formation-ia-video",
    "videos-ia-jolies-mais-vides",
  ],
  faq: [
    {
      question: "Un storyboard IA doit-il être beau ?",
      answer:
        "Non. Il doit être lisible. La beauté arrive après, quand la séquence tient. Un storyboard laid mais clair bat un storyboard magnifique mais ambigu.",
    },
    {
      question: "Combien de cases pour une vidéo courte ?",
      answer:
        "Assez pour couvrir chaque bascule narrative. Souvent six à douze cases pour une minute, selon le rythme. Moins si votre intention est minimaliste, plus si vous jouez sur des micro réactions.",
    },
    {
      question: "Je dois dessiner ou je peux tout générer ?",
      answer:
        "Vous pouvez tout générer si vous imposez des contraintes : même personnage, même lumière, mêmes vêtements, mêmes repères spatiaux. Sinon vous storyboardiez une collection, pas une suite.",
    },
    {
      question: "Comment éviter les incohérences entre cases ?",
      answer:
        "Verrouillez une fiche personnage et une bible lumière. Changez un seul paramètre entre deux cases si vous testez. Si vous changez six paramètres, vous ne saurez pas ce qui casse.",
    },
    {
      question: "Le storyboard remplace-t-il le tournage traditionnel ?",
      answer:
        "Il remplace le hasard du premier jet. Il ne remplace pas le jugement. Vous validez une intention, pas une vérité absolue.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Vous avez une idée forte, vous ouvrez un outil, vous générez trois plans magnifiques, puis vous réalisez qu’ils n’habitent pas le même film. Ce n’est pas la faute du modèle. C’est le prix du saut direct vers la matière sans passer par la décision. Le storyboard, même fait avec l’IA, est un outil de pensée. Il vous force à répondre à des questions ennuyeuses avant de payer en temps de génération et en frustration. Voici ce que je ferais à la place : une méthode simple, répétable, orientée séquence plutôt que planche d’art.",
    },
    {
      type: "h2",
      id: "storyboard-pour-decider",
      text: "À quoi sert un storyboard quand l’IA « peut tout refaire »",
    },
    {
      type: "p",
      text: "Refaire n’est pas gratuit. Refaire coûte de l’attention, du tempo, parfois de l’argent, et surtout de la cohérence. Chaque regénération risque de casser ce que vous aviez validé sur le plan précédent. Le storyboard existe pour figer des choix assez longtemps pour construire une continuité. L’IA ne supprime pas ce besoin. Elle l’amplifie, parce qu’elle rend la tentation du saut facile. Sans storyboard, vous confondez exploration et production. Avec storyboard, vous séparez les deux modes.",
    },
    {
      type: "h2",
      id: "methode-en-sept-etapes",
      text: "La méthode en sept étapes (terrain, pas théorie)",
    },
    {
      type: "ol",
      items: [
        "Écrire le beat : une ligne par case, ce qui change dans l’histoire.",
        "Décider l’échelle : plan large, moyen, serré, et pourquoi.",
        "Placer la caméra : hauteur, distance, mouvement motivé ou fixe.",
        "Définir l’action : ce qui est visible, pas ce que le personnage pense.",
        "Verrouiller la lumière : source, dureté, palette, même famille pour toute la séquence.",
        "Générer une première passe moche mais stable : cohérence avant beauté.",
        "Valider la lecture en silence : sans musique, sans texte, sans excuse.",
      ],
    },
    {
      type: "h2",
      id: "fiche-personnage",
      text: "Fiche personnage minimale : ce qu’il faut avant les poses",
    },
    {
      type: "p",
      text: "Sans fiche, votre storyboard devient une mode défilé de visages. La fiche minimale comprend silhouette, cheveux, vêtements signature, âge apparent, traits stables, et deux photos de référence cohérentes. Si vous travaillez un personnage récurrent, vous recoupez avec [personnage cohérent sur plusieurs images IA](/blog/personnage-coherent-ia). L’objectif n’est pas le réalisme absolu. L’objectif est la reconnaissance : le spectateur doit croire que c’est la même entité d’un plan à l’autre, même si l’émotion change.",
    },
    {
      type: "h2",
      id: "cadrage-action",
      text: "Cadrage et ligne d’action : lire la scène sans dialogue",
    },
    {
      type: "p",
      text: "Une case doit répondre à une question simple : qu’est-ce que le spectateur apprend ici qu’il ne savait pas à la case précédente ? Si la réponse est « rien, mais c’est beau », vous supprimez la case ou vous la fusionnez. La ligne d’action est la trajectoire du regard et du mouvement dans le cadre. Si elle saute sans motivation, le cerveau se fatigue. L’IA peut générer des poses, mais vous devez décider de la motivation. C’est le lien direct avec ce que j’écris sur les [vidéos IA jolies mais vides](/blog/videos-ia-jolies-mais-vides) : sans progression, vous collectionnez.",
    },
    {
      type: "table",
      caption: "Étape du storyboard vs objectif de décision",
      headers: ["Étape", "Objectif", "Critère de validation"],
      rows: [
        [
          "Beat écrit",
          "Savoir ce qui bascule",
          "Une phrase claire, pas un paragraphe",
        ],
        [
          "Échelle choisie",
          "Contrôler la distance émotionnelle",
          "Le cadre colle au beat, pas à l’ego",
        ],
        [
          "Lumière verrouillée",
          "Cohérence de monde",
          "Même famille de sources sur trois cases",
        ],
        [
          "Première passe image",
          "Stabilité",
          "Même personnage reconnaissable",
        ],
        [
          "Lecture muette",
          "Clarté",
          "Un enfant comprend l’action sans explication",
        ],
      ],
    },
    {
      type: "h2",
      id: "exemple-sequence",
      text: "Exemple : trois cases qui portent une rupture",
    },
    {
      type: "p",
      text: "Case une : plan moyen, deux personnages à table, espace entre eux visible, lumière froide. Case deux : serré sur un regard qui évite l’autre, mains au premier plan, tension. Case trois : plan large, un personnage se lève, l’autre reste, la table devient frontière. Vous n’avez pas besoin de dialogue pour comprendre que quelque chose casse. Si votre IA ne tient pas la continuité, vous réduisez les props, vous simplifiez le décor, vous verrouillez les vêtements. Vous ne « boostez » pas le prompt avec des adjectifs. Vous réduisez les degrés de liberté.",
    },
    {
      type: "h2",
      id: "outils",
      text: "Outils et chaîne : rester léger, rester traçable",
    },
    {
      type: "p",
      text: "Gardez une arborescence : brief, script, storyboard, rendus, versions. Nommez les fichiers avec des numéros de case. Si vous ne pouvez pas retrouver la case trois en trente secondes, votre futur vous déteste déjà. Pour l’outillage vidéo global, restez sur des familles d’outils plutôt que sur des modes : [meilleurs outils IA vidéo en 2026](/blog/meilleurs-outils-ia-video). Le storyboard n’est pas un logiciel. C’est une discipline.",
    },
    {
      type: "h2",
      id: "storyboard-scientifique",
      text: "Pourquoi séquencer aide la mémoire du spectateur",
    },
    {
      type: "p",
      text: "La narration visuelle fonctionne parce qu’elle s’appuie sur des routines de perception : mise en série d’événements, anticipation, surprise contrôlée. Les synthèses grand public sur la narration expliquent souvent l’idée de structure comme une organisation de blocs causaux : voir [narrative](https://en.wikipedia.org/wiki/Narrative). Vous n’avez pas besoin d’être doctorant. Vous avez besoin d’un enchaînement qui ne ment pas. Le storyboard est votre essai répété avant diffusion.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Conclusion : le storyboard est un frein utile",
    },
    {
      type: "p",
      text: "L’IA rend la génération rapide. Le storyboard rend la génération moins stupide. Si vous démarrez un parcours plus large, [formation IA vidéo : par où commencer](/blog/formation-ia-video) replace le storyboard dans la chaîne complète. Pour aller plus loin, j’ai préparé une formation gratuite qui montre comment structurer un vrai workflow IA pour créer des images et vidéos plus cinématiques : [formation gratuite AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video). Prochaine fois que vous avez envie de générer direct, faites une planche de six cases moche. Si la séquence tient, vous gagnerez du temps plus tard. Si elle ne tient pas, vous venez d’économiser trois heures de reroll.",
    },
  ],
};
