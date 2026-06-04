import { useState } from 'react';
import { mockUserStats } from '../data/mockData';

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [academicProtection, setAcademicProtection] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSaveChanges = () => {
    setSaveStatus("Saving changes...");
    
    // محاكاة حفظ التغييرات بنجاح في السيرفر بعد نصف ثانية
    setTimeout(() => {
      setSaveStatus("🚀 Settings saved successfully, Ramadan!");
      
      // إخفاء إشعار النجاح بعد 3 ثوانٍ تلقائياً
      setTimeout(() => {
        setSaveStatus(null);
      }, 3000);
    }, 600);
  };

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #2f303e' }}>
      
      {/* هيدر صفحة الإعدادات */}
      <div style={{ borderBottom: '1px solid #2f303e', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', margin: 0 }}>⚙️ System Settings</h2>
        <p style={{ color: '#7a7a85', fontSize: '13px', marginTop: '4px' }}>Configure your LearnNova workspace profile, notifications, and core security.</p>
      </div>

      {/* نموذج التعديل */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* حقل الاسم المقفل للبروفايل الحقيقي */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', color: '#7a7a85', marginBottom: '8px', fontWeight: 'bold' }}>PROFILE NAME</label>
          <input 
            type="text" 
            value={`${mockUserStats.name} Farhood`} 
            disabled 
            style={{ width: '100%', maxWidth: '400px', background: '#21222d', border: '1px solid #2f303e', color: '#7a7a85', padding: '12px 16px', borderRadius: '10px', fontSize: '14px', cursor: 'not-allowed' }}
          />
          <small style={{ display: 'block', color: '#555663', fontSize: '12px', marginTop: '4px' }}>To modify your registered scholar name, contact premium support.</small>
        </div>

        {/* خيار التنبيهات التفاعلي */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#21222d', border: '1px solid #2f303e', padding: '16px 20px', borderRadius: '12px', maxWidth: '600px' }}>
          <div>
            <h4 style={{ margin: 0, fontSize: '15px' }}>Email Notifications</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#7a7a85' }}>Receive dynamic weekly progress analytics and milestone badges via your inbox.</p>
          </div>
          <input 
            type="checkbox" 
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
            style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#8c52ff' }}
          />
        </div>

        {/* خيار الحماية الأكاديمية التفاعلي */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#21222d', border: '1px solid #2f303e', padding: '16px 20px', borderRadius: '12px', maxWidth: '600px' }}>
          <div>
            <h4 style={{ margin: 0, fontSize: '15px' }}>Academic Protection Mode</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#7a7a85' }}>Freeze and guard your active daily hot streak during holidays or exam breaks.</p>
          </div>
          <input 
            type="checkbox" 
            checked={academicProtection}
            onChange={(e) => setAcademicProtection(e.target.checked)}
            style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#8c52ff' }}
          />
        </div>

        {/* زر الحفظ والإشعارات الذكية */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
          <button 
            onClick={handleSaveChanges}
            style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(140, 82, 255, 0.3)', transition: 'transform 0.1s' }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Save Configuration
          </button>

          {saveStatus && (
            <span style={{ fontSize: '14px', fontWeight: '600', color: saveStatus.startsWith('🚀') ? '#4caf50' : '#8c52ff' }}>
              {saveStatus}
            </span>
          )}
        </div>

      </div>

    </div>
  );
}
