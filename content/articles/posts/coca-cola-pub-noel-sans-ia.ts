import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-28";
const IMG = "/images/articles/coca-cola-pub-noel-sans-ia";
const MD = "https://marketingdive.com/news/coca-cola-pivots-from-divisive-ai-generated-ads-for-holiday-campaign/875215";
const FC = "https://www.fastcompany.com/91647554/coca-cola-ditched-the-ai-for-its-new-holiday-ad";
const KO =
  "https://www.coca-colacompany.com/media-center/coca-cola-refreshes-givers-of-the-season-embraces-ai-powered-storytelling-in-global-holiday-campaign.html";

export const cocaColaPubNoelSansIa: Article = {
  title: "Coca-Cola tourne sa pub de Noël sans IA",
  slug: "coca-cola-pub-noel-sans-ia",
  description:
    "Après deux Noëls en IA générative, Coca-Cola revient au tournage réel pour « Enjoy Joy ». Ce que ce virage dit aux créatifs qui font de la pub avec l'IA.",
  excerpt:
    "Deux ans de pubs de Noël générées par IA, deux ans de critiques. Pour 2026, Coca-Cola tourne avec de vrais acteurs, sans fermer la porte à l'IA. Ce que ça change pour ceux qui vendent de la pub IA.",
  category: "business-creatif",
  tags: ["Actualités IA", "publicité ia", "coca-cola", "marques", "transparence"],
  date: "2026-11-28",
  updatedAt: "2026-11-28",
  news: true,
  publishedTime: "11:00",
  readingTime: 4,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/coca-cola-pub-noel-sans-ia.webp",
  imageAlt:
    "Un petit plateau de tournage de publicité dans un salon décoré pour les fêtes, une caméra sur trépied et un projecteur doux face à une table dressée vide, des guirlandes lumineuses floues en arrière-plan",
  keywords: ["pub coca-cola noël ia", "publicité ia", "coca-cola enjoy joy", "pub générée par ia", "marques et ia générative"],
  relatedSlugs: ["creer-publicite-ia", "made-by-humans-label-fait-par-humains", "visuels-publicitaires-ia-convertissent"],
  faq: [
    {
      question: "Coca-Cola a-t-il utilisé l'IA pour sa pub de Noël 2026 ?",
      answer:
        "Non. Une porte-parole a indiqué à Fast Company que les spots « Enjoy Joy » ont été réalisés sans IA générative, avec de vrais acteurs, sous la direction de Monsieur Paul Dektor.",
    },
    {
      question: "Pourquoi ce changement ?",
      answer:
        "Coca-Cola ne le présente pas comme un renoncement. Mais ses pubs de Noël 2024 et 2025, faites en IA générative, ont été très critiquées en ligne, même si la marque dit qu'elles ont dépassé ses objectifs internes.",
    },
    {
      question: "Coca-Cola abandonne-t-il l'IA ?",
      answer:
        "Non. La marque dit que ce choix ne signale pas un changement plus large et que l'IA reste un outil au service des créatifs « quand c'est pertinent ».",
    },
    {
      question: "Qui a fait la campagne ?",
      answer:
        "WPP Open X, sous la conduite d'Ogilvy, selon Marketing Dive. Les films ont été réalisés par Monsieur Paul Dektor et produits par Mayan Productions.",
    },
    {
      question: "La pub IA est-elle morte pour les marques ?",
      answer:
        "Non. Le virage concerne surtout les films de marque très émotionnels. Pour les déclinaisons, les visuels produits ou les tests, l'IA reste utilisée, y compris par Coca-Cola.",
    },
    {
      question: "Je vends de la pub faite avec l'IA, que faire ?",
      answer:
        "Choisis les bons usages, montre la part humaine du travail et parle de ta méthode avant que le client ne te pose la question. C'est ce qui rassure les marques aujourd'hui.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Après deux Noëls en **IA générative**, Coca-Cola revient à un vrai tournage. Sa campagne de fin d'année 2026, **« Enjoy Joy »**, montre de vrais acteurs autour d'un match de foot, d'une dinde et d'un repas en famille. Une porte-parole l'a confirmé à Fast Company : les spots ont été faits **sans IA générative**.",
    },
    {
      type: "p",
      text: "Je m'appuie sur [l'article de Monsieur Chris Kelly pour Marketing Dive](" + MD + "), publié le 19 novembre 2026, sur [l'article de Fast Company](" + FC + ") consacré au même virage, et sur [le communiqué officiel de Coca-Cola pour la campagne 2025](" + KO + "). Je les ai lus le 28 novembre. Fast Company a bloqué notre capture d'écran : je le cite d'après sa lecture.",
    },
    { type: "h2", id: "nouveaute", text: "Ce que Coca-Cola a changé" },
    {
      type: "screenshot",
      src: `${IMG}-marketing-dive.webp`,
      alt: "Article de Marketing Dive du 19 novembre 2026 signé Chris Kelly : Coca-Cola se détourne des pubs générées par IA qui divisaient pour sa campagne des fêtes ; les spots Enjoy Joy font partie d'un dispositif avec contenus sociaux, activations et packaging",
      caption: "L'article de Marketing Dive, capturé le 28 novembre 2026.",
      source: MD,
      capturedAt: CAPTURE,
      width: 780,
      height: 345,
    },
    {
      type: "p",
      text: "Les films ont été réalisés par **Monsieur Paul Dektor** et produits par Mayan Productions, selon Marketing Dive. La campagne a été créée par WPP Open X, sous la conduite d'Ogilvy. Elle tourne en formats de 30, 15 et 6 secondes, à la télé, en streaming et sur les réseaux, avec des contenus de créateurs sur Meta, TikTok, Pinterest et YouTube.",
    },
    {
      type: "screenshot",
      src: `${IMG}-pivot.webp`,
      alt: "Extrait de Marketing Dive : les nouveaux spots se détournent de l'IA générative que la marque avait utilisée pour ses récentes campagnes des fêtes ; la campagne a été créée par WPP Open X sous la conduite d'Ogilvy",
      caption: "Le passage de Marketing Dive sur l'abandon de l'IA générative, capturé le 28 novembre 2026.",
      source: MD,
      capturedAt: CAPTURE,
      width: 610,
      height: 105,
    },
    {
      type: "p",
      text: "La marque ne parle pas de renoncement. « Cela ne signale pas un changement plus large », dit sa porte-parole **Madame Madison Chandler** à Fast Company. Pour elle, les conteurs humains restent au centre, et l'IA sert d'outil « quand c'est pertinent ».",
    },
    { type: "h2", id: "pourquoi", text: "Deux Noëls en IA, deux vagues de critiques" },
    {
      type: "screenshot",
      src: `${IMG}-coca-cola-2025.webp`,
      alt: "Communiqué officiel de The Coca-Cola Company du 3 novembre 2025 : Coca-Cola salue ceux qui font les fêtes et adopte une narration assistée par l'IA pour sa campagne mondiale de Noël",
      caption: "Le communiqué officiel de Coca-Cola pour sa campagne 2025, capturé le 28 novembre 2026.",
      source: KO,
      capturedAt: CAPTURE,
      width: 1230,
      height: 510,
    },
    {
      type: "p",
      text: "En 2024, Coca-Cola refait en IA son spot culte de 1995, « The Holidays Are Coming ». En 2025, il recommence : son communiqué officiel annonce deux nouvelles versions IA, faites avec les studios Secret Level et Silverside AI. Les deux fois, les réseaux sociaux décortiquent les défauts des images.",
    },
    {
      type: "p",
      text: "Le détail qui compte : selon Marketing Dive et Fast Company, ces pubs IA ont **dépassé les objectifs internes** de la marque. Elles ont donc marché sur les chiffres. Et Coca-Cola revient quand même au tournage. Fast Company replace ce choix dans une tendance plus large : Apple, Levi's ou Prada ont aussi misé cette année sur des pubs au rendu artisanal.",
    },
    {
      type: "screenshot",
      src: `${IMG}-schema.webp`,
      alt: "Schéma en trois cartes : en 2024, un classique de 1995 refait en IA générative et critiqué ; en 2025, deux nouvelles versions IA, critiquées mais au-dessus des objectifs internes ; en 2026, retour au tournage avec de vrais acteurs pour Enjoy Joy",
      caption: "Les trois derniers Noëls de Coca-Cola, d'après la marque, Marketing Dive et Fast Company. Schéma AI Studios.",
      source: MD,
      capturedAt: CAPTURE,
      width: 1600,
      height: 622,
    },
    { type: "h2", id: "pour-toi", text: "Ce que ça dit à ceux qui font de la pub avec l'IA" },
    {
      type: "p",
      text: "Ne lis pas ça comme « l'IA est finie en pub ». Lis-le comme : **un film de marque très émotionnel**, celui que tout le monde regarde et commente, est le pire endroit pour une image IA qui se voit. Le public y cherche de la chaleur humaine, et le moindre défaut devient un mème.",
    },
    {
      type: "p",
      text: "Pour le reste, l'IA garde toute sa place : déclinaisons, visuels produit, tests de concepts, versions locales. Mon guide pour [créer une publicité avec l'IA](/blog/creer-publicite-ia) part justement de ces usages-là. Et la question de la transparence rejoint celle du [label Made By Humans](/blog/made-by-humans-label-fait-par-humains) dont je parlais hier : dire comment tu travailles devient un argument.",
    },
    { type: "h2", id: "a-faire", text: "Ce que je ferais maintenant" },
    {
      type: "ul",
      items: [
        "**Sépare les usages dans ton devis.** Ce qui est tourné, ce qui est généré, ce qui est retouché. Le client sait ce qu'il achète.",
        "**Réserve l'IA visible aux formats qui la supportent.** Un style graphique assumé passe mieux qu'un faux réalisme dans un spot émotionnel.",
        "**Garde l'humain au centre de ce qui touche.** Visages, gestes, regards : c'est là que le public repère le généré, et c'est là qu'il juge.",
        "**Prépare la réponse à « c'est de l'IA ? »** avant la diffusion. Une marque déteste découvrir la polémique dans les commentaires.",
      ],
    },
    { type: "h2", id: "limites", text: "Ce qu'on ne sait pas" },
    {
      type: "ul",
      items: [
        "**Si les films tournés performeront mieux** que les versions IA : aucun chiffre n'a été publié.",
        "**Si l'IA a servi ailleurs** dans la campagne, par exemple pour les déclinaisons ou les contenus sociaux.",
        "**Ce que fera Coca-Cola hors des États-Unis** : les articles lus portent sur la campagne américaine.",
      ],
    },
    { type: "h2", id: "avis", text: "Mon avis" },
    {
      type: "p",
      text: "Je trouve ce virage sain. Coca-Cola a testé, mesuré, écouté, et choisi l'outil le plus adapté pour ce film précis. C'est exactement l'attitude que je défends : l'IA n'est ni un dogme ni un tabou, c'est un outil. Si tu vends de la pub IA, ton vrai métier est de savoir quand l'utiliser, et quand ne pas l'utiliser.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Savoir quand utiliser l'IA, et comment",
      text: "Ma formation IA gratuite te montre comment intégrer l'IA à tes projets créatifs, du visuel produit à la vidéo, sans perdre la main.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Article écrit le 28 novembre 2026 à partir de l'article de Monsieur Chris Kelly pour Marketing Dive (19 novembre 2026), de l'article de Fast Company sur le même virage et du communiqué officiel de Coca-Cola pour la campagne 2025, lus le 28 novembre.",
        "La campagne a été lancée le 19 novembre : elle date d'un peu plus d'une semaine, mais le sujet a été relancé par la presse spécialisée ces derniers jours. Fast Company a bloqué notre capture automatique.",
      ],
      teste: ["La lecture de Marketing Dive, de Fast Company et du communiqué officiel de Coca-Cola de 2025"],
      nonTeste: ["Les spots eux-mêmes n'ont pas été analysés image par image"],
      sources: [
        { label: "Marketing Dive, Coca-Cola pivots from divisive AI-generated ads for holiday campaign (Chris Kelly), 19/11/2026", href: MD },
        { label: "Fast Company, Coca-Cola ditched the AI for its new holiday ad, novembre 2026", href: FC },
        { label: "The Coca-Cola Company, communiqué de la campagne de Noël 2025, 03/11/2025", href: KO },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-28 -->
