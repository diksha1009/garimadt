'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Marks <html> as JS-enabled and animates .reveal elements into view.
// Re-runs on every route change so newly rendered pages animate too.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');

    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
