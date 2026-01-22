
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { Wifi, Signal, Globe2, ShieldCheck, Zap } from 'lucide-react';

const AlOstoura: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const features = [
    { title: lang === 'ar' ? 'سرعات فائقة' : 'Ultra Speed', icon: Zap },
    { title: lang === 'ar' ? 'تغطية شاملة' : 'Full Coverage', icon: Signal },
    { title: lang === 'ar' ? 'استقرار دائم' : 'Always Stable', icon: Globe2 },
    { title: lang === 'ar' ? 'حماية البيانات' : 'Data Protection', icon: ShieldCheck },
  ];

  return (
    <section id="ostoura" className="py-24 bg-gradient-to-b from-blue-950/20 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="glass p-12 rounded-[2.5rem] border-blue-500/20 relative overflow-hidden">
          {/* Decorative background image with low opacity */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <img 
              src="https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Network Background"
             />
          </div>
          
          {/* Decorative radial background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-bold mb-6">
                {lang === 'ar' ? 'خدمة حصرية' : 'Exclusive Service'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-tech tracking-tighter text-white">
                {t.ostouraTitle}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                {lang === 'ar' 
                  ? 'نقدم لكم أقوى خدمة إنترنت لاسلكي في المنطقة. تمتع ببث المسلسلات، الألعاب الأونلاين، والتصفح السريع بدون انقطاع مع شبكة الأسطورة المدعومة بأحدث تقنيات البث.' 
                  : 'We offer you the strongest wireless internet service in the region. Enjoy streaming, online gaming, and fast browsing without interruption with the Al-Ostoura network.'}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    <f.icon className="text-blue-500" size={20} />
                    <span className="font-bold text-slate-200">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="w-16 h-16 bg-blue-600 rounded-full absolute -top-8 blur-lg"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-10 rounded-full glass border border-blue-500/40 w-48 h-48 md:w-64 md:h-64 flex flex-col justify-center items-center gap-2">
                    <Wifi size={48} className="text-white animate-pulse" />
                    <span className="text-2xl font-bold font-tech text-blue-400">5G READY</span>
                    <span className="text-[10px] text-slate-500 font-tech tracking-widest uppercase">High Speed Link</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlOstoura;
