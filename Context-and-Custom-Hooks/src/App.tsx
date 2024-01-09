import { usePokemonSource, PokemonContext, usePokemon } from "./store";

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
    <PokemonContext.Provider value={usePokemonSource()}>
      <PokemonList />;
    </PokemonContext.Provider>
  );
}

export default App;
