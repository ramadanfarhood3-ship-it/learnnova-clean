import { useState } from "react";
import "./App.css";

// الاستيرادات الأساسية
import { mockUserStats, translations } from "./data/mockData";
import Quiz from "./pages/Quiz";
import AICoach from "./pages/AICoach";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics"; 
import CoursesPage from "./pages/Courses";
import Settings from "./pages/Settings";
import NovaStore from "./pages/NovaStore";
import Pomodoro from "./pages/Pomodoro"; // استيراد عداد التركيز

const courses = [
  ["📐", "Mathematik", "Algebra Basics", 82],
  ["⚛️", "Physik", "Newton's Laws", 64],
  ["💻", "Informatik", "React Basics", 45],
  ["🇪🇸", "Spanisch", "Vocabulary & Basics", 30], 
  ["🌍", "Geographie", "World Map & Climates", 15], 
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'courses' | 'quiz' | 'ai-coach' | 'achievements' | 'analytics' | 'profile' | 'settings' | 'store'>('dashboard');
  
  const [lang, setLang] = useState<'en' | 'ar' | 'de'>('en');
  const t = translations[lang];

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

  const handleSpendXP = (amount: number) => {
    setUserXP((prevXP) => Math.max(0, prevXP - amount));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <section className="grid">
            {/* إضافة عداد بومودورو في بداية الداشبورد */}
            <div className="panel full-width">
              <Pomodoro lang={lang} onCompleteSession={handleEarnXP} />
            </div>

            <div className="panel big">
              <h3>{t.continue}</h3>
              <div className="courses">
                {courses.map((c) => (
                  <div className="course" key={c[1].toString()}>
                    <div className="icon">{c[0]}</div>
                    <p>{c[1]}</p>
                    <h3>{c[2]}</h3>
                    <div className="bar"><span style={{ width: `${c[3]}%` }} /></div>
                    <small>{c[3]}%</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel coach">
              <h3>{t.quickPanel}</h3>
              <p>Hello Ramadan! What would you like to learn today?</p>
              <button onClick={() => handleEarnXP(50)}>Explain photosynthesis → (+50 XP)</button>
              <button onClick={() => handleEarnXP(50)}>Help me with algebra → (+50 XP)</button>
              <input placeholder={t.ask} onKeyDown={(e) => e.key === 'Enter' && setActiveTab('ai-coach')} />
            </div>
          </section>
        );
      case 'courses': return <CoursesPage />;
      case 'quiz': return <Quiz onEarnXP={handleEarnXP} />;
      case 'ai-coach': return <AICoach lang={lang} />;
      case 'achievements': return <Achievements />;
      case 'analytics': return <Analytics lang={lang} />;
      case 'profile': return <Profile currentXP={userXP} currentLevel={userLevel} />;
      case 'settings': return <Settings />;
      case 'store': return <NovaStore currentXP={userXP} onSpendXP={handleSpendXP} lang={lang} />;
      default: return <div style={{ padding: '24px', color: '#7a7a85', textAlign: 'center' }}><h2>Under Construction 🛠️</h2></div>;
    }
  };

  return (
    <div className="app" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <aside className="sidebar" style={{ left: lang === 'ar' ? 'auto' : 0, right: lang === 'ar' ? 0 : 'auto' }}>
        <h1>🦄 LearnNova</h1>
        <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>{t.dashboard}</button>
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>{t.courses}</button>
        <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>{t.quiz}</button>
        <button className={activeTab === 'ai-coach' ? 'active' : ''} onClick={() => setActiveTab('ai-coach')}>{t.aiCoach}</button>
        <button className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>{t.analytics}</button>
        <button className={activeTab === 'store' ? 'active' : ''} onClick={() => setActiveTab('store')}>🛍️ Rewards Store</button>
        <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>

        <div className="streak">🔥 <b>{mockUserStats.streak}</b><br />{t.streak}</div>
      </aside>

      <main className="main" style={{ marginLeft: lang === 'ar' ? 0 : '260px', marginRight: lang === 'ar' ? '260px' : 0 }}>
        <header className="top">
          <div><h2>{t.welcome}</h2></div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button onClick={() => setLang('en')}>EN</button>
            <button onClick={() => setLang('ar')}>AR</button>
            <button onClick={() => setLang('de')}>DE</button>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
}
