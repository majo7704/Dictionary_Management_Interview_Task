import { GET_DICTIONARIES, SET_LOADING, DICTIONARIES_ERROR, ADD_DICTIONARY } from './types'

// export const getDictionaries = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/dictionaries')
//     const data = await res.json()

//     dispatch({
//       type: GET_DICTIONARIES,
//       payload: data
//     })
//   }
// }

//REFACTORING get dictionaries from server
export const getDictionaries = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/dictionaries')
    const data = await res.json()

    dispatch({
      type: GET_DICTIONARIES,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: DICTIONARIES_ERROR,
      payload: err.response.data
    })
  } 
}
//Add new log
export const addDictionary = (dictionary) => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/dictionaries', {
      method: 'POST',
      body: JSON.stringify(dictionary),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_DICTIONARY,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: DICTIONARIES_ERROR,
      payload: err.response.data
    })
  }
}

//Set_Loading to truth
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}