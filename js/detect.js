/* =====================================================================
   AgriHealth AI – detect.js (AI Detection page)
   ---------------------------------------------------------------------
   MACHINE LEARNING SE JORNA:
   Backend (Render.com) ka address neeche API_URL mein hai, jaise:
       const API_URL = "https://agrihealth-api.onrender.com";
   Jab tak API_URL khaali hai:
     - Photo check: SAMPLE result dikhata hai (saaf likha hota hai).
     - Symptoms check: browser mein basic symptom matching chalti hai.
   Server jawab na de to symptoms check khud browser wali matching par chala jata hai.

   Backend ke 2 endpoints:
   1) POST {API_URL}/predict/photo   (multipart/form-data)
        fields: image (jpg), type ("plant"|"animal"), host ("wheat"...)
        reply : { "supported": true,            (false = is fasal ki photo abhi nahi)
                  "valid_image": true,          (false = patte ki photo nahi lagti)
                  "uncertain": false,           (true = AI ko pakka yaqeen nahi)
                  "predictions": [{ "slug": "wheat-yellow-rust", "confidence": 0.87 }, ...],
                  "heatmap": "data:image/png;base64,..." (optional) }
   2) POST {API_URL}/predict/text    (application/json)
        body  : { "type", "host", "symptoms": ["p_stripes", ...], "text", "duration", "count" }
        reply : { "predictions": [{ "slug": "...", "confidence": 0.74 }, ...] }
   "slug" js/data.js wala hota hai, ya "healthy" (sehatmand) / "other" (koi aur bimari).
   ===================================================================== */

const API_URL = "https://agrihealth-api.onrender.com";   // Render (free) – backend ka address

const DATA = window.AH_DATA;
const LANG = document.documentElement.lang === "ur" ? "ur" : "en";

/* ---------- Page ki saari likhai (English + Urdu) ---------- */
const TEXT = {
  en: {
    whichCrop: "Which crop?",
    whichAnimal: "Which animal?",
    plantHint: "Take a close photo of one sick leaf in daylight.",
    animalHint: "Photos work best for visible signs such as skin lumps, wounds or swelling. For fever, not eating or less milk, describe the symptoms instead.",
    plantPlaceholder: "e.g. Yellow powder in long lines on the leaves. Started a week ago after rain.",
    animalPlaceholder: "e.g. Round lumps on the skin, has fever and is giving less milk since Tuesday.",
    badType: "Please choose a JPG, PNG or WebP photo.",
    tooBig: "This photo is larger than {mb} MB. Please choose a smaller one.",
    tooSmall: "This photo is too small. Please use a photo at least 200 × 200 pixels.",
    readyToCheck: "ready to check",
    cantOpen: "We could not open this photo. Please try another one.",
    needPhoto: "Please add a photo first.",
    needText: "Please tap at least one symptom or write a short description (10+ characters).",
    stepsPhoto: ["Preparing your photo", "Checking it is a {type} photo", "Looking for disease signs", "Preparing advice"],
    stepsText: ["Reading your description", "Matching symptoms", "Preparing advice"],
    plant: "plant",
    animal: "animal",
    failed: "Something went wrong while checking. Please try again in a moment.",
    noMatchTitle: "We couldn't match these signs",
    noMatchText: "Try adding more symptoms or a clearer description, or browse our guides for {host}.",
    browseGuides: "Browse guides",
    sampleTitle: "Sample result.",
    sampleText: "Our photo AI is still being trained, so this is an example of how results will look. It is not a real check of your photo. For a real check today, use \"Describe it\" or read the guides.",
    basicTitle: "Basic symptom matching.",
    basicText: "This compares your symptoms with our disease guides. It is a guide, not a diagnosis.",
    emergencyTitle: "Emergency signs.",
    emergencyText: "Call a veterinarian now. Do not wait for more results.",
    notPhotoTitle: "This doesn't look like a {type} photo.",
    notPhotoText: "Please take a close, clear photo of the problem area and try again.",
    yourPhoto: "Your uploaded photo",
    showHeat: "Show where AI looked",
    hideHeat: "Hide heatmap",
    heatReal: "Grad-CAM heatmap",
    heatSample: "Example heatmap (sample)",
    mostLikely: "Most likely",
    match: "Match",
    area: "Area of leaf affected",
    beSure: "Help us be more sure",
    yes: "Yes",
    no: "No",
    others: "Other possibilities",
    whatNow: "What to do now",
    fullGuide: "Read the full guide",
    again: "Check again",
    helpful: "Was this helpful?",
    thanks: "Thank you for your feedback!",
    footNote: "AI results are suggestions, not a diagnosis. Always follow the advice of a veterinarian or agriculture officer.",
    sample: "sample",
    healthyLabel: "Healthy leaf",
    otherLabel: "Another disease",
    healthyText: "Our AI did not find signs of the diseases it knows. Keep checking your crop every week.",
    otherText: "This looks like a disease that is not in our guides yet (for example another leaf spot or a virus). Show the plant to your local agriculture officer.",
    healthyTips: ["Check both sides of the leaves every week", "Water the soil, not the leaves", "If spots appear later, check again with a new photo"],
    otherTips: ["Show a few affected leaves or a clear photo to your agriculture office", "Note when the problem started and how fast it is spreading", "Do not spray any medicine without expert advice"],
    uncertainTitle: "The AI is not sure.",
    uncertainText: "Try another close, sharp photo in daylight, or use \"Describe it\". Also look at the other possibilities below.",
    unsupportedTitle: "Photo check is not ready for this yet.",
    unsupportedText: "Our photo AI does not check {host} yet. Please use \"Describe it\" for now – it works for all crops and animals.",
    describeInstead: "Describe it instead",
    serverDown: "The AI server is not responding right now. Please try again in a minute, or use \"Describe it\".",
    slowServer: "The AI server is waking up. The first check can take up to a minute…",
    fallbackText: "The AI server was busy, so we compared your symptoms with our guides in your browser.",
    urgency: {
      emergency: "Emergency – call a vet now",
      today: "See a vet today",
      "24h": "See a vet within 24 hours",
      routine: "Not an emergency – plan with your vet"
    },
    zoonoticTitle: "This can spread to people.",
    zoonoticText: "Wear gloves when handling sick animals, wash your hands with soap, and read the safety steps in the full guide. See a doctor if you feel unwell after contact.",
    noHostFound: "No crop found. Try another name.",
    photoBadge: "photo check available",
    photoNotReady: "Photo check is not ready for {host} yet. \"Describe it\" works for all crops and animals."
  },
  ur: {
    whichCrop: "کون سی فصل؟",
    whichAnimal: "کون سا جانور؟",
    plantHint: "دن کی روشنی میں ایک بیمار پتے کی قریب سے تصویر لیں۔",
    animalHint: "تصویر ان نشانیوں کے لیے بہتر ہے جو نظر آتی ہیں، جیسے جلد پر گلٹیاں، زخم یا سوجن۔ بخار، چارہ نہ کھانے یا دودھ کم ہونے کی صورت میں علامات لکھ کر بتائیں۔",
    plantPlaceholder: "مثلاً: پتوں پر لمبی لائنوں میں پیلا پاؤڈر۔ بارش کے بعد ایک ہفتہ پہلے شروع ہوا۔",
    animalPlaceholder: "مثلاً: جلد پر گول گلٹیاں ہیں، بخار ہے اور منگل سے دودھ کم دے رہی ہے۔",
    badType: "براہ کرم JPG، PNG یا WebP تصویر چنیں۔",
    tooBig: "یہ تصویر {mb} MB سے بڑی ہے۔ براہ کرم چھوٹی تصویر چنیں۔",
    tooSmall: "یہ تصویر بہت چھوٹی ہے۔ کم از کم 200 × 200 پکسل کی تصویر استعمال کریں۔",
    readyToCheck: "چیک کے لیے تیار",
    cantOpen: "یہ تصویر نہیں کھل سکی۔ براہ کرم کوئی اور تصویر آزمائیں۔",
    needPhoto: "پہلے ایک تصویر شامل کریں۔",
    needText: "کم از کم ایک علامت پر ٹیپ کریں یا تھوڑی سی تفصیل لکھیں (10 سے زیادہ حروف)۔",
    stepsPhoto: ["تصویر تیار ہو رہی ہے", "دیکھ رہے ہیں کہ یہ {type} کی تصویر ہے", "بیماری کی نشانیاں ڈھونڈ رہے ہیں", "مشورہ تیار ہو رہا ہے"],
    stepsText: ["آپ کی تفصیل پڑھ رہے ہیں", "علامات ملا رہے ہیں", "مشورہ تیار ہو رہا ہے"],
    plant: "فصل",
    animal: "جانور",
    failed: "چیک کرتے ہوئے کوئی مسئلہ ہو گیا۔ براہ کرم تھوڑی دیر بعد دوبارہ کوشش کریں۔",
    noMatchTitle: "یہ علامات کسی بیماری سے نہیں مل سکیں",
    noMatchText: "مزید علامات چنیں یا زیادہ صاف تفصیل لکھیں، یا {host} کی بیماریوں کی معلومات دیکھیں۔",
    browseGuides: "معلومات دیکھیں",
    sampleTitle: "نمونے کا نتیجہ۔",
    sampleText: "ہماری تصویر والی اے آئی ابھی تیار ہو رہی ہے، اس لیے یہ صرف ایک مثال ہے کہ نتیجہ کیسا نظر آئے گا۔ یہ آپ کی تصویر کا اصل چیک نہیں۔ آج اصل چیک کے لیے \"لکھ کر بتائیں\" استعمال کریں یا معلومات پڑھیں۔",
    basicTitle: "علامات کا سادہ موازنہ۔",
    basicText: "یہ آپ کی علامات کو ہماری بیماریوں کی معلومات سے ملاتا ہے۔ یہ رہنمائی ہے، تشخیص نہیں۔",
    emergencyTitle: "ایمرجنسی کی نشانیاں۔",
    emergencyText: "ابھی ویٹرنری ڈاکٹر کو بلائیں۔ مزید نتائج کا انتظار نہ کریں۔",
    notPhotoTitle: "یہ {type} کی تصویر نہیں لگتی۔",
    notPhotoText: "براہ کرم مسئلے والی جگہ کی قریب سے صاف تصویر لیں اور دوبارہ کوشش کریں۔",
    yourPhoto: "آپ کی تصویر",
    showHeat: "دکھائیں اے آئی نے کہاں دیکھا",
    hideHeat: "ہیٹ میپ چھپائیں",
    heatReal: "Grad-CAM ہیٹ میپ",
    heatSample: "مثال کا ہیٹ میپ (نمونہ)",
    mostLikely: "سب سے زیادہ ممکن",
    match: "مماثلت",
    area: "پتے کا متاثرہ حصہ",
    beSure: "یقین بڑھانے میں مدد کریں",
    yes: "ہاں",
    no: "نہیں",
    others: "دوسری ممکنہ بیماریاں",
    whatNow: "ابھی کیا کریں",
    fullGuide: "پوری معلومات پڑھیں",
    again: "دوبارہ چیک کریں",
    helpful: "کیا یہ مفید تھا؟",
    thanks: "آپ کی رائے کا شکریہ!",
    footNote: "اے آئی کے نتائج صرف مشورہ ہیں، تشخیص نہیں۔ ہمیشہ ویٹرنری ڈاکٹر یا زراعت افسر کے مشورے پر عمل کریں۔",
    sample: "نمونہ",
    healthyLabel: "صحت مند پتا",
    otherLabel: "کوئی اور بیماری",
    healthyText: "ہماری اے آئی کو اُن بیماریوں کی نشانیاں نہیں ملیں جنہیں وہ پہچانتی ہے۔ پھر بھی ہر ہفتے فصل کو دیکھتے رہیں۔",
    otherText: "یہ کوئی ایسی بیماری لگتی ہے جو ابھی ہماری معلومات میں نہیں (جیسے پتوں کے کوئی اور دھبے یا وائرس)۔ پودا اپنے مقامی زراعت افسر کو دکھائیں۔",
    healthyTips: ["ہر ہفتے پتوں کے دونوں طرف دیکھیں", "پانی جڑ میں دیں، پتوں پر نہیں", "اگر بعد میں دھبے نظر آئیں تو نئی تصویر سے دوبارہ چیک کریں"],
    otherTips: ["متاثرہ پتے یا ان کی صاف تصویر محکمہ زراعت کو دکھائیں", "لکھ لیں کہ مسئلہ کب شروع ہوا اور کتنی تیزی سے پھیل رہا ہے", "ماہر کے مشورے کے بغیر کوئی دوائی سپرے نہ کریں"],
    uncertainTitle: "اے آئی کو پورا یقین نہیں۔",
    uncertainText: "دن کی روشنی میں قریب سے ایک اور صاف تصویر لیں، یا \"لکھ کر بتائیں\" استعمال کریں۔ نیچے دوسری ممکنہ بیماریاں بھی دیکھیں۔",
    unsupportedTitle: "اس کے لیے تصویر کا چیک ابھی تیار نہیں۔",
    unsupportedText: "ہماری تصویر والی اے آئی ابھی {host} چیک نہیں کرتی۔ فی الحال \"لکھ کر بتائیں\" استعمال کریں، یہ سب فصلوں اور جانوروں کے لیے کام کرتا ہے۔",
    describeInstead: "لکھ کر بتائیں",
    serverDown: "اے آئی سرور اس وقت جواب نہیں دے رہا۔ براہ کرم ایک منٹ بعد دوبارہ کوشش کریں، یا \"لکھ کر بتائیں\" استعمال کریں۔",
    slowServer: "اے آئی سرور جاگ رہا ہے۔ پہلا چیک ایک منٹ تک لے سکتا ہے…",
    fallbackText: "اے آئی سرور مصروف تھا، اس لیے ہم نے آپ کے براؤزر میں ہی آپ کی علامات کو اپنی معلومات سے ملایا۔",
    urgency: {
      emergency: "ایمرجنسی – ابھی ڈاکٹر کو بلائیں",
      today: "آج ہی ویٹرنری ڈاکٹر کو دکھائیں",
      "24h": "24 گھنٹے کے اندر ویٹرنری ڈاکٹر کو دکھائیں",
      routine: "ایمرجنسی نہیں – ڈاکٹر سے مشورہ کر کے دیکھ بھال کریں"
    },
    zoonoticTitle: "یہ بیماری انسان کو بھی لگ سکتی ہے۔",
    zoonoticText: "بیمار جانور کو دستانے پہن کر ہاتھ لگائیں، صابن سے ہاتھ دھوئیں اور پوری معلومات میں دی گئی احتیاطیں پڑھیں۔ رابطے کے بعد طبیعت خراب ہو تو ڈاکٹر کو دکھائیں۔",
    noHostFound: "کوئی فصل نہیں ملی۔ کوئی اور نام لکھیں۔",
    photoBadge: "تصویر کا چیک دستیاب",
    photoNotReady: "{host} کے لیے تصویر کا چیک ابھی تیار نہیں۔ \"لکھ کر بتائیں\" سب فصلوں اور جانوروں کے لیے کام کرتا ہے۔"
  }
}[LANG];

// "{mb}" jaisi jagah par value daalna
function fill(text, values) {
  return text.replace(/\{(\w+)\}/g, function (all, key) {
    return values[key] !== undefined ? values[key] : all;
  });
}
const MAX_FILE_MB = 10;
const MAX_IMAGE_SIDE = 1024;
const RECENT_KEY = "agrihealth_recent_checks";

/* Jin fasalon ki photo AI pehchanti hai: pehle data.js wali list, phir backend /health se asal list */
const PHOTO_CROPS = new Set(DATA.photoCrops || []);

/* ---------- Page state ---------- */
const state = {
  type: "plant",          // "plant" ya "animal"
  host: "",               // "wheat", "cow" ...
  mode: "photo",          // "photo" ya "text"
  image: null,            // { blob, url, name, width, height }
  chips: new Set(),       // chuni hui symptoms
  result: null,           // aakhri result
  questionAnswered: false,
  checkId: 0              // har naye check par +1 (purana result na dikhe)
};

/* ---------- Elements ---------- */
const el = {
  typeBtns: document.querySelectorAll(".type-btn"),
  hostPicker: document.querySelector("#host-picker"),
  hostSearch: document.querySelector("#host-search"),
  hostSearchWrap: document.querySelector("#host-search-wrap"),
  hostTitle: document.querySelector("#host-title"),
  hostLegend: document.querySelector("#host-legend"),
  photoNote: document.querySelector("#photo-note"),
  photoNoteText: document.querySelector("#photo-note-text"),
  photoNoteBtn: document.querySelector("#photo-note-btn"),
  modeBtns: document.querySelectorAll(".mode-btn"),
  photoPanel: document.querySelector("#photo-panel"),
  textPanel: document.querySelector("#text-panel"),
  dropZone: document.querySelector("#drop-zone"),
  fileInput: document.querySelector("#file-input"),
  preview: document.querySelector("#preview"),
  previewImage: document.querySelector("#preview-image"),
  previewName: document.querySelector("#preview-name"),
  previewMeta: document.querySelector("#preview-meta"),
  changePhoto: document.querySelector("#change-photo"),
  removePhoto: document.querySelector("#remove-photo"),
  photoHint: document.querySelector("#photo-hint"),
  symptomChips: document.querySelector("#symptom-chips"),
  description: document.querySelector("#description"),
  animalExtra: document.querySelector("#animal-extra"),
  duration: document.querySelector("#duration"),
  count: document.querySelector("#count"),
  emergency: document.querySelector("#emergency-box"),
  error: document.querySelector("#detect-error"),
  analyzeBtn: document.querySelector("#analyze-btn"),
  form: document.querySelector("#detect-form"),
  loading: document.querySelector("#loading"),
  loadingSteps: document.querySelector("#loading-steps"),
  result: document.querySelector("#result"),
  recentList: document.querySelector("#recent-list"),
  recentEmpty: document.querySelector("#recent-empty"),
  clearRecent: document.querySelector("#clear-recent")
};


/* =========================================
   HELPERS
   ========================================= */
function findDisease(slug) {
  return DATA.diseases.find(function (d) { return d.slug === slug; });
}

function hostList() {
  return state.type === "plant" ? DATA.crops : DATA.animals;
}

function photoSupported() {
  return state.type === "plant" && PHOTO_CROPS.has(state.host);
}

/* Photo wale hisse mein pehle hi bata dein agar is fasal/janwar ka photo check abhi nahi */
function updatePhotoNote() {
  const show = state.mode === "photo" && !photoSupported();
  el.photoNote.hidden = !show;
  if (show) el.photoNoteText.textContent = fill(TEXT.photoNotReady, { host: hostName(state.host) });
}

function hostName(key) {
  const host = hostList().find(function (h) { return h[0] === key; });
  return host ? host[1] : key;
}

/* Sirf woh alamaat jo is fasal/janwar ki kisi bimari mein hain (emergency wali hamesha) */
function chipList() {
  const all = state.type === "plant" ? DATA.plantChips : DATA.animalChips;
  const used = new Set();
  diseasesForHost().forEach(function (d) {
    d.chips.forEach(function (id) { used.add(id); });
  });
  return all.filter(function (chip) {
    return used.has(chip[0]) || (state.type === "animal" && DATA.emergencyChips.includes(chip[0]));
  });
}

/* Fasal/janwar badalne par woh chuni hui alamaat hata dein jo ab list mein nahi */
function pruneChips() {
  const allowed = new Set(chipList().map(function (chip) { return chip[0]; }));
  Array.from(state.chips).forEach(function (id) {
    if (!allowed.has(id)) state.chips.delete(id);
  });
}

function diseasesForHost() {
  return DATA.diseases.filter(function (d) {
    return d.type === state.type && d.hosts.includes(state.host);
  });
}

function createEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function showError(message) {
  el.error.textContent = message;
  el.error.hidden = !message;
}

function wait(ms) {
  return new Promise(function (resolve) { setTimeout(resolve, ms); });
}

const URGENCY = {
  emergency: { label: TEXT.urgency.emergency, tag: "tag-red" },
  today: { label: TEXT.urgency.today, tag: "tag-amber" },
  "24h": { label: TEXT.urgency["24h"], tag: "tag-amber" },
  routine: { label: TEXT.urgency.routine, tag: "tag-gray" }
};


/* =========================================
   1. TYPE (Plant / Animal)
   ========================================= */
function hideResult() {
  state.checkId++;        // agar check chal raha ho to us ka result ab nahi dikhega
  state.result = null;
  el.result.hidden = true;
  el.loading.hidden = true;
  el.analyzeBtn.disabled = false;
}

function setType(type) {
  state.type = type;
  state.host = hostList()[0][0];
  state.chips.clear();
  el.description.value = "";
  // Janwar wale khane (kitne din, kitne janwar) sirf tab hote hain jab janwar ka hissa chalu ho
  if (el.duration) el.duration.value = "2-3 days";
  if (el.count) el.count.value = "one";
  clearImage();
  hideResult();

  el.typeBtns.forEach(function (btn) {
    const active = btn.dataset.type === type;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  el.hostTitle.textContent = type === "plant" ? TEXT.whichCrop : TEXT.whichAnimal;
  // Fasalein bohat hain, is liye sirf fasal ke liye talash ka khana
  el.hostSearch.value = "";
  el.hostSearchWrap.hidden = type !== "plant";
  el.photoHint.textContent = type === "plant" ? TEXT.plantHint : TEXT.animalHint;
  if (el.animalExtra) el.animalExtra.hidden = type !== "animal";
  el.description.placeholder = type === "plant" ? TEXT.plantPlaceholder : TEXT.animalPlaceholder;

  // Janwar ke liye default "describe" behtar hai
  setMode(type === "animal" ? "text" : "photo");
  renderHosts();
  renderChips();
  updateEmergency();
  showError("");
}

function renderHosts() {
  el.hostPicker.innerHTML = "";
  const word = el.hostSearch.value.trim().toLowerCase();
  let shown = 0;
  hostList().forEach(function (host) {
    const btn = createEl("button", "chip", host[1]);
    btn.type = "button";
    btn.dataset.host = host[0];
    if (state.type === "plant" && PHOTO_CROPS.has(host[0])) {
      const badge = createEl("span", "chip-badge", "📷");
      badge.setAttribute("aria-hidden", "true");
      btn.appendChild(badge);
      btn.appendChild(createEl("span", "visually-hidden", " (" + TEXT.photoBadge + ")"));
      btn.title = TEXT.photoBadge;
    }
    const active = host[0] === state.host;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
    // talash: naam ya key (wheat, gandum ...) mein lafz ho; chuni hui fasal hamesha nazar aaye
    const match = !word || active || host[1].toLowerCase().includes(word) || host[0].includes(word);
    btn.hidden = !match;
    if (match) shown++;
    el.hostPicker.appendChild(btn);
  });
  el.hostLegend.hidden = state.type !== "plant" || PHOTO_CROPS.size === 0;
  if (word && shown <= 1 && !hostList().some(function (h) { return h[1].toLowerCase().includes(word) || h[0].includes(word); })) {
    el.hostPicker.appendChild(createEl("p", "host-empty", TEXT.noHostFound));
  }
}

el.hostSearch.addEventListener("input", renderHosts);

el.hostPicker.addEventListener("click", function (event) {
  const btn = event.target.closest("[data-host]");
  if (!btn) return;
  if (btn.dataset.host === state.host) return;
  state.host = btn.dataset.host;
  renderHosts();
  pruneChips();
  renderChips();
  updateEmergency();
  updatePhotoNote();
  hideResult();
});

el.typeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    setType(btn.dataset.type);
  });
});


/* =========================================
   2. MODE (Photo / Describe)
   ========================================= */
function setMode(mode) {
  state.mode = mode;
  el.modeBtns.forEach(function (btn) {
    const active = btn.dataset.mode === mode;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  el.photoPanel.hidden = mode !== "photo";
  el.textPanel.hidden = mode !== "text";
  updatePhotoNote();
  showError("");
}

el.photoNoteBtn.addEventListener("click", function () {
  setMode("text");
  el.description.focus({ preventScroll: true });
});

el.modeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    setMode(btn.dataset.mode);
  });
});


/* =========================================
   3. PHOTO UPLOAD
   Photo ko browser mein hi chhota karte hain (max 1024px) aur
   dobara JPG banate hain. Is se location (GPS) jaisi chhupi
   maloomat bhi hat jati hai.
   ========================================= */
function loadImage(file) {
  return new Promise(function (resolve, reject) {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = function () {
      resolve({ img: img, url: url });
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      reject(new Error("unreadable"));
    };
    img.src = url;
  });
}

function shrinkImage(img) {
  const scale = Math.min(1, MAX_IMAGE_SIDE / Math.max(img.naturalWidth, img.naturalHeight));
  const width = Math.round(img.naturalWidth * scale);
  const height = Math.round(img.naturalHeight * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d").drawImage(img, 0, 0, width, height);

  return new Promise(function (resolve, reject) {
    canvas.toBlob(function (blob) {
      if (blob) {
        resolve({ blob: blob, width: width, height: height });
      } else {
        reject(new Error("convert"));
      }
    }, "image/jpeg", 0.85);
  });
}

async function handleFile(file) {
  showError("");
  if (!file) return;

  const okTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!okTypes.includes(file.type)) {
    showError(TEXT.badType);
    return;
  }
  if (file.size > MAX_FILE_MB * 1024 * 1024) {
    showError(fill(TEXT.tooBig, { mb: MAX_FILE_MB }));
    return;
  }

  try {
    const loaded = await loadImage(file);
    if (loaded.img.naturalWidth < 200 || loaded.img.naturalHeight < 200) {
      URL.revokeObjectURL(loaded.url);
      showError(TEXT.tooSmall);
      return;
    }
    const small = await shrinkImage(loaded.img);
    URL.revokeObjectURL(loaded.url);

    clearImage();
    state.image = {
      blob: small.blob,
      url: URL.createObjectURL(small.blob),
      name: file.name,
      width: small.width,
      height: small.height
    };

    el.previewImage.src = state.image.url;
    el.previewName.textContent = file.name;
    el.previewMeta.textContent = small.width + " × " + small.height + " px · " + TEXT.readyToCheck;
    el.dropZone.hidden = true;
    el.preview.hidden = false;
  } catch (error) {
    showError(TEXT.cantOpen);
  }
}

function clearImage() {
  if (state.image) {
    URL.revokeObjectURL(state.image.url);
  }
  state.image = null;
  el.fileInput.value = "";
  el.preview.hidden = true;
  el.dropZone.hidden = false;
}

el.fileInput.addEventListener("change", function () {
  handleFile(el.fileInput.files[0]);
});

el.dropZone.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    el.fileInput.click();
  }
});

["dragenter", "dragover"].forEach(function (name) {
  el.dropZone.addEventListener(name, function (event) {
    event.preventDefault();
    el.dropZone.classList.add("dragging");
  });
});

["dragleave", "drop"].forEach(function (name) {
  el.dropZone.addEventListener(name, function (event) {
    event.preventDefault();
    el.dropZone.classList.remove("dragging");
  });
});

el.dropZone.addEventListener("drop", function (event) {
  const file = event.dataTransfer.files[0];
  handleFile(file);
});

el.changePhoto.addEventListener("click", function () {
  el.fileInput.click();
});

el.removePhoto.addEventListener("click", function () {
  clearImage();
  el.dropZone.focus();
});


/* =========================================
   4. SYMPTOMS (Describe)
   ========================================= */
function renderChips() {
  el.symptomChips.innerHTML = "";
  chipList().forEach(function (chip) {
    const btn = createEl("button", "chip", chip[1]);
    btn.type = "button";
    btn.dataset.chip = chip[0];
    if (DATA.emergencyChips.includes(chip[0])) {
      btn.classList.add("chip-danger");
    }
    const active = state.chips.has(chip[0]);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
    el.symptomChips.appendChild(btn);
  });
}

el.symptomChips.addEventListener("click", function (event) {
  const btn = event.target.closest("[data-chip]");
  if (!btn) return;
  const id = btn.dataset.chip;
  if (state.chips.has(id)) {
    state.chips.delete(id);
  } else {
    state.chips.add(id);
  }
  renderChips();
  updateEmergency();
  showError("");
});

el.description.addEventListener("input", function () {
  showError("");
});

function hasEmergencySigns() {
  if (state.type !== "animal") return false;
  return Array.from(state.chips).some(function (id) {
    return DATA.emergencyChips.includes(id);
  }) || (el.count !== null && el.count.value === "many");
}

function updateEmergency() {
  if (el.emergency) el.emergency.hidden = !hasEmergencySigns();
}

if (el.count) el.count.addEventListener("change", updateEmergency);


/* =========================================
   5. ANALYSIS
   ========================================= */

/* ----- Basic symptom matching (jab tak ML backend nahi) ----- */
/* Roman Urdu ki mukhtalif spelling (laal/lal, gaanthein/ganthein) ek jaisi ho jaye — backend (engine.py) jaisa */
const STOP_WORDS = new Set(["ka", "ki", "ke", "ko", "se", "me", "mein", "main", "par", "pe", "aur", "or", "hai", "hain",
  "he", "ho", "hy", "nahi", "nhi", "nahin", "raha", "rahi", "rahe", "gaya", "gayi", "gai", "gaye", "wala", "wali", "wale",
  "bhi", "the", "and", "of", "on", "in", "is", "are", "a", "an", "to", "my", "has", "have", "with"]);

function normalizeText(text) {
  return (text || "").toLowerCase().replace(/aa/g, "a").replace(/ee/g, "i").replace(/oo/g, "u").replace(/ii/g, "i");
}

function wordsOf(text) {
  return (normalizeText(text).match(/[\p{L}\p{N}]+/gu) || []).filter(function (w) {
    return w.length >= 2 && !STOP_WORDS.has(w);
  });
}

// 1 = poora keyword mila, 0.5 = lambe keyword ke aadhe alfaaz mile, 0 = nahi
function keywordScore(keyword, text, textWords) {
  if (text.includes(keyword.toLowerCase())) return 1;
  const parts = wordsOf(keyword);
  if (!parts.length) return 0;
  const hits = parts.filter(function (p) {
    return textWords.some(function (w) { return w === p || (p.length >= 4 && w.startsWith(p.slice(0, 4))); });
  }).length;
  if (hits === parts.length) return 1;
  if (hits >= 2 && hits * 2 >= parts.length) return 0.5;   // kam az kam 2 alfaaz (aik aam lafz kaafi nahi)
  return 0;
}

function matchSymptoms() {
  const text = el.description.value.toLowerCase();
  const textWords = wordsOf(text);
  const scores = diseasesForHost().map(function (d) {
    let score = 0;
    d.chips.forEach(function (id) {
      if (state.chips.has(id)) score += 2;
    });
    let wordHits = 0;
    if (text.trim()) {
      d.keywords.forEach(function (word) {
        wordHits += keywordScore(word, text, textWords);
      });
    }
    score += Math.min(wordHits, 4);
    return { slug: d.slug, score: score };
  }).filter(function (item) { return item.score >= 1; });

  if (!scores.length) return [];

  scores.sort(function (a, b) { return b.score - a.score; });
  const total = scores.reduce(function (sum, item) { return sum + item.score; }, 0);
  // Percent banate hain, magar 90% se zyada kabhi nahi (yeh basic matching hai)
  return scores.slice(0, 4).map(function (item) {
    return { slug: item.slug, confidence: Math.min(0.9, item.score / total) };
  });
}

/* ----- Sample result jab photo model abhi connected nahi ----- */
function samplePhotoResult() {
  const list = diseasesForHost().slice(0, 3);
  const sample = [0.78, 0.14, 0.05];
  return list.map(function (d, i) {
    return { slug: d.slug, confidence: sample[i] };
  });
}

const API_TIMEOUT_MS = 90000;     // muft server pehli dafa jaagne mein waqt leta hai

async function callApi(path, options) {
  const controller = new AbortController();
  const timer = setTimeout(function () { controller.abort(); }, API_TIMEOUT_MS);
  try {
    const response = await fetch(API_URL.replace(/\/$/, "") + path, Object.assign({}, options, { signal: controller.signal }));
    if (!response.ok) {
      throw new Error("Server error " + response.status);
    }
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function runPhotoCheck() {
  if (API_URL) {
    const form = new FormData();
    form.append("image", state.image.blob, "photo.jpg");
    form.append("type", state.type);
    form.append("host", state.host);
    const data = await callApi("/predict/photo", { method: "POST", body: form });
    return {
      mode: "photo",
      engine: "ai",
      supported: data.supported !== false,
      validImage: data.valid_image !== false,
      uncertain: data.uncertain === true,
      predictions: data.predictions || [],
      heatmap: data.heatmap || null,
      affectedArea: typeof data.affected_area === "number" ? data.affected_area : null
    };
  }
  return { mode: "photo", engine: "sample", validImage: true, predictions: samplePhotoResult(), heatmap: null, affectedArea: null };
}

async function runTextCheck() {
  if (API_URL) {
    try {
      return await runTextCheckOnServer();
    } catch (error) {
      // Server na mile to browser wali basic matching (kaam kabhi nahi rukta)
      return { mode: "text", engine: "basic", fallback: true, validImage: true, predictions: matchSymptoms() };
    }
  }
  return { mode: "text", engine: "basic", validImage: true, predictions: matchSymptoms() };
}

async function runTextCheckOnServer() {
  const data = await callApi("/predict/text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: state.type,
      host: state.host,
      symptoms: Array.from(state.chips),
      text: el.description.value.trim(),
      duration: el.duration ? el.duration.value : null,
      count: el.count ? el.count.value : null
    })
  });
  return { mode: "text", engine: "ai", validImage: true, predictions: data.predictions || [] };
}

function validateInput() {
  if (state.mode === "photo" && !state.image) {
    return TEXT.needPhoto;
  }
  if (state.mode === "text" && state.chips.size === 0 && el.description.value.trim().length < 10) {
    return TEXT.needText;
  }
  return "";
}

function showLoadingNote(text) {
  let note = el.loading.querySelector(".loading-note");
  if (!note) {
    note = createEl("p", "small-note loading-note");
    el.loading.appendChild(note);
  }
  note.textContent = text;
  note.hidden = !text;
}

async function playLoading(steps) {
  el.loadingSteps.innerHTML = "";
  const items = steps.map(function (text) {
    const li = createEl("li", "loading-step");
    li.appendChild(createEl("span", "loading-dot"));
    li.appendChild(createEl("span", "", text));
    el.loadingSteps.appendChild(li);
    return li;
  });
  el.loading.hidden = false;
  el.loading.scrollIntoView({ behavior: "smooth", block: "center" });

  for (const item of items) {
    item.classList.add("running");
    await wait(550);
    item.classList.remove("running");
    item.classList.add("done");
    item.querySelector(".loading-dot").textContent = "✓";
  }
}

el.form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const problem = validateInput();
  if (problem) {
    showError(problem);
    return;
  }
  showError("");

  el.analyzeBtn.disabled = true;
  el.result.hidden = true;
  const checkId = ++state.checkId;

  const typeName = state.type === "plant" ? TEXT.plant : TEXT.animal;
  const steps = (state.mode === "photo" ? TEXT.stepsPhoto : TEXT.stepsText).map(function (step) {
    return fill(step, { type: typeName });
  });

  const slowTimer = API_URL ? setTimeout(function () { showLoadingNote(TEXT.slowServer); }, 8000) : null;

  try {
    const results = await Promise.all([
      state.mode === "photo" ? runPhotoCheck() : runTextCheck(),
      playLoading(steps)
    ]);
    if (checkId !== state.checkId) return;   // user ne beech mein crop/animal badal diya
    state.result = results[0];
    state.questionAnswered = false;
    renderResult();
    if (state.result.predictions.length) saveRecent();
  } catch (error) {
    if (checkId === state.checkId) {
      showError(API_URL ? TEXT.serverDown : TEXT.failed);
    }
  } finally {
    clearTimeout(slowTimer);
    showLoadingNote("");
    if (checkId === state.checkId) {
      el.loading.hidden = true;
      el.analyzeBtn.disabled = false;
    }
  }
});


/* =========================================
   6. SHOW RESULT
   ========================================= */
function confidenceBlock(pct, label) {
  const box = createEl("div", "confidence");
  const row = createEl("div", "confidence-row");
  row.appendChild(createEl("span", "", label));
  row.appendChild(createEl("span", "", pct + "%"));
  const bar = createEl("div", "confidence-bar");
  bar.setAttribute("role", "progressbar");
  bar.setAttribute("aria-valuemin", "0");
  bar.setAttribute("aria-valuemax", "100");
  bar.setAttribute("aria-valuenow", String(pct));
  bar.setAttribute("aria-label", label);
  const fill = createEl("div", "confidence-fill");
  fill.style.width = pct + "%";
  bar.appendChild(fill);
  box.appendChild(row);
  box.appendChild(bar);
  return box;
}

function noticeBox(kind, title, text) {
  const box = createEl("div", "notice notice-" + kind);
  const icon = createEl("span", "notice-icon");
  icon.innerHTML = kind === "red"
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4M12 17h.01"></path><path d="M10.3 3.9L2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v6M12 7.5v.01"></path></svg>';
  const p = createEl("p", "notice-text");
  const strong = createEl("strong", "", title + " ");
  p.appendChild(strong);
  p.appendChild(document.createTextNode(text));
  box.appendChild(icon);
  box.appendChild(p);
  return box;
}

function renderNoMatch(card) {
  const box = createEl("div", "no-match");
  box.appendChild(createEl("h2", "result-name", TEXT.noMatchTitle));
  box.appendChild(createEl("p", "result-short", fill(TEXT.noMatchText, { host: hostName(state.host) })));
  const link = createEl("a", "btn btn-outline-green btn-small", TEXT.browseGuides);
  link.href = state.type === "plant" ? "plants.html" : "animals.html";
  const actions = createEl("div", "result-actions");
  actions.style.justifyContent = "center";
  actions.appendChild(link);
  box.appendChild(actions);
  card.appendChild(box);
}

/* Website ke guides ke ilawa model ke do khaas jawab */
const SPECIAL_SLUGS = ["healthy", "other"];

function isKnownSlug(slug) {
  return SPECIAL_SLUGS.includes(slug) || Boolean(findDisease(slug));
}

function slugName(slug) {
  if (slug === "healthy") return TEXT.healthyLabel;
  if (slug === "other") return TEXT.otherLabel;
  return findDisease(slug).name;
}

function listPage() {
  return state.type === "plant" ? "plants.html" : "animals.html";
}

function renderPhotoColumn(topBox, result) {
  const imageCol = createEl("div");
  const imageBox = createEl("div", "result-image-box");
  const img = createEl("img", "result-image");
  img.src = state.image.url;
  img.alt = TEXT.yourPhoto;
  imageBox.appendChild(img);

  let heat;
  if (result.heatmap) {
    heat = createEl("img", "heatmap");
    heat.src = result.heatmap;
    heat.alt = "";
    heat.style.background = "none";
    heat.style.mixBlendMode = "normal";
    heat.style.opacity = "0.55";
  } else {
    heat = createEl("div", "heatmap");
  }
  heat.hidden = true;
  imageBox.appendChild(heat);
  imageCol.appendChild(imageBox);

  const toggle = createEl("button", "btn btn-outline-green btn-small heatmap-toggle", TEXT.showHeat);
  toggle.type = "button";
  toggle.setAttribute("aria-pressed", "false");
  toggle.addEventListener("click", function () {
    heat.hidden = !heat.hidden;
    toggle.textContent = heat.hidden ? TEXT.showHeat : TEXT.hideHeat;
    toggle.setAttribute("aria-pressed", String(!heat.hidden));
  });
  imageCol.appendChild(toggle);
  imageCol.appendChild(createEl("p", "heatmap-note", result.heatmap ? TEXT.heatReal : TEXT.heatSample));
  topBox.appendChild(imageCol);
}

function renderOthers(card, others) {
  if (!others.length) return;
  const block = createEl("div", "result-block");
  block.appendChild(createEl("h3", "result-block-title", TEXT.others));
  const list = createEl("ul", "others-list");
  others.forEach(function (p) {
    const li = createEl("li");
    const box = confidenceBlock(Math.round(p.confidence * 100), slugName(p.slug));
    if (findDisease(p.slug)) {
      const nameSpan = box.querySelector(".confidence-row span");
      nameSpan.textContent = "";
      const link = createEl("a", "", slugName(p.slug));
      link.href = "diseases/" + p.slug + ".html";
      nameSpan.appendChild(link);
    }
    li.appendChild(box);
    list.appendChild(li);
  });
  block.appendChild(list);
  card.appendChild(block);
}

function renderTodo(card, items, dontItems) {
  const todo = createEl("div", "result-block");
  todo.appendChild(createEl("h3", "result-block-title", TEXT.whatNow));
  const todoList = createEl("ul", "check-list");
  todoList.style.marginTop = "14px";
  items.slice(0, 3).forEach(function (text) {
    todoList.appendChild(createEl("li", "", text));
  });
  todo.appendChild(todoList);
  if (dontItems && dontItems.length) {
    const dontList = createEl("ul", "dont-list");
    dontList.style.marginTop = "12px";
    dontItems.slice(0, 2).forEach(function (text) {
      dontList.appendChild(createEl("li", "", text));
    });
    todo.appendChild(dontList);
  }
  card.appendChild(todo);
}

function renderEnd(card, guideHref, guideText) {
  const actions = createEl("div", "result-actions");
  const guide = createEl("a", "btn btn-dark-green btn-small", guideText);
  guide.href = guideHref;
  const again = createEl("button", "btn btn-outline-green btn-small", TEXT.again);
  again.type = "button";
  again.addEventListener("click", function () {
    el.result.hidden = true;
    document.querySelector("#detect-card").scrollIntoView({ behavior: "smooth" });
  });
  actions.appendChild(guide);
  actions.appendChild(again);
  card.appendChild(actions);

  const feedback = createEl("div", "feedback-box");
  feedback.appendChild(createEl("span", "", TEXT.helpful));
  [TEXT.yes, TEXT.no].forEach(function (label) {
    const btn = createEl("button", "chip", label);
    btn.type = "button";
    btn.addEventListener("click", function () {
      feedback.innerHTML = "";
      feedback.appendChild(createEl("span", "feedback-thanks", TEXT.thanks));
    });
    feedback.appendChild(btn);
  });
  card.appendChild(feedback);

  card.appendChild(createEl("p", "small-note", TEXT.footNote));
  card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderUnsupported(card) {
  const box = createEl("div", "no-match");
  box.appendChild(createEl("h2", "result-name", TEXT.unsupportedTitle));
  box.appendChild(createEl("p", "result-short", fill(TEXT.unsupportedText, { host: hostName(state.host) })));
  const actions = createEl("div", "result-actions");
  actions.style.justifyContent = "center";
  const btn = createEl("button", "btn btn-dark-green btn-small", TEXT.describeInstead);
  btn.type = "button";
  btn.addEventListener("click", function () {
    hideResult();
    setMode("text");
    document.querySelector("#detect-card").scrollIntoView({ behavior: "smooth" });
  });
  actions.appendChild(btn);
  box.appendChild(actions);
  card.appendChild(box);
  card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function addNotice(card, kind, title, text) {
  const box = noticeBox(kind, title, text);
  if (card.childElementCount) box.style.marginTop = "14px";
  card.appendChild(box);
}

function renderResult() {
  const result = state.result;
  const card = el.result;
  card.innerHTML = "";
  card.hidden = false;

  // ----- Kis cheez ne result banaya -----
  if (result.engine === "sample") {
    addNotice(card, "amber", TEXT.sampleTitle, TEXT.sampleText);
  } else if (result.engine === "basic") {
    addNotice(card, "amber", TEXT.basicTitle, result.fallback ? TEXT.fallbackText : TEXT.basicText);
  }

  if (hasEmergencySigns()) {
    addNotice(card, "red", TEXT.emergencyTitle, TEXT.emergencyText);
  }

  if (result.supported === false) {
    renderUnsupported(card);
    return;
  }

  if (!result.validImage) {
    addNotice(card, "amber", fill(TEXT.notPhotoTitle, { type: state.type === "plant" ? TEXT.plant : TEXT.animal }), TEXT.notPhotoText);
    return;
  }

  const predictions = result.predictions
    .filter(function (p) { return isKnownSlug(p.slug); })
    .sort(function (a, b) { return b.confidence - a.confidence; });

  if (!predictions.length) {
    renderNoMatch(card);
    return;
  }

  if (result.uncertain) {
    addNotice(card, "amber", TEXT.uncertainTitle, TEXT.uncertainText);
  }

  const topSlug = predictions[0].slug;
  const top = findDisease(topSlug);          // "healthy" / "other" ke liye null
  const topPct = Math.round(predictions[0].confidence * 100);

  // ----- Top result -----
  const topBox = createEl("div", "result-top");
  topBox.style.marginTop = "22px";
  if (result.mode === "photo" && state.image) {
    renderPhotoColumn(topBox, result);
  } else {
    topBox.classList.add("no-image");
  }

  const info = createEl("div");
  info.appendChild(createEl("p", "result-label", TEXT.mostLikely));
  info.appendChild(createEl("h2", "result-name", slugName(topSlug)));
  if (top) {
    const tags = createEl("div", "result-tags");
    tags.appendChild(createEl("span", "tag " + (top.type === "animal" ? "tag-brown" : ""), top.hostLabel));
    tags.appendChild(createEl("span", "tag tag-gray", top.causeType));
    if (top.urgency && URGENCY[top.urgency]) {
      tags.appendChild(createEl("span", "tag " + URGENCY[top.urgency].tag, URGENCY[top.urgency].label));
    }
    info.appendChild(tags);
  }
  info.appendChild(confidenceBlock(topPct, TEXT.match));
  if (result.affectedArea !== null && result.affectedArea !== undefined) {
    info.appendChild(confidenceBlock(Math.round(result.affectedArea), TEXT.area));
  }
  info.appendChild(createEl("p", "result-short", top ? top.short : (topSlug === "healthy" ? TEXT.healthyText : TEXT.otherText)));
  topBox.appendChild(info);
  card.appendChild(topBox);

  // ----- Insaan ko lagne wali bimari: hifazat ka note -----
  if (top && top.zoonotic) {
    const safety = noticeBox("red", TEXT.zoonoticTitle, TEXT.zoonoticText);
    safety.style.marginTop = "18px";
    card.appendChild(safety);
  }

  // ----- Follow-up question (sirf bimari ke liye) -----
  if (top && !state.questionAnswered && top.question) {
    const q = createEl("div", "question-box");
    q.appendChild(createEl("p", "result-block-title", TEXT.beSure));
    q.appendChild(createEl("p", "question-text", top.question));
    const buttons = createEl("div", "question-buttons");
    const yes = createEl("button", "btn btn-dark-green btn-small", TEXT.yes);
    const no = createEl("button", "btn btn-outline-green btn-small", TEXT.no);
    yes.type = "button";
    no.type = "button";
    yes.addEventListener("click", function () { answerQuestion(true); });
    no.addEventListener("click", function () { answerQuestion(false); });
    buttons.appendChild(yes);
    buttons.appendChild(no);
    q.appendChild(buttons);
    card.appendChild(q);
  }

  renderOthers(card, predictions.slice(1, 4));

  if (top) {
    renderTodo(card, top.todo, top.dont);
    renderEnd(card, "diseases/" + top.slug + ".html", TEXT.fullGuide);
  } else {
    renderTodo(card, topSlug === "healthy" ? TEXT.healthyTips : TEXT.otherTips, null);
    renderEnd(card, listPage(), TEXT.browseGuides);
  }
}

function answerQuestion(isYes) {
  const preds = state.result.predictions;
  preds.sort(function (a, b) { return b.confidence - a.confidence; });
  if (isYes) {
    preds[0].confidence = Math.min(0.95, preds[0].confidence + 0.1);
  } else {
    preds[0].confidence = Math.max(0.05, preds[0].confidence - 0.3);
  }
  state.questionAnswered = true;
  renderResult();
  saveRecent(true);
}


/* =========================================
   7. RECENT CHECKS (sirf isi browser mein)
   ========================================= */
function readRecent() {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function writeRecent(list) {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(list));
  } catch (error) {
    // Private mode ya storage band: kuch nahi karna
  }
}

function saveRecent(replaceLast) {
  const preds = state.result.predictions.slice().sort(function (a, b) { return b.confidence - a.confidence; });
  const top = findDisease(preds[0].slug);
  if (!top) return;

  const list = readRecent();
  if (replaceLast) list.shift();
  list.unshift({
    slug: top.slug,
    type: state.type,
    host: state.host,
    pct: Math.round(preds[0].confidence * 100),
    sample: state.result.engine === "sample",
    date: new Date().toISOString().slice(0, 10)
  });
  writeRecent(list.slice(0, 5));
  renderRecent();
}

function renderRecent() {
  const list = readRecent();
  el.recentList.innerHTML = "";
  el.recentEmpty.hidden = list.length > 0;
  el.clearRecent.hidden = list.length === 0;

  list.forEach(function (item) {
    const disease = findDisease(item.slug);
    if (!disease) return;
    const hosts = item.type === "animal" ? DATA.animals : DATA.crops;
    const host = hosts.find(function (h) { return h[0] === item.host; });
    const li = createEl("li", "recent-item");
    const left = createEl("div");
    const link = createEl("a", "recent-name", disease.name);
    link.href = "diseases/" + item.slug + ".html";
    left.appendChild(link);
    left.appendChild(createEl("div", "recent-meta", (host ? host[1] : disease.hostLabel) + " · " + item.date + (item.sample ? " · " + TEXT.sample : "")));
    li.appendChild(left);
    li.appendChild(createEl("span", "recent-pct", item.pct + "%"));
    el.recentList.appendChild(li);
  });
}

el.clearRecent.addEventListener("click", function () {
  writeRecent([]);
  renderRecent();
});


/* Backend se asal list (is se muft server bhi pehle hi jaag jata hai). Na mile to data.js wali list. */
function loadPhotoCrops() {
  if (!API_URL) return;
  callApi("/health", { method: "GET" }).then(function (data) {
    if (!data || !Array.isArray(data.photo_crops)) return;
    PHOTO_CROPS.clear();
    data.photo_crops.forEach(function (crop) { PHOTO_CROPS.add(crop); });
    renderHosts();
    updatePhotoNote();
  }).catch(function () { /* server so raha ho to bhi page chalta rahe */ });
}


/* =========================================
   8. START
   Link se aaye: detect.html?type=animal&host=goat
   ========================================= */
(function start() {
  const params = new URLSearchParams(window.location.search);
  // Website ab sirf paudon ke liye hai; janwar ka data na ho to hamesha "plant"
  const type = params.get("type") === "animal" && DATA.animals.length ? "animal" : "plant";
  setType(type);

  const host = params.get("host");
  if (host && hostList().some(function (h) { return h[0] === host; })) {
    state.host = host;
    renderHosts();
    renderChips();
    updatePhotoNote();
  }
  if (params.get("mode") === "text" || params.get("mode") === "photo") {
    setMode(params.get("mode"));
  }
  renderRecent();
  loadPhotoCrops();
})();
