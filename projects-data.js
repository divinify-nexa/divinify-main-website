/* ───────────────────────────────────────────────
   Divinify — Project data (single source of truth)
   Consumed by work.js (category grids) and project.js (detail pages).

   Video projects carry extra case-study fields:
     client, location, services[], deliverables[], timeline{}, overview[],
     testimonial{quote,author}, liveUrl, video (embed URL — empty for now),
     page (clean filename), href (detail page).
─────────────────────────────────────────────── */
window.PROJECTS = [
  /* ── Software & Web ── */
  {
    slug: 'zerva-ats', name: 'Zerva ATS', category: 'software', tag: 'Software',
    description: 'Multi-tenant applicant tracking system for high-volume sales hiring, built on Next.js + Supabase with AI résumé scoring, a visual pipeline, and real-time analytics.',
    stat: 'Every hiring pipeline in one dashboard', action: 'case',
    image: './Assets/zerva-wordmark-light.png', thumbLogo: true, thumbTheme: 'indigo',

    /* ── Walkthrough case study ── */
    layout: 'walkthrough',
    page: 'zerva-ats', href: 'zerva-ats.html',
    liveUrl: 'https://zerva-core.vercel.app/dashboard',
    tagline: 'AI-assisted applicant tracking, application to onboarded hire',
    summary: 'A production-grade recruitment operations platform that takes candidates from first application to onboarded team member — with AI résumé scoring, a stage-based pipeline, scheduling, outreach, and analytics in one workspace.',
    overview: [
      "Zerva is a recruitment operations platform built for high-volume, sales-style hiring. It gives a recruiting team one place to source, score, interview, and hire candidates — then promote the best of them straight onto a sales team.",
      "It's a real SaaS product, not a clickable mockup: a live Postgres backend with authentication, row-level security, real email delivery, and Anthropic's Claude scoring every résumé against each workspace's own hiring criteria. Every workspace's data is fully isolated and secure."
    ],
    metrics: [
      { value: '0–100', label: 'AI fit score per résumé' },
      { value: '5-stage', label: 'Source-to-hire pipeline' },
      { value: 'Multi-tenant', label: 'Isolated, secure workspaces' },
      { value: 'Real-time', label: 'Sync across every view' }
    ],
    stack: [
      'Next.js (App Router)', 'React 19', 'Tailwind CSS', 'Radix UI',
      'Supabase · Postgres', 'Row-level security', 'Anthropic Claude (Opus)',
      'Resend email', 'Bespoke SVG charts', 'Vercel'
    ],
    /* Each feature renders a browser mockup. `image` points to a real screenshot
       under ./Assets/zerva/; until that file exists the SVG schematic shows. */
    features: [
      {
        shot: 'dashboard', path: '/dashboard', tag: 'Command center', title: 'Executive dashboard',
        image: './Assets/zerva/dashboard.jpg',
        desc: 'A real-time command center: interview bookings split by round, the hiring funnel in three switchable views (ribbon, bars, or board), upcoming events, and a smart "Recommended Next Actions" list that surfaces no-shows, unlogged outcomes, and the biggest bottleneck.'
      },
      {
        shot: 'pipeline', path: '/applicants', tag: 'Intake', title: 'New applicants',
        image: './Assets/zerva/applicants.jpg',
        desc: 'Every incoming application in one sortable table — source, date applied, AI score, and status — with one-tap call, email, and SMS actions and loop tracking, so no candidate slips through. Candidates flow on through First Round → Second Round → Hire, with a separate Unresponsive track.'
      },
      {
        shot: 'calendar', path: '/calendar', tag: 'Scheduling', title: 'Interview calendar',
        image: './Assets/zerva/calendar.jpg',
        desc: 'A full month / week / list calendar of every scheduled interview across funnels, color-coded by round and outcome and synced with the pipeline — so the whole team sees the same source of truth.'
      },
      {
        shot: 'calendar', path: '/schedule', tag: 'Booking', title: 'Schedule & assign',
        image: './Assets/zerva/schedule.jpg', fit: 'contain',
        desc: 'Book an interview in seconds: pick the round, then the date, time, and assignee from one focused modal that writes straight to the calendar — first and second rounds tracked independently.'
      },
      {
        shot: 'analytics', path: '/reports', tag: 'Reporting', title: 'Recruitment report',
        image: './Assets/zerva/reporting.jpg',
        desc: 'A full view of the hiring flow: applicants over time, outcome mix, pipeline-by-stage conversion, interview activity, and exactly where candidates drop out — all from bespoke, dependency-free charts.'
      },
      {
        shot: 'messaging', path: '/reports/messaging', tag: 'Outreach', title: 'Messaging report',
        image: './Assets/zerva/messaging.jpg',
        desc: 'Outreach volume across SMS and email, the channel split, and which saved templates are doing the work — with per-template send counts so the team doubles down on what converts.'
      },
      {
        shot: 'scoring', path: '/assignments', tag: 'Team', title: 'Team assignments',
        image: './Assets/zerva/assignments.jpg',
        desc: 'Interview load per rep at a glance — appointments booked, reps carrying interviews, idle reps, and unassigned appointments — so coverage stays balanced and nothing falls between the cracks.'
      },
      {
        shot: 'messaging', path: '/settings', tag: 'Workspace', title: 'Settings & templates',
        image: './Assets/zerva/settings.jpg', fit: 'contain',
        desc: 'Workspace controls for company info, branding, applicant scoring, and reusable SMS/email templates with merge fields — so every rep sends consistent, on-brand outreach from one source.'
      }
    ],
    more: [
      { title: 'Team & HR management', desc: 'Manage reps with active / former states, see assignment counts, and promote a hire straight onto the roster.' },
      { title: 'Workspace branding', desc: 'Tabbed settings for company info, logo + accent color, and scoring config — with logos that recolor for light and dark themes.' },
      { title: 'AI cost controls', desc: 'A platform dashboard tracks AI usage and spend per workspace, with hard monthly ceilings so costs never run away.' },
      { title: 'Bulk actions & export', desc: 'Select many candidates to move, reject, or export at once; CSV and PDF export with configurable columns.' }
    ]
  },

  /* ── Website builds & refreshes ──
     Anonymized client work. The card shows a browser-frame desktop screenshot;
     `layout: 'web'` renders a light overview page (project.js) with the who /
     what / why and mobile screenshots. `liveUrl` powers the "Visit live site"
     button on that page. */
  {
    slug: 'construction-brand-site', name: 'Construction Brand Site', category: 'software', tag: 'Web Development',
    description: "Complete new website build for a residential and commercial construction company, designed for a premium, professional feel that positions them as a serious market competitor. Clean, credible, and expertise-forward.",
    action: 'web', layout: 'web', page: 'construction-brand-site', href: 'construction-brand-site.html',
    liveUrl: 'https://www.capitaldevelopmenthomes.com/',
    screenshot: './Assets/web/web-construction.jpg', screenshotMobile: './Assets/web/web-construction-m.jpg',
    mobileShots: ['./Assets/web/web-construction-m.jpg', './Assets/web/web-construction-m2.jpg'],
    summary: 'A premium brand site that positions a growing builder as a serious market competitor.',
    client: 'A residential and commercial construction company building custom homes and commercial spaces across metro Atlanta.',
    services: ['Web Design', 'Development', 'Responsive Build', 'Copywriting', 'Brand Direction'],
    overview: [
      "We designed and built a brand-new website from the ground up — a clean, credible, expertise-forward presence built to make a growing builder look like an established market leader.",
      "Confident typography, a clear service architecture, and real project imagery carry the brand, with fast, fully responsive pages and calls-to-action that route serious inquiries straight to the team."
    ],
    benefit: "The new site repositions the company as a premium, serious competitor — earning trust on first impression and turning more visitors into qualified project leads."
  },
  {
    slug: 'roofing-brand-site', name: 'Roofing Brand Site', category: 'software', tag: 'Web Development',
    description: "Complete new website build for a residential and commercial roofing company, built with an edgy, sleek aesthetic that commands authority in a competitive market. Sleek, modern, and professional.",
    action: 'web', layout: 'web', page: 'roofing-brand-site', href: 'roofing-brand-site.html',
    liveUrl: 'https://www.elevatedsolutionsrd.com/',
    screenshot: './Assets/web/web-roofing.jpg', screenshotMobile: './Assets/web/web-roofing-m.jpg',
    mobileShots: ['./Assets/web/web-roofing-m.jpg', './Assets/web/web-roofing-m2.jpg'],
    summary: 'An edgy, authority-commanding presence for a competitive roofing market.',
    client: 'A residential and commercial roofing company serving metro Atlanta and all of Georgia.',
    services: ['Web Design', 'Development', 'Responsive Build', 'Motion', 'Lead Capture'],
    overview: [
      "A complete new-build website with an edgy, sleek aesthetic engineered to command authority in a crowded roofing market.",
      "Bold dark UI, sharp motion, and a confident layout separate the brand from the templated competition, while quote and contact flows are surfaced at every scroll depth."
    ],
    benefit: "The site gives the company a premium, authoritative presence that justifies higher-value work and drives more quote requests from the homeowners and businesses they want."
  },
  {
    slug: 'direct-sales-recruiting-site', name: 'Direct Sales Recruiting Site', category: 'software', tag: 'Web Development',
    description: "Full website refresh for a direct sales organization, designed with an earthy, warm tone that reflects the team's culture and builds trust with recruits. Personal, warm, and professional.",
    action: 'web', layout: 'web', page: 'direct-sales-recruiting-site', href: 'direct-sales-recruiting-site.html',
    liveUrl: 'https://www.horizonsalesolutions.com/',
    screenshot: './Assets/web/web-sales-1.jpg', screenshotMobile: './Assets/web/web-sales-1-m.jpg',
    mobileShots: ['./Assets/web/web-sales-1-m.jpg', './Assets/web/web-sales-1-m2.jpg'],
    summary: 'A warm, people-first refresh that builds trust with recruits.',
    client: 'A direct sales organization focused on recruiting and developing the next generation of entrepreneurs.',
    services: ['Web Design', 'Refresh', 'Responsive Build', 'Copywriting', 'Recruiting UX'],
    overview: [
      "A full website refresh built around an earthy, warm tone that mirrors the team's culture.",
      "Approachable typography, soft gradients, and people-first copy make the brand feel personal and trustworthy, with clear recruiting pathways guiding prospects toward joining."
    ],
    benefit: "The warmer, more human presence builds immediate trust with recruits — making the organization feel like a place people want to belong, and lifting recruiting conversions."
  },
  {
    slug: 'sales-team-site-refresh', name: 'Sales Team Site Refresh', category: 'software', tag: 'Web Development',
    description: "Full website refresh for a high-performing direct sales team, built to feel inviting and polished while balancing personality with professionalism. Sleek, inviting, and modern.",
    action: 'web', layout: 'web', page: 'sales-team-site-refresh', href: 'sales-team-site-refresh.html',
    liveUrl: 'https://www.firstcoastsalesgroup.com/',
    screenshot: './Assets/web/web-sales-2.jpg', screenshotMobile: './Assets/web/web-sales-2-m.jpg',
    mobileShots: ['./Assets/web/web-sales-2-m.jpg', './Assets/web/web-sales-2-m2.jpg'],
    summary: 'An inviting, polished refresh balancing personality and professionalism.',
    client: 'A high-performing, privately owned direct sales team headquartered in Jacksonville, Florida.',
    services: ['Web Design', 'Refresh', 'Responsive Build', 'Copywriting', 'Brand Cues'],
    overview: [
      "A full website refresh built to feel inviting and polished while balancing personality with professionalism.",
      "A clean, modern layout, coastal brand cues, and clear team storytelling present the group as both approachable and serious."
    ],
    benefit: "The refreshed site elevates how the team is perceived — inviting enough to attract new talent, polished enough to earn client and partner confidence."
  },
  {
    slug: 'sales-org-rebrand-site', name: 'Sales Org Rebrand', category: 'software', tag: 'Web Development',
    description: "Full website refresh for a competitive direct sales company, designed with a dominant, minimal aesthetic that emphasizes team identity and performance culture. Minimal, competitive, and community-driven.",
    action: 'web', layout: 'web', page: 'sales-org-rebrand-site', href: 'sales-org-rebrand-site.html',
    liveUrl: 'https://w1nsalesinc.com/',
    screenshot: './Assets/web/web-sales-3.jpg', screenshotMobile: './Assets/web/web-sales-3-m.jpg',
    mobileShots: ['./Assets/web/web-sales-3-m.jpg', './Assets/web/web-sales-3-m2.jpg'],
    summary: 'A dominant, minimal rebrand built around team identity and performance.',
    client: 'A competitive direct sales company built on team identity and a performance culture.',
    services: ['Web Design', 'Refresh', 'Responsive Build', 'Brand System', 'Performance Messaging'],
    overview: [
      "A full website refresh with a dominant, minimal aesthetic that puts team identity and performance front and center.",
      "A black-and-gold system, restrained layout, and strong typographic hierarchy communicate discipline and a winning culture without clutter."
    ],
    benefit: "The minimal, dominant design reinforces the company's competitive identity — projecting strength and culture that attracts driven recruits and signals a team that performs."
  },

  /* ── AI & Automation ── */
  {
    slug: 'n8n-workflow-engine', name: 'n8n Workflow Engine', category: 'ai', tag: 'AI & Automation', shape: 'lattice',
    description: 'Automated applicant fan-out: Google Drive folder creation, Sheets logging, and Gmail notifications, all triggered by a single form submission.',
    stat: 'Reduced applicant intake time by 60%', action: 'case'
  },
  {
    slug: 'robly-ai-agent', name: 'Robly AI Agent', category: 'ai', tag: 'AI & Automation', shape: 'orb',
    description: 'AI-powered email campaign intelligence layer built in n8n with a Slack interface. Analyzes performance and surfaces optimization recommendations.',
    stat: 'Campaign insights delivered in Slack', action: 'case'
  },
  {
    slug: 'voice-ai-integration', name: 'Voice AI Integration', category: 'ai', tag: 'AI & Automation', shape: 'helix',
    description: 'Bilingual (English/Spanish) voice agent built with Retell AI + ElevenLabs for a commercial real estate firm, handling inbound lead qualification.',
    stat: '24/7 bilingual lead qualification', action: 'case'
  },

  /* ── Video Production ──
     Thumbnails are currently hot-linked from the old Squarespace CDN.
     `video` is the embed URL once videos move to Mux/Cloudflare Stream;
     until then the play button opens `liveUrl`. */
  {
    slug: 'swift-running', page: 'swiftrunning', name: 'Swift Running',
    category: 'video', tag: 'Video Production',
    tagline: 'Bold • Explosive • Driven • Performance',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/6ca79d52-d414-4a66-b97d-99cbd86cebd7/19.jpg?format=1500w',
    href: 'swiftrunning.html', liveUrl: 'https://www.divinify.io/swiftrunning', video: 'https://player.vimeo.com/video/1203879793?autoplay=1', action: 'watch',
    client: 'Swift Running — performance footwear, built on one promise: Fly Free.',
    location: 'United States',
    services: ['Video Production', 'Drone', 'Editing', 'Talent Casting', 'Location Scouting', 'Voiceover', 'Scripting', 'Photography'],
    deliverables: ['Primary brand film', 'Three testimonial films'],
    timeline: { crew: '3', turnaround: '2 weeks', onsite: '16 hrs', post: '20 hrs' },
    overview: [
      "Swift Running came to us with a name, a motto — Fly Free — and the ambition to put their story on screen for the first time. We built the brand's debut film end to end: shaping the narrative, casting the runners, scouting locations, and crafting a look defined by precision and pure athletic focus.",
      "A tight crew captured product detail, lifestyle motion, and drone visuals, then shaped it in the edit into a hero brand film and three testimonial pieces — fast, free, and built to move."
    ],
    testimonial: null
  },
  {
    slug: 'sole-play', page: 'soleplay', name: 'Sole Play',
    category: 'video', tag: 'Video Production',
    tagline: 'Cultural • Unified • Edgy • Fashion',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/aa9fa90c-732f-4181-9277-a83533cf37eb/DSC04868.jpg?format=1500w',
    href: 'soleplay.html', liveUrl: 'https://www.divinify.io/soleplay', video: 'https://player.vimeo.com/video/1203884103?autoplay=1', action: 'watch',
    client: 'Sole Play ATL — an Atlanta streetwear boutique blending exclusive footwear, gaming, and community.',
    location: 'Atlanta, Georgia',
    services: ['Video Production', 'Lighting', 'Photography', 'Editing', 'Talent Coordination', 'Location Scouting', 'Crew Sourcing', 'Conceptualization'],
    deliverables: ['Launch campaign film', 'Photography set'],
    timeline: { crew: '4', turnaround: '2 weeks', onsite: '8 hrs', post: '16 hrs' },
    overview: [
      "Sole Play ATL lives at the intersection of sneaker culture, gaming, and community — so a standard product video was never going to cut it. We tied a sneaker release directly to Atlanta's gaming scene, celebrating the misfits and creative rebels who keep the city's culture moving.",
      "From concept and location scouting to lighting, interviews, audio, photography, and the final edit, our four-person crew handled the full build over two weeks. The work didn't just look good — it pulled people in, lifted the brand, and turned attention into sales."
    ],
    testimonial: null
  },
  {
    slug: 'transcend-roofing', page: 'transcendroofing', name: 'Transcend Roofing',
    category: 'video', tag: 'Video Production',
    tagline: 'Creative • Original • Trendy • Strategic',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/d58e3207-5109-4b76-bdc5-4ac97d26e6d9/Screenshot+2025-05-29+at+1.43.39%E2%80%AFPM.png?format=1000w',
    href: 'transcendroofing.html', liveUrl: 'https://www.divinify.io/transcendroofing', action: 'watch',
    videos: [
      { url: 'https://player.vimeo.com/video/1203881587?autoplay=1', poster: 'https://vumbnail.com/1203881587.jpg', title: 'Transcend Roofing Trip Hype Recap' },
      { url: 'https://player.vimeo.com/video/1203883374?autoplay=1', poster: 'https://vumbnail.com/1203883374.jpg', title: 'Team Meeting Recap' }
    ],
    client: 'Transcend Roofing Systems — a faith-based roofing company serving greater Atlanta from Cumming, GA.',
    location: 'Cumming, Georgia',
    services: ['Video Production', 'Photography', 'Editing', 'Audio', 'Drone', 'Conceptualization'],
    deliverables: ['Branded brand films', 'Social-first reels'],
    timeline: null,
    overview: [
      "Roofing content has a reputation for being forgettable. Transcend Roofing wanted the opposite — a presence that actually stops the scroll. We built a consistent content system pairing high-impact brand films with trending, social-first reels, all aligned to who they are.",
      "The goal was twofold: elevate the brand and generate real leads. By treating a roofing company like a brand worth watching, the work broke the mold of traditional industry content and gave Transcend a digital presence that matches the quality of their builds."
    ],
    testimonial: null
  },
  {
    slug: 'capital-development', page: 'capitaldevelopment', name: 'Capital Development',
    category: 'video', tag: 'Video Production',
    tagline: 'Strategic • Professional • Consistent • Coordinated',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/7b7e5aec-6955-4982-8f70-2e872167aebc/DSC01761.jpg?format=1500w',
    href: 'capitaldevelopment.html', liveUrl: 'https://www.divinify.io/capitaldevelopment', video: '', action: 'watch',
    client: 'Capital Development — a builder delivering high-quality residential and commercial projects.',
    location: 'Atlanta, Georgia',
    services: ['Video Production', 'Photography', 'Editing', 'Drone', 'Social Media', 'Conceptualization'],
    deliverables: ['Ongoing branded content', 'Project showcase films'],
    timeline: null,
    overview: [
      "Built on a long-term partnership, this work goes well beyond standard construction content. Capital Development builds at a high level — and the visuals had to carry that same weight.",
      "We highlighted their craftsmanship while injecting energy, style, and presence, creating content designed to be impossible to ignore. Strategic, planned imagery that separates them from competitors and reinforces the brand every time it shows up."
    ],
    testimonial: null
  },
  {
    slug: 'project-vegas', page: 'projectvegas', name: 'Project Vegas',
    category: 'video', tag: 'Video Production',
    tagline: 'Adventurous • Bold • Hype • Passionate',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/78f13cc9-546f-4968-a4db-38efa6d4d297/Screenshot+2025-05-02+at+10.30.05%E2%80%AFAM.jpg?format=1500w',
    href: 'projectvegas.html', liveUrl: 'https://www.divinify.io/projectvegas', video: 'https://player.vimeo.com/video/1203882556?autoplay=1', action: 'watch',
    client: 'Divinify — an in-house passion project.',
    location: 'Open desert',
    services: ['Video Production', 'Drone', 'FPV Drone', 'Photography', 'Editing', 'Location Scouting', 'Conceptualization'],
    deliverables: ['Cinematic short film'],
    timeline: { crew: '3', turnaround: '3 weeks', onsite: '4 hrs', post: '18 hrs' },
    overview: [
      "Project Vegas was born from pure energy — a visual time capsule of adventure, diversity, and friendship. No script and no forced narrative; just real moments captured as they happened across the open desert.",
      "A three-person crew layered cinema, drone, and FPV to bottle the feeling of the trip — fast, free, and alive. Eighteen hours in the edit turned four hours on the ground into a permanent memory worth rewatching. FPV by MemeFPV."
    ],
    testimonial: null
  },
  {
    slug: 'south-forsyth-1', page: 'southforsyth1', name: 'South Forsyth',
    category: 'video', tag: 'Video Production',
    tagline: 'Hype • Dominant • Confident • Victorious',
    image: 'https://images.squarespace-cdn.com/content/680842714352b025d2afe3ab/8a9d83fe-3613-4fcf-8dcc-61bf6a82ae14/Screenshot+2025-05-01+at+8.18.28%E2%80%AFPM.jpg?content-type=image%2Fjpeg',
    href: 'southforsyth1.html', liveUrl: 'https://www.divinify.io/southforsyth1', action: 'watch',
    videos: [
      { url: 'https://player.vimeo.com/video/1203883564?autoplay=1', poster: 'https://vumbnail.com/1203883564.jpg', title: 'South Game (3.22.24)' },
      { url: 'https://player.vimeo.com/video/1203883876?autoplay=1', poster: 'https://vumbnail.com/1203883876.jpg', title: 'Varsity Hype Video' }
    ],
    client: 'South Forsyth Soccer (War Eagles) — a GHSA Class 7A program in Cumming, GA.',
    location: 'Cumming, Georgia',
    services: ['Video Production', 'Lighting', 'Team Coordination', 'Editing', 'Conceptualization'],
    deliverables: ['Pre-season hype film', 'Championship-run film', 'Boys JV edit'],
    timeline: null,
    overview: [
      "South Forsyth Soccer is a state-championship program, and their content needed to feel like it. We built a jumbotron-ready Pre-Season Media Day hype piece designed to project pride, intimidation, and home-field edge — cinematic lighting, tight team coordination, and high-energy editing that turned a media day into a statement.",
      "We came back to capture their run at a regional title through chaotic rain, raw effort, and real emotion — a cinematic story about grit and pride from start to finish. Each project also carried a short, sharp cut tailored for the boys' JV team, so the next group up gets the same big-stage treatment."
    ],
    testimonial: { quote: 'Carter and Merritt have been such a huge blessing. They created quality videos that rival professional teams.', author: 'South Forsyth Soccer' }
  },
  {
    slug: 'jambos-donates', page: 'jambosdonates', name: 'Jambos Donates',
    category: 'video', tag: 'Video Production',
    tagline: 'Impactful • Uplifting • Heartfelt • Community',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/07d44eaa-2b58-4bc3-ab6e-726cf0b16cb6/Screenshot+2025-05-02+at+11.09.32%E2%80%AFAM.png?format=1500w',
    href: 'jambosdonates.html', liveUrl: 'https://www.divinify.io/jambosdonates', video: '', action: 'watch',
    client: 'Jambos Donates — a Buford, GA nonprofit giving new pajamas to children entering foster care.',
    location: 'Buford, Georgia',
    services: ['Conceptualization', 'Drone', 'Video Production', 'Editing'],
    deliverables: ['Golf tournament recap film'],
    timeline: null,
    overview: [
      "Jambos Donates gives brand-new pajamas to kids entering foster care — so every piece of content has to carry both energy and heart. For their golf tournament, we built a cinematic recap that captured the day's momentum and the cause behind it.",
      "Intentional storytelling, vibrant visuals, and emotional pacing turned the event into a promotional asset that shows the community impact — and makes the next one easier to fill."
    ],
    testimonial: { quote: 'We love working with Divinify! They do excellent work, and they truly care about our organization.', author: 'Jambos Donates' }
  },
  {
    slug: 'twisted-cycle', page: 'twistedcycle', name: 'Twisted Cycle',
    category: 'video', tag: 'Video Production',
    tagline: 'Relentless • Empowering • Explosive • Transformative',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/c8f8bded-4786-4f06-a840-fc1002cf753d/Screenshot+2025-05-02+at+11.13.50%E2%80%AFAM.png?format=1500w',
    href: 'twistedcycle.html', liveUrl: 'https://www.divinify.io/twistedcycle', video: '', action: 'watch',
    client: 'Twisted Cycle — an indoor cycling, HIIT, and strength studio across Georgia and Alabama.',
    location: 'Georgia & Alabama',
    services: ['Video Production', 'Audio', 'Editing', 'Conceptualization'],
    deliverables: ['Brand campaign film', 'Auburn location social cut'],
    timeline: null,
    overview: [
      "Twisted Cycle is diverse, driven, and unapologetically bold — but their content didn't show it. In a crowded fitness market, they needed video that captured the intensity and inclusivity of the room well enough to convert new members.",
      "We handled it start to finish — creative planning, filming, and editing — capturing high-energy workouts and real community, plus a social-tailored cut for their Auburn, Alabama location."
    ],
    testimonial: null
  },
  {
    slug: 'jah-and-nez', page: 'jahandnez', name: 'Jah & Nez',
    category: 'video', tag: 'Video Production',
    tagline: 'Timeless • Romantic • Elegant • Emotional',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/cbc88189-15ff-4ed8-bd77-2a5b1b466136/Screenshot+2025-05-02+at+11.28.01%E2%80%AFAM.png?format=1500w',
    href: 'jahandnez.html', liveUrl: 'https://www.divinify.io/jahandnez', video: '', action: 'watch',
    client: 'Jah & Nez — a couple ready to remember the best day of their lives.',
    location: 'Georgia',
    services: ['Video Production', 'Lighting', 'Team Coordination', 'Editing', 'Conceptualization'],
    deliverables: ['Wedding film'],
    timeline: null,
    overview: [
      "From the tears to the dance floor, Jah & Nez's wedding film captures the full arc of the day. Thoughtful pre-production made sure nothing important slipped by, and that every frame felt as intentional as the moment it held.",
      "Cinematic capture and a careful edit turned a single day into something timeless — equal parts emotional and alive, made to be revisited for years."
    ],
    testimonial: null
  },
  {
    slug: 'divinify', page: 'divinify', name: 'Divinify Clothing',
    category: 'video', tag: 'Video Production',
    tagline: 'Seamless • Earthy • Aesthetic • Fashion',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/15e16bbd-bc33-4142-9059-ef1603f6cd42/fall+drop+pic.jpeg?format=1500w',
    href: 'divinify.html', liveUrl: 'https://www.divinify.io/divinify', video: '', action: 'watch',
    client: 'Divinify Clothing — our in-house apparel brand.',
    location: 'Georgia',
    services: ['Video Production', 'Editing', 'Team Coordination', 'Conceptualization'],
    deliverables: ['Seasonal drop film'],
    timeline: null,
    overview: [
      "A spontaneous fall drop became a chance to show what we'd do for our own brand. The brief was clear: elevate a product launch beyond a marketing push — calm, cinematic, and intentional.",
      "We delivered a story-driven film with a clear visual identity — purposeful pacing, seasonal texture, and elevated motion — that drove a quick wave of engagement and sales in a short window."
    ],
    testimonial: null
  },
  {
    slug: 'eden-smoothies', page: 'edensmoothies', name: 'Eden Smoothies',
    category: 'video', tag: 'Video Production',
    tagline: 'Vibey • Tropical • Dynamic • Colorful',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/e28c9496-fed7-4e0d-b8aa-09c5c886a317/Screenshot+2025-05-02+at+11.40.45%E2%80%AFAM.png?format=1500w',
    href: 'edensmoothies.html', liveUrl: 'https://www.divinify.io/edensmoothies', video: '', action: 'watch',
    client: 'Eden Smoothies — a Georgia smoothie & juice bar (Atlanta, Marietta, Woodstock) serving 100% whole-food smoothies, bowls, and juices.',
    location: 'Atlanta · Marietta · Woodstock, GA',
    services: ['Video Production', 'Lighting', 'Team Coordination', 'Editing', 'Conceptualization'],
    deliverables: ['Brand personality film', 'Social content set'],
    timeline: null,
    overview: [
      "Eden Smoothies is fresh, tropical, and playful — and the content needed to taste like that. We captured the brand's personality, the in-store experience, and the full product lineup in entertaining, social-ready pieces.",
      "The work reflects their modern, whole-food identity and gives them a library of content built to engage their audience and pull people through the door."
    ],
    testimonial: { quote: 'They captured the essence of our brand — professional and creative throughout.', author: 'Eden Smoothies' }
  }
];
