// src/index.ts
var mindscriptDerivedSpec = {
  // which base spec we are deriving from
  baseId: "openspec",
  // JSON-Patch operations (as before)
  patches: [
    { op: "add", path: "/fields/mindscript", value: { type: "string", required: false } }
  ],
  // keep runtime validators happy (they expect provenance to exist for DerivedSpec)
  provenance: []
};
var index_default = mindscriptDerivedSpec;
export {
  index_default as default,
  mindscriptDerivedSpec
};
//# sourceMappingURL=index.js.map