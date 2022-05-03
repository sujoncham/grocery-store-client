import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../SharedPart/Loading';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      let from = location.state?.from?.pathName || '/';

      let errorHandle;
      if (error || updateError) {
        errorHandle = <p className='text-center'>Error: {error?.message} {updateError?.message}</p>
      }
      if (loading || updating) {
        return <Loading></Loading>
      }

      if(user){
        navigate(from, {replace:true});
      }

      const handleSubmitForm = async (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
            await createUserWithEmailAndPassword(email, password, name);
            await updateProfile({ displayName : name});
            console.log('Updated profile');
            // navigate(from, {replace:true});
      }

    return (
        <div className='container mt-5'>
        <div className='row'>
        <div className="col-md-6 offset-md-3">
            <h1 className='text-primary text-center text-uppercase'>Register</h1>
            {errorHandle}
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAgree(!agree)} className={`ps-2 ${agree ? '' : 'text-danger'}`} type="checkbox" label="Accept terms & conditions" />
                </Form.Group>
                
                <Button 
                disabled={!agree}
                className='w-50 d-block mx-auto mb-3 mt-3' 
                variant="primary" 
                type="submit">
                    Register
                </Button>
            </Form>
            <p>Already register at Ware House? Please <Link to="/login">Login</Link> here</p>
            <SocialLogin></SocialLogin>
            </div>
        </div>
        </div>
    );
};

export default Register;