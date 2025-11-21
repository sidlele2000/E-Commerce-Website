import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Slices/CartSlice';
import { Box, Typography } from '@mui/material';
import ProductCard from '../../Components/Card/Card';
// import Search from '../../Components/Search/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product() {
  // const [products, setProducts] = useState([]);
  const products=useSelector((state)=>state.products.value)
  console.log(products)
  useEffect(() => {
    console.log(products)
  }, [products]);

// const [search, setSearch] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();
  // useEffect(() => {
  //   const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())
  // );
  // }, [products]);
 

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const data = await fetchProducts();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   getProducts();
  // }, []);

  

  return (
    <>
      <ToastContainer />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Typography variant="h6" fontSize={40} fontWeight="bold">
          Our Products
        </Typography>
      </Box>

      {/* <Search search={search} setSearch={setSearch} /> */}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
          gap: 3,
          p: 5,
          m: 5,
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            dispatch={dispatch}
            addToCart={addToCart}
            navigate={navigate}
          />
        ))}
      </Box>
    </>
  );
}

export default Product;
