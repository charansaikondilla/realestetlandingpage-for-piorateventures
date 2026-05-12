/* Primitives — Logo, Eyebrow, Button, Badge, GlassCard, IconTile, Bg */

const PVLogo = ({ size = 28, dark = false }) => (
  <img
    src="https://i.ibb.co/nNnbS5KQ/image.png"
    alt="Piorate Ventures"
    data-pv-logo={dark ? 'dark' : 'light'}
    style={{ width: size, height: size, display: 'block', objectFit: 'contain' }}
  />
);

const Wordmark = ({ size = 16 }) => (
  <div data-pv="wordmark" style={{
    display: 'flex', alignItems: 'center', gap: 10,
    color: 'var(--fg-0)', fontFamily: 'var(--font-display)',
    fontWeight: 700, fontSize: size, letterSpacing: '-0.02em'
  }}>
    <PVLogo size={size + 8} />
    <span>Piorate Ventures</span>
  </div>
);

const Eyebrow = ({ children, style, className }) => (
  <div data-pv="eyebrow" className={className || "eyebrow"} style={{ ...style }}>{children}</div>
);

const Button = ({ variant = 'primary', size = 'md', children, icon, onClick, style }) => {
  const heights = { sm: 'var(--s-5)', md: '44px', lg: '54px' };
  const fonts   = { sm: 'var(--fs-caption)', md: '15px', lg: 'var(--fs-body-lg)' };
  const pads    = { sm: '0 var(--s-4)', md: '0 var(--s-5)', lg: '0 var(--s-6)' };
  return (
    <button
      data-pv-btn={variant}
      onClick={onClick}
      style={{
        height: heights[size], padding: pads[size], fontSize: fonts[size],
        ...style,
      }}>
      {children}{icon}
    </button>
  );
};

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);

const Check = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const Badge = ({ tone = 'accent', children, dot }) => (
  <span data-pv-badge={tone}>
    {dot && <span data-pv-badge-dot />}
    {children}
  </span>
);

const GlassCard = ({ children, style, glow }) => (
  <div data-pv-card="glass" data-pv-glow={glow ? 'true' : undefined} style={{ ...style }}>
    <span data-pv="edge" />
    {children}
  </div>
);

const SolidCard = ({ children, style }) => (
  <div data-pv-card="solid" style={{
    borderRadius: 'var(--r-lg)', position: 'relative', overflow: 'hidden', ...style,
  }}>{children}</div>
);

/* Dark feature card — used for hero panels and CTA banner */
const InkCard = ({ children, style }) => (
  <div data-pv-card="ink" style={{ ...style }}>{children}</div>
);

const IconTile = ({ children, size = 52, tone = 'default' }) => (
  <div data-pv="icon-tile" data-pv-tone={tone} style={{
    width: size, height: size, borderRadius: 12,
    display: 'grid', placeItems: 'center', flexShrink: 0,
  }}>{children}</div>
);

const CircuitBg = () => (
  <div data-pv="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
);

const Spotlight = ({ x = '50%', y = '20%', size = 800 }) => (
  <div data-pv="spotlight" aria-hidden style={{
    position: 'absolute', width: size, height: size,
    left: x, top: y, transform: 'translate(-50%, -50%)',
    filter: 'blur(40px)', pointerEvents: 'none',
  }} />
);

Object.assign(window, {
  PVLogo, Wordmark, Eyebrow, Button, ArrowIcon, Check, Badge,
  GlassCard, SolidCard, InkCard, IconTile, CircuitBg, Spotlight,
});
