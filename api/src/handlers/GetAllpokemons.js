
const AllPokemonsData = require ("../Controllers/pokemon/AllPokemonsData");
async function GetAllpokemons(req, res) {
    try {
const allPokemons = await AllPokemonsData();
return res.status(200).json(allPokemons);

    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }

};
 module.exports = GetAllpokemons;
