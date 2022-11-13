import './App.scss'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import EventProvider from './context/EventProvider'


const App = () => {
  return (
    <EventProvider>
      <HomePage />
    </EventProvider>
  )
}

export default App
