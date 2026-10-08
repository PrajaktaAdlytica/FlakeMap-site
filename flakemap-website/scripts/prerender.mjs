import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { render, routes } from "../.ssr/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
const esc = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
for (const route of [...routes, "/404"]) {
  const data = render(route),
    html = template
      .replace('<div id="root"></div>', `<div id="root">${data.html}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${esc(data.title)}</title>`)
      .replace(
        /(<meta name="description" content=")[^"]*/,
        `$1${esc(data.description)}`,
      )
      .replace(
        /(<meta property="og:title" content=")[^"]*/,
        `$1${esc(data.title)}`,
      );
  const dir = route === "/" ? "dist" : `dist${route}`;
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}/index.html`, html);
  if (route === "/404") await writeFile("dist/404.html", html);
}
await writeFile(
  "dist/robots.txt",
  "User-agent: *\nDisallow: /demo\nDisallow: /sign-in\n# Set canonical host and publish an absolute sitemap after domain approval.\n",
);
await rm(".ssr", { recursive: true, force: true });
console.log(`Pre-rendered ${routes.length} routes plus branded 404.`);
