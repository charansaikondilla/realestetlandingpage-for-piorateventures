/* Hero - Piorate Ventures "Infinite AI" Mobile Edge Edition */

const MobileFrame = ({ children, style, className }) => (
  <div className={`mobile-frame-3d ${className}`} style={{
    width: 260, height: 540, background: "#0D0D0D", borderRadius: 44,
    border: "8px solid #1F1F21", position: "relative", overflow: "hidden",
    boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 2px #333",
    display: "flex", flexDirection: "column", flexShrink: 0, transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)", ...style
  }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%)", pointerEvents: "none", zIndex: 10 }} />
    <div className="dynamic-island" style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 80, height: 20, background: "#000", borderRadius: 20, zIndex: 11, border: "1px solid #222" }}>
       <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1a1a1a", position: "absolute", right: 8, top: 8 }} />
    </div>
    <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", background: "#000" }}>
      {children}
    </div>
  </div>
);

const AIVoiceShot = () => (
  <div style={{ flex: 1, background: "#000", display: "flex", flexDirection: "column", padding: "60px 20px 20px" }}>
    <div style={{ textAlign: "center", marginBottom: 30 }}>
       <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(56, 151, 240, 0.1)", border: "2px solid #3897f0", margin: "0 auto 15px", display: "grid", placeItems: "center", position: "relative" }}>
          <div className="pulse-ring" />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#3897f0"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
       </div>
       <h3 style={{ color: "#FFF", fontSize: 16, fontWeight: 700, margin: 0 }}>Sarah (AI Closer)</h3>
       <p style={{ color: "#3897f0", fontSize: 10, fontWeight: 800, textTransform: "uppercase", marginTop: 4 }}>Listening...</p>
    </div>
    <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 14, border: "1px solid rgba(255,255,255,0.1)" }}>
       <div style={{ color: "#FFF", fontSize: 13, lineHeight: 1.4 }}>
          "Yes, I understand you're looking for a 3-bedroom luxury villa. I'm checking availability for Friday..."
       </div>
    </div>
    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around", paddingBottom: 10 }}>
       <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#FF3B30", display: "grid", placeItems: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6 18h12V6H6v12z"/></svg></div>
       <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#4CD964", display: "grid", placeItems: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 6L9 17l-5-5"/></svg></div>
    </div>
  </div>
);

const WhatsAppShot = () => (
  <div style={{ flex: 1, background: "#0B141A", display: "flex", flexDirection: "column" }}>
    <div style={{ padding: "50px 16px 12px", background: "#202C33", display: "flex", alignItems: "center", gap: 10 }}>
      <img src="https://i.ibb.co/nNnbS5KQ/image.png" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }} />
      <div style={{ flex: 1 }}>
        <div style={{ color: "#FFF", fontWeight: 700, fontSize: 12 }}>Piorate Ventures</div>
        <div style={{ color: "#00A884", fontSize: 10 }}>AI Agent Active</div>
      </div>
    </div>
    <div style={{ flex: 1, padding: 12, display: "flex", flexDirection: "column", gap: 8, background: "rgba(0,0,0,0.2)" }}>
       <div style={{ alignSelf: "flex-start", background: "#202C33", color: "#E9EDEF", padding: "8px 12px", borderRadius: "0 8px 8px 8px", fontSize: 12, maxWidth: "80%" }}>
          "Hey, is this property still available?"
       </div>
       <div style={{ alignSelf: "flex-end", background: "#005C4B", color: "#E9EDEF", padding: "8px 12px", borderRadius: "8px 8px 0 8px", fontSize: 12, maxWidth: "80%" }}>
          "Absolutely! Piorate AI here. I can book a tour for you in Dubai next Tuesday."
       </div>
    </div>
  </div>
);

const InstagramAdShot = () => (
  <div style={{ flex: 1, background: "#FFF", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    {/* Property Photos Carousel */}
    <div style={{ padding: "8px 12px", background: "#F9F9F9", borderBottom: "1px solid #EFEFEF" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px" }}>FEATURED</div>
      </div>
      <div style={{ display: "flex", gap: 8, overflow: "auto", marginBottom: 8 }}>
        <div style={{ width: 60, height: 60, borderRadius: 6, background: "linear-gradient(135deg, #D4A574 0%, #8B7355 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🏡</div>
        <div style={{ width: 60, height: 60, borderRadius: 6, background: "linear-gradient(135deg, #C9956D 0%, #A67D5D 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🏠</div>
      </div>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#000", marginBottom: 2 }}>Dubai Marina Villa</div>
      <div style={{ fontSize: 11, color: "#999" }}>Dec 12, 2024 • Sponsored</div>
    </div>

    {/* Header */}
    <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #EFEFEF" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #3897f0 0%, #2E68B8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>P</div>
        <div style={{ lineHeight: "1.2" }}>
          <div style={{ color: "#000", fontWeight: 700, fontSize: 13 }}>Piorate Ventures</div>
          <div style={{ color: "#999", fontSize: 11 }}>Dubai • Sponsored</div>
        </div>
      </div>
      <div style={{ color: "#999", fontSize: 18, cursor: "pointer" }}>•••</div>
    </div>

    {/* Main Image */}
    <div style={{ width: "100%", height: 180, background: "linear-gradient(135deg, #D4A574 0%, #8B7355 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, overflow: "hidden" }}>🏘️</div>

    {/* Interactions */}
    <div style={{ padding: "8px 12px", display: "flex", justifyContent: "space-between", gap: 4, borderBottom: "1px solid #EFEFEF" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 2L11 13M2 2l11 11m11-11l-11 11M2 2l11 11"/></svg>
      </div>
      <div style={{ cursor: "pointer" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/></svg>
      </div>
    </div>

    {/* Likes */}
    <div style={{ padding: "6px 12px 4px", fontSize: 12, fontWeight: 700, color: "#000" }}>1,284 likes</div>

    {/* Caption */}
    <div style={{ padding: "4px 12px 8px", fontSize: 12, color: "#000", lineHeight: 1.4 }}>
      <span style={{ fontWeight: 700 }}>Piorate Ventures</span>
      <span> Luxury villa 4BR Dubai Marina. AI bookings. DM for tours! 🏠</span>
    </div>

    {/* Comments Section */}
    <div style={{ padding: "8px 12px 10px", display: "flex", flexDirection: "column", gap: 8, fontSize: 12, borderTop: "1px solid #EFEFEF" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#FF6B6B", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>AP</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, lineHeight: 1.3 }}>
            <span style={{ fontWeight: 700, color: "#000" }}>alex.patel_</span>
            <span style={{ color: "#000" }}> Gorgeous! 🔥</span>
          </div>
          <div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>3h ago</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#4ECDC4", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>EL</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, lineHeight: 1.3 }}>
            <span style={{ fontWeight: 700, color: "#000" }}>emirates_living</span>
            <span style={{ color: "#000" }}> When available?</span>
          </div>
          <div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>2h ago</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#95E1D3", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>SI</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, lineHeight: 1.3 }}>
            <span style={{ fontWeight: 700, color: "#000" }}>sarah.investments</span>
            <span style={{ color: "#000" }}> Booked! ✅</span>
          </div>
          <div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>1h ago</div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: "#3897f0", fontWeight: 600, cursor: "pointer" }}>View all 284 comments</div>
    </div>
  </div>
);

const Hero = () => {
  const [scrollT, setScrollT] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== 'undefined' && window.innerWidth >= 1024
  );

  // Scroll tracking
  React.useEffect(() => {
    let raf = 0;
    const onUpdate = () => {
      raf = 0;
      const el = document.querySelector('.hero-infinite');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const raw = (vh - r.top) / (vh + r.height);
      const t = Math.max(0, Math.min(1, raw));
      setScrollT(t);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(onUpdate);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onUpdate);
    onUpdate();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onUpdate);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Track desktop state on resize
  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // MOBILE: Original animation (unchanged)
  const m = (a, b) => a + (b - a) * scrollT;

  const frameStyle1Mobile = { transform: `translate(${m(-40, 30)}px, ${m(0, 180)}px) rotate(-8deg) scale(0.82)`, zIndex: 5, opacity: 0.95 };
  const frameStyle2Mobile = { transform: `translate(${m(40, -20)}px, ${m(0, 120)}px) rotate(8deg) scale(0.84)`, zIndex: 10, opacity: 1 };
  const frameStyle3Mobile = { transform: `translate(${m(-20, -60)}px, ${m(0, 240)}px) rotate(-4deg) scale(0.82)`, zIndex: 15, opacity: 0.95 };

  return (
    <section className="hero-infinite" style={{
      position: "relative",
      backgroundColor: "#FFF",
      color: "#111",
      overflow: "visible",
      padding: "100px 0 120px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <style>{`
        @keyframes strikeAnim { to { transform: scaleX(1); } }
        .strike-red { position: relative; color: #AAA; display: inline-block; padding: 0 4px; }
        .strike-red::after {
          content: ""; position: absolute; left: 0; top: 55%; width: 100%; height: 6px;
          background: #FF2D55; transform: scaleX(0); transform-origin: left;
          animation: strikeAnim 1s forwards 1.2s cubic-bezier(0.65, 0, 0.35, 1);
        }

        @keyframes pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }
        .pulse-ring { position: absolute; inset: -15px; border-radius: 50%; border: 2px solid #3897f0; animation: pulse 2s infinite; }

        /* Floating animations - each phone moves independently */
        @keyframes float-up { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
        @keyframes float-down { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(25px); } }

        .prime-btn {
          background: #3897f0; color: #FFF; padding: 20px 60px; border-radius: 100px;
          font-weight: 800; font-size: 18px; transition: all 0.4s;
          box-shadow: 0 20px 40px rgba(56,151,240,0.25); border: none; cursor: pointer;
          text-decoration: none; display: inline-block;
        }
        .prime-btn:hover { transform: translateY(-5px); box-shadow: 0 30px 60px rgba(56,151,240,0.4); }

        /* DESKTOP: phones side by side with staggered heights + floating animation */
        @media (min-width: 1024px) {
          .phone-cloud { display: flex; flex-direction: row; justify-content: center; gap: 16px; align-items: flex-end; width: 100%; height: 640px; position: relative; }

          .f-1 { align-self: flex-end; animation: float-up 3.5s ease-in-out infinite; }
          .f-2 { align-self: flex-start; animation: float-down 4s ease-in-out infinite 0.3s; }
          .f-3 { align-self: flex-end; animation: float-up 3.5s ease-in-out infinite 0.6s; }

          .viewport-track { perspective: 2500px; display: flex; justify-content: center; width: 100%; margin: 0 0 80px 0; }

          .desktop-btn-wrap { margin-top: 40px; }
        }

        /* MOBILE: Optimized layout */
        @media (max-width: 1023px) {
          .hero-infinite { padding: 100px 0 60px !important; min-height: auto; }
          .viewport-track { display: flex; justify-content: center; align-items: center; width: 100%; margin: 15px 0 0; }
          .phone-cloud { display: flex; flex-direction: column; align-items: center; gap: 40px; width: 100%; }
          .stagger-frame { margin-bottom: -280px; opacity: 0.95; }
          .desktop-btn-wrap { margin-top: 320px !important; padding: 0 16px; }
          .prime-btn { padding: 14px 44px !important; font-size: 15px !important; width: 100%; max-width: 260px; }
        }
      `}</style>

      <div className="hero-content" style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", textAlign: "center", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <style>{`
          @media (max-width: 1023px) {
            .hero-content {
              padding: 0 16px !important;
            }
          }
        `}</style>

        {/* HERO TEXT */}
        <div className="hero-text-wrap" style={{ marginBottom: "40px" }}>
          <style>{`
            @media (max-width: 1023px) {
              .hero-text-wrap {
                margin-bottom: 20px !important;
              }
            }
          `}</style>
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
            fontWeight: 950,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            marginBottom: "24px",
            color: "#000",
            textAlign: "center"
          }}>
            Stop <span className="strike-red">losing</span> leads.<br />
            Close them <span style={{ color: "#3897f0" }}>fully automated.</span>
          </h1>
          <p style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "19px",
            fontWeight: 600,
            color: "#666",
            lineHeight: 1.4,
            textAlign: "center"
          }}>
            Piorate Ventures: Premium AI Voice, WhatsApp & Instagram Automation. Built to scale your business to 7-figures on autopilot.
          </p>
        </div>

        {/* PHONES - Side by side with middle HIGHER, sides LOWER + FLOATING ANIMATION */}
        <div className="viewport-track">
          <div className="phone-cloud">
            {/* LEFT PHONE - LOWER - floats UP */}
            <div className="stagger-frame f-1" style={isDesktop ? { willChange: 'transform' } : frameStyle1Mobile}>
              <MobileFrame><AIVoiceShot /></MobileFrame>
            </div>

            {/* MIDDLE PHONE - HIGHER - floats DOWN */}
            <div className="stagger-frame f-2" style={isDesktop ? { willChange: 'transform' } : frameStyle2Mobile}>
              <MobileFrame><WhatsAppShot /></MobileFrame>
            </div>

            {/* RIGHT PHONE - LOWER - floats UP */}
            <div className="stagger-frame f-3" style={isDesktop ? { willChange: 'transform' } : frameStyle3Mobile}>
              <MobileFrame><InstagramAdShot /></MobileFrame>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="desktop-btn-wrap" style={{ textAlign: 'center' }}>
           <a href="#book" className="prime-btn">Book Your Automation Call</a>
           <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "24px", opacity: 0.4, fontWeight: 800, fontSize: "10px", letterSpacing: "2px", color: "#000", flexWrap: "wrap" }}>
              <span>AI VOICE</span>   <span>WHATSAPP</span>   <span>DM AUTOMATION</span>
           </div>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
