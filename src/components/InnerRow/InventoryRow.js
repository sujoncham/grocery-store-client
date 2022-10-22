import { useNavigate } from "react-router-dom";

const InventoryRow = ({product}) => {
    const {_id, img, title, descrip, price, stock, dealer} = product;
    const navigate = useNavigate();

    const handleInventory = (id) =>{
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img className="shadow-xl" src={img} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Description: {descrip}</p>
                <p>Price: {price}/Ltr</p>
                <p>Stock: {stock} Pcs</p>
                <p>Dealer: {dealer}</p>
                <div className="card-actions justify-center">
                <button onClick={()=>handleInventory(_id)} className="btn btn-primary">see details</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryRow;