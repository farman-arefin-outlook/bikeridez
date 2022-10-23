import React from "react";
import "./Footer.css";
import payment from "./../../assets/images/payment.png";
import FooterBg from './../../assets/images/Footer_BG.jpg';
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faMessage,
    faEnvelopeCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="text-white">
            <div className="py-4" style={{ background: `url(${FooterBg})` }}>
                <Container>
                    <Row className="footer-head gfont">
                        <Col lg='4' xs='12' className="border-color">
                            <FontAwesomeIcon className="icon-size" icon={faMessage} />
                            <h2>NEED HELP?</h2>
                            <p style={{ color: "GrayText" }}>Our dedicated team are here to help.</p>
                            <button className="shop-now-button">CHAT NOW</button>
                        </Col>
                        <Col lg='4' xs='12' className="border-color">
                            <FontAwesomeIcon className="icon-size" icon={faPhone} />
                            <h2>CALL US</h2>
                            <p style={{ color: "GrayText" }}>Talk to our team 24/7 about your needs.</p>
                            <h2 style={{ color: "orangered" }}>666-880-33388</h2>
                        </Col>
                        <Col lg='4' xs='12' className="border-color">
                            <FontAwesomeIcon className="icon-size" icon={faEnvelopeCircleCheck} />
                            <h2>SUBSCRIBE US</h2>
                            <p style={{ color: "GrayText" }}>And get the scoop on sales & new gear!</p>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <button className="btn btn-danger">Search</button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col md={2}>
                            <h5 className="gfont">USEFUL LINKS</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Legal & Privacy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Gift Card</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Customer Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">My Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Find A Store</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="gfont">MY ACCOUNT</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">My Order History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">My Wish List</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Order Tracking</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Shopping Cart</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="gfont">COMPANY</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Affiliate</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Contact Us</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="gfont">SHOP</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Televisions</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Fridges</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Washing Machines</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Fans</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Air Conditioners</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Laptops</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div>
                                <h5 className="gfontH">CONNECT WITH US</h5>
                                <FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon className="px-3" icon={faPhone} />
                                <FontAwesomeIcon className="px-2" icon={faMapMarkerAlt} />
                            </div>
                            <img src={payment} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <p className="text-start px-5 m-0 py-3 footer-color gfontH">
                Copyright © 2022 <span style={{ color: "orangered" }}>Ridez.</span> All Rights Reserved
                <p className="text-end"> Designed By F.A. Tamim</p>
            </p>
        </div>
    );
};

export default Footer;
