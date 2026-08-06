import Link from 'next/link';

export const metadata = {
  title: 'Services',
  description:
    'Personalised diet plans, nutritional counselling and online consultations for weight management, PCOS/PCOD, thyroid, diabetes, hypertension, pre-wedding plans, pediatric nutrition and therapeutic diets.',
  alternates: { canonical: '/services/' },
};

const SERVICES = [
  {
    title: 'Weight Management',
    text: 'Science-backed weight loss or weight gain plans that never leave you starving. Built around your routine, your cravings and your kitchen.',
    points: ['Sustainable calorie-smart meal plans', 'No fads, no extreme restrictions', 'Weekly tracking and plan adjustments'],
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: 'PCOS / PCOD Diet',
    text: 'Targeted nutrition to manage PCOS/PCOD symptoms, support regular cycles, improve energy and restore hormonal balance.',
    points: ['Insulin-resistance friendly meal planning', 'Anti-inflammatory food choices', 'Support for skin, hair and cycle health'],
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v8M8 18h8" />
      </>
    ),
  },
  {
    title: 'Thyroid Management',
    text: 'Nutrition support for hypothyroidism and hyperthyroidism — helping manage weight, fatigue and metabolism alongside your medication.',
    points: [
      'Iodine, selenium and iron-aware meal planning',
      'Guidance on goitrogens and medication timing',
      'Strategies for thyroid-related weight and energy issues',
    ],
    icon: (
      <>
        <path d="M12 3v3M8 6c-2 1-3 3-3 5 0 3 2 5 4 5 1.5 0 2.2-1 3-1s1.5 1 3 1c2 0 4-2 4-5 0-2-1-4-3-5" />
        <path d="M9 6c1.5-1 4.5-1 6 0" />
      </>
    ),
  },
  {
    title: 'Diabetes Mellitus Type 2',
    text: 'Practical diets that help control blood sugar, improve HbA1c and reduce medication dependence — without giving up the food you love.',
    points: ['Blood-sugar friendly Indian meals', 'Glycemic-aware carb planning', 'Coordination with your doctor’s advice'],
    icon: (
      <>
        <path d="M12 2c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />
        <path d="M9 14h6" />
      </>
    ),
  },
  {
    title: 'Hypertension & Heart Health',
    text: 'Heart-friendly eating patterns to help manage blood pressure and cholesterol — flavourful food with smarter salt and fat choices.',
    points: ['DASH-style Indian meal plans', 'Sodium-smart cooking guidance', 'Lipid-profile friendly food swaps'],
    icon: (
      <>
        <path d="M12 21C7 17 3 13.5 3 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 2.5c0 4-4 7.5-9 11.5Z" />
        <path d="M5 12h4l2-3 2 5 2-2h4" />
      </>
    ),
  },
  {
    title: 'Pre-Wedding Plans',
    text: 'Look and feel your best on the big day. A time-bound plan for inch loss, glowing skin, healthy hair and steady energy through the wedding season.',
    points: [
      'Timeline-based plan built around your wedding date',
      'Nutrition for skin glow, hair health and bloating',
      'Smart eating through functions, feasts and travel',
    ],
    icon: (
      <>
        <path d="M12 21s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 7 2.5c0 5-7 9.5-7 9.5Z" />
        <path d="M12 5V3M10 4h4" />
      </>
    ),
  },
  {
    title: 'Pediatric Nutrition',
    text: 'Growing bodies need the right fuel. Balanced, kid-approved nutrition for picky eaters, healthy growth and strong immunity.',
    points: ['Age-appropriate balanced meals', 'Strategies for fussy eaters', 'Healthy tiffin and snack ideas'],
    icon: (
      <>
        <circle cx="12" cy="7" r="3.5" />
        <path d="M7 21v-3a5 5 0 0 1 10 0v3" />
      </>
    ),
  },
  {
    title: 'Therapeutic Diets',
    text: 'Medical nutrition therapy for fatty liver, kidney health, gut issues, anaemia, uric acid and post-surgery recovery.',
    points: ['Condition-specific clinical diet plans', 'PGIMER-trained clinical approach', 'Works alongside your medical treatment'],
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" />
        <path d="M9 8c1.5 1 4.5 1 6 0" />
      </>
    ),
  },
];

const INCLUDED = [
  {
    title: 'Detailed Assessment',
    text: 'A full review of your health history, reports, lifestyle and eating habits before any plan is made.',
  },
  {
    title: 'Personalised Diet Plan',
    text: 'A written, easy-to-follow plan using foods from your own kitchen — updated as you progress.',
  },
  {
    title: 'Weekly Follow-ups',
    text: 'Scheduled check-ins to track progress, resolve hurdles and keep you motivated.',
  },
  {
    title: 'WhatsApp Support',
    text: 'Quick answers to your day-to-day food questions between sessions.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Services
          </p>
          <h1>Services &amp; Specialities</h1>
          <p>
            One-on-one nutritional consultancy — online, personalised and backed by clinical
            training. Whatever your goal, there&apos;s a plan for it.
          </p>
        </div>
      </section>

      {/* ============ SERVICE DETAILS ============ */}
      <section aria-labelledby="services-list-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Specialised In</span>
            <h2 id="services-list-title">Programs tailored to your goal</h2>
          </div>

          <div style={{ maxWidth: '860px', marginInline: 'auto' }}>
            {SERVICES.map(({ title, text, points, icon }) => (
              <article className="service-block reveal" key={title}>
                <div className="icon" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="alt-band" aria-labelledby="included-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">Every Program Includes</span>
            <h2 id="included-title">What you get with every consultation</h2>
          </div>

          <div className="steps-grid">
            {INCLUDED.map(({ title, text }) => (
              <article className="step reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="Book a consultation">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Not sure which program fits you?</h2>
              <p>Message me on WhatsApp — I&apos;ll help you figure out the right starting point.</p>
            </div>
            <div className="actions">
              <a
                className="btn btn-whatsapp"
                href="https://wa.me/917340940620?text=Hi%20Dt.%20Garima%2C%20I%27d%20like%20to%20know%20which%20program%20suits%20me."
                target="_blank"
                rel="noopener noreferrer"
              >
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
