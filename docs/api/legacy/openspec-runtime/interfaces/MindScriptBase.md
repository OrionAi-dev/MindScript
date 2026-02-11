[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / MindScriptBase

# Interface: MindScriptBase\<F\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:94

## Extended by

- [`MindScriptContext`](MindScriptContext.md)
- [`MindScriptTurn`](MindScriptTurn.md)

## Type Parameters

### F

`F` *extends* `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\> = `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\>

## Properties

### acceptanceCriteria

> **acceptanceCriteria**: [`AcceptanceCriteria`](../type-aliases/AcceptanceCriteria.md)

Defined in: packages/mindscript-runtime/dist/index.d.ts:99

***

### fields

> **fields**: `F`

Defined in: packages/mindscript-runtime/dist/index.d.ts:98

***

### id

> **id**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:96

***

### intent

> **intent**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:97

***

### kind

> **kind**: `"context"` \| `"turn"`

Defined in: packages/mindscript-runtime/dist/index.d.ts:95

***

### lockedAt

> **lockedAt**: [`ISODateTime`](../type-aliases/ISODateTime.md)

Defined in: packages/mindscript-runtime/dist/index.d.ts:101

***

### meta?

> `optional` **meta**: `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:104

***

### provenance?

> `optional` **provenance**: [`Provenance`](../type-aliases/Provenance.md)

Defined in: packages/mindscript-runtime/dist/index.d.ts:100

***

### signature?

> `optional` **signature**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:103

***

### version?

> `optional` **version**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:102
