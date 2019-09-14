import { GET_DICTIONARIES, SET_LOADING, DICTIONARIES_ERROR, ADD_DICTIONARY } from '../actions/types'

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
        loading:false
      }
    case ADD_DICTIONARY:
      return {
        ...state,
        dictionary: [...state.dictionaries, action.payload],
        loading: false
      }
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