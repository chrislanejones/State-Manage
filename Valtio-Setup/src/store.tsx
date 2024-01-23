import { proxy } from "valtio";
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

export const search = proxy({
  query: "",
});

export const allPokemon = proxy({
  pokemon: [] as Pokemon[],
});

fetch("/pokemon.json")
  .then((res) => res.json())
  .then((pokemon) => {
    allPokemon.pokemon = pokemon;
  });
