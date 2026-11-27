import type { Article } from "@/lib/types/article";

export const grokImagineGuide: Article = {
  title: "Grok Imagine : quel modèle et à quel prix",
  slug: "grok-imagine-guide",
  description:
    "Les six modèles de Grok Imagine, leurs prix officiels à l'image et à la seconde, et la méthode pour chiffrer une séquence avant la première génération.",
  excerpt:
    "Derrière le nom Grok Imagine, xAI facture six modèles différents, de 0,02 à 0,08 dollar l'unité. Savoir lequel tourne à quelle étape change le coût d'une séquence par quatre.",
  category: "ia-video",
  tags: ["Grok", "xAI", "Génération vidéo", "Génération d'images", "Budget"],
  date: "2026-10-03",
  updatedAt: "2026-10-03",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/grok-imagine-guide.webp",
  imageAlt:
    "Sur un toit-terrasse en plein soleil de midi, une femme en chapeau de paille et chemise en jean sans manches tend une tablette à bout de bras pour aligner la grille de vignettes vidéo affichée dessus avec l'avenue en contrebas, pendant qu'un homme accroupi en tee-shirt blanc annote au crayon une liste de plans sur un porte-bloc, bouteille d'eau et rouleau de gaffer posés sur le parapet",
  keywords: [
    "grok imagine",
    "grok imagine prix",
    "grok video ia",
    "grok imagine image 2.0",
    "xai génération vidéo",
  ],
  relatedSlugs: [
    "grok-imagine-video-1-5-juin-2026",
    "meilleurs-outils-ia-video",
    "image-to-video-ia-methode",
  ],
  faq: [
    {
      question: "C'est quoi Grok Imagine exactement ?",
      answer:
        "C'est le nom commercial que xAI donne à sa famille de modèles d'image et de vidéo, accessible dans l'app Grok, sur grok.com/imagine et via une API. Derrière ce nom unique, la documentation xAI liste six modèles facturés séparément : trois pour l'image (grok-imagine-image, grok-imagine-image-2.0, grok-imagine-image-quality) et trois pour la vidéo (grok-imagine-video-1.5-lite, grok-imagine-video, grok-imagine-video-1.5). Ils ne font pas le même travail et ne coûtent pas le même prix.",
    },
    {
      question: "Combien coûte Grok Imagine ?",
      answer:
        "La grille officielle de docs.x.ai donne 0,02 $ par image pour grok-imagine-image, 0,04 $ pour grok-imagine-image-2.0 et 0,05 $ pour grok-imagine-image-quality. Côté vidéo, la facturation est à la seconde : 0,020 $ pour grok-imagine-video-1.5-lite, 0,050 $ pour grok-imagine-video et 0,080 $ pour grok-imagine-video-1.5. La définition demandée fait monter le total, xAI le précise sans publier le détail par palier. Un clip de 15 secondes revient donc à 0,30 $ en lite et à 1,20 $ en 1.5.",
    },
    {
      question:
        "Quelle différence entre Grok Imagine Image 2.0 et le modèle rapide ?",
      answer:
        "Le modèle rapide à 0,02 $ sert à sortir du volume : tu testes un cadrage, une lumière, une direction, tu en jettes neuf sur dix. Image 2.0, annoncé le 7 août 2026 et facturé le double, vise le fichier que tu gardes. xAI met en avant le respect des instructions détaillées, la typographie nette, et surtout une boîte à outils d'édition : baguette magique sur une zone précise, segmentation, détourage sur fond transparent, édition multi-références jusqu'à cinq images sources et redimensionnement intelligent.",
    },
    {
      question: "Grok Imagine génère-t-il le son avec la vidéo ?",
      answer:
        "Oui, depuis la version 1.5 sortie mi-juin 2026. Le clip arrive avec musique, bruitages et dialogues lip-sync produits dans la même passe que l'image, calés sur le mouvement. C'est un gain net pour un repérage ou un test de concept, parce que tu juges l'image et le son ensemble au lieu de les assembler avant de savoir si le plan tient. Pour un livrable, tu repasseras quand même par une couche sonore montée à la main.",
    },
    {
      question: "Quelle durée maximum pour une vidéo Grok Imagine ?",
      answer:
        "La documentation xAI parle d'une durée configurable jusqu'à 15 secondes par génération. Au-delà, il faut passer par l'extension de plan, qui prolonge une vidéo existante. Comme la facturation est à la seconde, demander 15 secondes par réflexe coûte deux fois et demie le prix d'un plan de 6 secondes. Note la durée voulue plan par plan pendant le découpage, et tu ne paieras que ce que tu gardes.",
    },
    {
      question: "Grok Imagine vaut-il mieux que Veo, Sora ou Kling ?",
      answer:
        "Sur la qualité brute d'un plan final, non, et personne de sérieux ne le prétend. Son terrain, c'est le prix au volume et la fidélité à l'image de départ quand tu animes un visuel que tu as déjà fabriqué. Le bon réflexe est de le mettre en amont de ta chaîne, pour la phase où tu produis et jettes beaucoup, et de garder ton modèle habituel pour les plans qui finissent dans le montage. Teste-le sur un plan que tu as déjà produit ailleurs avant de trancher.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu génères dans l'app Grok, ça sort vite, et tu n'as aucune idée du modèle qui vient de tourner ni de ce qu'il t'a coûté. C'est le défaut de cet outil. Le nom commercial recouvre six modèles facturés séparément, et rien dans l'interface grand public ne te dit lequel tu viens d'appeler.",
    },
    {
      type: "p",
      text: "À la fin de cet article, tu sauras lequel sert à quoi, et tu pourras chiffrer une séquence de quarante plans avant de lancer la première génération. Tous les tarifs cités ici viennent de la grille officielle de xAI, capturée le 3 octobre 2026.",
    },
    {
      type: "p",
      text: "Mon avis après avoir épluché cette grille : ce qui rend Grok Imagine utile au quotidien, c'est son plancher tarifaire. Le modèle vidéo le moins cher de la famille revient à quatre fois moins que le plus cher, et une grosse partie du travail d'un créateur tient très bien dans le moins cher.",
    },

    {
      type: "h2",
      id: "core-concepts",
      text: "Six modèles derrière un seul nom",
    },
    {
      type: "h3",
      id: "cote-image",
      text: "Côté image : trois niveaux, deux définitions",
    },
    {
      type: "p",
      text: "La documentation xAI liste trois modèles d'image. `grok-imagine-image` à **0,02 $ l'image**, `grok-imagine-image-2.0` à **0,04 $**, et `grok-imagine-image-quality` à **0,05 $**. La fiche de l'Imagine API annonce deux définitions de sortie, 1K et 2K, et une facturation forfaitaire par image quelle que soit la longueur du prompt.",
    },
    {
      type: "p",
      text: "Image 2.0 est le gros morceau récent. [xAI l'a annoncé le 7 août 2026](https://x.ai/news/grok-imagine-image-2) comme le nouveau Quality Mode de grok.com/imagine et des apps iOS et Android. L'objectif affiché par l'éditeur : fabriquer des images utilisables dans un travail réel, avec une typographie qui tient et une composition qui ne se défait pas quand on l'édite.",
    },
    {
      type: "image",
      src: "/images/articles/grok-imagine-guide-image2.webp",
      alt: "Page d'annonce officielle d'Imagine Image 2.0 sur x.ai, datée du 7 août 2026, avec les boutons Open Grok.com et Try on API",
      caption:
        "L'annonce officielle d'Imagine Image 2.0 sur x.ai, capturée le 3 octobre 2026.",
    },
    {
      type: "p",
      text: "L'outillage d'édition livré avec pèse plus lourd que le gain de rendu : baguette magique sur une zone sélectionnée, segmentation, détourage sur fond transparent, édition multi-références jusqu'à **cinq images sources** dans une seule passe, redimensionnement intelligent vers d'autres ratios, et une série de modèles préconfigurés pour les photos produit, les portraits pro, les icônes et les visuels de jeu.",
    },
    {
      type: "p",
      text: "xAI situe Image 2.0 à la deuxième place mondiale sur les classements Arena en génération et en édition d'image, derrière gpt-image-2, au jour de l'annonce. Garde cette donnée pour ce qu'elle est : un instantané publié par l'éditeur le jour de sa sortie. Ces classements bougent toutes les deux semaines.",
    },
    {
      type: "h3",
      id: "cote-video",
      text: "Côté vidéo : trois vitesses et le son dans la même passe",
    },
    {
      type: "p",
      text: "`grok-imagine-video-1.5-lite` revient à **0,020 $ la seconde**, `grok-imagine-video` à **0,050 $**, `grok-imagine-video-1.5` à **0,080 $**. Du simple au quadruple. La fiche de l'Imagine API indique trois définitions de sortie, 480p, 720p et 1080p, et la doc précise que la durée et la définition pèsent toutes les deux sur le total.",
    },
    {
      type: "p",
      text: "La durée est configurable jusqu'à 15 secondes par génération, avec une extension de plan pour aller au-delà. L'API vidéo est asynchrone : tu lances une requête, tu interroges l'identifiant renvoyé jusqu'à ce que ce soit prêt, puis tu récupères l'URL du fichier. À prévoir dans ton script si tu automatises, ça ne se comporte pas comme un appel de génération d'image.",
    },
    {
      type: "p",
      text: "L'audio natif reste l'argument principal de la 1.5 : musique, bruitages et dialogues lip-sync sortent dans la même passe que l'image. On avait détaillé ce que ça change au moment de la sortie dans [notre papier sur Grok Imagine Video 1.5](/blog/grok-imagine-video-1-5-juin-2026). Trois mois plus tard, la nouveauté s'est banalisée chez les concurrents, mais le prix à la seconde, lui, tient toujours.",
    },

    {
      type: "h2",
      id: "practical-workflow",
      text: "Chiffrer une séquence avant de la lancer",
    },
    {
      type: "p",
      text: "Voilà la grille complète. La colonne de droite applique ces tarifs à un volume réaliste, par simple multiplication.",
    },
    {
      type: "table",
      caption:
        "Les six modèles Grok Imagine, leur prix officiel et ce que ça coûte en volume",
      headers: [
        "Modèle",
        "Ce qu'il produit",
        "Prix officiel",
        "Sur un volume réel",
      ],
      rows: [
        [
          "grok-imagine-image",
          "Image rapide, 1K ou 2K",
          "0,02 $ / image",
          "100 brouillons de cadrage : 2,00 $",
        ],
        [
          "grok-imagine-image-2.0",
          "Image précise, édition par zone, multi-références",
          "0,04 $ / image",
          "100 images retenues : 4,00 $",
        ],
        [
          "grok-imagine-image-quality",
          "Le cran de qualité au-dessus",
          "0,05 $ / image",
          "100 images retenues : 5,00 $",
        ],
        [
          "grok-imagine-video-1.5-lite",
          "Vidéo de validation",
          "0,020 $ / sec",
          "40 plans de 8 s : 6,40 $",
        ],
        [
          "grok-imagine-video",
          "Vidéo standard",
          "0,050 $ / sec",
          "40 plans de 8 s : 16,00 $",
        ],
        [
          "grok-imagine-video-1.5",
          "Vidéo avec audio natif",
          "0,080 $ / sec",
          "40 plans de 8 s : 25,60 $",
        ],
      ],
    },
    {
      type: "p",
      text: "Regarde les trois dernières lignes. La même séquence de 320 secondes passe de 6,40 $ à 25,60 $ selon le modèle appelé, pour un travail qui, aux trois quarts, consiste à vérifier qu'un mouvement fonctionne. C'est là que se joue ton budget, bien avant la question du prompt.",
    },
    {
      type: "ol",
      items: [
        "**Compte tes secondes avant tes plans.** Quarante plans ne veulent rien dire, 320 secondes si. Reprends ton découpage, additionne les durées réelles, et tu as la seule donnée qui te permet de choisir un modèle.",
        "**Fais tout le cadrage en image rapide à 0,02 $.** Angle, lumière, matière, placement du sujet. Tu en génères cent, tu en gardes huit. À ce tarif, jeter n'est plus un problème, et c'est exactement ce dont une phase de recherche a besoin.",
        "**Anime en lite pour valider le mouvement.** Un plan à 0,020 $ la seconde répond à la seule question qui compte à ce stade : est-ce que ça bouge comme je l'avais en tête ? Un plan raté coûte 16 centimes, tu le refais trois fois sans réfléchir.",
        "**Ne monte en 1.5 que sur les plans retenus.** Une fois le mouvement validé et l'image de départ figée, relance en 1.5 pour le son natif et la définition finale. Sur quarante plans, tu en passes rarement plus de quinze à cette étape.",
        "**Garde une marge de reprise.** Compte un tiers de secondes en plus sur ton total final. Il y a toujours deux ou trois plans qui ne tiennent qu'au quatrième essai, et une marge prévue vaut mieux qu'un arbitrage à chaud en fin de projet.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : commence par fixer l'image de départ, pas le prompt vidéo. Grok Imagine est bon pour respecter un visuel qu'on lui donne, donc une image de départ propre te fait gagner plus d'allers-retours que dix reformulations de prompt. La méthode complète est dans notre article sur [l'image to video](/blog/image-to-video-ia-methode), et elle s'applique telle quelle ici.",
    },
    {
      type: "p",
      text: "La grille à jour, modèle par modèle, est sur la [page Models de la documentation xAI](https://docs.x.ai/docs/models). Pour situer Grok Imagine face au reste du marché, [notre panorama des outils IA vidéo](/blog/meilleurs-outils-ia-video) reste un meilleur point de départ qu'un classement publié par un éditeur.",
    },
    {
      type: "image",
      src: "/images/articles/grok-imagine-guide-pricing.webp",
      alt: "Carte Imagine API sur la page Models de la documentation xAI, indiquant les définitions 1K et 2K pour l'image, 480p, 720p et 1080p pour la vidéo, avec des tarifs à partir de 0,02 dollar par image et par seconde",
      caption:
        "La carte Imagine API sur docs.x.ai, capturée le 3 octobre 2026. Le détail modèle par modèle se trouve plus bas sur cette même page.",
    },

    {
      type: "h2",
      id: "trench-warfare",
      text: "Quatre façons de faire gonfler la facture sans s'en rendre compte",
    },
    {
      type: "h3",
      id: "piege-edition",
      text: "Tu édites en boucle sans regarder le compteur",
    },
    {
      type: "p",
      text: "Le symptôme : une facture d'image deux fois plus lourde que ton nombre d'images finales. La doc xAI est explicite, une édition est facturée sur l'image d'entrée **et** sur l'image de sortie. Dix allers-retours de retouche sur un même visuel, ce sont vingt images payées.",
    },
    {
      type: "p",
      text: "Fix concret : regroupe tes corrections. Au lieu de dix petites retouches successives, note tout ce qui ne va pas, puis fais une passe qui corrige quatre choses d'un coup. Tu passes de dix allers-retours à deux, et le résultat est souvent plus cohérent parce que le modèle arbitre les corrections ensemble.",
    },
    {
      type: "h3",
      id: "piege-definition",
      text: "Tu génères en 1080p ce que personne ne verra en 1080p",
    },
    {
      type: "p",
      text: "Celui-là reste invisible jusqu'à la facture. Tu valides tes essais dans la définition maximale par habitude, et tu paies plein tarif des fichiers que tu jettes dix minutes plus tard. La doc dit que la définition pèse sur le total, au même titre que la durée.",
    },
    {
      type: "p",
      text: "Fix concret : toute la phase de recherche se fait dans la définition la plus basse. Un mouvement de caméra raté se voit aussi bien en 480p qu'en 1080p, un mauvais rythme aussi. La définition finale ne sert qu'aux plans dont tu sais déjà qu'ils iront dans le montage.",
    },
    {
      type: "h3",
      id: "piege-duree",
      text: "Tu demandes 15 secondes parce que c'est le maximum",
    },
    {
      type: "p",
      text: "Le symptôme : des plans de 15 secondes dont tu gardes 4 secondes au montage. Avec une facturation à la seconde, ce réflexe te fait payer deux fois et demie le prix d'un plan de 6 secondes pour exactement le même usage.",
    },
    {
      type: "p",
      text: "Fix concret : la durée se décide au découpage, sur le papier, avant d'ouvrir quoi que ce soit. Note la durée de chaque plan à côté de sa description, et demande cette durée-là. Si tu ne sais pas combien de temps un plan doit durer, c'est que le découpage n'est pas fini.",
    },
    {
      type: "h3",
      id: "piege-finition",
      text: "Tu le traites comme un outil de finition",
    },
    {
      type: "p",
      text: "Tu repasses quinze fois sur le même plan en espérant une qualité de rendu que le modèle ne donnera pas, et tu finis par dépenser plus qu'avec un générateur haut de gamme en deux essais.",
    },
    {
      type: "p",
      text: "Fix concret : assume le rôle que cet outil joue bien. Il sert à produire et à jeter en masse, à animer fidèlement une image que tu as fabriquée, à poser un premier son pour juger un plan. L'étalonnage, le raccord et le mixage se font ailleurs, comme pour n'importe quelle source. Et si un plan demande une finition de haut vol, change de modèle. Insister coûte plus cher que changer.",
    },

    { type: "h2", id: "faq", text: "Questions fréquentes" },
    {
      type: "h3",
      id: "faq-1",
      text: "C'est quoi Grok Imagine exactement ?",
    },
    {
      type: "p",
      text: "C'est le nom commercial que xAI donne à sa famille de modèles d'image et de vidéo, accessible dans l'app Grok, sur grok.com/imagine et via une API. Derrière ce nom unique, la documentation xAI liste six modèles facturés séparément : trois pour l'image (grok-imagine-image, grok-imagine-image-2.0, grok-imagine-image-quality) et trois pour la vidéo (grok-imagine-video-1.5-lite, grok-imagine-video, grok-imagine-video-1.5). Ils ne font pas le même travail et ne coûtent pas le même prix.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien coûte Grok Imagine ?",
    },
    {
      type: "p",
      text: "La grille officielle de docs.x.ai donne 0,02 $ par image pour grok-imagine-image, 0,04 $ pour grok-imagine-image-2.0 et 0,05 $ pour grok-imagine-image-quality. Côté vidéo, la facturation est à la seconde : 0,020 $ pour grok-imagine-video-1.5-lite, 0,050 $ pour grok-imagine-video et 0,080 $ pour grok-imagine-video-1.5. La définition demandée fait monter le total, xAI le précise sans publier le détail par palier. Un clip de 15 secondes revient donc à 0,30 $ en lite et à 1,20 $ en 1.5.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Quelle différence entre Grok Imagine Image 2.0 et le modèle rapide ?",
    },
    {
      type: "p",
      text: "Le modèle rapide à 0,02 $ sert à sortir du volume : tu testes un cadrage, une lumière, une direction, tu en jettes neuf sur dix. Image 2.0, annoncé le 7 août 2026 et facturé le double, vise le fichier que tu gardes. xAI met en avant le respect des instructions détaillées, la typographie nette, et surtout une boîte à outils d'édition : baguette magique sur une zone précise, segmentation, détourage sur fond transparent, édition multi-références jusqu'à cinq images sources et redimensionnement intelligent.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Grok Imagine génère-t-il le son avec la vidéo ?",
    },
    {
      type: "p",
      text: "Oui, depuis la version 1.5 sortie mi-juin 2026. Le clip arrive avec musique, bruitages et dialogues lip-sync produits dans la même passe que l'image, calés sur le mouvement. C'est un gain net pour un repérage ou un test de concept, parce que tu juges l'image et le son ensemble au lieu de les assembler avant de savoir si le plan tient. Pour un livrable, tu repasseras quand même par une couche sonore montée à la main.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Quelle durée maximum pour une vidéo Grok Imagine ?",
    },
    {
      type: "p",
      text: "La documentation xAI parle d'une durée configurable jusqu'à 15 secondes par génération. Au-delà, il faut passer par l'extension de plan, qui prolonge une vidéo existante. Comme la facturation est à la seconde, demander 15 secondes par réflexe coûte deux fois et demie le prix d'un plan de 6 secondes. Note la durée voulue plan par plan pendant le découpage, et tu ne paieras que ce que tu gardes.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Grok Imagine vaut-il mieux que Veo, Sora ou Kling ?",
    },
    {
      type: "p",
      text: "Sur la qualité brute d'un plan final, non, et personne de sérieux ne le prétend. Son terrain, c'est le prix au volume et la fidélité à l'image de départ quand tu animes un visuel que tu as déjà fabriqué. Le bon réflexe est de le mettre en amont de ta chaîne, pour la phase où tu produis et jettes beaucoup, et de garder ton modèle habituel pour les plans qui finissent dans le montage. Teste-le sur un plan que tu as déjà produit ailleurs avant de trancher.",
    },

    {
      type: "p",
      text: "Si tu ne dois retenir qu'une chose : ouvre la page Models de xAI avant d'ouvrir l'app. Six modèles, six tarifs, et une même séquence de 320 secondes qui coûte 6 $ ou 26 $ selon la ligne que tu appelles. Dix minutes passées sur une grille tarifaire valent mieux qu'un budget cramé en une semaine de tests.",
    },
    {
      type: "p",
      text: "Note de fondateur : savoir router ses générations vers le bon modèle, ça s'apprend en un après-midi. Savoir quels plans méritent qu'on y mette le prix, ça vient du découpage, et c'est un travail de réalisation bien avant d'être un travail d'outil. C'est cette partie-là qu'on creuse dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-03 -->
