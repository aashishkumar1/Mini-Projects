import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
