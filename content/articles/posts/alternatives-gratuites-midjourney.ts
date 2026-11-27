import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-30";
const IMG = "/images/articles/alternatives-gratuites-midjourney";
const MJ_PLANS = "https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans";
const LEONARDO = "https://leonardo.ai/pricing";
const KREA = "https://www.krea.ai/pricing";
const FIREFLY = "https://www.adobe.com/fr/products/firefly/plans.html";
const IDEOGRAM = "https://ideogram.ai/pricing";
const BING_FAQ = "https://www.bing.com/images/create/help";
const GEMINI_LIMITS = "https://support.google.com/gemini/answer/16275805?hl=fr";
const GEMINI_IMAGES = "https://support.google.com/gemini/answer/14286560?hl=fr";

export const alternativesGratuitesMidjourney: Article = {
  title: "Alternatives gratuites à Midjourney : 6 outils comparés",
  slug: "alternatives-gratuites-midjourney",
  description:
    "Midjourney n'a aucun plan gratuit. Leonardo, Krea, Firefly, Gemini, Ideogram et Bing : quotas relevés le 30 octobre 2026, droits et pièges de chaque offre.",
  excerpt:
    "Midjourney ne donne rien sans abonnement. Six outils ont un vrai plan gratuit en octobre 2026, mais aucun ne donne la même chose : quota, droits commerciaux et confidentialité changent tout.",
  category: "ia-image",
  tags: ["midjourney gratuit", "alternative midjourney", "leonardo ai", "krea", "adobe firefly", "image ia gratuite"],
  date: "2026-10-30",
  updatedAt: "2026-10-30",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/alternatives-gratuites-midjourney.webp",
  imageAlt:
    "Dans un train régional à l'aube, une jeune femme au crâne rasé en ciré vert, un croquis de phare au crayon ouvert devant elle et une image du même phare sur sa tablette",
  keywords: [
    "alternative gratuite midjourney",
    "midjourney gratuit",
    "comme midjourney gratuit",
    "générateur d'images ia gratuit",
    "leonardo ai gratuit",
  ],
  relatedSlugs: ["midjourney-avis-2026", "creer-images-ia-gratuit-outils", "krea-ai-avis"],
  faq: [
    {
      question: "Midjourney est-il gratuit en 2026 ?",
      answer:
        "Non. La documentation officielle liste quatre abonnements, de 10 à 120 $ par mois, et aucun plan gratuit sur le site ni sur Discord. Le seul essai mentionné par Midjourney se trouve dans l'application mobile niji.",
    },
    {
      question: "Quelle est la meilleure alternative gratuite à Midjourney ?",
      answer:
        "Ça dépend de ce que tu veux apprendre. Pour le volume, Bing Image Creator (15 créations rapides puis jusqu'à 200 requêtes par jour). Pour retoucher et garder un personnage, Gemini avec Nano Banana 2. Pour un usage commercial annoncé clairement, Adobe Firefly. Pour le texte dans l'image, Ideogram. Pour le temps réel, Krea.",
    },
    {
      question: "Peut-on utiliser commercialement les images d'un plan gratuit ?",
      answer:
        "Pas partout. Krea réserve sa licence commerciale aux offres payantes. Leonardo rend publiques les images du plan gratuit et garde des droits mondiaux et perpétuels sur les images publiques. Les conditions de Bing Image Creator présentent le service comme destiné au divertissement. Adobe annonce ses modèles Firefly utilisables commercialement, avec une réserve sur les modèles partenaires. Lis toujours les conditions de l'outil avant de vendre une image.",
    },
    {
      question: "Combien d'images gratuites par jour avec Leonardo AI ?",
      answer:
        "Le plan Free donne 150 tokens rapides par jour, avec le choix de modèle limité à « Auto » et des créations publiques. Leonardo ne publie pas de coût fixe par image sur sa page tarifs : le nombre d'images dépend du modèle choisi automatiquement et des réglages.",
    },
    {
      question: "Les images faites en gratuit sont-elles privées ?",
      answer:
        "Souvent non. Leonardo affiche « Public » pour les créations du plan Free. Chez Ideogram, la génération privée figure dans les avantages de l'offre Plus. Bing conserve les créations 90 jours au maximum et les images importées jusqu'à 30 jours. N'envoie pas de visages ni de documents clients sur un plan gratuit.",
    },
    {
      question: "Stable Diffusion est-il une vraie alternative gratuite ?",
      answer:
        "Oui si tu l'installes sur ton propre ordinateur avec une carte graphique suffisante : tu ne paies alors que ton matériel et ton électricité. Les sites qui proposent Stable Diffusion en ligne fonctionnent presque tous avec des crédits, donc ils ne sont pas illimités.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Midjourney n'a **aucun plan gratuit** en octobre 2026, ni sur le site ni sur Discord. Pour apprendre l'image IA sans payer, six outils ont un vrai quota gratuit, et chacun sert un usage différent : **Bing Image Creator** pour enchaîner beaucoup d'essais, Gemini pour retoucher et garder un personnage, **Adobe Firefly** pour un usage commercial clairement annoncé, Ideogram pour le texte, Krea pour voir l'image changer pendant que tu tapes, Leonardo pour ses presets. Aucun ne donne tout, et chaque gratuit se paie autrement : Leonardo rend tes images publiques, Krea ne donne pas de licence commerciale, Bing te fait attendre après 15 créations.",
    },
    {
      type: "p",
      text: "J'ai relu le 30 octobre 2026 les pages officielles de ces six outils et la documentation de Midjourney, avec dix captures prises le même jour. Je n'ai lancé aucune génération pour cet article : je compare ce que chaque éditeur écrit noir sur blanc. Beaucoup de pages en français promettent encore un « essai gratuit sur Discord » ou disent que Bing s'appelle maintenant Designer. Les deux sont faux.",
    },
    { type: "h2", id: "verdict", text: "Le bon outil gratuit selon ce que tu veux apprendre" },
    {
      type: "verdict",
      title: "Mon choix pour remplacer Midjourney sans payer (octobre 2026)",
      pourQui:
        "Les débutants qui veulent apprendre à écrire un prompt, cadrer une image et trouver un style avant de décider s'ils prennent un abonnement, chez Midjourney ou ailleurs.",
      forts: [
        "Bing Image Creator : 15 créations rapides par jour, puis jusqu'à 200 requêtes à vitesse standard",
        "Gemini : Nano Banana 2 sans forfait, retouche locale et cohérence de personnage",
        "Adobe Firefly : générations quotidiennes gratuites et usage commercial annoncé pour ses modèles maison",
        "Krea : 100 unités par jour sans carte bancaire et génération en temps réel",
        "Ideogram : crédits hebdomadaires et le meilleur outil de la liste pour le texte dans l'image",
      ],
      faibles: [
        "Aucun ne reproduit le rendu Midjourney ni ses paramètres (--sref, --stylize)",
        "Leonardo gratuit : modèle choisi automatiquement et créations publiques",
        "Krea gratuit : pas de licence commerciale, la plupart des modèles barrés",
        "Ideogram ne publie pas le montant de ses crédits gratuits, Gemini limite le téléchargement à 1K",
      ],
      verdict:
        "Commence par Bing pour le volume et Gemini pour la retouche, les deux avec un compte que tu as sans doute déjà. Si une image doit servir à un client, fais-la sur Firefly ou paie un mois d'abonnement quelque part : le gratuit n'est pas fait pour ça.",
      lien: { label: "Voir les offres officielles de Midjourney", href: MJ_PLANS },
    },
    { type: "h2", id: "midjourney-gratuit", text: "Midjourney est-il gratuit ?" },
    {
      type: "p",
      text: "Oui. La page « Comparing Midjourney Plans » de la documentation officielle ne liste que quatre abonnements : Basic à 10 $ par mois, Standard à 30 $, Pro à 60 $ et Mega à 120 $, avec 20 % de remise en annuel. Même la notation d'images, qui rapporte du temps GPU gratuit, figure dans le tableau des abonnés.",
    },
    {
      type: "screenshot",
      src: `${IMG}-midjourney-offres.webp`,
      alt: "Tableau Comparing Midjourney Plans : offres Basic, Standard, Pro et Mega de 10 à 120 dollars par mois, temps GPU, mode Stealth et droits d'usage commerciaux",
      caption:
        "Le tableau officiel des offres Midjourney. Aucune colonne gratuite, et la note du bas rattache les droits d'usage au fait d'avoir été abonné.",
      source: MJ_PLANS,
      capturedAt: CAPTURE,
      width: 770,
      height: 1200,
    },
    {
      type: "p",
      text: "La note en bas du tableau dit que les droits d'usage s'appliquent si tu as été abonné à un moment donné, et qu'une entreprise de plus d'un million de dollars de chiffre d'affaires annuel doit prendre Pro ou Mega. Le seul essai que Midjourney mentionne se trouve dans son application mobile niji, pas sur le site. Méfie-toi des applis « Midjourney gratuit » sur les stores ou en APK : ce ne sont pas des produits Midjourney.",
    },
    {
      type: "p",
      text: "Si tu hésites encore à payer, mon [avis complet sur Midjourney](/blog/midjourney-avis-2026) traduit les heures GPU en nombre d'images et détaille la règle de remboursement. Ici, on part du principe que tu veux d'abord apprendre sans sortir la carte bancaire.",
    },
    { type: "h2", id: "tableau", text: "Ce que chaque plan gratuit donne vraiment" },
    {
      type: "comparison",
      caption: "Les plans gratuits relevés le 30 octobre 2026",
      headers: ["Outil", "Quota gratuit", "Modèles", "Images privées", "Usage commercial en gratuit"],
      rows: [
        ["Bing Image Creator", "15 créations rapides par jour, puis jusqu'à 200 requêtes par 24 h", "MAI-Image-2.5-Flash, MAI-Image-2e", "Créations stockées 90 jours max", "Conditions : service « de divertissement »"],
        ["Gemini (appli)", "Limite de calcul renouvelée toutes les 5 h, plafond hebdomadaire", "Nano Banana 2 et 2 Lite", "Selon tes réglages Google", "Non précisé sur les pages lues"],
        ["Adobe Firefly", "Générations quotidiennes, crédits renouvelés chaque jour", "Firefly, Nano Banana, Luma Ray3.14", "Non précisé", "**Oui** pour les modèles Firefly, à vérifier pour les partenaires"],
        ["Leonardo", "150 tokens rapides par jour", "« Auto » seulement", "**Non**, créations publiques", "Non explicite pour le gratuit"],
        ["Krea", "100 unités par jour, sans carte bancaire", "Krea 3, modèles temps réel", "Non précisé", "**Non**, licence à partir de Basic"],
        ["Ideogram", "Crédits hebdomadaires (montant variable)", "Ideogram 4.5, 4.0 et versions précédentes", "Génération privée listée dans Plus", "Oui selon la FAQ"],
      ],
      source: [
        { label: "Bing", href: BING_FAQ },
        { label: "Gemini", href: GEMINI_LIMITS },
        { label: "Firefly", href: FIREFLY },
        { label: "Leonardo", href: LEONARDO },
        { label: "Krea", href: KREA },
        { label: "Ideogram", href: IDEOGRAM },
      ],
      verifieLe: CAPTURE,
      releveLabel: "Offres relevées le",
      note: "Ideogram et Bing exigent une connexion (Google, Apple ou Microsoft pour Ideogram, compte Microsoft personnel pour Bing). Aucun de ces outils n'accepte les paramètres de Midjourney.",
    },
    {
      type: "p",
      text: "Deux colonnes comptent plus que le quota : la confidentialité et l'usage commercial. Pour apprendre, une image publique ne gêne personne. Pour un logo, une affiche ou un visuel de client, elles décident de l'outil à ta place.",
    },
    { type: "h2", id: "bing", text: "Bing Image Creator : le plus généreux en volume" },
    {
      type: "p",
      text: "Bing Image Creator est gratuit pour tout compte Microsoft personnel. Les comptes professionnels ou scolaires (Microsoft Entra ID) n'y ont pas accès, précise la FAQ. Tu choisis entre deux modèles maison de Microsoft, **MAI-Image-2.5-Flash** et **MAI-Image-2e**. Si tu importes une image pour la modifier, c'est forcément MAI-Image-2.5-Flash qui travaille.",
    },
    {
      type: "screenshot",
      src: `${IMG}-bing-limites.webp`,
      alt: "FAQ du Créateur d'image Bing : choix entre MAI-Image-2.5-Flash et MAI-Image-2e, deux vitesses de création et 15 créations rapides gratuites par jour réapprovisionnées le lendemain",
      caption:
        "La FAQ officielle de Bing, question 5 dépliée. Le chiffre de 15 créations rapides par jour est écrit ici, pas sur la page d'accueil.",
      source: BING_FAQ,
      capturedAt: CAPTURE,
      width: 1360,
      height: 300,
    },
    {
      type: "p",
      text: "Le quota est le plus large de la liste : **15 créations rapides par jour**, puis la vitesse standard, plus lente, jusqu'à **200 requêtes par 24 heures**, retouches comprises. Chaque clic sur « Créer » peut sortir plusieurs images. Pour apprendre à écrire un prompt en changeant un mot à la fois, c'est parfait.",
    },
    {
      type: "p",
      text: "La FAQ explique aussi que Bing peut te renvoyer une image déjà générée pour un prompt proche d'un autre, plutôt qu'une création neuve : si deux essais se ressemblent trop, c'est peut-être pour ça. Les créations sont stockées 90 jours au maximum, alors télécharge ce que tu gardes. Et les conditions d'utilisation présentent le service comme proposé « à des fins de divertissement » : je ne m'en servirais pas pour un visuel vendu.",
    },
    { type: "h2", id: "gemini", text: "Gemini et Nano Banana 2 : le meilleur pour retoucher" },
    {
      type: "p",
      text: "Dans l'appli Gemini, un compte Google sans forfait génère avec **Nano Banana 2** (et sa version Lite quand le modèle Flash-Lite est choisi). Google met en avant la cohérence des personnages, les modifications locales, plusieurs images de référence et un meilleur rendu du texte. C'est la grosse différence avec Midjourney pour un débutant : tu corriges une image en lui parlant, au lieu de relancer quatre variantes.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini-fonctions.webp`,
      alt: "Tableau de disponibilité des fonctions Gemini par forfait : génération d'images avec Nano Banana 2 cochée sans forfait Google AI, recréation avec Nano Banana Pro et génération de vidéos réservées aux forfaits",
      caption:
        "Le tableau des fonctions par forfait dans l'aide Gemini. Nano Banana 2 est coché dans la colonne « Sans forfait Google AI », Nano Banana Pro ne l'est pas.",
      source: GEMINI_LIMITS,
      capturedAt: CAPTURE,
      width: 730,
      height: 677,
    },
    {
      type: "p",
      text: "Google ne publie pas de nombre d'images gratuites. L'aide décrit des limites calculées selon la puissance de calcul demandée, renouvelées toutes les cinq heures jusqu'à un plafond hebdomadaire, et précise que les images et vidéos pèsent lourd. La page sur les images parle aussi d'un quota quotidien Nano Banana 2. Les chiffres du type « 20 images par jour » qui circulent viennent de sites tiers, pas de Google.",
    },
    {
      type: "screenshot",
      src: `${IMG}-gemini-1k.webp`,
      alt: "Aide Gemini sur Nano Banana 2 : connaissances du monde, cohérence des personnages, modifications locales, rendu de texte et téléchargement en 2K avec forfait ou en 1K sans forfait",
      caption: "La dernière ligne de la liste fixe la limite qui compte pour un portfolio : 1K sans forfait.",
      source: GEMINI_IMAGES,
      capturedAt: CAPTURE,
      width: 730,
      height: 385,
    },
    {
      type: "p",
      text: "Sans forfait, tu télécharges en **1K**, contre 2K avec un forfait Google AI. Il faut aussi avoir 18 ans pour retoucher des images. Pour aller plus loin sur ce modèle, mon article sur [Nano Banana et le photoréalisme](/blog/google-imagen-nano-banana-photorealisme) montre comment écrire une consigne qu'il respecte.",
    },
    { type: "h2", id: "firefly", text: "Adobe Firefly : le gratuit le plus sûr pour un usage commercial" },
    {
      type: "p",
      text: "Adobe propose une formule gratuite avec des générations quotidiennes, sans abonnement, et l'accès à des modèles partenaires comme Nano Banana et Luma Ray3.14 en plus de Firefly. Les formules payantes commencent à 11,08 € TTC par mois (Firefly Standard, 2 000 crédits génératifs).",
    },
    {
      type: "screenshot",
      src: `${IMG}-firefly-gratuit.webp`,
      alt: "Encart Adobe Firefly Lancez-vous gratuitement dans la création : générations quotidiennes d'images, de vidéos et d'audio avec Nano Banana et Luma Ray3.14 sans abonnement, crédits renouvelés chaque jour",
      caption:
        "L'encart de la page des formules Firefly. Il parle d'un « nombre illimité » de générations quotidiennes et, deux lignes plus bas, de crédits qui se renouvellent chaque jour.",
      source: FIREFLY,
      capturedAt: CAPTURE,
      width: 1140,
      height: 360,
    },
    {
      type: "p",
      text: "La page se contredit. L'encart promet un « nombre illimité » d'images par jour, alors que la FAQ de la même page parle d'un « nombre limité de générations quotidiennes ». Je me fierais à la FAQ : compte sur un quota journalier, pas sur de l'illimité.",
    },
    {
      type: "p",
      text: "Ce qui me ferait choisir Firefly, c'est sa réponse sur les droits. La FAQ annonce que les créations des modèles Firefly sont utilisables à des fins commerciales, parce qu'ils sont entraînés sur des contenus sous licence et du domaine public, et Adobe y joint des Content Credentials. La même réponse ajoute qu'il t'appartient de vérifier ce que produisent les modèles partenaires. Pour un visuel commercial, reste donc sur un modèle Firefly.",
    },
    {
      type: "screenshot",
      src: `${IMG}-firefly-commercial.webp`,
      alt: "FAQ Adobe Firefly sur l'usage commercial : créations des modèles Firefly utilisables commercialement, entraînement sur contenus sous licence et domaine public, vérification à faire pour les modèles partenaires",
      caption: "La réponse d'Adobe sur l'usage commercial. La phrase sur les modèles partenaires est celle à retenir.",
      source: FIREFLY,
      capturedAt: CAPTURE,
      width: 1280,
      height: 246,
    },
    { type: "h2", id: "leonardo", text: "Leonardo AI : 150 tokens par jour, mais tout est public" },
    {
      type: "p",
      text: "Leonardo est l'alternative gratuite la plus citée, et sa carte Free explique pourquoi elle déçoit souvent après une semaine : **150 tokens rapides par jour**, accès aux modèles limité à « Auto », réglages de qualité de base, une seule collection et des créations **publiques**. L'offre Essential, à 12 $ par mois, ouvre plus de 80 modèles et la génération privée.",
    },
    {
      type: "screenshot",
      src: `${IMG}-leonardo-gratuit.webp`,
      alt: "Cartes tarifaires de Leonardo AI : Free à 0 dollar avec 150 tokens rapides par jour, modèle Auto seulement et créations publiques, Essential à 12 dollars, Premium à 30, Ultimate à 60",
      caption:
        "La page tarifs de Leonardo en facturation mensuelle. Les trois lignes du plan Free à lire : 150 / day, Auto Only, Public.",
      source: LEONARDO,
      capturedAt: CAPTURE,
      width: 1440,
      height: 636,
    },
    {
      type: "p",
      text: "Le mode « Auto » est la vraie limite pour apprendre : tu ne choisis pas le modèle, donc tu ne peux pas comparer deux modèles sur le même prompt. Côté droits, la page d'aide « Commercial Usage » (datée du 25 août 2026) rattache la pleine propriété aux générations privées, et précise que Leonardo garde des droits mondiaux et perpétuels sur les images publiques. Elle ne dit pas clairement ce que peut faire un compte gratuit. Dans le doute, considère tes images Leonardo gratuites comme des essais.",
    },
    {
      type: "p",
      text: "Si tu envisages de payer, mon guide sur [Leonardo AI pour les images et les assets](/blog/leonardo-ai-images-assets) montre ce que l'outil fait de mieux, notamment pour les assets de jeu et les séries d'images cohérentes.",
    },
    { type: "h2", id: "krea", text: "Krea : apprendre en voyant l'image bouger" },
    {
      type: "p",
      text: "Krea donne **100 unités par jour** sans carte bancaire, avec son modèle maison Krea 3, Krea Agent et l'accès complet aux modèles temps réel : l'image se redessine pendant que tu tapes ou que tu dessines. Pour comprendre ce qu'un mot change à une image, c'est l'exercice le plus parlant que je connaisse.",
    },
    {
      type: "screenshot",
      src: `${IMG}-krea-gratuit.webp`,
      alt: "Carte Free de Krea avec 100 unités par jour, Krea 3, Krea Agent, sans carte bancaire et modèles temps réel, tous les modèles image, vidéo et 3D barrés, à côté des offres Basic, Pro et Max",
      caption:
        "La page tarifs de Krea, affichée par défaut en annuel. Dans la colonne Free, « All image models » et « All video models » sont barrés.",
      source: KREA,
      capturedAt: CAPTURE,
      width: 1200,
      height: 728,
    },
    {
      type: "p",
      text: "La contrepartie se lit dans les lignes barrées : en gratuit, pas de catalogue de modèles image ou vidéo, pas de Krea Nodes, un entraînement LoRA et un agrandissement limités. La FAQ réserve la licence commerciale aux offres Basic et au-dessus (9 $ par mois, ou 5 $ en annuel). Le quota se recharge chaque jour, et une fois épuisé il faut attendre le lendemain. J'ai détaillé tout ça dans mon [avis sur Krea AI](/blog/krea-ai-avis), avec trois exercices de 15 minutes pour apprendre la lumière et le cadrage en temps réel.",
    },
    { type: "h2", id: "ideogram", text: "Ideogram : pour le texte, le logo et l'affiche" },
    {
      type: "p",
      text: "Midjourney reste fragile dès qu'il faut écrire un mot lisible sur une affiche. Ideogram s'est construit sur ce point. Pas d'essai ni de remise sur les abonnements, dit la FAQ, mais les comptes gratuits éligibles reçoivent des **crédits chaque semaine** s'ils se connectent avec Google, Apple ou Microsoft. Le montant n'est pas publié : « il peut varier ».",
    },
    {
      type: "screenshot",
      src: `${IMG}-ideogram-gratuit.webp`,
      alt: "FAQ Ideogram : pas de remise ni d'essai gratuit pour les abonnements, crédits hebdomadaires pour les comptes gratuits connectés avec Google, Apple ou Microsoft, montant variable",
      caption: "La seule mention du gratuit sur la page tarifs d'Ideogram, cachée dans la FAQ.",
      source: IDEOGRAM,
      capturedAt: CAPTURE,
      width: 770,
      height: 184,
    },
    {
      type: "p",
      text: "Pour savoir jusqu'où vont ces crédits, le tableau des coûts aide : une image Ideogram 4.5 coûte 3 crédits en rendu Low, 6 en Medium, 10 en High, et 0,8 crédit en Very Low avec des images sources. L'agrandissement est réservé aux offres payantes. Fais tes essais de composition en Low et garde le High pour l'affiche finale.",
    },
    {
      type: "screenshot",
      src: `${IMG}-ideogram-credits.webp`,
      alt: "Tableau Using your credits d'Ideogram : Ideogram 4.5 de 0,8 à 22 crédits par image selon le rendu, Ideogram 4.0 en 2K de 3 à 10 crédits",
      caption: "Le coût d'une image selon le modèle et le rendu, sur la page tarifs d'Ideogram.",
      source: IDEOGRAM,
      capturedAt: CAPTURE,
      width: 1280,
      height: 660,
    },
    {
      type: "p",
      text: "Sur les droits, la FAQ dit qu'Ideogram ne revendique pas la propriété des images et que tu peux les utiliser à toutes fins, commerciales comprises. La génération privée, elle, apparaît dans la liste des avantages de l'offre Plus (20 $ par mois, 15 $ en annuel). Mon article sur le [texte lisible dans les images IA](/blog/ideogram-texte-lisible-images-ia) donne la méthode pour écrire ce genre de prompt.",
    },
    { type: "h2", id: "stable-diffusion", text: "Et Stable Diffusion en local ?" },
    {
      type: "p",
      text: "C'est la seule option illimitée, à une condition : l'installer sur ton ordinateur, avec une carte graphique qui suit. Tu paies alors ton matériel et ton électricité, rien d'autre, et tu choisis tes modèles. Les sites qui affichent « Stable Diffusion gratuit en ligne » fonctionnent presque tous avec des crédits. Pour démarrer proprement, suis mon guide [Stable Diffusion pour débutants](/blog/stable-diffusion-debutant-demarrer).",
    },
    { type: "h2", id: "methode", text: "Refaire un prompt Midjourney sur un outil gratuit" },
    {
      type: "p",
      text: "L'erreur classique : coller un prompt Midjourney avec ses paramètres dans Bing ou Gemini, et conclure que l'outil est mauvais. Aucun des six ne lit `--ar`, `--sref` ou `--stylize`. Pour traduire un prompt, six étapes :",
    },
    {
      type: "ol",
      items: [
        "Supprime tous les paramètres en fin de prompt et note-les à côté.",
        "Remplace le format (`--ar 16:9`) par le sélecteur de proportions de l'outil, ou écris « format paysage 16:9 » dans la phrase.",
        "Remplace `--sref` par une image de référence importée quand l'outil l'accepte (Gemini prend plusieurs images de référence), sinon décris le style en mots : époque, pellicule, palette, éclairage.",
        "Réécris les mots-clés empilés en une phrase : sujet, action, décor, lumière, cadrage.",
        "Change une seule chose par essai et garde les versions côte à côte.",
        "Quand l'image est presque bonne, retouche-la (Gemini, Bing) au lieu de tout relancer.",
      ],
    },
    {
      type: "p",
      text: "Exemple. « portrait of an old fisherman, rainy harbor, cinematic, 35mm --ar 3:2 --stylize 250 » devient : « Portrait d'un vieux pêcheur au ciré jaune sur un quai pluvieux à l'aube, lumière grise et douce, photo argentique 35 mm, cadrage serré au niveau des yeux », avec le format 3:2 choisi dans l'interface. Pour bâtir ce genre de phrase sans y penser, ma méthode du [prompt en quatre blocs](/blog/prompt-structure-4-blocs-ia) marche sur tous ces outils.",
    },
    {
      type: "p",
      text: "> Pro Tip : garde le même prompt d'entraînement d'un outil à l'autre pendant une semaine. Tu verras vite lequel comprend ta façon d'écrire, et c'est souvent un meilleur critère que la beauté de la première image.",
    },
    { type: "h2", id: "pieges", text: "Les pièges du « Midjourney gratuit »" },
    {
      type: "h3",
      id: "piege-apk",
      text: "Les applis et sites « Midjourney gratuit »",
    },
    {
      type: "p",
      text: "Symptôme : une appli mobile ou un site reprend le nom Midjourney et promet des images gratuites. Midjourney ne vend que ses abonnements et son appli mobile niji. Fix concret : vérifie l'éditeur avant d'installer quoi que ce soit, et ne donne jamais tes identifiants Discord à un service tiers.",
    },
    { type: "h3", id: "piege-public", text: "Publier un projet client sur un plan public" },
    {
      type: "p",
      text: "Symptôme : les images d'une campagne apparaissent dans une galerie publique avant la sortie. Leonardo gratuit rend tout public, et Ideogram réserve la génération privée aux abonnés. Fix concret : garde les plans gratuits pour l'apprentissage et paie un mois de l'outil choisi pour un projet confidentiel.",
    },
    { type: "h3", id: "piege-licence", text: "Vendre une image sans licence commerciale" },
    {
      type: "p",
      text: "Symptôme : un client te demande la licence et le plan gratuit ne l'inclut pas. C'est le cas chez Krea, et Bing présente son service comme un divertissement. Fix concret : pour tout ce qui sera vendu, utilise un modèle Firefly ou une offre payante dont la licence est écrite, et garde une capture des conditions du jour.",
    },
    { type: "h3", id: "piege-quota", text: "Confondre « quotidien » et « illimité »" },
    {
      type: "p",
      text: "Symptôme : tu bloques en pleine séance parce que le quota du jour est vide. Krea s'arrête jusqu'au lendemain, Gemini attend la recharge des cinq heures puis bute sur le plafond de la semaine. Fix concret : prépare tes prompts à l'avance et alterne deux outils, par exemple Bing pour chercher et Gemini pour corriger.",
    },
    { type: "h2", id: "payer", text: "Quand payer devient plus simple" },
    {
      type: "p",
      text: "Le gratuit suffit pour apprendre. Il devient pénible quand tu veux comparer plusieurs modèles sur le même prompt, garder tes images privées ou livrer un client. À ce stade, trois chemins : Midjourney Basic à 10 $ si c'est son esthétique que tu veux, l'outil gratuit qui t'a plu en version payante, ou une plateforme qui réunit plusieurs modèles.",
    },
    {
      type: "p",
      text: "Sur ce dernier point, je suis juge et partie : Imaginode est un outil que je développe. C'est un canvas à nodes qui donne accès à plus de 100 modèles d'image, de vidéo et de voix avec un seul abonnement, à partir de 13 € HT par mois pour 900 crédits. Le gratuit se limite à 15 crédits à l'inscription, soit trois premières images, sans carte bancaire. Pour apprendre sans payer, les six outils ci-dessus vont plus loin. Pour comparer Nano Banana, Flux ou Ideogram sur le même prompt, c'est là qu'il devient utile.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Compare plusieurs modèles sur le même prompt",
      text: "Branche un prompt sur plusieurs modèles d'image et regarde les résultats côte à côte, avec le coût affiché avant chaque génération.",
    },
    {
      type: "p",
      text: "Pour une liste plus large d'outils gratuits, sans le prisme Midjourney, ma sélection pour [créer des images IA gratuitement](/blog/creer-images-ia-gratuit-outils) en recense dix. Et si tu veux comparer les générateurs payants, le [classement des meilleurs générateurs d'images](/blog/meilleurs-generateurs-images-ia-2026) les range par usage.",
    },
    {
      type: "p",
      text: "Mon conseil pour la suite : ouvre Bing et Gemini aujourd'hui, garde le même prompt pendant une semaine, et note ce qui te manque. Si c'est le style, Midjourney Basic vaut un mois d'essai payant. Si c'est le texte, va sur Ideogram. Si c'est la licence, Firefly. Et si rien ne manque au bout de sept jours, reste en gratuit.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 30 octobre 2026 les pages officielles suivantes : documentation Midjourney (comparaison des offres), tarifs et aide de Leonardo (dont la page Commercial Usage), tarifs et FAQ de Krea, formules et FAQ d'Adobe Firefly, tarifs et FAQ d'Ideogram, FAQ et conditions du Créateur d'image Bing, aide des applications Gemini (limites et génération d'images). Les dix captures viennent de ces pages, prises le même jour, sans connexion et sans accepter de cookies.",
        "Le tableau compare ce que les éditeurs écrivent, pas des résultats mesurés. Les informations sur l'essai niji, l'appli mobile de Midjourney, viennent de notre relevé de la documentation Midjourney du 28 octobre 2026. Je développe Imaginode, cité en fin d'article ; ses prix et son offre gratuite viennent de sa page tarifs et de notre fiche produit.",
      ],
      teste: ["La lecture des pages officielles des sept outils, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée dans ces outils pour cet article",
        "Le nombre réel d'images obtenues avec chaque quota gratuit",
        "Le montant des crédits hebdomadaires d'Ideogram, non publié",
        "La qualité comparée des images entre outils",
        "Les applications mobiles",
      ],
      sources: [
        { label: "Midjourney, Comparing Midjourney Plans", href: MJ_PLANS },
        { label: "Leonardo AI, Pricing", href: LEONARDO },
        { label: "Leonardo AI, Commercial Usage", href: "https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage" },
        { label: "Krea, Pricing", href: KREA },
        { label: "Adobe Firefly, formules", href: FIREFLY },
        { label: "Ideogram, Pricing", href: IDEOGRAM },
        { label: "Créateur d'image Bing, FAQ", href: BING_FAQ },
        { label: "Créateur d'image Bing, conditions d'utilisation", href: "https://www.bing.com/new/termsofuseimagecreator" },
        { label: "Aide Gemini, limites des applications", href: GEMINI_LIMITS },
        { label: "Aide Gemini, générer des images", href: GEMINI_IMAGES },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Midjourney est-il gratuit en 2026 ?" },
    {
      type: "p",
      text: "Non. La documentation officielle liste quatre abonnements, de 10 à 120 $ par mois, et aucun plan gratuit sur le site ni sur Discord. Le seul essai mentionné par Midjourney se trouve dans l'application mobile niji.",
    },
    { type: "h3", id: "faq-2", text: "Quelle est la meilleure alternative gratuite à Midjourney ?" },
    {
      type: "p",
      text: "Ça dépend de ce que tu veux apprendre. Pour le volume, Bing Image Creator (15 créations rapides puis jusqu'à 200 requêtes par jour). Pour retoucher et garder un personnage, Gemini avec Nano Banana 2. Pour un usage commercial annoncé clairement, Adobe Firefly. Pour le texte dans l'image, Ideogram. Pour le temps réel, Krea.",
    },
    { type: "h3", id: "faq-3", text: "Peut-on utiliser commercialement les images d'un plan gratuit ?" },
    {
      type: "p",
      text: "Pas partout. Krea réserve sa licence commerciale aux offres payantes. Leonardo rend publiques les images du plan gratuit et garde des droits mondiaux et perpétuels sur les images publiques. Les conditions de Bing Image Creator présentent le service comme destiné au divertissement. Adobe annonce ses modèles Firefly utilisables commercialement, avec une réserve sur les modèles partenaires. Lis toujours les conditions de l'outil avant de vendre une image.",
    },
    { type: "h3", id: "faq-4", text: "Combien d'images gratuites par jour avec Leonardo AI ?" },
    {
      type: "p",
      text: "Le plan Free donne 150 tokens rapides par jour, avec le choix de modèle limité à « Auto » et des créations publiques. Leonardo ne publie pas de coût fixe par image sur sa page tarifs : le nombre d'images dépend du modèle choisi automatiquement et des réglages.",
    },
    { type: "h3", id: "faq-5", text: "Les images faites en gratuit sont-elles privées ?" },
    {
      type: "p",
      text: "Souvent non. Leonardo affiche « Public » pour les créations du plan Free. Chez Ideogram, la génération privée figure dans les avantages de l'offre Plus. Bing conserve les créations 90 jours au maximum et les images importées jusqu'à 30 jours. N'envoie pas de visages ni de documents clients sur un plan gratuit.",
    },
    { type: "h3", id: "faq-6", text: "Stable Diffusion est-il une vraie alternative gratuite ?" },
    {
      type: "p",
      text: "Oui si tu l'installes sur ton propre ordinateur avec une carte graphique suffisante : tu ne paies alors que ton matériel et ton électricité. Les sites qui proposent Stable Diffusion en ligne fonctionnent presque tous avec des crédits, donc ils ne sont pas illimités.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-30 -->
