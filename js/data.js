/* =====================================================================
   AgriHealth AI – data.js (English)
   Diseases, hosts and symptom chips used by detect.js and the blog search.
   Har disease ka poora content diseases/<slug>.html mein hai.
   ===================================================================== */

window.AH_DATA = {
  "lang": "en",
  "diseases": [
    {
      "slug": "wheat-yellow-rust",
      "name": "Yellow (Stripe) Rust",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Yellow-orange powdery pustules arranged in stripes along wheat leaves.",
      "question": "Are the yellow spots arranged in straight lines (stripes) along the leaf?",
      "keywords": [
        "stripe",
        "stripes",
        "lines",
        "yellow powder",
        "orange powder",
        "rust",
        "peela powder",
        "peeli kungi",
        "dhaariyan",
        "peeli",
        "peela",
        "dhari",
        "dhariyan",
        "lakeer",
        "lakeeren",
        "zang",
        "kungi",
        "پیلی کنگی",
        "کنگی",
        "دھاریاں",
        "دھاری دار",
        "لائنیں",
        "پیلا پاؤڈر",
        "نارنجی پاؤڈر",
        "پیلے دھبے",
        "گندم کی کنگی",
        "پتوں پر پیلی لکیریں",
        "ہاتھ پر پیلا رنگ لگنا",
        "زنگ"
      ],
      "chips": [
        "p_stripes",
        "p_orange_powder",
        "p_yellowing"
      ],
      "todo": [
        "Walk the field and check how many plants and how much of each leaf is affected",
        "Contact your local agriculture officer early; they can confirm the disease and advise if a fungicide is needed and which product is approved in your area",
        "Act quickly if the top leaves (especially the flag leaf) are getting infected, because these leaves fill the grain",
        "Keep a record of the date, field and variety to help plan next season"
      ],
      "dont": []
    },
    {
      "slug": "wheat-leaf-rust",
      "name": "Leaf (Brown) Rust",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Small, round, orange-brown powdery spots scattered across wheat leaves.",
      "question": "Are the spots round and scattered (not in straight lines)?",
      "keywords": [
        "brown rust",
        "leaf rust",
        "orange spots",
        "round spots",
        "scattered",
        "bhoori kungi",
        "dhabbe",
        "bhoora",
        "bhuri",
        "bhoore",
        "gol dhabbe",
        "dhabay",
        "zang",
        "kungi",
        "بھوری کنگی",
        "کنگی",
        "پتوں کی کنگی",
        "نارنجی دھبے",
        "بھورے دھبے",
        "گول دھبے",
        "بکھرے دھبے",
        "دھبے",
        "نارنجی پاؤڈر",
        "بھورا پاؤڈر",
        "زنگ",
        "گندم کے پتوں پر دانے"
      ],
      "chips": [
        "p_orange_powder",
        "p_brown_spots"
      ],
      "todo": [
        "Check how many plants are affected and whether the upper leaves are infected",
        "Ask your local agriculture officer whether a fungicide is worthwhile at your crop stage and which product is approved",
        "Note the variety you planted; resistance is the cheapest protection next season"
      ],
      "dont": []
    },
    {
      "slug": "wheat-powdery-mildew",
      "name": "Powdery Mildew",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "White to grey cotton-like patches on wheat leaves and stems.",
      "question": "Is there a white or grey cotton-like growth on the leaves?",
      "keywords": [
        "white powder",
        "powdery",
        "mildew",
        "white patches",
        "grey",
        "cotton",
        "safed",
        "safaid",
        "sufaid",
        "safed powder",
        "phaphoondi",
        "phaphundi",
        "سفید پھپھوندی",
        "سفوفی پھپھوندی",
        "سفید پاؤڈر",
        "سفید دھبے",
        "سفید تہہ",
        "روئی جیسا",
        "سرمئی دھبے",
        "سفیدی",
        "پھپھوندی",
        "آٹے جیسا پاؤڈر",
        "پتوں پر سفید"
      ],
      "chips": [
        "p_white_powder",
        "p_yellowing"
      ],
      "todo": [
        "Check whether the disease is limited to lower leaves or moving to the upper leaves",
        "Ask your agriculture officer if treatment is needed at your crop stage",
        "Avoid adding extra nitrogen while the disease is active"
      ],
      "dont": []
    },
    {
      "slug": "rice-blast",
      "name": "Rice Blast",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Diamond-shaped leaf spots with grey centres; can also rot the neck of the panicle.",
      "question": "Are the spots diamond or spindle-shaped with a grey centre?",
      "keywords": [
        "diamond",
        "spindle",
        "grey centre",
        "gray center",
        "neck",
        "blast",
        "white panicle",
        "empty grain",
        "heera",
        "heeray",
        "khali dane",
        "khaali dane",
        "gardan tootna",
        "dhaan",
        "jhulsao",
        "aankh jaise",
        "ankh jaise dhabbe",
        "nokeelay dhabbe",
        "بلاسٹ",
        "جھلساؤ",
        "ہیرے جیسے دھبے",
        "تکلے جیسے دھبے",
        "سرمئی درمیان",
        "گردن توڑ",
        "گردن کالی",
        "سفید سٹہ",
        "خالی سٹہ",
        "خالی دانے",
        "سٹہ لٹک گیا",
        "دھان کے پتوں پر دھبے",
        "آنکھ جیسے دھبے"
      ],
      "chips": [
        "p_diamond_spots",
        "p_brown_spots",
        "p_wilting"
      ],
      "todo": [
        "Check leaves and, near heading, the neck of the panicles",
        "Contact your agriculture officer quickly if you see neck blast or spreading leaf spots; protective treatment timing is important",
        "Avoid adding more nitrogen while the disease is active",
        "Keep fields flooded as recommended to reduce stress"
      ],
      "dont": []
    },
    {
      "slug": "rice-bacterial-leaf-blight",
      "name": "Bacterial Leaf Blight",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Leaves dry out from the tips and edges with wavy yellow-to-white stripes.",
      "question": "Is the leaf drying from the tip and edges with a wavy border?",
      "keywords": [
        "edges",
        "tip",
        "drying",
        "wavy",
        "straw",
        "white leaves",
        "ooze",
        "blight",
        "kresek",
        "kinaray",
        "kinare",
        "kinaron",
        "sookh",
        "sookhna",
        "sukh",
        "nok",
        "jhulsa",
        "jhulsao",
        "جھلساؤ",
        "بیکٹیریائی جھلساؤ",
        "پتے کی نوک سوکھنا",
        "کنارے سوکھنا",
        "لہر دار کنارہ",
        "سفید پتے",
        "پیلے پتے",
        "بھوسے جیسا رنگ",
        "دودھیا قطرے",
        "پتے جل گئے",
        "کریسک",
        "مرجھانا"
      ],
      "chips": [
        "p_edge_drying",
        "p_yellowing",
        "p_wilting"
      ],
      "todo": [
        "Check whether the drying starts from the leaf tips and edges",
        "Contact your agriculture officer to confirm, because chemical options for bacterial diseases are limited",
        "Avoid extra nitrogen while the disease is active",
        "Where possible, avoid letting water from infected fields flow into healthy ones"
      ],
      "dont": []
    },
    {
      "slug": "cotton-leaf-curl",
      "name": "Cotton Leaf Curl Disease",
      "type": "plant",
      "hosts": [
        "cotton"
      ],
      "hostLabel": "Cotton",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Curled leaves with thick, dark veins and small leaf-like growths underneath.",
      "question": "Are the leaf veins thick and dark, with small growths under the leaf?",
      "keywords": [
        "curl",
        "curled",
        "curling",
        "thick veins",
        "whitefly",
        "enation",
        "stunted",
        "patta murna",
        "patte mur",
        "patta mur",
        "mur gaye",
        "murr",
        "ragein",
        "rag moti",
        "moti ragein",
        "safed makhi",
        "sufaid makhi",
        "chhota reh",
        "پتہ مروڑ",
        "پتے مڑنا",
        "مڑے ہوئے پتے",
        "مروڑ",
        "موٹی رگیں",
        "سفید مکھی",
        "پتے کے نیچے ابھار",
        "چھوٹا پودا",
        "پودا نہیں بڑھ رہا",
        "ٹینڈے کم",
        "کپاس کا وائرس",
        "پتے سکڑنا",
        "مڑ گئے",
        "مڑے",
        "پتے مڑ"
      ],
      "chips": [
        "p_curled",
        "p_stunted"
      ],
      "todo": [
        "Check plants for curled leaves and thick veins, and look for whiteflies under the leaves",
        "Report early infections to your agriculture officer, who can advise on whitefly control in your area",
        "Ask whether removing heavily infected young plants is advised in your area"
      ],
      "dont": []
    },
    {
      "slug": "tomato-early-blight",
      "name": "Early Blight",
      "type": "plant",
      "hosts": [
        "tomato",
        "potato"
      ],
      "hostLabel": "Tomato & Potato",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown spots with rings like a target, starting on the older lower leaves.",
      "question": "Do the brown spots have rings inside them, like a target?",
      "keywords": [
        "target",
        "rings",
        "concentric",
        "brown spots",
        "lower leaves",
        "yellow halo",
        "early blight",
        "chhalle",
        "daire",
        "dairay",
        "nishana",
        "bhoore dhabbe",
        "neeche ke patte",
        "agaiti",
        "agaita",
        "اگیتا جھلساؤ",
        "جھلساؤ",
        "نشانے جیسے دھبے",
        "دائرے",
        "گول دائرے",
        "بھورے دھبے",
        "نیچے کے پتے",
        "پیلا گھیرا",
        "پتے پیلے ہو کر گرنا",
        "ٹماٹر کے پتوں پر دھبے",
        "آلو کے پتوں پر دھبے"
      ],
      "chips": [
        "p_target_spots",
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Remove badly spotted lower leaves and take them out of the field (do not leave them on the ground)",
        "Water at the base of plants instead of over the leaves",
        "Ask your agriculture officer or a trusted local adviser whether a fungicide is needed",
        "Feed plants properly; stressed plants suffer more"
      ],
      "dont": []
    },
    {
      "slug": "potato-late-blight",
      "name": "Late Blight",
      "type": "plant",
      "hosts": [
        "potato",
        "tomato"
      ],
      "hostLabel": "Potato & Tomato",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Large dark, wet-looking patches that spread very fast in cool, wet weather.",
      "question": "Are the patches large, dark and wet-looking, spreading fast after cool, wet weather?",
      "keywords": [
        "late blight",
        "dark patches",
        "wet",
        "greasy",
        "water soaked",
        "white fuzz",
        "rotting",
        "black patches",
        "fast",
        "pichheti",
        "pichheta",
        "geela",
        "geelay",
        "kale dhabbe",
        "kaale dhabbe",
        "sarr",
        "sarna",
        "jhulsao",
        "patte kaale",
        "kaale ho gaye",
        "gal gaye",
        "patte gal gaye",
        "پچھیتا جھلساؤ",
        "جھلساؤ",
        "کالے دھبے",
        "گہرے دھبے",
        "گیلے دھبے",
        "چکنے دھبے",
        "سفید روئیں",
        "پتوں کے نیچے سفیدی",
        "آلو گلنا",
        "پودے گل رہے ہیں",
        "تیزی سے پھیلنا",
        "پتے کالے ہونا",
        "پتے کالے",
        "کالے ہو کر گل گئے",
        "پتے گل گئے"
      ],
      "chips": [
        "p_dark_wet",
        "p_wilting",
        "p_rot"
      ],
      "todo": [
        "Act the same day: contact your local agriculture officer for advice on protecting the rest of the crop",
        "Remove infected plants, put them in a bag and destroy them; do not compost them",
        "Avoid working in wet fields, which spreads spores on clothes and tools",
        "Check nearby potato and tomato plants daily"
      ],
      "dont": []
    },
    {
      "slug": "wheat-loose-smut",
      "name": "Loose Smut of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Wheat ears turn into black, sooty powder instead of grain; later only a bare stalk is left.",
      "question": "Has the whole ear turned into loose black powder, leaving a bare stalk?",
      "keywords": [
        "loose smut",
        "smut",
        "black ear",
        "black powder",
        "kangiyari",
        "kangyari",
        "kaali bali",
        "kala sitta",
        "sitta kala",
        "bare stalk",
        "gandum bimari",
        "seed treatment",
        "کانگیاری",
        "کنگیاری",
        "کالا سٹہ",
        "کالی بالی",
        "کالا پاؤڈر",
        "سٹے میں کالک",
        "خالی ڈنڈی",
        "گندم کی بیماری",
        "بیج کا علاج",
        "گندم کالی"
      ],
      "chips": [
        "p_black_heads"
      ],
      "todo": [
        "Walk the field soon after heading and see roughly how many smutted ears there are",
        "Pull out smutted plants early in the morning before the powder blows away; slip a bag over the ear first, then bury the plants away from the field",
        "Mark this field so its grain is not kept as seed",
        "Ask your agriculture officer about certified seed and an approved fungicide seed treatment for the next sowing"
      ],
      "dont": [
        "Don't save, sell or exchange seed from a field that had smutted ears",
        "Don't carry smutted ears through the healthy crop"
      ]
    },
    {
      "slug": "wheat-aphids",
      "name": "Wheat Aphids",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat & Barley",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Groups of tiny green to dark sap-sucking insects on wheat leaves and ears; leaves turn sticky.",
      "question": "Can you see small soft insects in groups, with sticky leaves?",
      "keywords": [
        "aphid",
        "aphids",
        "tela",
        "sust tela",
        "chepa",
        "sticky leaves",
        "chipchipa patta",
        "green insects",
        "keera",
        "bali par keera",
        "gandum tela",
        "honeydew",
        "سست تیلا",
        "تیلا",
        "گندم کا تیلا",
        "سٹے کا تیلا",
        "ہرے کیڑے",
        "چپچپے پتے",
        "سٹے پر کیڑا",
        "رس چوسنے والا کیڑا",
        "کالک",
        "لیڈی برڈ"
      ],
      "chips": [
        "p_insects",
        "p_sticky",
        "p_yellowing"
      ],
      "todo": [
        "From January, check plants across the whole field each week, not only at the edges",
        "Look for ladybird beetles and their larvae, hoverfly larvae and puffed brown 'mummy' aphids; if they are plentiful they may control the aphids",
        "Mark hot spots and check them again after a few days to see if numbers are rising",
        "If aphids are increasing on the flag leaf and ears, ask your agriculture officer whether a spray is needed and which product is approved"
      ],
      "dont": [
        "Don't spray just because you see a few aphids; natural enemies often control them",
        "Don't add extra nitrogen during an aphid attack"
      ]
    },
    {
      "slug": "rice-brown-spot",
      "name": "Brown Spot of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Oval brown spots with grey centres and reddish-brown edges on rice leaves and grain husks.",
      "question": "Are the spots oval, about the size of a sesame seed, with a grey centre and a reddish-brown edge?",
      "keywords": [
        "brown spot",
        "brown spots",
        "bhoore dhabbe",
        "dhaan",
        "munji",
        "chawal",
        "patton par dhabbe",
        "oval spots",
        "til jaise dhabbe",
        "kala dana",
        "rice leaf spot",
        "chawal ki bimari",
        "بھورے دھبے",
        "دھان کے دھبے",
        "مونجی",
        "دھان",
        "چاول کی بیماری",
        "پتوں پر دھبے",
        "تل جیسے دھبے",
        "کالا دانہ",
        "بدرنگ دانہ",
        "براؤن سپاٹ"
      ],
      "chips": [
        "p_brown_spots"
      ],
      "todo": [
        "See whether spots are spread evenly across the field (often a sign of poor soil) or only in some patches",
        "Ask your agriculture officer to help check soil fertility, and correct any nutrient shortage as advised",
        "Keep water in the field as recommended to avoid stress",
        "If spots are moving to the upper leaves and panicles, ask your agriculture officer whether a fungicide is needed and which one is approved"
      ],
      "dont": []
    },
    {
      "slug": "rice-bakanae",
      "name": "Bakanae (Foot Rot) of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice (especially basmati)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Some rice seedlings grow unusually tall, thin and pale, then rot at the base and die.",
      "question": "Are some seedlings much taller, thinner and paler than the others?",
      "keywords": [
        "bakanae",
        "foot rot",
        "tall seedlings",
        "lambay paude",
        "paneeri",
        "paneeri peeli",
        "jarr galna",
        "pair galna",
        "basmati",
        "munji",
        "dhaan",
        "pale seedling",
        "nursery disease",
        "بکانے",
        "فٹ راٹ",
        "لمبے پودے",
        "پنیری کی بیماری",
        "پیلی پنیری",
        "جڑ کا گلنا",
        "پیر گلنا",
        "باسمتی",
        "دھان",
        "مونجی",
        "گلابی پھپھوندی"
      ],
      "chips": [
        "p_yellowing",
        "p_wilting"
      ],
      "todo": [
        "Pull out tall, pale plants as soon as you see them, with their roots, and bury them away from the field",
        "Check the nursery carefully before transplanting and do not transplant suspicious seedlings",
        "Avoid extra nitrogen in affected fields",
        "Ask your agriculture officer about approved seed treatment or seedling root-dip for the next nursery"
      ],
      "dont": [
        "Don't keep seed from an affected field",
        "Don't throw pulled plants into water channels or leave them in the field"
      ]
    },
    {
      "slug": "rice-stem-borer",
      "name": "Rice Stem Borers",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Central shoot dries (dead heart) or the panicle comes out white and empty; holes and frass in stems.",
      "question": "Does the dried central shoot or white panicle pull out easily, with a hole and frass in the stem?",
      "keywords": [
        "stem borer",
        "tane ki sundi",
        "sundi",
        "dead heart",
        "white head",
        "safaid sitta",
        "khali sitta",
        "gobh sukh gayi",
        "munji",
        "dhaan",
        "borer",
        "rice sundi",
        "sukhi gobh",
        "تنے کی سنڈی",
        "سنڈی",
        "سوکھی گوبھ",
        "ڈیڈ ہارٹ",
        "سفید سٹہ",
        "خالی مونجر",
        "دھان کی سنڈی",
        "مونجی",
        "تنے میں سوراخ",
        "تنے میں برادہ"
      ],
      "chips": [
        "p_dead_heart",
        "p_bored",
        "p_caterpillars"
      ],
      "todo": [
        "Pull a few dead hearts or white heads: if they come out easily and the stem has a hole and frass, it is stem borer",
        "Collect and destroy egg masses from the nursery and field when you see them",
        "Before transplanting, cut the leaf tips of nursery seedlings to remove eggs",
        "Light traps can show when moths are flying in your area",
        "Ask your agriculture officer whether control is needed at your crop stage and which product is approved"
      ],
      "dont": [
        "Don't spray insecticides early in the season without advice; it kills spiders and other natural enemies"
      ]
    },
    {
      "slug": "rice-planthoppers",
      "name": "Rice Planthoppers (White-backed and Brown)",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny hoppers at the base of rice plants; patches turn yellow, then brown and dry (hopper burn).",
      "question": "When you tap the base of the plants, do many tiny insects jump or run?",
      "keywords": [
        "planthopper",
        "hopper burn",
        "white backed planthopper",
        "brown planthopper",
        "tela",
        "dhaan ka tela",
        "munji jal gayi",
        "dhaan sukh gaya",
        "sukay patches",
        "jhulsa",
        "hopper",
        "rice insects",
        "دھان کا تیلا",
        "تیلا",
        "سفید پشت والا تیلا",
        "بھورا تیلا",
        "پلانٹ ہاپر",
        "ہاپر برن",
        "دھان سوکھ گیا",
        "مونجی جل گئی",
        "گول ٹکڑیاں",
        "جھلساؤ"
      ],
      "chips": [
        "p_insects",
        "p_patches_dry",
        "p_yellowing",
        "p_sticky"
      ],
      "todo": [
        "Bend the plants a little and tap the base over the water; look for many hoppers on the stems",
        "Check the field every week, and more often if patches are drying",
        "Where your agriculture officer advises, draining the field for a few days can make the base of the crop less humid",
        "Contact your agriculture officer quickly if hoppers are many; they will advise if a spray is needed, which product is approved and how to reach the base of the plants"
      ],
      "dont": [
        "Don't spray insecticides early in the season or as a routine; this can make planthopper outbreaks worse",
        "Don't add more nitrogen while hoppers are increasing"
      ]
    },
    {
      "slug": "rice-zinc-deficiency-khaira",
      "name": "Zinc Deficiency in Rice (Khaira)",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Nutrient deficiency",
      "urgency": "",
      "zoonotic": false,
      "short": "2–4 weeks after transplanting, rice gets rusty-brown spotted leaves and stunted, uneven patches.",
      "question": "Did the rusty-brown, stunted patches appear within 2–4 weeks of transplanting, with no insects or fungus?",
      "keywords": [
        "khaira",
        "zinc deficiency",
        "zinc ki kami",
        "dhaan khaira",
        "munji bhoori",
        "patte bhoore",
        "zang",
        "rusty leaves",
        "stunted rice",
        "chhota paudha",
        "zink",
        "kallar",
        "خیرہ",
        "زنک کی کمی",
        "دھان کا خیرہ",
        "بھورے پتے",
        "زنگ جیسے دھبے",
        "رکے ہوئے پودے",
        "کلر",
        "کلراٹھی زمین",
        "مونجی بھوری",
        "دھان پیلا"
      ],
      "chips": [
        "p_brown_spots",
        "p_stunted",
        "p_small_leaves"
      ],
      "todo": [
        "Look at the pattern: khaira shows in patches soon after transplanting, without insects or fungal growth",
        "Ask your agriculture officer to confirm it, ideally with a soil or plant test",
        "Apply zinc fertiliser only in the form and amount your agriculture officer recommends",
        "Where advised, drain the field for a short time so the soil can breathe"
      ],
      "dont": [
        "Don't spray fungicides or insecticides for khaira; they will not help"
      ]
    },
    {
      "slug": "cotton-pink-bollworm",
      "name": "Pink Bollworm",
      "type": "plant",
      "hosts": [
        "cotton"
      ],
      "hostLabel": "Cotton",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Twisted 'rosette' flowers, small holes in green bolls, pink caterpillars inside and stained lint.",
      "question": "Are there twisted, half-closed flowers or small pink caterpillars inside green bolls?",
      "keywords": [
        "pink bollworm",
        "gulabi sundi",
        "kapas ki sundi",
        "tinda",
        "tinday mein sundi",
        "band phool",
        "rosette flower",
        "phutti",
        "boll damage",
        "pink worm",
        "pheromone trap",
        "kapas",
        "گلابی سنڈی",
        "کپاس کی سنڈی",
        "ٹینڈے میں سنڈی",
        "گلاب نما پھول",
        "بند پھول",
        "ٹینڈوں میں سوراخ",
        "داغدار روئی",
        "پھٹی",
        "فیرومون ٹریپ",
        "پی بی روپ"
      ],
      "chips": [
        "p_bored",
        "p_malformed",
        "p_caterpillars",
        "p_fruit_drop"
      ],
      "todo": [
        "Pick rosette flowers by hand and destroy them, for example by burying them deep away from the field",
        "Open a sample of green bolls each week to look for caterpillars and damage",
        "Use pheromone traps to watch moth numbers",
        "Ask your agriculture officer when to act and which methods (such as pheromone mating disruption) or products are approved"
      ],
      "dont": [
        "Don't store cotton sticks with unopened bolls near fields or homes into the next season",
        "Don't keep a ratoon or extended crop after the main pickings"
      ]
    },
    {
      "slug": "maize-fall-armyworm",
      "name": "Fall Armyworm",
      "type": "plant",
      "hosts": [
        "maize",
        "sugarcane",
        "rice",
        "cotton"
      ],
      "hostLabel": "Maize, Sorghum & Other Crops",
      "causeType": "Insect pest (invasive)",
      "urgency": "",
      "zoonotic": false,
      "short": "Ragged holes and papery 'windows' on maize leaves, with wet sawdust-like frass in the whorl.",
      "question": "Is there wet, sawdust-like frass in the whorl and a caterpillar with an upside-down Y on its head?",
      "keywords": [
        "fall armyworm",
        "FAW",
        "armyworm",
        "lashkari sundi",
        "makai ki sundi",
        "makki",
        "gobh mein sundi",
        "patton mein surakh",
        "sundi",
        "keera",
        "maize worm",
        "whorl damage",
        "chhalni patte",
        "sundi ka fazla",
        "burada",
        "فال آرمی ورم",
        "لشکری سنڈی",
        "مکئی کی سنڈی",
        "گوبھ میں سنڈی",
        "پتوں میں سوراخ",
        "مکئی کے پتے چھلنی",
        "سنڈی",
        "چھلی میں سوراخ",
        "امریکی سنڈی مکئی",
        "مکئی کا کیڑا"
      ],
      "chips": [
        "p_holes",
        "p_caterpillars",
        "p_bored",
        "p_dead_heart"
      ],
      "todo": [
        "Scout at least once a week: walk the field in a W pattern and count plants with fresh damage or frass",
        "In small plots, crush egg masses and pick caterpillars by hand",
        "In small plots, putting a little sand or ash into the whorl is a traditional option",
        "Contact your agriculture officer to confirm the pest and advise if a spray is needed, which product is approved and how to aim it into the whorl"
      ],
      "dont": [
        "Don't spray random mixtures of pesticides; it wastes money and kills natural enemies",
        "Don't plant new maize right next to an older infested crop"
      ]
    },
    {
      "slug": "maize-stem-borer",
      "name": "Maize Stem Borer",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize & Sorghum",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Rows of small shot holes on maize leaves, dried central shoot (dead heart) and tunnels in stems.",
      "question": "Are there neat rows of small shot holes on the leaves and tunnels inside the stem?",
      "keywords": [
        "stem borer",
        "maize borer",
        "makai ka borer",
        "tane ki sundi",
        "makki ki sundi",
        "dead heart",
        "gobh sukh gayi",
        "patton mein surakh",
        "shot holes",
        "sundi",
        "spotted borer",
        "تنے کی سنڈی",
        "مکئی کی سنڈی",
        "سوکھی گوبھ",
        "ڈیڈ ہارٹ",
        "پتوں میں سوراخ",
        "تنے میں سرنگ",
        "دھبے دار سنڈی",
        "مکئی",
        "جوار"
      ],
      "chips": [
        "p_holes",
        "p_dead_heart",
        "p_bored",
        "p_caterpillars"
      ],
      "todo": [
        "Check young plants for shot holes and dead hearts every week after emergence",
        "In small plots, pull out plants with dead hearts and destroy the caterpillars inside",
        "Ask your agriculture officer about early treatment in the whorl, since control is harder once caterpillars are inside the stem, and about which product is approved",
        "Where available, ask about releasing egg parasites such as Trichogramma wasps"
      ],
      "dont": [
        "Don't leave old maize stalks and stubble standing in the field until the next crop"
      ]
    },
    {
      "slug": "sugarcane-red-rot",
      "name": "Red Rot of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Upper leaves yellow and dry; split cane is red inside with white cross-bands and a sour smell.",
      "question": "When you split the cane lengthwise, is the inside red with white bands across it and a sour smell?",
      "keywords": [
        "red rot",
        "sugarcane red rot",
        "cane red inside",
        "split cane red",
        "sour smell cane",
        "ganna",
        "kamad",
        "ganna andar se lal",
        "lal rog",
        "rata rog",
        "ganna sookh raha",
        "patte peele ganna",
        "ganne ki bimari",
        "ganna lal",
        "andar se laal",
        "sharab ki boo",
        "khatti boo",
        "رتا روگ",
        "سرخ سڑن",
        "گنے کی بیماری",
        "گنا اندر سے لال",
        "کماد",
        "گنا سوکھنا",
        "گنے کے پتے پیلے",
        "کھٹی بو",
        "لال گنا",
        "سفید پٹیاں",
        "گنے کا روگ"
      ],
      "chips": [
        "p_wilting",
        "p_yellowing",
        "p_edge_drying",
        "p_brown_spots"
      ],
      "todo": [
        "Split a few drying canes lengthwise and look for red tissue with white cross-bands",
        "Dig out affected clumps with their roots and burn them, away from the field",
        "Make bunds or channels so water from the affected patch does not flow into healthy fields",
        "Do not take seed cane from this field",
        "Report it to your agriculture officer, who can confirm the disease and advise on a resistant variety for your area"
      ],
      "dont": [
        "Do not keep an infected crop as a ratoon",
        "Do not leave diseased canes and trash lying in the field after harvest"
      ]
    },
    {
      "slug": "sugarcane-whip-smut",
      "name": "Whip Smut of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "A long black whip, full of black powder, grows out of the top of the cane; plants look thin and grassy.",
      "question": "Is there a long black whip with black powder coming out of the top of the cane?",
      "keywords": [
        "whip smut",
        "smut",
        "black whip",
        "black powder sugarcane",
        "kangiyari",
        "kanguari",
        "kala chabuk",
        "ganne ki kangiyari",
        "ganna patla",
        "ganna ghaas jaisa",
        "kala sitta",
        "kamad",
        "کانگیاری",
        "گنے کی کانگیاری",
        "کالا چابک",
        "کالا پاؤڈر",
        "گنا پتلا",
        "گھاس جیسا گنا",
        "کماد کی بیماری",
        "کالی سٹی",
        "چابک نما",
        "گنے کی بیماری"
      ],
      "chips": [
        "p_black_heads",
        "p_small_leaves",
        "p_stunted"
      ],
      "todo": [
        "Walk the field regularly and look for black whips, especially in ratoon crops",
        "Before the whip's silvery skin breaks, cover it gently with a cloth or plastic bag, cut out the whole clump and burn it away from the field",
        "Keep doing this every week or two while new whips appear",
        "Do not use canes from this field as seed",
        "Tell your agriculture officer, who can advise on resistant varieties and whether to keep the ratoon"
      ],
      "dont": [
        "Do not shake or carry open whips through the field; this spreads the black spores",
        "Do not ratoon a field with many smutted clumps"
      ]
    },
    {
      "slug": "sugarcane-top-borer",
      "name": "Sugarcane Top Borer",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Rows of small holes in young leaves, red tunnel in the midrib, dried central shoot and bunchy top.",
      "question": "Are there rows of small holes in the young leaves and a red tunnel along the midrib?",
      "keywords": [
        "top borer",
        "sugarcane borer",
        "dead heart",
        "bunchy top",
        "shot holes",
        "white moth",
        "sundi",
        "gadwan",
        "gadoan",
        "choti ka gadwan",
        "ganne ki sundi",
        "gobh sookh gayi",
        "kamad keera",
        "چوٹی کا گڑواں",
        "گڑواں",
        "گنے کی سنڈی",
        "سوکھی گوبھ",
        "ڈیڈ ہارٹ",
        "پتوں میں سوراخ",
        "سفید پروانہ",
        "گنے کا کیڑا",
        "جھاڑو جیسی چوٹی",
        "بورر",
        "سنڈی"
      ],
      "chips": [
        "p_dead_heart",
        "p_holes",
        "p_bored",
        "p_caterpillars",
        "p_malformed"
      ],
      "todo": [
        "Check canes for shot holes, red midrib tunnels and dead hearts, and count how many canes are attacked",
        "Cut out dead hearts and attacked tops close to the ground, and destroy them so the caterpillar inside is killed",
        "Collect and destroy egg masses from the underside of top leaves",
        "Ask your agriculture department about Trichogramma (egg parasite) cards and pheromone traps",
        "If many canes are attacked, ask your agriculture officer whether a treatment is needed and which product is approved"
      ],
      "dont": []
    },
    {
      "slug": "sugarcane-pyrilla",
      "name": "Sugarcane Pyrilla (Leafhopper)",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Insect pest (sap-sucking)",
      "urgency": "",
      "zoonotic": false,
      "short": "Straw-coloured hoppers with a snout on leaf undersides; leaves turn yellow and black with sooty mould.",
      "question": "Are there straw-coloured jumping hoppers with a pointed snout on the underside of the leaves?",
      "keywords": [
        "pyrilla",
        "pirilla",
        "sugarcane leafhopper",
        "hopper",
        "sooty mould",
        "black leaves",
        "honeydew",
        "tela",
        "ganne ka tela",
        "kamad keera",
        "patte kale",
        "patte peele",
        "chipchipa",
        "پائریلا",
        "گنے کا تیلا",
        "تیلا",
        "پھدکنے والا کیڑا",
        "کالی پھپھوندی",
        "پتے کالے",
        "چپچپے پتے",
        "گنے کا کیڑا",
        "پتے پیلے",
        "رس چوسنے والا کیڑا",
        "کماد"
      ],
      "chips": [
        "p_insects",
        "p_sticky",
        "p_yellowing"
      ],
      "todo": [
        "Check the underside of leaves in several places and count hoppers per leaf",
        "Look for its natural enemy Epiricania melanoleuca: white woolly cocoons and small larvae stuck on the pyrilla bodies; if present, avoid spraying",
        "Ask your agriculture department about collecting Epiricania cocoons or egg masses from fields where they are common and releasing them in your field",
        "Remove and destroy dry lower leaves (detrashing)",
        "If numbers reach about 3 pyrilla per leaf and natural enemies are not present, ask your agriculture officer which treatment is approved"
      ],
      "dont": [
        "Do not spray as soon as you see a few pyrilla; first check for natural enemies",
        "Do not give extra or late nitrogen fertiliser during an attack"
      ]
    },
    {
      "slug": "potato-black-scurf",
      "name": "Black Scurf and Stem Canker of Potato",
      "type": "plant",
      "hosts": [
        "potato"
      ],
      "hostLabel": "Potato",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Hard black crusts like dirt stuck on potato skin that do not wash off; brown cankers on stems.",
      "question": "Do the black spots on the potato skin stay even after washing and rubbing?",
      "keywords": [
        "black scurf",
        "stem canker",
        "rhizoctonia",
        "black spots on potato",
        "aloo",
        "aloo par kale dhabbe",
        "aloo ki khaal kali",
        "aloo kharab",
        "kale nishan",
        "aloo ki bimari",
        "aloo ka beej",
        "aloo ke daane chhote",
        "آلو پر کالے دھبے",
        "بلیک سکرف",
        "کالا کھرنڈ",
        "آلو کی بیماری",
        "آلو کا چھلکا خراب",
        "آلو کا بیج",
        "کالے نشان",
        "تنے کا زخم",
        "آلو کے پودے کمزور",
        "ہوائی آلو"
      ],
      "chips": [
        "p_tuber_marks",
        "p_stunted",
        "p_curled",
        "p_yellowing"
      ],
      "todo": [
        "Wash a few tubers: if black crusts stay after washing, it is black scurf",
        "Dig up weak plants and look for brown cankers on stems and stolons",
        "Keep scurfy tubers separate and do not keep them for seed",
        "Ask your agriculture officer about approved seed-tuber treatment for the next crop"
      ],
      "dont": [
        "Do not plant seed tubers that have black scurf"
      ]
    },
    {
      "slug": "potato-common-scab",
      "name": "Common Scab of Potato",
      "type": "plant",
      "hosts": [
        "potato"
      ],
      "hostLabel": "Potato",
      "causeType": "Bacterial (soil Streptomyces)",
      "urgency": "",
      "zoonotic": false,
      "short": "Rough, brown, corky spots on potato skin: flat, raised like warts, or sunken pits.",
      "question": "Are the spots rough and corky, part of the skin itself (raised, flat or pitted), rather than black lumps on top?",
      "keywords": [
        "common scab",
        "potato scab",
        "rough skin",
        "corky spots",
        "pitted potato",
        "aloo",
        "aloo ki khaal khurdari",
        "aloo par daag",
        "aloo par chhale",
        "aloo kharab",
        "aloo ki bimari",
        "khurand",
        "آلو کا کھرنڈ",
        "سکیب",
        "آلو کا چھلکا کھردرا",
        "آلو پر داغ",
        "آلو پر گڑھے",
        "آلو پر مسے",
        "آلو کی بیماری",
        "خراب آلو",
        "کھرنڈ",
        "آلو کی چھال"
      ],
      "chips": [
        "p_tuber_marks"
      ],
      "todo": [
        "Check a few tubers at digging and note which fields have the most scab",
        "Sort and grade scabby tubers separately for sale; they are not a storage rot",
        "Do not keep scabby tubers for seed",
        "Plan to keep the soil moist during tuber formation in your next potato crop"
      ],
      "dont": []
    },
    {
      "slug": "tomato-leaf-curl-virus",
      "name": "Tomato Leaf Curl Virus Disease",
      "type": "plant",
      "hosts": [
        "tomato"
      ],
      "hostLabel": "Tomato",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Small, crumpled leaves curling upward with yellow edges; plants stunted and bushy, few fruits.",
      "question": "Are the young leaves small, curled upward with yellow edges, and are there whiteflies under the leaves?",
      "keywords": [
        "tomato leaf curl",
        "leaf curl virus",
        "TYLCV",
        "ToLCNDV",
        "whitefly",
        "curled leaves",
        "tamatar",
        "tamatar patta murr",
        "patta marorr",
        "patte mur gaye",
        "safed makhi",
        "tamatar ka paudha chhota",
        "virus",
        "پتہ مروڑ",
        "ٹماٹر کا پتہ مروڑ",
        "مڑے ہوئے پتے",
        "سفید مکھی",
        "ٹماٹر کا وائرس",
        "پتے سکڑ گئے",
        "ٹماٹر کا پودا چھوٹا",
        "پیلے کنارے",
        "پھول گرنا",
        "ٹماٹر کی بیماری"
      ],
      "chips": [
        "p_curled",
        "p_stunted",
        "p_yellowing",
        "p_whiteflies",
        "p_small_leaves",
        "p_fruit_drop"
      ],
      "todo": [
        "Look under the leaves for whiteflies and check how many plants show curling",
        "Pull out and bury or burn infected plants while there are only a few, putting a bag over them first so whiteflies do not fly off",
        "Put up yellow sticky traps to catch and monitor whiteflies",
        "Remove weeds in and around the field",
        "Ask your agriculture officer about whitefly control that is approved in your area"
      ],
      "dont": [
        "Do not plant new tomatoes next to an old infected crop",
        "Do not leave old tomato plants standing after the last picking"
      ]
    },
    {
      "slug": "tomato-blossom-end-rot",
      "name": "Blossom End Rot",
      "type": "plant",
      "hosts": [
        "tomato",
        "chili",
        "brinjal",
        "cucurbits"
      ],
      "hostLabel": "Tomato, Chilli, Brinjal & Gourds",
      "causeType": "Calcium disorder (not a disease)",
      "urgency": "",
      "zoonotic": false,
      "short": "A dark, sunken, leathery patch at the bottom (flower end) of tomato, chilli or gourd fruits.",
      "question": "Is the dark sunken patch only at the bottom (flower end) of the fruit?",
      "keywords": [
        "blossom end rot",
        "calcium deficiency",
        "black bottom tomato",
        "tomato rot bottom",
        "tamatar neeche se kala",
        "tamatar sar raha",
        "mirch neeche se kharab",
        "calcium ki kami",
        "phal sarna",
        "tamatar ka daagh",
        "paani ki kami",
        "ٹماٹر نیچے سے کالا",
        "ٹماٹر کی سڑن",
        "کیلشیم کی کمی",
        "پھل کا نچلا سرا کالا",
        "مرچ نیچے سے خراب",
        "بلاسم اینڈ راٹ",
        "پھل سڑنا",
        "ٹماٹر پر کالا داغ",
        "پانی کی کمی",
        "کدو کا سرا سکڑنا"
      ],
      "chips": [
        "p_fruit_spots",
        "p_rot"
      ],
      "todo": [
        "Pick off affected fruits; they will not recover and waste the plant's energy",
        "Water regularly so the soil stays evenly moist, not soaked and then dry",
        "Mulch around plants with straw or dry grass to keep moisture in",
        "Stop giving extra nitrogen fertiliser for now",
        "Avoid hoeing close to the plants"
      ],
      "dont": [
        "Do not spray fungicides or insecticides for this problem; they will not help"
      ]
    },
    {
      "slug": "onion-purple-blotch",
      "name": "Purple Blotch and Stemphylium Blight of Onion",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion & Garlic",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Oval purple-brown spots with rings and yellow edges on onion leaves; leaves bend and dry.",
      "question": "Are there oval purple or brown spots with rings and a yellow border on the leaves?",
      "keywords": [
        "purple blotch",
        "onion leaf spot",
        "stemphylium",
        "purple spots onion",
        "onion leaves drying",
        "pyaz",
        "piaz",
        "pyaz ke patte jamni dhabbe",
        "pyaz patte sookh",
        "lehsan",
        "pyaz ki bimari",
        "jamni daagh",
        "پیاز کا جامنی دھبہ",
        "جامنی دھبے",
        "پیاز کے پتے سوکھنا",
        "پیاز کی بیماری",
        "لہسن کی بیماری",
        "پرپل بلاچ",
        "پیاز کے پتوں پر دھبے",
        "بھورے دھبے",
        "پتے جھک جانا",
        "پیاز کا جھلساؤ"
      ],
      "chips": [
        "p_target_spots",
        "p_brown_spots",
        "p_edge_drying",
        "p_yellowing"
      ],
      "todo": [
        "Check older leaves for oval purple spots with rings, and note how fast they are spreading",
        "Check for thrips inside the leaf folds and manage them, as thrips damage helps this disease",
        "Avoid irrigating in the evening so leaves do not stay wet all night",
        "Contact your agriculture officer early; they can advise if a fungicide spray is needed and which product is approved"
      ],
      "dont": [
        "Do not give extra nitrogen fertiliser while the disease is active"
      ]
    },
    {
      "slug": "onion-thrips",
      "name": "Onion Thrips",
      "type": "plant",
      "hosts": [
        "onion",
        "cotton",
        "cabbage"
      ],
      "hostLabel": "Onion, Garlic, Cotton & Cabbage",
      "causeType": "Insect pest (rasping-sucking)",
      "urgency": "",
      "zoonotic": false,
      "short": "Silvery-white streaks on onion leaves with tiny yellow insects hiding in the leaf folds.",
      "question": "When you pull the leaves apart, do you see tiny slender yellowish insects in the folds, with silvery streaks on the leaves?",
      "keywords": [
        "onion thrips",
        "thrips",
        "silver leaves",
        "silvery streaks",
        "pyaz",
        "pyaz ke patte safed",
        "pyaz ka keera",
        "thrips cotton",
        "kapas thrips",
        "chandi jaise patte",
        "lehsan keera",
        "choti joon",
        "تھرپس",
        "پیاز کی تھرپس",
        "چاندی جیسے پتے",
        "پتوں پر سفید لکیریں",
        "پیاز کا کیڑا",
        "لہسن کا کیڑا",
        "کپاس کی تھرپس",
        "پیاز کے پتے سفید",
        "ننھے کیڑے",
        "رس چوسنے والا کیڑا"
      ],
      "chips": [
        "p_silvery",
        "p_insects",
        "p_edge_drying",
        "p_curled"
      ],
      "todo": [
        "Pull apart the leaves of several plants in different parts of the field and look for thrips in the folds near the neck",
        "Put up yellow or white sticky traps to monitor them",
        "Keep the field watered on time; avoid drought stress",
        "Remove weeds around the field",
        "If thrips are many and damage is spreading, ask your agriculture officer which treatment is approved"
      ],
      "dont": []
    },
    {
      "slug": "chilli-leaf-curl",
      "name": "Chilli Leaf Curl Virus",
      "type": "plant",
      "hosts": [
        "chili"
      ],
      "hostLabel": "Chilli",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Chilli leaves curl upward and pucker, plants stay small and bushy, and flowers drop.",
      "question": "Are the leaves curling upward with thick veins, and do you see tiny white flies under the leaves?",
      "keywords": [
        "chilli leaf curl",
        "leaf curl",
        "curl",
        "virus",
        "whitefly",
        "mirch",
        "mirchi",
        "patta marod",
        "patte murna",
        "murda",
        "safed makhi",
        "chhota pauda",
        "phool girna",
        "پتہ مروڑ",
        "مرچ کا پتہ مروڑ",
        "مُرڑا",
        "پتے مڑنا",
        "پتے سکڑنا",
        "سفید مکھی",
        "مرچ کا وائرس",
        "پودا چھوٹا رہ جانا",
        "پھول گرنا",
        "مرچ کے پتے پیالہ نما",
        "مرچ"
      ],
      "chips": [
        "p_curled",
        "p_small_leaves",
        "p_stunted",
        "p_whiteflies",
        "p_fruit_drop"
      ],
      "todo": [
        "Turn leaves over and look for tiny white flies; also check young leaves with a hand lens for thrips and mites",
        "Pull out plants with leaf curl as soon as you see them, put them in a bag and burn or bury them away from the field",
        "Hang yellow sticky traps to watch and reduce whitefly numbers",
        "Remove weeds in and around the field",
        "Ask your agriculture officer whether whitefly control is needed and which approved product to use"
      ],
      "dont": [
        "Don't leave pulled-out sick plants lying in or near the field",
        "Don't spray again and again without checking whether the cause is virus, thrips or mites"
      ]
    },
    {
      "slug": "chilli-anthracnose-dieback",
      "name": "Chilli Anthracnose (Fruit Rot) & Die-back",
      "type": "plant",
      "hosts": [
        "chili"
      ],
      "hostLabel": "Chilli",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Sunken dark spots with rings on ripe chillies, and branches drying from the tip downward.",
      "question": "Are there sunken, round spots with dark rings on the ripe fruit?",
      "keywords": [
        "anthracnose",
        "fruit rot",
        "die back",
        "dieback",
        "chilli rot",
        "black spots",
        "mirch",
        "lal mirch",
        "phal galna",
        "phal sarna",
        "tehni sookhna",
        "shakh sookhna",
        "kale dhabbe",
        "اینتھراکنوز",
        "مرچ کا گلنا",
        "پھل گلنا",
        "لال مرچ کے دھبے",
        "کالے دھبے",
        "ڈائی بیک",
        "شاخیں سوکھنا",
        "ٹہنیاں سوکھنا",
        "مرچ سڑنا",
        "مرچ کا پھل گرنا",
        "مرچ"
      ],
      "chips": [
        "p_fruit_spots",
        "p_rot",
        "p_dieback",
        "p_brown_spots",
        "p_fruit_drop"
      ],
      "todo": [
        "Pick off rotten fruits and cut out dried twigs a little below the dead part; burn or bury them away from the field",
        "Harvest ripe fruits on time; don't leave them hanging on the plants",
        "Avoid watering over the plants, and avoid field work while plants are wet",
        "Ask your agriculture officer whether a fungicide spray is needed and which product is approved"
      ],
      "dont": [
        "Don't keep seed from spotted or rotten fruits",
        "Don't leave infected fruits and branches in the field after harvest"
      ]
    },
    {
      "slug": "chilli-phytophthora-blight",
      "name": "Phytophthora Blight & Root Rot (Chilli Wilt)",
      "type": "plant",
      "hosts": [
        "chili",
        "cucurbits"
      ],
      "hostLabel": "Chilli, Gourds & Cucumbers",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Chilli plants wilt suddenly and die, with a dark, soft rot on the stem at soil level.",
      "question": "Is there a dark, soft rot on the stem at soil level, with plants dying in the wet parts of the field?",
      "keywords": [
        "wilt",
        "wilting",
        "phytophthora",
        "root rot",
        "stem rot",
        "collar rot",
        "blight",
        "mirch murjhana",
        "pauda sookhna",
        "jar galna",
        "tana galna",
        "pani khara",
        "kaddu galna",
        "مرچ کا مرجھاؤ",
        "پودا مرجھانا",
        "پودا سوکھنا",
        "جڑ گلنا",
        "تنا گلنا",
        "فائٹوفتھورا",
        "کھڑا پانی",
        "مرچ کے پودے مرنا",
        "کدو گلنا",
        "جھلساؤ",
        "مرچ"
      ],
      "chips": [
        "p_wilting",
        "p_dark_wet",
        "p_rot",
        "p_patches_dry"
      ],
      "todo": [
        "Pull out wilted plants with their roots and the soil around them, bag them and destroy them away from the field",
        "Stop over-watering and let the field drain",
        "Don't let irrigation water flow from the sick patch to healthy rows",
        "Wash tools and shoes after working in the sick patch",
        "Ask your agriculture officer to confirm the cause and advise whether any approved treatment is useful"
      ],
      "dont": [
        "Don't throw rotten plants or fruits in the field or in water channels",
        "Don't give heavy flood irrigation while plants are wilting"
      ]
    },
    {
      "slug": "chilli-thrips",
      "name": "Chilli Thrips",
      "type": "plant",
      "hosts": [
        "chili",
        "mango",
        "cotton"
      ],
      "hostLabel": "Chilli, Mango & Cotton",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "New chilli leaves curl upward with silvery or brown streaks underneath, and buds drop.",
      "question": "When you tap a young shoot over white paper, do tiny yellowish insects fall and move, and are the leaves curled upward?",
      "keywords": [
        "thrips",
        "chilli thrips",
        "silvering",
        "upward curl",
        "murda",
        "mirch",
        "keera",
        "patte upar murna",
        "chandi rang",
        "rus choosne wala keera",
        "phool girna",
        "kalian girna",
        "تھرپس",
        "مرچ کا تھرپس",
        "مُرڑا",
        "پتے اوپر مڑنا",
        "چاندی جیسی لکیریں",
        "رس چوسنے والا کیڑا",
        "کلیاں گرنا",
        "پھول گرنا",
        "مرچ کے پتے سکڑنا",
        "مرچ"
      ],
      "chips": [
        "p_insects",
        "p_silvery",
        "p_curled",
        "p_fruit_drop",
        "p_stunted"
      ],
      "todo": [
        "Check five young top leaves on several plants, or tap shoots over white paper to count thrips",
        "Hang blue sticky traps to watch thrips numbers",
        "Sprinkle water over nursery seedlings to slow thrips build-up",
        "Neem-based options can help when numbers are low",
        "Ask your agriculture officer before using any insecticide and use only approved products"
      ],
      "dont": [
        "Don't spray before checking: first confirm thrips are present, because mite and virus curling need different action"
      ]
    },
    {
      "slug": "citrus-canker",
      "name": "Citrus Canker",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Lemon, Grapefruit)",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Raised, corky brown spots with yellow halos on citrus leaves, twigs and fruit.",
      "question": "Are the spots raised and corky, seen on both sides of the leaf, with a yellow ring around them?",
      "keywords": [
        "canker",
        "citrus canker",
        "kinnow",
        "kinno",
        "lemon",
        "nimbu",
        "grapefruit",
        "chakotra",
        "corky spots",
        "kanker",
        "khurdre dhabbe",
        "phal par daagh",
        "patton par dhabbe",
        "کینکر",
        "سٹرس کینکر",
        "کینو کے دھبے",
        "لیموں کے دھبے",
        "کھردرے دھبے",
        "پھل پر داغ",
        "پتوں پر دھبے",
        "چکوترا",
        "گریپ فروٹ",
        "کینو",
        "مالٹا"
      ],
      "chips": [
        "p_brown_spots",
        "p_fruit_spots",
        "p_fruit_drop",
        "p_dieback"
      ],
      "todo": [
        "Prune out badly spotted twigs in dry weather; collect and burn fallen spotted leaves and twigs",
        "Clean pruning tools before moving to the next tree",
        "Control citrus leafminer on young flush, because its tunnels help canker enter",
        "Ask your agriculture officer about a protective copper-based spray and the right timing for your area"
      ],
      "dont": [
        "Don't prune or work in the orchard while trees are wet",
        "Don't take plants or budwood from orchards or nurseries with canker"
      ]
    },
    {
      "slug": "citrus-greening-hlb",
      "name": "Citrus Greening (Huanglongbing, HLB)",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "All Citrus (Kinnow, Mosambi, Lemon)",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Blotchy yellow-green leaves that differ on each side of the midrib; small, lopsided, bitter fruit.",
      "question": "Is the yellow-green mottle different on the two sides of the leaf's midrib?",
      "keywords": [
        "greening",
        "citrus greening",
        "HLB",
        "huanglongbing",
        "kinnow",
        "kinno",
        "peela patta",
        "yellow shoot",
        "teda phal",
        "chhota phal",
        "kadwa ras",
        "phal hara rehna",
        "psylla",
        "گریننگ",
        "سٹرس گریننگ",
        "کینو کی گریننگ",
        "پیلے پتے",
        "پیلی شاخ",
        "چھوٹا پھل",
        "ٹیڑھا پھل",
        "کڑوا رس",
        "پھل ہرا رہنا",
        "سِلا",
        "کینو"
      ],
      "chips": [
        "p_mosaic",
        "p_yellowing",
        "p_small_leaves",
        "p_dieback",
        "p_fruit_drop"
      ],
      "todo": [
        "Do the pen test: on a mottled leaf, draw a circle on each side of the midrib; if the two sides look different, suspect greening",
        "Check new flush for psyllids and their yellow-orange young",
        "Mark suspected trees and ask your agriculture department or citrus institute to test them",
        "If greening is confirmed, remove infected trees as your agriculture officer advises, so they do not keep feeding psyllids",
        "Keep the other trees well fed and watered; this helps them cope but does not cure greening"
      ],
      "dont": [
        "Don't take budwood or make new plants from suspected trees",
        "Don't assume it is only zinc deficiency; fertiliser will not cure greening"
      ]
    },
    {
      "slug": "citrus-psyllid",
      "name": "Asian Citrus Psyllid",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Mosambi, Lemon)",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny brown insects sitting tail-up on new citrus shoots; yellow-orange young with white waxy threads.",
      "question": "Are there tiny brown insects sitting head-down and tail-up on the new citrus shoots?",
      "keywords": [
        "psyllid",
        "citrus psyllid",
        "psylla",
        "silla",
        "sila",
        "keera",
        "nayi kopal",
        "nai phoot",
        "kinnow",
        "kinno",
        "sticky",
        "kali phaphoondi",
        "greening",
        "سِلا",
        "سٹرس سِلا",
        "کینو کا کیڑا",
        "نئی پھوٹ پر کیڑے",
        "چپچپے پتے",
        "کالی پھپھوندی",
        "رس چوسنے والا کیڑا",
        "گریننگ",
        "کینو",
        "کونپلیں"
      ],
      "chips": [
        "p_insects",
        "p_sticky",
        "p_malformed",
        "p_curled"
      ],
      "todo": [
        "Check new flush every one to two weeks in spring and autumn; look for eggs and young with a hand lens",
        "Tap shoots over a white board or paper to see adults, and use yellow sticky traps to know when they arrive",
        "Ask your agriculture officer when to treat and which approved product to use, especially during flush",
        "Remove curry leaf and other Murraya plants near the orchard"
      ],
      "dont": [
        "Don't bring citrus or curry leaf plants from unknown nurseries"
      ]
    },
    {
      "slug": "citrus-leafminer",
      "name": "Citrus Leafminer",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (nursery plants & young flush)",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Silvery, winding tunnels inside young citrus leaves; leaves curl and their edges roll.",
      "question": "Are there silvery, winding tunnels inside the young leaves?",
      "keywords": [
        "leaf miner",
        "leafminer",
        "citrus leafminer",
        "surang",
        "patte mein surang",
        "chandi lakeer",
        "silvery lines",
        "kinnow",
        "nursery",
        "patta murna",
        "sundi",
        "لیف مائنر",
        "سٹرس لیف مائنر",
        "پتے میں سرنگ",
        "سرنگیں",
        "چاندی جیسی لکیریں",
        "پتے مڑنا",
        "کینو کی نرسری",
        "سنڈی",
        "کینو",
        "نئی پھوٹ"
      ],
      "chips": [
        "p_tunnels",
        "p_curled",
        "p_stunted"
      ],
      "todo": [
        "Check new flush on young trees and nursery plants for fresh tunnels",
        "Remove water shoots and suckers",
        "On mature trees, spraying is usually not needed",
        "For nurseries and young trees, ask your agriculture officer whether and when to spray an approved product; pheromone traps help with timing"
      ],
      "dont": []
    },
    {
      "slug": "citrus-phytophthora-gummosis",
      "name": "Phytophthora Gummosis, Foot Rot & Root Rot of Citrus",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Mosambi, Lemon)",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Gum oozing from cracked bark near the trunk base; bark dies and the tree turns yellow and thin.",
      "question": "Is gum oozing from cracked, dark bark near the base of the trunk?",
      "keywords": [
        "gummosis",
        "gum",
        "foot rot",
        "root rot",
        "collar rot",
        "phytophthora",
        "gond",
        "gond nikalna",
        "chhal phatna",
        "tana galna",
        "jar galna",
        "kinnow sookhna",
        "pani khara",
        "گوند نکلنا",
        "گموسس",
        "تنے سے گوند",
        "چھال پھٹنا",
        "تنا گلنا",
        "جڑیں گلنا",
        "فائٹوفتھورا",
        "کینو کا درخت سوکھنا",
        "کھڑا پانی",
        "جٹی کھٹی",
        "کینو"
      ],
      "chips": [
        "p_gum",
        "p_yellowing",
        "p_dieback",
        "p_rot"
      ],
      "todo": [
        "Check the lower trunk and crown of every tree for gum",
        "Change irrigation so water does not touch the trunk; use a double-ring basin that keeps a dry ring around the trunk",
        "Pull soil away from the trunk base so the bud union is above the soil and can dry",
        "Improve drainage in waterlogged parts of the orchard",
        "Ask your agriculture officer about scraping out the diseased bark, treating the wound and using an approved fungicide"
      ],
      "dont": [
        "Don't let irrigation water stand against the trunk",
        "Don't injure the trunk or roots with tools while hoeing or weeding"
      ]
    },
    {
      "slug": "mango-malformation",
      "name": "Mango Malformation (Guchha)",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Flower clusters or shoot tips become thick, short and bunched, and set no fruit.",
      "question": "Are the mango flower clusters short, thick and tightly bunched instead of long and open?",
      "keywords": [
        "mango malformation",
        "guchha",
        "gucha",
        "bunchy top",
        "bunched flowers",
        "aam ka guchha",
        "bour guchha",
        "bor",
        "black bunches",
        "no fruit set",
        "aam ki bimari",
        "deformed flowers",
        "آم کا گچھا",
        "گچھا",
        "بور کا گچھا",
        "گچھا مرض",
        "مالفارمیشن",
        "بور موٹا ہونا",
        "کالے گچھے",
        "پھل نہیں لگا",
        "آم کی بیماری",
        "گوبھی جیسا بور"
      ],
      "chips": [
        "p_malformed",
        "p_small_leaves",
        "p_fruit_drop"
      ],
      "todo": [
        "Cut off malformed flower clusters and shoots together with a short piece of healthy twig as soon as you see them",
        "Collect all cut material and burn or bury it away from the orchard",
        "Clean pruning tools between trees",
        "Mark affected trees so you do not take grafting wood from them",
        "Ask your agriculture officer whether a spray for the fungus or bud mites is advised in your area, and which product is approved"
      ],
      "dont": [
        "Do not leave cut or dried bunches lying under the tree",
        "Do not buy plants or grafting wood from nurseries with guchha in their mother trees"
      ]
    },
    {
      "slug": "mango-quick-decline",
      "name": "Mango Sudden Death (Quick Decline)",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Gum oozes from the trunk, bark splits, and the tree wilts and dies with dry leaves still hanging on.",
      "question": "Is gum oozing from the mango trunk with small holes in the bark while the leaves wilt?",
      "keywords": [
        "mango sudden death",
        "quick decline",
        "gummosis",
        "gond",
        "aam ka sukna",
        "aam ka darakht sookh gaya",
        "bark beetle",
        "tree dying",
        "gum on trunk",
        "chaal phatna",
        "aam ki bimari",
        "sudden death",
        "آم کا اچانک سوکھنا",
        "سڈن ڈیتھ",
        "آم کا سوکا",
        "گوند نکلنا",
        "تنے سے گوند",
        "چھال پھٹنا",
        "آم کا درخت سوکھ گیا",
        "چھال کی بھونڈی",
        "درخت مرجھانا",
        "آم کی بیماری"
      ],
      "chips": [
        "p_gum",
        "p_wilting",
        "p_dieback"
      ],
      "todo": [
        "Check every tree for gum on the trunk and bark beetle holes, especially near the base",
        "Report suspected trees to your agriculture officer or the mango research institute so they can confirm the cause",
        "Remove dead and dying trees with their roots and burn the wood on the spot; do not keep it for firewood elsewhere",
        "Avoid giving water from a sick tree's basin to healthy trees; water each tree separately if possible",
        "For trees with early gum spots, ask the agriculture officer whether scraping the wound and covering it with an approved protective paste is advised"
      ],
      "dont": [
        "Do not move wood or branches from sick trees to other orchards or markets",
        "Do not plough deep near the trunk or flood the orchard for long periods",
        "Do not plant a new mango tree in the same pit without advice"
      ]
    },
    {
      "slug": "mango-anthracnose",
      "name": "Mango Anthracnose",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Black spots on young leaves, flowers and fruit; twig tips dry and ripe fruit gets black sunken patches.",
      "question": "Are there black spots on the mango flowers, young leaves or fruit, and do they get worse after rain?",
      "keywords": [
        "mango anthracnose",
        "black spots",
        "kaale dhabbe",
        "fruit rot",
        "aam par kaale dagh",
        "blossom blight",
        "bour kaala",
        "dieback",
        "tehni sookhna",
        "aam ki bimari",
        "ripe mango black patches",
        "اینتھراکنوز",
        "آم کے کالے دھبے",
        "پھل پر کالے داغ",
        "بور کالا ہونا",
        "پھل گلنا",
        "ٹہنیاں سوکھنا",
        "پکے آم پر داغ",
        "آم کی بیماری",
        "پھول جھڑنا"
      ],
      "chips": [
        "p_fruit_spots",
        "p_brown_spots",
        "p_dieback",
        "p_fruit_drop"
      ],
      "todo": [
        "Cut out dried twigs and branches with black spots, and remove mummified fruits",
        "Collect fallen leaves, twigs and rotten fruit and burn or bury them",
        "Ask your agriculture officer whether a fungicide is needed at flowering and fruit set, and which product is approved",
        "Handle fruit gently at picking and keep it clean and cool to slow rot during ripening"
      ],
      "dont": [
        "Do not leave pruned twigs and rotten fruit lying in the orchard"
      ]
    },
    {
      "slug": "mango-powdery-mildew",
      "name": "Powdery Mildew of Mango",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "White powder on mango flower clusters, young leaves and tiny fruits, which then drop.",
      "question": "Is there a white powder on the mango flower clusters that rubs off with your finger?",
      "keywords": [
        "mango powdery mildew",
        "white powder",
        "safed powder",
        "safed phaphundi",
        "bour par safedi",
        "flower drop",
        "phal girna",
        "aam ka bour girna",
        "chitta",
        "mildew",
        "aam ki bimari",
        "سفوفی پھپھوندی",
        "پاؤڈری ملڈیو",
        "سفید پاؤڈر",
        "بور پر سفیدی",
        "آم کا بور گرنا",
        "پھل گرنا",
        "سفید پھپھوندی",
        "بور سوکھنا",
        "آم کی بیماری"
      ],
      "chips": [
        "p_white_powder",
        "p_fruit_drop",
        "p_curled"
      ],
      "todo": [
        "Check flower clusters every few days from the start of flowering",
        "Cut off and destroy badly infected clusters and leaves early, when only a few trees are affected",
        "Contact your agriculture officer at the first sign of powder; they can advise if a spray is needed, the right time and which product is approved",
        "Avoid spraying during full bloom unless the agriculture officer advises it"
      ],
      "dont": [
        "Do not wait until the flowers have fallen; protection must start early in flowering"
      ]
    },
    {
      "slug": "mango-hopper",
      "name": "Mango Hoppers",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Small wedge-shaped insects jump on the flowers; flowers dry and drop and leaves turn sticky and black.",
      "question": "When you shake a flowering branch, do many small insects jump or fly out and are the leaves sticky?",
      "keywords": [
        "mango hopper",
        "tela",
        "aam ka tela",
        "hopper",
        "jumping insects",
        "sticky leaves",
        "chipchipa",
        "kali ulli",
        "sooty mould",
        "bour girna",
        "flower drop",
        "keera",
        "آم کا تیلا",
        "تیلا",
        "ہاپر",
        "اچھلنے والے کیڑے",
        "چپچپے پتے",
        "کالی اُلی",
        "بور گرنا",
        "پھول جھڑنا",
        "آم کے کیڑے",
        "رس چوسنے والا کیڑا"
      ],
      "chips": [
        "p_insects",
        "p_sticky",
        "p_fruit_drop"
      ],
      "todo": [
        "From the start of flowering, shake a few branches over a cloth or look closely at flower clusters to check for hoppers",
        "Contact your agriculture officer if many hoppers are seen on the flower clusters; they can advise on the right time to spray and which product is approved",
        "Neem-based sprays can help when numbers are still low",
        "If spraying is needed, avoid the hours when bees are visiting the flowers"
      ],
      "dont": [
        "Do not spray at full bloom unless advised, as it can harm the bees that pollinate mango",
        "Do not wait until flowers have dried; damage happens early in flowering"
      ]
    },
    {
      "slug": "mango-mealybug",
      "name": "Mango Mealybug (Gadhiri)",
      "type": "plant",
      "hosts": [
        "mango",
        "citrus",
        "guava"
      ],
      "hostLabel": "Mango (also Citrus & Guava)",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Flat white mealy insects crawl up the trunk in winter and cluster on shoots and flowers, making them sticky.",
      "question": "Do you see flat, white, mealy insects crawling up the trunk or clustered on the shoots?",
      "keywords": [
        "mango mealybug",
        "gadhiri",
        "gadheri",
        "gidheri",
        "mealybug",
        "white insects",
        "safed keera",
        "trunk band",
        "chipchipa",
        "kali ulli",
        "crawlers",
        "aam ka keera",
        "گدھیڑی",
        "آم کی گدھیڑی",
        "مِیلی بگ",
        "سفید کیڑے",
        "تنے پر کیڑے",
        "پلاسٹک کی پٹی",
        "چپچپے پتے",
        "کالی اُلی",
        "بور سوکھنا",
        "آم کے کیڑے"
      ],
      "chips": [
        "p_mealy",
        "p_sticky",
        "p_fruit_drop"
      ],
      "todo": [
        "In early winter (around December), before crawlers climb, tie a smooth plastic sheet or sticky band around the trunk about a metre above the ground and keep it clean and sticky",
        "Every few days, scrape crawlers collected below the band into a container and destroy them",
        "Prune branches that touch the ground or neighbouring trees so crawlers cannot bypass the band",
        "If many mealybugs are already on the tree, ask your agriculture officer whether a spray is needed and which product is approved"
      ],
      "dont": [
        "Do not leave weeds and debris under the tree, where eggs and crawlers shelter",
        "Do not let bands become dusty or covered, or crawlers will cross over them"
      ]
    },
    {
      "slug": "guava-wilt",
      "name": "Guava Wilt (Decline)",
      "type": "plant",
      "hosts": [
        "guava"
      ],
      "hostLabel": "Guava",
      "causeType": "Fungal (disease complex)",
      "urgency": "",
      "zoonotic": false,
      "short": "Guava leaves turn pale yellow and droop, branches go bare and the tree dries, part by part or all at once.",
      "question": "Are the guava leaves turning pale yellow and drooping, with brown wood under the bark of the stem or roots?",
      "keywords": [
        "guava wilt",
        "guava decline",
        "amrood ka sukna",
        "amrood ka darakht sookh gaya",
        "darakht sookh raha",
        "amrood sookh raha",
        "wilting",
        "murjhana",
        "patte peele",
        "yellow leaves",
        "tree dying",
        "jarr galna",
        "amrood ki bimari",
        "امرود کا سوکا",
        "امرود کا مرجھاؤ",
        "امرود کا درخت سوکھ گیا",
        "درخت سوکھ رہا ہے",
        "پتے پیلے",
        "مرجھانا",
        "جڑ گلنا",
        "امرود کی بیماری",
        "درخت مرنا",
        "شاخیں ننگی"
      ],
      "chips": [
        "p_wilting",
        "p_yellowing",
        "p_dieback"
      ],
      "todo": [
        "Uproot fully wilted trees with as many roots as possible and burn them; do not leave them standing",
        "Dig a trench around a sick tree to stop water and soil moving to healthy trees",
        "Improve drainage so water does not stand around trunks",
        "Ask your agriculture officer or a plant protection lab to check roots and soil for fungus and nematodes, because the cause can differ",
        "Add well-rotted farmyard manure to keep healthy trees strong"
      ],
      "dont": [
        "Do not plant a new guava plant in the same pit straight away",
        "Do not let irrigation water flow from sick trees to healthy ones"
      ]
    },
    {
      "slug": "chickpea-wilt",
      "name": "Chickpea Wilt (Ukhera)",
      "type": "plant",
      "hosts": [
        "chickpea"
      ],
      "hostLabel": "Chickpea (Gram)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Gram plants droop, turn dull yellow and dry in patches; split roots show dark brown inside.",
      "question": "When you split the root of a wilted gram plant lengthwise, is the inside dark brown or black?",
      "keywords": [
        "chickpea wilt",
        "ukhera",
        "ukheda",
        "chana ukhera",
        "gram wilt",
        "chana sookh gaya",
        "murjhana",
        "chane ki bimari",
        "wilting",
        "yellow plants",
        "chana",
        "fusarium",
        "اکھیڑا",
        "چنے کا اکھیڑا",
        "چنا سوکھ گیا",
        "مرجھاؤ",
        "پودے مرجھانا",
        "چنے کی بیماری",
        "پیلے پودے",
        "جڑ اندر سے کالی",
        "چنا"
      ],
      "chips": [
        "p_wilting",
        "p_yellowing",
        "p_patches_dry"
      ],
      "todo": [
        "Pull up a few wilted plants and split the root and lower stem to check for dark brown colour inside",
        "Mark the patches where wilt appears so you can plan the next sowing",
        "Pull out and burn wilted plants; do not leave them in the field",
        "Ask your agriculture officer for wilt-resistant varieties and for an approved seed treatment for the next crop",
        "If a light irrigation is possible during dry, hot spells, ask your agriculture officer whether it is suitable"
      ],
      "dont": [
        "Do not keep seed from a field with wilt for sowing",
        "Do not grow chickpea again in the same badly affected field next season"
      ]
    },
    {
      "slug": "chickpea-ascochyta-blight",
      "name": "Chickpea Blight (Ascochyta Blight)",
      "type": "plant",
      "hosts": [
        "chickpea"
      ],
      "hostLabel": "Chickpea (Gram)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown spots with dark rings on gram leaves, stems and pods; stems break and plants dry in patches.",
      "question": "Do the gram leaves, stems or pods have brown spots with dark rings, and do stems break at the spots?",
      "keywords": [
        "ascochyta blight",
        "chickpea blight",
        "jhulsao",
        "chane ka jhulsao",
        "gram blight",
        "brown spots",
        "bhoore dhabbe",
        "stem breaking",
        "tana tootna",
        "chana jal gaya",
        "chane ki bimari",
        "rings",
        "جھلساؤ",
        "چنے کا جھلساؤ",
        "بھورے دھبے",
        "چھلوں والے دھبے",
        "تنا ٹوٹنا",
        "چنا جل گیا",
        "چنے کی بیماری",
        "پھلیوں پر دھبے",
        "بلائٹ"
      ],
      "chips": [
        "p_brown_spots",
        "p_target_spots",
        "p_wilting",
        "p_patches_dry"
      ],
      "todo": [
        "Walk the field after rain and look for first patches with brown, ringed spots and broken stems",
        "Pull and burn infected plants in early small patches to slow the spread",
        "Contact your agriculture officer quickly; they can confirm the disease and advise if a fungicide spray is needed and which product is approved",
        "Mark the field and do not keep its seed for next season"
      ],
      "dont": [
        "Do not use seed from an infected crop",
        "Do not leave infected stubble on the soil surface after harvest"
      ]
    },
    {
      "slug": "okra-yellow-vein-mosaic",
      "name": "Okra Yellow Vein Mosaic",
      "type": "plant",
      "hosts": [
        "okra"
      ],
      "hostLabel": "Okra (Bhindi)",
      "causeType": "Viral (spread by whitefly)",
      "urgency": "",
      "zoonotic": false,
      "short": "Okra leaf veins turn bright yellow in a net pattern; plants stay small and pods turn pale and hard.",
      "question": "Are the veins of the young okra leaves bright yellow, making a yellow net on a green leaf?",
      "keywords": [
        "okra yellow vein mosaic",
        "bhindi peela virus",
        "bhindi ka virus",
        "yellow veins",
        "peeli nasein",
        "patta peela",
        "whitefly",
        "safed makhi",
        "mosaic",
        "bhindi ki bimari",
        "yellow leaves okra",
        "YVMV",
        "peeli ragein",
        "ragein peeli",
        "bhindi peeli",
        "bhindi ke patte peele",
        "بھنڈی کا وائرس",
        "پیلی رگیں",
        "بھنڈی کے پتے پیلے",
        "پیلا موزیک",
        "سفید مکھی",
        "بھنڈی کی بیماری",
        "پتہ پیلا",
        "وائرس",
        "بھنڈی کا پیلا پن"
      ],
      "chips": [
        "p_mosaic",
        "p_yellowing",
        "p_stunted",
        "p_whiteflies"
      ],
      "todo": [
        "Pull out plants with yellow veins as soon as you see them, put them in a bag and bury or burn them away from the field",
        "Check the underside of leaves for whitefly two or three times a week",
        "Put up yellow sticky traps around and within the field to monitor and reduce whitefly",
        "Neem-based sprays can help reduce whitefly when numbers are low",
        "If whitefly is high, ask your agriculture officer whether a spray is needed and which product is approved"
      ],
      "dont": [
        "Do not leave pulled-out sick plants lying in or next to the field",
        "Do not sow new okra next to an old, infected okra crop"
      ]
    },
    {
      "slug": "mustard-aphid",
      "name": "Mustard Aphid",
      "type": "plant",
      "hosts": [
        "mustard",
        "cabbage"
      ],
      "hostLabel": "Mustard, Canola & Cabbage family",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Crowds of tiny grey-green insects on mustard shoots, flowers and pods; leaves curl and plants weaken.",
      "question": "Are there crowds of tiny soft insects on the top shoots, flowers or pods?",
      "keywords": [
        "aphid",
        "mustard aphid",
        "canola aphid",
        "tela",
        "sust tela",
        "sarson tela",
        "sarson ka keera",
        "sarson",
        "canola",
        "raya",
        "toria",
        "chipchipa patta",
        "patte murr gaye",
        "phalian",
        "سست تیلا",
        "تیلا",
        "سرسوں کا تیلا",
        "کینولا کا تیلا",
        "سرسوں",
        "توریا",
        "رایا",
        "سرسوں پر کیڑے",
        "چپچپے پتے",
        "پتے مڑ گئے",
        "پھلیاں کم",
        "کالی تہہ"
      ],
      "chips": [
        "p_insects",
        "p_sticky",
        "p_curled",
        "p_stunted"
      ],
      "todo": [
        "From December, check the top shoots, flower buds and pods twice a week in several parts of the field",
        "If only a few plants or branches have colonies, cut off the infested tops and destroy them away from the field",
        "Hang yellow sticky traps just above the crop to catch winged aphids and track their numbers",
        "Where ladybirds, hoverfly larvae or brown swollen 'mummy' aphids are common, give these natural enemies time to work",
        "If aphids are spreading fast at flowering, ask your agriculture officer whether a spray is needed and which product is approved; neem-based sprays are a milder option"
      ],
      "dont": [
        "Don't spray insecticides in the daytime when bees are visiting the flowers",
        "Don't spray the whole field at the first sight of a few aphids"
      ]
    },
    {
      "slug": "mustard-alternaria-blight",
      "name": "Alternaria Blight of Mustard",
      "type": "plant",
      "hosts": [
        "mustard",
        "cabbage"
      ],
      "hostLabel": "Mustard, Canola & Cabbage family",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Round brown to black spots with rings on mustard leaves, stems and pods; pods dry with small seed.",
      "question": "Do the brown or black spots have rings inside them, and are the pods spotted too?",
      "keywords": [
        "alternaria",
        "blight",
        "leaf spot",
        "black spot",
        "brown spots",
        "ring spots",
        "sarson",
        "canola",
        "dhabbe",
        "kale dhabbe",
        "bhoore dhabbe",
        "phalian kali",
        "jhulsao",
        "الٹرنیریا",
        "جھلساؤ",
        "سرسوں کے دھبے",
        "کالے دھبے",
        "بھورے دھبے",
        "چھلوں والے دھبے",
        "پھلیوں پر دھبے",
        "سرسوں کی بیماری",
        "کینولا کی بیماری",
        "پتے جھلس گئے"
      ],
      "chips": [
        "p_target_spots",
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Check lower leaves, stems and pods in several parts of the field to see how widespread the spots are",
        "Remove mustard-family weeds and volunteer plants in and around the field",
        "Avoid extra irrigation in humid, foggy weather",
        "Contact your agriculture officer; they can confirm the disease and advise whether a fungicide spray is needed and which product is approved",
        "Note the field and variety so you can plan rotation and clean seed for next season"
      ],
      "dont": []
    },
    {
      "slug": "brinjal-shoot-fruit-borer",
      "name": "Brinjal Shoot and Fruit Borer",
      "type": "plant",
      "hosts": [
        "brinjal"
      ],
      "hostLabel": "Brinjal (Eggplant)",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Brinjal shoot tips wilt and droop; fruits have small holes plugged with droppings and a pink caterpillar inside.",
      "question": "Is there a small hole with droppings in the wilted shoot tip or the fruit, with a pink caterpillar inside?",
      "keywords": [
        "brinjal",
        "baingan",
        "bengan",
        "eggplant",
        "shoot borer",
        "fruit borer",
        "sundi",
        "baingan ki sundi",
        "phal mein surakh",
        "keera",
        "konpal murjha gayi",
        "tana sundi",
        "borer",
        "بینگن کی سنڈی",
        "بینگن",
        "تنے کی سنڈی",
        "پھل کی سنڈی",
        "پھل میں سوراخ",
        "کونپل مرجھا گئی",
        "سنڈی",
        "کیڑا",
        "بینگن میں کیڑے",
        "گلابی سنڈی"
      ],
      "chips": [
        "p_bored",
        "p_dead_heart",
        "p_caterpillars",
        "p_fruit_drop"
      ],
      "todo": [
        "Walk the field every few days; pinch off wilted shoot tips a little below the damage and collect holed fruits",
        "Bury the collected shoots and fruits deep in a pit or destroy them; do not leave them at the field edge",
        "Install pheromone traps for this pest at crop height to monitor and catch male moths; change lures as advised",
        "Use neem-based sprays as a milder option and protect natural enemies such as ladybirds and small wasps",
        "If damage keeps rising, ask your agriculture officer which insecticide is approved and how long to wait before picking"
      ],
      "dont": [
        "Don't pick and sell fruit soon after spraying; follow the waiting period on the label",
        "Don't spray the same insecticide again and again; the pest can become resistant"
      ]
    },
    {
      "slug": "cucurbit-powdery-mildew",
      "name": "Powdery Mildew of Cucurbits",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Gourds, Pumpkin, Cucumber & Melons",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "White powdery patches on cucurbit leaves and stems that spread until leaves turn yellow and dry.",
      "question": "Is there white, flour-like powder on the leaves that rubs off with a finger?",
      "keywords": [
        "powdery mildew",
        "white powder",
        "safed powder",
        "safed dhabbe",
        "kaddu",
        "lauki",
        "ghiya",
        "kheera",
        "karela",
        "tori",
        "tinda",
        "kharbooza",
        "phaphoondi",
        "patte safed",
        "سفوفی پھپھوندی",
        "سفید پاؤڈر",
        "سفید دھبے",
        "پھپھوندی",
        "کدو",
        "لوکی",
        "کھیرا",
        "کریلا",
        "توری",
        "ٹینڈا",
        "خربوزہ",
        "پتوں پر سفیدی"
      ],
      "chips": [
        "p_white_powder",
        "p_yellowing"
      ],
      "todo": [
        "Check older leaves on both sides at least once a week once vines start to spread",
        "In small plots and kitchen gardens, remove and destroy badly infected older leaves",
        "Improve air flow by training vines on a trellis and removing weeds",
        "Contact your agriculture officer early to ask whether a fungicide is needed and which product is approved; change products as advised, because the fungus can become resistant"
      ],
      "dont": []
    },
    {
      "slug": "cucurbit-downy-mildew",
      "name": "Downy Mildew of Cucurbits",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Cucumber, Melons, Gourds & Pumpkin",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Yellow angular patches between leaf veins, with grey-purple fuzz underneath, on cucumber, melons and gourds.",
      "question": "Are the yellow spots angular (boxed in by veins), with grey-purple fuzz on the underside?",
      "keywords": [
        "downy mildew",
        "yellow patches",
        "peelay dhabbe",
        "kheera",
        "kharbooza",
        "tarbooz",
        "kaddu",
        "lauki",
        "karela",
        "patte peele",
        "neeche suramai",
        "phaphoondi",
        "rooyen dar",
        "روئیں دار پھپھوندی",
        "پیلے دھبے",
        "کونے دار دھبے",
        "کھیرا",
        "خربوزہ",
        "تربوز",
        "کدو",
        "لوکی",
        "کریلا",
        "پتوں کے نیچے روئیں",
        "پتے پیلے",
        "پھپھوندی"
      ],
      "chips": [
        "p_yellowing",
        "p_brown_spots"
      ],
      "todo": [
        "Look under the leaves early in the morning for grey-purple growth to confirm the disease",
        "In small plots, remove and destroy badly affected leaves; don't leave them in the field",
        "Stop overhead watering; water the furrows in the morning so leaves dry quickly",
        "Contact your agriculture officer quickly; downy mildew moves fast, and they can advise whether a spray is needed and which product is approved"
      ],
      "dont": []
    },
    {
      "slug": "cucurbit-fruit-fly",
      "name": "Melon Fruit Fly",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Gourds, Melons, Cucumber & Pumpkin",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Young cucurbit fruits get tiny sting marks, turn yellow, rot and drop; small white maggots are inside.",
      "question": "When you cut the rotting fruit, are there small white maggots inside?",
      "keywords": [
        "fruit fly",
        "melon fly",
        "phal ki makhi",
        "makhi",
        "kaddu",
        "karela",
        "lauki",
        "kheera",
        "kharbooza",
        "tori",
        "phal gal gaya",
        "phal mein keeray",
        "sundi",
        "ghiya",
        "پھل کی مکھی",
        "مکھی",
        "کریلا",
        "لوکی",
        "کدو",
        "کھیرا",
        "خربوزہ",
        "توری",
        "پھل گل گیا",
        "پھل میں کیڑے",
        "پھل میں سنڈیاں",
        "پھل گر رہے ہیں"
      ],
      "chips": [
        "p_rot",
        "p_fruit_spots",
        "p_fruit_drop",
        "p_bored"
      ],
      "todo": [
        "Collect all stung, rotting and fallen fruits at least twice a week",
        "Destroy them: bury them deep, or seal them in a plastic bag and leave it in the sun for a day or more",
        "Hang cue-lure traps for male melon flies in and around the field",
        "In small plots, cover young fruits of bitter gourd, gourds and melons with paper or fine-mesh bags that do not touch the fruit",
        "If fruit losses stay high, ask your agriculture officer about approved bait sprays or other control"
      ],
      "dont": [
        "Don't leave infested or fallen fruits in the field or put them in compost"
      ]
    },
    {
      "slug": "cucurbit-mosaic-leaf-curl-viruses",
      "name": "Mosaic and Leaf Curl Viruses of Cucurbits",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Gourds, Pumpkin, Cucumber & Melons",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Cucurbit leaves show yellow-green mosaic, curling or crinkling; plants stunted, fruits small or misshapen.",
      "question": "Do the leaves show a yellow-green mosaic or curling and crinkling, with no powder or fuzz on them?",
      "keywords": [
        "virus",
        "mosaic",
        "leaf curl",
        "patta marorr",
        "patta murr",
        "chitkabra patta",
        "peela patta",
        "kaddu",
        "lauki",
        "karela",
        "kheera",
        "tori",
        "tinda",
        "safed makhi",
        "tela",
        "پتا مروڑ",
        "موزیک",
        "وائرس",
        "چتکبرے پتے",
        "پتے مڑ گئے",
        "پیلے پتے",
        "کدو",
        "لوکی",
        "کریلا",
        "کھیرا",
        "توری",
        "سفید مکھی",
        "تیلا"
      ],
      "chips": [
        "p_mosaic",
        "p_curled",
        "p_stunted",
        "p_small_leaves",
        "p_whiteflies"
      ],
      "todo": [
        "Pull out plants with clear symptoms early in the crop and destroy them away from the field",
        "Remove cucurbit weeds and volunteer plants around the field",
        "Hang yellow sticky traps to monitor aphids and whiteflies",
        "Ask your agriculture officer for advice on controlling whitefly or aphids; sprays alone rarely stop virus spread"
      ],
      "dont": [
        "Don't keep infected plants hoping they will recover; they will not",
        "Don't plant new cucurbits next to old infected crops"
      ]
    },
    {
      "slug": "cole-diamondback-moth",
      "name": "Diamondback Moth",
      "type": "plant",
      "hosts": [
        "cabbage",
        "mustard"
      ],
      "hostLabel": "Cabbage, Cauliflower & Mustard family",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Small green caterpillars that wriggle when touched make see-through 'windows' and holes in cabbage leaves.",
      "question": "Are there small green caterpillars that wriggle and drop on a thread when touched?",
      "keywords": [
        "diamondback moth",
        "DBM",
        "cabbage",
        "cauliflower",
        "band gobhi",
        "phool gobhi",
        "gobhi ki sundi",
        "sundi",
        "choti sundi",
        "patton mein surakh",
        "keera",
        "caterpillar",
        "sarson",
        "گوبھی کی سنڈی",
        "ڈائمنڈ بیک موتھ",
        "چھوٹی سنڈی",
        "سبز سنڈی",
        "بند گوبھی",
        "پھول گوبھی",
        "پتوں میں سوراخ",
        "سنڈی",
        "کیڑا",
        "سرسوں"
      ],
      "chips": [
        "p_holes",
        "p_caterpillars"
      ],
      "todo": [
        "Check the underside of leaves twice a week, especially at seedling, transplanting and heading stages",
        "In small plots, pick caterpillars by hand and destroy badly damaged leaves",
        "Set up pheromone traps for diamondback moth to monitor adult numbers",
        "Use neem-based sprays or Bt (a natural bacterial insecticide) on the advice of your agriculture officer",
        "If damage is heavy, ask your agriculture officer which insecticide is approved, and change products to avoid resistance"
      ],
      "dont": [
        "Don't spray the same insecticide again and again; this pest quickly becomes resistant",
        "Don't harvest soon after spraying; follow the waiting period on the label"
      ]
    },
    {
      "slug": "cole-black-rot",
      "name": "Black Rot of Cabbage and Cauliflower",
      "type": "plant",
      "hosts": [
        "cabbage"
      ],
      "hostLabel": "Cabbage, Cauliflower & related crops",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Yellow V-shaped patches from the leaf edges with blackened veins; leaves dry and heads may rot.",
      "question": "Are there yellow V-shaped patches at the leaf edge with blackened veins inside?",
      "keywords": [
        "black rot",
        "cabbage",
        "cauliflower",
        "band gobhi",
        "phool gobhi",
        "kali ragain",
        "patta peela",
        "V shape",
        "gobhi ki bimari",
        "bacteria",
        "gobhi gal gayi",
        "patte sookh gaye",
        "بلیک روٹ",
        "کالی رگیں",
        "بند گوبھی",
        "پھول گوبھی",
        "گوبھی کی بیماری",
        "پتے پیلے",
        "V شکل",
        "گوبھی گل گئی",
        "پتوں کے کنارے سوکھ گئے",
        "بیکٹیریا"
      ],
      "chips": [
        "p_edge_drying",
        "p_yellowing",
        "p_wilting",
        "p_rot"
      ],
      "todo": [
        "Pull out and destroy badly infected plants and fallen leaves; do not leave them in the field",
        "Avoid working in the field while plants are wet",
        "Change from sprinkler to furrow or drip irrigation and avoid waterlogging",
        "Contact your agriculture officer to confirm the disease and ask about approved sprays that may slow the spread; infected plants cannot be cured"
      ],
      "dont": [
        "Don't save seed from an infected crop"
      ]
    },
    {
      "slug": "date-palm-red-palm-weevil",
      "name": "Red Palm Weevil",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Holes in the date palm trunk or frond bases ooze brown liquid and push out chewed fibres; the crown wilts.",
      "question": "Are there holes on the trunk or frond bases with brown ooze or chewed fibres coming out?",
      "keywords": [
        "red palm weevil",
        "khajoor",
        "khajur",
        "date palm",
        "khajoor ka keera",
        "sundi",
        "bhunda",
        "keera",
        "tana khokhla",
        "surakh",
        "bhoora pani",
        "weevil",
        "ghun",
        "سرخ بھونڈی",
        "کھجور کا کیڑا",
        "کھجور",
        "تنے میں سوراخ",
        "بھورا پانی",
        "تنا کھوکھلا",
        "سنڈی",
        "بھونڈی",
        "کھجور کا درخت سوکھ رہا ہے",
        "ریشے نکلنا"
      ],
      "chips": [
        "p_bored",
        "p_gum",
        "p_wilting",
        "p_dieback"
      ],
      "todo": [
        "Inspect every palm, especially the trunk base, frond bases and offshoots, for holes, brown ooze and chewed fibres",
        "Report a suspected attack quickly to your agriculture department or a date palm research station; treatment works best early",
        "Use pheromone traps with a fermenting food bait to catch adult weevils; check and empty them regularly",
        "Treatment of an infested palm should be done by or under the guidance of trained agriculture staff",
        "Badly infested palms that cannot be saved should be cut down, chopped and burnt so the grubs and pupae inside are killed"
      ],
      "dont": [
        "Don't move offshoots or palm logs from an infested orchard to new areas",
        "Don't leave cut infested palms lying in the orchard without destroying them"
      ]
    },
    {
      "slug": "date-palm-sudden-decline",
      "name": "Sudden Decline of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Fungal (soil-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Date palm fronds turn orange-yellow from the midrib and dry from the outer to inner fronds; trees die in months.",
      "question": "Do the outer fronds turn orange-yellow from the midrib, with no holes or ooze on the trunk?",
      "keywords": [
        "sudden decline",
        "date palm wilt",
        "khajoor",
        "khajur",
        "khajoor sookh gayi",
        "khajoor ki bimari",
        "Khairpur",
        "patte peele",
        "sookha",
        "phaphoondi",
        "darakht sookh gaya",
        "date palm disease",
        "کھجور کا سوکھاؤ",
        "اچانک سوکھاؤ",
        "کھجور کی بیماری",
        "کھجور سوکھ گئی",
        "کھجور کے پتے پیلے",
        "خیرپور",
        "مرجھاؤ",
        "درخت سوکھ گیا",
        "سیم",
        "پھپھوندی"
      ],
      "chips": [
        "p_yellowing",
        "p_old_leaves_yellow",
        "p_wilting",
        "p_fruit_drop",
        "p_dieback"
      ],
      "todo": [
        "Mark affected palms and contact your agriculture department or a date palm research institute to confirm the cause",
        "Cut and burn dried, infected fronds; keep the trash out of the orchard",
        "Improve drainage and switch to periodic irrigation instead of standing water",
        "Ask the agriculture department whether an approved fungicide treatment should be applied to affected and nearby trees, and follow their instructions",
        "Remove and burn dead palms so they do not remain a source of infection"
      ],
      "dont": [
        "Don't flood-irrigate or let water stand around palms",
        "Don't take offshoots from affected trees or orchards for new planting"
      ]
    },
    {
      "slug": "whitefly",
      "name": "Whitefly",
      "type": "plant",
      "hosts": [
        "cotton",
        "tomato",
        "okra",
        "brinjal",
        "chili",
        "cucurbits",
        "potato",
        "cabbage"
      ],
      "hostLabel": "Cotton, Vegetables & Many Other Crops",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny white flies under leaves that fly up when touched; sticky leaves, black mould and yellowing.",
      "question": "When you shake the plant, do tiny white flies rise from under the leaves?",
      "keywords": [
        "whitefly",
        "white fly",
        "tiny white insects",
        "sticky leaves",
        "sooty mould",
        "honeydew",
        "safed makhi",
        "sufaid makhi",
        "safaid makhi",
        "chipchipa patta",
        "kale patte",
        "leaf curl",
        "safed keera",
        "safed machhar",
        "safaid machar",
        "سفید مکھی",
        "سفید مکھیاں",
        "چھوٹی سفید مکھی",
        "پتوں کے نیچے مکھیاں",
        "چپچپے پتے",
        "پتے چپچپے",
        "کالی پھپھوندی",
        "کالے پتے",
        "پتہ مروڑ",
        "کپاس کی سفید مکھی",
        "ٹماٹر پر سفید مکھی",
        "پتے پیلے"
      ],
      "chips": [
        "p_whiteflies",
        "p_sticky",
        "p_yellowing",
        "p_curled"
      ],
      "todo": [
        "Check the underside of leaves at the field edge and inside the field at least twice a week",
        "Hang yellow sticky traps to see when numbers are rising",
        "Remove weeds in and around the field, and pull out young plants with leaf curl or yellow mosaic early if your agriculture officer advises it",
        "Ask your agriculture officer whether numbers are high enough to need a spray and which product is approved; neem-based sprays can help on small plots",
        "If a spray is advised, make sure it reaches the underside of the leaves, where whiteflies sit"
      ],
      "dont": [
        "Don't spray every week 'just in case'; it kills natural enemies and builds resistance",
        "Don't mix several insecticides together on your own"
      ]
    },
    {
      "slug": "jassid-cotton-leafhopper",
      "name": "Jassid (Cotton Leafhopper)",
      "type": "plant",
      "hosts": [
        "cotton",
        "okra",
        "brinjal",
        "potato"
      ],
      "hostLabel": "Cotton, Okra, Brinjal & Potato",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Small green wedge-shaped insects under leaves; leaf edges turn yellow, then red, and curl down.",
      "question": "Do the leaf edges turn yellow, then red, and curl down, with small green insects that run sideways under the leaf?",
      "keywords": [
        "jassid",
        "leafhopper",
        "green insect",
        "hopper burn",
        "red leaf edges",
        "sabz tela",
        "hara tela",
        "jassid keera",
        "patte lal",
        "kinare surkh",
        "patta murna",
        "bhindi tela",
        "sabz keera",
        "سبز تیلا",
        "ہرا تیلا",
        "جیسڈ",
        "تیلا",
        "پتوں کے کنارے سرخ",
        "پتے لال",
        "پتے نیچے مڑنا",
        "کناروں سے پیلا",
        "ہاپر برن",
        "ہرا کیڑا",
        "بھنڈی پر تیلا",
        "کپاس پر تیلا"
      ],
      "chips": [
        "p_insects",
        "p_edge_drying",
        "p_yellowing",
        "p_stunted"
      ],
      "todo": [
        "Turn over leaves from the lower and middle parts of several plants and look for green nymphs",
        "Look for the typical yellow-then-red leaf edges to confirm it is jassid",
        "Ask your agriculture officer whether numbers are above the local action level and which spray, if any, is approved; neem-based sprays may help on small plots",
        "Remove weeds around the field that host jassid"
      ],
      "dont": [
        "Don't mistake hopper burn for a disease and spray fungicides",
        "Don't use broad-spectrum sprays without need; they kill the predators that keep jassid low"
      ]
    },
    {
      "slug": "cotton-mealybug",
      "name": "Cotton Mealybug",
      "type": "plant",
      "hosts": [
        "cotton",
        "okra",
        "brinjal",
        "tomato"
      ],
      "hostLabel": "Cotton, Okra, Brinjal & Tomato",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "White, cotton-wool-like insects in clusters on stems, shoots and bolls; sticky leaves and black mould.",
      "question": "Are there white, cotton-wool-like insects that crawl, in clusters on the stems and shoots?",
      "keywords": [
        "mealybug",
        "mealy bug",
        "white insects",
        "cotton wool",
        "white wax",
        "sticky",
        "sooty mould",
        "mili bug",
        "milli bug",
        "safaid keeray",
        "rui jaisa keera",
        "kapas ka keera",
        "safed jooan",
        "ملی بگ",
        "سفید کیڑے",
        "روئی جیسا کیڑا",
        "سفید موم",
        "تنے پر سفید کیڑے",
        "کپاس کی ملی بگ",
        "چپچپے پتے",
        "کالی پھپھوندی",
        "پودا جھاڑی بن گیا",
        "سکڑے پتے",
        "بھنڈی پر سفید کیڑے",
        "بینگن پر سفید کیڑے"
      ],
      "chips": [
        "p_mealy",
        "p_sticky",
        "p_stunted",
        "p_malformed"
      ],
      "todo": [
        "Mark infested plants and check the plants around them every few days",
        "Cut out heavily infested plants or branches early, put them in a bag and burn or bury them away from the field",
        "Remove weeds from field borders and water channels",
        "Visit clean fields first, and clean tools and clothes after working in infested fields",
        "Contact your agriculture officer for advice on whether a spray is needed and which product is approved"
      ],
      "dont": [
        "Don't throw uprooted weeds or infested plants into water channels or on field borders",
        "Don't spray broad-spectrum insecticides again and again; they kill the tiny wasps and lady beetles that attack mealybugs"
      ]
    },
    {
      "slug": "helicoverpa-armigera",
      "name": "American Bollworm / Gram Pod Borer / Tomato Fruit Borer",
      "type": "plant",
      "hosts": [
        "cotton",
        "chickpea",
        "tomato",
        "chili",
        "okra",
        "maize"
      ],
      "hostLabel": "Cotton, Chickpea, Tomato, Chilli, Okra & Maize",
      "causeType": "Insect pest (caterpillar)",
      "urgency": "",
      "zoonotic": false,
      "short": "Green to brown caterpillar boring round holes in bolls, gram pods and tomatoes, often half outside.",
      "question": "Is a fat caterpillar feeding with its head inside a round hole in a pod, boll or fruit?",
      "keywords": [
        "american sundi",
        "bollworm",
        "pod borer",
        "fruit borer",
        "caterpillar",
        "sundi",
        "chane ki sundi",
        "tamatar ki sundi",
        "gram pod borer",
        "tinde mein soorakh",
        "phal mein soorakh",
        "keera",
        "helicoverpa",
        "امریکن سنڈی",
        "سنڈی",
        "چنے کی سنڈی",
        "ٹاڈ کی سنڈی",
        "ٹماٹر کی سنڈی",
        "پھل میں سوراخ",
        "ٹینڈے میں سوراخ",
        "ٹینڈے کی سنڈی",
        "ٹاڈ خالی",
        "مکئی کی چھلی میں سنڈی",
        "مرچ میں سوراخ",
        "ہری سنڈی"
      ],
      "chips": [
        "p_caterpillars",
        "p_bored",
        "p_holes",
        "p_fruit_drop"
      ],
      "todo": [
        "Check plants for eggs and young caterpillars, especially at flowering and fruiting",
        "Hand-pick and destroy large caterpillars, and remove bored fruits and fallen squares",
        "Put up pheromone traps to see when moths arrive",
        "Place bird perches (T-shaped sticks) in chickpea fields so birds can eat the caterpillars",
        "Ask your agriculture officer whether a spray is needed; options may include biological products such as Bt or NPV, and young caterpillars are much easier to control than old ones"
      ],
      "dont": [
        "Don't wait until caterpillars are large; older caterpillars inside fruits are hard to kill",
        "Don't spray tomatoes or other vegetables close to picking; follow the waiting period on the label"
      ]
    },
    {
      "slug": "spodoptera-litura-armyworm",
      "name": "Armyworm (Spodoptera litura)",
      "type": "plant",
      "hosts": [
        "cotton",
        "cabbage",
        "tomato",
        "brinjal",
        "okra",
        "chili",
        "cucurbits",
        "potato",
        "maize"
      ],
      "hostLabel": "Cotton, Vegetables & Many Other Crops",
      "causeType": "Insect pest (caterpillar)",
      "urgency": "",
      "zoonotic": false,
      "short": "Groups of tiny caterpillars scrape leaves papery; big caterpillars eat leaves at night and hide in soil.",
      "question": "Are there clusters of eggs covered with brown hairs, or groups of small caterpillars scraping the same leaf?",
      "keywords": [
        "armyworm",
        "army worm",
        "lashkari sundi",
        "leaf eating caterpillar",
        "patte khane wali sundi",
        "sundi",
        "keera",
        "raat ko khati hai",
        "patte chhalni",
        "spodoptera",
        "tobacco caterpillar",
        "sundiyan jhund mein",
        "gobhi ki sundi",
        "لشکری سنڈی",
        "سنڈی",
        "پتے کھانے والی سنڈی",
        "سنڈیوں کا جھنڈ",
        "پتے چھلنی",
        "پتوں میں سوراخ",
        "رات کو کھانے والی سنڈی",
        "انڈوں کے گچھے",
        "گوبھی کی سنڈی",
        "کپاس کی سنڈی",
        "تمباکو کی سنڈی",
        "پتے صاف ہو گئے"
      ],
      "chips": [
        "p_caterpillars",
        "p_holes",
        "p_bored"
      ],
      "todo": [
        "Check the underside of leaves for egg clusters and groups of young caterpillars",
        "Pick off and destroy leaves with egg masses or groups of young caterpillars before they spread",
        "Use pheromone traps to see when moths are active",
        "Look for big caterpillars in the soil around plants in the evening or early morning and destroy them",
        "Ask your agriculture officer which spray, if any, is approved; biological options such as NPV or Bt may be available, and young caterpillars are easier to control"
      ],
      "dont": [
        "Don't wait until caterpillars are big; they eat much more and are harder to kill",
        "Don't spray vegetables close to picking; follow the waiting period on the label"
      ]
    },
    {
      "slug": "spotted-bollworm-earias",
      "name": "Spotted Bollworm (Okra Shoot and Fruit Borer)",
      "type": "plant",
      "hosts": [
        "cotton",
        "okra"
      ],
      "hostLabel": "Cotton & Okra",
      "causeType": "Insect pest (caterpillar)",
      "urgency": "",
      "zoonotic": false,
      "short": "Shoot tips droop and dry; small spotted caterpillars bore into okra pods and cotton squares and bolls.",
      "question": "Are the young shoot tips drooping and drying, with a small caterpillar inside?",
      "keywords": [
        "spotted bollworm",
        "chitkabri sundi",
        "bhindi ki sundi",
        "okra borer",
        "shoot borer",
        "fruit borer",
        "konpal sookh gayi",
        "konpal murjhana",
        "tinde mein soorakh",
        "bhindi mein keera",
        "earias",
        "sundi",
        "چتکبری سنڈی",
        "بھنڈی کی سنڈی",
        "کونپل سوکھنا",
        "کونپل جھکنا",
        "کونپل مرجھا گئی",
        "بھنڈی میں سوراخ",
        "ٹیڑھی بھنڈی",
        "ٹینڈے میں سوراخ",
        "ڈوڈیاں گرنا",
        "کپاس کی سنڈی",
        "سنڈی"
      ],
      "chips": [
        "p_bored",
        "p_caterpillars",
        "p_dead_heart",
        "p_fruit_drop"
      ],
      "todo": [
        "Pick off and destroy drooping shoot tips with the caterpillar inside",
        "Collect and destroy bored okra pods and fallen squares and bolls; don't leave them in the field",
        "Put up pheromone traps to see when moths are active",
        "Ask your agriculture officer whether damage is above the local action level and which approved spray, if any, to use"
      ],
      "dont": [
        "Don't leave bored okra pods or fallen squares lying in the field",
        "Don't pick okra for sale soon after a spray; follow the waiting period on the label"
      ]
    },
    {
      "slug": "fruit-fly-bactrocera",
      "name": "Fruit Flies",
      "type": "plant",
      "hosts": [
        "mango",
        "guava",
        "citrus"
      ],
      "hostLabel": "Mango, Guava, Citrus, Peach & Ber",
      "causeType": "Insect pest (fly maggots)",
      "urgency": "",
      "zoonotic": false,
      "short": "Small sting marks on ripening fruit; soft rotten patches with white maggots inside; fruit drop.",
      "question": "When you cut a soft or spotted fruit, are there white maggots inside?",
      "keywords": [
        "fruit fly",
        "phal ki makhi",
        "maggots in fruit",
        "amrood mein keeray",
        "aam mein keeray",
        "keeray wala phal",
        "phal gal gaya",
        "phal girna",
        "sundiyan phal mein",
        "guava worms",
        "bactrocera",
        "methyl eugenol trap",
        "پھل کی مکھی",
        "فروٹ فلائی",
        "امرود میں کیڑے",
        "آم میں کیڑے",
        "پھل میں سنڈیاں",
        "کیڑوں والا پھل",
        "پھل گل گیا",
        "پھل گرنا",
        "ڈنک کے نشان",
        "امرود کی مکھی",
        "آڑو کی مکھی",
        "میتھائل یوجینول پھندا"
      ],
      "chips": [
        "p_fruit_spots",
        "p_rot",
        "p_fruit_drop",
        "p_caterpillars"
      ],
      "todo": [
        "Collect fallen and infested fruits every day or two and destroy them: bury them deep, or seal them in plastic bags and leave them in the sun",
        "Hang methyl eugenol (male lure) traps in the orchard to catch male flies and watch their numbers",
        "Ask your agriculture or horticulture officer about bait sprays (protein bait with an approved insecticide applied as spots), which use much less chemical than full-cover sprays",
        "Pick fruit at the right maturity and don't leave over-ripe fruit on the tree",
        "Work together with neighbouring orchards; area-wide control works much better than one orchard alone"
      ],
      "dont": [
        "Don't leave fallen fruit under the trees or throw it on field borders",
        "Don't send infested fruit to markets or other areas"
      ]
    },
    {
      "slug": "root-knot-nematode",
      "name": "Root-Knot Nematodes",
      "type": "plant",
      "hosts": [
        "tomato",
        "okra",
        "brinjal",
        "cucurbits",
        "chili",
        "potato",
        "guava"
      ],
      "hostLabel": "Vegetables & Guava",
      "causeType": "Nematode (soil worm)",
      "urgency": "",
      "zoonotic": false,
      "short": "Stunted, yellow plants that wilt in the midday heat; roots have knots and swellings (galls).",
      "question": "When you dig up a weak plant, are there knots or swellings on the roots that don't rub off?",
      "keywords": [
        "root knot",
        "nematode",
        "root galls",
        "knots on roots",
        "jarh mein ganth",
        "jaron par gaanthein",
        "jarhon ki bimari",
        "pauda chhota",
        "dopahar ko murjhana",
        "jarh phooli",
        "gilti jarh",
        "tamatar ki jarh",
        "جڑ کی گانٹھ",
        "جڑوں پر گانٹھیں",
        "نیماٹوڈ",
        "جڑ پھولی ہوئی",
        "جڑوں پر گلٹیاں",
        "پودا چھوٹا رہ گیا",
        "دوپہر کو مرجھانا",
        "ٹماٹر کی جڑ",
        "سبزی کی جڑ خراب",
        "پودے پیلے"
      ],
      "chips": [
        "p_galls",
        "p_stunted",
        "p_wilting",
        "p_yellowing",
        "p_patches_dry"
      ],
      "todo": [
        "Carefully dig up a few weak plants and wash the roots to look for galls",
        "Take root and soil samples to your agriculture department or a nematology lab to confirm",
        "At the end of the crop, pull out plants with as much root as possible and destroy them; don't leave roots in the field",
        "Water and feed affected plants well to reduce stress for the rest of the season",
        "Ask your agriculture officer about approved treatments and resistant varieties for the next crop"
      ],
      "dont": [
        "Don't use soil or seedlings from an infested field to start a new nursery",
        "Don't move soil from infested patches into clean fields"
      ]
    },
    {
      "slug": "termites",
      "name": "Termites",
      "type": "plant",
      "hosts": [
        "wheat",
        "sugarcane",
        "maize",
        "cotton",
        "mango",
        "citrus",
        "guava"
      ],
      "hostLabel": "Wheat, Sugarcane, Maize, Cotton & Fruit Trees",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Plants dry up in patches and pull out easily; roots and stem base eaten, with soil-filled mud tunnels.",
      "question": "When you pull up a dried plant, are the roots eaten and covered with soil, with small pale insects or mud tunnels?",
      "keywords": [
        "termites",
        "termite",
        "deemak",
        "seonk",
        "white ants",
        "jarh kha gayi",
        "pauda sookh gaya",
        "mitti ki surang",
        "gandum mein deemak",
        "kamad mein deemak",
        "roots eaten",
        "deemak ka hamla",
        "deemak lag gayi",
        "seonk lag gayi",
        "دیمک",
        "سیونک",
        "جڑیں کھا گئی",
        "پودا سوکھ گیا",
        "مٹی کی سرنگیں",
        "گندم میں دیمک",
        "گنے میں دیمک",
        "کماد میں دیمک",
        "درخت پر دیمک",
        "سفید خالی سٹے",
        "پودے آسانی سے نکل آتے ہیں"
      ],
      "chips": [
        "p_root_damage",
        "p_wilting",
        "p_patches_dry",
        "p_yellowing"
      ],
      "todo": [
        "Dig around a few dried plants to confirm termites on the roots",
        "Irrigate where possible; moist soil reduces attack",
        "Find termite mounds near the field and destroy them, including the queen if you can find her",
        "Ask your agriculture officer about an approved soil, seed or sett treatment for your crop",
        "On fruit trees, scrape off mud tunnels from the trunk and check the roots; ask your horticulture officer for treatment advice"
      ],
      "dont": [
        "Don't apply raw, undecomposed farmyard manure",
        "Don't leave crop stubble and dead wood lying in or around the field"
      ]
    },
    {
      "slug": "nitrogen-deficiency",
      "name": "Nitrogen Deficiency",
      "type": "plant",
      "hosts": [
        "wheat",
        "rice",
        "cotton",
        "tomato",
        "potato",
        "maize",
        "sugarcane",
        "onion",
        "chili",
        "citrus",
        "mango",
        "guava",
        "chickpea",
        "mustard",
        "okra",
        "brinjal",
        "cucurbits",
        "cabbage",
        "datepalm"
      ],
      "hostLabel": "All Crops",
      "causeType": "Nutrient deficiency",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale green plants; older lower leaves turn yellow first, starting at the tip; weak, slow growth.",
      "question": "Are the oldest, lowest leaves yellow first, while the young top leaves are still greener?",
      "keywords": [
        "nitrogen deficiency",
        "yellow leaves",
        "pale crop",
        "urea",
        "nitrogen ki kami",
        "fasal peeli",
        "patte peele",
        "neeche ke patte peele",
        "khad ki kami",
        "kamzor fasal",
        "peela pan",
        "nitrogen",
        "نائٹروجن کی کمی",
        "پتے پیلے",
        "فصل پیلی",
        "نیچے کے پتے پیلے",
        "پرانے پتے پیلے",
        "یوریا",
        "کھاد کی کمی",
        "کمزور فصل",
        "پیلا پن",
        "فصل نہیں بڑھ رہی",
        "ہلکا ہرا رنگ"
      ],
      "chips": [
        "p_old_leaves_yellow",
        "p_yellowing",
        "p_stunted"
      ],
      "todo": [
        "Check whether the yellowing starts on the oldest leaves; if the young leaves are yellow first, it is probably a different problem",
        "Ask your agriculture officer or a soil testing lab which nitrogen fertiliser to use, how much and when, for your crop and soil",
        "Give nitrogen in the recommended number of split applications rather than all at once",
        "In rice and maize, use a leaf colour chart if your agriculture department provides one, to judge when nitrogen is needed",
        "Remove weeds and drain waterlogged areas"
      ],
      "dont": [
        "Don't pour on extra nitrogen without checking the cause; too much nitrogen makes crops fall over (lodge) and invites pests and diseases"
      ]
    },
    {
      "slug": "zinc-deficiency",
      "name": "Zinc Deficiency",
      "type": "plant",
      "hosts": [
        "wheat",
        "rice",
        "maize",
        "cotton",
        "citrus",
        "mango"
      ],
      "hostLabel": "Wheat, Rice, Maize, Cotton & Fruit Trees",
      "causeType": "Nutrient deficiency",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale stripes or yellow patches between veins on young leaves; small, bunched leaves; stunted plants.",
      "question": "Are the young leaves small and bunched, with pale stripes or patches between the veins?",
      "keywords": [
        "zinc deficiency",
        "zinc ki kami",
        "khaira",
        "white bud",
        "little leaf",
        "chote patte",
        "patte sikurna",
        "safed dhariyan",
        "patton par safed patti",
        "zinc",
        "zinc sulphate",
        "rosette",
        "زنک کی کمی",
        "کھیرا",
        "چھوٹے پتے",
        "پتے سکڑنا",
        "گچھے دار پتے",
        "سفید دھاریاں",
        "پتوں پر سفید پٹی",
        "رگوں کے درمیان پیلا",
        "زنک سلفیٹ",
        "مکئی کے پتے سفید",
        "کینو کے چھوٹے پتے",
        "زنک"
      ],
      "chips": [
        "p_interveinal",
        "p_small_leaves",
        "p_stunted"
      ],
      "todo": [
        "Compare the leaves: zinc shortage shows on young and middle leaves, nitrogen shortage on the oldest leaves",
        "Ask your agriculture officer or a soil testing lab to confirm with a soil or leaf test",
        "Apply zinc (for example zinc sulphate) to the soil or as a foliar spray only as advised by your agriculture department for your crop",
        "Remember that a foliar spray works fastest for the current crop, while soil application also helps later crops"
      ],
      "dont": [
        "Don't keep adding more phosphate or nitrogen to 'green up' the crop; it can make zinc shortage worse"
      ]
    },
    {
      "slug": "wheat-stem-rust",
      "name": "Stem (Black) Rust of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Long, dark reddish-brown powdery pustules on wheat stems and leaves that tear open the plant skin.",
      "question": "Are there long, dark reddish-brown powdery pustules on the stems that tear open the plant skin?",
      "keywords": [
        "stem rust",
        "black rust",
        "kali kungi",
        "kaali kungi",
        "tanay ki kungi",
        "tana kungi",
        "kungi",
        "zang",
        "gandum kungi",
        "Ug99",
        "laal bhoora powder",
        "tana kamzor",
        "کالی کنگی",
        "تنے کی کنگی",
        "کنگی",
        "زنگ",
        "گندم کی کنگی",
        "تنے پر بھورا پاؤڈر",
        "سرخ بھورے دانے",
        "تنا کمزور",
        "گندم گر گئی",
        "Ug99"
      ],
      "chips": [
        "p_orange_powder",
        "p_brown_spots"
      ],
      "todo": [
        "Check stems and leaf sheaths, not only the leaves, especially in late-sown fields and during warm weather",
        "Rub a pustule: dark reddish-brown powder on your finger and torn plant skin point to stem rust",
        "Contact your agriculture officer quickly; they can confirm it and tell you whether a fungicide recommended by the agriculture department is still worth using at your crop stage",
        "Note the variety, field and date, and give samples if the department asks; this helps national rust surveillance"
      ],
      "dont": [
        "Don't spend money on sprays when the grain is already nearly mature; ask your agriculture officer first"
      ]
    },
    {
      "slug": "wheat-septoria-tritici-blotch",
      "name": "Septoria Tritici Blotch of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Long tan-brown blotches on wheat leaves, speckled with tiny black dots, starting on the lower leaves.",
      "question": "Do the brown patches on the leaves have tiny black dots inside them, like ground pepper?",
      "keywords": [
        "septoria",
        "septoria leaf blotch",
        "leaf blotch",
        "brown patches",
        "black dots",
        "kale nuqte",
        "patton par bhoore dhabbe",
        "patte sookhna",
        "gandum patta jal gaya",
        "dhabbe",
        "phaphoondi",
        "gandum bimari",
        "سپٹوریا",
        "پتوں کے دھبے",
        "بھورے دھبے",
        "بادامی دھبے",
        "کالے نقطے",
        "پتے سوکھنا",
        "گندم کے پتے جل گئے",
        "پھپھوندی",
        "گندم کی بیماری",
        "پتوں پر لمبے دھبے"
      ],
      "chips": [
        "p_brown_spots",
        "p_edge_drying"
      ],
      "todo": [
        "Look closely at the lower and middle leaves; hold a leaf against the light and check for tiny black dots inside the brown patches",
        "Check whether the blotches are reaching the top two leaves, especially the flag leaf",
        "Ask your agriculture officer to confirm the disease and whether a fungicide recommended by the agriculture department is worth using at your crop stage and in the coming weather",
        "Note the variety and field so you can choose a more resistant variety next time"
      ],
      "dont": []
    },
    {
      "slug": "wheat-tan-spot",
      "name": "Tan Spot of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Oval tan spots with a yellow ring and a small dark centre on wheat leaves; spots join into dry patches.",
      "question": "Do the tan spots have a yellow ring around them and a small dark point in the middle?",
      "keywords": [
        "tan spot",
        "yellow leaf spot",
        "leaf spot",
        "diamond spots",
        "peela ghera",
        "badami dhabbe",
        "patton par dhabbe",
        "bhoore dhabbe",
        "patte sookhna",
        "gandum patta",
        "dhabbe",
        "phaphoondi",
        "ٹین سپاٹ",
        "بادامی دھبے",
        "پیلا گھیرا",
        "پتوں پر دھبے",
        "بھورے دھبے",
        "ہیرے جیسے دھبے",
        "پتے سوکھنا",
        "گندم کی بیماری",
        "پھپھوندی",
        "مڈھ"
      ],
      "chips": [
        "p_diamond_spots",
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Look for the yellow ring and the dark centre on spots on the lower and middle leaves",
        "Check whether spots are reaching the flag leaf before the grain has filled",
        "Ask your agriculture officer to confirm the disease and advise whether a fungicide recommended by the agriculture department is needed",
        "Plan to rotate this field away from wheat next season"
      ],
      "dont": []
    },
    {
      "slug": "wheat-spot-blotch",
      "name": "Spot Blotch (Helminthosporium Leaf Blight) of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Dark brown oval spots on wheat leaves that grow and join until leaves dry; worse in warm, humid weather.",
      "question": "Are the spots dark brown and oval, spreading fast in warm, humid weather, with no powder that rubs off?",
      "keywords": [
        "spot blotch",
        "leaf blight",
        "helminthosporium",
        "bipolaris",
        "brown spots",
        "dark spots",
        "patton par bhoore dhabbe",
        "kale dhabbe",
        "patta jhulas gaya",
        "jhulsao",
        "gandum patta sookh gaya",
        "black point",
        "پتوں کا جھلساؤ",
        "جھلساؤ",
        "سپاٹ بلاچ",
        "بھورے دھبے",
        "کالے دھبے",
        "پتے سوکھنا",
        "گندم کے پتے جل گئے",
        "دانے کا سرا کالا",
        "پھپھوندی",
        "گندم کی بیماری"
      ],
      "chips": [
        "p_brown_spots",
        "p_edge_drying"
      ],
      "todo": [
        "Check the lower and middle leaves for dark brown oval spots and see whether they are reaching the flag leaf",
        "Contact your agriculture officer to confirm, because several wheat leaf spots look alike, and ask whether a fungicide recommended by the agriculture department is needed",
        "Do not keep seed from a badly affected field without asking about seed testing and seed treatment",
        "Note the variety, sowing date and fertiliser used, to plan next season"
      ],
      "dont": []
    },
    {
      "slug": "wheat-fusarium-head-blight",
      "name": "Fusarium Head Blight (Scab) of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Parts of green wheat ears turn pale early, often with pink-orange mould at the base of the spikelets.",
      "question": "Are only some spikelets on a green ear bleached, with pink or orange mould at their base?",
      "keywords": [
        "fusarium",
        "head blight",
        "scab",
        "head scab",
        "pink mould",
        "gulabi phaphoondi",
        "safaid sitta",
        "sitta safaid",
        "bali safaid",
        "dana sukra",
        "vomitoxin",
        "gandum sitta bimari",
        "سٹے کا جھلساؤ",
        "سکیب",
        "گلابی پھپھوندی",
        "سفید سٹہ",
        "سٹہ سفید",
        "دانہ سکڑا",
        "زہریلا دانہ",
        "پھپھوندی لگا دانہ",
        "گندم کے سٹے کی بیماری",
        "فیوزیریم"
      ],
      "chips": [
        "p_orange_powder",
        "p_wilting"
      ],
      "todo": [
        "Check ears soon after flowering, especially after rainy or humid spells",
        "Contact your agriculture officer to confirm, because wheat blast and other problems can also make ears white",
        "Harvest badly affected patches separately and keep that grain apart from clean grain",
        "Clean the grain well; the light, shrivelled grains carry most of the poison and can be blown out with the chaff",
        "Dry the grain well before storing, and do not store damp or mouldy grain"
      ],
      "dont": [
        "Don't feed badly scabby or mouldy grain to poultry or livestock, or use it for food, without advice; ask about getting it tested",
        "Don't keep grain from a scabby field as seed"
      ]
    },
    {
      "slug": "wheat-blast",
      "name": "Wheat Blast",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Wheat ears turn white suddenly above a dark spot on the ear stalk while leaves are still green.",
      "question": "Is there a dark patch on the ear stalk, with the whole ear above it turned white while the leaves are still green?",
      "keywords": [
        "wheat blast",
        "blast",
        "white ear",
        "white heads",
        "safaid sitta",
        "sitta sookh gaya",
        "bali safaid",
        "sitta safaid",
        "gandum blast",
        "dana sukra",
        "magnaporthe",
        "bangladesh wheat disease",
        "گندم کا بلاسٹ",
        "بلاسٹ",
        "سفید سٹہ",
        "سٹہ سفید ہو گیا",
        "سٹہ سوکھ گیا",
        "خالی سٹہ",
        "دانہ سکڑا",
        "سٹے کی ڈنڈی کالی",
        "گندم کی نئی بیماری",
        "بنگلہ دیش گندم بیماری"
      ],
      "chips": [
        "p_wilting",
        "p_diamond_spots"
      ],
      "todo": [
        "If you see sudden white ears with a dark patch on the ear stalk, report it at once to your agriculture officer or the agriculture department",
        "Take clear photos of the ears, ear stalks and leaves",
        "Do not move plants or grain out of the field until the department advises you",
        "Follow the department's advice on what to do with the crop and grain; sprays do not help once ears have turned white"
      ],
      "dont": [
        "Don't keep, sell or share seed from a suspected field",
        "Don't bring wheat seed from other countries without official permission"
      ]
    },
    {
      "slug": "wheat-root-rot",
      "name": "Common Root Rot and Foot Rot of Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Fungal (soil and stubble-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Scattered white, empty ears; when pulled up, the stem base and roots of these plants are brown.",
      "question": "When you pull up a plant with a white head, are the stem base and the short stem piece above the seed brown?",
      "keywords": [
        "root rot",
        "foot rot",
        "crown rot",
        "jarh galna",
        "jarain gal gayin",
        "jar ki bimari",
        "safaid sitta",
        "white heads",
        "khali sitta",
        "tana bhoora",
        "pauda sookh gaya",
        "barani gandum",
        "جڑ کی سڑن",
        "جڑیں گل گئیں",
        "تنے کی سڑن",
        "سفید سٹہ",
        "خالی سٹہ",
        "تنا بھورا",
        "پودا سوکھ گیا",
        "بارانی گندم",
        "جڑ کی بیماری",
        "گندم سوکھ رہی ہے"
      ],
      "chips": [
        "p_wilting",
        "p_patches_dry",
        "p_stunted"
      ],
      "todo": [
        "Pull up a few plants with white heads, wash the roots and check the stem base and sub-crown internode for brown colour",
        "Compare them with healthy plants, and also check for termites, insects or cut stems, which can also cause white heads",
        "If you can, irrigate on time during grain filling to reduce stress",
        "Ask your agriculture officer to confirm the cause and to advise on seed treatment and crop rotation for next season"
      ],
      "dont": [
        "Don't spray fungicide on the standing crop for root rot; it does not cure it"
      ]
    },
    {
      "slug": "wheat-mites",
      "name": "Mites on Wheat",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Mite pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny mites cause fine pale speckles, bronzing or rolled leaves on wheat, mostly in dry, water-stressed fields.",
      "question": "Under a hand lens, are there tiny moving mites and fine pale speckles on the leaves?",
      "keywords": [
        "mite",
        "mites",
        "wheat mite",
        "brown wheat mite",
        "curl mite",
        "jooen",
        "jooan",
        "choti jooen",
        "patta peela",
        "patte par nuqte",
        "patta murr gaya",
        "wheat streak mosaic",
        "khushki",
        "patte jhulse",
        "جوئیں",
        "جوں",
        "مائٹ",
        "گندم کی جوئیں",
        "پتوں پر نقطے",
        "پتے پیلے",
        "پتے تانبے جیسے",
        "پتے مڑ گئے",
        "پیلی لکیریں",
        "خشکی",
        "گندم کے پتے جل گئے"
      ],
      "chips": [
        "p_silvery",
        "p_yellowing",
        "p_curled",
        "p_mosaic",
        "p_insects"
      ],
      "todo": [
        "Tap a few plants over white paper or use a hand lens to look for tiny moving mites, best on a warm afternoon",
        "Unroll curled leaves and look for tiny white mites inside",
        "Give a timely irrigation if the crop is water-stressed; this often relieves brown wheat mite damage",
        "Ask your agriculture officer before any spray; sprays are usually not needed, and they do not stop the virus spread by curl mites"
      ],
      "dont": [
        "Don't spray insecticides again and again; this can make mite problems worse"
      ]
    },
    {
      "slug": "rice-sheath-blight",
      "name": "Sheath Blight of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Oval grey-green patches on the stem near the water line that grow into a 'snake-skin' pattern.",
      "question": "Do the spots start on the lower stem near the water line and have grey-white centres with brown edges?",
      "keywords": [
        "sheath blight",
        "dhan ka tana",
        "tanay par dhabbe",
        "tana jhulsao",
        "sanp ki khal",
        "snake skin",
        "saanp jaisi",
        "tane par dhabbay",
        "sheath",
        "dhan gir gaya",
        "pani ke paas dhabbe",
        "dhan bimari",
        "chawal ki bimari",
        "rhizoctonia",
        "شیتھ بلائٹ",
        "تنے کا جھلساؤ",
        "غلاف کا جھلساؤ",
        "دھان کے تنے پر دھبے",
        "سانپ کی کھال",
        "سرمئی دھبے",
        "دھان گر گیا",
        "پانی کے پاس دھبے",
        "دھان کی بیماری",
        "چاول کی بیماری"
      ],
      "chips": [
        "p_dark_wet",
        "p_brown_spots",
        "p_patches_dry",
        "p_wilting"
      ],
      "todo": [
        "From late tillering, walk into the field, part the plants and check the lower stems near the water line",
        "Mark the patches where you find it and check every few days how fast it climbs up the plant",
        "Do not add more nitrogen fertiliser while the disease is spreading",
        "Stop water from an infected field flowing into healthy fields",
        "If the disease is climbing towards the upper leaves before or at heading, ask your agriculture officer whether a fungicide is needed and which one is recommended"
      ],
      "dont": []
    },
    {
      "slug": "rice-bacterial-leaf-streak",
      "name": "Bacterial Leaf Streak of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Narrow, water-soaked streaks between the leaf veins that turn yellow-brown, often with tiny amber droplets.",
      "question": "Are there narrow see-through streaks between the veins with tiny amber droplets on them?",
      "keywords": [
        "leaf streak",
        "bacterial leaf streak",
        "dhariyan",
        "patte par dhariyan",
        "pani wali dhariyan",
        "dhan ki dhariyan",
        "patta bhoora",
        "bacterial bimari",
        "jhulsao",
        "chawal ke patte",
        "لیف سٹریک",
        "بیکٹیریائی دھاریاں",
        "پتوں پر دھاریاں",
        "پانی والی دھاریاں",
        "دھان کی دھاریاں",
        "بھورے پتے",
        "سنہری قطرے",
        "جھلساؤ",
        "دھان کی بیماری"
      ],
      "chips": [
        "p_dark_wet",
        "p_yellowing",
        "p_brown_spots"
      ],
      "todo": [
        "Hold a leaf against the light: thin see-through streaks between the veins point to leaf streak",
        "Look for small amber droplets on the streaks early in the morning",
        "Hold back extra nitrogen while the disease is active",
        "Keep leaffolder and hispa damage in check, because their wounds let the bacteria in",
        "Contact your agriculture officer to confirm; sprays have only limited effect on bacterial diseases"
      ],
      "dont": []
    },
    {
      "slug": "rice-bacterial-panicle-blight",
      "name": "Bacterial Panicle Blight of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Groups of panicles stay upright with pale, empty grains that are brown at the base, while the stems stay green.",
      "question": "Are there patches of upright panicles with empty grains whose stems are still green?",
      "keywords": [
        "panicle blight",
        "grain rot",
        "khali dane",
        "khaali sitta",
        "sitta seedha",
        "daana nahi bhara",
        "dhan ke dane kale",
        "dhan ka sitta",
        "bacterial",
        "beej se bimari",
        "پینیکل بلائٹ",
        "خالی دانے",
        "خالی سٹہ",
        "سیدھا سٹہ",
        "دانہ نہیں بھرا",
        "دانے کالے",
        "دانے کا گلنا",
        "دھان کا سٹہ",
        "بیج سے بیماری"
      ],
      "chips": [
        "p_fruit_spots",
        "p_patches_dry",
        "p_rot"
      ],
      "todo": [
        "At heading, compare upright pale panicles with healthy ones that bend under the weight of grain",
        "Check the stems: a green stem under an upright, empty panicle points to panicle blight",
        "Take photos and samples to your agriculture officer or a plant disease laboratory to confirm",
        "Do not keep seed from affected fields for the next crop"
      ],
      "dont": []
    },
    {
      "slug": "rice-leaf-scald",
      "name": "Leaf Scald of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Large banded tan and brown patches spreading from leaf tips or edges, so the leaves look scorched.",
      "question": "Do the lesions start at the leaf tip and show alternating bands of light tan and dark brown?",
      "keywords": [
        "leaf scald",
        "scald",
        "patta jhulsa",
        "nok jal gayi",
        "patte ki nok sookh gayi",
        "patte jal gaye",
        "bhoori dhariyan",
        "dhan ke patte",
        "jhulsao",
        "chawal patta",
        "لیف سکالڈ",
        "پتہ جھلس گیا",
        "نوک جل گئی",
        "پتے کی نوک سوکھنا",
        "پتے جل گئے",
        "بھوری پٹیاں",
        "دھان کے پتے",
        "جھلساؤ",
        "سنہری کھیت"
      ],
      "chips": [
        "p_edge_drying",
        "p_target_spots",
        "p_brown_spots"
      ],
      "todo": [
        "Look closely at the leaf tips: banded tan and brown zones point to leaf scald",
        "Stop extra nitrogen top dressing while the disease is spreading",
        "Show affected leaves to your agriculture officer to confirm, because it can look like bacterial leaf blight",
        "If it spreads quickly before heading, ask whether a fungicide recommended by your agriculture department is needed"
      ],
      "dont": []
    },
    {
      "slug": "rice-hispa",
      "name": "Rice Hispa",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "White parallel streaks scraped on rice leaves and blister-like mines, with small dark spiny beetles.",
      "question": "Are there small dark spiny beetles on leaves that have white scraped streaks?",
      "keywords": [
        "hispa",
        "rice hispa",
        "dhan ki bhundi",
        "kante wali bhundi",
        "safed dhariyan",
        "patte safed",
        "patte khurche",
        "dhan ka keera",
        "leaf miner",
        "sookha patta",
        "ہسپا",
        "رائس ہسپا",
        "دھان کی بھونڈی",
        "کانٹے دار بھونڈی",
        "سفید دھاریاں",
        "پتے سفید",
        "پتے کھرچے ہوئے",
        "دھان کا کیڑا",
        "پتے کی سرنگ",
        "جلا ہوا کھیت"
      ],
      "chips": [
        "p_silvery",
        "p_tunnels",
        "p_insects"
      ],
      "todo": [
        "Check the leaves for white streaks and look for the spiny beetles",
        "Hold a damaged leaf against the light to see grubs or pupae inside the blisters",
        "Catch adults with a sweep net again and again, and destroy them",
        "If the attack is heavy, skip the next nitrogen top dressing",
        "Spray only if beetles are many (Indian guidance uses about two adults per hill), and only with an insecticide recommended by your agriculture department"
      ],
      "dont": []
    },
    {
      "slug": "rice-leaffolder",
      "name": "Rice Leaffolder",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Rice leaves folded lengthwise and tied with silk, with a green caterpillar inside and white scraped streaks.",
      "question": "Are leaves folded lengthwise and tied with silk, with a caterpillar inside?",
      "keywords": [
        "leaf folder",
        "leaffolder",
        "patta lapait sundi",
        "patta lapet sundi",
        "patta lapait",
        "dhan ki sundi",
        "patte mur gaye",
        "safed patte",
        "patta band",
        "dhan keera",
        "basmati sundi",
        "پتہ لپیٹ سنڈی",
        "پتا لپیٹ سنڈی",
        "لیف فولڈر",
        "دھان کی سنڈی",
        "لپٹے پتے",
        "سفید پتے",
        "پتے مڑ گئے",
        "باسمتی کی سنڈی",
        "دھان کا کیڑا"
      ],
      "chips": [
        "p_caterpillars",
        "p_silvery",
        "p_curled"
      ],
      "todo": [
        "Check the upper leaves every week from tillering, especially in August and September",
        "Open some folded leaves to see whether live caterpillars are still inside",
        "Avoid sprays in the early crop stages; young plants usually recover from leaf damage",
        "Do not add extra nitrogen during an attack",
        "If many fresh folds with live caterpillars are found at booting or heading, ask your agriculture officer whether a spray is needed and which insecticide is recommended"
      ],
      "dont": []
    },
    {
      "slug": "rice-tungro",
      "name": "Rice Tungro Disease",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Young rice plants stunted with fewer tillers, and leaves turning yellow to orange from the tips.",
      "question": "Are young plants stunted with yellow-orange leaves from the tip, and are green leafhoppers present?",
      "keywords": [
        "tungro",
        "dhan peela",
        "dhan ka patta peela",
        "narangi patte",
        "qad chhota",
        "dhan chhota reh gaya",
        "hara tela",
        "leafhopper",
        "virus",
        "patte zard",
        "ٹنگرو",
        "دھان پیلا",
        "دھان کے پتے پیلے",
        "نارنجی پتے",
        "قد چھوٹا",
        "دھان چھوٹا رہ گیا",
        "سبز تیلا",
        "وائرس",
        "پتے زرد"
      ],
      "chips": [
        "p_yellowing",
        "p_stunted",
        "p_insects"
      ],
      "todo": [
        "Look for green leafhoppers on the yellowing plants",
        "Ask your agriculture officer to check whether it is tungro or a zinc or nitrogen shortage",
        "Pull out and destroy clearly infected plants in the nursery and young crop",
        "Do not expect a spray to cure infected plants; insecticides often fail because leafhoppers keep moving in from other fields"
      ],
      "dont": []
    },
    {
      "slug": "cotton-bacterial-blight",
      "name": "Bacterial Blight of Cotton",
      "type": "plant",
      "hosts": [
        "cotton"
      ],
      "hostLabel": "Cotton",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Angular, water-soaked leaf spots that turn black, black stem lesions ('black arm') and sunken spots on bolls.",
      "question": "Are the leaf spots angular, water-soaked at first and limited by the veins?",
      "keywords": [
        "bacterial blight",
        "angular leaf spot",
        "black arm",
        "kapas ka jhulsao",
        "kapas ke patton par kale dhabbe",
        "kale dhabbe",
        "tinda galna",
        "tinday kharab",
        "kapas bimari",
        "kali shakh",
        "cotton blight",
        "بیکٹیریائی جھلساؤ",
        "بلیک آرم",
        "کونے دار دھبے",
        "کپاس کے پتوں پر کالے دھبے",
        "کالے دھبے",
        "ٹینڈے کا گلنا",
        "کالی شاخ",
        "کپاس کی بیماری",
        "کالی رگیں"
      ],
      "chips": [
        "p_dark_wet",
        "p_brown_spots",
        "p_fruit_spots",
        "p_rot"
      ],
      "todo": [
        "After rain, check the underside of leaves for angular, water-soaked spots",
        "Avoid working in the field while the plants are wet",
        "Where only a few seedlings or plants are affected, pull them out and destroy them away from the field",
        "Contact your agriculture officer to confirm, and ask whether a spray recommended by the agriculture department is worthwhile; sprays only protect, they do not cure",
        "Mark affected fields so that seed is not saved from them"
      ],
      "dont": []
    },
    {
      "slug": "herbicide-damage",
      "name": "Herbicide (Weedkiller) Drift Damage",
      "type": "plant",
      "hosts": [
        "cotton",
        "tomato",
        "brinjal",
        "chili",
        "okra",
        "cucurbits",
        "potato",
        "cabbage"
      ],
      "hostLabel": "Cotton, Vegetables & other broadleaf crops",
      "causeType": "Chemical injury (not infectious)",
      "urgency": "",
      "zoonotic": false,
      "short": "New leaves twisted, cupped, narrow strap-like or fan-shaped after weedkiller spray drifts onto the crop.",
      "question": "Are the new leaves twisted, narrow or fan-shaped soon after weedkiller was sprayed nearby?",
      "keywords": [
        "herbicide damage",
        "weedicide",
        "weedkiller",
        "2,4-D",
        "spray drift",
        "zehar ka asar",
        "spray se nuqsan",
        "jari booti maar zehar",
        "nadeen kush",
        "patte tedhe",
        "patte mur gaye",
        "kapas ke patte",
        "drift",
        "جڑی بوٹی مار زہر",
        "سپرے کا اثر",
        "زہر کا اثر",
        "سپرے اڑ کر آیا",
        "پتے مڑ گئے",
        "ٹیڑھے پتے",
        "پنکھے جیسے پتے",
        "کپاس کے پتے مڑ گئے",
        "ویڈی سائیڈ",
        "سپرے سے نقصان"
      ],
      "chips": [
        "p_curled",
        "p_malformed",
        "p_small_leaves",
        "p_stunted",
        "p_fruit_drop"
      ],
      "todo": [
        "Note the date, the pattern of damage and any recent weedkiller spraying nearby or with your own sprayer",
        "Take photos and compare the damaged side of the field with the far side",
        "Keep caring for the crop normally with water, fertiliser and pest control so that it can recover",
        "Watch the new growth over the next few weeks; normal new leaves mean the plant is recovering",
        "Ask your agriculture officer to confirm, especially if a large area is affected or it might be a virus"
      ],
      "dont": [
        "Don't spray fungicides, insecticides or extra fertiliser to 'cure' it; they will not help",
        "Don't pull out the crop too early; mildly affected plants often recover",
        "Don't use a weedkiller sprayer on crops without cleaning it thoroughly first"
      ]
    },
    {
      "slug": "cotton-leaf-reddening",
      "name": "Leaf Reddening of Cotton",
      "type": "plant",
      "hosts": [
        "cotton"
      ],
      "hostLabel": "Cotton",
      "causeType": "Nutrient and stress disorder",
      "urgency": "",
      "zoonotic": false,
      "short": "Cotton leaves turn red or reddish-brown, starting on older leaves, often at boll development.",
      "question": "Are the older leaves turning red evenly across the field, without curling or insects under the leaves?",
      "keywords": [
        "leaf reddening",
        "red leaf",
        "kapas ke patte lal",
        "laal patte",
        "patte surkh",
        "surkhi",
        "patta lal",
        "magnesium ki kami",
        "potash ki kami",
        "cotton red leaves",
        "kapas laal",
        "پتوں کی سرخی",
        "کپاس کے پتے لال",
        "لال پتے",
        "سرخ پتے",
        "پتے سرخ ہو گئے",
        "میگنیشیم کی کمی",
        "پوٹاش کی کمی",
        "کپاس کی سرخی",
        "نائٹروجن کی کمی"
      ],
      "chips": [
        "p_old_leaves_yellow",
        "p_interveinal",
        "p_yellowing",
        "p_edge_drying"
      ],
      "todo": [
        "Look under the leaves for jassids and check the top leaves for curling, to rule out pests and virus",
        "Check whether the field is too dry or waterlogged, and correct the irrigation",
        "Have soil and leaf samples tested at a soil testing laboratory to find which nutrient is short",
        "Ask your agriculture officer which fertiliser or nutrient spray suits your field; nutrient sprays at boll development are often advised"
      ],
      "dont": []
    },
    {
      "slug": "maize-common-rust",
      "name": "Common Rust of Maize",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize (Corn)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Small brick-red to cinnamon-brown powdery pustules scattered on both sides of maize leaves.",
      "question": "Does rusty-brown powder rub off from small raised pustules on both sides of the leaf?",
      "keywords": [
        "common rust",
        "maize rust",
        "corn rust",
        "makai ki kungi",
        "makki kungi",
        "kungi",
        "zang",
        "bhoora powder",
        "patton par dhabbe",
        "makai ke patte",
        "rust spots",
        "brown powder on leaves",
        "مکئی کی کنگی",
        "کنگی",
        "زنگ",
        "بھورا پاؤڈر",
        "مکئی کے پتوں پر دھبے",
        "پتوں پر بھورے دانے",
        "مکئی کی بیماری",
        "سرخ بھورے دانے",
        "مکئی کے پتے پیلے",
        "ہاتھ پر بھورا رنگ لگنا"
      ],
      "chips": [
        "p_orange_powder",
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Walk the field and check how many plants have pustules and whether the leaves above the cob are affected",
        "Rub a spotted leaf: rusty-brown powder on your fingers confirms a rust",
        "If many plants are infected before tasselling and the weather stays cool and damp, ask your agriculture officer whether a fungicide is worth spraying and which product is approved",
        "If only a few lower leaves are spotted late in the season, a spray is usually not needed",
        "Note the variety, sowing date and when rust appeared, to choose a better variety next time"
      ],
      "dont": []
    },
    {
      "slug": "maize-gray-leaf-spot",
      "name": "Gray Leaf Spot of Maize",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize (Corn)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Long, narrow, rectangular grey-tan spots boxed in by the veins of maize leaves, starting on lower leaves.",
      "question": "Are the spots long and rectangular, with straight sides that stop at the leaf veins?",
      "keywords": [
        "gray leaf spot",
        "grey leaf spot",
        "GLS",
        "cercospora",
        "makai ke patton par dhabbe",
        "lambe dhabbe",
        "surmai dhabbe",
        "makki",
        "patte sookh rahe",
        "maize leaf spot",
        "corn leaf spot",
        "سرمئی دھبہ",
        "مکئی کے پتوں پر دھبے",
        "لمبے دھبے",
        "چوکور دھبے",
        "مکئی کے پتے سوکھنا",
        "مکئی کی بیماری",
        "سرمئی بادامی دھبے",
        "نیچے کے پتے سوکھ گئے",
        "گرے لیف سپاٹ"
      ],
      "chips": [
        "p_brown_spots"
      ],
      "todo": [
        "Check the lower leaves a few weeks before tasselling for long, straight-sided grey-tan spots",
        "Note how high on the plant the spots have reached; damage matters most when the leaves around and above the cob are infected",
        "If spots are climbing towards the cob leaf in humid weather, ask your agriculture officer whether a fungicide spray is worthwhile and which product is approved",
        "After harvest, do not leave infected stalks lying on the surface; plough them in or remove them"
      ],
      "dont": []
    },
    {
      "slug": "maize-northern-leaf-blight",
      "name": "Northern Leaf Blight of Maize (Turcicum Leaf Blight)",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize (Corn)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Long, cigar-shaped grey-green to tan spots on maize leaves, starting on the lower leaves.",
      "question": "Are the spots long and cigar-shaped (wide in the middle, pointed at both ends) and several centimetres long?",
      "keywords": [
        "northern leaf blight",
        "turcicum leaf blight",
        "NLB",
        "leaf blight",
        "makai ka jhulsao",
        "makki ke patte jal gaye",
        "lambe dhabbe",
        "lambay dhabbay",
        "sigar jaise",
        "patte sookh gaye",
        "jhulsa",
        "maize blight",
        "corn blight",
        "cigar",
        "مکئی کا جھلساؤ",
        "پتوں کا جھلساؤ",
        "ٹرسیکم",
        "لمبے دھبے",
        "سگار جیسے دھبے",
        "مکئی کے پتے جل گئے",
        "مکئی کے پتے سوکھ گئے",
        "مکئی کی بیماری",
        "سرمئی دھبے",
        "پہاڑی مکئی"
      ],
      "chips": [
        "p_brown_spots"
      ],
      "todo": [
        "Check the lower leaves for cigar-shaped grey-green or tan spots, especially after rainy spells",
        "Estimate how many plants are affected and whether spots have reached the cob leaf and above",
        "If the disease starts before tasselling and wet weather continues, ask your agriculture officer whether a fungicide is needed and which product is approved",
        "Note the variety; a resistant variety is the main long-term answer"
      ],
      "dont": []
    },
    {
      "slug": "maize-streak-virus",
      "name": "Maize Streak Virus",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize (Corn)",
      "causeType": "Viral (spread by leafhoppers)",
      "urgency": "",
      "zoonotic": false,
      "short": "Thin, broken yellow-white streaks along the veins of young maize leaves; plants stunted. Rare in Pakistan.",
      "question": "Are the streaks thin and broken like dotted lines along the veins of young leaves, on stunted plants?",
      "keywords": [
        "maize streak",
        "streak virus",
        "MSV",
        "makai virus",
        "makai ke patton par lakeeren",
        "safed dhariyan",
        "peeli dhariyan",
        "patte dhaari daar",
        "makki",
        "leafhopper",
        "tela",
        "virus",
        "مکئی کا وائرس",
        "سٹریک وائرس",
        "مکئی کے پتوں پر لکیریں",
        "سفید دھاریاں",
        "پیلی دھاریاں",
        "دھاری دار پتے",
        "مکئی کے پودے چھوٹے",
        "لیف ہاپر",
        "مکئی کی بیماری"
      ],
      "chips": [
        "p_mosaic",
        "p_stunted",
        "p_yellowing"
      ],
      "todo": [
        "First rule out more common causes in Pakistan, such as zinc deficiency, magnesium deficiency or mosaic viruses",
        "Look closely in the whorl and on the leaves for small leafhoppers that jump or fly off when disturbed",
        "Take clear photos and a few affected leaves to your agriculture officer, or report it to the agriculture department for testing",
        "Pull out and destroy clearly streaked, stunted young plants so they do not act as a source",
        "Keep grassy weeds down in and around the field"
      ],
      "dont": [
        "Don't spray insecticides before the cause has been confirmed by an expert"
      ]
    },
    {
      "slug": "maize-curvularia-leaf-spot",
      "name": "Curvularia Leaf Spot of Maize",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize (Corn)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Small round spots with a straw-coloured centre, darker edge and yellow halo on maize leaves.",
      "question": "Are the spots small and round, with a light centre and a yellow halo when held up to the light?",
      "keywords": [
        "curvularia",
        "curvularia leaf spot",
        "maize leaf spot",
        "corn leaf spot",
        "makai ke patton par gol dhabbe",
        "chhote dhabbe",
        "peela ghera",
        "makki",
        "dhabbe",
        "patte par nishan",
        "مکئی کے پتوں پر گول دھبے",
        "چھوٹے دھبے",
        "پیلا گھیرا",
        "کروولیریا",
        "مکئی کی بیماری",
        "پتوں پر نشان",
        "بھورے دھبے",
        "مکئی کے پتے سوکھنا"
      ],
      "chips": [
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Hold a leaf up to the light and look for small round spots with a yellow halo",
        "Check whether the spots stay small and round (Curvularia) or grow long and rectangular (gray leaf spot)",
        "If spots are covering much of the upper leaves before the grain fills, ask your agriculture officer whether a fungicide is needed and which product is approved",
        "Note the variety and how badly it is affected, to choose a better variety next time"
      ],
      "dont": []
    },
    {
      "slug": "grasshoppers",
      "name": "Grasshoppers and Locusts on Crops",
      "type": "plant",
      "hosts": [
        "maize",
        "wheat",
        "rice",
        "cotton",
        "sugarcane",
        "chickpea"
      ],
      "hostLabel": "Maize, Rice, Wheat, Cotton & Most Crops",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Leaves chewed from the edges, leaving ragged holes or only midribs; large jumping insects in the crop.",
      "question": "Do large jumping insects with strong back legs fly up from the crop when you walk through it?",
      "keywords": [
        "grasshopper",
        "locust",
        "tiddi",
        "tiddi dal",
        "tidda",
        "tiddiyan",
        "tiddi ka hamla",
        "desert locust",
        "patte kha gaye",
        "patte khaye hue",
        "keera",
        "makai ke patte kha gaye",
        "fasal kha gaya",
        "ٹڈی",
        "ٹڈی دل",
        "ٹڈا",
        "ٹڈیاں",
        "ٹڈی کا حملہ",
        "صحرائی ٹڈی",
        "پتے کھا گئے",
        "فصل کھا گئی",
        "مکئی کے پتے کھا گئے",
        "اچھلنے والا کیڑا",
        "محکمہ تحفظ نباتات"
      ],
      "chips": [
        "p_holes",
        "p_insects"
      ],
      "todo": [
        "Walk the field in the morning and check the leaf edges and the ground for hoppers",
        "If you see a locust swarm or a band of hoppers, report it immediately to your local agriculture department office or the Department of Plant Protection, with the place, date and size",
        "For ordinary grasshoppers, dig or rake the soil of bunds and field edges to destroy the egg pods",
        "Clear grassy weeds from bunds, field edges and water channels",
        "If grasshoppers are many and damage is spreading, ask your agriculture officer whether a spray is needed and which insecticide is approved; sprays work best in the early morning or late afternoon when the insects are settled",
        "Keep people and animals away from fields treated by locust teams, and follow their advice before grazing or harvesting"
      ],
      "dont": [
        "Don't try to fight a locust swarm alone with your own sprays; report it so trained teams can act",
        "Don't eat, sell or feed to animals any locusts collected from sprayed areas"
      ]
    },
    {
      "slug": "cole-downy-mildew",
      "name": "Downy Mildew of Cabbage and Cauliflower",
      "type": "plant",
      "hosts": [
        "cabbage",
        "mustard"
      ],
      "hostLabel": "Cabbage, Cauliflower & Mustard",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Yellow angular patches on top of cabbage-family leaves, with grey-white downy growth underneath.",
      "question": "Is there grey-white downy growth on the underside of the leaf, under yellow patches on top?",
      "keywords": [
        "downy mildew",
        "cabbage downy mildew",
        "cauliflower disease",
        "gobhi ki bimari",
        "phool gobhi",
        "band gobhi",
        "patte peele",
        "neeche safed phaphoondi",
        "nursery ki bimari",
        "sarson",
        "phaphoondi",
        "gobhi ke patte",
        "روئیں دار پھپھوندی",
        "گوبھی کی بیماری",
        "پھول گوبھی",
        "بند گوبھی",
        "سرسوں",
        "پتوں کے نیچے سفید تہہ",
        "پیلے دھبے",
        "پنیری کی بیماری",
        "نرسری مر رہی ہے",
        "پھپھوندی",
        "ڈاؤنی ملڈیو"
      ],
      "chips": [
        "p_yellowing",
        "p_white_powder",
        "p_brown_spots"
      ],
      "todo": [
        "Check the underside of seedling leaves early in the morning for grey-white downy growth",
        "Remove and destroy badly infected seedlings and trays; do not transplant them",
        "Water so that the leaves dry quickly; avoid watering in the early morning, and give one deep watering rather than many light ones",
        "Thin crowded nursery beds to let air move between plants",
        "If the disease is spreading in cool, damp weather, ask your agriculture officer which fungicide is approved for downy mildew and when to use it"
      ],
      "dont": [
        "Don't sprinkle water over the leaves late in the day when they will stay wet all night"
      ]
    },
    {
      "slug": "date-palm-black-scorch",
      "name": "Black Scorch of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Hard black, charcoal-like burnt patches on date palm fronds, flower stalks or bud; the heart may rot or bend.",
      "question": "Are there hard, black, charcoal-like burnt patches on the fronds, flower stalks or heart?",
      "keywords": [
        "black scorch",
        "date palm disease",
        "khajoor ki bimari",
        "khajoor",
        "khajur",
        "kala jhulsao",
        "jale hue patte",
        "dil ka galna",
        "khajoor ka sir jhuk gaya",
        "medjnoon",
        "fool's disease",
        "bud rot",
        "کھجور کی بیماری",
        "کالا جھلساؤ",
        "بلیک اسکارچ",
        "کھجور کے پتے جل گئے",
        "کھجور کا دل گل گیا",
        "کھجور کی چوٹی جھک گئی",
        "مجنون بیماری",
        "کھجور",
        "گوبھ کا گلاؤ",
        "کالے دھبے"
      ],
      "chips": [
        "p_dieback",
        "p_wilting",
        "p_rot",
        "p_malformed"
      ],
      "todo": [
        "Cut off affected fronds, leaf bases and flower clusters, collect them and burn them away from the palms",
        "Clean pruning tools between palms",
        "Ask your agriculture department which approved fungicide should be sprayed on pruning cuts and the tissue around them",
        "Mark the palm and watch the bud and young fronds for spreading rot",
        "If the heart or bud is badly rotted, remove and burn the palm as advised by experts"
      ],
      "dont": []
    },
    {
      "slug": "date-palm-white-scale",
      "name": "White Scale (Parlatoria) of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny white to grey-brown scales crowded on date palm leaflets and fruit; leaflets yellow, fruit spoiled.",
      "question": "Are there many tiny, hard, white to grey scales fixed on the leaflets or fruit that do not move?",
      "keywords": [
        "date palm scale",
        "white scale",
        "parlatoria",
        "scale insect",
        "khajoor ka keera",
        "khajoor",
        "khajur",
        "safed keera",
        "chhilka keera",
        "patte peele",
        "khajoor ke patton par safed daane",
        "کھجور کا سکیل",
        "سفید سکیل",
        "کھجور کا کیڑا",
        "کھجور کی پتیوں پر سفید دانے",
        "سکیل کیڑا",
        "کھجور کے پتے پیلے",
        "کھجور کا پھل خراب",
        "کھجور",
        "چھلکے والا کیڑا"
      ],
      "chips": [
        "p_insects",
        "p_yellowing",
        "p_old_leaves_yellow",
        "p_fruit_spots"
      ],
      "todo": [
        "Check the leaflets of older fronds and the fruit bunches for crusts of tiny scales",
        "Prune heavily infested old fronds and destroy them away from the orchard",
        "Protect ladybird beetles and other natural enemies that feed on the scale",
        "On young palms with heavy attack, ask the agriculture department whether a spray, such as an approved oil-based spray, is needed and how to apply it safely"
      ],
      "dont": []
    },
    {
      "slug": "sugarcane-rust",
      "name": "Rust of Sugarcane (Brown and Orange Rust)",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Small, long brown or orange pustules on the leaves that leave a rusty powder on your fingers.",
      "question": "When you rub the spots, does a brown or orange powder come off on your fingers?",
      "keywords": [
        "sugarcane rust",
        "brown rust",
        "orange rust",
        "rust on sugarcane leaves",
        "ganna kungi",
        "kungi",
        "ganne ki kungi",
        "patton par zang",
        "zang",
        "ganne ke patte bhoore",
        "kamad",
        "ganne ki bimari",
        "کنگی",
        "گنے کی کنگی",
        "بھوری کنگی",
        "نارنجی کنگی",
        "پتوں پر زنگ",
        "زنگ",
        "گنے کے پتے بھورے",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "پتوں پر پاؤڈر"
      ],
      "chips": [
        "p_orange_powder",
        "p_brown_spots",
        "p_edge_drying"
      ],
      "todo": [
        "Rub a few spotted leaves between your fingers: a rusty powder means rust",
        "Note which variety is attacked and how many plants show pustules",
        "In a light attack, strip off badly rusted lower leaves and burn them away from the field",
        "If the attack is heavy on a weak variety, ask your agriculture officer whether a fungicide spray is needed and which one is recommended",
        "Plan to replace a badly attacked variety with a rust-resistant one"
      ],
      "dont": [
        "Do not spray fungicide without advice; most resistant varieties do not need any spray for rust"
      ]
    },
    {
      "slug": "sugarcane-brown-spot",
      "name": "Brown Spot of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Oval reddish-brown spots with a yellow halo on older leaves; badly hit leaves turn yellow and dry.",
      "question": "Are the spots oval and reddish-brown with a yellow ring around them, and leave no powder when rubbed?",
      "keywords": [
        "brown spot sugarcane",
        "sugarcane leaf spot",
        "cercospora",
        "oval brown spots",
        "ganne ke patton par bhoore dhabbe",
        "bhoore dhabbe",
        "dhabbe",
        "patte peele",
        "patte sookh rahe",
        "kamad",
        "ganne ki bimari",
        "بھورے دھبے",
        "گنے کے پتوں پر دھبے",
        "براؤن سپاٹ",
        "پیلا گھیرا",
        "پتے پیلے",
        "پتے سوکھنا",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "دھبوں والے پتے"
      ],
      "chips": [
        "p_brown_spots",
        "p_old_leaves_yellow",
        "p_yellowing",
        "p_edge_drying"
      ],
      "todo": [
        "Check the older leaves for oval brown spots with a yellow halo, and note which variety is affected",
        "Strip off badly spotted lower leaves and burn or bury them away from the field",
        "Drain standing water so the field does not stay wet",
        "If spots are spreading fast over many plants, ask your agriculture officer whether any spray is needed"
      ],
      "dont": []
    },
    {
      "slug": "sugarcane-pokkah-boeng",
      "name": "Pokkah Boeng (Top Twist) of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Young top leaves are pale at the base, wrinkled and twisted; in bad cases the top rots.",
      "question": "Are the youngest top leaves pale at the base and wrinkled or twisted together?",
      "keywords": [
        "pokkah boeng",
        "pokka boeng",
        "top rot",
        "twisted leaves sugarcane",
        "fusarium",
        "knife cut",
        "choti ka marorh",
        "ganne ki choti mur gayi",
        "patte mure hue",
        "patte safaid",
        "choti gal gayi",
        "kamad",
        "پوکا بوئنگ",
        "چوٹی کا مروڑ",
        "چوٹی کا گلنا",
        "مروڑے ہوئے پتے",
        "گنے کی چوٹی",
        "پتے سکڑنا",
        "سفید پتے",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "فیوزیریم"
      ],
      "chips": [
        "p_malformed",
        "p_curled",
        "p_yellowing",
        "p_dead_heart"
      ],
      "todo": [
        "Look at the youngest leaves for pale bases, wrinkling and twisting",
        "Pull out and destroy plants with top rot or knife-cut stems",
        "Remove dry lower leaves (detrashing) to let air move through the crop",
        "Give balanced fertiliser and micronutrients as advised by your agriculture department",
        "If many plants show top rot, ask your agriculture officer whether a fungicide spray is needed and which one is recommended"
      ],
      "dont": [
        "Do not take setts from affected plants for planting"
      ]
    },
    {
      "slug": "sugarcane-grassy-shoot",
      "name": "Grassy Shoot Disease of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Phytoplasma (bacteria-like)",
      "urgency": "",
      "zoonotic": false,
      "short": "A clump with many thin, grass-like white or yellow shoots; canes stay short and thin.",
      "question": "Does the clump have many thin, white or pale yellow grass-like shoots, with no black whip?",
      "keywords": [
        "grassy shoot",
        "GSD",
        "phytoplasma",
        "white shoots sugarcane",
        "many thin tillers",
        "ghaas jaisa ganna",
        "ganna ghaas ban gaya",
        "safaid patte",
        "patle shoots",
        "chhota ganna",
        "kamad",
        "ganne ki bimari",
        "گراسی شوٹ",
        "گھاس نما شاخیں",
        "گنا گھاس بن گیا",
        "سفید پتے",
        "پتلی شاخیں",
        "چھوٹا گنا",
        "فائٹوپلازما",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "تیلا"
      ],
      "chips": [
        "p_small_leaves",
        "p_stunted",
        "p_yellowing",
        "p_malformed"
      ],
      "todo": [
        "Mark and count the clumps with grassy shoots",
        "Dig out diseased clumps with their roots and burn them",
        "In a young crop, fill the gaps with healthy plants",
        "Do not take seed cane from this field",
        "Ask your agriculture officer whether to keep the ratoon and whether leafhopper control is needed"
      ],
      "dont": [
        "Do not ratoon a crop with many grassy-shoot clumps"
      ]
    },
    {
      "slug": "sugarcane-yellow-leaf",
      "name": "Yellow Leaf Disease of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "The midrib turns yellow on the underside of the upper leaves; yellowing spreads and leaves dry from the tip.",
      "question": "When you turn over an upper leaf, is the midrib bright yellow on the underside?",
      "keywords": [
        "yellow leaf",
        "YLD",
        "SCYLV",
        "yellow midrib",
        "sugarcane yellowing",
        "ganne ke patte peele",
        "beech ki rag peeli",
        "patta peela",
        "tela",
        "aphid",
        "kamad",
        "ganne ka virus",
        "پیلے پتے",
        "گنے کے پتے پیلے",
        "درمیانی رگ پیلی",
        "یلو لیف",
        "گنے کا وائرس",
        "سست تیلا",
        "تیلا",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "پتے سوکھنا"
      ],
      "chips": [
        "p_yellowing",
        "p_old_leaves_yellow",
        "p_stunted",
        "p_insects"
      ],
      "todo": [
        "Turn over a few upper leaves and look for a yellow midrib on the underside",
        "Check the underside of leaves for aphids",
        "Give balanced fertiliser as advised so the plants are not stressed",
        "Do not take seed cane from this field",
        "Ask your agriculture officer to confirm, because a virus usually needs a laboratory test to be sure",
        "If aphids are many, ask your agriculture officer whether control is needed"
      ],
      "dont": [
        "Do not rely on hot-water treatment of setts to remove this virus; it does not"
      ]
    },
    {
      "slug": "sugarcane-mosaic",
      "name": "Mosaic of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Young leaves show light and dark green patches running along the leaf; clumps look yellow-green.",
      "question": "Are there light and dark green patches running along the young leaves, clearest near the leaf base?",
      "keywords": [
        "sugarcane mosaic",
        "mosaic virus",
        "SCMV",
        "mottled leaves",
        "ganne ka virus",
        "mosaic",
        "patte chitkabre",
        "patton par dhariyan",
        "halka hara peela patta",
        "tela",
        "kamad",
        "ganne ki bimari",
        "موزیک",
        "موزیک وائرس",
        "گنے کا وائرس",
        "چتکبرے پتے",
        "پتوں پر دھاریاں",
        "ہلکے سبز پتے",
        "سست تیلا",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "پیلے سبز پتے"
      ],
      "chips": [
        "p_mosaic",
        "p_yellowing",
        "p_stunted"
      ],
      "todo": [
        "Look at the base of young leaves for light and dark green patches",
        "In a small or new outbreak, dig out and destroy infected clumps (roguing)",
        "Do not take seed cane from infected plants",
        "Remove grass weeds in and around the field",
        "Tell your agriculture officer; if many plants are infected, ask about changing the variety"
      ],
      "dont": [
        "Do not ratoon a badly infected crop",
        "Avoid growing maize or sorghum right next to susceptible cane"
      ]
    },
    {
      "slug": "sugarcane-banded-chlorosis",
      "name": "Banded Chlorosis of Sugarcane (Cold Injury)",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Cold injury (not infectious)",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale green to white bands run straight across the leaves, at about the same height on many plants.",
      "question": "Do pale bands run straight across the leaves at about the same height on many plants, a few weeks after cold weather?",
      "keywords": [
        "banded chlorosis",
        "cold injury sugarcane",
        "white bands on leaves",
        "frost damage sugarcane",
        "sardi ka asar",
        "pala",
        "kohra",
        "patton par safaid patti",
        "ganna sardi",
        "kamad",
        "patte par patti",
        "سردی کا اثر",
        "پالا",
        "کہرا",
        "پتوں پر سفید پٹیاں",
        "آڑی پٹیاں",
        "گنے پر سردی",
        "بینڈڈ کلوروسس",
        "کماد",
        "گنے کے پتے سفید"
      ],
      "chips": [
        "p_yellowing"
      ],
      "todo": [
        "Check whether the bands go straight across the leaf and line up at the same height on many plants",
        "Think back: was there a cold spell a few weeks ago?",
        "No spray is needed; give normal care, water and fertiliser",
        "Watch the new leaves; they should come out normal"
      ],
      "dont": [
        "Do not spray fungicides or insecticides for banded chlorosis; it is not caused by a germ or an insect"
      ]
    },
    {
      "slug": "sugarcane-sett-rot",
      "name": "Sett Rot (Pineapple Disease) of Sugarcane",
      "type": "plant",
      "hosts": [
        "sugarcane"
      ],
      "hostLabel": "Sugarcane",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Setts rot after planting: red then black inside, with a pineapple smell; buds fail and gaps appear.",
      "question": "When you split a sett that failed to sprout, is it red to black inside with a pineapple smell?",
      "keywords": [
        "sett rot",
        "pineapple disease",
        "black rot",
        "poor germination sugarcane",
        "seed cane rot",
        "ganna nahi uga",
        "beej gal gaya",
        "ganne ka beej sarr gaya",
        "ankhein nahi phooti",
        "kamad",
        "ganne ki bimari",
        "سیٹس کا گلنا",
        "انناس والی بیماری",
        "گنے کا بیج گل گیا",
        "گنا نہیں اگا",
        "آنکھیں نہیں پھوٹیں",
        "کم اگاؤ",
        "خالی جگہیں",
        "کماد کی بیماری",
        "گنے کی بیماری",
        "بیج والا گنا"
      ],
      "chips": [
        "p_rot",
        "p_wilting",
        "p_stunted",
        "p_yellowing"
      ],
      "todo": [
        "Dig up a few setts from the gaps, split them and check for a red-to-black inside and a pineapple smell",
        "Drain standing water from the field",
        "Fill the gaps with healthy setts, treated as advised by your agriculture department",
        "Collect and burn rotten setts and crop remains",
        "Before the next planting, ask your agriculture officer which fungicide is recommended for sett treatment"
      ],
      "dont": []
    },
    {
      "slug": "tomato-septoria-leaf-spot",
      "name": "Septoria Leaf Spot of Tomato",
      "type": "plant",
      "hosts": [
        "tomato"
      ],
      "hostLabel": "Tomato",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Many small round spots with dark edges, grey centres and tiny black dots, starting on the lowest leaves.",
      "question": "Do the small spots have grey centres with tiny black dots in them?",
      "keywords": [
        "septoria",
        "leaf spot",
        "tomato leaf spots",
        "tamatar",
        "tamatar ke patte",
        "chhote dhabbe",
        "daag",
        "bhoore dhabbe",
        "kale nuqte",
        "neeche ke patte",
        "patte gir rahe",
        "phaphoondi",
        "سپٹوریا",
        "ٹماٹر کے پتوں پر دھبے",
        "چھوٹے دھبے",
        "سرمئی دھبے",
        "کالے نقطے",
        "بھورے دھبے",
        "نیچے کے پتے",
        "پتے پیلے ہو کر گرنا",
        "ٹماٹر کی بیماری",
        "پھپھوندی"
      ],
      "chips": [
        "p_brown_spots",
        "p_yellowing",
        "p_old_leaves_yellow"
      ],
      "todo": [
        "Pick off spotted lower leaves early and carry them out of the field; do not leave them on the ground",
        "Water at the base of the plants (furrow or drip), in the morning, instead of wetting the leaves",
        "Stay out of the crop while leaves are wet so you do not carry spores on hands and clothes",
        "Remove the lowest side shoots and stake the plants so air can move and leaves dry quickly",
        "If spots keep climbing up the plants, ask your agriculture officer whether a fungicide spray is needed and which product is approved"
      ],
      "dont": [
        "Don't leave spotted leaves or old plants lying in or near the field",
        "Don't use overhead watering on a crop that already has spots"
      ]
    },
    {
      "slug": "bacterial-spot-tomato-chilli",
      "name": "Bacterial Spot of Tomato and Chilli",
      "type": "plant",
      "hosts": [
        "tomato",
        "chili"
      ],
      "hostLabel": "Tomato, Chilli & Capsicum",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Small dark, greasy-looking spots on leaves that turn yellow, and raised, scabby spots on the fruit.",
      "question": "Are there raised, rough, scab-like spots on the fruit along with small dark greasy spots on the leaves?",
      "keywords": [
        "bacterial spot",
        "bacterial leaf spot",
        "tamatar",
        "mirch",
        "shimla mirch",
        "kale dhabbe",
        "chhote dhabbe",
        "phal par dhabbe",
        "khurdure dhabbe",
        "patte peele",
        "bacteria",
        "daag",
        "بیکٹیریائی دھبے",
        "ٹماٹر کے پتوں پر کالے دھبے",
        "مرچ کے پتوں پر دھبے",
        "شملہ مرچ",
        "پھل پر کھردرے دھبے",
        "چھوٹے کالے دھبے",
        "پتے پیلے",
        "پتے گرنا",
        "بیکٹیریا",
        "نرسری کی بیماری"
      ],
      "chips": [
        "p_brown_spots",
        "p_dark_wet",
        "p_fruit_spots",
        "p_yellowing"
      ],
      "todo": [
        "Remove and destroy nursery seedlings that have spots; never transplant them",
        "In the field, pull out and destroy badly spotted plants early, and pick off spotted leaves and fruit",
        "Change from overhead watering to furrow or drip, and water in the morning",
        "Do not tie, prune or pick while leaves are wet; wash hands and clean tools after working in affected rows",
        "Ask your agriculture officer whether a copper-based spray suits your crop; it only protects healthy leaves, does not cure spots, and some bacteria are already resistant to copper"
      ],
      "dont": [
        "Don't save seed from a crop that had bacterial spot",
        "Don't keep spraying again and again without advice; no spray cures spots that have already formed"
      ]
    },
    {
      "slug": "bacterial-wilt",
      "name": "Bacterial Wilt of Tomato, Potato, Brinjal and Chilli",
      "type": "plant",
      "hosts": [
        "tomato",
        "potato",
        "brinjal",
        "chili"
      ],
      "hostLabel": "Tomato, Potato, Brinjal & Chilli",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Plants suddenly wilt while the leaves are still green; a cut stem in water gives off milky white threads.",
      "question": "When you put a freshly cut piece of the lower stem in clear water, do milky white threads stream out?",
      "keywords": [
        "bacterial wilt",
        "wilt",
        "sooka",
        "sokha",
        "murjhana",
        "paudha murjha gaya",
        "tamatar sookh gaya",
        "hare patte murjha gaye",
        "aloo",
        "brown rot",
        "aloo andar se bhoora",
        "baingan",
        "mirch sookh gayi",
        "مرجھاؤ",
        "سوکا",
        "بیکٹیریائی مرجھاؤ",
        "پودا مرجھا گیا",
        "ہرے پتے مرجھا گئے",
        "ٹماٹر سوکھ گیا",
        "مرچ سوکھ گئی",
        "بینگن سوکھ گیا",
        "آلو کا بھورا گلاؤ",
        "آلو اندر سے بھورا",
        "دودھیا دھاگے"
      ],
      "chips": [
        "p_wilting",
        "p_rot"
      ],
      "todo": [
        "Do the stem-in-water test on a freshly wilted plant to confirm the cause",
        "Pull out wilted plants with their roots and the soil around them, put them in a bag, and destroy them away from the field",
        "Stop water from running from the affected patch into healthy parts; water the healthy part first or block the channel",
        "Clean tools, shoes and implements after working in the affected patch",
        "Ask your agriculture officer to confirm the problem and advise on the next crop; no chemical spray or soil drench cures bacterial wilt"
      ],
      "dont": [
        "Don't spend money on sprays for this wilt; none of them cures it",
        "Don't take seed potatoes, nursery plants or soil from an affected field to other fields"
      ]
    },
    {
      "slug": "tomato-leaf-mold",
      "name": "Leaf Mold of Tomato",
      "type": "plant",
      "hosts": [
        "tomato"
      ],
      "hostLabel": "Tomato (mainly in tunnels)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale yellow patches on top of tomato leaves with olive-brown velvety mould underneath, mostly in tunnels.",
      "question": "Is there olive-green to brown velvety mould on the underside of the leaf, right under the yellow patches?",
      "keywords": [
        "leaf mold",
        "leaf mould",
        "tunnel tamatar",
        "tunnel farming",
        "patte peele",
        "neeche phaphoondi",
        "bhoori phaphoondi",
        "makhmali tah",
        "tamatar ke patte",
        "namee",
        "fungus",
        "peelay dhabbe",
        "لیف مولڈ",
        "ٹنل ٹماٹر",
        "ٹنل فارمنگ",
        "پتوں کے نیچے پھپھوندی",
        "مخملی تہہ",
        "بھوری پھپھوندی",
        "ٹماٹر کے پتے پیلے",
        "پیلے دھبے",
        "نمی",
        "پھپھوندی"
      ],
      "chips": [
        "p_yellowing",
        "p_old_leaves_yellow",
        "p_brown_spots"
      ],
      "todo": [
        "Open the tunnel sides or ends during the day to let humid air out, especially in the morning after cold nights",
        "Remove lower leaves that have mould and take them out of the tunnel in a bag",
        "Prune extra side shoots and stake or tie plants so air can move between them",
        "Water at the base (drip or furrow) and avoid wetting the leaves",
        "If the mould keeps spreading, ask your agriculture officer whether a fungicide is needed and which one is approved"
      ],
      "dont": [
        "Don't keep tunnels closed all day in mild weather",
        "Don't leave infected leaves lying on the tunnel floor"
      ]
    },
    {
      "slug": "tomato-mosaic-virus",
      "name": "Tomato Mosaic Virus",
      "type": "plant",
      "hosts": [
        "tomato",
        "chili"
      ],
      "hostLabel": "Tomato & Chilli",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Light and dark green mosaic on leaves, puckered or fern-like narrow leaves, and stunted tomato plants.",
      "question": "Are the leaves patchy light and dark green (mosaic) but not curled upward, with no whiteflies?",
      "keywords": [
        "mosaic",
        "tomato mosaic",
        "virus",
        "tamatar virus",
        "chitkabre patte",
        "dabbe dar patte",
        "patte sikur gaye",
        "patle patte",
        "fern leaf",
        "pauda chhota",
        "ToMV",
        "TMV",
        "موزیک",
        "ٹماٹر کا وائرس",
        "چتکبرے پتے",
        "دھبے دار پتے",
        "پتے سکڑ گئے",
        "پتلے پتے",
        "پودا چھوٹا رہ گیا",
        "ٹماٹر کا موزیک",
        "وائرس",
        "مرچ کا وائرس"
      ],
      "chips": [
        "p_mosaic",
        "p_small_leaves",
        "p_stunted",
        "p_malformed"
      ],
      "todo": [
        "Pull out plants with mosaic as soon as you see them, put them in a bag and destroy them away from the field",
        "Work in healthy parts of the crop first and in the affected area last each day",
        "Wash hands with soap and water before and after handling plants, and clean knives and tools often",
        "Do not smoke or use tobacco while working with tomato or chilli plants, and wash hands after using tobacco",
        "Ask your agriculture officer to confirm, because mosaic can also be caused by other viruses spread by aphids or whitefly"
      ],
      "dont": [
        "Don't spray insecticides or fungicides hoping to cure it; no spray cures a virus",
        "Don't save seed from infected plants"
      ]
    },
    {
      "slug": "spider-mites",
      "name": "Spider Mites (Red Mites)",
      "type": "plant",
      "hosts": [
        "tomato",
        "brinjal",
        "cucurbits",
        "cotton",
        "okra",
        "chili",
        "citrus"
      ],
      "hostLabel": "Vegetables, Cotton & Citrus",
      "causeType": "Mite pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Fine pale speckles on leaves that turn bronze, with tiny moving mites and fine webs underneath.",
      "question": "When you look under the leaves, are there tiny moving dots and fine silky webs?",
      "keywords": [
        "spider mite",
        "red mite",
        "mite",
        "lal jooen",
        "jooen",
        "joon",
        "jala",
        "patte par jala",
        "patte kansi rang",
        "bronze patte",
        "nuqte dar patte",
        "patte sookh gaye",
        "bhindi",
        "baingan",
        "kapas",
        "لال جوئیں",
        "جوئیں",
        "مائٹ",
        "سرخ جوئیں",
        "جالا",
        "پتوں پر جالا",
        "پتے تانبے جیسے",
        "نقطے دار پتے",
        "پتے سوکھ گئے",
        "بھنڈی پر جوئیں",
        "بینگن پر جوئیں",
        "کپاس پر جوئیں"
      ],
      "chips": [
        "p_webbing",
        "p_yellowing",
        "p_insects"
      ],
      "todo": [
        "Check the underside of leaves with a hand lens, or tap leaves over white paper, especially in hot dry spells",
        "If only a few leaves or plants are hit, pick off and destroy those leaves or plants",
        "Water the crop on time so it is not short of water, and reduce dust, for example by wetting dusty paths",
        "On small plots, a strong spray of plain water on the underside of leaves knocks many mites off",
        "Give predatory mites, ladybirds and lacewings a chance by not spraying broad-spectrum insecticides",
        "If mites keep spreading, ask your agriculture officer whether a product that works on mites is needed and which one is approved"
      ],
      "dont": [
        "Don't spray broad-spectrum insecticides again and again; this usually makes mites worse",
        "Don't spray oils or soaps in hot midday sun; they can burn the leaves"
      ]
    },
    {
      "slug": "tomato-spotted-wilt-virus",
      "name": "Tomato Spotted Wilt Virus",
      "type": "plant",
      "hosts": [
        "tomato",
        "chili"
      ],
      "hostLabel": "Tomato & Chilli",
      "causeType": "Viral (spread by thrips)",
      "urgency": "",
      "zoonotic": false,
      "short": "Bronzed young leaves with small dark spots, and yellow or brown rings and blotches on tomato and chilli fruit.",
      "question": "Are there yellow or brown rings on the fruit, or bronzed young leaves with many small dark spots?",
      "keywords": [
        "spotted wilt",
        "TSWV",
        "tomato virus",
        "thrips",
        "tharips",
        "tamatar virus",
        "mirch virus",
        "chhalle",
        "daire",
        "phal par daire",
        "bronze patte",
        "kansi rang patte",
        "pauda mar gaya",
        "سپاٹڈ وِلٹ",
        "ٹماٹر کا وائرس",
        "مرچ کا وائرس",
        "تھرپس",
        "پھل پر چھلے",
        "پھل پر دائرے",
        "تانبے جیسے پتے",
        "پتوں پر کالے دھبے",
        "پودا مر گیا",
        "ٹماٹر کا پھل خراب"
      ],
      "chips": [
        "p_brown_spots",
        "p_fruit_spots",
        "p_stunted"
      ],
      "todo": [
        "Pull out plants with symptoms early, put them in a bag and destroy them away from the field",
        "Check flowers and young leaves for thrips (tap them over white paper) and hang yellow sticky traps to watch their numbers",
        "Control weeds in and around the field, which shelter thrips and the virus",
        "Check nursery plants carefully and do not transplant any with spots or bronzing",
        "Ask your agriculture officer about thrips control; sprays only target the thrips and cannot cure infected plants"
      ],
      "dont": [
        "Don't spray hoping to cure sick plants; no spray cures a virus",
        "Don't leave pulled-out sick plants at the field edge"
      ]
    },
    {
      "slug": "tomato-target-spot",
      "name": "Target Spot of Tomato",
      "type": "plant",
      "hosts": [
        "tomato"
      ],
      "hostLabel": "Tomato",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown leaf spots with light centres and faint rings, and sunken, pitted spots on tomato fruit.",
      "question": "Do the brown leaf spots have light centres with faint rings, and are there sunken pits on the fruit?",
      "keywords": [
        "target spot",
        "corynespora",
        "tamatar",
        "tamatar ke patte",
        "bhoore dhabbe",
        "daire",
        "chhalle",
        "phal par gadhe",
        "phal phat gaya",
        "patte gir rahe",
        "leaf spot",
        "jhulsao",
        "ٹارگٹ سپاٹ",
        "نشانہ نما دھبے",
        "ٹماٹر کے پتوں پر دھبے",
        "بھورے دھبے",
        "دائرے والے دھبے",
        "پھل پر گڑھے",
        "پھل پھٹ گیا",
        "پتے گر رہے ہیں",
        "جھلساؤ",
        "پھپھوندی"
      ],
      "chips": [
        "p_target_spots",
        "p_brown_spots",
        "p_fruit_spots"
      ],
      "todo": [
        "Remove badly spotted lower leaves and spotted fruit and take them out of the field",
        "Prune and stake plants to open them up so leaves dry faster",
        "Water at the base, not over the leaves, and in the morning",
        "Ask your agriculture officer to confirm, because it is easily mistaken for early blight or bacterial spot, and to advise whether a fungicide spray is needed"
      ],
      "dont": []
    },
    {
      "slug": "vegetable-fusarium-wilt",
      "name": "Fusarium and Verticillium Wilt of Vegetables",
      "type": "plant",
      "hosts": [
        "tomato",
        "brinjal",
        "cucurbits",
        "chili"
      ],
      "hostLabel": "Tomato, Brinjal, Chilli & Cucurbits",
      "causeType": "Fungal (soil-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Lower leaves turn yellow, often on one side, plants wilt slowly, and the cut stem shows brown streaks inside.",
      "question": "When you split the lower stem, are there brown streaks inside, and did the yellowing start on one side of the plant?",
      "keywords": [
        "fusarium wilt",
        "verticillium wilt",
        "wilt",
        "sooka",
        "sokha",
        "murjhao",
        "pauda sookh gaya",
        "ek taraf peela",
        "tamatar",
        "baingan",
        "tarbooz",
        "kharbooza",
        "bel sookh gayi",
        "tana andar se bhoora",
        "مرجھاؤ",
        "سوکا",
        "فیوزیریم",
        "ورٹیسیلیم",
        "پودا سوکھ گیا",
        "ایک طرف سے پیلا",
        "بیل سوکھ گئی",
        "ٹماٹر سوکھ گیا",
        "بینگن سوکھ گیا",
        "تربوز کی بیل مرجھا گئی",
        "تنا اندر سے بھورا"
      ],
      "chips": [
        "p_wilting",
        "p_yellowing",
        "p_old_leaves_yellow"
      ],
      "todo": [
        "Split the lower stem of a wilting plant to look for brown streaks, and do the stem-in-water test to rule out bacterial wilt",
        "Pull out wilted plants with their roots and take them out of the field; do not leave them lying there or compost them",
        "Mark the affected patches, work in them last, and clean tools and shoes afterwards",
        "Ask your agriculture officer to confirm the cause and advise on resistant varieties or grafted plants for the next crop; chemical control is not practical for these wilts"
      ],
      "dont": [
        "Don't spray fungicides on wilting plants hoping to save them",
        "Don't move soil or plant remains from an affected field to clean fields"
      ]
    },
    {
      "slug": "cercospora-leaf-spot",
      "name": "Cercospora Leaf Spot of Chilli, Brinjal and Okra",
      "type": "plant",
      "hosts": [
        "chili",
        "brinjal",
        "okra"
      ],
      "hostLabel": "Chilli, Brinjal & Okra",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Round brown spots with pale grey centres and dark edges on leaves; badly spotted leaves fall early.",
      "question": "Do the leaf spots have a pale grey or white centre with a dark brown border, like a frog's eye?",
      "keywords": [
        "cercospora",
        "frogeye leaf spot",
        "chilli leaf spot",
        "brinjal leaf spot",
        "okra leaf spot",
        "mirch ke patton par dhabbe",
        "baingan ke patte dhabbe",
        "bhindi ke patte dhabbe",
        "patte jharna",
        "bhoore dhabbe",
        "mirch ki bimari",
        "daagh",
        "مرچ کے پتوں پر دھبے",
        "بینگن کے پتوں پر دھبے",
        "بھنڈی کے پتوں پر دھبے",
        "بھورے دھبے",
        "سرکوسپورا",
        "پتے جھڑنا",
        "پتے پیلے ہو کر گرنا",
        "مرچ کی بیماری",
        "مینڈک کی آنکھ جیسے دھبے",
        "داغ"
      ],
      "chips": [
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Pick off badly spotted lower leaves early, take them out of the field and bury or burn them",
        "Water in furrows or by drip at the base of plants, not over the leaves",
        "Remove weeds and wild host plants in and around the field so air can move",
        "Ask your agriculture officer whether a fungicide spray is needed; if it is, use only an approved product as the label says"
      ],
      "dont": []
    },
    {
      "slug": "white-mold",
      "name": "White Mold (Sclerotinia Rot)",
      "type": "plant",
      "hosts": [
        "brinjal",
        "cabbage",
        "mustard",
        "chickpea",
        "potato",
        "tomato"
      ],
      "hostLabel": "Brinjal, Mustard, Cabbage, Chickpea, Potato & Tomato",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Soft, wet stem rot covered with white cotton-like fungus and hard black seed-like bodies; plants wilt.",
      "question": "Is there white cotton-like growth on the rotting stem, with hard black seed-like bodies on it or inside it?",
      "keywords": [
        "white mold",
        "white mould",
        "sclerotinia",
        "stem rot",
        "safed phaphoond",
        "tana galna",
        "sarson ka tana gal gaya",
        "baingan tana galna",
        "gobhi galna",
        "chana tana galna",
        "kale dane",
        "cottony rot",
        "تنے کا گلنا",
        "سفید روئی جیسی پھپھوندی",
        "سکلیروٹینیا",
        "سرسوں کا تنا گلنا",
        "بینگن کا تنا گلنا",
        "گوبھی گلنا",
        "چنے کا تنا گلنا",
        "کالے دانے",
        "پودے مرجھانا",
        "تنا نرم ہونا"
      ],
      "chips": [
        "p_wilting",
        "p_rot",
        "p_dark_wet"
      ],
      "todo": [
        "Pull out plants with white growth and black sclerotia, put them in a bag and take them out of the field; burn them or bury them deep",
        "Do not leave rotten stems or sclerotia lying on the soil, as they will infect the next crop",
        "Reduce irrigation, water in the morning and do not let water stand in the field",
        "Remove broad-leaved weeds and thin out very thick patches so the crop dries faster",
        "Ask your agriculture officer whether a fungicide spray is advised; sprays can only protect healthy plants and cannot save rotten stems"
      ],
      "dont": [
        "Do not move soil, straw or crop remains from an infected field to clean fields"
      ]
    },
    {
      "slug": "chilli-powdery-mildew",
      "name": "Powdery Mildew of Chilli",
      "type": "plant",
      "hosts": [
        "chili"
      ],
      "hostLabel": "Chilli & Capsicum",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale yellow patches on top of chilli leaves, with white powder mostly underneath; leaves then fall.",
      "question": "When you turn over a leaf with yellow patches, is there white powdery growth on the underside?",
      "keywords": [
        "powdery mildew",
        "chilli powdery mildew",
        "mirch safed powder",
        "mirch ke patte peele",
        "patton ke neeche safedi",
        "safed phaphoond",
        "mirch ke patte jhar rahe",
        "leveillula",
        "white powder chilli",
        "mirch ki bimari",
        "مرچ کی سفوفی پھپھوندی",
        "سفید پاؤڈر",
        "پتوں کے نیچے سفیدی",
        "مرچ کے پتے پیلے",
        "مرچ کے پتے جھڑنا",
        "پاؤڈری ملڈیو",
        "سفید پھپھوندی",
        "مرچ کی بیماری",
        "شملہ مرچ کی بیماری"
      ],
      "chips": [
        "p_white_powder",
        "p_yellowing"
      ],
      "todo": [
        "Turn over older leaves and check the underside regularly, especially from flowering onward, and act early",
        "Remove and destroy badly infected lower leaves and badly infected plants",
        "Ask your agriculture officer early about a fungicide or sulfur-based spray; sprays work best at the first signs and must reach the underside of the leaves",
        "Remove weeds in and around the field that can carry the fungus"
      ],
      "dont": []
    },
    {
      "slug": "onion-stemphylium-blight",
      "name": "Stemphylium Leaf Blight of Onion",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Small yellow spots grow into long tan-brown patches, mostly near leaf tips; leaves dry from the tip.",
      "question": "Do the spots start small and yellow and grow into long tan-brown patches with dark centres, without purple colour or rings?",
      "keywords": [
        "stemphylium",
        "onion leaf blight",
        "onion leaf spots",
        "onion tip burn",
        "pyaz ke patte sookh rahe",
        "pyaz jhulsao",
        "pyaz ke patte bhoore",
        "pyaz ki bimari",
        "piaz",
        "onion blight",
        "پیاز کا جھلساؤ",
        "سٹیمفیلیم",
        "پیاز کے پتے سوکھنا",
        "پیاز کے پتوں پر دھبے",
        "پیاز کی نوکیں جلنا",
        "بھورے دھبے",
        "پیاز کی بیماری",
        "پیاز کے پتے بھورے"
      ],
      "chips": [
        "p_brown_spots",
        "p_edge_drying",
        "p_yellowing"
      ],
      "todo": [
        "Check older leaves and leaf tips for yellow-brown spots, and look for purple spots with rings as well, as both diseases often come together",
        "Keep thrips under control, as they carry spores and damage the leaves",
        "Irrigate in the morning, not in the evening, so leaves do not stay wet at night",
        "Contact your agriculture officer about whether a fungicide is needed; this fungus can become resistant, so do not keep spraying the same type of product"
      ],
      "dont": []
    },
    {
      "slug": "onion-iris-yellow-spot",
      "name": "Iris Yellow Spot Virus of Onion",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion (also garlic)",
      "causeType": "Viral (spread by thrips)",
      "urgency": "",
      "zoonotic": false,
      "short": "Straw-coloured, diamond or eye-shaped patches on onion leaves and seed stalks, often with green islands.",
      "question": "Are there straw-coloured, diamond or eye-shaped patches on the leaves or seed stalks, sometimes with green islands inside?",
      "keywords": [
        "iris yellow spot",
        "IYSV",
        "onion virus",
        "diamond spots onion",
        "pyaz ka virus",
        "pyaz ke patte peele",
        "pyaz beej wali dandi",
        "thrips virus",
        "pyaz ki bimari",
        "piaz",
        "straw coloured spots",
        "پیاز کا وائرس",
        "آئرس یلو سپاٹ",
        "ہیرے جیسے دھبے",
        "پیاز کے پتے پیلے",
        "پیاز کی بیج والی ڈنڈی",
        "تھرپس",
        "پیاز کی بیماری",
        "بھوسے رنگ کے دھبے",
        "لہسن کا وائرس"
      ],
      "chips": [
        "p_diamond_spots",
        "p_yellowing",
        "p_edge_drying"
      ],
      "todo": [
        "Check for thrips in the leaf folds and on sticky traps, and control them early on your agriculture officer's advice",
        "Pull out plants with clear symptoms when they are few, and destroy them away from the field",
        "Remove volunteer onions and weeds in and around the field",
        "Keep plants well watered and fed in a balanced way to reduce stress, without extra nitrogen"
      ],
      "dont": [
        "Do not buy or spray any product sold as a cure for the virus; no spray can cure infected plants",
        "Do not leave cull onions or rotten bulbs in heaps near onion fields"
      ]
    },
    {
      "slug": "onion-fusarium-basal-rot",
      "name": "Fusarium Basal Rot of Onion",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion & Garlic",
      "causeType": "Fungal (soil-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Leaf tips yellow and die back; the bulb base and roots rot brown, often with white mould, also in storage.",
      "question": "When you pull up a yellowing plant, is the base of the bulb soft and brown with rotten roots?",
      "keywords": [
        "fusarium basal rot",
        "onion bulb rot",
        "basal plate rot",
        "pyaz galna",
        "pyaz ki gathi gal gayi",
        "pyaz ki jar gal",
        "storage rot onion",
        "lehsan galna",
        "pyaz ke patte peele",
        "pyaz sar gaya",
        "piaz",
        "پیاز کا گلنا",
        "پیاز کی گٹھی گلنا",
        "پیاز کی جڑ گلنا",
        "فیوزیریم",
        "گودام میں پیاز گلنا",
        "لہسن گلنا",
        "پیاز کے پتے پیلے",
        "پیاز سڑ گیا",
        "پیاز کی بیماری"
      ],
      "chips": [
        "p_edge_drying",
        "p_yellowing",
        "p_wilting",
        "p_rot"
      ],
      "todo": [
        "Pull out yellowing plants with rotten bases, put them in a bag and take them out of the field",
        "Avoid injuring bulbs and roots during hoeing and digging",
        "At harvest, sort bulbs carefully and remove any with soft or discoloured bases before storing",
        "Dry (cure) bulbs well in shade with good air flow, then store them in a cool, dry, airy place",
        "Ask your agriculture officer about seed or set treatment with an approved fungicide for the next crop"
      ],
      "dont": []
    },
    {
      "slug": "cucurbit-anthracnose",
      "name": "Anthracnose of Gourds, Melons and Cucumber",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Cucumber, Melons, Watermelon & Gourds",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Round brown leaf spots that crack into holes, and sunken dark fruit spots with pink ooze in wet weather.",
      "question": "Do the leaf spots crack into holes, and do fruit have sunken dark spots with pink ooze?",
      "keywords": [
        "anthracnose",
        "cucumber leaf spots",
        "melon fruit spots",
        "kheera ke patte dhabbe",
        "kharbooza dhabbe",
        "tarbooz par dhabbe",
        "kaddu ki bimari",
        "patton mein surakh",
        "phal par dhabbe",
        "lauki",
        "tinda",
        "karela",
        "کھیرے کے پتوں پر دھبے",
        "خربوزے پر دھبے",
        "تربوز پر دھبے",
        "اینتھراکنوز",
        "پتوں میں سوراخ",
        "پھل پر دھبے",
        "کدو کی بیماری",
        "لوکی کی بیماری",
        "کریلے کی بیماری",
        "ٹینڈے کی بیماری"
      ],
      "chips": [
        "p_brown_spots",
        "p_holes",
        "p_fruit_spots"
      ],
      "todo": [
        "Remove badly spotted leaves and fruit and take them out of the field",
        "Do not work in the crop or pick fruit while the leaves are wet",
        "Water in furrows or by drip, not over the leaves",
        "Ask your agriculture officer whether a fungicide spray is needed and which product is approved; sprays protect healthy leaves but do not heal spots",
        "Handle fruit gently at harvest so it is not wounded"
      ],
      "dont": []
    },
    {
      "slug": "cucurbit-alternaria-leaf-blight",
      "name": "Alternaria Leaf Blight of Cucurbits",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Melons, Watermelon, Cucumber & Gourds",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown spots with rings and yellow halos on older leaves near the crown; leaves curl, dry and fall.",
      "question": "Do the brown spots have rings like a target, and did they start on the older leaves near the centre of the plant?",
      "keywords": [
        "alternaria",
        "leaf blight",
        "melon leaf spots",
        "target spots",
        "kharbooza ke patte",
        "tarbooz ke patte sookh",
        "kaddu ke patte jhulsao",
        "patte bhoore",
        "kheera",
        "lauki ke patte",
        "bel sookh rahi",
        "خربوزے کے پتوں پر دھبے",
        "تربوز کے پتے سوکھنا",
        "کدو کے پتوں کا جھلساؤ",
        "الٹرنیریا",
        "دائروں والے دھبے",
        "بھورے دھبے",
        "بیل سوکھنا",
        "کھیرے کی بیماری",
        "لوکی کے پتے"
      ],
      "chips": [
        "p_target_spots",
        "p_brown_spots",
        "p_yellowing"
      ],
      "todo": [
        "Check older leaves near the centre of the plant regularly, so the disease is found early",
        "Remove the worst spotted older leaves and take them out of the field",
        "Water in furrows or by drip; avoid overhead watering, especially late in the day",
        "Ask your agriculture officer whether a fungicide spray is needed and which product is approved"
      ],
      "dont": []
    },
    {
      "slug": "cucurbit-bacterial-leaf-spot",
      "name": "Bacterial Leaf Spot of Gourds and Pumpkin",
      "type": "plant",
      "hosts": [
        "cucurbits"
      ],
      "hostLabel": "Pumpkin, Squash, Gourds & Cucumber",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Small water-soaked spots with yellow halos on leaves that turn brown or black; small crusty spots on fruit.",
      "question": "Are there many small water-soaked spots with yellow halos that started on the underside of the leaves?",
      "keywords": [
        "bacterial leaf spot",
        "xanthomonas",
        "angular leaf spot",
        "pumpkin leaf spots",
        "kaddu ke patte dhabbe",
        "halwa kaddu",
        "ghia ke patte",
        "lauki ke patte dhabbe",
        "kheera ke patte",
        "peele ghere wale dhabbe",
        "geele dhabbe",
        "کدو کے پتوں پر دھبے",
        "بیکٹیریائی دھبے",
        "پیلے گھیرے والے دھبے",
        "گیلے دھبے",
        "گھیا کے پتے",
        "لوکی کے پتوں پر دھبے",
        "کھیرے کے پتے",
        "حلوہ کدو",
        "پھل پر دھبے"
      ],
      "chips": [
        "p_brown_spots",
        "p_dark_wet",
        "p_fruit_spots"
      ],
      "todo": [
        "When only a few plants are affected, pull them out and destroy them",
        "Stop overhead watering; use furrows or drip, and water when leaves can dry quickly",
        "Do not work in the field or pick fruit when the leaves are wet",
        "Ask your agriculture officer whether a copper-based spray is advised; sprays only slow the disease, work best before many spots appear, and are of little use once fruit are spotted"
      ],
      "dont": [
        "Do not save seed from fruit with spots"
      ]
    },
    {
      "slug": "aphids-vegetables",
      "name": "Aphids on Vegetables and Field Crops",
      "type": "plant",
      "hosts": [
        "cucurbits",
        "okra",
        "chili",
        "potato",
        "brinjal",
        "cabbage",
        "cotton",
        "tomato"
      ],
      "hostLabel": "Melons, Gourds, Vegetables & Cotton",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Groups of tiny soft green, yellow or black insects under leaves and on shoot tips; leaves curl and get sticky.",
      "question": "Are there groups of tiny soft insects that do not fly away, under young leaves or on the shoot tips?",
      "keywords": [
        "aphid",
        "aphids",
        "tela",
        "sust tela",
        "cotton aphid",
        "melon aphid",
        "green insects",
        "chipchipa patta",
        "patte murr gaye",
        "kaddu ka tela",
        "bhindi ka tela",
        "sabzi ka keera",
        "kali ulli",
        "honeydew",
        "سست تیلا",
        "تیلا",
        "سبزیوں کا تیلا",
        "کدو کا تیلا",
        "بھنڈی کا تیلا",
        "مرچ کا تیلا",
        "ہرے کیڑے",
        "چپچپے پتے",
        "پتے مڑ گئے",
        "کالی پھپھوندی",
        "رس چوسنے والا کیڑا",
        "لیڈی برڈ"
      ],
      "chips": [
        "p_insects",
        "p_sticky",
        "p_curled",
        "p_yellowing",
        "p_stunted"
      ],
      "todo": [
        "Check the underside of leaves and the shoot tips at least twice a week, especially on young plants",
        "Hang yellow sticky traps just above the crop to catch winged aphids and see when they arrive",
        "On small plots, knock colonies off sturdy plants with a strong spray of water early in the day, or cut off badly infested shoots and destroy them away from the field",
        "Look for ladybirds, lacewing and hoverfly larvae, and swollen, golden-brown 'mummy' aphids; where these are common, give them a week or two to work",
        "If aphids keep spreading, ask your agriculture officer whether a spray is needed and which product is approved; neem-based or soap-based sprays are milder options and must reach the underside of the leaves"
      ],
      "dont": [
        "Don't spray broad-spectrum insecticides at the first sight of a few aphids",
        "Don't use extra nitrogen fertiliser on a crop that already has aphids"
      ]
    },
    {
      "slug": "leaf-miner",
      "name": "Leaf Miners on Vegetables",
      "type": "plant",
      "hosts": [
        "cucurbits",
        "tomato",
        "chili",
        "brinjal",
        "cabbage",
        "potato"
      ],
      "hostLabel": "Melons, Gourds, Tomato & Other Vegetables",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Thin, white, winding tunnels inside the leaves of melons, gourds, tomato and other vegetables.",
      "question": "Are there thin, white, winding tunnels inside the leaves?",
      "keywords": [
        "leaf miner",
        "leafminer",
        "serpentine leaf miner",
        "patte mein surang",
        "surang",
        "patte par safed lakeerein",
        "tunnel in leaf",
        "tomato leaf miner",
        "tuta",
        "kaddu ke patte",
        "keera patte ke andar",
        "patte sookh gaye",
        "لیف مائنر",
        "پتے میں سرنگ",
        "سرنگیں",
        "پتوں پر سفید لکیریں",
        "ٹیڑھی لکیریں",
        "کدو کے پتے",
        "ٹماٹر کا لیف مائنر",
        "ٹوٹا",
        "پتے سوکھ گئے",
        "پتے کے اندر کیڑا"
      ],
      "chips": [
        "p_tunnels",
        "p_yellowing",
        "p_edge_drying"
      ],
      "todo": [
        "Check leaves twice a week and look for fresh tunnels with live maggots inside",
        "On small plots and young plants, pick off mined leaves and destroy them away from the field",
        "Hang yellow sticky traps among the plants to catch adult flies and see when numbers rise",
        "If many tunnels are empty or have dead maggots, natural enemies are probably working; avoid spraying",
        "Neem seed kernel extract is a milder option; if damage keeps spreading, ask your agriculture officer whether a spray is needed and which product is approved",
        "On tomato, if you see wide blotch mines with a small caterpillar inside, or holes in the fruit, show samples to your agriculture officer, as this may be Tuta absoluta"
      ],
      "dont": [
        "Don't spray broad-spectrum insecticides again and again; this kills the wasps that control leaf miners and makes outbreaks worse"
      ]
    },
    {
      "slug": "citrus-withertip-dieback",
      "name": "Withertip (Anthracnose) and Dieback of Citrus",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Orange, Lemon)",
      "causeType": "Fungal (often with tree stress)",
      "urgency": "",
      "zoonotic": false,
      "short": "Citrus twigs dry back from the tip, leaves drop and dead shoots turn grey; fruit may get dark tear-stain marks.",
      "question": "Are twigs drying back from the tip and turning grey, without raised corky spots or gum at the base of the trunk?",
      "keywords": [
        "withertip",
        "wither tip",
        "dieback",
        "citrus dieback",
        "kinnow decline",
        "anthracnose",
        "shakhen sookh rahi",
        "tehni sookh gayi",
        "kinno ka sookha",
        "kinnow",
        "malta",
        "nimbu",
        "patte jharna",
        "tear stain",
        "وِدر ٹِپ",
        "ڈائی بیک",
        "ٹہنیاں سوکھنا",
        "شاخیں سوکھ رہی ہیں",
        "کینو کا سوکھنا",
        "سٹرس ڈیکلائن",
        "اینتھراکنوز",
        "پتے جھڑنا",
        "کینو",
        "مالٹا",
        "لیموں",
        "پھل پر داغ"
      ],
      "chips": [
        "p_dieback",
        "p_fruit_spots",
        "p_gum",
        "p_yellowing",
        "p_fruit_drop"
      ],
      "todo": [
        "In dry weather, cut dead and dying twigs back into healthy green wood; take the cuttings out of the orchard and burn them",
        "Clean pruning tools before moving to the next tree",
        "Check drainage; do not let water stand around the trunks, and avoid flooding the whole orchard",
        "Ask your agriculture officer for a soil and leaf test and the right fertiliser and micronutrients, including zinc",
        "Ask your agriculture officer whether a protective copper-based spray is needed and the right timing for your area"
      ],
      "dont": [
        "Don't leave dead wood on the trees or pruned branches lying in the orchard",
        "Don't over-irrigate or let water stand around the trunk"
      ]
    },
    {
      "slug": "citrus-mealybug",
      "name": "Citrus Mealybug",
      "type": "plant",
      "hosts": [
        "citrus",
        "guava",
        "mango"
      ],
      "hostLabel": "Citrus (also Guava & Mango)",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Small white, waxy insects packed between fruits, under the fruit cap and along leaf veins; leaves get sticky.",
      "question": "Are there white, waxy, cotton-like insects packed between the fruits or under the fruit cap?",
      "keywords": [
        "citrus mealybug",
        "mealybug",
        "gadhiri",
        "safed keera",
        "rui jaisa keera",
        "kinnow ka keera",
        "chipchipa patta",
        "kali ulli",
        "sooty mould",
        "chuntiyan",
        "malta",
        "amrood",
        "white insects",
        "ملی بگ",
        "گدھیڑی",
        "کینو کی ملی بگ",
        "سفید کیڑے",
        "روئی جیسا کیڑا",
        "پھلوں کے درمیان سفید کیڑے",
        "چپچپے پتے",
        "کالی پھپھوندی",
        "چیونٹیاں",
        "کینو",
        "مالٹا",
        "امرود"
      ],
      "chips": [
        "p_mealy",
        "p_sticky",
        "p_fruit_drop",
        "p_yellowing"
      ],
      "todo": [
        "Check fruit clusters, under the fruit cap and the underside of leaves on several trees in each part of the orchard",
        "Prune out and destroy heavily infested twigs and shoots",
        "On small trees, wash mealybugs off with a strong spray of water",
        "Control ants: tie a sticky band on a wrap around the trunk (not straight on the bark), prune branches touching the ground, and destroy ant nests near trunks",
        "Protect lady beetles and lacewings; ask your agriculture department whether the mealybug lady beetle (Cryptolaemus) is available for release",
        "If many fruit clusters are infested, ask your agriculture officer whether a spray is needed, which product is approved and the best timing, as sprays work poorly on hidden mealybugs"
      ],
      "dont": [
        "Don't spray broad-spectrum insecticides again and again; they kill the lady beetles and tiny wasps that eat mealybugs",
        "Don't move crates, tools or plants from an infested orchard without cleaning them"
      ]
    },
    {
      "slug": "citrus-whitefly",
      "name": "Citrus Whitefly and Blackfly",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Orange, Lemon)",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny white or dark flies on citrus shoots; flat or black spiny young under leaves, sticky leaves and black mould.",
      "question": "Are there flat pale or black spiny young insects stuck under the citrus leaves, with tiny flies on the new shoots?",
      "keywords": [
        "citrus whitefly",
        "citrus blackfly",
        "blackfly",
        "safed makhi",
        "kali makhi",
        "kinnow ki safed makhi",
        "chipchipa patta",
        "kali ulli",
        "sooty mould",
        "patte kaale",
        "kinnow",
        "malta",
        "nimbu",
        "سفید مکھی",
        "کالی مکھی",
        "کینو کی سفید مکھی",
        "سٹرس کی سفید مکھی",
        "پتوں کے نیچے کیڑے",
        "چپچپے پتے",
        "کالی پھپھوندی",
        "کالی اُلی",
        "پتے کالے",
        "کینو",
        "مالٹا",
        "لیموں"
      ],
      "chips": [
        "p_whiteflies",
        "p_sticky",
        "p_insects",
        "p_yellowing"
      ],
      "todo": [
        "Check the underside of young leaves in spring and after each new flush",
        "Hang yellow sticky traps in the canopy to see when adults are active",
        "Prune out heavily infested shoots and water shoots and open up crowded canopies",
        "Look for natural enemies such as lady beetles and lacewing larvae, and give them time to work",
        "If numbers are high, ask your agriculture officer whether a spray is needed and which product is approved; neem-based sprays are a milder option and must reach the underside of leaves"
      ],
      "dont": [
        "Don't use broad-spectrum insecticides or copper sprays more often than needed",
        "Don't cut trees back very heavily, which causes a lot of soft new growth"
      ]
    },
    {
      "slug": "sooty-mould",
      "name": "Sooty Mould",
      "type": "plant",
      "hosts": [
        "citrus",
        "mango",
        "guava",
        "cotton",
        "cucurbits",
        "okra"
      ],
      "hostLabel": "Citrus, Mango, Guava, Cotton & Vegetables",
      "causeType": "Fungal (grows on insect honeydew)",
      "urgency": "",
      "zoonotic": false,
      "short": "Black, soot-like coating on leaves, twigs and fruit that can be rubbed off; leaves are usually sticky.",
      "question": "Can the black coating be rubbed off the leaf, leaving a green leaf underneath?",
      "keywords": [
        "sooty mould",
        "sooty mold",
        "black mould",
        "kali ulli",
        "kali phaphoondi",
        "patte kaale",
        "kaala patta",
        "chipchipa patta",
        "honeydew",
        "aam ke patte kaale",
        "kinnow ke patte kaale",
        "patton par kalak",
        "black coating",
        "kali tah",
        "sooty",
        "کالی پھپھوندی",
        "کالی اُلی",
        "سوٹی مولڈ",
        "پتے کالے",
        "کالے پتے",
        "پتوں پر کالک",
        "چپچپے پتے",
        "میٹھا مادہ",
        "آم کے پتے کالے",
        "کینو کے پتے کالے",
        "امرود کے پتے کالے"
      ],
      "chips": [
        "p_sticky",
        "p_insects",
        "p_mealy",
        "p_whiteflies"
      ],
      "todo": [
        "Find the insect causing the honeydew: check shoot tips, the underside of leaves, fruit clusters and twigs",
        "Control ants with sticky bands on trunks (on a wrap, not on bare bark), by pruning branches that touch the ground or walls, and by destroying nests",
        "On small trees and high-value plants, wash the coating off leaves and fruit with water or mild soapy water",
        "Prune out heavily infested shoots where practical",
        "Ask your agriculture officer how to control the insect and which product is approved; a fungicide alone will not solve the problem"
      ],
      "dont": [
        "Don't rely on fungicide sprays; the black coating will keep coming back as long as insects make honeydew"
      ]
    },
    {
      "slug": "guava-anthracnose",
      "name": "Anthracnose of Guava (Fruit Rot and Dieback)",
      "type": "plant",
      "hosts": [
        "guava"
      ],
      "hostLabel": "Guava",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Sunken dark spots on guava fruit that join up and rot the flesh; shoot tips turn brown-black and die back.",
      "question": "Are the fruit spots sunken and dark, sometimes with pink or orange spore masses in damp weather?",
      "keywords": [
        "guava anthracnose",
        "amrood",
        "amrud",
        "amrood ke daagh",
        "kale dhabbe",
        "phal sarna",
        "phal galna",
        "amrood gal gaya",
        "dieback",
        "tehniyan sookhna",
        "guava fruit rot",
        "amrood ki bimari",
        "امرود کا اینتھراکنوز",
        "امرود",
        "امرود کے دھبے",
        "کالے دھبے",
        "پھل گلنا",
        "امرود گل گیا",
        "پھل سڑنا",
        "شاخیں سوکھنا",
        "کونپلیں سوکھ گئیں",
        "امرود کی بیماری"
      ],
      "chips": [
        "p_fruit_spots",
        "p_rot",
        "p_dieback",
        "p_fruit_drop",
        "p_brown_spots"
      ],
      "todo": [
        "Cut off dead and dying shoots into healthy wood, and collect fallen and mummified fruit; destroy them away from the orchard",
        "Clean pruning tools between trees",
        "Prune crowded branches to let in light and air so fruit dries quickly after rain",
        "Pick fruit on time and handle it gently to avoid wounds",
        "Ask your agriculture officer whether a protective fungicide spray is needed during flowering and fruit growth, and which product is approved"
      ],
      "dont": [
        "Don't leave rotten or mummified fruit on the trees or on the ground",
        "Don't water with sprinklers that wet the flowers and fruit"
      ]
    },
    {
      "slug": "guava-canker",
      "name": "Canker and Scab of Guava",
      "type": "plant",
      "hosts": [
        "guava"
      ],
      "hostLabel": "Guava",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Small rusty-brown raised spots on green guava fruit that turn into corky craters and split the skin.",
      "question": "Are the fruit spots raised, rusty and corky, rather than soft and sunken?",
      "keywords": [
        "guava canker",
        "guava scab",
        "amrood ka canker",
        "amrood par khurdre daagh",
        "zang",
        "rust spots",
        "phal phatna",
        "amrood phat gaya",
        "corky spots",
        "amrood ke dhabbe",
        "sakht daagh",
        "امرود کا کینکر",
        "امرود کا کھرنڈ",
        "امرود پر سخت دھبے",
        "زنگ جیسے دھبے",
        "کھردرے دھبے",
        "امرود پھٹ گیا",
        "پھل پھٹنا",
        "امرود کے دھبے",
        "امرود",
        "پھل گرنا"
      ],
      "chips": [
        "p_fruit_spots",
        "p_brown_spots",
        "p_fruit_drop"
      ],
      "todo": [
        "Pick off fruit with cankers and collect fallen fruit; destroy them away from the orchard",
        "Prune out dead twigs and crowded, overlapping branches",
        "Avoid wounding fruit during work in the orchard",
        "Ask your agriculture officer about controlling insects that feed on the fruit, and whether a fungicide spray is needed and which product is approved"
      ],
      "dont": [
        "Don't leave diseased or dried fruit hanging on the trees"
      ]
    },
    {
      "slug": "guava-styler-end-rot",
      "name": "Stylar End Rot of Guava",
      "type": "plant",
      "hosts": [
        "guava"
      ],
      "hostLabel": "Guava",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Rot starts at the crown (flower end) of guava fruit, turning dark brown and soft; the fruit shrinks and wrinkles.",
      "question": "Does the rot start at the crown (flower end) of the fruit, opposite the stalk?",
      "keywords": [
        "stylar end rot",
        "styler end rot",
        "guava fruit rot",
        "amrood ka sarna",
        "amrood gal gaya",
        "phal ka neeche ka hissa gala",
        "crown rot",
        "amrood kala ho gaya",
        "phal sarna",
        "amrood ki bimari",
        "phomopsis",
        "امرود کی سڑن",
        "امرود گل گیا",
        "پھل کا سرا گلنا",
        "تاج سے سڑن",
        "امرود کالا ہو گیا",
        "پھل سڑنا",
        "امرود کی بیماری",
        "گودام میں پھل گلنا",
        "امرود",
        "پھل گرنا"
      ],
      "chips": [
        "p_rot",
        "p_fruit_spots",
        "p_fruit_drop"
      ],
      "todo": [
        "Pick off and destroy fruit with crown-end rot, and remove mummified fruit from trees and the ground",
        "Prune crowded branches to let in light and air",
        "Handle fruit gently at picking and sort out any fruit with crown-end spots before packing",
        "Ask your agriculture officer whether a protective fungicide spray is needed during fruit growth and which product is approved"
      ],
      "dont": [
        "Don't pack fruit with crown-end rot together with healthy fruit"
      ]
    },
    {
      "slug": "mango-bacterial-canker",
      "name": "Bacterial Canker (Black Spot) of Mango",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Raised, black, angular spots with a yellow edge on leaves; fruit gets black spots that crack and ooze.",
      "question": "Are the black spots on the mango leaves raised and angular with a yellow ring, and do the fruit spots crack open?",
      "keywords": [
        "mango bacterial canker",
        "bacterial black spot",
        "black spot mango",
        "aam ke patton par kaale dhabbe",
        "kaale dagh",
        "phal par dhabbe",
        "phal phatna",
        "gond",
        "canker",
        "aam ki bimari",
        "leaf spot",
        "patte jharna",
        "آم کا کینکر",
        "بیکٹیریائی کینکر",
        "آم کے کالے دھبے",
        "پتوں پر کالے دھبے",
        "پھل پر کالے داغ",
        "پھل پھٹنا",
        "گوند رسنا",
        "پتے جھڑنا",
        "آم کی بیماری",
        "کالا دھبہ"
      ],
      "chips": [
        "p_brown_spots",
        "p_fruit_spots",
        "p_gum",
        "p_dark_wet",
        "p_fruit_drop"
      ],
      "todo": [
        "Cut off badly spotted twigs, leaves and fruit, and burn or bury them away from the orchard",
        "Collect fallen spotted leaves and fruit from under the trees",
        "Clean pruning tools between trees, and avoid working in the trees while they are wet",
        "Ask your agriculture officer whether a copper-based spray is advised for your orchard and when it should be used",
        "At harvest, cut the fruit stalk instead of pulling fruit off, to avoid fresh wounds"
      ],
      "dont": [
        "Do not take grafting wood or seed stones from trees with black spots",
        "Do not wet the leaves with overhead water; water the root zone only"
      ]
    },
    {
      "slug": "mango-dieback",
      "name": "Dieback of Mango",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Twigs and branches dry from the tip downwards, leaves look scorched, and gum oozes from cracks.",
      "question": "Are the mango twigs drying from the tip downwards, with brown streaks inside the wood, while the main trunk has no gum or beetle holes?",
      "keywords": [
        "mango dieback",
        "die back",
        "tehniyan sookhna",
        "shakhen sookh rahi",
        "aam ka sokha",
        "aam ki tehni sookh gayi",
        "gond",
        "gummosis",
        "patte jal gaye",
        "aam ki bimari",
        "branch drying",
        "twig drying",
        "ڈائی بیک",
        "ٹہنیاں سوکھنا",
        "شاخیں سوکھنا",
        "آم کا سوکا",
        "آم کی ٹہنی سوکھ گئی",
        "گوند نکلنا",
        "پتے جھلسنا",
        "چھال پھٹنا",
        "آم کی بیماری",
        "اوپر سے سوکھنا"
      ],
      "chips": [
        "p_dieback",
        "p_gum",
        "p_edge_drying",
        "p_wilting"
      ],
      "todo": [
        "Cut dried twigs and branches well below the dried part, into healthy green wood (about 10 cm below the last brown streak)",
        "Collect all cut branches and burn them away from the orchard",
        "Cover large cuts with a protective paste or wound sealant recommended by your agriculture department",
        "Clean pruning tools between cuts and between trees",
        "Check that trees are getting enough water and manure, and fix any water shortage",
        "Ask your agriculture officer whether a fungicide is needed after pruning, and which product is approved"
      ],
      "dont": [
        "Do not leave dead branches on the tree or prunings lying in the orchard",
        "Do not take grafting wood from trees with dieback"
      ]
    },
    {
      "slug": "mango-gall-midge",
      "name": "Mango Gall Midges (Leaf Gall and Flower Midge)",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Many small wart-like bumps on mango leaves with tiny holes; flower clusters and young fruit dry and drop.",
      "question": "Are there many small wart-like bumps on the mango leaves, some with tiny holes on the underside?",
      "keywords": [
        "mango gall midge",
        "gall midge",
        "leaf gall",
        "patton par daane",
        "patton par gaanth",
        "aam ke patte par dane",
        "machhar",
        "bour sookhna",
        "bour girna",
        "phal girna",
        "midge",
        "aam ka keera",
        "گال مِج",
        "آم کی گال مکھی",
        "پتوں پر دانے",
        "پتوں پر گانٹھیں",
        "پتوں پر ابھار",
        "بور سوکھنا",
        "بور جھڑنا",
        "چھوٹا پھل گرنا",
        "آم کے کیڑے",
        "ننھی مکھی"
      ],
      "chips": [
        "p_brown_spots",
        "p_holes",
        "p_fruit_drop",
        "p_curled"
      ],
      "todo": [
        "Pick off and burn heavily galled leaves on young trees and nursery plants",
        "Cut off and destroy flower clusters damaged by midge larvae",
        "Rake or lightly hoe the soil under the canopy to expose and destroy larvae and pupae",
        "Hang yellow sticky traps in the canopy from late winter to see when adult midges are flying",
        "Ask your agriculture officer whether a neem seed kernel extract or another approved spray is advised, and when to use it"
      ],
      "dont": [
        "Do not leave fallen galled leaves and dropped flower clusters under the trees"
      ]
    },
    {
      "slug": "mango-leaf-cutting-weevil",
      "name": "Mango Leaf-cutting Weevil",
      "type": "plant",
      "hosts": [
        "mango"
      ],
      "hostLabel": "Mango",
      "causeType": "Insect pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Tender new mango leaves are cut neatly near the base and fall; cut leaf pieces lie under the tree.",
      "question": "Are tender new mango leaves cut off neatly near the base, with many cut leaves lying under the tree?",
      "keywords": [
        "mango leaf cutting weevil",
        "leaf cutting weevil",
        "weevil",
        "patte kat gaye",
        "naye patte kate hue",
        "aam ke patte gir rahe",
        "bhoondi",
        "sundi",
        "nursery aam",
        "keera",
        "aam ka keera",
        "kata hua patta",
        "پتے کاٹنے والی بھونڈی",
        "آم کے پتے کٹ گئے",
        "نئے پتے کٹے ہوئے",
        "کٹے پتے گرنا",
        "بھونڈی",
        "سونڈ والا کیڑا",
        "آم کی نرسری",
        "پتے مڑنا",
        "آم کے کیڑے",
        "نئی پھوٹ خراب"
      ],
      "chips": [
        "p_holes",
        "p_insects",
        "p_stunted"
      ],
      "todo": [
        "Collect all cut leaves from under the trees and nursery beds every day while the attack lasts, and burn or bury them deep",
        "Lightly hoe or rake the soil under the canopy to destroy pupae",
        "Check new flushes in the morning for weevils and fresh cutting",
        "If nurseries or young trees are badly attacked, ask your agriculture officer whether a spray is needed and which product is approved"
      ],
      "dont": [
        "Do not leave cut leaves lying on the ground, because the next generation develops inside them"
      ]
    },
    {
      "slug": "citrus-nutrient-deficiency",
      "name": "Nutrient Deficiencies of Citrus (Kinnow)",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Orange, Lemon)",
      "causeType": "Nutrient deficiency",
      "urgency": "",
      "zoonotic": false,
      "short": "Kinnow leaves yellow in patterns: small mottled new leaves, green veins on yellow, or yellow wedges on old leaves.",
      "question": "Is the yellow pattern the same on both halves of each leaf, and does it show on either the old leaves or the new flush across the tree?",
      "keywords": [
        "kinnow patte peele",
        "kinno pattay peelay",
        "citrus deficiency",
        "zinc ki kami",
        "zink ki kami",
        "iron ki kami",
        "lohe ki kami",
        "magnesium ki kami",
        "chote patte",
        "kinnow ke patte chote",
        "malta patte peela",
        "khurak ki kami",
        "little leaf",
        "kinnow khad",
        "کنو کے پتے پیلے",
        "زنک کی کمی",
        "آئرن کی کمی",
        "لوہے کی کمی",
        "میگنیشیم کی کمی",
        "چھوٹے پتے",
        "مالٹے کے پتے پیلے",
        "خوراک کی کمی",
        "غذائی کمی",
        "ترشاوہ پھلوں کی کھاد",
        "کنو کی کھاد"
      ],
      "chips": [
        "p_interveinal",
        "p_small_leaves",
        "p_yellowing",
        "p_old_leaves_yellow",
        "p_dieback"
      ],
      "todo": [
        "Look at which leaves show the pattern, the old leaves or the new flush, and compare with the symptoms list",
        "Check drainage and roots first: if the soil near the trunk stays wet or the feeder roots are dark and rotting, fix the water problem before adding fertiliser",
        "Have the leaves tested (your agriculture officer will tell you which leaves to pick and when) and get soil tested at the agriculture department's soil testing lab",
        "Give the missing nutrients as fertiliser or as a leaf spray on the new flush only as advised by your agriculture officer or the soil lab",
        "Spread well-rotted farmyard manure or compost under the canopy to improve the soil"
      ],
      "dont": [
        "Don't keep adding urea to yellow trees without checking; yellowing of new leaves is usually not nitrogen shortage",
        "Don't flood the basin around the trunk or keep the soil waterlogged"
      ]
    },
    {
      "slug": "citrus-bacterial-blast",
      "name": "Citrus Blast (Bacterial Blight)",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Orange, Kinnow, Lemon)",
      "causeType": "Bacterial",
      "urgency": "",
      "zoonotic": false,
      "short": "Black spots on leaf stalks spread into twigs; leaves wither and drop and twigs die after cold, windy rain.",
      "question": "Did the trouble start as black spots on the leaf stalks after a cold, windy, wet spell, without raised corky spots on the leaves?",
      "keywords": [
        "citrus blast",
        "bacterial blast",
        "black pit",
        "kinnow tehni sookhna",
        "tehniyan sookh gayi",
        "tehniyan sukh gain",
        "patte jhar gaye",
        "patte girna",
        "kale dhabbe",
        "kaale dhabbay",
        "malta ki bimari",
        "kinnow ki bimari",
        "sardi ka nuqsan",
        "ترشاوہ بلاسٹ",
        "بلیک پٹ",
        "کنو کی ٹہنیاں سوکھنا",
        "ٹہنیاں سوکھ گئیں",
        "پتے جھڑ گئے",
        "پتے گرنا",
        "کالے دھبے",
        "مالٹے کی بیماری",
        "کنو کی بیماری",
        "سردی کا نقصان"
      ],
      "chips": [
        "p_dieback",
        "p_dark_wet",
        "p_brown_spots",
        "p_fruit_spots"
      ],
      "todo": [
        "Look closely to rule out canker: canker makes raised, corky spots with a yellow ring on the leaf blade, while blast starts as black spots on the leaf stalk and twig",
        "When the cold, rainy season is over, cut out dead and diseased twigs back into healthy wood, and burn or bury them away from the orchard",
        "Clean and disinfect pruning tools between trees",
        "Show fresh samples of affected twigs and leaves to your agriculture officer to confirm the cause",
        "If blast is confirmed and comes back every year, ask your agriculture officer about a protective spray recommended by the agriculture department before the cold, rainy season"
      ],
      "dont": [
        "Don't prune heavily or give extra nitrogen in late summer or autumn; it pushes soft new growth that is easily infected",
        "Don't spray just because twigs died after a cold spell; frost damage looks similar and needs no spray"
      ]
    },
    {
      "slug": "citrus-leaf-curl",
      "name": "Leaf Curl in Citrus (Causes and Remedies)",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Orange, Lemon)",
      "causeType": "Several causes (insects, mites, stress, viruses)",
      "urgency": "",
      "zoonotic": false,
      "short": "Citrus leaves curl or twist, mostly on new flush; caused by insects, mites, water stress or sometimes viruses.",
      "question": "When you turn over the curled leaves, can you see insects, tunnels or tiny mites?",
      "keywords": [
        "kinnow patte murr gaye",
        "patte mur gaye",
        "patte mude hue",
        "patton ka murna",
        "leaf curl citrus",
        "kinnow leaf curl",
        "curl virus",
        "tela",
        "sust tela",
        "leaf miner",
        "malta patte murr",
        "nimbu ke patte",
        "lemon leaf curl",
        "chipchipa patta",
        "کنو کے پتے مڑ گئے",
        "پتے مڑنا",
        "پتوں کا مڑنا",
        "مالٹے کے پتے مڑے",
        "لیموں کے پتے مڑے",
        "سست تیلا",
        "لیف مائنر",
        "سٹرس سلا",
        "چپچپے پتے",
        "کرل وائرس",
        "جوئیں"
      ],
      "chips": [
        "p_curled",
        "p_insects",
        "p_tunnels",
        "p_sticky",
        "p_silvery",
        "p_webbing"
      ],
      "todo": [
        "Turn over the curled leaves and look with a hand lens for soft insects, tunnels, white waxy threads, tiny mites, or nothing at all",
        "Check soil moisture in the root zone; water regularly but do not waterlog",
        "On mature trees, leave light aphid or leafminer damage alone; natural enemies such as ladybirds and tiny wasps usually control them",
        "On young trees and nursery plants with heavy attack, cut off and destroy badly infested shoots; neem-based or soap-based sprays are milder options, and ask your agriculture officer before using any other spray",
        "If you see psyllids, contact your agriculture officer quickly, because they spread citrus greening",
        "If no pest is found and some branches keep crinkled or mottled leaves, show them to your agriculture officer for virus checking"
      ],
      "dont": [
        "Don't spray insecticide before you know the cause",
        "Don't cut off healthy branches just because the leaves are curled; damaged leaves still feed the tree"
      ]
    },
    {
      "slug": "citrus-powdery-mildew",
      "name": "Powdery Mildew of Citrus",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Orange, Lemon)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "White to grey powder on young citrus leaves and green twigs; leaves twist and pale, and young fruit may drop.",
      "question": "Is there a white powder on young leaves that rubs off easily and has no insects in it?",
      "keywords": [
        "powdery mildew",
        "citrus mildew",
        "safed powder",
        "safaid powder",
        "patton par safed powder",
        "patte safed",
        "safed phaphoond",
        "safaid phaphundi",
        "kinnow safed dhabbe",
        "kinnow safed dhabbay",
        "nimbu ke patte safed",
        "malta patte safed",
        "sufaid patte",
        "سفوفی پھپھوندی",
        "پاؤڈری ملڈیو",
        "سفید پاؤڈر",
        "پتوں پر سفید پاؤڈر",
        "سفید پھپھوندی",
        "کنو کے پتوں پر سفید دھبے",
        "لیموں کے پتے سفید",
        "مالٹے کے پتے سفید",
        "سفید دھبے"
      ],
      "chips": [
        "p_white_powder",
        "p_curled",
        "p_fruit_drop",
        "p_dieback"
      ],
      "todo": [
        "Check the new flush and rub the white patches: powdery mildew rubs off as dust, mealybugs are soft insects with cottony wax, and sooty mould is black",
        "Cut off badly affected shoots and collect fallen infected leaves, then burn or bury them away from the trees",
        "Open up crowded canopies and thin out crowded nursery plants so air and light can get in",
        "If the mildew keeps spreading on new flush, ask your agriculture officer for a recommended fungicide and the right time to spray",
        "Wash hands and clean tools after working on infected trees"
      ],
      "dont": [
        "Don't move or sell plants from a nursery bed that has powdery mildew"
      ]
    },
    {
      "slug": "citrus-shot-hole",
      "name": "Shot Hole and Leaf Spots of Citrus",
      "type": "plant",
      "hosts": [
        "citrus"
      ],
      "hostLabel": "Citrus (Kinnow, Orange, Lemon)",
      "causeType": "Several causes (bacteria, fungi, insects)",
      "urgency": "",
      "zoonotic": false,
      "short": "Small round holes in citrus leaves, often with a brown or yellow rim, where dried leaf spots have fallen out.",
      "question": "Do the holes have a raised, corky brown rim, with similar raised spots on twigs or fruit?",
      "keywords": [
        "shot hole",
        "patton mein surakh",
        "patte mein suraakh",
        "patte mein sorakh",
        "patte mein chhed",
        "kinnow patte surakh",
        "citrus leaf spot",
        "dhabbe",
        "dhabbay",
        "kinnow ke dhabbe",
        "canker",
        "kenkar",
        "patte jhar gaye",
        "پتوں میں سوراخ",
        "شاٹ ہول",
        "پتے میں چھید",
        "کنو کے پتوں میں سوراخ",
        "ترشاوہ کے دھبے",
        "دھبے",
        "کنو کے دھبے",
        "کینکر",
        "پتے جھڑ گئے",
        "بھورے دھبے"
      ],
      "chips": [
        "p_holes",
        "p_brown_spots",
        "p_yellowing",
        "p_fruit_spots"
      ],
      "todo": [
        "Look at the holes and at fresh spots on other leaves, twigs and fruit, and compare with the symptoms list",
        "If the spots are raised and corky, manage it as canker (see the canker guide): prune and burn infected twigs in dry weather",
        "Collect fallen spotted leaves and burn or bury them",
        "On small trees, pick off caterpillars by hand",
        "Show samples to your agriculture officer and spray only a product recommended by the agriculture department"
      ],
      "dont": [
        "Don't prune or work in the trees while they are wet, as this spreads canker bacteria"
      ]
    },
    {
      "slug": "guava-leaf-spots-red-rust",
      "name": "Leaf Spots and Red Rust of Guava",
      "type": "plant",
      "hosts": [
        "guava"
      ],
      "hostLabel": "Guava",
      "causeType": "Alga and fungi",
      "urgency": "",
      "zoonotic": false,
      "short": "Rusty-orange velvety spots, or small dark brown dots and patches, on guava leaves; heavily spotted leaves fall.",
      "question": "Are the spots raised, velvety and orange-red, like rust-coloured felt on the leaf?",
      "keywords": [
        "amrood ke patte",
        "amrood patte dhabbe",
        "amrood ke patton par dhabbe",
        "amrud ke dhabbay",
        "guava leaf spot",
        "red rust",
        "laal zang",
        "zang",
        "surkh dhabbe",
        "kale dhabbe",
        "kaale dhabbay",
        "algal leaf spot",
        "amrood ki bimari",
        "guava rust",
        "امرود کے پتوں پر دھبے",
        "امرود کے پتے",
        "سرخ زنگ",
        "لال زنگ",
        "زنگ",
        "سرخ دھبے",
        "کالے دھبے",
        "امرود کی بیماری",
        "کائی کے دھبے",
        "امرود کے پتے گرنا"
      ],
      "chips": [
        "p_orange_powder",
        "p_brown_spots",
        "p_yellowing",
        "p_fruit_spots"
      ],
      "todo": [
        "Check whether the spots are raised, velvety and orange (red rust) or flat and dark (fungal leaf spot)",
        "Prune crowded and crossing branches, cut out spotted twigs, and collect and burn fallen spotted leaves",
        "Control weeds and avoid wetting the leaves when irrigating",
        "Feed and water the trees well so they stay strong",
        "If spotting is heavy during the rains, ask your agriculture officer for a recommended spray and the right time",
        "If you see bright yellow powdery pustules on young leaves, show them to your agriculture officer"
      ],
      "dont": []
    },
    {
      "slug": "date-palm-graphiola-leaf-spot",
      "name": "Graphiola Leaf Spot (False Smut) of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Tiny yellow-brown spots with raised black cups on older date palm leaflets; yellow powder and threads come out.",
      "question": "Do the spots have tiny raised black cups with yellow powder or threads coming out?",
      "keywords": [
        "khajoor ke patte",
        "khajur ke patte",
        "khajoor patte par dhabbe",
        "khajoor ke dhabbe",
        "khajoor ke dhabbay",
        "date palm leaf spot",
        "graphiola",
        "false smut",
        "khajoor ki bimari",
        "khajur ki bimari",
        "kale dane",
        "peelay dhabbe",
        "peele dhabbe",
        "کھجور کے پتوں پر دھبے",
        "کھجور کے پتے",
        "کھجور کے دھبے",
        "گرافیولا",
        "جھوٹی کانگیاری",
        "کھجور کی بیماری",
        "پیلے دھبے",
        "کالے دانے",
        "کھجور کے پتے سوکھنا"
      ],
      "chips": [
        "p_brown_spots",
        "p_yellowing",
        "p_edge_drying"
      ],
      "todo": [
        "Look closely at the spots, if possible with a hand lens, for raised black cups; this separates Graphiola from potassium shortage and other leaf spots",
        "If the palm is otherwise healthy, cut out and burn the most heavily spotted old fronds, but leave enough green fronds",
        "Water at the base early in the morning so leaves do not stay wet",
        "Ask your agriculture officer whether a fungicide is needed; sprays only protect new leaves and do not clear existing spots"
      ],
      "dont": []
    },
    {
      "slug": "date-palm-rachis-blight",
      "name": "Rachis Blight (Leaf Base Blight) of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown streaks along the date palm leaf midrib; leaflets on one side die while the other side stays green.",
      "question": "Is there a brown streak along the midrib with leaflets dead on only that one side?",
      "keywords": [
        "khajoor ke patte sookhna",
        "khajoor ka patta sookh gaya",
        "khajur ke patte sukh rahe",
        "rachis blight",
        "khajoor ki bimari",
        "khajur ki bimari",
        "ek taraf se sookhna",
        "bhoori lakeer",
        "date palm leaf blight",
        "diplodia",
        "khajoor ke patte bhoore",
        "khajoor ki chhari sookhna",
        "کھجور کے پتے سوکھنا",
        "کھجور کا پتا سوکھ گیا",
        "ریکس بلائٹ",
        "کھجور کی بیماری",
        "ایک طرف سے سوکھنا",
        "بھوری لکیر",
        "کھجور کے پتے بھورے",
        "کھجور کی چھڑی سوکھنا",
        "ڈپلوڈیا"
      ],
      "chips": [
        "p_brown_spots",
        "p_edge_drying",
        "p_wilting"
      ],
      "todo": [
        "Check many fronds: if only a few old fronds show one-sided death, cut them out",
        "Remove and burn badly affected fronds, but leave enough green fronds, especially if the palm is also short of nutrients",
        "Clean and disinfect pruning tools between palms, and use a saw for clean cuts",
        "Protect fresh cuts on offshoots and palms as advised by your agriculture department",
        "Send a piece of affected rachis to a lab through your agriculture officer, especially if many palms or younger fronds are affected"
      ],
      "dont": [
        "Don't remove many green fronds at once; heavy pruning weakens the palm and makes more wounds"
      ]
    },
    {
      "slug": "nutrient-deficiency-signs",
      "name": "Nutrient Deficiency Signs: Potassium, Magnesium, Iron, Boron and Others",
      "type": "plant",
      "hosts": [
        "wheat",
        "rice",
        "cotton",
        "maize",
        "sugarcane",
        "potato",
        "tomato",
        "onion",
        "chili",
        "okra",
        "brinjal",
        "cucurbits",
        "cabbage",
        "chickpea",
        "mustard",
        "citrus",
        "mango",
        "guava",
        "datepalm"
      ],
      "hostLabel": "All Crops, Vegetables & Fruit Trees",
      "causeType": "Nutrient deficiency",
      "urgency": "",
      "zoonotic": false,
      "short": "Leaves show colour patterns: scorched edges, yellow between green veins, pale new leaves or deformed growing tips.",
      "question": "Does the same leaf colour pattern appear evenly on many plants, starting on either the old leaves or the newest leaves?",
      "keywords": [
        "nutrient deficiency",
        "khurak ki kami",
        "khuraki kami",
        "potash ki kami",
        "magnesium ki kami",
        "iron ki kami",
        "boron ki kami",
        "calcium ki kami",
        "patte peele",
        "pattay peelay",
        "patte ke kinare jal gaye",
        "kinare sookhna",
        "rago ke beech peela",
        "khad ki kami",
        "fertilizer kami",
        "غذائی کمی",
        "خوراک کی کمی",
        "پوٹاش کی کمی",
        "میگنیشیم کی کمی",
        "آئرن کی کمی",
        "بوران کی کمی",
        "کیلشیم کی کمی",
        "پتے پیلے",
        "پتوں کے کنارے جل گئے",
        "رگوں کے درمیان پیلا پن",
        "کھاد کی کمی",
        "پتے سوکھنا"
      ],
      "chips": [
        "p_interveinal",
        "p_old_leaves_yellow",
        "p_edge_drying",
        "p_yellowing",
        "p_malformed",
        "p_stunted"
      ],
      "todo": [
        "Note which leaves show the signs first, the old lower leaves or the newest ones, and what the pattern looks like",
        "Rule out other causes: look at the roots, check for waterlogging, look under leaves for pests, and think about recent herbicide sprays nearby",
        "Compare with healthy plants or a healthy part of the field",
        "Take soil and leaf samples to the agriculture department's soil and water testing lab",
        "Give the missing nutrient as fertiliser or leaf spray only on the advice of your agriculture officer or the lab",
        "Add compost or well-rotted farmyard manure to improve the soil"
      ],
      "dont": [
        "Don't apply many fertilisers or micronutrient mixtures blindly; too much of one nutrient can cause another shortage",
        "Don't assume all yellowing is nitrogen shortage; more urea will not cure iron, magnesium or potassium shortage"
      ]
    },
    {
      "slug": "leaf-eating-insects",
      "name": "Leaf-eating Beetles and Caterpillars (Chewed Leaves)",
      "type": "plant",
      "hosts": [
        "brinjal",
        "potato",
        "maize",
        "tomato",
        "cucurbits",
        "cabbage",
        "okra",
        "chili"
      ],
      "hostLabel": "Brinjal, Potato, Melons & Gourds, Maize and Vegetables",
      "causeType": "Insect pests (chewing)",
      "urgency": "",
      "zoonotic": false,
      "short": "Holes, chewed edges or lace-like scraped leaves on vegetables or maize, made by beetles or caterpillars.",
      "question": "When you look under the leaves, or check at night with a torch, do you find beetles, grubs or caterpillars feeding on the leaves?",
      "keywords": [
        "leaf eating insect",
        "holes in leaves",
        "patte mein surakh",
        "pattay mein suraakh",
        "patte khaye gaye",
        "hadda beetle",
        "epilachna",
        "red pumpkin beetle",
        "lal bhundi",
        "laal bhoondi",
        "sundi",
        "sundee",
        "keeray",
        "keere",
        "flea beetle",
        "پتوں میں سوراخ",
        "پتے کھانے والا کیڑا",
        "ہڈا بھونڈی",
        "ایپی لیکنا بیٹل",
        "لال بھونڈی",
        "کدو کی لال بھونڈی",
        "سنڈی",
        "سنڈیاں",
        "پتے کھائے گئے",
        "بینگن کے پتے کھائے",
        "بھونڈی",
        "فلی بیٹل"
      ],
      "chips": [
        "p_holes",
        "p_caterpillars",
        "p_insects"
      ],
      "todo": [
        "Look closely under the leaves, in the shoot tips and in the maize whorl; check again with a torch after dark, when many caterpillars and beetles feed",
        "Identify the insect: dull orange beetles with many black spots and spiny yellow grubs are hadda beetles; shiny orange-red beetles on gourds are red pumpkin beetles; tiny jumping black beetles are flea beetles; soft larvae with legs are caterpillars",
        "Hand-pick beetles, grubs, egg clusters and groups of young caterpillars and drop them into a bowl of soapy water; early morning is best, when beetles move slowly",
        "Cover melon and gourd seedlings with fine net or mosquito netting until they have several true leaves",
        "Neem-based sprays can help against young caterpillars and grubs; spray in the evening and wet the underside of the leaves",
        "If damage keeps spreading on young plants, ask your agriculture officer whether an insecticide is needed and which one is approved for that crop"
      ],
      "dont": [
        "Don't spray at the first few holes; first find which insect is there and whether it is still present",
        "Don't kill helpful ladybirds: the hadda beetle is dull and slightly hairy with many spots, while ladybirds that eat aphids are shiny"
      ]
    },
    {
      "slug": "brinjal-leaf-spots",
      "name": "Leaf Spots and Phomopsis Blight of Brinjal",
      "type": "plant",
      "hosts": [
        "brinjal"
      ],
      "hostLabel": "Brinjal",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown spots on brinjal leaves, some with rings; sunken dark spots and rot on fruit; seedlings may collapse.",
      "question": "Are there spots with tiny black dots or rings on the leaves, and sunken rotting patches on the fruit?",
      "keywords": [
        "brinjal leaf spot",
        "baingan ke patte par dhabbe",
        "baingan ke pattay par dhabbay",
        "baingan ka phal gal gaya",
        "phomopsis",
        "brinjal blight",
        "fruit rot",
        "phal sarna",
        "patte jal gaye",
        "jhulsao",
        "alternaria",
        "baingan bimari",
        "dhabbe",
        "dhabbay",
        "بینگن کے پتوں پر دھبے",
        "بینگن کا پھل گل گیا",
        "بینگن کی بیماری",
        "فوموپسس",
        "جھلساؤ",
        "پھل کی سڑن",
        "بھورے دھبے",
        "چھلوں والے دھبے",
        "پنیری گر گئی",
        "الٹرنیریا"
      ],
      "chips": [
        "p_brown_spots",
        "p_target_spots",
        "p_fruit_spots",
        "p_rot"
      ],
      "todo": [
        "Pick off spotted leaves and rotten fruit and take them out of the field; bury them deep or destroy them, don't leave them on the ground",
        "Pull out and destroy collapsed nursery seedlings and plants with ringed, cankered stems",
        "Keep the leaves as dry as possible: water at the base of the plants and avoid watering late in the day",
        "Improve air flow by removing weeds and some crowded lower leaves",
        "If spots keep spreading in wet weather, ask your agriculture officer for a fungicide approved for brinjal, and keep the waiting period before picking"
      ],
      "dont": [
        "Don't save seed from spotted or rotten fruit",
        "Don't throw rotten fruit at the field edge or into irrigation channels"
      ]
    },
    {
      "slug": "vegetable-virus-diseases",
      "name": "Virus Diseases of Vegetables (Mosaic, Yellowing, Curling)",
      "type": "plant",
      "hosts": [
        "tomato",
        "brinjal",
        "onion",
        "chili",
        "cucurbits",
        "okra",
        "potato"
      ],
      "hostLabel": "Tomato, Chilli, Okra, Melons & Gourds, Brinjal, Onion & Potato",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Leaves with light and dark green mosaic, yellow veins, curling or crinkling; plants stunted with poor fruit.",
      "question": "Do the leaves show light and dark green mosaic, yellow veins or curling, without any powder, rot or holes?",
      "keywords": [
        "virus",
        "vegetable virus",
        "mosaic",
        "leaf curl",
        "patta marod",
        "patta maror",
        "patte murr gaye",
        "pattay mur gaye",
        "peeli rag",
        "patte peele",
        "pattay peelay",
        "sabzi bimari",
        "chitkabra patta",
        "little leaf",
        "وائرس",
        "سبزیوں کا وائرس",
        "موزیک",
        "پتہ مروڑ",
        "پتے مڑ گئے",
        "پیلی رگیں",
        "پتے پیلے",
        "چتکبرے پتے",
        "چھوٹا پتہ",
        "پودا چھوٹا رہ گیا",
        "سفید مکھی",
        "سست تیلا"
      ],
      "chips": [
        "p_mosaic",
        "p_curled",
        "p_stunted",
        "p_yellowing",
        "p_small_leaves"
      ],
      "todo": [
        "Check the field every week and mark plants with mosaic, curling or yellow veins",
        "Pull out infected plants early, put them in a bag, and bury or destroy them away from the field; this works best while only a few plants are affected",
        "Control the insect carriers: yellow sticky traps for whiteflies and aphids, blue sticky traps for thrips, and neem-based sprays on young plants; ask your agriculture officer before using any insecticide",
        "Wash hands with soap and water after touching infected plants, and clean tools before moving to healthy plants",
        "Remove weeds in and around the field, because they shelter both the insects and the viruses",
        "Give the remaining plants good water and balanced fertiliser so they keep growing"
      ],
      "dont": [
        "Don't spend money on 'virus cure' sprays; no spray cures a virus-infected plant",
        "Don't leave pulled-out plants lying in or beside the field"
      ]
    },
    {
      "slug": "potato-virus-diseases",
      "name": "Virus Diseases of Potato (Leafroll, PVY and Mosaic)",
      "type": "plant",
      "hosts": [
        "potato"
      ],
      "hostLabel": "Potato",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Potato leaves rolled upward, stiff and leathery, or mottled and crinkled; plants stunted and tubers small.",
      "question": "Do some scattered plants have lower leaves that are rolled upward, stiff and leathery, and rustle like paper when touched?",
      "keywords": [
        "potato virus",
        "leafroll",
        "leaf roll",
        "aloo patta marod",
        "aloo ke patte murr gaye",
        "aloo ke pattay mur gaye",
        "PLRV",
        "PVY",
        "mosaic",
        "aloo bimari",
        "aloo ka beej",
        "certified seed",
        "patte sakht",
        "patte peele",
        "آلو کا وائرس",
        "آلو کا پتہ مروڑ",
        "آلو کے پتے مڑ گئے",
        "آلو کی بیماری",
        "موزیک",
        "تصدیق شدہ بیج",
        "آلو کا بیج",
        "پتے سخت",
        "تیلا",
        "آلو کا پودا چھوٹا"
      ],
      "chips": [
        "p_curled",
        "p_mosaic",
        "p_yellowing",
        "p_stunted"
      ],
      "todo": [
        "Walk the field soon after the plants come up, and then every week; mark plants with rolled, stiff or mottled leaves",
        "Pull out the whole sick plant with its tubers early, before plants touch each other; carry it out of the field in a closed bag and bury or destroy it",
        "Look for aphids under the leaves, and use yellow sticky traps or yellow water pans to see when winged aphids arrive",
        "Ask your agriculture officer whether an aphid spray is needed, especially in a seed crop; sprays help less against PVY because aphids pass it so fast",
        "Do not keep tubers from a field with many sick plants for use as seed"
      ],
      "dont": [
        "Don't use small tubers from virus-affected plants as seed",
        "Don't cut seed tubers from different lots with the same knife without cleaning it"
      ]
    },
    {
      "slug": "maize-leaf-stripes",
      "name": "Stripes on Maize Leaves (Causes)",
      "type": "plant",
      "hosts": [
        "maize"
      ],
      "hostLabel": "Maize",
      "causeType": "Several causes (nutrient, genetic, virus, herbicide)",
      "urgency": "",
      "zoonotic": false,
      "short": "Yellow, white or pale stripes along maize leaves; find the cause from which leaves and plants show them.",
      "question": "Are the stripes on the youngest leaves, in patches of the field, starting as white bands near the base of the leaf?",
      "keywords": [
        "maize stripes",
        "makai ke patte par dhariyan",
        "makai ke pattay par dhaariyan",
        "makki patta safed",
        "corn leaf stripes",
        "zinc ki kami",
        "zink ki kami",
        "white bud",
        "patte peele",
        "pattay peelay",
        "dhariyan",
        "safed patti",
        "genetic stripe",
        "مکئی کے پتوں پر دھاریاں",
        "مکئی کے پتے سفید",
        "مکئی کے پتے پیلے",
        "زنک کی کمی",
        "سفید گوبھ",
        "دھاریاں",
        "سفید پٹیاں",
        "مکئی کی بیماری",
        "غذائی کمی",
        "مکئی کا پودا چھوٹا"
      ],
      "chips": [
        "p_interveinal",
        "p_yellowing",
        "p_stunted",
        "p_mosaic"
      ],
      "todo": [
        "Check which leaves have stripes: young top leaves, older lower leaves, or all leaves",
        "Check the pattern in the field: whole field or patches (soil or nutrient), scattered single plants (genetic stripe or virus), or straight lines and field edges (herbicide)",
        "Ask your agriculture department for a soil test and, if possible, a leaf test from striped and normal plants",
        "If zinc shortage is confirmed or very likely, apply zinc as your agriculture officer advises; both leaf sprays and soil application work when used correctly",
        "If only a few scattered plants have stripes, mark them and watch; genetic stripe needs no treatment",
        "If you suspect a virus, pull out badly affected young plants and show samples to your agriculture officer"
      ],
      "dont": [
        "Don't spray fungicides or insecticides for stripes; they do not fix a nutrient shortage or genetic stripe",
        "Don't add extra fertiliser blindly; too much phosphate can make zinc shortage worse"
      ]
    },
    {
      "slug": "onion-caterpillars",
      "name": "Caterpillars on Onion (Armyworm and Cutworm)",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion",
      "causeType": "Insect pest (caterpillars)",
      "urgency": "",
      "zoonotic": false,
      "short": "Caterpillars scraping or eating onion leaves, often hiding inside hollow leaves; young plants cut at the base.",
      "question": "Are there caterpillars or droppings inside the hollow onion leaves, or young plants cut off at the base?",
      "keywords": [
        "onion caterpillar",
        "pyaz ki sundi",
        "piyaz ki sundi",
        "pyaz ki sundee",
        "beet armyworm",
        "lashkari sundi",
        "cutworm",
        "toka sundi",
        "pyaz ke patte khaye",
        "pyaz ke pattay",
        "keeray",
        "keere",
        "sundi",
        "پیاز کی سنڈی",
        "پیاز کی سنڈیاں",
        "لشکری سنڈی",
        "ٹوکا سنڈی",
        "کٹ ورم",
        "پیاز کے پتے کھائے",
        "پیاز کے پتوں میں سوراخ",
        "پنیری کٹ گئی",
        "سنڈی",
        "پیاز کا کیڑا"
      ],
      "chips": [
        "p_caterpillars",
        "p_holes",
        "p_wilting"
      ],
      "todo": [
        "Check the nursery and young field twice a week; open some leaves and look for windows, holes and droppings",
        "Hand-pick and crush egg masses and groups of young caterpillars, and pull off badly eaten leaves that have caterpillars inside",
        "For cutworms, dig gently around freshly cut plants in the morning and destroy the caterpillar you find",
        "Use light traps to catch moths where electricity is available",
        "Neem-based sprays or approved biological products (such as insect virus products) work best on young caterpillars",
        "If damage keeps spreading, ask your agriculture officer which insecticide is approved for onion and when to spray"
      ],
      "dont": [
        "Don't keep spraying the same insecticide again and again; beet armyworm quickly stops dying from it"
      ]
    },
    {
      "slug": "rice-downy-mildew",
      "name": "Downy Mildew (Crazy Top) of Rice",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Stunted rice with short, twisted, yellow-spotted leaves, extra tillers and leafy, deformed or missing panicles.",
      "question": "Do stunted plants in low, waterlogged spots have leafy, twisted panicles, or extra tillers with short, twisted leaves?",
      "keywords": [
        "rice downy mildew",
        "crazy top",
        "dhan ki bimari",
        "dhaan ki bimari",
        "chawal ki bimari",
        "patte murr gaye",
        "pattay mur gaye",
        "bali nahi nikli",
        "bali patton wali",
        "dhan ka qad chota",
        "pani khara",
        "munji",
        "دھان کی بیماری",
        "روئیں دار پھپھوندی",
        "ڈاؤنی ملڈیو",
        "کریزی ٹاپ",
        "بالی نہیں نکلی",
        "پتوں جیسی بالی",
        "دھان کے پتے مڑ گئے",
        "دھان کا پودا چھوٹا",
        "پنیری پانی میں ڈوب گئی",
        "مونجی کی بیماری"
      ],
      "chips": [
        "p_malformed",
        "p_stunted",
        "p_yellowing",
        "p_curled"
      ],
      "todo": [
        "Take some affected plants to your agriculture officer to confirm the cause, because look-alike problems are more common",
        "Pull out and destroy plants with leafy, twisted panicles so they do not leave more spores in the soil",
        "Improve drainage in low spots and avoid keeping very young seedlings under deep water",
        "Remove grassy weeds from bunds and water channels",
        "Spraying is rarely worthwhile for this disease; use a product only if the agriculture department advises it"
      ],
      "dont": []
    },
    {
      "slug": "rice-stripe-virus",
      "name": "Rice Stripe Virus",
      "type": "plant",
      "hosts": [
        "rice"
      ],
      "hostLabel": "Rice",
      "causeType": "Viral",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale yellow broken stripes on rice leaves; young leaves droop and wilt; plants stunted with few panicles.",
      "question": "Do young plants have broken pale stripes and a newest leaf that stays rolled and droops, with no sign of zinc shortage or tungro?",
      "keywords": [
        "rice stripe virus",
        "dhan ki dhariyan",
        "dhan ke patte par dhariyan",
        "dhaan ke pattay par dhaariyan",
        "chawal virus",
        "dhan virus",
        "stripe virus",
        "patta latak gaya",
        "دھان کا وائرس",
        "دھان کے پتوں پر دھاریاں",
        "دھاری وائرس",
        "سٹرائپ وائرس",
        "پتہ لٹک گیا",
        "مونجی کا وائرس"
      ],
      "chips": [
        "p_yellowing",
        "p_stunted",
        "p_wilting"
      ],
      "todo": [
        "First check for the common look-alikes: zinc shortage (khaira), tungro and bacterial leaf streak",
        "If stripes with drooping young leaves keep spreading and the common causes are ruled out, report to your agriculture department and give samples for testing",
        "Pull out and destroy badly affected plants while there are only a few",
        "Look for planthoppers at the base of the plants by tapping them over a tray or a pan of water",
        "Follow the agriculture department's advice on planthopper control; don't spray without need, because sprays kill natural enemies and can make planthoppers worse"
      ],
      "dont": []
    },
    {
      "slug": "wheat-stem-fly",
      "name": "Wheat Shoot Fly and Stem Fly",
      "type": "plant",
      "hosts": [
        "wheat"
      ],
      "hostLabel": "Wheat",
      "causeType": "Insect pest (fly maggot)",
      "urgency": "",
      "zoonotic": false,
      "short": "Central shoot of young wheat yellows and dries (dead heart), pulls out easily, and has a small maggot inside.",
      "question": "When you split a young shoot with a dried central leaf, do you find a small white legless maggot inside?",
      "keywords": [
        "shoot fly",
        "stem fly",
        "wheat shoot fly",
        "dead heart",
        "gandum ki makhi",
        "gandam ki makhi",
        "gandum ka keera",
        "gandum keeray",
        "darmiyani patta sookh gaya",
        "pauda sookh gaya",
        "gobh sookh gayi",
        "maggot",
        "gandum bimari",
        "شوٹ فلائی",
        "تنے کی مکھی",
        "گندم کی مکھی",
        "ڈیڈ ہارٹ",
        "گوبھ سوکھ گئی",
        "درمیانی پتہ سوکھ گیا",
        "گندم کا کیڑا",
        "گندم کی سنڈی",
        "پنیری سوکھ گئی",
        "گندم کی بیماری"
      ],
      "chips": [
        "p_dead_heart",
        "p_stunted",
        "p_yellowing"
      ],
      "todo": [
        "Pull out a few plants with dead hearts and split the shoot to look for a maggot or pupa; this separates shoot fly from other causes",
        "If only a few plants are affected, no action is usually needed, because wheat makes extra tillers",
        "In small plots, pull out and destroy plants with live maggots",
        "Ask your agriculture officer before using any insecticide; treatment is usually worthwhile only if many seedlings are attacked early",
        "Keep the crop well watered and fed so it can tiller and fill the gaps"
      ],
      "dont": []
    },
    {
      "slug": "onion-downy-mildew",
      "name": "Downy Mildew of Onion",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion",
      "causeType": "Water mould (oomycete)",
      "urgency": "",
      "zoonotic": false,
      "short": "Pale oval patches on older onion leaves with grey-violet fuzz in damp weather; leaves fold over and collapse.",
      "question": "In cool, damp weather, do the older onion leaves have pale patches covered with a grey to violet fuzz in the morning?",
      "keywords": [
        "onion downy mildew",
        "downy mildew",
        "pyaz ki phaphoondi",
        "piaz ki phaphoondi",
        "rooyen dar phaphoondi",
        "pyaz ke patte peele",
        "piaz ke patte peele",
        "pyaz patte gir gaye",
        "pyaz ke patte murjha gaye",
        "surmai phaphoond",
        "jamni phaphoond",
        "pyaz ka beej",
        "pyaz ki bimari",
        "پیاز کی روئیں دار پھپھوندی",
        "ڈاؤنی ملڈیو",
        "پیاز کی پھپھوندی",
        "پیاز کے پتے پیلے",
        "پیاز کے پتے گر گئے",
        "سرمئی روئیں",
        "جامنی روئیں",
        "پیاز کا بیج",
        "پیاز کی بیماری",
        "پیاز کے پتوں پر دھبے"
      ],
      "chips": [
        "p_yellowing",
        "p_edge_drying",
        "p_stunted"
      ],
      "todo": [
        "Walk the field in the early morning in cool, damp weather and look closely at older leaves for pale patches with grey-violet fuzz",
        "Pull out and destroy badly infected, stunted plants that grew from infected sets; do not leave them in or near the field",
        "Irrigate in the morning so leaves dry by evening, and avoid over-watering",
        "Contact your agriculture officer at the first signs; a fungicide recommended by the agriculture department for downy mildew works best when used early and before more wet weather",
        "Do not keep bulbs from a badly infected field for planting or as sets next season"
      ],
      "dont": [
        "Don't dump culled or rotten onions next to onion fields or nurseries",
        "Don't use sprinkler or evening irrigation during cool, damp weather"
      ]
    },
    {
      "slug": "onion-storage-rots",
      "name": "Neck Rot and Storage Rots of Onion",
      "type": "plant",
      "hosts": [
        "onion"
      ],
      "hostLabel": "Onion (stored bulbs)",
      "causeType": "Fungal and bacterial (storage)",
      "urgency": "",
      "zoonotic": false,
      "short": "Stored onions go soft at the neck, show grey or black powdery mould under the skin, or rot with a bad smell.",
      "question": "Do the stored onions have a soft neck, grey or black powdery mould under the skin, or a watery inside with a bad smell?",
      "keywords": [
        "onion storage rot",
        "neck rot",
        "black mould onion",
        "black mold",
        "pyaz gal gaya",
        "pyaz gal gaye",
        "piaz gal gaya",
        "pyaz sar gaya",
        "pyaz ki gardan gal gayi",
        "pyaz mein kala powder",
        "pyaz se badbu",
        "pyaz godam",
        "pyaz ki storage",
        "soft rot",
        "پیاز گل گیا",
        "پیاز گل گئے",
        "پیاز سڑ گیا",
        "پیاز کی گردن گلنا",
        "گودام میں پیاز گلنا",
        "پیاز میں کالا پاؤڈر",
        "کالی پھپھوندی",
        "پیاز سے بدبو",
        "پیاز کا ذخیرہ",
        "پیاز سکھانا",
        "نرم پیاز"
      ],
      "chips": [
        "p_rot"
      ],
      "todo": [
        "Check stored onions every week or two; remove soft, smelly or mouldy bulbs at once and keep them away from the store",
        "Spread out bulbs from wet or warm sacks and heaps so they can dry and air can move between them",
        "Sell or use soon any lot that is starting to rot instead of keeping it longer",
        "Improve ventilation in the store: open vents at cool, dry times and avoid stacking sacks against walls or on a damp floor",
        "Note which field and variety rotted most; ask your agriculture officer for advice on curing, storage and seed treatment for the next crop"
      ],
      "dont": [
        "Don't store onions that are bruised, cut, thick-necked or not fully dry",
        "Don't throw or drop sacks; bruising lets rot germs in",
        "Don't keep onions in deep heaps or closed, airless rooms"
      ]
    },
    {
      "slug": "damping-off",
      "name": "Damping-off of Seedlings (Nursery Death)",
      "type": "plant",
      "hosts": [
        "tomato",
        "chili",
        "brinjal",
        "onion",
        "cabbage",
        "cucurbits",
        "cotton",
        "okra"
      ],
      "hostLabel": "Vegetable Nurseries, Cotton & Okra Seedlings",
      "causeType": "Fungal / water mould (soil-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Seeds fail to come up, or young seedlings get a thin, rotten stem at the soil line, fall over and die in patches.",
      "question": "Do the young seedlings have a thin, soft, dark stem at the soil line and fall over in patches, especially in a wet bed?",
      "keywords": [
        "damping off",
        "seedling rot",
        "paneeri mar gayi",
        "paneri mar gayi",
        "paneeri gal gayi",
        "paneri gal gayi",
        "nursery kharab",
        "pauday gir gaye",
        "paude gir gaye",
        "pauda gal gaya",
        "zameen ke paas tana gal gaya",
        "tamatar ki paneeri",
        "mirch ki paneeri",
        "pyaz ki paneeri",
        "beej nahi uga",
        "پنیری مر گئی",
        "پنیری گل گئی",
        "پنیری کا گرنا",
        "ڈیمپنگ آف",
        "پودے گر گئے",
        "تنا زمین کے پاس گل گیا",
        "ٹماٹر کی پنیری",
        "مرچ کی پنیری",
        "پیاز کی پنیری",
        "بیج نہیں اگا",
        "نرسری خراب"
      ],
      "chips": [
        "p_wilting",
        "p_dark_wet",
        "p_stunted",
        "p_patches_dry"
      ],
      "todo": [
        "Stop watering for a while and let the top of the bed dry; then water lightly, in the morning only",
        "Remove collapsed seedlings with the soil around them and destroy them away from the nursery",
        "Thin out crowded seedlings and open any cover so air can move and the surface can dry",
        "Open drains around the bed so no water stands in it",
        "Ask your agriculture officer whether a fungicide or biological product approved for nursery drenching is worth using; if most seedlings are lost, sow again on a fresh, raised, well-drained site"
      ],
      "dont": [
        "Don't keep watering a nursery bed that is already wet",
        "Don't transplant seedlings with dark, thin or rotten stems into the field"
      ]
    },
    {
      "slug": "cutworms",
      "name": "Cutworms",
      "type": "plant",
      "hosts": [
        "chickpea",
        "potato",
        "tomato",
        "maize",
        "onion",
        "chili",
        "cabbage",
        "wheat",
        "cotton"
      ],
      "hostLabel": "Seedlings of Vegetables, Chickpea, Maize, Wheat & Cotton",
      "causeType": "Insect pest (caterpillar)",
      "urgency": "",
      "zoonotic": false,
      "short": "Young plants found cut through at the base in the morning; fat grey-brown caterpillars curl up in the soil nearby.",
      "question": "Are young plants being cut through at the base overnight, with a fat caterpillar curled like a 'C' hidden in the soil nearby?",
      "keywords": [
        "cutworm",
        "cut worm",
        "tooka sundi",
        "toka sundi",
        "tooka",
        "toka",
        "zameen ki sundi",
        "kali sundi",
        "pauday kat gaye",
        "paude kat gaye",
        "pauda neeche se kata",
        "aalu ki sundi",
        "chane ki sundi",
        "raat ko katne wali sundi",
        "greasy cutworm",
        "ٹوکا سنڈی",
        "ٹوکا",
        "کٹ ورم",
        "زمین کی سنڈی",
        "کالی سنڈی",
        "پودے کٹ گئے",
        "پودا نیچے سے کٹا",
        "آلو کی سنڈی",
        "چنے کی سنڈی",
        "رات کو کاٹنے والی سنڈی",
        "مٹی میں سنڈی"
      ],
      "chips": [
        "p_caterpillars",
        "p_root_damage",
        "p_wilting",
        "p_holes"
      ],
      "todo": [
        "In the early morning, check rows for freshly cut plants and dig lightly in the soil around them; collect and destroy the caterpillars by hand, especially on small plots",
        "Repeat hand picking in the evening and early morning for a few days, also checking soil cracks and under clods",
        "Where the crop allows, irrigate the infested field; water brings caterpillars to the surface and kills many young ones, and birds pick them up",
        "Fill gaps by re-sowing or transplanting once the caterpillars are under control",
        "If many plants are being cut, ask your agriculture officer whether an approved bait or insecticide is needed, how to apply it near the plant base, and at what time of day"
      ],
      "dont": [
        "Don't sow or transplant straight after ploughing in heavy weed or grass growth; give it time to dry out first",
        "Don't spray the whole crop canopy for cutworms; the caterpillars hide in the soil, so leaf sprays mostly miss them"
      ]
    },
    {
      "slug": "chickpea-dry-root-rot",
      "name": "Dry Root Rot of Chickpea",
      "type": "plant",
      "hosts": [
        "chickpea"
      ],
      "hostLabel": "Chickpea (Gram)",
      "causeType": "Fungal (soil-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Chickpea plants dry suddenly at flowering or podding; the main root is black, rotten and brittle and snaps off.",
      "question": "Are the drying plants' main roots black, rotten and brittle, snapping off when pulled, with tiny black dots under the bark?",
      "keywords": [
        "dry root rot",
        "chickpea root rot",
        "chana sookh gaya",
        "chana sukh gaya",
        "chane ki jarh gal gayi",
        "chane ki jar kali",
        "jarh sar gayi",
        "chana jal gaya",
        "gram root rot",
        "phaliyan khali",
        "chane ki bimari",
        "macrophomina",
        "چنا سوکھ گیا",
        "چنے کی جڑ گل گئی",
        "چنے کی جڑ کالی",
        "جڑ کا گلاؤ",
        "جڑ کا خشک گلاؤ",
        "چنا جل گیا",
        "پھلیاں خالی",
        "چنے کی بیماری",
        "چنے کے پودے سوکھنا",
        "بارانی چنا"
      ],
      "chips": [
        "p_wilting",
        "p_yellowing",
        "p_patches_dry"
      ],
      "todo": [
        "Pull up a few drying plants and check the roots: black, rotten, brittle roots with peeling bark and tiny black dots point to dry root rot",
        "Split the main root lengthwise: in wilt (ukhera) the root looks healthy outside but has a brown or black streak inside, while in dry root rot the root itself is rotten",
        "Where irrigation is available, a light irrigation at flowering and pod filling reduces stress; avoid waterlogging",
        "Dried plants cannot be saved; after harvest collect and destroy infected plant remains instead of leaving them in the field",
        "Note the affected fields and ask your agriculture officer which tolerant variety, sowing date and seed treatment suit your area"
      ],
      "dont": []
    },
    {
      "slug": "chickpea-botrytis-grey-mould",
      "name": "Botrytis Grey Mould of Chickpea",
      "type": "plant",
      "hosts": [
        "chickpea"
      ],
      "hostLabel": "Chickpea (Gram)",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Grey, fuzzy mould on chickpea flowers, pods and stems in dense, humid crops; flowers rot and drop, few pods set.",
      "question": "In cool, humid weather, are the chickpea flowers, stems and pods covered with a grey, fuzzy, dusty mould?",
      "keywords": [
        "botrytis grey mould",
        "gray mold",
        "grey mould chickpea",
        "chane ki surmai phaphoondi",
        "chana phaphoond",
        "chane ke phool gir gaye",
        "phool jhar gaye",
        "phaliyan nahi lagi",
        "chana gal gaya",
        "chane ki bimari",
        "surmai phaphoond",
        "chana tana toot gaya",
        "چنے کی سرمئی پھپھوندی",
        "سرمئی پھپھوندی",
        "بوٹرائٹس",
        "چنے کے پھول گر گئے",
        "پھول جھڑ گئے",
        "پھلیاں نہیں لگیں",
        "چنا گل گیا",
        "چنے کی بیماری",
        "چنے کا تنا ٹوٹ گیا",
        "چنے پر پھپھوندی"
      ],
      "chips": [
        "p_fruit_drop",
        "p_rot",
        "p_brown_spots",
        "p_patches_dry"
      ],
      "todo": [
        "Check inside the crop, near the ground and in the densest parts, for grey fuzzy mould on flowers, stems and pods during cloudy, humid weather",
        "Stop or delay irrigation while the weather is humid; more water makes the canopy wetter",
        "Contact your agriculture officer quickly; a fungicide recommended by the agriculture department works best when used at the first signs, before the disease spreads through the crop",
        "Keep seed for next season only from healthy fields, never from a badly infected crop",
        "After harvest, collect and destroy or deeply bury infected crop remains"
      ],
      "dont": [
        "Don't give extra irrigation or nitrogen to a lush crop in cool, humid weather",
        "Don't use seed from a field that had grey mould"
      ]
    },
    {
      "slug": "chickpea-collar-rot",
      "name": "Collar Rot of Chickpea",
      "type": "plant",
      "hosts": [
        "chickpea"
      ],
      "hostLabel": "Chickpea (Gram)",
      "causeType": "Fungal (soil-borne)",
      "urgency": "",
      "zoonotic": false,
      "short": "Young chickpea plants yellow and die; stem at soil level rots, with white threads and mustard-seed-like grains.",
      "question": "Do the dying young chickpea plants have a rotten stem at soil level covered with white threads and small mustard-seed-like grains?",
      "keywords": [
        "collar rot",
        "chickpea collar rot",
        "chane ki gardan gal gayi",
        "chana tana gal gaya",
        "chane ka pauda gal gaya",
        "chane ke chote paude mar gaye",
        "chane ke chote pauday mar gaye",
        "safed phaphoond",
        "rai jaise dane",
        "sclerotium",
        "chane ki bimari",
        "chana peela",
        "کالر راٹ",
        "چنے کی گردن گلنا",
        "چنے کا تنا گل گیا",
        "چنے کے چھوٹے پودے مر گئے",
        "سفید پھپھوندی",
        "رائی جیسے دانے",
        "چنا پیلا",
        "چنے کی بیماری",
        "تنے کا گلاؤ",
        "چنا سوکھ گیا"
      ],
      "chips": [
        "p_wilting",
        "p_yellowing",
        "p_dark_wet"
      ],
      "todo": [
        "Pull up a few dying seedlings and look at the stem at soil level for rot, white threads and mustard-seed-like grains",
        "Remove dying and dead seedlings with the soil around them and destroy them away from the field",
        "Avoid more irrigation until the topsoil has dried, and drain any standing water",
        "Re-sow large gaps only after the soil has dried enough, and ask your agriculture officer whether seed treatment is needed for re-sowing"
      ],
      "dont": [
        "Don't sow chickpea into very wet soil or give heavy irrigation to young seedlings",
        "Don't leave undecomposed crop residue on the surface at sowing"
      ]
    },
    {
      "slug": "mustard-white-rust",
      "name": "White Rust of Mustard and Canola",
      "type": "plant",
      "hosts": [
        "mustard",
        "cabbage"
      ],
      "hostLabel": "Mustard, Canola & Cabbage family",
      "causeType": "Oomycete (fungus-like)",
      "urgency": "",
      "zoonotic": false,
      "short": "Raised, shiny white blisters under mustard leaves, yellow spots above, and swollen, twisted flower heads.",
      "question": "Are there raised, shiny white blisters on the underside of the leaves, with yellow spots above them?",
      "keywords": [
        "white rust",
        "safed kungi",
        "safaid kungi",
        "sufaid kungi",
        "sarson",
        "sarsoon",
        "sarso",
        "raya",
        "canola",
        "sarson ki bimari",
        "patton ke neeche safed dane",
        "safed chhale",
        "phool tedhe",
        "stag head",
        "سفید کنگی",
        "سرسوں کی سفید کنگی",
        "سرسوں کی بیماری",
        "کینولا کی بیماری",
        "رایا",
        "پتوں کے نیچے سفید دانے",
        "سفید چھالے",
        "ٹیڑھے پھول",
        "پھول پھول گئے",
        "توریا",
        "سرسوں"
      ],
      "chips": [
        "p_white_powder",
        "p_malformed",
        "p_yellowing"
      ],
      "todo": [
        "Walk through the field and turn leaves over to look for white blisters, especially in foggy weeks",
        "Pull out plants with stag heads early and remove them from the field; bury or destroy them",
        "Do not over-irrigate and do not let water stand in the field",
        "If white rust is spreading before or at flowering, ask your agriculture officer which fungicide is recommended and when to spray",
        "After harvest, collect and destroy crop remains and stag heads"
      ],
      "dont": [
        "Don't leave stag heads and crop remains lying in the field after harvest",
        "Don't sow mustard or canola in the same field year after year"
      ]
    },
    {
      "slug": "mustard-powdery-mildew",
      "name": "Powdery Mildew of Mustard",
      "type": "plant",
      "hosts": [
        "mustard",
        "cabbage"
      ],
      "hostLabel": "Mustard, Canola & Cabbage family",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Flat, dusty white powder on mustard leaves, stems and pods, mostly late in the season.",
      "question": "Is there a flat white powder on the leaves or pods that rubs off easily with a finger?",
      "keywords": [
        "powdery mildew",
        "safed powder",
        "safed safoof",
        "safoofi phaphoondi",
        "safed phaphoondi",
        "sufaid phaphundi",
        "sarson",
        "sarsoon",
        "raya",
        "canola",
        "patton par safed powder",
        "phaliyon par safedi",
        "sarson ki bimari",
        "سفوفی پھپھوندی",
        "پاؤڈری ملڈیو",
        "سفید پاؤڈر",
        "سفید پھپھوندی",
        "سرسوں کی بیماری",
        "کینولا کی بیماری",
        "پتوں پر سفیدی",
        "پھلیوں پر سفید پاؤڈر",
        "رایا",
        "سرسوں"
      ],
      "chips": [
        "p_white_powder",
        "p_yellowing"
      ],
      "todo": [
        "From flowering onwards, check older leaves, stems and pods for white powder",
        "Irrigate on time so plants are not stressed by drought, and don't add extra nitrogen",
        "On small plots, remove the lowest, most infected leaves",
        "If powder appears early, before pods have filled, and spreads fast, ask your agriculture officer whether a fungicide spray is worthwhile and which one is approved; a late, light attack usually does not need spraying"
      ],
      "dont": []
    },
    {
      "slug": "mustard-painted-bug",
      "name": "Painted Bug of Mustard (Bagrada Bug)",
      "type": "plant",
      "hosts": [
        "mustard",
        "cabbage"
      ],
      "hostLabel": "Mustard, Canola & Cabbage family",
      "causeType": "Insect pest (sucking bug)",
      "urgency": "",
      "zoonotic": false,
      "short": "Small black bugs with orange and white marks on mustard seedlings and pods; seedlings wilt and dry.",
      "question": "Are there small black bugs with orange and white markings on the seedlings or pods?",
      "keywords": [
        "painted bug",
        "bagrada bug",
        "rangeen keera",
        "kala keera",
        "dhari dar keera",
        "sarson ka keera",
        "sarson",
        "sarsoon",
        "canola",
        "paneeri sookh gayi",
        "poday murjha gaye",
        "chitkabra keera",
        "keeray",
        "keere",
        "پینٹڈ بگ",
        "رنگ دار بگ",
        "سرسوں کا کیڑا",
        "کالا نارنجی کیڑا",
        "دھاری دار کیڑا",
        "پنیری سوکھ گئی",
        "پودے مرجھا گئے",
        "سرسوں کی پھلیاں خراب",
        "کینولا کا کیڑا",
        "سرسوں"
      ],
      "chips": [
        "p_insects",
        "p_wilting",
        "p_yellowing"
      ],
      "todo": [
        "In the first weeks after sowing, check seedlings often in the warm part of the day, including the soil around the stems",
        "Irrigate the young crop on time; irrigation in the first weeks after sowing reduces attack",
        "On small plots, shake or brush the bugs off plants into a tub of water and destroy them, and hand-pick nymphs and adults",
        "Thresh the harvested crop quickly; don't leave it lying in heaps",
        "If many seedlings are wilting and bugs are common, ask your agriculture officer whether an insecticide is needed and which one is recommended"
      ],
      "dont": []
    },
    {
      "slug": "mustard-sawfly",
      "name": "Mustard Sawfly",
      "type": "plant",
      "hosts": [
        "mustard",
        "cabbage"
      ],
      "hostLabel": "Mustard, Canola & Cabbage family",
      "causeType": "Insect pest (leaf-eating larvae)",
      "urgency": "",
      "zoonotic": false,
      "short": "Dark grey-black larvae eat holes in young mustard leaves from the edges; they curl up and drop when touched.",
      "question": "Are there dark grey-black larvae on the leaves that curl up and drop to the ground when touched?",
      "keywords": [
        "sawfly",
        "mustard sawfly",
        "sarson ki sundi",
        "kali sundi",
        "kaali sundi",
        "sundi",
        "sarson",
        "sarsoon",
        "paneeri",
        "patte kha gayi",
        "patton mein surakh",
        "patton mein suraakh",
        "toria",
        "shaljam",
        "آرا مکھی",
        "سا فلائی",
        "سرسوں کی سنڈی",
        "کالی سنڈی",
        "پتوں میں سوراخ",
        "پنیری کے پتے کھا گئی",
        "سرسوں کا کیڑا",
        "مولی کی سنڈی",
        "شلجم کی سنڈی",
        "توریا",
        "سرسوں"
      ],
      "chips": [
        "p_caterpillars",
        "p_holes"
      ],
      "todo": [
        "Check young plants often in the first month after sowing, in the morning and evening when larvae feed in the open",
        "On small plots, hand-pick larvae or shake plants over a tray, and destroy them",
        "Irrigate the seedling crop when larvae are present; many larvae fall to the ground and drown",
        "Protect natural enemies, such as small parasitic wasps that attack the larvae, by avoiding unnecessary broad-spectrum sprays",
        "If larvae are many and seedlings are being stripped, ask your agriculture officer whether an insecticide is needed and which one is recommended"
      ],
      "dont": []
    },
    {
      "slug": "date-palm-dubas-bug",
      "name": "Dubas Bug of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Insect pest (sap-sucking bug)",
      "urgency": "",
      "zoonotic": false,
      "short": "Sticky honeydew drips from date palm fronds, which turn black with sooty mould and later pale yellow.",
      "question": "Is sticky honeydew dripping from the fronds onto the ground, with small pale green insects on the leaflets?",
      "keywords": [
        "dubas bug",
        "dubas",
        "khajoor ka keera",
        "khajur ka keera",
        "khajoor",
        "khajur",
        "chipchipa patta",
        "chipchipe patte",
        "kali ulli",
        "patte kale",
        "khajoor ke patte peele",
        "meetha ras",
        "panjgur",
        "keeray",
        "دباس بگ",
        "دُباس",
        "کھجور کا کیڑا",
        "کھجور کے پتے چپچپے",
        "میٹھا مادہ ٹپکنا",
        "کالی پھپھوندی",
        "کالی اُلی",
        "کھجور کے پتے پیلے",
        "پنجگور",
        "کھجور"
      ],
      "chips": [
        "p_sticky",
        "p_insects",
        "p_yellowing"
      ],
      "todo": [
        "From March to May and from August to October, check the lower fronds for honeydew drops and look for insects on the leaflets",
        "Mark infested palms and inform the agriculture department, especially if you are outside the known areas in Balochistan",
        "Prune old, heavily infested and dry fronds and remove extra suckers; destroy the pruned material in the orchard instead of carrying it away",
        "Protect natural enemies such as ladybirds, spiders and green lacewings",
        "Control works best when the agriculture department organises it over the whole area; ask them which insecticide or neem-based product is recommended and when, usually when young nymphs appear"
      ],
      "dont": [
        "Don't move offshoots, fronds or other palm material from infested orchards to new areas",
        "Don't spray broad-spectrum insecticides again and again on your own; this kills natural enemies"
      ]
    },
    {
      "slug": "date-palm-lesser-moth",
      "name": "Lesser Date Moth",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Insect pest (fruit-boring caterpillar)",
      "urgency": "",
      "zoonotic": false,
      "short": "Young green dates with a small hole near the stalk turn brown, dry and drop, or hang tied by silk threads.",
      "question": "Do the young green dates have a small hole near the stalk, with dried fruits tied together by silk?",
      "keywords": [
        "lesser date moth",
        "hmira",
        "khajoor ki sundi",
        "khajur ki sundi",
        "khajoor ka phal girna",
        "khajoor ke dane gir rahe",
        "phal mein surakh",
        "sundi",
        "khajoor",
        "khajur",
        "khajoor ka keera",
        "dhage",
        "jala",
        "کھجور کی سنڈی",
        "کھجور کا پروانہ",
        "کھجور کا پھل گرنا",
        "کچی کھجوریں گر رہی ہیں",
        "پھل میں سوراخ",
        "حمیرہ",
        "کھجور کا کیڑا",
        "ریشمی دھاگے",
        "سوکھی کھجوریں",
        "کھجور"
      ],
      "chips": [
        "p_fruit_drop",
        "p_bored",
        "p_caterpillars",
        "p_webbing"
      ],
      "todo": [
        "From pollination onwards, check young bunches every week for holed, browning fruit and silk threads",
        "Collect fallen fruit regularly and destroy it, for example by burying it deep, away from the palms",
        "During bunch thinning, shake bunches gently over a sheet so damaged fruits drop, and destroy them",
        "Hang light traps or sticky traps in the orchard from the start of the season to catch moths and see when they are active",
        "If damage is rising, ask your agriculture officer about neem-based or biological products, or another approved insecticide, and the right timing, which is usually soon after fruit set"
      ],
      "dont": []
    },
    {
      "slug": "date-palm-inflorescence-rot",
      "name": "Inflorescence Rot (Khamedj) of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Fungal",
      "urgency": "",
      "zoonotic": false,
      "short": "Brown or rusty patches on unopened spathes; inside, the flower strands are rotten and covered with powder.",
      "question": "Do the unopened spathes have brown or rusty patches, with rotten flowers and powder inside when they split?",
      "keywords": [
        "inflorescence rot",
        "khamedj",
        "spathe rot",
        "khajoor ka phool gal gaya",
        "khajoor ke phool sarr gaye",
        "khajoor ka shagufa",
        "khajur ka shagoofa",
        "phool galna",
        "phool sarna",
        "khajoor ki bimari",
        "khajoor",
        "khajur",
        "خامج",
        "شگوفے کی سڑن",
        "کھجور کے پھول گل گئے",
        "کھجور کا شگوفہ",
        "پھول سڑنا",
        "کھجور کی بیماری",
        "زنگ جیسے دھبے",
        "کھجور کا گچھا خراب",
        "کھجور"
      ],
      "chips": [
        "p_rot",
        "p_malformed",
        "p_brown_spots"
      ],
      "todo": [
        "Inspect spathes as they come out, especially after rain",
        "Cut off infected spathes and flower clusters as soon as you see them; collect them and burn or bury them away from the orchard",
        "Do not use pollen or strands from male palms that show rot",
        "Clean and disinfect cutting tools between palms",
        "Ask your agriculture officer or the Date Palm Research Institute which fungicide is recommended for affected palms and when; treatment is usually given after harvest and again before the spathes come out"
      ],
      "dont": [
        "Don't leave rotten spathes hanging on the palm or lying under it",
        "Don't pollinate with strands from male palms that have rotten spathes"
      ]
    },
    {
      "slug": "date-palm-dust-mite",
      "name": "Dust Mite (Ghubar) of Date Palm",
      "type": "plant",
      "hosts": [
        "datepalm"
      ],
      "hostLabel": "Date Palm",
      "causeType": "Mite pest",
      "urgency": "",
      "zoonotic": false,
      "short": "Fine grey webs full of dust cover green date bunches; fruits turn brown, scarred, cracked and shrivelled.",
      "question": "Are the green date bunches covered in fine webs with dust stuck in them, with scarred brown fruit underneath?",
      "keywords": [
        "dust mite",
        "date mite",
        "ghubar",
        "ghubaar",
        "bou faroua",
        "khajoor ki jooen",
        "khajur ki jooen",
        "khajoor par jala",
        "khajoor par mitti",
        "jala",
        "jooen",
        "lal jooen",
        "khajoor ka phal kharab",
        "khajoor",
        "غبار",
        "کھجور کی جوئیں",
        "کھجور پر جالا",
        "گرد والے جالے",
        "کھجور کا پھل خراب",
        "جوئیں",
        "لال جوئیں",
        "مائٹ",
        "کھجور کے گچھے پر مٹی",
        "کھجور"
      ],
      "chips": [
        "p_webbing",
        "p_fruit_spots",
        "p_fruit_drop"
      ],
      "todo": [
        "From fruit set, check green bunches every week in hot weather for webbing; use a hand lens to see the mites",
        "Mark infested palms and check the palms around them",
        "Keep grasses and weeds under the palms under control",
        "Protect natural enemies, such as predatory mites and small ladybird beetles, by avoiding unnecessary broad-spectrum sprays",
        "If webbing is spreading on green bunches, ask your agriculture officer which miticide is recommended and when; treatment works best early, while fruits are still green"
      ],
      "dont": [
        "Don't use ordinary insecticides that do not kill mites; they kill natural enemies and mites can increase"
      ]
    }
  ],
  "crops": [
    [
      "wheat",
      "Wheat"
    ],
    [
      "rice",
      "Rice"
    ],
    [
      "cotton",
      "Cotton"
    ],
    [
      "maize",
      "Maize"
    ],
    [
      "sugarcane",
      "Sugarcane"
    ],
    [
      "potato",
      "Potato"
    ],
    [
      "tomato",
      "Tomato"
    ],
    [
      "onion",
      "Onion"
    ],
    [
      "chili",
      "Chilli"
    ],
    [
      "okra",
      "Okra"
    ],
    [
      "brinjal",
      "Brinjal"
    ],
    [
      "cucurbits",
      "Gourds & Cucumbers"
    ],
    [
      "cabbage",
      "Cabbage & Cauliflower"
    ],
    [
      "chickpea",
      "Chickpea"
    ],
    [
      "mustard",
      "Mustard & Canola"
    ],
    [
      "citrus",
      "Citrus (Kinnow)"
    ],
    [
      "mango",
      "Mango"
    ],
    [
      "guava",
      "Guava"
    ],
    [
      "datepalm",
      "Date Palm"
    ]
  ],
  "animals": [],
  "plantChips": [
    [
      "p_stripes",
      "Yellow stripes of powder"
    ],
    [
      "p_orange_powder",
      "Orange or brown powder"
    ],
    [
      "p_white_powder",
      "White powdery patches"
    ],
    [
      "p_brown_spots",
      "Brown spots"
    ],
    [
      "p_target_spots",
      "Spots with rings (target)"
    ],
    [
      "p_diamond_spots",
      "Diamond-shaped spots"
    ],
    [
      "p_dark_wet",
      "Dark, wet-looking patches"
    ],
    [
      "p_edge_drying",
      "Drying from leaf edges/tips"
    ],
    [
      "p_curled",
      "Curled leaves, thick veins"
    ],
    [
      "p_yellowing",
      "Yellowing leaves"
    ],
    [
      "p_wilting",
      "Wilting or dying plants"
    ],
    [
      "p_stunted",
      "Stunted plants"
    ],
    [
      "p_rot",
      "Rotting fruit or tubers"
    ],
    [
      "p_insects",
      "Small insects on leaves or shoots"
    ],
    [
      "p_whiteflies",
      "Tiny white flies under leaves"
    ],
    [
      "p_mealy",
      "White cotton-like insects"
    ],
    [
      "p_caterpillars",
      "Caterpillars or larvae"
    ],
    [
      "p_holes",
      "Holes or chewed leaves"
    ],
    [
      "p_bored",
      "Holes in stem, fruit or bolls"
    ],
    [
      "p_dead_heart",
      "Central shoot dried (dead heart)"
    ],
    [
      "p_sticky",
      "Sticky leaves or black sooty coating"
    ],
    [
      "p_mosaic",
      "Yellow-green mosaic or yellow veins"
    ],
    [
      "p_silvery",
      "Silvery or scraped streaks"
    ],
    [
      "p_webbing",
      "Fine webs on leaves"
    ],
    [
      "p_interveinal",
      "Yellowing between the veins"
    ],
    [
      "p_old_leaves_yellow",
      "Older lower leaves yellow first"
    ],
    [
      "p_small_leaves",
      "Small, narrow or bunched leaves"
    ],
    [
      "p_black_heads",
      "Black powder in ears or heads"
    ],
    [
      "p_galls",
      "Knots or swellings on roots"
    ],
    [
      "p_fruit_spots",
      "Spots or rot on fruit"
    ],
    [
      "p_fruit_drop",
      "Flowers or fruit dropping"
    ],
    [
      "p_gum",
      "Gum oozing or bark cracking"
    ],
    [
      "p_dieback",
      "Branches drying from the tip"
    ],
    [
      "p_tunnels",
      "Winding tunnels inside leaves"
    ],
    [
      "p_malformed",
      "Deformed, bunched flowers or shoots"
    ],
    [
      "p_tuber_marks",
      "Scabs or black crusts on tubers"
    ],
    [
      "p_root_damage",
      "Roots or base eaten, mud tunnels"
    ],
    [
      "p_patches_dry",
      "Plants drying in round patches"
    ]
  ],
  "animalChips": [],
  "emergencyChips": [],
  "photoCrops": [
    "wheat",
    "rice",
    "cotton",
    "maize",
    "sugarcane",
    "potato",
    "tomato",
    "onion",
    "chili",
    "brinjal",
    "cucurbits",
    "cabbage",
    "citrus",
    "mango",
    "guava",
    "datepalm"
  ]
};
