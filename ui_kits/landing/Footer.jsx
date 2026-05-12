/* Footer — brand, links, contact */

const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--line-1)',
    padding: '64px 32px 32px',
    background: 'var(--bg-0)',
    position: 'relative',
  }}>
    <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto' }}>
      <div className="footer-grid">
        <style>{`
          .footer-grid {
            display: grid;
            grid-template-columns: 1.5fr repeat(3, 1fr);
            gap: 48px;
            margin-bottom: 48px;
          }
          @media (max-width: 1024px) {
            .footer-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 36px;
            }
          }
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 28px;
            }
          }
        `}</style>
        <div>
          <Wordmark size={16} />
          <p style={{ marginTop: 18, color: 'var(--fg-2)', fontSize: 13.5, lineHeight: 1.6,
            maxWidth: 320 }}>
            Piorate Ventures helps real estate businesses automate lead generation,
            follow-ups, marketing, and content creation using premium AI systems.
          </p>
        </div>

        <FooterCol title="Company" links={['Home', 'Services', 'About', 'Results', 'Contact']} />
        <FooterCol title="Services" links={['AI Voice Closers™', 'RevenueFlow Automation™', 'AI Content Engine™', 'Custom Integrations']} />
        <FooterCol title="Get in touch" links={['Email', 'WhatsApp', 'Instagram', 'LinkedIn']} />
      </div>

      <div className="footer-bottom" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 28, borderTop: '1px solid var(--line-1)',
      }}>
        <style>{`
          @media (max-width: 768px) {
            .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
          }
        `}</style>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)',
          textTransform: 'uppercase', letterSpacing: '0.16em' }}>
          © 2026 Piorate Ventures · All systems operational
          <span style={{ display: 'inline-block', marginLeft: 10, width: 6, height: 6,
            borderRadius: '50%', background: '#5BE5AC',
            boxShadow: '0 0 8px #5BE5AC', verticalAlign: 'middle' }} />
        </div>
        <div style={{ display: 'flex', gap: 22, fontSize: 12, color: 'var(--fg-2)' }}>
          <a style={{ color: 'var(--fg-2)' }}>Privacy</a>
          <a style={{ color: 'var(--fg-2)' }}>Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)',
      textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 18 }}>{title}</div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex',
      flexDirection: 'column', gap: 12 }}>
      {links.map(l => (
        <li key={l}>
          <a style={{ color: 'var(--fg-1)', fontSize: 13.5 }}>{l}</a>
        </li>
      ))}
    </ul>
  </div>
);

window.Footer = Footer;
