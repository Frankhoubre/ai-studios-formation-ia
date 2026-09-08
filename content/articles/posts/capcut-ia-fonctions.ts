import type { Article } from "@/lib/types/article";

export const capcutIaFonctions: Article = {
  title: "CapCut IA : les fonctions qui font gagner du temps",
  slug: "capcut-ia-fonctions",
  description:
    "Sous-titres, AutoCut, recadrage, Seedance : les fonctions IA de CapCut qui font vraiment gagner du temps, et comment ne pas cramer tes crédits.",
  excerpt:
    "Depuis le 25 mars 2026, les fonctions IA de CapCut se paient en crédits qui expirent tous les mois. Ça change la façon de s'en servir bien plus que les fonctions elles-mêmes.",
  category: "workflow-creatif",
  tags: ["capcut", "montage", "workflow", "vidéo ia", "sous-titres"],
  date: "2026-09-08",
  updatedAt: "2026-09-08",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/capcut-ia-fonctions.webp",
  imageAlt:
    "Une femme assise près de la vitre d'un train régional au crépuscule tient son téléphone à l'horizontale, écouteurs filaires, gobelet et carnet posés sur la tablette",
  keywords: [
    "capcut ia",
    "capcut intelligence artificielle",
    "fonctions ia capcut",
    "crédits capcut",
    "autocut capcut",
  ],
  relatedSlugs: [
    "monter-video-ia-capcut-davinci",
    "decouper-video-longue-shorts-ia",
    "sous-titres-automatiques-ia-video",
  ],
  faq: [
    {
      question: "Les fonctions IA de CapCut sont-elles gratuites ?",
      answer:
        "Une partie seulement. CapCut distingue les outils d'édition classiques, inclus dans l'app, et les actions dites Pro AI qui consomment des crédits : génération d'images, script-to-video, détourage intelligent, voix off premium, suppression d'arrière-plan, génération vidéo. Avant de lancer une de ces actions, une fenêtre affiche le nombre de crédits nécessaires. Les sous-titres automatiques restent la fonction que la plupart des créateurs utilisent sans y penser, mais les quotas bougent selon la plateforme et l'offre, donc regarde le compteur avant de te lancer dans un lot.",
    },
    {
      question: "Qu'est-ce qui a changé chez CapCut le 25 mars 2026 ?",
      answer:
        "CapCut a annoncé une nouvelle structure d'abonnements. Le plan Pro a été relevé : les AI points passent de 550 à 1200 et le stockage cloud de 100 Go à 1 To. Un plan Standard est apparu en dessous, présenté comme adapté aux amateurs de montage sans les fonctions de niveau Pro. Les anciens tarifs ne sont plus proposés aux nouveaux abonnés. CapCut ne publie pas les montants sur son site : il faut ouvrir l'app ou le compte web pour voir le prix de ta région.",
    },
    {
      question: "Les crédits CapCut non utilisés sont-ils reportés au mois suivant ?",
      answer:
        "Non, pas ceux de l'abonnement. Les règles publiées par CapCut sont explicites : les crédits d'abonnement sont attribués au début du mois d'abonnement et expirent à la fin de ce même mois. L'exemple donné dans la documentation prend un abonnement souscrit le 20 juin, dont les crédits expirent le 19 juillet. Les crédits achetés séparément vivent deux ans, et les crédits d'activité suivent les règles de l'opération qui les a distribués. En cas de résiliation, les crédits d'abonnement restent valables jusqu'à la fin du mois en cours.",
    },
    {
      question: "Peut-on récupérer ou se faire rembourser des crédits CapCut ?",
      answer:
        "Non. Le règlement des crédits indique qu'une fois achetés, ils ne peuvent être ni remboursés ni convertis en argent. Attention aussi à l'option qui convertit les utilisations Pro en crédits : la documentation précise que l'échange est définitif et qu'après ça, tu ne peux plus revenir aux utilisations Pro pour les fonctions IA. C'est le genre de bouton qu'on tape sans lire quand une génération est bloquée.",
    },
    {
      question: "Faut-il utiliser CapCut pour du travail client ?",
      answer:
        "Ça dépend de ce que tu signes. Toutes les fonctions IA tournent dans le cloud, donc les rushes du client partent chez ByteDance. Les conditions d'utilisation de CapCut, dans leur version du 15 avril 2026, accordent au service une licence non exclusive, libre de redevance, transférable, sous-licenciable, perpétuelle et mondiale sur le contenu utilisateur, pour exploiter et fournir le service. Le texte précise que CapCut ne devient pas propriétaire de ton contenu. Si ton client t'a fait signer une clause de confidentialité, pose la question avant d'importer ses rushes, pas après.",
    },
    {
      question: "Seedance est-il disponible dans CapCut en France ?",
      answer:
        "La génération vidéo de ByteDance est arrivée dans CapCut par vagues. Seedance 2.0 a été annoncé le 26 mars 2026 sur sept marchés (Brésil, Indonésie, Malaisie, Mexique, Philippines, Thaïlande, Vietnam), avec un déploiement progressif ailleurs. Seedance 2.5 a été lancé le 31 juillet 2026, d'abord sur Dreamina, puis déployé dans CapCut en Europe, en Asie, au Moyen-Orient et en Amérique du Sud pour les comptes abonnés. Le plus simple reste de regarder si le modèle apparaît dans ta version de l'app, parce que ces déploiements changent sans préavis.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu ouvres CapCut pour finir un Short, tu lances un détourage, et une fenêtre t'annonce que l'action coûte des crédits. Tu vas voir ton solde, tu découvres qu'il se remet à zéro tous les mois, et tu commences à te demander lesquelles de ces fonctions valent vraiment le coup.",
    },
    {
      type: "p",
      text: "Depuis le passage aux crédits en mars 2026, la question a bougé. On ne se demande plus ce que CapCut sait faire, on se demande ce qu'on lui laisse faire et à quel prix. Ce qui suit trie les fonctions IA selon le temps qu'elles font gagner en production, avec une méthode pour tenir un budget de crédits sur un mois complet.",
    },
    {
      type: "p",
      text: "Deux précisions avant de commencer. Je parle de l'app grand public, pas des offres entreprise qui gravitent autour. Et tu ne trouveras aucun tarif dans cet article.",
    },
    {
      type: "h2",
      id: "credits-change",
      text: "Ce que le passage aux crédits a changé",
    },
    {
      type: "p",
      text: "Le 25 mars 2026, CapCut a publié une [note d'aide sur sa nouvelle structure d'abonnements](https://www.capcut.com/help/pricing-change). Le plan Pro est relevé, un plan Standard apparaît en dessous, et les anciens tarifs disparaissent pour les nouveaux abonnés. Les deux chiffres qui comptent pour nous sont dans cette note : les AI points du plan Pro passent de 550 à 1200, et le stockage cloud de 100 Go à 1 To.",
    },
    {
      type: "image",
      src: "/images/articles/capcut-ia-fonctions-pricing-change.webp",
      alt: "Page d'aide CapCut détaillant la mise à jour du plan Pro : AI points passant de 550 à 1200, stockage cloud passant de 100 Go à 1 To, et introduction d'un nouveau plan Standard",
      caption:
        "La note d'aide de CapCut sur le changement de tarification. Source : capcut.com/help/pricing-change, capture du 08/09/2026.",
    },
    {
      type: "p",
      text: "Tu remarqueras ce qui manque dans cette note : les prix. CapCut ne les publie nulle part sur son site. Sa propre page d'aide sur le coût de l'abonnement explique seulement comment aller les consulter, et précise que le tarif varie selon la région, l'appareil et les promotions en cours. Quand un article te donne un montant au centime près, demande-toi d'où il sort. Va plutôt regarder dans ton app.",
    },
    {
      type: "p",
      text: "Cette mécanique de crédits sépare l'outil en deux mondes. D'un côté le montage classique, la timeline, les transitions, les titres, l'export, qui ne coûte rien de plus que ton abonnement. De l'autre les actions marquées Pro AI, qui décrémentent un compteur à chaque clic. Toute la suite de cet article part de cette frontière.",
    },
    {
      type: "h2",
      id: "classement",
      text: "Les fonctions IA classées par gain de temps réel",
    },
    {
      type: "p",
      text: "Voici comment je les range après les avoir utilisées en production, sur du format court destiné aux réseaux. Je note chaque fonction sur une seule chose, les minutes économisées par vidéo livrée. La prouesse technique ne rentre pas dans le calcul.",
    },
    {
      type: "table",
      caption: "Les fonctions IA de CapCut, du meilleur rapport temps au plus décevant",
      headers: ["Fonction", "Ce qu'elle fait", "Gain par vidéo", "Le piège"],
      rows: [
        [
          "Sous-titres automatiques",
          "Transcrit la voix et pose les blocs de texte",
          "10 à 20 min",
          "Relecture obligatoire sur les noms propres",
        ],
        [
          "Recadrage et suivi de sujet",
          "Passe un 16:9 en 9:16 en gardant le sujet dans le cadre",
          "5 à 15 min",
          "Décroche sur les plans à deux personnes",
        ],
        [
          "AutoCut, longue vidéo en clips",
          "Repère les temps morts et propose des extraits courts",
          "20 à 40 min",
          "Coupe souvent au milieu d'une idée",
        ],
        [
          "Détourage et fond",
          "Isole un sujet sans fond vert",
          "5 à 10 min",
          "Consomme des crédits, contours à retoucher",
        ],
        [
          "Voix off et traduction",
          "Génère une voix ou double une piste",
          "Variable",
          "Rendu générique sur les formats longs",
        ],
        [
          "Génération vidéo (Seedance)",
          "Crée des plans à partir d'un prompt ou d'images",
          "Nul à énorme",
          "Le poste qui vide un budget crédits",
        ],
      ],
    },
    {
      type: "h3",
      text: "Le trio qui tient ses promesses",
    },
    {
      type: "p",
      text: "Les sous-titres automatiques restent la meilleure fonction de l'app, et de loin. Sur une vidéo de deux minutes, tu passes de vingt minutes de saisie à trois minutes de relecture. La relecture n'est pas optionnelle : les noms de marques, les prénoms et les acronymes ressortent mal, et un sous-titre faux se remarque plus qu'un sous-titre absent. Si tu veux comparer avec les autres outils du marché, on a détaillé la question dans notre guide des [sous-titres automatiques pour tes vidéos](/blog/sous-titres-automatiques-ia-video).",
    },
    {
      type: "p",
      text: "Un détail que peu de gens connaissent : tu peux importer un fichier de sous-titres déjà corrigé, mais seulement sur CapCut Desktop et CapCut Web. La [documentation officielle](https://www.capcut.com/help/how-to-import-subtitles) précise que l'app mobile ne prend pas l'import direct de fichier, que le web accepte uniquement le SRT, et que le desktop accepte aussi le TXT brut. Encodage en UTF-8, sinon les accents sautent. C'est le genre d'info qui te fait gagner une demi-heure quand tu bosses avec un transcripteur externe.",
    },
    {
      type: "p",
      text: "Le recadrage avec suivi de sujet arrive juste derrière. Reprendre un 16:9 pour le publier en vertical à la main, c'est une image-clé toutes les deux secondes. Là, tu poses le suivi, tu regardes, tu corriges les trois plans où il décroche. Les plans à deux personnes qui parlent chacune leur tour restent son point faible : l'algorithme hésite entre les deux visages et le cadre oscille.",
    },
    {
      type: "p",
      text: "AutoCut est la fonction la plus spectaculaire et la plus inégale. Elle analyse la piste audio et l'image, supprime les silences, et propose des extraits courts avec la musique calée. Sur une interview bien menée, elle sort une base utilisable en deux minutes. Sur un cours de quarante minutes, elle coupe au milieu des raisonnements. Ma règle : je la laisse faire le premier tri, jamais le montage final. Si tu produis du clip à la chaîne, compare avec les outils dédiés dans notre méthode pour [découper une longue vidéo en Shorts](/blog/decouper-video-longue-shorts-ia).",
    },
    {
      type: "h3",
      text: "Celles qui dépannent",
    },
    {
      type: "p",
      text: "Le détourage sans fond vert fait le travail sur un sujet net, bien éclairé, devant un fond contrasté. Dès qu'il y a des cheveux détachés, de la fumée ou un vêtement qui bouge vite, tu retouches à la main et le gain fond. Il consomme des crédits, ce qui le rend cher pour une opération qu'un fond vert à trente euros règle définitivement.",
    },
    {
      type: "p",
      text: "La voix off et la traduction dépannent pour une maquette client ou une version test avant validation. Sur une vidéo qui sera vraiment publiée, la voix générique s'entend au bout de dix secondes, surtout en français. Il y a mieux ailleurs, et on a fait le tour des options dans notre guide de la [voix off IA pour tes vidéos](/blog/voix-off-ia-guide).",
    },
    {
      type: "h3",
      text: "Celles où je ne mettrais pas mes crédits",
    },
    {
      type: "p",
      text: "Le script-to-video, qui transforme un texte en vidéo montée avec des banques d'images, produit exactement ce que tu imagines : des plans corrects, sans intention, interchangeables. Tu le repères en une seconde dans un fil.",
    },
    {
      type: "p",
      text: "La génération vidéo intégrée est un autre débat. CapCut [documente Seedance 2.5](https://www.capcut.com/features/seedance-2-5-for-video-editor), lancé le 31 juillet 2026 sur Dreamina puis déployé dans CapCut en Europe pour les comptes abonnés, avec de la 4K native jusqu'à 30 secondes, un audio stéréo généré en même temps que l'image, et jusqu'à 50 références multimodales par génération. Sur le papier c'est sérieux. En pratique, générer depuis l'app de montage revient à mélanger deux métiers dans la même fenêtre, et à dépenser ton budget crédits sur des essais que tu jetterais dans un outil dédié. Je génère ailleurs, je monte dans CapCut.",
    },
    {
      type: "h2",
      id: "budget-credits",
      text: "Le budget crédits, en pratique",
    },
    {
      type: "p",
      text: "Le [règlement des crédits publié par CapCut](https://www.capcut.com/clause/credits-rule) mérite cinq minutes de lecture, parce qu'il change la façon de planifier un mois de production. Trois familles cohabitent : les crédits d'abonnement, les crédits gagnés lors d'opérations, et les crédits achetés. Ils ne se valent pas.",
    },
    {
      type: "image",
      src: "/images/articles/capcut-ia-fonctions-credits.webp",
      alt: "Extrait du règlement des crédits CapCut expliquant que les crédits d'abonnement expirent à la fin du mois d'abonnement, que les crédits achetés restent valables deux ans, avec l'exemple d'un abonnement du 20 juin dont les crédits expirent le 19 juillet",
      caption:
        "Le règlement des crédits de CapCut, section validité. Source : capcut.com/clause/credits-rule, capture du 08/09/2026.",
    },
    {
      type: "p",
      text: "Les crédits d'abonnement sont attribués au début de ton mois d'abonnement et expirent à la fin de ce mois. L'exemple donné par CapCut est parlant : abonnement souscrit le 20 juin, crédits reçus le 20 juin, expirés le 19 juillet. Aucun report. Les crédits achetés séparément, eux, tiennent deux ans, et rien de tout ça n'est remboursable ni convertible en argent.",
    },
    {
      type: "p",
      text: "Il y a un bouton à connaître avant de le toucher : celui qui convertit tes utilisations Pro restantes en crédits. La documentation prévient que l'opération est sans retour, et qu'ensuite tu ne peux plus utiliser les utilisations Pro pour les fonctions IA. On tape ce bouton un vendredi soir quand une génération refuse de partir, et on le regrette le lundi.",
    },
    {
      type: "p",
      text: "Voilà ce que je fais depuis que j'ai lu ces règles.",
    },
    {
      type: "ol",
      items: [
        "Note ta date de renouvellement dans ton agenda. C'est elle qui définit ton mois de crédits, pas le 1er du mois calendaire.",
        "Fais tes actions coûteuses dans la première moitié du cycle. Si tu attends la fin, tu improvises pour ne pas perdre le solde, et tu génères des choses inutiles.",
        "Sépare les tâches gratuites des tâches payantes dans ton propre planning. Sous-titrer, recadrer, monter : ça peut attendre. Générer et détourer : ça se planifie.",
        "N'achète des crédits supplémentaires qu'après avoir vidé ceux de l'abonnement, puisque l'ordre de consommation les fait passer en dernier de toute façon.",
      ],
    },
    {
      type: "h2",
      id: "limites",
      text: "Deux limites avant de bosser pour un client",
    },
    {
      type: "p",
      text: "La première tient au cloud. Aucune fonction IA de CapCut ne tourne sur ta machine : tes rushes montent sur les serveurs de ByteDance pour être traités. Les [conditions d'utilisation](https://www.capcut.com/clause/terms-of-service), dans leur version du 15 avril 2026, accordent au service une licence non exclusive, libre de redevance, transférable, sous-licenciable, perpétuelle et mondiale sur ton contenu utilisateur, aux fins d'exploiter et de fournir le service. Le texte précise ailleurs que CapCut ne devient pas propriétaire de ce que tu crées.",
    },
    {
      type: "p",
      text: "Ce n'est pas un scandale, c'est une formulation classique chez les plateformes. Mais si ton client t'a fait signer une clause de confidentialité sur un produit non annoncé, la question se pose avant d'importer les rushes. Je préfère la poser moi-même en réunion de lancement plutôt que de l'expliquer après coup.",
    },
    {
      type: "p",
      text: "La seconde limite est plus terre à terre : ta version de CapCut n'a pas forcément les mêmes fonctions que celle du tuto que tu regardes. Les déploiements se font par vagues de pays. Seedance 2.0 a été annoncé le 26 mars 2026 sur sept marchés seulement, et la génération n'a atteint l'Europe qu'ensuite. Avant de promettre une fonction à un client, vérifie qu'elle existe dans ton app, sur la plateforme que tu utilises vraiment.",
    },
    {
      type: "h2",
      id: "methode",
      text: "Ma séquence type pour un Short en vingt minutes",
    },
    {
      type: "p",
      text: "Un rush horizontal en entrée, un vertical publiable en sortie, et le moins de crédits possible dépensés au passage. Chaque étape de cet ordre évite une reprise plus loin.",
    },
    {
      type: "ol",
      items: [
        "Choisir le passage à la main dans le lecteur, avant même d'ouvrir CapCut. Deux minutes, et tu évites qu'AutoCut décide de l'accroche à ta place.",
        "Importer uniquement l'extrait, pas la vidéo complète. Moins d'analyse, moins d'attente, moins de tentation de laisser l'outil trancher.",
        "Générer les sous-titres tout de suite, avant tout habillage. Le texte pilote le rythme du montage, pas l'inverse.",
        "Relire les sous-titres ligne par ligne et corriger les noms propres. C'est l'étape que tout le monde saute et qui se voit le plus.",
        "Poser le recadrage vertical avec suivi de sujet, puis vérifier les trois ou quatre plans où le cadre hésite.",
        "Retravailler la première seconde à la main : le premier plan, la première ligne de texte, la coupe d'entrée.",
        "Ajouter le son : une piste continue sous toute la séquence, calée à l'oreille, sans effet automatique.",
        "Exporter en 1080 x 1920, garder le fichier maître, et laisser la plateforme recompresser toute seule.",
      ],
    },
    {
      type: "p",
      text: "Aucune de ces étapes ne consomme de crédits en dehors des sous-titres, selon la plateforme et l'offre. C'est volontaire. La partie chère de ton travail est ailleurs, et notamment dans l'ouverture, sujet qu'on a creusé dans notre article sur le [hook des trois premières secondes](/blog/hook-3-secondes-video-ia).",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Les erreurs qui coûtent cher",
    },
    {
      type: "ul",
      items: [
        "Laisser AutoCut choisir l'accroche. Il repère les silences, pas les idées fortes. La première seconde reste ton travail.",
        "Publier des sous-titres non relus. Une faute sur un nom de marque dans une vidéo client, c'est une correction et une facture de crédibilité.",
        "Générer des essais en fin de cycle pour ne pas perdre son solde. Tu ne gagnes rien, tu remplis ton disque.",
        "Empiler les effets IA sur un rush faible. Un plan mal cadré et mal éclairé reste mauvais après détourage.",
        "Confondre CapCut et une suite de post-production. Pour un étalonnage sérieux ou un montage long, la comparaison est faite dans notre guide du [montage de vidéos IA sur CapCut et DaVinci](/blog/monter-video-ia-capcut-davinci).",
      ],
    },
    {
      type: "h2",
      id: "cette-semaine",
      text: "Une heure pour trancher",
    },
    {
      type: "p",
      text: "Prends une vidéo que tu as déjà publiée, ouvre ton solde de crédits, et note-le. Refais le montage vertical en suivant la séquence ci-dessus, chronomètre en main. À la fin, regarde le solde une deuxième fois.",
    },
    {
      type: "p",
      text: "Tu obtiendras deux chiffres qui valent tous les comparatifs : le temps réel de ton montage, et le coût en crédits d'une vidéo livrée. Multiplie par ton volume mensuel. Si le total dépasse ton allocation, tu sais exactement quelle fonction retirer du workflow, et laquelle mérite de rester.",
    },
    {
      type: "p",
      text: "Note de fondateur : je trouve le passage aux crédits plutôt sain, même s'il a fait râler tout le monde. Un compteur en face de chaque clic, ça oblige à regarder ce qu'on achète. Et beaucoup de créateurs découvrent à ce moment-là que leur goulot d'étranglement se situait bien avant le montage, du côté des décisions qu'ils n'avaient pas prises. La formation IA gratuite d'AI Studios travaille cette partie-là.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-08 -->
