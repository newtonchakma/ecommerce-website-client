import logo from './logo.svg';
import './App.css';
import Navbar from './Component/SharePage/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/HomePage/Banner/Home';

function App() {
  return (
    <div className="">
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
