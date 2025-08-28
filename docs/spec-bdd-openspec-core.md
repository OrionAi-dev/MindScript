# OpenSpec BDD: `openspec.core` (v1.0)

**What it is:** a minimal, portable BDD scenario format (YAML) you can use in domains that do not already have a native BDD stack.  
**How it is used:** just like Cucumber or Behave — your OpenSpec specs reference it via `bdd_ref.source` and `bdd_ref.path`.

---

## When to use `openspec.core`

- You want human-readable scenarios but do not want to commit to a specific BDD tool yet.  
- You need a single source that can later generate Cucumber, Behave, Behat, or Robot files.  
- Non-software domains (legal, operations, policy) need structured scenarios with schema validation.

If you already have a mature BDD toolchain, prefer that and just reference it.

---

## File format (YAML)

**Header**
- `profile: https://openspec.dev/profiles/bdd/openspec.core`
- `kind: bdd-core`
- `meta.id` (for example, `AUTH-101.core`), `meta.title`, optional `meta.tags`

**Body**
- Optional `background.steps[]` – list of steps (Given, When, Then, And, But)  
- `scenarios[]` – each with:
  - `id`, `name`, optional `tags`
  - `outline: true|false` and `examples[]` (for parameterized scenarios)
  - `steps[]` – `{ keyword, text, table?, doc? }`

**Minimal example**
```yaml
profile: https://openspec.dev/profiles/bdd/openspec.core
kind: bdd-core
meta:
  id: AUTH-101.core
  title: AUTH-101 login scenarios
background:
  steps:
    - { keyword: Given, text: "a registered user with a verified email" }
scenarios:
  - id: auth-login-success
    name: Valid credentials produce a successful session
    steps:
      - { keyword: When, text: "the user submits valid credentials" }
      - { keyword: Then, text: "the app creates a session and redirects to the dashboard" }
```

---

## Referencing from `@software`

```yaml
# inside docs/openspec/implementations/@software/examples/AUTH-101.openspec-core.yaml
profile: https://openspec.dev/profiles/@software
kind: software
meta: { id: AUTH-101, title: User can log in, owner: app-auth, priority: P0 }
requirements:
  - id: AUTH-101.1
    statement: Users can authenticate with valid credentials
    criteria:
      - id: AUTH-101.1.1
        type: functional
        text: Valid credentials produce a successful session
        bdd_ref:
          source: https://openspec.dev/profiles/bdd/openspec.core
          path: ../../bdd/openspec.core/examples/AUTH-101.core.yaml
          scenario: auth-login-success
```

---

## Validation

```bash
# Validate an openspec.core file
ajv validate 
  -s <(yq -o=json docs/openspec/implementations/bdd/openspec.core/schema.yaml) 
  -d <(yq -o=json docs/openspec/implementations/bdd/openspec.core/examples/AUTH-101.core.yaml)
```

---

## Adapters (tooling)

- **Traceability:** produce `dist/openspec-core/index.json` that links criteria to scenario ids.  
- **Generators (optional):** render `.feature` files for Cucumber, Behave, Behat, or Robot.  
- **Round-trip (optional):** import and export from Gherkin if you need to migrate.

---

## Versioning

- Profile URL: `https://openspec.dev/profiles/bdd/openspec.core`  
- Schema URL: `https://openspec.dev/schemas/bdd/openspec.core-1.0.json`  
- Use SemVer. Backward compatible additions bump the minor version, breaking changes bump the major version.

---

## Where the files live in this repo

- Schema and examples: `docs/openspec/implementations/bdd/openspec.core/`  
- `@software` BDD registry entry: `docs/openspec/implementations/@software/bdd-registry.yaml`  
- This page: `docs/openspec/spec-bdd-openspec-core.md`
