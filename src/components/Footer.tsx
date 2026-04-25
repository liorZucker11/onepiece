'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const FOOTER_LINKS = {
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/minzbergaviv/' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/aviv-minzberg-1799772a8' },
    { label: 'Behance',   href: 'https://www.behance.net/oneviz' },
  ],
};

const LEGAL = {
  privacy: {
    he: {
      title: 'מדיניות פרטיות',
      sections: [
        { body: 'באתר זה נעשה שימוש במידע בסיסי בלבד לצורך יצירת קשר ושיפור חוויית המשתמש.' },
        { body: 'ייתכן והאתר אוסף פרטים כגון שם, טלפון או כתובת אימייל כאשר המשתמש בוחר להשאיר פרטים בטופס יצירת קשר או באמצעי תקשורת אחרים.' },
        { body: 'המידע שנאסף משמש אך ורק לצורך מענה לפניות, מתן שירות ושיפור האתר. לא נעשה שימוש במידע לצרכים אחרים, ולא מועבר לצדדים שלישיים.' },
        { body: 'בנוסף, ייתכן והאתר משתמש בכלים סטטיסטיים (כגון Google Analytics) לצורך ניתוח שימוש באתר ושיפור חוויית המשתמש.' },
        { body: 'בכל שלב ניתן לפנות בבקשה לעדכון או מחיקת פרטים באמצעות יצירת קשר דרך האתר.' },
        { body: 'השימוש באתר מהווה הסכמה למדיניות זו.' },
      ],
    },
    en: {
      title: 'Privacy Policy',
      sections: [
        { body: 'This website only uses basic information for contact purposes and to improve user experience.' },
        { body: 'The website may collect details such as name, phone number or email address when the user chooses to leave details in the contact form or through other means.' },
        { body: 'The information collected is used solely for responding to inquiries, providing service and improving the website. It is not used for other purposes and is not shared with third parties.' },
        { body: 'Additionally, the website may use statistical tools (such as Google Analytics) for usage analysis and improving user experience.' },
        { body: 'At any time, you may request to update or delete your information by contacting us through the website.' },
        { body: 'Use of the website constitutes agreement to this policy.' },
      ],
    },
  },
  terms: {
    he: {
      title: 'תנאי שימוש',
      sections: [
        { body: 'האתר מציג עבודות, הדמיות ותכנים שנוצרו על ידי OneViz Studio, והם מוגנים בזכויות יוצרים. אין להעתיק, להשתמש או להפיץ תכנים מהאתר ללא אישור מראש.' },
        { body: 'התוכן באתר נועד למטרות מידע והתרשמות בלבד, ואינו מהווה התחייבות מכל סוג.' },
        { body: 'הסטודיו אינו אחראי לנזקים ישירים או עקיפים שעלולים להיגרם כתוצאה מהשימוש באתר.' },
        { body: 'ייתכן והאתר יכיל קישורים לאתרים חיצוניים — האחריות על התוכן בהם אינה של הסטודיו.' },
        { body: 'הסטודיו שומר לעצמו את הזכות לעדכן או לשנות את תנאי השימוש בכל עת.' },
        { body: 'השימוש באתר מהווה הסכמה לתנאים אלו.' },
      ],
    },
    en: {
      title: 'Terms of Use',
      sections: [
        { body: 'This website presents works, visualizations and content created by OneViz Studio, which are protected by copyright. No content may be copied, used or distributed without prior permission.' },
        { body: 'The content on the website is for informational and impressional purposes only, and does not constitute a commitment of any kind.' },
        { body: 'The studio is not responsible for direct or indirect damages that may result from use of the website.' },
        { body: 'The website may contain links to external websites — the studio is not responsible for their content.' },
        { body: 'The studio reserves the right to update or change these terms of use at any time.' },
        { body: 'Use of the website constitutes agreement to these terms.' },
      ],
    },
  },
};

type ModalKey = 'privacy' | 'terms' | null;

function LegalModal({ open, onClose, modalKey }: { open: boolean; onClose: () => void; modalKey: ModalKey }) {
  const { lang } = useLanguage();
  const data = modalKey ? LEGAL[modalKey][lang] : null;

  return (
    <AnimatePresence>
      {open && data && (
        <>
          <motion.div
            className="fixed inset-0 bg-[#080808]/85 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              className="pointer-events-auto w-full max-w-xl bg-[#0e0e0e] border border-[#1e1e1e] p-8 lg:p-10 flex flex-col gap-7 max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-6">
                <h2 className="font-sans font-light text-[22px] text-[#ffffff] leading-snug">{data.title}</h2>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#a0a09c] hover:text-[#ffffff] transition-colors duration-200"
                  aria-label="Close"
                >✕</button>
              </div>
              <div className="h-px bg-[#1e1e1e]" />
              <div className="flex flex-col gap-5">
                {data.sections.map((s, i) => (
                  <p key={i} className="font-sans text-[14px] font-light leading-[2.0] text-[#c0bcb8]">{s.body}</p>
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
  const { lang } = useLanguage();
  const isHe = lang === 'he';

  const waMessage = isHe
    ? 'היי אשמח לקבל פרטים לגבי בניית סיפור מנצח לפרוייקט שלי :)'
    : 'Hi, I\'d love to get details about building a winning story for my project :)';

  return (
    <>
      <LegalModal open={modal !== null} onClose={() => setModal(null)} modalKey={modal} />

      <footer ref={ref} className="relative bg-[#080808] pt-16 pb-10">
        <div className="rule-fade absolute top-0 inset-x-0" />
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 48, scale: 0.97 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[11px] text-[#a0a09c] mb-5">
                {isHe ? 'עקבו אחרינו' : 'Follow Us'}
              </p>
              <ul className="space-y-3">
                {FOOTER_LINKS.social.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="font-sans text-[13px] font-light text-[#c0bcb8] hover:text-[#c8a96c] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
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
              <p className="font-sans text-[11px] text-[#a0a09c] mb-5">
                {isHe ? 'צור קשר' : 'Contact'}
              </p>
              <ul className="space-y-3">
                <li>
                  <a href="tel:0506887763" className="font-sans text-[13px] font-light text-[#c0bcb8] hover:text-[#c8a96c] transition-colors duration-300">
                    050-688-7763
                  </a>
                </li>
                <li>
                  <a href="mailto:onevizam@gmail.com" className="font-sans text-[13px] font-light text-[#c0bcb8] hover:text-[#c8a96c] transition-colors duration-300">
                    onevizam@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/972506887763?text=${encodeURIComponent(waMessage)}`}
                    className="font-sans text-[13px] font-light text-[#c0bcb8] hover:text-[#c8a96c] transition-colors duration-300"
                    target="_blank" rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <span className="font-sans text-[13px] font-light text-[#c0bcb8]">
                    {isHe ? 'ישראל' : 'Israel'}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a]"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[11px] text-[#909090]">
              © {year} OneViz Studio. {isHe ? 'כל הזכויות שמורות.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setModal('privacy')}
                className="font-sans text-[11px] text-[#909090] hover:text-[#c0bcb8] transition-colors duration-300"
              >
                {isHe ? 'מדיניות פרטיות' : 'Privacy Policy'}
              </button>
              <button
                onClick={() => setModal('terms')}
                className="font-sans text-[11px] text-[#909090] hover:text-[#c0bcb8] transition-colors duration-300"
              >
                {isHe ? 'תנאי שימוש' : 'Terms of Use'}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 overflow-hidden select-none pointer-events-none flex justify-center"
            aria-hidden
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/OneViz_logo_text_white.png"
              alt=""
              className="w-full max-w-lg opacity-[0.09]"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>

        </div>
      </footer>
    </>
  );
}
