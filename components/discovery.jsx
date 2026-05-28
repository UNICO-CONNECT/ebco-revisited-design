// Discovery Centres locator — dark navy band with India map + city sidebar
function Discovery() {
  const cities = [
    { name:'Mumbai',    addr:'Linking Road, Bandra West',         x: 215, y: 415 },
    { name:'Delhi',     addr:'Connaught Place, New Delhi',         x: 295, y: 195 },
    { name:'Bengaluru', addr:'Lavelle Road, MG Road',              x: 305, y: 545 },
    { name:'Hyderabad', addr:'Banjara Hills, Road No. 12',         x: 330, y: 475 },
    { name:'Chennai',   addr:'Nungambakkam, Anna Salai',           x: 370, y: 590 },
    { name:'Kolkata',   addr:'Park Street, Camac Street',          x: 525, y: 345 },
    { name:'Pune',      addr:'Koregaon Park, North Main Road',     x: 245, y: 435 },
    { name:'Ahmedabad', addr:'CG Road, Navrangpura',               x: 225, y: 335 },
    { name:'Jaipur',    addr:'C-Scheme, Ashok Marg',               x: 265, y: 270 },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <section className="section reveal" style={{ background:'var(--navy)', color:'var(--white)' }} data-screen-label="04 Discovery">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 72 }}>
          <div>
            <div className="num-tag" style={{ marginBottom: 16 }}>— DISCOVERY CENTRES</div>
            <h2 style={{ color:'var(--white)' }}>
              Touch the engineering.<br/>Nine cities. One standard.
            </h2>
          </div>
          <div className="sec-meta" style={{ color:'rgba(255,255,255,.65)' }}>
            Walk through live kitchen and wardrobe installations. Specify with our engineers in person.
          </div>
        </div>

        <div className="disc-grid" style={{
          display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 80, alignItems:'center',
        }}>
          {/* Map */}
          <div className="disc-map" style={{ position:'relative' }}>
            <svg viewBox="0 0 600 700" style={{ width:'100%', height:'auto', overflow:'visible' }}>
              <defs>
                <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="indiaGrad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#13315c" />
                  <stop offset="100%" stopColor="#0a1f44" />
                </linearGradient>
              </defs>
              {/* Stylised India silhouette (geometric, not geographically exact) */}
              <path
                d="M255,90 C285,90 320,105 340,130 C360,140 395,150 410,170 C440,170 470,185 485,205 C500,225 515,245 525,275 C540,300 545,330 540,355 C555,365 555,400 540,420 C530,445 510,460 495,475 C500,490 480,500 470,505 C455,520 445,540 430,555 C415,580 395,600 375,615 C360,635 345,645 325,635 C310,640 295,635 285,620 C275,610 270,590 270,575 C260,560 250,540 245,520 C235,505 225,490 215,475 C205,460 200,445 200,425 C195,405 195,380 200,360 C190,340 185,315 185,290 C190,265 195,240 200,215 C195,195 200,170 215,150 C225,130 235,110 255,95 Z"
                fill="url(#indiaGrad)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              {/* Latitude lines for editorial touch */}
              {[160, 240, 320, 400, 480, 560].map(y=>(
                <line key={y} x1="170" x2="555" y1={y} y2={y} stroke="rgba(255,255,255,0.04)" strokeDasharray="2 6" />
              ))}

              {/* City dots */}
              {cities.map((c, i) => (
                <g key={c.name} onClick={()=>setActive(i)} style={{ cursor:'pointer' }}>
                  {/* pulse */}
                  <circle cx={c.x} cy={c.y} r={active===i ? 16 : 8}
                    fill="var(--orange)" opacity={active===i ? 0.18 : 0.10}
                    style={{ transition:'all 400ms var(--ease-out)' }}
                  />
                  {/* core */}
                  <circle cx={c.x} cy={c.y} r={active===i ? 6 : 4}
                    fill="var(--orange)"
                    filter="url(#dot-glow)"
                    style={{ transition:'all 300ms var(--ease-out)' }}
                  />
                  {/* label */}
                  {active===i && (
                    <g>
                      <line x1={c.x} x2={c.x + 22} y1={c.y - 8} y2={c.y - 28} stroke="rgba(255,255,255,0.55)" strokeWidth="0.8"/>
                      <text x={c.x + 26} y={c.y - 28} fill="var(--white)" fontFamily="var(--font-display)" fontWeight="600" fontSize="13" letterSpacing="0.06em">
                        {c.name.toUpperCase()}
                      </text>
                    </g>
                  )}
                </g>
              ))}

              {/* Compass mark */}
              <g transform="translate(530,90)" opacity="0.5">
                <circle r="18" fill="none" stroke="rgba(255,255,255,0.3)" />
                <path d="M0,-12 L4,0 L0,12 L-4,0 Z" fill="var(--orange)" />
                <text x="0" y="-22" fill="rgba(255,255,255,0.5)" fontFamily="var(--font-display)" fontSize="10" textAnchor="middle">N</text>
              </g>
            </svg>
          </div>

          {/* City list */}
          <div>
            <div style={{
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px 24px',
              borderTop:'1px solid rgba(255,255,255,0.12)',
            }}>
              {cities.map((c, i) => (
                <button key={c.name} onClick={()=>setActive(i)}
                  onMouseEnter={()=>setActive(i)}
                  style={{
                    textAlign:'left', padding:'20px 4px',
                    borderBottom:'1px solid rgba(255,255,255,0.12)',
                    color: active===i ? 'var(--white)' : 'rgba(255,255,255,0.7)',
                    display:'flex', gap: 14, alignItems:'flex-start',
                    transition: 'color 200ms var(--ease-out)',
                  }}>
                  <span style={{ color: active===i ? 'var(--orange)' : 'rgba(255,255,255,0.4)', marginTop: 3, transition: 'color 200ms' }}>
                    <I.Pin />
                  </span>
                  <span>
                    <div style={{ fontFamily:'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 4, letterSpacing: '-0.005em' }}>{c.name}</div>
                    <div style={{ fontSize: 13, opacity: .7, fontWeight: 300, lineHeight: 1.4 }}>{c.addr}</div>
                  </span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 40, display:'flex', gap: 16, flexWrap:'wrap', alignItems:'center' }}>
              <a href="#" className="btn btn-primary">Plan Your Visit <I.Arrow /></a>
              <a href="#" className="ui-label" style={{ color:'var(--white)', borderBottom:'1px solid rgba(255,255,255,0.4)', paddingBottom: 4, fontSize: 12 }}>
                View all centres
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .disc-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .disc-map { max-width: 480px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Discovery });
