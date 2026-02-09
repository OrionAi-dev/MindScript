// MindScript Core Types
// Strict, TypeScript-first bindings for MindScript.Context and MindScript.Turn

// ---------- JSON primitives ----------
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export interface JsonObject { [k: string]: JsonValue }
export interface JsonArray extends Array<JsonValue> {}

// ---------- Branded primitives ----------
export type ISODateTime = string & { readonly __brand: "ISODateTime" };

// ---------- Field scopes ----------
export type FieldScope =
  | { kind: "filetype"; value: string }
  | { kind: "project"; id: string }
  | { kind: "intent"; value: string }
  | { kind: "global" };

// ---------- Spec fields ----------
export type FieldType = "string" | "number" | "boolean" | "enum" | "object" | "array" | "any";

export interface BaseField<T = unknown> {
  type: FieldType;
  value?: T;                // chosen value (if set)
  required?: boolean;       // must be provided before execution

  // Constraints
  min?: number;             // numbers=value; string/array=length
  max?: number;
  enum?: readonly T[];      // allowed set (for enum or constrained)
  pattern?: string;         // ECMA-262 regex (strings)
  many?: boolean;           // multiple values allowed
  noneAllowed?: boolean;    // explicit null/empty allowed

  // Meta
  default?: T;
  description?: string;
  source?: "user" | "context" | "default" | "memory" | "model";
  confidence?: number;      // 0..1 interpreter confidence
  rationale?: string;       // short why/extraction note
  scope?: FieldScope;       // where it applies

  // Extension bucket (namespaced keys recommended)
  ext?: Record<string, JsonValue>;
}

export type SpecField<T = unknown> = BaseField<T> & (
  | { type: "string"; value?: string; default?: string }
  | { type: "number"; value?: number; default?: number }
  | { type: "boolean"; value?: boolean; default?: boolean }
  | { type: "enum"; enum: readonly T[]; value?: T; default?: T }
  | { type: "object"; properties?: Record<string, SpecField> }
  | { type: "array"; items?: SpecField }
  | { type: "any" }
);

// ---------- Acceptance criteria & provenance ----------
export interface AcceptanceCriterion {
  id: string;                        // e.g., "within_radius"
  description: string;               // human-readable
  verifier: string;                  // ID in verifier registry
  params?: JsonObject;               // extra arguments for verifier
}

export interface Provenance {
  field: string;                     // field key
  source: "user" | "context" | "default" | "memory" | "model";
  rationale?: string;
}

// ---------- Base spec ----------
export interface MindScriptBase<F extends Record<string, SpecField> = Record<string, SpecField>> {
  kind: "context" | "turn";
  id: string;                        // unique ID for traceability
  intent: string;                    // purpose
  fields: F;                         // dynamic fields
  acceptanceCriteria: ReadonlyArray<AcceptanceCriterion>;
  provenance?: ReadonlyArray<Provenance>;
  lockedAt: ISODateTime;             // freeze timestamp
  version?: string;                  // semver for templates/contracts
  signature?: string;                // sha256 for audits
  meta?: Record<string, JsonValue>;  // extension at spec level
}

// ---------- Context spec ----------
export interface MindScriptContext<F extends Record<string, SpecField> = Record<string, SpecField>>
  extends MindScriptBase<F> {
  kind: "context";
  scope: { type: "session" | "project" | "workspace" | "global"; id?: string };
  lifespan: { mode: "session" | "rolling" | "pinned"; ttlDays?: number; maxUses?: number };
}

// ---------- Turn spec ----------
export interface MindScriptTurn<F extends Record<string, SpecField> = Record<string, SpecField>>
  extends MindScriptBase<F> {
  kind: "turn";
  inheritsFrom: string;              // context id
}

// ---------- Patches & derived specs ----------
export type JsonPatchOp = "add" | "replace" | "remove";
export interface JsonPatch { op: JsonPatchOp; path: string; value?: JsonValue }

export interface DerivedSpec {
  baseId: string;                    // template id
  patches: ReadonlyArray<JsonPatch>;
  provenance: ReadonlyArray<Provenance>;
}

// ---------- Tool binding ----------
export interface ToolBinding<P extends Record<string, SpecField> = Record<string, SpecField>> {
  intent: string;                    // maps an intent to a tool
  tool: string;                      // registry key for executor
  paramMap: { [K in keyof P]?: string } & Record<string, string>; // specField -> tool param
}

// ---------- Utility types ----------
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
};
/**
 * Runtime marker export.
 * This package is primarily types; this constant exists so the JS output is non-empty.
 */
export const MINDSCRIPT_TYPES_RUNTIME = true as const;
