[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / MindScriptContext

# Interface: MindScriptContext\<F\>

Defined in: [packages/openspec-types/dist/index.d.ts:91](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L91)

## Extends

- [`MindScriptBase`](MindScriptBase.md)\<`F`\>

## Type Parameters

### F

`F` *extends* `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\> = `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\>

## Properties

### acceptanceCriteria

> **acceptanceCriteria**: readonly [`AcceptanceCriterion`](AcceptanceCriterion.md)[]

Defined in: [packages/openspec-types/dist/index.d.ts:84](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L84)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`acceptanceCriteria`](MindScriptBase.md#acceptancecriteria)

***

### fields

> **fields**: `F`

Defined in: [packages/openspec-types/dist/index.d.ts:83](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L83)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`fields`](MindScriptBase.md#fields)

***

### id

> **id**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:81](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L81)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`id`](MindScriptBase.md#id)

***

### intent

> **intent**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:82](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L82)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`intent`](MindScriptBase.md#intent)

***

### kind

> **kind**: `"context"`

Defined in: [packages/openspec-types/dist/index.d.ts:92](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L92)

#### Overrides

[`MindScriptBase`](MindScriptBase.md).[`kind`](MindScriptBase.md#kind)

***

### lifespan

> **lifespan**: `object`

Defined in: [packages/openspec-types/dist/index.d.ts:97](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L97)

#### maxUses?

> `optional` **maxUses**: `number`

#### mode

> **mode**: `"session"` \| `"rolling"` \| `"pinned"`

#### ttlDays?

> `optional` **ttlDays**: `number`

***

### lockedAt

> **lockedAt**: [`ISODateTime`](../type-aliases/ISODateTime.md)

Defined in: [packages/openspec-types/dist/index.d.ts:86](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L86)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`lockedAt`](MindScriptBase.md#lockedat)

***

### meta?

> `optional` **meta**: `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: [packages/openspec-types/dist/index.d.ts:89](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L89)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`meta`](MindScriptBase.md#meta)

***

### provenance?

> `optional` **provenance**: readonly [`Provenance`](Provenance.md)[]

Defined in: [packages/openspec-types/dist/index.d.ts:85](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L85)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`provenance`](MindScriptBase.md#provenance)

***

### scope

> **scope**: `object`

Defined in: [packages/openspec-types/dist/index.d.ts:93](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L93)

#### id?

> `optional` **id**: `string`

#### type

> **type**: `"project"` \| `"global"` \| `"session"` \| `"workspace"`

***

### signature?

> `optional` **signature**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:88](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L88)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`signature`](MindScriptBase.md#signature)

***

### version?

> `optional` **version**: `string`

Defined in: [packages/openspec-types/dist/index.d.ts:87](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L87)

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`version`](MindScriptBase.md#version)
