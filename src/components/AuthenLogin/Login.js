import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Authenticate.css';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let from = location.state?.from.pathName || '/';

    let errorHandle;
    if (error) {
        errorHandle = <p className='text-danger'>Error: {error.message}</p>
      }
      if (loading) {
        return <p>Loading...</p>;
      }

      if(user){
        navigate(from, {replace:true});

      }
      
      const handleLoginSubmit = event =>{
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)

      }

    return (
        <div className='container mt-5'>
        <div className='row'>
        <div className="col-md-6 offset-md-3">
            <h1>Login</h1>
            {loading}
            {errorHandle}
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New user at Ware Houe? Please <Link to="/register">Register</Link> here</p>
            
            <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default Login;