import create from "zustand";

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

export const usePokemon = create<{
  pokemon: Pokemon[];
  allPokemon: Pokemon[];
  setPokemon: (pokemon: Pokemon[]) => void;
  search: string;
  setSearch: (search: string) => void;
}>((set) => ({
  pokemon: [],
  allPokemon: [],
  setAllPokemon: (pokemon) => set({ allPokemon: pokemon, pokemon }),
  search: "",
  setSearch: (search) => set({ search }),
}));
