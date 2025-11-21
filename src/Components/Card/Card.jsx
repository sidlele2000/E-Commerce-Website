import { Card, CardActionArea, CardContent, CardActions, Box, Typography, Rating,Chip } from "@mui/material";
import ProductButtons from "../Button/Buttons";

function ProductCard({ product, dispatch, addToCart, navigate }) {
    const discountPrice = (product.price * 0.9).toFixed(2);

    return (
        <Card sx={{ backgroundColor: '#efeded', position: "relative" }}>
            <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ height: '200px', objectFit: 'contain' }}
                    />
                </Box>

                <CardContent>
                    <Typography variant="h6" fontWeight="bold" fontSize={22}>
                        {product.title.length > 30 ? product.title.slice(0, 20) + '...' : product.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" fontSize={20}>
                        {product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
                    </Typography>

                    <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography sx={{ textDecoration: "line-through", color: "black", fontSize: 20 }}>
                            ${product.price}
                        </Typography>

                        <Typography sx={{ color: "blue", fontWeight: 700, fontSize: 26 }}>
                            ${discountPrice}
                        </Typography>
                            <Chip
                                label="10% OFF"
                                color="primary"
                                size="small"
                                sx={{ fontWeight: "bold" }}
                            />
                    </Box>

                    <Rating
                        name="read-only"
                        value={product.rating?.rate || 0}
                        precision={0.5}
                        readOnly
                        sx={{ mt: 1 }}
                    />
                </CardContent>
            </CardActionArea>

            <CardActions sx={{ p: 3 }}>
                <ProductButtons product={product} dispatch={dispatch} addToCart={addToCart} navigate={navigate} />
            </CardActions>
        </Card>
    );
}

export default ProductCard;
