import Link from 'next/link';
import ProgramCard from '../../components/ProgramCard';
import { CORE_PROGRAMS, SPECIAL_PROGRAMS, ALL_PROGRAMS, CONSULTATION } from '../../lib/programs';
import { WA_LINK } from '../../lib/site';

export const metadata = {
  title: 'Programs & Pricing',
  description:
    'Nutrition programs with Dt. Garima Goel — Nutrition Kickstart (4 weeks, ₹2,999), Health Transformation (12 weeks, ₹7,999), Clinical Nutrition Care (12 weeks, ₹10,999) and Pre-Wedding Nutrition (8 weeks, ₹7,999).',
  alternates: { canonical: '/programs' },
};

const OFFERS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Nutrition Programs — Poshan by Dt. Garima',
  itemListElement: ALL_PROGRAMS.map((p, i) => ({
    '@type': 'Offer',
    position: i + 1,
    name: p.name,
    description: `${p.duration} — ${p.for}`,
    price: p.price,
    priceCurrency: 'INR',
    category: 'Nutrition consultation program',
    availability: 'https://schema.org/InStock',
  })),
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFERS_JSONLD) }}
      />

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Programs
          </p>
          <h1>Choose Your Nutrition Journey</h1>
          <p>Personalised nutrition. Practical food. Sustainable change.</p>
        </div>
      </section>

      {/* ============ CORE PROGRAMS ============ */}
      <section aria-labelledby="core-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Core Programs</span>
            <h2 id="core-title">Three ways to work together</h2>
            <p>
              Every program is built around your body, your routine and food from your own
              kitchen — never a generic chart.
            </p>
          </div>

          <div className="program-grid reveal">
            {CORE_PROGRAMS.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>

          {/* Entry point for anyone unsure which program fits */}
          <div className="consult-strip reveal">
            <div>
              <h3>Not sure which program is right for you?</h3>
              <p>
                Book a {CONSULTATION.duration} {CONSULTATION.name} —{' '}
                <strong>{CONSULTATION.priceLabel}</strong>. {CONSULTATION.note}
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">Book Consultation</Link>
          </div>
        </div>
      </section>

      {/* ============ SPECIALISED PROGRAMS ============ */}
      <section className="alt-band" aria-labelledby="special-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Specialised Programs</span>
            <h2 id="special-title">Built for a specific moment</h2>
            <p>Time-bound programs designed around a date you are working towards.</p>
          </div>

          <div className="program-grid single reveal">
            {SPECIAL_PROGRAMS.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT EVERY PROGRAM INCLUDES ============ */}
      <section aria-labelledby="promise-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Every Program</span>
            <h2 id="promise-title">What you can count on</h2>
          </div>

          <div className="card-grid">
            <article className="card reveal">
              <h3>Food from your kitchen</h3>
              <p>Plans use everyday Indian ingredients and your family&apos;s regular meals — no exotic superfoods, no separate cooking.</p>
            </article>
            <article className="card accent reveal">
              <h3>No crash dieting</h3>
              <p>A safe, sustainable 2–3 kg or inches a month. The weight you lose stays off, because the habits are ones you can keep.</p>
            </article>
            <article className="card reveal">
              <h3>The reasoning, explained</h3>
              <p>Every recommendation has a reason behind it, and you are always welcome to ask what it is.</p>
            </article>
            <article className="card accent reveal">
              <h3>Support between sessions</h3>
              <p>WhatsApp access for the day-to-day questions that come up long before your next follow-up.</p>
            </article>
          </div>

          <p className="program-terms-note">
            Programs are subject to the{' '}
            <Link href="/work-ethics">work ethics, terms &amp; conditions</Link> — please read
            them before enrolling.
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="Enrol">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Ready to begin?</h2>
              <p>Message me and we&apos;ll find the right starting point for you.</p>
            </div>
            <div className="actions">
              <a className="btn btn-whatsapp" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp Me
              </a>
              <a className="btn btn-primary" href="tel:+917340940620">Call 73409 40620</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
