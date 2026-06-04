import { useGame } from '../context/GameContext';

export default function Profile() {
  // استدعاء البيانات الموحدة من الـ Context
  const { xp, level, lang } = useGame();

  return (
    <div className="panel" style={{ textAlign: 'center', padding: '40px' }}>
      <div style={{ fontSize: '80px', marginBottom: '20px' }}>👤</div>
      <h2 style={{ color: '#fff' }}>
        {lang === 'ar' ? 'ملف المستخدم' : 'User Profile'}
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px', 
        marginTop: '30px' 
      }}>
        <div className="panel" style={{ background: 'rgba(140, 82, 255, 0.1)' }}>
          <p style={{ margin: 0, opacity: 0.7 }}>{lang === 'ar' ? 'المستوى' : 'Level'}</p>
          <h3 style={{ fontSize: '2rem', margin: '5px 0' }}>{level}</h3>
        </div>
        <div className="panel" style={{ background: 'rgba(140, 82, 255, 0.1)' }}>
          <p style={{ margin: 0, opacity: 0.7 }}>{lang === 'ar' ? 'إجمالي النقاط' : 'Total XP'}</p>
          <h3 style={{ fontSize: '2rem', margin: '5px 0' }}>{xp}</h3>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button style={{ padding: '10px 30px', borderRadius: '20px', border: '1px solid #8c52ff' }}>
          {lang === 'ar' ? 'تعديل البيانات' : 'Edit Profile'}
        </button>
      </div>
      
    </div>
  );
}
