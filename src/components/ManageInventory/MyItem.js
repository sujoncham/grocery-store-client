import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import axiosPrivate from '../AuthenLogin/axiosPrivate';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [delivers, setDelivers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getDeliver = async () =>{
            const email = user?.email;
            const url = `https://dry-oasis-82123.herokuapp.com/deliver?email=${email}`;
         try{
            const {data} = await axiosPrivate.get(url);
            setDelivers(data);
         } 
         catch(error){
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }
         }
        }
        getDeliver();
    }, [user]);
    
    return (
        <div className='container mt-4'>
        <div className='row'>
            <h1 className='border-bottom mt-4 mb-5'>{user?.email} : {delivers.length}</h1>
            {
                delivers.map(deliver => <div className='col-12 col-sm-12 col-md-4 col-lg-4 mb-5' key={deliver._id} deliver={deliver}>
                    <div className='border border-warning p-2 m-1'>
                    <h3 className='border-bottom'>Product : {deliver.title}</h3>
                    <p>Delivered : {deliver.stock}</p>
                    </div>
                </div> )
            }
            
        </div>
        </div>
    );
};

export default MyItem;