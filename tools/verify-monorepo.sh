#!/usr/bin/env bash
set -euo pipefail

echo "== Verify directories =="
for d in \
  packages/openspec-types \
  packages/openspec-runtime \
  packages/mindql-core \
  packages/mindgraphql-core \
  packages/openspec-plugin-mindql \
  packages/openspec-plugin-mindgraphql \
  packages/openspec-cli \
  examples \
  docs
do
  [ -d "$d" ] && echo "PASS  $d" || { echo "FAIL  missing $d"; exit 1; }
done

echo "== Verify build formats =="
pnpm -r build >/dev/null

check_dual() {
  pkg="$1"
  [ -f "$pkg/dist/index.js" ]   && echo "PASS  $pkg ESM" || { echo "FAIL  $pkg missing dist/index.js"; exit 1; }
  [ -f "$pkg/dist/index.cjs" ]  && echo "PASS  $pkg CJS" || { echo "FAIL  $pkg missing dist/index.cjs"; exit 1; }
  [ -f "$pkg/dist/index.d.ts" ] && echo "PASS  $pkg types" || { echo "FAIL  $pkg missing dist/index.d.ts"; exit 1; }
}

for pkg in \
  packages/openspec-types \
  packages/openspec-runtime \
  packages/mindql-core \
  packages/mindgraphql-core \
  packages/openspec-plugin-mindql \
  packages/openspec-plugin-mindgraphql
do
  check_dual "$pkg"
done

echo "== Verify package.json exports maps =="
node - <<'NODE'
const fs = require('fs');
const path = require('path');
const pkgs = [
  "packages/openspec-types",
  "packages/openspec-runtime",
  "packages/mindql-core",
  "packages/mindgraphql-core",
  "packages/openspec-plugin-mindql",
  "packages/openspec-plugin-mindgraphql",
];
let ok = true;
for (const p of pkgs) {
  const jsonPath = path.join(process.cwd(), p, 'package.json');
  const j = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const has = j.exports && j.exports["."] && j.exports["."].import && j.exports["."].require && j.types;
  if (has) console.log("PASS", p, "exports");
  else { console.log("FAIL", p, "exports map/types missing"); ok = false; }
}
if (!ok) process.exit(1);
NODE

echo "== Verify CLI is ESM-only and built =="
[ -f packages/openspec-cli/dist/cli.js ] && echo "PASS  CLI dist/cli.js" || { echo "FAIL  CLI dist missing"; exit 1; }
[ ! -f packages/openspec-cli/dist/cli.cjs ] && echo "PASS  CLI has no CJS" || { echo "FAIL  CLI CJS exists (should be ESM-only)"; exit 1; }

echo "== Smoke run CLI from repo root (outputs under ./generated)"
node packages/openspec-cli/dist/cli.js examples/demo.mindql >/dev/null
node packages/openspec-cli/dist/cli.js examples/demo.mindgql >/dev/null

[ -f generated/mindql/ast.json ] && echo "PASS  generated/mindql/ast.json" || { echo "FAIL  missing mindql artifact"; exit 1; }
[ -f generated/graphql/schema.graphql ] && echo "PASS  generated/graphql/schema.graphql" || { echo "FAIL  missing GraphQL artifact"; exit 1; }

echo "== Quick import/require smoke (direct dist paths) =="
node -e 'require("./packages/mindql-core/dist/index.cjs"); console.log("PASS  CJS require mindql-core")'
node --input-type=module -e 'import("./packages/mindql-core/dist/index.js").then(()=>console.log("PASS  ESM import mindql-core"))'

echo "== All checks passed ✅"
