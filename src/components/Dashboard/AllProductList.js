import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const AllProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://grocery-store-server.onrender.com/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">All Product List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Dealer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductList index={index} key={product._id} product={product}></ProductList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProductList;