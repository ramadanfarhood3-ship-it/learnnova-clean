import { useState } from "react";

interface QuizProps {
  onEarnXP: (amount: number) => void;
}

// بنك الأسئلة الحية للمواد الحالية
const quizQuestions = {
  Mathematik: [
    { q: "What is the value of x if 2x + 5 = 15?", a: ["3", "5", "10", "7"], c: "5" },
    { q: "What is the square root of 144?", a: ["10", "12", "14", "16"], c: "12" }
  ],
  Physik: [
    { q: "What is Newton's First Law also known as?", a: ["Law of Inertia", "Law of Gravity", "Law of Action", "Law of Momentum"], c: "Law of Inertia" }
  ],
  Spanisch: [
    { q: "How do you say 'Thank you' in Spanish?", a: ["Hola", "Adiós", "Gracias", "Por favor"], c: "Gracias" },
    { q: "What does 'Buenos días' mean?", a: ["Good night", "Good morning", "Goodbye", "Please"], c: "Good morning" }
  ],
  Geographie: [
    { q: "Which is the largest continent on Earth?", a: ["Africa", "Europe", "Asia", "North America"], c: "Asia" },
    { q: "What is the capital city of Germany?", a: ["Munich", "Berlin", "Frankfurt", "Hamburg"], c: "Berlin" }
  ]
};

type SubjectType = 'Mathematik' | 'Physik' | 'Spanisch' | 'Geographie';

export default function Quiz({ onEarnXP }: QuizProps) {
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const startQuiz = (subject: SubjectType) => {
    setSelectedSubject(subject);
    setCurrentQuestionIdx(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
  };

  const questions = selectedSubject ? quizQuestions[selectedSubject] : [];

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return; // منع الإجابة المزدوجة
    setSelectedAnswer(answer);
    
    if (answer === questions[currentQuestionIdx].c) {
      setScore((prev) => prev + 1);
      onEarnXP(20); // كسب 20 XP لكل إجابة صحيحة
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (!selectedSubject) {
    return (
      <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #2f303e' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>❔ LearnNova Live Quiz System</h2>
        <p style={{ color: '#7a7a85', fontSize: '14px', marginBottom: '24px' }}>Select a subject below to test your knowledge and challenge yourself to earn XP!</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {(Object.keys(quizQuestions) as SubjectType[]).map((subject) => (
            <button 
              key={subject} 
              onClick={() => startQuiz(subject)}
              style={{ background: '#21222d', color: '#fff', border: '1px solid #2f303e', padding: '20px', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }}
            >
              {subject === 'Mathematik' ? '📐' : subject === 'Physik' ? '⚛️' : subject === 'Spanisch' ? '🇪🇸' : '🌍'} {subject}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #2f303e' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #2f303e', paddingBottom: '16px' }}>
        <h3 style={{ margin: 0 }}>{selectedSubject} Quiz</h3>
        <button onClick={() => setSelectedSubject(null)} style={{ background: 'none', border: 'none', color: '#7a7a85', cursor: 'pointer', fontSize: '14px' }}>← Back to Subjects</button>
      </div>

      {!quizFinished ? (
        <div>
          <div style={{ fontSize: '12px', color: '#8c52ff', fontWeight: 'bold', marginBottom: '8px' }}>QUESTION {currentQuestionIdx + 1} OF {questions.length}</div>
          <h4 style={{ fontSize: '18px', marginBottom: '24px' }}>{questions[currentQuestionIdx].q}</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {questions[currentQuestionIdx].a.map((answer, i) => {
              let btnBg = '#21222d';
              let btnBorder = '#2f303e';
              
              if (selectedAnswer) {
                if (answer === questions[currentQuestionIdx].c) {
                  btnBg = 'rgba(76, 175, 80, 0.2)';
                  btnBorder = '#4caf50';
                } else if (selectedAnswer === answer) {
                  btnBg = 'rgba(244, 67, 54, 0.2)';
                  btnBorder = '#f44336';
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={!!selectedAnswer}
                  style={{ background: btnBg, color: '#fff', border: `1px solid ${btnBorder}`, padding: '16px', borderRadius: '10px', textAlign: 'left', fontSize: '14px', cursor: selectedAnswer ? 'default' : 'pointer', transition: 'all 0.2s' }}
                >
                  {answer}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <button onClick={handleNext} style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', float: 'right' }}>
              {currentQuestionIdx + 1 === questions.length ? 'Finish Quiz' : 'Next Question →'}
            </button>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <span style={{ fontSize: '48px' }}>🎉</span>
          <h3 style={{ fontSize: '22px', marginTop: '12px' }}>Quiz Completed!</h3>
          <p style={{ color: '#7a7a85', marginBottom: '20px' }}>You answered {score} out of {questions.length} questions correctly.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={() => startQuiz(selectedSubject)} style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Retry Quiz</button>
            <button onClick={() => setSelectedSubject(null)} style={{ background: '#21222d', color: '#fff', border: '1px solid #2f303e', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Other Subjects</button>
          </div>
        </div>
      )}
    </div>
  );
}
