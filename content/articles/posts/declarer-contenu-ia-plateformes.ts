import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-27";
const IMG = "/images/articles/declarer-contenu-ia-plateformes";
const YT = "https://support.google.com/youtube/answer/14328491?hl=fr";
const TT = "https://support.tiktok.com/fr/using-tiktok/creating-videos/ai-generated-content";
const META = "https://www.meta.com/fr-fr/help/artificial-intelligence/1783222608822690/";
const IG = "https://help.instagram.com/761121959519495?locale=fr_FR";

const FAQ = [
  {
    question: "Faut-il déclarer une vidéo faite avec l'IA sur YouTube ?",
    answer:
      "Seulement si elle paraît réaliste : une personne réelle à qui on fait dire ou faire quelque chose, un lieu ou un événement réel modifié, une scène réaliste qui n'a jamais eu lieu, ou de la musique générée par IA. Un script, une miniature, des sous-titres ou un upscale faits avec l'IA ne se déclarent pas. La case s'appelle « Utilisation de l'IA », dans la section Attributs de YouTube Studio.",
  },
  {
    question: "Déclarer un contenu IA fait-il baisser les vues ?",
    answer:
      "YouTube écrit que la mention ne limite pas l'audience et ne change rien à l'éligibilité aux revenus. TikTok écrit que le paramètre n'affecte pas la distribution tant que la vidéo respecte les règles de la communauté. Meta ne donne pas d'indication équivalente sur les pages relues le 27 novembre 2026.",
  },
  {
    question: "Où se trouve le bouton contenu IA sur TikTok ?",
    answer:
      "Pour une vidéo : bouton +, tu enregistres ou importes, Suivant, puis Plus d'options, où tu actives le paramètre de contenu généré par IA. Pour une photo : bouton +, puis les paramètres de Publication en bas de l'écran. L'étiquette affichée dit « Le créateur a indiqué que ce contenu était généré par IA ».",
  },
  {
    question: "Faut-il étiqueter une image IA sur Instagram ?",
    answer:
      "Non, Meta n'oblige pas à étiqueter les images. L'obligation vise la vidéo photoréaliste et l'audio réaliste, voix off IA comprise. Une image peut quand même recevoir la mention Contenu IA si les systèmes de Meta repèrent les métadonnées d'un outil de génération.",
  },
  {
    question: "Peut-on retirer une étiquette IA posée automatiquement ?",
    answer:
      "Sur TikTok, non : une étiquette automatique ne peut pas être retirée. Sur YouTube, tu peux corriger une détection erronée dans la plupart des cas en répondant Non dans le questionnaire, sauf pour les vidéos faites avec les outils IA de YouTube, celles qui portent des métadonnées C2PA et celles marquées après un examen manuel.",
  },
  {
    question: "Que risque-t-on si on ne déclare pas ?",
    answer:
      "Sur YouTube, l'oubli répété expose à la suppression de vidéos ou à une exclusion temporaire du Programme Partenaire, plus une étiquette ajoutée à la main. TikTok peut supprimer un contenu réaliste non étiqueté. Meta prévient que des sanctions peuvent être prises. Et depuis le 2 août 2026, l'AI Act impose aussi de signaler les hypertrucages diffusés.",
  },
];

export const declarerContenuIaPlateformes: Article = {
  title: "Déclarer son contenu IA : YouTube, TikTok, Instagram",
  slug: "declarer-contenu-ia-plateformes",
  description:
    "Quand déclarer un contenu IA sur YouTube, TikTok et Instagram, où se trouve le bouton, ce qui se passe si tu oublies : les règles relues le 27/11/2026.",
  excerpt:
    "Trois plateformes, trois règles qui ne se recouvrent pas. Ta voix clonée passe sans case cochée sur YouTube mais doit être signalée sur Instagram. Voici le tableau cas par cas et où cliquer.",
  category: "business-creatif",
  tags: ["étiquette IA", "YouTube", "TikTok", "Instagram", "transparence"],
  date: "2026-11-27",
  updatedAt: "2026-11-27",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/declarer-contenu-ia-plateformes.webp",
  imageAlt:
    "Dans une cave d'affinage voûtée, une fromagère accroche à la main des étiquettes de papier sur des meules alignées pendant qu'un jeune collègue tient un registre",
  keywords: [
    "déclarer contenu ia",
    "label contenu ia",
    "étiquette ia youtube",
    "contenu généré par ia tiktok",
    "mention contenu ia instagram",
  ],
  relatedSlugs: ["monetisation-youtube-contenu-ia", "deepfake-createur-droit", "ia-community-manager"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "**Sur YouTube, TikTok et Instagram, tu dois déclarer un contenu IA quand il paraît réaliste.** Mais chaque plateforme met la limite ailleurs. Une voix off faite avec ta propre voix clonée ne demande aucune case sur YouTube, alors que Meta exige une étiquette pour le même reel. Une image générée doit être étiquetée sur TikTok si elle est réaliste, pas sur Instagram.",
    },
    {
      type: "p",
      text: "J'ai relu le 27 novembre 2026 les pages d'aide officielles des trois plateformes. Tu trouveras ici le tableau cas par cas (script, voix, musique, plan généré, avatar, upscale), le chemin exact jusqu'au bouton sur chaque appli, et ce qui arrive quand la plateforme pose l'étiquette à ta place.",
    },
    {
      type: "p",
      text: "Au moindre doute, déclare toi-même. L'étiquette que tu poses, tu la contrôles. Celle que la plateforme pose après détection, sur TikTok, tu ne peux plus l'enlever.",
    },
    { type: "h2", id: "core-concepts", text: "Ce que les plateformes appellent un contenu IA à déclarer" },
    { type: "h3", id: "critere-realiste", text: "Le critère commun : est-ce que ça pourrait passer pour vrai ?" },
    {
      type: "p",
      text: "Aucune des trois ne te demande de signaler chaque usage de l'IA. Le mot qui revient partout, c'est réaliste. [L'Aide YouTube](" + YT + ") liste quatre cas : faire dire ou faire quelque chose à une personne réelle, modifier les images d'un lieu ou d'un événement réel, générer une scène réaliste qui n'a jamais eu lieu, créer une musique qui constitue l'élément principal de la vidéo.",
    },
    {
      type: "p",
      text: "TikTok parle de contenu « entièrement généré ou modifié de manière significative par IA » : un sujet qui fait ou dit ce qu'il n'a pas fait ni dit, ou un visage changé au point de ne plus être reconnaissable. Meta, lui, a la règle la plus étroite : l'obligation vise la vidéo photoréaliste et l'audio réaliste, et elle ne s'applique pas aux images.",
    },
    {
      type: "screenshot",
      src: `${IMG}-youtube-exemples.webp`,
      alt: "Page d'aide YouTube « Signaler l'utilisation de contenus d'IA générative » : paramètre Utilisation de l'IA dans YouTube Studio et liste dépliée des contenus que les créateurs ne doivent pas signaler, dont les contenus non réalistes",
      caption: "L'Aide YouTube en français, avec la liste des cas qui ne demandent aucune déclaration. Capture du 27 novembre 2026.",
      source: YT,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "aide-production", text: "Ce qui ne se déclare jamais : l'IA qui aide sans montrer" },
    {
      type: "p",
      text: "YouTube est le plus précis sur ce point. Pas de déclaration pour un script, un plan de vidéo, une miniature, un titre ou des infographies faits avec l'IA. Pas non plus pour des sous-titres, un upscale, une restauration, un filtre beauté ou un étalonnage. Et, ce qui surprend le plus, pas pour le clonage de ta propre voix en voix off ou en doublage.",
    },
    {
      type: "p",
      text: "TikTok exclut lui aussi les « corrections ou améliorations mineures ». Chez Meta, un fichier qui porte seulement un signal de modification par IA (un recadrage ou une couleur changés par un outil IA, par exemple) ne reçoit aucune mention visible sur la publication. L'info reste consultable dans le menu Options.",
    },
    { type: "h2", id: "practical-workflow", text: "Comment déclarer ton contenu IA, plateforme par plateforme" },
    {
      type: "p",
      text: "J'ai construit ce tableau à partir des exemples que donne chaque plateforme. Quand une page ne tranche pas un cas, je l'écris plutôt que d'inventer une règle.",
    },
    {
      type: "table",
      caption: "Faut-il déclarer ? Règles relues sur les pages officielles le 27 novembre 2026",
      headers: ["Ce que tu as fait avec l'IA", "YouTube", "TikTok", "Instagram et Facebook"],
      rows: [
        ["Script, titre, miniature, idées", "Non (aide à la production)", "Non concerné (pas une image, une vidéo ou un son publiés)", "Non concerné"],
        ["Sous-titres, upscale, restauration, étalonnage", "Non", "Non (amélioration mineure)", "Pas de mention visible, info dans le menu Options si le fichier porte un signal"],
        ["Voix off réaliste avec ta propre voix clonée", "Non, cité tel quel dans les exemples", "La page ne cite pas ce cas, elle demande d'étiqueter le son réaliste : je déclare", "Oui, un reel avec voix off IA réaliste est cité"],
        ["Musique générée (Suno, Udio)", "Oui, la musique IA figure dans les cas à signaler", "Pas tranché pour un instrumental, je déclare", "Oui pour une chanson avec voix IA, pas tranché pour un instrumental"],
        ["Image photoréaliste générée (carrousel, post)", "Non concerné pour une vidéo", "Oui si elle est réaliste", "Non obligatoire, mais mention automatique possible si détectée"],
        ["Plan vidéo réaliste généré d'un lieu réel", "Oui (exemple du surfeur à Maui)", "Oui", "Oui"],
        ["Avatar IA photoréaliste qui parle", "Oui (scène réaliste qui n'a pas eu lieu)", "Oui", "Oui"],
        ["Animation ou style dessin animé", "Non (non réaliste)", "Encouragé, pas exigé", "Non (exemple du paysage façon bande dessinée)"],
        ["Personne réelle qui dit ou fait ce qu'elle n'a pas fait", "Oui", "Oui, et parfois interdit même étiqueté", "Oui"],
      ],
    },
    {
      type: "p",
      text: "La ligne de la voix clonée est celle qui piège le plus. Tu publies la même vidéo partout, YouTube ne te demande rien, et Instagram attend une étiquette. Si tu fais ta voix off avec ElevenLabs ou un outil du même genre (le [guide de la voix off IA](/blog/voix-off-ia-guide) détaille le procédé), coche la case sur Instagram et Facebook à chaque publication.",
    },
    { type: "h3", id: "youtube-studio", text: "YouTube : la case « Utilisation de l'IA »" },
    {
      type: "ol",
      items: [
        "Ouvre YouTube Studio, sur ordinateur ou sur l'appli mobile.",
        "Lance l'import de ta vidéo comme d'habitude.",
        "Dans la section « Attributs », sous « Utilisation de l'IA », choisis Oui si ta vidéo entre dans un des cas à déclarer, Non sinon.",
        "Termine les détails de la vidéo et publie.",
      ],
    },
    {
      type: "p",
      text: "L'étiquette n'apparaît pas au même endroit selon le contenu. Pour la musique ou une vidéo photoréaliste, elle peut s'afficher dans le lecteur. Pour un audio non musical, une animation ou un contenu non photoréaliste, elle va dans la description développée. YouTube précise que la mention ne limite pas l'audience et ne touche pas à l'éligibilité aux revenus, ce qui rejoint ce que j'expliquais sur [la monétisation des vidéos IA](/blog/monetisation-youtube-contenu-ia).",
    },
    {
      type: "screenshot",
      src: `${IMG}-youtube-studio.webp`,
      alt: "Section « Comment signaler du contenu d'IA générative » de l'Aide YouTube, avec les onglets Ordinateur, Android et iPhone et les étapes : YouTube Studio, importer, section Attributs, Utilisation de l'IA",
      caption: "Les étapes officielles côté YouTube Studio. Capture du 27 novembre 2026.",
      source: YT,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "tiktok-plus-options", text: "TikTok : le paramètre dans « Plus d'options »" },
    {
      type: "ol",
      items: [
        "Vidéo : appuie sur le bouton + en bas de l'écran, enregistre ou importe ta vidéo, puis appuie sur Suivant.",
        "Appuie sur « Plus d'options... » et active le paramètre de contenu généré par IA.",
        "Photo : bouton +, prends ou choisis ta photo, puis ouvre les paramètres de Publication en bas et active le même paramètre.",
      ],
    },
    {
      type: "p",
      text: "L'étiquette affichée dit « Le créateur a indiqué que ce contenu était généré par IA ». D'après [la page d'aide TikTok](" + TT + "), activer ce paramètre ne change rien à la distribution tant que la vidéo respecte les règles. Attention au sens inverse : étiqueter IA une vidéo qui n'a pas été modifiée enfreint les conditions d'utilisation. Ne coche pas la case par réflexe sur tout ton compte.",
    },
    {
      type: "screenshot",
      src: `${IMG}-tiktok.webp`,
      alt: "Centre d'aide TikTok en français, section « Comment appliquer l'étiquette Le créateur a indiqué que ce contenu était généré par IA », avec les étapes Photo et Vidéo jusqu'à Plus d'options",
      caption: "Le chemin officiel côté TikTok, photo et vidéo. Capture du 27 novembre 2026.",
      source: TT,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "instagram-mention", text: "Instagram : « Ajouter une mention IA », sur mobile seulement" },
    {
      type: "p",
      text: "Sur [l'aide Instagram](" + IG + "), la fonction est indiquée comme absente sur ordinateur. Tout se fait dans l'appli. Pour une publication ou un reel, active le bouton à côté de « Ajouter une mention IA » au moment de partager. Pour une story : Options, puis « Identifier l'IA », puis le même bouton. Ton post affiche alors la mention Contenu IA.",
    },
    {
      type: "p",
      text: "Si ton compte publie surtout des contenus générés, il existe aussi une étiquette de profil : Modifier le profil, puis « Profil généré par l'IA ». La page générale de Meta, mise à jour la veille de ma relecture, l'appelle pourtant « IA Creator » : ne t'étonne pas si l'appli affiche l'un ou l'autre. C'est le cas typique des comptes d'[influenceurs virtuels](/blog/influenceur-virtuel-ia).",
    },
    {
      type: "screenshot",
      src: `${IMG}-meta.webp`,
      alt: "Page d'aide Meta « Comment identifier le contenu IA sur les produits Meta » : étiquette de profil IA Creator, puis section « Quand l'étiquette Contenu IA peut-elle être requise » qui vise la vidéo photoréaliste et l'audio réaliste, pas les images",
      caption: "La règle de Meta pour Facebook, Instagram et Threads : vidéo et audio réalistes, pas les images. Capture du 27 novembre 2026.",
      source: META,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "exemple-vercors", text: "Un exemple de bout en bout" },
    {
      type: "p",
      text: "Prends un Short de 60 secondes sur une randonnée dans le Vercors (exemple construit pour l'article). Les plans de marche sont tournés au téléphone. Le plan aérien du sommet est généré, la voix off sort de ta voix clonée, la musique vient de Suno, la miniature a été faite avec un générateur d'images.",
    },
    {
      type: "p",
      text: "Sur YouTube, tu coches Oui : le plan généré montre un lieu réel, et la musique IA figure dans les cas à signaler. La voix et la miniature, seules, n'auraient rien déclenché. Sur TikTok, tu actives le paramètre pour le plan aérien. Sur Instagram, tu ajoutes la mention, deux fois justifiée : vidéo photoréaliste et voix off réaliste. Retire le plan aérien et la musique, et seule la case d'Instagram reste nécessaire.",
    },
    {
      type: "p",
      text: "> Pro Tip : note dans le nom de ton fichier de montage ce qui est généré (par exemple « vercors_plan-aerien-IA_voix-clone »). Au moment de publier sur trois applis, tu n'as plus à te souvenir de rien, et si un client te demande des comptes six mois plus tard, la réponse est dans le dossier.",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui finissent en étiquette imposée" },
    { type: "h3", id: "erreur-detection", text: "Compter sur la détection pour faire le travail" },
    {
      type: "p",
      text: "Symptôme : tu ne déclares rien et une étiquette apparaît quand même, parfois au mauvais endroit. Les trois plateformes lisent les métadonnées C2PA que posent beaucoup d'outils, et YouTube ajoute ses propres systèmes de détection. Sur TikTok, une étiquette automatique ne se retire pas. Sur YouTube, tu ne peux pas la corriger pour un fichier C2PA ou après un examen manuel.",
    },
    {
      type: "p",
      text: "Fix concret : déclare avant de publier, avec tes mots. YouTube t'envoie une notification dans Studio quand il ajoute une étiquette lui-même : lis-la au lieu de la balayer. Et ne cherche pas à effacer les métadonnées pour passer entre les mailles, c'est exactement le comportement que l'oubli répété sanctionne.",
    },
    {
      type: "screenshot",
      src: `${IMG}-youtube-detection.webp`,
      alt: "Aide YouTube, sections « Détection automatique des contenus IA » (outils YouTube, métadonnées C2PA, systèmes internes) et « Risques liés à l'absence de mention » (suppression, exclusion temporaire du Programme Partenaire YouTube)",
      caption: "Détection automatique et sanctions, telles que YouTube les décrit. Capture du 27 novembre 2026.",
      source: YT,
      capturedAt: CAPTURE,
      width: 1280,
      height: 800,
    },
    { type: "h3", id: "erreur-copier-coller", text: "La règle de YouTube recopiée sur Instagram" },
    {
      type: "p",
      text: "Symptôme : tu as lu que la voix clonée ne se déclare pas, tu publies ton reel sans mention, et Meta te le reproche. Ou l'inverse : tu coches tout partout et TikTok considère que tu étiquettes à tort des vidéos non modifiées.",
    },
    {
      type: "p",
      text: "Fix concret : garde le tableau plus haut à côté de ton planning et décide plateforme par plateforme. Si tu gères plusieurs comptes clients, la méthode de vérification décrite dans [l'article sur le métier de community manager IA](/blog/ia-community-manager) s'ajoute à ton process en une ligne.",
    },
    { type: "h3", id: "erreur-etiquette-protege", text: "Croire que l'étiquette rend tout permis" },
    {
      type: "p",
      text: "Symptôme : une vidéo bien étiquetée qui disparaît quand même. TikTok interdit certains contenus IA même déclarés : fausses sources faisant autorité, faux événements de crise, utilisation de l'image d'un mineur, ou d'un adulte anonyme sans son autorisation. YouTube rappelle que son règlement de la communauté s'applique à tout.",
    },
    {
      type: "p",
      text: "Fix concret : si ta vidéo met en scène une personne réelle, commence par obtenir son accord écrit, l'étiquette vient après. Le point juridique est détaillé dans [ce que dit le droit français sur les deepfakes](/blog/deepfake-createur-droit), y compris l'article 50 de l'AI Act, applicable depuis le 2 août 2026.",
    },
    { type: "h3", id: "erreur-pub", text: "Traiter une pub comme un post organique" },
    {
      type: "p",
      text: "Symptôme : tu boostes un reel ou tu lances une campagne avec un visuel généré, et tu cherches le même bouton que d'habitude. Meta l'écrit en tête de ses pages : l'identification du contenu IA fonctionne différemment pour les publicités. Tout ce que tu viens de lire concerne le contenu organique.",
    },
    {
      type: "p",
      text: "Fix concret : pour une publicité, vérifie les règles du gestionnaire de pub de la plateforme au moment de créer la campagne. Je ne les ai pas relues pour cet article, je préfère te le dire plutôt que de t'inventer un chemin de menu.",
    },
    { type: "h2", id: "que-faire-maintenant", text: "Ce que tu peux faire ce soir" },
    {
      type: "p",
      text: "Ouvre tes cinq dernières vidéos publiées. Pour chacune, note ce qui a été généré, puis passe-la dans le tableau, plateforme par plateforme. Si une vidéo réaliste n'est pas déclarée, YouTube te permet de modifier la réponse dans les attributs. Compte une vingtaine de minutes pour les cinq.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Fabriquer des vidéos IA qui tiennent la route",
      text: "Dans ma formation IA gratuite, je montre comment produire des images, des voix et des vidéos avec les outils du moment, étape par étape, même si tu débutes.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "J'ai relu le 27 novembre 2026 la page d'aide YouTube « Signaler l'utilisation de contenus d'IA générative » en français (listes d'exemples dépliées), la page TikTok « À propos du contenu généré par IA » en français, la page Meta « Comment identifier le contenu IA sur les produits Meta » (mise à jour la veille selon la page) et la page Instagram « Étiqueter le contenu IA » dans sa version mobile. Les captures ont été prises le même jour, sans accepter de cookies facultatifs.",
        "Les cases « je déclare » du tableau sont mon conseil quand la page officielle ne tranche pas, elles sont signalées comme telles. L'exemple du Vercors est construit pour l'article.",
      ],
      teste: ["Lecture des quatre pages d'aide officielles et de leurs exemples"],
      nonTeste: [
        "Les écrans de publication dans les applis, non photographiés",
        "Les règles des gestionnaires de publicité",
        "L'impact réel d'une étiquette sur la portée, aucune donnée publique fiable",
      ],
      sources: [
        { label: "Aide YouTube, Signaler l'utilisation de contenus d'IA générative", href: YT },
        { label: "Centre d'aide TikTok, À propos du contenu généré par IA", href: TT },
        { label: "Pages d'aide Meta, Comment identifier le contenu IA sur les produits Meta", href: META },
        { label: "Pages d'aide Instagram, Étiqueter le contenu IA sur Instagram", href: IG },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-27 -->
