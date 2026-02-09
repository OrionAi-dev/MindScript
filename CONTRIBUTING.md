# Contributing to OpenSpec

Thank you for your interest in contributing!

## How to Contribute
- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Share examples of OpenSpec in practice

## Development Setup
1. Clone the repo
2. Create or edit specs in `docs/mindscript/`
3. Follow the guidelines in the white paper

## Documentation generation
To rebuild the API docs and MkDocs site locally:

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Build the workspace packages (TypeDoc depends on build artifacts):
   ```bash
   pnpm -r build
   ```
3. Generate API docs with TypeDoc:
   ```bash
   bash tools/gen-docs.sh
   ```
   This script clears and regenerates `docs/api/` for each package and refreshes
   `docs/index.md` with links to the new API docs.
4. Normalize Markdown links created by TypeDoc:
   ```bash
   node tools/clean-doc-links.mjs --write
   ```
5. Build the MkDocs site:
   ```bash
   mkdocs build --strict --site-dir site
   ```

CI runs a doc-drift check after generation. If it fails, rerun the steps above
and ensure `git diff -- docs/` is clean before pushing.
## Generated Artifacts
- Package builds output to each package's `dist/` directory (for example `packages/mindql-core/dist/`).
- OpenSpec CLI runs (see `tools/verify-monorepo.sh`) emit artifacts under `generated/`, including:
  - `generated/mindql/ast.json`
  - `generated/graphql/schema.graphql`

These generated directories are not intended to be committed. Add or remove content by running the relevant build or CLI commands locally.

## Code of Conduct
Please be respectful and collaborative in discussions.
