<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marjorie Mathieu — Équilibre Performance</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #005288;
            --dark-grid: #151c3a;
            --white: #ffffff;
            --text: #2c2c2c;
            --text-mid: #5a5a5a;
            --display: 'Cormorant Garamond', Georgia, serif;
            --body: 'Outfit', sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body { 
            font-family: var(--body); 
            color: var(--text); 
            background-color: var(--white);
            
            /* FOND CAHIER D'ÉCOLE - Carrés #151c3a très légers */
            background-image: 
                linear-gradient(rgba(21, 28, 58, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(21, 28, 58, 0.08) 1px, transparent 1px);
            background-size: 30px 30px;
            background-attachment: fixed;
            line-height: 1.6; 
        }

        /* NAVIGATION STYLE SYMBIOSE */
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
            backdrop-filter: blur(10px); 
            border-radius: 60px; 
            border: 1px solid rgba(21, 28, 58, 0.1);
            box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        .logo { display: flex; align-items: center; gap: 0.7rem; text-decoration: none; }
        .logo-img { height: 44px; width: 44px; }
        .logo-text { font-family: var(--display); font-size: 1.2rem; font-weight: 500; color: var(--primary); }

        .nav-cta { 
            background: var(--primary); color: var(--white); 
            padding: 0.7rem 1.6rem; border-radius: 50px; 
            text-decoration: none; font-size: 0.85rem; font-weight: 600; 
            transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            white-space: nowrap;
        }
        .nav-cta:hover { transform: scale(1.03); opacity: 0.9; }

        /* HERO - CORRECTION DE L'ESPACEMENT HAUT */
        .hero { 
            padding-top: 160px; /* Espace pour ne pas être caché par le header */
            padding-bottom: 6rem;
            padding-left: 6%;
            padding-right: 6%;
            display: flex; 
            justify-content: center; 
        }
        
        .hero-card {
            background: white; 
            padding: 5rem 3rem; 
            border-radius: 40px;
            border: 1px solid rgba(21, 28, 58, 0.1);
            max-width: 1000px; 
            text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.05);
            position: relative;
        }

        h1 { font-family: var(--display); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 500; color: var(--dark-grid); line-height: 1.1; margin-bottom: 1.5rem; }
        h1 strong { font-style: italic; color: var(--primary); font-weight: 600; }
        .hero-sub { font-size: 1.2rem; color: var(--text-mid); max-width: 700px; margin: 0 auto 2.5rem; }

        /* SECTIONS GENERAL */
        section { padding: 5rem 6%; }
        .container { max-width: 1100px; margin: 0 auto; }
        .section-title { font-family: var(--display); font-size: 3rem; color: var(--dark-grid); text-align: center; margin-bottom: 3rem; }
        .section-title em { color: var(--primary); font-style: italic; }

        /* GRIDS */
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
        .card { 
            background: white; padding: 2.5rem; border-radius: 30px; 
            border: 1px solid rgba(21, 28, 58, 0.08); transition: 0.3s;
        }
        .card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
        .card h3 { font-family: var(--display); font-size: 1.6rem; color: var(--primary); margin-bottom: 1rem; }
        
        /* ROI TABLE */
        .roi-table-wrapper { overflow-x: auto; margin-top: 2rem; }
        .roi-table { width: 100%; border-collapse: collapse; background: white; border-radius: 20px; overflow: hidden; }
        .roi-table th { background: var(--primary); color: white; padding: 1.2rem; text-align: left; }
        .roi-table td { padding: 1.2rem; border-bottom: 1px solid #eee; }

        /* PRICING */
        .pricing-box { 
            background: var(--dark-grid); color: white; border-radius: 50px; 
            padding: 5rem 3rem; text-align: center; max-width: 900px; margin: 4rem auto;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .price { font-family: var(--display); font-size: clamp(3rem, 8vw, 5.5rem); margin: 1rem 0; }
        
        .btn-main { 
            display: inline-block; background: var(--primary); color: white; 
            padding: 1.2rem 2.8rem; border-radius: 60px; 
            text-decoration: none; font-weight: 600; transition: 0.3s;
            border: none; cursor: pointer;
        }
        .btn-main.white { background: white; color: var(--dark-grid); }
        .btn-main:hover { transform: scale(1.05); }

        /* FOOTER */
        footer { padding: 5rem 6%; text-align: center; background: white; border-top: 1px solid rgba(0,0,0,0.05); }

        @media (max-width: 850px) {
            .grid-3 { grid-template-columns: 1fr; }
            .hero { padding-top: 120px; }
            .hero-card { padding: 3rem 1.5rem; }
            .logo-text { display: none; }
            .section-title { font-size: 2.2rem; }
        }
    </style>
</head>
<body>

<nav>
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
    <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="nav-cta">Diagnostic Gratuit →</a>
</nav>

<section class="hero">
    <div class="hero-card">
        <h1>Arrêtez de perdre vos talents.<br>Construisez <strong>une culture qui les garde.</strong></h1>
        <p class="hero-sub">Les entreprises avec une culture forte retiennent 3x plus de talents. En 3 semaines, j'installe des rituels concrets qui transforment votre productivité.</p>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-main">Réserver mon diagnostic (15 min) →</a>
    </div>
</section>

<section class="container">
    <h2 class="section-title">L'opportunité <em>réelle</em></h2>
    <div class="grid-3">
        <div class="card">
            <h3>+39%</h3>
            <p>De productivité accrue pour les équipes engagées vs désengagées.</p>
            <small style="color:var(--text-mid)">Source: Securex 2024</small>
        </div>
        <div class="card">
            <h3>80 000 €/an</h3>
            <p>Économies moyennes sur l'absentéisme pour une équipe de 50 employés.</p>
            <small style="color:var(--text-mid)">Source: SD Worx 2025</small>
        </div>
        <div class="card">
            <h3>Rétention 95%</h3>
            <p>Inspiré des modèles comme <strong>Alan</strong> ou <strong>Buurtzorg</strong> qui utilisent les rituels collectifs.</p>
        </div>
    </div>
</section>

<section style="background: rgba(255,255,255,0.4);">
    <div class="container">
        <h2 class="section-title">La Méthode <em>Équilibre Performance</em></h2>
        <div class="grid-3">
            <div class="card">
                <h3>Radio Taiso</h3>
                <p>10 min chaque matin. Un rituel japonais (Toyota) pour créer une énergie commune et une cohésion immédiate dès le début de journée.</p>
            </div>
            <div class="card">
                <h3>Time Blocking</h3>
                <p>Formation et intégration directe dans vos outils pour supprimer les distractions et récupérer 2h de focus par jour.</p>
            </div>
            <div class="card">
                <h3>Ambassadeurs</h3>
                <p>Je forme vos relais internes pour que la culture s'auto-alimente et perdure 6 mois après mon intervention.</p>
            </div>
        </div>
    </div>
</section>

<section class="container">
    <h2 class="section-title">Impact sur votre <em>ROI</em></h2>
    <p style="text-align: center; color: var(--text-mid); margin-bottom: 20px;">Estimation basée sur une réduction de 20% de l'absentéisme.</p>
    <div class="roi-table-wrapper">
        <table class="roi-table">
            <thead>
                <tr>
                    <th>Taille équipe</th>
                    <th>Coût absentéisme moyen</th>
                    <th>Économies potentielles</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>30 employés</td>
                    <td>48 000 €</td>
                    <td><strong>+ 9 600 € / an</strong></td>
                </tr>
                <tr>
                    <td>50 employés</td>
                    <td>80 000 €</td>
                    <td><strong>+ 16 000 € / an</strong></td>
                </tr>
                <tr>
                    <td>100 employés</td>
                    <td>160 000 €</td>
                    <td><strong>+ 32 000 € / an</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section>
    <div class="pricing-box">
        <span style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;">Offre Pilote Mars 2026</span>
        <div class="price">800€ <span style="font-size: 1.5rem; opacity: 0.6;">HTVA</span></div>
        <p style="margin-bottom: 2.5rem; font-size: 1.1rem; opacity: 0.9;">3 semaines d'implémentation intensive + 6 mois de suivi.<br><strong>Seulement 3 places disponibles.</strong></p>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-main white">Postuler pour le pilote →</a>
        <p style="margin-top: 2.5rem; font-size: 0.85rem; opacity: 0.7; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">🛡️ <strong>Garantie Jour 3 :</strong> Si la méthode ne vous convient pas, on résilie. 50% remboursé. Vous gardez tous les outils.</p>
    </div>
</section>

<section class="container" style="text-align: center; padding-bottom: 8rem;">
    <h2 class="section-title">Une approche <em>Opérationnelle</em></h2>
    <p style="max-width: 800px; margin: 0 auto 2.5rem; font-size: 1.15rem; color: var(--text-mid);">
        Je ne propose pas de séminaires théoriques. Je m'immerge dans votre quotidien pour ancrer des habitudes qui durent. Mon expérience de 15 ans en corporate me permet de comprendre vos freins réels.
    </p>
    <a href="https://www.linkedin.com/in/equilibreperformance/" target="_blank" style="color: var(--primary); font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--primary); padding-bottom: 4px; transition: 0.3s;">
        Consulter mon parcours sur LinkedIn →
    </a>
</section>

<footer>
    <svg class="logo-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 1.5rem;">
        <circle cx="50" cy="50" r="48" fill="#1B365D"/>
        <text x="50" y="65" font-family="Cormorant Garamond, serif" font-size="52" font-weight="500" fill="#b8b0a4" text-anchor="middle">M</text>
        <circle cx="72" cy="28" r="3" fill="#e07a5f" opacity="0.8"/>
    </svg>
    <p><strong>Marjorie Mathieu — Équilibre Performance</strong></p>
    <p style="margin: 10px 0;">
        <a href="mailto:hello@marjoriemathieu.be" style="color: var(--primary); text-decoration: none; font-weight: 600;">hello@marjoriemathieu.be</a> | +32 477 09 18 03
    </p>
    <p style="font-size: 0.8rem; color: var(--text-mid); margin-top: 2rem;">© 2026 Ath, Hainaut — Belgique. Spécialiste en culture de rétention et performance collective.</p>
</footer>

</body>
</html>
