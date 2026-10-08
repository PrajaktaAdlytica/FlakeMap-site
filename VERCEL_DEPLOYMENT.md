# Manual Vercel connection

1. Sign in to [Vercel](https://vercel.com/) with the GitHub account that can access `PrajaktaAdlytica/FlakeMap-site`.
2. Select **Add New → Project**.
3. Find `PrajaktaAdlytica/FlakeMap-site` and select **Import**. If it is not listed, use **Adjust GitHub App Permissions** and grant Vercel access to the repository.
4. Set **Root Directory** to `flakemap-website` and confirm it.
5. Keep **Framework Preset** as Vite. The repository configuration supplies:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
6. Leave Environment Variables empty for the current frontend.
7. Select **Deploy**.
8. After deployment, open the generated Vercel URL and verify `/`, `/demo`, `/request-demo`, `/sign-in`, and a deep link such as `/products/trust-proof`.
9. To add a domain, open **Project Settings → Domains**, enter the domain, and follow the DNS record instructions shown by Vercel.
10. Keep automatic Production deployments on the `main` branch. Future pushes to `main` will redeploy the site; pull requests create Preview deployments.

## Before enabling real intake

The current forms and sign-in flow are local interface previews. Add approved privacy/operator details and verified delivery, authentication, analytics-consent, and data-retention services before collecting real user information.
