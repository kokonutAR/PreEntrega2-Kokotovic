import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


export const NavBar = () => { 

  return (
    <Navbar collapseOnSelect expand="xl" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">Pizzeria Los Amigos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/category/Original' className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Original</Nav.Link>
            <Nav.Link to='/category/Italiana' className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Italianas</Nav.Link>                   
            <Nav.Link to='/category/Sabor del Mes' className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Sabor del Mes</Nav.Link>                   
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#cartWidget">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;