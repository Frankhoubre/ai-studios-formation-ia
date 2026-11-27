import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-23";
const IMG = "/images/articles/alternatives-boords";

export const alternativesBoords: Article = {
  title: "Alternative à Boords : quel outil de storyboard IA choisir ?",
  slug: "alternatives-boords",
  description:
    "Boords ne génère pas de vidéo et son storyboard ne suit pas le script. LTX Studio, ScreenWeaver, StoryboardHero ou Krita : l'alternative selon ton besoin.",
  excerpt:
    "Boords reste le meilleur outil pour faire valider un client. Tu veux aller jusqu'à la vidéo : LTX Studio ou ScreenWeaver. Tu veux payer moins : StoryboardHero. Tu dessines : Krita, gratuit.",
  category: "workflow-creatif",
  tags: ["boords", "storyboard ia", "alternatives", "ltx studio", "storyboardhero", "préproduction"],
  date: "2026-10-23",
  updatedAt: "2026-10-23",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/alternatives-boords.webp",
  imageAlt:
    "Dans le loft d'une petite agence de motion design à l'heure bleue, une directrice artistique aux cheveux gris coupés au carré et un jeune producteur en pull beige regardent une case de storyboard au crayon projetée sur un mur de briques blanches, pluie sur les grandes fenêtres",
  keywords: [
    "alternative boords",
    "boords avis",
    "boords prix",
    "alternative boords gratuite",
    "logiciel storyboard ia",
  ],
  relatedSlugs: ["meilleurs-outils-storyboard-ia", "alternatives-storyboarder", "storyboard-ia-gratuit-tutoriel"],
  faq: [
    {
      question: "Quelle est la meilleure alternative à Boords ?",
      answer:
        "Ça dépend de ce qui te manque. Pour aller du script à la vidéo générée : LTX Studio ou ScreenWeaver (j'en suis co-fondateur). Pour payer moins cher : StoryboardHero à 19 $ par mois. Pour dessiner tes cases gratuitement : Krita. Si ton besoin principal est la validation par un client, garde Boords.",
    },
    {
      question: "Combien coûte Boords ?",
      answer:
        "Le 23 octobre 2026, Solo coûte 39 $ par mois (26 $ par mois en annuel) avec 250 images IA, Pro 75 $ pour 5 utilisateurs, Team 125 $ et Agency 250 $. L'offre gratuite, sans carte bancaire, donne 5 storyboards actifs, 3 scripts actifs et 8 crédits d'image d'essai, une seule fois.",
    },
    {
      question: "Boords peut-il générer des vidéos ?",
      answer:
        "Non. Boords génère des images de cases, et son animatique les monte sur une timeline avec du son, exportable en MP4 ou vers Premiere, Resolve et After Effects. Aucun modèle de génération vidéo n'est documenté sur ses pages.",
    },
    {
      question: "Le storyboard Boords reste-t-il synchronisé avec le script ?",
      answer:
        "Non, et la documentation de Boords le dit elle-même : la conversion est une photo du script au moment où tu la lances. Si tu modifies le script, rien ne bouge dans le storyboard, et chaque nouvelle conversion crée un nouveau storyboard.",
    },
    {
      question: "Existe-t-il une alternative gratuite à Boords ?",
      answer:
        "Sans IA, oui : Krita est gratuit et open source, avec un panneau Storyboard qui exporte en PDF et en SVG. Avec IA, rien d'illimité : LTX Studio donne 800 crédits une seule fois en usage personnel, et ses storyboards IA commencent à l'offre Standard.",
    },
    {
      question: "Boords vaut-il encore le coup en 2026 ?",
      answer:
        "Pour une agence qui fait valider des storyboards et des animatiques par ses clients, oui : revue sans compte sur toutes les offres, historique des validations, exports vers le montage. Pour un réalisateur qui veut produire son film avec l'IA, il s'arrête trop tôt.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Boords est très bon pour une chose : faire valider un storyboard par un client. Si tu cherches une alternative, c'est sans doute qu'il te manque autre chose. Tu veux aller jusqu'à la vidéo générée : **LTX Studio** ou **ScreenWeaver** (j'en suis co-fondateur, je le dis tout de suite). Tu trouves 39 $ par mois trop cher pour ton usage : **StoryboardHero** démarre à 19 $. Tu dessines tes cases toi-même : **Krita**, gratuit. Et si la validation client est ton vrai besoin, reste sur Boords.",
    },

    { type: "h2", id: "verdict", text: "Mon verdict en deux minutes" },
    {
      type: "verdict",
      title: "Faut-il quitter Boords ?",
      pourQui: "Les utilisateurs de Boords (ou ceux qui hésitent à s'abonner) qui se demandent si un autre outil couvre mieux leur besoin.",
      forts: [
        "LTX Studio et ScreenWeaver vont du script jusqu'à la vidéo générée",
        "StoryboardHero coûte deux fois moins cher en entrée, images standard illimitées",
        "Krita est gratuit pour qui dessine encore ses cases",
      ],
      faibles: [
        "Aucune alternative de cette liste n'égale la revue client sans compte de Boords",
        "Les outils qui génèrent de la vidéo coûtent vite plus cher à l'usage",
        "Changer d'outil en cours de projet fait perdre les commentaires et l'historique",
      ],
      verdict:
        "Quitte Boords si ton storyboard doit finir en vidéo générée. Garde-le si ton métier consiste à faire signer des clients avant le tournage.",
    },
    {
      type: "comparison",
      caption: "Boords et ses alternatives selon ce que tu veux faire de ton storyboard",
      headers: ["Outil", "Pour qui", "Prix d'entrée", "Vidéo générée", "Ce qui coince"],
      rows: [
        ["Boords", "Agence qui fait valider", "Gratuit limité, puis 39 $/mois (26 $ en annuel)", "Non, animatique en images fixes", "Storyboard non synchronisé avec le script"],
        ["LTX Studio", "Du script à la vidéo", "Gratuit 800 crédits une fois, storyboards IA dès Standard à 28 €/mois en annuel", "Oui", "Free et Lite en usage personnel seulement"],
        ["ScreenWeaver", "Scénariste ou réalisateur", "Screenwriter gratuit, Auteur 39,99 $/mois", "Oui", "Pas d'outil de dessin, collaboration réservée à Studio"],
        ["StoryboardHero", "Petit budget", "19 $/mois, essai de 7 jours", "Non documentée, export MP4", "Aucun modèle d'image nommé"],
        ["Krita", "Tu dessines toi-même", "Gratuit, open source", "Non", "Aucune IA, champs texte à créer"],
      ],
      source: [
        { label: "Boords Pricing", href: "https://boords.com/pricing" },
        { label: "LTX Studio Pricing", href: "https://ltx.io/studio/pricing" },
        { label: "ScreenWeaver, tarifs", href: "https://www.screenweaver.ai/fr#pricing" },
        { label: "StoryboardHero Pricing", href: "https://storyboardhero.ai/pricing" },
        { label: "Krita, Storyboard Docker", href: "https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html" },
      ],
      verifieLe: "2026-10-23",
      note: "Prix affichés depuis la France, dans la devise de chaque page. LTX Studio affiche ses prix en euros.",
    },

    { type: "h2", id: "pourquoi-partir", text: "Pourquoi chercher une alternative à Boords" },
    {
      type: "p",
      text: "Je n'ai trouvé aucun fil Reddit ni forum français qui se plaint de Boords, et les grands sites d'avis bloquent la lecture automatique. Les trois limites qui suivent viennent donc de la documentation de Boords elle-même, relue le 23 octobre 2026. Bon point pour Boords, au passage : il écrit lui-même ce qu'il ne fait pas.",
    },
    { type: "h3", id: "script", text: "Le storyboard ne suit pas ton script" },
    {
      type: "p",
      text: "Boords sait convertir un script en storyboard : de 1 à 250 cases, avec l'action, le dialogue et le son déjà remplis, mais sans images. Le problème arrive à la réécriture. [La documentation](https://boords.com/docs/script-to-storyboard) l'écrit clairement : le storyboard est une photo du script au moment de la conversion, et ce que tu modifies ensuite d'un côté ne passe pas de l'autre.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-script-storyboard.webp`,
      alt: "Documentation Boords, section One-way, one-shot : le storyboard ne reste pas synchronisé avec le script, et chaque conversion crée un nouveau storyboard",
      caption: "Une conversion, une photo du script. La scène réécrite mardi n'arrive pas dans le storyboard de lundi.",
      source: "https://boords.com/docs/script-to-storyboard",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Pour un spot de 30 secondes validé du premier coup, aucun souci. Sur un court métrage où le script bouge toutes les semaines, tu vas reconvertir, recréer un storyboard neuf à chaque fois, et reporter à la main les images que tu avais déjà validées.",
    },
    { type: "h3", id: "video", text: "Boords s'arrête à l'animatique" },
    {
      type: "p",
      text: "L'animatique de Boords monte tes cases sur une timeline, avec ta musique ou ta voix off et une durée par case. Tu peux l'exporter en MP4, ou l'envoyer à ton monteur sous forme de timeline Premiere ou Resolve, ou de projet After Effects. C'est propre et c'est utile. Mais ça reste des images fixes : Boords ne documente aucun modèle de génération vidéo.",
    },
    {
      type: "screenshot",
      src: `${IMG}-boords-animatique.webp`,
      alt: "Documentation Boords, section Sharing your animatic : lien de partage, téléchargement en MP4, timeline Premiere ou Resolve et projet After Effects avec les durées validées",
      caption: "Les sorties de l'animatique Boords : MP4 et timelines de montage. Aucune vidéo générée.",
      source: "https://boords.com/docs/animatics",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Si ton projet finit en vidéo générée, il te faudra un deuxième outil pour chaque plan, avec tes personnages et tes références à refaire ailleurs. Pour la différence entre les deux étapes, lis [ma méthode de l'animatique IA](/blog/animatique-ia-methode).",
    },
    { type: "h3", id: "prix", text: "Le gratuit est court, le payant se compte par siège" },
    {
      type: "screenshot",
      src: `${IMG}-boords-tarifs.webp`,
      alt: "Page Pricing de Boords en mensuel : Solo 39 dollars ou 26 en annuel avec 250 images IA, Pro 75 dollars jusqu'à 5 utilisateurs, Team 125 dollars, Agency 250 dollars, et ligne Free plan avec 5 storyboards actifs, 3 scripts et 8 crédits image d'essai",
      caption: "La grille Boords : 8 crédits d'image en gratuit, une seule fois, puis 39 $ par mois en Solo.",
      source: "https://boords.com/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "L'offre gratuite donne 5 storyboards actifs, 3 scripts actifs et 8 crédits d'image d'essai, sans carte bancaire. Huit images, c'est un storyboard de spot très court, pas un court métrage. Ensuite, Solo coûte 39 $ par mois (26 $ en annuel) pour 250 images IA, Pro 75 $ pour 5 utilisateurs et 1 000 images. La FAQ de la page tarifs parle d'un remboursement possible sous 30 jours.",
    },

    { type: "h2", id: "rester", text: "Avant de partir : ce que Boords fait mieux que les autres" },
    {
      type: "p",
      text: "Sur la même page tarifs, Boords affiche une phrase qui résume son vrai métier : tes clients relisent et valident sans créer de compte, en nombre illimité, sur toutes les offres. Ajoute l'historique de qui a validé quoi, les commentaires posés sur l'image et les exports vers le montage. Aucune alternative de cette liste ne documente un circuit de validation client aussi complet.",
    },
    {
      type: "p",
      text: "Deux fonctions récentes enlèvent aussi des arguments à ses concurrents. [Le serveur MCP de Boords](https://boords.com/mcp) permet de piloter tes storyboards depuis Claude ou ChatGPT, et il est inclus sur toutes les offres, gratuite comprise. Boords Agent, encore en bêta, importe un script, génère et réordonne les cases. Si tu es une agence qui fait signer des marques, ne change pas d'outil pour gagner la vidéo : ajoute un générateur à côté.",
    },

    { type: "h2", id: "video-ia", text: "Tu veux aller du script jusqu'à la vidéo" },
    {
      type: "p",
      text: "Si c'est la vidéo qui te manque, deux outils enchaînent script, storyboard et vidéo dans le même projet. Pour un tour plus large, avec Higgsfield Popcorn et Katalist, j'ai fait [un classement des outils de storyboard IA](/blog/meilleurs-outils-storyboard-ia).",
    },
    { type: "h3", id: "ltx-studio", text: "LTX Studio" },
    {
      type: "p",
      text: "LTX Studio découpe ton script ou ton brief en scènes et en plans, extrait les personnages, objets et lieux sous forme d'« Elements » réutilisables, puis génère les cases avec un modèle FLUX ou Nano Banana. Le générateur de storyboard a été reconstruit en janvier 2026, d'après [l'annonce de LTX](https://ltx.io/blog/ltx-storyboard-generator-update). Les plans peuvent ensuite devenir des vidéos, avec les modèles LTX et, selon l'offre, Kling, Seedance 2.0 ou Veo 3.1.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ltx-studio-tarifs.webp`,
      alt: "Page Pricing de LTX Studio en annuel : Free 0 euro avec 800 crédits une fois et licence personnelle, Lite 12 euros, Standard 28 euros avec AI Storyboards, Elements et licence commerciale, Pro 100 euros avec Veo 3.1",
      caption: "Chez LTX Studio, les storyboards IA et la licence commerciale arrivent ensemble, à l'offre Standard.",
      source: "https://ltx.io/studio/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Regarde bien la grille avant de t'inscrire. L'offre gratuite donne 800 crédits une seule fois et des storyboards vierges, en usage personnel. La ligne « AI Storyboards » et la licence commerciale n'apparaissent qu'à l'offre Standard : 28 € par mois en annuel, 35 € en mensuel, pour 28 000 crédits. Veo 3.1 demande l'offre Pro, à 100 € par mois en annuel. LTX ne dit nulle part que son storyboard suit les réécritures du script : je ne peux pas te l'affirmer.",
    },
    { type: "h3", id: "screenweaver", text: "ScreenWeaver" },
    {
      type: "p",
      text: "Je suis co-fondateur de ScreenWeaver, prends ce passage avec ce filtre. Un projet ScreenWeaver a trois onglets, Script, Storyboard et Production : tu écris ou importes ton scénario (Final Draft, Fountain, WriterDuet), le découpage et le storyboard sont générés depuis ce scénario, puis chaque plan passe en vidéo sur un canvas de nodes, dans le même projet. Côté vidéo, Seedance 2.5 et 2.0, Veo 3.1, Kling 3.0, MiniMax H3, Grok Imagine Video 1.5 et Wan 3.0 sont intégrés.",
    },
    {
      type: "screenshot",
      src: `${IMG}-screenweaver-offres.webp`,
      alt: "Section tarifs de ScreenWeaver en français : Screenwriter gratuit pour toujours, Auteur à 39,99 dollars par mois avec 6 000 crédits, Studio à 149,99 dollars par mois avec 25 000 crédits",
      caption: "L'écriture est gratuite. Le storyboard généré et la vidéo commencent à l'offre Auteur.",
      source: "https://www.screenweaver.ai/fr#pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Screenwriter reste gratuit sans limite de durée, mais il ne fait que l'écriture. Le storyboard généré et la production vidéo commencent à l'offre Auteur, 39,99 $ par mois pour 6 000 crédits, à peu près le prix du Solo de Boords en mensuel. Face à Boords, il lui manque trois choses : un outil de dessin à la main, la collaboration en temps réel hors de l'offre Studio (149,99 $), et un circuit documenté de validation client sans compte. Pour une agence qui vit de la validation, Boords garde l'avantage.",
    },

    { type: "h2", id: "budget", text: "Ton budget est serré : StoryboardHero" },
    {
      type: "p",
      text: "StoryboardHero part d'un brief ou d'un scénario et sort un storyboard illustré par IA. À 19 $ par mois pour un siège, avec des images standard illimitées et 100 images premium par mois, c'est deux fois moins cher que le Solo de Boords en mensuel. La page tarifs affiche aussi l'usage commercial et l'export MP4 sur toutes les offres, et un essai de 7 jours sans carte bancaire.",
    },
    {
      type: "screenshot",
      src: `${IMG}-storyboardhero-tarifs.webp`,
      alt: "Page Pricing de StoryboardHero : Solo 19 dollars par mois pour 1 siège, Starter 59 dollars pour 5 sièges, Advanced 199 dollars pour 10 sièges, Enterprise sur devis, avec images IA illimitées, commentaires invités et export MP4",
      caption: "StoryboardHero affiche quatre offres, toutes au mois, sans tarif annuel.",
      source: "https://storyboardhero.ai/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Deux réserves. Le site ne nomme aucun modèle d'image, tu ne sais pas ce qui dessine tes cases. Et je n'ai trouvé aucun modèle vidéo documenté : l'export MP4 ressemble à un montage de cases, comme l'animatique de Boords. La garantie de remboursement de 7 jours ne vaut que pour un premier abonnement Solo. Pour un étudiant ou un freelance qui prépare des vidéos d'entreprise, c'est un bon remplaçant. Pour un film en vidéo IA, il te faudra un autre outil après.",
    },

    { type: "h2", id: "dessin", text: "Tu dessines toi-même : Krita, gratuit" },
    {
      type: "p",
      text: "Si tu utilisais surtout Boords pour ranger des cases dessinées à la main, tu paies pour des crédits IA dont tu n'as pas besoin. Krita est un logiciel de peinture gratuit et open source. Son panneau Storyboard crée des scènes, les réordonne au glisser-déposer, gère une durée par scène et exporte en PDF ou en SVG, d'après [sa documentation](https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html).",
    },
    {
      type: "screenshot",
      src: `${IMG}-krita-storyboard.webp`,
      alt: "Documentation officielle du Storyboard Docker de Krita : scènes dessinées au crayon avec leur durée, texte sur l'ajout et le réordonnancement des scènes, menu Export vers PDF et SVG",
      caption: "Le Storyboard Docker de Krita : des scènes, une durée, un export PDF ou SVG. Aucune IA.",
      source: "https://docs.krita.org/en/reference_manual/dockers/storyboard_docker.html",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Tu perds la revue client et l'animatique avec son. Pour le dialogue et l'action, la documentation propose de créer tes propres champs de commentaire. Et si tu veux de l'IA sans payer, [le tutoriel du storyboard IA gratuit](/blog/storyboard-ia-gratuit-tutoriel) montre comment générer des cases avec Gemini puis les monter dans Krita.",
    },

    { type: "h2", id: "ecartes", text: "Les noms que je n'ai pas retenus" },
    {
      type: "p",
      text: "**Storyboarder** revient dans toutes les listes d'alternatives gratuites, mais sa dernière version stable date de septembre 2020 : j'ai détaillé pourquoi dans [l'article sur les alternatives à Storyboarder](/blog/alternatives-storyboarder). **Katalist** vise désormais la publicité à la performance plus que le storyboard de film. **StudioBinder** est souvent cité aussi, mais sa page de prix n'était pas lisible sans connexion le 23 octobre 2026 : je ne te donne pas un tarif que je n'ai pas vu.",
    },

    { type: "h2", id: "migrer", text: "Quitter Boords sans perdre ton travail" },
    {
      type: "p",
      text: "Prends un cas type : une agence qui a une vingtaine de storyboards actifs dans Boords, dont deux en cours de validation. Dans l'ordre, je ferais ça :",
    },
    {
      type: "ol",
      items: [
        "Termine les validations en cours dans Boords. Un client qui a commenté là-bas ne refera pas ses remarques ailleurs.",
        "Exporte chaque storyboard en PDF et les cases en images. Les commentaires et l'historique des validations ne te suivront pas, garde ces PDF comme trace.",
        "Exporte les animatiques validées en MP4, ou en timeline Premiere ou Resolve si ton monteur s'en sert.",
        "Récupère tes scripts dans un format standard. LTX Studio accepte un scénario ou un brief, ScreenWeaver importe Final Draft et Fountain.",
        "Teste l'alternative sur un seul projet neuf avant de résilier. Si tu étais en annuel, attends la fin de la période payée.",
      ],
    },
    {
      type: "p",
      text: "Dans le nouvel outil, donne tes anciennes cases comme références de cadrage : ton dessin fixe la composition, le prompt fixe le contenu. Pour garder le même visage d'un plan à l'autre, [la méthode du personnage cohérent](/blog/personnage-coherent-ia) vaut quel que soit l'outil.",
    },
    {
      type: "cta",
      variant: "screenweaver",
      destination: "fr",
      title: "Importe ton scénario et écris gratuitement",
      text: "Screenwriter est gratuit. Le storyboard généré depuis ton scénario et la vidéo arrivent avec l'offre Auteur, quand ton projet est prêt.",
    },

    {
      type: "methodology",
      date: "2026-10-23",
      text: [
        "J'ai relu le 23 octobre 2026, depuis la France et sans connexion à un compte, les pages tarifs et la documentation de Boords, LTX Studio, StoryboardHero, ScreenWeaver et Krita. Les prix sont ceux affichés ce jour-là, dans la devise affichée. J'ai aussi regardé ce que montrent les premiers résultats de recherche sur « alternative Boords », en anglais comme en français.",
        "Je suis co-fondateur de ScreenWeaver. Pour cet outil, je ne cite que ses offres publiques et les fonctions en production.",
      ],
      teste: [
        "La lecture des pages tarifs et des documentations citées, captures faites le même jour",
      ],
      nonTeste: [
        "Aucune génération d'image ou de vidéo lancée dans Boords, LTX Studio, StoryboardHero ou ScreenWeaver pour cet article",
        "Boords Agent, en bêta et activé par un administrateur",
        "Les tarifs de StudioBinder, non lisibles sans connexion",
      ],
      sources: [
        { label: "Boords Pricing", href: "https://boords.com/pricing" },
        { label: "Boords, Turning a script into a storyboard", href: "https://boords.com/docs/script-to-storyboard" },
        { label: "Boords, Animatics", href: "https://boords.com/docs/animatics" },
        { label: "Boords MCP", href: "https://boords.com/mcp" },
        { label: "LTX Studio Pricing", href: "https://ltx.io/studio/pricing" },
        { label: "LTX, Storyboard Generator Update", href: "https://ltx.io/blog/ltx-storyboard-generator-update" },
        { label: "StoryboardHero Pricing", href: "https://storyboardhero.ai/pricing" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Quelle est la meilleure alternative à Boords ?" },
    {
      type: "p",
      text: "Ça dépend de ce qui te manque. Pour aller du script à la vidéo générée : LTX Studio ou ScreenWeaver (j'en suis co-fondateur). Pour payer moins cher : StoryboardHero à 19 $ par mois. Pour dessiner tes cases gratuitement : Krita. Si ton besoin principal est la validation par un client, garde Boords.",
    },
    { type: "h3", id: "faq-2", text: "Combien coûte Boords ?" },
    {
      type: "p",
      text: "Le 23 octobre 2026, Solo coûte 39 $ par mois (26 $ par mois en annuel) avec 250 images IA, Pro 75 $ pour 5 utilisateurs, Team 125 $ et Agency 250 $. L'offre gratuite, sans carte bancaire, donne 5 storyboards actifs, 3 scripts actifs et 8 crédits d'image d'essai, une seule fois.",
    },
    { type: "h3", id: "faq-3", text: "Boords peut-il générer des vidéos ?" },
    {
      type: "p",
      text: "Non. Boords génère des images de cases, et son animatique les monte sur une timeline avec du son, exportable en MP4 ou vers Premiere, Resolve et After Effects. Aucun modèle de génération vidéo n'est documenté sur ses pages.",
    },
    { type: "h3", id: "faq-4", text: "Le storyboard Boords reste-t-il synchronisé avec le script ?" },
    {
      type: "p",
      text: "Non, et la documentation de Boords le dit elle-même : la conversion est une photo du script au moment où tu la lances. Si tu modifies le script, rien ne bouge dans le storyboard, et chaque nouvelle conversion crée un nouveau storyboard.",
    },
    { type: "h3", id: "faq-5", text: "Existe-t-il une alternative gratuite à Boords ?" },
    {
      type: "p",
      text: "Sans IA, oui : Krita est gratuit et open source, avec un panneau Storyboard qui exporte en PDF et en SVG. Avec IA, rien d'illimité : LTX Studio donne 800 crédits une seule fois en usage personnel, et ses storyboards IA commencent à l'offre Standard.",
    },
    { type: "h3", id: "faq-6", text: "Boords vaut-il encore le coup en 2026 ?" },
    {
      type: "p",
      text: "Pour une agence qui fait valider des storyboards et des animatiques par ses clients, oui : revue sans compte sur toutes les offres, historique des validations, exports vers le montage. Pour un réalisateur qui veut produire son film avec l'IA, il s'arrête trop tôt.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-23 -->
