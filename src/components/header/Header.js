import React from 'react';
import { NavLink } from "react-router-dom";
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo-1.svg';
import navBG from '../../assets/images/nav-bg.png';
import navBG2 from '../../assets/images/nav-bg2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../header/Header.css';
import useAuth from '../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    const { displayName, photoURL, email } = user;
    return (
        <div className='gfont'>
            <Navbar className="my-0 p-0 gfontH ms-auto align-items-center" style={{ background: `url(${navBG})` }} bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Link href="#shipping">Shipping</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#track">Track Order</Nav.Link>
                    </Nav>
                    <Nav className='text-end'>
                        <Nav.Link href="#track">Follow Us : </Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
                        <Nav.Link href="#track"><FontAwesomeIcon icon={faPinterest} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar sticky='top' style={{ background: `url(${navBG2})` }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/pages">Pages</Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-5 p-5 my-lg-0 justify-content-center align-items-center"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Navbar.Brand className="justify-content-center align-items-center ms-auto" href="#home"><img src={logo} width='200px' height='70px' className='align-items-center justify-content-center' alt="Logo" /></Navbar.Brand>
                            </Nav>

                        </Navbar.Collapse>
                        <Nav.Link as={NavLink} className='pt-4' to="/favourite"><FontAwesomeIcon icon={faCloud} /></Nav.Link>
                        <Nav.Link className='pt-4' href="#link"><FontAwesomeIcon icon={faShoppingCart} /><Badge className='badge'>0</Badge></Nav.Link>
                        {!user.displayName ?
                            (<><Nav.Link as={NavLink} className='pt-4' to="/signup">Sign Up</Nav.Link>
                                <Nav.Link as={NavLink} className='pt-4' to="/login">Log In</Nav.Link></>) : (<NavDropdown className='pt-3' title={
                                    <img style={{ width: '45px', borderRadius: '50%' }} src={photoURL} alt="" />
                                } id="basic-nav-dropdown">
                                    <div className="text-center">
                                        <h6>{displayName}</h6>
                                        <p className="m-0">
                                            {email}
                                        </p>
                                        <button onClick={logOut} className='btn btn-primary'>Sign Out</button>
                                    </div>
                                </NavDropdown>)
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;
