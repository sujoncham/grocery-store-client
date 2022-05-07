import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import useStockHouse from "../../hooks/useStockHouse";

const InventoryList = () => {
  const [user] = useAuthState(auth);
  const [stores, setStores] = useStockHouse();
  const navigate = useNavigate();

  const handleDeleteStock = (id) => {
    const confirmDelete = window.confirm("Are you want to delete this Stock!!");
    if (confirmDelete) {
      const url = `https://dry-oasis-82123.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log("delete successfully", data);
          const result = stores.filter(store => store._id !== id);
          setStores(result);
          toast("Product deleted successfully");
        });
    }
  };

  const handleEditNavigate = (id) =>{
    navigate(`/updateData/${id}`)
}


  return (
    <Container>
      <Row>
          <div className="col-md-12 d-flex justify-content-between align-items-center mt-5 mb-4">
          <h1>Stock List</h1> <Link to='/AddInventory'> <button className="btn btn-warning">Add Stock</button> </Link>
          </div>
        <div className="col-md-12 mb-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>EntryBy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              stores.map((store, index) => (
               
                  <tr index={index} key={store._id} store={store}>
                    <td>{index + 1}</td>
                    <td>{store.title}</td>
                    <td>{store.price}</td>
                    <td>{store.stock}</td>
                    <td>{user?.displayName.slice(0, 6)}</td>
                    <td>
                    <span style={{cursor: 'pointer'}} onClick={()=>handleEditNavigate(store._id)} className='text-warning border border-primary me-1'>Edit</span>
                      <span style={{cursor: 'pointer'}} onClick={()=>handleDeleteStock(store._id)} className='text-danger border border-primary ps-1 pe-1 cursor-pointer'><i className="fa fa-trash"></i></span>
                    </td>
                  </tr>
              
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default InventoryList;