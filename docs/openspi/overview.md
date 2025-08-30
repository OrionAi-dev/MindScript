# OpenSPI Overview

OpenSPI (OpenSpec Infrastructure) makes AI interactions spec-first: every request becomes a tiny, explicit contract that replaces hidden assumptions.

## Why
- Ambiguity becomes explicit (clarify only when required).
- Assumptions are visible, editable, and scoped.
- Outputs are verified against acceptance criteria.
- Preferences are saved intentionally (scoped + refreshed), not “sticky forever.”

## Core concepts
- **OpenSpec.Context** — long-lived environment contract (session/project/workspace/global) with lifespan policy (session/rolling/pinned).
- **OpenSpec.Turn** — per-request contract derived from the active Context; locked before execution.
- **Interpreter / Librarian / Verifier** — generate → maintain → validate.

## Lifecycle
1. **Draft**: Interpreter creates a Turn spec (inherits Context).
2. **Clarify**: Ask only for required low-confidence fields.
3. **Lock**: Freeze the Turn contract (timestamp + signature).
4. **Execute**: Map spec → tools via bindings.
5. **Verify**: Check acceptance criteria; remediate or return.
6. **Persist (optional)**: Save scoped preferences or promote a template.

## What’s in this folder
- `spec.md` — canonical spec language (fields, contracts, prefs, patches).
- `context-turn.md` — scopes, inheritance, lifespan.
- `typescript.md` — typed bindings + validation.
- `verification.md` — acceptance check stdlib + verifier API.
- `templates.md` — spec templates, librarian rules.
- `quickstart.md` — 5-step setup.
- `roadmap.md` — next milestones.

License: Apache-2.0
