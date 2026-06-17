import type { Article } from "@/lib/types/article";

export const promptStructure4BlocsIa: Article = {
  title: "Le prompt structuré : sujet, décor, lumière, caméra",
  slug: "prompt-structure-4-blocs-ia",
  description:
    "Arrête d'empiler les mots-clés au hasard. La méthode des 4 blocs (sujet, décor, lumière, caméra) pour écrire un prompt image IA clair, testable et reproductible.",
  excerpt:
    "Un bon prompt n'est pas une liste de mots magiques, c'est une structure. Voici la méthode des 4 blocs pour reprendre le contrôle.",
  category: "prompting",
  tags: ["prompt structuré", "méthode prompt", "prompt image IA"],
  date: "2026-06-16",
  updatedAt: "2026-06-16",
  readingTime: 19,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompt-structure-4-blocs-ia.webp",
  imageAlt:
    "Méthode du prompt structuré en quatre blocs pour l'image IA, rendu cinématique avec sujet net, décor en profondeur et lumière motivée",
  keywords: [
    "prompt structuré",
    "méthode prompt IA",
    "structure de prompt image",
    "écrire un prompt image IA",
    "prompt sujet décor lumière caméra",
  ],
  relatedSlugs: [
    "prompt-image-ia-cinema",
    "prompt-negatif-ia-images-propres",
    "decrire-lumiere-prompt-ia",
  ],
  faq: [
    {
      question: "Pourquoi structurer mon prompt plutôt qu'écrire au feeling ?",
      answer:
        "Parce qu'un prompt au feeling n'est pas testable. Quand tu empiles des mots sans ordre, tu ne sais jamais lequel a produit le résultat, ni lequel a cassé l'image. Une structure en blocs te donne des leviers indépendants, tu changes la lumière sans toucher au sujet, le décor sans toucher à la caméra. Tu passes du hasard à une vraie démarche d'ingénieur, et tes améliorations deviennent reproductibles d'un projet à l'autre.",
    },
    {
      question: "Dans quel ordre placer les 4 blocs ?",
      answer:
        "L'ordre recommandé est sujet, décor, lumière, caméra. Tu commences par le plus important pour le modèle, le sujet, puis tu poses son environnement, ensuite tu éclaires la scène, et enfin tu choisis comment tu la filmes. Cet ordre suit la logique d'un vrai tournage et aide le modèle à hiérarchiser. Ce n'est pas une règle absolue, mais tant que tu débutes, garde-le stable pour pouvoir comparer tes tests.",
    },
    {
      question: "Faut-il remplir les 4 blocs à chaque fois ?",
      answer:
        "Idéalement oui, même brièvement. Un bloc vide, c'est une décision que tu laisses au modèle, et il prendra une moyenne générique. Tu n'es pas obligé d'écrire un paragraphe par bloc, une ligne précise suffit. Mais si tu omets la lumière, tu obtiendras une lumière au hasard, et si tu omets la caméra, tu perdras le contrôle de la profondeur et du cadrage. Quatre lignes nettes valent mieux qu'un long bloc unique.",
    },
    {
      question: "Comment savoir quel bloc est responsable d'un défaut ?",
      answer:
        "Tu changes un seul bloc à la fois, à seed fixe. Si l'image s'améliore, le bloc que tu viens de modifier contenait le problème. Cette méthode d'isolement est tout l'intérêt de la structure, elle transforme une image ratée en diagnostic clair. Sans structure, tu modifies dix choses d'un coup et tu ne sais jamais ce qui a marché. Avec elle, chaque test t'apprend quelque chose de réutilisable.",
    },
    {
      question: "Cette méthode marche-t-elle pour la vidéo IA aussi ?",
      answer:
        "Oui, en ajoutant un cinquième repère, le mouvement. La logique reste la même, sujet, décor, lumière, caméra, plus une ligne pour décrire le mouvement de caméra ou l'action. La structure aide encore plus en vidéo, parce que l'instabilité y est plus forte, et qu'isoler une variable à la fois est le seul moyen de comprendre d'où vient un défaut temporel. Garde les blocs courts et motivés.",
    },
    {
      question: "Un prompt structuré doit-il être long ?",
      answer:
        "Non. Structuré ne veut pas dire long. Au contraire, la structure te permet d'être plus court, parce que chaque mot a une fonction claire. Quatre lignes précises battent un paragraphe de cinquante adjectifs. Si tu n'arrives plus à expliquer pourquoi un mot est là, c'est qu'il est en trop. La structure est un outil de clarté, pas une excuse pour en rajouter.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu connais ce moment où tu écris un prompt de plus en plus long, en ajoutant des mots à chaque essai, masterpiece, ultra detailed, cinematic, 8k, et où le résultat ne s'améliore pas vraiment, parfois empire. C'est le signe classique d'un prompt sans structure. Tu empiles, tu espères, tu subis. Ce guide te donne une méthode simple pour reprendre le contrôle, la structure en quatre blocs, sujet, décor, lumière, caméra.",
    },
    {
      type: "p",
      text: "La promesse est concrète : à la fin, tu sauras écrire un prompt clair, court, et surtout testable, où chaque partie a un rôle précis. Tu pourras diagnostiquer tes images ratées au lieu de les subir, et reproduire tes réussites d'un projet à l'autre.",
    },
    {
      type: "p",
      text: "Pas de liste secrète de mots magiques. Juste une façon d'organiser ta pensée que les vrais métiers de l'image utilisent depuis toujours, adaptée à l'IA.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Core Concepts : pourquoi la structure bat l'empilement",
    },
    {
      type: "h3",
      id: "le-prompt-comme-decision",
      text: "Un prompt, c'est une suite de décisions",
    },
    {
      type: "p",
      text: "Un prompt n'est pas une incantation, c'est une suite de décisions visuelles. Qui est le sujet, où se trouve-t-il, comment est-il éclairé, comment est-il filmé. Quand tu écris au hasard, tu prends ces décisions implicitement, en désordre, et tu en oublies. Le modèle comble alors les trous par une moyenne, ce qui donne ce fameux rendu générique que tout le monde reconnaît.",
    },
    {
      type: "p",
      text: "Voilà pourquoi ça compte : chaque décision que tu ne prends pas, le modèle la prend à ta place, et il la prend mal, parce qu'il vise le consensus. La structure en blocs te force à prendre ces décisions consciemment, une par une. C'est exactement la différence entre un amateur qui mitraille et un pro qui cadre.",
    },
    {
      type: "p",
      text: "Si tu veux comprendre la mécanique fine derrière la longueur et le dosage des prompts, croise cette méthode avec [notre guide du prompt négatif pour des images propres](/blog/prompt-negatif-ia-images-propres). La structure et la concision se renforcent.",
    },
    {
      type: "h3",
      id: "quatre-blocs",
      text: "Les quatre blocs, expliqués simplement",
    },
    {
      type: "p",
      text: "Le bloc sujet décrit qui ou quoi est au centre, avec ses attributs essentiels, âge, expression, posture, matière des vêtements. Le bloc décor pose l'environnement et la profondeur, intérieur ou extérieur, époque, éléments d'arrière-plan. Le bloc lumière définit la source principale, sa direction, son intensité, sa température. Le bloc caméra choisit la focale, l'angle, la distance, la profondeur de champ.",
    },
    {
      type: "p",
      text: "Pense-y comme une équipe de tournage. Le sujet, c'est l'acteur. Le décor, c'est le chef décorateur. La lumière, c'est le chef opérateur. La caméra, c'est le cadreur. Chacun a un métier distinct, et tu ne mélanges pas leurs rôles. Quand ton prompt respecte cette séparation, le modèle comprend mieux ce que tu veux.",
    },
    {
      type: "p",
      text: "La force de cette séparation, c'est qu'elle rend chaque bloc indépendant. Tu peux changer la lumière sans toucher au sujet, ou la focale sans toucher au décor. Cette indépendance est ce qui rend ton travail testable, et donc améliorable.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Practical Workflow : écrire et tester un prompt en 4 blocs",
    },
    {
      type: "h3",
      id: "ecrire-les-blocs",
      text: "Étape 1, écrire un bloc à la fois",
    },
    {
      type: "p",
      text: "Tu écris tes quatre blocs sur quatre lignes distinctes, une phrase courte par bloc. Résiste à l'envie de tout fusionner. La séparation visuelle t'aide à repérer ce qui manque, un bloc vide saute aux yeux, alors qu'il se cache dans un paragraphe unique.",
    },
    {
      type: "table",
      caption: "Les 4 blocs, ce qu'ils contiennent et l'erreur à éviter",
      headers: ["Bloc", "Ce qu'il décrit", "Exemple court", "Erreur fréquente"],
      rows: [
        ["Sujet", "Qui ou quoi, attributs clés", "Femme 30 ans, veste en cuir usée, regard déterminé", "Adjectifs vagues, beau, parfait"],
        ["Décor", "Lieu, époque, profondeur", "Ruelle urbaine pluvieuse, nuit, néons lointains", "Décor absent ou contradictoire"],
        ["Lumière", "Source, direction, température", "Lumière latérale froide, reflets humides", "Cinematic lighting sans direction"],
        ["Caméra", "Focale, angle, profondeur", "50mm, légère contre-plongée, faible profondeur de champ", "Aucune indication, perte de contrôle"],
      ],
    },
    {
      type: "p",
      text: "Regarde la dernière colonne. Ce sont les erreurs qui transforment un prompt structuré en bouillie. Un mot vague comme beau dans le bloc sujet, ou cinematic lighting sans direction dans le bloc lumière, et tu rouvres la porte au générique. La structure ne protège que si tu remplis chaque bloc avec des informations concrètes.",
    },
    {
      type: "h3",
      id: "tester-bloc-par-bloc",
      text: "Étape 2, tester en isolant un bloc",
    },
    {
      type: "p",
      text: "C'est ici que la structure paie. Pour améliorer une image, tu ne touches qu'un bloc à la fois, à seed fixe, et tu compares. Cette discipline transforme chaque test en information exploitable.",
    },
    {
      type: "ol",
      items: [
        "Génère une version de base avec tes quatre blocs remplis et note la seed.",
        "Modifie uniquement le bloc lumière, régénère à seed identique, compare.",
        "Reviens à la base, modifie uniquement le bloc caméra, régénère, compare.",
        "Conserve les variations qui améliorent, écarte celles qui dégradent.",
        "Reconstitue ton meilleur prompt final en combinant les blocs gagnants.",
      ],
    },
    {
      type: "p",
      text: "Une fois ta structure propre, le nettoyage final passe souvent par le prompt négatif, mais avec parcimonie. Pour ne pas dégrader ce que tu viens de construire, applique [notre méthode sur le prompt négatif](/blog/prompt-negatif-ia-images-propres), qui t'évite d'enlever par réflexe ce qui faisait la qualité de l'image.",
    },
    {
      type: "p",
      text: "> Pro Tip : garde un fichier de tes meilleurs blocs validés, par catégorie. Avec le temps, tu te constitues une bibliothèque de blocs lumière et caméra réutilisables, et tu écris tes prompts deux fois plus vite.",
    },
    {
      type: "h3",
      id: "adapter-au-projet",
      text: "Étape 3, adapter la structure à ton style",
    },
    {
      type: "p",
      text: "La structure de base couvre la majorité des cas, mais tu peux l'enrichir d'un cinquième bloc selon ton besoin, ambiance ou mouvement par exemple. L'important n'est pas le nombre de blocs, c'est de garder des compartiments distincts et nommés, pour conserver le diagnostic possible.",
    },
    {
      type: "p",
      text: "Pour voir cette logique appliquée à un rendu franchement cinématographique, avec des exemples de focales et d'ambiances, regarde [notre guide complet sur le prompt image cinéma](/blog/prompt-image-ia-cinema). Tu y verras la structure prendre vie sur des cas concrets.",
    },
    {
      type: "p",
      text: "Pour approfondir le vocabulaire de la prise de vue, notamment les focales et leur effet sur la perception, garde en référence la page [Focal length sur Wikipédia](https://en.wikipedia.org/wiki/Focal_length), utile pour remplir ton bloc caméra avec justesse.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "The Trench Warfare Section : ce qui casse un prompt structuré",
    },
    {
      type: "h3",
      id: "erreur-fusion",
      text: "Erreur 1, fusionner tous les blocs",
    },
    {
      type: "p",
      text: "Tu connais la structure, mais tu écris quand même tout d'une traite, en une longue phrase. Résultat, tu perds la capacité d'isoler les variables, et tu retombes dans l'empilement. La structure n'existe que si elle reste visible dans ton prompt.",
    },
    {
      type: "p",
      text: "Fix concret : garde tes blocs sur des lignes séparées, même en production. La séparation visuelle est ce qui te permet de modifier un bloc proprement. Si ton outil n'aime pas les retours à la ligne, sépare au moins par des virgules nettes et un ordre constant.",
    },
    {
      type: "h3",
      id: "erreur-bloc-lumiere",
      text: "Erreur 2, négliger le bloc lumière",
    },
    {
      type: "p",
      text: "C'est le bloc le plus souvent bâclé. Les débutants écrivent cinematic lighting ou beautiful light et croient avoir fait le travail. Mais sans direction ni source physique, le modèle improvise, et tu obtiens des reflets incohérents et des volumes plats.",
    },
    {
      type: "p",
      text: "Fix concret : décris toujours une source précise, fenêtre latérale à gauche, lampe chaude au-dessus, soleil rasant de fin de journée. La lumière est ce qui donne le relief et la crédibilité, c'est le bloc qui sépare une image plate d'une image qui respire.",
    },
    {
      type: "p",
      text: "> Pro Tip : si une seule chose doit être précise dans ton prompt, c'est la lumière. Un sujet banal bien éclairé bat un beau sujet mal éclairé, à chaque fois.",
    },
    {
      type: "h3",
      id: "erreur-camera-absente",
      text: "Erreur 3, oublier le bloc caméra",
    },
    {
      type: "p",
      text: "Sans bloc caméra, tu laisses le modèle choisir la focale et la profondeur. Tu obtiens souvent une image plate, sans profondeur de champ, qui crie image générée. Le bloc caméra est ce qui apporte le langage cinématographique, le bokeh, la compression d'un téléobjectif, l'immersion d'un grand angle.",
    },
    {
      type: "p",
      text: "Fix concret : indique systématiquement une focale et une indication de profondeur de champ, par exemple 85mm, faible profondeur de champ, arrière-plan adouci. Ce simple ajout suffit souvent à faire basculer une image du côté pro.",
    },
    {
      type: "h3",
      id: "erreur-trop-de-blocs",
      text: "Erreur 4, multiplier les blocs à l'infini",
    },
    {
      type: "p",
      text: "À l'inverse, certains s'emballent et créent dix blocs, ambiance, émotion, style, époque, palette, texture, et finissent par se contredire. Trop de compartiments tue la clarté autant que pas de structure du tout.",
    },
    {
      type: "p",
      text: "Fix concret : reste sur quatre blocs, cinq au maximum. Si une information ne rentre nulle part, c'est souvent qu'elle est secondaire, ou qu'elle appartient déjà à un bloc existant. La discipline, c'est aussi de savoir ce qu'on n'écrit pas.",
    },
    {
      type: "p",
      text: "Quand tu travailles en blocs séparés et testables, tu arrêtes de prier pour un bon résultat. Tu construis, tu mesures, tu ajustes. Et surtout, tu comprends enfin pourquoi une image marche, ce qui est la seule façon de progresser vraiment.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Pourquoi structurer mon prompt plutôt qu'écrire au feeling ?",
    },
    {
      type: "p",
      text: "Parce qu'un prompt au feeling n'est pas testable. Quand tu empiles des mots sans ordre, tu ne sais jamais lequel a produit le résultat, ni lequel a cassé l'image. Une structure en blocs te donne des leviers indépendants, tu changes la lumière sans toucher au sujet, le décor sans toucher à la caméra. Tu passes du hasard à une vraie démarche d'ingénieur, et tes améliorations deviennent reproductibles d'un projet à l'autre.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Dans quel ordre placer les 4 blocs ?",
    },
    {
      type: "p",
      text: "L'ordre recommandé est sujet, décor, lumière, caméra. Tu commences par le plus important pour le modèle, le sujet, puis tu poses son environnement, ensuite tu éclaires la scène, et enfin tu choisis comment tu la filmes. Cet ordre suit la logique d'un vrai tournage et aide le modèle à hiérarchiser. Ce n'est pas une règle absolue, mais tant que tu débutes, garde-le stable pour pouvoir comparer tes tests.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Faut-il remplir les 4 blocs à chaque fois ?",
    },
    {
      type: "p",
      text: "Idéalement oui, même brièvement. Un bloc vide, c'est une décision que tu laisses au modèle, et il prendra une moyenne générique. Tu n'es pas obligé d'écrire un paragraphe par bloc, une ligne précise suffit. Mais si tu omets la lumière, tu obtiendras une lumière au hasard, et si tu omets la caméra, tu perdras le contrôle de la profondeur et du cadrage. Quatre lignes nettes valent mieux qu'un long bloc unique.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Comment savoir quel bloc est responsable d'un défaut ?",
    },
    {
      type: "p",
      text: "Tu changes un seul bloc à la fois, à seed fixe. Si l'image s'améliore, le bloc que tu viens de modifier contenait le problème. Cette méthode d'isolement est tout l'intérêt de la structure, elle transforme une image ratée en diagnostic clair. Sans structure, tu modifies dix choses d'un coup et tu ne sais jamais ce qui a marché. Avec elle, chaque test t'apprend quelque chose de réutilisable.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Cette méthode marche-t-elle pour la vidéo IA aussi ?",
    },
    {
      type: "p",
      text: "Oui, en ajoutant un cinquième repère, le mouvement. La logique reste la même, sujet, décor, lumière, caméra, plus une ligne pour décrire le mouvement de caméra ou l'action. La structure aide encore plus en vidéo, parce que l'instabilité y est plus forte, et qu'isoler une variable à la fois est le seul moyen de comprendre d'où vient un défaut temporel. Garde les blocs courts et motivés.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Un prompt structuré doit-il être long ?",
    },
    {
      type: "p",
      text: "Non. Structuré ne veut pas dire long. Au contraire, la structure te permet d'être plus court, parce que chaque mot a une fonction claire. Quatre lignes précises battent un paragraphe de cinquante adjectifs. Si tu n'arrives plus à expliquer pourquoi un mot est là, c'est qu'il est en trop. La structure est un outil de clarté, pas une excuse pour en rajouter.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-16 -->
