'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// REPLACE: עדכן את כל פרטי הקשר עם המידע האמיתי שלך
const CONTACT_INFO = {
  email: 'studio@onepiece.com',       // REPLACE
  whatsapp: '+972506887763',
  socials: [
    { label: 'Instagram', handle: '@onepiece.studio', href: '#' }, // REPLACE
    { label: 'LinkedIn',  handle: 'OnePiece Studio',  href: '#' }, // REPLACE
    { label: 'Behance',   handle: 'OnePiece Studio',  href: '#' }, // REPLACE
  ],
  location: 'ישראל',                   // REPLACE
};

const SERVICE_OPTIONS = [
  'הדמיות חוץ',
  'הדמיות פנים',
  'תוכניות שיווק',
  'עבודה גרפית',
  'אנימציה וקולנוע',
  'סיור וירטואלי',
  'מספר שירותים',
  'אחר',
];

function Field({
  label,
  children,
  delay,
  inView,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <label className="font-sans text-[11px] text-[#7a7672]">
        {label}
      </label>
      {children}
    </motion.div>
  );
}

const inputClass =
  'bg-transparent border-b border-[#2a2a2a] py-3 font-sans text-[14px] font-light text-[#e8e2d9] placeholder-[#2a2520] focus:outline-none focus:border-[#c8a96c]/50 transition-colors duration-300';

const selectClass =
  'bg-[#080808] border-b border-[#2a2a2a] py-3 font-sans text-[14px] font-light text-[#e8e2d9] focus:outline-none focus:border-[#c8a96c]/50 transition-colors duration-300 appearance-none cursor-pointer';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormState((p) => ({ ...p, [e.target.name]: e.target.value }));

  // REPLACE: חבר לשירות שליחת מייל אמיתי (Formspree, Resend, EmailJS)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* ── שמאל: כותרת + פרטי קשר ── */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label block mb-5">בואו נדבר</span>
              <h2
                className="font-serif font-light leading-[1.1] text-[#e8e2d9] mb-8"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
              >
                התחל
                <br />
                <span className="font-bold text-[#c8a96c]">פרויקט</span>
              </h2>
              <p className="font-sans text-[14px] font-light leading-[2.0] text-[#7a7672] mb-12">
                ספר לנו על הפרויקט שלך ונחזור אליך תוך יום עסקים אחד עם הערכה ראשונית וצעדים מוצעים.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-t border-[#282828] pt-5">
                <p className="font-sans text-[11px] text-[#605c58] mb-1.5">אימייל</p>
                <a href={`mailto:${CONTACT_INFO.email}`}
                  className="font-sans text-[14px] font-light text-[#8a8480] hover:text-[#c8a96c] transition-colors duration-300">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="border-t border-[#282828] pt-5">
                <p className="font-sans text-[11px] text-[#605c58] mb-1.5">WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('היי אשמח לקבל פרטים לגבי בניית סיפור מנצח לפרוייקט שלי :)')}`}
                  className="font-sans text-[14px] font-light text-[#8a8480] hover:text-[#c8a96c] transition-colors duration-300"
                  target="_blank" rel="noopener noreferrer">
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>

              <div className="border-t border-[#282828] pt-5">
                <p className="font-sans text-[11px] text-[#605c58] mb-3">עקבו אחרינו</p>
                <div className="space-y-2.5">
                  {CONTACT_INFO.socials.map(({ label, handle, href }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="font-sans text-[11px] text-[#605c58]">{label}</span>
                      <a href={href}
                        className="font-sans text-[13px] font-light text-[#848078] hover:text-[#c8a96c] transition-colors duration-300"
                        target="_blank" rel="noopener noreferrer">
                        {handle}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#282828] pt-5">
                <p className="font-sans text-[11px] text-[#605c58] mb-1.5">מיקום</p>
                <p className="font-sans text-[14px] font-light text-[#848078]">{CONTACT_INFO.location}</p>
              </div>
            </motion.div>
          </div>

          {/* ── ימין: טופס ── */}
          <div className="lg:col-span-7 lg:col-start-6">
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-start justify-center gap-6 py-20"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-10 h-10 border border-[#c8a96c]/40 flex items-center justify-center">
                  <span className="text-[#c8a96c] text-lg">✓</span>
                </div>
                <h3 className="font-serif font-light text-3xl text-[#e8e2d9]">
                  ההודעה התקבלה
                </h3>
                <p className="font-sans text-[14px] font-light leading-[1.85] text-[#7a7672] max-w-sm">
                  תודה שיצרת קשר. נסקור את הברייף שלך ונחזור אליך תוך יום עסקים אחד.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name:'',email:'',company:'',service:'',message:'' }); }}
                  className="mt-4 font-sans text-[12px] text-[#7a7672] hover:text-[#c8a96c] transition-colors duration-300"
                >
                  שלח הודעה נוספת
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="שם מלא *" delay={0.1} inView={inView}>
                    <input type="text" name="name" required
                      placeholder="שם פרטי ומשפחה"
                      value={formState.name} onChange={handleChange}
                      className={inputClass + ' w-full'} />
                  </Field>
                  <Field label="כתובת אימייל *" delay={0.15} inView={inView}>
                    <input type="email" name="email" required
                      placeholder="you@example.com"
                      value={formState.email} onChange={handleChange}
                      className={inputClass + ' w-full'} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="חברה / סטודיו" delay={0.2} inView={inView}>
                    <input type="text" name="company"
                      placeholder="אופציונלי"
                      value={formState.company} onChange={handleChange}
                      className={inputClass + ' w-full'} />
                  </Field>
                  <Field label="שירות נדרש" delay={0.25} inView={inView}>
                    <div className="relative">
                      <select name="service"
                        value={formState.service} onChange={handleChange}
                        className={selectClass + ' w-full'}>
                        <option value="" disabled>בחר שירות</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#605c58] text-xs">▾</span>
                    </div>
                  </Field>
                </div>

                <Field label="תיאור הפרויקט *" delay={0.3} inView={inView}>
                  <textarea name="message" required rows={5}
                    placeholder="תאר בקצרה את הפרויקט — היקף, לוח זמנים, תוצרים וכל רפרנס שיש לך בראש."
                    value={formState.message} onChange={handleChange}
                    className={inputClass + ' w-full resize-none leading-relaxed'} />
                </Field>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between gap-6 pt-2"
                >
                  <p className="font-sans text-[11px] font-light text-[#505050]">
                    * שדות חובה
                  </p>
                  <button
                    type="submit"
                    className="px-10 py-3.5 bg-[#c8a96c] text-[#080808] font-sans text-[12px] hover:bg-[#d4b97c] active:bg-[#b89558] transition-colors duration-300 whitespace-nowrap"
                  >
                    שלח ברייף
                  </button>
                </motion.div>
              </form>
            )}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">05</span>
      </div>
    </section>
  );
}
