// Hero — full viewport, "autoplay muted looping product film" effect
// Uses a Pexels CDN video with poster fallback + Ken-Burns CSS slow zoom
function Hero() {
  const [muted, setMuted] = React.useState(true);
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(true);

  const toggleMute = () => {
    setMuted(m => {
      const next = !m;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  };

  React.useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, []);

  return (
    <section style={{ position:'relative', height: '100vh', minHeight: 640, width:'100%', overflow:'hidden', background:'#0a1a30' }} data-screen-label="01 Hero">
      {/* Video layer */}
      <div style={{ position:'absolute', inset: 0, overflow:'hidden' }}>
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=85&auto=format&fit=crop"
          style={{
            position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover',
            animation: 'kenburns 28s ease-in-out infinite alternate',
          }}
        >
          <source src="https://videos.pexels.com/video-files/6474969/6474969-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4109244/4109244-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* gradient washes */}
        <div style={{ position:'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,16,40,.55) 0%, rgba(6,16,40,0) 30%, rgba(6,16,40,0) 55%, rgba(6,16,40,.85) 100%)' }} />
        <div style={{ position:'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(6,16,40,.45) 0%, rgba(6,16,40,0) 50%)' }} />
      </div>

      {/* Top thin frame label (editorial chrome) */}
      <div style={{
        position:'absolute', top: 96, left: 0, right: 0, zIndex: 2,
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding: '0 56px', color: 'rgba(255,255,255,.7)',
      }} className="hero-meta">
        <div className="ui-label" style={{ display:'flex', gap: 14, alignItems:'center' }}>
          <span style={{ width: 28, height: 1, background:'rgba(255,255,255,.45)' }} />
          Film 01 — Soft-Close Series
        </div>
        <div className="ui-label" style={{ opacity: .7 }}>2025 / Engineered Fittings</div>
      </div>

      {/* Headline block */}
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0, zIndex: 2,
        padding: '0 56px 96px',
      }} className="hero-copy">
        <div style={{ maxWidth: 1100 }}>
          <div className="eyebrow" style={{ color:'var(--orange)', marginBottom: 22, display:'flex', gap: 14, alignItems:'center' }}>
            <span style={{ width: 28, height: 1, background:'var(--orange)' }} />
            EBCO — PRECISION. PERFECTION. PASSION.
          </div>
          <h1 className="h-display" style={{
            color:'var(--white)',
            fontSize: 'clamp(48px, 7.5vw, 112px)',
            margin: '0 0 28px',
          }}>
            Engineered<br/>to disappear.
          </h1>
          <p className="h-light" style={{
            color:'rgba(255,255,255,.82)',
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            maxWidth: 560, marginBottom: 44,
          }}>
            Fittings that let your furniture speak first. Forty years of motion, calibrated to vanish into the spaces it serves.
          </p>
          <div style={{ display:'flex', gap: 14, flexWrap:'wrap' }}>
            <a href="#categories" className="btn btn-primary">
              Explore Systems
              <I.Arrow />
            </a>
            <a href="#" className="btn btn-outline-white">
              <I.Play /> Watch the Film
            </a>
          </div>
        </div>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute' : 'Mute'}
        style={{
          position:'absolute', right: 36, bottom: 36, zIndex: 3,
          width: 46, height: 46, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,.4)',
          background: 'rgba(255,255,255,.06)',
          backdropFilter: 'blur(6px)',
          color: 'var(--white)',
          display:'flex', alignItems:'center', justifyContent:'center',
          transition: 'all 200ms var(--ease-out)',
        }}
      >
        {muted ? <I.VolumeOff /> : <I.VolumeOn />}
      </button>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', left: '50%', bottom: 26, transform:'translateX(-50%)', zIndex: 2,
        color: 'rgba(255,255,255,.65)',
        display:'flex', flexDirection:'column', alignItems:'center', gap: 10,
      }} className="hide-sm">
        <span className="ui-label" style={{ fontSize: 10, letterSpacing:'0.2em' }}>SCROLL</span>
        <span style={{ display:'block', width: 1, height: 28, background:'rgba(255,255,255,.5)', animation:'scrollTick 1.8s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.04) translate(0,0); }
          100% { transform: scale(1.14) translate(-1.5%, -1%); }
        }
        @keyframes scrollTick {
          0%, 100% { transform: scaleY(0.4); transform-origin: top; opacity: .35; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        @media (max-width: 768px) {
          .hero-meta { padding: 0 22px !important; top: 80px !important; }
          .hero-copy { padding: 0 22px 80px !important; }
          .hero-meta > div:nth-child(2) { display: none; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero });
