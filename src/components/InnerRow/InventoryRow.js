
const InventoryRow = ({product}) => {
    const {img, title, descrip, price, stock, dealer} = product;
    return (
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img src={img} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{descrip}</p>
                <p>{price}</p>
                <p>{stock}</p>
                <p>{dealer}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryRow;