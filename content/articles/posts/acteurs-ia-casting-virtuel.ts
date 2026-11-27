import type { Article } from "@/lib/types/article";

export const acteursIaCastingVirtuel: Article = {
  title: "Acteur IA : ce que le casting virtuel permet vraiment",
  slug: "acteurs-ia-casting-virtuel",
  description:
    "Acteur IA : synthétique, réplique numérique ou transfert de jeu ? Ce que SAG-AFTRA 2026 et l'article 226-8 imposent, et comment caster un personnage.",
  excerpt:
    "Le mot « acteur IA » recouvre trois objets qui n'ont ni le même prix ni le même droit : le personnage synthétique façon Tilly Norwood, la réplique numérique d'une personne réelle, et le transfert de jeu d'un comédien vers un personnage dessiné. Le troisième est celui qui te concerne. Voici comment le caster, ce que dit la loi française, et ce que le contrat SAG-AFTRA 2026 a changé.",
  category: "ia-video",
  tags: [
    "acteur ia",
    "casting virtuel",
    "comédien ia",
    "personnage ia",
    "runway act-two",
    "droit à l'image",
  ],
  date: "2026-09-18",
  updatedAt: "2026-09-18",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/acteurs-ia-casting-virtuel.webp",
  imageAlt:
    "Salle de répétition de théâtre aux rideaux noirs, une comédienne en survêtement gris joue un monologue sur une marque au sol, tandis qu'un projecteur affiche sur le mur un vieux pêcheur en bonnet de laine reproduisant exactement son expression et sa main levée, table de casting au premier plan couverte de photos de comédiens et d'un gobelet de café",
  keywords: [
    "acteur ia",
    "casting virtuel",
    "comédien ia",
    "personnage synthétique",
    "réplique numérique",
    "runway act-two",
  ],
  relatedSlugs: [
    "personnage-coherent-ia",
    "lip-sync-ia-faire-parler-personnage",
    "influenceur-virtuel-ia",
  ],
  faq: [
    {
      question: "Tilly Norwood est-elle une actrice ?",
      answer:
        "C'est un personnage généré par IA, créé en 2025 par Xicoia, la division IA de la société de production Particle6 d'Eline Van der Velden, et présenté au Zurich Summit le 27 septembre 2025. Le syndicat SAG-AFTRA a répondu le 30 septembre 2025 qu'il ne s'agit pas d'une actrice mais d'un personnage produit par un programme entraîné sur le travail de comédiens professionnels. Un premier long-métrage, Misaligned, a été annoncé par Particle6 en juillet 2026.",
    },
    {
      question: "Puis-je utiliser le visage d'un acteur connu dans une vidéo IA ?",
      answer:
        "Pas sans son accord écrit. En France, l'article 226-8 du Code pénal punit d'un an de prison et 15 000 euros d'amende la diffusion d'un contenu généré par traitement algorithmique représentant l'image ou les paroles d'une personne sans son consentement, quand le caractère artificiel n'est pas évident ou n'est pas expressément mentionné. La peine monte à deux ans et 45 000 euros quand la diffusion passe par un service en ligne. Le droit à l'image de l'article 9 du Code civil s'ajoute au pénal.",
    },
    {
      question: "C'est quoi, un casting virtuel ?",
      answer:
        "C'est le choix d'un comédien réel dont le jeu sera transféré vers un personnage conçu à l'avance. Le comédien joue la scène face à une caméra, l'outil applique ses expressions, ses gestes et sa voix au personnage. Tu castes donc deux choses : un visage dessiné, et l'humain qui va l'habiter.",
    },
    {
      question: "Combien coûte une prise avec Runway Act-Two ?",
      answer:
        "Selon le centre d'aide de Runway lu le 18 septembre 2026 : 5 crédits par seconde, minimum facturé 3 secondes (donc 15 crédits même pour une prise de 2 secondes), durée maximale 30 secondes, sortie en 1280 x 720 à 24 images par seconde en 16:9, et fonction réservée au plan Standard ou supérieur.",
    },
    {
      question: "Que dit le contrat SAG-AFTRA 2026 sur les acteurs IA ?",
      answer:
        "Le contrat, ratifié à 91,42 % et en vigueur du 1er juillet 2026 au 30 juin 2030, distingue la réplique numérique (qui ressemble à une personne précise) du synthétique (qui ressemble à une personne sans être identifiable). Un producteur signataire ne peut pas utiliser un synthétique sans notification et négociation préalables avec le syndicat, s'engage à ne pas remplacer un rôle humain sauf « valeur ajoutée significative » par rapport à un humain ou à sa réplique, et le syndicat peut réclamer des dommages qui dépassent ce qu'un comédien aurait touché.",
    },
    {
      question: "Dois-je signaler qu'un personnage est généré par IA ?",
      answer:
        "Dès qu'une personne réelle est reconnaissable, oui, c'est la condition de l'article 226-8 pour ne pas tomber dans le délit. Pour un personnage entièrement synthétique, la mention n'est pas exigée par cet article, mais le règlement européen sur l'IA impose depuis le 2 août 2026 de signaler les contenus générés qui donnent l'impression de montrer des personnes réelles, et des festivals comme l'Astana AI Film Festival exigent au dépôt que les modèles et le pipeline soient déclarés.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as un personnage qui tient sur quarante images. Même visage, même cicatrice, même manteau. Le jour où il doit jouer une scène, il fige : la bouche bouge à peu près, les yeux ne regardent rien, et la colère que tu avais écrite ressemble à un bâillement. Alors tu te dis qu'il faudrait un vrai acteur. Et tu te demandes si tu as le droit de prendre un visage connu, ou s'il faut un comédien, ou si tout ça se règle avec un prompt.",
    },
    {
      type: "p",
      text: "Ici, tu vas d'abord séparer les trois objets que le mot « acteur IA » mélange : le personnage synthétique façon Tilly Norwood, la réplique numérique d'une personne réelle, et le transfert de jeu d'un comédien vers un personnage dessiné. Tu verras ce que la loi française punit (article 226-8 du Code pénal, texte lu sur Légifrance), ce que le contrat SAG-AFTRA de 2026 a fixé aux États-Unis, et comment se monte un casting virtuel propre, avec les chiffres de Runway Act-Two lus sur le centre d'aide le 18 septembre 2026.",
    },
    {
      type: "p",
      text: "Tilly Norwood fait les titres. Ton film, lui, dépend du comédien que tu vas payer pour jouer derrière ton personnage.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Acteur IA : trois objets que tout le monde confond",
    },
    {
      type: "h3",
      text: "Le synthétique, la réplique et le transfert de jeu",
    },
    {
      type: "p",
      text: "Le **synthétique** est un personnage sans modèle humain identifiable. Tilly Norwood en est l'exemple le plus commenté : un personnage créé en 2025 par Xicoia, la division IA de Particle6, la société de production d'Eline Van der Velden, avec un compte Instagram ouvert en mai 2025 et une présentation officielle au Zurich Summit du festival de Zurich le 27 septembre 2025. Trois jours plus tard, SAG-AFTRA publiait un communiqué : Tilly Norwood n'est pas une actrice, c'est un personnage généré par un programme entraîné sur le travail d'innombrables comédiens professionnels, sans permission ni rémunération. Les agences Gersh et WME ont fait savoir qu'elles ne la représenteraient pas. Particle6 a quand même annoncé en juillet 2026 un premier long-métrage, Misaligned, une comédie dramatique où le personnage joue une IA sans vécu qui a accès aux souvenirs d'enfance des humains.",
    },
    {
      type: "image",
      src: "/images/articles/acteurs-ia-casting-virtuel-wikipedia-tilly-norwood.webp",
      alt: "Article Wikipédia en anglais consacré à Tilly Norwood, avec le résumé décrivant un personnage créé par IA générative en 2025 par Xicoia, division IA de Particle6 fondée par Eline Van der Velden, l'encadré indiquant une première apparition dans AI Commissioner en 2025 et un portrait généré d'une jeune femme brune tenant un café",
      caption:
        "La fiche Wikipédia de Tilly Norwood, personnage synthétique de Xicoia. Source : en.wikipedia.org, capture du 18/09/2026.",
    },
    {
      type: "p",
      text: "La **réplique numérique** reproduit une personne réelle : son visage, sa voix, ou les deux. C'est l'objet que les studios scannent sur les plateaux, et c'est aussi ce que fait la fonction cameo de Sora pour le grand public. OpenAI décrit le mécanisme dans sa page « Creating with Sora safely » : tu enregistres une courte vidéo avec un contrôle de vivacité et une phrase à prononcer, tu décides qui peut utiliser ta ressemblance, tu es notifié à chaque usage, tu vois toutes les vidéos qui te contiennent, brouillons compris, et tu peux révoquer l'accès ou supprimer une vidéo quand tu veux. Tout le mécanisme repose sur ce consentement, révocable à tout moment.",
    },
    {
      type: "p",
      text: "Le **transfert de jeu** est le troisième objet, et le seul qui devrait t'intéresser pour un film. Un humain joue la scène face à une caméra, et l'outil applique son jeu à un personnage que tu as conçu. Runway le fait avec Act-Two : une vidéo de performance (quelqu'un qui joue la scène) plus une référence de personnage (image ou vidéo), et le modèle transfère mouvement, parole et expression. Le centre d'aide précise les limites au 18 septembre 2026 : 5 crédits par seconde avec un minimum facturé de 3 secondes, 30 secondes maximum par génération, sortie 1280 x 720 en 16:9 à 24 images par seconde, contrôle des gestes des mains et du corps disponible quand la référence est une image, et fonction réservée au plan Standard ou supérieur. Une option permet ensuite de remplacer la voix du comédien par une voix de la bibliothèque.",
    },
    {
      type: "image",
      src: "/images/articles/acteurs-ia-casting-virtuel-runway-act-two.webp",
      alt: "Page Performance Capture with Act-Two du centre d'aide de Runway, avec l'encadré indiquant que la fonction est réservée au plan Standard ou supérieur, l'introduction expliquant le transfert d'une vidéo de performance vers une référence de personnage, et la vignette d'une vidéo montrant un homme à lunettes à gauche et un vieux personnage barbu animé à droite reproduisant son geste",
      caption:
        "La documentation d'Act-Two chez Runway : une performance filmée, un personnage de référence, et le jeu transféré. Source : help.runwayml.com, capture du 18/09/2026.",
    },
    {
      type: "p",
      text: "Le synthétique soulève une question de casting et de syndicat, la réplique une question de consentement. Le transfert de jeu, lui, se règle avec un contrat de comédien, et c'est de loin le plus simple des trois, parce que ça ressemble à un tournage normal.",
    },
    {
      type: "h3",
      text: "Ce que le contrat SAG-AFTRA 2026 a fixé, et pourquoi ça te concerne en France",
    },
    {
      type: "p",
      text: "Le contrat TV/Théâtral 2026 entre SAG-AFTRA et l'AMPTP a été ratifié par les membres à 91,42 % contre 8,58 %, avec 19,25 % de participation, vote clos le 4 juin 2026. Il court du 1er juillet 2026 au 30 juin 2030. La page officielle du contrat sépare les deux objets vus plus haut : la réplique numérique, « qui ressemble à une personne précise », et le synthétique, « qui ressemble à une personne sans être reconnaissable comme un individu précis ».",
    },
    {
      type: "p",
      text: "Pour les synthétiques, la FAQ officielle liste trois engagements. Un producteur signataire ne peut pas en utiliser un sans notifier le syndicat et négocier d'abord, sur un calendrier strict. Il s'engage à ne pas confier à un synthétique un rôle qu'un humain aurait joué, sauf si le synthétique apporte une « valeur ajoutée significative » par rapport à un comédien ou à sa réplique numérique. Et si l'engagement n'est pas tenu, le syndicat peut aller en arbitrage et réclamer des dommages qui ne sont pas plafonnés à ce qu'un humain aurait été payé pour la même performance. Le négociateur en chef Duncan Crabtree-Ireland a donné à TheWrap, le 22 mai 2026, deux exemples de ce que « valeur ajoutée significative » peut vouloir dire : quelque chose de physiquement impossible pour un humain, ou un personnage synthétique par nature. Il estime la négociation à environ un mois, à intégrer dans le plan de tournage.",
    },
    {
      type: "p",
      text: "Côté répliques, le même contrat ajoute une exigence de motif professionnel explicite avant tout scan d'un comédien, des protections contre les répliques créées sans scan, contre l'usage d'une réplique pendant une grève, et un engagement de discussion sur les licences accordées à des tiers pour entraîner une IA sur des images ou des bandes-son couvertes. Aucun de ces textes ne s'applique à ton court-métrage tourné à Lyon. Mon analyse : c'est quand même le standard que les plateformes américaines vont exiger de leurs fournisseurs, et c'est la grille que les jurys de [festivals de films IA](/blog/festivals-films-ia) ont en tête quand ils lisent ta liste d'outils. Écrire ton pipeline avec ces trois mots (notification, consentement, valeur ajoutée) coûte dix minutes et t'évite des discussions plus tard.",
    },
    {
      type: "p",
      text: "En France, le texte qui compte est l'article 226-8 du Code pénal, dans sa version en vigueur depuis le 23 mai 2024, modifiée par l'article 15 de la loi du 21 mai 2024 sur l'espace numérique. Il punit d'un an d'emprisonnement et de 15 000 euros d'amende le fait de porter à la connaissance du public ou d'un tiers un contenu visuel ou sonore généré par un traitement algorithmique et représentant l'image ou les paroles d'une personne sans son consentement, s'il n'apparaît pas à l'évidence qu'il s'agit d'un contenu généré ou s'il n'en est pas expressément fait mention. Les peines montent à deux ans et 45 000 euros quand la diffusion passe par un service de communication au public en ligne, autrement dit YouTube, TikTok ou ton propre site.",
    },
    {
      type: "image",
      src: "/images/articles/acteurs-ia-casting-virtuel-legifrance-226-8.webp",
      alt: "Article 226-8 du Code pénal sur Légifrance, version en vigueur depuis le 23 mai 2024 modifiée par la loi n° 2024-449 du 21 mai 2024 article 15, avec le texte punissant d'un an d'emprisonnement et 15 000 euros d'amende la diffusion d'un contenu généré par traitement algorithmique représentant l'image ou les paroles d'une personne sans son consentement, et les peines portées à deux ans et 45 000 euros en ligne",
      caption:
        "Le texte de l'article 226-8 du Code pénal après la loi SREN. Source : legifrance.gouv.fr, capture du 18/09/2026.",
    },
    {
      type: "p",
      text: "Lis bien la condition : le délit tombe si le caractère généré n'est pas évident ou n'est pas mentionné. La mention expresse est donc une protection, mais elle ne remplace pas le consentement d'un comédien vivant, dont l'image reste protégée par l'article 9 du Code civil. Et un personnage « synthétique » qui ressemble de façon reconnaissable à un acteur existant devient, aux yeux de ce texte, l'image d'une personne. C'est le piège numéro un, on y revient plus bas.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Monter un casting virtuel en cinq étapes",
    },
    {
      type: "p",
      text: "Le tableau ci-dessous compare les trois objets sur ce qui compte en production. Les colonnes prix et limites viennent des pages officielles citées ; les colonnes « où ça casse » sont mes observations sur des courts-métrages, pas une règle universelle.",
    },
    {
      type: "table",
      caption:
        "Les trois objets derrière « acteur IA », vus du plateau (sources officielles pour les limites, observations de production pour le reste, vérifiées le 18/09/2026)",
      headers: ["Objet", "Ce que c'est", "Consentement", "Où ça casse", "Ce que ça coûte"],
      rows: [
        [
          "Synthétique",
          "Personnage sans modèle humain identifiable (Tilly Norwood)",
          "Aucune personne à consulter, à condition que le visage ne ressemble à personne de reconnaissable",
          "Le jeu : sans humain derrière, l'émotion reste plate ; sur un plateau syndiqué aux États-Unis, notification et négociation obligatoires",
          "Tes générations d'images et de clips, plus le temps de cohérence",
        ],
        [
          "Réplique numérique",
          "Visage ou voix d'une personne réelle reproduits",
          "Accord écrit obligatoire ; sans lui, article 226-8 (jusqu'à 2 ans et 45 000 € en ligne)",
          "La portée : l'accord donné pour un film ne couvre pas la bande-annonce, ni le remontage, ni le doublage",
          "Le cachet de la personne, le contrat, et l'outil de clonage",
        ],
        [
          "Transfert de jeu",
          "Un comédien joue, le personnage porte son jeu (Runway Act-Two)",
          "Contrat avec le comédien : image, voix, durée, territoires, crédit",
          "Les prises longues : 30 s maximum par génération, 3 s minimum facturées",
          "Act-Two : 5 crédits/s, plan Standard minimum, plus le cachet du comédien",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Décide l'objet avant de générer quoi que ce soit. Un rôle parlant avec des émotions nuancées : transfert de jeu. Une silhouette de foule ou un présentateur d'ambiance : synthétique. Une personne réelle : réplique, avec un accord écrit, ou rien. Écris la réponse dans ton document de pipeline, c'est cette ligne que les festivals et les clients te demanderont.",
        "Construis le personnage comme pour une série d'images. [La méthode pour garder le même personnage sur plusieurs images IA](/blog/personnage-coherent-ia) te donne la fiche, les références et les poses. Ajoute deux planches que le transfert de jeu exige : une planche d'expressions (joie, colère, peur, neutre, de face et de trois quarts) et un gros plan bouche ouverte où les dents sont visibles. Runway le dit noir sur blanc dans ses conseils : si ton personnage a des crocs, montre-les dans la référence, sinon le modèle ne les inventera pas.",
        "Caste un comédien, un vrai. Passe par une école de théâtre, une plateforme de casting ou tes contacts, et fais une audition filmée avec le texte de la scène. Le visage viendra de la référence ; ce que tu cherches, c'est un jeu qui survit au transfert : des expressions franches, une diction propre, une gestuelle lisible du buste. Sur Act-Two, une prise démarre mieux quand le comédien commence les paumes tournées vers la caméra, et le son doit être propre et régulier, parce que la voix passe dans le résultat.",
        "Signe avant de filmer. Une autorisation écrite qui liste l'usage de l'image et de la voix du comédien, le titre du film, la durée et les territoires, la possibilité de remplacer sa voix par une voix synthétique (l'option existe dans Act-Two), la mention au générique (« performance capture : prénom nom »), et le cachet. Je ne suis pas juriste ; cette liste, ce sont les cases sur lesquelles j'ai vu des projets se bloquer, fais-la relire si le film a un budget. Si le comédien prête aussi sa voix, [le guide de la voix off IA](/blog/voix-off-ia-guide) détaille ce qu'un clonage vocal implique.",
        "Tourne par répliques, génère, vérifie. Découpe la scène en prises de 8 à 25 secondes, une réplique ou une réaction par prise, dans les 30 secondes qu'Act-Two accepte. Génère chaque prise avec la même référence de personnage, compare les visages entre prises avec la fiche sous les yeux, et refuse toute sortie où le personnage a changé de mâchoire. Le raccord des lèvres se vérifie en dernier, avec [la méthode du lip-sync IA](/blog/lip-sync-ia-faire-parler-personnage).",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : Act-Two facture 3 secondes minimum, donc une réaction muette de 2 secondes coûte 15 crédits, autant qu'une réplique de 3 secondes. Regroupe les petites réactions dans une même prise de 10 à 15 secondes que tu découperas au montage, plutôt que de générer dix micro-prises.",
    },
    {
      type: "p",
      text: "Ma règle sur un court-métrage : un seul comédien peut porter trois ou quatre personnages, parce que le visage vient de la référence et non de lui. Entre deux rôles, seul le jeu change. Ça réduit le casting à une ou deux personnes de confiance, et ça simplifie les contrats. Le reste du film, scénario, rythme, montage, se construit avec [la méthode complète pour créer un film avec l'IA](/blog/creer-film-ia).",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les quatre erreurs qui plombent un casting virtuel",
    },
    {
      type: "h3",
      text: "Le sosie qui ne dit pas son nom",
    },
    {
      type: "p",
      text: "Symptôme : ton personnage « synthétique » a été généré avec le nom d'un acteur dans le prompt, ou à partir de sa photo, et tout le monde le reconnaît. Aux yeux de l'article 226-8, tu diffuses l'image d'une personne sans son consentement. Fix concret : aucun nom d'acteur dans les prompts de personnage, jamais de photo de personne réelle en référence, et un test simple avant validation : montre le visage à trois personnes et demande à qui il ressemble. Si un nom sort deux fois, tu recommences le visage.",
    },
    {
      type: "h3",
      text: "Le comédien invisible",
    },
    {
      type: "p",
      text: "Symptôme : le film est terminé, le comédien qui a porté les scènes n'apparaît nulle part, il n'a rien signé, et il découvre sa voix dans une bande-annonce six mois plus tard. Fix concret : le contrat de l'étape 4 avant la première prise, et un crédit au générique même sur un court de trois minutes. Ce que le contrat SAG-AFTRA 2026 impose aux studios (motif explicite avant scan, consentement, portée précisée), tu peux l'appliquer à ton échelle avec une page signée.",
    },
    {
      type: "h3",
      text: "Le presque humain qui fait décrocher",
    },
    {
      type: "p",
      text: "Symptôme : le personnage est photoréaliste, le jeu transféré est bon, et le spectateur décroche quand même sur les gros plans, sans savoir pourquoi. Fix concret : éloigne-toi du réalisme parfait. Runway indique que le transfert fonctionne avec des personnages non humains et des styles variés, et c'est là que le transfert de jeu brille : un vieux pêcheur peint, une créature, un personnage d'animation encaissent les petites erreurs qu'un visage humain ne pardonne pas. Garde les gros plans courts et coupe sur une réaction plutôt que de tenir un regard de cinq secondes.",
    },
    {
      type: "h3",
      text: "La mention oubliée",
    },
    {
      type: "p",
      text: "Symptôme : le film sort sans indication qu'il est généré, un festival ou une plateforme le repère, et la discussion tourne à l'accusation. Fix concret : une ligne dans le générique et dans la description (« personnages générés par IA, jeu transféré depuis des performances de comédiens »). Pour une personne réelle, la mention expresse est la condition de l'article 226-8. Pour l'ensemble, le règlement européen sur l'IA impose depuis le 2 août 2026 de signaler les contenus qui donnent l'impression de montrer des personnes réelles, comme l'explique [la FAQ de la Commission sur l'article 50](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act). Et si ton personnage vend quelque chose, [la mention « Images virtuelles » des influenceurs virtuels](/blog/influenceur-virtuel-ia) s'ajoute.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Tilly Norwood est-elle une actrice ?",
    },
    {
      type: "p",
      text: "C'est un personnage généré par IA, créé en 2025 par Xicoia, la division IA de la société de production Particle6 d'Eline Van der Velden, et présenté au Zurich Summit le 27 septembre 2025. Le syndicat SAG-AFTRA a répondu le 30 septembre 2025 qu'il ne s'agit pas d'une actrice mais d'un personnage produit par un programme entraîné sur le travail de comédiens professionnels. Un premier long-métrage, Misaligned, a été annoncé par Particle6 en juillet 2026.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Puis-je utiliser le visage d'un acteur connu dans une vidéo IA ?",
    },
    {
      type: "p",
      text: "Pas sans son accord écrit. En France, l'article 226-8 du Code pénal punit d'un an de prison et 15 000 euros d'amende la diffusion d'un contenu généré par traitement algorithmique représentant l'image ou les paroles d'une personne sans son consentement, quand le caractère artificiel n'est pas évident ou n'est pas expressément mentionné. La peine monte à deux ans et 45 000 euros quand la diffusion passe par un service en ligne. Le droit à l'image de l'article 9 du Code civil s'ajoute au pénal.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "C'est quoi, un casting virtuel ?",
    },
    {
      type: "p",
      text: "C'est le choix d'un comédien réel dont le jeu sera transféré vers un personnage conçu à l'avance. Le comédien joue la scène face à une caméra, l'outil applique ses expressions, ses gestes et sa voix au personnage. Tu castes donc deux choses : un visage dessiné, et l'humain qui va l'habiter.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Combien coûte une prise avec Runway Act-Two ?",
    },
    {
      type: "p",
      text: "Selon le centre d'aide de Runway lu le 18 septembre 2026 : 5 crédits par seconde, minimum facturé 3 secondes (donc 15 crédits même pour une prise de 2 secondes), durée maximale 30 secondes, sortie en 1280 x 720 à 24 images par seconde en 16:9, et fonction réservée au plan Standard ou supérieur.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Que dit le contrat SAG-AFTRA 2026 sur les acteurs IA ?",
    },
    {
      type: "p",
      text: "Le contrat, ratifié à 91,42 % et en vigueur du 1er juillet 2026 au 30 juin 2030, distingue la réplique numérique (qui ressemble à une personne précise) du synthétique (qui ressemble à une personne sans être identifiable). Un producteur signataire ne peut pas utiliser un synthétique sans notification et négociation préalables avec le syndicat, s'engage à ne pas remplacer un rôle humain sauf « valeur ajoutée significative » par rapport à un humain ou à sa réplique, et le syndicat peut réclamer des dommages qui dépassent ce qu'un comédien aurait touché.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Dois-je signaler qu'un personnage est généré par IA ?",
    },
    {
      type: "p",
      text: "Dès qu'une personne réelle est reconnaissable, oui, c'est la condition de l'article 226-8 pour ne pas tomber dans le délit. Pour un personnage entièrement synthétique, la mention n'est pas exigée par cet article, mais le règlement européen sur l'IA impose depuis le 2 août 2026 de signaler les contenus générés qui donnent l'impression de montrer des personnes réelles, et des festivals comme l'Astana AI Film Festival exigent au dépôt que les modèles et le pipeline soient déclarés.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Caste un humain, dessine le visage, signe avant la première prise",
    },
    {
      type: "p",
      text: "Le débat sur les acteurs IA se joue à Hollywood entre un syndicat et des studios, avec une grille désormais écrite dans un contrat de quatre ans. Ton film, lui, se joue dans une salle de répétition avec un comédien qui prête son jeu à un visage que tu as construit. Décide l'objet, construis le personnage, caste l'humain, signe, tourne par prises courtes. Les sources de cet article : [le communiqué de SAG-AFTRA du 30 septembre 2025](https://www.sagaftra.org/sag-aftra-statement-synthetic-performer), [la page officielle du contrat TV/Théâtral 2026](https://www.sagaftra.org/contracts-industry-resources/contracts/2026-tvtheatrical-contracts), [l'article 226-8 du Code pénal sur Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049571542), [la documentation Act-Two de Runway](https://help.runwayml.com/hc/en-us/articles/42311337895827-Performance-Capture-with-Act-Two), [la page d'OpenAI sur la sécurité de Sora](https://openai.com/index/creating-with-sora-safely/) et [la fiche Wikipédia de Tilly Norwood](https://en.wikipedia.org/wiki/Tilly_Norwood).",
    },
    {
      type: "p",
      text: "Note de fondateur : un personnage tient à l'écran quand quelqu'un le joue, et l'outil vient après. C'est dans cet ordre que la formation IA gratuite d'AI Studios avance : écrire, construire le personnage, le faire jouer, puis seulement choisir ce qui va générer les plans.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-18 -->
