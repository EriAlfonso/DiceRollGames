import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
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
          <Nav.Link as={Link} to="/">Catalogo</Nav.Link>
          <Nav.Link as={Link} to="/">Ofertas</Nav.Link>
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={`/category/${"familiar"}`} >Familiar</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/${"cooperativo"}`}>
              Cooperativo
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/${"fiesta"}`}>Fiesta</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar