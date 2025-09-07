import { OpenSpecContext, OpenSpecTurn, SpecField, AcceptanceCriterion } from '@mindscript/openspec-types';
export * from '@mindscript/openspec-types';
import { z } from 'zod';

declare const zFieldScope: z.ZodUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"filetype">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    kind: "filetype";
}, {
    value: string;
    kind: "filetype";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"project">;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "project";
    id: string;
}, {
    kind: "project";
    id: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"intent">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    kind: "intent";
}, {
    value: string;
    kind: "intent";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"global">;
}, "strip", z.ZodTypeAny, {
    kind: "global";
}, {
    kind: "global";
}>]>;
declare const zAcceptance: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    verifier: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    verifier: string;
    params?: Record<string, unknown> | undefined;
}, {
    id: string;
    description: string;
    verifier: string;
    params?: Record<string, unknown> | undefined;
}>;
declare const zBaseField: z.ZodObject<{
    type: z.ZodEnum<["string", "number", "boolean", "enum", "object", "array", "any"]>;
    value: z.ZodOptional<z.ZodUnknown>;
    required: z.ZodOptional<z.ZodBoolean>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>;
    pattern: z.ZodOptional<z.ZodString>;
    many: z.ZodOptional<z.ZodBoolean>;
    noneAllowed: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodUnknown>;
    description: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<["user", "context", "default", "memory", "model"]>>;
    confidence: z.ZodOptional<z.ZodNumber>;
    rationale: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"filetype">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kind: "filetype";
    }, {
        value: string;
        kind: "filetype";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"project">;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "project";
        id: string;
    }, {
        kind: "project";
        id: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"intent">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kind: "intent";
    }, {
        value: string;
        kind: "intent";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"global">;
    }, "strip", z.ZodTypeAny, {
        kind: "global";
    }, {
        kind: "global";
    }>]>>;
    ext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    type: "string" | "number" | "boolean" | "object" | "array" | "enum" | "any";
    value?: unknown;
    many?: boolean | undefined;
    description?: string | undefined;
    enum?: unknown[] | undefined;
    required?: boolean | undefined;
    min?: number | undefined;
    max?: number | undefined;
    pattern?: string | undefined;
    noneAllowed?: boolean | undefined;
    default?: unknown;
    source?: "default" | "user" | "context" | "memory" | "model" | undefined;
    confidence?: number | undefined;
    rationale?: string | undefined;
    scope?: {
        value: string;
        kind: "filetype";
    } | {
        kind: "project";
        id: string;
    } | {
        value: string;
        kind: "intent";
    } | {
        kind: "global";
    } | undefined;
    ext?: Record<string, unknown> | undefined;
}, {
    type: "string" | "number" | "boolean" | "object" | "array" | "enum" | "any";
    value?: unknown;
    many?: boolean | undefined;
    description?: string | undefined;
    enum?: unknown[] | undefined;
    required?: boolean | undefined;
    min?: number | undefined;
    max?: number | undefined;
    pattern?: string | undefined;
    noneAllowed?: boolean | undefined;
    default?: unknown;
    source?: "default" | "user" | "context" | "memory" | "model" | undefined;
    confidence?: number | undefined;
    rationale?: string | undefined;
    scope?: {
        value: string;
        kind: "filetype";
    } | {
        kind: "project";
        id: string;
    } | {
        value: string;
        kind: "intent";
    } | {
        kind: "global";
    } | undefined;
    ext?: Record<string, unknown> | undefined;
}>;
declare const zSpecField: z.ZodType<any>;
declare const zProvenance: z.ZodObject<{
    field: z.ZodString;
    source: z.ZodEnum<["user", "context", "default", "memory", "model"]>;
    rationale: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    source: "default" | "user" | "context" | "memory" | "model";
    field: string;
    rationale?: string | undefined;
}, {
    source: "default" | "user" | "context" | "memory" | "model";
    field: string;
    rationale?: string | undefined;
}>;
declare const zISODateTime: z.ZodString;
declare const zOpenSpecBase: z.ZodObject<{
    kind: z.ZodEnum<["context", "turn"]>;
    id: z.ZodString;
    intent: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodType<any, z.ZodTypeDef, any>>;
    acceptanceCriteria: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        verifier: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }, {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }>, "many">>;
    provenance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<["user", "context", "default", "memory", "model"]>;
        rationale: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }>, "many">>;
    lockedAt: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    kind: "context" | "turn";
    id: string;
    intent: string;
    fields: Record<string, any>;
    acceptanceCriteria: {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }[];
    lockedAt: string;
    provenance?: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[] | undefined;
    version?: string | undefined;
    signature?: string | undefined;
    meta?: Record<string, unknown> | undefined;
}, {
    kind: "context" | "turn";
    id: string;
    intent: string;
    fields: Record<string, any>;
    lockedAt: string;
    acceptanceCriteria?: {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }[] | undefined;
    provenance?: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[] | undefined;
    version?: string | undefined;
    signature?: string | undefined;
    meta?: Record<string, unknown> | undefined;
}>;
declare const zOpenSpecContext: z.ZodObject<{
    id: z.ZodString;
    intent: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodType<any, z.ZodTypeDef, any>>;
    acceptanceCriteria: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        verifier: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }, {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }>, "many">>;
    provenance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<["user", "context", "default", "memory", "model"]>;
        rationale: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }>, "many">>;
    lockedAt: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
} & {
    kind: z.ZodLiteral<"context">;
    scope: z.ZodObject<{
        type: z.ZodEnum<["session", "project", "workspace", "global"]>;
        id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "project" | "global" | "session" | "workspace";
        id?: string | undefined;
    }, {
        type: "project" | "global" | "session" | "workspace";
        id?: string | undefined;
    }>;
    lifespan: z.ZodObject<{
        mode: z.ZodEnum<["session", "rolling", "pinned"]>;
        ttlDays: z.ZodOptional<z.ZodNumber>;
        maxUses: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        mode: "session" | "rolling" | "pinned";
        ttlDays?: number | undefined;
        maxUses?: number | undefined;
    }, {
        mode: "session" | "rolling" | "pinned";
        ttlDays?: number | undefined;
        maxUses?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "context";
    id: string;
    intent: string;
    scope: {
        type: "project" | "global" | "session" | "workspace";
        id?: string | undefined;
    };
    fields: Record<string, any>;
    acceptanceCriteria: {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }[];
    lockedAt: string;
    lifespan: {
        mode: "session" | "rolling" | "pinned";
        ttlDays?: number | undefined;
        maxUses?: number | undefined;
    };
    provenance?: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[] | undefined;
    version?: string | undefined;
    signature?: string | undefined;
    meta?: Record<string, unknown> | undefined;
}, {
    kind: "context";
    id: string;
    intent: string;
    scope: {
        type: "project" | "global" | "session" | "workspace";
        id?: string | undefined;
    };
    fields: Record<string, any>;
    lockedAt: string;
    lifespan: {
        mode: "session" | "rolling" | "pinned";
        ttlDays?: number | undefined;
        maxUses?: number | undefined;
    };
    acceptanceCriteria?: {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }[] | undefined;
    provenance?: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[] | undefined;
    version?: string | undefined;
    signature?: string | undefined;
    meta?: Record<string, unknown> | undefined;
}>;
declare const zOpenSpecTurn: z.ZodObject<{
    id: z.ZodString;
    intent: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodType<any, z.ZodTypeDef, any>>;
    acceptanceCriteria: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        verifier: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }, {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }>, "many">>;
    provenance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<["user", "context", "default", "memory", "model"]>;
        rationale: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }>, "many">>;
    lockedAt: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
} & {
    kind: z.ZodLiteral<"turn">;
    inheritsFrom: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "turn";
    id: string;
    intent: string;
    fields: Record<string, any>;
    acceptanceCriteria: {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }[];
    lockedAt: string;
    inheritsFrom: string;
    provenance?: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[] | undefined;
    version?: string | undefined;
    signature?: string | undefined;
    meta?: Record<string, unknown> | undefined;
}, {
    kind: "turn";
    id: string;
    intent: string;
    fields: Record<string, any>;
    lockedAt: string;
    inheritsFrom: string;
    acceptanceCriteria?: {
        id: string;
        description: string;
        verifier: string;
        params?: Record<string, unknown> | undefined;
    }[] | undefined;
    provenance?: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[] | undefined;
    version?: string | undefined;
    signature?: string | undefined;
    meta?: Record<string, unknown> | undefined;
}>;
declare const zJsonPatch: z.ZodObject<{
    op: z.ZodEnum<["add", "replace", "remove"]>;
    path: z.ZodString;
    value: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    path: string;
    op: "add" | "replace" | "remove";
    value?: unknown;
}, {
    path: string;
    op: "add" | "replace" | "remove";
    value?: unknown;
}>;
declare const zDerivedSpec: z.ZodObject<{
    baseId: z.ZodString;
    patches: z.ZodArray<z.ZodObject<{
        op: z.ZodEnum<["add", "replace", "remove"]>;
        path: z.ZodString;
        value: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        op: "add" | "replace" | "remove";
        value?: unknown;
    }, {
        path: string;
        op: "add" | "replace" | "remove";
        value?: unknown;
    }>, "many">;
    provenance: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<["user", "context", "default", "memory", "model"]>;
        rationale: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }, {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    provenance: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[];
    baseId: string;
    patches: {
        path: string;
        op: "add" | "replace" | "remove";
        value?: unknown;
    }[];
}, {
    provenance: {
        source: "default" | "user" | "context" | "memory" | "model";
        field: string;
        rationale?: string | undefined;
    }[];
    baseId: string;
    patches: {
        path: string;
        op: "add" | "replace" | "remove";
        value?: unknown;
    }[];
}>;
declare const zToolBinding: z.ZodObject<{
    intent: z.ZodString;
    tool: z.ZodString;
    paramMap: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    intent: string;
    tool: string;
    paramMap: Record<string, string>;
}, {
    intent: string;
    tool: string;
    paramMap: Record<string, string>;
}>;
type ZContext = z.infer<typeof zOpenSpecContext>;
type ZTurn = z.infer<typeof zOpenSpecTurn>;
type ZField = z.infer<typeof zSpecField>;

/**
 * Merge Context fields into Turn fields (top level), applying precedence per field.
 * - If a key exists only in Context → include it.
 * - If in both → resolve via mergeField (deep merge + precedence).
 */
declare function mergeContextIntoTurn(ctx: OpenSpecContext, turn: OpenSpecTurn): OpenSpecTurn;
/**
 * Apply RFC6902-like patches to a flat fields object.
 * Supported paths (flat): "/fields/<key>"
 * Supported ops: add | replace | remove
 */
declare function applyPatches(fields: {
    [k: string]: SpecField;
}, patches: {
    op: "add" | "replace" | "remove";
    path: string;
    value?: any;
}[]): {
    [k: string]: SpecField;
};

interface VerifierResult {
    pass: boolean;
    details?: string;
}
interface VerifierFn {
    (output: unknown, params?: Record<string, unknown>): VerifierResult;
}
/**
 * Register a new verifier function (sync).
 */
declare function registerVerifier(id: string, fn: VerifierFn): void;
/**
 * Run all acceptance criteria against an output (sync).
 * If a verifier returns something that looks like a Promise/thenable,
 * we mark it unsupported in this ES5 build.
 */
declare function verifyOutput(output: unknown, criteria: AcceptanceCriterion[]): VerifierResult[];

export { type VerifierFn, type VerifierResult, type ZContext, type ZField, type ZTurn, applyPatches, mergeContextIntoTurn, registerVerifier, verifyOutput, zAcceptance, zBaseField, zDerivedSpec, zFieldScope, zISODateTime, zJsonPatch, zOpenSpecBase, zOpenSpecContext, zOpenSpecTurn, zProvenance, zSpecField, zToolBinding };
