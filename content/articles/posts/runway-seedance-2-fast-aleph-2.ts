import type { Article } from "@/lib/types/article";

export const runwaySeedance2FastAleph2: Article = {
  title: "Runway : Seedance 2.0 Fast et Aleph 2.0, ce qui arrive",
  slug: "runway-seedance-2-fast-aleph-2",
  description:
    "Début juin 2026, Runway ajoute Seedance 2.0 Fast (vidéo plus rapide) et Aleph 2.0 (montage par prompt) via son API. Ce que ça change pour les créateurs.",
  excerpt:
    "Runway a ajouté début juin 2026 deux briques à son API : Seedance 2.0 Fast pour générer plus vite, et Aleph 2.0 pour éditer une vidéo existante au prompt. Décryptage.",
  category: "ia-video",
  tags: ["runway", "actualité", "seedance", "montage ia"],
  date: "2026-06-17",
  updatedAt: "2026-06-17",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/runway-seedance-2-fast-aleph-2.webp",
  imageAlt:
    "Un monteur travaille une séquence vidéo sur un écran dans un studio sombre, timeline visible, lumière bleutée cinématique",
  keywords: [
    "runway seedance 2.0",
    "runway aleph 2.0",
    "seedance 2.0 fast",
    "montage vidéo ia prompt",
    "mise à jour runway",
  ],
  relatedSlugs: [
    "runway-guide-video-ia",
    "hailuo-wan-seedance-video-ia",
    "kling-ai-videos-cinematiques",
  ],
  faq: [
    {
      question: "Qu'est-ce que Seedance 2.0 Fast sur Runway ?",
      answer:
        "C'est un modèle de génération vidéo disponible via l'API Runway depuis le 5 juin 2026, pensé pour aller plus vite. Il génère à partir de texte, d'images ou de vidéo, avec contrôle par keyframes, images et vidéos de référence, et audio généré. Les durées vont de 4 à 15 secondes, en 480p ou 720p, dans les modes image vers vidéo, texte vers vidéo et vidéo vers vidéo.",
    },
    {
      question: "Et Aleph 2.0, à quoi ça sert ?",
      answer:
        "Aleph 2.0, disponible via l'API Runway depuis le 2 juin 2026, sert à éditer une vidéo existante à partir d'un prompt texte, avec des images keyframe optionnelles placées à des moments précis. Il accepte des vidéos d'entrée de 2 à 30 secondes et jusqu'à 5 images keyframe. L'idée n'est pas de générer un plan de zéro, mais de retoucher un plan déjà là.",
    },
    {
      question: "Faut-il savoir coder pour en profiter ?",
      answer:
        "Ces deux nouveautés sont annoncées côté API, donc d'abord destinées à ceux qui intègrent Runway dans un outil ou un script. En pratique, les capacités finissent souvent par arriver dans l'interface et chez les plateformes qui s'appuient sur cette API. Si tu n'es pas développeur, surveille la sortie côté interface, le bénéfice est le même au final.",
    },
    {
      question: "Le 720p, c'est suffisant pour livrer ?",
      answer:
        "Pour du réseau social court, souvent oui, surtout en vertical. Pour un livrable plus exigeant, le 720p sert plutôt de base à travailler, quitte à passer ensuite par un upscale. Le vrai intérêt de Seedance 2.0 Fast n'est pas la définition maximale mais la vitesse d'itération, donc à utiliser pour explorer puis finaliser autrement.",
    },
    {
      question: "Pourquoi le montage par prompt change la donne ?",
      answer:
        "Parce que jusqu'ici, corriger un plan IA voulait souvent dire le régénérer en entier et perdre ce qui marchait. Éditer une vidéo existante au prompt, avec des keyframes à des timestamps précis, permet de garder le bon et de ne changer que le nécessaire. C'est un pas vers un vrai travail itératif, plus proche du montage que de la loterie.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Deux briques sont arrivées coup sur coup chez Runway début juin 2026, via son API : Aleph 2.0 le 2 juin, puis Seedance 2.0 Fast le 5 juin, d'après les notes de version. L'une génère plus vite, l'autre édite une vidéo existante au prompt. Les deux visent le même problème : itérer sans tout refaire.",
    },
    {
      type: "p",
      text: "On reste lucide : ces annonces sont d'abord côté API, donc taillées pour l'intégration. Mais elles disent où va l'outil, et ça vaut le coup de comprendre ce que ça t'apporte, développeur ou pas.",
    },
    {
      type: "p",
      text: "Voici les faits, puis ce qu'on peut en faire concrètement quand on produit des vidéos.",
    },
    {
      type: "h2",
      id: "ce-qui-change",
      text: "Ce que font ces deux nouveautés",
    },
    {
      type: "p",
      text: "Seedance 2.0 Fast, disponible via l'API Runway depuis le 5 juin, génère à partir de texte, d'images ou de vidéo. Il accepte le contrôle par keyframes, des images et vidéos de référence, et de l'audio généré. Les durées vont de 4 à 15 secondes, en 480p ou 720p, dans les modes image vers vidéo, texte vers vidéo et vidéo vers vidéo.",
    },
    {
      type: "p",
      text: "Aleph 2.0, disponible depuis le 2 juin, joue sur un autre terrain : l'édition. Tu pars d'une vidéo existante de 2 à 30 secondes et tu la modifies par un prompt texte, avec jusqu'à 5 images keyframe placées à des moments précis. Ce n'est pas générer un plan, c'est retoucher un plan déjà tourné ou déjà généré.",
    },
    {
      type: "table",
      caption: "Seedance 2.0 Fast et Aleph 2.0 en un coup d'œil",
      headers: ["Critère", "Seedance 2.0 Fast", "Aleph 2.0"],
      rows: [
        ["Rôle", "Générer une vidéo", "Éditer une vidéo existante"],
        ["Entrées", "Texte, image ou vidéo", "Vidéo de 2 à 30 s + prompt"],
        ["Contrôle", "Keyframes, références, audio", "Jusqu'à 5 keyframes datées"],
        ["Sortie", "4 à 15 s, 480p ou 720p", "Vidéo éditée"],
        ["Disponible depuis", "5 juin 2026 (API)", "2 juin 2026 (API)"],
      ],
    },
    {
      type: "p",
      text: "Le point commun des deux : le contrôle par keyframes. C'est la tendance de fond de la vidéo IA, passer du prompt qui décrit à des points d'ancrage qui imposent. Pour resituer Runway dans ton arsenal, repars de [notre guide vidéo IA avec Runway](/blog/runway-guide-video-ia).",
    },
    {
      type: "h2",
      id: "pour-qui",
      text: "Pour qui, et quoi en faire",
    },
    {
      type: "p",
      text: "Si tu fais du contenu court et vertical, Seedance 2.0 Fast vise ton cas d'usage : itérer vite sur des plans de quelques secondes. Le 720p suffit souvent pour du social, et quand il faut plus, on garde la définition pour une étape d'upscale dédiée. La vitesse sert l'exploration, pas le livrable final.",
    },
    {
      type: "p",
      text: "Aleph 2.0 vise un autre réflexe, plus mûr : arrêter de régénérer un plan entier pour corriger un détail. Tu gardes ce qui marche, tu changes ce qui cloche, avec des keyframes à des timestamps précis. C'est un pas vers un vrai travail itératif, plus proche du montage que du tirage au sort.",
    },
    {
      type: "p",
      text: "Seedance n'est pas un nom nouveau pour toi si tu suis le sujet. Pour la famille de modèles et leur logique, croise avec [notre guide sur Hailuo, Wan et Seedance](/blog/hailuo-wan-seedance-video-ia), et compare la direction de Runway à celle de [Kling pour les vidéos cinématiques](/blog/kling-ai-videos-cinematiques).",
    },
    {
      type: "p",
      text: "> Pro Tip : si ces fonctions ne sont pas encore dans ton interface, ne reste pas bloqué dessus. Construis dès maintenant ta logique de keyframes sur l'outil que tu as déjà, points d'ancrage début, milieu, fin. Quand l'édition par prompt arrivera côté interface, tu sauras déjà quoi lui demander.",
    },
    {
      type: "p",
      text: "Pour les détails exacts et la disponibilité côté interface, suis la source officielle [Runway](https://runwayml.com/). Ces nouveautés étant d'abord côté API, leur arrivée dans l'app peut prendre un peu de temps.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions (FAQ)",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Qu'est-ce que Seedance 2.0 Fast sur Runway ?",
    },
    {
      type: "p",
      text: "C'est un modèle de génération vidéo disponible via l'API Runway depuis le 5 juin 2026, pensé pour aller plus vite. Il génère à partir de texte, d'images ou de vidéo, avec contrôle par keyframes, images et vidéos de référence, et audio généré. Les durées vont de 4 à 15 secondes, en 480p ou 720p, dans les modes image vers vidéo, texte vers vidéo et vidéo vers vidéo.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Et Aleph 2.0, à quoi ça sert ?",
    },
    {
      type: "p",
      text: "Aleph 2.0, disponible via l'API Runway depuis le 2 juin 2026, sert à éditer une vidéo existante à partir d'un prompt texte, avec des images keyframe optionnelles placées à des moments précis. Il accepte des vidéos d'entrée de 2 à 30 secondes et jusqu'à 5 images keyframe. L'idée n'est pas de générer un plan de zéro, mais de retoucher un plan déjà là.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Faut-il savoir coder pour en profiter ?",
    },
    {
      type: "p",
      text: "Ces deux nouveautés sont annoncées côté API, donc d'abord destinées à ceux qui intègrent Runway dans un outil ou un script. En pratique, les capacités finissent souvent par arriver dans l'interface et chez les plateformes qui s'appuient sur cette API. Si tu n'es pas développeur, surveille la sortie côté interface, le bénéfice est le même au final.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le 720p, c'est suffisant pour livrer ?",
    },
    {
      type: "p",
      text: "Pour du réseau social court, souvent oui, surtout en vertical. Pour un livrable plus exigeant, le 720p sert plutôt de base à travailler, quitte à passer ensuite par un upscale. Le vrai intérêt de Seedance 2.0 Fast n'est pas la définition maximale mais la vitesse d'itération, donc à utiliser pour explorer puis finaliser autrement.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Pourquoi le montage par prompt change la donne ?",
    },
    {
      type: "p",
      text: "Parce que jusqu'ici, corriger un plan IA voulait souvent dire le régénérer en entier et perdre ce qui marchait. Éditer une vidéo existante au prompt, avec des keyframes à des timestamps précis, permet de garder le bon et de ne changer que le nécessaire. C'est un pas vers un vrai travail itératif, plus proche du montage que de la loterie.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-17 -->
