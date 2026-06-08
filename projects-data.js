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
    slug: 'zerva-ats', name: 'Zerva ATS', category: 'software', tag: 'Software & Web',
    description: 'Multi-tenant applicant tracking system for D2D sales networks, built on Next.js + Supabase with role-based access and visual pipeline management.',
    stat: 'Every hiring pipeline in one dashboard', action: 'case'
  },
  {
    slug: 'recruiter-portal-system', name: 'Recruiter Portal System', category: 'software', tag: 'Software & Web',
    description: 'White-labeled recruiter portals for three sales organizations — each with custom branding, video upload, and n8n-powered automation behind the scenes.',
    stat: '3 branded portals, one codebase', action: 'case'
  },
  {
    slug: 'vpr-benefits-landing', name: 'VPR Benefits Landing', category: 'software', tag: 'Software & Web',
    description: 'Marketing landing page with GA4 tracking, Supabase telemetry, and Twilio call tracking for a Georgia real estate brokerage.',
    stat: 'Full-funnel call + event attribution', action: 'case'
  },

  /* ── AI & Automation ── */
  {
    slug: 'n8n-workflow-engine', name: 'n8n Workflow Engine', category: 'ai', tag: 'AI & Automation',
    description: 'Automated applicant fan-out: Google Drive folder creation, Sheets logging, and Gmail notifications, all triggered by a single form submission.',
    stat: 'Reduced applicant intake time by 60%', action: 'case'
  },
  {
    slug: 'robly-ai-agent', name: 'Robly AI Agent', category: 'ai', tag: 'AI & Automation',
    description: 'AI-powered email campaign intelligence layer built in n8n with a Slack interface. Analyzes performance and surfaces optimization recommendations.',
    stat: 'Campaign insights delivered in Slack', action: 'case'
  },
  {
    slug: 'voice-ai-integration', name: 'Voice AI Integration', category: 'ai', tag: 'AI & Automation',
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
    href: 'swiftrunning.html', liveUrl: 'https://www.divinify.io/swiftrunning', video: '', action: 'watch',
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
    href: 'soleplay.html', liveUrl: 'https://www.divinify.io/soleplay', video: '', action: 'watch',
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
    href: 'transcendroofing.html', liveUrl: 'https://www.divinify.io/transcendroofing', video: '', action: 'watch',
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
    href: 'projectvegas.html', liveUrl: 'https://www.divinify.io/projectvegas', video: '', action: 'watch',
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
    tagline: 'Hype • Unified • Confident • Intense',
    image: 'https://images.squarespace-cdn.com/content/680842714352b025d2afe3ab/8a9d83fe-3613-4fcf-8dcc-61bf6a82ae14/Screenshot+2025-05-01+at+8.18.28%E2%80%AFPM.jpg?content-type=image%2Fjpeg',
    href: 'southforsyth1.html', liveUrl: 'https://www.divinify.io/southforsyth1', video: '', action: 'watch',
    client: 'South Forsyth Soccer (War Eagles) — a GHSA Class 7A program in Cumming, GA.',
    location: 'Cumming, Georgia',
    services: ['Video Production', 'Lighting', 'Team Coordination', 'Editing', 'Conceptualization'],
    deliverables: ['Main hype film', 'Boys JV edit'],
    timeline: null,
    overview: [
      "South Forsyth Soccer is a state-championship program, and their Pre-Season Media Day video needed to feel like it. We built a jumbotron-ready hype piece designed to project pride, intimidation, and home-field edge.",
      "Cinematic lighting, tight team coordination, and high-energy editing turned a media day into a statement — plus a second cut tailored for the boys' JV team, so the next group up gets the same big-stage treatment."
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
    slug: 'south-forsyth-2', page: 'southforsyth2', name: 'South Forsyth',
    category: 'video', tag: 'Video Production',
    tagline: 'Competitive • Hype • Dominant • Victorious',
    image: 'https://images.squarespace-cdn.com/content/v1/680842714352b025d2afe3ab/f9e2aaf9-0ad3-4cc2-a122-1df53ca392f0/Screenshot+2025-05-02+at+11.23.45%E2%80%AFAM.png?format=1500w',
    href: 'southforsyth2.html', liveUrl: 'https://www.divinify.io/southforsyth2', video: '', action: 'watch',
    client: 'South Forsyth Soccer (War Eagles) — a GHSA Class 7A program in Cumming, GA.',
    location: 'Cumming, Georgia',
    services: ['Video Production', 'Lighting', 'Team Coordination', 'Editing', 'Conceptualization'],
    deliverables: ['Championship-run film', 'Boys JV edit'],
    timeline: null,
    overview: [
      "Some moments only happen once. We captured South Forsyth Soccer's run at a regional title through chaotic rain, raw effort, and real emotion — start to finish.",
      "The result is a cinematic story about grit and pride: the team's relentless push toward victory, plus a short, sharp edit for the boys' JV side carrying the same intimidation factor."
    ],
    testimonial: { quote: 'Quality videos that showcase our players in ways that rival professional teams — professional, flexible, and enjoyable to work with.', author: 'South Forsyth Soccer' }
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
