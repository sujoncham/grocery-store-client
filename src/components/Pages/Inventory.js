import { useEffect, useState } from "react";
import InventoryRow from "../InnerRow/InventoryRow";

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div className="p-14">
            <h1 className="text-3xl text-center">Inventory : {products.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    products.map(product => <InventoryRow key={product._id} product={product}></InventoryRow>)
                }
            </div>
        </div>
    );
};

export default Inventory;