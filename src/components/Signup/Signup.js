import { faEnvelope, faLock, faUser, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import google from '../../assets/images/google.png';
import github from '../../assets/images/github.png';
import facebook from '../../assets/images/facebook.png';

const Signup = () => {
    const { signInWithGoogle,
        signInWithGithub,
        signInWithEmail,
        signUp,
        error,
        setError,
        setUser,
        getEmail,
        getName,
        getPhoto,
        getPassword } = useAuth();
    return (

        <div className="text-center my-5 py-5">
            <h2>Please Signup</h2>
            <p className=" mt-2">Signup with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div style={{ maxWidth: "500px" }} className="w-100 px-3 mx-auto">
                <Form
                    onSubmit={signUp}
                >
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Enter your name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getName}
                                    required
                                    type="text"
                                    autoComplete="current-email"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Enter your valid photo url
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getPhoto}
                                    required
                                    type="text"
                                    autoComplete="current-text"
                                    id="photo"
                                    placeholder="Enter your valid photo url"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-dark mt-2 w-100">
                        Sign Up
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have an account? Please Login!
                </NavLink>
                <br />
                <NavLink className="text-decoration-none" to="/reset">
                    Forget password? Reset!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Login with</p>
            <div>
                <button
                    onClick={() => {
                        signInWithGoogle()
                            .then((result) => {
                                setUser(result.user);
                                //history.push(redirect);
                            })
                            .catch((err) => {
                                setError(err.message);
                            });
                    }}
                    className="btn"
                >
                    <img src={google} width="46px" alt="google-icon" />
                </button>
                <button
                    // onClick={() => {
                    //     signInWithFacebook()
                    //         .then((result) => {
                    //             setUser(result.user);
                    //             //history.push(redirect);
                    //         })
                    //         .catch((err) => {
                    //             setError(err.message);
                    //         });
                    // }}
                    className="btn"
                >
                    <img width="50px" src={facebook} alt="facebook-icon" />
                </button>
                <button
                    onClick={() => {
                        signInWithGithub()
                            .then((result) => {
                                setUser(result.user);
                                //history.push(redirect);
                            })
                            .catch((err) => {
                                setError(err.message);
                            });
                    }}
                    className="btn"
                >
                    <img width="55px" src={github} alt="github-icon" />
                </button>
            </div>
        </div>
    );
};

export default Signup;