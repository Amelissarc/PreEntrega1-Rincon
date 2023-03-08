import React from 'react';
import CartWidget from '../CartWidgetComponent/CartWidgetComponent';
import ItemListContainer from '../ItemListComponent/ItemListComponent';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const NavBarComponent = () => {
    return (
        <div>
            <header>
                <div className="logoHeader">
                    <img src="./img/tipo-blancotrabajo.png" alt="logo"/>
                </div>
                <div className='formSearch'>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search Products"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Button>
                </Form>
                </div>
                <div className='accountAndCartHeader'>
                    <a href="#">
                        <i class="fa-regular fa-user"></i>
                        Sing in
                    </a>
                    <a href="#">
                        <CartWidget />
                    </a>
                </div>
            </header>
            <aside>
                <div className="asideHeader"></div>
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

                    <NavDropdown.Item href="#action/3.4">Go to Home</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    ); 
}