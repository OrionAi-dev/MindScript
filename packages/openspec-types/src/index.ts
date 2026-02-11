/**
 * @deprecated
 * This package exists for compatibility with earlier OpenSpec naming.
 *
 * Canonical, schema-aligned exports live in `@mindscript/runtime` and `@mindscript/schema`.
 */

export * from "@mindscript/runtime";

import type {
  JsonObject,
  JsonValue,
  ProvenanceEntry,
  MindScriptBase,
  MindScriptContext,
  MindScriptTurn,
  MindScriptRequestEnvelope,
  MindScriptContextRequestEnvelope,
  MindScriptTurnRequestEnvelope,
  SpecField
} from "@mindscript/runtime";

/**
 * @deprecated Use `MindScriptBase`.
 */
export type OpenSpecBase<F extends Record<string, SpecField> = Record<string, SpecField>> = MindScriptBase<F>;

/**
 * @deprecated Use `MindScriptContext`.
 */
export type OpenSpecContext<F extends Record<string, SpecField> = Record<string, SpecField>> = MindScriptContext<F>;

/**
 * @deprecated Use `MindScriptTurn`.
 */
export type OpenSpecTurn<F extends Record<string, SpecField> = Record<string, SpecField>> = MindScriptTurn<F>;

/**
 * @deprecated Use `MindScriptRequestEnvelope`.
 */
export type OpenSpecRequestEnvelope<
  TContext extends MindScriptContext = MindScriptContext,
  TTurn extends MindScriptTurn = MindScriptTurn,
  TInput extends JsonObject | JsonValue = JsonObject
> = MindScriptRequestEnvelope<TContext, TTurn, TInput>;

/**
 * @deprecated Use `MindScriptContextRequestEnvelope`.
 */
export type OpenSpecContextRequestEnvelope<
  TContext extends MindScriptContext = MindScriptContext
> = MindScriptContextRequestEnvelope<TContext>;

/**
 * @deprecated Use `MindScriptTurnRequestEnvelope`.
 */
export type OpenSpecTurnRequestEnvelope<
  TTurn extends MindScriptTurn = MindScriptTurn
> = MindScriptTurnRequestEnvelope<TTurn>;

// ---------------------------------------------------------------------------
// Legacy extra types (not part of the canonical JSON Schemas)
// ---------------------------------------------------------------------------

export type JsonPatchOp = "add" | "replace" | "remove";
export interface JsonPatch {
  op: JsonPatchOp;
  path: string;
  value?: JsonValue;
}

export interface DerivedSpec {
  baseId: string;
  patches: ReadonlyArray<JsonPatch>;
  provenance: ReadonlyArray<ProvenanceEntry>;
}

export interface ToolBinding<P extends Record<string, SpecField> = Record<string, SpecField>> {
  intent: string;
  tool: string;
  paramMap: { [K in keyof P]?: string } & Record<string, string>;
}
