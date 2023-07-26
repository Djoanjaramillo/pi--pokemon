const { Router } = require("express");
const pokemonRouter = Router();

//! HANDLERS
const getPokemonById = require("../handlers/getPokemonById");
const GetAllpokemons = require("../handlers/GetAllpokemons");

const createNewPokemon = require("../handlers/createNewPokemon");
const deleteMyPokemon = require("../handlers/deleteMyPokemon");
const updateMyPokemon = require("../handlers/updateMyPokemon");

//!MIDDLEWARE
const validateCreate = require("../Middlewares/ValidateCreate");
//!RUTAS

pokemonRouter.get("/", GetAllpokemons);

pokemonRouter.get("/:id", getPokemonById);

pokemonRouter.post("/", validateCreate, createNewPokemon);

pokemonRouter.delete("/delete/:id", deleteMyPokemon);

pokemonRouter.put("/update", updateMyPokemon);

module.exports = pokemonRouter;