import { mockUserStats } from '../data/mockData';

interface ProfileProps {
  currentXP: number;
  currentLevel: number;
}

export default function Profile({ currentXP, currentLevel }: ProfileProps) {
  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #2f303e' }}>
      
      {/* الهيدر وبيانات رمضان الأساسية مع إصلاح التوسيط */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', borderBottom: '1px solid #2f303e', paddingBottom: '32px', marginBottom: '32px' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          background: '#8c52ff', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', // تم إصلاح حرف الـ C الكبير هنا
          fontSize: '36px', 
          fontWeight: 'bold',
          boxShadow: '0 0 20px rgba(140, 82, 255, 0.3)'
        }}>
          {mockUserStats.name[0]}
        </div>
        <div>
          <h2 style={{ fontSize: '26px', margin: 0 }}>{mockUserStats.name} Farhood</h2>
          <p style={{ color: '#7a7a85', fontSize: '14px', marginTop: '4px' }}>Premium Pro Scholar • Active Member</p>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#ff9800', fontWeight: 'bold' }}>🔥 {mockUserStats.streak} Day Streak</div>
        </div>
      </div>

      {/* كروت الإحصائيات الحية المربوطة بالـ State */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ background: '#21222d', padding: '20px', borderRadius: '12px', border: '1px solid #2f303e' }}>
          <h4 style={{ color: '#7a7a85', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>Live Experience</h4>
          <span style={{ fontSize: '28px', fontWeight: '800', color: '#8c52ff' }}>{currentXP} XP</span>
          <p style={{ color: '#7a7a85', fontSize: '12px', marginTop: '6px' }}>Earned safely through quizzes and lessons.</p>
        </div>

        <div style={{ background: '#21222d', padding: '20px', borderRadius: '12px', border: '1px solid #2f303e' }}>
          <h4 style={{ color: '#7a7a85', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>Current Rank Level</h4>
          <span style={{ fontSize: '28px', fontWeight: '800', color: '#2196f3' }}>Lvl {currentLevel}</span>
          <p style={{ color: '#7a7a85', fontSize: '12px', marginTop: '6px' }}>Every 200 XP pushes you to a new tier!</p>
        </div>
      </div>

      {/* قسم خطة التقدم الأسبوعي المضافة لجمالية التصميم */}
      <div>
        <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: '700' }}>Weekly Activity Report</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {mockUserStats.weeklyProgress.map((p, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#21222d', padding: '14px 20px', borderRadius: '10px', border: '1px solid #2f303e' }}>
              <span style={{ fontWeight: 'bold', width: '45px', color: '#fff' }}>{p.day}</span>
              <div style={{ flex: 1, height: '6px', background: '#171821', borderRadius: '3px', margin: '0 24px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min((p.xp / 1000) * 100, 100)}%`, height: '100%', background: '#8c52ff', borderRadius: '3px' }} />
              </div>
              <div style={{ fontSize: '13px', color: '#7a7a85', width: '100px', textAlign: 'right' }}>
                <span style={{ color: '#fff', fontWeight: '600' }}>{p.xp} XP</span> • {p.time}m
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
