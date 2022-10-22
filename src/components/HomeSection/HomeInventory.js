import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeInventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const homeproducts = products.slice(0, 8);

    const handleToInventoryPage = () =>{
        navigate('/inventory');
    }

    return (
        <div className='p-16'>
            <h1>Latest Product : {homeproducts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    homeproducts.map(product =><div key={product._id} className="card w-100 bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="product" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.descrip}</p>
                        <p>{product.price}</p>
                        <p>{product.stock}</p>
                        <p>{product.dealer}</p>
                       
                    </div>
                </div>)
                }
            </div>
            <div className='flex justify-center mt-14'>
                <button onClick={handleToInventoryPage} className='btn btn-warning'>Inventory page</button>
            </div>
        </div>
    );
};

export default HomeInventory;