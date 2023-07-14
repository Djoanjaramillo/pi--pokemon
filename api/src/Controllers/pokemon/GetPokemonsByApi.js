const axios = require("axios");
const API = "https://pokeapi.co/api/v2/pokemon/?limit=50";
const GetPokemonsByApi = async (limit) => {
  const resultApi = await axios.get(API);

  const allPokemons = resultApi.data.results;

  const Pokemons = allPokemons.map(async (pokemon) => {
    const url = await axios.get(pokemon.url);
     delete pokemon.url
     return {
     id : url.data.id,
     name: url.data.name,
     height : url.data.height,
    weight : url.data.weight,
    health : url.data.stats[0].base_stat,
    attack : url.data.stats[1].base_stat,
    defense : url.data.stats[2].base_stat,
    speed : url.data.stats[5].base_stat,
    types : url.data.types.map((pkmtype) => pkmtype.type.name),
    image : url.data.sprites.other["official-artwork"].front_default,
    createdInDb : false
    }
  });
  return await Promise.all(Pokemons);
};

module.exports = GetPokemonsByApi;