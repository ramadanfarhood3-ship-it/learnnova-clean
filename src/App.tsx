import "./App.css";

const courses = [
  ["📐", "Mathematik", "Algebra Basics", 82],
  ["⚛️", "Physik", "Newton's Laws", 64],
  ["💻", "Informatik", "React Basics", 45],
  ["🇬🇧", "Englisch", "Grammar Mastery", 90],
];

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>🦄 LearnNova</h1>
        <button className="active">🏠 Dashboard</button>
        <button>📚 Courses</button>
        <button>❔ Quiz</button>
        <button>🤖 AI Coach</button>
        <button>🏆 Achievements</button>
        <button>📊 Analytics</button>
        <button>👤 Profile</button>

        <div className="streak">🔥 <b>12</b><br />Day Streak</div>
        <div className="pro">⭐ Upgrade to Pro<br /><button>Upgrade Now</button></div>
      </aside>

      <main className="main">
        <header className="top">
          <h2>Welcome back, Ramadan! 👋</h2>
          <input placeholder="Search courses, quizzes..." />
          <div className="avatar">R</div>
        </header>

        <section className="stats">
          <div className="stat purple">⭐ <h2>2450</h2><p>Total XP</p></div>
          <div className="stat blue">🎖️ <h2>12</h2><p>Level</p></div>
          <div className="stat green">📖 <h2>24</h2><p>Courses Completed</p></div>
          <div className="stat orange">🏆 <h2>8</h2><p>Achievements</p></div>
        </section>

        <section className="grid">
          <div className="panel big">
            <h3>📚 Continue Learning</h3>
            <div className="courses">
              {courses.map((c) => (
                <div className="course" key={c[1]}>
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
            <h3>🤖 AI Coach</h3>
            <p>Hello Ramadan! What would you like to learn today?</p>
            <button>Explain photosynthesis →</button>
            <button>Help me with algebra →</button>
            <input placeholder="Ask your question..." />
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
      </main>
    </div>
  );
}