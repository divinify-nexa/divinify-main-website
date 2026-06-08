/* ───────────────────────────────────────────────
   Divinify — Project detail page renderer
   A page sets <body data-project="<slug>"> and includes
   projects-data.js + this file. We render the shared chrome
   (nav, footer) and the case-study body from window.PROJECTS.
─────────────────────────────────────────────── */
(function () {
  'use strict';

  var PROJECTS = (typeof window !== 'undefined' && window.PROJECTS) || [];

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  var ARROW_LEFT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" fill="#f5c842" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Shared chrome ── */
  function navHTML() {
    return '' +
      '<nav id="mainNav">' +
        '<a href="index.html" class="nav-logo"><img src="./Assets/divinify-logo-white.png" alt="Divinify"></a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '<div class="nav-menu" id="navMenu">' +
          '<ul class="nav-links">' +
            '<li><a href="index.html#services">Services</a></li>' +
            '<li class="nav-dropdown">' +
              '<button type="button" class="nav-dropdown-trigger active" aria-haspopup="true" aria-expanded="false">Work' +
                '<svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
              '</button>' +
              '<div class="nav-dropdown-menu">' +
                '<a href="work-software.html">Software &amp; Web Development</a>' +
                '<a href="work-ai.html">AI &amp; Automation</a>' +
                '<a href="work-video.html" class="active">Video Production</a>' +
              '</div>' +
            '</li>' +
            '<li><a href="index.html#why">Why Us</a></li>' +
            '<li><a href="index.html#founders">Founders</a></li>' +
            '<li><a href="index.html#contact">Contact</a></li>' +
          '</ul>' +
          '<a href="index.html#contact" class="nav-cta">Start a Project</a>' +
        '</div>' +
      '</nav>';
  }

  function footerHTML() {
    return '' +
      '<footer>' +
        '<div class="footer-inner">' +
          '<div class="footer-brand">' +
            '<a href="index.html" class="footer-logo"><img src="./Assets/divinify-logo-white.png" alt="Divinify"></a>' +
            '<p class="footer-tagline">Custom software, backend AI automation, and video production — built in-house.</p>' +
            '<p class="footer-location">Atlanta, Georgia</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4 class="footer-heading">Contact</h4>' +
            '<a href="mailto:info@divinify.io" class="footer-contact">info@divinify.io</a>' +
            '<a href="tel:+14707064715" class="footer-contact">470-706-4715</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4 class="footer-heading">Work</h4>' +
            '<a href="work-software.html">Software &amp; Web</a>' +
            '<a href="work-ai.html">AI &amp; Automation</a>' +
            '<a href="work-video.html">Video Production</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4 class="footer-heading">Follow</h4>' +
            '<div class="footer-socials">' +
              '<a href="https://www.instagram.com/divinify.io" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg></a>' +
              '<a href="https://www.tiktok.com/@divinify.io" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12v-3.2a5.85 5.85 0 0 0-.78-.05A5.8 5.8 0 1 0 15.64 15.4V9.01a7.3 7.3 0 0 0 4.36 1.43V7.3a4.28 4.28 0 0 1-3.4-1.48z"/></svg></a>' +
              '<a href="https://www.facebook.com/divinify.io" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom"><span class="footer-copy">© 2026 Divinify Productions LLC. All rights reserved.</span></div>' +
      '</footer>';
  }

  /* ── Case-study body ── */
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  function videoHTML(p) {
    var inner =
      '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" decoding="async">' +
      '<span class="shade" aria-hidden="true"></span>' +
      '<span class="play-btn">' + PLAY + '</span>' +
      '<span class="note">▶ Watch the film</span>';
    if (p.video) {
      // Embed-ready: clicking swaps the poster for the player.
      return '<div class="pd-video" role="button" tabindex="0" data-embed="' + esc(p.video) + '" aria-label="Play ' + esc(p.name) + '">' + inner + '</div>';
    }
    // No embed yet → open the live film in a new tab.
    return '<a class="pd-video" href="' + esc(p.liveUrl || '#') + '" target="_blank" rel="noopener" aria-label="Watch ' + esc(p.name) + '">' + inner + '</a>';
  }

  function creditCol(label, valueHTML) {
    if (!valueHTML) return '';
    return '<div><span class="pd-cred-label">' + label + '</span>' + valueHTML + '</div>';
  }

  function bodyHTML(p) {
    var overview = (p.overview || []).map(function (para) {
      return '<p>' + esc(para) + '</p>';
    }).join('');

    var client = p.client
      ? '<div class="pd-cred-val">' + esc(p.client) + '</div>'
      : '';

    var deliverables = (p.deliverables && p.deliverables.length)
      ? '<ul class="pd-checks">' + p.deliverables.map(function (d) {
          return '<li>' + CHECK + esc(d) + '</li>';
        }).join('') + '</ul>'
      : '';

    var services = (p.services && p.services.length)
      ? '<div class="pd-tags">' + p.services.map(function (s) {
          return '<span class="pd-tag">' + esc(s) + '</span>';
        }).join('') + '</div>'
      : '';

    // Order: Client / Deliverables / What we did
    var credits =
      creditCol('Client', client) +
      creditCol('Deliverables', deliverables) +
      creditCol('What we did', services);

    return '' +
      '<main>' +
        '<div class="pd-wrap pd-top">' +
          '<a class="pd-back" href="work-video.html">' + ARROW_LEFT + ' Video Work</a>' +
        '</div>' +
        '<section class="pd-hero">' +
          '<div class="pd-hero-glow" aria-hidden="true"></div>' +
          '<div class="pd-wrap">' +
            '<div class="pd-hero-inner reveal">' +
              '<span class="section-tag">Video Production</span>' +
              '<h1 class="pd-title">' + esc(p.name) + '</h1>' +
              '<div class="pd-tagline">' + esc(p.tagline || '') + '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +
        '<div class="pd-wrap pd-video-wrap reveal">' + videoHTML(p) + '</div>' +
        '<section class="pd-wrap pd-overview reveal">' +
          '<span class="section-tag">Overview</span>' + overview +
        '</section>' +
        '<section class="pd-wrap reveal">' +
          '<div class="pd-credits">' + credits + '</div>' +
        '</section>' +
        '<div class="pd-foot-space"></div>' +
        ctaHTML() +
      '</main>';
  }

  function ctaHTML() {
    return '' +
      '<section id="work-cta">' +
        '<div class="work-cta-glow" aria-hidden="true"></div>' +
        '<div class="inner">' +
          '<span class="section-tag reveal">Let\'s talk</span>' +
          '<h2 class="section-h2 reveal reveal-d1">Want work that<br>looks like this?</h2>' +
          '<p class="sub reveal reveal-d2">Tell us what you\'re building toward and we\'ll tell you how we\'d shoot it.</p>' +
          '<a href="index.html#contact" class="btn-primary reveal reveal-d3">Start a Project</a>' +
        '</div>' +
      '</section>';
  }

  function notFoundHTML(slug) {
    return '<main><div class="pd-wrap pd-top">' +
      '<a class="pd-back" href="work-video.html">' + ARROW_LEFT + ' Video Work</a>' +
      '</div><section class="pd-hero"><div class="pd-wrap"><div class="pd-hero-inner">' +
      '<h1 class="pd-title">Project not found</h1>' +
      '<div class="pd-tagline">No project matches "' + esc(slug) + '"</div>' +
      '</div></div></section>' + ctaHTML() + '</main>';
  }

  /* ── Shared nav behavior (mirrors work.js) ── */
  function initNav(root) {
    var navEl = document.getElementById('mainNav');
    if (!navEl) return;
    window.addEventListener('scroll', function () {
      navEl.classList.toggle('scrolled', window.scrollY > 40);
    });
    navEl.classList.toggle('scrolled', window.scrollY > 40);

    var toggle = document.getElementById('navToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = navEl.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      navEl.querySelectorAll('.nav-links a, .nav-cta').forEach(function (a) {
        a.addEventListener('click', function () {
          navEl.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var dropdown = navEl.querySelector('.nav-dropdown');
    var trigger = dropdown && dropdown.querySelector('.nav-dropdown-trigger');
    if (dropdown && trigger) {
      var closeDropdown = function () {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      };
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var open = dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) closeDropdown();
      });
      dropdown.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeDropdown(); trigger.focus(); }
      });
    }
  }

  function initReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // Click-to-play for embed-ready projects (no-op until a `video` URL is set).
  function initVideoEmbed() {
    var el = document.querySelector('.pd-video[data-embed]');
    if (!el) return;
    var play = function () {
      var src = el.getAttribute('data-embed');
      el.innerHTML = '<iframe src="' + src + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    };
    el.addEventListener('click', play);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
    });
  }

  function init() {
    var slug = document.body.getAttribute('data-project');
    var p = PROJECTS.filter(function (x) { return x.slug === slug; })[0];

    document.body.insertAdjacentHTML('afterbegin', navHTML());
    var main = document.createElement('div');
    main.innerHTML = p ? bodyHTML(p) : notFoundHTML(slug);
    while (main.firstChild) document.body.appendChild(main.firstChild);
    document.body.insertAdjacentHTML('beforeend', footerHTML());

    if (p && p.name && !document.title) document.title = p.name + ' — Divinify';

    initNav();
    initReveal();
    initVideoEmbed();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
