async function getPokemon (pokemonName) {
  try {
    if(typeof pokemonName !== "string" || !pokemonName) {
      throw new Error ("Messed up");
    }
  } catch {

  }
}