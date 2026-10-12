
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  const languageLabel = document.getElementById("languageLabel");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");

  // English and Korean content
  const translations = {
    en: {
      announcement: "A taste of Korea, a warmth from the heart.",
      navHome: "Home",
      navMenu: "Menu",
      navAbout: "About Us",
      navReservation: "Reservation",
      navContact: "Contact",
      heroEyebrow: "OUR STORY · 우리의 이야기",
      heroTitle: "More than food.<br><em>A feeling of home.</em>",
      heroDescription: "A table filled with Korean tradition, thoughtful flavours, and the simple joy of sharing a meal.",
      discoverButton: "Discover Our Story",
      heroCaption: "ROOTED IN KOREAN FOOD CULTURE",
      introLabel: "THE HEART OF GAMDONG",
      introEyebrow: "A TABLE WITH MEANING",
      introTitle: "Good food brings people closer.",
      introP1: "In Korean culture, a meal is more than something we eat. It is a way to show care, welcome a guest, and bring people together.",
      introP2: "At Gamdong Sutgol Naengmyeon, we celebrate that spirit through the beauty of Korean cuisine. We believe a memorable meal begins with respect for food, attention to detail, and a warm welcome for every guest.",
      signature: "With warmth, from our table to yours.",
      imageTagOne: "THE JOY OF SHARING",
      foodQuote: "Food tastes even better when it is shared with kindness.",
      foodQuoteSub: "A simple thought that makes every table special.",
      goodwillEyebrow: "THE WARMTH OF KOREAN HOSPITALITY",
      goodwillTitle: "음식에는 마음이 담깁니다.",
      goodwillTranslation: "“Food carries the heart of the person who prepares it.”",
      goodwillIntro: "Korean food culture is deeply connected to care, gratitude, togetherness, and respect. We honour that beautiful spirit by welcoming every guest with sincerity.",
      valueOneTitle: "정성 · Jeongseong",
      valueOneText: "Sincere care in every detail. A thoughtful approach to food makes an ordinary meal feel meaningful.",
      valueTwoTitle: "정 · Jeong",
      valueTwoText: "Warmth and human connection. We believe food can turn strangers into friends and moments into memories.",
      valueThreeTitle: "복 · Bok",
      valueThreeText: "Good fortune and well-being. May every meal bring a little happiness, comfort, and goodness to your day.",
      cultureLabel: "A LOVE FOR KOREAN CUISINE",
      cultureEyebrow: "TRADITION MEETS THE TABLE",
      cultureTitle: "Every dish has a story to tell.",
      cultureP1: "From refreshing naengmyeon noodles to comforting Korean favourites, Korean cuisine offers a wonderful balance of texture, flavour, and tradition.",
      cultureP2: "We invite you to slow down, explore something new, and enjoy the experience of a meal made to be remembered.",
      exploreMenu: "Explore Our Menu",
      cultureCaptionSmall: "A KOREAN FAVOURITE",
      cultureCaptionBig: "Simple. Thoughtful. Memorable.",
      promiseEyebrow: "OUR PROMISE TO YOU",
      promiseTitle: "Every guest deserves a seat at our table.",
      promiseText: "We want you to leave with more than a satisfied appetite. We hope you leave feeling welcomed, cared for, and happy you came.",
      promiseTranslation: "“Sharing delicious food and heartfelt warmth.”",
      visitButton: "Come Share a Meal",
      closingEyebrow: "YOUR PLACE AT OUR TABLE",
      closingTitle: "Good food. Good people.<br><em>Good memories.</em>",
      closingText: "Whether you know Korean cuisine well or are discovering it for the first time, we look forward to welcoming you.",
      contactButton: "Get in Touch",
      footerMessage: "A taste of Korea. A welcome from the heart.",
      footerNote: "Made with care. Served with warmth."
    },

    ko: {
      announcement: "한국의 맛과 마음에서 우러나는 따뜻함을 전합니다.",
      navHome: "홈",
      navMenu: "메뉴",
      navAbout: "소개",
      navReservation: "예약",
      navContact: "문의",
      heroEyebrow: "우리의 이야기 · OUR STORY",
      heroTitle: "음식 그 이상.<br><em>집처럼 편안한 한 끼.</em>",
      heroDescription: "한국의 전통과 정성스러운 맛, 그리고 함께 나누는 식사의 기쁨이 있는 식탁입니다.",
      discoverButton: "우리 이야기 보기",
      heroCaption: "한국 음식 문화의 따뜻함",
      introLabel: "감동의 마음",
      introEyebrow: "마음이 담긴 식탁",
      introTitle: "좋은 음식은 사람들의 마음을 가깝게 합니다.",
      introP1: "한국 문화에서 식사는 단순히 배를 채우는 일이 아닙니다. 서로를 아끼고, 손님을 환영하며, 사람들을 하나로 이어 주는 소중한 시간입니다.",
      introP2: "감동 숯골냉면은 한국 음식의 아름다운 정신을 소중히 생각합니다. 음식에 대한 존중과 세심한 정성, 그리고 모든 손님을 따뜻하게 맞이하는 마음이 기억에 남는 식사를 만든다고 믿습니다.",
      signature: "따뜻한 마음을 담아, 여러분의 식탁까지.",
      imageTagOne: "함께 나누는 기쁨",
      foodQuote: "따뜻한 마음으로 함께 나누는 음식은 더욱 맛있습니다.",
      foodQuoteSub: "모든 식탁을 특별하게 만드는 작은 마음입니다.",
      goodwillEyebrow: "한국의 따뜻한 환대",
      goodwillTitle: "음식에는 마음이 담깁니다.",
      goodwillTranslation: "“음식을 준비하는 사람의 마음이 음식에 담깁니다.”",
      goodwillIntro: "한국의 음식 문화에는 배려와 감사, 함께하는 기쁨과 존중이 담겨 있습니다. 저희는 진심 어린 마음으로 모든 손님을 맞이하며 그 아름다운 정신을 이어가고자 합니다.",
      valueOneTitle: "정성 · Jeongseong",
      valueOneText: "작은 부분까지 진심을 다합니다. 음식에 정성을 담으면 평범한 한 끼도 특별한 시간이 됩니다.",
      valueTwoTitle: "정 · Jeong",
      valueTwoText: "따뜻한 마음과 사람 사이의 정을 소중히 여깁니다. 음식은 낯선 사람을 친구로, 순간을 추억으로 만들어 줍니다.",
      valueThreeTitle: "복 · Bok",
      valueThreeText: "행운과 건강, 행복을 기원하는 마음입니다. 모든 식사가 여러분의 하루에 작은 기쁨과 편안함을 더하기를 바랍니다.",
      cultureLabel: "한국 음식에 대한 사랑",
      cultureEyebrow: "전통과 식탁의 만남",
      cultureTitle: "모든 음식에는 이야기가 있습니다.",
      cultureP1: "시원한 냉면부터 마음을 편안하게 해 주는 한국의 다양한 음식까지, 한국 음식은 식감과 맛, 전통이 조화롭게 어우러집니다.",
      cultureP2: "잠시 여유를 가지고 새로운 맛을 발견하며 오래 기억에 남을 식사의 즐거움을 경험해 보세요.",
      exploreMenu: "메뉴 둘러보기",
      cultureCaptionSmall: "사랑받는 한국 음식",
      cultureCaptionBig: "소박하게. 정성스럽게. 오래 기억되게.",
      promiseEyebrow: "여러분과의 약속",
      promiseTitle: "모든 손님은 저희 식탁에서 환영받습니다.",
      promiseText: "배부르게 드시는 것만으로 끝나지 않기를 바랍니다. 환영받고, 배려받으며, 방문하길 잘했다고 느끼실 수 있기를 바랍니다.",
      promiseTranslation: "“맛있는 음식과 진심 어린 따뜻함을 전합니다.”",
      visitButton: "함께 식사하기",
      closingEyebrow: "여러분을 위한 식탁",
      closingTitle: "맛있는 음식. 좋은 사람들.<br><em>아름다운 추억.</em>",
      closingText: "한국 음식이 익숙하신 분도, 처음 경험하시는 분도 모두 따뜻하게 맞이하겠습니다.",
      contactButton: "문의하기",
      footerMessage: "한국의 맛, 마음에서 우러나는 환대.",
      footerNote: "정성으로 만들고, 따뜻함으로 대접합니다."
    }
  };

  let currentLanguage = "en";

  function applyLanguage(language) {
    currentLanguage = language;
    const dictionary = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        // The dictionary contains our intended markup only for headings.
        element.innerHTML = dictionary[key];
      }
    });

    languageLabel.textContent = language === "en" ? "한국어" : "English";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch language to Korean" : "Switch language to English"
    );

    try {
      localStorage.setItem("gamdong-about-language", language);
    } catch (error) {
      // The page still works when browser storage is unavailable.
    }
  }

  // Language switching
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "ko" : "en");
  });

  // Restore the saved language, if available.
  try {
    const savedLanguage = localStorage.getItem("gamdong-about-language");
    if (savedLanguage === "ko" || savedLanguage === "en") {
      currentLanguage = savedLanguage;
    }
  } catch (error) {
    // Keep English as the default.
  }

  applyLanguage(currentLanguage);

  // Mobile navigation
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Scroll reveal
  const revealTargets = document.querySelectorAll(
    ".intro-heading, .intro-copy, .story-image, .story-visual-copy, .goodwill-heading, .value-card, .culture-copy, .culture-image, .promise-inner, .closing-section > div"
  );

  revealTargets.forEach((element) => element.classList.add("js-reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("revealed"));
  }

  // Back-to-top button
  function updateBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Current year
  document.getElementById("year").textContent = new Date().getFullYear();
});
