// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slicelice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
