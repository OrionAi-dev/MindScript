# OpenSpec Overview

OpenSpec makes AI interactions spec-first: every request becomes a tiny, explicit contract that replaces hidden assumptions.  
The **infrastructure layer** (formerly called OpenSPI) defines Context, Turn, SpecFields, and Contracts.

---

## Why
- Ambiguity becomes explicit (clarify only when required).
- Assumptions are visible, editable, and scoped.
- Outputs are verified against acceptance criteria.
- Preferences are saved intentionally (scoped + refreshed), not “sticky forever.”

---

## Core Concepts
- **Context** — long-lived environment contract (`session` / `project` / `workspace` / `global`) with lifespan policy (`session` / `rolling` / `pinned`).  
- **Turn** — per-request contract derived from the active Context; locked before execution.  
- **Interpreter / Librarian / Verifier** — generate → maintain → validate.  

---

## Lifecycle
1. **Draft**: Interpreter creates a Turn spec (inherits Context).  
2. **Clarify**: Ask only for required low-confidence fields.  
3. **Lock**: Freeze the Turn contract (timestamp + signature).  
4. **Execute**: Map spec → tools via bindings.  
5. **Verify**: Check acceptance criteria; remediate or return.  
6. **Persist (optional)**: Save scoped preferences or promote a template.  

---

## Documentation Map
- [spec-language.md](../mindscript/spec-language.md) — canonical spec language (fields, contracts, prefs, patches).  
- [context-turn.md](../mindscript/context-turn.md) — scopes, inheritance, lifespan.  
- [typescript.md](../mindscript/typescript.md) — typed bindings + validation.  
- [verification.md](../mindscript/verification.md) — acceptance check stdlib + verifier API.  
- [templates.md](../mindscript/templates.md) — templates & librarian rules.  
- [quickstart.md](../mindscript/quickstart.md) — 5-step setup.  
- [roadmap.md](../mindscript/roadmap.md) — unified milestones.  

---

License: Apache-2.0
