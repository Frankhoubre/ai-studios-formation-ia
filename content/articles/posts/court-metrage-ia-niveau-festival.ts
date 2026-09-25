import type { Article } from "@/lib/types/article";

export const courtMetrageIaNiveauFestival: Article = {
  title: "Court-métrage IA : viser le niveau festival",
  slug: "court-metrage-ia-niveau-festival",
  description:
    "Ce qu'un festival vérifie sur un court-métrage IA avant de le montrer à son jury : durée, sous-titres, sonie, droits. Les seuils chiffrés et la checklist.",
  excerpt:
    "Un dépôt en festival passe deux filtres. Le second est un jury, et tout le monde s'en préoccupe. Le premier est une vérification de conformité, qui écarte des films avant qu'un être humain les ait regardés. Ses seuils sont écrits dans les règlements, et ils se mesurent.",
  category: "storytelling",
  tags: [
    "court-métrage ia",
    "festival film ia",
    "cinéma ia",
    "sous-titres",
    "mixage",
    "dépôt",
  ],
  date: "2026-09-25",
  updatedAt: "2026-09-25",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/court-metrage-ia-niveau-festival.webp",
  imageAlt:
    "Bureau de réception des copies d'un petit festival de cinéma un matin d'hiver, une femme en cardigan jaune moutarde avec un badge autour du cou tient un porte-bloc en bois, l'autre main posée sur une valise noire ouverte garnie de mousse grise, une pile de formulaires et un rouleau d'adhésif sur le plateau en chêne, rayonnages métalliques de valises identiques au fond",
  keywords: [
    "court métrage ia",
    "réaliser court métrage ia",
    "court métrage ia festival",
    "dépôt court métrage festival",
    "sous-titres court métrage",
    "niveau festival film ia",
  ],
  relatedSlugs: [
    "creer-film-ia",
    "film-ia-gratuit-court-metrage",
    "raccord-continuite-plans-ia",
  ],
  faq: [
    {
      question: "Quelle durée maximale pour un court-métrage en festival ?",
      answer:
        "Le seuil le plus répandu est celui de Sundance : moins de 50 minutes, générique compris, la mention « including credits » figure noir sur blanc dans la définition de la catégorie. Les festivals de films IA imposent surtout un plancher : 3 minutes minimum à l'Astana AI Film Festival, une fourchette de 3 à 15 minutes au Runway AI Film Festival. Entre les deux, chaque festival décide, et la durée annoncée sur ton formulaire doit correspondre à celle du fichier à la seconde près.",
    },
    {
      question: "Faut-il des sous-titres anglais si mon film est en français ?",
      answer:
        "Oui, et c'est un motif de disqualification écrit. Le règlement 2026 de Sundance prévoit d'écarter sans remboursement tout projet contenant des dialogues non anglophones significatifs sans sous-titres anglais à l'écran. Une seule exception y est prévue : laisser volontairement une réplique non traduite comme choix artistique. Astana va plus loin et demande des sous-titres anglais incrustés dans la vidéo, pas un fichier à côté.",
    },
    {
      question: "À quel niveau sonore faut-il mixer un court-métrage ?",
      answer:
        "Il n'y a pas de valeur universelle, donc il faut lire le règlement de chaque festival. Sundance demande -24 LUFS avec une crête maximale à -2 dB pour le fichier de projection en ligne. Artdocfest annonce une fourchette de -18 à -21 LUFS. La recommandation européenne EBU R 128, elle, vise -23 LUFS. Ces valeurs sont proches sans être interchangeables : un master à -16 LUFS calibré pour YouTube sortira nettement trop fort dans les trois cas.",
    },
    {
      question: "Un court déjà en ligne peut-il encore être sélectionné ?",
      answer:
        "Chez Sundance, oui. Le règlement précise que les courts n'ont aucune exigence de première et peuvent avoir été projetés dans n'importe quel nombre de festivals, diffusés à la télévision, mis en ligne ou distribués en vidéo partout dans le monde. C'est l'inverse des longs métrages, soumis au statut de première mondiale ou internationale. Attention, ce n'est pas une règle universelle : certains festivals exigent une première, et l'Astana AI Film Festival demande au contraire un lien YouTube public ou non répertorié.",
    },
    {
      question: "Que veut dire « l'IA doit être intégrale à la création » ?",
      answer:
        "C'est la quatrième règle d'admission de l'Astana AI Film Festival, formulée ainsi : l'IA générative doit être intégrale à la création, pas seulement des VFX ou de l'upscale. Un film tourné en caméra et retouché avec des outils IA ne rentre pas dans cette case. La cinquième règle complète le dispositif en demandant de créditer tous les contributeurs et de déclarer les modèles et le pipeline au moment du dépôt. Ta liste d'outils fait donc partie du dossier, au même titre que le fichier.",
    },
    {
      question: "Qu'est-ce qui fait disqualifier un film sans remboursement ?",
      answer:
        "Le règlement de Sundance liste les cas et répète la même formule à chaque fois : disqualification sans remboursement des frais déjà versés. Un contenu protégé par le droit d'auteur ou une marque déposée inclus sans autorisation, l'absence de sous-titres anglais quand ils sont requis, un fichier illisible en totalité pour un problème technique quel qu'il soit, y compris quand la panne vient d'un tiers, un dépôt incomplet à l'heure de clôture. Aucun de ces motifs ne concerne la qualité du film.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu déposes ton court, tu attends quatre mois, et tu reçois trois lignes qui disent non. Aucun motif, aucun retour. Tu ne sauras jamais si un jury a trouvé ton histoire faible, ou si ton fichier a été écarté avant d'arriver devant lui.",
    },
    {
      type: "p",
      text: "Les deux arrivent, et le second cas est plus fréquent qu'on ne l'imagine. Un dépôt passe par **deux filtres successifs**, une vérification de conformité d'abord, un jury ensuite. Le premier se chiffre et se prépare. À la fin de cet article tu sauras où sont ses seuils, comment les mesurer sur ton propre fichier, et lesquels des règlements que tu vises les rendent obligatoires.",
    },
    {
      type: "p",
      text: "VOIDBORN, mon court-métrage d'animation réalisé avec l'IA, est passé par neuf festivals. Ce qui m'a le plus surpris en le déposant : la partie la plus facile à sécuriser du dossier est aussi celle que les films IA ratent le plus souvent. Les tutoriels de génération vidéo ne parlent jamais de sonie ni de time code.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Deux filtres, et le premier ne regarde pas ton film",
    },
    {
      type: "h3",
      text: "La conformité, vérifiée par quelqu'un qui n'a pas d'avis sur ton histoire",
    },
    {
      type: "p",
      text: "Avant le jury, un dossier passe entre les mains d'une personne qui coche des cases. Elle regarde la durée annoncée, la présence des sous-titres, la lisibilité du fichier, la complétude du formulaire. Le règlement 2026 du festival de Sundance montre bien de quoi il s'agit : la formule « disqualification sans remboursement des frais de dépôt déjà versés » y revient une dizaine de fois, toujours pour des motifs administratifs.",
    },
    {
      type: "p",
      text: "Le festival se réserve le droit d'écarter tout projet contenant des dialogues non anglophones significatifs sans sous-titres anglais à l'écran. Il écarte aussi tout fichier qui n'est pas visionnable en entier pour un problème technique, « qu'il soit de la faute du déposant ou de n'importe quel système tiers ». Un lien Vimeo qui expire pendant la période de visionnage, c'est ton problème.",
    },
    {
      type: "p",
      text: "Les festivals de films IA ont leurs propres cases, parfois inattendues. L'Astana AI Film Festival prévient que les films déposés via YouTube doivent porter le hashtag #SpecialForAAIFF dans la description, sans quoi ils ne sont pas examinés. Une ligne de description manquante suffit à sortir un film de 8 067 dépôts.",
    },
    {
      type: "h3",
      text: "Le jury, et ce que les festivals IA lui demandent de vérifier en plus",
    },
    {
      type: "p",
      text: "Sur un festival de films IA, le jury reçoit une pièce que ses confrères classiques n'ont jamais eue : ta déclaration de pipeline. Astana demande que tous les contributeurs soient crédités et que les modèles et le pipeline soient déclarés au moment du dépôt. Le [Runway AI Film Festival](https://aif.runwayml.com/terms-film) réclame dans son formulaire « une courte description écrite des techniques d'IA utilisées dans la soumission ».",
    },
    {
      type: "p",
      text: "Ce document conditionne ton éligibilité. La quatrième règle d'admission d'Astana dit que l'IA générative doit être intégrale à la création, pas seulement les VFX ou l'upscale : un film tourné en caméra puis passé à la moulinette IA n'a rien à faire là. Ta déclaration est le seul endroit où le festival peut le vérifier.",
    },
    {
      type: "image",
      src: "/images/articles/court-metrage-ia-niveau-festival-aaiff.webp",
      alt: "Section Rules of admission du site de l'Astana AI Film Festival, cinq cartes numérotées listant le hashtag obligatoire sur YouTube, les sous-titres anglais incrustés, les dates d'éligibilité, l'exigence d'IA générative intégrale à la création et la déclaration des modèles et du pipeline",
      caption:
        "Les cinq règles d'admission de l'Astana AI Film Festival, capturées sur aaiff.ai le 25 septembre 2026.",
    },
    {
      type: "p",
      text: "Sur ce que le jury regarde ensuite, aucun festival ne publie de barème, et tant mieux. Mon observation après neuf dépôts : la tenue des personnages et des lieux d'un plan à l'autre pèse plus lourd qu'un plan isolé très beau. Un film de six minutes dont le visage principal change trois fois se regarde comme une compilation. Le sujet mérite son propre guide, celui sur [le raccord entre deux plans IA](/blog/raccord-continuite-plans-ia).",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Les six seuils à tenir avant de déposer",
    },
    {
      type: "p",
      text: "Ces valeurs sortent des documents officiels des festivals concernés, dont les [spécifications techniques de présentation du Sundance Institute](https://www.sundance.org/wp-content/uploads/2022/11/Technical-Specifications-For-Festival-Presentation.pdf). Elles changent de l'un à l'autre, ce qui rend la lecture du règlement obligatoire avant de payer des frais de dépôt.",
    },
    {
      type: "table",
      caption:
        "Seuils relevés sur les règlements et spécifications officiels, le 25 septembre 2026.",
      headers: ["Ce qui est vérifié", "Le seuil", "Où c'est écrit"],
      rows: [
        [
          "Durée d'un court-métrage",
          "Moins de 50 minutes, générique compris",
          "Règlement de soumission 2026, Sundance",
        ],
        [
          "Durée minimale sur les festivals IA",
          "3 minutes à Astana, 3 à 15 minutes chez Runway",
          "aaiff.ai et aif.runwayml.com",
        ],
        [
          "Sonie du fichier de projection en ligne",
          "-24 LUFS, crête maximale -2 dB",
          "Spécifications techniques de présentation, Sundance",
        ],
        [
          "Cadence et balayage",
          "Progressif uniquement, 23,98 / 24 / 25 / 29,97 / 30 im/s",
          "Spécifications techniques de présentation, Sundance",
        ],
        [
          "Format des sous-titres",
          ".srt ou .vtt, time code démarrant à 00:00:00:00 ; incrustés à Astana",
          "Sundance et aaiff.ai",
        ],
        [
          "Durée d'un sous-titre à l'écran",
          "5/6 de seconde minimum (20 images en 24 im/s), 7 secondes maximum, 2 lignes",
          "Timed Text Style Guide, Netflix",
        ],
      ],
    },
    {
      type: "image",
      src: "/images/articles/court-metrage-ia-niveau-festival-sundance-specs.webp",
      alt: "Extrait du tableau de spécifications techniques de Sundance montrant la ligne Loudness à -24 dB LUFS avec une crête maximale de -2 dB, la ligne Frame Rate en progressif uniquement, et la ligne Closed Captions exigeant un fichier .srt ou .vtt",
      caption:
        "Le fichier de projection en ligne, dans les spécifications techniques de présentation publiées par le Sundance Institute (PDF officiel, consulté le 25 septembre 2026).",
    },
    {
      type: "p",
      text: "Je refais ces six étapes dans cet ordre à chaque film. Les trois premières tiennent en une soirée. Les trois suivantes demandent de rouvrir le montage, donc mieux vaut les anticiper avant de verrouiller ta timeline.",
    },
    {
      type: "ol",
      items: [
        "Chronomètre ton film générique compris, de la première à la dernière image, et note la durée à la seconde. C'est ce chiffre qui va dans le formulaire, et un écart avec le fichier se voit immédiatement.",
        "Mesure ta sonie intégrée sur le master, pas sur un export compressé. La plupart des logiciels de montage affichent la valeur en LUFS dans leur fenêtre de mixage, et le principe de la mesure est détaillé dans le guide sur [la voix off IA et son calibrage](/blog/voix-off-ia-guide).",
        "Fabrique ton fichier de sous-titres en .srt, avec un time code qui démarre à 00:00:00:00, et relis-le en lecture, pas dans un éditeur de texte. Deux lignes maximum par sous-titre, jamais moins de 5/6 de seconde à l'écran, jamais plus de 7 secondes.",
        "Exporte deux masters à partir de la même timeline : un avec les sous-titres incrustés pour les festivals qui les exigent ainsi, un sans, accompagné du fichier .srt. Nomme-les clairement, tu vas les ressortir souvent.",
        "Écris ta déclaration de pipeline dans un document séparé : les modèles utilisés plan par plan si tu le peux, les outils de montage, de son et d'étalonnage, les personnes qui ont travaillé dessus. Tu la copieras dans chaque formulaire.",
        "Repasse le film en plein écran, image par image sur les plans douteux, à la recherche des marques et des textes que l'IA a fabriqués toute seule. Chaque logo inventé est un risque juridique dont le règlement te rend seul responsable.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde un seul master de référence, un ProRes en 1920 x 1080 à 24 images par seconde, progressif, audio PCM 48 kHz en 24 bits, et génère tout le reste depuis celui-là. Sundance demande exactement ces valeurs pour son fichier de projection en ligne, et elles servent aussi de base propre pour un encodage YouTube ou un DCP. Tu éviteras la situation classique du réalisateur qui redécouvre trois versions légèrement différentes de son film la veille d'une clôture.",
    },
    {
      type: "image",
      src: "/images/articles/court-metrage-ia-niveau-festival-sous-titres.webp",
      alt: "Page du Timed Text Style Guide de Netflix affichant la section Duration, avec une durée minimale de 5/6 de seconde par sous-titre soit 20 images en 24 images par seconde, et une durée maximale de 7 secondes",
      caption:
        "Les durées de sous-titre du Timed Text Style Guide de Netflix, capturées sur partnerhelp.netflixstudios.com le 25 septembre 2026.",
    },
    {
      type: "p",
      text: "Aucun festival n'exige ces valeurs Netflix. Je les cite parce qu'elles sont publiques et chiffrées, et parce qu'elles correspondent à ce qu'un spectateur arrive vraiment à lire. Un sous-titre affiché un tiers de seconde reste illisible même dans un fichier techniquement valide. Sur le reste du dossier, les [critères de sélection des festivals de films IA](/blog/festivals-films-ia) varient beaucoup selon qu'ils vivent de sponsors ou de frais de dépôt.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quatre erreurs qui coûtent la sélection",
    },
    {
      type: "h3",
      text: "Déposer un montage qui n'est pas mixé",
    },
    {
      type: "p",
      text: "Les spécifications de Sundance sont explicites : tous les titres projetés doivent être des versions finalisées et mixées, et le festival annonce qu'il ne projettera aucun montage brut avec un mixage temporaire. Sur un film IA, le symptôme est facile à repérer : les voix générées sortent toutes au même niveau, la musique écrase les dialogues dans deux séquences, et les ambiances apparaissent puis disparaissent d'un plan à l'autre.",
    },
    {
      type: "p",
      text: "Fix concret : passe une soirée entière sur le seul son, sans toucher à l'image. Règle d'abord les dialogues entre eux, ajoute ensuite les ambiances pour combler les trous, la musique en dernier. Puis mesure la sonie globale et ajuste le gain général plutôt que de remonter chaque piste.",
    },
    {
      type: "h3",
      text: "Se tromper de sens sur les sous-titres",
    },
    {
      type: "p",
      text: "Deux écoles opposées coexistent. Astana veut des sous-titres anglais incrustés directement dans la vidéo. Des festivals de documentaire comme Artdocfest les refusent au contraire et réclament un fichier .srt séparé. Envoyer le mauvais master, c'est perdre des frais de dépôt sur une question de format.",
    },
    {
      type: "p",
      text: "Fix concret : produis les deux versions le jour où tu finis le film, et range-les dans le même dossier avec le fichier .srt. Ajoute un fichier texte listant la durée exacte, la cadence, la sonie mesurée et la liste des outils. Ce dossier devient ton kit de dépôt pour tous les festivals suivants.",
    },
    {
      type: "h3",
      text: "Laisser une marque inventée dans un plan",
    },
    {
      type: "p",
      text: "Les modèles vidéo fabriquent spontanément des logos sur les vêtements, des enseignes sur les façades, des étiquettes sur les bouteilles. La plupart ne veulent rien dire. De temps en temps, l'un d'eux tombe assez près d'une marque existante pour poser question. Le règlement de Sundance place l'autorisation des contenus protégés et des marques déposées sous la seule responsabilité du déposant, avec disqualification à la clé et une clause d'indemnisation en cas de réclamation.",
    },
    {
      type: "p",
      text: "Fix concret : une passe de visionnage dédiée, en plein écran, sur un grand moniteur, avec pause sur chaque plan où apparaît un objet manufacturé. Ce qui pose problème se corrige au montage, en floutant, en recadrant, ou en repassant le plan en retouche. La même vigilance vaut pour la musique, un sujet creusé dans l'article sur [les droits de la musique générée](/blog/musique-ia-droits-videos).",
    },
    {
      type: "h3",
      text: "Garder son court au chaud pour une hypothétique première mondiale",
    },
    {
      type: "p",
      text: "C'est le réflexe hérité du long métrage, et il coûte des mois. Le règlement de Sundance est net sur ce point : les courts n'ont aucune exigence de statut de première, et restent éligibles même après avoir été projetés dans n'importe quel nombre de festivals, diffusés à la télévision, mis en ligne ou distribués en vidéo n'importe où dans le monde. Astana demande même un lien YouTube.",
    },
    {
      type: "p",
      text: "Fix concret : vérifie la clause de première dans chaque règlement, et si elle n'existe pas, dépose partout en parallèle au lieu d'attendre les réponses les unes après les autres. Garde quand même un œil sur les licences que tu signes en déposant, certaines sont larges et perpétuelles. Pour la construction du film lui-même, tout part de la [méthode de fabrication d'un film IA](/blog/creer-film-ia) et de sa version sans budget, détaillée dans le [court-métrage IA réalisé gratuitement](/blog/film-ia-gratuit-court-metrage).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quelle durée maximale pour un court-métrage en festival ?",
    },
    {
      type: "p",
      text: "Le seuil le plus répandu est celui de Sundance : moins de 50 minutes, générique compris, la mention « including credits » figure noir sur blanc dans la définition de la catégorie. Les festivals de films IA imposent surtout un plancher : 3 minutes minimum à l'Astana AI Film Festival, une fourchette de 3 à 15 minutes au Runway AI Film Festival. Entre les deux, chaque festival décide, et la durée annoncée sur ton formulaire doit correspondre à celle du fichier à la seconde près.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Faut-il des sous-titres anglais si mon film est en français ?",
    },
    {
      type: "p",
      text: "Oui, et c'est un motif de disqualification écrit. Le [règlement 2026 de Sundance](https://www.sundance.org/wp-content/uploads/2025/04/2026_Submissions_Rules.pdf) prévoit d'écarter sans remboursement tout projet contenant des dialogues non anglophones significatifs sans sous-titres anglais à l'écran. Une seule exception y est prévue : laisser volontairement une réplique non traduite comme choix artistique. Astana va plus loin et demande des sous-titres anglais incrustés dans la vidéo, pas un fichier à côté.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "À quel niveau sonore faut-il mixer un court-métrage ?",
    },
    {
      type: "p",
      text: "Il n'y a pas de valeur universelle, donc il faut lire le règlement de chaque festival. Sundance demande -24 LUFS avec une crête maximale à -2 dB pour le fichier de projection en ligne. Artdocfest annonce une fourchette de -18 à -21 LUFS. La recommandation européenne EBU R 128, elle, vise -23 LUFS. Ces valeurs sont proches sans être interchangeables : un master à -16 LUFS calibré pour YouTube sortira nettement trop fort dans les trois cas.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Un court déjà en ligne peut-il encore être sélectionné ?",
    },
    {
      type: "p",
      text: "Chez Sundance, oui. Le règlement précise que les courts n'ont aucune exigence de première et peuvent avoir été projetés dans n'importe quel nombre de festivals, diffusés à la télévision, mis en ligne ou distribués en vidéo partout dans le monde. C'est l'inverse des longs métrages, soumis au statut de première mondiale ou internationale. Attention, ce n'est pas une règle universelle : certains festivals exigent une première, et l'[Astana AI Film Festival](https://aaiff.ai/) demande au contraire un lien YouTube public ou non répertorié.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Que veut dire « l'IA doit être intégrale à la création » ?",
    },
    {
      type: "p",
      text: "C'est la quatrième règle d'admission de l'Astana AI Film Festival, formulée ainsi : l'IA générative doit être intégrale à la création, pas seulement des VFX ou de l'upscale. Un film tourné en caméra et retouché avec des outils IA ne rentre pas dans cette case. La cinquième règle complète le dispositif en demandant de créditer tous les contributeurs et de déclarer les modèles et le pipeline au moment du dépôt. Ta liste d'outils fait donc partie du dossier, au même titre que le fichier.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Qu'est-ce qui fait disqualifier un film sans remboursement ?",
    },
    {
      type: "p",
      text: "Le règlement de Sundance liste les cas et répète la même formule à chaque fois : disqualification sans remboursement des frais déjà versés. Un contenu protégé par le droit d'auteur ou une marque déposée inclus sans autorisation, l'absence de sous-titres anglais quand ils sont requis, un fichier illisible en totalité pour un problème technique quel qu'il soit, y compris quand la panne vient d'un tiers, un dépôt incomplet à l'heure de clôture. Aucun de ces motifs ne concerne la qualité du film.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Le dossier à préparer avant la prochaine clôture",
    },
    {
      type: "p",
      text: "Crée un dossier à côté de ton projet de montage et mets-y six choses : le master de référence, la version aux sous-titres incrustés, le fichier .srt, la déclaration de pipeline, une note avec la durée exacte et la sonie mesurée, et le lien de visionnage. Compte une soirée. Tu le rouvriras à chaque dépôt pendant deux ans, et il règle le premier filtre une bonne fois.",
    },
    {
      type: "p",
      text: "Le jury, lui, restera imprévisible. Au moins ton film sera arrivé jusqu'à lui.",
    },
    {
      type: "p",
      text: "Note de fondateur : la formation IA gratuite d'AI Studios commence par l'écriture et finit par le son, dans cet ordre, parce que c'est l'ordre dans lequel un film se tient debout. Si ton court est déjà monté, fais d'abord la soirée de mixage décrite plus haut. C'est l'heure de travail qui change le plus de choses sur un film IA terminé.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-25 -->
