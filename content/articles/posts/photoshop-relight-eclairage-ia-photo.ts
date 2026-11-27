import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-14";
const IMG = "/images/articles/photoshop-relight-eclairage-ia-photo";
const AR = "https://research.adobe.com/news/decades-in-the-making-how-adobe-research-brought-relight-to-photoshop/";
const HX = "https://helpx.adobe.com/photoshop/desktop/repair-retouch/clean-restore-images/relight-images-with-interactive-lighting-controls.html";

export const photoshopRelightEclairageIaPhoto: Article = {
  title: "Relight dans Photoshop : refaire la lumière d'une photo",
  slug: "photoshop-relight-eclairage-ia-photo",
  description:
    "Relight arrive dans Photoshop : jusqu'à trois lumières placées à la main sur une photo, sans prompt. Comment ça marche, ce que ça coûte et à quoi ça sert.",
  excerpt:
    "Adobe a sorti Relight dans Photoshop : tu places jusqu'à trois sources de lumière sur une photo déjà prise, et l'IA recalcule l'éclairage. Pas de prompt, un calque à part, 30 crédits. Voici comment t'en servir sans abîmer tes images.",
  category: "actualites-ia",
  tags: ["Actualités IA", "photoshop", "relight", "éclairage", "retouche photo", "adobe"],
  date: "2026-11-14",
  updatedAt: "2026-11-14",
  news: true,
  publishedTime: "10:00",
  readingTime: 5,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/photoshop-relight-eclairage-ia-photo.webp",
  imageAlt:
    "Une photographe d'une trentaine d'années retouche un portrait dans son petit studio le soir, son écran montrant le même visage deux fois, en lumière plate puis éclairé de côté par une lumière chaude, une boîte à lumière et un appareil photo sur trépied derrière elle",
  keywords: ["relight photoshop", "changer éclairage photo ia", "photoshop ia lumière", "rééclairer une photo", "adobe relight"],
  relatedSlugs: ["lumiere-cinema-ambiances-images-ia", "decrire-lumiere-prompt-ia", "inpainting-ia-retoucher-image"],
  faq: [
    {
      question: "Qu'est-ce que Relight dans Photoshop ?",
      answer:
        "C'est une fonction de Photoshop qui recalcule l'éclairage d'une photo existante. Tu places jusqu'à trois sources de lumière sur l'image et tu règles leur couleur, leur intensité et leur diffusion. L'IA générative d'Adobe produit la nouvelle lumière sur un calque à part.",
    },
    {
      question: "Comment ouvrir Relight ?",
      answer:
        "Sélectionne un calque de pixels, un calque Rotate Object ou un objet dynamique non verrouillé, puis Calque > Nouveau calque Relight. La commande existe aussi dans le menu du panneau Calques et dans le menu contextuel du calque, d'après l'aide d'Adobe.",
    },
    {
      question: "Combien coûte Relight ?",
      answer:
        "Chaque rendu final coûte 30 crédits génératifs et demande une connexion internet, d'après l'aide de Photoshop mise à jour le 10 novembre 2026. L'aperçu pendant les réglages est en basse résolution.",
    },
    {
      question: "Est-ce que Relight abîme la photo d'origine ?",
      answer:
        "Non. Photoshop crée un calque Relight séparé et laisse l'image d'origine intacte sur son propre calque. Tu peux rouvrir le calque Relight plus tard pour changer les lumières.",
    },
    {
      question: "Faut-il écrire un prompt ?",
      answer:
        "Non. Adobe a fait le choix inverse : tu places les lumières à la main sur l'image et tu ajustes jusqu'à obtenir l'effet voulu, sans décrire le résultat en texte.",
    },
    {
      question: "À quoi sert Relight pour un créateur ?",
      answer:
        "À harmoniser la lumière de plusieurs photos d'une même série, à rattraper un portrait mal éclairé, ou à donner une ambiance à une image avant de l'animer en vidéo. Il ne remplace pas un bon éclairage à la prise de vue.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as une photo réussie, mais la lumière est plate. Jusqu'ici, tu avais deux options : la refaire, ou passer une heure à peindre des ombres. Adobe vient d'ajouter une troisième option dans Photoshop : **Relight**, qui recalcule l'éclairage d'une photo déjà prise à partir de lumières que tu places toi-même.",
    },
    {
      type: "p",
      text: "La fonction est arrivée avec Adobe MAX, le **10 novembre 2026**. Voici comment elle marche, ce qu'elle coûte, et à quoi elle peut te servir dans tes projets.",
    },
    {
      type: "screenshot",
      src: `${IMG}-adobe-research.webp`,
      alt: "Article d'Adobe Research du 10 novembre 2026 : Decades in the making, How Adobe Research brought Relight to Photoshop, avec le début du texte et une vidéo de présentation de Relight sur un portrait",
      caption: "L'article d'Adobe Research sur Relight.",
      source: AR,
      capturedAt: CAPTURE,
      width: 900,
      height: 597,
    },
    { type: "h2", id: "annonce", text: "Ce qu'Adobe a sorti" },
    {
      type: "p",
      text: "D'après [l'article d'Adobe Research](" + AR + "), Relight vient d'une démonstration de recherche présentée un an plus tôt, à Adobe MAX 2025, sous le nom de Project LightTouch. L'équipe de Kalyan Sunkavalli et Zhixin Shu travaille sur le rééclairage de photos depuis des années, avec un problème connu : la lumière touche toute l'image, et sur un visage, la moindre erreur saute aux yeux.",
    },
    {
      type: "p",
      text: "[L'aide de Photoshop](" + HX + ") détaille le fonctionnement :",
    },
    {
      type: "ul",
      items: [
        "**Jusqu'à trois sources de lumière** par image, que tu déplaces directement sur la photo, ou même en dehors du cadre.",
        "**Trois réglages par lumière** : couleur, intensité, diffusion.",
        "**Les lumières existantes sont détectées** et prises en compte pour le nouvel éclairage.",
        "**Un calque Relight à part** : l'image d'origine reste intacte en dessous, et tu peux revenir modifier les lumières plus tard.",
        "**Un aperçu en basse résolution** pendant les réglages, puis le rendu final à la résolution de départ quand tu valides.",
        "**30 crédits génératifs** par rendu, avec une connexion internet obligatoire.",
      ],
    },
    {
      type: "screenshot",
      src: `${IMG}-relight-controle.webp`,
      alt: "Extrait de l'article d'Adobe Research : les équipes voulaient laisser les créateurs prendre leurs propres décisions d'éclairage ; dans Photoshop, on place des sources de lumière virtuelles dans une photo, on les déplace et on règle leurs propriétés au lieu de décrire le résultat dans un prompt",
      caption: "Le choix d'Adobe : des lumières à placer, pas un prompt.",
      source: AR,
      capturedAt: CAPTURE,
      width: 900,
      height: 165,
    },
    { type: "h2", id: "pas-de-prompt", text: "Pourquoi pas de prompt, et pourquoi c'est une bonne idée" },
    {
      type: "p",
      text: "On croit souvent que l'IA d'image, c'est forcément écrire un prompt. Pour la lumière, c'est une mauvaise interface. « Une lumière douce venant de la gauche, un peu au-dessus » donne dix résultats différents. Une source posée à un endroit précis de l'image n'en donne qu'un.",
    },
    {
      type: "p",
      text: "Adobe raconte aussi un détail utile : les premiers testeurs voyaient de petites différences entre l'aperçu et l'image finale. L'équipe a retravaillé le modèle pour que les deux correspondent. C'est exactement ce que tu attends d'un outil de retouche : ce que tu règles est ce que tu obtiens.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois gestes pour utiliser Relight dans Photoshop : créer un calque Relight qui laisse l'image d'origine intacte, placer jusqu'à trois lumières et régler couleur, intensité et diffusion avec un aperçu basse résolution, puis valider pour un rendu à la résolution de départ qui coûte 30 crédits génératifs",
      caption: "Relight en trois gestes, d'après l'aide de Photoshop. Schéma AI Studios.",
      source: HX,
      capturedAt: CAPTURE,
      width: 1600,
      height: 583,
    },
    { type: "h2", id: "usages", text: "À quoi ça te sert concrètement" },
    {
      type: "ul",
      items: [
        "**Harmoniser une série.** Tu as dix photos produit prises à des heures différentes. Une même lumière clé, au même endroit, et la série paraît shootée le même jour.",
        "**Rattraper un portrait.** Un visage éclairé de face, sans relief : une lumière latérale chaude et une diffusion douce suffisent souvent.",
        "**Préparer une image avant de l'animer.** La lumière d'une image de départ se retrouve dans la vidéo générée. Mieux vaut la régler avant que d'espérer que le modèle vidéo la corrige.",
        "**Tester une ambiance avant un shooting.** Tu montres au client deux éclairages sur une photo test, et vous décidez ensemble avant d'installer le matériel.",
      ],
    },
    {
      type: "p",
      text: "Pour parler de lumière avec les bons mots, mon guide sur [les ambiances de lumière au cinéma](/blog/lumiere-cinema-ambiances-images-ia) reste la base. Et si tu génères tes images de zéro, relis [comment décrire la lumière dans un prompt](/blog/decrire-lumiere-prompt-ia) : Relight corrige après coup, le prompt évite d'avoir à corriger.",
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**La qualité sur des scènes complexes.** Les exemples d'Adobe sont surtout des portraits. Une pièce avec plusieurs sources et des reflets reste à tester.",
        "**Le coût réel à l'usage.** 30 crédits par rendu, c'est simple à compter, mais le nombre de crédits inclus dépend de ton abonnement Adobe.",
        "**La place dans les autres logiciels Adobe.** L'article parle de Photoshop uniquement.",
        "**Ce que vaut l'outil face à une vraie lumière.** Il ne remplace pas un éclairage bien fait à la prise de vue, surtout pour un client exigeant.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Relight va dans le bon sens : rendre le contrôle au créateur au lieu de lui faire deviner le bon prompt. Pour un photographe ou un créateur qui livre des séries, harmoniser la lumière de dix images en quelques minutes, c'est un vrai gain. Mais garde-le pour corriger et ajuster. Une photo bien éclairée au départ restera toujours plus juste qu'une photo rattrapée.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à maîtriser la lumière en IA",
      text: "Ma formation IA gratuite te montre comment créer des images et des vidéos cohérentes, de l'idée au rendu final.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 14 novembre 2026 à partir de l'article d'Adobe Research du 10 novembre 2026 et de la page d'aide de Photoshop sur Relight, mise à jour le 10 novembre, lus le 14 novembre. Les captures viennent de l'article d'Adobe Research.",
        "Je n'ai pas encore testé Relight. Les réglages et le coût en crédits sont ceux indiqués par Adobe.",
      ],
      teste: ["La lecture de l'article d'Adobe Research et de l'aide de Photoshop"],
      nonTeste: ["Relight lui-même", "Son rendu sur des scènes complexes"],
      sources: [
        { label: "Adobe Research, Decades in the making: How Adobe Research brought Relight to Photoshop, 10/11/2026", href: AR },
        { label: "Aide Adobe Photoshop, Relight images with interactive lighting controls, mise à jour le 10/11/2026", href: HX },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-14 -->
