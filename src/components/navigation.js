import React, {useState} from "react";
import {Nav, Navbar}  from 'react-bootstrap';
import face from '../img/face.png';
import 'bootstrap/dist/css/bootstrap.css';
  
  const navBarBrandPadding ={
    paddingLeft:"5%"
  }

  const navBar = {
      borderBottom: "1px solid #EAEFD3"
  }

function Navigation(){
    const [workLinkColor, setWorkLinkColor] = useState("white");
    const [aboutlinkColor, setaboutlinkColor] = useState("white");

    // 1. work
    // 2. about
    // 3. contact
    return(
    <div>
         <Navbar style={navBar} bg="dark" variant="dark">
            <Navbar.Brand style={navBarBrandPadding} href="/home">
                <img src={face}  width="50" height="50" className="d-inline-block align-top" alt="lucas face"></img>
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="work" onMouseLeave={()=> {setWorkLinkColor("white")}} onMouseEnter={()=> {setWorkLinkColor("#39A2AE")}} style={{color: workLinkColor, fontSize: "24px"}}>Work</Nav.Link>
            <Nav.Link href="about" onMouseLeave={()=> {setaboutlinkColor("white")}} onMouseEnter={()=> {setaboutlinkColor("#39A2AE")}} style={{color: aboutlinkColor, fontSize: "24px"}}>About</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    );
}

export default Navigation;