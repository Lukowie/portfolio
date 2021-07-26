import React from "react";
import {Nav, Navbar, Container,}  from 'react-bootstrap';
import face from '../img/face.png';
import 'bootstrap/dist/css/bootstrap.css';

const text = {
    fontSize:"24px"
  };

function Navigation(){
    // 1. work
    // 2. about
    // 3. contact
    return(
    <div>
         <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/home">
                <img src={face}  width="50" height="50" className="d-inline-block align-top" alt="lucas face"></img>
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="work" style={text}>Work</Nav.Link>
            <Nav.Link href="about" style={text}>About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
    );
}

export default Navigation;