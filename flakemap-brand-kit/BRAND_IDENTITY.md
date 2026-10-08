# FlakeMap — Brand identity v1.0

8 October 2026 · Selected direction: **Prism Replay**, displayed option 2.

This identity follows the supplied startup brief and `STARTUP_WEBSITE_MASTER_GUIDE.md`. The chosen concept supplies the visual direction; the master guide supplies completeness, typography, asset, motion and QA requirements. The company remains a research-stage concept. This kit establishes a usable brand foundation; the full website and product demo are subsequent implementation work.

## 1. Brand foundation

**Name:** FlakeMap. **Category:** proposed Agent Reliability Lab. **Buyer:** AI engineering lead with weekly releases and consented traces. **Champion:** evaluation/QA engineer. **Trial budget owner:** engineering VP.

**Core job:** investigate how changing tool conditions affect a multi-step agent workflow, inspect the task artifact and support a human-reviewed release decision.

**Positioning:** a proposed workflow investigation layer alongside the team's existing evaluation stack. Repeated evaluation, human review and tool fault injection already exist in the category. Incremental value and willingness to pay remain questions for a real pilot.

**Brand traits:** precise, observant, composed, investigative, clear.

**Literal descriptor:** Agent Reliability Lab.

**Editorial headline:** Every path has a breaking point.

**Explanatory line:** Find the failing step in long-horizon agent workflows before release.

**Supporting concept copy:** Explore controlled tool failures, repeated runs and artifact evidence in a synthetic replay workspace.

**Primary public action:** Request a replay study. **Secondary action:** Explore the synthetic demo.

The editorial line gives the opening atmosphere. The literal explanation and concept status must be visible with it. Do not let the ribbon or an abstract headline do all the explaining.

## 2. Logo and favicon

### Folded replay mark

The mark develops the folded-path character of the selected concept into a flat master silhouette. Its crossover and return route suggest a workflow being replayed and inspected. The flat mark remains readable where glass artwork would be too delicate.

The original generated source is retained at `logos/logo-source.png`. The SVG symbol traces that source's alpha silhouette. It is not a competitor mark. The Manrope 800 wordmark is converted to actual glyph outlines, so the lockup has no external font dependency.

### Production files

- `logos/flakemap-lockup-ink.svg`: primary horizontal logo for pearl, white, mist and sage surfaces.
- `logos/flakemap-lockup-reverse.svg`: white horizontal logo for opaque ink/night surfaces.
- `logos/flakemap-lockup-mono.svg`: black version for one-color reproduction.
- Matching `flakemap-symbol-*`, `flakemap-wordmark-*` and `flakemap-stacked-*` SVG/PNG variants.
- `favicon/favicon.svg`, `favicon/favicon.ico`, 16/32/48/64px PNGs.
- `favicon/apple-touch-icon.png`, 192/512px app icons, `site.webmanifest`.

### Use rules

- Keep the wordmark and mark proportions. Use the supplied asset, not an approximation.
- Clear space: at least half the displayed symbol width on every outside edge. Keep the gap inside the supplied lockup unchanged.
- Recommended horizontal lockup width: 148–184px for website navigation; 120px minimum for ordinary digital use.
- Symbol minimum: 24px in UI. The favicon uses a dedicated navy tile with the reversed source silhouette; inspect 16/32px output at actual size.
- Use the stacked lockup only where the narrow format benefits from it.
- Place marks on a stable opaque region. Do not put the ink logo on the dark background or the white logo over a bright prism reflection.
- Do not stretch, outline, rotate, add glow, animate individual logo pieces or apply an iridescent fill to the working logo.
- Domain and trademark clearance have not been established by design work.

## 3. Brand palette and accessible interface roles

| Brand color | Hex | Responsibility |
|---|---|---|
| Pearl | `#F7F8FA` | Primary light canvas and stable reading field |
| Mist | `#EEF2F7` | Supporting surfaces, threshold scene, subtle grouped regions |
| Ice | `#DCE7EE` | Fault chamber, informational diagrams, dark secondary text |
| Sage | `#E1EBE6` | Intake, deliberate conversion and consent contexts |
| Ink | `#171E33` | Logo, primary text, actions, diagnostic chapter |
| Slate | `#526176` | Secondary copy, captions, table metadata |
| Plum | `#77516F` | Selected controls, annotation accent, primary-action hover and focus |
| Copper | `#A6502A` | Exact injected fault or exception seam; used sparingly |

Supporting primitives: white `#FFFFFF`, warm archive `#F4F0E9`, separator `#CBD4E0`, control boundary `#718096`, night `#10172A`.

Semantic state pairs:

| State | Text/icon | Background | Label example |
|---|---|---|---|
| Success | `#226747` | `#E8F2EA` | Task criterion met |
| Warning | `#7A4E11` | `#F8ECD6` | Needs review |
| Error | `#A13252` | `#F9E8EF` | Duplicate draft |
| Information | `#345A80` | `#EAF0F7` | Simulation only |

Status always has text, and an icon where useful. “Needs review” is distinct from a successful artifact comparison. Copper is a fault-location accent, not the general destructive-button color.

**Calculated contrast:** ink on pearl 15.56:1; slate on mist 5.61:1; white on ink 16.54:1; white on plum 6.58:1; copper on pearl 5.20:1. The 14 defined text/control/focus pairings in `tokens/contrast-checks.json` meet their stated 4.5:1 text or 3:1 control threshold. This is color-pair verification, not certification of the eventual website. Reading over rendered artwork still requires checking its actual backdrop.

Keep most page area pearl/white/mist, with information-specific sage/ice/warm environments. Reserve substantial dark contrast for selected diagnostic chapters. The prism material may contain pale interference hues; those hues do not become additional button or status colors.

## 4. Typography and optical spacing

Two licensed type families carry the complete identity.

- **Instrument Serif Regular / Italic:** narrative/display headings, short editorial statements and selected words. Its serif character preserves the selected option's atmosphere. Use regular, not synthetic bold.
- **Manrope variable:** wordmark basis, navigation, body, forms, buttons, tables, captions and data. Strong 700/800 weights bring the confident, carefully spaced sans quality requested from Blackbird. Use tabular numerals for comparable run data.

Font files are self-hostable in `fonts/`; WOFF2 versions accompany original TTFs. Each family includes its official OFL notice and source URLs in `fonts/sources.json`. Sources are the official Google Fonts repository. Keep notices in distributions.

| Role | Desktop | Mobile | Line height | Tracking / weight |
|---|---|---|---|---|
| Narrative hero | 88–112px | 48–60px | 0.98–1.04 | Serif regular; -0.035em |
| Chapter heading | 56–72px | 38–46px | 1.04–1.10 | Serif regular; -0.03em |
| Page section heading | 34–44px | 28–34px | 1.14–1.20 | Serif, or Manrope 700 for technical headings |
| Product/UI heading | 18–24px | 18–22px | 1.25–1.35 | Manrope 700; -0.025em |
| Lead | 18–22px | 17–19px | 1.45–1.55 | Manrope 400/500; -0.015em |
| Body | 16px | 16px | 1.60–1.75 | Manrope 400 |
| Data/form/control | 14–16px | 14–16px | 1.4–1.6 | Manrope 500/600; tabular numbers |
| Caption | 12–13px | 12–13px | 1.5 | Manrope 500 |
| Chapter label | 11–12px | 11–12px | 1.45 | Uppercase Manrope 600; +0.12em |

Keep readable body lines to approximately 55–65 characters. Hero lines are short deliberate phrases. Do not turn paragraphs into oversized display type or reduce meaningful mobile table labels below 12px. Use italic to emphasize one phrase per major headline, not every other word. Avoid excessive tracking on lowercase body copy.

## 5. Eight related background environments

The website must have visual variety because each chapter explains a different responsibility. It must also remain recognizably FlakeMap. The shared thread is material, typography, gutters, evidence labels and meaningful changes of state.

| Environment | Background | What the section explains | Visual mechanism |
|---|---|---|---|
| E1 Pearl horizon | Original pearl ribbon artwork | The workflow and brand proposition | Labeled three-stop path, trace marker and direct CTA |
| E2 Ice fault chamber | Original close-up split-ribbon artwork | A condition changes event order | Injected fault, two response paths and resulting artifacts |
| E3 Sage intake bench | Sage, opaque fixture sheets, fine guides | Where a scenario comes from | Source fields mapped into an approved scenario |
| E4 Porcelain instrument grid | White/pearl, fine table rules | Repetition and distribution | Seed-by-condition matrix, counts and exclusions |
| E5 Midnight diagnostics | Original dark ribbon artwork + stable light panel | The exact exception needing attention | Event timeline and failed transition inspection |
| E6 Misted threshold | Mist/ice, parallel decision lanes | Criteria and a proposed release gate | Criterion ledger, reviewer input and state change |
| E7 Warm evidence archive | Warm paper field and annotation margins | Provenance, clustering and adjudication | Evidence folio, artifact/source linkage, reviewer rationale |
| E8 Quiet sage conversion | Broad quiet sage/pearl | Scope, pricing and permission | Useful comparison table or form with explicit consent |

Three raster masters and compressed WebP equivalents are supplied under `backgrounds/`. The remaining environments are intentional layout/surface systems; they do not require a generated image behind every paragraph. Do not simply rotate these backgrounds under identical sections. Make the dominant visual and composition different as well.

Generated backgrounds are material assets, not baked diagrams or product screenshots. Place editable HTML/SVG labels, controls and diagram relationships over or beside them. Raster material alone cannot explain a product function. Use an opaque reading surface wherever backdrop contrast varies.

### Material grammar

Glass = the route being followed. Frosting = uncertainty or unavailable detail, always explained in text. Copper seam = the injected condition. Paper = evidence and provenance. Porcelain = repeatable instruments and tables. Navy = concentrated diagnostics. Sage = careful intake or decisions.

Keep physical depth restrained. Avoid adding birds, feathers, snowflake imagery, decorative AI spheres, geographic scenery or floating unrelated objects. A geographic map has no defined task here; use workflow topology, dependency maps and evidence relationships instead.

## 6. Diagrams, maps, illustrations and data

**Workflow path:** connected steps with visible input/output ports, labels and a selected event. No unexplained node cloud. An arrow must end at a port/node boundary, never through text.

**Replay comparison:** aligned baseline/candidate event order, same fixture and task criterion; distinguish a retry from a late original response. The stock-timeout example causes duplication because two completion paths reach drafting without a shared deduplication guard.

**Run matrix:** conditions are one axis, seeds another. Show task successes/total evaluated runs, exclusions and condition distribution. Counts come from the same fixture corpus. No opaque overall “quality score” or decorative confidence interval.

**Evidence folio:** source references, expected/observed artifact, reviewer rationale, owner and dated next action. The diagram can highlight relationships, while a table/list remains the canonical accessible form.

**Cards with visuals:** a card depicts a particular artifact or mechanism. Desk uses a source sheet; Review uses a row/column fragment; Proof uses a fault timeline; Signal uses a criterion ledger; Report uses linked evidence. Avoid reusing one generic screenshot across all five products.

**Images:** original generated material studies can explain the brand. Product pictures must eventually be genuine rendered demo screens with synthetic labels; do not pass this selected concept image off as a real screenshot. Company pages should use process illustrations until actual approved people/company photographs exist.

**Icon system:** use one open-source library, recommended Lucide, with 1.75–2px strokes, 20px standard action icons, 16px metadata/status icons, optically aligned with labels. Pair status icons with text. Do not mix emoji, filled novelty symbols and several line-icon styles. Include official LinkedIn/Crunchbase marks only with approved profile destinations or explicit inactive states.

## 7. Layout and component details

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Desktop wide container: 1280px inside 1440px viewport, 80px typical gutters. Reading column: 680–760px. Mobile gutters: 20px, increasing when width permits.
- Desktop 12-column grid, 24px gaps; tablet 8-column; mobile 4-column with 16px gaps. Use composition rather than forcing every section into equal cards.
- Chapter padding: usually 96–128px desktop, 56–72px mobile. Product evidence may be denser; never clip mobile labels to preserve desktop alignment.
- Controls: minimum 44px target; primary buttons 48px high; 20–24px horizontal padding; 10px radius. Selected option's restrained rectangles remain the default rather than universal pill buttons.
- Panels: 16px radius, 1px separator where sufficient; use stronger control borders for inputs. Feature media can use 24px radius when it has a distinct container.
- Shadows: one restrained elevation for a floating evidence object; tables, body sections and forms should rely mostly on alignment and separators.
- Hover: primary ink moves to plum, arrow shifts 3px; border/surface states coordinate. Focus: 3px plum outline, 3px offset on light; ice ring on dark. Pressed: small color/state change without a large layout jump.
- Disabled controls use text explaining the unavailable action. Busy/success/error states have explicit labels. Required instructions are never hidden inside a hover.
- Forms use visible labels, useful examples, inline errors and a focused error summary. Consent checkboxes stay separate from optional interview opt-in.

## 8. Motion identity

**Principle:** follow one trace, change one condition, reveal its consequence, inspect its evidence.

Micro interactions: 160ms. Selection changes: 240ms. Section entrances: 480ms. Easing: `cubic-bezier(.22, 1, .36, 1)`. Small pointer material movement: maximum 6px, limited to artwork. These are brand starting values, not mandates to animate every element.

| Pattern | Input | Visible meaning | Accessible/mobile equivalent |
|---|---|---|---|
| Hero trace | Scroll or select a step | The input moves through labeled workflow stages | Complete three-step still with step buttons |
| Fault seam | Select a condition | Timeout/429/stale input changes a named transition | Before/after event list with artifact summary |
| Horizontal evidence chapter | Desktop vertical progress or previous/next | Event → retry → artifacts → reviewer | Stacked mobile panels; keyboard previous/next; no trapped scroll |
| Matrix | Filter version/fault/seed | Matching rows and totals update together | Captioned accessible table and final values |
| Evidence | Select source/artifact | Related event and provenance highlight | Ordered records, text summary and labeled detail pane |
| Gate | Annotate a mock decision | Criterion/reviewer state changes visibly | Native controls; action says simulated; no scroll-triggered approval |

Use native scrolling. One bounded pinned narrative is sufficient for the main story. On short/narrow viewports, stack it. Scrubbed sequences reverse predictably; entrance reveals settle. User-chosen demo settings persist while scrolling. Pause offscreen and hidden-tab movement. Content and navigation load before elaborate media.

Reduced motion replaces the camera/path choreography with complete paired states and an ordered story summary. Do not force smooth scrolling. Color is never the only signal. Pointer effects are decorative enhancements; product instructions and labels do not move with the mouse.

## 9. Distinct page and module identities

See `PAGE_AND_SECTION_DIRECTION.md` for the full homepage, route, input/output and mobile matrix.

- **FlakeMap Trust Desk:** source-to-scenario mapping on the sage intake bench.
- **FlakeMap Trust Review:** seeded run distribution on the porcelain instrument grid.
- **FlakeMap Trust Proof:** fault/event-order timeline in midnight diagnostics.
- **FlakeMap Trust Signal:** criteria-to-decision ledger at the misted threshold.
- **FlakeMap Trust Report:** annotated evidence folio in the warm archive.

All five are proposed modules. Each belongs on the homepage, product menu, portfolio, its own page and study selector. A shared platform diagram cannot replace the product pages.

Home has the complete scroll narrative. Problem uses a cause/step/artifact comparison. Solutions uses buyer jobs. Platform uses responsibility swimlanes. Evaluation uses methodology and distributions. Pricing uses scope and hypotheses. Company uses methodology and principles. Resources use readable articles and margin annotations. Trust uses a data boundary diagram. Contact/study/legal use quiet reading and form surfaces. Demo uses an opaque workbench with persistent labels. Sign-in is a polished concept-access experience with honest authentication boundaries.

## 10. Copy, proof and launch boundaries

Use concrete terms: tool condition, seed, artifact, failed transition, reviewer, acceptance criterion. Explain long-horizon workflow testing in plain language. Avoid sweeping “enterprise-grade,” “guaranteed reliability,” “trusted by,” “production proven” or unsupported uniqueness claims.

Public status: **Concept preview**. Every demo view/export/capture: **DEMO — SYNTHETIC DATA** and concept status. Aggregates: **Simulation only; no production reliability estimate**. A seed makes the local fixture simulation repeatable; it does not guarantee identical external LLM/API behavior.

Pricing remains the supplied hypotheses: $3,000 four-week study; test $1,200/month plus metered runs. Label beside amounts, no active checkout. No invented testimonials, customers, certifications, integrations, financial outcomes or successful milestones.

The eventual public form collects minimum qualification and explicit privacy consent, not raw traces/secrets. Submission success describes actual delivery. Real analytics and synthetic demo events remain distinct. Privacy/controller/contact/retention details must reflect the actual implementation.

## 11. Handoff and verification

Deliverables in this kit: SVG/PNG logo variants; generated logo source; favicon/ICO/touch/app icons; licensed TTF/WOFF2 fonts and notices; 8-color brand system and semantic tokens; calculated contrast pairings; 3 original background masters/WebP derivatives; complete page/section/motion plan; interactive identity preview; asset provenance and prompts.

Use `tokens/design-tokens.json` as the color source of truth and `tokens/flakemap-tokens.css` as its CSS implementation. Palette changes require token and contrast updates together. Do not infer different product status from changing a preview background.

The brand preview demonstrates assets and selections. It does not imply the full website, form backend, authentication, integrations, or product engine has been implemented. Full-site QA will still cover all routes/CTAs, 1440px/390px renders, keyboard, reduced motion, contrast over imagery, no fixture leakage, reset/export, authentic claims, performance and deployment.

## 12. Sources and asset record

- Selected source: `../FlakeMap-visual-direction-2-prism-replay.png`.
- User guide: `STARTUP_WEBSITE_MASTER_GUIDE.md`, supplied 8 October 2026.
- Fonts: official Google Fonts repository; URLs and notices in `fonts/`.
- Generated material/master mark: built-in Image Generation; prompts and conversion provenance in `ASSET_PROVENANCE.json`.
- Competitor/research context is retained in `../FlakeMap-research-and-website-direction.html`.

Do not distribute the user's reference screenshots as public brand assets. They inform direction only.

## Complete system extension — v1.1

The visible component system is now in `design-system.html`, with exact contracts in `DESIGN_SYSTEM.md` and updated CSS/JSON tokens. It includes grid/margins, responsive text styles, spacing, elevation, five card families, button/field states, a synthetic replay dashboard, editable product/reviewer diagrams, buyer flow, eight background environments and 24 original SVG icons. These values define the implementation target; the original identity presentation remains a separate showcase.

## Visual/footer extension — v1.2

Footer specimens now include LinkedIn and Crunchbase official-site icon assets. New illustrations, charts, a provenance map and flip interactions are visible in design-system.html. See DESIGN_SYSTEM.md and VISUAL_ASSET_RECORD.json for exact rules, prompts and sources. Profile URLs remain unconfigured.
