(function () {
  // === RSVP forms  ===
  const RSVP_URLS = {
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSfc-Sh4Oqxy5Yugeu2T_k8vfMSzvq0F98wTmOZPR8YqpuMIbg/viewform?embedded=true",
    en: "https://docs.google.com/forms/d/e/1FAIpQLSd2YC5soIa9ZJ9hGlUK8CUSM3LqEkWHAySZxAoH11PNNJe1mw/viewform?embedded=true",
    sv: "https://docs.google.com/forms/d/e/1FAIpQLSc6ixATLZsxnq9ND1J0cE6bITvsJzJH9swNkSJGTgaEsIIBLA/viewform?embedded=true"
  };
  const RSVP_LINKS = {
    ar: "https://docs.google.com/forms/d/e/1FAIpQLSfc-Sh4Oqxy5Yugeu2T_k8vfMSzvq0F98wTmOZPR8YqpuMIbg/viewform?usp=sharing",
    en: "https://docs.google.com/forms/d/e/1FAIpQLSd2YC5soIa9ZJ9hGlUK8CUSM3LqEkWHAySZxAoH11PNNJe1mw/viewform?usp=sharing",
    sv: "https://docs.google.com/forms/d/e/1FAIpQLSc6ixATLZsxnq9ND1J0cE6bITvsJzJH9swNkSJGTgaEsIIBLA/viewform?usp=sharing"
  };

  // === Translations ===
  const t = {
    en: {
      nav_welcome: "Welcome",
      nav_invitation: "Invitation",
      nav_ceremony: "Ceremony",
      nav_reception: "Party",
      nav_rsvp: "RSVP",

      wedding_verse: "“Therefore what God has joined together, let no one separate.” (Matthew 19:6)",
      formal_invitation: "Together with their families, Rozali Korkis and Igor Visacki cordially invite you to celebrate their wedding. Date: 08 November 2025 — Ceremony 17:00, Reception 19:00.",
      days_to_go: "days to go",

      ceremony_title: "Wedding Ceremony",
      ceremony_details_title: "Ceremony Details",
      church_name: "Equmeniakyrkan Huskvarna",
      church_address: "Drottninggatan 16, 561 30 Huskvarna, Sweden",
      church_time: "Ceremony time: 17:00",
      get_directions: "Get Directions",

      reception_title: "Wedding Palce",
      reception_details_title: "Reception Details",
      venue_name: "Massaya Palace",
      venue_address: "Nygatan 16, 553 18 Jönköping, Sweden",
      venue_time: "Time: 19:00",

      rsvp_intro: "Confirm your attendance",
      rsvp_lead: "Your presence means the world to us — please confirm your attendance below.",
      rsvp_button: "Confirm Attendance",
      see_ending: "I’ve submitted — show me the surprise",

      ending_text: "Wish us a lifetime of happiness."
    },
    ar: {
      nav_welcome: "الرئيسية",
      nav_invitation: "الدعوة",
      nav_ceremony: "الزفاف",
      nav_reception: "الاحتفال",
      nav_rsvp: "تأكيد الحضور",

      wedding_verse: "«فَمَا جَمَعَهُ ٱللّٰهُ لَا يُفَرِّقُهُ إِنْسَانٌ.» (متى 19:6)",
      formal_invitation: "يسرّ عائلتا كوركيس وڤيساتسكي دعوتكم للاحتفال بزفاف روزالي كوركيس وإيغور ڤيساتسكي. التاريخ: 08 نوفمبر 2025 — الإكليل 17:00، الحفل 19:00.",
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
      rsvp_button: "تأكيد الحضور",
      see_ending: "أكّدت حضوري — أروني المفاجأة",

      ending_text: "تمنّوا لنا أن نعيش بسعادة بقية حياتنا."
    },
    sv: {
      nav_welcome: "Hem",
      nav_invitation: "Inbjudan",
      nav_ceremony: "Vigsel",
      nav_reception: "Fest",
      nav_rsvp: "OSA",

      wedding_verse: "”Vad Gud har fogat samman får människan inte skilja åt.” (Matteus 19:6)",
      formal_invitation: "Tillsammans med sina familjer bjuder Rozali Korkis och Igor Visacki in er att fira deras bröllop. Datum: 08 november 2025 — Vigsel 17:00, Fest 19:00.",
      days_to_go: "dagar kvar",

      ceremony_title: "Vigselceremoni",
      ceremony_details_title: "Vigseldetaljer",
      church_name: "Equmeniakyrkan Huskvarna",
      church_address: "Drottninggatan 16, 561 30 Huskvarna, Sverige",
      church_time: "Tid för vigsel: 17:00",
      get_directions: "Vägbeskrivning",

      reception_title: "Bröllopslokal",
      reception_details_title: "Mottagningsdetaljer",
      venue_name: "Massaya Palace",
      venue_address: "Nygatan 16, 553 18 Jönköping, Sverige",
      venue_time: "Tid: 19:00",

      rsvp_intro: "Bekräfta ditt deltagande",
      rsvp_lead: "Er närvaro betyder allt för oss — vänligen bekräfta ert deltagande nedan.",
      rsvp_button: "Bekräfta närvaro",
      see_ending: "Jag är klar — visa överraskningen",

      ending_text: "Önska oss ett liv i lycka."
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
    // keep langChosen for potential future use, but overlay behavior is handled below
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

    // Always show overlay on homepage; otherwise only on first visit
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