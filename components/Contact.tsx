
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const contactInfo = [
    { 
      label: lang === 'ar' ? 'الموقع' : 'Location', 
      value: lang === 'ar' ? 'المزاحن – أمام مستشفى المزاحن الريفي' : 'Al-Muzahin – In front of Al-Muzahin Rural Hospital',
      icon: MapPin,
      color: 'text-blue-500'
    },
    { 
      label: lang === 'ar' ? 'اتصال مباشر' : 'Direct Call', 
      value: '736817883',
      icon: Phone,
      color: 'text-emerald-400',
      action: 'tel:736817883'
    },
    { 
      label: lang === 'ar' ? 'واتساب' : 'WhatsApp', 
      value: '7833338837',
      icon: MessageSquare,
      color: 'text-green-500',
      action: 'https://wa.me/7833338837'
    },
    { 
      label: lang === 'ar' ? 'ساعات العمل' : 'Working Hours', 
      value: lang === 'ar' ? 'يومياً: 8:00 صباحاً - 10:00 مساءً' : 'Daily: 8:00 AM - 10:00 PM',
      icon: Clock,
      color: 'text-slate-400'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-tech text-white mb-4">{t.contactTitle}</h2>
          <p className="text-slate-400">{lang === 'ar' ? 'لا تتردد في زيارتنا أو التواصل معنا عبر الوسائل المتاحة' : 'Feel free to visit us or contact us through available means'}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border-transparent hover:border-blue-500/30 transition-all">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-800 mb-6 ${info.color}`}>
                  <info.icon size={24} />
                </div>
                <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">{info.label}</h4>
                {info.action ? (
                  <a href={info.action} className="text-xl font-bold text-white hover:text-blue-400 transition-colors block leading-snug">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-xl font-bold text-white leading-snug">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Action Card */}
          <div className="glass p-10 rounded-[3rem] border-blue-500/20 flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-600/5 -z-10"></div>
             <div className="space-y-4">
                <h3 className="text-3xl font-black font-tech text-white leading-tight">
                  {lang === 'ar' ? 'هل لديك مشكلة تقنية؟' : 'Have a Tech Issue?'}
                </h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                  {lang === 'ar' ? 'احصل على استشارة تقنية فورية أو اطلب صيانة لجهازك الآن.' : 'Get instant tech consultation or request a repair for your device now.'}
                </p>
             </div>
             
             <div className="flex flex-col w-full gap-4">
               <a href="https://wa.me/7833338837" className="w-full py-5 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-green-900/20">
                 <MessageSquare size={24} />
                 {lang === 'ar' ? 'راسلنا على واتساب' : 'Chat via WhatsApp'}
               </a>
               <a href="tel:736817883" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20">
                 <Phone size={24} />
                 {lang === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
