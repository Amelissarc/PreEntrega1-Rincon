import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBarComponent = () => {
    return (
        <div>
            <header>
                <div className="logoHeader">
                    <img src="./img/tipo-blancotrabajo.png" alt="logo"/>
                </div>
            </header>
            <aside>
                <div className="asideHeader">
                </div>
            </aside>
        </div>
    )
}


export function NavbarDarkExample() {
    return (
        <Navbar bg="#E5BCD9" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home">All products</Navbar.Brand>
            <Navbar.Brand href="#">Yoga Set</Navbar.Brand>
            <Navbar.Brand href="#">Drinkware</Navbar.Brand>
            <Navbar.Brand href="#">Bolster</Navbar.Brand>
            <Navbar.Brand href="#">Yoga Block</Navbar.Brand>
            <Navbar.Brand href="#">Shirts</Navbar.Brand>
            <Navbar.Brand href="#">Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Favorites"
                >
                    <NavDropdown.Item href="#action/3.1">Kit yoga </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Math blue </NavDropdown.Item>
                    
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action/3.4">Home</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    ); 
}