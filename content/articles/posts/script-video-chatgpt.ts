import type { Article } from "@/lib/types/article";

export const scriptVideoChatgpt: Article = {
  title: "Script vidéo ChatGPT : la méthode en 5 étapes",
  slug: "script-video-chatgpt",
  description:
    "Écrire un script vidéo avec ChatGPT qui tient à voix haute : la méthode en 5 étapes, les prompts à copier et ce qui a changé côté ChatGPT en 2026.",
  excerpt:
    "Un script écrit par ChatGPT se lit bien et se dit mal. Voici la méthode en cinq étapes pour sortir un texte que tu peux vraiment prononcer face caméra.",
  category: "storytelling",
  tags: ["ChatGPT", "script vidéo", "YouTube", "écriture"],
  date: "2026-08-29",
  updatedAt: "2026-08-29",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/script-video-chatgpt.webp",
  imageAlt:
    "Script vidéo imprimé annoté au stylo rouge sur la tablette d'un siège de train, ordinateur portable fermé à côté, lumière de fin d'après-midi",
  keywords: [
    "script vidéo chatgpt",
    "écrire script youtube ia",
    "script vidéo ia",
    "chatgpt script youtube",
    "prompt script vidéo",
  ],
  relatedSlugs: [
    "creer-video-youtube-ia",
    "hook-3-secondes-video-ia",
    "structure-3-actes-video-ia",
  ],
  faq: [
    {
      question: "Quel modèle ChatGPT utiliser pour écrire un script vidéo ?",
      answer:
        "Celui auquel tu as accès. À mon avis, l'écart d'écriture entre deux modèles récents pèse moins lourd que l'écart entre un bon et un mauvais prompt. Côté disponibilité, les notes officielles d'OpenAI indiquent que GPT-5.6 Sol, déployé à partir du 9 juillet 2026, est réservé aux offres payantes éligibles, et que les comptes Free et Go passent par GPT-5.4 mini via la fonction Thinking du menu +. Pour un script de six minutes, le modèle rapide suffit largement si tu découpes le travail en cinq étapes.",
    },
    {
      question: "Le canvas de ChatGPT existe-t-il encore pour écrire un script ?",
      answer:
        "Plus sur les modèles actuels. Les notes de publication d'OpenAI du 28 mai 2026 précisent que le canvas n'est plus disponible sur GPT-5.5 Instant ni GPT-5.5 Thinking, et que la rédaction passe désormais par les writing blocks directement dans la conversation. La mise à jour du 8 juin 2026 leur a ajouté un mode plein écran, une sauvegarde dans la bibliothèque et le téléchargement. Les tutoriels qui te disent d'ouvrir le canvas pour ton script datent d'avant.",
    },
    {
      question: "Combien de mots pour une vidéo de 5 minutes ?",
      answer:
        "Ça dépend de ton débit, et c'est la seule mesure qui compte. Enregistre-toi en lisant 300 mots à ton rythme naturel, chronomètre, divise : tu obtiens tes mots par minute. Sur mes montages je tourne autour de 150, ce qui donne environ 750 mots pour 5 minutes de face caméra. Une fois ce chiffre connu, tu le mets dans chaque prompt et la longueur du script arrête d'être une surprise au moment du tournage.",
    },
    {
      question: "Comment éviter qu'un script ChatGPT sonne artificiel ?",
      answer:
        "Lis-le à voix haute avant de toucher au moindre mot. Tout ce qui te fait buter, reprendre ton souffle ou relire est à réécrire, sans exception. Les tics les plus voyants ont d'ailleurs été atténués par OpenAI : la mise à jour de GPT-5.3 Instant du 16 mars 2026 cible explicitement les formules d'annonce, avec ces exemples traduits de l'anglais : « si tu veux », « tu ne vas pas le croire », « je peux te dire trois choses ». Ce qui reste, c'est la syntaxe d'écrit, et ça se corrige à l'oreille.",
    },
    {
      question: "Faut-il donner ses anciennes vidéos à ChatGPT ?",
      answer:
        "Oui, en lui demandant d'analyser plutôt que d'imiter. Colle la transcription d'une vidéo qui a bien marché et demande la liste de tes tournures récurrentes, de tes mots de liaison, de ta longueur de phrase moyenne. Tu récupères trois ou quatre règles que tu réutilises ensuite dans tous tes prompts. La demande directe « écris dans mon style » produit une caricature qui appuie sur tes deux tics les plus visibles.",
    },
    {
      question: "ChatGPT peut-il écrire directement le script d'une vidéo IA ?",
      answer:
        "Il écrit le texte que tu vas dire, pas les plans que tu vas générer. Deux documents différents. Les mélanger dans un seul prompt donne du flou des deux côtés. Écris d'abord le script au mot près, puis dérive les plans ligne par ligne. C'est au passage ton meilleur test de faisabilité : une phrase sans image possible en face est une phrase à couper.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu demandes un script à ChatGPT, tu reçois un texte propre, et tu le lis à voix haute : ça coince dès la troisième phrase. Le sens est là, le souffle non. Les incises te font perdre le fil, la phrase ne retombe jamais, et tu finis par improviser devant la caméra le texte que tu venais d'écrire.",
    },
    {
      type: "p",
      text: "Cinq étapes, une trentaine de minutes, et un texte que tu peux prononcer sans le réécrire en direct. Les prompts se copient tels quels. Trois variantes suivent, selon que tu tournes du long, du Short ou une commande client.",
    },
    {
      type: "p",
      text: "Le canvas, cet éditeur latéral que tous les tutoriels recommandent pour rédiger un script, a disparu des modèles actuels le 28 mai 2026. Ça périme une bonne partie de ce que tu liras ailleurs en français. Et OpenAI a passé 2026 à retirer du modèle les tics d'écriture qu'on corrigeait justement à la main.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Écrire pour une voix qui parle",
    },
    {
      type: "h3",
      id: "calibre-pour-loeil",
      text: "Le brouillon sort calibré pour l'œil",
    },
    {
      type: "p",
      text: "Phrases longues qui tiennent debout parce que l'œil peut revenir en arrière, incises entre parenthèses, listes à puces qui rangent l'information proprement. Sur une page, ça fonctionne très bien. À l'oral, tout s'effondre : ton spectateur n'a pas de retour arrière, il a une seule passe et le pouce posé sur l'écran.",
    },
    {
      type: "p",
      text: "La contrainte utile, c'est la durée, et elle se compte en mots. Enregistre-toi une fois en lisant 300 mots à ton rythme naturel, chronomètre, divise : tu as tes mots par minute. Sur mes montages je tourne autour de 150. Ce chiffre, tu le mets ensuite dans chaque prompt, et la longueur du script arrête d'être une loterie que tu découvres au tournage.",
    },
    {
      type: "p",
      text: "Le script a aussi un jumeau, ce que tu montres pendant que tu parles. Une belle phrase sans image en face devient un temps mort de huit secondes sur un plan fixe. Tu peux rattraper ça au montage, mais ça coûte du temps et ça se voit. Autant y penser en écrivant.",
    },
    {
      type: "h3",
      id: "ce-quopenai-a-retire",
      text: "Ce qu'OpenAI a déjà retiré de ta copie",
    },
    {
      type: "p",
      text: "Deux mises à jour de 2026 ont directement touché ce qui rendait un script IA reconnaissable. Le 16 mars 2026, OpenAI annonce que GPT-5.3 Instant réduit les formules d'annonce, et donne ses exemples noir sur blanc, ici traduits de l'anglais : « si tu veux », « tu ne vas pas le croire », « je peux te dire trois choses que ». Ce sont exactement les amorces de voix off YouTube qu'on supprimait une par une.",
    },
    {
      type: "p",
      text: "Le 28 mai 2026, la mise à jour de GPT-5.5 Instant vise les réponses trop longues et saturées de puces, avec un meilleur rythme annoncé sur les demandes pratiques. Ces deux notes sont publiques dans les [notes de publication des modèles d'OpenAI](https://help.openai.com/en/articles/9624314-model-release-notes), avec leur date.",
    },
    {
      type: "p",
      text: "Ce que ça change concrètement : les instructions du type « pas de listes, pas de formules creuses » pèsent moins qu'il y a un an. Le travail s'est déplacé ailleurs, sur ce que le modèle ne peut pas deviner. Ton débit réel, ce que tu as filmé, ce que tu peux montrer, et le fait que tu vas prononcer ce texte avec ta bouche.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "La méthode en 5 étapes",
    },
    {
      type: "p",
      text: "Tu ne demandes jamais le script complet du premier coup. Tu fabriques cinq livrables successifs, chacun assez petit pour être jeté sans regret. C'est ce découpage qui rend le texte retouchable : un pavé de 900 mots généré d'un bloc, tu ne peux plus en corriger le milieu sans casser le reste.",
    },
    {
      type: "table",
      caption:
        "Les cinq étapes, ce que tu donnes et ce que tu récupères. Durées indicatives pour une vidéo face caméra de six minutes.",
      headers: ["Étape", "Ce que tu donnes", "Ce que tu récupères", "Temps"],
      rows: [
        [
          "1. Cadrage",
          "Format, durée, audience, ton débit en mots par minute",
          "Cinq questions de ChatGPT, zéro texte rédigé",
          "5 min",
        ],
        [
          "2. Structure",
          "Tes réponses aux cinq questions",
          "Trois déroulés possibles en 6 à 8 beats",
          "5 min",
        ],
        [
          "3. Accroche",
          "Le déroulé que tu as retenu",
          "Cinq ouvertures de deux phrases",
          "5 min",
        ],
        [
          "4. Corps",
          "Un beat à la fois, avec son quota de mots",
          "Le texte, bloc par bloc",
          "15 min",
        ],
        [
          "5. Passe orale",
          "Le script entier, lu à voix haute au chrono",
          "Les phrases à couper et la durée réelle",
          "10 min",
        ],
      ],
    },
    {
      type: "ol",
      items: [
        "Cadre le projet et interdis toute rédaction. ChatGPT te pose ses questions, tu réponds en une ligne chacune.",
        "Fais produire la structure seule, en beats. Un beat dit ce qui se passe et ce que le spectateur comprend, en une phrase.",
        "Traite l'accroche comme un livrable séparé, jamais collée au reste. C'est le seul endroit où tu veux cinq options.",
        "Rédige le corps beat par beat, avec un quota de mots par bloc. Tu valides ou tu relances avant de passer au suivant.",
        "Lis tout à voix haute avec un chronomètre. Tu marques chaque endroit où tu butes, et tu ne corriges que ceux-là.",
      ],
    },
    {
      type: "p",
      text: "Voici les cinq prompts dans l'ordre. Remplace les crochets, garde les contraintes chiffrées, elles font le plus gros du travail.",
    },
    {
      type: "quote",
      text: "Je prépare une vidéo YouTube de 6 minutes face caméra sur [sujet], pour [audience précise]. Mon débit est de 150 mots par minute, le script fera donc 900 mots, pas un de plus. Ne rédige rien pour l'instant. Réponds-moi uniquement par les 5 questions dont tu as besoin pour écrire ce script.",
      cite: "1. Cadrage. L'interdiction de rédiger est la partie la plus importante du prompt.",
    },
    {
      type: "quote",
      text: "Voici mes réponses : [tes réponses]. Propose-moi 3 déroulés différents pour cette vidéo, en 6 à 8 beats chacun. Un beat = une phrase qui dit ce qui se passe à l'écran et ce que le spectateur comprend à ce moment. Aucun texte rédigé, aucune phrase de transition.",
      cite: "2. Structure. Trois options valent mieux qu'une, tu vois enfin ce que tu ne veux pas.",
    },
    {
      type: "quote",
      text: "Déroulé retenu : [colle le déroulé]. Écris 5 ouvertures de 2 phrases maximum. Chacune commence par une affirmation nette ou une image concrète. Interdits : question rhétorique, promesse du type « je vais te montrer », annonce du plan de la vidéo, chiffre que je n'ai pas fourni.",
      cite: "3. Accroche. Les interdits sont plus efficaces que les consignes de ton.",
    },
    {
      type: "quote",
      text: "Rédige uniquement le beat 3. 130 mots. Phrases de 12 mots en moyenne. Aucune liste, aucune sous-partie, aucun tiret. Écris comme si tu parlais à une seule personne assise en face de toi, qui peut t'interrompre à tout moment.",
      cite: "4. Corps. Un beat par message, sinon tu perds la main sur la longueur.",
    },
    {
      type: "quote",
      text: "Voici un paragraphe de mon script : [colle-le]. En le lisant à voix haute, je bute sur les phrases 2 et 4 et je manque d'air à la fin. Réécris uniquement ces deux phrases, plus courtes, en gardant exactement le même sens et le même vocabulaire. Ne touche à rien d'autre.",
      cite: "5. Passe orale. Réparation ciblée, jamais une réécriture globale.",
    },
    {
      type: "p",
      text: "> Pro Tip : à l'étape 4, recolle le beat précédent au-dessus de ta demande, même s'il est déjà dans la conversation. Sans ça, ChatGPT réamorce son argument à chaque bloc et tu te retrouves avec la même idée expliquée quatre fois, chaque fois un peu différemment. Deux lignes de contexte suffisent à couper court.",
    },
    {
      type: "p",
      text: "Ce script est une pièce dans une chaîne plus longue. Si tu pars de zéro, le parcours complet du script à la miniature est détaillé dans le guide pour [créer une vidéo YouTube avec l'IA](/blog/creer-video-youtube-ia). Pour l'ouverture, la mécanique des [trois premières secondes](/blog/hook-3-secondes-video-ia) donne des schémas d'accroche plus fins que ce que ChatGPT propose spontanément.",
    },
    {
      type: "p",
      text: "Et si tu écris de la fiction plutôt qu'une vidéo d'information, la logique change complètement : personnages, beats émotionnels, dialogues. C'est un autre chantier, couvert par la méthode pour [écrire un scénario avec l'IA](/blog/ecrire-scenario-ia-methode-outils).",
    },
    {
      type: "h2",
      id: "variantes",
      text: "Adapter la méthode à ton format",
    },
    {
      type: "h3",
      id: "youtube-long",
      text: "YouTube long, face caméra",
    },
    {
      type: "p",
      text: "C'est le format pour lequel j'ai taillé la méthode. Tu gardes les cinq étapes telles quelles, avec deux ajustements. Le beat 1 et le beat final se rédigent en dernier, une fois que tu sais vraiment de quoi parle ta vidéo. Et tu t'autorises une digression par vidéo, une seule, parce que c'est souvent celui qu'on me cite en commentaire.",
    },
    {
      type: "p",
      text: "Sur la structure globale, la logique [début, milieu, fin appliquée à une vidéo courte](/blog/structure-3-actes-video-ia) tient aussi sur six minutes. Tu allonges le milieu, tu ne rallonges jamais l'ouverture.",
    },
    {
      type: "h3",
      id: "short-vertical",
      text: "Short vertical, moins de 60 secondes",
    },
    {
      type: "p",
      text: "Là, tu supprimes les étapes 2 et 3 et tu les remplaces par une seule : écrire les quinze premiers mots. Un Short de 45 secondes fait environ 110 mots à 150 mots par minute, il n'y a de la place que pour une idée. Le prompt devient : « Une seule idée, 110 mots, la conclusion arrive dans les 10 derniers mots, aucune mise en contexte au début. »",
    },
    {
      type: "p",
      text: "Le piège classique du format court, c'est de garder l'introduction du format long. Elle mange un tiers de la durée. J'ai détaillé ces mécaniques côté [vidéo courte pour TikTok, Reels et Shorts](/blog/video-courte-ia-tiktok-reels-shorts).",
    },
    {
      type: "h3",
      id: "video-client",
      text: "Vidéo commandée par un client",
    },
    {
      type: "p",
      text: "Ici le script doit survivre à une validation. Ajoute une étape zéro : colle le brief du client tel quel et demande la liste des mots qu'il emploie pour parler de son produit. Ce sont ceux-là qui doivent apparaître dans le script, même s'ils te semblent moins bons que les tiens.",
    },
    {
      type: "p",
      text: "Prépare aussi deux versions dès le départ, une à 100 % de la durée demandée et une à 80 %. Il arrive presque toujours quelque chose en fin de parcours : une mention légale, un nom de produit à caser. La version courte absorbe l'ajout. Tu ne recoupes rien.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les erreurs qui rendent un script inutilisable",
    },
    {
      type: "h3",
      id: "erreur-1",
      text: "Demander le script entier du premier coup",
    },
    {
      type: "p",
      text: "Symptôme : un texte lisse, de longueur aléatoire, où chaque paragraphe se tient mais où l'ensemble n'avance pas. Tu veux corriger le milieu, tu casses la transition, tu relances, tu obtiens une version différente partout. Fix concret : jamais plus de 150 mots par message. Le découpage en beats existe pour ça, il te rend le droit de jeter un bloc sans toucher aux autres.",
    },
    {
      type: "h3",
      id: "erreur-2",
      text: "Laisser passer la ponctuation d'écrit",
    },
    {
      type: "p",
      text: "Symptôme : à la lecture, tu te retrouves à mi-phrase sans air, ou tu relis une incise deux fois pour comprendre où elle se raccroche. Parenthèses, subordonnées empilées, deux-points en cascade : ça fonctionne sur une page, ça meurt dans un micro. Fix concret : toute phrase que tu ne peux pas dire d'un seul souffle se coupe en deux. Le test se fait debout, à voix haute, pas dans ta tête.",
    },
    {
      type: "h3",
      id: "erreur-3",
      text: "Laisser un chiffre entrer dans le script sans source",
    },
    {
      type: "p",
      text: "Symptôme : une statistique parfaitement crédible, ronde, bien placée, que personne n'a jamais publiée. C'est le piège le plus coûteux, parce qu'un chiffre faux dans une vidéo reste en ligne et se cite pendant des années. Fix concret : un onglet ouvert par chiffre, avec sa source. Pas d'onglet, pas de chiffre.",
    },
    {
      type: "h3",
      id: "erreur-4",
      text: "Écrire sans savoir ce que tu vas montrer",
    },
    {
      type: "p",
      text: "Symptôme : au montage, quarante secondes de texte n'ont aucune image en face et tu meubles avec des plans de coupe qui ne veulent rien dire. Fix concret : deux colonnes dès la rédaction, le texte à gauche, le plan prévu à droite. Toute ligne qui reste sans plan à droite est raccourcie ou coupée. C'est aussi ce document qui devient ton plan de tournage.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quel modèle ChatGPT utiliser pour écrire un script vidéo ?",
    },
    {
      type: "p",
      text: "Celui auquel tu as accès. À mon avis, l'écart d'écriture entre deux modèles récents pèse moins lourd que l'écart entre un bon et un mauvais prompt. Côté disponibilité, les notes officielles d'OpenAI indiquent que GPT-5.6 Sol, déployé à partir du 9 juillet 2026, est réservé aux offres payantes éligibles, et que les comptes Free et Go passent par GPT-5.4 mini via la fonction Thinking du menu +. Pour un script de six minutes, le modèle rapide suffit largement si tu découpes le travail en cinq étapes.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Le canvas de ChatGPT existe-t-il encore pour écrire un script ?",
    },
    {
      type: "p",
      text: "Plus sur les modèles actuels. Les notes de publication d'OpenAI du 28 mai 2026 précisent que le canvas n'est plus disponible sur GPT-5.5 Instant ni GPT-5.5 Thinking, et que la rédaction passe désormais par les writing blocks directement dans la conversation. La mise à jour du 8 juin 2026 leur a ajouté un mode plein écran, une sauvegarde dans la bibliothèque et le téléchargement. Les tutoriels qui te disent d'ouvrir le canvas pour ton script datent d'avant.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien de mots pour une vidéo de 5 minutes ?",
    },
    {
      type: "p",
      text: "Ça dépend de ton débit, et c'est la seule mesure qui compte. Enregistre-toi en lisant 300 mots à ton rythme naturel, chronomètre, divise : tu obtiens tes mots par minute. Sur mes montages je tourne autour de 150, ce qui donne environ 750 mots pour 5 minutes de face caméra. Une fois ce chiffre connu, tu le mets dans chaque prompt et la longueur du script arrête d'être une surprise au moment du tournage.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Comment éviter qu'un script ChatGPT sonne artificiel ?",
    },
    {
      type: "p",
      text: "Lis-le à voix haute avant de toucher au moindre mot. Tout ce qui te fait buter, reprendre ton souffle ou relire est à réécrire, sans exception. Les tics les plus voyants ont d'ailleurs été atténués par OpenAI : la mise à jour de GPT-5.3 Instant du 16 mars 2026 cible explicitement les formules d'annonce, avec ces exemples traduits de l'anglais : « si tu veux », « tu ne vas pas le croire », « je peux te dire trois choses ». Ce qui reste, c'est la syntaxe d'écrit, et ça se corrige à l'oreille.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il donner ses anciennes vidéos à ChatGPT ?",
    },
    {
      type: "p",
      text: "Oui, en lui demandant d'analyser plutôt que d'imiter. Colle la transcription d'une vidéo qui a bien marché et demande la liste de tes tournures récurrentes, de tes mots de liaison, de ta longueur de phrase moyenne. Tu récupères trois ou quatre règles que tu réutilises ensuite dans tous tes prompts. La demande directe « écris dans mon style » produit une caricature qui appuie sur tes deux tics les plus visibles.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "ChatGPT peut-il écrire directement le script d'une vidéo IA ?",
    },
    {
      type: "p",
      text: "Il écrit le texte que tu vas dire, pas les plans que tu vas générer. Deux documents différents. Les mélanger dans un seul prompt donne du flou des deux côtés. Écris d'abord le script au mot près, puis dérive les plans ligne par ligne. C'est au passage ton meilleur test de faisabilité : une phrase sans image possible en face est une phrase à couper.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Ce que tu peux faire dans l'heure",
    },
    {
      type: "p",
      text: "Prends une vidéo que tu dois tourner cette semaine et passe uniquement l'étape 1. Cinq questions, cinq réponses d'une ligne. Tu verras tout de suite si ton sujet tient, parce qu'une question à laquelle tu n'arrives pas à répondre en une ligne signale presque toujours un angle encore flou.",
    },
    {
      type: "p",
      text: "Ensuite, mesure ton débit une bonne fois. C'est dix minutes de travail qui servent sur toutes tes vidéos à venir, et c'est le seul chiffre qui transforme « fais-moi un script de 6 minutes » en une consigne que le modèle peut suivre. Si tu enchaînes avec une voix off générée plutôt que ta propre voix, le [guide ElevenLabs en français](/blog/elevenlabs-guide-complet) couvre la direction de lecture, qui est un métier à part.",
    },
    {
      type: "p",
      text: "Note de fondateur : ces prompts bougeront à la prochaine mise à jour d'OpenAI, je les publie quand même, parce que le découpage en cinq livrables tient depuis que je fabrique des vidéos. C'est ce genre de découpage qu'on travaille sur des projets réels dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-29 -->
