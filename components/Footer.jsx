import Link from 'next/link';
import { REVIEW_FORM_URL } from '../lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>Dt. Garima&apos;s Diet Clinic</h4>
            <p>
              Personalised nutrition consultancy for a healthy and disease-free lifestyle.
              Online consultations available across India and abroad.
            </p>
            <p className="footer-tagline">Your health, my priority. 🌿</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/services/">Services</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Specialities</h4>
            <ul>
              <li><Link href="/services/">Weight Management</Link></li>
              <li><Link href="/services/">PCOS / PCOD Diet</Link></li>
              <li><Link href="/services/">Diabetes &amp; Hypertension</Link></li>
              <li><Link href="/services/">Thyroid Management</Link></li>
              <li><Link href="/services/">Pre-Wedding Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="tel:+917340940620">📞 +91 73409 40620</a></li>
              <li>
                <a href="https://www.instagram.com/nutrinator_" target="_blank" rel="noopener noreferrer">
                  📸 @nutrinator_
                </a>
              </li>
              <li>🕐 Mon–Sat: 10 AM – 1 PM, 2 – 5 PM</li>
              {REVIEW_FORM_URL && (
                <li>
                  <a href={REVIEW_FORM_URL} target="_blank" rel="noopener noreferrer">
                    ⭐ Write a Review
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dt. Garima&apos;s Diet Clinic. All rights reserved.</span>
          <span>Eat Right. Live Light. Feel Amazing.</span>
        </div>
      </div>
    </footer>
  );
}
