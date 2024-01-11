import { PokemonProvider, usePokemon } from "./store";

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-3xl">
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
