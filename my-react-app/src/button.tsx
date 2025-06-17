import { useState } from "react";
import { UsePokemonFacts } from "./hook.tsx";
import { pokemonData } from "./data.tsx";


const Pokemonbutton = ({onClick, children, className = "pokemon-button" }: { onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void, children: React.ReactNode, className?: string }) => {
  const [currentFact, setCurrentFact] = useState("");
  const [showFact, setShowFact] = useState(false);
  const getRandomFact = () => {
    return UsePokemonFacts(pokemonData);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const fact = getRandomFact();
    setCurrentFact(fact.toString());
    setShowFact(true);
    
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
      {showFact && (
        <div className="pokemon-fact-display">
          <p>{currentFact}</p>
          <button onClick={() => setShowFact(false)}>Close</button>
        </div>
      )}
    </div>
  );
};export default Pokemonbutton;
