import type { Article } from "@/lib/types/article";

export const raccordContinuitePlansIa: Article = {
  title: "Raccord et continuité : enchaîner deux plans IA sans casser la scène",
  slug: "raccord-continuite-plans-ia",
  description:
    "Tes plans IA sont beaux mais la scène se casse au montage. Méthode terrain pour réussir le raccord, garder la continuité et enchaîner deux plans proprement.",
  excerpt:
    "Le problème n'est pas la qualité de chaque plan, c'est le lien entre eux. Voici comment réussir un raccord IA qui ne casse pas la scène.",
  category: "storytelling",
  tags: ["raccord", "continuité", "montage IA"],
  date: "2026-06-16",
  updatedAt: "2026-06-16",
  readingTime: 20,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/raccord-continuite-plans-ia.webp",
  imageAlt:
    "Raccord et continuité entre deux plans IA, scène cinématique cohérente avec direction de regard et lumière raccord",
  keywords: [
    "raccord plans IA",
    "continuité vidéo IA",
    "raccord regard",
    "match cut IA",
    "enchaîner deux plans IA",
  ],
  relatedSlugs: [
    "ecrire-micro-scene-avant-generer-video-ia",
    "stabilite-personnage-multi-plans",
    "creer-storyboard-ia",
  ],
  faq: [
    {
      question: "Pourquoi mes deux plans IA ne se raccordent pas, alors qu'ils sont beaux ?",
      answer:
        "Parce que la beauté d'un plan isolé ne dit rien de sa relation au plan suivant. Le raccord dépend de la continuité, direction du regard, sens du mouvement, position de la lumière, échelle du sujet. Si ces repères changent d'un plan à l'autre, le cerveau du spectateur perd la scène, même avec deux images magnifiques. Tu dois penser le lien entre les plans avant de penser le rendu de chaque plan.",
    },
    {
      question: "C'est quoi la règle des 180 degrés, version simple ?",
      answer:
        "Imagine une ligne invisible entre tes deux personnages, ou entre le sujet et son point d'intérêt. Tant que ta caméra reste du même côté de cette ligne, la gauche reste à gauche et la droite reste à droite, le spectateur garde ses repères. Si tu traverses la ligne entre deux plans, les personnages semblent inverser leurs positions et la scène devient désorientante. En IA, fixe ce côté dès le storyboard, car le modèle ne le gère pas pour toi.",
    },
    {
      question: "Comment garder la même lumière entre deux plans générés séparément ?",
      answer:
        "Décris la source de lumière de façon identique et explicite dans les deux prompts, même direction, même intensité, même température. Ne te contente pas de cinematic lighting, écris fenêtre latérale à gauche, lumière chaude de fin de journée. Ensuite vérifie le sens des ombres sur les deux plans avant de monter. Si une ombre passe de gauche à droite entre deux plans, le raccord casse, et aucune transition ne le rattrapera proprement.",
    },
    {
      question: "Le raccord dans le mouvement, comment ça marche en IA ?",
      answer:
        "Le raccord dans le mouvement consiste à couper pendant une action et à la prolonger sur le plan suivant. Quelqu'un commence à tourner la tête sur le plan A, le plan B reprend ce mouvement en cours. En IA, génère les deux plans avec la même action décrite, puis coupe au montage au point où le geste est le plus lisible. Ce type de coupe masque les micro-différences et donne une impression de continuité très forte.",
    },
    {
      question: "Faut-il un storyboard pour réussir ses raccords ?",
      answer:
        "Oui, au moins un storyboard léger. Le raccord se décide avant la génération, pas après. Un simple croquis qui note le côté de la caméra, la direction des regards et la position de la lumière t'évite de découvrir un faux raccord au montage, quand il est trop tard. Le storyboard est l'endroit où tu sécurises la continuité pendant que c'est encore gratuit de corriger.",
    },
    {
      question: "Comment réparer un faux raccord sans tout régénérer ?",
      answer:
        "Tu as quelques options avant la régénération. Tu peux insérer un plan de coupe neutre, détail, objet, environnement, qui casse la comparaison directe entre les deux plans problématiques. Tu peux aussi recadrer ou inverser horizontalement un plan pour récupérer la bonne direction, à condition qu'aucun texte ou élément asymétrique ne trahisse le miroir. Si rien ne marche, c'est qu'un repère structurel est cassé, et là, mieux vaut régénérer le plan fautif.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as généré deux plans qui, séparément, sont superbes. Tu les colles bout à bout dans ton montage, et là, malaise. La scène ne tient pas. Le regard part dans le mauvais sens, la lumière a sauté de côté, le personnage semble avoir changé de place. Tu ne sais pas exactement pourquoi, mais ton œil te dit que quelque chose cloche. Ce guide est fait pour ce moment précis, parce que ton problème n'est pas la qualité de tes plans, c'est le lien entre eux.",
    },
    {
      type: "p",
      text: "La promesse est simple : à la fin, tu sauras penser le raccord avant de générer, repérer les ruptures de continuité les plus fréquentes, et les réparer sans tout refaire. On parle de repères concrets, de gestes de montage, et de décisions que tu prends dès le storyboard.",
    },
    {
      type: "p",
      text: "C'est exactement ce qui sépare une suite de jolis plans d'une vraie scène que le spectateur suit sans effort. Et la bonne nouvelle, c'est que ce sont surtout des règles simples, une fois qu'on les a en tête.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Core Concepts : ce qu'est vraiment un raccord",
    },
    {
      type: "h3",
      id: "le-lien-pas-le-plan",
      text: "Le raccord, c'est le lien, pas le plan",
    },
    {
      type: "p",
      text: "Un raccord, c'est la relation entre la fin d'un plan et le début du suivant. Le spectateur ne voit pas deux images, il vit une continuité. Son cerveau relie automatiquement les plans s'ils respectent quelques repères, et décroche dès que ces repères se contredisent. En IA, c'est piégeux, parce que tu génères chaque plan isolément, et le modèle n'a aucune mémoire de ce que tu as fait au plan précédent.",
    },
    {
      type: "p",
      text: "Voilà pourquoi ça compte : tu peux empiler dix plans magnifiques et obtenir une scène illisible, parce que chacun a sa propre direction de lumière, sa propre échelle, son propre sens de mouvement. La qualité ne fait pas la continuité. C'est un travail séparé, et c'est lui qui transforme une compilation en scène.",
    },
    {
      type: "p",
      text: "Avant même de générer, pose ta micro-scène à plat. Cette étape est détaillée dans [notre méthode pour écrire une micro-scène avant de générer une vidéo IA](/blog/ecrire-micro-scene-avant-generer-video-ia), et c'est elle qui te dit où tes raccords vont se jouer.",
    },
    {
      type: "h3",
      id: "les-quatre-reperes",
      text: "Les quatre repères de continuité à verrouiller",
    },
    {
      type: "p",
      text: "La continuité tient sur quatre repères que ton œil surveille en permanence, sans que tu en aies conscience. Direction du regard, sens du mouvement, position de la lumière, échelle du sujet. Si ces quatre points restent cohérents entre deux plans, le raccord passe presque toujours. S'ils sautent, le raccord casse.",
    },
    {
      type: "p",
      text: "Pense-y comme un contrat passé avec le spectateur. Au premier plan, tu lui annonces où sont les choses, d'où vient la lumière, dans quel sens ça bouge. Au plan suivant, tu dois honorer ce contrat. Tu peux changer d'angle, de focale, de cadre, à condition de ne pas trahir ces repères de base.",
    },
    {
      type: "p",
      text: "Le plus violé de ces repères, c'est la direction du regard. Si ton personnage regarde vers la droite au plan A pour s'adresser à quelqu'un, il doit continuer à regarder vers la droite au plan B. S'il regarde soudain à gauche, le spectateur croit qu'un deuxième interlocuteur est apparu. Ce détail minuscule casse des scènes entières.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Practical Workflow : sécuriser un raccord, étape par étape",
    },
    {
      type: "h3",
      id: "decider-au-storyboard",
      text: "Étape 1, décider la continuité au storyboard",
    },
    {
      type: "p",
      text: "Le raccord se gagne avant la génération. Sur un croquis rapide, note pour chaque plan trois choses, le côté de la caméra par rapport à la ligne d'action, la direction des regards, et la position de la source de lumière. Tu n'as pas besoin de savoir dessiner, des flèches et des annotations suffisent. Ce mini-document devient ta référence pour écrire des prompts cohérents.",
    },
    {
      type: "table",
      caption: "Les types de raccords utiles et comment les obtenir en IA",
      headers: ["Type de raccord", "Effet sur le spectateur", "Comment l'obtenir en IA"],
      rows: [
        ["Raccord regard", "On suit ce que le personnage regarde", "Plan A regard orienté, plan B montre l'objet du regard, même direction"],
        ["Raccord mouvement", "Continuité fluide d'une action", "Même action décrite sur A et B, coupe pendant le geste"],
        ["Raccord dans l'axe", "Rapprochement net sur un sujet", "Même sujet et même angle, on change seulement la focale"],
        ["Champ contre-champ", "Dialogue entre deux personnages", "Garder la caméra du même côté de la ligne sur les deux plans"],
        ["Plan de coupe", "Respiration, masque un saut", "Détail ou environnement neutre intercalé entre deux plans"],
      ],
    },
    {
      type: "p",
      text: "Cette grille te donne un vocabulaire. Au lieu de générer des plans au hasard puis d'espérer qu'ils s'assemblent, tu choisis un type de raccord et tu génères pour lui. C'est une bascule mentale énorme pour la cohérence finale.",
    },
    {
      type: "h3",
      id: "prompts-coherents",
      text: "Étape 2, écrire des prompts qui partagent leurs ancres",
    },
    {
      type: "p",
      text: "Pour que deux plans se raccordent, ils doivent partager des ancres explicites. Concrètement, tu réutilises mot pour mot les éléments de continuité dans les deux prompts, même description de lumière, même garde-robe, même heure de la journée, même direction dominante. Tu ne laisses pas le modèle réinventer ces points à chaque génération.",
    },
    {
      type: "ol",
      items: [
        "Copie la description de lumière du plan A dans le plan B, sans la reformuler.",
        "Garde identiques garde-robe, coiffure et éléments de décor visibles sur les deux plans.",
        "Indique la direction du regard ou du mouvement de façon explicite dans chaque prompt.",
        "Ne change qu'une variable par plan, l'angle ou la focale, pour préserver le reste.",
        "Génère plusieurs essais et sélectionne ceux dont les ombres vont dans le même sens.",
      ],
    },
    {
      type: "p",
      text: "La cohérence du personnage lui-même est un sujet à part entière, surtout sur plusieurs plans. Si ton sujet change de visage ou de morphologie entre A et B, aucun raccord ne tiendra. Verrouille-le avec [notre système pour stabiliser un personnage sur plusieurs plans](/blog/stabilite-personnage-multi-plans) avant de te soucier du reste.",
    },
    {
      type: "p",
      text: "> Pro Tip : avant de monter, affiche tes deux plans côte à côte et trace mentalement le sens des ombres et des regards. Si une flèche s'inverse, tu tiens ton faux raccord, corrige-le avant le montage, pas après.",
    },
    {
      type: "h3",
      id: "couper-au-bon-endroit",
      text: "Étape 3, couper au bon endroit",
    },
    {
      type: "p",
      text: "Le point de coupe change tout. La règle la plus fiable, c'est de couper sur une action. Quand un geste est en cours, tête qui tourne, main qui se lève, pas qui se pose, l'œil est occupé par le mouvement et pardonne les petites différences entre les deux plans. À l'inverse, couper sur deux plans statiques expose la moindre incohérence.",
    },
    {
      type: "p",
      text: "Si deux plans refusent de se raccorder malgré tes efforts, n'insiste pas en force. Intercale un plan de coupe, un détail, un objet, un bout de décor, qui casse la comparaison directe et redonne de la respiration. C'est une technique de monteur classique, et elle sauve énormément de séquences IA.",
    },
    {
      type: "p",
      text: "Pour comprendre comment ces décisions s'inscrivent dans une vraie planification de séquence, regarde [notre méthode concrète pour créer un storyboard IA utilisable](/blog/creer-storyboard-ia). Le storyboard, c'est là que tu décides tes points de coupe avant qu'ils ne te coûtent cher.",
    },
    {
      type: "p",
      text: "Pour aller plus loin sur la théorie du montage et la continuité, garde en référence la page [Continuity editing sur Wikipédia](https://en.wikipedia.org/wiki/Continuity_editing), utile pour mettre des noms sur des réflexes que tu as déjà.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "The Trench Warfare Section : les faux raccords qui cassent tout",
    },
    {
      type: "h3",
      id: "erreur-regard",
      text: "Erreur 1, le regard qui change de côté",
    },
    {
      type: "p",
      text: "Le plus fréquent et le plus destructeur. Ton personnage regarde à droite au plan A, puis à gauche au plan B. Sans le vouloir, tu fais croire à un deuxième interlocuteur, ou tu désorientes complètement le spectateur. La scène perd sa géographie en une coupe.",
    },
    {
      type: "p",
      text: "Fix concret : décide la direction du regard au storyboard et écris-la dans chaque prompt. Si le plan généré regarde du mauvais côté, tu peux parfois l'inverser horizontalement au montage, à condition qu'aucun texte ni élément asymétrique ne trahisse le miroir. Sinon, régénère ce plan précis avec la bonne direction.",
    },
    {
      type: "h3",
      id: "erreur-lumiere",
      text: "Erreur 2, la lumière qui saute de côté",
    },
    {
      type: "p",
      text: "Au plan A, la lumière vient de la gauche, le visage est éclairé à gauche, ombré à droite. Au plan B, c'est l'inverse. Le spectateur ne saura pas l'expliquer, mais il sentira que les deux plans n'appartiennent pas à la même scène. C'est un des défauts les plus immédiats à l'œil.",
    },
    {
      type: "p",
      text: "Fix concret : ne décris jamais la lumière vaguement. Réutilise la même phrase exacte de source lumineuse sur les deux plans, et vérifie le sens des ombres avant de monter. Si elles divergent, retiens le plan dont l'éclairage correspond à la majorité de ta scène et régénère l'autre.",
    },
    {
      type: "p",
      text: "> Pro Tip : choisis une direction de lumière dominante pour toute la scène dès le départ, et impose-la à chaque plan. Une scène avec une seule logique de lumière paraît instantanément plus pro.",
    },
    {
      type: "h3",
      id: "erreur-echelle",
      text: "Erreur 3, le saut d'échelle brutal",
    },
    {
      type: "p",
      text: "Tu enchaînes deux plans presque identiques en taille, ou tu sautes d'un très gros plan à un plan large sans transition logique. Dans le premier cas, ça donne un jump cut qui saute désagréablement. Dans le second, le spectateur perd ses repères spatiaux d'un coup.",
    },
    {
      type: "p",
      text: "Fix concret : respecte une différence d'échelle nette mais lisible entre deux plans successifs sur le même sujet, et garde le même angle si tu veux un raccord dans l'axe. Si tu dois passer du gros plan au large, intercale un plan intermédiaire ou un plan de coupe pour accompagner le changement.",
    },
    {
      type: "h3",
      id: "erreur-rythme",
      text: "Erreur 4, oublier le rythme du raccord",
    },
    {
      type: "p",
      text: "Un raccord, ce n'est pas qu'une affaire de cohérence spatiale, c'est aussi une affaire de tempo. Garder un plan trop longtemps après l'action principale, ou couper trop tôt avant que l'œil ait lu l'image, casse la fluidité même si la continuité visuelle est parfaite.",
    },
    {
      type: "p",
      text: "Fix concret : coupe quand l'information du plan est lue, ni avant, ni longtemps après. Une bonne habitude, regarde ta séquence sans le son et demande-toi à chaque coupe si elle arrive au bon moment. Si une coupe attire l'attention sur elle-même, c'est qu'elle est mal placée.",
    },
    {
      type: "p",
      text: "Quand tu travailles comme ça, en décidant la continuité avant de générer et en coupant sur l'action, tes plans cessent d'être une collection. Ils deviennent une scène que le spectateur traverse sans jamais se demander pourquoi quelque chose cloche. C'est ça, un raccord réussi.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions (FAQ)",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Pourquoi mes deux plans IA ne se raccordent pas, alors qu'ils sont beaux ?",
    },
    {
      type: "p",
      text: "Parce que la beauté d'un plan isolé ne dit rien de sa relation au plan suivant. Le raccord dépend de la continuité, direction du regard, sens du mouvement, position de la lumière, échelle du sujet. Si ces repères changent d'un plan à l'autre, le cerveau du spectateur perd la scène, même avec deux images magnifiques. Tu dois penser le lien entre les plans avant de penser le rendu de chaque plan.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "C'est quoi la règle des 180 degrés, version simple ?",
    },
    {
      type: "p",
      text: "Imagine une ligne invisible entre tes deux personnages, ou entre le sujet et son point d'intérêt. Tant que ta caméra reste du même côté de cette ligne, la gauche reste à gauche et la droite reste à droite, le spectateur garde ses repères. Si tu traverses la ligne entre deux plans, les personnages semblent inverser leurs positions et la scène devient désorientante. En IA, fixe ce côté dès le storyboard, car le modèle ne le gère pas pour toi.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Comment garder la même lumière entre deux plans générés séparément ?",
    },
    {
      type: "p",
      text: "Décris la source de lumière de façon identique et explicite dans les deux prompts, même direction, même intensité, même température. Ne te contente pas de cinematic lighting, écris fenêtre latérale à gauche, lumière chaude de fin de journée. Ensuite vérifie le sens des ombres sur les deux plans avant de monter. Si une ombre passe de gauche à droite entre deux plans, le raccord casse, et aucune transition ne le rattrapera proprement.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le raccord dans le mouvement, comment ça marche en IA ?",
    },
    {
      type: "p",
      text: "Le raccord dans le mouvement consiste à couper pendant une action et à la prolonger sur le plan suivant. Quelqu'un commence à tourner la tête sur le plan A, le plan B reprend ce mouvement en cours. En IA, génère les deux plans avec la même action décrite, puis coupe au montage au point où le geste est le plus lisible. Ce type de coupe masque les micro-différences et donne une impression de continuité très forte.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il un storyboard pour réussir ses raccords ?",
    },
    {
      type: "p",
      text: "Oui, au moins un storyboard léger. Le raccord se décide avant la génération, pas après. Un simple croquis qui note le côté de la caméra, la direction des regards et la position de la lumière t'évite de découvrir un faux raccord au montage, quand il est trop tard. Le storyboard est l'endroit où tu sécurises la continuité pendant que c'est encore gratuit de corriger.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment réparer un faux raccord sans tout régénérer ?",
    },
    {
      type: "p",
      text: "Tu as quelques options avant la régénération. Tu peux insérer un plan de coupe neutre, détail, objet, environnement, qui casse la comparaison directe entre les deux plans problématiques. Tu peux aussi recadrer ou inverser horizontalement un plan pour récupérer la bonne direction, à condition qu'aucun texte ou élément asymétrique ne trahisse le miroir. Si rien ne marche, c'est qu'un repère structurel est cassé, et là, mieux vaut régénérer le plan fautif.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-16 -->
