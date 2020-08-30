import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, Button, Nav} from 'react-bootstrap';
import { 
  Link,
  Route,
  BrowserRouter as Router,
  Switch 
} from "react-router-dom";
import Home from "../home/Home"
import AboutUs from '../about-us/AboutUs'
import GetInvolved from '../get-involved/GetInvolved'
import Community from '../community/Community'
import Donate from '../donate/Donate'
import '../../App.css';

function Navb(){
    return(
<>
<Router>
<Navbar bg="dark" variant= 'dark' expand="lg" id='NavB' >
  <Navbar.Brand >Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to='AboutUs'>About Us</Nav.Link>
      <Nav.Link as={Link} to='GetInvolved'>Get Involved</Nav.Link>
      <Nav.Link as={Link} to='Community' >Community</Nav.Link>
      <Nav.Link as={Link} to='Donate' >Donate</Nav.Link>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Button variant="info">Find Help</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

<Switch>

  <Route exact path="/">
    <Home />
  </Route>

  <Route path="/AboutUs">
    <AboutUs />
  </Route>

  <Route path='/GetInvolved'>
    <GetInvolved/>
  </Route>

  <Route path='/Community'>
    <Community/>
  </Route>

  <Route path='/Donate'>
    <Donate/>
  </Route>

</Switch>

</Router>
</>
    )
}

export default Navb;