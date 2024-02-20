const pokemonImagen = document.getElementById("random-image");
const randomPokemon = Math.floor(Math.random() * 151) + 1;
const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`;

fetch(apiUrl)
  .then((petiPoke) => petiPoke.json())
  .then(data => {
    const imageUrl = data.sprites.front_default;
    pokemonImagen.src = imageUrl;
  })

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png