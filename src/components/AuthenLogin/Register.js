import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Register = () => {
    return (
        <div className='container mt-5'>
        <div className='row'>
        <div class="col-md-6 offset-md-3">
            <h1>Register</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already register at Ware Houe? Please <Link to="/login">Login</Link> here</p>
            <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default Register;