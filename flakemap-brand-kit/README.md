# FlakeMap Prism Replay brand kit

Start with BRAND_IDENTITY.md, then DESIGN_SYSTEM.md and PAGE_AND_SECTION_DIRECTION.md. Open design-system.html for all layout/component/workflow specimens. Open index.html for the interactive identity preview; serve over localhost for reliable font/clipboard behavior.

From the directory containing flakemap-brand-kit:

```sh
python3 -m http.server 4317 --bind 127.0.0.1
```

Open http://127.0.0.1:4317/flakemap-brand-kit/.

Assets: logos/ contains outlined SVG and PNG variants; favicon/ contains web/touch icons; fonts/ contains fonts and licenses; backgrounds/ contains original PNG artwork and WebP derivatives; tokens/ contains semantic CSS/JSON and contrast checks. Read ASSET_PROVENANCE.json and QA_NOTES.md for sources and scope.

This is a research-stage brand and website direction. Product samples are synthetic. Brand/domain clearance and buyer validation are unverified.


## v1.3 — Access, intake, and evidence patterns

- `sign-in.html`: secure-link UI preview, required email validation, local confirmation, demo workspace entry, and access-help disclosure. No authentication or email delivery.
- `request-demo.html`: qualification form with email, company, role, cadence, workflow, optional stack, trace-sharing approval, optional interview interest, and required preview notice acknowledgment. Includes error summary, review/edit, local completion, and reset. No public trace upload.
- `privacy-preview.html`: accurate local prototype scope; operator, contact, retention, and production consent details remain launch requirements.
- `workspace.html`: 8 fixed seeded records, exception/pending filters, selected source/artifact evidence, duration plot with text table, study-boundary map, and criterion table. No live integrations.
- `flows.css` / `flows.js`: shared responsive form and workbench implementation; native form controls, visible focus, reduced-motion fallback, no network calls or browser storage.
- `charts/run-duration.svg`, `diagrams/study-boundary.svg`, `charts/workspace-fixtures.json`: editable original visuals and data dictionary.

Screenshot references: supplied CallTether screenshots informed scope-boundary and master/detail clarity; supplied Ramp screenshot informed annotated-dot clarity. Artwork, data, copy, and components are original FlakeMap implementations. No vendor screenshot or logo is embedded.
