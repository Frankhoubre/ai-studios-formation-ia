import type { Article } from "@/lib/types/article";

export const videoPubliciteLocaleIa: Article = {
  title: "Publicité locale IA : filmer le vrai, générer le reste",
  slug: "video-publicite-locale-ia",
  description:
    "La méthode pour un spot vidéo de commerce : ce que tu filmes toi-même, ce que l'IA génère, et la ligne à ne pas franchir quand le client connaît la vitrine.",
  excerpt:
    "Une pub nationale peut se permettre un décor inventé. Une pub de quartier, non : les gens à qui elle s'adresse passent devant la boutique tous les matins. Tout le travail consiste à savoir quels plans se filment au téléphone et lesquels peuvent sortir d'un générateur.",
  category: "business-creatif",
  tags: [
    "Publicité locale",
    "Commerce de proximité",
    "Vidéo IA",
    "Fiche d'établissement",
    "Artisans",
  ],
  date: "2026-10-01",
  updatedAt: "2026-10-01",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/video-publicite-locale-ia.webp",
  imageAlt:
    "Un quincaillier âgé en blouse grise, debout sur le trottoir mouillé devant sa boutique à l'heure bleue, trousseau de clés à la main, lève les yeux vers l'écran installé dans sa vitrine qui diffuse un plan serré de son propre comptoir en bois, rideau métallique à moitié baissé et scooter garé au bord du caniveau",
  keywords: [
    "publicité locale ia",
    "pub vidéo artisan",
    "spot vidéo commerce local",
    "vidéo ia commerce de proximité",
    "publicité commerce de proximité",
  ],
  relatedSlugs: [
    "flux-lora-publicite-locale",
    "kling-runway-montage-ads",
    "creer-publicite-ia",
  ],
  faq: [
    {
      question:
        "Peut-on faire une publicité locale entièrement générée par IA ?",
      answer:
        "Techniquement oui, commercialement c'est une mauvaise idée. L'audience d'un spot local est composée de gens qui passent devant le commerce. Un comptoir, une façade ou une équipe inventés se repèrent en une seconde par les seules personnes que tu cherches à convaincre. Le travail utile consiste à filmer quatre ou cinq plans réels au téléphone et à confier le reste (habillage, transitions, plans d'illustration, musique, voix) à l'IA.",
    },
    {
      question: "Quels plans faut-il filmer soi-même dans un spot de commerce ?",
      answer:
        "Tout ce qui identifie le lieu et la personne : la devanture avec l'enseigne, l'intérieur réel, le geste du métier, le visage du patron ou de l'équipe. Ces plans ne demandent pas de matériel, un téléphone récent et une heure de lumière correcte suffisent. Le reste du montage (titre animé, macro décorative, fond de générique, transition) peut être généré sans que personne n'y trouve à redire.",
    },
    {
      question: "Que dit la loi française sur une pub vidéo générée par IA ?",
      answer:
        "Le code de la consommation juge le message, quel que soit l'outil qui l'a fabriqué. L'article L121-2 qualifie de pratique commerciale trompeuse toute allégation fausse ou de nature à induire en erreur sur les caractéristiques essentielles d'un bien ou d'un service. Montrer un atelier que tu n'as pas, un résultat que tu ne sais pas produire ou une équipe qui n'existe pas entre dans cette définition. L'article L132-2 prévoit deux ans d'emprisonnement et 300 000 euros d'amende, portés à cinq ans et 750 000 euros quand l'infraction passe par un service de communication en ligne.",
    },
    {
      question: "Quelles sont les contraintes vidéo d'une fiche d'établissement Google ?",
      answer:
        "Google demande une vidéo de 30 secondes maximum, un fichier de 75 Mo maximum et une résolution d'au moins 720p. Les photos obéissent à des règles plus intéressantes encore pour notre sujet : format JPG ou PNG, entre 10 Ko et 5 Mo, et une consigne de qualité qui exclut les retouches importantes et les filtres excessifs, avec cette phrase de l'aide officielle, l'image doit être fidèle à la réalité. Compte 24 à 48 heures avant l'affichage de ce que tu envoies.",
    },
    {
      question: "Combien coûte un spot vidéo local produit avec l'IA ?",
      answer:
        "Le coût de production tombe très bas, quelques euros de crédits de génération et une demi-journée de travail. C'est précisément pour ça qu'il faut arrêter de facturer au temps passé. Ce que le commerçant emporte, c'est une vidéo qui tournera sur sa fiche Google, en story et sur l'écran de sa vitrine pendant six mois. Construis ta grille sur cette durée d'usage et sur le nombre de formats livrés.",
    },
    {
      question: "Faut-il déclarer qu'un spot local contient des plans générés ?",
      answer:
        "Les plateformes s'en chargent souvent seules à partir des métadonnées du fichier, et c'est très bien ainsi. Le point sensible se situe ailleurs : si le spot montre une personne réelle reconnaissable qui n'a jamais dit ni fait ce que la vidéo lui prête, tu entres dans un tout autre régime, celui du deepfake et du droit à l'image. Pour un commerce, tiens une règle fixe : toute personne à l'écran est une vraie personne qui a signé une autorisation.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Le spot est propre. Musique, voix off, dix secondes de plans d'atelier impeccables, un logo qui atterrit pile sur le temps fort. Et le premier commentaire sous le post demande depuis quand le garage a refait sa façade. Personne n'a refait la façade, elle a été générée.",
    },
    {
      type: "p",
      text: "Voilà la contrainte que la pub de quartier ajoute à toutes les autres : son public connaît le lieu par cœur. Plus bas, une grille qui range les plans en deux colonnes (ceux qui se filment au téléphone, ceux qui peuvent sortir d'un générateur) selon le type de commerce, une méthode en cinq étapes pour une demi-journée de travail, les contraintes techniques de diffusion relevées le 1er octobre 2026, et quatre erreurs qui font perdre le client plus vite qu'un mauvais montage.",
    },
    {
      type: "p",
      text: "La vidéo IA n'a jamais été aussi utile aux petits commerces, et jamais aussi dangereuse pour eux. Le même outil qui te fabrique un habillage de qualité en douze minutes te fabrique aussi un mensonge visuel que la boulangère d'en face repérera avant midi.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ton audience passe devant la vitrine tous les jours",
    },
    {
      type: "p",
      text: "Une marque nationale peut tourner son film dans un décor construit, dans un studio de Prague, avec des comédiens. Personne ne vérifie, et personne ne s'en soucie : le spectateur achète l'univers, pas l'adresse. Un spot de commerce local fonctionne à l'inverse. Il est vu par un rayon de trois kilomètres, c'est-à-dire par les seules personnes au monde capables de dire que le comptoir n'est pas le bon.",
    },
    {
      type: "p",
      text: "Cette audience minuscule est aussi la raison d'être de la pub locale. Elle convertit parce qu'elle est reconnaissable. Lui retirer le lieu réel, c'est lui retirer son seul avantage sur une bannière générique.",
    },
    {
      type: "h3",
      text: "Google demande déjà des images fidèles à la réalité",
    },
    {
      type: "p",
      text: "Avant même de parler de loi, la plateforme qui compte le plus pour un commerce local pose ses propres règles. L'aide de la fiche d'établissement Google fixe les contraintes de fichier, et la consigne de qualité qui les accompagne vaut pour tout ce que tu publies dessus.",
    },
    {
      type: "image",
      src: "/images/articles/video-publicite-locale-ia-gbp-specs.webp",
      alt: "Page d'aide Google listant les consignes photos et vidéos d'une fiche d'établissement, avec la durée de 30 secondes, la taille de 75 Mo et la résolution minimale de 720p",
      caption:
        "Les consignes photos et vidéos de l'aide Fiche d'établissement Google, capturées le 1er octobre 2026.",
    },
    {
      type: "p",
      text: "Côté vidéo : **jusqu'à 30 secondes**, **jusqu'à 75 Mo**, **au moins 720p**. Côté photo, Google demande un fichier JPG ou PNG entre 10 Ko et 5 Mo, une image nette et bien éclairée, et précise qu'elle ne doit pas faire l'objet de retouches importantes ni de filtres excessifs, avant de conclure que l'image doit être fidèle à la réalité. La consigne vise à l'origine les filtres Instagram, elle attrape aujourd'hui tout ce que tu fabriques de toutes pièces. Prévois aussi 24 à 48 heures avant que ton envoi s'affiche.",
    },
    {
      type: "h3",
      text: "Le risque juridique porte sur ce que le spot promet",
    },
    {
      type: "p",
      text: "On me demande souvent quel texte encadre la vidéo générée. Il existe, et il te concerne beaucoup moins que celui-ci. Le risque concret pour une pub de commerce est logé dans [l'article L121-2 du code de la consommation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114), qui qualifie de pratique commerciale trompeuse toute allégation fausse ou de nature à induire en erreur portant sur les caractéristiques essentielles du bien ou du service, ses qualités substantielles, son origine ou les résultats attendus de son utilisation.",
    },
    {
      type: "p",
      text: "Traduit en plans de montage : une terrasse qui n'existe pas, un atelier deux fois plus grand que le vrai, un avant/après de coiffure fabriqué, un chantier que tu n'as jamais réalisé. L'article L132-2 prévoit deux ans d'emprisonnement et 300 000 euros d'amende, portés à cinq ans et 750 000 euros quand l'infraction passe par un service de communication au public en ligne, avec des majorations possibles à 10 % du chiffre d'affaires annuel moyen ou à 50 % des dépenses engagées pour la publicité.",
    },
    {
      type: "p",
      text: "Ces montants visent les dossiers industriels, pas le gérant d'un salon qui a mis un fond flou derrière son prix. Garde-les quand même en tête au moment d'arbitrer, parce qu'ils disent où passe la ligne. Elle passe entre l'habillage et la promesse, et le caractère généré d'un plan n'y change rien.",
    },
    {
      type: "p",
      text: "Côté habillage, tu as les mains libres : titres animés, fonds texturés, transitions, pictogrammes, macro décorative, générique de fin, musique, voix off. Rien de tout ça n'affirme quoi que ce soit sur le commerce. C'est d'ailleurs là que l'IA fait gagner le plus de temps, et c'est ce que couvre déjà notre [guide du workflow publicitaire complet](/blog/creer-publicite-ia).",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Quels plans tu filmes, quels plans tu génères",
    },
    {
      type: "p",
      text: "La grille que j'utilise pour trancher avant d'ouvrir le moindre générateur se lit par métier, parce que l'élément reconnaissable change d'un commerce à l'autre. Chez le garagiste c'est la façade. Chez le coiffeur c'est le résultat sur une tête.",
    },
    {
      type: "table",
      caption:
        "Ce que chaque commerce doit filmer lui-même, et ce qui peut sortir d'un générateur",
      headers: [
        "Commerce",
        "À filmer au téléphone",
        "Générable sans mentir",
        "Le plan qui te trahit",
      ],
      rows: [
        [
          "Boulangerie",
          "La vitrine à 7 h, les mains dans la pâte, l'ouverture du four",
          "Macro de mie et de vapeur, fond texturé pour le titre, transitions",
          "Un salon de dégustation que la boutique n'a pas",
        ],
        [
          "Garage",
          "La façade avec l'enseigne, le pont élévateur, le patron qui parle 8 secondes",
          "Animation d'une pièce en éclaté, cartons d'habillage, logo animé",
          "Un atelier plus grand et plus propre que le vrai",
        ],
        [
          "Salon de coiffure",
          "Le fauteuil, le geste de coupe, le résultat sur une cliente qui a signé une autorisation",
          "Fond coloré, habillage des tarifs, boucle de texture cheveux",
          "Un avant/après fabriqué de toutes pièces",
        ],
        [
          "Restaurant",
          "La salle en plein service, l'assiette telle qu'elle sort, la terrasse",
          "Plan d'ambiance abstrait, titre sur fond flou, générique de fin",
          "Un plat généré qui n'est pas à la carte",
        ],
        [
          "Artisan du bâtiment",
          "Un chantier fini avec l'accord du client, le camion, les mains au travail",
          "Schéma animé d'une étape technique, carte de la zone d'intervention",
          "Une réalisation que tu n'as jamais faite",
        ],
        [
          "Cabinet (ostéo, vétérinaire, avocat)",
          "La salle d'attente, l'accueil, le praticien qui explique une chose utile",
          "Pictogrammes animés, fond de titre, plan d'illustration neutre",
          "Un faux patient, un faux témoignage",
        ],
      ],
    },
    {
      type: "p",
      text: "Dans la colonne de droite, le plan qui trahit est toujours celui qui promet quelque chose. Les plans décoratifs, eux, passent sans encombre. Et c'est bien sûr le plan de promesse que les générateurs produisent le plus facilement, par un hasard qui n'en est pas un.",
    },
    {
      type: "p",
      text: "Pour la partie photo du même chantier (visuels fixes, affiches de vitrine, posts), la méthode est détaillée dans notre article sur les [visuels publicitaires locaux avec Flux et un LoRA](/blog/flux-lora-publicite-locale), et le cas particulier de la restauration dans celui sur la [photo culinaire d'un restaurant](/blog/photo-culinaire-ia-restaurant).",
    },
    {
      type: "h3",
      text: "La demi-journée, étape par étape",
    },
    {
      type: "ol",
      items: [
        "**Repérage, 30 minutes sur place, téléphone à la main.** Tu filmes 10 à 12 plans de 5 secondes en 4K, stabilisé contre un mur ou posé sur un comptoir. Façade, enseigne, intérieur, geste du métier, produit, visage. Tu repars avec la matière reconnaissable, le reste se fabrique au bureau.",
        "**Six lignes de script, pas une de plus.** Une accroche qui nomme le quartier, le problème, ce que le commerce fait, une preuve, l'adresse, l'action. Vingt secondes se remplissent plus vite qu'on ne croit, et la version courte sera toujours la meilleure.",
        "**Génération de l'habillage.** Titres animés, plans d'illustration, transitions, fond de générique. Trois à six éléments suffisent. Garde une direction visuelle unique sur toute la vidéo, les générateurs dérivent dès qu'on les laisse improviser.",
        "**Voix et son.** Voix off générée si le commerçant refuse le micro, musique sans droits, et surtout un mixage où la voix passe au-dessus de tout. La méthode complète est dans le [guide de la voix off IA](/blog/voix-off-ia-guide).",
        "**Montage et exports.** Un master 20 secondes, puis trois sorties : 9:16 pour les stories et Reels, 1:1 pour le feed, 16:9 pour l'écran de vitrine et le site. Sous-titres incrustés sur toutes les versions, la lecture se fait sans son dans la majorité des cas.",
      ],
    },
    {
      type: "p",
      text: "Sur l'étape 3, le choix du modèle dépend de ce que tu veux en faire. La documentation vidéo de l'API Gemini range les deux familles côte à côte et explique dans quel cas chacune sert.",
    },
    {
      type: "image",
      src: "/images/articles/video-publicite-locale-ia-veo-ref.webp",
      alt: "Documentation de l'API Gemini sur la génération vidéo, comparant Gemini Omni Flash et Veo 3.1 avec leurs cas d'usage respectifs",
      caption:
        "La page de documentation vidéo de l'API Gemini, capturée le 1er octobre 2026.",
    },
    {
      type: "p",
      text: "Google y présente Gemini Omni Flash comme le modèle par défaut, capable de transformer des prompts texte et des images en vidéos courtes avec de l'édition conversationnelle en plusieurs tours. Veo 3.1 est réservé à l'extension de scène, au contrôle de la dernière image et à la direction par l'image. Cette direction par l'image te permet de partir d'une photo que tu as prise sur place et de la mettre en mouvement, au lieu de demander au modèle d'inventer un lieu. Le principe est le même que dans notre [méthode image vers vidéo](/blog/image-to-video-ia-methode).",
    },
    {
      type: "p",
      text: "> Pro Tip : filme tes plans de repérage en 4K même si le livrable sort en 1080p. La marge de recadrage te donne gratuitement un 9:16, un 1:1 et un 16:9 à partir d'une seule prise, ce qui t'évite de retourner sur place pour les formats que le client va réclamer trois jours plus tard.",
    },
    {
      type: "p",
      text: "Côté diffusion, prévois les trois canaux dès le montage : la fiche d'établissement Google (30 secondes maximum, 75 Mo, 720p minimum), les formats sociaux verticaux, et l'écran de vitrine s'il y en a un. Sur les mécaniques propres aux formats courts, nos [formats vidéo IA qui tournent sur TikTok](/blog/tiktok-formats-video-ia-viraux) donnent le détail des trois premières secondes.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quatre erreurs qui coûtent le client",
    },
    {
      type: "h3",
      text: "Générer la devanture parce que la vraie est moche",
    },
    {
      type: "p",
      text: "Ça s'entend au ton du commerçant : il trouve le spot très beau et ajoute, gêné, que ce serait bien de refaire la façade un jour. Tu viens de produire une vidéo dont il a honte. Et le client qui pousse la porte compare malgré lui.",
    },
    {
      type: "p",
      text: "Fix concret : filme la vraie façade au bon moment de la journée. Une heure avant le coucher du soleil, une devanture quelconque devient photogénique sans qu'on ait touché à un pixel. Si elle reste difficile, cadre serré sur l'enseigne et le détail qui marche, et laisse l'habillage faire le reste du travail.",
    },
    {
      type: "h3",
      text: "Mettre un comédien généré à la place du patron",
    },
    {
      type: "p",
      text: "Le problème est d'abord humain. Dans un commerce de proximité, la personne derrière le comptoir représente la moitié de l'argument de vente, et la remplacer par un avatar supprime la raison d'y aller. Le volet juridique arrive ensuite, dès qu'un visage reconnaissable se met à parler sans avoir rien dit.",
    },
    {
      type: "p",
      text: "Fix concret : huit secondes de patron face caméra valent mieux qu'une minute d'avatar impeccable. S'il refuse de parler, filme ses mains au travail et confie le texte à une voix off. Et si une personne figure à l'écran, fais signer une autorisation, même à l'apprenti, même pour un plan de dos.",
    },
    {
      type: "h3",
      text: "Livrer un seul fichier et considérer le travail fini",
    },
    {
      type: "p",
      text: "Un 16:9 de 45 secondes qui ne rentre ni dans la fiche Google (plafonnée à 30 secondes), ni dans une story, ni dans une boucle de vitrine. Le commerçant le poste une fois sur sa page Facebook, le fichier ne ressort jamais, et six mois plus tard il explique à son entourage que la vidéo n'a rien donné.",
    },
    {
      type: "p",
      text: "Fix concret : trois ratios, deux durées (20 secondes et une version de 8 secondes sans voix pour la vitrine), sous-titres incrustés partout. Range la livraison dans un dossier dont les noms disent l'usage, parce que ton interlocuteur n'ouvrira jamais un fichier appelé master_v3_final.",
    },
    {
      type: "h3",
      text: "Facturer la demi-journée au lieu de la vidéo",
    },
    {
      type: "p",
      text: "La production coûte désormais quelques euros de crédits et quatre heures de ton temps. Si tu factures à l'heure, tu annonces 250 euros, et tu enfermes ta prestation dans une case où le prochain prestataire annoncera 180. Le travail réel se joue ailleurs, dans le choix des plans à ne surtout pas générer, et ce choix-là prend dix minutes.",
    },
    {
      type: "p",
      text: "Fix concret : une offre packagée, trois formats, une durée d'exploitation, une révision incluse. Le commerçant compare alors ta proposition au prix d'un encart dans le journal local plutôt qu'au tarif horaire d'un monteur. La construction de cette grille est détaillée dans notre article sur la [grille de prix d'une création IA](/blog/fixer-prix-creation-ia-grille).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Peut-on faire une publicité locale entièrement générée par IA ?",
    },
    {
      type: "p",
      text: "Techniquement oui, commercialement c'est une mauvaise idée. L'audience d'un spot local est composée de gens qui passent devant le commerce. Un comptoir, une façade ou une équipe inventés se repèrent en une seconde par les seules personnes que tu cherches à convaincre. Le travail utile consiste à filmer quatre ou cinq plans réels au téléphone et à confier le reste (habillage, transitions, plans d'illustration, musique, voix) à l'IA.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quels plans faut-il filmer soi-même dans un spot de commerce ?",
    },
    {
      type: "p",
      text: "Tout ce qui identifie le lieu et la personne : la devanture avec l'enseigne, l'intérieur réel, le geste du métier, le visage du patron ou de l'équipe. Ces plans ne demandent pas de matériel, un téléphone récent et une heure de lumière correcte suffisent. Le reste du montage (titre animé, macro décorative, fond de générique, transition) peut être généré sans que personne n'y trouve à redire.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Que dit la loi française sur une pub vidéo générée par IA ?",
    },
    {
      type: "p",
      text: "Le code de la consommation juge le message, quel que soit l'outil qui l'a fabriqué. L'article L121-2 qualifie de pratique commerciale trompeuse toute allégation fausse ou de nature à induire en erreur sur les caractéristiques essentielles d'un bien ou d'un service. Montrer un atelier que tu n'as pas, un résultat que tu ne sais pas produire ou une équipe qui n'existe pas entre dans cette définition. L'article L132-2 prévoit deux ans d'emprisonnement et 300 000 euros d'amende, portés à cinq ans et 750 000 euros quand l'infraction passe par un service de communication en ligne.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Quelles sont les contraintes vidéo d'une fiche d'établissement Google ?",
    },
    {
      type: "p",
      text: "Google demande une vidéo de 30 secondes maximum, un fichier de 75 Mo maximum et une résolution d'au moins 720p. Les photos obéissent à des règles plus intéressantes encore pour notre sujet : format JPG ou PNG, entre 10 Ko et 5 Mo, et une consigne de qualité qui exclut les retouches importantes et les filtres excessifs, avec cette phrase de l'aide officielle, l'image doit être fidèle à la réalité. Compte 24 à 48 heures avant l'affichage de ce que tu envoies.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Combien coûte un spot vidéo local produit avec l'IA ?",
    },
    {
      type: "p",
      text: "Le coût de production tombe très bas, quelques euros de crédits de génération et une demi-journée de travail. C'est précisément pour ça qu'il faut arrêter de facturer au temps passé. Ce que le commerçant emporte, c'est une vidéo qui tournera sur sa fiche Google, en story et sur l'écran de sa vitrine pendant six mois. Construis ta grille sur cette durée d'usage et sur le nombre de formats livrés.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Faut-il déclarer qu'un spot local contient des plans générés ?",
    },
    {
      type: "p",
      text: "Les plateformes s'en chargent souvent seules à partir des métadonnées du fichier, et c'est très bien ainsi. Le point sensible se situe ailleurs : si le spot montre une personne réelle reconnaissable qui n'a jamais dit ni fait ce que la vidéo lui prête, tu entres dans un tout autre régime, celui du deepfake et du droit à l'image. Pour un commerce, tiens une règle fixe : toute personne à l'écran est une vraie personne qui a signé une autorisation.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Le test à faire avant de livrer",
    },
    {
      type: "p",
      text: "Montre ton montage à quelqu'un qui habite le quartier et qui ne connaît pas le dossier. Demande-lui simplement de te dire où c'est. S'il hésite, ou s'il nomme un autre commerce, le spot a raté la seule chose qu'une pub locale doit réussir. Retourne filmer deux plans et recommence le montage, ça prend une heure.",
    },
    {
      type: "p",
      text: "Et garde la grille du milieu de cet article ouverte pendant la production. Devant chaque plan généré, demande-toi s'il promet quelque chose au spectateur. Si oui, il se filme. Les autres, génère-les sans état d'âme, c'est exactement pour ça que ces outils existent.",
    },
    {
      type: "p",
      text: "Note de fondateur : si tu veux attaquer ce marché, le vrai apprentissage porte sur la direction artistique et sur la façon de cadrer un commerçant qui n'a jamais été filmé de sa vie. C'est une bonne partie de ce qu'on travaille dans la formation IA gratuite d'AI Studios. Les outils, tu les auras pris en main en un week-end.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-01 -->
