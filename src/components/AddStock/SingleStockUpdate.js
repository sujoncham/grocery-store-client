import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const SingleStockUpdate = () => {
    const {inventorySingleId} = useParams();
    const [user] = useAuthState(auth);
    const [singleStock, setSingleStock] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventorySingleId}`;
        fetch(url)
        .then(res =>res.json())
        .then(result => setSingleStock(result));
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
        const url = `http://localhost:5000/inventory/${inventorySingleId}`;
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
        })
    }

    const handleStockUpdateInput = event =>{
        // console.log(event.target.stock.value);
        const {stock, ...rest} = singleStock;
        const newStock = event.target.value;
        const newStockData = {stock:newStock, ...rest};
        setSingleStock(newStockData);
        console.log(newStockData);
    }

    const handleDelivered = () =>{
        setSingleStock(singleStock.stock - 1);
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='w-75'>
                <p>{singleStock.stock}</p>
                <button className='btn btn-primary' onClick={handleDelivered}>delivered</button>
                </div>
                <div className='w-50 mx-auto'>
                    <h2>User Id : {user.email}</h2>
                <h1 className='mt-3 mb-3 border-bottom'>Product Name: {singleStock.title} stock- {singleStock.stock}</h1>
                    <h4>Update Stock Item</h4>
                    <Form className='d-flex flex-column' onSubmit={handleSingleStock}>
                        <input className='mb-2 p-1' type="text" name="title" value={singleStock.title} disabled />
                        <input className='mb-2 p-1' type="text" name="price" value={singleStock.price} disabled />
                        <input className='mb-2 p-1' type="number" min="1" max={singleStock.stock} value={singleStock.stock} onChange={handleStockUpdateInput} name="stock" />
                        <input className='mb-2 p-1' type="text" name="dealer" value={singleStock.dealer} disabled />
                        <input className='mb-2 p-1' type="text" name="img" value={singleStock.img} disabled />
                        <textarea type="text" name="descrip" value={singleStock.descrip} disabled />
                        <input type="submit" className="btn btn-primary mt-4 mb-5" value='Update Stock' />
                    </Form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default SingleStockUpdate;