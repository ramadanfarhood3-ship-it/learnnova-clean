// 1. تعريف الأنواع (TypeScript Interfaces) لضمان دقة البيانات

export interface UserStats {
  name: string;
  xp: number;
  level: number;
  coursesCompleted: number;
  achievementsCount: number;
  streak: number;
  weeklyProgress: { day: string; xp: number; time: number }[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  progress: number; // للـ Continue Learning (نسبة مئوية)
  lessonsCount?: number; // للـ Recommended
  icon?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // الـ Index الخاص بالإجابة الصحيحة (0, 1, 2, 3)
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  xpValue: number;
  iconType: 'quiz' | 'xp' | 'streak' | 'math' | 'lock';
}

// ==========================================
// 2. البيانات التجريبية (Mock Data) المطابقة للتصميم الخاص بك

export const mockUserStats: UserStats = {
  name: "Ramadan",
  xp: 2450,
  level: 12,
  coursesCompleted: 24,
  achievementsCount: 8,
  streak: 12,
  weeklyProgress: [
    { day: "Mon", xp: 300, time: 20 },
    { day: "Tue", xp: 450, time: 30 },
    { day: "Wed", xp: 400, time: 25 },
    { day: "Thu", xp: 750, time: 45 }, // اليوم المميز في الرسم البياني
    { day: "Fri", xp: 500, time: 35 },
    { day: "Sat", xp: 600, time: 40 },
    { day: "Sun", xp: 550, time: 38 },
  ]
};

export const mockContinueLearning: Course[] = [
  { id: "c1", title: "Algebra Basics", category: "Mathematics", progress: 82 },
  { id: "c2", title: "Newton's Laws", category: "Physics", progress: 64 },
  { id: "c3", title: "React Basics", category: "Programming", progress: 45 },
  { id: "c4", title: "Grammar Mastery", category: "English", progress: 90 },
];

export const mockRecommendedCourses: Course[] = [
  { id: "r1", title: "Data Structures", category: "Computer Science", lessonsCount: 12 },
  { id: "r2", title: "World History", category: "History", lessonsCount: 18 },
  { id: "r3", title: "UI/UX Design", category: "Design", lessonsCount: 14 },
  { id: "r4", title: "Artificial Intelligence", category: "AI & ML", lessonsCount: 20 },
];

export const mockAchievements: Achievement[] = [
  { id: "a1", title: "First Quiz", description: "Completed your first quiz", unlocked: true, xpValue: 50, iconType: 'quiz' },
  { id: "a2", title: "100 XP", description: "Earned 100 XP in one day", unlocked: true, xpValue: 100, iconType: 'xp' },
  { id: "a3", title: "500 XP", description: "Earned 500 XP in one day", unlocked: true, xpValue: 50, iconType: 'xp' },
  { id: "a4", title: "1000 XP", description: "Earned 1000 XP total", unlocked: false, xpValue: 1000, iconType: 'lock' },
  { id: "a5", title: "7 Day Streak", description: "Kept a 7 day learning streak", unlocked: false, xpValue: 200, iconType: 'lock' },
  { id: "a6", title: "Math Master", description: "Mastered Algebra basics", unlocked: false, xpValue: 300, iconType: 'lock' },
];

// أسئلة الكويز المقترحة للخطوة القادمة
export const mockQuizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the value of x in the equation: 2x + 5 = 15?",
    options: ["x = 3", "x = 5", "x = 10", "x = 4"],
    correctAnswer: 1 // x = 5
  },
  {
    id: "q2",
    question: "Which hook is used to handle side effects in React?",
    options: ["useState", "useContext", "useEffect", "useReducer"],
    correctAnswer: 2 // useEffect
  },
  {
    id: "q3",
    question: "What is Newton's First Law of Motion often called?",
    options: ["Law of Inertia", "Law of Acceleration", "Law of Action and Reaction", "Law of Gravity"],
    correctAnswer: 0 // Law of Inertia
  }
];
