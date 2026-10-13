import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'Meet Dt. Garima Goel — B.Sc. Home Science, M.Sc. Food & Nutrition, trained at PGIMER Chandigarh, formerly with Fitelo, and pursuing a PhD in Food and Nutrition.',
  alternates: { canonical: '/about' },
};

const CheckIcon = ({ stroke = 'currentColor' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const EDUCATION = [
  {
    title: 'B.Sc. Home Science',
    detail: 'Foundation in food science, dietetics and community nutrition.',
  },
  {
    title: 'M.Sc. Food and Nutrition',
    detail: 'Advanced study of clinical nutrition, therapeutic diets and nutritional biochemistry.',
  },
  {
    title: 'Pursuing PhD in Food and Nutrition',
    detail: 'Ongoing doctoral research — staying at the cutting edge of nutrition science.',
  },
];

const EXPERIENCE = [
  {
    title: 'Intern Dietitian — PGIMER, Chandigarh',
    detail:
      'Clinical dietetics training at one of India’s premier medical institutes: therapeutic diet planning for patients with diabetes, renal, cardiac and gastrointestinal conditions.',
  },
  {
    title: 'Dietitian — Fitelo',
    detail:
      'Designed personalised weight-loss and lifestyle diet plans for clients across India at one of the country’s fastest-growing health-tech platforms.',
  },
];

const CERTIFICATIONS = [
  {
    title: '4-month Certificate Course — Dt. Loveleen Kaur (Santushti)',
    detail: 'Intensive practical training in clinical and lifestyle nutrition counselling.',
  },
  {
    title: '3-month Internship — Swami Vivekananda Integrity Health Services',
    detail: 'Hands-on experience in integrated and holistic health care.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / About
          </p>
          <h1>Meet Dt. Garima Goel</h1>
          <p>
            Dietitian, nutritionist and firm believer that healthy eating should fit your life —
            not take it over.
          </p>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section aria-labelledby="story-title">
        <div className="container two-col">
          <div className="about-figure reveal">
            <h3>Dt. Garima Goel</h3>
            <span className="role">Dietitian &amp; Nutritionist</span>
            <ul>
              {[
                'B.Sc. Home Science',
                'M.Sc. Food & Nutrition',
                'Intern, PGIMER Chandigarh',
                'Former Dietitian, Fitelo',
                'Certified — Santushti (Dt. Loveleen Kaur)',
                'Pursuing PhD in Food & Nutrition',
              ].map((item) => (
                <li key={item}>
                  <CheckIcon stroke="#ffc79e" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <span className="section-kicker">My Story</span>
            <h2 id="story-title">Why I became a dietitian</h2>
            <p style={{ marginTop: '1rem', color: 'var(--ink-soft)' }}>
              Food has always fascinated me — not just as nourishment, but as medicine. That
              curiosity took me from a B.Sc. in Home Science to a Master&apos;s in Food and
              Nutrition, and now to doctoral research in the field.
            </p>
            <p style={{ marginTop: '0.8rem', color: 'var(--ink-soft)' }}>
              My clinical internship at <strong>PGIMER Chandigarh</strong> taught me how powerful
              the right diet can be for patients managing chronic disease. My time at{' '}
              <strong>Fitelo</strong> taught me the other half of the equation: a plan only works
              if people can actually follow it in their daily lives.
            </p>
            <p style={{ marginTop: '0.8rem', color: 'var(--ink-soft)' }}>
              Today, at Poshan, I combine both — rigorous, evidence-based
              nutrition science delivered as simple, realistic plans built around Indian kitchens,
              family meals and busy schedules.
            </p>
          </div>
        </div>
      </section>

      {/* ============ EDUCATION ============ */}
      <section className="alt-band" aria-labelledby="edu-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Qualifications</span>
            <h2 id="edu-title">Education &amp; training</h2>
          </div>

          <div className="two-col" style={{ alignItems: 'start' }}>
            <div className="reveal">
              <h3 style={{ marginBottom: '1.4rem' }}>🎓 Education</h3>
              <ul className="timeline">
                {EDUCATION.map(({ title, detail }) => (
                  <li key={title}>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <h3 style={{ marginBottom: '1.4rem' }}>💼 Experience &amp; Certifications</h3>
              <ul className="timeline">
                {[...EXPERIENCE, ...CERTIFICATIONS].map(({ title, detail }) => (
                  <li key={title}>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section aria-labelledby="philosophy-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">My Approach</span>
            <h2 id="philosophy-title">What working with me looks like</h2>
          </div>

          <div className="card-grid">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21C7 17 3 13.5 3 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 2.5c0 4-4 7.5-9 11.5Z" />
                </svg>
              </div>
              <h3>No crash diets</h3>
              <p>Sustainable habits beat quick fixes. We aim for results you can maintain for life, not just for a month.</p>
            </article>

            <article className="card accent reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11h18M5 11V7a7 7 0 0 1 14 0v4M8 11v10M16 11v10M4 21h16" />
                </svg>
              </div>
              <h3>Your kitchen, your food</h3>
              <p>Plans are built from everyday Indian ingredients and your family&apos;s meals — no exotic superfoods required.</p>
            </article>

            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l2.5 2.5" />
                </svg>
              </div>
              <h3>Evidence over trends</h3>
              <p>Every recommendation is grounded in clinical nutrition science — not the latest social-media fad.</p>
            </article>

            <article className="card accent reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <h3>A partner, not a rulebook</h3>
              <p>Weekly follow-ups mean you&apos;re never on your own. We adjust, troubleshoot and celebrate progress together.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="Book a consultation">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Let&apos;s work on your health together</h2>
              <p>Book a one-on-one consultation — online, from anywhere.</p>
            </div>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact">Book Consultation</Link>
              <Link className="btn btn-outline" href="/services" style={{ borderColor: '#fff', color: '#fff' }}>
                View Specialities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
