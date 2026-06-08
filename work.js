/* ───────────────────────────────────────────────
   Divinify — Work pages (shared behavior + data)
   A page sets <body data-work-category="software|ai|video">
   and includes this file; it renders that category's grid.
─────────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── PROJECT DATA ──
     Loaded from projects-data.js (window.PROJECTS) so the grid and the
     detail pages share one source of truth. */
  /** @typedef {{ slug:string, name:string, category:'software'|'ai'|'video', tag:string, description?:string, stat?:string, image?:string, tagline?:string, href?:string, action:'case'|'watch' }} Project */
  /** @type {Project[]} */
  var PROJECTS = (typeof window !== 'undefined' && window.PROJECTS) || [];

  /* ── VISUALS (no stock imagery — generated per category) ── */
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

  function softwareVisual() {
    return '' +
      '<div class="card-visual"><div class="visual-software">' +
        '<div class="browser-bar"><i></i><i></i><i></i><div class="browser-url"></div></div>' +
        '<div class="browser-body">' +
          '<div class="browser-sidebar">' +
            '<div class="ui-bar accent"></div>' +
            '<div class="ui-bar w90"></div><div class="ui-bar w70"></div>' +
            '<div class="ui-bar w90"></div><div class="ui-bar w50"></div>' +
          '</div>' +
          '<div class="browser-content">' +
            '<div class="ui-bar w50"></div>' +
            '<div class="ui-tile"></div><div class="ui-tile"></div>' +
            '<div class="ui-bar w70"></div>' +
          '</div>' +
        '</div>' +
      '</div></div>';
  }

  function aiVisual() {
    var nodes = [[40,70],[95,38],[120,98],[175,60],[205,118],[150,140],[80,128],[235,72],[60,40]];
    var edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[1,3],[3,7],[5,2],[8,1],[8,0]];
    var W = 280, H = 180, e = '', n = '';
    edges.forEach(function (pair) {
      var a = nodes[pair[0]], b = nodes[pair[1]];
      e += '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" stroke="rgba(245,200,66,0.32)" stroke-width="1"/>';
    });
    nodes.forEach(function (pt, i) {
      var r = i % 3 === 0 ? 4.5 : 3;
      n += '<circle cx="' + pt[0] + '" cy="' + pt[1] + '" r="' + (r + 3) + '" fill="rgba(245,200,66,0.10)"/>';
      n += '<circle cx="' + pt[0] + '" cy="' + pt[1] + '" r="' + r + '" fill="#f5c842"/>';
    });
    return '<div class="card-visual"><div class="visual-ai">' +
      '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      e + n + '</svg></div></div>';
  }

  function videoVisual() {
    return '<div class="card-visual"><div class="visual-video">' +
      '<span class="play-btn">' +
        '<svg viewBox="0 0 24 24" fill="#f5c842" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
      '</span>' +
    '</div></div>';
  }

  // Real thumbnail with an optional play overlay (video projects).
  function imageVisual(p, withPlay) {
    return '<div class="card-visual card-visual--photo">' +
      '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" decoding="async">' +
      '<span class="visual-shade" aria-hidden="true"></span>' +
      (withPlay
        ? '<span class="play-btn"><svg viewBox="0 0 24 24" fill="#f5c842" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>'
        : '') +
    '</div>';
  }

  var VISUALS = { software: softwareVisual, ai: aiVisual, video: videoVisual };

  function cardHTML(p) {
    var label = p.action === 'watch' ? 'Watch' : 'View Case Study';
    var href = p.href || ('#' + p.slug); // detail pages aren't built yet
    var visual = p.image
      ? imageVisual(p, p.category === 'video')
      : (VISUALS[p.category] || softwareVisual)();

    var body;
    if (p.category === 'video') {
      // Portfolio-style body: title + vibe tagline + watch link.
      var vibe = p.tagline ? '<div class="card-vibe">' + p.tagline + '</div>' : '';
      body = '<div class="card-body card-body--video">' +
          '<h2 class="card-name">' + p.name + '</h2>' +
          vibe +
          '<span class="card-link">' + label + ' ' + ARROW + '</span>' +
        '</div>';
    } else {
      var stat = p.stat ? '<div class="card-stat">' + p.stat + '</div>' : '';
      body = '<div class="card-body">' +
          '<div class="card-tag">' + p.tag.toUpperCase() + '</div>' +
          '<h2 class="card-name">' + p.name + '</h2>' +
          '<p class="card-desc">' + p.description + '</p>' +
          stat +
          '<span class="card-link">' + label + ' ' + ARROW + '</span>' +
        '</div>';
    }

    return '<a class="work-card" data-category="' + p.category + '" id="' + p.slug + '" ' +
      'href="' + href + '" aria-label="' + label + ': ' + p.name + '">' +
      visual + body +
    '</a>';
  }

  /* ── STAGGERED REVEAL ── */
  function revealCards(cards) {
    cards.forEach(function (c, i) {
      c.style.transitionDelay = (i * 60) + 'ms';
      void c.offsetWidth; // force reflow so the transition runs from the hidden state
      c.classList.add('is-visible');
      setTimeout(function () { c.style.transitionDelay = '0ms'; }, i * 60 + 600);
    });
  }

  /* ── RENDER ── */
  function renderWork(category) {
    var grid = document.getElementById('work-grid');
    if (!grid) return;
    var items = PROJECTS.filter(function (p) { return p.category === category; });
    grid.innerHTML = items.map(cardHTML).join('');
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.work-card'));

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      cards.forEach(function (c) { c.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      if (entries.some(function (en) { return en.isIntersecting; })) {
        revealCards(cards);
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    observer.observe(grid);
  }

  /* ── SHARED NAV BEHAVIOR (inherited from homepage) ── */
  function initNav() {
    var navEl = document.getElementById('mainNav');
    if (navEl) {
      window.addEventListener('scroll', function () {
        navEl.classList.toggle('scrolled', window.scrollY > 40);
      });
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
      initWorkDropdown(navEl);
    }
  }

  /* "Work" is a toggle, not a link: clicking it opens/closes the menu. */
  function initWorkDropdown(navEl) {
    var dropdown = navEl.querySelector('.nav-dropdown');
    if (!dropdown) return;
    var trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    function close() {
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var open = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close when clicking outside the dropdown (desktop).
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) close();
    });
    // Close on Escape, returning focus to the trigger.
    dropdown.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); trigger.focus(); }
    });
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

  function init() {
    initNav();
    initReveal();
    var category = document.body.getAttribute('data-work-category');
    if (category) renderWork(category);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
