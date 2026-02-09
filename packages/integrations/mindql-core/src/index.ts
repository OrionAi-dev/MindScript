export type MindQLNode = { kind: "Program"; body: string };
export function parseMindQL(text: string): MindQLNode { return { kind: "Program", body: text.trim() }; }
