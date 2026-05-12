const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia('(max-width: 991px)').matches;
  });

  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(max-width: 991px)');

    const onChange = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setMobileMenuOpen(false);
    };

    onChange();
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    window.addEventListener('resize', onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
      window.removeEventListener('resize', onChange);
    };
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <style>{`
        .nav-link { font-size: 14px; font-weight: 600; color: #555; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #000; }

        .header-shell {
          max-width: 1400px;
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-template-areas: "brand nav actions";
          align-items: center;
          gap: 32px;
        }

        .header-brand { grid-area: brand; display: flex; align-items: center; gap: 12px; }
        .header-nav { grid-area: nav; display: flex; justify-content: center; gap: 32px; align-items: center; }
        .header-actions { grid-area: actions; display: flex; align-items: center; gap: 24px; justify-content: flex-end; }

        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none !important; }

        /* Mid-width: put nav UNDER the buttons (second row) */
        @media (max-width: 1200px) and (min-width: 992px) {
          header { height: auto !important; padding: 14px 0; }
          .header-shell {
            grid-template-columns: 1fr auto;
            grid-template-areas:
              "brand actions"
              "nav nav";
            gap: 12px 18px;
          }
          .header-nav { justify-content: center; flex-wrap: wrap; gap: 22px; }
        }

        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(6px);
          transition: opacity 0.3s ease;
        }

        .mobile-panel {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 84vw;
          max-width: 360px;
          background: #FFF;
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      `}</style>

        <div className="header-shell">
        <div className="header-brand">
          <img
            src="https://i.ibb.co/nNnbS5KQ/image.png"
            alt="Logo"
            style={{ height: '36px', width: '36px', objectFit: 'contain' }}
          />
          <span style={{ fontSize: '21px', fontWeight: 850, letterSpacing: '-0.8px', color: '#000' }}>
            Piorate Ventures
          </span>
        </div>

        <nav className="desktop-nav header-nav">
          {['Services', 'Why Piorate', 'Results', 'How it works', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="#signin"
            className="desktop-nav"
            style={{ fontSize: '14px', fontWeight: 700, color: '#000', textDecoration: 'none' }}
          >
            Sign in
          </a>

          <a
            href="#book"
            className="desktop-nav"
            style={{
              backgroundColor: '#3897f0',
              color: '#FFF',
              padding: '12px 28px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 20px rgba(56, 151, 240, 0.2)',
            }}
          >
            Book a Call
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {isMobile ? (
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          ) : null}
        </div>
      </div>

      </header>

      {/* MOBILE LEFT DRAWER */}
      {isMobile ? (
        <div 
          className="mobile-overlay" 
          onClick={() => setMobileMenuOpen(false)} 
          role="dialog" 
          aria-modal={mobileMenuOpen ? 'true' : 'false'}
          style={{ opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        >
          <div 
            className="mobile-panel" 
            onClick={(e) => e.stopPropagation()}
            style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '28px' }}>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{ background: 'none', border: 'none', fontSize: '40px', lineHeight: 1, cursor: 'pointer' }}
              >
                ×
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {['Services', 'Why Piorate', 'Results', 'How it works', 'Contact', 'Sign in'].map((item) => (
                <a
                  key={item}
                  href={item === 'Sign in' ? '#signin' : `#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#000',
                    textDecoration: 'none',
                    letterSpacing: '-1px',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 28, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  backgroundColor: '#3897f0',
                  color: '#FFF',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 20px rgba(56, 151, 240, 0.2)',
                }}
              >
                Book a Call
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

window.Header = Header;
