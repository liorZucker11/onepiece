'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FOOTER_LINKS = {
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn',  href: '#' },
    { label: 'Behance',   href: '#' },
  ],
};

const LEGAL = {
  privacy: {
    title: 'מדיניות פרטיות',
    sections: [
      {
        body: 'באתר זה נעשה שימוש במידע בסיסי בלבד לצורך יצירת קשר ושיפור חוויית המשתמש.',
      },
      {
        body: 'ייתכן והאתר אוסף פרטים כגון שם, טלפון או כתובת אימייל כאשר המשתמש בוחר להשאיר פרטים בטופס יצירת קשר או באמצעי תקשורת אחרים.',
      },
      {
        body: 'המידע שנאסף משמש אך ורק לצורך מענה לפניות, מתן שירות ושיפור האתר. לא נעשה שימוש במידע לצרכים אחרים, ולא מועבר לצדדים שלישיים.',
      },
      {
        body: 'בנוסף, ייתכן והאתר משתמש בכלים סטטיסטיים (כגון Google Analytics) לצורך ניתוח שימוש באתר ושיפור חוויית המשתמש.',
      },
      {
        body: 'בכל שלב ניתן לפנות בבקשה לעדכון או מחיקת פרטים באמצעות יצירת קשר דרך האתר.',
      },
      {
        body: 'השימוש באתר מהווה הסכמה למדיניות זו.',
      },
    ],
  },
  terms: {
    title: 'תנאי שימוש',
    sections: [
      {
        body: 'האתר מציג עבודות, הדמיות ותכנים שנוצרו על ידי OnePiece Studio, והם מוגנים בזכויות יוצרים. אין להעתיק, להשתמש או להפיץ תכנים מהאתר ללא אישור מראש.',
      },
      {
        body: 'התוכן באתר נועד למטרות מידע והתרשמות בלבד, ואינו מהווה התחייבות מכל סוג.',
      },
      {
        body: 'הסטודיו אינו אחראי לנזקים ישירים או עקיפים שעלולים להיגרם כתוצאה מהשימוש באתר.',
      },
      {
        body: 'ייתכן והאתר יכיל קישורים לאתרים חיצוניים — האחריות על התוכן בהם אינה של הסטודיו.',
      },
      {
        body: 'הסטודיו שומר לעצמו את הזכות לעדכן או לשנות את תנאי השימוש בכל עת.',
      },
      {
        body: 'השימוש באתר מהווה הסכמה לתנאים אלו.',
      },
    ],
  },
};

type ModalKey = 'privacy' | 'terms' | null;

function LegalModal({ open, onClose, modalKey }: { open: boolean; onClose: () => void; modalKey: ModalKey }) {
  const data = modalKey ? LEGAL[modalKey] : null;

  return (
    <AnimatePresence>
      {open && data && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[#080808]/85 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <motion.div
              className="pointer-events-auto w-full max-w-xl bg-[#0e0e0e] border border-[#1e1e1e] p-8 lg:p-10 flex flex-col gap-7 max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-6">
                <h2 className="font-sans font-light text-[22px] text-[#e8e2d9] leading-snug">
                  {data.title}
                </h2>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#605c58] hover:text-[#e8e2d9] transition-colors duration-200"
                  aria-label="סגור"
                >
                  ✕
                </button>
              </div>

              <div className="h-px bg-[#1e1e1e]" />

              {/* Content */}
              <div className="flex flex-col gap-5">
                {data.sections.map((s, i) => (
                  <p key={i} className="font-sans text-[14px] font-light leading-[2.0] text-[#7a7672]">
                    {s.body}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Footer() {
  const year    = new Date().getFullYear();
  const ref     = useRef<HTMLElement>(null);
  const inView  = useInView(ref, { once: false, margin: '-60px' });
  const [modal, setModal] = useState<ModalKey>(null);

  return (
    <>
      <LegalModal open={modal !== null} onClose={() => setModal(null)} modalKey={modal} />

      <footer ref={ref} className="relative bg-[#080808] pt-16 pb-10">
        <div className="rule-fade absolute top-0 inset-x-0" />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

          {/* ── עמודות קישורים ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 48, scale: 0.97 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[11px] text-[#605c58] mb-5">עקבו אחרינו</p>
              <ul className="space-y-3">
                {FOOTER_LINKS.social.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-[13px] font-light text-[#7a7672] hover:text-[#c8a96c] transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 48, scale: 0.97 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[11px] text-[#605c58] mb-5">צור קשר</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:studio@onepiece.com"
                    className="font-sans text-[13px] font-light text-[#7a7672] hover:text-[#c8a96c] transition-colors duration-300"
                  >
                    studio@onepiece.com
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/972506887763?text=${encodeURIComponent('היי אשמח לקבל פרטים לגבי בניית סיפור מנצח לפרוייקט שלי :)')}`}
                    className="font-sans text-[13px] font-light text-[#7a7672] hover:text-[#c8a96c] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ── שורה תחתונה ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a]"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[11px] text-[#4e4a46]">
              © {year} OnePiece Studio. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModal('privacy')}
                className="font-sans text-[11px] text-[#4e4a46] hover:text-[#7a7672] transition-colors duration-300"
              >
                מדיניות פרטיות
              </button>
              <button
                onClick={() => setModal('terms')}
                className="font-sans text-[11px] text-[#4e4a46] hover:text-[#7a7672] transition-colors duration-300"
              >
                תנאי שימוש
              </button>
            </div>
          </motion.div>

          {/* שם סטודיו ענק ברקע */}
          <motion.div
            className="mt-8 overflow-hidden select-none pointer-events-none"
            aria-hidden
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-serif font-thin text-center leading-none text-[#0c0c0c]"
              style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            >
              OnePiece
            </p>
          </motion.div>

        </div>
      </footer>
    </>
  );
}
