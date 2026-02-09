// Core MindScript types aligned with @mindscript/schema (canonical JSON Schema).

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export interface JsonObject {
  [k: string]: JsonValue;
}
export interface JsonArray extends Array<JsonValue> {}

export type ISODateTime = string & { readonly __brand: "ISODateTime" };

export type FieldScope =
  | { kind: "filetype"; value: string }
  | { kind: "project"; id: string }
  | { kind: "intent"; value: string }
  | { kind: "global" };

export type FieldType = "string" | "number" | "boolean" | "enum" | "object" | "array" | "any";
export type FieldSource = "user" | "context" | "default" | "memory" | "model" | "system";

export interface BaseField<T = unknown> {
  type: FieldType;
  value?: T;
  required?: boolean;
  min?: number;
  max?: number;
  enum?: readonly T[];
  pattern?: string;
  many?: boolean;
  noneAllowed?: boolean;
  default?: T;
  description?: string;
  source?: FieldSource;
  confidence?: number;
  rationale?: string;
  scope?: FieldScope;
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

export interface EvidenceRef {
  ref: string;
  kind?: string;
  selector?: string;
  checksum?: string;
  ext?: Record<string, JsonValue>;
}

export interface AcceptanceCriterion {
  id: string;
  description: string;
  verifier: string;
  params?: JsonObject;
  evidence?: ReadonlyArray<EvidenceRef>;
}

export type AcceptanceCriteria = ReadonlyArray<AcceptanceCriterion>;

export interface ProvenanceEntry {
  source: FieldSource;
  at: ISODateTime;
  field?: string;
  actor?: string;
  note?: string;
  data?: Record<string, JsonValue>;
  ext?: Record<string, JsonValue>;
}

export type Provenance = ReadonlyArray<ProvenanceEntry>;

export interface MindScriptBase<F extends Record<string, SpecField> = Record<string, SpecField>> {
  kind: "context" | "turn";
  id: string;
  intent: string;
  fields: F;
  acceptanceCriteria: AcceptanceCriteria;
  provenance?: Provenance;
  lockedAt: ISODateTime;
  version?: string;
  signature?: string;
  meta?: Record<string, JsonValue>;
}

export interface MindScriptContext<F extends Record<string, SpecField> = Record<string, SpecField>>
  extends MindScriptBase<F> {
  kind: "context";
  scope: { type: "session" | "project" | "workspace" | "global"; id?: string };
  lifespan: { mode: "session" | "rolling" | "pinned"; ttlDays?: number; maxUses?: number };
}

export interface MindScriptTurn<F extends Record<string, SpecField> = Record<string, SpecField>>
  extends MindScriptBase<F> {
  kind: "turn";
  inheritsFrom: string;
}

export type Context<F extends Record<string, SpecField> = Record<string, SpecField>> = MindScriptContext<F>;
export type Turn<F extends Record<string, SpecField> = Record<string, SpecField>> = MindScriptTurn<F>;

export interface MindScriptRequestEnvelope<
  TContext extends MindScriptContext = MindScriptContext,
  TTurn extends MindScriptTurn = MindScriptTurn,
  TInput extends JsonObject | JsonValue = JsonObject
> {
  context: TContext;
  turn: TTurn;
  input?: TInput;
  requestId?: string;
  meta?: Record<string, JsonValue>;
}

export interface MindScriptContextRequestEnvelope<TContext extends MindScriptContext = MindScriptContext> {
  context: TContext;
  requestId?: string;
  meta?: Record<string, JsonValue>;
}

export interface MindScriptTurnRequestEnvelope<TTurn extends MindScriptTurn = MindScriptTurn> {
  turn: TTurn;
  requestId?: string;
  meta?: Record<string, JsonValue>;
}
