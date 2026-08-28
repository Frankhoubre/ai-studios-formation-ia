import type { Article } from "@/lib/types/article";

export const promptsKlingExemples: Article = {
  title: "Prompts Kling : 20 exemples et la syntaxe Multi-Shot",
  slug: "prompts-kling-exemples",
  description:
    "20 prompts Kling à copier, la syntaxe Multi-Shot officielle et le piège du dialogue en français, que le modèle traduit en anglais avant de le jouer.",
  excerpt:
    "Kling ne lit plus un prompt comme un générateur d'images. Voici la structure officielle en cinq blocs, la syntaxe Multi-Shot, le piège du dialogue en français, et 20 prompts à copier.",
  category: "prompting",
  tags: ["kling", "prompts vidéo", "multi-shot", "audio natif", "vidéo ia"],
  date: "2026-08-28",
  updatedAt: "2026-08-28",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompts-kling-exemples.webp",
  imageAlt:
    "Une feuille de plans annotée à la main scotchée sur la porte arrière d'un van de tournage, avec un clap et un câble à l'intérieur, dans une rue pavée au petit matin",
  keywords: [
    "prompt kling",
    "kling prompts",
    "exemples prompt kling",
    "multi-shot kling",
    "kling video 3.0",
  ],
  relatedSlugs: [
    "kling-ai-videos-cinematiques",
    "prompts-video-ia-50-exemples",
    "kling-vs-runway-comparatif",
  ],
  faq: [
    {
      question: "Comment écrire un bon prompt Kling ?",
      answer:
        "Le guide officiel publié par Kling le 7 août 2026 donne cinq blocs : le sujet, l'action visible, la scène, le langage de caméra, la lumière et l'ambiance. Écris-les dans cet ordre, en phrases simples, avec une seule action principale. La différence avec un prompt d'image tient au bloc action : sans verbe de mouvement précis, tu obtiens une photo qui tremble un peu pendant cinq secondes.",
    },
    {
      question: "Kling comprend-il le français ?",
      answer:
        "Pour décrire une scène, oui, le modèle s'en sort. Pour faire parler un personnage, non : le guide officiel de Kling VIDEO 3.0 précise que l'audio natif couvre cinq langues, le chinois, l'anglais, le japonais, le coréen et l'espagnol, et qu'une réplique écrite dans une autre langue est traduite en anglais avant d'être jouée. Ton dialogue en français sortira donc en anglais, avec un mouvement de lèvres calé sur l'anglais.",
    },
    {
      question: "C'est quoi le Multi-Shot de Kling et comment l'écrire ?",
      answer:
        "C'est le mode qui génère plusieurs plans dans une seule vidéo. Interrupteur activé, le modèle découpe la séquence tout seul à partir de ta description. Le mode Custom Multi-Shot, accessible seulement une fois le Multi-Shot activé, te rend la main sur le contenu et la durée de chaque plan. Dans le prompt, tu numérotes : Shot 1, plan large de la boulangerie, Shot 2, plan moyen sur les mains, Shot 3, gros plan sur la vapeur.",
    },
    {
      question: "Combien coûte une génération Kling en crédits ?",
      answer:
        "Le guide officiel du modèle facture la série VIDEO 3.0 à la seconde : 6 crédits en 720p sans audio natif, 8 en 1080p sans audio, 9 en 720p avec audio, 12 en 1080p avec audio. Le contrôle du timbre de voix ajoute 2 crédits par seconde, et le mode 4K natif monte à 30. Un plan de 10 secondes en 1080p avec audio te coûte donc 120 crédits, un brouillon de 5 secondes en 720p muet en coûte 30.",
    },
    {
      question: "Comment garder le même personnage d'un plan à l'autre ?",
      answer:
        "Par les éléments, pas par la description. Kling laisse créer un élément à partir de 2 à 4 images de référence, ou d'une vidéo dont il extrait l'apparence et le timbre de voix. Une fois l'élément lié, son timbre est attaché au personnage et le guide officiel recommande de ne plus le repréciser dans le prompt. Écrire trois fois le même signalement dans ton texte ne remplace pas cette liaison.",
    },
    {
      question: "Faut-il écrire ses prompts Kling en anglais ?",
      answer:
        "Pour les répliques, oui, sauf si tu vises une des quatre autres langues supportées. Pour la description, l'anglais reste le choix sûr, parce que le vocabulaire de cadrage et de mouvement de caméra y est plus stable et que tous les exemples officiels sont écrits dans cette langue. Rien ne t'empêche de rédiger en français puis de traduire toi-même : au moins tu choisis les mots plutôt que de les subir.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu colles dans Kling un prompt qui marchait très bien pour une image, et tu récupères cinq secondes où il ne se passe presque rien. Le sujet est joli, la lumière est là, sauf que personne ne bouge et que la caméra flotte au hasard.",
    },
    {
      type: "p",
      text: "Écrire pour Kling ressemble aujourd'hui à remplir une feuille de plans : des plans numérotés, des répliques attribuées à un nom, parfois des secondes précises. Tu trouveras ici la structure officielle, la syntaxe du Multi-Shot, la façon d'écrire un dialogue joué par l'audio natif, et 20 blocs prêts à copier.",
    },
    {
      type: "p",
      text: "Et un détail compte beaucoup pour nous, francophones : la doc officielle de Kling VIDEO 3.0 liste cinq langues pour l'audio natif, le français n'en fait pas partie, et une réplique écrite dans une autre langue est traduite en anglais avant d'être jouée. Autant écrire cette réplique toi-même.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "La structure d'un prompt Kling, version 3.0",
    },
    {
      type: "h3",
      id: "cinq-blocs",
      text: "Les cinq blocs de la structure officielle",
    },
    {
      type: "p",
      text: "Kling a publié le 7 août 2026 son guide de prompts, et la structure qu'il décrit tient en cinq éléments : le sujet, l'action visible, la scène, le langage de caméra, la lumière et l'ambiance. Tu écris des phrases de direction de plan, en langage ordinaire, et le modèle s'en sert mieux que d'une liste de mots-clés empilés.",
    },
    {
      type: "table",
      caption:
        "Les cinq blocs recommandés par le guide de prompts officiel de Kling, avec un exemple filé.",
      headers: ["Bloc", "Ce que tu écris", "Exemple"],
      rows: [
        [
          "Sujet",
          "Le personnage, le produit ou l'objet, avec deux attributs reconnaissables",
          "a fisherman in a yellow raincoat",
        ],
        [
          "Action",
          "Un mouvement visible, un seul, au participe présent",
          "hauling a wet rope over the side of a small boat",
        ],
        [
          "Scène",
          "Le lieu et ce qui l'entoure",
          "off a grey coastline, early morning, choppy water",
        ],
        [
          "Caméra",
          "Le cadrage, l'angle, le mouvement",
          "slow tracking shot from the water surface, low angle",
        ],
        [
          "Lumière et ambiance",
          "La source, la couleur, la météo, le grain",
          "overcast dawn light, cold sea spray, cinematic",
        ],
      ],
    },
    {
      type: "p",
      text: "Le bloc qui fait la différence avec un prompt d'image, c'est l'action. Kling a besoin d'un verbe de mouvement visible, pas d'une intention. « Un homme pensif » ne produit rien à l'écran, « un homme qui repose lentement sa tasse et regarde par la fenêtre » produit un plan. Sur le reste du vocabulaire, la logique des blocs vaut aussi bien pour l'image, comme dans la [structure en 4 blocs pour les prompts d'image](/blog/prompt-structure-4-blocs-ia).",
    },
    {
      type: "h3",
      id: "dialogue-francais",
      text: "Ton dialogue en français finit en anglais",
    },
    {
      type: "p",
      text: "L'audio natif de la série 3.0 génère la voix en même temps que l'image, avec un mouvement de lèvres calé dessus. Le guide officiel du modèle donne la liste des langues couvertes : chinois, anglais, japonais, coréen et espagnol. Il ajoute une phrase que tout francophone devrait lire deux fois : si le dialogue est saisi dans une autre langue, le modèle le traduit en anglais.",
    },
    {
      type: "p",
      text: "Ça veut dire qu'un prompt avec « elle dit : je reviens dans dix minutes » te sortira une comédienne qui parle anglais, avec une traduction que tu n'as pas choisie. Écris la réplique en anglais toi-même, ou en espagnol si la scène s'y prête, et garde le français pour tes notes de travail.",
    },
    {
      type: "p",
      text: "En revanche, les accents fonctionnent. Le guide cite les accents anglais américain, britannique et indien, ainsi que plusieurs dialectes chinois, et le modèle gère le mélange de langues dans une même scène. Un personnage français qui parle anglais avec un accent français reste donc jouable, à condition de le demander explicitement.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Écrire un prompt Kling, étape par étape",
    },
    {
      type: "p",
      text: "Avant d'écrire, décide combien tu es prêt à payer pour te tromper. Kling facture à la seconde générée, et le prix change selon la résolution et la présence d'audio natif. Un brouillon muet en 720p coûte deux fois moins cher qu'un plan final sonore en 1080p.",
    },
    {
      type: "table",
      caption:
        "Coûts de la série Kling VIDEO 3.0, relevés dans le guide officiel du modèle.",
      headers: ["Mode", "Coût par seconde", "Pour un plan de 10 secondes"],
      rows: [
        ["720p sans audio natif", "6 crédits", "60 crédits"],
        ["1080p sans audio natif", "8 crédits", "80 crédits"],
        ["720p avec audio natif", "9 crédits", "90 crédits"],
        ["1080p avec audio natif", "12 crédits", "120 crédits"],
        ["Contrôle du timbre de voix", "2 crédits en plus", "20 crédits en plus"],
        ["Mode 4K natif", "30 crédits", "300 crédits"],
      ],
    },
    {
      type: "ol",
      items: [
        "Écris ta scène en une phrase de français, pour toi. Qui, quoi, où. Si tu n'y arrives pas, le prompt ne sauvera rien.",
        "Traduis en cinq blocs, dans l'ordre officiel : sujet, action, scène, caméra, lumière. Une seule action principale par plan.",
        "Choisis ta durée entre 3 et 15 secondes. Au-delà de 10 secondes, ancre l'action à la seconde près, comme le font les exemples longs de la doc officielle.",
        "Décide du Multi-Shot. Un geste unique reste en plan fixe. Une petite séquence avec un début et une fin passe en Multi-Shot, et tu numérotes tes plans.",
        "Ajoute le dialogue en dernier, en anglais, avec le nom du personnage collé à sa réplique et le ton entre parenthèses.",
        "Lance ton premier essai en 720p sans audio, pour valider le mouvement et le cadrage. Tu ne montes en 1080p sonore qu'une fois le plan juste.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : garde le même prompt de référence entre deux essais et ne change qu'une variable à la fois, le mouvement de caméra ou la lumière. Sinon tu ne sauras jamais ce qui a réparé le plan, et tu repartiras de zéro au projet suivant.",
    },
    {
      type: "p",
      text: "Deux ressources complètent bien cette méthode : le [guide officiel des prompts Kling](https://kling.ai/blog/kling-ai-prompt-guide), utile pour son vocabulaire de caméra en anglais, et notre page sur [la lumière d'un plan écrite en toutes lettres](/blog/decrire-lumiere-prompt-ia), qui reste le levier le plus rentable quand un plan sort plat.",
    },
    {
      type: "h2",
      id: "prompts-par-situation",
      text: "20 prompts Kling classés par situation",
    },
    {
      type: "p",
      text: "Les blocs qui suivent sont en anglais, la langue de tous les exemples officiels. Chaque note en français t'explique pourquoi il tient. Découpe-les, échange les caméras, remplace les sujets par les tiens.",
    },
    {
      type: "h3",
      id: "prompts-plan-unique",
      text: "Un plan, une action (1 à 4)",
    },
    {
      type: "p",
      text: "Le format le plus fiable de Kling. Un sujet, un geste, une caméra qui fait le travail narratif à sa place.",
    },
    {
      type: "quote",
      text: "A fisherman in a yellow raincoat hauling a wet rope over the side of a small boat, grey coastline in the background, slow tracking shot from the water surface, low angle, overcast dawn light, cold sea spray, cinematic",
      cite: "1. Le plan filé de la structure officielle, bloc par bloc.",
    },
    {
      type: "quote",
      text: "A barista pressing a tamper into a portafilter, close-up on the hands, slow push-in, shallow depth of field, warm morning light from a side window, soft steam drifting in the background",
      cite: "2. Un geste précis suffit à faire un plan, aucun scénario nécessaire.",
    },
    {
      type: "quote",
      text: "A woman in a red coat walking through a rainy street at night, camera tracking beside her at eye level, neon reflections on the wet pavement, 35mm lens, shallow depth of field, cold blue tones",
      cite: "3. Déplacement plus caméra qui accompagne : le combo qui rate le moins.",
    },
    {
      type: "quote",
      text: "A dust-covered motorcycle helmet resting on a workbench, camera slowly orbiting to the right, single hard light from the left, dark garage background, fine dust floating in the beam",
      cite: "4. Sujet immobile et caméra mobile, la parade classique contre le morphing.",
    },
    {
      type: "h3",
      id: "prompts-multi-shot",
      text: "Multi-Shot : une séquence en une génération (5 à 8)",
    },
    {
      type: "p",
      text: "Interrupteur Multi-Shot activé, tu numérotes tes plans et Kling les enchaîne dans la même vidéo. Trois plans suffisent presque toujours.",
    },
    {
      type: "quote",
      text: "Shot 1, wide shot of a bakery at dawn, the owner lifting the metal shutter. Shot 2, medium shot of her hands sliding a tray of bread onto the rack. Shot 3, close-up on the steam rising from a fresh loaf. Warm morning light, handheld, cinematic",
      cite: "5. Large, moyen, gros plan : le triptyque qui raconte un lieu en huit secondes.",
    },
    {
      type: "quote",
      text: "Shot 1, low-angle rear tracking shot behind a cyclist climbing a mountain road. Shot 2, side close-up on the pedals and the chain. Shot 3, frontal medium shot moving backward, the rider breathing hard. Cold morning haze, cinematic",
      cite: "6. La couverture d'une action sportive, calquée sur un découpage de tournage.",
    },
    {
      type: "quote",
      text: "Shot 1, establishing wide shot of an empty open space office at night, one desk lamp on. Shot 2, medium shot of a woman rewriting a slide on her laptop. Shot 3, macro shot of a cold cup of coffee next to the keyboard. Blue night tones, static camera on each shot",
      cite: "7. Caméra fixe sur les trois plans : le montage fait tout le rythme.",
    },
    {
      type: "quote",
      text: "Shot 1, wide shot of a kitchen, a father setting two plates on the table. Shot 2, close-up on a child's hand reaching for bread. Shot 3, medium two-shot of both laughing. Natural window light, warm tones, 35mm lens",
      cite: "8. Le plan de coupe sur un détail vaut mieux qu'un quatrième plan large.",
    },
    {
      type: "h3",
      id: "prompts-dialogue",
      text: "Dialogue et audio natif (9 à 12)",
    },
    {
      type: "p",
      text: "Le nom du personnage collé à sa réplique, le ton entre parenthèses, la langue précisée. C'est ce que fait la doc officielle, et ça évite que deux personnages se volent leurs phrases.",
    },
    {
      type: "quote",
      text: "Interior of a small garage, faint radio playing in the background. Marc, a mechanic in a blue jumpsuit, wipes his hands and says in English with a French accent: Give me twenty minutes, I know that noise. Medium shot, warm work light",
      cite: "9. L'accent demandé explicitement, pour un personnage français qui parle anglais.",
    },
    {
      type: "quote",
      text: "A cafe terrace at golden hour, ambient street noise. Lea (calm tone, in English): You are going to say yes, right? The camera holds a medium two-shot. Paul (hesitant tone, in English): I already said yes yesterday. Soft warm light",
      cite: "10. Deux personnages nommés, deux répliques attribuées, aucune ambiguïté.",
    },
    {
      type: "quote",
      text: "A taxi driver in his fifties, medium close-up through the open window, speaks in English with a British accent: Traffic is a nightmare today, get in. Grey afternoon light, ambient city traffic in the background",
      cite: "11. L'ambiance sonore fait partie du prompt, pas du montage.",
    },
    {
      type: "quote",
      text: "A quiet living room at night, low hum of a refrigerator in the background. A teenage girl sits on the floor with headphones on. Voiceover (soft female voice, in English, slow pace): The house only makes sense when everyone is asleep. Static medium shot, warm lamp light",
      cite: "12. La voix off se demande comme un personnage, avec son ton et son débit.",
    },
    {
      type: "h3",
      id: "prompts-produit",
      text: "Produit, texte à l'écran et image vers vidéo (13 à 16)",
    },
    {
      type: "p",
      text: "La 3.0 sait écrire du texte lisible et préserver une enseigne présente dans l'image de départ. Donne les mots exacts, la surface qui les porte et la distance de caméra.",
    },
    {
      type: "quote",
      text: "A matte green coffee bag standing on a wooden counter, the label reading MAISON NOIRE in white letters, camera slow push-in from three quarters, soft daylight from the left, shallow depth of field, no other text in frame",
      cite: "13. Les mots en capitales, la surface décrite, et l'interdiction du texte parasite.",
    },
    {
      type: "quote",
      text: "A bakery storefront sign reading LE FOURNIL in gold letters on dark green wood, camera tilting up from the door to the sign, early morning light, faint street reflection on the glass",
      cite: "14. Un mouvement vertical simple pour révéler un texte, très fiable en 3.0.",
    },
    {
      type: "quote",
      text: "The camera slowly pushes in on the subject while she turns her head toward the lens and smiles. Everything else in the frame stays still. Soft daylight, one continuous shot, no cut",
      cite: "15. En image vers vidéo, décris le mouvement seulement : l'image est déjà là.",
    },
    {
      type: "quote",
      text: "A pair of white sneakers on a concrete floor, camera orbiting 180 degrees at ground level, hard overhead light casting a sharp shadow, grey studio background, product commercial style",
      cite: "16. L'orbite au ras du sol donne le rendu pub sans décor coûteux.",
    },
    {
      type: "h3",
      id: "prompts-longs",
      text: "Plans longs ancrés à la seconde (17 à 20)",
    },
    {
      type: "p",
      text: "Au-delà de dix secondes, une description globale part en vrille vers la fin. Les exemples longs de la doc officielle règlent ça en datant chaque beat, et ça marche.",
    },
    {
      type: "quote",
      text: "A 12-second continuous shot, no cuts. A chef plates a dish in a busy kitchen. At the 4th second, he wipes the rim of the plate. At the 8th second, he lifts it toward the pass. At the 11th second, a waiter takes it away. Handheld camera, warm service light",
      cite: "17. Trois repères temporels tiennent une action de douze secondes.",
    },
    {
      type: "quote",
      text: "A 15-second single take. A young woman runs across a rooftop at dusk. At the 5th second, the camera lifts above the roofline. At the 10th second, she stops at the edge and looks down at the city. Cold blue tones, wind noise",
      cite: "18. Le mouvement de caméra daté, lui aussi, sinon il arrive n'importe quand.",
    },
    {
      type: "quote",
      text: "A 10-second shot inside a moving train. At the 3rd second, the passenger opens a book. At the 6th second, light from a tunnel flickers across her face. At the 9th second, she looks up at the window. Static camera, natural light",
      cite: "19. Caméra fixe et action datée : la façon la plus économique de tenir dix secondes.",
    },
    {
      type: "quote",
      text: "A 15-second continuous shot of a woodworking shop. At the 5th second, the camera pans from the empty bench to the door. At the 9th second, a woman walks in carrying a wooden frame. At the 13th second, she sets it down and steps back. Dusty afternoon light",
      cite: "20. Entrée de champ datée : le modèle sait attendre si tu lui dis quand.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quand le plan sort de travers",
    },
    {
      type: "p",
      text: "Quatre pannes reviennent tout le temps, et chacune a une réparation qui tient en une ligne de prompt ou en un réglage.",
    },
    {
      type: "h3",
      id: "erreur-actions",
      text: "Le plan écrase quatre gestes en cinq secondes",
    },
    {
      type: "p",
      text: "Tu as écrit « elle entre, pose son sac, ouvre la fenêtre et sourit », et Kling te rend une bouillie où les gestes se chevauchent. Le modèle essaie de tout caser dans la durée que tu lui as donnée. Fix concret : soit tu gardes une seule action et tu rallonges la durée, soit tu passes en Multi-Shot et tu numérotes les plans, un geste par plan.",
    },
    {
      type: "h3",
      id: "erreur-repliques",
      text: "Les personnages se volent leurs répliques",
    },
    {
      type: "p",
      text: "Deux personnes à l'écran, et c'est la mauvaise qui parle, ou les deux en même temps. Ça arrive quand la réplique est loin du nom dans le prompt. Fix concret : colle le nom, le ton et la phrase dans le même segment, comme dans les exemples 10 et 11 ci-dessus. Kling VIDEO 3.0 sait gérer trois personnages et plus, à condition que chaque ligne soit attribuée sans ambiguïté.",
    },
    {
      type: "h3",
      id: "erreur-personnage",
      text: "Le sujet change de tête entre deux plans",
    },
    {
      type: "p",
      text: "Le visage dérive dès le deuxième plan, ou le produit perd son étiquette. Répéter le signalement dans le texte ne suffit pas. Fix concret : crée un élément à partir de 2 à 4 images de référence, ou d'une vidéo dont Kling extrait l'apparence et le timbre de voix, puis lie-le à ta génération. Si le timbre est déjà attaché à l'élément, la doc officielle recommande de ne plus le repréciser dans le prompt. Le sujet de fond est traité en détail dans l'article sur [la stabilité d'un personnage sur plusieurs plans](/blog/stabilite-personnage-multi-plans).",
    },
    {
      type: "h3",
      id: "erreur-budget",
      text: "La facture part avant le premier plan correct",
    },
    {
      type: "p",
      text: "Six essais en 1080p avec audio natif sur un plan de dix secondes, ça fait 720 crédits pour zéro livrable. Fix concret : cherche le cadrage et le mouvement en 720p muet à 6 crédits la seconde, et n'active l'audio et la 1080p que sur la version que tu vas garder. Le rapport de un à deux entre les deux modes se voit vite sur une fin de mois, surtout si tu compares les abonnements comme dans le [comparatif Kling et Runway](/blog/kling-vs-runway-comparatif).",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Comment écrire un bon prompt Kling ?",
    },
    {
      type: "p",
      text: "Le guide officiel publié par Kling le 7 août 2026 donne cinq blocs : le sujet, l'action visible, la scène, le langage de caméra, la lumière et l'ambiance. Écris-les dans cet ordre, en phrases simples, avec une seule action principale. La différence avec un prompt d'image tient au bloc action : sans verbe de mouvement précis, tu obtiens une photo qui tremble un peu pendant cinq secondes.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Kling comprend-il le français ?",
    },
    {
      type: "p",
      text: "Pour décrire une scène, oui, le modèle s'en sort. Pour faire parler un personnage, non : le guide officiel de Kling VIDEO 3.0 précise que l'audio natif couvre cinq langues, le chinois, l'anglais, le japonais, le coréen et l'espagnol, et qu'une réplique écrite dans une autre langue est traduite en anglais avant d'être jouée. Ton dialogue en français sortira donc en anglais, avec un mouvement de lèvres calé sur l'anglais.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "C'est quoi le Multi-Shot de Kling et comment l'écrire ?",
    },
    {
      type: "p",
      text: "C'est le mode qui génère plusieurs plans dans une seule vidéo. Interrupteur activé, le modèle découpe la séquence tout seul à partir de ta description. Le mode Custom Multi-Shot, accessible seulement une fois le Multi-Shot activé, te rend la main sur le contenu et la durée de chaque plan. Dans le prompt, tu numérotes : Shot 1, plan large de la boulangerie, Shot 2, plan moyen sur les mains, Shot 3, gros plan sur la vapeur.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Combien coûte une génération Kling en crédits ?",
    },
    {
      type: "p",
      text: "Le guide officiel du modèle facture la série VIDEO 3.0 à la seconde : 6 crédits en 720p sans audio natif, 8 en 1080p sans audio, 9 en 720p avec audio, 12 en 1080p avec audio. Le contrôle du timbre de voix ajoute 2 crédits par seconde, et le mode 4K natif monte à 30. Un plan de 10 secondes en 1080p avec audio te coûte donc 120 crédits, un brouillon de 5 secondes en 720p muet en coûte 30.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Comment garder le même personnage d'un plan à l'autre ?",
    },
    {
      type: "p",
      text: "Par les éléments, pas par la description. Kling laisse créer un élément à partir de 2 à 4 images de référence, ou d'une vidéo dont il extrait l'apparence et le timbre de voix. Une fois l'élément lié, son timbre est attaché au personnage et le guide officiel recommande de ne plus le repréciser dans le prompt. Écrire trois fois le même signalement dans ton texte ne remplace pas cette liaison.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Faut-il écrire ses prompts Kling en anglais ?",
    },
    {
      type: "p",
      text: "Pour les répliques, oui, sauf si tu vises une des quatre autres langues supportées. Pour la description, l'anglais reste le choix sûr, parce que le vocabulaire de cadrage et de mouvement de caméra y est plus stable et que tous les exemples officiels sont écrits dans cette langue. Rien ne t'empêche de rédiger en français puis de traduire toi-même : au moins tu choisis les mots plutôt que de les subir.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Par où commencer ce soir",
    },
    {
      type: "p",
      text: "Prends le prompt 5, celui de la boulangerie, et remplace la boulangerie par un lieu que tu connais. Garde le découpage large, moyen, gros plan. Tu auras une séquence exploitable en une génération, et tu sauras si le Multi-Shot te parle.",
    },
    {
      type: "p",
      text: "Ensuite, ajoute une réplique en anglais avec le nom du personnage collé à sa phrase, et regarde ce que l'audio natif en fait. Kling n'est pas seul sur ce terrain, [Veo 3 génère aussi le son avec l'image](/blog/prompt-veo-3-exemples), mais la gestion de plusieurs personnages nommés dans la même scène reste sa meilleure carte.",
    },
    {
      type: "p",
      text: "Pour la suite, le [guide Kling orienté plans cinématiques](/blog/kling-ai-videos-cinematiques) couvre l'outil dans son ensemble, et la sélection de [50 prompts vidéo classés par genre](/blog/prompts-video-ia-50-exemples) te donne de quoi piocher quand tu changes de modèle.",
    },
    {
      type: "p",
      text: "Note de fondateur : un pack de prompts vieillit à chaque mise à jour de modèle, la façon de découper une scène beaucoup moins. C'est ce qu'on démonte pas à pas dans la formation IA gratuite d'AI Studios, sur des projets réels et sans jargon.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-28 -->
