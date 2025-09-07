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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  applyPatches: () => applyPatches,
  mergeContextIntoTurn: () => mergeContextIntoTurn,
  registerVerifier: () => registerVerifier,
  verifyOutput: () => verifyOutput,
  zAcceptance: () => zAcceptance,
  zBaseField: () => zBaseField,
  zDerivedSpec: () => zDerivedSpec,
  zFieldScope: () => zFieldScope,
  zISODateTime: () => zISODateTime,
  zJsonPatch: () => zJsonPatch,
  zOpenSpecBase: () => zOpenSpecBase,
  zOpenSpecContext: () => zOpenSpecContext,
  zOpenSpecTurn: () => zOpenSpecTurn,
  zProvenance: () => zProvenance,
  zSpecField: () => zSpecField,
  zToolBinding: () => zToolBinding
});
module.exports = __toCommonJS(index_exports);
__reExport(index_exports, require("@mindscript/openspec-types"), module.exports);

// src/validators.ts
var import_zod = require("zod");
var zFieldScope = import_zod.z.union([
  import_zod.z.object({ kind: import_zod.z.literal("filetype"), value: import_zod.z.string().min(1) }),
  import_zod.z.object({ kind: import_zod.z.literal("project"), id: import_zod.z.string().min(1) }),
  import_zod.z.object({ kind: import_zod.z.literal("intent"), value: import_zod.z.string().min(1) }),
  import_zod.z.object({ kind: import_zod.z.literal("global") })
]);
var zAcceptance = import_zod.z.object({
  id: import_zod.z.string().min(1),
  description: import_zod.z.string().min(1),
  verifier: import_zod.z.string().min(1),
  params: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional()
});
var zBaseField = import_zod.z.object({
  type: import_zod.z.enum(["string", "number", "boolean", "enum", "object", "array", "any"]),
  value: import_zod.z.unknown().optional(),
  required: import_zod.z.boolean().optional(),
  min: import_zod.z.number().optional(),
  max: import_zod.z.number().optional(),
  enum: import_zod.z.array(import_zod.z.unknown()).optional(),
  pattern: import_zod.z.string().optional(),
  many: import_zod.z.boolean().optional(),
  noneAllowed: import_zod.z.boolean().optional(),
  default: import_zod.z.unknown().optional(),
  description: import_zod.z.string().optional(),
  source: import_zod.z.enum(["user", "context", "default", "memory", "model"]).optional(),
  confidence: import_zod.z.number().min(0).max(1).optional(),
  rationale: import_zod.z.string().optional(),
  scope: zFieldScope.optional(),
  ext: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional()
});
var zSpecField = import_zod.z.lazy(
  () => zBaseField.extend({
    // object fields may have nested properties
    properties: import_zod.z.record(import_zod.z.string(), import_zod.z.lazy(() => zSpecField)).optional(),
    // array fields may specify an item schema
    items: import_zod.z.lazy(() => zSpecField).optional()
  })
);
var zProvenance = import_zod.z.object({
  field: import_zod.z.string().min(1),
  source: import_zod.z.enum(["user", "context", "default", "memory", "model"]),
  rationale: import_zod.z.string().optional()
});
var zISODateTime = import_zod.z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z?/, "ISO datetime expected");
var zOpenSpecBase = import_zod.z.object({
  kind: import_zod.z.enum(["context", "turn"]),
  id: import_zod.z.string().min(1),
  intent: import_zod.z.string().min(1),
  fields: import_zod.z.record(import_zod.z.string(), zSpecField),
  acceptanceCriteria: import_zod.z.array(zAcceptance).default([]),
  provenance: import_zod.z.array(zProvenance).optional(),
  lockedAt: zISODateTime,
  version: import_zod.z.string().optional(),
  signature: import_zod.z.string().optional(),
  meta: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional()
});
var zOpenSpecContext = zOpenSpecBase.extend({
  kind: import_zod.z.literal("context"),
  scope: import_zod.z.object({
    type: import_zod.z.enum(["session", "project", "workspace", "global"]),
    id: import_zod.z.string().optional()
  }),
  lifespan: import_zod.z.object({
    mode: import_zod.z.enum(["session", "rolling", "pinned"]),
    ttlDays: import_zod.z.number().optional(),
    maxUses: import_zod.z.number().optional()
  })
});
var zOpenSpecTurn = zOpenSpecBase.extend({
  kind: import_zod.z.literal("turn"),
  inheritsFrom: import_zod.z.string().min(1)
});
var zJsonPatch = import_zod.z.object({
  op: import_zod.z.enum(["add", "replace", "remove"]),
  path: import_zod.z.string().min(1),
  value: import_zod.z.unknown().optional()
});
var zDerivedSpec = import_zod.z.object({
  baseId: import_zod.z.string().min(1),
  patches: import_zod.z.array(zJsonPatch),
  provenance: import_zod.z.array(zProvenance)
});
var zToolBinding = import_zod.z.object({
  intent: import_zod.z.string().min(1),
  tool: import_zod.z.string().min(1),
  paramMap: import_zod.z.record(import_zod.z.string(), import_zod.z.string())
});

// src/merge.ts
var PRECEDENCE_SCORE = {
  user: 6,
  "turn-explicit": 6,
  // alias (not used directly)
  context: 5,
  memory: 4,
  preference: 4,
  // alias
  default: 3,
  model: 2,
  undefined: 1
};
function prec(source) {
  if (!source) return PRECEDENCE_SCORE.undefined;
  return PRECEDENCE_SCORE[source] != null ? PRECEDENCE_SCORE[source] : PRECEDENCE_SCORE.model;
}
function isObjectField(f) {
  return !!f && f.type === "object";
}
function isArrayField(f) {
  return !!f && f.type === "array";
}
function mergeField(a, b) {
  if (!a && !b) return void 0;
  if (!a) return b;
  if (!b) return a;
  var pa = prec(a.source);
  var pb = prec(b.source);
  var winner = pb >= pa ? b : a;
  var loser = pb >= pa ? a : b;
  if (winner.type !== loser.type) return winner;
  if (winner.type === "string" || winner.type === "number" || winner.type === "boolean" || winner.type === "enum" || winner.type === "any") {
    return winner;
  }
  if (isObjectField(winner) && isObjectField(loser)) {
    var wProps = winner.properties || {};
    var lProps = loser.properties || {};
    var mergedProps = {};
    var seen = /* @__PURE__ */ Object.create(null);
    var k;
    for (k in wProps) {
      seen[k] = true;
    }
    for (k in lProps) {
      seen[k] = true;
    }
    for (k in seen) {
      mergedProps[k] = mergeField(lProps[k], wProps[k]);
    }
    return {
      ...winner,
      properties: mergedProps
    };
  }
  if (isArrayField(winner) && isArrayField(loser)) {
    var mergeStrategy = winner.ext && typeof winner.ext["mergeStrategy"] === "string" ? String(winner.ext["mergeStrategy"]) : "union";
    if (mergeStrategy === "replace") {
      return winner;
    }
    var wArr = Array.isArray(winner.value) ? winner.value : Array.isArray(winner.default) ? winner.default : void 0;
    var lArr = Array.isArray(loser.value) ? loser.value : Array.isArray(loser.default) ? loser.default : void 0;
    if (wArr && lArr) {
      var union = [];
      var seenKeys = /* @__PURE__ */ Object.create(null);
      var i, item, key;
      for (i = 0; i < lArr.length; i++) {
        item = lArr[i];
        key = safeKey(item);
        if (!seenKeys[key]) {
          seenKeys[key] = true;
          union.push(item);
        }
      }
      for (i = 0; i < wArr.length; i++) {
        item = wArr[i];
        key = safeKey(item);
        if (!seenKeys[key]) {
          seenKeys[key] = true;
          union.push(item);
        }
      }
      var usesValue = Array.isArray(winner.value);
      return {
        ...winner,
        ...usesValue ? { value: union } : { default: union }
      };
    }
    return winner;
  }
  return winner;
}
function safeKey(v) {
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}
function mergeContextIntoTurn(ctx, turn) {
  var merged = {};
  var seen = /* @__PURE__ */ Object.create(null);
  var k;
  for (k in ctx.fields) {
    seen[k] = true;
  }
  for (k in turn.fields) {
    seen[k] = true;
  }
  for (k in seen) {
    merged[k] = mergeField(ctx.fields[k], turn.fields[k]);
  }
  return { ...turn, fields: merged };
}
function applyPatches(fields, patches) {
  var out = { ...fields };
  for (var i = 0; i < patches.length; i++) {
    var p = patches[i];
    var path = (p.path || "").replace(/^\//, "");
    var key = path.indexOf("fields/") === 0 ? path.slice("fields/".length) : path;
    if (!key) continue;
    if (p.op === "remove") {
      delete out[key];
    } else if (p.op === "add" || p.op === "replace") {
      if (p.value) {
        out[key] = p.value;
      }
    }
  }
  return out;
}

// src/verify.ts
var registry = /* @__PURE__ */ Object.create(null);
function registerVerifier(id, fn) {
  registry[id] = fn;
}
function verifyOutput(output, criteria) {
  var results = [];
  for (var i = 0; i < criteria.length; i++) {
    var c = criteria[i];
    var verifier = registry[c.verifier];
    if (!verifier) {
      results.push({
        pass: false,
        details: 'No verifier registered for "' + c.verifier + '"'
      });
      continue;
    }
    try {
      var res = verifier(output, c.params);
      if (res && typeof res === "object" && typeof res.then === "function") {
        results.push({
          pass: false,
          details: 'Verifier "' + c.verifier + '" returned a thenable, but async verifiers are not supported in this ES5 build.'
        });
      } else {
        results.push(res);
      }
    } catch (err) {
      results.push({
        pass: false,
        details: 'Verifier "' + c.verifier + '" threw: ' + (err && err.message ? err.message : String(err))
      });
    }
  }
  return results;
}
registerVerifier("tool_success", function(output) {
  if (output && typeof output === "object" && "status" in output) {
    return { pass: output.status === "ok" };
  }
  return { pass: false, details: "No status field" };
});
registerVerifier("latency_under", function(output, params) {
  var max = params && typeof params["max"] === "number" ? params["max"] : void 0;
  if (typeof max !== "number") {
    return { pass: false, details: "Missing numeric param: max" };
  }
  if (output && typeof output === "object" && "latencyMs" in output) {
    return { pass: output.latencyMs <= max, details: "latencyMs=" + String(output.latencyMs) };
  }
  return { pass: false, details: "No latencyMs field" };
});
registerVerifier("count_between", function(output, params) {
  var arr = Array.isArray(output) ? output : [];
  var min = params && typeof params["min"] === "number" ? params["min"] : -Infinity;
  var max = params && typeof params["max"] === "number" ? params["max"] : Infinity;
  var ok = arr.length >= min && arr.length <= max;
  return { pass: ok, details: "length=" + arr.length + ", min=" + String(min) + ", max=" + String(max) };
});
registerVerifier("contains_fields", function(output, params) {
  var fields = params && Array.isArray(params["fields"]) ? params["fields"] : [];
  if (!fields.length) return { pass: false, details: "params.fields is required" };
  var arr = Array.isArray(output) ? output : [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!item || typeof item !== "object") {
      return { pass: false, details: "Item at index " + i + " is not an object" };
    }
    for (var j = 0; j < fields.length; j++) {
      var f = fields[j];
      if (!(f in item)) {
        return { pass: false, details: 'Missing field "' + f + '" at index ' + i };
      }
    }
  }
  return { pass: true, details: "All items contain: " + fields.join(", ") };
});
registerVerifier("sorted_by", function(output, params) {
  var arr = Array.isArray(output) ? output : [];
  var field = params && typeof params["field"] === "string" ? params["field"] : "";
  var order = params && params["order"] === "desc" ? "desc" : "asc";
  if (!field) return { pass: false, details: "params.field is required" };
  if (arr.length <= 1) return { pass: true, details: "\u22641 item is trivially sorted" };
  for (var i = 1; i < arr.length; i++) {
    var prev = arr[i - 1] && typeof arr[i - 1] === "object" ? arr[i - 1][field] : void 0;
    var curr = arr[i] && typeof arr[i] === "object" ? arr[i][field] : void 0;
    if (prev === void 0 || curr === void 0) {
      return { pass: false, details: 'Missing field "' + field + '" at index ' + (i - 1) + " or " + i };
    }
    var cmp = prev < curr ? -1 : prev > curr ? 1 : 0;
    var ok = order === "asc" ? cmp <= 0 : cmp >= 0;
    if (!ok) {
      return {
        pass: false,
        details: "Order violation at index " + i + ": " + String(prev) + " -> " + String(curr) + " (" + order + ")"
      };
    }
  }
  return { pass: true, details: 'Sorted by "' + field + '" (' + order + ")." };
});
registerVerifier("unique_by", function(output, params) {
  var arr = Array.isArray(output) ? output : [];
  var field = params && typeof params["field"] === "string" ? params["field"] : "";
  if (!field) return { pass: false, details: "params.field is required" };
  var seen = /* @__PURE__ */ Object.create(null);
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i] && typeof arr[i] === "object" ? arr[i][field] : void 0;
    var key = JSON.stringify(item);
    if (seen[key]) {
      return { pass: false, details: "Duplicate at index " + i + ' for field "' + field + '"' };
    }
    seen[key] = true;
  }
  return { pass: true, details: 'Unique by "' + field + '".' };
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applyPatches,
  mergeContextIntoTurn,
  registerVerifier,
  verifyOutput,
  zAcceptance,
  zBaseField,
  zDerivedSpec,
  zFieldScope,
  zISODateTime,
  zJsonPatch,
  zOpenSpecBase,
  zOpenSpecContext,
  zOpenSpecTurn,
  zProvenance,
  zSpecField,
  zToolBinding,
  ...require("@mindscript/openspec-types")
});
