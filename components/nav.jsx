// Sticky nav — transparent over hero, solid navy after 80px scroll
function Nav() {
  const y = useScrollY();
  const solid = y > 80;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const items = ['Solutions', 'Catalogues', 'Discovery Centres', 'Trade', 'Support'];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'background 320ms var(--ease-out), border-color 320ms var(--ease-out), padding 320ms var(--ease-out)',
    background: solid ? 'var(--navy)' : 'transparent',
    borderBottom: solid ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    padding: solid ? '14px 0' : '22px 0',
    color: 'var(--white)',
  };

  return (
    <header style={navStyle} data-screen-label="00 Nav">
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 32 }}>
        <a href="#" style={{ display:'flex', alignItems:'center' }} aria-label="Ebco home">
          <I.Logo />
        </a>

        <nav className="nav-desktop" style={{ display:'flex', gap: 36 }}>
          {items.map(label => (
            <a key={label} href="#" className="nav-link ui-label" style={{
              color: 'var(--white)', opacity: .92, position:'relative', padding: '6px 0',
            }}>{label}</a>
          ))}
        </nav>

        <div style={{ display:'flex', alignItems:'center', gap: 18 }}>
          <button aria-label="Search" style={iconBtn}><I.Search /></button>
          <button aria-label="Cart" style={iconBtn} className="hide-sm"><I.Cart /></button>
          <a href="#" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: 12 }}>
            Book a Visit
          </a>
          <button aria-label="Menu" style={{...iconBtn, display:'none'}} className="menu-btn" onClick={()=>setMenuOpen(true)}><I.Menu /></button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position:'fixed', inset:0, background:'var(--navy)', zIndex: 100, padding: '24px',
          display:'flex', flexDirection:'column'
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 48 }}>
            <I.Logo />
            <button aria-label="Close" style={iconBtn} onClick={()=>setMenuOpen(false)}><I.Close /></button>
          </div>
          <nav style={{ display:'flex', flexDirection:'column', gap: 28 }}>
            {items.map(label => (
              <a key={label} href="#" style={{
                fontFamily:'var(--font-display)', fontWeight: 700, fontSize: 32, color:'var(--white)',
                letterSpacing:'-0.01em',
              }}>{label}</a>
            ))}
          </nav>
          <div style={{ marginTop:'auto', display:'flex', gap: 12, flexDirection:'column' }}>
            <a className="btn btn-primary" href="#" style={{ justifyContent:'center' }}>Book a Visit</a>
            <a className="btn btn-outline-white" href="#" style={{ justifyContent:'center' }}>Find a Centre</a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; right: 100%; bottom: 0;
          height: 1px; background: var(--orange);
          transition: right 320ms var(--ease-out);
        }
        .nav-link:hover::after { right: 0; }
        .nav-link:hover { opacity: 1 !important; }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .menu-btn { display: inline-flex !important; align-items:center; justify-content:center; }
        }
        @media (max-width: 540px) {
          .hide-sm { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const iconBtn = {
  width: 38, height: 38,
  display:'inline-flex', alignItems:'center', justifyContent:'center',
  color: 'var(--white)',
  borderRadius: '50%',
  transition: 'background 200ms var(--ease-out)',
};

Object.assign(window, { Nav });
