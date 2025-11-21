import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Slices/CartSlice";
import CartItem from "../../Components/CartItem/CartItem";
import CartItemFooter from "../../Components/CartItemFooter/CartItemFooter";
import PersonalDetails from "../../Components/PersonalDetails/PersonalDetails";
import Address from "../../Components/Address/Address";
import Billing from "../../Components/Billing/Billing";
import PaymentProcessing from "../../Components/PaymentProcessing/Processing";
import PaymentSuccess from "../../Components/Payment/Payment";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartStep, setCartStep] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const [personalInfo, setPersonalInfo] = useState({ name: "", email: "", phone: "" });
  const [address, setAddress] = useState({ street: "", city: "", state: "", zipcode: "" });

  const steps = ["Cart", "Personal Information", "Delivery Address", "Billing", "Payment"];

  const discountPrice = (price) => price * 0.9;
  const totalPrice = cartItems.reduce((total, item) => total + discountPrice(item.price) * item.quantity, 0);

  const nextStep = () => {
    if (cartStep === 0 && cartItems.length === 0) return;
    setCartStep((prev) => prev + 1);
  };

  const reset = () => {
    dispatch(clearCart());
    setCartStep(0);
  };

  return (
    <Box sx={{ p: 4, mt: 6, maxWidth: "1200px", margin: "0 auto" }}>
      <Button variant="outlined" sx={{ mb: 3, fontSize: 16 }} onClick={() => navigate("/")}>
        Back to Home
      </Button>

      <Stepper activeStep={cartStep} alternativeLabel sx={{ mt: 10 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ fontSize: 24 }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {cartStep === 0 && (
        <Box sx={{ mt: 5, pt: 2 }}>
          {cartItems.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center", mt: 6, fontSize: 28 }}>
              Your cart is empty
            </Typography>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} discountPrice={discountPrice} />)
          )}

          {cartItems.length > 0 && (
            <CartItemFooter
              totalPrice={totalPrice}
              nextStep={nextStep}
              dispatch={dispatch}
              clearCart={clearCart}
            />
          )}
        </Box>
      )}

      {cartStep === 1 && <PersonalDetails personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} nextStep={nextStep} />}

      {cartStep === 2 && <Address address={address} setAddress={setAddress} nextStep={nextStep} />}

      {cartStep === 3 && (
        <Billing
          personalInfo={personalInfo}
          address={address}
          totalPrice={totalPrice}
          nextStep={() => {
            setFinalTotal(totalPrice);
            setCartStep(4);
          }}
        />
      )}

      {cartStep === 4 && <PaymentProcessing setCartStep={setCartStep} dispatch={dispatch} clearCart={clearCart} />}

      {cartStep === 5 && <PaymentSuccess totalPrice={finalTotal} reset={reset} />}
    </Box>
  );
}



export default Cart;
