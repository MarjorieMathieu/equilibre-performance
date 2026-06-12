// ── LANG SWITCHER ──
function switchLang(lang) {
  document.body.className = lang;
  document.documentElement.lang = lang === 'fr' ? 'fr-BE' : 'en';
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  try { localStorage.setItem('ifsu_lang', lang); } catch(e) {}
}
(function() {
  var saved;
  try { saved = localStorage.getItem('ifsu_lang'); } catch(e) {}
  if (saved === 'en') { switchLang('en'); }
  else if (!saved && (navigator.language || 'fr').toLowerCase().startsWith('en')) { switchLang('en'); }
})();

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }
  });
});

// ── FAQ ACCORDÉON ──
document.querySelectorAll('.faq-question').forEach(function(q) {
  q.addEventListener('click', function() {
    var item = q.parentElement;
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
    if (!isOpen) { item.classList.add('open'); }
  });
});

// ── SCROLL REVEAL ──
(function() {
  var els = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(function(el) { io.observe(el); });
})();
