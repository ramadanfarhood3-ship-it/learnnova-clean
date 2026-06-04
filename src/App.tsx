import { useState } from "react";
import "./App.css";
import { translations } from "./data/mockData";
import { useGame } from "./context/GameContext"; 

// استيراد كافة الصفحات
import Pomodoro from "./pages/Pomodoro";
import NovaStore from "./pages/NovaStore";
import Quiz from "./pages/Quiz";
import AICoach from "./pages/AICoach";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics"; 
import CoursesPage from "./pages/Courses";
import Settings from "./pages/Settings";
import Leaderboard from "./pages/Leaderboard";

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { lang, setLang, addXP } = useGame(); // استخراج البيانات من السياق
  const t = translations[lang];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Pomodoro lang={lang} onCompleteSession={addXP} />;
      case 'leaderboard': return <Leaderboard />;
      case 'courses': return <CoursesPage />;
      case 'quiz': return <Quiz />;
      case 'ai-coach': return <AICoach lang={lang} />;
      case 'achievements': return <Achievements />;
      case 'analytics': return <Analytics lang={lang} />;
      case 'profile': return <Profile />;
      case 'settings': return <Settings />;
      case 'store': return <NovaStore />;
      default: return <h2>Under Construction 🛠️</h2>;
    }
  };

  return (
    <div className="app" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <aside className="sidebar">
        <h1>🦄 LearnNova</h1>
        <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>{t.dashboard}</button>
        <button className={activeTab === 'leaderboard' ? 'active' : ''} onClick={() => setActiveTab('leaderboard')}>🏆 Leaderboard</button>
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>{t.courses}</button>
        <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>{t.quiz}</button>
        <button className={activeTab === 'ai-coach' ? 'active' : ''} onClick={() => setActiveTab('ai-coach')}>{t.aiCoach}</button>
        <button className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>{t.analytics}</button>
        <button className={activeTab === 'store' ? 'active' : ''} onClick={() => setActiveTab('store')}>🛍️ Rewards Store</button>
        <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>⚙️ Settings</button>
      </aside>

      <main className="main">
        <header className="top">
          <h2>{t.welcome}</h2>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['en', 'ar', 'de'].map((l) => (
              <button key={l} onClick={() => setLang(l as any)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
}
