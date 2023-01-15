import { Nav, Navbar, Container } from 'react-bootstrap'
import '../assets/styles/Header.scss'
import { useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export function Header({ calendarStyle, changeCalendarStyle }) {
  const { logout } = useContext(AuthContext)

  const handleChangeStyle = () => {
    calendarStyle === 'calendar' ? changeCalendarStyle('map') : changeCalendarStyle('calendar')
  }

  const oppositeCalendarStyle = calendarStyle === 'calendar' ? 'map' : 'calendar'

  return (
    <Navbar className="header">
      <Container className="header-container">
        <Navbar.Brand className="brand" href="#home">Cobra Calendar</Navbar.Brand>
        <Nav>
          <button className="btn btn-map" onClick={handleChangeStyle}>{`View ${oppositeCalendarStyle}`}</button>
          <button className="btn btn-logout" onClick={logout}>Log out</button>
        </Nav>
      </Container>
    </Navbar>
  )
}
