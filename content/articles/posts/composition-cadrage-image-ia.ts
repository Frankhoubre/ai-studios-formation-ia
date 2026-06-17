import type { Article } from "@/lib/types/article";

export const compositionCadrageImageIa: Article = {
  title: "Composition et cadrage en image IA : guider le regard",
  slug: "composition-cadrage-image-ia",
  description:
    "Une image IA bien composée se lit en une seconde. Règle des tiers, lignes directrices et profondeur pour cadrer et guider le regard, sans rendu générique.",
  excerpt:
    "Le réalisme ne fait pas tout : sans composition, ton image IA reste plate. Voici comment cadrer pour guider le regard et créer de la profondeur.",
  category: "ia-image",
  tags: ["composition", "cadrage", "règle des tiers"],
  date: "2026-06-16",
  updatedAt: "2026-06-16",
  readingTime: 19,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/composition-cadrage-image-ia.webp",
  imageAlt:
    "Composition et cadrage en image IA, scène cinématique avec règle des tiers, lignes directrices et profondeur qui guident le regard",
  keywords: [
    "composition image IA",
    "cadrage image IA",
    "règle des tiers",
    "guider le regard composition",
    "profondeur image IA",
  ],
  relatedSlugs: [
    "ia-image-realiste",
    "prompt-image-ia-cinema",
    "images-cinema-ia-scene-film",
  ],
  faq: [
    {
      question: "La composition se prompt-elle vraiment, ou c'est du hasard ?",
      answer:
        "Elle se prompt en partie, et le reste se gagne à la sélection. Tu peux orienter la composition avec des termes de cadrage, position du sujet, point de vue, profondeur, lignes de fuite. Le modèle ne suivra pas tout au pixel près, mais il réagit clairement à des indications de cadrage. Ensuite tu génères plusieurs essais et tu sélectionnes celui dont la composition guide le mieux le regard. C'est un mélange de direction et de tri.",
    },
    {
      question: "Faut-il toujours appliquer la règle des tiers ?",
      answer:
        "Non, c'est un point de départ, pas une loi. La règle des tiers aide à éviter le sujet plaqué au centre de façon plate, et elle crée souvent un meilleur équilibre. Mais le centrage volontaire, la symétrie, ou un sujet décalé en bord de cadre peuvent être très forts s'ils sont intentionnels. La vraie règle, c'est de composer consciemment, pas de suivre une grille par réflexe.",
    },
    {
      question: "Comment créer de la profondeur dans une image IA ?",
      answer:
        "En pensant en plans, premier plan, sujet, arrière-plan. Quand ces trois niveaux existent et se distinguent, l'image respire. Tu peux ajouter un élément de premier plan, décrire un arrière-plan qui recule, et utiliser une faible profondeur de champ pour séparer les plans. Une image plate n'a souvent qu'un seul niveau, tout est à la même distance. La profondeur, c'est ce qui sépare une vignette d'une vraie scène.",
    },
    {
      question: "Pourquoi mon sujet semble-t-il collé sur le décor ?",
      answer:
        "Parce qu'il manque de séparation avec l'arrière-plan, en netteté, en lumière ou en contraste. Quand le sujet et le fond ont la même netteté et la même luminosité, l'œil ne les distingue pas et l'image paraît plate, comme un collage. Sépare-les avec une faible profondeur de champ, un contre-jour léger, ou un fond plus sombre derrière un sujet clair. Cette séparation est un des secrets du rendu cinéma.",
    },
    {
      question: "Le cadrage influence-t-il l'émotion d'une image ?",
      answer:
        "Énormément. Un plan large isole et raconte un contexte, un gros plan crée de l'intimité et de la tension, une contre-plongée donne de la puissance au sujet, une plongée le rend vulnérable. Le cadrage n'est pas neutre, il porte une intention. Choisis-le en fonction de ce que tu veux faire ressentir, pas seulement de ce que tu veux montrer. C'est un outil narratif autant que technique.",
    },
    {
      question: "Comment vérifier qu'une composition fonctionne ?",
      answer:
        "Réduis l'image en tout petit, ou plisse les yeux. Si le sujet principal reste immédiatement lisible et que ton regard est guidé vers lui, la composition tient. Si tout se mélange en une bouillie, elle est trop chargée ou mal hiérarchisée. Ce test de la vignette est rapide et impitoyable, il révèle si ton image a une structure claire ou si elle compte seulement sur les détails pour exister.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as enfin obtenu une image IA réaliste, la texture est bonne, la lumière tient, et pourtant elle ne marque pas. Elle est correcte, mais plate, oubliable. Le réflexe est de blâmer le rendu, alors que le vrai manque est ailleurs, dans la composition. Une image peut être techniquement parfaite et visuellement morte si rien ne guide le regard. Ce guide est consacré à ça, cadrer pour donner vie et direction à tes images.",
    },
    {
      type: "p",
      text: "La promesse est concrète : à la fin, tu sauras placer ton sujet pour qu'on le voie, créer de la profondeur, et utiliser le cadrage comme un outil d'émotion. On parle de repères simples, utilisables dès ta prochaine génération.",
    },
    {
      type: "p",
      text: "Parce que le réalisme attire l'œil une seconde, mais c'est la composition qui le retient et le dirige. C'est elle qui sépare une image qui scrolle d'une image qui arrête.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Core Concepts : composer, c'est hiérarchiser",
    },
    {
      type: "h3",
      id: "guider-le-regard",
      text: "Une bonne composition guide le regard",
    },
    {
      type: "p",
      text: "Composer, ce n'est pas décorer, c'est décider où l'œil du spectateur doit aller, et dans quel ordre. Une image forte a une hiérarchie claire, un point d'entrée, un sujet principal, un chemin de lecture. Une image faible disperse l'attention, tout réclame le regard en même temps, et donc rien ne le retient. Le réalisme ne crée pas cette hiérarchie, seule la composition le fait.",
    },
    {
      type: "p",
      text: "Voilà pourquoi ça compte : le modèle IA produit des pixels crédibles, mais il ne sait pas ce qui est important dans ton image. Si tu ne diriges pas la composition, il répartit l'attention de façon uniforme, et tu obtiens un rendu plat et générique. Ton rôle est de hiérarchiser ce que la machine traite à plat.",
    },
    {
      type: "p",
      text: "C'est le prolongement naturel du réalisme. Une fois que ton image est crédible, comme dans [notre guide pour des images IA réalistes](/blog/ia-image-realiste), la composition est l'étape qui la rend mémorable plutôt que simplement correcte.",
    },
    {
      type: "h3",
      id: "outils-de-composition",
      text: "Les outils de base, sans jargon",
    },
    {
      type: "p",
      text: "La règle des tiers consiste à placer ton sujet sur une ligne de force plutôt qu'au centre mort, pour créer un équilibre plus dynamique. Les lignes directrices, route, mur, regard, dirigent l'œil vers le sujet. La profondeur en trois plans, premier plan, sujet, arrière-plan, donne du volume. L'espace négatif, ces zones vides autour du sujet, lui donne de la respiration et de l'importance.",
    },
    {
      type: "p",
      text: "Pense-y comme une mise en scène de théâtre. Tu ne plantes pas l'acteur au hasard, tu le places là où le public le verra le mieux, tu orientes les regards vers lui, tu crées de la profondeur avec les décors. La caméra IA suit la même logique, et ces outils sont ton plan de scène.",
    },
    {
      type: "p",
      text: "Aucun de ces outils n'est une obligation. Ce sont des leviers. Les connaître te permet de les utiliser quand ils servent ton intention, et de les casser volontairement quand tu cherches un effet précis. La maîtrise, c'est le choix conscient, pas l'application aveugle.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Practical Workflow : composer une image étape par étape",
    },
    {
      type: "h3",
      id: "decider-cadrage",
      text: "Étape 1, décider le cadrage avant de générer",
    },
    {
      type: "p",
      text: "Avant d'écrire ton prompt, décide ce que tu veux faire ressentir, puis choisis le cadrage qui sert cette émotion. Le cadrage n'est pas un détail technique de fin, c'est une décision narrative de départ. Le choisir consciemment oriente tout le reste de ta composition.",
    },
    {
      type: "table",
      caption: "Cadrages, émotion induite et indication à prompter",
      headers: ["Cadrage", "Émotion dominante", "À indiquer dans le prompt"],
      rows: [
        ["Plan large", "Contexte, isolement, échelle", "Wide shot, sujet petit dans un grand décor"],
        ["Plan moyen", "Neutralité, présence", "Medium shot, sujet à mi-corps"],
        ["Gros plan", "Intimité, tension", "Close-up, visage cadré serré"],
        ["Contre-plongée", "Puissance, domination", "Low angle, caméra sous le sujet"],
        ["Plongée", "Vulnérabilité, petitesse", "High angle, caméra au-dessus du sujet"],
      ],
    },
    {
      type: "p",
      text: "Cette grille relie chaque cadrage à une intention. Tu ne choisis plus un plan parce qu'il est joli, mais parce qu'il fait ressentir ce que tu veux. C'est la même grammaire qu'en vidéo, détaillée dans [notre guide des images de cinéma IA](/blog/images-cinema-ia-scene-film), et elle s'applique aussi bien à l'image fixe.",
    },
    {
      type: "h3",
      id: "construire-profondeur",
      text: "Étape 2, construire la profondeur et la séparation",
    },
    {
      type: "p",
      text: "Une image plate n'a souvent qu'un seul plan. Pour lui donner du volume, tu penses en trois niveaux et tu sépares ton sujet de son fond. C'est une des différences les plus visibles entre un rendu amateur et un rendu cinéma.",
    },
    {
      type: "ol",
      items: [
        "Ajoute un élément de premier plan, même discret, pour créer une entrée dans l'image.",
        "Décris un arrière-plan qui recule, avec des éléments plus petits ou plus flous.",
        "Sépare le sujet du fond avec une faible profondeur de champ ou un contraste de lumière.",
        "Vérifie qu'on distingue clairement les trois plans, sinon renforce la séparation.",
        "Teste plusieurs cadrages à seed fixe et garde celui qui guide le mieux le regard.",
      ],
    },
    {
      type: "p",
      text: "La composition est le squelette, mais elle ne remplace pas une bonne intention de rendu. Pour relier cadrage, focale et ambiance dans un tout cohérent et cinématographique, croise cette méthode avec [notre guide sur le prompt image cinéma](/blog/prompt-image-ia-cinema).",
    },
    {
      type: "p",
      text: "> Pro Tip : avant de valider une image, réduis-la en miniature. Si ton œil va droit au sujet, la composition tient. Si tout se mélange, elle est trop chargée ou mal hiérarchisée.",
    },
    {
      type: "h3",
      id: "affiner-selection",
      text: "Étape 3, affiner par la sélection",
    },
    {
      type: "p",
      text: "Le modèle ne suit pas ta composition au pixel près, donc une partie du travail se fait au tri. Tu génères plusieurs variantes et tu sélectionnes celle dont la structure visuelle est la plus claire, pas celle qui a le plus de détails. La sélection est une compétence de composition à part entière.",
    },
    {
      type: "p",
      text: "Sois attentif aux accidents heureux. Parfois le modèle propose un placement ou une profondeur que tu n'avais pas prévus, et qui fonctionne mieux que ton idée de départ. Garde l'œil ouvert, la meilleure composition n'est pas toujours celle que tu avais en tête.",
    },
    {
      type: "p",
      text: "Pour la culture de fond sur les principes visuels, la règle des tiers et l'équilibre, garde en référence la page [Rule of thirds sur Wikipédia](https://en.wikipedia.org/wiki/Rule_of_thirds), utile pour nommer et approfondir ce que ton œil ressent déjà.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "The Trench Warfare Section : ce qui aplatit tes images",
    },
    {
      type: "h3",
      id: "erreur-sujet-centre",
      text: "Erreur 1, le sujet plaqué au centre mort",
    },
    {
      type: "p",
      text: "Par défaut, beaucoup de générations posent le sujet pile au centre, de face, à plat. Sans intention, ce centrage donne une image statique et banale, type photo d'identité. Ce n'est pas faux en soi, mais quand ce n'est pas voulu, ça tue le dynamisme.",
    },
    {
      type: "p",
      text: "Fix concret : indique un placement décalé, sujet sur le tiers gauche, regard vers l'espace libre, ou au contraire assume un centrage symétrique fort si c'est ton intention. L'essentiel est de décider, pas de subir le centre par défaut du modèle.",
    },
    {
      type: "h3",
      id: "erreur-image-plate",
      text: "Erreur 2, l'image à un seul plan",
    },
    {
      type: "p",
      text: "Tout est à la même distance, même netteté, même importance. L'image n'a pas de profondeur, elle ressemble à un décor peint. C'est l'un des signes les plus courants d'un rendu plat, et il n'a rien à voir avec la qualité des textures.",
    },
    {
      type: "p",
      text: "Fix concret : introduis un premier plan et un arrière-plan distincts, et sépare-les par la profondeur de champ. Même un simple élément flou au premier plan change radicalement la sensation de volume. Pense en couches, pas en surface.",
    },
    {
      type: "p",
      text: "> Pro Tip : la faible profondeur de champ est ton meilleur allié anti-plat. Elle sépare le sujet du fond et fait basculer l'image du côté cinéma presque à elle seule.",
    },
    {
      type: "h3",
      id: "erreur-trop-charge",
      text: "Erreur 3, l'image trop chargée",
    },
    {
      type: "p",
      text: "À l'inverse, tu remplis chaque coin de détails, persuadé que plus, c'est mieux. Résultat, l'œil ne sait plus où aller, il n'y a pas de sujet clair, et l'image fatigue au lieu d'attirer. La surcharge détruit la hiérarchie aussi sûrement que le vide.",
    },
    {
      type: "p",
      text: "Fix concret : laisse de l'espace négatif autour de ton sujet. Le vide n'est pas une perte, c'est ce qui met le sujet en valeur et donne de la respiration. Retire des éléments jusqu'à ce qu'il reste un point d'attention évident.",
    },
    {
      type: "h3",
      id: "erreur-sujet-colle",
      text: "Erreur 4, le sujet collé au décor",
    },
    {
      type: "p",
      text: "Ton sujet et ton arrière-plan ont la même netteté et la même luminosité, alors ils fusionnent. L'image paraît être un collage, le sujet ne se détache pas, et toute l'impression de profondeur s'effondre. C'est subtil mais ça trahit immédiatement.",
    },
    {
      type: "p",
      text: "Fix concret : crée une séparation nette, fond plus sombre derrière un sujet clair, léger contre-jour qui détoure, ou flou d'arrière-plan. Cette séparation entre sujet et fond est un des gestes les plus payants pour un rendu professionnel.",
    },
    {
      type: "p",
      text: "Quand tu composes consciemment, en plaçant ton sujet, en créant de la profondeur et en guidant le regard, tes images cessent d'être seulement réalistes pour devenir marquantes. Et c'est ça que les gens retiennent, pas le nombre de pixels, mais la sensation d'avoir vu une vraie image.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions (FAQ)",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "La composition se prompt-elle vraiment, ou c'est du hasard ?",
    },
    {
      type: "p",
      text: "Elle se prompt en partie, et le reste se gagne à la sélection. Tu peux orienter la composition avec des termes de cadrage, position du sujet, point de vue, profondeur, lignes de fuite. Le modèle ne suivra pas tout au pixel près, mais il réagit clairement à des indications de cadrage. Ensuite tu génères plusieurs essais et tu sélectionnes celui dont la composition guide le mieux le regard. C'est un mélange de direction et de tri.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Faut-il toujours appliquer la règle des tiers ?",
    },
    {
      type: "p",
      text: "Non, c'est un point de départ, pas une loi. La règle des tiers aide à éviter le sujet plaqué au centre de façon plate, et elle crée souvent un meilleur équilibre. Mais le centrage volontaire, la symétrie, ou un sujet décalé en bord de cadre peuvent être très forts s'ils sont intentionnels. La vraie règle, c'est de composer consciemment, pas de suivre une grille par réflexe.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Comment créer de la profondeur dans une image IA ?",
    },
    {
      type: "p",
      text: "En pensant en plans, premier plan, sujet, arrière-plan. Quand ces trois niveaux existent et se distinguent, l'image respire. Tu peux ajouter un élément de premier plan, décrire un arrière-plan qui recule, et utiliser une faible profondeur de champ pour séparer les plans. Une image plate n'a souvent qu'un seul niveau, tout est à la même distance. La profondeur, c'est ce qui sépare une vignette d'une vraie scène.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Pourquoi mon sujet semble-t-il collé sur le décor ?",
    },
    {
      type: "p",
      text: "Parce qu'il manque de séparation avec l'arrière-plan, en netteté, en lumière ou en contraste. Quand le sujet et le fond ont la même netteté et la même luminosité, l'œil ne les distingue pas et l'image paraît plate, comme un collage. Sépare-les avec une faible profondeur de champ, un contre-jour léger, ou un fond plus sombre derrière un sujet clair. Cette séparation est un des secrets du rendu cinéma.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Le cadrage influence-t-il l'émotion d'une image ?",
    },
    {
      type: "p",
      text: "Énormément. Un plan large isole et raconte un contexte, un gros plan crée de l'intimité et de la tension, une contre-plongée donne de la puissance au sujet, une plongée le rend vulnérable. Le cadrage n'est pas neutre, il porte une intention. Choisis-le en fonction de ce que tu veux faire ressentir, pas seulement de ce que tu veux montrer. C'est un outil narratif autant que technique.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment vérifier qu'une composition fonctionne ?",
    },
    {
      type: "p",
      text: "Réduis l'image en tout petit, ou plisse les yeux. Si le sujet principal reste immédiatement lisible et que ton regard est guidé vers lui, la composition tient. Si tout se mélange en une bouillie, elle est trop chargée ou mal hiérarchisée. Ce test de la vignette est rapide et impitoyable, il révèle si ton image a une structure claire ou si elle compte seulement sur les détails pour exister.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-16 -->
