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

## Generated Artifacts
- Package builds output to each package's `dist/` directory (for example `packages/mindql-core/dist/`).
- OpenSpec CLI runs (see `tools/verify-monorepo.sh`) emit artifacts under `generated/`, including:
  - `generated/mindql/ast.json`
  - `generated/graphql/schema.graphql`

These generated directories are not intended to be committed. Add or remove content by running the relevant build or CLI commands locally.

## Code of Conduct
Please be respectful and collaborative in discussions.
