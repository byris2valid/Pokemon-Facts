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
    <div style={{ marginBottom: "20px" }}>
      <button
        className={className}
        onClick={handleClick}
      >
        {children}
      </button>

      {showFact && (
        <div
          className="pokemon-fact-display"
          style={{
            padding: "20px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            maxWidth: "500px",
          }}
        >
          <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
            {currentFact}
          </p>
          <button
            onClick={handleClose}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Pokemonbutton;
