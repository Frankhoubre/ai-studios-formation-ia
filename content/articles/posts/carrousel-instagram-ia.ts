import type { Article } from "@/lib/types/article";

export const carrouselInstagramIa: Article = {
  title: "Carrousel Instagram avec l'IA : la méthode en 7 étapes",
  slug: "carrousel-instagram-ia",
  description:
    "Découpage écrit par l'IA, visuels cohérents, texte posé à la main, limite de 10 slides en programmation : la méthode complète pour un carrousel Instagram IA.",
  excerpt:
    "Un carrousel qui marche se lit comme une petite histoire, slide après slide. L'IA écrit le découpage et fabrique les images, toi tu poses le texte et tu soignes la slide 2, celle qu'Instagram remontre aux gens qui n'ont pas swipé.",
  category: "workflow-creatif",
  tags: ["instagram", "carrousel", "réseaux sociaux", "contenu ia", "storytelling"],
  date: "2026-10-11",
  updatedAt: "2026-10-11",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/carrousel-instagram-ia.webp",
  imageAlt:
    "Dans une petite boutique de fleurs un soir de pluie, une fleuriste en tablier de toile aligne une rangée de cartes imprimées au format portrait sur un comptoir en zinc, pendant qu'un jeune assistant vérifie l'ordre des cartes sur son smartphone, entouré de seaux de renoncules et d'eucalyptus",
  keywords: [
    "carrousel instagram ia",
    "créer un carrousel instagram",
    "carrousel instagram storytelling",
    "format carrousel instagram",
    "prompt carrousel instagram",
  ],
  relatedSlugs: [
    "visuels-reseaux-sociaux-ia-mois",
    "ia-community-manager",
    "batch-produire-visuels-coherents-serie",
  ],
  faq: [
    {
      question: "Combien de slides peut contenir un carrousel Instagram ?",
      answer:
        "Jusqu'à 20 photos ou vidéos quand tu publies depuis l'application, depuis l'extension annoncée en août 2024. Si tu passes par un outil de programmation branché sur l'API officielle de Meta, la limite reste à 10 éléments par carrousel. Vérifie ton outil avant de monter un carrousel de 15 slides que tu ne pourras pas programmer.",
    },
    {
      question: "Quel format choisir pour un carrousel Instagram ?",
      answer:
        "Le format portrait 4:5, en 1080 x 1350 pixels, est le choix le plus sûr : il prend plus de place dans le fil qu'un carré. Toutes les slides doivent avoir le même format, car Instagram recadre l'ensemble du carrousel sur le format de la première image. Une slide en 16:9 au milieu d'un carrousel portrait sera coupée.",
    },
    {
      question: "L'IA peut-elle écrire le texte directement dans les images du carrousel ?",
      answer:
        "Elle peut, mais je le déconseille pour le corps du texte. Les générateurs d'images gèrent mieux un titre court qu'un paragraphe de trois lignes, et une faute dans une image oblige à tout régénérer. Fais générer des visuels sans texte, puis pose tes phrases dans Canva, Figma ou ton outil de mise en page habituel.",
    },
    {
      question: "Pourquoi la deuxième slide d'un carrousel est-elle si importante ?",
      answer:
        "Parce qu'Instagram la montre parfois à la place de la première. Adam Mosseri, patron d'Instagram, a expliqué en octobre 2024 que quand quelqu'un voit un carrousel sans swiper, la plateforme lui donne souvent une seconde chance en affichant directement le deuxième élément. Ta slide 2 doit donc accrocher seule, sans dépendre de la couverture.",
    },
    {
      question: "Faut-il déclarer un carrousel fait avec l'IA sur Instagram ?",
      answer:
        "Meta affiche un libellé « AI info » sur les contenus qu'il détecte comme générés par IA, notamment grâce aux indicateurs standards que certains outils intègrent dans leurs fichiers. Si tes slides sont des images photoréalistes générées, active toi-même l'étiquette IA à la publication : c'est plus honnête et ça t'évite une étiquette posée d'office.",
    },
    {
      question: "Combien de temps faut-il pour produire un carrousel avec l'IA ?",
      answer:
        "Ça dépend surtout du nombre d'allers-retours sur les visuels. Avec un gabarit de mise en page déjà prêt et une image de référence de style, le découpage et le texte se font vite ; c'est la cohérence des images d'une slide à l'autre qui prend du temps. Le premier carrousel est toujours le plus long, parce que c'est lui qui crée le gabarit.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as demandé un carrousel à une IA, elle t'a rendu dix slides. Le titre de la première, une liste à puces coupée en morceaux, une jolie image par case, et personne ne dépasse la slide 3. Les images vont très bien. C'est le découpage qui cloche : on a coupé un document en dix, alors qu'un carrousel se raconte.",
    },
    {
      type: "p",
      text: "Je te montre ici la méthode que j'utilise pour monter un carrousel Instagram avec l'IA : le découpage slide par slide écrit avec un assistant, les visuels générés en série sans que le style dérive, le texte posé à la main, puis les contraintes techniques qui cassent un carrousel au moment de le programmer. Tu repars avec un tableau de rôles pour chaque slide et un prompt de découpage à copier.",
    },
    {
      type: "p",
      text: "Ma règle de départ : **l'IA écrit le découpage et fabrique les images, toi tu poses le texte.** Et tu passes autant de temps sur la slide 2 que sur la couverture, parce qu'Instagram la montre parfois en premier.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Un carrousel Instagram se lit comme un récit en cases",
    },
    {
      type: "p",
      text: "Pense bande dessinée plutôt que diaporama de réunion. Chaque swipe doit donner une raison de faire le suivant : une question posée, une promesse tenue à moitié, un « avant » qui appelle son « après ». Si une slide peut être retirée sans que personne ne le remarque, elle ne sert à rien.",
    },
    {
      type: "h3",
      id: "slide-2-deuxieme-couverture",
      text: "La slide 2 est ta deuxième couverture",
    },
    {
      type: "p",
      text: "En octobre 2024, Adam Mosseri, le patron d'Instagram, a expliqué que les carrousels obtiennent en moyenne plus de portée parce qu'ils génèrent plus d'interactions. Il a ajouté un détail que [Social Media Today a relayé](https://www.socialmediatoday.com/news/ig-chief-recommends-posting-carousels-to-improve-reach/730232/) : quand quelqu'un voit un carrousel sans swiper, Instagram lui redonne souvent une chance en affichant directement le deuxième élément.",
    },
    {
      type: "p",
      text: "Conséquence pratique : une partie de ton audience découvrira ton carrousel par la slide 2. Si elle commence par « Étape 1 : ouvre l'application », c'est perdu. **La slide 2 doit accrocher seule**, avec sa propre phrase forte et une image qui donne envie de revenir en arrière ou d'aller plus loin.",
    },
    {
      type: "h3",
      id: "texte-a-la-main",
      text: "Pourquoi le texte se pose hors du générateur d'images",
    },
    {
      type: "p",
      text: "Les générateurs d'images savent écrire un titre court, mais un paragraphe de trois lignes reste un pari, et une seule faute oblige à régénérer toute l'image. Pour un mot affiché en gros, un modèle spécialisé dans la typographie fait l'affaire, et j'explique comment dans l'article sur [le texte lisible dans les images IA](/blog/ideogram-texte-lisible-images-ia). Pour tout le reste, génère des visuels sans texte et écris par-dessus dans ton outil de mise en page. Tu gardes la main sur chaque virgule et tu corriges en dix secondes.",
    },
    {
      type: "h3",
      id: "contraintes-techniques",
      text: "Les contraintes techniques à connaître avant de commencer",
    },
    {
      type: "p",
      text: "Depuis août 2024, [l'application Instagram accepte jusqu'à 20 photos ou vidéos par publication](https://9to5mac.com/2024/08/08/instagram-will-now-let-you-share-20-photos-per-post/). Mais cette limite ne vaut pas partout. La documentation officielle de Meta pour les développeurs, que les outils de programmation utilisent, plafonne toujours les carrousels à 10 éléments. Elle précise aussi que toutes les images sont recadrées selon la première, et qu'un compte ne peut pas publier plus de 50 fois par tranche de 24 heures par cette voie.",
    },
    {
      type: "image",
      src: "/images/articles/carrousel-instagram-ia-api-meta.webp",
      alt: "Documentation Meta pour les développeurs, section Créer un conteneur pour carrousel : jusqu'à 10 images ou vidéos par publication, et rubrique Limites indiquant que les images du carrousel sont recadrées selon la première, au format 1:1 par défaut, et que les comptes sont limités à 50 publications par 24 heures",
      caption:
        "La section carrousel de la documentation de publication de contenu de la plateforme Instagram (developers.facebook.com), en français, capturée le 11 octobre 2026.",
    },
    {
      type: "p",
      text: "Si tu programmes tes publications avec un outil tiers, construis donc tes carrousels en 10 slides maximum, sauf si ton outil indique clairement qu'il gère davantage. Et choisis ton format une fois pour toutes. Je travaille en portrait 4:5, en 1080 x 1350 pixels, parce que ce format occupe plus de hauteur dans le fil qu'un carré.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Créer un carrousel Instagram avec l'IA en 7 étapes",
    },
    {
      type: "p",
      text: "Voici le découpage que je donne comme point de départ pour un carrousel pédagogique de 8 slides. Tu peux l'allonger, mais chaque slide ajoutée doit gagner sa place.",
    },
    {
      type: "table",
      caption:
        "Rôle de chaque slide dans un carrousel narratif de 8 slides, et répartition du travail entre l'IA et toi.",
      headers: ["Slide", "Rôle", "Ce que fait l'IA", "Ce que tu fais"],
      rows: [
        ["1", "La promesse : ce que le lecteur saura à la fin", "Propose 10 accroches", "Choisis, raccourcis à 8 mots maximum"],
        ["2", "Deuxième accroche, lisible seule", "Propose 5 variantes", "Vérifie qu'elle tient sans la slide 1"],
        ["3", "Le problème vécu, en une scène", "Génère le visuel de la scène", "Écris la phrase avec tes mots"],
        ["4 à 6", "La méthode, une idée par slide", "Rédige le premier jet, génère les visuels", "Coupe la moitié du texte"],
        ["7", "La preuve : un avant/après, un exemple réel", "Rien, ou la mise en forme", "Fournis le vrai exemple"],
        ["8", "La sortie : quoi faire maintenant", "Propose des formulations", "Choisis une seule action demandée"],
      ],
    },
    {
      type: "ol",
      items: [
        "Fixe une seule promesse. « Comment j'ai réduit mes retours clients de moitié » est un carrousel ; « Tout sur le service client » est un livre. Si tu n'arrives pas à écrire la promesse en une phrase, le sujet est trop large.",
        "Fais écrire le découpage par un assistant (ChatGPT, Claude, Gemini) avec le prompt ci-dessous. Il te rend un récit slide par slide au lieu d'un article découpé. La consigne de longueur par slide est ce qui change le plus le résultat.",
        "Travaille les slides 1 et 2 à part. Demande dix accroches pour la couverture, cinq pour la slide 2, et lis-les à voix haute. Garde celles qui donnent envie de swiper, même si ce ne sont pas les plus malignes.",
        "Génère les visuels en série à partir d'une seule image de référence. Même palette, même lumière, même cadrage d'une slide à l'autre. La méthode pour [produire une série de visuels cohérents](/blog/batch-produire-visuels-coherents-serie) s'applique telle quelle.",
        "Pose le texte dans un gabarit fixe : marges identiques, une seule police, un numéro de slide discret. Le gabarit se crée au premier carrousel et sert ensuite pour tous les autres.",
        "Relis sur ton téléphone, en vrai swipe. Exporte les slides, envoie-les-toi, fais-les défiler au pouce. Un texte lisible sur un écran de 27 pouces devient souvent illisible sur un téléphone tenu à bout de bras.",
        "Publie avec le bon format sur la slide 1, et active l'étiquette IA si tes visuels sont des images photoréalistes générées. Si tu programmes, vérifie la limite de slides de ton outil avant d'exporter.",
      ],
    },
    {
      type: "p",
      text: "Le prompt de découpage que j'utilise, à adapter avec ton sujet et ton audience :",
    },
    {
      type: "quote",
      text: "Tu es scénariste de carrousels Instagram. Sujet : [ton sujet]. Audience : [qui, quel niveau, quel problème]. Promesse : [ce que le lecteur saura faire à la fin]. Écris un carrousel de 8 slides. Pour chaque slide, donne : le rôle de la slide, le texte affiché (15 mots maximum, sauf slide 1 : 8 mots maximum), et une description du visuel sans aucun texte dedans. La slide 2 doit fonctionner seule, comme une deuxième couverture. Chaque slide doit donner une raison de passer à la suivante. Pas de liste à puces, pas d'emoji, pas de conclusion générique.",
    },
    {
      type: "p",
      text: "> Pro Tip : demande ensuite à l'assistant de relire son propre découpage en se mettant dans la peau de quelqu'un qui arrive par la slide 2. Il trouve presque toujours une slide qui n'a de sens qu'avec la précédente.",
    },
    {
      type: "p",
      text: "Si tu produis des carrousels pour plusieurs comptes ou pour des clients, ce découpage s'intègre dans une production plus large. La planification d'un mois de [visuels pour les réseaux sociaux](/blog/visuels-reseaux-sociaux-ia-mois) te donne le rythme, et la boîte à outils de l'[IA pour community manager](/blog/ia-community-manager) couvre la programmation et la réponse aux commentaires.",
    },
    {
      type: "image",
      src: "/images/articles/carrousel-instagram-ia-label-ia.webp",
      alt: "Article de la salle de presse de Meta, mise à jour du 1er juillet 2024 expliquant que le libellé Made with AI devient AI info sur ses applications, avec en dessous une maquette de publication Instagram portant la mention AI info sous le nom du compte",
      caption:
        "La mise à jour du 1er juillet 2024 sur l'étiquetage des contenus IA, dans l'article de Meta sur son approche des contenus générés par IA (about.fb.com), capturée le 11 octobre 2026.",
    },
    {
      type: "p",
      text: "Sur l'étiquette, Meta explique s'appuyer en partie sur des indicateurs standards que d'autres entreprises intègrent dans les fichiers produits par leurs outils. Une image exportée d'un générateur qui embarque ces métadonnées peut donc recevoir le libellé « AI info » même si tu n'as rien coché. Mieux vaut le décider toi-même que le découvrir après publication.",
    },
    {
      type: "h2",
      id: "variantes",
      text: "Quatre formes de carrousel qui marchent bien avec l'IA",
    },
    {
      type: "p",
      text: "Le découpage en 8 slides sert de base, mais la forme du récit change avec le sujet. Voici celles que je vois le plus fonctionner :",
    },
    {
      type: "ul",
      items: [
        "Le pas à pas. Une étape par slide, avec un visuel qui montre le résultat de chaque étape. L'IA est très bonne pour générer les états intermédiaires, à condition de garder le même décor.",
        "L'avant/après étiré. Slide 1 l'avant, dernière slide l'après, et entre les deux ce qui a changé. La tension tient le lecteur jusqu'au bout.",
        "Les erreurs. Cinq erreurs, une par slide, chacune avec sa correction. Pratique pour les sujets techniques, et la slide 2 accroche naturellement puisqu'elle contient déjà une erreur.",
        "Les coulisses. Comment un projet a été fabriqué, du brief au résultat. Ici, de vraies captures et de vraies photos ; l'IA t'aide seulement à découper l'histoire.",
      ],
    },
    {
      type: "p",
      text: "Pour l'avant/après comme pour les coulisses, le récit tient sur une petite structure dramatique : situation, obstacle, bascule, résultat. C'est la même logique que [la structure en trois actes appliquée à la vidéo IA](/blog/structure-3-actes-video-ia), en version fixe.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les pièges du carrousel Instagram fait avec l'IA",
    },
    {
      type: "h3",
      id: "piege-texte-genere",
      text: "Le texte généré dans l'image",
    },
    {
      type: "p",
      text: "Symptôme : une lettre en trop sur la slide 5, un accent qui manque, un mot inventé que personne n'a vu avant la publication. Les commentaires le relèvent avant toi. Fix concret : visuels sans texte, texte posé dans l'outil de mise en page, et une relecture à voix haute avant l'export.",
    },
    {
      type: "h3",
      id: "piege-style-derive",
      text: "Le style qui dérive au milieu",
    },
    {
      type: "p",
      text: "Symptôme : les trois premières slides sont en lumière chaude et douce, la quatrième ressemble à une illustration d'un autre compte. Le swipe se casse parce que l'œil croit avoir changé de publication. Fix concret : une image de référence unique pour toute la série, la même description de lumière et de palette copiée dans chaque prompt, et tu jettes la slide qui ne colle pas plutôt que de la garder parce qu'elle est jolie.",
    },
    {
      type: "h3",
      id: "piege-couverture-trop-pleine",
      text: "La couverture qui raconte déjà tout",
    },
    {
      type: "p",
      text: "Symptôme : la slide 1 annonce la conclusion (« Les 3 réglages qui doublent la netteté : A, B et C »). Le lecteur a sa réponse, il passe au post suivant. Fix concret : garde le « quoi » sur la couverture et déplace le « comment » dans les slides suivantes.",
    },
    {
      type: "h3",
      id: "piege-formats-melanges",
      text: "Les formats mélangés",
    },
    {
      type: "p",
      text: "Symptôme : une capture d'écran en 16:9 glissée au milieu d'un carrousel portrait, et tout le côté droit disparaît. Instagram recadre l'ensemble sur le format de la première image. Fix concret : place chaque capture dans un cadre au format du carrousel, avec un fond uni, au lieu de l'importer telle quelle.",
    },
    {
      type: "p",
      text: "Un carrousel, on le lit lentement et on revient en arrière avant de l'envoyer à quelqu'un. L'IA te fait gagner du temps sur le découpage et les images ; garde le tien pour la slide 2 et pour la phrase de la dernière slide.",
    },
    {
      type: "p",
      text: "Ton prochain carrousel, commence-le par la fin : écris la dernière slide, ce que tu veux que la personne fasse, puis lance le prompt de découpage. Le reste du carrousel n'a qu'à y mener.",
    },
    {
      type: "p",
      text: "Note de fondateur : un carrousel qui se partage repose sur un récit, et le récit s'apprend comme le cadrage ou la lumière. Écrire ses accroches et découper une idée en séquence, on le travaille sur des exemples concrets dans la formation IA gratuite d'AI Studios.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Combien de slides peut contenir un carrousel Instagram ?",
    },
    {
      type: "p",
      text: "Jusqu'à 20 photos ou vidéos quand tu publies depuis l'application, depuis l'extension annoncée en août 2024. Si tu passes par un outil de programmation branché sur l'API officielle de Meta, la limite reste à 10 éléments par carrousel. Vérifie ton outil avant de monter un carrousel de 15 slides que tu ne pourras pas programmer.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quel format choisir pour un carrousel Instagram ?",
    },
    {
      type: "p",
      text: "Le format portrait 4:5, en 1080 x 1350 pixels, est le choix le plus sûr : il prend plus de place dans le fil qu'un carré. Toutes les slides doivent avoir le même format, car Instagram recadre l'ensemble du carrousel sur le format de la première image. Une slide en 16:9 au milieu d'un carrousel portrait sera coupée.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "L'IA peut-elle écrire le texte directement dans les images du carrousel ?",
    },
    {
      type: "p",
      text: "Elle peut, mais je le déconseille pour le corps du texte. Les générateurs d'images gèrent mieux un titre court qu'un paragraphe de trois lignes, et une faute dans une image oblige à tout régénérer. Fais générer des visuels sans texte, puis pose tes phrases dans Canva, Figma ou ton outil de mise en page habituel.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Pourquoi la deuxième slide d'un carrousel est-elle si importante ?",
    },
    {
      type: "p",
      text: "Parce qu'Instagram la montre parfois à la place de la première. Adam Mosseri, patron d'Instagram, a expliqué en octobre 2024 que quand quelqu'un voit un carrousel sans swiper, la plateforme lui donne souvent une seconde chance en affichant directement le deuxième élément. Ta slide 2 doit donc accrocher seule, sans dépendre de la couverture.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il déclarer un carrousel fait avec l'IA sur Instagram ?",
    },
    {
      type: "p",
      text: "Meta affiche un libellé « AI info » sur les contenus qu'il détecte comme générés par IA, notamment grâce aux indicateurs standards que certains outils intègrent dans leurs fichiers. Si tes slides sont des images photoréalistes générées, active toi-même l'étiquette IA à la publication : c'est plus honnête et ça t'évite une étiquette posée d'office.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Combien de temps faut-il pour produire un carrousel avec l'IA ?",
    },
    {
      type: "p",
      text: "Ça dépend surtout du nombre d'allers-retours sur les visuels. Avec un gabarit de mise en page déjà prêt et une image de référence de style, le découpage et le texte se font vite ; c'est la cohérence des images d'une slide à l'autre qui prend du temps. Le premier carrousel est toujours le plus long, parce que c'est lui qui crée le gabarit.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-11 -->
