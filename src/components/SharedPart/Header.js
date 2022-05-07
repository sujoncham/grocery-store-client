import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Brand href="/"> 
                <img style={{width:40}} src="https://i.ibb.co/Rjw2Vy5/logo.png" alt="" />
                <span className='m-1 text-warning'>Modina Grocery Store</span>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ms-auto menu">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    
                    {
                    user && <>
                        <Nav.Link as={Link} to="/InventoryList">InventoryList</Nav.Link>
                        <Nav.Link as={Link} to="/myItem">MyItem</Nav.Link>
                        <Nav.Link as={Link} to="/emailInfo">Message</Nav.Link>
                    </> 
                    }
                    <p className='text-white mt-2'>{user?.displayName && user.displayName.slice(0, 6)}</p>
                    {
                        user ? 
                        <button className='btn btn-link text-warning' onClick={handleSignOut} >SignOut</button>
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;