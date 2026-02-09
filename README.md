# OpenSpec

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](./LICENSE)
[![Release](https://img.shields.io/github/v/release/YourOrg/openspec)](../../releases/latest)
[![Docs](https://img.shields.io/badge/docs-whitepaper-success)](./docs/mindscript/whitepaper.md)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](../../issues)

---

**A unified framework for defining requirements and acceptance criteria before creation, bridging software, legal, compliance, and AI workflows with clarity first.**

🔭 Clarity before creation • ✅ Acceptance criteria first • 🌐 Cross-domain  

📄 [Read the white paper (Markdown)](./docs/mindscript/whitepaper.md)  
⬇️ [Get the latest release](../../releases/latest)

---

## Table of Contents
- [What is OpenSpec](#what-is-openspec)
- [Core Principles](#core-principles)
- [Benefits](#benefits)
- [Technical Alignment](#technical-alignment)
- [Applications](#applications)
- [BDD providers](#bdd-providers)
- [Quick start](#quick-start)
- [Contributing](#contributing)
- [License](#license)

---

## What is OpenSpec

OpenSpec provides a clear way to define requirements and acceptance criteria before any document, code, or policy is created.  
It borrows proven ideas from behavior driven and requirements driven development, then applies them across domains where precision and alignment matter.

---

## Core Principles
- **Requirements before generation**: clarity comes first.  
- **Acceptance criteria**: define “done” upfront.  
- **Unified language**: applies across domains.  
- **Transparency**: requirements are explicit and visible.  
- **Interoperability**: connects with existing tools and workflows.  
- **Traceability**: links intent to outputs for accountability.  
- **Clarity before creation**: minimizes rework and confusion.  

---

## Benefits
- **Precision**: outputs consistently reflect the original intent.  
- **Efficiency**: reduces wasted cycles by aligning teams early and cutting down on revisions.  
- **Trust**: improves collaboration by making criteria explicit and shared.  
- **Flexibility**: adapts across software, legal, and enterprise contexts.  
- **Scalability**: supports both small projects and large organizations, providing a stable foundation as complexity grows.  

---

## Technical Alignment
OpenSpec unifies and extends behavioral driven specification platforms into a cross domain framework.  

- **Structured nodes**: requirements are expressed in a clear, linked format.  
- **Interoperability**: layers on top of existing workflows.  
- **Compatibility**: works with familiar formats and standards.  
- **Extensibility**: adapts to new domains without breaking the core.  

---

## Applications
- **Software engineering**: define acceptance criteria before writing features.  
- **Legal drafting**: agree on terms and rules before redlining.  
- **Compliance**: encode requirements for audits and governance.  
- **Enterprise knowledge**: unify requirements across teams.  
- **AI and automation**: guide outputs with human intent.  

---

## BDD providers

OpenSpec references executable scenarios through `bdd_ref`. Use any supported provider:

- Cucumber  
- Behave  
- Behat  
- JBehave  
- Karate  
- Robot  
- SpecFlow  
- **OpenSpec Core**: a minimal YAML BDD format for domains without a native BDD stack, and for teams that want a flexible, schema-validated BDD language.  
  - Docs: `docs/mindscript/spec-bdd-openspec-core.md`  
  - Schema: `docs/mindscript/implementations/bdd/openspec.core/schema.yaml`  
  - Example: `docs/mindscript/implementations/bdd/openspec.core/examples/AUTH-101.core.yaml`

**Example: referencing `openspec.core` from a spec**
```yaml
profile: https://openspec.dev/profiles/@software
kind: software
meta:
  id: AUTH-101
  title: User can log in with email and password
  owner: app-auth
  priority: P0

requirements:
  - id: AUTH-101.1
    statement: Users can authenticate with valid credentials
    criteria:
      - id: AUTH-101.1.1
        type: functional
        text: Valid credentials produce a successful session
        bdd_ref:
          source: https://openspec.dev/profiles/bdd/openspec.core
          path: docs/mindscript/implementations/bdd/openspec.core/examples/AUTH-101.core.yaml
          scenario: auth-login-success
```

---

## Quick start
1. Read the white paper: [docs/mindscript/whitepaper.md](./docs/mindscript/whitepaper.md).  
2. (Optional) Build a PDF locally with Pandoc:  
   ```bash
   pandoc docs/mindscript/whitepaper.md -o docs/mindscript/whitepaper.pdf
   ```  
3. Create a release with GitHub CLI:  
   ```bash
   gh release create v0.1.0 docs/mindscript/whitepaper.pdf 
     --title "OpenSpec v0.1.0" 
     --notes "Initial publication of the OpenSpec white paper."
   ```  

---

## API docs regeneration
To refresh the TypeDoc-generated API docs locally:

```bash
pnpm install
pnpm -r build
bash tools/gen-docs.sh
node tools/clean-doc-links.mjs --write
```

The script writes API output to `docs/api/` and updates `docs/index.md` with the
latest API doc links.

---

## Contributing
Ideas, issues, and pull requests are welcome.  
Good first contributions include example specs, validation rules for acceptance criteria, and adapters that map OpenSpec requirements into existing tools.

---

## License
Copyright © 2025 Michael Gregory Mahoney  

Licensed under the [Apache License 2.0](./LICENSE).
