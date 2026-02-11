[**@mindscript/openspec-types**](../README.md)

***

[@mindscript/openspec-types](../README.md) / MindScriptTurn

# Interface: MindScriptTurn\<F\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:118

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

### inheritsFrom

> **inheritsFrom**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:120

***

### intent

> **intent**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:97

#### Inherited from

[`MindScriptBase`](MindScriptBase.md).[`intent`](MindScriptBase.md#intent)

***

### kind

> **kind**: `"turn"`

Defined in: packages/mindscript-runtime/dist/index.d.ts:119

#### Overrides

[`MindScriptBase`](MindScriptBase.md).[`kind`](MindScriptBase.md#kind)

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
