import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

import { faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Details = () => {
    const { key } = useParams();
    const { items, addToCart } = useAuth();

    const matchingItem = items.find(item => item.key === Number(key));
    const { img, title, desc, rating, price } = matchingItem;
    return (
        <div className='my-4'>
            {
                title ? (
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img className='img-fluid' src={img} alt="" />
                            </Col>
                            <Col md={6}>
                                <h2>{title}</h2>
                                <h4>{desc}</h4>
                                <h5>Price: {price}$</h5>
                                <Rating
                                    initialRating={rating}
                                    readonly
                                    emptySymbol={<FontAwesomeIcon className='text-warning' icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon className='text-warning' icon={fullStar} />}
                                />
                                <button onClick={() => addToCart(matchingItem)} className='btn btn-dark w-40 d-flex flex-wrap-column mt-4'>Add to Cart</button>
                            </Col>
                        </Row>
                    </Container>
                ) : <h1>No Item Found</h1>
            }
        </div>
    );
};

export default Details;