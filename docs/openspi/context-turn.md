# Context vs Turn

## OpenSpec.Context

A **Context** is a long-lived environment contract.

* **Scope**: session | project | workspace | global
* **Lifespan**: session (ends when session ends), rolling (TTL/uses, auto-renew), or pinned (explicit, global, requires consent)
* **Contents**: project id, role, tone, locale/tz, privacy flags, filetype preferences, overlays (e.g., astrology), guardrails
* **Behavior**: persists across turns; provides defaults; refreshed periodically

## OpenSpec.Turn

A **Turn** is an ephemeral, per-request contract.

* **Inherits** from the active Context
* **Clarifies** ambiguous or missing fields
* **Locks** before execution (timestamp + signature)
* **Executes** deterministically against the contract
* **Discarded** after use (unless promoted into a template)

## Inheritance

* A Turn can override Context fields.
* Precedence order: user > turn-explicit > context > preference > default > model.
* Conflicts trigger clarifiers or error flags.

## Lifecycle

1. **Activate Context** – user opens a project/session, Context is loaded or created.
2. **Draft Turn** – interpreter generates a Turn spec, filling from Context.
3. **Clarify** – ask only for required, low-confidence fields.
4. **Lock & Execute** – freeze, run, verify.
5. **Update Context** – if user changes prefs, patch Context; auto-refresh on expiry.

## Example

**Context (project scope)**

```json
{
  "kind": "context",
  "id": "ctx:Telescope",
  "intent": "project_session",
  "scope": { "type": "project", "id": "Telescope" },
  "lifespan": { "mode": "rolling", "ttlDays": 30 },
  "fields": {
    "tone": { "type": "string", "value": "concise, technical", "source": "user" },
    "escape_ticks": { "type": "boolean", "value": true, "scope": { "kind": "filetype", "value": "md" } }
  },
  "acceptanceCriteria": ["Maintain Telescope continuity"],
  "lockedAt": "2025-08-30T00:00:00Z"
}
```

**Turn (inherits from Context)**

```json
{
  "kind": "turn",
  "id": "turn:123",
  "intent": "markdown_transform",
  "inheritsFrom": "ctx:Telescope",
  "fields": {
    "file": { "type": "string", "value": "README.md", "source": "user" },
    "escape_ticks": { "type": "boolean", "value": true, "source": "context" }
  },
  "acceptanceCriteria": ["Convert README to HTML", "Backticks escaped"],
  "lockedAt": "2025-08-30T00:01:00Z"
}
```
