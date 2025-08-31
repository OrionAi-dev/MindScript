// @ts-nocheck

// src/index.ts
import { parseMindQL } from "@mindscript/mindql-core";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
function mindql() {
  return {
    name: "mindql",
    handles: [".mindql"],
    async generate(file, ctx) {
      const ast = parseMindQL(file.text);
      const outPath = join(ctx.outDir, "mindql", "ast.json");
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, JSON.stringify(ast, null, 2));
      return { artifacts: [outPath] };
    }
  };
}
export {
  mindql as default
};
