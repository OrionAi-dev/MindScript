[**@mindscript/runtime**](../README.md)

***

[@mindscript/runtime](../README.md) / MindScriptContext

# Interface: MindScriptContext\<F\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:106

## Extends

- [`MindScriptBase`](MindScriptBase.md)\<`F`\>

## Type Parameters

### F

`F` *extends* `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\> = `Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\>

## Properties

### acceptanceCriteria

> **acceptanceCriteria**: [`AcceptanceCriteria`](../type-aliases/AcceptanceCriteria.md)

Defined in: packages/mindscript-runtime/dist/index.d.ts:99

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`acceptanceCriteria`](MindScriptBase.md#acceptancecriteria)

***

### fields

> **fields**: `F`

Defined in: packages/mindscript-runtime/dist/index.d.ts:98

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`fields`](MindScriptBase.md#fields)

***

### id

> **id**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:96

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`id`](MindScriptBase.md#id)

***

### intent

> **intent**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:97

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`intent`](MindScriptBase.md#intent)

***

### kind

> **kind**: `"context"`

Defined in: packages/mindscript-runtime/dist/index.d.ts:107

#### Overrides

[`MindScriptBase`](MindScriptBase.md).[`kind`](MindScriptBase.md#kind)

***

### lifespan

> **lifespan**: `object`

Defined in: packages/mindscript-runtime/dist/index.d.ts:112

#### maxUses?

> `optional` **maxUses**: `number`

#### mode

> **mode**: `"session"` \| `"rolling"` \| `"pinned"`

#### ttlDays?

> `optional` **ttlDays**: `number`

***

### lockedAt

> **lockedAt**: [`ISODateTime`](../type-aliases/ISODateTime.md)

Defined in: packages/mindscript-runtime/dist/index.d.ts:101

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`lockedAt`](MindScriptBase.md#lockedat)

***

### meta?

> `optional` **meta**: `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:104

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`meta`](MindScriptBase.md#meta)

***

### provenance?

> `optional` **provenance**: [`Provenance`](../type-aliases/Provenance.md)

Defined in: packages/mindscript-runtime/dist/index.d.ts:100

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`provenance`](MindScriptBase.md#provenance)

***

### scope

> **scope**: `object`

Defined in: packages/mindscript-runtime/dist/index.d.ts:108

#### id?

> `optional` **id**: `string`

#### type

> **type**: `"project"` \| `"global"` \| `"session"` \| `"workspace"`

***

### signature?

> `optional` **signature**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:103

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`signature`](MindScriptBase.md#signature)

***

### version?

> `optional` **version**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:102

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`version`](MindScriptBase.md#version)
