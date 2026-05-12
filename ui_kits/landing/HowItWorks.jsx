/* HowItWorks — 3-step horizontal timeline */

const Step = ({ n, title, body, last }) => (
  <div style={{ position: 'relative', flex: 1 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: 'linear-gradient(140deg, #1A2238, #0A0E1A)',
        border: '1px solid var(--line-1)',
        display: 'grid', placeItems: 'center',
        fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
        color: 'var(--accent)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 30px -10px rgba(94,231,255,0.4)',
        flexShrink: 0,
      }}>0{n}</div>
      {!last && (
        <div style={{ flex: 1, height: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(90deg, var(--line-2) 0 6px, transparent 6px 12px)' }} />
          <div style={{ position: 'absolute', right: -2, top: -3, width: 7, height: 7,
            borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)' }} />
        </div>
      )}
    </div>
    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
      color: 'var(--fg-0)', letterSpacing: '-0.02em', marginBottom: 10 }}>{title}</h3>
    <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.55, maxWidth: 360 }}>{body}</p>
  </div>
);

const HowItWorks = () => (
  <section id="how-it-works" style={{ padding: '60px 32px 120px', position: 'relative' }}>
    <Spotlight x="50%" y="0%" size={700} color="rgba(94,231,255,0.1)" />
    <div style={{ maxWidth: 'var(--col-max)', margin: '0 auto', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <Eyebrow style={{ marginBottom: 14 }}>// Process</Eyebrow>
        <h2>Simple. <span style={{ color: 'var(--fg-2)' }}>Fast.</span> Automated.</h2>
      </div>
      <div className="how-it-works-steps">
        <style>{`
          .how-it-works-steps {
            display: flex;
            gap: 24px;
          }
          @media (max-width: 767px) {
            .how-it-works-steps {
              flex-direction: column;
              gap: 32px;
            }
          }
        `}</style>
        <Step n="1" title="Book A Strategy Call"
          body="We analyze your current sales and marketing process, find the bottlenecks, and map the highest-impact automation wins." />
        <Step n="2" title="We Build Your AI System"
          body="Our team designs and implements custom automation workflows tailored to how your business actually operates." />
        <Step n="3" title="Launch & Scale" last
          body="Your business starts saving time and converting more leads automatically — usually within the first month." />
      </div>

      {/* Automation Call Button - Desktop Only */}
      <div className="automation-button-container">
        <style>{`
          .automation-button-container {
            margin-top: 60px;
            text-align: center;
            display: none;
          }
          @media (min-width: 768px) {
            .automation-button-container {
              display: block;
            }
          }
        `}</style>
        <Button variant="primary" size="lg" icon={<ArrowIcon />}>
          Schedule Automation Call
        </Button>
      </div>
    </div>
  </section>
);

window.HowItWorks = HowItWorks;
