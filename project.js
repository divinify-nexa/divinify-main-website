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

  /* ── Work categories (back link + nav highlight) ── */
  var WORK = {
    software: { page: 'work-software.html', label: 'Software &amp; Web Development', back: 'Software & Web', tagLabel: 'Software & Web' },
    ai:       { page: 'work-ai.html',       label: 'AI &amp; Automation',           back: 'AI & Automation', tagLabel: 'AI & Automation' },
    video:    { page: 'work-video.html',    label: 'Video Production',               back: 'Video Work',      tagLabel: 'Video Production' }
  };

  /* ── Shared chrome ── */
  function navHTML(cat) {
    cat = WORK[cat] ? cat : 'video';
    function sub(key, page, label) {
      return '<a href="' + page + '"' + (key === cat ? ' class="active"' : '') + '>' + label + '</a>';
    }
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
                sub('software', 'work-software.html', 'Software &amp; Web Development') +
                sub('ai', 'work-ai.html', 'AI &amp; Automation') +
                sub('video', 'work-video.html', 'Video Production') +
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

  /* ───────────────────────────────────────────────
     Walkthrough layout (software / web case studies)
  ─────────────────────────────────────────────── */

  // Interface schematics — stand-ins until real screenshots are dropped
  // into each feature's `image`. Drawn dark-on-dark with accent highlights.
  var ACC = '#f5c842';
  function rect(x, y, w, h, r, fill, stroke) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 0) +
      '" fill="' + (fill || 'none') + '"' + (stroke ? ' stroke="' + stroke + '"' : '') + '/>';
  }
  var PANEL = 'rgba(255,255,255,0.045)', LINE = 'rgba(255,255,255,0.10)', INK = 'rgba(238,238,240,0.22)', INK2 = 'rgba(238,238,240,0.40)';
  function bars(x, y, vals, bw, gap, base, color) {
    return vals.map(function (v, i) {
      var h = v, bx = x + i * (bw + gap);
      return rect(bx, base - h, bw, h, 2, color || INK);
    }).join('');
  }
  function lines(x, y, w, n, gap, op) {
    var s = '';
    for (var i = 0; i < n; i++) s += rect(x, y + i * gap, (i === n - 1 ? w * 0.6 : w), 5, 2.5, op || INK);
    return s;
  }
  function svgWrap(inner) {
    return '<svg class="pd-schematic" viewBox="0 0 720 440" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden="true">' +
      rect(0, 0, 720, 440, 0, 'transparent') + inner + '</svg>';
  }

  var SHOTS = {
    dashboard: function () {
      var kpis = '';
      [40, 250, 460].forEach(function (x, i) {
        kpis += rect(x, 28, 200, 78, 12, PANEL, LINE) +
          rect(x + 18, 46, 70, 7, 3, INK) +
          rect(x + 18, 64, 96, 16, 4, i === 0 ? ACC : INK2);
      });
      // ribbon funnel
      var funnel = '';
      var ws = [320, 250, 180, 110], fy = 150;
      ws.forEach(function (w, i) {
        funnel += rect(40 + (320 - w) / 2, fy + i * 30, w, 20, 4, i === 0 ? ACC : 'rgba(245,200,66,' + (0.5 - i * 0.1) + ')');
      });
      var sidebar = rect(400, 140, 280, 270, 12, PANEL, LINE) + rect(420, 162, 120, 8, 3, INK2) +
        lines(420, 188, 240, 6, 34, INK);
      return svgWrap(kpis + rect(40, 132, 320, 158, 12, PANEL, LINE) + funnel + sidebar);
    },
    pipeline: function () {
      var cols = ['New', 'First', 'Second', 'Hire'], out = '';
      cols.forEach(function (c, i) {
        var x = 28 + i * 170;
        out += rect(x, 28, 150, 384, 12, PANEL, LINE);
        out += rect(x + 16, 46, 70, 9, 4, i === 3 ? ACC : INK2);
        for (var k = 0; k < 3 - (i === 3 ? 1 : 0); k++) {
          out += rect(x + 14, 74 + k * 86, 122, 72, 8, 'rgba(255,255,255,0.03)', LINE) +
            rect(x + 26, 92 + k * 86, 60, 7, 3, INK2) +
            rect(x + 26, 108 + k * 86, 92, 5, 2.5, INK) +
            rect(x + 26, 124 + k * 86, 30, 12, 6, i === 3 ? 'rgba(245,200,66,0.5)' : INK);
        }
      });
      return svgWrap(out);
    },
    scoring: function () {
      // gauge
      var cx = 190, cy = 210, r = 110;
      var gauge = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + LINE + '" stroke-width="16"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + ACC + '" stroke-width="16" stroke-linecap="round" stroke-dasharray="' + (2 * Math.PI * r) + '" stroke-dashoffset="' + (2 * Math.PI * r * 0.17) + '" transform="rotate(-90 ' + cx + ' ' + cy + ')"/>' +
        '<text x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="56" font-weight="300" fill="#eeeef0">87</text>' +
        '<text x="' + cx + '" y="' + (cy + 40) + '" text-anchor="middle" font-family="DM Mono, monospace" font-size="13" fill="' + INK2 + '" letter-spacing="2">FIT SCORE</text>';
      var crit = rect(380, 60, 312, 320, 12, PANEL, LINE);
      var rows = ['Experience', 'Drive', 'Team fit', 'Growth', 'Résumé'];
      var vals = [0.9, 0.75, 0.85, 0.6, 0.8];
      rows.forEach(function (_, i) {
        var y = 96 + i * 56;
        crit += rect(404, y, 90, 7, 3, INK2) +
          rect(404, y + 16, 264, 8, 4, LINE) +
          rect(404, y + 16, 264 * vals[i], 8, 4, ACC);
      });
      return svgWrap(gauge + crit);
    },
    calendar: function () {
      var grid = rect(40, 28, 640, 384, 12, PANEL, LINE);
      var heads = '';
      for (var d = 0; d < 7; d++) heads += rect(70 + d * 86, 48, 40, 7, 3, INK2);
      var cells = '', events = { 3: 1, 9: 1, 12: 1, 16: 1, 23: 1, 25: 1 };
      for (var i = 0; i < 28; i++) {
        var col = i % 7, row = Math.floor(i / 7);
        var x = 60 + col * 86, y = 76 + row * 80;
        cells += rect(x, y, 70, 66, 8, 'rgba(255,255,255,0.02)', LINE) + rect(x + 10, y + 10, 16, 6, 3, INK);
        if (events[i]) cells += rect(x + 10, y + 30, 50, 14, 4, i % 3 ? 'rgba(245,200,66,0.55)' : INK2);
      }
      return svgWrap(grid + heads + cells);
    },
    messaging: function () {
      var win = rect(120, 40, 480, 360, 14, PANEL, LINE);
      var head = rect(120, 40, 480, 56, 14, 'rgba(255,255,255,0.03)') + rect(146, 62, 140, 10, 4, INK2);
      var toField = rect(146, 118, 428, 34, 8, 'rgba(255,255,255,0.03)', LINE) + rect(166, 130, 120, 8, 4, INK);
      var chip = rect(146, 166, 110, 24, 12, 'rgba(245,200,66,0.16)', 'rgba(245,200,66,0.4)') + rect(162, 174, 70, 7, 3, ACC);
      var body = lines(146, 210, 428, 5, 26, INK);
      var send = rect(474, 346, 100, 34, 8, ACC) + rect(500, 358, 48, 9, 4, '#0b0b0b');
      return svgWrap(win + head + toField + chip + body + send);
    },
    analytics: function () {
      var card1 = rect(40, 40, 360, 360, 12, PANEL, LINE) + rect(64, 64, 120, 8, 4, INK2);
      var chart = bars(72, 0, [120, 180, 90, 210, 150, 240, 130], 30, 16, 360, INK);
      chart += bars(72, 0, [0, 0, 0, 0, 0, 240, 0], 30, 16, 360, ACC); // highlight peak
      var card2 = rect(420, 40, 260, 170, 12, PANEL, LINE) + rect(444, 64, 90, 8, 4, INK2) +
        '<polyline points="444,180 484,150 524,162 564,120 604,134 644,96" fill="none" stroke="' + ACC + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
      var card3 = rect(420, 230, 260, 170, 12, PANEL, LINE) + rect(444, 254, 90, 8, 4, INK2) + lines(444, 286, 212, 4, 26, INK);
      return svgWrap(card1 + chart + card2 + card3);
    }
  };

  function browserHTML(host, feature) {
    var screen = feature.image
      ? '<img src="' + esc(feature.image) + '" alt="' + esc(feature.title) + '" loading="lazy" decoding="async">'
      : (SHOTS[feature.shot] || SHOTS.dashboard)();
    return '<div class="pd-browser">' +
      '<div class="pd-browser-bar">' +
        '<span class="pd-dot"></span><span class="pd-dot"></span><span class="pd-dot"></span>' +
        '<span class="pd-browser-url">' + esc(host) + esc(feature.path || '') + '</span>' +
      '</div>' +
      '<div class="pd-browser-screen">' + screen + '</div>' +
    '</div>';
  }

  function walkthroughHTML(p) {
    var w = WORK[p.category] || WORK.software;
    var host = (p.liveUrl || '').replace(/^https?:\/\//, '').replace(/\/.*$/, '');

    var overview = (p.overview || []).map(function (para) {
      return '<p>' + esc(para) + '</p>';
    }).join('');

    var metrics = (p.metrics && p.metrics.length)
      ? '<div class="pd-metrics reveal">' + p.metrics.map(function (m) {
          return '<div class="pd-metric"><div class="pd-metric-val">' + esc(m.value) + '</div>' +
            '<div class="pd-metric-label">' + esc(m.label) + '</div></div>';
        }).join('') + '</div>'
      : '';

    // Interactive tour: clickable tabs on the left switch the mockup on the right.
    var features = p.features || [];
    var tabs = features.map(function (f, i) {
      return '<button class="pd-tour-tab' + (i === 0 ? ' is-active' : '') + '" data-i="' + i + '" role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '">' +
        '<span class="pd-tour-num">' + (i + 1 < 10 ? '0' + (i + 1) : (i + 1)) + '</span>' +
        '<span class="pd-tour-tab-main">' +
          '<span class="pd-tour-tag">' + esc(f.tag) + '</span>' +
          '<span class="pd-tour-name">' + esc(f.title) + '</span>' +
          '<span class="pd-tour-desc">' + esc(f.desc) + '</span>' +
        '</span>' +
      '</button>';
    }).join('');
    var shots = features.map(function (f, i) {
      return '<figure class="pd-shot' + (i === 0 ? ' is-active' : '') + '" data-i="' + i + '">' + browserHTML(host, f) + '</figure>';
    }).join('');

    var tour = features.length
      ? '<section class="pd-tour reveal" id="pdTour">' +
          '<div class="pd-wrap">' +
            '<div class="pd-tour-head">' +
              '<span class="section-tag">Inside the product</span>' +
              '<h2 class="pd-h2">A guided tour</h2>' +
            '</div>' +
            '<div class="pd-tour-grid">' +
              '<div class="pd-tour-nav" role="tablist" aria-label="Product features">' + tabs + '</div>' +
              '<div class="pd-tour-stage">' + shots + '</div>' +
            '</div>' +
          '</div>' +
        '</section>'
      : '';

    var more = (p.more && p.more.length)
      ? '<section class="pd-wrap pd-more reveal">' +
          '<span class="section-tag">Also built in</span>' +
          '<div class="pd-more-grid">' + p.more.map(function (m) {
            return '<div class="pd-more-item"><h3>' + esc(m.title) + '</h3><p>' + esc(m.desc) + '</p></div>';
          }).join('') + '</div>' +
        '</section>'
      : '';

    var stack = (p.stack && p.stack.length)
      ? '<section class="pd-wrap pd-stack-sec reveal">' +
          '<span class="section-tag">Built with</span>' +
          '<div class="pd-stack">' + p.stack.map(function (s) {
            return '<span class="pd-chip">' + esc(s) + '</span>';
          }).join('') + '</div>' +
        '</section>'
      : '';

    var live = p.liveUrl
      ? '<a class="btn-primary pd-live" href="' + esc(p.liveUrl) + '" target="_blank" rel="noopener">Explore the live product ' + ARROW + '</a>'
      : '';

    return '' +
      '<main>' +
        '<div class="pd-wrap pd-top">' +
          '<a class="pd-back" href="' + w.page + '">' + ARROW_LEFT + ' ' + w.back + '</a>' +
        '</div>' +
        '<section class="pd-hero">' +
          '<div class="pd-hero-glow" aria-hidden="true"></div>' +
          '<div class="pd-wrap">' +
            '<div class="pd-hero-inner reveal">' +
              '<span class="section-tag">' + esc(w.tagLabel) + '</span>' +
              '<h1 class="pd-title">' + esc(p.name) + '</h1>' +
              '<div class="pd-tagline">' + esc(p.tagline || '') + '</div>' +
              (p.summary ? '<p class="pd-lede">' + esc(p.summary) + '</p>' : '') +
              live +
            '</div>' +
          '</div>' +
        '</section>' +
        metrics +
        '<section class="pd-wrap pd-overview reveal">' +
          '<span class="section-tag">Overview</span>' + overview +
        '</section>' +
        tour +
        more +
        stack +
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

  // Interactive feature tour — clicking a tab cross-fades to its mockup.
  function initWalkthrough() {
    var tour = document.getElementById('pdTour');
    if (!tour) return;
    var tabs = [].slice.call(tour.querySelectorAll('.pd-tour-tab'));
    var shots = [].slice.call(tour.querySelectorAll('.pd-shot'));
    function activate(i) {
      tabs.forEach(function (t, k) {
        var on = k === i;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      shots.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { activate(i); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); (tabs[i + 1] || tabs[0]).focus(); (tabs[i + 1] || tabs[0]).click(); }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); (tabs[i - 1] || tabs[tabs.length - 1]).focus(); (tabs[i - 1] || tabs[tabs.length - 1]).click(); }
      });
    });
  }

  function init() {
    var slug = document.body.getAttribute('data-project');
    var p = PROJECTS.filter(function (x) { return x.slug === slug; })[0];

    document.body.insertAdjacentHTML('afterbegin', navHTML(p && p.category));
    var main = document.createElement('div');
    main.innerHTML = p
      ? (p.layout === 'walkthrough' ? walkthroughHTML(p) : bodyHTML(p))
      : notFoundHTML(slug);
    while (main.firstChild) document.body.appendChild(main.firstChild);
    document.body.insertAdjacentHTML('beforeend', footerHTML());

    if (p && p.name && !document.title) document.title = p.name + ' — Divinify';

    initNav();
    initReveal();
    initVideoEmbed();
    initWalkthrough();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
