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

  // Living rotating mesh-orb — a play on the homepage hero. Each AI card
  // gets a different shape (sphere / lattice / helix / ring) so every
  // system reads as its own distinct, almost-alive organism.
  function aiVisual(p) {
    var shape = (p && p.shape) || 'orb';
    return '<div class="card-visual">' +
      '<span class="ai-orb-glow" aria-hidden="true"></span>' +
      '<canvas class="ai-orb" data-shape="' + shape + '" aria-hidden="true"></canvas>' +
    '</div>';
  }

  function videoVisual() {
    return '<div class="card-visual"><div class="visual-video">' +
      '<span class="play-btn">' +
        '<svg viewBox="0 0 24 24" fill="#f5c842" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
      '</span>' +
    '</div></div>';
  }

  // Real thumbnail with an optional play overlay (video projects).
  // `thumbLogo` renders a centered, contained wordmark instead of a cover photo.
  function imageVisual(p, withPlay) {
    var logo = p.thumbLogo;
    var theme = p.thumbTheme ? ' card-visual--' + p.thumbTheme : '';
    return '<div class="card-visual card-visual--photo' + (logo ? ' card-visual--logo' : '') + theme + '">' +
      (logo ? '<span class="logo-glow" aria-hidden="true"></span>' : '') +
      '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" decoding="async">' +
      (logo ? '' : '<span class="visual-shade" aria-hidden="true"></span>') +
      (withPlay
        ? '<span class="play-btn"><svg viewBox="0 0 24 24" fill="#f5c842" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>'
        : '') +
    '</div>';
  }

  // Real desktop screenshot wrapped in a browser-chrome frame, with an
  // optional small mobile capture inset (software/web portfolio cards).
  function screenshotVisual(p) {
    var phone = p.screenshotMobile
      ? '<span class="browser-phone" aria-hidden="true">' +
          '<img src="' + p.screenshotMobile + '" alt="" loading="lazy" decoding="async">' +
        '</span>'
      : '';
    return '<div class="card-visual card-visual--browser">' +
        '<div class="browser-frame">' +
          '<div class="browser-bar"><i></i><i></i><i></i><div class="browser-url"></div></div>' +
          '<div class="browser-shot">' +
            '<img src="' + p.screenshot + '" alt="' + p.name + '" loading="lazy" decoding="async">' +
          '</div>' +
        '</div>' +
        phone +
      '</div>';
  }

  var VISUALS = { software: softwareVisual, ai: aiVisual, video: videoVisual };

  function cardHTML(p) {
    var label = p.action === 'watch' ? 'Watch'
      : p.action === 'web' ? 'View Project'
      : p.action === 'live' ? 'Visit Live Site'
      : 'View Case Study';
    var href = p.href || ('#' + p.slug); // detail pages aren't built yet
    var external = /^https?:\/\//.test(href);
    var visual = p.screenshot
      ? screenshotVisual(p)
      : p.image
        ? imageVisual(p, p.category === 'video')
        : (VISUALS[p.category] || softwareVisual)(p);

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

    // `kind` powers the software-page filter: web builds vs. software products.
    var kind = p.layout === 'web' ? 'website' : (p.category === 'software' ? 'software' : p.category);
    return '<a class="work-card" data-category="' + p.category + '" data-kind="' + kind + '" id="' + p.slug + '" ' +
      'href="' + href + '"' + (external ? ' target="_blank" rel="noopener"' : '') +
      ' aria-label="' + label + ': ' + p.name + '">' +
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

  /* ── LIVING MESH-ORB ENGINE (AI card visuals) ──
     Different node distributions → different "organisms", all rotating. */
  function genSphere(n, r) {
    var pts = [], phi = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < n; i++) {
      var y = 1 - (i / (n - 1)) * 2, rad = Math.sqrt(1 - y * y), th = phi * i;
      pts.push({ ox: r * rad * Math.cos(th), oy: r * y, oz: r * rad * Math.sin(th) });
    }
    return pts;
  }
  function genLattice(_, r) {
    var pts = [], s = r * 0.6, g = [-1, 0, 1];
    for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) for (var k = 0; k < 3; k++) {
      pts.push({ ox: g[i] * s, oy: g[j] * s, oz: g[k] * s });
    }
    return pts;
  }
  function genHelix(n, r) {
    var pts = [], per = Math.round(n / 2), turns = 2.2;
    for (var s = 0; s < 2; s++) {
      for (var i = 0; i < per; i++) {
        var t = i / (per - 1), ang = t * turns * Math.PI * 2 + s * Math.PI;
        pts.push({ ox: Math.cos(ang) * r * 0.55, oy: (t - 0.5) * 1.9 * r, oz: Math.sin(ang) * r * 0.55 });
      }
    }
    return pts;
  }
  function genRing(n, r) {
    var pts = [], R = r * 0.86;
    for (var i = 0; i < n; i++) { var a = (i / n) * Math.PI * 2; pts.push({ ox: Math.cos(a) * R, oy: 0, oz: Math.sin(a) * R }); }
    return pts;
  }
  var ORB_SHAPES = {
    orb:     { count: 30, maxD: 0.62, gen: genSphere },
    lattice: { count: 27, maxD: 0.74, gen: genLattice },
    helix:   { count: 28, maxD: 0.52, gen: genHelix },
    ring:    { count: 26, maxD: 0.50, gen: genRing }
  };
  var ACCENT = [245, 200, 66];

  function initOrb(canvas) {
    var ctx = canvas.getContext('2d');
    var cfg = ORB_SHAPES[canvas.getAttribute('data-shape')] || ORB_SHAPES.orb;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var W = 0, H = 0, CX = 0, CY = 0, R = 0, MAXD = 0, nodes = [], dpr = 1;
    var t0 = Math.random() * 4000, raf = null, visible = true;

    function build() {
      var rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      CX = W / 2; CY = H / 2; R = Math.min(W, H) * 0.34; MAXD = R * cfg.maxD;
      nodes = cfg.gen(cfg.count, R).map(function (pt) {
        return { ox: pt.ox, oy: pt.oy, oz: pt.oz, phase: Math.random() * Math.PI * 2, speed: 0.008 + Math.random() * 0.012 };
      });
      return true;
    }

    function drawFrame(ts) {
      if (!W && !build()) return;
      ctx.clearRect(0, 0, W, H);
      var t = (ts + t0) * 0.001;
      var ay = t * 0.14 + 0.4 * Math.sin(t * 0.2);
      var ax = 0.5 * Math.sin(t * 0.17);
      var az = 0.2 * Math.sin(t * 0.13);
      var cx = Math.cos(ax), sxr = Math.sin(ax), cyr = Math.cos(ay), syr = Math.sin(ay), cz = Math.cos(az), szr = Math.sin(az);
      var proj = nodes.map(function (nd) {
        var x = nd.ox, y = nd.oy, z = nd.oz;
        var ny = y * cx - z * sxr, nz = y * sxr + z * cx; y = ny; z = nz;
        var nx = x * cyr - z * syr; nz = x * syr + z * cyr; x = nx; z = nz;
        nx = x * cz - y * szr; ny = x * szr + y * cz; x = nx; y = ny;
        var depth = (z + R) / (2 * R);
        var pulse = 0.85 + 0.15 * Math.sin(ts * 0.001 * nd.speed * 6 + nd.phase);
        return { sx: CX + x, sy: CY + y, depth: depth, pulse: pulse };
      });
      for (var i = 0; i < proj.length; i++) {
        for (var j = i + 1; j < proj.length; j++) {
          var a = proj[i], b = proj[j], dx = a.sx - b.sx, dy = a.sy - b.sy, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAXD) {
            var al = (1 - dist / MAXD) * 0.5 * ((a.depth + b.depth) / 2) * 0.8;
            ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy);
            ctx.strokeStyle = 'rgba(' + ACCENT[0] + ',' + ACCENT[1] + ',' + ACCENT[2] + ',' + al + ')';
            ctx.lineWidth = 0.8; ctx.stroke();
          }
        }
      }
      proj.forEach(function (pp) {
        var rr = (1.7 + pp.depth * 1.8) * pp.pulse, al = 0.32 + pp.depth * 0.68;
        var halo = ctx.createRadialGradient(pp.sx, pp.sy, 0, pp.sx, pp.sy, rr * 4);
        halo.addColorStop(0, 'rgba(' + ACCENT[0] + ',' + ACCENT[1] + ',' + ACCENT[2] + ',' + (al * 0.3) + ')');
        halo.addColorStop(1, 'rgba(' + ACCENT[0] + ',' + ACCENT[1] + ',' + ACCENT[2] + ',0)');
        ctx.beginPath(); ctx.arc(pp.sx, pp.sy, rr * 4, 0, Math.PI * 2); ctx.fillStyle = halo; ctx.fill();
        ctx.beginPath(); ctx.arc(pp.sx, pp.sy, rr, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + ACCENT[0] + ',' + ACCENT[1] + ',' + ACCENT[2] + ',' + al + ')'; ctx.fill();
      });
    }

    function loop(ts) { drawFrame(ts); if (visible && !reduced) raf = requestAnimationFrame(loop); }
    function start() { if (!raf && !reduced) raf = requestAnimationFrame(loop); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    build();
    // One frame immediately (covers reduced-motion: a static orb).
    requestAnimationFrame(function (ts) { drawFrame(ts); if (!reduced && visible) start(); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { visible = e.isIntersecting; if (visible) start(); else stop(); });
      }, { threshold: 0.01 }).observe(canvas);
    }
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(build, 160); });
  }

  function initOrbs() {
    var list = document.querySelectorAll('canvas.ai-orb');
    Array.prototype.forEach.call(list, function (c) {
      if (c._orb) return; c._orb = true; initOrb(c);
    });
  }

  /* ── RENDER ── */
  function renderWork(category) {
    var grid = document.getElementById('work-grid');
    if (!grid) return;
    var items = PROJECTS.filter(function (p) { return p.category === category; });
    if (category === 'software') {
      // Website builds first; software products (e.g. Zerva) sit last for now.
      // Stable sort preserves each group's data order.
      items = items.slice().sort(function (a, b) {
        return (a.layout === 'web' ? 0 : 1) - (b.layout === 'web' ? 0 : 1);
      });
    }
    grid.innerHTML = items.map(cardHTML).join('');
    initOrbs();
    initFilter(grid);
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

  /* ── CATEGORY FILTER (software page) ──
     Segmented control: All / Website Development / Software. Filters cards by
     their data-kind. No-op on pages without a #work-filter element. */
  function initFilter(grid) {
    var bar = document.getElementById('work-filter');
    if (!bar || bar._wired) return;
    bar._wired = true;
    var btns = Array.prototype.slice.call(bar.querySelectorAll('.work-filter-btn'));
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        btns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        Array.prototype.forEach.call(grid.querySelectorAll('.work-card'), function (card) {
          var show = filter === 'all' || card.getAttribute('data-kind') === filter;
          card.classList.toggle('is-filtered-out', !show);
        });
      });
    });
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
