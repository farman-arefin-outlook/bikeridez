import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../components/hooks/useAuth';

import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Cart = () => {
    const { selectedItem, addToCart } = useAuth();
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        {
                            selectedItem.map((item) => {
                                const { img, title, desc, rating, key, price } = item;
                                return (

                                    <Row className="my-2" key={key}>
                                        <Col sm={5}>
                                            <img className="img-fluid" src={img} alt="" />
                                        </Col>
                                        <Col sm={7}>
                                            <h5>{title}</h5>
                                            <p className='mb-0'>{desc}</p>
                                            <h4>Price: {price}</h4>
                                            <div>
                                                <Col><Rating
                                                    initialRating={rating}
                                                    readonly
                                                    emptySymbol={<FontAwesomeIcon className='text-warning' icon={emptyStar} />}
                                                    fullSymbol={<FontAwesomeIcon className='text-warning' icon={fullStar} />}
                                                /></Col>
                                            </div>
                                            <Col> <NavLink to={`/items/${key}`} className='btn btn-dark w-100 me-2'>View Details</NavLink>
                                                <button onClick={() => addToCart(item)} className='btn btn-dark w-100'>Add to Cart</button>
                                            </Col>
                                        </Col>
                                    </Row>
                                )
                            }

                            )
                        }
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;