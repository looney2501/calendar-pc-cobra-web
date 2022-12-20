import { Nav, Navbar, Container } from 'react-bootstrap'
import '../assets/styles/Header.scss'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export function Header() {
  const { logout } = useContext(AuthContext)

  return (
    <Navbar className="header">
      <Container className="header-container">
        <Navbar.Brand className="brand" href="#home">Cobra Calendar</Navbar.Brand>
        <Nav>
          <button className="btn btn-map">View map</button>
          <button className="btn btn-logout" onClick={logout}>Log out</button>
        </Nav>
      </Container>
    </Navbar>
  )
}
