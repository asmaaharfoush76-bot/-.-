/* =====================================================
   PHOTON
   Supabase Configuration
===================================================== */

const SUPABASE_URL = "ضع_رابط_مشروع_Supabase_هنا";
const SUPABASE_ANON_KEY = "ضع_Anon_Key_هنا";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);


/* =====================================================
   DATA
===================================================== */

const subjects = [
  {
    id: "physics",
    number: "01",
    icon: "×",
    category: "العلوم الفيزيائية",
    title: "الفيزياء",
    description:
      "أفهم القوانين والنظريات وشارك في تطبيقاتها بناءً على فهم حقيقي.",
    lessons: 12,
    exams: 9,
    color: ""
  },

  {
    id: "history",
    number: "02",
    icon: "×",
    category: "المجال التاريخي",
    title: "التاريخ الوطني",
    description:
      "استعد لأهم الأحداث والمحطات والشخصيات بطريقة مبسطة.",
    lessons: 10,
    exams: 8,
    color: "purple"
  },

  {
    id: "english",
    number: "03",
    icon: "Aa",
    category: "Language",
    title: "اللغة الإنجليزية",
    description:
      "طوّر مهاراتك في اللغة بطريقة منظمة وممتعة.",
    lessons: 14,
    exams: 7,
    color: "green"
  },

  {
    id: "arabic",
    number: "04",
    icon: "ع",
    category: "اللغة والأدب",
    title: "اللغة العربية",
    description:
      "فهم النصوص والقواعد والتدريب على التطبيق.",
    lessons: 15,
    exams: 8,
    color: "orange"
  }
];


const lessons = {

  physics: [
    ["الحركة والقوانين الأساسية", "25 دقيقة"],
    ["القوة والمركبات الميكانيكية", "30 دقيقة"],
    ["الطاقة والتحولات", "20 دقيقة"],
    ["الكهرباء والمجالات", "35 دقيقة"],
    ["الموجات والاهتزازات", "25 دقيقة"],
    ["مراجعة شاملة", "45 دقيقة"]
  ],

  history: [
    ["مدخل إلى التاريخ الوطني", "20 دقيقة"],
    ["المراحل التاريخية الأساسية", "30 دقيقة"],
    ["أهم الأحداث والشخصيات", "25 دقيقة"],
    ["الشخصيات التاريخية", "20 دقيقة"],
    ["قراءة وتحليل الوثائق", "35 دقيقة"],
    ["مراجعة شاملة", "40 دقيقة"]
  ],

  english: [
    ["Building Strong Vocabulary", "25 دقيقة"],
    ["Essential Grammar", "30 دقيقة"],
    ["Reading Skills", "20 دقيقة"],
    ["Writing Skills", "30 دقيقة"],
    ["Communication", "25 دقيقة"],
    ["Revision", "40 دقيقة"]
  ],

  arabic: [
    ["أساسيات النحو", "25 دقيقة"],
    ["الجملة وأنواعها", "30 دقيقة"],
    ["البلاغة والصور البيانية", "25 دقيقة"],
    ["الأدب والنصوص", "35 دقيقة"],
    ["فهم وتحليل النص", "30 دقيقة"],
    ["مراجعة شاملة", "45 دقيقة"]
  ]

};


const libraryItems = [

  {
    subject: "arabic",
    title: "دليل اللغة العربية",
    description: "مراجعة شاملة القواعد والمفردات"
  },

  {
    subject: "english",
    title: "English Skills",
    description: "Vocabulary, grammar and writing practice"
  },

  {
    subject: "arabic",
    title: "التدريب على النصوص",
    description: "نماذج تدريبية واختبارات لتدريب النص"
  },

  {
    subject: "physics",
    title: "أساسيات الفيزياء",
    description: "شرح أسبوعي للمفاهيم الأساسية"
  },

  {
    subject: "physics",
    title: "ملخص القوانين الفيزيائية",
    description: "مراجعة سريعة لأهم القوانين والشروحات"
  },

  {
    subject: "history",
    title: "التاريخ الوطني",
    description: "ملخص شامل لأهم الأحداث والشخصيات"
  }

];


const exams = [

  {
    subject: "الفيزياء",
    title: "اختبار الفيزياء",
    description: "أسئلة متنوعة لقياس فهمك للمفاهيم الأساسية",
    questions: 10
  },

  {
    subject: "التاريخ الوطني",
    title: "اختبار التاريخ",
    description: "اختبر معرفتك بالربط بين الأحداث والتواريخ",
    questions: 10
  },

  {
    subject: "اللغة الإنجليزية",
    title: "English Quiz",
    description: "Vocabulary and grammar practice",
    questions: 10
  },

  {
    subject: "اللغة العربية",
    title: "اختبار اللغة العربية",
    description: "تدريبات متنوعة في النحو والقواعد",
    questions: 10
  }

];


/* =====================================================
   RENDER SUBJECTS
===================================================== */

function renderSubjects() {

  const container = document.getElementById("subjectsGrid");

  container.innerHTML = subjects.map(subject => `

    <div class="subject-card ${subject.color}">

      <div class="subject-top">

        <div class="subject-number">
          ${subject.number}
        </div>

        <div class="subject-icon">
          ${subject.icon}
        </div>

      </div>

      <span class="subject-category">
        ${subject.category}
      </span>

      <h3>${subject.title}</h3>

      <p>${subject.description}</p>

      <div class="subject-stats">
        <span>${subject.lessons} درسًا</span>
        <span>${subject.exams} اختبارات</span>
      </div>

      <button
        class="subject-open"
        onclick="openSubject('${subject.id}')"
      >
        استكشف المادة ←
      </button>

    </div>

  `).join("");

}


/* =====================================================
   SUBJECT MODAL
===================================================== */

function openSubject(id) {

  const subject = subjects.find(s => s.id === id);

  if (!subject) return;

  const subjectLessons = lessons[id] || [];

  const modal = document.getElementById("lessonModal");

  const content = document.getElementById("lessonContent");

  content.innerHTML = `

    <div class="lesson-header">

      <span>${subject.category}</span>

      <h2>${subject.title}</h2>

      <p>${subject.description}</p>

    </div>


    <div class="lesson-tabs">

      <button class="lesson-tab active">الدروس</button>

      <button class="lesson-tab">المصادر</button>

      <button class="lesson-tab">التدريب</button>

    </div>


    <div>

      ${subjectLessons.map((lesson, index) => `

        <div class="lesson-item">

          <div>

            <strong>${lesson[0]}</strong>

            <small>
              درس تفاعلي • ${lesson[1]}
            </small>

          </div>

          <button
            class="lesson-start"
            onclick="startLesson('${id}', ${index})"
          >
            ابدأ
          </button>

        </div>

      `).join("")}

    </div>

  `;

  modal.classList.add("show");

}


function closeLesson() {

  document
    .getElementById("lessonModal")
    .classList.remove("show");

}


async function startLesson(subjectId, lessonIndex) {

  const user = await getCurrentUser();

  if (!user) {

    closeLesson();

    openLogin();

    showToast("سجل الدخول أولًا لبدء الدرس");

    return;
  }

  const lesson = lessons[subjectId][lessonIndex];

  showToast(`بدأت: ${lesson[0]}`);

  await saveProgress(user.id, subjectId, lessonIndex);

}


/* =====================================================
   RECENT LESSONS
===================================================== */

function renderRecentLessons() {

  const container = document.getElementById("recentLessons");

  const recent = [

    ["الفيزياء", "الحركة والقوانين الأساسية", "25 دقيقة", false],

    ["التاريخ الوطني", "مدخل إلى التاريخ الوطني", "20 دقيقة", true],

    ["اللغة الإنجليزية", "Building Strong Vocabulary", "25 دقيقة", true],

    ["اللغة العربية", "أساسيات النحو", "25 دقيقة", false]

  ];

  container.innerHTML = recent.map(item => `

    <div class="recent-item">

      <div>

        <strong>${item[1]}</strong>

        <small>${item[0]} • ${item[2]}</small>

      </div>

      ${
        item[3]
          ? `<span class="completed">✓ مكتمل</span>`
          : `<button
               class="lesson-start"
               onclick="openSubject('${getSubjectId(item[0])}')"
             >
               ابدأ
             </button>`
      }

    </div>

  `).join("");

}


function getSubjectId(name) {

  const map = {

    "الفيزياء": "physics",

    "التاريخ الوطني": "history",

    "اللغة الإنجليزية": "english",

    "اللغة العربية": "arabic"

  };

  return map[name];

}


/* =====================================================
   LIBRARY
===================================================== */

function renderLibrary(filter = "all", search = "") {

  const container = document.getElementById("libraryGrid");

  let items = libraryItems.filter(item => {

    const filterMatch =
      filter === "all" || item.subject === filter;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return filterMatch && searchMatch;

  });

  container.innerHTML = items.map(item => `

    <div class="library-card">

      <small>${getSubjectArabic(item.subject)}</small>

      <h3>${item.title}</h3>

      <p>${item.description}</p>

      <button onclick="showToast('سيتم إضافة المصدر قريبًا')">
        عرض المصدر
      </button>

    </div>

  `).join("");

}


function getSubjectArabic(id) {

  const item = subjects.find(s => s.id === id);

  return item ? item.title : "";

}


document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter")
      .forEach(b => b.classList.remove("active"));

    button.classList.add("active");

    renderLibrary(
      button.dataset.filter,
      document.getElementById("librarySearch").value
    );

  });

});


document
  .getElementById("librarySearch")
  .addEventListener("input", e => {

    const active =
      document.querySelector(".filter.active");

    renderLibrary(
      active?.dataset.filter || "all",
      e.target.value
    );

  });


/* =====================================================
   EXAMS
===================================================== */

function renderExams() {

  const container = document.getElementById("examsGrid");

  container.innerHTML = exams.map((exam, index) => `

    <div class="exam-card">

      <small>${exam.subject}</small>

      <h3>${exam.title}</h3>

      <p>${exam.description}</p>

      <small>${exam.questions} أسئلة</small>

      <br>

      <button onclick="startExam(${index})">
        ابدأ الاختبار
      </button>

    </div>

  `).join("");

}


async function startExam(index) {

  const user = await getCurrentUser();

  if (!user) {

    openLogin();

    showToast("سجل الدخول أولًا");

    return;

  }

  const exam = exams[index];

  const question =
    index === 0
      ? {
          text: "أي مما يلي يمثل كمية فيزيائية متجهة؟",
          options: [
            "الزمن",
            "الكتلة",
            "الإزاحة",
            "درجة الحرارة"
          ]
        }
      : {
          text: "ما المقصود بالوثيقة التاريخية؟",
          options: [
            "مصدر يساعد على دراسة الماضي",
            "قانون تجاري",
            "تجربة علمية",
            "معاهدة رياضية"
          ]
        };

  document.getElementById("lessonModal").classList.add("show");

  document.getElementById("lessonContent").innerHTML = `

    <div class="lesson-header">

      <span>${exam.subject}</span>

      <h2>${exam.title}</h2>

    </div>

    <div class="admin-card">

      <h3>${question.text}</h3>

      <div style="display:grid;gap:10px;margin-top:20px">

        ${question.options.map((option, i) => `

          <button
            onclick="answerQuestion(${index}, ${i})"
            style="
              padding:14px;
              border:1px solid #e2e8f0;
              border-radius:10px;
              background:white;
              text-align:right;
            "
          >
            ${option}
          </button>

        `).join("")}

      </div>

    </div>

  `;

}


async function answerQuestion(examIndex, optionIndex) {

  const correct =
    examIndex === 0
      ? optionIndex === 2
      : optionIndex === 0;

  if (correct) {

    showToast("إجابة صحيحة! 🎉");

    const user = await getCurrentUser();

    if (user) {
      await addPoints(user.id, 10);
    }

  } else {

    showToast("الإجابة غير صحيحة، حاول مرة أخرى.");

  }

}


/* =====================================================
   AUTH
===================================================== */

function openLogin() {

  document.getElementById("loginModal")
    .classList.add("show");

}


function closeLogin() {

  document.getElementById("loginModal")
    .classList.remove("show");

}


function showSignup() {

  closeLogin();

  document.getElementById("signupModal")
    .classList.add("show");

}


function closeSignup() {

  document.getElementById("signupModal")
    .classList.remove("show");

}


/* LOGIN */

document
  .getElementById("loginForm")
  .addEventListener("submit", async e => {

    e.preventDefault();

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value;

    const message =
      document.getElementById("loginMessage");

    message.textContent = "جاري تسجيل الدخول...";

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if (error) {

      message.textContent =
        "بيانات الدخول غير صحيحة.";

      return;
    }

    message.textContent = "";

    closeLogin();

    await updateUI(data.user);

    showToast("تم تسجيل الدخول بنجاح 👋");

  });


/* SIGNUP */

document
  .getElementById("signupForm")
  .addEventListener("submit", async e => {

    e.preventDefault();

    const name =
      document.getElementById("signupName").value.trim();

    const email =
      document.getElementById("signupEmail").value.trim();

    const password =
      document.getElementById("signupPassword").value;

    const message =
      document.getElementById("signupMessage");

    message.textContent = "جاري إنشاء الحساب...";

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

      message.textContent = error.message;

      return;
    }

    message.textContent =
      "تم إنشاء الحساب. تحقق من بريدك الإلكتروني إذا طلب منك ذلك.";

    setTimeout(closeSignup, 2000);

  });


/* =====================================================
   CURRENT USER
===================================================== */

async function getCurrentUser() {

  const {
    data: { user }
  } = await supabaseClient.auth.getUser();

  return user;

}


async function updateUI(user) {

  const loginBtn =
    document.getElementById("loginBtn");

  const logoutBtn =
    document.getElementById("logoutBtn");

  const adminBtn =
    document.getElementById("adminFloatingBtn");

  if (!user) {

    loginBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    adminBtn.classList.add("hidden");

    renderGuestDashboard();

    return;
  }

  loginBtn.classList.add("hidden");
  logoutBtn.classList.remove("hidden");

  const isAdmin =
    await checkAdmin(user.id);

  if (isAdmin) {
    adminBtn.classList.remove("hidden");
  } else {
    adminBtn.classList.add("hidden");
  }

  await renderDashboard(user);

}


supabaseClient.auth.onAuthStateChange(
  async (event, session) => {

    if (session?.user) {

      await updateUI(session.user);

    } else {

      await updateUI(null);

    }

  }
);


/* LOGOUT */

document
  .getElementById("logoutBtn")
  .addEventListener("click", async () => {

    await supabaseClient.auth.signOut();

    showToast("تم تسجيل الخروج");

    updateUI(null);

  });


/* =====================================================
   DASHBOARD
===================================================== */

function renderGuestDashboard() {

  document.getElementById("dashboardContent").innerHTML = `

    <div class="login-required">

      <h3>أهلاً بك في فوتون 👋</h3>

      <p>
        سجل الدخول لمشاهدة نقاطك ودروسك وشاراتك وتقدمك.
      </p>

      <button class="primary-btn" onclick="openLogin()">
        تسجيل الدخول
      </button>

    </div>

  `;

}


async function renderDashboard(user) {

  const { data: profile } =
    await supabaseClient
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

  const points = profile?.points || 0;

  const lessonsCompleted =
    profile?.lessons_completed || 0;

  const examsCompleted =
    profile?.exams_completed || 0;

  const progress =
    Math.min(100, Math.round(
      (lessonsCompleted / 20) * 100
    ));

  document.getElementById("progressNumber")
    .textContent = `${progress}%`;

  document.getElementById("heroProgress")
    .textContent = `${progress}%`;

  document.getElementById("dashboardContent").innerHTML = `

    <div class="dashboard-grid">

      <div class="stat-card">
        <span>النقاط</span>
        <strong>${points}</strong>
      </div>

      <div class="stat-card">
        <span>الدروس المكتملة</span>
        <strong>${lessonsCompleted}</strong>
      </div>

      <div class="stat-card">
        <span>الامتحانات</span>
        <strong>${examsCompleted}</strong>
      </div>

      <div class="stat-card">
        <span>الشارات</span>
        <strong>${calculateBadges(points, lessonsCompleted, examsCompleted)}</strong>
      </div>

    </div>


    <div class="dashboard-panels">

      <div class="dashboard-panel">

        <h3>أوائل فوتون</h3>

        <div class="leader-row">
          <span>طالب فوتون</span>
          <strong>950</strong>
        </div>

        <div class="leader-row">
          <span>متعلم متميز</span>
          <strong>870</strong>
        </div>

        <div class="leader-row">
          <span>صانع المستقبل</span>
          <strong>810</strong>
        </div>

        <div class="leader-row">
          <span>طالب مجتهد</span>
          <strong>760</strong>
        </div>

      </div>


      <div class="dashboard-panel">

        <h3>الشارات</h3>

        <div class="badge-row">
          <span>البداية</span>
          <strong>✓</strong>
        </div>

        <div class="badge-row">
          <span>متعلم</span>
          <strong>${lessonsCompleted >= 5 ? "✓" : "—"}</strong>
        </div>

        <div class="badge-row">
          <span>متدرب</span>
          <strong>${examsCompleted >= 1 ? "✓" : "—"}</strong>
        </div>

        <div class="badge-row">
          <span>متفوق</span>
          <strong>${points >= 100 ? "✓" : "—"}</strong>
        </div>

      </div>

    </div>

  `;

}


function calculateBadges(points, lessons, exams) {

  let count = 1;

  if (lessons >= 5) count++;
  if (exams >= 1) count++;
  if (points >= 100) count++;

  return count;

}


/* =====================================================
   DATABASE PROGRESS
===================================================== */

async function saveProgress(userId, subject, lessonIndex) {

  try {

    await supabaseClient
      .from("lesson_progress")
      .upsert({

        user_id: userId,

        subject_id: subject,

        lesson_index: lessonIndex,

        completed: true

      }, {

        onConflict: "user_id,subject_id,lesson_index"

      });

    await supabaseClient.rpc(
      "complete_lesson",
      {
        target_user: userId
      }
    );

    await renderDashboard(
      await getCurrentUser()
    );

  } catch (error) {

    console.log(error);

  }

}


async function addPoints(userId, amount) {

  try {

    await supabaseClient.rpc(
      "add_points",
      {
        target_user: userId,
        amount_to_add: amount
      }
    );

    await renderDashboard(
      await getCurrentUser()
    );

  } catch (error) {

    console.log(error);

  }

}


/* =====================================================
   ADMIN SECURITY
===================================================== */

async function checkAdmin(userId) {

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select("is_admin")
      .eq("id", userId)
      .single();

  if (error || !data) {
    return false;
  }

  return data.is_admin === true;

}


/* =====================================================
   ADMIN PANEL
===================================================== */

async function openAdmin() {

  const user = await getCurrentUser();

  if (!user) {

    showToast("يجب تسجيل الدخول");

    return;

  }

  const admin = await checkAdmin(user.id);

  if (!admin) {

    showToast("ليس لديك صلاحية الأدمن");

    return;

  }

  document
    .getElementById("adminPanel")
    .classList.remove("hidden");

  loadAdminPage("overview");

}


function closeAdmin() {

  document
    .getElementById("adminPanel")
    .classList.add("hidden");

}


document.querySelectorAll(".admin-nav")
  .forEach(button => {

    button.addEventListener("click", () => {

      document.querySelectorAll(".admin-nav")
        .forEach(b => b.classList.remove("active"));

      button.classList.add("active");

      loadAdminPage(
        button.dataset.admin
      );

    });

  });


async function loadAdminPage(page) {

  const container =
    document.getElementById("adminContent");

  if (page === "overview") {

    await adminOverview(container);

  }

  if (page === "students") {

    await adminStudents(container);

  }

  if (page === "subjects") {

    adminSubjects(container);

  }

  if (page === "lessons") {

    adminLessons(container);

  }

  if (page === "library") {

    adminLibrary(container);

  }

  if (page === "exams") {

    adminExams(container);

  }

}


/* ADMIN OVERVIEW */

async function adminOverview(container) {

  const { count: students } =
    await supabaseClient
      .from("profiles")
      .select("*", { count: "exact", head: true });

  const { count: lessonCount } =
    await supabaseClient
      .from("lesson_progress")
      .select("*", { count: "exact", head: true });

  container.innerHTML = `

    <h2>مرحبًا بك في لوحة الأدمن 👑</h2>

    <p style="color:#64748b;margin:8px 0 25px">
      تحكم كامل في محتوى منصة PHOTON.
    </p>


    <div class="admin-stats">

      <div class="stat-card">
        <span>عدد الطلاب</span>
        <strong>${students || 0}</strong>
      </div>

      <div class="stat-card">
        <span>المواد</span>
        <strong>4</strong>
      </div>

      <div class="stat-card">
        <span>الدروس</span>
        <strong>24+</strong>
      </div>

      <div class="stat-card">
        <span>أنشطة التعلم</span>
        <strong>${lessonCount || 0}</strong>
      </div>

    </div>


    <div class="admin-card">

      <h3>صلاحيات الأدمن</h3>

      <p style="color:#64748b;margin-top:10px">
        يمكنك إدارة الطلاب والمحتوى والدروس والمكتبة والامتحانات
        من الأقسام الموجودة في القائمة الجانبية.
      </p>

    </div>

  `;

}


/* ADMIN STUDENTS */

async function adminStudents(container) {

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

  if (error) {

    container.innerHTML =
      `<div class="admin-card">حدث خطأ في تحميل الطلاب.</div>`;

    return;

  }

  container.innerHTML = `

    <h2>الطلاب</h2>

    <br>

    <table class="admin-table">

      <thead>

        <tr>

          <th>الاسم</th>
          <th>البريد</th>
          <th>النقاط</th>
          <th>الدروس</th>
          <th>أدمن</th>

        </tr>

      </thead>

      <tbody>

        ${data.map(student => `

          <tr>

            <td>${student.full_name || "—"}</td>

            <td>${student.email || "—"}</td>

            <td>${student.points || 0}</td>

            <td>${student.lessons_completed || 0}</td>

            <td>
              ${student.is_admin ? "👑 نعم" : "لا"}
            </td>

          </tr>

        `).join("")}

      </tbody>

    </table>

  `;

}


/* ADMIN SUBJECTS */

function adminSubjects(container) {

  container.innerHTML = `

    <h2>المواد الدراسية</h2>

    <br>

    <div class="admin-card">

      ${subjects.map(subject => `

        <div class="recent-item">

          <div>

            <strong>${subject.title}</strong>

            <small>${subject.category}</small>

          </div>

          <strong>
            ${subject.lessons} درس
          </strong>

        </div>

      `).join("")}

    </div>

  `;

}


/* ADMIN LESSONS */

function adminLessons(container) {

  container.innerHTML = `

    <h2>الدروس</h2>

    <br>

    ${subjects.map(subject => `

      <div class="admin-card" style="margin-bottom:15px">

        <h3>${subject.title}</h3>

        <br>

        ${(lessons[subject.id] || [])
          .map((lesson, i) => `

            <div class="recent-item">

              <span>
                ${i + 1}. ${lesson[0]}
              </span>

              <small>${lesson[1]}</small>

            </div>

          `).join("")}

      </div>

    `).join("")}

  `;

}


/* ADMIN LIBRARY */

function adminLibrary(container) {

  container.innerHTML = `

    <h2>المكتبة</h2>

    <br>

    <div class="library-grid">

      ${libraryItems.map(item => `

        <div class="library-card">

          <small>
            ${getSubjectArabic(item.subject)}
          </small>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

        </div>

      `).join("")}

    </div>

  `;

}


/* ADMIN EXAMS */

function adminExams(container) {

  container.innerHTML = `

    <h2>الامتحانات</h2>

    <br>

    <div class="exams-grid">

      ${exams.map(exam => `

        <div class="exam-card">

          <small>${exam.subject}</small>

          <h3>${exam.title}</h3>

          <p>${exam.description}</p>

          <strong>${exam.questions} أسئلة</strong>

        </div>

      `).join("")}

    </div>

  `;

}


/* =====================================================
   UTILITIES
===================================================== */

function scrollToSection(id) {

  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.style.display = "block";

  setTimeout(() => {

    toast.style.display = "none";

  }, 2500);

}


/* =====================================================
   INIT
===================================================== */

renderSubjects();
renderRecentLessons();
renderLibrary();
renderExams();

updateUI(null);
