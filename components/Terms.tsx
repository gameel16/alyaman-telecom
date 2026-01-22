
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

const Terms: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = translations[lang];

  const conditionsAr = [
    "الأجهزة والتمديدات المقدمة للمنزل مجانية بالكامل.",
    "يلتزم العميل بالحفاظ التام على الأجهزة من التلف أو العبث.",
    "أي عطل ناتج عن سوء الاستخدام يتحمله العميل.",
    "الخدمة متاحة في نطاق تغطية شبكة اليامن تليكوم المعتمدة.",
    "يحق للمحل استعادة الأجهزة في حال الإخلال بالشروط المتفق عليها."
  ];

  const conditionsEn = [
    "Devices and cabling provided to the home are completely free.",
    "The customer is committed to maintaining the devices from damage or tampering.",
    "Any failure resulting from misuse is the customer's responsibility.",
    "The service is available within the approved Alyaman Telecom coverage area.",
    "The store has the right to recover devices in case of breach of agreed terms."
  ];

  const conditions = lang === 'ar' ? conditionsAr : conditionsEn;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass border-emerald-500/30 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-emerald-900/10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 w-24 h-24 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500">
              <FileText size={48} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 font-tech text-white">{t.termsTitle}</h2>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl mb-8 flex items-start gap-3">
                <AlertTriangle className="text-emerald-500 shrink-0 mt-1" size={20} />
                <p className="text-emerald-300 text-sm font-bold">
                  {lang === 'ar' 
                    ? 'يرجى قراءة شروط الالتزام الخاصة بخدمة الإنترنت المجاني للأجهزة والتمديدات.' 
                    : 'Please read the commitment terms for the free home internet device service.'}
                </p>
              </div>
              
              <div className="space-y-4">
                {conditions.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                    <p className="text-slate-300 text-lg">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-700 italic text-slate-400 text-sm">
                {lang === 'ar' 
                  ? 'هذه المبادرة تأتي ضمن سعي اليامن تليكوم لتوفير أفضل سبل الاتصال لمجتمعنا.' 
                  : 'This initiative is part of Alyaman Telecom\'s effort to provide the best communication means for our community.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
