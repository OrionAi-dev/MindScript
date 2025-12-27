// src/index.ts
function mindscriptPlugin(_opts = {}) {
  return function derive(_ctx, _turn) {
    return {
      id: "mindscript",
      name: "MindScript Plugin",
      version: "0.1.0",
      fields: [],
      acceptance: [],
      toolBindings: []
    };
  };
}
export {
  mindscriptPlugin as default
};
//# sourceMappingURL=index.js.map