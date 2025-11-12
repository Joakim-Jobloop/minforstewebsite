const pokemonArea = document.getElementById("pokemonsArea");

async function getPokemons() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000"
    );
    const pokeData = await response.json();

    const urls = pokeData.results.map((pokemon) => pokemon.url);
    //   console.log(urls);
    const fetchAllUrls = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    const deeperData = await Promise.all(fetchAllUrls);
    console.log(deeperData);
    return deeperData;
  } catch (error) {
    console.log("Error:", error);
  }
}

// const data = await getPokemons();

const data = await getPokemons();
pokemonArea.innerHTML = data
  .map((pokemon) => {
    return `
<div class="pokemon-card">
<h2>${pokemon.name}</h2>
      <div class="poke-image">
         <img src="${pokemon.sprites.front_default}"/>
      </div>
       <div class="poke-types"> 
          ${pokemon.types
            .map((allTypes) => `<p>${allTypes.type.name}</p>`)
            .join(" ")}
       </div>
    </div>
    `;
  })
  .join(" ");

// const data = await getPokemons();

// pokemonArea.innerHTML = data.map((pokemon) => {
// return `
// <div class="pokemon-card">
// <h2>${pokemon.name}</h2>
//       <div class="poke-image">
//          <img src="${pokemon.sprites.front_default}"/>
//       </div>
//     </div>
//     `;
// });

// console.log(data);
