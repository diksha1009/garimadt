import Link from 'next/link';
import ProgramCard from '../components/ProgramCard';
import { CORE_PROGRAMS, CONSULTATION } from '../lib/programs';
import { WA_LINK, REVIEW_FORM_URL } from '../lib/site';

const CLINIC_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://poshanbygarima.com/#clinic',
  name: 'Poshan by Dt. Garima',
  alternateName: "Dt. Garima's Diet Clinic",
  description:
    'Clinical nutrition and lifestyle care — personalised diet plans and online consultations for a healthy, disease-free life.',
  url: 'https://poshanbygarima.com/',
  telephone: '+91-7340940620',
  sameAs: ['https://www.instagram.com/nutrinator_'],
  priceRange: '₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '14:00',
      closes: '17:00',
    },
  ],
  founder: {
    '@type': 'Person',
    '@id': 'https://poshanbygarima.com/#garima',
    name: 'Garima Goel',
    honorificPrefix: 'Dt.',
    jobTitle: 'Dietitian & Nutritionist',
    description:
      'B.Sc. Home Science, M.Sc. Food and Nutrition. Trained at PGIMER Chandigarh, previously with Fitelo. Pursuing PhD in Food and Nutrition.',
    alumniOf: 'PGIMER Chandigarh',
    sameAs: ['https://www.instagram.com/nutrinator_'],
  },
};

const CheckIcon = ({ stroke = 'currentColor' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SPECIALIZATIONS = [
  {
    label: 'Weight Management',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  },
  {
    label: 'PCOS / PCOD Diet',
    icon: <><circle cx="12" cy="8" r="5" /><path d="M12 13v8M8 18h8" /></>,
  },
  {
    label: 'Thyroid Management',
    icon: (
      <>
        <path d="M12 3v3M8 6c-2 1-3 3-3 5 0 3 2 5 4 5 1.5 0 2.2-1 3-1s1.5 1 3 1c2 0 4-2 4-5 0-2-1-4-3-5" />
        <path d="M9 6c1.5-1 4.5-1 6 0" />
      </>
    ),
  },
  {
    label: 'Diabetes Mellitus Type 2',
    icon: <><path d="M12 2c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" /><path d="M9 14h6" /></>,
  },
  {
    label: 'Hypertension',
    icon: (
      <>
        <path d="M12 21C7 17 3 13.5 3 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 2.5c0 4-4 7.5-9 11.5Z" />
        <path d="M5 12h4l2-3 2 5 2-2h4" />
      </>
    ),
  },
  {
    label: 'Pre-Wedding Plans',
    icon: (
      <>
        <path d="M12 21s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 7 2.5c0 5-7 9.5-7 9.5Z" />
        <path d="M12 5V3M10 4h4" />
      </>
    ),
  },
  {
    label: 'Pediatric Nutrition',
    icon: <><circle cx="12" cy="7" r="3.5" /><path d="M7 21v-3a5 5 0 0 1 10 0v3" /></>,
  },
  {
    label: 'Therapeutic Diets',
    icon: <><path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" /><path d="M9 8c1.5 1 4.5 1 6 0" /></>,
  },
];

const PILLARS = [
  {
    label: 'Nourish',
    text: 'Real food, real nutrients — built from your own kitchen.',
    icon: (
      <>
        <path d="M4 12h16c0 4.4-3.6 8-8 8s-8-3.6-8-8Z" />
        <path d="M12 9c-.5-3 1-5.5 4-6.5.5 3-1 5.5-4 6.5Z" />
        <path d="M12 9c-2.5-.5-4-2.5-3.7-5 2.5.5 4 2.5 3.7 5Z" />
      </>
    ),
  },
  {
    label: 'Balance',
    text: 'Sustainable habits that work with your body, not against it.',
    icon: (
      <>
        <path d="M12 20.5C7.5 17 4 13.8 4 10.2A4 4 0 0 1 12 8a4 4 0 0 1 8 2.2c0 3.6-3.5 6.8-8 10.3Z" />
        <path d="M6.5 12h3l1.5-2.5 2 5 1.5-2.5h3" />
      </>
    ),
  },
  {
    label: 'Thrive',
    text: 'Lasting energy, better reports, a healthier life ahead.',
    icon: (
      <>
        <path d="M12 21v-7" />
        <path d="M12 14c-4 0-7-2.7-7-6.5S8 2 12 2s7 1.7 7 5.5S16 14 12 14Z" />
        <path d="M9 21h6" />
      </>
    ),
  },
];

const STEPS = [
  {
    title: 'Book Your Consultation',
    text: 'Call or WhatsApp to schedule a session at a time that suits you — online, from anywhere.',
  },
  {
    title: 'In-depth Assessment',
    text: 'We discuss your health history, lifestyle, food habits and goals in detail.',
  },
  {
    title: 'Get Your Custom Plan',
    text: 'Receive a practical, personalised diet plan built around food you enjoy and can find at home.',
  },
  {
    title: 'Weekly Follow-ups',
    text: 'Regular reviews, tweaks and motivation keep you on track until you reach your goal.',
  },
];

const TESTIMONIALS = [
  {
    initial: 'P',
    name: 'Priya S.',
    tag: 'Weight Management',
    quote:
      "I lost 7 kg in 3 months without giving up my favourite foods. Garima's plans are so practical — everything is from my own kitchen.",
  },
  {
    initial: 'A',
    name: 'Ananya R.',
    tag: 'PCOS Management',
    quote:
      'My PCOS symptoms have improved so much — regular cycles, better energy, clearer skin. The weekly follow-ups kept me accountable.',
  },
  {
    initial: 'R',
    name: 'Rajesh K.',
    tag: 'Diabetes Management',
    quote:
      "My HbA1c dropped from 8.2 to 6.9 in four months. She explains the 'why' behind every recommendation — that made all the difference.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC_JSONLD) }}
      />

      {/* ============ HERO ============ */}
      <section className="hero" aria-label="Introduction">
        <div className="container hero-grid">
          <div>
            <span className="hero-eyebrow">🌿 Clinical Nutrition &amp; Lifestyle Care</span>
            <h1>
              Nutrition that fits <em>your life</em>, not the other way around.
            </h1>
            <p className="hero-sub">
              I&apos;m <strong>Dt. Garima Goel</strong> — M.Sc. Food &amp; Nutrition, trained at
              PGIMER Chandigarh. I build personalised, sustainable diet plans around your routine,
              your kitchen and your goals — no crash diets, no starvation.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Book a Consultation</Link>
              <Link className="btn btn-outline" href="/services">View Specialities</Link>
            </div>
            <div className="hero-stats">
              <div><strong>M.Sc.</strong><span>Food &amp; Nutrition</span></div>
              <div><strong>PGIMER</strong><span>Chandigarh trained</span></div>
              <div><strong>100%</strong><span>Personalised plans</span></div>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="bowl-frame">
              <svg viewBox="0 0 200 200" width="100%" role="img" aria-label="Illustration of a healthy salad bowl">
                <ellipse cx="100" cy="130" rx="78" ry="38" fill="#2d5a27" />
                <ellipse cx="100" cy="122" rx="70" ry="32" fill="#f1f6ed" />
                <circle cx="72" cy="112" r="16" fill="#e8722a" />
                <circle cx="72" cy="112" r="9" fill="#fdeadd" />
                <circle cx="105" cy="105" r="14" fill="#d9432f" />
                <circle cx="101" cy="101" r="4" fill="#f7b7ad" />
                <path d="M125 118c14-10 26-8 32 2-10 8-24 8-32-2Z" fill="#3f7d38" />
                <path d="M120 100c4-14 16-20 28-16-2 12-14 20-28 16Z" fill="#5a9e50" />
                <path d="M55 128c-10-6-12-16-6-24 10 4 14 16 6 24Z" fill="#3f7d38" />
                <circle cx="90" cy="122" r="5" fill="#f2c94c" />
                <circle cx="112" cy="126" r="5" fill="#f2c94c" />
                <circle cx="128" cy="120" r="4" fill="#f2c94c" />
                <path d="M96 60c0-18 12-30 30-32-1 18-13 30-30 32Z" fill="#3f7d38" />
                <path d="M96 60c-14-4-20-14-18-26 13 2 21 12 18 26Z" fill="#5a9e50" />
                <line x1="96" y1="60" x2="98" y2="92" stroke="#2d5a27" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="hero-badge b1">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3f7d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Personalised Diet Plans
            </div>
            <div className="hero-badge b2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#e8722a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="18" x2="12" y2="21" />
              </svg>
              Online Consultations
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRAND PILLARS ============ */}
      <section className="pillars-band" aria-label="Our approach">
        <div className="container pillars-grid">
          {PILLARS.map(({ label, text, icon }) => (
            <div className="pillar reveal" key={label}>
              <span className="pillar-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
              </span>
              <strong>{label}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section aria-labelledby="services-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">What I Offer</span>
            <h2 id="services-title">Personalised guidance. Real results. Lifelong health.</h2>
            <p>Every plan is built for you — your body, your schedule, your food preferences.</p>
          </div>

          <div className="card-grid">
            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <line x1="8" y1="8" x2="16" y2="8" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </svg>
              </div>
              <h3>Personalised Diet Plans</h3>
              <p>Custom meal plans tailored to your goals, lifestyle, medical history and the food you actually enjoy eating.</p>
            </article>

            <article className="card accent reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Nutritional Counselling</h3>
              <p>Expert one-on-one advice to understand your body better and build habits that last a lifetime.</p>
            </article>

            <article className="card reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="18" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Online Consultations</h3>
              <p>Consult from the comfort of your home — video or phone sessions, wherever you are in India or abroad.</p>
            </article>

            <article className="card accent reveal">
              <div className="icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="15 7 21 7 21 13" />
                </svg>
              </div>
              <h3>Weekly Follow-ups</h3>
              <p>Regular check-ins and progress tracking so you stay motivated and see real, measurable results.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ SPECIALIZATIONS ============ */}
      <section className="alt-band" aria-labelledby="spec-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Specialised In</span>
            <h2 id="spec-title">Conditions &amp; goals I work with every day</h2>
          </div>

          <div className="spec-grid">
            {SPECIALIZATIONS.map(({ label, icon }) => (
              <div className="spec-item reveal" key={label}>
                <span className="dot" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {icon}
                  </svg>
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section aria-labelledby="how-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">How It Works</span>
            <h2 id="how-title">Your journey in four simple steps</h2>
          </div>

          <div className="steps-grid">
            {STEPS.map(({ title, text }) => (
              <article className="step reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS & PRICING ============ */}
      <section className="alt-band" aria-labelledby="programs-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Programs</span>
            <h2 id="programs-title">Choose your nutrition journey</h2>
            <p>Personalised nutrition. Practical food. Sustainable change.</p>
          </div>

          <div className="program-grid reveal">
            {CORE_PROGRAMS.map((p) => (
              <ProgramCard key={p.id} program={p} compact />
            ))}
          </div>

          <div className="consult-strip reveal">
            <div>
              <h3>Not sure which program is right for you?</h3>
              <p>
                Book a {CONSULTATION.duration} {CONSULTATION.name} —{' '}
                <strong>{CONSULTATION.priceLabel}</strong>. {CONSULTATION.note}
              </p>
            </div>
            <Link className="btn btn-primary" href="/programs">See All Programs</Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section aria-labelledby="about-title">
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
              ].map((item) => (
                <li key={item}>
                  <CheckIcon stroke="#ffc79e" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <span className="section-kicker">Meet Your Dietitian</span>
            <h2 id="about-title">Science-backed nutrition, with a personal touch</h2>
            <p style={{ marginTop: '1rem', color: 'var(--ink-soft)' }}>
              From clinical training at PGIMER Chandigarh to helping clients transform their health
              at Fitelo, my approach has always been the same: no fad diets, no impossible rules —
              just realistic, evidence-based nutrition that works with Indian kitchens and busy
              lives.
            </p>
            <ul className="check-list">
              <li><CheckIcon />Plans built around home-cooked, everyday food</li>
              <li><CheckIcon />Clinical experience with lifestyle diseases</li>
              <li><CheckIcon />Certified under Dt. Loveleen Kaur (Santushti)</li>
            </ul>
            <div style={{ marginTop: '1.8rem' }}>
              <Link className="btn btn-outline" href="/about">Know More About Me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUOTE BAND ============ */}
      <section className="quote-band">
        <div className="container">
          <blockquote>
            &ldquo;A diet plan only works when it fits your life. My job is to make healthy eating
            feel effortless — not like a punishment.&rdquo;
          </blockquote>
          <cite>— Dt. Garima Goel</cite>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section aria-labelledby="testimonial-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Client Stories</span>
            <h2 id="testimonial-title">What clients say</h2>
            <p>Real results from real people — one plan at a time.</p>
          </div>

          <div className="card-grid">
            {TESTIMONIALS.map(({ initial, name, tag, quote }) => (
              <article className="card testimonial reveal" key={name}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&ldquo;{quote}&rdquo;</p>
                <footer>
                  <span className="avatar" aria-hidden="true">{initial}</span>
                  <div>
                    <strong>{name}</strong>
                    <span>{tag}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          {REVIEW_FORM_URL && (
            <div className="review-invite reveal">
              <p>Been on a plan with me? Your story could help someone else get started.</p>
              <a
                className="btn btn-outline"
                href={REVIEW_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Share Your Experience
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="Book a consultation">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Ready to start your health journey?</h2>
              <p>Book your consultation today. Mon–Sat, 10 AM – 1 PM &amp; 2 – 5 PM.</p>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href="tel:+917340940620">Call 73409 40620</a>
              <a className="btn btn-whatsapp" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
