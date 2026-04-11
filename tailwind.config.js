/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── Studio Design Tokens ───────────────────────────────────────────
        studio: {
          bg:             '#080808',
          surface1:       '#0f0f0f',
          surface2:       '#141414',
          surface3:       '#1c1c1c',
          border:         '#1e1e1e',
          'border-light': '#2d2d2d',
          text:           '#e8e2d9',
          'text-sec':     '#8a8480',
          'text-muted':   '#4a4540',
          accent:         '#c8a96c',
          'accent-dim':   '#8a7048',
          'accent-light': '#d4b97c',
        },
      },
      fontFamily: {
        serif: ['Heebo', 'sans-serif'],
        sans:  ['Heebo', 'sans-serif'],
      },
      letterSpacing: {
        label:   '0.25em',
        display: '0.35em',
        loose:   '0.5em',
      },
    },
  },
  plugins: [],
};
