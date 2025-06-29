async function getPokemon(pokemonName) {
  try {
    if (typeof pokemonName !== "string" || !pokemonName) {
      throw new Error("Error");
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
    }
  } catch {

  }
}