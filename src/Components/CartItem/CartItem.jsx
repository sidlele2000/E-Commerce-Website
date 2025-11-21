import { Card, Box, Typography, Rating, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../Slices/CartSlice";

function CartItem({ item, discountPrice }) {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        mb: 3,
        p: 2,
        borderRadius: 4,
        display: "flex",
        gap: 3,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 3,
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={700} sx={{ fontSize: 22 }}>
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, fontSize: 16, maxWidth: "85%" }}
        >
          {item.description.slice(0, 150)}...
        </Typography>

        <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            onClick={() => dispatch(decrementQuantity(item.id))}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#f0f0f0",
              color: "#0a345dff",
              fontWeight: 700,
              fontSize: 20,
              "&:hover": { bgcolor: "#d9e4ff" },
            }}
          >
            -
          </Button>

          <Typography sx={{ mx: 1.5, fontSize: 18, fontWeight: 600 }}>
            {item.quantity}
          </Typography>

          <Button
            onClick={() => dispatch(incrementQuantity(item.id))}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#0a345dff",
              color: "#fff",
              fontWeight: 700,
              fontSize: 20,
              "&:hover": { bgcolor: "#021e3aff" },
            }}
          >
            +
          </Button>
        </Box>

        <Typography
          sx={{ textDecoration: "line-through", color: "black", fontSize: 20 }}
        >
          ${item.price}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "blue", fontWeight: 700, fontSize: 26 }}
        >
          ${(discountPrice(item.price) * item.quantity).toFixed(2)}
        </Typography>

        <Rating
          value={item.rating?.rate || 0}
          precision={0.5}
          readOnly
          size="medium"
          sx={{ mt: 1 }}
        />
        <Box>
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: "#0a345dff" }}
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove Item
        </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
