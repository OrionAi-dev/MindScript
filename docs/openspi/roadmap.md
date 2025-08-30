# Roadmap

OpenSPI is evolving into a full spec-first infrastructure for AI interactions. Below are the next milestones.

---

## Near-term

* **JSON Schema publication**: auto-generate schemas from TypeScript definitions for cross-language validation.
* **Verifier stdlib hardening**: expand and test acceptance check library.
* **Librarian metrics**: implement promotion thresholds, canary release, rollback.
* **CLI tooling**: `openspi validate|lock|verify|diff` for developers.

---

## Mid-term

* **Context stack support**: combine persona + project + filetype contexts.
* **Preference lifecycle**: implement TTL/usage-based refresh with backoff.
* **Telemetry integration**: OpenTelemetry spans for spec lifecycle events.
* **Golden tests**: regression suite for intents and templates.

---

## Long-term

* **Multi-user roles**: shared/team contexts with overrides.
* **Budget-aware execution**: enforce time, token, cost constraints in contracts.
* **Security policies**: field-level sensitivity, redaction, consent for global contexts.
* **Interoperability**: export/import specs with stable URIs, align with OpenAPI/JSON Schema.
* **Marketplace**: community-contributed templates and verifiers.

---

## Vision

Every AI request, no matter how simple, is backed by an explicit, typed, auditable spec contract. Context is durable, turns are ephemeral, and preferences are always in the user’s control.
