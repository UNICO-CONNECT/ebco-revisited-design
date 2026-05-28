// Horizontal scroll category strip — edge-bleed, no slider dots
function Categories() {
  const cats = [
    { n:'01', title:'Drawer Slides', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop', sub:'Soft-close motion. Heavy-load. Push-to-open.' },
    { n:'02', title:'Hinges', img:'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80&auto=format&fit=crop', sub:'Concealed. 110°—170°. Tested to 80,000 cycles.' },
    { n:'03', title:'Kitchen Systems', img:'https://images.unsplash.com/photo-1556909195-ef2a16f8fbf0?w=900&q=80&auto=format&fit=crop', sub:'Pull-outs, corner solutions, waste systems.' },
    { n:'04', title:'Wardrobe Fittings', img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80&auto=format&fit=crop', sub:'Lift-up, sliding, walk-in modular interiors.' },
    { n:'05', title:'Furniture Lights', img:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop', sub:'Sensor-driven LED strips & spotlights.' },
    { n:'06', title:'Locks & Security', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop', sub:'Cam locks, drawer locks, smart access.' },
  ];

  const scrollerRef = React.useRef(null);
  const scrollBy = (dir) => {
    const s = scrollerRef.current;
    if (!s) return;
    s.scrollBy({ left: dir * (s.clientWidth * 0.7), behavior: 'smooth' });
  };

  return (
    <section id="categories" className="section reveal" style={{ background: 'var(--white)', paddingBottom: 0 }} data-screen-label="02 Categories">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 56 }}>
          <div>
            <div className="num-tag" style={{ marginBottom: 16 }}>— CATEGORIES</div>
            <h2>A fitting for every<br/>furniture decision.</h2>
          </div>
          <div className="sec-meta">
            Six precision-engineered families. Specified by 14,000+ architects across 9 countries.
          </div>
        </div>
      </div>

      {/* Edge-bleed scroller */}
      <div style={{ position:'relative' }}>
        <div
          ref={scrollerRef}
          className="no-scrollbar"
          style={{
            display:'flex', gap: 18,
            padding: '0 56px 24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {cats.map((c, i) => (
            <a key={c.title} href="#" className="cat-tile" style={{
              flex: '0 0 auto', width: 360, aspectRatio: '3 / 4',
              position:'relative', overflow:'hidden', borderRadius: 'var(--r-card)',
              background: 'var(--navy)',
              scrollSnapAlign: 'start',
            }}>
              <div className="cat-img" style={{
                position:'absolute', inset:0,
                background:`url(${c.img}) center/cover no-repeat`,
                filter:'brightness(.78) contrast(1.05) saturate(.9)',
                transition: 'transform 800ms var(--ease-out)',
              }} />
              {/* Bottom 60% navy gradient */}
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(180deg, rgba(9,40,83,0) 30%, rgba(9,40,83,.45) 55%, rgba(9,40,83,.95) 100%)',
              }} />
              {/* Top index */}
              <div style={{
                position:'absolute', top: 22, left: 24, right: 24, display:'flex', justifyContent:'space-between', alignItems:'center',
                color: 'rgba(255,255,255,.85)',
              }}>
                <span className="ui-label" style={{ fontSize: 11, letterSpacing: '0.18em' }}>{c.n}</span>
                <span style={{
                  width: 36, height: 36, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                  border:'1px solid rgba(255,255,255,.35)',
                }} className="cat-arrow">
                  <I.ArrowUpRight />
                </span>
              </div>
              {/* Bottom title */}
              <div style={{ position:'absolute', left: 28, right: 28, bottom: 28, color:'var(--white)' }}>
                <div className="cat-title" style={{
                  fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 28, letterSpacing:'-0.01em',
                  lineHeight: 1.1, marginBottom: 10,
                  display:'inline-block', position:'relative',
                }}>
                  {c.title}
                  <span className="cat-underline" style={{
                    position:'absolute', left: 0, right: 0, bottom: -6, height: 1, background:'var(--orange)',
                    transform:'scaleX(0)', transformOrigin:'left',
                    transition:'transform 480ms var(--ease-out)',
                  }} />
                </div>
                <p style={{ color:'rgba(255,255,255,.78)', fontSize: 14, fontWeight: 300, marginTop: 14, maxWidth: 240 }}>
                  {c.sub}
                </p>
              </div>
            </a>
          ))}
          <div style={{ flex:'0 0 32px' }} />
        </div>

        {/* Arrow controls */}
        <div style={{ position:'absolute', right: 56, top: -76, display:'flex', gap: 10 }} className="cat-controls">
          <button onClick={()=>scrollBy(-1)} className="circ-btn" aria-label="Previous"><I.Arrow style={{ transform:'rotate(180deg)' }}/></button>
          <button onClick={()=>scrollBy(1)} className="circ-btn" aria-label="Next"><I.Arrow /></button>
        </div>
      </div>

      <style>{`
        .cat-tile:hover .cat-img { transform: scale(1.05); }
        .cat-tile:hover .cat-underline { transform: scaleX(1); }
        .cat-tile:hover .cat-arrow { background: var(--orange); border-color: var(--orange); }
        .circ-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid var(--border-light); color: var(--navy);
          display:inline-flex; align-items:center; justify-content:center;
          transition: all 200ms var(--ease-out);
        }
        .circ-btn:hover { background: var(--navy); color: var(--white); border-color: var(--navy); }
        @media (max-width: 768px) {
          .cat-tile { width: 280px !important; }
          .cat-controls { display: none !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Categories });
