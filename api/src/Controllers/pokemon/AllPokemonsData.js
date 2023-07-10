//!controladores necesarios
const GetPokemonsByApi = require("./GetPokemonsByApi");
const GetPokemonsByDb = require("./GetPokemonsByDb");

//!funcion

const AllPokemonData = async () => {
  const pokemonApi = await GetPokemonsByApi(50);

  const PokemonsDb = await GetPokemonsByDb();
  const allPokemons =  [...pokemonApi, ...PokemonsDb];
  return allPokemons;
};
module.exports = AllPokemonData;