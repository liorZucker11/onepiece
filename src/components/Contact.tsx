'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/contexts/LanguageContext';

const SERVICE_OPTIONS = {
  he: ['הדמיית חוץ', 'הדמיית פנים', 'עבודה גרפית', 'סרטון אנימציה', 'סיור וירטואלי'],
  en: ['Exterior Render', 'Interior Render', 'Graphic Work', 'Animation Video', 'Virtual Tour'],
};

function Field({
  label, children, delay, inView,
}: { label: string; children: React.ReactNode; delay: number; inView: boolean }) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 52, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <label className="font-sans text-[11px] text-[#c0bcb8]">{label}</label>
      {children}
    </motion.div>
  );
}

const inputClass =
  'bg-transparent border-b border-[#2a2a2a] py-3 font-sans text-[14px] font-light text-[#ffffff] placeholder-[#4a4540] focus:outline-none focus:border-[#c8a96c]/50 transition-colors duration-300';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: false, margin: '-80px' });
  const { lang }   = useLanguage();
  const isHe       = lang === 'he';

  const [state, handleSubmit] = useForm('mojyyeer');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const services = isHe ? SERVICE_OPTIONS.he : SERVICE_OPTIONS.en;

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 56, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label block mb-6">{isHe ? 'צור קשר' : 'Contact'}</span>
            <h2
              className="font-serif font-light leading-[1.1] text-[#ffffff] mb-8"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              {isHe ? (
                <>התחל<br /><span className="font-bold text-[#c8a96c]">פרויקט</span></>
              ) : (
                <>Start<br /><span className="font-bold text-[#c8a96c]">a Project</span></>
              )}
            </h2>
            <p className="font-sans text-[15px] font-light leading-[2.0] text-[#c0bcb8]">
              {isHe
                ? 'ספר לנו על הפרויקט שלך ונחזור אליך תוך יום עסקים אחד עם הערכה ראשונית וצעדים מוצעים.'
                : 'Tell us about your project and we\'ll get back to you within one business day with an initial estimate and suggested next steps.'}
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {state.succeeded ? (
            <motion.div
              className="flex flex-col items-center justify-center gap-6 py-24 text-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 border border-[#c8a96c]/40 flex items-center justify-center">
                <span className="text-[#c8a96c] text-xl">✓</span>
              </div>
              <h3 className="font-serif font-light text-3xl text-[#ffffff]">
                {isHe ? 'ההודעה התקבלה' : 'Message Received'}
              </h3>
              <p className="font-sans text-[14px] font-light leading-[1.85] text-[#c0bcb8] max-w-sm">
                {isHe
                  ? 'תודה שיצרת קשר. נסקור את הפרטים ונחזור אליך תוך יום עסקים אחד.'
                  : 'Thank you for getting in touch. We\'ll review the details and get back to you within one business day.'}
              </p>
              <p className="font-sans text-[13px] font-light leading-[1.85] text-[#a0a09c] max-w-sm">
                {isHe
                  ? 'רוצה לפנות אלינו ישירות? פרטי הקשר נמצאים בתחתית העמוד, או לחץ על כפתור הווטסאפ.'
                  : 'Want to reach us directly? Contact details are at the bottom of the page, or click the WhatsApp button.'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <Field label={isHe ? 'שם מלא *' : 'Full Name *'} delay={0.1} inView={inView}>
                  <input type="text" name="name" required
                    placeholder={isHe ? 'שם פרטי ומשפחה' : 'First and last name'}
                    className={inputClass + ' w-full'} />
                  <ValidationError field="name" errors={state.errors} className="font-sans text-[11px] text-red-400 mt-1" />
                </Field>
                <Field label={isHe ? 'מספר טלפון *' : 'Phone Number *'} delay={0.15} inView={inView}>
                  <input type="tel" name="phone" required
                    placeholder={isHe ? '050-000-0000' : '050-000-0000'}
                    className={inputClass + ' w-full'} />
                  <ValidationError field="phone" errors={state.errors} className="font-sans text-[11px] text-red-400 mt-1" />
                </Field>
              </div>

              <Field label={isHe ? 'חברה / סטודיו' : 'Company / Studio'} delay={0.2} inView={inView}>
                <input type="text" name="company"
                  placeholder={isHe ? 'אופציונלי' : 'Optional'}
                  className={inputClass + ' w-full'} />
              </Field>

              <Field label={isHe ? 'שירותים נדרשים' : 'Required Services'} delay={0.25} inView={inView}>
                <input type="hidden" name="service" value={selectedServices.join(', ')} />
                <div className="flex flex-wrap gap-2 pt-1">
                  {services.map((s) => {
                    const active = selectedServices.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={[
                          'font-sans text-[11px] px-4 py-2 border transition-all duration-200',
                          active
                            ? 'border-[#c8a96c]/60 text-[#c8a96c] bg-[#c8a96c]/08'
                            : 'border-[#282828] text-[#c0bcb8] hover:border-[#3a3a3a] hover:text-[#a0a0a0]',
                        ].join(' ')}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label={isHe ? 'תיאור הפרויקט' : 'Project Description'} delay={0.3} inView={inView}>
                <textarea name="message" rows={5}
                  placeholder={isHe
                    ? 'תאר בקצרה את הפרויקט — היקף, לוח זמנים, תוצרים וכל רפרנס שיש לך בראש.'
                    : 'Briefly describe the project — scope, timeline, deliverables and any references you have in mind.'}
                  className={inputClass + ' w-full resize-none leading-relaxed'} />
              </Field>

              <motion.div
                initial={{ opacity: 0, y: 44, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 56, scale: 0.97 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-between gap-6 pt-2"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="font-sans text-[11px] font-light text-[#909090]">
                    {isHe ? '* שדות חובה' : '* Required fields'}
                  </p>
                  <ValidationError errors={state.errors} className="font-sans text-[11px] text-red-400" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-12 py-4 bg-[#c8a96c] text-[#080808] font-sans text-[12px] tracking-[0.2em] uppercase hover:bg-[#d4b97c] active:bg-[#b89558] transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting
                    ? (isHe ? '...שולח' : 'Sending...')
                    : (isHe ? 'שלח פרטים' : 'Send Details')}
                </button>
              </motion.div>
            </form>
          )}
        </div>

      </div>

      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">04</span>
      </div>
    </section>
  );
}
