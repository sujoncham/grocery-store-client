import { toast } from 'react-toastify';
const ProductList = ({product, index}) => {
    const {_id, title, img, descrip, stock, price, dealer} = product;

    const deleteProduct = (id) =>{
        const confirDelete = window.confirm('Are you sure to delete this product?');
        if(confirDelete){
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'DELETE',
                headers:{
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast(`${title} is deleted`);
                }
            })
        }
    }

    return (    
        <tr>
            <th>{index + 1}</th>
            <td><img style={{width:60}} src={img} alt="" /></td>
            <td>{title}</td>
            <td>{descrip.slice(0, 30)}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{dealer}</td>
            <td><button onClick={()=>deleteProduct(_id)} className='btn btn-sm'>delete</button></td>
        </tr>
        
    );
};

export default ProductList;