import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-16";
const IMG = "/images/articles/chatgpt-photo-prompts";
const AIDE_IMAGES = "https://help.openai.com/fr-fr/articles/11084440";
const POLITIQUES = "https://openai.com/fr-FR/policies/usage-policies/";
const CONTROLES_DONNEES = "https://help.openai.com/fr-fr/articles/7730893";
const PROVENANCE = "https://help.openai.com/fr-fr/articles/8912793";
const CODE_CIVIL_9 = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419288";

const FAQ = [
  {
    question: "Comment transformer sa propre photo avec ChatGPT ?",
    answer:
      "Importe ta photo dans une conversation, puis décris la modification voulue. L'aide OpenAI prévoit deux façons de faire : décrire le changement directement dans la conversation, ou passer par l'éditeur et sélectionner la zone à modifier. Une modification par message, et dans chaque prompt, dis ce qui ne doit pas bouger (visage, expression, cadrage).",
  },
  {
    question: "ChatGPT photo est-il gratuit ?",
    answer:
      "Oui, ChatGPT Images est disponible avec toutes les offres, gratuite comprise, sur le web, iOS et Android. La génération d'images avec réflexion est réservée aux offres Plus, Pro et Business. La page d'aide consultée le 16 novembre 2026 ne donne pas de quota chiffré d'images par jour pour l'offre gratuite.",
  },
  {
    question: "Pourquoi ChatGPT change mon visage quand je modifie ma photo ?",
    answer:
      "Parce que le modèle redessine l'image au lieu de la retoucher pixel par pixel. Même avec une zone sélectionnée, l'aide OpenAI prévient que les modifications peuvent déborder. Pour limiter la dérive : une photo nette et de face, une seule demande à la fois, une phrase qui verrouille le visage, et repartir de l'original plutôt que de la version déjà modifiée.",
  },
  {
    question: "Quel prompt pour une photo façon années 80 ?",
    answer:
      "Décris le studio de l'époque plutôt que le mot « vintage » : fond marbré bleu-gris, lumière douce de face, couleurs un peu passées, grain argentique fin. Ajoute ensuite ce qui ne bouge pas : ton visage, ta coiffure, ton expression. Le prompt complet est dans le tableau de l'article.",
  },
  {
    question: "Peut-on modifier la photo de quelqu'un d'autre avec ChatGPT ?",
    answer:
      "Seulement avec son accord. Les politiques d'utilisation d'OpenAI, dans la version qui entre en vigueur le 20 novembre 2026, interdisent d'utiliser l'image d'une personne sans son consentement d'une manière qui pourrait mettre l'authenticité en doute. En France, le droit à l'image repose sur l'article 9 du Code civil. Pour une photo de couple ou de famille, demande avant d'importer et avant de publier.",
  },
  {
    question: "Mes photos importées servent-elles à entraîner les modèles d'OpenAI ?",
    answer:
      "Par défaut, oui sur les espaces personnels Free, Plus et Pro : le réglage « Améliorer le modèle pour tous » est activé. Tu peux le désactiver dans Paramètres, puis Contrôles des données. Les chats éphémères ne servent pas à améliorer les modèles, mais OpenAI peut les conserver jusqu'à 30 jours pour des raisons de sécurité.",
  },
];

export const chatgptPhotoPrompts: Article = {
  title: "ChatGPT photo : les prompts pour transformer ta photo",
  slug: "chatgpt-photo-prompts",
  description:
    "ChatGPT photo : des prompts à copier pour passer ta photo en années 80, noir et blanc, portrait ou photo de couple, ce qui dérive et les règles de vie privée.",
  excerpt:
    "Tu importes ta photo dans ChatGPT, tu demandes « style années 80 » et tu récupères quelqu'un qui te ressemble vaguement. Les prompts qui gardent ton visage, l'ordre des retouches, ce qui dérive le plus et ce qu'il faut savoir avant d'y mettre la photo d'un proche.",
  category: "prompting",
  tags: ["ChatGPT", "prompts", "retouche photo", "photo noir et blanc", "vie privée"],
  date: "2026-11-16",
  updatedAt: "2026-11-16",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/chatgpt-photo-prompts.webp",
  imageAlt:
    "Hall de gare en pierre un matin d'automne : un homme en veste de velours sort d'un photomaton en bois avec une bande de quatre photos noir et blanc, sa compagne en manteau vert la compare en souriant avec une photo couleur sur son téléphone",
  keywords: [
    "chat gpt photo",
    "prompt chatgpt photo",
    "chat gpt photo années 80",
    "chat gpt photo noir et blanc",
    "prompt chatgpt photo couple",
  ],
  relatedSlugs: ["dalle-chatgpt-creer-images", "personnage-coherent-ia", "changer-style-image-ia"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu importes un selfie dans ChatGPT, tu écris « mets-moi dans les années 80 », et tu récupères un cousin éloigné. Même brushing, même veste, mais le nez a changé et le sourire ne t'appartient plus. Sur une photo de toi, c'est agaçant. Sur la photo de mariage de tes parents, c'est raté.",
    },
    {
      type: "p",
      text: "Je te donne ici des prompts prêts à copier pour transformer ta propre photo (années 80, noir et blanc, portrait propre, photo de couple, illustration), la méthode pour que ton visage tienne d'une retouche à l'autre, et les règles à connaître avant d'importer la photo de quelqu'un d'autre. Tout ce qui concerne le fonctionnement de ChatGPT vient des pages d'aide d'OpenAI relues le 16 novembre 2026.",
    },
    {
      type: "p",
      text: "ChatGPT est très bon pour changer l'ambiance d'une photo, et beaucoup moins fiable pour laisser ton visage tranquille. Les bons prompts passent donc plus de mots à dire ce qui ne bouge pas qu'à décrire l'effet.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce que ChatGPT fait vraiment de ta photo",
    },
    {
      type: "h3",
      id: "redessine",
      text: "ChatGPT redessine ta photo à chaque demande",
    },
    {
      type: "p",
      text: "Un logiciel de retouche classique modifie des pixels précis et laisse le reste intact. Un générateur d'images comme ChatGPT Images produit une nouvelle image à partir de la tienne et de ta demande. C'est pour ça qu'un simple changement de fond peut déplacer une mèche, adoucir une ride ou changer la forme d'une oreille.",
    },
    {
      type: "p",
      text: "OpenAI le dit elle-même à propos de l'éditeur : les sélections ne sont pas toujours précises et les modifications peuvent s'étendre au-delà de la zone choisie. Garde cette phrase en tête, elle explique bien des surprises. Si tu veux comprendre comment dialoguer avec le modèle pour créer une image de zéro, j'ai écrit un guide sur [la création d'images avec DALL·E et ChatGPT](/blog/dalle-chatgpt-creer-images). Ici, on part d'une photo qui existe déjà.",
    },
    {
      type: "h3",
      id: "aide-openai",
      text: "Ce que dit l'aide OpenAI au 16 novembre 2026",
    },
    {
      type: "screenshot",
      src: `${IMG}-aide-images.webp`,
      alt: "Page d'aide OpenAI « Les images dans ChatGPT » en français, avec la présentation de ChatGPT Images 2.6 et le sommaire : disponibilité, créer et modifier des images, GIF, photo de référence, modèles, éditeur",
      caption: "La page d'aide « Les images dans ChatGPT », capturée sur help.openai.com le 16 novembre 2026 (bandeau cookies masqué, jamais accepté).",
      source: AIDE_IMAGES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La [page d'aide sur les images dans ChatGPT](" + AIDE_IMAGES + ") pose les règles du jeu. ChatGPT Images est disponible avec toutes les offres, sur le web, iOS et Android. La génération d'images avec réflexion est réservée à Plus, Pro et Business. La version 2.6, d'après OpenAI, préserve mieux la cohérence des détails d'une modification à l'autre. Je ne l'ai pas mesuré, je te transmets ce qu'annonce la page.",
    },
    {
      type: "p",
      text: "Deux fonctions comptent pour ta photo. D'abord, tu peux modifier une image en décrivant le changement dans la conversation, ou en sélectionnant une zone dans l'éditeur. Ensuite, tu peux **enregistrer une photo comme référence** et l'appeler plus tard avec @ suivi de son nom. L'exemple d'OpenAI : une photo de chien enregistrée sous le nom Pepper, puis « Crée un portrait à l'aquarelle de @Pepper ». Toi, tu pourrais l'appeler @Moi, ou @Grand-mère pour une photo de famille.",
    },
    {
      type: "p",
      text: "Toutes les images créées s'enregistrent dans la section Images. Pour en retirer une, il faut supprimer la conversation où elle a été créée. Retiens-le si tu as fait des essais avec la photo d'un proche.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Les prompts ChatGPT photo à copier, et comment les utiliser",
    },
    {
      type: "p",
      text: "Chaque prompt suit la même logique : l'effet en premier, décrit avec des choses concrètes (lumière, fond, grain, couleurs), puis une phrase qui verrouille ce qui ne doit pas changer. Je n'ai lancé aucune génération pour cet article : prends ces textes comme des points de départ structurés, pas comme des résultats garantis.",
    },
    {
      type: "table",
      caption: "Six transformations de ta propre photo, avec le point à surveiller pour chacune",
      headers: ["Effet voulu", "Prompt à copier", "Point à surveiller"],
      rows: [
        [
          "Portrait studio années 80",
          "« Transforme cette photo en portrait de studio des années 1980 : fond marbré bleu-gris, lumière douce de face, couleurs un peu passées, grain argentique fin. Garde exactement mon visage, ma coiffure et mon expression. Ne change pas mes vêtements. »",
          "La coiffure, que le modèle a tendance à « mettre à l'époque »",
        ],
        [
          "Noir et blanc argentique",
          "« Passe cette photo en noir et blanc façon tirage argentique : contraste marqué, noirs profonds, grain visible. Ne modifie ni le cadrage, ni la lumière, ni les traits du visage. »",
          "La peau lissée et les détails du fond simplifiés",
        ],
        [
          "Portrait propre pour un profil",
          "« Garde mon visage tel quel. Remplace l'arrière-plan par un mur gris clair uni, ajoute une lumière douce venant d'une fenêtre à gauche. Cadrage épaules, format 4:5. »",
          "Les yeux et les dents, souvent trop nets ou trop blancs",
        ],
        [
          "Photo de couple d'une autre époque",
          "« Sur cette photo de nous deux, garde nos deux visages identiques, nos positions et nos mains. Transforme la scène en photo de mariage des années 1970 : couleurs chaudes, flash direct, bord blanc de tirage. »",
          "Le deuxième visage, et les mains qui se touchent",
        ],
        [
          "Illustration à partir de la photo",
          "« Redessine cette photo en illustration à l'aquarelle, traits fins à l'encre, papier texturé. Garde la ressemblance : forme du visage, coupe de cheveux, lunettes. »",
          "Les signes distinctifs (grain de beauté, lunettes, cicatrice)",
        ],
        [
          "Réutiliser ta photo de référence",
          "« Crée un portrait en lumière de fin de journée de @Moi, assis à une terrasse de café, cadrage poitrine, objectif 50 mm. »",
          "La ressemblance sur les angles qui n'existent pas dans ta photo",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Choisis la bonne photo : nette, visage de face ou de trois quarts, lumière régulière, sans filtre. Une photo floue ou très compressée donne au modèle une excuse pour inventer.",
        "Importe-la et écris une seule demande. Une transformation par message, jamais « années 80 + noir et blanc + autre fond » d'un coup.",
        "Termine toujours par la phrase de verrouillage : ce qui ne bouge pas (visage, expression, coiffure, vêtements, cadrage).",
        "Pour une zone précise (le fond, un vêtement), ouvre l'éditeur et sélectionne-la, puis décris la modification. Vérifie quand même le reste de l'image, la sélection peut déborder.",
        "Compare le résultat avec l'original en plein écran, côte à côte. Regarde les yeux, les dents, les oreilles, les mains et les bijoux.",
        "Si quelque chose a dérivé, repars de la photo d'origine avec un prompt corrigé plutôt que de demander une retouche sur la version déjà modifiée.",
        "Quand le résultat te va, enregistre-le sur ton appareil. Si la photo d'origine est celle d'un proche, supprime ensuite la conversation.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : décris l'époque avec des objets et de la lumière, pas avec un adjectif. « Vintage » laisse le modèle choisir à ta place. « Fond marbré, flash direct, bord blanc de tirage » lui dit exactement quoi faire. Si tu veux muscler ta façon d'écrire ces descriptions, mon [guide complet du prompt IA](/blog/prompt-ia-guide-complet) détaille la méthode.",
    },
    {
      type: "h3",
      id: "noir-et-blanc",
      text: "Pour un simple noir et blanc, ChatGPT n'est pas le bon outil",
    },
    {
      type: "p",
      text: "Si tu veux juste ta photo en noir et blanc, sans autre changement, n'importe quelle application photo le fait en un clic sans toucher à un seul trait. Ton téléphone sait le faire. Passer par un générateur pour ça revient à risquer une dérive pour rien. Garde ChatGPT pour les cas où tu veux une vraie transformation : un grain d'époque, une lumière différente, un autre décor.",
    },
    {
      type: "p",
      text: "Même logique pour une vieille photo abîmée : restaurer et coloriser demande des outils plus prudents, que je compare dans [mon guide pour restaurer et coloriser une photo par IA](/blog/restaurer-coloriser-photo-ia).",
    },
    {
      type: "h3",
      id: "couple",
      text: "La photo de couple, le cas le plus exigeant",
    },
    {
      type: "p",
      text: "Avec deux visages, il suffit que l'un des deux bouge pour que la photo soit ratée. Un générateur a tendance à harmoniser : même grain de peau, mêmes yeux un peu plus grands, sourire aligné. Dans le prompt, nomme les deux personnes par leur position (« la personne à gauche », « la personne à droite ») et demande à garder les deux visages identiques. Les mains enlacées sont l'autre point faible, vérifie le nombre de doigts.",
    },
    {
      type: "p",
      text: "Si tu dois produire une série d'images du même personnage, la photo de référence aide, mais elle ne remplace pas une vraie méthode de cohérence. J'en parle en détail dans l'article sur [le personnage cohérent en IA](/blog/personnage-coherent-ia).",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Compare le même prompt sur plusieurs modèles",
      text: "Si ChatGPT ne garde pas ton visage, essaie le même prompt sur d'autres modèles d'image et regarde les résultats côte à côte, avec le coût affiché avant chaque génération.",
    },
    {
      type: "h2",
      id: "vie-privee",
      text: "Vie privée : ta photo, celle des autres et ce qu'OpenAI en fait",
    },
    {
      type: "screenshot",
      src: `${IMG}-politique-consentement.webp`,
      alt: "Extrait des politiques d'utilisation d'OpenAI, section Respect de la vie privée, listant l'interdiction d'utiliser l'image d'une personne, y compris son image photoréaliste ou sa voix, sans son consentement et d'une manière qui pourrait mettre l'authenticité en doute",
      caption: "La section « Respect de la vie privée » des politiques d'utilisation d'OpenAI (version en vigueur au 20 novembre 2026), capturée sur openai.com le 16 novembre 2026.",
      source: POLITIQUES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 652,
    },
    {
      type: "p",
      text: "Pour ta propre photo, tu fais ce que tu veux. Pour celle d'un autre, les [politiques d'utilisation d'OpenAI](" + POLITIQUES + "), dans leur version qui entre en vigueur le 20 novembre 2026, interdisent d'utiliser l'image d'une personne, y compris son image photoréaliste ou sa voix, **sans son consentement** et d'une manière qui pourrait mettre l'authenticité en doute.",
    },
    {
      type: "p",
      text: "En France, le droit à l'image s'appuie sur l'[article 9 du Code civil](" + CODE_CIVIL_9 + "), qui protège la vie privée de chacun. Concrètement : avant d'importer la photo de ton conjoint, de tes enfants ou de tes amis, demande. Avant de publier le résultat, redemande. Et si la transformation peut faire croire à une scène qui n'a pas eu lieu, relis mon article sur [ce que dit la loi sur les deepfakes](/blog/deepfake-createur-droit) avant de poster quoi que ce soit.",
    },
    {
      type: "screenshot",
      src: `${IMG}-controles-donnees.webp`,
      alt: "Page d'aide OpenAI « Contrôles des données dans ChatGPT » en français, avec la présentation des réglages d'entraînement des modèles et le sommaire : désactiver Améliorer le modèle pour tous, chats éphémères, exporter ses données",
      caption: "La page d'aide « Contrôles des données dans ChatGPT », capturée sur help.openai.com le 16 novembre 2026.",
      source: CONTROLES_DONNEES,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Côté données, la [page d'aide sur les contrôles des données](" + CONTROLES_DONNEES + ") précise que sur les espaces personnels Free, Plus et Pro, le partage pour l'entraînement est **activé par défaut**. Tu le coupes dans Paramètres, Contrôles des données, en désactivant « Améliorer le modèle pour tous ». Autre option : le chat éphémère, qui n'apparaît pas dans l'historique et ne sert pas à améliorer les modèles. OpenAI peut quand même le conserver jusqu'à 30 jours pour des raisons de sécurité.",
    },
    {
      type: "p",
      text: "Les images générées avec ChatGPT portent des signaux de provenance. Selon la [page d'aide d'OpenAI sur la provenance](" + PROVENANCE + "), elles incluent des Content Credentials (métadonnées C2PA) et un filigrane invisible SynthID. Les métadonnées peuvent sauter lors d'une capture d'écran ou d'une conversion, le filigrane résiste mieux aux modifications courantes. Ta photo transformée peut donc être reconnue comme générée, et c'est très bien comme ça. Pour aller plus loin, j'ai écrit sur [la détection d'une image générée par IA](/blog/detecter-image-generee-ia).",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les erreurs qui font dériver ta photo",
    },
    {
      type: "h3",
      id: "erreur-retouche-de-retouche",
      text: "Retoucher la retouche",
    },
    {
      type: "p",
      text: "Symptôme : à la cinquième demande, la personne à l'écran n'est plus tout à fait toi. Chaque passage repart d'une image déjà redessinée, et les petits écarts s'additionnent. Fix concret : garde l'original sous la main et reformule ton prompt depuis la photo d'origine dès que tu changes d'idée.",
    },
    {
      type: "h3",
      id: "erreur-tout-en-un",
      text: "Tout demander dans un seul prompt",
    },
    {
      type: "p",
      text: "Symptôme : tu voulais un fond neutre, un grain d'époque et une veste différente, tu obtiens un résultat moyen sur les trois et tu ne sais pas lequel a cassé le visage. Fix concret : une transformation par message, dans l'ordre qui touche le moins au visage (fond, puis lumière, puis style).",
    },
    {
      type: "h3",
      id: "erreur-photo-de-groupe",
      text: "Partir d'une photo de groupe",
    },
    {
      type: "p",
      text: "Symptôme : sur une photo à cinq, deux visages sont passables et les trois autres sont des inconnus. Plus il y a de monde, plus chaque visage occupe peu de pixels et plus le modèle complète au jugé. Fix concret : recadre sur une ou deux personnes avant d'importer, et garde les photos de groupe pour des transformations légères.",
    },
    {
      type: "h3",
      id: "erreur-photo-proche",
      text: "Publier la photo d'un proche sans lui demander",
    },
    {
      type: "p",
      text: "Symptôme : ta sœur découvre sur Instagram une version d'elle en star des années 80 qu'elle n'a jamais vue. Même pour rire, c'est son image. Fix concret : montre-lui le résultat avant de publier, et pour les enfants, réfléchis deux fois avant de mettre leur visage dans n'importe quel outil en ligne.",
    },
    {
      type: "p",
      text: "Si tu veux aller plus loin que le filtre d'époque et vraiment changer l'esthétique d'une image, je détaille les bonnes pratiques dans [mon article pour changer le style d'une image avec l'IA](/blog/changer-style-image-ia). Et pour un portrait pro sérieux, le guide [portrait IA pour LinkedIn](/blog/portraits-ia-photo-profil-linkedin) va plus loin sur le cadrage et la lumière.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Écrire des prompts qui gardent ce que tu veux garder",
      text: "Dans ma formation IA gratuite, je montre comment écrire un prompt image précis, garder un visage cohérent et choisir le bon outil avant de dépenser quoi que ce soit.",
    },
    {
      type: "p",
      text: "Ce soir, prends une photo de toi nette et de face, et teste un seul prompt du tableau, le portrait années 80 par exemple. Compare avec l'original en plein écran. Si ton visage a tenu, passe au suivant. S'il a bougé, ajoute un détail à la phrase de verrouillage et relance depuis l'original.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 16 novembre 2026 quatre pages d'OpenAI : l'aide « Les images dans ChatGPT », l'aide « Contrôles des données dans ChatGPT », l'aide sur les signaux de provenance et les politiques d'utilisation (version en vigueur au 20 novembre 2026). Trois d'entre elles sont capturées dans l'article.",
        "Les prompts du tableau sont rédigés pour cet article selon la méthode décrite. Les points à surveiller sont des observations courantes sur la retouche par générateur d'images, pas des mesures.",
      ],
      teste: [
        "La lecture des fonctions de modification, de l'éditeur et des photos de référence décrites par l'aide OpenAI",
        "La lecture des réglages d'entraînement, des chats éphémères et des signaux de provenance",
      ],
      nonTeste: [
        "La génération des six prompts sur un compte ChatGPT",
        "La fidélité réelle de ChatGPT Images 2.6 sur un visage d'une retouche à l'autre",
        "Le nombre d'images autorisées par jour avec l'offre gratuite",
      ],
      sources: [
        { label: "Aide OpenAI, les images dans ChatGPT", href: AIDE_IMAGES },
        { label: "Aide OpenAI, contrôles des données dans ChatGPT", href: CONTROLES_DONNEES },
        { label: "Aide OpenAI, signaux de provenance dans les contenus générés", href: PROVENANCE },
        { label: "OpenAI, politiques d'utilisation", href: POLITIQUES },
        { label: "Légifrance, article 9 du Code civil", href: CODE_CIVIL_9 },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-16 -->
