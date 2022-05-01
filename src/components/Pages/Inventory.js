import React from 'react';
import StoreHouse from '../AddStock/StoreHouse';

const Products = () => {
    return (
        <div className='container'>
        <div className='row'>
            <h1>Inventory Page</h1>
            <StoreHouse></StoreHouse>
        </div>
        </div>
    );
};

export default Products;