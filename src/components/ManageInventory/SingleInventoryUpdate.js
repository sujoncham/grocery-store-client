import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const SingleInventoryUpdate = () => {
    const {inventorySingleId} = useParams();
    const [user] = useAuthState(auth);
    const [singleStock, setSingleStock] = useState({});
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const url = `https://dry-oasis-82123.herokuapp.com/inventory/${inventorySingleId}`;
        fetch(url)
        .then(res =>res.json())
        .then(result => {
            setSingleStock(result)
        });
    }, [inventorySingleId]);

    const handleSingleStock = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;
        const stock = event.target.stock.value;
        const dealer = event.target.dealer.value;
        const img = event.target.img.value;
        const descrip = event.target.descrip.value;
        const stockUpdateInfo = {title, price, stock, dealer, img, descrip};
        console.log(stockUpdateInfo);

        // post data
        const url = `https://dry-oasis-82123.herokuapp.com/inventory/${inventorySingleId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(stockUpdateInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("success", data);
            toast("Updated data successfully");
            const stockValue = event.target.stock.value;
            const remainStock = stockValue.filter((stock) => stock.stock !== stock);
            setSingleStock(remainStock);
        });
    }

    const handleStockUpdateInput = event =>{
        // console.log(event.target.stock.value);
        const {stock, ...rest} = singleStock;
        const newStock = event.target.value;
        const newStockData = {stock:newStock, ...rest};
        setSingleStock(newStockData);
        console.log(newStockData);
    }

    const handleDeliver = (event) =>{
        event.preventDefault();
        const deliver = {
            email: user.email,
            title: singleStock.title,
            stock: singleStock.stock,
            stockId: inventorySingleId
        }

        axios.post('https://dry-oasis-82123.herokuapp.com/deliver/', deliver)
        .then(response => {
            console.log(response);
            toast("Delivered data successfully");
        })
    }

    const backPreviouspage = (id)=>{
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                    <h4 className='mt-3'>User Id : {user.email}</h4>
                    <div className='d-flex justify-content-between'>
                        <h3 className='mt-3 mb-3 border-bottom'>{singleStock.title} / stock- {singleStock.stock}</h3>
                        <button onClick={()=>backPreviouspage(singleStock._id)} className='btn btn-primary mb-2'> <i className="fa fa-arrow-left"></i> Back</button>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                    
                    <Form className='d-flex flex-column' onSubmit={handleSingleStock}>
                        <input className='mb-2 p-1' type="text" name="title" value={singleStock.title} readOnly disabled />
                        <input className='mb-2 p-1' type="text" name="price" value={singleStock.price} readOnly disabled />
                        <input className='mb-2 p-1' type="number" min="1" max={singleStock.stock} value={singleStock.stock} onChange={handleStockUpdateInput} name="stock" />
                        <input className='mb-2 p-1' type="text" name="dealer" value={singleStock.dealer} readOnly disabled />
                        <input className='mb-2 p-1' type="text" name="img" value={singleStock.img} readOnly disabled />
                        <textarea type="text" name="descrip" value={singleStock.descrip} readOnly disabled />
                        <input type="submit" onClick={()=>setAgree(!agree)} className={`btn btn-primary mt-4 mb-5 ${agree ? '' : 'text-white'}`} value='Update Stock' />
                    </Form>
                   
                </div>
                <div className='col-12 col-sm-12 col-md-2 col-lg-2'></div>

                <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                    <Form className='d-flex flex-column' onSubmit={handleDeliver}>
                        <input className='mb-2 p-1' type="text" name="title" value={user.email} readOnly disabled />
                        <input className='mb-2 p-1' type="text" name="price" value={singleStock.title} readOnly disabled />
                        <input className='mb-2 p-1' type="text" name="stock" value={singleStock.stock} readOnly disabled />
                
                        <input disabled={!agree} type="submit" className="btn btn-primary mt-4 mb-5" value='Delivered' />
                    </Form>
                </div>
               
            </div>
        </div>
    );
};

export default SingleInventoryUpdate;