import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleOrderPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://grocery-store-server.onrender.com/inventory/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);
    return (
        <div>
            <div class="min-h-screen">
                <h1 className='text-3xl text-center p-14'>Sinlge Page Order : {id}</h1>
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.img} class="w-96 rounded-lg shadow-2xl" alt='' />
                    <div className='w-96'>
                    <h1 class="text-5xl font-bold">{product.title}</h1>
                    <p class="py-6">{product.descrip}</p>
                    <p class="py-6">{product.stock}</p>
                    <p class="py-6">{product.price}</p>
                    <p class="py-6">{product.dealer}</p>
                    <button class="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrderPage;