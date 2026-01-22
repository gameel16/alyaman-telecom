
import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import AlOstoura from './components/AlOstoura';
import Terms from './components/Terms';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <AlOstoura />
        <Terms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
};

export default App;
