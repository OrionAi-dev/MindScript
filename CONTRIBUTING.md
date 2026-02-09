# Contributing to OpenSpec

Thank you for your interest in contributing!

## How to Contribute
- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Share examples of OpenSpec in practice

## Development Setup
### Prerequisites
- Node.js 20 (matches the CI workflow).  
- pnpm 10.13.1 (as pinned in `package.json`).  

### Install
1. Clone the repo.
2. Install dependencies:
   ```bash
   pnpm install --frozen-lockfile
   ```
3. Create or edit specs in `docs/mindscript/`.
4. Follow the guidelines in the white paper.

### Common commands
- `pnpm build`: build all workspace packages via Turbo.  
- `pnpm lint`: run lint checks across packages.  
- `pnpm test`: run tests across packages.  
- `pnpm docs`: regenerate API docs (TypeDoc) via `tools/gen-docs.sh`.  

### Docs regeneration checklist
Use this when updating docs or APIs:
- [ ] Run `pnpm build` to ensure workspace packages compile.  
- [ ] Run `pnpm docs` to regenerate API Markdown.  
- [ ] Run `pnpm fix:doc-links` to normalize TypeDoc links.  
- [ ] Install MkDocs deps: `pip install -r docs/requirements.txt`.  
- [ ] Build MkDocs: `mkdocs build --strict --site-dir site`.  
- [ ] Verify the `site/` output locally if the change is visual.  

### Branding change checklist
Use this for rebrand or naming updates:
- [ ] Update brand names, logos, and taglines in `README.md`, `docs/`, and `site/` content.  
- [ ] Replace logo/asset files and update references in Markdown and MkDocs config.  
- [ ] Regenerate docs (`pnpm docs`) and rebuild the site (`mkdocs build`).  
- [ ] Check badges, release links, and package names for old branding.  

## Code of Conduct
Please be respectful and collaborative in discussions.
