# SANS·Codified

A working prototype exploring how South Africa's National Building Regulations
(SANS 10400) could be made **machine-readable, searchable, and runnable** —
so designers, plan checkers, and contractors can find, ask, and verify
clauses without leaving their workflow.

> **Status: early proof-of-concept.** Numbers, clauses, and AI answers in this
> repo are illustrative. Nothing here should be used to make a real compliance
> decision.

---

## What this prototype demonstrates

The code today is a clickable, mid-fidelity mock-up of a single platform that
brings together five jobs that are normally scattered across PDFs, spreadsheets,
and email threads:

1. **Browse** — pick a Part of SANS 10400 and read its clauses with
   typography designed for long-form reading.
2. **Search** — full-text search across clauses, with AI-assisted answers that
   cite the clauses they draw from.
3. **Ask** — natural-language questions ("How high can a 140 mm single-leaf
   boundary wall be?") return a synthesised answer plus the source rules.
4. **Model** — assemble compliance scenarios on a visual canvas: drop in a
   site description, attach drawings or photos, link the clauses that govern
   them, and watch pass / watch / fail results flow through.
5. **Reuse** — a library of normative SANS forms and a cross-reference map
   showing how parts cite each other and external standards.

A landing page at the root explains the POC and offers a single button into
the working app.

### Screens included

| Screen      | What it shows |
|-------------|---------------|
| `landing`   | One-page intro to the POC, single CTA into the app. |
| `home`      | Workspace dashboard — ask box, recent work, all 22 parts at a glance. |
| `search`    | Clause search with AI-answer card and grouped results. |
| `part`      | Part overview (Part K · Walls is the worked example) with full table of contents. |
| `clause`    | Reading view for a single clause, with cross-references in the rail. |
| `canvas`    | Drag-and-drop scenario builder; nodes for inputs, clauses, calcs, and results. |
| `forms`     | Library of SANS normative forms. |
| `allparts`  | All 22 parts of SANS 10400 in one grid. |
| `xrefs`     | Internal cross-references and cited external standards. |

### Headline numbers (illustrative)

- 22 parts codified
- 437 clauses indexed
- 1 431 extracted rules
- 192 structured tables

These numbers describe the **target shape** of a fully codified dataset —
they are not yet backed by a complete extraction.

---

## Running it

This is a static site with no build step. Any of the following work:

**Option A — open the file directly**

```sh
open index.html        # macOS
xdg-open index.html    # Linux
```

**Option B — serve it locally** (recommended; some browsers restrict
`file://` script loading)

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

**Option C — view the deployed copy**

The `main` branch auto-deploys to GitHub Pages via
`.github/workflows/deploy-pages.yml`:

<https://mwo-aec.github.io/sans-codified-poc/>

---

## Project layout

```
.
├── index.html         Shell — design tokens, sidebar, topbar, modals, tweaks panel
├── app.js             All screen renderers, the SPA router (`go(name)`), and demo data
├── Wireframes.html    Earlier sketchy exploration of five product directions
├── README.md          You are here
├── .github/workflows/ GitHub Pages deployment
├── screenshots/       Reference screenshots
└── uploads/           Sample images used by the canvas demo
```

### Tech

- Vanilla HTML, CSS, and JavaScript — no framework, no build pipeline.
- A single-page-app feel via a small `go(name)` router (`app.js`) that toggles
  one `.screen.active` at a time.
- A design system in CSS custom properties (`--accent`, `--bg`, `--text`,
  `--font-display`, …) defined in `index.html`, with light/dark themes.
- Type system: **Inter** (UI), **IBM Plex Serif** (display), **JetBrains Mono**
  (code & metadata). Alternative pairings (Geist + Instrument Serif, Inter
  only) are switchable from the Tweaks panel.

### Customising the look

Click into the prototype, then open the **Tweaks** panel (bottom-right) to
change theme, accent hue, font pairing, layout density, sidebar visibility,
and clause type size. Settings are persisted to the host editor via
`postMessage`.

---

## Roadmap

The prototype is intentionally hand-coded mock data so that conversations
about *what* the platform should do are not blocked by *how* the data flows.
Likely next steps:

- Replace the in-file demo data with a clause / rule / table dataset extracted
  from one full Part (Part K is the worked example).
- Wire the **Ask Codified** input to a real retrieval-augmented model that
  cites clauses verbatim.
- Persist canvas scenarios beyond `localStorage` and make them shareable.
- Expand the cross-reference graph to all 22 parts.

---

## License & attribution

This repository is a design and engineering proof-of-concept. SANS 10400
itself is © South African Bureau of Standards; nothing in this repository
reproduces the standard in full.
