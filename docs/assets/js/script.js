// On page load or when changing themes, best to add inline in `head` to avoid FOUC
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

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
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
// ===== تبديل أيقونة الهامبرغر / X =====
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(
    '[data-collapse-toggle="navbar-language"]',
  );
  const menuOpenIcon = document.getElementById("menu-open-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");
  const menu = document.getElementById("navbar-language");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      // تبديل الأيقونات
      menuOpenIcon.classList.toggle("hidden");
      menuCloseIcon.classList.toggle("hidden");
    });
  }
});

// ===== ScrollReveal Setup =====
ScrollReveal({
  distance: "60px",
  duration: 1000,
  delay: 200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false, // لا يعيد الحركة لما ترجع فوق
  mobile: true, // يشتغل على الجوال
  viewFactor: 0.2, // نسبة ظهور العنصر لبدء الحركة
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

// ===== العنوان الرئيسي (Hero) =====
ScrollReveal().reveal(".hero-info", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal(".hero-img", {
  origin: "right",
  distance: "80px",
  duration: 1000,
  delay: 400,
});

// ===== عناوين الأقسام =====
ScrollReveal().reveal("section h2", {
  origin: "bottom",
  distance: "40px",
  duration: 800,
});

// ===== البطاقات (Features / Categories / Courses) =====
ScrollReveal().reveal(".feature-card, .category-card, .course-card", {
  origin: "bottom",
  distance: "50px",
  duration: 800,
  interval: 150, // تأخير تلقائي بين البطاقات
});

// ===== أكورديون FAQ =====
ScrollReveal().reveal("#faq-accordion", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
});

// ===== About / Newsletter =====
ScrollReveal().reveal(".about-info", { origin: "left", distance: "60px" });
ScrollReveal().reveal(".about-img", {
  origin: "right",
  distance: "60px",
  delay: 200,
});
ScrollReveal().reveal(".newsletter", { origin: "bottom", distance: "60px" });

// ===== الفوتر =====
ScrollReveal().reveal("footer > div > div > div", {
  origin: "bottom",
  distance: "40px",
  interval: 100,
});

const coursesSwiper = new Swiper('.courses-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    rewind: true,
    
    pagination: {
        el: '.courses-swiper .swiper-pagination',
        clickable: true,
    },
    
    navigation: {
        nextEl: '.courses-next',
        prevEl: '.courses-prev',
    },
    
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 24 },
    },

    grabCursor: true,
    keyboard: { enabled: true },
});
