# OpenSpec Validation

Validation ensures specs are consistent, complete, and unambiguous before they are executed.

---

## Core Rules

1. Every spec must have a unique `id`.
2. Each spec must declare a valid `kind`: `"context"` or `"turn"`.
3. `fields` must conform to `SpecField` typing (type, constraints, scope).
4. `acceptanceCriteria` must reference valid verifiers and contain unique `id`s.
5. `lockedAt` must be an ISO datetime string.
6. Contexts must declare a valid `scope` and `lifespan`.
7. Turns must include `inheritsFrom` referencing a valid Context.
8. Circular references between specs should be avoided.
9. Provenance records must align with declared field keys.

---

## Schema Alignment

* Validation is enforced at runtime with [`zod`](https://zod.dev) schemas.
* The TypeScript bindings (`types.ts`, `validators.ts`) are the canonical source.
* JSON Schema can be generated from TypeScript for language-agnostic validation.

---

## Tooling

* **CLI Validator** (planned): `openspec validate path/to/spec.yaml`
* **CI Integration**: add validation to pipelines to ensure only valid contracts are committed.
* **Golden Tests**: verify that promoted templates consistently pass their acceptance criteria.

---

## Example

```bash
# Validate a spec file
openspec validate docs/mindscript/examples/ctx-telescope.yaml
```

---

## Cross-References

* [spec-schema.md](./spec-schema.md) → field definitions and schema
* [verification.md](./verification.md) → how acceptance criteria are checked
* [templates.md](./templates.md) → how validation gates promotion
