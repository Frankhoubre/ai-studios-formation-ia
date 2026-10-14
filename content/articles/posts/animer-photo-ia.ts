import type { Article } from "@/lib/types/article";

export const animerPhotoIa: Article = {
  title: "Animer une photo avec l'IA : tes souvenirs en mouvement",
  slug: "animer-photo-ia",
  description:
    "Animer une photo de famille avec l'IA : Google Photos, Gemini ou MyHeritage, comment préparer le cliché, doser le mouvement et partager sans tromper personne.",
  excerpt:
    "Six secondes où ta grand-mère sourit sur sa photo de mariage, ça bouleverse. Voici comment animer une photo de famille sans abîmer le souvenir : quel outil choisir, comment préparer le tirage et quoi dire en le partageant.",
  category: "ia-video",
  tags: ["animer photo", "photo de famille", "google photos", "myheritage", "image to video"],
  date: "2026-10-14",
  updatedAt: "2026-10-14",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/animer-photo-ia.webp",
  imageAlt:
    "Dans une cuisine bretonne aux murs de granit, un homme de quatre-vingts ans en pull marine, les yeux humides, tient une petite photo de mariage en noir et blanc pendant que sa petite-fille lui tend un smartphone, à côté d'une boîte en fer pleine de vieux tirages, d'une loupe et d'un scanner à plat",
  keywords: [
    "animer une photo ia",
    "donner vie à une photo",
    "animer photo ancienne",
    "photo en vidéo ia",
    "animer photo de famille",
  ],
  relatedSlugs: [
    "restaurer-coloriser-photo-ia",
    "image-to-video-ia-methode",
    "lip-sync-ia-faire-parler-personnage",
  ],
  faq: [
    {
      question: "Comment animer une photo gratuitement avec l'IA ?",
      answer:
        "Le plus simple, c'est l'outil Photo en vidéo de Google Photos, dans l'onglet Créer de l'application : il anime une photo en un clip de six secondes, avec un nombre limité de générations gratuites par jour. Il faut un compte Google personnel, et Google précise que ces fonctions ne sont pas disponibles partout. MyHeritage propose aussi quelques animations gratuites avec Deep Nostalgia, après inscription.",
    },
    {
      question: "Quelle IA choisir pour animer une vieille photo de famille ?",
      answer:
        "Pour un portrait seul, Deep Nostalgia de MyHeritage fait bouger le visage avec des gestes filmés par de vrais acteurs, sans parole. Pour une scène entière, LiveMemory (MyHeritage) ou Photo en vidéo (Google Photos) animent tout le cadre en six secondes. Si tu veux décrire le mouvement et ajouter du son, Gemini génère huit secondes avec Veo, mais il faut un abonnement Google AI Pro ou Ultra.",
    },
    {
      question: "La vidéo obtenue montre-t-elle comment la personne bougeait vraiment ?",
      answer:
        "Non. MyHeritage l'écrit noir sur blanc dans sa FAQ : le clip est une simulation de la façon dont la personne aurait pu bouger si elle avait été filmée. L'IA invente aussi ce que la photo ne montre pas, les dents, les oreilles, parfois une personne ou un objet qui n'étaient pas là. Garde la photo d'origine comme seule référence.",
    },
    {
      question: "Faut-il restaurer la photo avant de l'animer ?",
      answer:
        "Oui, légèrement. Une rayure ou une tache sur le visage sera animée avec lui et deviendra très visible en mouvement. Numérise le tirage à bonne définition, corrige les dégâts les plus gênants, puis anime. Évite en revanche les restaurations qui retouchent les traits : le mouvement amplifie un visage déjà modifié.",
    },
    {
      question: "Peut-on faire parler une photo de famille ?",
      answer:
        "Techniquement oui, avec un outil de lip-sync, mais je te le déconseille pour un proche disparu. MyHeritage a volontairement retiré la parole des vidéos pilotes de Deep Nostalgia pour éviter les deepfakes. Prêter une voix et des mots à quelqu'un qui ne les a jamais dits, c'est passer du souvenir à la fiction, et la famille ne le vit pas toujours bien.",
    },
    {
      question: "Ai-je le droit de publier une photo animée d'une personne vivante ?",
      answer:
        "Demande-lui d'abord. MyHeritage demande de ne pas animer de personnes vivantes sans leur permission, et l'aide de Gemini demande de n'importer que des photos que tu as le droit d'utiliser. En France, l'article 226-8 du Code pénal vise aussi la diffusion sans consentement d'un contenu généré par un traitement algorithmique qui reproduit l'image d'une personne, sauf s'il apparaît à l'évidence ou est indiqué qu'il s'agit d'un contenu généré.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as retrouvé la photo de mariage de tes grands-parents dans une boîte à biscuits. Tu as vu passer ces vidéos où un ancêtre cligne des yeux et tourne la tête, et tu te demandes si tu peux faire pareil sans tomber sur une poupée de cire qui fait peur à toute la famille.",
    },
    {
      type: "p",
      text: "On va voir ici comment animer une photo avec l'IA quand il s'agit de tes propres souvenirs : quel outil prendre selon la photo, comment préparer le tirage, quel mouvement demander, et comment montrer le résultat sans tromper personne. Tout se fait depuis un téléphone ou un navigateur, sans logiciel de montage.",
    },
    {
      type: "p",
      text: "**Un mouvement discret vaut presque toujours mieux qu'un grand geste.** Un sourire qui se dessine, un regard qui bouge, du vent dans les cheveux. Dès que tu demandes plus, l'IA invente, et sur le visage de quelqu'un que tu as connu, tu le vois tout de suite.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce que l'IA fait vraiment quand elle anime une photo",
    },
    {
      type: "h3",
      id: "deux-familles-outils",
      text: "Deux façons de faire bouger une image",
    },
    {
      type: "p",
      text: "Premier cas : l'outil applique des gestes déjà filmés à un visage. Deep Nostalgia, l'outil historique de MyHeritage, fonctionne comme ça. Sa technologie vient de la société D-ID et repose sur des « pilotes », des vidéos de vrais gestes humains (pour la plupart jouées par des employés de MyHeritage) que l'algorithme reporte sur le visage de ta photo. Résultat prévisible, cadré sur une tête, avec peu de surprises.",
    },
    {
      type: "p",
      text: "Second cas : un modèle génératif imagine toute la scène en mouvement. C'est ce que font LiveMemory chez MyHeritage, l'outil Photo en vidéo de Google Photos et la génération vidéo de Gemini. Le décor bouge aussi, la lumière peut changer, une main peut se lever. C'est plus vivant, et l'erreur arrive plus facilement. C'est la même mécanique que l'[image to video](/blog/image-to-video-ia-methode) utilisée par les créateurs, appliquée ici à une photo de famille plutôt qu'à un plan de film.",
    },
    {
      type: "h3",
      id: "simulation-pas-archive",
      text: "L'IA invente ce que la photo ne montre pas",
    },
    {
      type: "p",
      text: "Ton arrière-grand-père n'a jamais été filmé ce jour-là. L'IA fabrique une hypothèse plausible de la façon dont il aurait pu bouger. MyHeritage le dit sans détour dans sa FAQ, et ajoute un détail moins connu : l'IA invente parfois des personnes ou des objets qui n'étaient pas présents.",
    },
    {
      type: "image",
      src: "/images/articles/animer-photo-ia-livememory.webp",
      alt: "FAQ de la page LiveMemory de MyHeritage en français : réponse indiquant que les clips sont une simulation technologique et que l'IA invente parfois des personnes ou des objets absents, puis réponse sur le prix qui mentionne des promotions gratuites ponctuelles et un abonnement Photo ou Omni avec quota annuel",
      caption:
        "La FAQ de LiveMemory sur myheritage.fr, questions sur l'authenticité et le prix dépliées, capturée le 14 octobre 2026.",
    },
    {
      type: "p",
      text: "Pour Deep Nostalgia, la FAQ précise que l'outil doit parfois simuler des parties absentes de la photo, comme les dents ou les oreilles, et qu'un chapeau ou un accessoire peut faire échouer le mouvement. Garde ça en tête au moment de choisir ta photo : moins l'IA doit inventer, plus le résultat ressemble à la personne.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Comment animer une photo de famille en 5 étapes",
    },
    {
      type: "p",
      text: "Avant les étapes, le choix de l'outil. Les quatre options grand public que j'ai vérifiées ne font pas la même chose, et la bonne dépend surtout de ta photo : un visage seul, un groupe, un paysage.",
    },
    {
      type: "table",
      caption:
        "Quatre outils pour animer une photo personnelle, d'après leurs pages officielles consultées le 14 octobre 2026.",
      headers: ["Outil", "Ce qu'il anime", "Durée", "Accès", "Marquage"],
      rows: [
        [
          "Google Photos, Photo en vidéo",
          "Toute la photo, mode Mouvement subtil, J'ai de la chance ou prompt (18 ans et plus)",
          "6 s, son possible",
          "Compte Google personnel, quota quotidien, plus de générations avec un forfait Google AI",
          "Non précisé sur la page d'aide",
        ],
        [
          "Gemini (Veo)",
          "Toute la photo, mouvement et son décrits par ton prompt",
          "8 s avec son",
          "Google AI Pro ou Ultra, 18 ans et plus",
          "SynthID invisible",
        ],
        [
          "MyHeritage LiveMemory",
          "Toute la scène",
          "6 s",
          "Inscription, abonnement Photo ou Omni avec quota annuel",
          "Filigrane « IA » et logo MyHeritage",
        ],
        [
          "MyHeritage Deep Nostalgia",
          "Les visages, avec des gestes préenregistrés, sans parole",
          "Clip court",
          "Quelques animations gratuites, illimité avec l'abonnement Complet",
          "Icône de mouvement, logo pour les non-abonnés",
        ],
      ],
    },
    {
      type: "p",
      text: "Google Photos est le point de départ le plus simple si tes photos y sont déjà sauvegardées. La [page d'aide de Google Photos](https://support.google.com/photos/answer/6128862?hl=fr) détaille le chemin : onglet Créer, puis Photo en vidéo. Deux limites à connaître : une photo au format paysage est recadrée automatiquement en portrait, et la vidéo est rangée à sa date de création, pas à celle de la photo. Google prévient aussi que ces fonctions ne sont pas disponibles partout ; si l'option n'apparaît pas chez toi, Gemini ou MyHeritage prennent le relais.",
    },
    {
      type: "image",
      src: "/images/articles/animer-photo-ia-google-photos.webp",
      alt: "Page d'aide Google Photos en français, section Photo en vidéo dépliée : les vidéos peuvent contenir du son, chemin Créer puis Photo en vidéo, recadrage automatique des photos paysage en portrait, effets Mouvement subtil et J'ai de la chance, prompts textuels réservés aux 18 ans et plus",
      caption:
        "La section Photo en vidéo de l'aide Google Photos (support.google.com/photos), version Android, capturée le 14 octobre 2026.",
    },
    {
      type: "ol",
      items: [
        "Numérise proprement. Scanner à plat plutôt que photo du tirage au téléphone, vitre nettoyée, pas de reflet. Plus le visage compte de pixels, moins l'IA devra deviner. Si le tirage est abîmé, passe d'abord par la méthode pour [restaurer une vieille photo](/blog/restaurer-coloriser-photo-ia), en t'arrêtant avant de retoucher les traits.",
        "Choisis la bonne photo. Un visage de face ou de trois quarts, net, sans main devant la bouche ni chapeau qui mange le front. Pour Google Photos, privilégie un cadrage vertical, sinon le recadrage portrait risque de couper quelqu'un.",
        "Commence par le mouvement le plus discret. Mouvement subtil dans Google Photos, ou un prompt court dans Gemini. Un prompt sobre pour un portrait : « Elle sourit doucement et cligne des yeux, léger mouvement de tête, caméra fixe, aucun autre changement. »",
        "Génère trois versions et compare-les à la photo d'origine, côte à côte. Regarde la bouche, les dents, les yeux et les mains. La version à garder, c'est celle où la personne ressemble le plus à elle-même, même si une autre bouge mieux.",
        "Range le clip avec la photo source et nomme-le clairement (par exemple « mariage-1962-anime-IA.mp4 »). Dans vingt ans, quelqu'un doit savoir que c'est une animation et retrouver l'original.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : pour une photo de groupe, anime d'abord un recadrage sur une ou deux personnes plutôt que la photo entière. Sur un plan large, chaque visage ne fait souvent que quelques dizaines de pixels et l'IA les réinvente presque entièrement. Recadré, le visage de ta grand-mère reste le sien.",
    },
    {
      type: "h3",
      id: "prompts-par-photo",
      text: "Quel mouvement demander selon la photo",
    },
    {
      type: "p",
      text: "Si ton outil accepte un prompt (Gemini, ou Google Photos à partir de 18 ans), décris un seul mouvement et verrouille le reste. Quelques formulations sobres, à adapter à ta photo :",
    },
    {
      type: "ul",
      items: [
        "Portrait en studio : « Il regarde l'objectif, esquisse un sourire et respire calmement, caméra immobile, l'arrière-plan ne bouge pas. »",
        "Photo de mariage : « Les mariés se tournent légèrement l'un vers l'autre et sourient, le voile bouge un peu au vent, caméra fixe. »",
        "Enfant en extérieur : « L'enfant rit et plisse les yeux au soleil, les feuilles de l'arbre bougent doucement, rien d'autre ne change. »",
        "Paysage de vacances : « Les vagues avancent lentement sur la plage, les nuages dérivent, aucun personnage n'apparaît. »",
        "Son, dans Gemini : ajoute une ambiance plutôt qu'une voix, par exemple « bruit de vent et oiseaux au loin, pas de dialogue ».",
      ],
    },
    {
      type: "p",
      text: "La dernière précision de chaque prompt (« rien d'autre ne change », « aucun personnage n'apparaît ») compte autant que le mouvement. Elle limite justement ce que la FAQ de MyHeritage décrit : des personnes ou des objets ajoutés par l'IA.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les erreurs qui gâchent une photo animée",
    },
    {
      type: "h3",
      id: "erreur-1-photo-trop-petite",
      text: "Erreur 1, animer une vignette de 300 pixels",
    },
    {
      type: "p",
      text: "Symptôme : le visage fond légèrement en bougeant, les yeux changent de forme d'une image à l'autre. La photo venait d'un groupe WhatsApp ou d'une capture d'écran, et l'IA a dû inventer presque tout le visage. Fix concret : repars du tirage papier ou du fichier d'origine, numérise-le à bonne définition, et si tu n'as qu'une petite image, agrandis-la d'abord avec un [upscaler IA](/blog/magnific-upscalers-ia-agrandir-image) réglé sur une créativité faible.",
    },
    {
      type: "h3",
      id: "erreur-2-trop-de-mouvement",
      text: "Erreur 2, choisir J'ai de la chance sur un portrait de défunt",
    },
    {
      type: "p",
      text: "Symptôme : ton grand-père se met à danser, ou des confettis tombent sur une photo de deuil. Google l'annonce lui-même : ce mode peut produire une vidéo plus animée, avec de la danse ou des effets spéciaux. Fix concret : réserve ce mode aux photos légères (un anniversaire, une fête) et garde Mouvement subtil, ou un prompt d'une seule action, pour les portraits qui comptent.",
    },
    {
      type: "h3",
      id: "erreur-3-montrer-sans-prevenir",
      text: "Erreur 3, montrer le clip sans prévenir",
    },
    {
      type: "p",
      text: "Symptôme : tu lances la vidéo au repas de famille et ta mère quitte la table. MyHeritage le reconnaît dans sa propre FAQ : certains trouvent l'effet magique, d'autres effrayant et déplaisant. Fix concret : demande d'abord si la personne veut voir le résultat, montre-le en tête-à-tête, et commence par la photo fixe avant de lancer l'animation.",
    },
    {
      type: "image",
      src: "/images/articles/animer-photo-ia-deep-nostalgia.webp",
      alt: "FAQ de Deep Nostalgia sur myheritage.fr : MyHeritage reconnaît que certains trouvent la fonction effrayante, précise qu'elle est destinée à un usage nostalgique, que les vidéos pilotes n'incluent pas la parole pour éviter les deep fakes, et demande de ne pas animer de personnes vivantes sans leur permission",
      caption:
        "La réponse de MyHeritage à la question « un peu étrange, ne vous croyez pas ? » dans la FAQ de Deep Nostalgia, capturée le 14 octobre 2026.",
    },
    {
      type: "h3",
      id: "erreur-4-partager-comme-vrai",
      text: "Erreur 4, publier sans dire que c'est une animation IA",
    },
    {
      type: "p",
      text: "Symptôme : ton clip circule, un cousin éloigné le prend pour un film d'époque retrouvé, et l'animation finit dans un arbre généalogique comme document. Fix concret : écris « animation IA d'une photo de 1962 » dans la légende, garde les filigranes quand l'outil en ajoute, et pour une personne vivante, demande son accord avant toute publication. L'article 226-8 du Code pénal vise d'ailleurs la diffusion sans consentement d'un contenu généré par un traitement algorithmique qui reproduit l'image de quelqu'un, sauf si son caractère généré est évident ou indiqué. Pour comprendre comment ces contenus se repèrent, lis aussi comment [détecter une image générée par IA](/blog/detecter-image-generee-ia).",
    },
    {
      type: "p",
      text: "Une dernière limite, que je tiens à poser : ne fais pas parler la photo d'un proche disparu. Les outils de [lip-sync](/blog/lip-sync-ia-faire-parler-personnage) le permettent, mais MyHeritage a justement retiré la parole de ses pilotes pour éviter les deepfakes. Un sourire, tu peux le montrer à ta mère sans malaise. Une phrase inventée dans la bouche de son père, c'est autre chose.",
    },
    {
      type: "p",
      text: "Note de Frank : animer une photo de famille, c'est une bonne porte d'entrée dans la vidéo IA, parce que tu sais exactement à quoi la personne doit ressembler et tu vois tout de suite quand l'IA dérape. Si tu veux aller plus loin, du choix de l'image au prompt de mouvement, c'est ce qu'on travaille dans la [formation IA gratuite](https://frankhoubre.com/formation-ia-gratuite).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Comment animer une photo gratuitement avec l'IA ?",
    },
    {
      type: "p",
      text: "Le plus simple, c'est l'outil Photo en vidéo de Google Photos, dans l'onglet Créer de l'application : il anime une photo en un clip de six secondes, avec un nombre limité de générations gratuites par jour. Il faut un compte Google personnel, et Google précise que ces fonctions ne sont pas disponibles partout. MyHeritage propose aussi quelques animations gratuites avec Deep Nostalgia, après inscription.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle IA choisir pour animer une vieille photo de famille ?",
    },
    {
      type: "p",
      text: "Pour un portrait seul, Deep Nostalgia de MyHeritage fait bouger le visage avec des gestes filmés par de vrais acteurs, sans parole. Pour une scène entière, LiveMemory (MyHeritage) ou Photo en vidéo (Google Photos) animent tout le cadre en six secondes. Si tu veux décrire le mouvement et ajouter du son, Gemini génère huit secondes avec Veo, mais il faut un abonnement Google AI Pro ou Ultra.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "La vidéo obtenue montre-t-elle comment la personne bougeait vraiment ?",
    },
    {
      type: "p",
      text: "Non. MyHeritage l'écrit noir sur blanc dans sa FAQ : le clip est une simulation de la façon dont la personne aurait pu bouger si elle avait été filmée. L'IA invente aussi ce que la photo ne montre pas, les dents, les oreilles, parfois une personne ou un objet qui n'étaient pas là. Garde la photo d'origine comme seule référence.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Faut-il restaurer la photo avant de l'animer ?",
    },
    {
      type: "p",
      text: "Oui, légèrement. Une rayure ou une tache sur le visage sera animée avec lui et deviendra très visible en mouvement. Numérise le tirage à bonne définition, corrige les dégâts les plus gênants, puis anime. Évite en revanche les restaurations qui retouchent les traits : le mouvement amplifie un visage déjà modifié.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Peut-on faire parler une photo de famille ?",
    },
    {
      type: "p",
      text: "Techniquement oui, avec un outil de lip-sync, mais je te le déconseille pour un proche disparu. MyHeritage a volontairement retiré la parole des vidéos pilotes de Deep Nostalgia pour éviter les deepfakes. Prêter une voix et des mots à quelqu'un qui ne les a jamais dits, c'est passer du souvenir à la fiction, et la famille ne le vit pas toujours bien.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Ai-je le droit de publier une photo animée d'une personne vivante ?",
    },
    {
      type: "p",
      text: "Demande-lui d'abord. MyHeritage demande de ne pas animer de personnes vivantes sans leur permission, et l'aide de Gemini demande de n'importer que des photos que tu as le droit d'utiliser. En France, l'article 226-8 du Code pénal vise aussi la diffusion sans consentement d'un contenu généré par un traitement algorithmique qui reproduit l'image d'une personne, sauf s'il apparaît à l'évidence ou est indiqué qu'il s'agit d'un contenu généré.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-14 -->
