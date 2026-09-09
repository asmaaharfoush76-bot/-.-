/* =========================
   SUPABASE
========================= */

const SUPABASE_URL = "ضع_رابط_مشروعك_هنا";
const SUPABASE_ANON_KEY = "ضع_مفتاح_anon_هنا";

let supabaseClient = null;

if (
  SUPABASE_URL !== "ضع_رابط_مشروعك_هنا" &&
  SUPABASE_ANON_KEY !== "ضع_مفتاح_anon_هنا"
) {
  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
}


/* =========================
   ELEMENTS
========================= */

const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const subjectModal = document.getElementById("subjectModal");
const examModal = document.getElementById("examModal");


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


/* =========================
   MODALS
========================= */

function openModal(modal) {
  modal.classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}

document.getElementById("openLogin").addEventListener("click", () => {
  openModal(loginModal);
});

document.getElementById("openRegister").addEventListener("click", () => {
  closeModal("loginModal");
  openModal(registerModal);
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("show");
  }
});


/* =========================
   SUBJECT DATA
========================= */

const subjects = {

  physics: {
    title: "الفيزياء",
    category: "العلوم الفيزيائية",
    icon: "×",
    lessons: [
      ["الحركة والقوانين الأساسية", "درس تفاعلي", "25 دقيقة"],
      ["القوة والمركبات الميكانيكية", "درس تفاعلي", "30 دقيقة"],
      ["الطاقة والتحولات", "درس تفاعلي", "20 دقيقة"],
      ["الكهرباء والمجالات", "درس تفاعلي", "35 دقيقة"],
      ["الموجات والاهتزازات", "درس تفاعلي", "25 دقيقة"],
      ["مراجعة شاملة", "درس تفاعلي", "45 دقيقة"]
    ]
  },

  history: {
    title: "التاريخ الوطني",
    category: "المجال التاريخي",
    icon: "×",
    lessons: [
      ["مدخل إلى التاريخ الوطني", "درس تفاعلي", "20 دقيقة"],
      ["المراحل التاريخية الأساسية", "درس تفاعلي", "30 دقيقة"],
      ["أهم الأحداث والشخصيات", "درس تفاعلي", "25 دقيقة"],
      ["الشخصيات التاريخية", "درس تفاعلي", "20 دقيقة"],
      ["قراءة وتحليل الوثائق", "درس تفاعلي", "35 دقيقة"],
      ["مراجعة شاملة", "درس تفاعلي", "40 دقيقة"]
    ]
  },

  english: {
    title: "اللغة الإنجليزية",
    category: "Language",
    icon: "Aa",
    lessons: [
      ["Building Strong Vocabulary", "Interactive lesson", "25 دقيقة"],
      ["Essential Grammar", "Interactive lesson", "30 دقيقة"],
      ["Reading Skills", "Interactive lesson", "20 دقيقة"],
      ["Writing Skills", "Interactive lesson", "30 دقيقة"],
      ["Communication", "Interactive lesson", "25 دقيقة"],
      ["Revision", "Interactive lesson", "40 دقيقة"]
    ]
  },

  arabic: {
    title: "اللغة العربية",
    category: "اللغة والأدب",
    icon: "ع",
    lessons: [
      ["أساسيات النحو", "درس تفاعلي", "25 دقيقة"],
      ["الجملة وأنواعها", "درس تفاعلي", "30 دقيقة"],
      ["البلاغة والصور البيانية", "درس تفاعلي", "25 دقيقة"],
      ["الأدب والنصوص", "درس تفاعلي", "35 دقيقة"],
      ["فهم وتحليل النص", "درس تفاعلي", "30 دقيقة"],
      ["مراجعة شاملة", "درس تفاعلي", "45 دقيقة"]
    ]
  }

};


/* =========================
   OPEN SUBJECT
========================= */

function openSubject(type) {

  const subject = subjects[type];

  document.getElementById("subjectModalContent").innerHTML = `
    <span class="category">${subject.category}</span>
    <h2>${subject.icon} ${subject.title}</h2>
  `;

  const list = document.getElementById("lessonList");

  list.innerHTML = subject.lessons.map((lesson, index) => `
    <div class="modal-lesson">
      <span class="lesson-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

      <div class="modal-lesson-info">
        <strong>${lesson[0]}</strong>
        <span>${lesson[1]} • ${lesson[2]}</span>
      </div>

      <button onclick="startLesson('${type}', ${index})">
        ابدأ
      </button>
    </div>
  `).join("");

  openModal(subjectModal);
}


/* =========================
   LESSON
========================= */

function startLesson(type, index) {

  localStorage.setItem(
    `photon_lesson_${type}_${index}`,
    "started"
  );

  alert(
    `بدأ درس: ${subjects[type].lessons[index][0]}`
  );

  updateProgress();
}


/* =========================
   EXAMS
========================= */

const examData = {

  physics: {
    subject: "الفيزياء",
    title: "اختبار الفيزياء",
    description: "أسئلة متنوعة لقياس فهمك للمفاهيم الأساسية"
  },

  history: {
    subject: "التاريخ الوطني",
    title: "اختبار التاريخ",
    description: "اختبر معرفتك بالربط بين الأحداث والتواريخ"
  },

  english: {
    subject: "اللغة الإنجليزية",
    title: "English Practice",
    description: "Vocabulary and grammar practice"
  },

  arabic: {
    subject: "اللغة العربية",
    title: "اختبار العربية",
    description: "تدريبات متنوعة في النحو والقواعد"
  }

};

function openExam(type) {

  const exam = examData[type];

  document.getElementById("examSubject").textContent =
    exam.subject;

  document.getElementById("examTitle").textContent =
    exam.title;

  document.getElementById("examDescription").textContent =
    exam.description;

  if (type === "physics") {
    document.getElementById("questionText").textContent =
      "أي مما يلي يمثل كمية فيزيائية متجهة؟";
  }

  if (type === "history") {
    document.getElementById("questionText").textContent =
      "ما المقصود بالوثيقة التاريخية؟";
  }

  if (type === "english") {
    document.getElementById("questionText").textContent =
      "Choose the correct answer.";
  }

  if (type === "arabic") {
    document.getElementById("questionText").textContent =
      "اختر الإجابة الصحيحة.";
  }

  openModal(examModal);
}

function finishExam() {

  let exams = Number(
    localStorage.getItem("photon_exams") || 0
  );

  exams++;

  localStorage.setItem(
    "photon_exams",
    exams
  );

  alert("تم تسجيل الاختبار بنجاح.");

  updateProgress();

  closeModal("examModal");
}


/* =========================
   PROGRESS
========================= */

function updateProgress() {

  let started = 0;

  Object.keys(subjects).forEach(subject => {

    subjects[subject].lessons.forEach((_, index) => {

      if (
        localStorage.getItem(
          `photon_lesson_${subject}_${index}`
        )
      ) {
        started++;
      }

    });

  });

  const totalLessons = 24;

  const progress = Math.min(
    100,
    Math.round((started / totalLessons) * 100)
  );

  document.getElementById("heroProgress").textContent =
    `${progress}%`;

  document.getElementById("journeyProgress").textContent =
    `${progress}%`;

  document.getElementById("dashProgress").textContent =
    `${progress}%`;

  document.getElementById("completedLessons").textContent =
    started;

  document.getElementById("examsDone").textContent =
    localStorage.getItem("photon_exams") || 0;

  document.getElementById("points").textContent =
    started * 20;

  document.getElementById("badgesCount").textContent =
    started >= 5 ? 2 : 1;
}


/* =========================
   LIBRARY FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const libraryCards = document.querySelectorAll(".library-card");
const librarySearch = document.getElementById("librarySearch");

let currentFilter = "all";

filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    currentFilter =
      button.dataset.filter;

    filterLibrary();

  });

});

librarySearch.addEventListener("input", filterLibrary);

function filterLibrary() {

  const search =
    librarySearch.value.toLowerCase().trim();

  libraryCards.forEach(card => {

    const category =
      card.dataset.category;

    const text =
      card.textContent.toLowerCase();

    const categoryMatch =
      currentFilter === "all" ||
      category === currentFilter;

    const searchMatch =
      text.includes(search);

    card.style.display =
      categoryMatch && searchMatch
        ? ""
        : "none";

  });
}


/* =========================
   REGISTER
========================= */

document
  .getElementById("registerForm")
  .addEventListener("submit", async e => {

    e.preventDefault();

    const name =
      document.getElementById("registerName").value.trim();

    const email =
      document.getElementById("registerEmail").value.trim();

    const password =
      document.getElementById("registerPassword").value;

    const message =
      document.getElementById("registerMessage");

    if (!supabaseClient) {
      message.textContent =
        "أضيفي بيانات Supabase في script.js أولاً.";
      return;
    }

    const { data, error } =
      await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name
          }
        }
      });

    if (error) {
      message.textContent =
        error.message;
      return;
    }

    message.textContent =
      "تم إنشاء الحساب بنجاح. يمكنك تسجيل الدخول.";

    document.getElementById("registerForm").reset();
  });


/* =========================
   LOGIN
========================= */

document
  .getElementById("loginForm")
  .addEventListener("submit", async e => {

    e.preventDefault();

    const email =
      document.getElementById("loginEmail").value.trim();

    const name =
      document.getElementById("loginName").value.trim();

    const password =
      document.getElementById("loginPassword").value;

    const message =
      document.getElementById("loginMessage");

    if (!supabaseClient) {
      message.textContent =
        "أضيفي بيانات Supabase في script.js أولاً.";
      return;
    }

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {
      message.textContent =
        "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      return;
    }

    localStorage.setItem(
      "photon_name",
      name
    );

    message.textContent =
      "تم تسجيل الدخول بنجاح.";

    setTimeout(() => {
      closeModal("loginModal");
      updateProgress();
    }, 700);
  });


/* =========================
   SUPABASE SESSION
========================= */

async function loadUser() {

  if (!supabaseClient) return;

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  if (session) {

    const user =
      session.user;

    const name =
      user.user_metadata?.full_name ||
      "يا بطل";

    localStorage.setItem(
      "photon_name",
      name
    );
  }
}


/* =========================
   INIT
========================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    updateProgress();

    await loadUser();

  }
);
