import { Fraunces, Nunito_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollReveal from '../components/ScrollReveal';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.dtgarimagoel.com'),
  title: {
    default: 'Dt. Garima Goel | Dietitian & Nutritionist — Online Diet Consultation',
    template: '%s | Dt. Garima Goel',
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
    siteName: "Dt. Garima's Diet Clinic",
    locale: 'en_IN',
    title: 'Dt. Garima Goel | Dietitian & Nutritionist',
    description:
      'Personalised diet plans and online nutrition consultations for a healthy, disease-free lifestyle.',
  },
  twitter: {
    card: 'summary',
    title: 'Dt. Garima Goel | Dietitian & Nutritionist',
    description:
      'Personalised diet plans and online nutrition consultations for a healthy, disease-free lifestyle.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunitoSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollReveal />
      </body>
    </html>
  );
}
