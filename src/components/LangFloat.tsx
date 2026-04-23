'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LangFloat() {
  const { lang, setLang } = useLanguage();
  const isHe = lang === 'he';

  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50 flex border border-[#c8a96c]/50 bg-[#0f0f0f] shadow-lg shadow-black/60 overflow-hidden"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontSize: '10px' }}
    >
      <motion.div
        className="absolute top-0 bottom-0 w-1/2 bg-[#c8a96c]/15 border border-[#c8a96c]/50"
        animate={{ x: isHe ? '0%' : '100%' }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <button
        onClick={() => setLang('he')}
        className={`relative z-10 px-4 py-3 font-sans tracking-[0.06em] transition-colors duration-200 ${isHe ? 'text-[#c8a96c]' : 'text-[#a0a09c] hover:text-[#ffffff]'}`}
      >
        עברית
      </button>
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 px-4 py-3 font-sans tracking-[0.06em] transition-colors duration-200 ${!isHe ? 'text-[#c8a96c]' : 'text-[#a0a09c] hover:text-[#ffffff]'}`}
      >
        English
      </button>
    </motion.div>
  );
}
