/* Testimonials — quote cards row */

const Quote = ({ name, company, result, body, initials }) => (
  <SolidCard style={{ padding: 28 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700,
        color: 'var(--accent)', letterSpacing: '-0.02em', lineHeight: 1,
      }}>{result}</div>
      <p style={{ fontSize: 15, color: 'var(--fg-0)', lineHeight: 1.55, flex: 1 }}>
        “{body}”
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12,
        paddingTop: 18, borderTop: '1px solid var(--line-1)' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'linear-gradient(140deg, #2A3550, #10172A)',
          border: '1px solid var(--line-1)',
          display: 'grid', placeItems: 'center',
          fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
          color: 'var(--fg-0)',
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: 14, color: 'var(--fg-0)', fontWeight: 600 }}>{name}</div>
          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{company}</div>
        </div>
      </div>
    </div>
  </SolidCard>
);

const Testimonials = () => (
  <section style={{ padding: '60px 32px 120px', position: 'relative' }}>
    <div style={{ maxWidth: 'var(--col-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 56, maxWidth: 720 }}>
        <Eyebrow style={{ marginBottom: 14 }}>// Operators using Piorate</Eyebrow>
        <h2>Real Estate Teams Are Moving To AI Automation.</h2>
      </div>
      <div className="testimonials-grid">
        <style>{`
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          @media (max-width: 1024px) {
            .testimonials-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 18px;
            }
          }
          @media (max-width: 768px) {
            .testimonials-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            section {
              padding: 60px 20px 100px !important;
            }
          }
        `}</style>
        <Quote initials="MR" name="Maya Reyes" company="Coastline Properties · Director of Sales"
          result="3.2× more booked viewings"
          body="We started responding to leads instantly and booked more calls in the first month than we did the previous quarter." />
        <Quote initials="DK" name="David Khan" company="Khan & Co. Luxury Realty"
          result="68% faster lead response"
          body="The AI voice agent qualifies inbound calls before our team even sees them. Our closers only talk to ready buyers now." />
        <Quote initials="SO" name="Sara Okafor" company="Atlas Builders · Head of Marketing"
          result="Saved ~30 hrs / week"
          body="Content scheduling and follow-up sequences now run on their own. We removed two manual roles from the marketing pipeline." />
      </div>
    </div>
  </section>
);

window.Testimonials = Testimonials;
