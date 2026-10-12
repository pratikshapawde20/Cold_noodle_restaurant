
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       KOREAN AND ENGLISH TRANSLATIONS
       ================================= */

    const translations = {
        ko: {
            announcement: "정성으로 준비한 한 그릇, 감동을 담아",
            brand: "감동 숯골냉면",

            home: "홈",
            menu: "메뉴",
            reservation: "예약",
            about: "소개",
            contact: "오시는 길",
            call: "전화 문의",

            heroTitle: "한 그릇에 담은<br><em>정성과 전통</em>",

            heroDescription:
                "시원한 육수와 정갈한 재료, 그리고 변함없는 마음.<br>감동 숯골냉면에서 한국의 맛을 만나보세요.",

            exploreMenu: "메뉴 보기",
            ourStory: "우리 이야기",
            heroCaption: "좋은 음식은 마음에서 시작됩니다.",

            brandMessage: "한 그릇의 여유, 오래 기억되는 맛.",

            storyEyebrow: "OUR PHILOSOPHY",

            storyTitle:
                "맛은 정직하게,<br><em>마음은 따뜻하게.</em>",

            storyDescription:
                "좋은 한 끼는 배를 채우는 것 이상의 의미가 있습니다. 익숙한 맛에서 편안함을 느끼고, 함께한 사람과의 순간을 오래 기억하도록. 감동 숯골냉면은 정성과 한국 음식의 따뜻한 마음을 전합니다.",

            readStory: "감동의 이야기 더 보기",

            signature:
                "정성껏 준비하고, 마음으로 대접합니다.",

            menuTitle:
                "다시 생각나는<br><em>우리의 대표 메뉴</em>",

            menuDescription:
                "시원한 냉면부터 함께 즐기기 좋은 메뉴까지.<br>취향에 맞는 한 끼를 골라보세요.",

            allMenu: "전체 메뉴 보기",

            coldNoodles: "물냉면",
            coldDescription: "시원하고 깊은 육수",

            bibimNoodles: "비빔냉면",
            bibimDescription: "매콤달콤한 양념과 쫄깃한 면",

            mandu: "만두",
            manduDescription: "함께 즐기기 좋은 곁들임",

            baeksuk: "백숙",
            baeksukDescription: "정성껏 준비한 따뜻한 한 상",

            priceNote:
                "※ 메뉴와 가격은 예시이며 실제 매장 메뉴 및 가격을 확인한 뒤 게시하세요.",

            valuesTitle:
                "좋은 재료, 정직한 맛,<br><em>함께하는 즐거움.</em>",

            valuesDescription:
                "익숙해서 더 소중한 한국의 맛을 편안한 식탁 위에 전합니다.",

            valueOne: "정성을 담아",
            valueOneDescription: "한 그릇마다 마음을 담습니다.",

            valueTwo: "한국의 맛",
            valueTwoDescription: "익숙하고 편안한 맛을 전합니다.",

            valueThree: "함께하는 식탁",
            valueThreeDescription: "좋은 사람과 좋은 한 끼를 나눕니다.",

            visitTitle:
                "오늘, 감동 한 그릇<br><em>어떠세요?</em>",

            visitDescription:
                "메뉴가 궁금하시거나 방문 관련 문의가 있으시면 전화로 편하게 연락해 주세요.",

            phoneButton: "042-822-9285 전화 문의",

            visitNote:
                "방문 전 영업시간과 메뉴를 전화로 확인해 주세요.",

            phoneLabel: "전화",
            locationLabel: "위치",

            locationDescription:
                "방문 전 전화로 주소를 확인해 주세요.",

            contactDetails: "연락처 및 위치 안내",

            footerMessage:
                "정성껏 준비하고, 마음으로 대접합니다.",

            rights: "All rights reserved."
        },

        en: {
            announcement:
                "A thoughtful bowl, prepared with care",

            brand: "Gamdong Sutgol Naengmyeon",

            home: "Home",
            menu: "Menu",
            reservation: "Reservation",
            about: "About Us",
            contact: "Contact",
            call: "Call Us",

            heroTitle:
                "Tradition in<br><em>Every Bowl</em>",

            heroDescription:
                "Refreshing broth, carefully prepared ingredients, and a welcoming spirit.<br>Discover Korean flavours at Gamdong Sutgol Naengmyeon.",

            exploreMenu: "Explore Menu",
            ourStory: "Our Story",

            heroCaption:
                "Good food begins with care.",

            brandMessage:
                "A moment of comfort. A taste to remember.",

            storyEyebrow: "OUR PHILOSOPHY",

            storyTitle:
                "Honest Flavours,<br><em>A Warm Welcome</em>",

            storyDescription:
                "A good meal means more than filling your plate. It brings comfort through familiar flavours and creates moments worth remembering with the people around your table. Gamdong Sutgol Naengmyeon shares the warmth and care of Korean food traditions.",

            readStory: "Discover Our Story",

            signature:
                "Prepared with care. Served with heart.",

            menuTitle:
                "The Dishes You'll<br><em>Think About Again</em>",

            menuDescription:
                "From refreshing cold noodles to comforting sides.<br>Find something delicious to enjoy.",

            allMenu: "Explore Full Menu",

            coldNoodles: "Mul Naengmyeon",
            coldDescription: "Cold noodles in refreshing broth",

            bibimNoodles: "Bibim Naengmyeon",
            bibimDescription: "Chewy noodles with sweet-spicy sauce",

            mandu: "Korean Dumplings",
            manduDescription: "A delicious side to share",

            baeksuk: "Baeksuk",
            baeksukDescription: "A comforting traditional Korean meal",

            priceNote:
                "Note: Prices are placeholders. Confirm the actual menu and prices with the restaurant before publishing.",

            valuesTitle:
                "Good Ingredients, Honest Flavours,<br><em>Joy Around the Table</em>",

            valuesDescription:
                "We bring the familiar comfort of Korean flavours to a welcoming table.",

            valueOne: "Made With Care",
            valueOneDescription: "We put thought into every bowl.",

            valueTwo: "Korean Flavours",
            valueTwoDescription: "Comforting tastes rooted in tradition.",

            valueThree: "Together at the Table",
            valueThreeDescription: "Good food is even better shared.",

            visitTitle:
                "A Little Comfort<br><em>For Today?</em>",

            visitDescription:
                "Questions about our menu or your visit? Give us a call and we will be happy to help.",

            phoneButton: "Call 042-822-9285",

            visitNote:
                "Please call ahead to confirm opening hours and menu availability.",

            phoneLabel: "Phone",
            locationLabel: "Location",

            locationDescription:
                "Please call the restaurant to confirm its address.",

            contactDetails: "Contact and Location Details",

            footerMessage:
                "Prepared with care. Served with heart.",

            rights: "All rights reserved."
        }
    };


    /* ================================
       LANGUAGE SWITCH
       ================================ */

    const languageButton =
        document.getElementById("languageToggle");

    const koreanLabel =
        document.querySelector(".lang-ko");

    const englishLabel =
        document.querySelector(".lang-en");

    let currentLanguage = "ko";


    function changeLanguage(language) {

        if (!translations[language]) {
            return;
        }

        currentLanguage = language;

        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (
                Object.prototype.hasOwnProperty.call(
                    translations[language],
                    key
                )
            ) {
                element.innerHTML = translations[language][key];
            }

        });

        koreanLabel.classList.toggle(
            "active",
            language === "ko"
        );

        englishLabel.classList.toggle(
            "active",
            language === "en"
        );

        languageButton.setAttribute(
            "aria-label",
            language === "ko"
                ? "Switch to English"
                : "한국어로 변경"
        );

        document.title = language === "ko"
            ? "감동 숯골냉면 | Gamdong Sutgol Naengmyeon"
            : "Gamdong Sutgol Naengmyeon | Korean Restaurant";

        try {
            localStorage.setItem(
                "gamdong-home-language",
                language
            );
        } catch (error) {
            // The switch still works if storage is unavailable.
        }

    }


    languageButton.addEventListener("click", () => {

        changeLanguage(
            currentLanguage === "ko" ? "en" : "ko"
        );

    });


    /* ================================
       MOBILE NAVIGATION
       ================================ */

    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("navigation");


    function closeNavigation() {

        navigation.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        document.body.classList.remove("nav-open");

    }


    menuToggle.addEventListener("click", () => {

        const isOpening =
            menuToggle.getAttribute("aria-expanded") !== "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpening)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpening
                ? "Close navigation"
                : "Open navigation"
        );

        navigation.classList.toggle("open", isOpening);

        document.body.classList.toggle(
            "nav-open",
            isOpening
        );

    });


    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeNavigation);

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeNavigation();
        }

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 800) {
            closeNavigation();
        }

    });


    /* ================================
       SCROLL REVEAL ANIMATIONS
       ================================ */

    const revealElements = document.querySelectorAll(
        ".story-images, " +
        ".story-content, " +
        ".section-heading, " +
        ".dish-card, " +
        ".values-content, " +
        ".visit-content, " +
        ".contact-card"
    );


    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    if (
        "IntersectionObserver" in window &&
        !reduceMotion
    ) {

        revealElements.forEach(element => {
            element.classList.add("reveal");
        });

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        currentObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach(element => {
            observer.observe(element);
        });

    }


    /* ================================
       AUTOMATIC COPYRIGHT YEAR
       ================================ */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    /* ================================
       RESTORE PREVIOUS LANGUAGE
       ================================ */

    try {

        const savedLanguage = localStorage.getItem(
            "gamdong-home-language"
        );

        if (
            savedLanguage === "ko" ||
            savedLanguage === "en"
        ) {
            changeLanguage(savedLanguage);
        }

    } catch (error) {
        // Korean is the default language.
    }

});
