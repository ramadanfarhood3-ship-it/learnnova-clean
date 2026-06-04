import { mockUserStats } from '../data/mockData';

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredXp: number;
  color: string;
}

const allBadges: AchievementItem[] = [
  { id: '1', title: 'First Quiz Master', description: 'Completed your first live evaluation quiz successfully.', icon: '🏅', requiredXp: 100, color: '#4caf50' },
  { id: '2', title: 'XP Century Club', description: 'Accumulated over 100 XP across various academic disciplines.', icon: '💜', requiredXp: 100, color: '#8c52ff' },
  { id: '3', title: 'Elite Scholar Tier', description: 'Crossed the 300 XP threshold to cement your learning consistency.', icon: '💎', requiredXp: 300, color: '#00bcd4' },
  { id: '4', title: 'Ultimate Grandmaster', description: 'Reach a staggering 1000 XP to unlock final academic supremacy.', icon: '👑', requiredXp: 1000, color: '#ff9800' },
];

export default function Achievements() {
  // نعتمد هنا على الـ XP المسجل في الـ mockData للتحقق من فتح الشارة
  const currentXp = mockUserStats.xp;

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #2f303e' }}>
      
      {/* هيدر الصفحة */}
      <div style={{ borderBottom: '1px solid #2f303e', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', margin: 0 }}>🏆 Academic Achievements & Badges</h2>
        <p style={{ color: '#7a7a85', fontSize: '13px', marginTop: '4px' }}>Track your milestone unlocks and claim your bragging rights as you study.</p>
      </div>

      {/* شبكة عرض الشارات الاحترافية */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {allBadges.map((badge) => {
          const isUnlocked = currentXp >= badge.requiredXp;

          return (
            <div 
              key={badge.id} 
              style={{ 
                background: '#21222d', 
                border: `1px solid ${isUnlocked ? badge.color : '#2f303e'}`, 
                padding: '24px', 
                borderRadius: '14px', 
                position: 'relative',
                opacity: isUnlocked ? 1 : 0.6,
                transition: 'transform 0.2s',
                boxShadow: isUnlocked ? `0 4px 14px ${badge.color}15` : 'none'
              }}
            >
              {/* أيقونة القفل أو الشارة */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '36px', filter: isUnlocked ? 'none' : 'grayscale(100%)' }}>
                  {badge.icon}
                </span>
                <span style={{ 
                  fontSize: '11px', 
                  fontWeight: 'bold', 
                  color: isUnlocked ? '#fff' : '#7a7a85', 
                  background: isUnlocked ? badge.color : '#171821', 
                  padding: '4px 10px', 
                  borderRadius: '20px' 
                }}>
                  {isUnlocked ? 'UNLOCKED' : `LOCKED (${badge.requiredXp} XP)`}
                </span>
              </div>

              {/* تفاصيل الشارة */}
              <h4 style={{ fontSize: '16px', margin: '0 0 6px 0', color: isUnlocked ? '#fff' : '#7a7a85' }}>
                {badge.title}
              </h4>
              <p style={{ color: '#7a7a85', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
