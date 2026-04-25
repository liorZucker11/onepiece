'use client';

import { useRef, Fragment } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const QUALITIES = {
  he: ['חשיבה מבוססת סיפור', 'דיוק אדריכלי', 'הסתכלות שיווקית', 'רמת גימור גבוהה', 'תשומת לב לפרטים', '12 שנות ניסיון'],
  en: ['Story-Based Thinking', 'Architectural Precision', 'Marketing Perspective', 'High Finish Level', 'Attention to Detail', '12 Years Experience'],
};

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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
  const { lang } = useLanguage();
  const isHe = lang === 'he';
  const qualities = isHe ? QUALITIES.he : QUALITIES.en;

  return (
    <section id="about" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16 lg:mb-20">
          <Reveal>
            <h2
              className="font-serif font-light leading-[1.15] text-[#ffffff] w-fit mx-auto"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              {isHe ? (
                <>הסיפור שמאחורי<br /><span className="text-[#c8a96c] block text-center">One Viz</span></>
              ) : (
                <>The Story Behind<br /><span className="text-[#c8a96c] block text-center">One Viz</span></>
              )}
            </h2>
          </Reveal>
        </div>

        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6 mb-24 lg:mb-36">
          <Reveal delay={0.12}>
            <p className="font-sans text-[15px] font-light leading-[2.1] text-[#c8c4c0]">
              {isHe
                ? 'OneViz הוא סטודיו בוטיק להדמיות אדריכליות, הפועל מתוך אמונה שכל פרויקט מתחיל בסיפור. הסטודיו אינו מסתפק בהצגת מבנים — הוא יוצר תחושה, אווירה וחזון עוד לפני שהפרויקט נבנה.'
                : 'OneViz is a boutique architectural visualization studio, operating from the belief that every project begins with a story. The studio doesn\'t settle for presenting buildings — it creates a feeling, atmosphere and vision before the project is even built.'}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-[15px] font-light leading-[2.1] text-[#c8c4c0]">
              {isHe
                ? 'עבור OneViz, כל פרויקט הוא סיפור ייחודי. באמצעות שילוב של חשיבה אדריכלית והבנה שיווקית, הסטודיו מייצר הדמיות שמחברות אנשים לפרויקט ומעבירות אותו בצורה ברורה, מדויקת ומשכנעת.'
                : 'For OneViz, every project is a unique story. Through a combination of architectural thinking and marketing understanding, the studio produces visualizations that connect people to the project and convey it clearly, precisely and persuasively.'}
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-24 lg:mb-32">

          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal>
              <h3
                className="font-sans font-light text-[#c8a96c] leading-snug"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
              >
                {isHe ? 'מי עומד מאחורי הסטודיו' : 'The Person Behind the Studio'}
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#c8c4c0]">
                {isHe
                  ? 'אני אביב מינצברג, מנכ"ל ומייסד OneViz Studio, עם מעל 12 שנות ניסיון בעולם האדריכלות וההדמיות. הנדסאי אדריכלות בהכשרתי, עם רקע מקצועי הכולל ניסיון במשרדי אדריכלות בתחום ההדמיות ובמסגרת השירות הצבאי.'
                  : 'I am Aviv Minzberg, CEO and founder of OneViz Studio, with over 12 years of experience in architecture and visualization. An architect by training, with a professional background that includes experience in architectural visualization firms and during military service.'}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#c8c4c0]">
                {isHe
                  ? 'המעבר לעולם ההדמיות ופתרונות השיווק לנדל"ן נולד מתוך רצון לספר סיפור — כזה שלא רק נראה טוב, אלא גם מוכר. מתוך תשוקה אמיתית לתחום, אני מפתח עבור כל פרויקט שפה ויזואלית שמדברת לקהל היעד וממחישה את הפוטנציאל שלו בצורה המדויקת ביותר.'
                  : 'The move into visualization and real estate marketing solutions was born from a desire to tell a story — one that not only looks great, but also sells. With a genuine passion for the field, I develop a visual language for each project that speaks to the target audience and illustrates its potential in the most precise way.'}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="font-sans text-[15px] font-light leading-[2.1] text-[#c8c4c0]">
                {isHe
                  ? 'החזון שלי הוא לייצר חוויית מגורים שלמה עוד לפני שהפרויקט נבנה — החל מהלובי, דרך המרחב הציבורי והסביבה, ועד לפרטים הקטנים בתוך הדירה עצמה. כל הדמיה נועדה לא רק להמחיש, אלא לגרום לצופה להרגיש שהוא כבר שם.'
                  : 'My vision is to create a complete living experience before the project is built — from the lobby, through the public space and surroundings, to the small details inside the apartment itself. Each visualization is designed not only to illustrate, but to make the viewer feel as if they are already there.'}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            <Reveal delay={0.08} className="flex flex-col items-center gap-4">
              <Image
                src="https://pub-89c442ddd6cf4d069c34410d67fb2569.r2.dev/aviv.jpg"
                alt="Aviv Minzberg"
                width={2859}
                height={3660}
                className="w-56 h-auto"
                sizes="224px"
              />
              <div className="text-center">
                <p className="font-sans text-[15px] font-light text-[#ffffff]">
                  {isHe ? 'אביב מינצברג' : 'Aviv Minzberg'}
                </p>
                <p className="section-label mt-1">
                  {isHe ? 'מנכ"ל One Viz' : 'CEO of One Viz'}
                </p>
              </div>
            </Reveal>
          </div>

        </div>

        <Reveal delay={0.1}>
          <div className="-mt-6 relative z-10 flex flex-wrap gap-x-5 gap-y-3 justify-center lg:flex-nowrap lg:justify-between lg:items-center lg:gap-0">
            {qualities.map((q, i) => (
              <Fragment key={q}>
                <span className="font-sans text-[12px] lg:text-[13px] font-light text-[#c8a96c]">{q}</span>
                {i < qualities.length - 1 && (
                  <span className="hidden lg:inline-block w-2 h-2 rounded-full bg-[#c8a96c] flex-shrink-0" aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

      </div>

    </section>
  );
}
