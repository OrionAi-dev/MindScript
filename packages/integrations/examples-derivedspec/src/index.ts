import type { DerivedSpec } from "@mindscript/openspec-types";

export const mindscriptDerivedSpec: DerivedSpec = {
  // which base spec we are deriving from
  baseId: "openspec",

  // JSON-Patch operations (as before)
  patches: [
    { op: "add", path: "/fields/mindscript", value: { type: "string", required: false } }
  ],

  // keep runtime validators happy (they expect provenance to exist for DerivedSpec)
  provenance: []
};

export default mindscriptDerivedSpec;
