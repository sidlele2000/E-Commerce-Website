import { Button, Chip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DescriptionIcon from '@mui/icons-material/Description';
import { toast } from 'react-toastify';
import './Buttons.css'

function ProductButtons({ product, dispatch, addToCart, navigate }) {
  return (
    <>
    <div className="cart-buttons">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(addToCart(product));
          toast.success("Product Added To Cart", {
            position: "top-center",
            autoClose: 2000,
          });
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 20, width:30}} />
        Add To Cart
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#0a345dff',
          '&:hover': { backgroundColor: '#021e3aff' },
        }}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <DescriptionIcon sx={{ fontSize: 20, mr: 1 }} /> Details
      </Button>
      </div>
     
    </>
  );
}

export default ProductButtons;
