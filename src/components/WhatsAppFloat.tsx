'use client';

import { motion } from 'framer-motion';

const WA_LINK = `https://wa.me/972506887763?text=${encodeURIComponent('היי אשמח לקבל פרטים לגבי בניית סיפור מנצח לפרוייקט שלי :)')}`;

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="פתח שיחת WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#0f0f0f] border border-[#c8a96c]/50 shadow-lg shadow-black/60 hover:border-[#c8a96c] hover:bg-[#141414] transition-all duration-300"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="#c8a96c"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.44.638 4.731 1.757 6.72L2 30l7.52-1.724A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.88-1.607l-.42-.25-4.462 1.022 1.054-4.34-.274-.444A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.34-8.64c-.347-.174-2.055-1.013-2.373-1.129-.319-.116-.551-.174-.784.174-.232.347-.9 1.129-1.103 1.362-.203.232-.406.26-.753.087-.347-.174-1.465-.54-2.79-1.72-1.031-.92-1.727-2.055-1.93-2.402-.203-.347-.022-.535.153-.708.157-.156.347-.406.52-.61.174-.203.232-.347.347-.578.116-.232.058-.435-.029-.61-.087-.174-.784-1.89-1.074-2.588-.283-.68-.57-.587-.784-.598l-.667-.012c-.232 0-.61.087-.928.435-.319.347-1.218 1.19-1.218 2.902s1.247 3.366 1.42 3.598c.174.232 2.455 3.748 5.95 5.254.831.359 1.48.573 1.986.733.834.265 1.594.228 2.194.138.669-.1 2.055-.84 2.346-1.652.29-.812.29-1.508.203-1.652-.087-.145-.319-.232-.667-.406z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping bg-[#c8a96c] opacity-10" />
    </motion.a>
  );
}
