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
  --navy: #1a2744;
  --navy-light: #243352;
  --coral: #e07a5f;
  --coral-light: #eb9980;
  --cream: #f5f0eb;
  --cream-dark: #e8dfd6;
  --silver: #b8b0a4;
  --text: #2c2c2c;
  --text-mid: #5a5a5a;
  --white: #ffffff;
  --display: 'Cormorant Garamond', Georgia, serif;
  --body: 'Outfit', -apple-system, system-ui, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--body);
  color: var(--text);
  background: var(--white);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ═══ NAV ═══ */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.1rem 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(26,39,68,0.06);
  transition: padding 0.3s, box-shadow 0.3s;
}

nav.scrolled {
  padding: 0.8rem 6%;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
}

.logo-img {
  height: 44px;
  width: 44px;
  border-radius: 50%;
}

.logo-text {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--navy);
  letter-spacing: -0.01em;
}

.nav-cta {
  background: var(--coral);
  color: var(--white);
  padding: 0.65rem 1.4rem;
  border-radius: 7px;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 3px 12px rgba(224,122,95,0.25);
}

.nav-cta:hover {
  background: var(--coral-light);
  transform: translateY(-1px);
  box-shadow: 0 5px 18px rgba(224,122,95,0.35);
}

/* ═══ HERO ═══ */
.hero {
  background: var(--navy);
  color: var(--white);
  padding: 8rem 6% 5rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 140%;
  background: radial-gradient(ellipse at center, rgba(224,122,95,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4.5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 0.5rem 1.05rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  margin-bottom: 2rem;
  width: fit-content;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ddfaa;
  box-shadow: 0 0 10px #5ddfaa;
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.hero h1 {
  font-family: var(--display);
  font-size: clamp(2.6rem, 5.2vw, 4rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both 0.2s;
}

.hero h1 strong {
  font-weight: 600;
  color: var(--coral);
  font-style: italic;
}

.hero-sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.65);
  max-width: 520px;
  line-height: 1.75;
  margin-bottom: 2.5rem;
  font-weight: 300;
  animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both 0.4s;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-actions {
  display: flex;
  gap: 1.1rem;
  flex-wrap: wrap;
  align-items: center;
  animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both 0.6s;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--coral);
  color: var(--white);
  padding: 0.95rem 2.1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  box-shadow: 0 4px 18px rgba(224,122,95,0.35);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hero:hover {
  background: var(--coral-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(224,122,95,0.45);
}

.btn-ghost {
  color: rgba(255,255,255,0.55);
  font-size: 0.86rem;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding-bottom: 3px;
  transition: all 0.2s;
}

.btn-ghost:hover {
  color: var(--white);
  border-color: rgba(255,255,255,0.7);
}

/* Hero stats */
.hero-stats {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.stat-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  backdrop-filter: blur(6px);
  animation: fadeSlideLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.stat-card:nth-child(1) { animation-delay: 0.3s; }
.stat-card:nth-child(2) { animation-delay: 0.5s; }
.stat-card:nth-child(3) { animation-delay: 0.7s; }

@keyframes fadeSlideLeft {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: rgba(224,122,95,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-num {
  font-family: var(--display);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--white);
  line-height: 1.1;
}

.stat-label {
  font-size: 0.74rem;
  color: rgba(255,255,255,0.52);
  margin-top: 2px;
  line-height: 1.4;
}

.stat-source {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.3);
  margin-top: 3px;
}

/* ═══ BELGIUM STRIP ═══ */
.belgium {
  background: var(--cream);
  padding: 3rem 6%;
  display: flex;
  justify-content: center;
  gap: clamp(2rem, 6vw, 5.5rem);
  flex-wrap: wrap;
}

.bel-item {
  text-align: center;
  max-width: 240px;
}

.bel-num {
  font-family: var(--display);
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--navy);
  line-height: 1.1;
  margin-bottom: 0.4rem;
}

.bel-label {
  font-size: 0.8rem;
  color: var(--text-mid);
  line-height: 1.5;
}

.bel-source {
  font-size: 0.66rem;
  color: var(--silver);
  margin-top: 0.3rem;
}

/* ═══ SECTIONS ═══ */
section {
  padding: 6rem 6%;
}

.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--coral);
  margin-bottom: 0.8rem;
}

.section-label::before {
  content: '';
  width: 22px;
  height: 2px;
  background: var(--navy);
  border-radius: 1px;
}

h2.title {
  font-family: var(--display);
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  font-weight: 400;
  color: var(--navy);
  line-height: 1.2;
  letter-spacing: -0.015em;
}

h2.title em {
  font-style: italic;
  color: var(--coral);
  font-weight: 500;
}

.section-head {
  max-width: 640px;
  margin: 0 auto 3.5rem;
  text-align: center;
}

.section-head p {
  color: var(--text-mid);
  margin-top: 1rem;
  font-size: 0.96rem;
  font-weight: 300;
  line-height: 1.7;
}

/* ═══ RITUELS ═══ */
.rituels {
  background: var(--white);
}

.rituels-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.3rem;
}

.ritual-card {
  border: 1px solid var(--cream-dark);
  border-radius: 18px;
  padding: 2rem 1.8rem;
  position: relative;
  background: var(--white);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ritual-card:hover {
  border-color: var(--coral);
  box-shadow: 0 8px 32px rgba(26,39,68,0.08);
  transform: translateY(-3px);
}

.ritual-num {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-family: var(--display);
  font-size: 2.8rem;
  font-weight: 300;
  color: var(--cream-dark);
  line-height: 1;
}

.ritual-meta {
  font-size: 0.7rem;
  color: var(--coral);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 0.6rem;
}

.ritual-card h3 {
  font-family: var(--display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.ritual-card p {
  font-size: 0.84rem;
  color: var(--text-mid);
  line-height: 1.7;
  font-weight: 300;
}

.ritual-impact {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.1rem;
  background: rgba(26,39,68,0.06);
  color: var(--navy);
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.73rem;
  font-weight: 500;
}

/* ═══ PHASES ═══ */
.phases {
  background: var(--cream);
}

.phases-inner {
  max-width: 760px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: linear-gradient(to bottom, var(--navy), var(--coral));
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid var(--cream);
  box-shadow: 0 2px 10px rgba(26,39,68,0.15);
}

.dot-navy { background: var(--navy); }
.dot-coral { background: var(--coral); }
.dot-green { background: #5ddfaa; }

.timeline-box {
  background: var(--white);
  border: 1px solid rgba(26,39,68,0.08);
  border-radius: 14px;
  padding: 1.5rem 1.7rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.timeline-tag {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--coral);
  margin-bottom: 0.3rem;
}

.timeline-box h3 {
  font-family: var(--display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 0.4rem;
}

.timeline-box p {
  font-size: 0.82rem;
  color: var(--text-mid);
  font-weight: 300;
  line-height: 1.7;
}

.timeline-duration {
  display: inline-block;
  margin-top: 0.6rem;
  background: var(--cream);
  color: var(--text-mid);
  padding: 0.25rem 0.65rem;
  border-radius: 5px;
  font-size: 0.71rem;
  font-weight: 500;
}

/* ═══ ROI ═══ */
.roi {
  background: var(--white);
}

.roi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;
  max-width: 820px;
  margin: 0 auto 1.8rem;
}

.roi-card {
  background: var(--cream);
  border-radius: 16px;
  padding: 2rem 1.4rem;
  text-align: center;
  border: 1px solid var(--cream-dark);
  transition: all 0.3s;
}

.roi-card:hover {
  border-color: var(--coral);
  box-shadow: 0 6px 24px rgba(26,39,68,0.06);
}

.roi-size {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-mid);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 0.7rem;
}

.roi-saving {
  font-family: var(--display);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--navy);
  line-height: 1.1;
}

.roi-label {
  font-size: 0.76rem;
  color: var(--text-mid);
  margin-top: 0.35rem;
  font-weight: 300;
}

.roi-note {
  text-align: center;
  font-size: 0.78rem;
  color: var(--silver);
  font-style: italic;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ═══ GARANTIE ═══ */
.garantie-wrap {
  padding: 0 6% 4rem;
}

.garantie {
  max-width: 1100px;
  margin: 0 auto;
  background: var(--navy);
  border-radius: 22px;
  padding: 3.5rem 4rem;
  display: flex;
  gap: 2.8rem;
  align-items: center;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.garantie::after {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: rgba(255,255,255,0.03);
}

.garantie-shield {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: rgba(224,122,95,0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.garantie-content {
  position: relative;
  z-index: 1;
}

.garantie-content h3 {
  font-family: var(--display);
  font-size: 1.9rem;
  font-weight: 400;
  margin-bottom: 0.6rem;
}

.garantie-content p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  font-weight: 300;
  line-height: 1.8;
  max-width: 560px;
}

/* ═══ PILOTE WHY ═══ */
.pilote-why {
  padding: 4.5rem 6%;
  background: var(--cream);
}

.pilote-why-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.pilote-why h3 {
  font-family: var(--display);
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--navy);
  margin-bottom: 1rem;
}

.pilote-why p {
  font-size: 0.92rem;
  color: var(--text-mid);
  line-height: 1.85;
  font-weight: 300;
  max-width: 620px;
  margin: 0 auto;
}

/* ═══ PRICING ═══ */
.pricing {
  padding: 6rem 6%;
  background: var(--white);
}

.pricing-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.pricing-card {
  background: var(--navy);
  border-radius: 24px;
  padding: 3.5rem 3rem;
  color: var(--white);
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
}

.pricing-card::before {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -80px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(224,122,95,0.09);
}

.pricing-card::after {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255,255,255,0.03);
}

.pricing-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(224,122,95,0.16);
  border: 1px solid rgba(224,122,95,0.28);
  color: var(--coral-light);
  padding: 0.4rem 0.9rem;
  border-radius: 22px;
  font-size: 0.73rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
  position: relative;
  z-index: 1;
}

.pricing-amount {
  position: relative;
  z-index: 1;
}

.amount-num {
  font-family: var(--display);
  font-size: 4.2rem;
  font-weight: 300;
  line-height: 1;
}

.amount-currency {
  font-size: 2rem;
  vertical-align: top;
  opacity: 0.6;
  margin-right: 4px;
}

.amount-sub {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.48);
  margin-top: 0.4rem;
  font-weight: 300;
}

.pricing-divider {
  width: 50px;
  height: 1px;
  background: rgba(255,255,255,0.16);
  margin: 1.8rem auto;
}

.pricing-includes {
  position: relative;
  z-index: 1;
  list-style: none;
  text-align: left;
  max-width: 420px;
  margin: 0 auto 2rem;
}

.pricing-includes li {
  font-size: 0.84rem;
  color: rgba(255,255,255,0.72);
  padding: 0.4rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-weight: 300;
}

.pricing-includes li::before {
  content: '✓';
  color: var(--coral);
  font-weight: 700;
  flex-shrink: 0;
  font-size: 0.8rem;
  margin-top: 2px;
}

.btn-pricing {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--coral);
  color: var(--white);
  padding: 1rem 2.4rem;
  border-radius: 9px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.96rem;
  box-shadow: 0 4px 20px rgba(224,122,95,0.4);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.btn-pricing:hover {
  background: var(--coral-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 26px rgba(224,122,95,0.5);
}

.pricing-places {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.2rem;
  background: rgba(224,122,95,0.13);
  color: var(--coral-light);
  padding: 0.32rem 0.75rem;
  border-radius: 6px;
  font-size: 0.71rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.pricing-contact {
  margin-top: 1.4rem;
  position: relative;
  z-index: 1;
}

.pricing-contact a {
  color: rgba(255,255,255,0.42);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.2s;
}

.pricing-contact a:hover {
  color: rgba(255,255,255,0.75);
}

/* ═══ ABOUT ═══ */
.about {
  padding: 5.5rem 6%;
  background: var(--cream);
}

.about-inner {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 3rem;
  align-items: start;
}

.about-logo-wrap {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(26,39,68,0.12);
}

.about-logo-wrap svg {
  width: 100%;
  height: 100%;
}

.about-content .section-label {
  margin-bottom: 0.6rem;
}

.about-content h3 {
  font-family: var(--display);
  font-size: 1.7rem;
  font-weight: 500;
  color: var(--navy);
  margin-bottom: 0.2rem;
}

.about-subtitle {
  font-size: 0.8rem;
  color: var(--coral);
  font-weight: 500;
  margin-bottom: 1.2rem;
}

.about-content p {
  font-size: 0.86rem;
  color: var(--text-mid);
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 0.7rem;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.2rem;
}

.about-tags span {
  background: rgba(26,39,68,0.07);
  color: var(--navy);
  padding: 0.25rem 0.7rem;
  border-radius: 5px;
  font-size: 0.71rem;
  font-weight: 500;
}

/* ═══ FOOTER ═══ */
footer {
  background: var(--navy);
  color: rgba(255,255,255,0.42);
  padding: 2.8rem 6%;
  text-align: center;
  font-size: 0.76rem;
  line-height: 2;
}

footer strong {
  color: rgba(255,255,255,0.75);
  font-family: var(--display);
  font-size: 1.05rem;
  font-weight: 400;
}

footer a {
  color: rgba(255,255,255,0.58);
  text-decoration: none;
  transition: color 0.2s;
}

footer a:hover {
  color: var(--white);
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 900px) {
  nav {
    padding: 1rem 5%;
  }
  
  .hero {
    padding: 7rem 5% 4rem;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .hero-stats {
    order: -1;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .stat-card {
    flex: 1;
    min-width: 150px;
    flex-direction: column;
    text-align: center;
    padding: 1.2rem 1rem;
  }
  
  .stat-icon {
    margin-bottom: 0.5rem;
  }
  
  section {
    padding: 4.5rem 5%;
  }
  
  .belgium {
    padding: 2.5rem 5%;
  }
  
  .rituels-grid {
    grid-template-columns: 1fr;
  }
  
  .roi-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
  
  .garantie {
    flex-direction: column;
    text-align: center;
    padding: 2.8rem 2rem;
  }
  
  .garantie-shield {
    margin-bottom: 1rem;
  }
  
  .pilote-why {
    padding: 3.5rem 5%;
  }
  
  .pricing {
    padding: 4.5rem 5%;
  }
  
  .pricing-card {
    padding: 2.8rem 2rem;
  }
  
  .about-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .about-logo-wrap {
    margin: 0 auto;
  }
  
  .about-tags {
    justify-content: center;
  }
}

/* ═══ SCROLL ANIMATIONS ═══ */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
</head>
<body>

<nav id="nav">
  <a href="#" class="logo">
    <svg class="logo-img" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1a2744"/>
      <text x="50" y="62" font-family="'Cormorant Garamond', serif" font-size="48" font-weight="500" fill="#b8b0a4" text-anchor="middle">M</text>
      <path d="M 70 25 Q 75 30, 70 35 Q 65 30, 70 25" fill="#e07a5f" opacity="0.7"/>
      <path d="M 80 30 Q 83 33, 80 36 Q 77 33, 80 30" fill="#e07a5f" opacity="0.6"/>
      <path d="M 75 38 Q 78 41, 75 44 Q 72 41, 75 38" fill="#e07a5f" opacity="0.5"/>
    </svg>
    <span class="logo-text">Marjorie Mathieu</span>
  </a>
  <a href="#pricing" class="nav-cta">Je teste — 800€ →</a>
</nav>

<section class="hero">
  <div class="hero-grid">
    <div>
      <div class="hero-badge">
        <span class="pulse-dot"></span>
        Pilote mars 2026 — 3 places disponibles
      </div>
      <h1>
        Arrêtez de perdre vos talents.<br>
        Construisez <strong>une culture qui les garde.</strong>
      </h1>
      <p class="hero-sub">
        En 3 semaines, j'intègre des rituels collectifs dans votre quotidien qui boostent l'engagement, la productivité et la rétention. Concret. Mesurable. Qui tient.
      </p>
      <div class="hero-actions">
        <a href="#pricing" class="btn-hero">
          Je réserve ma place →
        </a>
        <a href="#methode" class="btn-ghost">Comment ça marche ↓</a>
      </div>
    </div>
    
    <div class="hero-stats">
      <div class="stat-card">
        <div class="stat-icon">🎯</div>
        <div class="stat-content">
          <div class="stat-num">3×</div>
          <div class="stat-label">meilleure rétention avec une culture forte</div>
          <div class="stat-source">Securex / Graydon 2024</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-content">
          <div class="stat-num">+39%</div>
          <div class="stat-label">productivité — équipes engagées vs désengagées</div>
          <div class="stat-source">Securex / Graydon 2024</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-content">
          <div class="stat-num">80 000 €</div>
          <div class="stat-label">coût annuel de l'absentéisme (50 employés)</div>
          <div class="stat-source">SD Worx 2024–2025</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="belgium">
  <div class="bel-item">
    <div class="bel-num">40%</div>
    <div class="bel-label">des professionnels belges à risque d'épuisement</div>
    <div class="bel-source">AG Insurance 2024</div>
  </div>
  <div class="bel-item">
    <div class="bel-num">+44%</div>
    <div class="bel-label">d'arrêts longue durée en 5 ans</div>
    <div class="bel-source">INAMI / VRT News 2025</div>
  </div>
  <div class="bel-item">
    <div class="bel-num">2 Mds €</div>
    <div class="bel-label">versés par l'assurance indemnités en 2023</div>
    <div class="bel-source">INAMI / RTL Belgique 2025</div>
  </div>
</div>

<section class="rituels reveal" id="methode">
  <div class="section-inner">
    <div class="section-head">
      <span class="section-label">La méthode</span>
      <h2 class="title">4 rituels. <em>Dans</em> votre workflow.<br>Pas à côté.</h2>
      <p>Chaque rituel s'intègre naturellement dans votre journée — sans déranger la productivité. Au contraire, elle monte.</p>
    </div>
    
    <div class="rituels-grid">
      <div class="ritual-card">
        <span class="ritual-num">01</span>
        <div class="ritual-meta">10 min · Chaque matin</div>
        <h3>Radio Taiso</h3>
        <p>Exercices collectifs pratiqués depuis 70 ans chez Toyota. 27 millions de Japonais font ça au quotidien. Zéro entreprise belge ne l'utilise encore — c'est votre avantage.</p>
        <div class="ritual-impact">→ Cohésion équipe dès J1</div>
      </div>
      
      <div class="ritual-card">
        <span class="ritual-num">02</span>
        <div class="ritual-meta">5–10 min · 2× par jour</div>
        <h3>Pauses dynamiques</h3>
        <p>Après 90 min de concentration, le cerveau demande une pause. Étirements + respiration guidée, intégré da
