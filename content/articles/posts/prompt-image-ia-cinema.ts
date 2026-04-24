import type { Article } from "@/lib/types/article";

export const promptImageIaCinema: Article = {
  title: "Comment écrire un prompt d’image IA qui donne un vrai rendu cinéma",
  slug: "prompt-image-ia-cinema",
  description:
    "Une méthode de prompt image IA orientée cinéma : scène, sujet, intention, lumière, focale, texture, contraintes. Sans promesse miracle, avec des critères de sélection.",
  excerpt:
    "Un prompt long n’est pas un prompt intelligent. Voici une structure qui évite le rendu « joli mais générique » et pousse l’image vers une lecture cinématographique.",
  category: "prompting",
  tags: ["prompt image IA", "cinéma", "lumière", "cadrage", "texture"],
  date: "2026-04-05",
  updatedAt: "2026-04-18",
  readingTime: 17,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompt-image-ia-cinema.png",
  imageAlt:
    "Illustration abstraite premium pour le guide prompt image IA cinéma",
  keywords: [
    "prompt image IA",
    "prompt cinématographique",
    "IA image réaliste",
    "lumière IA",
  ],
  relatedSlugs: [
    "ia-image-realiste",
    "personnage-coherent-ia",
    "workflow-ia-creatif",
  ],
  faq: [
    {
      question: "Faut-il écrire un prompt en anglais ?",
      answer:
        "Souvent oui, parce que les jeux de données et les docs techniques sont plus denses en anglais. Mais une bonne structure en français peut suffire si votre outil le gère bien. Ce qui prime, c’est la précision fonctionnelle : qui, quoi, comment la lumière ment, pourquoi ce cadrage.",
    },
    {
      question: "Pourquoi mon prompt détaillé donne un résultat mou ?",
      answer:
        "Parce que la densité de mots n’égale pas la densité de décision. Si vous ajoutez dix adjectifs contradictoires, le modèle moyenne. Si vous ajoutez trois contraintes fortes cohérentes, il tranche. Mieux vaut une intention claire qu’un catalogue de styles.",
    },
    {
      question: "Comment éviter le rendu « pub stock » ?",
      answer:
        "Évitez les formulations génériques « cinematic 8k ultra detailed » sans ancrage de scène. Remplacez par des choix : type de source lumineuse, qualité d’objectif, imperfections acceptées, attitude du sujet, moment de la journée, texture de peau réaliste.",
    },
    {
      question: "Les contraintes négatives sont-elles obligatoires ?",
      answer:
        "Pas toujours, mais elles deviennent utiles quand un défaut revient : mains, dents, symétrie trop parfaite, surface plastique. Listez ce que vous refusez, mais surtout renforcez ce que vous voulez par la lumière et la focale.",
    },
    {
      question: "Comment savoir si mon prompt est bon ?",
      answer:
        "Générez trois variations. Si elles sont toutes intéressantes mais incohérentes entre elles, votre prompt est trop large. Si elles sont proches et servent la même intention, vous tenez quelque chose d’exploitable.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Vous avez collé quarante mots dans un prompt, vous avez ajouté « cinematic lighting » comme on ajoute du sel, et l’image sort propre, contrastée, sans âme. Ce n’est pas votre faute : les tutoriels vendent l’idée qu’un prompt est une liste magique. En pratique, un prompt image IA qui sonne cinéma ressemble plus à une fiche de tournage miniature qu’à un poème. Le vrai problème, c’est celui-ci : vous décrivez une esthétique alors que vous devriez décrire une scène avec des contraintes de lecture. La caméra, dans votre tête, doit savoir pourquoi elle est là.",
    },
    {
      type: "h2",
      id: "pourquoi-long-ne-marche-pas",
      text: "Pourquoi un prompt long ne suffit pas (et peut même vous saboter)",
    },
    {
      type: "p",
      text: "Un modèle image ne « comprend » pas votre ambition artistique. Il résout un problème statistique sous contraintes. Quand vous surchargez, vous augmentez les degrés de liberté puis vous vous étonnez que le résultat moyenne. C’est là que beaucoup se trompent : ils croient que détailler, c’est préciser. Préciser, c’est trancher. Trancher, c’est accepter de perdre des options. Le cinéma est fait de pertes volontaires. Un plan refuse d’être un autre plan. Votre prompt doit faire la même chose.",
    },
    {
      type: "h2",
      id: "structure-scene",
      text: "La structure qui tient : scène, sujet, intention, lumière, focale, texture",
    },
    {
      type: "p",
      text: "Commencez par la scène, pas par l’adjectif. Où sommes-nous, à quelle heure, dans quel monde social, avec quelle température émotionnelle ? Ensuite le sujet : qui porte l’image, que fait-il, que refuse-t-il de montrer ? Puis l’intention : qu’est-ce que le spectateur doit comprendre avant même de lire les détails ? Ensuite seulement la lumière, parce que la lumière est le langage le plus rapide pour cadrer le réalisme. Puis la focale et la distance : vous êtes proches, intimes, ou vous observez de loin, presque documentaire ? Enfin la texture : grain, peau, poussière, humidité, ce qui empêche le plastique. Cette structure n’est pas une recette TikTok. C’est une checklist de décisions.",
    },
    {
      type: "h3",
      id: "lumiere-qui-ment",
      text: "Lumière : faites mentir la scène dans le bon sens",
    },
    {
      type: "p",
      text: "La lumière cinéma n’est pas « belle ». Elle est motivée, même quand elle est stylisée. Une fenêtre, une néon, une lampe de bureau, un contre-jour brutal : chaque source impose des ombres et des comportements de peau. Si vous écrivez seulement « soft light », vous demandez au modèle une moyenne de beauté. Si vous écrivez une source, une direction, une dureté, vous demandez un comportement. Pour approfondir le réalisme sans retomber dans le glossy, croisez avec [IA image réaliste : éviter le rendu plastique](/blog/ia-image-realiste).",
    },
    {
      type: "h3",
      id: "focale-cadrage",
      text: "Focale et cadrage : le cinéma commence par où vous coupez le monde",
    },
    {
      type: "p",
      text: "Un grand-angle proche n’envoie pas le même signal qu’un téléobjectif compressé. Ce n’est pas du snobisme technique : c’est de la psychologie. Le grand-angle peut rendre un visage agressif, présent, trop présent. Le télé peut isoler un sujet du fond, créer une bulle. Si vous ne choisissez pas, le modèle choisit pour vous, souvent vers un 50 mm « neutre » qui ressemble à une photo produit. Écrivez la focale comme une décision, pas comme un décor.",
    },
    {
      type: "h2",
      id: "contraintes-negatives",
      text: "Contraintes négatives : utiles, mais secondaires par rapport à une scène forte",
    },
    {
      type: "p",
      text: "Les contraintes négatives servent à empêcher des défauts récurrents : mains, dents, trop de netteté globale, peau cire, yeux « trop parfaits ». Mais si votre scène est floue, vous passerez votre temps à enlever des problèmes sans construire une image. Utilisez les négatifs comme une liste de garde-fou, pas comme un substitut à l’intention. Et si vous travaillez un personnage récurrent, la cohérence passe aussi par des références et des fiches, comme dans [personnage cohérent sur plusieurs images IA](/blog/personnage-coherent-ia).",
    },
    {
      type: "table",
      caption: "Formulation faible vs formulation orientée cinéma",
      headers: ["Formulation faible", "Formulation orientée cinéma", "Ce que ça change"],
      rows: [
        [
          "cinematic photo, 8k, ultra detailed",
          "nuit humide, néon rouge en key, ombres dures, grain 35 mm",
          "Vous imposez une géographie lumineuse plutôt qu’un slogan.",
        ],
        [
          "beautiful face",
          "regard détourné, micro tension à la mâchoire, close-up serré",
          "Vous donnez une attitude, pas une catégorie esthétique.",
        ],
        [
          "fantasy city",
          "rue étroite, perspective courte, brume basse, silhouettes lointaines",
          "Vous réduisez l’espace des possibles, donc vous gagnez en cohérence.",
        ],
        [
          "professional lighting",
          "lampe de chevet basse, peau chaude, chute d’ombre sur le nez",
          "Vous remplacez un label par une cause physique.",
        ],
      ],
    },
    {
      type: "h2",
      id: "exemple-prompt",
      text: "Exemple complet : d’une intention à un prompt opérationnel",
    },
    {
      type: "p",
      text: "Intention : montrer une rupture silencieuse entre deux personnages dans un appartement la nuit. Scène : salon, néon extérieur qui traverse les rideaux, air confiné. Sujet : femme au premier plan, homme flou au fond, distance émotionnelle visible. Lumière : mélange froid extérieur et chaleur intérieure faible. Focale : 50 mm, distance moyenne, cadrage légèrement décentré. Texture : grain léger, peau naturelle, pas de retouche beauté. À partir de là, le prompt devient une phrase de direction, pas un inventory. Vous pouvez itérer sur un seul levier à la fois : si l’émotion ne passe pas, changez le regard avant de changer la palette.",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Erreurs fréquentes (celles qui coûtent le plus cher en temps)",
    },
    {
      type: "ol",
      items: [
        "Mélanger trois films de référence contradictoires dans le même prompt.",
        "Demander « réalisme » sans accepter imperfections visibles.",
        "Changer six paramètres entre deux générations et conclure que « le modèle est nul ».",
        "Ignorer le cadrage : vous corrigez la texture alors que le plan est narrativement faux.",
        "Travailler sans sélection : vous gardez dix images moyennes au lieu de deux fortes.",
      ],
    },
    {
      type: "h2",
      id: "lien-externe",
      text: "Pourquoi l’œil humain déteste le « presque réel »",
    },
    {
      type: "p",
      text: "Le réalisme n’est pas une question de résolution. C’est une question de signaux cohérents. Quand un détail casse la cohérence, le cerveau bascule dans l’étrange. Ce phénomène est discuté depuis longtemps en perception des formes humaines et en effet dit « valley of the eeriness » dans la recherche sur les visages synthétiques. Vous n’avez pas besoin de lire des papiers pour sentir l’effet : une main ratée tue une image avant le paysage. Pour sortir de ce piège, vous n’ajoutez pas des mots. Vous resserrez la scène. Pour une entrée plus large sur la perception des visages et des figures, vous pouvez partir du survol encyclopédique sur la [perception humaine des visages](https://en.wikipedia.org/wiki/Face_perception) et revenir ensuite à vos tests avec un critère simple : est-ce que je crois à la scène pendant trois secondes ?",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Conclusion : le cinéma est une décision, pas un style",
    },
    {
      type: "p",
      text: "Un bon prompt image IA ne promet pas le chef d’œuvre. Il réduit l’espace des médiocres possibles et force le modèle à trancher avec vous. Si vous voulez une base plus large sur la chaîne complète, lisez [formation IA vidéo : par où commencer](/blog/formation-ia-video). Pour aller plus loin, j’ai préparé une formation gratuite qui montre comment structurer un vrai workflow IA pour créer des images et vidéos plus cinématiques : [formation gratuite AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-cours-cinema). Ensuite, faites un exercice simple : trois prompts, même scène, un seul levier changé à chaque fois. Vous verrez vite ce qui compte vraiment.",
    },
  ],
};
