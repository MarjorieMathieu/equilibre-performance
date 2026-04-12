<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Équilibre Performance — 2026 Pilot</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --navy:       #1B365D;
            --navy-dark:  #151c3a;
            --coral:      #E07A5F;
            --coral-light:#f4a68e;
            --silver:     #6B6560;
            --silver-on-dark: #c8c2bc;
            --white:      #ffffff;
            --grid-line:  rgba(21,28,58,0.07);
            --serif: 'Lora', Georgia, serif;
            --sans:  'Jost', sans-serif;
        }

        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }

        body {
            font-family: var(--sans);
            color: var(--navy);
            background-color: #ffffff;
            background-image:
                linear-gradient(var(--grid-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
            background-size: 30px 30px;
            background-attachment: fixed;
            line-height: 1.7;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ─────────────────────────────── */
        nav {
            position: fixed; top:0; left:0; right:0; z-index:200;
            padding: 1.1rem 6%;
            display: flex; justify-content:space-between; align-items:center;
            background: rgba(255,255,255,0.94);
            backdrop-filter: blur(14px);
            border-bottom: 1px solid rgba(27,54,93,0.1);
            transition: box-shadow 0.3s;
        }
        .nav-logo {
            font-family: var(--serif);
            font-style: italic;
            font-size: 1.05rem;
            color: var(--navy);
            letter-spacing: 0.01em;
        }
        .nav-cta {
            background: var(--coral);
            color: #fff;
            padding: 0.6rem 1.4rem;
            border-radius: 4px;
            font-size: 0.82rem;
            font-weight: 600;
            text-decoration: none;
            letter-spacing: 0.02em;
            transition: all 0.3s;
        }
        .nav-cta:hover { background:#c9634a; transform:translateY(-1px); }

        /* ── HERO ────────────────────────────── */
        .hero {
            min-height: 100vh;
            padding: 9rem 6% 5rem;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .hero::before {
            content:'';
            position:absolute; top:0; right:0;
            width:50%; height:100%;
            background: radial-gradient(ellipse 70% 80% at 70% 40%,
                rgba(224,122,95,0.06) 0%, transparent 70%);
            pointer-events:none;
        }
        .hero-ornament {
            position:absolute; right:4%; top:50%;
            transform:translateY(-50%);
            font-family: var(--serif);
            font-size: clamp(200px,24vw,360px);
            font-weight:700; font-style:italic;
            color: rgba(27,54,93,0.03);
            line-height:1; pointer-events:none; user-select:none;
        }
        .hero-inner { max-width:760px; position:relative; z-index:1; }

        .eyebrow {
            display:flex; align-items:center; gap:0.8rem;
            margin-bottom:2rem;
            opacity:0; animation: up 0.9s ease 0.2s forwards;
        }
        .eyebrow-line { width:28px; height:1px; background:var(--coral); }
        .eyebrow-text {
            font-size:0.72rem; font-weight:700;
            text-transform:uppercase; letter-spacing:0.2em; color:var(--coral);
        }

        .hero h1 {
            font-family: var(--serif);
            font-size: clamp(2.6rem,5.5vw,4.8rem);
            font-weight:700; line-height:1.08;
            color: var(--navy);
            margin-bottom:2rem;
            opacity:0; animation: up 1s ease 0.35s forwards;
        }
        .hero h1 em { font-style:italic; color:var(--coral); }
        .hero h1 .aside {
            display:block;
            font-size:0.48em; font-weight:400; font-style:italic;
            color:var(--silver); margin-top:0.5em; line-height:1.5;
        }

        .hero-quote {
            font-family:var(--serif); font-style:italic;
            font-size:1.1rem; color:#4a5e7a;
            border-left:2px solid var(--coral);
            padding-left:1.4rem;
            max-width:540px; margin-bottom:1.5rem; line-height:1.8;
            opacity:0; animation: up 1s ease 0.5s forwards;
        }

        .hero-body {
            font-size:0.97rem; color:#3d4f6b;
            max-width:500px; margin-bottom:2.8rem; line-height:1.75;
            opacity:0; animation: up 1s ease 0.65s forwards;
        }
        .hero-body strong { color:var(--navy); font-weight:600; }

        .hero-actions {
            display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;
            opacity:0; animation: up 1s ease 0.8s forwards;
        }
        .btn-cta {
            display:inline-flex; align-items:center; gap:0.6rem;
            background:var(--coral); color:#fff;
            padding:1rem 2rem; border-radius:4px;
            font-size:0.92rem; font-weight:700;
            text-decoration:none; letter-spacing:0.01em;
            transition:all 0.3s;
        }
        .btn-cta:hover { background:#c9634a; transform:translateY(-2px); box-shadow:0 8px 28px rgba(224,122,95,0.3); }
        .btn-arrow { transition:transform 0.3s; }
        .btn-cta:hover .btn-arrow { transform:translateX(4px); }

        .cta-meta {
            font-size:0.78rem; color:#3d4f6b; line-height:1.5;
        }
        .cta-meta strong { color:var(--navy); font-weight:600; display:block; }

        .spots-row {
            display:flex; align-items:center; gap:0.5rem;
            margin-top:1.8rem;
            opacity:0; animation: up 1s ease 0.95s forwards;
        }
        .spot { width:9px; height:9px; border-radius:50%; }
        .spot.gone { background:rgba(27,54,93,0.12); border:1px solid rgba(27,54,93,0.2); }
        .spot.open  { background:var(--coral); }
        .spots-txt { font-size:0.75rem; color:#3d4f6b; margin-left:0.3rem; }
        .spots-txt strong { color:var(--coral); }

        .scroll-down {
            position:absolute; bottom:2.5rem; left:6%;
            display:flex; align-items:center; gap:0.7rem;
            font-size:0.7rem; text-transform:uppercase; letter-spacing:0.15em; color:#3d4f6b;
            opacity:0; animation: fadein 1s ease 1.4s forwards;
        }
        .scroll-line {
            width:30px; height:1px; background:#3d4f6b;
            animation: pulse 2s ease infinite;
        }
        @keyframes pulse { 0%,100%{width:30px;opacity:.4} 50%{width:50px;opacity:.9} }

        /* ── STATS BAND ──────────────────────── */
        .stats-band {
            background: var(--navy-dark);
            padding: 4rem 6%;
            position:relative; overflow:hidden;
        }
        .stats-band::before {
            content:'';
            position:absolute; inset:0;
            background: radial-gradient(ellipse 60% 80% at 85% 50%, rgba(224,122,95,0.07) 0%, transparent 70%);
        }
        .stats-band-inner {
            max-width:1000px; margin:0 auto;
            display:grid; grid-template-columns:1.2fr 2fr;
            gap:3rem; align-items:center; position:relative;
        }
        .stats-intro h2 {
            font-family:var(--serif);
            font-size:clamp(1.6rem,3vw,2.4rem);
            font-weight:600; font-style:italic;
            color:#fff; line-height:1.3;
        }
        .stats-intro h2 em { font-style:normal; color:var(--coral-light); }
        .stats-intro p {
            font-size:0.88rem; color:rgba(255,255,255,0.6);
            margin-top:0.8rem; line-height:1.7;
        }
        .stats-grid {
            display:grid; grid-template-columns:repeat(3,1fr); gap:1rem;
        }
        .stat-box {
            background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:10px; padding:1.5rem 1.2rem;
            transition:all 0.3s;
        }
        .stat-box:hover { background:rgba(255,255,255,0.07); transform:translateY(-3px); }
        .stat-num {
            font-family:var(--serif);
            font-size:2.3rem; font-weight:700;
            color:var(--coral-light); line-height:1;
            margin-bottom:0.4rem;
        }
        .stat-label { font-size:0.8rem; color:rgba(255,255,255,0.6); line-height:1.5; }
        .stat-src   { font-size:0.65rem; color:rgba(255,255,255,0.25); margin-top:0.4rem; }

        /* ── PROBLEM ─────────────────────────── */
        .problem {
            padding: 6rem 6%;
        }
        .problem-inner { max-width:820px; margin:0 auto; }
        .section-label {
            display:flex; align-items:center; gap:0.7rem;
            margin-bottom:1.8rem;
        }
        .section-label-line { width:28px; height:1px; background:var(--coral); }
        .section-label-text {
            font-size:0.72rem; font-weight:700;
            text-transform:uppercase; letter-spacing:0.2em; color:var(--coral);
        }
        .problem h2 {
            font-family:var(--serif);
            font-size:clamp(1.8rem,3.5vw,3rem);
            font-weight:700; line-height:1.15;
            color:var(--navy); margin-bottom:1.5rem;
        }
        .problem h2 em { font-style:italic; color:var(--coral); }
        .problem-story {
            font-family:var(--serif); font-style:italic;
            font-size:1.1rem; color:#4a5e7a;
            border-left:2px solid var(--silver);
            padding-left:1.4rem;
            margin-bottom:2rem; line-height:1.8;
        }
        .problem-body {
            font-size:0.97rem; color:#3d4f6b;
            line-height:1.75; margin-bottom:1rem;
        }
        .problem-body strong { color:var(--navy); font-weight:600; }
        .problem-traps {
            display:grid; grid-template-columns:1fr 1fr;
            gap:0.8rem; margin-top:2.5rem;
        }
        .trap {
            display:flex; gap:0.8rem; align-items:flex-start;
            padding:1rem 1.2rem;
            background:#fff;
            border:1px solid rgba(27,54,93,0.08);
            border-radius:8px;
        }
        .trap-x { color:rgba(27,54,93,0.2); font-size:1rem; flex-shrink:0; margin-top:2px; }
        .trap-text { font-size:0.84rem; color:#3d4f6b; line-height:1.5; }
        .trap-text strong { color:var(--navy); }

        /* ── METHOD ──────────────────────────── */
        .method {
            background: var(--navy-dark);
            padding: 6rem 6%;
            position:relative; overflow:hidden;
        }
        .method::before {
            content:'';
            position:absolute; inset:0;
            background: radial-gradient(ellipse 50% 60% at 10% 80%, rgba(224,122,95,0.06) 0%, transparent 70%);
        }
        .method-inner { max-width:1000px; margin:0 auto; position:relative; }
        .method-header { text-align:center; margin-bottom:3.5rem; }
        .method-eyebrow {
            font-size:0.72rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.2em; color:var(--coral-light); margin-bottom:1rem;
        }
        .method h2 {
            font-family:var(--serif);
            font-size:clamp(1.8rem,3.5vw,3rem);
            font-weight:700; line-height:1.15; color:#fff;
        }
        .method h2 em { font-style:italic; color:var(--coral-light); }
        .method-sub {
            font-size:0.95rem; color:rgba(255,255,255,0.65);
            margin-top:0.8rem;
        }
        .rituals {
            display:grid; grid-template-columns:repeat(2,1fr); gap:1.2rem;
            margin-bottom:3rem;
        }
        .ritual {
            background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:12px; padding:2rem;
            display:flex; gap:1.2rem; align-items:flex-start;
            transition:all 0.3s;
        }
        .ritual:hover { background:rgba(255,255,255,0.07); border-color:rgba(224,122,95,0.25); transform:translateY(-3px); }
        .ritual-icon {
            width:46px; height:46px; min-width:46px;
            background:rgba(255,255,255,0.06);
            border-radius:10px;
            display:flex; align-items:center; justify-content:center;
            font-size:1.3rem;
        }
        .ritual-tag {
            font-size:0.7rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.08em; color:var(--coral-light); margin-bottom:0.3rem;
        }
        .ritual h4 {
            font-family:var(--serif); font-size:1.2rem; font-weight:700;
            color:#fff; margin-bottom:0.5rem;
        }
        .ritual p { font-size:0.84rem; color:rgba(255,255,255,0.75); line-height:1.6; }

        /* Timeline phases */
        .phases {
            background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:12px; overflow:hidden;
        }
        .phase {
            display:grid; grid-template-columns:80px 1fr;
            border-bottom:1px solid rgba(255,255,255,0.05);
        }
        .phase:last-child { border-bottom:none; }
        .phase-badge {
            background:rgba(27,54,93,0.6);
            color:var(--coral-light);
            display:flex; align-items:center; justify-content:center;
            font-family:var(--serif); font-size:0.88rem; font-weight:700;
            letter-spacing:0.04em; padding:1.2rem 0.5rem; text-align:center;
        }
        .phase:nth-child(1) .phase-badge { background:rgba(224,122,95,0.2); }
        .phase-content { padding:1.2rem 1.6rem; }
        .phase-when {
            font-size:0.7rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.08em; color:var(--coral-light); margin-bottom:0.2rem;
        }
        .phase-name { font-weight:700; font-size:0.95rem; color:#fff; margin-bottom:0.2rem; }
        .phase-desc { font-size:0.82rem; color:rgba(255,255,255,0.65); line-height:1.55; }

        /* ── ROI ─────────────────────────────── */
        .roi { padding:6rem 6%; }
        .roi-inner { max-width:900px; margin:0 auto; }
        .roi-header { margin-bottom:3rem; }
        .roi h2 {
            font-family:var(--serif);
            font-size:clamp(1.8rem,3.5vw,3rem);
            font-weight:700; line-height:1.15; color:var(--navy);
        }
        .roi h2 em { font-style:italic; color:var(--coral); }
        .roi-sub { font-size:0.97rem; color:#3d4f6b; margin-top:0.7rem; }

        .roi-calc {
            background:var(--navy-dark);
            border-radius:12px; padding:2.5rem;
            margin-bottom:1.5rem; position:relative; overflow:hidden;
        }
        .roi-calc::before {
            content:'';
            position:absolute; top:0; right:0;
            width:200px; height:200px;
            background:radial-gradient(circle, rgba(224,122,95,0.08) 0%, transparent 70%);
        }
        .roi-calc-tag {
            font-size:0.7rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.15em; color:rgba(255,255,255,0.55); margin-bottom:1.5rem;
        }
        .roi-equation {
            display:grid; grid-template-columns:1fr auto 1fr auto 1fr;
            gap:0.8rem; align-items:center; margin-bottom:1.5rem;
        }
        .roi-eq-block {
            background:rgba(255,255,255,0.05);
            border:1px solid rgba(255,255,255,0.07);
            border-radius:8px; padding:1.2rem; text-align:center;
        }
        .roi-eq-num {
            font-family:var(--serif); font-size:1.8rem;
            font-weight:700; color:#fff; line-height:1;
        }
        .roi-eq-label { font-size:0.72rem; color:rgba(255,255,255,0.6); margin-top:0.3rem; }
        .roi-eq-op {
            font-size:1.5rem; color:rgba(255,255,255,0.2);
            text-align:center;
        }
        .roi-eq-block.result {
            border-color:rgba(224,122,95,0.3);
            background:rgba(224,122,95,0.1);
        }
        .roi-eq-block.result .roi-eq-num { color:var(--coral-light); font-size:2.1rem; }
        .roi-footnote { font-size:0.68rem; color:rgba(255,255,255,0.45); }

        .roi-extras {
            display:grid; grid-template-columns:repeat(3,1fr); gap:1rem;
        }
        .roi-extra {
            background:#fff;
            border:1px solid rgba(27,54,93,0.08);
            border-radius:10px; padding:1.5rem;
        }
        .roi-extra-num {
            font-family:var(--serif); font-size:2rem;
            font-weight:700; color:var(--navy); line-height:1;
        }
        .roi-extra-text { font-size:0.8rem; color:#3d4f6b; margin-top:0.3rem; line-height:1.5; }
        .roi-extra-src  { font-size:0.65rem; color:#8a9ab5; margin-top:0.4rem; }

        /* ── COMPARE ─────────────────────────── */
        .compare { padding:6rem 6%; background:var(--navy-dark); }
        .compare-inner { max-width:880px; margin:0 auto; }
        .compare-header { text-align:center; margin-bottom:3rem; }
        .compare-eyebrow {
            font-size:0.72rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.2em; color:var(--coral-light); margin-bottom:1rem;
        }
        .compare h2 {
            font-family:var(--serif);
            font-size:clamp(1.8rem,3.5vw,3rem);
            font-weight:700; line-height:1.15; color:#fff;
        }
        .compare h2 em { font-style:italic; color:var(--coral-light); }
        .compare-intro { font-size:0.95rem; color:rgba(255,255,255,0.6); margin-top:0.7rem; }

        .compare-wrap {
            border-radius:12px; overflow:hidden;
            box-shadow:0 8px 40px rgba(0,0,0,0.3);
        }
        table { width:100%; border-collapse:collapse; background:#fff; }
        thead th {
            padding:1rem 1.3rem;
            font-size:0.72rem; font-weight:700;
            text-transform:uppercase; letter-spacing:0.1em;
            text-align:left;
        }
        thead th:first-child  { background:rgba(27,54,93,0.05); color:#4a5570; width:34%; }
        thead th:nth-child(2) { background:rgba(27,54,93,0.08); color:#4a5570; text-align:center; }
        thead th:nth-child(3) { background:var(--navy); color:#fff; text-align:center; position:relative; }
        thead th:nth-child(3)::after {
            content:''; position:absolute; bottom:0; left:0; right:0;
            height:2px; background:var(--coral);
        }
        tbody tr { border-bottom:1px solid rgba(27,54,93,0.06); transition:background 0.2s; }
        tbody tr:last-child { border-bottom:none; }
        tbody tr:hover { background:rgba(27,54,93,0.02); }
        td { padding:1rem 1.3rem; font-size:0.87rem; vertical-align:middle; }
        td:first-child { font-weight:600; color:var(--navy); background:rgba(27,54,93,0.02); }
        td:nth-child(2){ color:#4a5570; text-align:center; }
        td:nth-child(3){ font-weight:600; color:var(--navy); text-align:center; background:rgba(27,54,93,0.02); }

        .badge {
            display:inline-flex; align-items:center; gap:0.3rem;
            padding:0.28rem 0.75rem; border-radius:100px;
            font-size:0.77rem; font-weight:600;
        }
        .badge-no  { background:rgba(0,0,0,0.04); color:#bbb; }
        .badge-no::before { content:'—'; }
        .badge-yes { background:rgba(224,122,95,0.12); color:var(--coral); border:1px solid rgba(224,122,95,0.25); }
        .badge-yes::before { content:'✓'; font-weight:700; }

        /* ── PRICING ─────────────────────────── */
        .pricing { padding:6rem 6%; }
        .pricing-inner { max-width:680px; margin:0 auto; text-align:center; }
        .pricing-eyebrow {
            font-size:0.72rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.2em; color:var(--coral); margin-bottom:1rem;
        }
        .pricing h2 {
            font-family:var(--serif);
            font-size:clamp(1.8rem,3.5vw,3rem);
            font-weight:700; color:var(--navy); margin-bottom:0.7rem;
        }
        .pricing h2 em { font-style:italic; color:var(--coral); }
        .pricing-sub { font-size:0.95rem; color:#3d4f6b; margin-bottom:2.5rem; }

        .pricing-card {
            background:#fff;
            border:1px solid rgba(27,54,93,0.1);
            border-radius:16px; padding:3rem 2.5rem;
            box-shadow:0 20px 60px rgba(27,54,93,0.08);
            position:relative; overflow:hidden;
        }
        .pricing-card::before {
            content:''; position:absolute; top:0; left:0; right:0;
            height:3px; background:linear-gradient(90deg, var(--coral), var(--coral-light));
        }
        .pricing-badge {
            display:inline-block;
            background:rgba(224,122,95,0.1);
            border:1px solid rgba(224,122,95,0.25);
            color:var(--coral); font-size:0.72rem; font-weight:700;
            text-transform:uppercase; letter-spacing:0.1em;
            padding:0.3rem 0.9rem; border-radius:4px; margin-bottom:1.5rem;
        }
        .price {
            font-family:var(--serif); font-size:5.5rem;
            font-weight:700; line-height:1; color:var(--navy);
        }
        .price sup { font-size:0.35em; vertical-align:super; opacity:0.5; font-weight:400; }
        .price-detail { font-size:0.8rem; color:#3d4f6b; margin-top:0.3rem; margin-bottom:2rem; }
        .price-items {
            display:grid; grid-template-columns:1fr 1fr;
            gap:0.5rem 1.5rem; text-align:left; margin-bottom:2rem;
        }
        .price-item {
            display:flex; gap:0.5rem; align-items:flex-start;
            font-size:0.84rem; color:#4a5e7a; padding:0.25rem 0;
        }
        .price-check { color:var(--coral); font-weight:700; flex-shrink:0; }

        .btn-book {
            display:block;
            background:var(--coral); color:#fff;
            padding:1.1rem 2rem; border-radius:6px;
            text-decoration:none; font-size:0.97rem; font-weight:700;
            letter-spacing:0.02em; transition:all 0.3s;
            margin-bottom:0.8rem;
        }
        .btn-book:hover { background:#c9634a; transform:translateY(-2px); box-shadow:0 10px 30px rgba(224,122,95,0.35); }
        .book-note { font-size:0.75rem; color:#3d4f6b; }

        .guarantee {
            margin-top:1.8rem;
            padding:1.4rem 1.6rem;
            background:rgba(27,54,93,0.03);
            border:1px solid rgba(27,54,93,0.08);
            border-radius:8px;
            display:flex; gap:0.9rem; text-align:left;
        }
        .guarantee-icon { font-size:1.4rem; flex-shrink:0; }
        .guarantee-title { font-weight:700; font-size:0.9rem; color:var(--navy); margin-bottom:0.2rem; }
        .guarantee-text  { font-size:0.8rem; color:#3d4f6b; line-height:1.6; }

        /* ── ABOUT ───────────────────────────── */
        .about { padding:6rem 6%; background:var(--navy-dark); }
        .about-inner {
            max-width:860px; margin:0 auto;
            display:grid; grid-template-columns:auto 1fr;
            gap:3.5rem; align-items:center;
        }
        .about-avatar {
            width:150px; height:150px; min-width:150px;
            border-radius:50%;
            background:rgba(255,255,255,0.05);
            border:2px solid rgba(184,176,164,0.3);
            display:flex; align-items:center; justify-content:center;
            font-family:var(--serif); font-style:italic;
            font-size:3rem; font-weight:300; color:var(--silver);
        }
        .about-eyebrow {
            font-size:0.72rem; font-weight:700; text-transform:uppercase;
            letter-spacing:0.2em; color:var(--coral-light); margin-bottom:1rem;
        }
        .about h3 {
            font-family:var(--serif);
            font-size:clamp(1.6rem,3vw,2.4rem);
            font-weight:700; line-height:1.2; color:#fff; margin-bottom:1rem;
        }
        .about h3 em { font-style:italic; color:var(--coral-light); }
        .about p { font-size:0.92rem; color:rgba(255,255,255,0.75); line-height:1.75; margin-bottom:0.8rem; }
        .about-tags {
            display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1.2rem;
        }
        .about-tag {
            background:rgba(255,255,255,0.05);
            border:1px solid rgba(255,255,255,0.1);
            padding:0.3rem 0.8rem; border-radius:4px;
            font-size:0.75rem; color:rgba(255,255,255,0.65);
        }
        .about-link {
            display:inline-flex; align-items:center; gap:0.4rem;
            color:var(--coral-light); font-size:0.85rem; font-weight:600;
            text-decoration:none; border-bottom:1px solid rgba(244,166,142,0.3);
            padding-bottom:2px; margin-top:1rem;
            transition:all 0.3s;
        }
        .about-link:hover { border-color:var(--coral-light); }

        /* ── FINALE ──────────────────────────── */
        .finale {
            padding:7rem 6%;
            text-align:center;
            position:relative; overflow:hidden;
        }
        .finale::before {
            content:'';
            position:absolute; inset:0;
            background:radial-gradient(ellipse 50% 60% at 50% 50%, rgba(224,122,95,0.05) 0%, transparent 70%);
        }
        .finale-inner { max-width:660px; margin:0 auto; position:relative; }
        .finale-ornament {
            font-family:var(--serif); font-size:7rem; line-height:0.6;
            color:rgba(224,122,95,0.12); display:block; margin-bottom:1.5rem;
        }
        .finale h2 {
            font-family:var(--serif);
            font-size:clamp(1.8rem,4vw,3.2rem);
            font-weight:700; font-style:italic;
            color:var(--navy); line-height:1.2; margin-bottom:1.2rem;
        }
        .finale h2 em { font-style:normal; color:var(--coral); }
        .finale-sub {
            font-size:1rem; color:#3d4f6b;
            margin-bottom:2.5rem; line-height:1.8;
        }
        .finale-sep { width:40px; height:1px; background:rgba(27,54,93,0.15); margin:2rem auto; }
        .finale-spots {
            display:flex; justify-content:center; gap:0.5rem; margin-bottom:0.6rem;
        }
        .f-spot { width:10px; height:10px; border-radius:50%; }
        .f-spot.gone { background:rgba(27,54,93,0.12); border:1px solid rgba(27,54,93,0.2); }
        .f-spot.open { background:var(--coral); }
        .finale-spots-txt { font-size:0.75rem; color:#3d4f6b; margin-bottom:2rem; }
        .finale-spots-txt strong { color:var(--coral); }
        .btn-finale {
            display:block; max-width:360px; margin:0 auto 1rem;
            background:var(--coral); color:#fff;
            padding:1.15rem 2rem; border-radius:6px;
            text-decoration:none; font-size:0.97rem; font-weight:700;
            text-align:center; transition:all 0.3s;
        }
        .btn-finale:hover { background:#c9634a; transform:translateY(-2px); box-shadow:0 10px 32px rgba(224,122,95,0.3); }
        .finale-note { font-size:0.75rem; color:#3d4f6b; }

        /* ── FOOTER ──────────────────────────── */
        footer {
            background:var(--navy-dark);
            padding:2rem 6%;
            display:flex; justify-content:space-between; align-items:center;
            flex-wrap:wrap; gap:1rem;
            border-top:1px solid rgba(255,255,255,0.05);
        }
        .footer-brand {
            font-family:var(--serif); font-style:italic;
            font-size:0.88rem; color:rgba(255,255,255,0.35);
        }
        .footer-contact { font-size:0.75rem; color:rgba(255,255,255,0.25); }
        .footer-contact a { color:rgba(255,255,255,0.4); text-decoration:none; }

        /* ── ANIMATIONS ──────────────────────── */
        @keyframes up   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadein { from{opacity:0} to{opacity:1} }
        .reveal { opacity:0; transform:translateY(24px); transition:opacity .8s ease, transform .8s ease; }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .d1 { transition-delay:.1s; }
        .d2 { transition-delay:.2s; }
        .d3 { transition-delay:.3s; }

        /* ── RESPONSIVE ──────────────────────── */
        @media (max-width:900px) {
            .stats-band-inner { grid-template-columns:1fr; gap:2rem; }
            .stats-grid { grid-template-columns:1fr 1fr; }
            .rituals { grid-template-columns:1fr; }
            .problem-traps { grid-template-columns:1fr; }
            .roi-equation { grid-template-columns:1fr; }
            .roi-eq-op { display:none; }
            .roi-extras { grid-template-columns:1fr; }
            .about-inner { grid-template-columns:1fr; text-align:center; }
            .about-tags { justify-content:center; }
            .about-avatar { margin:0 auto; }
        }
        @media (max-width:680px) {
            .hero h1 { font-size:2.2rem; }
            .hero-ornament { display:none; }
            .price-items { grid-template-columns:1fr; }
            thead th:nth-child(2), td:nth-child(2) { display:none; }
            footer { flex-direction:column; text-align:center; }
            .roi-extras { grid-template-columns:1fr 1fr; }
        }
        @media (max-width:420px) {
            .stats-grid { grid-template-columns:1fr; }
            .roi-extras { grid-template-columns:1fr; }
        }
    </style>
</head>
<body>

<!-- ═══ NAV ═══════════════════════════════════════ -->
<nav id="nav">
    <div class="nav-logo">Équilibre Performance</div>
    <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="nav-cta">Free diagnostic →</a>
</nav>

<!-- ═══ HERO ══════════════════════════════════════ -->
<section class="hero">
    <div class="hero-ornament">EP</div>
    <div class="hero-inner">

        <div class="eyebrow">
            <div class="eyebrow-line"></div>
            <div class="eyebrow-text">For HR Directors · Prevention Officers · CEOs</div>
        </div>

        <h1>
            You've tried everything.<br>
            <em>They still leave.</em>
            <span class="aside">Because culture isn't built at an annual away-day — it's practised, every morning, inside real work.</span>
        </h1>

        <p class="hero-quote">
            "We redesigned the offices, introduced remote working, launched an internal newsletter. Nothing changed at a deeper level. People stayed polite. And they left anyway."
        </p>

        <p class="hero-body">
            What you're experiencing has a name: <strong>cosmetic culture</strong>. Visible gestures that never enter daily workflows. In 3 weeks, I embed 4 operational rituals into your organisation — and I train 2 internal ambassadors to keep them alive <strong>6 months after I leave.</strong>
        </p>

        <div class="hero-actions">
            <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-cta">
                Book my free diagnostic
                <span class="btn-arrow">→</span>
            </a>
            <div class="cta-meta">
                <strong>15 minutes · Zero commitment</strong>
                I'll tell you whether your organisation fits the profile — or not.
            </div>
        </div>

        <div class="spots-row">
            <div class="spot gone"></div>
            <div class="spot open"></div>
            <div class="spot open"></div>
            <span class="spots-txt">2026 Pilot — <strong>2 places remaining</strong> out of 3</span>
        </div>
    </div>

    <div class="scroll-down">
        <div class="scroll-line"></div>
        See the numbers
    </div>
</section>

<!-- ═══ STATS ═════════════════════════════════════ -->
<section class="stats-band">
    <div class="stats-band-inner">
        <div class="stats-intro reveal">
            <h2>What disengagement costs <em>on your balance sheet.</em></h2>
            <p>These figures apply to ordinary Belgian companies. Possibly yours.</p>
        </div>
        <div class="stats-grid">
            <div class="stat-box reveal d1">
                <div class="stat-num">€80,000</div>
                <div class="stat-label">Annual cost of absenteeism for 50 employees</div>
                <div class="stat-src">SD Worx 2024–2025</div>
            </div>
            <div class="stat-box reveal d2">
                <div class="stat-num">+44%</div>
                <div class="stat-label">Rise in long-term sick leave over 5 years in Belgium</div>
                <div class="stat-src">VRT News / INAMI 2025</div>
            </div>
            <div class="stat-box reveal d3">
                <div class="stat-num">×3</div>
                <div class="stat-label">Better retention in companies with a strong culture</div>
                <div class="stat-src">Securex / Graydon 2024</div>
            </div>
        </div>
    </div>
</section>

<!-- ═══ PROBLEM ═══════════════════════════════════ -->
<section class="problem">
    <div class="problem-inner">
        <div class="section-label reveal">
            <div class="section-label-line"></div>
            <div class="section-label-text">What doesn't work</div>
        </div>
        <h2 class="reveal d1">
            You install a foosball table<br>and wonder why people <em>keep resigning.</em>
        </h2>
        <p class="problem-story reveal d1">
            "Brilliant team-building day in September. Two months later, the atmosphere was exactly the same. We spent €4,000 on a memory."
        </p>
        <p class="problem-body reveal d2">
            Classic approaches share one thing in common: they happen <strong>outside real work.</strong> A seminar day doesn't change a habit. A wellbeing talk anchors nothing in existing workflows. And when the consultant leaves, it all evaporates within 6 weeks.
        </p>
        <p class="problem-body reveal d2">
            Culture is built in the micro-moments of daily life — Monday morning, the 9am meeting, the 3pm break. Not in a seminar room.
        </p>
        <div class="problem-traps reveal d3">
            <div class="trap">
                <div class="trap-x">✗</div>
                <div class="trap-text"><strong>One-off team-building events</strong> — good vibes for 48 hours, zero structural change</div>
            </div>
            <div class="trap">
                <div class="trap-x">✗</div>
                <div class="trap-text"><strong>Standalone wellbeing seminars</strong> — the consultant leaves, the culture stays the same</div>
            </div>
            <div class="trap">
                <div class="trap-x">✗</div>
                <div class="trap-text"><strong>Perks and benefits</strong> — smoothie fridges, gym rooms: cosmetic at best</div>
            </div>
            <div class="trap">
                <div class="trap-x">✗</div>
                <div class="trap-text"><strong>One-off training sessions</strong> — no anchoring in existing tools and workflows</div>
            </div>
        </div>
    </div>
</section>

<!-- ═══ METHOD ════════════════════════════════════ -->
<section class="method">
    <div class="method-inner">
        <div class="method-header reveal">
            <div class="method-eyebrow">The Équilibre Performance method</div>
            <h2>4 rituals. <em>Inside your workflows.</em><br>Not alongside them.</h2>
            <p class="method-sub">Embedded in your calendars, your tools, your existing organisation. Zero disruption, immediate impact.</p>
        </div>

        <div class="rituals">
            <div class="ritual reveal">
                <div class="ritual-icon">🏋️</div>
                <div>
                    <div class="ritual-tag">10 min · Every morning</div>
                    <h4>Radio Taiso</h4>
                    <p>Practised at Toyota for 70 years. 27 million Japanese people do it daily. No Belgian company uses it yet — which is precisely why it creates immediate, memorable cohesion from Day 1.</p>
                </div>
            </div>
            <div class="ritual reveal d1">
                <div class="ritual-icon">⏸️</div>
                <div>
                    <div class="ritual-tag">5–10 min · 2× per day</div>
                    <h4>Smart breaks (90-min cycles)</h4>
                    <p>The brain operates on ultradian cycles of 90 minutes. Ignoring these cycles costs productivity. Respecting them with guided stretching and breathing: +15–20% measured concentration.</p>
                </div>
            </div>
            <div class="ritual reveal d2">
                <div class="ritual-icon">📅</div>
                <div>
                    <div class="ritual-tag">4h training · Built into your tools</div>
                    <h4>Time Blocking</h4>
                    <p>Hands-on training with direct integration into your Outlook, Teams or Google calendars. Target outcome: 2 to 3 hours of deep work recovered per employee, per day.</p>
                </div>
            </div>
            <div class="ritual reveal d3">
                <div class="ritual-icon">🤝</div>
                <div>
                    <div class="ritual-tag">6 months · Follow-up included</div>
                    <h4>Internal ambassadors</h4>
                    <p>I train 2 internal champions within your team. They run the rituals after I leave. No consultant dependency, no relapse. The culture becomes self-sustaining — that's the whole point.</p>
                </div>
            </div>
        </div>

        <div class="phases reveal">
            <div class="phase">
                <div class="phase-badge">Phase 0</div>
                <div class="phase-content">
                    <div class="phase-when">1 week before start</div>
                    <div class="phase-name">Diagnostic & co-design</div>
                    <div class="phase-desc">Audit of current culture, identification of ambassadors, consultation with HR / Leadership / Prevention Officer. Baseline measurement (engagement, absenteeism, productivity).</div>
                </div>
            </div>
            <div class="phase">
                <div class="phase-badge">W1–3</div>
                <div class="phase-content">
                    <div class="phase-when">3 intensive weeks · 1h/day</div>
                    <div class="phase-name">Implementing the 4 rituals</div>
                    <div class="phase-desc">Daily on-site facilitation. Progressive rollout of rituals into workflows. Before/after engagement measurement. Real-time adjustments based on ground-level feedback.</div>
                </div>
            </div>
            <div class="phase">
                <div class="phase-badge">M1–6</div>
                <div class="phase-content">
                    <div class="phase-when">6 months · Monthly check-ins</div>
                    <div class="phase-name">Consolidation via ambassadors</div>
                    <div class="phase-desc">Follow-up at D+30, D+60, D+120, D+180. Ambassadors lead, I support remotely. Full final report with before/after data — yours to showcase internally.</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══ ROI ════════════════════════════════════════ -->
<section class="roi">
    <div class="roi-inner">
        <div class="roi-header reveal">
            <div class="section-label">
                <div class="section-label-line"></div>
                <div class="section-label-text">Financial impact</div>
            </div>
            <h2>€800 invested.<br><em>Concrete ROI in 6 months.</em></h2>
            <p class="roi-sub">Calculation based on a 20% reduction in absenteeism — a realistic 6-month target, not a promise.</p>
        </div>

        <div class="roi-calc reveal d1">
            <div class="roi-calc-tag">For a company of 50 employees · Source SD Worx 2024</div>
            <div class="roi-equation">
                <div class="roi-eq-block">
                    <div class="roi-eq-num">€80,000</div>
                    <div class="roi-eq-label">Current annual absenteeism cost</div>
                </div>
                <div class="roi-eq-op">×</div>
                <div class="roi-eq-block">
                    <div class="roi-eq-num">−20%</div>
                    <div class="roi-eq-label">Reduction target</div>
                </div>
                <div class="roi-eq-op">=</div>
                <div class="roi-eq-block result">
                    <div class="roi-eq-num">€16,000</div>
                    <div class="roi-eq-label">Potential savings per year</div>
                </div>
            </div>
            <div class="roi-footnote">Pilot investment: €800 excl. VAT — a potential return of ×20. These are transparent targets, not contractual guarantees.</div>
        </div>

        <div class="roi-extras reveal d2">
            <div class="roi-extra">
                <div class="roi-extra-num">+39%</div>
                <div class="roi-extra-text">Productivity gain in engaged teams vs disengaged ones</div>
                <div class="roi-extra-src">Securex / Graydon 2024</div>
            </div>
            <div class="roi-extra">
                <div class="roi-extra-num">+2–3h</div>
                <div class="roi-extra-text">Of productive work recovered per day through time blocking</div>
                <div class="roi-extra-src">Goldman Sachs / Yale</div>
            </div>
            <div class="roi-extra">
                <div class="roi-extra-num">+15%</div>
                <div class="roi-extra-text">Measured concentration improvement with smart 90-min breaks</div>
                <div class="roi-extra-src">INRS / Applied Psychology</div>
            </div>
        </div>
    </div>
</section>

<!-- ═══ COMPARE ═══════════════════════════════════ -->
<section class="compare">
    <div class="compare-inner">
        <div class="compare-header reveal">
            <div class="compare-eyebrow">The difference</div>
            <h2>What others do.<br><em>What I do.</em></h2>
            <p class="compare-intro">Not to criticise — but to be honest about why some approaches don't hold over time.</p>
        </div>
        <div class="compare-wrap reveal d1">
            <table>
                <thead>
                    <tr>
                        <th>Criterion</th>
                        <th>Classic approaches</th>
                        <th>Équilibre Performance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Real duration</td>
                        <td><span class="badge badge-no">1 to 2 days</span></td>
                        <td><span class="badge badge-yes">3 weeks + 6 months follow-up</span></td>
                    </tr>
                    <tr>
                        <td>Anchoring after departure</td>
                        <td><span class="badge badge-no">None</span></td>
                        <td><span class="badge badge-yes">2 trained ambassadors</span></td>
                    </tr>
                    <tr>
                        <td>Workflow integration</td>
                        <td><span class="badge badge-no">Outside of work</span></td>
                        <td><span class="badge badge-yes">Inside real daily work</span></td>
                    </tr>
                    <tr>
                        <td>Before / after measurement</td>
                        <td><span class="badge badge-no">Rarely</span></td>
                        <td><span class="badge badge-yes">Data D1 → D180</span></td>
                    </tr>
                    <tr>
                        <td>Financial risk</td>
                        <td><span class="badge badge-no">Budget committed, no safety net</span></td>
                        <td><span class="badge badge-yes">Exit Day 3, 50% refunded</span></td>
                    </tr>
                    <tr>
                        <td>Long-term effect</td>
                        <td><span class="badge badge-no">Short-lived (6–8 weeks)</span></td>
                        <td><span class="badge badge-yes">Self-sustaining culture</span></td>
                    </tr>
                    <tr>
                        <td>Consultant dependency</td>
                        <td><span class="badge badge-no">Often, to renew the engagement</span></td>
                        <td><span class="badge badge-yes">Zero — you're fully autonomous</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>

<!-- ═══ PRICING ════════════════════════════════════ -->
<section class="pricing">
    <div class="pricing-inner">
        <div class="pricing-eyebrow reveal">2026 Pilot offer</div>
        <h2 class="reveal d1">Everything included.<br><em>Zero risk.</em></h2>
        <p class="pricing-sub reveal d2">3 places only. Reserved for organisations validated during the free diagnostic.</p>

        <div class="pricing-card reveal d2">
            <div class="pricing-badge">Pilot · 3 places · 2026</div>
            <div class="price"><sup>€</sup>800</div>
            <div class="price-detail">Excl. VAT · Per company · All-inclusive · No hidden fees</div>
            <div class="price-items">
                <div class="price-item"><span class="price-check">✓</span> Culture diagnostic (1 week prior)</div>
                <div class="price-item"><span class="price-check">✓</span> 3 weeks on-site · 1h/day</div>
                <div class="price-item"><span class="price-check">✓</span> Training of 2 internal ambassadors</div>
                <div class="price-item"><span class="price-check">✓</span> All tools, templates & materials</div>
                <div class="price-item"><span class="price-check">✓</span> 6 months of monthly check-ins</div>
                <div class="price-item"><span class="price-check">✓</span> Final report with before / after data</div>
            </div>
            <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-book">
                → Apply for the pilot — Free diagnostic
            </a>
            <p class="book-note">15 minutes · Zero commitment · I'll tell you honestly whether it's a fit</p>
            <div class="guarantee">
                <div class="guarantee-icon">🛡️</div>
                <div>
                    <div class="guarantee-title">Day 3 Guarantee — Zero risk</div>
                    <div class="guarantee-text">After 3 days, if the method doesn't suit your organisation: you cancel. 50% refunded immediately. You keep all tools, training materials and resources received. No questions asked.</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══ ABOUT ══════════════════════════════════════ -->
<section class="about">
    <div class="about-inner">
        <div class="about-avatar reveal">MM</div>
        <div class="reveal d1">
            <div class="about-eyebrow">Marjorie Mathieu</div>
            <h3>I don't theorise.<br>I <em>immerse myself.</em></h3>
            <p>15 years in demanding corporate environments — BNP Paribas, Serco Europe, KONE, STIB — taught me one thing: seminars are forgotten, habits stick. That's why I don't give talks. I come to your offices, I train your teams, and I build with you a culture that lasts.</p>
            <p>My approach combines operational rigour with proven collective rituals. Concrete tools integrated into your existing systems — not theory on slides, not wellbeing jargon. Measurable results, with transparent before/after data.</p>
            <div class="about-tags">
                <span class="about-tag">BNP Paribas · Serco · KONE · STIB</span>
                <span class="about-tag">15 years corporate</span>
                <span class="about-tag">10+ years yoga & meditation</span>
                <span class="about-tag">AI trainer — Kitchy Agency</span>
                <span class="about-tag">Smart Coop · Ath, Hainaut</span>
            </div>
            <a href="https://www.linkedin.com/in/equilibreperformance/" target="_blank" class="about-link">
                My full career history on LinkedIn →
            </a>
        </div>
    </div>
</section>

<!-- ═══ FINALE ════════════════════════════════════ -->
<section class="finale">
    <div class="finale-inner">
        <span class="finale-ornament reveal">"</span>
        <h2 class="reveal d1">
            Culture cannot be decreed.<br>It is <em>practised, every morning.</em>
        </h2>
        <p class="finale-sub reveal d2">
            15 minutes to see whether your organisation is ready. I'll tell you honestly what I observe — and whether the pilot makes sense for you. No sales pitch. No commitment.
        </p>
        <div class="finale-sep reveal"></div>
        <div class="finale-spots reveal">
            <div class="f-spot gone"></div>
            <div class="f-spot open"></div>
            <div class="f-spot open"></div>
        </div>
        <p class="finale-spots-txt reveal"><strong>2 places available</strong> out of 3 — 2026 Pilot · €800 excl. VAT</p>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-finale reveal d2">
            → Book my free diagnostic
        </a>
        <p class="finale-note reveal d3">15 minutes · Zero commitment · Complimentary diagnostic</p>
    </div>
</section>

<!-- ═══ FOOTER ════════════════════════════════════ -->
<footer>
    <div class="footer-brand">Marjorie Mathieu — Équilibre Performance</div>
    <div class="footer-contact">
        <a href="mailto:hello@ifsu-equilibre.be">hello@ifsu-equilibre.be</a> · +32 477 09 18 03 · Ath, Hainaut — Belgium
    </div>
</footer>

<script>
    // Scroll reveal
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Nav shadow on scroll
    window.addEventListener('scroll', () => {
        document.getElementById('nav').style.boxShadow =
            window.scrollY > 50 ? '0 4px 20px rgba(27,54,93,0.1)' : 'none';
    });
</script>
</body>
</html>
