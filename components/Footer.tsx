
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import Logo from './Logo';
import { Code2, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center gap-4">
            <Logo className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter text-white font-tech uppercase">Alyaman</span>
              <span className="text-xs uppercase text-blue-400 font-tech tracking-[0.3em]">Telecom Solutions</span>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-slate-500 font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">{t.nav.services}</a>
            <a href="#ostoura" className="hover:text-blue-400 transition-colors">{t.nav.ostoura}</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</a>
          </nav>
          
          <div className="text-slate-600 text-sm text-center">
            <p className="mb-2">{t.footerText}</p>
            <p>{lang === 'ar' ? 'تم التصميم بكل فخر لليامن تليكوم - حلول المستقبل اليوم' : 'Proudly designed for Alyaman Telecom - Future Solutions Today'}</p>
          </div>

          {/* Developer Signature */}
          <div className="pt-8 border-t border-slate-900 w-full max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{t.developedBy}</span>
              <a 
                href="https://wa.me/967735347777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-3 rounded-2xl glass border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-900/10"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Code2 size={20} />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">جميل داوود</span>
                  <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-1.5">
                      <MessageCircle size={10} className="text-emerald-500" />
                      <span className="text-[10px] text-slate-400 font-mono tracking-tighter">00967735347777</span>
                    </div>
                    <span className="text-[9px] text-emerald-500/80 font-medium mt-0.5">{t.contactRequest}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
