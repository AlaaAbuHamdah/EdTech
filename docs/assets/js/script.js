// ===== Dark Mode Configuration =====
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  if (themeToggleLightIcon) themeToggleLightIcon.classList.remove("hidden");
} else {
  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
}

// ===== Navbar Hamburger Toggle =====
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(
    '[data-collapse-toggle="navbar-language"]'
  );
  const menuOpenIcon = document.getElementById("menu-open-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      if (menuOpenIcon && menuCloseIcon) {
        menuOpenIcon.classList.toggle("hidden");
        menuCloseIcon.classList.toggle("hidden");
      }
    });
  }
});

// ===== Swiper Setup (يتم استدعاؤها قبل ScrollReveal أو تحريك الحاوية) =====
const coursesSwiper = new Swiper(".courses-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  rewind: true,

  // تفادي التعارضات مع الأبعاد وتحسين الاستجابة
  observer: true,
  observeParents: true,
  resizeObserver: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".courses-next",
    prevEl: ".courses-prev",
  },

  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 24 },
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  grabCursor: true,
  keyboard: { enabled: true },
});

// ===== ScrollReveal Setup =====
const sr = ScrollReveal({
  distance: "60px",
  duration: 1000,
  delay: 200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false,
  mobile: true,
  viewFactor: 0.2,
});

// Hero
sr.reveal(".hero-info", { origin: "left", distance: "80px", delay: 200 });
sr.reveal(".hero-img", { origin: "right", distance: "80px", delay: 400 });

// Section Titles
sr.reveal("section h2", { origin: "bottom", distance: "40px", duration: 800 });

// Features & Categories ONLY (تمت إزالة .course-card لمنع التعارض مع Swiper)
sr.reveal(".feature-card, .category-card", {
  origin: "bottom",
  distance: "50px",
  duration: 800,
  interval: 150,
});

// بدلاً من تحريك البطاقات الفردية داخل السلايدر، نقوم بتحريك حاوية السلايدر كاملة:
sr.reveal(".courses-swiper", {
  origin: "bottom",
  distance: "50px",
  duration: 800,
  afterReveal: function (el) {
    // إجبار Swiper على إعادة الحسابات بعد ظهور السلايدر على الشاشة
    if (coursesSwiper && coursesSwiper.update) {
      coursesSwiper.update();
    }
  },
});

// FAQ
sr.reveal("#faq-accordion", { origin: "bottom", distance: "50px", delay: 200 });

// About / Newsletter
sr.reveal(".about-info", { origin: "left", distance: "60px" });
sr.reveal(".about-img", { origin: "right", distance: "60px", delay: 200 });
sr.reveal(".newsletter", { origin: "bottom", distance: "60px" });

// Footer
sr.reveal("footer > div > div > div", {
  origin: "bottom",
  distance: "40px",
  interval: 100,
});
