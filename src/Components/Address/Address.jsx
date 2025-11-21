import { Box, Typography, TextField, Button } from "@mui/material";

function Address({ address, setAddress, nextStep }) {
  return (
    <Box sx={{ mt: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
        Delivery Address
      </Typography>

      <TextField
        required
        label="Street Address"
        fullWidth
        sx={{ mb: 2 }}
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
      />

      <TextField
        required
        label="City"
        fullWidth
        sx={{ mb: 2 }}
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      />

      <TextField
        required
        label="State"
        fullWidth
        sx={{ mb: 2 }}
        value={address.state}
        onChange={(e) => setAddress({ ...address, state: e.target.value })}
      />

      <TextField
        required
        label="Zip Code"
        fullWidth
        sx={{ mb: 2 }}
        value={address.zipcode}
        onChange={(e) => setAddress({ ...address, zipcode: e.target.value })}
      />

      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#0a345dff", fontSize: 16 }}
        onClick={nextStep}
      >
        Next
      </Button>
    </Box>
  );
}

export default Address;
