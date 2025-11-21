import { Box, Typography, CircularProgress } from "@mui/material";
import { useEffect } from "react";

function PaymentProcessing({ setCartStep, dispatch, clearCart }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearCart());
      setCartStep(5); // move to success page
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, setCartStep, clearCart]);

  return (
    <Box sx={{ textAlign: "center", mt: 6 }}>
      <CircularProgress size={70} />
      <Typography sx={{ mt: 3, fontSize: 22 }}>Processing Payment...</Typography>
    </Box>
  );
}

export default PaymentProcessing;
