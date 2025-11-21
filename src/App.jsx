import './index.css';
import Header from './Components/Header/Header'
import Product from './Pages/Product/Product'
import EmblaCarousel from './Components/Slider/Slider';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './Slices/ProductSlice';

function App() {
  const options = { loop: true };
  
  return (
    <Router>
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EmblaCarousel options={options} />
                <Product />
              </>
            }
          />
           <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;