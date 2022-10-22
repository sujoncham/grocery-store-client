import { useEffect, useState } from "react";
import InventoryRow from "../InnerRow/InventoryRow";

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [searched, setSearched] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => {
            setSearched(data);
            setProducts(data);
        });
    }, []);


    const handleSearchText = (event) =>{
        const getData = event.target.value.toString();
      
        const filtered = products.filter(product => product.title.toLowerCase().includes(getData));
        setSearched(filtered);
    }

    return (
        <div className="p-14">
            <h1 className="text-3xl text-center mb-10">Inventory : {searched.length}</h1>
            <div className="grid place-content-center mb-10">
                <input 
                type="text" 
                name="searchText" 
                placeholder="search" 
                className="input input-bordered w-56"
                onChange={handleSearchText}
                 />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                { searched.map(product => product ? (<InventoryRow key={product._id} product={product}></InventoryRow>)
                    :
                    ('<h1>Not found product through this name!!</h1>'))
                }
            </div>
        </div>
    );
};

export default Inventory;