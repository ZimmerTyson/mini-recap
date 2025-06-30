async function getPokemon(pokemonName) {
  try {
    if (typeof pokemonName !== "string" || !pokemonName) {
      throw new Error("Error");
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if(!response.ok) throw new Error(response.status);
      const pokemon = await response.JSON()
      console.log(pokemon);
      const name = pokemon.name;
      const height = pokemon.height;
      const weight = pokemon.weight;
      const image = pokemon.sprites.front_default;

      const types = pokemon.types.map((element) => element.type.name);
      const sound = Object.entries(pokemon.cries).map(([key, val]) => {
        return {
          soundType:key,
          sound:val,
        };
      });

    }
  } catch {

  }
}