import { Nav, Navbar, Container } from "react-bootstrap";
import "../assets/styles/Header.scss";

export function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Cobra Calendar</Navbar.Brand>
          <div className="spacer"></div>
          <Nav className="me-auto">
            <Nav.Link href="#map">View map</Nav.Link>
            <Nav.Link href="#logOut">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
