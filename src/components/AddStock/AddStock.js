import React from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddStock = () => {
    const handleAddStock = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;
        const stock = event.target.stock.value;
        const dealer = event.target.dealer.value;
        const img = event.target.img.value;
        const descrip = event.target.descrip.value;
        const stockInfo = {title, price, stock, dealer, img, descrip};
        console.log(stockInfo);

        // post data
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(stockInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("success", data);
            toast("added data successfully");
            event.target.reset();
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='w-50 mx-auto'>
                    <h1>Add Stock Item</h1>
                    <Form className='d-flex flex-column' onSubmit={handleAddStock}>
                        <input className='mb-3' type="text" name="title" placeholder='Stock name' />
                        <input className='mb-3' type="text" name="price" placeholder='Product price' />
                        <input className='mb-3' type="text" name="stock" placeholder='Add stock' />
                        <input className='mb-3' type="text" name="dealer" placeholder='Dealer name' />
                        <input className='mb-3' type="text" name="img" autoComplete='off' placeholder='Image link' />
                        <textarea type="text" name="descrip" placeholder='Stock Description' />
                        <input type="submit" className="btn btn-primary mt-4 mb-5" value='Add Stock' />
                    </Form>
                   
                </div>
            </div>
        </div>
    );
};

export default AddStock;