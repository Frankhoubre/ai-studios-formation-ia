import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-26";
const IMG = "/images/articles/comment-ia-genere-image";
const SD_CARD = "https://huggingface.co/CompVis/stable-diffusion-v1-4";
const LDM = "https://arxiv.org/abs/2112.10752";
const DDPM = "https://arxiv.org/abs/2006.11239";
const CFG = "https://arxiv.org/abs/2207.12598";
const OPENAI = "https://openai.com/index/gpt-4o-image-generation-system-card-addendum/";
const FLUX2 = "https://bfl.ai/blog/flux-2";

const FAQ = [
  {
    question: "Comment une IA génère-t-elle une image ?",
    answer:
      "Un modèle de diffusion part d'un bruit aléatoire et le nettoie par étapes, guidé par ta phrase transformée en nombres par un encodeur de texte. Sur Stable Diffusion, ce travail se fait sur une version compressée de l'image, qu'un décodeur transforme en pixels à la fin.",
  },
  {
    question: "Est-ce que l'IA copie des images existantes ?",
    answer:
      "Elle ne va pas chercher d'images dans une base au moment où tu cliques. Elle a appris des régularités sur des milliards de paires image et légende. La fiche de Stable Diffusion 1.4 reconnaît toutefois une part de mémorisation pour les images très dupliquées dans les données d'entraînement : une œuvre très connue peut ressortir de près.",
  },
  {
    question: "Pourquoi le même prompt donne-t-il des images différentes ?",
    answer:
      "Parce que le bruit de départ, la seed, est tiré au hasard à chaque génération. Le modèle nettoie un bruit différent, il arrive donc à une image différente. Si tu fixes la seed avec le même modèle, la même taille et les mêmes réglages, tu retrouves la même image.",
  },
  {
    question: "Faut-il écrire ses prompts en anglais ?",
    answer:
      "Sur les modèles anciens, souvent oui. La fiche de Stable Diffusion 1.4 indique un entraînement surtout sur des légendes en anglais et des résultats moins bons dans les autres langues. Les modèles récents adossés à un grand modèle de langage sont censés mieux suivre les consignes, mais fais le test en français et en anglais sur ton outil, avec la même seed.",
  },
  {
    question: "Pourquoi l'IA rate-t-elle le texte et les mains ?",
    answer:
      "Plusieurs explications circulent : une main prend énormément de positions différentes et se retrouve souvent à moitié cachée sur les photos. Sur les modèles latents, la compression avec perte abîme aussi les petits détails. Les générateurs récents s'en sortent mieux, OpenAI annonce par exemple un texte intégré de façon fiable avec 4o image generation.",
  },
  {
    question: "Quelle différence entre Midjourney, Stable Diffusion et ChatGPT pour les images ?",
    answer:
      "Le principe général reste de partir d'une représentation vide et de la remplir selon ta consigne, mais les architectures diffèrent. Stable Diffusion documente publiquement sa diffusion latente, Flux 2 associe un modèle vision-langage à un transformeur à flux rectifié, et OpenAI décrit pour 4o une approche intégrée nativement au modèle GPT-4o. Midjourney ne publie pas son architecture.",
  },
];

export const commentIaGenereImage: Article = {
  title: "Comment l'IA génère une image (expliqué simplement)",
  slug: "comment-ia-genere-image",
  description:
    "Comment fonctionne une IA image : de ta phrase au bruit puis aux pixels, en quatre étapes sans maths, et ce que chaque étape change dans tes prompts.",
  excerpt:
    "Tu tapes une phrase, tu attends dix secondes, une image arrive. Entre les deux, il se passe quatre choses précises. Les connaître t'évite pas mal de prompts ratés.",
  category: "ia-image",
  tags: ["fonctionnement IA", "diffusion", "Stable Diffusion", "débutant", "prompt"],
  date: "2026-11-26",
  updatedAt: "2026-11-26",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/comment-ia-genere-image.webp",
  imageAlt:
    "Dans une chambre noire éclairée en rouge, une femme aux cheveux gris agite une cuvette où apparaît le tirage d'un phare, un adolescent penché sur son épaule",
  keywords: [
    "comment fonctionne ia image",
    "diffusion ia expliquée",
    "comment l'ia génère une image",
    "modèle de diffusion",
    "espace latent",
  ],
  relatedSlugs: ["image-ia-guide-complet", "seed-cfg-steps-reglages-image-ia", "stable-diffusion-debutant-demarrer"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "**Une IA image part d'un bruit aléatoire et le nettoie par étapes, guidée par ta phrase, jusqu'à ce qu'une image apparaisse.** Ta phrase est d'abord traduite en nombres, et sur la plupart des modèles le travail se fait sur une version compressée de l'image, regonflée en pixels à la fin.",
    },
    {
      type: "p",
      text: "Tu n'as pas besoin de comprendre les maths pour t'en servir. Par contre, savoir ce qui se passe à chaque étape explique des choses qui rendent fou au début : pourquoi le même prompt donne deux images différentes, pourquoi les mains partent en vrille, pourquoi ton prompt en français marche moins bien sur certains outils.",
    },
    {
      type: "p",
      text: "J'ai gardé une seule image du début à la fin : un phare sous la tempête, en peinture à l'huile. On va la suivre de ta phrase jusqu'au fichier, et à chaque étape je te dis ce que tu peux en tirer pour tes prompts.",
    },
    { type: "h2", id: "core-concepts", text: "Ce qu'une IA image a vraiment appris" },
    { type: "h3", id: "paires-image-legende", text: "Des milliards d'images avec leur légende" },
    {
      type: "p",
      text: "Un générateur d'images apprend sur des images accompagnées de leur description. La [fiche officielle de Stable Diffusion 1.4](" + SD_CARD + ") le dit clairement : le modèle a été entraîné sur LAION-2B(en) et ses sous-ensembles, des images collectées sur le web avec leur texte, surtout en anglais. Il a vu des milliers de phares, de tempêtes et de toiles à l'huile, chacun avec quelques mots autour.",
    },
    {
      type: "p",
      text: "De tout ça, il garde des régularités. Un phare est vertical, rayé ou blanc, posé sur un rocher. Une tempête, c'est un ciel sombre et de l'écume. La peinture à l'huile laisse des empâtements visibles. **Ce qu'il emporte de l'entraînement, ce sont des ressemblances attachées à des mots.**",
    },
    {
      type: "screenshot",
      src: `${IMG}-sd-carte.webp`,
      alt: "Fiche du modèle CompVis/stable-diffusion-v1-4 sur Hugging Face : modèle de diffusion texte vers image, entraîné à 512x512 sur laion-aesthetics v2 5+, avec 10 % d'abandon du texte pour améliorer le classifier-free guidance",
      caption: "La fiche de Stable Diffusion 1.4 : un des rares modèles grand public dont le fonctionnement est documenté en détail.",
      source: SD_CARD,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "pas-de-base", text: "Aucune base d'images fouillée au moment du clic" },
    {
      type: "p",
      text: "Quand tu cliques sur générer, le modèle ne va chercher aucune image quelque part. Tout ce qu'il sait tient dans ses paramètres, environ 0,9 milliard pour Stable Diffusion 1.4 d'après sa page Hugging Face. C'est pour ça qu'il peut te sortir un phare qui n'existe nulle part.",
    },
    {
      type: "p",
      text: "La fiche du modèle le reconnaît d'ailleurs : aucune déduplication n'a été faite sur les données, et les auteurs observent une part de mémorisation pour les images présentes en de nombreux exemplaires. Une affiche ultra connue, reproduite des milliers de fois en ligne, peut ressortir presque à l'identique. Si tu travailles pour un client, garde-le en tête.",
    },
    { type: "h2", id: "quatre-etapes", text: "De ta phrase à l'image en quatre étapes" },
    {
      type: "image",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en quatre cases : la phrase « un phare sous la tempête, peinture à l'huile », l'encodeur de texte qui la change en nombres, le débruitage dans un latent de 64 x 64 x 4, puis le décodeur qui produit les pixels",
      caption: "Schéma AI Studios du 26 novembre 2026, d'après la fiche du modèle Stable Diffusion 1.4. Les autres générateurs suivent le même esprit avec des pièces différentes.",
      width: 1280,
      height: 640,
    },
    { type: "h3", id: "etape-encodeur", text: "1. Tes mots deviennent des nombres" },
    {
      type: "p",
      text: "Un réseau de neurones ne lit pas « phare ». Un encodeur de texte transforme d'abord ta phrase en une suite de vecteurs, des listes de nombres qui placent chaque mot par rapport aux autres. Sur Stable Diffusion 1.4, c'est un encodeur CLIP ViT-L/14, et sa sortie est injectée dans le réseau principal à chaque étape.",
    },
    {
      type: "p",
      text: "Conséquence directe : l'encodeur a appris sur des légendes de photos, majoritairement en anglais. La fiche le dit noir sur blanc : le modèle marche moins bien dans les autres langues. Ton « phare sous la tempête » passe, mais une tournure poétique en français risque d'être mal comprise. Et l'encodeur accepte une longueur limitée : selon l'outil, la fin d'un prompt trop long peut être tronquée.",
    },
    { type: "h3", id: "etape-bruit", text: "2. Le point de départ est un bruit tiré au hasard" },
    {
      type: "p",
      text: "Le point de départ est un bruit aléatoire, une sorte de neige, généré à partir d'un nombre qu'on appelle la seed. Même seed, même bruit. Autre seed, autre bruit, donc une autre image au bout, même avec un prompt identique.",
    },
    {
      type: "p",
      text: "Pense à une chambre noire. Le papier photo plongé dans le révélateur ne montre rien, puis l'image monte peu à peu. Sauf qu'ici, ce qui monte dépend à la fois de ta phrase et de ce bruit initial. Ton phare sera à gauche avec une seed, à droite avec une autre.",
    },
    { type: "h3", id: "etape-debruitage", text: "3. Le modèle retire le bruit, étape par étape" },
    {
      type: "p",
      text: "C'est le cœur du système, posé en 2020 dans [l'article fondateur sur les modèles de diffusion](" + DDPM + "). Pendant l'entraînement, on abîme de vraies images en ajoutant du bruit petit à petit, et le modèle apprend à prédire ce bruit pour le retirer. Une fois entraîné, il applique ce savoir à un bruit pur : à chaque étape il enlève un peu de neige, et une image émerge.",
    },
    {
      type: "p",
      text: "Les grandes masses arrivent en premier : un ciel sombre en haut, une verticale claire au milieu. Les détails viennent ensuite, la lanterne, les rayures, l'écume, les coups de pinceau. Le nombre de ces passages, ce sont les « steps » que tu vois dans les réglages.",
    },
    {
      type: "p",
      text: "Pour que ta phrase pèse vraiment, la plupart des outils utilisent une astuce publiée par [Jonathan Ho et Tim Salimans en 2022](" + CFG + "), le classifier-free guidance. Le modèle fait deux prédictions à chaque étape, une avec ta phrase et une sans, puis il pousse le résultat dans la direction qui sépare les deux. Le réglage CFG dit avec quelle force. Stable Diffusion 1.4 a même été entraîné en retirant le texte dans 10 % des cas, justement pour apprendre à faire cette prédiction sans consigne.",
    },
    {
      type: "screenshot",
      src: `${IMG}-cfg.webp`,
      alt: "Page arXiv de l'article « Classifier-Free Diffusion Guidance » de Jonathan Ho et Tim Salimans, soumis le 26 juillet 2022, avec le résumé qui décrit l'entraînement conjoint d'un modèle conditionnel et non conditionnel",
      caption: "L'article de 2022 à l'origine du réglage CFG présent dans presque tous les générateurs.",
      source: CFG,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "etape-latent", text: "4. Tout se passe dans une version compressée, décodée à la fin" },
    {
      type: "p",
      text: "Débruiter directement les pixels d'une grande image coûterait très cher. L'équipe de [Robin Rombach a proposé fin 2021](" + LDM + ") de travailler dans l'espace latent d'un autoencodeur, une version compressée de l'image. Sur Stable Diffusion 1.4, la fiche donne le facteur : une image de 512 x 512 pixels devient un latent de 64 x 64 sur 4 canaux.",
    },
    {
      type: "p",
      text: "Fais le calcul : 512 x 512 x 3 couleurs, ça donne 786 432 valeurs. Le latent en compte 16 384. Le modèle manipule donc 48 fois moins de nombres, ce qui explique qu'une image sorte en quelques secondes sur une carte graphique grand public. À la fin, un décodeur regonfle ce latent en pixels. La fiche précise que cette compression perd de l'information, et c'est là que se jouent une partie des petits détails ratés.",
    },
    {
      type: "screenshot",
      src: `${IMG}-latent.webp`,
      alt: "Page arXiv de l'article « High-Resolution Image Synthesis with Latent Diffusion Models » de Robin Rombach et al., soumis le 20 décembre 2021, base de Stable Diffusion",
      caption: "L'article sur la diffusion latente, base technique de Stable Diffusion.",
      source: LDM,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h2", id: "practical-workflow", text: "Ce que ça change concrètement dans tes prompts" },
    {
      type: "p",
      text: "Chaque étape explique un comportement que tu as déjà vu, et te donne un geste précis pour le contrôler.",
    },
    {
      type: "table",
      caption: "Du fonctionnement de l'IA image à ce que tu fais devant ton outil",
      headers: ["Étape", "Ce que tu observes", "Ce que tu fais"],
      rows: [
        ["Encodeur de texte", "Un prompt poétique en français donne une image à côté", "Décris ce qu'on voit, avec des mots de légende photo, et teste la version anglaise"],
        ["Longueur maximale de l'encodeur", "La fin d'un prompt très long n'a aucun effet", "Mets le sujet et le style au début, coupe les répétitions"],
        ["Seed aléatoire", "Même prompt, image différente à chaque clic", "Fixe la seed quand tu compares deux versions d'un prompt"],
        ["Débruitage par étapes", "Peu de steps donne une image floue ou inachevée", "Monte les steps jusqu'à ce que l'image cesse de s'améliorer, pas plus"],
        ["Guidage CFG", "Couleurs criardes ou image brûlée quand le CFG est poussé", "Baisse le CFG avant de réécrire ton prompt"],
        ["Décodeur avec perte", "Texte illisible, mains ou visages lointains abîmés", "Cadre plus serré, retouche locale, ou un modèle réputé pour le texte"],
      ],
    },
    {
      type: "p",
      text: "Les valeurs exactes de steps et de CFG changent d'un modèle à l'autre. Je les ai détaillées, avec une méthode pour les régler sans tâtonner, dans [le guide des réglages seed, CFG et steps](/blog/seed-cfg-steps-reglages-image-ia). Pour tout ce qui précède le réglage, choisir l'outil, écrire, retoucher, part plutôt du [guide complet de l'image IA](/blog/image-ia-guide-complet).",
    },
    { type: "h3", id: "test-20-minutes", text: "Le test de 20 minutes pour voir chaque étape de tes yeux" },
    {
      type: "ol",
      items: [
        "Ouvre un générateur qui affiche la seed (Stable Diffusion en local ou en ligne, ou tout outil qui la montre).",
        "Lance « a lighthouse in a storm, oil painting » quatre fois sans rien fixer. Note où tombe le phare à chaque fois : c'est le bruit de départ qui décide.",
        "Récupère la seed de l'image que tu préfères et fixe-la.",
        "Relance avec la même seed et seulement 5 steps, puis 15, puis 30. Tu vois l'image monter comme dans le révélateur.",
        "Toujours avec la même seed, change uniquement le CFG : une valeur basse, une moyenne, une haute. Regarde les couleurs et l'obéissance au prompt.",
        "Enfin, traduis le prompt en français, même seed, mêmes réglages. Compare.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde ces six images dans un dossier nommé avec la seed et les réglages. C'est ta référence pour ce modèle, et elle te servira chaque fois que tu te demanderas si un défaut vient du prompt ou des réglages.",
    },
    {
      type: "p",
      text: "Si tu n'as encore jamais installé de modèle, la marche à suivre est dans [mon guide pour démarrer Stable Diffusion](/blog/stable-diffusion-debutant-demarrer). Et pour retirer ce que tu ne veux pas voir, le [prompt négatif](/blog/prompt-negatif-ia-images-propres) agit justement sur la branche « sans ta phrase » du guidage, sur les outils qui le proposent.",
    },
    { type: "h2", id: "tous-les-modeles", text: "Tous les générateurs ne suivent pas la même recette" },
    {
      type: "p",
      text: "Ce que je viens de décrire, c'est Stable Diffusion 1.4, parce que c'est l'un des rares modèles dont chaque pièce est publique. Les générateurs récents gardent l'idée de partir d'un vide et de le remplir selon ta consigne, avec d'autres pièces.",
    },
    {
      type: "p",
      text: "Chez Black Forest Labs, [Flux 2 associe un modèle vision-langage de 24 milliards de paramètres](" + FLUX2 + ") (Mistral-3) à un transformeur à flux rectifié, une variante de la diffusion. Le modèle de langage apporte la compréhension de la consigne pour mieux suivre les consignes longues. Je détaille la famille dans le [guide Flux](/blog/flux-guide-complet).",
    },
    {
      type: "p",
      text: "Chez OpenAI, l'[addendum du 25 mars 2025](" + OPENAI + ") présente 4o image generation comme une approche nettement plus capable que DALL·E 3, intégrée nativement dans le modèle GPT-4o, avec du texte intégré aux images de façon fiable. Midjourney, de son côté, ne publie pas son architecture : tout ce qu'on lit dessus reste de la supposition.",
    },
    {
      type: "screenshot",
      src: `${IMG}-openai.webp`,
      alt: "Page OpenAI « Addendum to GPT-4o System Card: 4o image generation » datée du 25 mars 2025, avec l'introduction qui compare l'approche à DALL·E 3",
      caption: "L'addendum d'OpenAI sur la génération d'images de GPT-4o.",
      source: OPENAI,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La vidéo suit le même chemin, avec une dimension en plus : le temps. Je l'ai expliqué dans [la définition de la vidéo générative](/blog/video-generative-definition), où la même logique de bruit doit tenir sur 240 images d'affilée.",
    },
    { type: "h2", id: "trench-warfare", text: "Quatre idées reçues sur le fonctionnement de l'IA image" },
    { type: "h3", id: "idee-collage", text: "« L'IA fait un collage de photos trouvées en ligne »" },
    {
      type: "p",
      text: "Symptôme : tu cherches dans ton image le morceau de photo d'origine, et tu ne le trouves pas. Le modèle part d'un bruit et ne colle rien. Le risque réel, c'est la mémorisation des images très dupliquées. Fix concret : évite de demander une œuvre célèbre ou le style d'une affiche connue mot pour mot, et pour un projet client fais une recherche d'image inversée sur ton résultat.",
    },
    { type: "h3", id: "idee-steps", text: "« Plus de steps, c'est toujours mieux »" },
    {
      type: "p",
      text: "Symptôme : tu passes de 30 à 100 steps, tu attends trois fois plus longtemps, et l'image est quasiment la même. Les dernières étapes ne retirent presque plus rien. Fix concret : fais le test de la section précédente une fois par modèle, trouve le palier où l'image arrête de bouger, et reste dessus.",
    },
    { type: "h3", id: "idee-comprend", text: "« Le modèle comprend ma phrase comme un humain »" },
    {
      type: "p",
      text: "Symptôme : tu écris « un phare qui se sent seul » et tu obtiens un phare tout à fait ordinaire. L'encodeur a appris sur des légendes de photos, et personne n'écrit ça sous une photo de phare. Fix concret : traduis l'émotion en éléments visibles. Un seul phare, mer vide, ciel bas, lumière froide, petit dans le cadre.",
    },
    { type: "h3", id: "idee-seed", text: "« Ma seed me redonnera toujours la même image »" },
    {
      type: "p",
      text: "Symptôme : tu notes une seed sur un outil, tu la remets une semaine plus tard, et l'image a changé. La seed fixe seulement le bruit de départ. Si le modèle, la taille, le nombre de steps ou l'échantillonneur changent, l'arrivée change aussi. Fix concret : note la seed avec tous les réglages et le nom exact de la version du modèle.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Compare plusieurs modèles sur le même phare",
    },
    {
      type: "p",
      text: "Ce soir, fais seulement l'étape 4 du test : même seed, 5 steps puis 30. Tu verras ton image passer de la tache au tableau. Mets les deux côte à côte : c'est la meilleure explication des steps que je connaisse.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 26 novembre 2026 la fiche du modèle Stable Diffusion 1.4 sur Hugging Face, les pages arXiv des articles sur les modèles de diffusion (2020), la diffusion latente (2021) et le classifier-free guidance (2022), l'addendum d'OpenAI sur 4o image generation et l'article de Black Forest Labs sur Flux 2. Les captures ont été prises le même jour.",
        "Le schéma est fait maison à partir de la fiche du modèle. Le calcul du rapport entre pixels et latent est le mien, à partir des dimensions qu'elle donne. Le phare est un exemple construit pour l'article.",
      ],
      teste: ["Le calcul pixels contre latent (786 432 contre 16 384 valeurs)"],
      nonTeste: ["Le test de 20 minutes, décrit comme exercice et non mené pour l'article", "L'architecture de Midjourney, non publiée"],
      sources: [
        { label: "Fiche du modèle Stable Diffusion 1.4 (Hugging Face)", href: SD_CARD },
        { label: "Ho et al., Denoising Diffusion Probabilistic Models (arXiv, 2020)", href: DDPM },
        { label: "Rombach et al., Latent Diffusion Models (arXiv, 2021)", href: LDM },
        { label: "Ho et Salimans, Classifier-Free Diffusion Guidance (arXiv, 2022)", href: CFG },
        { label: "OpenAI, addendum 4o image generation (2025)", href: OPENAI },
        { label: "Black Forest Labs, Flux 2", href: FLUX2 },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-26 -->
