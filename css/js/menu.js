(() => {
  "use strict";

  // ==========================================
  // KOREAN AND ENGLISH TRANSLATIONS
  // ==========================================

  const translations = {
    ko: {
      announcement: "정성껏 준비한 한 그릇, 감동을 담아",
      brandName: "감동 숯골냉면",
      navHome: "홈",
      navMenu: "메뉴",
      navReservation: "예약",
      navAbout: "소개",
      navContact: "오시는 길",
      callUs: "전화 문의",

      heroEyebrow: "THE TASTE OF KOREAN TRADITION",
      heroTitle: "한 그릇에 담은<br><em>정성과 전통</em>",
      heroDescription:
        '깊고 시원한 육수, 정갈한 재료, 변함없는 마음.<br class="desktop-break"> 감동 숯골냉면의 메뉴를 만나보세요.',
      exploreMenu: "메뉴 둘러보기",

      welcomeText:
        "좋은 재료와 정성으로 준비합니다. 메뉴 가격은 매장 상황에 따라 달라질 수 있습니다.",

      menuEyebrow: "OUR MENU",
      menuHeading: "맛있는 순간을 <em>골라보세요</em>",
      menuNote:
        "대표 냉면부터 곁들이기 좋은 메뉴까지<br>취향에 맞게 즐겨보세요.",

      catAll: "전체 메뉴",
      catSignature: "대표 메뉴",
      catSide: "곁들임",
      catDrink: "주류 · 음료",

      badgeHouse: "정성 메뉴",
      badgePopular: "인기 메뉴",

      dishBaeksuk: "백숙",
      descBaeksuk: "정성껏 푹 고아 깊은 맛을 담은 따뜻한 한 상.",
      tagWarm: "따뜻한 요리",

      dishMul: "냉면",
      descMul: "메밀면과 시원하고 깊은 육수가 어우러진 대표 냉면.",
      tagCool: "시원한 별미",

      dishBibim: "비빔냉면",
      descBibim: "매콤달콤한 양념과 쫄깃한 면발의 맛있는 조화.",
      tagSpicy: "매콤한 맛",

      dishNaengGop: "냉곰배기",
      descNaengGop: "시원한 육수와 풍성한 고명이 어우러지는 별미.",
      tagHouse: "매장 별미",

      dishBibimGop: "비곰배기",
      descBibimGop: "풍미 있는 양념으로 즐기는 든든한 면 요리.",
      tagRich: "진한 풍미",

      dishMandu: "만두",
      descMandu: "면 요리와 함께 즐기기 좋은 든든한 만두.",
      tagSide: "곁들이기 좋은 메뉴",

      dishSari: "사리",
      descSari: "더 푸짐하게 즐기고 싶을 때 추가하는 면 사리.",
      tagExtra: "추가 메뉴",

      dishSoju: "소주",
      descSoju: "한국 식탁에 빠질 수 없는 대표 증류주.",
      tagAlcohol: "주류",

      dishBeer: "맥주",
      descBeer: "시원하게 곁들이기 좋은 차가운 맥주.",

      dishDrink: "음료수",
      descDrink: "식사와 함께 즐기는 시원한 음료.",
      tagSoft: "음료",

      dishCheongha: "청하",
      descCheongha: "깔끔한 맛으로 즐기는 한국의 청주.",
      tagTraditional: "전통주",

      dishBaekseju: "백세주",
      descBaekseju: "향긋한 한방 풍미가 특징인 전통주.",

      dishBokbunja: "복분자",
      descBokbunja: "짙은 베리 향과 색을 가진 한국의 과실주.",
      tagFruit: "과실주",

      disclaimer:
        "메뉴와 가격은 매장 사정에 따라 변경될 수 있습니다. 정확한 가격은 매장에서 확인해 주세요.",

      closingEyebrow: "A TABLE MADE WITH CARE",
      closingTitle: "오늘의 식사에<br><em>작은 감동을.</em>",
      closingText:
        "궁금한 메뉴가 있으신가요? 편하게 전화로 문의해 주세요.",
      closingButton: "042-822-9285 전화하기",

      footerLine: "정성으로 준비하고, 마음으로 대접합니다.",
      rights: "All rights reserved.",
      footerNote: "맛있게 드시고, 좋은 하루 보내세요."
    },

    en: {
      announcement: "A thoughtful bowl, prepared with care",
      brandName: "Gamdong Sutgol Naengmyeon",
      navHome: "Home",
      navMenu: "Menu",
      navReservation: "Reservation",
      navAbout: "About",
      navContact: "Contact",
      callUs: "Call us",

      heroEyebrow: "THE TASTE OF KOREAN TRADITION",
      heroTitle: "Tradition in<br><em>every bowl.</em>",
      heroDescription:
        'Deep, refreshing broth. Carefully prepared ingredients.<br class="desktop-break"> Discover the menu at Gamdong Sutgol Naengmyeon.',
      exploreMenu: "Explore the menu",

      welcomeText:
        "Prepared with care and good ingredients. Menu items and prices may change.",

      menuEyebrow: "OUR MENU",
      menuHeading: "Find your <em>next favourite.</em>",
      menuNote:
        "From signature Korean cold noodles to comforting sides,<br>there is something to enjoy your way.",

      catAll: "All items",
      catSignature: "Signature",
      catSide: "Sides",
      catDrink: "Drinks",

      badgeHouse: "Made with care",
      badgePopular: "Guest favourite",

      dishBaeksuk: "Baeksuk (Chicken Soup)",
      descBaeksuk:
        "A comforting, slow-simmered Korean chicken dish, prepared with care.",
      tagWarm: "Warm dish",

      dishMul: "Mul Naengmyeon",
      descMul:
        "Chewy buckwheat noodles in a refreshing, deeply flavoured chilled broth.",
      tagCool: "Refreshing",

      dishBibim: "Bibim Naengmyeon",
      descBibim:
        "Chewy noodles tossed in a sweet, spicy Korean sauce.",
      tagSpicy: "Sweet & spicy",

      dishNaengGop: "Naeng Gopbaegi",
      descNaengGop:
        "A house-style cold noodle speciality with cool broth and generous toppings.",
      tagHouse: "House speciality",

      dishBibimGop: "Bibim Gopbaegi",
      descBibimGop:
        "A hearty noodle dish with a rich, flavourful sauce.",
      tagRich: "Rich flavour",

      dishMandu: "Mandu (Korean Dumplings)",
      descMandu:
        "Hearty Korean dumplings, perfect alongside a bowl of noodles.",
      tagSide: "Perfect side",

      dishSari: "Extra Noodles",
      descSari:
        "Add an extra serving of noodles for a more generous meal.",
      tagExtra: "Add-on",

      dishSoju: "Soju",
      descSoju:
        "Korea's well-known distilled spirit, often shared over a meal.",
      tagAlcohol: "Alcohol",

      dishBeer: "Beer",
      descBeer: "A chilled beer to enjoy with your meal.",

      dishDrink: "Soft Drink",
      descDrink: "A refreshing soft drink to go with your food.",
      tagSoft: "Non-alcoholic",

      dishCheongha: "Cheongha",
      descCheongha: "A clean-tasting Korean rice wine.",
      tagTraditional: "Korean rice wine",

      dishBaekseju: "Baekseju",
      descBaekseju:
        "A traditional Korean liquor with aromatic herbal notes.",

      dishBokbunja: "Bokbunja Wine",
      descBokbunja:
        "A Korean fruit wine known for its deep berry colour and flavour.",
      tagFruit: "Fruit wine",

      disclaimer:
        "Menu items and prices may change. Please confirm current prices with the restaurant.",

      closingEyebrow: "A TABLE MADE WITH CARE",
      closingTitle: "Make today's meal<br><em>a little special.</em>",
      closingText:
        "Have a question about the menu? Give us a call — we're happy to help.",
      closingButton: "Call 042-822-9285",

      footerLine: "Prepared with care. Served with heart.",
      rights: "All rights reserved.",
      footerNote: "Enjoy your meal, and have a lovely day."
    }
  };

  // ==========================================
  // LANGUAGE SWITCHER
  // ==========================================

  let currentLanguage = "ko";

  const languageToggle =
    document.getElementById("languageToggle");

  const langKo =
    document.querySelector(".lang-ko");

  const langEn =
    document.querySelector(".lang-en");

  function setLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translatedText = translations[language][key];

      if (translatedText !== undefined) {
        element.innerHTML = translatedText;
      }
    });

    langKo.classList.toggle("active", language === "ko");
    langEn.classList.toggle("active", language === "en");

    languageToggle.setAttribute(
      "aria-label",
      language === "ko" ? "Switch to English" : "한국어로 변경"
    );

    document.title =
      language === "ko"
        ? "메뉴 | 감동 숯골냉면 · Gamdong Sutgol Naengmyeon"
        : "Menu | Gamdong Sutgol Naengmyeon";

    try {
      localStorage.setItem("gamsung-menu-language", language);
    } catch (error) {
      // The language switch still works if storage is unavailable.
    }
  }

  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "ko" ? "en" : "ko");
  });

  // ==========================================
  // MENU CATEGORY FILTERS
  // ==========================================

  const categoryButtons = [
    ...document.querySelectorAll(".category-tab")
  ];

  const menuCards = [
    ...document.querySelectorAll(".menu-card")
  ];

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      categoryButtons.forEach((item) => {
        const selected = item === button;

        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });

      menuCards.forEach((card, index) => {
        const show =
          category === "all" ||
          card.dataset.category === category;

        card.hidden = !show;

        if (show) {
          card.style.animationDelay =
            `${Math.min(index % 6, 5) * 45}ms`;

          card.style.animationName = "none";

          requestAnimationFrame(() => {
            card.style.animationName = "";
          });
        }
      });
    });
  });

  // ==========================================
  // RESPONSIVE MOBILE NAVIGATION
  // ==========================================

  const menuToggle =
    document.getElementById("menuToggle");

  const mainNav =
    document.getElementById("mainNav");

  function closeNav() {
    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    document.body.classList.remove("nav-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") !== "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    mainNav.classList.toggle("open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeNav();
    }
  });

  // ==========================================
  // BACK TO TOP BUTTON
  // ==========================================

  const backToTop =
    document.getElementById("backToTop");

  window.addEventListener(
    "scroll",
    () => {
      backToTop.classList.toggle(
        "visible",
        window.scrollY > 420
      );
    },
    { passive: true }
  );

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // ==========================================
  // AUTOMATIC FOOTER YEAR
  // ==========================================

  document.getElementById("year").textContent =
    new Date().getFullYear();

  // ==========================================
  // RESTORE SAVED LANGUAGE
  // ==========================================

  try {
    const savedLanguage =
      localStorage.getItem("gamsung-menu-language");

    if (savedLanguage === "en" || savedLanguage === "ko") {
      setLanguage(savedLanguage);
    }
  } catch (error) {
    // Korean remains the default language.
  }

})();