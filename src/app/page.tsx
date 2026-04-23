import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LangFloat from '@/components/LangFloat';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <a href="#main-content" className="skip-nav">דלג לתוכן הראשי</a>
      <main id="main-content" className="bg-[#080808] text-[#e8e2d9] overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Process />
        <Contact />
        <Footer />
        <WhatsAppFloat />
        <LangFloat />
        <AccessibilityMenu />
      </main>
    </LanguageProvider>
  );
}
