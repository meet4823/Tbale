import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./NavL.css";
class Navi extends Component {
  render() {
    return (
      <div id="nav">
        <Navbar>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" id="text">
                Home
              </Nav.Link>
              <Nav.Link href="/Dashboard1" id="text">
              Dashboard1
              </Nav.Link>
              <Nav.Link href="/Dashboard2" id="text">
              Dashboard2
              </Nav.Link>
              <Nav.Link href="/Dashboard3" id="text">
              Dashboard3
              </Nav.Link>
              <Button href="/register" id="reg2">
              Register
              </Button>
              <Button href="/logout" id="reg">
                Logout
              </Button>
              
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navi;
