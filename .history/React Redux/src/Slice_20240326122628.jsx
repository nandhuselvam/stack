// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store items from JSON
  cart: [], // Array to store items in the cart
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { setItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = slice.actions;


export default slice.reducer;
