# Verification (Acceptance Checks)

Verification ensures that outputs meet the explicit acceptance criteria defined in an OpenSpec contract. Each criterion is mapped to a **verifier**: a function or service that can deterministically check compliance.

---

## Standard Library of Acceptance Checks

* **within\_radius** – results must be within a numeric threshold (meters/minutes)
* **sorted\_by** – results must be ordered by a specified field (asc/desc)
* **count\_between** – result count must fall within min/max bounds
* **contains\_fields** – each item must contain specific fields
* **dominant\_color** – image contains dominant color within a threshold
* **contains\_terms** – text must include required terms (all or any)
* **unique\_by** – results must be unique by a specified field
* **response\_shape** – response must conform to a JSON Schema
* **latency\_under** – execution completed under N ms
* **tool\_success** – downstream tool reports success (status == ok)
* **similarity\_above** – embedding similarity exceeds threshold
* **price\_level\_in** – price levels fall within an allowed set
* **dietary\_supported** – restaurant supports required dietary restrictions

---

## Verifier Contract

Each verifier is a typed function:

```ts
interface Verifier {
  id: string;                        // e.g., "within_radius"
  description: string;
  run: (output: any, params?: Record<string, any>) => Promise<VerifierResult>;
}

interface VerifierResult {
  pass: boolean;
  details?: string;
}
```

---

## Workflow

1. **Lock Turn** – acceptance criteria are frozen.
2. **Execute** – tool binding produces an output.
3. **Verify** – each criterion checked with matching verifier.
4. **Report** – if any fail → remediation prompt or stop, per policy.

---

## Example

```json
{
  "acceptanceCriteria": [
    { "id": "within_radius", "description": "≤15 minutes", "verifier": "within_radius", "params": {"max": 15} },
    { "id": "sorted_by", "description": "Highest rated first", "verifier": "sorted_by", "params": {"field": "rating", "order": "desc"} }
  ]
}
```

---

## Policies on Failures

* **Retry** – rerun with remediation prompt (e.g., narrower radius).
* **Clarify** – ask user for adjusted criteria.
* **Stop** – return error with failed criterion.

---

See also: [spec.md](./spec.md) for structure and [typescript.md](./typescript.md) for type bindings.
