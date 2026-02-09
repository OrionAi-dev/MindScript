#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/docs/api"
rm -rf "$OUT"
mkdir -p "$OUT"

gen() {
  local pkgdir="$1"
  local sub="$2"
  cd "$ROOT/packages/$pkgdir"
  pnpm exec typedoc --options typedoc.json --out "$OUT/$sub"
}

gen openspec-types openspec-types
gen openspec-runtime openspec-runtime
gen mindql-core mindql-core
gen mindgraphql-core mindgraphql-core
gen openspec-plugin-mindql openspec-plugin-mindql
gen openspec-plugin-mindgraphql openspec-plugin-mindgraphql

cat > "$ROOT/docs/index.md" <<'MD'
# MindScript Docs

- [MindScript Types](api/openspec-types)
- [MindScript Runtime](api/openspec-runtime)
- [MindQL Core](api/mindql-core)
- [MindGraphQL Core](api/mindgraphql-core)
- [MindScript Plugin: MindQL](api/openspec-plugin-mindql)
- [MindScript Plugin: MindGraphQL](api/openspec-plugin-mindgraphql)
MD
