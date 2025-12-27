import type { OpenSpecContext, OpenSpecTurn, DerivedSpec } from "@mindscript/openspec-types";

export type MindscriptPluginOptions = {
  name?: string;
};

export default function mindscriptPlugin(_opts: MindscriptPluginOptions = {}) {
  return function derive(_ctx: OpenSpecContext, _turn: OpenSpecTurn): DerivedSpec {
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
