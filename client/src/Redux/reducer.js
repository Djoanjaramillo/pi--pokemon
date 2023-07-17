import {GET_CHARACTERS, CHARACTER_DETAIL,CLEAN_DETAIL, CLEAN_CHARACTERS} from './action-Types';

const initialState = {
    characters: [],
    characterDetail: {},
    cleanDetail: {},
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return { 
                ...state,
                characters: action.payload
            }
            case CHARACTER_DETAIL:
                return {
                  ...state,
                  characterDetail: action.payload
                }
              
                case CLEAN_DETAIL:
                    return {
                        ...state,
                        characterDetail: {}
                    }
                    case CLEAN_CHARACTERS:
                        return {
                            ...state,
                            characters: []
                        }
                        default: return {...state};
    }
};
 export default reducer;