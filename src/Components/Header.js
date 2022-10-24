import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "../Style/Header.css"

const Header = ()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">Admin</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <NavLink className="text-decoration-none Naav" to="/Home">
                        Home
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;