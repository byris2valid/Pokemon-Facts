import { useState, useCallback } from "react";
import { usePokemonFacts } from "./hook.tsx";
import { pokemonData } from "./data.tsx";

const Pokemonbutton = ({
  onClick,
  children,
  className = "pokemon-button",
  pokemonId,
}: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  pokemonId: number;
}) => {
  const [currentFact, setCurrentFact] = useState<string>("");
  const [showFact, setShowFact] = useState<boolean>(false);

  const fact = usePokemonFacts(pokemonData);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    fact.selectPokemonById(pokemonId);

    setTimeout(() => {
      const factText = fact.selectedPokemon?.fact || "No fact available";
      setCurrentFact(factText);
      setShowFact(true);
    }, 0);

    if (onClick) {
      onClick(e);
    }
  }, [fact, pokemonId, onClick]);

  const handleClose = () => setShowFact(false);

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
