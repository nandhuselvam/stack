import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
          <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}
      {/* Display total quantity and total amount here */}
    </div>
  );
};

export default CartPage;