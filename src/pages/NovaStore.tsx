import { useState } from 'react';

interface NovaStoreProps {
  currentXP: number;
  onSpendXP: (amount: number) => void;
  lang: 'en' | 'ar' | 'de';
}

export default function NovaStore({ currentXP, onSpendXP, lang }: NovaStoreProps) {
  // إدارة المخزون المحلي للميزات المشتراة
  const [inventory, setInventory] = useState({
    streakFreeze: 0,
    aiHint: 2, // يبدأ بـ 2 كهدية ترحيبية
  });

  const [message, setMessage] = useState<string | null>(null);

  // نصوص الترجمة الخاصة بالمتجر
  const storeTexts = {
    en: {
      title: "🛍️ Nova Rewards Store",
      subtitle: "Exchange your hard-earned XP for premium academic boosts and items.",
      balance: "Your Balance:",
      buy: "Purchase",
      owned: "Owned:",
      noXp: "❌ Not enough XP, Ramadan! Keep studying to earn more.",
      success: "🎉 Item purchased successfully! Boost added to your profile.",
      items: [
        { id: 'freeze', title: "🔥 Streak Freeze", desc: "Protect and guard your active daily learning streak from resetting if you miss a day.", cost: 150 },
        { id: 'hint', title: "🧠 AI Quiz Hint", desc: "Unlock a helper token that can eliminate incorrect answers or provide a hint during any live quiz.", cost: 50 }
      ]
    },
    ar: {
      title: "🛍️ متجر مكافآت نوفا",
      subtitle: "استبدل نقاط الـ XP التي جمعتها بميزات وأدوات أكاديمية احترافية.",
      balance: "رصيدك الحالي:",
      buy: "شراء",
      owned: "تمتلك منها:",
      noXp: "❌ رصيد XP غير كافٍ يا رمضان! استمر في الدراسة لجمع المزيد.",
      success: "🎉 تم الشراء بنجاح! تمت إضافة الميزة إلى حسابك.",
      items: [
        { id: 'freeze', title: "🔥 تجميد الأيام المتتالية", desc: "احمِ أيام التوالي الخاصة بك من الضياع أو التصفير إذا تغيبت يوماً عن المذاكرة.", cost: 150 },
        { id: 'hint', title: "🧠 تلميحة الذكاء الاصطناعي", desc: "رمز مساعد يمكنك استخدامه لحذف إجابتين خاطئتين أو الحصول على تلميحة أثناء الاختبار.", cost: 50 }
      ]
    },
    de: {
      title: "🛍️ Nova Belohnungsshop",
      subtitle: "Tausche deine hart verdienten XP gegen Premium-Lern-Boosts und Gegenstände ein.",
      balance: "Dein Guthaben:",
      buy: "Kaufen",
      owned: "Besessen:",
      noXp: "❌ Nicht genug XP, Ramadan! Lerne weiter, um mehr zu verdienen.",
      success: "🎉 Artikel erfolgreich gekauft! Boost zu deinem Profil hinzugefügt.",
      items: [
        { id: 'freeze', title: "🔥 Streak-Freeze", desc: "Schütze deine aktiven täglichen Lernserien vor dem Zurücksetzen, wenn du einen Tag verpasst.", cost: 150 },
        { id: 'hint', title: "🧠 KI-Quiz-Hinweis", desc: "Schalte einen Helfer-Token frei, der falsche Antworten eliminiert oder einen Hinweis gibt.", cost: 50 }
      ]
    }
  };

  const t = storeTexts[lang];

  const handleBuyItem = (id: string, cost: number) => {
    if (currentXP < cost) {
      setMessage(t.noXp);
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    // خصم النقاط من الموجه الرئيسي App.tsx
    onSpendXP(cost);

    // إضافة السلعة للمخزون
    setInventory(prev => ({
      ...prev,
      streakFreeze: id === 'freeze' ? prev.streakFreeze + 1 : prev.streakFreeze,
      aiHint: id === 'hint' ? prev.aiHint + 1 : prev.aiHint
    }));

    setMessage(t.success);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #2f303e' }}>
      
      {/* الهيدر */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2f303e', paddingBottom: '16px', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '20px', margin: 0 }}>{t.title}</h2>
          <p style={{ color: '#7a7a85', fontSize: '13px', marginTop: '4px' }}>{t.subtitle}</p>
        </div>
        <div style={{ background: '#21222d', border: '1px solid #8c52ff', padding: '10px 18px', borderRadius: '12px', textAlign: 'center' }}>
          <small style={{ color: '#7a7a85', display: 'block', fontSize: '11px', fontWeight: 'bold' }}>{t.balance}</small>
          <span style={{ fontSize: '20px', fontWeight: '800', color: '#8c52ff' }}>⭐ {currentXP} XP</span>
        </div>
      </div>

      {/* رسائل التنبيه الذكية */}
      {message && (
        <div style={{ background: message.startsWith('❌') ? 'rgba(244, 67, 54, 0.15)' : 'rgba(76, 175, 80, 0.15)', border: `1px solid ${message.startsWith('❌') ? '#f44336' : '#4caf50'}`, color: '#fff', padding: '14px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px', fontWeight: '600' }}>
          {message}
        </div>
      )}

      {/* شبكة عرض السلع */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {t.items.map((item) => {
          const currentOwned = item.id === 'freeze' ? inventory.streakFreeze : inventory.aiHint;

          return (
            <div key={item.id} style={{ background: '#21222d', border: '1px solid #2f303e', padding: '24px', borderRadius: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '16px', margin: 0 }}>{item.title}</h4>
                  <span style={{ background: '#171821', color: '#8c52ff', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #2f303e' }}>
                    ⭐ {item.cost} XP
                  </span>
                </div>
                <p style={{ color: '#7a7a85', fontSize: '12px', margin: '0 0 16px 0', lineHeight: '1.5' }}>{item.desc}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #171821', paddingTop: '14px', marginTop: '10px' }}>
                <span style={{ fontSize: '12px', color: '#7a7a85' }}>
                  {t.owned} <b>{currentOwned}</b>
                </span>
                <button 
                  onClick={() => handleBuyItem(item.id, item.cost)}
                  style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.1s' }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {t.buy}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
