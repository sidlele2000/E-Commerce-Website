import { Box, Typography, TextField, Button } from "@mui/material";

function PersonalDetails({ personalInfo, setPersonalInfo, nextStep }) {
  return (
    <form>
      <Box sx={{ mt: 4, maxWidth: 800, mx: "auto" }}>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
          Personal Information
        </Typography>

        <TextField
          required
          label="Full Name"
          fullWidth
          sx={{ mb: 2 }}
          value={personalInfo.name}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, name: e.target.value })
          }
        />

        <TextField
          required
          label="Email"
          fullWidth
          sx={{ mb: 2 }}
          value={personalInfo.email}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
        />

        <TextField
          required
          label="Phone Number"
          fullWidth
          sx={{ mb: 2 }}
          value={personalInfo.phone}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
        />

        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#0a345dff", fontSize: 18 }}
          onClick={nextStep}
        >
          Next
        </Button>
      </Box>
    </form>
  );
}

export default PersonalDetails;
