import type { Article } from "@/lib/types/article";

export const voixOffIaGuide: Article = {
  title: "Voix off IA : le guide pour des vidéos qui s'écoutent",
  slug: "voix-off-ia-guide",
  description:
    "Voix off IA : écrire pour l'oreille, diriger la lecture, régler le niveau. La méthode complète format par format, du Short au film corporate.",
  excerpt:
    "Le timbre des générateurs est réglé depuis deux ans. Ce qui trahit encore une voix off IA, c'est le texte qu'on lui donne à dire et le niveau auquel on la pose sur la vidéo.",
  category: "ia-video",
  tags: ["voix off", "audio", "montage", "YouTube"],
  date: "2026-09-01",
  updatedAt: "2026-09-01",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/voix-off-ia-guide.webp",
  imageAlt:
    "Dressing d'appartement transformé en coin d'enregistrement, micro sur pied entre deux rangées de manteaux, casque accroché à un cintre et téléphone affichant un script",
  keywords: [
    "voix off ia",
    "generateur voix off",
    "voix ia youtube",
    "mixage voix off",
    "narration ia francais",
  ],
  relatedSlugs: [
    "elevenlabs-guide-complet",
    "doublage-traduction-video-ia",
    "sous-titres-automatiques-ia-video",
  ],
  faq: [
    {
      question: "Quel générateur de voix off IA choisir en français ?",
      answer:
        "Prends celui dont tu supportes la voix sur dix minutes d'écoute, et arrête de comparer. À mon oreille, ElevenLabs garde une avance en français sur le naturel et le clonage, et surtout la documentation de direction la plus complète, ce qui pèse davantage au quotidien que la taille du catalogue de voix. Plusieurs alternatives tiennent très bien sur des textes courts. Le vrai écart entre deux voix off se joue sur le texte et sur le niveau sonore : change de texte avant de changer d'outil.",
    },
    {
      question: "Une voix off IA est-elle monétisable sur YouTube ?",
      answer:
        "Oui. YouTube ne sanctionne pas la synthèse vocale en tant que telle. Sa politique de monétisation, précisée le 15 juillet 2025 autour de la notion de contenu inauthentique, vise les contenus produits en série, répétitifs et sans apport propre. Une voix synthétique sur une vidéo que tu as écrite, documentée et montée ne tombe pas dans cette catégorie. Cent vidéos par mois bâties sur le même gabarit, si.",
    },
    {
      question: "Faut-il signaler qu'une voix off est générée par IA ?",
      answer:
        "Ça dépend du contexte, et la tendance va clairement vers plus de transparence. Les obligations de transparence de l'article 50 du règlement européen sur l'IA s'appliquent depuis le 2 août 2026 et couvrent notamment les contenus audio générés artificiellement. Pour une narration sur ta propre vidéo, une mention en description ne coûte rien et te met à l'abri. Dès qu'un spectateur pourrait croire qu'une personne réelle s'adresse à lui, la mention devient un minimum.",
    },
    {
      question: "Combien coûte une voix off IA pour une vidéo de 10 minutes ?",
      answer:
        "Les générateurs facturent au caractère et non à la minute, ce qui rend le calcul simple une fois qu'on a le bon repère. À un débit de narration posé, une minute de voix off française représente environ 900 à 1 000 caractères de texte, donc une vidéo de dix minutes tourne autour de 10 000 caractères. C'est une fraction du quota mensuel des offres d'entrée de gamme. Le poste qui coûte vraiment, c'est le nombre de régénérations, d'où l'intérêt de travailler par blocs courts.",
    },
    {
      question: "À quel niveau sonore régler une voix off ?",
      answer:
        "Vise une sonie constante d'un bout à l'autre plutôt qu'un chiffre magique. Si tu livres à un diffuseur européen, la cible est écrite noir sur blanc : -23 LUFS avec une tolérance de ±0,5 LU et un plafond de crête vraie à -1 dBTP, c'est la recommandation EBU R 128. Pour du web, garde la cible par défaut de ton logiciel de montage, applique-la à toute une série de vidéos, et baisse la musique sous la voix au lieu de pousser la voix.",
    },
    {
      question: "Peut-on cloner sa propre voix pour ses vidéos ?",
      answer:
        "Oui, et c'est l'usage le plus défendable de la technologie. Quelques minutes d'audio propre suffisent chez la plupart des outils pour obtenir un clone utilisable, les durées exactes et les procédures de vérification changeant d'un service à l'autre. La propreté de l'échantillon compte plus que sa durée. Enregistre-le dans une pièce sourde, sans musique ni réverbération, sinon le clone hérite de la pièce et tu traîneras cette réverbération sur toutes tes vidéos. Et si tu clones la voix de quelqu'un d'autre, même un proche, mets par écrit ce que tu as le droit d'en faire et jusqu'à quand.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le timbre n'est plus le problème. N'importe quel générateur sérieux sort aujourd'hui une voix française qui ne grince pas, et pourtant l'oreille repère la machine en trois secondes. Ce qui trahit, c'est un débit qui ne bouge jamais et des fins de phrase coupées toutes au même endroit. Et le symptôme le plus bête : personne n'a touché au niveau sonore.",
    },
    {
      type: "p",
      text: "L'ordre de travail compte plus que l'outil : écrire pour l'oreille, découper, diriger la lecture, régler le niveau. Le générateur arrive en dernier, et il pèse beaucoup moins lourd que ne le laissent croire les comparatifs qui occupent la première page de Google.",
    },
    {
      type: "p",
      text: "Il y a une partie que ces comparatifs ne mentionnent jamais : ta voix off a une cible de niveau, et cette cible se mesure. La recommandation EBU R 128, publiée en 2010 et toujours en vigueur, la fixe à -23 LUFS pour la télévision européenne. Tu ne travailles sans doute pas pour la télé. Le principe qui va avec te concerne quand même : les plateformes normalisent le son, donc monter le volume au montage ne sert à rien du tout.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce qui trahit une voix off synthétique",
    },
    {
      type: "p",
      text: "Deux choses se jouent avant d'ouvrir le moindre outil : le texte que tu donnes à dire, et le niveau auquel tu poses le résultat. Ni l'un ni l'autre ne demande de compétence technique. C'est probablement pour ça qu'on les saute.",
    },
    {
      type: "h3",
      id: "le-modele-ne-compense-rien",
      text: "Le modèle ne compense rien, contrairement à un comédien",
    },
    {
      type: "p",
      text: "Donne une phrase mal fichue à un comédien : il la sauve. Il ralentit, il place un silence là où il n'y a pas de virgule, il déplace l'accent tonique et tu n'entends rien du problème. Un modèle de synthèse fait ce que la ponctuation lui dit de faire, point. Toute la direction que tu ne mets pas dans le texte, tu ne l'auras pas au rendu.",
    },
    {
      type: "p",
      text: "Concrètement, la ponctuation devient ta partition. La virgule crée une micro-pause, le point une vraie, les points de suspension une hésitation. Écris les nombres en toutes lettres quand la prononciation compte, et coupe toute phrase que tu ne peux pas dire en une seule respiration. Si tu pars d'un script généré, la [méthode pour réécrire un script à l'oral](/blog/script-video-chatgpt) t'évite la moitié des allers-retours.",
    },
    {
      type: "p",
      text: "Les modèles récents acceptent en plus des indications de jeu. La documentation de prompting du modèle v3 d'ElevenLabs décrit des balises entre crochets, du type [whispers] ou [laughs], lues comme des instructions de jeu et non comme du texte à prononcer, plus trois modes de stabilité (Creative, Natural, Robust) qui arbitrent entre expressivité et régularité. La même page pose la limite honnêtement : n'attends pas qu'une voix chuchotante se mette à crier parce que tu as écrit [shout]. Le détail des réglages, des modèles et des offres est dans [le guide ElevenLabs](/blog/elevenlabs-guide-complet).",
    },
    {
      type: "h3",
      id: "une-voix-a-un-niveau",
      text: "Ton fichier a un niveau, et personne ne l'a réglé",
    },
    {
      type: "p",
      text: "Le fichier qui sort de ton générateur arrive à un niveau quelconque, décidé par personne. Posé tel quel sur une musique, il passe dessous ou il écrase tout. Tu corriges alors au jugé, jusqu'à ce que ça semble à peu près bon un soir donné dans un casque donné.",
    },
    {
      type: "p",
      text: "Le LUFS mesure la sonie perçue sur toute la durée d'un programme. C'est exactement ce que regardent les plateformes quand elles normalisent une piste. La crête vraie surveille autre chose : les pics qui saturent au moment de la conversion, ceux qu'un indicateur de niveau ordinaire laisse filer.",
    },
    {
      type: "p",
      text: "La recommandation EBU R 128 fixe pour la diffusion européenne une sonie de programme de -23 LUFS, avec une tolérance de ±0,5 LU et un plafond de crête vraie à -1 dBTP. Personne ne te demandera ces valeurs pour un Reel. En revanche, si une agence te commande un film qui finira à l'antenne, elles sont contractuelles et un livrable hors tolérance revient sur ton bureau.",
    },
    {
      type: "p",
      text: "Sur le web, la cible pratique est nettement plus haute et elle diffère d'une plateforme à l'autre. Retiens le mécanisme plutôt que le chiffre : ta piste est ramenée à la cible du service qui la diffuse. Pousser le volume au mixage n'augmente donc pas ton volume à la lecture, ça aplatit seulement la dynamique de ta voix.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Écrire, diriger et mixer une voix off IA",
    },
    {
      type: "p",
      text: "Cinq étapes, dans cet ordre. Le tableau donne mes repères de production par format : des valeurs de travail éprouvées sur mes propres montages, pas une norme officielle.",
    },
    {
      type: "table",
      caption:
        "Repères de travail par format de vidéo (valeurs de production, à ajuster selon ta voix et ton sujet).",
      headers: [
        "Format",
        "Durée type",
        "Débit visé",
        "Direction",
        "Le piège du format",
      ],
      rows: [
        [
          "YouTube long",
          "8 à 15 min",
          "Posé, autour de 150 mots par minute",
          "Une idée par phrase, un silence franc après chaque titre de partie",
          "La régularité parfaite endort au bout de quatre minutes",
        ],
        [
          "Short ou Reel",
          "15 à 45 s",
          "Rapide, 180 mots par minute et plus",
          "Attaque sur le premier mot, aucune respiration décorative",
          "Vouloir tout dire : coupe le texte d'un tiers avant de générer",
        ],
        [
          "Tuto écran",
          "3 à 8 min",
          "Lent, autour de 130 mots par minute",
          "Une phrase par action, silence pendant les clics",
          "La voix qui décrit ce que l'image montre déjà",
        ],
        [
          "Film corporate",
          "1 à 3 min",
          "Posé et neutre",
          "Pas d'emphase, le montage porte l'émotion",
          "L'enthousiasme forcé, immédiatement audible en synthèse",
        ],
        [
          "Narration documentaire",
          "5 à 20 min",
          "Lent et variable",
          "Changer de débit d'un paragraphe à l'autre, silences longs assumés",
          "Générer d'un bloc : le rendu dérive sur la longueur",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Dicte ton texte avant de l'écrire. Parle ton script dans ton téléphone, transcris ce que tu viens de dire, corrige. Tu obtiens une syntaxe orale du premier coup au lieu de traduire de l'écrit vers l'oral pendant une heure.",
        "Découpe en blocs de 30 à 60 secondes, un par section du montage. Tu génères bloc par bloc, ce qui te permet de refaire une phrase sans repasser toute la piste et sans repayer la génération complète.",
        "Choisis une voix et fige-la. Note son identifiant, le modèle utilisé et tes réglages dans le même document que ton script. Une série de vidéos qui change de voix en cours de route perd son identité sonore en deux épisodes.",
        "Génère, puis écoute une fois sans regarder l'écran. Note les endroits où tu décroches : c'est presque toujours une phrase trop longue ou un mot qu'on n'emploie pas à l'oral. Réécris ces passages avant de retoucher le moindre réglage.",
        "Mixe la voix d'abord, la musique ensuite. Baisse le lit musical sous la voix, vérifie la sonie sur le mesureur de ton logiciel de montage, exporte. Ajoute enfin [des sous-titres générés automatiquement](/blog/sous-titres-automatiques-ia-video), parce qu'une bonne part de ton audience regardera sans le son.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde un extrait de dix secondes de ta voix off validée, exportée au bon niveau, dans un fichier à part. Avant chaque nouvel export, écoute-le juste après ton mix du jour. L'oreille compare beaucoup mieux qu'elle ne mesure, et tu attrapes en dix secondes une dérive de niveau qui t'aurait échappé pendant deux montages entiers.",
    },
    {
      type: "p",
      text: "Si ta vidéo existe déjà dans une autre langue, tu quittes la narration pour la synchronisation, et ça se traite dans [le doublage de vidéos avec l'IA](/blog/doublage-traduction-video-ia). Si tu pars d'une page blanche, [la chaîne complète d'une vidéo YouTube](/blog/creer-video-youtube-ia) remet la voix off à sa place dans l'ordre de fabrication. Les valeurs de sonie et leurs tolérances, elles, sont publiées par [l'Union européenne de radio-télévision dans sa recommandation R 128](https://tech.ebu.ch/publications/r128).",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Ce qui casse une voix off, en pratique",
    },
    {
      type: "h3",
      id: "erreur-ordre",
      text: "Erreur 1 : écrire la voix off après le montage",
    },
    {
      type: "p",
      text: "Le montage est bouclé et tu écris un texte qui doit rentrer dans des trous de durées imposées. Chaque phrase est calibrée à la seconde près, donc aucune ne respire, et la voix court après l'image du début à la fin. On entend l'essoufflement même quand la vidéo est belle.",
    },
    {
      type: "p",
      text: "Fix concret : écris et génère la voix avant de monter, puis monte sur la piste voix. Quand l'image existe déjà, chronomètre chaque section, écris ton texte pour occuper 80 % de la durée disponible et laisse le reste en silence. Sur une section de trente secondes, ça fait six secondes sans parole, et ça s'entend en bien.",
    },
    {
      type: "h3",
      id: "erreur-silences",
      text: "Erreur 2 : une piste sans un seul silence",
    },
    {
      type: "p",
      text: "Symptôme : dix minutes de parole ininterrompue. À l'écoute ça produit une pression continue et personne ne tient jusqu'au bout. Un modèle de synthèse enchaîne sans effort et sans fatigue, ce qui est justement le piège : un humain s'arrête pour respirer, la machine n'en a aucune raison.",
    },
    {
      type: "p",
      text: "Fix concret : une demi-seconde de silence après chaque idée, une seconde pleine à chaque changement de section. Si ton générateur ne place pas ces respirations, ajoute-les au montage. Une coupure dans la timeline fait le travail, inutile de chercher le réglage dans une interface.",
    },
    {
      type: "h3",
      id: "erreur-niveau",
      text: "Erreur 3 : régler le niveau à l'oreille, au casque, à minuit",
    },
    {
      type: "p",
      text: "Symptôme : impeccable chez toi, inaudible dans le métro, ou l'inverse. Le casque flatte les basses et ment sur la dynamique, et l'oreille s'habitue en quatre minutes à n'importe quel équilibre, y compris à un mauvais.",
    },
    {
      type: "p",
      text: "Fix concret : ouvre le mesureur de sonie de ton logiciel de montage, DaVinci Resolve, Premiere et Final Cut en embarquent un, et travaille sur les chiffres plutôt que sur la sensation. Contrôle ensuite sur le haut-parleur de ton téléphone à faible volume. Une voix qui passe ce test-là passe partout ailleurs.",
    },
    {
      type: "h3",
      id: "erreur-clonage",
      text: "Erreur 4 : cloner une voix qui ne t'appartient pas",
    },
    {
      type: "p",
      text: "Symptôme : la voix d'un comédien connu, ou celle d'un collègue « qui ne dira rien ». L'ennui est contractuel, et il ressort exactement au moment où la vidéo commence à marcher.",
    },
    {
      type: "p",
      text: "Fix concret : ta voix, une voix de bibliothèque dont la licence couvre l'usage commercial, ou un accord écrit signé. Le sujet est chaud en France : le Syndicat français des artistes-interprètes et l'association Les Voix ont lancé en janvier 2024 la campagne [#TouchePasMaVF](https://lesvoix.fr/touchepasmavf-petition-doublage-par-des-humains-pour-des-humains/) contre le doublage produit par IA, avec une pétition qui a dépassé les 150 000 signatures. Tu n'as pas besoin d'être d'accord avec eux pour anticiper la question que ton client finira par poser : cette voix, elle vient d'où ?",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quel générateur de voix off IA choisir en français ?",
    },
    {
      type: "p",
      text: "Prends celui dont tu supportes la voix sur dix minutes d'écoute, et arrête de comparer. À mon oreille, ElevenLabs garde une avance en français sur le naturel et le clonage, et surtout la documentation de direction la plus complète, ce qui pèse davantage au quotidien que la taille du catalogue de voix. Plusieurs alternatives tiennent très bien sur des textes courts. Le vrai écart entre deux voix off se joue sur le texte et sur le niveau sonore : change de texte avant de changer d'outil.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Une voix off IA est-elle monétisable sur YouTube ?",
    },
    {
      type: "p",
      text: "Oui. YouTube ne sanctionne pas la synthèse vocale en tant que telle. Sa politique de monétisation, précisée le 15 juillet 2025 autour de la notion de contenu inauthentique, vise les contenus produits en série, répétitifs et sans apport propre. Une voix synthétique sur une vidéo que tu as écrite, documentée et montée ne tombe pas dans cette catégorie. Cent vidéos par mois bâties sur le même gabarit, si.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Faut-il signaler qu'une voix off est générée par IA ?",
    },
    {
      type: "p",
      text: "Ça dépend du contexte, et la tendance va clairement vers plus de transparence. Les obligations de transparence de l'article 50 du règlement européen sur l'IA s'appliquent depuis le 2 août 2026 et couvrent notamment les contenus audio générés artificiellement. Pour une narration sur ta propre vidéo, une mention en description ne coûte rien et te met à l'abri. Dès qu'un spectateur pourrait croire qu'une personne réelle s'adresse à lui, la mention devient un minimum.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Combien coûte une voix off IA pour une vidéo de 10 minutes ?",
    },
    {
      type: "p",
      text: "Les générateurs facturent au caractère et non à la minute, ce qui rend le calcul simple une fois qu'on a le bon repère. À un débit de narration posé, une minute de voix off française représente environ 900 à 1 000 caractères de texte, donc une vidéo de dix minutes tourne autour de 10 000 caractères. C'est une fraction du quota mensuel des offres d'entrée de gamme. Le poste qui coûte vraiment, c'est le nombre de régénérations, d'où l'intérêt de travailler par blocs courts.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "À quel niveau sonore régler une voix off ?",
    },
    {
      type: "p",
      text: "Vise une sonie constante d'un bout à l'autre plutôt qu'un chiffre magique. Si tu livres à un diffuseur européen, la cible est écrite noir sur blanc : -23 LUFS avec une tolérance de ±0,5 LU et un plafond de crête vraie à -1 dBTP, c'est la recommandation EBU R 128. Pour du web, garde la cible par défaut de ton logiciel de montage, applique-la à toute une série de vidéos, et baisse la musique sous la voix au lieu de pousser la voix.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Peut-on cloner sa propre voix pour ses vidéos ?",
    },
    {
      type: "p",
      text: "Oui, et c'est l'usage le plus défendable de la technologie. Quelques minutes d'audio propre suffisent chez la plupart des outils pour obtenir un clone utilisable, les durées exactes et les procédures de vérification changeant d'un service à l'autre. La propreté de l'échantillon compte plus que sa durée. Enregistre-le dans une pièce sourde, sans musique ni réverbération, sinon le clone hérite de la pièce et tu traîneras cette réverbération sur toutes tes vidéos. Et si tu clones la voix de quelqu'un d'autre, même un proche, mets par écrit ce que tu as le droit d'en faire et jusqu'à quand.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Ce que tu peux tester dans l'heure",
    },
    {
      type: "p",
      text: "Reprends ta dernière vidéo, isole trente secondes de voix off et lis le texte à haute voix en te chronométrant. Si tu manques d'air avant la fin d'une phrase, elle est trop longue pour être dite. Aucune voix de synthèse ne réglera ça à ta place.",
    },
    {
      type: "p",
      text: "Ensuite, ouvre le mesureur de sonie de ton logiciel et compare deux de tes vidéos. Un écart de plusieurs unités entre les deux explique à lui seul le réflexe du spectateur qui va chercher le volume à chaque nouvel épisode.",
    },
    {
      type: "p",
      text: "Note de fondateur : j'ai passé bien plus d'heures à régler des niveaux qu'à essayer des voix, et c'est ce déséquilibre-là qui a fait progresser mes vidéos. Les modules audio de la formation IA gratuite d'AI Studios commencent au même endroit, le texte et le mixage, avant de parler d'outils.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-01 -->
