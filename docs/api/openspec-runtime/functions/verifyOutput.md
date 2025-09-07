[**@mindscript/openspec-runtime**](../README.md)

***

[@mindscript/openspec-runtime](../README.md) / verifyOutput

# Function: verifyOutput()

> **verifyOutput**(`output`, `criteria`): [`VerifierResult`](../interfaces/VerifierResult.md)[]

Defined in: [packages/openspec-runtime/dist/index.d.ts:580](https://github.com/OrionAi-dev/MindScript/blob/772014c2a83cedf14ab87c8e634202e2d32c1b02/packages/openspec-runtime/dist/index.d.ts#L580)

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
