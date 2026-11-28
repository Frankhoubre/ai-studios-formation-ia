import type { Article } from "@/lib/types/article";

const CAPTURE = "2026-11-28";
const IMG = "/images/articles/ia-remplace-videastes";
const CNC =
  "https://www.cnc.fr/documents/36995/2515955/Barom%C3%A8tre+des+usages+IA+-+Studios+num%C3%A9riques+-+juin+2026.pdf/c385eeff-49fe-f3d7-68f5-c5d159d22433?t=1782400158092";
const CNC_OBS = "https://www.cnc.fr/professionnels/observatoire-de-lintelligence-artificielle_2390539";
const AFDAS =
  "https://observatoires.afdas.com/sites/default/files/document-ressource/Impact%20de%20l'intelligence%20artificielle%20g%C3%A9n%C3%A9rative%20sur%20les%20cr%C3%A9atifs%20ind%C3%A9pendants%20dans%20le%20spectacle%20vivant%20et%20l'audiovisuel_mars%202026.pdf";

const FAQ = [
  {
    question: "L'IA va-t-elle remplacer les vidéastes ?",
    answer:
      "Pas en bloc. Elle remplace des commandes précises : animations simples, vidéos d'illustration, déclinaisons, transcriptions. Les tournages qui témoignent du réel (mariage, reportage, portrait d'entreprise) tiennent, comme les projets où le client veut contrôler chaque détail. Le risque est réel pour les vidéastes qui vivent surtout de petites commandes standardisées.",
  },
  {
    question: "Quels métiers de la vidéo sont les plus exposés à l'IA ?",
    answer:
      "D'après l'étude Afdas d'avril 2026, les commandes qui baissent sont les animations graphiques simples (logos animés, animations courtes), la transcription, l'image d'illustration, la musique de stock et les déclinaisons d'images déjà tournées. Le baromètre CNC de juin 2026 montre que les studios de VFX sont ceux qui anticipent le plus de destructions d'emplois (41,4 %).",
  },
  {
    question: "Les studios français suppriment-ils des postes à cause de l'IA ?",
    answer:
      "Une partie, oui. Dans le baromètre CNC de juin 2026 (91 studios interrogés du 7 avril au 11 juin), 35,7 % des studios d'animation, 30 % des studios de postproduction et 41,4 % des studios de VFX citent des destructions d'emplois parmi les impacts de l'IA. Ces parts sont en baisse par rapport à 2025.",
  },
  {
    question: "Est-ce que ça vaut encore le coup de devenir vidéaste ?",
    answer:
      "Oui, à condition de ne pas construire ton activité sur les seules petites commandes faciles à générer. Vise des missions où ta présence compte (tournage réel, direction, montage d'histoire) et apprends les outils IA pour livrer plus vite. Le vrai danger concerne les débuts de carrière : la moitié des studios d'animation et de postproduction redoutent une fragilisation de la formation des juniors.",
  },
  {
    question: "Faut-il se former à l'IA quand on est vidéaste ?",
    answer:
      "Oui. Le baromètre CNC montre que 82,4 % des studios numériques ont déjà testé des outils d'IA et que 56,3 % de ceux qui ont essayé l'IA générative s'en servent au quotidien ou régulièrement. Tes clients et tes concurrents s'y mettent. Apprendre les outils te permet de garder les commandes qui se transforment au lieu de les perdre.",
  },
  {
    question: "Comment facturer la correction d'une vidéo générée par IA ?",
    answer:
      "Au temps passé, avec un devis après visionnage des fichiers. L'étude Afdas note que les commandes de correction de rendus IA arrivent souvent avec des budgets réduits alors qu'elles prennent plus de temps que prévu. Ne promets jamais un forfait avant d'avoir vu les rushs générés.",
  },
];

export const iaRemplaceVideastes: Article = {
  title: "L'IA va-t-elle remplacer les vidéastes ? Mon avis",
  slug: "ia-remplace-videastes",
  description:
    "L'IA va-t-elle remplacer les vidéastes ? Mon avis de réalisateur IA, appuyé sur le baromètre CNC 2026 et l'étude Afdas : ce qui disparaît, ce qui tient.",
  excerpt:
    "Je fais des films avec l'IA et je forme des créateurs. Ma réponse : l'IA prend des commandes aux vidéastes, une à une. Voici lesquelles, chiffres du CNC à l'appui, et comment faire le tri dans les tiennes.",
  category: "business-creatif",
  tags: ["avenir vidéaste", "emploi", "vidéo IA", "freelance", "opinion"],
  date: "2026-11-28",
  updatedAt: "2026-11-28",
  readingTime: 10,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/ia-remplace-videastes.webp",
  imageAlt:
    "Dans une grange en pierre éclairée de guirlandes, une vidéaste filme caméra en main un grand-père qui danse avec sa petite-fille pendant un mariage",
  keywords: [
    "ia remplace vidéaste",
    "avenir vidéaste ia",
    "ia va remplacer les vidéastes",
    "métier vidéaste intelligence artificielle",
    "emploi audiovisuel ia",
  ],
  relatedSlugs: ["devenir-freelance-creation-ia", "apprendre-ia-creative-parcours", "openai-upwork-freelances-ia-video"],
  faq: FAQ,
  content: [
    {
      type: "p",
      text: "**Ma réponse : l'IA remplace des commandes de vidéastes, et elle a déjà commencé. Le métier, lui, reste.** Le petit logo animé, la courte vidéo d'illustration pour un site, la déclinaison d'un spot en dix formats : ces missions-là fondent. Le mariage, le reportage, le film où le client veut maîtriser chaque plan, eux, tiennent.",
    },
    {
      type: "p",
      text: "Je ne te donne pas cet avis de loin. Je réalise des films avec l'IA (VOIDBORN, Ronces, la série Lost Garden) et je forme des créateurs à ces outils. Donc j'ai un intérêt évident à te dire que l'IA est formidable. Justement, je vais m'appuyer sur deux études françaises publiées en 2026 plutôt que sur mon enthousiasme : le baromètre du CNC sur les studios et l'étude de l'Afdas sur les créatifs indépendants.",
    },
    {
      type: "p",
      text: "À la fin, tu sauras quelles commandes sont exposées, lesquelles résistent, et tu auras une méthode pour trier les tiennes en une heure. Le vidéaste qui a le plus de souci à se faire, c'est celui dont tout le chiffre d'affaires repose sur des petites missions standardisées.",
    },
    { type: "h2", id: "core-concepts", text: "Ce que l'IA remplace déjà chez les vidéastes" },
    { type: "h3", id: "commandes-pas-metiers", text: "Des commandes qui disparaissent, une à une" },
    {
      type: "p",
      text: "L'Afdas, l'organisme qui finance la formation des métiers de la culture, a publié en avril 2026 une étude menée par Rosa Futures et CG Conseil (groupe Amnyos) entre août 2025 et février 2026 : 38 entretiens d'une heure avec des créatifs de 13 métiers, dont réalisateurs, animateurs 2D/3D et photographes. C'est qualitatif, sans prétention statistique, mais c'est du terrain.",
    },
    {
      type: "p",
      text: "Leur grille m'a plus appris que n'importe quelle prévision. Ils classent les commandes en quatre cases selon le prix et le volume. Dans l'industrialisation, le volume monte et le prix baisse : c'est là qu'ils rangent les « animations graphiques simples (logos animés, animations courtes) ». Le remplacement, c'est la commande qui s'éteint, comme la transcription, la photo d'illustration ou la musique de stock. L'expansion ouvre de nouveaux marchés, par exemple corriger des images IA ratées en animation. Reste la premiumisation : moins de commandes, mieux payées, pour une vraie expertise.",
    },
    {
      type: "screenshot",
      src: `${IMG}-afdas-commandes.webp`,
      alt: "Page 20 de l'étude Afdas Créatifs et IAG : grille en quatre cases, industrialisation, expansion, remplacement et premiumisation, avec les commandes citées dans chaque case",
      caption: "La grille des quatre évolutions de commandes, page 20 de l'étude Afdas « Créatifs & IAG » (avril 2026). Rendu de la page le 28 novembre 2026.",
      source: AFDAS,
      capturedAt: CAPTURE,
      width: 1280,
      height: 720,
    },
    {
      type: "p",
      text: "Un animateur 2D/3D interrogé par l'étude résume bien la ligne de partage. Pour lui, c'est toute la chaîne de valeur qui saute dans les projets « où on s'en fiche du détail », et il cite la publicité, le documentaire, l'institutionnel. Il ajoute qu'il y aura longtemps des studios et des marques prêts à payer pour un niveau de retouche que l'IA ne permet pas.",
    },
    { type: "h3", id: "chiffres-cnc", text: "Ce que disent les studios français en 2026" },
    {
      type: "p",
      text: "Le CNC a interrogé 91 studios d'animation, de postproduction et de VFX du 7 avril au 11 juin 2026, pour son [Observatoire de l'IA](" + CNC_OBS + "). Résultat : 82,4 % ont déjà testé des outils d'IA, et la quasi-totalité des studios de VFX (97 %). L'IA y sert surtout à tester des idées, à l'upscaling, à la rotoscopie et au compositing, à l'étalonnage.",
    },
    {
      type: "p",
      text: "Sur l'emploi, [le baromètre de juin 2026](" + CNC + ") est plus nuancé que les titres alarmistes. Les destructions d'emplois figurent parmi les impacts cités par 35,7 % des studios d'animation, 30 % des studios de postproduction et 41,4 % des studios de VFX. C'est beaucoup. C'est aussi moins qu'en 2025 (12,7 points de moins en animation). Et la transformation des tâches arrive loin devant, citée par 61,9 % à 79,3 % des studios selon l'activité.",
    },
    {
      type: "screenshot",
      src: `${IMG}-cnc-emploi.webp`,
      alt: "Page 11 du baromètre CNC 2026 des usages de l'IA, volet studios numériques : graphique de la nature des impacts par activité, transformation des tâches, fragilisation de la formation, destruction d'emplois, nouvelles embauches",
      caption: "Nature des impacts de l'IA selon l'activité, page 11 du baromètre CNC « Studios numériques » (juin 2026). Rendu de la page le 28 novembre 2026.",
      source: CNC,
      capturedAt: CAPTURE,
      width: 1280,
      height: 720,
    },
    {
      type: "p",
      text: "Deux témoignages anonymes du même document montrent l'écart. Un studio d'animation dit avoir créé 4 équivalents temps plein en un an grâce à l'IA. Un studio de postproduction raconte qu'il a dû se séparer d'un tiers de ses collaborateurs, avec plus de travail pour un chiffre d'affaires beaucoup plus bas.",
    },
    { type: "h3", id: "juniors", text: "Les débutants, premiers touchés" },
    {
      type: "p",
      text: "52,4 % des studios d'animation et 53,3 % des studios de postproduction redoutent une fragilisation de la formation. De tout le baromètre, c'est le chiffre qui m'inquiète le plus. L'Afdas dit la même chose autrement : les profils installés, avec une vraie identité artistique, souffrent moins que les juniors, qui voient disparaître les « micro-commandes ». Les illustrateurs interrogés citent l'affiche de théâtre, projet typique d'apprentissage, désormais générée par les commanditaires.",
    },
    {
      type: "p",
      text: "Le premier clip pas cher, le petit film d'entreprise : on y apprenait le métier en étant payé. Si ces commandes partent vers un générateur, il faut trouver un autre chemin pour se faire la main.",
    },
    { type: "h2", id: "mon-avis", text: "Mon avis de réalisateur IA : ce qui tient, ce qui tombe" },
    {
      type: "p",
      text: "Le premier épisode de Lost Garden dure 17 minutes. Je l'ai fait seul, en 63 heures. Sans ces outils, un animé de cette durée mobilise une équipe entière. Je comprends donc parfaitement qu'un vidéaste regarde ça avec une boule au ventre.",
    },
    {
      type: "image",
      src: `${IMG}-lost-garden.webp`,
      alt: "Image de l'épisode 1 de Lost Garden : une armure de chevalier assise dans une forêt souterraine de champignons bleus lumineux, sa tête en forme de lanterne posée dans l'herbe",
      caption: "Lost Garden, épisode 1 (2 min 53), une série que je réalise seul avec l'IA. Chaque plan de ce genre est le résultat d'un choix, puis d'un tri parmi plusieurs générations.",
      width: 1280,
      height: 532,
    },
    {
      type: "p",
      text: "Mais regarde ce que contiennent ces 63 heures. Écrire le scénario, découper, choisir un cadre, refuser la génération où l'armure change de forme, recommencer, monter, poser le son. Aucun outil n'a pris une seule de ces décisions à ma place. L'IA m'a donné une équipe de fabrication, et c'est toujours moi qui sais ce que chaque plan doit raconter.",
    },
    {
      type: "p",
      text: "Les studios le disent aussi. Dans le baromètre CNC, 5,3 % seulement des utilisateurs sont entièrement satisfaits des outils. Ceux qui ne le sont pas reprochent d'abord une qualité insuffisante (55,7 %) et un manque de continuité entre les versions (48,6 %). Tant que la cohérence d'un plan à l'autre reste un problème, il faut quelqu'un qui tienne le film.",
    },
    {
      type: "p",
      text: "Et il y a une catégorie que l'IA ne touche pas : le témoignage du réel. L'Afdas note que les commandes dont l'objet est « d'incarner humainement un sujet » sont préservées, et les photographes interrogés citent le mariage et le reportage en entreprise. Personne ne veut une vidéo générée du mariage de sa fille. Même dans la pub, le balancier existe : après deux Noëls en IA générative, [Coca-Cola est revenu au tournage réel pour sa campagne 2026](/blog/coca-cola-pub-noel-sans-ia).",
    },
    {
      type: "p",
      text: "Pour l'argent, l'étude CISAC et PMP Strategy de 2024, reprise par l'Afdas, estime que les créateurs de l'audiovisuel pourraient perdre 21 % de leurs revenus entre 2023 et 2028, et 15 % pour les réalisateurs. Attention, c'est une projection. Je la prends comme un ordre de grandeur sérieux : une part du gâteau s'en va, à toi de savoir laquelle.",
    },
    { type: "h2", id: "practical-workflow", text: "Fais l'inventaire de tes commandes en une heure" },
    {
      type: "p",
      text: "Le débat général ne paie pas ton loyer. Regarde plutôt quelle part de ton chiffre d'affaires tombe dans chaque case. Reprends tes factures des douze derniers mois et classe chaque mission avec ce tableau, construit à partir de la grille Afdas et de mon expérience.",
    },
    {
      type: "table",
      caption: "Classer ses missions de vidéaste selon l'exposition à l'IA (grille Afdas, avril 2026, adaptée)",
      headers: ["Type de mission", "Case Afdas", "Ce qui se passe", "Ce que je ferais"],
      rows: [
        ["Logo animé, motion design court, habillage simple", "Industrialisation", "Plus de demandes, prix qui chutent", "Livrer plus vite avec l'IA, vendre par lot ou par abonnement"],
        ["Vidéo d'illustration, plan de coupe générique", "Remplacement", "Le client le génère lui-même", "Arrêter de prospecter là-dessus"],
        ["Déclinaison d'un film en formats, saisons, langues", "Remplacement ou industrialisation", "Fait par le client ou par un outil", "Le proposer en option dans le devis du tournage"],
        ["Correction de rendus IA ratés", "Expansion", "Nouvelle demande, budgets souvent sous-estimés", "Facturer au temps, devis après visionnage"],
        ["Mariage, reportage, portrait d'entreprise", "Préservé (témoignage du réel)", "Stable", "Garder, ajouter de la postproduction IA pour gagner du temps"],
        ["Film de marque avec direction artistique forte", "Premiumisation", "Moins de projets, mieux payés", "Monter en gamme, montrer un portfolio d'auteur"],
      ],
    },
    {
      type: "ol",
      items: [
        "Exporte la liste de tes factures sur douze mois, avec le montant de chaque mission.",
        "Classe chaque ligne dans une case du tableau. Hésitation entre deux cases : prends la plus exposée.",
        "Calcule le pourcentage de ton chiffre d'affaires dans « Remplacement ». Au-dessus d'un tiers, c'est ta priorité du trimestre.",
        "Choisis une seule mission préservée ou premium à développer, et prépare un exemple concret pour la vendre.",
        "Apprends l'outil IA qui accélère tes missions en industrialisation, pour défendre ta marge au lieu de baisser ton prix.",
      ],
    },
    {
      type: "p",
      text: "Pour la suite, tu as deux pistes déjà détaillées sur le blog. Si tu veux bâtir une offre complète, la méthode pour [te lancer en freelance dans la création IA](/blog/devenir-freelance-creation-ia) part des besoins clients. Si tu pars de zéro sur les outils, suis plutôt [le parcours pour apprendre l'IA créative](/blog/apprendre-ia-creative-parcours), étape par étape.",
    },
    {
      type: "p",
      text: "Regarde aussi ce que demandent les clients. Une étude d'OpenAI sur les annonces Upwork montre des briefs qui réunissent génération IA, montage et motion design dans une seule mission, je l'ai décortiquée dans [l'article sur les freelances vidéo et l'IA](/blog/openai-upwork-freelances-ia-video). Le client ne veut plus trois prestataires.",
    },
    {
      type: "p",
      text: "> Pro Tip : refais cet inventaire tous les six mois. Une case qui grossit d'un semestre à l'autre te prévient bien avant que ton carnet de commandes se vide.",
    },
    { type: "h2", id: "trench-warfare", text: "Les erreurs qui coûtent cher aux vidéastes face à l'IA" },
    { type: "h3", id: "erreur-prix", text: "Baisser ses prix pour rester face au générateur" },
    {
      type: "p",
      text: "Symptôme : un client te dit qu'il peut avoir ton animation en dix minutes avec un outil, et tu divises ton tarif par deux pour le garder. Tu gardes le client et tu perds de l'argent sur chaque mission.",
    },
    {
      type: "p",
      text: "Fix concret : sur ces missions-là, utilise toi-même l'IA pour diviser ton temps de fabrication, pas ton prix horaire. Si même comme ça la mission n'est plus rentable, laisse-la partir et mets ton énergie sur une case mieux payée.",
    },
    { type: "h3", id: "erreur-refus", text: "Refuser d'apprendre par principe" },
    {
      type: "p",
      text: "Symptôme : tu considères que l'IA, ce n'est pas du cinéma, et tu attends que la mode passe. Pendant ce temps, 56,3 % des studios qui ont essayé l'IA générative s'en servent au quotidien ou régulièrement, d'après le CNC.",
    },
    {
      type: "p",
      text: "Fix concret : tu as le droit de ne pas aimer ces outils. Apprends-les quand même, au minimum l'upscaling, le nettoyage de plans et l'étalonnage assisté, qui font gagner des heures sans rien changer à ta signature.",
    },
    { type: "h3", id: "erreur-vendre-ia", text: "Vendre « de l'IA » au lieu de vendre un film" },
    {
      type: "p",
      text: "Symptôme : ta page d'accueil dit « vidéos générées par IA » en gros titre. Tu attires les clients qui cherchent le moins cher, et tu te retrouves dans la case industrialisation.",
    },
    {
      type: "p",
      text: "Fix concret : vends le résultat (un film qui fait réagir, une pub qui vend) et parle de l'IA comme d'un outil de fabrication parmi d'autres. Le client paie pour ton regard.",
    },
    { type: "h3", id: "erreur-correction", text: "Accepter la correction de rendus IA au forfait" },
    {
      type: "p",
      text: "Symptôme : un client t'envoie vingt plans générés « presque bons » et te demande de les finir pour un petit budget. Une traductrice citée par l'Afdas résume le problème pour son métier : beaucoup plus de temps que prévu, et pas gagnante en taux horaire.",
    },
    {
      type: "p",
      text: "Fix concret : demande les fichiers avant de chiffrer, regarde-les en entier, et facture au temps passé avec un plafond validé. Corriger un personnage qui change de visage d'un plan à l'autre peut prendre plus de temps que de le refaire.",
    },
    { type: "h2", id: "que-faire-maintenant", text: "Ce que tu peux faire cette semaine" },
    {
      type: "p",
      text: "Bloque une heure, sors tes factures et remplis le tableau. Tu sauras exactement quelle part de ton activité est menacée, au lieu de te faire peur avec des titres. Ensuite, choisis un seul outil IA qui accélère une mission que tu fais déjà, et teste-le sur ton prochain projet réel.",
    },
    {
      type: "cta",
      variant: "formation",
      title: "Apprendre les outils IA sans tout jeter",
      text: "Dans ma formation IA gratuite, je montre comment je fabrique Lost Garden : la vision, le storyboard, le montage. Trois vidéos courtes, même si tu débutes.",
    },
    {
      type: "methodology",
      date: CAPTURE,
      text: [
        "Cet article est un édito : l'avis est le mien, les chiffres viennent des documents listés ci-dessous, lus en entier le 28 novembre 2026. Le baromètre CNC « Studios numériques » de juin 2026 repose sur 91 studios interrogés du 7 avril au 11 juin 2026 ; le CNC précise que la comparaison avec 2025 doit être faite avec prudence vu la taille de l'échantillon. L'étude Afdas est qualitative (38 entretiens), elle ne mesure pas des parts de marché.",
        "Les estimations de perte de revenus viennent de l'étude CISAC et PMP Strategy de 2024, citée pages 9 et 10 de l'étude Afdas ; je ne l'ai pas relue dans sa version d'origine. Le tableau de classement des missions est ma propre adaptation de la grille Afdas. Les 63 heures de l'épisode 1 de Lost Garden sont le temps que j'ai annoncé dans une vidéo YouTube du 23 juin 2026.",
      ],
      teste: ["Lecture intégrale du baromètre CNC et de l'étude Afdas", "Rendu des pages citées en image à partir des PDF officiels"],
      nonTeste: [
        "Les chiffres d'emploi des vidéastes indépendants, aucune statistique publique fiable trouvée",
        "Les autres volets du baromètre CNC (producteurs, auteurs), non repris ici",
      ],
      sources: [
        { label: "CNC, Baromètre des usages de l'IA dans le cinéma et l'audiovisuel 2026, volet studios numériques (juin 2026)", href: CNC },
        { label: "CNC, Observatoire de l'intelligence artificielle", href: CNC_OBS },
        { label: "Afdas, Rosa Futures et Amnyos, Créatifs & IAG, étude sur les impacts de l'IA générative (avril 2026)", href: AFDAS },
      ],
    },
    { type: "h2", id: "faq", text: "FAQ" },
    ...FAQ.flatMap((item, i) => [
      { type: "h3" as const, id: `faq-${i + 1}`, text: item.question },
      { type: "p" as const, text: item.answer },
    ]),
  ],
};

// <!-- PUBLICATION DATE: 2026-11-28 -->
