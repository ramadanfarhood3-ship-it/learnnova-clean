import React from 'react';
import { mockUserStats } from '../data/mockData';

export default function Profile() {
  return (
    <div style={{ padding: '24px', background: '#171821', borderRadius: '12px', color: '#fff', border: '1px solid #2f303e' }}>
      {/* الهيدر العلوي للملف الشخصي */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px', borderBottom: '1px solid #2f303e', paddingBottom: '24px' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#8c52ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', boxShadow: '0 0 15px rgba(140, 82, 255, 0.4)' }}>
          {mockUserStats.name[0]}
        </div>
        <div>
          <h2 style={{ margin: '0 0 6px 0', fontSize: '24px' }}>{mockUserStats.name}</h2>
          <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: '#7a7a85' }}>
            <span>Level {mockUserStats.level}</span>
            <span>•</span>
            <span style={{ color: '#ff9800' }}>🔥 {mockUserStats.streak} Day Streak</span>
          </div>
        </div>
      </div>

      {/* شبكة الإحصائيات الدائرية والسريعة */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        <div style={{ background: '#21222d', padding: '16px', borderRadius: '12px', border: '1px solid #2f303e' }}>
          <div style={{ fontSize: '13px', color: '#7a7a85', marginBottom: '8px' }}>Total Experience</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#8c52ff' }}>{mockUserStats.xp} XP</div>
        </div>
        <div style={{ background: '#21222d', padding: '16px', borderRadius: '12px', border: '1px solid #2f303e' }}>
          <div style={{ fontSize: '13px', color: '#7a7a85', marginBottom: '8px' }}>Completed Courses</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#4caf50' }}>{mockUserStats.coursesCompleted}</div>
        </div>
        <div style={{ background: '#21222d', padding: '16px', borderRadius: '12px', border: '1px solid #2f303e' }}>
          <div style={{ fontSize: '13px', color: '#7a7a85', marginBottom: '8px' }}>Unlocked Achievements</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#ff9800' }}>{mockUserStats.achievementsCount}</div>
        </div>
      </div>

      {/* تفاصيل تقدم الأسبوع الحالي */}
      <div>
        <h3 style={{ fontSize: '16px', marginBottom: '16px', fontWeight: 'bold' }}>Weekly Activity Report</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {mockUserStats.weeklyProgress.map((p, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#21222d', padding: '12px 16px', borderRadius: '8px' }}>
              <span style={{ fontWeight: 'bold', width: '40px' }}>{p.day}</span>
              <div style={{ flex: 1, height: '6px', background: '#171821', borderRadius: '3px', margin: '0 20px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min((p.xp / 800) * 100, 100)}%`, height: '100%', background: '#8c52ff', borderRadius: '3px' }} />
              </div>
              <div style={{ fontSize: '13px', color: '#b5b5be', textAlign: 'right' }}>
                <span style={{ color: '#fff', fontWeight: '500' }}>{p.xp} XP</span> ({p.time} min)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
