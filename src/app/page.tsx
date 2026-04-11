// All sections are client components — page itself can be a server component
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="bg-[#080808] text-[#e8e2d9] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
