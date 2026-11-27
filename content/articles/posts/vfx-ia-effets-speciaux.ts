import type { Article } from "@/lib/types/article";

export const vfxIaEffetsSpeciaux: Article = {
  title: "VFX IA : faire tes effets spéciaux sans studio",
  slug: "vfx-ia-effets-speciaux",
  description:
    "VFX IA : un plan d'effets spéciaux, c'est quatre travaux. Quel outil pour chacun (Runway Aleph, Resolve, Flow Studio), à quel prix, comment tourner pour l'IA.",
  excerpt:
    "Un plan d'effets spéciaux se décompose en quatre travaux : isoler, nettoyer, ajouter, raccorder. Les outils IA de 2026 les couvrent tous, mais pas au même endroit ni au même prix : Runway Edit Studio retouche un plan entier au prompt pour 28 crédits la seconde, DaVinci Resolve masque et efface image par image, Flow Studio pose un personnage 3D sur ta prise. Voici comment choisir plan par plan, et surtout comment tourner pour que ça marche.",
  category: "ia-video",
  tags: [
    "vfx ia",
    "effets spéciaux ia",
    "runway aleph",
    "davinci resolve",
    "flow studio",
    "compositing",
  ],
  date: "2026-09-19",
  updatedAt: "2026-09-19",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/vfx-ia-effets-speciaux.webp",
  imageAlt:
    "Tournage à petit budget dans une ruelle pavée à l'heure bleue, une jeune femme en doudoune noire tient une boule chromée et une sphère grise sur une perche devant un appareil hybride sur trépied, croix de ruban orange collées comme marqueurs de tracking sur le mur de brique humide, fond vert replié contre un lampadaire, panneau LED sur pied",
  keywords: [
    "vfx ia",
    "effets spéciaux ia",
    "runway aleph",
    "compositing ia",
    "davinci resolve magic mask",
    "flow studio autodesk",
  ],
  relatedSlugs: [
    "creer-film-ia",
    "inpainting-ia-retoucher-image",
    "upscale-video-ia",
  ],
  faq: [
    {
      question: "Peut-on faire des VFX avec l'IA sans logiciel de compositing ?",
      answer:
        "Oui pour une partie des cas. Runway Edit Studio, propulsé par Aleph 2.0, retouche un plan de 2 à 30 secondes à partir d'un prompt et d'une image clé : suppression d'objet, changement de fond, de météo, d'éclairage ou de costume. La limite, c'est que le modèle régénère toute l'image : ce qui doit rester strictement identique (un visage, un produit, un logo) peut dériver. Pour ces plans, un masque dans DaVinci Resolve reste plus sûr.",
    },
    {
      question: "Combien coûte une retouche vidéo avec Runway Aleph 2.0 ?",
      answer:
        "D'après le centre d'aide et la page tarifs de Runway lus le 19 septembre 2026 : 28 crédits par seconde de vidéo traitée, avec un minimum de 56 crédits, soit 140 crédits pour 5 secondes. Le plan Standard à 15 dollars par mois donne 625 crédits, donc à peine plus de 22 secondes de retouche Aleph ; le plan Pro à 35 dollars donne 2 250 crédits, environ 80 secondes. Si tu ne retouches qu'une plage du plan, seule cette plage est facturée.",
    },
    {
      question: "DaVinci Resolve gratuit suffit-il pour les VFX ?",
      answer:
        "Pour le compositing manuel, oui : la page Fusion (nœuds, tracking, masques, incrustation fond vert) est incluse dans la version gratuite. Ce qui manque au gratuit, ce sont les outils du DaVinci AI Neural Engine que Blackmagic réserve à Resolve Studio (255 euros, licence perpétuelle) : Magic Mask pour isoler et suivre une personne ou un objet, la suppression d'objets, Super Scale et la carte de profondeur.",
    },
    {
      question: "À quoi sert Autodesk Flow Studio en VFX ?",
      answer:
        "À remplacer un acteur filmé par un personnage 3D, sans capture de mouvement ni tracking manuel. Tu envoies ta vidéo, tu assignes un personnage à chaque comédien, l'outil produit l'animation, la clean plate (le fond sans l'acteur), le suivi de caméra et des scènes Blender ou Maya. Le plan gratuit (300 crédits par mois, export 720p avec filigrane, une personne capturée) permet de tester ; les plans payants démarrent à 7 dollars par mois en engagement annuel.",
    },
    {
      question: "Que faut-il prévoir au tournage pour des VFX IA ?",
      answer:
        "Cinq choses qui ne coûtent rien : une caméra la plus stable possible, des marqueurs de tracking (croix de ruban) sur les surfaces à remplacer, une clean plate de quelques secondes sans l'acteur, une photo de référence de la lumière (boule chromée ou simple photo du décor), et une cadence entre 24 et 30 images par seconde parce que Runway rééchantillonne au-delà de 30. Le plan se décide sur le plateau, l'outil vient après.",
    },
    {
      question: "Comment éviter qu'un plan VFX se remarque au montage ?",
      answer:
        "En traitant le raccord comme un travail à part entière : même grain, même netteté, même colorimétrie que les plans voisins. Un plan retouché par IA ressort souvent plus lisse et plus net que le reste ; ajoute le grain en dernier sur toute la séquence, passe tous les plans par la même chaîne d'upscale, et compare le plan VFX à ses voisins en plein écran avant d'exporter.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as un plan que tu aimes, à un détail près. Un panneau de signalisation dans le champ, une fenêtre trop claire, un figurant qui regarde l'objectif. Ou l'inverse : il manque quelque chose, une pluie, une créature, un écran qui devrait afficher autre chose. Il y a trois ans, la réponse était un compositeur, une station de travail et une facture. Aujourd'hui, la réponse ressemble à un prompt, et c'est là que les ennuis commencent, parce que le prompt règle un cas sur deux et abîme l'autre.",
    },
    {
      type: "p",
      text: "Dans ce guide, tu vas découper un plan d'effets spéciaux en quatre travaux (isoler, nettoyer, ajouter, raccorder), voir quel outil IA fait lequel en 2026 et à quel prix, avec les chiffres relevés sur les pages officielles de Runway, Blackmagic et Autodesk le 19 septembre 2026. Tu repartiras avec une méthode plan par plan, une feuille de tournage pensée pour les VFX et les quatre erreurs que je vois revenir sur les films IA qu'on m'envoie.",
    },
    {
      type: "p",
      text: "Mon parti pris : les VFX IA se gagnent ou se perdent au tournage, avant d'ouvrir le moindre outil. Un plan filmé pour être retouché se retouche en dix minutes. Un plan filmé au hasard se retouche en trois soirées, ou pas du tout.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Un plan VFX, c'est quatre travaux, pas un bouton",
    },
    {
      type: "h3",
      text: "Isoler, nettoyer, ajouter, raccorder",
    },
    {
      type: "p",
      text: "Prends n'importe quel plan à effets, du blockbuster au court-métrage de fin d'études. Le travail se décompose toujours de la même façon. D'abord isoler, c'est-à-dire séparer ce qu'on garde de ce qu'on va toucher : c'est le masquage, et avant lui [la rotoscopie](https://fr.wikipedia.org/wiki/Rotoscopie), une image après l'autre, à la main, pendant des décennies. Ensuite nettoyer : effacer ce qui gêne et reconstruire le fond derrière, ce qu'on appelle la clean plate. Puis ajouter ce qui n'était pas là, un personnage, une pluie, un décor, un écran. Et enfin raccorder, pour que l'ajout ait la même lumière, le même grain et le même flou de mouvement que la prise : c'est le [compositing](https://fr.wikipedia.org/wiki/Compositing) au sens strict.",
    },
    {
      type: "p",
      text: "Les outils IA ne couvrent pas ces quatre travaux de la même manière, et c'est pour ça que le découpage compte. Certains font les quatre en un seul geste, au prix d'un contrôle faible. D'autres en font un seul, très bien, et te laissent les trois autres. Quand tu sais lequel des quatre travaux pose problème sur ton plan, le choix de l'outil devient presque mécanique.",
    },
    {
      type: "h3",
      text: "Édition générative ou compositing : deux familles, deux promesses",
    },
    {
      type: "p",
      text: "La première famille, c'est l'édition générative : tu donnes le plan et une consigne, le modèle régénère toute l'image en appliquant le changement. Runway Edit Studio, propulsé par Aleph 2.0, en est l'exemple le plus abouti que j'aie manipulé. Sa documentation liste ce qu'il fait : échanger un produit, remplacer un personnage, changer ou retirer un fond, supprimer un objet, insérer un élément ou un effet, rééclairer, changer la météo ou le costume, sur un plan ou une séquence de 2 à 30 secondes. Tu choisis une image clé dans la timeline, tu écris la modification, tu prévisualises le résultat sur cette image fixe, puis tu lances la vidéo. Kling 3.0 Omni joue dans la même cour, [on en a parlé lors de sa mise à jour de juin](/blog/kling-3-turbo-omni-juin-2026).",
    },
    {
      type: "image",
      src: "/images/articles/vfx-ia-effets-speciaux-runway-edit-studio.webp",
      alt: "Section Spec details de la page Creating with Edit Studio du centre d'aide Runway, avec le tableau indiquant un coût de 28 crédits par seconde et 56 crédits minimum, une durée de vidéo de 2 à 30 secondes, 30 images par seconde maximum, une résolution d'entrée de 1080p maximum et un seul mode d'édition, Single edit",
      caption:
        "Les limites d'Edit Studio noir sur blanc : 28 crédits la seconde, 2 à 30 secondes, 1080p maximum. Source : help.runwayml.com, capture du 19/09/2026.",
    },
    {
      type: "p",
      text: "La seconde famille, c'est le compositing assisté : l'outil isole ou calcule une couche, et toi tu assembles. DaVinci Resolve en est le représentant gratuit avec sa page Fusion (nœuds, tracking, incrustation), et sa version Studio ajoute les outils du DaVinci AI Neural Engine : Magic Mask pour isoler et suivre une personne ou un objet d'un clic, la suppression d'objets, Super Scale. Autodesk Flow Studio (l'ancien Wonder Studio, racheté en 2024) fait autre chose : il détecte l'acteur dans ta prise, le remplace par un personnage 3D, et te rend la clean plate, le suivi de caméra et l'animation exportables vers Blender ou Maya.",
    },
    {
      type: "p",
      text: "Les deux familles se départagent sur un seul critère, **ce qui doit rester identique** dans l'image. L'édition générative touche à tous les pixels, même ceux que tu n'as pas mentionnés : un visage peut changer de mâchoire, un logo peut se réécrire, une texture peut se lisser. Le compositing ne touche qu'à la couche que tu as isolée ; le reste du plan sort exactement comme il est entré. Si ton plan contient un visage, un produit ou un texte que le client va scruter, tu es dans la seconde famille, quoi qu'en dise la démo.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "La méthode plan par plan, du tournage à l'export",
    },
    {
      type: "p",
      text: "Le tableau ci-dessous croise les quatre travaux avec l'outil que j'utiliserais en premier en 2026, ce qu'il coûte d'après les pages officielles, et l'endroit où il lâche. Les prix sont ceux affichés le 19 septembre 2026 ; ils bougent, revérifie avant de t'abonner.",
    },
    {
      type: "table",
      caption:
        "Quatre travaux VFX, un premier outil pour chacun (tarifs et limites relevés sur runwayml.com, blackmagicdesign.com et autodesk.com le 19/09/2026)",
      headers: ["Travail", "Premier outil à essayer", "Ce que ça coûte", "Où ça lâche"],
      rows: [
        [
          "Isoler (masquer, suivre)",
          "DaVinci Resolve Studio, Magic Mask",
          "255 € une fois, licence Studio ; Fusion et les masques manuels sont dans la version gratuite",
          "Cheveux fins, fumée, mouvements très rapides : le masque bave, il faut le corriger à la main sur quelques images",
        ],
        [
          "Nettoyer (effacer, clean plate)",
          "Resolve Studio (suppression d'objets) pour un fond simple ; Runway Edit Studio quand le fond à reconstruire est complexe",
          "Inclus dans Studio ; Aleph 2.0 : 28 crédits/s, 56 minimum, seule la plage retouchée est facturée",
          "L'objet passe devant un élément qui bouge : le fond reconstruit se déforme. Filme une vraie clean plate au tournage",
        ],
        [
          "Ajouter (élément, personnage, météo)",
          "Runway Edit Studio pour un ajout d'ambiance (pluie, lumière, fond) ; Flow Studio pour un personnage 3D à la place d'un acteur",
          "Aleph : 140 crédits les 5 s ; Flow Studio : gratuit à 300 crédits/mois en 720p filigrané, puis 7 $/mois (Lite, annuel), 30 $ (Standard, 4K), 64 $ (Pro)",
          "Aleph dérive sur les visages et les textes ; Flow Studio veut un acteur bien visible, sans occlusion lourde, et une caméra lisible",
        ],
        [
          "Raccorder (grain, flou, couleur)",
          "Resolve (gratuit) : étalonnage, grain, flou de mouvement sur la couche ajoutée ; upscale de toute la séquence par la même chaîne",
          "0 € pour l'étalonnage et le grain ; upscale selon l'outil, voir le guide dédié",
          "Le plan IA ressort plus net et plus lisse que ses voisins : c'est ce raccord-là qui trahit le VFX, pas l'effet lui-même",
        ],
      ],
    },
    {
      type: "image",
      src: "/images/articles/vfx-ia-effets-speciaux-flow-studio-plans.webp",
      alt: "Page Buy Flow Studio d'Autodesk avec le sélecteur de durée réglé sur un an et cinq colonnes de plans : Education gratuit pour les étudiants, Free à 0 dollar avec 300 crédits par mois, Lite à 7 dollars par mois, Standard à 30 dollars par mois marqué Recommended avec accès à Live Action Advanced, et Pro à 64 dollars par mois",
      caption:
        "Les plans de Flow Studio, de la version gratuite à 300 crédits au plan Pro. Source : autodesk.com, capture du 19/09/2026.",
    },
    {
      type: "p",
      text: "La méthode commence avant la caméra et finit après l'export. Chaque étape existe parce qu'une facture de crédits ou une soirée perdue m'a appris qu'elle manquait.",
    },
    {
      type: "ol",
      items: [
        "Écris la liste VFX avant de tourner. Une ligne par effet : le plan concerné, la durée pendant laquelle l'effet est à l'écran, lequel des quatre travaux domine, et surtout ce qui doit rester strictement identique dans l'image (visage, produit, texte). Cette dernière colonne décide déjà de la famille d'outil. Si tu écris ton film avec [la méthode de création d'un film IA](/blog/creer-film-ia), cette liste vit à côté du découpage.",
        "Tourne pour l'outil. Caméra fixe ou mouvement lent quand l'effet est lourd ; croix de ruban orange sur toute surface que tu vas remplacer (un écran, un mur, un panneau), pour que le tracking ait quelque chose à suivre ; une clean plate de cinq secondes sans l'acteur, même cadre, même lumière ; une photo du décor et, si tu as une boule chromée, une image de la boule dans la lumière de la scène pour caler l'éclairage de l'ajout. Reste entre 24 et 30 images par seconde : Runway rééchantillonne au-delà de 30 et refuse les plans qui comptent plus de dix coupes.",
        "Verrouille le montage avant tout effet. À 28 crédits la seconde, retoucher un plan de 20 secondes dont tu garderas 6 au montage, c'est jeter 392 crédits. Monte, coupe, valide la durée exacte de chaque plan à effets, puis seulement exporte ces plans en 1080p vers les outils. [Le guide du montage dans CapCut ou DaVinci](/blog/monter-video-ia-capcut-davinci) couvre cette étape.",
        "Choisis la famille par plan, pas pour tout le film. Relis la colonne « ce qui doit rester identique » : vide ou secondaire, tu pars sur l'édition générative ; visage, produit ou texte, tu pars sur le compositing. Un même film mélange les deux sans problème, c'est même la norme.",
        "Teste sur une image fixe avant la vidéo. Edit Studio te fait prévisualiser l'effet sur une image clé avant de générer, et son tableau de coûts affiche 20 crédits l'itération d'image avec Nano Banana Pro contre 56 crédits minimum pour la moindre vidéo. Règle ton prompt sur l'image, puis lance la vidéo sur une plage de 3 à 5 secondes, pas sur le plan entier. Pour la retouche d'image elle-même, [les réflexes de l'inpainting](/blog/inpainting-ia-retoucher-image) s'appliquent tels quels : décris ce qui doit apparaître, pas ce qui doit disparaître.",
        "Raccorde en dernier, sur toute la séquence. Ramène le plan VFX dans Resolve à côté de ses voisins, étalonne-les ensemble, ajoute le grain sur la séquence entière plutôt que sur le plan seul ([le guide du rendu pellicule](/blog/rendu-pellicule-grain-film-ia) explique pourquoi un grain unique fait tenir des plans d'origines différentes), et si tu montes en résolution, passe tous les plans par [la même chaîne d'upscale vidéo](/blog/upscale-video-ia). Puis regarde le plan en plein écran, à vitesse réelle, deux fois.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : filme toujours dix secondes de clean plate, même si l'outil promet de la reconstruire. Flow Studio en génère une, Aleph en invente une, mais la vraie, filmée dans la même lumière, gagne à chaque fois sur un fond où quelque chose bouge (feuillage, eau, passants). Elle coûte zéro crédit et se tourne pendant que le comédien reprend son souffle.",
    },
    {
      type: "image",
      src: "/images/articles/vfx-ia-effets-speciaux-resolve-studio.webp",
      alt: "Page DaVinci Resolve Studio du site français de Blackmagic Design, bandeau DaVinci Resolve 21, bouton de téléchargement gratuit de DaVinci Resolve et bouton d'achat en ligne de DaVinci Resolve Studio à 255 euros, avec le texte expliquant que la version gratuite monte et finalise jusqu'à 60 images par seconde en Ultra HD et que Studio ajoute plus de 100 fonctionnalités dont le DaVinci AI Neural Engine",
      caption:
        "Resolve 21 : la version gratuite d'un côté, Studio à 255 € avec le Neural Engine de l'autre. Source : blackmagicdesign.com/fr, capture du 19/09/2026.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Là où les VFX IA se plantent",
    },
    {
      type: "h3",
      text: "Retoucher 25 secondes pour corriger 2 secondes",
    },
    {
      type: "p",
      text: "Symptôme : ta facture de crédits fond, et le plan a changé de texture sur toute sa durée alors que le défaut n'apparaissait qu'à la fin. Le réflexe qui coûte cher, c'est d'envoyer le plan entier au modèle. Fix concret : dans Edit Studio, utilise l'édition par plage (ranged edit) pour ne traiter que les secondes concernées, la documentation confirme que seule la plage est facturée. Encore mieux : coupe le plan au montage juste avant le défaut, et retouche le fragment.",
    },
    {
      type: "h3",
      text: "Demander au prompt de garder un visage intact",
    },
    {
      type: "p",
      text: "Symptôme : tu as demandé de changer la météo, et ton comédien a changé de nez. L'édition générative régénère l'image entière, la consigne « garde le visage identique » ne tient pas sur trente secondes. Fix concret : bascule en compositing. Isole le comédien avec Magic Mask dans Resolve Studio (ou un masque manuel dans Fusion en version gratuite), applique l'effet généré au fond seul, et recompose. Pour les fonds fixes, [le détourage IA](/blog/detourer-supprimer-fond-ia) sur une image fixe puis un tracking dans Fusion suffit souvent.",
    },
    {
      type: "h3",
      text: "Tourner sans clean plate ni marqueurs",
    },
    {
      type: "p",
      text: "Symptôme : l'objet à effacer laisse une tache floue qui ondule, ou l'écran que tu voulais remplacer glisse par rapport au cadre. L'outil n'avait rien à suivre et rien à reconstruire. Fix concret : impossible à rattraper proprement après coup, c'est le seul des quatre pièges qui se règle uniquement au tournage. Reprends la liste VFX de l'étape 1 et ajoute une colonne « filmé pour l'outil : oui/non ». Un plan qui reste à non se tourne à nouveau ou sort de la liste.",
    },
    {
      type: "h3",
      text: "Livrer un plan plus net que ses voisins",
    },
    {
      type: "p",
      text: "Symptôme : personne ne sait dire ce qui cloche, mais tout le monde repère le plan truqué. Neuf fois sur dix, c'est la netteté et le grain : le plan traité par IA est plus lisse, plus contrasté, sans le bruit de la caméra. Fix concret : grain et étalonnage sur la séquence entière, jamais sur le plan isolé ; upscale identique pour tous les plans ; et le test des voisins, en plein écran, en enchaînant le plan précédent, le plan VFX et le suivant. [Les règles de raccord entre plans IA](/blog/raccord-continuite-plans-ia) valent aussi entre un plan filmé et un plan retouché.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Peut-on faire des VFX avec l'IA sans logiciel de compositing ?",
    },
    {
      type: "p",
      text: "Oui pour une partie des cas. Runway Edit Studio, propulsé par Aleph 2.0, retouche un plan de 2 à 30 secondes à partir d'un prompt et d'une image clé : suppression d'objet, changement de fond, de météo, d'éclairage ou de costume. La limite, c'est que le modèle régénère toute l'image : ce qui doit rester strictement identique (un visage, un produit, un logo) peut dériver. Pour ces plans, un masque dans DaVinci Resolve reste plus sûr.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien coûte une retouche vidéo avec Runway Aleph 2.0 ?",
    },
    {
      type: "p",
      text: "D'après le centre d'aide et la page tarifs de Runway lus le 19 septembre 2026 : 28 crédits par seconde de vidéo traitée, avec un minimum de 56 crédits, soit 140 crédits pour 5 secondes. Le plan Standard à 15 dollars par mois donne 625 crédits, donc à peine plus de 22 secondes de retouche Aleph ; le plan Pro à 35 dollars donne 2 250 crédits, environ 80 secondes. Si tu ne retouches qu'une plage du plan, seule cette plage est facturée.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "DaVinci Resolve gratuit suffit-il pour les VFX ?",
    },
    {
      type: "p",
      text: "Pour le compositing manuel, oui : la page Fusion (nœuds, tracking, masques, incrustation fond vert) est incluse dans la version gratuite. Ce qui manque au gratuit, ce sont les outils du DaVinci AI Neural Engine que Blackmagic réserve à Resolve Studio (255 euros, licence perpétuelle) : Magic Mask pour isoler et suivre une personne ou un objet, la suppression d'objets, Super Scale et la carte de profondeur.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "À quoi sert Autodesk Flow Studio en VFX ?",
    },
    {
      type: "p",
      text: "À remplacer un acteur filmé par un personnage 3D, sans capture de mouvement ni tracking manuel. Tu envoies ta vidéo, tu assignes un personnage à chaque comédien, l'outil produit l'animation, la clean plate (le fond sans l'acteur), le suivi de caméra et des scènes Blender ou Maya. Le plan gratuit (300 crédits par mois, export 720p avec filigrane, une personne capturée) permet de tester ; les plans payants démarrent à 7 dollars par mois en engagement annuel.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Que faut-il prévoir au tournage pour des VFX IA ?",
    },
    {
      type: "p",
      text: "Cinq choses qui ne coûtent rien : une caméra la plus stable possible, des marqueurs de tracking (croix de ruban) sur les surfaces à remplacer, une clean plate de quelques secondes sans l'acteur, une photo de référence de la lumière (boule chromée ou simple photo du décor), et une cadence entre 24 et 30 images par seconde parce que Runway rééchantillonne au-delà de 30. Le plan se décide sur le plateau, l'outil vient après.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment éviter qu'un plan VFX se remarque au montage ?",
    },
    {
      type: "p",
      text: "En traitant le raccord comme un travail à part entière : même grain, même netteté, même colorimétrie que les plans voisins. Un plan retouché par IA ressort souvent plus lisse et plus net que le reste ; ajoute le grain en dernier sur toute la séquence, passe tous les plans par la même chaîne d'upscale, et compare le plan VFX à ses voisins en plein écran avant d'exporter.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Décide sur le plateau, retouche par plage, raccorde en dernier",
    },
    {
      type: "p",
      text: "Les effets spéciaux sans studio existent, à une condition : arrêter de les voir comme un bouton. Quatre travaux, deux familles d'outils, une colonne « ce qui doit rester identique » qui tranche entre les deux, et une caméra qui filme en pensant à l'outil. Le reste, ce sont des crédits et du temps. Les sources : [la documentation d'Edit Studio chez Runway](https://help.runwayml.com/hc/en-us/articles/51683104370451-Creating-with-Edit-Studio), [la page tarifs de Runway](https://runwayml.com/pricing), [la page DaVinci Resolve Studio de Blackmagic](https://www.blackmagicdesign.com/fr/products/davinciresolve/studio), [les plans de Flow Studio chez Autodesk](https://www.autodesk.com/products/flow-studio/buy) et [la documentation de la capture de mouvement de Flow Studio](https://help.wonderdynamics.com/create-new-project/ai-motion-capture/).",
    },
    {
      type: "p",
      text: "Note de fondateur : les effets qui tiennent sur les films IA qu'on m'envoie servaient tous une scène écrite avant eux. C'est pour ça que dans la formation IA gratuite d'AI Studios on apprend à écrire et découper un plan avant de le truquer : quand tu sais ce que le plan doit dire, tu sais aussi ce qu'il faut y ajouter, et surtout ce qu'il faut laisser tranquille.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-19 -->
