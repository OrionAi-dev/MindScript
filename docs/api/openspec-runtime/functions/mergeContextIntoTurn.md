[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / mergeContextIntoTurn

# Function: mergeContextIntoTurn()

> **mergeContextIntoTurn**(`ctx`, `turn`): [`OpenSpecTurn`](../interfaces/OpenSpecTurn.md)

Defined in: [packages/openspec-runtime/dist/index.d.ts:228](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-runtime/dist/index.d.ts#L228)

Merge Context fields into Turn fields (top level), applying precedence per field.
- If a key exists only in Context → include it.
- If in both → resolve via mergeField (deep merge + precedence).

## Parameters

### ctx

[`OpenSpecContext`](../interfaces/OpenSpecContext.md)

### turn

[`OpenSpecTurn`](../interfaces/OpenSpecTurn.md)

## Returns

[`OpenSpecTurn`](../interfaces/OpenSpecTurn.md)
