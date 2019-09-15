import { GET_DICTIONARIES, SET_LOADING, DICTIONARIES_ERROR, ADD_DICTIONARY, DELETE_DICTIONARY, UPDATE_DICTIONARY, SEARCH_DICTIONARIES, SET_CURRENT, CLEAR_CURRENT } from './types'

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
      payload: err.response.statusText
    })
  } 
}
//Add new dictionary
export const addDictionary = dictionary => async dispatch => {
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
      payload: err.response.statusText
    })
  }
}
// DELETE dictionary from server
export const deleteDictionary = (id) => async dispatch => {
  try {
    setLoading();
    await fetch(`/dictionaries/${id}`,{
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_DICTIONARY,
      payload: id
    })

  } catch (err) {
    dispatch({
      type: DICTIONARIES_ERROR,
      payload: err.response.statusText
    })
  }
}
//Update dictionary on server
export const updateDictionary = dictionary => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/dictionaries/${dictionary.id}`, {
      method: 'PUT',
      body: JSON.stringify(dictionary),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json()

    dispatch({
      type: UPDATE_DICTIONARY,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: DICTIONARIES_ERROR,
      payload: err.response.statusText
    })
  }
}
//Search dictionaries from server
export const searchDictionaries = (text) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/dictionaries?q=${text}`)
    const data = await res.json()

    dispatch({
      type: SEARCH_DICTIONARIES,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: DICTIONARIES_ERROR,
      payload: err.response.statusText
    })
  }
}


//Set current dictionary
export const setCurrent = dictionary => {
  return {
    type: SET_CURRENT,
    payload: dictionary
  }
}
//Clear current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}
//Set_Loading to truth
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}