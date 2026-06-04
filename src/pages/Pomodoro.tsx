import { useState, useEffect } from 'react';

interface PomodoroProps {
  onCompleteSession: (xp: number) => void;
  lang: 'en' | 'ar' | 'de';
}

export default function Pomodoro({ onCompleteSession, lang }: PomodoroProps) {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState('');

  const t = {
    en: { title: "Deep Focus Session", start: "Start Focus", reset: "Reset", placeholder: "What are you studying?", done: "Session Complete! +20 XP earned." },
    ar: { title: "جلسة التركيز العميق", start: "بدء التركيز", reset: "إعادة تعيين", placeholder: "ماذا ستدرس الآن؟", done: "انتهت الجلسة! حصلت على 20 XP." },
    de: { title: "Deep-Focus-Sitzung", start: "Fokus starten", reset: "Zurücksetzen", placeholder: "Was lernst du gerade?", done: "Sitzung beendet! +20 XP verdient." }
  }[lang];

  useEffect(() => {
    let interval: number;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      onCompleteSession(20);
      
      // نظام الإشعارات الذكي
      if (Notification.permission === "granted") {
        new Notification("LearnNova", { body: t.done });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission();
      }
      
      setTimeLeft(25 * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onCompleteSession, t]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="panel" style={{ textAlign: 'center', padding: '30px', background: '#171821', borderRadius: '16px', border: '1px solid #8c52ff' }}>
      <h2 style={{ color: '#fff', marginBottom: '15px' }}>{t.title}</h2>
      <input 
        placeholder={t.placeholder} 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        style={{ width: '80%', padding: '10px', borderRadius: '8px', border: '1px solid #2f303e', background: '#21222d', color: '#fff', marginBottom: '20px', textAlign: lang === 'ar' ? 'right' : 'left' }}
      />
      <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#8c52ff', margin: '20px 0' }}>
        {formatTime(timeLeft)}
      </div>
      <button 
        onClick={() => setIsActive(!isActive)}
        style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        {isActive ? t.reset : t.start}
      </button>
    </div>
  );
}
