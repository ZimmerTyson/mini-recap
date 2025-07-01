async function getPokemon(pokemonName) {
  try {
    if (typeof pokemonName !== "string" || !pokemonName) 
      throw new Error("messed up");
    
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );

      if(!response.ok) throw new Error(response.status);
      const pokemon = await response.json()
      console.log(pokemon);

      const name = pokemon.name;
      const height = pokemon.height;
      const weight = pokemon.weight;
      const image = pokemon.sprites.front_default;

      const types = pokemon.types.map((element) => element.type.name);
      const sounds = Object.entries(pokemon.cries).map(([key, val]) => {
        return {
          soundType:key,
          sound:val,
        };
      });

      const card = document.createElement("div");
      card.classList.add("pokemon-card");

      const img = document.createElement("img");
      img.src = image;

      card.appendChild(img);

      const pokemonInfo = document.createElement("p");
      pokemonInfo.style.margin = "5px";
      pokemonInfo.style.fontSize = "12px";

      pokemonInfo.innerHTML = `${name} </br> ${height*.1}m/ </br> ${weight}oz </br> ${types}`;

      card.appendChild(pokemonInfo);

      const soundContainer = document.createElement("div");

      for (let i = 0; i < sounds.length; i++) {
        const button = document.createElement("button");
        button.classList.add("soundBtns");
        button.textContent = sounds[i].soundType;
        button.addEventListener("click", () => {
          const cry = new Audio(sounds[i].sound);
          cry.play();
        });
        soundContainer.appendChild(button);
      }
      
  

    card.appendChild(soundContainer);
    document.getElementById("output").appendChild(card);
  } catch (error) {
    const errorString = error.toString();
    console.log("errorString =", errorString);
    if(errorString === "Error: parameter invalid.."){
      const newPokemon = prompt("Please enter a pokemon name:");
      getPokemon(newPokemon);
    }
    if(errorString === "error 404") {
      const newPokemon = prompt("pokemon not found..");
      getPokemon(newPokemon);
    }
  }
}

document.getElementById("searchButton").addEventListener("click", function() {
    const name = document.getElementById("searchPokemon").value.trim();
    getPokemon(name);
  })