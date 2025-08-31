[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / verifyOutput

# Function: verifyOutput()

> **verifyOutput**(`output`, `criteria`): [`VerifierResult`](../interfaces/VerifierResult.md)[]

Defined in: [packages/openspec-runtime/dist/index.d.ts:260](https://github.com/OrionAi-dev/OpenSpec/blob/dbe3b1ed23423a8f783ae3f4c96dd1618ccf38a6/packages/openspec-runtime/dist/index.d.ts#L260)

Run all acceptance criteria against an output (sync).
If a verifier returns something that looks like a Promise/thenable,
we mark it unsupported in this ES5 build.

## Parameters

### output

`unknown`

### criteria

[`AcceptanceCriterion`](../interfaces/AcceptanceCriterion.md)[]

## Returns

[`VerifierResult`](../interfaces/VerifierResult.md)[]
