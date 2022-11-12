import { Nav, Navbar, Container } from "react-bootstrap";
import "../assets/styles/Header.scss";

export function Header() {
  return (
    <>
      <Navbar className="header">
        <Container className="header-container">
          <Navbar.Brand className="brand" href="#home">Cobra Calendar</Navbar.Brand>
          <Nav>
            <button className="btn btn-map">View map</button>
            <button className="btn btn-logout">Log out</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
