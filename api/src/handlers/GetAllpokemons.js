
const pokemonsByName = require("../Controllers/pokemon/PokemonsByName");
const GetPokemonsByApi = require("../Controllers/pokemon/GetPokemonsByApi");
const GetPokemonsByDb = require("../Controllers/pokemon/GetPokemonsByDb");

const GetAllPokemons = async (req, res) => {
  let { name } = req.query;
  try {
    if (name) {
      // Si se proporciona un nombre, buscamos el Pokémon por nombre
      let pokemonName = await pokemonsByName(name);
      if (!pokemonName) {
        // Si no se encontró el Pokémon, retornamos un mensaje de error
        return res.status(404).json({ error: "Pokemon no encontrado" });
      } else {
        // Si se encontró el Pokémon, lo enviamos como respuesta
        return res.status(200).json(pokemonName);
      }
      
    }

    // Si no se proporciona un nombre, obtenemos todos los Pokémon de la API y la base de datos
    const pokemonsApi = await GetPokemonsByApi();
    const pokemonsDb = await GetPokemonsByDb();
    const allPokemons = [...pokemonsApi, ...pokemonsDb];

    // Enviamos la lista completa de Pokémon como respuesta
    res.status(200).json(allPokemons);
  } catch (error) {
    // Si ocurre un error, enviamos un mensaje de error con el código de estado 400
    res.status(400).json({ error: error.message });
  }
};



module.exports = GetAllPokemons;