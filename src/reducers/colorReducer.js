import { GET_COLORS, ADD_COLOR, DELETE_COLOR, SET_LOADING, COLORS_ERROR } from '../actions/types'


const initialState = {
  colors: null,
  loading: false,
  isDuplicate: false, //check if key already exists
  isChains: false, //check if value of key:value pair ...
  isCircle: false, //...I want to add already exists as key
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}