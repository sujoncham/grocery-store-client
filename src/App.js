import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/AuthenLogin/Login";
import Register from "./components/AuthenLogin/Register";
import RequireAuth from "./components/AuthenLogin/RequireAuth";
import AddInventory from "./components/ManageInventory/AddInventory";
import EmailInfo from "./components/ManageInventory/EmailInfo";
import InventoryDataUpdate from "./components/ManageInventory/InventoryDataUpdate";
import InventoryDeliver from "./components/ManageInventory/InventoryDeliver";
import InventoryList from "./components/ManageInventory/InventoryList";
import MyItem from "./components/ManageInventory/MyItem";
import SingleInventoryUpdate from "./components/ManageInventory/SingleInventoryUpdate";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Home from "./components/Pages/Home";
import Inventory from "./components/Pages/Inventory";
import Page404 from "./components/Pages/Page404";
import Footer from "./components/SharedPart/Footer";
import Header from "./components/SharedPart/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/emailInfo" element={<EmailInfo></EmailInfo>}></Route>
        <Route path="/AddInventory" element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          } ></Route>
        <Route path="/InventoryList" element={
            <RequireAuth>
              <InventoryList></InventoryList>
            </RequireAuth>
          } ></Route>
        
        <Route path="/inventory/:inventoryId" element={ <InventoryDeliver></InventoryDeliver>} ></Route>
        <Route path="/singleStock/:inventorySingleId" element={
            <RequireAuth>
              <SingleInventoryUpdate></SingleInventoryUpdate>
            </RequireAuth>
          }></Route>
          <Route path="/InventoryDataUpdate/:updateDataId" element={
            <RequireAuth>
              <InventoryDataUpdate></InventoryDataUpdate>
            </RequireAuth>
          }></Route>
          <Route path="/myItem/" element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
