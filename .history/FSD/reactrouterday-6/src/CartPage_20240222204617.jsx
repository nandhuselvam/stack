// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './actions';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Price: {item.price}</div>
            <div>
              Quantity: {item.quantity}
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div>Total Quantity: {totalQuantity}</div>
      <div>Total Amount: {totalAmount}</div>
    </div>
  );
};

export default CartPage;
