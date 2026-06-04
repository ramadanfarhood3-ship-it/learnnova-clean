// بيانات المستخدم الأساسية لـ رمضان
export const mockUserStats = {
  name: "Ramadan",
  xp: 340,
  level: 2,
  streak: 12,
  coursesCompleted: 4,
  achievementsCount: 3,
  weeklyProgress: [
    { day: "Mon", xp: 45, time: 20 },
    { day: "Tue", xp: 60, time: 35 },
    { day: "Wed", xp: 120, time: 50 },
    { day: "Thu", xp: 30, time: 15 },
    { day: "Fri", xp: 85, time: 40 },
    { day: "Sat", xp: 0, time: 0 },
    { day: "Sun", xp: 0, time: 0 }
  ]
};

// قائمة المواد الحالية المحدثة (تتطابق مع الإسبانية والجغرافيا)
export const mockContinueLearning = [
  { id: "1", title: "Mathematik (Algebra Basics)", category: "Math", progress: 82 },
  { id: "2", title: "Physik (Newton's Laws)", category: "Physics", progress: 64 },
  { id: "3", title: "Informatik (React Basics)", category: "IT", progress: 45 },
  { id: "4", title: "Spanisch (Vocabulary & Basics)", category: "Languages", progress: 30 },
  { id: "5", title: "Geographie (World Map & Climates)", category: "Geography", progress: 15 }
];

// قائمة المواد المقترحة لتوسيع الآفاق
export const mockRecommendedCourses = [
  { id: "rec1", title: "Advanced Quantum Mechanics", category: "Physics", lessonsCount: 24 },
  { id: "rec2", title: "Data Structures & Algorithms", category: "IT", lessonsCount: 40 },
  { id: "rec3", title: "Spanish Intermediate Conversation", category: "Languages", lessonsCount: 18 },
  { id: "rec4", title: "Geopolitics & Earth Resources", category: "Geography", lessonsCount: 12 }
];

// قاموس الترجمة الثلاثي الأبعاد (إنجليزي - عربي - ألماني)
export const translations = {
  en: {
    dashboard: "🏠 Dashboard",
    courses: "📚 Courses",
    quiz: "❔ Quiz System",
    aiCoach: "🤖 AI Coach",
    achievements: "🏆 Achievements",
    analytics: "📊 Analytics",
    profile: "👤 Profile",
    welcome: "Welcome back, Ramadan! 👋",
    search: "Search courses, quizzes...",
    totalXp: "Total XP",
    level: "Level",
    completed: "Courses Completed",
    streak: "Day Streak",
    upgrade: "Upgrade to Pro",
    upgradeBtn: "Upgrade Now",
    continue: "📚 Continue Learning",
    quickPanel: "🤖 AI Coach Quick Panel",
    ask: "Ask your question...",
    weekly: "📊 Weekly Progress",
    firstQuiz: "First Quiz"
  },
  ar: {
    dashboard: "🏠 اللوحة الرئيسية",
    courses: "📚 المواد الدراسية",
    quiz: "❔ نظام الاختبارات",
    aiCoach: "🤖 مدرب الذكاء الاصطناعي",
    achievements: "🏆 الإنجازات",
    analytics: "📊 التحليلات",
    profile: "👤 الملف الشخصي",
    welcome: "أهلاً بعودتك، رمضان! 👋",
    search: "ابحث عن مواد، اختبارات...",
    totalXp: "إجمالي النقاط",
    level: "المستوى",
    completed: "المواد المكتملة",
    streak: "أيام التوالي",
    upgrade: "الترقية للمستوى الاحترافي",
    upgradeBtn: "ترقّ الآن",
    continue: "📚 متابعة التعلم",
    quickPanel: "🤖 لوحة المدرب السريعة",
    ask: "اسأل سؤالك هنا...",
    weekly: "📊 التقدم الأسبوعي",
    firstQuiz: "الاختبار الأول"
  },
  de: {
    dashboard: "🏠 Dashboard",
    courses: "📚 Kurse",
    quiz: "❔ Quiz-System",
    aiCoach: "🤖 AI-Coach",
    achievements: "🏆 Erfolge",
    analytics: "📊 Analysen",
    profile: "👤 Profil",
    welcome: "Willkommen zurück, Ramadan! 👋",
    search: "Kurse, Quizzes suchen...",
    totalXp: "Gesamt-XP",
    level: "Stufe",
    completed: "Abgeschlossene Kurse",
    streak: "Tages-Streak",
    upgrade: "Auf Pro upgraden",
    upgradeBtn: "Jetzt upgraden",
    continue: "📚 Weiterlernen",
    quickPanel: "🤖 AI Coach Quick-Panel",
    ask: "Frage stellen...",
    weekly: "📊 Wöchentlicher Fortschritt",
    firstQuiz: "Erstes Quiz"
  }
};
