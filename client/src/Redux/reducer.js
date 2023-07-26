import {
  GET_CHARACTERS,
  CHARACTER_DETAIL,
  CLEAN_DETAIL,
  CLEAN_CHARACTERS,
  GET_BY_NAME,
  FILTER_BY_SOURCE,
  FILTER_BY_TYPES,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
 
  SEARCH_BY_ID,
  SEARCH_BY_NAME,
  GET_TYPES,
  CREATE_CHARACTER,
  DELETE_CHARACTER
} from './action-Types';

const initialState = {
  characters: [],
  types: [],
  characterDetail: {},
  cleanDetail: {},
  allPokemonsFilter: [],
  doubleFilter: [],
  modificarPokemon: [],
  filteredtype: [],
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allPokemonsFilter: action.payload,
        doubleFilter: [],
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    case CREATE_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case FILTER_BY_SOURCE:
      const vacio = state.filteredtype.length;
      let filteredPokemons;
      if (vacio === 0) {
        console.log("No hay nada en double, vamos a aplicar el primer filtro");
        if (action.payload === "ALL") {
          filteredPokemons = state.allPokemonsFilter;
        } else if (action.payload === "API") {
          filteredPokemons =  [...state.allPokemonsFilter].filter(
            (poke) => !isNaN(poke.id)
          );
        } else if (action.payload === "DB") {
          filteredPokemons =  [...state.allPokemonsFilter].filter((poke) =>
            isNaN(poke.id)
          );
        }
        return {
          ...state,
          characters: filteredPokemons,
          doubleFilter: filteredPokemons,
        };
      } else {
        console.log(
          "Ya tiene el primer filtro de type, asique arreglamos source"
        );
        if (action.payload === "ALL") {
          filteredPokemons = state.filteredtype;
        } else if (action.payload === "API") {
          filteredPokemons = state.filteredtype.filter(
            (poke) => !isNaN(poke.id)
          );
        } else if (action.payload === "DB") {
          filteredPokemons = state.filteredtype.filter((poke) =>
            isNaN(poke.id)
          );
        }
        return {
          ...state,
          characters: filteredPokemons,
        };
      }
    case FILTER_BY_TYPES:
      let filteredTypePokemons;
      if (state.doubleFilter.length > 0) {
        console.log("tiene algo en el double asique vamos a combinar");
        if (action.payload === "ALL") {
          filteredTypePokemons = state.doubleFilter;
        } else {
          filteredTypePokemons = state.doubleFilter.filter((poke) =>
            poke.types.includes(action.payload)
          );
        }

        return {
          ...state,
          characters: filteredTypePokemons,
          filteredtype: filteredTypePokemons,
        };
      } else {
        console.log(
          "no hay nada en el double, asique vamos a aplicar solo type"
        );
        if (action.payload === "ALL") {
          filteredTypePokemons = state.allPokemonsFilter;
        } else {
          filteredTypePokemons = state.allPokemonsFilter.filter((poke) =>
            poke.types.includes(action.payload)
          );
        }


        return {
          ...state,
          characters: filteredTypePokemons,
          filteredtype: filteredTypePokemons,
        };
      }
      //!DELETE
      case DELETE_CHARACTER:
        return {
          ...state,
          characters: state.characters
      
        }
    case SEARCH_BY_NAME:
      return {
        ...state,
        characters: action.payload,
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
      };
    case CLEAN_CHARACTERS:
      return {
        ...state,
        characters: [],
      };
    case GET_BY_NAME:
      return {
        ...state,
        characters: [action.payload],
      };
    case ORDER_BY_NAME:
      let orderName;
      action.payload === "asc"
        ? (orderName = state.allPokemonsFilter.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        }))
        : (orderName = state.characters.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }));
      return {
        ...state,
        characters: [...orderName],
      };
    case ORDER_BY_ATTACK:
      let orderAttack;
      action.payload === "asc"
        ? (orderAttack = state.allPokemonsFilter.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        }))
        : (orderAttack = state.characters.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        }));
      return {
        ...state,
        characters: [...orderAttack],
      };
   
    default:
      return state;
  }
};

export default reducer;