# FlakeMap

FlakeMap is a premium workflow-reliability website and deterministic synthetic product demo for teams evaluating multi-step agent releases.

## Repository structure

- `flakemap-website/` — production React/Vite website, static prerendering, demo fixtures, QA evidence, and Vercel configuration.
- `flakemap-brand-kit/` — brand identity, logos, favicons, typography, design tokens, backgrounds, illustrations, charts, diagrams, icon system, forms, dashboard references, and captured examples.
- `FlakeMap-research-and-website-direction.html` — research and website-direction artifact.
- `FlakeMap-visual-direction-*.png` — the three original visual directions used during selection.
- `FlakeMap-visual-direction-prompts.json` — visual-direction generation record.

## Local website setup

```bash
cd flakemap-website
npm ci
npm run dev
```

Production verification:

```bash
npm run build
npm run check
npm test
```

## Vercel deployment

Import this repository in Vercel and set **Root Directory** to `flakemap-website`. Vercel reads `flakemap-website/vercel.json`, runs `npm run build`, and publishes `dist`.

No environment variables are required for the current synthetic frontend. Forms, authentication, analytics, billing, and third-party integrations are interface previews without external delivery.

See `flakemap-website/docs/RUNBOOK.md` for launch responsibilities and integration boundaries.
