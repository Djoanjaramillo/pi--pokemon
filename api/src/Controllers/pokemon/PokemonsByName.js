const { Pokemon, Type, Op } = require("../../db");
const axios = require("axios");
 const GetPokemonsByApi = require("./GetPokemonsByApi");
const GetPokemonsByDb = require("./GetPokemonsByDb");

  const pokemonByName = async (name) => {
   
      const pokemonsApi = await GetPokemonsByApi();
      const pokemonsDb = await GetPokemonsByDb();
      console.log(pokemonsDb)
      const allPokemons =   [...pokemonsApi, ...pokemonsDb];
      const pokemonBuscado = allPokemons.find((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase());
      console.log("pokemonbuscado",pokemonBuscado);
      if(!pokemonBuscado){
        throw new Error("pokemon no encontrado");
      }
      return pokemonBuscado;
    } 

module.exports = pokemonByName;