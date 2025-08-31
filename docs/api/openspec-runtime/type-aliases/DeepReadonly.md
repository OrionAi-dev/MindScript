[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / DeepReadonly

# Type Alias: DeepReadonly\<T\>

> **DeepReadonly**\<`T`\> = `{ readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }`

Defined in: [packages/openspec-types/dist/index.d.ts:125](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L125)

## Type Parameters

### T

`T`
