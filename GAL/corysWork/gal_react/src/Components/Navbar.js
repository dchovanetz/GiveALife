import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, Button, Nav} from 'react-bootstrap';
import '../App.css';

function Navb(){
    return(
        <div id='NavB'>

<Navbar bg="dark" variant= 'dark' expand="lg" >
  <Navbar.Brand href="#home">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About Us</Nav.Link>
      <Nav.Link href="#link">Get Involved</Nav.Link>
      <Nav.Link href="#link">Community</Nav.Link>
      <Nav.Link href="#link">Donate</Nav.Link>
      
     
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Button variant="info">Get Help</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

</div>
    )
}

export default Navb;