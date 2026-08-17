import type { Article } from "@/lib/types/article";

export const creerPlanVideoIaImaginode: Article = {
  title: "Créer un plan vidéo IA de A à Z sur Imaginode",
  slug: "creer-plan-video-ia-imaginode",
  description:
    "Tutoriel complet : construire un plan vidéo IA sur le canvas Imaginode, du node Texte au node Vidéo, avec caméra, référence produit et coûts en crédits.",
  excerpt:
    "Un brief dans un node Texte, une photo de référence, des réglages caméra, et un plan produit qui sort en vidéo. La méthode complète sur un canvas à nodes, coûts réels et limites comprises.",
  category: "workflow-creatif",
  tags: ["Imaginode", "canvas à nodes", "workflow vidéo", "plan produit", "vidéo IA"],
  date: "2026-08-21",
  updatedAt: "2026-08-21",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/creer-plan-video-ia-imaginode.webp",
  imageAlt:
    "Visuel Imaginode montrant des nodes texte, image et vidéo reliés entre eux autour de la mascotte, le principe du canvas à nodes",
  keywords: [
    "plan vidéo ia",
    "imaginode",
    "canvas ia",
    "canvas à nodes",
    "workflow vidéo ia",
  ],
  relatedSlugs: [
    "workflow-ia-creatif",
    "comfyui-workflow-nodal-debutant",
    "creer-storyboard-ia",
  ],
  faq: [
    {
      question: "Qu'est-ce qu'Imaginode exactement ?",
      answer:
        "Un canvas à nodes en ligne pour générer des images et des vidéos IA. Tu poses des nodes (Texte, Image, Vidéo, Média, Caméra), tu les relies, et chaque node fait une seule chose. Les générations passent par 26 modèles (Flux, Nano Banana, Kling, Seedance, Veo 3.1 et d'autres), le tout dans le navigateur, avec sauvegarde automatique du projet. C'est mon outil : je l'ai construit parce que je passais mes journées à jongler entre générateurs.",
    },
    {
      question: "Combien coûte une génération sur Imaginode ?",
      answer:
        "Tout fonctionne en crédits : 1 crédit vaut environ 0,01 euro. Le coût exact s'affiche sur le node avant de cliquer sur Générer, donc pas de surprise. Ordre de grandeur au moment où j'écris : une image tourne autour de 5 à 10 crédits selon le modèle, un clip vidéo de 5 secondes autour de 25 à 50 crédits, un plan Veo 3.1 de 8 secondes avec audio autour de 145 crédits. Si une génération échoue, les crédits sont remboursés automatiquement.",
    },
    {
      question: "Est-ce qu'il y a un essai gratuit sur Imaginode ?",
      answer:
        "Non, il n'y a pas de crédits gratuits. Les offres démarrent à 13 euros HT par mois (Starter, 900 crédits), puis 42 euros HT (Créateur, 3 100 crédits) et 145 euros HT (Studio, 10 500 crédits). En contrepartie, le coût de chaque génération est affiché avant de lancer, et un échec est remboursé. Tu sais toujours ce que tu dépenses.",
    },
    {
      question: "Quels modèles peut-on utiliser sur Imaginode ?",
      answer:
        "26 modèles d'image et de vidéo au moment où j'écris. Côté image : la famille Flux (Schnell, Pro, Kontext), Nano Banana, Seedream, Imagen, Recraft entre autres. Côté vidéo : Kling 2.5 Turbo et Kling V3, Seedance, Veo 3.1 Lite et Fast, Wan, MiniMax. Tu choisis le modèle directement dans le node Image ou Vidéo, avec son coût affiché à côté.",
    },
    {
      question: "Quelle différence entre Imaginode et ComfyUI ?",
      answer:
        "La logique nodale est la même, le public visé non. ComfyUI est gratuit, open source, tourne sur ta machine et te donne accès aux entrailles des modèles, au prix d'une vraie courbe d'apprentissage et d'un GPU costaud. Imaginode tourne dans le navigateur, les nodes sont des étapes de production (brief, référence, caméra, image, vidéo) et pas des opérations techniques. L'un est un atelier de mécanique, l'autre un plateau de tournage.",
    },
    {
      question: "Peut-on utiliser ses propres images comme référence ?",
      answer:
        "Oui, c'est le rôle du node Média : tu y déposes une photo ou une vidéo, et tu le relies à un node Image ou Vidéo pour que le modèle s'en serve de référence. C'est la base du workflow produit décrit dans cet article : la photo réelle de ton produit garantit que le rendu final montre bien TON produit, pas une invention du modèle.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu connais la boucle : tu génères une image dans un outil, tu la télécharges, tu la réimportes dans un deuxième pour l'animer, tu perds ton prompt en route, et au troisième aller-retour tu ne sais plus quelle version était la bonne. Pour un seul plan vidéo, tu as ouvert quatre onglets et un dossier de téléchargements en vrac.",
    },
    {
      type: "p",
      text: "À la fin de ce tutoriel, tu sauras construire un plan vidéo complet sur un canvas à nodes : le brief dans un node Texte, la photo de référence dans un node Média, le cadrage dans un node Caméra, la keyframe dans un node Image, le mouvement dans un node Vidéo. Avec un cas concret suivi du début à la fin : un plan cinématique pour un flacon de parfum.",
    },
    {
      type: "p",
      text: "Une précision avant de commencer, et je préfère l'assumer dès la deuxième ligne plutôt que de jouer les testeurs neutres : Imaginode, c'est mon outil. Je l'ai construit précisément à cause de la boucle décrite plus haut. Je te montre ma méthode, les coûts réels, et les limites du produit sans les maquiller.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Un canvas à nodes, c'est ton plan de tournage devenu machine",
    },
    {
      type: "h3",
      id: "un-node-une-decision",
      text: "Chaque node prend une seule décision, et c'est ça qui change tout",
    },
    {
      type: "p",
      text: "Sur [Imaginode](https://imaginode.ai), un projet est un canvas : une grande surface où tu poses des blocs (les nodes) et où tu les relies par des fils. Un node Texte contient ton prompt. Un node Image génère une image à partir de ce qui lui arrive. Un node Vidéo anime une image. Un node Média héberge un fichier à toi. Un node Caméra impose un cadrage. Chaque bloc prend une seule décision, et le fil transporte cette décision vers le bloc suivant.",
    },
    {
      type: "p",
      text: "L'intérêt saute aux yeux dès la première itération. Dans un workflow classique multi-outils, changer le cadrage d'un plan veut dire réécrire le prompt entier et régénérer à l'aveugle. Sur un canvas, tu modifies le node Caméra, tout le reste ne bouge pas, et tu régénères uniquement le node d'après. Ton brief, ta référence produit et ton style restent en place. Le canvas garde la trace de tes choix là où les onglets les éparpillent.",
    },
    {
      type: "p",
      text: "Si tu as déjà touché à un outil nodal comme celui décrit dans notre guide [ComfyUI pour débutants](/blog/comfyui-workflow-nodal-debutant), le principe te sera familier, avec une différence de taille : ici les nodes correspondent à des étapes de production (brief, référence, cadrage, rendu), pas à des opérations techniques sur les modèles. Pas de checkpoint à charger, pas de VAE, pas de GPU à toi. Tout tourne dans le navigateur.",
    },
    {
      type: "h3",
      id: "node-camera",
      text: "Le node Caméra : des réglages de chef opérateur injectés dans le prompt",
    },
    {
      type: "p",
      text: "C'est le node que je te conseille d'apprivoiser en premier. Tu y choisis un type de plan (du très gros plan au plan large), une focale de 14 à 135 mm, une ouverture de f/1.4 à f/16, un angle et un mouvement (dolly avant, orbite autour du sujet, caméra épaule, zoom lent). Ces réglages sont traduits en vocabulaire cinématographique et injectés automatiquement dans le prompt de chaque node Image ou Vidéo connecté.",
    },
    {
      type: "p",
      text: "Concrètement : tu branches le même node Caméra sur trois plans différents, et les trois partagent la même focale et la même profondeur de champ. C'est exactement le problème de cohérence entre plans qu'on attaque à la main dans un prompt texte, sauf qu'ici la solution est un bloc réutilisable au lieu d'une phrase à recopier sans se tromper. Le jour où tu veux passer toute ta séquence du 35 mm au 85 mm, tu changes une valeur, pas huit prompts.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Le plan produit de A à Z : brief, référence, keyframe, mouvement",
    },
    {
      type: "p",
      text: "Le cas concret : un plan de 5 secondes pour un flacon de parfum, ambiance publicité de luxe, caméra qui orbite lentement autour du produit posé sur une surface sombre. Le genre de plan qu'une marque paie cher et qu'on va construire avec cinq nodes. Voici d'abord le rôle de chaque pièce.",
    },
    {
      type: "table",
      caption: "Les nodes d'Imaginode et leur rôle dans un plan vidéo",
      headers: ["Node", "Son rôle", "Dans notre exemple"],
      rows: [
        [
          "Texte",
          "Le prompt : sujet, matière, lumière, ambiance",
          "Le brief du flacon sur surface d'obsidienne",
        ],
        [
          "Média",
          "Ton fichier à toi, utilisé comme référence",
          "La photo réelle du flacon",
        ],
        [
          "Caméra",
          "Cadrage, focale, ouverture, angle, mouvement",
          "Plan rapproché, 85 mm, f/2.8, orbite lente",
        ],
        [
          "Image",
          "Génère la keyframe à partir des nodes connectés",
          "Le visuel validé avant d'animer",
        ],
        [
          "Vidéo",
          "Anime l'image, avec le mouvement de la caméra",
          "Le plan final de 5 secondes",
        ],
        [
          "Référence",
          "Nomme un élément réutilisable via @nom dans un prompt",
          "@flacon, rappelé dans les plans suivants",
        ],
        [
          "Style",
          "Un moodboard qui teinte les générations connectées",
          "La direction artistique de toute la série",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Crée un projet et pose un node Texte. Écris le brief comme une fiche de tournage, pas comme une phrase magique : « flacon de parfum en verre ambré posé sur une surface d'obsidienne noire, fine brume au ras du sol, lumière latérale chaude, fond sombre dégradé, ambiance publicité de luxe ». Sujet, matière, lumière, ambiance : quatre informations, aucun mot de remplissage.",
        "Pose un node Média et dépose la photo réelle de ton flacon. Relie-le au futur node Image. C'est l'étape que tout le monde saute et qui fait toute la différence : sans référence, le modèle invente un flacon générique. Avec, ton produit reste ton produit, étiquette comprise.",
        "Pose un node Caméra : plan rapproché, 85 mm, f/2.8, angle légèrement en contre-plongée. L'ouverture large crée la faible profondeur de champ qui détache le flacon du fond. Branche-le sur le node Image.",
        "Pose un node Image, relie-lui le Texte, le Média et la Caméra, puis choisis un modèle capable d'utiliser une image de référence, Nano Banana ou Flux Kontext par exemple. Le coût en crédits s'affiche sur le node avant de cliquer. Génère.",
        "Itère sur cette keyframe jusqu'à validation. Brume trop épaisse ? Tu ajustes le node Texte. Cadrage trop serré ? Le node Caméra. Le reste du canvas ne bouge pas, tu ne régénères que ce node. C'est ici que tu passes du temps, et c'est voulu : une image se corrige pour quelques crédits, une vidéo coûte cinq à vingt fois plus.",
        "Pose un node Vidéo, relie-lui l'Image validée et la Caméra (le mouvement d'orbite est injecté à ce moment-là). Pour les essais, un modèle rapide comme Kling 2.5 Turbo suffit, autour de 25 crédits les 5 secondes au moment où j'écris. Pour la version finale, passe sur un modèle premium comme Veo 3.1, plus cher mais nettement au-dessus sur la matière et la lumière.",
        "Récupère le plan dans ta bibliothèque (chaque génération y est archivée automatiquement) et monte-le avec le reste de ta séquence dans ton outil de montage habituel.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : ne supprime jamais une branche qui a produit un bon résultat, duplique-la. Le canvas est aussi ton historique : trois branches côte à côte avec trois focales différentes, c'est un comparatif instantané que tu montres au client, et la version validée reste prête à régénérer en haute qualité.",
    },
    {
      type: "p",
      text: "Reste la comparaison avec le workflow multi-outils classique, et elle mérite d'être faite sans tricher. Ce que le canvas ne change pas : les modèles. Kling sur Imaginode génère la même chose que Kling ailleurs, et si ton prompt est flou, il sera flou partout. Un plan raté à cause d'une lumière mal décrite se corrige avec la méthode de notre article sur [décrire la lumière dans un prompt](/blog/decrire-lumiere-prompt-ia), pas en changeant d'outil. Ce que le canvas change vraiment : zéro fichier baladé entre outils, un historique visuel de tes itérations, et des blocs réutilisables (caméra, style, références) qui tiennent la cohérence d'une série de plans. Sur un plan unique, le gain est confortable. Sur une séquence de dix plans, il est décisif.",
    },
    {
      type: "p",
      text: "Les limites réelles, maintenant. Imaginode ne monte pas : les plans s'assemblent ensuite dans CapCut, DaVinci ou Premiere, comme n'importe quel rush. Il n'y a pas de crédits gratuits, l'offre de départ est à 13 euros HT par mois, donc pas de bac à sable sans engagement. Et si ton besoin est de bidouiller les modèles en profondeur (LoRA maison, ControlNet, pipelines exotiques), un outil open source local reste le bon choix. Le canvas vise la production, pas la recherche. Les détails de chaque node sont dans la [documentation d'Imaginode](https://imaginode.ai/docs), et un assistant intégré peut te proposer un workflow complet à ajouter au canvas en un clic si tu ne veux pas partir d'une page blanche.",
    },
    {
      type: "p",
      text: "Dernier point de méthode : le canvas ne remplace pas la préparation. Un plan vidéo réussi commence avant le premier node, avec une intention et un découpage. Si cette étape te manque, notre méthode pour [créer un storyboard avec l'IA](/blog/creer-storyboard-ia) est le complément naturel de ce tutoriel : tu découpes d'abord, tu construis ton canvas ensuite, un groupe de nodes par plan.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les quatre erreurs qui plombent un premier canvas",
    },
    {
      type: "h3",
      id: "erreur-prompt-fourre-tout",
      text: "Erreur 1 : le prompt fourre-tout dans un seul node",
    },
    {
      type: "p",
      text: "Symptôme : ton node Texte contient le sujet, le cadrage, le mouvement de caméra, le style et trois consignes contradictoires. À chaque itération tu réécris tout, et tu ne sais jamais quelle modification a produit quel changement. Tu as recréé le chaos du prompt unique, mais sur un canvas.",
    },
    {
      type: "p",
      text: "Fix concret : une décision par node. Le sujet et la matière dans le Texte, le cadrage dans la Caméra, la direction artistique dans un node Style. Quand un rendu déçoit, tu sais immédiatement quel bloc ajuster, et tu ne régénères que la suite de la chaîne.",
    },
    {
      type: "h3",
      id: "erreur-video-sans-keyframe",
      text: "Erreur 2 : générer la vidéo avant d'avoir validé l'image",
    },
    {
      type: "p",
      text: "Symptôme : tu branches ton prompt directement sur un node Vidéo, le rendu est moyen, tu régénères, il est encore moyen. En quatre essais tu as dépensé de quoi produire vingt keyframes, pour un plan que tu n'aimes toujours pas.",
    },
    {
      type: "p",
      text: "Fix concret : la règle image d'abord, toujours. Une image se valide pour 5 à 10 crédits, un clip en coûte 25 à 150. Tu itères sur la keyframe jusqu'à ce qu'elle soit exactement bonne, et tu ne lances la vidéo qu'une fois sûr de ton image de départ. Le mouvement se juge en vidéo, mais la composition, la lumière et le produit se jugent sur l'image fixe.",
    },
    {
      type: "h3",
      id: "erreur-cadrage-manuel",
      text: "Erreur 3 : écrire le cadrage à la main dans chaque prompt",
    },
    {
      type: "p",
      text: "Symptôme : tes plans d'une même séquence n'ont pas l'air de sortir du même film. Un plan respire le 24 mm, le suivant tasse tout au téléobjectif, la profondeur de champ change sans raison. Normal : tu as décrit le cadrage avec des mots différents dans chaque prompt.",
    },
    {
      type: "p",
      text: "Fix concret : un seul node Caméra partagé par tous les plans de la séquence. Même focale, même ouverture, même hauteur de regard partout, et une seule valeur à changer le jour où la direction artistique évolue. Réserve les exceptions volontaires (un insert macro, une contre-plongée dramatique) à un deuxième node Caméra dédié.",
    },
    {
      type: "h3",
      id: "erreur-iterer-premium",
      text: "Erreur 4 : itérer sur le modèle le plus cher",
    },
    {
      type: "p",
      text: "Symptôme : tu fais tes essais directement sur le modèle vidéo premium parce que « autant voir tout de suite le rendu final ». Résultat, ton budget mensuel fond en une après-midi d'exploration, et il ne te reste rien pour produire la version définitive.",
    },
    {
      type: "p",
      text: "Fix concret : explore sur les modèles rapides, finalise sur le premium. Un Kling 2.5 Turbo à environ 25 crédits te dit très bien si ton mouvement d'orbite fonctionne ; le passage sur Veo 3.1 n'intervient qu'une fois le plan verrouillé. Même logique côté image entre un Flux Schnell pour dégrossir et un modèle haut de gamme pour la keyframe finale. Le coût affiché sur chaque node avant génération est là pour ça : regarde-le avant de cliquer, pas après. Et si tu veux structurer cette discipline à l'échelle d'une vraie production, notre méthode de [workflow IA créatif](/blog/workflow-ia-creatif) s'applique telle quelle sur un canvas.",
    },
    {
      type: "p",
      text: "Tu as maintenant la méthode complète : un node par décision, l'image validée avant la vidéo, la caméra partagée entre les plans, et les crédits dépensés au bon endroit. La suite logique, c'est d'enchaîner les plans en séquence qui raconte quelque chose, et ça, c'est exactement ce qu'on travaille pas à pas dans la [formation IA vidéo gratuite AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video), du storyboard au montage final.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Qu'est-ce qu'Imaginode exactement ?",
    },
    {
      type: "p",
      text: "Un canvas à nodes en ligne pour générer des images et des vidéos IA. Tu poses des nodes (Texte, Image, Vidéo, Média, Caméra), tu les relies, et chaque node fait une seule chose. Les générations passent par 26 modèles (Flux, Nano Banana, Kling, Seedance, Veo 3.1 et d'autres), le tout dans le navigateur, avec sauvegarde automatique du projet. C'est mon outil : je l'ai construit parce que je passais mes journées à jongler entre générateurs.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien coûte une génération sur Imaginode ?",
    },
    {
      type: "p",
      text: "Tout fonctionne en crédits : 1 crédit vaut environ 0,01 euro. Le coût exact s'affiche sur le node avant de cliquer sur Générer, donc pas de surprise. Ordre de grandeur au moment où j'écris : une image tourne autour de 5 à 10 crédits selon le modèle, un clip vidéo de 5 secondes autour de 25 à 50 crédits, un plan Veo 3.1 de 8 secondes avec audio autour de 145 crédits. Si une génération échoue, les crédits sont remboursés automatiquement.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Est-ce qu'il y a un essai gratuit sur Imaginode ?",
    },
    {
      type: "p",
      text: "Non, il n'y a pas de crédits gratuits. Les offres démarrent à 13 euros HT par mois (Starter, 900 crédits), puis 42 euros HT (Créateur, 3 100 crédits) et 145 euros HT (Studio, 10 500 crédits). En contrepartie, le coût de chaque génération est affiché avant de lancer, et un échec est remboursé. Tu sais toujours ce que tu dépenses.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Quels modèles peut-on utiliser sur Imaginode ?",
    },
    {
      type: "p",
      text: "26 modèles d'image et de vidéo au moment où j'écris. Côté image : la famille Flux (Schnell, Pro, Kontext), Nano Banana, Seedream, Imagen, Recraft entre autres. Côté vidéo : Kling 2.5 Turbo et Kling V3, Seedance, Veo 3.1 Lite et Fast, Wan, MiniMax. Tu choisis le modèle directement dans le node Image ou Vidéo, avec son coût affiché à côté.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Quelle différence entre Imaginode et ComfyUI ?",
    },
    {
      type: "p",
      text: "La logique nodale est la même, le public visé non. ComfyUI est gratuit, open source, tourne sur ta machine et te donne accès aux entrailles des modèles, au prix d'une vraie courbe d'apprentissage et d'un GPU costaud. Imaginode tourne dans le navigateur, les nodes sont des étapes de production (brief, référence, caméra, image, vidéo) et pas des opérations techniques. L'un est un atelier de mécanique, l'autre un plateau de tournage.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Peut-on utiliser ses propres images comme référence ?",
    },
    {
      type: "p",
      text: "Oui, c'est le rôle du node Média : tu y déposes une photo ou une vidéo, et tu le relies à un node Image ou Vidéo pour que le modèle s'en serve de référence. C'est la base du workflow produit décrit dans cet article : la photo réelle de ton produit garantit que le rendu final montre bien TON produit, pas une invention du modèle.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-21 -->
