# Quickstart

This quickstart shows how to use OpenSpec infrastructure (Context + Turn contracts) in 5 steps.

---

## 1. Install

Add the core package:

```bash
npm install @openspi/core zod
```

---

## 2. Create a Context

Define an environment contract.

```ts
import { OpenSpecContext } from "@openspi/core";

const ctx: OpenSpecContext = {
  kind: "context",
  id: "ctx:Telescope",
  intent: "project_session",
  scope: { type: "project", id: "Telescope" },
  lifespan: { mode: "rolling", ttlDays: 30 },
  fields: {
    tone: { type: "string", value: "concise, technical", source: "user" },
    escape_ticks: { type: "boolean", value: true, scope: { kind: "filetype", value: "md" } }
  },
  acceptanceCriteria: ["Maintain Telescope continuity"],
  lockedAt: new Date().toISOString()
};
```

---

## 3. Draft a Turn

Start a per-request contract from Context.

```ts
import { OpenSpecTurn } from "@openspi/core";

const turn: OpenSpecTurn = {
  kind: "turn",
  id: "turn:1",
  intent: "markdown_transform",
  inheritsFrom: ctx.id,
  fields: {
    file: { type: "string", value: "README.md", source: "user" },
    escape_ticks: { type: "boolean", value: true, source: "context" }
  },
  acceptanceCriteria: ["Convert README to HTML", "Backticks escaped"],
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
