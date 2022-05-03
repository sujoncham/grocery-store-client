import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const UpdateData = () => {
    const {updateDataeId} = useParams();
    const [user] = useAuthState(auth);

    const [singleStock, setSingleStock] = useState({});
    useEffect(()=>{
        const url = `https://dry-oasis-82123.herokuapp.com/inventory/${updateDataeId}`;
        fetch(url)
        .then(res =>res.json())
        .then(result => setSingleStock(result));
    }, [updateDataeId]);

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
        const url = `https://dry-oasis-82123.herokuapp.com/inventory/${updateDataeId}`;
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
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='w-75 mx-auto d-flex justify-content-between border-bottom'>
                <h3>User Id: {user.email}</h3>
                <h3 className='text-primary'>{singleStock.title}</h3>
                </div>
                <div className='w-75 mx-auto'>
                <Link to='/stockList'>
                    <button className='btn btn-primary'>Back to StockList</button>
                </Link>
                </div>
                
                <div className='w-50 mx-auto mt-5'>
                    
                    <h4>Update Stock Item</h4>
                    <Form className='d-flex flex-column' onSubmit={handleSingleStock}>
                        <input className='mb-2 p-1' type="text" name="title" value={singleStock.title} />
                        <input className='mb-2 p-1' type="text" name="price" placeholder='add price' autoComplete='off' />
                        <input className='mb-2 p-1' type="text" name="stock" placeholder='add stock' autoComplete='off' />
                        <input className='mb-2 p-1' type="text" name="dealer" placeholder='add dealer' autoComplete='off' />
                        <input className='mb-2 p-1' type="text" name="img" value={singleStock.img} autoComplete='off' />
                        <textarea type="text" name="descrip" placeholder='add description' />
                        <input type="submit" className="btn btn-primary mt-4 mb-5" value='Update Stock' />
                    </Form>
                    
                </div>
            </div>
        </div>
    );
};

export default UpdateData;