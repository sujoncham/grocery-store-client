import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateStock = () => {
    const {inventoryId} = useParams();
    return (
        <div>
            <h1>Stock Updates : {inventoryId}</h1>
        </div>
    );
};

export default UpdateStock;