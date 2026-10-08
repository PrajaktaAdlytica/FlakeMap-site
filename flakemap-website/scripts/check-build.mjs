import { readdir, readFile, stat } from "node:fs/promises";
import assert from "node:assert/strict";
async function files(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? files(`${dir}/${e.name}`) : `${dir}/${e.name}`,
      ),
    )
  ).flat();
}
const html = (await files("dist")).filter((f) => f.endsWith(".html"));
const missing = [];
for (const file of html) {
  const text = await readFile(file, "utf8");
  assert.ok(text.includes("<h1>"), `Missing h1: ${file}`);
  assert.ok(!text.includes("Lovable"), `Template branding: ${file}`);
  for (const [, url] of text.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
    if (url === "/") continue;
    const path = url.split("#")[0].split("?")[0];
    if (!path) continue;
    try {
      const entry = await stat("dist" + path);
      if (entry.isDirectory()) await stat("dist" + path + "/index.html");
    } catch {
      missing.push({ file, url });
    }
  }
}
assert.deepEqual(missing, []);
console.log(
  `Checked ${html.length} HTML files: headings, internal routes, and referenced local assets.`,
);
