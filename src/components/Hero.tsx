'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL-DRIVEN HERO ANIMATION — VIDEO BACKGROUND
// ─────────────────────────────────────────────────────────────────────────────
//
// How it works:
//   1. `useScroll` tracks scroll progress from 0 → 1 as the hero scrolls past.
//
//   2. The video layer has a slow downward drift (videoY) relative to the
//      viewport. Because the page moves up but the video moves down within the
//      section, it appears to scroll slower than everything else — classic
//      parallax depth effect.
//
//   3. Text fades up and out; a dark curtain draws over the hero on exit.
//
// REPLACE: Swap /background%20web.mp4 with any other video file placed in /public.
//          (The %20 is URL-encoding for the space in "background web.mp4")
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // ── Video parallax ────────────────────────────────────────────────────────
  // Video drifts down as section scrolls up → appears to move slower → depth
  const videoY     = useTransform(scrollYProgress, [0, 1], ['0%',   '14%']);
  // Subtle slowdown on scale — barely noticeable, just adds luxury weight
  const videoScale = useTransform(scrollYProgress, [0, 1], [1,      1.04 ]);

  // ── Text content ──────────────────────────────────────────────────────────
  const textY       = useTransform(scrollYProgress, [0, 0.5],  ['0%', '-20%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.38], [1,    0    ]);

  // ── Dark curtain — fades in as hero scrolls away ──────────────────────────
  const curtainOpacity = useTransform(scrollYProgress, [0.45, 0.92], [0, 1]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen overflow-hidden bg-[#080808]"
    >
      {/* ── 1. VIDEO BACKGROUND ──────────────────────────────────────────── */}
      {/* Wrapped in a motion.div that's slightly oversized so the parallax   */}
      {/* drift doesn't reveal the section background behind it.              */}
      <motion.div
        className="absolute inset-0 w-full pointer-events-none"
        style={{
          y: videoY,
          scale: videoScale,
          // Tall enough that the bottom never shows during the downward drift
          height: '115%',
          top: '-7.5%',
        }}
      >
        {/* REPLACE: Update src if you rename or swap the video file */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src="https://pub-89c442ddd6cf4d069c34410d67fb2569.r2.dev/background%20web.mp4"
        />
      </motion.div>

      {/* ── 2. CINEMATIC OVERLAYS (stack order matters) ──────────────────── */}

      {/* Dark base tint */}
      <div className="absolute inset-0 bg-[#080808]/30 pointer-events-none" />

      {/* Bottom-up gradient — text readability zone */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/45 to-transparent pointer-events-none" />

      {/* Top-down gradient — nav readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/35 via-transparent to-transparent pointer-events-none" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 35%, rgba(8,8,8,0.5) 100%)',
        }}
      />

      {/* ── 3. SIDE SCROLL LABEL (desktop only) ──────────────────────────── */}
      <motion.div
        className="absolute left-6 bottom-28 hidden xl:flex flex-col items-center gap-3 pointer-events-none z-10"
        style={{ opacity: textOpacity }}
      >
        <div className="h-14 w-px bg-gradient-to-b from-[#c8a96c]/20 to-transparent" />
        <span className="font-sans text-[9px] tracking-[0.15em] text-[#4a4540] rotate-90 origin-center my-5 select-none">
          גלול
        </span>
      </motion.div>

      {/* ── 4. HERO TEXT CONTENT ─────────────────────────────────────────── */}
      <motion.div
        className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center select-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Main display headline */}
        {/* REPLACE: Your hero headline */}
        <motion.h1
          className="leading-[1.05] text-[#e8e2d9]"
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 6.5rem)',
            fontWeight: 400,
          }}
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          הופכים כל פרוייקט
          <br />
          <span className="text-[#c8a96c]">לסיפור מנצח</span>
        </motion.h1>

        {/* Subheadline */}
        {/* REPLACE: Your short studio pitch */}
        <motion.p
          className="mt-8 max-w-xl font-sans text-[17px] font-light leading-[1.75] text-[#c8c4be]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          הדמיות אדריכליות, אנימציות וסיורים שמייצרים{' '}
          <span className="text-[#c8a96c]">חוויית מגורים</span>{' '}
          עוד לפני הבנייה
        </motion.p>

        {/* CTA buttons */}
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
            פרויקטים
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-48 sm:w-auto px-9 py-3.5 border border-[#ffffff]/15 text-[#c0bab4]/80 font-sans text-[11px] tracking-[0.28em] uppercase hover:border-[#e8e2d9] hover:text-[#e8e2d9] backdrop-blur-[2px] transition-all duration-300"
          >
            צור קשר
          </button>
        </motion.div>
      </motion.div>

      {/* ── 5. SCROLL PULSE INDICATOR ────────────────────────────────────── */}
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

      {/* ── 6. DARK CURTAIN (exit transition to next section) ────────────── */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[#080808] z-30"
        style={{ opacity: curtainOpacity }}
      />
    </section>
  );
}
