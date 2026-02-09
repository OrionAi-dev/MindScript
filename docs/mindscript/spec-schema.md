# MindScript Schema

The MindScript (formerly OpenSpec) schema defines the canonical structure for Context and Turn contracts.
It is implemented in TypeScript bindings and validated at runtime with `zod`.

---

## Top-Level Spec

Every spec must include:

* **kind**: `"context"` | `"turn"`
* **id**: unique identifier
* **intent**: description of the purpose
* **fields**: mapping of field keys to `SpecField` objects
* **acceptanceCriteria**: list of conditions to verify
* **lockedAt**: ISO datetime when contract was frozen
* **provenance**: optional audit trail of how fields were set
* **version**: optional semantic version string
* **signature**: optional deterministic hash

---

## Context

Additional required fields for Context:

* **scope**: `{ type: "session" | "project" | "workspace" | "global", id?: string }`
* **lifespan**: `{ mode: "session" | "rolling" | "pinned", ttlDays?: number, maxUses?: number }`

---

## Turn

Additional required fields for Turn:

* **inheritsFrom**: ID of the Context it derives from

---

## SpecField

Each field has a consistent structure:

* **type**: `"string" | "number" | "boolean" | "enum" | "object" | "array" | "any"`
* **value / default**: actual or default values
* **required**: must be present before execution
* **min / max**: numeric or length constraints
* **enum**: allowed values
* **pattern**: regex for strings
* **many**: allow multiple values
* **noneAllowed**: allow null/empty
* **description**: human-readable text
* **source**: `"user" | "context" | "default" | "memory" | "model"`
* **confidence**: 0–1 confidence score
* **rationale**: explanation of how it was set
* **scope**: filetype/project/intent/global
* **ext**: extension namespace for custom properties

---

## Acceptance Criteria

Structured list of verifiable conditions:

```yaml
acceptanceCriteria:
  - id: LEGAL-202.1
    description: Invoices are due within 30 days
    verifier: response_shape
  - id: LEGAL-202.2
    description: Late payments accrue 5% monthly fee
    verifier: contains_fields
```

---

## Cross-References

* [spec-language.md](./spec-language.md) → full description of fields & contracts
* [typescript.md](./typescript.md) → canonical TypeScript interfaces
* [verification.md](./verification.md) → verifiers and acceptance criteria checks
