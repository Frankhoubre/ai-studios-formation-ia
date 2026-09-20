import type { Article } from "@/lib/types/article";

export const animatiqueIaMethode: Article = {
  title: "Animatique IA : du storyboard au film chronométré",
  slug: "animatique-ia-methode",
  description:
    "Animatique IA : monter tes cases de storyboard sur la voix avant de générer une seule seconde de vidéo. Méthode, outils gratuits, et ce que ça t'économise.",
  excerpt:
    "Entre le storyboard et la vidéo générée, il manque une étape que les studios d'animation pratiquent depuis des décennies : l'animatique. Des images fixes posées sur une voix, avec un chronomètre. Elle ne coûte aucun crédit et fixe la liste de ce que tu vas générer ensuite.",
  category: "workflow-creatif",
  tags: [
    "animatique ia",
    "storyboard animé",
    "préproduction",
    "vidéo ia",
    "montage",
    "workflow créatif",
  ],
  date: "2026-09-20",
  updatedAt: "2026-09-20",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/animatique-ia-methode.webp",
  imageAlt:
    "Loft baigné de lumière du matin, une femme en chemise de lin agenouillée sur un plancher en bois chronomètre une longue bande de cases de storyboard imprimées et scotchées bout à bout sur le sol, enregistreur audio portable et casque posés à côté d'elle",
  keywords: [
    "animatique ia",
    "storyboard animé",
    "animatique",
    "préproduction vidéo ia",
    "storyboarder",
    "timing storyboard",
  ],
  relatedSlugs: [
    "creer-storyboard-ia",
    "image-to-video-ia-methode",
    "storyboard-shotlist-notion-ia",
  ],
  faq: [
    {
      question: "Quelle est la différence entre un storyboard et une animatique ?",
      answer:
        "Le storyboard fixe ce qu'on voit et dans quel ordre : cadrage, action, raccord. L'animatique ajoute le temps et le son : chaque case est posée sur une timeline, pour une durée précise, synchronisée sur les voix enregistrées. Wikipédia la définit comme l'enregistrement du storyboard synchronisé sur la bande-dialogues. C'est la première fois qu'on voit le film durer, avant d'avoir fabriqué une seule image en mouvement.",
    },
    {
      question: "Quels outils gratuits permettent de faire une animatique ?",
      answer:
        "Trois suffisent. Storyboarder, de Wonder Unit, est gratuit et open source (Mac, Windows, Linux), lie un fichier audio à chaque case et exporte vers Premiere, Final Cut, Avid, en PDF ou en GIF. DaVinci Resolve en version gratuite ou CapCut font l'affaire si tu préfères travailler directement dans un logiciel de montage : tu importes tes cases comme des images fixes et tu coupes sur la voix. Boords, en ligne, a un éditeur d'animatique dans tous ses plans, mais le premier commence à 39 dollars par mois.",
    },
    {
      question: "Faut-il enregistrer la voix avant de générer les vidéos ?",
      answer:
        "Oui, et c'est l'étape que je vois sauter le plus souvent. La durée d'un plan dialogué se mesure sur la voix, elle ne se devine pas. Enregistre une voix témoin, la tienne au téléphone ou une voix synthétique (le plan gratuit d'ElevenLabs donne 10 000 crédits par mois, sans licence commerciale, ce qui suffit pour une maquette), pose-la sur la timeline, puis coupe les cases dessus. La voix définitive viendra plus tard, avec les mêmes durées.",
    },
    {
      question: "Combien de temps doit durer chaque case dans une animatique ?",
      answer:
        "Le temps qu'il faut pour lire l'image et entendre ce qui s'y dit, pas plus. En pratique, une animatique honnête révèle deux choses : des cases tenues trop longtemps parce que l'image est belle, et des cases qui n'existent que pour caser une réplique. Note ensuite la durée de chaque case dans ta shot list : c'est elle qui dira si le plan tient dans un clip de 5 ou 8 secondes, ou s'il faut le couper en deux plans.",
    },
    {
      question: "Peut-on faire une animatique avec des images générées par IA ?",
      answer:
        "Oui, et c'est même le cas le plus fréquent en vidéo IA : les cases sont les images clés que tu généreras ensuite en vidéo. L'ordre compte. Commence avec des cases rapides et peu coûteuses (un croquis, une image basse qualité, chez Runway une image Gen-4 Image Turbo vaut 2 crédits contre 60 pour 5 secondes de Gen-4.5), valide le rythme, puis seulement soigne les images clés des cases qui ont survécu au montage.",
    },
    {
      question: "Combien de crédits une animatique fait-elle économiser ?",
      answer:
        "Tout ce que tu n'auras pas généré pour rien. D'après la page tarifs de Runway lue le 20 septembre 2026, 5 secondes de Gen-4.5 coûtent 60 crédits, et le plan Standard à 12 dollars par mois donne 625 crédits, soit 52 secondes de vidéo par mois avant la moindre reprise. Un film de trois minutes en demande 180. Chaque plan coupé à l'animatique plutôt qu'au montage final, c'est 60 crédits et une génération de moins ; chaque plan raccourci de 8 à 4 secondes, c'est la moitié.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Ton storyboard est prêt, tes cases sont belles, tu lances les générations. Trois soirées et quelques centaines de crédits plus tard, tu ouvres le logiciel de montage, et le film ne tient pas : un plan de huit secondes dont tu gardes deux, une réplique qui déborde de son plan, une scène entière qui dure le double de ce qu'elle raconte. Tu ne l'as pas vu avant parce qu'il n'y avait rien à voir. **Un storyboard ne dure pas.**",
    },
    {
      type: "p",
      text: "Dans ce tutoriel, tu vas construire une animatique à partir de ton storyboard : les cases posées sur une timeline, synchronisées sur une voix témoin, avec une durée écrite pour chaque plan. Tu verras quels outils gratuits font le travail, comment en tirer une shot list que tes outils de génération pourront suivre, et ce que ça change à la facture avec les prix relevés sur les pages officielles de Runway, ElevenLabs, Boords et Wonder Unit le 20 septembre 2026.",
    },
    {
      type: "p",
      text: "Ma position : l'animatique est l'étape la moins chère de toute la chaîne et celle qui fixe le coût de toutes les autres. La sauter, c'est monter son film avec des plans qu'on garde parce qu'ils ont coûté cher.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Une animatique, c'est un storyboard qui dure",
    },
    {
      type: "h3",
      text: "Ce que l'animation sait depuis longtemps",
    },
    {
      type: "p",
      text: "En animation, on ne met pas une scène en mouvement avant de l'avoir vue en animatique. [Wikipédia](https://fr.wikipedia.org/wiki/Animatique) la décrit comme l'enregistrement du storyboard synchronisé sur la bande-dialogues : un monteur pose les vignettes du storyboard sur les voix déjà enregistrées, donne une durée à chaque plan et esquisse les mouvements de caméra. Une musique et quelques bruitages temporaires aident à juger le rythme. Le résultat ressemble à un diaporama sonore, et c'est exactement ce qu'on veut : une maquette du film assez complète pour sentir où il traîne, assez pauvre pour qu'on ose la couper.",
    },
    {
      type: "p",
      text: "La raison est économique avant d'être artistique. Animer coûte cher, réanimer coûte le double, donc on règle le minutage sur des dessins fixes. La vidéo IA est dans la même situation avec d'autres chiffres : chaque seconde générée se paie en crédits, et une seconde générée pour rien se paie aussi. La méthode a été inventée pour ce problème-là, elle a juste changé de métier.",
    },
    {
      type: "h3",
      text: "Storyboard, storyboard animé, animatique : le mot qui trompe",
    },
    {
      type: "p",
      text: "Le [storyboard](/blog/creer-storyboard-ia) décide de ce qu'on voit et dans quel ordre. L'animatique décide de combien de temps on le voit et de ce qu'on entend pendant. Entre les deux, la vidéo IA a fait naître une confusion avec le mot « storyboard animé » : beaucoup de créateurs entendent par là « générer une vidéo à partir de chaque case », ce qui est précisément l'étape coûteuse qu'on cherche à retarder. Dans cet article, un storyboard animé est une animatique : des images fixes et du son, avec une durée par case. Rien n'est généré en vidéo tant qu'elle n'est pas validée.",
    },
    {
      type: "p",
      text: "**La voix passe donc avant l'image.** Un plan dialogué dure ce que dure la réplique, le reste du montage se cale dessus. Sans voix enregistrée, tu devines les durées, et les durées devinées sont presque toujours trop longues.",
    },
    {
      type: "image",
      src: "/images/articles/animatique-ia-methode-storyboarder.webp",
      alt: "Page d'accueil de Storyboarder par Wonder Unit, bouton Download for Free, mention Version 1.0.0 disponible pour Mac OS X, Windows et Linux, aperçu de l'interface avec une case de croquis et une timeline de vignettes en bas, et la phrase Create and show animatics to others",
      caption:
        "Storyboarder, gratuit et open source, avec sa timeline de cases en bas de l'interface. Source : wonderunit.com, capture du 20/09/2026.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "La méthode : de la case à la shot list chronométrée",
    },
    {
      type: "p",
      text: "Trois niveaux d'animatique existent, et tu n'as pas besoin de tous les faire. Le tableau les résume, avec ce que chacun te permet de valider et ce qu'il coûte en outils, d'après les pages officielles lues le 20 septembre 2026.",
    },
    {
      type: "table",
      caption:
        "Trois niveaux d'animatique pour un film IA (outils et tarifs relevés sur wonderunit.com, boords.com, elevenlabs.io et runway.com le 20/09/2026)",
      headers: ["Niveau", "Ce que tu valides", "Avec quoi", "Ce que ça coûte"],
      rows: [
        [
          "1. Animatique fixe",
          "L'ordre, la durée de chaque plan, la place des répliques",
          "Cases du storyboard (croquis ou images IA rapides) + voix témoin sur une timeline : Storyboarder, DaVinci Resolve gratuit ou CapCut",
          "0 € en logiciel ; voix témoin au téléphone, ou plan gratuit d'ElevenLabs (10 000 crédits par mois, sans licence commerciale)",
        ],
        [
          "2. Animatique avec caméra simulée",
          "Les mouvements de caméra et les raccords entre plans",
          "Zoom ou panoramique lent sur les cases fixes dans le logiciel de montage ; musique temporaire",
          "0 € ; quelques minutes par plan",
        ],
        [
          "3. Animatique aux images clés",
          "Le look final de chaque plan avant de le mettre en mouvement",
          "Les cases remplacées une à une par les vraies images clés, générées pour les seuls plans survivants",
          "Le prix d'une image par plan : chez Runway, 2 crédits en Gen-4 Image Turbo, 11 en Nano Banana Pro 2, 20 en Nano Banana Pro",
        ],
      ],
    },
    {
      type: "p",
      text: "Voici les étapes dans l'ordre où je les fais. La première suppose que ton storyboard existe déjà ; si ce n'est pas le cas, la méthode de storyboard IA du blog le construit case par case, et [la version Notion avec shot list](/blog/storyboard-shotlist-notion-ia) te donne un tableau prêt à recevoir les durées.",
    },
    {
      type: "ol",
      items: [
        "Numérote et exporte tes cases en images fixes. Une case par plan prévu, nommée par son numéro (010, 020, 030, en laissant de la place pour insérer). Ne soigne rien à ce stade : un croquis ou une image IA basse qualité suffit, l'animatique doit rester facile à couper.",
        "Enregistre la voix témoin. Toutes les répliques et la voix off, lues au rythme voulu, au téléphone ou avec une voix synthétique. Le plan gratuit d'ElevenLabs suffit pour cette maquette ; [le guide ElevenLabs](/blog/elevenlabs-guide-complet) explique comment obtenir une lecture naturelle. Ajoute une musique temporaire si le film en a une : elle donne le tempo des scènes sans dialogue.",
        "Pose la voix sur la timeline, puis les cases dessus. Dans Storyboarder, chaque case reçoit son fichier audio et sa durée. Dans DaVinci ou CapCut, importe la voix d'abord, puis les images, et coupe chaque case au moment où la suivante doit apparaître. Le montage se fait sur le son, pas sur les images.",
        "Regarde-la trois fois : en entier, sans le son, puis le son seul. Sans le son, tu vois les cases tenues trop longtemps. Le son seul te dit si l'histoire se comprend à l'oreille. Coupe, fusionne, raccourcis. Un plan qui ne perd rien à durer moitié moins dure moitié moins.",
        "Simule la caméra sur les plans qui bougent. Un zoom lent ou un panoramique sur la case fixe, le temps du plan. Si le mouvement gêne la lecture de l'image, il gênera aussi en vidéo. C'est aussi là que tu vérifies les raccords entre deux plans consécutifs, avec [les règles de continuité](/blog/raccord-continuite-plans-ia) qu'on applique ensuite aux plans générés.",
        "Exporte la shot list chronométrée. Pour chaque case : numéro, durée en secondes, dialogue ou non, mouvement de caméra. Cette colonne durée est le lien avec la génération : un plan de 12 secondes dans l'animatique est presque toujours deux plans en vidéo IA, un large puis un serré, plutôt qu'un clip à prolonger. [Prolonger un plan au-delà de 5 secondes](/blog/prolonger-plan-ia-au-dela-5-secondes) reste possible, mais coûte plus cher que de le couper au bon endroit.",
        "Remplace les cases par les plans générés, dans la même timeline. Génère d'abord les images clés des plans survivants, puis les vidéos avec [la méthode image to video](/blog/image-to-video-ia-methode), et pose chaque plan à la place de sa case, à la même durée. L'animatique devient le film sans jamais avoir été un autre projet.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : marque en couleur, dans l'animatique, chaque case dont la durée dépasse la longueur de clip de ton outil de génération (5 secondes, l'unité de facturation de Gen-4.5 chez Runway ; 8 secondes pour Veo 3.1 dans Flow). Avant de générer quoi que ce soit, chacune de ces cases doit avoir été coupée en deux plans, raccourcie, ou justifiée par écrit. Cette liste de cases colorées est le meilleur indicateur de ce que le film va te coûter.",
    },
    {
      type: "image",
      src: "/images/articles/animatique-ia-methode-runway-pricing.webp",
      alt: "Tableau Compare models across plans de la page tarifs de Runway en facturation annuelle : Standard à 12 dollars par mois pour 7 500 crédits par an, Pro à 28 dollars pour 27 000 crédits, Max à 76 dollars pour 114 000 crédits ; en vidéo, Gen-4.5 coûte 60 crédits pour 5 secondes soit 125 vidéos par an en Standard, Aleph 2.0 140 crédits pour 5 secondes ; en image, Gen-4 Image Turbo coûte 2 crédits par image, Nano Banana Pro 2 11 crédits et Nano Banana Pro 20 crédits",
      caption:
        "Le rapport image / vidéo chez Runway : 2 crédits pour une image Gen-4 Image Turbo, 60 pour 5 secondes de Gen-4.5. Source : runway.com/pricing, capture du 20/09/2026.",
    },
    {
      type: "p",
      text: "Regarde les proportions chez Runway. En plan Standard, 7 500 crédits par an, c'est 125 vidéos de 5 secondes, un peu plus de dix minutes de Gen-4.5 dans l'année, reprises comprises. La même somme paie 3 750 images Gen-4 Image Turbo. Une animatique aux images clés te fait dépenser du côté où tout est bon marché, et n'envoie en vidéo que les plans dont la durée et la place sont déjà connues.",
    },
    {
      type: "image",
      src: "/images/articles/animatique-ia-methode-boords-pricing.webp",
      alt: "Page tarifs de Boords avec quatre plans en facturation mensuelle : Solo à 39 dollars par mois ou 26 dollars par mois en annuel pour un utilisateur et 250 images IA par mois, Pro à 75 dollars, Team à 125 dollars, Agency à 250 dollars, avec la mention Cancel or switch plans anytime",
      caption:
        "Boords, l'option en ligne : l'éditeur d'animatique est dans tous les plans, le premier démarre à 39 $ par mois. Source : boords.com/pricing, capture du 20/09/2026.",
    },
    {
      type: "p",
      text: "Si tu travailles seul, Storyboarder ou ton logiciel de montage habituel suffisent, et tu gardes tout dans un seul projet. Boords devient intéressant quand un client ou une équipe doit commenter l'animatique en ligne : son plan Solo coûte 39 dollars par mois (26 en annuel), avec l'éditeur d'animatique, le minutage automatique de la voix off et 250 images IA par mois. Pour un film perso, c'est un abonnement de trop.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Où l'animatique rate son but",
    },
    {
      type: "h3",
      text: "La faire après avoir généré",
    },
    {
      type: "p",
      text: "Symptôme : tu poses tes vidéos générées sur une timeline, tu appelles ça une animatique, et tu gardes des plans parce qu'ils ont coûté 60 crédits chacun. À ce stade tu ne maquettes plus rien, tu montes avec des regrets. Fix concret : l'animatique se fait avec des images fixes qui n'ont rien coûté, sinon elle ne coupe plus rien. Si tes vidéos existent déjà, fais quand même l'exercice avec leur première image, et accepte que certaines générations ne servent à rien.",
    },
    {
      type: "h3",
      text: "Chronométrer sans voix",
    },
    {
      type: "p",
      text: "Symptôme : les durées sont rondes (3 secondes, 5 secondes, 8 secondes) et le film sonne mécanique. Tu as réglé les plans sur la durée des clips de ton outil, pas sur ce qu'ils racontent. Fix concret : enregistre la voix témoin, même mal jouée, même avec ta propre voix, et coupe dessus. La durée d'un plan dialogué se lit sur la forme d'onde. Pour les scènes muettes, la musique temporaire joue ce rôle.",
    },
    {
      type: "h3",
      text: "Soigner les cases avant de les couper",
    },
    {
      type: "p",
      text: "Symptôme : tu as passé une soirée sur les images clés de la scène 2, et l'animatique montre que la scène 2 doit sauter. Tu la gardes. Fix concret : **les cases de l'animatique de niveau 1 doivent être moches**. Croquis, image basse résolution, capture d'une référence. Les belles images clés ne se génèrent que pour les plans qui ont survécu à l'étape 4, et [les images qui n'ont rien à raconter](/blog/videos-ia-jolies-mais-vides) se repèrent mieux quand elles ne sont pas encore belles.",
    },
    {
      type: "h3",
      text: "Abandonner l'animatique au premier plan généré",
    },
    {
      type: "p",
      text: "Symptôme : tu ouvres un nouveau projet pour monter les vidéos, et à mi-parcours tu ne sais plus quelle durée avait quel plan ni où passait la réplique. Fix concret : un seul projet, du début à la fin. Chaque plan généré remplace sa case, à la même position, à la même durée. Tant qu'une case reste dans la timeline, tu sais ce qu'il manque. Quand il n'en reste plus, le film est monté.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quelle est la différence entre un storyboard et une animatique ?",
    },
    {
      type: "p",
      text: "Le storyboard fixe ce qu'on voit et dans quel ordre : cadrage, action, raccord. L'animatique ajoute le temps et le son : chaque case est posée sur une timeline, pour une durée précise, synchronisée sur les voix enregistrées. Wikipédia la définit comme l'enregistrement du storyboard synchronisé sur la bande-dialogues. C'est la première fois qu'on voit le film durer, avant d'avoir fabriqué une seule image en mouvement.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quels outils gratuits permettent de faire une animatique ?",
    },
    {
      type: "p",
      text: "Trois suffisent. Storyboarder, de Wonder Unit, est gratuit et open source (Mac, Windows, Linux), lie un fichier audio à chaque case et exporte vers Premiere, Final Cut, Avid, en PDF ou en GIF. DaVinci Resolve en version gratuite ou CapCut font l'affaire si tu préfères travailler directement dans un logiciel de montage : tu importes tes cases comme des images fixes et tu coupes sur la voix. Boords, en ligne, a un éditeur d'animatique dans tous ses plans, mais le premier commence à 39 dollars par mois.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Faut-il enregistrer la voix avant de générer les vidéos ?",
    },
    {
      type: "p",
      text: "Oui, et c'est l'étape que je vois sauter le plus souvent. La durée d'un plan dialogué se mesure sur la voix, elle ne se devine pas. Enregistre une voix témoin, la tienne au téléphone ou une voix synthétique (le plan gratuit d'ElevenLabs donne 10 000 crédits par mois, sans licence commerciale, ce qui suffit pour une maquette), pose-la sur la timeline, puis coupe les cases dessus. La voix définitive viendra plus tard, avec les mêmes durées.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Combien de temps doit durer chaque case dans une animatique ?",
    },
    {
      type: "p",
      text: "Le temps qu'il faut pour lire l'image et entendre ce qui s'y dit, pas plus. En pratique, une animatique honnête révèle deux choses : des cases tenues trop longtemps parce que l'image est belle, et des cases qui n'existent que pour caser une réplique. Note ensuite la durée de chaque case dans ta shot list : c'est elle qui dira si le plan tient dans un clip de 5 ou 8 secondes, ou s'il faut le couper en deux plans.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Peut-on faire une animatique avec des images générées par IA ?",
    },
    {
      type: "p",
      text: "Oui, et c'est même le cas le plus fréquent en vidéo IA : les cases sont les images clés que tu généreras ensuite en vidéo. L'ordre compte. Commence avec des cases rapides et peu coûteuses (un croquis, une image basse qualité, chez Runway une image Gen-4 Image Turbo vaut 2 crédits contre 60 pour 5 secondes de Gen-4.5), valide le rythme, puis seulement soigne les images clés des cases qui ont survécu au montage.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Combien de crédits une animatique fait-elle économiser ?",
    },
    {
      type: "p",
      text: "Tout ce que tu n'auras pas généré pour rien. D'après la page tarifs de Runway lue le 20 septembre 2026, 5 secondes de Gen-4.5 coûtent 60 crédits, et le plan Standard à 12 dollars par mois donne 625 crédits, soit 52 secondes de vidéo par mois avant la moindre reprise. Un film de trois minutes en demande 180. Chaque plan coupé à l'animatique plutôt qu'au montage final, c'est 60 crédits et une génération de moins ; chaque plan raccourci de 8 à 4 secondes, c'est la moitié.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Fais durer ton film avant de le fabriquer",
    },
    {
      type: "p",
      text: "Une animatique, c'est une soirée, des images moches, ta voix enregistrée au téléphone, un logiciel gratuit. Au bout, tu as une shot list où chaque plan a une durée et une place, et tu sais avant de générer combien de secondes ton film va te coûter. Les sources de cet article : [la page Animatique de Wikipédia](https://fr.wikipedia.org/wiki/Animatique), [Storyboarder chez Wonder Unit](https://wonderunit.com/storyboarder/), [les tarifs de Boords](https://boords.com/pricing), [les tarifs d'ElevenLabs](https://elevenlabs.io/pricing) et [les tarifs de Runway](https://runway.com/pricing).",
    },
    {
      type: "p",
      text: "Note de fondateur : dans la formation IA gratuite d'AI Studios, le parcours va de l'idée au scénario, du scénario au storyboard, puis à la vidéo. L'animatique est la marche entre les deux dernières, celle qu'on saute quand on est pressé et qu'on regrette au montage. Si tu n'as le temps que pour une chose cette semaine, chronomètre ton storyboard.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-20 -->
