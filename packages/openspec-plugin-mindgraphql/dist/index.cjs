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
  default: () => mindgraphql
});
module.exports = __toCommonJS(index_exports);
var import_mindgraphql_core = require("@mindscript/mindgraphql-core");
var import_node_fs = require("fs");
var import_node_path = require("path");
function mindgraphql() {
  return {
    name: "mindgraphql",
    handles: [".mindgql"],
    async generate(file, ctx) {
      const sdl = (0, import_mindgraphql_core.normalizeMindGraphQL)(file.text);
      const schemaPath = (0, import_node_path.join)(ctx.outDir, "graphql", "schema.graphql");
      (0, import_node_fs.mkdirSync)((0, import_node_path.dirname)(schemaPath), { recursive: true });
      (0, import_node_fs.writeFileSync)(schemaPath, sdl);
      return { artifacts: [schemaPath] };
    }
  };
}
