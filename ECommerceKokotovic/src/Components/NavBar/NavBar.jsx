import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom"


export const NavBar = () => { 

  return (
    <Navbar collapseOnSelect expand="xl" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">Pizzeria Los Amigos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/categoria/Original'>Original</NavLink>
            <NavLink to='/categoria/Italiana'>Italianas</NavLink>                   
            <NavLink to='/categoria/Sabor del Mes'>Sabor del Mes</NavLink>                   
          </Nav>
          <Nav>
            <NavLink href="#cartWidget">
              <CartWidget/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;