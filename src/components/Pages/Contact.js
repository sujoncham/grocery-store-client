import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 23.785948,
    lng: 90.4247586
  };

const Contact = () => {
    
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
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="EmailForm.ControlInput2">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@info.com" autoComplete='nope' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="TextForm.ControlTextarea1">
                    <Form.Label>Send your opinion</Form.Label>
                    <Form.Control as="textarea" name="detailMessage" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
               
                <LoadScript googleMapsApiKey="AIzaSyCl3JIOVyMGlcWn7aPcxQdVfS8uJbB3pAA" >
                        <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Contact;