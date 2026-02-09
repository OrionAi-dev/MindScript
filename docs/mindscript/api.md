# MindScript API

MindScript defines a compact, machine-readable contract for exchanging context, turns, and validation rules between models. This document describes the core concepts, schema references, and example payloads for model-to-model exchange.

---

## Core Concepts

### Context
A **Context** is the shared contract that frames multiple turns. It describes purpose, scope, lifespan, shared fields, and the acceptance criteria that any turn must satisfy.

Key ideas:
- **Scope** defines where the context applies (session, project, workspace, global).
- **Lifespan** defines how long it is valid.
- **Fields** describe the canonical shared data, including type constraints and provenance.

### Turn
A **Turn** is a single exchange of intent and response data that inherits from a Context. It supplies turn-specific fields, references the shared acceptance criteria, and may add additional criteria or provenance entries.

### AcceptanceCriteria
**AcceptanceCriteria** is a structured list of verifiable requirements. Each criterion carries an identifier, a description, and optional verifier metadata so evaluators (humans or automated checks) can validate compliance.

### Provenance
**Provenance** captures the audit trail for how data arrived in the contract. It records the origin (user, model, memory, system, etc.), timestamps, and optional evidence notes or structured data.

---

## Schemas

All schemas use JSON Schema draft 2020-12 and include `$id` identifiers for stable references.

| Concept | Schema | Description |
| --- | --- | --- |
| Context | [`schemas/context-0.1.json`](./schemas/context-0.1.json) | Shared contract for a session of turns. |
| Turn | [`schemas/turn-0.1.json`](./schemas/turn-0.1.json) | Single exchange anchored to a Context. |
| AcceptanceCriteria | [`schemas/acceptance-criteria-0.1.json`](./schemas/acceptance-criteria-0.1.json) | List of verifiable requirements. |
| Provenance | [`schemas/provenance-0.1.json`](./schemas/provenance-0.1.json) | Audit trail entries for data origins. |

---

## Versioning Rules

MindScript schemas follow **Semantic Versioning**:

- **Major**: breaking changes (remove/rename required fields, change field meaning).
- **Minor**: additive changes (new optional fields or enums).
- **Patch**: clarifications (documentation or description updates only).

Schema `$id` values embed the schema version, ensuring model-to-model exchange can pin a precise contract (for example, `.../context-0.1.json`). Payloads should include a `version` field for the contract itself when long-lived or shared across systems.

---

## Model-to-Model Exchange Examples

### 1) Context contract

```json
{
  "kind": "context",
  "id": "ctx-legal-2024-09",
  "intent": "Draft and validate contract clauses for vendor agreements.",
  "scope": {"type": "project", "id": "vendor-msa"},
  "lifespan": {"mode": "rolling", "ttlDays": 14},
  "fields": {
    "jurisdiction": {
      "type": "string",
      "value": "NY",
      "source": "user",
      "description": "Primary governing jurisdiction."
    },
    "lateFeeRate": {
      "type": "number",
      "value": 0.05,
      "source": "model",
      "confidence": 0.82,
      "description": "Monthly late fee rate."
    }
  },
  "acceptanceCriteria": [
    {
      "id": "LEGAL-202.1",
      "description": "Invoices are due within 30 days.",
      "verifier": "response_shape"
    }
  ],
  "provenance": [
    {
      "source": "user",
      "timestamp": "2024-09-08T12:00:00Z",
      "note": "Jurisdiction provided by legal counsel."
    }
  ],
  "version": "1.0.0",
  "lockedAt": "2024-09-08T12:00:05Z"
}
```

### 2) Turn contract

```json
{
  "kind": "turn",
  "id": "turn-legal-2024-09-08-01",
  "intent": "Propose invoice and late fee clause language.",
  "inheritsFrom": "ctx-legal-2024-09",
  "fields": {
    "clauseText": {
      "type": "string",
      "value": "Invoices are due within 30 days...",
      "source": "model"
    }
  },
  "acceptanceCriteria": [
    {
      "id": "LEGAL-202.1",
      "description": "Invoices are due within 30 days.",
      "verifier": "contains_fields",
      "status": "pending"
    }
  ],
  "provenance": [
    {
      "source": "model",
      "timestamp": "2024-09-08T12:01:10Z",
      "note": "Drafted based on context fields."
    }
  ],
  "version": "1.0.0"
}
```

### 3) Exchange envelope (context + turn)

```json
{
  "exchangeId": "ex-2024-09-08-legal",
  "schemaVersion": "0.1.0",
  "context": {
    "$ref": "https://mindscript.dev/schemas/mindscript/context-0.1.json",
    "payload": {
      "kind": "context",
      "id": "ctx-legal-2024-09",
      "intent": "Draft and validate contract clauses for vendor agreements.",
      "scope": {"type": "project", "id": "vendor-msa"},
      "lifespan": {"mode": "rolling", "ttlDays": 14},
      "fields": {},
      "acceptanceCriteria": []
    }
  },
  "turn": {
    "$ref": "https://mindscript.dev/schemas/mindscript/turn-0.1.json",
    "payload": {
      "kind": "turn",
      "id": "turn-legal-2024-09-08-01",
      "intent": "Propose invoice and late fee clause language.",
      "inheritsFrom": "ctx-legal-2024-09",
      "fields": {},
      "acceptanceCriteria": []
    }
  }
}
```

