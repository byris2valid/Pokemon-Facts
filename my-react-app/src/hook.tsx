import { useState, useEffect } from 'react';
import { Pokemon } from './data.tsx';

export function usePokemonFacts(pokemonData: Pokemon[]) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [displayedPokemon, setDisplayedPokemon] = useState<Pokemon[]>([]);

  // Initialize displayedPokemon when pokemonData changes
  useEffect(() => {
    setDisplayedPokemon(pokemonData);
  }, [pokemonData]);

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setDisplayedPokemon([pokemon]);
  };

  const handleShowAll = () => {
    setSelectedPokemon(null);
    setDisplayedPokemon(pokemonData);
  };

  return {
    selectedPokemon,
    displayedPokemon,
    handlePokemonSelect,
    handleShowAll,
  };
}
