import type { Article } from "@/lib/types/article";

export const monterVideoIaCapcutDavinci: Article = {
  title: "Monter une vidéo IA dans CapCut ou DaVinci",
  slug: "monter-video-ia-capcut-davinci",
  description:
    "Tes plans IA sont générés, et après ? Voici comment les monter dans CapCut ou DaVinci Resolve : raccords, son, étalonnage, export propre.",
  excerpt:
    "Générer des plans, c'est la moitié du travail. L'autre moitié se joue dans un vrai logiciel de montage. Voici la méthode pour assembler tes plans IA sans que ça sente le patchwork.",
  category: "workflow-creatif",
  tags: ["montage", "capcut", "davinci resolve", "workflow", "vidéo ia"],
  date: "2026-06-25",
  updatedAt: "2026-06-25",
  readingTime: 9,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/monter-video-ia-capcut-davinci.webp",
  imageAlt:
    "Un monteur assemble des plans vidéo sur une timeline dans un logiciel de montage, écran lumineux dans une pièce sombre",
  keywords: [
    "monter une vidéo ia",
    "montage vidéo ia",
    "capcut vidéo ia",
    "davinci resolve ia",
    "assembler plans ia",
  ],
  relatedSlugs: [
    "workflow-ia-creatif",
    "sous-titres-automatiques-ia-video",
    "raccord-continuite-plans-ia",
  ],
  faq: [
    {
      question: "Faut-il forcément un logiciel de montage après l'IA ?",
      answer:
        "Dès que tu as plus d'un plan, oui. Un générateur sort des clips isolés de quelques secondes. Une vidéo qui tient, c'est un enchaînement de plans, un rythme, un son cohérent et un export au bon format. Tout ça se décide au montage, pas à la génération. Tu peux t'en passer pour un seul plan posté brut, mais dès que tu racontes quelque chose, le montage redevient l'étape qui fait la différence entre un test et un livrable.",
    },
    {
      question: "CapCut ou DaVinci Resolve, lequel choisir ?",
      answer:
        "CapCut si tu produis du format court vertical en volume et que tu veux aller vite, avec sous-titres auto et templates réseaux. DaVinci Resolve si tu vises un rendu plus cinéma, un étalonnage sérieux et un montage long. Les deux ont une version gratuite très complète. Le piège, c'est de papillonner entre les deux : choisis-en un, apprends ses raccourcis, et tu gagneras plus de temps que sur n'importe quel changement d'outil.",
    },
    {
      question: "Comment garder un raccord propre entre deux plans IA ?",
      answer:
        "Coupe sur un mouvement, jamais sur un temps mort. Si deux plans jurent, glisse une coupe franche plutôt qu'un fondu, le cerveau accepte mieux une rupture nette qu'un mélange flou. Tu peux aussi masquer une jointure douteuse derrière un mouvement de caméra, un changement d'échelle de plan ou un raccord son. La continuité visuelle d'un plan à l'autre se travaille d'ailleurs dès la génération, pas seulement au montage.",
    },
    {
      question: "Le son généré par l'IA suffit-il, ou faut-il le refaire au montage ?",
      answer:
        "L'audio natif des nouveaux modèles est pratique pour un repérage, mais il sonne souvent générique d'un plan à l'autre. Au montage, pose une seule couche sonore continue (musique ou ambiance) sous toute la séquence : c'est elle qui colle les plans entre eux. Garde les dialogues lip-sync générés si la synchro est bonne, et remplace les bruitages faibles par des sons propres. Le son, c'est 50 % de l'impression de qualité.",
    },
    {
      question: "Faut-il étalonner des plans IA ?",
      answer:
        "Presque toujours, parce que deux plans générés séparément n'ont pas la même teinte ni le même contraste. Un étalonnage minimal, équilibrer l'exposition et harmoniser les couleurs entre plans, suffit à donner une cohérence d'ensemble. DaVinci Resolve est taillé pour ça, mais même un réglage simple dans CapCut aide. Vise la cohérence avant la créativité : mieux vaut une série homogène qu'un plan magnifique au milieu de plans ternes.",
    },
    {
      question: "Quel format d'export pour publier sur les réseaux ?",
      answer:
        "Pour TikTok, Reels et Shorts, exporte en 1080x1920 (vertical 9:16), H.264, autour de 24 ou 30 images par seconde selon tes sources. Garde le débit assez haut pour ne pas écraser les détails que tes plans IA ont mis du temps à produire. Un seul export maître propre, puis tu laisses la plateforme recompresser. Évite d'empiler les ré-exports successifs, chaque passage de compression dégrade un peu plus l'image.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as passé une heure à générer des plans. Ils sont beaux, séparés, et posés en vrac dans un dossier. Et là tu réalises que tu n'as pas une vidéo, tu as une pile de clips de cinq secondes qui ne se parlent pas. C'est le moment que personne ne montre dans les démos.",
    },
    {
      type: "p",
      text: "À la fin de cet article, tu sauras comment passer de cette pile à une vidéo qui tient debout, dans CapCut ou DaVinci Resolve. On parle raccords, son, étalonnage et export, dans l'ordre où on les fait vraiment.",
    },
    {
      type: "p",
      text: "L'angle est simple : la génération produit de la matière, le montage produit le film. Tant que tu sépares les deux étapes dans ta tête, tu arrêtes d'attendre de l'IA un résultat fini, et tu reprends la main là où elle compte.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Core Concepts",
    },
    {
      type: "h3",
      text: "Un générateur sort des plans, pas une séquence",
    },
    {
      type: "p",
      text: "Un modèle vidéo te donne des clips isolés. Chacun a sa lumière, son cadrage, parfois sa dominante de couleur. Mis bout à bout sans travail, ça donne ce patchwork qui sent l'IA à plein nez : des images léchées mais aucune continuité. Le montage existe précisément pour transformer une collection de plans en un enchaînement qui raconte.",
    },
    {
      type: "p",
      text: "C'est exactement la limite qu'on décrit dans [pourquoi tes vidéos IA sont jolies mais vides](/blog/videos-ia-jolies-mais-vides) : sans intention de montage, la belle image ne suffit pas. Le logiciel de montage, c'est l'endroit où tu décides du rythme, de ce qu'on voit et pendant combien de temps.",
    },
    {
      type: "h3",
      text: "CapCut et DaVinci ne jouent pas le même match",
    },
    {
      type: "p",
      text: "CapCut est pensé pour le format court et le réseau social : interface simple, sous-titres automatiques, templates verticaux, export rapide. DaVinci Resolve vient du cinéma : étalonnage de référence, montage multipiste solide, et une version gratuite qui ferait rougir des logiciels payants. L'un te fait gagner du temps sur du vertical, l'autre te donne un contrôle fin sur l'image.",
    },
    {
      type: "p",
      text: "Tu n'as pas besoin des deux pour commencer. Choisis selon ce que tu produis le plus souvent, et apprends-le pour de vrai. La maîtrise d'un outil bat toujours la collection d'outils à moitié connus.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Practical Workflow",
    },
    {
      type: "p",
      text: "Voici l'ordre qui marche, du dossier de clips à la vidéo exportée. Tu peux le suivre à l'identique dans CapCut comme dans DaVinci, seuls les noms de menus changent.",
    },
    {
      type: "table",
      caption: "De la pile de plans IA à la vidéo montée : les étapes",
      headers: ["Étape", "Ce que tu fais", "Pourquoi"],
      rows: [
        ["1. Tri", "Garder les bons plans, jeter les ratés", "Monter le bon, pas tout"],
        ["2. Ours", "Poser les plans dans l'ordre sur la timeline", "Voir si l'histoire tient"],
        ["3. Raccords", "Couper sur le mouvement, ajuster les durées", "Donner du rythme"],
        ["4. Son", "Une couche sonore continue sous la séquence", "Coller les plans entre eux"],
        ["5. Étalonnage", "Harmoniser couleurs et exposition", "Cohérence d'ensemble"],
        ["6. Export", "Un maître propre au bon format", "Préserver la qualité"],
      ],
    },
    {
      type: "ol",
      items: [
        "Importe tous tes plans et regarde-les une fois, sans monter. Repère tes meilleurs, mets de côté les ratés évidents.",
        "Pose un premier ours : tes plans dans l'ordre, sans transition, juste pour sentir si la séquence raconte quelque chose.",
        "Travaille les raccords plan par plan. Coupe sur un mouvement, raccourcis les temps morts, vise le tempo que tu veux donner.",
        "Ajoute une seule couche sonore continue (musique ou ambiance) sous toute la séquence, puis cale les bruitages utiles par-dessus.",
        "Étalonne pour harmoniser : équilibre l'exposition, rapproche les dominantes de couleur d'un plan à l'autre.",
        "Ajoute tes sous-titres si besoin, puis exporte un seul fichier maître au format de ta plateforme.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : avant de fignoler, exporte une version brouillon et regarde-la sur ton téléphone, son coupé. Si la vidéo se comprend sans le son et sans détail, ton montage tient. Si elle s'effondre, c'est le rythme qu'il faut reprendre, pas l'étalonnage. On corrige toujours la structure avant la surface.",
    },
    {
      type: "p",
      text: "Pour les sous-titres, ne les fais pas à la main : la plupart des monteurs les génèrent automatiquement, comme on l'explique dans [ajouter des sous-titres automatiques à une vidéo IA](/blog/sous-titres-automatiques-ia-video). Et si tu veux situer cette étape dans une chaîne complète, de l'idée à la livraison, repars du [workflow créatif IA de bout en bout](/blog/workflow-ia-creatif). Côté logiciel, la version gratuite de [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) reste la référence pour apprendre l'étalonnage sans rien dépenser.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "The Trench Warfare Section",
    },
    {
      type: "h3",
      text: "Erreur 1 : enchaîner les plans sans aucune coupe pensée",
    },
    {
      type: "p",
      text: "Le symptôme : tu poses tes clips bout à bout, chacun joué en entier, et la vidéo traîne. Chaque plan dure ses cinq secondes générées, ni plus ni moins, et l'ensemble est mou.",
    },
    {
      type: "p",
      text: "Fix concret : coupe dans tes plans. Garde la seconde qui sert, jette le reste. Un plan de cinq secondes contient souvent une seconde utile. Le montage, c'est d'abord l'art de retirer.",
    },
    {
      type: "h3",
      text: "Erreur 2 : laisser le son généré tel quel sur chaque plan",
    },
    {
      type: "p",
      text: "Le symptôme : chaque clip a son ambiance audio générée, et au montage on entend les sautes de son à chaque coupe. L'oreille décroche avant l'œil.",
    },
    {
      type: "p",
      text: "Fix concret : coupe l'audio natif des plans, pose une seule piste sonore continue dessous, et ne rajoute que les bruitages qui comptent. La continuité sonore masque la moitié des défauts visuels.",
    },
    {
      type: "h3",
      text: "Erreur 3 : ignorer les écarts de couleur entre plans",
    },
    {
      type: "p",
      text: "Le symptôme : un plan tire vers le bleu, le suivant vers le jaune, et la séquence ressemble à un assemblage de sources différentes. Parce que c'en est un.",
    },
    {
      type: "p",
      text: "Fix concret : un étalonnage minimal d'harmonisation. Choisis un plan de référence, et rapproche les autres de sa teinte et de son contraste. Vise la cohérence avant l'effet, un look homogène vaut mieux qu'un plan spectaculaire isolé.",
    },
    {
      type: "h3",
      text: "Erreur 4 : ré-exporter dix fois et tuer la qualité",
    },
    {
      type: "p",
      text: "Le symptôme : à force de corriger et de ré-exporter, l'image se charge d'artefacts et le texte des sous-titres bave. Chaque compression mange un peu de détail.",
    },
    {
      type: "p",
      text: "Fix concret : travaille jusqu'au bout dans ton projet, et n'exporte le fichier maître qu'une fois. Si tu dois corriger, repars du projet, pas du fichier déjà compressé. Un seul export final, propre, débit suffisant.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions (FAQ)",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Faut-il forcément un logiciel de montage après l'IA ?",
    },
    {
      type: "p",
      text: "Dès que tu as plus d'un plan, oui. Un générateur sort des clips isolés de quelques secondes. Une vidéo qui tient, c'est un enchaînement de plans, un rythme, un son cohérent et un export au bon format. Tout ça se décide au montage, pas à la génération. Tu peux t'en passer pour un seul plan posté brut, mais dès que tu racontes quelque chose, le montage redevient l'étape qui fait la différence entre un test et un livrable.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "CapCut ou DaVinci Resolve, lequel choisir ?",
    },
    {
      type: "p",
      text: "CapCut si tu produis du format court vertical en volume et que tu veux aller vite, avec sous-titres auto et templates réseaux. DaVinci Resolve si tu vises un rendu plus cinéma, un étalonnage sérieux et un montage long. Les deux ont une version gratuite très complète. Le piège, c'est de papillonner entre les deux : choisis-en un, apprends ses raccourcis, et tu gagneras plus de temps que sur n'importe quel changement d'outil.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Comment garder un raccord propre entre deux plans IA ?",
    },
    {
      type: "p",
      text: "Coupe sur un mouvement, jamais sur un temps mort. Si deux plans jurent, glisse une coupe franche plutôt qu'un fondu, le cerveau accepte mieux une rupture nette qu'un mélange flou. Tu peux aussi masquer une jointure douteuse derrière un mouvement de caméra, un changement d'échelle de plan ou un raccord son. La continuité visuelle d'un plan à l'autre se travaille d'ailleurs dès la génération, pas seulement au montage.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Le son généré par l'IA suffit-il, ou faut-il le refaire au montage ?",
    },
    {
      type: "p",
      text: "L'audio natif des nouveaux modèles est pratique pour un repérage, mais il sonne souvent générique d'un plan à l'autre. Au montage, pose une seule couche sonore continue (musique ou ambiance) sous toute la séquence : c'est elle qui colle les plans entre eux. Garde les dialogues lip-sync générés si la synchro est bonne, et remplace les bruitages faibles par des sons propres. Le son, c'est 50 % de l'impression de qualité.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il étalonner des plans IA ?",
    },
    {
      type: "p",
      text: "Presque toujours, parce que deux plans générés séparément n'ont pas la même teinte ni le même contraste. Un étalonnage minimal, équilibrer l'exposition et harmoniser les couleurs entre plans, suffit à donner une cohérence d'ensemble. DaVinci Resolve est taillé pour ça, mais même un réglage simple dans CapCut aide. Vise la cohérence avant la créativité : mieux vaut une série homogène qu'un plan magnifique au milieu de plans ternes.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Quel format d'export pour publier sur les réseaux ?",
    },
    {
      type: "p",
      text: "Pour TikTok, Reels et Shorts, exporte en 1080x1920 (vertical 9:16), H.264, autour de 24 ou 30 images par seconde selon tes sources. Garde le débit assez haut pour ne pas écraser les détails que tes plans IA ont mis du temps à produire. Un seul export maître propre, puis tu laisses la plateforme recompresser. Évite d'empiler les ré-exports successifs, chaque passage de compression dégrade un peu plus l'image.",
    },
    {
      type: "p",
      text: "Le montage, c'est l'étape où tu arrêtes de subir tes générations et où tu redeviens réalisateur de ta vidéo. Si tu veux apprendre à enchaîner génération et montage proprement, sans y passer tes nuits, c'est exactement ce qu'on construit pas à pas dans la [formation IA gratuite](https://www.ai-studios.fr/formation-ia-gratuite-video).",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-25 -->
