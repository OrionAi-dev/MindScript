[**@mindscript/runtime**](../README.md)

***

[@mindscript/runtime](../README.md) / verifyOutput

# Function: verifyOutput()

> **verifyOutput**(`input`): `Promise`\<[`VerificationReport`](../interfaces/VerificationReport.md)\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:267

## Parameters

### input

#### context?

[`MindScriptContext`](../interfaces/MindScriptContext.md)\<`Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\<`unknown`\>\>\>

#### criteria

readonly [`AcceptanceCriterion`](../interfaces/AcceptanceCriterion.md)[]

#### env?

[`VerifyEnv`](../interfaces/VerifyEnv.md)

#### output

`unknown`

#### turn?

[`MindScriptTurn`](../interfaces/MindScriptTurn.md)\<`Record`\<`string`, [`SpecField`](../type-aliases/SpecField.md)\<`unknown`\>\>\>

## Returns

`Promise`\<[`VerificationReport`](../interfaces/VerificationReport.md)\>
