// Systems deep-dive band — zigzag editorial layout, 5 systems
function Systems() {
  const items = [
    {
      kicker: 'System 01',
      title: 'Quadro Soft-Close',
      body: 'A drawer slide engineered to vanish — synchronised damping closes 90mm of travel in under 1.4 seconds. Rated for 30kg dynamic load.',
      meta: ['Soft-close', '30kg load', '80,000 cycles'],
      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85&auto=format&fit=crop',
    },
    {
      kicker: 'System 02',
      title: 'Sensio Lift-Up',
      body: 'Three-position stay-lift fittings for overhead wardrobe and kitchen doors. Calibrated to door weight; opens to fingertip pressure, holds at any angle.',
      meta: ['Stay-lift', '3-position', 'Aluminium body'],
      img: 'https://images.unsplash.com/photo-1556909195-ef2a16f8fbf0?w=1600&q=85&auto=format&fit=crop',
    },
    {
      kicker: 'System 03',
      title: 'Interio Closet',
      body: 'A modular walk-in interior of soft-touch wardrobe accessories — pull-out racks, jewellery drawers, LED-lit valets — colour-matched to seven board finishes.',
      meta: ['7 finishes', 'Modular', 'Sensor lit'],
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=85&auto=format&fit=crop',
    },
    {
      kicker: 'System 04',
      title: 'Magic Corner Pro',
      body: 'Reclaims the kitchen corner with a swing-out twin-tray mechanism. 90° pivot, full-extension trays, anti-slip mat. Engineered in Pune, tested in Stuttgart.',
      meta: ['Full-extension', 'Swing-out', '40kg capacity'],
      img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&q=85&auto=format&fit=crop',
    },
    {
      kicker: 'System 05',
      title: 'Aurora LED Architecture',
      body: 'Sensor-driven interior lighting. 2700K — 4000K colour tuning, IR proximity activation, recessed and surface profiles. Wired or wireless.',
      meta: ['IR sensor', '2700–4000K', 'Wired/wireless'],
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=85&auto=format&fit=crop',
    },
  ];

  return (
    <section className="section reveal" style={{ background:'var(--white)' }} data-screen-label="03 Systems">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="num-tag" style={{ marginBottom: 16 }}>— SYSTEMS</div>
            <h2>Systems engineered for<br/>spaces that matter.</h2>
          </div>
          <div className="sec-meta">
            Five flagship platforms specified across luxury residences, hospitality and institutional work.
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap: 120 }} className="sys-stack">
          {items.map((it, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={it.title} className="sys-row" style={{
                display:'grid',
                gridTemplateColumns: '1.25fr 1fr',
                gap: 80, alignItems:'center',
                direction: reverse ? 'rtl' : 'ltr',
              }}>
                <div style={{ direction:'ltr' }}>
                  <div className="sys-img" style={{
                    aspectRatio:'16 / 10',
                    background: `url(${it.img}) center/cover no-repeat`,
                    borderRadius: 'var(--r-card)',
                    overflow:'hidden',
                    position:'relative',
                  }}>
                    {/* Overlay number */}
                    <div style={{
                      position:'absolute', top: 24, left: 28,
                      fontFamily:'var(--font-display)', fontWeight:700, fontSize: 64, lineHeight: 1,
                      color: 'rgba(255,255,255,.85)', mixBlendMode:'overlay',
                    }}>{String(i+1).padStart(2,'0')}</div>
                  </div>
                </div>
                <div style={{ direction:'ltr', paddingRight: reverse ? 0 : 24, paddingLeft: reverse ? 24 : 0 }} className="sys-copy">
                  <div className="num-tag" style={{ marginBottom: 18 }}>— {it.kicker}</div>
                  <h3 style={{
                    fontFamily:'var(--font-display)', fontWeight: 700,
                    fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.1, letterSpacing:'-0.015em',
                    color: 'var(--navy)', marginBottom: 22,
                  }}>{it.title}</h3>
                  <p style={{ fontFamily:'var(--font-body)', fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: 'var(--grey-500)', marginBottom: 32, maxWidth: 480 }}>
                    {it.body}
                  </p>
                  <div style={{ display:'flex', gap: 8, flexWrap:'wrap', marginBottom: 36 }}>
                    {it.meta.map(m => (
                      <span key={m} className="ui-label" style={{
                        padding: '8px 16px',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--r-pill)',
                        fontSize: 11, color: 'var(--navy)',
                      }}>{m}</span>
                    ))}
                  </div>
                  <a href="#" className="sys-link ui-label" style={{
                    display:'inline-flex', alignItems:'center', gap: 12, color:'var(--navy)',
                    fontSize: 12, borderBottom:'1px solid var(--navy)', paddingBottom: 4,
                  }}>
                    Explore {it.title}
                    <I.Arrow />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sys-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px !important; }
          .sys-copy { padding: 0 !important; }
          .sys-stack { gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Systems });
