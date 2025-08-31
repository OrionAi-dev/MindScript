// src/index.ts
import { parse, print } from "graphql";
function normalizeMindGraphQL(sdl) {
  return print(parse(sdl));
}
export {
  normalizeMindGraphQL
};
