import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function PaymentSuccess({ totalPrice, reset }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
        maxWidth: 600,
        mx: "auto",
        p: 5,
        borderRadius: 4,
        bgcolor: "rgba(255,255,255,0.9)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 100, color: "success.main" }} />

      <Typography variant="h4" fontWeight={700} sx={{ mt: 2 }}>
        Payment Successful!
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, color: "text.secondary", px: 4 }}>
        Your order has been placed successfully.
      </Typography>

      <Box
        sx={{
          mt: 4,
          p: 3,
          bgcolor: "#f5f5f5",
          borderRadius: 3,
          textAlign: "left",
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography sx={{ fontSize: 20, mb: 1 }}>
          <strong>Order Total:</strong> ${totalPrice.toFixed(2)}
        </Typography>
        <Typography sx={{ fontSize: 18 }}>
          <strong>Status:</strong> Paid
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          py: 1.4,
          fontSize: 18,
          borderRadius: 3,
          backgroundColor: "#0a345dff",
          "&:hover": { backgroundColor: "#021e3aff" },
          width: "50%",
        }}
        onClick={reset}
      >
        Back to Cart
      </Button>
    </Box>
  );
}

export default PaymentSuccess;
