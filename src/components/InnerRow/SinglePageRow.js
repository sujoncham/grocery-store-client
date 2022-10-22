
const SinglePageRow = ({product}) => {
    const {img, title, descrip, price, stock, dealer} = product;
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h1 class="text-5xl font-bold">{title}</h1>
                <p class="py-6">{descrip}</p>
                <p class="py-6">{stock}</p>
                <p class="py-6">{price}</p>
                <p class="py-6">{dealer}</p>
                <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePageRow;