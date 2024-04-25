// CartPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from './slice';

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    // Fetch data from the provided link and set items in the store
    // This is where you would make your fetch call to get the JSON data
    // For demonstration purposes, let's assume you already have the data
    const data = [
      { id: 1, name: 'Item 1', price: 10, quantity: 1 },
      { id: 2, name: 'Item 2', price: 20, quantity: 1 },
    ]; // Sample data
    dispatch(setItems(data));
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncreaseQuantity(item)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item)}>-</button>
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
