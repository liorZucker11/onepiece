'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const isHe = lang === 'he';

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const videoY        = useTransform(scrollYProgress, [0, 1],    ['0%',  '14%']);
  const videoScale    = useTransform(scrollYProgress, [0, 1],    [1,     1.04 ]);
  const textY         = useTransform(scrollYProgress, [0, 0.5],  ['0%', '-20%']);
  const textOpacity   = useTransform(scrollYProgress, [0, 0.38], [1,     0    ]);
  const curtainOpacity = useTransform(scrollYProgress, [0.45, 0.92], [0, 1]);

  return (
    <section ref={heroRef} id="home" className="relative h-screen overflow-hidden bg-[#080808]">

      <motion.div
        className="absolute inset-0 w-full pointer-events-none"
        style={{ y: videoY, scale: videoScale, height: '115%', top: '-7.5%' }}
      >
        <video
          autoPlay muted loop playsInline preload="auto"
          className="w-full h-full object-cover"
          src="https://pub-89c442ddd6cf4d069c34410d67fb2569.r2.dev/background%20web.mp4"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#080808]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/35 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 35%, rgba(8,8,8,0.5) 100%)' }}
      />

      <motion.div
        className="absolute left-6 bottom-28 hidden xl:flex flex-col items-center gap-3 pointer-events-none z-10"
        style={{ opacity: textOpacity }}
      >
        <div className="h-14 w-px bg-gradient-to-b from-[#c8a96c]/20 to-transparent" />
        <span className="font-sans text-[9px] tracking-[0.15em] text-[#4a4540] rotate-90 origin-center my-5 select-none">
          {isHe ? 'גלול' : 'Scroll'}
        </span>
      </motion.div>

      <motion.div
        className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center select-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h1
          className="leading-[1.05] text-[#ffffff]"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 6.5rem)', fontWeight: 400 }}
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {isHe ? (
            <>הופכים כל פרוייקט<br /><span className="text-[#c8a96c]">לסיפור מנצח</span></>
          ) : (
            <>Turning Every Project<br /><span className="text-[#c8a96c]">Into a Winning Story</span></>
          )}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl font-sans text-[17px] font-light leading-[1.75] text-[#e8e4e0]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          {isHe ? (
            <>הדמיות אדריכליות, אנימציות וסיורים שמייצרים{' '}<span className="text-[#c8a96c]">חוויית מגורים</span>{' '}עוד לפני הבנייה</>
          ) : (
            <>Architectural visualizations, animations and tours that create a{' '}<span className="text-[#c8a96c]">living experience</span>{' '}before construction</>
          )}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-48 sm:w-auto px-9 py-3.5 bg-[#c8a96c] text-[#080808] font-sans text-[11px] tracking-[0.28em] uppercase hover:bg-[#d4b97c] transition-colors duration-300"
          >
            {isHe ? 'פרויקטים' : 'Projects'}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-48 sm:w-auto px-9 py-3.5 border border-[#ffffff]/15 text-[#e0dcd8]/80 font-sans text-[11px] tracking-[0.28em] uppercase hover:border-[#e8e2d9] hover:text-[#ffffff] backdrop-blur-[2px] transition-all duration-300"
          >
            {isHe ? 'צור קשר' : 'Contact'}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
        style={{ opacity: textOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.div
          className="w-px bg-[#c8a96c]/50"
          animate={{ height: ['0px', '40px', '0px'], y: [0, 8, 18] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-[#080808] z-30"
        style={{ opacity: curtainOpacity }}
      />
    </section>
  );
}
