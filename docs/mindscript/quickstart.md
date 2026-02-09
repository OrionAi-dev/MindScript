# Quickstart

This quickstart shows the core MindScript loop:

1. Define **Context** + **Turn** contracts
2. Validate against the canonical **JSON Schemas**
3. Lock deterministically (timestamp + signature)
4. Verify an output against acceptance criteria

---

## 1. Install

**In this monorepo**

```bash
pnpm install
pnpm -r build
```

---

## 2. Create a Context

Create `context.json`:

```json
{
  "kind": "context",
  "id": "ctx:demo",
  "intent": "demo session",
  "scope": { "type": "session" },
  "lifespan": { "mode": "session" },
  "fields": {
    "tone": { "type": "string", "value": "concise", "source": "user" }
  },
  "acceptanceCriteria": [],
  "lockedAt": "2026-02-09T00:00:00.000Z"
}
```

---

## 3. Create a Turn

Create `turn.json`:

```json
{
  "kind": "turn",
  "id": "turn:demo",
  "intent": "demo verification",
  "inheritsFrom": "ctx:demo",
  "fields": {},
  "acceptanceCriteria": [
    {
      "id": "has_ok_true",
      "description": "Output must equal { ok: true }",
      "verifier": "equals",
      "params": { "value": { "ok": true } }
    }
  ],
  "lockedAt": "2026-02-09T00:00:00.000Z"
}
```

---

## 4. Validate and Lock

From the repo root:

```bash
node packages/mindscript-cli/dist/cli.js validate context.json
node packages/mindscript-cli/dist/cli.js validate turn.json
node packages/mindscript-cli/dist/cli.js lock turn.json --write
```

---

## 5. Verify an Output

Create `output.json`:

```json
{ "ok": true }
```

Run verification:

```bash
node packages/mindscript-cli/dist/cli.js verify --turn turn.json --output output.json --write report.json
node packages/mindscript-cli/dist/cli.js validate report.json
```

The report is a stable, machine-readable `VerificationReport`:

```json
{
  "overall": true,
  "results": [
    { "criterionId": "has_ok_true", "verifier": "equals", "pass": true }
  ],
  "at": "..."
}
```

---

## Built-In Verifiers (Core)

Core ships a small, stable verifier set:

* `equals`
* `contains_fields`
* `regex_match`
* `count_between`
* `json_schema` (inline schema or local `schemaRef`)
* `artifact_exists` (checks `criterion.evidence[]` local refs)

See [verification.md](./verification.md) for details.

