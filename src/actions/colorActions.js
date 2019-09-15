import { GET_COLORS, ADD_COLOR, DELETE_COLOR, SET_LOADING, COLORS_ERROR } from './types'

//GET colors from server
export const getColors = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/colors')
    const data = await res.json()

    dispatch({
      type: GET_COLORS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: COLORS_ERROR,
      payload: err.response.statusText
    })
  }
}
// Add color to server (range and domain)
export const addColor = (color) => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/colors', {
      method: 'POST',
      body: JSON.stringify(color),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    const data = await res.json()

    dispatch({
      type: ADD_COLOR,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: COLORS_ERROR,
      payload: err.response.statusText
    })
  }
}
//Delete color
export const deleteColor = (id) => async dispatch => {
  try {
    setLoading();
    await fetch(`/colors/${id}`, {
      method: 'DELETE'
    })
    

    dispatch({
      type: DELETE_COLOR,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: COLORS_ERROR,
      payload: err.response.statusText
    })
  }
}

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}