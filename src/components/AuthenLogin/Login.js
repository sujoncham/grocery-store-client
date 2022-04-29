import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Authenticate.css';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div className='container mt-5'>
        <div className='row'>
        <div class="col-md-6 offset-md-3">
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New user at Ware Houe? Please <Link to="/register">Register</Link> here</p>
            <div className='d-flex align-items-center'>
            <div className='lineDiv'></div> <span className='p-2'>or</span> <div className='lineDiv'></div>
            </div>
            <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default Login;