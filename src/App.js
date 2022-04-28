import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/SharedPart/Header';
import Footer from './components/SharedPart/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
        <Route path='/'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
