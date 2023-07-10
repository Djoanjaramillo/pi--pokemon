const { Pokemon } = require("../../db");

let DeletePokemon = async (id) => {
  let toDelete = await Pokemon.findOne({ where: { id: id } });
  if (!toDelete) {
    throw new Error("Pokemon no encontrado");
  }
  await toDelete.destroy();
  return `Pokemon ${toDelete.name} se elimino exitosamente`;
};

module.exports = DeletePokemon;