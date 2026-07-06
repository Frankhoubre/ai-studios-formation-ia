import type { Article } from "@/lib/types/article";

export const pourquoiVideosIaAirFaux: Article = {
  title: "Pourquoi tes vidéos IA ont l'air faux (et comment corriger)",
  slug: "pourquoi-videos-ia-air-faux",
  description:
    "Morphing, peau plastique, mouvements trop lisses : voilà pourquoi tes vidéos IA ont l'air fausses, et la méthode concrète pour les rendre crédibles.",
  excerpt:
    "Ton plan vidéo IA sonne faux et tu ne sais pas dire pourquoi. On passe en revue les signaux qui trahissent l'IA, et surtout la méthode pour les gommer, du prompt au montage.",
  category: "ia-video",
  tags: ["vidéo ia", "réalisme", "qualité", "post-production", "méthode"],
  date: "2026-07-06",
  updatedAt: "2026-07-06",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/pourquoi-videos-ia-air-faux.webp",
  imageAlt:
    "Comparaison côte à côte de deux plans vidéo, l'un au rendu plastique et lisse, l'autre crédible avec grain et lumière naturelle",
  keywords: [
    "vidéo ia réaliste",
    "vidéo ia air faux",
    "améliorer vidéo ia",
    "défauts vidéo ia",
    "vidéo ia crédible",
  ],
  relatedSlugs: [
    "videos-ia-jolies-mais-vides",
    "meilleurs-outils-ia-video",
    "raccord-continuite-plans-ia",
  ],
  faq: [
    {
      question: "Pourquoi mes vidéos IA ont-elles l'air fausses ?",
      answer:
        "Presque toujours pour une combinaison de trois raisons : un mouvement trop lisse et sans poids, un rendu trop propre (peau plastique, zéro grain, lumière parfaite) et des incohérences dans le temps (un visage ou un objet qui change entre deux instants). Ton oeil repère ces signaux même sans savoir les nommer. La bonne nouvelle, c'est que chacun se corrige, en partie au prompt et en partie au montage.",
    },
    {
      question: "C'est quoi la vallée dérangeante en vidéo ?",
      answer:
        "C'est ce malaise qu'on ressent devant une image presque humaine, mais pas tout à fait. En vidéo, c'est pire qu'en photo, parce que le mouvement ajoute des occasions de trahir l'illusion : un clignement d'yeux bizarre, une bouche mal synchronisée, une démarche qui flotte. Plus c'est réaliste, plus le moindre défaut saute aux yeux. D'où l'intérêt parfois d'assumer un style plutôt que de viser le photoréalisme total.",
    },
    {
      question: "Faut-il corriger au prompt ou au montage ?",
      answer:
        "Les deux, et dans cet ordre. Au prompt, tu décris une vraie caméra, une vraie lumière et un mouvement simple, ce qui réduit les défauts à la source. Au montage, tu ajoutes ce que l'IA oublie : un grain léger, un flou de mouvement, un étalonnage, parfois un ralenti pour lisser une trajectoire. Le prompt limite la casse, le montage fait le réalisme final. Aucun des deux ne suffit seul.",
    },
    {
      question: "Pourquoi la peau a-t-elle un aspect plastique ?",
      answer:
        "Parce que beaucoup de modèles sur-lissent les surfaces : ils effacent les pores, les micro-défauts et le grain qui rendent une peau vivante. Le résultat est net mais mort. Le remède tient en deux gestes : demander explicitement une peau texturée, des imperfections et une lumière naturelle dans le prompt, puis réintroduire un grain fin en post. Un vrai visage n'est jamais parfaitement lisse.",
    },
    {
      question: "Les plans courts aident-ils au réalisme ?",
      answer:
        "Beaucoup. Plus un plan dure, plus le modèle a d'occasions de dériver : le visage change, la physique lâche, un objet se déforme. En restant sur des plans de 3 à 5 secondes et en coupant au bon moment, tu ne montres que la partie où l'illusion tient. Le montage devient ton meilleur allié : il cache les faiblesses au lieu de les étaler.",
    },
    {
      question: "Le photoréalisme est-il toujours le bon objectif ?",
      answer:
        "Non. Viser le photoréalisme absolu, c'est se placer sur le terrain où l'IA a le plus de chances d'échouer. Un rendu stylisé, illustratif ou légèrement cinématique pardonne beaucoup plus les défauts, parce que le spectateur n'attend pas la perfection d'un vrai tournage. Choisir un style, c'est souvent le raccourci le plus malin vers une vidéo qui tient debout.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu regardes ton plan vidéo IA et quelque chose cloche. C'est net, c'est bien éclairé, et pourtant ça sonne faux. Tu n'arrives même pas à dire pourquoi, mais ton oeil, lui, a déjà décidé que ce n'était pas réel.",
    },
    {
      type: "p",
      text: "Ce n'est pas une fatalité, ni une question de budget. C'est une question de signaux : quelques défauts précis trahissent l'IA, et la plupart se corrigent. À la fin de cet article, tu sauras les repérer un par un et tu auras une méthode concrète pour les gommer, du prompt jusqu'au montage.",
    },
    {
      type: "p",
      text: "Attention, on parle ici du rendu qui trahit l'IA, pas du fond. Le problème d'une vidéo belle mais creuse, on l'a traité dans [pourquoi tes vidéos IA sont jolies mais vides](/blog/videos-ia-jolies-mais-vides). Ici, c'est l'inverse : l'intention est là, mais la surface te dénonce.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "D'où vient cette impression de faux",
    },
    {
      type: "h3",
      text: "L'oeil repère le mouvement avant l'image",
    },
    {
      type: "p",
      text: "Une image fixe, on la pardonne facilement. Le mouvement, non. Notre cerveau a passé des millions d'années à lire la démarche, le poids d'un objet qui tombe, la façon dont un tissu suit un geste. Quand un modèle vidéo se trompe là-dessus, on le sent immédiatement.",
    },
    {
      type: "p",
      text: "Les fautes classiques : un personnage qui glisse au lieu de marcher, un objet sans poids, un mouvement de caméra trop fluide et mécanique, ou pire, du morphing, quand un détail se transforme en douce entre deux instants. Aucun humain ne bouge comme ça, et l'illusion casse. Le mouvement est le premier endroit à surveiller.",
    },
    {
      type: "h3",
      text: "La vallée dérangeante, version vidéo",
    },
    {
      type: "p",
      text: "Plus une image se rapproche du réel sans l'atteindre, plus elle met mal à l'aise. C'est la vallée dérangeante, décrite depuis longtemps en robotique et en 3D. En vidéo IA, elle est brutale, parce que chaque seconde de mouvement ajoute une occasion de trahir l'illusion.",
    },
    {
      type: "p",
      text: "La leçon est contre-intuitive : viser le photoréalisme parfait, c'est parfois se tirer une balle dans le pied. Un rendu légèrement stylisé ou cinématique passe souvent mieux qu'un quasi-réel raté. Pour creuser le phénomène, la fiche [vallée dérangeante sur Wikipédia](https://fr.wikipedia.org/wiki/Vall%C3%A9e_d%C3%A9rangeante) est un bon point de départ.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "La méthode pour rendre un plan crédible",
    },
    {
      type: "p",
      text: "Le réalisme se joue à deux endroits : ce que tu demandes au modèle, et ce que tu corriges après. Voici les symptômes les plus fréquents, leur cause, et le geste qui les répare.",
    },
    {
      type: "table",
      caption: "Signaux de faux et corrections",
      headers: ["Symptôme", "Cause probable", "Correction"],
      rows: [
        ["Peau plastique, trop lisse", "Sur-lissage du modèle", "Demander texture et imperfections, ajouter du grain en post"],
        ["Personnage qui glisse", "Mauvaise physique de marche", "Plan plus court, ralenti léger, flou de mouvement"],
        ["Image trop propre, irréelle", "Zéro grain, lumière parfaite", "Grain fin, légère aberration, étalonnage moins net"],
        ["Morphing d'un détail", "Incohérence temporelle", "Raccourcir le plan, couper avant la dérive"],
        ["Mouvement de caméra robotique", "Trajectoire trop parfaite", "Prompt de caméra à l'épaule, léger tremblement"],
      ],
    },
    {
      type: "p",
      text: "Une fois les symptômes identifiés, voici l'ordre dans lequel je m'y prends sur un plan.",
    },
    {
      type: "ol",
      items: [
        "Au prompt, décris une vraie caméra et une vraie optique (35mm, caméra à l'épaule, lumière naturelle) plutôt qu'un rendu abstrait.",
        "Demande explicitement des imperfections : grain léger, texture de peau, ombres réalistes.",
        "Garde le mouvement simple et le plan court, entre 3 et 5 secondes, pour limiter la dérive.",
        "Génère plusieurs variantes et garde celle où la physique et le visage tiennent le mieux.",
        "En post, ajoute un grain fin, un flou de mouvement et un étalonnage pour casser l'aspect trop propre.",
        "Si un mouvement flotte, un léger ralenti ou une accélération douce peut le rendre plus crédible.",
      ],
    },
    {
      type: "p",
      text: "Partir d'une image de départ solide aide énormément, parce que tu contrôles déjà la lumière et la composition avant l'animation. C'est tout l'intérêt de la [méthode image vers vidéo](/blog/image-to-video-ia-methode). Et pour que ta lumière ne te trahisse pas, soigne-la dès le prompt avec [ce guide pour décrire la lumière](/blog/decrire-lumiere-prompt-ia).",
    },
    {
      type: "p",
      text: "> Pro Tip : ajoute toujours un grain léger et un vrai flou de mouvement en post, même minimes. C'est le geste le plus rentable pour tuer l'aspect numérique. L'IA sort des images trop propres, et le trop propre, c'est exactement ce que l'oeil lit comme faux.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les erreurs qui plombent ton réalisme",
    },
    {
      type: "h3",
      text: "Erreur 1 : viser le photoréalisme à tout prix",
    },
    {
      type: "p",
      text: "Tu veux du vrai de vrai, alors tu pousses le curseur au maximum, et chaque défaut ressort davantage. Le réel est le terrain le plus exigeant pour un modèle.",
    },
    {
      type: "p",
      text: "Fix concret : choisis un style qui pardonne. Un rendu cinématique, un peu contrasté, légèrement grainé, cache mille défauts qu'un plan clinique exposerait. Décide de ton style avant de générer, pas après.",
    },
    {
      type: "h3",
      text: "Erreur 2 : des plans trop longs",
    },
    {
      type: "p",
      text: "Tu demandes dix secondes d'un seul mouvement complexe, et à la septième seconde le visage a changé et la main a fondu. Plus c'est long, plus ça dérive.",
    },
    {
      type: "p",
      text: "Fix concret : pense en plans courts et en coupes. Trois secondes qui tiennent valent mieux que dix qui s'effondrent. Le montage n'est pas un pis-aller, c'est là que tu caches les faiblesses. On en parle dans [gérer les raccords et la continuité](/blog/raccord-continuite-plans-ia).",
    },
    {
      type: "h3",
      text: "Erreur 3 : livrer la sortie brute du modèle",
    },
    {
      type: "p",
      text: "Tu exportes directement ce que crache l'outil, sans passer par une timeline. Résultat : une image trop propre, sans grain, sans étalonnage, qui sent le généré à plein nez.",
    },
    {
      type: "p",
      text: "Fix concret : impose-toi une passe de finition systématique. Grain, flou de mouvement, colorimétrie, léger vignettage. Cinq minutes de post suffisent souvent à faire passer un plan de faux à crédible.",
    },
    {
      type: "h3",
      text: "Erreur 4 : ignorer la lumière et la physique",
    },
    {
      type: "p",
      text: "Ombres qui ne tombent pas au bon endroit, reflets incohérents, objet qui ne pèse rien : ce sont des détails, mais l'oeil les additionne et conclut au faux.",
    },
    {
      type: "p",
      text: "Fix concret : décris une source de lumière précise dans ton prompt et vérifie la cohérence des ombres sur chaque plan. Pour la physique, préfère des mouvements simples et lisibles à des cascades que le modèle ne sait pas encore rendre proprement.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions (FAQ)",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Pourquoi mes vidéos IA ont-elles l'air fausses ?",
    },
    {
      type: "p",
      text: "Presque toujours pour une combinaison de trois raisons : un mouvement trop lisse et sans poids, un rendu trop propre (peau plastique, zéro grain, lumière parfaite) et des incohérences dans le temps (un visage ou un objet qui change entre deux instants). Ton oeil repère ces signaux même sans savoir les nommer. La bonne nouvelle, c'est que chacun se corrige, en partie au prompt et en partie au montage.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "C'est quoi la vallée dérangeante en vidéo ?",
    },
    {
      type: "p",
      text: "C'est ce malaise qu'on ressent devant une image presque humaine, mais pas tout à fait. En vidéo, c'est pire qu'en photo, parce que le mouvement ajoute des occasions de trahir l'illusion : un clignement d'yeux bizarre, une bouche mal synchronisée, une démarche qui flotte. Plus c'est réaliste, plus le moindre défaut saute aux yeux. D'où l'intérêt parfois d'assumer un style plutôt que de viser le photoréalisme total.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Faut-il corriger au prompt ou au montage ?",
    },
    {
      type: "p",
      text: "Les deux, et dans cet ordre. Au prompt, tu décris une vraie caméra, une vraie lumière et un mouvement simple, ce qui réduit les défauts à la source. Au montage, tu ajoutes ce que l'IA oublie : un grain léger, un flou de mouvement, un étalonnage, parfois un ralenti pour lisser une trajectoire. Le prompt limite la casse, le montage fait le réalisme final. Aucun des deux ne suffit seul.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Pourquoi la peau a-t-elle un aspect plastique ?",
    },
    {
      type: "p",
      text: "Parce que beaucoup de modèles sur-lissent les surfaces : ils effacent les pores, les micro-défauts et le grain qui rendent une peau vivante. Le résultat est net mais mort. Le remède tient en deux gestes : demander explicitement une peau texturée, des imperfections et une lumière naturelle dans le prompt, puis réintroduire un grain fin en post. Un vrai visage n'est jamais parfaitement lisse.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Les plans courts aident-ils au réalisme ?",
    },
    {
      type: "p",
      text: "Beaucoup. Plus un plan dure, plus le modèle a d'occasions de dériver : le visage change, la physique lâche, un objet se déforme. En restant sur des plans de 3 à 5 secondes et en coupant au bon moment, tu ne montres que la partie où l'illusion tient. Le montage devient ton meilleur allié : il cache les faiblesses au lieu de les étaler.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Le photoréalisme est-il toujours le bon objectif ?",
    },
    {
      type: "p",
      text: "Non. Viser le photoréalisme absolu, c'est se placer sur le terrain où l'IA a le plus de chances d'échouer. Un rendu stylisé, illustratif ou légèrement cinématique pardonne beaucoup plus les défauts, parce que le spectateur n'attend pas la perfection d'un vrai tournage. Choisir un style, c'est souvent le raccourci le plus malin vers une vidéo qui tient debout.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-07-06 -->
