import { useState } from "react";
import "./App.css";

// 1. استيراد المكونات والبيانات المركزية بدقة
import { mockUserStats, mockContinueLearning } from "./data/mockData";
import Quiz from "./pages/Quiz";
import AICoach from "./pages/AICoach";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics"; // إضافة صفحة التحليلات الجديدة

const courses = [
  ["📐", "Mathematik", "Algebra Basics", 82],
  ["⚛️", "Physik", "Newton's Laws", 64],
  ["💻", "Informatik", "React Basics", 45],
  ["🇬🇧", "Englisch", "Grammar Mastery", 90],
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'courses' | 'quiz' | 'ai-coach' | 'achievements' | 'analytics' | 'profile' | 'settings'>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // إدارة الـ XP والـ Level بشكل ديناميكي ومحترف من الـ State
  const [userXP, setUserXP] = useState(mockUserStats.xp);
  const [userLevel, setUserLevel] = useState(mockUserStats.level);

  // دالة حساب زيادة الـ XP ورفع المستوى تلقائياً
  const handleEarnXP = (amount: number) => {
    setUserXP((prevXP) => {
      const newXP = prevXP + amount;
      // كل 200 XP يرتفع المستوى خطوة للأمام
      const calculatedLevel = Math.floor(newXP / 200) + 1; 
      if (calculatedLevel > userLevel) {
        setUserLevel(calculatedLevel);
      }
      return newXP;
    });
  };

  // 2. دالة التحكم وعرض الشاشات تفاعلياً بناءً على التبويب النشط
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <section className="grid">
            <div className="panel big">
              <h3>📚 Continue Learning</h3>
              <div className="courses">
                {courses.map((c) => (
                  <div className="course" key={c[1].toString()}>
                    <div className="icon">{c[0]}</div>
                    <p>{c[1]}</p>
                    <h3>{c[2]}</h3>
                    <div className="bar">
                      <span style={{ width: `${c[3]}%` }} />
                    </div>
                    <small>{c[3]}%</small>
                  </div>
                ))}
              </div>
            </div>

            {/* الكوتش السريع المربوط بزيادة الـ XP الحية */}
            <div className="panel coach">
              <h3>🤖 AI Coach Quick Panel</h3>
              <p>Hello Ramadan! What would you like to learn today?</p>
              <button onClick={() => handleEarnXP(50)}>
                Explain photosynthesis → (+50 XP)
              </button>
              <button onClick={() => handleEarnXP(50)}>
                Help me with algebra → (+50 XP)
              </button>
              <input 
                placeholder="Ask your question..." 
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab('ai-coach')} 
              />
            </div>

            <div className="panel big">
              <h3>📊 Weekly Progress</h3>
              <div className="chart">
                {[35, 55, 80, 60, 72, 95, 85].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="panel">
              <h3>🏆 Achievements</h3>
              <div className="badges">
                <span>🏅<br />First Quiz</span>
                <span>💜<br />100 XP</span>
                <span>💎<br />500 XP</span>
                <span>🔒<br />1000 XP</span>
              </div>
            </div>
          </section>
        );
      case 'quiz':
        return <Quiz onEarnXP={handleEarnXP} />;
      case 'ai-coach':
        return <AICoach />;
      case 'achievements':
        return <Achievements />;
      case 'analytics':
        return <Analytics />; // عرض شاشة التحليلات
      case 'profile':
        return <Profile currentXP={userXP} currentLevel={userLevel} />;
      default:
        return (
          <div style={{ padding: '24px', color: '#7a7a85', textAlign: 'center' }}>
            <h2>Under Construction 🛠️</h2>
            <p>The {activeTab} section will be integrated soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="app">
      {/* القائمة الجانبية (Sidebar) مع الربط التفاعلي الكامل لكل الأزرار */}
      <aside className="sidebar">
        <h1>🦄 LearnNova</h1>
        <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>🏠 Dashboard</button>
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>📚 Courses</button>
        <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>❔ Quiz System</button>
        <button className={activeTab === 'ai-coach' ? 'active' : ''} onClick={() => setActiveTab('ai-coach')}>🤖 AI Coach</button>
        <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>🏆 Achievements</button>
        <button className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>📊 Analytics</button>
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>👤 Profile</button>

        <div className="streak">🔥 <b>{mockUserStats.streak}</b><br />Day Streak</div>
        <div className="pro">⭐ Upgrade to Pro<br /><button>Upgrade Now</button></div>
      </aside>

      <main className="main">
        <header className="top">
          <div>
            <h2>Welcome back, Ramadan! 👋</h2>
            <div className="xpbar">
              {/* حساب مؤشر تقدم المستوى بدقة مئوية */}
              <div style={{ width: `${(userXP % 200) / 2}%` }}></div>
            </div>
          </div>
          <input placeholder="Search courses, quizzes..." />
          <div className="avatar" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('profile')}>R</div>
        </header>

        {/* كروت الإحصائيات العلوية المربوطة بالـ Live State */}
        <section className="stats">
          <div className="stat purple">⭐ <h2>{userXP}</h2><p>Total XP</p></div>
          <div className="stat blue">🎖️ <h2>{userLevel}</h2><p>Level</p></div>
          <div className="stat green">📖 <h2>{mockUserStats.coursesCompleted}</h2><p>Courses Completed</p></div>
          <div className="stat orange">🏆 <h2>{mockUserStats.achievementsCount}</h2><p>Achievements</p></div>
        </section>

        {/* استدعاء منطقة عرض المحتوى المتغيرة ديناميكياً */}
        {renderContent()}
      </main>
    </div>
  );
}
