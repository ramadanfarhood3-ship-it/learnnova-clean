import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export default function AICoach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: 'Hello Ramadan! 👋 What would you like to learn or ask about today?',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'Explain photosynthesis 🌿',
    'Help me with algebra 📐',
    'Quiz me on physics ⚛️',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // محاكاة رد الذكاء الاصطناعي بشكل ذكي بعد ثانيتين
    setTimeout(() => {
      let aiResponseText = "That's a great question! Let's break it down step-by-step so you can master it easily.";
      
      if (textToSend.toLowerCase().includes('photosynthesis')) {
        aiResponseText = "Photosynthesis is how plants make food! 🌿 They take in Carbon Dioxide ($CO_2$), Water ($H_2O$), and Sunlight, then convert them into Glucose (energy) and Release Oxygen ($O_2$).";
      } else if (textToSend.toLowerCase().includes('algebra')) {
        aiResponseText = "Algebra is all about finding the missing puzzle piece! 📐 For example, in $2x + 5 = 15$, we subtract 5 to get $2x = 10$, then divide by 2 to find $x = 5$. Ready for a practice problem?";
      } else if (textToSend.toLowerCase().includes('physics')) {
        aiResponseText = "Physics is the study of how the universe behaves! ⚛️ Think of Newton's Laws: An object won't move unless pushed, Force equals mass times acceleration ($F = ma$), and every action has an equal and opposite reaction!";
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '500px', background: '#171821', borderRadius: '12px', border: '1px solid #2f303e', overflow: 'hidden', color: '#fff' }}>
      {/* الهيدر */}
      <div style={{ padding: '16px', background: '#21222d', borderBottom: '1px solid #2f303e', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00e676', boxShadow: '0 0 8px #00e676' }} />
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>AI Coach</h3>
      </div>

      {/* منطقة الرسائل */}
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
            <div style={{
              background: msg.sender === 'user' ? '#8c52ff' : '#21222d',
              padding: '12px 16px',
              borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
              fontSize: '14px',
              lineHeight: '1.5',
              border: msg.sender === 'user' ? 'none' : '1px solid #2f303e'
            }}>
              {msg.text}
            </div>
            <div style={{ fontSize: '10px', color: '#7a7a85', marginTop: '4px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start', background: '#21222d', padding: '12px 16px', borderRadius: '12px 12px 12px 0', border: '1px solid #2f303e', display: 'flex', gap: '4px', alignItems: 'center' }}>
            <div style={{ width: '6px', height: '6px', background: '#8c52ff', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out' }} />
            <div style={{ width: '6px', height: '6px', background: '#8c52ff', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out 0.2s' }} />
            <div style={{ width: '6px', height: '6px', background: '#8c52ff', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out 0.4s' }} />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* اقتراحات الأسئلة */}
      {messages.length === 1 && (
        <div style={{ padding: '0 16px 8px 16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {quickQuestions.map((q, i) => (
            <button key={i} onClick={() => handleSendMessage(q)} style={{ background: '#21222d', border: '1px solid #2f303e', color: '#8c52ff', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', transition: 'all 0.2s' }}>
              {q} →
            </button>
          ))}
        </div>
      )}

      {/* صندوق الإدخال */}
      <div style={{ padding: '12px', background: '#21222d', borderTop: '1px solid #2f303e', display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
          placeholder="Ask your question..."
          style={{ flex: 1, background: '#171821', border: '1px solid #2f303e', borderRadius: '8px', padding: '10px 14px', color: '#fff', fontSize: '14px', outline: 'none' }}
        />
        <button onClick={() => handleSendMessage(inputText)} style={{ background: '#8c52ff', border: 'none', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
          ➔
        </button>
      </div>
    </div>
  );
}
