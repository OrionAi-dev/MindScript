// src/index.ts
function parseMindQL(text) {
  return { kind: "Program", body: text.trim() };
}
export {
  parseMindQL
};
