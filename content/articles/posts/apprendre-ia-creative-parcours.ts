import type { Article } from "@/lib/types/article";

export const apprendreIaCreativeParcours: Article = {
  title: "Apprendre l'IA créative en 2026 : le bon parcours",
  slug: "apprendre-ia-creative-parcours",
  description:
    "Gratuit ou payant, image avant vidéo, CPF ou pas : le parcours pour apprendre l'IA créative en 2026 sans empiler les tutos ni les abonnements.",
  excerpt:
    "Quarante onglets de tutos, trois abonnements, zéro projet à montrer : le problème vient rarement du manque de formation, presque toujours de l'ordre dans lequel tu apprends. Voici le parcours que je conseille en 2026, brique par brique, avec ce qui vaut zéro euro et ce qui mérite d'être payé.",
  category: "workflow-creatif",
  tags: [
    "apprendre l'ia",
    "formation",
    "parcours",
    "ia créative",
    "débutant",
    "cpf",
  ],
  date: "2026-09-11",
  updatedAt: "2026-09-11",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/apprendre-ia-creative-parcours.webp",
  imageAlt:
    "Table de cuisine en bois un dimanche matin, une personne en pull gris trie des tirages photo en deux piles, la pile de droite barrée de croix rouges au crayon gras, un cahier à spirale ouvert sur un parcours en quatre cases reliées par des flèches, un mug de café, une tablette éteinte et une clémentine dans un bol, lumière rasante venant de la fenêtre",
  keywords: [
    "apprendre l'ia créative",
    "se former à l'ia",
    "apprendre ia générative",
    "formation ia créative gratuite",
    "parcours ia image vidéo",
  ],
  relatedSlugs: [
    "formation-ia-video",
    "creer-video-ia-gratuit",
    "generer-image-ia-guide-debutant",
  ],
  faq: [
    {
      question: "Faut-il savoir coder pour apprendre l'IA créative ?",
      answer:
        "Non, à une condition : choisir le parcours créateur et laisser le parcours ingénieur à ceux qui veulent construire des modèles. Le cours de diffusion de Hugging Face, gratuit et excellent, demande un bon niveau en Python et des bases en deep learning avec PyTorch. Il t'apprend comment une image se forme dans le modèle, pas comment livrer une pub à un client. Midjourney, Kling, Runway ou CapCut se pilotent sans une ligne de code.",
    },
    {
      question: "Vaut-il mieux commencer par l'image ou par la vidéo ?",
      answer:
        "Par l'image, sans hésiter. En 2026, une vidéo IA propre part presque toujours d'une image de référence, donc tout ce que tu apprends sur le cadre, la lumière et la cohérence d'un personnage se réutilise tel quel en vidéo. Et l'image coûte quelques centimes par essai là où un plan vidéo raté brûle des crédits. On apprend plus vite là où l'erreur est bon marché.",
    },
    {
      question: "Peut-on apprendre l'IA créative gratuitement ?",
      answer:
        "Oui, l'essentiel de la matière existe gratuitement : docs officielles des outils, académies d'éditeurs comme Runway Academy, cours universitaires en ligne, formations courtes comme le challenge gratuit d'AI Studios. Ce que le gratuit ne fournit pas, c'est un ordre, une échéance et quelqu'un qui regarde ton travail. C'est précisément ce que tu achètes quand tu payes, et c'est la seule raison valable de payer.",
    },
    {
      question: "Une formation IA créative est-elle finançable par le CPF ?",
      answer:
        "Rarement. D'après la fiche service-public.gouv.fr vérifiée le 27 juin 2026, le CPF finance des formations certifiantes, inscrites au RNCP ou au Répertoire spécifique, et tu participes à hauteur de 150 € quel que soit le prix de la formation, sauf cas d'exemption comme un abondement de l'employeur. La plupart des formations à la création IA ne sont pas certifiantes, donc pas éligibles. Si une page te promet le CPF sans nommer la certification, passe ton chemin.",
    },
    {
      question: "Combien de temps pour devenir opérationnel ?",
      answer:
        "Compte douze semaines de pratique régulière pour tenir les quatre briques : intention, image, mouvement, assemblage. Pas douze semaines de visionnage. Si tu produis un livrable court chaque semaine et que tu le montres à quelqu'un, tu seras capable de livrer une vidéo courte propre au bout du parcours. Ce que tu ne sauras pas encore faire, c'est un film. Ça, c'est l'année d'après.",
    },
    {
      question: "Comment repérer une mauvaise formation IA avant de payer ?",
      answer:
        "Sept questions suffisent : qui l'enseigne et que peut-on voir de son travail, à quelle date le contenu a été mis à jour, quel livrable tu produis à la fin, qui corrige tes exercices, si le programme nomme les outils précis ou reste vague, si les témoignages citent un projet ou juste un ressenti, et si la promesse parle de revenus plutôt que de compétences. Deux mauvaises réponses, et tu gardes ton argent.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Quarante onglets de tutos ouverts, trois abonnements qui tournent, et pas un projet propre à montrer. Tu sais générer une image correcte, tu as fait deux clips qui bougent, et tu sens que tu piétines depuis des semaines sans pouvoir dire pourquoi.",
    },
    {
      type: "p",
      text: "Quand tu auras fini de lire, tu sauras dans quel ordre apprendre les quatre briques de l'IA créative, ce qui vaut zéro euro et ce qui mérite d'être payé, si le CPF peut t'aider (spoiler : presque jamais), et comment juger une formation en dix minutes avant de sortir ta carte.",
    },
    {
      type: "p",
      text: "Mon parti pris : le prix de la formation est un faux sujet. Ce qui te coûte vraiment, c'est l'ordre dans lequel tu apprends.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Deux façons d'apprendre l'IA créative, une seule te sert",
    },
    {
      type: "p",
      text: "Quand tu tapes « apprendre l'IA » dans un moteur de recherche, tu tombes sur deux mondes qui portent le même nom et n'ont rien à voir. Le premier forme des gens qui construisent les modèles. Le second forme des gens qui produisent des images et des vidéos avec. Beaucoup de débutants s'engagent dans le premier par erreur, et abandonnent en croyant que l'IA créative est trop dure pour eux.",
    },
    {
      type: "h3",
      text: "Le parcours ingénieur et le parcours créateur",
    },
    {
      type: "p",
      text: "Prends le cours de diffusion de Hugging Face. Il est gratuit, sérieux, en quatre unités, et il t'explique comment un modèle fabrique une image à partir du bruit, comment l'affiner sur tes propres données, comment fonctionne Stable Diffusion sous le capot. Sa page d'accueil précise aussi qu'il demande un bon niveau en Python et des bases en deep learning avec PyTorch.",
    },
    {
      type: "image",
      src: "/images/articles/apprendre-ia-creative-parcours-hf-diffusion.webp",
      alt: "Page d'introduction du Diffusion Course de Hugging Face, annonçant un cours gratuit en quatre unités et listant les prérequis : bon niveau en Python et bases en deep learning et PyTorch",
      caption:
        "La page d'accueil du cours de diffusion de Hugging Face : gratuit, quatre unités, et deux prérequis qui excluent la plupart des créateurs. Source : huggingface.co/learn, capture du 11/09/2026.",
    },
    {
      type: "p",
      text: "Si tu veux comprendre le moteur, c'est une des meilleures portes d'entrée qui existent. Si tu veux livrer une pub à un restaurant le mois prochain, c'est trois semaines perdues. Midjourney, Kling, Runway, CapCut se pilotent sans une ligne de code, et le client regardera le rendu, jamais ton score au notebook de l'unité 2.",
    },
    {
      type: "p",
      text: "Le parcours créateur, celui que je décris ici, consiste à apprendre à décider avant de générer, puis à corriger après. Tout le reste est du vocabulaire d'outil, et le vocabulaire change tous les trois mois.",
    },
    {
      type: "h3",
      text: "Les quatre briques, et pourquoi l'image passe avant la vidéo",
    },
    {
      type: "p",
      text: "Toute production IA, de la vignette Instagram au court-métrage, repose sur quatre compétences empilées. L'intention : transformer une idée floue en brief ou en micro-scène que la machine peut exécuter. L'image : le cadre, la lumière, la matière, la cohérence d'un personnage d'une image à l'autre. Le mouvement : passer d'une image de référence à un plan qui bouge sans se déformer. L'assemblage : le montage, le son, la voix, le rythme.",
    },
    {
      type: "p",
      text: "L'ordre compte plus que le contenu. Une vidéo IA propre en 2026 part presque toujours d'une image de référence, donc tout ce que tu apprends sur l'image se réutilise tel quel en vidéo. Et une image coûte quelques centimes par essai, là où un plan vidéo raté brûle des crédits. On progresse plus vite là où l'erreur est bon marché. Le [guide pour générer une image avec l'IA quand on débute](/blog/generer-image-ia-guide-debutant) couvre cette première brique.",
    },
    {
      type: "h2",
      id: "gratuit-ou-payant",
      text: "Gratuit ou payant : ce que chaque euro achète vraiment",
    },
    {
      type: "p",
      text: "L'essentiel de la matière existe gratuitement, parce que les éditeurs d'outils ont intérêt à ce que tu saches t'en servir. Ils forment donc, et plutôt bien. Ce qui manque au gratuit est ailleurs.",
    },
    {
      type: "table",
      caption: "Les cinq façons d'apprendre l'IA créative, et ce que chacune te donne (état au 11/09/2026)",
      headers: ["Source", "Ce que tu y trouves", "Ce qui manque", "Pour qui"],
      rows: [
        [
          "Docs et académies des éditeurs (Runway Academy, guides Midjourney, Kling)",
          "Le vocabulaire exact de l'outil, à jour, gratuit",
          "Un ordre entre les outils, un regard sur ton travail",
          "Tout le monde, en complément",
        ],
        [
          "Cours universitaires en ligne (MOOC)",
          "La théorie, souvent le parcours ingénieur",
          "La finition : 3,13 % de participants terminaient les cours de MIT et Harvard sur edX en 2017-2018",
          "Ceux qui veulent comprendre le moteur",
        ],
        [
          "YouTube et tutos",
          "Une réponse rapide à une question précise",
          "La cohérence : chaque tuto suppose un contexte différent",
          "Pour débloquer, pas pour apprendre",
        ],
        [
          "Formation courte gratuite (challenge, mini-série)",
          "Une méthode compacte de l'idée à la vidéo, un premier livrable",
          "La profondeur et le suivi individuel",
          "Ceux qui veulent tester avant de s'engager",
        ],
        [
          "Formation payante avec suivi",
          "Un ordre, une échéance, quelqu'un qui corrige",
          "Rien si elle est bonne, tout si elle est mauvaise",
          "Ceux qui ont déjà produit et qui plafonnent",
        ],
      ],
    },
    {
      type: "p",
      text: "Le chiffre de la deuxième ligne vient de l'étude « The MOOC Pivot » publiée dans Science en janvier 2019 par Justin Reich et José Ruipérez-Valiente, sur 12,67 millions d'inscriptions aux cours de MIT et Harvard entre 2012 et 2018. Le taux d'achèvement était tombé à 3,13 % en 2017-2018. Rien n'indique que la génération d'images ait changé cette mécanique : sans échéance ni regard extérieur, on regarde, on ne termine pas.",
    },
    {
      type: "p",
      text: "Regarde ce que fait Runway de son côté. Runway Academy propose des cours structurés sur inscription gratuite, dont « AI for Advertising » en dix modules pour débutants, « AI for Visual Effects » en six modules, et un guide de prompts sur les mouvements de caméra. C'est bien fait, à jour sur Gen-4 et Aleph, et ça ne te dira jamais si ta pub est bonne.",
    },
    {
      type: "image",
      src: "/images/articles/apprendre-ia-creative-parcours-runway-academy.webp",
      alt: "Page d'accueil de Runway Academy présentant des cours comme AI for Advertising en dix modules et AI for Visual Effects en six modules, chacun avec un bouton d'inscription gratuite",
      caption:
        "Les cours de Runway Academy, tous en inscription gratuite. Source : academy.runwayml.com, capture du 11/09/2026.",
    },
    {
      type: "p",
      text: "Donc la seule raison valable de payer une formation, c'est d'acheter ce que le gratuit ne fournit pas : un ordre, une échéance, et quelqu'un qui regarde ton travail. Si une formation payante ne propose aucun des trois, tu achètes un YouTube derrière un mur.",
    },
    {
      type: "h3",
      text: "Le CPF, et pourquoi il ne t'aidera presque jamais ici",
    },
    {
      type: "p",
      text: "La question revient à chaque session. La fiche service-public.gouv.fr sur le compte personnel de formation, vérifiée le 27 juin 2026, est claire : le CPF finance des formations certifiantes, inscrites au RNCP ou au Répertoire spécifique, des bilans de compétences, des VAE. Et au moment où j'écris, tu participes à hauteur de 150 € par formation, quel que soit son prix, sauf exemption (abondement de l'employeur, points du compte de prévention, entre autres).",
    },
    {
      type: "image",
      src: "/images/articles/apprendre-ia-creative-parcours-cpf.webp",
      alt: "Fiche service-public.gouv.fr sur le compte personnel de formation, section sur la participation financière de 150 euros et les formations éligibles",
      caption:
        "La fiche CPF de service-public.gouv.fr : participation de 150 € et liste des formations éligibles. Source : service-public.gouv.fr, fiche F10705 vérifiée le 27/06/2026, capture du 11/09/2026.",
    },
    {
      type: "p",
      text: "La plupart des formations à la création IA, la nôtre comprise, ne sont pas certifiantes. Elles apprennent un métier qui n'a pas encore de référentiel. Quand une page te promet « éligible CPF » sans nommer la certification et son numéro d'enregistrement, c'est soit une formation généraliste en bureautique repeinte en IA, soit un mensonge. Dans les deux cas, ferme l'onglet.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Le parcours en douze semaines, brique par brique",
    },
    {
      type: "p",
      text: "Douze semaines de pratique, à raison d'un livrable court par semaine. Les heures de visionnage ne s'ajoutent pas au compteur. Si tu as moins de temps, allonge le calendrier, ne saute pas d'étape.",
    },
    {
      type: "ol",
      items: [
        "Semaines 1 et 2, l'intention. Avant d'ouvrir un générateur, écris dix micro-scènes de trois phrases : qui, où, ce qui se passe, ce qu'on doit ressentir. C'est la matière première de tout ce qui suit, et c'est ce que personne ne travaille.",
        "Semaines 3 à 5, l'image. Un seul outil (Midjourney ou un modèle ouvert, peu importe), et trois exercices : la même scène sous trois lumières, le même personnage sur six images, une image qui ressemble à une photo et pas à une image IA. Garde les ratés, ils t'apprendront plus que les réussites.",
        "Semaine 6, la pause bilan. Reprends tes trente meilleures images et jette celles que tu ne montrerais pas à un client. S'il en reste moins de dix, refais deux semaines d'image. C'est là que la plupart trichent.",
        "Semaines 7 à 9, le mouvement. Passe tes images de référence en vidéo avec un seul outil (Kling, Runway ou Veo). L'objectif : un personnage qui ne se déforme pas et une caméra qui fait ce que tu lui demandes. La beauté attendra. La [méthode image-to-video](/blog/image-to-video-ia-methode) donne le protocole.",
        "Semaines 10 et 11, l'assemblage. Cinq plans, une voix, une musique, trente secondes montées. Tu découvres que le montage décide de tout et que tes plans les plus beaux ne servent à rien s'ils ne s'enchaînent pas.",
        "Semaine 12, la livraison. Une vidéo courte, propre, montrée à trois personnes qui ne t'aiment pas assez pour mentir. Note leurs remarques, c'est ton programme du trimestre suivant.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : tiens un fichier « décisions » à côté de tes générations. Une ligne par essai : ce que tu voulais, ce que tu as changé, ce que ça a donné. Au bout de six semaines, ce fichier vaut plus que n'importe quel cours, parce qu'il contient tes erreurs à toi.",
    },
    {
      type: "p",
      text: "Pour la version zéro euro de ce parcours, le [programme d'apprentissage IA image et vidéo sur 30 jours](/blog/plan-apprentissage-ia-image-video-30-jours) détaille les exercices semaine par semaine, et la méthode pour [créer une vidéo IA gratuitement](/blog/creer-video-ia-gratuit) liste les outils qui tiennent sans abonnement. Si tu vises la vidéo en priorité, le pilier sur la [formation IA vidéo](/blog/formation-ia-video) reprend le même parcours en version longue, du script au montage. Pour les sources citées plus haut : la [page du cours de diffusion de Hugging Face](https://huggingface.co/learn/diffusion-course/unit0/1), [Runway Academy](https://academy.runwayml.com/), la [fiche CPF de service-public.gouv.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F10705) et le [post-print de « The MOOC Pivot » sur le dépôt du MIT](https://dspace.mit.edu/bitstream/handle/1721.1/136215/post_print-MOOC_Pivot.pdf?sequence=2&isAllowed=y).",
    },
    {
      type: "h3",
      text: "Sept questions avant de payer une formation IA",
    },
    {
      type: "p",
      text: "Dix minutes sur la page de vente, et tu sais. Deux mauvaises réponses, tu gardes ton argent.",
    },
    {
      type: "ul",
      items: [
        "Qui enseigne, et qu'est-ce que je peux voir de son travail ? Un formateur qui n'a rien produit de montrable t'apprendra à produire des choses qu'on ne montre pas.",
        "Quelle est la date de mise à jour du contenu ? En IA créative, un module de plus d'un an parle d'outils qui ont changé de version deux fois, ou qui ont fermé.",
        "Qu'est-ce que je produis à la fin ? Si la réponse est « des connaissances », passe. Si c'est « une vidéo de 30 secondes que tu montres », reste.",
        "Qui corrige mes exercices, et en combien de temps ? Si on te répond « la communauté », insiste jusqu'à obtenir un nom et un délai.",
        "Le programme nomme-t-il des outils précis ? « Les meilleurs outils IA du marché » sans un seul nom, c'est un programme écrit pour ne jamais être périmé, donc jamais utile.",
        "Les témoignages citent-ils un projet ? « Ça a changé ma vie » ne se vérifie pas. « J'ai livré la vidéo de lancement de telle boutique » se vérifie.",
        "La promesse parle-t-elle de revenus ou de compétences ? Les pages qui te promettent 5 000 € par mois vendent un rêve. Une formation honnête promet ce que tu sauras faire.",
      ],
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les quatre manières de perdre six mois",
    },
    {
      type: "h3",
      text: "Collectionner au lieu de pratiquer",
    },
    {
      type: "p",
      text: "Tu sauvegardes des tutos, tu t'inscris à des newsletters, tu as une playlist « à regarder » de 80 vidéos. Symptôme reconnaissable : tu connais le nom de tous les outils et tu n'as pas généré une image depuis dix jours.",
    },
    {
      type: "p",
      text: "Fix concret : une règle de un pour un. Une vidéo regardée, un exercice produit dans la foulée, même moche. Si tu n'as pas le temps de faire l'exercice, tu n'as pas le temps de regarder la vidéo.",
    },
    {
      type: "h3",
      text: "Payer les outils avant la méthode",
    },
    {
      type: "p",
      text: "Trois abonnements dès la première semaine « pour avoir le choix ». Résultat : tu passes ton temps à comparer les outils au lieu d'apprendre la lumière, et tu rentabilises tes abonnements en générant n'importe quoi pour ne pas gaspiller les crédits.",
    },
    {
      type: "p",
      text: "Fix concret : un outil par brique, le moins cher qui fait le travail, et tu ne changes que quand tu peux nommer précisément ce qu'il ne sait pas faire. Tu sauras que c'est le moment parce qu'un projet sera bloqué. Une envie de nouveauté ne compte pas.",
    },
    {
      type: "h3",
      text: "Commencer par la vidéo parce que c'est la vidéo qu'on veut",
    },
    {
      type: "p",
      text: "Logique en apparence : tu veux faire des vidéos, tu commences par la vidéo. Sauf que chaque plan raté coûte des crédits, que tu ne sais pas encore si le problème vient du prompt, de l'image de départ ou du modèle, et que tu apprends trois choses à la fois sans en maîtriser aucune.",
    },
    {
      type: "p",
      text: "Fix concret : trois semaines d'image d'abord, même si ça t'ennuie. Quand ta première vidéo partira d'une image dont tu contrôles la lumière et le personnage, tu auras une variable à régler au lieu de trois.",
    },
    {
      type: "h3",
      text: "Attendre le bon modèle",
    },
    {
      type: "p",
      text: "« J'attends la prochaine version, elle va tout changer. » Elle sortira, et elle sera remplacée trois mois plus tard. Sora, que tout le monde a attendu pendant toute l'année 2024, a fermé son application le 26 avril 2026. Quelqu'un qui a appris sur Kling pendant ce temps change d'outil en une semaine. Quelqu'un qui attendait n'a rien à transférer.",
    },
    {
      type: "p",
      text: "Fix concret : apprends sur ce qui existe aujourd'hui. Les compétences qui comptent (l'intention, la lumière, le raccord, le rythme) ne dépendent pas du modèle, et c'est exactement pour ça qu'elles valent quelque chose.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Faut-il savoir coder pour apprendre l'IA créative ?",
    },
    {
      type: "p",
      text: "Non, à une condition : choisir le parcours créateur et laisser le parcours ingénieur à ceux qui veulent construire des modèles. Le cours de diffusion de Hugging Face, gratuit et excellent, demande un bon niveau en Python et des bases en deep learning avec PyTorch. Il t'apprend comment une image se forme dans le modèle, pas comment livrer une pub à un client. Midjourney, Kling, Runway ou CapCut se pilotent sans une ligne de code.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Vaut-il mieux commencer par l'image ou par la vidéo ?",
    },
    {
      type: "p",
      text: "Par l'image, sans hésiter. En 2026, une vidéo IA propre part presque toujours d'une image de référence, donc tout ce que tu apprends sur le cadre, la lumière et la cohérence d'un personnage se réutilise tel quel en vidéo. Et l'image coûte quelques centimes par essai là où un plan vidéo raté brûle des crédits. On apprend plus vite là où l'erreur est bon marché.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Peut-on apprendre l'IA créative gratuitement ?",
    },
    {
      type: "p",
      text: "Oui, l'essentiel de la matière existe gratuitement : docs officielles des outils, académies d'éditeurs comme Runway Academy, cours universitaires en ligne, formations courtes comme le challenge gratuit d'AI Studios. Ce que le gratuit ne fournit pas, c'est un ordre, une échéance et quelqu'un qui regarde ton travail. C'est précisément ce que tu achètes quand tu payes, et c'est la seule raison valable de payer.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Une formation IA créative est-elle finançable par le CPF ?",
    },
    {
      type: "p",
      text: "Rarement. D'après la fiche service-public.gouv.fr vérifiée le 27 juin 2026, le CPF finance des formations certifiantes, inscrites au RNCP ou au Répertoire spécifique, et tu participes à hauteur de 150 € quel que soit le prix de la formation, sauf cas d'exemption comme un abondement de l'employeur. La plupart des formations à la création IA ne sont pas certifiantes, donc pas éligibles. Si une page te promet le CPF sans nommer la certification, passe ton chemin.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Combien de temps pour devenir opérationnel ?",
    },
    {
      type: "p",
      text: "Compte douze semaines de pratique régulière pour tenir les quatre briques : intention, image, mouvement, assemblage. Pas douze semaines de visionnage. Si tu produis un livrable court chaque semaine et que tu le montres à quelqu'un, tu seras capable de livrer une vidéo courte propre au bout du parcours. Ce que tu ne sauras pas encore faire, c'est un film. Ça, c'est l'année d'après.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment repérer une mauvaise formation IA avant de payer ?",
    },
    {
      type: "p",
      text: "Sept questions suffisent : qui l'enseigne et que peut-on voir de son travail, à quelle date le contenu a été mis à jour, quel livrable tu produis à la fin, qui corrige tes exercices, si le programme nomme les outils précis ou reste vague, si les témoignages citent un projet ou juste un ressenti, et si la promesse parle de revenus plutôt que de compétences. Deux mauvaises réponses, et tu gardes ton argent.",
    },
    {
      type: "h2",
      id: "ce-week-end",
      text: "Ce week-end, dix micro-scènes et zéro abonnement",
    },
    {
      type: "p",
      text: "Ne t'inscris à rien. Prends un cahier, écris dix micro-scènes de trois phrases, et génère la première en image avec l'outil gratuit que tu as déjà sous la main. Lundi, tu auras fait plus que la plupart des gens qui « se forment à l'IA » depuis six mois. Et tu sauras enfin ce que tu as besoin d'apprendre ensuite, parce que tu auras buté sur quelque chose de précis.",
    },
    {
      type: "p",
      text: "Note de fondateur : quand j'ai commencé VOIDBORN, mon court-métrage primé au Seoul International AI Film Festival, je n'avais pas de parcours, j'ai perdu des mois à apprendre dans le désordre. La formation IA gratuite d'AI Studios est la version compacte de ce que j'aurais voulu avoir : trois jours, de l'idée au scénario, du scénario au storyboard, du storyboard à la vidéo, avec Kling et Midjourney. C'est la semaine 1 du parcours, faite correctement, et rien de plus.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-11 -->
