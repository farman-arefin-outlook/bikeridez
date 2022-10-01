import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/logo-1.svg';
const Header = () => {
    return (
        <div>
            <Navbar bg="black" expand="sm">
                <Container>
                    <Nav.Link href="#home">Shipping</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Track Order</Nav.Link>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-5 p-5 my-lg-0 justify-content-center align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Navbar.Brand className="justify-content-center align-items-center ms-auto" href="#home"><img src={logo} width='200px' height='70px' className='align-items-center justify-content-center' alt="Logo" /></Navbar.Brand>
                        </Nav>

                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
