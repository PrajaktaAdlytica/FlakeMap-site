# FlakeMap preview QA

Latest refinement: see [Revision 2 QA](revision-2/QA_NOTES.md) for the aligned hero, label removal, five new hero visuals, stats/customer-story sections, and repeatable desktop/mobile motion. The findings below document the initial delivery.

Verified 8 October 2026 against the local production build at `http://127.0.0.1:4322`. This is a website concept and deterministic synthetic demo, not an operating agent platform or a public deployment.

## Build and integrity

- Production client and server-rendered build succeeded. Twenty-four routes have static HTML; branded 404 HTML and client recovery are included.
- `npm run check` passed for 26 HTML files: primary headings, internal route destinations, and referenced local assets. No Lovable/template branding was found by the check.
- Three fixture tests passed: timeout duplicates on candidate seeds 104/108, delay duplicates only on 108, and baseline produces one artifact under every condition. Normal candidate runs meet 8/8.
- React Router emits two bundler warnings about preserving `use client` directives. Builds complete, route renders work, and no runtime errors were returned by the browser console check.

## Browser observations

- All 24 routes were visited at 390 × 844. Every route had a primary heading, document width of 390, and no broken loaded images. See `mobile-route-audit.json`.
- Desktop 1440 × 1000: hero, product navigation, story, dashboard, pricing, sign-in, request, and completion renders inspected and captured.
- Story chapters 1 → 2 → 4 → 1 update the scene and active chapter; the skip link exits the pinned section. Inactive desktop scenes are inert.
- Tablet 768 × 1024 and short desktop 1440 × 650 use the vertical story, with no pin spacers or page overflow. Mobile chapter navigation reaches the corresponding vertical scene.
- Product menu Escape closes the menu and restores focus to Products. Mobile menu Escape closes the dialog, restores the trigger, and releases body scrolling.
- Flip evidence supports click/tap to hold and Escape to return. The explicit reduced-motion control removes pinning and rotation; all four story scenes remain accessible. The OS reduced-motion change listener is implemented; OS preference emulation was not separately exercised.
- Demo controls change the version, fault condition, and seed. Empty review fails with a focused rationale field; a rationale enables a mock human decision and labeled JSON report. Reset restores candidate/timeout/104 and clears review/report state.
- The workspace ribbon remains at the header boundary when scrolling on desktop and mobile. Mobile artifact cards retain both draft origins and readable criterion labels.
- Study form empty validation, review, edit, local completion, and reset were exercised with fictional details. Sign-in empty validation and access-preview completion were exercised. Neither flow delivers data or creates an account.
- Unknown route displays a branded recovery page.

## Accessibility and performance notes

Semantic headings, labeled native inputs, real links/buttons, table captions, text alternatives, focus styling, navigation Escape handling, mobile dialog focus management, reduced-motion fallback, and a skip link are implemented. Large diagrams scroll within their own panels and have accompanying text descriptions. This is a targeted keyboard/responsive review, not a screen-reader or WCAG certification.

The production main JavaScript is approximately 105.6 KB gzip and the GSAP/Lenis chunk 49.3 KB gzip; site CSS is approximately 11.1 KB gzip. Fonts and visual assets are hosted locally. Routes contain readable static content before JavaScript initializes. No Lighthouse or Core Web Vitals score is claimed; measure these on the eventual public host.

Source inspection found no external form delivery, live model/tool calls, billing, or analytics network transport. Telemetry is off by default and in page memory when enabled; it excludes form contents. Runtime resource/network tracing was unavailable in the browser's inspection surface, so a packet-level no-leak test is not claimed. Consent revocation clears the in-memory event buffer in code.

## Handoff limits

No customer validation, verified integrations, accepted prices, revenue, company social profiles, security certification, public hosting, domain ownership, or trademark clearance is asserted. LinkedIn and Crunchbase marks open explicit pending-profile explanations. Legal/privacy copy is labeled draft preview scope.

Before public release, supply the approved host/domain, legal operator/privacy contact, and social destinations. Before real intake or auth, implement and verify the services described in `docs/RUNBOOK.md`. Screenshots are actual browser renders, not composites; see `SCREENSHOT_MANIFEST.json`.
