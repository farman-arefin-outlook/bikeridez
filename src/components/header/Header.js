import React from 'react';
import { NavLink } from "react-router-dom";
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo-1.svg';
import navBG from '../../assets/images/nav-bg.png';
import navBG2 from '../../assets/images/nav-bg2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../header/Header.css';
const Header = () => {
    return (
        <div className='gfont'>
            <Navbar className="my-0 p-0 gfontH" style={{ background: `url(${navBG})` }} bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Link href="#shipping">Shipping</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#track">Track Order</Nav.Link>
                    </Nav>
                    <Nav className='text-end'>
                        <Nav.Link href="#track">Follow Us : </Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar sticky='top' style={{ background: `url(${navBG2})` }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                        <Nav.Link href="#link"><FontAwesomeIcon icon={faShoppingCart} /><Badge className='badge'>0</Badge></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;


{/* <Container fluid>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home" className="custom-logo">
                            HOME
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/pages" className="custom-logo">
                            PAGES
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/blog" className="custom-logo">
                            BLOG
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery" className="custom-logo">
                            GALLERY
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-5 p-5 my-lg-0 justify-content-center align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Navbar.Brand className="justify-content-center align-items-center ms-auto" href="#home"><img src={logo} width='200px' height='70px' className='align-items-center justify-content-center' alt="Logo" /></Navbar.Brand>
                        </Nav>

                    </Navbar.Collapse>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                </Container> */}