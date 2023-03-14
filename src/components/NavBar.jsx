import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="../src/assets/dice.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}Dice Roll Games
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#catalogo">Catalogo</Nav.Link>
          <Nav.Link href="#oferta">Ofertas</Nav.Link>
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Familiar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Cooperativo
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fiesta</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#cart"><CartWidget /></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar