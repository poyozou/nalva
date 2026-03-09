/* ─────────────────────────────────────────
   NALVA — Shared Header / Footer / Utilities
   ───────────────────────────────────────── */
(function () {
  'use strict';

  // ── NAV (Header) ──
  var nav = document.getElementById('nav');
  if (nav && !nav.children.length) {
    nav.innerHTML =
      '<a href="/" class="nav-logo" aria-label="Nalva">' +
        '<img src="transparent-logo-blk.png" alt="Nalva" />' +
      '</a>' +
      '<div class="nav-right">' +
        '<div class="lang-toggle" role="group" aria-label="Language">' +
          '<button class="lang-btn" data-lang-btn="ja">JA</button>' +
          '<button class="lang-btn" data-lang-btn="en">EN</button>' +
        '</div>' +
        '<a href="#contact" class="nav-contact">CONTACT</a>' +
      '</div>';
  }

  // ── FOOTER ──
  var footer = document.querySelector('footer');
  if (footer && !footer.children.length) {
    footer.innerHTML =
      '<div class="footer-inner">' +
        '<img src="transparent-logo-blk.png" alt="Nalva" style="height:22px;opacity:0.5;" />' +
        '<div class="footer-social">' +
          '<a href="https://note.com/nalva" target="_blank" rel="noopener">note</a>' +
          '<a href="https://x.com/aki_nalva" target="_blank" rel="noopener">X</a>' +
          '<a href="https://www.linkedin.com/in/akitakano/" target="_blank" rel="noopener">LinkedIn</a>' +
        '</div>' +
        '<div class="footer-right">' +
          '<p>&copy; 2026 Nalva Inc.</p>' +
          '<p data-ja>\u672C\u8CC7\u6599\u306E\u7121\u65AD\u8EE2\u7528\u30FB\u4E8C\u6B21\u5229\u7528\u306F\u3054\u9060\u616E\u304F\u3060\u3055\u3044</p>' +
          '<p data-en>Unauthorized reproduction or redistribution is prohibited.</p>' +
        '</div>' +
      '</div>';
  }

  // ── LANGUAGE TOGGLE ──
  window.setLang = function (lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
    localStorage.setItem('nalva-lang', lang);
  };

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.langBtn);
    });
  });

  // Restore saved language or use page default
  var savedLang = localStorage.getItem('nalva-lang');
  var defaultLang = document.documentElement.getAttribute('data-lang') || 'ja';
  setLang(savedLang || defaultLang);

  // ── SCROLL REVEAL ──
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
    io.observe(el);
  });
})();
