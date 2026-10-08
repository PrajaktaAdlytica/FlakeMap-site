import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { modules, articles } from "./data";
export const routes = [
  "/",
  "/products",
  ...modules.map((m) => `/products/${m.slug}`),
  "/problem",
  "/solutions",
  "/platform",
  "/evaluation",
  "/pricing",
  "/request-demo",
  "/sign-in",
  "/demo",
  "/company",
  "/contact",
  "/trust",
  "/resources",
  ...articles.map((a) => `/resources/${a.slug}`),
  "/legal/privacy",
  "/legal/terms",
];
const names = {
  "/": "Every path has a breaking point",
  "/products": "Proposed product portfolio",
  "/platform": "The proposed platform",
  "/solutions": "Release-team solutions",
  "/problem": "Why single-run passes can miss it",
  "/evaluation": "Synthetic evaluation example",
  "/pricing": "Pricing hypotheses",
  "/request-demo": "Request a replay study",
  "/sign-in": "Sign in preview",
  "/demo": "Synthetic replay workspace",
  "/company": "About FlakeMap",
  "/contact": "Contact preview",
  "/trust": "Trust & scope",
  "/resources": "Reliability resources",
  "/legal/privacy": "Privacy & preview scope",
  "/legal/terms": "Draft preview terms",
};
export function render(url) {
  const module = modules.find((m) => url === `/products/${m.slug}`),
    article = articles.find((a) => url === `/resources/${a.slug}`);
  return {
    html: renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
    ),
    title: `${module ? module.name : article ? article.title : names[url] || "Path not mapped"} — FlakeMap`,
    description:
      module?.description ||
      article?.intro ||
      "Find the failing step in long-horizon agent workflows. Explore seeded replay, controlled tool faults, and human-reviewed evidence.",
  };
}
