import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStock from './components/AddStock/AddStock';
import UpdateStock from './components/AddStock/UpdateStock';
import Login from './components/AuthenLogin/Login';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Home from './components/Pages/Home';
import Inventory from './components/Pages/Inventory';
import Page404 from './components/Pages/Page404';
import Footer from './components/SharedPart/Footer';
import Header from './components/SharedPart/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/addStock' element={<AddStock></AddStock>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:inventoryId' element={<UpdateStock></UpdateStock>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
