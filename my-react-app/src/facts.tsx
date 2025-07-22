import React from 'react';
import { Pokemon, pokemonData } from './data.tsx';
import { usePokemonFacts } from './hook.tsx';

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

const PokemonFacts: React.FC = () => {
  const {
    selectedPokemon,
    displayedPokemon,
    selectPokemonById,
    setSelectedPokemon
  } = usePokemonFacts(pokemonData);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pokemon Facts</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setSelectedPokemon(null)}
          style={{ 
            margin: '5px', 
            padding: '10px 15px', 
            backgroundColor: selectedPokemon === null ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Show All
        </button>
        
        {pokemonData.map((pokemon) => (
          <button
            key={pokemon.id}
            onClick={() => selectPokemonById(pokemon.id)}
            style={{ 
              margin: '5px', 
              padding: '10px 15px', 
              backgroundColor: selectedPokemon?.id === pokemon.id ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {pokemon.name}
          </button>
        ))}
      </div>

      <div>
        {displayedPokemon.map((pokemon) => (
          <PokemonFactCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonFacts;
