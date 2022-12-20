import { initialState, reducer } from '../services/reducers/authReducer'
import React, { useCallback, useReducer } from 'react'
import {
  CHANGE_LOADING_LOG_IN,
  LOG_IN,
  LOG_IN_ERROR, LOG_OUT
} from '../services/actions/actionTypes'
import { postLogin } from '../services/actions/authActions'

export const AuthContext = React.createContext(initialState)

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(reducer, initialState)

  const loginCallback = async (username, password) => {
    try {
      dispatch({ type: CHANGE_LOADING_LOG_IN, payload: { isLoading: true } })
      const response = await postLogin(username, password)
      const token = response.data['username']
      dispatch({ type: LOG_IN, payload: { token }})
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        if (error.response.data === 'Invalid credentials!') {
          dispatch({ type: LOG_IN_ERROR, payload: { error: 'Invalid credentials!' } })
        }
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    } finally {
      dispatch({ type: CHANGE_LOADING_LOG_IN, payload: { isLoading: false } })
    }
  }

  const logoutCallback = () => {
    dispatch({ type: LOG_OUT })
  }

  const login = useCallback(loginCallback, [])
  const logout = useCallback(logoutCallback, [])

  const value = { ...authState, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
