import { useState } from "react";
import "./App.css";

export default function App() {
  const [xp] = useState(2450);
  const [level] = useState(15);
  const [streak] = useState(12);

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 LearnNova</h1>
        <p>Deine intelligente Lernplattform</p>
      </header>

      <section className="stats">
        <div className="card">
          <h2>🏆 XP</h2>
          <p>{xp}</p>
        </div>

        <div className="card">
          <h2>⭐ Level</h2>
          <p>{level}</p>
        </div>

        <div className="card">
          <h2>🔥 Streak</h2>
          <p>{streak} Tage</p>
        </div>
      </section>

      <section className="courses">
        <h2>📚 Kurse</h2>

        <div className="course-grid">
          <div className="course">📐 Mathematik</div>
          <div className="course">🇬🇧 Englisch</div>
          <div className="course">📖 Deutsch</div>
          <div className="course">⚛️ Physik</div>
        </div>
      </section>

      <button className="quiz-btn">
        🎯 Quiz starten
      </button>
    </div>
  );
}
<section className="progress-section">
  <h2>📈 Fortschritt</h2>

  <div className="progress-bar">
    <div className="progress-fill"></div>
  </div>

  <p>75% abgeschlossen</p>
</section>

<section className="achievements">
  <h2>🏆 Achievements</h2>

  <div className="badge-grid">
    <div className="badge">🥇 Erste Übung</div>
    <div className="badge">🔥 7 Tage Streak</div>
    <div className="badge">⭐ 100 XP</div>
    <div className="badge">🎓 Mathematik Profi</div>
  </div>
</section>