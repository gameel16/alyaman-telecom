
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { Smartphone, ShieldAlert, Wifi, Tv, Gamepad2, Router, HardDrive, SmartphoneNfc } from 'lucide-react';

const Services: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const categories = [
    {
      title: lang === 'ar' ? 'صيانة وبرمجة' : 'Repair & Software',
      services: [
        { icon: Smartphone, name: lang === 'ar' ? 'صيانة هواتف ذكية (Android / iPhone)' : 'Android & iPhone Repair' },
        { icon: HardDrive, name: lang === 'ar' ? 'صيانة الأجهزة الإلكترونية الشاملة' : 'General Electronics Repair' },
        { icon: ShieldAlert, name: lang === 'ar' ? 'تخطي حماية FRP و KG Lock' : 'FRP & KG Lock Bypass' },
        { icon: SmartphoneNfc, name: lang === 'ar' ? 'حلول برمجية متقدمة' : 'Advanced Software Solutions' }
      ]
    },
    {
      title: lang === 'ar' ? 'شبكات وإنترنت' : 'Networks & Internet',
      services: [
        { icon: Router, name: lang === 'ar' ? 'صيانة وبرمجة شبكات WiFi' : 'WiFi Repair & Programming' },
        { icon: Wifi, name: lang === 'ar' ? 'حلول مبتكرة للشبكات اللاسلكية' : 'Innovative Wireless Solutions' },
        { icon: Wifi, name: lang === 'ar' ? 'توصيل إنترنت مجاني للمنازل' : 'Free Home Internet Connection' },
        { icon: Router, name: lang === 'ar' ? 'تغطية واسعة واستقرار فائق' : 'Wide Coverage & Stability' }
      ]
    },
    {
      title: lang === 'ar' ? 'شحن وخدمات رقمية' : 'Digital Services',
      services: [
        { icon: Gamepad2, name: lang === 'ar' ? 'شحن شدّات PUBG موبايل' : 'PUBG Mobile UC Top-up' },
        { icon: Tv, name: lang === 'ar' ? 'تعبئة المسلسلات والأفلام' : 'Movies & Series Loading' },
        { icon: Smartphone, name: lang === 'ar' ? 'شحن رصيد وكروت' : 'Top-up & Vouchers' },
        { icon: ShieldAlert, name: lang === 'ar' ? 'حماية وأمان الحسابات' : 'Account Security' }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-tech text-white inline-block relative">
            {t.servicesTitle}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-emerald-400">
                <span className="w-8 h-1 bg-emerald-400 rounded-full"></span>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.services.map((service, sIdx) => (
                  <div key={sIdx} className="glass group p-5 rounded-2xl hover:bg-slate-800/40 transition-all cursor-default border-transparent hover:border-blue-500/20">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <service.icon size={24} />
                      </div>
                      <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{service.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
