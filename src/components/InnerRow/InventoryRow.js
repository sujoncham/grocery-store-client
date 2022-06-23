
const InventoryRow = ({product}) => {
    const {img, title, descrip, price, stock, dealer} = product;
    return (
        <div class="card w-100 bg-base-100 shadow-xl">
            <figure><img src={img} alt="product" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{descrip}</p>
                <p>{price}</p>
                <p>{stock}</p>
                <p>{dealer}</p>
                <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryRow;