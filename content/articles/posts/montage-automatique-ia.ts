import type { Article } from "@/lib/types/article";

export const montageAutomatiqueIa: Article = {
  title: "Montage automatique IA : ce qui marche",
  slug: "montage-automatique-ia",
  description:
    "Silences coupés, recadrage vertical, multicam, chapitres : ce que le montage automatique par IA fait bien, où il dérape, et dans quel ordre l'utiliser.",
  excerpt:
    "Le montage automatique coupe très bien tout ce qui se mesure : une pause en millisecondes, un visage dans le cadre, des mots qui collent au script. Le reste, c'est toi. Huit fonctions passées au crible, et l'ordre qui évite de tout refaire.",
  category: "workflow-creatif",
  tags: ["montage automatique", "montage vidéo ia", "davinci resolve", "premiere", "descript"],
  date: "2026-10-07",
  updatedAt: "2026-10-07",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/montage-automatique-ia.webp",
  imageAlt:
    "Dans l'arrière-boutique d'une librairie aménagée en plateau de podcast, un homme en surchemise olive penché sur une caméra montée sur trépied vérifie son écran orientable, une feuille de timecodes manuscrits sur le genou, face à deux fauteuils vides et deux micros",
  keywords: [
    "montage automatique ia",
    "montage vidéo ia automatique",
    "supprimer les silences vidéo",
    "recadrage automatique vertical",
    "multicam automatique",
    "chapitres youtube automatiques",
  ],
  relatedSlugs: [
    "monter-video-ia-capcut-davinci",
    "capcut-ia-fonctions",
    "decouper-video-longue-shorts-ia",
  ],
  faq: [
    {
      question: "L'IA peut-elle monter une vidéo entière toute seule ?",
      answer:
        "Elle peut sortir un premier bout-à-bout : coupe des blancs, alternance des caméras selon qui parle, assemblage à partir d'un script. Elle ne sait pas juger la prise la plus juste, le temps qu'il faut laisser à une réaction ou ce qu'il vaut mieux retirer. Compte-la comme un assistant qui prépare la timeline, puis repasse sur chaque coupe.",
    },
    {
      question: "Quel logiciel choisir pour le montage automatique ?",
      answer:
        "Pour une vidéo parlée tournée face caméra, Descript est le plus direct : tu montes en éditant la transcription et tu raccourcis les blancs en une passe. Pour un podcast filmé à plusieurs caméras ou un tournage scénarisé, DaVinci Resolve Studio propose l'alternance automatique des angles et l'assemblage à partir d'un script. Pour le recadrage vertical d'une séquence entière, Auto Reframe de Premiere fait le travail.",
    },
    {
      question: "Comment supprimer les silences d'une vidéo sans couper les mots ?",
      answer:
        "Ne ramène jamais les blancs à zéro. Dans Descript, l'outil Shorten word gaps te laisse fixer une durée cible, la doc donne 200 millisecondes en exemple. Garde ensuite un œil sur l'attaque du mot qui suit chaque coupe : une demande d'utilisateurs ouverte en avril 2026 sur le forum de Descript signale justement des débuts de mots rognés quand l'IA supprime les silences.",
    },
    {
      question: "Le recadrage automatique en 9:16 est-il fiable ?",
      answer:
        "Sur un plan fixe avec une seule personne, oui. Adobe recommande le réglage Slower Motion pour les interviews face caméra, qui produit un cadre presque immobile. Dès qu'il y a deux visages ou des mouvements rapides, la doc d'Adobe prévient qu'il faudra retoucher les images clés à la main. Repasse sur chaque plan à deux personnes.",
    },
    {
      question: "Faut-il activer les chapitres automatiques de YouTube ?",
      answer:
        "Tu peux les laisser cochés, ils le sont par défaut sur les nouvelles vidéos, mais ne compte pas dessus. YouTube précise que toutes les vidéos ne sont pas éligibles et qu'il n'en génère pas pour toutes les vidéos éligibles. Écris plutôt tes chapitres dans la description : premier code à 00:00, au moins trois, chacun de 10 secondes minimum. Les tiens remplacent alors les automatiques.",
    },
    {
      question: "Le montage automatique marche-t-il sur des plans générés par IA ?",
      answer:
        "En partie. La plupart de ces outils lisent la parole : sans dialogue, la coupe des silences et l'assemblage par script n'ont rien à mesurer. Le recadrage fonctionne, mais générer directement en vertical donne un meilleur cadre que recadrer du 16:9. La recherche par contenu, comme IntelliSearch dans DaVinci Resolve, peut en revanche aider à retrouver un plan parmi des centaines de générations.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Une heure de podcast filmée à deux caméras, c'est une après-midi de dérushage avant même la première coupe intéressante. Il faut synchroniser, repérer qui parle, enlever les blancs, puis tout refaire en vertical pour les réseaux. Les logiciels promettent désormais de faire ça « en un clic ». Certains y arrivent. D'autres te laissent une timeline propre en apparence et pleine de mots rognés.",
    },
    {
      type: "p",
      text: "Tu trouveras ici huit fonctions de montage automatique passées au crible dans un tableau (Descript, DaVinci Resolve, Premiere, YouTube), un test simple pour savoir si une fonction mérite ta confiance, l'ordre dans lequel les enchaîner sans refaire le travail deux fois, et les quatre dérapages les plus courants. Les docs ont été relues le 7 octobre 2026.",
    },
    {
      type: "p",
      text: "Avant d'activer quoi que ce soit, pose-toi une question : **le critère de la coupe se mesure-t-il ?** Une pause de 800 millisecondes, un visage qui sort du cadre, une phrase du script retrouvée dans la transcription, ça se mesure, et la machine le fait mieux que toi. La prise où l'invitée hésite juste ce qu'il faut avant de répondre, aucun logiciel ne la reconnaît.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Montage automatique IA : la machine coupe ce qu'elle sait mesurer",
    },
    {
      type: "p",
      text: "L'étiquette « montage IA » recouvre des fonctions qui ne font pas le même travail. La plupart détectent quelque chose : un blanc, un mot parasite, un visage, un objet dans un rush. Quelques-unes vont plus loin et assemblent un bout-à-bout complet à partir d'une règle, et il reste celles qui reprennent une vidéo finie pour l'adapter au vertical ou à YouTube.",
    },
    {
      type: "p",
      text: "Le monteur, lui, prend des décisions qu'aucune règle ne décrit. Il garde une respiration parce qu'elle dit quelque chose, il montre celui qui écoute pendant que l'autre parle, et parfois il coupe une phrase juste avant la chute parce que le public l'a déjà devinée. Plus une fonction s'approche de ce type de choix, plus sa sortie demande de relecture.",
    },
    {
      type: "h3",
      id: "test-mesurable",
      text: "Le test avant d'activer une fonction",
    },
    {
      type: "p",
      text: "Avant de lancer un outil sur un projet client, demande-toi ce qu'il mesure exactement. Si la réponse est un chiffre (une durée, une position dans le cadre, une correspondance de texte), tu peux le laisser travailler sur toute la timeline et vérifier par échantillons. Si la réponse est floue (« il choisit les meilleurs moments »), considère sa sortie comme une proposition et relis tout.",
    },
    {
      type: "p",
      text: "Ce test explique pourquoi la même fonction brille sur un projet et rate sur le suivant. La coupe des blancs fait des merveilles sur un tuto au débit régulier. Sur une interview émouvante, les silences portent le sens, et les supprimer mécaniquement aplatit tout.",
    },
    {
      type: "h3",
      id: "plans-generes",
      text: "Sur des plans générés, il reste moins à mesurer",
    },
    {
      type: "p",
      text: "Si tu montes surtout des plans sortis de Veo, Kling ou Runway, ajuste tes attentes. La plupart de ces outils s'appuient sur la parole, or une séquence de plans générés sans dialogue ne leur donne presque rien : pas de blanc à couper, pas de transcription à comparer au script, pas de locuteur à suivre. Le travail reste un vrai montage, décrit dans l'article sur le [montage d'une vidéo IA dans CapCut ou DaVinci Resolve](/blog/monter-video-ia-capcut-davinci).",
    },
    {
      type: "p",
      text: "Deux fonctions gardent leur intérêt. Le recadrage, d'abord, même si générer directement en vertical cadre mieux que recadrer du 16:9 après coup. La recherche par contenu, ensuite : quand tu as deux cents générations dans un dossier, retrouver « le plan avec la femme au parapluie » en tapant une requête vaut des heures. Ça, c'est mon hypothèse d'usage, je n'ai pas de mesure à te donner.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Dans quel ordre automatiser un montage",
    },
    {
      type: "table",
      caption:
        "Huit fonctions de montage automatique et ce qu'elles mesurent. Fonctions relevées dans les documentations officielles le 7 octobre 2026.",
      headers: ["Tâche", "Outil", "Ce que la machine mesure", "Ce que tu vérifies"],
      rows: [
        ["Retrouver un plan dans les rushes", "DaVinci Resolve, IntelliSearch", "Objets, mots du dialogue, visages", "Presque rien, le gain est direct"],
        ["Assembler à partir d'un script", "DaVinci Resolve, IntelliScript", "Correspondance entre le texte du script et la transcription", "La prise retenue : le texte peut être juste et le jeu à côté"],
        ["Alterner les caméras d'un podcast", "DaVinci Resolve, AI Multicam SmartSwitch", "Mouvement des lèvres et audio pour savoir qui parle", "Les réactions de celui qui écoute"],
        ["Raccourcir les blancs", "Descript, Shorten word gaps", "Durée de la pause entre deux mots", "L'attaque du mot qui suit chaque coupe"],
        ["Retirer les mots parasites", "Descript, suppression des « euh »", "Mots repérés dans la transcription", "Les hésitations qui servent le propos"],
        ["Couper une longue vidéo en extraits", "CapCut, AutoCut", "Silences, rythme de l'audio", "Le début et la fin de chaque extrait"],
        ["Recadrer en vertical", "Premiere, Auto Reframe ; DaVinci, Smart Reframe", "Position du sujet dans le cadre", "Les plans à deux visages et les mouvements rapides"],
        ["Chapitrer la vidéo publiée", "YouTube, chapitres automatiques", "Méthode non documentée par YouTube", "Leur présence même, rien n'est garanti"],
      ],
    },
    {
      type: "p",
      text: "Côté DaVinci Resolve, la [page des nouveautés de Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve/whatsnew) décrit IntelliScript ainsi : à l'import, le logiciel compare le texte du script à l'audio transcrit et crée un premier montage de la scène, que tu affines ensuite avec les outils classiques. La version 21 accepte désormais les scénarios au format Final Draft et en texte brut. Blackmagic range son moteur d'IA, le DaVinci AI Neural Engine, parmi les atouts de la version Studio, vendue 295 dollars sur son site. Avant d'acheter, vérifie dans la fiche technique si la fonction qui t'intéresse tourne aussi dans la version gratuite.",
    },
    {
      type: "ol",
      items: [
        "Trie avant de couper. Lance la recherche par contenu ou la transcription sur tous les rushes, nomme les prises, jette les fausses. Cette étape ne présente aucun risque et elle fait gagner du temps sur toutes les suivantes.",
        "Fais assembler le bout-à-bout. Script importé pour un tournage scénarisé, alternance automatique des caméras pour un podcast. Tu obtiens une timeline complète en quelques minutes, à traiter comme un brouillon.",
        "Raccourcis les blancs avec une durée cible, jamais à zéro. Une pause garde de l'air entre deux idées ; la supprimer donne ce débit de mitraillette qui fatigue au bout de trente secondes.",
        "Regarde tout, à vitesse normale, au casque. On a très envie de la sauter, et c'est pourtant elle qui attrape les mots rognés, les changements de caméra au milieu d'un rire et les réactions perdues.",
        "Valide la version horizontale, et seulement ensuite recadre en vertical. Le recadrage crée une copie de ta séquence : toute correction faite après devra être refaite dans les deux versions.",
        "Chapitre en dernier, sur le fichier final. Les codes temporels bougent à chaque coupe ; des chapitres écrits trop tôt pointent à côté.",
      ],
    },
    {
      type: "p",
      text: "Pour la coupe d'une vidéo longue en Shorts, avec ses règles de durée propres à YouTube, la méthode complète est dans l'article sur le [découpage d'une vidéo longue en Shorts](/blog/decouper-video-longue-shorts-ia). Et si tu montes dans CapCut, le tri entre ses fonctions IA utiles et celles qui brûlent des crédits pour rien est fait dans le guide des [fonctions IA de CapCut](/blog/capcut-ia-fonctions).",
    },
    {
      type: "p",
      text: "> Pro Tip : dans Auto Reframe, choisis le réglage de suivi selon la nature du plan, pas par défaut. Adobe conseille Slower Motion pour les interviews face caméra (cadre presque immobile, très peu d'images clés) et Faster Motion pour le sport ou le skate. Un podcast recadré en Default bouge légèrement à chaque mouvement de tête, et ça se voit sur un téléphone.",
    },
    {
      type: "h3",
      id: "recadrage-sequence",
      text: "Recadrer une séquence entière dans Premiere",
    },
    {
      type: "p",
      text: "Dans Premiere, la commande Séquence > Auto Reframe Sequence traite tous les plans d'un coup. Tu choisis le ratio cible, éventuellement une résolution personnalisée, puis le réglage de suivi. La documentation d'Adobe précise que le logiciel crée une séquence dupliquée aux nouvelles dimensions, rangée dans un dossier Auto Reframe Sequences, avec l'effet appliqué à chaque plan.",
    },
    {
      type: "image",
      src: "/images/articles/montage-automatique-ia-auto-reframe.webp",
      alt: "Page d'aide Adobe Add Auto Reframe effect to sequences, avec la note expliquant que Premiere crée une séquence dupliquée aux bonnes dimensions et la liste des réglages Motion Tracking : Slower Motion, Default et Faster Motion",
      caption:
        "L'aide officielle d'Adobe sur Auto Reframe appliqué à une séquence, capturée sur helpx.adobe.com le 7 octobre 2026 (dernière mise à jour affichée : 15 avril 2026).",
    },
    {
      type: "p",
      text: "Cette séquence dupliquée explique l'étape 5 de la méthode. Si tu recadres trop tôt et que tu corriges ensuite une coupe dans la version horizontale, la version verticale ne suit pas. Tu te retrouves à faire chaque retouche deux fois, ou à relancer le recadrage et perdre les ajustements manuels déjà faits.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Là où le montage automatique dérape",
    },
    {
      type: "h3",
      id: "mots-rognes",
      text: "La coupe qui mange le début des mots",
    },
    {
      type: "p",
      text: "Symptôme : après la suppression des silences, certaines phrases commencent sur une syllabe tronquée, « 'jourd'hui » au lieu de « aujourd'hui ». Sur le forum de suggestions de Descript, une demande ouverte le 16 avril 2026 s'intitule précisément « corriger la façon dont Descript coupe les mots quand Underlord supprime les blancs ». Elle comptait 45 votes et le statut « En développement » le 7 octobre. Un membre de l'équipe y attribue le problème à l'alignement imprécis des mots dans la transcription.",
    },
    {
      type: "image",
      src: "/images/articles/montage-automatique-ia-descript.webp",
      alt: "Demande sur le forum de suggestions de Descript intitulée fix how descript cuts off words when underlord deletes dead air, avec 45 votes, le statut In development et la date du 16 avril 2026",
      caption:
        "La demande d'utilisateurs sur les mots coupés, sur le forum de suggestions de Descript (feedback.descript.com), capturée le 7 octobre 2026.",
    },
    {
      type: "p",
      text: "Fix concret : fixe une durée cible au lieu de supprimer les blancs entièrement. L'outil Shorten word gaps de Descript permet de définir ce qui compte comme un blanc, puis la longueur à laquelle le ramener (la [doc de Descript](https://help.descript.com/script-editing/shorten-word-gaps) prend 200 millisecondes en exemple). Sur les offres actuelles, il consomme des crédits IA. Écoute ensuite les dix premières coupes : si l'une d'elles mange une syllabe, allonge la cible.",
    },
    {
      type: "h3",
      id: "multicam-reactions",
      text: "Le multicam qui ne montre que celui qui parle",
    },
    {
      type: "p",
      text: "Symptôme : ton podcast change de caméra à chaque prise de parole, avec la régularité d'un métronome. AI Multicam SmartSwitch fait exactement ce qu'on lui demande, il repère le locuteur au mouvement des lèvres et au son. Sauf que les meilleurs moments d'une conversation filmée sont souvent sur le visage de celui qui écoute : le sourire avant la réponse, le sourcil qui se lève.",
    },
    {
      type: "p",
      text: "Fix concret : garde le montage automatique comme base, puis repasse sur les trois ou quatre moments forts de l'épisode et coupe à la main vers l'auditeur. Avec ces quelques coupes vers l'auditeur, l'épisode a l'air réalisé par quelqu'un.",
    },
    {
      type: "h3",
      id: "recadrage-deux-visages",
      text: "Le recadrage qui hésite entre deux visages",
    },
    {
      type: "p",
      text: "Symptôme : sur un plan large à deux personnes, le cadre vertical glisse de l'une à l'autre, ou s'arrête entre les deux sur un mur. La documentation d'Adobe le dit elle-même : une séquence complexe avec plusieurs points d'intérêt ou des mouvements rapides demandera sans doute d'ajuster les images clés après le recadrage.",
    },
    {
      type: "p",
      text: "Fix concret : repère ces plans avant de recadrer. Pour chacun, choisis à la main qui doit être à l'écran, quitte à couper le plan en deux, ou remplace-le par le plan serré de la deuxième caméra quand tu en as une.",
    },
    {
      type: "h3",
      id: "chapitres-absents",
      text: "Compter sur les chapitres automatiques",
    },
    {
      type: "p",
      text: "Symptôme : la vidéo est en ligne depuis une semaine et aucun chapitre n'apparaît, ou ils portent des titres vagues. L'[aide YouTube sur les chapitres](https://support.google.com/youtube/answer/9884579?hl=fr) le reconnaît noir sur blanc : toutes les vidéos ne sont pas éligibles aux chapitres automatiques, et YouTube n'en génère pas pour toutes les vidéos éligibles. La fonction n'est pas non plus disponible si la chaîne a des avertissements actifs.",
    },
    {
      type: "image",
      src: "/images/articles/montage-automatique-ia-chapitres-youtube.webp",
      alt: "Page d'aide YouTube Chapitres vidéo en français, avec les règles des chapitres manuels (premier code à 00:00, au moins trois codes temporels, 10 secondes minimum) et la remarque indiquant que toutes les vidéos ne sont pas éligibles aux chapitres automatiques",
      caption:
        "L'aide officielle de YouTube sur les chapitres vidéo, capturée sur support.google.com le 7 octobre 2026.",
    },
    {
      type: "p",
      text: "Fix concret : écris tes chapitres dans la description, c'est cinq minutes de travail. Premier code à 00:00, au moins trois codes dans l'ordre chronologique, chaque chapitre de 10 secondes minimum. YouTube précise que cette liste remplace les chapitres automatiques. Si ta transcription est déjà propre (voir les [sous-titres automatiques](/blog/sous-titres-automatiques-ia-video)), un assistant IA peut t'en proposer un premier jet, que tu corriges.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "L'IA peut-elle monter une vidéo entière toute seule ?",
    },
    {
      type: "p",
      text: "Elle peut sortir un premier bout-à-bout : coupe des blancs, alternance des caméras selon qui parle, assemblage à partir d'un script. Elle ne sait pas juger la prise la plus juste, le temps qu'il faut laisser à une réaction ou ce qu'il vaut mieux retirer. Compte-la comme un assistant qui prépare la timeline, puis repasse sur chaque coupe.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quel logiciel choisir pour le montage automatique ?",
    },
    {
      type: "p",
      text: "Pour une vidéo parlée tournée face caméra, Descript est le plus direct : tu montes en éditant la transcription et tu raccourcis les blancs en une passe. Pour un podcast filmé à plusieurs caméras ou un tournage scénarisé, DaVinci Resolve Studio propose l'alternance automatique des angles et l'assemblage à partir d'un script. Pour le recadrage vertical d'une séquence entière, Auto Reframe de Premiere fait le travail.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Comment supprimer les silences d'une vidéo sans couper les mots ?",
    },
    {
      type: "p",
      text: "Ne ramène jamais les blancs à zéro. Dans Descript, l'outil Shorten word gaps te laisse fixer une durée cible, la doc donne 200 millisecondes en exemple. Garde ensuite un œil sur l'attaque du mot qui suit chaque coupe : une demande d'utilisateurs ouverte en avril 2026 sur le forum de Descript signale justement des débuts de mots rognés quand l'IA supprime les silences.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le recadrage automatique en 9:16 est-il fiable ?",
    },
    {
      type: "p",
      text: "Sur un plan fixe avec une seule personne, oui. Adobe recommande le réglage Slower Motion pour les interviews face caméra, qui produit un cadre presque immobile. Dès qu'il y a deux visages ou des mouvements rapides, la doc d'Adobe prévient qu'il faudra retoucher les images clés à la main. Repasse sur chaque plan à deux personnes.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il activer les chapitres automatiques de YouTube ?",
    },
    {
      type: "p",
      text: "Tu peux les laisser cochés, ils le sont par défaut sur les nouvelles vidéos, mais ne compte pas dessus. YouTube précise que toutes les vidéos ne sont pas éligibles et qu'il n'en génère pas pour toutes les vidéos éligibles. Écris plutôt tes chapitres dans la description : premier code à 00:00, au moins trois, chacun de 10 secondes minimum. Les tiens remplacent alors les automatiques.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Le montage automatique marche-t-il sur des plans générés par IA ?",
    },
    {
      type: "p",
      text: "En partie. La plupart de ces outils lisent la parole : sans dialogue, la coupe des silences et l'assemblage par script n'ont rien à mesurer. Le recadrage fonctionne, mais générer directement en vertical donne un meilleur cadre que recadrer du 16:9. La recherche par contenu, comme IntelliSearch dans DaVinci Resolve, peut en revanche aider à retrouver un plan parmi des centaines de générations.",
    },
    {
      type: "p",
      text: "Pour ton prochain projet, n'automatise qu'une seule étape et compare. Prends dix minutes de rushes, lance la coupe des blancs avec une cible à 200 millisecondes, puis regarde le résultat en entier, au casque, en notant chaque coupe qui te gêne. Au bout de dix minutes de visionnage, tu sauras si cet outil mérite ta prochaine heure de rushes.",
    },
    {
      type: "p",
      text: "Note de fondateur : un logiciel qui coupe les blancs à ta place te rend du temps, à condition de le réinvestir dans ce qu'il ne sait pas faire. Choisir ce qu'on montre, ce qu'on retire et combien de temps on laisse durer un regard, c'est du découpage, et ça s'apprend. On y passe du temps dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-07 -->
