const { Pokemon, Type } = require("../../db");
const defaultImage = "https://i.postimg.cc/Qdwz52bZ/defaultimage-1.jpg";

const CreatePokemon = async (
  id,

  name,
  image,
  health,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const findedPoke = await Pokemon.findOne({ where: { name: name } });
  if (findedPoke) {
    throw new Error("este pokemon ya existe");
  } else {
    const newpkm = await Pokemon.create({
      id,
      
      name,
      health,
      attack,
      defense,
      height,
      weight,
      speed,
      types,
      image: image ? image : defaultImage,
    });
    const typeDb = await Type.findAll({
      where: {
        name: types,
      },
    });

    await newpkm.addType(typeDb);
    tipo = typeDb.map((elem) => elem.name);
    if (!newpkm || !tipo) {
      throw new Error("no se pudo crear el pokemon");
    }
  }
};

module.exports = CreatePokemon;