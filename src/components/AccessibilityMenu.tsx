'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const FEATURES = [
  {
    key: 'largeText',
    he: 'הגדלת טקסט',
    en: 'Larger Text',
    cssClass: 'acc-large-text',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <text x="2" y="17" fontSize="14" fontWeight="bold" stroke="none" fill="currentColor">A</text>
        <text x="13" y="13" fontSize="9" stroke="none" fill="currentColor">A</text>
      </svg>
    ),
  },
  {
    key: 'grayscale',
    he: 'גווני אפור',
    en: 'Grayscale',
    cssClass: 'acc-grayscale',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18V3z" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    key: 'underlineLinks',
    he: 'הדגשת קישורים',
    en: 'Underline Links',
    cssClass: 'acc-underline-links',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 4v8a6 6 0 0 0 12 0V4" />
        <line x1="4" y1="20" x2="20" y2="20" />
      </svg>
    ),
  },
  {
    key: 'readableFont',
    he: 'פונט קריא',
    en: 'Readable Font',
    cssClass: 'acc-readable-font',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
] as const;

type FeatureKey = (typeof FEATURES)[number]['key'];
type State = Record<FeatureKey, boolean>;

const INITIAL: State = {
  largeText:      false,
  grayscale:      false,
  underlineLinks: false,
  readableFont:   false,
};

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <circle cx="12" cy="3.5" r="1.5" />
      <path d="M17 7.5H7l1.5 5H6l-1 5h2l.7-3.5h8.6L17 17h2l-1-5h-2.5L17 7.5z" />
      <path d="M10.5 12.5 9 19h2l1-4 1 4h2l-1.5-6.5h-3z" />
    </svg>
  );
}

export default function AccessibilityMenu() {
  const [open,    setOpen]    = useState(false);
  const [state,   setState]   = useState<State>(INITIAL);
  const [showDecl, setShowDecl] = useState(false);
  const { lang } = useLanguage();
  const isHe = lang === 'he';

  useEffect(() => {
    const html = document.documentElement;
    FEATURES.forEach(({ key, cssClass }) => {
      html.classList.toggle(cssClass, state[key]);
    });
  }, [state]);

  const toggle = (key: FeatureKey) =>
    setState((prev) => ({ ...prev, [key]: !prev[key] }));

  const resetAll = () => {
    setState(INITIAL);
    document.documentElement.classList.remove(
      ...FEATURES.map((f) => f.cssClass)
    );
  };

  return (
    <>
      {/* ── כפתור צף ── */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center gap-1.5 w-10 bg-[#0f0f0f] border border-[#c8a96c]/50 border-l-0 py-4 text-[#c8a96c] hover:bg-[#141414] hover:border-[#c8a96c] transition-all duration-300 shadow-lg shadow-black/60"
        aria-label={isHe ? 'תפריט נגישות' : 'Accessibility menu'}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <AccessibilityIcon />
        <span
          className="font-sans text-[8px] tracking-[0.05em] text-[#c8a96c]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {isHe ? 'נגישות' : 'Access'}
        </span>
      </motion.button>

      {/* ── פאנל ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed left-10 top-1/2 -translate-y-1/2 z-50 w-72 bg-[#0e0e0e] border border-[#1e1e1e] shadow-2xl shadow-black/70 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              dir="rtl"
            >
              {/* כותרת */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e1e1e]">
                <div className="flex items-center gap-2.5 text-[#c8a96c]">
                  <AccessibilityIcon />
                  <span className="font-sans text-[13px] tracking-[0.08em]">
                    {isHe ? 'תפריט נגישות' : 'Accessibility'}
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-[#606060] hover:text-[#ffffff] transition-colors"
                  aria-label="סגור"
                >
                  ✕
                </button>
              </div>

              {/* כלים */}
              <div className="p-4 flex flex-col gap-2">
                {FEATURES.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => toggle(f.key)}
                    className={[
                      'flex items-center gap-3 px-4 py-3 border text-right transition-all duration-200',
                      state[f.key]
                        ? 'border-[#c8a96c]/60 bg-[#c8a96c]/08 text-[#c8a96c]'
                        : 'border-[#222] text-[#c0bcb8] hover:border-[#333] hover:text-[#ffffff]',
                    ].join(' ')}
                  >
                    <span className="flex-shrink-0">{f.icon}</span>
                    <span className="font-sans text-[12px]">
                      {isHe ? f.he : f.en}
                    </span>
                    {state[f.key] && (
                      <span className="mr-auto font-sans text-[10px] text-[#c8a96c]/70">
                        {isHe ? 'פעיל' : 'On'}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* איפוס + הצהרה */}
              <div className="px-4 pb-4 flex flex-col gap-2 border-t border-[#1a1a1a] pt-3">
                <button
                  onClick={resetAll}
                  className="w-full py-2.5 border border-[#282828] text-[#909090] font-sans text-[11px] hover:text-[#ffffff] hover:border-[#444] transition-colors duration-200"
                >
                  {isHe ? 'איפוס הגדרות' : 'Reset All'}
                </button>
                <button
                  onClick={() => setShowDecl(true)}
                  className="w-full py-2.5 border border-[#282828] text-[#909090] font-sans text-[11px] hover:text-[#c8a96c] hover:border-[#c8a96c]/40 transition-colors duration-200"
                >
                  {isHe ? 'הצהרת נגישות' : 'Accessibility Statement'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── מודל הצהרת נגישות ── */}
      <AnimatePresence>
        {showDecl && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#080808]/85 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowDecl(false)}
            />
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center p-6 pointer-events-none"
            >
              <motion.div
                className="pointer-events-auto w-full max-w-lg bg-[#0e0e0e] border border-[#1e1e1e] p-8 flex flex-col gap-5 max-h-[80vh] overflow-y-auto"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                dir="rtl"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-sans font-light text-[20px] text-[#ffffff]">
                    {isHe ? 'הצהרת נגישות' : 'Accessibility Statement'}
                  </h2>
                  <button
                    onClick={() => setShowDecl(false)}
                    className="text-[#606060] hover:text-[#ffffff] transition-colors flex-shrink-0"
                  >✕</button>
                </div>

                <div className="h-px bg-[#1e1e1e]" />

                <div className="flex flex-col gap-4 font-sans text-[13px] font-light leading-[2.0] text-[#c0bcb8]">
                  {isHe ? (
                    <>
                      <p>
                        <span className="text-[#ffffff]">OnePiece Studio</span> פועלת להנגשת אתר האינטרנט שלה בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח–1998, ולתקנות הנגישות שנקבעו מכוחו.
                      </p>
                      <p>האתר שואף לעמוד בדרישות תקן WCAG 2.1 ברמת AA.</p>

                      <p className="text-[#c8a96c]">התאמות נגישות שבוצעו באתר:</p>
                      <ul className="flex flex-col gap-1.5 pr-3">
                        {[
                          'מבנה אתר ברור והיררכי באמצעות כותרות (H1, H2 וכו׳)',
                          'תמיכה בניווט באמצעות מקלדת',
                          'התאמה לשימוש עם קוראי מסך',
                          'שימוש בטקסטים חלופיים (alt) לתמונות',
                          'התאמות ניגודיות ושיפור קריאות טקסט',
                          'הדגשת קישורים ומוקדי אינטראקציה',
                          'אפשרות לשינוי גודל טקסט באמצעות תפריט נגישות',
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-[#c8a96c] flex-shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p>
                        <span className="text-[#c8a96c]">תפריט נגישות: </span>
                        באתר מוטמע תפריט נגישות המאפשר שינוי גודל טקסט, פונט קריא והדגשת קישורים.
                      </p>

                      <p>
                        <span className="text-[#c8a96c]">חריגים: </span>
                        ייתכן וחלקים מסוימים באתר טרם הונגשו במלואם. אנו ממשיכים לפעול לשיפור הנגישות.
                      </p>

                      <p className="text-[#c8a96c]">פניות בנושא נגישות:</p>
                      <p>אם נתקלתם בבעיה, נשמח שתעדכנו אותנו ונטפל בכך בהקדם.</p>
                      <p className="text-[#ffffff]">רכזת נגישות: ליאור צוקר מינצברג</p>
                      <div className="flex flex-col gap-1">
                        <a href="tel:0506887763" className="text-[#c8a96c] hover:text-[#ffffff] transition-colors">050-688-7763</a>
                        <a href="mailto:onepiece01com@gmail.com" className="text-[#c8a96c] hover:text-[#ffffff] transition-colors">onepiece01com@gmail.com</a>
                      </div>
                      <p className="text-[#707070] text-[11px]">
                        זמן טיפול בפניות: עד 7 ימי עסקים. | תאריך עדכון אחרון: אפריל 2026
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <span className="text-[#ffffff]">OnePiece Studio</span> is committed to making its website accessible in accordance with the Equal Rights for Persons with Disabilities Law (1998) and the accessibility regulations enacted under it.
                      </p>
                      <p>This site aims to conform to WCAG 2.1 Level AA.</p>

                      <p className="text-[#c8a96c]">Accessibility features implemented:</p>
                      <ul className="flex flex-col gap-1.5 pr-3">
                        {[
                          'Clear hierarchical structure using headings (H1, H2, etc.)',
                          'Full keyboard navigation support',
                          'Screen reader compatibility',
                          'Descriptive alt text for images',
                          'Sufficient color contrast and text readability',
                          'Visible focus indicators for interactive elements',
                          'Text size adjustment via the accessibility menu',
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-[#c8a96c] flex-shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p>
                        <span className="text-[#c8a96c]">Accessibility menu: </span>
                        The site includes an accessibility menu for text size, readable font, and link highlighting.
                      </p>

                      <p>
                        <span className="text-[#c8a96c]">Exceptions: </span>
                        Some areas may not yet be fully accessible. We continue to improve.
                      </p>

                      <p className="text-[#c8a96c]">Contact for accessibility issues:</p>
                      <p className="text-[#ffffff]">Accessibility Coordinator: Lior Zuker Minzberg</p>
                      <div className="flex flex-col gap-1">
                        <a href="tel:0506887763" className="text-[#c8a96c] hover:text-[#ffffff] transition-colors">050-688-7763</a>
                        <a href="mailto:onepiece01com@gmail.com" className="text-[#c8a96c] hover:text-[#ffffff] transition-colors">onepiece01com@gmail.com</a>
                      </div>
                      <p className="text-[#707070] text-[11px]">
                        Response time: up to 7 business days. | Last updated: April 2026
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
