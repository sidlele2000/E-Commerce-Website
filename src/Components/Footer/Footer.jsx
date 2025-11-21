import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#074a7dff',
        color: 'white', 
        padding: 4, 
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
    <Typography variant="body2" color="inherit" fontSize={24}>
        © 2025 Borcelle Shop. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link color="inherit" sx={{ mx: 1, fontSize:22 }}>
          Privacy Policy
        </Link>
        <Link color="inherit" sx={{ mx: 1 , fontSize:22}}>
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;