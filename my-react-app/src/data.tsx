


export interface Pokemon {
  id: number;
  name: string;
  fact: string;
  type: { Water: string; Fire: string; Grass: string; };
}

export const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: "Mewtwo",
    fact: "Mewtwo is a Pokémon that was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
    type: { Water: "", Fire: "", Grass: "" }
  },
  {
    id: 2,
    name: "Charizard",
    fact: "Charizard is a Fire/Flying type Pokemon that evolves from Charmeleon.",
    type: { Water: "", Fire: "", Grass: "" }
  }
];