import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStock = () => {
    const {inventoryId} = useParams();
    const [stockProduct, setStockProduct] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res =>res.json())
        .then(result => setStockProduct(result));
    }, [inventoryId])

    const handleUpdateStock = () =>{
        const updateStock = stockProduct.stock + 1;
        const latestStock = {updateStock};
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(latestStock)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data)
            // event.target.reset()
            // setStockProduct(data);
        })
    }

    const handleDeliverStock = () =>{
        const updateDeliver = stockProduct.stock + 1;
        const latestDeliver = {updateDeliver};
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(latestDeliver)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data)
            // setStockProduct(data);
            // event.target.reset()
        })
    }


    return (
        <div className='w-50 mx-auto'>
           <h1>Stock Updates : {stockProduct.title}</h1>
           
           <div className='mb-5'>
           <button onClick={()=>handleUpdateStock(stockProduct._id)} className='btn btn-primary'>UpdateStock</button>
            <h3>Total Stock: {stockProduct.stock}</h3>
            <button onClick={()=>handleDeliverStock(stockProduct._id)}  className='btn btn-primary'>Delivered Product</button>
           </div>
        </div>
    );
};

export default UpdateStock;