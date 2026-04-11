'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'ברייף וגילוי',
    description:
      'אנחנו מתחילים בסשן ברייף מעמיק כדי להבין את היקף הפרויקט, הקהל, השאיפות הויזואליות וכל חומר רפרנס רלוונטי. לא משאירים הנחה שלא נאמרה.',
    duration: 'ימים 1–2',
  },
  {
    number: '02',
    title: 'קונספט וקומפוזיציה',
    description:
      'זוויות מצלמה, כיוון תאורה, שעת היום ופלטת חומרים מוצעים ומאושרים לפני תחילת הייצור. שינויים קלים לביצוע בשלב זה.',
    duration: 'ימים 3–5',
  },
  {
    number: '03',
    title: 'ייצור',
    description:
      'מידול, טקסטורה, תאורה ורינדור מבוצעים לפי סטנדרט איכות אחד — המצגת הסופית. אנחנו חולקים תצוגות מקדימות בנקודות ביקורת טבעיות.',
    duration: 'ימים 5–12',
  },
  {
    number: '04',
    title: 'סקירה ועידון',
    description:
      'שתי סבבי תיקונים מובנים מבטיחים שהפלט תואם במדויק לציפיות. אנחנו מתעדים כל בקשת שינוי בבירור ומאשרים לפני ההמשך.',
    duration: 'ימים 12–15',
  },
  {
    number: '05',
    title: 'מסירה סופית',
    description:
      'קבצי ייצור, יצואי מוכנים להדפסה וכל פורמט נלווה ארוזים ומסופקים דרך קישור מאובטח עם תיעוד מלא של המסירה.',
    duration: 'ימים 15–16',
  },
] as const;

function StepItem({
  step,
  index,
  total,
}: {
  step: (typeof STEPS)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      className="relative grid grid-cols-[40px_1fr] lg:grid-cols-[80px_1fr] gap-4 lg:gap-8"
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-9 h-9 lg:w-10 lg:h-10 border border-[#282828] flex items-center justify-center flex-shrink-0 bg-[#080808]">
          <span className="font-sans text-[10px] text-[#7a7672]">
            {step.number}
          </span>
        </div>
        {!isLast && (
          <div className="mt-2 flex-1 w-px bg-[#1a1a1a] min-h-[60px]" />
        )}
      </div>

      <div className="pb-12 lg:pb-16">
        <span className="inline-block font-sans text-[11px] text-[#605c58] border border-[#1a1a1a] px-3 py-1 mb-4">
          {step.duration}
        </span>

        <h3 className="font-serif font-light text-2xl lg:text-3xl text-[#e8e2d9] mb-4 leading-tight">
          {step.title}
        </h3>

        <p className="font-sans text-[14px] font-light leading-[2.0] text-[#7a7672] max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(headRef, { once: true, margin: '-80px' });

  return (
    <section id="process" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* ── כותרת — נשארת בצד ימין (sticky) בדסקטופ ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              ref={headRef}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label block mb-5">איך אנחנו עובדים</span>
              <h2
                className="font-serif font-light leading-[1.1] text-[#e8e2d9] mb-8"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
              >
                מברייף
                <br />
                ועד{' '}
                <span className="font-bold text-[#c8a96c]">מסירה</span>
              </h2>

              <p className="font-sans text-[14px] font-light leading-[2.0] text-[#7a7672]">
                תהליך שקוף ומובנה שמסיר עמימות ומשאיר כל פרויקט בתנועה עם ביטחון משני הצדדים.
              </p>

              <div className="mt-10 border-t border-[#282828] pt-6">
                <p className="font-sans text-[11px] text-[#605c58] mb-1">
                  זמן ביצוע טיפוסי
                </p>
                <p className="font-serif text-3xl font-light text-[#e8e2d9]">14–21 ימים</p>
                <p className="font-sans text-[12px] text-[#605c58] mt-1">
                  לכל שלב פרויקט
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── ציר הזמן של השלבים ── */}
          <div className="lg:col-span-7 lg:col-start-6">
            {STEPS.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={STEPS.length} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">04</span>
      </div>
    </section>
  );
}
