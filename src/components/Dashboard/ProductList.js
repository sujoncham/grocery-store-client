
const ProductList = ({product, index}) => {
    const {title, img, descrip, stock, price, dealer} = product;
    return (
        
        <tr>
            <th>{index + 1}</th>
            <td><img style={{width:60}} src={img} alt="" /></td>
            <td>{title}</td>
            <td>{descrip.slice(0, 30)}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>{dealer}</td>
            <td><button className='btn btn-sm'>delete</button></td>
        </tr>
        
    );
};

export default ProductList;