import { useState, useRef, useEffect } from "react";

// تعريف الـ Props لاستقبال اللغة الحالية من الموجه الرئيسي
interface AICoachProps {
  lang: 'en' | 'ar' | 'de';
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

// قاموس نصوص وترجمات الشات والردود التفاعلية بناءً على اللغة
const aiTranslations = {
  en: {
    welcome: "👋 Hello Ramadan! I am your personal AI Academic Coach. Whether you need help with Spanish vocabulary, complex Physics laws, or Geography map memorization, I've got your back! What are we mastering today?",
    title: "🤖 LearnNova AI Coach",
    subtitle: "Instant step-by-step guidance tailored to your active academic course matrix.",
    typing: "AI Coach is thinking... 🧠",
    suggested: "SUGGESTED TOPICS:",
    placeholder: "Ask your academic coach anything...",
    send: "Send",
    suggestions: [
      "Explain Newton's Third Law with examples.",
      "Give me 5 essential Spanish verbs for beginners.",
      "What is the difference between weather and climate?"
    ],
    responses: {
      default: "That's a great academic question, Ramadan! Let's break it down into easy steps so you can ace your next quiz.",
      newton: "⚛️ **Newton's Third Law** states that for every action, there is an equal and opposite reaction! For example, when a rocket launches, fire pushes down (action), and the rocket shoots up into space (reaction).",
      spanish: "🇪🇸 Excellent! Here are 5 foundational Spanish verbs:\n1. **Ser / Estar** (To be)\n2. **Hablar** (To speak)\n3. **Tener** (To have)\n4. **Hacer** (To do/make)\n5. **Querer** (To want). Try using them in a sentence!",
      geo: "🌍 **Weather** refers to short-term atmospheric conditions (like it's raining today). **Climate** is the long-term average of weather patterns over 30+ years (like having a hot, dry climate)."
    }
  },
  ar: {
    welcome: "👋 أهلاً بك يا رمضان! أنا مدربك الأكاديمي الشخصي بالذكاء الاصطناعي. سواء كنت بحاجة إلى مساعدة في مفردات اللغة الإسبانية، أو قوانين الفيزياء المعقدة، أو حفظ خرائط الجغرافيا، أنا هنا لدعمك! ماذا سنتعلم اليوم؟",
    title: "🤖 مدرب الذكاء الاصطناعي",
    subtitle: "توجيه فوري خطوة بخطوة مصمم خصيصاً ليناسب موادك الدراسية الحالية.",
    typing: "المدرب الذكي يفكر الآن... 🧠",
    suggested: "المواضيع المقترحة:",
    placeholder: "اسأل مدربك الأكاديمي أي شيء...",
    send: "إرسال",
    suggestions: [
      "اشرح قانون نيوتن الثالث مع أمثلة.",
      "أعطني 5 أفعال إسبانية أساسية للمبتدئين.",
      "ما الفرق بين الطقس والمناخ؟"
    ],
    responses: {
      default: "هذا سؤال أكاديمي رائع يا رمضان! دعنا نقوم بتفكيكه إلى خطوات بسيطة لتتمكن من تفوق في اختبارك القادم.",
      newton: "⚛️ **قانون نيوتن الثالث** ينص على أن لكل فعل رد فعل، مساوٍ له في المقدار ومضاد له في الاتجاه! على سبيل المثال، عندما ينطلق الصاروخ، تندفع النيران لأسفل (فعل)، فيندفع الصاروخ لأعلى في الفضاء (رد فعل).",
      spanish: "🇪🇸 ممتاز! إليك 5 أفعال أساسية في اللغة الإسبانية:\n1. **Ser / Estar** (يكون)\n2. **Hablar** (يتحدث)\n3. **Tener** (يملك)\n4. **Hacer** (يفعل/يصنع)\n5. **Querer** (يريد). حاول استخدامها في جملة!",
      geo: "🌍 **الطقس** يشير إلى حالة الجو على المدى القصير (مثل هطول الأمطار اليوم). **المناخ** هو متوسط أنماط الطقس على المدى الطويل لأكثر من 30 عاماً (مثل المناخ الحار والجاف)."
    }
  },
  de: {
    welcome: "👋 Hallo Ramadan! Ich bin dein persönlicher KI-Lerncoach. Egal, ob du Hilfe bei spanischen Vokabeln, komplexen Physikgesetzen oder der Geographie-Karte brauchst, ich bin für dich da! Was lernen wir heute?",
    title: "🤖 KI-Lerncoach",
    subtitle: "Sofortige Schritt-für-Schritt-Anleitung, angepasst an deine aktuellen Kurse.",
    typing: "KI-Coach denkt nach... 🧠",
    suggested: "EMPFOHLENE THEMEN:",
    placeholder: "Frage deinen KI-Coach alles...",
    send: "Senden",
    suggestions: [
      "Erkläre das dritte Newtonsche Gesetz mit Beispielen.",
      "Gib mir 5 wichtige spanische Verben für Anfänger.",
      "Was ist der Unterschied zwischen Wetter und Klima?"
    ],
    responses: {
      default: "Das ist eine großartige akademische Frage, Ramadan! Lass es uns in einfache Schritte unterteilen, damit du dein nächstes Quiz bestehst.",
      newton: "⚛️ **Das dritte Newtonsche Gesetz** besagt: Jede Aktion erzeugt eine gleiche und entgegengesetzte Reaktion! Wenn zum Beispiel eine Rakete startet, drückt das Feuer nach unten (Aktion) und die Rakete fliegt nach oben (Reaktion).",
      spanish: "🇪🇸 Ausgezeichnet! Hier sind 5 grundlegende spanische Verben:\n1. **Ser / Estar** (Sein)\n2. **Hablar** (Sprechen)\n3. **Tener** (Haben)\n4. **Hacer** (Machen/Tun)\n5. **Querer** (Wollen). Versuche, sie in einem Satz zu verwenden!",
      geo: "🌍 **Wetter** bezieht sich auf kurzfristige atmosphärische Bedingungen (wie Regen heute). **Klima** ist der langfristige Durchschnitt von Wettermustern über 30+ Jahre (wie ein heißes, trockenes Klima)."
    }
  }
};

export default function AICoach({ lang }: AICoachProps) {
  const currentText = aiTranslations[lang];

  // إعادة تعيين الشات برسالة الترحيب الصحيحة لغوياً عند تغيير لغة الموقع
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([
      {
        id: "init",
        sender: "ai",
        text: currentText.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [lang]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

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

    // محاكاة الردود الذكية المترجمة بالكامل تلقائياً حسب لغة السؤال المختار
    setTimeout(() => {
      let aiResponse = currentText.responses.default;
      
      const lowerText = textToSend.toLowerCase();
      if (lowerText.includes("newton") || lowerText.includes("نيوتن")) {
        aiResponse = currentText.responses.newton;
      } else if (lowerText.includes("spanish") || lowerText.includes("verbs") || lowerText.includes("إسبانية") || lowerText.includes("spanisch")) {
        aiResponse = currentText.responses.spanish;
      } else if (lowerText.includes("weather") || lowerText.includes("climate") || lowerText.includes("الطقس") || lowerText.includes("المناخ") || lowerText.includes("wetter")) {
        aiResponse = currentText.responses.geo;
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
    }, 1000);
  };

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #2f303e', height: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column' }}>
      
      {/* هيدر الشات */}
      <div style={{ borderBottom: '1px solid #2f303e', paddingBottom: '12px', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>{currentText.title}</h2>
        <p style={{ color: '#7a7a85', fontSize: '12px', margin: '4px 0 0 0' }}>{currentText.subtitle}</p>
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
          <div style={{ alignSelf: 'flex-start', background: '#21222d', border: '1px solid #2f303e', padding: '12px 16px', borderRadius: '14px 14px 14px 0', color: '#7a7a85', fontSize: '13px' }}>
            {currentText.typing}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* الأسئلة المقترحة المترجمة ديناميكياً */}
      {messages.length === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', color: '#7a7a85', fontWeight: 'bold' }}>{currentText.suggested}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {currentText.suggestions.map((s, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSendMessage(s)}
                style={{ background: '#12131a', color: '#b085ff', border: '1px solid #2f303e', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}
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
          placeholder={currentText.placeholder} 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
          style={{ flex: 1, background: '#12131a', border: '1px solid #2f303e', color: '#fff', padding: '14px', borderRadius: '10px', fontSize: '14px' }}
        />
        <button 
          onClick={() => handleSendMessage(input)}
          style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '0 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {currentText.send}
        </button>
      </div>

    </div>
  );
}
