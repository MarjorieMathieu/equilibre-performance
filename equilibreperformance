<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marjorie Mathieu</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #005288;
            --dark-grid: #151c3a;
            --coral: #e07a5f;
            --coral-light: #f4a68e;
            --silver: #b8b0a4;
            --silver-light: #d4cfc8;
            --white: #ffffff;
            --text: #2c2c2c;
            --text-mid: #5a5a5a;
            --display: 'Cormorant Garamond', Georgia, serif;
            --body: 'Outfit', sans-serif;
            --ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            font-family: var(--body);
            color: var(--text);
            background-color: var(--white);
            background-image:
                linear-gradient(rgba(21, 28, 58, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(21, 28, 58, 0.07) 1px, transparent 1px);
            background-size: 30px 30px;
            background-attachment: fixed;
            line-height: 1.65;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* ============================
           REVEAL ANIMATIONS
        ============================ */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.12s; }
        .reveal-delay-2 { transition-delay: 0.24s; }
        .reveal-delay-3 { transition-delay: 0.36s; }
        .reveal-delay-4 { transition-delay: 0.48s; }

        /* ============================
           NAVIGATION
        ============================ */
        nav {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 92%;
            max-width: 1100px;
            z-index: 1000;
            padding: 0.7rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 60px;
            border: 1px solid rgba(21, 28, 58, 0.1);
            box-shadow: 0 10px 40px rgba(0,0,0,0.08);
            transition: all 0.4s var(--ease);
        }
        nav.scrolled {
            box-shadow: 0 8px 50px rgba(0,0,0,0.12);
            border-color: rgba(21, 28, 58, 0.15);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            text-decoration: none;
        }
        .logo-img { height: 44px; width: 44px; }
        .logo-text {
            font-family: var(--display);
            font-size: 1.2rem;
            font-weight: 500;
            color: var(--primary);
        }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 1.8rem;
        }
        .nav-link {
            text-decoration: none;
            font-size: 0.82rem;
            font-weight: 500;
            color: var(--text-mid);
            transition: color 0.3s;
            letter-spacing: 0.02em;
        }
        .nav-link:hover { color: var(--primary); }

        .nav-cta {
            background: var(--primary);
            color: var(--white);
            padding: 0.7rem 1.6rem;
            border-radius: 50px;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.3s var(--ease);
            white-space: nowrap;
        }
        .nav-cta:hover {
            transform: scale(1.03);
            box-shadow: 0 6px 20px rgba(0, 82, 136, 0.25);
        }

        /* ============================
           HERO
        ============================ */
        .hero {
            padding-top: 180px;
            padding-bottom: 5rem;
            padding-left: 6%;
            padding-right: 6%;
            display: flex;
            justify-content: center;
        }
        .hero-card {
            background: white;
            padding: 4.5rem 3.5rem;
            border-radius: 40px;
            border: 1px solid rgba(21, 28, 58, 0.1);
            max-width: 1100px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.05);
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
            align-items: center;
        }

        .hero-tag {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(0, 82, 136, 0.06);
            border: 1px solid rgba(0, 82, 136, 0.12);
            padding: 0.4rem 1rem;
            border-radius: 100px;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.12em;
            margin-bottom: 1.8rem;
        }
        .hero-tag .dot {
            width: 6px;
            height: 6px;
            background: var(--coral);
            border-radius: 50%;
            animation: pulse-dot 2s ease infinite;
        }
        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.5); }
        }

        .hero h1 {
            font-family: var(--display);
            font-size: clamp(2.5rem, 5vw, 3.8rem);
            font-weight: 500;
            color: var(--dark-grid);
            line-height: 1.1;
            margin-bottom: 1.5rem;
        }
        .hero h1 strong {
            font-style: italic;
            color: var(--primary);
            font-weight: 600;
        }
        .hero-desc {
            font-size: 1.05rem;
            color: var(--text-mid);
            max-width: 480px;
            margin-bottom: 2.2rem;
            line-height: 1.7;
        }
        .hero-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--primary);
            color: var(--white);
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.92rem;
            transition: all 0.35s var(--ease);
            border: none;
            cursor: pointer;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(0, 82, 136, 0.3);
        }
        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: transparent;
            color: var(--primary);
            padding: 1rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.92rem;
            border: 1.5px solid rgba(0, 82, 136, 0.2);
            transition: all 0.3s var(--ease);
        }
        .btn-secondary:hover {
            border-color: var(--primary);
            background: rgba(0, 82, 136, 0.03);
        }

        /* Hero right — stat cards */
        .hero-visual {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .stat-card {
            background: rgba(0, 82, 136, 0.03);
            border-radius: 20px;
            padding: 1.5rem 1.8rem;
            border: 1px solid rgba(0, 82, 136, 0.07);
            display: flex;
            align-items: center;
            gap: 1.2rem;
            transition: all 0.4s var(--ease);
        }
        .stat-card:hover {
            transform: translateX(6px);
            border-color: rgba(0, 82, 136, 0.15);
            box-shadow: 0 8px 25px rgba(0,0,0,0.04);
        }
        .stat-number {
            font-family: var(--display);
            font-size: 2.4rem;
            font-weight: 600;
            color: var(--primary);
            line-height: 1;
            min-width: 90px;
        }
        .stat-card:nth-child(2) .stat-number { color: var(--coral); }
        .stat-text {
            font-size: 0.85rem;
            color: var(--text-mid);
            line-height: 1.4;
        }
        .stat-source {
            font-size: 0.7rem;
            color: var(--silver);
            margin-top: 0.2rem;
        }

        /* ============================
           SECTION BLOCKS: PRIMARY BG
        ============================ */
        .block-primary {
            background: var(--primary);
            color: var(--white);
            /* No grid lines on colored blocks */
            background-image: none;
        }
        .block-dark {
            background: var(--dark-grid);
            color: var(--white);
            background-image: none;
        }
        .block-white {
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(2px);
        }

        /* ============================
           PROBLEM SECTION (dark-grid bg)
        ============================ */
        .problem {
            padding: 6rem 6%;
            position: relative;
            overflow: hidden;
        }
        .problem::before {
            content: '';
            position: absolute;
            top: -40%;
            right: -15%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(224, 122, 95, 0.1) 0%, transparent 65%);
            pointer-events: none;
        }
        .problem-inner {
            max-width: 950px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 1;
        }
        .problem-label {
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--coral-light);
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        .problem h2 {
            font-family: var(--display);
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }
        .problem h2 em {
            font-style: italic;
            color: var(--coral-light);
        }
        .problem-sub {
            font-size: 1.05rem;
            opacity: 0.65;
            max-width: 620px;
            margin: 0 auto;
        }
        .problem-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-top: 3.5rem;
        }
        .problem-stat {
            padding: 2rem 1.5rem;
            border-radius: 24px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.08);
            transition: all 0.3s var(--ease);
        }
        .problem-stat:hover {
            background: rgba(255,255,255,0.08);
            transform: translateY(-4px);
        }
        .problem-stat-num {
            font-family: var(--display);
            font-size: 2.4rem;
            font-weight: 600;
            color: var(--coral-light);
            margin-bottom: 0.4rem;
        }
        .problem-stat-text {
            font-size: 0.88rem;
            color: rgba(255,255,255,0.7);
            line-height: 1.5;
        }
        .problem-stat-source {
            font-size: 0.68rem;
            color: rgba(255,255,255,0.3);
            margin-top: 0.5rem;
        }

        /* ============================
           SECTION HEADERS (reusable)
        ============================ */
        .section-header {
            text-align: center;
            margin-bottom: 3.5rem;
        }
        .section-label {
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--coral);
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .section-title {
            font-family: var(--display);
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 500;
            color: var(--dark-grid);
            line-height: 1.15;
        }
        .section-title em {
            font-style: italic;
            color: var(--primary);
            font-weight: 600;
        }

        /* ============================
           METHOD
        ============================ */
        .method {
            padding: 6rem 6%;
        }
        .method-inner {
            max-width: 1100px;
            margin: 0 auto;
        }
        .pillar-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
        .pillar {
            background: white;
            border-radius: 30px;
            padding: 2.8rem 2.5rem;
            border: 1px solid rgba(21, 28, 58, 0.08);
            position: relative;
            overflow: hidden;
            transition: all 0.4s var(--ease);
        }
        .pillar:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.06);
            border-color: rgba(0, 82, 136, 0.15);
        }
        .pillar-num {
            font-family: var(--display);
            font-size: 5.5rem;
            font-weight: 300;
            color: rgba(0, 82, 136, 0.04);
            position: absolute;
            top: -12px;
            right: 18px;
            line-height: 1;
        }
        .pillar-icon {
            width: 50px;
            height: 50px;
            background: rgba(0, 82, 136, 0.06);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            margin-bottom: 1.2rem;
        }
        .pillar h3 {
            font-family: var(--display);
            font-size: 1.7rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.3rem;
        }
        .pillar-timing {
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--coral);
            margin-bottom: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
        .pillar p {
            font-size: 0.95rem;
            color: var(--text-mid);
            line-height: 1.65;
        }

        /* ============================
           TIMELINE (primary bg)
        ============================ */
        .timeline-section {
            padding: 6rem 6%;
        }
        .timeline-section .section-label { color: var(--coral-light); }
        .timeline-section .section-title { color: var(--white); }
        .timeline-section .section-title em { color: var(--coral-light); }

        .timeline {
            max-width: 750px;
            margin: 0 auto;
            position: relative;
        }
        .timeline::before {
            content: '';
            position: absolute;
            left: 30px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, var(--coral-light), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
            border-radius: 2px;
        }
        .timeline-item {
            display: flex;
            gap: 2.2rem;
            padding-bottom: 2.8rem;
            position: relative;
        }
        .timeline-marker {
            width: 60px;
            height: 60px;
            min-width: 60px;
            background: rgba(255,255,255,0.06);
            border: 2px solid rgba(255,255,255,0.25);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--display);
            font-size: 1rem;
            font-weight: 600;
            color: rgba(255,255,255,0.8);
            z-index: 1;
            transition: all 0.3s var(--ease);
        }
        .timeline-item:first-child .timeline-marker {
            border-color: var(--coral-light);
            color: var(--coral-light);
            background: rgba(224, 122, 95, 0.1);
        }
        .timeline-content h4 {
            font-family: var(--display);
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 0.2rem;
        }
        .timeline-duration {
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--coral-light);
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 0.5rem;
        }
        .timeline-content p {
            font-size: 0.92rem;
            color: rgba(255,255,255,0.6);
            line-height: 1.6;
        }

        /* ============================
           ROI
        ============================ */
        .roi-section {
            padding: 6rem 6%;
        }
        .roi-inner {
            max-width: 1000px;
            margin: 0 auto;
        }
        .roi-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-top: 3rem;
        }
        .roi-card {
            background: white;
            border-radius: 24px;
            padding: 2.5rem 2rem;
            text-align: center;
            border: 1px solid rgba(21, 28, 58, 0.08);
            transition: all 0.4s var(--ease);
        }
        .roi-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        }
        .roi-card-label {
            font-size: 0.82rem;
            color: var(--text-mid);
            margin-bottom: 0.5rem;
        }
        .roi-card-num {
            font-family: var(--display);
            font-size: 2.6rem;
            font-weight: 600;
            color: var(--dark-grid);
            line-height: 1.1;
        }
        .roi-card-detail {
            font-size: 0.82rem;
            color: var(--text-mid);
            margin-top: 0.3rem;
        }
        .roi-card-saving {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--primary);
            margin-top: 0.8rem;
            padding-top: 0.8rem;
            border-top: 1px solid rgba(0,0,0,0.05);
        }
        .roi-card.featured {
            border-color: rgba(0, 82, 136, 0.2);
            box-shadow: 0 8px 30px rgba(0, 82, 136, 0.08);
        }
        .roi-card.featured .roi-card-saving { color: var(--coral); }
        .roi-footnote {
            text-align: center;
            font-size: 0.8rem;
            color: var(--silver);
            margin-top: 1.5rem;
        }

        /* ============================
           DIFFERENTIATOR
        ============================ */
        .diff-section {
            padding: 6rem 6%;
        }
        .diff-inner {
            max-width: 1000px;
            margin: 0 auto;
        }
        .diff-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin-top: 3rem;
            border-radius: 24px;
            overflow: hidden;
            background: white;
            border: 1px solid rgba(21, 28, 58, 0.08);
            box-shadow: 0 10px 40px rgba(0,0,0,0.04);
        }
        .diff-table thead th {
            padding: 1.2rem 1.5rem;
            text-align: left;
            font-size: 0.82rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
        .diff-table thead th:first-child { background: #f7f7f8; color: var(--text-mid); }
        .diff-table thead th:nth-child(2) { background: rgba(184,176,164,0.15); color: var(--silver); }
        .diff-table thead th:nth-child(3) { background: var(--primary); color: var(--white); }
        .diff-table td {
            padding: 1.1rem 1.5rem;
            font-size: 0.9rem;
            border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        .diff-table td:first-child { font-weight: 600; color: var(--dark-grid); background: #fafafa; }
        .diff-table td:nth-child(2) { color: var(--text-mid); }
        .diff-table td:nth-child(3) { color: var(--text); font-weight: 500; background: rgba(0, 82, 136, 0.02); }
        .diff-table tr:last-child td { border-bottom: none; }

        /* ============================
           PRICING
        ============================ */
        .pricing-section { padding: 6rem 6%; }
        .pricing-card {
            max-width: 720px;
            margin: 0 auto;
            background: var(--dark-grid);
            border-radius: 40px;
            padding: 4rem 3.5rem;
            text-align: center;
            color: var(--white);
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.05);
            box-shadow: 0 30px 80px rgba(21, 28, 58, 0.3);
        }
        .pricing-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -25%;
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, rgba(0, 82, 136, 0.2) 0%, transparent 60%);
            pointer-events: none;
        }
        .pricing-card::after {
            content: '';
            position: absolute;
            bottom: -35%;
            right: -15%;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(224, 122, 95, 0.08) 0%, transparent 60%);
            pointer-events: none;
        }
        .pricing-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: rgba(224, 122, 95, 0.12);
            border: 1px solid rgba(224, 122, 95, 0.25);
            padding: 0.4rem 1rem;
            border-radius: 100px;
            font-size: 0.72rem;
            font-weight: 600;
            color: var(--coral-light);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 2rem;
            position: relative;
            z-index: 1;
        }
        .pricing-price {
            font-family: var(--display);
            font-size: clamp(3.5rem, 8vw, 5.5rem);
            font-weight: 600;
            line-height: 1;
            margin-bottom: 0.5rem;
            position: relative;
            z-index: 1;
        }
        .pricing-price small {
            font-size: 0.3em;
            font-weight: 400;
            opacity: 0.5;
            vertical-align: super;
        }
        .pricing-desc {
            font-size: 1.05rem;
            opacity: 0.7;
            margin-bottom: 2.5rem;
            position: relative;
            z-index: 1;
            line-height: 1.6;
        }
        .pricing-includes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.7rem 2rem;
            text-align: left;
            margin-bottom: 2.5rem;
            position: relative;
            z-index: 1;
        }
        .pricing-item {
            display: flex;
            align-items: flex-start;
            gap: 0.6rem;
            font-size: 0.88rem;
            color: rgba(255,255,255,0.8);
        }
        .pricing-item .check {
            color: var(--coral-light);
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.5;
            flex-shrink: 0;
        }
        .btn-cta-main {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--coral);
            color: var(--white);
            padding: 1.1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1rem;
            transition: all 0.35s var(--ease);
            border: none;
            cursor: pointer;
            position: relative;
            z-index: 1;
        }
        .btn-cta-main:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(224, 122, 95, 0.4);
        }
        .guarantee {
            margin-top: 2.5rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.08);
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            position: relative;
            z-index: 1;
            line-height: 1.6;
        }
        .guarantee strong { color: rgba(255,255,255,0.85); }

        /* ============================
           ABOUT
        ============================ */
        .about-section {
            padding: 6rem 6%;
        }
        .about-inner {
            max-width: 950px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: 4rem;
            align-items: center;
        }
        .about-visual {
            background: white;
            border-radius: 30px;
            padding: 3rem 2.5rem;
            text-align: center;
            border: 1px solid rgba(21, 28, 58, 0.08);
            box-shadow: 0 10px 40px rgba(0,0,0,0.04);
        }
        .about-initials {
            font-family: var(--display);
            font-size: 5rem;
            font-weight: 300;
            color: var(--primary);
            line-height: 1;
            margin-bottom: 1.2rem;
        }
        .about-credentials {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .credential {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8rem;
            color: var(--text-mid);
            padding: 0.4rem 0.9rem;
            background: rgba(0, 82, 136, 0.03);
            border-radius: 10px;
            border: 1px solid rgba(0, 82, 136, 0.06);
        }
        .credential .c-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--coral);
            flex-shrink: 0;
        }
        .about-text h3 {
            font-family: var(--display);
            font-size: 2.2rem;
            font-weight: 500;
            color: var(--dark-grid);
            margin-bottom: 1.2rem;
            line-height: 1.2;
        }
        .about-text h3 strong {
            font-style: italic;
            color: var(--primary);
            font-weight: 600;
        }
        .about-text p {
            font-size: 0.95rem;
            color: var(--text-mid);
            margin-bottom: 1rem;
            line-height: 1.7;
        }
        .about-link {
            color: var(--primary);
            font-weight: 700;
            text-decoration: none;
            border-bottom: 2px solid var(--primary);
            padding-bottom: 3px;
            font-size: 0.9rem;
            transition: all 0.3s;
        }
        .about-link:hover { color: var(--coral); border-color: var(--coral); }

        /* ============================
           FINAL CTA
        ============================ */
        .final-cta {
            padding: 6rem 6% 7rem;
            text-align: center;
        }
        .final-cta-card {
            background: white;
            border-radius: 40px;
            border: 1px solid rgba(21, 28, 58, 0.1);
            padding: 4.5rem 3rem;
            max-width: 750px;
            margin: 0 auto;
            box-shadow: 0 20px 60px rgba(0,0,0,0.05);
        }
        .final-cta h2 {
            font-family: var(--display);
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 500;
            color: var(--dark-grid);
            margin-bottom: 1.2rem;
            line-height: 1.15;
        }
        .final-cta h2 strong {
            font-style: italic;
            font-weight: 600;
            color: var(--primary);
        }
        .final-cta p {
            font-size: 1.05rem;
            color: var(--text-mid);
            margin-bottom: 2.5rem;
            line-height: 1.7;
        }

        /* ============================
           FOOTER
        ============================ */
        footer {
            padding: 2.5rem 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1100px;
            margin: 0 auto;
            flex-wrap: wrap;
            gap: 1rem;
            border-top: 1px solid rgba(21, 28, 58, 0.06);
        }
        .footer-left {
            font-size: 0.85rem;
            color: var(--text-mid);
        }
        .footer-left a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
        }
        .footer-right {
            font-size: 0.8rem;
            color: var(--silver);
        }

        /* ============================
           RESPONSIVE
        ============================ */
        @media (max-width: 900px) {
            .hero-card {
                grid-template-columns: 1fr;
                text-align: center;
                padding: 3rem 1.5rem;
            }
            .hero-desc { margin-left: auto; margin-right: auto; }
            .hero-actions { justify-content: center; }
            .hero-tag { margin-left: auto; margin-right: auto; }
            .pillar-grid { grid-template-columns: 1fr; }
            .problem-stats { grid-template-columns: 1fr; gap: 1rem; }
            .roi-grid { grid-template-columns: 1fr; }
            .pricing-includes { grid-template-columns: 1fr; }
            .pricing-card { padding: 3rem 2rem; border-radius: 30px; }
            .about-inner { grid-template-columns: 1fr; text-align: center; }
            .about-credentials { align-items: center; }
            .diff-table { font-size: 0.8rem; }
            .diff-table td, .diff-table th { padding: 0.8rem 0.7rem; }
            .nav-link { display: none; }
            .logo-text { display: none; }
            .final-cta-card { padding: 3rem 1.5rem; }
            footer { flex-direction: column; text-align: center; }
        }
        @media (max-width: 500px) {
            .hero { padding-top: 140px; }
            .hero h1 { font-size: 2rem; }
            .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
            .hero-actions { flex-direction: column; width: 100%; }
        }
    </style>
</head>
<body>

<!-- NAVIGATION -->
<nav id="nav">
    <a href="#" class="logo">
        <svg class="logo-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#1B365D"/>
            <text x="50" y="65" font-family="Cormorant Garamond, serif" font-size="52" font-weight="500" fill="#b8b0a4" text-anchor="middle">M</text>
            <circle cx="72" cy="28" r="3" fill="#e07a5f" opacity="0.8"/>
            <circle cx="78" cy="32" r="2.5" fill="#e07a5f" opacity="0.6"/>
            <circle cx="75" cy="38" r="2" fill="#e07a5f" opacity="0.5"/>
        </svg>
        <span class="logo-text">Marjorie Mathieu</span>
    </a>
    <div class="nav-links">
        <a href="#methode" class="nav-link">Méthode</a>
        <a href="#resultats" class="nav-link">Résultats</a>
        <a href="#tarif" class="nav-link">Tarif</a>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="nav-cta">Diagnostic Gratuit →</a>
    </div>
</nav>

<!-- HERO -->
<section class="hero">
    <div class="hero-card">
        <div class="hero-left">
            <div class="hero-tag reveal">
                <span class="dot"></span>
                Pilote Mars 2026 — 3 places
            </div>
            <h1 class="reveal reveal-delay-1">Vos talents partent.<br>Construisez <strong>une culture qui les garde.</strong></h1>
            <p class="hero-desc reveal reveal-delay-2">En 3 semaines, j'installe des rituels concrets dans vos workflows quotidiens. Pas du bien-être cosmétique — de la culture opérationnelle qui transforme votre productivité.</p>
            <div class="hero-actions reveal reveal-delay-3">
                <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-primary">Réserver mon diagnostic →</a>
                <a href="#methode" class="btn-secondary">Découvrir la méthode ↓</a>
            </div>
        </div>
        <div class="hero-visual reveal reveal-delay-2">
            <div class="stat-card">
                <div class="stat-number">×3</div>
                <div>
                    <div class="stat-text">Meilleure rétention avec une culture forte</div>
                    <div class="stat-source">Securex/Graydon 2024</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-number">+39%</div>
                <div>
                    <div class="stat-text">De productivité pour les équipes engagées</div>
                    <div class="stat-source">Securex/Graydon 2024</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-number">80 000€</div>
                <div>
                    <div class="stat-text">Coût annuel de l'absentéisme (50 employés)</div>
                    <div class="stat-source">SD Worx 2024-2025</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- PROBLEM -->
<section class="problem block-primary">
    <div class="problem-inner">
        <div class="problem-label reveal">Le vrai problème</div>
        <h2 class="reveal reveal-delay-1">Les séminaires et team buildings ne changent rien.<br>La culture se construit <em>au quotidien.</em></h2>
        <p class="problem-sub reveal reveal-delay-2">Un jour de team building = un souvenir sympa. Des rituels quotidiens ancrés dans le travail = une transformation durable.</p>
        <div class="problem-stats">
            <div class="problem-stat reveal reveal-delay-1">
                <div class="problem-stat-num">+44%</div>
                <div class="problem-stat-text">D'arrêts longue durée en 5 ans en Belgique</div>
                <div class="problem-stat-source">VRT News / INAMI 2025</div>
            </div>
            <div class="problem-stat reveal reveal-delay-2">
                <div class="problem-stat-num">2 Mrd €</div>
                <div class="problem-stat-text">Coût national annuel des incapacités liées au désengagement</div>
                <div class="problem-stat-source">INAMI 2023</div>
            </div>
            <div class="problem-stat reveal reveal-delay-3">
                <div class="problem-stat-num">1 581€</div>
                <div class="problem-stat-text">Coût direct par collaborateur temps plein, par an</div>
                <div class="problem-stat-source">SD Worx 2024</div>
            </div>
        </div>
    </div>
</section>

<!-- MÉTHODE -->
<section class="method" id="methode">
    <div class="method-inner">
        <div class="section-header">
            <div class="section-label reveal">La méthode</div>
            <h2 class="section-title reveal reveal-delay-1">4 rituels concrets,<br>intégrés <em>dans vos workflows</em></h2>
        </div>
        <div class="pillar-grid">
            <div class="pillar reveal">
                <div class="pillar-num">01</div>
                <div class="pillar-icon">🏋️</div>
                <h3>Radio Taiso</h3>
                <div class="pillar-timing">10 min · chaque matin</div>
                <p>Pratiqué par 27 millions de Japonais et intégré chez Toyota depuis 70 ans. 10 minutes d'exercices collectifs pour créer une cohésion immédiate et lancer la journée avec énergie.</p>
            </div>
            <div class="pillar reveal reveal-delay-1">
                <div class="pillar-num">02</div>
                <div class="pillar-icon">🧘</div>
                <h3>Pauses 90 minutes</h3>
                <div class="pillar-timing">5-10 min · 2× par jour</div>
                <p>Étirements et respiration guidée après chaque cycle de concentration de 90 minutes. Réduit la fatigue mentale et relance le focus pour le cycle suivant.</p>
            </div>
            <div class="pillar reveal reveal-delay-2">
                <div class="pillar-num">03</div>
                <div class="pillar-icon">⏱️</div>
                <h3>Time Blocking</h3>
                <div class="pillar-timing">4h de formation · intégré outils</div>
                <p>Formation pratique avec intégration directe dans vos calendriers et outils existants. Objectif : récupérer 2 à 3 heures de travail productif par jour.</p>
            </div>
            <div class="pillar reveal reveal-delay-3">
                <div class="pillar-num">04</div>
                <div class="pillar-icon">🚀</div>
                <h3>Ambassadeurs internes</h3>
                <div class="pillar-timing">6 mois · suivi inclus</div>
                <p>Je forme 2 relais internes dans votre équipe. Ce sont eux qui font vivre la culture au quotidien, bien après mon départ. Pas de dépendance externe.</p>
            </div>
        </div>
    </div>
</section>

<!-- TIMELINE -->
<section class="timeline-section block-primary">
    <div class="section-header">
        <div class="section-label reveal">Le parcours</div>
        <h2 class="section-title reveal reveal-delay-1">Du diagnostic à la <em>culture ancrée</em></h2>
    </div>
    <div class="timeline">
        <div class="timeline-item reveal">
            <div class="timeline-marker">P0</div>
            <div class="timeline-content">
                <h4>Diagnostic & co-construction</h4>
                <div class="timeline-duration">1 semaine avant démarrage</div>
                <p>Concertation avec Direction, DRH, Responsable Prévention. Audit de la culture actuelle et identification de 2 ambassadeurs internes.</p>
            </div>
        </div>
        <div class="timeline-item reveal reveal-delay-1">
            <div class="timeline-marker">S1-3</div>
            <div class="timeline-content">
                <h4>Implémentation intensive</h4>
                <div class="timeline-duration">3 semaines · lundi au vendredi</div>
                <p>Formation quotidienne 1h/jour. Mise en place des 4 rituels. Mesure d'engagement avant/après. Ajustements continus selon retours terrain.</p>
            </div>
        </div>
        <div class="timeline-item reveal reveal-delay-2">
            <div class="timeline-marker">M1-6</div>
            <div class="timeline-content">
                <h4>Consolidation & pérennisation</h4>
                <div class="timeline-duration">6 mois · check-ins mensuels</div>
                <p>Suivi des ambassadeurs, mesures à J+30, J+60, J+120, J+180. Intégration des nouveaux dans les rituels. Rapport final complet.</p>
            </div>
        </div>
    </div>
</section>

<!-- ROI -->
<section class="roi-section" id="resultats">
    <div class="roi-inner">
        <div class="section-header">
            <div class="section-label reveal">Impact financier</div>
            <h2 class="section-title reveal reveal-delay-1">ROI estimé avec une réduction<br>de <em>20% de l'absentéisme</em></h2>
        </div>
        <div class="roi-grid">
            <div class="roi-card reveal">
                <div class="roi-card-label">30 employés</div>
                <div class="roi-card-num">48 000€</div>
                <div class="roi-card-detail">coût absentéisme actuel</div>
                <div class="roi-card-saving">→ 9 600€ économisés/an</div>
            </div>
            <div class="roi-card featured reveal reveal-delay-1">
                <div class="roi-card-label">50 employés</div>
                <div class="roi-card-num">80 000€</div>
                <div class="roi-card-detail">coût absentéisme actuel</div>
                <div class="roi-card-saving">→ 16 000€ économisés/an</div>
            </div>
            <div class="roi-card reveal reveal-delay-2">
                <div class="roi-card-label">100 employés</div>
                <div class="roi-card-num">160 000€</div>
                <div class="roi-card-detail">coût absentéisme actuel</div>
                <div class="roi-card-saving">→ 32 000€ économisés/an</div>
            </div>
        </div>
        <p class="roi-footnote reveal">Calcul basé sur 1 581€/collaborateur/an · Source : SD Worx 2024</p>
    </div>
</section>

<!-- DIFFÉRENCIATION -->
<section class="diff-section block-white">
    <div class="diff-inner">
        <div class="section-header">
            <div class="section-label reveal">Pourquoi c'est différent</div>
            <h2 class="section-title reveal reveal-delay-1">Pas un séminaire.<br><em>Un changement de culture.</em></h2>
        </div>
        <div class="reveal reveal-delay-2">
            <table class="diff-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Solutions classiques</th>
                        <th>Équilibre Performance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Format</td>
                        <td>1-2 jours événementiels</td>
                        <td>3 semaines + 6 mois suivi</td>
                    </tr>
                    <tr>
                        <td>Ancrage</td>
                        <td>Consultant externe qui part</td>
                        <td>2 ambassadeurs internes formés</td>
                    </tr>
                    <tr>
                        <td>ROI visible</td>
                        <td>Aucune mesure concrète</td>
                        <td>Données avant/après transparentes</td>
                    </tr>
                    <tr>
                        <td>Risque</td>
                        <td>Budget engagé sans garantie</td>
                        <td>Sortie J3, 50% remboursé</td>
                    </tr>
                    <tr>
                        <td>Effet</td>
                        <td>Éphémère</td>
                        <td>Culture qui s'auto-alimente</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>

<!-- PRICING -->
<section class="pricing-section" id="tarif">
    <div class="reveal">
        <div class="pricing-card">
            <div class="pricing-badge">
                <span class="dot" style="width:5px;height:5px;background:var(--coral-light);border-radius:50%;animation:pulse-dot 2s ease infinite;"></span>
                Offre Pilote · Mars 2026 · 3 places
            </div>
            <div class="pricing-price">800€ <small>HTVA</small></div>
            <p class="pricing-desc">3 semaines d'implémentation intensive + 6 mois de suivi complet.<br>Tout inclus, aucun frais caché.</p>
            <div class="pricing-includes">
                <div class="pricing-item"><span class="check">✓</span> Diagnostic culture 1 semaine</div>
                <div class="pricing-item"><span class="check">✓</span> 3 semaines sur site</div>
                <div class="pricing-item"><span class="check">✓</span> Formation 2 ambassadeurs</div>
                <div class="pricing-item"><span class="check">✓</span> Tous outils & templates</div>
                <div class="pricing-item"><span class="check">✓</span> 6 mois check-ins mensuels</div>
                <div class="pricing-item"><span class="check">✓</span> Rapport final complet</div>
            </div>
            <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-cta-main">Postuler pour le pilote →</a>
            <div class="guarantee">
                🛡️ <strong>Garantie Jour 3</strong> — Si la méthode ne convient pas après 3 jours, on résilie. 50% remboursé, vous gardez tous les outils et formations reçues.
            </div>
        </div>
    </div>
</section>

<!-- ABOUT -->
<section class="about-section block-white">
    <div class="about-inner">
        <div class="about-visual reveal">
            <div class="about-initials">MM</div>
            <div class="about-credentials">
                <div class="credential"><span class="c-dot"></span> 15 ans en corporate (BNP Paribas, Serco, KONE)</div>
                <div class="credential"><span class="c-dot"></span> 10+ ans yoga & méditation</div>
                <div class="credential"><span class="c-dot"></span> Certifiée marketing digital (IFAPME)</div>
                <div class="credential"><span class="c-dot"></span> Formatrice IA (Kitchy Agency)</div>
            </div>
        </div>
        <div class="about-text reveal reveal-delay-1">
            <h3>Je ne théorise pas.<br>Je <strong>m'immerge.</strong></h3>
            <p>15 ans dans des environnements corporate m'ont appris une chose : les séminaires s'oublient, les habitudes restent. C'est pour ça que je ne fais pas de conférences. Je viens dans vos bureaux, je forme vos équipes, et je construis avec vous une culture qui tient.</p>
            <p>Mon approche combine rigueur opérationnelle et rituels collectifs éprouvés — du concret intégré dans vos outils existants, pas de la théorie sur slides.</p>
            <a href="https://www.linkedin.com/in/equilibreperformance/" target="_blank" class="about-link">Mon parcours sur LinkedIn →</a>
        </div>
    </div>
</section>

<!-- FINAL CTA -->
<section class="final-cta">
    <div class="final-cta-card reveal">
        <h2>Prêt à construire une culture<br>qui <strong>retient vos talents ?</strong></h2>
        <p>15 minutes pour comprendre si votre entreprise est prête.<br>Diagnostic gratuit. Zéro engagement.</p>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-primary" style="font-size: 1rem; padding: 1.1rem 2.5rem;">Réserver mon diagnostic gratuit →</a>
    </div>
</section>

<!-- FOOTER -->
<footer>
    <div class="footer-left">
        <strong>Marjorie Mathieu — Équilibre Performance</strong><br>
        <a href="mailto:hello@marjoriemathieu.be">hello@marjoriemathieu.be</a> · +32 477 09 18 03
    </div>
    <div class="footer-right">
        © 2026 · Ath, Hainaut — Belgique
    </div>
</footer>

<!-- SCRIPTS -->
<script>
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Nav scroll
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
</script>
</body>
</html>
