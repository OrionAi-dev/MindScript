type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
interface JsonObject {
    [k: string]: JsonValue;
}
interface JsonArray extends Array<JsonValue> {
}
type ISODateTime = string & {
    readonly __brand: "ISODateTime";
};
type FieldScope = {
    kind: "filetype";
    value: string;
} | {
    kind: "project";
    id: string;
} | {
    kind: "intent";
    value: string;
} | {
    kind: "global";
};
type FieldType = "string" | "number" | "boolean" | "enum" | "object" | "array" | "any";
interface BaseField<T = unknown> {
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
    ext?: Record<string, JsonValue>;
}
type SpecField<T = unknown> = BaseField<T> & ({
    type: "string";
    value?: string;
    default?: string;
} | {
    type: "number";
    value?: number;
    default?: number;
} | {
    type: "boolean";
    value?: boolean;
    default?: boolean;
} | {
    type: "enum";
    enum: readonly T[];
    value?: T;
    default?: T;
} | {
    type: "object";
    properties?: Record<string, SpecField>;
} | {
    type: "array";
    items?: SpecField;
} | {
    type: "any";
});
interface AcceptanceCriterion {
    id: string;
    description: string;
    verifier: string;
    params?: JsonObject;
}
interface Provenance {
    field: string;
    source: "user" | "context" | "default" | "memory" | "model";
    rationale?: string;
}
interface OpenSpecBase<F extends Record<string, SpecField> = Record<string, SpecField>> {
    kind: "context" | "turn";
    id: string;
    intent: string;
    fields: F;
    acceptanceCriteria: ReadonlyArray<AcceptanceCriterion>;
    provenance?: ReadonlyArray<Provenance>;
    lockedAt: ISODateTime;
    version?: string;
    signature?: string;
    meta?: Record<string, JsonValue>;
}
interface OpenSpecContext<F extends Record<string, SpecField> = Record<string, SpecField>> extends OpenSpecBase<F> {
    kind: "context";
    scope: {
        type: "session" | "project" | "workspace" | "global";
        id?: string;
    };
    lifespan: {
        mode: "session" | "rolling" | "pinned";
        ttlDays?: number;
        maxUses?: number;
    };
}
interface OpenSpecTurn<F extends Record<string, SpecField> = Record<string, SpecField>> extends OpenSpecBase<F> {
    kind: "turn";
    inheritsFrom: string;
}
type JsonPatchOp = "add" | "replace" | "remove";
interface JsonPatch {
    op: JsonPatchOp;
    path: string;
    value?: JsonValue;
}
interface DerivedSpec {
    baseId: string;
    patches: ReadonlyArray<JsonPatch>;
    provenance: ReadonlyArray<Provenance>;
}
interface ToolBinding<P extends Record<string, SpecField> = Record<string, SpecField>> {
    intent: string;
    tool: string;
    paramMap: {
        [K in keyof P]?: string;
    } & Record<string, string>;
}
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export type { AcceptanceCriterion, BaseField, DeepReadonly, DerivedSpec, FieldScope, FieldType, ISODateTime, JsonArray, JsonObject, JsonPatch, JsonPatchOp, JsonPrimitive, JsonValue, OpenSpecBase, OpenSpecContext, OpenSpecTurn, Provenance, SpecField, ToolBinding };
