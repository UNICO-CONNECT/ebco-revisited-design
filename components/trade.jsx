// Trade / Architect callout — split 50/50
function Trade() {
  return (
    <section className="reveal" style={{ background:'var(--white)' }} data-screen-label="06 Trade">
      <div className="trade-grid" style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', minHeight: 620,
      }}>
        {/* Left — image */}
        <div className="trade-img" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.25) 100%), url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop) center/cover no-repeat',
          minHeight: 520,
          position:'relative',
        }}>
          <div style={{
            position:'absolute', left: 32, bottom: 28, color:'var(--white)',
            display:'flex', flexDirection:'column', gap: 6,
          }}>
            <div className="ui-label" style={{ fontSize: 11, opacity: .85, letterSpacing:'0.18em' }}>STUDIO VISIT</div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight: 500, fontSize: 14, opacity: .9 }}>S+S Architects · Mumbai</div>
          </div>
        </div>

        {/* Right — navy panel */}
        <div className="trade-copy" style={{
          background:'var(--navy)', color:'var(--white)',
          padding:'88px 80px',
          display:'flex', flexDirection:'column', justifyContent:'center',
        }}>
          <div className="num-tag" style={{ marginBottom: 22 }}>— FOR THE TRADE</div>
          <h2 className="h-display" style={{
            color:'var(--white)',
            fontSize:'clamp(36px, 4vw, 64px)',
            marginBottom: 28,
          }}>
            For the people who<br/>specify.
          </h2>
          <p className="body-lg" style={{ color:'rgba(255,255,255,0.78)', maxWidth: 480, marginBottom: 40 }}>
            Architects, designers and joinery shops get priority specification support, BIM libraries,
            CAD blocks, in-studio samples, and a direct line to our engineering team.
          </p>

          {/* Benefit list */}
          <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px 32px', marginBottom: 44 }} className="trade-list">
            {[
              'Volume pricing',
              'BIM & CAD libraries',
              'Engineer-led specs',
              'Sample kits to studio',
              'Project priority lead times',
              'Annual trade catalogue',
            ].map(t => (
              <li key={t} style={{ display:'flex', alignItems:'center', gap: 12, fontSize: 14, color:'rgba(255,255,255,0.85)' }}>
                <span style={{ width: 6, height: 6, borderRadius:'50%', background:'var(--orange)', flex:'0 0 6px' }} />
                {t}
              </li>
            ))}
          </ul>

          <div style={{ display:'flex', gap: 14, flexWrap:'wrap' }}>
            <a href="#" className="btn btn-primary">Join the Trade Program <I.Arrow /></a>
            <a href="#" className="btn btn-outline-white">Download Catalogue</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trade-grid { grid-template-columns: 1fr !important; }
          .trade-copy { padding: 56px 32px !important; }
          .trade-img { min-height: 380px !important; }
          .trade-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Trade });
