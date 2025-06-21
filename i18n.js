// i18n.js
(function(){
    const translations = {
      en: {
        page_title:        "Wedding Invitation",
        invitation_heading:"Wedding Invitation",
        home:              "Home",
        about_bride:       "About Rozali",
        about_groom:       "About Igor",
        venue:             "Venue",
        menu:              "Menu",
        rsvp:              "RSVP",
        invitation_text:   "With love and joy, we invite you to share in our wedding celebration.",
        footer_date:       " 2025 | :00 PM",
        title_bride:       "About Rozali",
        bride_story:       "My name is Rozali Korkis.",
        title_groom:       "About Igor",
        groom_story:       "My name is Igor Visacki.",
        venue_name:        " ",
        venue_address:     "Address: 123 ",
        venue_date:        "Date: 2025",
        venue_time:        "Time: :00 PM",
        menu_appetizers:   "Appetizers",
        appetizer_1:       "Tabbouleh",
        appetizer_2:       "Hummus with tahini",
        appetizer_3:       "Fattoush",
        menu_main_courses: "Main Courses",
        main_1:            "Lamb kebab",
        main_2:            "Grilled chicken ",
        main_3:            "Grilled salmon",
        menu_desserts:     "Desserts",
        dessert_1:         "Cake",
        dessert_2:         "Assorted baklava",
        dessert_3:         "Knafeh ",
        rsvp_heading:      "RSVP",
        rsvp_text:         "Please click the link below to confirm your attendance:",
        rsvp_button:       "Confirm Attendance"
      },
      ar: {
        page_title:        "دعوة حفل الزفاف",
        invitation_heading:"دعوة حفل الزفاف",
        home:              "الرئيسية",
        about_bride:       "عن Rozali",
        about_groom:       "عن Igor",
        venue:             "المكان",
        menu:              "المنيو",
        rsvp:              "تأكيد الحضور",
        invitation_text:   "بكل محبة وفرح، ندعوكم لمشاركتنا فرحة زفافنا.",
        footer_date:       "٢٠٢٥ | الساعة ",
        title_bride:       "عن Rozali",
        bride_story:       "اسمي Rozali Korkis.",
        title_groom:       "عن Igor",
        groom_story:       "اسمي Igor Visacki. ",
        venue_name:        " ",
        venue_address:     "العنوان:  123",
        venue_date:        "التاريخ:   ٢٠٢٥",
        venue_time:        "الوقت:  مساءً",
        menu_appetizers:   "المقبلات",
        appetizer_1:       "تبولة",
        appetizer_2:       "حمص بالطحينة",
        appetizer_3:       "فتوش",
        menu_main_courses: "الأطباق الرئيسية",
        main_1:            "كباب ",
        main_2:            "دجاج مشوي",
        main_3:            "سمك السلمون المشوي",
        menu_desserts:     "الحلويات",
        dessert_1:         "كيكة ",
        dessert_2:         "بقلاوة مشكلة",
        dessert_3:         "كنافة",
        rsvp_heading:      "تأكيد الحضور",
        rsvp_text:         "لطفاً اضغطوا على الرابط أدناه لتأكيد حضوركم:",
        rsvp_button:       "تأكيد الحضور"
      },
      sv: {
        page_title:        "Vigselinbjudan",
        invitation_heading:"Vigselinbjudan",
        home:              "Hem",
        about_bride:       "Om Rozali",
        about_groom:       "Om Igor",
        venue:             "Plats",
        menu:              "Meny",
        rsvp:              "OSA",
        invitation_text:   "Med kärlek och glädje inbjuder vi dig att dela vår bröllopsglädje.",
        footer_date:       "10 augusti 2025 | 19:00",
        title_bride:       "Om Rozali",
        bride_story:       "Jag heter Rozali Korkis. ",
        title_groom:       "Om Igor",
        groom_story:       "Jag heter Igor Visacki.",
        venue_name:        " ",
        venue_address:     "Adress: 123",
        venue_date:        "Datum:  2025",
        venue_time:        "Tid: :00",
        menu_appetizers:   "Förrätter",
        appetizer_1:       "Tabbouleh",
        appetizer_2:       "Hummus med tahini",
        appetizer_3:       "Fattoush",
        menu_main_courses: "Huvudrätter",
        main_1:            "Lammkebab",
        main_2:            "Grillad kyckling",
        main_3:            "Grillad lax",
        menu_desserts:     "Desserter",
        dessert_1:         "Tårta",
        dessert_2:         "Baklava",
        dessert_3:         "Knafeh",
        rsvp_heading:      "OSA",
        rsvp_text:         "Klicka på länken nedan för att bekräfta ditt deltagande:",
        rsvp_button:       "Bekräfta närvaro"
      }
    };
  
    function setLanguage(lang) {
      document.documentElement.lang = lang;
      document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr';
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || el.textContent;
      });
      document.getElementById('language-select').value = lang;
      localStorage.setItem('lang', lang);
    }
  
    document.addEventListener('DOMContentLoaded', () => {
      const selector = document.getElementById('language-select');
      selector.addEventListener('change', e => setLanguage(e.target.value));
      setLanguage(localStorage.getItem('lang') || 'en');
    });
  })();
  