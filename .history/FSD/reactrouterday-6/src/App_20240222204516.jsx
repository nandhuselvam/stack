// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './actions';
import CartPage from './CartPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData()); // Fetch data from the provided link
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartPage />
    </div>
  );
};

export default App;
