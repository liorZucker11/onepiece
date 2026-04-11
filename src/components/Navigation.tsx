'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// REPLACE: Update labels and href IDs to match your section names if you rename them
const NAV_LINKS = [
  { href: 'about',    label: 'אודות'    },
  { href: 'services', label: 'שירותים' },
  { href: 'projects', label: 'פרויקטים' },
  { href: 'process',  label: 'תהליך'   },
  { href: 'contact',  label: 'צור קשר' },
] as const;

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group" aria-label="Go to top">
      {/* Logo: OP in a square */}
      <div className="w-8 h-8 border border-[#c8a96c]/60 flex items-center justify-center group-hover:border-[#c8a96c] transition-colors duration-300 flex-shrink-0">
        <span className="font-serif text-[11px] text-[#c8a96c] leading-none select-none tracking-wide">OP</span>
      </div>

      {/* REPLACE: Your studio name */}
      <span className="hidden sm:block font-sans text-[11px] tracking-[0.15em] text-[#e8e2d9]/80 group-hover:text-[#e8e2d9] transition-colors duration-300">
        OnePiece Studio
      </span>
    </button>
  );
}

export default function Navigation() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');
  const [mobileOpen,     setMobileOpen]     = useState(false);

  // Detect scroll depth and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sectionIds = NAV_LINKS.map((l) => l.href);
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* ─── Desktop / Tablet Nav ────────────────────────────────────────── */}
      <motion.header
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500',
          scrolled
            ? 'bg-[#080808]/85 backdrop-blur-md border-b border-[#1c1c1c]'
            : 'bg-transparent',
        ].join(' ')}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Logo onClick={scrollToTop} />

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={[
                    'relative font-sans text-[11px] tracking-[0.25em] uppercase transition-colors duration-300',
                    activeSection === href
                      ? 'text-[#c8a96c]'
                      : 'text-[#8a8480] hover:text-[#e8e2d9]',
                  ].join(' ')}
                >
                  {label}
                  {/* Active underline dot */}
                  {activeSection === href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c8a96c]"
                    />
                  )}
                </button>
              ))}

              {/* CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="mr-2 px-5 py-2.5 border border-[#c8a96c]/50 text-[#c8a96c] font-sans text-[12px] hover:bg-[#c8a96c] hover:border-[#c8a96c] hover:text-[#080808] transition-all duration-300"
              >
                צור קשר
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px bg-[#e8e2d9] transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'
                }`}
              />
              <span
                className={`block h-px bg-[#e8e2d9] transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 w-4' : 'w-4'
                }`}
              />
              <span
                className={`block h-px bg-[#e8e2d9] transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── Mobile Full-Screen Menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label mb-4">ניווט</span>

            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.button
                key={href}
                onClick={() => scrollTo(href)}
                className="font-serif font-light text-5xl text-[#e8e2d9] hover:text-[#c8a96c] transition-colors duration-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                {label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollTo('contact')}
              className="mt-6 px-10 py-3.5 border border-[#c8a96c]/60 text-[#c8a96c] font-sans text-[13px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              צור קשר
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
