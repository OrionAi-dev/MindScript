[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / zDerivedSpec

# Variable: zDerivedSpec

> `const` **zDerivedSpec**: `z.ZodObject`\<\{ `baseId`: `z.ZodString`; `patches`: `z.ZodArray`\<`z.ZodObject`\<\{ `op`: `z.ZodEnum`\<\[`"add"`, `"replace"`, `"remove"`\]\>; `path`: `z.ZodString`; `value`: `z.ZodOptional`\<`z.ZodUnknown`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `op`: `"add"` \| `"replace"` \| `"remove"`; `path`: `string`; `value?`: `unknown`; \}, \{ `op`: `"add"` \| `"replace"` \| `"remove"`; `path`: `string`; `value?`: `unknown`; \}\>, `"many"`\>; `provenance`: `z.ZodArray`\<`z.ZodObject`\<\{ `field`: `z.ZodString`; `rationale`: `z.ZodOptional`\<`z.ZodString`\>; `source`: `z.ZodEnum`\<\[`"user"`, `"context"`, `"default"`, `"memory"`, `"model"`\]\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `field`: `string`; `rationale?`: `string`; `source`: `"default"` \| `"user"` \| `"context"` \| `"memory"` \| `"model"`; \}, \{ `field`: `string`; `rationale?`: `string`; `source`: `"default"` \| `"user"` \| `"context"` \| `"memory"` \| `"model"`; \}\>, `"many"`\>; \}, `"strip"`, `z.ZodTypeAny`, \{ `baseId`: `string`; `patches`: `object`[]; `provenance`: `object`[]; \}, \{ `baseId`: `string`; `patches`: `object`[]; `provenance`: `object`[]; \}\>

Defined in: [packages/openspec-runtime/dist/index.d.ts:473](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-runtime/dist/index.d.ts#L473)
