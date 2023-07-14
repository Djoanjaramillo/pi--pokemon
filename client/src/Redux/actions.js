 import {GET_CHARACTERS, CHARACTER_DETAIL,CLEAN_DETAIL, CLEAN_CHARACTERS} from './action-Types';
 import axios from 'axios';

 export const getCharacters = () => {
     return async function(dispatch) {
        try {
            let response = await axios ('http://localhost:3001/pokemons');
            console.log(response.data);
            if (response.lenght === 0)throw new Error("no hay pokemons");

            const pokemons = response.data.map((pokemon) => {

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.image,
                    life: pokemon.life,
                    attack: pokemon.attack,
                    defense: pokemon.defense,
                    speed: pokemon.speed,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    types: pokemon.types
                }
            })
              return dispatch({
                  type: GET_CHARACTERS, 
                  payload: pokemons
              });
        } catch (error) {
            console.error(error);
        }
      
     }
 }

 export const getCharacterDetail = (id) => {
     return function(dispatch){
        axios(`http://localhost:3001/pokemons/${id}`).then((response) =>
      dispatch({
        type: CHARACTER_DETAIL,
        payload: response.data.data
        }))
     }
 }

 export const cleanDetail = () => {
     return {
         type: CLEAN_DETAIL
     }
 }
 export const cleanCharacters = () => {
     return {
         type: CLEAN_CHARACTERS
     }
 };
 
 