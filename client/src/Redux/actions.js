
import {GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL, CLEAN_CHARACTERS, GET_BY_NAME, GET_TYPES, FILTER_BY_SOURCE
, FILTER_BY_TYPES ,CREATE_CHARACTER, ORDER_BY_NAME, ORDER_BY_ATTACK,  SEARCH_BY_ID, DELETE_CHARACTER } from './action-Types';
 import axios from 'axios';

 export const getCharacters = () => {
     return async function(dispatch) {

            let response = await axios ('http://localhost:3001/pokemons/');
            if (response.length === 0)throw new Error("no hay pokemons");

            const pokemons = response.data.map((pokemon) => {

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.image,
                    health: pokemon.health,
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
              
      
     }
 }
 
 export const getCharacterDetail = (id) => {
     return function(dispatch){
        axios(`http://localhost:3001/pokemons/${id}`).then((response) =>
      dispatch({
        type: CHARACTER_DETAIL,
        payload:response.data
        }))
        .catch((error) => {
            console.error("errorDetail",error);
        })
     } 
 }

export const getByName = (name) => {
    return async function(dispatch) {
       try {
           const  pokemonByName = await axios ( `http://localhost:3001/pokemons/?name=${name}`);
           if (pokemonByName.data.length === 0)throw new Error("no existe pokemon");
             return dispatch({
                 type:GET_BY_NAME, 
                 payload: pokemonByName.data
             });
       } catch (error) {
           console.error(error);
       }
     
    }
}
export const getById = (id) => {
    return async function (dispatch) {
      const ById = await axios.get(`http://localhost:3001/pokemons/?id=${id}`);
      return dispatch({ 
        type: SEARCH_BY_ID, 
        payload: ById.data });
    };
  };
export const getTypes = () => {
    return async function (dispatch) {
      const apiData = await axios.get("http://localhost:3001/types");
      const types = apiData.data;
      dispatch({ 
        type: GET_TYPES,
         payload: types });
    };
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
    }
    //!ACCIONES DE FILTRO
     export const filterSource = (payload) => {
        return {
          type: FILTER_BY_SOURCE,
          payload,
        }
    }
    export const filterType = (types) => {
      return {
        type: FILTER_BY_TYPES,
         payload: types };
    };
    
   //!crear
   export const createCharacter = (newCharacter) => {
    return async function (dispatch) {
      const response = await axios.post(`http://localhost:3001/pokemons/`,newCharacter);
      console.log(Object.keys(response));
      return dispatch({ 
        type: CREATE_CHARACTER, 
        payload: response.data });
    };
  };
 export const deleteCharacter = (deletecharacter) => {
  return  async function (dispatch) {
    const response = await axios.delete(`http://localhost:3001/pokemons/delete/${deletecharacter}`);
    return dispatch({
      type: DELETE_CHARACTER,
    payload: response.data
      
    })
    
  }
   
 }

          //!acciones de order
          export const orderByName = (payload) => {
            return {
              type: ORDER_BY_NAME,
              payload,
            };
        }
            export const orderByAttack = (payload) => {
                return {
                  type: ORDER_BY_ATTACK,
                  payload,
                };
              };

    
        
 
 
 