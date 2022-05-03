import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStockHouse from "../../hooks/useStockHouse";
import StockTable from "./StockTable";

const StockList = () => {
  const [stores] = useStockHouse();
  return (
    <Container>
      
      <Row>
          <div className="col-md-12 d-flex justify-content-between align-items-center mt-5 mb-4">
          <h1>Stock List</h1> <Link to='/addStock'> <button className="btn btn-primary">Add Stock</button> </Link>
          </div>
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Entried By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store, index) => (
                <StockTable index={index} key={store._id} store={store}></StockTable>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default StockList;
