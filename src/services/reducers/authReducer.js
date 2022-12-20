import { CHANGE_LOADING_LOG_IN, LOG_IN, LOG_IN_ERROR } from '../actions/actionTypes'

export const initialState = {
  token: '',
  isLoading: false,
  isAuthenticated: false,
  error: null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, token: action.payload.token, isAuthenticated: true }
    case LOG_IN_ERROR:
      return { ...state, error: action.payload.error }
    case CHANGE_LOADING_LOG_IN:
      return { ...state, isLoading: action.payload.isLoading }
    default:
      return state
  }
}
