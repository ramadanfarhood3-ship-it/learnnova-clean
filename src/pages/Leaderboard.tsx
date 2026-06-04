import { useState } from 'react';

// بيانات وهمية للتجربة (سنربطها بقاعدة البيانات لاحقاً)
const initialUsers = [
  { id: 1, name: "Ramadan", xp: 1250, avatar: "👑" },
  { id: 2, name: "Sara", xp: 1100, avatar: "✨" },
  { id: 3, name: "Ahmed", xp: 950, avatar: "🔥" },
  { id: 4, name: "Layla", xp: 800, avatar: "⚡" },
];

export default function Leaderboard() {
  const [users] = useState([...initialUsers].sort((a, b) => b.xp - a.xp));

  return (
    <div className="panel">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🏆 Global Leaderboard</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {users.map((user, index) => (
          <div key={user.id} style={{ 
            display: 'flex', alignItems: 'center', gap: '15px', 
            padding: '15px', background: index === 0 ? 'rgba(140, 82, 255, 0.2)' : 'rgba(255,255,255,0.05)',
            borderRadius: '12px', border: index === 0 ? '1px solid #8c52ff' : 'none'
          }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>#{index + 1}</span>
            <span style={{ fontSize: '24px' }}>{user.avatar}</span>
            <span style={{ flex: 1, fontWeight: 'bold' }}>{user.name}</span>
            <span style={{ color: '#8c52ff', fontWeight: 'bold' }}>{user.xp} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
