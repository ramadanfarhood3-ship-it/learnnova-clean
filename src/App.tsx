import { useState } from "react";
import "./App.css";

const courses = [
  { name: "Mathematik", icon: "📐", progress: 82 },
  { name: "Englisch", icon: "🇬🇧", progress: 64 },
  { name: "Deutsch", icon: "📖", progress: 71 },
  { name: "Physik", icon: "⚛️", progress: 45 },
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [xp, setXp] = useState(2450);

  function startQuiz() {
    setXp(xp + 50);
    alert("✅ Richtig! +50 XP");
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className="sidebar">
        <h2>🎓 LearnNova</h2>
        <button>📊 Dashboard</button>
        <button>📚 Kurse</button>
        <button>🏆 Erfolge</button>
        <button>🤖 KI-Coach</button>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </aside>

      <main className="main">
        <header className="hero">
          <h1>Willkommen zurück, Ramadan! 🚀</h1>
          <p>Heute hast du schon 240 XP gesammelt. Mach weiter so!</p>
        </header>

        <section className="stats">
          <div className="card">🏆 <h2>{xp}</h2><p>Gesamt XP</p></div>
          <div className="card">⭐ <h2>15</h2><p>Level</p></div>
          <div className="card">🔥 <h2>12</h2><p>Tage Streak</p></div>
          <div className="card">✅ <h2>87%</h2><p>Erfolgsquote</p></div>
        </section>

        <section>
          <h2>📚 Deine Kurse</h2>
          <div className="course-grid">
            {courses.map((course) => (
              <div className="course" key={course.name}>
                <h3>{course.icon} {course.name}</h3>
                <div className="progress-bar">
                  <div style={{ width: `${course.progress}%` }}></div>
                </div>
                <p>{course.progress}% abgeschlossen</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split">
          <div className="panel">
            <h2>🎯 Quiz</h2>
            <p>Teste dein Wissen und sammle XP.</p>
            <button className="primary" onClick={startQuiz}>
              Quiz starten
            </button>
          </div>

          <div className="panel">
            <h2>🤖 KI-Coach</h2>
            <p>Frage deinen Lernassistenten nach Hilfe.</p>
            <input placeholder="z.B. Erkläre mir Brüche..." />
          </div>
        </section>

        <section>
          <h2>🏆 Achievements</h2>
          <div className="badge-grid">
            <div className="badge">🥇 Erste Übung</div>
            <div className="badge">🔥 7 Tage Streak</div>
            <div className="badge">⭐ 100 XP</div>
            <div className="badge">🎓 Mathe Profi</div>
          </div>
        </section>

        <section>
          <h2>🥇 Leaderboard</h2><section>
  <h2>📅 Lernplan</h2>

  <div className="plan-grid">
    <div className="plan-card">
      <h3>Montag</h3>
      <p>📐 Mathematik - 30 Min</p>
    </div>

    <div className="plan-card">
      <h3>Dienstag</h3>
      <p>🇬🇧 Englisch - 45 Min</p>
    </div>

    <div className="plan-card">
      <h3>Mittwoch</h3>
      <p>⚛️ Physik - 30 Min</p>
    </div>

    <div className="plan-card">
      <h3>Donnerstag</h3>
      <p>📖 Deutsch - 40 Min</p>
    </div>
  </div>
</section>
          <div className="leaderboard">
            <p>1. Anna — 5200 XP</p>
            <p>2. Max — 4800 XP</p>
            <p>3. Ramadan — {xp} XP</p>
          </div>
        </section>
      </main>
    </div>
  );
}