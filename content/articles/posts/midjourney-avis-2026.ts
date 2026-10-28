import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-28";
const IMG = "/images/articles/midjourney";
const DOC = "https://docs.midjourney.com/hc/en-us/articles/";

export const midjourneyAvis2026: Article = {
  title: "Midjourney avis 2026 : V8.2, prix et vrai coût",
  slug: "midjourney-avis-2026",
  description:
    "Avis Midjourney au 28 octobre 2026 : V8.2 par défaut, prix de 10 à 120 $, ce qu'une heure GPU donne en images, remboursement limité et pas d'essai gratuit.",
  excerpt:
    "Midjourney reste le générateur d'images au plus beau rendu pour apprendre le style. Mais il n'a pas d'essai gratuit sur le site, le remboursement tient à 20 minutes de GPU, et l'offre à 10 $ se vide vite si tu ne passes pas par le mode Draft.",
  category: "ia-image",
  tags: ["midjourney", "avis", "midjourney prix", "midjourney v8.2", "midjourney gratuit", "image ia"],
  date: "2026-10-28",
  updatedAt: "2026-10-28",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/midjourney-avis-2026.webp",
  imageAlt:
    "Dans un salon de tatouage à la tombée de la nuit, une tatoueuse aux avant-bras tatoués compare sur une table lumineuse des planches de motifs imprimées à ses propres croquis à l'encre",
  keywords: ["midjourney avis", "midjourney prix", "midjourney gratuit", "midjourney v8.2", "abonnement midjourney"],
  relatedSlugs: ["midjourney-debutant-premiere-image", "prompt-midjourney-parametres", "krea-ai-avis"],
  faq: [
    {
      question: "Midjourney est-il gratuit en 2026 ?",
      answer:
        "Non sur le site et sur Discord. La documentation officielle indique qu'aucun essai gratuit n'existe sur midjourney.com ni sur Discord. Le seul essai mentionné est limité et se trouve dans l'application de niji, le modèle anime de Midjourney, sur iOS et Android. Les heures gagnées en notant des images ne servent qu'avec un abonnement actif.",
    },
    {
      question: "Combien coûte Midjourney par mois ?",
      answer:
        "Basic 10 $, Standard 30 $, Pro 60 $ et Mega 120 $ par mois. En annuel payé d'avance, la remise est de 20 % : 8 $, 24 $, 48 $ et 96 $ par mois. Les heures Fast en plus coûtent 4 $ l'heure sur toutes les offres.",
    },
    {
      question: "Combien d'images peut-on faire avec l'offre Basic ?",
      answer:
        "La doc ne donne pas de nombre d'images, elle donne 200 minutes de GPU rapide par mois et des coûts moyens : 0,8 minute pour un prompt en SD, 1,3 en HD, 0,4 pour un prompt Draft de 24 petites images. Ça fait environ 250 prompts SD, ou 500 prompts Draft, si tu ne fais que ça. C'est une estimation à partir des moyennes officielles.",
    },
    {
      question: "Peut-on se faire rembourser un abonnement Midjourney ?",
      answer:
        "Seulement si tu as utilisé moins de 20 minutes de GPU sur toute la vie de ton compte, Fast et Relax compris. Si tu y as droit, l'option apparaît quand tu résilies. Au-delà, pas de remboursement. La résiliation prend effet à la fin de la période déjà payée.",
    },
    {
      question: "Quelle est la version par défaut de Midjourney aujourd'hui ?",
      answer:
        "V8.2, par défaut depuis le 24 juillet 2026 selon la page Version de la documentation. V8.1 l'était du 10 juin au 23 juillet. V8.2 apporte aussi l'Edit Model, qui remplace Omni Reference, Character Reference et Retexture.",
    },
    {
      question: "Peut-on vendre les images faites avec Midjourney ?",
      answer:
        "Oui, la documentation dit que tu possèdes tes images et vidéos, même après résiliation. Deux exceptions : une image d'un autre membre que tu agrandis reste la sienne, et une entreprise qui dépasse 1 million de dollars de chiffre d'affaires annuel doit prendre Pro ou Mega.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Midjourney reste, en octobre 2026, le générateur que je conseille à un débutant qui veut apprendre le style d'une image : la lumière, la matière, la composition. Mais il faut payer dès le premier jour (10 $ par mois au minimum), le remboursement n'est possible que sous 20 minutes de GPU consommées, et la version par défaut est désormais **V8.2**, pas V8.1 comme l'écrivent encore beaucoup de pages. Si tu veux de la vidéo, des personnages qui restent identiques sur vingt plans ou zéro budget, prends autre chose.",
    },
    {
      type: "p",
      text: "Cet avis s'appuie sur la documentation officielle et le journal des mises à jour, relus le 28 octobre 2026, avec neuf captures prises le même jour. Je n'ai pas lancé de génération pour cet article. Pour la prise en main pas à pas, j'ai écrit un [guide de la première image Midjourney](/blog/midjourney-debutant-premiere-image).",
    },
    { type: "h2", id: "verdict", text: "Mon avis sur Midjourney en deux minutes" },
    {
      type: "verdict",
      title: "Mon verdict sur Midjourney (octobre 2026)",
      pourQui:
        "Les débutants qui veulent apprendre l'esthétique d'une image, les illustrateurs, les directeurs artistiques et les créateurs qui préparent des planches de style ou du concept art.",
      forts: [
        "Le rendu le plus travaillé du marché sans réglage, surtout en V8.2",
        "Le mode Draft sort 24 images basse définition pour 0,4 minute de GPU, de quoi apprendre vite",
        "Profils de personnalisation qui apprennent tes goûts au fil des images que tu choisis",
        "Interface web complète, Discord n'est plus obligatoire",
        "Tes images t'appartiennent, même après résiliation",
      ],
      faibles: [
        "Aucun essai gratuit sur le site ni sur Discord",
        "Remboursement seulement sous 20 minutes de GPU sur la vie du compte",
        "Heures Fast perdues en fin de mois, pas de report",
        "Images publiques par défaut : le mode Stealth demande Pro ou Mega (60 $ par mois)",
        "Vidéo limitée à 5 secondes à partir d'une image",
      ],
      verdict:
        "Pour apprendre l'image, Midjourney vaut ses 10 $ à condition de travailler en Draft et de ne pas compter sur un remboursement. Si tu vises la vidéo ou la cohérence de personnages sur un projet entier, garde-le pour les planches de style et produis ailleurs.",
      lien: { label: "Voir les offres officielles", href: `${DOC}27870484040333-Comparing-Midjourney-Plans` },
    },
    { type: "h2", id: "v8-2", text: "Ce que Midjourney fait vraiment en octobre 2026" },
    {
      type: "p",
      text: "Midjourney génère des images à partir d'un texte, d'images de référence ou des deux, sur [midjourney.com](https://www.midjourney.com) ou sur Discord. Le site fait tout, y compris l'édition, l'organisation en dossiers et la vidéo. Le modèle par défaut a changé deux fois cette année. V8.1 est passé par défaut le 10 juin 2026, puis **V8.2 l'a remplacé le 24 juillet 2026**, d'après la page Version de la doc.",
    },
    {
      type: "screenshot",
      src: `${IMG}-version-v82-${CAPTURE}.webp`,
      alt: "Page Version de la documentation Midjourney indiquant que la version par défaut est V8.2, sortie comme version par défaut le 24 juillet 2026",
      caption:
        "La doc le dit noir sur blanc : V8.2 est la version par défaut, avec l'Edit Model qui remplace Omni Reference, Character Reference et Retexture.",
      source: `${DOC}32199405667853-Version`,
      capturedAt: CAPTURE,
      width: 800,
      height: 780,
    },
    {
      type: "p",
      text: "Dans l'annonce du 24 juillet, l'équipe présente V8.2 comme une mise à jour d'esthétique et de qualité : des images « plus créatives, audacieuses », moins de résultats ratés au hasard, et une personnalisation qui comprend mieux tes goûts quand ton profil a beaucoup de notes. Si tu as lu mon article sur [ce que V8.1 avait changé](/blog/midjourney-v8-1-mise-a-jour), tu y retrouveras la vitesse et la lecture plus fidèle du prompt apportées par V8.1.",
    },
    {
      type: "screenshot",
      src: `${IMG}-journal-v82-${CAPTURE}.webp`,
      alt: "Annonce Version 8.2 du 24 juillet 2026 sur le journal officiel de Midjourney, avec une mosaïque de vingt images d'exemple aux styles variés",
      caption:
        "L'annonce officielle de V8.2. La mosaïque montre la palette visée : illustration, mode, portrait, fantastique.",
      source: "https://updates.midjourney.com/version-8-2/",
      capturedAt: CAPTURE,
      width: 770,
      height: 720,
    },
    {
      type: "p",
      text: "Le changement qui compte le plus pour un débutant, c'est l'**Edit Model**. Il fait trois choses : modifier une image avec une consigne écrite, créer une nouvelle image à partir de quatre références au maximum, et retoucher une zone ou agrandir le cadre dans l'éditeur. Ça remplace Omni Reference et Character Reference, que tu croiseras encore dans les tutoriels de 2025. Si un tuto te parle de `--cref`, il date.",
    },
    {
      type: "screenshot",
      src: `${IMG}-edit-model-${CAPTURE}.webp`,
      alt: "Section What is the Edit Model de la documentation Midjourney, listant les trois usages : modifier par instruction, générer avec jusqu'à 4 images de référence, inpainting et outpainting",
      caption:
        "Les trois usages de l'Edit Model. Le deuxième remplace officiellement Omni Reference et Character Reference.",
      source: `${DOC}48495453462797-Edit-Model`,
      capturedAt: CAPTURE,
      width: 800,
      height: 360,
    },
    { type: "h2", id: "prix", text: "Combien coûte Midjourney, et ce que ça représente en images" },
    {
      type: "p",
      text: "Un abonnement Midjourney se compte en temps de GPU, et le nombre d'images dépend de ce que tu en fais. La plupart des avis que j'ai lus passent à côté, alors que ce chiffre décide si l'offre à 10 $ te suffit. Les quatre offres, telles que la doc les affiche :",
    },
    {
      type: "comparison",
      caption: "Les quatre offres Midjourney (dollars US)",
      headers: ["Offre", "Mensuel", "Annuel", "GPU rapide / mois", "Relax illimité", "Vidéo", "Stealth"],
      rows: [
        ["Basic", "10 $", "96 $ (8 $/mois)", "3,3 h (200 min)", "Non", "SD", "Non"],
        ["Standard", "30 $", "288 $ (24 $/mois)", "15 h", "Images", "SD et HD", "Non"],
        ["Pro", "60 $", "576 $ (48 $/mois)", "30 h", "Images et vidéo SD", "SD et HD", "Oui"],
        ["Mega", "120 $", "1 152 $ (96 $/mois)", "60 h", "Images et vidéo SD", "SD et HD", "Oui"],
      ],
      source: { label: "Midjourney, Comparing Midjourney Plans", href: `${DOC}27870484040333-Comparing-Midjourney-Plans` },
      verifieLe: CAPTURE,
      note: "Heure Fast supplémentaire : 4 $ sur toutes les offres. L'annuel se paie en une fois.",
    },
    {
      type: "screenshot",
      src: `${IMG}-tarifs-${CAPTURE}.webp`,
      alt: "Tableau de comparaison des offres Midjourney Basic, Standard, Pro et Mega avec prix mensuels, annuels, temps GPU Fast et Relax, résolution vidéo et mode Stealth",
      caption:
        "Le tableau officiel. Regarde la ligne Relax : Basic n'y a pas droit, donc chaque image entame tes 200 minutes.",
      source: `${DOC}27870484040333-Comparing-Midjourney-Plans`,
      capturedAt: CAPTURE,
      width: 820,
      height: 900,
    },
    {
      type: "p",
      text: "Pour savoir ce que valent ces minutes, il faut la page sur la vitesse GPU. Elle donne des coûts moyens par action : 0,8 minute pour un prompt en SD, 1,3 en HD, 1 minute pour un prompt Edit Model en SD, 8 minutes pour un lot de quatre vidéos SD et 26 pour quatre vidéos HD.",
    },
    {
      type: "screenshot",
      src: `${IMG}-cout-gpu-${CAPTURE}.webp`,
      alt: "Tableau Approximate GPU Cost de la documentation Midjourney : SD Prompt 0,8 minute, HD Prompt 1,3 minute, Edit Model, upscale et lots de vidéos SD et HD",
      caption:
        "Le tableau qui permet de traduire un abonnement en volume. Un lot de quatre vidéos HD coûte plus de trente fois un prompt SD.",
      source: `${DOC}32016412137741-GPU-Speed-Fast-Relax-Turbo`,
      capturedAt: CAPTURE,
      width: 800,
      height: 680,
    },
    {
      type: "p",
      text: "J'ai fait le calcul pour l'offre Basic, à partir de ces moyennes (la doc précise que le coût réel varie selon le format et les options) :",
    },
    {
      type: "table",
      headers: ["Ce que tu fais avec 200 minutes", "Coût moyen officiel", "Volume approximatif"],
      rows: [
        ["Prompts SD uniquement", "0,8 min", "environ 250 prompts"],
        ["Prompts HD uniquement", "1,3 min", "environ 150 prompts"],
        ["Prompts Draft (24 images 512 px)", "0,4 min", "environ 500 prompts"],
        ["Lots de 4 vidéos SD", "8 min", "25 lots"],
      ],
      source: { label: "Midjourney, GPU Speed et Draft Mode", href: `${DOC}32016412137741-GPU-Speed-Fast-Relax-Turbo` },
      verifieLe: CAPTURE,
    },
    {
      type: "p",
      text: "À mon avis, si tu t'y mets sérieusement, tu finiras sur Standard. Le mode Relax y est illimité pour les images. Quand tes 15 heures rapides sont parties, tu continues à générer, plus lentement. Sur Basic, une fois les 200 minutes consommées, il faut racheter des heures à 4 $ ou attendre le mois suivant. Et les minutes non utilisées ne se reportent pas : la doc le répète sur la page dédiée à l'expiration du temps Fast.",
    },
    { type: "h2", id: "gratuit", text: "Midjourney est-il gratuit ?" },
    {
      type: "p",
      text: "Non. La page Free Trials est courte et sans ambiguïté : pas d'essai sur Discord ni sur midjourney.com. Le seul essai cité est limité et se trouve dans l'application **niji** (iOS et Android), le modèle orienté anime fait avec Spellbrush.",
    },
    {
      type: "screenshot",
      src: `${IMG}-essai-gratuit-${CAPTURE}.webp`,
      alt: "Page Free Trials de la documentation Midjourney : essai limité seulement dans l'application niji sur iOS et Android, aucun essai sur Discord ni sur le site",
      caption: "La réponse officielle à la question la plus posée sur Midjourney.",
      source: `${DOC}27870399340173-Free-Trials`,
      capturedAt: CAPTURE,
      width: 1080,
      height: 250,
    },
    {
      type: "p",
      text: "Il existe une façon de gagner du temps rapide gratuitement, mais elle suppose déjà un abonnement. Chaque jour, les 2 000 membres qui notent le plus d'images reçoivent une heure Fast, et des sondages en donnent parfois. Ce temps offert expire 30 jours après avoir été donné. Pour apprendre l'image IA sans payer, regarde plutôt ma sélection d'[outils pour créer des images IA gratuitement](/blog/creer-images-ia-gratuit-outils), ou le temps réel de Krea, dont le plan gratuit donne 100 unités par jour (relevé du 26 octobre dans mon [avis sur Krea AI](/blog/krea-ai-avis)).",
    },
    { type: "h2", id: "avant-de-payer", text: "Ce qu'il faut savoir avant de payer" },
    {
      type: "p",
      text: "Le remboursement, lui, reste quasi théorique. La règle officielle : tu y as droit seulement si tu as consommé moins de 20 minutes de GPU sur toute la vie de ton compte, Fast et Relax compris. Vingt minutes, c'est environ 25 prompts SD. Autrement dit, si tu testes vraiment l'outil la première semaine, tu ne seras plus remboursable. Et un compte suspendu pour non-respect des règles perd ce droit.",
    },
    {
      type: "screenshot",
      src: `${IMG}-remboursement-${CAPTURE}.webp`,
      alt: "Page Requesting a Refund de la documentation Midjourney avec l'encadré Important : remboursement seulement sous 20 minutes de GPU utilisées sur la vie du compte",
      caption:
        "La condition de remboursement, absente de toutes les pages françaises que j'ai lues sur la requête « midjourney avis ».",
      source: `${DOC}25386088618253-Requesting-a-Refund`,
      capturedAt: CAPTURE,
      width: 1060,
      height: 570,
    },
    {
      type: "p",
      text: "Des avis publics vont dans le même sens. Sur [Trustpilot](https://nz.trustpilot.com/review/www.midjourney.com), plusieurs clients racontent des heures Fast payées non créditées ou un compte bloqué avec des semaines d'abonnement restantes (relevé du 16 octobre 2026 ; la page bloque les robots, je n'ai pas pu la recapturer le 28). Quelques témoignages ne font pas une tendance, mais ils m'ont convaincu d'une chose : commence en mensuel, pas en annuel.",
    },
    {
      type: "ul",
      items: [
        "Tes images sont publiques par défaut. Le mode Stealth, qui les garde privées, demande Pro ou Mega. Le journal du 7 octobre précise même qu'une image non Stealth peut apparaître sur Explore et sur ton profil si tu l'as créée dans un dossier partagé privé.",
        "Pour l'usage commercial, tu possèdes tes créations, même après résiliation, mais une entreprise au-delà de 1 million de dollars de chiffre d'affaires par an doit prendre Pro ou Mega.",
        "Un compte par personne : pour un usage scolaire, chaque élève doit avoir son propre compte et son propre abonnement, sans formule de groupe gérée par l'école.",
        "Résilier ne coupe rien tout de suite : tu gardes l'accès et le temps Fast restant jusqu'à la fin de la période payée, et tes images restent dans ta galerie.",
      ],
    },
    { type: "h2", id: "debuter", text: "Débuter avec Midjourney sans gaspiller ses minutes" },
    {
      type: "p",
      text: "Avec 200 minutes, la façon de travailler compte plus que l'offre. La méthode que je conseille sur Basic tient en quatre réflexes, et le premier est le mode Draft.",
    },
    {
      type: "screenshot",
      src: `${IMG}-draft-mode-${CAPTURE}.webp`,
      alt: "Section Draft Mode in V8.1 / V8.2 de la documentation Midjourney : un prompt Draft génère 24 images en 512 par 512 pixels pour 0,4 minute de GPU",
      caption:
        "Le Draft de V8.1 et V8.2 : 24 images pour la moitié du prix d'un prompt SD. Disponible sur le site seulement, pas sur Discord.",
      source: `${DOC}35577175650957-Draft-Conversational-Modes`,
      capturedAt: CAPTURE,
      width: 800,
      height: 740,
    },
    {
      type: "ol",
      items: [
        "**Explore en Draft.** Un prompt Draft sort 24 images en 512 x 512 pour 0,4 minute. Tu vois vingt-quatre interprétations de ton idée pour la moitié du prix d'un prompt SD, puis tu relances en SD ou en HD celle qui tient la route avec Vary ou Remix.",
        "**Active ton profil de personnalisation.** Tu choisis des images que tu aimes jusqu'à ce que le profil global s'ouvre ; ton profil V7 fonctionne en V8.2. Plus tu en choisis, plus le style de départ te ressemble.",
        "**Garde la HD pour la fin.** 1,3 minute contre 0,8 en SD : ne passe en HD que l'image que tu vas vraiment utiliser.",
        "**Note ce qui marche.** Un fichier texte avec le prompt, les paramètres et ce que tu as changé. C'est là que tu apprends, plus que dans la galerie.",
      ],
    },
    {
      type: "p",
      text: "Pour les paramètres (format, stylize, chaos, raw), mon [guide des paramètres de prompt Midjourney](/blog/prompt-midjourney-parametres) reste valable sur V8.2 pour l'essentiel. Et si l'idée d'écrire un prompt te bloque, le mode conversationnel du Draft te laisse décrire ton image en phrases normales, par texte ou à la voix, et l'IA écrit le prompt.",
    },
    { type: "h2", id: "limites", text: "Les limites que tu vas rencontrer" },
    {
      type: "p",
      text: "Le texte dans l'image reste fragile, et Midjourney le sait : l'équipe teste depuis le 8 octobre un « Thinking Mode » sur son site alpha. Le principe : relancer une image V8.2 pour que le modèle repère où il a raté ton prompt (objets, mise en page, anatomie, texte) et recommence. Pour l'instant, le test reste réservé au site alpha. Pour une affiche avec un titre lisible, je passe toujours par un outil spécialisé, voir mon article sur [le texte lisible dans les images IA](/blog/ideogram-texte-lisible-images-ia).",
    },
    {
      type: "screenshot",
      src: `${IMG}-thinking-mode-${CAPTURE}.webp`,
      alt: "Changelog alpha Midjourney du 7 octobre 2026 annonçant le Thinking Mode pour relancer les images V8.2 et les dossiers partagés",
      caption:
        "Le changelog alpha du 7 octobre : Thinking Mode et dossiers partagés, deux nouveautés encore en test sur alpha.midjourney.com.",
      source: "https://updates.midjourney.com/alpha-changelog-10-7-26/",
      capturedAt: CAPTURE,
      width: 770,
      height: 450,
    },
    {
      type: "p",
      text: "Côté vidéo, Midjourney anime une image en clips de 5 secondes. Toutes les offres peuvent le faire en Fast, mais la HD demande Standard ou plus et le Relax vidéo demande Pro ou Mega. J'ai détaillé ce que ça donne et ce que ça coûte dans mon [guide de la vidéo Midjourney](/blog/midjourney-video-guide). Pour des plans longs avec son, compare plutôt les modèles vidéo dédiés, par exemple dans mon [comparatif Seedance et Veo](/blog/seedance-vs-veo).",
    },
    {
      type: "p",
      text: "Garder le même personnage sur tout un projet demande du travail. L'Edit Model accepte quatre références, ce qui aide pour garder un visage. Mais rien dans Midjourney n'organise vingt plans d'une même histoire : tu gères toi-même tes références, tes prompts et l'ordre des images.",
    },
    { type: "h2", id: "alternatives", text: "Quand choisir autre chose que Midjourney" },
    {
      type: "table",
      headers: ["Ton besoin", "Mon conseil"],
      rows: [
        ["Apprendre le style et la lumière, budget de 10 à 30 $", "Midjourney, en Draft, puis Standard si tu y passes du temps"],
        ["Zéro budget", "Un outil avec plan gratuit, comme Krea (100 unités par jour) ou ceux de [ma sélection gratuite](/blog/creer-images-ia-gratuit-outils)"],
        ["Du texte lisible dans l'image", "Un modèle spécialisé typographie"],
        ["De la vidéo avec plusieurs plans", "Un modèle vidéo dédié, Midjourney seulement pour les images de départ"],
        ["Tester plusieurs modèles sur le même prompt", "Une plateforme multi-modèles, voir mon [classement des plateformes tout-en-un](/blog/meilleures-plateformes-ia-tout-en-un)"],
      ],
    },
    {
      type: "p",
      text: "Je suis juge et partie sur la dernière ligne : j'ai créé Imaginode, un studio IA sur canvas à nodes qui donne accès à plus de 100 modèles avec un seul abonnement. Midjourney n'en fait pas partie. Si tu veux comparer d'autres modèles d'image sur le même prompt, le coût en crédits s'affiche avant chaque génération, et l'inscription donne 15 crédits, soit trois images, sans carte bancaire.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Compare plusieurs modèles d'image sur le même prompt",
      text: "Branche un prompt sur plusieurs nodes image, vois le coût en crédits avant de lancer, et garde le rendu qui te convient.",
    },
    {
      type: "p",
      text: "Mon avis final : si tu veux comprendre ce qui rend une image belle, Midjourney reste la meilleure école à 10 $, à condition de compter en minutes de GPU. Prends le mensuel, passe ta première semaine en Draft, et monte sur Standard le jour où tes 200 minutes partent avant la fin du mois.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 28 octobre 2026 les pages publiques de la documentation Midjourney (offres, vitesse GPU, versions, Draft, Edit Model, essai gratuit, remboursement, résiliation, usage commercial, usage éducatif, expiration du temps Fast, temps gratuit) et le journal officiel des mises à jour. Les neuf captures viennent de ces pages, prises le même jour, sans connexion et sans accepter de cookies.",
        "Les volumes d'images par offre sont calculés à partir des coûts moyens publiés par Midjourney ; je ne les ai pas mesurés. Les retours Trustpilot viennent de notre fiche du 16 octobre 2026. J'ai créé Imaginode, citée en fin d'article ; pour elle, je ne cite que des fonctions en production.",
      ],
      teste: ["La lecture des pages officielles et du journal des mises à jour, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée dans Midjourney pour cet article",
        "Le coût réel en minutes d'un prompt avec des options inhabituelles",
        "L'essai limité de l'application niji",
        "Le Thinking Mode, réservé au site alpha",
      ],
      sources: [
        { label: "Comparing Midjourney Plans", href: `${DOC}27870484040333-Comparing-Midjourney-Plans` },
        { label: "GPU Speed (Fast, Relax, Turbo)", href: `${DOC}32016412137741-GPU-Speed-Fast-Relax-Turbo` },
        { label: "Version", href: `${DOC}32199405667853-Version` },
        { label: "Requesting a Refund", href: `${DOC}25386088618253-Requesting-a-Refund` },
        { label: "Free Trials", href: `${DOC}27870399340173-Free-Trials` },
        { label: "Using Images & Videos Commercially", href: `${DOC}27870375276557-Using-Images-Videos-Commercially` },
        { label: "Journal Midjourney, Version 8.2", href: "https://updates.midjourney.com/version-8-2/" },
      ],
    },
  ],
};
