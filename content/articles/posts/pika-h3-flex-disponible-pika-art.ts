import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-02";
const IMG = "/images/articles/pika-h3-flex-disponible-pika-art";
const PAGE = "https://pika.art/pika-h3-flex";
const COMMUNIQUE =
  "https://www.financialcontent.com/article/bizwire-2026-10-29-pika-launches-pika-h3-flex-a-video-model-built-for-professional-iteration";
const HF = "https://huggingface.co/Pika-Labs/Pika-H3-Flex";
const GITHUB = "https://github.com/Pika-Labs/Pika-H3-Flex";
const COMFY = "https://docs.comfy.org/tutorials/video/pika/pika-h3-flex";
const TARIFS = "https://pika.art/pricing";

export const pikaH3FlexDisponiblePikaArt: Article = {
  title: "Pika H3 Flex arrive sur pika.art : prix, références, limites",
  slug: "pika-h3-flex-disponible-pika-art",
  description:
    "Pika H3 Flex, le modèle vidéo ouvert de Pika, arrive sur pika.art ce 2 novembre 2026 : prix à la seconde, 12 références, pistes audio et vraies limites.",
  excerpt:
    "Annoncé le 29 octobre, Pika H3 Flex arrive dans l'outil de création de Pika le 2 novembre. Un modèle pensé pour faire beaucoup de brouillons pas chers, puis finir en 4K. Voici ce qu'il coûte et ce qu'on ne sait pas encore.",
  category: "actualites-ia",
  tags: ["Actualités IA", "pika", "pika h3 flex", "minimax h3", "vidéo ia", "open weights"],
  date: "2026-11-02",
  updatedAt: "2026-11-02",
  news: true,
  publishedTime: "09:10",
  readingTime: 7,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/pika-h3-flex-disponible-pika-art.webp",
  imageAlt:
    "Dans une ancienne laverie transformée en studio, une femme aux cheveux roux bouclés entoure au feutre rouge une des nombreuses versions d'un même plan accrochées à une corde à linge, pendant qu'un jeune homme écoute un enregistreur au casque",
  keywords: ["pika h3 flex", "pika h3 flex prix", "pika nouveau modèle vidéo", "minimax h3", "modèle vidéo open weights"],
  relatedSlugs: ["pika-avis", "minimax-hub-creation-video-ia", "seedance-2-5-video-ia-30-secondes"],
  faq: [
    {
      question: "Qu'est-ce que Pika H3 Flex ?",
      answer:
        "Un modèle vidéo avec son synchronisé, que Pika a post-entraîné à partir de MiniMax H3 et annoncé le 29 octobre 2026. Il génère en 6 étapes au lieu de 50, fait des clips de 5 à 15 secondes en 480p ou 768p, puis peut les agrandir en 1080p, 2K ou 4K. Pika publie aussi ses poids en accès libre.",
    },
    {
      question: "Combien coûte Pika H3 Flex ?",
      answer:
        "Sur l'API, le prix est à la seconde de vidéo produite : 0,04 $ en 768p, 0,07 $ en 1080p et 0,16 $ en 4K au tarif normal, moitié prix pendant le lancement. Un clip de 15 secondes en 768p revient donc à 0,60 $, ou 0,30 $ au tarif de lancement. Le coût en crédits dans pika.art n'était pas encore affiché sur la page tarifs le 2 novembre au matin.",
    },
    {
      question: "Pika H3 Flex est-il gratuit ?",
      answer:
        "Pas vraiment. Le communiqué annonce 15 générations gratuites par jour pendant deux semaines pour les membres et abonnés, et la page du modèle limite cette offre aux membres du Pika API Club, du 29 octobre au 5 novembre. Sur pika.art, le plan gratuit ne donne aucun crédit mensuel.",
    },
    {
      question: "Peut-on faire tourner Pika H3 Flex sur son ordinateur ?",
      answer:
        "En théorie oui, en pratique pas sur un PC de créateur. Les poids publiés sont des adaptateurs LoRA qui s'appliquent sur MiniMax H3, dont les composants pèsent environ 210 Go. Pika a validé ses essais sur un GPU H100 de 80 Go. La version locale s'arrête à 768p, sans agrandissement 4K ni séparation des pistes audio.",
    },
    {
      question: "Combien de références peut-on donner à Pika H3 Flex ?",
      answer:
        "Jusqu'à 12 par génération : 9 images, 3 vidéos et 3 extraits audio. Il faut au moins une image ou une vidéo. Les vidéos et audios de référence durent de 2 à 15 secondes, avec 15 secondes cumulées au maximum par type.",
    },
    {
      question: "Pika H3 Flex est-il meilleur que Seedance 2.5 ?",
      answer:
        "Pika affirme qu'il est classé 7e en qualité vidéo sur le classement texte vers vidéo de DesignArena, devant Seedance 2.5. C'est la communication de Pika, je n'ai pas fait de test comparatif. Pour un plan final qui doit être très propre, Seedance 2.5 reste une valeur sûre ; Flex est surtout intéressant pour multiplier les essais pas chers.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Pika a annoncé le 29 octobre 2026 **Pika H3 Flex**, un modèle vidéo avec son qui arrive dans son outil de création, pika.art, à partir de ce lundi 2 novembre. D'après [le communiqué diffusé par Business Wire](" + COMMUNIQUE + "), il génère un clip de 15 secondes en 768p, son compris, en sept secondes de calcul, puis peut le finir en 4K. Il accepte jusqu'à 12 références et Pika publie ses poids en libre accès.",
    },
    {
      type: "p",
      text: "Le modèle est pensé pour la façon dont on travaille vraiment : on refait un plan dix fois avant de le garder. Flex veut rendre ces dix essais rapides et pas chers, puis te laisser payer la haute définition seulement sur la bonne prise. Sur le papier, l'idée est la bonne. Reste à voir le prix en crédits, que Pika n'affichait pas encore ce matin.",
    },
    { type: "h2", id: "annonce", text: "Ce que Pika a annoncé le 29 octobre" },
    {
      type: "p",
      text: "Flex part de MiniMax H3, le modèle vidéo de MiniMax, que l'équipe de recherche de Pika a post-entraîné sur des tâches précises : mouvements de caméra, cohérence des personnages, transfert de mouvement et retouche. La génération passe de 50 étapes à 6. Pika parle d'un modèle « plus rapide que le temps réel », mais précise lui-même que les sept secondes mesurent seulement le calcul du modèle, pas le temps total que tu attendras devant ton écran.",
    },
    {
      type: "screenshot",
      src: `${IMG}-communique.webp`,
      alt: "Communiqué Business Wire du 29 octobre 2026 intitulé Pika Launches Pika H3 Flex, a Video Model Built for Professional Iteration, avec la citation de Chenlin Meng, cofondatrice de Pika",
      caption:
        "Le communiqué du 29 octobre 2026, repris par FinancialContent. Capture du 2 novembre 2026.",
      source: COMMUNIQUE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "La fiche technique publiée sur [la page du modèle](" + PAGE + ") donne le détail : clips de 5 à 15 secondes, 24 images par seconde, onze formats d'image du 21:9 au 9:21 (vertical compris), son stéréo synchronisé, prompts jusqu'à 8 000 caractères et contrôle de la graine. Le modèle génère nativement en 480p ou 768p. Le 1080p, le 2K et le 4K passent par un agrandissement fait dans la même tâche, qui garde la prise et le son.",
    },
    {
      type: "p",
      text: "Côté qualité, Pika annonce une 7e place sur le classement texte vers vidéo de DesignArena, devant MiniMax H3, H3 Max et Seedance 2.5, et la première place parmi les modèles à poids ouverts. Ce sont ses chiffres, je n'ai pas fait de test comparatif.",
    },
    { type: "h2", id: "prix", text: "Ce que coûte un clip, en vrai" },
    {
      type: "p",
      text: "Sur l'API, Flex est facturé à la seconde de vidéo produite. Le tarif de lancement divise tout par deux. Pour un clip de 15 secondes, voici la facture :",
    },
    {
      type: "table",
      caption: "Prix d'un clip de 15 secondes avec Pika H3 Flex (API, texte ou image vers vidéo)",
      headers: ["Résolution", "Prix normal à la seconde", "Clip de 15 s, prix normal", "Clip de 15 s, prix de lancement"],
      rows: [
        ["480p", "0,02 $", "0,30 $", "0,15 $"],
        ["768p", "0,04 $", "0,60 $", "0,30 $"],
        ["1080p", "0,07 $", "1,05 $", "0,53 $"],
        ["2K", "0,08 $", "1,20 $", "0,60 $"],
        ["4K", "0,16 $", "2,40 $", "1,20 $"],
      ],
    },
    {
      type: "screenshot",
      src: `${IMG}-tarifs.webp`,
      alt: "Section Priced to play de la page Pika H3 Flex avec le tableau des prix à la seconde : 480p à 0,02 $ et 0,01 $ en lancement, 768p à 0,04 $ et 0,02 $, 1080p à 0,035 $ en lancement",
      caption: "Les prix à la seconde affichés sur pika.art/pika-h3-flex. Capture du 2 novembre 2026.",
      source: PAGE,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Le réglage le plus malin s'appelle brouillon vers vidéo : tu génères en 768p, tu gardes la prise qui marche, et tu la finis en 4K en payant seulement la différence entre les deux résolutions. Fais le calcul au prix normal : dix essais de 15 secondes en 768p coûtent 6 $, la finition en 4K de la bonne prise ajoute 1,80 $, total 7,80 $. Les mêmes dix essais directement en 4K coûteraient 24 $.",
    },
    {
      type: "p",
      text: "Attention à la génération par références vidéo, plus chère : 0,12 $ la seconde en 768p, et Pika compte à la fois les secondes de la vidéo que tu fournis et celles du clip produit. Une référence de 10 secondes pour un clip de 15 secondes, c'est 25 secondes facturées, soit 3 $ au prix normal. Les images et les audios de référence ne coûtent rien.",
    },
    {
      type: "p",
      text: "Dans pika.art, tout passe par des crédits. Le 2 novembre au matin, [la page tarifs](" + TARIFS + ") ne donnait pas encore le coût de Flex : elle liste toujours Seedance 2.5 à 122 crédits pour 5 secondes en 720p. Pour situer, avec l'offre Starter (10 $ pour 900 crédits), ces 5 secondes de Seedance reviennent à environ 1,35 $. Je détaille les offres dans [mon avis complet sur Pika](/blog/pika-avis). Regarde le coût affiché dans l'app avant de lancer ta première génération Flex.",
    },
    { type: "h2", id: "references-audio", text: "12 références et des pistes audio séparées" },
    {
      type: "p",
      text: "Une génération accepte jusqu'à 12 références, réparties en 9 images, 3 vidéos et 3 extraits audio. Pika cite des croquis, des fiches personnage, des photos produit, des moodboards, des échantillons de voix et des vidéos de mouvement. Il faut au moins une image ou une vidéo, l'audio seul ne suffit pas. Pour garder le même visage d'un plan à l'autre, c'est ce qui compte le plus : la méthode de [la cohérence de personnage sur plusieurs plans](/blog/stabilite-personnage-multi-plans) s'applique telle quelle, avec plus de place pour tes références.",
    },
    {
      type: "p",
      text: "Le son sort en stéréo, synchronisé avec l'image, et tu peux demander des pistes séparées en fichiers WAV. Le communiqué parle de cinq pistes (dialogue, musique, effets, bruitages, ambiance), alors que la documentation de l'API en liste trois (dialogue, musique, effets) et présente les cinq comme un ancien réglage de la démo. Pour un monteur, même trois pistes changent tout : tu peux baisser une musique qui écrase la voix sans tout régénérer.",
    },
    { type: "h2", id: "poids-ouverts", text: "Les poids ouverts : pour qui, concrètement" },
    {
      type: "p",
      text: "Pika publie Flex sur [Hugging Face](" + HF + ") et [GitHub](" + GITHUB + "), avec [un tutoriel ComfyUI](" + COMFY + "). Il s'agit de deux adaptateurs LoRA à poser sur MiniMax H3, sous la licence communautaire de MiniMax H3 (le code d'exemple est sous Apache 2.0). Lis cette licence avant tout usage pour un client.",
    },
    {
      type: "screenshot",
      src: `${IMG}-huggingface.webp`,
      alt: "Page Hugging Face du dépôt Pika-Labs/Pika-H3-Flex avec la licence minimax-h3-community-license-agreement, les étiquettes lora et image-to-video, 33B params et MiniMaxAI/MiniMax-H3 comme modèle de base",
      caption:
        "Le dépôt Pika-Labs/Pika-H3-Flex sur Hugging Face, avec la licence MiniMax H3 et le modèle de base indiqués. Capture du 2 novembre 2026.",
      source: HF,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    {
      type: "p",
      text: "Sur un PC de créateur, oublie. Les composants de base de MiniMax H3 pèsent environ 210 Go et Pika a validé ses essais sur une carte H100 de 80 Go. La version ouverte s'arrête aussi à 768p : l'agrandissement jusqu'en 4K, la séparation des pistes audio et la réécriture des prompts restent chez Pika. Ces poids parlent surtout aux studios qui ont leurs propres serveurs et à ceux qui bricolent dans ComfyUI. Si tu débutes avec les nœuds, [mon guide ComfyUI pour débutant](/blog/comfyui-workflow-nodal-debutant) te donne les bases avant de t'y frotter.",
    },
    { type: "h2", id: "essayer", text: "Comment l'essayer cette semaine sans gaspiller" },
    {
      type: "ol",
      items: [
        "Choisis un seul plan que tu connais par cœur, par exemple un produit posé sur une table qui tourne lentement, et écris son prompt avant d'ouvrir Pika.",
        "Prépare tes références : deux ou trois photos du produit sous des angles différents, une image d'ambiance, et si tu veux une voix, un extrait de 5 à 10 secondes.",
        "Génère en 768p uniquement. Fais au moins cinq variantes en ne changeant qu'une chose à la fois : le mouvement de caméra, puis la lumière, puis le rythme.",
        "Garde la meilleure prise et passe-la en brouillon vers vidéo en 1080p. Monte en 4K seulement si le plan part sur grand écran.",
        "Demande les pistes audio séparées si le clip va au montage, et note le coût réel affiché pour chaque étape, pour savoir ce que te coûte un plan fini.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : avant de payer la finition, regarde le brouillon en plein écran sur ton téléphone. Les défauts de mains, de texte et de reflets se voient déjà en 768p, l'agrandissement ne les corrigera pas.",
    },
    { type: "h2", id: "inconnues", text: "Ce qu'on ne sait pas encore" },
    {
      type: "p",
      text: "Le prix en crédits dans pika.art est la grande inconnue du jour. L'offre de lancement est aussi décrite de deux façons : le communiqué parle de deux semaines avec 15 générations gratuites par jour et 50 % de remise pour les membres et abonnés, la page du modèle réserve ces 15 générations aux membres du Pika API Club, du 29 octobre au 5 novembre. Je n'ai pas pu vérifier ce qui s'applique à un abonné Starter.",
    },
    {
      type: "p",
      text: "Les performances annoncées viennent de Pika : ses propres tests, plus le classement DesignArena qu'il cite. Il faudra quelques jours d'essais publics pour savoir si Flex tient un personnage sur plusieurs plans aussi bien que le promettent les 12 références. Les droits d'usage commercial suivent ton offre Pika et les conditions du modèle, comme pour les autres modèles du catalogue.",
    },
    { type: "h2", id: "mon-avis", text: "Mon avis" },
    {
      type: "p",
      text: "Flex vise juste. La plupart des modèles vidéo te font payer chaque essai au prix du plan final, alors qu'en pub ou en court métrage on jette neuf prises sur dix. Payer 60 centimes un brouillon de 15 secondes en 768p (30 pendant le lancement), puis la finition seulement sur la prise retenue, colle à la façon dont on monte un film. Je l'essaierais cette semaine pour des plans produit et des tests de mise en scène. Pour un plan long qui doit tenir seul à l'écran, je resterais sur [Seedance 2.5 et ses 30 secondes](/blog/seedance-2-5-video-ia-30-secondes) tant que personne n'a montré Flex sur une vraie scène.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprends à créer tes vidéos IA avec une méthode",
      text: "Ma formation IA gratuite te montre comment préparer tes plans, tes références et tes prompts avant de dépenser le moindre crédit.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 2 novembre 2026 le communiqué du 29 octobre (Business Wire, repris par FinancialContent), la page du modèle sur pika.art, la page tarifs de Pika et le dépôt Hugging Face. Les trois captures viennent de ces pages, prises le même jour, sans connexion.",
        "Les prix d'un clip de 15 secondes sont calculés à partir des prix à la seconde publiés par Pika. Je n'ai lancé aucune génération : la qualité, la vitesse réelle et le classement DesignArena sont ceux que Pika annonce.",
      ],
      teste: ["La lecture des pages officielles et du dépôt, captures du même jour"],
      nonTeste: [
        "La génération avec Pika H3 Flex, dans pika.art ou via l'API",
        "L'installation locale des poids ouverts",
      ],
      sources: [
        { label: "Communiqué Pika, Business Wire, 29/10/2026", href: COMMUNIQUE },
        { label: "Pika, page Pika H3 Flex", href: PAGE },
        { label: "Pika, page tarifs", href: TARIFS },
        { label: "Hugging Face, Pika-Labs/Pika-H3-Flex", href: HF },
        { label: "GitHub, Pika-Labs/Pika-H3-Flex", href: GITHUB },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-02 -->
