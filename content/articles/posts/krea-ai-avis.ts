import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-10-26";
const IMG = "/images/articles/krea";

export const kreaAiAvis: Article = {
  title: "Krea AI avis : le gratuit a perdu deux atouts",
  slug: "krea-ai-avis",
  description:
    "Avis Krea AI au 26 octobre 2026 : le temps réel pour apprendre, les vrais prix de 9 à 105 $, et un plan gratuit sans licence commerciale ni Krea Nodes.",
  excerpt:
    "Le temps réel de Krea reste le meilleur terrain d'entraînement que je connaisse pour la lumière et la composition. Le plan gratuit, lui, s'est rétréci : plus de Nodes, pas de licence, une image à la fois.",
  category: "ia-image",
  tags: ["krea", "avis", "krea gratuit", "krea prix", "temps réel", "krea nodes"],
  date: "2026-10-26",
  updatedAt: "2026-10-26",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/krea-ai-avis.webp",
  imageAlt:
    "Dans un atelier de design mobilier au petit matin, une jeune designer au crâne rasé et au tablier rouille trace au feutre noir le contour d'une chaise sur du papier kraft, à côté d'une tablette qui montre un rendu photo de la même chaise et d'une maquette en carton",
  keywords: ["krea ai avis", "krea prix", "krea gratuit", "krea nodes", "krea temps réel"],
  relatedSlugs: ["krea-ai-temps-reel-upscale", "meilleures-plateformes-ia-tout-en-un", "openart-avis"],
  faq: [
    {
      question: "Krea AI est-il gratuit ?",
      answer:
        "Oui, avec 100 unités de calcul par jour, rechargées chaque jour. Au 26 octobre 2026, la grille officielle limite le gratuit à une image à la fois, sans génération vidéo en parallèle, sans Krea Nodes, sans modèles Seedance et sans licence commerciale.",
    },
    {
      question: "Combien coûte Krea AI ?",
      answer:
        "En mensuel : Basic 9 $, Pro 35 $, Max 105 $ par mois, pour 5 000, 20 000 et 60 000 unités. En annuel, Krea affiche 40 % de remise : 5,25 $, 21 $ et 63 $ par mois. L'offre Business démarre à 160 $ par mois en annuel.",
    },
    {
      question: "Peut-on utiliser les images de Krea gratuit pour un client ?",
      answer:
        "Non. La FAQ de la page tarifs réserve la licence commerciale aux offres Basic, Pro, Max, Business et Enterprise, et la ligne « Commercial license » de la grille est barrée pour le gratuit. Il faut au moins Basic.",
    },
    {
      question: "Les unités Krea non utilisées sont-elles reportées ?",
      answer:
        "Pas sur les offres individuelles (Basic, Pro, Max) : elles repartent à zéro chaque mois. Business et Enterprise reportent les unités. Les packs achetés en plus se consomment sous 90 jours.",
    },
    {
      question: "Le temps réel de Krea aide-t-il vraiment à apprendre ?",
      answer:
        "Pour la lumière, le cadrage et la composition, oui : l'image suit ton dessin ou ton prompt presque instantanément, tu vois l'effet de chaque changement. Pour apprendre à écrire un prompt complet ou à enchaîner des étapes, un canvas à nodes ou un générateur classique t'apprend davantage.",
    },
    {
      question: "Krea AI vaut-il le coup en 2026 ?",
      answer:
        "Oui pour un créatif visuel qui veut s'entraîner vite et avoir beaucoup de modèles sous la main, à partir de Basic. Le gratuit sert à découvrir le temps réel. Pour de la vidéo régulière, prévois au moins Pro : Basic n'a pas accès à Seedance 2.5.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Krea AI reste l'outil que je conseille pour apprendre à voir. Son mode temps réel transforme un gribouillis en image pendant que tu dessines, et tu comprends en dix minutes ce que la lumière ou le cadrage changent à une scène. Mais le plan gratuit a maigri. Au 26 octobre 2026, la grille officielle ne lui donne plus ni Krea Nodes ni licence commerciale, et une seule image à la fois. Pour travailler vraiment, compte Basic à 9 $ par mois, ou Pro à 35 $ si tu fais de la vidéo.",
    },

    { type: "h2", id: "verdict", text: "Mon avis sur Krea en deux minutes" },
    {
      type: "verdict",
      title: "Krea AI, pour qui ?",
      pourQui:
        "Le créatif visuel (illustration, design produit, photo, direction artistique) qui veut s'entraîner sur la lumière et la composition, puis garder un large choix de modèles image et vidéo sous un seul abonnement.",
      forts: [
        "Le temps réel : l'image suit ton dessin, ta webcam ou ton prompt presque sans attente",
        "Basic à 9 $ par mois avec licence commerciale et Krea Nodes",
        "Krea 3 et Krea Agent accessibles dès le gratuit",
        "Packs d'unités ponctuels quand le mois a été chargé",
      ],
      faibles: [
        "Gratuit sans licence commerciale, sans Nodes, sans vidéo en parallèle",
        "Unités perdues en fin de mois sur les offres individuelles",
        "Seedance 2.5 réservé à Pro et au-dessus",
        "Un tiers d'avis à une étoile sur Trustpilot, souvent sur le support",
      ],
      verdict:
        "Excellent terrain d'entraînement à partir de Basic. Le gratuit suffit pour découvrir le temps réel, guère plus.",
    },
    {
      type: "comparison",
      caption: "Les offres individuelles de Krea et ce qu'elles débloquent",
      headers: ["Offre", "Mensuel", "En annuel", "Unités", "Images en parallèle", "Vidéos en parallèle", "Licence commerciale"],
      rows: [
        ["Free", "0 $", "0 $", "100 / jour", "1", "Non", "Non"],
        ["Basic", "9 $", "5,25 $", "5 000 / mois", "4", "2", "Oui"],
        ["Pro", "35 $", "21 $", "20 000 / mois", "8", "4", "Oui"],
        ["Max", "105 $", "63 $", "60 000 / mois", "Illimité", "8", "Oui"],
      ],
      source: { label: "Krea Pricing", href: "https://www.krea.ai/pricing" },
      verifieLe: "2026-10-26",
      note: "Prix par mois en dollars, sans précision sur les taxes. La carte Basic en annuel arrondit à 5 $, le tableau détaillé dit 5,25 $. Business : 160 $ par mois en annuel, 80 000 unités.",
    },

    { type: "h2", id: "c-est-quoi", text: "Krea AI, c'est quoi aujourd'hui ?" },
    {
      type: "p",
      text: "Krea est une suite créative dans le navigateur. Le menu de gauche donne le périmètre : Krea Agent, Moodboards, entraînement de LoRA, Node Editor, puis les outils Image, Video, Enhancer (agrandissement), Audio, Seedance Studio, Nano Banana, Realtime et Edit. Une partie des modèles est maison (Krea 2, Krea 3), le reste vient d'ailleurs : Nano Banana 2, Seedance, Veo, Kling, Flux et beaucoup d'autres.",
    },
    {
      type: "p",
      text: "J'avais présenté [le temps réel et l'upscale de Krea](/blog/krea-ai-temps-reel-upscale) en juillet, côté méthode. Ici, je te donne mon avis d'octobre 2026 : ce que l'outil apprend vraiment, ce que coûte chaque offre et ce que le gratuit a perdu. Si tu hésites entre plusieurs plateformes, mon [classement des plateformes IA tout-en-un](/blog/meilleures-plateformes-ia-tout-en-un) place Krea face à Higgsfield, Dreamina, Magnific, OpenArt et Imaginode.",
    },

    { type: "h2", id: "temps-reel", text: "Le temps réel change-t-il la façon d'apprendre ?" },
    {
      type: "screenshot",
      src: `${IMG}-realtime-${CAPTURE}.webp`,
      alt: "Écran Realtime de Krea : à gauche un arbre dessiné grossièrement en vert et marron, à droite le même arbre rendu en low poly 3D, barre d'outils de dessin et prompt Render the drawing as a low poly render of a game asset",
      caption: "L'exemple chargé par défaut sur la page Realtime : le dessin à gauche, l'image générée à droite, le prompt en bas.",
      source: "https://www.krea.ai/realtime",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Oui, et c'est la raison principale de garder Krea dans ta boîte à outils. Avec un générateur classique, tu écris un prompt, tu attends, tu compares deux images différentes sur vingt détails à la fois. Avec Realtime, tu bouges une seule chose (la position du soleil, la hauteur de la caméra, un objet au premier plan) et l'image suit. Ton œil fait le lien entre la cause et l'effet. C'est comme ça qu'on apprend la lumière en photo, en déplaçant une lampe autour d'un objet.",
    },
    {
      type: "p",
      text: "L'écran mélange trois entrées : un calque de dessin, une image ou ta webcam, et le prompt. En bas à gauche, un menu règle la fluidité, de 1 à 24 images par seconde. Un bouton Upscale et un bouton Record complètent la barre du bas. Je n'ai lancé aucune génération pour cet article ; ce que je décris vient de la page Realtime ouverte sans compte, avec son exemple par défaut.",
    },
    { type: "h3", id: "exercices", text: "Trois exercices de 15 minutes pour progresser avec Realtime" },
    {
      type: "ol",
      items: [
        "Dessine un cube et une sphère sur une table, garde le prompt fixe (« studio photo, fond gris, lumière douce »), puis déplace une tache jaune (ta « lampe ») de gauche à droite. Note à quel moment l'ombre passe derrière l'objet.",
        "Garde la même scène et le même prompt, puis descends la ligne d'horizon de ton dessin, puis remonte-la. Regarde comment l'image passe d'une contre-plongée qui grandit le sujet à une plongée qui l'écrase.",
        "Garde le dessin et change un seul mot du prompt toutes les 30 secondes : « aube », « midi », « néon », « brouillard ». Tu repères vite les mots qui pèsent vraiment, et ceux que le modèle ignore.",
      ],
    },
    {
      type: "p",
      text: "Le temps réel privilégie la vitesse : tu sors de ces exercices avec une intuition et une composition. Pour la suite (un rendu propre, une série cohérente, une vidéo), il faut repasser par un modèle plus lent, et c'est là que les unités partent.",
    },

    { type: "h2", id: "gratuit", text: "Ce que le plan gratuit permet, et ce qu'il ne permet plus" },
    {
      type: "p",
      text: "Le gratuit donne **100 unités par jour**, rechargées chaque jour. Krea ne dit pas combien d'images ça représente en gratuit. Pour te donner un ordre d'idée, la carte Basic annonce environ 112 images Nano Banana 2 pour 5 000 unités, soit près de 45 unités par image : 100 unités couvriraient à peine deux images de ce modèle. Ce calcul est le mien, et rien ne garantit que le gratuit ait accès à Nano Banana 2 (la grille dit seulement « Limited » pour les modèles d'image).",
    },
    {
      type: "screenshot",
      src: `${IMG}-grille-licence-${CAPTURE}.webp`,
      alt: "Grille Compare Plans in Detail de Krea : pour l'offre Free, une image en parallèle, aucune vidéo en parallèle, Krea Nodes, App Builder et Commercial license barrés ; cochés à partir de Basic pour Nodes et licence",
      caption: "La partie de la grille qui compte pour un débutant. Colonne Free : une image en parallèle, pas de vidéo, pas de Nodes, pas de licence.",
      source: "https://www.krea.ai/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Lis la colonne Free ligne par ligne. Tu génères une seule image à la fois, et aucune vidéo en parallèle. **Krea Nodes est barré**, alors que la grille le listait encore pour le gratuit quand je l'ai relevée le 22 octobre. La licence commerciale aussi, et la FAQ le confirme en ne citant que Basic, Pro, Max, Business et Enterprise. Les modèles Seedance demandent aussi un abonnement. Il te reste Krea 3, Krea Agent, le temps réel en accès limité et l'entraînement de LoRA, limité lui aussi.",
    },
    {
      type: "screenshot",
      src: `${IMG}-faq-licence-${CAPTURE}.webp`,
      alt: "FAQ de la page tarifs de Krea dépliée : les unités de Basic, Pro et Max ne sont pas reportées, la licence commerciale couvre Basic, Pro, Max, Business et Enterprise pour le marketing, la publicité et le travail client",
      caption: "Deux réponses de la FAQ officielle : pas de report d'unités sur les offres individuelles, pas de licence commerciale en gratuit.",
      source: "https://www.krea.ai/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Ma lecture : le gratuit de Krea reste honnête pour découvrir le temps réel et se faire la main sur deux ou trois images par jour. Il ne sert à rien pour un projet client, et il ne te montre plus la partie la plus formatrice de l'outil, les Nodes. Une petite incohérence au passage : la FAQ parle d'unités « pay-as-you-go » pour le gratuit, mais la grille barre l'achat d'unités supplémentaires sur cette même colonne.",
    },

    { type: "h2", id: "nodes", text: "Krea Nodes : apprendre la chaîne, à partir de Basic" },
    {
      type: "screenshot",
      src: `${IMG}-node-editor-${CAPTURE}.webp`,
      alt: "Page Node Editor de Krea : bandeau Nodes is the most powerful way to operate Krea avec un exemple de chaîne selfie vers photo noir et blanc vers vidéo, bouton New Workflow, onglets Projects, Apps, Examples, Templates",
      caption: "Le Node Editor ouvert sans compte : l'exemple du bandeau relie un selfie, un prompt image et un prompt vidéo.",
      source: "https://www.krea.ai/nodes",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Le Node Editor relie les outils et les modèles en chaîne : une image d'entrée, un prompt qui la transforme, un second prompt qui l'anime. L'exemple du bandeau montre exactement ça, un selfie changé en portrait noir et blanc puis en courte vidéo. Les onglets Examples et Templates donnent des chaînes toutes faites à démonter.",
    },
    {
      type: "p",
      text: "Pour apprendre, les Nodes complètent bien le temps réel. Realtime t'apprend à voir, les Nodes t'obligent à décomposer : quelle étape fait quoi, où se perd la ressemblance d'un visage, quel modèle coûte le plus. Accès à partir de Basic d'après la grille. L'App Builder, qui transforme une chaîne en mini-application partageable, demande Pro.",
    },

    { type: "h2", id: "prix", text: "Les prix de Krea, et le piège des unités" },
    {
      type: "screenshot",
      src: `${IMG}-tarifs-${CAPTURE}.webp`,
      alt: "Page Pricing de Krea en facturation annuelle : Free 0 dollar et 100 unités par jour, Basic 5 dollars au lieu de 9, Pro 21 au lieu de 35 et 450 images Nano Banana 2, Max 63 au lieu de 105 avec curseur de 40k à 100k unités",
      caption: "La page s'ouvre sur l'annuel à 40 % de remise. Les prix barrés sont ceux du mensuel.",
      source: "https://www.krea.ai/pricing",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Krea compte en unités de calcul. Chaque carte donne une équivalence : Basic, environ 112 images Nano Banana 2 ou 15 vidéos Seedance 2.0 Fast par mois ; Pro, 450 images ou environ 65 vidéos Seedance 2.5 ; Max, 1 350 images ou environ 197 vidéos Seedance 2.5. La documentation précise que le coût d'une génération dépend du modèle et des réglages, et qu'il baisse sur les offres plus chères.",
    },
    {
      type: "p",
      text: "Deux détails à connaître avant de payer. Sur Basic, Seedance se limite aux versions 2, Fast et Mini : **Seedance 2.5 demande Pro**. Et les générations « relaxed » illimitées (continuer sur les modèles maison quand tes unités sont épuisées) ne sont cochées qu'à partir de Max.",
    },
    {
      type: "screenshot",
      src: `${IMG}-unites-${CAPTURE}.webp`,
      alt: "Documentation Krea, guide des unités de calcul : les unités non utilisées ne sont pas reportées sur les offres individuelles, report possible sur Business et Enterprise, packs d'unités à utiliser sous 90 jours",
      caption: "Le guide officiel des unités : rien n'est reporté sur les offres individuelles, et un pack expire au bout de 90 jours.",
      source: "https://www.krea.ai/docs/user-guide/help-and-support/compute-units",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Sur Basic, Pro et Max, les unités du mois **ne sont pas reportées**, même en annuel. Seuls Business et Enterprise reportent le reliquat (jusqu'à 12 mois en annuel). Les packs ponctuels (de 2 000 à 50 000 unités) dépannent, mais ils expirent au bout de 90 jours et leur prix ne s'affiche qu'une fois connecté. Si tu crées par vagues, un mois chargé puis un mois calme, l'annuel te fera perdre des unités. Mon [calcul du budget mensuel de l'IA créative](/blog/combien-coute-ia-creative-mois) t'aide à estimer ton vrai rythme avant de choisir.",
    },

    { type: "h2", id: "retours", text: "Ce qu'en disent les utilisateurs" },
    {
      type: "screenshot",
      src: `${IMG}-trustpilot-${CAPTURE}.webp`,
      alt: "Profil Trustpilot de Krea : note moyenne 3,6 sur 177 avis, profil revendiqué en juin 2026, abonnement Trustpilot payant, barres de répartition avec beaucoup de cinq étoiles et d'une étoile",
      caption: "Le profil Trustpilot de Krea, revendiqué par l'entreprise depuis juin 2026.",
      source: "https://www.trustpilot.com/review/krea.ai",
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Sur [Trustpilot](https://www.trustpilot.com/review/krea.ai), Krea affiche 3,6 de moyenne pour 177 avis. La répartition est très polarisée : 50 % de cinq étoiles, 33 % d'une étoile, et seulement 17 % entre les deux. Les avis positifs saluent la variété des modèles et la possibilité d'acheter des unités sans monter d'offre. Plusieurs des plus récents portent la mention « Invited », donc sollicités par l'entreprise.",
    },
    {
      type: "p",
      text: "Côté négatif, deux avis d'octobre résument les reproches. Un abonné Pro de deux mois juge les images moins bonnes que celles d'outils gratuits sur les mêmes prompts. Un autre, détenteur d'un pass Seedance illimité, raconte près de deux jours sans génération possible pendant un projet, puis une demande d'extension restée sans réponse. Le support revient souvent dans les plaintes, et Trustpilot note que Krea ne répond pas aux avis négatifs.",
    },

    { type: "h2", id: "pour-qui", text: "Krea, pour qui ? Et quand choisir autre chose" },
    {
      type: "p",
      text: "**Prends Krea** si tu viens du dessin, du design ou de la photo et que tu veux comprendre comment l'IA réagit à une composition. Commence par une semaine d'exercices en gratuit, puis passe à Basic dès que tu veux les Nodes ou un usage commercial. Prends Pro seulement si la vidéo Seedance 2.5 fait partie de ton travail régulier.",
    },
    {
      type: "p",
      text: "**Regarde ailleurs** si ton but est de raconter une histoire en plusieurs plans avec un agent qui propose le découpage : mon [avis sur OpenArt](/blog/openart-avis) détaille son outil Director. Si tu veux surtout de belles images fixes sans t'occuper du reste, mon [comparatif des générateurs d'images](/blog/meilleurs-generateurs-images-ia-2026) te fera gagner du temps. Et si tu débutes complètement, [mon guide pour générer ta première image](/blog/generer-image-ia-guide-debutant) passe avant tout le reste.",
    },
    {
      type: "p",
      text: "Je suis juge et partie sur un point : j'ai créé Imaginode, un studio IA sur canvas à nodes, donc un concurrent de Krea Nodes. Deux différences factuelles : chez Imaginode, le coût en crédits est affiché avant chaque génération, et une génération ratée est remboursée en crédits automatiquement. Le temps réel, en revanche, Imaginode ne le propose pas : pour cet exercice-là, Krea reste mon conseil.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "home",
      title: "Décompose ton image étape par étape",
      text: "Relie texte, image, vidéo et voix sur un canvas, choisis le modèle à chaque étape et vois le prix en crédits avant de lancer.",
    },

    {
      type: "methodology",
      date: "2026-10-26",
      text: [
        "J'ai lu le 26 octobre 2026, depuis la France et sans me connecter, les pages publiques de Krea (accueil, tarifs avec la grille détaillée et la FAQ dépliée, Node Editor, Realtime, guide des unités de calcul) et le profil Trustpilot. Les sept captures viennent de ces pages, prises le même jour, avec le bandeau de cookies publicitaires refusé.",
        "J'ai comparé la grille du jour à mon relevé du 22 octobre pour repérer ce qui a changé sur le gratuit. J'ai créé Imaginode, citée en fin d'article ; pour elle, je ne cite que des fonctions en production.",
      ],
      teste: ["La lecture des pages officielles, de la grille détaillée et de la FAQ tarifs, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée dans Krea (Realtime, image, vidéo, Nodes)",
        "Le coût réel en unités d'une image ou d'une vidéo en gratuit",
        "Le prix des packs d'unités, visible seulement après connexion",
      ],
      sources: [
        { label: "Krea Pricing", href: "https://www.krea.ai/pricing" },
        { label: "Krea, Compute Units and Usage Guide", href: "https://www.krea.ai/docs/user-guide/help-and-support/compute-units" },
        { label: "Krea Node Editor", href: "https://www.krea.ai/nodes" },
        { label: "Krea Realtime", href: "https://www.krea.ai/realtime" },
        { label: "Trustpilot, Krea", href: "https://www.trustpilot.com/review/krea.ai" },
      ],
    },

    { type: "h2", id: "faq", text: "FAQ" },
    { type: "h3", id: "faq-1", text: "Krea AI est-il gratuit ?" },
    {
      type: "p",
      text: "Oui, avec 100 unités de calcul par jour, rechargées chaque jour. Au 26 octobre 2026, la grille officielle limite le gratuit à une image à la fois, sans génération vidéo en parallèle, sans Krea Nodes, sans modèles Seedance et sans licence commerciale.",
    },
    { type: "h3", id: "faq-2", text: "Combien coûte Krea AI ?" },
    {
      type: "p",
      text: "En mensuel : Basic 9 $, Pro 35 $, Max 105 $ par mois, pour 5 000, 20 000 et 60 000 unités. En annuel, Krea affiche 40 % de remise : 5,25 $, 21 $ et 63 $ par mois. L'offre Business démarre à 160 $ par mois en annuel.",
    },
    { type: "h3", id: "faq-3", text: "Peut-on utiliser les images de Krea gratuit pour un client ?" },
    {
      type: "p",
      text: "Non. La FAQ de la page tarifs réserve la licence commerciale aux offres Basic, Pro, Max, Business et Enterprise, et la ligne « Commercial license » de la grille est barrée pour le gratuit. Il faut au moins Basic.",
    },
    { type: "h3", id: "faq-4", text: "Les unités Krea non utilisées sont-elles reportées ?" },
    {
      type: "p",
      text: "Pas sur les offres individuelles (Basic, Pro, Max) : elles repartent à zéro chaque mois. Business et Enterprise reportent les unités. Les packs achetés en plus se consomment sous 90 jours.",
    },
    { type: "h3", id: "faq-5", text: "Le temps réel de Krea aide-t-il vraiment à apprendre ?" },
    {
      type: "p",
      text: "Pour la lumière, le cadrage et la composition, oui : l'image suit ton dessin ou ton prompt presque instantanément, tu vois l'effet de chaque changement. Pour apprendre à écrire un prompt complet ou à enchaîner des étapes, un canvas à nodes ou un générateur classique t'apprend davantage.",
    },
    { type: "h3", id: "faq-6", text: "Krea AI vaut-il le coup en 2026 ?" },
    {
      type: "p",
      text: "Oui pour un créatif visuel qui veut s'entraîner vite et avoir beaucoup de modèles sous la main, à partir de Basic. Le gratuit sert à découvrir le temps réel. Pour de la vidéo régulière, prévois au moins Pro : Basic n'a pas accès à Seedance 2.5.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-26 -->
