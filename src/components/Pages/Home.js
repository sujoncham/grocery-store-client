import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Banner/Services';
import Contact from './Contact';


const Home = () => {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();

    const homes = stores.slice(0, 8);

    useEffect(()=>{
        const url = `https://dry-oasis-82123.herokuapp.com/inventory`;
        fetch(url)
        .then(res => res.json())
        .then(data => setStores(data));
    }, []);

    const handleManagePage = () =>{
        navigate('/inventory')
    }


    return (
        <div className='home'>
            <Banner></Banner>
            <div className='container'>
                <h1 className='mt-5 mb-3 text-center'>Inventory Product</h1>
                <div className='row'>
                    {
                        homes.map(home => <div key={home._id} store={home} className='col-12 col-sm-12 col-md-3 col-lg-3 mb-5'>
                            <div className='product-item'>
                                <img src={home.img} alt="" />
                                <div className='product-title'>
                                    <h3>{home.title}</h3>
                            
                                </div>
                            </div>
                        </div>)
                    }
                       <div className='text-center mb-5 mt-2'>
                       <button onClick={handleManagePage} className='w-25 btn btn-primary'>
                                    Manage Inventories 
                        </button>
                       </div>
                    
                </div>

                <Service></Service>
                
                <div className="contact mt-5 mb-5 border-top border-warning">
                    <h1 className='text-center mt-5 text-warning'>Contact with us</h1>
                    <p className='text-center mb-4'>Stay with service</p>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
};

export default Home;