import type { Article } from "@/lib/types/article";

export const decouperVideoLongueShortsIa: Article = {
  title: "Découper une vidéo longue en Shorts avec l'IA",
  slug: "decouper-video-longue-shorts-ia",
  description:
    "Découper une vidéo longue en Shorts avec l'IA : la méthode en six étapes, la règle YouTube qui bloque les clips de plus d'une minute, et le vrai coût.",
  excerpt:
    "Les outils de découpage automatique sortent une vingtaine d'extraits corrects en quelques minutes. Le tri reste ton problème, et la règle de droits qui décide si ton clip de 70 secondes survit à la semaine aussi.",
  category: "ia-video",
  tags: ["Shorts", "montage", "TikTok", "YouTube"],
  date: "2026-09-02",
  updatedAt: "2026-09-02",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/decouper-video-longue-shorts-ia.webp",
  imageAlt:
    "Vidéaste accroupi au fond d'une salle de conférence, caméra sur trépied et smartphone fixé à la verticale sur le même pied, tous deux pointés vers un intervenant sur scène",
  keywords: [
    "decouper video shorts ia",
    "clips automatiques ia",
    "repurposing video",
    "opus clip",
    "shorts youtube ia",
  ],
  relatedSlugs: [
    "video-courte-ia-tiktok-reels-shorts",
    "sous-titres-automatiques-ia-video",
    "monter-video-ia-capcut-davinci",
  ],
  faq: [
    {
      question: "Quel outil choisir pour découper une vidéo longue en Shorts ?",
      answer:
        "Opus Clip et Vizard reviennent le plus souvent, Klap fait la même promesse, et CapCut couvre le besoin gratuitement si tu acceptes de repérer les passages toi-même. Le choix pèse moins lourd qu'on ne le croit : tous s'appuient sur la transcription et proposent des extraits très proches sur une même source. Regarde plutôt le mode de facturation, la qualité du français dans les sous-titres, et la possibilité de ne soumettre qu'une portion de la vidéo.",
    },
    {
      question: "Un Short peut-il durer plus d'une minute ?",
      answer:
        "Oui, jusqu'à trois minutes depuis le 15 octobre 2024, à condition d'être au format carré ou vertical. Le centre d'aide de YouTube ajoute une contrepartie sévère : tout Short de plus d'une minute faisant l'objet d'une réclamation pour atteinte aux droits d'auteur active, de n'importe quel type, y compris manuelle, sera bloqué dans le monde entier, ni lisible ni recommandé ni éligible à la monétisation. La chaîne ne prend aucune sanction, mais le clip reste mort tant que la réclamation n'est pas résolue. Dès qu'un extrait contient de la musique ou une image tierce, reste sous les 60 secondes.",
    },
    {
      question: "Combien coûte le découpage automatique d'une vidéo ?",
      answer:
        "Chez Opus Clip, la page d'aide indique un crédit par minute de vidéo importée, avec l'exemple d'une vidéo de 30 minutes qui consomme 30 crédits. Le nombre de clips produits n'entre pas dans le calcul. Les offres affichées au moment où j'écris vont de la formule gratuite à 15 $ par mois pour Starter et 29 $ pour Pro. Le vrai levier sur la facture reste la durée que tu soumets.",
    },
    {
      question: "Les scores de viralité des outils sont-ils fiables ?",
      answer:
        "Ils me servent à ranger une liste de vingt propositions, et c'est tout. Un score se calcule sur le contenu du clip seul. Ton audience, ton historique de publication et les fois où tu as déjà raconté la même idée n'entrent nulle part dans ce calcul. Trie par score décroissant si ça t'arrange, puis regarde les trois premières secondes de chaque proposition et décide toi-même. Sur mes propres découpages, le clip qui a le mieux marché a rarement été celui en tête de liste.",
    },
    {
      question: "Peut-on découper une vidéo longue en Shorts gratuitement ?",
      answer:
        "Oui, avec un peu de travail manuel. Repère les minutages dans ton lecteur, importe la portion dans CapCut ou DaVinci Resolve, recadre en 9:16 et génère les sous-titres. Compte vingt à trente minutes par clip la première fois, une dizaine ensuite. Les offres gratuites des outils de découpage existent aussi, avec des quotas qui bougent souvent et parfois un filigrane sur les exports, donc va lire la page tarifaire avant de t'engager.",
    },
    {
      question: "Faut-il publier le même clip sur TikTok, Reels et Shorts ?",
      answer:
        "Réutilise le même montage, mais réexporte un fichier par plateforme. Change au minimum l'accroche écrite et la première image, parce que les trois plateformes n'affichent pas la même chose autour de ta vidéo. Les plafonds de durée évoluent régulièrement et les articles qui les recensent se contredisent, donc vérifie dans l'application au moment de publier. Republier un fichier portant le filigrane d'une autre plateforme reste une vieille erreur qui se voit immédiatement.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Un extrait de 58 secondes passe. Le même passage rallongé à 1 min 10 peut se retrouver bloqué dans le monde entier, illisible et non monétisable, alors que ta chaîne, elle, ne prend aucun avertissement. YouTube applique aux Shorts qui dépassent la minute une règle de droits d'auteur nettement plus dure, et je n'ai encore vu aucun tutoriel français de découpage automatique la mentionner.",
    },
    {
      type: "p",
      text: "Alors on prend le sujet dans l'ordre où il coûte de l'argent et du temps : préparer la source, laisser l'outil proposer, trancher soi-même, fixer la durée en fonction des droits, recadrer, sous-titrer. Une seule de ces six étapes tourne vraiment toute seule.",
    },
    {
      type: "p",
      text: "Deuxième chiffre qui change la méthode, écrit noir sur blanc dans le centre d'aide d'Opus Clip : un crédit part par minute de vidéo importée. Une conférence d'une heure coûte donc soixante crédits, que l'outil en tire quatre extraits ou quinze. Ça règle la question du point de départ.",
    },
    {
      type: "h2",
      id: "ce-que-lia-lit",
      text: "Ce que les outils de découpage lisent vraiment",
    },
    {
      type: "p",
      text: "Ces outils travaillent sur ta transcription. Ils repèrent une question, une réponse complète, une phrase qui se suffit à elle-même, puis proposent un début et une fin autour. L'image n'entre quasiment pas dans la décision.",
    },
    {
      type: "p",
      text: "Une vidéo sans parole, un montage musical ou du b-roll, ne donne donc rien d'exploitable. Et une source où deux personnes se coupent la parole en permanence produit des extraits qui commencent au milieu d'un mot, parce que la transcription ne dit pas qui a la main. Si tu pars de zéro plutôt que d'une source existante, [créer directement des vidéos courtes avec l'IA](/blog/video-courte-ia-tiktok-reels-shorts) répond à d'autres règles.",
    },
    {
      type: "p",
      text: "En français, la transcription reste le maillon fragile. Prénoms, noms de marque et sigles ressortent approximatifs presque à chaque fois. Sur le repérage des passages, ça passe. Au moment des sous-titres, l'erreur s'affiche en gros à l'écran et tout le monde la voit.",
    },
    {
      type: "h3",
      id: "prerequis-source",
      text: "Ce que ta source doit avoir avant de payer une minute de traitement",
    },
    {
      type: "ul",
      items: [
        "Une piste voix propre, sans musique par-dessus les passages que tu comptes sortir.",
        "Des idées qui tiennent debout toutes seules en 40 à 60 secondes, sans dépendre de ce qui a été dit dix minutes plus tôt.",
        "Un cadrage qui supporte la coupe verticale : deux intervenants assis aux extrémités d'un plan large ne rentreront jamais dans un 9:16.",
        "Des noms propres prononcés distinctement, sinon prévois la correction des sous-titres.",
        "Aucun extrait musical ni vidéo tierce dans les passages que tu comptes faire durer plus d'une minute.",
      ],
    },
    {
      type: "h2",
      id: "methode-six-etapes",
      text: "La méthode en six étapes",
    },
    {
      type: "h3",
      id: "etape-1-couper-la-source",
      text: "1. Couper la source avant de l'envoyer",
    },
    {
      type: "p",
      text: "Le [centre d'aide d'Opus Clip](https://help.opus.pro/docs/article/how-are-credits-consumed) l'écrit sans détour : traiter des clips coûte un crédit par minute de la vidéo d'origine importée, et une vidéo de 30 minutes consomme 30 crédits. Le nombre de clips que l'outil te rend ne change rien à la facture.",
    },
    {
      type: "image",
      src: "/images/articles/decouper-video-longue-shorts-ia-credits-opus.webp",
      alt: "Page d'aide d'Opus Clip expliquant qu'un crédit est consommé par minute de vidéo importée, avec l'exemple d'une vidéo de 30 minutes qui coûte 30 crédits",
      caption:
        "La page How Do Credits Work? du centre d'aide Opus Clip (help.opus.pro), capturée le 2 septembre 2026.",
    },
    {
      type: "p",
      text: "La même page signale une porte de sortie que peu de gens utilisent, un curseur Processing timeframe qui permet de ne soumettre qu'une portion de la vidéo. Sur un live de deux heures dont quarante minutes sont réellement utiles, ça fait la différence entre 120 crédits et 40.",
    },
    {
      type: "p",
      text: "Et sans même cette histoire de facturation, la coupe préalable améliore ce que l'outil te renvoie. Moins tu envoies de remplissage, moins il t'en propose.",
    },
    {
      type: "h3",
      id: "etape-2-trier",
      text: "2. Demander beaucoup de propositions, en garder trois",
    },
    {
      type: "p",
      text: "Règle le nombre de clips au maximum que ton offre autorise, puis regarde uniquement les trois premières secondes de chacun. Si la première phrase ne tient pas debout hors contexte, passe au suivant sans regarder la suite. Ce tri prend dix minutes pour vingt propositions.",
    },
    {
      type: "p",
      text: "Les scores de viralité affichés à côté de chaque clip me servent à trier cette liste, sans plus. À l'usage, les extraits les mieux notés sont surtout ceux qui parlent vite et qui s'ouvrent sur une question. C'est un indice. Ton jugement décide.",
    },
    {
      type: "h3",
      id: "etape-3-debut-et-fin",
      text: "3. Rendre au clip un début et une fin",
    },
    {
      type: "p",
      text: "Un extrait découpé automatiquement commence là où la phrase commence, ce qui n'est presque jamais là où le spectateur a besoin d'entrer. Il manque le sujet de la conversation, et le clip démarre en plein milieu d'un raisonnement.",
    },
    {
      type: "p",
      text: "Deux corrections, cinq minutes chacune. Remonter la punchline en tête et laisser l'explication derrière, ou enregistrer une amorce de cinq secondes qui pose le contexte. La seconde solution vaut mieux quand l'extrait répond à une question qu'on n'entend pas.",
    },
    {
      type: "p",
      text: "C'est le travail décrit dans notre méthode pour [tenir les trois premières secondes d'une vidéo](/blog/hook-3-secondes-video-ia), appliqué cette fois à un matériau que tu n'as pas écrit pour ça.",
    },
    {
      type: "h3",
      id: "etape-4-duree-et-droits",
      text: "4. Fixer la durée en fonction des droits",
    },
    {
      type: "p",
      text: "Depuis le 15 octobre 2024, YouTube classe en Short toute vidéo mise en ligne au format carré ou vertical dont la durée ne dépasse pas trois minutes. Beaucoup s'arrêtent à cette phrase et publient tranquillement des extraits d'une minute et demie.",
    },
    {
      type: "p",
      text: "Le [centre d'aide de YouTube](https://support.google.com/youtube/answer/15424877?hl=fr) précise en effet qu'un Short de plus d'une minute faisant l'objet d'une réclamation pour atteinte aux droits d'auteur active, de n'importe quel type, y compris manuelle, sera bloqué dans le monde entier. La vidéo n'est plus lisible, plus recommandée, plus éligible à la monétisation. La chaîne ne prend aucune sanction, mais le clip reste mort tant que la réclamation n'est pas résolue.",
    },
    {
      type: "image",
      src: "/images/articles/decouper-video-longue-shorts-ia-youtube-droits.webp",
      alt: "Section du centre d'aide YouTube intitulée Contenu revendiqué par un tiers dans un Short de plus d'une minute, précisant que le Short sera bloqué dans le monde entier",
      caption:
        "Page À propos des Shorts YouTube de trois minutes, centre d'aide YouTube (support.google.com), capturée le 2 septembre 2026.",
    },
    {
      type: "p",
      text: "En dessous d'une minute, les limites habituelles ne changent pas. YouTube indique par ailleurs, sur sa page d'[éligibilité de la musique pour les Shorts](https://support.google.com/youtube/answer/13486873?hl=fr), qu'on peut selon le titre ajouter jusqu'à 90 secondes de musique à un Short de trois minutes en passant par ses propres outils.",
    },
    {
      type: "p",
      text: "Donc, si ton passage contient un jingle, un extrait de plateau ou un fond musical sous licence, reste sous les 60 secondes. Au-delà de la minute, ne publie que du matériau dont tu possèdes l'intégralité. Cette règle a un effet secondaire agréable, elle t'oblige à couper serré.",
    },
    {
      type: "h3",
      id: "etape-5-recadrage",
      text: "5. Recadrer pour la bonne vitrine",
    },
    {
      type: "p",
      text: "Carré ou vertical sous trois minutes, YouTube range ta vidéo dans les Shorts et la pousse dans ce flux. En 16:9, elle part dans les vidéos longues, avec un modèle de partage des revenus différent. Ce choix se joue à l'export, et il ne se rattrape pas ensuite.",
    },
    {
      type: "p",
      text: "Le recadrage automatique fait très bien son travail sur un seul visage centré. Il décroche dès qu'il y a deux intervenants qui se répondent, un partage d'écran, ou du texte incrusté près des bords du plan d'origine. Dans ces cas-là, pose deux ou trois points de recadrage à la main, ou repasse par ton logiciel de montage.",
    },
    {
      type: "p",
      text: "Si tu préfères garder la main de bout en bout, notre guide du [montage vidéo assisté par IA sur CapCut et DaVinci](/blog/monter-video-ia-capcut-davinci) couvre le recadrage manuel et les rendus verticaux.",
    },
    {
      type: "h3",
      id: "etape-6-sous-titres",
      text: "6. Sous-titrer, puis relire",
    },
    {
      type: "p",
      text: "Les sous-titres brûlés ne sont plus optionnels sur ces formats. Tous les outils de découpage en génèrent automatiquement, avec les mêmes approximations qu'ailleurs sur le français.",
    },
    {
      type: "p",
      text: "Relis systématiquement les noms propres, les chiffres et les sigles. Une faute sur le nom d'un client, dans un extrait publié sous ta marque, se remarque plus que tout le reste du clip. Les réglages en détail sont dans notre guide des [sous-titres automatiques pour tes vidéos](/blog/sous-titres-automatiques-ia-video).",
    },
    {
      type: "h2",
      id: "adapter-selon-la-source",
      text: "Adapter la méthode selon ce que tu découpes",
    },
    {
      type: "p",
      text: "Un podcast, un webinaire et un tutoriel filmé à l'écran ne donnent pas du tout les mêmes propositions. Voilà ce que j'observe en passant de l'un à l'autre.",
    },
    {
      type: "table",
      caption:
        "Repères de production issus de mes propres découpages, pas des règles officielles.",
      headers: [
        "Type de source",
        "Ce que l'IA repère bien",
        "Ce qu'elle rate",
        "Durée visée",
      ],
      rows: [
        [
          "Podcast ou interview à deux",
          "Les questions suivies d'une réponse complète",
          "Les silences de réaction qui font tout le sel du passage",
          "40 à 60 s",
        ],
        [
          "Conférence ou webinaire",
          "Les définitions et les chiffres annoncés à voix haute",
          "Les moments qui dépendent d'un slide hors champ",
          "50 à 90 s",
        ],
        [
          "Tutoriel à l'écran",
          "Les étapes énoncées clairement",
          "Tout ce qui se joue dans un coin de l'écran sans être dit",
          "30 à 45 s",
        ],
        [
          "Live ou stream",
          "Les pics de réaction verbale",
          "Le contexte des dix minutes qui précèdent",
          "20 à 40 s",
        ],
        [
          "Vidéo déjà montée",
          "Les phrases fortes de la voix off",
          "Le fait que le montage a déjà consommé les respirations",
          "30 à 50 s",
        ],
      ],
    },
    {
      type: "p",
      text: "La vidéo déjà montée est le cas le plus décevant, et je le redécouvre à chaque fois. Le montage a mangé les respirations, les extraits sortent secs, et il faut presque toujours réécrire une amorce complète pour que le clip respire à nouveau.",
    },
    {
      type: "h2",
      id: "erreurs",
      text: "Les erreurs qui coûtent le plus cher",
    },
    {
      type: "ul",
      items: [
        "Envoyer la source brute alors que les quarante premières minutes ne servent à rien : la facture porte sur les minutes importées.",
        "Publier les dix propositions de l'outil. Le tri, c'est justement le travail qu'il ne fait pas.",
        "Dépasser la minute sur un passage qui contient de la musique ou une image tierce.",
        "Laisser le recadrage automatique se débrouiller avec un plan à deux personnes.",
        "Exporter en 16:9 puis se demander pourquoi la vidéo n'apparaît jamais dans le flux Shorts.",
        "Poster le fichier strictement identique sur les trois plateformes, filigrane compris.",
      ],
    },
    {
      type: "p",
      text: "La politique de YouTube sur le contenu inauthentique, précisée le 15 juillet 2025, vise la production en série et répétitive sans apport propre. Découper ta propre conférence en cinq extraits reste très loin de ce qu'elle cible. Sortir quarante clips par semaine à partir de vidéos qui appartiennent à d'autres, beaucoup moins. J'ai détaillé où passe la frontière dans notre article sur [la chaîne YouTube automatisée](/blog/chaine-youtube-automatisee-ia).",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Le premier découpage à tenter",
    },
    {
      type: "p",
      text: "Prends ta dernière vidéo de plus de vingt minutes. Repère à la main les deux ou trois moments où tu as dit quelque chose que tu n'avais jamais dit ailleurs, note les minutages, et ne soumets que ces portions à l'outil. Tu paieras une fraction du prix et tu obtiendras de meilleurs candidats.",
    },
    {
      type: "p",
      text: "Vérifie ensuite une seule chose avant de publier : est-ce qu'un de tes extraits contient de la musique ou une image qui ne t'appartient pas ? Si oui, coupe-le à 58 secondes. Ça t'évitera de découvrir la règle des droits par un blocage mondial, un dimanche soir.",
    },
    {
      type: "p",
      text: "Note de fondateur : la première fois que j'ai envoyé un live entier dans un outil de découpage, j'y ai laissé mon quota du mois pour une poignée de clips publiables. Depuis, je repère les passages à la main avant de soumettre quoi que ce soit. Les modules production de la formation IA gratuite d'AI Studios défendent le même ordre, décider d'abord, automatiser ensuite.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-02 -->
