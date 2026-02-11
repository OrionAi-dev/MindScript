import { parse, print } from "graphql";
export function normalizeMindGraphQL(sdl: string): string { return print(parse(sdl)); }
