/* CalendlyPopup — 10 second auto-trigger popup */

const CalendlyPopup = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Load Calendly widget if available
      if (window.Calendly) {
        window.Calendly.showPopupWidget('https://calendly.com/charansaikondilla/30min');
        setIsOpen(false); // Close our modal since Calendly opens their own
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const openCalendly = () => {
    window.open('https://calendly.com/charansaikondilla/30min', '_blank');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 16, 35, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 9998,
          animation: 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Popup Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          animation: 'slideUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(26, 34, 56, 0.95), rgba(10, 14, 26, 0.98))',
            border: '1px solid var(--line-ink)',
            borderRadius: 16,
            padding: '48px 40px',
            maxWidth: 420,
            textAlign: 'center',
            boxShadow: '0 60px 120px -40px rgba(10,16,35,0.8), 0 0 0 1px rgba(31,71,245,0.25)',
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'transparent',
              border: 'none',
              color: 'var(--fg-on-ink-1)',
              cursor: 'pointer',
              fontSize: 24,
              width: 32,
              height: 32,
              display: 'grid',
              placeItems: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--fg-on-ink-0)'}
            onMouseLeave={e => e.target.style.color = 'var(--fg-on-ink-1)'}
          >
            ✕
          </button>

          {/* Icon */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(31, 71, 245, 0.15)',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 24px',
              border: '1px solid rgba(31, 71, 245, 0.3)',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>

          {/* Content */}
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--fg-on-ink-0)',
              marginBottom: 12,
              margin: '0 0 12px',
            }}
          >
            Book An Automation Call
          </h3>

          <p
            style={{
              color: 'var(--fg-on-ink-1)',
              fontSize: 15,
              lineHeight: 1.5,
              marginBottom: 32,
              margin: '0 0 32px',
            }}
          >
            Get a personalized 30-minute strategy call to see how AI automation can transform your real estate business.
          </p>

          {/* CTA Button */}
          <button
            onClick={openCalendly}
            style={{
              background: 'linear-gradient(180deg, #6BEFFF, #1F47F5)',
              color: '#FFF',
              border: 'none',
              borderRadius: 10,
              padding: '14px 32px',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-glow)',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 0 0 1px rgba(31,71,245,0.25), 0 12px 36px -8px rgba(31,71,245,0.5)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'var(--shadow-glow)';
            }}
          >
            Schedule Your Call
          </button>

          {/* Subtext */}
          <p
            style={{
              fontSize: 13,
              color: 'var(--fg-on-ink-2)',
              marginTop: 16,
              margin: '16px 0 0',
            }}
          >
            Free • No commitment • Expert advice
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            transform: translate(-50%, -40%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

window.CalendlyPopup = CalendlyPopup;
