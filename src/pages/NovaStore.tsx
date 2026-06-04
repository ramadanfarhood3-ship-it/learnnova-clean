import { useGame } from '../context/GameContext';

export default function NovaStore() {
  // استدعاء البيانات من الـ Context العالمي
  const { xp, addXP, lang } = useGame();

  // قائمة المنتجات داخل المتجر
  const items = [
    { id: 1, name: { en: 'Dark Theme', ar: 'سمة داكنة', de: 'Dunkles Design' }, price: 100 },
    { id: 2, name: { en: 'Pro Badge', ar: 'شارة محترف', de: 'Pro-Abzeichen' }, price: 250 },
    { id: 3, name: { en: 'Bonus Course', ar: 'كورس إضافي', de: 'Bonus-Kurs' }, price: 500 },
  ];

  // دالة الشراء
  const buyItem = (price: number, itemName: string) => {
    if (xp >= price) {
      addXP(-price); // خصم النقاط
      const successMsg = lang === 'ar' ? `تم شراء: ${itemName}` : `Purchased: ${itemName}`;
      alert(successMsg);
    } else {
      const errorMsg = lang === 'ar' ? "نقاطك غير كافية!" : "Not enough XP!";
      alert(errorMsg);
    }
  };

  return (
    <div className="panel" style={{ padding: '24px', color: '#fff' }}>
      <h2 style={{ marginBottom: '20px' }}>
        {lang === 'ar' ? '🛍️ متجر المكافآت' : '🛍️ Rewards Store'}
      </h2>
      
      <div style={{ marginBottom: '30px', fontSize: '1.2rem', color: '#8c52ff', fontWeight: 'bold' }}>
        {lang === 'ar' ? 'رصيدك الحالي: ' : 'Your Balance: '} 
        {xp} XP
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {items.map((item) => (
          <div key={item.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '16px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '1.1rem' }}>{item.name[lang]}</span>
            <button 
              onClick={() => buyItem(item.price, item.name[lang])}
              style={{ 
                background: '#8c52ff', 
                color: '#fff', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {item.price} XP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
