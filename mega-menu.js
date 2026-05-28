/* ============================================================
   Ebco 2.0 — Mega Menu (vanilla, drop-in)
   Self-contained. Inject this script on any page with an
   architectural-minimal nav, and it will:
     1. Inject its own CSS
     2. Build the panel + backdrop
     3. Attach a click handler to every nav anchor whose text
        is "Solutions" (case-insensitive)
   ============================================================ */
(function () {
  if (window.__ebcoMegaInit) return;
  window.__ebcoMegaInit = true;

  // ============ DATA ============
  // Six top-level categories, each with sub-categories and leaf items.
  // For demo, all "specific product" leaves point to the Glydra PDP.
  const MEGA = [
    {
      title: 'Drawer Systems', kicker: '01',
      tagline: 'Ball-bearing, undermount, push-to-open — engineered to vanish.',
      featured: {
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop',
        kicker: 'IN FOCUS',
        title: 'Glydra 550 Soft-Close',
        sub: '90 mm of synchronised damping in under 1.4 seconds.',
        href: 'PDP - Glydra Soft-Close.html'
      },
      children: [
        { title: 'Glydra', items: [
          { name: 'Glydra Soft-Close', meta: '30/40 kg · 350 – 600 mm', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Glydra Push-to-Open', meta: '30 kg · tip-on action', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Glydra Plus', meta: '60 kg · heavy duty', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Glydra Mini', meta: '20 kg · compact 250 mm', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Quadro', items: [
          { name: 'Quadro V6', meta: '45 kg · tip-on', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Quadro Pro', meta: '70 kg · soft-close', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Quadro Box', meta: 'integrated box system', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Tandem Box', items: [
          { name: 'Tandem Box Slim', meta: '30 kg · 88 mm side', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Tandem Box Standard', meta: '45 kg · 144 mm side', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Tandem Box Tall', meta: '45 kg · 199 mm side', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Telescopic', items: [
          { name: 'Telescopic 25 kg', meta: 'Ball-bearing · zinc', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Telescopic 35 kg', meta: 'Full extension', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Undermount', items: [
          { name: 'Lyra Undermount', meta: '40 kg · soft-close', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Lyra Pro', meta: '50 kg · concealed', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Heavy Duty', items: [
          { name: 'Cargo HD 80', meta: '80 kg · industrial', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Cargo HD 120', meta: '120 kg · heavy load', href: 'PDP - Glydra Soft-Close.html' },
        ]},
      ]
    },
    {
      title: 'Hinges', kicker: '02',
      tagline: 'Concealed, calibrated, quiet. From 95° to 270°.',
      featured: {
        image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80&auto=format&fit=crop',
        kicker: 'NEW SERIES',
        title: 'Sensio 165° Concealed',
        sub: 'Integrated damper. Three-dimensional adjustment.',
        href: 'PDP - Glydra Soft-Close.html'
      },
      children: [
        { title: 'Concealed Hinges', items: [
          { name: 'Sensio Standard 110°', meta: 'Full overlay · clip-on', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Sensio Wide 165°', meta: 'Soft-close integrated', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Sensio Glass Door', meta: '95° · drilled glass', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Sensio Mini', meta: 'For thin-door cabinets', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Specialty', items: [
          { name: 'Corner Hinges', meta: '90° / 135° / 270°', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Mirror Hinges', meta: 'For wardrobe mirrors', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Pivot Hinges', meta: 'Top-bottom mount', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Pneumatic & Lift', items: [
          { name: 'Stay Lift', meta: 'Top-mount overhead', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Bi-fold Lift', meta: 'Two-panel doors', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Flap Hinges', meta: 'TV / fold-down doors', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Accessories', items: [
          { name: 'Mounting Plates', meta: 'Cruciform · linear', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Damper Clip-ons', meta: 'Retrofit soft-close', href: 'PDP - Glydra Soft-Close.html' },
        ]},
      ]
    },
    {
      title: 'Kitchen Systems', kicker: '03',
      tagline: 'Pull-outs, corner solutions, waste, plate racks.',
      featured: {
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80&auto=format&fit=crop',
        kicker: 'SPECIFIED',
        title: 'Magic Corner Pro',
        sub: '40 kg twin-tray swing-out. The corner, reclaimed.',
        href: 'PDP - Glydra Soft-Close.html'
      },
      children: [
        { title: 'Pull-out Larders', items: [
          { name: 'Tall Unit Larder', meta: '4–6 baskets · 300/400/500', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Mid-Height Larder', meta: '2–3 baskets', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Under-Sink Larder', meta: 'Pipe-clearance design', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Corner Solutions', items: [
          { name: 'Magic Corner Pro', meta: '40 kg · swing-out', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'LeMans II', meta: 'Rotating trays', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Carousel Corner', meta: '270° rotation', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Waste Systems', items: [
          { name: 'Twin Bin 35L', meta: 'Segregated recycling', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Triple Bin 50L', meta: 'Wet / dry / compost', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Door-Mount Bin', meta: '12L · single', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Plate & Cutlery', items: [
          { name: 'Plate Racks', meta: 'Stainless steel insert', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Cutlery Trays', meta: 'Modular, oak finish', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Knife Blocks', meta: 'Drawer-integrated', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Worktop Accessories', items: [
          { name: 'Pop-up Sockets', meta: 'Recessed power', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Drainer Inserts', meta: 'Hidden drainage', href: 'PDP - Glydra Soft-Close.html' },
        ]},
      ]
    },
    {
      title: 'Wardrobe Fittings', kicker: '04',
      tagline: 'Interior accessories for closets, dressing rooms, walk-ins.',
      featured: {
        image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80&auto=format&fit=crop',
        kicker: 'CASE STUDY',
        title: 'Interio Walk-In, Pune Heritage',
        sub: 'Seven finishes, modular millimetre-by-millimetre.',
        href: '#'
      },
      children: [
        { title: 'Interior Accessories', items: [
          { name: 'Pull-out Racks', meta: 'Soft-close · 30 kg', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Trouser Racks', meta: '10–24 hangers', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Tie & Belt Racks', meta: 'Side-mount', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Shoe Pull-outs', meta: 'Stack of 3–5 trays', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Hanging & Storage', items: [
          { name: 'Wardrobe Tubes', meta: 'Round · oval · LED', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Lift-down Rods', meta: 'Cantilever 10 kg', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Valet Rods', meta: 'Telescopic, brass', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Drawers & Inserts', items: [
          { name: 'Jewellery Drawers', meta: 'Velvet-lined', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Watch Drawers', meta: 'Auto-rotating winders', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Mesh Baskets', meta: '3 heights', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Mirrors & Lighting', items: [
          { name: 'Pull-out Mirrors', meta: 'Side-mount swivel', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Sensor LED Strips', meta: 'IR proximity', href: 'PDP - Glydra Soft-Close.html' },
        ]},
      ]
    },
    {
      title: 'Furniture Lights', kicker: '05',
      tagline: 'Sensor-driven LED architecture. 2700 – 4000K tuneable.',
      featured: {
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop',
        kicker: 'NEW',
        title: 'Aurora Recessed Profile',
        sub: 'Wired or wireless. Tuneable white. IR sensor.',
        href: 'PDP - Glydra Soft-Close.html'
      },
      children: [
        { title: 'Profiles', items: [
          { name: 'Aurora Recessed', meta: '8 / 12 / 16 mm channels', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Aurora Surface', meta: 'No-routing install', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Aurora Corner', meta: '45° / 90° channels', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Spotlights', items: [
          { name: 'Recessed Pucks', meta: '12V · warm/cool', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Surface Pucks', meta: 'Adhesive-mount', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Sensors & Control', items: [
          { name: 'IR Door Sensor', meta: 'Auto on-off', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Motion Sensor', meta: 'PIR · 3 m range', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Hand-Wave Sensor', meta: 'Touchless toggle', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Drivers & Power', items: [
          { name: 'Constant Voltage', meta: '12V · 24V', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Dimmable Drivers', meta: 'Triac · 1–10V', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Wireless Battery', meta: 'USB rechargeable', href: 'PDP - Glydra Soft-Close.html' },
        ]},
      ]
    },
    {
      title: 'Locks & Security', kicker: '06',
      tagline: 'Cam locks, drawer locks, smart access. One hardware language.',
      featured: {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
        kicker: 'FINISH RANGE',
        title: 'Seven hardware finishes',
        sub: 'From brushed nickel to warm brass — colour-matched.',
        href: '#'
      },
      children: [
        { title: 'Cam Locks', items: [
          { name: 'Standard Cam 16 mm', meta: 'Master-keyed available', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Glass-Door Cam', meta: 'For thin doors', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Drawer Locks', items: [
          { name: 'Single-Drawer Lock', meta: 'Top mount', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Gang Lock', meta: 'Locks all drawers at once', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Push Lock', meta: 'Concealed, no key', href: 'PDP - Glydra Soft-Close.html' },
        ]},
        { title: 'Smart Access', items: [
          { name: 'RFID Cabinet Lock', meta: 'Card / fob entry', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Fingerprint Lock', meta: 'Biometric', href: 'PDP - Glydra Soft-Close.html' },
          { name: 'Bluetooth Lock', meta: 'App-controlled', href: 'PDP - Glydra Soft-Close.html' },
        ]},
      ]
    },
  ];

  // ============ CSS ============
  const css = `
  .mega-backdrop {
    position: fixed; inset: 0;
    background: rgba(9, 18, 40, 0.34);
    backdrop-filter: blur(2px);
    z-index: 80;
    opacity: 0; pointer-events: none;
    transition: opacity 220ms cubic-bezier(0.16,1,0.3,1);
  }
  .mega-backdrop.is-on { opacity: 1; pointer-events: auto; }

  .mega-root {
    position: fixed;
    left: 0; right: 0; top: 0;
    z-index: 90;
    pointer-events: none;
  }
  .mega-panel {
    background: var(--white, #fff);
    border-bottom: 1px solid var(--grey-200, #eee);
    box-shadow: 0 30px 60px -20px rgba(9,40,83,0.18);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 260ms cubic-bezier(0.16,1,0.3,1), opacity 220ms ease-out;
    /* Sit below the 56px nav */
    margin-top: 56px;
  }
  .mega-panel.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .mega-inner {
    width: 100%; max-width: 1440px; margin: 0 auto;
    padding: 28px 48px 36px;
  }
  .mega-head {
    display: flex; justify-content: space-between; align-items: center;
    padding-bottom: 18px;
    margin-bottom: 22px;
    border-bottom: 1px solid var(--grey-200, #eee);
  }
  .mega-head .mh-l {
    display: flex; align-items: center; gap: 14px;
    font-family: var(--font-display, 'Archivo'); font-weight: 600;
    font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--navy, #092853);
  }
  .mega-head .mh-l .ks {
    width: 24px; height: 1px; background: var(--navy, #092853);
  }
  .mega-head .mh-tagline {
    font-family: var(--font-body, 'Manrope'); font-weight: 300;
    font-size: 13px; color: var(--grey-500, #5B5B5B);
    margin-left: 18px; padding-left: 18px;
    border-left: 1px solid var(--grey-200, #eee);
  }
  .mega-close {
    width: 32px; height: 32px; border-radius: 50%;
    border: 1px solid var(--grey-200, #eee);
    display: inline-flex; align-items: center; justify-content: center;
    color: var(--navy, #092853);
    cursor: pointer;
    transition: all 200ms;
    background: transparent;
  }
  .mega-close:hover { background: var(--navy, #092853); color: var(--white, #fff); border-color: var(--navy, #092853); }

  .mega-cols {
    display: grid;
    grid-template-columns: 200px 220px 260px 1fr;
    gap: 0;
  }
  .mega-col {
    padding: 4px 24px 4px 0;
    border-right: 1px solid var(--grey-200, #eee);
    min-height: 380px;
  }
  .mega-col:last-child {
    border-right: none;
    padding: 0 0 0 28px;
  }
  .mega-col + .mega-col { padding-left: 24px; }

  .mega-col h6 {
    font-family: var(--font-display, 'Archivo'); font-weight: 600;
    font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--grey-500, #5B5B5B);
    margin-bottom: 14px;
  }

  .mega-list {
    list-style: none; padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 2px;
  }
  .mega-row {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 10px 9px 4px;
    margin: 0 -4px;
    border-radius: 4px;
    color: var(--navy, #092853);
    cursor: pointer;
    transition: all 160ms;
    text-decoration: none;
  }
  .mega-row:hover { background: var(--tint-1, #F9FAFC); }
  .mega-row.is-active {
    color: var(--orange, #E87B1E);
  }
  .mega-row.is-active .mega-row-arr {
    transform: translateX(3px);
    opacity: 1; color: var(--orange, #E87B1E);
  }
  .mega-row .mega-row-num {
    font-family: var(--font-display); font-weight: 500;
    font-size: 10px; letter-spacing: 0.06em; color: var(--grey-500, #5B5B5B);
    font-variant-numeric: tabular-nums;
    flex-shrink: 0;
    width: 18px;
  }
  .mega-row.is-active .mega-row-num { color: var(--orange, #E87B1E); }
  .mega-row .mega-row-text {
    flex: 1;
    font-family: var(--font-display, 'Archivo'); font-weight: 500;
    font-size: 14px; letter-spacing: -0.005em;
    line-height: 1.3;
  }
  .mega-row .mega-row-meta {
    display: block;
    font-family: var(--font-body, 'Manrope'); font-weight: 300;
    font-size: 11px; color: var(--grey-500, #5B5B5B);
    margin-top: 2px; letter-spacing: 0;
  }
  .mega-row .mega-row-arr {
    color: var(--grey-500, #5B5B5B);
    opacity: 0;
    transition: all 200ms;
    flex-shrink: 0;
  }
  .mega-row:hover .mega-row-arr,
  .mega-row.is-more .mega-row-arr { opacity: 1; }
  .mega-row.is-more {
    color: var(--orange, #E87B1E);
    border-top: 1px dashed var(--grey-200, #eee);
    margin-top: 12px; padding-top: 14px;
  }
  .mega-row.is-more .mega-row-text { font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; font-weight: 600; }
  .mega-row.is-more .mega-row-arr { color: var(--orange, #E87B1E); }

  /* Featured */
  .mega-feat {
    display: flex; flex-direction: column;
    color: var(--navy, #092853);
    text-decoration: none;
  }
  .mega-feat-img {
    width: 100%; aspect-ratio: 5 / 3;
    background-size: cover; background-position: center;
    background-color: var(--tint-1, #F9FAFC);
    border-radius: 4px;
    margin-bottom: 18px;
    overflow: hidden;
    position: relative;
    transition: transform 400ms;
  }
  .mega-feat-img::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(9,40,83,0.18) 100%);
  }
  .mega-feat:hover .mega-feat-img { transform: translateY(-2px); }
  .mega-feat .fk {
    font-family: var(--font-display, 'Archivo'); font-weight: 600;
    font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--orange, #E87B1E);
    margin-bottom: 10px;
  }
  .mega-feat .ft {
    font-family: var(--font-display, 'Archivo'); font-weight: 700;
    font-size: 22px; line-height: 1.15; letter-spacing: -0.01em;
    color: var(--navy, #092853);
    margin-bottom: 8px;
    max-width: 24ch;
  }
  .mega-feat .fs {
    font-family: var(--font-body, 'Manrope'); font-weight: 300;
    font-size: 13px; line-height: 1.55; color: var(--grey-500, #5B5B5B);
    max-width: 36ch;
    margin-bottom: 18px;
  }
  .mega-feat .fl {
    font-family: var(--font-display, 'Archivo'); font-weight: 500;
    font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--orange, #E87B1E);
    display: inline-flex; align-items: center; gap: 8px;
  }
  .mega-feat .fl .arr { transition: transform 200ms; }
  .mega-feat:hover .fl .arr { transform: translateX(4px); }

  /* Bottom utility row */
  .mega-foot {
    border-top: 1px solid var(--grey-200, #eee);
    margin-top: 26px;
    padding-top: 18px;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
  }
  .mega-foot .util-links {
    display: flex; gap: 24px;
  }
  .mega-foot .util-links a {
    font-family: var(--font-display); font-weight: 500;
    font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--grey-500, #5B5B5B);
    display: inline-flex; align-items: center; gap: 6px;
    transition: color 180ms;
  }
  .mega-foot .util-links a:hover { color: var(--orange, #E87B1E); }
  .mega-foot .util-links svg { color: var(--orange, #E87B1E); }
  .mega-foot .find {
    font-family: var(--font-display); font-weight: 500;
    font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--navy, #092853);
    display: inline-flex; align-items: center; gap: 8px;
  }
  .mega-foot .find:hover { color: var(--orange, #E87B1E); }

  /* Mobile: collapse to single column drill-down */
  @media (max-width: 900px) {
    .mega-inner { padding: 20px 22px 28px; }
    .mega-head .mh-tagline { display: none; }
    .mega-cols {
      grid-template-columns: 1fr;
    }
    .mega-col {
      border-right: none;
      border-bottom: 1px solid var(--grey-200, #eee);
      padding: 12px 0;
      min-height: 0;
    }
    .mega-col + .mega-col { padding-left: 0; }
    .mega-col:last-child { padding-left: 0; }
    .mega-feat-img { aspect-ratio: 16/9; }
  }

  /* Solutions nav link — add a tiny caret to signal it opens a panel */
  .nav-items a[data-mega]::after {
    content: '';
    display: inline-block;
    width: 5px; height: 5px;
    margin-left: 6px;
    border-right: 1.4px solid currentColor;
    border-bottom: 1.4px solid currentColor;
    transform: translateY(-2px) rotate(45deg);
    opacity: 0.5;
    transition: transform 220ms, opacity 220ms;
  }
  .nav-items a[data-mega].is-on::after {
    transform: translateY(0) rotate(-135deg);
    opacity: 1; color: var(--orange);
  }
  `;

  // Inject CSS
  const styleEl = document.createElement('style');
  styleEl.id = 'mega-menu-css';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ============ DOM ============
  const backdrop = document.createElement('div');
  backdrop.className = 'mega-backdrop';
  document.body.appendChild(backdrop);

  const root = document.createElement('div');
  root.className = 'mega-root';
  root.innerHTML = `
    <div class="mega-panel" role="dialog" aria-modal="true" aria-label="Solutions">
      <div class="mega-inner">
        <div class="mega-head">
          <div class="mh-l">
            <span class="ks"></span>
            <span>Solutions</span>
            <span class="mh-tagline" id="mega-tagline">Explore precision-engineered fittings</span>
          </div>
          <button class="mega-close" aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
              <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div class="mega-cols">
          <!-- Col 1: top categories -->
          <nav class="mega-col" aria-label="Categories">
            <h6>Categories</h6>
            <ul class="mega-list" id="mega-col-1"></ul>
          </nav>

          <!-- Col 2: subcategories -->
          <div class="mega-col">
            <h6 id="mega-col-2-head">Sub-categories</h6>
            <ul class="mega-list" id="mega-col-2"></ul>
          </div>

          <!-- Col 3: items -->
          <div class="mega-col">
            <h6 id="mega-col-3-head">Products</h6>
            <ul class="mega-list" id="mega-col-3"></ul>
          </div>

          <!-- Col 4: featured -->
          <a class="mega-col mega-feat" id="mega-feat" href="#">
            <div class="mega-feat-img" id="mega-feat-img"></div>
            <div class="fk" id="mega-feat-kicker">IN FOCUS</div>
            <div class="ft" id="mega-feat-title"></div>
            <div class="fs" id="mega-feat-sub"></div>
            <span class="fl">Read more <span class="arr">→</span></span>
          </a>
        </div>

        <div class="mega-foot">
          <div class="util-links">
            <a href="#">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke-linejoin="round"/><path d="M14 3v6h6"/></svg>
              Download 2026 catalogue
            </a>
            <a href="#">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M3 9h6"/></svg>
              BIM &amp; CAD library
            </a>
            <a href="Find a Centre.html">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="11" r="3"/><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/></svg>
              Find a Discovery Centre
            </a>
          </div>
          <a class="find" href="#">Talk to a specialist <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14M14 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const panel = root.querySelector('.mega-panel');
  const col1 = root.querySelector('#mega-col-1');
  const col2 = root.querySelector('#mega-col-2');
  const col3 = root.querySelector('#mega-col-3');
  const col2Head = root.querySelector('#mega-col-2-head');
  const col3Head = root.querySelector('#mega-col-3-head');
  const tagline = root.querySelector('#mega-tagline');
  const feat = root.querySelector('#mega-feat');
  const featImg = root.querySelector('#mega-feat-img');
  const featKicker = root.querySelector('#mega-feat-kicker');
  const featTitle = root.querySelector('#mega-feat-title');
  const featSub = root.querySelector('#mega-feat-sub');

  // ============ State ============
  let activeCatIdx = 0;
  let activeSubIdx = 0;

  // ============ Render ============
  function renderCol1() {
    col1.innerHTML = MEGA.map((cat, i) => `
      <li>
        <a href="PLP - Power User.html" class="mega-row ${i === activeCatIdx ? 'is-active' : ''}" data-cat="${i}">
          <span class="mega-row-num">${cat.kicker}</span>
          <span class="mega-row-text">${cat.title}</span>
          <span class="mega-row-arr">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </li>
    `).join('');
    col1.querySelectorAll('.mega-row').forEach(r => {
      r.addEventListener('mouseenter', () => {
        activeCatIdx = +r.dataset.cat;
        activeSubIdx = 0;
        renderCol1(); renderCol2(); renderCol3(); renderFeat();
      });
    });
  }
  function renderCol2() {
    const cat = MEGA[activeCatIdx];
    col2Head.textContent = cat.title;
    col2.innerHTML = cat.children.map((sub, i) => `
      <li>
        <a href="PLP - Power User.html" class="mega-row ${i === activeSubIdx ? 'is-active' : ''}" data-sub="${i}">
          <span class="mega-row-text">${sub.title}</span>
          <span class="mega-row-arr">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </li>
    `).join('');
    col2.querySelectorAll('.mega-row').forEach(r => {
      r.addEventListener('mouseenter', () => {
        activeSubIdx = +r.dataset.sub;
        renderCol2(); renderCol3();
      });
    });
  }
  function pdpUrl(item, cat, sub) {
    // Pass product context to PDP so it can self-update kicker/name/meta/breadcrumb
    const base = item.href && item.href !== '#' ? item.href : 'PDP - Glydra Soft-Close.html';
    if (!base.startsWith('PDP')) return base;
    // Build a synthetic SKU for the dummy data
    const sysCode = (sub.title || '').slice(0, 3).toUpperCase();
    const cleanName = (item.name || '').replace(/[^a-z0-9]+/gi, '-').toUpperCase();
    const sku = `EBC-${sysCode}-${cleanName}`.slice(0, 28);
    const params = new URLSearchParams({
      name: item.name,
      meta: item.meta || '',
      kicker: (sub.title || cat.title || '') + ' SYSTEM',
      cat: cat.title || '',
      sub: sub.title || '',
      sku
    });
    return base + '?' + params.toString();
  }

  function renderCol3() {
    const cat = MEGA[activeCatIdx];
    const sub = cat.children[activeSubIdx];
    col3Head.textContent = sub.title;
    col3.innerHTML = sub.items.map((it) => `
      <li>
        <a href="${pdpUrl(it, cat, sub)}" class="mega-row" data-href="${pdpUrl(it, cat, sub)}">
          <span class="mega-row-text">
            ${it.name}
            ${it.meta ? `<span class="mega-row-meta">${it.meta}</span>` : ''}
          </span>
          <span class="mega-row-arr">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </li>
    `).join('') + `
      <li>
        <a href="PLP - Power User.html" class="mega-row is-more">
          <span class="mega-row-text">View all ${sub.title}</span>
          <span class="mega-row-arr">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 12h14M14 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </a>
      </li>
    `;
  }
  function renderFeat() {
    const cat = MEGA[activeCatIdx];
    tagline.textContent = cat.tagline;
    featImg.style.backgroundImage = `url('${cat.featured.image}')`;
    featKicker.textContent = cat.featured.kicker;
    featTitle.textContent = cat.featured.title;
    featSub.textContent = cat.featured.sub;
    feat.setAttribute('href', cat.featured.href);
  }

  function renderAll() {
    renderCol1(); renderCol2(); renderCol3(); renderFeat();
  }

  // ============ Open / close ============
  let openedFrom = null;
  function open(trigger) {
    renderAll();
    panel.classList.add('is-open');
    backdrop.classList.add('is-on');
    document.body.style.overflow = 'hidden';
    if (trigger) { trigger.classList.add('is-on'); openedFrom = trigger; }
  }
  function close() {
    panel.classList.remove('is-open');
    backdrop.classList.remove('is-on');
    document.body.style.overflow = '';
    if (openedFrom) openedFrom.classList.remove('is-on');
    openedFrom = null;
  }

  root.querySelector('.mega-close').addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) close();
  });

  // Close on outbound navigation
  root.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href') && a.getAttribute('href') !== '#') {
      // Allow link to navigate; just close visually
      setTimeout(close, 80);
    }
  });

  // ============ Hook into nav ============
  function wireNav() {
    document.querySelectorAll('.nav-items a').forEach(a => {
      const t = (a.textContent || '').trim().toLowerCase();
      if (t === 'solutions') {
        a.setAttribute('data-mega', 'solutions');
        a.addEventListener('click', e => {
          e.preventDefault();
          if (panel.classList.contains('is-open')) close();
          else open(a);
        });
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireNav);
  } else {
    wireNav();
  }
})();
