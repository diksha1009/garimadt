import Link from 'next/link';
import { WA_LINK } from '../../lib/site';

export const metadata = {
  title: 'Work Ethics & Terms',
  description:
    'Work ethics, terms and conditions for consultations and programs with Poshan by Dt. Garima — how we work together, what to expect, and program, payment and refund policies.',
  alternates: { canonical: '/work-ethics' },
};

const SECTIONS = [
  {
    heading: 'A dietitian, not a substitute for your doctor',
    points: [
      'You are consulting a qualified dietitian. Diet and nutrition advice is given after a bodily analysis and health assessment, but it in no way replaces or substitutes the services of a physician or doctor.',
      'Any diet plan is designed to work alongside your medical treatment — never in place of it. Please continue any medication your doctor has prescribed unless they advise otherwise.',
    ],
  },
  {
    heading: 'Mutual respect and commitment',
    points: [
      'This is an opportunity to turn your health around, and it involves an investment of time and expertise. The fee is charged for that expertise, and I ask that it be respected. Payment does not create an obligation beyond the professional service agreed, and cannot be used to take advantage of the relationship.',
      'The time and effort we both put in only pays off if we are sincere with each other. I commit to putting my best foot forward, and ask the same of you — commitment, honesty, respect and patience, from the first day through to the last.',
      'Please do ask questions. Every recommendation has a reason behind it, and I am happy to explain the logic so you understand what you are doing and why. What I ask is that questions stay in that spirit — a respectful, trusting relationship is what makes this work.',
    ],
  },
  {
    heading: 'Realistic expectations',
    points: [
      'The goal is a lifestyle change, and that takes time and effort from your side. Please do not expect a quick fix for thyroid, PCOD/PCOS or diabetes — that would be unrealistic.',
      'Lifestyle changes are habit changes, so do not expect miracles in a week or a month. Conditions may or may not be fully cured, but they can absolutely be managed through diet and lifestyle modification, because the focus is on the root cause rather than the symptoms.',
      'There are no guaranteed 5, 10 or 20 kilo weight-loss programs here. A body can safely lose about 2–3 kilos or inches in a month, and the fat lost will not bounce back as long as you stay self-disciplined.',
      'These are not short-term diets followed for temporary results. The food prescribed is food you can sustain lifelong, which is what makes the outcome permanent.',
    ],
  },
  {
    heading: 'Supplements and your own responsibility',
    points: [
      'The approach is to improve your health through natural means first. If a dietary supplement is genuinely needed, it may be recommended — but whether you take it, and whether you check with your physician first, is entirely your choice. You are never bound to take one.',
      'You take responsibility for your own actions. A dietitian can guide you, but cannot control what you actually eat versus what was prescribed.',
    ],
  },
  {
    heading: 'Programs, payments and scheduling',
    points: [
      'Payments: full payment is due at the start of the program.',
      'Upgrades: a program can be upgraded only within the first week from the start date. Downgrades are not permitted.',
      'Transfers: programs are non-transferable. If a medical or other urgent reason prevents you from continuing, a transfer request may be approved on presentation of relevant evidence, subject to the applicable transfer fee.',
      'Breaks: breaks are discouraged, as they interrupt the flow of the changes being built — and lifestyle change means eating well regardless of vacations, family functions, travel or an off day. If an urgent reason means you must pause, please get in touch. Approved holds are limited by program length, and short programs are not eligible.',
      'Missed appointments: if you miss an appointment without notifying me, it is your responsibility to reach out and reschedule.',
      'Refunds: once a program is paid for, a no-refund policy applies. Given the nature of the service, refunds are not provided.',
    ],
  },
  {
    heading: 'Right to discontinue',
    points: [
      'Poshan reserves the right to cancel a program, with or without refund, in cases of aggressive, disturbing, abusive or foul language directed at anyone associated with the practice.',
    ],
  },
];

export default function WorkEthicsPage() {
  return (
    <>
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Work Ethics &amp; Terms
          </p>
          <h1>Work Ethics, Terms &amp; Conditions</h1>
          <p>
            Please read this before starting a program. It sets out how we work together, what
            results are realistic, and the policies around payments and scheduling.
          </p>
        </div>
      </section>

      {/* ============ POLICY SECTIONS ============ */}
      <section aria-labelledby="policy-title">
        <div className="container">
          <h2 id="policy-title" className="visually-hidden">
            Terms and conditions
          </h2>

          <div className="policy-wrap">
            {SECTIONS.map(({ heading, points }, i) => (
              <article className="policy-block reveal" key={heading}>
                <span className="policy-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{heading}</h3>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="policy-footnote">
            By enrolling in a program, you confirm that you have read, understood and accepted
            these terms. If anything here is unclear, please ask before you start — I would much
            rather answer a question now than have a misunderstanding later.
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section aria-label="Get in touch">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Questions before you begin?</h2>
              <p>Ask anything about how the programs work — no obligation.</p>
            </div>
            <div className="actions">
              <a className="btn btn-whatsapp" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp Me
              </a>
              <Link className="btn btn-primary" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
