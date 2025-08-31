#!/usr/bin/env node

// src/cli.ts
import { readFileSync } from "fs";
import { resolve, extname } from "path";
import { createRequire } from "module";
var require2 = createRequire(import.meta.url);
var tryLoad = (id) => {
  try {
    const m = require2(id);
    return m.default ?? m;
  } catch {
    return null;
  }
};
function loadPlugins() {
  return [
    "@mindscript/openspec-plugin-mindql",
    "@mindscript/openspec-plugin-mindgraphql"
  ].map(tryLoad).filter(Boolean).map((p) => typeof p === "function" ? p() : p);
}
async function main() {
  const input = process.argv[2];
  const outDir = process.argv[3] ?? "generated";
  if (!input) {
    console.error("Usage: openspec <file> [outDir]");
    process.exit(1);
  }
  const text = readFileSync(resolve(input), "utf8");
  const ext = extname(input);
  const registry = loadPlugins();
  const plugin = registry.find((p) => Array.isArray(p.handles) && p.handles.includes(ext));
  if (!plugin) {
    console.error(`No plugin registered for ${ext}.`);
    process.exit(2);
  }
  const result = await plugin.generate({ path: input, text }, { outDir });
  console.log("Generated:", result.artifacts.join(", "));
}
main().catch((e) => {
  console.error(e);
  process.exit(3);
});
