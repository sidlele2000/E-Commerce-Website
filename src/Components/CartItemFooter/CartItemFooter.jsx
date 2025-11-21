import { Box, Typography, Button, Divider } from "@mui/material";

function CartItemFooter({ totalPrice, nextStep, clearCart, dispatch }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ mb: 2, fontSize: 24 }}>
        Total Amount: ${totalPrice.toFixed(2)}
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0a345dff",
            fontSize: 16,
            px: 4,
            py: 1.2,
            "&:hover": { backgroundColor: "#021e3aff" },
          }}
          onClick={nextStep}
        >
          Proceed
        </Button>

        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: 16, px: 3, py: 1.2 }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
}

export default CartItemFooter;
