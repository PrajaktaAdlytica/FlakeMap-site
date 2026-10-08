# Final website QA — 8 October 2026

Final result: passed

## Final desktop and mobile pass

- Desktop viewport: 1440 × 1000. Mobile viewport: 390 × 844. The entry sequence, homepage, mobile navigation, platform, solutions, pricing, resources, company, sign-in, replay-study request, synthetic demo, and privacy routes were rendered in the in-app browser.
- Every tested route matched the viewport width with no horizontal page overflow, broken loaded images, missing image alternatives, or empty visible links.
- Desktop captures inspected: `qa/final-2026-10-08/desktop-intro-reveal.png`, `desktop-home-hero.png`, `desktop-demo.png`, and `desktop-request-form-success.png`.
- Mobile captures inspected: `qa/final-2026-10-08/mobile-intro-reveal.png`, `mobile-home-hero-final.png`, `mobile-navigation.png`, `mobile-demo.png`, and `mobile-request-form.png`.
- The mobile navigation opens as a full-screen dialog and closes through its explicit close control. The settled homepage preserves readable hierarchy, two clear CTAs, aligned three-step workflow cards, and a 44px navigation trigger.
- Demo verification covered the fixed candidate/timeout/seed-104 state, a fictional reviewer rationale, the local blocked-gate state, and mock JSON report preparation. No external operation was invoked.
- Replay-study verification covered empty validation and a fictional completed review state. Sign-in verification covered empty validation and the local access-link success state. Neither flow sent data.
- Keyboard focus is visibly styled on the mobile form. The entry sequence retains Skip, Play/Pause, chapter controls, Escape dismissal, focus containment, and reduced-motion behavior from the focused entry QA below.
- Source sweep removed the final stale lab-category string from base document and social metadata. No deprecated preview labels or template branding remain.
- No P0, P1, or P2 defects remain in the tested scope. This is a targeted responsive, interaction, and semantics review rather than a screen-reader or WCAG certification.

## Entry sequence comparison target

- Selected source: `qa/intro/selected-direction.png` (first displayed ideation result, The Fault Line).
- Final implementation: `qa/intro/desktop-reveal.png` at http://127.0.0.1:4322/.
- Source and implementation: 1536 × 1024 pixels; CSS viewport 1536 × 1024; density 1. Reveal chapter selected and paused, settled crossfade. Both images were opened in the same comparison tool input.
- Additional genuine captures: mobile-reveal.png (390 × 844), tablet-reveal.png (775 × 804), mobile-short.png (390 × 667).

## Findings and resolution history
- P2, initial typography: second headline line and description sat too low relative to the chosen keyframe. Reduced desktop headline line-height to .82 and adjusted chapter gaps/CTA type. New settled desktop capture compared with source; resolved.
- P2, keyboard behavior: native dialog allowed Shift+Tab to leave document focus for browser chrome. Added explicit first/last control wrapping and pause on keyboard navigation. Forward and reverse Tab tested; both stay in dialog. Resolved.
- No remaining P0/P1/P2 issues in the tested scope.

## Fidelity surfaces
- Typography: existing locally hosted Instrument Serif regular/italic and Manrope preserved. Exact chosen Reveal headline and support copy; readable mobile wrapping. Small controls retain visible focus. Runtime font rendering differs slightly from the generated lettering.
- Layout: source composition, upper logo/skip, centered heading, fracture, evidence caption and lower chapter navigation retained. Pause is an intentional additional control. Narrow screens move evidence onto a light translucent surface and split footer into two rows. No horizontal overflow at tested widths; short mobile controls remain in frame.
- Color: existing pearl, mist, ink, slate and plum tokens. Copper remains in generated fracture asset. No new palette.
- Assets: two original matching 1536 × 1024 raster scenes, no reused prompt-example videos. WebP delivery is approximately 242 KB total. Full PNG sources and prompts retained in public/brand/intro. Live HTML copy and controls, not a flattened screenshot.
- Content: Replay → Reveal → Review, synthetic PO-204 and exactly-one-draft criterion. No real-product performance claims introduced.
- Focused region comparison: text, evidence labels, logo and chapter/footer controls are readable at the full 1536px comparison; additional crops unnecessary. Source's thin annotation leader omitted; live evidence label remains adjacent to the fracture. Minor P3 difference, not a comprehension blocker.

## Interaction verification
- Automatic playback advances through three chapters and exits (12-second timeline plus .65-second fade).
- Pause and manual chapter selection hold current state; Play resumes from chosen chapter.
- Skip, Explore FlakeMap and Escape close; scrolling restored and homepage heading receives focus.
- Forward/reverse Tab wrap within dialog and pause playback.
- Repeat visit suppresses intro in session; Replay the introduction opens it again.
- ?intro=1 explicitly opens intro on load for preview.
- In-site Reduce motion produces a still Reveal chapter, no autoplay control or text animation, manual chapters and immediate dismissal. OS reduced-motion shares the same motion state plus CSS media override; OS setting was not changed in this run.
- Platform route and return-home navigation work after dismissal; intro stays dismissed.
- Console error log: empty.
- Production build and 26-page HTML/asset/internal-route check pass.

## Follow-up polish
- Motion uses matching original still artwork, crossfades and a restrained pointer camera offset; it is not a newly rendered 3D video. Art-directed mobile crops or a full 3D film can be a separate later enhancement.
- Check on physical iOS/Android devices before public launch; current responsive checks used the in-app browser.
