import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SharedPart.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                <Col md={{ span: 8, offset: 2 }}>
                <h1 className='text-warning'>Grocery Ware House</h1>
                <p>Get great deals every day at The Grocery Ware House. With such a huge range of products available in Grocery Ware House, we are sure to have everything you need at the lowest prices. Whether you are looking to pick up plates, pots, or other homeware, rock the latest daily needs, or are even just buying toys for the kids or the kids at heart, Grocery Ware House will have what you need. We are New Zealands biggest one-stop-shop for great products at low prices. Look no further than The Grocery Ware House: where everyone gets a bargain!</p>
                <p className='text-info'>&copy; All rights reserved 2022. Grocery Ware House</p>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;