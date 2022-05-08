import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import MapLocation from '../GoogleMap/MapLocation';


const Contact = () => {
    const [user] = useAuthState(auth);
    
    const handleContactForm = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const details = event.target.detailMessage.value;
        console.log('submitted', name, email, details);

        const emailInfo = {name, email, details};
        console.log(emailInfo);

        // post data
        const url = `https://dry-oasis-82123.herokuapp.com/message`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(emailInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("success", data);
            toast("Message send successfully");
            event.target.reset();
        })

    }
    
    return (
        <div className='row mt-5'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
         
            <Form onSubmit={handleContactForm}>
                <Form.Group className="mb-3" controlId="NameForm.ControlInput1">
                    <Form.Label>Your name</Form.Label>
                    { user ?
                        <Form.Control type="text" name="name" value={user?.displayName} />
                        :
                        <Form.Control type="text" name="name" placeholder="Enter name" />
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="EmailForm.ControlInput2">
                    <Form.Label>Your email</Form.Label>
                    { user ?
                        <Form.Control type="email" name="email" value={user?.email} />
                        :
                        <Form.Control type="email" name="email" placeholder="name@info.com" autoComplete='nope' />
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="TextForm.ControlTextarea1">
                    <Form.Label>Send your opinion</Form.Label>
                    <Form.Control as="textarea" name="detailMessage" rows={3} />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Send Message
                </Button>
            </Form>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
               
                <MapLocation></MapLocation>
            </div>
        </div>
    );
};

export default Contact;