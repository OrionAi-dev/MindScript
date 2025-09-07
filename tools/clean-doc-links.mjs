#!/usr/bin/env node
// tools/clean-doc-links.mjs
import fs from "node:fs/promises";
import path from "node:path";

const WRITE = process.argv.includes("--write");
const repoRoot = process.cwd();
const docsDir = path.join(repoRoot, "docs");

async function lsMarkdown(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await lsMarkdown(full)));
    else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) out.push(full);
  }
  return out;
}
function rel(fromAbs, toAbs) {
  return path.relative(path.dirname(fromAbs), toAbs).replace(/\\/g, "/");
}

const target = {
  contextTurn: path.join(docsDir, "mindscript", "context-turn.md"),
};

function rewrite(fileAbs, content) {
  let txt = content;

  // 1) Any variant of ".../spec-bdd-context-turn.md" -> relative path to mindscript/context-turn.md
  txt = txt.replace(
    /\((?:\.{1,2}\/)*spec-bdd-context-turn\.md\)/gi,
    () => `(${rel(fileAbs, target.contextTurn)})`
  );

  // 2) Legacy "openspi/<page>.md" -> "mindscript/<page>.md"
  txt = txt.replace(
    /\((?:\.{0,2}\/)*openspi\/([a-z0-9\-]+)\.md\)/gi,
    (_m, page) => `(${rel(fileAbs, path.join(docsDir, "mindscript", `${page}.md`))})`
  );

  // 3) Legacy "openspec/<page>.md" -> "mindscript/<page>.md" (seen in spec-bdd-openspec-core.md)
  txt = txt.replace(
    /\((?:\.{0,2}\/)*openspec\/([a-z0-9\-]+)\.md\)/gi,
    (_m, page) => `(${rel(fileAbs, path.join(docsDir, "mindscript", `${page}.md`))})`
  );

  // 4) API landing links on Home page -> .../README.md
  if (path.basename(fileAbs) === "index.md") {
    txt = txt.replace(
      /\bapi\/(openspec-types|openspec-runtime|mindql-core|mindgraphql-core|openspec-plugin-mindql|openspec-plugin-mindgraphql)\b(?!\/README\.md)/g,
      "api/$1/README.md"
    );
  }

  // 5) Normalize any accidental "(./docs/...)" to "(...)" just in case
  txt = txt.replace(/\((?:\.\/)*docs\//g, "(");

  return txt;
}

const files = await lsMarkdown(docsDir);
let changed = 0;

for (const f of files) {
  const before = await fs.readFile(f, "utf8");
  const after = rewrite(f, before);
  if (after !== before) {
    if (WRITE) {
      await fs.writeFile(f, after, "utf8");
      console.log(`fixed ${path.relative(docsDir, f)}`);
    } else {
      console.log(`would fix ${path.relative(docsDir, f)}`);
    }
    changed++;
  }
}

console.log(`${changed} file(s) ${WRITE ? "updated" : "would be updated"}`);
