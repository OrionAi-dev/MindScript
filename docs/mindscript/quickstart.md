# Quickstart

This quickstart shows how to use MindScript (formerly OpenSpec) infrastructure (Context + Turn contracts) in 5 steps.

---

## 1. Install

Add the core package:

```bash
npm install @mindscript/openspec-types zod
```

---

## 2. Create a Context

Define an environment contract.

```ts
import type { AcceptanceCriteria, MindScriptContext } from "@mindscript/openspec-types";

const criteria: AcceptanceCriteria = [
  {
    id: "continuity",
    description: "Maintain Telescope continuity",
    verifier: "contains_requirements",
    params: { project: "Telescope" }
  }
];

const ctx: MindScriptContext = {
  kind: "context",
  id: "ctx:Telescope",
  intent: "project_session",
  scope: { type: "project", id: "Telescope" },
  lifespan: { mode: "rolling", ttlDays: 30 },
  fields: {
    tone: { type: "string", value: "concise, technical", source: "user" },
    escape_ticks: { type: "boolean", value: true, scope: { kind: "filetype", value: "md" } }
  },
  acceptanceCriteria: criteria,
  lockedAt: new Date().toISOString()
};
```

---

## 3. Draft a Turn

Start a per-request contract from Context.

```ts
import { MindScriptTurn } from "@mindscript/openspec-types";

const turn: MindScriptTurn = {
  kind: "turn",
  id: "turn:1",
  intent: "markdown_transform",
  inheritsFrom: ctx.id,
  fields: {
    file: { type: "string", value: "README.md", source: "user" },
    escape_ticks: { type: "boolean", value: true, source: "context" }
  },
  acceptanceCriteria: [
    { id: "render", description: "Convert README to HTML", verifier: "output_format" },
    { id: "ticks", description: "Backticks escaped", verifier: "lint_markdown" }
  ],
  lockedAt: new Date().toISOString()
};
```

---

## 4. Lock & Execute

Freeze the Turn contract, map to a tool, run.

```ts
// lock: record signature + timestamp
// execute: send to tool binding (e.g., markdown parser)
```

---

## 5. Verify

Check against acceptance criteria.

```ts
// run verifiers: e.g., response_shape, contains_fields
// pass/fail → decide remediation or return
```

---

## (Optional) API Envelope

Send Context + Turn in a single API payload.

```ts
import type { MindScriptRequestEnvelope } from "@mindscript/openspec-types";

const request: MindScriptRequestEnvelope = {
  context: ctx,
  turn,
  input: { format: "html" },
  requestId: "req:1234"
};
```

---

## Summary

1. Install core package
2. Create a Context
3. Draft a Turn from Context
4. Lock & Execute
5. Verify against acceptance criteria

For deeper detail, see:

* [spec-language.md](./spec-language.md)
* [context-turn.md](./context-turn.md)
* [verification.md](./verification.md)
* [templates.md](./templates.md)
