import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStock = () => {
    const {inventoryId} = useParams();
    const navigate = useNavigate();
    const [permitted, setPermitted] = useState(false);
    const [stockProduct, setStockProduct] = useState({});
    useEffect(()=>{
        const url = `https://dry-oasis-82123.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
        .then(res =>res.json())
        .then(result => setStockProduct(result));
    }, [inventoryId])


    const handleProceedStock = (id) =>{
        navigate(`/singleStock/${id}`)
    }

    const handleProceedHome = () =>{
        navigate('/home');
    }


    return (
        <div className='w-50 mx-auto mt-5'>
           <h1 className='mb-5 border-bottom'>Stock Updates</h1>
           <div className='mb-5 border-bottom'>
           <h3 className='mt-5 d-flex justify-content-between'> <span>Product name: </span> <span>{stockProduct.title}</span> </h3>
           <h3 className='mt-2 d-flex justify-content-between'> <span>Physical Stock:</span> <span>{stockProduct.stock}</span></h3>
           </div>
           <div className='mt-5 mb-5 d-flex justify-content-between border-bottom'>
            <Form.Group className="mb-1" controlId="formBasicCheckbox">
                <Form.Check onChange={()=>setPermitted(!permitted)} type="checkbox" className={`ps ${permitted ? 'text-primary' : 'text-warning'}`} label="Are you want to Update value of Physical Stock?" />
            </Form.Group>
            <h3 disabled={!permitted} className={`ps ${permitted ? 'text-primary' : 'text-warning'}`}>yes</h3>
            </div>
           
           <div className='mt-5 mb-5 d-flex justify-content-between'>
                <button 
                    onClick={handleProceedHome}  
                    className='btn btn-primary'
                    >
                    Back to Home
                </button>
                <button 
                    disabled={!permitted} 
                    onClick={()=>handleProceedStock(stockProduct._id)} 
                    className='btn btn-primary'
                    >
                    Proceed to Update
                </button>
           </div>
        </div>
    );
};

export default UpdateStock;