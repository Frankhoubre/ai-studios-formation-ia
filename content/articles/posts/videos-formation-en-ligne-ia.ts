import type { Article } from "@/lib/types/article";

export const videosFormationEnLigneIa: Article = {
  title: "Vidéo formation IA : produire ton cours en ligne",
  slug: "videos-formation-en-ligne-ia",
  description:
    "Produire les vidéos de ta formation en ligne avec l'IA : les trois couches d'un cours, la règle des 6 minutes, le coût réel à la minute et la méthode.",
  excerpt:
    "Un cours en ligne tient en trois couches de vidéo qui ne vieillissent pas à la même vitesse. L'IA sert à absorber celle qui bouge tout le temps. Méthode en six étapes, coût réel à la minute, et ce que dit le plus gros jeu de données publié sur les vidéos de cours.",
  category: "business-creatif",
  tags: [
    "vidéo formation ia",
    "formation en ligne",
    "e-learning",
    "avatar ia",
    "capsule vidéo",
    "infopreneur",
  ],
  date: "2026-09-23",
  updatedAt: "2026-09-23",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/videos-formation-en-ligne-ia.webp",
  imageAlt:
    "Formatrice en blazer rouille assise de profil à une petite table en bois poussée contre les hautes fenêtres d'un amphithéâtre vide, un ordinateur portable surélevé sur une pile de livres à hauteur de regard, la main levée en plein geste d'explication, minuteur mécanique et liasse de pages imprimées sur la table, rangées de bancs de bois floues derrière elle",
  keywords: [
    "vidéo formation ia",
    "créer formation en ligne ia",
    "vidéo e-learning ia",
    "avatar ia formation",
    "capsule vidéo formation",
    "cours en ligne vidéo",
  ],
  relatedSlugs: [
    "video-ia-pour-entreprise",
    "avatars-ia-ugc-presentateur-virtuel",
    "voix-off-ia-guide",
  ],
  faq: [
    {
      question: "Faut-il un avatar IA pour faire une formation en ligne ?",
      answer:
        "Pour une partie des modules seulement. L'étude de Philip Guo, Juho Kim et Rob Rubin présentée à ACM Learning @ Scale en 2014, sur 862 vidéos et 6,9 millions de sessions edX, recommande au contraire de viser un rendu personnel plutôt qu'une production de studio haut de gamme, et d'insérer un plan de visage aux bons moments. L'avatar rend service là où le texte change souvent : introductions de module, définitions, récapitulatifs, versions par métier. Le reste gagne à rester toi.",
    },
    {
      question: "Quelle durée pour une capsule vidéo de formation ?",
      answer:
        "Six minutes est un bon plafond de travail. Le graphique de la même étude montre un temps d'engagement médian identique entre 0 et 6 minutes, une légère baisse entre 6 et 9, puis une chute nette : autour de 0,55 sur l'échelle normalisée entre 9 et 12 minutes, et environ 0,20 au-delà de 12. Une vidéo de vingt minutes se fait abandonner au bout de trois ou quatre, et ton tableau de bord continue pourtant d'afficher vingt minutes de contenu livré.",
    },
    {
      question: "Combien coûte une minute de vidéo avec un avatar IA ?",
      answer:
        "Sur la page de tarifs Synthesia lue le 23 septembre 2026 depuis la France, le plan Starter est à 12 € par mois facturés à l'année (144 € l'an) pour 120 minutes de vidéo par an, soit 1,20 € la minute. Le plan Creator est à 49 € par mois facturés à l'année (588 € l'an) pour 360 minutes, soit 1,63 € la minute. Le plan le plus cher revient donc plus cher à la minute : on le prend pour les avatars personnels, l'accès API et le plafond annuel, pas pour économiser.",
    },
    {
      question: "Peut-on traduire une formation entière avec l'IA ?",
      answer:
        "Le doublage et la génération puisent dans la même réserve de crédits, c'est le point à surveiller. La page Synthesia annonce pour le plan Starter 14 500 crédits par an, utilisables pour 120 minutes de vidéo ou 580 minutes de doublage, avec un « ou » et pas un « et ». Chez Descript, la traduction avec doublage dans plus de 30 langues, relecture comprise, apparaît sur le plan Business à 50 $ par personne et par mois en facturation annuelle.",
    },
    {
      question: "Comment mettre à jour une formation sans tout refilmer ?",
      answer:
        "En séparant les modules avant de tourner. Un module filmé face caméra se remplace mal : il faut la même chemise, la même lumière, la même coupe de cheveux, sinon le raccord se voit. Un module fabriqué à partir d'un script (avatar, voix de synthèse sur captures d'écran) se corrige en modifiant le texte et en relançant un rendu. La règle pratique : tout ce qui contient un prix, une version de logiciel ou une capture d'interface part dans la couche générée.",
    },
    {
      question: "L'IA peut-elle remplacer le formateur à l'écran ?",
      answer:
        "Techniquement oui, pédagogiquement non, et commercialement encore moins. Les élèves achètent un regard et un avis, deux choses qu'un avatar ne fournit pas. Les cinq recommandations de l'étude edX vont dans le même sens : des segments courts, un vrai plan de visage inséré aux bons moments, une impression de face-à-face, du tracé à la main, de la parole improvisée. Utilise l'avatar comme un narrateur de service, jamais comme ton remplaçant.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Ton plan de formation tient sur une page : quarante modules, quatre heures de vidéo. Tu en as tourné six. Et sur ces six, deux sont déjà faux, parce que l'outil que tu montres a changé son interface la semaine dernière. **Le temps de production d'une formation est dérisoire à côté du temps que tu passeras à la réparer.**",
    },
    {
      type: "p",
      text: "Il existe un découpage qui règle les deux d'un coup : ce que tu tournes une bonne fois, ce que tu enregistres à l'écran, et ce que tu fabriques à partir d'un script pour pouvoir le refaire en dix minutes. Avec les chiffres réels : le coût d'une minute d'avatar relevé le 23 septembre 2026, et les résultats du plus gros jeu de données publié sur l'engagement dans les vidéos de cours.",
    },
    {
      type: "p",
      text: "Cette étude dit à peu près l'inverse de ce que vendent les plateformes d'avatars. Tant mieux : ça te coûtera moins cher.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce que dit le plus gros jeu de données sur les vidéos de cours",
    },
    {
      type: "h3",
      text: "Au-delà de neuf minutes, l'attention tombe d'un étage",
    },
    {
      type: "p",
      text: "En 2014, Philip Guo, Juho Kim et Rob Rubin ont épluché 862 vidéos de quatre cours edX de l'automne 2012, suivies par 128 000 étudiants, pour un total de 6,9 millions de sessions de visionnage. Leur [présentation à la conférence ACM Learning @ Scale](https://learningatscale.acm.org/las2014/talks/paper_philip_guo2.pdf) l'annonce comme la plus grande étude d'engagement vidéo réalisée à cette date, et douze ans après, je n'ai rien vu de plus large.",
    },
    {
      type: "image",
      src: "/images/articles/videos-formation-en-ligne-ia-engagement-duree.webp",
      alt: "Graphique de l'étude edX intitulé « Shorter videos much more engaging » : le temps d'engagement normalisé reste à 1,0 pour les vidéos de 0 à 3 minutes et de 3 à 6 minutes, descend à environ 0,95 entre 6 et 9 minutes, tombe à environ 0,55 entre 9 et 12 minutes, puis à environ 0,20 pour les vidéos de 12 à 40 minutes",
      caption:
        "Temps d'engagement médian par tranche de durée, sur 6,9 millions de sessions edX. Source : Guo, Kim et Rubin, ACM Learning @ Scale 2014, diapositive de la présentation, consultée le 23/09/2026.",
    },
    {
      type: "p",
      text: "Jusqu'à six minutes, la ligne rouge ne bouge pas. Elle s'effrite un peu entre six et neuf, puis décroche : environ 0,55 sur la tranche 9 à 12 minutes, et à peu près 0,20 au-delà de douze, soit un cinquième de ce qu'obtient une capsule courte. Les auteurs en tirent une consigne : investir dans la préparation pour découper en segments de moins de six minutes.",
    },
    {
      type: "p",
      text: "Leurs quatre autres résultats sont tout aussi utiles quand on se demande où mettre de l'IA. Un cours en direct simplement filmé, même très bien donné, perd contre le même contenu préparé pour l'écran. Un plan de visage fait monter l'engagement. Un plan informel tourné dans un bureau tient mieux qu'un plateau coûteux, au point que les auteurs recommandent de viser une impression de face-à-face plutôt qu'une production haut de gamme. Quant aux tutoriels à la Khan Academy, tracés à la main en parlant, ils écrasent les diapositives commentées.",
    },
    {
      type: "p",
      text: "Deux limites honnêtes : ces données viennent de MOOC universitaires de 2012, avec un public et un contrat pédagogique différents de ceux d'une formation payante vendue à des indépendants. Et rien là-dedans ne porte sur l'apprentissage réel, seulement sur le temps de visionnage. Ça reste le jeu de données le plus large dont on dispose, et il pointe dans une direction constante.",
    },
    {
      type: "h3",
      text: "Les trois couches d'un cours, et leur durée de vie",
    },
    {
      type: "p",
      text: "La vitesse de péremption d'un module décide de la technique qui sert à le fabriquer, et il n'y a que trois cas. Range tes quarante lignes dans ce tableau avant de tourner quoi que ce soit.",
    },
    {
      type: "table",
      caption:
        "Les trois couches d'une formation en ligne, leur durée de vie et la technique adaptée",
      headers: [
        "Couche",
        "Ce qu'elle contient",
        "Durée de vie",
        "Comment la produire",
        "Coût d'une correction",
      ],
      rows: [
        [
          "Toi",
          "La promesse, ton avis tranché, les arbitrages, les retours d'expérience, le mot de la fin",
          "Des années",
          "Caméra ou téléphone, lumière de fenêtre, micro-cravate, en une seule session",
          "Élevé : refilmer avec les mêmes vêtements et la même lumière",
        ],
        [
          "L'écran",
          "Les démonstrations, les pas à pas dans un logiciel, les réglages, les exercices corrigés",
          "Jusqu'à la prochaine mise à jour de l'outil",
          "Enregistrement d'écran commenté, nettoyage et sous-titres par IA",
          "Moyen : réenregistrer la séquence concernée, la voix se raccorde",
        ],
        [
          "L'information",
          "Intros et outros de module, définitions, récapitulatifs, chiffres, versions par métier ou par langue",
          "Quelques mois",
          "Script écrit, puis avatar ou voix de synthèse sur des visuels",
          "Faible : modifier le texte, relancer un rendu",
        ],
      ],
    },
    {
      type: "p",
      text: "Les cours qui se périment le plus vite, en tout cas ceux que je vois passer, ont tous commis la même erreur : filmer la couche information en même temps que la couche toi, dans le même plan, avec le prix d'un abonnement prononcé au milieu d'une phrase. Le jour où le prix bouge, le module entier devient faux et il faut le retourner en entier.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Produire les vidéos de ta formation en six étapes",
    },
    {
      type: "p",
      text: "Compte une semaine de travail réel pour un cours de quatre heures, réparties sur deux ou trois semaines de calendrier. Matériel : un téléphone récent ou un hybride, un micro-cravate, une fenêtre, un logiciel de montage, un abonnement de génération. L'IA n'arrive qu'à l'étape 4, et c'est volontaire.",
    },
    {
      type: "ol",
      items: [
        "Découpe en capsules de moins de six minutes avant d'écrire. Prends ton plan et coupe chaque module qui dépasse. Une capsule = une compétence vérifiable, formulée comme un résultat (« régler l'exposition d'un plan trop sombre »), jamais comme un thème (« l'exposition »). Si tu n'arrives pas à formuler le résultat, la capsule n'a pas de raison d'exister et tu viens d'économiser une heure de tournage.",
        "Classe chaque capsule dans une des trois couches. Écris la lettre T, E ou I à côté de chaque ligne de ton plan. Règle simple : dès qu'une capsule contient un prix, un numéro de version, une capture d'interface ou un chiffre de marché, elle passe en couche information, même si tu avais prévu de la dire face caméra. Sur un cours de quarante modules, tu vas en général obtenir six à huit T, une quinzaine de E et le reste en I.",
        "Écris les scripts de la couche information, et seulement ceux-là. Les capsules T se préparent avec trois puces sur un papier, pas un texte rédigé, sinon ça s'entend. Les capsules E se préparent avec une liste de clics. Les capsules I, elles, ont besoin d'un texte mot pour mot, parce que c'est ce texte que tu modifieras dans six mois. [La méthode d'écriture de script avec ChatGPT](/blog/script-video-chatgpt) marche très bien ici, à condition de lui donner ton plan et ton vocabulaire plutôt qu'un thème.",
        "Tourne la couche toi en une seule journée. Même chemise, même fond, même lumière, même cadrage, tout à la suite. C'est la seule journée où ta présence physique est nécessaire, et regrouper te protège des raccords impossibles dans un an. Filme aussi, pendant que tu y es, dix à quinze secondes de silence face caméra en écoutant : ces plans de réaction serviront à couper dans les modules d'écran, comme le recommande l'étude edX quand elle parle d'insérer un plan de visage aux bons moments.",
        "Enregistre la couche écran, puis la couche information. Pour l'écran, parle en même temps que tu cliques et garde la voix d'origine : une démonstration commentée en direct sonne juste, une voix de synthèse posée dessus sonne comme un tutoriel d'aide en ligne. Pour l'information, tu fabriques à partir du script, avec un avatar ou une [voix off générée](/blog/voix-off-ia-guide) posée sur des visuels. Si tu hésites entre les deux grandes plateformes d'avatars, [le face-à-face Synthesia contre HeyGen](/blog/synthesia-vs-heygen) tranche sur le coût de la minute et sur les sujets autorisés.",
        "Finis par les sous-titres, puis publie et mesure. Des [sous-titres générés puis relus](/blog/sous-titres-automatiques-ia-video) sur chaque capsule, sans exception : une part de tes élèves regarde dans le train. Publie, puis va chercher un seul chiffre dans ta plateforme, le taux de complétion par capsule. Les deux ou trois capsules où tout le monde décroche te diront lesquelles redécouper, et cette information vaut plus que n'importe quel avis sur la qualité de ton image.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : enregistre tes capsules d'écran avec le zoom du système déjà activé et la barre des tâches masquée, plutôt que de compter sur un recadrage au montage. Sur un cours de quatre heures, tu vas reprendre trois à cinq démonstrations par an quand les interfaces bougeront. Si le cadrage de départ est propre, la reprise prend vingt minutes. S'il faut rejouer un recadrage manuel à chaque fois, elle en prend deux heures, et tu finiras par ne plus la faire.",
    },
    {
      type: "h2",
      id: "cout-reel",
      text: "Le coût réel de la minute, chiffres en main",
    },
    {
      type: "p",
      text: "Les plateformes d'avatars communiquent en crédits, ce qui rend toute comparaison pénible. J'ai ramené à la minute de vidéo finie la page de tarifs Synthesia consultée depuis la France le 23 septembre 2026.",
    },
    {
      type: "image",
      src: "/images/articles/videos-formation-en-ligne-ia-synthesia-pricing.webp",
      alt: "Page de tarifs Synthesia vue depuis la France : plan Basic à 0 € par mois avec 1 200 crédits mensuels pour 10 minutes de vidéo, plan Starter à 12 € par mois facturés à l'année avec 14 500 crédits annuels pour 120 minutes de vidéo ou 580 minutes de doublage, plan Creator à 49 € par mois facturés à l'année avec 44 000 crédits annuels pour 360 minutes de vidéo, plan Enterprise sur devis avec minutes illimitées, export SCORM et traduction en un clic vers plus de 80 langues",
      caption:
        "Les quatre plans Synthesia et leurs équivalences en minutes. Source : synthesia.io/pricing, capture du 23/09/2026 depuis la France.",
    },
    {
      type: "p",
      text: "Le plan Starter est affiché à 19 € par mois, ou 12 € par mois si tu paies l'année, soit 144 € pour 120 minutes de vidéo : **1,20 € la minute finie**. Le plan Creator passe à 49 € par mois facturés à l'année, soit 588 € pour 360 minutes : **1,63 € la minute**. Le plan le plus cher revient donc plus cher à la minute. Ce que tu achètes en montant, ce sont cinq avatars personnels au lieu de trois, l'accès API, et surtout un plafond annuel qui ne t'arrête pas en février.",
    },
    {
      type: "p",
      text: "Fais le calcul sur ton cours. Quatre heures de formation, dont un tiers en couche information, donnent environ 80 minutes à générer. Les équivalences de la page placent la minute de vidéo autour de 120 crédits : 80 minutes coûtent donc à peu près 9 600 crédits, et tiennent largement dans les 14 500 crédits annuels du plan Starter. Un cours entièrement généré, 240 minutes, réclamerait environ 28 800 crédits et imposerait le plan Creator.",
    },
    {
      type: "p",
      text: "Le doublage cache un piège. La page annonce pour Starter « 120 minutes de vidéo **ou** 580 minutes de doublage », et ce « ou » compte : les deux usages tirent sur la même réserve de crédits. Traduire ta formation se paie donc en minutes de génération perdues. Si la version anglaise fait partie du plan, intègre-la au calcul dès le départ, et regarde ce que vaut [le doublage de vidéos par IA en général](/blog/doublage-traduction-video-ia) avant de t'engager sur une seule plateforme. Autre détail qui fâche tard : l'export SCORM, obligatoire si un organisme veut déposer ton cours dans son propre LMS, n'apparaît que sur le plan Enterprise.",
    },
    {
      type: "p",
      text: "Pour la couche écran et la couche toi, c'est un autre budget. Descript, qui fait le nettoyage audio et le montage par le texte, affiche le 23 septembre 2026 un plan Hobbyist à 16 $ par personne et par mois en facturation annuelle pour 10 heures de média mensuelles, un plan Creator à 24 $ pour 30 heures et l'export en 4K, et un plan Business à 50 $ pour 40 heures, la traduction et le doublage dans plus de 30 langues avec relecture, et la génération d'avatars personnalisés.",
    },
    {
      type: "image",
      src: "/images/articles/videos-formation-en-ligne-ia-descript-pricing.webp",
      alt: "Page de tarifs Descript en facturation annuelle : plan Hobbyist à 16 dollars par personne et par mois avec 10 heures de média et 400 crédits IA, plan Creator à 24 dollars avec 30 heures de média et export 4K, plan Business à 50 dollars avec 40 heures de média, traduction et doublage dans plus de 30 langues avec relecture, plan Enterprise sur devis",
      caption:
        "Les plans Descript en facturation annuelle, avec les heures de média et les crédits IA inclus. Source : descript.com/pricing, capture du 23/09/2026.",
    },
    {
      type: "p",
      text: "Les heures de média comptent les fichiers importés ou enregistrés, pas les minutes exportées. Pour un cours, dix heures par mois suffisent presque toujours : un enregistrement d'écran propre produit très peu de rushes. Le plan à 16 $ inclut déjà la suppression des hésitations, l'amélioration du son et le clonage de voix, ce qui couvre l'essentiel du nettoyage. Additionne : 144 € de Synthesia Starter et 192 $ de Descript Hobbyist sur l'année. Ton cours de quatre heures tient sous 400 € de logiciel sur l'année, et la même somme couvre encore les corrections de l'année d'après.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quatre erreurs qui plombent une formation en ligne",
    },
    {
      type: "h3",
      text: "Erreur 1 : le module de 35 minutes",
    },
    {
      type: "p",
      text: "Symptôme : ton taux de complétion s'effondre au module 3, et les messages que tu reçois portent tous sur un point traité à la minute 22. Tu as reproduit un cours en présentiel, où l'élève est assis dans une salle et ne peut pas partir.",
    },
    {
      type: "p",
      text: "Fix concret : découpe en capsules de six minutes maximum, une compétence chacune, et renomme-les par leur résultat. Ton module de 35 minutes devient six capsules que l'élève coche. Le contenu ne change pas, le taux de complétion, si.",
    },
    {
      type: "h3",
      text: "Erreur 2 : l'avatar qui tient tout le cours",
    },
    {
      type: "p",
      text: "Symptôme : la formation est propre, bien montée, et personne ne la termine. Les avis parlent de « manque d'âme » sans savoir expliquer pourquoi. Tu as confié à un avatar les passages où l'élève attendait un avis.",
    },
    {
      type: "p",
      text: "Fix concret : reprends tes capsules et identifie celles où tu dis « moi je fais comme ça » ou « celui-là, oublie-le ». Ce sont exactement celles qui doivent montrer ton visage. Les [avatars et présentateurs virtuels](/blog/avatars-ia-ugc-presentateur-virtuel) restent excellents pour les intros, les définitions et les récapitulatifs, là où le texte compte plus que la personne.",
    },
    {
      type: "h3",
      text: "Erreur 3 : le prix prononcé dans une phrase filmée",
    },
    {
      type: "p",
      text: "Symptôme : six mois après la sortie, quatre modules annoncent des tarifs qui ont changé, et tu ne peux plus les corriger sans refilmer une journée entière. Le pire cas : un élève t'écrit pour te signaler l'erreur, et tu perds d'un coup ta crédibilité sur tout le reste.",
    },
    {
      type: "p",
      text: "Fix concret : bannis les chiffres datés de la couche filmée. Dans tes capsules face caméra, dis « l'abonnement d'entrée de gamme » et renvoie vers une capsule générée, ou vers un document en ligne que tu mets à jour en deux minutes. Tous les chiffres vivent dans la couche information, jamais ailleurs.",
    },
    {
      type: "h3",
      text: "Erreur 4 : publier sans sous-titres",
    },
    {
      type: "p",
      text: "Symptôme : beaucoup de capsules démarrées, très peu terminées, et une grosse part de mobile dans tes statistiques de visionnage. Une partie de ton public te regarde dans un train, dans un open space ou avec un bébé qui dort à côté.",
    },
    {
      type: "p",
      text: "Fix concret : sous-titre tout, puis relis. La génération automatique se trompe systématiquement sur le vocabulaire de ton métier, et un sous-titre faux sur un terme technique est pire que pas de sous-titre du tout. Compte dix minutes de relecture par capsule de cinq minutes, une seule fois, pour la durée de vie du cours.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Faut-il un avatar IA pour faire une formation en ligne ?",
    },
    {
      type: "p",
      text: "Pour une partie des modules seulement. L'étude de Philip Guo, Juho Kim et Rob Rubin présentée à ACM Learning @ Scale en 2014, sur 862 vidéos et 6,9 millions de sessions edX, recommande au contraire de viser un rendu personnel plutôt qu'une production de studio haut de gamme, et d'insérer un plan de visage aux bons moments. L'avatar rend service là où le texte change souvent : introductions de module, définitions, récapitulatifs, versions par métier. Le reste gagne à rester toi.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle durée pour une capsule vidéo de formation ?",
    },
    {
      type: "p",
      text: "Six minutes est un bon plafond de travail. Le graphique de la même étude montre un temps d'engagement médian identique entre 0 et 6 minutes, une légère baisse entre 6 et 9, puis une chute nette : autour de 0,55 sur l'échelle normalisée entre 9 et 12 minutes, et environ 0,20 au-delà de 12. Une vidéo de vingt minutes se fait abandonner au bout de trois ou quatre, et ton tableau de bord continue pourtant d'afficher vingt minutes de contenu livré.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien coûte une minute de vidéo avec un avatar IA ?",
    },
    {
      type: "p",
      text: "Sur la page de tarifs Synthesia lue le 23 septembre 2026 depuis la France, le plan Starter est à 12 € par mois facturés à l'année (144 € l'an) pour 120 minutes de vidéo par an, soit 1,20 € la minute. Le plan Creator est à 49 € par mois facturés à l'année (588 € l'an) pour 360 minutes, soit 1,63 € la minute. Le plan le plus cher revient donc plus cher à la minute : on le prend pour les avatars personnels, l'accès API et le plafond annuel, pas pour économiser.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Peut-on traduire une formation entière avec l'IA ?",
    },
    {
      type: "p",
      text: "Le doublage et la génération puisent dans la même réserve de crédits, c'est le point à surveiller. La page Synthesia annonce pour le plan Starter 14 500 crédits par an, utilisables pour 120 minutes de vidéo ou 580 minutes de doublage, avec un « ou » et pas un « et ». Chez Descript, la traduction avec doublage dans plus de 30 langues, relecture comprise, apparaît sur le plan Business à 50 $ par personne et par mois en facturation annuelle.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Comment mettre à jour une formation sans tout refilmer ?",
    },
    {
      type: "p",
      text: "En séparant les modules avant de tourner. Un module filmé face caméra se remplace mal : il faut la même chemise, la même lumière, la même coupe de cheveux, sinon le raccord se voit. Un module fabriqué à partir d'un script (avatar, voix de synthèse sur captures d'écran) se corrige en modifiant le texte et en relançant un rendu. La règle pratique : tout ce qui contient un prix, une version de logiciel ou une capture d'interface part dans la couche générée.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "L'IA peut-elle remplacer le formateur à l'écran ?",
    },
    {
      type: "p",
      text: "Techniquement oui, pédagogiquement non, et commercialement encore moins. Les élèves achètent un regard et un avis, deux choses qu'un avatar ne fournit pas. Les cinq recommandations de l'étude edX vont dans le même sens : des segments courts, un vrai plan de visage inséré aux bons moments, une impression de face-à-face, du tracé à la main, de la parole improvisée. Utilise l'avatar comme un narrateur de service, jamais comme ton remplaçant.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Par quoi commencer cette semaine",
    },
    {
      type: "p",
      text: "Ouvre ton plan de formation et fais deux passes, une heure en tout. Première passe : coupe tout ce qui dépasse six minutes. Deuxième passe : mets un T, un E ou un I devant chaque ligne. Tu vas découvrir que la journée de tournage que tu repoussais depuis trois mois ne concerne que six ou huit capsules, et que le reste ne demande pas de caméra du tout. C'est en général à ce moment-là que les projets que je vois traîner redémarrent. Si ton cours vise des entreprises plutôt que des particuliers, [les usages vidéo rentables en entreprise](/blog/video-ia-pour-entreprise) te donneront les formats qui se vendent le mieux en interne.",
    },
    {
      type: "p",
      text: "Note de fondateur : la formation IA gratuite d'AI Studios enchaîne script, voix, image et montage dans cet ordre, avec les outils cités ici. Fais la passe des six minutes aujourd'hui, avant même de choisir un abonnement. Tu sauras combien de journées de tournage il te reste vraiment, et c'est l'information qui débloque le projet.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-23 -->
