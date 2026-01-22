
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { Zap, ShieldCheck, Lightbulb, Headphones } from 'lucide-react';

const WhyUs: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const reasons = [
    { title: lang === 'ar' ? 'سرعة التنفيذ' : 'Express Execution', desc: lang === 'ar' ? 'نقدر وقتك، لذلك نوفر أسرع خدمات الصيانة والدعم.' : 'We value your time, providing the fastest repair and support services.', icon: Zap, color: 'bg-yellow-500' },
    { title: lang === 'ar' ? 'خبرة تقنية' : 'Tech Expertise', desc: lang === 'ar' ? 'فريق متخصص بخبرات تزيد عن سنوات في أصعب الحلول.' : 'Dedicated team with years of experience in the toughest tech challenges.', icon: ShieldCheck, color: 'bg-blue-600' },
    { title: lang === 'ar' ? 'حلول مبتكرة' : 'Innovative Solutions', desc: lang === 'ar' ? 'لا نكتفي بالحلول التقليدية، بل نبتكر لك الأفضل.' : 'We don’t settle for traditional solutions; we create the best ones for you.', icon: Lightbulb, color: 'bg-emerald-500' },
    { title: lang === 'ar' ? 'دعم مستمر' : 'Continuous Support', desc: lang === 'ar' ? 'نحن معك دائماً قبل وبعد تقديم الخدمة لضمان رضاك.' : 'We are always with you before and after the service to ensure satisfaction.', icon: Headphones, color: 'bg-purple-600' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 font-tech leading-tight text-white">{t.whyUsTitle}</h2>
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white ${reason.color} shadow-lg shadow-black/40`}>
                    <reason.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{reason.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="Cyber Technology" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
