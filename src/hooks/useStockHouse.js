import { useEffect, useState } from 'react';

const useStockHouse = () => {
    const [stores, setStores] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setStores(data));
    }, []);

   return [stores, setStores];
   
}

export default useStockHouse;