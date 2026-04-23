'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

function LangToggle() {
  const { lang, setLang } = useLanguage();
  const isHe = lang === 'he';
  return (
    <div className="relative flex border border-[#3a3a3a] overflow-hidden" style={{ fontSize: '9px' }}>
      <motion.div
        className="absolute top-0 bottom-0 w-1/2 bg-[#c8a96c]/15 border border-[#c8a96c]/50"
        animate={{ x: isHe ? '0%' : '100%' }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <button
        onClick={() => setLang('he')}
        className={`relative z-10 px-3 py-1 font-sans tracking-[0.06em] transition-colors duration-200 ${isHe ? 'text-[#c8a96c]' : 'text-[#a0a09c] hover:text-[#ffffff]'}`}
      >
        עברית
      </button>
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 px-3 py-1 font-sans tracking-[0.06em] transition-colors duration-200 ${!isHe ? 'text-[#c8a96c]' : 'text-[#a0a09c] hover:text-[#ffffff]'}`}
      >
        English
      </button>
    </div>
  );
}

export default function Navigation() {
  const { lang } = useLanguage();
  const isHe = lang === 'he';

  const NAV_LINKS = [
    { href: 'about',    label: isHe ? 'אודות'   : 'About'   },
    { href: 'projects', label: isHe ? 'שירותים' : 'Services' },
    { href: 'process',  label: isHe ? 'תהליך'   : 'Process'  },
  ] as const;

  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen,    setMobileOpen]    = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sectionIds = ['about', 'projects', 'process'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) { current = id; break; }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-[#080808]/85 backdrop-blur-md border-b border-[#1c1c1c]' : 'bg-transparent',
        ].join(' ')}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div
            className={`flex items-center justify-between h-16 lg:h-20 ${!isHe ? 'flex-row-reverse' : ''}`}
            dir="ltr"
          >

            {/* ── Logo ── */}
            <button onClick={scrollToTop} className="flex items-center gap-3 group" aria-label="Go to top">
              <div className="w-8 h-8 border border-[#c8a96c]/60 flex items-center justify-center group-hover:border-[#c8a96c] transition-colors duration-300 flex-shrink-0">
                <span className="font-serif text-[11px] text-[#c8a96c] leading-none select-none tracking-wide">OP</span>
              </div>
              <span className="hidden sm:block font-sans text-[11px] tracking-[0.15em] text-[#ffffff]/80 group-hover:text-[#ffffff] transition-colors duration-300">
                OnePiece Studio
              </span>
            </button>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-8" dir={isHe ? 'rtl' : 'ltr'}>
              <button
                onClick={scrollToTop}
                className="text-[#c8a96c] hover:text-[#ffffff] transition-colors duration-300"
                aria-label={isHe ? 'חזרה לראש הדף' : 'Back to top'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.75z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </button>

              {NAV_LINKS.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={[
                    'relative font-sans text-[11px] tracking-[0.25em] uppercase transition-colors duration-300',
                    activeSection === href ? 'text-[#c8a96c]' : 'text-[#c8c4c0] hover:text-[#ffffff]',
                  ].join(' ')}
                >
                  {label}
                  {activeSection === href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c8a96c]"
                    />
                  )}
                </button>
              ))}

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 border border-[#c8a96c]/50 text-[#c8a96c] font-sans text-[12px] hover:bg-[#c8a96c] hover:border-[#c8a96c] hover:text-[#080808] transition-all duration-300"
              >
                {isHe ? 'צור קשר' : 'Contact'}
              </button>
            </nav>

            {/* ── Mobile: toggle + hamburger ── */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="flex flex-col justify-center gap-[5px] w-8 h-8"
                aria-label="Toggle menu"
              >
                <span className={`block h-px bg-[#e8e2d9] transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'}`} />
                <span className={`block h-px bg-[#e8e2d9] transition-all duration-300 ${mobileOpen ? 'opacity-0 w-4' : 'w-4'}`} />
                <span className={`block h-px bg-[#e8e2d9] transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-6'}`} />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`fixed top-[68px] z-50 bg-[#0e0e0e] border border-[#1e1e1e] shadow-xl shadow-black/60 flex flex-col min-w-[170px] ${isHe ? 'right-4' : 'left-4'}`}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.button
                key={href}
                onClick={() => scrollTo(href)}
                className={`px-6 py-3.5 font-sans text-[12px] tracking-[0.15em] text-[#c8c4c0] hover:text-[#ffffff] hover:bg-[#161616] transition-colors duration-200 border-b border-[#1a1a1a] last:border-b-0 ${isHe ? 'text-right' : 'text-left'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: i * 0.04 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
