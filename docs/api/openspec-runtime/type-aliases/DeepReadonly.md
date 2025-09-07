[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / DeepReadonly

# Type Alias: DeepReadonly\<T\>

> **DeepReadonly**\<`T`\> = `{ readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }`

Defined in: [packages/openspec-types/dist/index.d.ts:125](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-types/dist/index.d.ts#L125)

## Type Parameters

### T

`T`
