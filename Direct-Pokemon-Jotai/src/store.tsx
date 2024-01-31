import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export const searchAtom = atom("");

export const [allPokemon] = atomsWithQuery<Pokemon[]>(() => ({
  queryKey: ["pokemon"],
  queryFn: () => fetch("/pokemon.json").then((res) => res.json()),
}));
