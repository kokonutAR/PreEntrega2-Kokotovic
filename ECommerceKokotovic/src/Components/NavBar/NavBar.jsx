import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom"


export const NavBar = () => { 

  return (
    <Navbar collapseOnSelect expand="xl" bg="success" variant="dark">
      <Container>
        <Navbar.Brand className='btn btn-danger' href="/">Pizzeria Los Amigos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/category/Original' className={ ({isActive}) => isActive ? 'btn btn-danger' : 'btn btn-outline-succes'}>Original</NavLink>
            <NavLink to='/category/Italiana' className={ ({isActive}) => isActive ? 'btn btn-danger' : 'btn btn-outline-succes'}>Italianas</NavLink>                   
            <NavLink to='/category/Sabor del Mes' className={ ({isActive}) => isActive ? 'btn btn-danger' : 'btn btn-outline-succes'}>Sabor del Mes</NavLink>                  
          </Nav>
          <Nav>
            <NavLink className='btn btn-danger' href="#cartWidget" to='/cart'>
              <CartWidget/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;