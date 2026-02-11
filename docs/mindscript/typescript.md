# TypeScript Bindings

MindScript ships TypeScript types and runtime helpers, aligned to the canonical JSON Schemas.

* Canonical schemas: `@mindscript/schema`
* Runtime (AJV + continuity + verification): `@mindscript/runtime`
* CLI: `@mindscript/cli`

---

## Core Types

The runtime exports the core contracts:

```ts
import type {
  MindScriptContext,
  MindScriptTurn,
  SpecField,
  AcceptanceCriterion,
  EvidenceRef,
  ProvenanceEntry
} from "@mindscript/runtime";
```

### `SpecField`

`SpecField` describes a field (including nested objects/arrays):

```ts
export type FieldSource = "system" | "user" | "context" | "default" | "memory" | "model";

export interface BaseField<T = unknown> {
  type: "string" | "number" | "boolean" | "enum" | "object" | "array" | "any";
  value?: T;
  default?: T;
  required?: boolean;
  min?: number;
  max?: number;
  enum?: readonly T[];
  pattern?: string;
  many?: boolean;
  noneAllowed?: boolean;
  description?: string;
  source?: FieldSource;
  confidence?: number;
  rationale?: string;
  scope?: { kind: "filetype" | "project" | "intent" | "global"; value?: string; id?: string };
  ext?: Record<string, unknown>;
}
```

### Acceptance criteria + evidence

Criteria are framework-agnostic and can reference evidence:

```ts
export interface EvidenceRef {
  ref: string;            // local path or URL
  kind?: string;          // "test" | "doc" | "artifact" | ...
  selector?: string;      // integration-defined selector
  checksum?: string;      // recommended: "sha256:<hex>"
  ext?: Record<string, unknown>;
}

export interface AcceptanceCriterion {
  id: string;
  description: string;
  verifier: string;
  params?: Record<string, unknown>;
  evidence?: ReadonlyArray<EvidenceRef>;
}
```

### Provenance

Provenance entries support both audit trails and per-field attribution:

```ts
export interface ProvenanceEntry {
  source: FieldSource;
  at: string;       // ISO date-time
  field?: string;   // key or JSON Pointer
  actor?: string;
  note?: string;
  data?: Record<string, unknown>;
  ext?: Record<string, unknown>;
}
```

---

## Runtime Validation

Validation uses AJV against the canonical JSON Schemas:

```ts
import { validateContext, validateTurn } from "@mindscript/runtime";

const res = validateTurn(turn);
if (!res.ok) console.error(res.errors);
```

---

## Note On Legacy Types

Older OpenSpec-named packages (`@mindscript/openspec-types`, `@mindscript/openspec-runtime`) remain as compatibility wrappers.
Any generator/plugin-specific types should live under `packages/integrations/*` rather than in the core runtime.

