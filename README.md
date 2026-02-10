<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marjorie Mathieu — Équilibre Performance | Rétention & Culture</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --navy: #1B365D;
            --coral: #e07a5f;
            --coral-light: #eb9980;
            --cream: #f5f0eb;
            --cream-dark: #e8dfd6;
            --silver: #b8b0a4;
            --text: #2c2c2c;
            --text-mid: #5a5a5a;
            --white: #ffffff;
            --display: 'Cormorant Garamond', Georgia, serif;
            --body: 'Outfit', -apple-system, sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { 
            font-family: var(--body); 
            color: var(--text); 
            background: var(--white); 
            line-height: 1.6; 
            overflow-x: hidden;
        }

        /* Utility Classes */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .container { max-width: 1140px; margin: 0 auto; padding: 0 6%; }
        em { font-family: var(--display); font-style: italic; color: var(--coral); }

        /* Navigation */
        nav { 
            position: fixed; top: 0; width: 100%; z-index: 1000; 
            padding: 1rem 6%; display: flex; justify-content: space-between; align-items: center;
            background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(27,54,93,0.05);
        }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--navy); font-family: var(--display); font-size: 1.3rem; font-weight: 500; }
        .logo svg { height: 40px; width: 40px; }
        .nav-cta { 
            background: var(--coral); color: white; padding: 0.7rem 1.3rem; 
            border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600;
            transition: 0.3s; box-shadow: 0 4px 12px rgba(224,122,95,0.2);
        }
        .nav-cta:hover { background: var(--coral-light); transform: translateY(-1px); }

        /* Hero Section */
        .hero { 
            background: var(--navy); color: white; padding: 10rem 0 6rem;
            position: relative; overflow: hidden;
        }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
        .hero h1 { font-family: var(--display); font-size: clamp(2.5rem, 5vw, 3.8rem); line-height: 1.1; margin-bottom: 1.5rem; font-weight: 400; }
        .hero h1 b { color: var(--coral); font-weight: 500; }
        .hero p { font-size: 1.15rem; opacity: 0.8; margin-bottom: 2.5rem; max-width: 550px; }
        
        .hero-stats { display: flex; flex-direction: column; gap: 1rem; }
        .stat-box { background: rgba(255,255,255,0.08); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
        .stat-num { font-family: var(--display); font-size: 2rem; color: var(--coral-light); display: block; }
        .stat-desc { font-size: 0.85rem; opacity: 0.6; }

        /* Method Section (Rituels) */
        .section-padding { padding: 7rem 0; }
        .label { color: var(--coral); font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 1rem; }
        h2 { font-family: var(--display); font-size: clamp(2rem, 4vw, 2.8rem); color: var(--navy); margin-bottom: 3rem; line-height: 1.2; }
        
        .rituels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .ritual-card { padding: 2.5rem; border: 1px solid var(--cream-dark); border-radius: 20px; transition: 0.3s; }
        .ritual-card:hover { border-color: var(--coral); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .ritual-icon { font-size: 2rem; margin-bottom: 1.5rem; display: block; }
        .ritual-card h3 { font-family: var(--display); font-size: 1.6rem; margin-bottom: 1rem; color: var(--navy); }
        .ritual-card p { font-size: 0.95rem; color: var(--text-mid); }

        /* Phases Section */
        .phases { background: var(--cream); }
        .timeline { max-width: 800px; margin: 0 auto; position: relative; padding-left: 50px; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--navy); opacity: 0.1; }
        .step { position: relative; margin-bottom: 3.5rem; }
        .step-dot { position: absolute; left: -59px; top: 0; width: 18px; height: 18px; background: var(--navy); border: 4px solid var(--cream); border-radius: 50%; }
        .step h3 { font-family: var(--display); font-size: 1.5rem; margin-bottom: 0.5rem; }
        .step-tag { font-size: 0.7rem; font-weight: 700; color: var(--coral); text-transform: uppercase; }

        /* ROI Section */
        .roi-box { background: var(--navy); color: white; padding: 4rem; border-radius: 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center; }
        .roi-item span { display: block; font-family: var(--display); font-size: 3rem; color: var(--coral-light); }

        /* Pricing & CTA */
        .pricing { text-align: center; }
        .pricing-card { 
            max-width: 600px; margin: 0 auto; padding: 4rem 3rem; 
            background: var(--white); border: 2px solid var(--navy); border-radius: 30px;
            position: relative;
        }
        .badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--coral); color: white; padding: 0.5rem 1.5rem; border-radius: 20px; font-weight: 700; font-size: 0.8rem; }
        .price { font-family: var(--display); font-size: 4.5rem; color: var(--navy); margin: 1rem 0; }
        .price-sub { display: block; font-size: 0.9rem; color: var(--text-mid); margin-bottom: 2rem; }
        .check-list { list-style: none; text-align: left; margin-bottom: 2.5rem; }
        .check-list li { margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative; font-size: 0.95rem; }
        .check-list li::before { content: '✓'; position: absolute; left: 0; color: var(--coral); font-weight: 900; }

        /* Footer */
        footer { background: #f9f9f9; padding: 4rem 0; border-top: 1px solid var(--cream-dark); text-align: center; }
        .footer-logo { font-family: var(--display); font-size: 1.5rem; color: var(--navy); text-decoration: none; margin-bottom: 1rem; display: inline-block; }

        /* Responsive */
        @media (max-width: 900px) {
            .hero-grid, .rituels-grid, .roi-box { grid-template-columns: 1fr; }
            .hero { text-align: center; padding-top: 8rem; }
            .hero p { margin-left: auto; margin-right: auto; }
            .nav-cta { display: none; } /* On cache le bouton nav sur petit mobile pour la clarté */
        }
    </style>
</head>
<body>

    <nav>
        <a href="#" class="logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="#1B365D"/>
                <text x="50" y="65" font-family="serif" font-size="52" fill="#b8b0a4" text-anchor="middle">M</text>
            </svg>
            Marjorie Mathieu
        </a>
        <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="nav-cta">Diagnostic Gratuit (15 min)</a>
    </nav>

    <section class="hero">
        <div class="container hero-grid">
            <div>
                <span class="label" style="color: var(--coral-light);">Pilote Mars 2026</span>
                <h1>Arrêtez de perdre vos talents. Bâtissez une <b>culture qui les garde.</b></h1>
                <p>En 3 semaines, j'installe des rituels quotidiens dans vos workflows qui transforment l'engagement et la productivité. Pas de séminaires, du concret.</p>
                <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="nav-cta" style="padding: 1.2rem 2.5rem; font-size: 1rem;">Réserver mon diagnostic →</a>
            </div>
            <div class="hero-stats">
                <div class="stat-box">
                    <span class="stat-num">x3</span>
                    <span class="stat-desc">de rétention avec une culture forte (Securex)</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num">+39%</span>
                    <span class="stat-desc">de productivité (équipes engagées)</span>
                </div>
                <div class="stat-box">
                    <span class="stat-num">80.000€</span>
                    <span class="stat-desc">coût moyen absentéisme / an (PME 50 pers)</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding reveal">
        <div class="container">
            <span class="label">La Méthode</span>
            <h2>Des rituels <em>opérationnels</em> intégrés dans le travail.</h2>
            <div class="rituels-grid">
                <div class="ritual-card">
                    <span class="ritual-icon">🌅</span>
                    <h3>Radio Taiso</h3>
                    <p>10 min chaque matin. Un rituel de cohésion japonaise (Toyota) pour réveiller le corps et l'esprit d'équipe. Zéro matériel.</p>
                </div>
                <div class="ritual-card">
                    <span class="ritual-icon">🔋</span>
                    <h3>Pauses 90 min</h3>
                    <p>Techniques de respiration et étirements stratégiques pour briser la sédentarité et relancer la concentration.</p>
                </div>
                <div class="ritual-card">
                    <span class="ritual-icon">🎯</span>
                    <h3>Time Blocking</h3>
                    <p>Formation à la gestion du temps collective pour protéger le travail profond et récupérer 2h de productivité par jour.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding phases">
        <div class="container">
            <div style="max-width: 700px; margin: 0 auto;">
                <span class="label">Accompagnement</span>
                <h2>3 semaines pour ancrer le changement.</h2>
                <div class="timeline">
                    <div class="step reveal">
                        <div class="step-dot"></div>
                        <span class="step-tag">Semaine 1</span>
                        <h3>Diagnostic & Cadrage</h3>
                        <p>Analyse de vos workflows et sélection des ambassadeurs internes pour garantir que les rituels survivent à mon départ.</p>
                    </div>
                    <div class="step reveal">
                        <div class="step-dot"></div>
                        <span class="step-tag">Semaine 2</span>
                        <h3>Implémentation Terrain</h3>
                        <p>Je suis avec vos équipes. On pratique, on ajuste en temps réel, on lève les résistances. L'habitude se crée.</p>
                    </div>
                    <div class="step reveal">
                        <div class="step-dot"></div>
                        <span class="step-tag">Semaine 3</span>
                        <h3>Ancrage & Autonomie</h3>
                        <p>Passage de relais aux ambassadeurs. Mise en place du tableau de bord de suivi de l'engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding reveal">
        <div class="container">
            <div class="roi-box">
                <div class="roi-item">
                    <span>-20%</span>
                    <p>D'absentéisme moyen</p>
                </div>
                <div class="roi-item">
                    <span>ROI 20x</span>
                    <p>Potentiel dès l'an 1</p>
                </div>
                <div class="roi-item">
                    <span>100%</span>
                    <p>Opérationnel</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding reveal" id="contact">
        <div class="container pricing">
            <span class="label">Offre Lancement</span>
            <h2>Prêt à transformer votre entreprise ?</h2>
            <div class="pricing-card">
                <div class="badge">Session Pilote Mars 2026</div>
                <div class="price">800€</div>
                <span class="price-sub">Prix forfaitaire pour l'entreprise (session pilote)</span>
                <ul class="check-list">
                    <li>Accompagnement intensif de 3 semaines</li>
                    <li>Formation des ambassadeurs internes (1 à 4 pers.)</li>
                    <li>Supports pédagogiques et templates inclus</li>
                    <li><b>Garantie de sortie Jour 3 :</b> Si ça ne vous convient pas, 50% remboursé sans questions.</li>
                    <li>Suivi post-implémentation pendant 6 mois</li>
                </ul>
                <a href="https://calendly.com/equilibre_performance/equilibreperformance" target="_blank" class="nav-cta" style="display: block; padding: 1.2rem; font-size: 1rem;">Postuler pour une des 3 places →</a>
                <p style="margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-mid);">*Offre réservée aux entreprises de 20 à 200 employés.</p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <a href="#" class="footer-logo">Marjorie Mathieu — Équilibre Performance</a>
            <p style="margin-bottom: 0.5rem;">hello@marjoriemathieu.be | Belgique</p>
            <p style="font-size: 0.8rem; opacity: 0.6;">© 2026 Tous droits réservés. Données sourcées : AG Insurance, INAMI, SD Worx.</p>
        </div>
    </footer>

    <script>
        // Animation au scroll (Reveal)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    </script>

</body>
</html>
