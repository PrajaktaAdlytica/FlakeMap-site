# FlakeMap — Complete design system v1.2

Open design-system.html for visible, interactive specimens. This extends the Prism Replay brand foundation. Values here and tokens/design-tokens.json define the target website; the earlier identity showcase remains a separate presentation.

## Layout

{
  "contentMax": 1280,
  "readingMax": 680,
  "dashboardMax": 1600,
  "desktop": {
    "columns": 12,
    "gutter": 24,
    "margin": 64
  },
  "tablet": {
    "columns": 8,
    "gutter": 20,
    "margin": 32
  },
  "mobile": {
    "columns": 4,
    "gutter": 16,
    "margin": 20
  },
  "breakpoints": {
    "mobileMax": 767,
    "tabletMax": 1199
  },
  "sectionPadding": {
    "desktop": 96,
    "tablet": 64,
    "mobile": 48
  }
}

## Text styles

|Style|Font / weight|Desktop / mobile px|Line height|Tracking|
|---|---|---|---|---|
|display-xl|Instrument Serif / 400|104 / 56|1.02|-0.035em|
|display-lg|Instrument Serif / 400|72 / 44|1.06|-0.03em|
|display-md|Instrument Serif / 400|48 / 36|1.1|-0.025em|
|heading-lg|Manrope / 800|32 / 26|1.2|-0.03em|
|heading-md|Manrope / 700|24 / 22|1.3|-0.02em|
|heading-sm|Manrope / 700|18 / 18|1.35|-0.015em|
|body-lg|Manrope / 400|18 / 17|1.65|0|
|body-md|Manrope / 400|16 / 16|1.65|0|
|body-sm|Manrope / 500|14 / 14|1.55|0|
|label|Manrope / 600|13 / 13|1.4|0|
|caption|Manrope / 500|12 / 12|1.5|0|
|eyebrow|Manrope / 700|11 / 11|1.4|0.12em|

Display italic accents: one phrase, never table values or action labels. Body max 65ch. Evidence and table text stays left aligned; numeric fields align right with tabular numerals.

## Spacing

4/8/12/16/24/32/48/64/96/128px. Section title → copy 16px; copy → visual 48px desktop, 32px mobile; card padding 32px desktop, 24px mobile; card content gap 16px; copy → action 24px; label → field 8px; field → help 6px. Cards align their metadata and actions, with no clipped content.

## Elevation

- none: `none`
- subtle: `0 2px 6px rgba(23,30,51,.05)`
- raised: `0 8px 24px rgba(23,30,51,.08)`
- hover: `0 12px 32px rgba(23,30,51,.12)`
- overlay: `0 24px 64px rgba(23,30,51,.18)`
- focus: `0 0 0 4px rgba(119,81,111,.16)`

Z-order: canvas 0, content 1, sticky navigation 20, menu 30, modal 50, toast 60. Data stays flat; shadows communicate an inspectable surface or overlay.

## Components and states

{
  "button": {
    "height": 48,
    "compactHeight": 40,
    "iconTarget": 44,
    "paddingX": 20,
    "gap": 8
  },
  "card": {
    "paddingDesktop": 32,
    "paddingMobile": 24,
    "gap": 16,
    "borderWidth": 1
  },
  "input": {
    "height": 48,
    "paddingX": 14,
    "labelGap": 8,
    "helpGap": 6
  },
  "table": {
    "rowMinHeight": 48,
    "cellPaddingX": 16,
    "cellPaddingY": 12
  },
  "diagram": {
    "stroke": 1.5,
    "nodeRadius": 12,
    "labelSize": 14
  },
  "icon": {
    "viewBox": "0 0 24 24",
    "stroke": 1.5,
    "linecap": "round",
    "linejoin": "round",
    "sizes": [
      16,
      20,
      24,
      32
    ],
    "textGap": 8
  }
}

Primary ink / white, hover plum; secondary white or transparent / ink, hover mist; text action uses underline on hover; destructive uses error role. Focus 3px plum ring, 4px offset, keyboard-visible. Pressed transform +1px. Cards hover/focus-visible -2px with stronger border and hover elevation. Selected controls opaque ink with aria-pressed. Disabled controls stay inactive; loading retains readable label and width. Inputs have visible labels, focus/error state and help text; validation feedback has role=status. Error color never stands alone. All interactions remain accessible without hovering. Reduced-motion disables movement and transition duration.

## Card families

Visual feature: original 16:10 material image, stable text body. Run metric: numerator, denominator, criterion, sample label. Evidence folio: artifact, source reference, reviewer state. Queue record: exception, owner, timestamp, criterion state, inspect affordance. Editorial: brief concept prompt and explanatory copy. No customer logos, endorsements or fabricated ROI.

## Dashboard specimen

Persistent DEMO/SYNTHETIC/CONCEPT boundary. PO-204, baseline v0.8, candidate v0.9. Eight seeds 101–108. Normal: both 8/8. Timeout: baseline 8/8, candidate 6/8; duplicates on 104 and 108. Delay: baseline 8/8, candidate 7/8; duplicate on 108. Denominator updates with the condition. Selected seed determines event order and artifacts. All numbers are fixed fixtures and make no statistical inference. Human rationale is required before local adjudication. Mock report export includes the boundary, condition, seed, denominator, criterion, events and reviewer decision. Reset restores initial condition and clears annotation. No integration, sending, billing, network scoring, raw upload or real CI action.

## Diagrams and flow assets

Editable SVGs in diagrams/: timeout-branch.svg and reviewer-journey.svg. 1.5px connector, 6px arrow, 12px node radius, 14px labels. Connect to edge ports, avoid label crossings, protect negative space. Mobile provides a stacked reading equivalent. Diagram demonstrates stock timeout → retry draft → late original response → candidate duplicate. Baseline suppresses the second artifact. Reviewer flow: scenario/seed → fault → compare → evidence → adjudication → criterion decision → mock report. Buyer flow: understand → inspect → qualify approved traces/release cadence → agree owned success criterion. No implicit submission or commitment.

## Background environments

E1 Pearl horizon: opening. E2 Ice fault chamber: split paths. E3 Sage intake: source/scenario. E4 Porcelain grid: runs. E5 Midnight diagnostics: fault isolation. E6 Misted threshold: criterion/gate. E7 Warm archive: human evidence. E8 Quiet sage: trial scope/consent. Shared fonts/material; distinct chapter purpose. Every label uses stable contrast. No arbitrary geography; maps show transitions and provenance.

## Icons

24 original stroke icons, standalone SVG and sprite. Specification in icons/README.md. Do not distort strokes or replace labeled statuses with color-only symbols. Official LinkedIn/Crunchbase footer assets and profile destinations remain a website implementation task.

## Website scope

This is a complete visible brand/component specification with an interactive synthetic dashboard specimen. It does not establish production functionality, full-site accessibility compliance, buyer validation, trademark clearance or deployment. Page hierarchy and scroll choreography remain in PAGE_AND_SECTION_DIRECTION.md.

## Visual expansion v1.2

Both preview footers now show LinkedIn and Crunchbase official-site icon assets with explicit profile-pending behavior. The icons preserve original shape and color. Sources in VISUAL_ASSET_RECORD.json. No FlakeMap profile destinations or memberships are claimed.

Three flip cards reveal seeded results, artifact evidence and fault transitions. 580ms cubic-bezier(.22,1,.36,1), 1200px perspective, 16px radius. Mouse hover previews; click pins; Enter/Space activates; Escape closes; touch taps. aria-pressed and aria-hidden track the displayed face. Reduced-motion displays the chosen face without rotation. Required evidence also appears in the persistent dashboard/visual library.

Two new original illustrations are in illustrations/ (PNG masters + compressed WebP). The seed lattice is metaphorical material art, not a quantitative chart. The evidence archive shows context linking. Prompts and generation method in VISUAL_ASSET_RECORD.json.

Editable evidence visuals: charts/condition-comparison.svg (8/8 normal, 6/8 timeout, 7/8 delay candidate; baseline 8/8); charts/seed-condition-map.svg (timeout 104/108 and delay 108 duplicates); diagrams/scenario-provenance.svg (fixture + criterion → scenario + rubric → evidence). All data synthetic. No aggregate quality score or inferential confidence claim. Visual tabs expose a matching SVG download and text/table equivalent; narrow screens can scroll inside the SVG panel.


## v1.3 — Access, intake, and evidence patterns

- `sign-in.html`: secure-link UI preview, required email validation, local confirmation, demo workspace entry, and access-help disclosure. No authentication or email delivery.
- `request-demo.html`: qualification form with email, company, role, cadence, workflow, optional stack, trace-sharing approval, optional interview interest, and required preview notice acknowledgment. Includes error summary, review/edit, local completion, and reset. No public trace upload.
- `privacy-preview.html`: accurate local prototype scope; operator, contact, retention, and production consent details remain launch requirements.
- `workspace.html`: 8 fixed seeded records, exception/pending filters, selected source/artifact evidence, duration plot with text table, study-boundary map, and criterion table. No live integrations.
- `flows.css` / `flows.js`: shared responsive form and workbench implementation; native form controls, visible focus, reduced-motion fallback, no network calls or browser storage.
- `charts/run-duration.svg`, `diagrams/study-boundary.svg`, `charts/workspace-fixtures.json`: editable original visuals and data dictionary.

Screenshot references: supplied CallTether screenshots informed scope-boundary and master/detail clarity; supplied Ramp screenshot informed annotated-dot clarity. Artwork, data, copy, and components are original FlakeMap implementations. No vendor screenshot or logo is embedded.
