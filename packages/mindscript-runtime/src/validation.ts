import type { MindScriptContext, MindScriptTurn } from "./types";
import { SCHEMA_IDS, validateWithSchema, type ValidationError } from "./schema";

export { type ValidationError } from "./schema";

export function validateContext(
  context: unknown
): { ok: true; value: MindScriptContext } | { ok: false; errors: ValidationError[] } {
  return validateWithSchema<MindScriptContext>(SCHEMA_IDS.context, context);
}

export function validateTurn(
  turn: unknown
): { ok: true; value: MindScriptTurn } | { ok: false; errors: ValidationError[] } {
  return validateWithSchema<MindScriptTurn>(SCHEMA_IDS.turn, turn);
}

export function assertContext(context: unknown): MindScriptContext {
  const res = validateContext(context);
  if (!res.ok) {
    const msg = res.errors.map(e => `${e.path}: ${e.message}`).join("\n");
    throw new Error(`Invalid MindScriptContext:\n${msg}`);
  }
  return res.value;
}

export function assertTurn(turn: unknown): MindScriptTurn {
  const res = validateTurn(turn);
  if (!res.ok) {
    const msg = res.errors.map(e => `${e.path}: ${e.message}`).join("\n");
    throw new Error(`Invalid MindScriptTurn:\n${msg}`);
  }
  return res.value;
}

