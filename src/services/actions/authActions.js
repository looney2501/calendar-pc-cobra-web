import Axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL;

export const postLogin = (username, password) => {
  return Axios.post(baseUrl + '/login', { username, password })
}
