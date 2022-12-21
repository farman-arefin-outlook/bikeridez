import React from 'react';
import { Container } from 'react-bootstrap';
import { Slide } from 'react-reveal';
import useAuth from '../hooks/useAuth';
import Item from '../Item/Item.js';

const Items = () => {

    const { items } = useAuth();
    return (
        <div>
            <div className="text-center">
                <Slide left>
                    <h1>Our All Bikes</h1>
                </Slide>
                <Slide right>
                    <p>Here all of our collection</p>
                </Slide>

            </div>
            <Container>
                <div className='my-3 d-flex flex-wrap justify-content-between'>
                    {
                        items.map((item) => <Item key={item.key} item={item} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Items;