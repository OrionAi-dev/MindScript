[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / zOpenSpecContext

# Variable: zOpenSpecContext

> `const` **zOpenSpecContext**: `z.ZodObject`\<\{ `acceptanceCriteria`: `z.ZodDefault`\<`z.ZodArray`\<`z.ZodObject`\<\{ `description`: `z.ZodString`; `id`: `z.ZodString`; `params`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `verifier`: `z.ZodString`; \}, `z.core.$strip`\>\>\>; `fields`: `z.ZodRecord`\<`z.ZodString`, `z.ZodType`\<`any`, `unknown`, `z.core.$ZodTypeInternals`\<`any`, `unknown`\>\>\>; `id`: `z.ZodString`; `intent`: `z.ZodString`; `kind`: `z.ZodLiteral`\<`"context"`\>; `lifespan`: `z.ZodObject`\<\{ `maxUses`: `z.ZodOptional`\<`z.ZodNumber`\>; `mode`: `z.ZodEnum`\<\{ `pinned`: `"pinned"`; `rolling`: `"rolling"`; `session`: `"session"`; \}\>; `ttlDays`: `z.ZodOptional`\<`z.ZodNumber`\>; \}, `z.core.$strip`\>; `lockedAt`: `z.ZodString`; `meta`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `provenance`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `field`: `z.ZodString`; `rationale`: `z.ZodOptional`\<`z.ZodString`\>; `source`: `z.ZodEnum`\<\{ `context`: `"context"`; `default`: `"default"`; `memory`: `"memory"`; `model`: `"model"`; `user`: `"user"`; \}\>; \}, `z.core.$strip`\>\>\>; `scope`: `z.ZodObject`\<\{ `id`: `z.ZodOptional`\<`z.ZodString`\>; `type`: `z.ZodEnum`\<\{ `global`: `"global"`; `project`: `"project"`; `session`: `"session"`; `workspace`: `"workspace"`; \}\>; \}, `z.core.$strip`\>; `signature`: `z.ZodOptional`\<`z.ZodString`\>; `version`: `z.ZodOptional`\<`z.ZodString`\>; \}, `z.core.$strip`\>

Defined in: [packages/openspec-runtime/dist/index.d.ts:109](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-runtime/dist/index.d.ts#L109)
