import { useState, useCallback } from "react";
import { usePokemonFacts } from "./hook.tsx";
import { pokemonData } from "./data.tsx";

const Pokemonbutton = ({ onClick, children, className = "pokemon-button" }: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string; 
}) => {
  const [currentFact, setCurrentFact] = useState<string>("");
  const [showFact, setShowFact] = useState<boolean>(false);
  
  
  const fact = usePokemonFacts(pokemonData);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentFact(fact.selectedPokemon?.fact || "");
    setShowFact(true);

    if (onClick) {
      onClick(e);
    }
  }, [fact, onClick]);

  const handleClose = useCallback(() => {
    setShowFact(false);
  }, []);

  return (
    <div>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
      {showFact && (
        <div className="pokemon-fact-display">
          <p>{currentFact}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Pokemonbutton;
