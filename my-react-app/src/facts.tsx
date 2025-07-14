import React from 'react';
import { Pokemon, pokemonData } from './data.tsx';
import {usePokemonFacts} from './hook.tsx';

const PokemonFactCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '20px', 
      border: '2px solid #ccc', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>{pokemon.name}</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{pokemon.fact}</p>
    </div>
  );
};

// Component to select and display Pokemon facts
const PokemonFacts: React.FC = () => {
  const {
    selectedPokemon,
    handlePokemonSelect,
    handleShowAll,
    displayedPokemon
  } = usePokemonFacts(pokemonData);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pokemon Facts</h1>
      
      {/* Pokemon Selection Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleShowAll}
          style={{ 
            margin: '5px', 
            padding: '10px 15px', 
            backgroundColor: selectedPokemon === null ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >Show All </button>
        {pokemonData.map((pokemon) => (
          <button
            key={pokemon.id}
            onClick={() => handlePokemonSelect(pokemon)}
            style={{ 
              margin: '5px', 
              padding: '10px 15px', 
              backgroundColor: selectedPokemon?.id === pokemon.id ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          > {pokemon.name} </button>
        ))}
      </div>

      {/* Pokemon Facts Display */}
      <div>
        {displayedPokemon.map((pokemon: Pokemon) => (
          <PokemonFactCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonFacts;
