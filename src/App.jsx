import './index.css';
import Header from './Components/Header/Header'
import Product from './Pages/Product/Product'
import EmblaCarousel from './Components/Slider/Slider';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer'


function App() {
  const options = { loop: true };
  
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;