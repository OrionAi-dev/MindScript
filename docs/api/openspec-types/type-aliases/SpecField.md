[**@mindscript/openspec-types**](../README.md)

***

[@mindscript/openspec-types](../README.md) / SpecField

# Type Alias: SpecField\<T\>

> **SpecField**\<`T`\> = [`BaseField`](../interfaces/BaseField.md)\<`T`\> & \{ `default?`: `string`; `type`: `"string"`; `value?`: `string`; \} \| \{ `default?`: `number`; `type`: `"number"`; `value?`: `number`; \} \| \{ `default?`: `boolean`; `type`: `"boolean"`; `value?`: `boolean`; \} \| \{ `default?`: `T`; `enum`: readonly `T`[]; `type`: `"enum"`; `value?`: `T`; \} \| \{ `properties?`: `Record`\<`string`, `SpecField`\>; `type`: `"object"`; \} \| \{ `items?`: `SpecField`; `type`: `"array"`; \} \| \{ `type`: `"any"`; \}

Defined in: [packages/openspec-types/dist/index.d.ts:42](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-types/dist/index.d.ts#L42)

## Type Parameters

### T

`T` = `unknown`
