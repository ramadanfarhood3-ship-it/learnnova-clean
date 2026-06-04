import { useEffect, useState } from "react";
import "./App.css";

const courses = [
  { name: "Mathematik", icon: "📐", progress: 82 },
  { name: "Englisch", icon: "🇬🇧", progress: 64 },
  { name: "Deutsch", icon: "📖", progress: 71 },
  { name: "Physik", icon: "⚛️", progress: 45 },
];

export default function App() {
useEffect(() => {
  const savedXp = localStorage.getItem("learnnova-xp");
  const savedDark = localStorage.getItem("learnnova-dark");

  if (savedXp) setXp(Number(savedXp));
  if (savedDark === "true") setDark(true);
}, []);

useEffect(() => {
  localStorage.setItem("learnnova-xp", String(xp));
}, [xp]);

useEffect(() => {
  localStorage.setItem("learnnova-dark", String(dark));
}, [dark]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const level = Math.floor(xp / 200);

  function startQuiz() {
    setXp(xp + 50);
    alert("✅ Richtig! +50 XP");
  }

  function askAI() {
    if (!question.trim()) return;
    setAnswer(`🤖 Tipp: Für "${question}" solltest du zuerst die Grundlagen wiederholen und danach 3 Übungen machen.`);
    setQuestion("");
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className="sidebar">
        <h2>🎓 LearnNova</h2>

        <div className="profile">
          <div className="avatar">R</div>
          <h3>Ramadan</h3>
          <p>Level {level}</p>
          <p>{xp} XP</p>
        </div>

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
          <h1>🚀 LearnNova Ultra</h1>
          <p>Die intelligente Lernplattform für Schule und Zukunft.</p>
        </header>

        <section className="stats">
          <div className="card">🏆 <h2>{xp}</h2><p>Gesamt XP</p></div>
          <div className="card">⭐ <h2>{level}</h2><p>Level</p></div>
          <div className="card">🔥 <h2>12</h2><p>Tage Streak</p></div>
          <div className="card">✅ <h2>87%</h2><p>Erfolgsquote</p></div>
        </section>

        <section className="daily">
          <h2>🎯 Tagesziel</h2>
          <p>30 Minuten Lernen</p>
          <div className="progress-bar">
            <div style={{ width: "70%" }}></div>
          </div>
          <p>70% geschafft</p>
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
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="z.B. Erkläre mir Brüche..."
            />
            <button className="primary" onClick={askAI}>Fragen</button>
            {answer && <p className="answer">{answer}</p>}
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
          <h2>🥇 Leaderboard</h2>
          <div className="leaderboard">
            <p>1. Anna — 5200 XP</p>
            <p>2. Max — 4800 XP</p>
            <p>3. Ramadan — {xp} XP</p>
          </div>
        </section>

        <section>
          <h2>📅 Lernplan</h2>
          <div className="plan-grid">
            <div className="plan-card">Montag<br />📐 Mathematik</div>
            <div className="plan-card">Dienstag<br />🇬🇧 Englisch</div>
            <div className="plan-card">Mittwoch<br />⚛️ Physik</div>
            <div className="plan-card">Donnerstag<br />📖 Deutsch</div>
          </div>
        </section>
      </main>
    </div>
  );
}