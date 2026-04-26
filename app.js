/* =========================================================
   SANS Codified · mid-fi platform · Canvas direction
   ========================================================= */

/* ---------- data ---------- */
const PART_K_CLAUSES = [
  { n:"1",       t:"Scope", rules:0 },
  { n:"2",       t:"Normative references", rules:0 },
  { n:"3",       t:"Definitions", rules:0 },
  { n:"4.1",     t:"General requirements", rules:1 },
  { n:"4.2.1",   t:"Masonry walls — General", rules:4 },
  { n:"4.2.2",   t:"Masonry walling — Single/double-storey", rules:3 },
  { n:"4.2.3",   t:"Infill masonry panels in framed buildings", rules:2 },
  { n:"4.2.4",   t:"Free-standing boundary, garden & retaining walls", rules:11, active:true },
  { n:"4.2.5",   t:"Balustrade and parapet walls", rules:6 },
  { n:"4.2.6",   t:"Control joints", rules:23 },
  { n:"4.2.7",   t:"Articulation joints", rules:5 },
  { n:"4.2.8",   t:"Corbelling", rules:1 },
  { n:"4.2.9",   t:"Lintels", rules:20 },
  { n:"4.2.10",  t:"Masonry arches", rules:6 },
  { n:"4.2.11",  t:"Roof fixing", rules:2 },
  { n:"4.3",     t:"Timber-framed walls", rules:1 },
  { n:"4.4",     t:"Fixing of roofs to concrete elements", rules:2 },
  { n:"4.5.1",   t:"Water penetration — Condensation", rules:2 },
  { n:"4.5.2",   t:"Water penetration — Rain penetration", rules:8 },
  { n:"4.5.3",   t:"Water penetration — Rising damp", rules:9 },
  { n:"4.6",     t:"Behaviour in fire", rules:3 },
  { n:"Ann. B",  t:"Design of lintels (informative)", rules:0 },
  { n:"Ann. C",  t:"Rain penetration tests (normative)", rules:0 }
];

/* ---------- forms data ---------- */
const FORMS = [
  {
    id:"form-1", label:"Form 1", annex:"Annex A", type:"normative",
    title:"Declaration by Person Responsible for Preparing an Application",
    short:"Application for Approval",
    basis:"Section 4 of the National Building Regulations and Building Standards Act, 1977",
    pages:"51–54", status:"draft", fields:24,
    sections:["Owner declaration","Professional responsible","Agent (if applicable)","Owner / agent signatures"],
    note:"Submitted with every building plan application. Covers Regulation A2."
  },
  {
    id:"form-2", label:"Form 2", annex:"Annex B", type:"normative",
    title:"Competent Person Appointment and Acceptance",
    short:"Competent Persons",
    basis:"Regulations A4, A13 and A21 — Council for the Built Environment Act, 2000",
    pages:"55–63", status:"draft", fields:32,
    sections:["Owner appointment","Competent person acceptance","Discipline & regulation matrix","Inspection declaration"],
    note:"Maps each competent person discipline to regulations B through XA. Required for each appointed professional."
  },
  {
    id:"form-3", label:"Form 3", annex:"Annex C", type:"normative",
    title:"Component or System Design Declaration",
    short:"Component Design",
    basis:"Regulation A12 — third-party component design responsibility",
    pages:"64–66", status:"draft", fields:18,
    sections:["Component / system description","Design responsibility","Inspection certification","Sign-off"],
    note:"Used when a component or system is designed by a party other than the principal professional."
  },
  {
    id:"form-4", label:"Form 4", annex:"Annex D", type:"normative",
    title:"Certificate of Completion",
    short:"Certificate of Completion",
    basis:"Section 14(2A) of the National Building Regulations and Building Standards Act, 1977",
    pages:"67–69", status:"draft", fields:14,
    sections:["Project identification","Competent person certification","Owner declaration","Regulatory sign-off"],
    note:"Submitted on completion of construction. Required for structural, fire and energy systems."
  },
  {
    id:"checklist", label:"Form F.1", annex:"Annex F", type:"informative",
    title:"Checklist for Use by Owner/Designer Before Plan Submission",
    short:"Plan Examiner Checklist",
    basis:"Annex F (informative) — non-mandatory pre-submission review",
    pages:"73–75", status:"draft", fields:28,
    sections:["Site documentation","Professional registration","Plans per Regulation A2","Structural & fire documentation","Services documentation"],
    note:"Non-mandatory. Covers Regulations A2, A4–A8, A10. Cross-references forms 1 & 2."
  }
];

const PARTS = [
  ["A","Gen",36], ["B","Struct",10], ["C","Dim",8], ["D","Safety",7],
  ["E","Demo",4,"info"], ["F","Site",7], ["G","Excav",7], ["H","Found",11],
  ["J","Floors",7], ["K","Walls",23,null,true], ["L","Roofs",25], ["M","Stairs",8],
  ["N","Glazing",7], ["O","Light/Vent",13], ["P","Drainage",33], ["Q","Sanit.",37],
  ["R","Stormw.",7], ["S","Access",23], ["T","Fire",65], ["V","Heat",7],
  ["W","Fire Inst.",9], ["XA","Energy",18]
];

/* ---------- screen renderers ---------- */

function topbar({crumbs=[], actions=""}) {
  const parts = crumbs.map((c,i) => {
    const cur = i === crumbs.length - 1;
    return `${i>0?'<span class="sep">/</span>':''}<span class="${cur?'cur':''}">${c}</span>`;
  }).join('');
  return `
    <div class="topbar">
      <div class="breadcrumbs">${parts}</div>
      <div class="topbar-spacer"></div>
      ${actions}
    </div>`;
}

/* ============== HOME ============== */
function screenHome(){
  return `
  <section class="screen" id="s-home" data-screen-label="Home">
    ${topbar({crumbs:["Workspace","Home"], actions:`
      <button class="btn"><svg class="ic" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>New canvas</button>
      <button class="btn primary"><svg class="ic" viewBox="0 0 24 24"><path d="M5 12 9 16l10-10"/></svg>Upgrade</button>
    `})}
    <div class="content">

      <div class="home-hero" style="grid-template-columns:1fr 1fr">
        <div class="ask-card" style="padding:18px 20px">
          <div class="eyebrow" style="margin-bottom:8px">Ask Codified</div>
          <div class="ask-input" style="margin-top:0">
            <svg class="ic" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>
            <input placeholder="How high can a 140 mm single-leaf boundary wall be?"/>
            <button class="btn accent">Ask</button>
          </div>
          <div class="ask-actions" style="margin-top:8px">
            <span class="suggest">Try</span>
            <span class="chip" onclick="go('search')">Part K cavity walls</span>
            <span class="chip">fire rating garage</span>
            <span class="chip">Form 2 signatories</span>
            <span class="chip">stair riser limits</span>
          </div>
        </div>

        <div class="stats">
          <div class="stat"><div class="n">22</div><div class="l">Parts codified</div><div class="trend">+1 this month</div></div>
          <div class="stat"><div class="n">437</div><div class="l">Clauses indexed</div><div class="trend">Machine-readable</div></div>
          <div class="stat"><div class="n">1 431</div><div class="l">Extracted rules</div><div class="trend">API-ready</div></div>
          <div class="stat"><div class="n">192</div><div class="l">Structured tables</div><div class="trend">JSON · CSV</div></div>
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <div>
            <div class="eyebrow">Jump in</div>
            <h2 class="h2">Continue where you left off</h2>
          </div>
          <button class="btn ghost">View all →</button>
        </div>
        <div>
          <div class="recent-row" onclick="go('clause')">
            <span class="cref">K · 4.2.4</span>
            <div>
              <div class="ttl">Free-standing boundary, garden &amp; retaining walls</div>
              <div class="sub">Viewing clause · 11 rules · 3 linked tables</div>
            </div>
            <span class="chip mono">11 rules</span>
            <span class="ago">2 hours ago</span>
          </div>
          <div class="recent-row" onclick="go('canvas')">
            <span class="cref">Canvas</span>
            <div>
              <div class="ttl">Erf 421 · Garden wall compliance</div>
              <div class="sub">7 nodes · 1 watch-point · shared with 2 collaborators</div>
            </div>
            <span class="chip ok">5 pass</span>
            <span class="ago">Yesterday</span>
          </div>
          <div class="recent-row">
            <span class="cref">T · 4.13</span>
            <div>
              <div class="ttl">Fire dampers &amp; duct penetrations</div>
              <div class="sub">Reading · 291 rules in Part T</div>
            </div>
            <span class="chip mono">API hit</span>
            <span class="ago">3 days ago</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <div>
            <div class="eyebrow">Browse</div>
            <h2 class="h2">Standards by part</h2>
          </div>
          <span class="faint" style="font-size:12.5px">22 parts · 19 active DTS · 1 informational</span>
        </div>
        <div class="grid-22" id="part-grid"></div>
        <div style="margin-top:12px;text-align:right">
          <button class="btn ghost" onclick="go('allparts')" style="font-size:13px">Browse all 22 parts →</button>
        </div>
      </div>

    </div>
  </section>`;
}

/* ============== PART K OVERVIEW ============== */
function screenPart(){
  return `
  <section class="screen" id="s-part" data-screen-label="Part K">
    ${topbar({crumbs:["Standards","SANS 10400","Part K · Walls"], actions:`
      <button class="btn"><svg class="ic" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>Download JSON</button>
      <button class="btn accent"><svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Run compliance check</button>
    `})}
    <div class="content">

      <div class="part-hero">
        <div class="part-mark">K</div>
        <div>
          <div class="eyebrow">SANS 10400-K · 2025 Edition 3.2</div>
          <h1 class="h1" style="margin:6px 0 10px">Walls</h1>
          <p class="muted" style="margin:0;max-width:56ch">Masonry, concrete and timber walls — including cavity, collar-jointed, free-standing, parapet, reinforced, diaphragm and sheeted wall construction. Deemed-to-satisfy rules for residential and small non-residential buildings.</p>
          <div style="margin-top:14px;display:flex;gap:6px;flex-wrap:wrap">
            <span class="chip">masonry</span>
            <span class="chip">cavity</span>
            <span class="chip">reinforced</span>
            <span class="chip">timber-frame</span>
            <span class="chip">retaining</span>
          </div>
        </div>
        <div class="part-stats">
          <div><div class="n">23</div><div class="l">Clauses</div></div>
          <div><div class="n">109</div><div class="l">Rules</div></div>
          <div><div class="n">37</div><div class="l">Tables</div></div>
          <div><div class="n" style="color:oklch(50% 0.12 150)">✓</div><div class="l">Complete</div></div>
        </div>
      </div>

      <div class="grid-2" style="align-items:start">
        <div>
          <div class="section-head">
            <div>
              <div class="eyebrow">Contents</div>
              <h2 class="h2">Clauses</h2>
            </div>
            <div style="display:flex;gap:6px">
              <span class="filter-chip on">All</span>
              <span class="filter-chip">Masonry</span>
              <span class="filter-chip">Concrete</span>
              <span class="filter-chip">Timber</span>
            </div>
          </div>
          <div class="toc" id="toc"></div>
        </div>

        <div style="display:flex;flex-direction:column;gap:14px;position:sticky;top:80px">
          <div class="card">
            <div class="eyebrow">At a glance</div>
            <h3 class="h3" style="margin-top:6px">Cross-references</h3>
            <p class="muted" style="margin:6px 0 12px;font-size:13px">Part K cites 6 external standards and 2 other parts.</p>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              <span class="chip mono">Part-B</span>
              <span class="chip mono">Part-H</span>
              <span class="chip mono">SANS 10160</span>
              <span class="chip mono">SANS 10400-A</span>
              <span class="chip mono">SANS 10400-T</span>
              <span class="chip mono">SANS 2001-CM1</span>
            </div>
          </div>

          <div class="card">
            <div class="eyebrow">Figures &amp; tables</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
              <div style="padding:14px;border:1px dashed var(--border-strong);border-radius:var(--radius-sm);text-align:center">
                <div style="font-family:var(--font-display);font-size:20px;font-weight:500">37</div>
                <div class="faint" style="font-size:11px">Tables</div>
              </div>
              <div style="padding:14px;border:1px dashed var(--border-strong);border-radius:var(--radius-sm);text-align:center">
                <div style="font-family:var(--font-display);font-size:20px;font-weight:500">43</div>
                <div class="faint" style="font-size:11px">Figures</div>
              </div>
            </div>
          </div>

          <div class="card" style="background:var(--accent-soft);border-color:var(--accent-line)">
            <div class="eyebrow" style="color:var(--accent)">AI summary</div>
            <p style="margin:8px 0 0;font-size:13px;line-height:1.55">Part K governs how walls are built to resist wind, fire and gravity loads. Most residential walls will be covered by <span class="xref">4.2 masonry</span> clauses; check <span class="xref">4.2.1</span> for applicability limits before following a DTS route.</p>
          </div>
        </div>
      </div>

    </div>
  </section>`;
}

/* ============== CLAUSE READER ============== */
function screenClause(){
  return `
  <section class="screen" id="s-clause" data-screen-label="Clause 4.2.4">
    ${topbar({crumbs:["Standards","Part K","4.2 Masonry","4.2.4"], actions:`
      <button class="btn ghost"><svg class="ic" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>Save</button>
      <button class="btn"><svg class="ic" viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4"/></svg>Copy citation</button>
      <button class="btn accent"><svg class="ic" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"/></svg>Ask AI</button>
    `})}
    <div class="content">
      <div class="reader-grid">

        <!-- LEFT RAIL -->
        <aside class="rail-left">
          <div class="eyebrow">Part K · Walls</div>
          <div class="tree" id="clause-tree"></div>
        </aside>

        <!-- READER -->
        <article class="reader">
          <div class="eyebrow">
            <span>SANS 10400-K · 2025 Ed 3.2</span>
            <span class="chip mono">Verified</span>
            <span class="chip mono">11 rules</span>
          </div>
          <h1>4.2.4 Free-standing boundary, garden &amp; retaining walls</h1>

          <div class="reader-meta">
            <div><div class="l">Status</div><div class="v">Complete</div></div>
            <div><div class="l">Edition</div><div class="v">2025 · 3.2</div></div>
            <div><div class="l">Updated</div><div class="v">2026-04-16</div></div>
            <div><div class="l">Tags</div><div class="v" style="font-size:12px">masonry · boundary · retaining</div></div>
          </div>

          <h2>4.2.4.1 Free-standing retaining walls</h2>
          <p>Free-standing retaining walls shall be designed and constructed so that:</p>
          <blockquote>
            <ol type="a" style="margin:0;padding-left:20px">
              <li>the height of fill retained does not exceed the values given in <span class="xref">Table 16</span>, provided that where <i>x</i> exceeds 0,3 m, the height retained shall be reduced by the difference between <i>x</i> and 0,3 m (see <span class="xref">Figure 17</span>);</li>
              <li>piers, where required in terms of <span class="xref">Table 16</span>, project on the opposite side of the wall to the fill being retained;</li>
              <li>control joints are located at intervals that do not exceed 10 m;</li>
              <li>no surcharge of fill is placed within a distance equal to the height of the amount of fill being retained;</li>
              <li>subsoil drainage is provided behind the wall by weepholes formed by building into the wall, 50 mm diameter plastic pipes, with the non-exposed end covered with geofabric, at a height not exceeding 300 mm above the lower ground level and at centres not exceeding 1,5 m.</li>
            </ol>
          </blockquote>

          <h2>Table K-T16 — Retaining walls</h2>
          <div class="ph-table">
            <div class="ph-head" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr">
              <div>Wall thickness (mm)</div><div>Unit type</div><div>Max fill height (m)</div><div>Pier size (mm)</div><div>Pier spacing (m)</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr">
              <div>140</div><div>Solid</div><div>0,5</div><div>—</div><div>—</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr">
              <div>190</div><div>Solid</div><div>0,8</div><div>390×390</div><div>1,8</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr">
              <div>220</div><div>Solid</div><div>1,0</div><div>440×440</div><div>2,4</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr; color:var(--text-3)">
              <div colspan="5" style="font-family:var(--font-mono);font-size:11px">+ 9 more rows · <span class="xref">Download CSV</span></div><div></div><div></div><div></div><div></div>
            </div>
          </div>

          <h2>Figure 17 — Retaining wall geometry</h2>
          <div class="ph-fig">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-3)">
              <rect x="10" y="16" width="12" height="36" rx="1"/>
              <rect x="22" y="28" width="32" height="24" rx="1"/>
              <path d="M10 40 H6 M10 32 H4"/>
              <path d="M42 28 V12 M42 12 H54"/>
              <text x="44" y="10" font-size="8" fill="currentColor" stroke="none">x</text>
            </svg>
            <div class="ph-label">Figure 17</div>
            <div class="ph-title">Retaining wall showing dimension x and fill height</div>
            <div style="font-size:11.5px;color:var(--text-3);margin-top:4px">Placeholder — diagram to be supplied</div>
          </div>

          <h2>4.2.4.2 Free-standing boundary &amp; garden walls</h2>
          <p>Free-standing boundary and garden walls shall be designed and constructed so that:</p>
          <blockquote>
            <ol type="a" style="margin:0;padding-left:20px">
              <li>the height of the wall does not exceed the values given in <span class="xref">Tables 17</span> and <span class="xref">18</span> (see <span class="xref">Figure 18</span>);</li>
              <li>no earth is retained;</li>
              <li>piers extend to the top of the wall without any reduction in size;</li>
              <li>walls terminate in a pier or a return;</li>
              <li>the cores of all piers are solidly filled with mortar or infill concrete where units are hollow.</li>
            </ol>
          </blockquote>

          <h2>Table K-T17 — Free-standing walls (solid units)</h2>
          <div class="ph-table">
            <div class="ph-head" style="grid-template-columns:1fr 1fr 1fr 1fr">
              <div>Thickness (mm)</div><div>Max height (m)</div><div>Pier size (mm)</div><div>Pier spacing (m)</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr">
              <div>90</div><div>0,9</div><div>—</div><div>—</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr">
              <div>140</div><div>1,1</div><div>—</div><div>—</div>
            </div>
            <div class="ph-row active" style="grid-template-columns:1fr 1fr 1fr 1fr">
              <div><b>140</b></div><div><b>1,8</b></div><div><b>600×300</b></div><div><b>1,8</b></div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr">
              <div>190</div><div>1,4</div><div>390×390</div><div>2,4</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr">
              <div>220</div><div>1,8</div><div>440×440</div><div>2,7</div>
            </div>
            <div class="ph-row" style="grid-template-columns:1fr 1fr 1fr 1fr;color:var(--text-3)">
              <div style="font-family:var(--font-mono);font-size:11px">+ 5 more rows · <span class="xref">CSV</span></div><div></div><div></div><div></div>
            </div>
          </div>

          <div class="ph-fig">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-3)">
              <rect x="8" y="10" width="10" height="44" rx="1"/>
              <rect x="18" y="18" width="38" height="36" rx="1"/>
              <rect x="52" y="10" width="10" height="44" rx="1"/>
              <path d="M13 10 V6 M51 10 V6"/>
              <path d="M13 6 H51" stroke-dasharray="3 2"/>
            </svg>
            <div class="ph-label">Figure 18</div>
            <div class="ph-title">Free-standing wall with pier layout</div>
            <div style="font-size:11.5px;color:var(--text-3);margin-top:4px">Placeholder — diagram to be supplied</div>
          </div>

          <h2>4.2.4.3 Damp-proof course</h2>
          <p>No horizontal damp-proof course (DPC) shall be provided in free-standing walls.</p>

          <h2>Cross-references</h2>
          <p class="muted" style="font-size:14.5px">This clause is referenced from <span class="xref">Part-H · Foundations</span> and cites <span class="xref">Table K-T16</span>, <span class="xref">K-T17</span>, <span class="xref">K-T18</span> plus <span class="xref">Figure 17</span> and <span class="xref">18</span>.</p>

        </article>

        <!-- RIGHT RAIL -->
        <aside class="rail-right">
          <div class="rail-card">
            <h5><span class="dot"></span>Extracted rules <span class="faint" style="margin-left:auto;font-weight:400;font-family:var(--font-mono);font-size:10px">11</span></h5>
            <ul>
              <li><span class="code">R01</span>Retained fill height ≤ T16</li>
              <li><span class="code">R02</span>Piers on opposite side to fill</li>
              <li><span class="code">R03</span>Control joints ≤ 10 m</li>
              <li><span class="code">R04</span>No surcharge within h of fill</li>
              <li><span class="code">R05</span>Weepholes 50 mm ⌀</li>
              <li><span class="code">R06</span>Weepholes ≤ 1,5 m c/c</li>
              <li><span class="faint" style="font-size:11px">+ 5 more</span></li>
            </ul>
          </div>

          <div class="rail-card">
            <h5><span class="dot"></span>Linked tables</h5>
            <ul>
              <li><span class="code">T16</span>Retaining walls</li>
              <li><span class="code">T17</span>Free-standing (solid)</li>
              <li><span class="code">T18</span>Free-standing (hollow)</li>
            </ul>
          </div>

          <div class="rail-card" style="background:var(--accent-soft);border-color:var(--accent-line)">
            <h5><span class="dot"></span>Ask about this clause</h5>
            <div style="display:flex;flex-direction:column;gap:6px;font-size:12.5px">
              <div style="padding:8px 10px;background:var(--surface);border-radius:6px;cursor:pointer;border:1px solid var(--border)">How high can my 220 mm wall be?</div>
              <div style="padding:8px 10px;background:var(--surface);border-radius:6px;cursor:pointer;border:1px solid var(--border)">Explain x &gt; 0,3 m rule</div>
              <div style="padding:8px 10px;background:var(--surface);border-radius:6px;cursor:pointer;border:1px solid var(--border)">What if I need a pier on one side only?</div>
            </div>
          </div>

          <div class="rail-card">
            <h5><span class="dot"></span>For developers</h5>
            <div class="mono" style="font-size:11px;background:var(--bg-3);padding:8px 10px;border-radius:var(--radius-sm)">GET /api/v1/parts/K/<br>clauses/4.2.4</div>
            <button class="btn ghost" style="width:100%;margin-top:8px;justify-content:center">Copy cURL</button>
          </div>
        </aside>

      </div>
    </div>
  </section>`;
}

/* ============== SEARCH RESULTS ============== */
function screenSearch(){
  return `
  <section class="screen" id="s-search" data-screen-label="Search">
    ${topbar({crumbs:["Search"], actions:`
      <span class="chip mono">48 results · 0.24 s</span>
    `})}
    <div class="content">
      <div class="search-bar-row">
        <div class="search-bar-main">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent);flex-shrink:0"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
          <input value="boundary wall height" style="flex:1;border:0;outline:0;background:transparent;font-size:15px;color:var(--text)"/>
          <span class="kbd">enter</span>
        </div>
      </div>
      <div class="filters" style="margin-bottom:20px">
        <span class="filter-chip on">All 48</span>
        <span class="filter-chip">Clauses 12</span>
          <span class="filter-chip">Rules 22</span>
          <span class="filter-chip">Tables 8</span>
          <span class="filter-chip">Forms 1</span>
          <span class="filter-chip">Figures 5</span>
          <span class="filter-chip" style="margin-left:auto">Part: any ▾</span>
          <span class="filter-chip">Edition: current ▾</span>
        </div>

      <div class="results-layout">
        <div class="results-main">

          <div class="ai-answer">
            <div class="eyebrow" style="display:flex;align-items:center;gap:6px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"/></svg>
              <span>AI answer</span>
            </div>
            <p style="margin:8px 0 0;font-size:14px;line-height:1.55">For a <b>free-standing boundary wall</b> built of solid masonry units, the maximum height above ground depends on wall thickness: <b>140 mm → 1,1 m</b>, <b>190 mm → 1,4 m</b>, <b>220 mm → 1,8 m</b>, with piers at ≤ 1,8 m centres. If the soil above the strip footing (<i>x</i>) exceeds 0,3 m, reduce the permissible height by the surplus.</p>
            <div class="ai-cites" style="margin-top:10px">
              <span class="chip accent" onclick="go('clause')">Part K · 4.2.4.2</span>
              <span class="chip accent">Table K-T17</span>
              <span class="chip accent">Figure 18</span>
            </div>
          </div>

          <div class="result-group">
            <div class="result-group-head">
              <span class="t">Clauses</span>
              <span class="c">4 matches</span>
            </div>

            <div class="result" onclick="go('clause')">
              <div class="head">
                <span class="cref">K · 4.2.4.2</span>
                <span class="ttl">Free-standing boundary &amp; garden walls</span>
                <span style="margin-left:auto" class="chip mono">3 rules</span>
              </div>
              <div class="snippet">…the height of the <mark>wall</mark> (see figure 18) shall not exceed the values given in Tables 17 and 18, provided that where <i>x</i> exceeds 0,3 m, the <mark>height</mark> shall be reduced…</div>
              <div class="foot">
                <span class="chip mono">SANS 10400-K</span>
                <span class="chip mono">2025 · 3.2</span>
                <span class="chip">masonry</span>
                <span class="chip">boundary</span>
              </div>
            </div>

            <div class="result">
              <div class="head">
                <span class="cref">K · 4.2.4.1</span>
                <span class="ttl">Free-standing retaining walls</span>
                <span style="margin-left:auto" class="chip mono">5 rules</span>
              </div>
              <div class="snippet">…the <mark>height</mark> of fill retained by free-standing retaining walls does not exceed the values given in table 16, provided that where <i>x</i> exceeds 0,3 m, the <mark>height</mark> retained shall be reduced…</div>
              <div class="foot">
                <span class="chip mono">SANS 10400-K</span>
                <span class="chip">retaining</span>
                <span class="chip">weepholes</span>
              </div>
            </div>

            <div class="result">
              <div class="head">
                <span class="cref">K · 4.2.5</span>
                <span class="ttl">Parapet &amp; balustrade walls</span>
                <span style="margin-left:auto" class="chip mono">6 rules</span>
              </div>
              <div class="snippet">…shall not be constructed so that the <mark>height</mark> above the supporting slab exceeds…</div>
              <div class="foot">
                <span class="chip mono">SANS 10400-K</span>
                <span class="chip">parapet</span>
              </div>
            </div>

          </div>

          <div class="result-group">
            <div class="result-group-head">
              <span class="t">Tables</span>
              <span class="c">3 matches</span>
            </div>
            <div class="result">
              <div class="head">
                <span class="cref">K-T17</span>
                <span class="ttl">Free-standing walls (solid units)</span>
                <span style="margin-left:auto" class="chip mono">10 rows</span>
              </div>
              <div class="snippet">Max <mark>height</mark> above ground · <mark>wall</mark> thickness · pier dimension · pier spacing · unit type</div>
              <div class="foot"><span class="chip mono">CSV</span><span class="chip mono">JSON</span></div>
            </div>
            <div class="result">
              <div class="head">
                <span class="cref">K-T16</span>
                <span class="ttl">Retaining walls</span>
                <span style="margin-left:auto" class="chip mono">12 rows</span>
              </div>
              <div class="snippet">Max <mark>height</mark> retained · wall thickness · pier geometry · unit type</div>
              <div class="foot"><span class="chip mono">CSV</span><span class="chip mono">JSON</span></div>
            </div>
          </div>

          <div class="result-group">
            <div class="result-group-head">
              <span class="t">Rules</span>
              <span class="c">22 matches · machine-readable</span>
            </div>
            <div class="result">
              <div class="head">
                <span class="cref">K-4.2.4-R01</span>
                <span class="ttl">Retained fill height ≤ Table K-T16</span>
                <span style="margin-left:auto" class="chip fail">mandatory</span>
              </div>
              <div class="snippet mono" style="font-family:var(--font-mono);font-size:12px">parameter: retaining_wall_fill_height_m · operator: lte · value: per_K-T16</div>
            </div>
            <div class="result">
              <div class="head">
                <span class="cref">K-4.2.4-R03</span>
                <span class="ttl">Control joints ≤ 10 m</span>
                <span style="margin-left:auto" class="chip fail">mandatory</span>
              </div>
              <div class="snippet mono" style="font-family:var(--font-mono);font-size:12px">parameter: control_joint_spacing_m · operator: lte · value: 10</div>
            </div>
          </div>

        </div>

        <aside class="results-side">
          <div class="rail-card">
            <h5><span class="dot"></span>Refine</h5>
            <div class="tw-label" style="margin-top:10px">Part</div>
            <div style="display:flex;flex-direction:column;gap:4px;font-size:13px;margin-top:4px">
              <label style="display:flex;align-items:center;gap:8px"><input type="checkbox" checked> Part K · Walls <span class="faint" style="margin-left:auto;font-size:11px">38</span></label>
              <label style="display:flex;align-items:center;gap:8px"><input type="checkbox"> Part H · Foundations <span class="faint" style="margin-left:auto;font-size:11px">6</span></label>
              <label style="display:flex;align-items:center;gap:8px"><input type="checkbox"> Part B · Structural <span class="faint" style="margin-left:auto;font-size:11px">4</span></label>
            </div>
            <div class="tw-label" style="margin-top:14px">Severity</div>
            <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">
              <span class="chip fail">Mandatory</span>
              <span class="chip warn">Recommended</span>
              <span class="chip">Note</span>
            </div>
          </div>
          <div class="rail-card">
            <h5><span class="dot"></span>Recent searches</h5>
            <ul>
              <li>cavity wall tie spacing</li>
              <li>fire rating garage wall</li>
              <li>pier dimensions solid 190 mm</li>
              <li>DPC free-standing</li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  </section>`;
}

/* ============== CANVAS ============== */
function screenCanvas(){
  return `
  <section class="screen" id="s-canvas" data-screen-label="Canvas">
    ${topbar({crumbs:["Canvas","Erf 421 · Garden wall"], actions:`
      <span class="chip ok">5 pass</span>
      <span class="chip warn">1 watch</span>
      <button class="btn" onclick="document.getElementById('save-modal').classList.add('on')"><svg class="ic" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>Save scenario</button>
      <button class="btn"><svg class="ic" viewBox="0 0 24 24"><path d="M4 12v7h16v-7M16 6l-4-4-4 4M12 2v14"/></svg>Share</button>
      <button class="btn accent" onclick="go('clause')"><svg class="ic" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>Generate memo</button>
    `})}
    <div class="content wide">
      <div class="canvas-wrap">

        <div class="canvas-toolbar">
          <div class="tool-grp">
            <button class="tool-btn on"><svg class="ic" viewBox="0 0 24 24"><path d="M4 4l16 10-7 2-2 7z"/></svg>Select</button>
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><path d="M5 12h14M12 5v14"/></svg>Connect</button>
          </div>
          <div class="tool-grp">
            <button class="tool-btn" style="color:var(--accent);border-color:var(--accent-line);background:var(--accent-soft)"><svg class="ic" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Scenario</button>
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>Site</button>
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>Clause</button>
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>Table</button>
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>Rule</button>
          </div>
          <div class="tool-grp">
            <button class="tool-btn" onclick="canvasAddNode('image')"><svg class="ic" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15l5-5 4 4 4-4 5 5"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>Image</button>
            <button class="tool-btn" onclick="canvasAddNode('file')"><svg class="ic" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>Drawing</button>
            <button class="tool-btn" onclick="canvasAddNode('desc')"><svg class="ic" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8M8 14h5"/></svg>Description</button>
            <button class="tool-btn" onclick="canvasAddNode('annot')"><svg class="ic" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>Annotation</button>
            <button class="tool-btn" onclick="canvasAddNode('calc')"><svg class="ic" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4"/></svg>Calc</button>
            <button class="tool-btn" onclick="canvasAddNode('form')"><svg class="ic" viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/></svg>Form ref</button>
            <button class="tool-btn" onclick="canvasAddNode('memo')"><svg class="ic" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13l2 2 4-4"/></svg>Memo</button>
          </div>
          <div class="tool-grp">
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"/></svg>Auto-trace</button>
            <button class="tool-btn"><svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>Run checks</button>
          </div>
        </div>

        <div class="canvas-scroll">
        <div class="canvas" id="canvas" style="width:1300px;height:780px">
          <svg class="canvas-svg" id="canvas-svg">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L10 5L0 10z" fill="currentColor"/>
              </marker>
              <marker id="arrow-img" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L10 5L0 10z" fill="oklch(60% 0.14 200)"/>
              </marker>
              <marker id="arrow-doc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L10 5L0 10z" fill="oklch(60% 0.14 80)"/>
              </marker>
            </defs>
          </svg>

          <!-- ── Row 1: Core compliance chain ── -->
          <div class="node scenario" style="top:30px;left:40px;width:220px" id="cn-scenario">
            <div class="node-hd"><span class="node-tag">Scenario</span></div>
            <span class="node-title" style="font-size:12px;font-weight:600;display:block">Describe your situation</span>
            <textarea placeholder="e.g. I want to build a 1,6 m boundary wall…">I want to build a 1,6 m boundary wall using 140 mm solid brick with piers at 1,8 m centres.</textarea>
            <button class="detect-btn">✦ Auto-detect standards</button>
            <span class="port r"></span>
          </div>

          <div class="node input" style="top:260px;left:40px;width:220px" id="cn-input">
            <div class="node-hd"><span class="node-tag">Input · params</span></div>
            <span class="node-title">Wall specification</span>
            <div class="node-body" style="font-family:var(--font-mono);font-size:11px;line-height:1.6">
              thickness · 140 mm<br>height · 1,6 m<br>units · solid brick<br>piers · 1,8 m c/c
            </div>
            <span class="port r"></span>
          </div>

          <div class="node clause" style="top:30px;left:320px" id="cn-clause">
            <div class="node-hd"><span class="node-tag">Clause</span><span class="chip mono" style="margin-left:auto;font-size:9px;padding:1px 5px">K</span></div>
            <span class="node-title">4.2.4.2 — Boundary walls</span>
            <div class="node-body">Height limit per T17/T18. No earth retained. Piers to top.</div>
            <span class="port l"></span><span class="port r"></span>
          </div>

          <div class="node clause" style="top:200px;left:320px" id="cn-table">
            <div class="node-hd"><span class="node-tag">Table</span><span class="chip mono" style="margin-left:auto;font-size:9px;padding:1px 5px">K-T17</span></div>
            <span class="node-title">Free-standing walls (solid)</span>
            <div class="node-body">140 mm → 1,1 m · with piers → 1,8 m<br>190 mm → 1,4 m · 220 mm → 1,8 m</div>
            <span class="port l"></span><span class="port r"></span>
          </div>

          <div class="node result-ok selected" style="top:30px;left:610px" id="cn-rok">
            <div class="node-hd"><span class="node-tag" style="color:oklch(50% 0.15 150)">Result · pass</span></div>
            <span class="node-title">✓ Height passes</span>
            <div class="node-body">1,6 m ≤ 1,8 m for 140 mm + piers at 1,8 m c/c. R01 satisfied.</div>
            <span class="port l"></span><span class="port r"></span>
          </div>

          <div class="node result-warn" style="top:200px;left:610px" id="cn-rwarn">
            <div class="node-hd"><span class="node-tag" style="color:oklch(55% 0.14 80)">Result · watch</span></div>
            <span class="node-title">⚠ Pier spacing needs field check</span>
            <div class="node-body">Spec 1,8 m. Site photo suggests ~2,1 m. Verify before sign-off.</div>
            <span class="port l"></span><span class="port r"></span>
          </div>

          <!-- ── Row 2: Image & drawing evidence chain ── -->
          <div class="node" style="top:440px;left:40px;width:220px;border-left:3px solid oklch(60% 0.14 200)" id="cn-image">
            <div class="node-hd">
              <span class="node-tag" style="color:oklch(50% 0.14 200)">Image</span>
              <span class="chip mono" style="margin-left:auto;font-size:9px;padding:1px 5px">.jpg</span>
            </div>
            <span class="node-title">Site photo — east wall</span>
            <div style="margin:8px 0;height:72px;background:var(--bg-3);border:1px dashed var(--border-strong);border-radius:6px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;cursor:pointer" onclick="this.style.background='var(--accent-soft)'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-3)"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15l5-5 4 4 4-4 5 5"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>
              <span style="font-family:var(--font-mono);font-size:10px;color:var(--text-3);letter-spacing:0.05em">site-east-wall.jpg</span>
            </div>
            <div class="node-body">Uploaded 2026-04-26 · 3.2 MB · 4032×3024 px</div>
            <span class="port r"></span>
          </div>

          <div class="node" style="top:620px;left:40px;width:220px;border-left:3px solid oklch(68% 0.15 80)" id="cn-file">
            <div class="node-hd">
              <span class="node-tag" style="color:oklch(48% 0.14 80)">Drawing</span>
              <span class="chip mono" style="margin-left:auto;font-size:9px;padding:1px 5px">.pdf</span>
            </div>
            <span class="node-title">Garden wall — construction drawing</span>
            <div style="margin:8px 0;padding:8px 10px;background:var(--bg-3);border:1px dashed var(--border-strong);border-radius:6px;display:flex;align-items:center;gap:8px;cursor:pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-3);flex-shrink:0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
              <div>
                <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-2)">wall-detail-A3.pdf</div>
                <div style="font-size:10px;color:var(--text-3)">Sheet 3 of 7 · Scale 1:50</div>
              </div>
            </div>
            <div class="node-body">Architect drawings · rev B · 2026-04-20</div>
            <span class="port r"></span>
          </div>

          <!-- Description node — connected to both image and file, outputs to table -->
          <div class="node" style="top:490px;left:330px;width:240px;border-left:3px solid var(--accent)" id="cn-desc">
            <div class="node-hd">
              <span class="node-tag" style="color:var(--accent)">Description · AI extraction</span>
            </div>
            <span class="node-title" style="margin-bottom:6px;display:block">Evidence description</span>
            <textarea style="width:100%;border:1px solid var(--border);border-radius:6px;background:var(--bg-2);font:inherit;font-size:11.5px;color:var(--text);padding:8px;resize:none;height:80px;line-height:1.45" placeholder="Describe what is shown…">Wall is 140 mm solid brick. Piers visible at approx. 1,8–2,1 m centres. Wall height appears 1,5–1,7 m above NGL. No weepholes visible. No DPC observed at base.</textarea>
            <button class="detect-btn" style="margin-top:6px">✦ Extract parameters</button>
            <div style="margin-top:8px;display:flex;gap:4px;flex-wrap:wrap">
              <span class="chip mono" style="font-size:10px">thickness: 140 mm</span>
              <span class="chip mono" style="font-size:10px">height: ~1,6 m</span>
              <span class="chip warn" style="font-size:10px">pier spacing: unverified</span>
            </div>
            <span class="port l"></span><span class="port r"></span>
          </div>

          <!-- Annotation node -->
          <div class="node" style="top:420px;left:640px;width:200px;border:1.5px dashed var(--border-strong);background:oklch(97% 0.06 80);box-shadow:none" id="cn-annot">
            <div class="node-hd"><span class="node-tag" style="color:oklch(45% 0.12 80)">Annotation</span></div>
            <div style="font-size:13px;line-height:1.5;color:oklch(35% 0.1 80)">Pier spacing must be confirmed on site before Form 4 sign-off. Engineer to inspect.</div>
            <div style="margin-top:8px;font-family:var(--font-mono);font-size:10px;color:oklch(55% 0.1 80)">— Machiel · 2026-04-26</div>
          </div>

          <!-- Calc node -->
          <div class="node" style="top:560px;left:640px;width:210px;border-left:3px solid oklch(55% 0.18 300)" id="cn-calc">
            <div class="node-hd"><span class="node-tag" style="color:oklch(45% 0.18 300)">Calc · pier check</span></div>
            <span class="node-title">Spacing tolerance</span>
            <div class="node-body" style="font-family:var(--font-mono);font-size:11px;line-height:1.7">
              spec_spacing = 1,800 m<br>
              field_est   = 2,100 m<br>
              Δ = +0,300 m<br>
              <span style="color:oklch(50% 0.15 25)">→ exceeds T17 by 0,3 m</span>
            </div>
            <span class="port l"></span><span class="port r"></span>
          </div>

          <!-- Compliance Memo output node -->
          <div class="node result-ok" style="top:200px;left:900px;width:230px;border-left:3px solid oklch(52% 0.2 var(--hue))" id="cn-memo">
            <div class="node-hd"><span class="node-tag" style="color:var(--accent)">Compliance memo</span></div>
            <span class="node-title">Erf 421 — Wall compliance</span>
            <div class="node-body" style="font-size:11.5px;line-height:1.55">
              5 checks · 1 watch-point<br>
              Part K · 4.2.4.2 · R01–R11<br>
              Pending: pier spacing verification
            </div>
            <div style="margin-top:10px;display:flex;gap:6px">
              <button class="detect-btn" style="flex:1;text-align:center">✦ Generate PDF</button>
            </div>
            <span class="port l"></span>
          </div>

        </div>
        </div>

        <div class="canvas-inspector-float">
          <div class="eyebrow">Inspector</div>
          <h3 class="h3" style="margin:6px 0 2px">Evidence description</h3>
          <div class="faint mono" style="font-size:10.5px">node · description · AI extraction</div>
          <hr class="hr" style="margin:12px 0"/>
          <div class="tw-label">Connections in</div>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:10px">
            <div style="font-size:12.5px;display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:oklch(60% 0.14 200);flex-shrink:0"></span>Image · site-east-wall.jpg</div>
            <div style="font-size:12.5px;display:flex;align-items:center;gap:6px"><span style="width:8px;height:8px;border-radius:50%;background:oklch(68% 0.15 80);flex-shrink:0"></span>Drawing · wall-detail-A3.pdf</div>
          </div>
          <div class="tw-label">Extracted parameters</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px">
            <span class="chip mono">thickness: 140 mm</span>
            <span class="chip mono">height: ~1,6 m</span>
            <span class="chip warn">pier spacing: unverified</span>
          </div>
          <div class="tw-label">Connections out</div>
          <div style="font-size:12.5px;color:var(--text-2);margin-bottom:12px">→ Table K-T17 · pier spacing check<br>→ Result · watch-point R06</div>
          <button class="btn" style="width:100%;justify-content:center;margin-bottom:6px">Open source image</button>
          <button class="btn accent" style="width:100%;justify-content:center">Re-run extraction</button>
        </div>

        </div>
      </div>
    </div>
  </section>`;
}

/* ============== FORMS & CHECKLISTS ============== */
function screenForms(){
  const cards = FORMS.map(f => `
    <div class="card hover" style="cursor:pointer;padding:20px 22px" onclick="showForm('${f.id}')">
      <div style="display:flex;align-items:flex-start;gap:14px">
        <div style="width:40px;height:40px;border-radius:var(--radius-sm);background:var(--accent-soft);border:1px solid var(--accent-line);display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <span style="font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--accent)">${f.label.split(' ')[1]||'F'}</span>
        </div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span class="eyebrow">${f.annex}</span>
            <span class="chip ${f.type==='normative'?'fail':'warn'}" style="font-size:10px">${f.type}</span>
            <span class="chip mono" style="margin-left:auto">p. ${f.pages}</span>
          </div>
          <div class="h3" style="margin-bottom:4px">${f.short}</div>
          <div class="muted" style="font-size:12.5px;line-height:1.45;text-wrap:pretty">${f.title}</div>
          <div style="display:flex;gap:10px;margin-top:10px;font-size:12px;color:var(--text-3)">
            <span>${f.fields} fields</span>
            <span>·</span>
            <span>${f.sections.length} sections</span>
            <span>·</span>
            <span style="color:var(--text-3);font-family:var(--font-mono);font-size:10.5px">${f.status}</span>
          </div>
        </div>
        <svg class="ic" viewBox="0 0 24 24" style="color:var(--text-3);flex-shrink:0;margin-top:4px"><path d="m9 6 6 6-6 6"/></svg>
      </div>
      <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--border);font-size:12.5px;color:var(--text-2)">
        <span class="faint" style="font-size:11.5px">${f.note}</span>
      </div>
    </div>
  `).join('');

  const formDetail = FORMS.map(f => `
    <div class="form-detail" id="fd-${f.id}" style="display:none">
      <button class="btn ghost" style="margin-bottom:18px" onclick="closeForm()">
        <svg class="ic" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
        Back to forms
      </button>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <span class="eyebrow">${f.annex} · ${f.type}</span>
        <span class="chip mono">p. ${f.pages}</span>
        <span class="chip ${f.type==='normative'?'fail':'warn'}">${f.type}</span>
      </div>
      <h1 class="h1" style="margin-bottom:8px">${f.label} — ${f.short}</h1>
      <p class="muted" style="margin-bottom:20px;font-size:13.5px;line-height:1.55">${f.title}</p>
      <div class="reader-meta" style="grid-template-columns:repeat(3,1fr);margin-bottom:24px">
        <div><div class="l">Legal basis</div><div class="v" style="font-size:12px;line-height:1.4;margin-top:4px">${f.basis}</div></div>
        <div><div class="l">Fields</div><div class="v">${f.fields}</div></div>
        <div><div class="l">Source pages</div><div class="v">${f.pages}</div></div>
      </div>
      <h2 class="h2" style="margin-bottom:12px">Sections</h2>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
        ${f.sections.map((s,i) => `
          <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--surface)">
            <span style="font-family:var(--font-mono);font-size:10px;color:var(--text-3);min-width:20px">${String(i+1).padStart(2,'0')}</span>
            <span style="font-size:13.5px;font-weight:500">${s}</span>
          </div>
        `).join('')}
      </div>
      <div class="card" style="background:var(--accent-soft);border-color:var(--accent-line)">
        <div class="eyebrow" style="color:var(--accent)">Note</div>
        <p style="margin:8px 0 0;font-size:13.5px;line-height:1.55">${f.note}</p>
      </div>
    </div>
  `).join('');

  return `
  <section class="screen" id="s-forms" data-screen-label="Forms">
    ${topbar({crumbs:["Library","Forms & checklists"], actions:`
      <button class="btn"><svg class="ic" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>Download all (JSON)</button>
    `})}
    <div class="content narrow">
      <div id="forms-list">
        <div style="margin-bottom:22px">
          <div class="eyebrow" style="margin-bottom:6px">SANS 10400-A · Annexes A–F</div>
          <h1 class="h1" style="margin-bottom:8px">Statutory forms &amp; checklists</h1>
          <p class="muted" style="font-size:14px;line-height:1.55;max-width:56ch">Machine-readable representations of the statutory forms defined in SANS 10400-A. Normative forms are legally required; Form F.1 is informative (non-mandatory).</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${cards}
        </div>
      </div>
      <div id="forms-detail">
        ${formDetail}
      </div>
    </div>
  </section>`;
}
window.showForm = function(id){
  document.getElementById('forms-list').style.display='none';
  document.getElementById('forms-detail').style.display='block';
  document.querySelectorAll('.form-detail').forEach(d => d.style.display = d.id === `fd-${id}` ? 'block' : 'none');
};
window.closeForm = function(){
  document.getElementById('forms-list').style.display='';
  document.getElementById('forms-detail').style.display='none';
};

/* ============== ALL PARTS ============== */
const ALL_PARTS_DATA = [
  {p:"A", name:"Administration",         clauses:64, rules:null,  status:"complete"},
  {p:"B", name:"Structural Design",      clauses:10, rules:null,  status:"complete"},
  {p:"C", name:"Dimensions",             clauses:8,  rules:null,  status:"complete"},
  {p:"D", name:"Public Safety",          clauses:7,  rules:null,  status:"complete"},
  {p:"E", name:"Demolition",             clauses:4,  rules:null,  status:"complete", info:true},
  {p:"F", name:"Site Operations",        clauses:7,  rules:null,  status:"complete"},
  {p:"G", name:"Excavations",            clauses:7,  rules:null,  status:"complete"},
  {p:"H", name:"Foundations",            clauses:11, rules:null,  status:"in-progress"},
  {p:"J", name:"Floors",                 clauses:7,  rules:null,  status:"complete"},
  {p:"K", name:"Walls",                  clauses:23, rules:109,   status:"complete"},
  {p:"L", name:"Roofs",                  clauses:25, rules:null,  status:"complete"},
  {p:"M", name:"Stairways",              clauses:8,  rules:null,  status:"complete"},
  {p:"N", name:"Glazing",                clauses:7,  rules:null,  status:"complete"},
  {p:"O", name:"Lighting &amp; Ventilation", clauses:13, rules:null, status:"complete"},
  {p:"P", name:"Drainage",               clauses:33, rules:null,  status:"complete"},
  {p:"Q", name:"Sanitation",             clauses:37, rules:null,  status:"complete"},
  {p:"R", name:"Stormwater",             clauses:7,  rules:null,  status:"complete"},
  {p:"S", name:"Access for Persons with Disabilities", clauses:23, rules:null, status:"complete"},
  {p:"T", name:"Fire Protection",        clauses:65, rules:null,  status:"complete"},
  {p:"V", name:"Space Heating",          clauses:7,  rules:null,  status:"complete"},
  {p:"W", name:"Fire Installation",      clauses:9,  rules:null,  status:"complete"},
  {p:"XA","name":"Energy Usage in Buildings", clauses:18, rules:null, status:"complete"}
];

function screenAllParts(){
  const statusChip = s => s==='complete'
    ? '<span class="chip ok" style="font-size:10px">Complete</span>'
    : '<span class="chip warn" style="font-size:10px">In progress</span>';

  const rows = ALL_PARTS_DATA.map(d => `
    <div class="toc-row" onclick="${d.p==='K'?"go('part')":""}" style="${d.p==='K'?'background:var(--accent-soft)':''}">
      <div class="n" style="font-size:14px;font-family:var(--font-display);font-weight:500;color:${d.p==='K'?'var(--accent)':'var(--text)'}">${d.p}</div>
      <div class="t">
        <span style="${d.p==='K'?'color:var(--accent);font-weight:600':''}">Part ${d.p} — ${d.name}</span>
        ${d.info?'<span class="chip" style="font-size:10px;margin-left:8px">informational</span>':''}
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        ${statusChip(d.status)}
        ${d.rules?`<span class="chip mono" style="font-size:10px">${d.rules} rules</span>`:''}
      </div>
      <div class="rc">${d.clauses} clauses</div>
    </div>
  `).join('');

  const complete = ALL_PARTS_DATA.filter(d=>d.status==='complete').length;
  const inprog  = ALL_PARTS_DATA.filter(d=>d.status==='in-progress').length;

  return `
  <section class="screen" id="s-allparts" data-screen-label="All Parts">
    ${topbar({crumbs:["Standards","All Parts"], actions:`
      <span class="chip ok">${complete} complete</span>
      ${inprog?`<span class="chip warn">${inprog} in progress</span>`:''}
      <button class="btn accent"><svg class="ic" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>Export registry</button>
    `})}
    <div class="content narrow">
      <div style="margin-bottom:22px">
        <div class="eyebrow" style="margin-bottom:6px">SANS 10400 · National Building Regulations</div>
        <h1 class="h1" style="margin-bottom:8px">All 22 parts</h1>
        <p class="muted" style="font-size:14px;line-height:1.55;max-width:56ch">The full codification registry. Parts marked complete have all clauses, rules and tables extracted and schema-validated. Click Part K to browse its clause structure.</p>
      </div>
      <div class="toc">
        <div class="toc-row" style="background:var(--bg-3);cursor:default;border-bottom:1px solid var(--border)">
          <div class="n" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-3)">Part</div>
          <div class="t" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-3)">Name</div>
          <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-3)">Status</div>
          <div class="rc" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-3)">Clauses</div>
        </div>
        ${rows}
      </div>
    </div>
  </section>`;
}

/* ============== CROSS-REFERENCES ============== */
function screenXrefs(){
  const internal = [
    {from:"Part A · A20", to:"All Parts", why:"Occupancy classification determines which requirements apply"},
    {from:"Part A · Annex A (Form 1)", to:"All Parts", why:"Section 3 compliance matrix covers every regulation B through XA"},
    {from:"Part A · Annex B (Form 2)", to:"All Parts", why:"Competent person disciplines mapped to every regulation"},
    {from:"Part A · Annex B (Form 2)", to:"Parts B, D, G, H, J, K, L, M, N", why:"Structures competent person required"},
    {from:"Part A · Annex F (Checklist)", to:"Parts B–XA", why:"Plan examiner checklist cross-references Regulations A2, A4–A8, A10"},
    {from:"Part K · 4.1", to:"Part B", why:"Structural design compliance path for walls"},
    {from:"Part K · 4.1", to:"Part T", why:"Fire protection compliance path for walls"},
    {from:"Part K · 4.2.1.1", to:"Part H", why:"Foundation compliance for masonry walls"},
    {from:"Part K · 4.6", to:"Part T", why:"Fire resistance requirements for wall elements"},
    {from:"Part H · Foundations", to:"Part K", why:"Foundation sizing references wall type and load"},
    {from:"Part T · Fire", to:"Part K", why:"Fire resistance of wall construction (behaviour in fire)"},
    {from:"Part B · Structural", to:"Part K", why:"Structural capacity of wall elements"}
  ];

  const external = [
    {std:"SANS 2001-CM1", desc:"Construction works — Masonry walling",       parts:"K"},
    {std:"SANS 10082",    desc:"Timber buildings",                            parts:"K"},
    {std:"SANS 10160",    desc:"Basis of structural design and loading",       parts:"B, K"},
    {std:"SANS 1504",     desc:"Prestressed concrete lintels",                parts:"K"},
    {std:"SANS 248",      desc:"Bituminous damp-proof courses",               parts:"K"},
    {std:"SANS 298",      desc:"Mastic asphalt for DPC and tanking",          parts:"K"},
    {std:"SANS 952-1",    desc:"Polymer film for damp-proofing",              parts:"K"},
    {std:"SANS 121/ISO 1461", desc:"Hot dip galvanized coatings on steel",   parts:"K"},
    {std:"SANS 10005",    desc:"Preservative treatment of timber",            parts:"K"},
    {std:"SANS 10177-2",  desc:"Fire testing of materials and elements",      parts:"K, T"},
    {std:"SANS 2001-EM1", desc:"Construction works — Cement plaster",        parts:"K"},
    {std:"SANS 10400-A",  desc:"Administration — basis for all parts",       parts:"All"}
  ];

  return `
  <section class="screen" id="s-xrefs" data-screen-label="Cross-references">
    ${topbar({crumbs:["Library","Cross-references"], actions:`
      <span class="chip mono">${internal.length} internal · ${external.length} external</span>
    `})}
    <div class="content">
      <div style="margin-bottom:22px">
        <div class="eyebrow" style="margin-bottom:6px">Reference map</div>
        <h1 class="h1" style="margin-bottom:8px">Cross-references</h1>
        <p class="muted" style="font-size:14px;line-height:1.55;max-width:56ch">Internal links between SANS 10400 parts, and external standards referenced from the codified clauses.</p>
      </div>

      <div class="grid-2" style="align-items:start;gap:28px">
        <div>
          <div class="section-head"><div><div class="eyebrow">Internal</div><h2 class="h2">Part-to-part references</h2></div></div>
          <div class="toc">
            ${internal.map(r=>`
              <div class="toc-row" style="grid-template-columns:1fr 1fr;gap:12px;cursor:default">
                <div>
                  <div style="font-family:var(--font-mono);font-size:10.5px;color:var(--accent);margin-bottom:2px">${r.from}</div>
                  <div style="font-size:12px;color:var(--text-3)">→ ${r.to}</div>
                </div>
                <div style="font-size:12.5px;color:var(--text-2);line-height:1.4">${r.why}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="section-head"><div><div class="eyebrow">External</div><h2 class="h2">Referenced standards</h2></div></div>
          <div class="toc">
            ${external.map(s=>`
              <div class="toc-row" style="grid-template-columns:auto 1fr auto;gap:12px;cursor:default">
                <span class="chip mono" style="font-size:10px;white-space:nowrap">${s.std}</span>
                <div style="font-size:13px;color:var(--text-2)">${s.desc}</div>
                <span class="chip" style="font-size:10px;white-space:nowrap">Part ${s.parts}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/* ---------- boot ---------- */
const screens = document.getElementById('screens');
screens.innerHTML = [screenHome(), screenPart(), screenClause(), screenSearch(), screenCanvas(), screenForms(), screenAllParts(), screenXrefs()].join('');

/* fill the 22-part grid */
const partGrid = document.getElementById('part-grid');
if (partGrid) {
  partGrid.innerHTML = PARTS.map(([p, name, n, mod, active]) => `
    <div class="parttile ${mod||''} ${active?'active':''}" onclick="${active?"go('part')":""}">
      <div class="pt">${p}</div>
      <div class="pn">${name}</div>
      <span class="dot-status" title="${mod==='info'?'informational':'complete'}"></span>
    </div>
  `).join('');
}

/* fill the Part K TOC */
const toc = document.getElementById('toc');
if (toc) {
  toc.innerHTML = PART_K_CLAUSES.map(c => `
    <div class="toc-row" onclick="${c.active?"go('clause')":""}" style="${c.active?'background:var(--accent-soft)':''}">
      <div class="n">${c.n}</div>
      <div class="t">${c.t}</div>
      <div class="rc">${c.rules} rule${c.rules===1?'':'s'}</div>
      <svg class="ic" viewBox="0 0 24 24" style="color:var(--text-3)"><path d="m9 6 6 6-6 6"/></svg>
    </div>
  `).join('');
}

/* fill the clause-tree */
const ctree = document.getElementById('clause-tree');
if (ctree) {
  const items = [
    {n:"1", t:"Scope"}, {n:"2", t:"Normative refs"}, {n:"3", t:"Definitions"},
    {n:"4.1", t:"General requirements"},
    {n:"4.2", t:"Masonry walls", sub:[
      {n:"4.2.1", t:"General"},
      {n:"4.2.2", t:"Single/double-storey"},
      {n:"4.2.3", t:"Infill panels"},
      {n:"4.2.4", t:"Free-standing walls", on:true},
      {n:"4.2.5", t:"Balustrade & parapet"},
      {n:"4.2.6", t:"Control joints"},
      {n:"4.2.7", t:"Articulation joints"},
      {n:"4.2.8", t:"Corbelling"},
      {n:"4.2.9", t:"Lintels"},
      {n:"4.2.10", t:"Masonry arches"},
      {n:"4.2.11", t:"Roof fixing"}
    ]},
    {n:"4.3", t:"Timber-framed walls"},
    {n:"4.4", t:"Roofs to concrete"},
    {n:"4.5", t:"Water penetration", sub:[
      {n:"4.5.1", t:"Condensation"},
      {n:"4.5.2", t:"Rain penetration"},
      {n:"4.5.3", t:"Rising damp"}
    ]},
    {n:"4.6", t:"Behaviour in fire"},
    {n:"Ann. B", t:"Lintel design"},
    {n:"Ann. C", t:"Rain penetration tests"}
  ];
  const render = (arr) => arr.map(i => `
    <div class="tree-item ${i.on?'on':''}"><span class="n">${i.n}</span>${i.t}</div>
    ${i.sub?`<div class="tree-sub">${render(i.sub)}</div>`:''}
  `).join('');
  ctree.innerHTML = render(items);
}

/* draw canvas connectors */
requestAnimationFrame(drawCanvasLines);
window.addEventListener('resize', drawCanvasLines);
function drawCanvasLines(){
  const svg = document.getElementById('canvas-svg');
  const canvas = document.getElementById('canvas');
  if (!svg || !canvas) return;
  const rect = canvas.getBoundingClientRect();

  const pt = (id, side) => {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const x = side==='r' ? r.right - rect.left : r.left - rect.left;
    const y = r.top - rect.top + r.height/2;
    return [x, y];
  };

  const curve = (x1,y1,x2,y2,color,marker='arrow') => {
    const dx = Math.max(40, Math.abs(x2-x1)/2);
    return `<path d="M${x1} ${y1} C${x1+dx} ${y1} ${x2-dx} ${y2} ${x2} ${y2}" stroke="${color}" stroke-width="2" fill="none" marker-end="url(#${marker})" opacity="0.75"/>`;
  };

  const accentC = 'oklch(52% 0.2 var(--hue))';
  const clauseC = 'oklch(55% 0.12 200)';
  const okC     = 'oklch(55% 0.15 150)';
  const warnC   = 'oklch(60% 0.15 80)';
  const imgC    = 'oklch(60% 0.14 200)';
  const descC   = 'oklch(52% 0.2 var(--hue))';
  const calcC   = 'oklch(55% 0.18 300)';

  const connections = [
    // core chain
    ['cn-scenario','r','cn-clause','l', accentC, 'arrow'],
    ['cn-input',   'r','cn-table', 'l', clauseC, 'arrow'],
    ['cn-clause',  'r','cn-rok',   'l', okC,     'arrow'],
    ['cn-table',   'r','cn-rwarn', 'l', warnC,   'arrow'],
    // multi-connect: table also feeds result-ok
    ['cn-table',   'r','cn-rok',   'l', clauseC, 'arrow'],
    // image & file → description
    ['cn-image',   'r','cn-desc',  'l', imgC,    'arrow-img'],
    ['cn-file',    'r','cn-desc',  'l', warnC,   'arrow-doc'],
    // description → table (evidence feeds the lookup)
    ['cn-desc',    'r','cn-table', 'l', descC,   'arrow'],
    // description → calc node
    ['cn-desc',    'r','cn-calc',  'l', calcC,   'arrow'],
    // calc → result-warn (pier spacing check)
    ['cn-calc',    'r','cn-rwarn', 'l', calcC,   'arrow'],
    // results → memo
    ['cn-rok',     'r','cn-memo',  'l', okC,     'arrow'],
    ['cn-rwarn',   'r','cn-memo',  'l', warnC,   'arrow'],
  ];

  const paths = connections.map(([fromId, fromSide, toId, toSide, color, marker]) => {
    const a = pt(fromId, fromSide);
    const b = pt(toId, toSide);
    if (!a || !b) return '';
    return curve(a[0],a[1],b[0],b[1],color,marker);
  }).join('');

  const defs = svg.querySelector('defs').outerHTML;
  svg.innerHTML = defs + paths;
}

window.canvasAddNode = function(type){
  // placeholder — in a real implementation this would inject a new draggable node
  const labels = {image:'Image node added', file:'Drawing node added', desc:'Description node added', annot:'Annotation added', calc:'Calc node added', form:'Form reference added', memo:'Compliance memo added'};
  const t = document.getElementById('save-toast');
  if (!t) return;
  t.textContent = '+ ' + (labels[type]||'Node added');
  t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)';
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(20px)'; }, 1800);
};
window.canvasAddNode = window.canvasAddNode;

/* ---------- canvas drag ---------- */
function initCanvasDrag(){
  const canvas = document.getElementById('canvas');
  if (!canvas || canvas._dragInit) return;
  canvas._dragInit = true;

  let drag = null, ox = 0, oy = 0, nl = 0, nt = 0;

  canvas.addEventListener('mousedown', e => {
    const node = e.target.closest('.node');
    if (!node) return;
    if (e.target.matches('textarea,input,button,select,a')) return;
    drag = node;
    const scrollEl = canvas.parentElement;
    ox = e.clientX + scrollEl.scrollLeft;
    oy = e.clientY + scrollEl.scrollTop;
    nl = parseInt(node.style.left) || 0;
    nt = parseInt(node.style.top)  || 0;
    node.style.zIndex  = 20;
    node.style.boxShadow = 'var(--shadow-lg)';
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', e => {
    if (!drag) return;
    const scrollEl = canvas.parentElement;
    const dx = (e.clientX + scrollEl.scrollLeft) - ox;
    const dy = (e.clientY + scrollEl.scrollTop) - oy;
    const maxL = canvas.offsetWidth  - drag.offsetWidth;
    const maxT = canvas.offsetHeight - drag.offsetHeight;
    drag.style.left = Math.min(maxL, Math.max(0, nl + dx)) + 'px';
    drag.style.top  = Math.min(maxT, Math.max(0, nt + dy)) + 'px';
    requestAnimationFrame(drawCanvasLines);
  });

  window.addEventListener('mouseup', () => {
    if (!drag) return;
    drag.style.zIndex    = '';
    drag.style.boxShadow = '';
    drag = null;
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
    requestAnimationFrame(drawCanvasLines);
  });

  // grab cursor on hover
  canvas.addEventListener('mouseover', e => {
    const node = e.target.closest('.node');
    if (node && !drag && !e.target.matches('textarea,input,button,select,a'))
      node.style.cursor = 'grab';
  });
  canvas.addEventListener('mouseout', e => {
    const node = e.target.closest('.node');
    if (node && !drag) node.style.cursor = '';
  });
}

/* ---------- navigation ---------- */
function go(name){
  const map = {home:'s-home', part:'s-part', clause:'s-clause', search:'s-search', canvas:'s-canvas', forms:'s-forms', allparts:'s-allparts', xrefs:'s-xrefs'};
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === map[name]));
  document.querySelectorAll('.nav-item[data-screen]').forEach(n => n.classList.toggle('active', n.dataset.screen === name));
  const chatBar = document.getElementById('canvas-chat-bar');
  if (chatBar) chatBar.style.display = name === 'canvas' ? 'flex' : 'none';
  if (name === 'canvas') requestAnimationFrame(initCanvasDrag);
  try { localStorage.setItem('sansc-screen', name); } catch(e){}
  window.scrollTo({top:0});
  requestAnimationFrame(drawCanvasLines);
}
window.go = go;
try {
  const saved = localStorage.getItem('sansc-screen');
  go(saved || 'home');
} catch(e){ go('home'); }

/* ---------- Tweaks ---------- */
const TW = JSON.parse(
  document.getElementById('tweak-defaults').textContent
    .replace(/\/\*EDITMODE-BEGIN\*\//,'').replace(/\/\*EDITMODE-END\*\//,'')
);

function applyTweaks(){
  const root = document.documentElement;
  root.setAttribute('data-theme', TW.theme);
  root.style.setProperty('--hue', TW.hue);
  root.style.setProperty('--density', TW.density);
  root.style.setProperty('--reader-size', TW.readerSize + 'px');

  // font pairing
  const pairs = {
    plex: {ui:"'Inter', ui-sans-serif, system-ui, sans-serif", disp:"'IBM Plex Serif', Georgia, serif"},
    geist: {ui:"'Geist', ui-sans-serif, system-ui, sans-serif", disp:"'Instrument Serif', Georgia, serif"},
    inter: {ui:"'Inter', ui-sans-serif, system-ui, sans-serif", disp:"'Inter', ui-sans-serif, system-ui, sans-serif"}
  };
  const p = pairs[TW.font] || pairs.plex;
  root.style.setProperty('--font-ui', p.ui);
  root.style.setProperty('--font-display', p.disp);

  // sidebar
  const app = document.getElementById('app');
  app.classList.toggle('no-sidebar', TW.sidebar === 'off');

  // swatch active states
  document.querySelectorAll('#tw-swatches .tw-swatch').forEach(s =>
    s.classList.toggle('on', +s.dataset.hue === TW.hue));
  document.querySelectorAll('#theme-seg button').forEach(b =>
    b.classList.toggle('on', b.dataset.theme === TW.theme));
  document.querySelectorAll('#density-seg button').forEach(b =>
    b.classList.toggle('on', +b.dataset.d === TW.density));
  document.querySelectorAll('#sidebar-seg button').forEach(b =>
    b.classList.toggle('on', b.dataset.sb === TW.sidebar));

  const fontSel = document.getElementById('tw-font'); if (fontSel) fontSel.value = TW.font;
  const rs = document.getElementById('rs'); if (rs) rs.value = TW.readerSize;
  const rsv = document.getElementById('rs-val'); if (rsv) rsv.textContent = TW.readerSize;

  requestAnimationFrame(drawCanvasLines);
}
applyTweaks();

function persist(k, v){
  TW[k] = v;
  applyTweaks();
  window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[k]:v}}, '*');
}

/* listeners */
document.querySelectorAll('#theme-seg button').forEach(b => b.addEventListener('click', () => persist('theme', b.dataset.theme)));
document.querySelectorAll('#tw-swatches .tw-swatch').forEach(b => b.addEventListener('click', () => persist('hue', +b.dataset.hue)));
document.getElementById('tw-font').addEventListener('change', e => persist('font', e.target.value));
document.querySelectorAll('#density-seg button').forEach(b => b.addEventListener('click', () => persist('density', +b.dataset.d)));
document.querySelectorAll('#sidebar-seg button').forEach(b => b.addEventListener('click', () => persist('sidebar', b.dataset.sb)));
document.getElementById('rs').addEventListener('input', e => persist('readerSize', +e.target.value));

/* host <-> tweaks */
const tweaks = document.getElementById('tweaks');
window.addEventListener('message', (e) => {
  if (!e.data) return;
  if (e.data.type === '__activate_edit_mode') tweaks.classList.add('on');
  if (e.data.type === '__deactivate_edit_mode') tweaks.classList.remove('on');
});
window.parent.postMessage({type:'__edit_mode_available'}, '*');

/* keyboard: ⌘K → search */
window.addEventListener('keydown', e => {
  if ((e.metaKey||e.ctrlKey) && e.key === 'k'){ e.preventDefault(); go('search'); }
});

/* ---------- Save scenario ---------- */
function saveScenario(){
  const name = document.getElementById('sc-name').value.trim() || 'Untitled scenario';
  const desc = document.getElementById('sc-desc').value.trim();
  // persist to localStorage
  try {
    const saved = JSON.parse(localStorage.getItem('sansc-scenarios') || '[]');
    saved.unshift({ name, desc, date: new Date().toISOString(), tags:['Part K','4.2.4'], pass:5, watch:1 });
    localStorage.setItem('sansc-scenarios', JSON.stringify(saved.slice(0,20)));
  } catch(e){}
  document.getElementById('save-modal').classList.remove('on');
  // toast
  const t = document.getElementById('save-toast');
  t.textContent = `✓ "${name}" saved`;
  t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(20px)'; }, 2200);
}
window.saveScenario = saveScenario;

// close modal on backdrop click
document.getElementById('save-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('on');
});
