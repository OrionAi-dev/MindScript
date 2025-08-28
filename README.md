# OpenSpec

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](./LICENSE)
[![Release](https://img.shields.io/github/v/release/YourOrg/openspec)](../../releases/latest)
[![Docs](https://img.shields.io/badge/docs-whitepaper-success)](./docs/openspec/whitepaper.md)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](../../issues)

---

**A unified framework for defining requirements and acceptance criteria before creation, bridging software, legal, compliance, and AI workflows with clarity first.**

🔭 Clarity before creation • ✅ Acceptance criteria first • 🌐 Cross-domain  

📄 [Read the white paper (Markdown)](./docs/openspec/whitepaper.md)  
⬇️ [Get the latest release](../../releases/latest)

---

## Table of Contents
- [What is OpenSpec](#what-is-openspec)
- [Core Principles](#core-principles)
- [Benefits](#benefits)
- [Technical Alignment](#technical-alignment)
- [Applications](#applications)
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

## Quick start
1. Read the white paper: [docs/openspec/whitepaper.md](./docs/openspec/whitepaper.md).  
2. (Optional) Build a PDF locally with Pandoc:  
   ```bash  
   pandoc docs/openspec/whitepaper.md -o docs/openspec/whitepaper.pdf  
   ```  
3. Create a release with GitHub CLI:  
   ```bash  
   gh release create v0.1.0 docs/openspec/whitepaper.pdf \  
     --title "OpenSpec v0.1.0" \  
     --notes "Initial publication of the OpenSpec white paper."  
   ```  

---

## Contributing
Ideas, issues, and pull requests are welcome.  
Good first contributions include example specs, validation rules for acceptance criteria, and adapters that map OpenSpec requirements into existing tools.

---

## License
Copyright © 2025 Michael Gregory Mahoney  

Licensed under the [Apache License 2.0](./LICENSE).
