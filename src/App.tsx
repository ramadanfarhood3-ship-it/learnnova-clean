import { useState } from "react";

const courses = [
  { id: 1, name: "Mathematik", icon: "📐", xp: 150 },
  { id: 2, name: "Englisch", icon: "🇬🇧", xp: 120 },
  { id: 3, name: "Physik", icon: "⚛️", xp: 180 },
  { id: 4, name: "Deutsch", icon: "📖", xp: 140 },
];

export default function App() {
  const [xp, setXp] = useState(2450);
  const [level] = useState(15);
  const [darkMode, setDarkMode] = useState(true);

  const startQuiz = () => {
    setXp((prev) => prev + 50);
    alert("✅ +50 XP");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "#f8fafc",
        color: darkMode ? "white" : "#111827",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h1>✨ LearnNova Ultra</h1>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <h2>Willkommen zurück! 🚀</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <h3>{xp}</h3>
          <p>XP</p>
        </div>

        <div>
          <h3>{level}</h3>
          <p>Level</p>
        </div>

        <div>
          <h3>87%</h3>
          <p>Erfolgsquote</p>
        </div>

        <div>
          <h3>🔥 7</h3>
          <p>Streak</p>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>📚 Kurse</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "15px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              background: "#1e293b",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>
              {course.icon} {course.name}
            </h3>

            <p>+{course.xp} XP</p>

            <button onClick={startQuiz}>
              🎯 Quiz starten
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>🏆 Achievements</h2>

      <div style={{ fontSize: "40px" }}>
        🥇 ⭐ 🔥 🎓 🏆
      </div>
    </div>
  );
}