(function () {
  const RSVP_URLS = {
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSfc-Sh4Oqxy5Yugeu2T_k8vfMSzvq0F98wTmOZPR8YqpuMIbg/viewform?embedded=true",
    en: "https://docs.google.com/forms/d/e/1FAIpQLSd2YC5soIa9ZJ9hGlUK8CUSM3LqEkWHAySZxAoH11PNNJe1mw/viewform?embedded=true",
    sv: "https://docs.google.com/forms/d/e/1FAIpQLSc6ixATLZsxnq9ND1J0cE6bITvsJzJH9swNkSJGTgaEsIIBLA/viewform?embedded=true",
    sr: "https://docs.google.com/forms/d/e/1FAIpQLSeb7-OfXoameaGOZ1VA4oocOafYiOIqE2910tZ07Fkwuru-Pg/viewform?embedded=true"
  };
  const RSVP_LINKS = {
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSfc-Sh4Oqxy5Yugeu2T_k8vfMSzvq0F98wTmOZPR8YqpuMIbg/viewform?usp=sharing",
    en: "https://docs.google.com/forms/d/e/1FAIpQLSd2YC5soIa9ZJ9hGlUK8CUSM3LqEkWHAySZxAoH11PNNJe1mw/viewform?usp=sharing",
    sv: "https://docs.google.com/forms/d/e/1FAIpQLSc6ixATLZsxnq9ND1J0cE6bITvsJzJH9swNkSJGTgaEsIIBLA/viewform?usp=sharing",
    sr: "https://docs.google.com/forms/d/e/1FAIpQLSeb7-OfXoameaGOZ1VA4oocOafYiOIqE2910tZ07Fkwuru-Pg/viewform?usp=header"
  };

  function toArabicDigits(str) {
    return str.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
  }

  const t = {
    en: {
      nav_welcome: "Welcome",
      nav_invitation: "Invitation",
      nav_ceremony: "Ceremony",
      nav_reception: "Party",
      nav_rsvp: "RSVP",

      wedding_verse: "“Therefore what God has joined together, let no one separate.” (Matthew 19:6)",
      days_to_go: "days to go",

      ceremony_title: "Wedding Ceremony",
      ceremony_details_title: "Ceremony Details",
      church_name: "Equmeniakyrkan Huskvarna",
      church_address: "Drottninggatan 16, 561 30 Huskvarna, Sweden",
      church_time: "Ceremony time: 17:00",
      get_directions: "Get Directions",

      reception_title: "Wedding Party",
      reception_details_title: "Party Details",
      venue_name: "Massaya Palace",
      venue_address: "Nygatan 16, 553 18 Jönköping, Sweden",
      venue_time: "Time: 19:00",

      rsvp_intro: "Confirm your attendance",
      rsvp_lead: "Your presence means the world to us — please confirm your attendance below.",
      rsvp_deadline: "Please reply by mid-October.",
      see_ending: "I’ve submitted — show me the surprise",

      ending_text: "Wish us a lifetime of happiness.",
      
      invitation_card_title: "Formal Invitation",
      inv_line_parents:
        "Igor Visacki and Rozali Korkis, together with their families,",
      inv_line_joy:
        "cordially invite you to share in the celebration of their wedding.",
      inv_line_date_place:
        "Saturday, 08 November 2025 — Jönköping, Sweden",
      inv_line_ceremony:
        "17:00 — Ceremony at Equmeniakyrkan, Huskvarna",
      inv_line_reception:
        "19:00 — Reception at Massaya Palace, Jönköping",
      inv_line_reply_by:
        "Please reply by mid-October.",
      inv_line_contact:
        "If you prefer not to use the form, contact us: Rozali: 076-911 39 50 · Igor: 070-732 07 94"
    },
    ar: {
      nav_welcome: "الرئيسية",
      nav_invitation: "الدعوة",
      nav_ceremony: "الزفاف",
      nav_reception: "الاحتفال",
      nav_rsvp: "تأكيد الحضور",

      wedding_verse: "«فَمَا جَمَعَهُ ٱللّٰهُ لَا يُفَرِّقُهُ إِنْسَانٌ.» (متى 19:6)",
      days_to_go: "يومًا متبقيًا",

      ceremony_title: "مراسم الإكليل",
      ceremony_details_title: "تفاصيل الإكليل",
      church_name: "Equmeniakyrkan Huskvarna",
      church_address: "Drottninggatan 16، 561 30 Huskvarna، Sweden",
      church_time: "موعد الإكليل: 17:00",
      get_directions: "الانتقال بواسطة الخرائط",

      reception_title: "حفل الاستقبال",
      reception_details_title: "تفاصيل الحفل",
      venue_name: "Massaya Palace",
      venue_address: "Nygatan 16، 553 18 Jönköping، Sweden",
      venue_time: "الوقت: 19:00",

      rsvp_intro: "تأكيد الحضور",
      rsvp_lead: "وجودكم يكمّل فرحتنا — فضلاً أكّدوا حضوركم عبر النموذج التالي.",
      rsvp_deadline: "يرجى الإجابة قبل منتصف شهر أكتوبر.",
      rsvp_button: "تأكيد الحضور",
      see_ending: "أكّدت حضوري — أروني المفاجأة",

      ending_text: "تمنّوا لنا أن نعيش بسعادة بقية حياتنا.",

      invitation_card_title: "بطاقة الدعوة",
      inv_line_parents:
        "يتشرّف السيد إيليا ڤيساتسكي وعائلته، والسيد حنا كوركيس وعائلته،",
      inv_line_joy:
        "بدعوتكم لمشاركة الفرح بزفاف وَلَدَيْهِمَا",
      inv_line_date_place:
        "السبت، 08 نوفمبر 2025 — يونشوبينغ، السويد",
      inv_line_ceremony:
        "الساعة 17:00 — مراسم الإكليل في كنيسة Equmeniakyrkan، هوسكڤارنا",
      inv_line_reception:
        "الساعة 19:00 — حفل الاستقبال في Massaya Palace، يونشوبينغ",
      inv_line_reply_by:
        "يرجى الإجابة قبل منتصف شهر أكتوبر.",
      inv_line_contact:
      "إن لم ترغب بالإجابة عبر النموذج، يمكنك الاتصال بنا: روزالي ٠٧٦٩١١٣٩٥٠ · إيغور ٠٧٠٧٣٢٠٧٩٤"
      
    },
    sv: {
      nav_welcome: "Hem",
      nav_invitation: "Inbjudan",
      nav_ceremony: "Vigsel",
      nav_reception: "Fest",
      nav_rsvp: "OSA",

      wedding_verse: "”Vad Gud har fogat samman får människan inte skilja åt.” (Matteus 19:6)",
      days_to_go: "dagar kvar",

      ceremony_title: "Vigselceremoni",
      ceremony_details_title: "Vigseldetaljer",
      church_name: "Equmeniakyrkan Huskvarna",
      church_address: "Drottninggatan 16, 561 30 Huskvarna, Sverige",
      church_time: "Tid för vigsel: 17:00",
      get_directions: "Vägbeskrivning",

      reception_title: "Bröllopsfest",
      reception_details_title: "Festsdetaljer",
      venue_name: "Massaya Palace",
      venue_address: "Nygatan 16, 553 18 Jönköping, Sverige",
      venue_time: "Tid: 19:00",

      rsvp_intro: "Bekräfta ditt deltagande",
      rsvp_lead: "Er närvaro betyder allt för oss — vänligen bekräfta ert deltagande nedan.",
      rsvp_deadline: "Svara gärna senast i mitten av oktober.",
      rsvp_button: "Bekräfta närvaro",
      see_ending: "Jag är klar — visa överraskningen",

      ending_text: "Önska oss ett liv i lycka.",

      invitation_card_title: "Formell inbjudan",
      inv_line_parents:
        "Igor Visacki och Rozali Korkis med sina familjer",
      inv_line_joy:
        "har glädjen att bjuda in er att dela deras bröllopsdag.",
      inv_line_date_place:
        "Lördag 8 november 2025 — Jönköping, Sverige",
      inv_line_ceremony:
        "17:00 — Vigsel i Equmeniakyrkan, Huskvarna",
      inv_line_reception:
        "19:00 — Fest på Massaya Palace, Jönköping",
      inv_line_reply_by:
        "Svara gärna senast i mitten av oktober.",
      inv_line_contact:
        "Om du inte vill använda formuläret, kontakta oss: Rozali: 076-911 39 50 · Igor: 070-732 07 94"      
    },
    sr: {
      nav_welcome: "Početna",
      nav_invitation: "Pozivnica",
      nav_ceremony: "Ceremonija",
      nav_reception: "Proslava",
      nav_rsvp: "Potvrda",

      wedding_verse: "„Što Bog sastavi, čovek da ne rastavlja.” (Matej 19:6)",
      days_to_go: "dana do venčanja",

      ceremony_title: "Ceremonija venčanja",
      ceremony_details_title: "Detalji ceremonije",
      church_name: "Equmeniakyrkan Huskvarna",
      church_address: "Drottninggatan 16, 561 30 Huskvarna, Švedska",
      church_time: "Vreme ceremonije: 17:00",
      get_directions: "Uputstva",

      reception_title: "Proslava",
      reception_details_title: "Detalji proslave",
      venue_name:        "Massaya Palace — Jönköping",
      venue_address:     "Adresa: Jönköping, Švedska",
      venue_time:        "Vreme: 19:00",

      rsvp_intro: "Potvrda dolaska",
      rsvp_lead: "Molimo kliknite na link ispod da potvrdite dolazak:",
      rsvp_deadline: "Molimo odgovorite do sredine oktobra.",
      rsvp_button: "Potvrdite dolazak",
      see_ending: "Poslao/la sam — pokaži iznenađenje",

      ending_text: "Poželite nam život pun sreće.",

      invitation_card_title: "Svečana pozivnica",
      inv_line_parents:
        "Igor Višački i Rozali Korkis, sa svojim porodicama,",
      inv_line_joy:
        "srdačno vas pozivaju da podelite radost njihovog venčanja.",
      inv_line_date_place:
        "Subota, 8. novembar 2025 — Jönköping, Švedska",
      inv_line_ceremony:
        "17:00 — Ceremonija u Equmeniakyrkan, Huskvarna",
      inv_line_reception:
        "19:00 — Proslava u Massaya Palace, Jönköping",
      inv_line_reply_by:
        "Molimo odgovorite najkasnije do sredine oktobra.",
      inv_line_contact:
        "Ako ne želite da koristite formular, kontaktirajte nas: Rozali: 076-911 39 50 · Igor: 070-732 07 94"
    }

  };

  function applyTranslations(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[lang] && t[lang][key]) el.textContent = t[lang][key];
    });

    const frame = document.getElementById("rsvp-frame");
    if (frame && RSVP_URLS[lang]) frame.src = RSVP_URLS[lang];

    const link = document.getElementById("rsvp-link");
    if (link && RSVP_LINKS[lang]) link.href = RSVP_LINKS[lang];

    localStorage.setItem("lang", lang);
    
    localStorage.setItem("langChosen", "true");

    const overlay = document.getElementById("language-overlay");
    if (overlay) overlay.style.display = "none";
  }
  window.applyTranslations = applyTranslations;

  function updateCountdown() {
    const target = new Date(2025, 10, 8);
    const el = document.getElementById("countdown-days");
    if (!el) return;
    const diff = target - new Date();
    el.textContent = diff <= 0 ? "0" : Math.ceil(diff / 86400000);
  }

  function setupLanguageOverlay() {
    const overlay = document.getElementById("language-overlay");
    if (!overlay) return;

    const onHome = document.body.dataset.page === "home";
    const firstVisit = !localStorage.getItem("langChosen");
    overlay.style.display = onHome ? "flex" : (firstVisit ? "flex" : "none");

    overlay.querySelectorAll("button[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
    });
  }

  function triggerEnding() {
    localStorage.setItem("endingShown", "true");
    setTimeout(() => { window.location.href = "ending.html"; }, 800);
  }
  window.triggerEnding = triggerEnding;

  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || "en";
    applyTranslations(saved);
    setupLanguageOverlay();
    updateCountdown();
    setInterval(updateCountdown, 12 * 60 * 60 * 1000);
  });
})();