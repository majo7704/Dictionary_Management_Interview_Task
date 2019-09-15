import { GET_DICTIONARIES, SET_LOADING, DICTIONARIES_ERROR, ADD_DICTIONARY, DELETE_DICTIONARY, UPDATE_DICTIONARY, SEARCH_DICTIONARIES, SET_CURRENT, CLEAR_CURRENT  } from '../actions/types'

const initialState = {
  dictionaries: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DICTIONARIES:
      return {
        ...state,
        dictionaries: action.payload,
        loading: false
      };
    case ADD_DICTIONARY:
      return {
        ...state,
        dictionaries: [...state.dictionaries, action.payload],
        loading: false
      };
    case DELETE_DICTIONARY:
      return {
        ...state,
        dictionaries: state.dictionaries.filter(dictionary => dictionary.id !== action.payload), loading: false
      };
    case UPDATE_DICTIONARY:
      return {
        ...state,
        dictionaries: state.dictionaries.map(dictionary => dictionary.id === action.payload.id ? action.payload : dictionary)
      }
    case SEARCH_DICTIONARIES:
      return {
        ...state,
        dictionaries: action.payload //res from server
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case DICTIONARIES_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}