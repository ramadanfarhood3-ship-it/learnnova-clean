import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export default function AICoach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "ai",
      text: "👋 ¡Hola Ramadan! I am your personal AI Academic Coach. Whether you need help with Spanish vocabulary, complex Physics laws, or Geography map memorization, I've got your back! What are we mastering today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // عمل سكرول تلقائي لأسفل الشات عند وصول رسائل جديدة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // قائمة الاقتراحات السريعة للأسئلة
  const suggestions = [
    "Explain Newton's Third Law with examples.",
    "Give me 5 essential Spanish verbs for beginners.",
    "What is the difference between weather and climate?"
  ];

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: textToSend,
      timestamp: userTime
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // محاكاة رد الذكاء الاصطناعي التفاعلي بناءً على السؤال المختار أو المكتوب
    setTimeout(() => {
      let aiResponse = "That's a great academic question, Ramadan! Let's break it down into easy steps so you can ace your next quiz.";
      
      if (textToSend.includes("Newton")) {
        aiResponse = "⚛️ **Newton's Third Law** states that for every action, there is an equal and opposite reaction! For example, when a rocket launches, fire pushes down (action), and the rocket shoots up into space (reaction).";
      } else if (textToSend.includes("Spanish") || textToSend.includes("verbs")) {
        aiResponse = "🇪🇸 Excellent! Here are 5 foundational Spanish verbs:\n1. **Ser / Estar** (To be)\n2. **Hablar** (To speak)\n3. **Tener** (To have)\n4. **Hacer** (To do/make)\n5. **Querer** (To want). Try using them in a sentence!";
      } else if (textToSend.includes("weather") || textToSend.includes("climate")) {
        aiResponse = "🌍 **Weather** refers to short-term atmospheric conditions (like it's raining today in Berlin). **Climate** is the long-term average of weather patterns over 30+ years (like Egypt having a hot, dry climate).";
      }

      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const aiMessage: Message = {
        id: Math.random().toString(),
        sender: "ai",
        text: aiResponse,
        timestamp: aiTime
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #2f303e', height: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column' }}>
      
      {/* هيدر الشات */}
      <div style={{ borderBottom: '1px solid #2f303e', paddingBottom: '12px', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🤖 LearnNova AI Coach</h2>
        <p style={{ color: '#7a7a85', fontSize: '12px', margin: '4px 0 0 0' }}>Instant step-by-step guidance tailored to your active academic course matrix.</p>
      </div>

      {/* منطقة الرسائل */}
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            style={{ 
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '75%',
              background: msg.sender === 'user' ? '#8c52ff' : '#21222d',
              border: msg.sender === 'user' ? 'none' : '1px solid #2f303e',
              padding: '12px 16px',
              borderRadius: msg.sender === 'user' ? '14px 14px 0 14px' : '14px 14px 14px 0',
              color: '#fff',
              fontSize: '14px',
              lineHeight: '1.5',
              whiteSpace: 'pre-line'
            }}
          >
            <div>{msg.text}</div>
            <div style={{ fontSize: '10px', color: msg.sender === 'user' ? 'rgba(255,255,255,0.7)' : '#7a7a85', textAlign: 'right', marginTop: '6px' }}>
              {msg.timestamp}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ alignSelf: 'flex-start', background: '#21222d', border: '1px solid #2f303e', padding: '12px 16px', borderRadius: '14px 14px 14px 0', color: '#7a7a85', fontSize: '13px', italic: 'true' }}>
            AI Coach is thinking... 🧠
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* الأسئلة المقترحة السريعة */}
      {messages.length === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', color: '#7a7a85', fontWeight: 'bold' }}>SUGGESTED TOPICS:</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {suggestions.map((s, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSendMessage(s)}
                style={{ background: '#12131a', color: '#b085ff', border: '1px solid #2f303e', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8c52ff'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2f303e'}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* صندوق الإدخال والإرسال */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Ask your academic coach anything..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
          style={{ flex: 1, background: '#12131a', border: '1px solid #2f303e', color: '#fff', padding: '14px', borderRadius: '10px', fontSize: '14px' }}
        />
        <button 
          onClick={() => handleSendMessage(input)}
          style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '0 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>

    </div>
  );
}
