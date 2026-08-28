import fs from 'node:fs';
import path from 'node:path';
import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollReveal from '../components/ScrollReveal';

// Serif headings echo the POSHAN wordmark in the logo; Inter carries the
// body copy and UI, where neutrality and legibility matter more.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.dtgarimagoel.com'),
  title: {
    default: 'Poshan by Dt. Garima | Dietitian & Nutritionist — Online Diet Consultation',
    template: '%s | Poshan by Dt. Garima',
  },
  description:
    'Dt. Garima Goel (M.Sc. Food & Nutrition, PGIMER-trained) offers personalised diet plans and online nutrition consultations for weight management, PCOS/PCOD, diabetes, thyroid and more.',
  keywords: [
    'dietitian',
    'nutritionist',
    'online diet consultation',
    'weight loss dietitian',
    'PCOS diet plan',
    'diabetes diet',
    'Dt. Garima Goel',
  ],
  authors: [{ name: 'Dt. Garima Goel' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: "Poshan by Dt. Garima",
    locale: 'en_IN',
    title: 'Poshan by Dt. Garima | Clinical Nutrition & Lifestyle Care',
    description:
      'Personalised diet plans and online nutrition consultations for a healthy, disease-free lifestyle.',
  },
  twitter: {
    card: 'summary',
    title: 'Poshan by Dt. Garima | Clinical Nutrition & Lifestyle Care',
    description:
      'Personalised diet plans and online nutrition consultations for a healthy, disease-free lifestyle.',
  },
};

// Resolved at build time: use the real logo artwork when it's present in
// /public, otherwise fall back to the drawn SVG lockup so nothing breaks.
const hasLogo = fs.existsSync(path.join(process.cwd(), 'public', 'logo.png'));

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body>
        <Header hasLogo={hasLogo} />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollReveal />
      </body>
    </html>
  );
}
