import { useState } from "react";
import "./App.css";

// 1. استيراد المكونات والبيانات المركزية والترجمات
import { mockUserStats, translations } from "./data/mockData";
import Quiz from "./pages/Quiz";
import AICoach from "./pages/AICoach";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics"; 
import CoursesPage from "./pages/Courses";
import Settings from "./pages/Settings";

// مصفوفة المواد المحدثة (إسبانيا والجغرافيا)
const courses = [
  ["📐", "Mathematik", "Algebra Basics", 82],
  ["⚛️", "Physik", "Newton's Laws", 64],
  ["💻", "Informatik", "React Basics", 45],
  ["🇪🇸", "Spanisch", "Vocabulary & Basics", 30], 
  ["🌍", "Geographie", "World Map & Climates", 15], 
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'courses' | 'quiz' | 'ai-coach' | 'achievements' | 'analytics' | 'profile' | 'settings'>('dashboard');
  
  // إدارة حالة اللغة الحالية (الإنجليزية هي الافتراضية)
  const [lang, setLang] = useState<'en' | 'ar' | 'de'>('en');
  
  // جلب النصوص بناءً على اللغة المختارة
  const t = translations[lang];

  // إدارة الـ XP والـ Level
  const [userXP, setUserXP] = useState(mockUserStats.xp);
  const [userLevel, setUserLevel] = useState(mockUserStats.level);

  const handleEarnXP = (amount: number) => {
    setUserXP((prevXP) => {
      const newXP = prevXP + amount;
      const calculatedLevel = Math.floor(newXP / 200) + 1; 
      if (calculatedLevel > userLevel) {
        setUserLevel(calculatedLevel);
      }
      return newXP;
    });
  };

  // دالة التحكم وعرض الشاشات (تم تنظيف التكرار بالكامل)
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <section className="grid">
            <div className="panel big">
              <h3>{t.continue}</h3>
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

            <div className="panel coach">
              <h3>{t.quickPanel}</h3>
              <p>Hello Ramadan! What would you like to learn today?</p>
              <button onClick={() => handleEarnXP(50)}>
                Explain photosynthesis → (+50 XP)
              </button>
              <button onClick={() => handleEarnXP(50)}>
                Help me with algebra → (+50 XP)
              </button>
              <input 
                placeholder={t.ask} 
                onKeyDown={(e) => e.key === 'Enter' && setActiveTab('ai-coach')} 
              />
            </div>

            <div className="panel big">
              <h3>{t.weekly}</h3>
              <div className="chart">
                {[35, 55, 80, 60, 72, 95, 85].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="panel">
              <h3>{t.achievements}</h3>
              <div className="badges">
                <span>🏅<br />{t.firstQuiz}</span>
                <span>💜<br />100 XP</span>
                <span>💎<br />500 XP</span>
                <span>🔒<br />1000 XP</span>
              </div>
            </div>
          </section>
        );
      case 'courses':
        return <CoursesPage />;
      case 'quiz':
        return <Quiz onEarnXP={handleEarnXP} />;
            case 'ai-coach':
        return <AICoach lang={lang} />; // تم تمرير متغيّر اللغة هنا بنجاح
      case 'achievements':
        return <Achievements />;
      case 'analytics':
        return <Analytics />; 
      case 'profile':
        return <Profile currentXP={userXP} currentLevel={userLevel} />;
      case 'settings':
        return <Settings />; 
      default:
        return (
          <div style={{ padding: '24px', color: '#7a7a85', textAlign: 'center' }}>
            <h2>Under Construction 🛠️</h2>
          </div>
        );
    }
  };

  return (
    <div className="app" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      
      <aside className="sidebar" style={{ left: lang === 'ar' ? 'auto' : 0, right: lang === 'ar' ? 0 : 'auto', borderRight: lang === 'ar' ? 'none' : '1px solid #2f303e', borderLeft: lang === 'ar' ? '1px solid #2f303e' : 'none' }}>
        <h1>🦄 LearnNova</h1>
        <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>{t.dashboard}</button>
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>{t.courses}</button>
        <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>{t.quiz}</button>
        <button className={activeTab === 'ai-coach' ? 'active' : ''} onClick={() => setActiveTab('ai-coach')}>{t.aiCoach}</button>
        <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>{t.achievements}</button>
        <button className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>{t.analytics}</button>
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>{t.profile}</button>
        {/* إضافة زر الإعدادات أسفل القائمة الجانبية مباشرة ليكون متناسقاً */}
        <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>

        <div className="streak">🔥 <b>{mockUserStats.streak}</b><br />{t.streak}</div>
        <div className="pro text-center">⭐ {t.upgrade}<br /><button>{t.upgradeBtn}</button></div>
      </aside>

      <main className="main" style={{ marginLeft: lang === 'ar' ? 0 : '260px', marginRight: lang === 'ar' ? '260px' : 0 }}>
        <header className="top">
          <div>
            <h2>{t.welcome}</h2>
            <div className="xpbar">
              <div style={{ width: `${(userXP % 200) / 2}%` }}></div>
            </div>
          </div>
          
          <input placeholder={t.search} />

          <div style={{ display: 'flex', gap: '6px', background: '#171821', padding: '6px', borderRadius: '10px', border: '1px solid #2f303e' }}>
            <button onClick={() => setLang('en')} style={{ background: lang === 'en' ? '#8c52ff' : 'none', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>EN</button>
            <button onClick={() => setLang('ar')} style={{ background: lang === 'ar' ? '#8c52ff' : 'none', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>AR</button>
            <button onClick={() => setLang('de')} style={{ background: lang === 'de' ? '#8c52ff' : 'none', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>DE</button>
          </div>

          <div className="avatar" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('profile')}>R</div>
        </header>

        <section className="stats">
          <div className="stat purple">⭐ <h2>{userXP}</h2><p>{t.totalXp}</p></div>
          <div className="stat blue">🎖️ <h2>{userLevel}</h2><p>{t.level}</p></div>
          <div className="stat green">📖 <h2>{mockUserStats.coursesCompleted}</h2><p>{t.completed}</p></div>
          <div className="stat orange">🏆 <h2>{mockUserStats.achievementsCount}</h2><p>{t.achievements}</p></div>
        </section>

        {renderContent()}
      </main>
    </div>
  );
}
