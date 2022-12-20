import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import LoadingEffect from '../components/LoadingEffect'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  const { login, error, isLoading } = useContext(AuthContext)

  return (
    <div id="LoginPage" className="h-100">
      <div className='login-wrapper'>
        <LoginForm loginCallback={login} />
        {error && (
          <div className='error'>
            { error }
          </div>
        )}
        {isLoading && (
          <LoadingEffect message='Logging in...' />
        )}
      </div>
    </div>
  )
}

export default LoginPage