#!/usr/bin/env node
"use strict";

// src/cli.ts
var import_node_fs = require("fs");
var import_node_path = require("path");
var import_node_module = require("module");
var import_meta = {};
var require2 = (0, import_node_module.createRequire)(import_meta.url);
var tryLoad = (id) => {
  try {
    const m = require2(id);
    return m.default ?? m;
  } catch {
    return null;
  }
};
var registry = [
  tryLoad("@mindscript/openspec-plugin-mindql"),
  tryLoad("@mindscript/openspec-plugin-mindgraphql")
].filter(Boolean);
async function main() {
  const input = process.argv[2];
  const outDir = process.argv[3] ?? "generated";
  if (!input) {
    console.error("Usage: openspec <file> [outDir]");
    process.exit(1);
  }
  const text = (0, import_node_fs.readFileSync)((0, import_node_path.resolve)(input), "utf8");
  const ext = (0, import_node_path.extname)(input);
  const plugin = registry.find((p) => p.handles.includes(ext));
  if (!plugin) {
    console.error(`No plugin registered for ${ext}.`);
    process.exit(2);
  }
  const result = await plugin.generate({ path: input, text }, { outDir });
  console.log(`Generated:`, result.artifacts.join(", "));
}
main().catch((e) => {
  console.error(e);
  process.exit(3);
});
