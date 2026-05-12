/* Services — 3-up service cards */

const ServiceIcon = ({ kind }) => {
  const icons = {
    voice: <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>,
    flow: <><path d="M3 6h18M3 12h18M3 18h12"/><circle cx="20" cy="18" r="2" fill="currentColor"/></>,
    content: <><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M7 21h10M12 17v4M8 8l3 3-3 3M14 14h4"/></>,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {icons[kind]}
    </svg>
  );
};

const ServiceCard = ({ num, icon, title, subtitle, features, outcome }) => (
  <SolidCard style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
    <div style={{ position: 'absolute', inset: 0,
      background: 'radial-gradient(120% 60% at 0% 0%, rgba(94,231,255,0.07), transparent 50%)',
      pointerEvents: 'none' }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginBottom: 22, position: 'relative' }}>
      <IconTile><ServiceIcon kind={icon} /></IconTile>
      <Eyebrow>// {num}</Eyebrow>
    </div>
    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: 700,
      color: 'var(--fg-0)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 10,
      position: 'relative' }}>
      {title}
    </h3>
    <p style={{ fontSize: 'clamp(13px, 3.5vw, 14.5px)', color: 'var(--fg-1)', lineHeight: 1.55, marginBottom: 20,
      position: 'relative' }}>
      {subtitle}
    </p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex',
      flexDirection: 'column', gap: 9, marginBottom: 22, position: 'relative' }}>
      {features.map(f => (
        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10,
          fontSize: 'clamp(12px, 3vw, 13.5px)', color: 'var(--fg-1)' }}>
          <Check size={13} color="var(--accent)" />{f}
        </li>
      ))}
    </ul>
    <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px dashed var(--line-1)',
      display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fg-2)', fontSize: 'clamp(11px, 2.5vw, 12.5px)',
      position: 'relative' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5BE5AC',
        boxShadow: '0 0 12px #5BE5AC', flexShrink: 0 }} />
      {outcome}
    </div>
  </SolidCard>
);

const Services = () => (
  <section id="services" style={{ padding: '120px 32px', position: 'relative' }}>
    <div style={{ maxWidth: 'var(--col-max)', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <Eyebrow style={{ marginBottom: 14 }}>// Services</Eyebrow>
        <h2 style={{ marginBottom: 16 }}>
          Three Systems. <span style={{ color: 'var(--fg-2)' }}>One AI Sales Engine.</span>
        </h2>
        <p style={{ maxWidth: 580, margin: '0 auto', color: 'var(--fg-1)', fontSize: 17 }}>
          Modular automation systems, custom-built for real estate teams that want to scale
          without hiring more staff.
        </p>
      </div>

      <div className="services-grid">
        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          @media (max-width: 1200px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            section#services {
              padding: 60px 20px 100px;
            }
          }
        `}</style>
        <ServiceCard
          num="01"
          icon="voice"
          title="AI Voice Closers™"
          subtitle="24/7 AI voice agents that qualify and follow up with leads automatically."
          features={['Instant lead response', 'AI phone call handling', 'Lead qualification & booking', 'Multilingual · CRM integrated']}
          outcome="Never miss a high-intent property lead again."
        />
        <ServiceCard
          num="02"
          icon="flow"
          title="RevenueFlow Automation™"
          subtitle="Smart marketing automation that turns leads into buyers — across every channel."
          features={['WhatsApp & email automation', 'Lead nurturing sequences', 'CRM & pipeline workflows', 'Auto reminders, campaigns']}
          outcome="Increase conversions while reducing manual work."
        />
        <ServiceCard
          num="03"
          icon="content"
          title="AI Content Engine™"
          subtitle="Generate high-converting real estate content in minutes, on autopilot."
          features={['Property reels & captions', 'Listing descriptions', 'Ad creatives & social posts', 'Calendars · auto-scheduling']}
          outcome="Stay consistent online without hiring a content team."
        />
      </div>
    </div>
  </section>
);

window.Services = Services;
