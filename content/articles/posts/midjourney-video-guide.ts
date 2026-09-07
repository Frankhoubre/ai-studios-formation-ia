import type { Article } from "@/lib/types/article";

export const midjourneyVideoGuide: Article = {
  title: "Midjourney vidéo : ce que ça fait, ce que ça coûte",
  slug: "midjourney-video-guide",
  description:
    "Midjourney anime tes images en clips de 5 secondes. Ce que le modèle accepte, ce qu'il refuse, et le vrai coût en temps GPU selon ton abonnement.",
  excerpt:
    "Un prompt vidéo HD te coûte autant que vingt générations d'images. C'est ce rapport, pas la qualité du modèle, qui décide de la façon dont tu vas t'en servir.",
  category: "ia-video",
  tags: ["midjourney", "vidéo ia", "image to video", "guide outil"],
  date: "2026-09-07",
  updatedAt: "2026-09-07",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/midjourney-video-guide.webp",
  imageAlt:
    "Banc-titre d'animation dans un petit atelier, une photographie posée sur la vitre sous deux lampes de bureau et une caméra suspendue, des mains gantées tenant un compte-fils et un crayon gras au-dessus du tirage",
  keywords: [
    "midjourney video",
    "midjourney vidéo",
    "animer une image midjourney",
    "midjourney animation",
    "prix vidéo midjourney",
  ],
  relatedSlugs: [
    "midjourney-debutant-premiere-image",
    "midjourney-v8-1-mise-a-jour",
    "image-to-video-ia-methode",
  ],
  faq: [
    {
      question: "Midjourney permet-il de générer une vidéo à partir de texte ?",
      answer:
        "Non. Chaque job vidéo part obligatoirement d'une image qui sert de première frame, la tienne ou une de ta galerie. Le prompt texte n'a qu'un rôle de direction : il oriente le mouvement à l'intérieur de cette image. Si tu cherches du texte vers vidéo pur, il faut aller vers un autre outil.",
    },
    {
      question: "Combien de temps dure une vidéo Midjourney ?",
      answer:
        "Cinq secondes à la génération. Tu peux ensuite l'étendre quatre fois par tranches de quatre secondes, ce qui amène le plan à vingt et une secondes au maximum. Chaque extension consomme autant de temps GPU que la génération de départ, donc un plan de vingt et une secondes coûte cinq fois le prix d'un plan de cinq.",
    },
    {
      question: "Combien coûte une vidéo Midjourney ?",
      answer:
        "Midjourney facture du temps GPU, pas des vidéos. Un prompt vidéo en SD consomme 8 minutes de Fast GPU au réglage par défaut, 2 minutes si tu passes en batch 1. En HD, c'est 26 minutes au batch par défaut et 7 minutes en batch 1. À titre de repère, une génération d'images en V8.1 coûte 0,8 minute en SD et 1,3 minute en HD. Si tu rachètes du temps GPU, il est facturé 4 dollars de l'heure.",
    },
    {
      question: "Quel abonnement Midjourney choisir pour faire de la vidéo ?",
      answer:
        "Le plan Pro à 60 dollars par mois est le premier palier qui tient si la vidéo devient une habitude, parce qu'il ouvre le Relax illimité pour la vidéo SD. Le Basic à 10 dollars plafonne en SD et ses 200 minutes de Fast représentent vingt-cinq prompts vidéo au réglage par défaut, sans plus rien pour les images. Le Standard à 30 dollars ouvre la HD mais son Relax illimité ne couvre que les images.",
    },
    {
      question: "Les vidéos générées par Midjourney ont-elles du son ?",
      answer:
        "Non, les fichiers sortent muets, en mp4 ou en gif. Aucun paramètre audio n'existe côté vidéo. La musique, la voix off, les bruitages et le montage se font ailleurs.",
    },
    {
      question: "Midjourney vidéo est-il meilleur que Kling, Veo ou Runway ?",
      answer:
        "Sur les caractéristiques mesurables, non : 720p au mieux, vingt et une secondes maximum, pas de son, pas de texte vers vidéo, et un modèle vidéo qui n'a pas changé depuis juin 2025 pendant que les concurrents sortent une version tous les deux mois. L'intérêt de Midjourney est ailleurs : ta bibliothèque d'images est déjà là, le style est déjà le tien, et l'animation se déclenche sans changer d'outil ni réexporter quoi que ce soit.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu passes la souris sur une image de ta galerie Midjourney, un bouton Animate apparaît, deux clics plus tard tu as quatre clips de cinq secondes. Et le 12 du mois, ton quota Fast est vide.",
    },
    {
      type: "p",
      text: "Ce que tu vas trouver ici : les chiffres officiels du coût en temps GPU, la liste de ce que le modèle accepte et refuse, et la méthode que j'applique pour animer une série d'images sans y laisser tout l'abonnement.",
    },
    {
      type: "p",
      text: "La partie image de Midjourney est passée en V8.2 le 24 juillet 2026. La partie vidéo tourne toujours sur le V1 annoncé le 18 juin 2025. Quinze mois sans nouveau modèle, dans un secteur où Kling, Veo et Runway publient une version tous les deux mois. Ça change ce que tu peux raisonnablement lui demander.",
    },
    {
      type: "h2",
      id: "contraintes",
      text: "Cinq contraintes qui définissent la vidéo Midjourney",
    },
    {
      type: "p",
      text: "Ces limites sont toutes écrites dans la documentation, aucune n'est un piège caché. Mises bout à bout, elles dessinent un outil beaucoup plus étroit que ce que le mot vidéo laisse imaginer.",
    },
    {
      type: "ul",
      items: [
        "Le départ se fait obligatoirement depuis une image, il n'y a pas de texte vers vidéo. Tu fournis une première frame, le prompt sert seulement à orienter le mouvement à l'intérieur.",
        "Cinq secondes par génération, extensibles quatre fois par tranches de quatre secondes, soit vingt et une secondes au maximum.",
        "Pas de son. Le fichier sort muet, en mp4 ou en gif.",
        "480p en SD, 720p en HD. Les dimensions exactes dérivent du ratio de l'image de départ, et Midjourney prévient qu'il peut l'ajuster légèrement au passage.",
        "Six paramètres, pas un de plus : `--motion low`, `--motion high`, `--raw`, `--loop`, `--end` et `--bs`. Les références de style, l'Edit Model et les image prompts ne fonctionnent pas sur un job vidéo, et les paramètres de ton image d'origine sont retirés automatiquement.",
      ],
    },
    {
      type: "h3",
      id: "mouvement",
      text: "Le mouvement se règle en deux crans, et c'est tout",
    },
    {
      type: "p",
      text: "Low Motion, le réglage par défaut, donne des scènes presque immobiles, des mouvements de caméra lents, des gestes discrets. High Motion ouvre les grands mouvements d'appareil et les déplacements de personnage.",
    },
    {
      type: "p",
      text: "La documentation précise elle-même que High Motion peut produire des mouvements irréalistes ou saccadés. C'est une façon polie d'annoncer que tu vas jeter des plans, et ça vaut la peine de le savoir avant de lancer une série.",
    },
    {
      type: "p",
      text: "Le paramètre `--raw` fonctionne comme le mode Raw des images : il retire la couche esthétique que Midjourney ajoute d'office et laisse ton texte peser davantage. Sur un plan où tu sais exactement quel mouvement tu veux, c'est lui qui fait la différence.",
    },
    {
      type: "h3",
      id: "boucle",
      text: "La boucle et la frame de fin sont les fonctions les plus sous-estimées",
    },
    {
      type: "p",
      text: "Dès que tu déposes une image dans la section Starting Frame, une case Loop apparaît en face. Elle réutilise ton image de départ comme dernière image et tu récupères un plan qui tourne sans raccord visible.",
    },
    {
      type: "p",
      text: "Tu peux aussi poser une image différente en frame de fin. Deux images de la même série, une au début, une à la fin, et le modèle fabrique le trajet entre les deux. C'est là que le V1 s'en sort le mieux, parce qu'on lui donne les deux bouts au lieu de lui demander d'inventer la suite.",
    },
    {
      type: "h2",
      id: "cout-gpu",
      text: "Le vrai prix d'un plan animé",
    },
    {
      type: "p",
      text: "Midjourney facture du temps GPU, jamais des vidéos à l'unité. Un prompt vidéo en SD consomme huit minutes, un prompt en HD vingt-six. Une génération d'images en V8.1 coûte 0,8 minute en SD et 1,3 minute en HD.",
    },
    {
      type: "p",
      text: "Un seul prompt vidéo HD te coûte donc autant que vingt générations d'images HD. Garde ce rapport en tête avant de te demander quel prompt écrire, il pèse plus lourd que le reste.",
    },
    {
      type: "image",
      src: "/images/articles/midjourney-video-guide-cout-gpu.webp",
      alt: "Section Batch Size de la documentation Midjourney avec le tableau des coûts GPU : résolution SD à 8, 4 et 2 minutes selon le batch, résolution HD à 26, 13 et 7 minutes",
      caption:
        "Le tableau officiel des coûts par prompt vidéo, selon la résolution et la taille de batch. Source : docs.midjourney.com, page Video, capture du 07/09/2026.",
    },
    {
      type: "p",
      text: "Le paramètre `--bs` divise la note. Par défaut Midjourney sort quatre vidéos par prompt, tu peux lui en demander une ou deux, et la facture baisse dans la même proportion.",
    },
    {
      type: "table",
      caption:
        "Coût d'un prompt vidéo, et ce que ça représente en générations d'images",
      headers: [
        "Réglage",
        "Temps GPU",
        "Équivalent en générations d'images SD",
        "Coût si tu rachètes du GPU à 4 $/h",
      ],
      rows: [
        ["SD, batch 4 (défaut)", "8 min", "10", "0,53 $"],
        ["SD, batch 1", "2 min", "2,5", "0,13 $"],
        ["HD, batch 4", "26 min", "32,5", "1,73 $"],
        ["HD, batch 1", "7 min", "8,75", "0,47 $"],
      ],
    },
    {
      type: "p",
      text: "Une extension coûte exactement le même temps GPU qu'une génération initiale. Un plan de vingt et une secondes, c'est une génération plus quatre extensions : cinq fois le tarif. En HD au batch par défaut, ce seul plan avale 130 minutes de Fast GPU.",
    },
    {
      type: "p",
      text: "Sur un plan Standard qui en compte 900 par mois, ça fait six plans longs dans le mois, et presque plus rien pour les images. Quand Midjourney a ouvert la vidéo HD au plan Standard en août 2025, l'annonce disait littéralement de faire attention parce que c'est cher. Ils avaient raison.",
    },
    {
      type: "p",
      text: "> Pro Tip : Midjourney recommande de garder le batch à 4. Je conseille l'inverse quand tu travailles au budget. Fais tes essais en `--bs 1` et en SD pour valider le mouvement et le cadrage, puis relance en batch 4 sur la seule image que tu gardes. Tu passes de huit minutes par essai à deux.",
    },
    {
      type: "h2",
      id: "methode",
      text: "Comment j'anime une série sans exploser le quota",
    },
    {
      type: "p",
      text: "L'erreur de départ, c'est d'animer les images dans l'ordre où elles arrivent dans la galerie. Toutes ne se prêtent pas au mouvement, et le tri se fait sur des critères visuels, pas sur celles que tu préfères.",
    },
    {
      type: "p",
      text: "Le tableau ci-dessous vient de mes essais, pas de la documentation. Prends-le comme un point de départ à corriger avec ton propre style d'images.",
    },
    {
      type: "table",
      caption: "Trier ses images avant d'appuyer sur Animate",
      headers: [
        "Type d'image de départ",
        "Comportement observé",
        "Réglage à tenter",
      ],
      rows: [
        [
          "Plan large avec de la profondeur, ciel, fumée, eau, feuillage",
          "Le modèle a de la matière à faire bouger sans toucher à un visage",
          "Low Motion, `--raw`, un seul mouvement de caméra dans le prompt",
        ],
        [
          "Portrait serré, regard caméra",
          "Micro-mouvements corrects, déformations dès qu'on pousse",
          "Low Motion, prompt très court, jamais High Motion",
        ],
        [
          "Image graphique, aplats, illustration",
          "Peu de matière à animer, rendu souvent mou",
          "Boucle, ou renoncer et garder l'image fixe",
        ],
        [
          "Foule, mains au premier plan, texte incrusté",
          "La zone la plus fragile de tous les modèles vidéo",
          "Recadrer pour sortir la zone du champ avant d'animer",
        ],
        [
          "Deux images d'une même série, même décor",
          "La transition entre les deux est la tâche la plus simple pour le modèle",
          "Frame de départ plus frame de fin",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Choisis dix images au maximum dans ta série. Le tri ne coûte rien en GPU et c'est la seule étape qui fait baisser la facture pour de bon.",
        "Recadre maintenant si une zone fragile traîne au bord du cadre. Le ratio de la vidéo suit celui de l'image de départ, donc le recadrage se joue maintenant.",
        "Premier passage en SD, `--bs 1`, Low Motion, un prompt d'une ligne qui décrit un seul mouvement. Deux minutes de GPU par essai.",
        "Garde ce qui marche, jette le reste sans t'acharner. Un plan qui glisse au premier essai glisse aussi au troisième.",
        "Relance les plans retenus en HD, batch 1, avec le même prompt. Sept minutes chacun.",
        "N'étends que si le montage l'exige. Cinq secondes suffisent pour un plan de coupe et l'extension coûte le prix d'un plan neuf.",
        "Exporte en Download for Social pour un réseau, en Download Raw Video si tu passes par un montage. Le son et le rythme se fabriquent ailleurs.",
      ],
    },
    {
      type: "p",
      text: "Tout ça suppose que tes images de départ tiennent la route. Si tu débutes sur l'outil, [la prise en main de Midjourney](/blog/midjourney-debutant-premiere-image) et [les paramètres qui changent le rendu](/blog/prompt-midjourney-parametres) valent le détour avant de dépenser du GPU en mouvement. Pour la logique générale de l'animation d'images fixes, valable quel que soit l'outil, tout est dans [la méthode image to video](/blog/image-to-video-ia-methode).",
    },
    {
      type: "p",
      text: "Les chiffres de cet article viennent de la [page Video de la documentation Midjourney](https://docs.midjourney.com/hc/en-us/articles/37460773864589-Video) et du [tableau officiel de comparaison des plans](https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans). Ils bougent : vérifie-les avant de bâtir un budget dessus.",
    },
    {
      type: "h2",
      id: "abonnement",
      text: "Quel abonnement tient la route pour la vidéo",
    },
    {
      type: "image",
      src: "/images/articles/midjourney-video-guide-plans.webp",
      alt: "Tableau de comparaison des abonnements Midjourney montrant le prix mensuel, le temps GPU Fast, le Relax illimité réservé aux images sur le plan Standard et étendu à la vidéo SD sur Pro et Mega, et la résolution vidéo limitée au SD sur le plan Basic",
      caption:
        "Le tableau officiel des plans : le Relax illimité en vidéo commence au plan Pro, et seulement en SD. Source : docs.midjourney.com, page Comparing Midjourney Plans, capture du 07/09/2026.",
    },
    {
      type: "p",
      text: "Le mot illimité ne couvre pas la même chose d'une ligne à l'autre, et c'est là qu'on se trompe de plan.",
    },
    {
      type: "ul",
      items: [
        "Le Basic à 10 $ plafonne en SD. Ses 200 minutes de Fast valent vingt-cinq prompts au réglage par défaut, ou cent en batch 1, et rien à côté pour les images.",
        "Le Relax illimité en vidéo commence au Pro à 60 $, uniquement en SD. Le Standard, lui, offre du Relax illimité pour les images seulement.",
        "La HD s'ouvre dès le Standard, en Fast uniquement. Aucun plan ne permet de produire de la vidéo HD sans entamer son quota.",
      ],
    },
    {
      type: "p",
      text: "Si la vidéo devient une habitude chez toi, le Pro est le premier palier honnête. Le Relax illimité en SD change la nature du travail : tu testes sans compter et tu réserves le Fast aux plans finaux. En dessous, chaque clip se prélève sur ton budget images.",
    },
    {
      type: "h2",
      id: "pieges",
      text: "Quatre erreurs qui vident un quota Fast",
    },
    {
      type: "h3",
      id: "piege-hd",
      text: "Tester en HD",
    },
    {
      type: "p",
      text: "L'image est superbe, tu veux le meilleur rendu tout de suite, tu lances en HD batch 4. Vingt-six minutes de GPU partent pour découvrir que le personnage tourne la tête de travers à la troisième seconde.",
    },
    {
      type: "p",
      text: "Fix concret : le test se fait toujours en SD batch 1, deux minutes. La HD ne sert qu'à refaire un plan dont tu connais déjà le résultat.",
    },
    {
      type: "h3",
      id: "piege-motion",
      text: "Compter sur High Motion pour sauver un plan mou",
    },
    {
      type: "p",
      text: "Le plan manque de vie, tu passes en High Motion pour forcer un peu. Tu récupères du mouvement, et aussi des membres qui se dédoublent et des textures qui sautent d'une frame à l'autre.",
    },
    {
      type: "p",
      text: "Fix concret : le mouvement se gagne dans l'image de départ. Une image avec un premier plan, un arrière-plan et un élément déjà mobile bougera bien en Low Motion. Une image plate restera plate quel que soit le réglage.",
    },
    {
      type: "h3",
      id: "piege-parametres",
      text: "Croire que le style de la série va suivre",
    },
    {
      type: "p",
      text: "Tu as passé une heure à caler un `--sref` et un profil de personnalisation sur douze images. Au moment d'animer, tout saute : les paramètres de l'image d'origine sont retirés automatiquement et les références de style ne sont pas compatibles avec un job vidéo.",
    },
    {
      type: "p",
      text: "Fix concret : verrouille ton style au niveau des images. La vidéo hérite de ce qui se trouve dans la frame de départ, et de rien d'autre. Si la cohérence doit tenir sur douze plans, elle doit tenir dans les douze images fixes d'abord.",
    },
    {
      type: "h3",
      id: "piege-extend",
      text: "Étendre par réflexe jusqu'à vingt et une secondes",
    },
    {
      type: "p",
      text: "Le plafond existe, donc on a envie de le remplir. Chaque tranche de quatre secondes coûte le prix d'une génération complète, et le modèle a de moins en moins de contexte à mesure qu'il s'éloigne de ta frame de départ.",
    },
    {
      type: "p",
      text: "Fix concret : produis des plans de cinq secondes et fabrique la durée au montage. Trois plans courts coûtent six minutes de GPU en SD batch 1 quand un plan de vingt et une secondes en coûte dix, et ils tiennent mieux le regard.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Midjourney permet-il de générer une vidéo à partir de texte ?",
    },
    {
      type: "p",
      text: "Non. Chaque job vidéo part obligatoirement d'une image qui sert de première frame, la tienne ou une de ta galerie. Le prompt texte n'a qu'un rôle de direction : il oriente le mouvement à l'intérieur de cette image. Si tu cherches du texte vers vidéo pur, il faut aller vers un autre outil.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien de temps dure une vidéo Midjourney ?",
    },
    {
      type: "p",
      text: "Cinq secondes à la génération. Tu peux ensuite l'étendre quatre fois par tranches de quatre secondes, ce qui amène le plan à vingt et une secondes au maximum. Chaque extension consomme autant de temps GPU que la génération de départ, donc un plan de vingt et une secondes coûte cinq fois le prix d'un plan de cinq.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien coûte une vidéo Midjourney ?",
    },
    {
      type: "p",
      text: "Midjourney facture du temps GPU, pas des vidéos. Un prompt vidéo en SD consomme 8 minutes de Fast GPU au réglage par défaut, 2 minutes si tu passes en batch 1. En HD, c'est 26 minutes au batch par défaut et 7 minutes en batch 1. À titre de repère, une génération d'images en V8.1 coûte 0,8 minute en SD et 1,3 minute en HD. Si tu rachètes du temps GPU, il est facturé 4 dollars de l'heure.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Quel abonnement Midjourney choisir pour faire de la vidéo ?",
    },
    {
      type: "p",
      text: "Le plan Pro à 60 dollars par mois est le premier palier qui tient si la vidéo devient une habitude, parce qu'il ouvre le Relax illimité pour la vidéo SD. Le Basic à 10 dollars plafonne en SD et ses 200 minutes de Fast représentent vingt-cinq prompts vidéo au réglage par défaut, sans plus rien pour les images. Le Standard à 30 dollars ouvre la HD mais son Relax illimité ne couvre que les images.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Les vidéos générées par Midjourney ont-elles du son ?",
    },
    {
      type: "p",
      text: "Non, les fichiers sortent muets, en mp4 ou en gif. Aucun paramètre audio n'existe côté vidéo. La musique, la voix off, les bruitages et le montage se font ailleurs.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Midjourney vidéo est-il meilleur que Kling, Veo ou Runway ?",
    },
    {
      type: "p",
      text: "Sur les caractéristiques mesurables, non : 720p au mieux, vingt et une secondes maximum, pas de son, pas de texte vers vidéo, et un modèle vidéo qui n'a pas changé depuis juin 2025 pendant que les concurrents sortent une version tous les deux mois. L'intérêt de Midjourney est ailleurs : ta bibliothèque d'images est déjà là, le style est déjà le tien, et l'animation se déclenche sans changer d'outil ni réexporter quoi que ce soit.",
    },
    {
      type: "h2",
      id: "chantier",
      text: "Ton chantier de la semaine",
    },
    {
      type: "p",
      text: "Ouvre ta galerie et sors dix images d'une même série, celles qui ont de la profondeur et pas de visage en gros plan. Anime-les en SD, batch 1, Low Motion, un prompt d'une ligne chacune. Vingt minutes de GPU au total, le prix de vingt-cinq générations d'images.",
    },
    {
      type: "p",
      text: "Sur ces dix essais, tu verras vite lesquels tiennent. Reprends les deux ou trois meilleurs en HD, monte-les bout à bout avec une piste son, et tu auras une réponse honnête à la seule question qui compte : est-ce que cet outil a sa place dans ta chaîne de production, ou est-ce que tu iras chercher le mouvement ailleurs. Si la réponse est ailleurs, [le tour des générateurs vidéo](/blog/meilleurs-outils-ia-video) te donne les points de comparaison.",
    },
    {
      type: "p",
      text: "Note de fondateur : je garde Midjourney pour l'image et je vais chercher le mouvement ailleurs, sauf pour une chose. Les boucles et les transitions entre deux images d'une même série, là le V1 fait le travail pour deux minutes de GPU et je n'ai pas trouvé plus simple. La formation IA gratuite d'AI Studios passe du temps sur ce genre d'arbitrage, parce que savoir où dépenser son budget de génération compte plus que trouver le meilleur outil du moment.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-07 -->
