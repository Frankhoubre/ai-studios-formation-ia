import type { Article } from "@/lib/types/article";

export const photoCulinaireIaRestaurant: Article = {
  title: "Photo culinaire IA : ce que ton restaurant peut publier",
  slug: "photo-culinaire-ia-restaurant",
  description:
    "Photo culinaire IA pour un restaurant : la vitrine où Google l'interdit, ce que la loi punit, et la méthode qui rend une vraie photo de plat vendeuse.",
  excerpt:
    "Générer un burger parfait prend deux minutes. Savoir sur quelle vitrine tu as le droit de le publier prend plus longtemps, et c'est exactement là que ça se joue pour un restaurant.",
  category: "business-creatif",
  tags: ["photo culinaire", "restaurant", "photo produit", "commerce local"],
  date: "2026-09-03",
  updatedAt: "2026-09-03",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/photo-culinaire-ia-restaurant.webp",
  imageAlt:
    "Passe en inox d'une cuisine de restaurant en fin de service, assiette dressée posée sur un torchon sous un smartphone monté sur bras articulé, mains du cuisinier posant une herbe à la pince",
  keywords: [
    "photo culinaire ia",
    "photo food ia",
    "photo restaurant ia",
    "visuel plat ia",
    "photo menu livraison",
  ],
  relatedSlugs: [
    "photos-produit-ia-shooting",
    "visuels-publicitaires-ia-convertissent",
    "inpainting-ia-retoucher-image",
  ],
  faq: [
    {
      question:
        "Peut-on mettre une photo de plat générée par IA sur sa fiche Google ?",
      answer:
        "Non, et c'est écrit noir sur blanc. Les conseils de publication de Google pour les contenus multimédias sur Maps demandent d'importer une photo du lieu « que vous avez capturé à l'aide d'un appareil photo », et d'éviter « les montages, les photos retouchées ou autrement manipulées, ou les images créées par des tiers ». Seuls les ajustements stylistiques minimes sont admis, du type correction de rotation ou amélioration de l'éclairage. Google précise aussi que les contenus de mauvaise qualité peuvent être supprimés sans possibilité d'appel. Pour la fiche d'établissement, sors ton téléphone.",
    },
    {
      question:
        "Est-ce légal de vendre un plat avec une photo générée par IA ?",
      answer:
        "Tant que l'image correspond à ce que le client reçoit, aucun texte français ne l'interdit à ma connaissance. Le risque commence quand elle embellit la réalité. L'article L121-2 du code de la consommation qualifie de pratique commerciale trompeuse toute présentation fausse ou de nature à induire en erreur portant sur les caractéristiques essentielles du bien, dont ses qualités substantielles et sa composition. L'article L132-2 prévoit deux ans d'emprisonnement et 300 000 euros d'amende, portés à cinq ans et 750 000 euros quand l'infraction est commise par l'utilisation d'un service de communication en ligne. Une photo de plat vit précisément en ligne.",
    },
    {
      question: "Uber Eats accepte-t-il les photos générées par IA ?",
      answer:
        "Ses règles de photos de menu ne parlent pas d'IA, mais elles imposent que l'image représente fidèlement un article de ta carte, un seul article par photo, cadré au centre, sans personne à part des mains, sans texte ni logo hors emballage. Une image générée aura beaucoup de mal à représenter fidèlement le plat exact que tu envoies. Uber ajoute qu'en publiant tes photos tu garantis en détenir les droits, ce qui devient une question ouverte avec une image générée. En pratique, photographie le plat réel.",
    },
    {
      question:
        "Faut-il préciser qu'une photo de plat a été retouchée par IA ?",
      answer:
        "Je n'ai vu aucune obligation d'étiquetage spécifique aux photos de plats en droit français de la consommation, ni de décision qui tranche le cas. Ce qui compte devant un contrôle, c'est la fidélité de l'image au produit servi. La mention « photo non contractuelle » circule beaucoup dans la restauration, et je la trouve fragile : elle n'efface pas une présentation de nature à induire en erreur, elle signale juste que tu sais qu'il y a un écart. Mieux vaut réduire l'écart que le déclarer.",
    },
    {
      question: "Quels visuels de restaurant l'IA gère-t-elle vraiment bien ?",
      answer:
        "Tout ce qui entoure le plat plutôt que le plat lui-même. Le décor et le fond d'une photo prise sur ta table, les affiches de carte de saison, les visuels de brunch du dimanche, les images d'ambiance pour un site vitrine, les déclinaisons d'un même message aux formats story, feed et A3. Elle gère aussi très bien le nettoyage : une trace de doigt sur le rebord d'assiette, un reflet de plafonnier, une nappe froissée. Le plat lui-même reste la partie que tu photographies.",
    },
    {
      question:
        "Comment photographier un plat correctement au smartphone avant de le retoucher ?",
      answer:
        "Approche la table d'une fenêtre, coupe le flash et coupe la lumière du plafond, qui écrase le relief et vire au jaune. Place la fenêtre sur le côté ou légèrement derrière le plat, jamais dans ton dos. Essuie le rebord de l'assiette. Verrouille la mise au point sur la partie la plus appétissante, prends à hauteur d'assiette pour un burger et à la verticale pour une pizza ou un bol. Fais dix images avec trois angles, et shoote dans les deux minutes qui suivent le dressage, avant que le gras fige.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Générer un burger appétissant prend deux minutes et ne demande aucun talent particulier. Savoir sur quelle vitrine tu as le droit de le publier prend plus longtemps, et c'est là que la plupart des restaurateurs se plantent, en toute bonne foi.",
    },
    {
      type: "p",
      text: "Google a déjà tranché sur la question, et quasiment personne ne va lire la page. Ses conseils de publication pour Maps demandent d'importer une photo du lieu **capturée à l'aide d'un appareil photo**, et d'éviter les montages et les photos retouchées ou autrement manipulées. Ta fiche d'établissement, celle qui amène le plus de couverts, est donc la seule vitrine où une image générée n'a rien à faire.",
    },
    {
      type: "p",
      text: "Reste tout le reste : l'affiche de la carte d'automne, le post du samedi soir, la page de ton site, le menu imprimé. L'IA y fait gagner un temps réel. Une seule contrainte légale s'y applique, et elle ne parle jamais d'intelligence artificielle. Entre le tout-généré et le tout-photo, il existe une voie du milieu que je préfère aux deux : photographier le vrai plat au téléphone, puis laisser l'IA finir le travail.",
    },
    {
      type: "h2",
      id: "trois-vitrines",
      text: "Où ta photo va vivre décide de ce que tu as le droit d'en faire",
    },
    {
      type: "p",
      text: "Un restaurant publie la même image de plat à quatre ou cinq endroits différents. Ces endroits n'ont pas du tout les mêmes règles, et c'est ce détail qui manque à peu près partout quand on parle de photo culinaire IA.",
    },
    {
      type: "table",
      caption:
        "Ce que chaque canal autorise, d'après les règles publiées par les plateformes concernées.",
      headers: [
        "Où la photo est publiée",
        "Statut de l'image générée",
        "Ce que dit la règle",
      ],
      rows: [
        [
          "Fiche Google, photos Maps",
          "Interdite",
          "Photo capturée sur place avec un appareil photo, ajustements minimes seulement",
        ],
        [
          "Plateformes de livraison",
          "Très risquée",
          "L'image doit représenter fidèlement un article de la carte, et tu dois en détenir les droits",
        ],
        [
          "Ton site, ton menu, tes affiches",
          "Autorisée",
          "Aucune règle de plateforme, mais le droit de la consommation s'applique",
        ],
        [
          "Réseaux sociaux, visuels d'ambiance",
          "Autorisée",
          "Zone la plus souple tant que tu ne fais pas passer une image pour une photo du service",
        ],
      ],
    },
    {
      type: "h3",
      id: "google",
      text: "La fiche Google, celle qu'il ne faut pas abîmer",
    },
    {
      type: "p",
      text: "Pour un restaurant de quartier, la fiche d'établissement pèse plus lourd que le site. C'est elle qui apparaît quand quelqu'un cherche à midi et quart, et les photos y occupent la moitié de l'écran.",
    },
    {
      type: "p",
      text: "Les [conseils officiels de Google pour les contenus multimédias sur Maps](https://support.google.com/contributionpolicy/answer/7411351?hl=fr) ferment la porte proprement. Ils demandent d'importer le contenu d'un lieu capturé à l'aide d'un appareil photo, et listent ce qu'il faut éviter : captures d'écran, banques de photos, GIF, montages, photos retouchées ou autrement manipulées, images créées par des tiers. Ils ajoutent que les contenus de mauvaise qualité peuvent être supprimés, sans appel possible.",
    },
    {
      type: "image",
      src: "/images/articles/photo-culinaire-ia-restaurant-google-maps.webp",
      alt: "Page d'aide de Google détaillant les conseils de publication des contenus multimédias sur Maps, avec les sections Contenu et formats et Ajustements stylistiques dépliées",
      caption:
        "Page Conseils pour publier des contenus multimédias sur Maps, centre d'aide Google (support.google.com), capturée le 3 septembre 2026.",
    },
    {
      type: "p",
      text: "La section suivante précise ce qui reste permis : les ajustements stylistiques minimes, du type correction de rotation ou amélioration de l'éclairage. Un filtre léger passe encore, tant que l'image donne un aperçu clair et précis du lieu. On est loin d'un plat entièrement fabriqué.",
    },
    {
      type: "p",
      text: "Détail amusant, Google propose lui-même un outil de génération d'arrière-plans pour les fiches, Product Studio, [réservé aux marchands basés aux États-Unis](https://support.google.com/business/answer/15627395?hl=fr) au moment où j'écris. En France, la question ne se pose donc même pas.",
    },
    {
      type: "h3",
      id: "livraison",
      text: "Les plateformes de livraison, où la fidélité est une condition d'acceptation",
    },
    {
      type: "p",
      text: "Sur Uber Eats, la photo du plat fait office de bouton d'achat. Les [règles pour les photos de menu soumises par le restaurant](https://help.uber.com/en/merchants-and-restaurants/article/store-submitted-menu-photo-guidelines?nodeId=0ad2da19-95e9-47d0-9db4-d7ddb346c357) commencent par une exigence simple : l'image doit représenter fidèlement un article de ta carte Uber Eats.",
    },
    {
      type: "image",
      src: "/images/articles/photo-culinaire-ia-restaurant-ubereats.webp",
      alt: "Page d'aide Uber listant les règles des photos de menu soumises par les restaurants, avec les rubriques Images must, Images cannot et File requirements",
      caption:
        "Page Store submitted menu photo guidelines, centre d'aide Uber pour les commerçants (help.uber.com), capturée le 3 septembre 2026.",
    },
    {
      type: "p",
      text: "Le reste de la liste refroidit vite les envies de génération : un seul article par image, cadrage centré, ratio entre 5:4 et 6:4, pas de personne à part des mains, pas de flou, pas d'ombres dures, pas de texte ni de logo en dehors de l'emballage vendu. Uber demande aussi que tu détiennes les droits sur les images que tu envoies, ce qui devient une question inconfortable dès qu'un modèle est passé par là.",
    },
    {
      type: "p",
      text: "Aucune de ces lignes ne mentionne l'intelligence artificielle. Elles n'en ont pas besoin. Une image générée qui reproduirait exactement ton pad thaï, avec tes cacahuètes et ta barquette, tient de l'exploit.",
    },
    {
      type: "h2",
      id: "ce-que-la-loi-regarde",
      text: "Ce que la loi française regarde dans une photo de plat",
    },
    {
      type: "p",
      text: "Le droit de la consommation se moque de savoir si tu as utilisé un reflex, Lightroom ou un modèle de diffusion. Il regarde l'écart entre l'image et l'assiette.",
    },
    {
      type: "p",
      text: "L'[article L121-2 du code de la consommation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114) qualifie de pratique commerciale trompeuse celle qui repose sur des allégations, indications ou présentations fausses ou de nature à induire en erreur portant sur les caractéristiques essentielles du bien, à savoir ses qualités substantielles, sa composition, ses accessoires, son origine, sa quantité. Une photo est une présentation. Le nombre de crevettes affichées relève de la quantité.",
    },
    {
      type: "p",
      text: "Les peines de l'[article L132-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049532070) sont de deux ans d'emprisonnement et 300 000 euros d'amende, dans sa version en vigueur depuis le 12 mai 2024. Le même article ajoute que si l'infraction a été commise par l'utilisation d'un service de communication au public en ligne ou par le biais d'un support numérique, les peines passent à cinq ans et 750 000 euros. Une photo de plat sur une application de livraison coche cette case par construction.",
    },
    {
      type: "p",
      text: "Je précise, parce que la lecture rapide fait dire n'importe quoi à ce genre de texte : personne ne va en prison pour un burger un peu trop brillant. Ce qui engage ta responsabilité, c'est la distance entre ce que le client voit et ce qu'il reçoit. L'outil employé n'entre nulle part dans le calcul. Et l'IA creuse cette distance très vite, y compris quand personne ne cherche à tricher.",
    },
    {
      type: "p",
      text: "Quant à la mention « photo non contractuelle » qu'on voit partout dans la restauration, je la trouve rassurante à peu de frais. Elle admet surtout qu'un écart existe, sans neutraliser une présentation de nature à induire en erreur. Autant réduire l'écart.",
    },
    {
      type: "h2",
      id: "methode",
      text: "La méthode qui marche : photographier vrai, laisser l'IA finir",
    },
    {
      type: "p",
      text: "Voilà le workflow que je conseille aux restaurateurs qui me posent la question. Compte dix minutes par plat, il passe sur tous les canaux, fiche Google comprise, et il donne de meilleurs résultats qu'une génération partie de zéro.",
    },
    {
      type: "h3",
      id: "etape-1-shooter",
      text: "1. Photographier le plat au téléphone, correctement",
    },
    {
      type: "p",
      text: "Approche la table d'une fenêtre et coupe tout le reste. Le flash aplatit les volumes et fait briller la sauce comme du vernis. Les spots du plafond tirent vers le jaune et creusent des ombres sous les rebords d'assiette.",
    },
    {
      type: "p",
      text: "Place la source lumineuse sur le côté du plat, ou légèrement derrière lui. La lumière de trois quarts arrière détache la vapeur, fait briller un glaçage et donne du relief à une croûte. C'est le réglage classique de la photo culinaire, et un téléphone posé sur deux livres le reproduit très bien.",
    },
    {
      type: "ul",
      items: [
        "Essuie le rebord de l'assiette avec un chiffon avant de déclencher, c'est la retouche la moins chère du monde.",
        "Photographie dans les deux minutes qui suivent le dressage, avant que le gras fige et que la salade tombe.",
        "Verrouille la mise au point en appuyant sur la partie la plus appétissante, puis baisse légèrement l'exposition.",
        "Fais dix images plutôt qu'une, en changeant d'angle entre chaque.",
        "Garde du vide autour du plat, tu recadreras au bon ratio ensuite selon la plateforme.",
      ],
    },
    {
      type: "h3",
      id: "etape-2-nettoyer",
      text: "2. Nettoyer, sans inventer",
    },
    {
      type: "p",
      text: "La retouche locale, elle, ne te fait courir aucun risque. Effacer une trace de doigt, une miette égarée, un reflet de plafonnier ou une prise électrique au fond du cadre ne change rien à ce que le client va manger.",
    },
    {
      type: "p",
      text: "Un pinceau de retouche générative fait ça en quelques secondes. Le principe et les réglages sont détaillés dans notre guide de l'[inpainting pour retoucher une image](/blog/inpainting-ia-retoucher-image), et la logique reste la même sur un plat : on répare le contexte, on ne redessine pas le sujet.",
    },
    {
      type: "p",
      text: "Ajouter deux gambas qui n'étaient pas dans l'assiette, en revanche, te fait basculer du côté des caractéristiques essentielles, quantité et composition comprises. La ligne rouge passe entre les deux gestes, et elle est nette.",
    },
    {
      type: "h3",
      id: "etape-3-decor",
      text: "3. Remplacer le décor, garder le plat",
    },
    {
      type: "p",
      text: "C'est là que l'IA fait vraiment gagner de l'argent. Ton plat photographié sur une table en formica sous des néons peut se retrouver sur un plan de travail en chêne, avec une nappe de lin et une lumière de fin d'après-midi.",
    },
    {
      type: "p",
      text: "Le principe est identique à celui des [photos de produit qui remplacent un shooting](/blog/photos-produit-ia-shooting) : tu détoures le sujet réel, tu génères le décor, tu recolles avec une ombre portée cohérente. La méthode de détourage propre est décrite dans notre article sur [supprimer le fond d'une image](/blog/detourer-supprimer-fond-ia).",
    },
    {
      type: "p",
      text: "Une seule vérification compte au moment de recoller : l'ombre du plat doit tomber du même côté que la lumière du décor généré. C'est l'erreur qui trahit un montage en une demi-seconde, bien avant les textures.",
    },
    {
      type: "p",
      text: "Pour les prompts de décor, décris la lumière plutôt que l'ambiance. « Fin d'après-midi, fenêtre à gauche, ombres longues et douces » donne un résultat exploitable là où « chaleureux et convivial » donne du beige. Le vocabulaire complet est dans notre article sur [décrire la lumière dans un prompt](/blog/decrire-lumiere-prompt-ia).",
    },
    {
      type: "h3",
      id: "etape-4-decliner",
      text: "4. Décliner en affiches et en posts",
    },
    {
      type: "p",
      text: "Une fois la photo propre, la partie répétitive commence : l'ardoise du midi, le visuel de la nouvelle carte, le post de la soirée du jeudi, le flyer de la boîte aux lettres. Tout ça, c'est de la mise en page, et l'IA la produit en série.",
    },
    {
      type: "p",
      text: "Le texte lisible reste le point faible historique des générateurs. Les modèles typographiques comme Ideogram s'en sortent nettement mieux, on en parle dans notre guide du [texte lisible dans une image IA](/blog/ideogram-texte-lisible-images-ia). Pour un prix ou un horaire, je continue de conseiller d'ajouter le texte par-dessus dans un outil de mise en page. Une virgule mal placée dans un tarif, ça se voit.",
    },
    {
      type: "p",
      text: "Le reste du raisonnement publicitaire, hiérarchie du message et accroche, vaut pour un restaurant comme pour n'importe quelle marque locale : notre article sur les [visuels publicitaires qui convertissent](/blog/visuels-publicitaires-ia-convertissent) couvre cette partie.",
    },
    {
      type: "h2",
      id: "angles",
      text: "L'angle qui vend dépend de la hauteur du plat",
    },
    {
      type: "p",
      text: "Un burger photographié du dessus devient un rond de pain. Une pizza photographiée de profil devient une ligne. Voilà les repères que j'utilise, issus de la pratique et d'aucune norme.",
    },
    {
      type: "table",
      caption:
        "Repères de cadrage issus de la production, à ajuster selon ta vaisselle.",
      headers: ["Type de plat", "Angle", "Pourquoi"],
      rows: [
        [
          "Pizza, bol, plateau, tarte",
          "Vue du dessus, à la verticale",
          "La composition circulaire se lit d'un coup, aucun premier plan ne masque le reste",
        ],
        [
          "Assiette dressée, pâtes, salade",
          "45 degrés",
          "L'angle de la personne assise, avec du volume et un peu de table derrière",
        ],
        [
          "Burger, tiramisu, verrine, mille-feuille",
          "Hauteur d'assiette, presque à niveau",
          "Les couches sont l'argument de vente, elles disparaissent vue du dessus",
        ],
        [
          "Cocktail, café, boisson",
          "Légèrement au-dessus du niveau du liquide",
          "On garde la transparence du verre et la mousse en surface",
        ],
        [
          "Plat à partager, table complète",
          "Vue du dessus, grand angle",
          "L'abondance devient le sujet, les mains ajoutent l'échelle",
        ],
      ],
    },
    {
      type: "p",
      text: "Sur la livraison, ajoute une contrainte : ta photo apparaîtra en petite vignette, coincée dans une liste où défilent des dizaines de concurrents. Le plat doit remplir le cadre et rester lisible sans zoomer. Les compositions aérées avec beaucoup de nappe disparaissent à cette taille.",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Ce que les modèles ratent encore sur la nourriture",
    },
    {
      type: "p",
      text: "La cuisine reste un sujet difficile pour un générateur d'images, plus difficile qu'un portrait, de mon expérience. Elle demande de la physique, et la physique reste le point faible.",
    },
    {
      type: "ul",
      items: [
        "La vapeur. Elle sort en volutes trop régulières, souvent de la mauvaise zone du plat, et elle ne se disperse pas dans le bon sens.",
        "Le fromage qui file. Les filaments partent dans le vide au lieu de suivre la gravité, et se terminent nulle part.",
        "Les glaçons et la condensation. La réfraction à travers le verre part vite en vrille, et les gouttes se ressemblent toutes.",
        "Les couverts et les mains. Un couteau qui traverse une assiette, un pouce à deux articulations, ça arrive encore souvent.",
        "Le compte. Six raviolis au lieu de cinq, une portion qui ne correspond plus à ce que tu vends, et te voilà du mauvais côté de la ligne.",
        "La cohérence entre le plat et la vaisselle. Tu ressors avec de la céramique artisanale sombre presque à tous les coups, même quand tu sers dans des assiettes blanches standard.",
      ],
    },
    {
      type: "p",
      text: "La faute la plus coûteuse n'a rien de technique : générer un plat qui n'existe pas exactement à ta carte. Ça arrive vite quand on demande « burger gourmet » à un modèle et qu'on récupère une brioche avec du cheddar fondu et du bacon, alors que tu sers un pain aux graines sans bacon. Le client compare à l'arrivée.",
    },
    {
      type: "p",
      text: "Si tu veux entraîner l'œil sur ces défauts, la liste des marqueurs habituels est développée dans notre article sur [reconnaître une image générée par IA](/blog/detecter-image-generee-ia).",
    },
    {
      type: "h2",
      id: "premier-chantier",
      text: "Par où commencer cette semaine",
    },
    {
      type: "p",
      text: "Ouvre ta fiche Google et regarde tes cinq photos les plus visibles. Si l'une d'elles vient d'une banque d'images ou d'un générateur, remplace-la par une photo prise à la fenêtre pendant le service. C'est la correction qui a le plus d'effet, et elle ne coûte rien.",
    },
    {
      type: "p",
      text: "Prends ensuite les trois plats qui font ton chiffre. Photographie-les au téléphone selon les repères d'angle ci-dessus, nettoie les traces, et garde ces fichiers propres comme base de tout le reste. Les décors générés, les affiches et les posts viendront tous de là, et tu ne remettras le nez dedans qu'au changement de carte.",
    },
    {
      type: "p",
      text: "Le jour où un client te dira que c'est exactement comme sur la photo, tu sauras que la méthode a tenu. C'est un compliment plus rare qu'on ne le croit dans la restauration.",
    },
    {
      type: "p",
      text: "Note de fondateur : j'ai longtemps cru que le sujet des visuels de commerce local était un problème d'outil. C'est un problème de canal. Une même image peut être parfaite sur un flyer et hors la loi sur une fiche Google, et personne ne prévient. La formation IA gratuite d'AI Studios insiste beaucoup là-dessus, savoir où le visuel atterrit avant de savoir avec quoi le fabriquer.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-03 -->
