'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SERVICES = [
  {
    number: '01',
    title: 'הדמיות חוץ',
    description:
      'רינדורים פוטו-ריאליסטיים של חזיתות, נופים והקשרים עירוניים. תרחישי אור יום, דמדומים ולילה עם קומפוזיציה קולנועית ועומק אטמוספרי.',
    tags: ['רינדורים סטטיים', 'צילומי אוויר', 'לימוד הקשר'],
  },
  {
    number: '02',
    title: 'הדמיות פנים',
    description:
      'הדמיות פנים סוחפות עם דיוק חומרי, אווירת תאורה ועיצוב ריהוט — מתקשרות מצב רוח ואיכות מרחבית ברמה הגבוהה ביותר.',
    tags: ['מגורים', 'מסחרי', 'אירוח'],
  },
  {
    number: '03',
    title: 'תוכניות שיווק',
    description:
      'תוכניות קומה ושרטוטים סכמטיים ברמת שיווק, הממירים נתונים טכניים לכלי מכירה ויזואליים משכנעים. נקיים, מדויקים ועקביים עם המותג.',
    tags: ['תוכניות קומה', 'תוכניות אתר', 'אקסונומטריות'],
  },
  {
    number: '04',
    title: 'עבודה גרפית',
    description:
      'דיאגרמות אדריכליות, מיתוג פרויקטים, פריסות מצגת וחומרי שיווק מוכנים להדפסה — מבוצעים בדיוק אדיטוריאלי.',
    tags: ['דיאגרמות', 'חוברות', 'עיצוב להדפסה'],
  },
  {
    number: '05',
    title: 'אנימציה וקולנוע',
    description:
      'סיורים קולנועיים, טיסות וסרטי נרטיב שמחיים פרויקטים בתנועה. מולחנים, מגוונים בצבע ומסופקים באיכות שידור.',
    tags: ['סיורים', 'רצפי רחפן', 'סרט קונספט'],
  },
  {
    number: '06',
    title: 'סיורים וירטואליים',
    description:
      'סיורי פנורמה 360° אינטראקטיביים וחוויות רשת בזמן אמת, המאפשרים לבעלי עניין לחקור מרחבים בעצמם — ניתנים לניווט מלא, מסופקים דרך הרשת.',
    tags: ['פנורמות 360°', 'סיורי רשת', 'מוכן ל-VR'],
  },
] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="group relative border-t border-[#282828] pt-8 pb-10 hover:border-[#c8a96c]/30 transition-colors duration-500"
      initial={{ opacity: 0, y: 56, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-sans text-[11px] text-[#2a2520] mb-5 block">
        {service.number}
      </span>

      <div className="flex items-start justify-between gap-6 mb-5">
        <h3 className="font-serif font-light text-2xl lg:text-3xl text-[#e8e2d9] leading-tight group-hover:text-[#c8a96c] transition-colors duration-400">
          {service.title}
        </h3>
        {/* חץ — מוצג ב-RTL לכיוון שמאל */}
        <span className="mt-1 text-[#c8a96c]/0 group-hover:text-[#c8a96c]/70 transition-all duration-400 font-sans text-xl select-none flex-shrink-0">
          ←
        </span>
      </div>

      <p className="font-sans text-[14px] font-light leading-[2.0] text-[#7e7a76] mb-7 max-w-sm">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-[11px] text-[#605c58] border border-[#282828] px-3 py-1.5 group-hover:border-[#2a2520] transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c8a96c]/40 group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(headRef, { once: false, margin: '-80px' });

  return (
    <section id="services" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <div
          ref={headRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 56, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-serif font-light leading-[1.1] text-[#e8e2d9]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              מגוון שלם
              <br />
              של שירותים <span className="font-bold text-[#c8a96c]">ויזואליים</span>
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xs font-sans text-[13px] font-light leading-[1.9] text-[#7a7672] lg:text-left"
            initial={{ opacity: 0, y: 52, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            כל שירות מסופק כפתרון פרימיום ומלא — מיישור הברייף ועד מסירת הקבצים הסופיים.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">02</span>
      </div>
    </section>
  );
}
