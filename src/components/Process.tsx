'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const STEPS = {
  he: [
    { number: '01', title: 'היכרות ואפיון',    description: 'בשלב הראשון נבין לעומק את הפרויקט — הקונספט, הקהל והמסר השיווקי. ננתח את החומרים הקיימים ונגדיר יחד כיוון ברור לעבודה.' },
    { number: '02', title: 'קונספט וקומפוזיציה', description: 'בשלב זה נבנה את השפה הויזואלית של הפרויקט — זוויות, אור ואווירה. נציג שלוש חלופות תאורה שונות לבחירה, ומתוכן נמשיך לפיתוח הכיוון הנבחר.', duration: 'ימים 3–5' },
    { number: '03', title: 'ייצור',             description: 'כאן מתחיל שלב היצירה בפועל — בניית הסצנה, חומרים, תאורה ופרטים. הכל מתחבר לכדי הדמיה מדויקת שמביאה את הפרויקט לחיים.', duration: 'ימים 5–12' },
    { number: '04', title: 'סקירה ועידון',      description: 'ההדמיות עוברות סבבי תיקונים, במטרה לדייק כל פרט ולהגיע לתוצאה סופית מדויקת ומלוטשת.', duration: 'ימים 12–15' },
    { number: '05', title: 'מסירה סופית',       description: 'לאחר אישור סופי, הקבצים נמסרים באיכות גבוהה ומוכנים לשימוש שיווקי מלא.', duration: 'ימים 15–16' },
  ],
  en: [
    { number: '01', title: 'Briefing & Scoping',      description: 'In the first stage we deeply understand the project — concept, audience and marketing message. We analyze existing materials and define a clear direction together.' },
    { number: '02', title: 'Concept & Composition',   description: 'We build the visual language of the project — angles, light and atmosphere. We present three different lighting alternatives to choose from, then develop the chosen direction.', duration: 'Days 3–5' },
    { number: '03', title: 'Production',              description: 'The actual creation stage begins — building the scene, materials, lighting and details. Everything comes together into a precise visualization that brings the project to life.', duration: 'Days 5–12' },
    { number: '04', title: 'Review & Refinement',     description: 'The visualizations go through revision rounds, fine-tuning every detail to reach a final, precise and polished result.', duration: 'Days 12–15' },
    { number: '05', title: 'Final Delivery',          description: 'After final approval, files are delivered in high quality and ready for full marketing use.', duration: 'Days 15–16' },
  ],
};

type Step = { number: string; title: string; description: string; duration?: string };

function StepItem({ step, index, total }: { step: Step; index: number; total: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-60px' });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      className="relative grid grid-cols-[40px_1fr] lg:grid-cols-[80px_1fr] gap-4 lg:gap-8"
      initial={{ opacity: 0, y: 52, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 52, scale: 0.97 }}
      transition={{ duration: 0.85, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-9 h-9 lg:w-10 lg:h-10 border border-[#282828] flex items-center justify-center flex-shrink-0 bg-[#080808]">
          <span className="font-sans text-[10px] text-[#c0bcb8]">{step.number}</span>
        </div>
        {!isLast && <div className="mt-2 flex-1 w-px bg-[#1a1a1a] min-h-[60px]" />}
      </div>

      <div className="pb-12 lg:pb-16">
        <h3 className="font-serif font-light text-2xl lg:text-3xl text-[#ffffff] mb-4 leading-tight">
          {step.title}
        </h3>
        <p className="font-sans text-[14px] font-light leading-[2.0] text-[#c0bcb8] max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const headRef  = useRef<HTMLDivElement>(null);
  const inView   = useInView(headRef, { once: false, margin: '-80px' });
  const { lang } = useLanguage();
  const isHe     = lang === 'he';
  const steps    = isHe ? STEPS.he : STEPS.en;

  return (
    <section id="process" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              ref={headRef}
              initial={{ opacity: 0, y: 56, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="font-serif font-light leading-[1.1] text-[#ffffff] mb-8"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
              >
                {isHe ? (
                  <>תהליך העבודה<br />עם <span className="font-bold text-[#c8a96c]">One Viz</span></>
                ) : (
                  <>The Work Process<br />with <span className="font-bold text-[#c8a96c]">One Viz</span></>
                )}
              </h2>

              <p className="font-sans text-[14px] font-light leading-[2.0] text-[#c0bcb8] whitespace-nowrap">
                {isHe
                  ? 'תהליך שקוף ומדויק, יד ביד עם הלקוח עד לתוצאה מלאה.'
                  : 'A transparent and precise process, hand in hand with the client.'}
              </p>

              <p className="font-sans text-[13px] font-light leading-[1.85] text-[#a0a09c] mt-8">
                {isHe
                  ? 'רוצה לפנות אלינו ישירות? פרטי הקשר נמצאים בתחתית העמוד, או לחץ על כפתור הווטסאפ.'
                  : 'Want to reach us directly? Contact details are at the bottom of the page, or click the WhatsApp button.'}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={steps.length} />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
