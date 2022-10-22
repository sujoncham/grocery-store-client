import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/Authenticate/Login';
import Register from './components/Authenticate/Register';
import AllProductList from './components/Dashboard/AllProductList';
import AllUserList from './components/Dashboard/AllUserList';
import Greetings from './components/Dashboard/Greetings';
import ProductAdd from './components/Dashboard/ProductAdd';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SingleOrderPage from './components/InnerRow/SingleOrderPage';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Dashboard from './components/Pages/Dashboard';
import Home from './components/Pages/Home';
import Inventory from './components/Pages/Inventory';
import Page404 from './components/Pages/Page404';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<SingleOrderPage></SingleOrderPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<Greetings></Greetings>}></Route>
          <Route path='allProductList' element={<AllProductList></AllProductList>}></Route>
          <Route path='allUserList' element={<AllUserList></AllUserList>}></Route>
          <Route path='productAdd' element={<ProductAdd></ProductAdd>}></Route>
        </Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
