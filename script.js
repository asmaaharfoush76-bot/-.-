/* =====================================================
   PHOTON | فوتون
   Main JavaScript
===================================================== */


/* ================= SUPABASE ================= */

const SUPABASE_URL =
    "https://ahijhhefbjslieeckjkc.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_JJUMW1OLWg1zY7H_bWw8cQ_McBx0TUf";

const ADMIN_EMAIL =
    "asmaa.harfoush76@gmail.com";


let supabaseClient = null;
let currentUser = null;
let isAdmin = false;


/* ================= SUBJECTS ================= */

const subjects = {

    physics: {
        name: "الفيزياء",
        icon: "⚛️",
        description: "فهم القوانين وتطبيقاتها."
    },

    history: {
        name: "التاريخ الوطني",
        icon: "🏛️",
        description: "الأحداث والشخصيات المهمة."
    },

    english: {
        name: "اللغة الإنجليزية",
        icon: "🇬🇧",
        description: "Grammar - Vocabulary - Reading."
    },

    arabic: {
        name: "اللغة العربية",
        icon: "📚",
        description: "النحو والأدب والقراءة."
    }

};


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", async () => {

    initializeSupabase();

    setupNavigation();

    setupModalOutsideClick();

    await checkCurrentUser();

});


/* ================= SUPABASE INIT ================= */

function initializeSupabase() {

    try {

        if (
            window.supabase &&
            SUPABASE_URL &&
            SUPABASE_ANON_KEY
        ) {

            supabaseClient =
                window.supabase.createClient(
                    SUPABASE_URL,
                    SUPABASE_ANON_KEY
                );

        }

    } catch (error) {

        console.error(
            "Supabase initialization error:",
            error
        );

    }

}


/* ================= NAVIGATION ================= */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            ".nav-links a[data-page]"
        );

    links.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const page =
                link.getAttribute("data-page");

            showPage(page);

        });

    });

}


function showPage(pageId) {

    if (
        pageId === "admin" &&
        !isAdmin
    ) {

        showToast(
            "هذه الصفحة متاحة للأدمن فقط."
        );

        return;

    }


    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const target =
        document.getElementById(pageId);

    if (target) {

        target.classList.add("active-page");

    }


    const links =
        document.querySelectorAll(
            ".nav-links a[data-page]"
        );

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("data-page")
            === pageId
        ) {

            link.classList.add("active");

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= LOGIN ================= */

function openLoginModal() {

    document
        .getElementById("loginModal")
        .classList.add("show");

}


function closeLoginModal() {

    document
        .getElementById("loginModal")
        .classList.remove("show");

}


async function handleLogin() {

    if (!supabaseClient) {

        showToast(
            "تعذر الاتصال بقاعدة البيانات."
        );

        return;

    }


    const email =
        document
            .getElementById("studentEmailInput")
            .value
            .trim();

    const password =
        document
            .getElementById("studentPasswordInput")
            .value;


    if (!email || !password) {

        showToast(
            "اكتبي البريد الإلكتروني وكلمة المرور."
        );

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });


        if (error) {

            showToast(
                "البريد الإلكتروني أو كلمة المرور غير صحيحة."
            );

            console.error(error);

            return;

        }


        currentUser =
            data.user;


        await checkAdminStatus();


        closeLoginModal();

        updateDashboard();

        showToast(
            "تم تسجيل الدخول بنجاح 🚀"
        );


    } catch (error) {

        console.error(error);

        showToast(
            "حدث خطأ أثناء تسجيل الدخول."
        );

    }

}


/* ================= CURRENT USER ================= */

async function checkCurrentUser() {

    if (!supabaseClient) {
        return;
    }


    try {

        const {
            data
        } =
            await supabaseClient.auth.getUser();


        currentUser =
            data.user || null;


        await checkAdminStatus();

        updateDashboard();


        supabaseClient.auth.onAuthStateChange(
            async (event, session) => {

                currentUser =
                    session?.user || null;

                await checkAdminStatus();

                updateDashboard();

            }
        );


    } catch (error) {

        console.error(error);

    }

}


/* ================= ADMIN CHECK ================= */

async function checkAdminStatus() {

    isAdmin = false;


    if (!currentUser) {

        updateAdminUI();

        return;

    }


    const email =
        (
            currentUser.email || ""
        ).toLowerCase().trim();


    if (
        email ===
        ADMIN_EMAIL.toLowerCase()
    ) {

        isAdmin = true;

    }


    updateAdminUI();

}


/* ================= ADMIN UI ================= */

function updateAdminUI() {

    const adminLink =
        document.getElementById(
            "adminNavLink"
        );


    if (!adminLink) {
        return;
    }


    if (isAdmin) {

        adminLink.style.display =
            "inline-block";

    } else {

        adminLink.style.display =
            "none";

    }

}


/* ================= DASHBOARD ================= */

function updateDashboard() {

    const nameElement =
        document.getElementById(
            "studentNameDisplay"
        );

    const messageElement =
        document.getElementById(
            "dashboardMessage"
        );


    if (!nameElement || !messageElement) {
        return;
    }


    if (currentUser) {

        const email =
            currentUser.email || "طالب فوتون";


        nameElement.textContent =
            "أهلاً بك في فوتون ⚡";


        messageElement.textContent =
            `تم تسجيل الدخول باستخدام ${email}`;

    } else {

        nameElement.textContent =
            "أهلاً بك في فوتون ⚡";


        messageElement.textContent =
            "قم بتسجيل الدخول للبدء.";

    }

}


/* ================= SUBJECT ================= */

async function openSubject(subjectId) {

    const subject =
        subjects[subjectId];


    if (!subject) {
        return;
    }


    const modal =
        document.getElementById(
            "subjectModal"
        );


    const content =
        document.getElementById(
            "subjectModalContent"
        );


    content.innerHTML = `

        <div class="subject-icon">
            ${subject.icon}
        </div>

        <h2>
            ${subject.name}
        </h2>

        <p>
            ${subject.description}
        </p>

        <div id="lessonsContainer">

            <p>
                جاري تحميل الدروس...
            </p>

        </div>

    `;


    modal.classList.add("show");


    await loadLessons(
        subjectId
    );

}


function closeSubjectModal() {

    document
        .getElementById("subjectModal")
        .classList.remove("show");

}


/* ================= LESSONS ================= */

async function loadLessons(subjectId) {

    const container =
        document.getElementById(
            "lessonsContainer"
        );


    if (!container) {
        return;
    }


    if (!supabaseClient) {

        container.innerHTML = `

            <div class="lesson-item">

                <strong>
                    لا توجد دروس حاليًا
                </strong>

                <span>
                    سيتم إضافة المحتوى قريبًا.
                </span>

            </div>

        `;

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("lessons")
                .select("*")
                .eq("subject", subjectId)
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );


        if (error) {

            console.error(error);

            container.innerHTML = `

                <div class="lesson-item">

                    <strong>
                        لا توجد دروس حاليًا
                    </strong>

                    <span>
                        سيتم إضافة المحتوى قريبًا.
                    </span>

                </div>

            `;

            return;

        }


        if (!data || data.length === 0) {

            container.innerHTML = `

                <div class="lesson-item">

                    <strong>
                        لا توجد دروس حتى الآن
                    </strong>

                    <span>
                        انتظر إضافة المحتوى قريبًا ⚡
                    </span>

                </div>

            `;

            return;

        }


        container.innerHTML =
            data.map(lesson => `

                <div class="lesson-item">

                    <strong>
                        ${escapeHTML(
                            lesson.title || "درس"
                        )}
                    </strong>

                    <span>
                        ${escapeHTML(
                            lesson.duration || ""
                        )}
                    </span>

                </div>

            `).join("");


    } catch (error) {

        console.error(error);

    }

}


/* ================= ADD LESSON ================= */

async function addNewLesson() {

    if (!isAdmin || !currentUser) {

        showToast(
            "يجب أن تكوني الأدمن لإضافة درس."
        );

        return;

    }


    const subject =
        document
            .getElementById(
                "adminSubjectSelect"
            )
            .value;


    const title =
        document
            .getElementById(
                "adminLessonTitle"
            )
            .value
            .trim();


    const duration =
        document
            .getElementById(
                "adminLessonDuration"
            )
            .value
            .trim();


    if (!title) {

        showToast(
            "اكتبي عنوان الدرس."
        );

        return;

    }


    try {

        const {
            error
        } =
            await supabaseClient
                .from("lessons")
                .insert([{

                    subject: subject,

                    title: title,

                    duration: duration

                }]);


        if (error) {

            console.error(error);

            showToast(
                "لم يتم نشر الدرس. راجعي صلاحيات Supabase."
            );

            return;

        }


        document
            .getElementById(
                "adminLessonTitle"
            )
            .value = "";


        document
            .getElementById(
                "adminLessonDuration"
            )
            .value = "";


        showToast(
            "تم نشر الدرس بنجاح 🚀"
        );


    } catch (error) {

        console.error(error);

        showToast(
            "حدث خطأ أثناء نشر الدرس."
        );

    }

}


/* ================= MODALS ================= */

function setupModalOutsideClick() {

    const modals =
        document.querySelectorAll(".modal");


    modals.forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "show"
                    );

                }

            }
        );

    });

}


/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (!toast || !toastMessage) {
        return;
    }


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 3000);

}


/* ================= SECURITY ================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
