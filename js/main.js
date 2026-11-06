/* =====================================================================
   AgriHealth AI – main.js
   Yeh file har page par chalti hai.
   1. Header (scroll shadow + search box)
   2. Mobile menu
   3. Scroll animation
   4. Filters (Plants, Animals, Blog pages)
   5. Blog search
   6. Disease page tabs
   7. Contact form
   ===================================================================== */

// JS chal rahi hai: <html> par "js" class (scroll animation isi se chalti hai)
document.documentElement.classList.add("js");

// Urdu pages: <html lang="ur">
const IS_URDU = document.documentElement.lang === "ur";
const MAIN_TEXT = IS_URDU ? {
  name: "براہ کرم اپنا نام لکھیں۔",
  email: "براہ کرم درست ای میل لکھیں۔",
  message: "براہ کرم کم از کم 10 حروف کا پیغام لکھیں۔"
} : {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  message: "Please write a message of at least 10 characters."
};


/* =========================================
   1. HEADER
   ========================================= */
const header = document.querySelector(".header");
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

searchBtn.addEventListener("click", function () {
  const isOpen = searchBox.classList.toggle("open");
  searchBtn.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    searchInput.focus();
  }
});


/* =========================================
   2. MOBILE MENU
   ========================================= */
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".menu-overlay");

function openMenu() {
  document.body.classList.add("menu-open");
  menuBtn.setAttribute("aria-expanded", "true");
  closeBtn.focus();
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.focus();
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  if (document.body.classList.contains("menu-open")) {
    closeMenu();
  }
  if (searchBox.classList.contains("open")) {
    searchBox.classList.remove("open");
    searchBtn.setAttribute("aria-expanded", "false");
    searchBtn.focus();
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 960 && document.body.classList.contains("menu-open")) {
    closeMenu();
  }
});


/* =========================================
   3. SCROLL ANIMATION
   ========================================= */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(function (item) {
    item.classList.add("visible");
  });
}


/* =========================================
   4. FILTERS
   HTML: buttons with data-filter="wheat" inside [data-filter-group],
   cards with data-tags="wheat tomato" inside [data-filter-list].
   ========================================= */
const filterGroup = document.querySelector("[data-filter-group]");
const filterList = document.querySelector("[data-filter-list]");
const filterEmpty = document.querySelector("[data-filter-empty]");
const blogSearch = document.querySelector("#blog-search, #list-search");   // Blog, Plants aur Animals pages par
const kindGroup = document.querySelector("[data-kind-group]");              // sirf Plants page: bimari / keera / khurak

function currentKind() {
  const active = kindGroup ? kindGroup.querySelector("[data-kind].active") : null;
  return active ? active.dataset.kind : "all";
}

function blogSearchValue() {
  return blogSearch ? blogSearch.value.trim().toLowerCase() : "";
}

function applyFilter(value) {
  if (!filterGroup || !filterList) return;

  let visibleCount = 0;
  const searchWord = blogSearchValue();
  const kind = currentKind();

  filterGroup.querySelectorAll("[data-filter]").forEach(function (btn) {
    const isActive = btn.dataset.filter === value;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  filterList.querySelectorAll("[data-tags]").forEach(function (card) {
    const tags = card.dataset.tags.split(" ");
    const matchFilter = value === "all" || tags.includes(value);
    const matchSearch = !searchWord || (card.dataset.search || "").includes(searchWord);
    const matchKind = kind === "all" || card.dataset.kind === kind;
    const show = matchFilter && matchSearch && matchKind;
    card.hidden = !show;
    if (show) visibleCount++;
  });

  if (filterEmpty) {
    filterEmpty.hidden = visibleCount > 0;
  }
}

function currentFilter() {
  const active = filterGroup ? filterGroup.querySelector("[data-filter].active") : null;
  return active ? active.dataset.filter : "all";
}

if (filterGroup) {
  filterGroup.addEventListener("click", function (event) {
    const btn = event.target.closest("[data-filter]");
    if (btn) {
      applyFilter(btn.dataset.filter);
    }
  });

  if (kindGroup) {
    kindGroup.addEventListener("click", function (event) {
      const btn = event.target.closest("[data-kind]");
      if (!btn) return;
      kindGroup.querySelectorAll("[data-kind]").forEach(function (b) {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      applyFilter(currentFilter());
    });
  }

  // Link se aaye ho, jaise plants.html?filter=wheat
  const params = new URLSearchParams(window.location.search);
  const startFilter = params.get("filter");
  const startButton = startFilter ? filterGroup.querySelector('[data-filter="' + CSS.escape(startFilter) + '"]') : null;
  applyFilter(startButton ? startFilter : "all");
  if (startButton && window.location.hash === "#diseases" && filterGroup.scrollWidth > filterGroup.clientWidth) {
    // mobile par chuna hua button nazar aaye (page pehle hi #diseases par hai)
    startButton.scrollIntoView({ block: "nearest", inline: "center" });
  }
}


/* =========================================
   5. BLOG SEARCH (blog.html?q=...)
   ========================================= */
const diseaseResults = document.querySelector("#disease-results");
const diseaseResultsList = document.querySelector("#disease-results-list");

function showDiseaseMatches(word) {
  if (!diseaseResults || !window.AH_DATA) return;

  diseaseResultsList.innerHTML = "";
  if (word.length < 2) {
    diseaseResults.hidden = true;
    return;
  }

  const matches = window.AH_DATA.diseases.filter(function (d) {
    const text = (d.name + " " + d.hostLabel + " " + d.short + " " + d.keywords.join(" ")).toLowerCase();
    return text.includes(word);
  });

  matches.slice(0, 6).forEach(function (d) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "diseases/" + d.slug + ".html";
    a.className = "tag " + (d.type === "animal" ? "tag-brown" : "");
    a.textContent = d.name + " · " + d.hostLabel;
    li.appendChild(a);
    diseaseResultsList.appendChild(li);
  });

  diseaseResults.hidden = matches.length === 0;
}

if (blogSearch) {
  const query = new URLSearchParams(window.location.search).get("q");
  if (query) {
    blogSearch.value = query;
  }

  blogSearch.addEventListener("input", function () {
    applyFilter(currentFilter());
    showDiseaseMatches(blogSearchValue());
  });

  applyFilter(currentFilter());
  showDiseaseMatches(blogSearchValue());
}


/* =========================================
   6. DISEASE PAGE TABS (active tab while scrolling)
   ========================================= */
const tabLinks = document.querySelectorAll(".detail-tab");

if (tabLinks.length && "IntersectionObserver" in window) {
  const tabObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tabLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  tabLinks.forEach(function (link) {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) tabObserver.observe(target);
  });
}


/* =========================================
   7. CONTACT FORM
   Static website hai, is liye form user ki email app kholta hai
   (mailto). Baad mein Formspree jaisi service lagai ja sakti hai.
   ========================================= */
const contactForm = document.querySelector("#contact-form");

function setFieldError(input, message) {
  const error = document.querySelector("#" + input.id + "-error");
  input.classList.toggle("invalid", Boolean(message));
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (error) error.textContent = message;
}

if (contactForm) {
  const fields = {
    name: contactForm.querySelector("#contact-name"),
    email: contactForm.querySelector("#contact-email"),
    topic: contactForm.querySelector("#contact-topic"),
    message: contactForm.querySelector("#contact-message")
  };
  const success = document.querySelector("#contact-success");

  // Likhna shuru karte hi error hata do
  Object.values(fields).forEach(function (input) {
    input.addEventListener("input", function () {
      setFieldError(input, "");
    });
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    success.hidden = true;

    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();
    let valid = true;

    if (name.length < 2) {
      setFieldError(fields.name, MAIN_TEXT.name);
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError(fields.email, MAIN_TEXT.email);
      valid = false;
    }
    if (message.length < 10) {
      setFieldError(fields.message, MAIN_TEXT.message);
      valid = false;
    }

    if (!valid) {
      contactForm.querySelector(".invalid").focus();
      return;
    }

    const to = contactForm.dataset.email;
    const subject = "[AgriHealth AI" + (IS_URDU ? " – Urdu" : "") + "] " + fields.topic.value + " – " + name;
    const body = message + "\n\nFrom: " + name + " (" + email + ")";
    window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    success.hidden = false;
  });
}
