import type { Article } from "@/lib/types/article";

export const elevenlabsGuideComplet: Article = {
  title: "ElevenLabs : le guide complet en français",
  slug: "elevenlabs-guide-complet",
  description:
    "ElevenLabs en clair : quel modèle choisir, ce que coûtent vraiment les crédits, cloner sa voix proprement et les pièges du français.",
  excerpt:
    "Voix off, clonage, bruitages, doublage, transcription : ce que fait vraiment ElevenLabs, ce que ça coûte en crédits, et la méthode pour un français qui ne trébuche pas.",
  category: "ia-video",
  tags: ["ElevenLabs", "voix off IA", "clonage vocal", "doublage IA", "guide outil"],
  date: "2026-08-24",
  updatedAt: "2026-08-24",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/elevenlabs-guide-complet.webp",
  imageAlt:
    "Cabine de voix off vue depuis la régie, comédienne au micro derrière la vitre en train de dire une réplique, console de mixage au premier plan",
  keywords: [
    "elevenlabs français",
    "elevenlabs guide",
    "elevenlabs voix",
    "elevenlabs prix",
    "clonage de voix ia",
    "voix off ia",
  ],
  relatedSlugs: [
    "elevenlabs-voiceover-pub",
    "doublage-traduction-video-ia",
    "sous-titres-automatiques-ia-video",
  ],
  faq: [
    {
      question: "ElevenLabs est-il gratuit ?",
      answer:
        "Il existe une offre à 0 dollar avec 10 000 crédits par mois, de quoi tester la synthèse vocale, la transcription, les bruitages et la musique. Attention au seuil : la licence commerciale n'arrive qu'à partir de l'offre Starter, à 6 dollars par mois. En dessous, tout ce que tu génères reste cantonné à tes essais personnels.",
    },
    {
      question: "Quelle offre ElevenLabs choisir pour de la voix off vidéo ?",
      answer:
        "Compte en caractères plutôt qu'en dollars. Sur Multilingual v2, un caractère coûte un crédit, donc les 30 000 crédits de Starter valent environ 30 000 signes par mois, soit une quarantaine de minutes de commentaire. Les 121 000 crédits de Creator, à 22 dollars, tiennent une production régulière et débloquent le clonage professionnel. Pro à 99 dollars pour 600 000 crédits ne se justifie que si tu produis de la série ou si tu as besoin du PCM 44,1 kHz par l'API.",
    },
    {
      question: "Quel modèle ElevenLabs choisir : v3, Multilingual v2 ou Flash ?",
      answer:
        "Eleven v3 est le plus expressif, il accepte les balises audio du type [whispers] ou [laughs] et couvre plus de 70 langues, avec une limite de 5 000 caractères par génération. Multilingual v2 couvre 29 langues, accepte 10 000 caractères et reste le choix sûr pour un commentaire long et sobre. Flash v2.5 monte à 40 000 caractères, tourne autour de 75 millisecondes de latence et coûte un crédit pour deux caractères, ce qui en fait le modèle des gros volumes et du temps réel.",
    },
    {
      question: "ElevenLabs est-il bon en français ?",
      answer:
        "Oui sur le fond, avec une réserve qui revient à chaque projet. Les phrases courantes passent très bien, la prosodie tient. Ce qui casse, ce sont les noms propres, les acronymes maison, les marques et les nombres écrits en chiffres. Écris ces mots phonétiquement dans le script, remplace 2026 par deux mille vingt-six, puis écoute vingt secondes de test avant de lancer la version longue. Ça règle l'essentiel.",
    },
    {
      question: "Combien de temps d'audio faut-il pour cloner sa voix ?",
      answer:
        "Pour le clonage instantané, une à deux minutes d'audio propre suffisent, et la documentation déconseille de dépasser trois minutes parce que le gain devient nul et peut même dégrader le résultat. Pour le clonage professionnel, il faut au minimum trente minutes, avec deux à trois heures comme cible idéale, découpées en échantillons d'une trentaine de minutes. L'entraînement demande ensuite trois à six heures.",
    },
    {
      question: "Peut-on utiliser une voix ElevenLabs commercialement ?",
      answer:
        "À partir de l'offre Starter, oui, la licence commerciale est incluse et couvre aussi la musique générée. Cloner la voix de quelqu'un d'autre demande en revanche son accord explicite, et ElevenLabs te fait cocher une confirmation de consentement avant d'enregistrer le clone. Autre point à ne pas rater : dans l'Union européenne, un contenu audio ou vidéo généré qui donne l'impression de montrer une personne réelle relève des obligations de transparence du règlement européen sur l'IA, applicables depuis le 2 août 2026.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Première génération, première phrase : le rendu sort mieux que prévu. Trois lignes plus loin, la voix écorche le nom de ton client, avale une virgule, et repart sur un ton d'annonce SNCF. Tu regénères. Le défaut se déplace, il ne disparaît pas.",
    },
    {
      type: "p",
      text: "Ce guide fait le tour du produit tel qu'il est en août 2026 : le choix du modèle, le coût réel des crédits, le clonage de voix, et l'endroit précis où le français décroche encore. Parce qu'il décroche.",
    },
    {
      type: "p",
      text: "La plupart des gens que je vois bloquer sur ElevenLabs travaillent sur le mauvais curseur. Ils passent une heure à essayer treize voix de la bibliothèque alors que leur problème vient du modèle sélectionné et du texte qu'ils lui donnent. Le choix de la voix arrive en troisième position dans l'ordre des décisions qui comptent.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce qu'il y a vraiment dans ElevenLabs aujourd'hui",
    },
    {
      type: "h3",
      id: "les-modeles",
      text: "Le modèle compte plus que la voix",
    },
    {
      type: "p",
      text: "Quatre moteurs de synthèse cohabitent, et ils ne servent pas au même usage. Ils diffèrent sur trois axes : l'expressivité, la longueur de texte acceptée d'un coup, et le prix au caractère.",
    },
    {
      type: "table",
      caption:
        "Les modèles de synthèse vocale ElevenLabs, d'après la documentation officielle (août 2026)",
      headers: ["Modèle", "Caractères par génération", "Latence", "Langues", "Pour quoi"],
      rows: [
        ["Eleven v3", "5 000", "Standard", "70+", "Narration expressive, dialogue, personnages"],
        ["Eleven v3 Conversational", "Non communiqué", "≈ 280 ms", "70+", "Agents vocaux, temps réel"],
        ["Eleven Multilingual v2", "10 000", "Standard", "29", "Commentaire long, contenu pro"],
        ["Eleven Flash v2.5", "40 000", "≈ 75 ms", "32", "Gros volumes, moitié prix au caractère"],
      ],
    },
    {
      type: "p",
      text: "Eleven v3 est celui qui a le plus changé la façon de travailler. Il accepte des balises audio directement dans le texte, entre crochets, pour diriger la performance : [whispers] pour chuchoter, [laughs] pour un rire, [sighs] pour un soupir, plus des indications d'émotion et de rythme. Un curseur de stabilité règle le reste, avec trois positions. Creative donne le plus d'émotion et le plus d'accidents, Natural reste au plus près de l'enregistrement d'origine, Robust verrouille tout et ignore une bonne partie des directions. La liste des balises et leur mode d'emploi sont détaillés dans le [guide officiel des audio tags d'ElevenLabs](https://elevenlabs.io/blog/v3-audiotags).",
    },
    {
      type: "p",
      text: "Multilingual v2 reste mon défaut pour un commentaire de trois minutes qui doit juste être propre. Moins de personnalité, moins de surprises, et 10 000 caractères d'un coup au lieu de 5 000. Flash v2.5 sert autre chose : du volume, du temps réel, ou un budget serré, puisqu'il consomme un crédit pour deux caractères là où les autres en prennent un par caractère.",
    },
    {
      type: "h3",
      id: "clonage-instantane-professionnel",
      text: "Clonage instantané ou clonage professionnel",
    },
    {
      type: "p",
      text: "Les deux portent le même nom dans les conversations et donnent des résultats très différents. Le clonage instantané se contente d'une à deux minutes d'audio propre. La documentation déconseille même de dépasser trois minutes : au-delà, le gain disparaît et la qualité du clone peut baisser. Tu obtiens ta voix en quelques secondes, avec une ressemblance correcte et des faiblesses sur les accents peu courants.",
    },
    {
      type: "p",
      text: "Le clonage professionnel joue dans une autre catégorie et se mérite. Il faut au minimum trente minutes d'enregistrement, deux à trois heures pour un résultat vraiment fidèle, découpées en échantillons d'une trentaine de minutes selon la [documentation officielle du clonage professionnel](https://elevenlabs.io/docs/eleven-creative/voices/voice-cloning/professional-voice-cloning). Compte trois à six heures d'entraînement avant de pouvoir l'utiliser, davantage si la file d'attente est chargée.",
    },
    {
      type: "p",
      text: "Côté matière, les exigences sont les mêmes que pour un enregistrement de voix off classique : un seul locuteur, aucune réverbération de pièce, aucun bruit de fond, un niveau autour de -23 à -18 dB RMS avec un vrai crête à -3 dB, et du MP3 à 192 kbps ou mieux. Un clone médiocre vient presque toujours d'une source médiocre. Notre article sur [la voix off publicitaire avec ElevenLabs](/blog/elevenlabs-voiceover-pub) détaille la partie réglages et intégration au mix.",
    },
    {
      type: "h3",
      id: "offres-et-credits",
      text: "Les offres, et le seuil qui compte vraiment",
    },
    {
      type: "p",
      text: "Le tableau des prix cache une marche que beaucoup découvrent trop tard : la licence commerciale démarre à l'offre Starter. Tant que tu restes à 0 dollar, tu es en phase de test, quoi que tu génères.",
    },
    {
      type: "table",
      caption: "Les offres ElevenLabs, tarif mensuel affiché en août 2026 (en dollars)",
      headers: ["Offre", "Prix par mois", "Crédits inclus", "Ce que ça débloque"],
      rows: [
        ["Free", "0", "10 000", "Tous les modules en test, sans licence commerciale"],
        ["Starter", "6", "30 000", "Licence commerciale, clonage instantané, dubbing studio"],
        ["Creator", "22", "121 000", "Clonage professionnel"],
        ["Pro", "99", "600 000", "PCM 44,1 kHz par l'API, audio 192 kbps"],
        ["Scale", "299", "1,8 M", "3 sièges, 3 clones professionnels"],
        ["Business", "990", "6 M", "10 sièges, 10 clones professionnels"],
        ["Enterprise", "Sur devis", "Sur mesure", "SSO, engagements contractuels, support prioritaire"],
      ],
    },
    {
      type: "p",
      text: "Sur Multilingual v2 comme sur v3, un caractère consomme un crédit. Les 30 000 crédits de Starter représentent donc environ 30 000 signes, soit à peu près quarante minutes de commentaire lu à rythme normal. Sur Flash, la même enveloppe en fait le double. Fais ce calcul avec ton volume de script d'un mois normal, tu tranches entre deux offres bien plus vite qu'en comparant les lignes de prix.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Produire une voix française qui tient, étape par étape",
    },
    {
      type: "p",
      text: "ElevenLabs ne facture pas que du texte vers la voix. Les prix par fonction publiés sur sa page API donnent le bon ordre de grandeur pour arbitrer, même quand tu travailles depuis l'interface web.",
    },
    {
      type: "table",
      caption: "Prix par fonction affichés sur la page API d'ElevenLabs (août 2026, en dollars)",
      headers: ["Fonction", "Unité", "Prix"],
      rows: [
        ["Synthèse vocale v3 ou Multilingual v2", "1 000 caractères", "0,10"],
        ["Synthèse vocale Flash ou Turbo", "1 000 caractères", "0,05"],
        ["Transcription Scribe v2", "1 heure d'audio", "0,22"],
        ["Transcription Scribe v2 Realtime", "1 heure d'audio", "0,39"],
        ["Bruitages", "1 minute", "0,12"],
        ["Voice Changer", "1 minute", "0,12"],
        ["Isolation de voix", "1 minute", "0,12"],
        ["Musique", "1 minute", "0,15"],
        ["Doublage v1 avec filigrane", "1 minute", "0,33"],
        ["Doublage v1 sans filigrane", "1 minute", "0,50"],
        ["Doublage v2", "1 minute", "2,20"],
      ],
    },
    {
      type: "p",
      text: "Tout est listé sur la [page de tarification API d'ElevenLabs](https://elevenlabs.io/pricing/api). L'écart entre les deux générations de doublage saute aux yeux : v2 coûte plus de quatre fois le prix de v1 sans filigrane. Sur un module de formation interne, personne ne verra la différence. Sur une campagne diffusée, elle se défend.",
    },
    {
      type: "p",
      text: "Sept étapes. Les deux premières se passent dans ton traitement de texte, et ce sont elles qui font la plus grosse différence sur le rendu final.",
    },
    {
      type: "ol",
      items: [
        "Réécris le script pour la bouche. Quinze mots par phrase, une idée par phrase, des points là où tu respirerais. Un texte écrit pour être lu des yeux sonne toujours faux à l'oreille.",
        "Passe les pièges phonétiques en revue avant d'ouvrir ElevenLabs : noms propres, marques, acronymes, sigles, et tous les nombres écrits en chiffres. Écris-les comme ils se prononcent.",
        "Choisis le modèle selon le livrable : v3 quand la performance d'acteur compte, Multilingual v2 pour un commentaire long et sobre, Flash quand tu as du volume à sortir avec un budget à tenir.",
        "Génère vingt secondes de test avant tout le reste, écoute au casque, et corrige le texte plutôt que les réglages. Neuf fois sur dix, le problème est dans le script.",
        "Sur v3, ajoute les balises une par une et réécoute entre chaque. Trois balises bien placées valent mieux que douze empilées, qui finissent par se contredire.",
        "Fige la combinaison qui marche : nom exact de la voix, modèle, position du curseur de stabilité. Note-la quelque part avant de lancer la version longue.",
        "Produis en blocs de deux à trois paragraphes plutôt qu'en une seule génération. Une phrase ratée au milieu de huit minutes t'oblige sinon à tout relancer.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : ouvre un fichier texte par projet et colle-y les mots réécrits phonétiquement, le nom exact de la voix et le modèle utilisé. Six mois plus tard, quand le client redemande un épisode, tu ne repars pas de zéro sur la prononciation de sa marque.",
    },
    {
      type: "p",
      text: "Sur le multilingue, ElevenLabs propose du doublage automatique et un studio où tu reprends la traduction ligne par ligne. L'automatique passe pour de l'interne. Dès que le contenu sort en public, la reprise manuelle vaut les heures qu'elle coûte, et notre méthode de [doublage et traduction vidéo par IA](/blog/doublage-traduction-video-ia) reste valable telle quelle. Fais relire par quelqu'un dont c'est la langue maternelle avant diffusion.",
    },
    {
      type: "p",
      text: "Côté transcription, Scribe v2 couvre plus de 90 langues avec horodatage au mot et séparation des locuteurs. C'est la brique qui alimente les [sous-titres automatiques de tes vidéos](/blog/sous-titres-automatiques-ia-video) sans repasser par un autre service. Et si tu cherches la partie musicale du produit, on l'avait comparée à la concurrence dans notre article sur [ElevenLabs Music, Stable Audio et Suno](/blog/elevenlabs-music-v2-stable-audio-suno).",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les quatre pièges classiques d'ElevenLabs",
    },
    {
      type: "h3",
      id: "erreur-changer-de-voix",
      text: "Erreur 1 : changer de voix quand c'est le texte qui cloche",
    },
    {
      type: "p",
      text: "Symptôme : tu as essayé huit voix de la bibliothèque, aucune ne te convient, et tu commences à te dire que l'outil est surcoté. Le même passage sonne bancal quelle que soit la voix choisie.",
    },
    {
      type: "p",
      text: "Fix concret : reprends la phrase qui coince et lis-la à voix haute, chronomètre en main. Si tu manques d'air, coupe. Si tu bafouilles sur un mot, la synthèse aussi. Une phrase de quarante mots sans respiration ne sera sauvée par aucune voix, et tu auras brûlé tes crédits à chercher au mauvais endroit.",
    },
    {
      type: "h3",
      id: "erreur-generation-longue",
      text: "Erreur 2 : générer huit minutes d'un coup",
    },
    {
      type: "p",
      text: "Symptôme : la génération passe, tu écoutes, et une seule phrase à la sixième minute est ratée. Tu relances le bloc entier, et cette fois c'est une autre phrase qui casse ailleurs.",
    },
    {
      type: "p",
      text: "Fix concret : découpe en blocs de deux à trois paragraphes et assemble au montage. Tu gardes ce qui est bon, tu ne rejoues que ce qui rate, et tes crédits durent trois fois plus longtemps. Le raccord ne s'entend pas dès lors que tu laisses les silences de fin de bloc intacts.",
    },
    {
      type: "h3",
      id: "erreur-nombres-acronymes",
      text: "Erreur 3 : laisser les chiffres et les sigles en l'état",
    },
    {
      type: "p",
      text: "Symptôme : la voix lit 2026 comme une suite de chiffres, prononce une abréviation lettre par lettre alors qu'elle se dit comme un mot, ou l'inverse. C'est le défaut qui trahit le plus vite une voix générée auprès d'un auditeur français.",
    },
    {
      type: "p",
      text: "Fix concret : réécris en toutes lettres et phonétiquement dans le script de génération, pas dans le script de référence. Tu gardes un fichier lisible pour le client et un fichier de production truffé de deux mille vingt-six et de graphies bizarres. Ce sont deux documents différents, et confondre les deux fait perdre des heures.",
    },
    {
      type: "h3",
      id: "erreur-consentement",
      text: "Erreur 4 : cloner une voix sans cadre écrit",
    },
    {
      type: "p",
      text: "Symptôme : dix épisodes portés par la voix clonée d'un comédien, et le jour où il demande ce qu'il en est de ses droits, personne dans l'équipe ne sait quoi répondre. Variante fréquente : rien n'indique nulle part que la voix est générée.",
    },
    {
      type: "p",
      text: "Fix concret : un accord écrit et daté par personne clonée, avec une durée et un périmètre d'usage explicites. ElevenLabs te fait déjà cocher une confirmation de consentement avant d'enregistrer un clone, ce qui engage ta responsabilité et pas la sienne. Ajoute la mention d'usage de l'IA par défaut : dans l'Union européenne, les obligations de transparence du règlement européen sur l'IA s'appliquent depuis le 2 août 2026 aux contenus qui donnent l'impression de montrer des personnes réelles.",
    },
    {
      type: "p",
      text: "Une voix impeccable ne rattrape pas un script qui n'a rien à dire. Trouver l'angle et l'ordre des idées, c'est le travail qu'on fait pas à pas dans la [formation IA vidéo gratuite d'AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video).",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "ElevenLabs est-il gratuit ?",
    },
    {
      type: "p",
      text: "Il existe une offre à 0 dollar avec 10 000 crédits par mois, de quoi tester la synthèse vocale, la transcription, les bruitages et la musique. Attention au seuil : la licence commerciale n'arrive qu'à partir de l'offre Starter, à 6 dollars par mois. En dessous, tout ce que tu génères reste cantonné à tes essais personnels.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle offre ElevenLabs choisir pour de la voix off vidéo ?",
    },
    {
      type: "p",
      text: "Compte en caractères plutôt qu'en dollars. Sur Multilingual v2, un caractère coûte un crédit, donc les 30 000 crédits de Starter valent environ 30 000 signes par mois, soit une quarantaine de minutes de commentaire. Les 121 000 crédits de Creator, à 22 dollars, tiennent une production régulière et débloquent le clonage professionnel. Pro à 99 dollars pour 600 000 crédits ne se justifie que si tu produis de la série ou si tu as besoin du PCM 44,1 kHz par l'API.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Quel modèle ElevenLabs choisir : v3, Multilingual v2 ou Flash ?",
    },
    {
      type: "p",
      text: "Eleven v3 est le plus expressif, il accepte les balises audio du type [whispers] ou [laughs] et couvre plus de 70 langues, avec une limite de 5 000 caractères par génération. Multilingual v2 couvre 29 langues, accepte 10 000 caractères et reste le choix sûr pour un commentaire long et sobre. Flash v2.5 monte à 40 000 caractères, tourne autour de 75 millisecondes de latence et coûte un crédit pour deux caractères, ce qui en fait le modèle des gros volumes et du temps réel.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "ElevenLabs est-il bon en français ?",
    },
    {
      type: "p",
      text: "Oui sur le fond, avec une réserve qui revient à chaque projet. Les phrases courantes passent très bien, la prosodie tient. Ce qui casse, ce sont les noms propres, les acronymes maison, les marques et les nombres écrits en chiffres. Écris ces mots phonétiquement dans le script, remplace 2026 par deux mille vingt-six, puis écoute vingt secondes de test avant de lancer la version longue. Ça règle l'essentiel.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Combien de temps d'audio faut-il pour cloner sa voix ?",
    },
    {
      type: "p",
      text: "Pour le clonage instantané, une à deux minutes d'audio propre suffisent, et la documentation déconseille de dépasser trois minutes parce que le gain devient nul et peut même dégrader le résultat. Pour le clonage professionnel, il faut au minimum trente minutes, avec deux à trois heures comme cible idéale, découpées en échantillons d'une trentaine de minutes. L'entraînement demande ensuite trois à six heures.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Peut-on utiliser une voix ElevenLabs commercialement ?",
    },
    {
      type: "p",
      text: "À partir de l'offre Starter, oui, la licence commerciale est incluse et couvre aussi la musique générée. Cloner la voix de quelqu'un d'autre demande en revanche son accord explicite, et ElevenLabs te fait cocher une confirmation de consentement avant d'enregistrer le clone. Autre point à ne pas rater : dans l'Union européenne, un contenu audio ou vidéo généré qui donne l'impression de montrer une personne réelle relève des obligations de transparence du règlement européen sur l'IA, applicables depuis le 2 août 2026.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-24 -->
