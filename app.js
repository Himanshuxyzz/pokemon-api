//first we have to fetch pokemons through pokemon api  in this case we use fetch() which is bulit in function in javascript

const pokedex = document.getElementById('pokedex');
console.log(pokedex)
const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 9; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((result) => {
    const pokemon = result.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(","),
    }));
    console.log(pokemon);
    displayPokemon(pokemon)
  });
  //   .then((data) => {
  //     console.log(data);
  //     const pokemon = {
  //       name: data.name,
  //       id: data.id,
  //       image: data.sprites["front_default"],
  //       type: data.types.map((type) => type.type.name).join(","),
  //     };

  //   pokemon["name"] = data.name;
  //   pokemon["id"] = data.id;
  //   pokemon["image"] = data.sprites["front_default"];

  //   pokemon['type'] = ''
  //   data.types.forEach((type) => {
  //     pokemon["type"] = `${pokemon["type"]}, ${type.type.name}`;
  //  }

  //   pokemon["type"] = data.types.map((type) => type.type.name).join(",");
};
fetchPokemon();

const displayPokemon = (pokemon) => {
  // console.log(pokemon);
 const pokemonHtml = pokemon.map(poke => 
  `<li class="card">
    <img class="card-image" src="${poke.image}">
    <h2 class="card-title">${poke.id}.${poke.name}</h2>
    <p class="card-subtitle">Type-${poke.type}</p>
    </li>
  `).join("")
  pokedex.innerHTML = pokemonHtml;
};
