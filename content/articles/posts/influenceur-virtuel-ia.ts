import type { Article } from "@/lib/types/article";

export const influenceurVirtuelIa: Article = {
  title: "Influenceur virtuel IA : la méthode et la loi",
  slug: "influenceur-virtuel-ia",
  description:
    "Créer un influenceur virtuel IA : visage stable, voix, et la mention « Images virtuelles » que la loi française impose dès le premier partenariat.",
  excerpt:
    "Le visage stable, tu l'obtiens en deux jours. Lui trouver une voix, un rythme de publication et la mention « Images virtuelles » qu'impose la loi française, c'est le reste du travail.",
  category: "ia-image",
  tags: ["influenceur virtuel", "personnage IA", "réseaux sociaux", "droit"],
  date: "2026-08-30",
  updatedAt: "2026-08-30",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/influenceur-virtuel-ia.webp",
  imageAlt:
    "Studio photo vide, fond blanc et éclairage installé autour d'une marque au sol inoccupée, un assistant accroupi règle un pied de projecteur",
  keywords: [
    "influenceur virtuel ia",
    "influenceur ia instagram",
    "creer influenceur virtuel",
    "personnage ia coherent",
    "mention images virtuelles",
  ],
  relatedSlugs: [
    "personnage-coherent-ia",
    "lora-entrainer-style-visage",
    "stabilite-personnage-multi-plans",
  ],
  faq: [
    {
      question: "Faut-il déclarer qu'un influenceur virtuel est généré par IA ?",
      answer:
        "En France, oui, dès qu'il y a de l'argent. L'article 5 de la loi du 9 juin 2023 impose la mention « Images virtuelles » sur tout contenu d'influence commerciale comprenant des images produites par un procédé d'intelligence artificielle pour représenter un visage ou une silhouette. La mention doit être claire, lisible et compréhensible, sur tout support utilisé. Tu peux l'adapter au format, du moment qu'elle reste visible. Tant que ton personnage ne rapporte rien et ne promeut rien, tu es hors du champ de l'article 1er, qui vise les personnes mobilisant leur notoriété à titre onéreux.",
    },
    {
      question: "Que risque-t-on si on oublie la mention « Images virtuelles » ?",
      answer:
        "Le III de l'article 5 prévoit un an d'emprisonnement et 4 500 euros d'amende. C'est le texte, pas une estimation. En pratique, le sujet du contrôle reste ouvert : le décret d'application publié le 30 mars 2026 (décret n° 2026-233) porte sur le II de l'article 5, celui qui concerne la promotion des formations professionnelles financées, pas sur les mentions d'images. Le risque immédiat le plus concret vient plutôt de la marque avec qui tu travailles, qui a son propre service juridique et ne signera pas une campagne exposée.",
    },
    {
      question: "Combien de temps faut-il pour lancer un influenceur virtuel ?",
      answer:
        "Compte une semaine pour avoir un visage qui tient, et un mois avant de pouvoir montrer quelque chose à une marque. La planche de référence et le verrouillage du visage se font en deux ou trois jours si tu as déjà l'habitude des modèles image. Ce qui prend le reste du temps, c'est de publier assez pour prouver que le personnage tient la distance. Un compte avec six publications ne se vend pas, quelle que soit la qualité des images.",
    },
    {
      question: "Quel outil pour garder le même visage sur toutes les images ?",
      answer:
        "Les références de personnage intégrées aux modèles récents, où tu fournis une ou plusieurs images de départ, suffisent pour du portrait cadré serré et se mettent en place en quelques minutes. L'entraînement d'un LoRA dédié demande plus de travail et un jeu d'images propre, mais c'est le seul moyen de tenir un visage sur des angles inhabituels, en pied ou de profil. Commence par la référence, passe au LoRA quand tu vois la mâchoire dériver.",
    },
    {
      question: "Un influenceur virtuel peut-il vraiment gagner de l'argent ?",
      answer:
        "Certains oui, et pas ceux qu'on croit. Lu do Magalu, personnage du distributeur brésilien Magazine Luiza, existe depuis 2003 selon la fiche de cas d'Ogilvy, qui la présente comme la voix du site de commerce de l'enseigne avant d'être un compte social primé d'un Lion d'or à Cannes. C'est une mascotte de marque avec un travail précis à faire. Les revenus qui circulent sur les comptes de type Lil Miquela viennent d'estimations d'agences et de presse, jamais de comptes audités : traite-les comme des ordres de grandeur.",
    },
    {
      question:
        "Vaut-il mieux un compte séparé ou intégrer le personnage à sa marque ?",
      answer:
        "Intégré, dans presque tous les cas, si tu as déjà une marque. Un personnage rattaché à une entreprise a une raison d'exister, un catalogue à montrer et une audience qui arrive toute seule. Un compte autonome doit construire son audience de zéro, avec un personnage dont tout le monde sait qu'il est synthétique, ce qui est le plus dur des deux exercices. Le compte séparé se justifie quand le personnage porte une ligne éditoriale que ta marque ne peut pas porter elle-même.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu génères une dizaine de portraits de ton personnage, tu en gardes quatre, et en les alignant tu vois que ce n'est pas la même personne. Le nez a bougé, la mâchoire aussi, et de profil c'est carrément quelqu'un d'autre. Ce mur-là se franchit en deux jours. Le suivant est plus coriace : tenir ce visage sur six mois de publications, lui donner une voix, et trouver quelqu'un pour payer.",
    },
    {
      type: "p",
      text: "Cinq briques à monter dans l'ordre : identité, visage, voix, production, conformité. Chacune lâche à un endroit différent, et il suffit de quatre erreurs pour tuer un compte avant son premier partenariat.",
    },
    {
      type: "p",
      text: "Et il y a un point que les guides francophones laissent presque toujours de côté : depuis la loi du 9 juin 2023, un contenu d'influence commerciale montrant un visage produit par IA doit porter la mention « Images virtuelles ». Le modèle qui consiste à faire passer ton personnage pour une vraie personne est hors la loi en France dès le premier post sponsorisé. Autant le savoir avant de construire dessus.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce que tu fabriques vraiment",
    },
    {
      type: "h3",
      id: "le-visage-partie-facile",
      text: "Le visage est la partie facile",
    },
    {
      type: "p",
      text: "La cohérence faciale est aujourd'hui un problème réglé. Les références de personnage intégrées aux modèles image récents tiennent très bien un portrait cadré serré à partir d'une seule photo de départ. Pour les angles difficiles, le pied, le profil, les cadrages larges, un LoRA entraîné sur une trentaine d'images fait le reste.",
    },
    {
      type: "p",
      text: "Ce qui coince, c'est ce que personne ne pense à verrouiller. La lumière, d'abord : deux publications éclairées différemment donnent l'impression de deux personnes, même avec un visage parfaitement identique. Le grain ensuite, puis la colorimétrie. Un compte crédible tient autant à la constance de son rendu qu'à celle de son modèle.",
    },
    {
      type: "p",
      text: "Tout se complique quand le personnage doit dire quelque chose. Un visage stable qui publie des poses vides donne un catalogue de photos que personne ne suit. À ce stade tu n'as plus un problème d'image, tu as un problème d'écriture, et aucun modèle ne le résout à ta place.",
    },
    {
      type: "h3",
      id: "mention-images-virtuelles",
      text: "Ce que la loi française t'oblige à afficher",
    },
    {
      type: "p",
      text: "L'article 1er de la loi n° 2023-451 définit l'influence commerciale comme le fait, à titre onéreux, de mobiliser sa notoriété auprès de son audience pour promouvoir des biens, des services ou une cause. Le déclencheur, c'est la rémunération. Un compte personnel qui ne vend rien reste en dehors.",
    },
    {
      type: "p",
      text: "Dès que tu rentres dedans, le 2° du I de l'[article 5 de cette loi](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000050468897) s'applique : les contenus comprenant des images produites par un procédé d'intelligence artificielle visant à représenter un visage ou une silhouette sont accompagnés de la mention « Images virtuelles ». Le texte précise qu'elle doit être claire, lisible et compréhensible sur tout support utilisé. Tu peux adapter la formulation au format, à condition qu'une mention reste visible. La sanction prévue au III est d'un an d'emprisonnement et 4 500 euros d'amende.",
    },
    {
      type: "p",
      text: "Le décret d'application paru le 30 mars 2026 concerne le II de l'article 5, celui des formations professionnelles financées, et pas les mentions d'images. Quant à la ligne du gouvernement, il l'a donnée au Sénat le 30 avril 2026, en [réponse à une question écrite sur la transparence de l'IA dans les images publicitaires](https://www.senat.fr/questions/base/2026/qSEQ26041070S.html) : la priorité va à l'application de l'article 50 du règlement européen sur l'IA, qui impose une identification visible des contenus générés, plutôt qu'à un nouveau texte français.",
    },
    {
      type: "p",
      text: "Construis donc ton personnage en supposant que tout le monde saura qu'il est synthétique. Meta va dans ce sens depuis mai 2024, avec son étiquette de contenu généré sur Facebook et Instagram, appliquée soit par détection de signaux techniques, soit sur déclaration de l'auteur.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Construire le personnage en cinq briques",
    },
    {
      type: "p",
      text: "L'ordre compte plus que les outils. La plupart des comptes qui s'arrêtent au bout de trois semaines ont commencé par le visage, se sont retrouvés avec une belle inconnue, et n'ont jamais su quoi lui faire dire. La fiche d'identité passe avant la première image.",
    },
    {
      type: "table",
      caption:
        "Les cinq briques d'un influenceur virtuel, ce que chacune produit et ce qui lâche en premier.",
      headers: [
        "Brique",
        "Ce que tu produis",
        "Ce qui lâche en premier",
        "À refaire quand",
      ],
      rows: [
        [
          "Identité",
          "Une fiche de 15 lignes : âge, métier, ville, obsessions, et 3 choses qu'il refuse de faire",
          "Rien, tant que tu la relis avant chaque publication",
          "Changement de positionnement",
        ],
        [
          "Visage",
          "20 à 30 portraits de référence, face, trois quarts, profil, en lumière dure et douce",
          "La mâchoire et les oreilles, dès qu'on sort du cadrage serré",
          "Changement de modèle image",
        ],
        [
          "Voix",
          "Un échantillon cloné ou une voix de bibliothèque, avec un débit noté et fixé",
          "Le débit, qui dérive d'une vidéo à l'autre sans que tu le remarques",
          "Changement d'outil de synthèse",
        ],
        [
          "Production",
          "Un gabarit de post : cadrage, schéma de lumière, palette, format de légende",
          "La lumière, qui trahit le montage plus vite que le visage",
          "Changement de saison, de décor ou de plateforme",
        ],
        [
          "Conformité",
          "La mention « Images virtuelles » intégrée au gabarit, plus l'emplacement de la mention de partenariat",
          "Rien si c'est dans le gabarit, tout si tu l'ajoutes à la main",
          "Changement de format de publication",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Écris la fiche d'identité avant la première image. Les trois refus sont la partie utile : c'est ce qui empêche le personnage de dire n'importe quoi six mois plus tard.",
        "Génère la planche de référence, une vingtaine de portraits du même visage sous tous les angles, et jette tout ce qui te fait hésiter.",
        "Verrouille le visage avec une référence de personnage ou un LoRA, puis teste-le sur cinq décors que tu n'as jamais utilisés.",
        "Fixe la voix et son débit une bonne fois, et range l'échantillon dans le même dossier que la planche de référence.",
        "Construis un gabarit de publication qui contient déjà la mention légale et l'emplacement de la mention de partenariat.",
        "Publie une vingtaine de fois avant de démarcher la moindre marque.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde une image de contrôle, toujours la même, un portrait neutre en lumière douce sur fond gris. À chaque changement de modèle, de LoRA ou de réglage, tu la régénères et tu la compares à l'originale côte à côte. Dix secondes de vérification, et c'est le seul moyen de repérer une dérive de visage avant qu'elle ne soit déjà dans trente publications.",
    },
    {
      type: "p",
      text: "La technique pure a déjà son mode d'emploi ailleurs sur le blog. Pour les bases, la méthode pour obtenir un [personnage cohérent d'une image à l'autre](/blog/personnage-coherent-ia) couvre les références et les seeds. Quand la référence ne suffit plus, l'entraînement d'un [LoRA sur un visage](/blog/lora-entrainer-style-visage) est l'étape d'après. Et dès que ton personnage apparaît dans plusieurs plans d'une même vidéo, ce sont les problèmes de [stabilité multi-plans](/blog/stabilite-personnage-multi-plans) qui prennent le relais.",
    },
    {
      type: "p",
      text: "Côté voix et vidéo, le choix se joue entre le clonage vocal et les avatars parlants selon ce que tu publies. Le [guide ElevenLabs en français](/blog/elevenlabs-guide-complet) détaille la direction de lecture, qui est un métier à part entière, et le [guide des avatars HeyGen](/blog/heygen-guide-avatars) couvre le cas où ton personnage doit parler face caméra pendant deux minutes.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les erreurs qui coûtent le plus cher",
    },
    {
      type: "h3",
      id: "erreur-sosie-humain",
      text: "Erreur 1 : viser le sosie d'humain",
    },
    {
      type: "p",
      text: "Ton personnage est une jolie personne de 24 ans qui pose dans des cafés, et tu ne saurais pas dire en une phrase ce qu'elle apporte à qui que ce soit. C'est la version la plus copiée du format, et c'est aussi celle que la mention légale rend inconfortable, puisque tout son intérêt reposait sur l'ambiguïté.",
    },
    {
      type: "p",
      text: "Fix concret : donne un travail à ton personnage. Lu do Magalu, la mascotte du distributeur brésilien Magazine Luiza, est née en 2003 comme voix du site de commerce de l'enseigne d'après la [fiche de cas publiée par Ogilvy](https://www.ogilvy.com/work/lu-magalu), et c'est devenu l'un des comptes de marque les plus suivis au monde, primé d'un Lion d'or à Cannes. Personne n'a jamais cru qu'elle était humaine, et ça n'a jamais posé de problème.",
    },
    {
      type: "h3",
      id: "erreur-visage-avant-ecriture",
      text: "Erreur 2 : verrouiller le visage avant d'avoir écrit une ligne",
    },
    {
      type: "p",
      text: "Tu passes trois jours sur un LoRA magnifique, tu publies quatre images, et tu sèches. Le personnage n'a pas d'opinion, et donc aucune raison de parler. Tu te retrouves à écrire des légendes génériques sur un visage verrouillé que tu n'as plus envie de changer, justement parce qu'il t'a coûté trois jours.",
    },
    {
      type: "p",
      text: "Fix concret : écris vingt légendes avant de générer la première image. Si tu tiens vingt sujets, tu as un personnage. Si tu bloques à sept, ton angle est trop étroit et il vaut mieux le découvrir maintenant.",
    },
    {
      type: "h3",
      id: "erreur-mention-apres-coup",
      text: "Erreur 3 : ajouter la mention légale après coup",
    },
    {
      type: "p",
      text: "La mention arrive au moment du premier partenariat, sur une charte graphique qui n'a pas été pensée pour elle. Elle finit en petit gris sur fond clair, illisible, ou noyée en fin de légende. Le texte demande une mention claire, lisible et compréhensible sur tout support utilisé, ce qui inclut les formats verticaux et les vidéos courtes.",
    },
    {
      type: "p",
      text: "Fix concret : intègre la mention au gabarit dès la première publication, avant même d'avoir un partenariat en vue. Une zone réservée en bas de cadre, dans une couleur qui tient sur toutes tes images, et le sujet est réglé pour de bon. Les comptes qui assument leur nature dès le départ n'ont jamais ce problème.",
    },
    {
      type: "h3",
      id: "erreur-audience-sans-offre",
      text: "Erreur 4 : faire grossir un compte qui ne vend rien",
    },
    {
      type: "p",
      text: "Six mois de publications régulières, une audience correcte, et zéro euro. Le compte existe, il ne sert à rien. C'est le scénario le plus fréquent chez ceux qui traitent l'influenceur virtuel comme un exercice technique plutôt que comme un produit.",
    },
    {
      type: "p",
      text: "Fix concret : décide de ce que le personnage vend avant de le créer. Un catalogue, une formation, une prestation, un abonnement, peu importe, mais quelque chose. Si tu veux plutôt vendre le personnage lui-même comme service à des marques, l'économie change et se rapproche de celle de la [production de vidéos IA à la commande](/blog/vendre-videos-ia).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Faut-il déclarer qu'un influenceur virtuel est généré par IA ?",
    },
    {
      type: "p",
      text: "En France, oui, dès qu'il y a de l'argent. L'article 5 de la loi du 9 juin 2023 impose la mention « Images virtuelles » sur tout contenu d'influence commerciale comprenant des images produites par un procédé d'intelligence artificielle pour représenter un visage ou une silhouette. La mention doit être claire, lisible et compréhensible, sur tout support utilisé. Tu peux l'adapter au format, du moment qu'elle reste visible. Tant que ton personnage ne rapporte rien et ne promeut rien, tu es hors du champ de l'article 1er, qui vise les personnes mobilisant leur notoriété à titre onéreux.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Que risque-t-on si on oublie la mention « Images virtuelles » ?",
    },
    {
      type: "p",
      text: "Le III de l'article 5 prévoit un an d'emprisonnement et 4 500 euros d'amende. C'est le texte, pas une estimation. En pratique, le sujet du contrôle reste ouvert : le décret d'application publié le 30 mars 2026 (décret n° 2026-233) porte sur le II de l'article 5, celui qui concerne la promotion des formations professionnelles financées, pas sur les mentions d'images. Le risque immédiat le plus concret vient plutôt de la marque avec qui tu travailles, qui a son propre service juridique et ne signera pas une campagne exposée.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien de temps faut-il pour lancer un influenceur virtuel ?",
    },
    {
      type: "p",
      text: "Compte une semaine pour avoir un visage qui tient, et un mois avant de pouvoir montrer quelque chose à une marque. La planche de référence et le verrouillage du visage se font en deux ou trois jours si tu as déjà l'habitude des modèles image. Ce qui prend le reste du temps, c'est de publier assez pour prouver que le personnage tient la distance. Un compte avec six publications ne se vend pas, quelle que soit la qualité des images.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Quel outil pour garder le même visage sur toutes les images ?",
    },
    {
      type: "p",
      text: "Les références de personnage intégrées aux modèles récents, où tu fournis une ou plusieurs images de départ, suffisent pour du portrait cadré serré et se mettent en place en quelques minutes. L'entraînement d'un LoRA dédié demande plus de travail et un jeu d'images propre, mais c'est le seul moyen de tenir un visage sur des angles inhabituels, en pied ou de profil. Commence par la référence, passe au LoRA quand tu vois la mâchoire dériver.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Un influenceur virtuel peut-il vraiment gagner de l'argent ?",
    },
    {
      type: "p",
      text: "Certains oui, et pas ceux qu'on croit. Lu do Magalu, personnage du distributeur brésilien Magazine Luiza, existe depuis 2003 selon la fiche de cas d'Ogilvy, qui la présente comme la voix du site de commerce de l'enseigne avant d'être un compte social primé d'un Lion d'or à Cannes. C'est une mascotte de marque avec un travail précis à faire. Les revenus qui circulent sur les comptes de type Lil Miquela viennent d'estimations d'agences et de presse, jamais de comptes audités : traite-les comme des ordres de grandeur.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Vaut-il mieux un compte séparé ou intégrer le personnage à sa marque ?",
    },
    {
      type: "p",
      text: "Intégré, dans presque tous les cas, si tu as déjà une marque. Un personnage rattaché à une entreprise a une raison d'exister, un catalogue à montrer et une audience qui arrive toute seule. Un compte autonome doit construire son audience de zéro, avec un personnage dont tout le monde sait qu'il est synthétique, ce qui est le plus dur des deux exercices. Le compte séparé se justifie quand le personnage porte une ligne éditoriale que ta marque ne peut pas porter elle-même.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Par où commencer cette semaine",
    },
    {
      type: "p",
      text: "Ouvre un document et écris les quinze lignes de la fiche d'identité, dont les trois refus. Ça prend vingt minutes et ça t'apprend tout de suite si ton idée tient : un personnage dont tu n'arrives pas à écrire ce qu'il refuse de faire est un personnage sans point de vue, et il le restera après trois cents images.",
    },
    {
      type: "p",
      text: "Ensuite, avant de toucher au moindre modèle, écris vingt légendes. C'est le test le plus rapide, le moins coûteux, et celui que presque personne ne fait. Le visage, tu l'auras en deux jours quand tu voudras.",
    },
    {
      type: "p",
      text: "Note de fondateur : je vois passer beaucoup de comptes techniquement impeccables et vides. Le personnage qui dure est celui à qui on a donné un travail avant de lui donner un visage, et c'est exactement l'ordre qu'on suit sur les projets de la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-30 -->
