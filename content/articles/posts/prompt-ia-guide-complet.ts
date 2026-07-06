import type { Article } from "@/lib/types/article";

export const promptIaGuideComplet: Article = {
  title: "Prompt IA : le guide complet pour images et vidéos",
  slug: "prompt-ia-guide-complet",
  description:
    "Le guide complet du prompt IA : structure, lumière, caméra, prompt négatif, erreurs fréquentes. La méthode pour écrire des prompts qui donnent le rendu voulu.",
  excerpt:
    "Écrire un prompt n'est pas empiler des mots-clés, c'est diriger une scène. Voici la méthode complète, du premier prompt structuré au vocabulaire de cinéma.",
  category: "prompting",
  tags: ["prompt ia", "guide complet", "prompting"],
  date: "2026-07-06",
  updatedAt: "2026-07-06",
  readingTime: 15,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompt-ia-guide-complet.webp",
  imageAlt:
    "Prompt IA le guide complet, un créateur écrivant un prompt structuré sur un écran dont les mots se transforment en image cinématique, studio sombre, lumière chaude",
  keywords: [
    "prompt ia",
    "écrire un prompt ia",
    "guide prompt ia",
    "prompting ia",
    "prompt image ia",
  ],
  relatedSlugs: [
    "image-ia-guide-complet",
    "video-ia-guide-complet",
    "prompt-structure-4-blocs-ia",
  ],
  faq: [
    {
      question: "Qu'est-ce qu'un bon prompt IA ?",
      answer:
        "Un bon prompt décrit une scène avec des causes, pas un catalogue d'adjectifs. Il précise le sujet, le décor, la lumière et la caméra, dans cet ordre de stabilité, et laisse le reste au modèle. Les prompts qui échouent sont presque toujours des empilements de mots-clés contradictoires, où le modèle fait la moyenne de consignes qui se battent. La règle d'or : chaque mot doit avoir une raison d'être là, et une consigne physique concrète vaut dix superlatifs de qualité.",
    },
    {
      question: "Faut-il écrire des prompts courts ou longs ?",
      answer:
        "Ni l'un ni l'autre par principe : la bonne longueur est celle qui contient exactement tes décisions, sans bruit. Un prompt court et précis bat un prompt long et vague. En pratique, un débutant gagne à partir court, une intention, un sujet, une lumière, puis à ajouter seulement ce qui manque au résultat. Si tu retires la moitié de ton prompt et que l'image s'améliore, c'est que tu avais du bruit. Le guide dédié au dosage court ou long détaille cette logique.",
    },
    {
      question: "Pourquoi mes prompts ne donnent pas ce que je veux ?",
      answer:
        "Les causes les plus fréquentes : des consignes contradictoires, trop de mots-clés qui diluent l'intention, aucune décision sur la lumière ou le cadrage, des références de styles incompatibles mélangées, et le fait de changer six paramètres à la fois entre deux essais, ce qui empêche d'apprendre. Le remède est méthodique : un prompt structuré, un seul changement par itération, et l'observation de ce que chaque mot produit réellement sur tes sujets.",
    },
    {
      question: "Le prompt négatif sert-il vraiment à quelque chose ?",
      answer:
        "Oui, sur les outils qui le supportent, c'est un levier sous-estimé. Le prompt négatif liste ce que tu ne veux pas voir : défauts anatomiques, texte parasite, rendu plastique, éléments hors sujet. Il nettoie l'image sans alourdir le prompt principal. La bonne pratique est d'entretenir une courte liste de négatifs récurrents adaptée à ton style, plutôt que de copier des listes géantes trouvées en ligne qui contraignent le modèle inutilement.",
    },
    {
      question: "Les prompts fonctionnent-ils pareil pour l'image et la vidéo ?",
      answer:
        "La logique de fond est la même, décrire une scène avec des causes, mais la vidéo ajoute le temps : il faut décrire un mouvement, une progression, pas seulement un état. Un prompt vidéo précise ce qui bouge, comment la caméra se déplace, ce qui change entre le début et la fin du plan. Le vocabulaire de cinéma, focales, mouvements de caméra, échelles de plan, devient encore plus rentable en vidéo qu'en image, car il dirige le mouvement.",
    },
    {
      question: "Comment progresser durablement en prompting ?",
      answer:
        "Par l'itération disciplinée et la capitalisation. Change un seul paramètre à la fois et observe, c'est la seule façon d'apprendre l'effet réel de chaque mot. Note les prompts qui marchent avec leurs réglages : une réussite documentée devient une recette réutilisable. Et construis ton vocabulaire visuel, lumière, focales, matières, car c'est lui qui transforme une intention vague en consigne exécutable. Le prompting s'apprend comme un artisanat, par la pratique structurée.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le prompt est l'interface entre ton intention et le modèle. C'est la compétence la plus rentable de toute l'IA créative : elle est gratuite, transférable entre tous les outils, et elle ne se périme pas quand les modèles changent. Pourtant, la plupart des créateurs prompent au hasard, en empilant des mots-clés jusqu'à obtenir un accident satisfaisant. Ce guide organise la méthode complète, avec un guide détaillé pour chaque brique.",
    },
    {
      type: "p",
      text: "La promesse : à la fin, tu sauras structurer un prompt qui exécute tes décisions, utiliser le vocabulaire de cinéma qui fait la différence, diagnostiquer un prompt qui échoue, et progresser par itération au lieu de tirer au sort.",
    },
    {
      type: "p",
      text: "Parce qu'un prompt n'est pas une formule magique à copier. C'est une direction de scène : tu décides, le modèle exécute. Et diriger, ça s'apprend.",
    },
    {
      type: "h2",
      id: "structure",
      text: "La structure : un prompt est une scène, pas une liste",
    },
    {
      type: "p",
      text: "Le socle de tout est [la structure en 4 blocs](/blog/prompt-structure-4-blocs-ia) : sujet, décor, lumière, caméra. Cet ordre va du plus stable au plus variable, il protège l'essentiel et rend tes itérations lisibles. Pour un rendu cinématographique, [la méthode du prompt cinéma](/blog/prompt-image-ia-cinema) montre comment trancher des décisions de mise en scène plutôt qu'empiler des adjectifs.",
    },
    {
      type: "p",
      text: "La question de la longueur se règle par un principe : chaque mot doit servir. [Prompt court ou long, voici comment doser](/blog/prompt-structure-4-blocs-ia). Et si tu veux comprendre pourquoi tes essais échouent, [les 7 causes fréquentes des prompts qui ne marchent pas](/blog/prompt-negatif-ia-images-propres) est le diagnostic à lire en premier : dans la grande majorité des cas, ton problème y figure.",
    },
    {
      type: "table",
      caption: "Les briques d'un prompt maîtrisé",
      headers: ["Brique", "Ce qu'elle contrôle", "Guide à lire"],
      rows: [
        ["Structure 4 blocs", "L'ordre et la clarté des décisions", "Le prompt structuré"],
        ["Lumière", "L'émotion et le réalisme", "Décrire la lumière"],
        ["Caméra et focale", "Le regard et la distance", "Focales 35, 50, 85mm"],
        ["Prompt négatif", "Ce qu'on écarte", "Prompt négatif IA"],
        ["Itération", "L'apprentissage réel", "Un seul changement à la fois"],
      ],
    },
    {
      type: "h2",
      id: "vocabulaire",
      text: "Le vocabulaire visuel : lumière, caméra, matière",
    },
    {
      type: "p",
      text: "Ce qui distingue un prompteur avancé d'un débutant, c'est le vocabulaire. Pas des mots magiques : des mots précis. [Décrire la lumière](/blog/decrire-lumiere-prompt-ia) transforme une ambiance vague en consigne exécutable : source, dureté, couleur, direction. [Les focales](/blog/focale-objectif-prompt-ia) donnent le contrôle de la distance émotionnelle : un 35mm contextualise, un 85mm isole et flatte.",
    },
    {
      type: "p",
      text: "Ce vocabulaire s'applique tel quel aux ambiances : [les 6 lumières de cinéma](/blog/lumiere-cinema-ambiances-images-ia) et [le rendu pellicule](/blog/rendu-pellicule-grain-film-ia) sont des raccourcis éprouvés vers des looks précis. Et pour les cas spéciaux comme le texte dans l'image, [Ideogram et la typographie d'affiche](/blog/ideogram-typographie-affiche-cinema) montrent comment prompter un élément que la plupart des modèles ratent.",
    },
    {
      type: "h2",
      id: "nettoyer",
      text: "Nettoyer et affiner : le négatif et les réglages",
    },
    {
      type: "p",
      text: "Un prompt ne travaille jamais seul. [Le prompt négatif](/blog/prompt-negatif-ia-images-propres) écarte les défauts récurrents, mains ratées, texte parasite, rendu plastique, sans alourdir la consigne principale. Sur les outils avancés, les réglages de génération, seed, guidage, étapes, complètent le texte : la seed fixe le hasard pour comparer proprement, le guidage dose la fidélité au prompt. Ces réglages ont leurs propres guides sur le blog, et la logique reste la même partout : comprendre ce que fait chaque levier avant de le pousser.",
    },
    {
      type: "p",
      text: "> Pro Tip : la discipline qui accélère le plus ta progression tient en une règle : un seul changement entre deux générations. Fixe la seed quand l'outil le permet, change un mot, observe. En une semaine de cette pratique, tu sauras ce que des mois de tirage au sort ne t'apprendront jamais.",
    },
    {
      type: "h2",
      id: "image-et-video",
      text: "Du prompt image au prompt vidéo",
    },
    {
      type: "p",
      text: "Tout ce qui précède vaut pour l'image et se transfère à la vidéo, avec une dimension en plus : le temps. Un prompt vidéo décrit un mouvement, ce qui bouge, comment la caméra se déplace, ce qui change entre le début et la fin du plan. Le vocabulaire caméra devient central, et la logique de scène dirigée prend tout son sens : tu ne décris plus une image, tu décris un plan.",
    },
    {
      type: "p",
      text: "Pour appliquer cette compétence dans son contexte complet, poursuis avec [le guide complet de l'image IA](/blog/image-ia-guide-complet), qui replace le prompt dans la chaîne de production visuelle, et [le guide complet de la vidéo IA](/blog/video-ia-guide-complet), où le prompt sert le storyboard et la continuité. Le prompt est la brique de base : ces deux guides montrent l'édifice.",
    },
    {
      type: "h2",
      id: "progresser",
      text: "Progresser : documenter, capitaliser, réutiliser",
    },
    {
      type: "p",
      text: "Le prompting s'apprend comme un artisanat. Trois habitudes font la différence sur la durée. D'abord, documente tes réussites : un prompt qui marche, noté avec son outil et ses réglages, devient une recette. Ensuite, construis des gabarits réutilisables : une structure éprouvée que tu adaptes vaut mieux qu'une page blanche à chaque fois. Enfin, révise : les modèles évoluent, et un prompt optimal il y a six mois peut être sous-optimal aujourd'hui.",
    },
    {
      type: "p",
      text: "Garde aussi l'humilité du médium : le prompt dirige, il ne contrôle pas tout. Les outils de contrôle avancés, références visuelles, poses imposées, modèles personnalisés, prennent le relais quand le texte atteint ses limites. Savoir reconnaître ce moment, quand reformuler ne sert plus à rien et qu'il faut changer d'outil, fait partie de la compétence. Pour la culture de fond, la page [Ingénierie de prompt sur Wikipédia](https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_de_prompt) situe la discipline et son évolution.",
    },
    {
      type: "h2",
      id: "exercices",
      text: "Trois exercices pour ancrer la méthode",
    },
    {
      type: "p",
      text: "Exercice 1, la variable unique : prends une scène simple, fixe la seed si ton outil le permet, et génère cinq versions en ne changeant que la lumière, puis cinq en ne changeant que la focale. Tu verras de tes yeux ce que chaque levier produit, et cette connaissance vaut tous les tutoriels. Exercice 2, la coupe : prends ton prompt le plus long, retire la moitié des mots, compare. Dans la plupart des cas, l'image gagne en force, et tu identifies enfin quels mots travaillaient contre toi.",
    },
    {
      type: "p",
      text: "Exercice 3, la reproduction : choisis une image que tu admires, une vraie photo ou un plan de film, et essaie de la reproduire par le prompt. Pas pour copier, pour apprendre : cet exercice te force à décomposer une image en décisions, sujet, cadrage, lumière, matière, et c'est exactement la gymnastique mentale du prompteur avancé. Refais-le une fois par semaine, avec des références de plus en plus exigeantes, et ton vocabulaire visuel grandira plus vite que par n'importe quelle autre méthode. Le prompt n'est pas une astuce, c'est un langage : plus tu le pratiques délibérément, plus tu deviens fluide, et plus chaque nouvelle génération d'outils te semblera familière au lieu de tout remettre à zéro.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Qu'est-ce qu'un bon prompt IA ?",
    },
    {
      type: "p",
      text: "Un bon prompt décrit une scène avec des causes, pas un catalogue d'adjectifs. Il précise le sujet, le décor, la lumière et la caméra, dans cet ordre de stabilité, et laisse le reste au modèle. Les prompts qui échouent sont presque toujours des empilements de mots-clés contradictoires, où le modèle fait la moyenne de consignes qui se battent. La règle d'or : chaque mot doit avoir une raison d'être là, et une consigne physique concrète vaut dix superlatifs de qualité.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Faut-il écrire des prompts courts ou longs ?",
    },
    {
      type: "p",
      text: "Ni l'un ni l'autre par principe : la bonne longueur est celle qui contient exactement tes décisions, sans bruit. Un prompt court et précis bat un prompt long et vague. En pratique, un débutant gagne à partir court, une intention, un sujet, une lumière, puis à ajouter seulement ce qui manque au résultat. Si tu retires la moitié de ton prompt et que l'image s'améliore, c'est que tu avais du bruit. Le guide dédié au dosage court ou long détaille cette logique.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Pourquoi mes prompts ne donnent pas ce que je veux ?",
    },
    {
      type: "p",
      text: "Les causes les plus fréquentes : des consignes contradictoires, trop de mots-clés qui diluent l'intention, aucune décision sur la lumière ou le cadrage, des références de styles incompatibles mélangées, et le fait de changer six paramètres à la fois entre deux essais, ce qui empêche d'apprendre. Le remède est méthodique : un prompt structuré, un seul changement par itération, et l'observation de ce que chaque mot produit réellement sur tes sujets.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le prompt négatif sert-il vraiment à quelque chose ?",
    },
    {
      type: "p",
      text: "Oui, sur les outils qui le supportent, c'est un levier sous-estimé. Le prompt négatif liste ce que tu ne veux pas voir : défauts anatomiques, texte parasite, rendu plastique, éléments hors sujet. Il nettoie l'image sans alourdir le prompt principal. La bonne pratique est d'entretenir une courte liste de négatifs récurrents adaptée à ton style, plutôt que de copier des listes géantes trouvées en ligne qui contraignent le modèle inutilement.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Les prompts fonctionnent-ils pareil pour l'image et la vidéo ?",
    },
    {
      type: "p",
      text: "La logique de fond est la même, décrire une scène avec des causes, mais la vidéo ajoute le temps : il faut décrire un mouvement, une progression, pas seulement un état. Un prompt vidéo précise ce qui bouge, comment la caméra se déplace, ce qui change entre le début et la fin du plan. Le vocabulaire de cinéma, focales, mouvements de caméra, échelles de plan, devient encore plus rentable en vidéo qu'en image, car il dirige le mouvement.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment progresser durablement en prompting ?",
    },
    {
      type: "p",
      text: "Par l'itération disciplinée et la capitalisation. Change un seul paramètre à la fois et observe, c'est la seule façon d'apprendre l'effet réel de chaque mot. Note les prompts qui marchent avec leurs réglages : une réussite documentée devient une recette réutilisable. Et construis ton vocabulaire visuel, lumière, focales, matières, car c'est lui qui transforme une intention vague en consigne exécutable. Le prompting s'apprend comme un artisanat, par la pratique structurée.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-07-06 -->
