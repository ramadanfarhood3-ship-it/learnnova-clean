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