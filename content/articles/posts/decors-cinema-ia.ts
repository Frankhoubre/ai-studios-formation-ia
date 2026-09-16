import type { Article } from "@/lib/types/article";

export const decorsCinemaIa: Article = {
  title: "Décors de cinéma avec l'IA : un lieu qui tient sur dix plans",
  slug: "decors-cinema-ia",
  description:
    "Décor cinéma IA : pourquoi une belle image ne fait pas un décor, la fiche de lieu, les images de référence dans Flow, le monde 3D dans Marble, prix vérifiés.",
  excerpt:
    "Ton décor est magnifique sur le premier plan. Au contre-champ, la porte a changé de mur et la lampe a disparu. L'IA sait tenir un lieu sur dix plans, à condition de le construire avec une fiche et une image maître avant la première génération. Fiche de lieu, images de référence dans Flow, monde 3D dans Marble : la méthode et les prix lus sur les pages officielles.",
  category: "workflow-creatif",
  tags: [
    "décor cinéma ia",
    "environnement ia",
    "cinéma ia",
    "marble world labs",
    "veo 3.1",
    "direction artistique",
  ],
  date: "2026-09-16",
  updatedAt: "2026-09-16",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/decors-cinema-ia.webp",
  imageAlt:
    "Atelier de décoration de cinéma sous une verrière, une femme en tablier ajuste à la pince un réverbère miniature sur la maquette d'une ruelle pavée, tablette posée à côté affichant la même ruelle, mur du fond couvert de tirages punaisés du même lieu sous plusieurs angles",
  keywords: [
    "décor cinéma ia",
    "environnement ia",
    "décor ia",
    "marble world labs",
    "images de référence veo 3.1",
    "monde 3d ia",
  ],
  relatedSlugs: [
    "illustration-cinema-concept-art-ia",
    "images-cinema-ia-scene-film",
    "raccord-continuite-plans-ia",
  ],
  faq: [
    {
      question: "Quelle différence entre concept art et décor IA ?",
      answer:
        "Le concept art explore un univers : cinquante propositions, on en garde deux. Le décor est le lieu retenu, figé dans une fiche et une image maître, dans lequel on va filmer plusieurs plans. Le premier sert à décider, le second à produire. Tu as besoin des deux, dans cet ordre.",
    },
    {
      question: "Comment garder le même décor d'un plan à l'autre ?",
      answer:
        "Avec une image maître et des images de référence. Dans Flow, Veo 3.1 accepte jusqu'à trois images de référence pour contrôler les personnages, les objets et le style d'une génération. Donne-lui la plate de ton décor, précise l'angle demandé dans le prompt, et garde la fiche de lieu sous les yeux pour vérifier chaque sortie.",
    },
    {
      question: "Marble de World Labs, ça sert à quoi pour un décor ?",
      answer:
        "À générer le lieu une fois en 3D, puis à le filmer sous tous les angles. Marble part d'un texte, d'une image, de plusieurs images ou d'une vidéo, et rend un monde navigable que tu enregistres en vidéo avec un chemin de caméra à images clés, ou que tu exportes en splats gaussiens et en maillages pour Blender ou Unreal.",
    },
    {
      question: "Combien coûte un décor 3D dans Marble ?",
      answer:
        "Le plan gratuit donne 7 000 crédits, soit jusqu'à 4 générations de monde par mois, avec entrée texte, image, multi-images et panorama 360. Standard à 20 dollars par mois ajoute l'entrée vidéo et les exports de splats, Pro à 35 dollars ajoute les maillages texturés et les droits commerciaux. Prix lus sur marble.worldlabs.ai le 15 septembre 2026.",
    },
    {
      question: "Puis-je utiliser un décor Marble dans un film commercial ?",
      answer:
        "Les droits commerciaux figurent dans le plan Pro à 35 dollars par mois sur la page des tarifs. Si ton film est destiné à un client ou à une plateforme, prends ce plan avant de générer, et note le numéro de plan dans ton document de pipeline pour les festivals qui le demandent.",
    },
    {
      question: "Le décor IA remplace-t-il le matte painting ?",
      answer:
        "Il en prend la place dans la chaîne. Le matte painting a toujours servi à agrandir un décor qu'on ne pouvait pas construire, sur verre peint puis en numérique. Un monde généré exporté en 3D fait la même chose avec une caméra qui bouge, ce que la peinture sur verre ne permettait pas.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le premier plan est superbe : une ruelle mouillée, une enseigne rouge, une porte cochère à gauche. Tu génères le contre-champ, et la porte est passée à droite, l'enseigne est devenue bleue, et la lampe au-dessus de l'entrée n'existe plus. Tu recommences six fois, tu finis par couper le contre-champ au montage, et la scène se joue dans un lieu que le spectateur ne comprend jamais.",
    },
    {
      type: "p",
      text: "Ici, tu construis un décor de cinéma avec l'IA qui encaisse un plan large, un champ, un contre-champ et deux inserts sans changer de visage. Ça commence par une fiche de lieu à écrire avant toute génération, ça passe par les deux routes qui existent aujourd'hui (les images de référence dans Flow avec Veo 3.1, et le monde 3D généré dans Marble de World Labs) avec les prix lus sur les pages officielles, et ça finit par les quatre pièges qui cassent un décor en production.",
    },
    {
      type: "p",
      text: "Un décor de cinéma se juge au deuxième angle. La première image, n'importe quel modèle te la donne. C'est la suivante qui décide si tu as un lieu ou une carte postale.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Un décor de cinéma IA, c'est un lieu où l'on filme",
    },
    {
      type: "h3",
      text: "Concept art, plate, décor : trois objets, trois usages",
    },
    {
      type: "p",
      text: "Le concept art explore. Tu génères cinquante ruelles, tu en gardes deux, tu décides de l'époque, de la palette, du niveau d'usure des façades. [Le concept art cinéma avec l'IA](/blog/illustration-cinema-concept-art-ia) couvre cette phase, et elle reste indispensable : un décor sorti sans exploration ressemble au décor par défaut du modèle, celui que tout le monde a déjà vu.",
    },
    {
      type: "p",
      text: "La plate est l'image finale d'un angle donné : le plan large de la ruelle, à l'heure choisie, avec la lumière choisie. Une plate est belle, précise, et elle ne vaut que pour son angle. [Recréer une scène de film en image IA](/blog/images-cinema-ia-scene-film) t'apprend à en fabriquer une qui ressemble à du cinéma.",
    },
    {
      type: "p",
      text: "Le décor est ce qui relie les plates entre elles : la géographie du lieu (la porte est à gauche quand on regarde vers le fond, la fenêtre éclairée est au premier étage du bâtiment de droite), l'heure et les sources de lumière, et trois ou quatre objets signature qui reviennent dans chaque angle. Un décor, c'est ce que le chef décorateur d'un vrai tournage tient dans ses plans et ses maquettes. Sans lui, chaque génération repart de zéro et le modèle réinvente la ruelle.",
    },
    {
      type: "h3",
      text: "Deux routes pour tenir un lieu sur plusieurs plans",
    },
    {
      type: "p",
      text: "La route 2D consiste à générer une image maître, puis à en tirer chaque angle avec des images de référence. Dans Flow, la fonction Ingredients to Video de Veo 3.1 permet, selon l'annonce de Google du 15 octobre 2025, d'utiliser plusieurs images de référence pour contrôler les personnages, les objets et le style d'une scène. La documentation de l'API Gemini précise la limite : jusqu'à trois images de référence, et une durée fixée à 8 secondes dès qu'on en utilise. Tu donnes la plate du décor en référence, tu décris l'angle demandé, et le modèle repart de ton lieu au lieu du sien.",
    },
    {
      type: "image",
      src: "/images/articles/decors-cinema-ia-veo-31-flow.webp",
      alt: "Article du blog officiel de Google intitulé Introducing Veo 3.1 and advanced capabilities in Flow, daté du 15 octobre 2025, signé par Jess Gallegos de Google DeepMind et Thomas Iljic de Google Labs, avec un bandeau de trois images de démonstration",
      caption:
        "L'annonce de Veo 3.1 et des fonctions Ingredients to Video, Frames to Video, Extend et Insert dans Flow. Source : blog.google, capture du 16/09/2026.",
    },
    {
      type: "p",
      text: "La route 3D consiste à générer le lieu une seule fois sous forme de monde navigable, puis à le filmer. Marble, lancé par World Labs le 12 novembre 2025, prend en entrée un texte, une image, plusieurs images ou une vidéo, et produit un monde en splats gaussiens dans lequel tu déplaces une caméra. Le mode Chisel sépare la structure du style : tu poses des volumes grossiers, puis un prompt habille l'ensemble. Un outil d'expansion agrandit une zone, un composeur assemble plusieurs mondes. À la sortie : une vidéo mp4 avec un chemin de caméra, des splats en SPZ ou PLY, un maillage de collision et un maillage texturé pour un moteur 3D. C'est la logique du décor de studio : on construit une fois, on tourne dix fois.",
    },
    {
      type: "image",
      src: "/images/articles/decors-cinema-ia-marble-blog.webp",
      alt: "Page d'accueil de World Labs avec le bouton Create with Marble, un bandeau annonçant Atlas comme prochain modèle de monde, et un rendu de village médiéval au crépuscule avec des fenêtres éclairées et une cathédrale au loin",
      caption:
        "Le site de World Labs, éditeur de Marble, avec le rendu d'un monde généré en page d'accueil. Source : worldlabs.ai, capture du 15/09/2026.",
    },
    {
      type: "p",
      text: "Le matte painting faisait déjà ce travail il y a un siècle : une plaque de verre peinte devant la caméra pour agrandir un décor qu'on ne pouvait pas construire, de Citizen Kane à La Mort aux trousses, comme le rappelle [l'article Wikipédia sur le matte painting](https://fr.wikipedia.org/wiki/Matte_painting). Le verre peint avait une limite : la caméra ne bougeait pas. Un monde 3D généré lève cette limite, et la route 3D vaut son prix dès que ta scène demande un travelling.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Construire un décor de cinéma IA en cinq étapes",
    },
    {
      type: "p",
      text: "Choisis ta route selon le nombre d'angles et le mouvement de caméra que la scène demande. Les prix viennent de la page des tarifs de Marble lue le 15 septembre 2026 et des annonces officielles pour Veo 3.1 ; les colonnes « où ça casse » sont mes observations de production.",
    },
    {
      type: "table",
      caption:
        "Les routes pour un décor IA, selon ce que la scène exige (observations de production, prix vérifiés le 15/09/2026)",
      headers: ["Route", "Ce que tu construis", "Angles et caméra", "Où ça casse", "Coût"],
      rows: [
        [
          "Image maître + image-to-video",
          "Une plate par angle",
          "Un angle par image, mouvement léger",
          "Dès le contre-champ, le lieu change",
          "Le prix de tes générations d'images et de clips",
        ],
        [
          "Images de référence dans Flow (Veo 3.1)",
          "Une plate maître, trois références maximum",
          "Angles décrits dans le prompt, clips de 8 s, extension par tranches de 7 s",
          "Géographie approximative sur les angles éloignés de la référence",
          "Inclus dans les abonnements Google AI Pro et Ultra, décompte en crédits par clip",
        ],
        [
          "Monde 3D dans Marble",
          "Un lieu navigable, généré une fois",
          "Chemin de caméra à images clés, vidéo mp4, durée au-delà de 8 s",
          "Détail à courte distance, zones non générées à agrandir",
          "Gratuit : 7 000 crédits, 4 mondes ; Standard 20 $ ; Pro 35 $ avec droits commerciaux",
        ],
        [
          "Splats ou maillage Marble dans Blender ou Unreal",
          "Un décor 3D exploitable dans ton moteur",
          "Tout ce que ton moteur permet, éclairage compris",
          "Temps de mise en place, poids des fichiers",
          "Standard pour les splats, Pro pour le maillage texturé",
        ],
      ],
    },
    {
      type: "image",
      src: "/images/articles/decors-cinema-ia-marble-pricing.webp",
      alt: "Page des tarifs de Marble avec quatre plans : Free à 0 dollar et 7 000 crédits pour 4 mondes, Standard à 20 dollars et 20 000 crédits pour 12 mondes, Pro à 35 dollars et 40 000 crédits pour 25 mondes avec droits commerciaux, Max à 95 dollars et 120 000 crédits pour 75 mondes, plus des recharges de 5 et 20 dollars",
      caption:
        "Les quatre plans de Marble et les recharges de crédits. Source : marble.worldlabs.ai/pricing, capture du 15/09/2026.",
    },
    {
      type: "ol",
      items: [
        "Écris la fiche de lieu avant de générer quoi que ce soit. Une page : la géographie (ce qu'il y a à gauche, à droite, au fond, derrière la caméra), l'heure et les sources de lumière (une fenêtre au premier étage, une enseigne, un lampadaire), trois objets signature (la porte cochère verte, le vélo attaché, la gouttière rouillée), et la palette en trois couleurs. Cette page est ton chef décorateur.",
        "Génère la plate maître, l'angle le plus large de la scène, avec la fiche traduite en prompt. Vérifie qu'elle contient les trois objets signature et que la lumière vient d'où la fiche le dit. [Le travail de la lumière et des ambiances en image IA](/blog/lumiere-cinema-ambiances-images-ia) te donne le vocabulaire pour la décrire sans le mot cinematic.",
        "Tire les angles. Route 2D : dans Flow, charge la plate en image de référence et demande chaque angle en nommant la géographie de la fiche (« contre-champ depuis la porte cochère, l'enseigne rouge à droite du cadre »). Route 3D : dans Marble, génère le monde à partir de la plate en entrée image, navigue, et agrandis les zones où la caméra ira.",
        "Filme. En 2D, anime chaque plate avec [la méthode image to video](/blog/image-to-video-ia-methode) ou génère directement le clip dans Flow. Dans Marble, l'outil Record pose une image clé de caméra avec la touche F, relie les images clés en chemin, et exporte un mp4 ; la fonction Enhance ajoute du détail et retire des artefacts de rendu.",
        "Archive la bible du décor : fiche de lieu, plate maître, les angles validés, le monde Marble si tu es passé par la 3D, et une ligne dans ton document de pipeline avec les outils et le plan d'abonnement. Le jour où il faut un plan de plus, ou un festival qui demande la liste des modèles, tout est là.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : dans Marble, la documentation de l'outil Record prévient que le chemin de caméra ne persiste pas et que les images clés sont perdues en quittant la page, tout comme la vidéo améliorée. Exporte le mp4 avant de fermer l'onglet, et note la position des images clés dans ta fiche de lieu si tu comptes retourner la scène.",
    },
    {
      type: "p",
      text: "Ma règle sur un court-métrage : la 3D dès qu'une scène compte un travelling ou plus de trois angles dans le même lieu. En dessous, la route 2D avec images de référence suffit, à condition de tenir la fiche de lieu à chaque génération et de refuser toute sortie qui déplace un objet signature. Le raccord entre deux plans se joue ensuite au montage, et [la méthode du raccord et de la continuité entre plans IA](/blog/raccord-continuite-plans-ia) prend le relais là où cet article s'arrête.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Là où un décor IA se casse en production",
    },
    {
      type: "h3",
      text: "Le lieu change entre le champ et le contre-champ",
    },
    {
      type: "p",
      text: "Symptôme : la porte a changé de mur, l'enseigne a changé de couleur, le spectateur ne sait plus où sont les personnages. Fix concret : décris dans la plate maître ce qui se trouve hors champ (« derrière la caméra, une vitrine de boulangerie éteinte »), puisque le contre-champ va la montrer. Ensuite, chaque prompt d'angle nomme deux objets signature de la fiche, et toute sortie qui les déplace part à la poubelle, même si elle est belle.",
    },
    {
      type: "h3",
      text: "La lumière ne vient plus du même endroit",
    },
    {
      type: "p",
      text: "Symptôme : l'ombre du personnage tombe à gauche dans un plan, à droite dans le suivant, et l'heure semble avoir changé entre deux répliques. Fix concret : la fiche de lieu fixe une seule source principale et son côté, et chaque prompt la répète mot pour mot. En 3D, la question disparaît, le monde porte sa lumière ; c'est l'un des arguments qui font basculer une scène de nuit vers Marble.",
    },
    {
      type: "h3",
      text: "Le monde 3D s'effondre en gros plan",
    },
    {
      type: "p",
      text: "Symptôme : le plan large est propre, et dès que la caméra approche d'une façade, la texture fond et les bords bavent. C'est ce que j'observe sur les splats à courte distance, et World Labs propose d'ailleurs un outil d'expansion pour regénérer une zone avec plus de détail. Fix concret : agrandis les zones où la caméra ira avant d'enregistrer, garde les inserts (une main sur la poignée, la plaque de rue) en génération d'image 2D depuis la fiche de lieu, et réserve le monde 3D aux plans où la caméra bouge.",
    },
    {
      type: "h3",
      text: "Les droits commerciaux découverts après la livraison",
    },
    {
      type: "p",
      text: "Symptôme : le décor a été généré sur un plan gratuit, le film part chez un client ou sur une plateforme, et la question des droits arrive en dernier. Fix concret : sur la page des tarifs de Marble, les droits commerciaux sont listés dans le plan Pro à 35 dollars par mois. Prends le plan avant de générer le décor final, et écris-le dans le document de pipeline. La même vérification vaut pour chaque outil de la chaîne, comme pour [la musique du film](/blog/musique-ia-droits-videos).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quelle différence entre concept art et décor IA ?",
    },
    {
      type: "p",
      text: "Le concept art explore un univers : cinquante propositions, on en garde deux. Le décor est le lieu retenu, figé dans une fiche et une image maître, dans lequel on va filmer plusieurs plans. Le premier sert à décider, le second à produire. Tu as besoin des deux, dans cet ordre.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Comment garder le même décor d'un plan à l'autre ?",
    },
    {
      type: "p",
      text: "Avec une image maître et des images de référence. Dans Flow, Veo 3.1 accepte jusqu'à trois images de référence pour contrôler les personnages, les objets et le style d'une génération. Donne-lui la plate de ton décor, précise l'angle demandé dans le prompt, et garde la fiche de lieu sous les yeux pour vérifier chaque sortie.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Marble de World Labs, ça sert à quoi pour un décor ?",
    },
    {
      type: "p",
      text: "À générer le lieu une fois en 3D, puis à le filmer sous tous les angles. Marble part d'un texte, d'une image, de plusieurs images ou d'une vidéo, et rend un monde navigable que tu enregistres en vidéo avec un chemin de caméra à images clés, ou que tu exportes en splats gaussiens et en maillages pour Blender ou Unreal.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Combien coûte un décor 3D dans Marble ?",
    },
    {
      type: "p",
      text: "Le plan gratuit donne 7 000 crédits, soit jusqu'à 4 générations de monde par mois, avec entrée texte, image, multi-images et panorama 360. Standard à 20 dollars par mois ajoute l'entrée vidéo et les exports de splats, Pro à 35 dollars ajoute les maillages texturés et les droits commerciaux. Prix lus sur marble.worldlabs.ai le 15 septembre 2026.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Puis-je utiliser un décor Marble dans un film commercial ?",
    },
    {
      type: "p",
      text: "Les droits commerciaux figurent dans le plan Pro à 35 dollars par mois sur la page des tarifs. Si ton film est destiné à un client ou à une plateforme, prends ce plan avant de générer, et note le numéro de plan dans ton document de pipeline pour les festivals qui le demandent.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Le décor IA remplace-t-il le matte painting ?",
    },
    {
      type: "p",
      text: "Il en prend la place dans la chaîne. Le matte painting a toujours servi à agrandir un décor qu'on ne pouvait pas construire, sur verre peint puis en numérique. Un monde généré exporté en 3D fait la même chose avec une caméra qui bouge, ce que la peinture sur verre ne permettait pas.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Construis le lieu, ensuite seulement les images",
    },
    {
      type: "p",
      text: "Écris la fiche de lieu avant d'ouvrir un outil, génère la plate maître, puis tire chaque angle de cette plate ou d'un monde 3D généré une fois. Le premier plan est toujours facile. Le dixième ne l'est que si tu as décidé, avant de générer, où se trouve la porte. Les sources de cet article : [l'annonce de Veo 3.1 et de Flow](https://blog.google/technology/ai/veo-updates-flow/), [la documentation Veo de l'API Gemini](https://ai.google.dev/gemini-api/docs/veo), [la présentation de Marble par World Labs](https://www.worldlabs.ai/blog/marble-world-model), [la documentation de l'outil Record de Marble](https://docs.worldlabs.ai/marble/create/studio-tools/record) et sa page des tarifs.",
    },
    {
      type: "p",
      text: "Note de fondateur : le décor qui coûte le plus cher en regénérations est celui dont personne n'a écrit la fiche avant d'ouvrir un outil. C'est pour ça que la formation IA gratuite d'AI Studios commence par l'écriture et la préparation, et que la génération arrive après. Si tu veux voir comment un décor s'inscrit dans un film entier, [la méthode complète pour créer un film avec l'IA](/blog/creer-film-ia) montre où il se place entre le scénario et le montage.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-16 -->
