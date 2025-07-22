import { useState} from "react";
import { Pokemon } from "./data.tsx";

export function usePokemonFacts(pokemonData: Pokemon[]) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const selectPokemonById = (id: number) => {
    const found = pokemonData.find(p => p.id === id);
    if (found) setSelectedPokemon(found);
  };

  const displayedPokemon = selectedPokemon ? [selectedPokemon] : pokemonData;

  return {
    selectedPokemon,
    displayedPokemon,
    selectPokemonById,
    setSelectedPokemon, // <- Add this so the component can reset
  };
}
