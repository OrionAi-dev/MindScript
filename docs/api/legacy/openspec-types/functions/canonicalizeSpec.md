[**@mindscript/openspec-types**](../README.md)

***

[@mindscript/openspec-types](../README.md) / canonicalizeSpec

# Function: canonicalizeSpec()

> **canonicalizeSpec**\<`T`\>(`spec`): `T`

Defined in: packages/mindscript-runtime/dist/index.d.ts:190

Canonicalize a MindScript spec for deterministic hashing:
- sort object keys recursively
- sort `fields` keys
- sort `acceptanceCriteria` by criterion id
- sort `provenance` by (at, field, source)

## Type Parameters

### T

`T` *extends* [`MindScriptBase`](../interfaces/MindScriptBase.md)\<`Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\<`unknown`\>\>\>

## Parameters

### spec

`T`

## Returns

`T`
