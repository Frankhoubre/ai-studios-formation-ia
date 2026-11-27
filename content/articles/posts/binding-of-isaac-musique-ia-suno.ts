import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-23";
const IMG = "/images/articles/binding-of-isaac-musique-ia-suno";
const VERGE = "https://www.theverge.com/games/1039770/binding-of-isaac-ai-music";
const STEAM = "https://store.steampowered.com/app/3353470/";
const PATCH = "https://store.steampowered.com/news/app/250900/view/1849827110430194";

export const bindingOfIsaacMusiqueIaSuno: Article = {
  title: "Musique Suno cachée dans Isaac : la leçon pour les créatifs",
  slug: "binding-of-isaac-musique-ia-suno",
  description:
    "Des morceaux générés avec Suno dans The Binding of Isaac, non déclarés : avis négatifs, excuses et fichiers retirés. Ce que ça t'apprend sur l'IA cachée.",
  excerpt:
    "Des joueurs ont trouvé des métadonnées Suno dans la musique d'un événement de The Binding of Isaac: Repentance+. Le jeu a été noyé sous les avis négatifs, son créateur s'est excusé, les fichiers ont été retirés. Ce qui s'est passé, et ce que tout créatif qui utilise l'IA devrait en retenir.",
  category: "actualites-ia",
  tags: ["Actualités IA", "suno", "musique ia", "jeu vidéo", "transparence", "steam"],
  date: "2026-11-23",
  updatedAt: "2026-11-23",
  news: true,
  publishedTime: "10:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/binding-of-isaac-musique-ia-suno.webp",
  imageAlt:
    "Un jeune compositeur de jeux vidéo, casque autour du cou, travaille la nuit dans un petit home studio, un jeu en pixel art sur un écran et une forme d'onde audio sur l'autre, un synthétiseur et un carnet de notes sur le bureau",
  keywords: ["musique ia suno", "binding of isaac ia", "musique ia jeu vidéo", "déclarer usage ia", "suno steam"],
  relatedSlugs: ["musique-ia-droits-videos", "suno-guide-complet", "elevenlabs-music-v2-stable-audio-suno"],
  faq: [
    {
      question: "Que s'est-il passé avec The Binding of Isaac et l'IA ?",
      answer:
        "Selon The Verge, un joueur a trouvé dans les fichiers audio d'un événement inspiré de GTA, dans The Binding of Isaac: Repentance+, des métadonnées qui renvoyaient à des morceaux hébergés sur Suno. La musique avait donc été générée par IA, sans que ce soit déclaré.",
    },
    {
      question: "Comment les joueurs ont-ils réagi ?",
      answer:
        "Par une vague d'avis négatifs sur Steam. Le 23 novembre 2026, les évaluations récentes de Repentance+ affichaient « Overwhelmingly Negative », soit très négatives, sur 1 783 avis.",
    },
    {
      question: "Qu'a répondu le créateur du jeu ?",
      answer:
        "Edmund McMillen s'est excusé sur X et a dit qu'il n'avait « aucune idée » que la parodie de GTA utilisait de la musique générée par IA. Selon The Verge, l'éditeur Nicalis a retiré les fichiers en quelques heures.",
    },
    {
      question: "Faut-il déclarer l'usage de l'IA sur Steam ?",
      answer:
        "Oui. The Verge rappelle que Valve demande aux développeurs de déclarer comment et quand ils utilisent l'IA générative pendant le développement. Selon le média, Nicalis ne semble pas l'avoir fait pour cette musique.",
    },
    {
      question: "Comment les joueurs ont-ils su que c'était du Suno ?",
      answer:
        "Par les métadonnées des fichiers audio, qui pointaient vers les morceaux sur le site de Suno. Un fichier généré garde souvent des traces de l'outil qui l'a produit.",
    },
    {
      question: "Que faire si j'utilise de la musique IA dans mes projets ?",
      answer:
        "Le dire clairement, lire les règles de la plateforme où tu publies, vérifier les droits liés à ton abonnement, et contrôler ce que te livrent tes prestataires, car tu restes responsable du résultat.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Ce n'est pas l'IA qui a coulé ce week-end les avis d'un des jeux indés les plus aimés de Steam. C'est **l'IA qu'on n'a pas dite**. Des joueurs ont découvert que la musique d'un événement de **The Binding of Isaac: Repentance+** venait de **Suno**. Personne ne l'avait annoncé. Résultat : avalanche d'avis négatifs, excuses publiques, fichiers retirés.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [l'article de Terrence O'Brien pour The Verge](" + VERGE + "), publié le 22 novembre 2026, sur [la note de mise à jour du jeu sur Steam](" + PATCH + ") du 19 novembre et sur [la page Steam de Repentance+](" + STEAM + "), le tout lu le 23 novembre.",
    },
    { type: "h2", id: "faits", text: "Ce qui s'est passé" },
    {
      type: "p",
      text: "Le 19 novembre, jour de sortie de GTA VI, le jeu reçoit une mise à jour sur Steam avec un **défi quotidien spécial**, présenté comme une surprise « pleine de crimes » dans l'esprit de la série de Rockstar. Dans cette partie, des morceaux façon radio de GTA.",
    },
    {
      type: "screenshot",
      src: `${IMG}-verge.webp`,
      alt: "Article de The Verge du 22 novembre 2026 signé Terrence O'Brien : The Binding of Isaac: Repentance Plus est noyé sous les avis négatifs sur Steam après la découverte de musique IA, un joueur a trouvé des fichiers audio avec des métadonnées Suno, Edmund McMillen s'excuse, et Valve demande de déclarer l'usage de l'IA générative",
      caption: "L'article de The Verge, capturé le 23 novembre 2026.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 715,
      height: 615,
    },
    {
      type: "p",
      text: "D'après The Verge, un utilisateur de Reddit, ShweetsStuff, a ouvert les fichiers audio de cette partie et trouvé **des métadonnées Suno** qui renvoyaient aux morceaux sur le site de Suno. Le créateur du jeu, **Edmund McMillen**, s'est excusé sur X et a dit qu'il n'avait « aucune idée » que la parodie de GTA utilisait de la musique générée. Quelques heures plus tard, l'éditeur **Nicalis** annonçait que les fichiers avaient été retirés.",
    },
    {
      type: "p",
      text: "Le détail qui aggrave tout : **Valve demande aux développeurs de déclarer** comment et quand ils utilisent l'IA générative. Selon The Verge, Nicalis ne semble l'avoir mentionné nulle part. Et McMillen avait lui-même qualifié l'IA dans le jeu vidéo de « sans inspiration et fade » dans une vidéo TikTok de 2024.",
    },
    {
      type: "screenshot",
      src: `${IMG}-steam.webp`,
      alt: "Page Steam de The Binding of Isaac: Repentance+ : évaluations récentes Overwhelmingly Negative sur 1 783 avis, évaluations en anglais Mixed sur 3 454 avis, sortie le 18 novembre 2024, développeurs Nicalis et Edmund McMillen",
      caption: "La page Steam de Repentance+, capturée le 23 novembre 2026.",
      source: STEAM,
      capturedAt: CAPTURE,
      width: 1220,
      height: 493,
    },
    {
      type: "p",
      text: "Le 23 novembre, les évaluations récentes de Repentance+ sur Steam affichent **« Overwhelmingly Negative » sur 1 783 avis**. The Verge note que sur X, beaucoup de joueurs laissent le bénéfice du doute à McMillen. Mais la note, elle, reste.",
    },
    { type: "h2", id: "lecon", text: "Pourquoi ça a explosé" },
    {
      type: "p",
      text: "Quelques morceaux dans un événement d'une journée, c'est peu. Ce qui a mis le feu, c'est le décalage : un créateur connu pour être contre l'IA, une plateforme qui exige la transparence, et une découverte faite par les joueurs, pas annoncée par le studio. Le public pardonne plus facilement un outil qu'on assume qu'un outil qu'on cache.",
    },
    {
      type: "p",
      text: "Et c'est le point technique à retenir : **un fichier généré garde souvent la trace de l'outil qui l'a produit**. Métadonnées, filigranes, signatures. Si tu penses que personne ne verra la différence, quelqu'un finira par ouvrir le fichier.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : le 19 novembre, un défi quotidien façon GTA sort sur Steam ; quelques jours plus tard, un joueur trouve des traces de Suno dans les fichiers audio, avis négatifs, excuses et fichiers retirés ; ce que tu en retiens, déclarer l'IA ou ne pas l'utiliser, noter ses outils et vérifier ce qu'on te livre",
      caption: "L'affaire en trois temps, d'après The Verge et Steam. Schéma AI Studios.",
      source: VERGE,
      capturedAt: CAPTURE,
      width: 1600,
      height: 654,
    },
    { type: "h2", id: "toi", text: "Ce que tu en retiens pour tes projets" },
    {
      type: "p",
      text: "Tu n'as pas besoin de sortir un jeu sur Steam pour être concerné. Un clip, une pub, une vidéo YouTube avec un fond musical Suno : la même logique s'applique.",
    },
    {
      type: "ul",
      items: [
        "**Dis-le.** Une ligne dans la description ou au générique suffit souvent. C'est beaucoup moins cher qu'une polémique.",
        "**Lis les règles de la plateforme.** Steam, YouTube, les régies pub : chacune a ses exigences sur l'IA. Ce qui est permis ici peut devoir être déclaré là.",
        "**Vérifie tes droits.** Avec Suno, l'usage commercial dépend de ton offre. J'ai fait le point dans [l'article sur la musique IA et les droits dans tes vidéos](/blog/musique-ia-droits-videos).",
        "**Contrôle ce qu'on te livre.** McMillen dit qu'il ne savait pas. Si un prestataire te fournit de la musique ou des visuels, demande-lui par écrit d'où ils viennent. C'est ton nom qui est sur le projet.",
        "**Garde une trace de tes outils.** Un petit tableau par projet : quel morceau, quel outil, quelle offre, quelle date. Le jour où on te pose la question, tu réponds en une minute.",
      ],
    },
    {
      type: "p",
      text: "Suno reste un très bon outil pour une maquette ou un fond sonore, et mon [guide complet de Suno](/blog/suno-guide-complet) montre comment en tirer quelque chose de propre. La leçon d'Isaac n'est pas « n'utilise pas l'IA ». C'est « ne laisse pas les autres découvrir que tu l'as utilisée ».",
    },
    { type: "h2", id: "inconnu", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Qui a produit ces morceaux.** Ni The Verge ni la note de mise à jour ne disent si la musique venait d'un prestataire ou de l'équipe.",
        "**Si Valve réagira.** Rien n'indique une sanction ou une demande de Valve à Nicalis.",
        "**Si la musique sera remplacée.** Le retrait est annoncé, pas la suite.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Cette histoire va se répéter, dans le jeu vidéo et ailleurs. Les outils laissent des traces et le public les cherche. Si tu utilises l'IA dans ton travail, et tu as raison de le faire, assume-le dès le départ. C'est la meilleure protection pour ta réputation, et souvent un argument de plus pour ton client.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Utilise l'IA sans te cacher",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à ton workflow créatif, proprement et en gardant ta patte.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 23 novembre 2026 à partir de l'article de The Verge du 22 novembre, de la note de mise à jour publiée sur Steam le 19 novembre et de la page Steam de Repentance+, lus le 23 novembre.",
        "Les messages d'Edmund McMillen et de Nicalis sur X et le fil Reddit n'ont pas été lus directement : ils sont cités d'après The Verge.",
      ],
      teste: ["La lecture de l'article de The Verge, de la note de mise à jour et de la page Steam"],
      nonTeste: ["Les fichiers audio du jeu", "Les messages publiés sur X et Reddit"],
      sources: [
        { label: "The Verge, Binding of Isaac developer removes AI music from Repentance Plus (Terrence O'Brien), 22/11/2026", href: VERGE },
        { label: "Steam, A Grand Day for a Repentance+ Update!, 19/11/2026", href: PATCH },
        { label: "Steam, page de The Binding of Isaac: Repentance+", href: STEAM },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-23 -->
