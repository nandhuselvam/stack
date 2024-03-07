// CartItem component
import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onIncrease(item.id)}>+</button>
      <button onClick={() => onDecrease(item.id)}>-</button>
    </div>
  );
};

export default CartItem;
