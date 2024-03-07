// CartPage component
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './store/cartSlice';
import CartItem from './CartItem';

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  useEffect(() => {
    // Fetch data and add to cart on component mount
    fetchData().then(data => {
      if (data) {
        data.forEach(item => dispatch(addItem(item)));
      }
    });
  }, [dispatch]);

  const handleIncrease = id => {
    dispatch(updateQuantity({ id, quantity: items.find(item => item.id === id).quantity + 1 }));
  };

  const handleDecrease = id => {
    dispatch(updateQuantity({ id, quantity: items.find(item => item.id === id).quantity - 1 }));
  };

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalPrice}</p>
    </div>
  );
};

export default CartPage;
