import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import axiosPrivate from '../AuthenLogin/axiosPrivate';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [deliver, setDeliver] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getDeliver = async () =>{
            const email = user.email;
            const url = `https://dry-oasis-82123.herokuapp.com/deliver?email=${email}`;
         try{
            const {data} = await axiosPrivate.get(url);
            setDeliver(data);
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
    }, [user])
    return (
        <div>
            <h1>Hellow, Deliver: {deliver.length}</h1>
        </div>
    );
};

export default MyItem;