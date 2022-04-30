import React from "react";

const StockTable = ({store, index}) => {
    const {title, price, stock} = store;
 
  return (
    
        <tr>
          <td>{index + 1}</td>
          <td>{title}</td>
          <td>{price}</td>
          <td>{stock}</td>
          <td> <button className="btn btn-primary">Edit</button> | <button className="btn btn-primary">Delete</button> </td>
        </tr>
        
    
  );
};

export default StockTable;
