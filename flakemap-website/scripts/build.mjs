import { spawnSync } from "node:child_process";
const cli = "node_modules/vite/bin/vite.js";
for (const args of [
  [cli, "build"],
  [cli, "build", "--ssr", "src/entry-server.jsx", "--outDir", ".ssr"],
  ["scripts/prerender.mjs"],
]) {
  const result = spawnSync(process.execPath, args, { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}
