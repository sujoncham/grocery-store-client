import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './product.css';

const StoreProduct = () => {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setStores(data));
    }, []);

    const handleNavigate = (id) =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <Container>
            <Row>
            <h1>Store : {stores.length}</h1>
            {
                stores.map(store => <div key={store._id} className='col-12 col-sm-12 col-md-3 col-lg-3 mb-5'>
                    <div className='product-item'>
                    <img src={store.img} alt="" />
                    <div className='product-title'>
                    <h3>{store.title}</h3>
                    <button onClick={()=>handleNavigate(store._id)} className='btn btn-primary'>see detail</button>
                    </div>
                    </div>
                </div> )
            }
            </Row>
        </Container>
    );
};

export default StoreProduct;