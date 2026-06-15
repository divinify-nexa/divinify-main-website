// ─── AUTOMATION VISUAL ───────────────────────────────────────
(function() {
  const AUTO_CASES = [
    { key:'lead', label:'Lead Pipeline',
      name:'<span>Lead Pipeline</span> — Inbound to Booked Call',
      nodes:[
        {id:'trigger', label:'Trigger',  icon:'⚡', x:0.08,y:0.48, tag:'Step 01 — Entry Point',    title:'A new lead comes in',              body:'Form fill, ad click, or inbound call — the moment a prospect raises their hand, the system is already moving. No delay, no manual review needed.'},
        {id:'qualify', label:'Qualify',  icon:'🎯', x:0.25,y:0.26, tag:'Step 02 — Intent Filter',  title:'Good fit or not?',                 body:'Responses are scored instantly. High-intent leads get fast-tracked. Low-fit submissions get a different path. Your team only sees the ones worth their time.'},
        {id:'enrich',  label:'Enrich',   icon:'🔍', x:0.44,y:0.48, tag:'Step 03 — Context Layer',  title:'The record builds itself',         body:'Company, channel source, prior touchpoints — pulled and attached automatically. By the time a rep opens the record, all the context is already there.'},
        {id:'reach',   label:'Outreach', icon:'💬', x:0.63,y:0.26, tag:'Step 04 — First Touch',    title:'Personalized message, instant send',body:'A tailored follow-up goes out within seconds of the trigger — email, SMS, or voice. Timed and worded to match where they are in the decision process.'},
        {id:'book',    label:'Book',     icon:'📅', x:0.81,y:0.48, tag:'Step 05 — Conversion',     title:'Calendar blocked, CRM updated',    body:'When they\'re ready, booking is frictionless. The meeting lands on the calendar, the CRM is updated, and the rep gets a Slack ping — all without touching anything.'},
        {id:'report',  label:'Report',   icon:'📊', x:0.93,y:0.70, tag:'Step 06 — Feedback Loop',  title:'Every outcome tracked',            body:'Open rates, reply rates, show-up rates — all flowing back into one view. You see exactly which source, which message, which timing converts best.'}
      ]
    },
    { key:'recruit', label:'Recruiting',
      name:'<span>Recruiting</span> — Application to Hired',
      nodes:[
        {id:'apply',    label:'Apply',    icon:'📋', x:0.08,y:0.48, tag:'Step 01 — Entry Point',   title:'Application received',              body:'A candidate submits. The system catches it instantly across every channel — job board, referral link, or your careers page — and starts processing.'},
        {id:'screen',   label:'Screen',   icon:'🔎', x:0.25,y:0.26, tag:'Step 02 — AI Screen',     title:'Criteria checked in seconds',       body:'Experience, location, availability — reviewed against your requirements automatically. Qualified candidates move forward. Others get a respectful, automated response.'},
        {id:'contact',  label:'Contact',  icon:'📞', x:0.44,y:0.48, tag:'Step 03 — Outreach',      title:'First contact without delay',       body:'A personalized message goes out within minutes of applying. Candidates feel noticed. Response rates go up. Your pipeline moves faster.'},
        {id:'sched',    label:'Schedule', icon:'🗓️', x:0.63,y:0.26, tag:'Step 04 — Scheduling',    title:'Interview booked automatically',    body:'Candidates self-schedule into available slots. No back-and-forth emails. The right interview type lands on the right person\'s calendar.'},
        {id:'track',    label:'Track',    icon:'📌', x:0.81,y:0.48, tag:'Step 05 — Pipeline View', title:'Every candidate tracked in real time',body:'Stage, status, and next action — updated automatically as things move. Your team always knows where every candidate stands without a manual update.'},
        {id:'hire',     label:'Hired',    icon:'✅', x:0.93,y:0.70, tag:'Step 06 — Close',         title:'Offer sent, records archived',      body:'When a candidate is selected, the offer flow kicks off. Rejected candidates are archived with notes. The pipeline stays clean for the next role.'}
      ]
    },
    { key:'crm', label:'CRM Sync',
      name:'<span>CRM Sync</span> — Data In, Decisions Out',
      nodes:[
        {id:'capture',  label:'Capture',  icon:'📥', x:0.08,y:0.48, tag:'Step 01 — Data In',          title:'Every touchpoint captured',       body:'Emails opened, links clicked, forms filled, calls answered — every signal from every channel gets pulled into one place automatically.'},
        {id:'clean',    label:'Clean',    icon:'🧹', x:0.25,y:0.26, tag:'Step 02 — Hygiene',           title:'Duplicates killed, records unified',body:'Duplicate contacts merged. Missing fields filled. Outdated info flagged. Your CRM stays clean without a weekly manual audit.'},
        {id:'score',    label:'Score',    icon:'📈', x:0.44,y:0.48, tag:'Step 03 — Scoring',           title:'Who\'s hot, who\'s cold',          body:'Engagement data turns into a score. High-activity contacts surface to the top automatically. Reps always know where to focus their time.'},
        {id:'route',    label:'Route',    icon:'🔀', x:0.63,y:0.26, tag:'Step 04 — Routing',           title:'Right record, right person',       body:'Contacts get assigned based on territory, deal size, or rep capacity. No guesswork, no manual reassignment — the right rep sees the right record.'},
        {id:'act',      label:'Action',   icon:'⚙️', x:0.81,y:0.48, tag:'Step 05 — Trigger Actions',  title:'Sequences fire on data changes',   body:'Stage change triggers a follow-up. Inactivity triggers a re-engagement. Every CRM event becomes an automated action — no human required.'},
        {id:'insights', label:'Insights', icon:'💡', x:0.93,y:0.70, tag:'Step 06 — Intelligence',      title:'Data you can actually act on',     body:'Pipeline health, conversion by stage, rep performance — surfaced cleanly. Just the numbers that matter, automatically updated.'}
      ]
    }
  ];

  const AUTO_CAPS = [
    {id:'voice',   label:'Voice AI',      icon:'🎙️', x:0.18,y:0.22, tag:'Capability — Conversational AI',     title:'AI that talks like a person',        body:'Outbound and inbound voice agents that qualify, follow up, and gather information — handling calls at scale without a human on the line.'},
    {id:'webhook', label:'Webhooks',      icon:'⚡',  x:0.38,y:0.15, tag:'Capability — Event Triggers',        title:'Any event can start a workflow',     body:'Form submits, CRM stage changes, payment events, API calls — anything that fires a signal becomes a trigger for your custom automation.'},
    {id:'crmw',    label:'CRM Writes',    icon:'🗂️', x:0.60,y:0.18, tag:'Capability — CRM Integration',       title:'Records that update themselves',     body:'Data flows into your CRM from every source — automatically cleaned, mapped to the right fields, and tagged for downstream use.'},
    {id:'email',   label:'Email Seq.',    icon:'✉️',  x:0.80,y:0.24, tag:'Capability — Email Automation',      title:'Sequences that feel personal',       body:'Multi-step email workflows triggered by behavior, timing, or data conditions — personalized at send time without manual drafting.'},
    {id:'sms',     label:'SMS & Chat',    icon:'💬',  x:0.88,y:0.50, tag:'Capability — Messaging',             title:'Text and chat at the right moment',  body:'SMS follow-ups, chat triggers, and conversational flows — meeting people where they are and keeping them engaged through the process.'},
    {id:'data',    label:'Data Sync',     icon:'🔄',  x:0.78,y:0.75, tag:'Capability — Data Infrastructure',   title:'Your tools talking to each other',   body:'Bi-directional syncs between platforms — spreadsheets, databases, CRMs, and third-party APIs all kept in alignment without manual exports.'},
    {id:'notif',   label:'Notifications', icon:'🔔',  x:0.52,y:0.82, tag:'Capability — Alerts & Routing',      title:'The right person knows immediately', body:'Slack alerts, email pings, and task assignments triggered by system events — so your team moves on what matters without checking a dozen dashboards.'},
    {id:'lscore',  label:'Lead Scoring',  icon:'🎯',  x:0.28,y:0.80, tag:'Capability — Scoring Logic',         title:'Instant qualification at scale',     body:'Rules-based or AI-assisted scoring applied to every record — surfacing the highest-priority leads, candidates, or accounts without a human in the loop.'},
    {id:'rep',     label:'Reporting',     icon:'📊',  x:0.14,y:0.62, tag:'Capability — Analytics Layer',       title:'Outcomes tracked automatically',     body:'Custom dashboards and automated reports built on live data — so you always know what\'s working and where the system needs tuning.'},
    {id:'ailogic', label:'AI Logic',      icon:'🧠',  x:0.10,y:0.38, tag:'Capability — Intelligence',          title:'Decisions made by the system',       body:'Classification, summarization, extraction, and routing logic — AI applied to the specific decision points in your workflow where it creates real leverage.'}
  ];

  const CAP_CENTER = { x:0.49, y:0.49 };

  let currentCase = 0, nodeEls = {}, isRunning = false;
  let idleTimer = null, customIdleTimer = null, isCustom = false;

  const canvas       = document.getElementById('autoFlowCanvas');
  const svg          = document.getElementById('autoFlowSvg');
  const panel        = document.getElementById('autoDetailPanel');
  const btnRun       = document.getElementById('autoBtnRun');
  const btnReset     = document.getElementById('autoBtnReset');
  const statusDot    = document.getElementById('autoStatusDot');
  const statusText   = document.getElementById('autoStatusText');
  const nameLabel    = document.getElementById('autoNameLabel');
  const controls     = document.getElementById('autoControls');
  const customCenter = document.getElementById('autoCustomCenter');

  if (!canvas) return; // guard if section not present

  canvas.addEventListener('click', (e) => {
    if (!e.target.closest('.auto-node') && !e.target.closest('.auto-cap-node') && !e.target.closest('.auto-detail-panel')) {
      dismissPanel();
    }
  });

  function dismissPanel() {
    panel.classList.remove('visible');
    if (!isRunning) {
      canvas.querySelectorAll('.auto-node,.auto-cap-node').forEach(el => el.classList.remove('active'));
    }
  }

  function buildEdges(nodes) {
    svg.innerHTML = `<defs><filter id="autoGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
    const r = canvas.getBoundingClientRect();
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i], b = nodes[i+1];
      const ax=a.x*r.width,ay=a.y*r.height,bx=b.x*r.width,by=b.y*r.height,mx=(ax+bx)/2;
      const d=`M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}`;
      const path = document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',d); path.setAttribute('stroke','rgba(245,200,66,0.12)');
      path.setAttribute('stroke-width','1.5'); path.setAttribute('fill','none');
      path.setAttribute('stroke-dasharray','5 5'); path.id=`aedge-${i}`;
      svg.appendChild(path);
      const dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
      dot.setAttribute('r','4.5'); dot.setAttribute('fill','#f5c842');
      dot.setAttribute('filter','url(#autoGlow)'); dot.setAttribute('opacity','0');
      dot.id=`adot-${i}`; svg.appendChild(dot);
    }
  }

  function buildCustomEdges(caps) {
    svg.innerHTML = `<defs><filter id="autoGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
    const r = canvas.getBoundingClientRect();
    const cx=CAP_CENTER.x*r.width, cy=CAP_CENTER.y*r.height;
    caps.forEach((cap,i) => {
      const ex=cap.x*r.width, ey=cap.y*r.height;
      const line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1',cx);line.setAttribute('y1',cy);line.setAttribute('x2',ex);line.setAttribute('y2',ey);
      line.setAttribute('stroke','rgba(245,200,66,0.08)');line.setAttribute('stroke-width','1');
      line.setAttribute('stroke-dasharray','3 6');line.id=`aspoke-${i}`;svg.appendChild(line);
      const dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
      dot.setAttribute('r','3.5');dot.setAttribute('fill','#f5c842');
      dot.setAttribute('filter','url(#autoGlow)');dot.setAttribute('opacity','0');
      dot.id=`acdot-${i}`;svg.appendChild(dot);
    });
  }

  function buildNodes(nodes) {
    canvas.querySelectorAll('.auto-node,.auto-cap-node').forEach(e=>e.remove());
    nodeEls = {};
    nodes.forEach((n,i) => {
      const el = document.createElement('div');
      el.className='auto-node'; el.id=`anode-${n.id}`;
      el.style.left=(n.x*100)+'%'; el.style.top=(n.y*100)+'%';
      el.innerHTML=`<div class="auto-node-ring"><span class="auto-node-icon">${n.icon}</span><span class="auto-node-num">${i+1}</span></div><span class="auto-node-label">${n.label}</span>`;
      el.addEventListener('click',(e)=>{e.stopPropagation();selectNode(n,el);});
      canvas.appendChild(el); nodeEls[n.id]=el;
    });
  }

  function buildCapNodes(caps) {
    canvas.querySelectorAll('.auto-node,.auto-cap-node').forEach(e=>e.remove());
    nodeEls = {};
    caps.forEach((cap,i) => {
      const el = document.createElement('div');
      el.className='auto-cap-node'; el.id=`anode-${cap.id}`;
      el.style.left=(cap.x*100)+'%'; el.style.top=(cap.y*100)+'%';
      el.style.animationDelay=(i*0.06)+'s';
      el.innerHTML=`<div class="auto-cap-ring"><span class="auto-cap-icon">${cap.icon}</span></div><span class="auto-cap-label">${cap.label}</span>`;
      el.addEventListener('click',(e)=>{e.stopPropagation();selectNode(cap,el);});
      canvas.appendChild(el); nodeEls[cap.id]=el;
    });
  }

  function selectNode(n,el) {
    if (isRunning) return;
    canvas.querySelectorAll('.auto-node,.auto-cap-node').forEach(e=>e.classList.remove('active'));
    el.classList.add('active','visited');
    document.getElementById('autoDetailTag').textContent   = n.tag;
    document.getElementById('autoDetailTitle').textContent = n.title;
    document.getElementById('autoDetailBody').textContent  = n.body;
    panel.classList.add('visible');
  }

  function animatePacket(i,nodes,dur=680) {
    return new Promise(resolve=>{
      const a=nodes[i],b=nodes[i+1],r=canvas.getBoundingClientRect();
      const ax=a.x*r.width,ay=a.y*r.height,bx=b.x*r.width,by=b.y*r.height,mx=(ax+bx)/2;
      const dot=document.getElementById(`adot-${i}`),edge=document.getElementById(`aedge-${i}`);
      if(!dot){resolve();return;}
      edge.setAttribute('stroke','rgba(245,200,66,0.30)');dot.setAttribute('opacity','1');
      const start=performance.now();
      function tick(now){
        const t=Math.min((now-start)/dur,1),e=t<0.5?2*t*t:-1+(4-2*t)*t,u=1-e;
        dot.setAttribute('cx',u*u*u*ax+3*u*u*e*mx+3*u*e*e*mx+e*e*e*bx);
        dot.setAttribute('cy',u*u*u*ay+3*u*u*e*ay+3*u*e*e*by+e*e*e*by);
        if(t<1){requestAnimationFrame(tick);}else{dot.setAttribute('opacity','0');edge.setAttribute('stroke','rgba(245,200,66,0.12)');resolve();}
      }
      requestAnimationFrame(tick);
    });
  }

  function animateSpokePacket(i,fromCenter=true,dur=750) {
    return new Promise(resolve=>{
      const cap=AUTO_CAPS[i],r=canvas.getBoundingClientRect();
      const cx=CAP_CENTER.x*r.width,cy=CAP_CENTER.y*r.height,ex=cap.x*r.width,ey=cap.y*r.height;
      const dot=document.getElementById(`acdot-${i}`),spoke=document.getElementById(`aspoke-${i}`);
      if(!dot){resolve();return;}
      spoke.setAttribute('stroke','rgba(245,200,66,0.25)');dot.setAttribute('opacity','1');
      const sx=fromCenter?cx:ex,sy=fromCenter?cy:ey,dx=fromCenter?ex:cx,dy=fromCenter?ey:cy;
      const start=performance.now();
      function tick(now){
        const t=Math.min((now-start)/dur,1),e=t<0.5?2*t*t:-1+(4-2*t)*t;
        dot.setAttribute('cx',sx+(dx-sx)*e);dot.setAttribute('cy',sy+(dy-sy)*e);
        if(t<1){requestAnimationFrame(tick);}else{dot.setAttribute('opacity','0');spoke.setAttribute('stroke','rgba(245,200,66,0.08)');resolve();}
      }
      requestAnimationFrame(tick);
    });
  }

  function startIdle() {
    if (isRunning||isCustom) return;
    const nodes=AUTO_CASES[currentCase].nodes, ec=nodes.length-1;
    function sched(){
      idleTimer=setTimeout(async()=>{
        if(!isRunning&&!isCustom){
          const idx=Math.floor(Math.random()*ec);
          const el=nodeEls[nodes[idx].id];if(el)el.classList.add('idle-glow');
          await animatePacket(idx,nodes,900);if(el)el.classList.remove('idle-glow');
          if(!isRunning&&!isCustom&&Math.random()>0.5){await autoSleep(200);await animatePacket(Math.floor(Math.random()*ec),nodes,850);}
        }sched();
      },1100+Math.random()*1500);
    }sched();
  }

  function startCustomIdle() {
    if (!isCustom) return;
    function sched(){
      customIdleTimer=setTimeout(async()=>{
        if(!isCustom)return;
        await animateSpokePacket(Math.floor(Math.random()*AUTO_CAPS.length),Math.random()>0.5,800);
        sched();
      },600+Math.random()*1000);
    }sched();
  }

  function stopIdle(){clearTimeout(idleTimer);idleTimer=null;clearTimeout(customIdleTimer);customIdleTimer=null;}

  async function runSequence() {
    if(isRunning||isCustom)return;
    isRunning=true;stopIdle();btnRun.disabled=true;panel.classList.remove('visible');
    const nodes=AUTO_CASES[currentCase].nodes;
    nodes.forEach(n=>nodeEls[n.id]&&nodeEls[n.id].classList.remove('active','visited'));
    statusDot.className='auto-status-dot running';statusText.className='auto-status-text lit';
    statusText.textContent='Automation running...';
    for(let i=0;i<nodes.length;i++){
      nodeEls[nodes[i].id].classList.add('active','visited');
      statusText.textContent=nodes[i].tag;await autoSleep(500);
      document.getElementById('autoDetailTag').textContent=nodes[i].tag;
      document.getElementById('autoDetailTitle').textContent=nodes[i].title;
      document.getElementById('autoDetailBody').textContent=nodes[i].body;
      panel.classList.add('visible');await autoSleep(800);
      if(i<nodes.length-1){panel.classList.remove('visible');await animatePacket(i,nodes,640);nodeEls[nodes[i].id].classList.remove('active');}
    }
    statusDot.className='auto-status-dot done';statusText.textContent='Complete — all steps executed successfully';
    isRunning=false;btnRun.disabled=false;setTimeout(startIdle,1800);
  }

  function resetAll() {
    if(isRunning)return;stopIdle();dismissPanel();
    if(!isCustom){
      AUTO_CASES[currentCase].nodes.forEach(n=>nodeEls[n.id]&&nodeEls[n.id].classList.remove('active','visited','idle-glow'));
      AUTO_CASES[currentCase].nodes.forEach((_,i)=>{
        const e=document.getElementById(`aedge-${i}`),d=document.getElementById(`adot-${i}`);
        if(e)e.setAttribute('stroke','rgba(245,200,66,0.12)');if(d)d.setAttribute('opacity','0');
      });
    }
    statusDot.className='auto-status-dot';statusText.className='auto-status-text';
    statusText.textContent=isCustom?'Click any capability to learn more':'Click any node to explore — or run the full sequence';
    setTimeout(isCustom?startCustomIdle:startIdle,600);
  }

  function switchCase(idx) {
    if(isRunning)return;stopIdle();dismissPanel();currentCase=idx;isCustom=(idx===3);
    document.querySelectorAll('.auto-uc-btn').forEach((b,i)=>b.classList.toggle('active',i===idx));
    if(isCustom){
      controls.classList.add('custom-mode');customCenter.classList.add('visible');
      nameLabel.innerHTML='<span>Custom Build</span> — Assembled From Your Requirements';
      statusText.textContent='Click any capability to learn more';
      buildCapNodes(AUTO_CAPS);setTimeout(()=>{buildCustomEdges(AUTO_CAPS);startCustomIdle();},80);
    }else{
      controls.classList.remove('custom-mode');customCenter.classList.remove('visible');
      nameLabel.innerHTML=AUTO_CASES[idx].name;
      statusText.textContent='Click any node to explore — or run the full sequence';
      buildNodes(AUTO_CASES[idx].nodes);setTimeout(()=>{buildEdges(AUTO_CASES[idx].nodes);startIdle();},80);
    }
  }

  function autoSleep(ms){return new Promise(r=>setTimeout(r,ms));}

  btnRun.addEventListener('click',runSequence);
  btnReset.addEventListener('click',resetAll);
  document.querySelectorAll('.auto-uc-btn').forEach((btn,i)=>btn.addEventListener('click',()=>switchCase(i)));

  buildNodes(AUTO_CASES[0].nodes);
  setTimeout(()=>{buildEdges(AUTO_CASES[0].nodes);startIdle();},80);

  window.addEventListener('resize',()=>{if(isCustom)buildCustomEdges(AUTO_CAPS);else buildEdges(AUTO_CASES[currentCase].nodes);});
})();
