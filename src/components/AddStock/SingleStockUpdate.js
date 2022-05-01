import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SingleStockUpdate = () => {
    const {inventorySingleId} = useParams();

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
        const stockInfo = {title, price, stock, dealer, img, descrip};
        console.log(stockInfo);

        // post data
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(stockInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("success", data);
            toast("Updated data successfully");
            event.target.reset();
        })
    }


    return (
        <div className='container'>
            <div className='row'>
                
                <div className='w-50 mx-auto'>
                <h1 className='mt-3 mb-3 border-bottom'>Product Name: {singleStock.title}</h1>
                    <h4>Update Stock Item</h4>
                    <Form className='d-flex flex-column' onSubmit={handleSingleStock}>
                        <input className='mb-2 p-1' type="text" name="title" value={singleStock.title} disabled />
                        <input className='mb-2 p-1' type="text" name="price" value={singleStock.price} disabled />
                        <input className='mb-2 p-1' type="text" name="stock" placeholder='Add stock' />
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