import { useEffect, useState } from 'react';

const useStockHouse = () => {
    const [stores, setStores] = useState([]);
    useEffect(()=>{
        fetch('https://dry-oasis-82123.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setStores(data));
    }, []);

   return [stores, setStores];
   
}

export default useStockHouse;