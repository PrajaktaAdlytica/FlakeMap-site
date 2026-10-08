# FlakeMap — Prism Replay website

Responsive, multi-page React website with GSAP ScrollTrigger and Lenis. Built from the approved FlakeMap identity, the supplied Startup Website Master Guide, and the workflow-reliability brief.

Revision 2 adds aligned hero steps, five distinct interactive inner-page heroes, demo statistics, the approved customer-story invitation, and bidirectional section reveals across desktop, tablet, and mobile. Requested concept/research labels are removed from the rendered site. Current screenshots and verification are in `qa/revision-2/`.

This is a website and synthetic product-demo implementation for a pre-launch product. Forms and sign-in are local interface previews. No external model/tool/CI writes, payment collection, or personal-data persistence exist.

## Run and build

Use a Node version supported by the locked Vite release (verified here with Node 24.19.0).

```sh
npm ci
npm run dev
```

Development URL: `http://127.0.0.1:4321/`.

```sh
npm run build
npm run check
npm run test
npm run preview -- --port 4322
```

The build creates a client bundle, then renders static HTML for 24 routes plus a branded 404. The temporary SSR bundle is removed. `dist/` is the deployment artifact. JavaScript progressively replaces the still page with interactive UI; the full content is present without JavaScript. Client routes preserve native links and deep links.

## Routes and files

- `/`: glass-ribbon hero, four-chapter desktop scroll story, five proposed modules, diagnostic flip, replay workbench, existing-stack fit, study pricing, FAQ, conversion.
- `/products` plus `/products/trust-desk`, `/trust-review`, `/trust-proof`, `/trust-signal`, `/trust-report`: full inventory and module-specific pages with source, run, fault, gate, and evidence visuals.
- `/problem`, `/solutions`, `/platform`, `/evaluation`, `/pricing`: different comparison, ownership, architecture, methodology, and commercial compositions.
- `/demo`: deterministic fixture workbench with version/condition/seed controls, task outcomes, human mock review, reset, and downloadable mock JSON.
- `/request-demo`, `/contact`, `/sign-in`: complete local validation, review/completion, and access-preview flows.
- `/company`, `/trust`, `/resources` and three resource notes, `/legal/privacy`, `/legal/terms`.
- Unknown client routes show the branded recovery screen. Static hosts should use the provided `404.html` and SPA fallback.

`src/App.jsx` owns navigation, routes, motion synchronization/cleanup, and footer. `Home.jsx` owns the main narrative. `Pages.jsx` owns supporting pages. `components.jsx` owns shared UI and fixtures. `data.js` is the proposed module and synthetic record source. `telemetry.js` is a consent-aware, in-memory event demonstration.

## Motion

One Lenis instance is synchronized to the GSAP ticker and ScrollTrigger. Desktop pinning requires at least 1000px width and 740px height. One bounded horizontal story covers four states; chapter controls and Skip story are available. On mobile, short screens, OS reduced-motion, and the explicit Reduce motion control, the story reads vertically. Route/media changes tear down pinning, listeners, transforms, ticker hooks, and Lenis. Hidden tabs stop the Lenis ticker.

Critical information remains in normal DOM text, tables, and diagrams. The diagnostic flip works with hover, click/tap, Enter/Space, and Escape. It switches faces without rotation under reduced motion.

## Data and conversion boundaries

The demo uses seeds 101–108. Baseline meets 8/8; candidate meets 8/8 normal, 6/8 timeout (duplicates on 104/108), and 7/8 delay (duplicate on 108). These are deliberately constructed fixtures, not reliability measurements. One artifact and the original order reference are the acceptance criterion.

Form entries live only in React memory and clear on reset, route exit, or reload. Completion explicitly says nothing was sent. No trace upload or real account service is provided. Optional interview interest is separate from the required preview-privacy acknowledgment.

Analytics is off by default. `/legal/privacy` offers an in-memory event preview. Event names, timestamps, limited UTMs, synthetic flags, and local dedupe keys are retained without network requests or form contents. Revocation clears events. `verified_signup` and `interview_booked` are never fabricated. Server-side dedupe and actual delivery remain integration work.

## Deployment handoff

`vercel.json` supplies the build/output settings and deep-link fallback. The website is prepared for Vercel; no GitHub push, hosted deployment, or custom domain connection is claimed. See `docs/RUNBOOK.md` for the specific launch steps and integration gaps. No secrets or environment variables are needed for the current frontend.

Social marks are present in the footer with explicit Profile pending behavior because no approved LinkedIn/Crunchbase company URLs were supplied. Pricing stays beside the supplied test-hypothesis labels; there is no active checkout.

## Evidence

See `qa/QA_REPORT.md`, genuine viewport captures in `qa/screenshots/`, `docs/BRIEF_TO_BUILD.md`, `docs/MOTION_PLAN.md`, `docs/EXPERIMENT_READOUT_TEMPLATE.md`, and the brand asset provenance records. Fonts and asset licensing references travel with the source.

## Cinematic entry sequence

The approved Fault Line intro is implemented. Use `/?intro=1` to preview or **Replay the introduction** on the homepage. Includes pause, chapter selection, skip, session memory and reduced motion. See [motion details](docs/ENTRY_SEQUENCE.md) and [verified QA](design-qa.md).
