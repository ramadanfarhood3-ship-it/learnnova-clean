import { useState } from 'react';
import { mockQuizQuestions } from '../data/mockData';

interface QuizProps {
  onEarnXP: (xp: number) => void;
}

export default function Quiz({ onEarnXP }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = mockQuizQuestions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;

    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuestionIndex + 1 < mockQuizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  const handleFinishAndClaim = () => {
    const earnedXP = score * 50;
    onEarnXP(earnedXP); 
    handleRestart();
  };

  if (quizComplete) {
    const earnedXP = score * 50;
    return (
      <div style={{ padding: '24px', background: '#171821', borderRadius: '12px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: '#8c52ff', marginBottom: '16px' }}>🎉 Quiz Completed!</h2>
        <p style={{ fontSize: '18px', marginBottom: '8px' }}>You answered <strong>{score}</strong> out of <strong>{mockQuizQuestions.length}</strong> correctly.</p>
        <p style={{ color: '#4caf50', fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>+{earnedXP} XP Earned!</p>
        <button 
          onClick={handleFinishAndClaim}
          style={{ background: '#4caf50', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}
        >
          Claim XP & Restart
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', background: '#171821', borderRadius: '12px', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b5b5be', marginBottom: '16px', fontSize: '14px' }}>
        <span>Question {currentQuestionIndex + 1} of {mockQuizQuestions.length}</span>
        <span>Score: {score}</span>
      </div>

      <h3 style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.5' }}>{currentQuestion.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {currentQuestion.options.map((option, index) => {
          let backgroundColor = '#21222d';
          let border = '1px solid #2f303e';

          if (selectedOption === index) {
            backgroundColor = '#3d2b5c';
            border = '1px solid #8c52ff';
          }

          if (isAnswered) {
            if (index === currentQuestion.correctAnswer) {
              backgroundColor = '#1b3b22';
              border = '1px solid #4caf50';
            } else if (selectedOption === index) {
              backgroundColor = '#3a1d28';
              border = '1px solid #f44336';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              style={{
                backgroundColor,
                border,
                color: '#fff',
                padding: '14px',
                borderRadius: '8px',
                textAlign: 'left',
                cursor: isAnswered ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '15px'
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {!isAnswered ? (
        <button
          onClick={handleSubmitAnswer}
          disabled={selectedOption === null}
          style={{
            width: '100%',
            background: selectedOption === null ? '#2f303e' : '#8c52ff',
            color: selectedOption === null ? '#7a7a85' : '#fff',
            border: 'none',
            padding: '12px',
            borderRadius: '8px',
            cursor: selectedOption === null ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          style={{
            width: '100%',
            background: '#8c52ff',
            color: '#fff',
            border: 'none',
            padding: '12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          {currentQuestionIndex + 1 === mockQuizQuestions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
}
