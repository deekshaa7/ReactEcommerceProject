import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const MiddleNav=()=>{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="about">New</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Renewed</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Color Preference
                </NavDropdown.Item>
              </NavDropdown>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> 
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            
          
          
              <Nav.Link href="#link">Product</Nav.Link>
              <Nav.Link href="#link">Brand</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}
export default MiddleNav;