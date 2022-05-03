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
            const email = user.email;
            const url = `https://dry-oasis-82123.herokuapp.com/deliver?email=${email}`;
         try{
            const {data} = await axiosPrivate.get(url);
            setDelivers(data);
         } 
         catch(error){
            console.log(error);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }
         }
        }
        getDeliver();
    }, [])
    return (
        <div className='container'>
        <div className='row'>
            <h1 className='border-bottom mt-3 mb-4'>{user.email}: {delivers.length}</h1>
            {
                delivers.map(deliver => <div className='col-12 col-sm-12 col-md-4 col-lg-4' key={deliver._id} deliver={deliver}>
                    
                    <h3>Product : {deliver.title}</h3>
                    <p>Stock : {deliver.stock}</p>
                </div> )
            }
            
        </div>
        </div>
    );
};

export default MyItem;