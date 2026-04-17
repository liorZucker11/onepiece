'use client';

import { useRef, Fragment } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const QUALITIES = [
  'חשיבה מבוססת סיפור',
  'דיוק אדריכלי',
  'הסתכלות שיווקית',
  'רמת גימור גבוהה',
  'תשומת לב לפרטים',
  '12 שנות ניסיון',
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
  const inView = useInView(ref, { once: false, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 56, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
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

        {/* ═══════════════════════════════════════
            חלק א׳ — הסיפור שמאחורי One Piece
        ════════════════════════════════════════ */}
        <div className="text-center mb-16 lg:mb-20">
          <Reveal>
            <h2
              className="font-serif font-light leading-[1.15] text-[#e8e2d9] w-fit mx-auto"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              הסיפור שמאחורי
              <br />
              <span className="text-[#c8a96c] block text-center">One Piece</span>
            </h2>
          </Reveal>
        </div>

        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6 mb-24 lg:mb-36">
          <Reveal delay={0.12}>
            <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
              OnePiece הוא סטודיו בוטיק להדמיות אדריכליות, הפועל מתוך אמונה שכל פרויקט מתחיל בסיפור. אני לא רק מציג מבנים — אני יוצר תחושה, אווירה וחזון עוד לפני שהפרויקט נבנה.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
              כל פרויקט עבורי הוא סיפור ייחודי. דרך שילוב של חשיבה אדריכלית והבנה שיווקית, אני מייצר הדמיות שמחברות אנשים לפרויקט ומעבירות אותו בצורה ברורה, מדויקת ומשכנעת.
            </p>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════════
            חלק ב׳ — מי עומד מאחורי הסטודיו
        ════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-24 lg:mb-32">

          {/* עמודה ימנית (RTL): כותרת + טקסט */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal>
              <h3
                className="font-sans font-light text-[#c8a96c] leading-snug"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                מי עומד מאחורי הסטודיו
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
                אני אביב מינצברג, מנכ&quot;ל ומייסד OnePiece Studio, עם מעל 12 שנות ניסיון בעולם האדריכלות וההדמיות. הנדסאי אדריכלות בהכשרתי, עם רקע מקצועי הכולל ניסיון במשרדי אדריכלות בתחום ההדמיות ובמסגרת השירות הצבאי.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
                המעבר לעולם ההדמיות ופתרונות השיווק לנדל&quot;ן נולד מתוך רצון לספר סיפור — כזה שלא רק נראה טוב, אלא גם מוכר. מתוך תשוקה אמיתית לתחום, אני מפתח עבור כל פרויקט שפה ויזואלית שמדברת לקהל היעד וממחישה את הפוטנציאל שלו בצורה המדויקת ביותר.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#8a8682]">
                החזון שלי הוא לייצר חוויית מגורים שלמה עוד לפני שהפרויקט נבנה — החל מהלובי, דרך המרחב הציבורי והסביבה, ועד לפרטים הקטנים בתוך הדירה עצמה. כל הדמיה נועדה לא רק להמחיש, אלא לגרום לצופה להרגיש שהוא כבר שם.
              </p>
            </Reveal>

          </div>

          {/* עמודה שמאלית (RTL): תמונה + שם */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            <Reveal delay={0.08} className="flex flex-col items-center gap-4">
              <Image
                src="https://pub-89c442ddd6cf4d069c34410d67fb2569.r2.dev/aviv.jpg"
                alt="אביב מינצברג"
                width={2859}
                height={3660}
                className="w-56 h-auto"
                sizes="224px"
              />
              <div className="text-center">
                <p className="font-sans text-[15px] font-light text-[#e8e2d9]">אביב מינצברג</p>
                <p className="section-label mt-1">מנכ&quot;ל One Piece</p>
              </div>
            </Reveal>
          </div>

        </div>

        {/* ── שורת תכונות — רוחב מלא ── */}
        <Reveal delay={0.1}>
          <div className="-mt-6 flex items-center justify-between relative z-10">
            {QUALITIES.map((q, i) => (
              <Fragment key={q}>
                <span className="font-sans text-[13px] font-light text-[#c8a96c] whitespace-nowrap">{q}</span>
                {i < QUALITIES.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-[#c8a96c] flex-shrink-0" aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

      </div>

      {/* ── מספר עיטור ── */}
      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">01</span>
      </div>
    </section>
  );
}
