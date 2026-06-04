import { useState } from 'react';

interface AnalyticsProps {
  lang: 'en' | 'ar' | 'de';
}

export default function Analytics({ lang }: AnalyticsProps) {
  // محاكاة بيانات فجوات المعرفة لكل مادة دراسية
  const skillGaps = {
    en: {
      title: "📊 AI Skill Gap Analysis",
      subtitle: "Our AI engine analyzes your quiz performance to pinpoint exactly what you need to study next.",
      strength: "Strength",
      weakness: "Knowledge Gap",
      recommendation: "AI Recommendation",
      data: [
        { subject: "📐 Mathematik", progress: 82, strong: "Linear Equations", gap: "Quadratic Functions & Roots", advice: "Spend 15 minutes reviewing fractional exponents before trying the next Algebra Quiz." },
        { subject: "⚛️ Physik", progress: 64, strong: "Newton's First Law (Inertia)", gap: "Vector Calculations (Force)", advice: "Your conceptual logic is strong, but you need to practice breaking down diagonal force vectors." },
        { subject: "🇪🇸 Spanisch", progress: 30, strong: "Basic Greetings", gap: "Irregular Verbs (Ser/Estar)", advice: "Practice conjugating 'Yo soy' vs 'Yo estoy' today. Use the AI Coach for quick dialogue drill sentences!" },
        { subject: "🌍 Geographie", progress: 15, strong: "Continent Identification", gap: "Climate Zone Thresholds", advice: "Look over the difference between tropical and subtropical climate characteristics." }
      ]
    },
    ar: {
      title: "📊 تحليل فجوات المعرفة بالذكاء الاصطناعي",
      subtitle: "يقوم محرك الذكاء الاصطناعي بتحليل أدائك في الاختبارات لتحديد ما تحتاج إلى دراسته بدقة.",
      strength: "نقطة القوة الرئيسية",
      weakness: "الفجوة المعرفية (نقطة الضعف)",
      recommendation: "توصية الذكاء الاصطناعي",
      data: [
        { subject: "📐 الرياضيات", progress: 82, strong: "المعادلات الخطية", gap: "الدوال التربيعية والجذور", advice: "قضِ 15 دقيقة في مراجعة الأسس الكسرية قبل محاولة حل اختبار الجبر القادم." },
        { subject: "⚛️ الفيزياء", progress: 64, strong: "قانون نيوتن الأول (القصور الذاتي)", gap: "حسابات المتجهات (القوة)", advice: "منطقك المفاهيمي قوي جداً، لكنك تحتاج إلى التدرب على تفكيك متجهات القوة المائلة." },
        { subject: "🇪🇸 الإسبانية", progress: 30, strong: "التحيات الأساسية", gap: "الأفعال الشاذة (Ser/Estar)", advice: "تدرب على تصريف 'Yo soy' مقابل 'Yo estoy' اليوم. استخدم الكوتش الذكي ليعطيك جمل تدريبية حية!" },
        { subject: "🌍 الجغرافيا", progress: 15, strong: "تحديد القارات على الخريطة", gap: "خصائص ونطاقات المناطق المناخية", advice: "راجع الفروق الجوهرية بين خصائص المناخ الاستوائي والمناخ شبه الاستوائي." }
      ]
    },
    de: {
      title: "📊 KI-Wissenslücken-Analyse",
      subtitle: "Unsere KI analysiert deine Quizleistung, um genau herauszufinden, was du als Nächstes lernen musst.",
      strength: "Stärke",
      weakness: "Wissenslücke",
      recommendation: "KI-Empfehlung",
      data: [
        { subject: "📐 Mathematik", progress: 82, strong: "Lineare Gleichungen", gap: "Quadratische Funktionen & Wurzeln", advice: "Nimm dir 15 Minuten Zeit, um gebrochene Exponenten zu wiederholen, bevor du das nächste Algebra-Quiz machst." },
        { subject: "⚛️ Physik", progress: 64, strong: "Newtons erstes Gesetz (Trägheit)", gap: "Vektorberechnungen (Kraft)", advice: "Deine konzeptionelle Logik ist stark, aber du musst das Zerlegen von diagonalen Kraftvektoren üben." },
        { subject: "🇪🇸 Spanisch", progress: 30, strong: "Grundlegende Begrüßungen", gap: "Unregelmäßige Verben (Ser/Estar)", advice: "Übe heute die Konjugation von 'Yo soy' vs. 'Yo estoy'. Nutze den KI-Coach für schnelle Dialog-Übungssätze!" },
        { subject: "🌍 Geographie", progress: 15, strong: "Kontinent-Identifikation", gap: "Klimazonenschwellenwerte", advice: "Schaue dir den Unterschied zwischen tropischen und subtropischen Klimamerkmalen an." }
      ]
    }
  };

  const t = skillGaps[lang];

  return (
    <div className="panel big" style={{ background: '#171821', color: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #2f303e' }}>
      
      {/* هيدر الصفحة */}
      <div style={{ borderBottom: '1px solid #2f303e', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', margin: 0 }}>{t.title}</h2>
        <p style={{ color: '#7a7a85', fontSize: '13px', marginTop: '4px' }}>{t.subtitle}</p>
      </div>

      {/* قائمة المواد وتحليلاتها الذكية */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {t.data.map((item, index) => (
          <div key={index} style={{ background: '#21222d', border: '1px solid #2f303e', padding: '20px', borderRadius: '14px' }}>
            
            {/* عنوان المادة ونسبة التقدم السجلية */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h4 style={{ fontSize: '16px', margin: 0, fontWeight: '700' }}>{item.subject}</h4>
              <span style={{ color: '#8c52ff', fontWeight: 'bold', fontSize: '14px' }}>{item.progress}% Mastered</span>
            </div>

            {/* تفاصيل القوة والضعف */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '14px' }}>
              <div style={{ background: 'rgba(76, 175, 80, 0.05)', border: '1px solid rgba(76, 175, 80, 0.2)', padding: '12px 16px', borderRadius: '10px' }}>
                <small style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '11px', display: 'block', marginBottom: '4px' }}>{t.strength.toUpperCase()}</small>
                <span style={{ fontSize: '13px' }}>{item.strong}</span>
              </div>
              <div style={{ background: 'rgba(244, 67, 54, 0.05)', border: '1px solid rgba(244, 67, 54, 0.2)', padding: '12px 16px', borderRadius: '10px' }}>
                <small style={{ color: '#f44336', fontWeight: 'bold', fontSize: '11px', display: 'block', marginBottom: '4px' }}>{t.weakness.toUpperCase()}</small>
                <span style={{ fontSize: '13px' }}>{item.gap}</span>
              </div>
            </div>

            {/* صندوق التوصية المخصصة من الذكاء الاصطناعي */}
            <div style={{ background: '#171821', borderLeft: lang === 'ar' ? 'none' : '3px solid #8c52ff', borderRight: lang === 'ar' ? '3px solid #8c52ff' : 'none', padding: '12px 16px', borderRadius: '6px' }}>
              <small style={{ color: '#b085ff', fontWeight: 'bold', fontSize: '11px', display: 'block', marginBottom: '2px' }}>💡 {t.recommendation.toUpperCase()}</small>
              <p style={{ margin: 0, fontSize: '13px', color: '#ccc', lineHeight: '1.5' }}>{item.advice}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
