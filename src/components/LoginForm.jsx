import { useEffect, useState } from 'react'
import "../assets/styles/LoginForm.scss"
import { Navigate, useNavigate } from 'react-router-dom'
import logo from "../assets/img/Cobra.png";


const LoginForm = ({ loginCallback, isAuthenticated }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginButtonClick = () => {
    loginCallback(username, password)
  }

  if (isAuthenticated) {
    return (
      <Navigate to="/calendar" />
    )
  }

  return (
      <>
    <img src={logo} alt='logo' height='150px' />
    <div id="LoginForm" className='d-flex flex-column'>
      <div className="username-wrapper">
        <label>Username:</label>
        <input className='input' type="text" placeholder="username" onChange={handleUsernameInputChange} value={username}/>
      </div>
      <div className="password-wrapper">
        <label>Password:</label>
        <input className='input' type="password" placeholder="password" onChange={handlePasswordInputChange} value={password}/>
      </div>
      <button className="btn btn-login" onClick={handleLoginButtonClick}>Log in</button>
    </div>
      </>
  )
}

export default LoginForm
