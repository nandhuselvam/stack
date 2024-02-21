// CartPage.js
import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          {/* Add functionality to remove item from cart */}
        </div>
      ))}
    </div>
  );
};

export default CartPage;
