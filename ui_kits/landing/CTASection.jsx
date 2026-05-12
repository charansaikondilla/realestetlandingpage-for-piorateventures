/* CTASection — final CTA + contact form */

const Field = ({ label, placeholder, type = 'text', children, full }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: full ? '1 / -1' : 'auto' }}>
    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-2)',
      textTransform: 'uppercase', letterSpacing: '0.16em' }}>{label}</label>
    {children || (
      <input
        type={type} placeholder={placeholder}
        style={{
          height: 48, padding: '0 16px',
          background: 'rgba(16,23,42,0.5)',
          border: '1px solid var(--line-1)',
          borderRadius: 10, color: 'var(--fg-0)',
          fontFamily: 'var(--font-body)', fontSize: 15,
          outline: 'none',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
        }}
        onFocus={e => { e.target.style.borderColor = 'rgba(94,231,255,0.5)';
          e.target.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 4px rgba(94,231,255,0.1)'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--line-1)';
          e.target.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.03)'; }}
      />
    )}
  </div>
);

const CTASection = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="contact" style={{ padding: '60px 32px 120px', position: 'relative' }}>
      <Spotlight x="50%" y="40%" size={1000} color="rgba(94,231,255,0.18)" />
      <div style={{ maxWidth: 'var(--col-max)', margin: '0 auto', position: 'relative' }}>

        {/* Final CTA banner */}
        <SolidCard style={{
          padding: '80px 56px', textAlign: 'center', marginBottom: 64,
          background: 'linear-gradient(180deg, rgba(26,34,56,0.8), rgba(10,14,26,0.9))',
          boxShadow: 'var(--shadow-deep), 0 0 100px -20px rgba(94,231,255,0.25)',
        }}>
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            backgroundImage:
              'linear-gradient(rgba(94,231,255,0.08) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(94,231,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 50%, black 30%, transparent 80%)',
          }} />
          <div style={{ position: 'relative' }}>
            <Eyebrow style={{ marginBottom: 18 }}>// Next step</Eyebrow>
            <h2 style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', marginBottom: 16, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
              Ready To Automate Your Real Estate Business?
            </h2>
            <p className="lead" style={{ marginBottom: 36, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Stop wasting time on repetitive work and start scaling with
              AI-powered systems built for closers.
            </p>
            <Button variant="primary" size="lg" icon={<ArrowIcon />}>
              Book Your Free Strategy Call
            </Button>
          </div>
        </SolidCard>

        {/* Contact form */}
        <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64,
          alignItems: 'flex-start' }}>
          <style>{`
            .contact-form-grid {
              display: grid;
              grid-template-columns: 1fr 1.4fr;
              gap: 64px;
              align-items: flex-start;
            }
            @media (max-width: 1024px) {
              .contact-form-grid {
                grid-template-columns: 1fr;
                gap: 48px;
              }
            }
            @media (max-width: 768px) {
              .contact-form-grid {
                gap: 32px;
              }
            }
          `}</style>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>// Strategy call</Eyebrow>
            <h2 style={{ marginBottom: 18 }}>Let's Build Your AI Growth System.</h2>
            <p style={{ color: 'var(--fg-1)', fontSize: 16, marginBottom: 32, maxWidth: 380 }}>
              Tell us about your business. We'll map the highest-impact automation wins
              on a free 30-minute call.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex',
              flexDirection: 'column', gap: 14 }}>
              {[
                'Free 30-minute strategy call',
                'Personalized automation roadmap',
                'No commitment — value first',
              ].map(t => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: 14, color: 'var(--fg-1)' }}>
                  <Check size={14} color="var(--accent)" />{t}
                </li>
              ))}
            </ul>
          </div>

          <SolidCard style={{ padding: 32 }}>
            {submitted ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 18px',
                  borderRadius: '50%', background: 'rgba(61,220,151,0.1)',
                  display: 'grid', placeItems: 'center',
                  boxShadow: '0 0 40px -8px rgba(61,220,151,0.5)' }}>
                  <Check size={24} color="#5BE5AC" />
                </div>
                <h3 style={{ marginBottom: 8, color: 'var(--fg-0)' }}>You're booked.</h3>
                <p style={{ color: 'var(--fg-1)', fontSize: 14 }}>
                  We'll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="contact-form"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <style>{`
                  .contact-form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                  }
                  @media (max-width: 768px) {
                    .contact-form {
                      grid-template-columns: 1fr;
                      gap: 14px;
                    }
                  }
                `}</style>
                <Field label="Full Name" placeholder="Jane Cooper" />
                <Field label="Company" placeholder="Coastline Properties" />
                <Field label="Email" type="email" placeholder="jane@brokerage.com" />
                <Field label="Phone" placeholder="+1 (555) 000-0000" />
                <Field label="Monthly Lead Volume">
                  <select style={{
                    height: 48, padding: '0 16px',
                    background: 'rgba(16,23,42,0.5)',
                    border: '1px solid var(--line-1)',
                    borderRadius: 10, color: 'var(--fg-0)',
                    fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none',
                  }}>
                    <option>Under 100</option>
                    <option>100 – 500</option>
                    <option>500 – 2,000</option>
                    <option>2,000+</option>
                  </select>
                </Field>
                <Field label="Preferred Call Time">
                  <select style={{
                    height: 48, padding: '0 16px',
                    background: 'rgba(16,23,42,0.5)',
                    border: '1px solid var(--line-1)',
                    borderRadius: 10, color: 'var(--fg-0)',
                    fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none',
                  }}>
                    <option>Morning (9–12)</option>
                    <option>Afternoon (12–5)</option>
                    <option>Evening (5–8)</option>
                  </select>
                </Field>
                <Field label="Biggest Challenge" full>
                  <textarea
                    placeholder="What's slowing your sales right now?"
                    rows={3}
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(16,23,42,0.5)',
                      border: '1px solid var(--line-1)',
                      borderRadius: 10, color: 'var(--fg-0)',
                      fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </Field>
                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginTop: 8 }}>
                  <span className="caption">We respond within 1 business day.</span>
                  <Button variant="primary" size="md" icon={<ArrowIcon />}>
                    Book My Free Call
                  </Button>
                </div>
              </form>
            )}
          </SolidCard>
        </div>
      </div>
    </section>
  );
};

window.CTASection = CTASection;
