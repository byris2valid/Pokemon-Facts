import { useState } from 'react';
import { Pokemon } from './data.tsx';

export const UsePokemonFacts = (pokemonData: Pokemon[]) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };
  const handleShowAll = () => {
    setSelectedPokemon(null);
  };

  const displayedPokemon = selectedPokemon ? [selectedPokemon] : pokemonData;
  return {
    selectedPokemon,
    handlePokemonSelect,
    handleShowAll,
    displayedPokemon
  };
};