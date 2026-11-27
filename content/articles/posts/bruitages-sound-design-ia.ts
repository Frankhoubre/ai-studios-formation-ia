import type { Article } from "@/lib/types/article";

export const bruitagesSoundDesignIa: Article = {
  title: "Bruitage IA : donner un vrai son à tes vidéos",
  slug: "bruitages-sound-design-ia",
  description:
    "Ambiances, pas, portes, whooshs : quels outils de bruitage IA utiliser, comment les écrire et les caler pour que ta vidéo IA arrête de sonner creux.",
  excerpt:
    "Une image IA crédible avec un son creux, le spectateur décroche sans savoir pourquoi. Trois couches de son, quatre outils, et l'ordre dans lequel les poser.",
  category: "workflow-creatif",
  tags: ["bruitage ia", "sound design", "elevenlabs", "montage"],
  date: "2026-10-06",
  updatedAt: "2026-10-06",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/bruitages-sound-design-ia.webp",
  imageAlt:
    "Dans un studio de bruitage la nuit, une bruiteuse agenouillée au bord d'une fosse de gravier pose des bottes en cuir sur les cailloux face à un écran qui projette un chemin forestier boueux, sous une perche micro",
  keywords: [
    "bruitage ia",
    "sound design ia",
    "sfx ia",
    "générateur de bruitage",
    "effets sonores ia",
  ],
  relatedSlugs: [
    "monter-video-ia-capcut-davinci",
    "elevenlabs-guide-complet",
    "musique-ia-droits-videos",
  ],
  faq: [
    {
      question: "Quel outil choisir pour faire des bruitages avec l'IA ?",
      answer:
        "Pour un son isolé décrit en texte (une porte, un impact, une ambiance de café), ElevenLabs Sound Effects est le plus simple : tu écris, tu fixes la durée, tu télécharges. Pour un son qui doit coller aux mouvements d'un plan précis, un modèle vidéo vers audio comme MMAudio ou Kling Video to Audio analyse l'image et cale le son dessus. Firefly ajoute une option à part : tu enregistres ta voix pour donner le rythme.",
    },
    {
      question: "Combien coûte un bruitage sur ElevenLabs ?",
      answer:
        "Selon la documentation d'ElevenLabs, un effet sonore coûte 40 crédits par seconde quand tu fixes toi-même la durée, avec un maximum de 30 secondes par génération. L'offre gratuite donne 10 000 crédits par mois, soit environ quatre minutes de son, mais sans licence commerciale. Celle-ci commence à l'offre Starter, 6 dollars par mois pour 30 000 crédits.",
    },
    {
      question: "Peut-on utiliser MMAudio pour une vidéo commerciale ?",
      answer:
        "Pas avec les poids publiés. Le code de MMAudio est sous licence MIT, mais les modèles entraînés sont diffusés sur Hugging Face sous licence CC-BY-NC 4.0, qui interdit l'usage commercial. Tu peux t'en servir pour tester, maquetter ou produire un projet personnel. Pour un client, passe par un outil dont les conditions d'utilisation couvrent l'exploitation commerciale.",
    },
    {
      question: "Faut-il garder l'audio natif de Veo ou de Kling ?",
      answer:
        "Garde-le comme repère, rarement comme son final. L'audio natif est généré plan par plan, donc l'ambiance change d'une coupe à l'autre et le montage s'entend. Les dialogues bien synchronisés peuvent rester. Pour le reste, coupe-le et reconstruis une ambiance continue sous toute la séquence, puis ajoute les bruitages qui comptent.",
    },
    {
      question: "Comment écrire un bon prompt de bruitage ?",
      answer:
        "Décris la source, la matière, l'action et l'espace, dans cet ordre : « heavy leather boots walking slowly on wet gravel, outdoors, close perspective ». Ajoute un mot du vocabulaire son quand il aide (Foley, ambience, whoosh, impact, one-shot, loop). Fixe la durée exacte du plan. Plus tu nommes de matières, moins le son sort générique.",
    },
    {
      question: "Où trouver des bruitages gratuits utilisables commercialement ?",
      answer:
        "Freesound reste la banque de référence, à condition de filtrer par licence. Seuls les sons en CC0 et en CC BY autorisent l'usage commercial, le second en créditant l'auteur. Les sons en CC BY-NC et Sampling+ sont exclus dès que ta vidéo te rapporte de l'argent. Note la licence de chaque fichier dans ton dossier de projet au moment où tu le télécharges.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Coupe le son d'une vidéo IA réussie et regarde-la en muet : elle tient. Remets l'audio natif et quelque chose cloche. Les pas ne tombent pas sur les pieds, le vent change de couleur à chaque coupe, la pièce n'a aucune résonance. Le spectateur ne saura pas te dire quoi, il sentira juste que c'est faux.",
    },
    {
      type: "p",
      text: "Tu vas voir comment découper le son d'une vidéo en trois couches, quel outil d'IA sert à quoi (ElevenLabs, MMAudio, Kling, Firefly, plus une banque gratuite), comment écrire un prompt de bruitage qui sonne, et dans quel ordre tout poser sur la timeline.",
    },
    {
      type: "p",
      text: "Dans la plupart des workflows IA que je vois passer, l'image a pris beaucoup d'avance sur le son. Les outils n'y sont pour pas grand-chose : le son arrive en dernier, la veille de la livraison, quand il ne reste plus d'énergie pour lui. Une heure de méthode sur la bande-son, et le même film paraît nettement plus fini.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Bruitage IA : une bande-son se monte en trois couches",
    },
    {
      type: "p",
      text: "Le [bruitage](https://fr.wikipedia.org/wiki/Bruitage) désigne les sons ajoutés en postproduction pour compléter la bande sonore d'un film avant le mixage. Les Anglo-Saxons parlent de Foley, du nom de Jack Foley, qui a commencé à recréer les pas des comédiens en studio à la fin des années 1920. Un bruiteur travaille avec des objets et avec son corps : chaussures, vêtements, portes, eau.",
    },
    {
      type: "p",
      text: "L'IA remplace la fosse de gravier et la vieille porte par un champ de texte ou une analyse d'image. La logique de fond ne bouge pas : une bande-son se construit par couches empilées, et chacune a son rôle.",
    },
    {
      type: "h3",
      id: "ambiance-synchro-design",
      text: "Ambiance, synchro, design",
    },
    {
      type: "p",
      text: "L'ambiance, d'abord, est le fond continu : rumeur de ville, pièce vide, forêt, salle de restaurant. Elle ne se remarque pas, sauf quand elle s'arrête. C'est elle qui colle les plans entre eux, et c'est elle que l'audio natif des générateurs vidéo casse à chaque coupe.",
    },
    {
      type: "p",
      text: "Par-dessus viennent les sons **synchro**, ceux qu'on voit se produire : pas, froissement de manteau, tasse posée, porte qui claque. Ils doivent tomber à l'image près. Couche la plus difficile, et justement celle où les modèles vidéo vers audio servent à quelque chose.",
    },
    {
      type: "p",
      text: "Reste le design sonore : des sons absents de la scène qui racontent quand même quelque chose. Un whoosh sur une transition, un impact grave sous un titre, un drone qui monte avant une révélation. Dans une pub ou une bande-annonce, cette couche porte souvent le rythme à elle seule.",
    },
    {
      type: "h3",
      id: "deux-familles-outils",
      text: "Du texte vers le son, ou de l'image vers le son",
    },
    {
      type: "p",
      text: "Les outils se rangent en deux familles. Les générateurs texte vers audio fabriquent un son à partir d'une description : tu obtiens un fichier isolé, propre, que tu cales toi-même. Les modèles vidéo vers audio regardent ton plan et produisent une piste alignée sur les mouvements : moins de contrôle sur chaque son, mais une synchro gratuite. Les deux se complètent, et le bon réflexe consiste à choisir la famille selon la couche.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Faire le sound design d'une vidéo IA, étape par étape",
    },
    {
      type: "table",
      caption:
        "Quelle couche avec quel outil. Fonctions et limites relevées dans les documentations officielles le 6 octobre 2026.",
      headers: ["Couche", "Outil adapté", "Ce qu'il fait bien", "Sa limite"],
      rows: [
        ["Ambiance", "ElevenLabs Sound Effects, option boucle", "Un fond qui se répète sans début ni fin audibles", "30 secondes maximum par génération"],
        ["Synchro", "MMAudio ou Kling Video to Audio", "Lit le plan et cale le son sur les mouvements", "MMAudio entraîné sur 8 secondes, poids non commerciaux"],
        ["Synchro au rythme précis", "Firefly, Generate Sound effects", "Ta voix enregistrée donne le timing et l'intensité", "Éditeur vidéo en bêta, prompts en anglais uniquement"],
        ["Design", "ElevenLabs Sound Effects", "Whoosh, impact, braam, drone sur commande", "Le son est générique si le prompt l'est"],
        ["Tout, en dépannage", "Freesound", "Des sons enregistrés réels, gratuits", "Seuls CC0 et CC BY autorisent l'usage commercial"],
      ],
    },
    {
      type: "p",
      text: "Côté coûts, la [documentation d'ElevenLabs](https://elevenlabs.io/docs/overview/capabilities/sound-effects) indique 40 crédits par seconde quand tu fixes la durée, pour des effets de 0,1 à 30 secondes, avec un réglage d'influence du prompt et une option de boucle. Les 10 000 crédits mensuels de l'offre gratuite représentent donc environ quatre minutes de son, sans licence commerciale. L'offre Starter, à 6 dollars par mois, en donne 30 000 et ouvre l'usage commercial. Le reste de l'outil (voix, doublage, transcription) est détaillé dans le [guide complet d'ElevenLabs](/blog/elevenlabs-guide-complet).",
    },
    {
      type: "image",
      src: "/images/articles/bruitages-sound-design-ia-elevenlabs.webp",
      alt: "Page Sound effects de la documentation ElevenLabs, avec la liste des usages dont la génération de Foley et d'ambiances pour la vidéo, et un lecteur audio d'exemple intitulé Cinematic braam",
      caption:
        "La page Sound effects de la documentation ElevenLabs, capturée sur elevenlabs.io le 6 octobre 2026.",
    },
    {
      type: "ol",
      items: [
        "Regarde ton montage en muet et note chaque moment qui doit sonner, avec son timecode. Une porte à 0:07, des pas de 0:12 à 0:18, un titre à 0:31. C'est ton repérage. Sans cette liste, tu génères au hasard et tu payes des crédits pour des sons que tu ne poseras jamais.",
        "Coupe l'audio natif de tous les plans. Garde seulement les dialogues dont la synchro labiale est bonne, sur une piste à part.",
        "Pose l'ambiance en premier, sous toute la séquence. Une seule par lieu, en boucle si besoin. Si la scène change de lieu, fais un fondu d'une ambiance à l'autre sur une ou deux secondes plutôt qu'une coupe sèche.",
        "Ajoute la synchro plan par plan. Pour un plan court avec beaucoup de mouvement, passe-le dans un modèle vidéo vers audio. Pour un son isolé (une tasse, une clé), génère-le en texte avec la durée exacte et cale-le à la main sur l'image.",
        "Termine par le design, aux coupes et aux moments forts. Un whoosh sur une transition, un impact sur un titre. Ma règle perso : deux ou trois par minute au maximum, au-delà l'oreille ne les remarque plus.",
        "Mixe à l'oreille, voix au-dessus de tout. Baisse l'ambiance jusqu'à ne plus l'entendre consciemment, puis remonte-la d'un cran. Coupe-la ensuite deux secondes : si le plan te paraît soudain vide, elle est au bon niveau.",
      ],
    },
    {
      type: "p",
      text: "Pour la partie timeline, couper, empiler les pistes, faire les fondus, la méthode complète est dans l'article sur le [montage d'une vidéo IA dans CapCut ou DaVinci Resolve](/blog/monter-video-ia-capcut-davinci). Si tu travailles déjà avec une animatique, fais le repérage dessus : les durées de plans sont fixées, tu peux générer les sons avant même d'avoir les plans finaux, comme expliqué dans la [méthode de l'animatique IA](/blog/animatique-ia-methode).",
    },
    {
      type: "p",
      text: "> Pro Tip : écris tes prompts de bruitage dans l'ordre source, matière, action, espace. « Heavy leather boots walking slowly on wet gravel, outdoors, close perspective » sonne mieux que « footsteps in a forest ». J'écris en anglais : la doc d'ElevenLabs fournit son vocabulaire en anglais (Foley, ambience, whoosh, impact, one-shot, loop, braam, drone) et Firefly n'accepte que l'anglais pour ses effets.",
    },
    {
      type: "h3",
      id: "video-vers-audio",
      text: "Quand l'image dicte le son : MMAudio et Kling",
    },
    {
      type: "p",
      text: "MMAudio, publié à la conférence CVPR 2025, génère un son synchronisé à partir d'une vidéo, d'un texte ou des deux. Son dépôt GitHub annonce environ 6 Go de mémoire graphique en 16 bits, donc une carte récente suffit. Il a été entraîné sur des extraits de 8 secondes : au-delà, l'équipe prévient que la qualité peut baisser. Découpe tes plans longs avant de les lui donner.",
    },
    {
      type: "image",
      src: "/images/articles/bruitages-sound-design-ia-mmaudio.webp",
      alt: "Dépôt GitHub hkchengrex/MMAudio avec la description CVPR 2025 MMAudio, Taming Multimodal Joint Training for High-Quality Video-to-Audio Synthesis, les tags text-to-audio et video-to-audio et la mention MIT license",
      caption:
        "Le dépôt officiel de MMAudio sur GitHub, capturé le 6 octobre 2026. La licence MIT affichée concerne le code, pas les poids du modèle.",
    },
    {
      type: "p",
      text: "Attention au piège de la licence, justement. Le code est sous MIT, mais les poids entraînés sont publiés sous CC-BY-NC 4.0, ce qui ferme la porte à l'usage commercial. Le README liste aussi ses propres défauts : des bruits qui ressemblent à de la parole inintelligible, de la musique de fond qui apparaît sans qu'on l'ait demandée, des difficultés sur les objets qu'il connaît mal. Écoute chaque sortie en entier avant de la poser.",
    },
    {
      type: "p",
      text: "Kling propose de son côté un outil Video to Audio et, depuis Kling 2.6, un audio natif généré en même temps que l'image. L'intérêt de l'outil séparé : il prend deux prompts distincts, un pour les effets et un pour la musique, ce qui évite de tout mélanger dans une seule piste. Les réglages vidéo du modèle sont dans le [guide de Kling AI](/blog/kling-ai-videos-cinematiques).",
    },
    {
      type: "h3",
      id: "firefly-voix",
      text: "Donner le rythme avec ta voix : Firefly",
    },
    {
      type: "p",
      text: "Adobe a pris une autre voie. Dans l'éditeur vidéo de Firefly, encore en bêta, la fonction Generate Sound effects accepte un prompt texte et, en option, un enregistrement de ta voix. Tu places la tête de lecture sur l'image où le son doit commencer, tu fais « tchac, tchac, tchaaac » au micro pendant que la vidéo défile sans le son, et Firefly reprend le timing et l'intensité de ta voix pour générer l'effet.",
    },
    {
      type: "image",
      src: "/images/articles/bruitages-sound-design-ia-firefly.webp",
      alt: "Page d'aide Adobe Generate Sound effects, mise à jour le 16 juin 2026, expliquant la génération d'effets sonores dans l'éditeur vidéo de Firefly en bêta à partir d'un prompt texte et d'un enregistrement vocal pour le timing",
      caption:
        "L'aide officielle de Firefly sur la génération d'effets sonores, capturée sur helpx.adobe.com le 6 octobre 2026 (dernière mise à jour affichée : 16 juin 2026).",
    },
    {
      type: "p",
      text: "C'est la méthode la plus proche du vrai bruitage, celle où le geste humain décide du tempo. Elle a ses limites : prompts en anglais seulement, accès micro obligatoire, et un outil en bêta qui peut encore bouger. Pour une bagarre ou une pile d'objets qui s'effondre, c'est sur le papier la façon la plus directe d'obtenir un rythme qui ne sonne pas mécanique.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les erreurs qui trahissent un son généré",
    },
    {
      type: "h3",
      id: "erreur-audio-natif",
      text: "Garder l'audio natif plan par plan",
    },
    {
      type: "p",
      text: "Le symptôme : à chaque coupe, la pièce change d'acoustique et le vent change de direction. Chaque plan a été généré seul, avec son propre fond. Pris un par un, ils sonnent bien, mais mis bout à bout, ils trahissent le montage.",
    },
    {
      type: "p",
      text: "Fix concret : coupe le fond natif, pose une seule ambiance par lieu sous toute la scène, et ne garde de l'audio natif que les dialogues bien synchronisés.",
    },
    {
      type: "h3",
      id: "erreur-bloc-unique",
      text: "Demander toute la scène en une génération",
    },
    {
      type: "p",
      text: "Le symptôme : un prompt de trente secondes qui décrit pluie, pas, porte et voiture, et un résultat où tout se marche dessus. Impossible de baisser la pluie sans perdre la porte.",
    },
    {
      type: "p",
      text: "Fix concret : un son par génération, sur sa propre piste. Tu gardes la main sur le niveau et le calage de chacun, et tu ne regénères que celui qui ne va pas.",
    },
    {
      type: "h3",
      id: "erreur-licence",
      text: "Oublier la licence du fichier",
    },
    {
      type: "p",
      text: "Le symptôme : la vidéo est livrée, le client la diffuse, et tu réalises que l'impact du titre sort d'un compte ElevenLabs gratuit, ou d'un son Freesound en CC BY-NC. Les deux interdisent l'usage commercial. Les poids de MMAudio aussi.",
    },
    {
      type: "p",
      text: "Fix concret : un fichier texte dans chaque dossier de projet, une ligne par son, avec l'outil, l'offre ou la licence, et la date. Le même réflexe vaut pour la musique, comme on l'a vu dans l'article sur les [droits de la musique IA dans tes vidéos](/blog/musique-ia-droits-videos).",
    },
    {
      type: "h3",
      id: "erreur-surcharge",
      text: "Faire sonner tout ce qui bouge",
    },
    {
      type: "p",
      text: "Le symptôme : chaque geste a son bruit, chaque transition son whoosh, et la vidéo devient fatigante au bout de quarante secondes. Les modèles vidéo vers audio y poussent facilement : ils ont tendance à donner un son à tout ce qui bouge dans le cadre.",
    },
    {
      type: "p",
      text: "Fix concret : reprends ton repérage et choisis. Un bruiteur de cinéma ne sonorise pas chaque mouvement, il garde ceux qui servent la scène. Si un son ne dit rien sur le personnage, l'espace ou le rythme, coupe-le.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quel outil choisir pour faire des bruitages avec l'IA ?",
    },
    {
      type: "p",
      text: "Pour un son isolé décrit en texte (une porte, un impact, une ambiance de café), ElevenLabs Sound Effects est le plus simple : tu écris, tu fixes la durée, tu télécharges. Pour un son qui doit coller aux mouvements d'un plan précis, un modèle vidéo vers audio comme MMAudio ou Kling Video to Audio analyse l'image et cale le son dessus. Firefly ajoute une option à part : tu enregistres ta voix pour donner le rythme.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien coûte un bruitage sur ElevenLabs ?",
    },
    {
      type: "p",
      text: "Selon la documentation d'ElevenLabs, un effet sonore coûte 40 crédits par seconde quand tu fixes toi-même la durée, avec un maximum de 30 secondes par génération. L'offre gratuite donne 10 000 crédits par mois, soit environ quatre minutes de son, mais sans licence commerciale. Celle-ci commence à l'offre Starter, 6 dollars par mois pour 30 000 crédits.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Peut-on utiliser MMAudio pour une vidéo commerciale ?",
    },
    {
      type: "p",
      text: "Pas avec les poids publiés. Le code de MMAudio est sous licence MIT, mais les modèles entraînés sont diffusés sur Hugging Face sous licence CC-BY-NC 4.0, qui interdit l'usage commercial. Tu peux t'en servir pour tester, maquetter ou produire un projet personnel. Pour un client, passe par un outil dont les conditions d'utilisation couvrent l'exploitation commerciale.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Faut-il garder l'audio natif de Veo ou de Kling ?",
    },
    {
      type: "p",
      text: "Garde-le comme repère, rarement comme son final. L'audio natif est généré plan par plan, donc l'ambiance change d'une coupe à l'autre et le montage s'entend. Les dialogues bien synchronisés peuvent rester. Pour le reste, coupe-le et reconstruis une ambiance continue sous toute la séquence, puis ajoute les bruitages qui comptent.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Comment écrire un bon prompt de bruitage ?",
    },
    {
      type: "p",
      text: "Décris la source, la matière, l'action et l'espace, dans cet ordre : « heavy leather boots walking slowly on wet gravel, outdoors, close perspective ». Ajoute un mot du vocabulaire son quand il aide (Foley, ambience, whoosh, impact, one-shot, loop). Fixe la durée exacte du plan. Plus tu nommes de matières, moins le son sort générique.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Où trouver des bruitages gratuits utilisables commercialement ?",
    },
    {
      type: "p",
      text: "Freesound reste la banque de référence, à condition de filtrer par licence. Seuls les sons en CC0 et en CC BY autorisent l'usage commercial, le second en créditant l'auteur. Les sons en CC BY-NC et Sampling+ sont exclus dès que ta vidéo te rapporte de l'argent. Note la licence de chaque fichier dans ton dossier de projet au moment où tu le télécharges.",
    },
    {
      type: "p",
      text: "Pour ta prochaine vidéo, commence petit : un seul plan de dix secondes, le son coupé, une ambiance, deux sons synchro, un effet. Compare avec la version d'origine, au casque. La différence s'entend tout de suite, et tu sauras ensuite où mettre ton temps sur les projets longs.",
    },
    {
      type: "p",
      text: "Note de fondateur : le son, c'est la moitié de la mise en scène qu'on oublie de travailler. Choisir ce qui doit s'entendre, ce qui doit se taire, et à quel moment, ça relève du même regard que le découpage d'une scène. C'est ce qu'on travaille dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-06 -->
