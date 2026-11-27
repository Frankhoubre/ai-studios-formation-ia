import type { Article } from "@/lib/types/article";

export const promptsPhotoProduit: Article = {
  title: "Prompts photo produit : 20 prompts e-commerce à copier",
  slug: "prompts-photo-produit",
  description:
    "20 prompts photo produit classés par usage (fond blanc, lifestyle, flat lay, macro), à lancer sur la vraie photo de ton produit pour qu'il ne bouge pas.",
  excerpt:
    "Un prompt photo produit qui marche passe la moitié de ses mots à dire ce qui ne doit pas bouger. Voici 20 prompts e-commerce classés par usage, et la méthode pour vérifier le résultat.",
  category: "prompting",
  tags: ["photo produit", "prompts", "e-commerce", "nano banana", "packshot"],
  date: "2026-10-09",
  updatedAt: "2026-10-09",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompts-photo-produit.webp",
  imageAlt:
    "Une savonnière en tablier photographie au smartphone un pain de savon à la lavande posé sur une feuille de papier blanc scotchée sur une vieille chaise, avec un carton recouvert d'aluminium en guise de réflecteur",
  keywords: [
    "prompt photo produit",
    "prompt packshot ia",
    "prompt e-commerce ia",
    "prompt nano banana produit",
    "photo produit fond blanc ia",
  ],
  relatedSlugs: [
    "photos-produit-ia-shooting",
    "prompt-structure-4-blocs-ia",
    "mockups-produit-ia",
  ],
  faq: [
    {
      question: "Quel est le meilleur prompt pour une photo produit IA ?",
      answer:
        "Celui qui part d'une vraie photo de ton produit et qui commence par lister ce qui ne doit pas changer : forme, proportions, texte exact de l'étiquette, couleurs. Ensuite seulement viennent la surface, la lumière, l'angle et le cadrage. La documentation Gemini propose d'ailleurs un modèle dans cet ordre : surface, éclairage, angle de caméra, détail net, format.",
    },
    {
      question: "Peut-on générer une photo produit sans photo du produit réel ?",
      answer:
        "Pour un concept, un prototype ou un moodboard, oui. Pour une fiche produit, non. Sans référence, le modèle invente un objet qui ressemble au tien, avec une autre étiquette et d'autres proportions. Google Merchant Center demande que l'image représente clairement l'article exact vendu. Une photo au smartphone sur une feuille blanche suffit comme point de départ.",
    },
    {
      question: "Quel modèle utiliser pour ces prompts photo produit ?",
      answer:
        "Je les ai écrits pour Nano Banana, la famille d'images de Gemini. Google recommande Nano Banana 2.1 pour les nouveaux projets, qui accepte jusqu'à 10 images d'objets en référence haute fidélité, contre 6 pour Nano Banana Pro. Les prompts restent en anglais courant et se transposent sans difficulté à d'autres modèles d'édition qui acceptent une image de référence.",
    },
    {
      question: "Les photos produit IA sont-elles acceptées sur Google Shopping et Amazon ?",
      answer:
        "Google Merchant Center les accepte, à condition que l'image contienne des métadonnées IPTC indiquant qu'elle a été générée par IA, et il demande de ne pas supprimer celles ajoutées par l'outil. Le guide photo d'Amazon ne dit rien de l'IA mais fixe un fond blanc RVB 255, 255, 255 et un produit qui remplit 85 % du cadre ou plus. Vérifie aussi les règles de ta catégorie dans Seller Central.",
    },
    {
      question: "Faut-il écrire les prompts photo produit en anglais ?",
      answer:
        "Je te le conseille pour la partie mise en scène, parce que le vocabulaire photo (softbox, rim light, flat lay, infinity cove) est anglais et que les exemples officiels le sont aussi. Le texte de ton étiquette, lui, se recopie tel qu'il est imprimé, en français si ton packaging est en français, entre guillemets.",
    },
    {
      question: "Comment garder le même style sur toute une gamme de produits ?",
      answer:
        "Fige un bloc de mise en scène (fond, lumière, angle, format) et colle-le mot pour mot dans chaque prompt. Puis donne au modèle la première image validée comme référence de style, avec la photo du produit suivant. C'est le prompt 20 du pack. Change un seul paramètre à la fois quand tu corriges.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu demandes à l'IA « une photo professionnelle de mon savon sur fond blanc ». Elle te rend un très beau savon. Pas le tien. L'étiquette porte des lettres qui n'existent dans aucune langue, la couleur a viré du mauve au rose, et le pain a pris deux centimètres. Pour une fiche produit, cette image ne vaut rien.",
    },
    {
      type: "p",
      text: "Ce pack te donne 20 prompts photo produit classés par usage : image principale sur fond blanc, images secondaires, mises en situation, flat lay, macro, saisons, déclinaisons de gamme. Tu as aussi la méthode pour les remplir et une grille pour contrôler le résultat avant de le mettre en ligne.",
    },
    {
      type: "p",
      text: "Mon parti pris : dans un bon prompt produit, la moitié des mots sert à dire ce qui ne doit pas bouger. Le décor, le modèle s'en sort très bien sans ton aide.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Avant de copier un prompt photo produit",
    },
    {
      type: "h3",
      text: "Pars toujours d'une vraie photo",
    },
    {
      type: "p",
      text: "Un smartphone, une feuille blanche, la lumière d'une fenêtre : ta référence est prête en cinq minutes, et les 20 prompts du pack s'appuient dessus. Le modèle garde l'objet et invente le reste : surface, lumière, ambiance. C'est la règle que j'ai détaillée dans [le guide pour remplacer un shooting produit par l'IA](/blog/photos-produit-ia-shooting), et elle vaut doublement quand tu écris le prompt.",
    },
    {
      type: "p",
      text: "Prends plusieurs photos : face, profil, dos, un gros plan de l'étiquette. Les modèles récents acceptent plusieurs images à la fois. Selon la [documentation officielle de Nano Banana](https://ai.google.dev/gemini-api/docs/image-generation), Nano Banana 2.1, le modèle que Google recommande pour les nouveaux projets, prend jusqu'à 10 images d'objets en haute fidélité, et Nano Banana Pro jusqu'à 6. Si tu demandes une vue de profil avec une seule photo de face, le modèle invente le profil.",
    },
    {
      type: "h3",
      text: "L'ordre des mots dans un prompt produit",
    },
    {
      type: "p",
      text: "La même documentation donne un modèle de prompt pour la photo commerciale : le produit, la surface, l'éclairage et son but, l'angle de caméra et ce qu'il doit montrer, le détail qui doit rester net, puis le format. J'ajoute un bloc devant, celui des contraintes : ce qui reste identique à la photo fournie. Google conseille d'ailleurs, pour préserver un logo pendant une retouche, de le décrire en détail dans la demande.",
    },
    {
      type: "image",
      src: "/images/articles/prompts-photo-produit-gemini.webp",
      alt: "Documentation de l'API Gemini, section Product mockups and commercial photography, avec le modèle de prompt pour une photo produit éclairée en studio et l'exemple d'une tasse noire sur une surface en béton",
      caption: "*Source : ai.google.dev/gemini-api/docs/image-generation, capture du 9 octobre 2026.*",
    },
    {
      type: "p",
      text: "Si tu as déjà une méthode pour tes prompts d'images, c'est la même logique que [la structure en quatre blocs](/blog/prompt-structure-4-blocs-ia), avec un bloc de contraintes qui passe en premier.",
    },
    {
      type: "h3",
      text: "Les règles des plateformes passent avant l'esthétique",
    },
    {
      type: "p",
      text: "Le [guide photo produit d'Amazon](https://sell.amazon.com/blog/product-photos) fixe un fond blanc aux valeurs RVB 255, 255, 255, un produit qui remplit 85 % du cadre ou plus, et des images de plus de 1 000 pixels de côté pour activer le zoom. Il recommande aussi des angles simples : face, dos, profil, vue du dessus, gros plan, 45 degrés.",
    },
    {
      type: "image",
      src: "/images/articles/prompts-photo-produit-amazon.webp",
      alt: "Page du blog vendeurs d'Amazon, section What to avoid, qui rappelle le fond blanc RGB 255, 255, 255 et conseille de limiter accessoires, mannequins et décors",
      caption: "*Source : sell.amazon.com/blog/product-photos, capture du 9 octobre 2026.*",
    },
    {
      type: "p",
      text: "Côté Google, la [page d'aide Merchant Center sur les images](https://support.google.com/merchants/answer/6324350?hl=fr) interdit les incrustations promotionnelles (prix, « acheter », filigrane, logo de boutique ajouté) et demande que l'image montre clairement l'article exact vendu. Elle exige surtout que toute image créée par IA générative contienne des métadonnées le signalant, et de ne pas supprimer celles que l'outil a ajoutées.",
    },
    {
      type: "image",
      src: "/images/articles/prompts-photo-produit-merchant.webp",
      alt: "Page d'aide Google Merchant Center en français, section Métadonnées des images générées par IA, qui liste les valeurs IPTC TrainedAlgorithmicMedia, CompositeSynthetic et AlgorithmicMedia",
      caption: "*Source : support.google.com/merchants/answer/6324350, capture du 9 octobre 2026.*",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "20 prompts photo produit classés par usage",
    },
    {
      type: "table",
      caption: "Quels prompts pour quel emplacement",
      headers: ["Emplacement", "Prompts", "Format conseillé", "Point de vigilance"],
      rows: [
        ["Image principale marketplace", "1 à 3", "1:1", "Blanc pur vérifié, rien d'autre que le produit"],
        ["Images secondaires de la fiche", "4, 5, 12, 13", "1:1", "Matière et couleur conformes au réel"],
        ["Réseaux sociaux, Pinterest", "6 à 11, 14, 15", "4:5 ou 9:16", "Accessoires clairement hors produit"],
        ["Bannière, newsletter, saison", "16 à 18", "16:9 ou 4:5", "Texte ajouté après, jamais généré"],
        ["Catalogue d'une gamme", "19, 20", "Celui de la série", "Même lumière d'une image à l'autre"],
      ],
    },
    {
      type: "p",
      text: "Les crochets sont à remplacer. Le texte de l'étiquette se recopie lettre pour lettre, accents compris. Les prompts sont en anglais, comme les exemples officiels, et le vocabulaire photo y est plus précis.",
    },
    {
      type: "h3",
      text: "Image principale sur fond blanc",
    },
    {
      type: "quote",
      text: "Using the provided photo, keep the product exactly as it is: same shape, same proportions, same colors, same label reading [label text]. Place it on a plain pure white background, centered, front view at eye level, the product filling most of the frame. Soft even studio lighting from both sides, a faint contact shadow under the base. No props, no added text, no reflections of the room. Square image.",
      cite: "1. La vue de face. Vérifie le blanc à la pipette avant d'envoyer.",
    },
    {
      type: "quote",
      text: "Using the two provided photos of the same product (front and side), keep every detail identical to the photos. Show the product from a slightly elevated 45-degree angle on a plain pure white background, filling most of the frame. Soft diffused light, no harsh shadows, sharp focus across the whole product. Square image.",
      cite: "2. Le trois-quarts. Sans la photo de profil, le modèle inventera le côté.",
    },
    {
      type: "quote",
      text: "Using the provided photos, arrange the [number] products of the set side by side on a plain pure white background, all at the same scale as in reality, the tallest one in the center. Keep each label exactly as photographed. Even studio lighting, no props. Square image.",
      cite: "3. Le lot ou le coffret. Ne mets dans l'image que ce que contient le colis.",
    },
    {
      type: "h3",
      text: "Images secondaires sur fond neutre",
    },
    {
      type: "quote",
      text: "Using the provided photo, keep the product unchanged. Place it on a glossy white acrylic surface with a soft mirror reflection below, light grey gradient background. Large softbox from above, thin rim light outlining the edges. Square image.",
      cite: "4. Le reflet miroir, classique pour la cosmétique et les flacons.",
    },
    {
      type: "quote",
      text: "Using the provided photo, keep the product unchanged. Place it on a warm beige paper backdrop, hard late-afternoon sunlight from the left casting a long crisp shadow, a soft window-blind shadow pattern across the background. Square image.",
      cite: "5. L'ombre portée nette. Donne du relief sans rien ajouter dans le cadre.",
    },
    {
      type: "h3",
      text: "Mises en situation",
    },
    {
      type: "quote",
      text: "Place the product from the provided photo on the edge of a white ceramic washbasin in a bright bathroom in the morning, a folded linen towel and a sprig of eucalyptus nearby. Daylight from a frosted window, shallow depth of field, background softly blurred, product in sharp focus. Keep the label exactly as photographed. Vertical 4:5.",
      cite: "6. Salle de bain : soin, savon, parfum.",
    },
    {
      type: "quote",
      text: "Place the product from the provided photo on a worn oak worktop in a home kitchen at breakfast time, a linen cloth and a light dusting of flour around it, warm side light from a window on the left. Shot at table height with a 50mm lens. Keep shape, colors and label identical to the photo. Vertical 4:5.",
      cite: "7. Cuisine : épicerie fine, ustensile, vaisselle.",
    },
    {
      type: "quote",
      text: "Place the product from the provided photo on a walnut desk next to a closed laptop and an open paper notebook, late afternoon light, the rest of the room out of focus. Keep the product's size realistic relative to the laptop. Vertical 4:5.",
      cite: "8. Bureau : accessoire tech, papeterie, objet de déco.",
    },
    {
      type: "quote",
      text: "Place the product from the provided photo on a flat granite rock by a mountain lake, early morning mist on the water, cool blue light with a touch of warm sun on the product. Low angle, product in the foreground, sharp. Keep every detail of the product identical. Vertical 9:16.",
      cite: "9. Extérieur : gourde, équipement, sport.",
    },
    {
      type: "h3",
      text: "Vue du dessus et flat lay",
    },
    {
      type: "quote",
      text: "Top-down flat lay. The product from the provided photo in the center of a sheet of [color] paper, surrounded at regular distance by [3 related objects], soft even daylight, no shadow falling on the label. Keep the product exactly as photographed. Square image.",
      cite: "10. Le flat lay classique. Prends des objets liés à l'usage, que personne ne croira inclus.",
    },
    {
      type: "quote",
      text: "Top-down shot of the garment from the provided photo, laid flat and neatly folded on a light wooden floor, sleeves tucked in, fabric texture visible, a pair of sneakers and sunglasses at the edge of the frame. Keep the print, color and fabric identical to the photo. Vertical 4:5.",
      cite: "11. Textile à plat. Le motif imprimé est la première chose qui dérive.",
    },
    {
      type: "h3",
      text: "Macro et matière",
    },
    {
      type: "quote",
      text: "Using the provided close-up photo of the product, create an extreme close-up with a macro lens, raking light from the side revealing the texture of the [material], very shallow depth of field. Do not add any texture that is not visible in the provided photo. Square image.",
      cite: "12. La matière. Pars d'un vrai gros plan, c'est là que le modèle invente le plus.",
    },
    {
      type: "quote",
      text: "Next to the open jar from the provided photo, a single swatch of the cream spread on a pale stone surface, color identical to the cream visible in the photo, soft overhead light, macro framing. Square image.",
      cite: "13. La texture d'une crème ou d'un baume. Compare la teinte au produit réel.",
    },
    {
      type: "h3",
      text: "Échelle et produit porté",
    },
    {
      type: "quote",
      text: "A hand with natural short nails holding the product from the provided photo, which is [height] cm tall, at chest height against a softly blurred living room. The product keeps its real proportions relative to the hand. Label facing the camera and identical to the photo. Vertical 4:5.",
      cite: "14. La main qui donne l'échelle. Écris la vraie dimension en centimètres.",
    },
    {
      type: "quote",
      text: "The bag from the provided photos carried on the shoulder of a person in a beige wool coat, framed from chin to hips, on a city street in soft overcast light. Keep the bag's shape, stitching, hardware and color identical to the photos. Vertical 4:5.",
      cite: "15. Le produit porté. Cadrer sans visage évite de fabriquer un mannequin trop parfait.",
    },
    {
      type: "h3",
      text: "Saisons et campagnes",
    },
    {
      type: "quote",
      text: "Place the product from the provided photo on a dark green wool blanket, a few pine branches around it, warm string lights blurred in the background, evening mood, product lit by a soft warm key light. Keep the product unchanged. Vertical 4:5.",
      cite: "16. Noël, sans boule rouge ni bonnet de père Noël.",
    },
    {
      type: "quote",
      text: "Place the product from the provided photo on a striped cotton beach towel, harsh midday sun, crisp short shadows, a few grains of sand on the towel, saturated summer colors. Keep the product unchanged. Vertical 4:5.",
      cite: "17. L'été en lumière dure, l'opposé visuel du prompt 16.",
    },
    {
      type: "quote",
      text: "The product from the provided photo placed in the right third of the frame on a solid terracotta background, large empty space on the left for text added later, soft studio light, no text in the image. Wide 16:9.",
      cite: "18. La bannière avec espace pour le texte. Tu poses le texte dans ton outil de mise en page.",
    },
    {
      type: "h3",
      text: "Déclinaisons de gamme",
    },
    {
      type: "quote",
      text: "Using the first provided image as the reference for the scene, recreate exactly the same composition, light and angle with the product from the second provided photo, which is the real [color] version. Do not change any other element of the scene.",
      cite: "19. La variante de couleur. Photographie chaque coloris, ne laisse jamais l'IA le deviner.",
    },
    {
      type: "quote",
      text: "Using the first provided image as the style reference for background, lighting, camera angle and framing, photograph the product from the second provided photo in exactly the same setup. Keep the second product identical to its photo. Same aspect ratio as the first image.",
      cite: "20. La série cohérente. La première image validée devient le patron des suivantes.",
    },
    {
      type: "h3",
      text: "La méthode pour remplir un prompt",
    },
    {
      type: "ol",
      items: [
        "Photographie le produit à la lumière d'une fenêtre, sur un fond uni : face, profil, dos, gros plan de l'étiquette. Cinq minutes suffisent.",
        "Recopie le texte exact de l'étiquette et note les dimensions réelles. Ces deux infos vont dans le prompt.",
        "Choisis le prompt de ton emplacement dans le tableau et remplace les crochets. Ne touche pas au reste au premier essai.",
        "Génère quatre versions, puis place chacune à côté de ta photo d'origine. Zoome à 100 % sur l'étiquette, les bords et la couleur.",
        "Corrige une seule chose par relance, en ajoutant une phrase au prompt. Si l'étiquette résiste après trois essais, recolle-la en retouche.",
        "Exporte sans effacer les métadonnées ajoutées par l'outil, surtout si l'image part sur Google Shopping.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : mets le texte de l'étiquette entre guillemets dans le prompt, avec la casse exacte. « SAVON DOUX lavande fine » et « Savon doux Lavande Fine » ne donnent pas la même étiquette.",
    },
    {
      type: "p",
      text: "Une fois ta série d'images validée, tu peux en faire des vidéos courtes pour la fiche produit. La méthode est dans [l'article sur la vidéo produit e-commerce](/blog/video-produit-ecommerce-ia). Pour les maquettes d'emballage ou d'écran plutôt que des photos de l'objet réel, va voir [le guide des mockups produit](/blog/mockups-produit-ia).",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quand le prompt photo produit déraille",
    },
    {
      type: "h3",
      text: "L'étiquette est réécrite",
    },
    {
      type: "p",
      text: "Symptôme : la marque perd une lettre, le petit texte devient une bouillie de caractères, le logo est redessiné. Le client le voit en zoomant, et toi tu viens de publier une contrefaçon de ton propre produit.",
    },
    {
      type: "p",
      text: "Fix concret : recopie l'étiquette mot pour mot dans le prompt et ajoute une photo rapprochée de l'étiquette en référence. Si ça ne tient toujours pas, garde l'image pour sa lumière et recolle l'étiquette d'origine par-dessus dans ton logiciel de retouche, en suivant la courbure du flacon.",
    },
    {
      type: "h3",
      text: "Le produit change de taille",
    },
    {
      type: "p",
      text: "Symptôme : sur la mise en situation, le pot de crème fait la taille d'un pot de peinture, ou le bijou disparaît dans la main. Le modèle a calé la taille sur le décor.",
    },
    {
      type: "p",
      text: "Fix concret : écris la hauteur réelle en centimètres et donne un repère connu dans la scène (une main, un ordinateur, une tasse). Pour contrôler, superpose ta photo d'origine en calque à 50 % d'opacité : la silhouette doit coïncider, à l'échelle près.",
    },
    {
      type: "h3",
      text: "Le blanc n'est pas blanc",
    },
    {
      type: "p",
      text: "Symptôme : ton fond « pure white » sort en gris très clair ou en crème, avec un dégradé dans les coins. À l'œil sur ton écran, ça passe. Avec la pipette, tu lis par exemple 246 au lieu de 255.",
    },
    {
      type: "p",
      text: "Fix concret : ne compte pas sur le prompt pour livrer un blanc exact. Détoure le produit et pose-le sur un fond 255 en retouche, comme expliqué dans [le guide pour détourer et supprimer un fond avec l'IA](/blog/detourer-supprimer-fond-ia). Garde l'ombre de contact, sinon le produit flotte.",
    },
    {
      type: "h3",
      text: "Le décor promet ce que tu ne livres pas",
    },
    {
      type: "p",
      text: "Symptôme : la serviette, la branche d'eucalyptus et la petite coupelle du prompt 6 ont l'air de faire partie du coffret. Un client peut s'attendre à les recevoir. Amazon conseille déjà de ne pas laisser accessoires et décors voler la vedette au produit, et Google demande que l'image représente l'article exact vendu.",
    },
    {
      type: "p",
      text: "Fix concret : choisis des accessoires qui ne ressemblent à rien de ce que tu vends, garde l'image principale sans aucun accessoire, et précise dans la description ce qui est inclus.",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quel est le meilleur prompt pour une photo produit IA ?",
    },
    {
      type: "p",
      text: "Celui qui part d'une vraie photo de ton produit et qui commence par lister ce qui ne doit pas changer : forme, proportions, texte exact de l'étiquette, couleurs. Ensuite seulement viennent la surface, la lumière, l'angle et le cadrage. La documentation Gemini propose d'ailleurs un modèle dans cet ordre : surface, éclairage, angle de caméra, détail net, format.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Peut-on générer une photo produit sans photo du produit réel ?",
    },
    {
      type: "p",
      text: "Pour un concept, un prototype ou un moodboard, oui. Pour une fiche produit, non. Sans référence, le modèle invente un objet qui ressemble au tien, avec une autre étiquette et d'autres proportions. Google Merchant Center demande que l'image représente clairement l'article exact vendu. Une photo au smartphone sur une feuille blanche suffit comme point de départ.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Quel modèle utiliser pour ces prompts photo produit ?",
    },
    {
      type: "p",
      text: "Je les ai écrits pour Nano Banana, la famille d'images de Gemini. Google recommande Nano Banana 2.1 pour les nouveaux projets, qui accepte jusqu'à 10 images d'objets en référence haute fidélité, contre 6 pour Nano Banana Pro. Les prompts restent en anglais courant et se transposent sans difficulté à d'autres modèles d'édition qui acceptent une image de référence.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Les photos produit IA sont-elles acceptées sur Google Shopping et Amazon ?",
    },
    {
      type: "p",
      text: "Google Merchant Center les accepte, à condition que l'image contienne des métadonnées IPTC indiquant qu'elle a été générée par IA, et il demande de ne pas supprimer celles ajoutées par l'outil. Le guide photo d'Amazon ne dit rien de l'IA mais fixe un fond blanc RVB 255, 255, 255 et un produit qui remplit 85 % du cadre ou plus. Vérifie aussi les règles de ta catégorie dans Seller Central.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Faut-il écrire les prompts photo produit en anglais ?",
    },
    {
      type: "p",
      text: "Je te le conseille pour la partie mise en scène, parce que le vocabulaire photo (softbox, rim light, flat lay, infinity cove) est anglais et que les exemples officiels le sont aussi. Le texte de ton étiquette, lui, se recopie tel qu'il est imprimé, en français si ton packaging est en français, entre guillemets.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Comment garder le même style sur toute une gamme de produits ?",
    },
    {
      type: "p",
      text: "Fige un bloc de mise en scène (fond, lumière, angle, format) et colle-le mot pour mot dans chaque prompt. Puis donne au modèle la première image validée comme référence de style, avec la photo du produit suivant. C'est le prompt 20 du pack. Change un seul paramètre à la fois quand tu corriges.",
    },
    {
      type: "p",
      text: "Commence par ton produit le plus vendu. Fais ses quatre photos de référence ce soir, lance les prompts 1 et 6, et compare au zoom avec l'original. Les phrases que tu auras dû ajouter pour tenir l'étiquette et les proportions, garde-les : elles serviront aux dix-huit autres prompts.",
    },
    {
      type: "p",
      text: "Note de fondateur : une photo produit réussie, c'est un regard de photographe autant qu'un bon prompt. Où poser la lumière, ce qu'on laisse hors du cadre : on le travaille sur des cas concrets dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-09 -->
