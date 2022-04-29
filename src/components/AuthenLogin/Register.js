import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleSubmitForm = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const confirmPassword = event.target.confirmPassword.value;

        createUserWithEmailAndPassword(email, password, name, confirmPassword);
      }
      let errorHandle;
      if (error) {
        errorHandle = <p className='text-center'>Error: {error?.message}</p>
      }
      if (loading) {
        return <p>Loading...</p>;
      }

      if(user){
          navigate('/');
      }

    return (
        <div className='container mt-5'>
        <div className='row'>
        <div className="col-md-6 offset-md-3">
            <h1>Register</h1>
            {errorHandle}
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
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