import type { Article } from "@/lib/types/article";

export const bandeAnnonceIa: Article = {
  title: "Bande-annonce IA : 90 secondes, 40 plans, la méthode",
  slug: "bande-annonce-ia",
  description:
    "Monter une bande-annonce avec l'IA : le conducteur en cinq blocs, les 40 plans à générer, la durée plafond imposée par la MPA et le budget réel calculé.",
  excerpt:
    "Une bande-annonce de 90 secondes demande une quarantaine de plans aux durées très inégales. Le conducteur en cinq blocs, le nombre de plans par bloc, le coût réel calculé sur les tarifs Veo, et les deux plafonds que le métier s'impose à lui-même : une durée maximale et un niveau sonore maximal.",
  category: "workflow-creatif",
  tags: [
    "bande annonce ia",
    "trailer ia",
    "montage",
    "veo",
    "son",
    "cinéma ia",
  ],
  date: "2026-09-24",
  updatedAt: "2026-09-24",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/bande-annonce-ia.webp",
  imageAlt:
    "Auditorium de mixage en fin de soirée, ingénieure du son en cardigan gris assise seule à une large console de mixage au milieu des rangées de fauteuils rouges, faders éclairés par le bas, unité de mesure de niveau sonore posée dans un rack à côté d'elle, petit écran de projection au fond montrant une image marine sombre et floue, une lampe de bureau chaude comme seule autre source de lumière",
  keywords: [
    "bande annonce ia",
    "trailer ia",
    "créer une bande annonce avec l'ia",
    "montage bande annonce",
    "durée bande annonce",
    "bande annonce court métrage",
  ],
  relatedSlugs: [
    "creer-film-ia",
    "structure-3-actes-video-ia",
    "suno-guide-complet",
  ],
  faq: [
    {
      question: "Quelle durée pour une bande-annonce ?",
      answer:
        "Le plafond professionnel est de 2 minutes 30, la longueur maximale autorisée par la MPA, chaque studio ou distributeur ayant le droit de le dépasser une fois par an. En janvier 2014, l'association des exploitants de salles américaines a adopté une recommandation plus courte encore, 2 minutes, applicable aux films sortis à partir du 1er octobre 2014, avec deux dérogations annuelles par studio. Pour une bande-annonce IA diffusée en ligne ou envoyée à un festival, 90 secondes est un meilleur objectif de travail : tu restes sous les deux plafonds et tu gardes le spectateur jusqu'au carton final.",
    },
    {
      question: "Combien de plans faut-il pour une bande-annonce de 90 secondes ?",
      answer:
        "Entre 32 et 48 selon le genre, avec le découpage en cinq blocs décrit dans cet article. La moyenne n'a aucun intérêt prise seule, parce que les durées sont très inégales : le plan d'accroche peut tenir 8 secondes, ceux du bloc de montée descendent sous la seconde. Douze plans de sept secondes collés bout à bout produisent une compilation d'images. Le rythme, lui, vient de l'écart entre les blocs.",
    },
    {
      question: "Combien coûte une bande-annonce générée avec l'IA ?",
      answer:
        "À partir des tarifs publics de l'API Gemini relevés le 24 septembre 2026, Veo 3.1 Fast est facturé 0,12 $ la seconde générée en 1080p, et Veo 3.1 standard 0,40 $. Comme la facturation porte sur la seconde générée et pas sur la seconde gardée, il faut compter le taux de rebut : 40 plans retenus à trois tentatives de 8 secondes chacun font 960 secondes facturées, soit environ 115 $ en Fast 1080p et 384 $ en standard. Le montage, la musique et l'étalonnage ne sont pas dans ce chiffre.",
    },
    {
      question: "Pourquoi générer en 8 secondes plutôt qu'en 4 ?",
      answer:
        "Parce que la documentation Veo impose la durée de 8 secondes dès que tu utilises des images de référence, l'extension vidéo, ou une résolution de 1080p ou 4K. Les valeurs 4 et 6 secondes restent disponibles, mais elles te bloquent en 720p et te privent des images de référence, c'est-à-dire de l'outil qui tient tes personnages d'un plan à l'autre. Sur une bande-annonce, cette cohérence vaut plus cher que les secondes économisées.",
    },
    {
      question: "C'est quoi le Leq(m) 85 dont parlent les monteurs de trailers ?",
      answer:
        "Un plafond de volume pour les bandes-annonces en salle, mis au point par la Trailer Audio Standards Association à la demande de l'association des exploitants américains après des plaintes du public sur des trailers trop forts. La mesure, le Leq(m), pondère les fréquences qui agacent : un bris de verre à 85 décibels irrite bien plus une salle qu'une corne de brume au même niveau. Le standard est volontaire, mais la MPA n'approuve que des bandes-annonces certifiées conformes, et tous les studios membres l'ont adopté.",
    },
    {
      question: "Peut-on générer une bande-annonce au format cinéma 2.39:1 ?",
      answer:
        "Pas directement avec Veo, dont le paramètre aspectRatio n'accepte que 16:9 et 9:16. Le format scope s'obtient au montage, en recadrant. Un 1920 x 1080 ramené en 2.39:1 conserve 803 pixels de hauteur, soit une perte d'environ 26 % : si tu comptes recadrer, il faut cadrer large dès la génération et vérifier que rien d'important ne vit dans le quart supérieur ou inférieur de l'image.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as douze plans superbes, une musique qui monte bien, et un montage qui ressemble à une compilation de jolies images. **Une bande-annonce de 90 secondes montée normalement contient une quarantaine de plans**, avec des durées très inégales. Douze plans de sept secondes ne fabriquent pas ce rythme, même très beaux.",
    },
    {
      type: "p",
      text: "Tu trouveras ici le conducteur en cinq blocs que j'utilise, le nombre de plans par bloc, le budget calculé sur les tarifs Veo relevés le 24 septembre 2026, et les deux chiffres que le métier impose depuis longtemps : une durée plafond et un niveau sonore plafond.",
    },
    {
      type: "p",
      text: "Ces deux plafonds viennent d'exploitants de salles qui en avaient assez. Ils méritent le détour même si ton film ne sortira jamais en salle, parce qu'ils décrivent surtout ce qu'un spectateur supporte.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Les deux plafonds qui définissent une bande-annonce",
    },
    {
      type: "h3",
      id: "duree-maximale",
      text: "Deux minutes trente, et deux dérogations par an",
    },
    {
      type: "p",
      text: "Si tant de trailers américains font exactement 2:29, il y a une raison. La MPA plafonne la longueur d'une bande-annonce à 2 minutes 30 dans ses règles d'approbation publicitaire, et chaque studio ou distributeur garde le droit de dépasser ce plafond une fois par an, quand il estime qu'un film le justifie.",
    },
    {
      type: "p",
      text: "Les exploitants ont voulu aller plus loin. En janvier 2014, leur association américaine a officialisé une recommandation à 2 minutes, soit 30 secondes de moins que la norme précédente, applicable aux films sortant à partir du 1er octobre 2014, avec deux dérogations annuelles par studio. Le même texte limite la diffusion d'une bande-annonce aux 5 mois qui précèdent la sortie et l'affichage aux 4 mois. Ces recommandations restent volontaires : chaque circuit de salles décide de les appliquer ou non.",
    },
    {
      type: "p",
      text: "Pour un court-métrage IA, je vise 90 secondes. Tu passes largement sous les deux plafonds, et surtout tu gardes le spectateur jusqu'au carton final, ce qui est le seul objectif réel quand personne ne connaît encore ton film. Une bande-annonce de court-métrage circule seule, détachée du film, dans un mail à un programmateur ou dans un fil social : elle doit tenir debout sans rien autour. Le détail des dépôts et des règlements de festivals est dans le guide sur [où montrer un film IA](/blog/festivals-films-ia).",
    },
    {
      type: "h3",
      id: "plafond-sonore",
      text: "Leq(m) 85, le plafond sonore que la MPA fait appliquer",
    },
    {
      type: "p",
      text: "Le son des bandes-annonces a sa propre norme, née de plaintes du public. La Trailer Audio Standards Association l'a mise au point à la demande de l'association des exploitants de salles américaines, et elle fixe aujourd'hui une limite haute à Leq(m) 85.",
    },
    {
      type: "image",
      src: "/images/articles/bande-annonce-ia-tasa-standard.webp",
      alt: "Page « What is TASA ? » du site de la Trailer Audio Standards Association : le standard TASA est un standard audio de volume pour les bandes-annonces, développé à la demande de la National Association of Theatre Owners pour répondre aux plaintes du public sur des bandes-annonces trop fortes, la limite haute actuelle est Leqm 85, le standard a été adopté volontairement par tous les studios membres de la MPA, et la MPA n'approuve que les bandes-annonces certifiées conformes TASA",
      caption:
        "La page qui fixe la limite et explique pourquoi la MPA la fait respecter. Source : tasatrailers.org, capture du 24/09/2026.",
    },
    {
      type: "p",
      text: "L'intérêt du Leq(m) tient à ce qu'il mesure. La pondération insiste sur les fréquences qui agacent : le site donne l'exemple d'un bris de verre à 85 décibels, bien plus irritant pour une salle qu'une corne de brume au même niveau. Le standard cherche donc à mesurer le « volume énervant » plutôt que le volume. Il est volontaire, tous les studios membres de la MPA l'ont adopté, et pour un film soumis à la classification, la MPA n'approuve que des bandes-annonces certifiées conformes. La certification passe par un laboratoire agréé : THX affiche 600 $ pour un trailer audio standard et 800 $ pour les formats immersifs type Atmos.",
    },
    {
      type: "p",
      text: "Tu ne feras certifier personne pour un court-métrage mis en ligne. Mais la leçon se transpose telle quelle : une bande-annonce où tout est à fond n'a plus de point d'impact. Garde du vide. Deux secondes de silence avant le dernier plan feront plus d'effet que dix nappes empilées. Le côté mesure, niveaux et normalisation est détaillé dans le [guide de la voix off IA](/blog/voix-off-ia-guide), qui couvre le calibrage en LUFS pour les plateformes en ligne.",
    },
    {
      type: "p",
      text: "Le reste de la forme est plus souple. La description classique du format tient en trois actes : une ouverture qui pose la prémisse, un deuxième mouvement qui pousse l'histoire jusqu'à un pic dramatique, et un troisième qui repose sur un morceau de musique signature. C'est exactement l'ossature que reprend le conducteur ci-dessous, en plus détaillé.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Le conducteur d'une bande-annonce de 90 secondes",
    },
    {
      type: "p",
      text: "Dans le découpage que j'utilise, l'écart entre les longueurs moyennes compte plus que le total. C'est lui qui crée la sensation d'accélération.",
    },
    {
      type: "table",
      caption:
        "Les cinq blocs d'une bande-annonce de 90 secondes, avec le nombre de plans et la longueur moyenne visée",
      headers: [
        "Bloc",
        "Fenêtre",
        "Ce qu'il fait",
        "Nombre de plans",
        "Longueur moyenne",
        "Ce que fait le son",
      ],
      rows: [
        [
          "Accroche",
          "0:00 à 0:08",
          "Une seule idée, une seule image, celle qu'on retiendra",
          "1 à 2",
          "4 à 8 s",
          "Nappe seule, ou rien du tout",
        ],
        [
          "Exposition",
          "0:08 à 0:35",
          "Qui, où, quel monde. On installe avant de bousculer",
          "8 à 12",
          "2 à 3 s",
          "Pulsation basse, tempo lent",
        ],
        [
          "Bascule",
          "0:35 à 0:50",
          "L'élément qui casse l'équilibre, plus le premier carton",
          "3 à 5",
          "1,5 à 3 s",
          "Coupure nette, une seconde de vide",
        ],
        [
          "Montée",
          "0:50 à 1:15",
          "Accélération, fragments, visages, gestes, aucune explication",
          "18 à 25",
          "0,8 à 1,5 s",
          "Percussions, montée continue",
        ],
        [
          "Bouton",
          "1:15 à 1:30",
          "Dernier plan tenu, titre, mention de sortie ou de festival",
          "2 à 4",
          "2 à 5 s",
          "Un impact, puis la résonance",
        ],
      ],
    },
    {
      type: "p",
      text: "Additionne : entre 32 et 48 plans. Le bloc de montée à lui seul en avale plus de la moitié, et c'est là que les projets calent, parce qu'il réclame vingt fragments cohérents entre eux alors que les modèles génératifs rendent un monde neuf à chaque appel.",
    },
    {
      type: "h3",
      id: "les-six-etapes",
      text: "Les six étapes, dans cet ordre",
    },
    {
      type: "ol",
      items: [
        "Écris les cinq cartons avant le moindre plan. Une ligne par carton, cinq mots maximum, et une règle de lecture : un carton reste à l'écran le temps de le lire deux fois, soit environ 1,2 seconde pour trois mots. Si tu as besoin d'une phrase entière pour expliquer ton film, l'idée n'est pas encore prête.",
        "Choisis la musique en deuxième. Le morceau fixe la durée réelle du montage, ton tableau ne fait que la décrire. Repère ses points de rupture au chronomètre et cale tes cinq blocs dessus. La méthode pour produire un morceau taillé à la seconde près est dans le [guide Suno](/blog/suno-guide-complet).",
        "Liste les plans avec un code de réemploi. Devant chaque ligne, note R si le plan peut resservir ailleurs dans le montage (un détail, une main, un ciel, une porte), et U s'il est unique et identifiable. Vise au moins un tiers de R : ce sont eux qui rendent le bloc de montée finançable.",
        "Verrouille les visages et les lieux avant de produire en série. Veo accepte jusqu'à trois images de référence de style et de contenu par génération. Prépare-les une fois, garde-les identiques sur toute la bande-annonce. Les techniques de raccord d'un plan à l'autre sont détaillées dans [cet article sur la continuité](/blog/raccord-continuite-plans-ia).",
        "Génère systématiquement en 8 secondes. Tu n'utiliseras qu'une à deux secondes de la plupart des clips, et c'est normal : tu achètes le droit de choisir le meilleur moment du mouvement. Les durées plus courtes te coûtent la 1080p et les images de référence.",
        "Monte d'abord muet, puis passe le son. Coupe les 40 plans sans musique, en regardant seulement si la lecture avance. Ajoute la bande son ensuite. Un montage qui tient en muet tiendra en son ; l'inverse est faux, et c'est le piège numéro un des bandes-annonces IA.",
      ],
    },
    {
      type: "p",
      text: "L'étape 5 mérite une justification, parce qu'elle a l'air de gaspiller de l'argent. Tout est écrit dans la documentation de l'API Gemini.",
    },
    {
      type: "image",
      src: "/images/articles/bande-annonce-ia-veo-specs.webp",
      alt: "Tableau des paramètres Veo dans la documentation Gemini API : aspectRatio accepte 16:9 par défaut et 9:16, durationSeconds accepte 4, 6 et 8 secondes avec la mention « Doit être défini sur 8 lorsque vous utilisez des extensions ou des images de référence, ou avec les résolutions 1080p et 4K », referenceImages accepte jusqu'à trois images de style et de contenu sur Veo 3.1 et Veo 3.1 Fast, et la résolution 720p est la seule disponible pour l'extension",
      caption:
        "Les contraintes de durée, de format et de références, colonne par colonne selon le modèle. Source : ai.google.dev/gemini-api/docs/veo, capture du 24/09/2026.",
    },
    {
      type: "p",
      text: "La durée accepte 4, 6 ou 8 secondes, mais elle passe obligatoirement à 8 dès que tu montes en 1080p ou 4K, que tu utilises des images de référence, ou que tu prolonges un plan existant. Les deux réglages qui sauvent une bande-annonce, la définition correcte et la cohérence des visages, verrouillent donc la durée maximale. Le paramètre `aspectRatio`, lui, n'accepte que 16:9 et 9:16.",
    },
    {
      type: "p",
      text: "L'extension vidéo ajoute 7 secondes par appel, jusqu'à 20 fois et 148 secondes au total, uniquement en 720p. Sur une bande-annonce, elle sert peu : tes plans de montée durent une seconde et demie. Garde-la pour l'accroche et le dernier plan, les deux seuls qu'on tient longtemps à l'écran. Le fonctionnement complet est détaillé dans l'article sur [les plans qui dépassent cinq secondes](/blog/prolonger-plan-ia-au-dela-5-secondes).",
    },
    {
      type: "p",
      text: "> Pro Tip : la documentation Gemini précise que les vidéos générées restent stockées 2 jours sur le serveur avant suppression. Sur un projet à 40 plans étalé sur deux semaines, ça veut dire une chose : télécharge et renomme chaque clip le jour même, avec le numéro de plan dans le nom de fichier. Deux jours, c'est plus court qu'un week-end de travail interrompu.",
    },
    {
      type: "h2",
      id: "budget",
      text: "Ce que coûtent vraiment 40 plans générés",
    },
    {
      type: "p",
      text: "La facturation Veo se fait à la seconde générée, et non à la seconde gardée. C'est toute la différence sur une bande-annonce, où tu jettes l'essentiel de ce que tu produis. Un plan de montée d'une seconde et demie sort d'un clip de 8 secondes, lui-même choisi parmi deux ou trois tentatives.",
    },
    {
      type: "p",
      text: "Les tarifs publics relevés le 24 septembre 2026 sur la page de prix de l'API Gemini donnent, audio compris : 0,40 $ la seconde pour Veo 3.1 en 720p et 1080p, 0,10 $ pour Veo 3.1 Fast en 720p et 0,12 $ en 1080p, 0,05 $ pour Veo 3.1 Lite en 720p. Le calcul ci-dessous part de 40 plans retenus, 3 tentatives par plan et 8 secondes par tentative, soit 960 secondes facturées.",
    },
    {
      type: "table",
      caption:
        "Coût d'une bande-annonce de 90 secondes selon le modèle, sur la base de 40 plans, 3 tentatives de 8 secondes chacun (960 secondes facturées)",
      headers: [
        "Modèle",
        "Prix la seconde",
        "Coût des 960 secondes",
        "Ce que tu perds",
      ],
      rows: [
        [
          "Veo 3.1 Lite, 720p",
          "0,05 $",
          "48 $",
          "Pas d'extension vidéo, pas de 4K, définition juste suffisante pour le web",
        ],
        [
          "Veo 3.1 Fast, 1080p",
          "0,12 $",
          "115 $",
          "Rien de gênant pour un trailer, c'est le réglage que je prends par défaut",
        ],
        [
          "Veo 3.1, 1080p",
          "0,40 $",
          "384 $",
          "Rien, mais le budget triple pour un gain visible surtout sur les plans lents",
        ],
        [
          "Veo 3.1, 4K",
          "0,60 $",
          "576 $",
          "Rien, et personne ne verra la différence sur un plan d'une seconde",
        ],
      ],
    },
    {
      type: "p",
      text: "En Veo 3.1 Fast 1080p, une seconde finie de bande-annonce revient donc à environ 1,28 $. Le rapport entre secondes facturées et secondes utilisées tourne autour de 10 pour 1, et aucun réglage ne l'améliore. Le seul vrai levier reste le code R de l'étape 3 : chaque plan réutilisé à deux endroits divise son coût par deux. Sur un bloc de montée de vingt plans, en réemployer six économise 17 $ en Fast 1080p, et 58 $ si tu génères en standard.",
    },
    {
      type: "p",
      text: "Mon avis sur le choix du modèle : prends Fast en 1080p et mets la différence dans la musique et l'étalonnage. Sur des plans d'une seconde et demie, personne ne regarde la texture. Tout le monde entend le son.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les quatre erreurs qui tuent une bande-annonce IA",
    },
    {
      type: "h3",
      id: "erreur-1",
      text: "Erreur 1 : la bande-annonce qui déborde",
    },
    {
      type: "p",
      text: "Symptôme : tu as tellement de beaux plans que tu arrives à 2 minutes 40, et tu te dis que dix secondes de plus ne changeront rien. Elles changent tout, parce qu'au-delà de deux minutes tu as quitté la promesse pour le résumé du film.",
    },
    {
      type: "p",
      text: "Fix concret : fixe la durée à 90 secondes avant d'ouvrir le logiciel de montage. Coupe d'abord dans le bloc d'exposition, jamais dans la montée. Le spectateur pardonne de ne pas tout comprendre ; il ne pardonne pas de s'ennuyer à la trente-cinquième seconde.",
    },
    {
      type: "h3",
      id: "erreur-2",
      text: "Erreur 2 : le mur de son permanent",
    },
    {
      type: "p",
      text: "Symptôme : la musique démarre plein pot à zéro seconde, les impacts s'enchaînent, et à la fin le dernier coup passe inaperçu. C'est exactement le problème que le standard TASA cherche à corriger en salle, sauf que sur YouTube personne ne te l'imposera.",
    },
    {
      type: "p",
      text: "Fix concret : réserve les deux tiers du volume disponible aux vingt dernières secondes. Mets un vrai silence, une seconde pleine, juste avant le bouton final. Vérifie le montage sur téléphone au casque : si les dialogues du bloc d'exposition passent, les impacts passeront partout.",
    },
    {
      type: "h3",
      id: "erreur-3",
      text: "Erreur 3 : le carton titre qu'on n'a pas le temps de lire",
    },
    {
      type: "p",
      text: "Symptôme : tes cartons sont magnifiques, en petites capitales espacées, et ils disparaissent avant la fin de la lecture. Sur mobile, ils deviennent illisibles. Un carton se juge à la durée de lecture, autour de 1,2 seconde pour trois mots, et à la hauteur du texte, qui doit tenir au moins 4 % de la hauteur de l'image.",
    },
    {
      type: "p",
      text: "Fix concret : lis chaque carton à voix haute deux fois pendant que le montage tourne. Si tu n'y arrives pas, rallonge ou raccourcis le texte. Et garde tes cartons à l'intérieur des 90 % centraux de l'image, parce que les lecteurs sociaux rognent les bords et que ton titre de festival finira mangé par une barre de progression.",
    },
    {
      type: "h3",
      id: "erreur-4",
      text: "Erreur 4 : attendre du modèle un format qu'il ne produit pas",
    },
    {
      type: "p",
      text: "Symptôme : tu voulais un rendu scope 2.39:1 et tu recadres à la fin, en découvrant que la moitié des têtes est coupée. Veo ne rend que du 16:9 et du 9:16. Un 1920 x 1080 ramené en 2.39:1 conserve 803 pixels de hauteur, soit 26 % de l'image en moins, prélevés en haut et en bas.",
    },
    {
      type: "p",
      text: "Fix concret : décide du format avant la première génération et cadre en conséquence, en laissant de l'air au-dessus des visages. Si tu tiens au scope, ajoute les bandes noires au montage sur un master 16:9 plutôt que de recadrer, tu garderas le choix. La question du cadre en amont est traitée dans la [méthode de réalisation d'un film IA](/blog/creer-film-ia), et le découpage narratif dans l'article sur [la structure en trois actes](/blog/structure-3-actes-video-ia).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quelle durée pour une bande-annonce ?",
    },
    {
      type: "p",
      text: "Le plafond professionnel est de 2 minutes 30, la longueur maximale autorisée par la MPA, chaque studio ou distributeur ayant le droit de le dépasser une fois par an. En janvier 2014, l'association des exploitants de salles américaines a adopté une recommandation plus courte encore, 2 minutes, applicable aux films sortis à partir du 1er octobre 2014, avec deux dérogations annuelles par studio. Pour une bande-annonce IA diffusée en ligne ou envoyée à un festival, 90 secondes est un meilleur objectif de travail : tu restes sous les deux plafonds et tu gardes le spectateur jusqu'au carton final.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien de plans faut-il pour une bande-annonce de 90 secondes ?",
    },
    {
      type: "p",
      text: "Entre 32 et 48 selon le genre, avec le découpage en cinq blocs décrit dans cet article. La moyenne n'a aucun intérêt prise seule, parce que les durées sont très inégales : le plan d'accroche peut tenir 8 secondes, ceux du bloc de montée descendent sous la seconde. Douze plans de sept secondes collés bout à bout produisent une compilation d'images. Le rythme, lui, vient de l'écart entre les blocs.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien coûte une bande-annonce générée avec l'IA ?",
    },
    {
      type: "p",
      text: "À partir des tarifs publics de l'API Gemini relevés le 24 septembre 2026, Veo 3.1 Fast est facturé 0,12 $ la seconde générée en 1080p, et Veo 3.1 standard 0,40 $. Comme la facturation porte sur la seconde générée et pas sur la seconde gardée, il faut compter le taux de rebut : 40 plans retenus à trois tentatives de 8 secondes chacun font 960 secondes facturées, soit environ 115 $ en Fast 1080p et 384 $ en standard. Le montage, la musique et l'étalonnage ne sont pas dans ce chiffre.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Pourquoi générer en 8 secondes plutôt qu'en 4 ?",
    },
    {
      type: "p",
      text: "Parce que la documentation Veo impose la durée de 8 secondes dès que tu utilises des images de référence, l'extension vidéo, ou une résolution de 1080p ou 4K. Les valeurs 4 et 6 secondes restent disponibles, mais elles te bloquent en 720p et te privent des images de référence, c'est-à-dire de l'outil qui tient tes personnages d'un plan à l'autre. Sur une bande-annonce, cette cohérence vaut plus cher que les secondes économisées.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "C'est quoi le Leq(m) 85 dont parlent les monteurs de trailers ?",
    },
    {
      type: "p",
      text: "Un plafond de volume pour les bandes-annonces en salle, mis au point par la Trailer Audio Standards Association à la demande de l'association des exploitants américains après des plaintes du public sur des trailers trop forts. La mesure, le Leq(m), pondère les fréquences qui agacent : un bris de verre à 85 décibels irrite bien plus une salle qu'une corne de brume au même niveau. Le standard est volontaire, mais la MPA n'approuve que des bandes-annonces certifiées conformes, et tous les studios membres l'ont adopté.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Peut-on générer une bande-annonce au format cinéma 2.39:1 ?",
    },
    {
      type: "p",
      text: "Pas directement avec Veo, dont le paramètre aspectRatio n'accepte que 16:9 et 9:16. Le format scope s'obtient au montage, en recadrant. Un 1920 x 1080 ramené en 2.39:1 conserve 803 pixels de hauteur, soit une perte d'environ 26 % : si tu comptes recadrer, il faut cadrer large dès la génération et vérifier que rien d'important ne vit dans le quart supérieur ou inférieur de l'image.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "La première chose à faire ce soir",
    },
    {
      type: "p",
      text: "Ouvre un document, écris tes cinq cartons, et chronomètre-les à voix haute. Dix minutes. Tu sauras immédiatement si ton film a une accroche ou s'il n'en a pas, et cette réponse vaut plus que quarante plans générés à l'aveugle. Ensuite seulement, remplis le tableau des cinq blocs avec tes numéros de plans et tes codes R et U. C'est le document qui te dira combien coûte ta bande-annonce, avant de dépenser le premier dollar.",
    },
    {
      type: "p",
      text: "Note de fondateur : la formation IA gratuite d'AI Studios suit le même ordre, script d'abord, image ensuite, son à la fin, avec les outils cités ici. Fais l'exercice des cinq cartons ce soir. Si tu bloques dessus, ce n'est pas le montage qu'il faut retravailler.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-24 -->
