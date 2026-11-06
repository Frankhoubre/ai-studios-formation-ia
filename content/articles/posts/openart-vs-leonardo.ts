import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-06";
const IMG = "/images/articles/openart-vs-leonardo";
const OA_PRICING = "https://openart.ai/pricing";
const OA_HOME = "https://openart.ai/home";
const OA_TERMS = "https://openart.ai/terms/";
const OA_SUNSET = "https://openart.ai/v1-sunset-faq";
const OA_TUTOS = "https://openart.ai/tutorials/";
const LE_PRICING = "https://leonardo.ai/pricing";
const LE_APP = "https://app.leonardo.ai/";
const LE_COMMERCIAL = "https://intercom.help/leonardo-ai/en/articles/8044018-commercial-usage";
const LE_TOKENS = "https://intercom.help/leonardo-ai/en/articles/9044700-tokens-frequently-asked-questions";
const LE_ELEMENTS = "https://leonardo.ai/element-training";
const LE_LEARN = "https://leonardo.ai/learn";
const LE_REFUND = "https://leonardo.ai/refund-policy/";

export const openartVsLeonardo: Article = {
  title: "OpenArt vs Leonardo : quelle plateforme pour apprendre ?",
  slug: "openart-vs-leonardo",
  description:
    "OpenArt ou Leonardo pour débuter : prix, gratuit, droits et fin des modèles perso chez OpenArt le 16 novembre. Mon choix par profil, relevé le 6/11/2026.",
  excerpt:
    "Leonardo pour apprendre l'image, OpenArt pour raconter en vidéo avec un agent. Les droits commerciaux, le report des crédits et le 16 novembre font pencher la balance.",
  category: "ia-image",
  tags: ["openart", "leonardo ai", "comparatif", "plateforme ia", "débuter image ia", "droits commerciaux"],
  date: "2026-11-06",
  updatedAt: "2026-11-06",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/openart-vs-leonardo.webp",
  imageAlt:
    "Dans un atelier de vitrail au petit matin, une apprentie aux cheveux auburn lève vers la fenêtre un panneau représentant un héron, pendant que sur l'établi cinq petits vitraux racontent la traversée d'un lac par une barque, de l'aube à la nuit",
  keywords: ["openart vs leonardo", "leonardo vs openart", "openart ou leonardo", "openart leonardo comparatif", "plateforme ia débutant"],
  relatedSlugs: ["openart-avis", "leonardo-ai-avis-2026", "meilleures-plateformes-ia-tout-en-un"],
  faq: [
    {
      question: "OpenArt ou Leonardo : lequel choisir pour débuter ?",
      answer:
        "Pour apprendre l'image fixe et le prompt, Leonardo Essential à 12 $ par mois : tes images restent privées, tes droits commerciaux sont inclus et les tokens non utilisés sont reportés. Pour raconter une courte histoire en vidéo avec un agent qui propose les plans, OpenArt Starter à 14 $ convient mieux, tant que le résultat ne part pas chez un client.",
    },
    {
      question: "Lequel a le meilleur plan gratuit ?",
      answer:
        "Leonardo, parce que son quota revient chaque jour : 150 tokens, modèle Auto seulement, créations publiques. OpenArt offre des crédits à l'inscription sans en publier le nombre, ses conditions prévoient un filigrane possible et suppriment après 7 jours les créations privées d'un compte qui n'a jamais été abonné, sauf si elles sont publiées.",
    },
    {
      question: "Les crédits OpenArt et les tokens Leonardo sont-ils comparables ?",
      answer:
        "Non. Un crédit OpenArt et un token Leonardo n'ont pas la même valeur, et chaque modèle en consomme un nombre différent. OpenArt estime jusqu'à 4 000 images ou 50 vidéos hors Director pour Starter. Leonardo ne publie aucune estimation et affiche le coût sur le bouton Generate.",
    },
    {
      question: "Peut-on utiliser ses images pour un client ?",
      answer:
        "Chez OpenArt, il faut l'offre Plus à 34 $ par mois : Starter et le gratuit sont limités à un usage non commercial. Chez Leonardo, l'usage commercial est permis dès le gratuit, mais les créations y sont publiques et Leonardo garde des droits perpétuels dessus. Pour un travail client, Essential à 12 $ donne des générations privées et la pleine propriété décrite par l'aide.",
    },
    {
      question: "Peut-on encore entraîner un modèle personnalisé sur OpenArt ?",
      answer:
        "Plus après le 16 novembre 2026 à 23 h 59, heure du Pacifique. Les Custom Models partent avec l'ancienne version du site et ne passent pas dans la nouvelle. Ils restent téléchargeables en .safetensors jusqu'au 31 décembre 2026. OpenArt propose Character à la place. Leonardo continue d'entraîner des Elements, 10 par mois dès Essential.",
    },
    {
      question: "Ces deux plateformes sont-elles en français ?",
      answer:
        "Les pages et les tutoriels que j'ai consultés sont en anglais. Le centre d'aide de Leonardo propose l'anglais, l'allemand, le japonais, le chinois simplifié et l'espagnol, pas le français. Tu peux écrire tes prompts en français pour essayer, mais prévois de lire les guides en anglais.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Pour apprendre l'image IA, prends **Leonardo Essential à 12 $ par mois**. Pour apprendre à raconter une petite histoire en vidéo, avec un agent qui propose les plans, prends **OpenArt Starter à 14 $**. Les deux donnent accès à plusieurs mêmes modèles, dont Nano Banana 2.1 et Seedance 2.5. Le choix se joue donc sur trois points : les crédits non utilisés, les droits commerciaux et les modèles personnalisés, qu'OpenArt retire le 16 novembre 2026.",
    },
    {
      type: "p",
      text: "J'ai relevé ces informations le 6 novembre 2026 sur les pages officielles et dans les conditions d'utilisation, sans lancer de génération. Donc aucun duel d'images ici : je m'en tiens à ce qui se vérifie. Fais attention aux comparateurs qui sortent sur cette recherche : j'y ai vu OpenArt à 6 $, une offre Leonardo « Apprentice » qui n'existe plus, et des conseils pour entraîner ses modèles sur OpenArt, alors que la fonction ferme le 16 novembre.",
    },
    { type: "h2", id: "verdict", text: "OpenArt ou Leonardo : mon choix en deux minutes" },
    {
      type: "verdict",
      title: "Mon verdict pour un débutant (novembre 2026)",
      pourQui:
        "Leonardo si tu veux comprendre comment on fabrique une image et progresser sur plusieurs mois. OpenArt si ton but immédiat est de sortir un clip ou un micro-drama de quelques plans.",
      forts: [
        "Leonardo : tokens non utilisés reportés, jusqu'à 25 500 sur Essential",
        "Leonardo : usage commercial et générations privées dès 12 $",
        "Leonardo : entraînement de modèles personnels maintenu, 10 par mois sur Essential",
        "OpenArt : Director inclus dès Starter, 8 générations en parallèle contre 2",
        "OpenArt : personnages réutilisables sans entraînement, environ 13 sur Starter",
      ],
      faibles: [
        "Leonardo : gratuit limité au modèle Auto, créations publiques",
        "Leonardo : aucune estimation du nombre d'images par offre, Leo Agent encore en bêta",
        "OpenArt : crédits remis à zéro tous les 30 jours, même en annuel",
        "OpenArt : pas de droits commerciaux avant Plus à 34 $",
        "OpenArt : Stories et modèles personnalisés retirés le 16 novembre",
      ],
      verdict:
        "Pour apprendre, je pars sur Leonardo Essential : tu paies moins, tu gardes tes tokens si tu lèves le pied trois semaines, et tu peux livrer un client dès que tu en as un. OpenArt reprend l'avantage si la vidéo racontée est ton objectif dès le premier jour.",
    },
    {
      type: "comparison",
      caption: "OpenArt et Leonardo pour un débutant, au 6 novembre 2026",
      headers: ["Critère", "OpenArt", "Leonardo"],
      rows: [
        ["Première offre payante", "Starter, 14 $ par mois (13 $ en annuel)", "Essential, 12 $ par mois hors taxes"],
        ["Dotation", "4 000 crédits par mois", "8 500 tokens par mois"],
        ["Non utilisé", "Perdu, remise à zéro tous les 30 jours", "Reporté, banque de 25 500 tokens"],
        ["Gratuit", "Crédits à l'inscription, nombre non publié", "150 tokens par jour, modèle Auto"],
        ["Modèles", "100+ image, vidéo, audio", "80+ sur les offres payantes"],
        ["Usage commercial", "À partir de Plus, 34 $", "Oui, dès le gratuit (public), privé dès 12 $"],
        ["Créations", "Privées par défaut", "Publiques en gratuit, privées en payant"],
        ["Modèle personnalisé", "Retiré le 16/11, remplacé par Character", "Elements, 10 par mois sur Essential"],
        ["Agent", "Director et Chat Mode", "Leo Agent, en bêta, offres payantes"],
      ],
      source: [
        { label: "OpenArt Pricing", href: OA_PRICING },
        { label: "OpenArt Terms", href: OA_TERMS },
        { label: "Leonardo Pricing", href: LE_PRICING },
      ],
      verifieLe: CAPTURE,
      note: "Crédits et tokens ne sont pas la même unité : ne compare pas 4 000 à 8 500.",
    },

    { type: "h2", id: "interface", text: "Laquelle est la plus simple à prendre en main ?" },
    {
      type: "p",
      text: "Les deux interfaces se visitent sans compte, profites-en avant de t'inscrire. OpenArt t'accueille avec « What are we making today? » et un champ de conversation en mode agent. À gauche, un menu dense : Chat Mode et Director Mode, puis Video, Image, World, Character, Audio, MCP / CLI, tes assets, les modèles de projets, le classement Arena et les tutoriels. Leonardo affiche une barre de prompt et sept icônes (Agent, Image, Video, Audio, 3D, Blueprints, Upscaler), avec des images d'exemple en dessous.",
    },
    {
      type: "gallery",
      caption: "Les deux premiers écrans, vus sans compte le même jour.",
      items: [
        {
          src: `${IMG}-interface-openart.webp`,
          alt: "Écran d'accueil de l'application OpenArt : champ What are we making today avec le sélecteur Agents ou Tools, menu latéral avec Chat Mode, Director Mode, Video, Image, World, Character et Audio, vignettes Launch Video et Short Film",
          caption: "OpenArt met l'agent au centre. Le bouton Tools donne accès aux outils classiques.",
          source: OA_HOME,
          capturedAt: CAPTURE,
          width: 1600,
          height: 900,
        },
        {
          src: `${IMG}-interface-leonardo.webp`,
          alt: "Écran d'accueil de l'application Leonardo : titre Yours to create, barre de prompt, icônes Agent en bêta, Image, Video, Audio, 3D, Blueprints et Upscaler, puis une rangée d'images d'exemple Featured",
          caption: "Leonardo part d'un prompt. Moins de choix à l'écran, et tu vois tout de suite ce que tu fabriques.",
          source: LE_APP,
          capturedAt: CAPTURE,
          width: 1600,
          height: 900,
        },
      ],
    },
    {
      type: "p",
      text: "Pour apprendre, je préfère l'écran de Leonardo. Tu écris un prompt, tu regardes l'image, tu changes un mot, tu recommences : c'est cette boucle qui forme l'œil. L'agent d'OpenArt va plus vite pour sortir une vidéo, mais il prend à ta place des décisions que tu aurais justement besoin de prendre toi-même au début. Rien ne t'empêche de passer sur Tools, bien entendu. Dans les deux cas, tout est en anglais.",
    },

    { type: "h2", id: "gratuit", text: "Quel plan gratuit laisse vraiment apprendre ?" },
    {
      type: "p",
      text: "**Leonardo donne 150 tokens par jour**, qui s'effacent à la remise à zéro suivante. Tu peux donc y revenir tous les soirs, ce qui compte pour prendre une habitude. Le prix à payer est élevé : le modèle est imposé (Auto), la qualité reste en Basic et tout ce que tu crées est public. Tu t'entraînes au prompt, sans pouvoir comparer deux modèles.",
    },
    {
      type: "p",
      text: "**OpenArt promet des « FREE credits » à l'inscription** sans en écrire le nombre, et sa page de création affiche un bouton « Create for Free » sous un sélecteur de modèle. Ses conditions d'utilisation, datées du 30 juillet 2026, ajoutent deux détails que je n'ai vus dans aucun comparatif : les sorties du plan gratuit peuvent porter un filigrane visible, et si tu ne t'es jamais abonné, tes créations privées sont supprimées au bout de 7 jours, sauf si tu les publies. La suppression est définitive.",
    },
    {
      type: "screenshot",
      src: `${IMG}-conservation-openart.webp`,
      alt: "Section 5.5 Privacy and Data Storage des conditions d'OpenArt : créations privées conservées pendant l'abonnement, 7 jours pour un compte jamais abonné, 14 jours après la fin d'un abonnement, suppressions définitives",
      caption: "La ligne « Never subscribed » à retenir : télécharge ce que tu veux garder pendant ton essai.",
      source: OA_TERMS,
      capturedAt: CAPTURE,
      width: 1160,
      height: 400,
    },
    {
      type: "p",
      text: "Le gratuit de Leonardo sert à pratiquer un peu chaque jour, celui d'OpenArt à jeter un coup d'œil. Si tu veux comparer des modèles sans payer, aucun des deux ne fait l'affaire. Regarde plutôt [mon comparatif des alternatives gratuites à Midjourney](/blog/alternatives-gratuites-midjourney), qui détaille les quotas de Krea, Gemini, Firefly, Bing et Ideogram.",
    },

    { type: "h2", id: "prix", text: "Combien ça coûte quand tu passes au payant ?" },
    {
      type: "p",
      text: "Sur le papier, 2 $ d'écart seulement. L'argument qui pèse se trouve dans ce que deviennent tes crédits le mois où tu ne génères presque rien. Et un débutant a forcément des mois comme ça.",
    },
    {
      type: "gallery",
      caption: "Les deux grilles en paiement mensuel.",
      items: [
        {
          src: `${IMG}-tarifs-openart.webp`,
          alt: "Grille mensuelle d'OpenArt : Starter 14 dollars, Plus 34, Pro 56, Wonder 240 par siège, avec crédits mensuels, estimation d'images et de vidéos hors Director, Commercial use rights absent de Starter",
          caption: "OpenArt estime ce que donnent tes crédits. Cherche « Commercial use rights » : la ligne manque sur Starter.",
          source: OA_PRICING,
          capturedAt: CAPTURE,
          width: 1400,
          height: 1090,
        },
        {
          src: `${IMG}-tarifs-leonardo.webp`,
          alt: "Grille mensuelle de Leonardo : Free 0 dollar, Essential 12, Premium 30, Ultimate 60 hors taxes, avec tokens rapides, accès aux modèles, banque de tokens, créations publiques ou privées et modèles personnels",
          caption: "Leonardo affiche sa banque de tokens et le passage de Public à Private dès Essential.",
          source: LE_PRICING,
          capturedAt: CAPTURE,
          width: 1600,
          height: 920,
        },
      ],
    },
    {
      type: "p",
      text: "Prends un mois chargé suivi de trois semaines sans toucher à l'outil. Chez Leonardo, ce qui reste part dans la banque de report, jusqu'à trois mois de dotation d'après [la FAQ des tokens](https://intercom.help/leonardo-ai/en/articles/9044700-tokens-frequently-asked-questions). Chez OpenArt, le solde revient au montant de l'offre tous les 30 jours et le reste disparaît, y compris si tu as payé l'année.",
    },
    {
      type: "screenshot",
      src: `${IMG}-credits-openart.webp`,
      alt: "FAQ de la page tarifs d'OpenArt, question Do my monthly credits roll over : les crédits ne sont pas reportés et l'exemple de John montre un solde remis à 12 000 après 30 jours",
      caption: "L'exemple de John : 6 000 crédits non utilisés, et son compteur repart à 12 000, pas à 18 000.",
      source: OA_PRICING,
      capturedAt: CAPTURE,
      width: 1220,
      height: 270,
    },
    {
      type: "p",
      text: "OpenArt garde deux avantages sur sa grille. Elle annonce jusqu'à 4 000 images ou 50 vidéos hors Director pour Starter, là où Leonardo ne publie rien et te montre le coût sur le bouton Generate au moment de lancer. Elle autorise aussi 8 générations simultanées contre 2. Note quand même la parenthèse « excluding Director » : le coût des vidéos faites avec l'agent n'est pas estimé.",
    },
    {
      type: "p",
      text: "Avant de payer, lis les règles de sortie. Chez OpenArt, les achats ne sont pas remboursables, sauf si la loi l'impose. Chez Leonardo, [la politique de remboursement](https://leonardo.ai/refund-policy/) exclut le simple changement d'avis mais couvre par exemple des tokens non crédités. Dans les deux cas, prends le premier mois en mensuel. Et chez Leonardo, ne remplis pas ta banque avec des recharges si tu hésites à partir : elles deviennent inutilisables sans abonnement, comme je l'explique dans [mon avis Leonardo](/blog/leonardo-ai-avis-2026).",
    },

    { type: "h2", id: "droits", text: "Peux-tu vendre ce que tu crées ?" },
    {
      type: "p",
      text: "C'est l'écart le plus net, et il va à l'inverse de ce qu'on attendrait. **Starter à 14 $ ne donne aucun droit commercial.** Les conditions d'OpenArt réservent l'usage commercial aux offres à partir de Plus, à 34 $ par mois. Tu paies, et tu ne peux toujours pas monétiser une chaîne ni livrer un client.",
    },
    {
      type: "screenshot",
      src: `${IMG}-droits-openart.webp`,
      alt: "Section 4.1 des conditions d'OpenArt : usage non commercial pour tous les niveaux d'abonnement, usage commercial à partir du niveau Plus, droits soumis au respect des conditions",
      caption: "Section 4.1 des conditions d'OpenArt : le mot « Plus » fixe le prix réel d'un travail client.",
      source: OA_TERMS,
      capturedAt: CAPTURE,
      width: 1280,
      height: 400,
    },
    {
      type: "p",
      text: "Leonardo autorise l'usage commercial dès le plan gratuit, avec une contrepartie sérieuse. Son aide prend l'exemple de Jason, qui crée en gratuit des visuels pour sa marque de tee-shirts : il peut le faire, mais les autres membres voient ses créations et peuvent les remixer, et Leonardo garde des droits mondiaux et perpétuels sur ce qui est public. Avec un abonnement et le mode privé, l'aide écrit que tu conserves la pleine propriété de tes images.",
    },
    {
      type: "screenshot",
      src: `${IMG}-droits-leonardo.webp`,
      alt: "Article d'aide Commercial Usage de Leonardo : droits mondiaux et perpétuels sur les images publiques, licence accordée aux autres membres et exemple de Jason, utilisateur gratuit qui crée pour sa marque de tee-shirts",
      caption: "L'exemple de Jason dans l'aide de Leonardo. Regarde la dernière ligne : ses concepts restent visibles et remixables.",
      source: LE_COMMERCIAL,
      capturedAt: CAPTURE,
      width: 900,
      height: 900,
    },
    {
      type: "p",
      text: "Fais le calcul pour ton premier client : 12 $ chez Leonardo contre 34 $ chez OpenArt, soit 22 $ d'écart par mois. Reste la réserve habituelle : le droit d'auteur sur une image générée varie selon les pays, et ces contrats règlent tes droits vis-à-vis de la plateforme, pas la protection de ton image face à un tiers. OpenArt écrit d'ailleurs noir sur blanc qu'il ne revendique ni propriété ni copyright sur ce qui est généré.",
    },

    { type: "h2", id: "modeles-perso", text: "Garder le même personnage ou le même style : ce que change le 16 novembre" },
    {
      type: "p",
      text: "Jusqu'ici, les deux plateformes permettaient d'entraîner un modèle sur tes images. Plus pour longtemps. OpenArt retire ses **Custom Models le 16 novembre 2026 à 23 h 59, heure du Pacifique**, donc le 17 au matin en France, en même temps que Stories. Ils ne passent pas dans la nouvelle version. Si tu en as, télécharge-les en .safetensors avant le 31 décembre.",
    },
    {
      type: "screenshot",
      src: `${IMG}-fin-modeles-openart.webp`,
      alt: "Page officielle d'OpenArt sur la fin de l'ancienne version, question What happens to my custom models : retrait sans transfert, conseil d'utiliser Character, téléchargement en safetensors jusqu'au 31 décembre 2026",
      caption: "La réponse officielle d'OpenArt. Character devient sa seule voie pour garder un personnage.",
      source: OA_SUNSET,
      capturedAt: CAPTURE,
      width: 1080,
      height: 450,
    },
    {
      type: "p",
      text: "Character reste une bonne idée pour un débutant : quelques images de référence, aucun entraînement, et tu réutilises le personnage en image comme en vidéo. Starter en permet environ 13. Je n'ai pas vérifié sa fidélité, puisque je n'ai rien généré. La méthode reste la même partout, et je la détaille dans [mon guide du personnage cohérent](/blog/personnage-coherent-ia).",
    },
    {
      type: "p",
      text: "Leonardo reste sur l'entraînement. Ses **Elements** sont des LoRA que tu entraînes sur un visage, un style ou un produit, avec 10 entraînements par mois sur Essential. L'accueil de l'application met aussi en avant une fonction « Consistent Character » pour les besoins plus simples. Tu dessines des assets de jeu ou une série d'illustrations dans un style fixe ? Le choix est fait, et [mon guide sur les assets avec Leonardo](/blog/leonardo-ai-images-assets) te montre par où commencer.",
    },
    {
      type: "screenshot",
      src: `${IMG}-elements-leonardo.webp`,
      alt: "Page Elements de Leonardo : titre Elements for consistent AI aesthetics, explication de l'entraînement LoRA sur ses propres images pour fixer personnages, styles ou produits, bouton Train a LoRA",
      caption: "La page Elements de Leonardo. Apprendre le principe d'un LoRA ici te servira sur d'autres outils.",
      source: LE_ELEMENTS,
      capturedAt: CAPTURE,
      width: 1600,
      height: 620,
    },

    { type: "h2", id: "progresser", text: "Où trouver de quoi progresser ?" },
    {
      type: "p",
      text: "OpenArt classe [ses tutoriels vidéo](https://openart.ai/tutorials/) par thème, avec un « Beginner Course » dont les épisodes « Getting Started » durent 2 à 3 minutes, puis des sections Director, Characters et Image Editing. Méfie-toi de la rubrique One-Click Stories : elle figure encore sur la page alors que la fonction s'arrête le 16 novembre. OpenArt a aussi lancé [Arena](https://openart.ai/arena), un classement des modèles par usage (publicité, film, animation), à lire en gardant en tête qu'il est publié par une plateforme qui vend ces modèles.",
    },
    {
      type: "p",
      text: "Leonardo passe surtout par l'écrit. [Leonardo Learn](https://leonardo.ai/learn) rassemble tutoriels et guides, dont un article qui explique quel modèle d'image choisir, et l'accueil de l'application renvoie vers un guide de prompt pour Nano Banana. Pour ma part, je trouve ces textes plus pratiques quand on veut revenir sur un point précis. Si tu préfères regarder faire, OpenArt est mieux servi. Dans tous les cas, garde [mon guide de l'image IA](/blog/image-ia-guide-complet) sous la main pour la construction d'un prompt en français.",
    },
    { type: "h3", id: "une-soiree", text: "Une soirée pour trancher sans payer" },
    {
      type: "ol",
      items: [
        "Choisis un sujet banal et précis, par exemple une vieille barque sur un lac à l'aube.",
        "Écris le même prompt dans Leonardo, puis dans OpenArt en passant sur Tools puis Image. N'utilise rien de personnel chez Leonardo : c'est public.",
        "Change une seule chose (la lumière, puis l'objectif) et note sur quel écran tu retrouves le plus vite ton réglage.",
        "Dans OpenArt, repasse en Director Mode et demande un film de 15 secondes avec la même barque. Regarde ton solde avant et après, si tes crédits offerts le permettent.",
        "Télécharge ce que tu veux garder chez OpenArt : au bout de 7 jours sans abonnement, tes créations privées disparaissent.",
        "Pose-toi une seule question : tu as eu envie de retravailler ton image, ou de voir la suite de l'histoire ? La première réponse mène à Leonardo, la seconde à OpenArt.",
      ],
    },
    {
      type: "table",
      headers: ["Ton profil", "Mon conseil"],
      rows: [
        ["Tu veux apprendre l'image et le prompt", "Leonardo Essential, voir [mon avis Leonardo](/blog/leonardo-ai-avis-2026)"],
        ["Tu veux sortir un clip ou un micro-drama vite", "OpenArt Starter, voir [mon avis OpenArt](/blog/openart-avis)"],
        ["Tu travailles déjà pour des clients", "Leonardo Essential, ou OpenArt Plus si l'agent vidéo te fait gagner ces 22 $"],
        ["Tu crées par à-coups", "Leonardo, pour la banque de report"],
        ["Tu fais des assets dans un style fixe", "Leonardo, pour les Elements"],
        ["Tu veux tester sans payer et comparer des modèles", "Ni l'un ni l'autre, voir [mon avis Krea](/blog/krea-ai-avis)"],
      ],
    },

    { type: "h2", id: "retours", text: "Ce qu'en disent les utilisateurs" },
    {
      type: "p",
      text: "Sur Trustpilot, le 6 novembre, [Leonardo](https://www.trustpilot.com/review/leonardo.ai) affiche 4,7 pour 1 579 avis et [OpenArt](https://www.trustpilot.com/review/openart.ai) 3,5 pour 1 690 avis. Les deux profils sont revendiqués par leur entreprise, et ces notes peuvent dépendre aussi de la façon dont chacune sollicite ses clients. Je les lis comme un indice sur le support et la facturation, et je n'en déduis rien sur la qualité des images. Le résumé automatique de Trustpilot insiste d'ailleurs sur le support côté Leonardo, et sur une interface facile et rapide côté OpenArt.",
    },

    { type: "h2", id: "troisieme-option", text: "Et si aucune des deux ne te convient ?" },
    {
      type: "p",
      text: "Pour un tour plus large, mon [comparatif des plateformes tout-en-un](/blog/meilleures-plateformes-ia-tout-en-un) en classe d'autres. Je suis juge et partie sur l'une d'elles : j'ai créé Imaginode, un canvas à nodes où tu relies texte, image, vidéo et voix, avec 135 modèles affichés le 6 novembre 2026 et tous les modèles ouverts dès Starter, à 13 € HT par mois pour 900 crédits. Tu vois chaque étape de la fabrication, là où un agent te la cache. Côté limites, je le dis aussi : ses crédits mensuels repartent à la dotation au renouvellement, comme chez OpenArt, et pour entraîner un modèle sur ton style, Leonardo reste mon conseil. Les recharges d'Imaginode, elles, n'expirent pas et ne demandent aucun abonnement.",
    },
    {
      type: "cta",
      variant: "imaginode",
      destination: "models",
      title: "Compare les modèles sur un même prompt",
      text: "Branche le même prompt sur plusieurs modèles d'image et vois le coût de chaque essai avant de lancer.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai lu le 6 novembre 2026, sans me connecter à un compte, les pages tarifs des deux plateformes, leurs écrans d'accueil publics, les conditions d'utilisation d'OpenArt (datées du 30 juillet 2026), sa page sur la fin de l'ancienne version et ses tutoriels, puis les articles d'aide de Leonardo sur l'usage commercial, les images privées et les tokens, sa politique de remboursement, ses pages Elements et Learn, et les deux profils Trustpilot. Les dix captures viennent de ces pages, prises le même jour dans Chrome, sans accepter de cookies.",
        "J'ai créé Imaginode, citée en fin d'article. Je ne touche aucune commission sur OpenArt ni sur Leonardo. Pour Imaginode, je cite uniquement les prix et le nombre de modèles de sa fiche de référence et de sa page Modèles.",
      ],
      teste: ["La lecture des pages officielles, des conditions et des interfaces publiques, captures faites le même jour"],
      nonTeste: [
        "Aucune génération lancée, ni sur OpenArt ni sur Leonardo : je ne compare pas la qualité des images",
        "Le nombre de crédits gratuits d'OpenArt, absent des pages publiques",
        "Le coût réel en crédits ou en tokens de chaque modèle",
        "Les écrans réservés aux comptes connectés, dont Leo Agent et l'entraînement d'un Element",
      ],
      sources: [
        { label: "OpenArt Pricing", href: OA_PRICING },
        { label: "OpenArt, Terms of Service", href: OA_TERMS },
        { label: "OpenArt, Moving to the latest version", href: OA_SUNSET },
        { label: "OpenArt, Tutorials", href: OA_TUTOS },
        { label: "Leonardo.Ai, Pricing", href: LE_PRICING },
        { label: "Leonardo.Ai, Commercial Usage", href: LE_COMMERCIAL },
        { label: "Leonardo.Ai, Tokens FAQ", href: LE_TOKENS },
        { label: "Leonardo.Ai, Elements", href: LE_ELEMENTS },
        { label: "Leonardo.Ai, Refund Policy", href: LE_REFUND },
        { label: "Leonardo Learn", href: LE_LEARN },
        { label: "Imaginode, modèles", href: "https://imaginode.ai/models" },
      ],
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-11-06 -->
