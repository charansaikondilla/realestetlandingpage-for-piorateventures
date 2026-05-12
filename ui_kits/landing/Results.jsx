/* Results — Before / After comparison */

const Col = ({ tone, eyebrow, title, items }) => {
  const isAfter = tone === 'after';
  return (
    <div style={{
      padding: 36,
      borderRadius: 20,
      background: isAfter
        ? 'linear-gradient(180deg, rgba(94,231,255,0.06), rgba(16,23,42,0.4))'
        : 'rgba(255,180,84,0.03)',
      border: `1px solid ${isAfter ? 'rgba(94,231,255,0.25)' : 'rgba(255,180,84,0.18)'}`,
      boxShadow: isAfter ? '0 0 80px -20px rgba(94,231,255,0.3)' : 'none',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 2vw, 11px)',
          textTransform: 'uppercase', letterSpacing: '0.18em',
          color: isAfter ? 'var(--accent)' : 'var(--warn)',
        }}>{eyebrow}</div>
        {isAfter && <Badge tone="live" dot>Automated</Badge>}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
        color: 'var(--fg-0)', letterSpacing: '-0.02em', marginBottom: 24, lineHeight: 1.1 }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex',
        flexDirection: 'column', gap: 12 }}>
        {items.map(it => (
          <li key={it} style={{ display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 14px',
            background: 'rgba(5,7,13,0.4)',
            borderRadius: 10,
            border: '1px solid var(--line-1)',
            color: 'var(--fg-1)', fontSize: 14 }}>
            {isAfter
              ? <Check size={14} color="#5BE5AC" />
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warn)"
                  strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>}
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Results = () => (
  <section id="results" style={{ padding: '60px 32px 120px', position: 'relative' }}>
    <div style={{ maxWidth: 'var(--col-max)', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
        <Eyebrow style={{ marginBottom: 14 }}>// What changes</Eyebrow>
        <h2>What Automation Changes For Your Business</h2>
      </div>

      <div className="results-grid">
        <style>{`
          .results-grid {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 28px;
            align-items: stretch;
          }
          @media (max-width: 1024px) {
            .results-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .results-arrow {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .results-grid {
              gap: 16px;
            }
          }
        `}</style>
        <Col tone="before" eyebrow="Before automation" title="Manual operations slow you down."
          items={['Slow lead replies', 'Missed inquiries', 'Manual follow-ups',
                  'Inconsistent marketing', 'Team overload', 'Low conversion speed']} />

        <div className="results-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'linear-gradient(140deg, #1A2238, #0A0E1A)',
            border: '1px solid rgba(94,231,255,0.4)',
            display: 'grid', placeItems: 'center',
            color: 'var(--accent)',
            boxShadow: '0 0 40px -8px rgba(94,231,255,0.5)',
          }}>
            <ArrowIcon size={20} />
          </div>
        </div>

        <Col tone="after" eyebrow="After Piorate Ventures" title="AI runs the work — you scale."
          items={['Instant AI responses', 'Automated lead nurturing', 'Faster appointments',
                  'Consistent content generation', 'Scalable operations', 'More qualified buyers']} />
      </div>
    </div>
  </section>
);

window.Results = Results;
