# Pokémon Facts
A fun and interactive React + TypeScript app that lets you explore interesting facts about your favorite Pokémon!

 ## Features
  Browse a list of Pokémon

  Click on a Pokémon to see unique facts

  Random fact generator functionality
 
  Clean and simple UI

  Type-safe with TypeScript

  ## Tech Stack
React – UI Library

TypeScript – Type-safe JavaScript

Tailwind CSS – Utility-first CSS framework

Custom Hooks – For managing Pokémon logic

## usePokemonFacts Hook 

### Features

Stores and manages the state of the currently selected Pokémon.

Provides a way to select a Pokémon by its id.

Returns either the full list of Pokémon or the selected one.

## PokemonButton Component

### Features

Selects a Pokémon by id using the usePokemonFacts hook.

Displays a fun fact about the selected Pokémon.

Includes a close button to hide the fact.

Optional click handler for extended functionality.

Styled with default inline styles and customizable via className.

## PokemonFacts

### Features 

Shows all Pokémon facts by default.

Filter facts by selecting a specific Pokémon.

Highlights the active Pokémon selection.

Reusable PokemonFactCard component with clean styling.

Uses TypeScript for type safety.

## Images Component

### Features 

Two rows of legendary and fan-favorite Pokémon.

Clicking an image triggers the Pokemonbutton to show a fun fact.

Uses the custom hook usePokemonFacts to manage fact state.

Modular and reusable design.

Clean layout and easy to extend with more Pokémon.



