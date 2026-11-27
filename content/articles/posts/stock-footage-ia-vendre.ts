import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-11";
const IMG = "/images/articles/stock-footage-ia-vendre";
const ADOBE_VIDEO =
  "https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/generative-ai-video-submission-guidelines.html";
const ADOBE_GUIDE =
  "https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/generative-ai-content-guidelines.html";
const ADOBE_ROYALTIES =
  "https://helpx.adobe.com/stock/contributor/payments-earnings/royalties-pricing/royalty-rates-assets.html";
const ADOBE_PAYOUT =
  "https://helpx.adobe.com/stock/contributor/payments-earnings/payment-taxes/payment-requirements.html";
const SHUTTERSTOCK =
  "https://submit.shutterstock.com/help/en/articles/10594622-content-policy-updates-ai-generated-content";
const POND5 =
  "https://www.pond5.com/help/en/articles/10086182-does-pond5-allow-ai-generated-content-for-licensing";
const GETTY = "https://www.gettyimages.fr/company/ai-free-imagery-policy";
const MOTIONELEMENTS =
  "https://help.motionelements.com/en/contributor/docs/policy-on-ai-generated-content-and-contributor-accounts";

const FAQ = [
  {
    question: "Peut-on vendre des vidéos générées par IA sur une banque d'images ?",
    answer:
      "Oui, mais pas partout. Adobe Stock et MotionElements acceptent la vidéo générée par IA, avec une étiquette obligatoire au dépôt. Shutterstock, Pond5, Getty Images et iStock la refusent de la part de leurs contributeurs. Vérifie la page d'aide de la banque le jour où tu déposes, ces règles bougent.",
  },
  {
    question: "Combien rapporte une vidéo IA vendue sur Adobe Stock ?",
    answer:
      "Adobe reverse 35 % du prix net de la licence pour une vidéo, contre 33 % pour une photo, selon sa page des royalties mise à jour le 27 octobre 2026. Le montant exact dépend de la formule achetée par le client (abonnement, pack de crédits, licence à l'unité), donc personne ne peut te donner un prix fixe par clip à l'avance. Le premier retrait demande 25 dollars de royalties et 45 jours depuis ta première vente.",
  },
  {
    question: "Faut-il signaler qu'une vidéo a été faite avec l'IA ?",
    answer:
      "Oui. Chez Adobe Stock, la case « Created using generative AI tools » est obligatoire pour tout contenu fait avec un outil génératif, et une seconde case certifie que les personnes et les lieux représentés sont fictifs. Chez MotionElements, il faut même un compte séparé pour l'IA, et l'étiquette ne peut plus être retirée après le dépôt.",
  },
  {
    question: "Pourquoi Shutterstock refuse la vidéo IA alors qu'il a son propre générateur ?",
    answer:
      "Shutterstock explique que ses contributeurs doivent pouvoir prouver qu'ils détiennent la propriété intellectuelle de ce qu'ils déposent, ce qui est impossible avec un modèle entraîné sur le travail de milliers d'artistes. Il dit aussi ne pas pouvoir vérifier quel modèle a servi, donc ne pas pouvoir rémunérer les artistes concernés. Son générateur maison est entraîné sur sa propre bibliothèque sous licence.",
  },
  {
    question: "Ai-je le droit de vendre en banque d'images une vidéo faite avec n'importe quel outil ?",
    answer:
      "Non. Adobe demande que tu aies le droit d'utiliser commercialement ce que l'outil produit, et MotionElements te fait confirmer que l'outil respecte ses licences. Lis les conditions de ton générateur, surtout sur les formules gratuites, qui excluent souvent l'usage commercial. Garde une capture de ces conditions avec la date.",
  },
  {
    question: "Le stock footage IA peut-il devenir un vrai revenu ?",
    answer:
      "Vois-le comme un complément. Les banques qui acceptent l'IA demandent des clips propres, sans texte ni incohérence, et refusent les variantes d'un même prompt. Le revenu se joue au volume de plans vraiment différents et utiles, pas au nombre de fichiers. Si tu cherches un revenu rapide, la prestation pour des clients paie plus vite.",
  },
];

export const stockFootageIaVendre: Article = {
  title: "Vendre du stock footage IA : qui accepte, qui refuse",
  slug: "stock-footage-ia-vendre",
  description:
    "Stock footage IA : Adobe Stock et MotionElements acceptent, Shutterstock, Pond5 et Getty refusent. Règles, étiquettes, royalties de 35 % et méthode de dépôt.",
  excerpt:
    "Tu as des dizaines de plans IA qui dorment sur un disque. Avant de les déposer, sache que la moitié des grandes banques d'images les refusent, et que celles qui les acceptent ont des règles précises. Les politiques relues le 11 novembre 2026, et la méthode pour passer la modération.",
  category: "business-creatif",
  tags: ["stock footage", "Adobe Stock", "banque d'images", "revenus", "vidéo IA"],
  date: "2026-11-11",
  updatedAt: "2026-11-11",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/stock-footage-ia-vendre.webp",
  imageAlt:
    "Dans une péniche aménagée en bureau un soir de pluie, un homme aux cheveux gris attachés note des mots-clés dans un carnet à côté de disques durs étiquetés au ruban adhésif et d'un ordinateur portable affichant une grille de courts plans vidéo",
  keywords: [
    "stock footage ia",
    "vendre vidéos banque d'images",
    "adobe stock vidéo ia",
    "vendre vidéo ia adobe stock",
    "banque d'images ia accepte",
  ],
  relatedSlugs: ["vendre-videos-ia", "gagner-argent-ia-creative-modeles", "vendre-prompts-templates-ia"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "Tu as généré des plans de vagues au ralenti, des rues de nuit sous la pluie, des mains qui pétrissent du pain. Ils dorment sur ton disque après un projet, et tu te dis qu'une banque d'images pourrait les vendre pendant que tu dors. L'idée tient debout, à une condition : déposer au bon endroit, sinon ton compte saute avant la première vente.",
    },
    {
      type: "p",
      text: "J'ai relu le 11 novembre 2026 les pages d'aide de six grandes banques d'images : Adobe Stock, Shutterstock, Pond5, Getty Images, iStock et MotionElements. Deux acceptent la vidéo générée par IA. Les quatre autres la refusent. Tu trouveras ici les règles de chacune, ce que tu touches vraiment sur une vente, et la méthode que j'applique avant de déposer un plan.",
    },
    {
      type: "p",
      text: "Le stock footage IA ne remplacera jamais un client qui paie une prestation. Il sert à rentabiliser des rushes déjà produits. Pris comme ça, il y a de l'argent à récupérer.",
    },
    { type: "h2", id: "core-concepts", text: "Le marché réel du stock footage IA en novembre 2026" },
    {
      type: "p",
      text: "Les grandes banques se sont séparées en deux camps en 2022, et leurs pages d'aide tiennent toujours la même ligne en novembre 2026. D'un côté, celles qui acceptent l'IA à condition qu'elle soit étiquetée. De l'autre, celles qui la refusent et vendent leur propre générateur entraîné sur leur bibliothèque.",
    },
    {
      type: "table",
      caption: "Ce que disent les pages d'aide des banques d'images sur la vidéo générée par IA (relues le 11 novembre 2026)",
      headers: ["Banque", "Vidéo IA des contributeurs", "Condition principale", "Date de la règle affichée"],
      rows: [
        ["Adobe Stock", "Acceptée", "Case « Created using generative AI tools » cochée, pas de texte incrusté ni d'incohérence", "11 juin 2026"],
        ["MotionElements", "Acceptée", "Compte contributeur IA séparé, étiquette définitive", "15 février 2025"],
        ["Shutterstock", "Refusée", "Propriété intellectuelle impossible à prouver", "16 juillet 2025"],
        ["Pond5 (groupe Shutterstock)", "Refusée", "Même logique de propriété et de rémunération des artistes", "Non lisible (page bloquée)"],
        ["Getty Images et iStock", "Refusée", "Retouche IA limitée tolérée sur une œuvre non générée", "Non datée"],
      ],
    },
    { type: "h3", id: "camp-accepte", text: "Ceux qui acceptent : Adobe Stock et MotionElements" },
    {
      type: "p",
      text: "Adobe Stock est la porte d'entrée principale. Sa [page dédiée à la vidéo générative](" + ADOBE_VIDEO + "), mise à jour le 11 juin 2026, tient en quatre règles : marquer la vidéo comme générée par IA au dépôt, éviter tout texte incrusté, signature ou incohérence du modèle, respecter les mêmes exigences techniques et juridiques qu'une vidéo filmée, et ne copier ni le style d'un artiste ni une propriété intellectuelle existante.",
    },
    {
      type: "screenshot",
      src: `${IMG}-adobe-etiquettes-ia.webp`,
      alt: "Page d'aide Adobe Stock Generative AI content guidelines montrant la liste des contenus interdits dans les prompts, titres et mots-clés, puis le tableau des deux cases à cocher : Created using generative AI tools et People and Property are fictional",
      caption:
        "Les contenus interdits dans les prompts et les deux cases à cocher, sur la page d'aide Adobe Stock mise à jour le 11 juin 2026. Capture du 11 novembre 2026.",
      source: ADOBE_GUIDE,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Regarde la liste en haut de la capture, c'est elle que les débutants ratent. Dans tes prompts, tes titres et tes mots-clés, Adobe interdit les noms d'artistes, de personnes réelles ou de personnages de fiction, les œuvres encore protégées, les noms d'agences gouvernementales, les marques des autres, et toute description qui laisse croire à un vrai événement d'actualité. Un plan « manifestation devant l'Assemblée nationale » généré par IA n'a rien à faire là.",
    },
    {
      type: "p",
      text: "MotionElements, plus petit, a choisi une autre méthode. Tu dois ouvrir un **compte contributeur réservé à l'IA**, distinct de ton compte classique, et l'étiquette « AI-generated » posée au dépôt ne peut plus être modifiée. La banque te fait aussi confirmer que ton outil respecte ses licences.",
    },
    {
      type: "screenshot",
      src: `${IMG}-motionelements.webp`,
      alt: "Page d'aide MotionElements Policy on AI-generated content and contributor accounts datée du 15 février 2025, expliquant la séparation entre compte contributeur classique et compte dédié aux contenus générés par IA, vidéos comprises",
      caption:
        "La politique de MotionElements sur les contenus IA, datée du 15 février 2025, capturée le 11 novembre 2026.",
      source: MOTIONELEMENTS,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    { type: "h3", id: "camp-refuse", text: "Ceux qui refusent : Shutterstock, Pond5, Getty et iStock" },
    {
      type: "p",
      text: "Shutterstock le dit sans détour dans [son centre d'aide contributeurs](" + SHUTTERSTOCK + ") : il n'accepte pas de contenu généré par IA de la part des contributeurs. Deux raisons sont données. Tu dois pouvoir prouver que tu détiens la propriété intellectuelle de ce que tu déposes, et un modèle entraîné sur le travail de milliers d'artistes rend ça impossible. Et Shutterstock ne peut pas vérifier quel modèle a servi, donc pas rémunérer les artistes concernés. Pond5, qui appartient au même groupe, affiche [la même position](" + POND5 + ").",
    },
    {
      type: "p",
      text: "Getty Images, et donc iStock, va plus loin. Sa page sur les visuels sans IA refuse la génération dans les bibliothèques créative et éditoriale, et détaille comment la banque détecte les fraudes : analyse des métadonnées, outils forensiques, historique du contributeur.",
    },
    {
      type: "screenshot",
      src: `${IMG}-getty-sans-ia.webp`,
      alt: "Page Getty Images sur la politique d'images sans IA, en français, avec trois colonnes : photos et vidéos d'actualités, visuels créatifs qui n'autorisent pas les images créées par IA générative, et conditions pour les contributeurs",
      caption:
        "La politique « sans IA » de Getty Images, version française, capturée le 11 novembre 2026. Les retouches IA limitées restent tolérées sur une œuvre qui n'a pas été générée.",
      source: GETTY,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "Si tu mélanges les techniques, sache que Getty accepte les images de synthèse, la 3D et le compositing faits sans IA générative. Un plan tourné puis nettoyé d'une poubelle par un outil IA passe encore. Un plan entièrement généré, non. Ne tente pas de faire passer l'un pour l'autre : tu risques l'exclusion du compte, et tes vraies vidéos partent avec.",
    },
    { type: "h2", id: "practical-workflow", text: "Comment préparer un clip IA pour Adobe Stock en 7 étapes" },
    {
      type: "p",
      text: "Voici l'ordre que je suis pour qu'un plan passe la modération du premier coup. Les étapes 1 et 4 sont celles que je vérifie deux fois.",
    },
    {
      type: "ol",
      items: [
        "**Vérifie la licence de ton générateur.** Adobe exige que tu aies le droit de vendre ce que l'outil produit. Va lire les conditions de ta formule (les gratuites excluent souvent l'usage commercial) et fais une capture datée. J'ai détaillé ce point dans mon guide pour [vendre des vidéos IA à des clients](/blog/vendre-videos-ia).",
        "**Choisis des sujets que les acheteurs cherchent.** Textures, nature, gestes du quotidien, ambiances urbaines sans enseigne lisible, arrière-plans pour incruster un titre. Évite tout ce qui ressemble à de l'actualité, à une marque ou à une personne connue.",
        "**Pas de personne réelle reconnaissable.** Si ton plan montre un visage généré qui ne correspond à personne, tu coches « People and Property are fictional ». Si tu as utilisé la photo d'une vraie personne dans le prompt, il te faut sa décharge signée, comme pour un tournage.",
        "**Traque les défauts image par image.** Texte qui se déforme, main à six doigts, objet qui fond au milieu du plan, filigrane de l'outil dans un coin : Adobe les cite noir sur blanc dans ses règles vidéo. Coupe le plan avant le défaut plutôt que de le garder entier.",
        "**Remets-le aux standards d'une vidéo tournée.** Adobe demande les mêmes exigences techniques qu'un clip classique. Si ton générateur sort en 720p, passe par un upscale soigné, en suivant ma méthode pour [faire un upscale vidéo IA](/blog/upscale-video-ia) sans détruire les textures.",
        "**Un plan, une idée.** Ne dépose pas dix variantes du même prompt. Adobe classe ça en spam et peut désactiver le compte. Garde la meilleure prise, jette le reste.",
        "**Écris des métadonnées honnêtes.** Un titre qui décrit ce qu'on voit (« vagues au ralenti sur une plage de galets au coucher du soleil »), des mots-clés précis, aucun nom d'artiste, de film ou de marque. Coche la case IA, toujours.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : tiens un tableur avec, pour chaque clip, l'outil, la formule d'abonnement du jour, le prompt et la date de génération. Le jour où une banque te demande d'où vient un plan, tu réponds en deux minutes. Ce même tableur te dira aussi quels sujets se vendent, pour orienter tes prochaines générations.",
    },
    {
      type: "p",
      text: "Tu cherches d'autres façons de rentabiliser tes fichiers ? Mon article sur [la vente de prompts et de templates](/blog/vendre-prompts-templates-ia) explore une piste voisine, avec les mêmes questions de droits.",
    },
    { type: "h2", id: "chiffres", text: "Ce que tu touches vraiment sur une vente" },
    {
      type: "p",
      text: "Adobe publie ses taux. Selon [sa page des royalties](" + ADOBE_ROYALTIES + "), mise à jour le 27 octobre 2026, un contributeur touche **35 % du prix net pour une vidéo**, contre 33 % pour une photo, une illustration ou un vecteur. Le pourcentage s'applique au prix réellement payé par le client, remises comprises, sur la base du tarif américain.",
    },
    {
      type: "screenshot",
      src: `${IMG}-adobe-royalties.webp`,
      alt: "Page d'aide Adobe Stock Royalty rates for content mise à jour le 27 octobre 2026, avec le tableau des taux standard : 33 % pour les photos, vecteurs et illustrations, 35 % pour la vidéo",
      caption:
        "Le tableau des royalties standard d'Adobe Stock, mis à jour le 27 octobre 2026. Capture du 11 novembre 2026.",
      source: ADOBE_ROYALTIES,
      capturedAt: CAPTURE,
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      text: "L'exemple donné par Adobe concerne une photo : un abonnement à 29,99 dollars par mois pour 10 licences fait 0,99 dollar par photo vendue (29,99 divisé par 10, multiplié par 33 %). Pour la vidéo, la même mécanique s'applique avec 35 %, mais le prix net dépend de la formule du client. Personne ne peut donc te promettre un montant par clip, et méfie-toi de ceux qui affichent des revenus mensuels précis sans montrer leur relevé.",
    },
    {
      type: "p",
      text: "Côté retrait, [les conditions de paiement](" + ADOBE_PAYOUT + ") fixent trois verrous : 25 dollars de royalties au minimum, 45 jours depuis ta première vente, et un compte PayPal, Payoneer ou Skrill. Sans formulaire fiscal valide, Adobe prélève jusqu'à 30 % selon ton pays de résidence. Remplis-le dès l'inscription.",
    },
    {
      type: "p",
      text: "Un calcul simple pour garder les pieds sur terre : pour atteindre ces 25 dollars à 35 %, il faut environ 71,50 dollars de ventes nettes attribuées à tes clips. Un portfolio de vingt plans peut mettre longtemps à y arriver. Avec trois cents plans variés et bien indexés, tes chances montent. Au stock, c'est la largeur du catalogue qui paie.",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui font fermer un compte contributeur" },
    { type: "h3", id: "erreur-deguiser", text: "Faire passer un plan IA pour un plan tourné" },
    {
      type: "p",
      text: "Symptôme : tu déposes un clip généré sur Shutterstock ou iStock sans rien dire, parce que « personne ne verra la différence ». Getty décrit noir sur blanc ses moyens de détection, et tes autres vidéos peuvent partir avec le compte. Fix concret : dépose ta vidéo IA uniquement là où elle est acceptée, et garde tes vrais tournages pour les autres banques.",
    },
    { type: "h3", id: "erreur-variantes", text: "Inonder la banque de variantes" },
    {
      type: "p",
      text: "Symptôme : tu envoies quarante versions d'un même coucher de soleil en changeant une couleur. Adobe interdit explicitement les versions multiples d'un même prompt, et ses règles prévoient le retrait des contenus, voire la désactivation du compte. Fix concret : un sujet, une prise, puis tu passes à un autre sujet. Dix plans vraiment différents valent mieux que cent clones.",
    },
    { type: "h3", id: "erreur-marques", text: "Glisser une marque ou un nom célèbre dans les mots-clés" },
    {
      type: "p",
      text: "Symptôme : pour gagner en visibilité, tu ajoutes « style Wes Anderson » ou le nom d'une marque automobile à tes mots-clés. Adobe interdit les noms d'artistes, de personnes réelles et les propriétés de tiers dans les prompts comme dans les métadonnées. Fix concret : décris ce que l'on voit (« couloir d'hôtel symétrique aux tons pastel ») au lieu de citer qui l'a inspiré.",
    },
    { type: "h3", id: "erreur-licence", text: "Générer avec une formule gratuite" },
    {
      type: "p",
      text: "Symptôme : tes plans viennent de la formule gratuite d'un générateur dont les conditions réservent l'usage commercial aux abonnés. Ton dépôt est accepté, puis le problème remonte le jour où un client se plaint. Fix concret : génère tes clips de stock avec une formule qui autorise l'usage commercial, et archive la page des conditions à la date de génération. Les autres pistes de revenus sont dans mon tour d'horizon des [modèles pour gagner de l'argent avec l'IA créative](/blog/gagner-argent-ia-creative-modeles).",
    },
    {
      type: "p",
      text: "Dernier rappel, côté droit des personnes : si un visage reconnaissable apparaît dans tes clips, relis mon article sur [ce qu'un créateur a le droit de faire avec un deepfake](/blog/deepfake-createur-droit). La banque d'images ne te couvrira pas à ta place.",
    },
    {
      type: "p",
      text: "Si tu as déjà des plans propres qui dorment, le stock footage IA vaut le coup. Commence par Adobe Stock avec vingt clips choisis, observe ce qui passe la modération et ce qui se vend, puis élargis. Si tu repars de zéro pour faire du stock, mieux vaut d'abord apprendre à produire des plans qui tiennent la route.",
    },
    { type: "cta", variant: "formation" },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 11 novembre 2026 les pages d'aide contributeurs d'Adobe Stock (vidéo générative, règles générales IA, royalties, conditions de paiement), de Shutterstock, de Getty Images en français et de MotionElements. Les quatre captures viennent de ces pages, prises le même jour dans Chrome, bannières de cookies et de choix de région masquées sans rien accepter.",
        "La page d'aide de Pond5 bloque la lecture automatisée : j'ai repris sa position telle qu'elle apparaît dans son texte indexé, cohérente avec celle de Shutterstock, propriétaire de Pond5. Je n'ai déposé aucun clip et je n'ai pas de relevé de ventes à montrer : aucun revenu par clip n'est avancé ici.",
      ],
      teste: [
        "La lecture des règles IA et des taux de royalties affichés le 11 novembre 2026",
        "Le calcul du seuil de retrait Adobe à partir du taux vidéo de 35 %",
      ],
      nonTeste: [
        "Un dépôt réel de clip IA et le passage de la modération Adobe",
        "Les prix de licence vidéo payés par les clients, qui varient selon la formule",
        "Les règles des banques plus petites (Freepik, Storyblocks, Dreamstime), non relues ce jour",
      ],
      sources: [
        { label: "Adobe Stock, Generative AI video submission guidelines", href: ADOBE_VIDEO },
        { label: "Adobe Stock, Generative AI content guidelines", href: ADOBE_GUIDE },
        { label: "Adobe Stock, Royalty rates for content", href: ADOBE_ROYALTIES },
        { label: "Adobe Stock, Payment requirements for Contributors", href: ADOBE_PAYOUT },
        { label: "Shutterstock, Content Policy Updates: AI-generated Content", href: SHUTTERSTOCK },
        { label: "Getty Images, politique d'images sans IA", href: GETTY },
        { label: "MotionElements, Policy on AI-generated content", href: MOTIONELEMENTS },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-11 -->
