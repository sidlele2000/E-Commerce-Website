import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Rating, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../Slices/CartSlice";
import DiscountIcon from '@mui/icons-material/Discount';
// import { fetchProductDetails } from "../../app/api";

const discountPrice = (price) => price * 0.9;

function ProductDetails() {
  const {id}=useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currProduct, setCurrProducts] = useState();
  const products=useSelector((state)=>state.products.value)

  

  useEffect(() => {
    setCurrProducts(products.filter((obj)=>{
      console.log(id)
      if(obj.id==id) return true;
      else return false;
    })[0]
  
  )

    console.log(currProduct)
  }, [id,products]);

  // console.log(id)
  // useEffect(() => {
  //    const getProductDetails = async () => {
  //      try {
  //        const data = await fetchProductDetails();
  //        setProducts(data);
  //      } catch (error) {
  //        console.error("Error fetching products:", error);
  //      }
  //    };
  //    if(id){
  //    getProductDetails();
  //    }
  //  }, [id]);

  if (!currProduct) {
    return (
      <Typography variant="h6" textAlign="center" mt={4}>
        Product Not Found
      </Typography>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(currProduct));
    navigate("/cart");
  };

  return (
    <Box sx={{ maxWidth: 1500, mt: 6, mx: "auto", py: 12 }}>
      <Card sx={{ p: 4, display: "flex", gap: 4, boxShadow: 3 }}>

        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <img
            src={currProduct.image}
            alt={currProduct.title}
            style={{ height: "300px", objectFit: "contain", background: "lightgrey", padding: "60px", margin: "30px" }}
          />
        </Box>

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold">
            {currProduct.title}
          </Typography>

          <Rating
            value={currProduct.rating?.rate || 0}
            precision={0.5}
            readOnly
            sx={{ mt: 1 }}
          />
          <Typography
            variant="body1"
            sx={{
              textDecoration: "line-through",
              color: "black",
              fontSize: 20,
              whiteSpace: "nowrap",
            }}
          >
            ${currProduct.price}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "blue",
              fontWeight: 700,
              fontSize: 26,
              whiteSpace: "nowrap",
            }}
          >
            ${(discountPrice(currProduct.price)).toFixed(2)}
          </Typography>
          <Typography fontSize={14} fontWeight={700} color="primary" sx={{ mt: 2 }}>
            Secure Delivery in 2 Days
          </Typography>


          <Typography fontSize={16} sx={{ mt: 2 }}>{currProduct.description}</Typography>
          <Box>
            <Typography variant="h6" sx={{ mt: 2, fontSize: 20, fontWeight: 700 }}>
              Bank and Card Offers
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ display: "flex", alignItems: "center", lineHeight: 1.8 }}>
                <DiscountIcon style={{ marginRight: 6, color: "#0a345dff" }} />
                <strong>Partner Offer:</strong> Buy this & Get 5% off upto $200 on other products, Only for you
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <DiscountIcon style={{ marginRight: 6, color: "#0a345dff" }} />
                <strong>Bank Offer:</strong> 5% cashback on Axis Bank Debit Card up to $200
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <DiscountIcon style={{ marginRight: 6, color: "#0a345dff" }} />
                <strong>Bank Offer:</strong> Flat $50 off on Kotak Mahindra Bank Debit Card. Min Booking Amount: $500
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <DiscountIcon style={{ marginRight: 6, color: "#0a345dff" }} />
                <strong>Bank Offer:</strong> 5% cashback on SBI Credit Card upto $500 per calendar quarter
              </Typography>
            </Box>

          </Box>
          <Divider sx={{ my: 2 }} />

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18} fontWeight={600}>Product Features and Brands</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>This product has various different features also the costing of this product is resenable buy this product now</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18} fontWeight={600}>Category</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>The category of this product is {currProduct.category}. also other different category products are available on our website</Typography>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ display: "block", gap: 3, mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                flex: 1,
                py: 1.3,
                m: 1,
                fontSize: 18,
                color: "primary"
              }}
              onClick={() => navigate("/")}
            >
              Back To Home
            </Button>
            <Button
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                flex: 1,
                py: 1.3,
                fontSize: 18,
                backgroundColor: "#0a345dff",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetails;
