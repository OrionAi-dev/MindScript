type MindQLNode = {
    kind: "Program";
    body: string;
};
declare function parseMindQL(text: string): MindQLNode;

export { type MindQLNode, parseMindQL };
