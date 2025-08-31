[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / OpenSpecContext

# Interface: OpenSpecContext\<F\>

Defined in: [packages/openspec-types/dist/index.d.ts:91](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L91)

## Extends

- [`OpenSpecBase`](OpenSpecBase.md)\<`F`\>

## Type Parameters

### F

`F` *extends* `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\> = `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\>

## Properties

### acceptanceCriteria

> **acceptanceCriteria**: readonly [`AcceptanceCriterion`](AcceptanceCriterion.md)[]

Defined in: [packages/openspec-types/dist/index.d.ts:84](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L84)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`acceptanceCriteria`](OpenSpecBase.md#acceptancecriteria)

***

### fields

> **fields**: `F`

Defined in: [packages/openspec-types/dist/index.d.ts:83](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L83)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`fields`](OpenSpecBase.md#fields)

***

### id

> **id**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:81](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L81)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`id`](OpenSpecBase.md#id)

***

### intent

> **intent**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:82](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L82)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`intent`](OpenSpecBase.md#intent)

***

### kind

> **kind**: `"context"`

Defined in: [packages/openspec-types/dist/index.d.ts:92](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L92)

#### Overrides

[`OpenSpecBase`](OpenSpecBase.md).[`kind`](OpenSpecBase.md#kind)

***

### lifespan

> **lifespan**: `object`

Defined in: [packages/openspec-types/dist/index.d.ts:97](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L97)

#### maxUses?

> `optional` **maxUses**: `number`

#### mode

> **mode**: `"session"` \| `"rolling"` \| `"pinned"`

#### ttlDays?

> `optional` **ttlDays**: `number`

***

### lockedAt

> **lockedAt**: [`ISODateTime`](../type-aliases/ISODateTime.md)

Defined in: [packages/openspec-types/dist/index.d.ts:86](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L86)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`lockedAt`](OpenSpecBase.md#lockedat)

***

### meta?

> `optional` **meta**: `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: [packages/openspec-types/dist/index.d.ts:89](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L89)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`meta`](OpenSpecBase.md#meta)

***

### provenance?

> `optional` **provenance**: readonly [`Provenance`](Provenance.md)[]

Defined in: [packages/openspec-types/dist/index.d.ts:85](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L85)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`provenance`](OpenSpecBase.md#provenance)

***

### scope

> **scope**: `object`

Defined in: [packages/openspec-types/dist/index.d.ts:93](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L93)

#### id?

> `optional` **id**: `string`

#### type

> **type**: `"project"` \| `"global"` \| `"session"` \| `"workspace"`

***

### signature?

> `optional` **signature**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:88](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L88)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`signature`](OpenSpecBase.md#signature)

***

### version?

> `optional` **version**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:87](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L87)

#### Inherited from

[`OpenSpecBase`](OpenSpecBase.md).[`version`](OpenSpecBase.md#version)
