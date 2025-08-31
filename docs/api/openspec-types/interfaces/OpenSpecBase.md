[**@mindscript/openspec-types**](../README.md)

***

[@mindscript/openspec-types](../README.md) / OpenSpecBase

# Interface: OpenSpecBase\<F\>

Defined in: [packages/openspec-types/dist/index.d.ts:79](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L79)

## Extended by

- [`OpenSpecContext`](OpenSpecContext.md)
- [`OpenSpecTurn`](OpenSpecTurn.md)

## Type Parameters

### F

`F` *extends* `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\> = `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\>

## Properties

### acceptanceCriteria

> **acceptanceCriteria**: readonly [`AcceptanceCriterion`](AcceptanceCriterion.md)[]

Defined in: [packages/openspec-types/dist/index.d.ts:84](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L84)

***

### fields

> **fields**: `F`

Defined in: [packages/openspec-types/dist/index.d.ts:83](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L83)

***

### id

> **id**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:81](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L81)

***

### intent

> **intent**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:82](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L82)

***

### kind

> **kind**: `"context"` \| `"turn"`

Defined in: [packages/openspec-types/dist/index.d.ts:80](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L80)

***

### lockedAt

> **lockedAt**: [`ISODateTime`](../type-aliases/ISODateTime.md)

Defined in: [packages/openspec-types/dist/index.d.ts:86](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L86)

***

### meta?

> `optional` **meta**: `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: [packages/openspec-types/dist/index.d.ts:89](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L89)

***

### provenance?

> `optional` **provenance**: readonly [`Provenance`](Provenance.md)[]

Defined in: [packages/openspec-types/dist/index.d.ts:85](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L85)

***

### signature?

> `optional` **signature**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:88](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L88)

***

### version?

> `optional` **version**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:87](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L87)
