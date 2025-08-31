#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/docs/api"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

gen() {
  local pkg="$1"
  local sub="$2"
  pnpm --filter "$pkg" exec typedoc --options typedoc.json --out "$OUT_DIR/$sub"
}

gen @mindscript/openspec-types openspec-types
gen @mindscript/openspec-runtime openspec-runtime
gen @mindscript/mindql-core mindql-core
gen @mindscript/mindgraphql-core mindgraphql-core
gen @mindscript/openspec-plugin-mindql openspec-plugin-mindql
gen @mindscript/openspec-plugin-mindgraphql openspec-plugin-mindgraphql

cat > "$ROOT_DIR/docs/index.md" <<'MD'
# OpenSpec Docs

- [OpenSpec Types](api/openspec-types)
- [OpenSpec Runtime](api/openspec-runtime)
- [MindQL Core](api/mindql-core)
- [MindGraphQL Core](api/mindgraphql-core)
- [OpenSpec Plugin: MindQL](api/openspec-plugin-mindql)
- [OpenSpec Plugin: MindGraphQL](api/openspec-plugin-mindgraphql)
MD
