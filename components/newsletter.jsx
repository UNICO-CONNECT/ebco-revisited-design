// Newsletter — single line pill input + orange pill CTA
function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(()=>{ setSubmitted(false); setEmail(''); }, 2600);
  };

  return (
    <section className="section-tight reveal" style={{ background:'var(--white)' }} data-screen-label="08 Newsletter">
      <div className="wrap">
        <div style={{
          background:'var(--tint-1)',
          borderRadius: 'var(--r-card)',
          padding: '64px 72px',
          display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 56, alignItems:'center',
        }} className="news-card">
          <div>
            <div className="num-tag" style={{ marginBottom: 14 }}>— THE DISPATCH</div>
            <h3 style={{
              fontFamily:'var(--font-display)', fontWeight: 700,
              fontSize:'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing:'-0.015em',
              color:'var(--navy)', marginBottom: 12,
            }}>
              Quietly, six times a year.
            </h3>
            <p style={{ color:'var(--grey-500)', fontSize: 16, fontWeight: 300, lineHeight: 1.6, maxWidth: 420 }}>
              New systems, project diaries, and engineering notes. No promotions. Unsubscribe with one click.
            </p>
          </div>

          <form onSubmit={onSubmit} style={{
            display:'flex', alignItems:'center', gap: 8,
            background:'var(--white)', borderRadius:'var(--r-pill)',
            padding: 6,
            border:'1px solid var(--border-light)',
          }} className="news-form">
            <input
              type="email" required placeholder="your@studio.com"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              style={{
                flex: 1, border:'none', outline:'none', background:'transparent',
                padding:'14px 22px', fontSize: 15, fontFamily:'var(--font-body)',
                color:'var(--navy)',
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding:'14px 28px', fontSize: 12 }}>
              {submitted ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .news-card { grid-template-columns: 1fr !important; padding: 48px 32px !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          .news-form { flex-direction: column; border-radius: 18px; padding: 10px; gap: 10px; }
          .news-form input { width: 100%; text-align: center; }
          .news-form .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Newsletter });
