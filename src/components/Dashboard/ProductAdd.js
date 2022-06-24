import { toast } from "react-toastify";

const ProductAdd = () => {

    const handleAddProduct = (event)=>{
        event.preventDefault();
        const title = event.target.title.value;
        const descrip = event.target.descrip.value;
        const price = event.target.price.value;
        const stock = event.target.stock.value;
        const dealer = event.target.dealer.value;
        const img = event.target.image.value;
        const product = {
            title,
            descrip,
            price,
            stock,
            dealer,
            img,
        }

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(product),
        })
        .then(res => res.json())
        .then(inserted =>{
            console.log(inserted);
            if(inserted.insertedId){
                toast('Add product successfull');
                
            }
        })
    }

    return (
        <div className="sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-content-center">
                <div className="items-center text-center lg:px-20 md:px-14">
                    <h2 className="text-center text-3xl">Add Product</h2>
                    <form onSubmit={handleAddProduct}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" name="descrip" className="textarea textarea-bordered" placeholder="Description here"></textarea>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input type="number" name="stock" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Dealer</span>
                            </label>
                            <input type="text" name="dealer" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="text-center mt-10">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default ProductAdd;