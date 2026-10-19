import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-19";
const IMG = "/images/articles/alternatives-storyboarder";

export const alternativesStoryboarder: Article = {
  title: "Alternatives à Storyboarder : que choisir en 2026 ?",
  slug: "alternatives-storyboarder",
  description:
    "Storyboarder n'a plus de version stable depuis 2020. Krita, Boords, StoryboardHero, Celtx ou ScreenWeaver : quoi choisir selon ta façon de dessiner.",
  excerpt:
    "Storyboarder tourne encore, mais plus personne ne le corrige. Tu dessines toi-même : passe sur Krita. Tu veux que l'IA dessine les cases : Boords, StoryboardHero ou ScreenWeaver. Et exporte tes vieux projets avant qu'il ne s'ouvre plus.",
  category: "workflow-creatif",
  tags: ["storyboarder", "storyboard", "alternatives", "krita", "boords", "préproduction"],
  date: "2026-10-19",
  updatedAt: "2026-10-19",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/alternatives-storyboarder.webp",
  imageAlt:
    "Dans la cabine boisée d'une péniche transformée en atelier, un illustrateur à lunettes rondes en gilet moutarde redessine au crayon des cases de storyboard en bonshommes dans un grand carnet, une vieille planche imprimée scotchée à côté, un disque dur externe étiqueté et un ordinateur portable fermé sur la table, reflets du canal par les hublots",
  keywords: [
    "alternative storyboarder",
    "storyboarder abandonné",
    "logiciel storyboard gratuit",
    "storyboarder wonder unit",
    "krita storyboard",
    "remplacer storyboarder",
  ],
  relatedSlugs: ["meilleurs-outils-storyboard-ia", "creer-storyboard-ia", "animatique-ia-methode"],
  faq: [
    {
      question: "Storyboarder est-il abandonné ?",
      answer:
        "Wonder Unit n'a rien annoncé et le logiciel se télécharge toujours. Mais la dernière version stable, la 2.1.0, date du 3 septembre 2020, le dernier commit du 30 juin 2022, et les tickets de 2026 qui demandent si le projet est maintenu n'ont reçu aucune réponse de l'équipe.",
    },
    {
      question: "Quelle est la meilleure alternative gratuite à Storyboarder ?",
      answer:
        "Pour quelqu'un qui dessine, Krita : gratuit, open source, mis à jour (5.3.4.1 le 7 octobre 2026), avec un panneau Storyboard qui exporte en PDF ou en SVG. Il faut créer soi-même les champs dialogue et action.",
    },
    {
      question: "Existe-t-il une alternative à Storyboarder avec de l'IA ?",
      answer:
        "Oui, mais payante dès que tu génères en volume. Boords offre 8 crédits d'image d'essai puis 39 $ par mois (26 $ en annuel), StoryboardHero démarre à 19 $ par mois, ScreenWeaver génère le storyboard à partir de l'offre Auteur à 39,99 $ par mois.",
    },
    {
      question: "Peut-on récupérer ses projets Storyboarder dans un autre logiciel ?",
      answer:
        "Pas le fichier source directement dans les outils cités ici. Exporte la planche contact en PDF et les cases en images, puis réimporte-les comme références ou comme images de cases. Le scénario au format Fountain s'importe dans Celtx et ScreenWeaver.",
    },
    {
      question: "Celtx remplace-t-il Storyboarder ?",
      answer:
        "Pour ranger des images face au scénario, oui : ses séquences se créent à partir des en-têtes de scène. Mais Celtx ne dessine pas et ne génère pas d'images, et le storyboard n'est pas dans l'offre gratuite. Il est inclus à partir de Writer Pro, à 18,74 € par mois en annuel.",
    },
    {
      question: "Storyboarder fonctionne-t-il sur les Mac Apple Silicon ?",
      answer:
        "La 3.0.0 annonçait le support d'Apple Silicon via Rosetta 2, mais elle est restée en pré-version depuis février 2021, et des utilisateurs signalent sur GitHub en 2026 que ces versions ne fonctionnent pas chez eux. Si tu es sur un Mac récent, prépare une alternative.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Storyboarder se télécharge toujours, mais sa dernière version stable date du 3 septembre 2020. Si tu dessines tes cases toi-même, le remplaçant le plus proche est **Krita**, gratuit et open source, avec son panneau Storyboard. Si tu veux que l'IA dessine à ta place, regarde **Boords** pour faire valider un client, **StoryboardHero** pour le petit budget, ou **ScreenWeaver** si tout part de ton scénario (j'en suis co-fondateur, je le dis dès maintenant). Celtx reste une option pour écrire et storyboarder au même endroit, sans IA.",
    },

    { type: "h2", id: "verdict", text: "Mon choix selon ce que tu faisais avec Storyboarder" },
    {
      type: "verdict",
      title: "Faut-il quitter Storyboarder ?",
      pourQui: "Les utilisateurs de Storyboarder qui se demandent s'ils doivent partir, et vers quel outil.",
      forts: [
        "Krita est gratuit, à jour (5.3.4.1 sortie le 7 octobre 2026) et bien meilleur pour peindre",
        "Boords, StoryboardHero et ScreenWeaver génèrent les images que tu dessinais à la main",
        "Celtx crée tes séquences de storyboard à partir des scènes du script",
      ],
      faibles: [
        "Aucune alternative ne reprend tout Storyboarder d'un bloc",
        "Krita n'a ni champs dialogue et action prêts à l'emploi, ni export vers Premiere",
        "Les outils IA deviennent payants dès que tu génères en volume",
        "Le storyboard de Celtx n'est pas dans son offre gratuite",
      ],
      verdict:
        "Si Storyboarder marche encore sur ta machine, rien ne presse. Exporte tes projets aujourd'hui et choisis ton remplaçant avant la prochaine grosse mise à jour de ton système.",
    },
    {
      type: "comparison",
      caption: "Storyboarder et ses alternatives, du point de vue d'un utilisateur qui part",
      headers: ["Outil", "Pour qui", "Prix d'entrée", "IA générative", "Ce qui te manquera"],
      rows: [
        ["Storyboarder", "Dessin rapide hors ligne", "Gratuit", "Non", "Plus de correctif depuis 2022"],
        ["Krita", "Tu dessines toi-même", "Gratuit, open source", "Non", "Champs dialogue et action à créer"],
        ["Boords", "Validation par un client", "Gratuit (5 storyboards, 8 crédits image uniques), puis 39 $/mois ou 26 $/mois en annuel", "Oui", "Storyboard non synchronisé avec le script"],
        ["StoryboardHero", "Petit budget", "19 $/mois, essai de 7 jours", "Oui", "Aucun modèle d'image nommé"],
        ["Celtx", "Écrire et découper", "Gratuit sans storyboard, Writer Pro 18,74 €/mois en annuel", "Non", "Tu fournis toutes les images"],
        ["ScreenWeaver", "Du scénario à la vidéo", "Screenwriter gratuit, Auteur 39,99 $/mois", "Oui", "Pas d'outil de dessin à la main"],
      ],
      source: [
        { label: "Storyboarder sur GitHub", href: "https://github.com/wonderunit/storyboarder/releases" },
        { label: "Krita", href: "https://krita.org/en/download/" },
        { label: "Boords Pricing", href: "https://boords.com/pricing" },
        { label: "StoryboardHero Pricing", href: "https://storyboardhero.ai/pricing" },
        { label: "Celtx Pricing", href: "https://www.celtx.com/pricing/" },
        { label: "ScreenWeaver, tarifs", href: "https://www.screenweaver.ai/fr#pricing" },
      ],
      verifieLe: "2026-10-19",
      note: "Prix affichés depuis la France, dans la devise de la page. Celtx affiche ses prix en euros.",
    },

    { type: "h2", id: "abandonne", text: "Storyboarder est-il abandonné ?" },
    {
      type: "p",
      text: "Officiellement, non. Wonder Unit n'a rien annoncé, le dépôt GitHub n'est pas archivé et le bouton de téléchargement fonctionne. Dans les faits, plus rien ne bouge. Les données publiques de [GitHub](https://github.com/wonderunit/storyboarder), relues le 19 octobre 2026, vont toutes dans le même sens :",
    },
    {
      type: "ul",
      items: [
        "dernière version stable : la 2.1.0, publiée le 3 septembre 2020 ;",
        "la 3.0.0 est marquée « pré-version » depuis le 17 février 2021 ;",
        "dernier commit sur la branche principale : 30 juin 2022 ;",
        "1 064 tickets ouverts.",
      ],
    },
    {
      type: "p",
      text: "Le 8 juin 2026, un utilisateur a ouvert le ticket « Are we still maintaining this repo? ». Le 13 août, un autre s'inquiète des futures versions de macOS. Personne chez Wonder Unit n'a répondu, ni à l'un ni à l'autre. La seule réponse vient d'un autre utilisateur, qui renvoie vers une réécriture pour Mac appelée StoryB. Je ne l'ai pas vérifiée, donc je ne te la conseille pas.",
    },
    {
      type: "gallery",
      caption: "Trois pages publiques qui montrent l'état du projet le 19 octobre 2026.",
      items: [
        {
          src: `${IMG}-github-versions.webp`,
          alt: "Page Releases du dépôt GitHub wonderunit/storyboarder : la v3.0.0 porte l'étiquette Pre-release, publiée le 17 février 2021, la v2.1.0 juste en dessous dans la liste",
          caption: "La v3.0.0 n'est jamais sortie de pré-version. La dernière stable reste la 2.1.0.",
          source: "https://github.com/wonderunit/storyboarder/releases",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
        {
          src: `${IMG}-github-ticket-maintenance.webp`,
          alt: "Ticket GitHub 2665 Are we still maintaining this repo, ouvert en juin 2026, sans personne assignée, avec une seule réponse d'un utilisateur extérieur à Wonder Unit",
          caption: "Le ticket qui pose la question de la maintenance n'a reçu aucune réponse de l'équipe.",
          source: "https://github.com/wonderunit/storyboarder/issues/2665",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
        {
          src: `${IMG}-wonderunit-page.webp`,
          alt: "Page produit Storyboarder sur wonderunit.com avec le bouton Download for Free et la mention Version 1.0.0 available for Mac OS X, Windows, and Linux",
          caption: "La page produit affiche encore « Version 1.0.0 », alors que GitHub en est à la 2.1.0.",
          source: "https://wonderunit.com/storyboarder/",
          capturedAt: CAPTURE,
          width: 1440,
          height: 900,
        },
      ],
    },
    {
      type: "p",
      text: "Les tickets récents disent ce qui casse : export vidéo en échec (« I cannot export video », 3 octobre 2026), Shot Generator qui ne répond plus (13 octobre), bibliothèques de poses vides (30 septembre). Deux signalements de sécurité ont aussi été ouverts le 5 octobre 2026, dont un qui parle d'un serveur sans authentification. Je ne les ai pas reproduits. Vu l'activité du dépôt, je ne compterais pas sur un correctif.",
    },

    { type: "h2", id: "avant-de-partir", text: "Ce que tu perds en partant, et ce qu'il faut sauver avant" },
    {
      type: "p",
      text: "Storyboarder fait une chose très bien : il te laisse griffonner des bonhommes en quelques secondes, case après case, avec le dialogue, l'action et la durée sous chaque dessin. D'après [sa page produit](https://wonderunit.com/storyboarder/), il exporte vers Premiere, Final Cut et Avid, en PDF planche contact et en GIF animé, et il lit les scénarios au format Fountain. Aucun outil de cette liste ne fait tout ça à la fois.",
    },
    {
      type: "p",
      text: "Tant que le logiciel s'ouvre chez toi, sauve ce qui peut l'être :",
    },
    {
      type: "ol",
      items: [
        "Exporte chaque projet en PDF planche contact. Tous les outils de la liste savent au moins lire une image tirée de ce PDF.",
        "Exporte les cases en images, une par plan. Tu pourras les réimporter dans Boords ou Celtx, ou les donner comme référence de composition à un générateur.",
        "Garde le fichier .fountain de ton scénario à part. Celtx et ScreenWeaver l'importent.",
        "Si tu montes déjà, sors l'export Premiere ou Final Cut maintenant, avec les durées que tu avais réglées.",
        "Copie le dossier complet du projet sur un disque externe. Les fichiers restent lisibles tant qu'une version de Storyboarder tourne quelque part.",
      ],
    },

    { type: "h2", id: "krita", text: "Tu dessines toi-même : passe sur Krita" },
    {
      type: "p",
      text: "Krita est un logiciel de peinture gratuit et open source, sur Windows, macOS et Linux, et la version 5.3.4.1 est sortie le 7 octobre 2026. Son panneau Storyboard (« Storyboard Docker ») te laisse créer des scènes, les réordonner par glisser-déposer, régler la durée en secondes ou en images, puis exporter le tout en PDF ou en SVG, comme l'explique [la documentation officielle](https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html).",
    },
    {
      type: "screenshot",
      src: `${IMG}-krita-storyboard.webp`,
      alt: "Documentation officielle du Storyboard Docker de Krita : panneau avec quatre scènes dessinées au crayon, leur durée en images, et texte précisant l'export en SVG et en PDF",
      caption: "Le panneau Storyboard de Krita : des scènes, une durée par scène, un export PDF ou SVG.",
      source: "https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "La différence avec Storyboarder se sent dès la première heure. Krita est un vrai logiciel de peinture : pinceaux, calques et tablette y sont bien mieux servis. Par contre, il n'y a pas de champs dialogue ou action tout prêts, la documentation propose de créer tes propres champs de commentaire. Le storyboard vit aussi dans le système d'animation de Krita, ce qui demande un temps d'adaptation si tu n'as jamais animé dedans. Et pas d'export Premiere, pas de lecture Fountain.",
    },
    {
      type: "p",
      text: "Mon avis : pour un étudiant ou un storyboarder qui dessine, c'est le meilleur remplaçant gratuit. Tu dessineras un peu moins vite qu'avec les bonhommes de Storyboarder, mais sur un outil que ses développeurs mettent encore à jour.",
    },

    { type: "h2", id: "ia", text: "Tu veux que l'IA dessine les cases" },
    {
      type: "p",
      text: "Avec ces outils, ton travail devient la description et la correction des cases. Trois outils couvrent trois besoins différents. Pour une vue plus large, avec LTX Studio et Higgsfield Popcorn, lis [mon classement des outils de storyboard IA](/blog/meilleurs-outils-storyboard-ia).",
    },
    { type: "h3", id: "boords", text: "Boords, pour faire valider un client" },
    {
      type: "p",
      text: "Boords est un logiciel web de préproduction que son éditeur développe depuis 2015 : scripts, storyboards, animatics, et surtout une revue client par lien avec validation. Pour un ancien de Storyboarder, une bonne nouvelle : tu peux encore dessiner. Depuis mai 2026, [Canvas](https://boords.com/blog/introducing-canvas-and-refine) transforme un croquis tracé à la brosse dans une case en image, et Refine retouche une zone précise de l'image.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-tarifs.webp`,
      alt: "Page Pricing de Boords en mensuel : Solo 39 dollars par mois ou 26 en annuel avec 250 images IA, Pro 75 dollars pour 5 utilisateurs, Team 125 dollars, Agency 250 dollars",
      caption: "La grille Boords : Solo à 39 $ par mois, 26 $ par mois en annuel.",
      source: "https://boords.com/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "L'offre gratuite donne 5 storyboards actifs, 3 scripts et 8 crédits d'image d'essai, une seule fois. Solo coûte 39 $ par mois, ou 26 $ par mois en annuel, avec 250 images IA par mois. Pro passe à 75 $ (50 $ en annuel) pour 5 utilisateurs et 1 000 images.",
    },
    {
      type: "p",
      text: "Une limite est écrite noir sur blanc dans [la documentation](https://boords.com/docs/script-to-storyboard) : convertir un script crée de 1 à 250 cases vides, sans images, et ce storyboard ne suit plus le script ensuite. Chaque nouvelle conversion crée un nouveau storyboard.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-script-storyboard.webp`,
      alt: "Documentation Boords, section One-way, one-shot : le storyboard ne reste pas synchronisé avec le script et chaque conversion crée un nouveau storyboard",
      caption: "Boords le dit lui-même : le storyboard est une photo du script au moment de la conversion.",
      source: "https://boords.com/docs/script-to-storyboard",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    { type: "h3", id: "storyboardhero", text: "StoryboardHero, pour le petit budget" },
    {
      type: "p",
      text: "StoryboardHero part d'un brief ou d'un scénario et propose un storyboard illustré par IA. À 19 $ par mois pour un siège, c'est l'entrée la moins chère des outils IA de cette liste, avec 100 images premium par mois et des images standard sans limite. Starter monte à 59 $ pour 5 sièges. La page tarifs annonce un essai de 7 jours sans carte bancaire et l'usage commercial sur toutes les offres.",
    },
    {
      type: "screenshot",
      src: `${IMG}-storyboardhero-tarifs.webp`,
      alt: "Page Pricing de StoryboardHero : Solo 19 dollars par mois pour 1 siège, Starter 59 dollars pour 5 sièges, Advanced 199 dollars pour 10 sièges, Enterprise sur devis",
      caption: "StoryboardHero affiche quatre offres, sans tarif annuel.",
      source: "https://storyboardhero.ai/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Deux réserves quand même. Le site ne nomme aucun modèle d'image, tu ne sais donc pas ce qui génère tes cases. Et l'option la plus proche de l'esprit Storyboarder se paie à part : des dessins faits à la main par l'équipe, 10 crédits pour 99 $.",
    },
    { type: "h3", id: "screenweaver", text: "ScreenWeaver, si tout part du scénario" },
    {
      type: "p",
      text: "Je suis co-fondateur de ScreenWeaver, lis donc ce passage avec ce filtre. ScreenWeaver va du scénario au storyboard puis à la vidéo dans le même projet. L'offre Screenwriter est gratuite sans limite de durée : éditeur de scénario, séquencier, moodboards, import et export. Le découpage, le storyboard généré et la production vidéo commencent avec l'offre Auteur, à 39,99 $ par mois pour 6 000 crédits.",
    },
    {
      type: "screenshot",
      src: `${IMG}-screenweaver-offres.webp`,
      alt: "Section tarifs du site ScreenWeaver en français : Screenwriter gratuit pour toujours, Auteur à 39,99 dollars par mois avec 6 000 crédits, Studio à 149,99 dollars avec 25 000 crédits",
      caption: "Les trois offres ScreenWeaver : l'écriture reste gratuite, le storyboard généré commence à Auteur.",
      source: "https://www.screenweaver.ai/fr#pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pour un ancien de Storyboarder, ton scénario Fountain s'importe directement. L'assistant peut aussi importer un PDF de planches dessinées, une image par page, puis découper les cases : la détection automatique coûte environ un crédit par page, l'import seul ne coûte rien. ScreenWeaver ne te donne pas d'outils de dessin à la main. Si tu aimes dessiner tes cases, reste sur Krita et garde tes planches comme références.",
    },

    { type: "h2", id: "celtx", text: "Tu écris aussi le scénario : Celtx" },
    {
      type: "p",
      text: "Celtx est un studio en ligne qui va de l'écriture à la préparation de tournage. Son storyboard fonctionne avec des images que tu téléverses, rangées en séquences créées à partir des en-têtes de scène du script (« Sync from Script »). Je n'ai trouvé aucune génération d'image documentée chez Celtx.",
    },
    {
      type: "screenshot",
      src: `${IMG}-celtx-storyboard.webp`,
      alt: "Page Storyboard for filmmakers de Celtx : liste des séquences issues des scènes du script avec le bouton Sync from Script, et panneaux dessinés annotés ECU et MWS",
      caption: "Chez Celtx, les séquences viennent du script, les images viennent de toi.",
      source: "https://www.celtx.com/product/story-development/storyboard/",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Attention au prix : l'offre gratuite (1 projet) n'inclut pas le storyboard. Il est en option payante sur Writer, et inclus à partir de Writer Pro, affiché à 18,74 € par mois en annuel depuis la France sur [la page tarifs](https://www.celtx.com/pricing/). Pour un dessinateur, la combinaison qui a du sens : tu dessines dans Krita et tu ranges tes cases dans le découpage de Celtx.",
    },

    { type: "h2", id: "katalist", text: "Et Katalist ?" },
    {
      type: "p",
      text: "On le croise souvent dans les listes d'alternatives. En octobre 2026, sa page d'accueil vise la publicité à la performance et les déclinaisons produit, plus le storyboard de film. Je ne le conseille plus pour remplacer Storyboarder.",
    },

    { type: "h2", id: "migrer", text: "Migrer un projet Storyboarder en une soirée" },
    {
      type: "p",
      text: "Prends un cas type : un court métrage de 6 minutes, une quarantaine de cases dessinées dans Storyboarder, le scénario en Fountain. Dans l'ordre, je ferais ça :",
    },
    {
      type: "ol",
      items: [
        "Ouvre le projet et exporte la planche contact en PDF, puis chaque case en image.",
        "Choisis ta destination : tu dessines encore, Krita ; tu veux que l'IA reprenne tes cases, Boords ou ScreenWeaver ; tu veux juste ranger tes images face au script, Celtx.",
        "Dans Krita, recrée une scène par plan et importe ta case comme calque de départ. Note durée et dialogue dans les champs de commentaire que tu as créés.",
        "Dans un outil IA, importe le scénario, puis donne tes anciennes cases comme références. Ton dessin fixe le cadre, le prompt fixe le contenu.",
        "Avant de supprimer l'ancien projet, compare les deux versions plan par plan. Ce sont souvent les durées qui se perdent en route.",
      ],
    },
    {
      type: "p",
      text: "Pour le découpage lui-même, [ma méthode pour créer un storyboard avec l'IA](/blog/creer-storyboard-ia) vaut quel que soit l'outil. Et si tu montes ensuite tes cases en images fixes avec le son, [la méthode de l'animatique IA](/blog/animatique-ia-methode) prend le relais.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "fr",
      title: "Importe ton scénario Fountain et écris gratuitement",
      text: "Screenwriter est gratuit. Le storyboard généré et la vidéo arrivent avec l'offre Auteur, quand ton projet est prêt.",
    },

    {
      type: "methodology",
      date: "2026-10-19",
      text: [
        "J'ai relu le 19 octobre 2026 l'état du dépôt GitHub de Storyboarder (versions, commits, tickets) et les pages officielles de Krita, Boords, StoryboardHero, Celtx et ScreenWeaver, depuis la France, sans connexion à un compte. Les prix sont ceux affichés ce jour-là, dans la devise affichée.",
        "Je suis co-fondateur de ScreenWeaver. Pour cet outil, je ne cite que ses offres publiques et les fonctions documentées.",
      ],
      teste: [
        "La lecture des pages tarifs et des documentations citées",
        "Les données publiques du dépôt wonderunit/storyboarder via GitHub",
      ],
      nonTeste: [
        "L'installation de Storyboarder ou de Krita sur une machine pour cet article",
        "Les deux signalements de sécurité ouverts sur GitHub",
        "Aucune génération d'images lancée dans Boords, StoryboardHero ou ScreenWeaver",
        "StoryB, la réécriture pour Mac citée dans un ticket",
      ],
      sources: [
        { label: "Storyboarder, Releases GitHub", href: "https://github.com/wonderunit/storyboarder/releases" },
        { label: "Storyboarder, ticket 2665", href: "https://github.com/wonderunit/storyboarder/issues/2665" },
        { label: "Krita, Storyboard Docker", href: "https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html" },
        { label: "Boords, Turning a script into a storyboard", href: "https://boords.com/docs/script-to-storyboard" },
        { label: "StoryboardHero Pricing", href: "https://storyboardhero.ai/pricing" },
        { label: "Celtx Pricing", href: "https://www.celtx.com/pricing/" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Storyboarder est-il abandonné ?" },
    {
      type: "p",
      text: "Wonder Unit n'a rien annoncé et le logiciel se télécharge toujours. Mais la dernière version stable, la 2.1.0, date du 3 septembre 2020, le dernier commit du 30 juin 2022, et les tickets de 2026 qui demandent si le projet est maintenu n'ont reçu aucune réponse de l'équipe.",
    },
    { type: "h3", id: "faq-2", text: "Quelle est la meilleure alternative gratuite à Storyboarder ?" },
    {
      type: "p",
      text: "Pour quelqu'un qui dessine, Krita : gratuit, open source, mis à jour (5.3.4.1 le 7 octobre 2026), avec un panneau Storyboard qui exporte en PDF ou en SVG. Il faut créer soi-même les champs dialogue et action.",
    },
    { type: "h3", id: "faq-3", text: "Existe-t-il une alternative à Storyboarder avec de l'IA ?" },
    {
      type: "p",
      text: "Oui, mais payante dès que tu génères en volume. Boords offre 8 crédits d'image d'essai puis 39 $ par mois (26 $ en annuel), StoryboardHero démarre à 19 $ par mois, ScreenWeaver génère le storyboard à partir de l'offre Auteur à 39,99 $ par mois.",
    },
    { type: "h3", id: "faq-4", text: "Peut-on récupérer ses projets Storyboarder dans un autre logiciel ?" },
    {
      type: "p",
      text: "Pas le fichier source directement dans les outils cités ici. Exporte la planche contact en PDF et les cases en images, puis réimporte-les comme références ou comme images de cases. Le scénario au format Fountain s'importe dans Celtx et ScreenWeaver.",
    },
    { type: "h3", id: "faq-5", text: "Celtx remplace-t-il Storyboarder ?" },
    {
      type: "p",
      text: "Pour ranger des images face au scénario, oui : ses séquences se créent à partir des en-têtes de scène. Mais Celtx ne dessine pas et ne génère pas d'images, et le storyboard n'est pas dans l'offre gratuite. Il est inclus à partir de Writer Pro, à 18,74 € par mois en annuel.",
    },
    { type: "h3", id: "faq-6", text: "Storyboarder fonctionne-t-il sur les Mac Apple Silicon ?" },
    {
      type: "p",
      text: "La 3.0.0 annonçait le support d'Apple Silicon via Rosetta 2, mais elle est restée en pré-version depuis février 2021, et des utilisateurs signalent sur GitHub en 2026 que ces versions ne fonctionnent pas chez eux. Si tu es sur un Mac récent, prépare une alternative.",
    },
  ],
};
