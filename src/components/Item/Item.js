import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';

const Item = ({ item }) => {
    const { img, title, desc, price, rating, key } = item;
    const { addToCart } = useAuth();
    return (
        <Card className='m-2 py-2' style={{ width: '22rem' }}>
            <Card.Img variant="top" className='img-fluid' src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col><Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<FontAwesomeIcon className='text-warning' icon={emptyStar} />}
                        fullSymbol={<FontAwesomeIcon className='text-warning' icon={fullStar} />}
                    /></Col>
                    <Col><h4>Price: {price}$</h4></Col>
                </Row>
            </Card.Body>
            <Card.Body className='d-flex'>
                <NavLink to={`/items/${key}`} className='btn btn-dark w-100 me-2'>View Details</NavLink>
                <button onClick={() => addToCart(item)} className='btn btn-dark w-100'>Add to Cart</button>
            </Card.Body>
        </Card>
    );
};

export default Item;