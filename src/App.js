import logo from './logo.svg';
import './App.css';
import Navbar from './Component/SharePage/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/HomePage/Banner/Home';
import ProductsDetail from './Component/HomePage/ProductDetail/ProductsDetail';
import Login from './Component/Login/Login';
import SignUp from './Component/Login/SignUp';
import RequireAuth from './Component/SharePage/RequireAuth';

function App() {
  return (
    <div className="">
      <Navbar/>
    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path='/productDetail' element={<ProductsDetail/>}/> */}
        <Route path='/productDetail/:product' element={<RequireAuth>
          <ProductsDetail/>
        </RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
