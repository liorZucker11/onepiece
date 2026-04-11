'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: '8+',   label: 'שנות ניסיון'          },
  { value: '240+', label: 'פרויקטים שהושלמו'      },
  { value: '3',    label: 'יבשות'                 },
  { value: '98%',  label: 'שביעות רצון לקוחות'   },
];

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* ── עמודה שמאלית: כותרת + סטטיסטיקות ── */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label block mb-6">הסטודיו</span>
              <h2
                className="font-serif font-light leading-[1.1] text-[#e8e2d9]"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
              >
                אדריכלות
                <br />
                <span className="font-bold text-[#c8a96c]">נראית</span> לפני
                <br />
                שנבנית
              </h2>
            </Reveal>

            <Reveal delay={0.18} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8">
              {STATS.map(({ value, label }) => (
                <div key={label} className="border-t border-[#282828] pt-5">
                  <p className="font-serif font-light text-4xl text-[#c8a96c] mb-1 leading-none">
                    {value}
                  </p>
                  <p className="font-sans text-[11px] text-[#7a7672]">
                    {label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* ── עמודה ימנית: טקסט + תמונה ── */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-14 flex flex-col gap-10">

            <Reveal delay={0.1}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
                OnePiece Studio הוא סטודיו בוטיק להדמיות אדריכליות, הפועל בצומת שבין סיפור מרחבי לביצועי מכירה. אנחנו משרתים אדריכלים, יזמים ומותגי נדל&quot;ן שמבינים שהרושם הראשוני של פרויקט חשוב לא פחות מהפרויקט עצמו.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
                מדיוק של תוכנית קומה מדודה ועד האווירה של סיור קולנועי — כל פריט שאנחנו מייצרים נושא את הקפדנות של מצגת סופית, כי חזון שווה ערך רק כאשר ניתן לראות אותו בבירור.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
                אנחנו פועלים כסטודיו קטן ומגובש, לא כמפעל ייצור. כל פרויקט מקבל תשומת לב יצירתית ייעודית מהברייף ועד המסירה — ללא תבניות, ללא קיצורי דרך.
              </p>
            </Reveal>

            {/* REPLACE: החלף div זה בתמונת סטודיו אמיתית — /public/images/about-studio.jpg */}
            <Reveal delay={0.32}>
              <div className="relative w-full aspect-[16/9] bg-[#0f0f0f] border border-[#1a1a1a] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#161210] via-[#0e0c0a] to-[#080808]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_50%,_rgba(200,169,108,0.06)_0%,_transparent_70%)]" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="section-label opacity-30">החלף בתמונת סטודיו</span>
                  <span className="font-sans text-[11px] text-[#2a2a2a]">
                    /public/images/about-studio.jpg
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/10 transition-colors duration-500" />
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#141414]" />
                {/* REPLACE: מיקום הסטודיו שלך */}
                <span className="font-sans text-[13px] text-[#605c58]">
                  מבוססים בוורשה — עובדים ברחבי העולם.
                </span>
                <div className="h-px flex-1 bg-[#141414]" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">01</span>
      </div>
    </section>
  );
}
