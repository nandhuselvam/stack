// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {/* Render cart items here */}
    </div>
  );
};

export default CartPage;
