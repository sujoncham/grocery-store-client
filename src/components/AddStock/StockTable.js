import React from "react";
import { useNavigate } from "react-router-dom";
import useStockHouse from "../../hooks/useStockHouse";

const StockTable = ({ store, index }) => {
  const { _id, title, price, stock } = store;
  const [stores, setStores] = useStockHouse();
  const navigate = useNavigate();

  const handleDeleteStock = (id) => {
    const confirmDelete = window.confirm("Are you want to delete this Stock!!");
    if (confirmDelete) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("delete successfully", data);
          const remainingStock = stores.filter((store) => store._id !== id);
          setStores(remainingStock);
        });
    }
  };

  const handleEditNavigate = (id) =>{
    navigate(`/updateData/${id}`)
}

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>
      <button onClick={()=>handleEditNavigate(_id)} className='btn btn-primary'>Edit</button>
        ||
        <button onClick={() => handleDeleteStock(_id)} className="btn btn-primary">Delete</button>
      </td>
    </tr>
  );
};

export default StockTable;
