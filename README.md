<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marjorie Mathieu — Équilibre Performance</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,500&family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        /* --- RESET & VARIABLES --- */
        :root {
            --navy: #1B365D;
            --coral: #E07A5F;
            --coral-hover: #D06A50;
            --cream: #F5F0EB;
            --white: #FFFFFF;
            --text-dark: #2C2C2C;
            --text-grey: #5A5A5A;
            --border: #E8DFD6;
            
            --font-display: 'Cormorant Garamond', serif;
            --font-body: 'Outfit', sans-serif;
            --container-width: 1100px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
            font-family: var(--font-body); 
            color: var(--text-dark); 
            background-color: var(--white); 
            line-height: 1.6; 
            overflow-x: hidden; /* Empêche le scroll horizontal indésirable */
        }

        /* --- STRUCTURE & ALIGNEMENT --- */
        .container {
            max-width: var(--container-width);
            margin: 0 auto; /* Centre le bloc au milieu de l'écran */
            padding: 0 20px;
            width: 100%;
        }

        section {
            padding: 5rem 0;
        }

        /* --- TYPOGRAPHIE --- */
        h1, h2, h3 { font-family: var(--font-display); color: var(--navy); line-height: 1.2; }
        h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
        h2 { font-size: 2.8rem; margin-bottom: 2rem; }
        h3 { font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 600; }
        p { margin-bottom: 1rem; font-weight: 300; }
        strong { font-weight: 600; }
        em { font-style: italic; color: var(--coral); }
        
        .sub-head { font-size: 1.1rem; color: rgba(255,255,255,0.8); margin-bottom: 2.5rem; max-width: 500px; }
        .label { 
            display: inline-block; 
            font-size: 0.75rem; 
            font-weight: 700; 
            text-transform: uppercase; 
            letter-spacing: 2px; 
            color: var(--coral); 
            margin-bottom: 1rem;
            border-bottom: 2px solid var(--navy);
            padding-bottom: 5px;
        }

        /* --- NAVIGATION --- */
        nav {
            position: fixed;
            top: 0; width: 100%; z-index: 100;
            background: rgba(255,255,255,0.98);
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }
        .nav-inner {
            display: flex; justify-content: space-between; align-items: center;
        }
        .logo {
            font-family: var(--font-display);
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--navy);
            text-decoration: none;
            display: flex; align-items: center; gap: 10px;
        }
        .logo span { color: var(--coral); font-size: 2rem; line-height: 0; margin-top: -5px; }

        .btn {
            display: inline-block;
            background: var(--coral);
            color: white;
            padding: 0.8rem 1.6rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: transform 0.2s, background 0.2s;
        }
        .btn:hover { background: var(--coral-hover); transform: translateY(-2px); }
        .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.3); margin-left: 10px; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        /* --- HERO SECTION --- */
        .hero {
            background-color: var(--navy);
            color: white;
            padding-top: 140px; /* Espace pour la nav */
            padding-bottom: 100px;
        }
        .hero-layout {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr; /* 2 colonnes : Texte | Stats */
            gap: 4rem;
            align-items: center;
        }
        .hero h1 strong { color: var(--coral); font-style: italic; }

        /* Stats Blocks Vertical Stack */
        .stats-stack { display: flex; flex-direction: column; gap: 1rem; }
        .stat-box {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 1.2rem 1.5rem;
            border-radius: 12px;
            display: flex; align-items: center; gap: 1.5rem;
        }
        .stat-val { font-family: var(--font-display); font-size: 2.2rem; line-height: 1; color: var(--coral); font-weight: 600; min-width: 80px; }
        .stat-txt { font-size: 0.85rem; line-height: 1.4; opacity: 0.8; }

        /* --- METHODE (GRID) --- */
        .rituels-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 colonnes strictes */
            gap: 2rem;
        }
        .card {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid var(--border);
            transition: 0.3s;
        }
        .card:hover { border-color: var(--coral); box-shadow: 0 10px 30px rgba(0,0,0,0.05); transform: translateY(-5px); }
        .card-num { font-family: var(--font-display); font-size: 3rem; color: #EFEFEF; line-height: 1; margin-bottom: 1rem; font-weight: 600; }

        /* --- TIMELINE (Corrected) --- */
        .bg-cream { background-color: var(--cream); }
        
        .timeline-container {
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            padding-left: 30px;
        }
        /* La ligne verticale */
        .timeline-container::before {
            content: '';
            position: absolute;
            left: 0; top: 15px; bottom: 0;
            width: 2px;
            background: #dcdcdc;
        }
        .timeline-step { position: relative; margin-bottom: 3rem; }
        .timeline-step:last-child { margin-bottom: 0; }
        
        /* Les points */
        .dot {
            position: absolute;
            left: -38px; top: 5px;
            width: 18px; height: 18px;
            background: var(--navy);
            border: 4px solid var(--cream); /* Crée un espace autour du point */
            border-radius: 50%;
        }
        .step-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-grey); margin-bottom: 0.5rem; display: block; }

        /* --- PRICING & ROI --- */
        .roi-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 4rem;
        }
        .roi-box {
            background: var(--navy);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
        }
        .roi-big { font-size: 2.5rem; font-family: var(--font-display); color: var(--coral); display: block; }

        .pricing-card {
            max-width: 600px;
            margin: 0 auto;
            border: 2px solid var(--navy);
            border-radius: 20px;
            padding: 3rem;
            text-align: center;
            background: white;
            position: relative;
        }
        .tag-promo {
            position: absolute; top: -15px; left: 50%; transform: translateX(-50%);
            background: var(--coral); color: white; padding: 5px 15px; 
            border-radius: 20px; font-weight: 600; font-size: 0.8rem;
        }
        .price { font-size: 4rem; font-family: var(--font-display); color: var(--navy); line-height: 1; margin: 15px 0; }
        .price-sub { color: var(--text-grey); display: block; margin-bottom: 2rem; }
        
        ul.check { list-style: none; text-align: left; margin-bottom: 2rem; padding-left: 1rem; }
        ul.check li { margin-bottom: 10px; position: relative; padding-left: 25px; }
        ul.check li::before { content: '✔'; color: var(--coral); position: absolute; left: 0; }

        footer { text-align: center; padding: 3rem 0; font-size: 0.9rem; color: var(--text-grey); border-top: 1px solid var(--border); }

        /* --- RESPONSIVE MOBILE (IMPORTANT) --- */
        @media (max-width: 968px) {
            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            
            .hero-layout { grid-template-columns: 1fr; gap: 2.5rem; }
            .rituels-grid { grid-template-columns: 1fr; }
            .roi-wrapper { grid-template-columns: 1fr; }
            
            .pricing-card { padding: 2rem 1.5rem; }
            
            .container { padding: 0 25px; } /* Marge de sécurité sur mobile */
            
            .nav-cta-mobile { display: none; } /* On cache le bouton nav sur très petit écran */
        }
    </style>
</head>
<body>

    <nav>
        <div class="container nav-inner">
            <a href="#" class="logo"><span>●</span> Marjorie Mathieu</a>
            <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn nav-cta-mobile">Diagnostic Gratuit</a>
        </div>
    </nav>

    <section class="hero">
        <div class="container hero-layout">
            <div class="hero-text">
                <div class="label" style="color:white; border-color: rgba(255,255,255,0.3);">Pilote Mars 2026</div>
                <h1>Une culture qui garde vos talents. <strong>En 3 semaines.</strong></h1>
                <p class="sub-head">J'installe des rituels collectifs (Radio Taiso, Deep Work) directement dans vos workflows. Résultat : Rétention x3 et productivité +39%.</p>
                <div>
                    <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn">Réserver mon diagnostic (15 min)</a>
                    <a href="#methode" class="btn btn-outline">Voir la méthode</a>
                </div>
            </div>
            
            <div class="stats-stack">
                <div class="stat-box">
                    <span class="stat-val">x3</span>
                    <span class="stat-txt">Rétention talents<br>(Source: Securex)</span>
                </div>
                <div class="stat-box">
                    <span class="stat-val">+39%</span>
                    <span class="stat-txt">Productivité équipes engagées<br>(Source: Graydon)</span>
                </div>
                <div class="stat-box">
                    <span class="stat-val">80k€</span>
                    <span class="stat-txt">Coût absentéisme / an<br>(PME 50 pers - SD Worx)</span>
                </div>
            </div>
        </div>
    </section>

    <section id="methode">
        <div class="container">
            <span class="label">La Méthode</span>
            <h2>Des rituels, pas du blabla.</h2>
            <div class="rituels-grid">
                <div class="card">
                    <div class="card-num">01</div>
                    <h3>Radio Taiso</h3>
                    <p>10 min/jour. Rituel japonais utilisé par Toyota pour la cohésion. Zéro matériel. Réveil collectif immédiat.</p>
                </div>
                <div class="card">
                    <div class="card-num">02</div>
                    <h3>Pauses 90</h3>
                    <p>On casse la sédentarité toutes les 90 min. Respiration et étirement. Pour garder la concentration haute.</p>
                </div>
                <div class="card">
                    <div class="card-num">03</div>
                    <h3>Time Blocking</h3>
                    <p>Formation gestion du temps. On récupère 2h de productivité par jour en bloquant les interruptions.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-cream">
        <div class="container">
            <div style="text-align: center; margin-bottom: 3rem;">
                <span class="label">Accompagnement</span>
                <h2>3 semaines pour tout changer.</h2>
            </div>
            
            <div class="timeline-container">
                <div class="timeline-step">
                    <div class="dot"></div>
                    <span class="step-label">SEMAINE 1</span>
                    <h3>Diagnostic & Cadrage</h3>
                    <p>J'analyse vos flux de travail actuels et on identifie ensemble les "Ambassadeurs" internes qui porteront le projet.</p>
                </div>
                <div class="timeline-step">
                    <div class="dot"></div>
                    <span class="step-label">SEMAINE 2</span>
                    <h3>Implémentation Terrain</h3>
                    <p>Je suis avec vos équipes. On lance les rituels. On ajuste en direct. Pas de théorie, que de la pratique.</p>
                </div>
                <div class="timeline-step">
                    <div class="dot"></div>
                    <span class="step-label">SEMAINE 3</span>
                    <h3>Ancrage & Autonomie</h3>
                    <p>Passage de relais. Mise en place du tableau de bord de suivi. Garantie de sortie si insatisfait.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing">
        <div class="container">
            <div class="roi-wrapper">
                <div class="roi-box"><span class="roi-big">-20%</span><br>Absentéisme</div>
                <div class="roi-box"><span class="roi-big">100%</span><br>Opérationnel</div>
                <div class="roi-box"><span class="roi-big">20x</span><br>ROI an 1</div>
            </div>

            <div class="pricing-card">
                <div class="tag-promo">3 Places disponibles</div>
                <h2>Offre Pilote</h2>
                <div class="price">800€</div>
                <span class="price-sub">Investissement unique par entreprise</span>
                
                <ul class="check">
                    <li>Accompagnement complet 3 semaines</li>
                    <li>Formation des ambassadeurs incluse</li>
                    <li>Supports et outils fournis</li>
                    <li><strong>Garantie Jour 3 :</strong> Satisfait ou 50% remboursé</li>
                </ul>

                <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="btn" style="width: 100%;">Postuler pour le pilote</a>
                <p style="font-size: 0.8rem; color: #999; margin-top: 15px;">Offre réservée aux entreprises de 20 à 200 employés.</p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p><strong>Marjorie Mathieu — Équilibre Performance</strong></p>
            <p>hello@marjoriemathieu.be | Belgique</p>
            <p>© 2026. Tous droits réservés.</p>
        </div>
    </footer>

</body>
</html>
