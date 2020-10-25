import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from '../../assets/logo.png';


function Navb() {
  return (
    <div id="navDiv">
    <Navbar bg="dark" variant="dark" expand="lg" id="NavB">
      <Navbar.Brand >
        <img id="logo"
        className="img-fluid" 
        src={logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar">
        <Nav className="mr-auto">
          <Nav.Link className='nav-link' as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className='nav-link' as={Link}  to="/about-us">
            About Us
          </Nav.Link>
          <Nav.Link className='nav-link' as={Link}  to="/get-involved">
            Get Involved
          </Nav.Link>
          {/* <Nav.Link as={Link}  to="/community">
            Community
          </Nav.Link> */}
          {/* <Nav.Link as={Link}  to="/donate">
            Donate
          </Nav.Link> */}
        </Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
          <Button as = {Link} to ="/community" variant="info">Find Help</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>
 
  );
}

export default Navb;
