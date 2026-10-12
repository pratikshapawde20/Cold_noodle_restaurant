
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const languageToggle = $("languageToggle");
  const languageLabel = $("languageLabel");
  const menuToggle = $("menuToggle");
  const mainNav = $("mainNav");
  const form = $("reservationForm");
  const formStatus = $("formStatus");
  const reservationDate = $("reservationDate");
  const guestCountDisplay = $("guestCount");
  const guestCountInput = $("guestCountInput");
  const decreaseGuests = $("decreaseGuests");
  const increaseGuests = $("increaseGuests");
  const summary = $("reservationSummary");
  const summaryDetails = $("summaryDetails");
  const sendWhatsApp = $("sendWhatsApp");
  const editReservation = $("editReservation");
  const backToTop = $("backToTop");

  // Restaurant contact details shown in your screenshot.
  const restaurantWhatsApp = "82428229285";
  const restaurantPhone = "+82 42-822-9285";

  // This is a request form, not a live booking system.
  const translations = {
    en: {
      announcement: "A taste of Korea, a warmth from the heart.",
      navHome: "Home",
      navMenu: "Menu",
      navAbout: "About Us",
      navReservation: "Reservation",
      navContact: "Contact",

      heroEyebrow: "YOUR TABLE, YOUR MOMENT",
      heroTitle: "A seat at our table.<br><em>A memory to take home.</em>",
      heroText: "Gather your favourite people and make time for a comforting Korean meal. Tell us when you would like to visit.",
      heroButton: "Plan Your Visit",
      heroCaption: "GOOD FOOD · GOOD COMPANY · GOOD MOMENTS",

      introEyebrow: "A LITTLE MOMENT OF KOREAN HOSPITALITY",
      introTitle: "The best meals begin<br>with coming together.",
      introText: "Whether it is a family meal, a catch-up with friends, or a quiet moment over your favourite noodles, we look forward to helping you plan your visit.",
      introKorean: "정성껏 준비한 음식과 따뜻한 마음으로 맞이하겠습니다.",

      bookingEyebrow: "LET'S SAVE A PLACE FOR YOU",
      bookingTitle: "Your visit<br>starts here.",
      bookingText: "Share your preferred date, time, and party size. Your details will be prepared as a request that you can send to the restaurant.",
      photoCaption: "A WARM WELCOME AWAITS",

      locationLabel: "FIND OUR RESTAURANT",
      directions: "Get Directions ↗",
      callLabel: "PREFER TO SPEAK WITH US?",
      callText: "Call the restaurant for assistance with your visit.",

      formEyebrow: "RESERVATION REQUEST",
      formTitle: "Tell us about your visit.",
      formDescription: "Fields marked with * are required. Please check your details before sending.",
      nameLabel: "Full Name *",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "+82...",
      emailLabel: "Email (optional)",
      emailPlaceholder: "you@example.com",
      dateLabel: "Preferred Date *",
      timeLabel: "Preferred Time *",
      timePlaceholder: "Choose a time",
      guestLabel: "Number of Guests *",
      guestDescription: "How many people will be joining you?",
      people: "people",

      occasionLabel: "Occasion (optional)",
      occasionRegular: "Just a meal",
      occasionFamily: "Family gathering",
      occasionBirthday: "Birthday",
      occasionFriends: "Friends gathering",
      occasionBusiness: "Business meal",
      occasionOther: "Other special occasion",

      requestsLabel: "Special Requests (optional)",
      requestsPlaceholder: "Let us know if you have any requests...",
      noticeText: "This is a reservation request, not a confirmed booking. The restaurant must confirm availability.",
      submitButton: "Prepare Reservation Request",

      summaryEyebrow: "YOUR REQUEST DETAILS",
      summaryTitle: "Review your visit.",
      summaryText: "Your request is ready. Choose WhatsApp to send it to the restaurant.",
      whatsappButton: "Continue to WhatsApp",
      editButton: "Edit My Details",
      summaryWarning: "Please wait for the restaurant to confirm your requested date and time.",

      bottomTitle: "Make room for good food and good company.",
      bottomText: "We look forward to welcoming you to Gamdong Sutgol Naengmyeon.",
      contactLink: "Have a question? Contact us",

      footerMessage: "A taste of Korea. A welcome from the heart.",
      footerNote: "Made with care. Served with warmth.",

      validationName: "Please enter your name.",
      validationPhone: "Please enter a contact phone number.",
      validationDate: "Please select today or a future date.",
      validationTime: "Please select a preferred time.",
      validationGeneral: "Please check the required fields and try again.",
      summaryName: "Name",
      summaryPhone: "Phone",
      summaryEmail: "Email",
      summaryDate: "Preferred date",
      summaryTime: "Preferred time",
      summaryGuests: "Guests",
      summaryOccasion: "Occasion",
      summaryRequests: "Special requests",
      noRequests: "None",
      noEmail: "Not provided",
      requestPrepared: "Your request summary is ready. Continue to WhatsApp to send it to the restaurant.",
      dateInvalid: "Please choose today or a future date.",
      languageEnglish: "English",
      languageKorean: "한국어"
    },

    ko: {
      announcement: "한국의 맛과 마음에서 우러나는 따뜻함을 전합니다.",
      navHome: "홈",
      navMenu: "메뉴",
      navAbout: "소개",
      navReservation: "예약",
      navContact: "문의",

      heroEyebrow: "여러분을 위한 특별한 자리",
      heroTitle: "함께하는 식탁,<br><em>오래 남을 추억.</em>",
      heroText: "소중한 사람들과 함께 편안한 한식을 즐겨보세요. 방문을 원하시는 날짜와 시간을 알려주세요.",
      heroButton: "방문 계획하기",
      heroCaption: "좋은 음식 · 좋은 사람 · 좋은 순간",

      introEyebrow: "한국의 따뜻한 환대",
      introTitle: "함께할 때 더욱 특별해지는 식사.",
      introText: "가족과의 식사, 친구들과의 만남, 좋아하는 냉면과 함께하는 여유로운 시간까지 여러분의 방문을 기다립니다.",
      introKorean: "정성껏 준비한 음식과 따뜻한 마음으로 맞이하겠습니다.",

      bookingEyebrow: "여러분의 자리를 준비하겠습니다",
      bookingTitle: "방문 계획을<br>시작해 보세요.",
      bookingText: "원하시는 날짜와 시간, 방문 인원을 알려주세요. 작성하신 내용으로 매장에 예약 요청을 보낼 수 있습니다.",
      photoCaption: "따뜻한 환대가 기다립니다",

      locationLabel: "매장 위치",
      directions: "길 찾기 ↗",
      callLabel: "전화 문의를 원하시나요?",
      callText: "방문 관련 문의는 매장으로 전화해 주세요.",

      formEyebrow: "예약 요청",
      formTitle: "방문 정보를 알려주세요.",
      formDescription: "* 표시된 항목은 필수입니다. 보내기 전에 입력 내용을 확인해 주세요.",
      nameLabel: "성함 *",
      namePlaceholder: "성함을 입력해 주세요",
      phoneLabel: "전화번호 *",
      phonePlaceholder: "+82...",
      emailLabel: "이메일 (선택)",
      emailPlaceholder: "you@example.com",
      dateLabel: "희망 날짜 *",
      timeLabel: "희망 시간 *",
      timePlaceholder: "시간을 선택해 주세요",
      guestLabel: "방문 인원 *",
      guestDescription: "몇 분이 함께 방문하시나요?",
      people: "명",

      occasionLabel: "방문 목적 (선택)",
      occasionRegular: "일반 식사",
      occasionFamily: "가족 모임",
      occasionBirthday: "생일",
      occasionFriends: "친구 모임",
      occasionBusiness: "비즈니스 식사",
      occasionOther: "기타 특별한 날",

      requestsLabel: "추가 요청 사항 (선택)",
      requestsPlaceholder: "요청 사항이 있다면 작성해 주세요.",
      noticeText: "이 양식은 예약 요청입니다. 실제 예약은 매장의 가능 여부 확인 후 확정됩니다.",
      submitButton: "예약 요청 내용 확인",

      summaryEyebrow: "예약 요청 내용",
      summaryTitle: "방문 정보를 확인해 주세요.",
      summaryText: "요청 내용이 준비되었습니다. WhatsApp을 통해 매장으로 보내실 수 있습니다.",
      whatsappButton: "WhatsApp으로 보내기",
      editButton: "입력 내용 수정",
      summaryWarning: "희망 날짜와 시간의 예약 가능 여부를 매장에서 확인할 때까지 기다려 주세요.",

      bottomTitle: "좋은 음식과 좋은 사람들과 함께하세요.",
      bottomText: "감동 숯골냉면에서 여러분을 만나 뵙기를 기대합니다.",
      contactLink: "궁금한 점이 있으신가요? 문의하기",

      footerMessage: "한국의 맛, 마음에서 우러나는 환대.",
      footerNote: "정성으로 만들고, 따뜻함으로 대접합니다.",

      validationName: "성함을 입력해 주세요.",
      validationPhone: "연락 가능한 전화번호를 입력해 주세요.",
      validationDate: "오늘 또는 이후의 날짜를 선택해 주세요.",
      validationTime: "희망 시간을 선택해 주세요.",
      validationGeneral: "필수 입력 항목을 확인하고 다시 시도해 주세요.",
      summaryName: "성함",
      summaryPhone: "전화번호",
      summaryEmail: "이메일",
      summaryDate: "희망 날짜",
      summaryTime: "희망 시간",
      summaryGuests: "방문 인원",
      summaryOccasion: "방문 목적",
      summaryRequests: "추가 요청",
      noRequests: "없음",
      noEmail: "미입력",
      requestPrepared: "예약 요청 내용이 준비되었습니다. WhatsApp으로 매장에 보내 주세요.",
      dateInvalid: "오늘 또는 이후의 날짜를 선택해 주세요.",
      languageEnglish: "English",
      languageKorean: "한국어"
    }
  };

  let currentLanguage = "en";
  let guestCount = 2;
  let latestRequest = null;

  // Today's date in the visitor's local time.
  function localDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  reservationDate.min = localDateString();

  function updateGuestCounter() {
    guestCountDisplay.textContent = String(guestCount);
    guestCountInput.value = String(guestCount);
    decreaseGuests.disabled = guestCount <= 1;
    increaseGuests.disabled = guestCount >= 20;
  }

  decreaseGuests.addEventListener("click", () => {
    if (guestCount > 1) {
      guestCount -= 1;
      updateGuestCounter();
    }
  });

  increaseGuests.addEventListener("click", () => {
    if (guestCount < 20) {
      guestCount += 1;
      updateGuestCounter();
    }
  });

  updateGuestCounter();

  // Translate the page.
  function applyLanguage(language) {
    currentLanguage = language;
    const dictionary = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        // The page's translation strings are maintained in this file.
        element.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.placeholder = dictionary[key];
      }
    });

    languageLabel.textContent =
      language === "en" ? dictionary.languageKorean : dictionary.languageEnglish;

    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch language to Korean" : "Switch language to English"
    );

    // Refresh the summary labels if the language changes after form submission.
    if (latestRequest) {
      renderSummary(latestRequest);
    }

    try {
      localStorage.setItem("gamdong-reservation-language", language);
    } catch (error) {
      // Language switching remains available without local storage.
    }
  }

  try {
    const savedLanguage = localStorage.getItem("gamdong-reservation-language");
    if (savedLanguage === "ko" || savedLanguage === "en") {
      currentLanguage = savedLanguage;
    }
  } catch (error) {
    // English remains the default.
  }

  applyLanguage(currentLanguage);

  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "ko" : "en");
  });

  // Mobile navigation.
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

  // Display times in the language currently selected.
  function formatTime(timeValue) {
    const [hours, minutes] = timeValue.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return new Intl.DateTimeFormat(
      currentLanguage === "ko" ? "ko-KR" : "en-US",
      {
        hour: "numeric",
        minute: "2-digit"
      }
    ).format(date);
  }

  function formatDate(dateValue) {
    // Build a local date rather than parsing YYYY-MM-DD as UTC.
    const [year, month, day] = dateValue.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat(
      currentLanguage === "ko" ? "ko-KR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    ).format(date);
  }

  function addSummaryRow(label, value) {
    const row = document.createElement("div");
    row.className = "summary-row";

    const labelElement = document.createElement("span");
    labelElement.textContent = label;

    const valueElement = document.createElement("strong");
    valueElement.textContent = value;

    row.append(labelElement, valueElement);
    summaryDetails.appendChild(row);
  }

  function renderSummary(request) {
    const t = translations[currentLanguage];
    summaryDetails.replaceChildren();

    addSummaryRow(t.summaryName, request.name);
    addSummaryRow(t.summaryPhone, request.phone);
    addSummaryRow(t.summaryEmail, request.email || t.noEmail);
    addSummaryRow(t.summaryDate, formatDate(request.date));
    addSummaryRow(t.summaryTime, formatTime(request.time));
    addSummaryRow(
      t.summaryGuests,
      `${request.guests} ${t.people}`
    );
    addSummaryRow(t.summaryOccasion, request.occasion);
    addSummaryRow(
      t.summaryRequests,
      request.requests || t.noRequests
    );

    const message = [
      "Reservation request — 감동 숯골냉면 (Gamdong Sutgol Naengmyeon)",
      "",
      `Name: ${request.name}`,
      `Phone: ${request.phone}`,
      `Email: ${request.email || "Not provided"}`,
      `Preferred date: ${request.date}`,
      `Preferred time: ${request.time}`,
      `Guests: ${request.guests}`,
      `Occasion: ${request.occasion}`,
      `Special requests: ${request.requests || "None"}`,
      "",
      "This is a reservation request. Please confirm availability.",
      "Restaurant phone: " + restaurantPhone
    ].join("\n");

    sendWhatsApp.href =
      `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`;
  }

  // Prepare the reservation request.
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const t = translations[currentLanguage];

    if (!form.reportValidity()) {
      formStatus.textContent = t.validationGeneral;
      return;
    }

    const selectedDate = reservationDate.value;

    if (!selectedDate || selectedDate < localDateString()) {
      formStatus.textContent = t.validationDate;
      reservationDate.focus();
      return;
    }

    const name = $("guestName").value.trim();
    const phone = $("guestPhone").value.trim();
    const email = $("guestEmail").value.trim();
    const time = $("reservationTime").value;
    const occasion = $("occasion").selectedOptions[0].textContent.trim();
    const requests = $("specialRequests").value.trim();

    if (!name) {
      formStatus.textContent = t.validationName;
      $("guestName").focus();
      return;
    }

    if (!phone) {
      formStatus.textContent = t.validationPhone;
      $("guestPhone").focus();
      return;
    }

    if (!time) {
      formStatus.textContent = t.validationTime;
      $("reservationTime").focus();
      return;
    }

    latestRequest = {
      name,
      phone,
      email,
      date: selectedDate,
      time,
      guests: guestCount,
      occasion,
      requests
    };

    renderSummary(latestRequest);
    summary.hidden = false;
    formStatus.textContent = t.requestPrepared;

    summary.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // Allow visitors to return to the form and change their details.
  editReservation.addEventListener("click", () => {
    summary.hidden = true;
    formStatus.textContent = "";
    $("guestName").focus();
  });

  // Back-to-top control.
  function updateBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Footer year.
  $("year").textContent = new Date().getFullYear();
});
