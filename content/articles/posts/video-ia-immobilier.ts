import type { Article } from "@/lib/types/article";

export const videoIaImmobilier: Article = {
  title: "Vidéo IA immobilier : embellir sans mentir",
  slug: "video-ia-immobilier",
  description:
    "Vidéo IA pour l'immobilier : les usages qui tiennent face à une visite, les mentions que ton annonce doit porter, et la méthode pour animer de vraies photos.",
  excerpt:
    "Ton acheteur viendra vérifier. C'est la contrainte qui distingue l'immobilier de tous les autres terrains de la vidéo IA, et elle décide de ce que tu as le droit de générer.",
  category: "business-creatif",
  tags: ["immobilier", "vidéo ia", "annonce immobilière", "métiers"],
  date: "2026-09-04",
  updatedAt: "2026-09-04",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/video-ia-immobilier.webp",
  imageAlt:
    "Appartement parisien vide un matin d'hiver, parquet à bâtons rompus et cheminée en marbre, une femme de profil lève son téléphone vers la moulure du plafond pendant qu'un homme désigne une trace d'humidité sur le mur",
  keywords: [
    "vidéo ia immobilier",
    "visite virtuelle ia",
    "annonce immobilière vidéo",
    "home staging virtuel",
    "vidéo agence immobilière",
  ],
  relatedSlugs: [
    "video-ia-pour-entreprise",
    "image-to-video-ia-methode",
    "photos-produit-ia-shooting",
  ],
  faq: [
    {
      question: "A-t-on le droit de générer une vidéo d'un bien avec l'IA ?",
      answer:
        "Rien ne l'interdit en tant que tel. Ce qui compte, c'est l'écart entre l'image et le bien. Dès que la vidéo laisse croire à une hauteur sous plafond, une luminosité, une vue ou un état qui ne correspondent pas, tu tombes sous le régime des pratiques commerciales trompeuses du code de la consommation. En pratique, la règle que je conseille est simple : tout plan qu'un acheteur pourra comparer sur place doit partir d'une photo réelle du bien.",
    },
    {
      question:
        "Quelles mentions obligatoires doit porter une vidéo d'annonce immobilière ?",
      answer:
        "Les mêmes que l'annonce écrite, parce que l'arrêté du 10 janvier 2017 modifié le 26 janvier 2022 vise la publicité quel que soit le support utilisé. Pour une vente : le prix, à qui incombe le paiement des honoraires et leur montant TTC quand ils sont à la charge de l'acheteur. Pour une location : le loyer mensuel, les charges et leurs modalités, le dépôt de garantie, les honoraires, la surface habitable et la commune. S'y ajoutent la classe énergie et la classe climat du DPE, affichées lisiblement et en couleur en ligne, le montant estimé des dépenses annuelles d'énergie avec son année de référence, et la mention « logement à consommation énergétique excessive » pour les classes F et G.",
    },
    {
      question:
        "Le home staging virtuel est-il autorisé dans une annonce ?",
      answer:
        "Meubler virtuellement une pièce vide est une pratique courante et aucun texte français ne la vise nommément. La limite est ailleurs : l'image doit rester une proposition d'aménagement, pas une correction du bien. Ajouter un canapé et un tapis, oui. Effacer une trace d'humidité, redresser une fissure, agrandir une pièce ou remplacer la vue sur le parking par un jardin, non. Et la mention « aménagement virtuel » ou « suggestion d'aménagement » sur le visuel évite la moitié des discussions le jour de la visite.",
    },
    {
      question:
        "Faut-il incruster l'étiquette DPE directement dans la vidéo ?",
      answer:
        "Je le déconseille, pour une raison de maintenance. Les règles de calcul bougent : un arrêté du 11 juin 2026 introduit une nouvelle classe énergie AO pour certains bâtiments, et un arrêté du 19 août 2026 abaisse le facteur de conversion de l'électricité de 1,9 à 1,7, ce qui pourra améliorer l'étiquette des logements chauffés à l'électricité. Ces changements s'appliquent au 1er janvier 2027. Une étiquette gravée dans le montage t'oblige à réexporter chaque vidéo concernée. Mieux vaut la porter dans le descriptif de l'annonce, à côté du lecteur.",
    },
    {
      question:
        "Quelle durée et quel mouvement de caméra pour un plan généré à partir d'une photo ?",
      answer:
        "Trois à quatre secondes, un seul axe, une amplitude faible. Un lent travelling avant, une légère montée, un panoramique très court. Les modèles tiennent la géométrie d'une pièce sur ce genre de mouvement. Dès que tu demandes une rotation, un passage de porte ou un plan de dix secondes, les lignes de fuite se mettent à glisser, les plinthes se courbent et l'encadrement de fenêtre change de forme en cours de plan. Sur un bien réel, ce défaut se voit immédiatement.",
    },
    {
      question:
        "Que risque une agence qui oublie les mentions dans ses annonces ?",
      answer:
        "Pour le seul volet DPE, l'absence ou la non-conformité des mentions énergétiques est passible d'une amende pouvant atteindre 3 000 euros, portée à 15 000 euros pour une personne morale, et l'acquéreur ou le locataire peut demander des dommages et intérêts ou l'annulation de la transaction. Le sujet est suivi : dans son enquête de 2020 sur les professionnels de l'entremise immobilière, la DGCCRF relevait 62 % d'établissements en anomalie, avec plus de la moitié des manquements portant sur l'information du consommateur.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Un acheteur qui a aimé ta vidéo viendra pousser la porte. Il regardera le plafond, ouvrira la fenêtre sur la rue, comptera les prises. C'est ce qui sépare l'immobilier de tous les autres terrains de la vidéo IA : ton film sera confronté à l'original, en présence du client, et souvent dans la semaine.",
    },
    {
      type: "p",
      text: "Alors pose-toi une question devant chaque plan que tu envisages : est-ce que quelqu'un pourra le comparer à la réalité, debout dans la pièce ? Selon la réponse, tu exerces deux métiers différents, avec deux niveaux de liberté qui n'ont rien à voir.",
    },
    {
      type: "p",
      text: "Et une contrainte que les tutoriels sur la vidéo immobilière ne mentionnent jamais : ta vidéo est juridiquement une annonce. **L'arrêté du 10 janvier 2017**, modifié le 26 janvier 2022, impose ses mentions à la publicité immobilière quel que soit le support utilisé. Personne n'a prévu d'exception pour le format vertical de 30 secondes.",
    },
    {
      type: "h2",
      id: "critere-verification",
      text: "Le critère qui décide de tout : la vérification",
    },
    {
      type: "p",
      text: "Un plan de cuisine généré et un plan de quartier généré ne posent pas le même problème. Le premier sera contredit par la visite, le second ne le sera jamais. Trie tes plans sur cet axe avant de choisir un outil.",
    },
    {
      type: "table",
      caption:
        "Deux régimes de production selon ce que l'acheteur pourra confronter au réel",
      headers: ["Type de plan", "Vérifiable sur place ?", "Ce que tu peux faire"],
      rows: [
        [
          "Pièces, volumes, état des murs, vue depuis les fenêtres",
          "Oui, dans les minutes qui suivent",
          "Partir d'une photo réelle. L'IA anime, recadre, nettoie la lumière, rien de plus",
        ],
        [
          "Mobilier dans une pièce vide",
          "Oui, l'acheteur verra la pièce nue",
          "Home staging virtuel accepté, mention explicite sur le visuel",
        ],
        [
          "Quartier, commerces, ambiance de vie, saison",
          "Difficilement, et jamais au plan près",
          "Images d'illustration assumées, jamais présentées comme le bien",
        ],
        [
          "Voix off, sous-titres, habillage, musique",
          "Sans objet",
          "Liberté totale, c'est là que l'IA fait gagner le plus de temps",
        ],
        [
          "Contenu de marque de l'agence, recrutement, prospection",
          "Sans objet",
          "Liberté totale, aucun bien précis n'est en jeu",
        ],
      ],
    },
    {
      type: "p",
      text: "Ce tri explique pourquoi les vidéos IA immobilières les plus convaincantes que j'ai vues contiennent très peu d'images générées. Elles animent des photos prises correctement et gardent le générateur pour l'enrobage.",
    },
    {
      type: "h2",
      id: "mentions-obligatoires",
      text: "Ta vidéo est une annonce, avec tout ce que ça implique",
    },
    {
      type: "p",
      text: "Beaucoup d'agences produisent des reels soignés qui ne portent aucune des informations que la loi attend d'une annonce. Le raisonnement implicite est que la vidéo sert d'accroche et que le détail vit dans le descriptif. Le texte ne fait pas cette distinction.",
    },
    {
      type: "p",
      text: "Pour une vente, l'annonce indique le prix du bien, à qui incombe le paiement des honoraires de l'agence, et leur montant toutes taxes comprises quand ils sont à la charge de l'acheteur. Pour une location : le loyer mensuel, le montant et les modalités des charges, le dépôt de garantie, les honoraires, la surface habitable et la commune. Tu retrouves le détail dans le texte de l'arrêté sur [Legifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000033888549/).",
    },
    {
      type: "p",
      text: "S'ajoute le volet énergétique, qui est le plus souvent oublié : classe énergie et classe climat, affichées de façon lisible et en couleur pour une annonce en ligne, montant estimé des dépenses annuelles d'énergie pour un usage standard avec l'année de référence des prix, et la mention « logement à consommation énergétique excessive » pour les classes F et G. L'amende peut atteindre 3 000 euros, 15 000 euros pour une personne morale, et l'acquéreur peut demander l'annulation de la transaction. Le détail des mentions est sur la [fiche DPE de Service Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F16096).",
    },
    {
      type: "p",
      text: "Ces mentions constituent déjà le premier motif d'anomalie du secteur, bien avant que l'IA entre dans les workflows.",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-immobilier-dgccrf.webp",
      alt: "Page de la DGCCRF intitulée Contrôle des professionnels de l'immobilier, indiquant un taux d'établissements en anomalie de 62 % lors de l'enquête menée en 2020",
      caption:
        "Enquête de la DGCCRF sur les professionnels de l'entremise immobilière : 62 % d'établissements en anomalie. Source : economie.gouv.fr, page publiée le 08/12/2022, capture du 04/09/2026.",
    },
    {
      type: "p",
      text: "Dans cette enquête menée en 2020 sur plus d'un millier de professionnels de l'entremise immobilière, plus de la moitié des manquements relevés portaient sur l'information du consommateur, et les classes de performance énergétique et d'émissions de gaz à effet de serre figurent nommément parmi les défauts récurrents. Une vidéo mieux produite offre juste une plus belle vitrine à ces oublis-là.",
    },
    {
      type: "h3",
      text: "Pourquoi je déconseille d'incruster l'étiquette DPE dans le montage",
    },
    {
      type: "p",
      text: "L'idée paraît propre : coller l'étiquette énergie en fin de vidéo, une fois pour toutes. Le problème est qu'elle bouge. Un arrêté du 11 juin 2026 introduit une nouvelle classe énergie AO pour certains bâtiments, et un arrêté du 19 août 2026 abaisse le facteur de conversion de l'électricité de 1,9 à 1,7, ce qui pourra faire remonter l'étiquette des logements chauffés à l'électricité. Application au 1er janvier 2027.",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-immobilier-dpe.webp",
      alt: "Fiche Service Public sur le diagnostic de performance énergétique, avec un encadré Évolutions du DPE annonçant une nouvelle classe énergie AO et un facteur de conversion de l'électricité abaissé de 1,9 à 1,7 à partir du 1er janvier 2027",
      caption:
        "L'encadré « Évolutions du DPE » de la fiche officielle. Source : service-public.gouv.fr, fiche vérifiée le 01/01/2026, capture du 04/09/2026.",
    },
    {
      type: "p",
      text: "Si tu as trente biens en portefeuille avec l'étiquette gravée dans le fichier, tu réexportes trente vidéos. Garde l'information dans le descriptif de l'annonce, à côté du lecteur, là où elle se corrige en dix secondes.",
    },
    {
      type: "h2",
      id: "animer-photos",
      text: "Animer de vraies photos, la technique qui tient la route",
    },
    {
      type: "p",
      text: "Tu pars de tes photos du bien, tu les passes en image-to-video, et tu obtiens des plans qui bougent sans trahir la pièce. La méthode générale est développée dans notre guide sur [transformer une image en vidéo](/blog/image-to-video-ia-methode). Sur un logement réel, quelques réglages font la différence.",
    },
    {
      type: "h3",
      text: "Photographier en pensant au mouvement",
    },
    {
      type: "p",
      text: "Le cadrage change dès qu'une photo est destinée à bouger. Laisse de la marge sur les quatre côtés, le modèle a besoin de matière pour construire le déplacement. Descends l'appareil au niveau de la poitrine : la ligne d'horizon basse agrandit la pièce sans rien déformer. Et prends chaque pièce depuis le coin le plus éloigné de la fenêtre, dos au mur.",
    },
    {
      type: "p",
      text: "Un conseil bête mais décisif : coupe le flash et allume toutes les lampes. Les modèles gèrent mal les ombres dures et les recréent de travers dès qu'ils inventent du mouvement.",
    },
    {
      type: "h3",
      text: "Trois secondes, un seul axe",
    },
    {
      type: "p",
      text: "La consigne qui sauve le plus de plans. Un lent travelling avant, une légère montée, un panoramique de faible amplitude. Trois à quatre secondes par plan. Sur cette durée et cette amplitude, la géométrie tient.",
    },
    {
      type: "p",
      text: "Au-delà, ça se dégrade toujours de la même façon : les lignes de fuite glissent, les plinthes se courbent, un encadrement de fenêtre change de proportion en cours de plan, et une porte s'ouvre sur une pièce qui n'existe pas. Sur un bien que le client visitera, ces défauts se remarquent. L'œil qui les repère est le même que celui décrit dans notre article sur [reconnaître une image générée par IA](/blog/detecter-image-generee-ia).",
    },
    {
      type: "h3",
      text: "Le montage, avant la génération",
    },
    {
      type: "p",
      text: "Une visite se raconte comme un déplacement : entrée, pièce de vie, cuisine, chambres, extérieur, puis un plan large de la façade ou de la rue. Écris cette liste sur un coin de feuille, et génère uniquement ce qui y figure.",
    },
    {
      type: "p",
      text: "Sans cette étape, tu produis quarante clips, tu en gardes six, et tu as brûlé ton budget de crédits pour rien. C'est l'erreur de tous les débuts, la mienne comprise.",
    },
    {
      type: "h3",
      text: "La checklist de relecture avant publication",
    },
    {
      type: "ul",
      items: [
        "Chaque plan du bien part-il d'une photo réelle de ce bien précis ?",
        "Les volumes perçus correspondent-ils à la surface annoncée ?",
        "Un défaut visible en visite a-t-il disparu au montage ?",
        "La vue depuis les fenêtres est-elle celle du bien, à la bonne saison ?",
        "Les mentions de prix, honoraires, surface et DPE sont-elles présentes dans l'annonce qui porte la vidéo ?",
        "Les images d'illustration du quartier sont-elles identifiables comme telles ?",
      ],
    },
    {
      type: "h2",
      id: "home-staging",
      text: "Home staging virtuel : où passe la ligne",
    },
    {
      type: "p",
      text: "Meubler virtuellement un logement vide est devenu une pratique banale, et je la trouve honnête tant qu'elle reste une proposition. Un appartement nu se vend mal pour une raison précise : l'acheteur n'arrive pas à s'y projeter, il ne sait pas où irait son canapé. Poser un canapé, un tapis et une table dans le plan répond exactement à ça.",
    },
    {
      type: "p",
      text: "La ligne passe entre ajouter et corriger. Ajouter du mobilier laisse le bien intact. Effacer une trace d'humidité, redresser une fissure, repeindre un mur défraîchi, agrandir une pièce ou remplacer la vue sur le parking par un jardin change les caractéristiques du bien, et là tu entres dans le champ des pratiques commerciales trompeuses. Le mécanisme juridique est le même que celui détaillé pour les visuels de commerce dans notre article sur la [photo culinaire générée pour un restaurant](/blog/photo-culinaire-ia-restaurant).",
    },
    {
      type: "p",
      text: "Aucun texte français ne vise nommément l'aménagement virtuel par IA, à ma connaissance. C'est une raison de plus pour porter la mention toi-même : « aménagement virtuel » ou « suggestion d'aménagement », lisible sur le visuel et pas en petit dans le descriptif. Ça coûte deux secondes de montage et ça désamorce la discussion au moment où l'acheteur découvre la pièce nue.",
    },
    {
      type: "h2",
      id: "usages-libres",
      text: "Là où l'IA te fait vraiment gagner du temps",
    },
    {
      type: "p",
      text: "Les usages sans contrainte de fidélité sont ceux qui rapportent le plus d'heures. À mon sens, ce sont aussi les plus délaissés par la profession, qui concentre son budget vidéo sur les biens.",
    },
    {
      type: "ul",
      items: [
        "**La voix off.** Un commentaire de visite bien écrit et bien dit vaut mieux qu'une musique libre de droits sur des plans muets. La direction de lecture compte plus que le choix du générateur, tout est dans notre [guide de la voix off IA](/blog/voix-off-ia-guide).",
        "**Les sous-titres.** Une bonne part des vues se fait son coupé, dans les transports ou au bureau. Les [sous-titres automatiques](/blog/sous-titres-automatiques-ia-video) prennent quelques minutes à générer et rattrapent ces vues-là.",
        "**Les plans d'ambiance de quartier.** Marché du samedi, école, ligne de tram, terrasses. À poser en illustration assumée, avec une mention à l'écran si le doute est possible.",
        "**Le contenu de marque.** Présentation de l'agence, portraits d'équipe, explication du compromis, réponses aux questions de vendeurs. Aucun bien précis n'est en jeu, tu es libre.",
        "**La prospection.** Une vidéo courte par secteur, sur les prix constatés et les délais de vente, produit plus de mandats qu'une boîte aux lettres remplie de flyers.",
      ],
    },
    {
      type: "p",
      text: "Cette dernière ligne est celle que je pousserais en premier si je conseillais une agence aujourd'hui. Elle utilise l'IA là où elle est bonne, elle ne touche à aucun bien, et elle nourrit le seul stock qui manque vraiment dans ce métier : les mandats. La logique est la même que pour les autres usages professionnels détaillés dans notre panorama de la [vidéo IA en entreprise](/blog/video-ia-pour-entreprise).",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Cinq erreurs qui coûtent un mandat",
    },
    {
      type: "ol",
      items: [
        "Générer la pièce au lieu de la filmer. Le gain de temps est réel, la déception du visiteur aussi, et elle se paie en confiance perdue avec le vendeur autant qu'avec l'acheteur.",
        "Changer la saison. Un jardin en fleurs sur une visite de novembre, ça se voit tout de suite, et ça donne le ton pour le reste de la visite.",
        "Oublier le vendeur dans la boucle. Il connaît son bien mieux que toi. Fais-lui valider la vidéo avant publication, il repérera l'anomalie que tu n'as pas vue.",
        "Publier la même vidéo sur tous les canaux sans vérifier les mentions. Chaque support qui diffuse l'annonce porte les mêmes obligations.",
        "Confondre reach et mandat. Une vidéo qui fait des vues sur un bien déjà sous compromis ne sert à rien. Le bon moment pour produire, c'est à la prise de mandat.",
      ],
    },
    {
      type: "h2",
      id: "chantier",
      text: "Ton chantier de la semaine",
    },
    {
      type: "p",
      text: "Prends le bien le plus difficile de ton portefeuille, celui qui ne bouge pas. Rephotographie-le selon les repères plus haut : marge sur les bords, appareil à hauteur de poitrine, lampes allumées, flash coupé, chaque pièce depuis le coin opposé à la fenêtre. Sur un trois pièces, ça se fait en moins d'une heure.",
    },
    {
      type: "p",
      text: "Écris ensuite un ordre de six plans et anime uniquement ces six-là, trois secondes chacun, un seul mouvement. Ajoute une voix off de quarante secondes et des sous-titres. Vérifie que l'annonce qui porte la vidéo contient bien le prix, les honoraires, la surface et les deux étiquettes du DPE.",
    },
    {
      type: "p",
      text: "Tu auras produit en une demi-journée quelque chose que la plupart des annonces de ton secteur n'ont pas, et tu sauras exactement quoi refaire sur le bien suivant. Le vrai test arrive à la visite : si personne ne commente l'écart entre la vidéo et la pièce, c'est réussi.",
    },
    {
      type: "p",
      text: "Note de fondateur : la question qu'on me pose sur ce sujet, c'est toujours quel générateur choisir. Je réponds rarement, parce que la réponse dépend d'un tri que l'agent n'a pas encore fait : quels plans seront confrontés à la réalité, et lesquels ne le seront jamais. Ce tri décide du budget, du matériel et même de la façon de photographier. La formation IA gratuite d'AI Studios y passe du temps avant de parler d'outils, et c'est volontaire.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-04 -->
