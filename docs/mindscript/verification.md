# Verification

Verification checks that an output matches a locked contract’s acceptance criteria.

In core, verification is **provider/framework-agnostic**:

* Criteria are structured objects: `{ id, description, verifier, params?, evidence? }`
* Verifiers are pluggable functions registered by id
* Results are emitted as a stable `VerificationReport`

---

## Acceptance Criteria

Example criterion:

```json
{
  "id": "has_required_fields",
  "description": "Output contains id + title",
  "verifier": "contains_fields",
  "params": { "fields": ["id", "title"] }
}
```

Optional evidence references (framework-agnostic):

```json
{
  "id": "artifact_present",
  "description": "Build produced an artifact",
  "verifier": "artifact_exists",
  "evidence": [{ "ref": "dist/report.json", "checksum": "sha256:..." }]
}
```

---

## Built-In Verifiers (Core)

Core ships a minimal stable set:

* `equals`: deep-equality vs `params.value`
* `contains_fields`: object or array-of-objects contains `params.fields` (string[])
* `regex_match`: string output matches `params.pattern` (+ optional `params.flags`)
* `count_between`: array length between `params.min` and `params.max`
* `json_schema`: validate output against JSON Schema (`params.schema` inline or `params.schemaRef` local path)
* `artifact_exists`: verifies `criterion.evidence[]` local refs exist (optional sha256 checksum)

Everything else belongs in integrations.

---

## VerificationReport

Verification produces a stable report:

```json
{
  "contextId": "ctx:demo",
  "turnId": "turn:demo",
  "overall": true,
  "results": [
    {
      "criterionId": "has_required_fields",
      "verifier": "contains_fields",
      "pass": true,
      "details": "Output contains: id, title"
    }
  ],
  "at": "2026-02-09T00:00:00.000Z"
}
```

---

## CLI and Runtime

CLI:

```bash
node packages/mindscript-cli/dist/cli.js verify --turn turn.json --output output.json --write report.json
```

Runtime:

```ts
import { verifyOutput } from "@mindscript/runtime";
const report = await verifyOutput({ output, criteria });
```

