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
            /* FOND CAHIER D'ÉCOLE */
            background-image: 
                linear-gradient(rgba(21, 28, 58, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(21, 28, 58, 0.08) 1px, transparent 1px);
            background-size: 30px 30px;
            background-attachment: fixed;
            line-height: 1.6; 
        }

        /* NAVIGATION STYLE SYMBIOSE */
        nav { 
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            width: 92%; max-width: 1100px; z-index: 1000; 
            padding: 0.7rem 2rem; display: flex; justify-content: space-between; align-items: center; 
            background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); 
            border-radius: 60px; border: 1px solid rgba(21, 28, 58, 0.1);
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
        }
        .nav-cta:hover { transform: scale(1.03); opacity: 0.9; }

        /* HERO */
        .hero { padding: 12rem 6% 6rem; display: flex; justify-content: center; }
        .hero-card {
            background: white; padding: 5rem 3rem; border-radius: 40px;
            border: 1px solid rgba(21, 28, 58, 0.1);
            max-width: 1000px; text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.05);
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
        .roi-table { width: 100%; border-collapse: collapse; margin-top: 2rem; background: white; border-radius: 20px; overflow: hidden; }
        .roi-table th { background: var(--primary); color: white; padding: 1.2rem; text-align: left; }
        .roi-table td { padding: 1.2rem; border-bottom: 1px solid #eee; }

        /* PRICING */
        .pricing-box { 
            background: var(--dark-grid); color: white; border-radius: 50px; 
            padding: 5rem 3rem; text-align: center; max-width: 900px; margin: 4rem auto;
        }
        .price { font-family: var(--display); font-size: 5.5rem; margin: 1rem 0; }
        .btn-main { 
            display: inline-block; background: var(--primary); color: white; 
            padding: 1.2rem 2.8rem; border-radius: 60px; 
            text-decoration: none; font-weight: 600; transition: 0.3s;
        }
        .btn-main.white { background: white; color: var(--dark-grid); }

        /* FOOTER */
        footer { padding: 5rem 6%; text-align: center; background: white; border-top: 1px solid rgba(0,0,0,0.05); }

        @media (max-width: 850px) {
            .grid-3 { grid-template-columns: 1fr; }
            .hero-card { padding: 3rem 1.5rem; }
            .logo-text { display: none; }
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
            <small>Source: Securex 2024</small>
        </div>
        <div class="card">
            <h3>80 000 €/an</h3>
            <p>Économies moyennes sur l'absentéisme pour une équipe de 50 employés.</p>
        </div>
        <div class="card">
            <h3>Rétention 95%</h3>
            <p>Inspiré des modèles comme <strong>Alan</strong> ou <strong>Buurtzorg</strong> qui utilisent les rituels collectifs.</p>
        </div>
    </div>
</section>

<section style="background: rgba(255,255,255,0.6);">
    <div class="container">
        <h2 class="section-title">La Méthode <em>Équilibre Performance</em></h2>
        <div class="grid-3">
            <div class="card">
                <h3>Radio Taiso</h3>
                <p>10 min chaque matin. Un rituel japonais (Toyota) pour créer une énergie commune et une cohésion immédiate.</p>
            </div>
            <div class="card">
                <h3>Time Blocking</h3>
                <p>Intégration directe dans vos workflows pour récupérer 2 à 3h de productivité par jour.</p>
            </div>
            <div class="card">
                <h3>Ambassadeurs</h3>
                <p>Je forme vos relais internes pour que la culture perdure 6 mois après mon intervention.</p>
            </div>
        </div>
    </div>
</section>

<section class="container">
    <h2 class="section-title">Retour sur <em>Investissement</em></h2>
    <p style="text-align: center; color: var(--text-mid);">Réduction de 20% de l'absentéisme (Objectif pilote)</p>
    <table class="roi-table">
        <thead>
            <tr>
                <th>Taille équipe</th>
                <th>Coût absentéisme actuel</th>
                <th>Économies annuelles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>30 employés</td>
                <td>48 000 €</td>
                <td><strong>+ 9 600 €</strong></td>
            </tr>
            <tr>
                <td>50 employés</td>
                <td>80 000 €</td>
                <td><strong>+ 16 000 €</strong></td>
            </tr>
            <tr>
                <td>100 employés</td>
                <td>160 000 €</td>
                <td><strong>+ 32 000 €</strong></td>
            </tr>
        </tbody>
    </table>
</section>

<section>
    <div class="pricing-box">
        <span style="text-transform: uppercase; letter-spacing: 2px;">Offre Pilote Mars 2026</span>
        <div class="price">800€ <span style="font-size: 1.5rem; opacity: 0.6;">HTVA</span></div>
        <p style="margin-bottom: 2rem;">3 semaines d'implémentation intensive + 6 mois de suivi.<br><strong>3 places uniquement.</strong></p>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn-main white">Postuler pour le pilote →</a>
        <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.7;">🛡️ <strong>Garantie Jour 3 :</strong> Si ça ne colle pas, on arrête. 50% remboursé.</p>
    </div>
</section>

<section class="container" style="text-align: center;">
    <h2 class="section-title">Pourquoi <em>Marjorie Mathieu</em> ?</h2>
    <p style="max-width: 800px; margin: 0 auto 2rem; font-size: 1.1rem; color: var(--text-mid);">
        15 ans en environnement corporate. Ma méthodologie repose sur des succès européens (Alan, LDLC) et le modèle Radio Taiso pratiqué par 27 millions de Japonais. Je ne vends pas du "bien-être", je construis votre avantage compétitif.
    </p>
    <a href="https://www.linkedin.com/in/equilibreperformance/" target="_blank" style="color: var(--primary); font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--primary);">Me rejoindre sur LinkedIn →</a>
</section>

<footer>
    <svg class="logo-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 1rem;">
        <circle cx="50" cy="50" r="48" fill="#1B365D"/>
        <text x="50" y="65" font-family="Cormorant Garamond, serif" font-size="52" font-weight="500" fill="#b8b0a4" text-anchor="middle">M</text>
        <circle cx="72" cy="28" r="3" fill="#e07a5f" opacity="0.8"/>
    </svg>
    <p><strong>Marjorie Mathieu — Équilibre Performance</strong></p>
    <p><a href="mailto:hello@marjoriemathieu.be" style="color: var(--text); text-decoration: none;">hello@marjoriemathieu.be</a> | +32 477 09 18 03</p>
    <p style="font-size: 0.8rem; color: var(--text-mid); margin-top: 2rem;">© 2026 Ath, Hainaut — Belgique. Rituels quotidiens, culture d'entreprise qui retient.</p>
</footer>

</body>
</html>
