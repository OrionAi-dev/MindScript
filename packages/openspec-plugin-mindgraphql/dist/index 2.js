// @ts-nocheck

// src/index.ts
import { normalizeMindGraphQL } from "@mindscript/mindgraphql-core";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
function mindgraphql() {
  return {
    name: "mindgraphql",
    handles: [".mindgql"],
    async generate(file, ctx) {
      const sdl = normalizeMindGraphQL(file.text);
      const schemaPath = join(ctx.outDir, "graphql", "schema.graphql");
      mkdirSync(dirname(schemaPath), { recursive: true });
      writeFileSync(schemaPath, sdl);
      return { artifacts: [schemaPath] };
    }
  };
}
export {
  mindgraphql as default
};
