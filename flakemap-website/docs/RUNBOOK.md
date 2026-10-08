# Deployment and operations runbook

Current state: local frontend and isolated synthetic demo; no public operating service.

1. Review the actual renders and concept claims. Confirm the FlakeMap brand/domain before public use.
2. Create or select the approved work GitHub repository. Commit source, package lock, assets, docs, and tests. Exclude node_modules, secrets, and .ssr. No repository or credentials were supplied here.
3. Import the repository into Vercel. Build command `npm run build`; output `dist`; use the checked-in vercel.json. Match the verified Node release or confirm compatibility. The build includes static route HTML and a client fallback.
4. Check all deep links, 404 recovery, fonts, hero, horizontal chapter, responsive navigation, demo reset/report, forms, and pricing labels on the deployed host.
5. Connect the approved domain through the registrar's exact DNS instructions. No FlakeMap domain availability or ownership is asserted by this implementation.
6. Set canonical URLs, absolute social-preview URLs, and an absolute sitemap after the public host is known. robots.txt currently excludes the synthetic workspace and access preview from indexing.
7. Before real lead intake, supply the legal operator/privacy contact and implement delivery, server validation, consent records, retention/deletion, anti-abuse controls, and server-side dedupe. Keep raw traces out of public intake. Replace the “not sent” state only after delivery is actually confirmed.
8. Before real authentication, implement an identity provider, secure sessions, recovery, and access handling. The current UI does not authenticate.
9. Before real analytics, implement the consent-aware event schema with separate synthetic-demo traffic and real leads. Do not emit verified_signup/interview_booked without a verified event. Do not collect form bodies in analytics.
10. Add only approved company LinkedIn/Crunchbase URLs. The pending icons currently explain their unconfigured state.

Rollback: redeploy the last verified static dist artifact. The current preview has no database, migrations, billing state, secrets, or external writes to roll back.

Release check: build + check-build + fixture tests; representative desktop/mobile browser QA; claims/privacy review; inspect runtime errors. Fix a demonstrated failure before expanding checks. Never mark buyer validation complete based on site visits or demo interactions.
