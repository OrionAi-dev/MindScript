#!/usr/bin/env bash
set -euo pipefail
rm -rf docs/api
pnpm -r build
for pkg in \
  packages/openspec-types \
  packages/openspec-runtime \
  packages/mindql-core \
  packages/mindgraphql-core \
  packages/openspec-plugin-mindql \
  packages/openspec-plugin-mindgraphql
do
  (cd "$pkg" && npx --yes typedoc -p typedoc.json)
done
