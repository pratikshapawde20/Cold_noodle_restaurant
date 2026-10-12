
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("languageToggle");
  const languageLabel = document.getElementById("languageLabel");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const copyAddressButton = document.getElementById("copyAddress");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const backToTop = document.getElementById("backToTop");

  // Official restaurant contact details from your screenshot.
  const restaurantPhone = "+82 42-822-9285";
  const restaurantEmail = ""; // Add the restaurant's verified email here.
  const restaurantAddress =
    "395-5 Gap-dong, Yuseong District, Daejeon, South Korea";
  const restaurantAddressKorean = "대전광역시 유성구 갑동 395-5";

  const translations = {
    en: {
      announcement: "A taste of Korea, a warmth from the heart.",
      navHome: "Home",
      navMenu: "Menu",
      navAbout: "About Us",
      navReservation: "Reservation",
      navContact: "Contact",
      heroEyebrow: "WE WOULD LOVE TO WELCOME YOU",
      heroTitle: "Let's make your<br><em>next meal special.</em>",
      heroText: "Have a question, need directions, or planning a visit? We are here to help you find your way to our table.",
      heroButton: "Find Our Restaurant",
      heroCaption: "GOOD FOOD BEGINS WITH A WELCOME",
      welcomeEyebrow: "A WARM HELLO FROM GAMDONG",
      welcomeTitle: "Your table is waiting.",
      welcomeText: "Whether you are visiting for your favourite Korean noodles, exploring Korean cuisine for the first time, or simply looking for a comforting meal, we are happy to help.",
      welcomeSignature: "좋은 음식과 따뜻한 마음으로 기다리겠습니다.",
      detailsEyebrow: "COME FIND US",
      detailsTitle: "We are just a few steps away.",
      detailsText: "Save our address, give us a call, or open directions before you visit.",
      addressLabel: "OUR ADDRESS",
      addressTitle: "Visit Us",
      copyAddress: "Copy Address",
      directions: "Get Directions",
      phoneLabel: "LET'S TALK",
      phoneTitle: "Call Our Restaurant",
      phoneDescription: "Questions about your visit? Give us a call.",
      callButton: "Call Now",
      phoneNote: "International callers can use the number above.",
      mapLabel: "PLAN YOUR VISIT",
      mapTitle: "Find Your Way",
      mapDescription: "Open the location in Google Maps and check your route before travelling.",
      mapButton: "Open Google Maps",
      mapNote: "Map results may vary by device and location.",
      visitEyebrow: "MAKE TIME FOR A GOOD MEAL",
      visitTitle: "A little Korean warmth, waiting for you.",
      visitText: "Put us on your map and come enjoy the flavours and hospitality of Korean food culture.",
      visitButton: "Plan Your Visit",
      messageEyebrow: "WE ARE HAPPY TO HEAR FROM YOU",
      messageTitle: "Let's start a conversation.",
      messageText: "Send your enquiry using the form. Your email app will open with your message ready to send.",
      messageNote: "For immediate assistance, calling the restaurant is the most direct option.",
      formEyebrow: "YOUR MESSAGE",
      requiredNote: "* Required fields",
      nameLabel: "Your Name *",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address *",
      emailPlaceholder: "you@example.com",
      subjectLabel: "What is your enquiry about?",
      subjectGeneral: "General enquiry",
      subjectVisit: "Restaurant visit",
      subjectMenu: "Menu question",
      subjectGroup: "Group dining",
      subjectOther: "Other",
      messageLabel: "Your Message *",
      messagePlaceholder: "Write your message here...",
      sendButton: "Prepare Email",
      formFootnote: "This form opens your email application. It does not send or store messages on this website.",
      closingTitle: "We look forward to welcoming you.",
      closingText: "감동 숯골냉면 · A table filled with warmth.",
      footerMessage: "A taste of Korea. A welcome from the heart.",
      footerNote: "Made with care. Served with warmth.",
      copySuccess: "Address copied successfully.",
      copyError: "Copy was unavailable. Please copy the address manually.",
      emailMissing: "The restaurant's email address has not been added yet. Please call the restaurant or add its verified email in contact.js.",
      formInvalid: "Please complete your name, valid email address, and message.",
      emailOpened: "Your email application should open with your enquiry prepared. Review it and press Send."
    },

    ko: {
      announcement: "한국의 맛과 마음에서 우러나는 따뜻함을 전합니다.",
      navHome: "홈",
      navMenu: "메뉴",
      navAbout: "소개",
      navReservation: "예약",
      navContact: "문의",
      heroEyebrow: "여러분을 따뜻하게 맞이하겠습니다",
      heroTitle: "다음 식사를<br><em>특별한 순간으로.</em>",
      heroText: "궁금한 점이 있으신가요? 찾아오시는 길이나 방문 계획에 대해 친절하게 안내해 드리겠습니다.",
      heroButton: "매장 위치 확인",
      heroCaption: "좋은 식사는 따뜻한 환대에서 시작됩니다",
      welcomeEyebrow: "감동에서 전하는 따뜻한 인사",
      welcomeTitle: "여러분을 위한 식탁이 기다립니다.",
      welcomeText: "좋아하는 냉면을 드시러 오시든, 한국 음식을 처음 경험하시든, 편안한 한 끼를 찾으시든 언제나 반갑게 맞이하겠습니다.",
      welcomeSignature: "좋은 음식과 따뜻한 마음으로 기다리겠습니다.",
      detailsEyebrow: "매장을 찾아오세요",
      detailsTitle: "여러분을 기다리고 있습니다.",
      detailsText: "주소를 복사하거나 전화로 문의하시고 방문 경로를 확인해 보세요.",
      addressLabel: "매장 주소",
      addressTitle: "오시는 길",
      copyAddress: "주소 복사",
      directions: "길 찾기",
      phoneLabel: "전화 문의",
      phoneTitle: "매장에 전화하기",
      phoneDescription: "방문 관련 궁금한 점이 있으시면 전화해 주세요.",
      callButton: "지금 전화하기",
      phoneNote: "해외에서도 위 전화번호로 연락하실 수 있습니다.",
      mapLabel: "방문 계획",
      mapTitle: "위치 확인하기",
      mapDescription: "Google 지도에서 위치를 열고 출발 전에 경로를 확인해 주세요.",
      mapButton: "Google 지도 열기",
      mapNote: "지도 검색 결과는 기기와 위치에 따라 달라질 수 있습니다.",
      visitEyebrow: "좋은 식사를 위한 시간",
      visitTitle: "한국의 따뜻한 맛이 여러분을 기다립니다.",
      visitText: "지도를 확인하고 한국 음식의 맛과 따뜻한 환대를 경험해 보세요.",
      visitButton: "방문 계획하기",
      messageEyebrow: "여러분의 연락을 기다립니다",
      messageTitle: "편하게 문의해 주세요.",
      messageText: "아래 양식에 문의 내용을 작성하면 이메일 앱이 열리고 메시지가 준비됩니다.",
      messageNote: "빠른 안내가 필요하시면 매장으로 직접 전화해 주세요.",
      formEyebrow: "문의 내용",
      requiredNote: "* 필수 입력 항목",
      nameLabel: "성함 *",
      namePlaceholder: "성함을 입력해 주세요",
      emailLabel: "이메일 주소 *",
      emailPlaceholder: "you@example.com",
      subjectLabel: "문의 유형",
      subjectGeneral: "일반 문의",
      subjectVisit: "매장 방문",
      subjectMenu: "메뉴 문의",
      subjectGroup: "단체 식사",
      subjectOther: "기타",
      messageLabel: "문의 내용 *",
      messagePlaceholder: "문의하실 내용을 작성해 주세요.",
      sendButton: "이메일 작성하기",
      formFootnote: "이 양식은 이메일 앱을 엽니다. 이 웹사이트가 메시지를 직접 전송하거나 저장하지는 않습니다.",
      closingTitle: "여러분을 만나 뵙기를 기대합니다.",
      closingText: "감동 숯골냉면 · 따뜻한 마음이 있는 식탁.",
      footerMessage: "한국의 맛, 마음에서 우러나는 환대.",
      footerNote: "정성으로 만들고, 따뜻함으로 대접합니다.",
      copySuccess: "주소가 복사되었습니다.",
      copyError: "주소를 복사할 수 없습니다. 주소를 직접 복사해 주세요.",
      emailMissing: "아직 매장의 이메일 주소가 등록되지 않았습니다. 전화로 문의하시거나 contact.js에 확인된 이메일 주소를 입력해 주세요.",
      formInvalid: "성함, 올바른 이메일 주소, 문의 내용을 모두 입력해 주세요.",
      emailOpened: "이메일 앱이 열리면 내용을 확인하고 보내기 버튼을 눌러 주세요."
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
        // These are fixed page translations authored in this script.
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.placeholder = dictionary[key];
      }
    });

    languageLabel.textContent = language === "en" ? "한국어" : "English";

    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch language to Korean" : "Switch language to English"
    );

    try {
      localStorage.setItem("gamdong-contact-language", language);
    } catch (error) {
      // Language switching still works without browser storage.
    }
  }

  try {
    const savedLanguage = localStorage.getItem("gamdong-contact-language");
    if (savedLanguage === "ko" || savedLanguage === "en") {
      currentLanguage = savedLanguage;
    }
  } catch (error) {
    // English is the default.
  }

  applyLanguage(currentLanguage);

  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "ko" : "en");
  });

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

  // Copy address
  copyAddressButton.addEventListener("click", async () => {
    const address = `${restaurantAddress}\n${restaurantAddressKorean}`;

    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard unavailable");
      }

      await navigator.clipboard.writeText(address);
      formStatus.textContent = translations[currentLanguage].copySuccess;
    } catch (error) {
      formStatus.textContent = translations[currentLanguage].copyError;

      // Fallback for browsers that do not support the Clipboard API.
      const temporary = document.createElement("textarea");
      temporary.value = address;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();

      try {
        document.execCommand("copy");
      } catch (copyError) {
        // Manual copying remains possible if browser permissions block copying.
      }

      temporary.remove();
    }
  });

  // Contact form: prepare an email using the visitor's default mail app.
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      formStatus.textContent = translations[currentLanguage].formInvalid;
      return;
    }

    if (!restaurantEmail.trim()) {
      formStatus.textContent = translations[currentLanguage].emailMissing;
      return;
    }

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const subject = document.getElementById("visitorSubject").value;
    const message = document.getElementById("visitorMessage").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = translations[currentLanguage].formInvalid;
      return;
    }

    const emailSubject = encodeURIComponent(
      `Website enquiry: ${subject}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Reply email: ${email}\n` +
      `Enquiry type: ${subject}\n\n` +
      `Message:\n${message}`
    );

    formStatus.textContent = translations[currentLanguage].emailOpened;

    window.location.href =
      `mailto:${restaurantEmail}?subject=${emailSubject}&body=${emailBody}`;
  });

  // Back to top
  function updateBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});




















