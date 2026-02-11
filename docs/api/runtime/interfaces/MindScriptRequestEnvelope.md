[**@mindscript/runtime**](../README.md)

***

[@mindscript/runtime](../README.md) / MindScriptRequestEnvelope

# Interface: MindScriptRequestEnvelope\<TContext, TTurn, TInput\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:124

## Type Parameters

### TContext

`TContext` *extends* [`MindScriptContext`](MindScriptContext.md) = [`MindScriptContext`](MindScriptContext.md)

### TTurn

`TTurn` *extends* [`MindScriptTurn`](MindScriptTurn.md) = [`MindScriptTurn`](MindScriptTurn.md)

### TInput

`TInput` *extends* [`JsonObject`](JsonObject.md) \| [`JsonValue`](../type-aliases/JsonValue.md) = [`JsonObject`](JsonObject.md)

## Properties

### context

> **context**: `TContext`

Defined in: packages/mindscript-runtime/dist/index.d.ts:125

***

### input?

> `optional` **input**: `TInput`

Defined in: packages/mindscript-runtime/dist/index.d.ts:127

***

### meta?

> `optional` **meta**: `Record`\<`string`, [`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:129

***

### requestId?

> `optional` **requestId**: `string`

Defined in: packages/mindscript-runtime/dist/index.d.ts:128

***

### turn

> **turn**: `TTurn`

Defined in: packages/mindscript-runtime/dist/index.d.ts:126
