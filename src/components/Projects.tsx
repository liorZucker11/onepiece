'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// REPLACE: החלף בנתוני הפרויקטים האמיתיים שלך, כולל תמונות ב-/public/images/projects/
const PROJECTS = [
  {
    id: 1,
    title: 'מגדל מרידיאן',
    category: 'חוץ',
    location: 'וורשה, פולין',
    year: '2024',
    image: null,
    gradientFrom: '#0e0c0a',
    gradientTo: '#181410',
    accentColor: 'rgba(200,169,108,0.08)',
    size: 'large',
  },
  {
    id: 2,
    title: 'רזידנס K',
    category: 'פנים',
    location: 'קרקוב, פולין',
    year: '2024',
    image: null,
    gradientFrom: '#0a0e0c',
    gradientTo: '#0d1210',
    accentColor: 'rgba(120,160,140,0.06)',
    size: 'small',
  },
  {
    id: 3,
    title: 'שער הנמל',
    category: 'אנימציה',
    location: 'גדנסק, פולין',
    year: '2023',
    image: null,
    gradientFrom: '#0a0c10',
    gradientTo: '#0d1016',
    accentColor: 'rgba(80,110,160,0.06)',
    size: 'small',
  },
  {
    id: 4,
    title: 'הפביליון',
    category: 'חוץ',
    location: 'ברלין, גרמניה',
    year: '2023',
    image: null,
    gradientFrom: '#100e0a',
    gradientTo: '#161210',
    accentColor: 'rgba(200,169,108,0.06)',
    size: 'large',
  },
  {
    id: 5,
    title: 'סדרת לופט',
    category: 'פנים',
    location: 'פוזנן, פולין',
    year: '2023',
    image: null,
    gradientFrom: '#0e0a0a',
    gradientTo: '#140e0e',
    accentColor: 'rgba(180,120,100,0.06)',
    size: 'small',
  },
  {
    id: 6,
    title: 'הרובע העירוני',
    category: 'סיור וירטואלי',
    location: 'ורוצלב, פולין',
    year: '2022',
    image: null,
    gradientFrom: '#0a0c0e',
    gradientTo: '#0e1014',
    accentColor: 'rgba(100,130,180,0.06)',
    size: 'small',
  },
] as const;

type Category = 'הכל' | 'חוץ' | 'פנים' | 'אנימציה' | 'סיור וירטואלי' | 'תוכניות שיווק';

const CATEGORIES: Category[] = ['הכל', 'חוץ', 'פנים', 'אנימציה', 'סיור וירטואלי', 'תוכניות שיווק'];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLarge = project.size === 'large';

  return (
    <motion.div
      ref={ref}
      className={[
        'group relative overflow-hidden cursor-pointer',
        isLarge ? 'sm:col-span-2' : '',
        isLarge ? 'aspect-[2/1]' : 'aspect-[4/3]',
      ].join(' ')}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* REPLACE: הוסף תמונה אמיתית:
          <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 40% 50%, ${project.accentColor} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="font-sans text-[10px] text-[#3a3530]">
            החלף בתמונת פרויקט
          </span>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <p className="section-label mb-2">{project.category}</p>
        <h3 className="font-serif font-light text-2xl lg:text-3xl text-[#e8e2d9] leading-tight mb-2">
          {project.title}
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-sans text-[11px] text-[#6a6460]">{project.location}</span>
          <span className="h-px w-4 bg-[#3a3530]" />
          <span className="font-sans text-[11px] text-[#7a7672]">{project.year}</span>
        </div>
      </div>

      <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-5 h-5 border-t border-l border-[#c8a96c]/50" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('הכל');
  const headRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(headRef, { once: true, margin: '-80px' });

  const filtered =
    activeFilter === 'הכל'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32 lg:py-48 bg-[#080808]">
      <div className="rule-fade absolute top-0 inset-x-0" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        <div ref={headRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label block mb-5">תיק עבודות</span>
            <h2
              className="font-serif font-light leading-[1.1] text-[#e8e2d9]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              עבודות
              <br />
              <span className="font-bold text-[#c8a96c]">נבחרות</span>
            </h2>
          </motion.div>
        </div>

        {/* פילטר קטגוריות */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={[
                'font-sans text-[11px] px-4 py-2.5 border transition-all duration-300',
                activeFilter === cat
                  ? 'border-[#c8a96c]/60 text-[#c8a96c] bg-[#c8a96c]/05'
                  : 'border-[#282828] text-[#7a7672] hover:border-[#2a2a2a] hover:text-[#8a8480]',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-4 font-sans text-[12px] text-[#7a7672] hover:text-[#c8a96c] transition-colors duration-300"
          >
            <span className="h-px w-8 bg-[#2a2520] group-hover:bg-[#c8a96c]/60 transition-colors duration-300" />
            פנה אלינו לגבי פרויקט
            <span className="h-px w-8 bg-[#2a2520] group-hover:bg-[#c8a96c]/60 transition-colors duration-300" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-4 pointer-events-none overflow-hidden select-none" aria-hidden>
        <span className="font-serif font-thin text-[14rem] leading-none text-[#0c0c0c]">03</span>
      </div>
    </section>
  );
}
