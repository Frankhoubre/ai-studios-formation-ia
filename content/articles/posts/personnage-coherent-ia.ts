import type { Article } from "@/lib/types/article";

export const personnageCoherentIa: Article = {
  title: "Comment garder le même personnage dans plusieurs images IA",
  slug: "personnage-coherent-ia",
  description:
    "Références, fiche personnage, poses, vêtements, lumière et erreurs fréquentes pour une cohérence visuelle exploitable sur une série d’images IA.",
  excerpt:
    "Si votre personnage change de visage entre deux plans, tout le reste devient amateur. Voici une méthode de cohérence qui tient sur une vraie série.",
  category: "ia-image",
  tags: ["personnage cohérent IA", "consistance", "références", "portrait"],
  date: "2026-04-12",
  updatedAt: "2026-04-18",
  readingTime: 17,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/personnage-coherent-ia.webp",
  imageAlt:
    "Illustration abstraite cohérence de personnage et identité visuelle IA",
  keywords: [
    "personnage cohérent IA",
    "consistance image IA",
    "character sheet IA",
  ],
  relatedSlugs: [
    "ia-image-realiste",
    "prompt-image-ia-cinema",
    "creer-storyboard-ia",
  ],
  faq: [
    {
      question: "Faut-il une photo réelle du personnage ?",
      answer:
        "Pas obligatoirement, mais il faut des références stables. Sans ancrage, le modèle invente des variations. Avec ancrage, vous réduisez l’espace des visages possibles.",
    },
    {
      question: "Pourquoi les vêtements changent sans raison ?",
      answer:
        "Parce que vous ne les verrouillez pas comme des attributs. Décrivez des pièces simples, reconnaissables, répétables. Évitez les tenues chargées au début.",
    },
    {
      question: "La lumière peut-elle casser la ressemblance ?",
      answer:
        "Oui. Une lumière extrême peut masquer des traits et pousser le modèle à reconstruire un autre visage. Progressez par étapes : d’abord ressemblance en lumière neutre, puis variations.",
    },
    {
      question: "Combien d’images pour stabiliser ?",
      answer:
        "Souvent trois à cinq images de référence bien choisies valent mieux que vingt images contradictoires. La cohérence est une discipline de sélection.",
    },
    {
      question: "Et pour le style cartoon ?",
      answer:
        "Même logique : silhouettes, proportions, palette, ligne de design. Le style change, le problème de cohérence reste.",
    },
    {
      question: "Un LoRA est-il obligatoire pour un personnage cohérent ?",
      answer:
        "Non, pas pour démarrer. Tu vas déjà loin avec une description verrouillée, une seed stable et des images de référence réutilisées. Le LoRA devient utile quand tu veux le même visage sur des dizaines de plans sans dériver. Vois-le comme une étape avancée, pas comme un prérequis. Entraîne un modèle seulement quand la cohérence manuelle ne suffit plus.",
    },

  ],
  content: [
    {
      type: "p",
      text: "Vous avez enfin un portrait fort. Vous générez le plan suivant, et ce n’est plus la même personne, juste un cousin au même âge. Ce n’est pas une malédiction technique. C’est le comportement normal d’un modèle qui n’a aucune raison de se souvenir pour vous. Si vous voulez garder le même personnage dans plusieurs images IA, vous devez fabriquer une mémoire artificielle avec des règles, des références, et une manière de changer un seul paramètre à la fois. Sinon vous jouez à la roulette.",
    },
    {
      type: "youtube",
      videoId: "wsZG3Xcm6tQ",
      title: "J'ai créé un animé entier avec l'IA… et ça ressemble à un vrai studio",
    },
    {
      type: "h2",
      id: "fiche-minimum",
      text: "La fiche minimum : ce que vous devez écrire noir sur blanc",
    },
    {
      type: "p",
      text: "Silhouette, taille relative, cheveux courts ou longs avec une forme reconnaissable, traits stables deux trois éléments du visage que vous voulez tenir, vêtements en trois pièces maximum au début, accessoire signature optionnel. Ajoutez l’âge apparent et le ressenti social du personnage, pas seulement « adulte ». Cette fiche devient votre contrat interne. Chaque prompt doit la respecter avant d’ajouter une action ou une émotion. Si vous cassez la fiche pour un effet, vous revenez à zéro.",
    },
    {
      type: "h2",
      id: "references",
      text: "Références : qualité, cohérence, pas quantité",
    },
    {
      type: "p",
      text: "Trois images qui se ressemblent valent mieux que dix images qui varient. Choisissez des angles différents mais un même sujet réel ou une même base générée fortement validée. Si vous mélangez des styles photo, le modèle fera des compromis. Si vous mélangez des éclairages contradictoires, le visage glisse. Pour le rendu peau et lumière, croisez avec [IA image réaliste](/blog/ia-image-realiste) : une peau crédible aide la reconnaissance.",
    },
    {
      type: "h2",
      id: "poses-expressions",
      text: "Poses et expressions : changer sans perdre l’identité",
    },
    {
      type: "p",
      text: "Le piège est de demander une émotion forte trop tôt. Commencez neutre, puis micro expression, puis action. Si vous sautez directement sur « screaming crying dramatic », vous donnez au modèle une excuse pour refaire la géométrie du visage. Décrivez l’action avec des verbes physiques plutôt qu’avec des étiquettes émotionnelles vagues. Et si vous storyboardiez une scène, reliez à [storyboard IA](/blog/creer-storyboard-ia) : la pose sert le beat, pas l’inverse.",
    },
    {
      type: "h2",
      id: "vetements",
      text: "Vêtements et cohérence de monde",
    },
    {
      type: "p",
      text: "Un blouson avec zip argenté, un t shirt uni, un pantalon simple : ce genre de triptyque tient mieux qu’une tenue fashion complexe. Quand vous changez de décor, gardez la même palette vestimentaire au début. Sinon le spectateur ne sait plus qui il suit. Si vous devez changer de tenue pour l’histoire, faites le explicitement comme un événement narratif, pas comme un bug.",
    },
    {
      type: "table",
      caption: "Erreur fréquente vs correction",
      headers: ["Erreur", "Pourquoi ça casse", "Correction"],
      rows: [
        [
          "Changer six paramètrès entre deux images",
          "Le modèle moyenne et perd l’identité",
          "Un seul levier modifié par itération",
        ],
        [
          "Références contradictoires",
          "Le visage devient un compromis",
          "Choisissez une ligne et jetez le reste",
        ],
        [
          "Lumière extrême trop tôt",
          "Traits reconstruits",
          "Neutre d’abord, style ensuite",
        ],
        [
          "Prompt trop littéraire",
          "Le modèle interprète large",
          "Attributs physiques listés et stables",
        ],
      ],
    },
    {
      type: "h2",
      id: "prompting-structure",
      text: "Structure de prompt : identité d’abord, scène ensuite",
    },
    {
      type: "p",
      text: "Ordonnez votre prompt comme une fiche casting suivie d’une direction de scène. L’identité tient en haut, stable. La scène tient en bas, variable. Si vous inversez, la scène écrase l’identité. Pour la logique de prompt orientée cinéma, [prompt image IA cinéma](/blog/prompt-image-ia-cinema) détaille comment trancher plutôt qu’empiler des adjectifs.",
    },
    {
      type: "h2",
      id: "perception",
      text: "Pourquoi le cerveau est impitoyable avec les visages",
    },
    {
      type: "p",
      text: "Nous sommes entraînés à détecter des micro incohérences sur les visages. Une encyclopédie généraliste résume des bases sur la reconnaissance des visages humains : voir [reconnaissance des visages](https://en.wikipedia.org/wiki/Face_perception). Vous n’avez pas besoin de théorie pour sentir le problème. Vous avez besoin de méthode : moins de liberté pour le modèle sur l’identité, plus de liberté sur la scène une fois l’identité tenue.",
    },
    {
      type: "h2",
      id: "banque-references",
      text: "Construire une banque de références réutilisable",
    },
    {
      type: "p",
      text: "Une fois que vous tenez un visage, ne le laissez pas s’évaporer dans votre dossier de téléchargements. Constituez une petite banque : trois à cinq images validées, sous des angles complémentaires, en lumière neutre, nommées clairement avec le nom du personnage et la date. Cette banque devient votre source de vérité. À chaque nouvelle scène, vous repartez d’elle, pas de la dernière image générée, qui a peut-être déjà légèrement dérivé. C’est une nuance décisive : si vous régénérez toujours à partir du plan précédent, les micro écarts s’accumulent et, au bout de dix images, votre personnage a vieilli ou changé de morphologie sans que vous l’ayez décidé. En revenant systématiquement à la banque d’origine, vous repartez d’un point fixe. Pensez-y comme à un négatif que l’on réimprime, pas comme à une photocopie de photocopie.",
    },
    {
      type: "h2",
      id: "protocole-test",
      text: "Le protocole de test en trois images",
    },
    {
      type: "p",
      text: "Avant de lancer une vraie série, validez la cohérence avec un test rapide et reproductible. Le principe : vous ne changez qu’une variable et vous observez si l’identité tient. Si elle tient sur ces trois plans, elle tiendra sur la série. Si elle casse dès le plan deux, inutile de produire vingt images, vous reproduiriez le problème vingt fois.",
    },
    {
      type: "ol",
      items: [
        "Image 1 : portrait neutre, lumière douce, fond simple. C’est votre référence de contrôle.",
        "Image 2 : même fiche, même lumière, mais un angle différent. Vous testez la stabilité géométrique du visage.",
        "Image 3 : même fiche, même angle, mais une action ou une émotion modérée. Vous testez la résistance de l’identité au changement de scène.",
      ],
    },
    {
      type: "p",
      text: "Si le visage glisse entre l’image 1 et l’image 2, le problème vient de vos références ou de votre ancrage, pas de la scène. Si tout tient jusqu’à l’image 3 puis dérape, c’est que l’émotion ou l’action que vous demandez est trop forte pour ce que le modèle sait reproduire de façon stable. Vous saurez alors exactement où agir, au lieu de tout changer en aveugle.",
    },
    {
      type: "h2",
      id: "diagnostic-derive",
      text: "Diagnostiquer une dérive : par où commencer",
    },
    {
      type: "p",
      text: "Quand un visage dérive, la réaction réflexe est de réécrire tout le prompt. C’est l’erreur. Une dérive a presque toujours une cause unique et identifiable. Reprenez les leviers dans l’ordre : avez-vous changé la lumière ? l’angle ? ajouté une émotion forte ? modifié la tenue ? introduit une nouvelle référence ? Dans neuf cas sur dix, un seul de ces éléments a bougé, et c’est lui le coupable. Revenez à la dernière image qui tenait, remettez ce paramètre à sa valeur précédente, et relancez. Cette discipline du retour en arrière contrôlé vous fera gagner des heures, parce qu’elle transforme un problème flou en une suite de tests binaires. Le modèle n’est pas capricieux : il réagit mécaniquement à ce que vous lui donnez. Votre travail est de garder la trace de ce que vous lui avez donné.",
    },
    {
      type: "h2",
      id: "corps-mains",
      text: "Cohérence du corps, des mains et de la silhouette",
    },
    {
      type: "p",
      text: "On parle beaucoup du visage, mais un personnage cohérent, c’est aussi une morphologie stable. Si la carrure, la taille relative ou la posture changent d’un plan à l’autre, le spectateur sent le décalage même sans pouvoir le nommer. Décrivez la silhouette avec quelques repères simples et répétables : corpulence, posture générale, façon de se tenir. Les mains méritent une attention particulière, car elles sont à la fois difficiles à générer proprement et très visibles. Si une scène ne les exige pas, cadrez pour les sortir du champ ou les placer au repos. Vous réduisez ainsi le risque sans rien perdre. La cohérence n’est pas qu’une affaire de traits : c’est l’ensemble du corps qui doit appartenir à la même personne.",
    },
    {
      type: "h2",
      id: "vers-la-video",
      text: "Préparer la cohérence pour la vidéo",
    },
    {
      type: "p",
      text: "Si votre série d’images doit nourrir une vidéo, la cohérence devient encore plus exigeante, car le mouvement amplifie le moindre écart. Un visage qui « flotte » légèrement d’un plan à l’autre passe presque inaperçu sur des images fixes, mais saute aux yeux en lecture. Préparez donc le terrain dès l’image : plus votre banque de référence est solide et plus vos plans fixes sont cohérents, plus la transition vers l’animation sera propre. Travaillez par plans courts, validez l’identité sur chaque plan avant de l’animer, et gardez la même logique d’un seul levier modifié à la fois. La vidéo ne pardonne pas l’à-peu-près : ce que vous laissez passer en image, elle le révèle.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Conclusion : la cohérence est une discipline de production",
    },
    {
      type: "p",
      text: "Si vous produisez une série, vous produisez une mémoire. Sans mémoire, vous produisez des variations. Les variations peuvent être belles, elles ne tiennent pas un récit. Pour une chaîne plus large, [workflow IA créatif](/blog/workflow-ia-creatif) aide à archiver et nommer correctement vos références. Pour aller plus loin, j’ai préparé une formation gratuite qui montre comment structurer un vrai workflow IA pour créer des images et vidéos plus cinématiques : [formation gratuite AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video). Prochain test : générez trois images avec la même fiche. Si le troisième visage dérive, ce n’est pas « le modèle ». C’est un paramètre que vous avez bougé sans le voir.",
    },
  ],
};
