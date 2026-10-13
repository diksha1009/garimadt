'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Specialities' },
  { href: '/programs/', label: 'Programs' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header({ hasLogo = false }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <>
      <div className="top-strip">
        <div className="container">
          <span>🌿 Nourish · Balance · Thrive</span>
          <span>
            Consultation hours: Mon–Sat, 10 AM – 1 PM &amp; 2 – 5 PM &nbsp;•&nbsp;{' '}
            <a href="tel:+917340940620">📞 73409 40620</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="Poshan by Dt. Garima — Home">
            {hasLogo ? (
              <>
                <span className="brand-logo">
                  <Image
                    src="/logo.png"
                    alt="Poshan by Dt. Garima"
                    width={236}
                    height={187}
                    priority
                  />
                </span>
                {/* The artwork carries the name; this adds the descriptor
                    line the logo itself doesn't include. */}
                <span className="brand-descriptor">
                  Clinical Nutrition
                  <br />&amp; Lifestyle Care
                </span>
              </>
            ) : (
              <>
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="34" height="34" role="presentation">
                    <path d="M24 20c-1-6 2-11 8-13 1 6-2 11-8 13Z" fill="#6b8f4e" />
                    <path d="M24 20c-5-1-8-5-7.5-10 5 1 8 5 7.5 10Z" fill="#4a6b34" />
                    <circle cx="24" cy="21" r="2.6" fill="#c8814e" />
                    <path d="M24 24c3 0 5 2 5.5 6.5.2 1.4-1.6 1.9-2.1.6L26 27.5V34h-4v-6.5l-1.4 3.6c-.5 1.3-2.3.8-2.1-.6C19 26 21 24 24 24Z" fill="#c8814e" />
                    <path d="M9 30h30c0 7.5-6.7 13-15 13S9 37.5 9 30Z" fill="none" stroke="#1c3a1a" strokeWidth="3.2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="brand-text">
                  <strong>Poshan</strong>
                  <span>by Dt. Garima</span>
                </span>
              </>
            )}
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
