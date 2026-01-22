
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import Logo from './Logo';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { lang, toggleLang, isRtl } = useLanguage();
  const t = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.ostoura, href: "#ostoura" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none text-white font-tech uppercase">Alyaman</span>
            <span className="text-[10px] uppercase text-blue-400 font-tech tracking-widest">Telecom</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm">
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 hover:border-blue-500 transition-all text-xs font-medium"
          >
            <Globe size={14} className="text-blue-500" />
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLang} className="p-2 text-slate-300">
            <Globe size={20} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-100">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full glass transition-all duration-300 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-slate-100 border-b border-slate-800 pb-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
