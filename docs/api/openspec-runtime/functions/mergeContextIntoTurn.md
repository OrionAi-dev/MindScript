[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / mergeContextIntoTurn

# Function: mergeContextIntoTurn()

> **mergeContextIntoTurn**(`ctx`, `turn`): [`MindScriptTurn`](../interfaces/MindScriptTurn.md)

Defined in: [packages/openspec-runtime/dist/index.d.ts:548](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-runtime/dist/index.d.ts#L548)

Merge Context fields into Turn fields (top level), applying precedence per field.
- If a key exists only in Context → include it.
- If in both → resolve via mergeField (deep merge + precedence).

## Parameters

### ctx

[`MindScriptContext`](../interfaces/MindScriptContext.md)

### turn

[`MindScriptTurn`](../interfaces/MindScriptTurn.md)

## Returns

[`MindScriptTurn`](../interfaces/MindScriptTurn.md)
