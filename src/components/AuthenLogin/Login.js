import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.init';
import Loading from '../SharedPart/Loading';
import './Authenticate.css';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      let from = location?.state?.from.pathName || '/';

    let errorHandle;
    if (error) {
        errorHandle = <p className='text-danger'>Error: {error.message}</p>
      }
      if (loading || sending) {
        return <Loading></Loading>
      }

      if(user){
        navigate(from, {replace:true});
      }
      
      const handleLoginSubmit = event =>{
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)

      }

      const handleResetPassword = async (event) =>{
        const email = event.target.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else{
            toast("please, enter your email");
        }
      }

    return (
        <div className='container mt-5'>
        <div className='row'>
        <div className="col-md-6 offset-md-3">
            <h1 className='text-primary text-center text-uppercase'>Login</h1>
            
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button className='w-50 d-block mx-auto mb-3 mt-3' variant="primary" type="submit">
                    Login
                </Button>
                {loading}
            {errorHandle}
            </Form>
            <p className='text-center mb-3 mt-3'>
                Forgot password?<button onClick={handleResetPassword} className='btn btn-link' >Reset Password</button>
            </p>
            <p className='text-center w-50 mx-auto d-block mb-3 mt-3 linemen'></p>
            <p className='text-center d-block mb-3 mt-3'>New user at Ware Houe? Please <Link to="/register">Register</Link> here</p>
            
            <SocialLogin></SocialLogin>
            <ToastContainer />
            </div>
        </div>
        </div>
    );
};

export default Login;