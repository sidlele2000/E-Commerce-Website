import "../../index.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../assets/website-logo.png";
import "./Header.css";
import { Typography } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.items.length);
  return (
    <Box sx={{ flex: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#074a7dff", py: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="logo"
              height="80"
              className="header-logo"
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 4, fontSize:20 }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ textTransform: "none", fontSize: 18 }}
            >
              <Typography sx={{fontSize:22}}>Home</Typography>
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/products"
              sx={{ textTransform: "none", fontSize: 18 }}
            >
            <Typography sx={{fontSize:22}}>Products</Typography>
            </Button>

            <Button
              color="inherit"
              component={Link}
              sx={{ textTransform: "none", fontSize: 18 }}
            >
            <Typography sx={{fontSize:22}}>About</Typography>
            </Button>

            <Button
              color="inherit"
              component={Link}
              sx={{ textTransform: "none", fontSize: 18 }}
            >
            <Typography sx={{fontSize:22}}>Contact</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              onClick={() =>{ 
                console.log("User Clicked on the Cart Icon")
                console.log("Redirecting User to Cart Component")
                navigate("/cart")}}
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
              </Badge>
            </IconButton>

            <IconButton size="large" color="inherit">
              <AccountCircle sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;