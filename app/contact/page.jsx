import Link from 'next/link';

export const metadata = {
  title: 'Contact & Book Consultation',
  description:
    'Book an online diet consultation with Dt. Garima Goel. Call or WhatsApp +91 73409 40620. Consultation hours: Mon–Sat, 10 AM – 1 PM & 2 – 5 PM.',
  alternates: { canonical: '/contact/' },
};

const WA_LINK =
  'https://wa.me/917340940620?text=Hi%20Dt.%20Garima%2C%20I%27d%20like%20to%20book%20a%20consultation.';

const FAQS = [
  {
    q: 'How do online consultations work?',
    a: 'After you book, we connect over a video or phone call at your scheduled time. We discuss your health history, reports, lifestyle and goals, and you receive your personalised diet plan afterwards — usually within 24–48 hours.',
  },
  {
    q: 'Do I need any medical reports before the consultation?',
    a: 'Recent reports (blood sugar, thyroid, lipid profile, etc.) are helpful for conditions like diabetes, PCOS or hypertension, but they are not mandatory for a first consultation. If needed, I will suggest which tests to get.',
  },
  {
    q: 'Will the diet plan use food available in my home?',
    a: 'Yes — that is the whole point. Plans are built around everyday Indian ingredients and your family’s regular meals. No exotic superfoods or expensive special products.',
  },
  {
    q: 'How often are follow-ups?',
    a: 'Weekly. Regular follow-ups are where the real results happen — we track progress, fix hurdles and adjust the plan as your body responds.',
  },
  {
    q: 'Can you help with medical conditions like diabetes or thyroid?',
    a: 'Yes. I am trained in clinical dietetics (PGIMER, Chandigarh) and design therapeutic diets for diabetes, hypertension, thyroid disorders, PCOS and more — always alongside your doctor’s treatment, never replacing it.',
  },
];

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Contact
          </p>
          <h1>Book Your Consultation</h1>
          <p>
            Ready to start? Call, WhatsApp or DM on Instagram — I&apos;ll get back to you within
            consultation hours.
          </p>
        </div>
      </section>

      {/* ============ CONTACT CARDS ============ */}
      <section aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
            Contact options
          </h2>
          <div className="contact-grid">
            <div className="contact-card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Call</h3>
              <a className="big" href="tel:+917340940620">+91 73409 40620</a>
              <p>Mon–Sat, during consultation hours</p>
            </div>

            <div className="contact-card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <a className="big" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
              <p>Fastest way to book — replies within hours</p>
            </div>

            <div className="contact-card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3>Instagram</h3>
              <a className="big" href="https://www.instagram.com/nutrinator_" target="_blank" rel="noopener noreferrer">
                @nutrinator_
              </a>
              <p>Daily nutrition tips, recipes &amp; client stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOURS ============ */}
      <section className="alt-band" aria-labelledby="hours-title">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-head reveal">
            <span className="section-kicker">Timings</span>
            <h2 id="hours-title">Consultation hours</h2>
          </div>

          <div className="reveal">
            <table className="hours-table">
              <thead>
                <tr>
                  <th>Days</th>
                  <th>Morning</th>
                  <th>Afternoon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday – Saturday</td>
                  <td>10:00 AM – 1:00 PM</td>
                  <td>2:00 PM – 5:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td colSpan={2}>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section aria-labelledby="faq-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">FAQs</span>
            <h2 id="faq-title">Frequently asked questions</h2>
          </div>

          <div className="faq-list reveal">
            {FAQS.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="Book now">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Eat right. Live light. Feel amazing.</h2>
              <p>Your health journey starts with one message.</p>
            </div>
            <div className="actions">
              <a className="btn btn-whatsapp" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp Now
              </a>
              <a className="btn btn-primary" href="tel:+917340940620">Call 73409 40620</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
