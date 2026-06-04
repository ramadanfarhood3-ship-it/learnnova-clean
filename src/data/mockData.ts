// 1. واجهة البيانات الخاصة بإحصائيات المستخدم
export interface UserStats {
  name: string;
  xp: number;
  level: number;
  coursesCompleted: number;
  achievementsCount: number;
  streak: number;
  weeklyProgress: { day: string; xp: number; time: number }[];
}

// 2. واجهة البيانات الخاصة بأسئلة الكويز
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

// 3. واجهة البيانات الخاصة بالأوسمة
export interface Achievement {
  id: string;
  title: string;
  description: string;
  xpValue: number;
  unlocked: boolean;
  iconType: 'quiz' | 'xp' | 'streak';
}

// ==========================================
// تصدير البيانات الحقيقية المتوافقة مع التصميم
// ==========================================

export const mockUserStats: UserStats = {
  name: "Ramadan",
  xp: 2450,
  level: 12,
  coursesCompleted: 24,
  achievementsCount: 8,
  streak: 12,
  weeklyProgress: [
    { day: "Mon", xp: 350, time: 25 },
    { day: "Tue", xp: 550, time: 40 },
    { day: "Wed", xp: 800, time: 55 },
    { day: "Thu", xp: 600, time: 45 },
    { day: "Fri", xp: 720, time: 50 },
    { day: "Sat", xp: 950, time: 65 },
    { day: "Sun", xp: 850, time: 60 }
  ]
};

export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the primary library used for building User Interfaces in React?",
    options: ["Angular", "React DOM", "Vue", "React Core"],
    correctAnswer: 1
  },
  {
    id: "q2",
    question: "In physics, which of Newton's laws states that every action has an equal and opposite reaction?",
    options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
    correctAnswer: 2
  },
  {
    id: "q3",
    question: "Which mathematical discipline deals with finding unknowns using symbols like 'x' and 'y'?",
    options: ["Geometry", "Algebra", "Calculus", "Statistics"],
    correctAnswer: 1
  },
  {
    id: "q4",
    question: "What does HTML stand for in web development?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Main Language", "None of the above"],
    correctAnswer: 0
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: "a1",
    title: "First Quiz",
    description: "Successfully completed your very first interactive quiz assessment.",
    xpValue: 100,
    unlocked: true,
    iconType: "quiz"
  },
  {
    id: "a2",
    title: "100 XP Club",
    description: "Earned more than 100 Experience Points across courses.",
    xpValue: 100,
    unlocked: true,
    iconType: "xp"
  },
  {
    id: "a3",
    title: "500 XP Milestone",
    description: "Reached a total accumulation of 500 total knowledge points.",
    xpValue: 200,
    unlocked: true,
    iconType: "xp"
  },
  {
    id: "a4",
    title: "1000 XP Overlord",
    description: "Unleashed the expert within and broken the 1000 XP ceiling.",
    xpValue: 300,
    unlocked: false,
    iconType: "xp"
  },
  {
    id: "a5",
    title: "7 Day Streak",
    description: "Maintained your learning focus for 7 consecutive days active.",
    xpValue: 150,
    unlocked: false,
    iconType: "streak"
  },
  {
    id: "a6",
    title: "Math Master",
    description: "Answered all advanced Algebra questions correctly in one go.",
    xpValue: 250,
    unlocked: false,
    iconType: "quiz"
  }
];

// بيانات الكورسات الإضافية لتغذية الـ Dashboard
export const mockContinueLearning = [
  { id: "c1", category: "Mathematics", title: "Algebra Basics", progress: 82 },
  { id: "c2", category: "Physics", title: "Newton's Laws", progress: 64 },
  { id: "c3", category: "Programming", title: "React Basics", progress: 45 },
  { id: "c4", category: "English", title: "Grammar Mastery", progress: 90 }
];

export const mockRecommendedCourses = [
  { id: "r1", title: "Data Structures", category: "Computer Science", lessonsCount: 12 },
  { id: "r2", title: "World History", category: "History", lessonsCount: 18 },
  { id: "r3", title: "UI/UX Design", category: "Design", lessonsCount: 14 },
  { id: "r4", title: "Artificial Intelligence", category: "AI & ML", lessonsCount: 20 }
];
