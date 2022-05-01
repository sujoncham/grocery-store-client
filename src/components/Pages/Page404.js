import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Pages.css';

const Page404 = () => {
    return (
        <Container>
            <Row>
            <Col md={{ span: 6, offset: 3 }} className='text-center'>
            <div className='page404'>
                <h1 style={{fontSize:100}}>404</h1>
            <h2>Page not found</h2>
            <p>The page you are looking for doesn't exist or another error occured.</p>
            <p>Go to <Link to="/home">Home Page</Link> </p>
            </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Page404;