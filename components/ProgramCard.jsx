import Link from 'next/link';

export default function ProgramCard({ program, compact = false }) {
  const { emoji, name, duration, priceLabel, for: forWhom, features, popular, cta } = program;
  const shown = compact ? features.slice(0, 4) : features;

  return (
    <article className={`program-card${popular ? ' popular' : ''}`}>
      {popular && <span className="program-badge">⭐ Most Popular</span>}

      <span className="program-emoji" aria-hidden="true">{emoji}</span>
      <h3>{name}</h3>
      <p className="program-duration">{duration}</p>
      <p className="program-price">{priceLabel}</p>
      <p className="program-for">
        <strong>For:</strong> {forWhom}
      </p>

      <ul className="program-features">
        {shown.map((f) => (
          <li key={f}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
        {compact && features.length > shown.length && (
          <li className="program-more">+ {features.length - shown.length} more</li>
        )}
      </ul>

      <Link className={`btn ${popular ? 'btn-primary' : 'btn-outline'} program-cta`} href="/contact/">
        {cta}
      </Link>
    </article>
  );
}
