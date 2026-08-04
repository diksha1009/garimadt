'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <>
      <div className="top-strip">
        <div className="container">
          <span>🌿 Eat Right. Live Light. Feel Amazing.</span>
          <span>
            Consultation hours: Mon–Sat, 10 AM – 1 PM &amp; 2 – 5 PM &nbsp;•&nbsp;{' '}
            <a href="tel:+917340940620">📞 73409 40620</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="Dt. Garima's Diet Clinic — Home">
            <span className="brand-mark" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>Dt. Garima&apos;s Diet Clinic</strong>
              <span>Nutritional Consultancy</span>
            </span>
          </Link>

          <nav className={`main-nav${open ? ' open' : ''}`} aria-label="Main navigation">
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-primary" href="/contact/">
              Book Consultation
            </Link>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
