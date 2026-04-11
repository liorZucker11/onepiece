'use client';

const FOOTER_LINKS = {
  studio: [
    { label: 'אודות',     href: 'about'    },
    { label: 'שירותים',   href: 'services' },
    { label: 'פרויקטים', href: 'projects' },
    { label: 'תהליך',    href: 'process'  },
  ],
  services: [
    { label: 'הדמיות חוץ',        href: 'services' },
    { label: 'הדמיות פנים',        href: 'services' },
    { label: 'תוכניות שיווק',     href: 'services' },
    { label: 'אנימציה וקולנוע',   href: 'services' },
    { label: 'סיורים וירטואליים', href: 'services' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn',  href: '#' },
    { label: 'Behance',   href: '#' },
  ],
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] pt-16 pb-10">
      <div className="rule-fade absolute top-0 inset-x-0" />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* ── עמודות קישורים ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
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
          </div>

          <div>
            <p className="font-sans text-[11px] text-[#605c58] mb-5">צור קשר</p>
            <ul className="space-y-3">
              <li>
                {/* REPLACE: כתובת המייל שלך */}
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
          </div>
        </div>

        {/* ── שורה תחתונה ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a]">
          <p className="font-sans text-[11px] text-[#4e4a46]">
            © {year} OnePiece Studio. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-6">
            <button className="font-sans text-[11px] text-[#4e4a46] hover:text-[#7a7672] transition-colors duration-300">
              מדיניות פרטיות
            </button>
            <button className="font-sans text-[11px] text-[#4e4a46] hover:text-[#7a7672] transition-colors duration-300">
              תנאי שימוש
            </button>
          </div>
        </div>

        {/* שם סטודיו ענק ברקע */}
        <div className="mt-8 overflow-hidden select-none pointer-events-none" aria-hidden>
          <p
            className="font-serif font-thin text-center leading-none text-[#0c0c0c]"
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
          >
            OnePiece
          </p>
        </div>

      </div>
    </footer>
  );
}
