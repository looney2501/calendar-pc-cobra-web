import { useState } from 'react'
import "../assets/styles/LoginForm.scss"
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ loginCallback }) => {
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
    navigate('/calendar')
  }

  return (
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
  )
}

export default LoginForm
