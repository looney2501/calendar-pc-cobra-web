import './App.scss'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import EventProvider from './context/EventProvider'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import PrivateRoute from './components/PrivateRoute'
import LoginPage from './pages/LoginPage'


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/calendar" element={(
            <PrivateRoute>
              <EventProvider>
                <HomePage/>
              </EventProvider>
            </PrivateRoute>
          )}
          />
          <Route exact path="/" element={<Navigate to={'/calendar'}/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
