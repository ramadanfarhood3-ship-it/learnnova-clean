import { useState } from 'react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export default function AICoach() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hello Ramadan! 👋 I am your LearnNova AI Coach. What would you like to learn today?', time: 'Just now' }
  ]);
  const [input, setInput] = useState('');

  // دالة الإرسال المركزية
  const handleSendMessage = (textToSend: string) => {
    const targetText = textToSend.trim();
    if (!targetText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: targetText,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    
    // لو أرسل من حقل الإدخال نقوم بتفريغه
    if (textToSend === input) {
      setInput('');
    }

    // محاكاة رد الذكاء الاصطناعي الذكي سريعاً
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Excellent choice! Regarding your query about "${targetText}", let's break it down deeply. In professional practice, mastering this concept requires solid fundamentals and continuous daily practice. Let me know if you need a practical code example or formula analysis! 🚀`,
        time: 'Just now'
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="panel big" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 160px)', background: '#171821', border: '1px solid #2f303e', borderRadius: '16px', padding: '24px' }}>
      
      {/* الهيدر الخاص بالشات */}
      <div style={{ borderBottom: '1px solid #2f303e', paddingBottom: '16px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '20px', color: '#fff' }}>🤖 AI Coach Chat</h2>
          <p style={{ color: '#7a7a85', fontSize: '13px', marginTop: '4px' }}>Your personal intelligent academic assistant</p>
        </div>
        <span style={{ color: '#8c52ff', fontSize: '12px', background: 'rgba(140, 82, 255, 0.1)', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold' }}>Online</span>
      </div>

      {/* منطقة الرسائل التفاعلية */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '4px', marginBottom: '16px' }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#8c52ff' : '#21222d',
            border: msg.sender === 'user' ? 'none' : '1px solid #2f303e',
            color: '#fff',
            padding: '14px 18px',
            borderRadius: msg.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
            maxWidth: '75%',
            fontSize: '14px',
            lineHeight: '1.5',
            boxShadow: msg.sender === 'user' ? '0 4px 12px rgba(140, 82, 255, 0.2)' : 'none'
          }}>
            <p style={{ margin: 0 }}>{msg.text}</p>
            <span style={{ display: 'block', fontSize: '10px', color: msg.sender === 'user' ? '#e1d5ff' : '#7a7a85', marginTop: '6px', textAlign: 'right' }}>{msg.time}</span>
          </div>
        ))}
      </div>

      {/* الأزرار السريعة المأخوذة من واجهتك الأنيقة لزيادة سرعة التفاعل */}
      {messages.length === 1 && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <button onClick={() => handleSendMessage("Explain photosynthesis")} style={{ background: '#21222d', border: '1px solid #2f303e', color: '#fff', padding: '8px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', transition: 'all 0.2s' }}>
            Explain photosynthesis ↗
          </button>
          <button onClick={() => handleSendMessage("Help me with algebra")} style={{ background: '#21222d', border: '1px solid #2f303e', color: '#fff', padding: '8px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', transition: 'all 0.2s' }}>
            Help me with algebra ↗
          </button>
          <button onClick={() => handleSendMessage("Quiz me on physics")} style={{ background: '#21222d', border: '1px solid #2f303e', color: '#fff', padding: '8px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', transition: 'all 0.2s' }}>
            Quiz me on physics ↗
          </button>
        </div>
      )}

      {/* منطقة الإدخال وزر الإرسال */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
          placeholder="Ask your question..." 
          style={{ flex: 1, background: '#21222d', border: '1px solid #2f303e', color: '#fff', padding: '14px', borderRadius: '12px', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s' }}
          onFocus={(e) => e.target.style.borderColor = '#8c52ff'}
          onBlur={(e) => e.target.style.borderColor = '#2f303e'}
        />
        <button 
          onClick={() => handleSendMessage(input)}
          style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 12px rgba(140, 82, 255, 0.3)', transition: 'transform 0.1s' }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Send
        </button>
      </div>
    </div>
  );
}
