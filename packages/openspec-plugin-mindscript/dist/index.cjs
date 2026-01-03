"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  mindscriptDerivedSpec: () => mindscriptDerivedSpec
});
module.exports = __toCommonJS(index_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mindscriptDerivedSpec
});
//# sourceMappingURL=index.cjs.map