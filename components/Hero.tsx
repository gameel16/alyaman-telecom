
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { ShieldCheck, Cpu, Wifi } from 'lucide-react';

const Hero: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className={isRtl ? 'text-right' : 'text-left'}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-bold mb-6 animate-pulse">
            <Cpu size={16} />
            {lang === 'ar' ? 'المستقبل للتقنية' : 'The Future of Tech'}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {t.heroTitle} <br />
            <span className="gradient-text">ALYAMAN</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {t.heroSub}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-1">
              {lang === 'ar' ? 'استكشف خدماتنا' : 'Explore Services'}
            </a>
            <a href="#contact" className="px-8 py-4 glass border border-slate-700 hover:border-emerald-500 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </a>
          </div>

          <div className="mt-12 flex gap-8 items-center text-slate-500">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-emerald-500 mb-1" />
              <span className="text-xs">{lang === 'ar' ? 'ضمان وأمان' : 'Safe & Secure'}</span>
            </div>
            <div className="flex flex-col items-center">
              <Cpu className="text-blue-500 mb-1" />
              <span className="text-xs">{lang === 'ar' ? 'خبرة تقنية' : 'Expert Tech'}</span>
            </div>
            <div className="flex flex-col items-center">
              <Wifi className="text-emerald-400 mb-1" />
              <span className="text-xs">{lang === 'ar' ? 'شبكة فائقة' : 'Ultra Network'}</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Tech Device" 
              className="rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/20"
            />
            {/* Overlay UI element */}
            <div className="absolute -bottom-10 -right-10 glass p-6 rounded-2xl border border-emerald-500/30 animate-pulse">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm font-bold">{lang === 'ar' ? 'صيانة فورية' : 'Express Repair'}</span>
              </div>
              <div className="h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-4/5"></div>
              </div>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -z-10 top-0 right-0 w-64 h-64 border border-blue-500/20 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute -z-10 bottom-0 left-0 w-80 h-80 border border-emerald-500/20 rounded-full -ml-32 -mb-32"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
