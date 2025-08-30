# OpenSPI: Spec Language  

OpenSPI defines a consistent contract language for AI interactions.  

---

## Spec (Context / Turn)  
- **Context Spec**: environment contract (session / project / workspace / global).  
- **Turn Spec**: per-request contract derived from Context.  
- Both share the same structure: `fields`, `acceptanceCriteria`, `provenance`, `lockedAt`.  

---

## SpecField  
Each field has a consistent shape:  

- `type`: string | number | boolean | enum | object | array | any  
- `value`: chosen value (if set)  
- `required`: must be provided before execution  
- `min` / `max`: numeric, string length, or array length  
- `enum`: list of allowed values  
- `pattern`: regex for strings  
- `many`: allow multiple values  
- `noneAllowed`: allow null/empty  
- `default`: default if not provided  
- `source`: user | context | default | memory | model  
- `confidence`: interpreter confidence score  
- `rationale`: explanation of how it was set  
- `scope`: scope (filetype, project, intent, global)  

---

## Templates, Patches, and Contracts  
- **Template**: reusable spec starting point (semantic versioned).  
- **Patch**: JSON Patch applied to adapt a template.  
- **Contract**: immutable spec after clarifiers; locked with timestamp and signature.  

---

## Preferences  
- Scoped defaults that can be saved by the user.  
- Must include scope (filetype, project, global) and lifespan (TTL or max uses).  
- Refreshed periodically (“Still want this?”).  

---

## Policy  
Interpreter rules:  
- Max clarifiers per turn  
- Confidence thresholds  
- Refresh intervals for prefs  

---

## ToolBinding  
Mapping from spec fields to executor parameters.  

---

## Provenance, Signature, Events  
- **Provenance**: who/what set a field, with rationale.  
- **Signature**: deterministic hash of spec for audit.  
- **Event log**: record of state changes (lock, verify, fail, refresh).  

---

## Error / RiskFlag  
Standardized issue codes:  
- Ambiguous required field  
- Constraint conflict  
- Verifier fail  
- Tool error  
- Preference expired  

---

See `typescript.md` for the canonical TypeScript interfaces.  
