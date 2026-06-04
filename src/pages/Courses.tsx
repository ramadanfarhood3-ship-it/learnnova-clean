import { mockContinueLearning, mockRecommendedCourses } from '../data/mockData';

export default function Courses() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. قسم المواد الحالية */}
      <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #2f303e' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>📚 Enrolled Courses</h3>
        <p style={{ color: '#7a7a85', fontSize: '13px', marginBottom: '20px' }}>Your ongoing academic and technical studies.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mockContinueLearning.map((course) => (
            <div key={course.id} style={{ background: '#21222d', border: '1px solid #2f303e', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#8c52ff', background: 'rgba(140, 82, 255, 0.1)', padding: '4px 8px', borderRadius: '6px', fontWeight: 'bold' }}>{course.category}</span>
                <h4 style={{ fontSize: '16px', margin: '8px 0 0 0' }}>{course.title}</h4>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '120px', height: '6px', background: '#171821', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', background: '#8c52ff' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 'bold', width: '40px', textAlign: 'right' }}>{course.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. قسم المواد المقترحة من LearnNova */}
      <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #2f303e' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>✨ Recommended for You</h3>
        <p style={{ color: '#7a7a85', fontSize: '13px', marginBottom: '20px' }}>Expand your horizon with these personalized high-demand topics.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {mockRecommendedCourses.map((rec) => (
            <div key={rec.id} style={{ background: '#21222d', border: '1px solid #2f303e', padding: '20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '140px' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#2196f3', background: 'rgba(33, 150, 243, 0.1)', padding: '4px 8px', borderRadius: '6px', fontWeight: 'bold' }}>{rec.category}</span>
                <h4 style={{ fontSize: '15px', margin: '12px 0 0 0', lineHeight: '1.4' }}>{rec.title}</h4>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #171821', paddingTop: '12px' }}>
                <span style={{ fontSize: '12px', color: '#7a7a85' }}>{rec.lessonsCount} Lessons</span>
                <button style={{ background: '#8c52ff', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>Enroll</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
