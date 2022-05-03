import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './product.css';

const StoreHouse = () => {
    const [stores, setStores] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://dry-oasis-82123.herokuapp.com/productCount/')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    }, [])

    useEffect(()=>{
        const url = `https://dry-oasis-82123.herokuapp.com/inventory?page=${page}&size=${size}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setStores(data));
    }, [page, size]);

    const handleNavigate = (id) =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <Container>
            <Row>
            <h1 className='mt-5 mb-5 text-center'>Inventory Stock : {stores.length}</h1>
            
            {
                stores.map(store => <div key={store._id} store={store} className='col-12 col-sm-12 col-md-3 col-lg-3 mb-5'>
                    <div className='product-item'>
                        <img src={store.img} alt="" />
                        <div className='product-title'>
                            <h3>{store.title}</h3>
                            <button onClick={()=>handleNavigate(store._id)} className='btn btn-primary'>
                                see detail
                            </button>
                        </div>
                    </div>
                </div>)
            }
            
            <div className='mb-5'>
            {
                [...Array(pageCount).keys()]
                .map(number=> <button 
                    onClick={()=>setPage(number)}
                    className={page === number ? 'btn btn-warning m-1' : 'btn btn-primary m-1'}>{number}</button>)
            }
            <select onChange={(e)=>setSize(e.target.value)}>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            </div>
            </Row>
        </Container>
    );
};

export default StoreHouse;