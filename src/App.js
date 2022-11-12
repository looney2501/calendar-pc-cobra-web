import './App.scss'
import Calendar from './components/Calendar'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header'


const App = () => {
  return (
    <>
      <Header />
      <div className="w-50" style={{ height: '100vh' }}>
        <Calendar />
      </div>
    </>
  )
}

export default App
