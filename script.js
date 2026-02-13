(function () {
  // --------------------------------------------------------------
  // JS DATA — lug‘at asosida (ingilizcha va o‘zbekcha juftliklar)
  // --------------------------------------------------------------
  const glossaryPairs = [
    { en: "accurate information", uz: "aniq, ishonchli ma’lumot" },
    {
      en: "unbiased information",
      uz: "xolis (bir tomonlama bo‘lmagan) ma’lumot",
    },
    { en: "biased information", uz: "biryoqlama, tarafkash ma’lumot" },
    { en: "unrealistic claims", uz: "haqiqatga to‘g‘ri kelmaydigan da’volar" },
    { en: "poor grammar", uz: "yomon grammatik yozuv" },
    { en: "original source", uz: "asl manba" },
    { en: "reference", uz: "manba, havola" },
    { en: "domain (.gov, .edu)", uz: "domen (davlat yoki ta’lim sayti)" },
    { en: "copyright", uz: "mualliflik huquqi" },
    { en: "creative work", uz: "ijodiy ish (asar)" },
    { en: "public domain", uz: "ochiq mulk (mualliflik huquqidan chiqqan)" },
    { en: "registered copyright", uz: "ro‘yxatdan o‘tgan mualliflik huquqi" },
    { en: "Creative Commons license", uz: "Creative Commons litsenziyasi" },
    {
      en: "CC-BY license",
      uz: "muallif ko‘rsatilgan holda foydalanish litsenziyasi",
    },
    { en: "attribution", uz: "muallifni ko‘rsatish" },
    { en: "citation", uz: "havola, bibliografik ko‘rsatma" },
    { en: "file-naming conventions", uz: "fayl nomlash qoidalari" },
    { en: "special characters", uz: "maxsus belgilar" },
    { en: "date format", uz: "sana formati" },
    { en: "research paper", uz: "ilmiy ish / tadqiqot ishi" },
    { en: "available resources", uz: "mavjud resurslar" },
    { en: "identify the topic", uz: "mavzuni aniqlash" },
    { en: "bibliography", uz: "foydalanilgan adabiyotlar ro‘yxati" },
    { en: "To", uz: "asosiy qabul qiluvchi" },
    { en: "Cc (carbon copy)", uz: "nusxa uchun yuborish" },
    { en: "Bcc (blind carbon copy)", uz: "yashirin nusxa" },
    { en: "Reply All", uz: "hammaga javob berish" },
    { en: "video conferencing", uz: "videoaloqa, videomuloqot" },
    { en: "digital privacy", uz: "raqamli maxfiylik" },
    { en: "personal data", uz: "shaxsiy ma’lumotlar" },
    { en: "private browsing", uz: "maxfiy ko‘rish rejimi" },
    { en: "cookies", uz: "cookie fayllar" },
    { en: "operating system (OS)", uz: "operatsion tizim" },
    { en: "desktop computer", uz: "stol kompyuteri" },
    { en: "smartphone", uz: "smartfon" },
    { en: "troubleshoot", uz: "nosozlikni aniqlash va tuzatish" },
    { en: "malware", uz: "zararli dastur" },
    { en: "Single Sign-On (SSO)", uz: "yagona kirish tizimi" },
    { en: "credentials", uz: "autentifikatsiya ma’lumotlari" },
    { en: "duplex printing", uz: "ikki tomonga chop etish" },
    { en: "digital footprint", uz: "raqamli iz" },
    { en: "cyberbullying", uz: "internet orqali kamsitish" },
    { en: "strong password", uz: "kuchli parol" },
    { en: "open-source software", uz: "ochiq kodli dastur" },
    { en: "proprietary software", uz: "yopiq (egasi bor) dastur" },
    { en: "RAM", uz: "tezkor xotira" },
    { en: "hard disk drive (HDD)", uz: "qattiq disk" },
  ];

  // --------------------------------------------------------------
  // Test holati
  let currentDirection = "uz2en"; // default: o'zbek -> ingliz
  let questions = []; // { questionText, correctAnswer, options (array) }
  let userAnswers = []; // har bir savol uchun tanlangan index (null = tanlanmagan)
  let currentIndex = 0;
  let answerSubmitted = false; // shu savolda tekshirilganmi (variantlar bloklanadi)

  // --------------------------------------------------------------
  const questionEl = document.getElementById("questionDisplay");
  const optionsEl = document.getElementById("optionsContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const correctSpan = document.getElementById("correctCount");
  const wrongSpan = document.getElementById("wrongCount");
  const remainingSpan = document.getElementById("remainingCount");
  const progressFill = document.getElementById("progressFill");
  const scorePercentSpan = document.getElementById("scorePercent");
  const resultMsg = document.getElementById("resultMessage");
  const dirEnUz = document.getElementById("dirEnUz");
  const dirUzEn = document.getElementById("dirUzEn");
  const resetBtn = document.getElementById("resetTest");

  // ---------- test yasash (random variantlar bilan) ----------
  function buildQuestions(direction) {
    const qs = [];
    const usedIndices = new Set();
    // hamma juftliklardan foydalanamiz, lekin bir xil takrorlanmasligi uchun
    const pairs = glossaryPairs.map((p, idx) => ({ ...p, idx }));

    for (let i = 0; i < glossaryPairs.length; i++) {
      const currentPair = glossaryPairs[i];
      let questionText, correctAnswer;

      if (direction === "en2uz") {
        questionText = currentPair.en;
        correctAnswer = currentPair.uz;
      } else {
        questionText = currentPair.uz;
        correctAnswer = currentPair.en;
      }

      // 4 ta variant: 1 tasi to'g'ri, 3 tasi boshqa juftliklardan (random)
      const allPossibleAnswers =
        direction === "en2uz"
          ? glossaryPairs.map((p) => p.uz)
          : glossaryPairs.map((p) => p.en);

      const correctValue = correctAnswer;
      // to'g'ri javobni o'chirmaymiz, uni qo'shamiz
      let variantSet = new Set();
      variantSet.add(correctValue);

      // boshqa random 3 xil variant (to'g'ri javobdan farqli)
      while (variantSet.size < 4) {
        const randomIndex = Math.floor(
          Math.random() * allPossibleAnswers.length,
        );
        const candidate = allPossibleAnswers[randomIndex];
        if (candidate !== correctValue || variantSet.has(candidate)) {
          // lekin to'g'ri javobni takrorlamaslik kerak, farqli bo'lishi kerak
          if (candidate !== correctValue) variantSet.add(candidate);
        }
      }

      // array holiga keltirib, random tartiblab beramiz (to'g'ri javob pozitsiyasi har xil bo'lsin)
      let options = Array.from(variantSet);
      // agar 4 ta bo'lmasa (kamdan-kam takrorlar bo'lsa), to'ldirish
      while (options.length < 4) {
        options.push("(yana)"); // fallback, lekin ishlamaydi degan umiddamiz
      }
      options = shuffleArray(options);

      qs.push({
        questionText,
        correctAnswer,
        options,
      });
    }
    return shuffleArray(qs); // savollarni aralashtir
  }

  // array random
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ---------- initial yoki reset ----------
  function initTest() {
    questions = buildQuestions(currentDirection);
    userAnswers = Array(questions.length).fill(null);
    currentIndex = 0;
    answerSubmitted = false;
    updateStatsAndRender();
  }

  // ---------- statistika va render ----------
  function updateStatsAndRender() {
    // hisoblash
    let correct = 0,
      wrong = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] !== null) {
        const ansIndex = userAnswers[i];
        const isCorrect =
          questions[i].options[ansIndex] === questions[i].correctAnswer;
        if (isCorrect) correct++;
        else wrong++;
      }
    }
    const totalAnswered = correct + wrong;
    const remaining = questions.length - totalAnswered;
    const percent =
      totalAnswered === 0 ? 0 : Math.round((correct / totalAnswered) * 100);
    correctSpan.innerText = correct;
    wrongSpan.innerText = wrong;
    remainingSpan.innerText = remaining;
    progressFill.style.width = `${(totalAnswered / questions.length) * 100}%`;
    scorePercentSpan.innerText = totalAnswered ? percent + "%" : "0%";

    if (totalAnswered === questions.length) {
      resultMsg.innerText = `✅ Test yakunlandi! To‘g‘ri: ${correct} / ${questions.length}`;
    } else {
      resultMsg.innerText = `📌 ${questions.length - totalAnswered} ta savol qoldi`;
    }

    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    if (!questions.length) return;
    const q = questions[currentIndex];
    questionEl.innerText = q.questionText;

    const selectedIdx = userAnswers[currentIndex];
    let html = "";
    q.options.forEach((opt, idx) => {
      let classes = "option-card";
      if (selectedIdx !== null) {
        // savolga javob berilgan
        if (idx === selectedIdx) {
          const isCorrect = opt === q.correctAnswer;
          classes += isCorrect ? " correct-highlight" : " wrong-highlight";
        } else if (opt === q.correctAnswer) {
          classes += " correct-highlight"; // to'g'ri javobni yashil ko'rsat
        }
        classes += " disabled-option";
      } else {
        // tanlanmagan, oddiy
      }
      html += `<div class="${classes}" data-opt-index="${idx}">${opt}</div>`;
    });
    optionsEl.innerHTML = html;

    // agar answerSubmitted true bo'lsa (blok) yoki selectedIdx mavjud bo'lsa, event qo'shilmaydi?
    // lekin biz clicklarni elga boshqaramiz. faqat disabled klassiga qarab.
    // event delegation
    if (selectedIdx === null) {
      // faqat tanlanmagan bo'lsa, yangi clicklar uchun.
      // disabled-option bo'lmaydi.
    }

    // prev/next boshqaruvi
    prevBtn.disabled = currentIndex === 0;
    if (selectedIdx !== null) {
      // agar shu savolga javob berilgan bo'lsa, next hechqanday cheklovsiz
    }
  }

  // CLICK OPTIONS (delegation)
  optionsEl.addEventListener("click", (e) => {
    const card = e.target.closest(".option-card");
    if (!card) return;
    if (card.classList.contains("disabled-option")) return; // bloklangan

    const idx = card.dataset.optIndex;
    if (idx === undefined) return;

    // agar bu savolga oldin javob berilmagan bo'lsa
    if (userAnswers[currentIndex] !== null) return; // xavfsizlik

    // javobni saqlaymiz
    userAnswers[currentIndex] = parseInt(idx);
    updateStatsAndRender(); // render qayta chiqadi (highlight va disabled)
  });

  // navigatsiya
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderCurrentQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      // agar oxirgi bo'lsa, hech nima
    }
  });

  // tillarni almashtirish
  dirEnUz.addEventListener("click", () => {
    if (currentDirection === "en2uz") return;
    currentDirection = "en2uz";
    dirEnUz.classList.add("active");
    dirUzEn.classList.remove("active");
    initTest();
  });

  dirUzEn.addEventListener("click", () => {
    if (currentDirection === "uz2en") return;
    currentDirection = "uz2en";
    dirUzEn.classList.add("active");
    dirEnUz.classList.remove("active");
    initTest();
  });

  resetBtn.addEventListener("click", () => {
    initTest();
  });

  // ekstran: next bosilganda stat o'zgarishi mumkin, ammo updateStats hammasini qayta hisoblaydi
  // qulaylik uchun yangi funksiya
  function overallUpdate() {
    updateStatsAndRender();
  }

  // start
  initTest();

  // override (har bir renderda stat update bo'ladi)
  window.updateStatsAndRender = updateStatsAndRender;
})();
