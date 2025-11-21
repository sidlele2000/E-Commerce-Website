import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productReducer from "../Slices/ProductSlice"
import logger from 'redux-logger'; 
import cartReducer from '../Slices/CartSlice';
const store = configureStore({ //configure store calls all the reducer functions in single call
  reducer: {
    cart: cartReducer,
    products:productReducer
  }
});

export default store;
