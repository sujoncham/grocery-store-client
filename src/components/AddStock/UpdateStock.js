import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateStock = () => {
    const {inventoryId} = useParams();
    return (
        <div className='w-50 mx-auto'>
            <h1>Stock Updates : {inventoryId}</h1>
            <Link to="/stockList">
            <button className='btn btn-primary'>UpdateStock</button>
            </Link>
        </div>
    );
};

export default UpdateStock;