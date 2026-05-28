// Numbers band — animated counters on light surface
function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function Numbers() {
  const ref = React.useRef(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStart(true); io.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const items = [
    { value: 47, suffix: '', label: 'Years in motion', desc: 'Since 1979' },
    { value: 2400, suffix: '+', label: 'Active SKUs', desc: 'Across 12 categories' },
    { value: 18600, suffix: '+', label: 'Projects specified', desc: 'Residential & contract' },
    { value: 142, suffix: '', label: 'Cities served', desc: 'Across 9 countries' },
  ];

  return (
    <section ref={ref} className="section-tight reveal" style={{ background:'var(--tint-4)' }} data-screen-label="05 Numbers">
      <div className="wrap">
        <div className="num-tag" style={{ marginBottom: 16, textAlign:'center' }}>— EBCO BY THE NUMBERS</div>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 32,
          paddingTop: 36, borderTop:'1px solid var(--border-light)',
        }} className="num-grid">
          {items.map((it, i) => (
            <Counter key={it.label} {...it} start={start} delay={i*120} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .num-grid { grid-template-columns: 1fr 1fr !important; gap: 40px 24px !important; }
        }
        @media (max-width: 480px) {
          .num-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Counter({ value, suffix, label, desc, start, delay }) {
  const [go, setGo] = React.useState(false);
  React.useEffect(() => {
    if (!start) return;
    const t = setTimeout(()=>setGo(true), delay);
    return () => clearTimeout(t);
  }, [start, delay]);
  const v = useCounter(value, 1800, go);
  return (
    <div style={{ padding: '0 8px' }}>
      <div style={{
        fontFamily:'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(48px, 5.5vw, 84px)', lineHeight: 1, color:'var(--navy)',
        letterSpacing:'-0.025em',
        marginBottom: 18,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {v.toLocaleString('en-IN')}<span style={{ color:'var(--orange)' }}>{suffix}</span>
      </div>
      <div style={{ fontFamily:'var(--font-display)', fontWeight: 500, fontSize: 14, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--navy)', marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontFamily:'var(--font-body)', fontWeight: 300, fontSize: 13, color:'var(--grey-500)' }}>
        {desc}
      </div>
    </div>
  );
}

Object.assign(window, { Numbers });
