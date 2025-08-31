import { OpenSpecContext, OpenSpecTurn, SpecField, AcceptanceCriterion } from '@mindscript/openspec-types';
export * from '@mindscript/openspec-types';
import { z } from 'zod';

declare const zFieldScope: z.ZodUnion<readonly [z.ZodObject<{
    kind: z.ZodLiteral<"filetype">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"project">;
    id: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"intent">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"global">;
}, z.core.$strip>]>;
declare const zAcceptance: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    verifier: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
declare const zBaseField: z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        object: "object";
        any: "any";
        array: "array";
        enum: "enum";
    }>;
    value: z.ZodOptional<z.ZodUnknown>;
    required: z.ZodOptional<z.ZodBoolean>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    pattern: z.ZodOptional<z.ZodString>;
    many: z.ZodOptional<z.ZodBoolean>;
    noneAllowed: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodUnknown>;
    description: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<{
        default: "default";
        user: "user";
        context: "context";
        memory: "memory";
        model: "model";
    }>>;
    confidence: z.ZodOptional<z.ZodNumber>;
    rationale: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"filetype">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"project">;
        id: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"intent">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"global">;
    }, z.core.$strip>]>>;
    ext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
declare const zSpecField: z.ZodType<any>;
declare const zProvenance: z.ZodObject<{
    field: z.ZodString;
    source: z.ZodEnum<{
        default: "default";
        user: "user";
        context: "context";
        memory: "memory";
        model: "model";
    }>;
    rationale: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const zISODateTime: z.ZodString;
declare const zOpenSpecBase: z.ZodObject<{
    kind: z.ZodEnum<{
        context: "context";
        turn: "turn";
    }>;
    id: z.ZodString;
    intent: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodType<any, unknown, z.core.$ZodTypeInternals<any, unknown>>>;
    acceptanceCriteria: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        verifier: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
    provenance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<{
            default: "default";
            user: "user";
            context: "context";
            memory: "memory";
            model: "model";
        }>;
        rationale: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    lockedAt: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
declare const zOpenSpecContext: z.ZodObject<{
    id: z.ZodString;
    intent: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodType<any, unknown, z.core.$ZodTypeInternals<any, unknown>>>;
    acceptanceCriteria: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        verifier: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
    provenance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<{
            default: "default";
            user: "user";
            context: "context";
            memory: "memory";
            model: "model";
        }>;
        rationale: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    lockedAt: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    kind: z.ZodLiteral<"context">;
    scope: z.ZodObject<{
        type: z.ZodEnum<{
            project: "project";
            global: "global";
            session: "session";
            workspace: "workspace";
        }>;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    lifespan: z.ZodObject<{
        mode: z.ZodEnum<{
            session: "session";
            rolling: "rolling";
            pinned: "pinned";
        }>;
        ttlDays: z.ZodOptional<z.ZodNumber>;
        maxUses: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const zOpenSpecTurn: z.ZodObject<{
    id: z.ZodString;
    intent: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodType<any, unknown, z.core.$ZodTypeInternals<any, unknown>>>;
    acceptanceCriteria: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        verifier: z.ZodString;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
    provenance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<{
            default: "default";
            user: "user";
            context: "context";
            memory: "memory";
            model: "model";
        }>;
        rationale: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    lockedAt: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    signature: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    kind: z.ZodLiteral<"turn">;
    inheritsFrom: z.ZodString;
}, z.core.$strip>;
declare const zJsonPatch: z.ZodObject<{
    op: z.ZodEnum<{
        replace: "replace";
        add: "add";
        remove: "remove";
    }>;
    path: z.ZodString;
    value: z.ZodOptional<z.ZodUnknown>;
}, z.core.$strip>;
declare const zDerivedSpec: z.ZodObject<{
    baseId: z.ZodString;
    patches: z.ZodArray<z.ZodObject<{
        op: z.ZodEnum<{
            replace: "replace";
            add: "add";
            remove: "remove";
        }>;
        path: z.ZodString;
        value: z.ZodOptional<z.ZodUnknown>;
    }, z.core.$strip>>;
    provenance: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        source: z.ZodEnum<{
            default: "default";
            user: "user";
            context: "context";
            memory: "memory";
            model: "model";
        }>;
        rationale: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const zToolBinding: z.ZodObject<{
    intent: z.ZodString;
    tool: z.ZodString;
    paramMap: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
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
