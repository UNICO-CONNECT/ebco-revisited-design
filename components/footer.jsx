// Footer — dark navy, four columns + certifications strip
function Footer() {
  const cols = [
    {
      title: 'Solutions',
      links: ['Drawer Slides', 'Hinges', 'Kitchen Systems', 'Wardrobe Fittings', 'Furniture Lights', 'Locks & Security', 'Architectural Hardware'],
    },
    {
      title: 'For Professionals',
      links: ['Trade Program', 'BIM & CAD Library', 'Catalogues', 'Specification Tool', 'Project Diaries', 'Sample Kits'],
    },
    {
      title: 'Company',
      links: ['About Ebco', 'Discovery Centres', 'Manufacturing', 'Press', 'Careers', 'Sustainability'],
    },
    {
      title: 'Support',
      links: ['Contact', 'Warranty', 'Installation Guides', 'Service Network', 'Track Order', 'FAQ'],
    },
  ];

  return (
    <footer style={{ background:'var(--navy-deep)', color:'var(--white)' }} data-screen-label="09 Footer">
      <div className="wrap" style={{ padding: '88px 56px 40px' }}>
        {/* Top headline + CTA */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'flex-end',
          gap: 48,
          paddingBottom: 56, marginBottom: 64,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }} className="footer-top">
          <h3 style={{
            fontFamily:'var(--font-display)', fontWeight: 700,
            fontSize:'clamp(32px, 4.5vw, 64px)', lineHeight: 1.05, letterSpacing:'-0.02em',
            color:'var(--white)', maxWidth: 720,
          }}>
            Precision.<br/>
            Perfection.<br/>
            <span style={{ color:'var(--orange)' }}>Passion.</span>
          </h3>
          <div style={{ display:'flex', flexDirection:'column', gap: 14 }} className="footer-cta">
            <a href="#" className="btn btn-primary">Book a Discovery Centre visit <I.Arrow /></a>
            <a href="#" className="btn btn-outline-white">Speak to an engineer</a>
          </div>
        </div>

        {/* 4-col grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns: '1.2fr repeat(4, 1fr)',
          gap: 40, marginBottom: 72,
        }} className="footer-cols">
          {/* Brand col */}
          <div>
            <I.Logo />
            <p style={{ marginTop: 22, fontSize: 14, color:'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 280 }}>
              Engineered fittings since 1979. Manufactured in Pune. Specified in 142 cities across 9 countries.
            </p>
            <div style={{ display:'flex', gap: 10, marginTop: 28 }}>
              {['IG','LI','YT','PIN'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius:'50%',
                  border:'1px solid rgba(255,255,255,0.18)',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  fontSize: 10, fontFamily:'var(--font-display)', fontWeight: 600, letterSpacing:'0.1em',
                  color:'rgba(255,255,255,0.85)',
                  transition:'all 200ms var(--ease-out)',
                }} className="social-chip">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map(c => (
            <div key={c.title}>
              <div className="ui-label" style={{ fontSize: 11, color:'var(--orange)', marginBottom: 22, letterSpacing:'0.16em' }}>
                {c.title}
              </div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap: 12 }}>
                {c.links.map(l => (
                  <li key={l}>
                    <a href="#" className="footer-link" style={{
                      fontSize: 14, color:'rgba(255,255,255,0.75)', fontWeight: 300,
                      transition:'color 200ms var(--ease-out)',
                    }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications strip */}
      <div style={{
        borderTop:'1px solid rgba(255,255,255,0.1)',
        background:'rgba(0,0,0,0.18)',
      }}>
        <div className="wrap" style={{ padding:'22px 56px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap: 16 }}>
          <div style={{ display:'flex', gap: 28, flexWrap:'wrap', alignItems:'center', color:'rgba(255,255,255,0.5)' }}>
            <span className="ui-label" style={{ fontSize: 10, letterSpacing:'0.18em' }}>CERTIFIED:</span>
            {['ISO 9001:2015', 'BIFMA TESTED', 'BIS APPROVED', 'GREENPRO', 'EN 15338'].map(c => (
              <span key={c} className="ui-label" style={{ fontSize: 10, color:'rgba(255,255,255,0.65)', letterSpacing:'0.18em' }}>
                {c}
              </span>
            ))}
          </div>
          <div style={{ display:'flex', gap: 22, fontSize: 12, color:'rgba(255,255,255,0.45)' }}>
            <span>© 2026 Ebco Pvt. Ltd.</span>
            <a href="#" style={{ color:'inherit' }}>Privacy</a>
            <a href="#" style={{ color:'inherit' }}>Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--white) !important; }
        .social-chip:hover { background: var(--orange); border-color: var(--orange); color: var(--white) !important; }
        @media (max-width: 1024px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 48px !important; }
          .footer-top { flex-direction: column; align-items: flex-start !important; }
        }
        @media (max-width: 560px) {
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Footer });
