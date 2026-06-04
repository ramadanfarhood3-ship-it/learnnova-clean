import { useEffect, useState } from "react";
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

  useEffect(() => {
    const savedXp = localStorage.getItem("learnnova-xp");
    const savedDark = localStorage.getItem("learnnova-dark");

    if (savedXp) setXp(Number(savedXp));
    if (savedDark === "true") setDark(true);
  }, []);

  const level = Math.floor(xp / 200);

  return (
    <div className={dark ? "app dark" : "app"}>
      <aside className="sidebar">
        <h2>🚨 NEW VERSION 🚨</h2>

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
        <header
          className="hero"
          style={{
            background: "red",
            color: "yellow",
            textAlign: "center",
          }}
        >
          <h1>🚨 RAMADAN TEST 999 🚨</h1>
          <p>THIS IS NEW VERSION 999</p>
        </header>

        <section className="stats">
          <div className="card">
            <h2>{xp}</h2>
            <p>XP</p>
          </div>

          <div className="card">
            <h2>{level}</h2>
            <p>Level</p>
          </div>

          <div className="card">
            <h2>12</h2>
            <p>Streak</p>
          </div>

          <div className="card">
            <h2>87%</h2>
            <p>Erfolg</p>
          </div>
        </section>

        <h2>📚 Kurse</h2>

        <div className="course-grid">
          {courses.map((course) => (
            <div className="course" key={course.name}>
              <h3>
                {course.icon} {course.name}
              </h3>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${course.progress}%`,
                  }}
                ></div>
              </div>

              <p>{course.progress}%</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}