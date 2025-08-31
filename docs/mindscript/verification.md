# Verification

Verification ensures that an execution result matches the locked contract’s acceptance criteria.

---

## Acceptance Criteria

Each spec includes a list of **acceptanceCriteria**:

* **id**: unique identifier (e.g., `within_radius`)
* **description**: human-readable
* **verifier**: reference to a registered verifier
* **params**: optional arguments to the verifier

Example:

```json
{
  "id": "radius_check",
  "description": "Result must be within 10 minutes walking distance",
  "verifier": "count_between",
  "params": { "min": 1, "max": 10 }
}
```

---

## Verifiers

* **Registry**: pluggable functions registered by `key`.
* **Signature**: `(output, params) → { pass: boolean, details?: string }`
* **Stdlib** (built-in):

  * `count_between`: check array length
  * `sorted_by`: verify ordering
  * `contains_fields`: required fields present
  * `unique_by`: uniqueness on a field
  * `response_shape`: pluggable structural check (predicate or schema hook)

---

## Workflow

1. Executor produces `output`.
2. For each criterion:

   * Look up verifier by `verifier` key.
   * Run against `output` with `params`.
   * Record result: pass/fail + details.
3. Aggregate results → overall pass/fail.

---

## Policies

* If **all criteria pass** → contract fulfilled.
* If **any fail** → return structured error with failure details.
* Failure handling:

  * **Retry**: ask clarifiers, re-execute.
  * **Escalate**: flag to user or system.
  * **Rollback**: revert template if systematic.

---

## Example: Verifier Run

```json
{
  "contractId": "turn:123",
  "results": [
    { "id": "radius_check", "pass": true, "details": "length=3, min=1, max=10" },
    { "id": "sorted", "pass": false, "details": "Order violation at index 2" }
  ],
  "overall": false
}
```

---

## Cross-References

* [spec-language.md](./spec-language.md) → acceptanceCriteria field definition
* [templates.md](./templates.md) → template promotion criteria use verifier results
* [quickstart.md](./quickstart.md) → shows locking & verifying in code
