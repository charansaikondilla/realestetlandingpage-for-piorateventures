/* WhyUs — feature grid */

const featureIcons = {
  bolt: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>,
  trend: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  moon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>,
  cpu: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>,
};

const Feat = ({ icon, title, body }) => (
  <div style={{
    padding: 28,
    background: 'rgba(16,23,42,0.4)',
    border: '1px solid var(--line-1)',
    borderRadius: 16,
    position: 'relative', overflow: 'hidden',
  }}>
    <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1,
      background: 'linear-gradient(90deg, transparent, rgba(94,231,255,0.25), transparent)' }} />
    <IconTile size={44}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{featureIcons[icon]}</svg>
    </IconTile>
    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700,
      color: 'var(--fg-0)', letterSpacing: '-0.01em', marginTop: 18, marginBottom: 8 }}>
      {title}
    </h4>
    <p style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.55 }}>{body}</p>
  </div>
);

const WhyUs = () => (
  <section id="why-piorate" style={{ padding: '60px 32px 120px', position: 'relative' }}>
    <div style={{ maxWidth: 'var(--col-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 56, maxWidth: 720 }}>
        <Eyebrow style={{ marginBottom: 14 }}>// Why Piorate</Eyebrow>
        <h2>Built For Real Estate Teams That Want To Scale Faster.</h2>
      </div>

      <div className="why-us-grid">
        <style>{`
          .why-us-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
          @media (max-width: 1200px) {
            .why-us-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
          }
          @media (max-width: 768px) {
            .why-us-grid {
              grid-template-columns: 1fr;
              gap: 14px;
            }
          }
        `}</style>
        <Feat icon="bolt"   title="Faster Lead Response"     body="AI responds instantly — before competitors even reply." />
        <Feat icon="trend"  title="Higher Conversion Rates"  body="Automated follow-ups increase deal closure opportunities." />
        <Feat icon="clock"  title="Save Team Time"           body="Reduce repetitive manual tasks and admin work." />
        <Feat icon="shield" title="Scale Without Hiring"     body="Grow operations without increasing payroll costs." />
        <Feat icon="moon"   title="24/7 Availability"        body="Your automation systems work even while you sleep." />
        <Feat icon="cpu"    title="Premium AI Systems"       body="Custom workflows designed specifically for real estate businesses." />
      </div>
    </div>
  </section>
);

window.WhyUs = WhyUs;
