import { Box, Typography, Button } from "@mui/material";

function Billing({ personalInfo, address, totalPrice, nextStep }) {
  return (
    <Box
      sx={{
        mt: 6,
        maxWidth: 600,
        mx: "auto",
        p: 4,
        borderRadius: 4,
        bgcolor: "rgba(255,255,255,0.85)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3, textAlign: "center" }}>
        Billing Details
      </Typography>

      {/* Personal Info */}
      <Box sx={{ mb: 3, p: 2, borderRadius: 3, bgcolor: "#fafafa", border: "1px solid #ddd" }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>Personal Information</Typography>
        <Typography sx={{ fontSize: 17 }}>Name: {personalInfo.name}</Typography>
        <Typography sx={{ fontSize: 17 }}>Email: {personalInfo.email}</Typography>
        <Typography sx={{ fontSize: 17 }}>Phone: {personalInfo.phone}</Typography>
      </Box>

      {/* Address */}
      <Box sx={{ mb: 3, p: 2, borderRadius: 3, bgcolor: "#fafafa", border: "1px solid #ddd" }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>Delivery Address</Typography>
        <Typography sx={{ fontSize: 17 }}>
          {address.street}, {address.city}, {address.state} - {address.zipcode}
        </Typography>
      </Box>

      {/* Total */}
      <Box
        sx={{
          mb: 3,
          p: 3,
          borderRadius: 3,
          bgcolor: "#f0f0f0",
          border: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography sx={{ fontSize: 17, fontWeight: 600 }}>
          Total Amount: ${totalPrice.toFixed(2)}
        </Typography>
      </Box>

      {/* Proceed */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          py: 1.5,
          fontSize: 18,
          borderRadius: 3,
          backgroundColor: "#0a345dff",
          "&:hover": { backgroundColor: "#021e3aff" },
        }}
        onClick={nextStep}
      >
        Proceed to Payment
      </Button>
    </Box>
  );
}

export default Billing;
