[**@mindscript/runtime**](../README.md)

***

[@mindscript/runtime](../README.md) / VerifierFn

# Type Alias: VerifierFn()

> **VerifierFn** = (`input`) => `Promise`\<`Omit`\<[`VerifierResult`](../interfaces/VerifierResult.md), `"criterionId"` \| `"verifier"`\>\>

Defined in: packages/mindscript-runtime/dist/index.d.ts:259

## Parameters

### input

#### context?

[`MindScriptContext`](../interfaces/MindScriptContext.md)

#### criterion

[`AcceptanceCriterion`](../interfaces/AcceptanceCriterion.md)

#### env

[`VerifyEnv`](../interfaces/VerifyEnv.md)

#### output

`unknown`

#### turn?

[`MindScriptTurn`](../interfaces/MindScriptTurn.md)

## Returns

`Promise`\<`Omit`\<[`VerifierResult`](../interfaces/VerifierResult.md), `"criterionId"` \| `"verifier"`\>\>
