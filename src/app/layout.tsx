import type { Metadata } from 'next';
import './globals.css';

// REPLACE: Update all metadata fields with your actual studio information
export const metadata: Metadata = {
  title: 'OneViz Studio — הדמיות אדריכליות',
  description:
    'סטודיו פרימיום להדמיות אדריכליות. הדמיות חוץ ופנים, אנימציות קולנועיות, תוכניות שיווק, עבודות גרפיות וסיורים וירטואליים.',
  keywords: [
    'הדמיות אדריכליות',
    'הדמיה תלת מימדית',
    'אנימציה אדריכלית',
    'סיור וירטואלי',
    'תוכניות קומה',
    'הדמיות פנים',
    'הדמיות חוץ',
  ],
  openGraph: {
    title: 'OneViz Studio — הדמיות אדריכליות',
    description: 'הדמיות אדריכליות פרימיום. מקונספט ועד מסירה קולנועית.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Fonts are loaded via globals.css @import — no next/font needed for static export
    <html lang="he" dir="rtl">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* REPLACE: Add your favicon at /public/favicon.ico or /public/favicon.svg */}
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
