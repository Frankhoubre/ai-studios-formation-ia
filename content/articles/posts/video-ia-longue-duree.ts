import type { Article } from "@/lib/types/article";

export const videoIaLongueDuree: Article = {
  title: "Vidéo IA longue : tenir 3 minutes",
  slug: "video-ia-longue-duree",
  description:
    "Aucun générateur ne sort 3 minutes propres d'un coup. Une vidéo IA longue se monte en 36 plans : bande-son d'abord, découpage, bible visuelle et budget chiffré.",
  excerpt:
    "Même l'extension de Veo plafonne à 148 secondes, en 720p, sur une seule scène. Trois minutes qui tiennent debout, ça se monte : une trentaine de plans, une bande-son posée avant les images et un budget calculé à la seconde.",
  category: "ia-video",
  tags: ["vidéo ia", "format long", "montage", "veo 3.1", "découpage"],
  date: "2026-10-13",
  updatedAt: "2026-10-13",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/video-ia-longue-duree.webp",
  imageAlt:
    "Dans une salle de montage d'archives inondée de soleil d'automne, une femme aux cheveux grisonnants en gilet rouille accroche de courtes bandes de pellicule 16 mm aux tiges d'un chutier en toile, à côté d'une table de montage verte avec deux bobines, un chronomètre et un rouleau d'adhésif",
  keywords: [
    "vidéo ia longue",
    "vidéo ia plus d'une minute",
    "vidéo ia 3 minutes",
    "durée vidéo ia",
    "extension vidéo veo",
  ],
  relatedSlugs: [
    "prolonger-plan-ia-au-dela-5-secondes",
    "raccord-continuite-plans-ia",
    "structure-3-actes-video-ia",
  ],
  faq: [
    {
      question: "Quelle IA peut générer une vidéo de 3 minutes d'un seul coup ?",
      answer:
        "Aucune parmi les grands modèles que j'ai vérifiés. Le plus long chez Google, c'est l'extension de Veo 3.1 : 8 secondes de départ, puis 7 secondes ajoutées jusqu'à 20 fois, soit 148 secondes au maximum, en 720p uniquement selon la documentation de l'API Gemini. Kling 3 s'arrête à 15 secondes par génération, et ByteDance annonce 30 secondes pour Seedance 2.5. Trois minutes, ça se monte à partir de plans courts.",
    },
    {
      question: "Combien de plans faut-il pour une vidéo IA de 3 minutes ?",
      answer:
        "Compte une trentaine de plans. Avec la longueur moyenne d'un plan de cinéma récent, autour de 5 secondes (The Mist, cité par Wikipédia, tombe à 5,4 secondes), 180 secondes donnent 33 à 36 plans. Un montage nerveux, à 3 secondes de moyenne, en demanderait 60. Mon découpage type en prévoit 36, répartis sur six séquences.",
    },
    {
      question: "Combien coûte une vidéo IA de 3 minutes avec Veo ?",
      answer:
        "Avec 36 plans générés à 8 secondes et trois tentatives par plan, tu factures 864 secondes. Aux tarifs de l'API Gemini relevés le 13 octobre 2026 en 1080p, ça fait 69,12 dollars en Veo 3.1 Lite, 103,68 dollars en Veo 3.1 Fast et 345,60 dollars en Veo 3.1 standard, audio compris. Le nombre de tentatives est le paramètre qui fait le plus bouger la facture.",
    },
    {
      question: "Vaut-il mieux prolonger un plan ou monter des plans courts ?",
      answer:
        "Pour une vidéo de 3 minutes, monter des plans courts. L'extension sert à étirer un plan qui doit durer, une marche, un travelling, une attente. Elle reste limitée à 148 secondes, à une seule scène et à la définition 720p. Une vidéo longue a besoin de changer de lieu, d'échelle et de rythme, ce qu'un plan prolongé ne fait pas.",
    },
    {
      question: "Comment garder le même personnage sur toute une vidéo longue ?",
      answer:
        "Repars toujours de la bible, jamais du plan précédent. Fixe trois images de référence du personnage (Veo 3.1 en accepte jusqu'à trois), une palette et une focale, et injecte-les dans chaque génération. Si tu chaînes les plans en prenant à chaque fois la dernière image du précédent, les petites dérives s'additionnent et ton héros n'a plus le même visage à la deuxième minute.",
    },
    {
      question: "Pourquoi poser la bande-son avant de générer les images ?",
      answer:
        "Parce que c'est elle qui fixe la durée réelle de chaque plan. Une voix off ou une musique calée donne 180 secondes mesurables, avec des respirations et des temps forts. Tu sais alors qu'il te faut un plan de 4 secondes ici et un de 7 secondes là, et tu génères ce dont tu as besoin au lieu de remplir après coup.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as quinze secondes magnifiques, un personnage qui tient, une lumière qui te plaît. Puis tu veux en faire trois minutes et tout se délite : le visage change au bout d'une minute, le rythme s'endort, et tu passes ta soirée à remplir des trous avec des plans qui ne racontent rien.",
    },
    {
      type: "p",
      text: "On va construire ici une vidéo IA de 3 minutes de bout en bout : combien de plans il te faut et pourquoi, dans quel ordre les fabriquer, ce que ça coûte à la seconde avec Veo 3.1, et les quatre erreurs qui font s'effondrer un format long. Les limites et les prix viennent de la documentation de l'API Gemini, relue le 13 octobre 2026.",
    },
    {
      type: "p",
      text: "Ma position : **trois minutes de vidéo IA, ça se fabrique sur une table de montage.** Le jour où un modèle sortira trois minutes cohérentes en une passe, tu voudras quand même couper dedans. Autant apprendre à penser en plans dès maintenant.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Trois minutes de vidéo IA, c'est 36 plans",
    },
    {
      type: "h3",
      id: "plafond-des-outils",
      text: "Le plafond réel des générateurs",
    },
    {
      type: "p",
      text: "Chez Google, la génération la plus longue passe par l'extension de Veo 3.1. Tu pars d'un plan de 8 secondes, et l'API le rallonge de 7 secondes, jusqu'à 20 fois. Au bout : 148 secondes. Ça n'atteint pas les trois minutes, et la [documentation Veo de l'API Gemini](https://ai.google.dev/gemini-api/docs/veo) ajoute deux contraintes qui comptent : l'extension ne marche qu'en 720p, et elle n'existe pas sur Veo 3.1 Lite.",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-longue-duree-extension.webp",
      alt: "Documentation Veo de l'API Gemini en français, section Prolonger des vidéos Veo : rallonger de 7 secondes et jusqu'à 20 fois, vidéos d'entrée de 141 secondes maximum en 720p et en 9:16 ou 16:9, stockage de deux jours, et une remarque qui exclut Veo 3.1 Lite",
      caption:
        "La section sur l'extension de la documentation Veo (ai.google.dev/gemini-api/docs/veo), capturée le 13 octobre 2026.",
    },
    {
      type: "p",
      text: "Ailleurs, c'est plus court. Kling 3 génère entre 3 et 15 secondes par passe, avec son mode Multi-Shot qui découpe déjà la durée en plusieurs plans (je détaille la syntaxe dans les [prompts Kling](/blog/prompts-kling-exemples)). ByteDance annonce 30 secondes en un plan continu pour [Seedance 2.5](/blog/seedance-2-5-video-ia-30-secondes), un chiffre revendiqué à la sortie et pas un résultat que j'ai mesuré. Même le meilleur cas te laisse donc à six fois moins que l'objectif.",
    },
    {
      type: "h3",
      id: "longueur-moyenne-plan",
      text: "La longueur moyenne d'un plan donne le compte",
    },
    {
      type: "p",
      text: "Le cinéma a une mesure pour ça : la longueur moyenne de plan, ou ASL. L'article Wikipédia consacré à la [durée des plans](https://en.wikipedia.org/wiki/Average_shot_length) prend l'exemple de The Mist : 117 minutes, 1 292 plans, soit 5,4 secondes par plan. David Bordwell a relevé que La Mémoire dans la peau tournait autour de 3 secondes et sa suite à 1,9 seconde, dans son billet [Unsteadicam chronicles](https://www.davidbordwell.net/blog/2007/08/17/unsteadicam-chronicles/).",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-longue-duree-asl.webp",
      alt: "Article Wikipédia en anglais sur les plans de cinéma, section Duration : la longueur moyenne de plan y est présentée comme une mesure cinémétrique, avec The Mist à 117 minutes pour 1 292 plans soit 5,4 secondes, et L'Arche russe en un seul plan de 96 minutes",
      caption:
        "La section Duration de l'article Wikipédia (en anglais) consacré à la longueur moyenne de plan, capturée le 13 octobre 2026.",
    },
    {
      type: "p",
      text: "Divise 180 secondes par 5 et tu obtiens 36 plans. À 3 secondes de moyenne, il en faut 60. C'est le chiffre à garder en tête avant d'ouvrir un générateur : **ton vrai chantier, c'est une trentaine de plans qui doivent se ressembler.** Trente-six générations indépendantes, avec le même visage, la même lumière et la même focale de la première à la dernière.",
    },
    {
      type: "h3",
      id: "colonne-vertebrale",
      text: "Le son tient la structure, les images suivent",
    },
    {
      type: "p",
      text: "Sur quinze secondes, une belle image suffit. Sur trois minutes, le spectateur a besoin d'une ligne à suivre, et en IA cette ligne est presque toujours sonore : une voix off, une musique, un dialogue. Elle donne la durée exacte, les temps forts et les respirations. Les plans viennent se poser dessus, comme sur une [animatique](/blog/animatique-ia-methode).",
    },
    {
      type: "p",
      text: "Le récit compte aussi, bien sûr. Les trois actes d'une [structure narrative courte](/blog/structure-3-actes-video-ia) restent valables, ils sont juste plus longs : ton deuxième acte dure une minute et demie au lieu de six secondes, et il lui faut une bascule au milieu pour ne pas s'enliser.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Produire une vidéo IA de 3 minutes en 7 étapes",
    },
    {
      type: "p",
      text: "Je pars de ce découpage pour à peu près tout. Les durées bougent selon le sujet ; ce qui reste, ce sont des séquences avec chacune un rôle, et un rythme qui accélère avant la fin pour ralentir sur les derniers plans.",
    },
    {
      type: "table",
      caption:
        "Découpage type d'une vidéo IA de 180 secondes en six séquences (point de départ à adapter, pas une norme).",
      headers: ["Séquence", "Minutage", "Rôle", "Plans", "Durée moyenne"],
      rows: [
        ["1. Ouverture", "0:00 à 0:15", "Accrocher, poser le ton", "4", "environ 4 s"],
        ["2. Installation", "0:15 à 0:45", "Le lieu, le personnage, l'enjeu", "6", "5 s"],
        ["3. Développement", "0:45 à 1:20", "L'action avance", "7", "5 s"],
        ["4. Bascule", "1:20 à 1:50", "Ça se complique, le montage accélère", "7", "environ 4 s"],
        ["5. Résolution", "1:50 à 2:40", "Ce qui se joue vraiment", "9", "environ 5,5 s"],
        ["6. Fin", "2:40 à 3:00", "Laisser respirer", "3", "environ 7 s"],
      ],
    },
    {
      type: "ol",
      items: [
        "Pose la bande-son avant tout. Voix off enregistrée ou générée, musique calée, dialogues : tu dois avoir 180 secondes mesurables avant le premier prompt. Si la voix est générée, le [guide de la voix off IA](/blog/voix-off-ia-guide) t'aide à la diriger pour qu'elle laisse des respirations où tes images en auront besoin.",
        "Découpe en cinq ou six séquences. Une séquence, c'est un lieu, un moment de la journée et une fonction dans le récit. Note le minutage de chacune directement sur la piste son.",
        "Écris la bible visuelle. Trois images de référence du personnage principal (Veo 3.1 en accepte jusqu'à trois par génération), la palette, la focale, l'heure de la lumière. Tout plan généré part de cette bible, jamais du plan d'avant. Pour aller plus loin sur ce point, lis la méthode de [stabilité du personnage sur plusieurs plans](/blog/stabilite-personnage-multi-plans).",
        "Monte une animatique avec des images fixes. Une image par plan, posée sur la bande-son à la bonne durée. Tu vois tout de suite si la séquence 4 traîne ou si la fin arrive trop tôt, et ça ne coûte presque rien.",
        "Génère par lieu, pas dans l'ordre du récit. Tous les plans de la cuisine, puis tous ceux de la rue. Comme sur un vrai tournage, tu gardes la même lumière et les mêmes réglages tant que tu es dans le même décor.",
        "Monte chaque séquence dès qu'elle est complète et télécharge tes fichiers le jour même. Regarde-la sur la bande-son avant de passer à la suivante : un défaut repéré à la séquence 2 ne se propage pas jusqu'à la 6.",
        "Conforme l'ensemble. Étalonnage commun pour lisser les écarts de couleur entre générations, mixage, sous-titres, export. Sans elle, tu as 36 clips posés bout à bout.",
      ],
    },
    {
      type: "p",
      text: "Reste le budget. Avec Veo 3.1, la durée doit être réglée sur 8 secondes dès que tu génères en 1080p ou avec des images de référence. Tu factures donc 8 secondes même pour un plan que tu garderas 4 secondes au montage. Le calcul pour 36 plans et trois tentatives chacun : 36 × 3 × 8 = 864 secondes facturées pour 180 secondes gardées.",
    },
    {
      type: "image",
      src: "/images/articles/video-ia-longue-duree-tarifs.webp",
      alt: "Grille tarifaire de Veo 3.1 sur la page Tarifs de l'API Gemini en français : niveau gratuit non disponible, Veo 3.1 standard à 0,40 dollar la seconde en 720p et 1080p et 0,60 en 4K, Veo 3.1 Fast à 0,10, 0,12 et 0,30 dollar, Veo 3.1 Lite à 0,05 et 0,08 dollar sans sortie 4K",
      caption:
        "Les tarifs de Veo 3.1 sur la page Tarifs de l'API Gemini (ai.google.dev/gemini-api/docs/pricing), capturée le 13 octobre 2026.",
    },
    {
      type: "p",
      text: "Aux [tarifs de l'API Gemini](https://ai.google.dev/gemini-api/docs/pricing) du 13 octobre 2026, en 1080p et audio compris, ces 864 secondes reviennent à **69,12 dollars en Veo 3.1 Lite, 103,68 dollars en Fast et 345,60 dollars en standard.** Passe à cinq tentatives par plan et la facture Fast monte à 172,80 dollars. Les 69,12 dollars d'écart, c'est le prix de la vidéo entière en Lite.",
    },
    {
      type: "p",
      text: "> Pro Tip : sur un plan de 8 secondes, garde le milieu. Les premières images servent souvent à installer le mouvement et les dernières à le ralentir ; coupe dedans au montage plutôt que de chercher le plan qui sera parfait de la première à la dernière image. Tu valides plus vite, et chaque refus en moins, c'est 0,96 dollar économisé en Fast 1080p.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Pourquoi une vidéo IA longue s'effondre",
    },
    {
      type: "h3",
      id: "erreur-plan-unique",
      text: "Erreur 1, viser le plan unique de trois minutes",
    },
    {
      type: "p",
      text: "Symptôme : tu enchaînes les extensions en espérant tenir toute la durée, et tu obtiens 148 secondes en 720p dans un seul décor, avec une image qui se dégrade au fil des segments. L'extension a un usage précis, étirer un plan qui doit durer ; je le détaille dans l'article pour [prolonger un plan au-delà de 5 secondes](/blog/prolonger-plan-ia-au-dela-5-secondes).",
    },
    {
      type: "p",
      text: "Fix concret : réserve l'extension à un ou deux plans de la vidéo, ceux où la continuité du mouvement est le sujet (une marche, un travelling, une attente), et monte tout le reste en plans courts.",
    },
    {
      type: "h3",
      id: "erreur-rythme-plat",
      text: "Erreur 2, tous les plans à la même durée",
    },
    {
      type: "p",
      text: "Symptôme : la vidéo est propre mais on décroche vers 1 min 30. Les générateurs poussent à ça, puisque tout sort à 5 ou 8 secondes, et tu finis par garder 5 secondes partout. Or 5,4 secondes reste une moyenne : un montage vivant fait varier ses plans autour de ce chiffre au lieu de s'y caler.",
    },
    {
      type: "p",
      text: "Fix concret : dans ton animatique, raccourcis franchement la séquence de bascule (3 à 4 secondes par plan) et laisse les derniers plans durer.",
    },
    {
      type: "h3",
      id: "erreur-derive-personnage",
      text: "Erreur 3, le personnage qui change de visage en route",
    },
    {
      type: "p",
      text: "Symptôme : à la séquence 5, ton héros n'a plus tout à fait les mêmes traits qu'à la séquence 1, et sur un visage, l'écart saute aux yeux. La cause classique : chaque plan a été généré à partir de la dernière image du plan précédent, et les petites dérives se sont additionnées sur 36 générations.",
    },
    {
      type: "p",
      text: "Fix concret : repars de la bible à chaque plan, avec les mêmes images de référence, et vérifie les raccords de regard et de lumière entre séquences avec la méthode du [raccord entre deux plans IA](/blog/raccord-continuite-plans-ia). Un plan qui dérive, tu le régénères tout de suite.",
    },
    {
      type: "h3",
      id: "erreur-rushes-perdus",
      text: "Erreur 4, les rushes qui disparaissent au troisième jour",
    },
    {
      type: "p",
      text: "Symptôme : tu reviens sur ta séquence 2 trois jours plus tard pour la prolonger, et le fichier n'est plus sur le serveur. La documentation Veo est claire : les vidéos générées par l'API sont stockées deux jours, puis supprimées. Un projet de 3 minutes s'étale facilement sur une semaine, donc tu y passeras forcément.",
    },
    {
      type: "p",
      text: "Fix concret : télécharge chaque plan validé le jour même, range-le dans un dossier par séquence avec un nom qui reprend le numéro du plan de ton découpage (S2_P04, par exemple), et note à côté le prompt et les références utilisés. Si tu dois régénérer, tu repars de là.",
    },
    {
      type: "p",
      text: "Pour ta première vidéo longue, ne vise pas trois minutes tout de suite. Prends une bande-son de 90 secondes, découpe-la en trois séquences, monte l'animatique ce soir et génère une seule séquence demain. Tu sauras en une journée si ta bible tient, et le reste, c'est de la répétition. Si tu veux un format court bien bouclé avant de t'attaquer au long, la [bande-annonce IA](/blog/bande-annonce-ia) est un bon terrain d'entraînement.",
    },
    {
      type: "p",
      text: "Note de Frank : passer du clip de quinze secondes à un film de trois minutes, c'est surtout une affaire d'organisation, et ça s'apprend. Dans la [formation IA gratuite](https://frankhoubre.com/formation-ia-gratuite), on fait ce chemin ensemble, du premier plan à la séquence montée.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quelle IA peut générer une vidéo de 3 minutes d'un seul coup ?",
    },
    {
      type: "p",
      text: "Aucune parmi les grands modèles que j'ai vérifiés. Le plus long chez Google, c'est l'extension de Veo 3.1 : 8 secondes de départ, puis 7 secondes ajoutées jusqu'à 20 fois, soit 148 secondes au maximum, en 720p uniquement selon la documentation de l'API Gemini. Kling 3 s'arrête à 15 secondes par génération, et ByteDance annonce 30 secondes pour Seedance 2.5. Trois minutes, ça se monte à partir de plans courts.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Combien de plans faut-il pour une vidéo IA de 3 minutes ?",
    },
    {
      type: "p",
      text: "Compte une trentaine de plans. Avec la longueur moyenne d'un plan de cinéma récent, autour de 5 secondes (The Mist, cité par Wikipédia, tombe à 5,4 secondes), 180 secondes donnent 33 à 36 plans. Un montage nerveux, à 3 secondes de moyenne, en demanderait 60. Mon découpage type en prévoit 36, répartis sur six séquences.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien coûte une vidéo IA de 3 minutes avec Veo ?",
    },
    {
      type: "p",
      text: "Avec 36 plans générés à 8 secondes et trois tentatives par plan, tu factures 864 secondes. Aux tarifs de l'API Gemini relevés le 13 octobre 2026 en 1080p, ça fait 69,12 dollars en Veo 3.1 Lite, 103,68 dollars en Veo 3.1 Fast et 345,60 dollars en Veo 3.1 standard, audio compris. Le nombre de tentatives est le paramètre qui fait le plus bouger la facture.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Vaut-il mieux prolonger un plan ou monter des plans courts ?",
    },
    {
      type: "p",
      text: "Pour une vidéo de 3 minutes, monter des plans courts. L'extension sert à étirer un plan qui doit durer, une marche, un travelling, une attente. Elle reste limitée à 148 secondes, à une seule scène et à la définition 720p. Une vidéo longue a besoin de changer de lieu, d'échelle et de rythme, ce qu'un plan prolongé ne fait pas.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Comment garder le même personnage sur toute une vidéo longue ?",
    },
    {
      type: "p",
      text: "Repars toujours de la bible, jamais du plan précédent. Fixe trois images de référence du personnage (Veo 3.1 en accepte jusqu'à trois), une palette et une focale, et injecte-les dans chaque génération. Si tu chaînes les plans en prenant à chaque fois la dernière image du précédent, les petites dérives s'additionnent et ton héros n'a plus le même visage à la deuxième minute.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Pourquoi poser la bande-son avant de générer les images ?",
    },
    {
      type: "p",
      text: "Parce que c'est elle qui fixe la durée réelle de chaque plan. Une voix off ou une musique calée donne 180 secondes mesurables, avec des respirations et des temps forts. Tu sais alors qu'il te faut un plan de 4 secondes ici et un de 7 secondes là, et tu génères ce dont tu as besoin au lieu de remplir après coup.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-13 -->
