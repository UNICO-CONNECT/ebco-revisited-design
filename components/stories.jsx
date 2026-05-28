// Stories / Press / Blog — 3-up editorial card grid
function Stories() {
  const cards = [
    {
      kicker:'PRESS',
      title:'Ebco wins iF Design Award for the Quadro series',
      img:'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80&auto=format&fit=crop',
      date:'May 2026 · Architectural Digest India',
    },
    {
      kicker:'CASE STUDY',
      title:'Inside the wardrobe systems of the Pune Heritage Residence',
      img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80&auto=format&fit=crop',
      date:'7 min read · Project Diary',
    },
    {
      kicker:'JOURNAL',
      title:'Why we test every hinge to 80,000 cycles — and why that matters',
      img:'https://images.unsplash.com/photo-1556909195-ef2a16f8fbf0?w=1200&q=80&auto=format&fit=crop',
      date:'Field notes · Engineering',
    },
  ];

  return (
    <section className="section reveal" style={{ background:'var(--grey-100)' }} data-screen-label="07 Stories">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="num-tag" style={{ marginBottom: 16 }}>— STORIES</div>
            <h2>Press, projects,<br/>and field notes.</h2>
          </div>
          <a href="#" className="ui-label" style={{ color:'var(--navy)', borderBottom:'1px solid var(--navy)', paddingBottom: 4, fontSize: 12, alignSelf:'center' }}>
            All Stories →
          </a>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28 }} className="stories-grid">
          {cards.map((c, i) => (
            <a key={i} href="#" className="story-card" style={{
              background:'var(--white)', borderRadius: 'var(--r-card)', overflow:'hidden',
              display:'flex', flexDirection:'column',
              transition: 'all 360ms var(--ease-out)',
            }}>
              <div style={{
                aspectRatio:'16 / 10',
                background:`url(${c.img}) center/cover no-repeat`,
                overflow:'hidden',
              }} className="story-img-wrap">
                <div className="story-img" style={{
                  width:'100%', height:'100%',
                  background:`url(${c.img}) center/cover no-repeat`,
                  transition:'transform 700ms var(--ease-out)',
                }} />
              </div>
              <div style={{ padding: '28px 28px 32px' }}>
                <div className="num-tag" style={{ marginBottom: 14 }}>{c.kicker}</div>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 22,
                  lineHeight: 1.25, letterSpacing:'-0.01em', color:'var(--navy)',
                  marginBottom: 18, textWrap: 'pretty',
                }}>
                  {c.title}
                </h3>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border-light)', paddingTop: 16 }}>
                  <span style={{ fontSize: 12, color:'var(--grey-500)' }}>{c.date}</span>
                  <span className="ui-label" style={{ color:'var(--navy)', fontSize: 11, display:'inline-flex', alignItems:'center', gap: 8 }}>
                    Read <I.Arrow />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .story-card:hover { transform: translateY(-3px); box-shadow: 0 30px 60px -30px rgba(9,40,83,.18); }
        .story-card:hover .story-img { transform: scale(1.06); }
        @media (max-width: 1024px) {
          .stories-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .stories-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Stories });
