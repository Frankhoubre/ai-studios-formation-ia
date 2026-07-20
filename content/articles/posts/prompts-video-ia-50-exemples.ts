import type { Article } from "@/lib/types/article";

export const promptsVideoIa50Exemples: Article = {
  title: "Prompts vidéo IA : 50 exemples qui marchent",
  slug: "prompts-video-ia-50-exemples",
  description:
    "50 prompts vidéo IA prêts à copier, classés par genre : pub produit, cinématique, UGC, paysage, action. Avec la structure sujet, action, caméra, lumière.",
  excerpt:
    "Tout le monde partage des prompts d'images, presque personne ne partage des prompts vidéo qui tiennent la route. Voici 50 blocs copiables, classés par genre, avec la structure qui les fait marcher.",
  category: "prompting",
  tags: [
    "prompt vidéo IA",
    "exemples de prompts",
    "génération vidéo",
    "prompt pack",
  ],
  date: "2026-07-20",
  updatedAt: "2026-07-20",
  readingTime: 21,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompts-video-ia-50-exemples.webp",
  imageAlt:
    "Créateur devant un moniteur affichant une frame cinématique générée par IA dans un studio sombre",
  keywords: [
    "prompt vidéo ia",
    "prompt générateur vidéo",
    "exemples prompt vidéo",
    "prompt vidéo cinématique",
    "écrire un prompt vidéo",
  ],
  relatedSlugs: [
    "prompt-structure-4-blocs-ia",
    "decrire-lumiere-prompt-ia",
    "video-ia-guide-complet",
  ],
  faq: [
    {
      question: "Faut-il écrire ses prompts vidéo en anglais ?",
      answer:
        "Oui, dans la grande majorité des cas. Les modèles vidéo actuels ont été entraînés surtout sur des descriptions anglaises, et le vocabulaire technique du cinéma (dolly, rim light, shallow depth of field) y est bien mieux compris. Tu peux réfléchir en français, mais traduis ton prompt final en anglais avant de générer. C'est pour ça que les 50 exemples de cet article sont en anglais, avec l'explication en français à côté.",
    },
    {
      question: "Quelle longueur pour un prompt vidéo ?",
      answer:
        "Une à trois phrases denses suffisent. Un prompt vidéo trop long noie le modèle : il ne peut pas tout caser dans 5 à 10 secondes de vidéo. La bonne pratique, c'est une action principale par prompt, un mouvement de caméra, une lumière. Si tu veux deux actions, fais deux plans. Les prompts de cet article font tous entre 25 et 50 mots, c'est la zone où les modèles restent fiables.",
    },
    {
      question: "Ces prompts marchent-ils sur tous les générateurs vidéo ?",
      answer:
        "La structure sujet, action, caméra, lumière marche partout : Veo, Kling, Runway, Luma, Seedance. Ce qui change d'un modèle à l'autre, c'est la sensibilité à certains mots et les options natives (audio, durée, formats). Un prompt de cet article te donnera un résultat proche sur chaque outil, mais pas identique. Teste ton prompt sur ton modèle principal, ajuste un bloc à la fois, et garde la version qui marche dans ta bibliothèque.",
    },
    {
      question: "Pourquoi ma vidéo ignore une partie de mon prompt ?",
      answer:
        "Parce que tu demandes trop de choses pour la durée générée. Un modèle vidéo priorise : il traite d'abord le sujet et l'action, puis la caméra, puis le reste. Si ton prompt contient trois actions et deux mouvements de caméra, il en sacrifie. Coupe ton prompt à une action et un mouvement, régénère, et réintroduis les éléments un par un pour voir lequel casse le résultat.",
    },
    {
      question: "Comment décrire un mouvement de caméra dans un prompt vidéo ?",
      answer:
        "Utilise le vocabulaire du tournage réel, en anglais : dolly-in (la caméra avance), tracking shot (elle suit le sujet), orbit (elle tourne autour), crane up (elle s'élève), static shot (elle ne bouge pas). Un seul mouvement par prompt, avec sa vitesse : slow dolly-in donne un résultat très différent de fast dolly-in. Si tu ne précises rien, le modèle choisit pour toi, et c'est rarement ce que tu voulais.",
    },
    {
      question: "Combien de générations faut-il pour obtenir un bon plan ?",
      answer:
        "Compte deux à six essais pour un plan exploitable avec un prompt structuré, souvent plus si le prompt est flou. C'est normal : la vidéo IA reste probabiliste. La méthode efficace consiste à garder le prompt fixe et à relancer deux ou trois fois, puis, si rien ne va, à modifier un seul bloc (l'action ou la caméra en premier) plutôt que de tout réécrire. Au-delà de six essais sans progrès, le problème vient du prompt, pas du tirage.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu cherches un prompt vidéo IA qui donne autre chose qu'un plan mou avec un zoom hasardeux. Le problème, c'est que presque toutes les listes de prompts qui circulent concernent l'image. La vidéo a ses propres règles : une action à décrire, un mouvement de caméra à choisir, une durée courte qui punit les prompts fourre-tout.",
    },
    {
      type: "p",
      text: "Cet article te donne 50 prompts vidéo prêts à copier, classés par genre : pub produit, plans cinématiques, UGC, nature, portrait, action, ambiance, formats verticaux. Chaque prompt est en anglais (la langue que les modèles comprennent le mieux), avec une note en français qui t'explique ce qu'il fait et pourquoi.",
    },
    {
      type: "p",
      text: "Mais copier ne suffit pas. La vraie valeur, c'est la structure derrière ces prompts : sujet, action, caméra, lumière. Une fois que tu l'as comprise, tu peux fabriquer tes propres variantes à l'infini. On commence par là.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Comment utiliser ces prompts vidéo",
    },
    {
      type: "h3",
      id: "structure-video",
      text: "La structure sujet, action, caméra, lumière",
    },
    {
      type: "p",
      text: "Un prompt vidéo efficace répond à quatre questions, dans cet ordre : qui ou quoi (le sujet), qu'est-ce qui se passe (l'action), comment c'est filmé (la caméra), comment c'est éclairé (la lumière). C'est la même logique que [la structure en 4 blocs pour l'image](/blog/prompt-structure-4-blocs-ia), avec une différence majeure : le bloc action remplace le bloc décor comme priorité numéro un. En vidéo, un sujet sans action donne un plan figé qui respire à peine.",
    },
    {
      type: "table",
      caption: "Les 4 blocs d'un prompt vidéo, avec exemples",
      headers: ["Bloc", "Ce qu'il décrit", "Exemple en anglais"],
      rows: [
        [
          "Sujet",
          "Qui ou quoi, avec 2 ou 3 attributs concrets",
          "an old fisherman repairing a net on a wooden dock",
        ],
        [
          "Action",
          "Un verbe, un mouvement, une seule action principale",
          "wind lifting fine dust, waves crashing in slow motion",
        ],
        [
          "Caméra",
          "Type de plan, mouvement, vitesse, focale",
          "slow dolly-in, low angle tracking shot, 35mm lens",
        ],
        [
          "Lumière",
          "Source, direction, température, ambiance",
          "golden hour backlight, single warm spotlight from above",
        ],
      ],
    },
    {
      type: "p",
      text: "Les 50 prompts qui suivent respectent tous cette structure. Tu peux donc les découper : prendre le bloc caméra d'un prompt cinématique et le coller sur un sujet produit, récupérer une lumière qui te plaît et la réutiliser ailleurs. C'est une boîte de Lego, pas un catalogue figé.",
    },
    {
      type: "h3",
      id: "regles-usage",
      text: "Trois règles avant de copier",
    },
    {
      type: "p",
      text: "Première règle : une action par prompt. La vidéo générée dure 5 à 10 secondes selon les modèles. Si tu écris « elle entre, s'assoit, ouvre un livre et sourit », le modèle va tout compresser en bouillie. Un plan, une action. Deux actions, deux générations.",
    },
    {
      type: "p",
      text: "Deuxième règle : un mouvement de caméra, pas trois. « Slow dolly-in » seul donne un plan propre. « Dolly-in puis pan puis crane up » donne un plan ivre. Les mouvements composés, tu les obtiens au montage, pas dans le prompt.",
    },
    {
      type: "p",
      text: "Troisième règle : décris la lumière avec une source et une direction, jamais avec « cinematic lighting » tout seul. Si ce point te semble flou, [apprendre à décrire la lumière dans un prompt](/blog/decrire-lumiere-prompt-ia) est probablement l'investissement le plus rentable de ta progression.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "50 prompts vidéo IA classés par genre",
    },
    {
      type: "h3",
      id: "prompts-pub-produit",
      text: "Pub produit (1 à 7)",
    },
    {
      type: "p",
      text: "Le secret d'un plan produit, c'est le contraste entre un objet immobile et un environnement en mouvement : brume, eau, particules, lumière. Le produit reste net, tout le reste vit autour.",
    },
    {
      type: "quote",
      text: "A matte black perfume bottle standing on wet black slate, fine mist drifting around it, slow dolly-in from front, shallow depth of field, single warm spotlight from above, dark background, macro detail, product commercial style",
      cite: "1. Packshot parfum : la brume donne du mouvement sans toucher au produit.",
    },
    {
      type: "quote",
      text: "A can of sparkling water bursting through the surface of clear water, droplets frozen mid-air, ultra slow motion, side backlight creating rim highlights, clean studio background, crisp commercial look",
      cite: "2. Boisson : le slow motion sur l'eau, un classique qui marche à chaque fois.",
    },
    {
      type: "quote",
      text: "A luxury wristwatch rotating slowly on a black turntable, camera orbiting in the opposite direction, soft top light with sharp specular reflections on the metal, dark gradient background, macro lens",
      cite: "3. Montre : l'orbite inverse de la rotation crée un effet premium hypnotique.",
    },
    {
      type: "quote",
      text: "A running shoe landing in slow motion on a wet urban pavement at night, water splashing outward, low angle tracking shot, neon reflections in the puddles, shallow depth of field",
      cite: "4. Sneaker : l'impact au ralenti raconte la performance mieux qu'un slogan.",
    },
    {
      type: "quote",
      text: "A cup of coffee being poured in slow motion, steam rising, morning sunlight through a window on the left, warm tones, static close-up shot, cozy cafe atmosphere",
      cite: "5. Café : caméra fixe, c'est le mouvement du liquide qui fait le plan.",
    },
    {
      type: "quote",
      text: "A skincare cream jar on a beige stone pedestal surrounded by falling flower petals, gentle camera push-in, soft diffused daylight, pastel palette, minimalist set design",
      cite: "6. Cosmétique : pétales qui tombent, palette pastel, la recette du soin haut de gamme.",
    },
    {
      type: "quote",
      text: "A smartphone standing upright on a reflective black surface, thin ribbons of colored light wrapping around it, slow orbit shot, dark studio, high contrast lighting, premium tech commercial",
      cite: "7. Tech : les rubans de lumière remplacent les effets 3D hors de prix.",
    },
    {
      type: "h3",
      id: "prompts-cinematique",
      text: "Plans cinématiques (8 à 14)",
    },
    {
      type: "p",
      text: "Ici, tout repose sur l'échelle et la lumière motivée. Un plan cinématique a besoin d'un point d'intérêt humain minuscule dans un cadre immense, ou d'une source de lumière qui existe dans la scène.",
    },
    {
      type: "quote",
      text: "A lone astronaut walking across a vast desert of red dunes, wind lifting fine dust, extreme wide shot, camera slowly craning up, golden hour backlight, cinematic anamorphic look, film grain",
      cite: "8. Le contraste d'échelle : un humain minuscule, un décor écrasant.",
    },
    {
      type: "quote",
      text: "An old fisherman repairing a net on a wooden dock at dawn, fog over the water, slow lateral tracking shot, cold blue light with a warm lantern glow, 35mm lens, shallow depth of field",
      cite: "9. Deux températures de lumière (bleu froid, lanterne chaude) : profondeur immédiate.",
    },
    {
      type: "quote",
      text: "A woman in a red coat crossing an empty rain-soaked street at night, camera following behind at shoulder height, neon signs reflecting on the asphalt, cinematic teal and orange grade",
      cite: "10. Le manteau rouge : un point de couleur unique qui guide l'oeil dans tout le plan.",
    },
    {
      type: "quote",
      text: "A steam train crossing a stone viaduct in the mountains, thick white smoke, aerial wide shot slowly pulling back, overcast diffused light, muted color palette, epic scale",
      cite: "11. Le pull-back aérien révèle l'échelle progressivement, effet garanti.",
    },
    {
      type: "quote",
      text: "A candle-lit medieval library, a monk turning the pages of a huge manuscript, slow push-in on his hands, warm flickering candlelight, deep shadows, chiaroscuro style",
      cite: "12. Chiaroscuro : la bougie comme unique source, les ombres font le reste.",
    },
    {
      type: "quote",
      text: "A child releasing a paper lantern into the night sky, hundreds of lanterns rising in the background, camera tilting up from her face to the sky, warm orange glow against deep blue night",
      cite: "13. Le tilt du visage vers le ciel : un mouvement simple qui raconte une émotion.",
    },
    {
      type: "quote",
      text: "An abandoned theater with dust floating in a single beam of light, camera dollying slowly between the red velvet seats, volumetric light from a hole in the roof, melancholic mood",
      cite: "14. Lumière volumétrique et poussière : le duo qui rend un lieu vivant sans personnage.",
    },
    {
      type: "h3",
      id: "prompts-ugc",
      text: "UGC et face caméra (15 à 20)",
    },
    {
      type: "p",
      text: "Le piège de l'UGC généré, c'est le rendu trop propre. Pour que ça sonne vrai, il faut prompter l'imperfection : cadrage selfie, légère instabilité, lumière de fenêtre, décor domestique. Le mot clé, c'est « authentic ».",
    },
    {
      type: "quote",
      text: "A young woman talking to the camera in her bright kitchen, holding a green smoothie, handheld selfie framing with slight natural shake, soft window light from the right, casual authentic vibe",
      cite: "15. Le tremblement léger (slight natural shake) est ce qui vend le côté vrai.",
    },
    {
      type: "quote",
      text: "A man in his thirties unboxing a package on a wooden desk, top-down point of view shot, hands opening the box, natural daylight, realistic home office setting",
      cite: "16. Unboxing : la vue de dessus cache le visage, pratique quand la cohérence faciale lâche.",
    },
    {
      type: "quote",
      text: "A fitness coach demonstrating a squat in a home gym, fixed vertical framing at chest height, bright even lighting, mirror in the background, energetic but natural feel",
      cite: "17. Fitness : cadrage vertical fixe, comme un vrai coach qui pose son téléphone.",
    },
    {
      type: "quote",
      text: "A woman applying a face serum in her bathroom mirror, camera as the mirror point of view, warm vanity lights on both sides, close framing on face and hands, authentic morning routine",
      cite: "18. La caméra à la place du miroir : un point de vue UGC très naturel.",
    },
    {
      type: "quote",
      text: "A student showing a notebook to the camera at a cafe table, slightly high handheld angle, blurred cafe background, natural afternoon light from a large window, relaxed real-life tone",
      cite: "19. L'angle légèrement plongeant imite le bras tendu, signature du contenu créateur.",
    },
    {
      type: "quote",
      text: "A man tasting a slice of pizza and reacting with wide eyes, static phone camera on a tripod framing, kitchen background, neutral indoor lighting, spontaneous authentic reaction",
      cite: "20. La réaction spontanée : demande l'émotion dans le prompt, pas juste l'action.",
    },
    {
      type: "h3",
      id: "prompts-nature",
      text: "Nature et paysage (21 à 26)",
    },
    {
      type: "p",
      text: "La nature est le terrain le plus facile pour la vidéo IA : pas de visage à tenir, pas de mains à rater. Le levier principal, c'est le mouvement naturel (vagues, brume, vent) combiné à un seul mouvement de caméra lent.",
    },
    {
      type: "quote",
      text: "Ocean waves crashing on black volcanic rocks, spray exploding in slow motion, low drone shot flying toward the cliff, stormy grey sky, dramatic natural light",
      cite: "21. Le drone qui avance vers la falaise crée la tension, la vague fait le spectacle.",
    },
    {
      type: "quote",
      text: "A misty pine forest at sunrise, light rays cutting through the fog between the trunks, slow forward dolly at ground level, cool green and gold palette, birds crossing the frame",
      cite: "22. Les oiseaux qui traversent le cadre : un détail qui rend le plan vivant.",
    },
    {
      type: "quote",
      text: "A field of lavender swaying in the wind at sunset, bees flying between the flowers, low angle close shot slowly rising to reveal the whole field, warm golden backlight",
      cite: "23. Le mouvement de révélation : on part du détail, on découvre l'ensemble.",
    },
    {
      type: "quote",
      text: "A glacier calving into a turquoise bay, huge ice block collapsing in slow motion, static wide shot from the water level, overcast light, raw documentary style",
      cite: "24. Caméra fixe sur un événement spectaculaire : le style documentaire brut.",
    },
    {
      type: "quote",
      text: "A desert canyon with a narrow river at the bottom, aerial shot following the curves of the river, midday hard light, deep orange rock textures, high altitude perspective",
      cite: "25. L'aérien qui suit une ligne naturelle (rivière, route) donne un mouvement régulier et lisible.",
    },
    {
      type: "quote",
      text: "Northern lights dancing over a frozen lake, silhouette of a single tent glowing from inside, static ultra wide shot, green and purple sky reflections on the ice",
      cite: "26. La tente éclairée de l'intérieur : le point chaud qui humanise l'immensité.",
    },
    {
      type: "h3",
      id: "prompts-portrait",
      text: "Portrait et personnage (27 à 32)",
    },
    {
      type: "p",
      text: "En portrait vidéo, vise des micro-actions : un regard qui se tourne, des mains qui travaillent, une respiration. Les grandes actions déforment les visages. Les petites les font vivre.",
    },
    {
      type: "quote",
      text: "Close-up portrait of an elderly woman with deep wrinkles, slowly turning her eyes toward the camera, soft window light from the left, dark neutral background, 85mm lens, very shallow depth of field",
      cite: "27. Le regard qui se tourne vers la caméra : la micro-action reine du portrait.",
    },
    {
      type: "quote",
      text: "A boxer wrapping his hands in a dim locker room, camera slowly circling around him, single overhead tungsten bulb, sweat catching the light, gritty realistic texture",
      cite: "28. L'ampoule unique au-dessus : une lumière dure qui sculpte sans flatter.",
    },
    {
      type: "quote",
      text: "A ballet dancer warming up in an empty rehearsal studio, morning light flooding through tall windows, slow lateral tracking shot, dust particles in the air, soft natural tones",
      cite: "29. L'échauffement plutôt que la performance : un mouvement lent que le modèle tient.",
    },
    {
      type: "quote",
      text: "A chef plating a dish with tweezers in a dark kitchen, extreme close-up on his focused hands, low key lighting with a single spot on the plate, cinematic food documentary style",
      cite: "30. Les mains en gros plan : l'assiette est la star, le spot la met en scène.",
    },
    {
      type: "quote",
      text: "A teenage girl with headphones looking out of a train window at dusk, reflections of passing lights on her face, static medium close-up, warm and cold mixed lighting, contemplative mood",
      cite: "31. Les lumières qui défilent sur le visage : le train fait le travail d'éclairagiste.",
    },
    {
      type: "quote",
      text: "An old craftsman blowing glass in his workshop, molten glass glowing orange, camera pushing in slowly from a wide shot to his hands, natural window light mixed with furnace glow",
      cite: "32. Le verre en fusion comme source de lumière : la matière éclaire la scène.",
    },
    {
      type: "h3",
      id: "prompts-action",
      text: "Action et mouvement (33 à 38)",
    },
    {
      type: "p",
      text: "L'action est le genre le plus difficile en vidéo IA : plus ça bouge vite, plus les incohérences apparaissent. La parade : du slow motion, des trajectoires simples, et des éléments qui volent (poussière, eau, feuilles) pour vendre l'énergie.",
    },
    {
      type: "quote",
      text: "A parkour athlete jumping between rooftops at sunset, camera tracking alongside, long shadows, lens flares, dynamic handheld energy, urban skyline background",
      cite: "33. Une seule trajectoire (un saut), pas une chorégraphie complète.",
    },
    {
      type: "quote",
      text: "A rally car drifting through a gravel corner, stones and dust flying toward the lens, low static shot at track level, late afternoon sun behind the dust cloud, motorsport documentary style",
      cite: "34. La poussière vers l'objectif : l'impact physique que le spectateur ressent.",
    },
    {
      type: "quote",
      text: "A surfer inside the barrel of a turquoise wave, sharp water texture, camera traveling with him inside the wave, bright tropical sunlight, slow motion at the exit",
      cite: "35. La caméra dans le tube : un plan impossible à tourner sans budget énorme.",
    },
    {
      type: "quote",
      text: "A sword duel in a bamboo forest, leaves falling around the fighters, fast circular camera movement, dappled sunlight through the canopy, choreographed martial arts style",
      cite: "36. Les feuilles qui tombent ralentissent visuellement un combat rapide.",
    },
    {
      type: "quote",
      text: "A skateboarder landing a trick down a stair set, slow motion at the moment of impact, wide angle lens close to the ground, overcast soft light, raw street video style",
      cite: "37. Le ralenti sur l'impact précis, pas sur toute la figure : le modèle suit mieux.",
    },
    {
      type: "quote",
      text: "A horse galloping through shallow water at golden hour, water exploding at each stride, low tracking shot at water level, strong backlight, slow motion, epic natural energy",
      cite: "38. Contre-jour, eau, ralenti : le trio qui rend n'importe quel galop épique.",
    },
    {
      type: "h3",
      id: "prompts-ambiance",
      text: "Ambiance et mood (39 à 44)",
    },
    {
      type: "p",
      text: "Les plans d'ambiance n'ont pas besoin de personnage principal. Ce sont des décors qui respirent : pluie, néons, poussière, neige. Parfaits pour des intros, des transitions, des fonds de titre.",
    },
    {
      type: "quote",
      text: "An empty diner at 2am, rain on the windows, neon sign flickering outside, very slow push-in toward a single occupied booth, warm interior light against cold blue night, film noir mood",
      cite: "39. Le néon qui clignote : une instabilité voulue qui installe le film noir.",
    },
    {
      type: "quote",
      text: "A rooftop garden in a futuristic city at dusk, soft wind in the plants, drones passing far in the background, static wide shot, purple and orange sky, calm utopian atmosphere",
      cite: "40. La SF apaisée : les drones au loin suffisent à situer l'époque.",
    },
    {
      type: "quote",
      text: "A living room in the 1970s, dust in the sunlight, a record player spinning, slow pan across the room, warm faded colors, nostalgic film look",
      cite: "41. Le panoramique lent : la caméra visite, le vinyle qui tourne date la scène.",
    },
    {
      type: "quote",
      text: "An underwater ballroom with a chandelier, jellyfish drifting between columns, slow ascending camera, rays of light from the surface, dreamlike surreal atmosphere",
      cite: "42. Le surréalisme assumé : là où la vidéo IA n'a aucun concurrent réel.",
    },
    {
      type: "quote",
      text: "A snowstorm seen from inside a warm cabin, camera slowly pulling back from the window to reveal a fireplace, contrast between cold blue exterior and warm orange interior, cozy winter mood",
      cite: "43. Le pull-back qui révèle l'intérieur : du froid vers le chaud, une histoire en un plan.",
    },
    {
      type: "quote",
      text: "A neon-lit arcade at night, empty except for one glowing machine, slow dolly toward the screen, saturated pink and cyan palette, light haze in the air, retro synthwave mood",
      cite: "44. La brume légère (light haze) donne du corps aux néons, sans elle le plan est plat.",
    },
    {
      type: "h3",
      id: "prompts-social",
      text: "Social vertical (45 à 50)",
    },
    {
      type: "p",
      text: "Pour TikTok, Reels et Shorts, commence ton prompt par « vertical video » et pense boucle : un mouvement qui peut recommencer sans accroc retient l'attention bien plus longtemps.",
    },
    {
      type: "quote",
      text: "Vertical video, a barista making latte art in slow motion, top-down close-up on the cup, warm cafe lighting, steam rising, satisfying loop-friendly motion",
      cite: "45. Le latte art : le contenu « satisfying » par excellence, pensé pour la boucle.",
    },
    {
      type: "quote",
      text: "Vertical video, a hand flipping a pancake in a cast iron pan, golden butter splashing, close-up side angle, bright kitchen daylight, crisp appetizing detail",
      cite: "46. Food vertical : une action courte et complète qui tient dans 5 secondes.",
    },
    {
      type: "quote",
      text: "Vertical video, time-lapse of a city street from day to night, lights turning on across the buildings, static high angle, clouds streaking across the sky",
      cite: "47. Le time-lapse jour-nuit : un effet fort que les modèles récents gèrent bien.",
    },
    {
      type: "quote",
      text: "Vertical video, a cat slowly opening its eyes in a sunbeam on a windowsill, macro close-up, soft golden light, gentle camera drift, calming mood",
      cite: "48. L'animal en macro : mignon, calme, zéro risque d'anatomie ratée visible.",
    },
    {
      type: "quote",
      text: "Vertical video, colorful ink drops blooming in clear water, macro shot, backlit white background, slow motion, hypnotic abstract patterns",
      cite: "49. L'encre dans l'eau : l'abstrait hypnotique, idéal en fond de texte.",
    },
    {
      type: "quote",
      text: "Vertical video, the feet of a runner hitting the ground at sunrise on an empty bridge, low tracking shot, long shadows, motivational energy, rhythmic motion",
      cite: "50. Les pieds plutôt que le corps entier : le rythme sans les défauts de course.",
    },
    {
      type: "p",
      text: "> Pro Tip : construis ta bibliothèque personnelle à partir de ces 50 blocs. À chaque génération réussie, note le prompt exact, le modèle et la date dans un fichier. Au bout d'un mois, tu écriras tes prompts deux fois plus vite avec deux fois moins d'essais.",
    },
    {
      type: "p",
      text: "Pour les réglages propres à chaque outil (durée, audio natif, formats), la [documentation officielle de Veo chez Google DeepMind](https://deepmind.google/models/veo/) est une bonne référence de ce que les modèles récents savent faire. Et si tu débutes complètement, commence par [le guide complet de la vidéo IA](/blog/video-ia-guide-complet) avant d'attaquer les prompts un par un.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Adapter et déboguer un prompt vidéo",
    },
    {
      type: "h3",
      id: "erreur-surcharge",
      text: "Erreur 1 : le prompt surchargé",
    },
    {
      type: "p",
      text: "Symptôme : ta vidéo ignore la moitié de ce que tu as demandé, ou mélange tout en un mouvement confus. Tu as écrit un scénario, pas un prompt. Le modèle a 5 à 10 secondes pour tout caser, il tranche à ta place et il tranche mal.",
    },
    {
      type: "p",
      text: "Fix concret : coupe ton prompt à une action et un mouvement de caméra. Génère. Puis réintroduis un élément à la fois pour identifier celui qui casse le plan. C'est plus rapide que dix régénérations d'un prompt obèse.",
    },
    {
      type: "h3",
      id: "erreur-camera-floue",
      text: "Erreur 2 : la caméra non spécifiée",
    },
    {
      type: "p",
      text: "Symptôme : le modèle t'inflige un zoom lent par défaut, ou un mouvement erratique qui donne le mal de mer. Tu n'as rien précisé, il a improvisé.",
    },
    {
      type: "p",
      text: "Fix concret : ajoute toujours un bloc caméra explicite, même minimal : static shot, slow dolly-in, tracking shot. Si tu veux un plan fixe, dis-le. « Static shot » est probablement le terme le plus sous-utilisé du prompting vidéo, alors qu'un plan fixe propre bat un mouvement raté.",
    },
    {
      type: "h3",
      id: "erreur-physique",
      text: "Erreur 3 : demander une physique impossible",
    },
    {
      type: "p",
      text: "Symptôme : mains qui fusionnent, jambes qui se croisent bizarrement, objets qui traversent la matière. Tu as demandé une interaction complexe (attraper, verser dans, se serrer la main) que les modèles gèrent encore mal.",
    },
    {
      type: "p",
      text: "Fix concret : contourne. Filme le résultat plutôt que la manipulation : le café déjà en train de couler plutôt que la main qui saisit la cafetière. Ou cadre pour exclure la zone à risque, comme le prompt 16 qui filme l'unboxing de dessus. Les pros de la vidéo IA sont des pros du cadrage d'évitement.",
    },
    {
      type: "h3",
      id: "erreur-copier-sans-adapter",
      text: "Erreur 4 : copier sans adapter au modèle",
    },
    {
      type: "p",
      text: "Symptôme : un prompt de cette liste donne un super résultat sur un outil et un truc médiocre sur un autre. C'est normal. Chaque modèle a ses forces : certains excellent en physique réaliste, d'autres en mouvements de caméra, d'autres en visages.",
    },
    {
      type: "p",
      text: "Fix concret : garde la structure, ajuste le vocabulaire. Sur un modèle qui gère l'audio natif, ajoute une ligne de son. Sur un modèle faible en visages, privilégie les plans larges ou les mains. Teste chaque prompt deux fois avant de le juger : la première génération est un tirage, pas un verdict.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Faut-il écrire ses prompts vidéo en anglais ?",
    },
    {
      type: "p",
      text: "Oui, dans la grande majorité des cas. Les modèles vidéo actuels ont été entraînés surtout sur des descriptions anglaises, et le vocabulaire technique du cinéma (dolly, rim light, shallow depth of field) y est bien mieux compris. Tu peux réfléchir en français, mais traduis ton prompt final en anglais avant de générer. C'est pour ça que les 50 exemples de cet article sont en anglais, avec l'explication en français à côté.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle longueur pour un prompt vidéo ?",
    },
    {
      type: "p",
      text: "Une à trois phrases denses suffisent. Un prompt vidéo trop long noie le modèle : il ne peut pas tout caser dans 5 à 10 secondes de vidéo. La bonne pratique, c'est une action principale par prompt, un mouvement de caméra, une lumière. Si tu veux deux actions, fais deux plans. Les prompts de cet article font tous entre 25 et 50 mots, c'est la zone où les modèles restent fiables.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Ces prompts marchent-ils sur tous les générateurs vidéo ?",
    },
    {
      type: "p",
      text: "La structure sujet, action, caméra, lumière marche partout : Veo, Kling, Runway, Luma, Seedance. Ce qui change d'un modèle à l'autre, c'est la sensibilité à certains mots et les options natives (audio, durée, formats). Un prompt de cet article te donnera un résultat proche sur chaque outil, mais pas identique. Teste ton prompt sur ton modèle principal, ajuste un bloc à la fois, et garde la version qui marche dans ta bibliothèque.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Pourquoi ma vidéo ignore une partie de mon prompt ?",
    },
    {
      type: "p",
      text: "Parce que tu demandes trop de choses pour la durée générée. Un modèle vidéo priorise : il traite d'abord le sujet et l'action, puis la caméra, puis le reste. Si ton prompt contient trois actions et deux mouvements de caméra, il en sacrifie. Coupe ton prompt à une action et un mouvement, régénère, et réintroduis les éléments un par un pour voir lequel casse le résultat.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Comment décrire un mouvement de caméra dans un prompt vidéo ?",
    },
    {
      type: "p",
      text: "Utilise le vocabulaire du tournage réel, en anglais : dolly-in (la caméra avance), tracking shot (elle suit le sujet), orbit (elle tourne autour), crane up (elle s'élève), static shot (elle ne bouge pas). Un seul mouvement par prompt, avec sa vitesse : slow dolly-in donne un résultat très différent de fast dolly-in. Si tu ne précises rien, le modèle choisit pour toi, et c'est rarement ce que tu voulais.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Combien de générations faut-il pour obtenir un bon plan ?",
    },
    {
      type: "p",
      text: "Compte deux à six essais pour un plan exploitable avec un prompt structuré, souvent plus si le prompt est flou. C'est normal : la vidéo IA reste probabiliste. La méthode efficace consiste à garder le prompt fixe et à relancer deux ou trois fois, puis, si rien ne va, à modifier un seul bloc (l'action ou la caméra en premier) plutôt que de tout réécrire. Au-delà de six essais sans progrès, le problème vient du prompt, pas du tirage.",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Ta prochaine vidéo commence par un bloc",
    },
    {
      type: "p",
      text: "Ces 50 prompts sont des points de départ. Choisis-en un proche de ton projet, génère-le tel quel pour voir la base, puis modifie un seul bloc à la fois : le sujet d'abord, la lumière ensuite. En quelques essais, tu auras un plan qui t'appartient. C'est exactement ce genre de méthode qu'on pousse plus loin dans la [formation IA gratuite AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video) : passer de prompts copiés à un vrai workflow de réalisation. Exercice du jour : prends le prompt 9, change le pêcheur pour un personnage de ton univers, garde tout le reste. Tu viens d'écrire ton premier prompt vidéo structuré.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-07-20 -->
