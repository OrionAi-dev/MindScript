# TypeScript Bindings

OpenSpec is type-first. The canonical bindings are implemented in TypeScript to guarantee consistency, validation, and extensibility.

---

## Goals

* **Type safety**: Every spec is a typed object.
* **Consistency**: `SpecField` uses discriminated unions.
* **Validation**: Runtime checks with [zod](https://zod.dev).
* **Extensibility**: Support module augmentation and `ext` namespaces.

---

## Core primitives

```ts
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export interface JsonObject { [k: string]: JsonValue }
export interface JsonArray extends Array<JsonValue> {}

export type ISODateTime = string & { readonly __brand: "ISODateTime" };
```

---

## SpecField

```ts
export type FieldType =
  | "string"
  | "number"
  | "boolean"
  | "enum"
  | "object"
  | "array"
  | "any";

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
  source?: "user" | "context" | "default" | "memory" | "model";
  confidence?: number;
  rationale?: string;
  scope?: FieldScope;
  ext?: Record<string, JsonValue>; // extensibility bucket
}

export type SpecField<T = unknown> = BaseField<T> &
  (
    | { type: "string"; value?: string; default?: string }
    | { type: "number"; value?: number; default?: number }
    | { type: "boolean"; value?: boolean; default?: boolean }
    | { type: "enum"; enum: readonly T[]; value?: T; default?: T }
    | { type: "object"; properties?: Record<string, SpecField> }
    | { type: "array"; items?: SpecField }
    | { type: "any" }
  );
```

---

## Spec, Context, Turn

```ts
export interface AcceptanceCriterion {
  id: string;
  description: string;
  verifier: string;
  params?: JsonObject;
}

export interface Provenance {
  field: string;
  source: "user" | "context" | "default" | "memory" | "model";
  rationale?: string;
}

export type FieldScope =
  | { kind: "filetype"; value: string }
  | { kind: "project"; id: string }
  | { kind: "intent"; value: string }
  | { kind: "global" };

export interface OpenSpecBase<
  F extends Record<string, SpecField> = Record<string, SpecField>
> {
  kind: "context" | "turn";
  id: string;
  intent: string;
  fields: F;
  acceptanceCriteria: ReadonlyArray<AcceptanceCriterion>;
  provenance?: ReadonlyArray<Provenance>;
  lockedAt: ISODateTime;
  version?: string;
  signature?: string;
}

export interface OpenSpecContext<
  F extends Record<string, SpecField> = Record<string, SpecField>
> extends OpenSpecBase<F> {
  kind: "context";
  scope: { type: "session" | "project" | "workspace" | "global"; id?: string };
  lifespan: { mode: "session" | "rolling" | "pinned"; ttlDays?: number; maxUses?: number };
}

export interface OpenSpecTurn<
  F extends Record<string, SpecField> = Record<string, SpecField>
> extends OpenSpecBase<F> {
  kind: "turn";
  inheritsFrom: string;
}
```

---

## Patches & ToolBindings

```ts
export type JsonPatchOp = "add" | "replace" | "remove";
export interface JsonPatch { op: JsonPatchOp; path: string; value?: JsonValue }

export interface DerivedSpec {
  baseId: string;
  patches: ReadonlyArray<JsonPatch>;
  provenance: ReadonlyArray<Provenance>;
}

export interface ToolBinding<
  P extends Record<string, SpecField> = Record<string, SpecField>
> {
  intent: string;
  tool: string;
  paramMap: { [K in keyof P]?: string } & Record<string, string>;
}
```

---

## Validation & Tooling

* Generate JSON Schema from TypeScript via [`ts-json-schema-generator`](https://github.com/YousefED/typescript-json-schema).
* Runtime validation with `zod`.
* Enforce strict mode in `tsconfig`:

  * `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
* ESLint rules: forbid `any`, enforce readonly.

---

## Example: Restaurant Turn

```ts
export interface RestaurantFields {
  definition_of_best: SpecField<
    "highest_rated" | "best_value" | "closest"
  > & { type: "enum" };
  cuisine: SpecField<string> & { type: "string" };
  radius_minutes: SpecField<number> & {
    type: "number";
    min?: 1;
    max?: 60;
    default?: 15;
  };
}

export type RestaurantTurn = OpenSpecTurn<RestaurantFields>;
export type RestaurantContext = OpenSpecContext<RestaurantFields>;
```
