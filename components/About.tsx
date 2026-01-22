
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { History, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const stats = [
    { label: lang === 'ar' ? 'عميل راضٍ' : 'Happy Clients', value: '+10,000', icon: Users, color: 'text-blue-500' },
    { label: lang === 'ar' ? 'جهاز تمت صيانته' : 'Repaired Devices', value: '+5,000', icon: Award, color: 'text-emerald-400' },
    { label: lang === 'ar' ? 'سنة من الخبرة' : 'Years Experience', value: '+8', icon: History, color: 'text-slate-300' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-tech tracking-wider">{t.aboutTitle}</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t.aboutDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl text-center group hover:border-blue-500/50 transition-all transform hover:-translate-y-2">
              <div className={`inline-flex p-4 rounded-xl bg-slate-800/80 mb-6 ${stat.color} transition-transform group-hover:scale-110`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-black mb-2 font-tech text-white">{stat.value}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
