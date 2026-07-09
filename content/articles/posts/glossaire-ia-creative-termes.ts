import type { Article } from "@/lib/types/article";

export const glossaireIaCreativeTermes: Article = {
  title: "Glossaire IA créative : le lexique pour débutants",
  slug: "glossaire-ia-creative-termes",
  description:
    "Le glossaire de l'IA créative : prompt, seed, CFG, LoRA, inpainting, keyframe et le reste, expliqués simplement, avec des exemples concrets pour t'y retrouver.",
  excerpt:
    "Seed, CFG, LoRA, inpainting, latent... Le vocabulaire de l'IA créative ressemble à un mur. Voici le lexique clair pour enfin comprendre ce que tu fais.",
  category: "workflow-creatif",
  tags: ["glossaire", "débutant", "vocabulaire ia"],
  date: "2026-06-19",
  updatedAt: "2026-06-19",
  readingTime: 13,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/glossaire-ia-creative-termes.webp",
  imageAlt:
    "Un créateur débutant étudie un tableau de termes techniques affichés sur un écran dans un studio sombre, lumière cinématique douce",
  keywords: [
    "glossaire ia créative",
    "lexique ia générative",
    "vocabulaire ia image",
    "termes ia créative",
    "définitions ia générative",
  ],
  relatedSlugs: [
    "generer-image-ia-guide-debutant",
    "seed-cfg-steps-reglages-image-ia",
    "prompt-structure-4-blocs-ia",
  ],
  faq: [
    {
      question: "C'est quoi un prompt en IA créative ?",
      answer:
        "Un prompt, c'est la consigne que tu donnes au modèle pour qu'il génère une image ou une vidéo. C'est ta description de ce que tu veux : le sujet, le style, la lumière, le cadrage. La qualité de ton prompt détermine en grande partie la qualité du résultat. Apprendre à écrire un bon prompt est la compétence de base de toute l'IA créative.",
    },
    {
      question: "Quelle différence entre un modèle et une interface ?",
      answer:
        "Le modèle, c'est le moteur qui génère l'image, par exemple un modèle de diffusion entraîné sur des millions d'images. L'interface, c'est l'outil que tu utilises pour piloter ce moteur, par exemple un site web ou une application. Un même modèle peut être disponible dans plusieurs interfaces, et une interface peut donner accès à plusieurs modèles. Confondre les deux mène à beaucoup de malentendus.",
    },
    {
      question: "À quoi sert la seed ?",
      answer:
        "La seed est un nombre qui initialise le hasard de la génération. Avec la même seed, le même prompt et les mêmes réglages, tu obtiens la même image. Changer la seed donne une variation. C'est l'outil clé pour reproduire un résultat ou explorer des variantes contrôlées plutôt que de tout relancer au hasard.",
    },
    {
      question: "Que veulent dire CFG et steps ?",
      answer:
        "Le CFG (guidance scale) règle à quel point le modèle suit ton prompt à la lettre : trop bas, il fait n'importe quoi, trop haut, il sature et durcit l'image. Les steps sont le nombre d'étapes de calcul pour affiner l'image : plus de steps peut affiner, mais au-delà d'un certain point ça n'apporte presque rien et ça coûte du temps.",
    },
    {
      question: "C'est quoi un LoRA ?",
      answer:
        "Un LoRA est un petit module qui s'ajoute à un modèle pour lui apprendre un style, un personnage ou un objet précis, sans réentraîner tout le modèle. C'est ce qui permet d'obtenir un visage cohérent ou une esthétique de marque récurrente. Léger à entraîner et à charger, le LoRA est devenu un pilier des workflows un peu avancés.",
    },
    {
      question: "Faut-il tout connaître pour débuter ?",
      answer:
        "Non, surtout pas. Commence par prompt, seed, et le couple CFG et steps, c'est suffisant pour produire de bonnes images. Le reste, LoRA, inpainting, ControlNet, viendra quand tu en auras besoin pour un problème précis. Le vocabulaire s'apprend au fil de tes vrais projets, pas en récitant une liste par cœur d'un coup.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu te lances dans l'IA créative, et chaque tuto te balance des mots comme seed, CFG, latent, LoRA ou inpainting sans jamais les expliquer. Tu suis sans comprendre, et au premier réglage qui coince, tu es perdu.",
    },
    {
      type: "p",
      text: "Ce glossaire règle ça. Tu vas trouver ici les termes qui reviennent tout le temps en génération d'images et de vidéos, expliqués simplement, avec un exemple concret pour chacun. Pas de définition technique illisible, juste ce qu'il faut pour t'y retrouver et piloter tes outils en connaissance de cause.",
    },
    {
      type: "p",
      text: "Parce que la vérité, c'est que connaître le bon mot, c'est déjà la moitié du contrôle. Tant qu'un terme reste flou, le réglage qui va avec reste un bouton magique que tu tournes au hasard.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Pourquoi le vocabulaire compte",
    },
    {
      type: "h3",
      id: "vocabulaire-bloque",
      text: "Le jargon est une barrière, pas une fatalité",
    },
    {
      type: "p",
      text: "La plupart des débutants ne bloquent pas sur la technique, mais sur les mots. Quand tu ne sais pas ce qu'est le CFG, tu ne touches pas au réglage, donc tu subis le résultat. Quand seed ne veut rien dire pour toi, tu ne peux pas reproduire une image que tu aimais. Le flou de vocabulaire se paie cash en perte de contrôle.",
    },
    {
      type: "p",
      text: "La bonne nouvelle, c'est que le noyau utile est petit. Une vingtaine de termes couvrent l'immense majorité des situations. Une fois que tu les as, les tutos deviennent lisibles, les interfaces arrêtent de te faire peur, et tu peux enfin régler au lieu de prier.",
    },
    {
      type: "h3",
      id: "familles-termes",
      text: "Les trois grandes familles de termes",
    },
    {
      type: "p",
      text: "Pour t'organiser, range le vocabulaire en trois familles. D'abord les termes de modèle : ce qui concerne le moteur lui-même, comme diffusion, checkpoint, latent ou VAE. Ensuite les termes de pilotage : ce que tu manipules pour guider la génération, comme prompt, seed, CFG, steps, poids de mots.",
    },
    {
      type: "p",
      text: "Enfin les termes de transformation et de finition : ce qui retouche ou prolonge une image existante, comme inpainting, outpainting, upscaling, img2img ou ControlNet. Cette grille mentale t'évite de tout mélanger. Quand tu croises un mot inconnu, demande-toi d'abord à quelle famille il appartient, tu devines déjà la moitié de son rôle.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Le lexique de référence",
    },
    {
      type: "h3",
      id: "tableau-termes",
      text: "Les termes essentiels, définis simplement",
    },
    {
      type: "p",
      text: "Voici la table à garder sous la main. Chaque terme y est défini en une phrase, avec un repère d'usage concret. Tu n'as pas à la mémoriser, juste à y revenir quand un mot te bloque.",
    },
    {
      type: "table",
      caption: "Glossaire de l'IA créative, termes essentiels",
      headers: ["Terme", "Ce que c'est", "Repère concret"],
      rows: [
        ["Prompt", "La consigne texte décrivant ce que tu veux", "Sujet, style, lumière, cadrage"],
        ["Prompt négatif", "Ce que tu veux exclure de l'image", "Enlever mains ratées, texte, watermark"],
        ["Seed", "Nombre qui initialise le hasard", "Même seed, même image reproductible"],
        ["CFG (guidance)", "À quel point le modèle suit ton prompt", "Trop haut sature, trop bas part en roue libre"],
        ["Steps", "Nombre d'étapes de calcul de l'image", "Plus n'est pas toujours mieux"],
        ["Modèle", "Le moteur entraîné qui génère", "Diffusion, version d'un outil"],
        ["Checkpoint", "Un fichier de modèle entraîné", "Base sur laquelle tu génères"],
        ["Latent", "Représentation interne compressée", "L'espace où le modèle travaille"],
        ["VAE", "Convertit le latent en image visible", "Affecte couleurs et netteté finale"],
        ["LoRA", "Petit module ajoutant un style ou sujet", "Visage cohérent, esthétique de marque"],
        ["Inpainting", "Régénérer une zone précise d'une image", "Corriger une main, changer un détail"],
        ["Outpainting", "Étendre l'image au-delà de son cadre", "Élargir un décor, changer le format"],
        ["img2img", "Générer à partir d'une image existante", "Transformer une photo en style donné"],
        ["Upscaling", "Agrandir et détailler une image", "Passer en haute résolution propre"],
        ["ControlNet", "Guider la composition par une référence", "Imposer une pose, un contour"],
        ["Keyframe", "Point de passage fixé dans une vidéo", "Diriger le mouvement d'un plan"],
        ["Artefact", "Défaut visuel généré par erreur", "Doigts en trop, textures bizarres"],
        ["Morphing", "Déformation indésirable en vidéo IA", "Le sujet fond ou se transforme"],
      ],
    },
    {
      type: "p",
      text: "Pour creuser les réglages les plus sensibles, le trio seed, CFG et steps a droit à [son propre guide détaillé](/blog/seed-cfg-steps-reglages-image-ia). Et pour écrire des consignes qui tiennent la route, structure-les avec [la méthode du prompt en 4 blocs](/blog/prompt-structure-4-blocs-ia).",
    },
    {
      type: "h3",
      id: "approprier-vocabulaire",
      text: "Comment t'approprier ce vocabulaire",
    },
    {
      type: "p",
      text: "Inutile d'avaler la liste d'un coup. Le vocabulaire rentre quand tu le relies à une action réelle. Voici l'ordre qui marche le mieux pour un débutant.",
    },
    {
      type: "ol",
      items: [
        "Commence par prompt et prompt négatif, c'est 80 pour cent du résultat.",
        "Ajoute la seed dès que tu veux reproduire ou décliner une image.",
        "Apprends le couple CFG et steps pour doser fidélité et finition.",
        "Découvre l'inpainting le jour où tu dois corriger une zone précise.",
        "Garde LoRA et ControlNet pour quand un projet l'exige vraiment.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : tiens ton propre mini-glossaire. À chaque terme nouveau croisé dans un tuto, note-le avec ta définition à toi et une capture de ce qu'il change. En un mois, tu auras un lexique personnel bien plus utile que n'importe quelle liste apprise par cœur, parce qu'il sera ancré dans tes vrais essais.",
    },
    {
      type: "p",
      text: "Si tu débutes complètement, ce glossaire se lit en parallèle de [notre guide pour générer ta première image IA](/blog/generer-image-ia-guide-debutant). Et pour le fond théorique, la fiche [intelligence artificielle générative sur Wikipédia](https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative) situe bien d'où viennent ces modèles.",
    },
    {
      type: "p",
      text: "Garde en tête une chose rassurante : personne ne maîtrise tout ce vocabulaire au départ, et tu n'en as pas besoin pour commencer à créer. Les meilleurs créateurs ont appris ces termes un par un, au gré de leurs projets, en reliant chaque mot à un problème concret qu'ils cherchaient à résoudre. Considère donc ce lexique comme une référence à consulter, pas comme une leçon à réciter. Reviens-y quand un terme te bloque, applique-le aussitôt, et passe à autre chose. Le vocabulaire suivra naturellement ta pratique, et c'est exactement dans cet ordre qu'il doit venir, l'action d'abord, le mot ensuite.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Les confusions classiques",
    },
    {
      type: "h3",
      id: "erreur-cfg-steps",
      text: "Erreur 1, confondre CFG et steps",
    },
    {
      type: "p",
      text: "Tu montes les steps à fond en croyant que ça rend l'image plus fidèle à ton prompt, et il ne se passe presque rien, à part une génération plus lente. Normal : ce n'est pas le bon réglage. La fidélité au prompt, c'est le CFG. Les steps, c'est l'affinage du calcul. Deux boutons différents, deux effets différents.",
    },
    {
      type: "p",
      text: "Fix concret : pour coller davantage au prompt, joue sur le CFG, prudemment, car trop haut il sature. Pour la finition, ajuste les steps, mais sache qu'au-delà d'un seuil le gain est nul. Teste chaque réglage isolément pour sentir ce qu'il change vraiment.",
    },
    {
      type: "h3",
      id: "erreur-modele-interface",
      text: "Erreur 2, confondre le modèle et l'outil",
    },
    {
      type: "p",
      text: "Tu dis que tu utilises tel site, et tu crois que c'est lui qui crée la magie. En réalité, le site n'est qu'une interface qui appelle un modèle, parfois plusieurs. Cette confusion t'empêche de comprendre pourquoi deux outils donnent des résultats proches : ils tournent sur le même moteur.",
    },
    {
      type: "p",
      text: "Fix concret : prends l'habitude de repérer quel modèle se cache derrière l'outil que tu utilises. Tu comprendras mieux ses forces, ses limites, et tu pourras retrouver le même modèle ailleurs si une interface te déçoit.",
    },
    {
      type: "p",
      text: "> Pro Tip : quand un outil te bluffe, cherche le nom du modèle qu'il utilise. Tu le retrouveras souvent dans d'autres interfaces, parfois moins chères ou plus souples. Tu paies parfois surtout l'habillage, pas le moteur.",
    },
    {
      type: "h3",
      id: "erreur-upscale-generation",
      text: "Erreur 3, croire que l'upscale crée des détails",
    },
    {
      type: "p",
      text: "Tu upscales une image ratée en espérant qu'elle devienne nette et propre. Mais l'upscaling agrandit et reconstruit, il ne sauve pas une image mal composée ou pleine d'artefacts. Tu obtiens une grande image ratée au lieu d'une petite.",
    },
    {
      type: "p",
      text: "Fix concret : règle la composition et les défauts d'abord, en régénérant ou en inpaintant, puis upscale seulement une image déjà bonne. L'upscale est une étape de finition, pas une baguette magique de réparation.",
    },
    {
      type: "h3",
      id: "erreur-prompt-fourre-tout",
      text: "Erreur 4, traiter le prompt comme un fourre-tout",
    },
    {
      type: "p",
      text: "Tu empiles cinquante mots dans ton prompt en pensant que plus tu en mets, plus tu contrôles. Résultat, le modèle dilue tout et ne sait plus ce qui est important. Le prompt n'est pas une liste de courses, c'est une consigne hiérarchisée.",
    },
    {
      type: "p",
      text: "Fix concret : structure ton prompt et mets en avant ce qui compte le plus. Si un élément doit dominer, donne-lui du poids plutôt que de noyer dix idées au même niveau. La pondération des mots est justement faite pour ça.",
    },
    {
      type: "p",
      text: "Avec ce lexique en tête, tu ne lis plus les tutos en mode survie, tu les comprends. Chaque terme renvoie à un bouton, chaque bouton à un effet, et chaque effet à une décision créative que tu prends en connaissance de cause. C'est exactement ce vocabulaire de base qu'on solidifie ensemble dans la formation IA gratuite, pour passer du hasard au contrôle.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "C'est quoi un prompt en IA créative ?",
    },
    {
      type: "p",
      text: "Un prompt, c'est la consigne que tu donnes au modèle pour qu'il génère une image ou une vidéo. C'est ta description de ce que tu veux : le sujet, le style, la lumière, le cadrage. La qualité de ton prompt détermine en grande partie la qualité du résultat. Apprendre à écrire un bon prompt est la compétence de base de toute l'IA créative.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle différence entre un modèle et une interface ?",
    },
    {
      type: "p",
      text: "Le modèle, c'est le moteur qui génère l'image, par exemple un modèle de diffusion entraîné sur des millions d'images. L'interface, c'est l'outil que tu utilises pour piloter ce moteur, par exemple un site web ou une application. Un même modèle peut être disponible dans plusieurs interfaces, et une interface peut donner accès à plusieurs modèles. Confondre les deux mène à beaucoup de malentendus.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "À quoi sert la seed ?",
    },
    {
      type: "p",
      text: "La seed est un nombre qui initialise le hasard de la génération. Avec la même seed, le même prompt et les mêmes réglages, tu obtiens la même image. Changer la seed donne une variation. C'est l'outil clé pour reproduire un résultat ou explorer des variantes contrôlées plutôt que de tout relancer au hasard.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Que veulent dire CFG et steps ?",
    },
    {
      type: "p",
      text: "Le CFG (guidance scale) règle à quel point le modèle suit ton prompt à la lettre : trop bas, il fait n'importe quoi, trop haut, il sature et durcit l'image. Les steps sont le nombre d'étapes de calcul pour affiner l'image : plus de steps peut affiner, mais au-delà d'un certain point ça n'apporte presque rien et ça coûte du temps.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "C'est quoi un LoRA ?",
    },
    {
      type: "p",
      text: "Un LoRA est un petit module qui s'ajoute à un modèle pour lui apprendre un style, un personnage ou un objet précis, sans réentraîner tout le modèle. C'est ce qui permet d'obtenir un visage cohérent ou une esthétique de marque récurrente. Léger à entraîner et à charger, le LoRA est devenu un pilier des workflows un peu avancés.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Faut-il tout connaître pour débuter ?",
    },
    {
      type: "p",
      text: "Non, surtout pas. Commence par prompt, seed, et le couple CFG et steps, c'est suffisant pour produire de bonnes images. Le reste, LoRA, inpainting, ControlNet, viendra quand tu en auras besoin pour un problème précis. Le vocabulaire s'apprend au fil de tes vrais projets, pas en récitant une liste par cœur d'un coup.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-06-19 -->
